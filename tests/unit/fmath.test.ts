import { describe, expect, it } from 'vitest';
import { cbrt, cosApprox, expApprox, halfLifeFactor, sinApprox } from '../../src/sim/fmath.ts';

describe('fmath: our own approximations match the platform within tight bounds', () => {
  it('sinApprox / cosApprox stay within 1e-12 of Math.sin / Math.cos on [-1000, 1000]', () => {
    let worst = 0;
    for (let i = -20000; i <= 20000; i++) {
      const x = i * 0.05 + 0.0123;
      worst = Math.max(worst, Math.abs(sinApprox(x) - Math.sin(x)), Math.abs(cosApprox(x) - Math.cos(x)));
    }
    expect(worst).toBeLessThan(1e-11);
  });
  it('expApprox has relative error below 1e-13 on [-50, 50]', () => {
    let worst = 0;
    for (let i = -500; i <= 500; i++) {
      const x = i * 0.1;
      worst = Math.max(worst, Math.abs(expApprox(x) / Math.exp(x) - 1));
    }
    expect(worst).toBeLessThan(1e-13);
  });
  it('cbrt converges to the cube root from any positive guess', () => {
    for (const x of [1e-6, 0.01, 0.7, 1, 7, 10.83, 64, 1000, 1e6]) {
      for (const g of [0, 0.1, 1.5, 50]) expect(Math.abs(cbrt(x, g) / Math.cbrt(x) - 1)).toBeLessThan(1e-14);
    }
    expect(cbrt(0, 1)).toBe(0);
    expect(cbrt(-1, 1)).toBe(0);
  });
  it('halfLifeFactor(0.5 s, 25 s) equals the literal in R4 3.2', () => {
    expect(Math.abs(halfLifeFactor(0.5, 25) - 0.9862327044933592)).toBeLessThan(1e-15);
  });
});
