// Bot players for the balance measures (map 1.2, 3.5 "il test della scelta", 3.4 "cosa misuriamo").
// Pickers: random, always-biggest, best-reader. Knock policies: none, good.
// Bots read the race state like a player reads the screen; they never change the simulation directly,
// they only send the same inputs a person would (pick, knock at a position).

import type { KnockInput } from '../../src/sim/race.ts';
import { rivalScore } from '../../src/sim/rival.ts';
import { makeStream, next, type Stream } from '../../src/sim/rng.ts';
import { CAND_RACING, CR_FLY, CR_LANDED, PLAYER, type RaceState, RIVAL } from '../../src/sim/state.ts';

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

/**
 * "Good" knocking, what an attentive player does. A lower bound of what a person can get out of the knock:
 * - scare a creature on my drop's path: along the way it is actually heading (its last moving direction),
 *   up to 45 mm ahead, within its own width plus the creature's;
 * - a leaf or paper surfing with my drop under it is carrying my drop toward the line: leave it alone;
 *   one holding (or surfing with) the rival's drop is worth a knock; one holding mine before it decides is a
 *   coin toss (surf or carry off), so knock it to be safe;
 * - jolt my drop when it has been stuck for more than JOLT_AFTER while the car is going, and again if it is
 *   still stuck a second later (it may need more than one knock to get off a speck).
 */
export class GoodKnocker {
  private noticed = new Map<number, number>();
  private lastJoltAt = -1;
  private nextAllowed = 0;
  private dirX = 0.96;
  private dirY = 0.27;
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
    const slot = s.cands.slot[c];
    const d = s.drops;
    const x = d.x[slot];
    const y = d.y[slot];
    const a = d.a[slot];
    // remember where my drop is heading (what you see it do)
    const sp = Math.hypot(d.vx[slot], d.vy[slot]);
    if (sp > 0.5) {
      this.dirX = d.vx[slot] / sp;
      this.dirY = d.vy[slot] / sp;
    }
    if (rt < this.nextAllowed) return null;
    const rivalC = s.picks[RIVAL];
    const rivalSlot = rivalC >= 0 && s.cands.state[rivalC] === CAND_RACING ? s.cands.slot[rivalC] : -1;
    // 1. creatures
    for (let ci = 0; ci < s.creatures.length; ci++) {
      const cr = s.creatures[ci];
      if (cr.state !== CR_LANDED) continue;
      const holdsMine = d.held[slot] === ci;
      const holdsHis = rivalSlot >= 0 && d.held[rivalSlot] === ci;
      if (cr.kind !== CR_FLY) {
        if (holdsMine && cr.surfing) continue; // it is carrying my drop toward the line
        if (holdsHis && !holdsMine) {
          if (this.ready(ci, rt)) return this.knock(s, cr.x, cr.y, rt);
          continue;
        }
      }
      let threat = holdsMine;
      if (!threat) {
        const dx = cr.x - x;
        const dy = cr.y - y;
        const along = dx * this.dirX + dy * this.dirY;
        const across = Math.abs(-dx * this.dirY + dy * this.dirX);
        threat = along >= -cr.r && along <= 45 && across <= cr.r + a + 1.5;
      }
      if (threat && this.ready(ci, rt)) return this.knock(s, cr.x, cr.y, rt);
    }
    // 2. my drop is stuck while the car is going: jolt it (again a second later if it is still stuck)
    const stuck = d.stuck[slot];
    if (stuck === 0) this.lastJoltAt = -1;
    else if (
      stuck > JOLT_AFTER_TICKS &&
      d.held[slot] < 0 &&
      s.car.kmh >= 45 &&
      rt > 6 * s.p.TICK_HZ &&
      (this.lastJoltAt < 0 || rt - this.lastJoltAt >= s.p.TICK_HZ)
    ) {
      this.lastJoltAt = rt;
      return this.knock(s, x, y, rt);
    }
    return null;
  }

  /** Seen for at least the reaction time. */
  private ready(ci: number, rt: number): boolean {
    const seen = this.noticed.get(ci);
    if (seen === undefined) {
      this.noticed.set(ci, rt);
      return false;
    }
    return rt - seen >= this.reactTicks;
  }

  private knock(s: RaceState, x: number, y: number, rt: number): KnockInput {
    // with no knock left this becomes the "stop it!" moment: the sim counts it as a wanted knock
    this.nextAllowed = rt + s.p.TICK_HZ;
    return { who: 'player', x, y };
  }
}

/** A stuck drop is jolted after this long (1.2 s): most stops end by themselves within a second. */
const JOLT_AFTER_TICKS = 72;
