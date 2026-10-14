import { describe, expect, it } from 'vitest';
import { carKmhAt } from '../../src/sim/car.ts';
import { buildSchedule } from '../../src/sim/events.ts';
import { DEFAULT_PARAMS, LIGHTS, type Light } from '../../src/sim/params.ts';
import { createRace, pick, seedKeys, step } from '../../src/sim/race.ts';
import { makeStream } from '../../src/sim/rng.ts';
import { CR_LANDED, PHASE_DONE } from '../../src/sim/state.ts';

describe('event schedule (MAP 3.3)', () => {
  it('is decided at creation, before and regardless of the picks', () => {
    for (let i = 0; i < 30; i++) {
      const a = createRace(`ev-${i}`);
      const b = createRace(`ev-${i}`);
      const before = JSON.stringify(a.events);
      pick(a, 'player', 0);
      pick(b, 'player', 5);
      expect(JSON.stringify(a.events)).toBe(before);
      expect(JSON.stringify(b.events)).toBe(before);
      expect(JSON.stringify(a.creatures)).toBe(JSON.stringify(b.creatures));
    }
  });
  it('slots: 1 to 4 per race, quiet start, cutoff, 6 s spacing; mean about 2 in every light (MAP 3.3, D024)', () => {
    const N = 3000;
    for (const light of ['grey', 'sunset', 'storm'] as Light[]) {
      let total = 0;
      for (let i = 0; i < N; i++) {
        const p = { ...DEFAULT_PARAMS };
        const sc = buildSchedule(p, LIGHTS[light], makeStream(seedKeys(`sched-${i}`).dyn, 'events'));
        // a fly belongs to its braking's slot (D024); every other event is a slot of its own
        const slots = sc.events.filter((e) => e.type !== 'fly');
        expect(slots.length).toBeGreaterThanOrEqual(1);
        expect(slots.length).toBeLessThanOrEqual(p.EVENT_MAX);
        total += slots.length;
        for (const e of slots) {
          expect(e.startTick).toBeGreaterThanOrEqual(p.EVENT_QUIET_S * 60);
          expect(e.startTick).toBeLessThanOrEqual(p.EVENT_CUTOFF_S * 60);
          expect(e.startTick - e.warnTick).toBeGreaterThanOrEqual(p.WARN_S * 60);
        }
        for (let a = 0; a < slots.length; a++)
          for (let b = a + 1; b < slots.length; b++)
            expect(Math.abs(slots[a].startTick - slots[b].startTick)).toBeGreaterThanOrEqual(
              p.EVENT_GAP_S * 60 - 1,
            );
        // a fly lands inside its braking's slow phase, never after the cutoff, and is announced 1 s before
        for (const f of sc.events.filter((e) => e.type === 'fly')) {
          const brake = sc.events[sc.creatures[f.creature].event - 1];
          expect(brake.type).toBe('brake');
          expect(f.startTick).toBeLessThanOrEqual(Math.round(p.EVENT_CUTOFF_S * 60));
          expect(f.startTick).toBeGreaterThanOrEqual(brake.startTick + p.BRAKE_DOWN_S * 60);
          expect(f.startTick).toBeLessThanOrEqual(brake.endTick - p.BRAKE_UP_S * 60);
          expect(f.startTick - f.warnTick).toBe(p.WARN_S * 60);
        }
      }
      const mean = total / N;
      expect(mean).toBeGreaterThan(1.8);
      expect(mean).toBeLessThan(2.2);
    }
  });
  it('a fly lands only while the car is under 30 km/h, then may let go when the car speeds up', () => {
    let landed = 0;
    for (let i = 0; i < 300 && landed < 25; i++) {
      const s = createRace(`fly-${i}`);
      if (!s.events.some((e) => e.type === 'fly')) continue;
      pick(s, 'player', 0);
      const was = s.creatures.map((c) => c.state);
      while (s.phase !== PHASE_DONE) {
        step(s);
        s.creatures.forEach((c, k) => {
          if (c.kind === 0 && was[k] !== CR_LANDED && c.state === CR_LANDED) {
            expect(s.car.kmh).toBeLessThan(s.p.FLY_MAX_KMH);
            landed++;
          }
          was[k] = c.state;
        });
      }
    }
    expect(landed).toBeGreaterThan(5);
  });
  it('lightning exists only in the storm light', () => {
    let storm = 0;
    for (let i = 0; i < 50; i++) {
      expect(createRace(`l-${i}`, { light: 'grey' }).lightning.length).toBe(0);
      storm += createRace(`l-${i}`, { light: 'storm' }).lightning.length;
    }
    expect(storm).toBeGreaterThan(0);
  });
});

describe('car speed (MAP 2.1, R4 3.3)', () => {
  it('the race starts at a stop, ramps to cruise, and the anti-stall adds 30 km/h at 50 s', () => {
    const s = createRace('car');
    s.events = [];
    expect(carKmhAt(s, -1)).toBe(0);
    expect(carKmhAt(s, 0)).toBe(0);
    const cruise = carKmhAt(s, 20 * 60);
    expect(cruise).toBeGreaterThan(55);
    expect(cruise).toBeLessThan(75);
    const before = carKmhAt(s, 49 * 60);
    const after = carKmhAt(s, 54 * 60);
    expect(after - before).toBeGreaterThan(20);
  });
  it('a braking event takes the car to 20 km/h or to a stop', () => {
    for (let i = 0; i < 200; i++) {
      const s = createRace(`brake-${i}`);
      const b = s.events.find((e) => e.type === 'brake');
      if (!b) continue;
      const mid = Math.round((b.startTick + b.endTick) / 2);
      expect(carKmhAt(s, mid)).toBeLessThanOrEqual(20.0001);
      return;
    }
    throw new Error('no braking event found');
  });
});
