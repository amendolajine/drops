// Glass generation (MAP 3.1, R4 1.3, 3.3): the visible pin field (dirt), old wet streaks, stickers,
// the 6 candidate drops with their hidden profiles, feeders and the ambient drops.
// Built once per race from the glass-side streams, so bank rollouts that change only the weather
// see exactly the same glass.

import { cbrt, floor, max, min, sqrt } from './fmath.ts';
import type { Params } from './params.ts';
import { chance, int, next, nextU32, range, type Stream, valueNoise } from './rng.ts';
import {
  GLASS_KINDS,
  type Glass,
  type GlassKind,
  PROFILE_FAVORITE,
  PROFILE_FREE,
  PROFILE_MIDDLE,
  PROFILE_MONSTER,
  PROFILE_OUTSIDER,
  PROFILE_SLEEPER,
} from './state.ts';

export interface CandidateSpec {
  x: number;
  y: number;
  v: number;
  profile: number;
  feederX: number;
  feederY: number;
  feederV: number;
}

export interface AmbientSpec {
  x: number;
  y: number;
  v: number;
}

export interface GlassBuild {
  glass: Glass;
  cands: CandidateSpec[];
  ambient: AmbientSpec[];
}

export function pinAt(g: Glass, x: number, y: number): number {
  let xi = floor(x);
  let yi = floor(y);
  if (xi < 0) xi = 0;
  else if (xi >= g.pw) xi = g.pw - 1;
  if (yi < 0) yi = 0;
  else if (yi >= g.ph) yi = g.ph - 1;
  return g.pin[yi * g.pw + xi];
}

export function wetIndex(g: Glass, cell: number, x: number, y: number): number {
  let xi = floor(x / cell);
  let yi = floor(y / cell);
  if (xi < 0) xi = 0;
  else if (xi >= g.ww) xi = g.ww - 1;
  if (yi < 0) yi = 0;
  else if (yi >= g.wh) yi = g.wh - 1;
  return yi * g.ww + xi;
}

function stampDisc(g: Glass, cx: number, cy: number, r: number, mul: number): void {
  const x0 = max(0, floor(cx - r));
  const x1 = min(g.pw - 1, floor(cx + r));
  const y0 = max(0, floor(cy - r));
  const y1 = min(g.ph - 1, floor(cy + r));
  const r2 = r * r;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const dx = x + 0.5 - cx;
      const dy = y + 0.5 - cy;
      if (dx * dx + dy * dy <= r2) g.pin[y * g.pw + x] *= mul;
    }
  }
}

/** A wet streak from (x0, y0) running backward and slightly down to x1, value w. */
function wetStreak(
  g: Glass,
  p: Params,
  x0: number,
  y0: number,
  x1: number,
  slope: number,
  w: number,
  seed: number,
) {
  const cell = p.WET_CELL;
  for (let x = x0; x <= x1; x += 1) {
    const wobble = (valueNoise(x / 14, 0.5, seed) - 0.5) * 3;
    const y = y0 + slope * (x - x0) + wobble;
    if (y < 1 || y > p.H - 1) break;
    for (let k = -1; k <= 1; k += 2) {
      const idx = wetIndex(g, cell, x, y + k * 0.75);
      if (g.wet[idx] < w) g.wet[idx] = w;
    }
  }
}

interface ProfileRule {
  profile: number;
  vMin: number;
  vMax: number;
  yMin: number;
  yMax: number;
  feeder: boolean;
  streak: boolean;
}

