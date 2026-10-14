// Bot players for the balance measures (map 1.2, 3.5 "il test della scelta", 3.4 "cosa misuriamo").
// Pickers: random, always-biggest, best-reader. Knock policies: none, good.
// Bots read the race state like a player reads the screen; they never change the simulation directly,
// they only send the same inputs a person would (pick, knock at a position).

import type { KnockInput } from '../../src/sim/race.ts';
import { rivalScore } from '../../src/sim/rival.ts';
import { makeStream, next, type Stream } from '../../src/sim/rng.ts';
import { CAND_RACING, CR_LANDED, PLAYER, type RaceState, RIVAL } from '../../src/sim/state.ts';

export type PickerName = 'random' | 'biggest' | 'best';
export type KnockPolicyName = 'none' | 'good';

/** What a perfect glass reader knows: pairwise chances from rollouts of this glass with other weather. */
export interface Reading {
  /** beats[c][d] = P(candidate c reaches the seal before d), ties and double outs count 0.5 */
  beats: number[][];
  winShare: number[];
}

function available(s: RaceState): number[] {
  const out: number[] = [];
  for (let c = 0; c < s.cands.count; c++) if (c !== s.picks[RIVAL]) out.push(c);
  return out;
}

export function pickRandom(s: RaceState, rng: Stream): number {
  const av = available(s);
  return av[Math.floor(next(rng) * av.length)];
}

export function pickBiggest(s: RaceState): number {
  let best = -1;
  for (const c of available(s)) {
    if (best < 0 || s.drops.v[s.cands.slot[c]] > s.drops.v[s.cands.slot[best]]) best = c;
  }
  return best;
}

/** The rival's habit-driven choice without his 1-in-10 whim: what a player who learned his habits expects. */
export function predictRival(s: RaceState, taken: number): number {
  let best = -1;
  let bestScore = -1e9;
  for (let c = 0; c < s.cands.count; c++) {
    if (c === taken) continue;
    const sc = rivalScore(s, c);
    if (sc > bestScore) {
      bestScore = sc;
      best = c;
    }
  }
  return best;
}

/** Best reader: maximise the chance to beat the rival's drop (known if he picked first, else predicted). */
export function pickBest(s: RaceState, reading: Reading): number {
  let best = -1;
  let bestP = -1;
  for (const c of available(s)) {
    const opp = s.picks[RIVAL] >= 0 ? s.picks[RIVAL] : predictRival(s, c);
    const pr = reading.beats[c][opp];
    if (pr > bestP) {
      bestP = pr;
      best = c;
    }
  }
  return best;
}

export function botRng(seed: string, name: string): Stream {
  return makeStream(`bots|${seed}`, name);
}

/** "Good" knocking: scare a creature in front of or on top of your drop, jolt your drop when it is stuck. */
export class GoodKnocker {
  private noticed = new Map<number, number>();
  private joltedAtStuck = -1;
  private nextAllowed = 0;
  /** reaction time of an attentive player, ticks (0.4 s) */
  private readonly reactTicks: number;
  constructor(reactTicks = 24) {
    this.reactTicks = reactTicks;
  }

  /** Called once per tick before step(); returns the knock to send this tick, if any. */
  decide(s: RaceState): KnockInput | null {
    const c = s.picks[PLAYER];
    if (c < 0 || s.cands.state[c] !== CAND_RACING || s.knocks.locked) return null;
    const rt = s.tick - s.greenTick;
    if (rt < this.nextAllowed) return null;
    const slot = s.cands.slot[c];
    const d = s.drops;
    const x = d.x[slot];
    const y = d.y[slot];
    // 1. a creature ahead of (or holding) my drop
    for (let ci = 0; ci < s.creatures.length; ci++) {
      const cr = s.creatures[ci];
      if (cr.state !== CR_LANDED) continue;
      const dx = cr.x - x;
      const dy = cr.y - y;
      const holdsMine = d.held[slot] === ci;
      const ahead = dx >= -cr.r && dx <= 40 && Math.abs(dy) <= 10 + cr.r;
      if (!holdsMine && !ahead) continue;
      const seen = this.noticed.get(ci);
      if (seen === undefined) {
        this.noticed.set(ci, rt);
        continue;
      }
      if (rt - seen < this.reactTicks) continue;
      return this.knock(s, cr.x, cr.y, rt);
    }
    // 2. my drop is stuck: jolt it (once per stuck spell)
    const stuck = d.stuck[slot];
    if (stuck === 0) this.joltedAtStuck = -1;
    // only when the car is going (scenery moving) and the other drops run: a stuck drop at a stop is normal
    else if (
      stuck > 36 &&
      this.joltedAtStuck < 0 &&
      d.held[slot] < 0 &&
      s.car.kmh >= 45 &&
      rt > 6 * s.p.TICK_HZ
    ) {
      this.joltedAtStuck = stuck;
      return this.knock(s, x, y, rt);
    }
    return null;
  }

  private knock(s: RaceState, x: number, y: number, rt: number): KnockInput {
    // with no knock left this becomes the "stop it!" moment: the sim counts it as a wanted knock
    this.nextAllowed = rt + s.p.TICK_HZ;
    return { who: 'player', x, y };
  }
}
