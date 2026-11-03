export const ROUTE_MOTION = Object.freeze({
  id: 'coast-5mps-cosine-stop-25m-v1',
  cruiseMetresPerSecond: 5,
  stoppingDistanceMetres: 25,
  stoppingSeconds: 10,
});

// One analytic clock supplies position, wind speed and inertial acceleration.
// This is a calm authored trip, not recorded traffic or a vehicle dynamics model.
export function routeMotion(time, length) {
  if (!Number.isFinite(time) || time < 0 || !Number.isFinite(length) || length < 25)
    throw new Error('Invalid route motion input');
  const start = (length - ROUTE_MOTION.stoppingDistanceMetres) / ROUTE_MOTION.cruiseMetresPerSecond,
    duration = start + ROUTE_MOTION.stoppingSeconds;
  if (time >= duration)
    return { distance: length, speed: 0, acceleration: 0, arrived: true, phase: 'stopped', duration };
  if (time <= start)
    return {
      distance: time * 5,
      speed: 5,
      acceleration: 0,
      arrived: false,
      phase: 'cruising',
      duration,
    };
  const u = time - start,
    angle = (Math.PI * u) / 10;
  return {
    distance: length - 25 + 2.5 * (u + (10 / Math.PI) * Math.sin(angle)),
    speed: 2.5 * (1 + Math.cos(angle)),
    acceleration: (-Math.PI / 4) * Math.sin(angle),
    arrived: false,
    phase: 'stopping',
    duration,
  };
}
