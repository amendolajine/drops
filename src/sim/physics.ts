// Drop physics for one fixed tick (R4 1.2-1.9, 3.9): three forces, pinning read on the front arc of the contact
// line with hysteresis (stick-slip), per-drop road vibration, speed linear in the excess force, airflow bending
// the path backward, meander toward cleaner glass, obstacles, wet trails, pearls, merges with the identity rules,
// evaporation and rain.

import { decideGulp } from './director.ts';
import { candidateFinish, candidateOut, killDrop, makeCandidate, spawnDrop } from './drops.ts';
import { cbrt, floor, round, sqrt } from './fmath.ts';
import { pinAt, wetIndex } from './glass.ts';
import { L, logEvent } from './log.ts';
import { hash3, hashFloat, next, type Stream } from './rng.ts';
import {
  CR_LANDED,
  KIND_AMBIENT,
  KIND_PEARL,
  OUT_EVAPORATED,
  OUT_GULPED,
  OUT_GUTTER,
  PLAYER,
  type RaceState,
  RIVAL,
} from './state.ts';

// meander probes at +-0.35 rad (about 20 degrees), as literals (R4 3.2 rule 4)
const PROBE_COS = 0.9393727128473789;
const PROBE_SIN = 0.34289780745545134;
// the front arc of the contact line is read at 0 and +-0.7 rad (40 degrees) from the push direction
const ARC_COS = 0.7648421872844885;
const ARC_SIN = 0.644217687237691;

/** A rain drop lands somewhere on the glass, never inside the bottom seal band or on the sticker. */
export function spawnRain(s: RaceState, stream: Stream, rateMul: number): void {
  const p = s.p;
  const rate = s.lightProfile.rainPerS * p.RAIN_SCALE * rateMul;
  if (next(stream) >= rate * s.dt) return;
  const x = next(stream) * p.W;
  const u = next(stream);
  const v = p.RAIN_V_MIN + p.RAIN_V_SPAN * u * u * u;
  const a = cbrt(v / p.CAP_K, 1);
  const y = a + next(stream) * (p.H - 2 * a);
  const st = s.glass.stickers;
  if (st.length === 3) {
    const dx = x - st[0];
    const dy = y - st[1];
    if (dx * dx + dy * dy < st[2] * st[2]) return; // it runs off the sticker
  }
  spawnDrop(s, x, y, v, KIND_AMBIENT);
}

/**
 * This drop's road vibration this tick: 1 (none) or a pinning multiplier in [ROAD_MUL_MIN, ROAD_MUL_MAX].
 * Each drop has its own phase and dice (counter hashes of its id), so restarts are spread out (D025).
 */
export function roadKick(s: RaceState, i: number): number {
  const p = s.p;
  const kmh = s.car.kmh;
  if (kmh < p.ROAD_MIN_KMH) return 1;
  const len = round(p.ROAD_S * p.TICK_HZ);
  const id = s.drops.id[i];
  const phase = hash3(s.roadSeed, id, -1) % len;
  const slot = floor((s.tick + phase) / len);
  const u = hashFloat(s.roadSeed, id, slot);
  // the road shakes the glass harder and more often as the car goes faster: rate ~ speed, strength ~ speed^2
  const f = kmh < p.ROAD_REF_KMH ? kmh / p.ROAD_REF_KMH : 1;
  const chance = p.ROAD_RATE * p.ROAD_S * f;
  if (u >= chance) return 1;
  const full = p.ROAD_MUL_MIN + (p.ROAD_MUL_MAX - p.ROAD_MUL_MIN) * (u / chance);
  return 1 - (1 - full) * f * f;
}

/** Effective pinning of the glass at a point: dirt field x wet trail. */
function edgePin(s: RaceState, x: number, y: number): number {
  const g = s.glass;
  return pinAt(g, x, y) * (1 - s.p.WET_K * g.wet[wetIndex(g, s.p.WET_CELL, x, y)]);
}

