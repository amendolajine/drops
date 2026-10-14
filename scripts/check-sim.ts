// Usage: node scripts/check-sim.ts   (part of `npm run lint`)
// Fails if any file in src/sim breaks the determinism rules in scripts/sim-rules.ts.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { checkSimSource } from './sim-rules.ts';

const root = join(import.meta.dirname, '..');
const simDir = join(root, 'src', 'sim');

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.ts')) out.push(full);
  }
  return out.sort();
}

const files = walk(simDir);
let errors = 0;
for (const file of files) {
  const rel = relative(root, file);
  for (const v of checkSimSource(rel, readFileSync(file, 'utf8'))) {
    console.error(`${rel}:${v.line}: ${v.message}`);
    errors++;
  }
}
if (errors > 0) {
  console.error(`[drops] check-sim: ${errors} problem(s) in ${files.length} files`);
  process.exit(1);
}
console.log(`[drops] check-sim: ${files.length} files in src/sim follow the determinism rules`);
