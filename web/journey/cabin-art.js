import * as T from 'three';
import { applyPixelArt as baseArt } from './pixel-art.js';

// Low-contrast authored maps. Filtering is restricted to surface minification and coverage;
// the final 320-by-180 image still expands in exact integer blocks.
export function applyComfortArt(cabin, scene) {
  const diagnostics = [];
  cabin.traverse((o) => {
    if (!o.isMesh) return;
    let n = o,
      yes = false;
    while (n) {
      if (n.userData.diagnostic) yes = true;
      n = n.parent;
    }
    if (yes) diagnostics.push({ object: o, material: o.material });
  });
  const art = baseArt(cabin, scene);
  for (const item of diagnostics) item.object.material = item.material;
  const get = (name) => art.textureSamples.find((s) => s.name === name);
  function paint(name, fn) {
    const item = get(name);
    if (!item) return;
    const c = item.canvas.getContext('2d');
    c.clearRect(0, 0, item.width, item.height);
    fn(c, item.width, item.height);
    item.texture.needsUpdate = true;
  }
  function fill(c, color, x, y, w, h) {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
  }
  paint('cloth', (c, w, h) => {
    fill(c, '#42636a', 0, 0, w, h);
    fill(c, '#4a6b70', 5, 0, 2, h);
    fill(c, '#3d5c64', 26, 0, 1, h);
  });
  paint('insert', (c, w, h) => {
    fill(c, '#8aa49a', 0, 0, w, h);
    fill(c, '#94ad9f', 6, 0, 3, h);
    fill(c, '#829d94', 22, 0, 2, h);
  });
  paint('plastic', (c, w, h) => {
    fill(c, '#7c9288', 0, 0, w, h);
    fill(c, '#81988c', 0, 0, w, 1);
  });
  paint('headliner', (c, w, h) => fill(c, '#c0c4ae', 0, 0, w, h));
  paint('carpet', (c, w, h) => {
    fill(c, '#46574e', 0, 0, w, h);
    fill(c, '#4a5b52', 0, 0, w, 3);
  });
  paint('ground', (c, w, h) => {
    fill(c, '#8c9b76', 0, 0, w, h);
    for (const [x, y, a, b] of [
      [0, 0, 12, 6],
      [18, 11, 14, 7],
      [3, 22, 14, 8],
    ])
      fill(c, '#92a17b', x, y, a, b);
  });
  get('ground')?.texture.repeat.set(45, 45);
  paint('road', (c, w, h) => {
    fill(c, '#62656b', 0, 0, w, h);
    fill(c, '#676a70', 0, 0, 1, h);
  });
  paint('leaves', (c) => {
    for (const [x, y, w, h] of [
      [9, 2, 13, 10],
      [3, 8, 16, 13],
      [15, 9, 14, 13],
      [7, 19, 17, 10],
    ]) {
      fill(c, '#486957', x, y, w, h);
      fill(c, '#557762', x, y, w, h - 3);
      fill(c, '#64846c', x + 2, y, w - 4, 2);
    }
  });
  const ramps = new Set(),
    calmRamp = new T.DataTexture(new Uint8Array([98, 123, 148, 173, 198, 222]), 6, 1, T.RedFormat);
  calmRamp.minFilter = calmRamp.magFilter = T.LinearFilter;
  calmRamp.generateMipmaps = false;
  calmRamp.needsUpdate = true;
  const stats = {
    drawing: 'Low-contrast original pixel maps, direct native-grid rendering',
    diagnosticMaterialsPreserved: diagnostics.length,
    peripheralTuftsBefore: 0,
    peripheralTuftsAfter: 0,
  };
  scene.traverse((o) => {
    if (!o.isMesh || o.userData.authoredWorld || diagnostics.some((d) => d.object === o)) return;
    for (const m of [].concat(o.material || [])) {
      if (m.isMeshToonMaterial) {
        m.gradientMap = calmRamp;
        ramps.add(m);
      }
      if (m.alphaTest > 0) {
        m.alphaToCoverage = true;
        m.alphaTest = Math.min(m.alphaTest, 0.28);
      }
      if (m.map?.name === 'authored-pixels-grass-tuft' && o.isInstancedMesh) {
        stats.peripheralTuftsBefore += o.count;
        o.count = Math.min(o.count, 900);
        stats.peripheralTuftsAfter += o.count;
      }
    }
  });
  const maps = art.textureSamples.map((item) => {
    const bytes = item.canvas.getContext('2d').getImageData(0, 0, item.width, item.height).data;
    let hash = 2166136261;
    const colours = new Set();
    for (let i = 0; i < bytes.length; i++) {
      hash = Math.imul(hash ^ bytes[i], 16777619);
      if (i % 4 === 0) colours.add(`${bytes[i]},${bytes[i + 1]},${bytes[i + 2]},${bytes[i + 3]}`);
    }
    return {
      name: item.name,
      width: item.width,
      height: item.height,
      colours: colours.size,
      pixelHash: (hash >>> 0).toString(16),
    };
  });
  stats.maps = maps;
  stats.shadedMaterials = ramps.size;
  stats.lightSteps = 6;
  stats.lightTransition = 'interpolated surface lighting, no screen blur';
  return {
    ...art,
    stats: { ...art.stats, comfort: stats },
    dispose() {
      art.dispose();
      calmRamp.dispose();
    },
  };
}
