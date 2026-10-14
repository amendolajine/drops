// The 20 recorded races of the golden test (map 9.3 rule 7). Inputs only: seed, light, pick order, picks,
// knocks. Knock targets marked 'player-drop' / 'rival-drop' are resolved at that tick to the drop's
// position, which is itself deterministic, so the input log stays identical everywhere.

import type { Light } from '../../src/sim/params.ts';

export interface GoldenKnock {
  /** race tick (0 = green light) */
  tick: number;
  who: 'player' | 'rival';
  at: 'player-drop' | 'rival-drop' | [number, number];
}

export interface GoldenCase {
  name: string;
  seed: string;
  light: Light;
  firstPicker: 'player' | 'rival';
  playerPick: number;
  /** when set, the rival brain is off and these are his inputs */
  rivalPick?: number;
  knocks: GoldenKnock[];
}

const LIGHTS: Light[] = ['grey', 'sunset', 'storm'];

export const GOLDEN_CASES: GoldenCase[] = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const knocks: GoldenKnock[] = [];
  if (i % 4 === 1)
    knocks.push(
      { tick: 420, who: 'player', at: 'player-drop' },
      { tick: 1500, who: 'player', at: 'player-drop' },
    );
  if (i % 4 === 2)
    knocks.push(
      { tick: 600, who: 'player', at: [150, 60] },
      { tick: 700, who: 'player', at: [120.26, 40.74] },
    );
  if (i % 4 === 3) {
    knocks.push(
      { tick: 300, who: 'player', at: 'player-drop' },
      { tick: 900, who: 'player', at: 'rival-drop' },
    );
    knocks.push(
      { tick: 1200, who: 'player', at: 'player-drop' },
      { tick: 1800, who: 'player', at: 'player-drop' },
    );
  }
  const manualRival = i >= 16;
  if (manualRival) knocks.push({ tick: 480, who: 'rival', at: 'rival-drop' });
  return {
    name: `golden-${n}`,
    seed: `golden-${n}`,
    light: LIGHTS[i % 3],
    firstPicker: i % 2 === 0 ? 'player' : 'rival',
    playerPick: i % 6,
    rivalPick: manualRival ? (i + 1) % 6 : undefined,
    knocks,
  };
});
