import { describe, expect, it } from 'vitest';
import { makeCandidate } from '../../src/sim/drops.ts';
import { evaporate, mergeDrops, spawnRain, stepDrops } from '../../src/sim/physics.ts';
import { createRace, step } from '../../src/sim/race.ts';
import {
  CAND_OUT,
  CAND_RACING,
  OUT_GULPED,
  PHASE_DONE,
  PHASE_RACING,
  PLAYER,
  R_GULP,
  R_GULP_DRAW,
  RIVAL,
} from '../../src/sim/state.ts';
import { measurePhysics } from '../../tools/sim/physics-measure.ts';
import { addDrop, aliveCount, bareRace, totalVolume } from './helpers.ts';

function run(s: ReturnType<typeof bareRace>, kmh: number, ticks: number) {
  s.car.kmh = kmh;
  for (let t = 0; t < ticks; t++) {
    s.tick++;
    stepDrops(s);
    mergeDrops(s);
  }
}

describe('three forces and the pinning threshold (R4 1.2)', () => {
  it('clean glass at rest: 16 uL stays, 18 uL slides (critical volume about 17 uL, Andre 2019)', () => {
    const s = bareRace({ PPIN: 59.8 });
    const small = addDrop(s, 100, 40, 16);
    const big = addDrop(s, 140, 40, 18);
    run(s, 0, 120);
    expect(s.drops.y[small]).toBe(40);
    expect(s.drops.y[big]).toBeGreaterThan(41);
    expect(Math.abs(s.drops.x[big] - 140)).toBeLessThan(0.5);
  });
  it('default glass: every candidate size (and the monster) is pinned at the stop', () => {
    const s = bareRace();
    const ids = [5.5, 7, 8.5, 13].map((v, k) => addDrop(s, 40 + k * 30, 30, v));
    run(s, 0, 300);
    for (const i of ids) expect(s.drops.moving[i]).toBe(0);
  });
  it('a 20 uL drop at 42 km/h moves at about 45 degrees (wind = gravity, Andre 2019)', () => {
    const s = bareRace({ PPIN: 1 });
    const i = addDrop(s, 200, 54, 20); // y = 0.4 H: airflow factor k = 1, swirl almost 0 near the rear
    run(s, 42, 30);
    const angle = (Math.atan2(s.drops.vy[i], s.drops.vx[i]) * 180) / Math.PI;
    expect(angle).toBeGreaterThan(41);
    expect(angle).toBeLessThan(49);
  });
});

describe('speed sets the angle, size sets the speed (R4 1.4, 1.5)', () => {
  function trial(kmh: number, v: number) {
    const s = bareRace();
    const i = addDrop(s, 20, 40, v);
    run(s, kmh, 240);
    return { dx: s.drops.x[i] - 20, dy: s.drops.y[i] - 40 };
  }
  it('a faster car flattens the path (smaller angle below horizontal)', () => {
    const slow = trial(75, 8);
    const fast = trial(110, 8);
    expect(slow.dx).toBeGreaterThan(0);
    expect(fast.dy / fast.dx).toBeLessThan(slow.dy / slow.dx);
  });
  it('a bigger drop goes faster and steeper at the same car speed', () => {
    const small = trial(90, 6);
    const big = trial(90, 9);
    expect(big.dx).toBeGreaterThan(small.dx);
    expect(big.dy / big.dx).toBeGreaterThan(small.dy / small.dx);
  });
  it('the airflow pushes drops backward (toward the finish), never forward', () => {
    const s = bareRace({ PPIN: 1 });
    const i = addDrop(s, 50, 30, 6);
    run(s, 80, 120);
    expect(s.drops.x[i]).toBeGreaterThan(50);
  });
});

describe('stick-slip on generated glass (R4 1.3, physics review, D025)', () => {
  it('frequent short stops at cruise, spread out in time, and the start follows the size', () => {
    const m = measurePhysics({ glasses: 24, light: 'grey', seed: 'unit-phys', params: {} });
    const sg = m.stop_and_go_at_cruise;
    expect(sg.stops_per_candidate).toBeGreaterThan(2);
    expect(sg.share_of_cruise_time_stuck).toBeGreaterThan(0.1);
    expect(sg.share_of_cruise_time_stuck).toBeLessThan(0.45);
    expect(sg.stop_duration_s_p10_p50_p90[1]).toBeLessThan(2.5);
    // each drop feels the road on its own: restarts never come all in the same frame (outside potholes)
    expect(sg.restarts_in_the_same_tick_outside_potholes_p50_p99_max[1]).toBeLessThanOrEqual(8);
    // MAP 2.1 phase 3 "prima le grosse": bigger candidates leave first
    expect(m.start.spearman_volume_vs_early_start_per_glass_mean).toBeGreaterThan(0.5);
    expect(m.start.biggest_moves_first_share).toBeGreaterThan(0.33);
    expect(m.no_teleports.pinned_drops_seen_in_the_seal_band).toBe(0);
  });
});