function profilesFor(kind: GlassKind, p: Params): ProfileRule[] {
  const yLo = p.CAND_Y_MIN;
  const yHi = p.CAND_Y_MAX;
  const fav: ProfileRule = {
    profile: PROFILE_FAVORITE,
    vMin: 7.6,
    vMax: p.CAND_V_MAX,
    yMin: 22,
    yMax: 40,
    feeder: false,
    streak: false,
  };
  const mid: ProfileRule = {
    profile: PROFILE_MIDDLE,
    vMin: 6.5,
    vMax: 7.5,
    yMin: yLo,
    yMax: yHi,
    feeder: false,
    streak: true,
  };
  const out: ProfileRule = {
    profile: PROFILE_OUTSIDER,
    vMin: p.CAND_V_MIN,
    vMax: 6.2,
    yMin: yLo,
    yMax: yHi,
    feeder: true,
    streak: false,
  };
  const sleep: ProfileRule = {
    profile: PROFILE_SLEEPER,
    vMin: p.CAND_V_MIN,
    vMax: 6.2,
    yMin: yLo,
    yMax: yLo + 6,
    feeder: false,
    streak: false,
  };
  const free: ProfileRule = {
    profile: PROFILE_FREE,
    vMin: p.CAND_V_MIN,
    vMax: p.CAND_V_MAX,
    yMin: yLo,
    yMax: yHi,
    feeder: false,
    streak: false,
  };
  if (kind === 'monster') {
    const monster: ProfileRule = {
      profile: PROFILE_MONSTER,
      vMin: p.MONSTER_V_MIN,
      vMax: p.MONSTER_V_MAX,
      yMin: 22,
      yMax: 40,
      feeder: false,
      streak: false,
    };
    const small: ProfileRule = { ...out, vMax: 6.5 };
    return [monster, small, small, small, small, small];
  }
  if (kind === 'drizzle') {
    const smallMid: ProfileRule = { ...mid, vMin: p.CAND_V_MIN, vMax: 6.5 };
    const smallFree: ProfileRule = { ...free, vMax: 6.5 };
    return [smallMid, smallMid, smallMid, out, sleep, smallFree];
  }
  if (kind === 'twins') {
    return [fav, fav, mid, out, sleep, free];
  }
  // 'lane': the standard four profiles plus two free drops; the middle drop sits on the long lane
  return [fav, mid, out, sleep, free, free];
}

/**
 * Relative race speed of a candidate of volume v (1 at CAND_V_MIN), from the measured average speed of
 * finishing candidates in rollouts (TUNING 2026-10-14: 4.6 mm/s at 5.5 uL to 5.6 mm/s at 8.5 uL). The pure
 * three-force formula predicts a much steeper curve because it ignores merges and wet trails along the way.
 */
export function relSpeed(p: Params, v: number): number {
  return 1 + p.CAND_SPEED_PER_UL * (v - p.CAND_V_MIN);
}

/** Volume in [lo, hi] whose relSpeed equals `rel` (clamped at the ends). */
function volumeForSpeed(p: Params, rel: number, lo: number, hi: number): number {
  const v = p.CAND_V_MIN + (rel - 1) / p.CAND_SPEED_PER_UL;
  return v < lo ? lo : v > hi ? hi : v;
}

