import { describe, expect, it } from 'vitest';
import { pinAt, wetIndex } from '../../src/sim/glass.ts';
import { createRace } from '../../src/sim/race.ts';
import { PROFILE_MIDDLE, PROFILE_MONSTER } from '../../src/sim/state.ts';

describe('glass generation (MAP 3.1)', () => {
  it('every glass has 6 candidates inside the start box, with candidate volumes and full spacing', () => {
    let fallback = 0;
    for (let i = 0; i < 200; i++) {
      const s = createRace(`glass-${i}`);
      const k = s.cands;
      const p = s.p;
      expect(k.count).toBe(6);
      if (s.glass.genRetries > 0) fallback++;
      for (let c = 0; c < 6; c++) {
        expect(k.startX[c]).toBeGreaterThanOrEqual(p.CAND_X_MIN);
        expect(k.startX[c]).toBeLessThanOrEqual(p.CAND_X_MAX);
        expect(k.startY[c]).toBeGreaterThanOrEqual(p.CAND_Y_MIN);
        expect(k.startY[c]).toBeLessThanOrEqual(p.CAND_Y_MAX);
        if (k.profile[c] === PROFILE_MONSTER) expect(k.startV[c]).toBeGreaterThanOrEqual(p.MONSTER_V_MIN);
        else {
          expect(k.startV[c]).toBeGreaterThanOrEqual(p.CAND_V_MIN);
          expect(k.startV[c]).toBeLessThanOrEqual(p.CAND_V_MAX);
        }
        if (s.glass.genRetries === 0) {
          for (let o = c + 1; o < 6; o++) {
            const d = Math.hypot(k.startX[c] - k.startX[o], k.startY[c] - k.startY[o]);
            expect(d).toBeGreaterThanOrEqual(p.CAND_SPACING);
          }
        }
      }
    }
    // MAP 2.1: the generator may need its fallback in at most 1 glass in 20
    expect(fallback / 200).toBeLessThanOrEqual(0.05);
  });
  it('the pin field is positive, specks are counted, ambient drops are 120-150', () => {
    const s = createRace('glass-field');
    for (const m of s.glass.pin) expect(m).toBeGreaterThan(0);
    expect(s.glass.specks.length / 3).toBe(Math.floor((240 * 135) / s.p.SPECK_AREA));
    let alive = 0;
    for (let i = 0; i < s.drops.n; i++) if (s.drops.alive[i]) alive++;
    expect(alive).toBeGreaterThan(110);
    expect(alive).toBeLessThan(170);
  });
  it('the same seed builds the same glass; a variant (other weather) keeps the glass', () => {
    const a = createRace('same');
    const b = createRace('same');
    const c = createRace('same', { variant: 'rollout-3' });
    expect(Array.from(a.glass.pin)).toEqual(Array.from(b.glass.pin));
    expect(Array.from(a.glass.pin)).toEqual(Array.from(c.glass.pin));
    expect(Array.from(a.cands.startX)).toEqual(Array.from(c.cands.startX));
    // the drops at pick time are identical too (pre-roll uses a glass-side stream)
    expect(Array.from(a.drops.x.slice(0, a.drops.n))).toEqual(Array.from(c.drops.x.slice(0, c.drops.n)));
    expect(a.events.map((e) => e.startTick)).toEqual(b.events.map((e) => e.startTick));
  });
  it('the four glass kinds all appear', () => {
    const kinds = new Set<string>();
    for (let i = 0; i < 60; i++) kinds.add(createRace(`kinds-${i}`).glass.kind);
    expect([...kinds].sort()).toEqual(['drizzle', 'lane', 'monster', 'twins']);
  });
  it('start spots are clean: no dirt nearby, flat glass, no old streak under them, feeder streak stops short', () => {
    for (let i = 0; i < 80; i++) {
      const s = createRace(`clean-${i}`);
      const g = s.glass;
      const p = s.p;
      const aMax = Math.cbrt(p.MONSTER_V_MAX / p.CAP_K);
      for (let c = 0; c < 6; c++) {
        const x = s.cands.startX[c];
        const y = s.cands.startY[c];
        for (const list of [g.specks, g.smudges])
          for (let k = 0; k < list.length; k += 3)
            expect(Math.hypot(list[k] - x, list[k + 1] - y)).toBeGreaterThanOrEqual(
              list[k + 2] + aMax + p.CAND_CLEAN_R - 1e-9,
            );
        expect(pinAt(g, x, y)).toBe(1);
        const a = Math.cbrt(s.cands.startV[c] / p.CAP_K);
        if (s.cands.profile[c] !== PROFILE_MIDDLE) {
          expect(g.wet[wetIndex(g, p.WET_CELL, x, y)]).toBe(0);
          // the outsider's own front edge is dry too
          expect(g.wet[wetIndex(g, p.WET_CELL, x + a, y)]).toBe(0);
        }
      }
    }
  });
});
