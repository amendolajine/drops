// Minimal dev page for the simulation (not deployed: Pages still publishes site/ only).
// Draws the glass and the drops as plain 2D shapes, plays a race at the fixed 60 Hz tick, takes picks and
// knocks from the mouse. ?seed=<n> replays a race, ?light=grey|sunset|storm, ?debug=1 shows the overlay.
// window.__drops exposes read-only state for Playwright and the console.

import { createRace, hashState, type RaceState, type Snapshot, snapshot, step } from '../sim/index.ts';
import type { KnockInput, StepInput } from '../sim/race.ts';
import { CR_LANDED, PHASE_DONE, PHASE_PICK, PHASE_RACING } from '../sim/state.ts';
import { log } from './log.ts';

const PX_PER_MM = 2; // map 3.1: the glass is a fixed 480x270 rectangle, 2 px per mm
const COLORS = {
  glass: '#2b3140',
  wet: 'rgba(120, 170, 255, ',
  dirt: 'rgba(150, 120, 80, 0.55)',
  smudge: 'rgba(150, 120, 80, 0.22)',
  sticker: '#59607a',
  ambient: 'rgba(190, 215, 255, 0.55)',
  candidate: '#e8ecf8',
  player: '#f3a833', // map 14.2: star colour
  rival: '#3859b3', // map 14.2: heart colour
  fly: '#111111',
  leaf: '#5d8a3a',
  paper: '#d9d4c3',
  finish: 'rgba(255, 255, 255, 0.35)',
};

const params = new URLSearchParams(location.search);
let seed = params.get('seed') ?? String(Math.floor(Math.random() * 1e6));
const light = (params.get('light') ?? 'grey') as 'grey' | 'sunset' | 'storm';
let debugOn = params.get('debug') === '1';

const canvas = document.getElementById('glass') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const hud = document.getElementById('hud') as HTMLDivElement;
const overlay = document.getElementById('overlay') as HTMLPreElement;

let race: RaceState;
let pending: KnockInput[] = [];
let lastLogTotal = 0;
let acc = 0;
let last = performance.now();
let fps = 0;
let frameMs = 0;
let snap: Snapshot;

function newRace(nextSeed: string): void {
  seed = nextSeed;
  const url = new URL(location.href);
  url.searchParams.set('seed', seed);
  history.replaceState(null, '', url);
  race = createRace(seed, { light });
  pending = [];
  lastLogTotal = 0;
  snap = snapshot(race);
  log.info('race', `new race: seed ${seed}, light ${light}, glass "${race.glass.kind}"`);
  pullSimLog();
}

function scale(): number {
  const maxW = Math.max(240, window.innerWidth - (debugOn ? 440 : 32));
  return Math.max(1, Math.floor(maxW / (race.p.W * PX_PER_MM)));
}

function resize(): void {
  const k = scale();
  canvas.width = race.p.W * PX_PER_MM * k;
  canvas.height = race.p.H * PX_PER_MM * k;
}

function toMm(ev: MouseEvent): [number, number] {
  const r = canvas.getBoundingClientRect();
  return [((ev.clientX - r.left) / r.width) * race.p.W, ((ev.clientY - r.top) / r.height) * race.p.H];
}

canvas.addEventListener('click', (ev) => {
  const [x, y] = toMm(ev);
  if (race.phase === PHASE_PICK) {
    // nearest candidate within a generous radius (R4 4.4: at least 12 CSS px)
    let best = -1;
    let bestD = 1e9;
    for (const c of snap.candidates) {
      const d = snap.drops.find((dr) => dr.id === c.dropId);
      if (!d) continue;
      const dist = Math.hypot(d.x - x, d.y - y);
      if (dist < bestD) {
        bestD = dist;
        best = c.index;
      }
    }
    if (best >= 0 && bestD < 8) {
      const input: StepInput = { picks: [{ who: 'player', cand: best }] };
      step(race, input);
      log.info('input', `pick drop ${best}`);
    }
  } else if (race.phase === PHASE_RACING) {
    pending.push({ who: 'player', x, y });
    log.info('input', `knock at ${x.toFixed(1)}, ${y.toFixed(1)} mm`);
  }
});

window.addEventListener('keydown', (ev) => {
  if (ev.key === 'r' || ev.key === 'R') newRace(seed);
  else if (ev.key === 'n' || ev.key === 'N') newRace(String(Math.floor(Math.random() * 1e6)));
  else if (ev.key === 'd' || ev.key === 'D') {
    debugOn = !debugOn;
    resize();
  }
});
window.addEventListener('resize', () => resize());

