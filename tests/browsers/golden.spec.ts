import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, test } from '@playwright/test';
import { GOLDEN_CASES } from '../golden/cases.ts';
import { runGoldenCase } from '../golden/run.ts';

const golden = JSON.parse(readFileSync(join(import.meta.dirname, '..', 'golden', 'golden.json'), 'utf8'));

test('golden races: this browser matches Node and the recorded hashes', async ({ page, browserName }) => {
  await page.goto('/tests/browsers/golden.html');
  await page.waitForFunction(() => window.__golden !== undefined, null, { timeout: 150_000 });
  const res = await page.evaluate(() => window.__golden);
  expect(res?.error).toBeUndefined();
  expect(res?.ok).toBe(true);
  const node = GOLDEN_CASES.map(runGoldenCase);
  expect(res?.results).toEqual(node);
  expect(node).toEqual(golden.cases);
  console.log(
    `[drops] golden ${browserName}: ${node.length} races identical to Node and golden.json (${res?.ms} ms in the browser)`,
  );
});
