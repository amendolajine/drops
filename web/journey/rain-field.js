import { PRIMARY_GLASS_ID, RAIN_GLASS_IDS, readAllGlass } from './glass.js';
import { createWaterSession, MAX_WATER_DROPS, restoreWaterSession } from './water-session.js';
import { createWaterView } from './water-view.js';

export const RAIN_FIELD_SCHEMA = 'journey-rain-field-1';
export const MAX_RAIN_DROPS = MAX_WATER_DROPS * RAIN_GLASS_IDS.length;
const geometryContract = (pane) => ({
  id: pane.id,
  widthMm: pane.widthMm,
  heightMm: pane.heightMm,
  corners: pane.corners.map((p) => p.toArray()),
  aperture: pane.aperture.map((p) => p.toArray()),
  u: pane.u.toArray(),
  down: pane.down.toArray(),
  inward: pane.inward.toArray(),
});
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// The six particle fields keep their own streams and advance whether visible or not.
// Deposition is a nominal per-surface input, not calibrated meteorological rainfall.
export function createRainSessions(panes, { primaryWater, waterOptions = {} } = {}) {
  if (panes.length !== RAIN_GLASS_IDS.length || panes.some((pane, i) => pane.id !== RAIN_GLASS_IDS[i]))
    throw Error('Rain needs all six authored panes');
  const primaryPane = panes.find((pane) => pane.id === PRIMARY_GLASS_ID),
    referenceArea = primaryPane.widthMm * primaryPane.heightMm,
    primaryOptions = primaryWater?.exportCheckpoint().options || {
      seed: 'trip-2026-11-02',
      ...waterOptions,
      widthMm: primaryPane.widthMm,
      heightMm: primaryPane.heightMm,
    };
  if (primaryWater && primaryWater.diagnostics().tick !== 0)
    throw Error('A running journey needs a complete six-pane checkpoint');
  if (primaryOptions.widthMm !== primaryPane.widthMm || primaryOptions.heightMm !== primaryPane.heightMm)
    throw Error('Primary rain geometry mismatch');
  const records = panes.map((pane) => {
    const ratio = (pane.widthMm * pane.heightMm) / referenceArea,
      options =
        pane.id === PRIMARY_GLASS_ID
          ? primaryOptions
          : {
              ...primaryOptions,
              seed: `${primaryOptions.seed}:${pane.id}`,
              widthMm: pane.widthMm,
              heightMm: pane.heightMm,
              initialCount: Math.round((primaryOptions.initialCount ?? 280) * ratio),
              rainRatePerS: (primaryOptions.rainRatePerS ?? 11.15) * ratio,
            };
    return {
      id: pane.id,
      pane,
      options,
      water: pane.id === PRIMARY_GLASS_ID && primaryWater ? primaryWater : createWaterSession(options),
    };
  });
  // Store fully expanded options, so restore cannot silently change any coefficient.
  for (const record of records) record.options = record.water.exportCheckpoint().options;
  const contracts = panes.map(geometryContract);
  let fault = null,
    commonTick = records[0].water.diagnostics().tick;
  function prepareRestore(saved) {
    if (
      !saved ||
      typeof saved !== 'object' ||
      Array.isArray(saved) ||
      !same(Object.keys(saved).sort(), ['panes', 'schema']) ||
      saved.schema !== RAIN_FIELD_SCHEMA ||
      !Array.isArray(saved.panes) ||
      saved.panes.length !== records.length
    )
      throw Error('Invalid rain field checkpoint');
    // Build candidates only. Nothing in the live field changes if the last pane fails.
    const candidate = saved.panes.map((entry, i) => {
      const record = records[i];
      if (
        !entry ||
        !same(Object.keys(entry).sort(), ['geometry', 'id', 'water']) ||
        entry.id !== record.id ||
        !same(entry.geometry, contracts[i]) ||
        !same(entry.water?.options, record.options)
      )
        throw Error(`Rain pane contract mismatch: ${record.id}`);
      return { id: entry.id, water: restoreWaterSession(entry.water) };
    });
    const tick = candidate[0].water.diagnostics().tick;
    if (candidate.some((entry) => entry.water.diagnostics().tick !== tick))
      throw Error('Rain pane clocks disagree');
    return candidate;
  }
  return {
    panes: records,
    primaryPane,
    get primaryWater() {
      return records.find((record) => record.id === PRIMARY_GLASS_ID).water;
    },
    advance(dt, { speed = 0, effective, rain = 0.65 } = {}) {
      if (fault) throw Error('Rain field is frozen after a failed step');
      if (
        !effective?.isVector3 ||
        !Number.isFinite(effective.x + effective.y + effective.z + speed + rain) ||
        speed < 0 ||
        rain < 0 ||
        rain > 1 ||
        Math.abs(dt - 1 / 60) > 1e-12
      )
        throw Error('Invalid rain field forcing');
      const inputs = records.map(({ pane }) => ({
        // Retain the existing side-pane air term. The inherited scalar term cannot
        // describe pressure normal to windshield/hatch, so no sideways air is invented.
        speed: speed * Math.sqrt(Math.max(0, pane.u.z)),
        gravityU: effective.dot(pane.u),
        gravityDown: effective.dot(pane.down),
        rain,
      }));
      if (inputs.some((input) => Math.abs(input.gravityU) > 30 || Math.abs(input.gravityDown) > 30))
        throw Error('Rain plane acceleration outside kernel limits');
      for (let i = 0; i < records.length; i++) {
        try {
          records[i].water.advance(dt, inputs[i]);
        } catch (error) {
          // A kernel can fail after taking part of its step. Do not invent an
          // atomic tick or export a mixed-clock journey. Recovery needs a prior
          // complete checkpoint; keep the failed state available for diagnosis.
          fault = {
            paneId: records[i].id,
            attemptedTick: commonTick + 1,
            message: String(error?.message || error),
            ticks: records.map((record) => ({ id: record.id, tick: record.water.diagnostics().tick })),
          };
          throw Error(`Rain field stopped at ${records[i].id}: ${fault.message}`);
        }
      }
      commonTick++;
    },
    exportCheckpoint() {
      if (fault) throw Error('Cannot save a rain field with an incomplete step');
      return {
        schema: RAIN_FIELD_SCHEMA,
        panes: records.map((record, i) => ({
          id: record.id,
          geometry: structuredClone(contracts[i]),
          water: record.water.exportCheckpoint(),
        })),
      };
    },
    prepareRestore,
    replace(candidate) {
      // Even programmatic callers must present a complete validated field.
      if (!Array.isArray(candidate) || candidate.length !== records.length)
        throw Error('Incomplete rain replacement');
      const checked = prepareRestore({
        schema: RAIN_FIELD_SCHEMA,
        panes: candidate.map((entry, i) => ({
          id: entry.id,
          geometry: contracts[i],
          water: entry.water.exportCheckpoint(),
        })),
      });
      for (let i = 0; i < records.length; i++) records[i].water = checked[i].water;
      commonTick = checked[0].water.diagnostics().tick;
      fault = null;
    },
    diagnostics() {
      const byPane = records.map(({ id, pane, water }) => ({
        id,
        glass: pane.diagnostics(),
        ...water.diagnostics(),
      }));
      return {
        schema: RAIN_FIELD_SCHEMA,
        paneCount: records.length,
        primaryId: PRIMARY_GLASS_ID,
        fault: fault ? structuredClone(fault) : null,
        live: byPane.reduce((sum, pane) => sum + pane.live, 0),
        capacity: byPane.reduce((sum, pane) => sum + pane.capacity, 0),
        maxCapacity: MAX_RAIN_DROPS,
        matrixBudgetBytes: MAX_RAIN_DROPS * 16 * 4,
        panes: byPane,
        assumptions:
          'Independent rectangular bilinear surface fields, clipped to actual apertures. Equal nominal deposition per mean pane area. Common acceleration projected on each pane. Inherited pinning/air coefficients, no calibrated exposure, wipers, wet film or edge transfer.',
      };
    },
  };
}

export function createRainField({ cabin, rig, backgroundTexture, primaryWater, waterOptions } = {}) {
  const field = createRainSessions(readAllGlass(cabin.group || cabin), { primaryWater, waterOptions }),
    views = field.panes.map((record) => createWaterView(rig, record.pane, backgroundTexture));
  for (let i = 0; i < views.length; i++) field.panes[i].view = views[i];
  return Object.assign(field, {
    update(tick) {
      for (let i = 0; i < views.length; i++) views[i].update(field.panes[i].water, tick);
    },
    setVisibility(visible) {
      for (const view of views) view.group.visible = Boolean(visible);
    },
    invalidate() {
      for (const view of views) view.invalidate();
    },
    viewState: () => views.map((view, i) => ({ id: field.panes[i].id, ...view.state() })),
    dispose() {
      for (const view of views) view.dispose();
    },
  });
}
