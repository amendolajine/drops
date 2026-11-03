import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { findPrivate } from '../scripts/private-rules.ts';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = join(root, 'out/journey-site');
const site = join(root, 'site');
const terms = [];
try {
  for (const line of (await readFile(join(root, '.private-terms'), 'utf8')).split('\n')) {
    if (line.trim() && !line.startsWith('#')) terms.push(line.trim());
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
const hash = (body) => createHash('sha256').update(body).digest('hex');
function assertSafe(name, text = '') {
  assert(
    /^(?:(?:playtest-study\/(?:index|scene)|feedback-study\/owner)\.html|assets\/[A-Za-z0-9_.-]+\.(?:js|css|ttf))$/.test(
      name,
    ),
    'Unexpected release file',
  );
  assert.equal(findPrivate(text, terms).length, 0, 'Release contains restricted content');
  assert(!/sourceMappingURL=/.test(text), 'Release includes source map pointers');
}
assert.throws(() => assertSafe(['pri', 'vate/notes.md'].join('')));
assert.throws(() => assertSafe('assets/fault.js', ['', 'Users', 'synthetic'].join('/')));
assert.equal(findPrivate('synthetic-private-term', ['synthetic-private-term']).length, 1);

await build({
  configFile: false,
  root: join(root, 'web'),
  base: './',
  publicDir: false,
  logLevel: 'warn',
  build: {
    outDir: out,
    emptyOutDir: true,
    target: 'es2022',
    sourcemap: false,
    rollupOptions: {
      input: [
        join(root, 'web/playtest-study/index.html'),
        join(root, 'web/playtest-study/scene.html'),
        join(root, 'web/feedback-study/owner.html'),
      ],
    },
  },
});
async function entries(dir, base = dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await entries(path, base)));
    else files.push({ path, name: relative(base, path).replaceAll('\\', '/') });
  }
  return files.sort((a, b) => a.name.localeCompare(b.name, 'en'));
}
const files = [];
for (const file of await entries(out)) {
  const body = await readFile(file.path);
  assertSafe(file.name, file.name.endsWith('.ttf') ? '' : body.toString('utf8'));
  await mkdir(dirname(join(site, file.name)), { recursive: true });
  await copyFile(file.path, join(site, file.name));
  files.push({ name: file.name, bytes: body.length, sha256: hash(body) });
}
const sources = [];
for (const file of await entries(join(root, 'web'), root))
  sources.push({ name: file.name, sha256: hash(await readFile(file.path)) });
for (const name of ['src/sim/rng.ts', 'src/sim/fmath.ts', 'package-lock.json', 'tools/build-playtest.mjs'])
  sources.push({ name, sha256: hash(await readFile(join(root, name))) });
sources.sort((a, b) => a.name.localeCompare(b.name, 'en'));
const manifest = {
  schema: 'drops-release-1',
  version: 'journey-v8-2026-11-03',
  features: [
    'seated-gaze',
    'continuous-rain',
    'reading-light',
    'two-skies',
    'local-resume',
    'bilingual-file-feedback',
  ],
  files,
  sources,
};
await writeFile(join(site, 'playtest-study/release.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Journey release built: ${files.length} files. Existing release assets preserved.`);