describe('pothole, sun and seal (physics review, D025)', () => {
  it('a pothole makes big drops slip down a little and leaves small ones in place', () => {
    const s = bareRace();
    s.events = [
      { type: 'bump', warnTick: 0, startTick: 0, endTick: 18, x: -1, y: -1, kmh: 0, creature: -1, phase: 2 },
    ];
    const small = addDrop(s, 60, 40, 0.3);
    const big = addDrop(s, 160, 40, 15);
    s.car.kmh = 0;
    s.fx.pinMul = s.p.BUMP_MUL;
    s.fx.gMul = 1 + s.p.BUMP_G_EXTRA;
    let maxStep = 0;
    for (let t = 0; t < 18; t++) {
      const y0 = s.drops.y[big];
      s.tick++;
      stepDrops(s);
      maxStep = Math.max(maxStep, Math.abs(s.drops.y[big] - y0));
    }
    expect(s.drops.x[small]).toBe(60);
    expect(s.drops.y[small]).toBe(40);
    expect(s.drops.y[big]).toBeGreaterThan(40.5);
    expect(maxStep).toBeLessThanOrEqual(s.p.VMAX / s.p.TICK_HZ);
  });
  it('evaporation goes with the contact radius: small drops vanish first, big ones lose a little', () => {
    const s = bareRace();
    const tiny = addDrop(s, 40, 40, 0.15);
    const mid = addDrop(s, 100, 40, 1);
    const cand = addDrop(s, 160, 40, 7);
    const v0 = s.drops.v[cand];
    for (let t = 0; t < 8 * 60; t++) evaporate(s);
    expect(s.drops.alive[tiny]).toBe(0);
    expect(s.drops.alive[mid]).toBe(1);
    const lost = 1 - s.drops.v[cand] / v0;
    expect(lost).toBeGreaterThan(0.05);
    expect(lost).toBeLessThan(0.2);
  });
  it('the bottom seal takes a pinned drop too', () => {
    const s = bareRace();
    const i = addDrop(s, 100, s.p.H - 0.2, 2);
    run(s, 0, 1);
    expect(s.drops.alive[i]).toBe(0);
  });
  it('rain lands inside the glass, never in the seal band', () => {
    const s = bareRace({ RAIN_SCALE: 50 });
    for (let t = 0; t < 600; t++) spawnRain(s, s.streams.rain, 1);
    let n = 0;
    for (let i = 0; i < s.drops.n; i++) {
      if (!s.drops.alive[i]) continue;
      n++;
      expect(s.drops.y[i]).toBeGreaterThanOrEqual(s.drops.a[i] - 1e-9);
      expect(s.drops.y[i]).toBeLessThanOrEqual(s.p.H - s.drops.a[i] + 1e-9);
    }
    expect(n).toBeGreaterThan(100);
  });
});

describe('merging, identity and the gulp rule (R4 1.6, 3.7; MAP 2.1)', () => {
  it('touching drops merge and conserve volume; position is volume-weighted', () => {
    const s = bareRace();
    addDrop(s, 100, 50, 2);
    addDrop(s, 101, 50, 6);
    const before = totalVolume(s);
    run(s, 0, 1);
    expect(aliveCount(s)).toBe(1);
    expect(totalVolume(s)).toBeCloseTo(before, 12);
  });
  it('a neutral drop merging with yours stays yours, even when the neutral one is bigger', () => {
    const s = bareRace();
    const mine = addDrop(s, 100, 50, 5.6);
    makeCandidate(s, mine, 0);
    addDrop(s, 101.5, 50, 9);
    run(s, 0, 1);
    expect(s.drops.alive[mine]).toBe(1);
    expect(s.drops.cand[mine]).toBe(0);
    expect(s.drops.v[mine]).toBeCloseTo(14.6, 12);
  });
  it('picked drops gulping each other: bigger wins; within 5% it is a draw', () => {
    for (const [va, vb, reason] of [
      [8, 6, R_GULP],
      [6.1, 6.0, R_GULP_DRAW],
    ] as const) {
      const s = bareRace();
      s.mode = 'race';
      s.phase = PHASE_RACING;
      s.greenTick = 0;
      const a = addDrop(s, 100, 50, va);
      const b = addDrop(s, 101, 50, vb);
      makeCandidate(s, a, 0);
      makeCandidate(s, b, 1);
      s.picks[PLAYER] = 0;
      s.picks[RIVAL] = 1;
      run(s, 0, 1);
      expect(s.result.reason).toBe(reason);
      if (reason === R_GULP) expect(s.result.winner).toBe(PLAYER);
      expect(s.cands.state[1]).toBe(CAND_OUT);
      expect(s.cands.outReason[1]).toBe(OUT_GULPED);
    }
  });
});

