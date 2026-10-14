# Decision log

Append only. To change a decision, add a new entry that supersedes the old one by number.
Format: number, date, decision, why, evidence, who decided.

## D001 - 2026-10-14 - Host on free GitHub Pages from a public repo
- Why: GitHub Free serves Pages only from public repos; zero cost, zero manual steps after setup.
- Evidence: docs.github.com "GitHub Pages limits" and "Creating a GitHub Pages site" (fetched 2026-10-14);
  repo created with `gh repo create amendolajine/drops --public`; Pages enabled with `build_type=workflow`.
- Who: Antonio approved public repo.

## D002 - 2026-10-14 - Separate from work project
- Why: Antonio wants a personal test of the potential first.
- Evidence: separate folder `~/Documents/drops`, separate repo, no work project references.
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
