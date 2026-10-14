// The knock on the glass (MAP 3.4): one lever with two uses that share the same 3 knocks.
// Use 1, scare: the nearest landed creature within 15 mm rolls to leave (fly 58%, leaf 50%),
// +20 points per failed knock on the same creature, the third knock on it always works (pity rule).
// Use 2, jolt: only the nearest stuck drop within 10 mm gets its pinning halved for 0.25 s.
// Every knock is rounded to 0.5 mm before it is applied, live or in a replay (MAP 9.3 rule 6).
// Each scare roll is a counter hash of (creature, side, that side's attempt number on that creature), so a
// knock by one side never shifts the dice of the other side (determinism review, D021).

import { creatureGone } from './events.ts';
import { clamp, round } from './fmath.ts';
import { L, logEvent } from './log.ts';
import { hashFloat } from './rng.ts';
import { CR_FLY, CR_LANDED, PHASE_RACING, PLAYER, type RaceState, raceTick } from './state.ts';

export function quantizeKnock(mm: number, q: number): number {
  return round(mm / q) * q;
}

/** Apply a knock by side (PLAYER or RIVAL). Returns true when a knock was spent. */
export function applyKnock(s: RaceState, who: number, xIn: number, yIn: number): boolean {
  const p = s.p;
  if (s.phase !== PHASE_RACING) return false;
  const rt = raceTick(s);
  const k = s.knocks;
  if (k.left[who] <= 0) {
    // the 4th knock: a parent says "stop it!" - no effect, no penalty (MAP 3.4)
    k.wanted[who]++;
    logEvent(s.log, s.tick, L.STOP_IT, who, 0, 0);
    return false;
  }
  if (k.locked) {
    logEvent(s.log, s.tick, L.KNOCK_LOCKED, who, 0, 0);
    return false;
  }
  if (k.lastTick[who] >= 0 && rt - k.lastTick[who] < round(p.KNOCK_COOLDOWN_S * p.TICK_HZ)) {
    logEvent(s.log, s.tick, L.KNOCK_COOLDOWN, who, 0, 0);
    return false;
  }
  const x = quantizeKnock(clamp(xIn, 0, p.W), p.KNOCK_QUANT_MM);
  const y = quantizeKnock(clamp(yIn, 0, p.H), p.KNOCK_QUANT_MM);
  k.left[who]--;
  k.used[who]++;
  k.lastTick[who] = rt;
  logEvent(s.log, s.tick, L.KNOCK, who, x, y);

  // use 1: scare the nearest landed creature within KNOCK_SCARE_R
  let best = -1;
  let bestD2 = p.KNOCK_SCARE_R * p.KNOCK_SCARE_R;
  for (let ci = 0; ci < s.creatures.length; ci++) {
    const c = s.creatures[ci];
    if (c.state !== CR_LANDED) continue;
    const dx = c.x - x;
    const dy = c.y - y;
    const d2 = dx * dx + dy * dy;
    if (d2 <= bestD2) {
      bestD2 = d2;
      best = ci;
    }
  }
  if (best >= 0) {
    const c = s.creatures[best];
    const base = c.kind === CR_FLY ? p.SCARE_FLY : p.SCARE_LEAF;
    const sure = c.failedKnocks >= p.PITY_SURE_AFTER;
    const attempt = who === PLAYER ? c.triesPlayer++ : c.triesRival++;
    const roll = hashFloat(s.knockSeed, best * 4 + who, attempt);
    if (sure || roll < base + p.PITY_STEP * c.failedKnocks) {
      logEvent(s.log, s.tick, L.SCARE_OK, who, best, c.failedKnocks);
      creatureGone(s, best, 1);
    } else {
      c.failedKnocks++;
      logEvent(s.log, s.tick, L.SCARE_FAIL, who, best, c.failedKnocks);
    }
  }

  // use 2: jolt the nearest stuck drop within KNOCK_JOLT_R (tie -> lower id)
  const d = s.drops;
  let pick = -1;
  let pickD2 = p.KNOCK_JOLT_R * p.KNOCK_JOLT_R;
  for (let i = 0; i < d.n; i++) {
    if (!d.alive[i] || d.moving[i] || d.held[i] >= 0) continue;
    const dx = d.x[i] - x;
    const dy = d.y[i] - y;
    const d2 = dx * dx + dy * dy;
    if (d2 < pickD2 || (d2 === pickD2 && pick >= 0 && d.id[i] < d.id[pick])) {
      pickD2 = d2;
      pick = i;
    }
  }
  if (pick >= 0) {
    d.jolt[pick] = round(p.KNOCK_JOLT_S * p.TICK_HZ);
    logEvent(s.log, s.tick, L.JOLT, who, d.id[pick], d.cand[pick]);
  }
  return true;
}
