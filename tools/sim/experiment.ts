// One glass of the balance experiment: rollouts (the "perfect reading" of the glass with other weather),
// then real races for every picker x knock policy, against the rival brain.

import type { Light, ParamOverrides } from '../../src/sim/params.ts';
import { createRace, pick, step } from '../../src/sim/race.ts';
import {
  CAND_FINISHED,
  PHASE_DONE,
  PLAYER,
  PROFILES,
  R_GULP,
  R_GULP_DRAW,
  type RaceState,
  RESULT_REASONS,
  RIVAL,
} from '../../src/sim/state.ts';
import {
  botRng,
  GoodKnocker,
  type KnockPolicyName,
  type PickerName,
  pickBest,
  pickBiggest,
  pickRandom,
  type Reading,
} from './bots.ts';

export const PICKERS: PickerName[] = ['random', 'biggest', 'best'];
export const POLICIES: KnockPolicyName[] = ['none', 'good'];

export interface ExperimentConfig {
  baseSeed: string;
  rollouts: number;
  light: Light;
  params: ParamOverrides;
}

export interface RaceRecord {
  picker: PickerName;
  policy: KnockPolicyName;
  playerFirst: boolean;
  playerPick: number;
  rivalPick: number;
  playerProfile: string;
  rivalProfile: string;
  winner: 'player' | 'rival' | 'draw';
  reason: string;
  decidedTime: number;
  firstFinishTime: number;
  endTime: number;
  bothFinished: boolean;
  gap: number;
  swapsAfterHalf: number;
  swaps: number;
  gulp: boolean;
  slowMo: boolean;
  fastForward: boolean;
  knocksUsed: number;
  wantedMore: boolean;
  rivalKnocksUsed: number;
  ticks: number;
}

export interface GlassRecord {
  index: number;
  seed: string;
  kind: string;
  genFallback: boolean;
  rollouts: {
    winShare: number[];
    medianWinnerTime: number;
    /** share of (pair, rollout) with both finishing within 2 s, over the 15 pairs */
    pairClose2s: number;
    profiles: string[];
    /** volume rank of each candidate, 0 = biggest */
    sizeRank: number[];
    winnerTimes: number[];
  };
  races: RaceRecord[];
  ms: number;
}

function runRollout(seed: string, cfg: ExperimentConfig, r: number): { times: number[] } {
  const s = createRace(seed, { mode: 'rollout', light: cfg.light, params: cfg.params, variant: `read-${r}` });
  while (s.phase !== PHASE_DONE) step(s);
  const times: number[] = [];
  for (let c = 0; c < s.cands.count; c++)
    times.push(s.cands.state[c] === CAND_FINISHED ? s.cands.finishTime[c] : Number.POSITIVE_INFINITY);
  return { times };
}

function median(xs: number[]): number {
  const a = xs.filter((x) => Number.isFinite(x)).sort((u, v) => u - v);
  if (a.length === 0) return Number.NaN;
  const m = a.length >> 1;
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
}

export function readGlass(
  seed: string,
  cfg: ExperimentConfig,
): { reading: Reading; rec: GlassRecord['rollouts'] } {
  const n = 6;
  const beats = Array.from({ length: n }, () => new Array(n).fill(0));
  const wins = new Array(n).fill(0);
  const winnerTimes: number[] = [];
  let close = 0;
  let pairs = 0;
  for (let r = 0; r < cfg.rollouts; r++) {
    const { times } = runRollout(seed, cfg, r);
    let first = -1;
    for (let c = 0; c < n; c++)
      if (Number.isFinite(times[c]) && (first < 0 || times[c] < times[first])) first = c;
    if (first >= 0) {
      wins[first]++;
      winnerTimes.push(times[first]);
    }
    for (let c = 0; c < n; c++) {
      for (let d = 0; d < n; d++) {
        if (c === d) continue;
        const tc = times[c];
        const td = times[d];
        beats[c][d] += tc < td ? 1 : tc === td ? 0.5 : 0;
        if (c < d) {
          pairs++;
          if (Number.isFinite(tc) && Number.isFinite(td) && Math.abs(tc - td) < 2) close++;
        }
      }
    }
  }
  for (let c = 0; c < n; c++) for (let d = 0; d < n; d++) beats[c][d] /= cfg.rollouts;
  const s0 = createRace(seed, { light: cfg.light, params: cfg.params });
  const vols = Array.from({ length: n }, (_, c) => s0.drops.v[s0.cands.slot[c]]);
  const order = vols.map((v, c) => ({ v, c })).sort((a, b) => b.v - a.v || a.c - b.c);
  const sizeRank = new Array(n).fill(0);
  order.forEach((o, k) => {
    sizeRank[o.c] = k;
  });
  return {
    reading: { beats, winShare: wins.map((w) => w / cfg.rollouts) },
    rec: {
      winShare: wins.map((w) => w / cfg.rollouts),
      medianWinnerTime: median(winnerTimes),
      pairClose2s: pairs > 0 ? close / pairs : 0,
      profiles: Array.from(s0.cands.profile, (p) => PROFILES[p]),
      sizeRank,
      winnerTimes,
    },
  };
}

