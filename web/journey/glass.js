import * as T from 'three';

// Read the actual authored glass, rather than stretching a differently sized simulation.
export function readRightGlass(cabin) {
  const mesh = cabin.getObjectByName('rear-quarter-glass-right');
  if (!mesh) throw Error('The right rear glass is missing');
  const p = mesh.geometry.getAttribute('position');
  mesh.updateMatrix();
  const point = (i) => new T.Vector3().fromBufferAttribute(p, i).applyMatrix4(mesh.matrix);
  const corners = mesh.userData.glassCorners?.map((p) => new T.Vector3(...p).applyMatrix4(mesh.matrix));
  const [a, b, c, d] = corners || [point(0), point(1), point(2), point(5)];
  const u = b.clone().sub(a).normalize(),
    up = d.clone().sub(a);
  up.addScaledVector(u, -up.dot(u)).normalize();
  const inward = new T.Vector3().crossVectors(u, up).normalize(),
    down = up.clone().negate();
  const width = (b.distanceTo(a) + c.distanceTo(d)) / 2,
    height = (d.clone().sub(a).dot(up) + c.clone().sub(b).dot(up)) / 2;
  if (inward.x >= 0 || width <= 0 || height <= 0) throw Error('Invalid right glass basis');
  const lower = new T.Vector3(),
    upper = new T.Vector3();
  return {
    corners: [a, b, c, d],
    u,
    up,
    down,
    inward,
    widthMm: width * 1000,
    heightMm: height * 1000,
    position(x, y, target) {
      const s = x / (width * 1000),
        v = 1 - y / (height * 1000);
      lower.copy(a).lerp(b, s);
      upper.copy(d).lerp(c, s);
      return target.copy(lower).lerp(upper, v).addScaledVector(inward, -0.0015);
    },
    diagnostics() {
      return {
        widthMm: width * 1000,
        heightMm: height * 1000,
        corners: [a, b, c, d].map((p) => p.toArray()),
        u: u.toArray(),
        down: down.toArray(),
        inward: inward.toArray(),
        model: 'Bilinear placement on the actual authored quarter glass; forces use its mean tangent plane.',
      };
    },
  };
}

export const PRIMARY_GLASS_ID = 'rear-quarter-glass-right';
export const RAIN_GLASS_IDS = Object.freeze([
  'front-door-glass-left',
  'front-door-glass-right',
  'rear-quarter-glass-left',
  PRIMARY_GLASS_ID,
  'windshield-glass',
  'rear-hatch-glass',
]);

// All coordinates remain in the cabin's local frame, shared by the vehicle rig.
// The established right-rear basis and bilinear placement above stay unchanged.
export function readAllGlass(cabin) {
  return RAIN_GLASS_IDS.map((id) => readGlass(cabin, id));
}

export function readGlass(cabin, id) {
  if (!RAIN_GLASS_IDS.includes(id)) throw Error('Unknown rain glass');
  const mesh = cabin.getObjectByName(id);
  if (!mesh?.userData.glassCorners || !mesh?.userData.aperture)
    throw Error(`The authored glass aperture is missing: ${id}`);
  cabin.updateWorldMatrix(true, false);
  mesh.updateWorldMatrix(true, false);
  const relative = cabin.matrixWorld.clone().invert().multiply(mesh.matrixWorld),
    read = (p) => new T.Vector3(...p).applyMatrix4(relative),
    aperture = mesh.userData.aperture.map(read),
    corners = mesh.userData.glassCorners.map(read);
  let pane;
  if (id === PRIMARY_GLASS_ID) pane = readRightGlass(cabin);
  else {
    const [a, b, c, d] = corners,
      u = b.clone().sub(a).normalize(),
      up = d.clone().sub(a);
    up.addScaledVector(u, -up.dot(u)).normalize();
    const inward = new T.Vector3().crossVectors(u, up).normalize(),
      centre = corners.reduce((sum, p) => sum.add(p), new T.Vector3()).multiplyScalar(0.25);
    // The point is inside the occupied cabin, independent of pane vertex winding.
    if (inward.dot(new T.Vector3(0, 1, 0.7).sub(centre)) < 0) inward.negate();
    const down = up.clone().negate(),
      width = (b.distanceTo(a) + c.distanceTo(d)) / 2,
      height = (d.clone().sub(a).dot(up) + c.clone().sub(b).dot(up)) / 2,
      lower = new T.Vector3(),
      upper = new T.Vector3();
    if (!(width > 0 && height > 0)) throw Error(`Invalid glass basis: ${id}`);
    pane = {
      corners,
      u,
      up,
      down,
      inward,
      widthMm: width * 1000,
      heightMm: height * 1000,
      position(x, y, target) {
        const s = x / (width * 1000),
          v = 1 - y / (height * 1000);
        lower.copy(a).lerp(b, s);
        upper.copy(d).lerp(c, s);
        return target.copy(lower).lerp(upper, v).addScaledVector(inward, -0.0015);
      },
      diagnostics() {
        return {
          widthMm: width * 1000,
          heightMm: height * 1000,
          corners: corners.map((p) => p.toArray()),
          u: u.toArray(),
          down: down.toArray(),
          inward: inward.toArray(),
          model: 'Bilinear placement on actual authored glass; forces use its mean tangent plane.',
        };
      },
    };
  }
  const origin = pane.corners[0],
    polygon = aperture.map((p) => {
      const q = p.clone().sub(origin);
      return new T.Vector2(q.dot(pane.u), q.dot(pane.up));
    });
  let twiceArea = 0;
  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i],
      b = polygon[(i + 1) % polygon.length];
    twiceArea += a.x * b.y - b.x * a.y;
  }
  if (polygon.length < 3 || polygon.length > 32 || Math.abs(twiceArea) < 1e-8)
    throw Error(`Invalid glass mask: ${id}`);
  const sign = Math.sign(twiceArea),
    edges = polygon.map((a, i) => {
      const b = polygon[(i + 1) % polygon.length],
        dx = b.x - a.x,
        dy = b.y - a.y,
        length = Math.hypot(dx, dy);
      if (length < 1e-8) throw Error(`Repeated glass mask point: ${id}`);
      return new T.Vector3(
        (-dy * sign) / length,
        (dx * sign) / length,
        ((dy * a.x - dx * a.y) * sign) / length,
      );
    });
  // Fail rather than silently clipping against a concave or nonplanar aperture.
  if (
    polygon.some((p) => edges.some((e) => e.x * p.x + e.y * p.y + e.z < -1e-7)) ||
    aperture.some((p) => Math.abs(p.clone().sub(origin).dot(pane.inward)) > 1e-6)
  )
    throw Error(`Unsupported glass aperture: ${id}`);
  pane.id = id;
  pane.aperture = aperture;
  pane.mask = { origin, polygon, edges };
  pane.areaM2 = Math.abs(twiceArea) / 2;
  pane.contains = (point, tolerance = 0) => {
    const q = point.clone().sub(origin),
      x = q.dot(pane.u),
      y = q.dot(pane.up);
    return edges.every((e) => e.x * x + e.y * y + e.z >= -tolerance);
  };
  const describe = pane.diagnostics;
  pane.diagnostics = () => ({
    ...describe(),
    id,
    aperture: aperture.map((p) => p.toArray()),
    apertureAreaM2: pane.areaM2,
    maskEdges: edges.length,
    simulationAreaM2: (pane.widthMm * pane.heightMm) / 1e6,
  });
  return pane;
}
