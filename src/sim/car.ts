// Car speed profile (MAP 2.1, R4 3.3, 3.10). The race starts at a stop (red light): 0 km/h until green,
// then 0 -> cruise in 3-6 s, cruise 65 +- 5 km/h keyframes every 5 s, scheduled braking events,
// and the anti-stall push (+30 km/h over 3 s at 50 s). A pure function of the race clock and the schedule.

import { ceil, floor, max, round } from './fmath.ts';
import type { Params } from './params.ts';
import { next, range, type Stream } from './rng.ts';
import type { RaceState, SimEvent } from './state.ts';

export function initCar(
  p: Params,
  carStream: Stream,
): { accelS: number; keys: Float64Array; road: Int32Array } {
  const accelS = range(carStream, p.ACCEL_S_MIN, p.ACCEL_S_MAX);
  const n = ceil(p.HARD_END_S / p.CRUISE_KEY_S) + 3;
  const keys = new Float64Array(n);
  for (let i = 0; i < n; i++) keys[i] = (next(carStream) * 2 - 1) * p.CRUISE_JITTER;
  // road texture: start ticks of the small shakes (race ticks), drawn once for the whole race
  const starts: number[] = [];
  let t = range(carStream, p.ROAD_GAP_MIN, p.ROAD_GAP_MAX);
  while (t < p.HARD_END_S + 1) {
    starts.push(round(t * p.TICK_HZ));
    t += range(carStream, p.ROAD_GAP_MIN, p.ROAD_GAP_MAX);
  }
  return { accelS, keys, road: Int32Array.from(starts) };
}

/** True while a road shake is active at race tick rt (binary search over the start ticks). */
export function roadShake(road: Int32Array, rt: number, durTicks: number): boolean {
  let lo = 0;
  let hi = road.length - 1;
  let found = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (road[mid] <= rt) {
      found = mid;
      lo = mid + 1;
    } else hi = mid - 1;
  }
  return found >= 0 && rt < road[found] + durTicks;
}

/** 0..1 weight of a braking event at race tick rt (1 = at the brake's target speed). */
export function brakeWeight(ev: SimEvent, rt: number, tickHz: number, downS: number, upS: number): number {
  if (rt < ev.startTick || rt >= ev.endTick) return 0;
  const down = downS * tickHz;
  const up = upS * tickHz;
  const intoBrake = rt - ev.startTick;
  if (intoBrake < down) return intoBrake / down;
  const toEnd = ev.endTick - rt;
  if (toEnd < up) return toEnd / up;
  return 1;
}

/** Car speed in km/h at race tick rt (negative = before green = standing at the stop). */
export function carKmhAt(s: RaceState, rt: number): number {
  if (rt < 0) return 0;
  const p = s.p;
  const t = rt * s.dt;
  const accel = s.car.accelS;
  const ramp = t < accel ? t / accel : 1;
  const k = t / p.CRUISE_KEY_S;
  let i = floor(k);
  if (i > s.car.keys.length - 2) i = s.car.keys.length - 2;
  const f = k - i;
  const jitter = s.car.keys[i] + (s.car.keys[i + 1] - s.car.keys[i]) * (f > 1 ? 1 : f);
  let v = (p.CRUISE_KMH + jitter) * ramp;
  const evs = s.events;
  for (let e = 0; e < evs.length; e++) {
    const ev = evs[e];
    if (ev.type !== 'brake') continue;
    const w = brakeWeight(ev, rt, p.TICK_HZ, p.BRAKE_DOWN_S, p.BRAKE_UP_S);
    if (w > 0) v = v + (ev.kmh - v) * w;
  }
  if (t > p.ANTI_STALL_S) {
    const u = (t - p.ANTI_STALL_S) / p.ANTI_STALL_RAMP_S;
    v += p.ANTI_STALL_KMH * (u > 1 ? 1 : u);
  }
  return max(0, v);
}
