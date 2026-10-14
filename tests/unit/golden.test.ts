import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { SIM_VERSION } from '../../src/sim/params.ts';
import { GOLDEN_CASES } from '../golden/cases.ts';
import { type GoldenResult, runGoldenCase } from '../golden/run.ts';

const golden = JSON.parse(readFileSync(join(import.meta.dirname, '..', 'golden', 'golden.json'), 'utf8')) as {
  simVersion: number;
  cases: GoldenResult[];
};

describe('golden races in Node (map 9.3 rule 7)', () => {
  it('the recorded golden file belongs to this SIM_VERSION', () => {
    expect(golden.simVersion).toBe(SIM_VERSION);
    expect(golden.cases.map((c) => c.name)).toEqual(GOLDEN_CASES.map((c) => c.name));
  });
  for (const c of GOLDEN_CASES) {
    it(`${c.name} replays identically`, () => {
      const want = golden.cases.find((g) => g.name === c.name);
      expect(runGoldenCase(c)).toEqual(want);
    });
  }
});
