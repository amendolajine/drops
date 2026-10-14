// The event schedule (MAP 3.3): decided by the seed when the race is created, before any pick, and never
// told which drops were picked. Every event is a field modifier, a mass source or an obstacle, never a
// per-drop script (R4 3.5), so "events never target a drop" is true by construction.

import { candidateOut, killDrop } from './drops.ts';
import { round } from './fmath.ts';
import { L, logEvent } from './log.ts';
import type { LightProfile, Params } from './params.ts';
import { chance, int, next, range, type Stream } from './rng.ts';
import {
  CR_FLY,
  CR_GONE,
  CR_LANDED,
  CR_LEAF,
  CR_PAPER,
  CR_WAITING,
  type Creature,
  EV_ACTIVE,
  EV_DONE,
  EV_SCHEDULED,
  EV_WARNED,
  type EventType,
  OUT_LEAF,
  type RaceState,
  type SimEvent,
} from './state.ts';

export interface Schedule {
  events: SimEvent[];
  creatures: Creature[];
  lightning: Int32Array;
}

/**
 * Where creatures land: uniform in the band where the pack of drops is expected at that time, from the
 * start box and the typical race speed only (never from the picks or the live race). MAP 3.3 allows
 * "uniform on the glass or weighted by drop density"; this is the density of the race at that moment.
 */
function packX(p: Params, t: number, u: number): number {
  const centre = (p.CAND_X_MIN + p.CAND_X_MAX) / 2 + p.PACK_SPEED * t;
  const x = centre + (u < 0 ? u * p.PACK_BEHIND : u * p.PACK_AHEAD);
  return x < 40 ? 40 : x > p.FINISH_X - 15 ? p.FINISH_X - 15 : x;
}

function sec(p: Params, s: number): number {
  return round(s * p.TICK_HZ);
}

function newCreature(kind: number, event: number, x: number, y: number, r: number): Creature {
  return {
    kind,
    event,
    x,
    y,
    r,
    state: CR_WAITING,
    landTick: -1,
    lastTick: -1,
    gripKmh: 999,
    failedKnocks: 0,
    outcome: 0,
    releaseTick: -1,
    surfing: 0,
    goneWhy: 0,
    triesPlayer: 0,
    triesRival: 0,
  };
}

