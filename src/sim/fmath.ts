// drops. simulation math: the only file in src/sim allowed to touch Math (map 9.1, 9.3 rule 3).
//
// Allowed Math members are the ones ECMA-262 defines exactly (correctly rounded or exact):
// sqrt, floor, ceil, round, trunc, abs, min, max, imul, sign. Everything transcendental
// (sin, cos, exp, cbrt, pow, ...) is "implementation-approximated" in the spec and can differ
// between browsers, so it is rebuilt here from + - * / only. scripts/check-sim.ts enforces the list.

export const sqrt = Math.sqrt;
export const floor = Math.floor;
export const ceil = Math.ceil;
export const round = Math.round;
export const trunc = Math.trunc;
export const abs = Math.abs;
export const min = Math.min;
export const max = Math.max;
export const imul = Math.imul;
export const sign = Math.sign;

export const PI = Math.PI;
export const TAU = 2 * Math.PI;
export const HALF_PI = Math.PI / 2;
export const LN2 = Math.LN2;

export function clamp(x: number, lo: number, hi: number): number {
  return x < lo ? lo : x > hi ? hi : x;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Hermite smoothstep on [0, 1], clamped. */
export function smooth01(t: number): number {
  const u = t < 0 ? 0 : t > 1 ? 1 : t;
  return u * u * (3 - 2 * u);
}

export function hypot2(x: number, y: number): number {
  return sqrt(x * x + y * y);
}

/**
 * Cube root by Newton iteration from a guess (R4 3.2: "cbrt with Newton steps from the previous radius").
 * Same inputs always run the same operations in the same order, so the result is identical everywhere.
 */
export function cbrt(x: number, guess: number): number {
  if (!(x > 0)) return 0;
  let y = guess > 0 ? guess : x > 1 ? x * 0.3333333333333333 + 0.6666666666666666 : 1;
  for (let i = 0; i < 60; i++) {
    const y2 = y * y;
    const next = y - (y2 * y - x) / (3 * y2);
    const d = next - y;
    y = next;
    if ((d < 0 ? -d : d) <= y * 1e-15) break;
  }
  return y;
}

/** sin(x) from a polynomial after range reduction. Max error about 1e-12 on [-1e4, 1e4]. */
export function sinApprox(x: number): number {
  // reduce to [-pi, pi]
  const k = round(x / TAU);
  let r = x - k * TAU;
  // fold to [-pi/2, pi/2]
  if (r > HALF_PI) r = PI - r;
  else if (r < -HALF_PI) r = -PI - r;
  const r2 = r * r;
  // Taylor series to x^17: on |r| <= pi/2 the truncation error is below 1e-13
  return (
    r *
    (1 +
      r2 *
        (-1 / 6 +
          r2 *
            (1 / 120 +
              r2 *
                (-1 / 5040 +
                  r2 *
                    (1 / 362880 +
                      r2 *
                        (-1 / 39916800 +
                          r2 * (1 / 6227020800 + r2 * (-1 / 1307674368000 + r2 * (1 / 355687428096000)))))))))
  );
}

export function cosApprox(x: number): number {
  return sinApprox(x + HALF_PI);
}

/** e^x by range reduction x = k ln2 + r, |r| <= ln2/2, Taylor to r^14, then exact scaling by 2^k. */
export function expApprox(x: number): number {
  if (x > 700) x = 700;
  if (x < -700) return 0;
  const k = round(x / LN2);
  const r = x - k * LN2;
  let term = 1;
  let sum = 1;
  for (let i = 1; i <= 14; i++) {
    term = (term * r) / i;
    sum += term;
  }
  // multiply by 2^k: powers of two are exact in binary floating point
  let n = k < 0 ? -k : k;
  let base = k < 0 ? 0.5 : 2;
  let scale = 1;
  while (n > 0) {
    if (n & 1) scale *= base;
    base *= base;
    n = n >>> 1;
  }
  return sum * scale;
}

/** Half-life decay factor for one interval: 2^(-dt / halfLife). */
export function halfLifeFactor(dt: number, halfLife: number): number {
  return expApprox((-LN2 * dt) / halfLife);
}
