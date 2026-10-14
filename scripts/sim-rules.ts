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
  self: 'reaches the page or the worker',
  Function: 'builds code at run time',
  eval: 'builds code at run time',
  WeakRef: 'depends on the garbage collector',
  FinalizationRegistry: 'depends on the garbage collector',
  SharedArrayBuffer: 'shared memory between threads',
  Atomics: 'shared memory between threads',
  fetch: 'network access',
  require: 'loads code outside src/sim',
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

/**
 * Every import and re-export, including multi-line ones and bare `import './x.ts'`. Statements are found on
 * the comment-free code (stripCode keeps every character offset), specifiers are read from the raw text.
 */
export function importsOf(src: string, code: string): { line: number; spec: string; dynamic: boolean }[] {
  const out: { line: number; spec: string; dynamic: boolean }[] = [];
  const lineAt = (i: number) => src.slice(0, i).split('\n').length;
  const specAt = (q: number) => {
    const quote = src[q];
    const end = src.indexOf(quote, q + 1);
    return end > q ? src.slice(q + 1, end) : '';
  };
  // import ... from '...' and export ... from '...' (any number of lines in between, no ; or = in between)
  for (const m of code.matchAll(/\b(import|export)\b([^;='"`]*?)\bfrom\s*(['"])/g)) {
    if (m[1] === 'export' && !/[{*]/.test(m[2])) continue;
    const q = (m.index ?? 0) + m[0].length - 1;
    out.push({ line: lineAt(m.index ?? 0), spec: specAt(q), dynamic: false });
  }
  // bare import './x.ts'
  for (const m of code.matchAll(/\bimport\s*(['"])/g)) {
    const q = (m.index ?? 0) + m[0].length - 1;
    out.push({ line: lineAt(m.index ?? 0), spec: specAt(q), dynamic: false });
  }
  // import(...)
  for (const m of code.matchAll(/\bimport\s*\(/g))
    out.push({ line: lineAt(m.index ?? 0), spec: '', dynamic: true });
  return out;
}

/** Only TypeScript source files may live in src/sim (a .js file would escape the type and lint rules). */
export function checkSimFileName(fileName: string): Violation[] {
  return /\.ts$/.test(fileName) && !/\.d\.ts$/.test(fileName)
    ? []
    : [{ line: 1, message: 'only .ts source files are allowed in src/sim (no .js, .mjs, .json, .d.ts)' }];
}

export function checkSimSource(fileName: string, src: string): Violation[] {
  const v: Violation[] = [];
  const isFmath = /(^|\/)fmath\.ts$/.test(fileName);
  const code = stripCode(src);
  for (const imp of importsOf(src, code)) {
    if (imp.dynamic) {
      v.push({ line: imp.line, message: 'dynamic import() is not allowed in the simulation (asynchronous)' });
      continue;
    }
    if (isFmath)
      v.push({ line: imp.line, message: `fmath.ts must not import anything (found '${imp.spec}')` });
    else if (!/^\.\/[A-Za-z0-9_-]+\.ts$/.test(imp.spec))
      v.push({
        line: imp.line,
        message: `imports must be sibling files './name.ts' inside src/sim (found '${imp.spec}')`,
      });
  }
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
