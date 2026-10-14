import { describe, expect, it } from 'vitest';
import { fnv1a, hash3, hashFloat, makeStream, next, nextU32, valueNoise } from '../../src/sim/rng.ts';

describe('rng: sfc32 streams seeded by text', () => {
  it('fnv1a matches the reference values', () => {
    expect(fnv1a('')).toBe(0x811c9dc5);
    expect(fnv1a('a')).toBe(0xe40c292c);
    expect(fnv1a('foobar')).toBe(0xbf9cf968);
  });
  it('the same seed and name always give the same sequence (golden values)', () => {
    const s = makeStream('drops|test', 'glass');
    const seq = [nextU32(s), nextU32(s), nextU32(s), nextU32(s)];
    const t = makeStream('drops|test', 'glass');
    expect([nextU32(t), nextU32(t), nextU32(t), nextU32(t)]).toEqual(seq);
    expect(seq.map((n) => n.toString(16))).toMatchInlineSnapshot(`
      [
        "4a7e44c7",
        "4d888a2a",
        "68898e39",
        "7e9c6daf",
      ]
    `);
  });
  it('named streams are independent', () => {
    const a = makeStream('seed', 'events');
    const b = makeStream('seed', 'rival');
    expect(nextU32(a)).not.toBe(nextU32(b));
  });
  it('next() is in [0, 1) and roughly uniform', () => {
    const s = makeStream('uniform', 'x');
    let sum = 0;
    const buckets = new Array(10).fill(0);
    for (let i = 0; i < 100000; i++) {
      const u = next(s);
      expect(u).toBeGreaterThanOrEqual(0);
      expect(u).toBeLessThan(1);
      sum += u;
      buckets[Math.floor(u * 10)]++;
    }
    expect(Math.abs(sum / 100000 - 0.5)).toBeLessThan(0.005);
    for (const b of buckets) expect(Math.abs(b - 10000)).toBeLessThan(500);
  });
  it('counter hashing and value noise are pure functions', () => {
    expect(hash3(1, 2, 3)).toBe(hash3(1, 2, 3));
    expect(hash3(1, 2, 3)).not.toBe(hash3(1, 2, 4));
    expect(hashFloat(7, 8, 9)).toBeLessThan(1);
    for (let i = 0; i < 1000; i++) {
      const n = valueNoise(i * 0.37, i * 0.11, 42);
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThanOrEqual(1);
    }
  });
});
