import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createPandaFurniture } from './panda-furnishings.js';
import { PANDA } from './panda-layout.js';
import { createPandaMaterials } from './panda-materials.js';
import { createReadingLight } from './reading-light.js';

export const CABIN = Object.freeze({
  innerWidth: PANDA.cabin.innerWidth,
  seatWidth: PANDA.cabin.frontSeatWidth,
  seatCenters: PANDA.cabin.frontSeatCenters,
  eye: PANDA.eye,
  floor: PANDA.cabin.floor,
  roof: PANDA.cabin.roof,
  rearSeatTop: PANDA.cabin.rearSeatTop,
  benchRiserTop: 0.44,
  doors: 3,
  reference: PANDA.referenceScope,
});
const V = (p) => new T.Vector3(...p);

export function createPandaCabin() {
  const group = new T.Group();
  group.name = 'panda-1988-reconstruction';
  group.userData.panda = true;
  const library = createPandaMaterials(),
    m = library.m,
    geometries = new Set(),
    interactables = [];
  const eye = V(PANDA.eye),
    up = new T.Vector3(0, 1, 0);
  function mesh(geometry, material, position = [0, 0, 0], parent = group, name = '') {
    geometries.add(geometry);
    const o = new T.Mesh(geometry, material);
    o.position.fromArray(position);
    o.name = name;
    o.castShadow = o.receiveShadow = !material.transparent;
    parent.add(o);
    return o;
  }
  function box(size, position, material, parent = group, radius = 0.008, name = '') {
    return mesh(
      new RoundedBoxGeometry(...size, 2, Math.min(radius, ...size.map((v) => v * 0.4))),
      material,
      position,
      parent,
      name,
    );
  }
  function rod(a, b, radius, material, parent = group, r2 = radius, name = '') {
    const d = V(b).sub(V(a)),
      o = mesh(
        new T.CylinderGeometry(r2, radius, d.length(), 8),
        material,
        V(a).add(V(b)).multiplyScalar(0.5).toArray(),
        parent,
        name,
      );
    o.quaternion.setFromUnitVectors(up, d.normalize());
    return o;
  }
  function panel(points, material, parent = group, name = '') {
    const a = [],
      uv = [];
    for (let i = 1; i < points.length - 1; i++)
      for (const p of [points[0], points[i], points[i + 1]]) {
        a.push(...p);
        uv.push(p[0], p[1]);
      }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(a, 3));
    g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return mesh(g, material, [0, 0, 0], parent, name);
  }
  function round(points, radius = 0.025, steps = 4) {
    const out = [];
    for (let i = 0; i < points.length; i++) {
      const p = new T.Vector2(...points[i]),
        before = new T.Vector2(...points[(i + points.length - 1) % points.length]),
        after = new T.Vector2(...points[(i + 1) % points.length]);
      const n = Math.min(radius, p.distanceTo(before) * 0.22, p.distanceTo(after) * 0.22),
        a = p.clone().add(before.sub(p).normalize().multiplyScalar(n)),
        b = p.clone().add(after.sub(p).normalize().multiplyScalar(n));
      for (let j = 0; j <= steps; j++) {
        const t = j / steps;
        out.push(
          a
            .clone()
            .multiplyScalar((1 - t) * (1 - t))
            .add(p.clone().multiplyScalar(2 * t * (1 - t)))
            .add(b.clone().multiplyScalar(t * t)),
        );
      }
    }
    return out;
  }
  function orientClosed(g) {
    const p = g.attributes.position;
    let volume = 0;
    for (let i = 0; i < p.count; i += 3)
      volume +=
        new T.Vector3()
          .fromBufferAttribute(p, i)
          .dot(
            new T.Vector3()
              .fromBufferAttribute(p, i + 1)
              .cross(new T.Vector3().fromBufferAttribute(p, i + 2)),
          ) / 6;
    if (volume < 0)
      for (const a of Object.values(g.attributes))
        for (let i = 0; i < a.count; i += 3)
          for (let c = 0; c < a.itemSize; c++) {
            const j = (i + 1) * a.itemSize + c,
              k = (i + 2) * a.itemSize + c,
              v = a.array[j];
            a.array[j] = a.array[k];
            a.array[k] = v;
          }
    g.computeVertexNormals();
    g.computeBoundingBox();
    g.computeBoundingSphere();
    return g;
  }
  function sheet(name, outline, holes, map, outward, material = m.paint, thickness = 0.023) {
    const shape = new T.Shape(outline);
    for (const points of holes) {
      const p =
        T.ShapeUtils.isClockWise(points) === T.ShapeUtils.isClockWise(outline)
          ? points.slice().reverse()
          : points;
      shape.holes.push(new T.Path(p));
    }
    const g = new T.ExtrudeGeometry(shape, {
        depth: thickness,
        steps: 1,
        bevelEnabled: false,
        curveSegments: 1,
      }),
      p = g.attributes.position,
      n = V(outward).normalize();
    for (let i = 0; i < p.count; i++) {
      const a = map(p.getX(i), p.getY(i)).addScaledVector(n, p.getZ(i));
      p.setXYZ(i, a.x, a.y, a.z);
    }
    const o = mesh(orientClosed(g), material, [0, 0, 0], group, name);
    o.userData.bodyShell = true;
    return o;
  }
  function glass(name, corners, map, r = 0.035) {
    const pts = round(corners, r, 6),
      shape = new T.Shape(pts),
      g = new T.ShapeGeometry(shape),
      p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const q = map(p.getX(i), p.getY(i));
      p.setXYZ(i, q.x, q.y, q.z);
    }
    g.computeVertexNormals();
    const o = mesh(g, m.glass, [0, 0, 0], group, name);
    o.castShadow = false;
    o.userData.glassCorners = corners.map((p) => map(...p).toArray());
    o.userData.aperture = pts.map((p) => map(p.x, p.y).toArray());
    const center = corners.reduce((a, p) => a.add(new T.Vector2(...p)), new T.Vector2()).multiplyScalar(0.25),
      outer = pts.map((p) => p.clone().add(p.clone().sub(center).normalize().multiplyScalar(0.009)));
    const ring = new T.Shape(outer);
    ring.holes.push(new T.Path(pts.slice().reverse()));
    const n = V(
      name.includes('right')
        ? [1, 0.15, 0]
        : name.includes('left')
          ? [-1, 0.15, 0]
          : name.includes('windshield')
            ? [0, 0.6, -0.8]
            : [0, 0.62, 0.79],
    ).normalize();
    for (const offset of [-0.002, 0.03]) {
      const sg = new T.ShapeGeometry(ring),
        sp = sg.attributes.position;
      for (let i = 0; i < sp.count; i++) {
        const q = map(sp.getX(i), sp.getY(i)).addScaledVector(n, offset);
        sp.setXYZ(i, q.x, q.y, q.z);
      }
      sg.computeVertexNormals();
      mesh(sg, m.windowSeal, [0, 0, 0], group, `${name}-seal-${offset < 0 ? 'inside' : 'outside'}`);
    }
    return { object: o, points: pts };
  }
  const frontWindow = [
      [-Math.LOG10E, 0.948],
      [0.627, 0.948],
      [0.627, 1.365],
      [-0.06, 1.365],
    ],
    quarterWindow = [
      [0.687, 0.948],
      [1.555, 0.948],
      [1.33, 1.365],
      [0.687, 1.365],
    ];
  const sideX = (y) => 0.695 - (y - 0.948) * 0.15;
  for (const side of [-1, 1]) {
    const id = side < 0 ? 'left' : 'right',
      map = (z, y) => new T.Vector3(side * sideX(y), y, z);
    const door = glass(`front-door-glass-${id}`, frontWindow, map, 0.032),
      quarter = glass(`rear-quarter-glass-${id}`, quarterWindow, map, 0.048);
    const outline = [
      [-0.485, 0.91],
      [-0.085, Math.LOG2E],
      [1.38, Math.LOG2E],
      [1.8, 0.91],
    ].map((p) => new T.Vector2(...p));
    sheet(
      `body-side-frame-${id}`,
      outline,
      [door.points, quarter.points],
      map,
      [side, 0.15, 0],
      m.paint,
      0.027,
    );
    // The belt joins the narrow flat glazing to the wider lower body.
    const beltInner = sideX(0.91);
    box(
      [0.75 - beltInner, 0.026, 2.285],
      [(side * (0.75 + beltInner)) / 2, 0.903, 0.6575],
      m.paint,
      group,
      0.002,
      `body-belt-${id}`,
    );
    const profile = [[-1.51, 0.265]],
      base = 0.265,
      rr = 0.338,
      wheelY = 0.275,
      angle = Math.asin((base - wheelY) / rr);
    for (const z of [PANDA.exterior.frontAxleZ, PANDA.exterior.rearAxleZ]) {
      profile.push([z - rr * Math.cos(angle), base]);
      for (let i = 1; i <= 20; i++) {
        const t = Math.PI - angle - ((Math.PI - 2 * angle) * i) / 20;
        profile.push([z + rr * Math.cos(t), wheelY + rr * Math.sin(t)]);
      }
    }
    profile.push([1.85, base], [1.85, 0.91], [-0.485, 0.91], [-1.49, 0.835]);
    sheet(
      `body-side-lower-${id}`,
      profile.map((p) => new T.Vector2(...p)),
      [],
      (z, y) => new T.Vector3(side * 0.728, y, z),
      [side, 0, 0],
      m.paint,
      0.022,
    );
    // Original exterior fittings follow the 1988 photograph, independent of the body aperture.
    box([0.01, 0.12, 1.415], [side * 0.749, 0.565, 0.2075], m.rubber, group, 0.005, `side-protection-${id}`);
    box(
      [0.01, 0.12, 0.23],
      [side * 0.749, 0.565, 1.73],
      m.rubber,
      group,
      0.004,
      `rear-corner-protection-${id}`,
    );
    box([0.004, 0.49, 0.003], [side * 0.751, 0.655, 0.659], m.dark, group, 0.0008, `door-back-seam-${id}`);
    box([0.004, 0.003, 1.125], [side * 0.751, 0.41, 0.0945], m.dark, group, 0.0008, `door-bottom-seam-${id}`);
    box(
      [0.011, 0.037, 0.046],
      [side * 0.75, 0.826, 0.568],
      m.rubber,
      group,
      0.005,
      `outside-door-handle-${id}`,
    );
    const bStrip = [
      [0.633, 0.947],
      [0.681, 0.947],
      [0.681, 1.374],
      [0.633, 1.374],
    ].map((p) => new T.Vector2(...p));
    sheet(
      `b-pillar-dark-${id}`,
      bStrip,
      [],
      (z, y) => map(z, y).addScaledVector(V([side, 0.15, 0]).normalize(), 0.029),
      [side, 0.15, 0],
      m.rubber,
      0.003,
    );
    // Stamped inner metal and the long dark insert of the photographed front doors.
    box([0.02, 0.395, 1.06], [side * 0.613, 0.555, 0.1], m.paint, group, 0.015, `door-metal-${id}`);
    box([0.025, 0.135, 0.96], [side * 0.605, 0.817, 0.12], m.doorBlack, group, 0.008, `door-insert-${id}`);
    for (let y = Math.LOG10E; y <= 0.68; y += 0.035)
      box([0.009, 0.007, 0.905], [side * Math.LN2, y, 0.1], m.paint, group, 0.002, `door-stamping-${id}`);
    box([0.055, 0.025, 0.215], [side * 0.573, 0.719, 0.1], m.rubber, group, 0.007, `door-pull-${id}`);
    rod([side * 0.593, 0.657, -0.105], [side * 0.568, 0.657, -0.105], 0.013, m.dark);
    rod([side * 0.568, 0.657, -0.105], [side * 0.568, 0.615, -0.066], 0.009, m.dark);
    box([0.028, 0.03, 0.038], [side * 0.568, 0.615, -0.066], m.rubber, group, 0.005, `window-crank-${id}`);
    // Rear quarter trim is an inner pressing, not a fictitious rear door.
    box([0.022, 0.24, 0.84], [side * 0.614, 0.77, 1.13], m.paint, group, 0.012, `quarter-inner-metal-${id}`);
    box(
      [0.024, 0.105, 0.84],
      [side * Math.LN2, 0.846, 1.13],
      m.doorBlack,
      group,
      0.006,
      `quarter-inner-insert-${id}`,
    );
    box(
      [0.016, 0.025, 0.033],
      [side * sideX(1.115) - side * 0.012, 1.115, 1.45],
      m.dark,
      group,
      0.004,
      `quarter-window-latch-${id}`,
    );
    // Sills and floor joins are finite volumes, with no rounded-edge openings.
    box([0.136, 0.115, 1.37], [side * 0.664, 0.32, 0.24], m.paint, group, 0.006, `body-inner-sill-${id}`);
  }
  // Crowned roof, shared longitudinal sections instead of a floating roof slab.
  const roofPositions = [],
    roofIndices = [],
    zs = [-0.085, 0.1, 0.65, 1.15, 1.38];
  for (let j = 0; j < zs.length; j++)
    for (let i = 0; i <= 12; i++) {
      const u = i / 12,
        x = (u * 2 - 1) * 0.626,
        y = Math.LOG2E + 0.026 * Math.sin(Math.PI * u);
      roofPositions.push(x, y, zs[j]);
    }
  for (let j = 0; j < zs.length - 1; j++)
    for (let i = 0; i < 12; i++) {
      const a = j * 13 + i,
        b = a + 1,
        c = a + 13,
        d = c + 1;
      roofIndices.push(a, c, b, b, c, d);
    }
  const roofG = new T.BufferGeometry();
  roofG.setAttribute('position', new T.Float32BufferAttribute(roofPositions, 3));
  roofG.setIndex(roofIndices);
  roofG.computeVertexNormals();
  mesh(roofG, m.paint, [0, 0, 0], group, 'body-roof');
  const lining = roofG.clone();
  lining.translate(0, -0.024, 0);
  const idx = lining.index.array;
  for (let i = 0; i < idx.length; i += 3) {
    const a = idx[i + 1];
    idx[i + 1] = idx[i + 2];
    idx[i + 2] = a;
  }
  lining.computeVertexNormals();
  mesh(lining, m.headliner, [0, 0, 0], group, 'panda-headliner');
  const roofHeader = [new T.Vector2(-0.626, 1.418), new T.Vector2(0.626, 1.418)];
  for (let i = 12; i >= 0; i--) {
    const u = i / 12;
    roofHeader.push(new T.Vector2((u * 2 - 1) * 0.626, Math.LOG2E + 0.026 * Math.sin(Math.PI * u)));
  }
  sheet(
    'body-roof-header-front',
    roofHeader,
    [],
    (x, y) => new T.Vector3(x, y, -0.085),
    [0, 0, -1],
    m.paint,
    0.026,
  );
  sheet(
    'body-roof-header-rear',
    roofHeader,
    [],
    (x, y) => new T.Vector3(x, y, 1.38),
    [0, 0, 1],
    m.paint,
    0.026,
  );
  // Windscreen and hatch are planar apertures in inclined structural frames.
  const windMap = (x, y) => new T.Vector3(x, y, -0.485 + (y - 0.91) * (Math.LOG10E / 0.532));
  const wind = glass(
    'windshield-glass',
    [
      [-0.644, 0.953],
      [0.644, 0.953],
      [0.558, 1.372],
      [-0.558, 1.372],
    ],
    windMap,
    0.03,
  );
  sheet(
    'body-windscreen-frame',
    [
      [-0.706, 0.91],
      [0.706, 0.91],
      [0.626, Math.LOG2E],
      [-0.626, Math.LOG2E],
    ].map((p) => new T.Vector2(...p)),
    [wind.points],
    windMap,
    [0, 0.6, -0.8],
    m.paint,
  );
  const hatchMap = (x, y) => new T.Vector3(x, y, 1.8 - (y - 0.91) * (0.42 / 0.532));
  const hatch = glass(
    'rear-hatch-glass',
    [
      [-0.627, 0.962],
      [0.627, 0.962],
      [0.554, 1.365],
      [-0.554, 1.365],
    ],
    hatchMap,
    0.04,
  );
  sheet(
    'body-rear-hatch-frame',
    [
      [-0.706, 0.91],
      [0.706, 0.91],
      [0.626, Math.LOG2E],
      [-0.626, Math.LOG2E],
    ].map((p) => new T.Vector2(...p)),
    [hatch.points],
    hatchMap,
    [0, 0.62, 0.79],
    m.paint,
  );
  sheet(
    'body-rear-hatch-lower',
    [
      [-0.728, 0.39],
      [0.728, 0.39],
      [0.706, 0.91],
      [-0.706, 0.91],
    ].map((p) => new T.Vector2(...p)),
    [],
    (x, y) => new T.Vector3(x, y, 1.855 - (y - 0.39) * (0.055 / 0.52)),
    [0, 0, 1],
    m.paint,
  );
  box([1.392, 0.65, 0.035], [0, 0.615, -0.48], m.paint, group, 0.002, 'body-front-firewall');
  sheet(
    'bonnet',
    [
      [-0.727, -1.49],
      [0.727, -1.49],
      [0.695, -0.485],
      [-0.695, -0.485],
    ].map((p) => new T.Vector2(...p)),
    [],
    (x, z) => new T.Vector3(x, 0.81 + (z + 1.49) * (0.075 / 1.005), z),
    [0, 1, -0.075 / 1.005],
    m.paint,
    0.025,
  );
  box([1.46, 0.3, 0.035], [0, 0.665, -1.48], m.paint, group, 0.008, 'front-nose');
  box([1.5, 0.145, 0.09], [0, Math.LOG10E, -1.483], m.rubber, group, 0.012, 'front-bumper');
  box([1.5, 0.145, 0.09], [0, 0.42, 1.835], m.rubber, group, 0.012, 'rear-bumper');
  box([Math.LOG2E, 0.225, 0.025], [0, 0.714, -1.501], m.rubber, group, 0.006, 'grille-surround');
  box([0.55, 0.19, 0.025], [0, 0.714, -1.505], m.dark, group, 0.006, 'grille');
  for (const side of [-1, 1]) {
    box([0.3, 0.19, 0.027], [side * 0.496, 0.714, -1.507], m.lamp, group, 0.006, `front-headlight-${side}`);
    box([0.125, 0.3, 0.03], [side * 0.671, 0.66, 1.869], m.rearLamp, group, 0.005, `rear-light-${side}`);
  }
  // A continuous floor with a raised rear platform and a distinct, deep cargo bay.
  box([0.978, 0.028, 2.33], [0, 0.266, 0.65], m.paint, group, 0.002, 'body-floor');
  for (const side of [-1, 1]) {
    box(
      [0.239, 0.028, 1.454],
      [side * 0.6085, 0.266, 0.212],
      m.paint,
      group,
      0.002,
      `body-floor-front-wing-${side}`,
    );
    box(
      [0.239, 0.028, 0.214],
      [side * 0.6085, 0.266, 1.708],
      m.paint,
      group,
      0.002,
      `body-floor-rear-wing-${side}`,
    );
  }
  box([Math.SQRT2, 0.23, 0.06], [0, 0.38, 1.835], m.paint, group, 0.002, 'body-rear-lower-closure');
  box([1.206, 0.024, 1.29], [0, 0.288, 0.145], m.carpet, group, 0.002, 'cabin-floor');
  box([0.958, 0.165, 0.5], [0, 0.374, 1.04], m.carpet, group, 0.004, 'rear-seat-platform');
  for (const side of [-1, 1])
    box(
      [0.121, 0.165, 0.135],
      [side * 0.5395, 0.374, 0.8575],
      m.carpet,
      group,
      0.002,
      `rear-seat-platform-front-wing-${side}`,
    );
  box([0.978, 0.028, 0.54], [0, 0.476, 1.57], m.carpet, group, 0.002, 'cargo-floor');
  for (const side of [-1, 1])
    box(
      [0.142, 0.028, 0.225],
      [side * 0.56, 0.476, 1.7275],
      m.carpet,
      group,
      0.002,
      `cargo-floor-rear-wing-${side}`,
    );
  box([0.978, 0.215, 0.025], [0, 0.3725, 1.3], m.paint, group, 0.002, 'cargo-floor-riser');
  box([0.125, 0.065, 1.25], [0, 0.332, 0.15], m.carpet, group, 0.012, 'centre-floor-hump');
  // Pressed wheel tubs: open outside, closed toward the occupied cabin.
  for (const side of [-1, 1])
    for (const [axle, z] of [
      ['front', PANDA.exterior.frontAxleZ],
      ['rear', PANDA.exterior.rearAxleZ],
    ]) {
      const id = side < 0 ? 'left' : 'right',
        outer = [],
        inner = [];
      for (let i = 0; i <= 24; i++) {
        const a = Math.PI - (i * Math.PI) / 24;
        outer.push(new T.Vector2(z + 0.338 * Math.cos(a), 0.275 + 0.338 * Math.sin(a)));
        inner.push(new T.Vector2(z + 0.315 * Math.cos(a), 0.275 + 0.315 * Math.sin(a)));
      }
      const band = [...outer, ...inner.reverse()];
      sheet(
        `wheelhouse-${axle}-${id}`,
        band,
        [],
        (zz, y) => new T.Vector3(side * 0.489, y, zz),
        [side, 0, 0],
        m.paint,
        0.235,
      );
      sheet(
        `wheelhouse-inner-${axle}-${id}`,
        outer,
        [],
        (zz, y) => new T.Vector3(side * 0.489, y, zz),
        [-side, 0, 0],
        m.paint,
        0.008,
      );
      if (axle === 'rear')
        box(
          [0.012, 0.031, 0.676],
          [side * 0.485, 0.2665, z],
          m.paint,
          group,
          0.001,
          `body-wheelhouse-floor-return-${id}`,
        );
      const wheel = new T.Group();
      wheel.name = `wheel-${axle}-${id}`;
      wheel.position.set(side * (axle === 'front' ? 0.627 : 0.629), 0.275, z);
      group.add(wheel);
      const tyre = mesh(
        new T.TorusGeometry(0.205, 0.07, 10, 32),
        m.rubber,
        [0, 0, 0],
        wheel,
        `tyre-${axle}-${id}`,
      );
      tyre.rotation.y = Math.PI / 2;
      const rim = mesh(
        new T.CylinderGeometry(0.166, 0.166, 0.11, 24),
        m.chrome,
        [0, 0, 0],
        wheel,
        `rim-${axle}-${id}`,
      );
      rim.rotation.z = Math.PI / 2;
      const hub = mesh(
        new T.CylinderGeometry(0.06, 0.06, 0.118, 16),
        m.dark,
        [0, 0, 0],
        wheel,
        `hub-${axle}-${id}`,
      );
      hub.rotation.z = Math.PI / 2;
    }
  const furniture = createPandaFurniture({ group, m, mesh, box, rod, panel });
  interactables.push(...furniture.interactables);
  const cassetteRest = furniture.cassette.position.toArray();
  // Mirrors and roof hardware complete the envelope; they are not used as width measurements.
  for (const side of [-1, 1]) {
    box([0.055, 0.105, 0.145], [side * 0.775, 1.005, -0.335], m.dark, group, 0.016, `outside-mirror-${side}`);
    rod([side * Math.LN2, 0.98, -0.32], [side * 0.755, 0.98, -0.32], 0.012, m.dark);
  }
  const readingLight = createReadingLight(group, m.lamp);
  interactables.push({ root: readingLight.group, kind: 'lamp' });
  const ownLegs = new T.Group();
  ownLegs.name = 'player-own-legs';
  group.add(ownLegs);
  for (let i = 0; i < 2; i++) {
    const h = PANDA.player.hip.slice();
    h[0] = PANDA.player.knees[i][0];
    rod(h, PANDA.player.knees[i], 0.046, m.doorBlack, ownLegs, 0.05, `player-thigh-${i}`);
    rod(PANDA.player.knees[i], PANDA.player.feet[i], 0.037, m.doorBlack, ownLegs, 0.042, `player-calf-${i}`);
    box(
      [0.085, 0.055, 0.174],
      [PANDA.player.feet[i][0], 0.33, PANDA.player.feet[i][2] - 0.045],
      m.rubber,
      ownLegs,
      0.012,
      `player-shoe-${i}`,
    );
  }
  const diagnostic = new T.Group();
  diagnostic.name = 'occupant-diagnostics';
  diagnostic.visible = false;
  diagnostic.userData.diagnostic = true;
  group.add(diagnostic);
  const diagnosticMaterial = new T.MeshBasicMaterial({ color: '#d4b27c', wireframe: true });
  box([0.28, 0.56, 0.18], [0.28, 0.82, 1.17], diagnosticMaterial, diagnostic, 0.01, 'player-envelope');
  box([0.28, 0.56, 0.18], [-0.28, 0.82, 1.17], diagnosticMaterial, diagnostic, 0.01, 'brother-envelope');
  let lampOn = false,
    cassetteOwner = 'seat',
    cassetteControlled = false,
    diagnosticOn = false;
  const bbox = (o) => {
    const b = new T.Box3().setFromObject(o);
    return { min: b.min.toArray(), max: b.max.toArray(), size: b.getSize(new T.Vector3()).toArray() };
  };
  group.updateMatrixWorld(true);
  const layout = {
    units: 'metres',
    assumptions: true,
    sourceScope: PANDA.referenceScope,
    eye: [...PANDA.eye],
    bodyBounds: bbox(group),
    referenceWidth: PANDA.cabin.innerWidth,
    frontSeats: furniture.seatRecords.map((s) => ({
      id: s.id,
      bounds: bbox(s.group),
      backBounds: bbox(s.back),
      headrestBounds: bbox(s.headrest),
      cushionBounds: bbox(s.cushion),
    })),
    rearSeat: {
      bounds: bbox(furniture.rearSeat),
      backBounds: bbox(furniture.rearBack),
      topY: 0.53,
      frontZ: 0.78,
    },
    floor: {
      footwellTopY: 0.3,
      benchRiserTopY: 0.44,
      tunnel: { bounds: bbox(group.getObjectByName('centre-floor-hump')) },
    },
    cargo: { ...PANDA.cargo, lowerDepth: 0.54 },
    children: { player: { hip: PANDA.player.hip, knees: PANDA.player.knees, feet: PANDA.player.feet } },
    clearances: { eyeRoofClearance: PANDA.cabin.roof - eye.y },
  };
  return {
    group,
    eye,
    dimensions: CABIN,
    layout,
    seatRecords: furniture.seatRecords,
    radio: furniture.radio,
    cassette: furniture.cassette,
    interactables,
    embodiment: { player: PANDA.player, frontHipZ: PANDA.cabin.frontHipZ },
    legacyGestureCompatible: false,
    viewTargets: {
      exchange: [0, 0.75, 0.85],
      cassette: [0.02, 0.54, 1.08],
      lamp: readingLight.group.position.toArray(),
      legs: [0.28, 0.47, 0.9],
      floor: [0, 0.33, Math.LN2],
      cargo: [0, 0.72, 1.65],
    },
    setDiagnostic(value) {
      diagnostic.visible = diagnosticOn = Boolean(value);
      return diagnosticOn;
    },
    setEmbodied(value) {
      ownLegs.visible = Boolean(value);
    },
    toggle(kind) {
      if (kind === 'lamp') {
        lampOn = !lampOn;
        readingLight.setOn(lampOn);
      }
      return { lampOn, cassetteFlipped: false };
    },
    controlCassette(position, quaternion, owner) {
      cassetteControlled = true;
      cassetteOwner = owner;
      furniture.cassette.position.fromArray(position);
      furniture.cassette.quaternion.fromArray(quaternion);
    },
    releaseCassette() {
      cassetteOwner = 'seat';
      cassetteControlled = false;
      furniture.cassette.position.fromArray(cassetteRest);
    },
    update() {},
    state() {
      return {
        lampOn,
        readingLight: readingLight.state(),
        cassetteFlipped: false,
        cassetteRotation: furniture.cassette.rotation.y,
        cassetteControlled,
        cassetteOwner,
        cassettePosition: furniture.cassette.position.toArray(),
        diagnosticOn,
        dimensions: CABIN,
        layout,
      };
    },
    dispose() {
      readingLight.dispose();
      furniture.dispose?.();
      for (const g of geometries) g.dispose();
      diagnosticMaterial.dispose();
      library.dispose();
      group.clear();
    },
  };
}
