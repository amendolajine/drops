import * as T from 'three';
import { MAX_WATER_DROPS } from './water-session.js';

export function createWaterView(parent, pane, background) {
  const group = new T.Group();
  group.name = `outside-${pane.id || 'right-glass'}-water`;
  parent.add(group);
  const material = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: T.DoubleSide,
    uniforms: {
      background: { value: background },
      sky: { value: background },
      hasSky: { value: 0 },
      resolution: { value: new T.Vector2(320, 180) },
      maskOrigin: { value: pane.mask?.origin || new T.Vector3() },
      maskU: { value: pane.u },
      maskUp: { value: pane.up },
      maskCount: { value: pane.mask?.edges.length || 0 },
      maskEdges: { value: Array.from({ length: 32 }, (_, i) => pane.mask?.edges[i] || new T.Vector3()) },
    },
    vertexShader: `uniform vec3 maskOrigin;uniform vec3 maskU;uniform vec3 maskUp;varying vec2 panePoint;varying vec2 beadUv;varying vec2 lensU;varying vec2 lensV;
   varying vec3 worldU;varying vec3 worldV;varying vec3 worldNormal;varying vec3 worldPoint;
   void main(){beadUv=uv;vec3 local=(instanceMatrix*vec4(position,1.)).xyz-maskOrigin;
    panePoint=vec2(dot(local,maskU),dot(local,maskUp));mat4 m=modelMatrix*instanceMatrix;mat4 clip=projectionMatrix*viewMatrix*m;
    vec4 centre=clip*vec4(0.,0.,0.,1.),edgeU=clip*vec4(.5,0.,0.,1.),edgeV=clip*vec4(0.,.5,0.,1.);
    lensU=(edgeU.xy/edgeU.w-centre.xy/centre.w)*.5;lensV=(edgeV.xy/edgeV.w-centre.xy/centre.w)*.5;
    worldU=normalize((m*vec4(1.,0.,0.,0.)).xyz);worldV=normalize((m*vec4(0.,1.,0.,0.)).xyz);
    worldNormal=normalize(cross(worldU,worldV));worldPoint=(m*vec4(position,1.)).xyz;
    gl_Position=clip*vec4(position,1.);}`,
    fragmentShader: `#include <common>
   uniform int maskCount;uniform vec3 maskEdges[32];varying vec2 panePoint;
   uniform sampler2D background;uniform sampler2D sky;uniform float hasSky;uniform vec2 resolution;
   varying vec2 beadUv;varying vec2 lensU;varying vec2 lensV;
   varying vec3 worldU;varying vec3 worldV;varying vec3 worldNormal;varying vec3 worldPoint;
   void main(){for(int i=0;i<32;i++){if(i<maskCount&&dot(maskEdges[i],vec3(panePoint,1.))<0.)discard;}
    vec2 q=beadUv*2.-1.;float r=dot(q,q);if(r>1.)discard;
    float cap=sqrt(max(0.,1.-r));vec2 screen=gl_FragCoord.xy/resolution;
    vec2 bend=(lensU*q.x+lensV*q.y)*1.3*cap;
    vec3 colour=texture2D(background,clamp(screen-bend,vec2(.001),vec2(.999))).rgb;
    vec3 view=normalize(cameraPosition-worldPoint),paneNormal=worldNormal;
    if(dot(paneNormal,view)<0.)paneNormal=-paneNormal;
    vec3 normal=normalize(worldU*q.x+worldV*q.y+paneNormal*cap);
    float facing=clamp(dot(normal,view),0.,1.),rim=smoothstep(.28,1.,r);
    colour*=1.-.36*rim;
    vec3 reflected=texture2D(sky,equirectUv(reflect(-view,normal))).rgb;
    float reflection=.04+.74*pow(1.-facing,3.);
    colour=mix(colour,reflected,reflection*hasSky);
    gl_FragColor=vec4(colour,.96);}`,
  });
  // The native-grid presentation applies the colour conversion once, after composition.
  const geometry = new T.PlaneGeometry(1, 1),
    mesh = new T.InstancedMesh(geometry, material, MAX_WATER_DROPS);
  mesh.name = 'physical-water-droplets';
  mesh.frustumCulled = false;
  mesh.renderOrder = 4;
  mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
  group.add(mesh);
  // Reflect the current scene sky, including a manual fair/overcast change.
  // The cap shading is a styled lens, not a calibrated optical water solver.
  mesh.onBeforeRender = (_renderer, scene) => {
    const sky = scene.background;
    material.uniforms.sky.value = sky?.isTexture ? sky : background;
    material.uniforms.hasSky.value = sky?.isTexture ? 1 : 0;
  };
  const basis = new T.Matrix4().makeBasis(pane.u, pane.up, new T.Vector3().crossVectors(pane.u, pane.up)),
    rotation = new T.Quaternion().setFromRotationMatrix(basis),
    matrix = new T.Matrix4(),
    position = new T.Vector3(),
    scale = new T.Vector3();
  let count = 0,
    revision = -1;
  function update(water, tick) {
    if (tick === revision) return;
    count = 0;
    water.forEachDrop((_id, x, y, radius) => {
      if (count >= MAX_WATER_DROPS) throw Error('Water render capacity mismatch');
      const diameter = radius * 0.002;
      scale.set(diameter, diameter, 1);
      matrix.compose(pane.position(x, y, position), rotation, scale);
      mesh.setMatrixAt(count++, matrix);
    });
    mesh.count = count;
    // Ranges count scalar components, not matrices. Keep the capacity stable
    // while transferring only matrices that are actually drawn.
    mesh.instanceMatrix.clearUpdateRanges();
    if (count > 0) {
      mesh.instanceMatrix.addUpdateRange(0, count * 16);
      mesh.instanceMatrix.needsUpdate = true;
    }
    revision = tick;
  }
  return {
    group,
    update,
    invalidate() {
      revision = -1;
    },
    state: () => ({
      count,
      revision,
      space: `Outside ${pane.id || 'right rear quarter glass'}`,
      apertureMask: pane.mask?.edges.length || 0,
      opaqueOcclusion: true,
      physicalDiameter: true,
    }),
    dispose() {
      geometry.dispose();
      material.dispose();
      group.removeFromParent();
    },
  };
}
