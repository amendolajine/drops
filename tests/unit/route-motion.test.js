import { describe, expect, it } from 'vitest';
import { ROUTE_MOTION, routeMotion } from '../../web/journey/route-motion.js';

const lengths = [25, 113.75, 1517.8];
const stopStart = (length) =>
  (length - ROUTE_MOTION.stoppingDistanceMetres) / ROUTE_MOTION.cruiseMetresPerSecond;

describe('journey route clock', () => {
  it('integrates acceleration into speed and speed into travelled distance', () => {
    for (const length of lengths) {
      const start = stopStart(length),
        dt = ROUTE_MOTION.stoppingSeconds / 2000;
      let previous = routeMotion(start, length),
        integratedSpeed = previous.speed,
        integratedDistance = previous.distance;
      for (let tick = 1; tick <= 2000; tick++) {
        const current = routeMotion(start + tick * dt, length);
        integratedSpeed += ((previous.acceleration + current.acceleration) / 2) * dt;
        integratedDistance += ((previous.speed + current.speed) / 2) * dt;
        expect(Math.abs(integratedSpeed - current.speed)).toBeLessThan(0.00001);
        expect(Math.abs(integratedDistance - current.distance)).toBeLessThan(0.00001);
        previous = current;
      }
      expect(integratedDistance).toBeCloseTo(length, 8);
      expect(integratedSpeed).toBeCloseTo(0, 5);
    }
  });

  it('advances monotonically on a 60 Hz clock and remains stopped without looping', () => {
    for (const length of lengths) {
      const duration = routeMotion(0, length).duration,
        arrivalTick = Math.ceil(duration * 60);
      let previous = 0;
      for (let tick = 0; tick <= arrivalTick + 120; tick++) {
        const motion = routeMotion(tick / 60, length);
        expect(motion.distance).toBeGreaterThanOrEqual(previous);
        expect(motion.distance).toBeLessThanOrEqual(length);
        expect(motion.speed).toBeGreaterThanOrEqual(0);
        expect(motion.speed).toBeLessThanOrEqual(ROUTE_MOTION.cruiseMetresPerSecond);
        previous = motion.distance;
      }
      for (const time of [arrivalTick / 60, duration + 10, duration + 86400]) {
        expect(routeMotion(time, length)).toMatchObject({
          distance: length,
          speed: 0,
          acceleration: 0,
          arrived: true,
          phase: 'stopped',
        });
      }
    }
  });

  it('joins cruise, braking and rest without a position, speed or acceleration jump', () => {
    for (const length of lengths) {
      expect(routeMotion(0, length)).toMatchObject({
        distance: 0,
        speed: ROUTE_MOTION.cruiseMetresPerSecond,
        acceleration: 0,
      });
      const start = stopStart(length),
        end = routeMotion(0, length).duration;
      expect(routeMotion(start, length).distance).toBeCloseTo(
        length - ROUTE_MOTION.stoppingDistanceMetres,
        10,
      );
      for (const boundary of [start, end]) {
        const before = routeMotion(Math.max(0, boundary - 0.000001), length),
          after = routeMotion(boundary + 0.000001, length);
        for (const key of ['distance', 'speed', 'acceleration'])
          expect(Math.abs(after[key] - before[key])).toBeLessThan(0.00002);
      }
    }
  });

  it('rejects invalid clocks and routes shorter than the stopping distance', () => {
    for (const time of [-1, NaN, Infinity, -Infinity])
      expect(() => routeMotion(time, 100)).toThrow('Invalid route motion input');
    for (const length of [-1, 0, 24.999, NaN, Infinity, -Infinity])
      expect(() => routeMotion(0, length)).toThrow('Invalid route motion input');
    expect(() => routeMotion(0, ROUTE_MOTION.stoppingDistanceMetres)).not.toThrow();
  });
});
