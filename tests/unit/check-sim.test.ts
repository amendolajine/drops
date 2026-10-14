import { describe, expect, it } from 'vitest';
import { checkSimSource } from '../../scripts/sim-rules.ts';

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
});