/** Build the whole schedule from the events stream. Inputs: params and light only (never picks). */
export function buildSchedule(p: Params, lp: LightProfile, ev: Stream): Schedule {
  // 1. which events happen (independent chances, MAP 3.3 frequencies)
  const wanted: EventType[] = [];
  if (chance(ev, lp.bump)) wanted.push('bump');
  if (chance(ev, lp.brake)) wanted.push('brake');
  if (chance(ev, lp.leaf)) wanted.push('leaf');
  if (chance(ev, lp.downpour)) wanted.push('downpour');
  if (chance(ev, lp.clearing)) wanted.push('clearing');
  // MAP 3.3 "da 1 a 3": a race never goes without an event. Pick one with the light's own weights.
  if (wanted.length === 0) {
    const w = [lp.bump, lp.brake, lp.leaf, lp.downpour, lp.clearing];
    const names: EventType[] = ['bump', 'brake', 'leaf', 'downpour', 'clearing'];
    let total = 0;
    for (let i = 0; i < w.length; i++) total += w[i];
    let u = next(ev) * total;
    let k = 0;
    while (k < w.length - 1 && u >= w[k]) {
      u -= w[k];
      k++;
    }
    wanted.push(names[k]);
  }
  // shuffle so no type is always first
  for (let i = wanted.length - 1; i > 0; i--) {
    const j = int(ev, i + 1);
    const t = wanted[i];
    wanted[i] = wanted[j];
    wanted[j] = t;
  }
  // 2. times: inside [quiet start, cutoff], at least EVENT_GAP_S apart, at most EVENT_MAX
  const starts: number[] = [];
  const types: EventType[] = [];
  for (let k = 0; k < wanted.length && types.length < p.EVENT_MAX; k++) {
    for (let tryN = 0; tryN < 16; tryN++) {
      const t = range(ev, p.EVENT_QUIET_S, p.EVENT_CUTOFF_S);
      let ok = true;
      for (let j = 0; j < starts.length; j++) {
        const d = starts[j] - t;
        if ((d < 0 ? -d : d) < p.EVENT_GAP_S) ok = false;
      }
      if (ok) {
        starts.push(t);
        types.push(wanted[k]);
        break;
      }
    }
  }
  // order by time (insertion sort: small and stable)
  for (let i = 1; i < starts.length; i++) {
    for (let j = i; j > 0 && starts[j - 1] > starts[j]; j--) {
      const t = starts[j];
      starts[j] = starts[j - 1];
      starts[j - 1] = t;
      const y = types[j];
      types[j] = types[j - 1];
      types[j - 1] = y;
    }
  }
  // 3. details for each event
  const events: SimEvent[] = [];
  const creatures: Creature[] = [];
  for (let k = 0; k < types.length; k++) {
    const type = types[k];
    const t0 = starts[k];
    const e: SimEvent = {
      type,
      warnTick: sec(p, t0 - p.WARN_S),
      startTick: sec(p, t0),
      endTick: sec(p, t0),
      x: -1,
      y: -1,
      kmh: 0,
      creature: -1,
      phase: EV_SCHEDULED,
    };
    if (type === 'bump') {
      e.endTick = sec(p, t0 + p.BUMP_S);
      events.push(e);
    } else if (type === 'brake') {
      const hold = range(ev, p.BRAKE_HOLD_MIN, p.BRAKE_HOLD_MAX);
      e.kmh = chance(ev, p.BRAKE_STOP_CHANCE) ? 0 : p.BRAKE_KMH;
      e.endTick = sec(p, t0 + p.BRAKE_DOWN_S + hold + p.BRAKE_UP_S);
      events.push(e);
      // a fly may come while the car is slow (it lands only under FLY_MAX_KMH). It belongs to this braking's
      // slot (D024) and, like every event, never lands after the cutoff (MAP 3.3).
      const earliest = t0 + p.BRAKE_DOWN_S + 0.3;
      const latestByBrake = t0 + p.BRAKE_DOWN_S + (hold > 0.8 ? hold - 0.5 : 0.3);
      const latest = latestByBrake < p.EVENT_CUTOFF_S ? latestByBrake : p.EVENT_CUTOFF_S;
      if (chance(ev, lp.flyGivenBrake) && latest >= earliest) {
        const land = range(ev, earliest, latest);
        const life = range(ev, p.FLY_LIFE_MIN, p.FLY_LIFE_MAX);
        const fx = packX(p, land, range(ev, -1, 1));
        const fy = range(ev, p.PACK_Y_MIN, p.PACK_Y_MAX);
        const cr = newCreature(CR_FLY, events.length, fx, fy, p.FLY_R);
        cr.gripKmh = range(ev, p.FLY_GRIP_MIN, p.FLY_GRIP_MAX);
        const fe: SimEvent = {
          type: 'fly',
          warnTick: sec(p, land - p.WARN_S),
          startTick: sec(p, land),
          endTick: sec(p, land + life),
          x: fx,
          y: fy,
          kmh: 0,
          creature: creatures.length,
          phase: EV_SCHEDULED,
        };
        creatures.push(cr);
        events.push(fe);
      }
    } else if (type === 'leaf') {
      const hold = range(ev, p.LEAF_HOLD_MIN, p.LEAF_HOLD_MAX);
      e.x = packX(p, t0, range(ev, -1, 1));
      e.y = range(ev, p.PACK_Y_MIN, p.PACK_Y_MAX);
      const cr = newCreature(CR_LEAF, events.length, e.x, e.y, range(ev, p.LEAF_R_MIN, p.LEAF_R_MAX));
      cr.outcome = chance(ev, 0.5) ? 0 : 1;
      e.endTick = sec(p, t0 + hold);
      e.creature = creatures.length;
      creatures.push(cr);
      events.push(e);
    } else if (type === 'downpour') {
      e.warnTick = sec(p, t0 - p.DOWNPOUR_WARN_S);
      e.endTick = sec(p, t0 + p.DOWNPOUR_S);
      events.push(e);
    } else {
      e.warnTick = sec(p, t0 - p.CLEAR_WARN_S);
      e.endTick = sec(p, t0 + range(ev, p.CLEAR_MIN_S, p.CLEAR_MAX_S));
      events.push(e);
    }
  }
  // 4. lightning (cosmetic, storm light only): 1-3 flashes at least LIGHTNING_GAP_S apart
  let lightning = new Int32Array(0);
  if (lp.lightning > 0 && chance(ev, lp.lightning)) {
    const n = 1 + int(ev, 3);
    lightning = new Int32Array(n);
    let t = range(ev, 2, 10);
    for (let i = 0; i < n; i++) {
      lightning[i] = sec(p, t);
      t += p.LIGHTNING_GAP_S + range(ev, 0, 12);
    }
  }
  return { events, creatures, lightning };
}

