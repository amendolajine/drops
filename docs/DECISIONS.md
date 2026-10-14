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
