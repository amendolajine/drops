// The race director (MAP 2.1): decides the result and stages the race. It watches only the two picked
// drops; it never changes physics or events (those never look at the picks).
// - first picked drop over the rear seal wins; gulp: the bigger drop wins, within 5% it is a draw
// - both picked drops out: "nobody wins" (draw); one out: the other must still finish (or lead at 90 s)
// - hard end at 90 s: the picked drop nearest the finish wins
// - fast-forward when the race is decided, when a picked drop goes out before 70% of its path, or when the
//   conservative forecast says the gap stays above 6 s (D023); slow motion when the predicted gap is under 1 s
//   at the line, a "breath" for the music under 1.5 s, never during fast-forward; knocks lock in the final
//   straight (85% of the path)

import { round } from './fmath.ts';
import { L, logEvent } from './log.ts';
import {
  CAND_FINISHED,
  CAND_OUT,
  CAND_RACING,
  DRAW,
  FF_DECIDED,
  FF_GAP,
  FF_NONE,
  FF_OUT,
  PHASE_DONE,
  PLAYER,
  R_BOTH_OUT,
  R_FINISH,
  R_GULP,
  R_GULP_DRAW,
  R_TIME_DRAW,
  R_TIME_NEAREST,
  type RaceState,
  RIVAL,
  raceTick,
} from './state.ts';

function decide(s: RaceState, winner: number, reason: number): void {
  const r = s.result;
  if (r.reason !== 0) return;
  r.winner = winner;
  r.reason = reason;
  r.decidedTick = raceTick(s);
  logEvent(s.log, s.tick, L.RESULT, winner, reason, 0);
}

/** Called by the merge step when two candidates touch. */
export function decideGulp(s: RaceState, keeper: number, eaten: number, vk: number, vo: number): void {
  if (s.mode !== 'race') return;
  const pp = s.picks[PLAYER];
  const pr = s.picks[RIVAL];
  const pair = (keeper === pp && eaten === pr) || (keeper === pr && eaten === pp);
  if (!pair) return;
  const big = vk > vo ? vk : vo;
  const diff = vk > vo ? vk - vo : vo - vk;
  if (diff <= s.p.GULP_DRAW * big) decide(s, DRAW, R_GULP_DRAW);
  else decide(s, keeper === pp ? PLAYER : RIVAL, R_GULP);
}

/** Share of its path a candidate has done, 0..1. An out candidate keeps the progress it had when it left:
 *  its drop slot is recycled by then, so reading the slot would read another drop (metrics review). */
export function progressOf(s: RaceState, c: number): number {
  const k = s.cands;
  if (k.state[c] === CAND_FINISHED) return 1;
  const x = k.state[c] === CAND_RACING ? s.drops.x[k.slot[c]] : k.endX[c];
  const span = s.p.FINISH_X - k.startX[c];
  const pr = span > 0 ? (x - k.startX[c]) / span : 1;
  return pr < 0 ? 0 : pr > 1 ? 1 : pr;
}

function maxOf3(a: number, b: number, c: number): number {
  const m = a > b ? a : b;
  return m > c ? m : c;
}

function latchFastForward(s: RaceState, why: number, rt: number): void {
  const dir = s.director;
  dir.ffOn = 1;
  dir.ffReason = why;
  if (dir.fastForwardTick < 0) dir.fastForwardTick = rt;
  if (why === FF_GAP) {
    if (dir.ffGapTick < 0) {
      dir.ffGapTick = rt;
      dir.ffTrailer = dir.ffTrailerNow;
    }
  }
  logEvent(s.log, s.tick, L.FAST_FORWARD, why, dir.safeGap, 0);
}

function end(s: RaceState): void {
  s.phase = PHASE_DONE;
  s.result.endTick = raceTick(s);
}

/** Rollout mode (bank / bot reading): ends when all candidates are resolved or at the hard end. */
export function rolloutUpdate(s: RaceState): void {
  const k = s.cands;
  let open = 0;
  for (let c = 0; c < k.count; c++) if (k.state[c] === CAND_RACING) open++;
  if (open === 0 || raceTick(s) >= round(s.p.HARD_END_S * s.p.TICK_HZ)) end(s);
}

