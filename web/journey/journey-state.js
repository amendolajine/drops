import { CAPTURE_MODES } from './capture-clock.js';
import { restoreWaterSession, WATER_MODEL } from './water-session.js';

export const JOURNEY_SAVE_SCHEMA = 'drops-journey-state-1';
export const JOURNEY_SCENE_ID = 'panda29-route1-forcing1-2026-11-03';
const rounded = (n) => Math.round(n * 1e6) / 1e6;
export function sceneContract(pane, routeLength, eye, waterOptions) {
  return {
    id: JOURNEY_SCENE_ID,
    waterModel: WATER_MODEL,
    waterOptions: {
      ...waterOptions,
      widthMm: rounded(waterOptions.widthMm),
      heightMm: rounded(waterOptions.heightMm),
    },
    glass: {
      widthMm: rounded(pane.widthMm),
      heightMm: rounded(pane.heightMm),
      corners: pane.corners.map((p) => p.toArray().map(rounded)),
    },
    route: { id: 'fixed-neighbourhood-canal-fields-1', length: rounded(routeLength), metresPerSecond: 5 },
    eye: eye.toArray().map(rounded),
    features: ['water', 'gaze', 'lamp', 'fixed-weather'],
  };
}
function record(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function exactKeys(value, names, label) {
  if (
    !record(value) ||
    Object.keys(value).length !== names.length ||
    names.some((n) => !Object.hasOwn(value, n))
  )
    throw Error(`Incomplete ${label}`);
}
function finite(value, min, max, label) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max)
    throw Error(`Invalid ${label}`);
}
function angle(value, pitch, label) {
  finite(value, pitch ? -1.35 : -2.85, pitch ? 0.85 : 2.85, label);
}
export function validateJourneyCheckpoint(raw, expected) {
  exactKeys(
    raw,
    ['schema', 'scene', 'steps', 'view', 'weather', 'objects', 'captureMode', 'water'],
    'journey state',
  );
  if (raw.schema !== JOURNEY_SAVE_SCHEMA) throw Error('Unsupported journey save version');
  if (JSON.stringify(raw.scene) !== JSON.stringify(expected))
    throw Error('This save belongs to a different scene');
  if (!Number.isSafeInteger(raw.steps) || raw.steps < 0 || raw.steps > 60 * 60 * 24 * 365)
    throw Error('Invalid journey clock');
  if (!Object.hasOwn(CAPTURE_MODES, raw.captureMode)) throw Error('Unknown capture mode');
  if (!['overcast', 'fair'].includes(raw.weather)) throw Error('Unknown weather state');
  exactKeys(raw.objects, ['lampOn', 'diagnostic'], 'object state');
  if (typeof raw.objects.lampOn !== 'boolean' || typeof raw.objects.diagnostic !== 'boolean')
    throw Error('Invalid object state');
  exactKeys(raw.view, ['yaw', 'pitch', 'aimYaw', 'aimPitch', 'transition'], 'gaze state');
  for (const key of ['yaw', 'pitch', 'aimYaw', 'aimPitch'])
    angle(raw.view[key], key.toLowerCase().includes('pitch'), key);
  const t = raw.view.transition;
  if (t !== null) {
    exactKeys(t, ['fromYaw', 'fromPitch', 'toYaw', 'toPitch', 'elapsed', 'duration'], 'gaze transition');
    for (const key of ['fromYaw', 'fromPitch', 'toYaw', 'toPitch']) angle(t[key], key.includes('Pitch'), key);
    finite(t.duration, 0.3, 1.15, 'gaze transition duration');
    finite(t.elapsed, 0, t.duration, 'gaze transition time');
    if (t.toYaw !== raw.view.aimYaw || t.toPitch !== raw.view.aimPitch)
      throw Error('Gaze transition target mismatch');
    const u = t.elapsed / t.duration,
      s = u * u * (3 - 2 * u),
      y = t.fromYaw + (t.toYaw - t.fromYaw) * s,
      p = t.fromPitch + (t.toPitch - t.fromPitch) * s;
    if (Math.abs(y - raw.view.yaw) > 1e-9 || Math.abs(p - raw.view.pitch) > 1e-9)
      throw Error('Gaze transition pose mismatch');
  } else if (
    Math.abs(raw.view.aimYaw - raw.view.yaw) > 1e-9 ||
    Math.abs(raw.view.aimPitch - raw.view.pitch) > 1e-9
  )
    throw Error('Unfinished gaze target has no transition');
  if (
    !record(raw.water?.options) ||
    JSON.stringify({
      ...raw.water.options,
      widthMm: rounded(raw.water.options.widthMm),
      heightMm: rounded(raw.water.options.heightMm),
    }) !== JSON.stringify(expected.waterOptions)
  )
    throw Error('Water configuration differs from this journey');
  const water = restoreWaterSession(raw.water),
    d = water.diagnostics();
  if (d.tick !== raw.steps || Math.abs(d.time - raw.steps / 60) > Math.max(1e-8, d.time * 1e-8))
    throw Error('Journey and water clocks differ');
  if (
    Math.abs(d.widthMm - expected.glass.widthMm) > 1e-6 ||
    Math.abs(d.heightMm - expected.glass.heightMm) > 1e-6
  )
    throw Error('Water pane differs');
  if (d.fault) throw Error('The saved journey contains an unfinished water step');
  return { checkpoint: raw, water };
}
