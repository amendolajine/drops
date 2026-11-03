import * as T from 'three';
import { createCabin } from './cabin.js';
import { createCaptureClock } from './capture-clock.js';
import { createContinuityController } from './continuity-controller.js';
import { readRightGlass } from './glass.js';
import { JOURNEY_SAVE_SCHEMA, sceneContract, validateJourneyCheckpoint } from './journey-state.js';
import { createLandscape } from './landscape.js';
import { localisePage, setLanguage, text } from './language.js';
import { applyPandaArt } from './panda-art.js';
import { createPresentation, GRID } from './presentation.js';
import { createWaterSession } from './water-session.js';
import { createWaterView } from './water-view.js';
import { createWeather } from './weather.js';

const $ = (id) => document.getElementById(id),
  canvas = $('scene'),
  stage = document.querySelector('.stage'),
  clamp = (v, a, b) => Math.max(a, Math.min(b, v));
localisePage();
const capture = createCaptureClock('shutter24');
let continuity = null,
  contract = null;
let exposureSampleCount = 1;
let messageKey = 'Lo sguardo resta nel sedile. Nessuna azione è necessaria per continuare.';
function message(key) {
  messageKey = key;
  $('message').textContent = text(key);
}
function touch() {
  continuity?.markDirty();
}
let renderer,
  scene,
  rig,
  camera,
  cabin,
  world,
  art,
  presentation,
  sun,
  water,
  pane,
  waterView,
  background,
  weather,
  time = 0,
  distance = 0,
  last = 0,
  accumulator = 0,
  steps = 0,
  sceneFault = null,
  running = false,
  yaw = 1.18,
  pitch = 0.04,
  aimYaw = yaw,
  aimPitch = pitch,
  transition = null,
  drag = null,
  keys = new Set(),
  scale = 1,
  cssWidth = 320,
  cssHeight = 180,
  edgeSamples = 0,
  diagnostic = false,
  pose,
  frames = 0,
  disposed = false,
  rendererIdentity = {};
