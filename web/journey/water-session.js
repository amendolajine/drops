import { fnv1a, makeStream, next, valueNoise } from '../../src/sim/rng.ts';

// A neutral, volume-conserving particle model. Coefficients are inherited modelling
// assumptions, not calibrated car-glass measurements. No race director or tap force.
export const WATER_MODEL = 'journey-water-1';
export const WATER_CHECKPOINT_SCHEMA = 'journey-water-checkpoint-1';
export const MAX_WATER_DROPS = 65536;
const CAP = 0.785,
  CELL = 8,
  PIN = 70,
  DYNAMIC = 0.88,
  MOBILITY = 0.095,
  MAX_SPEED = 60;
const _clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const radius = (volume) => Math.cbrt(volume / CAP);

export function sweptContactTime(x, y, dx, dy, cx, cy, reach) {
  const ox = x - cx,
    oy = y - cy,
    c = ox * ox + oy * oy - reach * reach;
  if (c <= 0) return 0;
  const a = dx * dx + dy * dy;
  if (a === 0) return null;
  const b = 2 * (ox * dx + oy * dy),
    discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null;
  const t = (-b - Math.sqrt(discriminant)) / (2 * a);
  return t >= 0 && t <= 1 ? t : null;
}

export function assertWaterBalance(s) {
  const l = s.ledger;
  const expected = l.initialUL + l.rainUL;
  const measured = s.drops.reduce((sum, d) => sum + d.volume, 0);
  if (Math.abs(measured - l.liveUL) > Math.max(1e-7, expected * 1e-10))
    throw Error('Water live-particle accounting failed');
  const accounted = measured + l.runoffBottomUL + l.runoffRearUL + l.pendingUL;
  if (
    !Number.isFinite(expected + accounted) ||
    Math.abs(expected - accounted) > Math.max(1e-7, expected * 1e-10)
  )
    throw Error('Water volume balance failed');
  if (
    s.drops.some((d) => !Number.isFinite(d.x + d.y + d.volume + d.radius) || d.volume <= 0 || d.radius <= 0)
  )
    throw Error('Invalid water particle');
  return expected - accounted;
}

export function createWaterSession(options = {}) {
  return buildWaterSession(options);
}

export function restoreWaterSession(checkpoint) {
  const saved = validateWaterCheckpoint(checkpoint);
  return buildWaterSession(saved.options, saved.state);
}

