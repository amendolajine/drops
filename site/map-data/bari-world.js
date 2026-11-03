import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { bariCoastLonLat, bariRouteLonLat, bariSource } from '../assets/geography/bari-data.js';

export const bariDetailScope = Object.freeze({
  startM: 760,
  endM: 980,
  extendedStartM: 600,
  extendedEndM: 1120,
  buildingHeightsM: [13.2, 16.5, 18.8, 15.8],
  roadWidthM: 10,
  pavementWidthM: 5.5,
  wallHeightM: 0.74,
  wallWidthM: 0.46,
  lampSpacingM: 27,
  lampHeightM: 5.46,
});
const detailScope = bariDetailScope;
const SOURCE_DEVIATION_LIMIT = 0.75;
const CONTROL_SPACING = 4;
const ROAD_SPACING = 1;

function project(lonLat) {
  const [originLon, originLat] = bariSource.originLonLat;
  return new THREE.Vector3(
    (lonLat[0] - originLon) * 111320 * Math.cos((originLat * Math.PI) / 180),
    0,
    -(lonLat[1] - originLat) * 111320,
  );
}
function distanceToSegment(point, a, b) {
  const edge = b.clone().sub(a);
  const t = THREE.MathUtils.clamp(point.clone().sub(a).dot(edge) / edge.lengthSq(), 0, 1);
  return point.distanceTo(a.clone().addScaledVector(edge, t));
}

