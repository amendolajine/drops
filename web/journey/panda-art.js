import { applyComfortArt } from './cabin-art.js';

export function applyPandaArt(cabin, scene) {
  const saved = [];
  cabin.traverse((object) => {
    if (object.isMesh) saved.push({ object, material: object.material });
  });
  const art = applyComfortArt(cabin, scene);
  for (const item of saved) item.object.material = item.material;
  return {
    ...art,
    stats: {
      ...art.stats,
      cabin:
        'Original 1988-reference Panda surfaces and small authored maps; world uses the accepted pixel treatment',
      restoredCabinMeshes: saved.length,
    },
  };
}
