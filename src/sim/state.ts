// Race state: plain data, typed arrays, fixed capacity. Created once per race; step() mutates it in place
// and never allocates (map 9.2 "no new objects every step").

import type { Light, LightProfile, Params } from './params.ts';
import type { Stream } from './rng.ts';

// drop kinds
export const KIND_AMBIENT = 0;
export const KIND_CAND = 1;
export const KIND_PEARL = 2;

// candidate states
export const CAND_RACING = 0;
export const CAND_FINISHED = 1;
export const CAND_OUT = 2;

// why a candidate left the race
export const OUT_NONE = 0;
export const OUT_GUTTER = 1;
export const OUT_GULPED = 2;
export const OUT_EVAPORATED = 3;
export const OUT_LEAF = 4;
export const OUT_REASONS = ['none', 'gutter', 'gulped', 'evaporated', 'leaf'] as const;

// phases
export const PHASE_PICK = 0;
export const PHASE_RACING = 1;
export const PHASE_DONE = 2;
export const PHASES = ['pick', 'racing', 'done'] as const;

// sides (index into small per-side arrays)
export const PLAYER = 1;
export const RIVAL = 2;
export const DRAW = 3;
export type Who = 'player' | 'rival';
export function whoIndex(w: Who): number {
  return w === 'player' ? PLAYER : RIVAL;
}

// result reasons
export const R_NONE = 0;
export const R_FINISH = 1;
export const R_GULP = 2;
export const R_GULP_DRAW = 3;
export const R_BOTH_OUT = 4;
export const R_TIME_NEAREST = 5;
export const R_TIME_DRAW = 6;
export const RESULT_REASONS = [
  'none',
  'finish',
  'gulp',
  'gulp-draw',
  'both-out',
  'time-nearest',
  'time-draw',
] as const;

// candidate profiles (hidden from the player; MAP 3.1)
export const PROFILE_FAVORITE = 0;
export const PROFILE_MIDDLE = 1;
export const PROFILE_OUTSIDER = 2;
export const PROFILE_SLEEPER = 3;
export const PROFILE_FREE = 4;
export const PROFILE_MONSTER = 5;
export const PROFILES = ['favorite', 'middle', 'outsider', 'sleeper', 'free', 'monster'] as const;

export type GlassKind = 'monster' | 'drizzle' | 'lane' | 'twins';
export const GLASS_KINDS: readonly GlassKind[] = ['monster', 'drizzle', 'lane', 'twins'];

export type EventType = 'bump' | 'brake' | 'fly' | 'leaf' | 'downpour' | 'clearing';
export const EV_SCHEDULED = 0;
export const EV_WARNED = 1;
export const EV_ACTIVE = 2;
export const EV_DONE = 3;
export const EVENT_PHASES = ['scheduled', 'warning', 'active', 'done'] as const;

export interface SimEvent {
  type: EventType;
  /** race ticks (0 = green light) */
  warnTick: number;
  startTick: number;
  endTick: number;
  x: number;
  y: number;
  /** brake: target km/h (0 = full stop) */
  kmh: number;
  /** fly / leaf: index into state.creatures, else -1 */
  creature: number;
  phase: number;
}

export const CR_FLY = 0;
export const CR_LEAF = 1;
export const CR_PAPER = 2;
export const CREATURE_KINDS = ['fly', 'leaf', 'paper'] as const;
export const CR_WAITING = 0;
export const CR_LANDED = 1;
export const CR_GONE = 2;

export interface Creature {
  kind: number;
  event: number;
  x: number;
  y: number;
  r: number;
  state: number;
  landTick: number;
  /** latest race tick it stays (life) */
  lastTick: number;
  /** fly: lets go above this car speed */
  gripKmh: number;
  failedKnocks: number;
  /** leaf: 0 = surf with the drops under it, 1 = carry them away */
  outcome: number;
  /** leaf: race tick when it releases (surf or carry) */
  releaseTick: number;
  surfing: number;
  /** why it left: 0 time/speed, 1 knock, 2 surfed off, 3 carried off, 4 never landed (too fast) */
  goneWhy: number;
  /** scare attempts on this creature by each side: the counter of that side's own roll (D021) */
  triesPlayer: number;
  triesRival: number;
}

