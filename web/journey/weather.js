import * as T from 'three';

// A fixed lighting study. This is not a weather simulation or a rain source.
export const OVERCAST = Object.freeze({
  sky: '#ccd1cd',
  ground: '#78837d',
  hemisphereIntensity: 1.75,
  sun: '#d4dad6',
  sunIntensity: 0.16,
  shadowIntensity: 0.12,
  haze: '#b8c0b8',
  hazeDensity: 0.0038,
});

const controllers = new WeakMap();

function makeCloudCover() {
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 96;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('The cloud-cover canvas is unavailable');
  context.imageSmoothingEnabled = false;
  const fill = (colour, x, y, width, height) => {
    context.fillStyle = colour;
    // Repeat every authored patch through the equirectangular seam.
    for (const offset of [-192, 0, 192]) context.fillRect(x + offset, y, width, height);
  };
  for (const [colour, y, height] of [
    ['#929fa2', 0, 15],
    ['#a2adae', 15, 15],
    ['#b0b8b6', 30, 11],
    ['#c0c4bc', 41, 9],
    ['#c7c8bc', 50, 5],
    ['#acb7aa', 55, 11],
    ['#828e81', 66, 30],
  ])
    fill(colour, 0, y, 192, height);

  // Broad, quiet stratus shelves. No sun disc, blue openings or moving noise.
  for (const [colour, x, y, width, height] of [
    ['#99a6a8', -11, 10, 63, 7],
    ['#99a6a8', 49, 12, 82, 5],
    ['#99a6a8', 128, 9, 60, 8],
    ['#a8b1b1', 19, 23, 79, 8],
    ['#a8b1b1', 95, 25, 72, 6],
    ['#a8b1b1', 162, 22, 51, 9],
    ['#b7beb9', -8, 35, 59, 7],
    ['#b7beb9', 47, 37, 85, 5],
    ['#b7beb9', 128, 34, 60, 8],
    ['#c4c7bf', 26, 46, 78, 5],
    ['#c4c7bf', 101, 45, 83, 6],
    ['#b9c1b6', -8, 55, 69, 4],
    ['#b9c1b6', 59, 56, 91, 3],
    ['#b9c1b6', 148, 55, 40, 4],
  ])
    fill(colour, x, y, width, height);

  const texture = new T.CanvasTexture(canvas);
  texture.name = 'authored-pixels-overcast-sky';
  texture.colorSpace = T.SRGBColorSpace;
  texture.mapping = T.EquirectangularReflectionMapping;
  texture.wrapS = T.RepeatWrapping;
  texture.wrapT = T.ClampToEdgeWrapping;
  texture.magFilter = T.NearestFilter;
  texture.minFilter = T.NearestMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 1;
  return texture;
}

export function createWeather({ scene, sun, hemisphere, mode = 'overcast' } = {}) {
  if (!scene?.isScene || !sun?.isDirectionalLight || !hemisphere?.isHemisphereLight) {
    throw new Error('Weather requires a scene, its directional light and its hemisphere light');
  }
  if (mode !== 'overcast' && mode !== 'fair') throw new Error(`Unknown weather study: ${mode}`);
  const existing = controllers.get(scene);
  if (existing) {
    if (existing.sun !== sun || existing.hemisphere !== hemisphere) {
      throw new Error('The scene already has a weather controller with different lights');
    }
    existing.controller.setMode(mode);
    return existing.controller;
  }

  const original = {
    background: scene.background,
    fog: scene.fog,
    sunColour: sun.color.clone(),
    sunIntensity: sun.intensity,
    shadowIntensity: sun.shadow.intensity,
    skyColour: hemisphere.color.clone(),
    groundColour: hemisphere.groundColor.clone(),
    hemisphereIntensity: hemisphere.intensity,
  };
  const skyTexture = makeCloudCover();
  const haze = new T.FogExp2(OVERCAST.haze, OVERCAST.hazeDensity);
  haze.name = 'overcast-lighting-study-haze';
  let currentMode,
    disposed = false;

  function restore() {
    scene.background = original.background;
    scene.fog = original.fog;
    sun.color.copy(original.sunColour);
    sun.intensity = original.sunIntensity;
    sun.shadow.intensity = original.shadowIntensity;
    hemisphere.color.copy(original.skyColour);
    hemisphere.groundColor.copy(original.groundColour);
    hemisphere.intensity = original.hemisphereIntensity;
  }
  function state() {
    return {
      mode: currentMode,
      disposed,
      kind: 'Fixed overcast lighting study, independent of rain and journey time',
      sky: {
        name: scene.background?.name || null,
        width: scene.background?.image?.width || null,
        height: scene.background?.image?.height || null,
      },
      sun: {
        colour: `#${sun.color.getHexString()}`,
        intensity: sun.intensity,
        shadowIntensity: sun.shadow.intensity,
      },
      hemisphere: {
        sky: `#${hemisphere.color.getHexString()}`,
        ground: `#${hemisphere.groundColor.getHexString()}`,
        intensity: hemisphere.intensity,
      },
      haze: scene.fog
        ? { colour: `#${scene.fog.color.getHexString()}`, density: scene.fog.density ?? null }
        : null,
    };
  }
  function setMode(value) {
    if (disposed) throw new Error('The weather study has been disposed');
    if (value !== 'overcast' && value !== 'fair') throw new Error(`Unknown weather study: ${value}`);
    if (value === currentMode) return state();
    if (value === 'fair') restore();
    else {
      scene.background = skyTexture;
      scene.fog = haze;
      sun.color.set(OVERCAST.sun);
      sun.intensity = OVERCAST.sunIntensity;
      sun.shadow.intensity = OVERCAST.shadowIntensity;
      hemisphere.color.set(OVERCAST.sky);
      hemisphere.groundColor.set(OVERCAST.ground);
      hemisphere.intensity = OVERCAST.hemisphereIntensity;
    }
    currentMode = value;
    return state();
  }
  const controller = {
    setMode,
    state,
    dispose() {
      if (disposed) return;
      restore();
      currentMode = 'fair';
      disposed = true;
      skyTexture.dispose();
      controllers.delete(scene);
    },
  };
  controllers.set(scene, { controller, sun, hemisphere });
  setMode(mode);
  return controller;
}
