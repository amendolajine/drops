// npm run sim -- --races 1000 --seed <n> [--rollouts 16] [--light grey|sunset|storm] [--workers 8]
//                [--out file.json] [--param NAME=value ...]
// Simulates races with bot players against the rival brain and prints the three measures of map 1.2.

import { writeFileSync } from 'node:fs';
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';
import { DEFAULT_PARAMS, type Light, type ParamOverrides, SIM_VERSION } from '../../src/sim/params.ts';
import type { ExperimentConfig, GlassRecord } from './experiment.ts';
import { aggregate, DEFINITIONS } from './metrics.ts';

function parseArgs(argv: string[]) {
  const a = {
    races: 1000,
    seed: '1',
    rollouts: 16,
    light: 'grey' as Light,
    workers: Math.min(8, availableParallelism()),
    out: '',
    params: {} as ParamOverrides,
  };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    const v = argv[i + 1];
    if (k === '--races') a.races = Number(v);
    else if (k === '--seed') a.seed = String(v);
    else if (k === '--rollouts') a.rollouts = Number(v);
    else if (k === '--light') a.light = v as Light;
    else if (k === '--workers') a.workers = Number(v);
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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const cfg: ExperimentConfig = {
    baseSeed: `metrics|${args.seed}`,
    rollouts: args.rollouts,
    light: args.light,
    params: args.params,
  };
  const t0 = performance.now();
  const glasses: GlassRecord[] = [];
  const nW = Math.max(1, Math.min(args.workers, args.races));
  await Promise.all(
    Array.from({ length: nW }, (_, w) => {
      const indices: number[] = [];
      for (let i = w; i < args.races; i += nW) indices.push(i);
      return new Promise<void>((resolve, reject) => {
        const worker = new Worker(new URL('./worker.ts', import.meta.url), { workerData: { indices, cfg } });
        worker.on('message', (g: GlassRecord) => {
          glasses.push(g);
          if (glasses.length % 50 === 0)
            process.stderr.write(`[drops] sim: ${glasses.length}/${args.races} glasses\n`);
        });
        worker.on('error', reject);
        worker.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`worker exit ${code}`))));
      });
    }),
  );
  glasses.sort((a, b) => a.index - b.index);
  const seconds = (performance.now() - t0) / 1000;
  const agg = aggregate(glasses);
  const raceCount = glasses.reduce((a, g) => a + g.races.length, 0);
  const report = {
    tool: 'drops sim metrics (tools/sim/cli.ts)',
    generated: new Date().toISOString(),
    command: `npm run sim -- ${process.argv.slice(2).join(' ')}`,
    sim_version: SIM_VERSION,
    node: process.version,
    config: {
      races: args.races,
      seed: args.seed,
      rollouts_per_glass: args.rollouts,
      light: args.light,
      param_overrides: args.params,
    },
    runtime: {
      seconds: Math.round(seconds),
      workers: nW,
      glass_ms_mean: Math.round(glasses.reduce((a, g) => a + g.ms, 0) / glasses.length),
    },
    notes: [
      'One "race" per glass and per bot combo: 3 pickers x 2 knock policies, all against the rival brain. Identical pick + policy reuse the same deterministic race.',
      'Odd races (index 0, 2, ...) the player picks first, even races the rival (map 2.1).',
      'Glasses are raw generator output: no glass bank selection yet (map 3.1 bank is a later step).',
      `rollouts_per_glass re-run the same glass with other weather/events (variant streams) to give the best-reader bot its reading; ${raceCount} bot races in total.`,
    ],
    definitions: DEFINITIONS,
    ...agg,
  };
  const pad = (s: string, n: number) => (s.length >= n ? s : s + ' '.repeat(n - s.length));
  console.log(
    `drops sim metrics: ${args.races} glasses, seed ${args.seed}, ${args.rollouts} rollouts/glass, light ${args.light}, ${Math.round(seconds)} s`,
  );
  for (const v of agg.verdicts) {
    const val = typeof v.value === 'number' ? String(v.value) : JSON.stringify(v.value);
    console.log(`${v.met ? 'MET    ' : 'MISSED '} ${pad(v.measure, 42)} ${pad(val, 8)} target ${v.target}`);
  }
  console.log(
    'win rate by bot (player vs rival):',
    Object.entries(agg.combos)
      .map(([k, c]) => `${k} ${c.win_rate}`)
      .join(' | '),
  );
  console.log(
    'knock value pp:',
    JSON.stringify(agg.measures.knock),
    '| pick value:',
    JSON.stringify(agg.measures.pick.pick_value_pp),
  );
  console.log('glasses:', JSON.stringify(agg.glasses));
  if (args.out) {
    writeFileSync(args.out, `${JSON.stringify(report, null, 2)}\n`);
    console.log(`[drops] wrote ${args.out}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
