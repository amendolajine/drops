import { describe, expect, it } from 'vitest';
import { createRace, pick, step } from '../../src/sim/race.ts';
import { hashState, snapshot } from '../../src/sim/snapshot.ts';
import { PHASE_DONE } from '../../src/sim/state.ts';

function trace(seed: string, knocks: boolean) {
  const s = createRace(seed);
  pick(s, 'player', 2);
  const hashes: string[] = [hashState(s)];
  while (s.phase !== PHASE_DONE) {
    const t = s.tick - s.greenTick;
    step(
      s,
      knocks && t % 400 === 200
        ? { knocks: [{ who: 'player', x: 60 + (t % 97), y: 30 + (t % 41) }] }
        : undefined,
    );
    if (s.tick % 600 === 0) hashes.push(hashState(s));
  }
  hashes.push(hashState(s));
  return { s, hashes };
}

describe('determinism (MAP 9.3)', () => {
  it('same seed and same inputs give the same hash at every checkpoint', () => {
    for (const k of [false, true]) {
      expect(trace('det-a', k).hashes).toEqual(trace('det-a', k).hashes);
    }
  });
  it('different seeds and different inputs give different races', () => {
    expect(trace('det-a', false).hashes.at(-1)).not.toBe(trace('det-b', false).hashes.at(-1));
    expect(trace('det-a', false).hashes.at(-1)).not.toBe(trace('det-a', true).hashes.at(-1));
  });
  it('no NaN or impossible value in 40 races', () => {
    for (let i = 0; i < 40; i++) {
      const { s } = trace(`sane-${i}`, i % 2 === 0);
      const sn = snapshot(s);
      for (const d of sn.drops) {
        for (const v of [d.x, d.y, d.volume, d.radius, d.vx, d.vy]) expect(Number.isFinite(v)).toBe(true);
        expect(d.volume).toBeGreaterThan(0);
        expect(d.x).toBeGreaterThanOrEqual(0);
        expect(d.x).toBeLessThanOrEqual(s.p.W);
        expect(d.y).toBeGreaterThan(0);
        expect(d.y).toBeLessThanOrEqual(s.p.H);
      }
    }
  });
  it('step() works in place: no new arrays, fixed capacity (map 9.2 "no new objects every step")', () => {
    const s = createRace('alloc');
    pick(s, 'player', 1);
    const refs = [
      s.drops.x,
      s.drops.y,
      s.drops.v,
      s.glass.wet,
      s.glass.pin,
      s.gridHead,
      s.cands.state,
      s.log.code,
    ];
    const evs = s.events;
    const crs = s.creatures;
    for (let i = 0; i < 3000 && s.phase !== PHASE_DONE; i++) step(s);
    const now = [
      s.drops.x,
      s.drops.y,
      s.drops.v,
      s.glass.wet,
      s.glass.pin,
      s.gridHead,
      s.cands.state,
      s.log.code,
    ];
    for (let k = 0; k < refs.length; k++) expect(now[k]).toBe(refs[k]);
    expect(s.events).toBe(evs);
    expect(s.creatures).toBe(crs);
    expect(s.drops.n).toBeLessThanOrEqual(s.drops.cap);
  });
});