export function createBariPath() {
  const sourcePoints = bariRouteLonLat.map(project);
  const controls = [sourcePoints[0].clone()];
  for (let i = 1; i < sourcePoints.length; i++) {
    const a = sourcePoints[i - 1],
      b = sourcePoints[i];
    const count = Math.ceil(a.distanceTo(b) / CONTROL_SPACING);
    for (let step = 1; step <= count; step++) controls.push(a.clone().lerp(b, step / count));
  }
  const curve = new THREE.CatmullRomCurve3(controls, false, 'centripetal');
  curve.arcLengthDivisions = 65536;
  curve.updateArcLengths();
  const length = curve.getLength();
  // A cubic Bezier stays inside the convex hull of its controls. The maximum
  // control distance to the source segment therefore bounds each whole span.
  let sourceDeviationBound = 0;
  for (let i = 0; i < controls.length - 1; i++) {
    const a = controls[i],
      b = controls[i + 1],
      count = controls.length - 1;
    const q1 = curve.getPoint((i + 1 / 3) / count),
      q2 = curve.getPoint((i + 2 / 3) / count);
    const v1 = q1.multiplyScalar(27).addScaledVector(a, -8).sub(b);
    const v2 = q2.multiplyScalar(27).sub(a).addScaledVector(b, -8);
    const c1 = v1.clone().multiplyScalar(2).sub(v2).divideScalar(18);
    const c2 = v2.clone().multiplyScalar(2).sub(v1).divideScalar(18);
    sourceDeviationBound = Math.max(
      sourceDeviationBound,
      distanceToSegment(c1, a, b),
      distanceToSegment(c2, a, b),
    );
  }
  sourceDeviationBound += 1e-6;
  if (sourceDeviationBound > SOURCE_DEVIATION_LIMIT)
    throw new Error('Bari curve exceeds its source deviation limit');
  const pose = (distance) => {
    const clamped = THREE.MathUtils.clamp(
      typeof distance === 'number' && !Number.isNaN(distance) ? distance : 0,
      0,
      length,
    );
    const fraction = clamped / length;
    return {
      position: curve.getPointAt(fraction),
      tangent: curve.getTangentAt(fraction).normalize(),
      section:
        clamped >= detailScope.startM && clamped <= detailScope.endM
          ? 'piazza-diaz-study'
          : 'coastal-massing',
    };
  };
  const intervals = Math.ceil(length / ROAD_SPACING);
  const roadPoints = Array.from({ length: intervals + 1 }, (_, i) => pose((length * i) / intervals).position);
  return {
    length,
    pose,
    sourcePoints,
    roadPoints,
    curve,
    info: Object.freeze({
      id: `${bariSource.id}-centripetal-v1`,
      sourceNodeCount: sourcePoints.length,
      derivedControlCount: controls.length,
      controlSpacingMetres: CONTROL_SPACING,
      arcLengthDivisions: 65536,
      sourceDeviationBoundMetres: sourceDeviationBound,
      sourceDeviationLimitMetres: SOURCE_DEVIATION_LIMIT,
      roadSpacingMetres: length / intervals,
      closed: false,
    }),
  };
}
function texture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  draw(ctx, w, h);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.magFilter = THREE.NearestFilter;
  map.minFilter = THREE.NearestMipmapNearestFilter;
  map.generateMipmaps = true;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  return map;
}
function facadeMap(kind = 0) {
  return texture(128, 96, (c, w, h) => {
    const bases = ['#d0c7b3', '#d8d0bd', '#c1baa9', '#d8d1c1'];
    c.fillStyle = bases[kind % 4];
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#aaa18e';
    c.fillRect(0, 77, w, 19);
    for (let row = 0; row < 4; row++) {
      const y = 8 + row * 20;
      c.fillStyle = '#b9b19f';
      c.fillRect(0, y + 14, w, 1);
      for (let col = 0; col < 6; col++) {
        const x = 8 + col * 20;
        c.fillStyle = '#e5deca';
        c.fillRect(x - 1, y - 1, 11, 16);
        c.fillStyle = '#454f50';
        c.fillRect(x, y, 9, 14);
        if ((row + col + kind) % 4 === 0) {
          c.fillStyle = '#7c8278';
          c.fillRect(x, y, 9, 14);
          c.fillStyle = '#666f67';
          for (let a = 2; a < 14; a += 3) c.fillRect(x, y + a, 9, 1);
        } else {
          c.fillStyle = '#85908a';
          c.fillRect(x + 1, y + 1, 3, 8);
          c.fillStyle = '#b0b0a1';
          c.fillRect(x + 5, y + 1, 2, 4);
          c.fillStyle = '#c8bea7';
          c.fillRect(x + 4, y, 1, 14);
        }
        c.fillStyle = '#e0d8c0';
        c.fillRect(x - 2, y + 14, 13, 2);
      }
    }
    c.fillStyle = '#4a504c';
    c.fillRect(55, 79, 17, 17);
    c.fillStyle = '#b6ae9a';
    c.fillRect(58, 82, 11, 14);
    c.fillStyle = '#5b625a';
    c.fillRect(59, 82, 9, 14);
    c.fillStyle = '#e0d7c0';
    c.fillRect(0, 0, w, 3);
    c.fillRect(0, 75, w, 2);
  });
}
function makeMaterials() {
  const stoneMap = texture(32, 16, (c, w, h) => {
    c.fillStyle = '#c8c0a8';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#b9b39f';
    c.fillRect(0, 7, w, 1);
    c.fillRect(15, 0, 1, 7);
    c.fillRect(3, 8, 1, 8);
    c.fillStyle = '#d5cdb4';
    c.fillRect(0, 0, w, 1);
    c.fillRect(0, 8, w, 1);
  });
  const pavementMap = texture(32, 32, (c) => {
    c.fillStyle = '#c0bba8';
    c.fillRect(0, 0, 32, 32);
    c.fillStyle = '#b5b19f';
    c.fillRect(0, 15, 32, 1);
    c.fillRect(0, 31, 32, 1);
    c.fillRect(15, 0, 1, 15);
    c.fillRect(7, 16, 1, 15);
  });
  const asphaltMap = texture(32, 32, (c) => {
    c.fillStyle = '#6b706c';
    c.fillRect(0, 0, 32, 32);
    c.fillStyle = '#696d69';
    for (let i = 0; i < 16; i++) c.fillRect((i * 13) % 32, (i * 7) % 32, 1, 1);
  });
  const mats = {
    stone: new THREE.MeshToonMaterial({ map: stoneMap, color: '#ffffff' }),
    pavement: new THREE.MeshToonMaterial({ map: pavementMap, color: '#ffffff' }),
    asphalt: new THREE.MeshToonMaterial({ map: asphaltMap, color: '#ffffff', side: THREE.DoubleSide }),
    metal: new THREE.MeshToonMaterial({ color: '#3f4c4b' }),
    glass: new THREE.MeshToonMaterial({ color: '#d9d4bb', emissive: '#edc58a', emissiveIntensity: 0 }),
    cornice: new THREE.MeshToonMaterial({ color: '#ded6c0' }),
  };

  mats.glass.emissiveIntensity = 0.18;
  mats.sea = new THREE.MeshToonMaterial({
    color: '#7896a0',
    map: texture(32, 32, (c) => {
      c.fillStyle = '#c6d0cf';
      c.fillRect(0, 0, 32, 32);
      c.fillStyle = '#cbd5d3';
      c.fillRect(2, 7, 9, 1);
      c.fillRect(17, 21, 8, 1);
    }),
  });
  return mats;
}
function mesh(scene, g, m, x, y, z) {
  const v = new THREE.Mesh(g, m);
  v.position.set(x, y, z);
  scene.add(v);
  return v;
}
function box(scene, w, h, d, x, y, z, m) {
  return mesh(scene, new THREE.BoxGeometry(w, h, d), m, x, y, z);
}
function ribbonGeometry(points, offsetA, offsetB, y) {
  const positions = [],
    uv = [],
    idx = [];
  let run = 0;
  for (let i = 0; i < points.length; i++) {
    if (i) run += points[i].distanceTo(points[i - 1]);
    const f = points[Math.min(points.length - 1, i + 1)]
        .clone()
        .sub(points[Math.max(0, i - 1)])
        .normalize(),
      r = new THREE.Vector3(-f.z, 0, f.x);
    for (const offset of [offsetA, offsetB]) {
      const p = points[i].clone().addScaledVector(r, offset);
      positions.push(p.x, y, p.z);
      uv.push(run / 2, offset / 2);
    }
    if (i) {
      const j = i * 2;
      idx.push(j - 2, j - 1, j, j - 1, j + 1, j);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function ribbon(points, offsetA, offsetB, y, material) {
  const v = new THREE.Mesh(ribbonGeometry(points, offsetA, offsetB, y), material);
  v.material.side = THREE.DoubleSide;
  return v;
}
export function createBariRoadGeometry(path) {
  return ribbonGeometry(path.roadPoints, -5, 5, 0);
}
function lanternPrototype() {
  const metal = [],
    glass = [];
  const place = (g, m, x, y, z, rz = 0) => {
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rz),
      new THREE.Vector3(1, 1, 1),
    );
    g.applyMatrix4(matrix);
    m.push(g);
  };
  place(new THREE.CylinderGeometry(0.29, 0.34, 0.22, 8), metal, 0, 0.11, 0);
  place(new THREE.CylinderGeometry(0.13, 0.18, 0.55, 8), metal, 0, 0.43, 0);
  place(new THREE.CylinderGeometry(0.075, 0.12, 3.2, 8), metal, 0, 2.27, 0);
  place(new THREE.CylinderGeometry(0.18, 0.18, 0.11, 8), metal, 0, 3.86, 0);
  for (const sign of [-1, 1]) {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 3.8, 0),
      new THREE.Vector3(sign * 0.65, 3.45, 0),
      new THREE.Vector3(sign * 0.84, 4.2, 0),
    );
    metal.push(new THREE.TubeGeometry(curve, 8, 0.045, 5, false));
  }
  for (const [x, y] of [
    [-0.84, 4.2],
    [0, 4.42],
    [0.84, 4.2],
  ]) {
    place(new THREE.CylinderGeometry(0.18, 0.11, 0.16, 4), metal, x, y, 0);
    place(new THREE.CylinderGeometry(0.26, 0.18, 0.55, 4), glass, x, y + 0.35, 0);
    place(new THREE.ConeGeometry(0.34, 0.22, 4), metal, x, y + 0.75, 0);
    place(new THREE.CylinderGeometry(0.035, 0.035, 0.18, 4), metal, x, y + 0.95, 0);
    for (const side of [-1, 1])
      place(new THREE.BoxGeometry(0.045, 0.58, 0.045), metal, x + side * 0.15, y + 0.35, side * 0.15);
  }
  return { metal: mergeGeometries(metal), glass: mergeGeometries(glass) };
}

