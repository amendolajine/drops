# Decision log

Append only. To change a decision, add a new entry that supersedes the old one by number.
Format: number, date, decision, why, evidence, who decided.

## D001 - 2026-10-14 - Host on free GitHub Pages from a public repo
- Why: GitHub Free serves Pages only from public repos; zero cost, zero manual steps after setup.
- Evidence: docs.github.com "GitHub Pages limits" and "Creating a GitHub Pages site" (fetched 2026-10-14);
  repo created with `gh repo create amendolajine/drops --public`; Pages enabled with `build_type=workflow`.
- Who: Antonio approved public repo.

## D002 - 2026-10-14 - Separate from any work project
- Why: Antonio wants a personal test of the potential first.
- Evidence: separate folder `~/Documents/drops`, separate repo, no work references.
- Who: Antonio.

## D003 - 2026-10-14 - Commit identity is the GitHub noreply address
- Why: keep the personal Gmail out of a public commit history.
- Evidence: `git config user.email` in this repo = 4541177+amendolajine@users.noreply.github.com.
- Who: Antonio.

## D004 - 2026-10-14 - Deploy with the official Pages actions
- Versions checked via `gh api repos/<action>/releases/latest` on 2026-10-14:
  checkout v7.0.1, configure-pages v6.0.0, upload-pages-artifact v5.0.0, deploy-pages v5.0.1.
- Who: Antonio.

## D005 - 2026-10-14 - All player-facing text in English
- Why: Antonio's request. Docs for Antonio stay in Italian.
- Who: Antonio.

## D006 - 2026-10-14 - Persistent project memory and evidence rule
- Why: Antonio asked that context compaction never causes lost work or hallucinated state.
- What: the project rules file protocol, STATE.md, DECISIONS.md, JOURNAL.md, evidence labels, in-game debug tools.
- Who: Antonio asked.

## D007 - 2026-10-14 - Pages publishes only the game folder
- Why: the map review found that publishing the whole repo exposed the project rules file and docs/ (with a work name and local paths).
- What: `pages.yml` uploads `site/` (later `dist/` from the Vite build). Work names and local paths removed from all files.
- Evidence: commit 2026df6, deploy run 38605895549 success; the rules file URL on Pages returns 404 (fetched 2026-10-14).
- Open: older commits still contain the work name; rewriting history needs Antonio's explicit yes.
- Who: Antonio.

## D008 - 2026-10-14 - Production map v1.1 adopted as the plan of record
- Where: `~/Documents/drops/private/01_mappa-del-gioco/drops_01_mappa-del-gioco.md` (local, private).
- Summary: three.js r186 + TypeScript + Vite; deterministic 60 Hz sim with sfc32 streams; offline glass bank;
  indexed-colour rendering; synthesized Web Audio; MVP = one provincial road in three lights
  (Grey drive, Sunset after the storm, Night storm); 6 events; knock with two uses (scare / jolt), 3 per race.
- Order: sim core first (needed to drive the moodboard clips), then moodboard (step 2) and grey-box race (step 3) in parallel.
- Who: team proposal; Antonio's approval pending at the step 1 checkpoint.

## D009 - 2026-10-14 - Reference test machine
- MacBook Air M3, 24 GB, built-in 2560x1664 Retina plus an external 3840x2160 display (system_profiler, 2026-10-14).

## D010 - 2026-10-14 - Tool versions: exact pins, newest release at least 14 days old
- What: three 0.186.1, typescript 7.0.2, vitest 5.0.3, @biomejs/biome 2.5.15, @playwright/test 1.63.0,
  size-limit 14.1.0 + @size-limit/file 14.1.0, @types/node 24.19.0; package-lock.json committed; `.npmrc` save-exact.
- Exception (map 9.1 security rule): vite 8.3.3 (2026-10-06) instead of 8.3.1, because 8.3.0-8.3.2 are affected
  by GHSA-rq7h-c2jc-7f22, GHSA-vfpm-58rq-9qcg, GHSA-9jrq-w75r-8gcw (dev server file exposure; read in the notes).