function playRace(
  seed: string,
  cfg: ExperimentConfig,
  playerFirst: boolean,
  picker: PickerName,
  policy: KnockPolicyName,
  reading: Reading,
): RaceRecord {
  const s: RaceState = createRace(seed, {
    light: cfg.light,
    params: cfg.params,
    firstPicker: playerFirst ? 'player' : 'rival',
  });
  const c =
    picker === 'random'
      ? pickRandom(s, botRng(seed, 'random'))
      : picker === 'biggest'
        ? pickBiggest(s)
        : pickBest(s, reading);
  if (!pick(s, 'player', c)) throw new Error(`pick refused: ${seed} ${picker} ${c}`);
  const knocker = policy === 'good' ? new GoodKnocker() : null;
  let ticks = 0;
  while (s.phase !== PHASE_DONE) {
    const k = knocker ? knocker.decide(s) : null;
    step(s, k ? { knocks: [k] } : undefined);
    ticks++;
  }
  const r = s.result;
  const dt = s.dt;
  const pp = s.picks[PLAYER];
  const pr = s.picks[RIVAL];
  return {
    picker,
    policy,
    playerFirst,
    playerPick: pp,
    rivalPick: pr,
    playerProfile: PROFILES[s.cands.profile[pp]],
    rivalProfile: PROFILES[s.cands.profile[pr]],
    winner: r.winner === 1 ? 'player' : r.winner === 2 ? 'rival' : 'draw',
    reason: RESULT_REASONS[r.reason],
    decidedTime: r.decidedTick * dt,
    firstFinishTime: r.firstFinishTick >= 0 ? r.firstFinishTick * dt : -1,
    endTime: r.endTick * dt,
    bothFinished: r.gap >= 0,
    gap: r.gap,
    swapsAfterHalf: s.director.leadSwapsAfterHalf,
    swaps: s.director.leadSwaps,
    gulp: r.reason === R_GULP || r.reason === R_GULP_DRAW,
    slowMo: s.director.slowMoTick >= 0,
    fastForward: s.director.fastForwardTick >= 0,
    knocksUsed: s.knocks.used[PLAYER],
    wantedMore: s.knocks.wanted[PLAYER] > 0,
    rivalKnocksUsed: s.knocks.used[RIVAL],
    ticks,
  };
}

export function runGlass(index: number, cfg: ExperimentConfig): GlassRecord {
  const t0 = performance.now();
  const seed = `${cfg.baseSeed}-${index}`;
  const { reading, rec } = readGlass(seed, cfg);
  const probe = createRace(seed, { light: cfg.light, params: cfg.params });
  // MAP 2.1: odd races the player picks first, even races the rival (race 1 = index 0)
  const playerFirst = index % 2 === 0;
  const races: RaceRecord[] = [];
  const cache = new Map<string, RaceRecord>();
  for (const picker of PICKERS) {
    for (const policy of POLICIES) {
      // same pick + same policy = same race (the sim is deterministic): reuse it
      const tmp = createRace(seed, {
        light: cfg.light,
        params: cfg.params,
        firstPicker: playerFirst ? 'player' : 'rival',
      });
      const c =
        picker === 'random'
          ? pickRandom(tmp, botRng(seed, 'random'))
          : picker === 'biggest'
            ? pickBiggest(tmp)
            : pickBest(tmp, reading);
      const key = `${c}|${policy}`;
      const hit = cache.get(key);
      if (hit) {
        races.push({ ...hit, picker, policy });
        continue;
      }
      const r = playRace(seed, cfg, playerFirst, picker, policy, reading);
      cache.set(key, r);
      races.push(r);
    }
  }
  return {
    index,
    seed,
    kind: probe.glass.kind,
    genFallback: probe.glass.genRetries > 0,
    rollouts: rec,
    races,
    ms: performance.now() - t0,
  };
}
