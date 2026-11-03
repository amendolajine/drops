const MAX_HISTORY = 16;
const EPSILON = 1e-9;

export const CAPTURE_MODES = Object.freeze({
  clear: Object.freeze({ fps: 0, shutter: 0, tape: false }),
  raw24: Object.freeze({ fps: 24, shutter: 0, tape: false }),
  shutter24: Object.freeze({ fps: 24, shutter: 1 / 48, tape: false, samples: 3 }),
  tape: Object.freeze({ fps: 0, shutter: 0, tape: true }),
});

function finite(value, name) {
  if (!Number.isFinite(value)) throw new TypeError(`${name} must be finite`);
}

export function createCaptureClock(initial = 'clear') {
  let mode;
  let history = [];
  let anchor = null;
  let slot = -1;
  let lastDueTime = null;
  let captures = 0;

  function reset() {
    history = [];
    anchor = null;
    slot = -1;
    lastDueTime = null;
    captures = 0;
  }

  function setMode(id) {
    if (!Object.hasOwn(CAPTURE_MODES, id)) throw new RangeError(`Unknown capture mode: ${id}`);
    mode = id;
    reset();
  }

  function observe(timeSeconds, yaw, pitch) {
    finite(timeSeconds, 'timeSeconds');
    finite(yaw, 'yaw');
    finite(pitch, 'pitch');
    const previous = history.at(-1);
    if (previous && timeSeconds < previous.time) reset();
    const point = { time: timeSeconds, yaw, pitch };
    if (history.at(-1)?.time === timeSeconds) history[history.length - 1] = point;
    else history.push(point);
    if (history.length > MAX_HISTORY) history.shift();
  }

  function due(timeSeconds) {
    finite(timeSeconds, 'timeSeconds');
    if (lastDueTime !== null && timeSeconds < lastDueTime) reset();
    lastDueTime = timeSeconds;
    const { fps } = CAPTURE_MODES[mode];
    if (!fps) {
      captures++;
      return true;
    }
    if (anchor === null) anchor = timeSeconds;
    const nextSlot = Math.floor((timeSeconds - anchor) * fps + EPSILON);
    if (nextSlot <= slot) return false;
    slot = nextSlot;
    captures++;
    return true;
  }

  function exposure(yaw, pitch) {
    finite(yaw, 'yaw');
    finite(pitch, 'pitch');
    const current = () => [{ yaw, pitch }];
    const { shutter, samples = 1 } = CAPTURE_MODES[mode];
    const last = history.at(-1);
    if (!shutter || history.length < 2) return current();
    const start = last.time - shutter;
    if (history[0].time > start + EPSILON) return current();

    function at(time) {
      if (time <= history[0].time) return { yaw: history[0].yaw, pitch: history[0].pitch };
      if (time >= last.time) return { yaw, pitch };
      for (let i = 1; i < history.length; i++) {
        const b = history[i];
        if (time > b.time) continue;
        const a = history[i - 1];
        const fraction = Math.max(0, Math.min(1, (time - a.time) / (b.time - a.time)));
        const bYaw = i === history.length - 1 ? yaw : b.yaw;
        const bPitch = i === history.length - 1 ? pitch : b.pitch;
        return { yaw: a.yaw + (bYaw - a.yaw) * fraction, pitch: a.pitch + (bPitch - a.pitch) * fraction };
      }
      return { yaw, pitch };
    }

    const result = Array.from({ length: samples }, (_, i) => at(start + (shutter * (i + 0.5)) / samples));
    const moved = result.some(
      (point) => Math.abs(point.yaw - yaw) > EPSILON || Math.abs(point.pitch - pitch) > EPSILON,
    );
    return moved ? result : current();
  }

  function state() {
    return {
      mode,
      ...CAPTURE_MODES[mode],
      samples: CAPTURE_MODES[mode].samples || 1,
      historySize: history.length,
      historyStart: history[0]?.time ?? null,
      historyEnd: history.at(-1)?.time ?? null,
      captures,
      anchor,
      slot,
    };
  }

  setMode(initial);
  return { setMode, reset, observe, due, exposure, state };
}
