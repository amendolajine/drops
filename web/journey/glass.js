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