- Evidence: `npm view <pkg> time --json` on 2026-10-14 (cutoff 2026-09-30); `gh api repos/vitejs/vite/security-advisories`.
- CI actions pinned by SHA: checkout v7.0.1 (3d3c42e), setup-node v7.0.0 (8207627; v7.1.0 is from 2026-10-08).
- Node 24 in CI (`.nvmrc`); scripts run TypeScript directly with Node type stripping, stable since Node 24.12.0
  (nodejs.org/docs/latest-v24.x/api/typescript.html, fetched 2026-10-14). Local machine runs Node 26.10.0.
- Who: Antonio.

## D011 - 2026-10-14 - Determinism rules are enforced three times
- What: Biome override for `src/sim` (no Math outside fmath.ts, no Date/performance/crypto/globals/timers,
  imports only `./name.ts`), a GritQL Biome plugin that bans `**`, and `scripts/check-sim.ts` (part of `npm run lint`)
  which also catches `**=` (the GritQL snippet for `**=` does not compile in Biome 2.5.15) and checks that
  fmath.ts uses only exact Math members (sqrt, floor, ceil, round, trunc, abs, min, max, imul, sign, PI, LN2).
  `tsconfig.sim.json` type-checks src/sim with no DOM library.
- Evidence: a probe file with each violation was flagged by Biome (2026-10-14); tests/unit/check-sim.test.ts.
- Who: Antonio.

## D012 - 2026-10-14 - A drop never rides on its own wet trail
- Why: the R4 prototype marked the wet cell under the drop, so every moving drop halved its own pinning and
  stick-slip almost vanished; the R4 numbers (PPIN 130, KV 0.10) were tuned on that. Physically the advancing edge
  meets dry glass and only followers use the trail (R4 1.7).
- What: the trail is written at the drop's tail. Consequence: retuned PPIN 130 -> 70, KV 0.10 -> 0.075,
  HET_AMP 0.55 -> 0.30, SPECK_AREA 330 -> 600 (src/sim/params.ts lists old values and reasons).
- Evidence: tests/unit/physics.test.ts "stick-slip"; 1000-race metrics below (median race 34.1 s, 0% at 60 s).
- Who: Antonio.

## D013 - 2026-10-14 - Road texture: small unannounced shakes while the car moves
- What: every 2-6 s, pinning x0.75 for 0.2 s on the whole glass (car above 10 km/h). It is the road surface, not an
  event: uniform, never targets a drop. The announced pothole stays the map 3.3 event (x0.6 for 0.3 s).
- Source: R4 1.9 (vibration lowers pinning), R4 6.1 (the prototype had bumps every ~11 s).
- Who: Antonio. To review when the renderer shows the glass shaking (map 3.3 rule 2: every hit leaves a visible sign).

## D014 - 2026-10-14 - Candidate generator: spots first, then hidden roles, volumes for equal arrival
- What: 6 spots at least 20 mm apart in x 10-60, y 10-52 (map 2.1 hypotheses: 20 mm spacing in x 10-50 needed the
  fallback in 13.5% of glasses, above the 1-in-20 limit; x 10-60 needs it in 0 of 1000). Roles: sleeper on the
  highest spot, monster and favourites further back, outsider at the front with a feeder, middle on a wet streak.
  Volumes give every candidate about the same expected arrival (map 3.1 "advanced starts go with smaller drops"),
  using the measured speed curve (4.6 mm/s at 5.5 uL to 5.6 mm/s at 8.5 uL), +-10% noise.
- Evidence: win share by size rank in 1000 glasses x 16 rollouts: 18/12/16/14/18/23% (no size dominates).
- Open: the "monster" profile wins 34% of rollouts on its glass and favourites only 9%: profiles need a second pass
  together with the glass bank.
- Who: Antonio.

