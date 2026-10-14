// The one logger of drops. (the project rules file: levels, a [drops] prefix, no stray console.log.)
// Keeps the last lines in memory for the ?debug=1 overlay and window.__drops.

export type Level = 'debug' | 'info' | 'warn' | 'error';

const ORDER: Record<Level, number> = { debug: 0, info: 1, warn: 2, error: 3 };

export interface LogLine {
  /** milliseconds since the page started */
  ms: number;
  level: Level;
  scope: string;
  text: string;
}

export class Logger {
  private lines: LogLine[] = [];
  private threshold: Level;
  private readonly keep: number;
  private readonly t0: number;

  constructor(threshold: Level = 'info', keep = 200) {
    this.threshold = threshold;
    this.keep = keep;
    this.t0 = typeof performance !== 'undefined' ? performance.now() : 0;
  }

  setLevel(level: Level): void {
    this.threshold = level;
  }

  log(level: Level, scope: string, text: string): void {
    if (ORDER[level] < ORDER[this.threshold]) return;
    const ms = Math.round((typeof performance !== 'undefined' ? performance.now() : 0) - this.t0);
    this.lines.push({ ms, level, scope, text });
    if (this.lines.length > this.keep) this.lines.splice(0, this.lines.length - this.keep);
    const line = `[drops] ${scope}: ${text}`;
    // biome-ignore lint/suspicious/noConsole: this logger is the single place that writes to the console
    if (level === 'error') console.error(line);
    // biome-ignore lint/suspicious/noConsole: idem
    else if (level === 'warn') console.warn(line);
    // biome-ignore lint/suspicious/noConsole: idem
    else if (level === 'info') console.info(line);
    // biome-ignore lint/suspicious/noConsole: idem
    else console.debug(line);
  }

  debug(scope: string, text: string): void {
    this.log('debug', scope, text);
  }
  info(scope: string, text: string): void {
    this.log('info', scope, text);
  }
  warn(scope: string, text: string): void {
    this.log('warn', scope, text);
  }
  error(scope: string, text: string): void {
    this.log('error', scope, text);
  }

  /** The last n lines, oldest first (copies). */
  tail(n = 20): LogLine[] {
    return this.lines.slice(-n).map((l) => ({ ...l }));
  }
}

export const log = new Logger();
