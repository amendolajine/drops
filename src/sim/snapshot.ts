// Read-only views of a race: snapshot() for the renderer, the debug overlay and tests (allocates; never
// called by step), hashState() for the golden tests, and English log lines for the debug overlay.

import { carKmhAt } from './car.ts';
import { imul, sqrt } from './fmath.ts';
import { L, logEntryIndex } from './log.ts';
import type { Stream } from './rng.ts';
import {
  CAND_FINISHED,
  CAND_OUT,
  CR_GONE,
  CR_LANDED,
  CREATURE_KINDS,
  EVENT_PHASES,
  OUT_REASONS,
  PHASES,
  PLAYER,
  PROFILES,
  type RaceState,
  RESULT_REASONS,
  RIVAL,
  raceTick,
  raceTime,
} from './state.ts';

export interface DropView {
  id: number;
  x: number;
  y: number;
  volume: number;
  radius: number;
  vx: number;
  vy: number;
  speed: number;
  moving: boolean;
  kind: 'ambient' | 'candidate' | 'pearl';
  cand: number;
  held: boolean;
}

export interface CandidateView {
  index: number;
  dropId: number;
  state: 'racing' | 'finished' | 'out';
  finishTime: number;
  outReason: string;
  startX: number;
  startY: number;
  startVolume: number;
  /** hidden generator profile: for debug and tests only, never shown to the player */
  profile: string;
  owner: 'player' | 'rival' | null;
}

export interface Snapshot {
  simVersion: number;
  seed: string;
  variant: string;
  light: string;
  glassKind: string;
  tick: number;
  raceTime: number;
  phase: string;
  carKmh: number;
  drops: DropView[];
  candidates: CandidateView[];
  picks: { player: number; rival: number };
  knocksLeft: { player: number; rival: number };
  knocksLocked: boolean;
  events: {
    type: string;
    phase: string;
    warnTime: number;
    startTime: number;
    endTime: number;
    x: number;
    y: number;
  }[];
  creatures: { kind: string; x: number; y: number; r: number; landed: boolean }[];
  stickers: { x: number; y: number; r: number }[];
  director: {
    fastForward: boolean;
    slowMo: boolean;
    breath: boolean;
    predictedGap: number;
    leadSwaps: number;
    leadSwapsAfterHalf: number;
  };
  result: {
    decided: boolean;
    winner: 'player' | 'rival' | 'draw' | null;
    reason: string;
    decidedTime: number;
    gap: number;
  };
  log: { tick: number; time: number; text: string }[];
}

const KIND_NAMES = ['ambient', 'candidate', 'pearl'] as const;

export function snapshot(s: RaceState, logLines = 20): Snapshot {
  const d = s.drops;
  const drops: DropView[] = [];
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i]) continue;
    const vx = d.vx[i];
    const vy = d.vy[i];
    drops.push({
      id: d.id[i],
      x: d.x[i],
      y: d.y[i],
      volume: d.v[i],
      radius: d.a[i],
      vx,
      vy,
      speed: hyp(vx, vy),
      moving: d.moving[i] === 1,
      kind: KIND_NAMES[d.kind[i]],
      cand: d.cand[i],
      held: d.held[i] >= 0,
    });
  }
  drops.sort((u, v) => u.id - v.id);
  const k = s.cands;
  const candidates: CandidateView[] = [];
  for (let c = 0; c < k.count; c++) {
    candidates.push({
      index: c,
      dropId: k.dropId[c],
      state: k.state[c] === CAND_FINISHED ? 'finished' : k.state[c] === CAND_OUT ? 'out' : 'racing',
      finishTime: k.finishTime[c],
      outReason: OUT_REASONS[k.outReason[c]],
      startX: k.startX[c],
      startY: k.startY[c],
      startVolume: k.startV[c],
      profile: PROFILES[k.profile[c]],
      owner: s.picks[PLAYER] === c ? 'player' : s.picks[RIVAL] === c ? 'rival' : null,
    });
  }
  const sec = (t: number) => (t < 0 ? -1 : t * s.dt);
  const r = s.result;
  const winner = r.winner === 1 ? 'player' : r.winner === 2 ? 'rival' : r.winner === 3 ? 'draw' : null;
  const stickers = [];
  for (let i = 0; i + 2 < s.glass.stickers.length; i += 3) {
    stickers.push({ x: s.glass.stickers[i], y: s.glass.stickers[i + 1], r: s.glass.stickers[i + 2] });
  }
  return {
    simVersion: s.simVersion,
    seed: s.seed,
    variant: s.variant,
    light: s.light,
    glassKind: s.glass.kind,
    tick: s.tick,
    raceTime: raceTime(s),
    phase: PHASES[s.phase],
    carKmh: s.greenTick < 0 ? 0 : carKmhAt(s, raceTick(s)),
    drops,
    candidates,
    picks: { player: s.picks[PLAYER], rival: s.picks[RIVAL] },
    knocksLeft: { player: s.knocks.left[PLAYER], rival: s.knocks.left[RIVAL] },
    knocksLocked: s.knocks.locked === 1,
    events: s.events.map((e) => ({
      type: e.type,
      phase: EVENT_PHASES[e.phase],
      warnTime: e.warnTick * s.dt,
      startTime: e.startTick * s.dt,
      endTime: e.endTick * s.dt,
      x: e.x,
      y: e.y,
    })),
    creatures: s.creatures
      .filter((c) => c.state !== CR_GONE || c.landTick >= 0)
      .map((c) => ({ kind: CREATURE_KINDS[c.kind], x: c.x, y: c.y, r: c.r, landed: c.state === CR_LANDED })),
    stickers,
    director: {
      fastForward: s.director.fastForwardTick >= 0,
      slowMo: s.director.slowMoTick >= 0,
      breath: s.director.breathTick >= 0,
      predictedGap: s.director.predictedGap,
      leadSwaps: s.director.leadSwaps,
      leadSwapsAfterHalf: s.director.leadSwapsAfterHalf,
    },
    result: {
      decided: r.reason !== 0,
      winner,
      reason: RESULT_REASONS[r.reason],
      decidedTime: sec(r.decidedTick),
      gap: r.gap,
    },
    log: logLinesOf(s, logLines),
  };
}

