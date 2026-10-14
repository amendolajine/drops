// Browser side of the cross-engine golden test: runs the same cases as Node and exposes the results.
import { GOLDEN_CASES } from '../golden/cases.ts';
import { runGoldenCase } from '../golden/run.ts';

declare global {
  interface Window {
    __golden?: { ok: boolean; results?: unknown[]; error?: string; ms?: number };
  }
}

const status = document.getElementById('status');
try {
  const t0 = performance.now();
  const results = GOLDEN_CASES.map(runGoldenCase);
  window.__golden = { ok: true, results, ms: Math.round(performance.now() - t0) };
  if (status) status.textContent = `done: ${results.length} races`;
} catch (e) {
  window.__golden = { ok: false, error: String(e) };
  if (status) status.textContent = `error: ${String(e)}`;
}
