import { describe, expect, it } from 'vitest';
import { checkSimFileName, checkSimSource } from '../../scripts/sim-rules.ts';

const msgs = (file: string, src: string) => checkSimSource(file, src).map((v) => v.message);

describe('check-sim: the determinism rules catch what they must', () => {
  it('flags Math outside fmath.ts, ** and **=, clocks and globals', () => {
    expect(msgs('src/sim/x.ts', 'const a = Math.sin(1);')).toHaveLength(1);
    expect(msgs('src/sim/x.ts', 'const a = 2 ** 3;')).toHaveLength(1);
    expect(msgs('src/sim/x.ts', 'let a = 2; a **= 3;')).toHaveLength(1);
    expect(msgs('src/sim/x.ts', 'const t = Date.now() + performance.now();')).toHaveLength(2);
    expect(msgs('src/sim/x.ts', 'console.log(1); setTimeout(f, 1); window.x = 1;')).toHaveLength(3);
    expect(msgs('src/sim/x.ts', 'const s = (1).toLocaleString();')).toHaveLength(1);
  });
  it('allows only exact Math members inside fmath.ts', () => {
    expect(msgs('src/sim/fmath.ts', 'export const s = Math.sqrt; export const f = Math.floor;')).toHaveLength(
      0,
    );
    expect(msgs('src/sim/fmath.ts', 'export const s = Math.sin;')).toHaveLength(1);
    expect(msgs('src/sim/fmath.ts', 'export const r = Math.random;')).toHaveLength(1);
    expect(msgs('src/sim/fmath.ts', "import x from './a.ts';")).toHaveLength(1);
  });
  it('allows only sibling imports', () => {
    expect(msgs('src/sim/x.ts', "import { a } from './fmath.ts';")).toHaveLength(0);
    expect(msgs('src/sim/x.ts', "import * as THREE from 'three';")).toHaveLength(1);
    expect(msgs('src/sim/x.ts', "import { log } from '../debug/log.ts';")).toHaveLength(1);
  });
  it('ignores comments and strings, but not code inside template expressions', () => {
    expect(
      msgs('src/sim/x.ts', '// Math.sin and ** and Date\nconst s = "Math.random() ** Date";'),
    ).toHaveLength(0);
    // biome-ignore lint/suspicious/noTemplateCurlyInString: the fixture is source text with a template expression
    expect(msgs('src/sim/x.ts', 'const s = `value ${Math.sin(1)}`;')).toHaveLength(1);
  });
  it('catches multi-line, bare and dynamic imports (engineering review probes)', () => {
    expect(msgs('src/sim/x.ts', "import {\n  a,\n} from './zz_probe6.js';")).toHaveLength(1);
    expect(msgs('src/sim/x.ts', "import {\n  log,\n} from '../debug/log.ts';")).toHaveLength(1);
    expect(msgs('src/sim/x.ts', "import '../debug/main.ts';")).toHaveLength(1);
    expect(msgs('src/sim/x.ts', "const m = await import('./fmath.ts');")).toHaveLength(1);
    expect(msgs('src/sim/x.ts', "export {\n  a,\n} from '../other.ts';")).toHaveLength(1);
    expect(
      msgs('src/sim/x.ts', "import {\n  floor,\n  sqrt,\n} from './fmath.ts';\nexport { a } from './b.ts';"),
    ).toHaveLength(0);
    // a variable called "from" is not an import
    expect(msgs('src/sim/x.ts', 'export const from = 1;')).toHaveLength(0);
  });
  it('bans code built at run time, garbage-collector hooks, threads and the network', () => {
    for (const src of [
      "const f = new Function('return 1');",
      "eval('1');",
      'const r = new WeakRef(o);',
      'const g = new FinalizationRegistry(() => {});',
      'const b = new SharedArrayBuffer(8);',
      'Atomics.add(a, 0, 1);',
      "fetch('x');",
      'self.postMessage(1);',
      "const m = require('x');",
    ])
      expect(msgs('src/sim/x.ts', src)).toHaveLength(1);
  });
  it('only .ts source files may live in src/sim', () => {
    expect(checkSimFileName('src/sim/a.ts')).toHaveLength(0);
    expect(checkSimFileName('src/sim/a.js')).toHaveLength(1);
    expect(checkSimFileName('src/sim/a.d.ts')).toHaveLength(1);
    expect(checkSimFileName('src/sim/data.json')).toHaveLength(1);
  });
});