## D015 - 2026-10-14 - Where and when creatures come
- What: positions decided at creation, uniform inside the band where the pack is expected at that time (start box
  plus 5.5 mm/s x time), never from the picks (map 3.3 allows density weighting). Every Grey drive braking brings a
  fly (map: fly in 45% of races with stops; braking chance 45%). A fly lands only under 30 km/h (test) and the
  braking + fly pair counts as one slot for the 6 s spacing rule. Event cutoff 25.5 s (75% of the R4 median 34 s)
  until the bank gives per-glass medians.
- Who: Antonio.

## D016 - 2026-10-14 - The knock: one input, both uses by position
- What: a knock is (tick, who, x, y) rounded to 0.5 mm. Every knock scares the nearest landed creature within 15 mm
  (fly 58%, leaf 50%, +20 points per miss, third knock on the same creature always works) and jolts the nearest stuck
  drop within 10 mm (pinning x0.5 for 0.25 s). 3 per race, 1 s apart, locked in the final straight (85% of the path),
  the 4th is "stop it!" and counts as a wanted knock.
- Rival interpretation (map 3.5): his "lucky corner" is the top third of the start area (every candidate starts in
  the top 40% of the glass, so "top third of the glass" would include almost all); he jolts his drop when it is stuck
  for 2 s only while the car is above 45 km/h (at a stop every drop is still).
- Who: Antonio.

## D017 - 2026-10-14 - Result rules in the director
- First picked drop over the rear seal wins (crossing time interpolated inside the tick). A picked drop going out does
  not hand over the win: the other must still finish, or lead at the 90 s cut. Both out = draw. Gulp: bigger wins,
  within 5% draw. Fast-forward latches when the result is decided, when a picked drop goes out before 70% of its path,
  or when the predicted gap stays above 6 s for 2 s after the leader passes 50%. Slow motion latches when both drops
  are about 1 s from the line and the predicted gap is under 1 s. All of this is computed inside the sim.
- Who: Antonio.

## D018 - 2026-10-14 - Balance measures: bots, definitions, honest reporting
- What: `npm run sim -- --races 1000 --seed <n>` plays every glass with 3 pickers x 2 knock policies against the rival
  brain. The best reader reads each glass from 16 rollouts with other weather (what a bank would know). Definitions
  are stored in the output JSON; targets are the map's and are not redefined.
- Note: the best reader is close to an oracle; the map's 55-60% for an "attentive player" needs people (step 3 test).
- Who: Antonio.

## D019 - 2026-10-14 - Golden test and dev page
- 20 recorded races (inputs only) with a state hash every 600 ticks and a fingerprint of the event schedule;
  checked in Node by Vitest and in Chromium, Firefox and WebKit by Playwright (CI job `golden-browsers`).
- The dev page (`index.html` at the repo root, `npm run dev`) is never deployed: pages.yml still uploads `site/` (D007).
- package.json has no `license` field until Antonio answers the licence question (STATE, open questions).
- Who: Antonio.


## D20 - 2026-10-16 - Private workspace folder
- What: live status, journal, production docs and look-dev live in `private/`, ignored by this repo and versioned locally.
  docs/STATE.md and docs/JOURNAL.md moved there so there is one status file. Supersedes the progress-folder location in D008.
- Who: Antonio.

## D021 - 2026-10-17 - A bilingual, separate research playtest
- What: the research playtest offers Italian or English before entry, then uses that language throughout the game
  controls and feedback form. This is an exception for research; the release language decision remains unchanged.
- The questionnaire starts closed beside the game on desktop. Opening it during a race pauses the simulation;
  closing it does not resume the race. Replay and feedback remain separate choices after the result.
- Feedback has no player accounts or gameplay tracking. Optional notes precede guided answer choices. Selected
  language is saved explicitly; version, race seed and phase can be omitted. Older response files remain importable.
- Why: clear controls and uninterrupted first impressions matter more than collecting comments during play.
  Visual identity proposals remain separate from the functional prototype until an artistic choice is made.
- Who: Antonio.
