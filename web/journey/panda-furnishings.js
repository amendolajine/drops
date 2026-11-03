import * as T from 'three';
import { PANDA } from './panda-layout.js';

// Original fitted geometry. The photographed 1988 car establishes topology and profiles;
// hidden seat structure, adjustment and upholstery thickness remain authored assumptions.
export function createPandaFurniture({ group, m, mesh, box, rod, panel }) {
  const seatRecords = [],
    interactables = [],
    ownedMaterials = [],
    ownedTextures = [];
  const c = PANDA.cabin;
  const keep = (name, parent = group) => {
    const o = new T.Group();
    o.name = name;
    o.userData.keepGroup = true;
    parent.add(o);
    return o;
  };
  function loft(rings, reverse = false) {
    const positions = rings.flat(2),
      indices = [],
      n = rings[0].length;
    const triangle = (a, b, c) => indices.push(a, reverse ? c : b, reverse ? b : c);
    for (let r = 0; r < rings.length - 1; r++)
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n,
          a = r * n + i,
          b = r * n + j,
          d = (r + 1) * n + i,
          e = (r + 1) * n + j;
        triangle(a, b, e);
        triangle(a, e, d);
      }
    for (let i = 1; i < n - 1; i++) {
      triangle(0, i + 1, i);
      const a = (rings.length - 1) * n;
      triangle(a, a + i, a + i + 1);
    }
    const xs = rings.flat().map((p) => p[0]),
      ys = rings.flat().map((p) => p[reverse ? 1 : 2]),
      minX = Math.min(...xs),
      maxX = Math.max(...xs),
      minY = Math.min(...ys),
      maxY = Math.max(...ys);
    const uv = rings
      .flat()
      .flatMap((p) => [(p[0] - minX) / (maxX - minX), (p[reverse ? 1 : 2] - minY) / (maxY - minY)]);
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  }
  function cushionRing(z, width, top, bottom) {
    const w = width / 2;
    return [
      [-w * 0.83, bottom, z],
      [w * 0.83, bottom, z],
      [w, bottom + 0.014, z],
      [w, top - 0.019, z],
      [w * 0.83, top - 0.003, z],
      [w * 0.43, top + 0.003, z],
      [0, top + 0.006, z],
      [-w * 0.43, top + 0.003, z],
      [-w * 0.83, top - 0.003, z],
      [-w, top - 0.019, z],
      [-w, bottom + 0.014, z],
    ];
  }
  function backRing(y, z, width, depth) {
    const w = width / 2,
      d = depth / 2;
    return [
      [-w * 0.84, y, z - d],
      [0, y, z - d - 0.006],
      [w * 0.84, y, z - d],
      [w, y, z - d * 0.5],
      [w, y, z + d * 0.5],
      [w * 0.84, y, z + d],
      [0, y, z + d + 0.003],
      [-w * 0.84, y, z + d],
      [-w, y, z + d * 0.5],
      [-w, y, z - d * 0.5],
    ];
  }
  function backPatch(rows, parent, side, name) {
    const positions = [],
      indices = [];
    for (const [y, z, w, d] of rows)
      positions.push(-w * 0.36, y, z + side * (d / 2 + 0.004), w * 0.36, y, z + side * (d / 2 + 0.004));
    for (let i = 0; i < rows.length - 1; i++) {
      const a = i * 2;
      indices.push(a, a + 1, a + 3, a, a + 3, a + 2);
    }
    if (side < 0)
      for (let i = 0; i < indices.length; i += 3)
        [indices[i + 1], indices[i + 2]] = [indices[i + 2], indices[i + 1]];
    const uv = rows.flatMap((_, i) => [0, i / (rows.length - 1), 1, i / (rows.length - 1)]);
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return mesh(geometry, m.seatInset, [0, 0, 0], parent, name);
  }
  function roundedPath(x, y, w, h, r) {
    const p = new T.Shape();
    p.moveTo(x + r, y);
    p.lineTo(x + w - r, y);
    p.quadraticCurveTo(x + w, y, x + w, y + r);
    p.lineTo(x + w, y + h - r);
    p.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    p.lineTo(x + r, y + h);
    p.quadraticCurveTo(x, y + h, x, y + h - r);
    p.lineTo(x, y + r);
    p.quadraticCurveTo(x, y, x + r, y);
    return p;
  }
  function openHeadrest(parent, id) {
    const shape = roundedPath(-0.112, -0.0825, 0.224, 0.165, 0.023);
    // ShapeUtils handles winding independently; an explicit hole preserves a genuine through-opening.
    shape.holes.push(new T.Path(roundedPath(-0.07, -0.04, 0.14, 0.08, 0.015).getPoints(5).reverse()));
    const geometry = new T.ExtrudeGeometry(shape, {
      depth: 0.047,
      steps: 1,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 1,
    });
    geometry.translate(0, 0, -0.0235);
    const headrest = mesh(geometry, m.doorBlack, [0, 1.158, 0.697], parent, `front-headrest-${id}`);
    headrest.rotation.x = 0.35;
    headrest.userData.opening = { width: 0.14, height: 0.08, center: [0, 0, 0], normal: [0, 0, 1] };
    for (const x of [-0.064, 0.064])
      rod(
        [x, 1.025, 0.642],
        [x, 1.105, 0.671],
        0.005,
        m.chrome,
        parent,
        0.005,
        `front-seat-${id}-headrest-post-${x < 0 ? 'left' : 'right'}`,
      );
    return headrest;
  }

  for (const side of [-1, 1]) {
    const id = side < 0 ? 'left' : 'right',
      s = keep(`front-seat-${id}`);
    s.position.x = side * c.frontSeatCenters;
    const cushionSections = [
      [-0.06, 0.365, 0.455, Math.LOG10E],
      [-0.038, 0.415, 0.472, 0.39],
      [0.06, 0.438, 0.474, 0.385],
      [0.235, Math.LOG10E, 0.471, 0.39],
      [0.365, 0.397, 0.463, 0.397],
      [0.408, 0.355, 0.451, 0.41],
    ];
    const cushion = mesh(
      loft(cushionSections.map((a) => cushionRing(...a))),
      m.seat,
      [0, 0, 0],
      s,
      `front-seat-${id}-cushion`,
    );
    const rows = [
      [0.465, 0.37, 0.355, 0.084],
      [0.535, 0.397, 0.422, 0.086],
      [Math.LN2, 0.464, 0.424, 0.079],
      [0.855, 0.555, 0.405, 0.075],
      [1.005, 0.631, 0.37, 0.069],
      [1.04, 0.648, 0.33, 0.06],
    ];
    const back = mesh(
      loft(
        rows.map((a) => backRing(...a)),
        true,
      ),
      m.seat,
      [0, 0, 0],
      s,
      `front-seat-${id}-back`,
    );
    backPatch(rows.slice(1, -1), s, 1, `front-seat-${id}-rear-cloth-panel`);
    backPatch(rows.slice(1, -1), s, -1, `front-seat-${id}-front-cloth-panel`);
    const headrest = openHeadrest(s, id);
    for (const x of [-0.158, 0.158])
      rod(
        [x, 0.345, -0.04],
        [x, 0.345, 0.365],
        0.008,
        m.dark,
        s,
        0.008,
        `front-seat-${id}-runner-${x < 0 ? 'left' : 'right'}`,
      );
    for (const z of [0.005, 0.32]) rod([-0.177, 0.35, z], [0.177, 0.35, z], 0.009, m.dark, s);
    box(
      [0.028, 0.052, 0.037],
      [side < 0 ? 0.236 : -0.236, 0.483, 0.326],
      m.belt,
      s,
      0.005,
      `front-seat-${id}-belt-buckle`,
    );
    seatRecords.push({ id, group: s, back, headrest, cushion });
  }

  const rearSections = [
    [0.78, 1.075, 0.492, Math.LOG10E],
    [0.804, 1.153, 0.518, 0.425],
    [0.91, 1.19, 0.524, 0.426],
    [0.95, 1.155, 0.524, 0.428],
    [0.97, 0.958, 0.524, Math.LOG10E],
    [0.995, 0.958, 0.524, Math.LOG10E],
    [1.025, 0.958, 0.523, 0.432],
    [1.13, 0.958, 0.522, 0.435],
    [1.238, 0.95, 0.511, 0.45],
    [1.272, 0.92, 0.498, 0.466],
  ];
  const rearSeat = mesh(
    loft(rearSections.map((a) => cushionRing(...a))),
    m.seat,
    [0, 0, 0],
    group,
    'rear-seat-cushion',
  );
  const rearRows = [
    [0.535, 1.24, 0.958, 0.078],
    [0.614, 1.274, 0.958, 0.08],
    [0.634, 1.283, 1.1, 0.08],
    [0.655, 1.292, 1.158, 0.079],
    [0.795, 1.352, 1.17, 0.074],
    [0.955, 1.418, 1.148, 0.068],
    [0.995, 1.43, 1.075, 0.06],
  ];
  const rearBack = mesh(
    loft(
      rearRows.map((a) => backRing(...a)),
      true,
    ),
    m.seat,
    [0, 0, 0],
    group,
    'rear-seat-back',
  );
  backPatch(rearRows.slice(1, -1), group, -1, 'rear-seat-front-cloth-panel');
  // One shelf spans the real cargo wedge, behind the bench rather than on its back surface.
  const cargo = PANDA.cargo;
  const parcelShelf = box(
    [1.107, 0.02, cargo.shelfRearZ - cargo.shelfFrontZ],
    [0, cargo.shelfY - 0.01, (cargo.shelfFrontZ + cargo.shelfRearZ) / 2],
    m.carpet,
    group,
    0.004,
    'parcel-shelf',
  );
  const cordY = 1.284,
    cordZ = T.MathUtils.lerp(
      PANDA.landmarks.hatchBeltZ,
      PANDA.landmarks.rearRoofZ,
      (cordY - c.bodyBelt) / (c.roof - c.bodyBelt),
    );
  for (const side of [-1, 1])
    rod(
      [side * 0.495, cargo.shelfY, cargo.shelfRearZ - 0.015],
      [side * 0.535, cordY, cordZ],
      0.0017,
      m.belt,
      group,
      0.0017,
      `parcel-shelf-cord-${side < 0 ? 'left' : 'right'}`,
    );

  const dash = keep('dashboard-assembly');
  dash.position.fromArray(PANDA.dashboard.translation);
  box([1.112, 0.03, 0.208], [0, 0.829, -0.624], m.doorBlack, dash, 0.006, 'dashboard-upper-shelf');
  // The passenger's long soft trough has a floor and a back; its front remains visibly open.
  panel(
    [
      [0.12, 0.767, -0.468],
      [0.565, 0.767, -0.468],
      [0.565, 0.799, -0.735],
      [0.12, 0.799, -0.735],
    ],
    m.doorBlack,
    dash,
    'dashboard-passenger-trough-floor',
  );
  panel(
    [
      [0.12, 0.799, -0.735],
      [0.565, 0.799, -0.735],
      [0.565, 0.918, -0.72],
      [0.12, 0.918, -0.72],
    ],
    m.seat,
    dash,
    'dashboard-passenger-trough-back',
  );
  box([0.018, 0.112, 0.25], [0.57, 0.819, -0.606], m.doorBlack, dash, 0.005, 'dashboard-trough-end');
  rod(
    [0.112, 0.79, -0.453],
    [0.565, 0.79, -0.453],
    0.019,
    m.doorBlack,
    dash,
    0.019,
    'dashboard-passenger-crossbar',
  );
  rod(
    [-0.558, 0.79, -0.453],
    [-0.183, 0.79, -0.453],
    0.019,
    m.doorBlack,
    dash,
    0.019,
    'dashboard-driver-crossbar',
  );
  // The connected instrument and heater binnacle is deliberately broad and shallow.
  const binnacleShape = roundedPath(-0.566, 0.82, Math.LN2, 0.211, 0.026);
  const binnacleGeo = new T.ExtrudeGeometry(binnacleShape, {
    depth: 0.116,
    steps: 1,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.004,
    bevelSegments: 1,
  });
  mesh(binnacleGeo, m.dark, [0, 0, -0.582], dash, 'instrument-heater-binnacle');
  panel(
    [
      [-0.541, 0.85, -0.461],
      [-0.205, 0.85, -0.461],
      [-0.205, 0.999, -0.461],
      [-0.541, 0.999, -0.461],
    ],
    m.display,
    dash,
    'instrument-face',
  );
  for (let i = 0; i < 8; i++)
    box([0.003, 0.01, 0.001], [-0.516 + i * 0.038, 0.974, -0.459], m.label, dash, 0.0002);
  box([0.014, 0.083, 0.003], [-0.404, 0.919, -0.457], m.label, dash, 0.001, 'speedometer-needle');
  // The right half of the binnacle is switches above a wide heater grille.
  for (let row = 0; row < 2; row++)
    for (let col = 0; col < 3; col++)
      box(
        [0.039, 0.028, 0.012],
        [-0.156 + col * 0.047, 0.984 - row * 0.036, -0.455],
        m.doorBlack,
        dash,
        0.002,
      );
  box([0.225, 0.059, 0.008], [-0.016, 0.868, -0.455], m.rubber, dash, 0.003, 'heater-grille-recess');
  for (let i = 0; i < 5; i++)
    box([0.215, 0.003, 0.012], [-0.016, 0.845 + i * 0.011, -0.449], m.doorBlack, dash, 0.0008);
  for (const x of [-0.09, -0.045, 0, 0.045, 0.09])
    box([0.003, 0.053, 0.012], [x, 0.868, -0.448], m.doorBlack, dash, 0.0008);
  for (const x of [-0.565, 0.555]) {
    box([0.083, 0.034, 0.012], [x, 0.9, -0.719], m.dark, dash, 0.002);
    for (let i = 0; i < 3; i++)
      box([0.072, 0.002, 0.013], [x, 0.89 + i * 0.009, -0.711], m.doorBlack, dash, 0.0005);
  }

  const radio = keep('cassette-radio', dash),
    worldCenter = PANDA.radio.center.slice(),
    center = worldCenter.map((v, i) => v - PANDA.dashboard.translation[i]),
    [rx, ry, rz] = center;
  const width = PANDA.radio.width,
    height = PANDA.radio.height,
    depth = PANDA.radio.depth,
    slotWidth = 0.11,
    slotHeight = 0.018;
  const edgeY = (height - slotHeight) / 2,
    edgeX = (width - slotWidth) / 2;
  for (const sign of [-1, 1])
    box(
      [width, edgeY, depth],
      [rx, ry + (sign * (slotHeight + edgeY)) / 2, rz - depth / 2],
      m.dark,
      radio,
      0.002,
      `radio-${sign < 0 ? 'lower' : 'upper'}-shell`,
    );
  for (const sign of [-1, 1])
    box(
      [edgeX, slotHeight, depth],
      [rx + (sign * (slotWidth + edgeX)) / 2, ry, rz - depth / 2],
      m.dark,
      radio,
      0.001,
      `radio-${sign < 0 ? 'left' : 'right'}-shell`,
    );
  box(
    [slotWidth, slotHeight, 0.002],
    [rx, ry, rz - depth - 0.001],
    m.rubber,
    radio,
    0.0002,
    'radio-cavity-back',
  );
  box([0.075, 0.007, 0.001], [rx - 0.015, ry + 0.019, rz + 0.001], m.display, radio, 0.001, 'radio-display');
  for (const side of [-1, 1]) {
    const knob = mesh(
      new T.CylinderGeometry(0.0075, 0.0075, 0.01, 12),
      m.doorBlack,
      [rx + side * 0.078, ry, rz + 0.006],
      radio,
      `radio-${side < 0 ? 'left' : 'right'}-knob`,
    );
    knob.rotation.x = Math.PI / 2;
  }
  box([0.125, 0.071, 0.046], [rx, 0.665, -0.453], m.doorBlack, dash, 0.005, 'dashboard-lower-small-tray');
  // Backplate and lateral mounting returns connect the radio to the binnacle without filling its slot.
  box(
    [width + 0.025, 0.155, 0.012],
    [rx, 0.79, rz - depth - 0.015],
    m.doorBlack,
    dash,
    0.002,
    'radio-mount-backplate',
  );
  for (const side of [-1, 1])
    box(
      [0.012, 0.15, 0.028],
      [rx + side * (width / 2 + 0.006), 0.782, rz - depth - 0.007],
      m.doorBlack,
      dash,
      0.001,
      `radio-mount-return-${side}`,
    );
  radio.userData.slot = {
    center: worldCenter,
    width: slotWidth,
    height: slotHeight,
    depth,
    cavityMin: [worldCenter[0] - slotWidth / 2, worldCenter[1] - slotHeight / 2, worldCenter[2] - depth],
    cavityMax: [worldCenter[0] + slotWidth / 2, worldCenter[1] + slotHeight / 2, worldCenter[2]],
  };
  const slotMarker = keep('radio-slot', radio);
  slotMarker.position.set(...center);
  slotMarker.userData = { ...slotMarker.userData, ...radio.userData.slot };

  const wheel = keep('steering-wheel');
  wheel.position.fromArray(PANDA.dashboard.steeringCenter);
  wheel.rotation.x = -0.18;
  mesh(new T.TorusGeometry(0.174, 0.0105, 8, 40), m.rubber, [0, 0, 0], wheel, 'steering-wheel-rim');
  box([0.117, 0.053, 0.024], [0, 0, 0], m.doorBlack, wheel, 0.005, 'steering-wheel-hub');
  for (const side of [-1, 1]) {
    const spoke = [
      [side * 0.05, 0.018, 0.004],
      [side * 0.162, 0.018, 0.004],
      [side * 0.154, -0.023, 0.004],
      [side * 0.047, -0.016, 0.004],
    ];
    panel(
      side < 0 ? spoke : spoke.reverse(),
      m.doorBlack,
      wheel,
      `steering-wheel-upper-spoke-${side < 0 ? 'left' : 'right'}`,
    );
    rod(
      [side * 0.043, -0.018, 0],
      [side * 0.125, -0.121, 0],
      0.014,
      m.doorBlack,
      wheel,
      0.011,
      `steering-wheel-lower-spoke-${side < 0 ? 'left' : 'right'}`,
    );
  }
  rod([0, 0, -0.015], [0, -0.01, -0.215], 0.022, m.doorBlack, wheel, 0.025, 'steering-column');
  // A small 4x4 control base sits on the floor; it is not a modern centre console.
  box([0.142, 0.038, 0.18], [0, 0.334, -0.085], m.rubber, group, 0.005, 'gear-lever-floor-boot');
  rod([0, 0.355, -0.092], [0, 0.556, -0.012], 0.009, m.dark, group, 0.01, 'gear-lever-stem');
  const gearKnob = mesh(
    new T.SphereGeometry(1, 10, 6),
    m.doorBlack,
    [0, 0.57, -0.005],
    group,
    'gear-lever-knob',
  );
  gearKnob.scale.set(0.022, 0.031, 0.028);
  rod(
    [0.095, 0.324, 0.085],
    [0.095, 0.392, 0.175],
    0.006,
    m.dark,
    group,
    0.006,
    'four-wheel-drive-short-lever',
  );
  box([0.026, 0.019, 0.044], [0.095, 0.398, 0.183], m.doorBlack, group, 0.006, 'four-wheel-drive-lever-knob');
  rod([-0.08, 0.325, 0.275], [-0.08, 0.352, 0.445], 0.012, m.dark, group, 0.014, 'handbrake');

  const cassette = keep('cassette');
  cassette.position.set(0.02, 0.5355, 1.08);
  cassette.rotation.y = 0.2;
  box([0.1016, 0.014, 0.064], [0, 0, 0], m.cassette, cassette, 0.0025, 'cassette-case');
  // Flush, original decoration: no protruding reels can collide with the radio slot.
  const pixels = new Uint8Array(64 * 32 * 4);
  for (let y = 0; y < 32; y++)
    for (let x = 0; x < 64; x++) {
      let rgb = [43, 47, 45];
      if (x > 3 && x < 60 && y > 3 && y < 28) rgb = [179, 166, 127];
      if (y > 8 && y < 13 && x > 7 && x < 56) rgb = [82, 99, 91];
      if (y > 15 && y < 25 && ((x - 20) ** 2 + (y - 20) ** 2 < 18 || (x - 44) ** 2 + (y - 20) ** 2 < 18))
        rgb = [43, 47, 45];
      if (y === 6 && x > 9 && x < 38) rgb = [94, 87, 68];
      const i = (y * 64 + x) * 4;
      pixels.set([...rgb, 255], i);
    }
  const labelTexture = new T.DataTexture(pixels, 64, 32, T.RGBAFormat);
  labelTexture.colorSpace = T.SRGBColorSpace;
  labelTexture.magFilter = labelTexture.minFilter = T.NearestFilter;
  labelTexture.generateMipmaps = false;
  labelTexture.needsUpdate = true;
  ownedTextures.push(labelTexture);
  const labelMaterial = new T.MeshStandardMaterial({ map: labelTexture, roughness: 0.88, metalness: 0 });
  ownedMaterials.push(labelMaterial);
  const tapeLabel = mesh(
    new T.PlaneGeometry(0.096, 0.058),
    labelMaterial,
    [0, 0.00705, 0],
    cassette,
    'cassette-flush-original-label',
  );
  tapeLabel.rotation.x = -Math.PI / 2;
  interactables.push({ root: cassette, kind: 'cassette' });
  return {
    seatRecords,
    radio: { group: radio, slot: radio.userData.slot },
    cassette,
    interactables,
    rearSeat,
    rearBack,
    parcelShelf,
    dispose() {
      ownedMaterials.forEach((material) => {
        material.dispose();
      });
      ownedTextures.forEach((texture) => {
        texture.dispose();
      });
    },
  };
}
