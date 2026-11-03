import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(await readFile(join(root, 'site/playtest-study/release.json'), 'utf8'));
const hash = (body) => createHash('sha256').update(body).digest('hex');
function sameHash(body, wanted) {
  assert.equal(hash(body), wanted, 'Release differs from its recorded source or output');
}
assert.throws(() => sameHash(Buffer.from('deliberate alteration'), '0'.repeat(64)));
assert.equal(manifest.schema, 'drops-release-1');
assert.equal(manifest.version, 'journey-v8-2026-11-03');
let compressed = 0;
for (const file of manifest.files) {
  assert(!file.name.includes('..') && !file.name.startsWith('/'), 'Invalid output path');
  const body = await readFile(join(root, 'site', file.name));
  sameHash(body, file.sha256);
  assert.equal(body.length, file.bytes);
  if (file.name.endsWith('.js')) compressed += gzipSync(body).length;
}
for (const source of manifest.sources) sameHash(await readFile(join(root, source.name)), source.sha256);
assert(compressed <= 300 * 1024, 'Current journey JavaScript exceeds the 300 KiB compressed budget');
for (const name of ['playtest-study/index.html', 'playtest-study/scene.html', 'feedback-study/owner.html'])
  assert(
    manifest.files.some((file) => file.name === name),
    'A required page is missing',
  );
console.log(
  `Journey package verified: ${manifest.files.length} files, ${compressed} compressed JavaScript bytes; altered-file control rejected.`,
);
