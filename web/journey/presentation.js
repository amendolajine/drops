import * as T from 'three';

export const GRID = Object.freeze({ width: 320, height: 180 });

// Each exposure contains only its own linear samples, never a previous output frame.
export function createPresentation(renderer) {
  const options = {
    type: T.HalfFloatType,
    minFilter: T.NearestFilter,
    magFilter: T.NearestFilter,
    samples: 0,
  };
  const targets = Array.from({ length: 3 }, () => new T.WebGLRenderTarget(GRID.width, GRID.height, options));
  for (const target of targets) target.texture.generateMipmaps = false;
  const colourTarget = new T.WebGLRenderTarget(GRID.width, GRID.height, {
    minFilter: T.NearestFilter,
    magFilter: T.NearestFilter,
  });
  colourTarget.texture.generateMipmaps = false;
  const scene = new T.Scene(),
    copyScene = new T.Scene(),
    camera = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1),
    geometry = new T.PlaneGeometry(2, 2);
  const vertexShader =
    'varying vec2 sampleUv;void main(){sampleUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}';
  const material = new T.ShaderMaterial({
    uniforms: {
      frame0: { value: targets[0].texture },
      frame1: { value: targets[1].texture },
      frame2: { value: targets[2].texture },
      sampleCount: { value: 1 },
      tape: { value: 0 },
      grainSeed: { value: 0 },
      toneMappingExposure: { value: 0.95 },
    },
    vertexShader,
    fragmentShader: `
  #include <tonemapping_pars_fragment>
  uniform sampler2D frame0;uniform sampler2D frame1;uniform sampler2D frame2;
  uniform float sampleCount;uniform float tape;uniform float grainSeed;varying vec2 sampleUv;
  vec3 displaySample(vec2 uv){
   uv=clamp(uv,vec2(.5/320.,.5/180.),vec2(319.5/320.,179.5/180.));
   vec3 linearColour=texture2D(frame0,uv).rgb;
   if(sampleCount>1.5)linearColour=(linearColour+texture2D(frame1,uv).rgb+texture2D(frame2,uv).rgb)/3.;
   vec3 c=ACESFilmicToneMapping(linearColour);
   return mix(c*12.92,1.055*pow(max(c,vec3(0.)),vec3(1./2.4))-.055,step(vec3(.0031308),c));
  }
  float luma(vec3 c){return dot(c,vec3(.2126,.7152,.0722));}
  void main(){
   vec2 uv=(floor(sampleUv*vec2(320.,180.))+.5)/vec2(320.,180.);
   vec3 c=displaySample(uv);
   if(tape>.5){
    vec3 left=displaySample(uv-vec2(1./320.,0.)),right=displaySample(uv+vec2(1./320.,0.));
    float y=luma(c);vec3 chroma=(c-vec3(y))*.5+(left-vec3(luma(left)))*.25+(right-vec3(luma(right)))*.25;
    c=mix(c,vec3(y)+chroma,.55);
    c=(c-.5)*.97+.5;
    float noise=fract(sin(dot(floor(uv*vec2(320.,180.)),vec2(12.9898,78.233))+grainSeed*17.731)*43758.5453)-.5;
    c+=vec3(noise*(.7/255.));
   }
   gl_FragColor=vec4(clamp(c,0.,1.),1.);
  }`,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  scene.add(new T.Mesh(geometry, material));
  const copyMaterial = new T.ShaderMaterial({
    uniforms: { frame: { value: colourTarget.texture } },
    vertexShader,
    fragmentShader:
      'uniform sampler2D frame;varying vec2 sampleUv;void main(){vec2 uv=(floor(sampleUv*vec2(320.,180.))+.5)/vec2(320.,180.);gl_FragColor=vec4(texture2D(frame,uv).rgb,1.);}',
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  copyScene.add(new T.Mesh(geometry, copyMaterial));
  return {
    target: targets[0],
    targets,
    sampleTarget: (index) => targets[index],
    setAuthored(value) {
      if (value) throw Error('This comparison uses the authored scene colours');
    },
    draw({ count = 1, tape = false, grainSeed = 0 } = {}) {
      if (count !== 1 && count !== 3) throw Error('Exposure requires one or three samples');
      material.uniforms.sampleCount.value = count;
      material.uniforms.tape.value = tape ? 1 : 0;
      material.uniforms.grainSeed.value = grainSeed;
      renderer.setRenderTarget(colourTarget);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(copyScene, camera);
    },
    dispose() {
      for (const target of targets) target.dispose();
      colourTarget.dispose();
      geometry.dispose();
      material.dispose();
      copyMaterial.dispose();
    },
  };
}
