// Drop slots: spawn, remove, candidate bookkeeping. Slots are recycled through a free list; ids grow
// monotonically so ties are always broken the same way (R4 3.2 rule 5).

import { cbrt } from './fmath.ts';
import { L, logEvent } from './log.ts';
import { CAND_FINISHED, CAND_OUT, CAND_RACING, KIND_CAND, type RaceState, raceTick } from './state.ts';

/** Returns the slot, or -1 when the glass is full (logged once per tick at most). */
export function spawnDrop(s: RaceState, x: number, y: number, v: number, kind: number): number {
  const d = s.drops;
  let i: number;
  if (d.freeTop > 0) {
    d.freeTop--;
    i = d.free[d.freeTop];
  } else if (d.n < d.cap) {
    i = d.n;
    d.n++;
  } else {
    logEvent(s.log, s.tick, L.SPAWN_FULL, v, 0, 0);
    return -1;
  }
  d.id[i] = d.nextId++;
  d.x[i] = x;
  d.y[i] = y;
  d.v[i] = v;
  d.a[i] = cbrt(v / s.p.CAP_K, 1.5);
  d.vx[i] = 0;
  d.vy[i] = 0;
  d.alive[i] = 1;
  d.moving[i] = 0;
  d.kind[i] = kind;
  d.cand[i] = -1;
  d.burst[i] = 0;
  d.jolt[i] = 0;
  d.stuck[i] = 0;
  d.held[i] = -1;
  d.contact[i] = 0;
  d.shedAcc[i] = 0;
  d.nextShed[i] = s.p.SHED_GAP_MIN * d.a[i];
  d.shedCount[i] = 0;
  d.parent[i] = 0;
  d.parentUntil[i] = 0;
  return i;
}

export function killDrop(s: RaceState, i: number): void {
  const d = s.drops;
  if (!d.alive[i]) return;
  d.alive[i] = 0;
  d.moving[i] = 0;
  d.held[i] = -1;
  d.free[d.freeTop] = i;
  d.freeTop++;
}

/** Candidate c now lives in drop slot `slot` (at creation, or when a picked drop keeps its identity in a merge). */
export function makeCandidate(s: RaceState, slot: number, c: number): void {
  s.drops.kind[slot] = KIND_CAND;
  s.drops.cand[slot] = c;
  s.cands.slot[c] = slot;
  s.cands.dropId[c] = s.drops.id[slot];
}

/** A candidate leaves the race (gutter, gulped, evaporated, carried by a leaf). */
export function candidateOut(s: RaceState, c: number, reason: number, by: number): void {
  const k = s.cands;
  if (k.state[c] !== CAND_RACING) return;
  k.state[c] = CAND_OUT;
  k.outTick[c] = raceTick(s);
  k.endX[c] = s.drops.x[k.slot[c]];
  k.endY[c] = s.drops.y[k.slot[c]];
  k.outReason[c] = reason;
  k.gulpedBy[c] = by;
  logEvent(s.log, s.tick, L.CAND_OUT, c, reason, by);
}

/** A candidate crosses the rear seal. The exact crossing time is interpolated inside the tick. */
export function candidateFinish(s: RaceState, c: number, x: number, vx: number): void {
  const k = s.cands;
  if (k.state[c] !== CAND_RACING) return;
  k.state[c] = CAND_FINISHED;
  k.endX[c] = x;
  k.endY[c] = s.drops.y[k.slot[c]];
  const rt = raceTick(s);
  k.finishTick[c] = rt;
  let back = vx > 0 ? (x - s.p.FINISH_X) / vx : 0;
  if (back > s.dt) back = s.dt;
  if (back < 0) back = 0;
  k.finishTime[c] = rt * s.dt - back;
  logEvent(s.log, s.tick, L.CAND_FINISH, c, k.finishTime[c], 0);
}
