// Race lifecycle (R4 3.3, MAP 2.1): create -> pre-roll (2 s at the stop) -> pick (sim paused, untimed)
// -> green light -> fixed 60 Hz ticks -> done. Pure API: createRace(seed, options), step(state, input).

import { carKmhAt, initCar } from './car.ts';
import { directorUpdate, rolloutUpdate } from './director.ts';
import { makeCandidate, spawnDrop } from './drops.ts';
import { buildSchedule, updateEvents } from './events.ts';
import { halfLifeFactor, round } from './fmath.ts';
import { buildGlass } from './glass.ts';
import { applyKnock } from './knock.ts';
import { L, logEvent } from './log.ts';
import {
  DEFAULT_PARAMS,
  LIGHTS,
  type Light,
  type ParamOverrides,
  type Params,
  SIM_VERSION,
} from './params.ts';
import { decayWetIfDue, evaporate, mergeDrops, spawnRain, stepDrops } from './physics.ts';
import { rivalChoose, rivalThink } from './rival.ts';
import { makeStream, nextU32 } from './rng.ts';
import {
  KIND_AMBIENT,
  KIND_CAND,
  newCandidates,
  newDrops,
  newLog,
  PHASE_PICK,
  PHASE_RACING,
  PLAYER,
  type RaceState,
  RIVAL,
  type Who,
  whoIndex,
} from './state.ts';

export interface RaceOptions {
  /** Grey drive (default), Sunset after the storm, Night storm. MAP 5. */
  light?: Light;
  /** 'race' (default): two picked drops and a result. 'rollout': no picks, runs until all candidates resolve. */
  mode?: 'race' | 'rollout';
  /** Who picks first (MAP 2.1: odd races the player, even races the rival). Default 'player'. */
  firstPicker?: Who;
  /** The rival picks and knocks with his own brain (default true). False: rival picks/knocks come as inputs. */
  rivalAuto?: boolean;
  /** Re-seeds weather, events, car, rival and knock streams but keeps the glass (bank rollouts). */
  variant?: string;
  /** Parameter overrides for tuning sweeps. */
  params?: ParamOverrides;
}

export interface PickInput {
  who: Who;
  cand: number;
}

export interface KnockInput {
  who: Who;
  /** glass position in mm; rounded to 0.5 mm before it is applied */
  x: number;
  y: number;
}

export interface StepInput {
  picks?: readonly PickInput[];
  knocks?: readonly KnockInput[];
}

/** The text every stream of a race is seeded from (glass side), and the one for weather/events/rival. */
export function seedKeys(seed: string | number, variant = ''): { key: string; dyn: string } {
  const key = `drops|sim${SIM_VERSION}|${String(seed)}`;
  return { key, dyn: variant === '' ? key : `${key}|variant:${variant}` };
}