function buildWaterSession(options = {}, restored = null) {
  const {
    seed = 'trip-water-1',
    widthMm = 700,
    heightMm = 525,
    initialCount = 280,
    initialCapacity = 4096,
    maxCapacity = MAX_WATER_DROPS,
    rainMinUL = 0.5,
    rainSpanUL = 18,
    rainRatePerS = 11.15,
  } = options;
  if (
    typeof seed !== 'string' ||
    !Number.isFinite(widthMm + heightMm + rainMinUL + rainSpanUL + rainRatePerS) ||
    widthMm < 20 ||
    heightMm < 20 ||
    !Number.isInteger(initialCount) ||
    initialCount < 0 ||
    !Number.isInteger(initialCapacity) ||
    initialCapacity < 1 ||
    !Number.isInteger(maxCapacity) ||
    maxCapacity < 1 ||
    maxCapacity > MAX_WATER_DROPS ||
    rainMinUL <= 0 ||
    rainSpanUL < 0 ||
    rainRatePerS < 0
  )
    throw Error('Invalid water model options');
  let capacity = Math.min(initialCapacity, maxCapacity),
    time = 0,
    tick = 0,
    nextId = 1,
    liveCount = 0,
    maxLive = 0,
    maxRadius = 0,
    liveUL = 0,
    movingCount = 0,
    merges = 0,
    impacts = 0,
    allocations = 0,
    forceKey = '',
    fault = null;
  const slots = [],
    free = [],
    cells = new Map(),
    events = [],
    pending = [];
  const initialStream = restored ? { ...restored.initialStream } : makeStream(seed, 'initial-water'),
    rainStream = restored ? { ...restored.rainStream } : makeStream(seed, 'rain-water'),
    pinSeed = fnv1a(`${seed}pin`);
  const ledger = { initialUL: 0, rainUL: 0, runoffBottomUL: 0, runoffRearUL: 0, pendingUL: 0 };
  let arrival = restored ? restored.arrival : -Math.log(1 - next(rainStream)),
    forces = restored ? { ...restored.forces } : { speed: 0, gravityU: 0, gravityDown: 9.81 };
  const key = (x, y) => Math.floor(y / CELL) * 100000 + Math.floor(x / CELL);
  function insert(d) {
    d.cell = key(d.x, d.y);
    if (!cells.has(d.cell)) cells.set(d.cell, new Set());
    cells.get(d.cell).add(d.slot);
  }
  function remove(d) {
    const cell = cells.get(d.cell);
    cell?.delete(d.slot);
    if (cell?.size === 0) cells.delete(d.cell);
  }
  function relocate(d) {
    const k = key(d.x, d.y);
    if (k !== d.cell) {
      remove(d);
      insert(d);
    }
  }
  function candidates(minX, minY, maxX, maxY) {
    const found = [];
    for (let y = Math.floor(minY / CELL); y <= Math.floor(maxY / CELL); y++)
      for (let x = Math.floor(minX / CELL); x <= Math.floor(maxX / CELL); x++) {
        const bucket = cells.get(y * 100000 + x);
        if (bucket) for (const index of bucket) found.push(slots[index]);
      }
    return found;
  }
  function record(event) {
    events.push({ tick, ...event });
    if (events.length > 128) events.shift();
  }
  function field(x, y) {
    return (
      1 +
      0.3 *
        (0.7 * (2 * valueNoise(x / 9, y / 9, pinSeed) - 1) +
          0.3 * (2 * valueNoise(x / 3.5, y / 3.5, pinSeed + 1) - 1))
    );
  }
  function velocity(d) {
    const a = d.radius,
      wind = 0.167 * (0.45 + 0.3 * (1 - d.y / heightMm)) * a * a * forces.speed * forces.speed;
    const fx = d.volume * forces.gravityU + wind,
      fy = d.volume * forces.gravityDown,
      f = Math.hypot(fx, fy),
      ux = f ? fx / f : 0,
      uy = f ? fy / f : 1;
    const pin =
      PIN *
      a *
      Math.max(
        field(d.x + ux * a, d.y + uy * a),
        field(d.x + (ux * 0.764842 - uy * 0.644218) * a, d.y + (ux * 0.644218 + uy * 0.764842) * a),
        field(d.x + (ux * 0.764842 + uy * 0.644218) * a, d.y + (-ux * 0.644218 + uy * 0.764842) * a),
      );
    const was = d.moving;
    d.moving = d.moving ? f >= DYNAMIC * pin : f > pin;
    const speed = d.moving ? Math.min(MAX_SPEED, Math.max(0, (MOBILITY * (f - DYNAMIC * pin)) / a)) : 0;
    d.vx = ux * speed;
    d.vy = uy * speed;
    if (was !== d.moving) movingCount += d.moving ? 1 : -1;
  }
  function retire(d) {
    remove(d);
    if (d.moving) movingCount--;
    d.alive = false;
    free.push(d.slot);
    liveCount--;
  }
  function mergeInto(a, b, contact = null) {
    // `b` may be a fresh impact without a slot. Every impact still receives an id.
    const va = a.volume,
      vb = b.volume,
      total = va + vb;
    const keepIncoming = vb > va || (vb === va && b.id < a.id),
      consumed = keepIncoming ? a.id : b.id,
      kept = keepIncoming ? b.id : a.id;
    remove(a);
    a.x = ((contact?.x ?? a.x) * va + b.x * vb) / total;
    a.y = ((contact?.y ?? a.y) * va + b.y * vb) / total;
    a.id = kept;
    a.volume = total;
    a.radius = radius(total);
    maxRadius = Math.max(maxRadius, a.radius);
    if (b.slot !== undefined) {
      retire(b);
    } else liveUL += vb;
    insert(a);
    velocity(a);
    merges++;
    record({ type: 'merge', kept, consumed, addedUL: vb });
    return a;
  }
  function deposit(x, y, volume, source) {
    const d = {
      id: nextId++,
      x,
      y,
      volume,
      radius: radius(volume),
      alive: true,
      moving: false,
      vx: 0,
      vy: 0,
      trail: [],
    };
    const reach = d.radius + maxRadius;
    const touching = candidates(x - reach, y - reach, x + reach, y + reach)
      .filter((o) => o.alive && Math.hypot(o.x - x, o.y - y) <= o.radius + d.radius)
      .sort((a, b) => a.id - b.id);
    if (touching.length) return mergeInto(touching[0], d);
    if (liveCount >= capacity && capacity < maxCapacity)
      capacity = Math.min(maxCapacity, Math.max(capacity * 2, liveCount + 1));
    if (liveCount >= capacity) {
      pending.push({ id: d.id, x, y, volume, source });
      ledger.pendingUL += volume;
      fault = 'The water particle memory limit was reached; pending water is retained.';
      record({ type: 'capacity-fault', id: d.id, volume });
      throw Error(fault);
    }
    d.slot = free.length ? free.pop() : slots.length;
    slots[d.slot] = d;
    insert(d);
    liveCount++;
    liveUL += volume;
    allocations++;
    maxLive = Math.max(maxLive, liveCount);
    maxRadius = Math.max(maxRadius, d.radius);
    velocity(d);
    return d;
  }
  function runoff(d) {
    const bottom = d.y >= heightMm - 0.5 * d.radius,
      rear = d.x >= widthMm;
    if (!bottom && !rear) return false;
    ledger[bottom ? 'runoffBottomUL' : 'runoffRearUL'] += d.volume;
    liveUL -= d.volume;
    record({ type: bottom ? 'bottom-runoff' : 'rear-runoff', id: d.id, volume: d.volume });
    retire(d);
    return true;
  }
  function coalesce(d) {
    if (!d.alive) return;
    // The search covers the largest actual radius, rather than just adjacent cells.
    for (;;) {
      const reach = d.radius + maxRadius;
      const other = candidates(d.x - reach, d.y - reach, d.x + reach, d.y + reach)
        .filter((o) => o.alive && o !== d && Math.hypot(o.x - d.x, o.y - d.y) <= o.radius + d.radius)
        .sort((a, b) => a.id - b.id)[0];
      if (!other) break;
      mergeInto(d, other);
    }
  }
  if (restored) {
    ({
      capacity,
      time,
      tick,
      nextId,
      liveCount,
      maxLive,
      maxRadius,
      liveUL,
      movingCount,
      merges,
      impacts,
      allocations,
      forceKey,
      fault,
    } = restored);
    Object.assign(ledger, restored.ledger);
    for (const d of restored.slots) slots.push(d);
    for (const slot of restored.free) free.push(slot);
    events.push(...restored.events);
    pending.push(...restored.pending);
    for (const [cell, indices] of restored.cells) cells.set(cell, new Set(indices));
  } else
    for (let k = 0; k < initialCount; k++) {
      const u = next(initialStream),
        v = k < 22 ? 14 + next(initialStream) * 38 : 0.2 + 12 * u * u * u;
      const x = 8 + next(initialStream) * (widthMm - 16),
        y = 6 + next(initialStream) * (heightMm - 12);
      ledger.initialUL += v;
      const d = deposit(x, y, v, 'initial');
      coalesce(d);
      runoff(d);
    }
  function advance(dt, input = {}) {
    if (fault) throw Error(fault);
    if (!Number.isFinite(dt) || Math.abs(dt - 1 / 60) > 1e-12)
      throw Error('Water needs a fixed 1/60-second step');
    const { speed = 0, gravityU = 0, gravityDown = 9.81, rain = 0.65 } = input;
    if (
      !Number.isFinite(speed + gravityU + gravityDown + rain) ||
      speed < 0 ||
      rain < 0 ||
      rain > 1 ||
      Math.abs(gravityU) > 30 ||
      Math.abs(gravityDown) > 30
    )
      throw Error('Invalid water forcing');
    time += dt;
    tick++;
    forces = { speed, gravityU, gravityDown };
    const fk = [speed, gravityU, gravityDown].join(',');
    if (fk !== forceKey) {
      for (const d of slots) if (d?.alive) velocity(d);
      forceKey = fk;
    }
    arrival -= rainRatePerS * (rain / 0.65) * dt;
    while (arrival <= 0) {
      const x = next(rainStream) * widthMm,
        u = next(rainStream),
        volume = rainMinUL + rainSpanUL * u * u * u;
      const r = radius(volume),
        y = r + next(rainStream) * (heightMm - 2 * r);
      ledger.rainUL += volume;
      impacts++;
      const d = deposit(x, y, volume, 'rain');
      coalesce(d);
      runoff(d);
      arrival += -Math.log(1 - next(rainStream));
    }
    // The moving list is frozen for this tick so recycled slots cannot move twice.
    const movers = slots.filter((d) => d?.alive && d.moving);
    for (const d of movers) {
      if (!d.alive || !d.moving) continue;
      velocity(d);
      if (!d.moving) continue;
      const ox = d.x,
        oy = d.y,
        nx = Math.max(d.radius, ox + d.vx * dt),
        ny = Math.max(d.radius, oy + d.vy * dt),
        dx = nx - ox,
        dy = ny - oy,
        _length2 = dx * dx + dy * dy,
        reach = d.radius + maxRadius;
      // Swept contact stops fast droplets tunnelling through small pinned droplets.
      const contacts = candidates(
        Math.min(ox, nx) - reach,
        Math.min(oy, ny) - reach,
        Math.max(ox, nx) + reach,
        Math.max(oy, ny) + reach,
      )
        .filter((o) => o.alive && o !== d)
        .map((o) => ({ o, t: sweptContactTime(ox, oy, dx, dy, o.x, o.y, d.radius + o.radius) }))
        .filter((c) => c.t !== null)
        .map((c) => ({ ...c, x: ox + dx * c.t, y: oy + dy * c.t }))
        .sort((a, b) => a.t - b.t || a.o.id - b.o.id);
      if (contacts.length) {
        const c = contacts[0];
        d.x = c.x;
        d.y = c.y;
        relocate(d);
        mergeInto(d, c.o);
        coalesce(d);
      } else {
        d.x = nx;
        d.y = ny;
        relocate(d);
      }
      if (runoff(d)) continue;
      const last = d.trail.at(-1);
      if (!last || Math.hypot(last.x - d.x, last.y - d.y) > 1.3) {
        d.trail.push({ x: d.x, y: d.y });
        if (d.trail.length > 8) d.trail.shift();
      }
    }
  }
  function snapshot() {
    const drops = slots
      .filter((d) => d?.alive)
      .map((d) => ({
        id: d.id,
        x: d.x,
        y: d.y,
        u: d.x / widthMm,
        v: d.y / heightMm,
        volume: d.volume,
        radius: d.radius / 1000,
        moving: d.moving,
        vx: d.vx,
        vy: d.vy,
        trail: d.trail.map((p) => ({ ...p, u: p.x / widthMm, v: p.y / heightMm })),
      }));
    return {
      time,
      tick,
      widthMm,
      heightMm,
      drops,
      ledger: { ...ledger, liveUL },
      pending: pending.map((p) => ({ ...p })),
      events: events.map((e) => ({ ...e })),
      fault,
    };
  }
  function signature() {
    let hash = 2166136261;
    for (const d of slots)
      if (d?.alive)
        for (const n of [d.id, d.x, d.y, d.volume]) hash = Math.imul(hash ^ Math.round(n * 1e5), 16777619);
    return (hash >>> 0).toString(16);
  }
  function diagnostics() {
    return {
      model: WATER_MODEL,
      time,
      tick,
      widthMm,
      heightMm,
      live: liveCount,
      moving: movingCount,
      impacts,
      allocations,
      merges,
      capacity,
      maxCapacity,
      maxLive,
      signature: signature(),
      ledger: { ...ledger, liveUL },
      rain: {
        rainMinUL,
        rainSpanUL,
        rainRatePerS,
        meanVolumeUL: rainMinUL + rainSpanUL / 4,
        projectedDepositMmPerHour:
          (rainRatePerS * (rainMinUL + rainSpanUL / 4) * 3600) / (widthMm * heightMm),
      },
      fault,
      notes:
        'Explicit particles; contact-only coalescence; no evaporation, shedding, wet-film signal, race forces or calibrated aerodynamics.',
    };
  }
  function exportCheckpoint() {
    const saved = {
      schema: WATER_CHECKPOINT_SCHEMA,
      model: WATER_MODEL,
      options: {
        seed,
        widthMm,
        heightMm,
        initialCount,
        initialCapacity,
        maxCapacity,
        rainMinUL,
        rainSpanUL,
        rainRatePerS,
      },
      state: {
        capacity,
        time,
        tick,
        nextId,
        liveCount,
        maxLive,
        maxRadius,
        liveUL,
        movingCount,
        merges,
        impacts,
        allocations,
        forceKey,
        fault,
        arrival,
        initialStream: { ...initialStream },
        rainStream: { ...rainStream },
        forces: { ...forces },
        ledger: { ...ledger },
        slots: slots.map((d) => ({ ...d, trail: d.trail.map((p) => ({ ...p })) })),
        free: [...free],
        cells: [...cells].map(([cell, indices]) => [cell, [...indices]]),
        events: events.map((e) => ({ ...e })),
        pending: pending.map((p) => ({ ...p })),
      },
    };
    // JSON writes -0 as 0. Preserve that IEEE-754 distinction without changing any
    // particle arithmetic or asking callers to use a custom stringify replacer.
    const negativeZeros = [];
    function findZeros(value, path) {
      if (typeof value === 'number') {
        if (Object.is(value, -0)) negativeZeros.push(path);
        return;
      }
      if (value && typeof value === 'object')
        for (const [k, v] of Object.entries(value)) findZeros(v, path ? `${path}.${k}` : k);
    }
    findZeros(saved, '');
    saved.negativeZeros = negativeZeros;
    return saved;
  }
  return {
    advance,
    snapshot,
    signature,
    diagnostics,
    exportCheckpoint,
    forEachDrop(visit) {
      for (const d of slots) if (d?.alive) visit(d.id, d.x, d.y, d.radius, d.volume, d.moving, d.vx, d.vy);
    },
    // Explicit deposits also support independent contact/capacity fixtures. They are not player input.
    depositForTest(x, y, volume) {
      if (fault) throw Error(fault);
      if (!Number.isFinite(x + y + volume) || x < 0 || x > widthMm || y < 0 || y > heightMm || volume <= 0)
        throw Error('Invalid test deposit');
      ledger.rainUL += volume;
      const d = deposit(x, y, volume, 'fixture');
      coalesce(d);
      runoff(d);
      return snapshot();
    },
  };
}