export interface Drops {
  cap: number;
  /** slots in use are 0..n-1 (some may be dead and on the free list) */
  n: number;
  nextId: number;
  id: Int32Array;
  x: Float64Array;
  y: Float64Array;
  v: Float64Array;
  a: Float64Array;
  vx: Float64Array;
  vy: Float64Array;
  alive: Uint8Array;
  moving: Uint8Array;
  kind: Uint8Array;
  cand: Int8Array;
  burst: Int32Array;
  jolt: Int32Array;
  stuck: Int32Array;
  held: Int8Array;
  contact: Uint8Array;
  shedAcc: Float64Array;
  nextShed: Float64Array;
  shedCount: Int32Array;
  parent: Int32Array;
  parentUntil: Int32Array;
  free: Int32Array;
  freeTop: number;
}

export interface Glass {
  kind: GlassKind;
  /** pinning multiplier field, 1 mm cells, pw x ph */
  pin: Float64Array;
  pw: number;
  ph: number;
  /** wet trail field, WET_CELL cells, ww x wh, values 0..1 */
  wet: Float64Array;
  ww: number;
  wh: number;
  /** multiplier applied every 30 ticks (0.5 s) */
  wetDecay: number;
  /** flat triples x, y, r */
  specks: Float64Array;
  smudges: Float64Array;
  stickers: Float64Array;
  /** generator restarts needed to place the candidates (for the "fails less than 1 in 20" check) */
  genRetries: number;
}

export interface Candidates {
  count: number;
  slot: Int32Array;
  dropId: Int32Array;
  state: Uint8Array;
  finishTick: Int32Array;
  /** seconds since green, interpolated inside the tick; -1 if not finished */
  finishTime: Float64Array;
  outTick: Int32Array;
  outReason: Uint8Array;
  gulpedBy: Int8Array;
  /** where the candidate was when it left the race (out or finish): its slot is recycled afterwards */
  endX: Float64Array;
  endY: Float64Array;
  startX: Float64Array;
  startY: Float64Array;
  startV: Float64Array;
  profile: Uint8Array;
  hasFeeder: Uint8Array;
}

export const FF_NONE = 0;
export const FF_DECIDED = 1;
export const FF_OUT = 2;
export const FF_GAP = 3;
export const FF_REASONS = ['none', 'decided', 'out', 'gap'] as const;

export interface Director {
  emaVx: Float64Array;
  /** near-term arrival forecast (smoothed speed), used for the breath and slow motion near the line */
  eta: Float64Array;
  predictedGap: number;
  /** x of each picked drop over the last FF_WINDOW_S of car-moving time: ring buffer, side-major */
  xHist: Float64Array;
  histHead: number;
  histCount: number;
  /** conservative gap for fast-forward: the leader at its slower pace, the trailer at its faster pace */
  safeGap: number;
  /** side predicted to lose when fast-forward latched on the gap (PLAYER / RIVAL), 0 none */
  ffTrailer: number;
  /** side the conservative forecast currently puts behind */
  ffTrailerNow: number;
  /** fast-forward currently on, and why (FF_*) */
  ffOn: number;
  ffReason: number;
  ffUnlatches: number;
  ffGapTick: number;
  /** +1 player ahead, -1 rival ahead, 0 unknown */
  lead: number;
  leadSwaps: number;
  leadSwapsAfterHalf: number;
  maxProgress: number;
  ffHold: number;
  fastForwardTick: number;
  slowMoTick: number;
  breathTick: number;
}

export interface Result {
  winner: number;
  reason: number;
  decidedTick: number;
  endTick: number;
  /** seconds between the two picked drops at the line, -1 if not both finished */
  gap: number;
  firstFinishTick: number;
}

export interface Knocks {
  left: Int8Array;
  lastTick: Int32Array;
  used: Int8Array;
  /** times a side wanted to knock with no knock left (MAP 1.2 "vorresti ancora un colpo") */
  wanted: Int16Array;
  /** set by the step when the final straight locks knocks */
  locked: number;
}

export interface RivalMind {
  /** creature he has noticed and plans to knock, -1 none */
  noticed: number;
  /** bit k set: he decided to leave creature k alone (he does not knock 1 time in 4) */
  ignored: number;
  /** race tick when he will knock on it, -1 none */
  knockTick: number;
  willKnock: number;
  /** stuck episode already handled (the drop's stuck counter value when he jolted) */
  joltedStuck: number;
}

