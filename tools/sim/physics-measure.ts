// Physics measures used by `npm run physics` (tools/sim/physics.ts). Measures how the drops behave on generated glass (physics review): stop-and-go at cruise, what restarts a
// stuck drop and whether restarts are synchronised, start order against size, the sun break, the pothole,
// speeds, pearls, angles and race tempo. Rollout races: all 6 candidates race, no picks, no knocks.

import type { Light, ParamOverrides } from '../../src/sim/params.ts';
import { roadKick } from '../../src/sim/physics.ts';
import { createRace, step } from '../../src/sim/race.ts';
import { CAND_FINISHED, CAND_RACING, EV_ACTIVE, KIND_PEARL, PHASE_DONE } from '../../src/sim/state.ts';

export interface PhysicsArgs {
  glasses: number;
  light: Light;
  seed: string;
  params: ParamOverrides;
}

const pct = (xs: number[], q: number) => {
  const a = xs.filter(Number.isFinite).sort((u, v) => u - v);
  return a.length ? a[Math.min(a.length - 1, Math.floor(q * a.length))] : Number.NaN;
};
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : Number.NaN);
const r3 = (x: number) => Math.round(x * 1000) / 1000;
const q3 = (xs: number[]) => [r3(pct(xs, 0.1)), r3(pct(xs, 0.5)), r3(pct(xs, 0.9))];

function spearman(xs: number[], ys: number[]): number {
  const rank = (v: number[]) => {
    const idx = v.map((x, i) => [x, i]).sort((a, b) => a[0] - b[0]);
    const r = new Array(v.length);
    idx.forEach(([, i], k) => {
      r[i] = k;
    });
    return r as number[];
  };
  const rx = rank(xs);
  const ry = rank(ys);
  const n = xs.length;
  const m = (n - 1) / 2;
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < n; i++) {
    num += (rx[i] - m) * (ry[i] - m);
    dx += (rx[i] - m) * (rx[i] - m);
    dy += (ry[i] - m) * (ry[i] - m);
  }
  return dx > 0 && dy > 0 ? num / Math.sqrt(dx * dy) : Number.NaN;
}

