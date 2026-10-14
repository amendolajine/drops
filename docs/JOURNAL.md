# Journal

One entry per work block, newest last. What happened, with proof.

## 2026-10-14 - Setup
- Created local repo `~/Documents/drops` and public GitHub repo `amendolajine/drops`. First commit 49ecbd8.
- Enabled GitHub Pages (workflow build). Deploy run 38588531697: success (1m30s).
- VERIFIED live: https://amendolajine.github.io/drops/ returns title "drops." and the placeholder text.
- Started workflow wf_eebde21b-bc3 (7 research streams, synthesis, 5 adversarial critics, revision)
  to produce the production map in `drops/private/01_mappa-del-gioco/`.
- Added the project rules file, docs/STATE.md, docs/DECISIONS.md, this journal.

## 2026-10-14 - Antonio's references
- VERIFIED all 4 reference links opened in Antonio's Chrome (Google blocked the in-app browser with a CAPTCHA).
- Notes: drops/private/01_mappa-del-gioco/drops_01_note-sui-riferimenti-di-antonio.md
- New rule in the project rules file: never skip a step; if a link fails, use Chrome.

## 2026-10-14 - Step 1 delivered, repo secured
- Workflow wf_eebde21b-bc3 finished: map v1.1 (1930 lines), 7 reports, 114 critiques all handled.
- Map review found the project rules file and docs/ served publicly with a work name and local paths. Fixed: Pages now uploads site/ only, names and paths removed (commit 2026df6). VERIFIED /drops/the project rules file is 404.
- Checked a reviewer claim about a hook from another (non-drops) project using grep -P: false (no grep -P in the hook; grep -P works on this Mac). Nothing to fix.
- Test machine: MacBook Air M3 24 GB (D009).

## 2026-10-14 - Sim core, bots, golden tests (branch sim-core)
- Branch `sim-core` from main 11ee13b. Commits a8942b4 (scaffold), c559a2a (sim core), 6685e92 (tuning pass 1),
  22781c4 (bots + metrics CLI), 00fc1bb (golden races), 5a9adc8 (debug page).
- Versions checked with `npm view <pkg> time --json` (cutoff 2026-09-30) and `gh api` for actions and Vite advisories (D010).
- `npm run check` (lint + check-sim + typecheck + unit tests + build + size-limit): green.
  Vitest: 11 files, 72 tests passed. Build: dist JS 46.06 kB, 18.19 kB gzip (size-limit budget 260 kB).
  check-sim: "16 files in src/sim follow the determinism rules".
- Golden: `npm run golden:update` wrote 20 cases (SIM_VERSION 1). `npx playwright test --project=chromium --project=webkit`:
  "golden chromium: 20 races identical to Node and golden.json", same for webkit; debug-page test passed in both.
  Firefox could not start inside this machine's command sandbox ("Could not find profile folder"; running outside
  the sandbox was not allowed), so Firefox is checked by the CI job `golden-browsers`.
- Debug page screenshot from Playwright Chromium (fps 60, frame 16.8 ms, overlay with seed, clock, drops):
  progress folder `03_prototipo-corsa/drops_03_vista-debug-chromium.png`.
- Physics finding: in the R4 prototype every moving drop wrote the wet trail under itself and rode on it, so it
  almost never stopped. Fixed (trail at the tail) and retuned (D012, D013).
- Metrics: `npm run sim -- --races 1000 --seed 1 --rollouts 16 --workers 7 --out <progress folder>/03_prototipo-corsa/drops_03_metriche-nucleo.json`
  (751 s, Node 26.10.0; 1000 glasses x 6 bot combos, identical pick + policy reused, plus 16000 rollouts). Reference player = best reader + good knocks:
  - MET: median race 34.1 s (target 30-40); still racing at 60 s 0% (<2%); pick value +26.9 pp +-3.7 (>=15);
    always-biggest 44.9% sits between random 43.0% and best 69.9% (position 0.07, close to random).
  - MISSED: finishes within 2 s 12.1% (>=25%); lead swap after half 12.8% (>=35%); median gap 5.45 s (<=4);
    knock value +1.6 pp +-1.2 (5-10); wanted another knock 0.9% (>=25%); gulp 8.8% (3-6%);
    best reader beats the rival 71.5% (55-60%, but the bot is close to an oracle).
  - Glasses: 0 of 1000 would pass all four bank criteria (pair closeness mean 10.5% vs 25%); generator fallback 0%.
