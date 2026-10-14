import { describe, expect, it } from 'vitest';
import { createRace, pick } from '../../src/sim/race.ts';
import { rivalChoose, rivalScore } from '../../src/sim/rival.ts';
import { PLAYER, RIVAL } from '../../src/sim/state.ts';

describe('the rival (MAP 3.5)', () => {
  it('never takes the drop the player picked', () => {
    for (let i = 0; i < 200; i++) {
      const s = createRace(`rv-${i}`);
      pick(s, 'player', i % 6);
      expect(s.picks[RIVAL]).not.toBe(s.picks[PLAYER]);
      expect(s.picks[RIVAL]).toBeGreaterThanOrEqual(0);
    }
  });
  it('picks first on even races when asked, and the player cannot take his drop', () => {
    const s = createRace('rv-first', { firstPicker: 'rival' });
    const his = s.picks[RIVAL];
    expect(his).toBeGreaterThanOrEqual(0);
    expect(pick(s, 'player', his)).toBe(false);
  });
  it('sees only the glass: his score of a drop does not change with the weather variant', () => {
    for (let i = 0; i < 20; i++) {
      const a = createRace(`rs-${i}`);
      const b = createRace(`rs-${i}`, { variant: 'other-weather' });
      for (let c = 0; c < 6; c++) expect(rivalScore(a, c)).toBe(rivalScore(b, c));
    }
  });
  it('has learnable habits: he usually takes the drop he scores highest (whim about 1 in 10)', () => {
    let top = 0;
    const N = 500;
    for (let i = 0; i < N; i++) {
      const s = createRace(`rh-${i}`);
      const scores = [0, 1, 2, 3, 4, 5].map((c) => rivalScore(s, c));
      const best = scores.indexOf(Math.max(...scores));
      if (rivalChoose(s) === best) top++;
    }
    expect(top / N).toBeGreaterThan(0.85);
    expect(top / N).toBeLessThan(0.97);
  });
});