function landCreature(s: RaceState, ci: number, rt: number): void {
  const p = s.p;
  const c = s.creatures[ci];
  if (c.kind === CR_FLY) {
    if (s.car.kmh >= p.FLY_MAX_KMH) {
      // MAP 3.3: no fly lands on a fast car
      c.state = CR_GONE;
      c.goneWhy = 4;
      logEvent(s.log, s.tick, L.FLY_NO_LAND, ci, s.car.kmh, 0);
      return;
    }
    c.state = CR_LANDED;
    c.landTick = rt;
    c.lastTick = s.events[c.event].endTick;
    logEvent(s.log, s.tick, L.FLY_LAND, ci, c.x, c.y);
    return;
  }
  // leaf, or paper on a fast car (MAP 3.3 event 24)
  if (s.car.kmh > p.PAPER_KMH) c.kind = CR_PAPER;
  c.state = CR_LANDED;
  c.landTick = rt;
  const d = s.drops;
  let held = 0;
  const r2 = c.r * c.r;
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i] || d.held[i] >= 0) continue;
    const dx = d.x[i] - c.x;
    const dy = d.y[i] - c.y;
    if (dx * dx + dy * dy <= r2) {
      d.held[i] = ci;
      d.moving[i] = 0;
      held++;
    }
  }
  logEvent(s.log, s.tick, L.LEAF_LAND, ci, held, c.kind);
}

/** The creature leaves: why 0 time/speed, 1 knock, 2 surfed off the glass, 3 carried the drops away. */
export function creatureGone(s: RaceState, ci: number, why: number): void {
  const c = s.creatures[ci];
  if (c.state === CR_GONE) return;
  c.state = CR_GONE;
  c.goneWhy = why;
  const d = s.drops;
  if (c.kind !== CR_FLY) {
    for (let i = 0; i < d.n; i++) {
      if (d.held[i] !== ci) continue;
      if (why === 3) {
        if (d.cand[i] >= 0) candidateOut(s, d.cand[i], OUT_LEAF, -1);
        killDrop(s, i);
      } else {
        d.held[i] = -1;
      }
    }
  }
  const e = s.events[c.event];
  if (e && e.phase !== EV_DONE) e.phase = EV_DONE;
  logEvent(s.log, s.tick, L.CREATURE_GONE, ci, why, c.kind);
}

/** Advance the schedule by one tick: phases, field modifiers, creatures. Called before drop physics. */
export function updateEvents(s: RaceState, rt: number): void {
  const p = s.p;
  s.fx.pinMul = 1;
  s.fx.rainMul = 1;
  s.fx.evap = 0;
  s.fx.gMul = 1;
  const evs = s.events;
  for (let k = 0; k < evs.length; k++) {
    const e = evs[k];
    if (e.phase === EV_DONE) continue;
    if (e.phase === EV_SCHEDULED && rt >= e.warnTick) {
      e.phase = EV_WARNED;
      logEvent(s.log, s.tick, L.EVENT_WARN, k, 0, 0);
    }
    if (e.phase === EV_WARNED && rt >= e.startTick) {
      e.phase = EV_ACTIVE;
      logEvent(s.log, s.tick, L.EVENT_START, k, 0, 0);
      if (e.creature >= 0) landCreature(s, e.creature, rt);
    }
    if (e.phase !== EV_ACTIVE) continue;
    if (e.type === 'bump') {
      // the pothole: pinning drops everywhere and gravity pushes harder for 0.3 s (D025)
      s.fx.pinMul *= p.BUMP_MUL;
      s.fx.gMul += p.BUMP_G_EXTRA;
    } else if (e.type === 'downpour') s.fx.rainMul *= p.DOWNPOUR_MUL;
    else if (e.type === 'clearing') s.fx.evap = 1;
    if (e.creature < 0 && rt >= e.endTick) {
      e.phase = EV_DONE;
      logEvent(s.log, s.tick, L.EVENT_END, k, 0, 0);
    }
  }
  // creatures
  const crs = s.creatures;
  for (let ci = 0; ci < crs.length; ci++) {
    const c = crs[ci];
    if (c.state !== CR_LANDED) continue;
    if (c.kind === CR_FLY) {
      const e = evs[c.event];
      const settled = rt - c.landTick > p.TICK_HZ / 2;
      if (rt >= e.endTick || (settled && s.car.kmh > c.gripKmh)) creatureGone(s, ci, 0);
      continue;
    }
    // leaf or paper
    if (!c.surfing && rt >= evs[c.event].endTick) {
      if (c.outcome === 0) {
        c.surfing = 1;
        logEvent(s.log, s.tick, L.LEAF_SURF, ci, 0, 0);
      } else {
        logEvent(s.log, s.tick, L.LEAF_CARRY, ci, 0, 0);
        creatureGone(s, ci, 3);
        continue;
      }
    }
    if (c.surfing) {
      c.x += p.LEAF_SURF_V * s.dt;
      if (c.x - c.r > p.W) creatureGone(s, ci, 2);
    }
  }
  // lightning (cosmetic)
  for (let i = 0; i < s.lightning.length; i++) {
    if (s.lightning[i] === rt) logEvent(s.log, s.tick, L.LIGHTNING, i, 0, 0);
  }
}
