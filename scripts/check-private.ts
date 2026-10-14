// Usage: node scripts/check-private.ts [--staged]
// Map 9.5 point 3: block local paths, personal email addresses and private names before every commit
// (.githooks/pre-commit, enabled with `npm run hooks:install`) and in CI (job "checks").
//
// Private names (for example an employer) are never written in this public repository. They come from:
// - the environment variable DROPS_PRIVATE_TERMS (comma or newline separated; a GitHub repository secret in CI)
// - the untracked file .private-terms (one per line; listed in .gitignore)
// A hit on a private name is reported by its number only, so the name never appears in a public CI log.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { log } from '../src/debug/log.ts';
import { findPrivate } from './private-rules.ts';

const root = join(import.meta.dirname, '..');
const staged = process.argv.includes('--staged');

function privateTerms(): string[] {
  const out: string[] = [];
  const env = process.env.DROPS_PRIVATE_TERMS ?? '';
  for (const t of env.split(/[,\n]/)) if (t.trim()) out.push(t.trim().toLowerCase());
  const file = join(root, '.private-terms');
  if (existsSync(file))
    for (const t of readFileSync(file, 'utf8').split('\n'))
      if (t.trim() && !t.startsWith('#')) out.push(t.trim().toLowerCase());
  return [...new Set(out)];
}

function git(args: string[]): string {
  return execFileSync('git', args, { cwd: root, maxBuffer: 64 * 1024 * 1024 }).toString();
}

const files = (staged ? git(['diff', '--cached', '--name-only', '--diff-filter=ACMR']) : git(['ls-files']))
  .split('\n')
  .filter((f) => f && f !== '.private-terms');

const terms = privateTerms();
const problems: string[] = [];
for (const f of files) {
  let text: string;
  try {
    text = staged ? git(['show', `:${f}`]) : readFileSync(join(root, f), 'utf8');
  } catch {
    continue; // deleted or unreadable
  }
  if (text.includes('\u0000')) continue; // binary
  for (const p of findPrivate(text, terms)) problems.push(`${f}:${p.line}: ${p.what}`);
}

if (terms.length === 0)
  log.warn(
    'private',
    'no private names configured (set DROPS_PRIVATE_TERMS or create .private-terms): checked paths and emails only',
  );
if (problems.length > 0) {
  for (const p of problems) log.error('private', p);
  log.error('private', `${problems.length} problem(s): remove them before committing (map 9.5 point 3)`);
  process.exit(1);
}
log.info(
  'private',
  `${files.length} ${staged ? 'staged' : 'tracked'} files: no local paths, no personal emails, no private names (${terms.length} configured)`,
);