/** Wet trails fade with a 25 s half-life, applied every 0.5 s (30 ticks). R4 1.7. */
export function decayWetIfDue(s: RaceState): void {
  if (s.tick % 30 !== 0) return;
  const w = s.glass.wet;
  const f = s.glass.wetDecay;
  for (let i = 0; i < w.length; i++) w[i] *= f;
}

function isPicked(s: RaceState, c: number): boolean {
  return c >= 0 && (s.picks[PLAYER] === c || s.picks[RIVAL] === c);
}

export function stepDrops(s: RaceState): void {
  const p = s.p;
  const d = s.drops;
  const g = s.glass;
  const dt = s.dt;
  const U = s.car.kmh / 3.6;
  const U2 = U * U;
  const W = p.W;
  const H = p.H;
  const FIN = p.FINISH_X;
  const cell = p.WET_CELL;
  const pinMulGlobal = s.fx.pinMul;
  const gMul = s.fx.gMul;
  const wetK = p.WET_K;
  const stick = g.stickers;
  const hasSticker = stick.length === 3;
  const crs = s.creatures;
  const pearlTicks = round(p.PEARL_IGNORE_S * p.TICK_HZ);
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i]) continue;
    // drops under a leaf do not move on their own; a surfing leaf carries them
    if (d.held[i] >= 0) {
      const c = crs[d.held[i]];
      if (c.surfing) {
        d.x[i] += p.LEAF_SURF_V * dt;
        d.vx[i] = p.LEAF_SURF_V;
      } else d.vx[i] = 0;
      d.vy[i] = 0;
      if (d.x[i] >= FIN) {
        if (d.cand[i] >= 0) candidateFinish(s, d.cand[i], d.x[i], d.vx[i]);
        killDrop(s, i);
      }
      continue;
    }
    const a = d.a[i];
    const x = d.x[i];
    const y = d.y[i];
    // 1. driving force: gravity down + wind backward along the local airflow (R4 1.2, 1.10)
    const k = p.FLOW_BASE + p.FLOW_TOP * (1 - y / H);
    const tilt = p.FLOW_SWIRL * (1 - x / W) * (0.5 - y / H);
    const Fw = p.CW * k * a * a * U2;
    const Fx = Fw;
    const Fy = p.G * a * a * a * gMul - Fw * tilt;
    const F = sqrt(Fx * Fx + Fy * Fy);
    // 2. pinning on the front arc of the contact line, where it catches (R4 1.3, Furmidge): the strongest of
    //    three points at radius a, at 0 and +-40 degrees from the push; then events, merge burst, knock jolt
    //    and this drop's road vibration (R4 1.6, 1.7, 1.9)
    const fx0 = F > 0 ? Fx / F : 0;
    const fy0 = F > 0 ? Fy / F : 1;
    let m = edgePin(s, x + fx0 * a, y + fy0 * a);
    const mL = edgePin(s, x + (fx0 * ARC_COS - fy0 * ARC_SIN) * a, y + (fx0 * ARC_SIN + fy0 * ARC_COS) * a);
    const mR = edgePin(s, x + (fx0 * ARC_COS + fy0 * ARC_SIN) * a, y + (-fx0 * ARC_SIN + fy0 * ARC_COS) * a);
    if (mL > m) m = mL;
    if (mR > m) m = mR;
    m *= pinMulGlobal * roadKick(s, i);
    if (d.burst[i] > 0) {
      m *= p.BURST_MUL;
      d.burst[i]--;
    }
    if (d.jolt[i] > 0) {
      m *= p.KNOCK_JOLT_MUL;
      d.jolt[i]--;
    }
    const Fpin = p.PPIN * a * m;
    // 3. stick-slip with hysteresis (static vs dynamic threshold)
    if (!d.moving[i]) {
      if (F > Fpin) d.moving[i] = 1;
    } else if (F < p.DYN * Fpin) d.moving[i] = 0;
    if (!d.moving[i] || F <= 0) {
      d.stuck[i]++;
      d.vx[i] = 0;
      d.vy[i] = 0;
      d.contact[i] = 0;
      // the bottom seal takes a drop whether it moves or not (physics review: pinned drops stayed in the band)
      if (y > H - 0.5 * a) {
        if (d.cand[i] >= 0) candidateOut(s, d.cand[i], OUT_GUTTER, -1);
        killDrop(s, i);
      }
      continue;
    }
    d.stuck[i] = 0;
    // 4. speed linear in the excess force; dissipation along the contact line (R4 1.4)
    let v = (p.KV * (F - p.DYN * Fpin)) / a;
    if (v > p.VMAX) v = p.VMAX;
    if (v < 0) v = 0;
    let ux = Fx / F;
    let uy = Fy / F;
    // 5. meander: turn toward the cleaner / wetter side (R4 1.3)
    const Lp = a + p.STEER_AHEAD;
    const lx = ux * PROBE_COS - uy * PROBE_SIN;
    const ly = ux * PROBE_SIN + uy * PROBE_COS;
    const rx = ux * PROBE_COS + uy * PROBE_SIN;
    const ry = -ux * PROBE_SIN + uy * PROBE_COS;
    const plx = x + lx * Lp;
    const ply = y + ly * Lp;
    const prx = x + rx * Lp;
    const pry = y + ry * Lp;
    const pl = pinAt(g, plx, ply) * (1 - wetK * g.wet[wetIndex(g, cell, plx, ply)]);
    const pr = pinAt(g, prx, pry) * (1 - wetK * g.wet[wetIndex(g, cell, prx, pry)]);
    let bias = (pr - pl) * p.STEER_K;
    if (bias > p.STEER_MAX) bias = p.STEER_MAX;
    else if (bias < -p.STEER_MAX) bias = -p.STEER_MAX;
    {
      const ox = ux;
      ux = ux - uy * bias;
      uy = uy + ox * bias;
      const um = sqrt(ux * ux + uy * uy);
      ux /= um;
      uy /= um;
    }
    let nx = x + ux * v * dt;
    let ny = y + uy * v * dt;
    // 6. obstacles: the sticker, landed creatures; slide along the rim, slowed while touching (R4 3.5)
    let touching = 0;
    if (hasSticker) {
      const dx = nx - stick[0];
      const dy = ny - stick[1];
      const rr = stick[2] + a;
      const dd = dx * dx + dy * dy;
      if (dd < rr * rr) {
        const dl = dd > 0 ? sqrt(dd) : 1;
        nx = stick[0] + (dx / dl) * rr;
        ny = stick[1] + (dy / dl) * rr;
      }
    }
    for (let ci = 0; ci < crs.length; ci++) {
      const c = crs[ci];
      if (c.state !== CR_LANDED) continue;
      const dx = nx - c.x;
      const dy = ny - c.y;
      const rr = c.r + a;
      const dd = dx * dx + dy * dy;
      if (dd < rr * rr) {
        const dl = dd > 0 ? sqrt(dd) : 1;
        nx = c.x + (dx / dl) * rr;
        ny = c.y + (dy / dl) * rr;
        nx = x + (nx - x) * p.CONTACT_SLOW;
        ny = y + (ny - y) * p.CONTACT_SLOW;
        touching = ci + 1;
      }
    }
    if (touching && !d.contact[i] && isPicked(s, d.cand[i])) {
      logEvent(s.log, s.tick, L.BLOCKED, d.cand[i], touching - 1, 0);
    }
    d.contact[i] = touching ? 1 : 0;
    const mx = nx - x;
    const my = ny - y;
    d.vx[i] = mx / dt;
    d.vy[i] = my / dt;
    d.x[i] = nx;
    d.y[i] = ny;
    // 7. wet track (R4 1.7), written at the drop's tail: the advancing edge always meets the glass ahead,
    //    so a drop never rides on its own trail (only followers do)
    g.wet[wetIndex(g, cell, nx - ux * a, ny - uy * a)] = 1;
    // 8. pearls: a fast drop sheds 3% every 2.5a-4.5a; spacing from a counter hash (R4 1.7, 3.2)
    if (v > p.SHED_V && d.v[i] > p.SHED_VMIN) {
      d.shedAcc[i] += sqrt(mx * mx + my * my);
      if (d.shedAcc[i] > d.nextShed[i]) {
        const vd = d.v[i] * p.SHED_FRAC;
        d.v[i] -= vd;
        d.a[i] = cbrt(d.v[i] / p.CAP_K, a);
        const back = d.a[i] + 0.6;
        const j = spawnDrop(s, nx - ux * back, ny - uy * back, vd, KIND_PEARL);
        if (j >= 0) {
          d.parent[j] = d.id[i];
          d.parentUntil[j] = s.tick + pearlTicks;
        }
        d.shedAcc[i] = 0;
        d.shedCount[i]++;
        d.nextShed[i] =
          (p.SHED_GAP_MIN + p.SHED_GAP_SPAN * hashFloat(s.pearlSeed, d.id[i], d.shedCount[i])) * d.a[i];
      }
    }
    // 9. edges: top seal and front edge hold the drop; bottom seal = gutter; rear seal = finish
    const ai = d.a[i];
    if (d.y[i] < ai) d.y[i] = ai;
    if (d.x[i] < ai) d.x[i] = ai;
    if (d.y[i] > H - 0.5 * ai) {
      if (d.cand[i] >= 0) candidateOut(s, d.cand[i], OUT_GUTTER, -1);
      killDrop(s, i);
    } else if (d.x[i] >= FIN) {
      if (d.cand[i] >= 0) candidateFinish(s, d.cand[i], d.x[i], d.vx[i]);
      killDrop(s, i);
    }
  }
}

