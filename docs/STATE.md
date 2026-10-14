# State

Last updated: 2026-10-14 (night), branch `sim-core`. Read this first. Labels: VERIFIED (with proof), ASSUMED, TODO.

## Where we are
Step 1 delivered, waiting for Antonio at the step 1 checkpoint. Step 3 days 1-3 (sim core) built on branch
`sim-core`, not merged. Nothing new is published: Pages still deploys only `site/` from `main`.

## Done
- VERIFIED Public repo https://github.com/amendolajine/drops, branch `main`; Pages publishes only `site/` (D007).
- VERIFIED Production map v1.1 and 7 research reports in `~/Documents/drops/private/01_mappa-del-gioco/`.
- VERIFIED Repo scaffold on `sim-core` (D010): Vite 8.3.3, TypeScript 7.0.2, three 0.186.1 (installed, unused),
  Vitest 5.0.3, Biome 2.5.15, Playwright 1.63.0, size-limit 14.1.0. Scripts: dev, build, test, test:browsers, lint,
  typecheck, sim, golden:update, size, check. `.github/workflows/ci.yml` runs lint, typecheck, tests, build, size
  and the cross-browser golden test on push and PR; it never deploys. `pages.yml` unchanged.
- VERIFIED Deterministic sim core in `src/sim` (pure API `createRace`, `step`, `snapshot`, `hashState`): glass
  generation, drop physics, car speed, event schedule, knock, rival, director. Rules enforced by Biome + check-sim (D011).
  Proof: `npm run check` green; Vitest 11 files, 72 tests passed (2026-10-14).
- VERIFIED Golden test: 20 recorded races identical in Node 26 (local), Node 24.21 (CI), Chromium, Firefox and WebKit.
  Proof: local Playwright run (Chromium, WebKit) and CI run 38617750435 job `golden-browsers` (Chromium, Firefox,
  WebKit: "20 races identical to Node and golden.json"), job `checks` (11 test files passed on Node v24.21.0).
- VERIFIED Bots and metrics: `npm run sim -- --races 1000 --seed 1` (JOURNAL 2026-10-14). Output in
  `~/Documents/drops/private/03_prototipo-corsa/drops_03_metriche-nucleo.json`.
- VERIFIED Debug page `npm run dev` -> `?seed=`, `?debug=1`, `window.__drops` (Playwright test in Chromium and WebKit;
  screenshot `03_prototipo-corsa/drops_03_vista-debug-chromium.png`).

## Measures today (1000 glasses, raw generator, no glass bank yet)
| Measure (map 1.2) | Today | Target |
|---|---|---|
| Picked drops finish within 2 s | 12.1% | >= 25% |
| Lead swap after half | 12.8% | >= 35% |
| Median arrival gap | 5.45 s | <= 4 s |
| Knock value (best reader) | +1.6 pp | +5 to +10 pp |
| Races wanting another knock | 0.9% | >= 25% |
| Pick value (best vs random) | +26.9 pp | >= +15 pp |
| Always-biggest between random and best | yes (44.9% vs 43.0% / 69.9%) | yes, about halfway |
| Median race | 34.1 s | 30-40 s |
| Still racing at 60 s | 0% | < 2% |
| Gulp | 8.8% | 3-6% |
| Best reader vs rival | 71.5% | 55-60% (attentive person) |

## In progress
- Nothing running. Branch `sim-core` pushed; CI green (run 38617750435). Not merged into `main`.
- Note: Firefox cannot start inside this machine's command sandbox ("Could not find profile folder"), so the
  Firefox golden check runs in CI only.

## Next
1. Antonio: step 1 checkpoint (map approval, questions 1-9, history rewrite yes/no, licence).
2. Tension and knock value: the glass bank (map 3.1, `tools/bank/`) selecting glasses on pair closeness; more
   creatures in the drops' path or a stronger knock; profile pass (the "monster" wins 34% of its glass, favourites 9%).
3. Gulp 8.8% -> 3-6%: spacing, merge reach between racers, or bank criteria.
4. Step 2 moodboard driven by this sim (clips from seeds).
5. Merge `sim-core` into `main` only after Antonio approves step 2 (Pages keeps deploying `site/` meanwhile).

## Open questions for Antonio
- Questions 1-9 of map section 13; history rewrite yes/no; licence (MIT for code, all rights reserved for art and music,
  or Creative Commons). package.json has no licence field until then.
- `lightningcss` (MPL-2.0) comes with Vite as a build tool, never shipped in the game: ok? (docs/CREDITS.md)
- The rival's habits are tuned against a near-oracle bot: final balance needs the step 3 test with people.

## Known unverified facts
- See map section 14.4.

## Progress folder layout
`~/Documents/drops/private/`
- `01_mappa-del-gioco/` production map + `ricerca/` reports + Antonio's reference notes
- `02_moodboard/` (next)
- `03_prototipo-corsa/` sim core metrics (`drops_03_metriche-nucleo.json`) and the debug view screenshot
