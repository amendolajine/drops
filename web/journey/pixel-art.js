import * as T from 'three';

// Original pixel maps. Shapes are placed on their own small grids, not reduced from photographs.
export const PIXEL_PALETTE = Object.freeze([
  '#142c32',
  '#21414b',
  '#315864',
  '#47727a',
  '#699191',
  '#90afa5',
  '#bbc3a8',
  '#e4d9b7',
  '#432f35',
  '#6e4841',
  '#9c6653',
  '#c58b6f',
  '#dfa585',
  '#edc39a',
  '#f5dcb4',
  '#203b38',
  '#36584a',
  '#4e7356',
  '#71905f',
  '#94a66f',
  '#b6bc88',
  '#3f637c',
  '#658da3',
  '#8cb4c4',
  '#b0cdd0',
  '#d3ded1',
  '#f1e7cc',
  '#403d49',
  '#686173',
  '#958b91',
  '#c6b3a8',
  '#eece9c',
]);

function imageHash(context, width, height) {
  const bytes = context.getImageData(0, 0, width, height).data;
  let value = 2166136261;
  for (const byte of bytes) value = Math.imul(value ^ byte, 16777619);
  return (value >>> 0).toString(16).padStart(8, '0');
}

export function applyPixelArt(cabinGroup, landscapeGroupOrScene) {
  const palette = [...PIXEL_PALETTE],
    maps = new Map(),
    materials = new Set(),
    assignments = [],
    colors = [];
  const textureSamples = [],
    visited = new Set(),
    cabinMeshes = new Set();
  cabinGroup.traverse((object) => {
    if (object.isMesh) cabinMeshes.add(object);
  });
  const changes = { materials: 0, meshes: 0, instanceColors: 0, lampPreserved: 0, transparentPreserved: 0 };

  function pixels(name, width, height, paint, repeat = [1, 1], alpha = false) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    const fill = (color, x, y, w, h) => {
      context.fillStyle = color;
      context.fillRect(x, y, w, h);
    };
    paint(context, fill, width, height);
    const texture = new T.CanvasTexture(canvas);
    texture.name = `authored-pixels-${name}`;
    texture.colorSpace = T.SRGBColorSpace;
    texture.magFilter = T.NearestFilter;
    // The displayed texel stays hard. Gradual mip transitions reduce distant texture flicker.
    texture.minFilter = T.NearestMipmapLinearFilter;
    texture.generateMipmaps = true;
    texture.wrapS = texture.wrapT = alpha ? T.ClampToEdgeWrapping : T.RepeatWrapping;
    texture.repeat.set(...repeat);
    texture.anisotropy = 1;
    const item = { name, width, height, colors: new Set() };
    const bytes = context.getImageData(0, 0, width, height).data;
    for (let i = 0; i < bytes.length; i += 4)
      item.colors.add(`${bytes[i]},${bytes[i + 1]},${bytes[i + 2]},${bytes[i + 3]}`);
    item.colors = item.colors.size;
    item.pixelHash = imageHash(context, width, height);
    textureSamples.push({ ...item, texture, canvas });
    maps.set(name, texture);
    return texture;
  }

  const cloth = pixels('cloth', 32, 32, (_, f) => {
    f(palette[2], 0, 0, 32, 32);
    f(palette[3], 3, 0, 3, 32);
    f(palette[1], 6, 0, 1, 32);
    f(palette[3], 20, 0, 2, 32);
    f(palette[1], 22, 0, 1, 32);
    f(palette[1], 0, 28, 32, 4);
    f(palette[2], 0, 28, 5, 2);
    f(palette[2], 20, 28, 7, 2);
  });
  const insert = pixels('insert', 32, 32, (_, f) => {
    f(palette[5], 0, 0, 32, 32);
    f(palette[4], 0, 0, 2, 32);
    f(palette[4], 30, 0, 2, 32);
    f(palette[6], 6, 0, 3, 32);
    f(palette[4], 20, 0, 2, 32);
    f(palette[4], 0, 27, 32, 2);
    f(palette[5], 2, 27, 13, 1);
  });
  const plastic = pixels('plastic', 16, 16, (_, f) => {
    f(palette[4], 0, 0, 16, 16);
    f(palette[5], 0, 0, 16, 2);
    f(palette[3], 0, 13, 16, 3);
    f(palette[3], 13, 2, 3, 12);
    f(palette[5], 2, 3, 4, 1);
  });
  const headliner = pixels('headliner', 16, 16, (_, f) => {
    f(palette[6], 0, 0, 16, 16);
  });
  const carpet = pixels(
    'carpet',
    16,
    16,
    (_, f) => {
      f(palette[15], 0, 0, 16, 16);
      f(palette[16], 0, 2, 7, 3);
      f(palette[16], 9, 10, 7, 3);
      f(palette[0], 4, 8, 6, 2);
    },
    [3, 3],
  );
  const chrome = pixels('metal', 8, 16, (_, f) => {
    f(palette[5], 0, 0, 8, 16);
    f(palette[7], 1, 0, 2, 16);
    f(palette[4], 6, 0, 2, 16);
  });
  const paper = pixels('paper', 16, 16, (_, f) => {
    f(palette[7], 0, 0, 16, 16);
    f(palette[6], 0, 13, 16, 3);
    f(palette[30], 0, 15, 16, 1);
  });
  const cassetteMap = pixels('cassette', 32, 16, (_, f) => {
    f(palette[28], 0, 0, 32, 16);
    f(palette[29], 2, 1, 28, 3);
    f(palette[27], 0, 13, 32, 3);
    f(palette[0], 7, 6, 5, 5);
    f(palette[0], 21, 6, 5, 5);
    f(palette[7], 8, 7, 3, 3);
    f(palette[7], 22, 7, 3, 3);
    f(palette[11], 12, 5, 9, 5);
  });
  const grassMap = pixels(
    'ground',
    32,
    32,
    (_, f) => {
      f(palette[18], 0, 0, 32, 32);
      for (const [x, y, w, h] of [
        [0, 0, 9, 4],
        [18, 5, 14, 5],
        [4, 16, 11, 5],
        [18, 27, 13, 5],
      ])
        f(palette[19], x, y, w, h);
      for (const [x, y, w, h] of [
        [8, 5, 5, 2],
        [23, 18, 9, 3],
        [0, 25, 5, 3],
      ])
        f(palette[17], x, y, w, h);
    },
    [90, 90],
  );
  const roadMap = pixels('road', 32, 32, (_, f) => {
    f(palette[27], 0, 0, 32, 32);
    f(palette[28], 0, 0, 2, 32);
    f(palette[28], 30, 0, 2, 32);
    f(palette[28], 11, 2, 3, 2);
    f(palette[28], 23, 20, 3, 1);
    f(palette[28], 4, 15, 4, 1);
  });
  const plaster = pixels('plaster', 32, 32, (_, f) => {
    f(palette[12], 0, 0, 32, 32);
    f(palette[13], 0, 0, 32, 4);
    f(palette[11], 0, 28, 32, 4);
    f(palette[11], 23, 20, 9, 3);
  });
  const roofMap = pixels(
    'roof',
    32,
    32,
    (_, f) => {
      f(palette[3], 0, 0, 32, 32);
      for (let y = 0; y < 32; y += 8) {
        f(palette[1], 0, y + 6, 32, 2);
        f(palette[4], 0, y, 32, 1);
        for (let x = y % 16 ? 0 : 8; x < 32; x += 16) f(palette[2], x, y, 2, 6);
      }
    },
    [2, 2],
  );
  const leafMap = pixels(
    'leaves',
    32,
    32,
    (_, f) => {
      const clusters = [
        [10, 1, 9, 7],
        [4, 5, 9, 9],
        [17, 4, 10, 9],
        [1, 12, 11, 8],
        [12, 9, 12, 13],
        [23, 12, 8, 9],
        [7, 21, 12, 7],
        [18, 21, 9, 7],
      ];
      for (const [x, y, w, h] of clusters) {
        f(palette[16], x + 1, y + 2, w - 2, h - 1);
        f(palette[17], x, y + 2, w, h - 3);
        f(palette[18], x + 1, y, w - 3, 3);
        f(palette[19], x + 2, y, Math.max(2, w - 6), 1);
      }
      f(palette[16], 15, 20, 2, 12);
      f(palette[16], 10, 24, 5, 2);
      f(palette[16], 17, 21, 6, 2);
    },
    [1, 1],
    true,
  );
  const grassTuft = pixels(
    'grass-tuft',
    16,
    16,
    (_, f) => {
      f(palette[17], 5, 8, 7, 8);
      f(palette[18], 6, 4, 2, 12);
      f(palette[19], 7, 1, 2, 5);
      f(palette[18], 3, 7, 2, 7);
      f(palette[18], 1, 5, 3, 3);
      f(palette[19], 11, 6, 2, 8);
      f(palette[18], 13, 4, 2, 4);
    },
    [1, 1],
    true,
  );
  const reeds = pixels(
    'reeds',
    16,
    32,
    (_, f) => {
      for (const [x, y] of [
        [2, 5],
        [6, 2],
        [10, 9],
        [13, 4],
      ]) {
        f(palette[17], x, y, 1, 32 - y);
        f(palette[19], x + 1, y + 3, 1, 29 - y);
        f(palette[10], x, y, 2, 4);
      }
    },
    [1, 1],
    true,
  );
  const waterMap = pixels(
    'water',
    64,
    32,
    (_, f) => {
      f(palette[3], 0, 0, 64, 32);
      for (const [x, y, w] of [
        [2, 3, 15],
        [31, 8, 25],
        [15, 17, 22],
        [45, 26, 18],
      ]) {
        f(palette[4], x, y, w, 2);
        f(palette[5], x + 2, y, Math.max(2, w - 7), 1);
      }
    },
    [6, 30],
  );
  const skyTexture = pixels('sky', 192, 96, (_, f) => {
    f(palette[21], 0, 0, 192, 19);
    f(palette[22], 0, 19, 192, 15);
    f(palette[23], 0, 34, 192, 10);
    f(palette[24], 0, 44, 192, 7);
    f(palette[25], 0, 51, 192, 7);
    f(palette[7], 0, 58, 192, 12);
    f(palette[20], 0, 70, 192, 26);
    const cloud = (x, y, scale = 1) => {
      const block = (c, a, b, w, h) => f(c, (x + a * scale + 192) % 192, y + b * scale, w * scale, h * scale);
      block(palette[24], 0, 4, 19, 3);
      block(palette[25], 3, 2, 14, 4);
      block(palette[26], 7, 0, 6, 3);
      block(palette[26], 3, 3, 13, 1);
    };
    cloud(7, 35);
    cloud(43, 24);
    cloud(87, 32, 2);
    cloud(140, 19);
    cloud(166, 42);
    cloud(33, 48);
    cloud(131, 49);
    f(palette[14], 147, 52, 5, 5);
    f(palette[14], 146, 53, 7, 3);
  });
  skyTexture.mapping = T.EquirectangularReflectionMapping;
  skyTexture.wrapS = T.RepeatWrapping;
  skyTexture.wrapT = T.ClampToEdgeWrapping;

  const gradient = new T.DataTexture(new Uint8Array([72, 126, 182, 238]), 4, 1, T.RedFormat);
  gradient.name = 'four-step-authored-light';
  gradient.minFilter = gradient.magFilter = T.NearestFilter;
  gradient.generateMipmaps = false;
  gradient.needsUpdate = true;
  const cache = new Map();
  const cabinByHex = {
    '38666c': [cloth, '#ffffff'],
    a1b3aa: [insert, '#ffffff'],
    '55675e': [plastic, '#ffffff'],
    c7c5a7: [headliner, '#ffffff'],
    '494e43': [carpet, '#ffffff'],
    '383f37': [null, palette[1]],
    '131b19': [null, palette[0]],
    '1b2926': [null, palette[1]],
    b9bba9: [chrome, '#ffffff'],
    dfd0ad: [paper, '#ffffff'],
    '756c50': [cassetteMap, '#ffffff'],
    d29e7d: [null, palette[11]],
    aa6d22: [null, palette[13]],
    a0b1ad: [null, palette[4]],
  };
  const worldByHex = {
    626767: [roadMap, '#ffffff'],
    aca994: [null, palette[6]],
    '7d8d57': [grassMap, '#ffffff'],
    '6d8051': [null, palette[18]],
    '8d9a64': [null, palette[19]],
    a7aa71: [null, palette[20]],
    '7a925d': [null, palette[18]],
    b2ae77: [null, palette[20]],
    dbd9ba: [null, palette[7]],
    b4b7a7: [null, palette[6]],
    '6b716e': [roofMap, '#ffffff'],
    c99078: [plaster, '#ffffff'],
    d5c2a0: [null, palette[13]],
    c3b7a1: [null, palette[30]],
    ded5b8: [null, palette[7]],
    526159: [null, palette[2]],
    527478: [null, palette[3]],
    ac956a: [null, palette[13]],
    '6d7974': [null, palette[4]],
    '5c5a43': [null, palette[9]],
    '7b8c60': [null, palette[18]],
    '477e7b': [waterMap, '#ffffff'],
    b2c6ab: [null, palette[5]],
  };
  function styled(original, isCabin) {
    if (original.transparent && original.opacity < 0.1) {
      changes.transparentPreserved++;
      return original;
    }
    const key = `${isCabin ? 'cabin' : 'world'}:${original.uuid}`;
    if (cache.has(key)) return cache.get(key);
    const hex = original.color?.getHexString() || 'ffffff';
    let definition = (isCabin ? cabinByHex : worldByHex)[hex];
    if (!isCabin && original.alphaTest > 0.35) definition = [leafMap, '#ffffff'];
    else if (!isCabin && original.alphaTest > 0)
      definition = [hex === 'ffffff' ? grassTuft : reeds, '#ffffff'];
    const [map = null, color = original.color || '#ffffff'] = definition || [];
    const result = new T.MeshToonMaterial({
      color,
      map,
      gradientMap: gradient,
      side: original.side,
      transparent: original.transparent,
      opacity: original.opacity,
      alphaTest: original.alphaTest,
      depthWrite: original.depthWrite,
      depthTest: original.depthTest,
      vertexColors: original.vertexColors,
      emissive: original.emissive || '#000000',
      emissiveIntensity: original.emissiveIntensity || 0,
      polygonOffset: original.polygonOffset,
      polygonOffsetFactor: original.polygonOffsetFactor,
      polygonOffsetUnits: original.polygonOffsetUnits,
    });
    result.name = `authored-${isCabin ? 'cabin' : 'world'}-${hex}`;
    materials.add(result);
    cache.set(key, result);
    changes.materials++;
    return result;
  }
  function visit(root) {
    root.traverse((object) => {
      if (!object.isMesh || visited.has(object) || object.userData.authoredWorld) return;
      visited.add(object);
      if (object.name === 'reading-lamp') {
        changes.lampPreserved++;
        return;
      }
      const original = object.material,
        isCabin = cabinMeshes.has(object);
      const authored = Array.isArray(original)
        ? original.map((m) => styled(m, isCabin))
        : styled(original, isCabin);
      assignments.push({ object, original, authored });
      changes.meshes++;
      if (!isCabin && object.isInstancedMesh && object.instanceColor) {
        const source = object.instanceColor,
          array = new Float32Array(source.array.length);
        for (let i = 0; i < source.array.length; i += 3) {
          const luminance =
            source.array[i] * 0.2126 + source.array[i + 1] * 0.7152 + source.array[i + 2] * 0.0722;
          const shade = luminance > 0.28 ? 1 : luminance > 0.18 ? 0.9 : 0.79;
          array[i] = shade;
          array[i + 1] = shade;
          array[i + 2] = shade;
        }
        colors.push({ object, original: source, authored: new T.InstancedBufferAttribute(array, 3) });
        changes.instanceColors++;
      }
    });
  }
  visit(cabinGroup);
  visit(landscapeGroupOrScene);
  let enabled = false;
  function setEnabled(value) {
    enabled = Boolean(value);
    for (const item of assignments) item.object.material = enabled ? item.authored : item.original;
    for (const item of colors) {
      item.object.instanceColor = enabled ? item.authored : item.original;
      item.object.instanceColor.needsUpdate = true;
    }
  }
  setEnabled(true);
  const stats = {
    kind: 'Original pixel maps and four-step surface lighting; geometry unchanged',
    ...changes,
    textures: textureSamples.map(({ name, width, height, colors, pixelHash }) => ({
      name,
      width,
      height,
      colors,
      pixelHash,
    })),
    filters: {
      magnification: 'nearest',
      minification: 'nearest spatial samples with gradual mip transitions',
      anisotropy: 1,
    },
    dimensionsAreFactoryMeasurements: false,
  };
  return {
    palette,
    skyTexture,
    textureSamples,
    stats,
    setEnabled,
    dispose() {
      setEnabled(false);
      for (const m of materials) m.dispose();
      for (const t of maps.values()) t.dispose();
      gradient.dispose();
    },
  };
}