function hyp(x: number, y: number): number {
  return sqrt(x * x + y * y);
}

function fmt(n: number, digits: number): string {
  return n.toFixed(digits);
}

function side(who: number): string {
  return who === PLAYER ? 'you' : who === RIVAL ? 'brother' : 'nobody';
}

/** The last `count` log entries as English lines (oldest first). */
export function logLinesOf(s: RaceState, count: number): { tick: number; time: number; text: string }[] {
  const log = s.log;
  const out: { tick: number; time: number; text: string }[] = [];
  const first = log.count > count ? log.count - count : 0;
  for (let k = first; k < log.count; k++) {
    const i = logEntryIndex(log, k);
    const t = log.tick[i];
    const time = s.greenTick < 0 || t < s.greenTick ? -1 : (t - s.greenTick) * s.dt;
    out.push({ tick: t, time, text: describe(s, log.code[i], log.a[i], log.b[i], log.c[i]) });
  }
  return out;
}

export function describe(s: RaceState, code: number, a: number, b: number, c: number): string {
  const ev = (i: number) => s.events[i]?.type ?? '?';
  const cr = (i: number) => CREATURE_KINDS[s.creatures[i]?.kind ?? 0];
  switch (code) {
    case L.GREEN:
      return 'green light: race starts';
    case L.EVENT_WARN:
      return `warning: ${ev(a)} coming`;
    case L.EVENT_START:
      return `${ev(a)} starts`;
    case L.EVENT_END:
      return `${ev(a)} ends`;
    case L.FLY_LAND:
      return `fly lands at ${fmt(b, 0)},${fmt(c, 0)} mm`;
    case L.FLY_NO_LAND:
      return `fly stays away: car at ${fmt(b, 0)} km/h`;
    case L.CREATURE_GONE:
      return `${cr(a)} gone (${['let go', 'knocked off', 'surfed off', 'carried drops away', 'never landed'][b] ?? '?'})`;
    case L.LEAF_LAND:
      return `${CREATURE_KINDS[c] ?? 'leaf'} sticks, holding ${b} drops`;
    case L.LEAF_SURF:
      return `${cr(a)} surfs back with its drops`;
    case L.LEAF_CARRY:
      return `${cr(a)} peels off and takes its drops`;
    case L.KNOCK:
      return `${side(a)} knock at ${fmt(b, 1)},${fmt(c, 1)} mm`;
    case L.SCARE_OK:
      return `${side(a)} scared the ${cr(b)} away`;
    case L.SCARE_FAIL:
      return `the ${cr(b)} holds on (miss ${c})`;
    case L.JOLT:
      return `${side(a)} jolted drop #${b}${c >= 0 ? ` (candidate ${c})` : ''}`;
    case L.STOP_IT:
      return `"stop it!" (${side(a)} has no knocks left)`;
    case L.KNOCK_LOCKED:
      return `${side(a)} knock ignored: final straight`;
    case L.KNOCK_COOLDOWN:
      return `${side(a)} knock ignored: too soon`;
    case L.PICK:
      return `${side(a)} picked drop ${b}`;
    case L.MERGE_PICKED:
      return `candidate ${a} swallowed a drop (+${fmt(b, 2)} uL)`;
    case L.GULP:
      return `gulp! candidate ${a} swallowed candidate ${b}`;
    case L.CAND_FINISH:
      return `candidate ${a} reached the seal at ${fmt(b, 2)} s`;
    case L.CAND_OUT:
      return `candidate ${a} out: ${OUT_REASONS[b] ?? '?'}`;
    case L.LEAD_SWAP:
      return `lead swap: ${side(a)} ahead (${fmt(b * 100, 0)}% of the path)`;
    case L.FAST_FORWARD:
      return 'race decided: fast-forward';
    case L.SLOWMO:
      return `photo finish coming: slow motion (gap ${fmt(a, 2)} s)`;
    case L.BREATH:
      return `close finish: breath (gap ${fmt(a, 2)} s)`;
    case L.ANTI_STALL:
      return 'faster road: +30 km/h';
    case L.HARD_END:
      return '"we are here!" 90 s hard end';
    case L.RESULT:
      return `result: ${a === 1 ? 'you win' : a === 2 ? 'brother wins' : 'draw'} (${RESULT_REASONS[b] ?? '?'})`;
    case L.SPAWN_FULL:
      return 'glass full: rain drop skipped';
    case L.LIGHTNING:
      return 'lightning';
    case L.FINAL_STRAIGHT:
      return 'final straight: knocks locked';
    case L.BLOCKED:
      return `candidate ${a} blocked by the ${cr(b)}`;
    case L.RIVAL_NOTICE:
      return `brother noticed the ${cr(a)}${b ? '' : ' (will not knock)'}`;
    default:
      return `event ${code}`;
  }
}

