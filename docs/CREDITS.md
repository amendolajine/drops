# Credits

Third-party material used by drops. Runtime notices ship in `site/CREDITS.txt` and `site/licenses/`.
Rule (the project rules file): only original work or CC0 / MIT / BSD / Apache-2.0 / OFL.

## Assets in the game (art, sound, fonts, data)

| Asset | Author | Source URL | License | Where it is used |
|---|---|---|---|---|
| Barlow Regular | The Barlow Project Authors | https://github.com/jpt/barlow | SIL Open Font License 1.1 | Interface text and controls |
| Space Mono Regular | The Space Mono Project Authors | https://github.com/googlefonts/spacemono | SIL Open Font License 1.1 | Wordmark and short headings |
| WRAD ARMS mesh, rig and pale skin texture | wriks | https://wriks.itch.io/wrad-arms | CC0 1.0 Universal | Adapted first-person arm and rival's tapping arm |

Both font files are unchanged. Their complete original notices ship as
`site/licenses/barlow.txt` and `site/licenses/space-mono.txt`. The night scene and original identity artwork
remain all rights reserved. The compiled preview includes the Three.js MIT notice and the Vite core MIT
notice for its module preload helper. Licence texts were checked locally on 17 October 2026.
The published preview was compiled with Vite 8.3.4; the table below describes the core repository tooling.
The WRAD ARMS archive and its included CC0 notice were checked on 18 October 2026. The adapted mesh
uses the original articulated hand and fixed arm segments, with a new grip and reach animation.
The complete notice ships as `site/licenses/wrad-arms.txt`. No animation or model from a closed game
is included.

All code in `src/` is original. The simulation follows published physics (papers listed in the research
report R4, used as inspiration and for numbers, no code copied).

## npm packages (exact versions in package.json, checked with npm view on 2026-10-14)

| Package | Version | License | Source | Role | Ships to players? |
|---|---|---|---|---|---|
| three | 0.186.1 | MIT | https://github.com/mrdoob/three.js | 3D rendering | yes |
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