function pullSimLog(): void {
  const lines = snapshot(race, race.log.cap).log;
  const fresh = race.log.total - lastLogTotal;
  for (const l of lines.slice(Math.max(0, lines.length - fresh))) {
    log.info('sim', `${l.time >= 0 ? `${l.time.toFixed(2)} s` : 'pre'} ${l.text}`);
  }
  lastLogTotal = race.log.total;
}

function playbackSpeed(): number {
  const d = snap.director;
  if (snap.phase !== 'racing') return 1;
  if (d.slowMo && !snap.result.decided) return 0.3;
  if (d.fastForward) return 2.5;
  return 1;
}

function tick(now: number): void {
  const dtMs = now - last;
  last = now;
  frameMs = dtMs;
  fps = fps * 0.9 + (dtMs > 0 ? 1000 / dtMs : 0) * 0.1;
  if (race.phase === PHASE_RACING) {
    acc += (Math.min(dtMs, 100) / 1000) * playbackSpeed();
    let steps = 0;
    const dt = 1 / race.p.TICK_HZ;
    while (acc >= dt && steps < 5 && race.phase === PHASE_RACING) {
      const knocks = pending.length > 0 ? pending.splice(0, pending.length) : undefined;
      step(race, knocks ? { knocks } : undefined);
      acc -= dt;
      steps++;
    }
    if (steps === 5) acc = 0;
  }
  snap = snapshot(race);
  if (race.log.total !== lastLogTotal) pullSimLog();
  draw();
  requestAnimationFrame(tick);
}

