import { describe, expect, it } from 'vitest';
import { DEFAULT_PARAMS, LIGHTS, type Light } from '../../src/sim/params.ts';
import { createRace } from '../../src/sim/race.ts';

describe('shared tables cannot change a race (determinism review)', () => {
  it('DEFAULT_PARAMS and every light profile are frozen', () => {
    expect(Object.isFrozen(DEFAULT_PARAMS)).toBe(true);
    expect(Object.isFrozen(LIGHTS)).toBe(true);
    for (const l of Object.values(LIGHTS)) expect(Object.isFrozen(l)).toBe(true);
    expect(() => {
      (LIGHTS.grey as { rainPerS: number }).rainPerS = 99;
    }).toThrow();
  });
  it('a race keeps its own copy of the light profile', () => {
    const s = createRace('copy');
    expect(s.lightProfile).not.toBe(LIGHTS.grey);
    expect(s.lightProfile).toEqual(LIGHTS.grey);
  });
  it('unknown lights and parameters are refused, including object built-ins', () => {
    for (const bad of ['foo', '__proto__', 'constructor', 'toString'])
      expect(() => createRace('x', { light: bad as Light })).toThrow(/unknown light/);
    expect(() => createRace('x', { params: { NOPE: 1 } as never })).toThrow(/unknown parameter/);
  });
});
