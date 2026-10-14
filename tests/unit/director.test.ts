import { describe, expect, it } from 'vitest';
import { createRace, pick, step } from '../../src/sim/race.ts';
import { snapshot } from '../../src/sim/snapshot.ts';
import {
  CAND_FINISHED,
  CAND_OUT,
  DRAW,
  PHASE_DONE,
  PLAYER,
  R_BOTH_OUT,
  R_FINISH,
  RIVAL,
} from '../../src/sim/state.ts';

function runToEnd(seed: string) {
  const s = createRace(seed);
  pick(s, 'player', 0);
  while (s.phase !== PHASE_DONE) step(s);
  return s;
}

describe('race director (MAP 2.1)', () => {
  it('every race ends by 90 s with a result, and the result matches the picked drops', () => {
    for (let i = 0; i < 60; i++) {
      const s = runToEnd(`dir-${i}`);
      const r = s.result;
      expect(r.endTick).toBeLessThanOrEqual(90 * 60);
      expect(r.reason).toBeGreaterThan(0);
      const pp = s.picks[PLAYER];
      const pr = s.picks[RIVAL];
      if (r.reason === R_FINISH) {
        const tP = s.cands.state[pp] === CAND_FINISHED ? s.cands.finishTime[pp] : Infinity;
        const tR = s.cands.state[pr] === CAND_FINISHED ? s.cands.finishTime[pr] : Infinity;
        expect(r.winner).toBe(tP < tR ? PLAYER : tR < tP ? RIVAL : DRAW);
      }
      if (r.reason === R_BOTH_OUT) {
        expect(s.cands.state[pp]).toBe(CAND_OUT);
        expect(s.cands.state[pr]).toBe(CAND_OUT);
        expect(r.winner).toBe(DRAW);
      }
    }
  });
  it('the snapshot reports fast-forward once a race is decided', () => {
    const s = runToEnd('dir-ff');
    expect(snapshot(s).director.fastForward).toBe(true);
  });
});
