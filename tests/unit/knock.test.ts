import { describe, expect, it } from 'vitest';
import { applyKnock, quantizeKnock } from '../../src/sim/knock.ts';
import { stepDrops } from '../../src/sim/physics.ts';
import { createRace, pick, step } from '../../src/sim/race.ts';
import {
  CR_FLY,
  CR_GONE,
  CR_LANDED,
  type Creature,
  PLAYER,
  type RaceState,
  RIVAL,
} from '../../src/sim/state.ts';
import { addDrop, bareRace } from './helpers.ts';

function racing(params: Parameters<typeof bareRace>[0] = {}): RaceState {
  const s = bareRace(params);
  s.mode = 'race';
  s.phase = 1;
  s.greenTick = s.tick;
  return s;
}

function fly(s: RaceState, x: number, y: number): number {
  const c: Creature = {
    kind: CR_FLY,
    event: 0,
    x,
    y,
    r: 3.5,
    state: CR_LANDED,
    landTick: 0,
    lastTick: 9999,
    gripKmh: 999,
    failedKnocks: 0,
    outcome: 0,
    releaseTick: -1,
    surfing: 0,
    goneWhy: 0,
    triesPlayer: 0,
    triesRival: 0,
  };
  s.events = [
    { type: 'fly', warnTick: 0, startTick: 0, endTick: 99999, x, y, kmh: 0, creature: 0, phase: 2 },
  ];
  s.creatures = [c];
  return 0;
}

function twoFlies(s: RaceState): void {
  fly(s, 150, 60);
  const second = { ...s.creatures[0], x: 60, y: 30, event: 1 };
  s.events.push({ ...s.events[0], x: 60, y: 30, creature: 1 });
  s.creatures.push(second);
}

describe('the knock (MAP 3.4)', () => {
  it('3 knocks per race, a 1 s pause between knocks, the 4th is "stop it!" with no effect', () => {
    const s = racing();
    expect(applyKnock(s, PLAYER, 100, 50)).toBe(true);
    expect(applyKnock(s, PLAYER, 100, 50)).toBe(false); // too soon
    for (let k = 0; k < 2; k++) {
      s.tick += 60;
      expect(applyKnock(s, PLAYER, 100, 50)).toBe(true);
    }
    s.tick += 60;
    expect(applyKnock(s, PLAYER, 100, 50)).toBe(false);
    expect(s.knocks.left[PLAYER]).toBe(0);
    expect(s.knocks.wanted[PLAYER]).toBe(1);
  });
  it('positions are rounded to 0.5 mm before they are applied', () => {
    expect(quantizeKnock(10.26, 0.5)).toBe(10.5);
    expect(quantizeKnock(10.24, 0.5)).toBe(10);
    const s = racing();
    applyKnock(s, PLAYER, 33.333, 44.444);
    const i = (s.log.head - 1 + s.log.cap) % s.log.cap;
    expect([s.log.b[i], s.log.c[i]]).toEqual([33.5, 44.5]);
  });
  it('jolt: only the nearest stuck drop within 10 mm, until it has moved one diameter (at most 1 s)', () => {
    const s = racing();
    const near = addDrop(s, 105, 50, 6);
    const other = addDrop(s, 108, 50, 6);
    const far = addDrop(s, 125, 50, 6);
    applyKnock(s, PLAYER, 104, 50);
    expect(s.drops.jolt[near]).toBe(60);
    expect(s.drops.joltMm[near]).toBeCloseTo(2 * s.drops.a[near], 12);
    expect(s.drops.jolt[other]).toBe(0);
    expect(s.drops.jolt[far]).toBe(0);
  });
  it('a jolt frees a drop caught on a speck at cruise; without it the drop stays', () => {
    const trial = (knock: boolean) => {
      const s = racing({ ROAD_RATE: 0 }); // no road vibration: only the knock can free it
      // a dirt band 3 mm wide right in front of the drop
      for (let y = 0; y < s.glass.ph; y++)
        for (let x = 102; x < 105; x++) s.glass.pin[y * s.glass.pw + x] = 2.4;
      const i = addDrop(s, 100, 50, 6);
      s.car.kmh = 65;
      const run = (ticks: number) => {
        for (let t = 0; t < ticks; t++) {
          s.tick++;
          stepDrops(s);
        }
      };
      run(60); // it slides to the band and its front edge catches there
      const caught = s.drops.x[i];
      expect(s.drops.moving[i]).toBe(0);
      if (knock) {
        s.tick += 60; // past the knock pause
        applyKnock(s, PLAYER, 100, 50);
      }
      run(120);
      return s.drops.x[i] - caught;
    };
    expect(trial(false)).toBe(0);
    expect(trial(true)).toBeGreaterThan(2);
  });
  it('scare: the pity rule makes the third knock on the same creature always work', () => {
    let firstTry = 0;
    const N = 400;
    for (let i = 0; i < N; i++) {
      const s = createRace(`scare-${i}`, { mode: 'race' });
      pick(s, 'player', 0);
      fly(s, 150, 60);
      let n = 0;
      while (s.creatures[0].state !== CR_GONE) {
        expect(n).toBeLessThan(3);
        applyKnock(s, PLAYER, 150, 60);
        n++;
        s.tick += 61;
      }
      if (n === 1) firstTry++;
    }
    // MAP 3.4: a fly leaves 55-60 times in 100 on the first knock
    expect(firstTry / N).toBeGreaterThan(0.5);
    expect(firstTry / N).toBeLessThan(0.66);
  });
  it('knocks lock in the final straight', () => {
    const s = racing();
    s.knocks.locked = 1;
    expect(applyKnock(s, PLAYER, 100, 50)).toBe(false);
    expect(s.knocks.left[PLAYER]).toBe(3);
  });
  it('a knock input in step() is applied at that tick', () => {
    const s = createRace('knock-step');
    pick(s, 'player', 0);
    step(s, { knocks: [{ who: 'player', x: 120, y: 60 }] });
    expect(s.knocks.left[PLAYER]).toBe(2);
  });
  it('a player knock on another creature never changes the rival scare result (separate dice per side)', () => {
    let flips = 0;
    let scared = 0;
    for (let i = 0; i < 200; i++) {
      const runRival = (playerFirst: boolean) => {
        const s = createRace(`indep-${i}`, { mode: 'race' });
        pick(s, 'player', 0);
        twoFlies(s);
        if (playerFirst) applyKnock(s, PLAYER, 60, 30); // the other fly, 90 mm away
        applyKnock(s, RIVAL, 150, 60);
        return s.creatures[0].state;
      };
      const alone = runRival(false);
      if (alone === CR_GONE) scared++;
      if (runRival(true) !== alone) flips++;
    }
    expect(flips).toBe(0);
    expect(scared).toBeGreaterThan(80); // the dice still roll: about 58% of first knocks scare a fly
  });
});
