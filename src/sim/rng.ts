// Seeded randomness for the simulation (map 9.3 rule 2, R4 3.2).
// sfc32 streams seeded through splitmix32(fnv1a(text)), warmed up 12 times. One stream per purpose,
// so adding a feature never shifts the numbers another feature sees. Per-drop randomness uses a
// counter-based hash instead of a stream, so a change to one drop's history stays local.

import { floor, imul } from './fmath.ts';

/** Mutable sfc32 state. Plain numbers so a race state can be hashed and copied. */
export interface Stream {
  a: number;
  b: number;
  c: number;
  d: number;
}

export function fnv1a(text: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** One splitmix32 step: returns the output for state `s` (callers advance s by 0x9e3779b9 themselves). */
function splitmixOut(s: number): number {
  let t = s ^ (s >>> 16);
  t = imul(t, 0x21f0aaad);
  t ^= t >>> 15;
  t = imul(t, 0x735a2d97);
  return (t ^ (t >>> 15)) >>> 0;
}

export function makeStream(seedText: string, name: string): Stream {
  let s = fnv1a(`${seedText}|${name}`) | 0;
  s = (s + 0x9e3779b9) | 0;
  const a = splitmixOut(s);
  s = (s + 0x9e3779b9) | 0;
  const b = splitmixOut(s);
  s = (s + 0x9e3779b9) | 0;
  const c = splitmixOut(s);
  s = (s + 0x9e3779b9) | 0;
  const d = splitmixOut(s);
  const st: Stream = { a: a | 0, b: b | 0, c: c | 0, d: d | 0 };
  for (let i = 0; i < 12; i++) nextU32(st);
  return st;
}

export function nextU32(s: Stream): number {
  const t = (((s.a + s.b) | 0) + s.d) | 0;
  s.d = (s.d + 1) | 0;
  s.a = s.b ^ (s.b >>> 9);
  s.b = (s.c + (s.c << 3)) | 0;
  s.c = (s.c << 21) | (s.c >>> 11);
  s.c = (s.c + t) | 0;
  return t >>> 0;
}

/** Uniform float in [0, 1). */
export function next(s: Stream): number {
  return nextU32(s) / 4294967296;
}

export function range(s: Stream, lo: number, hi: number): number {
  return lo + (hi - lo) * next(s);
}

/** Integer in [0, n). */
export function int(s: Stream, n: number): number {
  return floor(next(s) * n);
}

export function chance(s: Stream, p: number): boolean {
  return next(s) < p;
}

export function copyStream(s: Stream): Stream {
  return { a: s.a, b: s.b, c: s.c, d: s.d };
}

/** Counter-based hash of three integers to a uint32 (no state). */
export function hash3(x: number, y: number, z: number): number {
  let h = (imul(x | 0, 374761393) + imul(y | 0, 668265263) + imul(z | 0, 1274126177)) | 0;
  h = imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  h = imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  return h >>> 0;
}

/** Counter-based uniform float in [0, 1). */
export function hashFloat(x: number, y: number, z: number): number {
  return hash3(x, y, z) / 4294967296;
}

/** Smooth value noise in [0, 1] on the integer lattice, seeded by an int. */
export function valueNoise(x: number, y: number, seed: number): number {
  const ix = floor(x);
  const iy = floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hashFloat(ix, iy, seed);
  const b = hashFloat(ix + 1, iy, seed);
  const c = hashFloat(ix, iy + 1, seed);
  const d = hashFloat(ix + 1, iy + 1, seed);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}