export interface Log {
  cap: number;
  head: number;
  count: number;
  total: number;
  tick: Int32Array;
  code: Uint8Array;
  a: Float64Array;
  b: Float64Array;
  c: Float64Array;
}

export interface Streams {
  glass: Stream;
  candidates: Stream;
  ambient: Stream;
  preroll: Stream;
  rain: Stream;
  events: Stream;
  car: Stream;
  rival: Stream;
}

export interface RaceState {
  simVersion: number;
  seed: string;
  variant: string;
  light: Light;
  lightProfile: LightProfile;
  mode: 'race' | 'rollout';
  firstPicker: Who;
  rivalAuto: boolean;
  p: Params;
  dt: number;
  tick: number;
  greenTick: number;
  phase: number;
  streams: Streams;
  /** integer seeds for counter-based hashing */
  pearlSeed: number;
  hopSeed: number;
  /** scare rolls: hashFloat(knockSeed, creature * 4 + side, that side's attempt on it), independent per side */
  knockSeed: number;
  glass: Glass;
  drops: Drops;
  gridHead: Int32Array;
  gridNext: Int32Array;
  gridW: number;
  gridH: number;
  cands: Candidates;
  /** candidate index picked by PLAYER (1) and RIVAL (2), -1 none; index 0 unused */
  picks: Int8Array;
  knocks: Knocks;
  car: { accelS: number; keys: Float64Array; road: Int32Array; kmh: number; antiStallLogged: number };
  events: SimEvent[];
  creatures: Creature[];
  /** lightning flash race ticks (cosmetic) */
  lightning: Int32Array;
  fx: { pinMul: number; rainMul: number; evap: number };
  rival: RivalMind;
  director: Director;
  result: Result;
  log: Log;
}

export function newDrops(cap: number): Drops {
  return {
    cap,
    n: 0,
    nextId: 1,
    id: new Int32Array(cap),
    x: new Float64Array(cap),
    y: new Float64Array(cap),
    v: new Float64Array(cap),
    a: new Float64Array(cap),
    vx: new Float64Array(cap),
    vy: new Float64Array(cap),
    alive: new Uint8Array(cap),
    moving: new Uint8Array(cap),
    kind: new Uint8Array(cap),
    cand: new Int8Array(cap),
    burst: new Int32Array(cap),
    jolt: new Int32Array(cap),
    stuck: new Int32Array(cap),
    held: new Int8Array(cap),
    contact: new Uint8Array(cap),
    shedAcc: new Float64Array(cap),
    nextShed: new Float64Array(cap),
    shedCount: new Int32Array(cap),
    parent: new Int32Array(cap),
    parentUntil: new Int32Array(cap),
    free: new Int32Array(cap),
    freeTop: 0,
  };
}

export function newLog(cap: number): Log {
  return {
    cap,
    head: 0,
    count: 0,
    total: 0,
    tick: new Int32Array(cap),
    code: new Uint8Array(cap),
    a: new Float64Array(cap),
    b: new Float64Array(cap),
    c: new Float64Array(cap),
  };
}

export function newCandidates(count: number): Candidates {
  return {
    count,
    slot: new Int32Array(count).fill(-1),
    dropId: new Int32Array(count),
    state: new Uint8Array(count),
    finishTick: new Int32Array(count).fill(-1),
    finishTime: new Float64Array(count).fill(-1),
    outTick: new Int32Array(count).fill(-1),
    outReason: new Uint8Array(count),
    gulpedBy: new Int8Array(count).fill(-1),
    endX: new Float64Array(count).fill(-1),
    endY: new Float64Array(count).fill(-1),
    startX: new Float64Array(count),
    startY: new Float64Array(count),
    startV: new Float64Array(count),
    profile: new Uint8Array(count),
    hasFeeder: new Uint8Array(count),
  };
}

/** Race time in seconds since the green light (negative before it). */
export function raceTime(s: RaceState): number {
  return s.greenTick < 0 ? -1 : (s.tick - s.greenTick) * s.dt;
}

export function raceTick(s: RaceState): number {
  return s.greenTick < 0 ? -1 : s.tick - s.greenTick;
}
