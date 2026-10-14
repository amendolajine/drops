// Map 9.5 point 3: what must never be committed to this public repository. Pure functions, unit-tested.

// built from pieces so this file does not flag itself
const LOCAL_PATH = new RegExp(['', 'Users', ''].join('/'));
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g;
const ALLOWED_EMAIL = [/@users\.noreply\.github\.com$/i, /@example\.(com|org)$/i];

/** Problems in one text. Private names are reported by number only, never by their text. */
export function findPrivate(text: string, terms: readonly string[]): { line: number; what: string }[] {
  const out: { line: number; what: string }[] = [];
  const low = terms.map((t) => t.toLowerCase());
  text.split('\n').forEach((line, i) => {
    if (LOCAL_PATH.test(line)) out.push({ line: i + 1, what: 'local path' });
    for (const m of line.matchAll(EMAIL))
      if (!ALLOWED_EMAIL.some((r) => r.test(m[0]))) out.push({ line: i + 1, what: `email address ${m[0]}` });
    const l = line.toLowerCase();
    low.forEach((t, k) => {
      if (t && l.includes(t)) out.push({ line: i + 1, what: `private name #${k + 1}` });
    });
  });
  return out;
}