/** Merge touching drops (R4 1.6, 3.7): volumes add, position by volume, identity rules, gulp rule. */
export function mergeDrops(s: RaceState): void {
  const p = s.p;
  const d = s.drops;
  const head = s.gridHead;
  const nxt = s.gridNext;
  const gw = s.gridW;
  const gh = s.gridH;
  const cs = 8;
  head.fill(-1);
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i] || d.held[i] >= 0) continue;
    let cx = floor(d.x[i] / cs) + 1;
    let cy = floor(d.y[i] / cs) + 1;
    if (cx < 0) cx = 0;
    else if (cx >= gw) cx = gw - 1;
    if (cy < 0) cy = 0;
    else if (cy >= gh) cy = gh - 1;
    const idx = cy * gw + cx;
    nxt[i] = head[idx];
    head[idx] = i;
  }
  const mk = p.MERGE_K;
  const mkRacers = p.RACER_MERGE_K;
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i] || d.held[i] >= 0) continue;
    let cx = floor(d.x[i] / cs) + 1;
    let cy = floor(d.y[i] / cs) + 1;
    if (cx < 1) cx = 1;
    else if (cx > gw - 2) cx = gw - 2;
    if (cy < 1) cy = 1;
    else if (cy > gh - 2) cy = gh - 2;
    for (let oy = -1; oy <= 1 && d.alive[i]; oy++) {
      for (let ox = -1; ox <= 1 && d.alive[i]; ox++) {
        let j = head[(cy + oy) * gw + cx + ox];
        while (j >= 0 && d.alive[i]) {
          const nj = nxt[j];
          if (j !== i && d.alive[j] && d.held[j] < 0 && d.id[j] > d.id[i]) {
            const parentPair =
              (d.kind[j] === KIND_PEARL && d.parent[j] === d.id[i] && s.tick < d.parentUntil[j]) ||
              (d.kind[i] === KIND_PEARL && d.parent[i] === d.id[j] && s.tick < d.parentUntil[i]);
            if (!parentPair) {
              const dx = d.x[j] - d.x[i];
              const dy = d.y[j] - d.y[i];
              const rr = (d.a[i] + d.a[j]) * (d.cand[i] >= 0 && d.cand[j] >= 0 ? mkRacers : mk);
              if (dx * dx + dy * dy <= rr * rr) merge(s, i, j);
            }
          }
          j = nj;
        }
      }
    }
  }
}