export function measurePhysics(args: PhysicsArgs) {
  const stopDur: number[] = [];
  let stops = 0;
  let stuckTicks = 0;
  let movingTicks = 0;
  const causes: Record<string, number> = { vibration: 0, merge: 0, bump: 0, jolt: 0, speedUp: 0, other: 0 };
  const restartsPerTick: number[] = [];
  const speeds: number[] = [];
  const angles: Record<string, number[]> = {};
  const rhoPerGlass: number[] = [];
  let biggestFirst = 0;
  let glassesWithStart = 0;
  const startSpread: number[] = [];
  const allV: number[] = [];
  const allStart: number[] = [];
  const evapGone: Record<string, number[]> = { '1': [], '3': [], '6': [] };
  const candEvapLoss: number[] = [];
  let maxJump = 0;
  const jumps: number[] = [];
  let pinnedInSeal = 0;
  const pearls: number[] = [];
  const winnerTimes: number[] = [];
  const finishTimes: number[] = [];
  let gutter = 0;
  let cands = 0;
  const ambientMoving: number[] = [];

  for (let gI = 0; gI < args.glasses; gI++) {
    const s = createRace(`${args.seed}|${gI}`, { mode: 'rollout', light: args.light, params: args.params });
    const d = s.drops;
    const p = s.p;
    const C = s.cands.count;
    const cap = d.cap;
    const prevId = new Int32Array(cap);
    const prevMoving = new Uint8Array(cap);
    const prevV = new Float64Array(cap);
    const prevX = new Float64Array(cap);
    const prevY = new Float64Array(cap);
    const snap = () => {
      for (let i = 0; i < d.n; i++) {
        prevId[i] = d.alive[i] ? d.id[i] : -1;
        prevMoving[i] = d.moving[i];
        prevV[i] = d.v[i];
        prevX[i] = d.x[i];
        prevY[i] = d.y[i];
      }
    };
    snap();
    const firstMove = new Array(C).fill(-1);
    const stopAt = new Array(C).fill(-1);
    let pearlCount = 0;
    // sun break bookkeeping: ids of small drops alive at its start
    let clearStart = -1;
    let small: Set<number> | null = null;
    const candAtClear = new Map<number, number>();
    while (s.phase !== PHASE_DONE) {
      const nextIdBefore = d.nextId;
      step(s);
      const rt = s.tick - s.greenTick;
      const kmh = s.car.kmh;
      const braking = s.events.some((e) => e.type === 'brake' && e.phase === EV_ACTIVE);
      const bump = s.events.some((e) => e.type === 'bump' && e.phase === EV_ACTIVE);
      const cruise = kmh > 45 && !braking;
      // per drop: restarts and jumps
      let restarts = 0;
      let amb = 0;
      for (let i = 0; i < d.n; i++) {
        if (!d.alive[i]) continue;
        if (d.id[i] >= nextIdBefore) {
          if (d.kind[i] === KIND_PEARL) pearlCount++;
          continue;
        }
        if (prevId[i] !== d.id[i]) continue;
        if (!prevMoving[i] && d.moving[i]) restarts++;
        if (d.moving[i] && d.cand[i] < 0) amb++;
        if (!d.moving[i] && d.held[i] < 0 && d.y[i] > p.H - 0.5 * d.a[i]) pinnedInSeal++;
        if (d.v[i] === prevV[i] && d.held[i] < 0) {
          const j = Math.hypot(d.x[i] - prevX[i], d.y[i] - prevY[i]);
          if (j > maxJump) maxJump = j;
          if (j > 0) jumps.push(j);
        }
      }
      if (cruise && !bump) {
        if (restarts > 0) restartsPerTick.push(restarts);
        ambientMoving.push(amb);
      }
      // candidates
      for (let c = 0; c < C; c++) {
        if (s.cands.state[c] !== CAND_RACING) continue;
        const sl = s.cands.slot[c];
        if (prevId[sl] !== d.id[sl]) continue;
        const mv = d.moving[sl];
        if (firstMove[c] < 0 && mv) firstMove[c] = rt / p.TICK_HZ;
        if (cruise) {
          if (mv) {
            movingTicks++;
            const sp = Math.hypot(d.vx[sl], d.vy[sl]);
            speeds.push(sp);
            if (!d.contact[sl]) {
              const key = String(Math.floor(kmh / 10) * 10);
              angles[key] ??= [];
              angles[key].push((Math.atan2(d.vy[sl], d.vx[sl]) * 180) / Math.PI);
            }
          } else stuckTicks++;
          if (prevMoving[sl] && !mv) {
            stops++;
            stopAt[c] = rt;
          }
        }
        if (!prevMoving[sl] && mv && stopAt[c] >= 0) {
          stopDur.push((rt - stopAt[c]) / p.TICK_HZ);
          stopAt[c] = -1;
          let cause = 'other';
          if (d.jolt[sl] > 0) cause = 'jolt';
          else if (d.v[sl] > prevV[sl] + 1e-9 || d.burst[sl] > 0) cause = 'merge';
          else if (bump) cause = 'bump';
          else if (roadKick(s, sl) < 1) cause = 'vibration';
          else if (kmh > 45 && !braking) cause = 'other';
          else cause = 'speedUp';
          causes[cause]++;
        }
      }
      // sun break
      const clearing = s.events.find((e) => e.type === 'clearing' && e.phase === EV_ACTIVE);
      if (clearing && clearStart < 0) {
        clearStart = rt;
        small = new Set();
        for (let i = 0; i < d.n; i++) if (d.alive[i] && d.cand[i] < 0 && d.v[i] < 0.5) small.add(d.id[i]);
        for (let c = 0; c < C; c++)
          if (s.cands.state[c] === CAND_RACING) candAtClear.set(c, d.v[s.cands.slot[c]]);
      }
      if (clearStart >= 0 && small && small.size > 0) {
        for (const sec of [1, 3, 6]) {
          if (rt - clearStart === sec * p.TICK_HZ) {
            const alive = new Set<number>();
            for (let i = 0; i < d.n; i++) if (d.alive[i]) alive.add(d.id[i]);
            let gone = 0;
            for (const id of small) if (!alive.has(id)) gone++;
            evapGone[String(sec)].push(gone / small.size);
          }
        }
      }
      if (clearing && rt === clearing.endTick - 1) {
        for (const [c, v0] of candAtClear) {
          if (s.cands.state[c] !== CAND_RACING) continue;
          const v1 = d.v[s.cands.slot[c]];
          if (v1 <= v0) candEvapLoss.push(1 - v1 / v0);
        }
      }
      snap();
    }
    pearls.push(pearlCount);
    let win = Number.POSITIVE_INFINITY;
    for (let c = 0; c < C; c++) {
      cands++;
      if (s.cands.state[c] === CAND_FINISHED) {
        finishTimes.push(s.cands.finishTime[c]);
        if (s.cands.finishTime[c] < win) win = s.cands.finishTime[c];
      }
      if (s.cands.outReason[c] === 1) gutter++;
    }
    if (Number.isFinite(win)) winnerTimes.push(win);
    // start order: volume vs who moves first
    const vs: number[] = [];
    const ts: number[] = [];
    for (let c = 0; c < C; c++) {
      if (firstMove[c] < 0) continue;
      vs.push(s.cands.startV[c]);
      ts.push(firstMove[c]);
      allV.push(s.cands.startV[c]);
      allStart.push(firstMove[c]);
    }
    if (vs.length >= 4) {
      glassesWithStart++;
      rhoPerGlass.push(
        spearman(
          vs,
          ts.map((t) => -t),
        ),
      );
      let bi = 0;
      let fi = 0;
      for (let k = 1; k < vs.length; k++) {
        if (vs[k] > vs[bi]) bi = k;
        if (ts[k] < ts[fi]) fi = k;
      }
      if (bi === fi) biggestFirst++;
      startSpread.push(Math.max(...ts) - Math.min(...ts));
    }
  }
  const angleTable: Record<string, number> = {};
  for (const k of Object.keys(angles).sort((a, b) => Number(a) - Number(b)))
    if (angles[k].length > 200) angleTable[`${k}-${Number(k) + 9} km/h`] = r3(pct(angles[k], 0.5));
  return {
    glasses: args.glasses,
    light: args.light,
    stop_and_go_at_cruise: {
      stops_per_candidate: r3(stops / cands),
      share_of_cruise_time_stuck: r3(stuckTicks / Math.max(1, stuckTicks + movingTicks)),
      stop_duration_s_p10_p50_p90: q3(stopDur),
      restart_causes: causes,
      restarts_in_the_same_tick_outside_potholes_p50_p99_max: [
        pct(restartsPerTick, 0.5),
        pct(restartsPerTick, 0.99),
        restartsPerTick.reduce((a, b) => (b > a ? b : a), 0),
      ],
      ambient_drops_moving_p10_p50_p90: q3(ambientMoving),
    },
    start: {
      spearman_volume_vs_early_start_per_glass_mean: r3(mean(rhoPerGlass)),
      spearman_volume_vs_early_start_pooled: r3(
        spearman(
          allV,
          allStart.map((t) => -t),
        ),
      ),
      biggest_moves_first_share: r3(biggestFirst / Math.max(1, glassesWithStart)),
      chance_level: r3(1 / 6),
      first_to_last_unpin_s_p10_p50_p90: q3(startSpread),
    },
    sun_break: {
      small_drops_gone_after_1_3_6_s: [
        r3(mean(evapGone['1'])),
        r3(mean(evapGone['3'])),
        r3(mean(evapGone['6'])),
      ],
      sun_breaks_measured: evapGone['1'].length,
      candidate_volume_lost_p10_p50_p90: q3(candEvapLoss),
    },
    no_teleports: {
      largest_single_tick_move_mm: r3(maxJump),
      move_p99999_mm: r3(pct(jumps, 0.99999)),
      pinned_drops_seen_in_the_seal_band: pinnedInSeal,
    },
    speeds: {
      candidate_moving_speed_mm_s_p10_p50_p75_p90: [
        r3(pct(speeds, 0.1)),
        r3(pct(speeds, 0.5)),
        r3(pct(speeds, 0.75)),
        r3(pct(speeds, 0.9)),
      ],
      angle_below_horizontal_deg_median: angleTable,
    },
    pearls: { per_race_p10_p50_p90: q3(pearls) },
    tempo: {
      winner_time_s_p10_p50_p90: q3(winnerTimes),
      candidate_finish_time_s_p10_p50_p90: q3(finishTimes),
      candidates_lost_to_the_seal: r3(gutter / Math.max(1, cands)),
    },
  };
}