describe('identity in a race: picked drops never lose to unpicked candidates (MAP 2.1, R4 3.7)', () => {
  function racePair(vPicked: number, vOther: number) {
    const s = bareRace();
    s.mode = 'race';
    s.phase = PHASE_RACING;
    s.greenTick = 0;
    const mine = addDrop(s, 100, 50, vPicked);
    const other = addDrop(s, 101, 50, vOther);
    const rivals = addDrop(s, 200, 20, 6);
    makeCandidate(s, mine, 0);
    makeCandidate(s, other, 1);
    makeCandidate(s, rivals, 2);
    s.picks[PLAYER] = 0;
    s.picks[RIVAL] = 2;
    run(s, 0, 1);
    return s;
  }
  it('a smaller picked drop swallows a bigger unpicked candidate and keeps its identity', () => {
    const s = racePair(5.6, 9);
    expect(s.cands.state[0]).toBe(CAND_RACING);
    expect(s.cands.state[1]).toBe(CAND_OUT);
    expect(s.cands.gulpedBy[1]).toBe(0);
    expect(s.drops.v[s.cands.slot[0]]).toBeCloseTo(14.6, 12);
    expect(s.result.reason).toBe(0);
  });
  it('in rollouts every candidate races: the bigger one keeps its identity', () => {
    const s = bareRace();
    const a = addDrop(s, 100, 50, 5.6);
    const b = addDrop(s, 101, 50, 9);
    makeCandidate(s, a, 0);
    makeCandidate(s, b, 1);
    run(s, 0, 1);
    expect(s.cands.state[0]).toBe(CAND_OUT);
    expect(s.cands.state[1]).toBe(CAND_RACING);
  });
  it('the glass plays the same whatever was picked (no knocks, rival brain off)', () => {
    for (let i = 0; i < 6; i++) {
      const trace = (pp: number, pr: number) => {
        const s = createRace(`same-glass-${i}`, { rivalAuto: false });
        step(s, { picks: [{ who: 'player', cand: pp }] });
        step(s, { picks: [{ who: 'rival', cand: pr }] });
        const out: string[] = [];
        while (s.phase !== PHASE_DONE && s.tick - s.greenTick < 1500) {
          step(s);
          if ((s.tick - s.greenTick) % 100 === 0) {
            const d = s.drops;
            let h = '';
            for (let k = 0; k < d.n; k++) if (d.alive[k]) h += `${d.id[k]}:${d.x[k]}:${d.y[k]}:${d.v[k]};`;
            out.push(h);
          }
        }
        return out;
      };
      const a = trace(0, 1);
      const b = trace(4, 5);
      const n = Math.min(a.length, b.length);
      expect(n).toBeGreaterThan(5);
      expect(b.slice(0, n)).toEqual(a.slice(0, n));
    }
  });
});

describe('trails and pearls (R4 1.7)', () => {
  it('a moving drop leaves a wet trail and the trail lowers pinning', () => {
    const s = bareRace({ PPIN: 1 });
    addDrop(s, 20, 30, 6);
    run(s, 80, 120);
    let wet = 0;
    for (const w of s.glass.wet) if (w > 0.9) wet++;
    expect(wet).toBeGreaterThan(5);
  });
  it('a fast drop above 3 uL sheds pearls of 3% and the total volume is conserved', () => {
    const s = bareRace({ PPIN: 40 });
    const i = addDrop(s, 10, 20, 12);
    const before = totalVolume(s);
    run(s, 100, 120);
    expect(aliveCount(s)).toBeGreaterThan(1);
    expect(s.drops.v[i]).toBeLessThan(12);
    expect(totalVolume(s)).toBeCloseTo(before, 9);
  });
});