export function directorUpdate(s: RaceState): void {
  const p = s.p;
  const k = s.cands;
  const d = s.drops;
  const dir = s.director;
  const rt = raceTick(s);
  const pp = s.picks[PLAYER];
  const pr = s.picks[RIVAL];
  const stP = k.state[pp];
  const stR = k.state[pr];

  // 1. result by finish / outs
  if (s.result.reason === 0) {
    const fP = stP === CAND_FINISHED;
    const fR = stR === CAND_FINISHED;
    if (fP && fR) {
      const tp = k.finishTime[pp];
      const tr = k.finishTime[pr];
      decide(s, tp < tr ? PLAYER : tr < tp ? RIVAL : DRAW, R_FINISH);
    } else if (fP) decide(s, PLAYER, R_FINISH);
    else if (fR) decide(s, RIVAL, R_FINISH);
    else if (stP === CAND_OUT && stR === CAND_OUT) decide(s, DRAW, R_BOTH_OUT);
  }
  if (stP === CAND_FINISHED && stR === CAND_FINISHED && s.result.gap < 0) {
    const g = k.finishTime[pp] - k.finishTime[pr];
    s.result.gap = g < 0 ? -g : g;
  }
  if (s.result.firstFinishTick < 0 && (stP === CAND_FINISHED || stR === CAND_FINISHED))
    s.result.firstFinishTick = rt;

  // 2. progress, lead swaps, final straight
  const progP = progressOf(s, pp);
  const progR = progressOf(s, pr);
  const lead = progP > progR ? progP : progR;
  if (lead > dir.maxProgress) dir.maxProgress = lead;
  if (stP === CAND_RACING && stR === CAND_RACING) {
    const diff = d.x[k.slot[pp]] - d.x[k.slot[pr]];
    const h = p.LEAD_HYST_MM;
    let now = dir.lead;
    if (diff > h) now = 1;
    else if (diff < -h) now = -1;
    if (now !== dir.lead) {
      if (dir.lead !== 0) {
        dir.leadSwaps++;
        if (dir.maxProgress >= 0.5) dir.leadSwapsAfterHalf++;
        logEvent(s.log, s.tick, L.LEAD_SWAP, now > 0 ? PLAYER : RIVAL, dir.maxProgress, 0);
      }
      dir.lead = now;
    }
  }
  if (!s.knocks.locked && dir.maxProgress >= p.FINAL_STRAIGHT) {
    s.knocks.locked = 1;
    logEvent(s.log, s.tick, L.FINAL_STRAIGHT, 0, 0, 0);
  }

  // 3a. near-term arrival forecast from a smoothed speed: breath and slow motion near the line
  //     (MAP 9.3 rule 5: computed inside the sim)
  const alpha = s.dt / p.ETA_TAU_S;
  for (let side = PLAYER; side <= RIVAL; side++) {
    const c = side === PLAYER ? pp : pr;
    if (k.state[c] !== CAND_RACING) {
      dir.eta[side] = k.state[c] === CAND_FINISHED ? 0 : 1e9;
      continue;
    }
    const slot = k.slot[c];
    dir.emaVx[side] += alpha * (d.vx[slot] - dir.emaVx[side]);
    const vx = dir.emaVx[side] > 0.3 ? dir.emaVx[side] : 0.3;
    dir.eta[side] = (p.FINISH_X - d.x[slot]) / vx;
  }
  const bothRacing = stP === CAND_RACING && stR === CAND_RACING;
  const gap = dir.eta[PLAYER] - dir.eta[RIVAL];
  dir.predictedGap = bothRacing ? (gap < 0 ? -gap : gap) : -1;
  const soon = dir.eta[PLAYER] < dir.eta[RIVAL] ? dir.eta[PLAYER] : dir.eta[RIVAL];

  // 3b. conservative forecast for fast-forward (D023). Each drop gets two speeds: over the last FF_WINDOW_S
  //     of car-moving time, and since the green light. The leader is assumed to go at the slower one, the
  //     trailer at the faster one, so a drop that is only paused is not written off. Frozen while the car is
  //     slow: at a stop every drop waits.
  const carMoving = s.car.kmh >= p.FF_MIN_KMH;
  if (!bothRacing) dir.safeGap = -1;
  else if (carMoving) {
    const n = dir.xHist.length >> 1;
    const xP = d.x[k.slot[pp]];
    const xR = d.x[k.slot[pr]];
    const full = dir.histCount >= n;
    const oldest = full ? dir.histHead : 0;
    const span = (full ? n : dir.histCount) * s.dt;
    const tRace = rt * s.dt;
    if (span >= 1 && tRace > 0) {
      const winP = (xP - dir.xHist[oldest]) / span;
      const winR = (xR - dir.xHist[n + oldest]) / span;
      const avgP = (xP - k.startX[pp]) / tRace;
      const avgR = (xR - k.startX[pr]) / tRace;
      const fastP = maxOf3(winP, avgP, 0.3);
      const fastR = maxOf3(winR, avgR, 0.3);
      const slowP = maxOf3(winP < avgP ? winP : avgP, 0.3, 0.3);
      const slowR = maxOf3(winR < avgR ? winR : avgR, 0.3, 0.3);
      const distP = p.FINISH_X - xP;
      const distR = p.FINISH_X - xR;
      const lagR = distR / fastR - distP / slowP; // rival behind by at least this
      const lagP = distP / fastP - distR / slowR; // player behind by at least this
      dir.safeGap = lagR > lagP ? lagR : lagP;
      dir.ffTrailerNow = lagR > lagP ? RIVAL : PLAYER;
    }
    dir.xHist[dir.histHead] = xP;
    dir.xHist[n + dir.histHead] = xR;
    dir.histHead = (dir.histHead + 1) % n;
    if (!full) dir.histCount++;
  }

  // 4. staging flags (presentation only). Decided result or an early out: fast-forward to the end.
  //    A gap fast-forward ends again if the race closes up; breath and slow motion never run during
  //    fast-forward (MAP 2.1 "se la corsa e gia decisa, niente respiro").
  if (!dir.ffOn || dir.ffReason === FF_GAP) {
    let why = FF_NONE;
    if (s.result.reason !== 0) why = FF_DECIDED;
    else if (
      (stP === CAND_OUT && progP < p.FF_OUT_PROGRESS) ||
      (stR === CAND_OUT && progR < p.FF_OUT_PROGRESS)
    )
      why = FF_OUT;
    if (why !== FF_NONE) latchFastForward(s, why, rt);
  }
  if (!dir.ffOn) {
    if (bothRacing && dir.safeGap > p.FF_GAP_S && lead >= p.FF_MIN_PROGRESS) {
      if (carMoving) dir.ffHold++;
      if (dir.ffHold >= p.FF_HOLD_S * p.TICK_HZ) latchFastForward(s, FF_GAP, rt);
    } else if (carMoving || !bothRacing) dir.ffHold = 0;
  } else if (
    dir.ffReason === FF_GAP &&
    bothRacing &&
    carMoving &&
    dir.safeGap >= 0 &&
    dir.safeGap < p.FF_UNLATCH_GAP_S
  ) {
    dir.ffOn = 0;
    dir.ffReason = FF_NONE;
    dir.ffHold = 0;
    dir.ffUnlatches++;
    logEvent(s.log, s.tick, L.FF_OFF, dir.safeGap, 0, 0);
  }
  if (
    bothRacing &&
    !dir.ffOn &&
    dir.breathTick < 0 &&
    soon < p.BREATH_GAP_S &&
    dir.predictedGap < p.BREATH_GAP_S
  ) {
    dir.breathTick = rt;
    logEvent(s.log, s.tick, L.BREATH, dir.predictedGap, 0, 0);
  }
  if (
    bothRacing &&
    !dir.ffOn &&
    dir.slowMoTick < 0 &&
    soon < p.SLOWMO_GAP_S &&
    dir.predictedGap < p.SLOWMO_GAP_S
  ) {
    dir.slowMoTick = rt;
    logEvent(s.log, s.tick, L.SLOWMO, dir.predictedGap, 0, 0);
  }

  // 5. end of the race: both picked drops resolved, or the hard end at 90 s
  const doneP = stP !== CAND_RACING;
  const doneR = stR !== CAND_RACING;
  if (doneP && doneR) {
    end(s);
    return;
  }
  if (rt >= round(p.HARD_END_S * p.TICK_HZ)) {
    logEvent(s.log, s.tick, L.HARD_END, 0, 0, 0);
    if (s.result.reason === 0) {
      if (!doneP && !doneR) {
        const xP = d.x[k.slot[pp]];
        const xR = d.x[k.slot[pr]];
        decide(s, xP > xR ? PLAYER : xR > xP ? RIVAL : DRAW, xP === xR ? R_TIME_DRAW : R_TIME_NEAREST);
      } else decide(s, !doneP ? PLAYER : RIVAL, R_TIME_NEAREST);
    }
    end(s);
  }
}
