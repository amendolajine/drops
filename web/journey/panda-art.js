import { applyComfortArt } from './cabin-art.js';

export function applyPandaArt(cabin, scene) {
  const saved = [];
  scene.traverse((object) => {
    if (object.isMesh && object.userData.authoredWorld) saved.push({ object, material: object.material });
  });
  const worldCount = saved.length;
  cabin.traverse((object) => {
    if (object.isMesh) saved.push({ object, material: object.material });
  });
  const art = applyComfortArt(cabin, scene);
  for (const item of saved) item.object.material = item.material;
  return {
    ...art,
    stats: {
      ...art.stats,
      cabin: 'Provisional original cabin and Bari surfaces with small authored maps',
      restoredCabinMeshes: saved.length - worldCount,
      restoredWorldMeshes: worldCount,
    },
  };
}
