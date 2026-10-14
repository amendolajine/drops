// Runs one golden case and returns its fingerprints. Pure: runs the same in Node and in every browser.

import { createRace, hashState, step } from '../../src/sim/index.ts';
import { CAND_RACING, PHASE_DONE, PLAYER, type RaceState, RIVAL } from '../../src/sim/state.ts';
import type { GoldenCase } from './cases.ts';

export interface GoldenResult {
  name: string;
  /** hashState every 600 sim ticks (10 s), from the first tick */
  checkpoints: string[];
  final: string;
  /** fingerprint of the event schedule and the creatures, decided at creation */
  schedule: string;
  winner: number;
  reason: number;
  endTick: number;
  picks: [number, number];
  knocksUsed: [number, number];
}

function fnv(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

function dropPos(s: RaceState, side: number): [number, number] {
  const c = s.picks[side];
  if (s.cands.state[c] !== CAND_RACING) return [s.cands.endX[c], s.cands.endY[c]];
  const slot = s.cands.slot[c];
  return [s.drops.x[slot], s.drops.y[slot]];
}

export function runGoldenCase(c: GoldenCase): GoldenResult {
  const manual = c.rivalPick !== undefined;
  const s = createRace(c.seed, { light: c.light, firstPicker: c.firstPicker, rivalAuto: !manual });
  const schedule = fnv(
    JSON.stringify({ events: s.events, creatures: s.creatures, lightning: Array.from(s.lightning) }),
  );
  const checkpoints: string[] = [hashState(s)];
  if (manual) {
    const order = c.firstPicker === 'player' ? ['player', 'rival'] : ['rival', 'player'];
    for (const who of order)
      step(s, {
        picks: [
          { who: who as 'player' | 'rival', cand: who === 'player' ? c.playerPick : (c.rivalPick as number) },
        ],
      });
  } else {
    let pick = c.playerPick;
    if (s.picks[RIVAL] === pick) pick = (pick + 1) % 6;
    step(s, { picks: [{ who: 'player', cand: pick }] });
  }
  if (s.phase === 0) throw new Error(`${c.name}: picks not accepted`);
  const byTick = new Map<number, typeof c.knocks>();
  for (const k of c.knocks) byTick.set(k.tick, [...(byTick.get(k.tick) ?? []), k]);
  while (s.phase !== PHASE_DONE) {
    const rt = s.tick + 1 - s.greenTick;
    const ks = byTick.get(rt);
    const knocks = ks?.map((k) => {
      const [x, y] =
        k.at === 'player-drop' ? dropPos(s, PLAYER) : k.at === 'rival-drop' ? dropPos(s, RIVAL) : k.at;
      return { who: k.who, x, y };
    });
    step(s, knocks ? { knocks } : undefined);
    if (s.tick % 600 === 0) checkpoints.push(hashState(s));
  }
  return {
    name: c.name,
    checkpoints,
    final: hashState(s),
    schedule,
    winner: s.result.winner,
    reason: s.result.reason,
    endTick: s.result.endTick,
    picks: [s.picks[PLAYER], s.picks[RIVAL]],
    knocksUsed: [s.knocks.used[PLAYER], s.knocks.used[RIVAL]],
  };
}