export function buildGlass(
  p: Params,
  glassStream: Stream,
  candStream: Stream,
  ambientStream: Stream,
): GlassBuild {
  const W = p.W;
  const H = p.H;
  const kind = GLASS_KINDS[int(glassStream, GLASS_KINDS.length)];
  const pw = W;
  const ph = H;
  const ww = floor((W + p.WET_CELL - 1) / p.WET_CELL);
  const wh = floor((H + p.WET_CELL - 1) / p.WET_CELL);
  const glass: Glass = {
    kind,
    pin: new Float64Array(pw * ph),
    pw,
    ph,
    wet: new Float64Array(ww * wh),
    ww,
    wh,
    wetDecay: 1,
    specks: new Float64Array(0),
    smudges: new Float64Array(0),
    stickers: new Float64Array(0),
    genRetries: 0,
  };

  // 1. heterogeneous pinning: two octaves of value noise (R4 1.3)
  const s1 = nextU32(glassStream) | 0;
  const s2 = nextU32(glassStream) | 0;
  const w1 = p.HET_W1;
  for (let y = 0; y < ph; y++) {
    for (let x = 0; x < pw; x++) {
      const cx = x + 0.5;
      const cy = y + 0.5;
      const n =
        w1 * (2 * valueNoise(cx / p.HET_SCALE1, cy / p.HET_SCALE1, s1) - 1) +
        (1 - w1) * (2 * valueNoise(cx / p.HET_SCALE2, cy / p.HET_SCALE2, s2) - 1);
      glass.pin[y * pw + x] = 1 + p.HET_AMP * n;
    }
  }

  // 2. dirt specks (R4 1.3: discs r 1-2.5 mm at x2.4, one per 330 mm^2)
  const nSpecks = floor((W * H) / p.SPECK_AREA);
  glass.specks = new Float64Array(nSpecks * 3);
  for (let k = 0; k < nSpecks; k++) {
    const cx = next(glassStream) * W;
    const cy = next(glassStream) * H;
    const r = range(glassStream, p.SPECK_R_MIN, p.SPECK_R_MAX);
    glass.specks[k * 3] = cx;
    glass.specks[k * 3 + 1] = cy;
    glass.specks[k * 3 + 2] = r;
    stampDisc(glass, cx, cy, r, p.SPECK_MUL);
  }

  // 3. road-dirt smudges (MAP 3.3 event 25) and a sticker (event 26)
  if (chance(glassStream, p.SMUDGE_CHANCE)) {
    const count = 1 + int(glassStream, 2);
    glass.smudges = new Float64Array(count * 3);
    for (let k = 0; k < count; k++) {
      const cx = range(glassStream, 60, 215);
      const cy = range(glassStream, 12, H - 12);
      const r = range(glassStream, p.SMUDGE_R_MIN, p.SMUDGE_R_MAX);
      glass.smudges[k * 3] = cx;
      glass.smudges[k * 3 + 1] = cy;
      glass.smudges[k * 3 + 2] = r;
      stampDisc(glass, cx, cy, r, p.SMUDGE_MUL);
    }
  }
  if (chance(glassStream, p.STICKER_CHANCE)) {
    glass.stickers = new Float64Array(3);
    glass.stickers[0] = range(glassStream, 80, 200);
    glass.stickers[1] = range(glassStream, 20, 100);
    glass.stickers[2] = range(glassStream, p.STICKER_R_MIN, p.STICKER_R_MAX);
  }

  // 4. candidates (MAP 3.1). First 6 spots at least CAND_SPACING apart in the start box, then the hidden
  //    profiles are dealt to the spots: the sleeper takes the highest spot, and bigger drops take spots
  //    further back ("advanced starts go with smaller drops"), with CAND_X_JITTER mm of noise.
  const rules = profilesFor(kind, p);
  const n = rules.length;
  const px: number[] = [];
  const py: number[] = [];
  // glass.genRetries counts full-spacing failures: the map asks for fewer than 1 glass in 20 to need the fallback
  let spacing = p.CAND_SPACING;
  for (let attempt = 0; attempt < 400 && px.length < n; attempt++) {
    if (attempt > 0 && attempt % 40 === 0) {
      glass.genRetries++;
      spacing -= 1;
    }
    px.length = 0;
    py.length = 0;
    const sp2 = spacing * spacing;
    for (let tryN = 0; tryN < 200 && px.length < n; tryN++) {
      const x = range(candStream, p.CAND_X_MIN, p.CAND_X_MAX);
      const y = range(candStream, p.CAND_Y_MIN, p.CAND_Y_MAX);
      let clear = true;
      for (let j = 0; j < px.length && clear; j++) {
        const dx = px[j] - x;
        const dy = py[j] - y;
        if (dx * dx + dy * dy < sp2) clear = false;
      }
      if (clear && glass.stickers.length === 3) {
        const dx = glass.stickers[0] - x;
        const dy = glass.stickers[1] - y;
        const rr = glass.stickers[2] + 6;
        if (dx * dx + dy * dy < rr * rr) clear = false;
      }
      if (clear) {
        px.push(x);
        py.push(y);
      }
    }
  }
  // roles: the sleeper takes the highest spot; the monster and the favourites the spots furthest back;
  // the outsider the most advanced spot; the others the rest (MAP 3.1 profiles, hidden from the player)
  const used: boolean[] = [false, false, false, false, false, false, false, false];
  const spotOf: number[] = [];
  for (let i = 0; i < n; i++) spotOf.push(-1);
  const takeSpot = (i: number, score: (j: number) => number) => {
    let best = -1;
    for (let j = 0; j < n; j++) if (!used[j] && (best < 0 || score(j) < score(best))) best = j;
    spotOf[i] = best;
    used[best] = true;
  };
  const order = [PROFILE_SLEEPER, PROFILE_MONSTER, PROFILE_FAVORITE, PROFILE_OUTSIDER];
  for (const prof of order) {
    for (let i = 0; i < n; i++) {
      if (rules[i].profile !== prof || spotOf[i] >= 0) continue;
      if (prof === PROFILE_SLEEPER) takeSpot(i, (j) => py[j]);
      else if (prof === PROFILE_OUTSIDER) takeSpot(i, (j) => -px[j] + range(candStream, 0, p.CAND_X_JITTER));
      else takeSpot(i, (j) => px[j] + range(candStream, 0, p.CAND_X_JITTER));
    }
  }
  for (let i = 0; i < n; i++) if (spotOf[i] < 0) takeSpot(i, () => next(candStream));
  // volumes: equal expected arrival on average glass at cruise, so advanced starts get smaller drops
  // (MAP 3.1 "il generatore abbina le partenze avanzate a gocce piu piccole"), plus CAND_ETA_NOISE.
  // The monster keeps its own size; the twins share one volume.
  let xFront = -1;
  for (let j = 0; j < n; j++) if (px[j] > xFront) xFront = px[j];
  const vBase = range(candStream, p.CAND_V_MIN, p.CAND_V_MIN + 0.5);
  const vRef = relSpeed(p, vBase);
  const vols: number[] = [];
  let twinV = -1;
  for (let i = 0; i < n; i++) {
    const rule = rules[i];
    const j = spotOf[i];
    let v: number;
    if (rule.profile === PROFILE_MONSTER) v = range(candStream, rule.vMin, rule.vMax);
    else {
      const want =
        ((vRef * (p.FINISH_X - px[j])) / (p.FINISH_X - xFront)) *
        (1 + range(candStream, -p.CAND_ETA_NOISE, p.CAND_ETA_NOISE));
      v = volumeForSpeed(p, want, rule.vMin, rule.vMax);
    }
    if (kind === 'twins' && rule.profile === PROFILE_FAVORITE) {
      if (twinV < 0) twinV = v;
      else v = twinV;
    }
    vols.push(v);
  }
  const specs: CandidateSpec[] = [];
  for (let i = 0; i < n; i++) {
    const j = spotOf[i];
    specs.push({
      x: px[j],
      y: py[j],
      v: vols[i],
      profile: rules[i].profile,
      feederX: -1,
      feederY: -1,
      feederV: 0,
    });
  }
  // feeders: a bigger-than-ambient drop upstream on the same line, kept clear of the other candidates
  for (let i = 0; i < n; i++) {
    if (!rules[i].feeder) continue;
    const c = specs[i];
    for (let tryN = 0; tryN < 8; tryN++) {
      const d = range(candStream, p.FEEDER_DIST_MIN, p.FEEDER_DIST_MAX);
      const fx = c.x - d;
      const fy = c.y + range(candStream, -1.5, 1.5);
      if (fx < 3) continue;
      let clear = true;
      for (let j = 0; j < n && clear; j++) {
        if (j === i) continue;
        const o = specs[j];
        const ex = o.x - fx;
        const ey = o.y - fy;
        if (ex * ex + ey * ey < 64) clear = false;
        if (o.feederX >= 0) {
          const gx = o.feederX - fx;
          const gy = o.feederY - fy;
          if (gx * gx + gy * gy < 25) clear = false;
        }
      }
      if (clear) {
        c.feederX = fx;
        c.feederY = fy;
        c.feederV = range(candStream, p.FEEDER_V_MIN, p.FEEDER_V_MAX);
        break;
      }
    }
  }

  // 5. wet streaks: old rain, middle drops on a trail, feeders linked to their outsider, the lane
  const streakSeed = nextU32(glassStream) | 0;
  const nStreaks = p.STREAKS_MIN + int(glassStream, p.STREAKS_MAX - p.STREAKS_MIN + 1);
  for (let k = 0; k < nStreaks; k++) {
    const x0 = range(glassStream, 0, 150);
    const y0 = range(glassStream, 10, 100);
    const len = range(glassStream, 50, 160);
    wetStreak(
      glass,
      p,
      x0,
      y0,
      min(W, x0 + len),
      range(glassStream, 0.12, 0.3),
      range(glassStream, 0.5, 0.9),
      streakSeed + k,
    );
  }
  let laneDone = false;
  for (let i = 0; i < specs.length; i++) {
    const c = specs[i];
    const a = cbrt(c.v / p.CAP_K, 1.6);
    if (c.profile === PROFILE_MIDDLE) {
      const isLane = kind === 'lane' && !laneDone;
      const len = isLane ? p.FINISH_X - c.x : range(glassStream, 70, 170);
      const slope = isLane ? range(glassStream, 0.08, 0.16) : range(glassStream, 0.12, 0.28);
      wetStreak(
        glass,
        p,
        c.x + a,
        c.y,
        min(W, c.x + len),
        slope,
        isLane ? 1 : range(glassStream, 0.7, 1),
        streakSeed + 100 + i,
      );
      if (isLane) laneDone = true;
    }
    if (c.feederX >= 0) {
      const dx = c.x - c.feederX;
      wetStreak(
        glass,
        p,
        c.feederX,
        c.feederY,
        c.x,
        (c.y - c.feederY) / (dx > 0.1 ? dx : 0.1),
        0.8,
        streakSeed + 200 + i,
      );
    }
  }
  glass.wetDecay = 1;

  // 6. shuffle so the candidate index never reveals the profile
  for (let i = specs.length - 1; i > 0; i--) {
    const j = int(candStream, i + 1);
    const t = specs[i];
    specs[i] = specs[j];
    specs[j] = t;
  }

  // 7. ambient drops: mostly tiny, a few fat (R4 3.10), kept clear of candidates, feeders and stickers
  const ambient: AmbientSpec[] = [];
  const clearR2 = p.AMBIENT_CLEAR_R * p.AMBIENT_CLEAR_R;
  for (let k = 0; k < p.AMBIENT_COUNT; k++) {
    for (let tryN = 0; tryN < 4; tryN++) {
      const x = next(ambientStream) * W;
      const y = next(ambientStream) * H;
      const u = next(ambientStream);
      const v = p.RAIN_V_MIN + p.RAIN_V_SPAN * u * u * u;
      let clear = true;
      for (let j = 0; j < specs.length && clear; j++) {
        const c = specs[j];
        const dx = c.x - x;
        const dy = c.y - y;
        if (dx * dx + dy * dy < clearR2) clear = false;
        if (clear && c.feederX >= 0) {
          const ex = c.feederX - x;
          const ey = c.feederY - y;
          if (ex * ex + ey * ey < 25) clear = false;
        }
      }
      if (clear && glass.stickers.length === 3) {
        const dx = glass.stickers[0] - x;
        const dy = glass.stickers[1] - y;
        const rr = glass.stickers[2] + 1;
        if (dx * dx + dy * dy < rr * rr) clear = false;
      }
      if (clear) {
        ambient.push({ x, y, v });
        break;
      }
    }
  }
  return { glass, cands: specs, ambient };
}

export function distance(ax: number, ay: number, bx: number, by: number): number {
  const dx = ax - bx;
  const dy = ay - by;
  return sqrt(dx * dx + dy * dy);
}
