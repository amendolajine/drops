// Usage: node scripts/check-sim.ts   (part of `npm run lint`)
// Fails if any file in src/sim breaks the determinism rules in scripts/sim-rules.ts.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { log } from '../src/debug/log.ts';
import { checkSimFileName, checkSimSource } from './sim-rules.ts';

const root = join(import.meta.dirname, '..');
const simDir = join(root, 'src', 'sim');

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out.sort();
}

const files = walk(simDir);
let errors = 0;
for (const file of files) {
  const rel = relative(root, file);
  const found = [
    ...checkSimFileName(rel),
    ...(rel.endsWith('.ts') ? checkSimSource(rel, readFileSync(file, 'utf8')) : []),
  ];
  for (const v of found) {
    log.error('check-sim', `${rel}:${v.line}: ${v.message}`);
    errors++;
  }
}
if (errors > 0) {
  log.error('check-sim', `${errors} problem(s) in ${files.length} files`);
  process.exit(1);
}
log.info('check-sim', `${files.length} files in src/sim follow the determinism rules`);
