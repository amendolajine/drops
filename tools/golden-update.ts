// npm run golden:update  -> rewrites tests/golden/golden.json from Node.
// Run it only on purpose, after a physics change that also bumps SIM_VERSION (map 9.3 rule 8).

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SIM_VERSION } from '../src/sim/params.ts';
import { GOLDEN_CASES } from '../tests/golden/cases.ts';
import { runGoldenCase } from '../tests/golden/run.ts';

const results = GOLDEN_CASES.map(runGoldenCase);
const out = { simVersion: SIM_VERSION, generatedWith: `node ${process.version}`, cases: results };
const file = join(import.meta.dirname, '..', 'tests', 'golden', 'golden.json');
writeFileSync(file, `${JSON.stringify(out, null, 2)}\n`);
console.log(`[drops] golden: wrote ${results.length} cases to tests/golden/golden.json`);
for (const r of results)
  console.log(
    `${r.name} final ${r.final} schedule ${r.schedule} winner ${r.winner} reason ${r.reason} end ${r.endTick}`,
  );
