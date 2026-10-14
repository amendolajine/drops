import { killDrop, spawnDrop } from '../../src/sim/drops.ts';
import { createRace, type RaceOptions } from '../../src/sim/race.ts';
import { KIND_AMBIENT, type RaceState } from '../../src/sim/state.ts';

/** A race whose glass is uniform and empty: no dirt, no wet streaks, no ambient drops, no rain, no events. */
export function bareRace(params: RaceOptions['params'] = {}): RaceState {
  const s = createRace('bare', {
    mode: 'rollout',
    params: {
      AMBIENT_COUNT: 0,
      RAIN_SCALE: 0,
      HET_AMP: 0,
      SPECK_AREA: 1e12,
      SMUDGE_CHANCE: 0,
      STICKER_CHANCE: 0,
      STREAKS_MIN: 0,
      STREAKS_MAX: 0,
      FEEDER_DIST_MIN: 1e6,
      FEEDER_DIST_MAX: 1e6,
      ...params,
    },
  });
  for (let i = 0; i < s.drops.n; i++) killDrop(s, i);
  s.glass.wet.fill(0);
  s.events = [];
  s.creatures = [];
  return s;
}

export function addDrop(s: RaceState, x: number, y: number, v: number): number {
  return spawnDrop(s, x, y, v, KIND_AMBIENT);
}

export function aliveCount(s: RaceState): number {
  let n = 0;
  for (let i = 0; i < s.drops.n; i++) if (s.drops.alive[i]) n++;
  return n;
}

export function totalVolume(s: RaceState): number {
  let v = 0;
  for (let i = 0; i < s.drops.n; i++) if (s.drops.alive[i]) v += s.drops.v[i];
  return v;
}
