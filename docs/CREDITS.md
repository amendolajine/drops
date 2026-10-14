# Credits

Third-party material used by drops. Published later on the site as `credits.md` (map 9.5).
Rule (the project rules file): only original work or CC0 / MIT / BSD / Apache-2.0 / OFL.

## Assets in the game (art, sound, fonts, data)

| Asset | Author | Source URL | License | Where it is used |
|---|---|---|---|---|
| (none yet) | | | | |

All code in `src/` is original. The simulation follows published physics (papers listed in the research
report R4, used as inspiration and for numbers, no code copied).

## npm packages (exact versions in package.json, checked with npm view on 2026-10-14)

| Package | Version | License | Source | Role | Ships to players? |
|---|---|---|---|---|---|
| three | 0.186.1 | MIT | https://github.com/mrdoob/three.js | 3D rendering (installed, not used yet) | yes, from step 4 |
| vite | 8.3.3 | MIT | https://github.com/vitejs/vite | dev server and build | no (build tool) |
| typescript | 7.0.2 | Apache-2.0 | https://github.com/microsoft/TypeScript | type checking | no |
| vitest | 5.0.3 | MIT | https://github.com/vitest-dev/vitest | unit and golden tests | no |
| @biomejs/biome | 2.5.15 | MIT OR Apache-2.0 | https://github.com/biomejs/biome | lint and format | no |
| @playwright/test | 1.63.0 | Apache-2.0 | https://github.com/microsoft/playwright | browser tests | no |
| size-limit | 14.1.0 | MIT | https://github.com/ai/size-limit | download budget | no |
| @size-limit/file | 14.1.0 | MIT | https://github.com/ai/size-limit | download budget | no |
| @types/node | 24.19.0 | MIT | https://github.com/DefinitelyTyped/DefinitelyTyped | Node type definitions | no |

Transitive packages in package-lock.json (100 in total, counted from the lock file on 2026-10-14):
MIT 51, Apache-2.0 26, MIT OR Apache-2.0 9, MPL-2.0 12, ISC 1 (picocolors), BSD-3-Clause 1 (source-map-js).

Note on MPL-2.0: the 12 MPL-2.0 entries are `lightningcss` and its per-platform binaries, a CSS tool that
Vite installs. It runs only on the developer's machine at build time and none of its code is copied into the
game. MPL-2.0 is not on the asset list above; it is recorded here so Antonio can veto it (open question in
docs/STATE.md).
