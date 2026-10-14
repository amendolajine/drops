// Usage: node scripts/check-lock-age.ts   (CI step "dependency age")
// Map 9.1 / D010: every package in package-lock.json, direct or not, must have been published at least
// 14 days before the lock file was last committed. Exception: vite (security fix, D010).
// Reads publish dates from the public npm registry (the same data `npm view <pkg> time` shows).

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { log } from '../src/debug/log.ts';

const MIN_DAYS = 14;
const EXEMPT = new Set(['vite']);
const root = join(import.meta.dirname, '..');

function lockTime(): Date {
  const dirty = execFileSync('git', ['status', '--porcelain', '--', 'package-lock.json'], { cwd: root })
    .toString()
    .trim();
  if (dirty) return new Date();
  const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', 'package-lock.json'], { cwd: root })
    .toString()
    .trim();
  return iso ? new Date(iso) : new Date();
}

const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8')) as {
  packages: Record<string, { version?: string; resolved?: string; link?: boolean }>;
};
const wanted = new Map<string, Set<string>>();
for (const [path, entry] of Object.entries(lock.packages)) {
  if (!path || entry.link || !entry.version) continue;
  const name = path.slice(path.lastIndexOf('node_modules/') + 'node_modules/'.length);
  if (!wanted.has(name)) wanted.set(name, new Set());
  wanted.get(name)?.add(entry.version);
}

const ref = lockTime();
const cutoff = new Date(ref.getTime() - MIN_DAYS * 86_400_000);
const names = [...wanted.keys()].sort();
const problems: string[] = [];
let checked = 0;

async function checkName(name: string): Promise<void> {
  const url = `https://registry.npmjs.org/${name.replace('/', '%2f')}`;
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) {
    problems.push(`${name}: registry answered ${res.status}`);
    return;
  }
  const doc = (await res.json()) as { time?: Record<string, string> };
  for (const version of wanted.get(name) ?? []) {
    checked++;
    const when = doc.time?.[version];
    if (!when) {
      problems.push(`${name}@${version}: no publish date in the registry`);
      continue;
    }
    if (new Date(when) > cutoff && !EXEMPT.has(name))
      problems.push(`${name}@${version}: published ${when}, after the cutoff ${cutoff.toISOString()}`);
  }
}

const queue = [...names];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    for (let n = queue.shift(); n !== undefined; n = queue.shift()) await checkName(n);
  }),
);

if (problems.length > 0) {
  for (const p of problems) log.error('lock-age', p);
  log.error(
    'lock-age',
    `${problems.length} package(s) younger than ${MIN_DAYS} days (exempt: ${[...EXEMPT]})`,
  );
  process.exit(1);
}
log.info(
  'lock-age',
  `${checked} versions of ${names.length} packages in package-lock.json were published before ${cutoff.toISOString()} (lock time ${ref.toISOString()} minus ${MIN_DAYS} days; exempt: ${[...EXEMPT].join(', ')})`,
);
