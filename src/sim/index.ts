// Public API of the deterministic race simulation (map 9.2, 9.3).
// createRace(seed, options) -> state; step(state, input); snapshot(state); hashState(state).

export { carKmhAt } from './car.ts';
export { progressOf } from './director.ts';
export { pinAt } from './glass.ts';
export type { Light, ParamOverrides, Params } from './params.ts';
export { DEFAULT_PARAMS, LIGHTS, SIM_VERSION } from './params.ts';
export type { KnockInput, PickInput, RaceOptions, StepInput } from './race.ts';
export { applyPick, createRace, pick, step } from './race.ts';
export { rivalChoose, rivalScore } from './rival.ts';
export type { CandidateView, DropView, Snapshot } from './snapshot.ts';
export { hashState, logLinesOf, snapshot } from './snapshot.ts';
export * from './state.ts';