function merge(s: RaceState, i: number, j: number): void {
  const p = s.p;
  const d = s.drops;
  const ci = d.cand[i];
  const cj = d.cand[j];
  // keeper: a candidate beats a neutral drop (yours stays yours); else the bigger volume; tie -> lower id (i)
  let k = i;
  let o = j;
  if (ci < 0 && cj >= 0) {
    k = j;
    o = i;
  } else if (ci >= 0 === cj >= 0 && d.v[j] > d.v[i]) {
    k = j;
    o = i;
  }
  const vk = d.v[k];
  const vo = d.v[o];
  const ck = d.cand[k];
  const co = d.cand[o];
  if (ck >= 0 && co >= 0) {
    const pk = s.mode === 'race' && isPicked(s, ck);
    const po = s.mode === 'race' && isPicked(s, co);
    if (s.mode === 'race' && po && !pk) {
      // a picked drop never loses its identity to an unpicked candidate (MAP 2.1 "resta sempre tua",
      // R4 3.7): only the labels move. The drop slots and the physics are exactly those of any other merge,
      // so the glass plays the same whatever was picked.
      logEvent(s.log, s.tick, L.SWALLOW_CAND, co, ck, vk);
      candidateOut(s, ck, OUT_GULPED, co);
      makeCandidate(s, k, co);
    } else if (s.mode === 'race' && pk && !po) {
      logEvent(s.log, s.tick, L.SWALLOW_CAND, ck, co, vo);
      candidateOut(s, co, OUT_GULPED, ck);
    } else {
      // rollout (every candidate races), or two picked drops (the gulp rule), or two unpicked ones
      if (s.mode !== 'race' || (pk && po)) logEvent(s.log, s.tick, L.GULP, ck, co, vo / vk);
      candidateOut(s, co, OUT_GULPED, ck);
      decideGulp(s, ck, co, vk, vo);
    }
  } else if (ck >= 0 && isPicked(s, ck)) {
    logEvent(s.log, s.tick, L.MERGE_PICKED, ck, vo, 0);
  }
  const V = vk + vo;
  d.x[k] = (d.x[k] * vk + d.x[o] * vo) / V;
  d.y[k] = (d.y[k] * vk + d.y[o] * vo) / V;
  d.v[k] = V;
  d.a[k] = cbrt(V / p.CAP_K, d.a[k] > d.a[o] ? d.a[k] : d.a[o]);
  d.burst[k] = round(p.BURST_S * p.TICK_HZ);
  if (d.moving[o]) d.moving[k] = 1;
  if (d.kind[k] === KIND_PEARL) d.kind[k] = KIND_AMBIENT;
  killDrop(s, o);
}

/** Sun break: dV/dt = -c a (pinned contact line, diffusion-limited; D025). Small drops lose a bigger share of
 *  their volume (the share goes as 1/a^2), so they shrink and vanish first (MAP 3.3 event 12). */
export function evaporate(s: RaceState): void {
  const p = s.p;
  const d = s.drops;
  const dt = s.dt;
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i]) continue;
    const v = d.v[i] - p.EVAP_C * d.a[i] * dt;
    if (v < p.V_VANISH) {
      if (d.cand[i] >= 0) candidateOut(s, d.cand[i], OUT_EVAPORATED, -1);
      killDrop(s, i);
      continue;
    }
    d.v[i] = v;
    d.a[i] = cbrt(v / p.CAP_K, d.a[i]);
  }
}
