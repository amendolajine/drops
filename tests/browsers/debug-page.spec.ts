import { expect, test } from '@playwright/test';
import { createRace, hashState } from '../../src/sim/index.ts';

test('debug page: ?seed replays the glass, ?debug=1 overlay, read-only window.__drops', async ({
  page,
  browserName,
}, info) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto('/?seed=42&debug=1');
  await page.waitForFunction(() => window.__drops !== undefined);

  // ?seed=42 builds exactly the glass Node builds for seed "42" (same hash before the pick)
  const pageHash = await page.evaluate(() => window.__drops.hash());
  expect(pageHash).toBe(hashState(createRace('42')));

  // window.__drops is read-only
  const ro = await page.evaluate(() => {
    const before = window.__drops.seed;
    try {
      (window as unknown as { __drops: unknown }).__drops = 1;
    } catch {}
    try {
      (window.__drops as unknown as { seed: string }).seed = 'changed';
    } catch {}
    const snap = window.__drops.snapshot();
    let mutated = false;
    try {
      (snap as unknown as { tick: number }).tick = -5;
      mutated = snap.tick === -5;
    } catch {}
    return {
      same: window.__drops.seed === before,
      typeOk: typeof window.__drops === 'object',
      frozen: Object.isFrozen(snap),
      mutated,
    };
  });
  expect(ro).toEqual({ same: true, typeOk: true, frozen: true, mutated: false });

  // pick candidate 2 by clicking it, then the race runs
  const target = await page.evaluate(() => {
    const s = window.__drops.snapshot();
    const c = s.candidates.find((k) => k.index !== s.picks.rival) ?? s.candidates[0];
    const d = s.drops.find((x) => x.id === c.dropId);
    const r = (document.getElementById('glass') as HTMLCanvasElement).getBoundingClientRect();
    return { x: r.left + ((d?.x ?? 0) / 240) * r.width, y: r.top + ((d?.y ?? 0) / 135) * r.height };
  });
  await page.mouse.click(target.x, target.y);
  await page.waitForFunction(() => window.__drops.snapshot().raceTime > 3, null, { timeout: 30_000 });

  const overlay = await page.locator('#overlay').innerText();
  for (const part of [
    'fps',
    'seed 42',
    'race clock',
    'active events:',
    'drops (',
    'mass uL',
    'speed mm/s',
    'last 20 log lines:',
    '[drops]'.slice(1, 1),
  ]) {
    expect(overlay).toContain(part);
  }
  expect(await page.locator('#hud').innerText()).toMatch(/Racing|win|Nobody/);
  const logs = await page.evaluate(() => window.__drops.log(20));
  expect(logs.length).toBeGreaterThan(2);
  expect(errors).toEqual([]);
  await page.screenshot({ path: info.outputPath(`debug-page-${browserName}.png`), fullPage: true });
});
