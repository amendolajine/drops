import * as T from 'three';

// A shaded, downward source inside a visible lens. Values are an art study, not a Fiat bulb calibration.
export function createReadingLight(parent, baseMaterial) {
  const group = new T.Group();
  group.name = 'reading-lamp';
  parent.updateMatrixWorld(true);
  const headliner = parent.getObjectByName('panda-headliner');
  if (!headliner) throw Error('The reading lamp needs an actual headliner surface');
  const origin = parent.localToWorld(new T.Vector3(0, 1.3, 0.56));
  const direction = new T.Vector3(0, 1, 0).transformDirection(parent.matrixWorld);
  const mount = new T.Raycaster(origin, direction, 0, 0.3).intersectObject(headliner)[0];
  if (!mount) throw Error('The reading lamp could not meet the headliner');
  const mountY = parent.worldToLocal(mount.point.clone()).y;
  group.position.set(0, mountY - 0.0066, 0.56);
  parent.add(group);
  const shellMaterial = new T.MeshToonMaterial({ color: '#797c6c' });
  const lensMaterial = baseMaterial.clone();
  lensMaterial.name = 'reading-lamp-diffuser';
  lensMaterial.color.set('#c8c5b5');
  lensMaterial.emissive.set('#ffd5a0');
  lensMaterial.emissiveIntensity = 0;
  const shellGeometry = new T.BoxGeometry(0.101, 0.014, 0.061);
  const lensGeometry = new T.BoxGeometry(0.075, 0.004, 0.039);
  const shell = new T.Mesh(shellGeometry, shellMaterial);
  const lens = new T.Mesh(lensGeometry, lensMaterial);
  lens.position.y = -0.009;
  // The emitter sits below the lens. Its own housing must not shadow away all emitted light.
  shell.castShadow = true;
  shell.receiveShadow = true;
  lens.castShadow = false;
  lens.receiveShadow = false;
  group.add(shell, lens);
  const light = new T.SpotLight('#ffd3a0', 0, 2.1, 1.22, 0.9, 2);
  light.name = 'reading-lamp-downward-source';
  light.position.set(0, group.position.y - 0.022, 0.56);
  light.target.position.set(0, 0.5, 0.84);
  light.castShadow = true;
  light.shadow.mapSize.set(512, 512);
  light.shadow.camera.near = 0.035;
  light.shadow.camera.far = 2.1;
  light.shadow.bias = -0.0001;
  light.shadow.normalBias = 0.006;
  light.shadow.intensity = 0.82;
  parent.add(light, light.target);
  let on = false;
  function setOn(value) {
    on = Boolean(value);
    light.intensity = on ? 2.4 : 0;
    lensMaterial.emissiveIntensity = on ? 0.48 : 0;
    return on;
  }
  return {
    group,
    light,
    setOn,
    state: () => ({
      on,
      kind: 'Shaded warm downward lamp with scene-depth shadows',
      position: light.position.toArray(),
      mountY,
      target: light.target.position.toArray(),
      intensity: light.intensity,
      decay: light.decay,
      range: light.distance,
      shadows: light.castShadow,
      shadowMap: light.shadow.mapSize.toArray(),
      calibrated: false,
    }),
    dispose() {
      light.shadow.dispose();
      shellGeometry.dispose();
      lensGeometry.dispose();
      shellMaterial.dispose();
      lensMaterial.dispose();
      light.removeFromParent();
      light.target.removeFromParent();
      group.removeFromParent();
    },
  };
}
