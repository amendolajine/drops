// Determinism rules for src/sim (map 9.1, 9.3), checked on the source text with comments and strings
// removed. Second line of defence next to the Biome overrides in biome.json (which cannot see **=).

export interface Violation {
  line: number;
  message: string;
}

const FMATH_ALLOWED = new Set([
  'sqrt',
  'floor',
  'ceil',
  'round',
  'trunc',
  'abs',
  'min',
  'max',
  'imul',
  'sign',
  'PI',
  'LN2',
]);

const BANNED_IDENTIFIERS: Record<string, string> = {
  Date: 'reads the clock',
  performance: 'reads the clock',
  crypto: 'randomness outside the seeded streams',
  globalThis: 'reaches outside the simulation',
  window: 'reaches the page',
  document: 'reaches the page',
  navigator: 'reaches the page',
  setTimeout: 'real time instead of ticks',
  setInterval: 'real time instead of ticks',
  requestAnimationFrame: 'real time instead of ticks',
  queueMicrotask: 'asynchronous work',
  process: 'reaches the runtime',
  console: 'logging goes through the sim log ring',
  Intl: 'locale-dependent',
  toLocaleString: 'locale-dependent',
  localeCompare: 'locale-dependent',
};

/** Replace comments and string contents with spaces (keeps line numbers and `${...}` code). */
export function stripCode(src: string): string {
  const out: string[] = [];
  const stack: ('code' | 'tpl')[] = ['code'];
  let depth: number[] = [0];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    const nx = src[i + 1];
    const mode = stack[stack.length - 1];
    if (mode === 'tpl') {
      if (ch === '\\') {
        out.push('  ');
        i += 2;
      } else if (ch === '`') {
        out.push('`');
        stack.pop();
        i++;
      } else if (ch === '$' && nx === '{') {
        out.push('${');
        stack.push('code');
        depth.push(0);
        i += 2;
      } else {
        out.push(ch === '\n' ? '\n' : ' ');
        i++;
      }
      continue;
    }
    if (ch === '/' && nx === '/') {
      while (i < src.length && src[i] !== '\n') {
        out.push(' ');
        i++;
      }
      continue;
    }
    if (ch === '/' && nx === '*') {
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) {
        out.push(src[i] === '\n' ? '\n' : ' ');
        i++;
      }
      out.push('  ');
      i += 2;
      continue;
    }
    if (ch === "'" || ch === '"') {
      out.push(ch);
      i++;
      while (i < src.length && src[i] !== ch) {
        if (src[i] === '\\') {
          out.push(' ');
          i++;
        }
        out.push(src[i] === '\n' ? '\n' : ' ');
        i++;
      }
      out.push(ch);
      i++;
      continue;
    }
    if (ch === '`') {
      out.push('`');
      stack.push('tpl');
      i++;
      continue;
    }
    if (ch === '{') depth[depth.length - 1]++;
    if (ch === '}') {
      if (depth[depth.length - 1] === 0 && stack.length > 1) {
        out.push('}');
        stack.pop();
        depth = depth.slice(0, -1);
        i++;
        continue;
      }
      depth[depth.length - 1]--;
    }
    out.push(ch);
    i++;
  }
  return out.join('');
}

export function checkSimSource(fileName: string, src: string): Violation[] {
  const v: Violation[] = [];
  const isFmath = /(^|\/)fmath\.ts$/.test(fileName);
  // import specifiers are checked on the raw text (they are strings)
  const importRe =
    /^\s*(?:import|export)\b[^'"\n]*?from\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/gm;
  for (const m of src.matchAll(importRe)) {
    const spec = m[1] ?? m[2];
    const line = src.slice(0, m.index).split('\n').length;
    if (isFmath) v.push({ line, message: `fmath.ts must not import anything (found '${spec}')` });
    else if (!/^\.\/[A-Za-z0-9_-]+\.ts$/.test(spec))
      v.push({ line, message: `imports must be sibling files './name.ts' inside src/sim (found '${spec}')` });
  }
  const code = stripCode(src);
  const lines = code.split('\n');
  lines.forEach((text, idx) => {
    const line = idx + 1;
    if (/\*\*=?/.test(text))
      v.push({ line, message: 'the ** operator is not allowed (use multiplication or fmath.ts)' });
    for (const m of text.matchAll(/\bMath\b(\s*\.\s*([A-Za-z_$][\w$]*))?/g)) {
      if (!isFmath) v.push({ line, message: 'Math is only allowed in src/sim/fmath.ts' });
      else if (!m[2] || !FMATH_ALLOWED.has(m[2]))
        v.push({
          line,
          message: `Math.${m[2] ?? '?'} is not exactly specified across engines; write an approximation from + - * /`,
        });
    }
    for (const m of text.matchAll(/(?<![.\w$])([A-Za-z_$][\w$]*)\b/g)) {
      const why = BANNED_IDENTIFIERS[m[1]];
      if (why) v.push({ line, message: `'${m[1]}' is not allowed in the simulation (${why})` });
    }
    for (const m of text.matchAll(/\.\s*(toLocaleString|localeCompare)\b/g)) {
      v.push({ line, message: `'${m[1]}' is not allowed in the simulation (locale-dependent)` });
    }
  });
  return v;
}