export function createBariWorld(rootScene) {
  const scene = new THREE.Group();
  scene.name = 'BariWorld';
  rootScene.add(scene);
  const path = createBariPath();
  const { length } = path;
  const points = path.roadPoints;
  const coastPoints = bariCoastLonLat.map(project).map((p) => p.toArray());
  const sample = (distance) => {
    const pose = path.pose(distance);
    return { p: pose.position, f: pose.tangent };
  };
  const mats = makeMaterials();
  const shape = new THREE.Shape();
  coastPoints.forEach(([x, , z], i) => {
    if (i) shape.lineTo(x, -z);
    else shape.moveTo(x, -z);
  });
  const first = coastPoints[0],
    last = coastPoints.at(-1);
  shape.lineTo(last[0] - 1700, -last[2] - 1700);
  shape.lineTo(first[0] - 1700, -first[2] - 1700);
  shape.closePath();
  const land = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshToonMaterial({ color: '#bdb8a5' }),
  );
  land.rotation.x = -Math.PI / 2;
  land.position.y = -0.1;
  land.name = 'BariLand';
  scene.add(land);
  const sea = mesh(scene, new THREE.PlaneGeometry(6500, 6500), mats.sea, -500, -1.25, -400);
  sea.rotation.x = -Math.PI / 2;
  sea.name = 'BariSea';
  scene.add(ribbon(points, -8, -5, 0.12, mats.pavement));
  scene.add(ribbon(points, 5, 8, 0.12, mats.pavement));
  const road = new THREE.Mesh(createBariRoadGeometry(path), mats.asphalt);
  road.name = 'BariRoad';
  road.userData.pathId = path.info.id;
  road.userData.halfWidthMetres = 5;
  scene.add(road);
  const coast = coastPoints.map((p) => new THREE.Vector3(...p));
  scene.add(ribbon(coast, -5.5, -0.15, 0.14, mats.pavement));
  // Continuous parapet faces. Coastline is source data; the vertical section is an explicit fitting assumption.
  const wallG = [];
  for (let i = 1; i < coast.length; i++) {
    const a = coast[i - 1],
      b = coast[i],
      delta = b.clone().sub(a),
      distance = delta.length(),
      mid = a.clone().add(b).multiplyScalar(0.5);
    const g = new THREE.BoxGeometry(0.46, 0.74, distance + 0.04);
    g.applyMatrix4(
      new THREE.Matrix4().compose(
        new THREE.Vector3(mid.x, 0.51, mid.z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(delta.x, delta.z)),
        new THREE.Vector3(1, 1, 1),
      ),
    );
    wallG.push(g);
  }
  scene.add(new THREE.Mesh(mergeGeometries(wallG), mats.stone));
  const lamp = lanternPrototype(),
    positions = [];
  for (let m = 10; m < length - 10; m += 27) {
    const { p, f } = sample(m),
      r = new THREE.Vector3(-f.z, 0, f.x),
      v = p.clone().addScaledVector(r, 7.1);
    positions.push({ m, p: v, f });
  }
  for (const [key, g] of Object.entries(lamp)) {
    const inst = new THREE.InstancedMesh(g, mats[key], positions.length);
    inst.name = key === 'glass' ? 'BariLanternGlass' : 'BariLanternMetal';
    positions.forEach((q, i) => {
      inst.setMatrixAt(
        i,
        new THREE.Matrix4().compose(
          q.p,
          new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(q.f.x, q.f.z)),
          new THREE.Vector3(1, 1, 1),
        ),
      );
    });
    scene.add(inst);
  }
  const faceMaterials = [0, 1, 2, 3].map(
    (i) => new THREE.MeshToonMaterial({ map: facadeMap(i), color: '#ffffff' }),
  );
  for (let m = 40, j = 0; m < length - 30; m += 38, j++) {
    const { p, f } = sample(m),
      r = new THREE.Vector3(-f.z, 0, f.x),
      center = p.clone().addScaledVector(r, -24),
      group = new THREE.Group(),
      h = detailScope.buildingHeightsM[j % 4],
      width = [30, 34, 31, 27][j % 4],
      depth = 17;
    group.position.copy(center);
    group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f, new THREE.Vector3(0, 1, 0), r));
    scene.add(group);
    const detailed = m >= detailScope.extendedStartM && m <= detailScope.extendedEndM;
    const core = new THREE.Mesh(
      new THREE.BoxGeometry(width, h, depth),
      new THREE.MeshToonMaterial({ color: ['#cfc5ae', '#d6cdb7', '#bab4a1', '#d1c9b7'][j % 4] }),
    );
    core.position.y = h / 2;
    group.add(core);
    if (detailed) {
      const face = new THREE.Mesh(new THREE.PlaneGeometry(width, h), faceMaterials[j % 4]);
      face.position.set(0, h / 2, depth / 2 + 0.025);
      group.add(face);
      box(group, width + 0.45, 0.24, depth + 0.6, 0, h + 0.05, 0, mats.cornice);
      box(group, width + 0.15, 0.2, 0.28, 0, 3.1, depth / 2 + 0.14, mats.cornice);
      for (let floor = 1; floor < 4; floor++) {
        const y = 3.15 + (floor * (h - 3.2)) / 4;
        box(group, width + 0.08, 0.15, 0.2, 0, y, depth / 2 + 0.11, mats.cornice);
      }
      if (j % 3 === 0) {
        for (let k = 0; k < 3; k++) {
          const bx = -width * 0.3 + k * width * 0.3;
          box(group, 2.6, 0.16, 1.15, bx, 7.5, depth / 2 + 0.55, mats.cornice);
          box(group, 2.6, 0.58, 0.06, bx, 7.85, depth / 2 + 1.1, mats.metal);
        }
      }
    }
  }
  // Original low planting volume inside the promenade, not a claim about a historical garden.
  const trees = new THREE.Group();
  scene.add(trees);
  for (let m = 1030; m < 1110; m += 19) {
    const { p, f } = sample(m),
      r = new THREE.Vector3(-f.z, 0, f.x),
      v = p.clone().addScaledVector(r, -9.5);
    mesh(
      trees,
      new THREE.CylinderGeometry(0.1, 0.15, 2.6, 5),
      new THREE.MeshToonMaterial({ color: '#726b55' }),
      v.x,
      1.3,
      v.z,
    );
    const crown = mesh(
      trees,
      new THREE.IcosahedronGeometry(1.8, 0),
      new THREE.MeshToonMaterial({ color: '#6e7b66' }),
      v.x,
      3.6,
      v.z,
    );
    crown.scale.set(1.3, 0.8, 1.05);
  }

  scene.traverse((object) => {
    if (object.isMesh) object.userData.authoredWorld = true;
  });
  scene.userData.source = bariSource;
  scene.userData.curveInfo = path.info;
  const ownedGeometries = new Set(),
    ownedMaterials = new Set(),
    ownedTextures = new Set(),
    ownedInstances = [];
  scene.traverse((object) => {
    if (object.geometry) ownedGeometries.add(object.geometry);
    if (object.isInstancedMesh) ownedInstances.push(object);
    if (object.material)
      for (const material of Array.isArray(object.material) ? object.material : [object.material])
        ownedMaterials.add(material);
  });
  for (const material of ownedMaterials)
    for (const value of Object.values(material)) if (value?.isTexture) ownedTextures.add(value);
  let disposed = false;
  function update(time) {
    if (disposed) return;
    const phase = Number.isFinite(time) ? time : 0;
    mats.sea.map.offset.x = (((phase * 0.007) % 1) + 1) % 1;
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    for (const instance of ownedInstances) instance.dispose();
    for (const texture of ownedTextures) texture.dispose();
    for (const material of ownedMaterials) material.dispose();
    for (const geometry of ownedGeometries) geometry.dispose();
    scene.removeFromParent();
  }
  return {
    length,
    pose: path.pose,
    update,
    dispose,
    group: scene,
    source: bariSource,
    curveInfo: path.info,
    detailScope: bariDetailScope,
  };
}