// Saved data is untrusted. Limits bound parsing/reconstruction and are deliberately
// wider than the journey's production settings. They do not calibrate the physics.
function validateWaterCheckpoint(saved) {
  const fail = (message) => {
    throw Error(`Invalid water checkpoint: ${message}`);
  };
  const object = (v, keys, label) => {
    if (
      !v ||
      typeof v !== 'object' ||
      Array.isArray(v) ||
      ![Object.prototype, null].includes(Object.getPrototypeOf(v))
    )
      fail(label);
    const actual = Object.keys(v);
    if (actual.length !== keys.length || actual.some((k) => !keys.includes(k))) fail(`${label} fields`);
  };
  const number = (v, min, max, label) => {
    if (typeof v !== 'number' || !Number.isFinite(v) || v < min || v > max) fail(label);
  };
  const integer = (v, min, max, label) => {
    number(v, min, max, label);
    if (!Number.isSafeInteger(v)) fail(label);
  };
  const array = (v, max, label) => {
    if (!Array.isArray(v) || v.length > max) fail(label);
  };
  const close = (a, b) => Math.abs(a - b) <= Math.max(1e-7, Math.max(Math.abs(a), Math.abs(b)) * 1e-10);
  const ledgerKeys = ['initialUL', 'rainUL', 'runoffBottomUL', 'runoffRearUL', 'pendingUL'];
  const optionKeys = [
    'seed',
    'widthMm',
    'heightMm',
    'initialCount',
    'initialCapacity',
    'maxCapacity',
    'rainMinUL',
    'rainSpanUL',
    'rainRatePerS',
  ];
  const stateKeys = [
    'capacity',
    'time',
    'tick',
    'nextId',
    'liveCount',
    'maxLive',
    'maxRadius',
    'liveUL',
    'movingCount',
    'merges',
    'impacts',
    'allocations',
    'forceKey',
    'fault',
    'arrival',
    'initialStream',
    'rainStream',
    'forces',
    'ledger',
    'slots',
    'free',
    'cells',
    'events',
    'pending',
  ];
  object(saved, ['schema', 'model', 'options', 'state', 'negativeZeros'], 'root');
  if (saved.schema !== WATER_CHECKPOINT_SCHEMA || saved.model !== WATER_MODEL) fail('schema or model');
  const o = saved.options,
    s = saved.state;
  object(o, optionKeys, 'options');
  object(s, stateKeys, 'state');
  if (typeof o.seed !== 'string' || o.seed.length > 256) fail('seed');
  for (const k of ['widthMm', 'heightMm']) number(o[k], 20, 5000, k);
  integer(o.initialCount, 0, MAX_WATER_DROPS, 'initialCount');
  integer(o.initialCapacity, 1, MAX_WATER_DROPS, 'initialCapacity');
  integer(o.maxCapacity, 1, MAX_WATER_DROPS, 'maxCapacity');
  number(o.rainMinUL, Number.MIN_VALUE, 1000, 'rainMinUL');
  number(o.rainSpanUL, 0, 1000 - o.rainMinUL, 'rainSpanUL');
  number(o.rainRatePerS, 0, 1000, 'rainRatePerS');
  integer(s.capacity, 1, o.maxCapacity, 'capacity');
  if (s.capacity < Math.min(o.initialCapacity, o.maxCapacity)) fail('capacity below initial');
  integer(s.tick, 0, 2147483647, 'tick');
  number(s.time, 0, 36000000, 'time');
  if (Math.abs(s.time - s.tick / 60) > Math.max(1e-7, s.time * 1e-7)) fail('time/tick');
  integer(s.nextId, 1, 1e10, 'nextId');
  for (const k of ['liveCount', 'maxLive', 'movingCount']) integer(s[k], 0, s.capacity, k);
  for (const k of ['merges', 'impacts', 'allocations']) integer(s[k], 0, 1e10, k);
  number(s.maxRadius, 0, 1000, 'maxRadius');
  number(s.liveUL, 0, 1e12, 'liveUL');
  if (
    s.fault !== null &&
    s.fault !== 'The water particle memory limit was reached; pending water is retained.'
  )
    fail('fault');
  number(s.arrival, s.fault ? -1000 : 0, 10000, 'arrival');
  for (const name of ['initialStream', 'rainStream']) {
    object(s[name], ['a', 'b', 'c', 'd'], name);
    for (const v of Object.values(s[name])) integer(v, -2147483648, 2147483647, name);
  }
  object(s.forces, ['speed', 'gravityU', 'gravityDown'], 'forces');
  number(s.forces.speed, 0, 1000, 'speed');
  number(s.forces.gravityU, -30, 30, 'gravityU');
  number(s.forces.gravityDown, -30, 30, 'gravityDown');
  const fk = [s.forces.speed, s.forces.gravityU, s.forces.gravityDown].join(',');
  if (s.forceKey !== fk && !(s.tick === 0 && s.forceKey === '' && fk === '0,0,9.81')) fail('forceKey');
  object(s.ledger, ledgerKeys, 'ledger');
  for (const k of ledgerKeys) number(s.ledger[k], 0, 1e12, `ledger ${k}`);
  array(s.slots, s.capacity, 'slots');
  array(s.free, s.capacity, 'free');
  array(s.cells, s.capacity, 'cells');
  array(s.events, 128, 'events');
  array(s.pending, 1, 'pending');
  const ids = new Set(),
    free = new Set(),
    indexed = new Set(),
    cellKeys = new Set();
  let live = 0,
    moving = 0,
    liveUL = 0,
    pendingUL = 0,
    largest = 0;
  const id = (v, label) => integer(v, 1, s.nextId - 1, label);
  const point = (v, label) => {
    object(v, ['x', 'y'], label);
    number(v.x, -10000, 10000, `${label} x`);
    number(v.y, -10000, 10000, `${label} y`);
  };
  const cellKey = (x, y) => Math.floor(y / CELL) * 100000 + Math.floor(x / CELL);
  for (let i = 0; i < s.slots.length; i++) {
    const d = s.slots[i];
    object(
      d,
      ['id', 'x', 'y', 'volume', 'radius', 'alive', 'moving', 'vx', 'vy', 'trail', 'slot', 'cell'],
      'particle',
    );
    id(d.id, 'particle id');
    integer(d.slot, i, i, 'particle slot');
    integer(d.cell, -125001250, 125001250, 'particle cell');
    number(d.x, -10000, 10000, 'particle x');
    number(d.y, -10000, 10000, 'particle y');
    number(d.volume, Number.MIN_VALUE, 7.85e8, 'particle volume');
    number(d.radius, Number.MIN_VALUE, 1000, 'particle radius');
    number(d.vx, -MAX_SPEED, MAX_SPEED, 'vx');
    number(d.vy, -MAX_SPEED, MAX_SPEED, 'vy');
    if (
      typeof d.alive !== 'boolean' ||
      typeof d.moving !== 'boolean' ||
      d.cell !== cellKey(d.x, d.y) ||
      !close(d.radius, radius(d.volume))
    )
      fail('particle shape');
    array(d.trail, 8, 'trail');
    for (const p of d.trail) point(p, 'trail point');
    largest = Math.max(largest, d.radius);
    if (d.alive) {
      if (ids.has(d.id)) fail('duplicate live id');
      ids.add(d.id);
      live++;
      moving += Number(d.moving);
      liveUL += d.volume;
    }
  }
  for (const slot of s.free) {
    integer(slot, 0, s.slots.length - 1, 'free slot');
    if (free.has(slot) || s.slots[slot].alive) fail('free list');
    free.add(slot);
  }
  if (
    free.size + s.liveCount !== s.slots.length ||
    live !== s.liveCount ||
    moving !== s.movingCount ||
    s.maxLive < s.slots.length ||
    s.allocations < s.maxLive ||
    s.maxRadius < largest ||
    !close(liveUL, s.liveUL)
  )
    fail('particle counters');
  for (const entry of s.cells) {
    if (!Array.isArray(entry) || entry.length !== 2) fail('cell entry');
    const [cell, indices] = entry;
    integer(cell, -125001250, 125001250, 'cell key');
    if (cellKeys.has(cell)) fail('duplicate cell');
    cellKeys.add(cell);
    array(indices, s.capacity, 'cell indices');
    if (indices.length === 0) fail('empty cell');
    for (const slot of indices) {
      integer(slot, 0, s.slots.length - 1, 'cell slot');
      if (indexed.has(slot) || !s.slots[slot].alive || s.slots[slot].cell !== cell) fail('cell membership');
      indexed.add(slot);
    }
  }
  if (indexed.size !== live) fail('missing cell');
  for (const p of s.pending) {
    object(p, ['id', 'x', 'y', 'volume', 'source'], 'pending');
    id(p.id, 'pending id');
    if (ids.has(p.id)) fail('duplicate pending id');
    ids.add(p.id);
    number(p.x, 0, o.widthMm, 'pending x');
    number(p.y, -10000, 10000, 'pending y');
    number(p.volume, Number.MIN_VALUE, 1000, 'pending volume');
    if (!['initial', 'rain', 'fixture'].includes(p.source)) fail('pending source');
    pendingUL += p.volume;
  }
  if (
    Boolean(s.fault) !== Boolean(s.pending.length) ||
    !close(pendingUL, s.ledger.pendingUL) ||
    (s.fault && s.liveCount !== s.capacity)
  )
    fail('pending fault');
  const expected = s.ledger.initialUL + s.ledger.rainUL,
    accounted = liveUL + s.ledger.runoffBottomUL + s.ledger.runoffRearUL + pendingUL;
  if (!close(expected, accounted)) fail('volume balance');
  let previousTick = 0;
  for (const e of s.events) {
    if (!e || typeof e !== 'object') fail('event');
    integer(e.tick, previousTick, s.tick, 'event tick');
    previousTick = e.tick;
    if (e.type === 'merge') {
      object(e, ['tick', 'type', 'kept', 'consumed', 'addedUL'], 'merge event');
      id(e.kept, 'kept id');
      id(e.consumed, 'consumed id');
      if (e.kept === e.consumed) fail('merge ids');
      number(e.addedUL, Number.MIN_VALUE, 7.85e8, 'merge volume');
    } else if (['bottom-runoff', 'rear-runoff', 'capacity-fault'].includes(e.type)) {
      object(e, ['tick', 'type', 'id', 'volume'], 'volume event');
      id(e.id, 'event id');
      number(e.volume, Number.MIN_VALUE, 7.85e8, 'event volume');
    } else fail('event type');
  }
  if (s.fault) {
    const e = s.events.at(-1),
      p = s.pending[0];
    if (e?.type !== 'capacity-fault' || e.id !== p.id || e.volume !== p.volume) fail('fault event');
  }
  array(saved.negativeZeros, MAX_WATER_DROPS * 12 + 64, 'negative zero paths');
  const zeroPaths = new Set();
  for (const path of saved.negativeZeros) {
    if (typeof path !== 'string' || path.length > 96 || zeroPaths.has(path)) fail('negative zero path');
    zeroPaths.add(path);
    const parts = path.split('.');
    if (parts.length < 2 || parts.length > 8 || !['options', 'state'].includes(parts[0]))
      fail('negative zero path');
    let value = saved;
    for (const part of parts) {
      if (!value || typeof value !== 'object' || !Object.hasOwn(value, part)) fail('negative zero target');
      value = value[part];
    }
    if (typeof value !== 'number' || value !== 0) fail('negative zero value');
  }
  // Copy only after all lengths, fields and arithmetic have been bounded/checked.
  const detached = JSON.parse(JSON.stringify(saved));
  for (const path of saved.negativeZeros) {
    const parts = path.split('.');
    let parent = detached;
    for (const part of parts.slice(0, -1)) parent = parent[part];
    parent[parts.at(-1)] = -0;
  }
  return detached;
}
