import * as T from 'three';

// Original fixed-world study. Distances are authored metres, not a surveyed city.
const hash = (i, salt = 0) => {
  let n = Math.imul((i + 1) ^ Math.imul(salt + 17, 374761393), 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
};

export function createLandscape(scene) {
  const group = new T.Group();
  group.name = 'fixed-canal-neighbourhood-and-fields';
  scene.add(group);
  const materials = new Set(),
    geometries = new Set(),
    textures = new Set();
  const batches = new Map(),
    up = new T.Vector3(0, 1, 0),
    dummy = new T.Object3D();
  const mat = (color, options = {}) => {
    const value = new T.MeshStandardMaterial({ color, roughness: 0.88, ...options });
    materials.add(value);
    return value;
  };
  const geo = (value) => {
    geometries.add(value);
    return value;
  };
  const box = geo(new T.BoxGeometry(1, 1, 1));
  const cylinder = geo(new T.CylinderGeometry(0.72, 1, 1, 7));

  function texture(kind, repeat = [1, 1]) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = kind === 'asphalt' ? '#878b87' : kind === 'roof' ? '#b2b8ae' : '#dedbd0';
    ctx.fillRect(0, 0, 256, 256);
    if (kind === 'ground')
      for (let i = 0; i < 180; i++) {
        ctx.fillStyle = i % 2 ? 'rgba(89,109,62,.12)' : 'rgba(226,225,173,.14)';
        ctx.beginPath();
        ctx.ellipse(
          hash(i, 883) * 256,
          hash(i, 887) * 256,
          6 + hash(i, 889) * 24,
          3 + hash(i, 893) * 15,
          hash(i, 897) * 3,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
    for (let i = 0; i < 6500; i++) {
      const a = hash(i, 91),
        v = 70 + Math.floor(hash(i, 93) * 130);
      ctx.fillStyle = `rgba(${v},${v},${v},${kind === 'asphalt' ? 0.17 : 0.055})`;
      ctx.fillRect(Math.floor(hash(i, 97) * 256), Math.floor(hash(i, 101) * 256), a > 0.86 ? 2 : 1, 1);
    }
    if (kind === 'roof') {
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(45,54,53,.22)';
      for (let y = 0; y <= 256; y += 24) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(256, y);
        ctx.stroke();
        for (let x = (y / 24) % 2 ? 0 : 20; x < 256; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 24);
          ctx.stroke();
        }
      }
    }
    const value = new T.CanvasTexture(canvas);
    value.colorSpace = T.SRGBColorSpace;
    value.wrapS = value.wrapT = T.RepeatWrapping;
    value.repeat.set(...repeat);
    value.anisotropy = 4;
    textures.add(value);
    return value;
  }

  function plantTexture(kind) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);
    if (kind === 'leaves') {
      const tips = [];
      ctx.strokeStyle = '#58694c';
      ctx.lineCap = 'round';
      ctx.lineWidth = 3;
      for (let branchId = 0; branchId < 12; branchId++) {
        const angle = -Math.PI * 0.94 + hash(branchId, 1201) * Math.PI * 0.88;
        const endX = 256 + Math.cos(angle) * (110 + hash(branchId, 1203) * 145);
        const endY = 360 + Math.sin(angle) * (130 + hash(branchId, 1207) * 155);
        ctx.beginPath();
        ctx.moveTo(256, 493);
        ctx.quadraticCurveTo(252, 330, endX, endY);
        ctx.stroke();
        tips.push([endX, endY]);
      }
      const colors = ['#3c5b3e', '#496a41', '#547343', '#66834a', '#728d50', '#81995a', '#94a263'];
      for (let i = 0; i < 950; i++) {
        const tip = tips[i % tips.length],
          angle = hash(i, 1211) * Math.PI * 2;
        const radius = Math.sqrt(hash(i, 1213)) * (42 + hash(i % 12, 1217) * 45);
        const x = tip[0] + Math.cos(angle) * radius,
          y = tip[1] + Math.sin(angle) * radius * 0.75;
        const len = 9 + hash(i, 1223) * 11;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle * 0.6 + hash(i, 1229));
        ctx.fillStyle = colors[Math.floor(hash(i, 1231) * colors.length)];
        ctx.beginPath();
        ctx.ellipse(0, 0, len * 0.41, len, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(205,211,133,.18)';
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(0, len * 0.8);
        ctx.lineTo(0, -len * 0.7);
        ctx.stroke();
        ctx.restore();
      }
    } else {
      const isReed = kind === 'reeds',
        count = isReed ? 30 : 52;
      ctx.lineCap = 'round';
      for (let i = 0; i < count; i++) {
        const baseX = 90 + hash(i, 1301) * 332,
          topY = isReed ? 35 + hash(i, 1303) * 140 : 65 + hash(i, 1303) * 335;
        const topX = baseX + (hash(i, 1307) - 0.5) * 190;
        ctx.strokeStyle = ['#4f6a3e', '#6b8148', '#87934e', '#9c9d5d', '#5d7844'][i % 5];
        ctx.lineWidth = isReed ? 3 + hash(i, 1311) * 3 : 2 + hash(i, 1311) * 4;
        ctx.beginPath();
        ctx.moveTo(baseX, 510);
        ctx.quadraticCurveTo(baseX + (topX - baseX) * 0.15, topY + 120, topX, topY);
        ctx.stroke();
        if (isReed && i % 4 === 0) {
          ctx.strokeStyle = '#847458';
          ctx.lineWidth = 8;
          ctx.beginPath();
          ctx.moveTo(topX, topY);
          ctx.lineTo(topX + 2, topY + 27);
          ctx.stroke();
        }
      }
    }
    const value = new T.CanvasTexture(canvas);
    value.colorSpace = T.SRGBColorSpace;
    value.anisotropy = 4;
    value.generateMipmaps = true;
    textures.add(value);
    return value;
  }

  function waterNormals() {
    const size = 128,
      data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++) {
        const u = (x / size) * Math.PI * 2,
          v = (y / size) * Math.PI * 2;
        const normal = new T.Vector3(
            0.25 * Math.sin(u * 3 + v) + 0.16 * Math.sin(u * 7 - v * 2),
            0.22 * Math.cos(v * 4 - u) + 0.12 * Math.sin(v * 9 + u * 2),
            1,
          ).normalize(),
          i = (y * size + x) * 4;
        data[i] = Math.round((normal.x * 0.5 + 0.5) * 255);
        data[i + 1] = Math.round((normal.y * 0.5 + 0.5) * 255);
        data[i + 2] = Math.round((normal.z * 0.5 + 0.5) * 255);
        data[i + 3] = 255;
      }
    const value = new T.DataTexture(data, size, size);
    value.wrapS = value.wrapT = T.RepeatWrapping;
    value.repeat.set(12, 110);
    value.magFilter = T.LinearFilter;
    value.minFilter = T.LinearMipmapLinearFilter;
    value.generateMipmaps = true;
    value.needsUpdate = true;
    textures.add(value);
    return value;
  }

  const asphalt = mat('#626767', { map: texture('asphalt'), roughness: 0.98 });
  const gravel = mat('#aca994', { map: texture('plaster', [3, 3]), roughness: 1 });
  const ground = mat('#7d8d57', { map: texture('ground', [120, 120]), roughness: 1 });
  const _edgeGrass = mat('#6d8051', { roughness: 1 });
  const field = [mat('#8d9a64'), mat('#a7aa71'), mat('#7a925d'), mat('#b2ae77')];
  const paint = mat('#dbd9ba', { roughness: 0.97 });
  const kerb = mat('#b4b7a7', { roughness: 0.93 });
  const roof = mat('#6b716e', { map: texture('roof', [2, 2]), roughness: 0.9 });
  const walls = [
    mat('#c99078', { map: texture('plaster') }),
    mat('#d5c2a0', { map: texture('plaster') }),
    mat('#c3b7a1', { map: texture('plaster') }),
  ];
  const joinery = mat('#ded5b8', { roughness: 0.71 });
  const darkWood = mat('#526159', { roughness: 0.78 });
  const glazing = mat('#527478', { roughness: 0.2, metalness: 0.24 });
  const warmPane = mat('#ac956a', { roughness: 0.3, metalness: 0.1 });
  const metal = mat('#6d7974', { roughness: 0.56, metalness: 0.35 });
  const bark = mat('#5c5a43', { roughness: 1 });
  const leaf = mat('#ffffff', {
    map: plantTexture('leaves'),
    alphaTest: 0.38,
    roughness: 0.93,
    side: T.DoubleSide,
  });
  const grass = mat('#ffffff', {
    map: plantTexture('grass'),
    alphaTest: 0.34,
    roughness: 1,
    side: T.DoubleSide,
  });
  const reed = mat('#e5e4c4', {
    map: plantTexture('reeds'),
    alphaTest: 0.34,
    roughness: 1,
    side: T.DoubleSide,
  });

  function addMesh(geometry, material, position, scale, rotation = [0, 0, 0], cast = false) {
    const mesh = new T.Mesh(geometry, material);
    mesh.position.set(...position);
    if (scale) mesh.scale.set(...scale);
    mesh.rotation.set(...rotation);
    mesh.castShadow = cast;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }
  function instance(geometry, material, p, s = [1, 1, 1], r = [0, 0, 0], color = null, cast = true) {
    const key = `${geometry.uuid}/${material.uuid}/${cast}`;
    if (!batches.has(key)) batches.set(key, { geometry, material, cast, rows: [] });
    batches.get(key).rows.push({ p, s, r, color });
  }
  const block = (material, p, s, r = [0, 0, 0], cast = true) => instance(box, material, p, s, r, null, cast);
  function branch(a, b, radius, material = bark) {
    const from = new T.Vector3(...a),
      to = new T.Vector3(...b),
      delta = to.clone().sub(from);
    dummy.position.copy(from.add(to).multiplyScalar(0.5));
    dummy.quaternion.setFromUnitVectors(up, delta.clone().normalize());
    const e = new T.Euler().setFromQuaternion(dummy.quaternion);
    instance(
      cylinder,
      material,
      dummy.position.toArray(),
      [radius, delta.length(), radius],
      [e.x, e.y, e.z],
      null,
      true,
    );
  }

  const curve = new T.CatmullRomCurve3(
    [
      [0, 0, 80],
      [0, 0, 15],
      [0, 0, -65],
      [-28, 0, -112],
      [-95, 0, -125],
      [-157, 0, -83],
      [-173, 0, -10],
      [-150, 0, 74],
      [-87, 0, 113],
      [-23, 0, 116],
    ].map((p) => new T.Vector3(...p)),
    true,
    'centripetal',
  );
  curve.arcLengthDivisions = 1200;
  curve.updateArcLengths();
  const length = curve.getLength(),
    roadSamples = 420;
  const _sample = (distance) => curve.getPointAt((((distance % length) + length) % length) / length);
  function pose(distance) {
    const u = (((distance % length) + length) % length) / length;
    const position = curve.getPointAt(u),
      tangent = curve.getTangentAt(u).setY(0).normalize();
    return {
      position,
      tangent,
      section: u < 0.29 ? 'Canal street' : u < 0.72 ? 'Open fields' : 'Neighbourhood',
    };
  }
  function ribbon(offset, width, material, y) {
    const vertices = [],
      uv = [],
      indices = [];
    for (let i = 0; i <= roadSamples; i++) {
      const u = i / roadSamples,
        p = curve.getPointAt(u),
        t = curve.getTangentAt(u);
      const right = new T.Vector3(-t.z, 0, t.x).normalize();
      for (const side of [-0.5, 0.5]) {
        const q = p.clone().addScaledVector(right, offset + side * width);
        vertices.push(q.x, y, q.z);
        uv.push(side + 0.5, (u * length) / 7);
      }
      if (i < roadSamples) {
        const n = i * 2;
        indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
      }
    }
    const g = geo(new T.BufferGeometry());
    g.setAttribute('position', new T.Float32BufferAttribute(vertices, 3));
    g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    g.setIndex(indices);
    g.computeVertexNormals();
    return addMesh(g, material, [0, 0, 0], null, [0, 0, 0], false);
  }
  addMesh(geo(new T.PlaneGeometry(1800, 1800)), ground, [-50, -0.07, 0], null, [-Math.PI / 2, 0, 0]);
  ribbon(0, 8.4, gravel, -0.005);
  ribbon(0, 6.2, asphalt, 0.012);
  ribbon(3.0, 0.1, paint, 0.018);
  ribbon(-3.0, 0.1, paint, 0.018);
  for (let distance = 4; distance < length; distance += 10) {
    const { position, tangent } = pose(distance);
    block(
      paint,
      [position.x, 0.022, position.z],
      [0.12, 0.012, 3.0],
      [0, Math.atan2(tangent.x, tangent.z), 0],
      false,
    );
  }
  // A short residential side street has a deliberate endpoint and a turning court.
  block(asphalt, [-19, 0.008, 26], [32, 0.022, 5.2], [0, 0, 0], false);
  addMesh(geo(new T.CylinderGeometry(7.2, 7.2, 0.03, 28)), asphalt, [-36, 0.008, 26], null);
  block(kerb, [-19, 0.13, 22.8], [31, 0.25, 0.28], [0, 0, 0], false);
  block(kerb, [-19, 0.13, 29.2], [31, 0.25, 0.28], [0, 0, 0], false);

  // The canal remains one fixed geographic feature when the passenger turns around.
  const water = mat('#477e7b', {
    normalMap: waterNormals(),
    normalScale: new T.Vector2(0.55, 0.55),
    roughness: 0.24,
    metalness: 0.05,
    envMapIntensity: 0.65,
  });
  const waterGeometry = geo(new T.PlaneGeometry(23, 310, 24, 140));
  const _waterMesh = addMesh(waterGeometry, water, [19, 0.018, 2], null, [-Math.PI / 2, 0, 0]);
  const waterBase = new Float32Array(waterGeometry.attributes.position.array);
  const waterColor = new T.Color('#477e7b');
  const bank = mat('#7b8c60', { roughness: 1 });
  block(bank, [6.5, 0.04, 2], [2, 0.18, 310], [0, 0, 0], false);
  block(bank, [31.5, 0.04, 2], [2, 0.18, 310], [0, 0, 0], false);
  for (let i = 0; i < 95; i++) {
    const z = -148 + i * 3.18;
    block(kerb, [7.35, -0.02, z], [0.25, 0.42, 2.9], [0, 0, 0], false);
    block(kerb, [30.65, -0.02, z], [0.25, 0.42, 2.9], [0, 0, 0], false);
  }
  const rippleGeo = geo(new T.PlaneGeometry(1, 1));
  const rippleMat = mat('#b2c6ab', { roughness: 0.45, transparent: true, opacity: 0.16, depthWrite: false });
  for (let i = 0; i < 160; i++) {
    instance(
      rippleGeo,
      rippleMat,
      [8 + hash(i, 501) * 21.5, 0.035, -148 + hash(i, 503) * 300],
      [0.25 + hash(i, 507) * 1.3, 0.02 + hash(i, 509) * 0.09, 1],
      [-Math.PI / 2, 0, hash(i, 511) * 0.15],
      null,
      false,
    );
  }

  function roofGeometry() {
    const g = new T.BufferGeometry();
    const p = [
      -0.5, 0, -0.5, -0.5, 0, 0.5, 0, 1, 0.5, -0.5, 0, -0.5, 0, 1, 0.5, 0, 1, -0.5, 0, 1, -0.5, 0, 1, 0.5,
      0.5, 0, 0.5, 0, 1, -0.5, 0.5, 0, 0.5, 0.5, 0, -0.5,
    ];
    g.setAttribute('position', new T.Float32BufferAttribute(p, 3));
    g.setAttribute(
      'uv',
      new T.Float32BufferAttribute(
        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        2,
      ),
    );
    g.computeVertexNormals();
    return geo(g);
  }
  const roofGeo = roofGeometry();
  const gableGeo = geo(new T.BufferGeometry());
  gableGeo.setAttribute('position', new T.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0, 1, 0], 3));
  gableGeo.computeVertexNormals();
  function house(x, z, turn, id, scale = 1) {
    const angle = turn,
      width = (5.4 + hash(id, 31) * 1.8) * scale,
      depth = (6.0 + hash(id, 32) * 1.7) * scale;
    const height = (4.8 + hash(id, 34) * 0.6) * scale,
      pitch = 1.7 * scale;
    const wall = walls[id % walls.length];
    const transform = (a, b, c) => [
      x + Math.cos(angle) * a + Math.sin(angle) * c,
      b,
      z - Math.sin(angle) * a + Math.cos(angle) * c,
    ];
    const part = (m, p, s) => block(m, transform(...p), s, [0, angle, 0]);
    part(wall, [0, height / 2, 0], [width, height, depth]);
    part(kerb, [0, 0.17, 0], [width + 0.15, 0.34, depth + 0.15]);
    instance(roofGeo, roof, [x, height, z], [width + 0.7, pitch, depth + 0.7], [0, angle, 0]);
    instance(gableGeo, wall, transform(0, height, depth / 2 + 0.005), [width, pitch, 1], [0, angle, 0]);
    instance(
      gableGeo,
      wall,
      transform(0, height, -depth / 2 - 0.005),
      [width, pitch, 1],
      [0, angle + Math.PI, 0],
    );
    for (const side of [-1, 1]) {
      part(joinery, [side * (width / 2 + 0.15), height - 0.05, 0], [0.16, 0.23, depth + 0.85]);
      part(metal, [side * (width / 2 + 0.24), height - 0.15, 0], [0.09, 0.1, depth + 0.8]);
      part(metal, [side * (width / 2 + 0.28), height / 2, depth / 2 - 0.3], [0.07, height, 0.07]);
    }
    part(roof, [width * 0.24, height + pitch * 0.73, -0.5], [0.6, 1.65, 0.64]);
    part(kerb, [width * 0.24, height + pitch * 0.73 + 0.85, -0.5], [0.78, 0.12, 0.82]);
    function window(a, b, c, sideAngle = 0) {
      const ww = 0.98 * scale,
        hh = 1.35 * scale;
      const windowTransform = (dx, dy, dz) =>
        transform(
          a + Math.cos(sideAngle) * dx + Math.sin(sideAngle) * dz,
          b + dy,
          c - Math.sin(sideAngle) * dx + Math.cos(sideAngle) * dz,
        );
      const piece = (m, p, s) => block(m, windowTransform(...p), s, [0, angle + sideAngle, 0]);
      piece(darkWood, [0, 0, 0], [ww + 0.23, hh + 0.23, 0.12]);
      piece(hash(id + Math.floor(a * 5), 77) > 0.86 ? warmPane : glazing, [0, 0, 0.074], [ww, hh, 0.025]);
      piece(joinery, [0, 0, 0.11], [0.045, hh + 0.06, 0.06]);
      piece(joinery, [0, 0.1, 0.11], [ww + 0.06, 0.045, 0.06]);
      for (const sign of [-1, 1]) {
        piece(joinery, [sign * (ww / 2 + 0.035), 0, 0.11], [0.075, hh + 0.15, 0.08]);
        piece(joinery, [0, sign * (hh / 2 + 0.035), 0.11], [ww + 0.15, 0.075, 0.08]);
      }
      piece(kerb, [0, -hh / 2 - 0.11, 0.13], [ww + 0.32, 0.12, 0.32]);
    }
    for (const floor of [1.45 * scale, 3.65 * scale]) {
      window(-width * 0.29, floor, depth / 2 + 0.025);
      window(width * 0.29, floor, depth / 2 + 0.025);
      window(width / 2 + 0.025, floor, 0, Math.PI / 2);
      window(-width / 2 - 0.025, floor, 0, -Math.PI / 2);
    }
    part(darkWood, [0, 1.08 * scale, depth / 2 + 0.06], [0.95 * scale, 2.16 * scale, 0.13]);
    part(glazing, [0, 1.58 * scale, depth / 2 + 0.14], [0.58 * scale, 0.72 * scale, 0.025]);
    part(joinery, [0.43 * scale, 1.05 * scale, depth / 2 + 0.19], [0.09, 0.04, 0.08]);
    part(kerb, [0, 0.08, depth / 2 + 0.44], [1.55 * scale, 0.16, 0.9]);
    part(gravel, [0, 0.014, depth / 2 + 3.2], [1.35 * scale, 0.028, 5.6]);
    // Low garden fences reinforce the scale of the buildings beside the road.
    for (let n = 0; n < 18; n++)
      part(darkWood, [-width * 0.6 + (n * width * 1.2) / 17, 0.44, depth / 2 + 2.1], [0.1, 0.88, 0.075]);
    part(darkWood, [0, 0.3, depth / 2 + 2.1], [width * 1.24, 0.09, 0.075]);
    part(darkWood, [0, 0.64, depth / 2 + 2.1], [width * 1.24, 0.09, 0.075]);
  }
  house(-18, 73, Math.PI / 2, 0);
  house(-21, 43, Math.PI / 2, 1);
  house(-18, -12, Math.PI / 2, 2);
  house(-21, -53, Math.PI / 2, 3);
  house(57, 77, -Math.PI / 2, 4, 0.92);
  house(63, -11, -Math.PI / 2, 5, 1.06);
  house(-83, 141, Math.PI, 6);
  house(-119, 124, Math.PI, 7);
  house(-49, 145, Math.PI, 8, 0.86);

  for (let i = 0; i < 7; i++) {
    const x = -125 + (i % 3) * 33,
      z = -50 + Math.floor(i / 3) * 35;
    block(field[i % field.length], [x, -0.025, z], [30, 0.045, 30], [0, 0.03, 0], false);
    for (let j = 0; j < 8; j++)
      block(
        field[(i + 1) % field.length],
        [x - 13 + j * 3.7, 0.002, z],
        [0.13, 0.006, 28],
        [0, 0.03, 0],
        false,
      );
  }

  // Leaf-cluster cards sit on a three-dimensional branching scaffold. The atlas is original.
  const leafGeo = geo(new T.PlaneGeometry(1, 1));
  const bladeGeo = geo(new T.PlaneGeometry(1, 1));
  bladeGeo.translate(0, 0.5, 0);
  const leafColor = new T.Color(),
    treePositions = [],
    roadPoints = curve.getSpacedPoints(250);
  function nearRoad(x, z) {
    let d = Infinity;
    for (const p of roadPoints) d = Math.min(d, (x - p.x) ** 2 + (z - p.z) ** 2);
    return d < 10 ** 2;
  }
  function tree(x, z, id, size = 1, detailed = true) {
    const narrow = id % 6 === 0,
      height = (narrow ? 11 : 7.2 + hash(id, 601) * 3.1) * size;
    const spread = (narrow ? 2.1 : 3.0 + hash(id, 602) * 1.4) * size;
    const leanX = (hash(id, 603) - 0.5) * 0.65 * size,
      leanZ = (hash(id, 605) - 0.5) * 0.65 * size;
    const trunkTop = [x + leanX, height * 0.63, z + leanZ];
    branch([x, 0, z], [x + leanX * 0.4, height * 0.33, z + leanZ * 0.4], 0.24 * size);
    branch([x + leanX * 0.4, height * 0.33, z + leanZ * 0.4], trunkTop, 0.17 * size);
    const cast = detailed && x > -35 && x < 90 && z > -140 && z < 150;
    function crownCard(cx, cy, cz, key, width) {
      leafColor.set('#e6ead7').offsetHSL((hash(key, 621) - 0.5) * 0.018, 0, (hash(key, 623) - 0.5) * 0.08);
      instance(
        leafGeo,
        leaf,
        [cx, cy, cz],
        [width, width * (0.83 + hash(key, 625) * 0.32), 1],
        [(hash(key, 627) - 0.5) * 1.8, hash(key, 631) * Math.PI * 2, (hash(key, 633) - 0.5) * 1.5],
        leafColor.clone(),
        cast,
      );
    }
    const branches = detailed ? 7 : 4;
    for (let j = 0; j < branches; j++) {
      const key = id * 71 + j,
        angle = (j / branches) * Math.PI * 2 + hash(id, 607) * 2;
      const radial = spread * (0.5 + hash(key, 609) * 0.32),
        cy = height * (0.58 + hash(key, 611) * 0.22);
      const cx = x + Math.sin(angle) * radial,
        cz = z + Math.cos(angle) * radial;
      branch([x + leanX * 0.65, height * (0.38 + j * 0.027), z + leanZ * 0.65], [cx, cy, cz], 0.075 * size);
      const twigCount = detailed ? 3 : 2;
      for (let k = 0; k < twigCount; k++) {
        const sub = key * 7 + k,
          twist = angle + (hash(sub, 613) - 0.5) * 1.7;
        const tx = cx + Math.sin(twist) * spread * 0.28,
          ty = cy + (0.45 + hash(sub, 617)) * size,
          tz = cz + Math.cos(twist) * spread * 0.28;
        if (detailed) branch([cx, cy, cz], [tx, ty, tz], 0.025 * size);
        for (let c = 0; c < (detailed ? 5 : 3); c++) {
          const q = sub * 5 + c;
          crownCard(
            tx + (hash(q, 619) - 0.5) * size,
            ty + (hash(q, 621) - 0.5) * size,
            tz + (hash(q, 623) - 0.5) * size,
            q,
            (1.85 + hash(q, 625) * 0.65) * size,
          );
        }
      }
    }
    for (let j = 0; j < (detailed ? 57 : 32); j++) {
      const key = id * 91 + j,
        angle = hash(key, 637) * Math.PI * 2,
        r = Math.sqrt(hash(key, 641)) * spread * 0.65;
      const v = hash(key, 643),
        taper = narrow ? 0.5 + (1 - v) * 0.65 : 1;
      crownCard(
        x + Math.sin(angle) * r * taper,
        height * (0.55 + v * 0.4),
        z + Math.cos(angle) * r * taper,
        key,
        (1.85 + hash(key, 647) * 0.55) * size,
      );
    }
    treePositions.push([x, z, height]);
  }
  let treeId = 1;
  for (const [x, z, size] of [
    [43, 108, 1.05],
    [45, 47, 1.12],
    [43, -58, 1.1],
    [72, 26, 1.0],
    [-10, 102, 0.75],
    [-11, -88, 0.9],
    [-39, 65, 0.8],
    [48, 1, 0.95],
    [42, -106, 1.05],
  ])
    tree(x, z, treeId++, size);
  // Three broken woodland bands beyond the far bank close the horizon without moving with the car.
  for (let row = 0; row < 3; row++)
    for (let i = 0; i < 24; i++) {
      const id = row * 24 + i,
        x = 48 + row * 22 + hash(id, 651) * 9,
        z = -154 + i * 13.3 + (hash(id, 653) - 0.5) * 10;
      if (x < 75 && (Math.abs(z - 77) < 14 || Math.abs(z + 11) < 13)) continue;
      tree(x, z, treeId++, (row === 0 ? 1.03 : 1.2) + hash(id, 657) * 0.36, row === 0);
    }
  for (let i = 0; i < 118; i++) {
    const x = -275 + hash(i, 701) * 415,
      z = -245 + hash(i, 703) * 475;
    const insideCanal = x > 5 && x < 35 && z > -157 && z < 160;
    const innerField = x > -145 && x < -25 && z > -75 && z < 90;
    const houseFront = x > -31 && x < -8 && z > -70 && z < 90;
    if (insideCanal || nearRoad(x, z) || innerField || houseFront) continue;
    tree(x, z, treeId++, 0.9 + hash(i, 709) * 0.7, false);
  }
  for (let i = 0; i < 88; i++) {
    const angle = (i / 88) * Math.PI * 2,
      r = 235 + hash(i, 751) * 45;
    tree(-55 + Math.sin(angle) * r, Math.cos(angle) * r, treeId++, 1.45 + hash(i, 753) * 0.6, false);
  }
  for (let i = 0; i < 125; i++) {
    const along = -147 + hash(i, 801) * 300,
      side = i % 2 ? 6.5 : 31.6;
    const x = side + (hash(i, 803) - 0.5) * 1.1,
      height = 0.4 + hash(i, 807) * 0.38;
    for (let n = 0; n < 3; n++)
      instance(
        bladeGeo,
        reed,
        [x + (hash(i * 5 + n, 809) - 0.5) * 0.6, 0.1, along + (hash(i * 5 + n, 811) - 0.5) * 0.65],
        [0.55 + hash(i * 5 + n, 813) * 0.4, height, 1],
        [0, hash(i * 5 + n, 817) * Math.PI * 2, 0.03],
        null,
        false,
      );
  }
  for (let i = 0; i < 580; i++) {
    const d = hash(i, 821) * length,
      p = pose(d),
      right = new T.Vector3(-p.tangent.z, 0, p.tangent.x);
    const side = (i % 2 ? 1 : -1) * (4.2 + hash(i, 823) * 1.7),
      q = p.position.addScaledVector(right, side);
    if (q.x > 7 && q.x < 31 && q.z > -155 && q.z < 155) continue;
    leafColor.set('#e4e8d4').offsetHSL(0, 0, (hash(i, 827) - 0.5) * 0.1);
    for (let n = 0; n < 2; n++)
      instance(
        bladeGeo,
        grass,
        [q.x + (hash(i * 3 + n, 829) - 0.5) * 0.4, 0.01, q.z + (hash(i * 3 + n, 831) - 0.5) * 0.4],
        [0.46 + hash(i * 3 + n, 833) * 0.25, 0.15 + hash(i * 3 + n, 837) * 0.14, 1],
        [0, hash(i * 3 + n, 839) * Math.PI * 2, 0],
        leafColor.clone(),
        false,
      );
  }

  const wirePoints = [];
  for (let z = -101; z <= 125; z += 31) {
    branch([-7.2, 0, z], [-7.2, 6.1, z], 0.115);
    block(darkWood, [-7.2, 5.7, z], [1.5, 0.12, 0.16]);
    for (const dx of [-0.55, 0.55]) {
      block(joinery, [-7.2 + dx, 5.88, z], [0.1, 0.18, 0.1]);
      if (z < 117)
        for (let s = 0; s < 12; s++) {
          const a = s / 12,
            b = (s + 1) / 12;
          wirePoints.push(
            new T.Vector3(-7.2 + dx, 5.93 - Math.sin(a * Math.PI) * 0.44, z + a * 31),
            new T.Vector3(-7.2 + dx, 5.93 - Math.sin(b * Math.PI) * 0.44, z + b * 31),
          );
        }
    }
  }
  const wireMaterial = new T.LineBasicMaterial({ color: '#616757', transparent: true, opacity: 0.62 });
  materials.add(wireMaterial);
  const wires = new T.LineSegments(geo(new T.BufferGeometry().setFromPoints(wirePoints)), wireMaterial);
  group.add(wires);

  const stats = {
    model: 'Original fixed neighbourhood, canal and fields; authored metres, not a surveyed city',
    length,
    routePoints: curve.points.map((p) => p.toArray()),
    houses: 9,
    trees: treePositions.length,
    fixedWorld: true,
    segments: roadSamples,
    meshes: 0,
    instances: 0,
    materials: materials.size,
    water: 'Small procedural surface waves; not the raindrop simulation',
    sections: ['Canal street', 'Open fields', 'Neighbourhood'],
  };
  for (const batch of batches.values()) {
    const mesh = new T.InstancedMesh(batch.geometry, batch.material, batch.rows.length);
    mesh.castShadow = batch.cast;
    mesh.receiveShadow = true;
    for (let i = 0; i < batch.rows.length; i++) {
      const row = batch.rows[i];
      dummy.position.set(...row.p);
      dummy.scale.set(...row.s);
      dummy.rotation.set(...row.r);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      if (row.color) mesh.setColorAt(i, row.color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.computeBoundingSphere();
    group.add(mesh);
    stats.instances += batch.rows.length;
  }
  group.traverse((o) => {
    if (o.isMesh || o.isLineSegments) stats.meshes++;
  });
  let disposed = false,
    lastWaveTime = -Infinity;
  function update(time = 0) {
    if (disposed || (time >= lastWaveTime && time - lastWaveTime < 0.045)) return;
    lastWaveTime = time;
    const a = waterGeometry.attributes.position;
    for (let i = 0; i < a.count; i++) {
      const x = waterBase[i * 3],
        y = waterBase[i * 3 + 1];
      a.setZ(i, Math.sin(x * 2.3 + y * 0.38 + time * 0.85) * 0.017 + Math.sin(y * 1.2 - time * 0.5) * 0.01);
    }
    a.needsUpdate = true;
    waterGeometry.computeVertexNormals();
    water.color.copy(waterColor);
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    scene.remove(group);
    for (const g of geometries) g.dispose();
    for (const m of materials) m.dispose();
    for (const t of textures) t.dispose();
  }
  return {
    curve,
    length,
    pose,
    update,
    stats,
    waveState() {
      let hash = 2166136261;
      for (let i = 2; i < waterGeometry.attributes.position.array.length; i += 3)
        hash = Math.imul(hash ^ Math.round(waterGeometry.attributes.position.array[i] * 1e6), 16777619);
      return { time: lastWaveTime, signature: (hash >>> 0).toString(16) };
    },
    dispose,
  };
}
