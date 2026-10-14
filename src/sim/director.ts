// The race director (MAP 2.1): decides the result and stages the race. It watches only the two picked
// drops; it never changes physics or events (those never look at the picks).
// - first picked drop over the rear seal wins; gulp: the bigger drop wins, within 5% it is a draw
// - both picked drops out: "nobody wins" (draw); one out: the other must still finish (or lead at 90 s)
// - hard end at 90 s: the picked drop nearest the finish wins
// - fast-forward when the race is decided, slow motion when the predicted gap is under 1 s at the line,
//   a "breath" for the music under 1.5 s; knocks lock in the final straight (85% of the path)

import { round } from './fmath.ts';
import { L, logEvent } from './log.ts';
import {
  CAND_FINISHED,
  CAND_OUT,
  CAND_RACING,
  DRAW,
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

export function progressOf(s: RaceState, c: number): number {
  const k = s.cands;
  if (k.state[c] === CAND_FINISHED) return 1;
  const slot = k.slot[c];
  const x = k.state[c] === CAND_RACING ? s.drops.x[slot] : s.drops.x[slot];
  const span = s.p.FINISH_X - k.startX[c];
  const pr = span > 0 ? (x - k.startX[c]) / span : 1;
  return pr < 0 ? 0 : pr > 1 ? 1 : pr;
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

  // 3. arrival forecast from a smoothed speed (MAP 9.3 rule 5: computed inside the sim)
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

  // 4. staging flags (presentation only; latched once set)
  if (dir.fastForwardTick < 0) {
    let ff = false;
    if (s.result.reason !== 0) ff = true;
    if (
      (stP === CAND_OUT && k.outTick[pp] >= 0 && progP < p.FF_OUT_PROGRESS) ||
      (stR === CAND_OUT && progR < p.FF_OUT_PROGRESS)
    )
      ff = true;
    if (bothRacing && dir.predictedGap > p.FF_GAP_S && lead >= p.FF_MIN_PROGRESS) {
      dir.ffHold++;
      if (dir.ffHold >= p.FF_HOLD_S * p.TICK_HZ) ff = true;
    } else dir.ffHold = 0;
    if (ff) {
      dir.fastForwardTick = rt;
      logEvent(s.log, s.tick, L.FAST_FORWARD, 0, 0, 0);
    }
  }
  if (bothRacing && dir.breathTick < 0 && soon < p.BREATH_GAP_S && dir.predictedGap < p.BREATH_GAP_S) {
    dir.breathTick = rt;
    logEvent(s.log, s.tick, L.BREATH, dir.predictedGap, 0, 0);
  }
  if (bothRacing && dir.slowMoTick < 0 && soon < p.SLOWMO_GAP_S && dir.predictedGap < p.SLOWMO_GAP_S) {
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
