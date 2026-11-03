import * as T from 'three';

// Small authored surface maps. The reference photographs are never used as textures.
export function createPandaMaterials() {
  const textures = [],
    materials = [];
  function map(name, size, base, paint) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);
    paint?.(ctx, size);
    const t = new T.CanvasTexture(c);
    t.name = `panda-original-${name}`;
    t.colorSpace = T.SRGBColorSpace;
    t.wrapS = t.wrapT = T.RepeatWrapping;
    t.magFilter = T.NearestFilter;
    t.minFilter = T.NearestMipmapLinearFilter;
    t.anisotropy = 1;
    textures.push(t);
    return t;
  }
  const cloth = map('cloth', 32, '#454c4c', (c, s) => {
    c.fillStyle = '#495050';
    for (let y = 0; y < s; y += 8) c.fillRect(0, y, s, 1);
    c.fillStyle = '#414848';
    c.fillRect(6, 0, 1, s);
    c.fillRect(26, 0, 1, s);
  });
  const rubber = map('rubber', 16, '#282d2c', (c, s) => {
    c.fillStyle = '#2c312f';
    c.fillRect(0, 0, s, 1);
  });
  const roof = map('headliner', 16, '#b9b9ac');
  const floor = map('floor', 16, '#373c37', (c, s) => {
    c.fillStyle = '#3b403a';
    for (let y = 0; y < s; y += 4) c.fillRect(0, y, s, 1);
  });
  const ramp = new T.DataTexture(new Uint8Array([98, 123, 148, 173, 198, 222]), 6, 1, T.RedFormat);
  ramp.minFilter = ramp.magFilter = T.LinearFilter;
  ramp.generateMipmaps = false;
  ramp.needsUpdate = true;
  textures.push(ramp);
  function mat(name, color, texture = null) {
    const m = new T.MeshToonMaterial({ color, map: texture, gradientMap: ramp });
    m.name = `panda-${name}`;
    m.userData.pandaOriginal = true;
    materials.push(m);
    return m;
  }
  const m = {
    paint: mat('paint', '#ddd9c9'),
    doorBlack: mat('door-black', '#565b55', rubber),
    seat: mat('seat', '#ffffff', cloth),
    seatInset: mat('seat-insert', '#f2f1e6', cloth),
    headliner: mat('headliner', '#ffffff', roof),
    rubber: mat('rubber', '#1c2321'),
    dark: mat('dark', '#313a34'),
    chrome: mat('steel', '#9fa79f'),
    belt: mat('belt', '#323733'),
    carpet: mat('carpet', '#ffffff', floor),
    cassette: mat('cassette', '#6d6755'),
    label: mat('label', '#c6a888'),
    display: mat('display', '#d0ad6d'),
    lamp: mat('lamp', '#d2c7a2'),
    rearLamp: mat('rear-lamp', '#b65d45'),
    indicator: mat('indicator', '#c59455'),
  };
  m.windowSeal = mat('window-seal', '#262d28');
  m.windowSeal.side = T.DoubleSide;
  m.glass = new T.MeshPhysicalMaterial({
    color: '#c2d1c8',
    transparent: true,
    opacity: 0.028,
    roughness: 0.07,
    metalness: 0,
    depthWrite: false,
    side: T.DoubleSide,
  });
  m.glass.name = 'panda-glass';
  materials.push(m.glass);
  return {
    m,
    textures,
    materials,
    dispose() {
      for (const material of materials) material.dispose();
      for (const texture of textures) texture.dispose();
    },
  };
}