function resize() {
  if (!renderer) return;
  capture.reset();
  const r = stage.getBoundingClientRect(),
    dpr = devicePixelRatio || 1,
    left = r.left + stage.clientLeft,
    top = r.top + stage.clientTop;
  scale = Math.max(
    1,
    Math.floor(Math.min((stage.clientWidth * dpr) / GRID.width, (stage.clientHeight * dpr) / GRID.height)),
  );
  cssWidth = (GRID.width * scale) / dpr;
  cssHeight = (GRID.height * scale) / dpr;
  renderer.setSize(GRID.width * scale, GRID.height * scale, false);
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;
  canvas.style.left = `${Math.round((left + (stage.clientWidth - cssWidth) / 2) * dpr) / dpr - left}px`;
  canvas.style.top = `${Math.round((top + (stage.clientHeight - cssHeight) / 2) * dpr) / dpr - top}px`;
}
function angles(target) {
  const d = new T.Vector3(...target).sub(cabin.eye);
  return [Math.atan2(d.x, -d.z), Math.atan2(d.y, Math.hypot(d.x, d.z))];
}
function viewAngles(name) {
  if (name === 'window')
    return angles(
      pane.corners
        .reduce((a, p) => a.add(p), new T.Vector3())
        .multiplyScalar(0.25)
        .toArray(),
    );
  if (name === 'front') return [0, -0.06];
  if (name === 'beside') return [-1.65, -0.18];
  if (name === 'back') return cabin.viewTargets.cargo ? angles(cabin.viewTargets.cargo) : [2.7, -0.3];
  const targets = cabin.viewTargets || cabin.state().viewTargets || {};
  const point = targets[name] || targets[name === 'feet' ? 'floor' : name];
  return point ? angles(point) : name === 'feet' ? [0, -0.94] : [-1.9, -1.0];
}
function setGaze(y, p) {
  touch();
  capture.reset();
  transition = null;
  yaw = aimYaw = clamp(y, -2.85, 2.85);
  pitch = aimPitch = clamp(p, -1.35, 0.85);
  draw(0);
}
function setView(name, instant = false) {
  touch();
  const target = viewAngles(name);
  aimYaw = clamp(target[0], -2.85, 2.85);
  aimPitch = clamp(target[1], -1.35, 0.85);
  if (instant) {
    setGaze(aimYaw, aimPitch);
    return;
  }
  transition = {
    fromYaw: yaw,
    fromPitch: pitch,
    toYaw: aimYaw,
    toPitch: aimPitch,
    elapsed: 0,
    duration: clamp(Math.hypot(aimYaw - yaw, aimPitch - pitch) / 1.6, 0.3, 1.15),
  };
}
function pause() {
  capture.reset();
  running = false;
  accumulator = 0;
  keys.clear();
  $('pause').textContent = text('Riprendi');
  $('pause').setAttribute('aria-pressed', 'false');
}
function togglePause() {
  if (sceneFault || continuity?.state().playLocked) return;
  capture.reset();
  running = !running;
  last = performance.now();
  $('pause').textContent = running ? text('Pausa') : text('Riprendi');
  $('pause').setAttribute('aria-pressed', String(running));
}
function setCaptureMode(mode) {
  touch();
  capture.setMode(mode);
  if ($('capture-mode')) $('capture-mode').value = mode;
  draw(0);
  return capture.state();
}
function toggle(kind) {
  if (kind !== 'lamp') return false;
  const s = cabin.toggle(kind);
  touch();
  $('lamp').setAttribute('aria-pressed', String(s.lampOn));
  message(s.lampOn ? 'La luce è accesa.' : 'La luce è spenta.');
  return s;
}
function setWeather(mode) {
  touch();
  weather.setMode(mode);
  $('weather').setAttribute('aria-pressed', String(mode === 'overcast'));
  draw(0);
  return weather.state();
}
function place() {
  pose = world.pose(distance);
  pose.position.addScaledVector(new T.Vector3(-pose.tangent.z, 0, pose.tangent.x), 1.25);
  rig.position.copy(pose.position);
  rig.rotation.y = Math.atan2(-pose.tangent.x, -pose.tangent.z);
  rig.updateMatrixWorld(true);
  sun.position.copy(rig.position).add(new T.Vector3(20, 20, 8));
  sun.target.position.copy(rig.position);
  sun.target.updateMatrixWorld();
}
function moveLook(dt) {
  if (!dt) return;
  const beforeYaw = yaw,
    beforePitch = pitch;
  const h = (keys.has('ArrowRight') ? 1 : 0) - (keys.has('ArrowLeft') ? 1 : 0),
    v = (keys.has('ArrowUp') ? 1 : 0) - (keys.has('ArrowDown') ? 1 : 0);
  if (h || v) {
    transition = null;
    yaw = aimYaw = clamp(yaw + h * dt * 0.65, -2.85, 2.85);
    pitch = aimPitch = clamp(pitch + v * dt * 0.55, -1.35, 0.85);
  } else if (transition) {
    transition.elapsed += dt;
    const u = clamp(transition.elapsed / transition.duration, 0, 1),
      t = u * u * (3 - 2 * u);
    yaw = transition.fromYaw + (transition.toYaw - transition.fromYaw) * t;
    pitch = transition.fromPitch + (transition.toPitch - transition.fromPitch) * t;
    if (u === 1) transition = null;
  }
  if (yaw !== beforeYaw || pitch !== beforePitch) touch();
}
function forcing() {
  const speed = 5,
    current = world.pose(distance),
    before = world.pose(distance - 0.2),
    after = world.pose(distance + 0.2),
    heading = Math.atan2(-current.tangent.x, -current.tangent.z);
  const acceleration = after.tangent
    .clone()
    .sub(before.tangent)
    .multiplyScalar((speed * speed) / 0.4);
  const effective = new T.Vector3(0, -9.81, 0)
    .sub(acceleration)
    .applyAxisAngle(new T.Vector3(0, 1, 0), -heading);
  return { speed, gravityU: effective.dot(pane.u), gravityDown: effective.dot(pane.down), rain: 0.65 };
}
function step() {
  const input = forcing();
  water.advance(1 / 60, input);
  steps++;
  time = steps / 60;
  distance = (steps * 5) / 60;
  touch();
}
function draw(dt = 0) {
  if (!renderer || !art || disposed) return;
  moveLook(dt);
  place();
  camera.position.copy(cabin.eye);
  camera.rotation.order = 'YXZ';
  cabin.update(dt);
  world.update(time);
  waterView.update(water, steps);
  scene.updateMatrixWorld(true);
  renderer.info.reset();
  renderer.shadowMap.needsUpdate = true;
  try {
    const views = capture.exposure(yaw, pitch);
    exposureSampleCount = views.length;
    for (let i = 0; i < views.length; i++) {
      camera.rotation.set(views[i].pitch, -views[i].yaw, 0);
      camera.updateMatrixWorld(true);
      waterView.group.visible = false;
      renderer.setRenderTarget(background);
      renderer.render(scene, camera);
      waterView.group.visible = true;
      renderer.setRenderTarget(presentation.sampleTarget(i));
      renderer.render(scene, camera);
    }
    presentation.draw({ count: views.length, tape: capture.state().tape, grainSeed: Math.floor(time * 25) });
    frames++;
  } finally {
    waterView.group.visible = true;
    camera.rotation.set(pitch, -yaw, 0);
    camera.updateMatrixWorld(true);
    renderer.setRenderTarget(null);
  }
}
function state() {
  const p = new T.Vector3();
  camera.getWorldPosition(p);
  const s = cabin.state();
  return {
    time,
    distance,
    running,
    frames,
    diagnostic,
    continuity: continuity?.state(),
    weather: weather.state(),
    water: water.diagnostics(),
    waterView: waterView.state(),
    glass: pane.diagnostics(),
    forcing: forcing(),
    sceneFault,
    view: {
      yaw,
      pitch,
      targetYaw: aimYaw,
      targetPitch: aimPitch,
      anchor: cabin.eye.toArray(),
      position: p.toArray(),
      fov: camera.fov,
      transitioning: Boolean(transition),
    },
    objects: { lampOn: s.lampOn, cassetteFlipped: s.cassetteFlipped, cassetteRotation: s.cassetteRotation },
    cabin: s,
    route: {
      length: world.length,
      section: pose.section,
      position: pose.position.toArray(),
      heading: rig.rotation.y,
    },
    render: {
      gridWidth: GRID.width,
      gridHeight: GRID.height,
      scale,
      outputWidth: canvas.width,
      outputHeight: canvas.height,
      cssWidth,
      cssHeight,
      devicePixelRatio: devicePixelRatio || 1,
      renderer: { ...rendererIdentity },
      edgeSamples,
      capture: { ...capture.state(), exposureSamples: exposureSampleCount },
      direct: true,
      palette: [],
      calls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
    },
    art: art.stats,
  };
}
function frame(now) {
  if (disposed) return;
  const dt = last ? Math.min(0.05, Math.max(0, (now - last) / 1000)) : 1 / 60;
  last = now;
  try {
    if (running) {
      accumulator += dt;
      while (accumulator >= 1 / 60) {
        step();
        accumulator -= 1 / 60;
      }
    }
    moveLook(dt);
    cabin.update(dt);
    capture.observe(now / 1000, yaw, pitch);
    if (capture.due(now / 1000)) draw(0);
  } catch (error) {
    pause();
    sceneFault = String(error);
    message('Il viaggio è fermo per un problema. Puoi ancora guardarti intorno; ricarica per ripartire.');
  }
  requestAnimationFrame(frame);
}
function cancelDrag() {
  drag = null;
  canvas.classList.remove('dragging');
}
function checkpoint() {
  if (sceneFault) throw Error('This study cannot produce a journey save');
  return {
    schema: JOURNEY_SAVE_SCHEMA,
    scene: contract,
    steps,
    view: { yaw, pitch, aimYaw, aimPitch, transition: transition ? { ...transition } : null },
    weather: weather.state().mode,
    objects: { lampOn: cabin.state().lampOn, diagnostic },
    captureMode: capture.state().mode,
    water: water.exportCheckpoint(),
  };
}
function applyCheckpoint(value) {
  const c = value.checkpoint;
  pause();
  cancelDrag();
  keys.clear();
  water = value.water;
  steps = c.steps;
  time = steps / 60;
  distance = (steps * 5) / 60;
  ({ yaw, pitch, aimYaw, aimPitch } = c.view);
  transition = c.view.transition ? { ...c.view.transition } : null;
  if (cabin.state().lampOn !== c.objects.lampOn) cabin.toggle('lamp');
  diagnostic = c.objects.diagnostic;
  cabin.setDiagnostic(diagnostic);
  weather.setMode(c.weather);
  $('weather').setAttribute('aria-pressed', String(c.weather === 'overcast'));
  $('lamp').setAttribute('aria-pressed', String(c.objects.lampOn));
  capture.setMode(c.captureMode);
  if ($('capture-mode')) $('capture-mode').value = c.captureMode;
  accumulator = 0;
  last = performance.now();
  sceneFault = null;
  waterView.invalidate();
  draw(0);
}
function startFresh() {
  const [y, p] = viewAngles('window'),
    fresh = {
      schema: JOURNEY_SAVE_SCHEMA,
      scene: contract,
      steps: 0,
      view: { yaw: y, pitch: p, aimYaw: y, aimPitch: p, transition: null },
      weather: 'overcast',
      objects: { lampOn: false, diagnostic: false },
      captureMode: 'shutter24',
      water: createWaterSession({
        seed: 'trip-2026-11-02',
        widthMm: pane.widthMm,
        heightMm: pane.heightMm,
      }).exportCheckpoint(),
    };
  applyCheckpoint(validateJourneyCheckpoint(fresh, contract));
}
async function init() {
  try {
    renderer = new T.WebGLRenderer({
      canvas,
      antialias: false,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(1);
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.BasicShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.info.autoReset = false;
    const gl = renderer.getContext(),
      ext = gl.getExtension('WEBGL_debug_renderer_info');
    rendererIdentity = {
      vendor: gl.getParameter(gl.VENDOR),
      renderer: gl.getParameter(gl.RENDERER),
      unmaskedRenderer: ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : null,
      version: gl.getParameter(gl.VERSION),
    };
    const supported = Array.from(
      gl.getInternalformatParameter(gl.RENDERBUFFER, gl.RGBA16F, gl.SAMPLES) || [],
    );
    edgeSamples = supported.includes(4) ? 4 : supported.includes(2) ? 2 : 0;
    scene = new T.Scene();
    scene.fog = new T.FogExp2('#bccbbc', 0.003);
    scene.add(new T.HemisphereLight('#d4dfd6', '#86917d', 1.8));
    sun = new T.DirectionalLight('#fff0d3', 1.35);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 0.1, far: 95 });
    sun.shadow.intensity = 0.45;
    sun.shadow.bias = -0.0001;
    sun.shadow.normalBias = 0.003;
    scene.add(sun, sun.target);
    world = createLandscape(scene);
    rig = new T.Group();
    scene.add(rig);
    cabin = createCabin();
    rig.add(cabin.group);
    camera = new T.PerspectiveCamera(68, 16 / 9, 0.025, 850);
    rig.add(camera);
    art = applyPandaArt(cabin.group, scene);
    cabin.group.traverse((o) => {
      if (o.isMesh && [].concat(o.material || []).some((m) => m.map?.name === 'authored-pixels-headliner'))
        o.receiveShadow = false;
    });
    scene.background = art.skyTexture;
    weather = createWeather({ scene, sun, hemisphere: scene.children.find((o) => o.isHemisphereLight) });
    presentation = createPresentation(renderer);
    for (const target of presentation.targets) target.samples = edgeSamples;
    presentation.setAuthored(false);
    pane = readRightGlass(cabin.group);
    [yaw, pitch] = viewAngles('window');
    aimYaw = yaw;
    aimPitch = pitch;
    water = createWaterSession({ seed: 'trip-2026-11-02', widthMm: pane.widthMm, heightMm: pane.heightMm });
    background = new T.WebGLRenderTarget(GRID.width, GRID.height, {
      type: T.HalfFloatType,
      minFilter: T.NearestFilter,
      magFilter: T.NearestFilter,
      samples: edgeSamples,
    });
    waterView = createWaterView(rig, pane, background.texture);
    new ResizeObserver(resize).observe(stage);
    window.addEventListener('resize', resize);
    resize();
    draw(0);
    $('loading').hidden = true;
    $('pause').addEventListener('click', togglePause);
    document.querySelectorAll('[data-view]').forEach((b) => {
      b.addEventListener('click', () => setView(b.dataset.view));
    });
    $('lamp').addEventListener('click', () => toggle('lamp'));
    $('weather').addEventListener('click', () =>
      setWeather(weather.state().mode === 'overcast' ? 'fair' : 'overcast'),
    );
    $('capture-mode')?.addEventListener('change', (event) => setCaptureMode(event.target.value));
    canvas.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      canvas.focus({ preventScroll: true });
      transition = null;
      aimYaw = yaw;
      aimPitch = pitch;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0 };
      canvas.setPointerCapture(e.pointerId);
      canvas.classList.add('dragging');
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x,
        dy = e.clientY - drag.y;
      yaw = aimYaw = clamp(yaw - dx * 0.0028, -2.85, 2.85);
      pitch = aimPitch = clamp(pitch + dy * 0.0028, -1.35, 0.85);
      drag.x = e.clientX;
      drag.y = e.clientY;
      drag.moved += Math.abs(dx) + Math.abs(dy);
      touch();
    });
    canvas.addEventListener('pointerup', (e) => {
      if (drag && drag.moved < 7) {
        const r = canvas.getBoundingClientRect(),
          point = new T.Vector2(
            ((e.clientX - r.left) / r.width) * 2 - 1,
            (-(e.clientY - r.top) / r.height) * 2 + 1,
          ),
          ray = new T.Raycaster();
        ray.setFromCamera(point, camera);
        const hit = ray.intersectObject(cabin.group, true).find((h) => {
          let n = h.object;
          while (n) {
            if (n.userData.diagnostic) return false;
            n = n.parent;
          }
          return true;
        });
        if (hit) {
          const item = cabin.interactables.find((item) => {
            let n = hit.object;
            while (n) {
              if (n === item.root) return true;
              n = n.parent;
            }
            return false;
          });
          if (item) toggle(item.kind);
        }
      }
      cancelDrag();
    });
    canvas.addEventListener('pointercancel', cancelDrag);
    canvas.addEventListener('lostpointercapture', cancelDrag);
    canvas.addEventListener('keydown', (e) => {
      if (e.key.startsWith('Arrow')) {
        e.preventDefault();
        keys.add(e.key);
      }
      if (e.code === 'Space') {
        e.preventDefault();
        togglePause();
      }
    });
    canvas.addEventListener('keyup', (e) => keys.delete(e.key));
    canvas.addEventListener('blur', () => {
      keys.clear();
      cancelDrag();
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pause();
    });
    $('fullscreen').hidden = !document.fullscreenEnabled;
    $('fullscreen').addEventListener('click', async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.body.requestFullscreen();
        resize();
      } catch {
        message('Puoi continuare nella finestra del browser.');
      }
    });
    window.__trip = {
      state,
      setView,
      setGaze,
      pause,
      draw,
      toggle,
      setWeather,
      setCaptureMode,
      checkpoint,
      advance(seconds) {
        if (!Number.isInteger(seconds) || seconds < 0 || seconds > 120) throw new Error('Invalid advance');
        pause();
        for (let i = 0; i < seconds * 60; i++) step();
        draw(0);
        return state();
      },
    };
    contract = sceneContract(pane, world.length, cabin.eye, water.exportCheckpoint().options);
    continuity = createContinuityController({
      getCheckpoint: checkpoint,
      prepare: (raw) => validateJourneyCheckpoint(raw, contract),
      apply: applyCheckpoint,
      startNew: startFresh,
      pause,
      getElement: $,
      supported: true,
      dbName: 'drops-journey-v8-1',
      autoIntervalMs: 10000,
    });
    await continuity.initialise();
    window.parent.postMessage({ type: 'drops-journey-status', version: 'v8', ready: true }, location.origin);
    requestAnimationFrame(frame);
  } catch (_error) {
    $('loading').hidden = false;
    $('loading').textContent = text('La prova non si è aperta. Ricarica per riprovare.');
  }
}
window.addEventListener('message', (event) => {
  if (event.source !== window.parent || event.origin !== location.origin) return;
  if (event.data?.type === 'drops-journey-pause') pause();
  if (event.data?.type === 'drops-journey-language') {
    setLanguage(event.data.language);
    $('pause').textContent = running ? text('Pausa') : steps ? text('Riprendi') : text('Parti');
    message(messageKey);
    continuity?.refreshLanguage();
  }
});
const pageSize = new ResizeObserver(() =>
  window.parent.postMessage(
    { type: 'drops-journey-size', height: Math.ceil(document.body.getBoundingClientRect().height) },
    location.origin,
  ),
);
pageSize.observe(document.body);
init();
