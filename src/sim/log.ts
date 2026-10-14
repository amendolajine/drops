// The simulation's own event log: a fixed ring of (tick, code, a, b, c) numbers, no strings, no allocation.
// snapshot.ts turns entries into English lines for the debug overlay; src/debug/log.ts prints them.

import type { Log } from './state.ts';

export const L = {
  GREEN: 1,
  EVENT_WARN: 2,
  EVENT_START: 3,
  EVENT_END: 4,
  FLY_LAND: 5,
  CREATURE_GONE: 6,
  FLY_NO_LAND: 7,
  LEAF_LAND: 8,
  LEAF_SURF: 9,
  LEAF_CARRY: 10,
  KNOCK: 11,
  SCARE_OK: 12,
  SCARE_FAIL: 13,
  JOLT: 14,
  STOP_IT: 15,
  KNOCK_LOCKED: 16,
  KNOCK_COOLDOWN: 17,
  PICK: 18,
  MERGE_PICKED: 19,
  GULP: 20,
  CAND_FINISH: 21,
  CAND_OUT: 22,
  LEAD_SWAP: 23,
  FAST_FORWARD: 24,
  SLOWMO: 25,
  BREATH: 26,
  ANTI_STALL: 27,
  HARD_END: 28,
  RESULT: 29,
  SPAWN_FULL: 30,
  LIGHTNING: 31,
  FINAL_STRAIGHT: 32,
  BLOCKED: 33,
  RIVAL_NOTICE: 34,
} as const;

export function logEvent(log: Log, tick: number, code: number, a: number, b: number, c: number): void {
  const i = log.head;
  log.tick[i] = tick;
  log.code[i] = code;
  log.a[i] = a;
  log.b[i] = b;
  log.c[i] = c;
  log.head = (i + 1) % log.cap;
  if (log.count < log.cap) log.count++;
  log.total++;
}

/** Visit entries oldest first. Index k = 0 is the oldest kept entry. */
export function logEntryIndex(log: Log, k: number): number {
  return (log.head - log.count + k + log.cap) % log.cap;
}
