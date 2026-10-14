// npm run physics -- [--glasses 200] [--light grey|sunset|storm] [--seed phys] [--param NAME=value ...] [--out f.json]
// Prints how the drops behave on generated glass (physics review). See tools/sim/physics-measure.ts.

import { writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import { log } from '../../src/debug/log.ts';
import { DEFAULT_PARAMS, type Light, type ParamOverrides, SIM_VERSION } from '../../src/sim/params.ts';
import { measurePhysics } from './physics-measure.ts';

function parseArgs(argv: string[]) {
  const a = { glasses: 200, light: 'grey' as Light, seed: 'phys', params: {} as ParamOverrides, out: '' };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    const v = argv[i + 1];
    if (k === '--glasses') a.glasses = Number(v);
    else if (k === '--light') a.light = v as Light;
    else if (k === '--seed') a.seed = String(v);
    else if (k === '--out') a.out = v;
    else if (k === '--param') {
      const [name, val] = v.split('=');
      if (!(name in DEFAULT_PARAMS)) throw new Error(`unknown param ${name}`);
      (a.params as Record<string, number>)[name] = Number(val);
    } else continue;
    i++;
  }
  return a;
}

{
  const args = parseArgs(process.argv.slice(2));
  const t0 = performance.now();
  const res = measurePhysics(args);
  const report = {
    tool: 'drops physics measures (tools/sim/physics.ts)',
    sim_version: SIM_VERSION,
    node: process.version,
    seconds: Math.round((performance.now() - t0) / 1000),
    param_overrides: args.params,
    ...res,
  };
  log.info('physics', JSON.stringify(report, null, 2));
  if (args.out) {
    writeFileSync(args.out, `${JSON.stringify(report, null, 2)}\n`);
    log.info('physics', `wrote ${basename(args.out)}`);
  }
}