export function createRace(seed: string | number, options: RaceOptions = {}): RaceState {
  const overrides = options.params ?? {};
  for (const name of Object.keys(overrides))
    if (!Object.hasOwn(DEFAULT_PARAMS, name)) throw new Error(`createRace: unknown parameter "${name}"`);
  const p: Params = { ...DEFAULT_PARAMS, ...overrides };
  const light: Light = options.light ?? 'grey';
  // own keys only: "__proto__" or "constructor" must not pass as a light (engineering review)
  if (!Object.hasOwn(LIGHTS, light)) throw new Error(`createRace: unknown light "${String(light)}"`);
  const seedText = String(seed);
  const variant = options.variant ?? '';
  const { key, dyn } = seedKeys(seed, variant);
  const streams = {
    glass: makeStream(key, 'glass'),
    candidates: makeStream(key, 'candidates'),
    ambient: makeStream(key, 'ambient'),
    preroll: makeStream(key, 'preroll'),
    rain: makeStream(dyn, 'rain'),
    events: makeStream(dyn, 'events'),
    car: makeStream(dyn, 'car'),
    rival: makeStream(dyn, 'rival'),
  };
  // a private copy: the race never reads a table that other code could change (LIGHTS is frozen too)
  const lp = { ...LIGHTS[light] };
  const build = buildGlass(p, streams.glass, streams.candidates, streams.ambient);
  build.glass.wetDecay = halfLifeFactor(0.5, p.WET_HALF_LIFE);
  const schedule = buildSchedule(
    p,
    lp,
    streams.events,
    build.cands.map((c) => c.x),
    build.cands.map((c) => c.y),
  );
  const car = initCar(p, streams.car);
  const gridW = round(p.W / 8) + 3;
  const gridH = round(p.H / 8) + 3;
  const s: RaceState = {
    simVersion: SIM_VERSION,
    seed: seedText,
    variant,
    light,
    lightProfile: lp,
    mode: options.mode ?? 'race',
    firstPicker: options.firstPicker ?? 'player',
    rivalAuto: options.rivalAuto ?? true,
    p,
    dt: 1 / p.TICK_HZ,
    tick: 0,
    greenTick: -1,
    phase: PHASE_PICK,
    streams,
    pearlSeed: nextU32(makeStream(dyn, 'pearls')) | 0,
    hopSeed: nextU32(makeStream(dyn, 'hops')) | 0,
    knockSeed: nextU32(makeStream(dyn, 'knock')) | 0,
    roadSeed: nextU32(makeStream(dyn, 'road')) | 0,
    glass: build.glass,
    drops: newDrops(p.MAX_DROPS),
    gridHead: new Int32Array(gridW * gridH),
    gridNext: new Int32Array(p.MAX_DROPS),
    gridW,
    gridH,
    cands: newCandidates(build.cands.length),
    picks: new Int8Array([-1, -1, -1]),
    knocks: {
      left: new Int8Array([0, p.KNOCKS, p.KNOCKS]),
      lastTick: new Int32Array([-1, -1, -1]),
      used: new Int8Array(3),
      wanted: new Int16Array(3),
      locked: 0,
    },
    car: { accelS: car.accelS, keys: car.keys, kmh: 0, antiStallLogged: 0 },
    events: schedule.events,
    creatures: schedule.creatures,
    lightning: schedule.lightning,
    fx: { pinMul: 1, rainMul: 1, evap: 0, gMul: 1 },
    rival: { noticed: -1, ignored: 0, knockTick: -1, willKnock: 0, joltedStuck: 0 },
    director: {
      emaVx: new Float64Array(3),
      eta: new Float64Array(3),
      predictedGap: -1,
      xHist: new Float64Array(2 * round(p.FF_WINDOW_S * p.TICK_HZ)),
      histHead: 0,
      histCount: 0,
      safeGap: -1,
      ffTrailer: 0,
      ffTrailerNow: 0,
      ffOn: 0,
      ffReason: 0,
      ffUnlatches: 0,
      ffGapTick: -1,
      lead: 0,
      leadSwaps: 0,
      leadSwapsAfterHalf: 0,
      maxProgress: 0,
      ffHold: 0,
      fastForwardTick: -1,
      slowMoTick: -1,
      breathTick: -1,
    },
    result: { winner: 0, reason: 0, decidedTick: -1, endTick: -1, gap: -1, firstFinishTick: -1 },
    log: newLog(128),
  };
  // candidates first (ids 1..6), then their feeders, then the ambient drops
  for (let c = 0; c < build.cands.length; c++) {
    const spec = build.cands[c];
    const slot = spawnDrop(s, spec.x, spec.y, spec.v, KIND_CAND);
    makeCandidate(s, slot, c);
    s.cands.startX[c] = spec.x;
    s.cands.startY[c] = spec.y;
    s.cands.startV[c] = spec.v;
    s.cands.profile[c] = spec.profile;
    s.cands.hasFeeder[c] = spec.feederX >= 0 ? 1 : 0;
  }
  for (let c = 0; c < build.cands.length; c++) {
    const spec = build.cands[c];
    if (spec.feederX >= 0) spawnDrop(s, spec.feederX, spec.feederY, spec.feederV, KIND_AMBIENT);
  }
  for (let i = 0; i < build.ambient.length; i++) {
    const a = build.ambient[i];
    spawnDrop(s, a.x, a.y, a.v, KIND_AMBIENT);
  }
  // pre-roll at the stop: the glass settles and a little rain lands (glass-side stream, same for all variants)
  const prerollTicks = round(p.PREROLL_S * p.TICK_HZ);
  for (let t = 0; t < prerollTicks; t++) {
    s.tick++;
    s.car.kmh = 0;
    spawnRain(s, s.streams.preroll, 1);
    decayWetIfDue(s);
    stepDrops(s);
    mergeDrops(s);
  }
  if (s.mode === 'rollout') green(s);
  else if (s.rivalAuto && s.firstPicker === 'rival') applyPick(s, RIVAL, rivalChoose(s));
  return s;
}

function green(s: RaceState): void {
  s.phase = PHASE_RACING;
  s.greenTick = s.tick;
  logEvent(s.log, s.tick, L.GREEN, 0, 0, 0);
}

/** Apply a pick. Returns false when it is not allowed (taken, out of range, already picked, wrong phase). */
export function applyPick(s: RaceState, who: number, cand: number): boolean {
  if (s.phase !== PHASE_PICK || s.mode !== 'race') return false;
  if (cand < 0 || cand >= s.cands.count) return false;
  if (s.picks[who] >= 0) return false;
  const other = who === PLAYER ? RIVAL : PLAYER;
  if (s.picks[other] === cand) return false;
  s.picks[who] = cand;
  logEvent(s.log, s.tick, L.PICK, who, cand, 0);
  if (s.rivalAuto && who === PLAYER && s.picks[RIVAL] < 0) applyPick(s, RIVAL, rivalChoose(s));
  if (s.picks[PLAYER] >= 0 && s.picks[RIVAL] >= 0) green(s);
  return true;
}

/** Convenience: pick by side name. */
export function pick(s: RaceState, who: Who, cand: number): boolean {
  return applyPick(s, whoIndex(who), cand);
}

/**
 * Advance the race by one fixed tick (1/60 s) with this tick's inputs. In the pick phase it only applies
 * picks: the sim stays paused while the player reads the glass (MAP 2.1 phase 1).
 */
export function step(s: RaceState, input?: StepInput): RaceState {
  if (s.phase === PHASE_PICK) {
    if (input?.picks) for (const pk of input.picks) applyPick(s, whoIndex(pk.who), pk.cand);
    return s;
  }
  if (s.phase !== PHASE_RACING) return s;
  s.tick++;
  const rt = s.tick - s.greenTick;
  if (input?.knocks) {
    for (let i = 0; i < input.knocks.length; i++) {
      const kn = input.knocks[i];
      if (kn.who === 'rival' && s.rivalAuto) continue;
      applyKnock(s, whoIndex(kn.who), kn.x, kn.y);
    }
  }
  rivalThink(s);
  s.car.kmh = carKmhAt(s, rt);
  if (!s.car.antiStallLogged && rt * s.dt > s.p.ANTI_STALL_S) {
    s.car.antiStallLogged = 1;
    logEvent(s.log, s.tick, L.ANTI_STALL, 0, 0, 0);
  }
  updateEvents(s, rt);
  spawnRain(s, s.streams.rain, s.fx.rainMul);
  decayWetIfDue(s);
  stepDrops(s);
  mergeDrops(s);
  if (s.fx.evap) evaporate(s);
  if (s.mode === 'rollout') rolloutUpdate(s);
  else directorUpdate(s);
  return s;
}