function draw(): void {
  const k = scale();
  if (canvas.width !== race.p.W * PX_PER_MM * k) resize();
  const s = PX_PER_MM * k; // canvas px per mm
  const g = race.glass;
  ctx.fillStyle = COLORS.glass;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // wet trails
  for (let yi = 0; yi < g.wh; yi++) {
    for (let xi = 0; xi < g.ww; xi++) {
      const w = g.wet[yi * g.ww + xi];
      if (w < 0.05) continue;
      ctx.fillStyle = `${COLORS.wet}${(0.28 * w).toFixed(3)})`;
      ctx.fillRect(
        xi * race.p.WET_CELL * s,
        yi * race.p.WET_CELL * s,
        race.p.WET_CELL * s,
        race.p.WET_CELL * s,
      );
    }
  }
  // dirt: smudges, specks, sticker
  ctx.fillStyle = COLORS.smudge;
  for (let i = 0; i < g.smudges.length; i += 3) disc(g.smudges[i], g.smudges[i + 1], g.smudges[i + 2], s);
  ctx.fillStyle = COLORS.dirt;
  for (let i = 0; i < g.specks.length; i += 3) disc(g.specks[i], g.specks[i + 1], g.specks[i + 2], s);
  ctx.fillStyle = COLORS.sticker;
  for (const st of snap.stickers) disc(st.x, st.y, st.r, s);
  // finish line (rear seal)
  ctx.fillStyle = COLORS.finish;
  ctx.fillRect(race.p.FINISH_X * s, 0, Math.max(1, k), canvas.height);
  // drops
  for (const d of snap.drops) {
    if (d.kind === 'candidate') continue;
    ctx.fillStyle = COLORS.ambient;
    disc(d.x, d.y, d.radius, s);
  }
  ctx.font = `${10 * k}px ui-monospace, Menlo, monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const c of snap.candidates) {
    if (c.state !== 'racing') continue;
    const d = snap.drops.find((dr) => dr.id === c.dropId);
    if (!d) continue;
    ctx.fillStyle = COLORS.candidate;
    disc(d.x, d.y, d.radius, s);
    if (c.owner) {
      ctx.strokeStyle = c.owner === 'player' ? COLORS.player : COLORS.rival;
      ctx.lineWidth = 2 * k;
      ctx.beginPath();
      ctx.arc(d.x * s, d.y * s, (d.radius + 1.2) * s, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = '#12141c';
    ctx.fillText(String(c.index), d.x * s, d.y * s);
  }
  // creatures
  for (let i = 0; i < race.creatures.length; i++) {
    const cr = race.creatures[i];
    if (cr.state !== CR_LANDED) continue;
    ctx.fillStyle = cr.kind === 0 ? COLORS.fly : cr.kind === 1 ? COLORS.leaf : COLORS.paper;
    disc(cr.x, cr.y, cr.r, s);
  }
  drawHud();
  if (debugOn) drawOverlay();
  overlay.classList.toggle('on', debugOn);
}

function disc(x: number, y: number, r: number, s: number): void {
  ctx.beginPath();
  ctx.arc(x * s, y * s, Math.max(r * s, 1), 0, Math.PI * 2);
  ctx.fill();
}

function drawHud(): void {
  const r = snap.result;
  let text: string;
  if (snap.phase === 'pick') {
    text =
      snap.picks.rival >= 0
        ? `Your brother picked drop ${snap.picks.rival}. <b>Pick your drop</b> (click a numbered drop).`
        : '<b>Pick your drop</b> (click a numbered drop).';
  } else if (snap.phase === 'racing') {
    const k = snap.knocksLeft.player;
    text = `Racing: ${snap.raceTime.toFixed(1)} s, car ${snap.carKmh.toFixed(0)} km/h. Knocks left: ${k}${snap.knocksLocked ? ' (final straight: knocks locked)' : ''}.`;
    if (r.decided) text += ` ${resultLine(r.winner)}`;
  } else {
    text = `${resultLine(r.winner)} (${r.reason}${r.gap >= 0 ? `, gap ${r.gap.toFixed(2)} s` : ''}). Press R to replay, N for a new glass.`;
  }
  hud.innerHTML = text;
}

function resultLine(w: string | null): string {
  return w === 'player'
    ? '<b>You win!</b>'
    : w === 'rival'
      ? '<b>Your brother wins.</b>'
      : '<b>Nobody wins.</b>';
}

function drawOverlay(): void {
  const lines: string[] = [];
  lines.push(
    `fps ${fps.toFixed(0)}  frame ${frameMs.toFixed(1)} ms  seed ${seed}  light ${light}  sim v${snap.simVersion}`,
  );
  lines.push(
    `race clock ${snap.raceTime >= 0 ? snap.raceTime.toFixed(2) : '-'} s  tick ${snap.tick}  phase ${snap.phase}  car ${snap.carKmh.toFixed(1)} km/h`,
  );
  lines.push(
    `hash ${hashState(race)}  glass "${snap.glassKind}"  knocks you ${snap.knocksLeft.player} / brother ${snap.knocksLeft.rival}`,
  );
  const d = snap.director;
  lines.push(
    `director: ff ${d.fastForward} slow-mo ${d.slowMo} breath ${d.breath} predicted gap ${d.predictedGap.toFixed(2)} s, lead swaps ${d.leadSwaps}`,
  );
  lines.push('');
  lines.push('active events:');
  const active = snap.events.filter((e) => e.phase === 'warning' || e.phase === 'active');
  if (active.length === 0) lines.push('  none');
  for (const e of active)
    lines.push(`  ${e.type} (${e.phase}) ${e.startTime.toFixed(1)}-${e.endTime.toFixed(1)} s`);
  lines.push('');
  lines.push('last 20 log lines:');
  for (const l of log.tail(20))
    lines.push(`  ${(l.ms / 1000).toFixed(1).padStart(6)} ${l.level} ${l.scope}: ${l.text}`);
  lines.push('');
  lines.push(`drops (${snap.drops.length}): id  mass uL  speed mm/s  [cand]`);
  const ordered = [...snap.drops].sort(
    (a, b) => (b.cand >= 0 ? 1 : 0) - (a.cand >= 0 ? 1 : 0) || a.id - b.id,
  );
  for (const dr of ordered) {
    lines.push(
      `  #${String(dr.id).padStart(4)} ${dr.volume.toFixed(2).padStart(6)} ${dr.speed.toFixed(2).padStart(6)}${dr.cand >= 0 ? `  cand ${dr.cand}` : ''}${dr.moving ? '' : '  (stuck)'}`,
    );
  }
  overlay.textContent = lines.join('\n');
}

// read-only state for Playwright and the console (the project rules file)
const api = Object.freeze({
  get seed() {
    return seed;
  },
  get simVersion() {
    return snap.simVersion;
  },
  get phase() {
    return snap.phase;
  },
  snapshot: (): Snapshot => deepFreeze(structuredClone(snapshot(race, 20))),
  hash: (): string => hashState(race),
  log: (n = 20) => log.tail(n),
  get done() {
    return race.phase === PHASE_DONE;
  },
});

function deepFreeze<T>(o: T): T {
  if (o && typeof o === 'object') {
    for (const v of Object.values(o as Record<string, unknown>)) deepFreeze(v);
    Object.freeze(o);
  }
  return o;
}

declare global {
  interface Window {
    __drops: typeof api;
  }
}
Object.defineProperty(window, '__drops', { value: api, writable: false, configurable: false });

newRace(seed);
resize();
requestAnimationFrame(tick);
