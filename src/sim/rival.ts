// The rival, a younger brother (MAP 3.5). He sees only the glass, like you: never the bank, never the
// event schedule. Fixed, learnable habits: loves big drops (a drop looks 1.5x bigger to him), prefers his
// lucky corner, ignores feeder drops, avoids drops near dirt, and 1 time in 10 points at a random drop.
// He knocks when he notices a creature ahead of his drop (after 0.8-1.6 s, 3 times in 4), jolts his drop
// when it has been stuck for more than 2 s, and 5% of his knocks land at a random spot.
// His randomness comes from his own stream, so he behaves the same for everyone (MAP 9.3).

import { floor, round } from './fmath.ts';
import { pinAt } from './glass.ts';
import { applyKnock } from './knock.ts';
import { L, logEvent } from './log.ts';
import { chance, int, next, range } from './rng.ts';
import { CAND_RACING, CR_LANDED, PHASE_RACING, PLAYER, type RaceState, RIVAL, raceTick } from './state.ts';

/** True when the pin field within RIVAL_DIRT_R of (x, y) reaches RIVAL_DIRT_LEVEL (visible dirt). */
export function nearDirt(s: RaceState, x: number, y: number): boolean {
  const p = s.p;
  const r = p.RIVAL_DIRT_R;
  for (let yy = floor(y - r); yy <= y + r; yy += 1) {
    for (let xx = floor(x - r); xx <= x + r; xx += 1) {
      const dx = xx + 0.5 - x;
      const dy = yy + 0.5 - y;
      if (dx * dx + dy * dy > r * r) continue;
      if (pinAt(s.glass, xx + 0.5, yy + 0.5) >= p.RIVAL_DIRT_LEVEL) return true;
    }
  }
  return false;
}

/** His score for a candidate: what a 7-year-old sees. */
export function rivalScore(s: RaceState, c: number): number {
  const p = s.p;
  const slot = s.cands.slot[c];
  const v = s.drops.v[slot];
  const y = s.drops.y[slot];
  const cornerY = p.CAND_Y_MIN + (p.CAND_Y_MAX - p.CAND_Y_MIN) / 3;
  let score = v * p.RIVAL_SIZE_LOVE;
  if (y <= cornerY) score += p.RIVAL_CORNER_BONUS;
  if (nearDirt(s, s.drops.x[slot], y)) score -= p.RIVAL_DIRT_PENALTY;
  return score;
}

/** Choose his drop. Never the one the player already took ("mine!"). */
export function rivalChoose(s: RaceState): number {
  const taken = s.picks[PLAYER];
  const n = s.cands.count;
  const whim = chance(s.streams.rival, s.p.RIVAL_WHIM);
  if (whim) {
    const free = taken >= 0 ? n - 1 : n;
    let k = int(s.streams.rival, free);
    for (let c = 0; c < n; c++) {
      if (c === taken) continue;
      if (k === 0) return c;
      k--;
    }
  }
  let best = -1;
  let bestScore = -1e9;
  for (let c = 0; c < n; c++) {
    if (c === taken) continue;
    const sc = rivalScore(s, c) + next(s.streams.rival) * 1e-6;
    if (sc > bestScore) {
      bestScore = sc;
      best = c;
    }
  }
  return best;
}

/** One tick of his attention during the race. */
export function rivalThink(s: RaceState): void {
  if (!s.rivalAuto || s.phase !== PHASE_RACING) return;
  const c = s.picks[RIVAL];
  if (c < 0 || s.cands.state[c] !== CAND_RACING) return;
  const p = s.p;
  const slot = s.cands.slot[c];
  const d = s.drops;
  const m = s.rival;
  const rt = raceTick(s);
  const x = d.x[slot];
  const y = d.y[slot];
  const st = s.streams.rival;
  // a planned knock on a creature he noticed
  if (m.knockTick >= 0 && rt >= m.knockTick) {
    const cr = s.creatures[m.noticed];
    m.knockTick = -1;
    if (m.willKnock && cr.state === CR_LANDED) {
      if (chance(st, p.RIVAL_RANDOM_KNOCK))
        applyKnock(s, RIVAL, range(st, 40, p.FINISH_X), range(st, 10, p.H - 10));
      else applyKnock(s, RIVAL, cr.x, cr.y);
    }
  }
  // notice a creature ahead of his drop
  if (m.knockTick < 0) {
    for (let ci = 0; ci < s.creatures.length; ci++) {
      if (ci === m.noticed) continue;
      const cr = s.creatures[ci];
      if (cr.state !== CR_LANDED) continue;
      const dx = cr.x - x;
      const dy = cr.y - y;
      if (dx >= 0 && dx <= p.RIVAL_SEE_AHEAD && (dy < 0 ? -dy : dy) <= p.RIVAL_SEE_SIDE + cr.r) {
        m.noticed = ci;
        m.knockTick = rt + round(range(st, p.RIVAL_REACT_MIN, p.RIVAL_REACT_MAX) * p.TICK_HZ);
        m.willKnock = chance(st, p.RIVAL_KNOCK_P) ? 1 : 0;
        logEvent(s.log, s.tick, L.RIVAL_NOTICE, ci, m.willKnock, 0);
        break;
      }
    }
  }
  // jolt his own drop when it has been stuck too long (once per stuck spell)
  if (d.stuck[slot] === 0) m.joltedStuck = 0;
  else if (
    !m.joltedStuck &&
    d.stuck[slot] > p.RIVAL_STUCK_S * p.TICK_HZ &&
    s.car.kmh >= p.RIVAL_STUCK_MIN_KMH &&
    s.knocks.left[RIVAL] > 0 &&
    !s.knocks.locked
  ) {
    m.joltedStuck = 1;
    if (chance(st, p.RIVAL_RANDOM_KNOCK))
      applyKnock(s, RIVAL, range(st, 40, p.FINISH_X), range(st, 10, p.H - 10));
    else applyKnock(s, RIVAL, x, y);
  }
}