// ---------- hash ----------

const buf = new DataView(new ArrayBuffer(8));

function mix(h: number, v: number): number {
  return imul(h ^ (v | 0), 0x01000193);
}

function mixF(h: number, v: number): number {
  if (Number.isNaN(v)) v = -123456789; // NaN bits can differ between engines: hash a fixed value instead
  buf.setFloat64(0, v, true);
  h = mix(h, buf.getUint32(0, true));
  return mix(h, buf.getUint32(4, true));
}

function mixStream(h: number, st: Stream): number {
  return mix(mix(mix(mix(h, st.a), st.b), st.c), st.d);
}

/** FNV-1a style hash of everything that can change the race. 8 hex characters. */
export function hashState(s: RaceState): string {
  let h = 0x811c9dc5 | 0;
  h = mix(h, s.tick);
  h = mix(h, s.greenTick);
  h = mix(h, s.phase);
  const st = s.streams;
  h = mixStream(h, st.rain);
  h = mixStream(h, st.events);
  h = mixStream(h, st.car);
  h = mixStream(h, st.rival);
  h = mixStream(h, st.knock);
  h = mixStream(h, st.preroll);
  const d = s.drops;
  h = mix(h, d.n);
  h = mix(h, d.nextId);
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i]) continue;
    h = mix(h, d.id[i]);
    h = mixF(h, d.x[i]);
    h = mixF(h, d.y[i]);
    h = mixF(h, d.v[i]);
    h = mixF(h, d.a[i]);
    h = mix(h, d.moving[i] | (d.kind[i] << 1) | ((d.cand[i] + 1) << 4) | ((d.held[i] + 1) << 8));
    h = mix(h, d.burst[i]);
    h = mix(h, d.jolt[i]);
    h = mixF(h, d.shedAcc[i]);
  }
  const w = s.glass.wet;
  for (let i = 0; i < w.length; i++) if (w[i] !== 0) h = mixF(mix(h, i), w[i]);
  const k = s.cands;
  for (let c = 0; c < k.count; c++) {
    h = mix(h, k.state[c]);
    h = mix(h, k.finishTick[c]);
    h = mixF(h, k.finishTime[c]);
    h = mix(h, k.outReason[c]);
  }
  h = mix(h, s.picks[PLAYER]);
  h = mix(h, s.picks[RIVAL]);
  h = mix(h, s.knocks.left[PLAYER]);
  h = mix(h, s.knocks.left[RIVAL]);
  h = mix(h, s.knocks.locked);
  for (let i = 0; i < s.creatures.length; i++) {
    const c = s.creatures[i];
    h = mix(h, c.state);
    h = mixF(h, c.x);
    h = mix(h, c.failedKnocks);
  }
  h = mix(h, s.result.winner);
  h = mix(h, s.result.reason);
  h = mix(h, s.result.decidedTick);
  h = mixF(h, s.director.emaVx[PLAYER]);
  h = mixF(h, s.director.emaVx[RIVAL]);
  h = mix(h, s.director.leadSwaps);
  return (h >>> 0).toString(16).padStart(8, '0');
}
