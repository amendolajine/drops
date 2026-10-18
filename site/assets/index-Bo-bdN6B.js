import"./modulepreload-polyfill-P2Xu9kJm.js";var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,N=33776,P=33777,F=33778,I=33779,ee=35840,L=35841,te=35842,ne=35843,re=36196,ie=37492,ae=37496,R=37488,z=37489,oe=37490,se=37491,ce=37808,le=37809,ue=37810,de=37811,fe=37812,pe=37813,me=37814,he=37815,ge=37816,_e=37817,ve=37818,ye=37819,be=37820,xe=37821,Se=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,B=2300,ke=2301,Ae=2302,je=2303,V=2400,Me=2401,H=2402,Ne=3200,Pe=`srgb`,Fe=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=35044,Be=35048,Ve=2e3;function He(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ue(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function We(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ge(){let e=We(`canvas`);return e.style.display=`block`,e}var Ke={};function qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Je(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ye(...e){let t=e.join(` `);t in Ke||(Ke[t]=!0,U(...e))}function Xe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ze={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Qe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},$e=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),et=1234567,tt=Math.PI/180,nt=180/Math.PI;function rt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($e[e&255]+$e[e>>8&255]+$e[e>>16&255]+$e[e>>24&255]+`-`+$e[t&255]+$e[t>>8&255]+`-`+$e[t>>16&15|64]+$e[t>>24&255]+`-`+$e[n&63|128]+$e[n>>8&255]+`-`+$e[n>>16&255]+$e[n>>24&255]+$e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]).toLowerCase()}function it(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function st(e,t,n){return e===t?0:(n-e)/(t-e)}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t,n,r){return ct(e,t,1-Math.exp(-n*r))}function ut(e,t=1){return t-Math.abs(at(e,t*2)-t)}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function mt(e,t){return e+Math.random()*(t-e)}function ht(e){return e*(.5-Math.random())}function gt(e){e!==void 0&&(et=e);let t=et+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _t(e){return e*tt}function vt(e){return e*nt}function yt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function xt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function St(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Tt={DEG2RAD:tt,RAD2DEG:nt,generateUUID:rt,clamp:it,euclideanModulo:at,mapLinear:ot,inverseLerp:st,lerp:ct,damp:lt,pingpong:ut,smoothstep:dt,smootherstep:ft,randInt:pt,randFloat:mt,randFloatSpread:ht,seededRandom:gt,degToRad:_t,radToDeg:vt,isPowerOfTwo:yt,ceilPowerOfTwo:bt,floorPowerOfTwo:xt,setQuaternionFromProperEuler:St,normalize:wt,denormalize:Ct},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dt=new K,Ot=new Et,q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ye(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(kt.makeScale(e,t)),this}rotate(e){return Ye(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(kt.makeRotation(-e)),this}translate(e,t){return Ye(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(kt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kt=new q,At=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jt=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mt(){let e={enabled:!0,workingColorSpace:Fe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Pt(e.r),e.g=Pt(e.g),e.b=Pt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ye(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ye(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Fe]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),e}var Nt=Mt();function Pt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var It,Lt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=We(`canvas`)),It.width=e.width,It.height=e.height;let t=It.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=We(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pt(t[e]/255)*255):t[e]=Pt(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rt=0,zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=rt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bt(r[t].image)):e.push(Bt(r[t]))}else e=Bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Vt=0,Ht=new K,Ut=class e extends Qe{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=rt(),this.name=``,this.source=new zt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ht).x}get height(){return this.source.getSize(Ht).y}get depth(){return this.source.getSize(Ht).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends Qe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r=new Ut({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},J=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Yt.setFromMatrixColumn(e,0).length(),i=1/Yt.setFromMatrixColumn(e,1).length(),a=1/Yt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zt,e,Qt)}lookAt(e,t,n){let r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),$t.crossVectors(n,tn),$t.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),$t.crossVectors(n,tn)),$t.normalize(),en.crossVectors(tn,$t),r[0]=$t.x,r[4]=en.x,r[8]=tn.x,r[1]=$t.y,r[5]=en.y,r[9]=tn.y,r[2]=$t.z,r[6]=en.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Yt.set(r[0],r[1],r[2]).length(),o=Yt.set(r[4],r[5],r[6]).length(),s=Yt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Xt.copy(this);let c=1/a,l=1/o,u=1/s;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=l,Xt.elements[5]*=l,Xt.elements[6]*=l,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yt=new K,Xt=new J,Zt=new K(0,0,0),Qt=new K(1,1,1),$t=new K,en=new K,tn=new K,nn=new J,rn=new Et,an=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-it(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rn.setFromEuler(this),this.setFromQuaternion(rn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER=`XYZ`;var on=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},sn=0,cn=new K,ln=new Et,un=new J,dn=new K,fn=new K,pn=new K,mn=new Et,hn=new K(1,0,0),gn=new K(0,1,0),_n=new K(0,0,1),vn={type:`added`},yn={type:`removed`},bn={type:`childadded`,child:null},xn={type:`childremoved`,child:null},Sn=class e extends Qe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sn++}),this.uuid=rt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new an,r=new Et,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new J},normalMatrix:{value:new q}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new on,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ln.setFromAxisAngle(e,t),this.quaternion.multiply(ln),this}rotateOnWorldAxis(e,t){return ln.setFromAxisAngle(e,t),this.quaternion.premultiply(ln),this}rotateX(e){return this.rotateOnAxis(hn,e)}rotateY(e){return this.rotateOnAxis(gn,e)}rotateZ(e){return this.rotateOnAxis(_n,e)}translateOnAxis(e,t){return cn.copy(e).applyQuaternion(this.quaternion),this.position.add(cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hn,e)}translateY(e){return this.translateOnAxis(gn,e)}translateZ(e){return this.translateOnAxis(_n,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dn.copy(e):dn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),fn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(fn,dn,this.up):un.lookAt(dn,fn,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),ln.setFromRotationMatrix(un),this.quaternion.premultiply(ln.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vn),bn.child=e,this.dispatchEvent(bn),bn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vn),bn.child=e,this.dispatchEvent(bn),bn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fn,e,pn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fn,mn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Sn.DEFAULT_UP=new K(0,1,0),Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=class extends Sn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},wn={type:`move`},Tn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},En={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},On={h:0,s:0,l:0};function kn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var An=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=at(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=kn(i,r,e+1/3),this.g=kn(i,r,e),this.b=kn(i,r,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Pe){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){let n=En[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pt(e.r),this.g=Pt(e.g),this.b=Pt(e.b),this}copyLinearToSRGB(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return Nt.workingToColorSpace(jn.copy(this),e),Math.round(it(jn.r*255,0,255))*65536+Math.round(it(jn.g*255,0,255))*256+Math.round(it(jn.b*255,0,255))}getHexString(e=Pe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Pe){Nt.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(On);let n=ct(Dn.h,On.h,t),r=ct(Dn.s,On.s,t),i=ct(Dn.l,On.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new An;An.NAMES=En;var Mn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new An(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nn=class extends Sn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new K,Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new Wt,Gn=new Wt,Kn=new Wt,qn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new K,new K,new K,new K,new K,new K,new K,new K],Xn=new K,Zn=new Jn,Qn=new K,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new K,ur=new G,dr=0,fr=class extends Qe{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new K,vr=new K,yr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new J,Sr=new Sn,Cr=new K,wr=new Jn,Tr=new Jn,Er=new K,Dr=class e extends Qe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=rt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(He(e)?mr:pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=new K,kr=new K,Ar=new q,jr=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Or.subVectors(n,t).cross(kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Or),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ar.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mr=0,Nr=class extends Qe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=rt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new An(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new An().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fr.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Fr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),s=-Lr.dot(Ir),c=Lr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fr).addScaledVector(Ir,d),f}intersectSphere(e,t){if(e.radius<0)return null;Pr.subVectors(e.center,this.origin);let n=Pr.dot(this.direction),r=Pr.dot(Pr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,L=E-F*D,te=O-P*A,ne=k-F*A,re=j-P*N,ie=M-F*N,ae=re*ne-ie*te,R=ee*ie-L*re,z=te*L-ne*ee;if(r){if(ae<0||R<0||z<0)return null}else if((ae<0||R<0||z<0)&&(ae>0||R>0||z>0))return null;let oe=ae+R+z;if(oe===0)return null;let se=I*(ae*D+R*A+z*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new An(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new J,Vr=new Rr,Hr=new yr,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,Zr=class extends Sn{constructor(e=new Dr,t=new zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),!(Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2))&&(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),(n.boundingBox===null||Vr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$r(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$r(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$r(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$r(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Qr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function $r(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Qr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new K;qn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};qn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var ei=new Wt,ti=new Wt,ni=new Wt,ri=new Wt,ii=new J,ai=new K,oi=new yr,si=new J,ci=new Rr,li=class extends Zr{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new J,this.bindMatrixInverse=new J,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ai),this.boundingBox.expandByPoint(ai)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ai),this.boundingSphere.expandByPoint(ai)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oi.copy(this.boundingSphere),oi.applyMatrix4(r),e.ray.intersectsSphere(oi)!==!1&&(si.copy(r).invert(),ci.copy(e.ray).applyMatrix4(si),(this.boundingBox===null||ci.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():U(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;ti.fromBufferAttribute(r.attributes.skinIndex,e),ni.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ei.copy(t),t.set(0,0,0,0)):(ei.set(...t,1),t.set(0,0,0)),ei.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=ni.getComponent(e);if(r!==0){let i=ti.getComponent(e);ii.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(ri.copy(ei).applyMatrix4(ii),r)}}return t.isVector4&&(t.w=ei.w),t.applyMatrix4(this.bindMatrixInverse)}},ui=class extends Sn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},di=class extends Ut{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=new J,pi=new J,mi=class e{constructor(e=[],t=[]){this.uuid=rt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){U(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new J)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new J;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:pi;fi.multiplyMatrices(i,t[r]),fi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new di(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(U(`Skeleton: No bone found with UUID:`,r),i=new ui),this.bones.push(i),this.boneInverses.push(new J().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},hi=class extends fr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gi=new J,_i=new J,vi=[],yi=new Jn,bi=new J,xi=new Zr,Si=new yr,Ci=class extends Zr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,bi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),yi.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(yi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Si.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Si)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(xi.geometry=this.geometry,xi.material=this.material,xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Si.copy(this.boundingSphere),Si.applyMatrix4(n),e.ray.intersectsSphere(Si)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,gi),_i.multiplyMatrices(n,gi),xi.matrixWorld=_i,xi.raycast(e,vi);for(let e=0,n=vi.length;e<n;e++){let n=vi[e];n.instanceId=i,n.object=this,t.push(n)}vi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wi=new yr,Ti=new G(.5,.5),Ei=new K,Di=class{constructor(e=new jr,t=new jr,n=new jr,r=new jr,i=new jr,a=new jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ve,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476+Ti.distanceTo(e.center),wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ei.x=r.normal.x>0?e.max.x:e.min.x,Ei.y=r.normal.y>0?e.max.y:e.min.y,Ei.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ei)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Oi=class extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new An(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ki=new K,Ai=new K,ji=new J,Mi=new Rr,Ni=new yr,Pi=new K,Fi=new K,Ii=class extends Sn{constructor(e=new Dr,t=new Oi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ki.fromBufferAttribute(t,e-1),Ai.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ki.distanceTo(Ai);e.setAttribute(`lineDistance`,new hr(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Ni.radius+=i,e.ray.intersectsSphere(Ni)===!1)return;ji.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Li(this,e,Mi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Li(this,e,Mi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Li(this,e,Mi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Li(this,e,Mi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Li(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ki.fromBufferAttribute(s,i),Ai.fromBufferAttribute(s,a),n.distanceSqToSegment(ki,Ai,Pi,Fi)>r)return;Pi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Pi);if(!(c<t.near||c>t.far))return{distance:c,point:Fi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ri=new K,zi=new K,Bi=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ri.fromBufferAttribute(t,e),zi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new hr(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Vi=class extends Ut{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class extends Ut{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wi=class extends Ui{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gi=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qi=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new hr(a,3)),this.setAttribute(`normal`,new hr(o,3)),this.setAttribute(`uv`,new hr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new J;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(it(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(it(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xi=class extends Yi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zi=class extends Xi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Qi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var $i=new K,ea=new K,ta=new Qi,na=new Qi,ra=new Qi,ia=class extends Yi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ea.subVectors(r[0],r[1]).add(r[0]),c=ea);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:($i.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=$i),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ta.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),na.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ra.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ta.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),na.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ra.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ta.calc(s),na.calc(s),ra.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function aa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function oa(e,t){let n=1-e;return n*n*t}function sa(e,t){return 2*(1-e)*e*t}function ca(e,t){return e*e*t}function la(e,t,n,r){return oa(e,t)+sa(e,n)+ca(e,r)}function ua(e,t){let n=1-e;return n*n*n*t}function da(e,t){let n=1-e;return 3*n*n*e*t}function fa(e,t){return 3*(1-e)*e*e*t}function pa(e,t){return e*e*e*t}function ma(e,t,n,r,i){return ua(e,t)+da(e,n)+fa(e,r)+pa(e,i)}var ha=class extends Yi{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,r.x,i.x,a.x,o.x),ma(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Yi{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,r.x,i.x,a.x,o.x),ma(e,r.y,i.y,a.y,o.y),ma(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Yi{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Yi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Yi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(la(e,r.x,i.x,a.x),la(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Yi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(la(e,r.x,i.x,a.x),la(e,r.y,i.y,a.y),la(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(aa(o,s.x,c.x,l.x,u.x),aa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},Sa=Object.freeze({__proto__:null,ArcCurve:Zi,CatmullRomCurve3:ia,CubicBezierCurve:ha,CubicBezierCurve3:ga,EllipseCurve:Xi,LineCurve:_a,LineCurve3:va,QuadraticBezierCurve:ya,QuadraticBezierCurve3:ba,SplineCurve:xa}),Ca=class extends Yi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Sa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Sa[n.type]().fromJSON(n))}return this}},wa=class extends Ca{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _a(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ya(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ha(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new xa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Xi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ta=class extends wa{constructor(e){super(e),this.uuid=rt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new wa().fromJSON(n))}return this}};function Ea(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Da(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Pa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ka(a,o,n,s,c,l,0),o}function Da(e,t,n,r,i){let a;if(i===io(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=to(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=to(i/r|0,e[i],e[i+1],a);return a&&qa(a,a.next)&&(no(a),a=a.next),a}function Oa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(qa(n,n.next)||Ka(n.prev,n,n.next)===0)){if(no(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ka(e,t,n,r,i,a,o){if(!e)return;!o&&a&&za(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ja(e,r,i,a):Aa(e))t.push(c.i,e.i,l.i),no(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ma(Oa(e),t),ka(e,t,n,r,i,a,2)):o===2&&Na(e,t,n,r,i,a):ka(Oa(e),t,n,r,i,a,1);break}}}function Aa(e){let t=e.prev,n=e,r=e.next;if(Ka(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Wa(i,s,a,c,o,l,m.x,m.y)&&Ka(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ja(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ka(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Va(p,m,t,n,r),v=Va(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Wa(s,u,c,d,l,f,y.x,y.y)&&Ka(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Wa(s,u,c,d,l,f,b.x,b.y)&&Ka(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Wa(s,u,c,d,l,f,y.x,y.y)&&Ka(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Wa(s,u,c,d,l,f,b.x,b.y)&&Ka(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ma(e,t){let n=e;do{let r=n.prev,i=n.next.next;!qa(r,i)&&Ja(r,n,n.next,i)&&Qa(r,i)&&Qa(i,r)&&(t.push(r.i,n.i,i.i),no(n),no(n.next),n=e=i),n=n.next}while(n!==e);return Oa(n)}function Na(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ga(o,e)){let s=eo(o,e);o=Oa(o,o.next),s=Oa(s,s.next),ka(o,t,n,r,i,a,0),ka(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Pa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Da(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ha(o))}i.sort(Fa);for(let e=0;e<i.length;e++)n=Ia(i[e],n);return n}function Fa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ia(e,t){let n=La(e,t);if(!n)return t;let r=eo(n,e);return Oa(r,r.next),Oa(n,n.next)}function La(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(qa(e,n))return n;do{if(qa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ua(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Qa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ra(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ra(e,t){return Ka(e.prev,e,t.prev)<0&&Ka(t.next,e,e.next)<0}function za(e,t,n,r){let i=e;do i.z===0&&(i.z=Va(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ba(i)}function Ba(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Va(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ha(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ua(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Wa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ua(e,t,n,r,i,a,o,s)}function Ga(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Za(e,t)&&(Qa(e,t)&&Qa(t,e)&&$a(e,t)&&(Ka(e.prev,e,t.prev)||Ka(e,t.prev,t))||qa(e,t)&&Ka(e.prev,e,e.next)>0&&Ka(t.prev,t,t.next)>0)}function Ka(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function qa(e,t){return e.x===t.x&&e.y===t.y}function Ja(e,t,n,r){let i=Xa(Ka(e,t,n)),a=Xa(Ka(e,t,r)),o=Xa(Ka(n,r,e)),s=Xa(Ka(n,r,t));return!!(i!==a&&o!==s||i===0&&Ya(e,n,t)||a===0&&Ya(e,r,t)||o===0&&Ya(n,e,r)||s===0&&Ya(n,t,r))}function Ya(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Xa(e){return e>0?1:e<0?-1:0}function Za(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ja(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Qa(e,t){return Ka(e.prev,e,e.next)<0?Ka(e,t,e.next)>=0&&Ka(e,e.prev,t)>=0:Ka(e,t,e.prev)<0||Ka(e,e.next,t)<0}function $a(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function eo(e,t){let n=ro(e.i,e.x,e.y),r=ro(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function to(e,t,n,r){let i=ro(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function no(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ro(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function io(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ao=class{static triangulate(e,t,n=2){return Ea(e,t,n)}},oo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];so(e),co(n,e);let a=e.length;t.forEach(so);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,co(n,t[e]);let o=ao.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function so(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function co(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var lo=class e extends Dr{constructor(e=new Ta([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new hr(r,3)),this.setAttribute(`uv`,new hr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?uo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!oo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];oo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||W(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=oo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);re(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);re(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=oo.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),re(x.x,x.y,x.z)):re(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),re(x.x,x.y,x.z)):re(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);re(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?re(i.x,i.y+g[s-1].y,g[s-1].x+n):re(i.x,i.y,c+n)}}}L(),te();function L(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ie(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ie(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ie(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ie(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function te(){let e=r.length/3,t=0;ne(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ne(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ne(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ae(t+r+n,t+i+n,t+i+a,t+r+a)}}}function re(e,t,n){a.push(e),a.push(t),a.push(n)}function ie(e,t,i){R(e),R(t),R(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);z(o[0]),z(o[1]),z(o[2])}function ae(e,t,i,a){R(e),R(t),R(a),R(t),R(i),R(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);z(s[0]),z(s[1]),z(s[3]),z(s[1]),z(s[2]),z(s[3])}function R(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function z(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Sa[i.type]().fromJSON(i)),new e(r,t.options)}},uo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function fo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var po=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},mo=class e extends Dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new hr(s,3)),this.setAttribute(`normal`,new hr(c,3)),this.setAttribute(`uv`,new hr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ho=class e extends Dr{constructor(e=new Ta([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new hr(r,3)),this.setAttribute(`normal`,new hr(i,3)),this.setAttribute(`uv`,new hr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;oo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];oo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=oo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return go(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function go(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var _o=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},vo=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function yo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(xo(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(xo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function bo(e){let t={};for(let n=0;n<e.length;n++){let r=yo(e[n]);for(let e in r)t[e]=r[e]}return t}function xo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function So(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Co(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}var wo={clone:yo,merge:bo},To=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Do=class extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=To,this.fragmentShader=Eo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=So(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new An().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Wt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new J().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends Do{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ko=class extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new An(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new An(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ao=class extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ne,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function No(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Po=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Fo=class extends Po{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V,endingEnd:V}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Me:i=e,o=2*t-n;break;case H:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Me:a=e,s=2*n-t;break;case H:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Io=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Lo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ro=class extends Po{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Vo(n,t,g,y,r);i[p]=zo(x,o,_,b,m)}return i}};function zo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Bo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Vo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=zo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Bo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ho=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),No(e.settings)&&(n.settings={inTangents:Mo(e.settings.inTangents,Array),outTangents:Mo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ro(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case B:t=this.InterpolantFactoryMethodDiscrete;break;case ke:t=this.InterpolantFactoryMethodLinear;break;case Ae:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return B;case this.InterpolantFactoryMethodLinear:return ke;case this.InterpolantFactoryMethodSmooth:return Ae;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;No(this.settings)&&(Uo(this.settings.inTangents,e),Uo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ue(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ae,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,No(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Uo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ho.prototype.ValueTypeName=``,Ho.prototype.TimeBufferType=Float32Array,Ho.prototype.ValueBufferType=Float32Array,Ho.prototype.DefaultInterpolation=ke;var Wo=class extends Ho{constructor(e,t,n){super(e,t,n)}};Wo.prototype.ValueTypeName=`bool`,Wo.prototype.ValueBufferType=Array,Wo.prototype.DefaultInterpolation=B,Wo.prototype.InterpolantFactoryMethodLinear=void 0,Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Go.prototype.ValueTypeName=`color`;var Ko=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName=`number`;var qo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Et.slerpFlat(i,0,a,c-o,a,c,s);return i}},Jo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};Jo.prototype.ValueTypeName=`quaternion`,Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Ho{constructor(e,t,n){super(e,t,n)}};Yo.prototype.ValueTypeName=`string`,Yo.prototype.ValueBufferType=Array,Yo.prototype.DefaultInterpolation=B,Yo.prototype.InterpolantFactoryMethodLinear=void 0,Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Xo.prototype.ValueTypeName=`vector`;var Zo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Qo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Qo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Qo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var $o=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},es=class{constructor(e){this.manager=e===void 0?$o:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};es.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ts=new WeakMap,ns=class extends es{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Zo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ts.get(a);e===void 0&&(e=[],ts.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=We(`img`);function s(){l(),t&&t(this);let n=ts.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ts.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Zo.remove(`image:${e}`);let n=ts.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ts.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},rs=class extends es{constructor(e){super(e)}load(e,t,n,r){let i=new Ut,a=new ns(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},is=class extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new An(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},as=class extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new An(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},os=new J,ss=new K,cs=new K,ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ss.setFromMatrixPosition(e.matrixWorld),t.position.copy(ss),cs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(os,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},us=new K,ds=new Et,fs=new K,ps=class extends Sn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=Ve,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,ds,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,fs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,ds,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,fs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new K,hs=new G,gs=new G,_s=class extends ps{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nt*2*Math.atan(Math.tan(tt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,hs,gs),t.subVectors(gs,hs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=class extends ls{constructor(){super(new _s(90,1,.5,500)),this.isPointLightShadow=!0}},ys=class extends is{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new vs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bs=class extends ps{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xs=class extends ls{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new xs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cs=-90,ws=1,Ts=class extends Sn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _s(Cs,ws,e,t);r.layers=this.layers,this.add(r);let i=new _s(Cs,ws,e,t);i.layers=this.layers,this.add(i);let a=new _s(Cs,ws,e,t);a.layers=this.layers,this.add(a);let o=new _s(Cs,ws,e,t);o.layers=this.layers,this.add(o);let s=new _s(Cs,ws,e,t);s.layers=this.layers,this.add(s);let c=new _s(Cs,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Es=class extends _s{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ds=`\\[\\]\\.:\\/`,Os=RegExp(`[\\[\\]\\.:\\/]`,`g`),ks=`[^\\[\\]\\.:\\/]`,As=`[^`+Ds.replace(`\\.`,``)+`]`,js=`((?:WC+[\\/:])*)`.replace(`WC`,ks),Ms=`(WCOD+)?`.replace(`WCOD`,As),Ns=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ks),Ps=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ks),Fs=RegExp(`^`+js+Ms+Ns+Ps+`$`),Is=[`material`,`materials`,`bones`,`map`],Ls=class{constructor(e,t,n){let r=n||Rs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Os,``)}static parseTrackName(e){let t=Fs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Is.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rs.Composite=Ls,Rs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Rs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Rs.prototype.GetterByBindingType=[Rs.prototype._getValue_direct,Rs.prototype._getValue_array,Rs.prototype._getValue_arrayElement,Rs.prototype._getValue_toArray],Rs.prototype.SetterByBindingTypeAndVersioning=[[Rs.prototype._setValue_direct,Rs.prototype._setValue_direct_setNeedsUpdate,Rs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rs.prototype._setValue_array,Rs.prototype._setValue_array_setNeedsUpdate,Rs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rs.prototype._setValue_arrayElement,Rs.prototype._setValue_arrayElement_setNeedsUpdate,Rs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rs.prototype._setValue_fromArray,Rs.prototype._setValue_fromArray_setNeedsUpdate,Rs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zs=new J,Bs=class{constructor(e,t,n=0,r=1/0){this.ray=new Rr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new on,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return zs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zs),this}intersectObject(e,t=!0,n=[]){return Hs(e,this,n,t),n.sort(Vs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Hs(e[r],this,n,t);return n.sort(Vs),n}};function Vs(e,t){return e.distance-t.distance}function Hs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Hs(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Us(e,t,n,r){let i=Ws(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:case ne:return Math.max(e,16)*Math.max(t,8)/4;case ee:case te:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case R:case z:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Se:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ws(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Gs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ks(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var qs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new An(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new An(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new An(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new An(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Js={basic:{uniforms:bo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:qs.meshbasic_vert,fragmentShader:qs.meshbasic_frag},lambert:{uniforms:bo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new An(0)},envMapIntensity:{value:1}}]),vertexShader:qs.meshlambert_vert,fragmentShader:qs.meshlambert_frag},phong:{uniforms:bo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new An(0)},specular:{value:new An(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qs.meshphong_vert,fragmentShader:qs.meshphong_frag},standard:{uniforms:bo([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new An(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qs.meshphysical_vert,fragmentShader:qs.meshphysical_frag},toon:{uniforms:bo([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new An(0)}}]),vertexShader:qs.meshtoon_vert,fragmentShader:qs.meshtoon_frag},matcap:{uniforms:bo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:qs.meshmatcap_vert,fragmentShader:qs.meshmatcap_frag},points:{uniforms:bo([Y.points,Y.fog]),vertexShader:qs.points_vert,fragmentShader:qs.points_frag},dashed:{uniforms:bo([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qs.linedashed_vert,fragmentShader:qs.linedashed_frag},depth:{uniforms:bo([Y.common,Y.displacementmap]),vertexShader:qs.depth_vert,fragmentShader:qs.depth_frag},normal:{uniforms:bo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:qs.meshnormal_vert,fragmentShader:qs.meshnormal_frag},sprite:{uniforms:bo([Y.sprite,Y.fog]),vertexShader:qs.sprite_vert,fragmentShader:qs.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qs.background_vert,fragmentShader:qs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:qs.backgroundCube_vert,fragmentShader:qs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qs.cube_vert,fragmentShader:qs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qs.equirect_vert,fragmentShader:qs.equirect_frag},distance:{uniforms:bo([Y.common,Y.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qs.distance_vert,fragmentShader:qs.distance_frag},shadow:{uniforms:bo([Y.lights,Y.fog,{color:{value:new An(0)},opacity:{value:1}}]),vertexShader:qs.shadow_vert,fragmentShader:qs.shadow_frag}};Js.physical={uniforms:bo([Js.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new An(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new An(0)},specularColor:{value:new An(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:qs.meshphysical_vert,fragmentShader:qs.meshphysical_frag};var Ys={r:0,b:0,g:0},Xs=new J,Zs=new q;Zs.set(-1,0,0,0,1,0,0,0,1);function Qs(e,t,n,r,i,a){let o=new An(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Zr(new Ki(1,1,1),new Do({name:`BackgroundCubeMaterial`,uniforms:yo(Js.backgroundCube.uniforms),vertexShader:Js.backgroundCube.vertexShader,fragmentShader:Js.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zs),l.material.toneMapped=Nt.getTransfer(i.colorSpace)!==Le,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Zr(new po(2,2),new Do({name:`BackgroundMaterial`,uniforms:yo(Js.background.uniforms),vertexShader:Js.background.vertexShader,fragmentShader:Js.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(i.colorSpace)!==Le,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ys,Co(e)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function $s(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ec(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function tc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function nc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new jr,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var rc=4,ic=6,ac=20,oc=256,sc=new bs,cc=new An,lc=null,uc=0,dc=0,fc=!1,pc=new K,mc=new K,hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=pc}=i;lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,uc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Fe,depthBuffer:!1},r=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gc(r)),this._blurMaterial=bc(r,e,t),this._ggxMaterial=yc(r,e,t)}return r}_compileMaterial(e){let t=new Zr(new Dr,e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,r,i){let a=new _s(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(cc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zr(new Ki,new zr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(cc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;vc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;vc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,sc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-rc?n-d+rc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,vc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,sc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,vc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,sc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];vc(t,3*l*(r>this._lodMax-rc?r-this._lodMax+rc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,sc)}};function gc(e){let t=[],n=[],r=e,i=e-rc+1+ic;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?mc.set(1,r,n):e===1?mc.set(-n,1,-r):e===2?mc.set(-n,r,1):e===3?mc.set(-1,r,-n):e===4?mc.set(-n,-1,r):mc.set(n,r,-1),mc.toArray(l,(e*6+t)*3)}}let u=new Dr;u.setAttribute(`position`,new fr(c,3)),u.setAttribute(`outputDirection`,new fr(l,3)),n.push(new Zr(u,null)),r>rc&&r--}return{lodMeshes:n,sizeLods:t}}function _c(e,t,n){let r=new Kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function vc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function yc(e,t,n){return new Do({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:oc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bc(e,t,n){return new Do({name:`SphericalGaussianBlur`,defines:{SAMPLES:ac,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return new Do({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return new Do({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ki(5,5,5),i=new Do({name:`CubemapFromEquirect`,uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Zr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Ts(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Tc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new wc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ec(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ye(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Dc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Oc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function kc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ac(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new qt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new G(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function jc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Mc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Nc(e,t,n,r,i,a){let o=new Kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Dr;l.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let u=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zr(l,u),f=new bs(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Kt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Nt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Mc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Pc=new Ut,Fc=new Ui(1,1),Ic=new qt,Lc=new Jt,Rc=new Vi,zc=[],Bc=[],Vc=new Float32Array(16),Hc=new Float32Array(9),Uc=new Float32Array(4);function Wc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zc[i];if(a===void 0&&(a=new Float32Array(i),zc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Kc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qc(e,t){let n=Bc[t];n===void 0&&(n=new Int32Array(t),Bc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2fv(this.addr,t),Kc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gc(n,t))return;e.uniform3fv(this.addr,t),Kc(n,t)}}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4fv(this.addr,t),Kc(n,t)}}function Qc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Uc.set(r),e.uniformMatrix2fv(this.addr,!1,Uc),Kc(n,r)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Hc.set(r),e.uniformMatrix3fv(this.addr,!1,Hc),Kc(n,r)}}function el(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Vc.set(r),e.uniformMatrix4fv(this.addr,!1,Vc),Kc(n,r)}}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2iv(this.addr,t),Kc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gc(n,t))return;e.uniform3iv(this.addr,t),Kc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4iv(this.addr,t),Kc(n,t)}}function al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2uiv(this.addr,t),Kc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gc(n,t))return;e.uniform3uiv(this.addr,t),Kc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4uiv(this.addr,t),Kc(n,t)}}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Fc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Fc):a=Pc,n.setTexture2D(t||a,i)}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Lc,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Rc,i)}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ic,i)}function pl(e){switch(e){case 5126:return Jc;case 35664:return Yc;case 35665:return Xc;case 35666:return Zc;case 35674:return Qc;case 35675:return $c;case 35676:return el;case 5124:case 35670:return tl;case 35667:case 35671:return nl;case 35668:case 35672:return rl;case 35669:case 35673:return il;case 5125:return al;case 36294:return ol;case 36295:return sl;case 36296:return cl;case 35678:case 36198:case 36298:case 36306:case 35682:return ll;case 35679:case 36299:case 36307:return ul;case 35680:case 36300:case 36308:case 36293:return dl;case 36289:case 36303:case 36311:case 36292:return fl}}function ml(e,t){e.uniform1fv(this.addr,t)}function hl(e,t){let n=Wc(t,this.size,2);e.uniform2fv(this.addr,n)}function gl(e,t){let n=Wc(t,this.size,3);e.uniform3fv(this.addr,n)}function _l(e,t){let n=Wc(t,this.size,4);e.uniform4fv(this.addr,n)}function vl(e,t){let n=Wc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yl(e,t){let n=Wc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bl(e,t){let n=Wc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xl(e,t){e.uniform1iv(this.addr,t)}function Sl(e,t){e.uniform2iv(this.addr,t)}function Cl(e,t){e.uniform3iv(this.addr,t)}function wl(e,t){e.uniform4iv(this.addr,t)}function Tl(e,t){e.uniform1uiv(this.addr,t)}function El(e,t){e.uniform2uiv(this.addr,t)}function Dl(e,t){e.uniform3uiv(this.addr,t)}function Ol(e,t){e.uniform4uiv(this.addr,t)}function kl(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Fc:Pc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Al(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Lc,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Rc,a[e])}function Ml(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ic,a[e])}function Nl(e){switch(e){case 5126:return ml;case 35664:return hl;case 35665:return gl;case 35666:return _l;case 35674:return vl;case 35675:return yl;case 35676:return bl;case 5124:case 35670:return xl;case 35667:case 35671:return Sl;case 35668:case 35672:return Cl;case 35669:case 35673:return wl;case 5125:return Tl;case 36294:return El;case 36295:return Dl;case 36296:return Ol;case 35678:case 36198:case 36298:case 36306:case 35682:return kl;case 35679:case 36299:case 36307:return Al;case 35680:case 36300:case 36308:case 36293:return jl;case 36289:case 36303:case 36311:case 36292:return Ml}}var Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pl(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nl(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Rl(e,t){e.seq.push(t),e.map[t.id]=t}function zl(e,t,n){let r=e.name,i=r.length;for(Ll.lastIndex=0;;){let a=Ll.exec(r),o=Ll.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Rl(n,l===void 0?new Pl(s,e,t):new Fl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Il(s),Rl(n,e)),n=e}}}var Bl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);zl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Vl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Hl=37297,Ul=0;function Wl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Gl=new q;function Kl(e){Nt._getMatrix(Gl,Nt.workingColorSpace,e);let t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(Nt.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ql(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Wl(e.getShaderSource(t),r)}return i}function Jl(e,t){let n=Kl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Yl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Xl(e,t){let n=Yl[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Zl=new K;function Ql(){return Nt.getLuminanceCoefficients(Zl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Zl.x.toFixed(4)}, ${Zl.y.toFixed(4)}, ${Zl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function $l(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(nu).join(`
`)}function eu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function tu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function nu(e){return e!==``}function ru(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var au=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(e){return e.replace(au,cu)}var su=new Map;function cu(e,t){let n=qs[t];if(n===void 0){let e=su.get(t);if(e!==void 0)n=qs[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ou(n)}var lu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(e){return e.replace(lu,du)}function du(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function mu(e){return pu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function gu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:hu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var _u={302:`ENVMAP_MODE_REFRACTION`};function vu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_u[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yu[e.combine]||`ENVMAP_BLENDING_NONE`}function xu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Su(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=mu(n),l=gu(n),u=vu(n),d=bu(n),f=xu(n),p=$l(n),m=eu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nu).join(`
`),_.length>0&&(_+=`
`)):(g=[fu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(nu).join(`
`),_=[fu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:qs.tonemapping_pars_fragment,n.toneMapping===0?``:Xl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,qs.colorspace_pars_fragment,Jl(`linearToOutputTexel`,n.outputColorSpace),Ql(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(nu).join(`
`)),o=ou(o),o=ru(o,n),o=iu(o,n),s=ou(s),s=ru(s,n),s=iu(s,n),o=uu(o),s=uu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Vl(i,i.VERTEX_SHADER,y),S=Vl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ql(i,x,`vertex`),n=ql(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Bl(i,h),T=tu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Hl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ul++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Cu=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=Cu++,this.code=e,this.usedTimes=0}};function Eu(e){return e===1030||e===37490||e===36285}function Du(e,t,n,r,i,a){let o=new on,s=new wu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Js[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,L=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,re=!!i.normalMap,ie=!!i.displacementMap,ae=!!i.emissiveMap,R=!!i.metalnessMap,z=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=oe&&!!i.anisotropyMap,me=se&&!!i.clearcoatMap,he=se&&!!i.clearcoatNormalMap,ge=se&&!!i.clearcoatRoughnessMap,_e=ue&&!!i.iridescenceMap,ve=ue&&!!i.iridescenceThicknessMap,ye=de&&!!i.sheenColorMap,be=de&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=fe&&!!i.transmissionMap,Te=fe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:te,bumpMap:ne,normalMap:re,displacementMap:ie,emissiveMap:ae,normalMapObjectSpace:re&&i.normalMapType===1,normalMapTangentSpace:re&&i.normalMapType===0,packedNormalMap:re&&i.normalMapType===0&&Eu(i.normalMap.format),metalnessMap:R,roughnessMap:z,anisotropy:oe,anisotropyMap:pe,clearcoat:se,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:fe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:B,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:ne&&m(i.bumpMap.channel),normalMapUv:re&&m(i.normalMap.channel),displacementMapUv:ie&&m(i.displacementMap.channel),emissiveMapUv:ae&&m(i.emissiveMap.channel),metalnessMapUv:R&&m(i.metalnessMap.channel),roughnessMapUv:z&&m(i.roughnessMap.channel),anisotropyMapUv:pe&&m(i.anisotropyMap.channel),clearcoatMapUv:me&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(re||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&re===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Nt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Js[t];n=wo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Su(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ju(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ku),r.length>1&&r.sort(t||Au),i.length>1&&i.sort(t||Au)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Mu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ju,e.set(t,[i])):n>=r.length?(i=new ju,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new An};break;case`SpotLight`:n={position:new K,direction:new K,color:new An,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new An,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new An,groundColor:new An};break;case`RectAreaLight`:n={color:new An,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Fu=0;function Iu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Lu(e){let t=new Nu,n=Pu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new J,o=new J;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Iu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Fu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ru(e){let t=new Lu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function zu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ru(e),t.set(n,[a])):r>=i.length?(a=new Ru(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hu=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Uu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Wu=new J,Gu=new K,Ku=new K;function qu(e,t,n){let r=new Di,a=new G,o=new G,c=new Wt,l=new Ao,u=new jo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Do({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Bu,fragmentShader:Vu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Dr;y.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Zr(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){U(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Kt(a.x,a.y,{format:A,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ui(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new wc(a.x),p.map.depthTexture=new Wi(a.x,h)):(p.map=new Kt(a.x,a.y),p.map.depthTexture=new Ui(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Gu),Ku.copy(e.position),Ku.add(Hu[t]),e.up.copy(Uu[t]),e.lookAt(Ku),e.updateMatrixWorld(),n.makeTranslation(-Gu.x,-Gu.y,-Gu.z),Wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Wu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Kt(a.x,a.y,{format:A,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ju(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):z(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ze[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):z(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new An(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},L=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new Wt().fromArray(L),re=new Wt().fromArray(te);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),R(e.CULL_FACE),de(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function z(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(z(e.BLEND),g=!1);else if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?z(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):z(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?z(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):z(e.POLYGON_OFFSET_FILL)}function _e(t){t?R(e.SCISSOR_TEST):z(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ye(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function be(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function Me(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new An(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:z,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:Ne,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:Me,reset:Pe}}function Yu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):We(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ie:Nt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),ee(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ee(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let L=0;function te(){L=0}function ne(){return L}function re(e){L=e}function ie(){let e=L;return e>=p.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),L+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function R(t,n){let r=f.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function z(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?he(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function oe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?he(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?ge(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ce={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},le={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ce[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ce[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ce[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,le[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,le[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,ue[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function fe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ae(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&I(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=pe(r.start,n.width,4),c=pe(t.start,n.width,4);r.start<=i+1&&s===c&&pe(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function he(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=fe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Nt.getPrimaries(Nt.workingColorSpace),r=n.colorSpace===``?null:Nt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=ke(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);de(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=j(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&me(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Us(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Us(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ae(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ae(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ge(t,n,r){if(n.image.length!==6)return;let i=fe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Nt.getPrimaries(Nt.workingColorSpace),s=n.colorSpace===``?null:Nt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=ke(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);de(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ae(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function _e(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Oe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,De(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);Oe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,N)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),de(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else R(n.depthTexture,0);let o=a.__webglTexture,s=De(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Oe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Oe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)ye(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(n.__webglFramebuffer[0],t,0):ye(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ve(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){let i=f.get(t);n!==void 0&&_e(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&be(t)}function Se(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,P);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Oe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),de(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)_e(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else _e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),de(s,i),_e(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),de(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)_e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else _e(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(Oe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(o),Te.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(p.maxSamples,e.samples)}function Oe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function B(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Nt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=R,this.setTexture2DArray=z,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Xu(e,t){function n(n,r=``){let i,a=Nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Do({vertexShader:Zu,fragmentShader:Qu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zr(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends Qe{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new $u,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new G,k=null,A=null,j=new _s;j.viewport=new Wt;let M=new _s;M.viewport=new Wt;let N=[j,M],P=new Es,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Tn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Tn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Tn,C[e]=t),t.getHandSpace()};function ee(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function L(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,L),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,L),r.addEventListener(`inputsourceschange`,te),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Kt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new Ui(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Kt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ne=new K,re=new K;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ae(P,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),R(e,P,i)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let z=null;function oe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new _s,o.layers.enable(n),o.viewport=new Wt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Gi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}z&&z(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let se=new Gs;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}},td=new J,nd=new q;nd.set(-1,0,0,0,1,0,0,0,1);function rd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Co(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(td.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(nd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function id(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ad=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),od=null;function sd(){return od===null&&(od=new di(ad,16,16,A,_),od.name=`DFG_LUT`,od.minFilter=s,od.magFilter=s,od.wrapS=n,od.wrapT=n,od.generateMipmaps=!1,od.needsUpdate=!0),od}var cd=class{constructor(e={}){let{canvas:t=Ge(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([M,j,k]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,A=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ee=!1,L=null,te=null,ne=null,re=null;this._outputColorSpace=Pe;let ie=0,ae=0,R=null,z=-1,oe=null,se=new Wt,ce=new Wt,le=null,ue=new An(0),de=0,fe=t.width,pe=t.height,me=1,he=null,ge=null,_e=new Wt(0,0,fe,pe),ve=new Wt(0,0,fe,pe),ye=!1,be=new Di,xe=!1,Se=!1,Ce=new J,we=new K,Te=new Wt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return R===null?me:1}let B=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,V,Me,H,Ne,Fe,Ie,Le,Re,ze,Be,He,Ue,We,Ke,Je,Ye,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),W(`WebGLRenderer: `+e.message),e}function nt(){Ae=new Ec(B),Ae.init(),$e=new Xu(B,Ae),je=new tc(B,Ae,e,$e),V=new Ju(B,Ae),je.reversedDepthBuffer&&m&&V.buffers.depth.setReversed(!0),te=B.createFramebuffer(),ne=B.createFramebuffer(),re=B.createFramebuffer(),Me=new kc(B),H=new Ou,Ne=new Yu(B,Ae,V,H,je,$e,Me),Fe=new Tc(I),Ie=new Ks(B),et=new $s(B,Ie),Le=new Dc(B,Ie,Me,et),Re=new jc(B,Le,Ie,et,Me),Ye=new Ac(B,je,Ne),We=new nc(H),ze=new Du(I,Fe,Ae,je,et,We),Be=new rd(I,H),He=new Mu,Ue=new zu(Ae),Je=new Qs(I,Fe,V,Re,x,s),Ke=new qu(I,Re,je),tt=new id(B,Me,je,V),Ze=new ec(B,Ae,Me),Qe=new Oc(B,Ae,Me),Me.programs=ze.programs,I.capabilities=je,I.extensions=Ae,I.properties=H,I.renderLists=He,I.shadowMap=Ke,I.state=V,I.info=Me}S!==1009&&(F=new Nc(S,t.width,t.height,o,r,i));let rt=new ed(I,B);this.xr=rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){rt.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(fe=e,pe=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),V.viewport(se.copy(_e).multiplyScalar(me).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(ce.copy(ve).multiplyScalar(me).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=C.has(t)}if(e){let e=R.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),L=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Je.dispose(),He.dispose(),Ue.dispose(),H.dispose(),Fe.dispose(),Re.dispose(),et.dispose(),tt.dispose(),ze.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,pt),rt.removeEventListener(`sessionend`,mt),ht.stop()};function it(e){e.preventDefault(),qe(`WebGLRenderer: Context Lost.`),ee=!0}function at(){qe(`WebGLRenderer: Context Restored.`),ee=!1;let e=Me.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;nt(),Me.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function ot(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),H.remove(e)}function lt(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Ie.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){L!==null&&e.isNodeMaterial&&L.setObject(r,e),xe===!0&&We.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),L!==null&&L.renderStart(e,t,n),A=Ue.get(n),A.init(t),P.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),Se=this.localClippingEnabled,xe=We.init(this.clippingPlanes,Se),xe===!0&&We.setGlobalState(this.clippingPlanes,t),L!==null&&Ke.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),A=P.pop(),L!==null&&L.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=H.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Gs;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,rt.setAnimationLoop(e),e===null?ht.stop():ht.start()},rt.addEventListener(`sessionstart`,pt),rt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;L!==null&&L.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=F!==null&&(R===null||n)&&F.begin(I,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,R),A=Ue.get(e,P.length),A.init(t),A.state.textureUnits=Ne.getTextureUnits(),P.push(A),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,Ve,t.reversedDepth),Se=this.localClippingEnabled,xe=We.init(this.clippingPlanes,Se),O=He.get(e,N.length),O.init(),N.push(O),rt.enabled===!0&&rt.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,I.sortObjects)}gt(e,t,0,I.sortObjects),O.finish(),L!==null&&L.updateLights(A.state.lightsArray),I.sortObjects===!0&&O.sort(he,ge),De=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,De&&Je.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&We.beginShadows();let i=A.state.shadowsArray;if(Ke.render(i,e,t),xe===!0&&We.endShadows(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}De&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),De&&Je.render(e),_t(O,e,t)}R!==null&&ae===0&&(Ne.updateMultisampleRenderTarget(R),Ne.updateRenderTargetMipmap(R)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),et.resetDefaultState(),z=-1,oe=null,P.pop(),P.length>0?(A=P[P.length-1],Ne.setTextureUnits(A.state.textureUnits),xe===!0&&We.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,N.pop(),O=N.length>0?N[N.length-1]:null,L!==null&&L.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Re.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Te.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Te.z,s,t)}}else a.visible&&O.push(e,i,a,n,Te.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),xe===!0&&We.setGlobalState(I.clippingPlanes,n),r&&V.viewport(se.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ue),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),De&&Je.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),xe===!0&&We.setGlobalState(I.clippingPlanes,r),yt(e,n,r),Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,d),I.setClearColor(ue,de),p!==void 0&&(r.viewport=p),I.toneMapping=f}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){L!==null&&i.isNodeMaterial&&L.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=Ee);let r=H.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=ze.getUniforms(e),L!==null&&e.isNodeMaterial&&L.build(e,n,s),e.onBeforeCompile(s,I),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Ct(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Ne.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?I.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=A.state.lights;if(xe===!0&&(Se===!0||e!==oe)){let t=e===oe&&r.id===z;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),L&&r.isNodeMaterial&&L.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==z&&(z=r.id,C=!0),v.needsLights){let e=wt(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||oe!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(B,`sunShadowMap`,y.state.sunShadowMap,Ne),y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Ne),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Ne),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Ne)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,Ne))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,Ne),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,Ne),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,Ne));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=sd()),C){if(T.setValue(B,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&G(E,w),a&&r.fog===!0&&Be.refreshFogUniforms(E,a),Be.refreshMaterialUniforms(E,r,me,pe,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Bl.upload(B,St(v),E,Ne)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Bl.upload(B,St(v),E,Ne),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function G(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,V.viewport(se),V.scissor(ce),V.setScissorTest(le),z=-1;return}if(o.__webglFramebuffer===void 0)Ne.setupRenderTarget(e);else if(o.__hasExternalTextures)Ne.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ne.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ne.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(_e).multiplyScalar(me).floor(),ce.copy(ve).multiplyScalar(me).floor(),le=ye;if(n!==0&&(r=te),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(se),V.scissor(ce),V.setScissorTest(le),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}z=-1};function Dt(e){let t=H.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Dt(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=R===null?null:H.get(R).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Dt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=R===null?null:H.get(R).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xe(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ne.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Ne.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ne.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Ne.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,ne),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&Ne.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ne.setTextureCube(e,0):e.isData3DTexture?Ne.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ne.setTexture2DArray(e,0):Ne.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){ie=0,ae=0,R=null,V.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ve}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}},ld=new K;function ud(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;ld.copy(t),ld[r]=0,ld.normalize();let l=.5*o/(o+s),u=1-ld.angleTo(e)/c;return Math.sign(ld[n])===1?u*l:s/(o+s)+l+l*(1-u)}var dd=class e extends Ki{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new K,c=new K,l=new K(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new K,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=ud(m,c,`z`,`y`,i,n),f[a+1]=1-ud(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-ud(m,c,`z`,`y`,i,n),f[a+1]=1-ud(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-ud(m,c,`x`,`z`,i,e),f[a+1]=ud(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-ud(m,c,`x`,`z`,i,e),f[a+1]=1-ud(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-ud(m,c,`x`,`y`,i,e),f[a+1]=1-ud(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=ud(m,c,`x`,`y`,i,e),f[a+1]=1-ud(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function fd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=pd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=pd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function pd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new fr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var md={source:`WRAD ARMS by wriks`,license:`CC0-1.0`,sourceSha256:`d5f91fdc9bd6465dc59b54265ca2aefe2dc881c00b6c7a9c76bd0b80fa498093`,nodes:[{name:`bicep.r`,parent:-1,position:[0,1.9239179,0],rotation:[.0615525,.0398769,.3981106,.9144009],inverse:[.7283528,.6803385,-.081499,0,.6851345,-.7214376,.1005901,0,.0096388,-.1291029,-.9915844,0,-1.4101825,-1.2994884,.1554842,1],restMatrix:[.7283527,.6851345,.0096388,0,.6803382,-.7214378,-.1291028,0,-.0814989,.1005901,-.9915845,0,1.9238736,.0130247,5e-7,1]},{name:`forearm.r`,parent:0,position:[1e-7,2.6848283,0],rotation:[.3711259,.0714464,.0167426,.9256785],inverse:[.7874433,.4524021,-.4186477,0,.6050798,-.4378481,.6649568,0,.1175237,-.7769309,-.6185196,0,-1.7484224,-2.8083975,2.635051,1]},{name:`wrist.r`,parent:1,position:[2e-7,2.5185163,-1e-7],rotation:[-3101e-7,-.0061253,.0025235,.999978],inverse:[.7845312,.4486977,-.4279974,0,.6109602,-.4413268,.6572354,0,.1060132,-.7771109,-.6203709,0,-1.7428974,-5.3197432,2.6531358,1]},{name:`finger_pinky1.r`,parent:2,position:[.0046343,.5740601,-.2760941],rotation:[-.1957849,.0146842,.1957546,.960798],inverse:[.9351528,.2388502,-.2616111,0,.331477,-.8504888,.4084017,0,-.1249505,-.4686358,-.8745101,0,-4.1031637,-5.4080563,.5367963,1]},{name:`finger_pinky2.r`,parent:3,position:[-2e-7,.3726436,1e-7],rotation:[-.0292398,-.0200946,.0721109,.9967654],inverse:[.949912,.1186311,-.2891271,0,.2191383,-.9124411,.3455863,0,-.222814,-.3916351,-.8927349,0,-4.8757358,-5.1585121,.3969105,1]},{name:`finger_pinky3.r`,parent:4,position:[1e-7,.2838089,-1e-7],rotation:[-.0411792,-.0063711,.0097832,.9990836],inverse:[.9485866,.1239614,-.2912347,0,.2048841,-.9418197,.2664554,0,-.2412603,-.3124252,-.9187948,0,-4.978919,-5.3627758,.0143998,1]},{name:`finger_ring1.r`,parent:2,position:[.0411437,.6978136,-.1174016],rotation:[-.1287831,.0596232,.2168268,.9658396],inverse:[.9594236,.146389,-.2409919,0,.2587008,-.7969733,.5458089,0,-.1121636,-.5860064,-.8025058,0,-4.5054054,-5.0950966,.9005388,1]},{name:`finger_ring2.r`,parent:6,position:[0,.3300749,1e-7],rotation:[-.0414752,-.0210513,.0022018,.9989153],inverse:[.9493722,.1633301,-.2683585,0,.276427,-.8401866,.4665564,0,-.1492684,-.517117,-.8427984,0,-4.4969978,-5.4692068,.6379192,1]},{name:`finger_ring3.r`,parent:7,position:[-6e-7,.3748333,-2e-7],rotation:[-.0069452,-.0064766,-.0300405,.9995036],inverse:[.9341992,.2237373,-.2778741,0,.3325187,-.8282601,.4510171,0,-.1292427,-.5137379,-.8481566,0,-4.1295624,-6.1119914,.6107401,1]},{name:`finger_middle1.r`,parent:2,position:[.0224027,.7298949,.0810636],rotation:[-.0544525,-.1321608,.1880647,.9716996],inverse:[.7709189,.2054224,-.6028981,0,.5340942,-.7242163,.4361814,0,-.3470271,-.6582647,-.6680267,0,-3.2689495,-5.3660903,2.6170604,1]},{name:`finger_middle2.r`,parent:9,position:[1e-7,.3787352,-1e-7],rotation:[-9084e-7,-.0183557,.1108308,.9936694],inverse:[.7748415,.0341414,-.6312334,0,.3768981,-.8266065,.4179352,0,-.5075125,-.561744,-.6533564,0,-4.3570347,-4.8991523,2.7482018,1]},{name:`finger_middle3.r`,parent:10,position:[6e-7,.4215661,-2e-7],rotation:[-.0261905,.0335857,-.1087202,.9931596],inverse:[.785859,.2367021,-.5713129,0,.5215991,-.7499964,.4067433,0,-.3322054,-.6176389,-.7128546,0,-3.2535055,-6.2839251,2.1848121,1]},{name:`finger_index1.r`,parent:2,position:[-.0088264,.6932961,.2492982],rotation:[.0624639,-.1369783,.1775952,.97252],inverse:[.7293913,.1012909,-.6765568,0,.5942864,-.5836688,.5533122,0,-.3388395,-.8056492,-.4859187,0,-2.8400137,-4.7830405,3.7415123,1]},{name:`finger_index2.r`,parent:12,position:[6e-7,.4189905,2e-7],rotation:[.0050185,-.0274783,.1258688,.9916536],inverse:[.6927107,-.0862615,-.7160386,0,.4598678,-.7119852,.5306589,0,-.5555841,-.6968759,-.4535307,0,-3.8342881,-4.3158255,3.9746218,1]},{name:`finger_index3.r`,parent:13,position:[-2e-7,.3159422,6e-7],rotation:[-.0271141,1457e-7,-.0776777,.9966097],inverse:[.6948994,.0608664,-.7165267,0,.5666407,-.6598403,.4934867,0,-.4427562,-.7489367,-.493012,0,-3.0552616,-5.3775859,3.7012968,1]},{name:`finger_thumb1.r`,parent:2,position:[-.0726175,.1688832,.2472173],rotation:[.2448734,.2015487,.307966,.8969795],inverse:[.9543622,-.2873694,-.0813154,0,.0195381,-.2116143,.9771581,0,-.2980128,-.9341511,-.1963419,0,-5.2989035,-1.6757843,2.7958322,1]},{name:`finger_thumb2.r`,parent:15,position:[0,.4016262,0],rotation:[-.1624919,-.0637158,.0282047,.9842465],inverse:[.9137359,-.2786603,-.2956953,0,.11682,-.5168531,.8480662,0,-.3891532,-.8094513,-.4397139,0,-5.0807662,-2.6842616,2.6816485,1]},{name:`finger_thumb3.r`,parent:16,position:[-2e-7,.2812302,-1e-7],rotation:[-.1111624,.0297678,-.0011743,.9933556],inverse:[.9320186,-.2103639,-.2951083,0,.0713057,-.6919314,.7184335,0,-.3553271,-.6906362,-.6298925,0,-5.2030964,-3.4628456,1.6541033,1]},{name:`socket.r`,parent:2,position:[-.2871181,.6893002,-.0108203],rotation:[-.0903703,.6638763,-.0017862,.74236],inverse:[.4596879,.4077525,.7889395,0,-.5210631,-.5955471,.6114058,0,.7191526,-.6921428,-.061301,0,-2.060519,-6.1037917,-1.9551339,1]},{name:`forearm.Twist0.r`,parent:1,position:[5e-7,-3e-7,-1e-7],rotation:[1e-7,-.0057955,-1e-7,.9999832],inverse:[.7825378,.4524023,-.4277468,0,.6127467,-.4378477,.6578989,0,.110347,-.776931,-.6198401,0,-1.7177618,-2.8083973,2.6551406,1]},{name:`forearm.Twist1.r`,parent:19,position:[-1e-7,1.2592582,-1e-7],rotation:[-1e-7,-.0057957,1e-7,.9999832],inverse:[.7775272,.4524022,-.4367885,0,.6203313,-.4378479,.6507521,0,.1031548,-.7769309,-.6210776,0,-1.6868707,-4.0676556,2.6748722,1]}],position:[3.89604,-1.4921409,-.5137521,3.9915299,-1.6236081,-.144083,4.2463346,-1.7937829,-.339553,4.0278106,-1.6088501,-.6854265,2.2966006,-.3182185,.5031808,2.5564857,.0199394,.4068849,2.1583557,.7016536,.3791464,1.9877317,.3191963,.6527168,4.5815573,-2.9720669,-1.5698737,4.3799281,-2.910439,-1.7371864,4.654717,-3.0961003,-2.135632,4.8229938,-3.1517637,-2.0058792,2.8210144,-1.0278002,-.670808,3.0567725,-.8046125,-.6264505,3.591316,-1.4110576,-.7397282,3.4095213,-1.5960017,-.7267584,1.889376,-.7839804,.076988,1.5100811,-.3326541,.046776,1.5630863,-.3308241,-.4814264,2.027144,-.6718633,-.4594806,3.2087195,-.6166177,-.2162825,3.74754,-1.3119564,-.3560369,2.2391343,.7146492,-.1620882,2.609942,-.0623581,-.0874081,2.5277536,-.221305,-.5437447,2.1994815,.5193726,-.6284062,2.4809742,-1.3624616,-.0619354,2.6152945,-1.211911,-.5570208,1.9062717,.0386179,-.5939867,2.2799237,-.4813952,-.5292279,2.8893349,-.9523111,.4295011,3.1505003,-.6156247,.2429407,4.6728649,-2.8732233,-2.4822378,4.7724037,-2.8223991,-2.5018353,4.8073649,-2.8552451,-2.56494,4.7018199,-2.8799095,-2.5575216,3.4056559,-2.1201751,-.4052539,3.4404464,-1.9103432,-.7508739,3.5224388,-2.0042574,-.8824143,3.5555642,-2.3534558,-.5418444,3.8661401,-1.8933042,6431e-7,3.5470066,-2.1202064,-.0349358,3.8572509,-2.4329762,-.2618518,4.1276288,-2.121825,-.2513399,3.5617466,-1.7679992,-.7718748,3.7189562,-1.5711875,-.7893223,3.8095379,-1.6629368,-.9794313,3.6333952,-1.8806473,-.91991,4.9160194,-2.8593957,-2.3110642,5.0070004,-3.0164664,-2.1165333,5.0310564,-3.0483007,-2.1494355,4.9481316,-2.8807704,-2.3491769,4.7027388,-3.1303592,-2.1968772,4.6002102,-2.9741697,-2.4293828,4.6318469,-3.0131752,-2.4885738,4.7507625,-3.1646183,-2.2581196,4.98316,-3.0995479,-2.0365632,4.8465757,-3.1910048,-2.0294714,4.8701591,-3.2302456,-2.053061,5.0079327,-3.1254313,-2.0688198,5.3720675,-4.0193305,-2.7781696,5.3017111,-4.0081673,-2.77983,5.318512,-4.1508522,-2.841912,5.3722205,-4.1964717,-2.8578382,5.0174675,-3.3871913,-2.9144256,4.9150553,-3.2998619,-3.1119347,4.9682288,-3.3419635,-3.2067623,5.0757604,-3.4491372,-3.0938914,5.1908293,-3.588819,-2.4402659,5.1306658,-3.6465816,-2.4958818,5.1981239,-3.7294252,-2.6007979,5.2491388,-3.7178211,-2.5571728,4.9609575,-3.2268937,-3.104928,5.0643363,-3.1304848,-3.0559194,5.1002421,-3.1782646,-3.1358531,5.0103712,-3.2793012,-3.2164574,5.0818553,-3.6266906,-3.6293294,5.1132612,-3.6002789,-3.6263299,5.1339636,-3.7096803,-3.7523227,5.079381,-3.7577238,-3.7370794,5.2678146,-3.9444389,-3.3349941,5.1995907,-3.8583126,-3.4184797,5.2355533,-4.0235324,-3.5080833,5.2983379,-4.0859184,-3.4382882,4.5202923,-3.2307715,-3.2729118,4.6615744,-3.2593958,-3.3067529,4.6268325,-3.3125806,-3.386749,4.4944158,-3.2974536,-3.3756542,4.9487414,-3.3717701,-2.1928637,5.0684943,-3.2913468,-2.1928239,4.7154522,-3.1684504,-2.7353675,4.8393617,-3.2424521,-2.4588144,5.118825,-3.1944292,-2.2659016,5.0520978,-3.0015147,-2.4901922,4.4872327,-3.3723385,-3.4192002,4.5954471,-3.4001608,-3.4420669,4.5032406,-3.2627552,-3.2047305,4.4894133,-3.3334956,-3.3070571,4.6444693,-3.3092608,-3.2733645,4.6180058,-3.3731709,-3.2421198,4.5964284,-3.4245734,-3.3015814,4.6208653,-3.3559217,-3.333457,4.5087385,-3.3090644,-3.1530838,4.488627,-3.383076,-3.2463636,4.7542329,-3.261054,-2.9897978,4.5906205,-3.0647905,-2.6949794,4.5345387,-3.1313841,-2.8557229,4.6991668,-3.2800889,-3.0396438,4.8566508,-3.1530144,-2.9582801,4.7766352,-3.1702776,-3.0489173,4.6040249,-2.9171278,-2.673723,4.7222991,-2.8905435,-2.7423458,4.6606793,-2.9337246,-2.9087441,4.569932,-3.0215843,-2.8586695,4.8602118,-3.0015354,-2.9277089,4.8060179,-3.0546355,-3.0518732,4.8837438,-2.9291773,-2.6954138,5.2967238,-3.9662454,-2.8681211,5.3079352,-4.1053424,-2.9318507,5.1823702,-3.6595426,-3.5440207,5.1901727,-3.7681856,-3.6944559,5.0805216,-3.7865787,-3.7415991,5.1233788,-3.8406181,-3.6862783,5.0554957,-3.4939132,-2.7027795,5.1929436,-3.6779869,-2.737999,5.163229,-3.1720159,-2.8764904,5.2049022,-3.215884,-3.0054793,2.5448167,-1.2357085,.3393342,1.9228532,-.6505428,.5190727,3.6966646,-1.3647757,.0393901,1.5322354,-.1736609,.5385672,4.5054674,-2.507899,-2.073904,4.6698837,-2.5307283,-1.8760694,4.8839087,-2.838021,-2.2729485,4.7374439,-2.7895532,-2.4387281,4.7987928,-2.6869197,-1.6476107,4.7506981,-2.8357043,-1.5660641,4.9583893,-3.0736642,-2.0043037,4.9829464,-2.984632,-2.0836279,5.0379791,-3.7617767,-3.6893446,5.0805216,-3.7865787,-3.7415991,5.1233788,-3.8406181,-3.6862783,5.0934339,-3.8286295,-3.6149349,4.6040249,-2.9171278,-2.673723,4.569932,-3.0215843,-2.8586695,4.8566508,-3.1530144,-2.9582801,4.7766352,-3.1702776,-3.0489173,4.6444693,-3.3092608,-3.2733645,4.6208653,-3.3559217,-3.333457,4.5032406,-3.2627552,-3.2047305,4.4894133,-3.3334956,-3.3070571,4.4872327,-3.3723385,-3.4192002,4.5954471,-3.4001608,-3.4420669,5.0079327,-3.1254313,-2.0688198,5.0684943,-3.2913468,-2.1928239,5.0241852,-3.7357535,-3.6463568,5.0818553,-3.6266906,-3.6293294,5.079381,-3.7577238,-3.7370794,5.3065886,-3.9601555,-3.1906044,5.3822145,-3.9311547,-3.2100976,5.4123316,-4.1147308,-3.3002877,5.3401685,-4.0975833,-3.2695258,4.9609575,-3.2268937,-3.104928,5.0103712,-3.2793012,-3.2164574,5.3006811,-3.4773083,-2.4750483,5.1908293,-3.588819,-2.4402659,5.2491388,-3.7178211,-2.5571728,5.3286934,-3.5468798,-2.5241241,5.4273877,-4.0130596,-2.7854426,5.3720675,-4.0193305,-2.7781696,5.3722205,-4.1964717,-2.8578382,5.4632401,-4.1663599,-2.8719318,4.98316,-3.0995479,-2.0365632,3.5617466,-1.7679992,-.7718748,3.6333952,-1.8806473,-.91991,3.8661401,-1.8933042,6431e-7,4.1276288,-2.121825,-.2513399,4.6728649,-2.8732233,-2.4822378,4.7018199,-2.8799095,-2.5575216,2.8893349,-.9523111,.4295011,2.2966006,-.3182185,.5031808,1.9062717,.0386179,-.5939867,2.2799237,-.4813952,-.5292279,2.8210144,-1.0278002,-.670808,3.4095213,-1.5960017,-.7267584,3.2430403,-1.75458,-.6907078,4.3070407,-2.7024374,-1.9982451,4.391283,-2.6200647,-2.0351911,4.6439123,-2.8665371,-2.4069512,4.5685749,-2.935164,-2.3701887,1.9877317,.3191963,.6527168,5.4168997,-3.7658422,-2.6706557,5.3223133,-3.8330135,-2.666671,5.3517475,-3.8773041,-2.708082,5.4211726,-3.8473873,-2.7180088,5.0040493,-3.4912269,-3.3925045,5.0623865,-3.4399292,-3.4394412,5.0731239,-3.5159125,-3.5278311,5.0075603,-3.5684383,-3.4717329,5.1361351,-3.3863833,-3.4094923,5.2204266,-3.4177239,-3.2942171,5.2032189,-3.532047,-3.4066377,5.1194429,-3.4806204,-3.5144081,5.2529345,-3.8259106,-2.6926816,5.2496085,-3.776845,-2.7934349,5.2660756,-3.8103628,-2.8173091,5.2665887,-3.8600509,-2.7184508,5.2138252,-3.6982927,-3.1298857,5.1410165,-3.6131668,-3.2391064,5.1651292,-3.6971402,-3.3130295,5.2368608,-3.7707777,-3.2065563,5.2056093,-3.6388452,-3.032032,5.1496744,-3.5525117,-2.9656098,5.1997156,-3.4922912,-2.9353127,5.2605557,-3.6001089,-3.0167265,5.0623865,-3.4399292,-3.4394412,5.0731239,-3.5159125,-3.5278311,5.3223133,-3.8330135,-2.666671,5.3517475,-3.8773041,-2.708082,4.7506981,-2.8357043,-1.5660641,4.9583893,-3.0736642,-2.0043037,4.391283,-2.6200647,-2.0351911,4.6439123,-2.8665371,-2.4069512,3.5177357,-1.6168997,.1204595,3.2245045,-1.8577213,.1181743,3.1606643,-1.9374663,-.2310698,3.5177357,-1.6168997,.1204595,5.0835924,-3.8033648,-3.5658047,5.08676,-3.641736,-3.3637133,5.0938148,-3.5280578,-3.1974428,5.0757604,-3.4491372,-3.0938914,4.9682288,-3.3419635,-3.2067623,5.0010481,-3.4252219,-3.3247752,5.2890568,-4.0796962,-3.5742068,5.3669677,-4.0084186,-3.595155,5.422802,-4.0738006,-3.5245967,5.3487215,-4.1335616,-3.5139906,5.3081155,-3.7997422,-3.4641531,5.2920809,-3.6178222,-3.3660481,5.3779025,-3.7209389,-3.228931,5.3863187,-3.900264,-3.3627291,5.2890568,-4.0796962,-3.5742068,5.3487215,-4.1335616,-3.5139906,5.2350006,-3.3676646,-3.175652,5.2049022,-3.215884,-3.0054793,5.3072691,-3.3038769,-2.8651569,5.3499022,-3.4730511,-3.0139949,5.1571236,-3.6941178,-3.5349061,5.1679845,-3.5819662,-3.3945057,5.143415,-3.4738371,-3.2089093,5.1046638,-3.3808451,-3.0788074,5.2136521,-3.6630597,-3.3208382,5.250042,-3.82356,-3.4401236,5.1169038,-3.5291936,-3.1651833,5.0757604,-3.4491372,-3.0938914,5.1046638,-3.3808451,-3.0788074,5.1536355,-3.485939,-3.1716437,5.3601089,-3.4899089,-2.9975572,5.3072691,-3.3038769,-2.8651569,5.3586888,-3.4197414,-2.6987541,5.3720284,-3.5995743,-2.8033767,5.435689,-3.9357579,-3.2265418,5.4164886,-3.7585926,-3.1495814,5.427814,-3.8224428,-2.993022,5.4435472,-3.9815066,-3.0928731,5.4162974,-4.1463199,-3.3195806,5.4772549,-4.0839272,-3.3117001,5.4858842,-4.1359663,-3.2069166,5.4276948,-4.1882982,-3.2273626,5.4162974,-4.1463199,-3.3195806,5.4276948,-4.1882982,-3.2273626,5.3591156,-4.1297574,-3.1594877,5.3244638,-3.9184816,-3.3462527,5.2926483,-3.7524903,-3.1962175,5.1907902,-3.6258075,-3.0532153,5.2446799,-3.5904152,-3.032768,5.1997156,-3.4922912,-2.9353127,5.1496744,-3.5525117,-2.9656098,5.3236165,-3.9776809,-3.0443239,5.4245133,-4.1744628,-3.2155209,5.3884501,-3.9640462,-3.0617318,5.3996625,-3.6034479,-2.7883363,5.3586888,-3.4197414,-2.6987541,5.3286934,-3.5468798,-2.5241241,5.3896203,-3.6997797,-2.6190383,5.4238276,-3.9401491,-2.9039693,5.4167676,-3.7675581,-2.8515244,5.3996625,-3.6034479,-2.7883363,5.2813091,-3.7023304,-2.7786627,5.2285695,-3.625984,-2.7113669,5.3586888,-3.4197414,-2.6987541,5.290092,-3.8437862,-2.950309,5.2670736,-3.8131056,-3.1157546,5.3758645,-4.1729598,-2.9616063,5.4564605,-4.11549,-2.9639606,5.3830566,-4.2169666,-2.879775,5.3758645,-4.1729598,-2.9616063,5.3830566,-4.2169666,-2.879775,5.2309327,-3.7316296,-2.8156128,5.275631,-3.7015538,-2.8102009,5.2285695,-3.625984,-2.7113669,5.1929436,-3.6779869,-2.737999,5.4238276,-3.9401491,-2.9039693,5.3576288,-3.9493012,-2.8911068,5.3324213,-3.7857041,-2.8393562,5.4167676,-3.7675581,-2.8515244,5.3068652,-3.7440171,-2.8090096,5.3637519,-4.1338472,-2.9372489,5.4858842,-4.1359663,-3.2069166,5.4435472,-3.9815066,-3.0928731,5.3154573,-3.7625401,-2.8877802,5.3552833,-3.8235264,-2.9653592,5.427814,-3.8224428,-2.993022,5.4193563,-3.7018316,-2.901016,5.3072691,-3.3038769,-2.8651569,5.3601089,-3.4899089,-2.9975572,5.3548813,-3.7914233,-3.1398938,5.4164886,-3.7585926,-3.1495814,5.435689,-3.9357579,-3.2265418,5.3463297,-4.1162281,-3.5027521,5.422802,-4.0738006,-3.5245967,5.3863187,-3.900264,-3.3627291,5.2686644,-3.6714528,-3.1144929,5.3779025,-3.7209389,-3.228931,5.383337,-3.5878179,-3.1242795,5.2049022,-3.215884,-3.0054793,5.2350006,-3.3676646,-3.175652,5.2920809,-3.6178222,-3.3660481,5.3081155,-3.7997422,-3.4641531,5.1547384,-3.5236714,-3.2944462,5.2032189,-3.532047,-3.4066377,5.2204266,-3.4177239,-3.2942171,5.1363106,-3.824749,-3.665113,5.1901727,-3.7681856,-3.6944559,5.1823702,-3.6595426,-3.5440207,5.4564605,-4.11549,-2.9639606,5.4772549,-4.0839272,-3.3117001,5.2874169,-4.0591006,-3.5656457,5.3669677,-4.0084186,-3.595155,4.5316944,-3.1832185,-2.9577637,4.543499,-3.1067996,-2.9805384,4.5170679,-3.1920147,-3.1024041,4.5288515,-3.2350531,-3.0598013,4.7575436,-3.1144228,-3.132483,4.7223535,-3.2164388,-3.1310964,4.6680737,-3.2625999,-3.2132723,4.7090716,-3.1742098,-3.2130902,4.6693749,-3.3009286,-3.1111512,4.639585,-3.321768,-3.1826556,4.7223535,-3.2164388,-3.1310964,4.6680737,-3.2625999,-3.2132723,4.543499,-3.1067996,-2.9805384,4.6102085,-3.0270858,-3.0240667,4.5597396,-3.1204472,-3.1393864,4.5170679,-3.1920147,-3.1024041,5.1836438,-3.5744994,-3.2462411,5.2829757,-3.4835665,-3.2736669,5.3499022,-3.4730511,-3.0139949,5.3072691,-3.3038769,-2.8651569,5.2829757,-3.4835665,-3.2736669,5.383337,-3.5878179,-3.1242795,5.2075167,-3.3533263,-3.2128096,5.2049022,-3.215884,-3.0054793,5.0905633,-3.5804496,-3.2740729,5.0103712,-3.2793012,-3.2164574,5.1002421,-3.1782646,-3.1358531,5.1218352,-3.3328366,-3.3330836,5.0532074,-3.374974,-3.3638802,5.2049022,-3.215884,-3.0054793,5.2075167,-3.3533263,-3.2128096,5.0103712,-3.2793012,-3.2164574,5.0532074,-3.374974,-3.3638802,5.3077183,-3.695766,-3.07831,5.4077339,-3.6150739,-3.076386,5.3720284,-3.5995743,-2.8033767,5.3586888,-3.4197414,-2.6987541,5.2605124,-3.7877078,-2.8829608,5.2363415,-3.7259755,-3.0738933,5.4077339,-3.6150739,-3.076386,5.4193563,-3.7018316,-2.901016,5.2331414,-3.7433274,-2.7695606,5.1929436,-3.6779869,-2.737999,5.4197178,-3.6777618,-2.8220625,5.4197178,-3.6777618,-2.8220625,5.2491388,-3.7178211,-2.5571728,5.1981239,-3.7294252,-2.6007979,5.2392807,-3.79177,-2.6669123,5.2928791,-3.788723,-2.6252601,5.2491388,-3.7178211,-2.5571728,5.2928791,-3.788723,-2.6252601,4.9716678,-3.0142851,-2.8456104,4.9009461,-3.1466341,-2.9481406,4.9009461,-3.1466341,-2.9481406,4.7891154,-3.2647705,-2.9528139,5.2755237,-3.3011553,-2.653163,5.1291933,-3.0910513,-2.5947607,5.1819711,-3.2995625,-2.349694,5.2342124,-3.2306335,-2.7676508,5.3072691,-3.3038769,-2.8651569,5.0390115,-3.4342513,-2.8152483,5.1496744,-3.5525117,-2.9656098,5.3586888,-3.4197414,-2.6987541,5.1193681,-3.430721,-2.2969913,5.0384526,-3.5333383,-2.3524661,4.9339743,-3.3255694,-2.6731319,5.1193681,-3.430721,-2.2969913,4.0415144,-1.9445909,-1.3442554,3.8860245,-2.1271198,-1.2916703,4.2734909,-2.2262449,-1.7090797,4.1386538,-2.3735921,-1.6634307,4.4304872,-2.0914953,-.775573,4.2418346,-1.9161428,-1.0823083,4.6146398,-2.3892076,-1.2115918,4.4558592,-2.2234356,-1.4791889,3.7839727,-2.2369843,-1.2543579,3.8303521,-2.5391169,-.9402925,4.0455065,-2.4697108,-1.6263015,4.1051402,-2.7247779,-1.3387395,4.0986862,-2.6126733,-.6978599,4.3353186,-2.3597848,-.6895821,4.3401217,-2.7923701,-1.1338668,4.5430083,-2.5977447,-1.1278231,3.8860245,-2.1271198,-1.2916703,4.1386538,-2.3735921,-1.6634307,4.3353186,-2.3597848,-.6895821,4.5430083,-2.5977447,-1.1278231,4.5685749,-2.935164,-2.3701887,4.6439123,-2.8665371,-2.4069512,4.9829464,-2.984632,-2.0836279,4.9583893,-3.0736642,-2.0043037,4.7374439,-2.7895532,-2.4387281,4.8839087,-2.838021,-2.2729485,4.8229938,-3.1517637,-2.0058792,4.654717,-3.0961003,-2.135632,4.9583893,-3.0736642,-2.0043037,4.6439123,-2.8665371,-2.4069512],normal:[.5845621,.7934486,-.169489,.7283768,.4241865,.5380829,.8532279,.364812,.3727122,.5245869,.8241792,-.2133946,.1980001,-.0141,.9801006,.6944235,.4027136,.5963202,.8028989,.3927994,.4483993,.3112931,.0573987,.948579,.0614971,-.9059568,.41888,-.6266966,-.7777959,-.0477997,-.6446342,-.7644405,.0088005,-.0555015,-.8530229,.5189139,-.1690993,.0024,-.9855961,.3314897,.4435861,-.832674,.2818115,.4614188,-.8412343,-.1882076,.0368015,-.9814395,-.7027337,-.7111341,.021301,-.7280387,-.6847364,.0331018,-.475521,-.5642249,-.6749297,-.5012829,-.4886833,-.7140757,.7217097,.667209,-.1843025,.7286203,.6705186,-.1397039,.8969145,.434907,-.0800013,.8023783,.5802843,-.1394962,.4274148,.3247113,-.8437293,.725436,.2633131,-.6359316,-.6703877,-.7414864,-.0278995,-.532019,-.4315154,-.7285261,-.0198005,-.1395033,-.9900236,-.1197069,-.0683039,-.9904569,.2397047,-.0700014,.9683189,.6805215,.4512143,.5773183,-.6856085,.5493069,-.477706,.0035002,.9403412,-.3402149,.1983106,.9459505,-.2566137,-.5951239,.7823314,-.1838074,-.7272518,-.6848546,-.045597,-.7281741,-.169994,-.6639764,-.8358336,-.0199008,-.5486221,-.7171323,-.6969314,-.0028001,.429298,-.1598992,.8888957,-.1761044,-.6656168,.7252183,.0133001,-.7983063,.6021048,.6465814,-.2985914,.7019799,-.472796,.2677977,-.8394929,-.0191004,.6839128,-.7293137,-.2024934,.7521755,-.6270795,-.6510039,.3907023,-.6508039,.6323021,.7746026,-.0136,.8467345,.4279174,.3161129,.8796385,.3602158,.3106136,.6793153,.7332165,-.0304007,-.6768299,-.7344325,.0501022,-.9214063,-.1798012,-.3445024,-.9541402,-.2976125,-.0323014,-.7148294,-.6976287,.048302,.676801,-.1386002,.723001,-.1415937,-.763766,.6297719,-.1565002,-.7698009,.6188007,.7175974,-.1463995,.6808975,.0690998,-.4138985,.9076968,-.7133024,-.3775012,.590502,-.7062032,-.5400025,.4579021,-.1070967,-.6596796,.7438771,-.6741144,-.7367157,-.0531011,-.8913887,-.1796977,-.4160948,-.9526671,-.1005965,-.2868901,-.7417899,-.6702909,-.0213997,.3704957,-.5254939,.7658911,-.5117115,-.7870177,.3446077,-.6274928,-.7350915,.2566971,.1259936,-.6341676,.7628611,-.5405045,.6213052,-.5673048,.0934021,.9017204,-.4221095,.2132048,.8400187,-.4989111,-.5224215,.6249257,-.5801238,-.6186103,.5219086,-.5873097,.2278996,.6891987,-.6877987,.2384987,.375298,-.8956951,-.6001843,.2700929,-.7528803,-.3271878,-.6164771,.7161734,-.9521716,-.0186994,-.3049909,-.9284802,-.2148954,-.3028935,-.2473024,-.7537075,.608906,-.592495,.6991941,-.4000967,.763852,.3158215,-.5628383,.6730577,.3508779,-.6510591,-.6195623,.5958637,-.5109689,-.2936154,-.782041,.5497289,.6415716,-.2881872,.7108685,-.6116984,-.7756979,.1552996,-.748426,-.6620229,.0398014,.9005648,.2464904,.358086,.7455243,.6661217,-.0218007,-.6900864,-.2393953,-.6829866,.3184026,-.4704039,-.8230067,-.9768736,.2113943,.0320991,-.9905403,.1356055,.0210009,.9200026,-.3865011,-.0649002,.5937116,-.716314,.3666072,.3709192,-.9207478,.1210063,.9332917,-.3483969,-.0870992,-.6549921,-.5254937,.5429934,-.6958038,-.6319034,.3414018,.2532918,-.9485692,-.1898938,-.8783937,-.3462975,.3293976,-.8536186,-.4031087,.3299071,.2650917,-.9545703,.1360958,.6587002,-.1609,-.7350002,.824964,-.3564845,-.4385809,-.7581971,.6476976,.0749997,-.0737997,.9632958,-.2580989,-.2462079,.8906285,-.3823122,-.8724806,.4856893,-.0536988,.4880072,.6604097,-.5707084,.6026972,.4618979,-.6506969,.4467846,.8577706,-.2541913,-.8105896,.0667991,-.5817925,-.7620007,-.0577001,-.6450006,.9978187,-.0658012,-.0053001,.9210059,-.2385015,-.308002,-.3541003,-.4721004,-.8073006,.1246025,-.9453193,-.3014062,-.8162784,-.5599852,-.1417962,-.7875824,-.580687,-.2061954,.6441168,.7570198,-.1097029,.7059728,.6663744,-.2398908,-.3169091,-.5723165,.7563217,-.4078131,-.4981161,.7652247,.7019963,.3648981,.6115968,-.3891916,-.4283907,.8154823,-.067602,.7625231,-.6434194,.6706783,.7165769,-.1915938,.6612665,.7437623,-.0976951,-.0580009,.8714138,-.4871077,.9306266,.3002086,.209306,.7542347,-.3755173,.5386248,.7195073,-.2682027,.6406065,.8860787,.3907906,.249294,-.9147676,-.170394,-.366287,-.3541003,-.4721004,-.8073006,.1246025,-.9453193,-.3014062,-.1368033,-.9376225,.3196076,-.7581971,.6476976,.0749997,-.8724806,.4856893,-.0536988,.6587002,-.1609,-.7350002,.824964,-.3564845,-.4385809,.9200026,-.3865011,-.0649002,.9332917,-.3483969,-.0870992,-.9768736,.2113943,.0320991,-.9905403,.1356055,.0210009,-.6900864,-.2393953,-.6829866,.3184026,-.4704039,-.8230067,.7175974,-.1463995,.6808975,.6415716,-.2881872,.7108685,-.9828942,-.0588996,-.174499,-.6186103,.5219086,-.5873097,-.6001843,.2700929,-.7528803,-.855197,.0547998,-.5153981,-.3126856,.3764827,-.8720599,-.3009052,.4407075,-.8457145,-.8063895,-.1663978,-.5674926,-.5405045,.6213052,-.5673048,-.5224215,.6249257,-.5801238,.8237141,.0751013,.5620096,.3704957,-.5254939,.7658911,.1259936,-.6341676,.7628611,.8143211,-.0618016,.5771149,.7630323,-.1988084,.615026,.0690998,-.4138985,.9076968,-.1070967,-.6596796,.7438771,.811419,-.5173121,.2720064,.676801,-.1386002,.723001,-.472796,.2677977,-.8394929,-.6510039,.3907023,-.6508039,.429298,-.1598992,.8888957,.6465814,-.2985914,.7019799,-.6856085,.5493069,-.477706,-.5951239,.7823314,-.1838074,.2397047,-.0700014,.9683189,.1980001,-.0141,.9801006,-.0198005,-.1395033,-.9900236,-.1197069,-.0683039,-.9904569,-.1690993,.0024,-.9855961,-.1882076,.0368015,-.9814395,-.5258858,-.3926893,-.7544795,-.8368951,-.1291992,-.5318969,-.6306147,.3733087,-.6804159,-.6716148,.45231,-.5868129,-.8789118,-.1399019,-.4560061,.3112931,.0573987,.948579,.8417104,-.1897024,.5055063,.0325997,-.6364939,.7705926,.078299,-.4959936,.8647888,.8249796,-.2472939,.5081875,-.9959252,.0265007,-.0862022,-.5484927,.6114919,-.5702924,-.5572026,.5732027,-.6008028,-.9949034,.0211001,-.0986003,.3407993,.7046986,-.6222988,.9972331,.0737025,-.0097003,.9949216,-.0835018,-.0562012,.2884004,.6647009,-.689201,-.7365086,-.6088071,.2948034,-.8193874,.0199997,-.5728912,-.7847155,.0561011,-.6173122,-.7543383,-.5301269,.3872197,-.4406995,-.7013991,.5601993,-.9390962,-.0062,-.3435986,-.9358759,.0242994,-.3514909,-.420098,-.658897,.6239971,-.7217971,.0761997,-.6878972,-.7998825,-.5931871,-.091198,.6852103,-.3786058,-.6222094,-.2359001,.4672002,-.8521004,-.5484927,.6114919,-.5702924,-.5572026,.5732027,-.6008028,.0325997,-.6364939,.7705926,.078299,-.4959936,.8647888,.7542347,-.3755173,.5386248,.7195073,-.2682027,.6406065,-.6306147,.3733087,-.6804159,-.6716148,.45231,-.5868129,.3052933,-.1158975,.9451793,-.2493062,-.6339158,.7321183,-.6328166,-.7737203,-.0300008,.3052933,-.1158975,.9451793,-.1810001,-.8253004,.5349002,-.161497,-.7865852,.5959888,-.0642997,-.8156955,.5748968,-.7417899,-.6702909,-.0213997,-.9526671,-.1005965,-.2868901,-.9883592,.0036998,-.1520937,-.4811181,-.4802181,-.7334276,.3367168,.1914095,-.9219459,.898127,-.4245127,-.1147034,.155004,-.9877253,.0193005,.2284983,.5278962,-.8179941,.2216924,.522882,-.8230717,.9520167,-.1876033,.2418042,.9360973,-.1517996,.3172991,-.4811181,-.4802181,-.7334276,.155004,-.9877253,.0193005,.1579939,.6963732,-.7000731,.7059728,.6663744,-.2398908,.8597227,.5043133,-.0809021,.9400556,-.0362983,.339084,.7250228,-.5497173,.414913,.7359019,-.5500014,.394901,.7368233,-.5032159,.4515143,.6635953,-.1552989,-.7317948,-.5442237,.4212183,-.7255315,-.5383884,.3640921,-.7599835,-.9210191,-.049901,-.386308,-.7417899,-.6702909,-.0213997,.6635953,-.1552989,-.7317948,-.5624338,.4191252,-.7127429,.4945745,.5732705,-.6532664,.8597227,.5043133,-.0809021,.9399669,.3152889,.1305954,.8605178,-.1686035,.4807099,.5425186,.4598158,-.7030241,.5423846,.4027885,-.7372791,.8451321,-.26241,.4657176,.8021012,-.2437004,.5452008,-.1126045,-.4896196,-.8646346,.6223285,.1236056,-.7729353,.8484046,-.4377024,.2977016,.0837015,-.9932177,.0807014,-.1126045,-.4896196,-.8646346,.0837015,-.9932177,.0807014,-.4607921,-.7200877,.5187912,.3999088,-.5435119,.7380162,.3173959,-.6064922,.7289905,-.4014031,-.7358056,.5454042,.3449054,-.6042095,.7183113,.6852103,-.3786058,-.6222094,-.7998825,-.5931871,-.091198,-.4626998,-.5911997,.6605997,.2607087,-.5767193,.774226,.3103806,-.5021687,.8071496,.5447896,.5334898,-.6469876,.9399669,.3152889,.1305954,.8143211,-.0618016,.5771149,.7895284,-.1467053,.5959215,.5913286,.2914141,-.7519364,.5986946,.2795975,-.7505932,.5447896,.5334898,-.6469876,-.3697033,.3686032,-.8529075,.4545973,-.5360968,-.7112958,.9399669,.3152889,.1305954,-.4346184,-.6902292,.5785245,-.8324103,.0224003,-.5537068,-.2067926,-.4797828,-.8526695,.6241012,-.0291001,-.7808015,-.0517986,-.9960733,.0717981,-.2067926,-.4797828,-.8526695,-.0517986,-.9960733,.0717981,-.3861061,-.8064127,.447907,.434105,-.5695065,.698008,.4545973,-.5360968,-.7112958,-.7875824,-.580687,-.2061954,.5913286,.2914141,-.7519364,-.2679971,.2602972,-.9275899,-.3134979,.306998,-.8985941,.5986946,.2795975,-.7505932,-.3677938,.357394,-.8584855,-.0976989,.4281951,-.8983896,.8484046,-.4377024,.2977016,.8021012,-.2437004,.5452008,.3845052,-.5965081,.7045096,.3470995,-.5491992,.7601988,.8451321,-.26241,.4657176,.8748179,-.1799037,.4498092,.8597227,.5043133,-.0809021,.4945745,.5732705,-.6532664,-.3116927,.3774911,-.8719795,.5423846,.4027885,-.7372791,.5425186,.4598158,-.7030241,.5489097,-.4298076,.7169126,.898127,-.4245127,-.1147034,.9360973,-.1517996,.3172991,.3097964,-.6304927,.7116918,.9520167,-.1876033,.2418042,.9633505,-.0829043,.2551134,.7059728,.6663744,-.2398908,.1579939,.6963732,-.7000731,.2216924,.522882,-.8230717,.2284983,.5278962,-.8179941,.7352047,-.5416034,.4076026,.9949216,-.0835018,-.0562012,.9972331,.0737025,-.0097003,.6674132,-.6858136,.2902057,.9210059,-.2385015,-.308002,.9978187,-.0658012,-.0053001,.6241012,-.0291001,-.7808015,.6223285,.1236056,-.7729353,-.5594656,.2942819,-.7748525,.3367168,.1914095,-.9219459,-.8281906,-.4733946,.2999966,-.9224097,.379404,-.0722008,-.9679691,.250792,.0117996,-.7579001,-.5276,.3837001,.6284638,.3483799,-.69546,.8519794,-.4465892,-.2732934,.8876039,-.4391019,-.1391006,.6460055,.3323028,-.6872058,.3521156,-.9257411,.1379061,.5363036,-.7981054,.2746019,.8519794,-.4465892,-.2732934,.8876039,-.4391019,-.1391006,-.9224097,.379404,-.0722008,-.4437762,.7734585,-.4525757,-.5228055,.7344077,-.4328045,-.9679691,.250792,.0117996,-.5618914,.4249935,-.7096891,.2613166,.6058384,-.7514477,.9400556,-.0362983,.339084,.8597227,.5043133,-.0809021,.2613166,.6058384,-.7514477,.9633505,-.0829043,.2551134,.9950435,.0955042,.0277012,.7059728,.6663744,-.2398908,-.1477963,-.7951803,.5880855,-.5224215,.6249257,-.5801238,.2132048,.8400187,-.4989111,.2429093,.7914304,-.5609215,-.5158193,.6311236,-.5793217,.7059728,.6663744,-.2398908,.9950435,.0955042,.0277012,-.5224215,.6249257,-.5801238,-.5158193,.6311236,-.5793217,-.2709955,.4078933,-.8718857,.577691,.4926923,-.6507898,.8605178,-.1686035,.4807099,.9399669,.3152889,.1305954,-.4245142,-.7556253,.4988167,-.7901109,.0138002,-.6128085,.577691,.4926923,-.6507898,.8748179,-.1799037,.4498092,-.8009263,-.0131004,-.5986197,-.7875824,-.580687,-.2061954,.6188945,.4149963,-.6668941,.6188945,.4149963,-.6668941,.1259936,-.6341676,.7628611,-.6274928,-.7350915,.2566971,-.7208272,-.6472244,.2480094,.0218003,-.6528082,.7572095,.1259936,-.6341676,.7628611,.0218003,-.6528082,.7572095,.4358946,.8135899,-.3847952,-.0872019,.5198115,-.8498188,-.0872019,.5198115,-.8498188,-.4079028,-.8405058,-.3566025,.846193,.4981959,.1890984,.765707,.6429059,.0191002,.8668256,.1807054,.4647138,.7656006,.6433005,.0045,.8597227,.5043133,-.0809021,-.8000786,-.5847843,-.1337964,-.7998825,-.5931871,-.091198,.9399669,.3152889,.1305954,.5096876,-.3975903,.7629814,-.408818,-.793435,.4509199,-.7079002,-.7060002,-.021,.5096876,-.3975903,.7629814,-.1453037,.7309186,-.666817,-.6421881,.3589934,-.6772875,-.1116017,.7453112,-.6573099,-.6376706,.3645832,-.6785687,.9345881,.2814964,.2174972,.6009768,.7559708,-.25949,.9334578,.2859871,.2164902,.6326004,.7396004,-.2298001,-.8249631,-.0572974,-.5622749,-.6615027,-.744303,-.0918004,-.830819,-.088802,-.5494125,-.6465883,-.7593862,-.0724987,.1190029,-.8901218,.4399108,.7510974,-.3725987,.5449981,.0967968,-.8966708,.4319859,.752108,-.373904,.5427058,-.6421881,.3589934,-.6772875,-.6376706,.3645832,-.6785687,.7510974,-.3725987,.5449981,.752108,-.373904,.5427058,-.8789118,-.1399019,-.4560061,-.6716148,.45231,-.5868129,.8860787,.3907906,.249294,.7195073,-.2682027,.6406065,-.0580009,.8714138,-.4871077,.6612665,.7437623,-.0976951,-.0555015,-.8530229,.5189139,-.6446342,-.7644405,.0088005,.7195073,-.2682027,.6406065,-.6716148,.45231,-.5868129],uv:[.5153747,.474259,.4460108,.4779552,.461024,.5318226,.5285321,.5140978,.3738035,.1099964,.4462499,.09789,.4640033,.0037473,.387755,.017687,.1402816,.8989213,.0998164,.8824935,.0704867,.9606053,.1045859,.9748192,.6426063,.3056201,.5897297,.2963426,.5785417,.4402875,.6233311,.4420307,.1950522,.2419774,.1812374,.1440685,.087683,.1635395,.0977134,.2586221,.5156614,.2713171,.5025161,.4260611,.5450715,.021399,.5274943,.1291258,.6116295,.1566069,.6239082,.0541182,.199518,.3837881,.1103939,.4017594,.6872371,.0851195,.6713857,.1759436,.3792315,.2568529,.4429745,.2467509,.8502934,.0515721,.836139,.066569,.8412194,.0801041,.8534816,.0633984,.1928494,.5988029,.1171291,.5973445,.1093705,.6301264,.1878065,.6481581,.3249264,.6086596,.2607344,.5952733,.2473691,.6712275,.3105667,.6897591,.6272547,.4789079,.5800338,.4813412,.5896838,.522887,.6367298,.5119139,.7942439,.0636061,.7530608,.0636238,.7554064,.0733194,.7949253,.0726051,.4380625,.7826074,.3875481,.7772359,.3799243,.7880181,.4366943,.7962571,.494431,.7859169,.4722948,.7802021,.4724764,.7888688,.4942073,.794235,.9122198,.7224809,.906993,.7164207,.8977154,.7383476,.896226,.7470667,.4089002,.9181085,.378337,.9392893,.3905546,.9561926,.4093745,.9489964,.4846468,.8848976,.4720056,.8930454,.4750133,.9138327,.484521,.9104254,.8700135,.2058234,.8475958,.1949456,.8497503,.2134293,.8678252,.2267817,.8903352,.3787452,.9000747,.3774036,.8996819,.4034027,.8959548,.4058656,.780506,.914727,.7578679,.9096584,.7629213,.9371322,.7784132,.9397836,.9605128,.1582433,.9476855,.1801631,.9620847,.1870713,.9758488,.1691585,.4703368,.8242444,.4890953,.8265046,.3674096,.8522879,.4241729,.8356074,.74814,.1076812,.7938579,.1093276,.9873497,.1783099,.9791301,.1962485,.9622828,.1501826,.975244,.1647263,.2779563,.9224817,.274051,.9117568,.2616689,.9117055,.264737,.9222693,.2767329,.8812572,.2640165,.8926742,.3430579,.9068187,.3507414,.8188398,.3264766,.8391972,.3253722,.9042425,.3503374,.9258781,.3317007,.9204759,.8854551,.0849034,.8708792,.1014071,.8953689,.1193414,.9107346,.1043863,.8708907,.1439548,.8941137,.1573711,.8426574,.1132869,.8926702,.7105855,.888403,.7338889,.9216291,.375745,.9193018,.403474,.9021329,.4126847,.9173093,.4123905,.4359396,.8989486,.4620188,.9234082,.8144076,.1820408,.8236917,.2079042,.2680997,.3625821,.2662432,.2201328,.4360953,.4069084,.2645782,.1257008,.6481264,.7723295,.6040386,.7734782,.6292072,.8599383,.6676072,.855477,.5554999,.7848071,.5268481,.793245,.5660982,.8726956,.5869917,.8691351,.7544214,.7510613,.755468,.7617486,.7744815,.7578323,.7693573,.7468905,.3415107,.8076237,.3174304,.8258812,.8794599,.1768206,.9000885,.1771765,.9477613,.1888327,.9601521,.1917619,.265658,.8755863,.2518081,.888337,.2388725,.9002459,.2444899,.9219441,.7368626,.0695561,.7259929,.1037765,.751749,.7438132,.7378265,.7351882,.7516489,.7587373,.8933966,.8763167,.8838169,.8775047,.8901435,.9076024,.8965235,.8998826,.3700484,.949247,.3826559,.9635525,.7312465,.1724011,.7043132,.1675467,.6940738,.196125,.7262883,.1876824,.7180911,.3620347,.7246251,.3614095,.7268989,.3888168,.7251476,.387266,.7338642,.0605938,.0824259,.5941746,.0810931,.6274499,.3952362,.4813334,.4090977,.5548928,.3716582,.7708272,.3626091,.7781159,.3442948,.3717906,.3503502,.2183695,.0033376,.1848761,.0423806,.2767551,.0607921,.4141617,.0784769,.5547965,.1181636,.5494559,.0432644,.8749622,.0227764,.8750574,.0033375,.9575932,.021229,.9565741,.3640769,.1209476,.713643,.3172628,.7282538,.3241086,.7238593,.3347173,.7136149,.3325948,.7369968,.6868922,.7257046,.690808,.7303047,.7106031,.7414641,.7065291,.8997003,.3243394,.9219676,.3127933,.9241217,.3393276,.9003972,.3470432,.9208316,.679621,.9036932,.6736178,.8994027,.6810095,.9170408,.6878299,.7825538,.8572109,.7542358,.8562136,.7548287,.8766567,.7818962,.8765748,.8857452,.8101807,.8839797,.789462,.8711963,.7841899,.873835,.8089218,.8874713,.3334785,.8883635,.3530443,.9290444,.686852,.9240689,.6976832,.1712503,.915286,.1248117,.9904617,.6746102,.7631865,.687237,.846944,.38341,.4142017,.265246,.5217488,.2058383,.5381705,.329109,.5353394,.7689105,.7386701,.766852,.6969544,.7637978,.6605635,.760578,.6387714,.730107,.6449828,.733178,.6701055,.8175276,.4399189,.8166426,.433477,.8465993,.4373813,.8456351,.443902,.8181809,.3914435,.8171269,.3590932,.8495163,.3607434,.8470473,.3931873,.7584649,.9533502,.7837258,.95518,.8160347,.3048679,.8201355,.2703128,.8546857,.2685145,.8539996,.3050898,.779059,.7249932,.7793564,.6939561,.7736556,.657076,.7685848,.6295794,.7445583,.8751482,.7470304,.9096491,.753643,.8357706,.7538612,.8156073,.7444339,.8068017,.743917,.8328031,.7540113,.3024421,.7555801,.2652237,.7896373,.2690651,.7917349,.3009887,.7604904,.3885769,.7565002,.355432,.7869108,.3508645,.788879,.3843574,.7718647,.4271016,.7683831,.4184979,.7906238,.414655,.7915248,.4229627,.8922486,.9127998,.9150891,.9109973,.9125551,.8952309,.7911851,.9145969,.7924622,.8751494,.7832113,.837847,.7942762,.8337044,.7932976,.8086529,.782605,.816855,.9166453,.8664173,.9163706,.9085478,.9234778,.8691011,.6858576,.3033343,.6833622,.2711003,.7142763,.2711597,.7136709,.3019308,.7033741,.353125,.6923506,.3329538,.8773134,.64881,.8999912,.6620996,.9087623,.6449019,.8845125,.6175882,.9217029,.8364128,.8897635,.8468017,.7143927,.3981827,.7112591,.3931219,.7263987,.3922594,.8820403,.7442831,.8936603,.7491053,.9246106,.7996091,.9336386,.8002278,.9363182,.7786338,.9260373,.783107,.8773134,.7092109,.8857775,.7101895,.8911086,.6801838,.8790064,.6786729,.8955499,.6711417,.8820869,.7387592,.9197838,.9052781,.9303898,.8777295,.9315527,.8198019,.929467,.839376,.9399649,.8479127,.9487397,.8231161,.8406081,.7666248,.8494354,.8024613,.8782774,.8513619,.8664404,.8523862,.8762759,.8828226,.7857431,.9521064,.7895393,.9519109,.8026054,.9172092,.7933692,.8544269,.8094234,.8785759,.8143432,.8504653,.7227492,.7864761,.7210017,.8224142,.7270122,.8777511,.7354729,.9126848,.776283,.6740732,.7932681,.689752,.7933658,.663203,.7770917,.7534618,.7804136,.7516554,.7901886,.7214724,.8795158,.7395586,.8863419,.9070634,.7564325,.9505523,.7533424,.9501411,.3079627,.8545189,.2984688,.8443586,.2795079,.8628356,.2894498,.8698404,.9114672,.1643717,.9177299,.1815398,.9353705,.1859033,.9288203,.1713724,.3059025,.9080253,.2864335,.911808,.3114378,.9215851,.2911757,.922694,.9300284,.1200127,.9163471,.1318917,.9373245,.1444421,.9493215,.1356389,.7442377,.8539757,.7240069,.8500826,.8192631,.8223548,.8212886,.7848719,.8165808,.3319806,.8517581,.3329166,.7931137,.6453776,.7877088,.6071765,.7652055,.6773351,.8797584,.2864384,.8957406,.2675139,.8990977,.3086134,.8867086,.3167524,.9215199,.256504,.9207433,.2949619,.7185279,.6434136,.7217722,.6738859,.8760563,.8301418,.8579378,.8274237,.9575143,.7983194,.9718232,.7706934,.9231568,.8180109,.8877543,.8284912,.7552558,.3289371,.7882571,.3259265,.9079837,.6662261,.9147736,.6543112,.8781599,.6637415,.6891041,.3181441,.943289,.6606135,.9328611,.6569708,.9246221,.6714121,.9340198,.6760207,.7387682,.2969044,.7326484,.3134999,.8443129,.1514855,.8712065,.175998,.3523439,.9310083,.3563831,.9089152,.7683717,.1737983,.7930664,.1365588,.7429121,.1324031,.7910911,.1784348,.7896394,.2040637,.421195,.9078705,.4324949,.9400244,.7557384,.1982125,.716862,.1325228,.4678943,.86463,.4108015,.8776287,.4848011,.8536121,.6091647,.6060345,.6493566,.5956714,.6286455,.689182,.6619833,.6794289,.492516,.6161507,.553701,.6005579,.5240079,.7004789,.57887,.687018,.0873351,.7117383,.1584765,.72627,.0652998,.7933502,.1291464,.8043817,.2116733,.7471254,.2641279,.7649348,.1759774,.8230233,.2176891,.8401105,.0616542,.7099857,.0422153,.7925216,.4483479,.6343435,.4875979,.7137942,.3951722,.7664536,.3807075,.7635382,.7507148,.053928,.7308655,.0516316,.8310579,.0530336,.7935621,.0546067,.4721135,.7715352,.4394312,.7689576,.4946548,.7775987,.8471045,.039746],joints:[0,19,1,0,0,19,1,0,1,19,0,0,1,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,19,1,0,20,19,1,0,2,20,0,0,2,20,0,0,0,0,0,0,0,0,0,0,0,19,1,0,0,19,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,20,15,0,20,2,15,0,2,20,15,0,2,20,15,0,0,19,1,0,0,1,19,0,1,19,0,0,1,19,0,0,0,19,1,0,0,19,1,0,1,19,0,0,1,19,0,0,0,1,19,0,0,1,19,0,1,19,0,0,1,19,0,0,20,2,0,0,20,2,0,0,20,2,0,0,20,2,0,0,2,20,0,0,2,20,15,0,2,15,20,0,2,20,0,0,20,2,0,0,2,20,0,0,2,20,0,0,20,2,0,0,4,5,0,0,4,0,0,0,5,0,0,0,5,4,0,0,2,12,0,0,12,0,0,0,12,9,0,0,9,12,0,0,2,3,6,0,2,3,6,0,3,6,0,0,3,2,6,0,12,0,0,0,12,2,0,0,12,0,0,0,12,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,11,10,0,0,11,10,0,0,11,0,0,0,11,0,0,0,16,0,0,0,16,0,0,0,17,16,0,0,17,0,0,0,2,0,0,0,2,20,3,0,15,0,0,0,2,0,0,0,2,20,3,0,2,20,0,0,17,0,0,0,17,0,0,0,16,17,0,0,17,0,0,0,16,17,0,0,17,16,0,0,17,0,0,0,17,0,0,0,16,17,15,0,17,0,0,0,15,16,2,0,15,20,0,0,15,16,0,0,16,15,0,0,2,16,0,0,16,15,0,0,15,0,0,0,15,0,0,0,16,15,0,0,15,0,0,0,15,16,0,0,15,16,0,0,2,20,15,0,4,0,0,0,5,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,2,0,0,0,3,6,0,0,2,0,0,0,2,12,9,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,20,19,1,0,20,19,1,0,20,2,0,0,20,2,0,0,20,19,1,0,20,19,1,0,20,2,0,0,20,2,0,0,14,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,15,0,0,0,15,0,0,0,2,16,0,0,16,15,0,0,16,17,0,0,17,0,0,0,16,17,0,0,17,0,0,0,17,0,0,0,17,0,0,0,20,2,0,0,2,20,3,0,14,13,0,0,14,0,0,0,14,0,0,0,7,8,0,0,8,7,0,0,8,7,0,0,8,0,0,0,12,0,0,0,12,0,0,0,2,3,6,0,2,3,6,0,3,2,6,0,2,3,0,0,4,0,0,0,4,5,0,0,5,4,0,0,5,4,0,0,20,2,0,0,0,1,19,0,1,19,0,0,0,19,1,0,1,19,0,0,2,20,15,0,2,20,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,1,0,0,19,1,0,20,19,1,0,20,19,1,0,2,20,0,0,2,20,0,0,0,0,0,0,4,3,0,0,4,3,0,0,4,3,0,0,4,0,0,0,13,12,14,0,13,12,0,0,13,12,0,0,13,0,0,0,12,13,0,0,12,13,0,0,13,12,0,0,13,12,0,0,4,3,0,0,4,3,0,0,4,3,0,0,4,3,0,0,9,10,6,0,10,9,0,0,10,9,0,0,10,9,0,0,6,7,9,0,6,9,0,0,6,9,0,0,6,7,9,0,13,12,0,0,13,12,0,0,4,3,0,0,4,3,0,0,20,19,1,0,20,2,0,0,20,19,1,0,2,20,0,0,0,19,0,0,0,19,0,0,0,19,0,0,0,19,0,0,14,13,0,0,13,0,0,0,13,9,12,0,9,12,0,0,12,9,0,0,13,12,0,0,11,0,0,0,11,0,0,0,11,10,0,0,11,0,0,0,11,10,0,0,10,9,0,0,10,9,0,0,11,10,0,0,11,0,0,0,11,0,0,0,9,0,0,0,2,12,9,0,2,6,9,0,9,6,0,0,14,0,0,0,13,12,0,0,12,13,9,0,12,9,0,0,10,9,0,0,11,10,0,0,9,10,0,0,9,12,0,0,12,9,0,0,9,10,12,0,6,7,9,0,2,6,9,0,2,3,6,0,6,7,0,0,8,7,0,0,7,6,0,0,7,6,0,0,8,7,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,11,10,0,0,10,9,0,0,9,10,6,0,9,10,6,0,6,9,0,0,6,9,0,0,7,8,0,0,8,0,0,0,7,8,0,0,3,6,0,0,2,3,6,0,2,3,0,0,3,4,0,0,4,0,0,0,4,0,0,0,3,6,0,0,3,4,6,0,3,6,0,0,2,3,6,0,7,6,0,0,7,8,6,0,5,0,0,0,5,4,0,0,5,0,0,0,5,0,0,0,5,0,0,0,6,7,3,9,6,7,3,0,3,6,0,0,3,6,0,0,4,0,0,0,4,0,0,0,4,3,0,0,4,0,0,0,4,3,6,0,5,4,0,0,8,0,0,0,8,7,0,0,6,7,3,0,7,0,0,0,7,6,0,0,7,6,0,0,2,6,9,0,6,7,9,0,7,0,0,0,7,6,0,0,8,7,0,0,11,0,0,0,11,10,0,0,11,10,0,0,10,9,6,0,10,9,0,0,9,10,6,0,2,12,9,0,9,0,0,0,10,9,0,0,11,10,0,0,13,12,9,0,13,12,0,0,12,13,0,0,14,13,0,0,14,0,0,0,14,0,0,0,5,4,0,0,8,0,0,0,11,0,0,0,11,0,0,0,16,15,0,0,16,15,0,0,16,15,0,0,16,15,0,0,16,0,0,0,16,15,0,0,16,0,0,0,16,0,0,0,16,15,0,0,16,17,0,0,16,15,0,0,16,0,0,0,16,15,0,0,16,15,0,0,16,15,0,0,16,15,0,0,10,9,12,0,9,10,0,0,9,6,0,0,2,6,9,0,9,10,0,0,9,10,6,0,12,0,0,0,2,12,9,0,13,9,14,12,12,0,0,0,12,0,0,0,12,0,0,0,12,13,0,0,2,12,9,0,12,0,0,0,12,0,0,0,12,13,0,0,7,6,9,0,7,6,0,0,6,7,0,0,2,3,6,0,7,6,3,9,7,6,9,0,7,6,0,0,7,6,0,0,3,4,6,0,3,6,0,0,4,3,6,0,4,3,6,0,3,2,6,0,3,6,0,0,3,4,0,0,3,4,0,0,3,2,6,0,3,4,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,3,0,0,2,20,0,0,2,20,3,0,2,0,0,0,2,6,9,0,2,12,0,0,6,9,0,0,2,3,6,0,2,3,20,0,2,20,0,0,2,20,0,0,2,3,20,0,19,20,1,0,19,20,1,0,20,19,1,0,20,19,1,0,19,20,1,0,19,20,1,0,20,19,1,0,20,19,1,0,19,20,1,0,19,20,1,0,20,19,1,0,20,19,1,0,19,20,1,0,19,20,1,0,20,19,1,0,20,19,1,0,19,20,1,0,20,19,1,0,19,20,1,0,20,19,1,0,2,20,0,0,2,20,0,0,20,2,0,0,20,2,0,0,20,2,0,0,20,2,0,0,2,20,0,0,2,20,0,0,20,2,0,0,2,20,0,0],weights:[.6229866,.2327531,.1442603,0,.7191904,.2499408,.0308688,0,.5921552,.4078448,0,0,.5460746,.4539255,0,0,.9288065,.0711935,0,0,.9276083,.0723917,0,0,.5680063,.4319937,0,0,.5581355,.4418644,0,0,.7882727,.1411407,.0705866,0,.7690061,.1539959,.0769981,0,.5868526,.4131475,0,0,.6082025,.3917975,0,0,1,0,0,0,1,0,0,0,.756895,.1583677,.0847373,0,.7399299,.1580903,.1019798,0,.8823658,.1176343,0,0,.7729605,.2270395,0,0,.6926695,.3073305,0,0,.8977804,.1022196,0,0,1,0,0,0,.8416032,.1583969,0,0,.5653666,.4346334,0,0,.9699406,.0300594,0,0,.9341075,.0658925,0,0,.5370554,.4629446,0,0,1,0,0,0,1,0,0,0,.6500328,.3499672,0,0,.933522,.066478,0,0,1,0,0,0,1,0,0,0,.7019346,.2825594,.015506,0,.5314797,.4573326,.0111877,0,.5685914,.412282,.0191267,0,.4346764,.3394616,.225862,0,.6066767,.249377,.1439464,0,.4493161,.3021708,.2485131,0,.6032668,.3967333,0,0,.597297,.402703,0,0,.6993855,.2499986,.050616,0,.7327103,.2499667,.017323,0,.5500302,.4499697,0,0,.5484374,.4515626,0,0,.4665625,.2837324,.249705,0,.5157703,.2852472,.1989825,0,.549803,.450197,0,0,.5524948,.4475053,0,0,.5999657,.4000343,0,0,.5970161,.4029839,0,0,.582819,.417181,0,0,.5998471,.4001529,0,0,.8308969,.1691031,0,0,.7315856,.2563908,.0120237,0,.4878495,.3194951,.1926555,0,.9745688,.0254312,0,0,.5775583,.4224417,0,0,.8459104,.1540896,0,0,.9366255,.0633745,0,0,.5296401,.4703599,0,0,.9573291,.0426709,0,0,1,0,0,0,1,0,0,0,.7857907,.2142093,0,0,.5383646,.4616354,0,0,1,0,0,0,.9481213,.0518787,0,0,.8185357,.1814643,0,0,.5231999,.3370873,.1397128,0,.487481,.3025554,.2099635,0,.7209095,.2790905,0,0,.6681233,.2883109,.0435658,0,1,0,0,0,.773138,.2268619,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.6001807,.3998193,0,0,.6556031,.3443969,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.955166,.044834,0,0,1,0,0,0,1,0,0,0,.7274939,.2117925,.0607136,0,1,0,0,0,1,0,0,0,.6758857,.2785909,.0455234,0,.6871576,.3128424,0,0,1,0,0,0,1,0,0,0,.7724242,.2275758,0,0,1,0,0,0,.6443134,.3556866,0,0,.6492013,.3507987,0,0,1,0,0,0,1,0,0,0,.8257959,.1002525,.0739516,0,1,0,0,0,.5854671,.2778447,.1366882,0,.9860832,.0139168,0,0,.8466371,.1533629,0,0,.5779504,.4220496,0,0,.8112062,.1887939,0,0,.9737212,.0262788,0,0,1,0,0,0,1,0,0,0,.8770351,.1229649,0,0,1,0,0,0,.9801617,.0198383,0,0,.5419868,.4580132,0,0,.6457967,.2583641,.0958392,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.6153228,.3846772,0,0,1,0,0,0,.5854008,.2582467,.1563525,0,1,0,0,0,.8606021,.1393979,0,0,.8416942,.1583057,0,0,.6558771,.3441229,0,0,.7908508,.1394739,.0696753,0,.7920879,.1386295,.0692826,0,.5993393,.4006607,0,0,.5455501,.4544499,0,0,.7910177,.1393044,.069678,0,.7908624,.1394283,.0697093,0,.5993261,.4006738,0,0,.6,.4,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.8112062,.1887939,0,0,.9737212,.0262788,0,0,.6443134,.3556866,0,0,1,0,0,0,.7724242,.2275758,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.5296401,.4703599,0,0,.7274939,.2117925,.0607136,0,.98781,.01219,0,0,1,0,0,0,1,0,0,0,.5438575,.4561425,0,0,.5522361,.4477639,0,0,.98104,.01896,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.7505603,.2267014,.0227382,0,.5231999,.3370873,.1397128,0,.6681233,.2883109,.0435658,0,.582082,.4179179,0,0,1,0,0,0,.9573291,.0426709,0,0,.7857907,.2142093,0,0,.7503967,.2496032,0,0,.5775583,.4224417,0,0,.4665625,.2837324,.249705,0,.5524948,.4475053,0,0,.6993855,.2499986,.050616,0,.5484374,.4515626,0,0,.7019346,.2825594,.015506,0,.4346764,.3394616,.225862,0,1,0,0,0,.9288065,.0711935,0,0,.6500328,.3499672,0,0,.933522,.066478,0,0,1,0,0,0,.7399299,.1580903,.1019798,0,.793308,.1551615,.0515306,0,.7908514,.1394475,.0697011,0,.7909098,.1394458,.0696444,0,.5789515,.4210485,0,0,.6096394,.3903606,0,0,.5581355,.4418644,0,0,.7341991,.2658009,0,0,.8692081,.1307919,0,0,.9237264,.0762736,0,0,1,0,0,0,.7758548,.1837819,.0403633,0,.5312503,.4687497,0,0,.9620636,.0379364,0,0,1,0,0,0,.5902381,.4097619,0,0,.5175022,.4824978,0,0,.9649956,.0350044,0,0,.8561113,.1438887,0,0,.7263398,.2736602,0,0,.6058927,.3941074,0,0,.8577979,.1422022,0,0,.9473128,.0526871,0,0,.5041732,.4856456,.0101811,0,.562491,.437509,0,0,.9468378,.0531622,0,0,.9401007,.0598993,0,0,.6484889,.2714669,.0800443,0,.5172203,.4827797,0,0,.7418911,.2581088,0,0,.6668614,.2170206,.116118,0,.5312503,.4687497,0,0,.9620636,.0379364,0,0,.8692081,.1307919,0,0,.9237264,.0762736,0,0,.7908624,.1394283,.0697093,0,.5993261,.4006738,0,0,.7909098,.1394458,.0696444,0,.5789515,.4210485,0,0,.8416913,.1583087,0,0,.841641,.158359,0,0,.8456932,.1543068,0,0,.8416913,.1583087,0,0,.9210008,.0789992,0,0,1,0,0,0,.8726638,.0943307,.0330054,0,.8185357,.1814643,0,0,.9481213,.0518787,0,0,.6911861,.3088139,0,0,1,0,0,0,1,0,0,0,.9686402,.0313598,0,0,1,0,0,0,.6722303,.3277697,0,0,.9676759,.0323242,0,0,.8515258,.1484742,0,0,.597661,.402339,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.5854008,.2582467,.1563525,0,.5781819,.2756598,.1461583,0,.8650573,.1349427,0,0,1,0,0,0,.9798124,.0201875,0,0,.687966,.172056,.1399779,0,.9434672,.0565328,0,0,.9665783,.0334217,0,0,.9284967,.0715033,0,0,.9812652,.0187347,0,0,.8185357,.1814643,0,0,.9434672,.0565328,0,0,.859551,.0731122,.0673369,0,.7834148,.1962128,.0203724,0,.5781819,.2756598,.1461583,0,.5308265,.340821,.1283525,0,.805091,.1949089,0,0,.7145554,.2854446,0,0,.9879661,.012034,0,0,.9260099,.0739901,0,0,.9316084,.0683916,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.7696118,.2303882,0,0,.9440137,.0559863,0,0,.9484472,.0311905,.0203623,0,.4462401,.3691899,.18457,0,.7418911,.2581088,0,0,.5172203,.4827797,0,0,.7167958,.2832042,0,0,1,0,0,0,.6369892,.3630108,0,0,.9392218,.0607782,0,0,.5308265,.340821,.1283525,0,.582082,.4179179,0,0,.9670849,.0329151,0,0,1,0,0,0,1,0,0,0,.9392218,.0607782,0,0,.8266948,.1252594,.0480458,0,.6519279,.3480721,0,0,.5308265,.340821,.1283525,0,.819462,.180538,0,0,.8314989,.1087693,.0597318,0,1,0,0,0,.8437398,.1562602,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.6020831,.2445386,.1143995,.0389787,.749908,.1307203,.1193717,0,.6519279,.3480721,0,0,.6153228,.3846772,0,0,1,0,0,0,1,0,0,0,.8372562,.1627438,0,0,1,0,0,0,.4974374,.4871927,.01537,0,.7300385,.2699615,0,0,1,0,0,0,.9316084,.0683916,0,0,.5662313,.3694691,.0642996,0,1,0,0,0,.9260099,.0739901,0,0,.9688793,.0311207,0,0,.5781819,.2756598,.1461583,0,.7834148,.1962128,.0203724,0,1,0,0,0,.9879661,.012034,0,0,.7145554,.2854446,0,0,1,0,0,0,.9686402,.0313598,0,0,.597661,.402339,0,0,.6567749,.2509908,.0922344,0,.8515258,.1484742,0,0,.7331915,.2261562,.0406523,0,.5854008,.2582467,.1563525,0,1,0,0,0,.9676759,.0323242,0,0,.6722303,.3277697,0,0,.7184284,.2447004,.0368712,0,.9649956,.0350044,0,0,.5175022,.4824978,0,0,.9052771,.0947229,0,0,1,0,0,0,1,0,0,0,.8437398,.1562602,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.9666862,.0333137,0,0,.8654695,.1345306,0,0,.9693391,.0306609,0,0,.9177563,.0822437,0,0,1,0,0,0,.9502519,.0497481,0,0,1,0,0,0,1,0,0,0,.9109991,.0890009,0,0,.9531771,.0468229,0,0,.9502519,.0497481,0,0,1,0,0,0,.8654695,.1345306,0,0,.8357633,.1642367,0,0,.9802751,.0197249,0,0,.9693391,.0306609,0,0,.5213243,.4439071,.0347685,0,.7390369,.2609631,0,0,.8650573,.1349427,0,0,.5781819,.2756598,.1461583,0,.7390369,.2609631,0,0,.7331915,.2261562,.0406523,0,1,0,0,0,.5854008,.2582467,.1563525,0,.8457593,.0725793,.0586428,.0230185,1,0,0,0,1,0,0,0,1,0,0,0,.9411271,.0588729,0,0,.5854008,.2582467,.1563525,0,1,0,0,0,1,0,0,0,.9411271,.0588729,0,0,.5313743,.3996595,.0689662,0,.9097646,.0902354,0,0,.805091,.1949089,0,0,.5308265,.340821,.1283525,0,.5782669,.3713163,.0376042,.0128127,.6967322,.2720882,.0311797,0,.9097646,.0902354,0,0,.9688793,.0311207,0,0,.6797856,.2439539,.0762604,0,.6153228,.3846772,0,0,.6887594,.2927473,.0184933,0,.6887594,.2927473,.0184933,0,.6681233,.2883109,.0435658,0,.7209095,.2790905,0,0,.5208573,.4791427,0,0,.5912189,.4087811,0,0,.6681233,.2883109,.0435658,0,.5912189,.4087811,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,.9839824,.0160176,0,0,.8999985,.1000016,0,0,.8163042,.0983267,.0853691,0,1,0,0,0,.5781819,.2756598,.1461583,0,.8070496,.1929504,0,0,.5172203,.4827797,0,0,.5308265,.340821,.1283525,0,.755524,.1549684,.0895076,0,.9086262,.0913738,0,0,.9319967,.0680033,0,0,.755524,.1549684,.0895076,0,.5503079,.2780358,.1716563,0,.5618242,.2708551,.1673207,0,.447199,.4146231,.1381779,0,.4468004,.4149101,.1382895,0,.5613434,.2709846,.1676721,0,.5617939,.2708405,.1673656,0,.4473197,.4124766,.1402037,0,.4473045,.4075916,.1451039,0,.5616744,.2707093,.1676162,0,.5597768,.2723375,.1678857,0,.4356222,.4232334,.1411445,0,.4401243,.4185776,.1412982,0,.5620911,.2707438,.1671652,0,.5467715,.2735885,.17964,0,.4465392,.4077773,.1456835,0,.4473283,.4134046,.1392671,0,.5618242,.2708551,.1673207,0,.4468004,.4149101,.1382895,0,.5467715,.2735885,.17964,0,.4473283,.4134046,.1392671,0,.6096394,.3903606,0,0,.5789515,.4210485,0,0,.6,.4,0,0,.5993261,.4006738,0,0,.5455501,.4544499,0,0,.5993393,.4006607,0,0,.6082025,.3917975,0,0,.5868526,.4131475,0,0,.5993261,.4006738,0,0,.5789515,.4210485,0,0],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,14,20,14,13,22,23,24,22,24,25,26,16,19,26,19,27,28,25,24,28,24,29,30,31,5,30,5,4,32,33,34,32,34,35,36,37,38,36,38,39,40,41,42,40,42,43,44,45,46,44,46,47,48,49,50,48,50,51,52,53,54,52,54,55,56,57,58,56,58,59,60,61,62,60,62,63,64,65,66,64,66,67,68,69,70,68,70,71,72,73,74,72,74,75,76,77,78,76,78,79,80,81,82,80,82,83,84,85,86,84,86,87,59,58,88,59,88,89,55,54,90,55,90,91,51,50,92,51,92,93,94,87,86,94,86,95,96,84,87,96,87,97,98,99,100,98,100,101,99,102,103,99,103,100,104,105,106,104,106,107,108,104,107,108,107,109,110,111,112,110,112,113,111,114,115,111,115,112,34,51,93,34,93,116,58,55,91,58,91,88,61,117,118,61,118,62,77,119,120,77,120,78,121,78,120,121,120,122,69,123,124,69,124,70,57,52,55,57,55,58,33,48,51,33,51,34,73,125,126,73,126,74,41,36,39,41,39,42,127,128,16,127,16,26,6,5,23,6,23,22,31,129,21,31,21,20,128,130,17,128,17,16,131,132,133,131,133,134,45,0,3,45,3,46,135,136,137,135,137,138,139,140,141,139,141,142,105,143,144,105,144,106,114,145,146,114,146,115,85,147,148,85,148,86,102,149,150,102,150,103,103,151,152,103,152,100,50,153,154,50,154,92,155,156,157,155,157,139,158,159,160,158,160,161,65,162,163,65,163,66,164,165,166,164,166,167,168,169,170,168,170,171,49,172,153,49,153,50,37,173,174,37,174,38,1,175,176,1,176,2,53,177,178,53,178,54,127,179,180,127,180,128,18,181,182,18,182,19,27,183,184,27,184,185,186,187,188,186,188,189,128,180,190,128,190,130,191,192,193,191,193,194,195,196,197,195,197,198,199,200,201,199,201,202,203,204,205,203,205,206,207,208,209,207,209,210,211,212,213,211,213,214,215,199,202,215,202,216,217,203,206,217,206,218,219,8,11,219,11,220,9,186,189,9,189,10,132,135,138,132,138,133,221,131,134,221,134,222,129,223,175,129,175,1,185,184,173,185,173,37,14,21,0,14,0,45,224,225,36,224,36,41,15,14,45,15,45,44,226,224,41,226,41,40,225,185,37,225,37,36,21,129,1,21,1,0,227,228,198,227,198,155,229,230,231,229,231,232,233,234,235,233,235,236,237,238,239,237,239,240,82,241,242,82,242,83,243,244,245,243,245,246,227,247,248,227,248,228,229,249,250,229,250,230,81,209,251,81,251,252,253,254,255,253,255,256,257,258,259,257,259,260,261,262,263,261,263,264,265,266,267,265,267,268,161,269,270,161,270,271,80,272,273,80,273,210,274,275,276,274,276,277,278,271,279,278,279,280,281,282,283,281,283,284,285,286,194,285,194,168,287,288,289,287,289,290,278,291,292,278,292,158,293,294,171,293,171,295,118,296,297,118,297,62,298,299,300,298,300,301,298,301,212,298,212,211,302,303,304,302,304,305,306,304,205,306,205,204,303,307,118,303,118,117,280,279,308,280,308,309,310,311,312,310,312,313,214,213,314,214,314,315,159,316,317,159,317,318,272,319,320,272,320,321,322,273,323,322,323,324,256,255,325,256,325,326,252,251,327,252,327,328,329,248,330,329,330,331,247,332,333,247,333,334,304,303,117,304,117,205,335,296,307,294,285,168,294,168,171,194,193,169,194,169,168,206,205,117,206,117,61,218,206,61,218,61,60,269,160,336,311,280,309,311,309,312,271,278,158,271,158,161,291,278,280,291,280,311,266,261,264,266,264,267,292,316,159,292,159,158,241,337,338,273,272,321,273,321,323,83,242,319,82,337,241,234,237,240,234,240,235,210,209,81,210,81,80,248,247,334,248,334,330,142,141,332,142,227,155,142,155,139,198,197,156,198,156,155,202,201,119,202,119,77,216,202,77,216,77,76,339,340,341,339,341,342,343,344,345,343,345,346,347,339,342,347,342,348,349,347,348,349,348,350,351,352,353,351,353,354,352,343,346,352,346,353,355,256,326,355,326,356,276,275,357,276,357,358,207,322,275,207,275,274,208,253,256,208,256,355,359,243,246,359,246,360,277,254,253,277,253,274,250,249,361,250,361,362,363,329,249,363,249,229,363,229,232,363,232,195,364,365,366,364,366,367,365,368,369,365,369,366,231,370,371,231,371,232,372,214,315,372,315,373,300,299,374,300,374,375,376,298,211,376,211,377,376,310,299,376,299,298,378,257,260,378,260,379,377,211,214,377,214,372,289,288,380,289,380,381,382,306,288,382,288,287,383,281,284,383,284,191,384,385,386,384,386,387,385,381,380,385,380,386,283,388,389,283,389,284,390,391,145,390,145,114,54,178,143,54,143,105,34,116,111,35,34,111,35,111,110,392,393,104,392,104,108,393,90,104,394,395,396,394,396,164,126,125,397,126,397,398,124,123,399,124,399,400,67,400,399,67,399,64,19,182,183,19,183,27,224,226,179,224,179,127,5,31,20,5,20,23,224,127,26,224,26,225,223,129,31,223,31,30,225,26,27,225,27,185,23,20,13,23,13,24,29,24,13,29,13,12,401,394,164,401,164,167,396,402,165,396,165,164,403,404,123,403,123,69,405,403,69,405,69,68,393,392,162,393,162,65,390,395,125,390,125,73,391,390,73,391,73,72,404,393,65,404,65,64,394,397,395,397,394,401,397,401,398,404,399,123,395,397,125,399,404,64,112,115,343,112,343,352,113,112,352,113,352,351,109,107,347,109,347,349,107,106,339,107,339,347,115,146,344,115,344,343,106,144,340,106,340,339,103,150,151,97,87,94,101,100,152,86,148,95,342,341,149,342,149,102,346,345,147,346,147,85,348,342,102,348,102,99,350,348,99,350,99,98,354,353,84,354,84,96,353,346,85,353,85,84,63,62,297,171,170,295,118,307,296,307,303,302,307,302,335,336,160,159,336,159,318,161,160,269,279,271,270,308,279,270,319,272,80,319,80,83,320,319,242,338,337,252,338,252,328,337,82,81,337,81,252,139,157,140,79,78,121,332,247,227,332,227,142,333,332,141,47,46,406,47,406,407,407,406,408,407,408,409,409,408,131,409,131,221,3,2,410,3,410,411,411,410,412,411,412,413,413,412,135,413,135,132,39,38,414,39,414,415,415,414,416,415,416,417,417,416,186,417,186,9,43,42,418,43,418,419,419,418,420,419,420,421,421,420,8,421,8,219,38,174,422,38,422,414,414,422,423,414,423,416,416,423,187,416,187,186,2,176,424,2,424,410,410,424,425,410,425,412,412,425,136,412,136,135,46,3,411,46,411,406,406,411,413,406,413,408,408,413,132,408,132,131,42,39,415,42,415,418,418,415,417,418,417,420,420,417,9,420,9,8,426,427,177,426,177,53,428,429,172,428,172,49,430,431,48,430,48,33,432,433,52,432,52,57,434,432,57,434,57,56,433,426,53,433,53,52,431,428,49,431,49,48,435,430,33,435,33,32,228,363,195,228,195,198,228,248,329,228,329,363,249,329,331,249,331,361,367,366,199,367,199,215,366,369,200,366,200,199,232,371,196,232,196,195,238,359,360,238,360,239,209,208,355,209,355,251,210,273,322,210,322,207,251,355,356,251,356,327,275,322,324,275,324,357,274,253,208,274,208,207,292,377,372,292,372,316,262,378,379,262,379,263,291,311,310,291,310,376,291,376,377,291,377,292,316,372,373,316,373,317,299,310,313,299,313,374,286,383,191,286,191,194,305,304,306,305,306,382,288,306,204,288,204,380,387,386,203,387,203,217,386,380,204,386,204,203,284,389,192,284,192,191,91,90,393,91,393,404,104,90,105,88,91,404,88,404,403,114,116,390,92,154,402,92,402,396,116,93,395,116,395,390,93,92,396,93,396,395,89,88,403,89,403,405,105,90,54,111,116,114]},hd=new K(0,1,0),gd=.097,_d=2.6848283,vd=2.5185163,yd=new rs().load(new URL(new URL(`arm_albedo_pale-DqLU4O7V.png`,import.meta.url).href,``+import.meta.url).href);yd.colorSpace=Pe,yd.flipY=!1;function bd(e,t,n,r,i,a={}){let o=a.scale??gd,s=new Cn;s.name=`anatomical-arm`,e.add(s);let c=new Cn;c.scale.setScalar(o),s.add(c);let l=md.nodes.map(e=>{let t=new ui;return t.name=e.name,t.position.fromArray(e.position),t.quaternion.fromArray(e.rotation),t});md.nodes.forEach((e,t)=>e.parent<0?c.add(l[t]):l[e.parent].add(l[t])),new J().fromArray(md.nodes[0].restMatrix).decompose(l[0].position,l[0].quaternion,l[0].scale);let u=new mi(l,md.nodes.map(e=>new J().fromArray(e.inverse))),d=new Map(l.map(e=>[e.name,e])),f=new Map(l.map(e=>[e.name,e.quaternion.clone()])),p=new Dr;if(p.setAttribute(`position`,new hr(md.position,3)),p.setAttribute(`normal`,new hr(md.normal,3)),p.setAttribute(`uv`,new hr(md.uv,2)),p.setAttribute(`skinIndex`,new pr(md.joints,4)),p.setAttribute(`skinWeight`,new hr(md.weights,4)),p.setIndex(md.indices),a.trimShoulder!==!1){let e=new J().fromArray(md.nodes[0].inverse),t=e.clone().invert(),n=new K,r=p.attributes.position;for(let i=0;i<r.count;i++)if(n.fromBufferAttribute(r,i).applyMatrix4(e),n.y<.75){let e=Tt.smoothstep(n.y,.2,.75),a=Math.hypot(n.x,n.z),o=a>1e-6?Math.min(1,.35/a):1;n.x*=Tt.lerp(o,1,e),n.z*=Tt.lerp(o,1,e),n.y=Math.max(.12,n.y),n.applyMatrix4(t),r.setXYZ(i,n.x,n.y,n.z)}r.needsUpdate=!0,p.computeVertexNormals()}let m=l.indexOf(d.get(`wrist.r`)),h=[],g=[];for(let e=0;e<md.indices.length;e+=3){let t=md.indices.slice(e,e+3);(t.some(e=>md.weights.slice(e*4,e*4+4).some((t,n)=>t>.2&&md.joints[e*4+n]>=m&&md.joints[e*4+n]<19))?g:h).push(...t)}p.setIndex([...h,...g]),p.addGroup(0,h.length,0),p.addGroup(h.length,g.length,1),r.add(p),t=t.clone(),t.flatShading=!1,n=n.clone(),n.color.setRGB(1,.96,.9),n.map=yd,t.emissive.copy(t.color),t.emissiveIntensity=.08,n.emissive.setRGB(.16,.08,.04),n.emissiveIntensity=.09,i.add(t),i.add(n);let _=new li(p,[t,n]);_.name=`continuous-authored-arm`,_.frustumCulled=!1,c.add(_),_.bind(u,new J),_.castShadow=!0,_.receiveShadow=!0;let v=d.get(`bicep.r`),y=d.get(`forearm.r`),b=d.get(`wrist.r`);function x(e=1){for(let t of[`index`,`middle`,`ring`,`pinky`])for(let n=1;n<=3;n++){let r=d.get(`finger_${t}${n}.r`);r.quaternion.copy(f.get(r.name)),r.rotateZ([0,.98,1.3,1.22][n]*e)}let t=d.get(`finger_thumb1.r`),n=d.get(`finger_thumb2.r`),r=d.get(`finger_thumb3.r`),i=new Et().setFromAxisAngle(hd,-1.72*e);t.quaternion.copy(f.get(t.name)).premultiply(i),n.quaternion.copy(f.get(n.name)),n.rotateZ(.48*e),r.quaternion.copy(f.get(r.name)),r.rotateZ(.38*e)}function S(e,t,n,r,i=1){s.updateWorldMatrix(!0,!1),v.position.copy(e).divideScalar(o),v.scale.set(1,1,1);let a=t.clone().sub(e).normalize(),c=n.clone().sub(t).normalize(),l=a.clone().cross(c);l.lengthSq()<1e-8&&l.set(1,0,0),l.normalize();let f=e=>new Et().setFromRotationMatrix(new J().makeBasis(l,e,l.clone().cross(e).normalize())),p=f(a),m=f(c);v.quaternion.copy(p),y.quaternion.copy(p.clone().invert().multiply(m)),b.quaternion.copy(m.clone().invert().multiply(r));let h=b.quaternion,g=new Et(0,h.y,0,h.w).normalize();d.get(`forearm.Twist0.r`).quaternion.identity().slerp(g,.35),d.get(`forearm.Twist1.r`).quaternion.identity().slerp(g,.45),x(i),s.updateMatrixWorld(!0),u.update()}let C=new K;function w(e,t=!0){s.updateMatrixWorld(!0),u.update();let n=-1/0,r=new K;for(let i=0;i<p.attributes.position.count;i++){if(t&&!md.weights.slice(i*4,i*4+4).some((e,t)=>e>.2&&md.joints[i*4+t]>=m&&md.joints[i*4+t]<19))continue;C.fromBufferAttribute(p.attributes.position,i),_.applyBoneTransform(i,C),C.multiplyScalar(o);let a=C.dot(e);a>n&&(n=a,r.copy(C))}return r}function T(){s.updateMatrixWorld(!0),u.update();let e=[];for(let t=0;t<p.attributes.position.count;t++){if(!md.weights.slice(t*4,t*4+4).some((e,n)=>e>.2&&md.joints[t*4+n]>=m&&md.joints[t*4+n]<19))continue;let n=new K().fromBufferAttribute(p.attributes.position,t);_.applyBoneTransform(t,n),e.push(n.multiplyScalar(o))}return e}function E(e){return s.updateMatrixWorld(!0),d.get(e).getWorldPosition(new K).applyMatrix4(s.matrixWorld.clone().invert())}return x(1),{root:s,rig:c,mesh:_,skeleton:u,bones:l,wrist:b,pose:S,close:x,support:w,handVertices:T,joint:E,upperLength:_d*o,forearmLength:vd*o,scale:o}}var xd=e=>new K(e.x,e.y,-e.z),Sd=e=>{let t=Tt.clamp(e,0,1);return t*t*(3-2*t)};function Cd(e,t,n,r,i){let a=bd(e,t,n,r,i),o=a.root;o.name=`first-person-tap-arm`;let s=new Cn;o.add(s);let c=new Float32Array(405),l=new Dr,u=[];l.setAttribute(`position`,new fr(c,3));for(let e=0;e<8;e++)for(let t=0;t<14;t++){let n=e*15+t,r=n+14+1;u.push(n,n+1,r,n+1,r+1,r)}l.setIndex(u),r.add(l);let d=new Zr(l,a.mesh.material[0]);d.name=`view-sleeve-continuation`,o.add(d),d.frustumCulled=!1,d.castShadow=!0,d.receiveShadow=!0;function f(e,t,n){let r=n.clone().sub(t).normalize(),i=e(.19,-.67,-.22),a=t.clone().addScaledVector(r,.076),o=new ia([i,t.clone().add(new K(0,-.055,0)),t,a]),s=o.computeFrenetFrames(8,!1),c=l.attributes.position;for(let e=0;e<=8;e++){let t=e/8,n=o.getPointAt(t),r=s.normals[e],i=s.binormals[e],a=Tt.lerp(.058,.038,Sd(t)),l=Tt.lerp(.045,.038,Sd(t));for(let t=0;t<=14;t++){let o=t/14*Math.PI*2,s=n.clone().addScaledVector(r,Math.cos(o)*a).addScaledVector(i,Math.sin(o)*l);c.setXYZ(e*15+t,s.x,s.y,s.z)}}c.needsUpdate=!0,l.computeVertexNormals(),l.computeBoundingSphere()}let p={visible:!1};function m(e,t,n,r){if(o.visible=Number.isFinite(r)&&r>=0&&r<.72,!o.visible){p={visible:!1};return}let i=(t,n,r)=>xd(new K(t,n,r).applyMatrix4(e.matrixWorld)),s=xd(new K(0,-1,0).transformDirection(e.matrixWorld)),c=xd(new K(1,0,0).transformDirection(e.matrixWorld));s.clone().negate();let l=n.clone().negate(),u=new K(n.y,-n.x,0).normalize(),d=Sd((t.y-1.26)/.23)*Sd((-t.z-.88)/.34),m=.46-1.16*d,h=u.clone().addScaledVector(l,m).normalize(),g=n.clone().addScaledVector(h,-n.dot(h)).normalize(),_=g.clone().cross(h).normalize(),v=new Et().setFromRotationMatrix(new J().makeBasis(g,h,_)),y=d*2.35619449;v.premultiply(new Et().setFromAxisAngle(l,y));let b=new K,x=new K(0,a.upperLength,0),S=new K(0,a.upperLength+a.forearmLength,0);a.pose(b,x,S,v,1);let C=a.support(l).sub(S),w=t.clone().sub(C),T=r<.16?Sd(r/.16):r<.25?1:1-Sd((r-.25)/.47),E=i(.09,-.34,-.23).clone().lerp(w,T);function D(){let e=new K(.53,.92,-.9),t=e.distanceTo(E),n=a.upperLength+a.forearmLength-.012,r=Math.max(0,t-n);r&&e.addScaledVector(E.clone().sub(e).normalize(),r);let i=E.clone().sub(e),o=i.length();i.normalize();let l=(a.upperLength*a.upperLength-a.forearmLength*a.forearmLength+o*o)/(2*o),u=Math.sqrt(Math.max(0,a.upperLength*a.upperLength-l*l)),d=s.clone().addScaledVector(c,.55);d.addScaledVector(i,-d.dot(i)).normalize();let f=e.clone().addScaledVector(i,l).addScaledVector(d,u);return a.pose(e,f,E,v,.92+.08*T),{shoulder:e,elbow:f,lean:r}}let O=D();if(T===1)for(let e=0;e<2;e++){let e=t.clone().sub(a.support(l));if(e.lengthSq()<1e-10)break;E.add(e),O=D()}let{shoulder:k,elbow:A,lean:j}=O;f(i,k,A);let M=a.support(l),N=a.handVertices().map(t=>xd(t).project(e)),P={left:Math.min(...N.map(e=>e.x)),right:Math.max(...N.map(e=>e.x)),top:Math.max(...N.map(e=>e.y)),bottom:Math.min(...N.map(e=>e.y))};p={visible:!0,age:r,phase:r<.16?`approach`:r<.25?`contact`:`withdraw`,source:`WRAD ARMS`,shoulder:xd(k).toArray(),elbow:xd(A).toArray(),wrist:xd(E).toArray(),knuckle:xd(M).toArray(),target:xd(t).toArray(),contactError:M.distanceTo(t),upperLength:a.upperLength,forearmLength:a.forearmLength,lean:j,contactTilt:m,handRoll:y,handBounds:P,viewSleeveContinuation:!0}}return{root:o,fist:s,render:m,info:()=>structuredClone(p)}}function wd(e,t,n,r,i,a,o={}){let s=new Cn;s.name=`brother-reaching-from-left-seat`,e.add(s);let c=new K(0,1,0),l=new K(1,0,0),u=new K(-.43,.64,-.94),d=.39,f={anticipation:.55,contact:.13,withdrawal:.9},p=Tt.clamp,m=e=>{let t=p(e,0,1);return t*t*(3-2*t)};t=t.clone(),n=n.clone(),a.add(t),a.add(n),t.emissive.copy(t.color),t.emissiveIntensity=.035,n.emissive.copy(n.color),n.emissiveIntensity=.025;let h=new ko({color:`#465970`,roughness:1}),g=new ko({color:`#6d655a`,roughness:1});a.add(h),a.add(g);let _=new _o(1,16,10),v=new Ji(.82,1,1,12,1,!0);i.add(_),i.add(v);function y(e,t,n=s){let r=new Zr(e,t);return r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function b(e,t,n=s){let r=y(_,e,n);return r.scale.set(...t),r}function x(e,t,n,r){let i=n.clone().sub(t);e.position.copy(t).add(n).multiplyScalar(.5),e.quaternion.setFromUnitVectors(c,i.clone().normalize()),e.scale.set(r,i.length(),r)}function S(e,t=20){let n=[],r=[];for(let[r,i,a,o=0]of e)for(let e=0;e<=t;e++){let s=e*Math.PI*2/t;n.push(Math.cos(s)*i,r,Math.sin(s)*a+o)}for(let n=0;n<e.length-1;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,i+1,a,a+1)}let a=new Dr;return a.setAttribute(`position`,new hr(n,3)),a.setIndex(r),a.computeVertexNormals(),i.add(a),a}let C=y(S([[0,.106,.07],[.06,.113,.075],[.19,.129,.079],[.31,.146,.074],[.37,.145,.073],[.4,.131,.067],[.43,.055,.043]]),t),w=b(h,[.128,.073,.102]),T=y(v,n),E=new Cn;E.name=`brother-head`,s.add(E);let D=y(S([[-.099,.037,.039,.009],[-.08,.063,.055,.003],[-.037,.078,.069],[.023,.08,.074],[.074,.064,.059],[.1,.026,.025]]),n,E);D.name=`brother-face`;let O=new _o(1,16,8,0,Math.PI*2,0,1.77);i.add(O);let k=y(O,r,E);k.position.y=.025,k.scale.set(.084,.083,.079),k.name=`brother-hair`,b(n,[.013,.019,.024],E).position.set(0,-.005,.07);for(let e of[-1,1])b(n,[.013,.027,.015],E).position.set(e*.079,-.016,-.002),b(r,[.005,.005,.003],E).position.set(e*.029,.011,.069),x(y(v,r,E),new K(e*.018,.023,.069),new K(e*.041,.023,.066),.0025);let A=(o.armFactory??bd)(s,t,n,i,a),j=A.upperLength,M=A.forearmLength,N=b(t,[.046,.068,.046]),P=y(v,t),F=y(v,n),I=b(n,[.031,.032,.031]),ee=b(n,[.031,.014,.042]),L=[-1,1].map(()=>({upper:y(v,h),lower:y(v,h),knee:b(h,[.047,.047,.047]),shoe:b(g,[.044,.036,.085])}));A.root.name=`brother-authored-knocking-arm`;let te=null,ne=``,re=``,ie=null,ae=0,R=null,z=null,oe=null,se={visible:!1,handReady:!0,phase:`rest`,reachable:!1};function ce(e,t,n,r,i){let a=t.clone().sub(e),o=a.length(),s=a.clone().normalize(),c=p(o,Math.abs(n-r)+1e-4,n+r-.001),l=e.clone().addScaledVector(s,c),u=(n*n-r*r+c*c)/(2*c),d=Math.sqrt(Math.max(0,n*n-u*u)),f=i.clone().sub(e);return f.addScaledVector(s,-f.dot(s)),f.lengthSq()<1e-8&&f.copy(new K(0,0,1)).addScaledVector(s,-s.z),{elbow:e.clone().addScaledVector(s,u).addScaledVector(f.normalize(),d),wrist:l,reachable:o<=n+r-.001,requested:o}}function le(e){let t=e.clone().cross(l).normalize();t.lengthSq()<.5&&t.set(0,0,-1);let n=t.clone().cross(e).normalize();return{across:t,facing:n,quaternion:new Et().setFromRotationMatrix(new J().makeBasis(t,e,n))}}function ue(e,t){let n=t.clone().applyQuaternion(e.clone().invert()),r=n.toArray().map(e=>e.toFixed(6)).join(`,`);return(r!==ne||!te)&&(A.pose(new K(0,-j-M,0),new K(0,-M,0),new K,new Et,1),te=A.support(n).sub(A.joint(`wrist.r`)),ne=r),te.clone().applyQuaternion(e)}function de(e,t){let n=null;for(let r of[-.02,.07,.16,.25,.34])for(let i of[.66,.75,.84,.92])for(let a of[-.98,-.84,-.69,-.55])for(let o of[.2,.5,1]){let s=new K(r,i,a),c=e.clone().sub(s);c.z*=o,c.normalize(),c.y=Math.max(.3,c.y),c.normalize();let l=le(c),u=s.clone().addScaledVector(c,d),f=u.clone().addScaledVector(l.across,.085),m=f.distanceTo(e),h=u.clone().add(new K(0,.16,.055)).distanceTo(t),g=e.y>1.1?.78:.66,_=p(e.z+.24,-.69,-.55),v=Math.max(0,m-.49)*1e3+Math.abs(r-.16)*.25+Math.abs(i-g)*.55+Math.abs(a-_)*.55+(1-c.y)*.08+Math.max(0,.42-h)*1e3;(!n||v<n.score)&&(n={hip:s,axis:c,chest:u,shoulder:f,score:v,reachable:m<=j+M-.001,requested:m,headEyeDistance:h})}return n}function fe(e,t,n,r,i=0){let a=new K(e.position.x,e.position.y,-e.position.z),o=Number.isFinite(r)&&r>=-f.anticipation&&r<f.withdrawal,h=o?r<0?m((r+f.anticipation)/f.anticipation):r<=f.contact?1:1-m((r-f.contact)/(f.withdrawal-f.contact)):0;!o&&ae>.001&&R!==null&&i>=R?(z??={weight:ae,start:i},h=z.weight*(1-m((i-z.start)/.34)),oe&&(t=oe)):(o||h<.001)&&(z=null),R=i,ae=h,o&&(oe=t.clone());let g=n.clone().negate(),_=new K(n.y,-n.x,0).normalize().clone().addScaledVector(g,.46).normalize(),v=n.clone().addScaledVector(_,-n.dot(_)).normalize(),y=v.clone().cross(_).normalize(),b=new Et().setFromRotationMatrix(new J().makeBasis(v,_,y)),S=ue(b,g),D=t.clone().sub(S),O=t.toArray().map(e=>e.toFixed(5)).join(`,`);(O!==re||!ie)&&(re=O,ie=de(D,a));let k=u.clone().lerp(ie.hip,h);k.z+=Math.sin(h*Math.PI)*.16;let te=c.clone().lerp(ie.axis,h);te.z+=Math.sin(h*Math.PI)*.45,te.normalize();let ne=le(te),fe=k.clone().addScaledVector(te,d);C.position.copy(k),C.quaternion.copy(ne.quaternion),w.position.copy(k),w.quaternion.copy(ne.quaternion);let pe=fe.clone().addScaledVector(ne.across,.085),me=fe.clone().addScaledVector(ne.across,-.085),he=fe.clone().addScaledVector(te,-.012),ge=fe.clone().add(new K(0,.07,.035));x(T,he,ge,.029),E.position.copy(fe).add(new K(0,.16,.055));let _e=l.clone().lerp(g,.35+h*.65).normalize(),ve=c.clone().cross(_e).normalize(),ye=_e.clone().cross(ve).normalize();E.quaternion.setFromRotationMatrix(new J().makeBasis(ve,ye,_e));let be=ce(pe,k.clone().add(new K(.19,-.002,.24)).clone().lerp(D,h),j,M,pe.clone().add(new K(-.05,-.3,.13)));A.pose(pe,be.elbow,be.wrist,b,1);let xe=be.elbow.clone().sub(pe).normalize();N.position.copy(pe).addScaledVector(xe,.026),N.quaternion.setFromUnitVectors(c,xe);let Se=ce(me,u.clone().add(new K(.17,-.025,.23)).lerp(new K(.08,.614,-.7),h),j,M,me.clone().add(new K(-.18,-.28,-.04)));x(P,me,Se.elbow,.036),x(F,Se.elbow,Se.wrist,.03),I.position.copy(Se.elbow),ee.position.copy(Se.wrist);for(let e=0;e<2;e++){let t=e?1:-1,n=k.clone().addScaledVector(ne.across,t*.067),r=new K(u.x+t*.076,.315,-.59),i=new K(ie.hip.x+t*.09,.614,p(ie.hip.z-.2,-1.1,-.77)),a=ce(n,r.lerp(i,h),.29,.28,n.clone().add(new K(0,-.1,.4)));x(L[e].upper,n,a.elbow,.052),x(L[e].lower,a.elbow,a.wrist,.043),L[e].knee.position.copy(a.elbow),L[e].shoe.position.copy(a.wrist).add(new K(0,-.019,.035))}s.updateMatrixWorld(!0);let Ce=A.support(g),we=A.joint(`wrist.r`),Te=e=>e.toArray().map(e=>+e.toFixed(5));se={visible:!0,active:h>.001,handReady:!0,weight:h,age:Number.isFinite(r)?r:null,phase:o?r<0?`approach`:r<=f.contact?`contact`:`withdrawal`:h>.001?`aborted-return`:`rest`,reachable:ie.reachable,hip:Te(k),chest:Te(fe),head:Te(E.position),shoulder:Te(pe),elbow:Te(be.elbow),wrist:Te(be.wrist),target:Te(t),contact:Te(Ce),contactError:Ce.distanceTo(t),planeError:Ce.clone().sub(t).dot(n),wristPoseError:we.distanceTo(be.wrist),solvedContact:Te(be.wrist.clone().add(S)),segmentLengths:{spine:k.distanceTo(fe),upperArm:pe.distanceTo(be.elbow),forearm:be.elbow.distanceTo(be.wrist)},headEyeDistance:E.position.distanceTo(a),timing:{...f},hand:{source:`WRAD ARMS`,license:`CC0-1.0`,continuousArm:!0}}}return{root:s,render:fe,info:()=>structuredClone(se),timing:{...f}}}var Td=e=>new K(e.x,e.y,-e.z),Ed={right:74,side:74,down:74,parents:48,brother:74},Dd=new K(.2,1.18,-.94),Od={front:-.12,rear:-1.3,top:1.51,bottom:.85,topX:.75,bottomX:.86},kd=Od.front-Od.rear,Ad=Od.top-Od.bottom,jd={right:new K(2,1.13,-.58),side:new K(2,1.18,-.94),down:new K(2,.92,-.58),parents:new K(-1.1,1.12,2),brother:new K(-.65,.85,-.8)},Md={sunset:{skyTop:`#6d286e`,skyHorizon:`#f48d57`,skyBottom:`#c3645c`,fog:`#ba6968`,sun:`#ffd58d`,sunStrength:1,field:`#66525b`,leaf:`#423644`,hill:`#755270`,house:`#c68775`,roof:`#693e56`,ambient:`#b48bbf`,ground:`#51425c`,ambientPower:1.05,key:`#ffae72`,keyPower:3.2,keyPosition:[10,3.3,-3],fill:`#836ec7`,fillPower:1.35,warm:`#ffc88b`,interiorPower:.35,exposure:1.05,fogNear:18,fogFar:420,lamps:!1,windowGlow:.03,passingPower:.1,accentPower:0,glass:`#b0a3ad`,drop:`#cfddd5`,glare:`#ffb18a`,road:`#41494c`,roadLine:`#aaa894`},night:{skyTop:`#061622`,skyHorizon:`#1d677b`,skyBottom:`#15394e`,fog:`#173e52`,sun:`#b9e9ef`,sunStrength:.04,field:`#102d35`,leaf:`#071c29`,hill:`#1e455b`,house:`#466a7b`,roof:`#1c2a44`,ambient:`#619eae`,ground:`#101d2b`,ambientPower:.68,key:`#99dfef`,keyPower:1.8,keyPosition:[8,7,-5],fill:`#aa6db6`,fillPower:.7,warm:`#ffd18c`,interiorPower:.27,exposure:1.12,fogNear:15,fogFar:245,lamps:!0,windowGlow:.95,passingPower:4.2,accentPower:.7,glass:`#4b99b0`,drop:`#a2dcea`,glare:`#ffc76e`,road:`#182a39`,roadLine:`#7795a1`},amberRain:{skyTop:`#142529`,skyHorizon:`#77765d`,skyBottom:`#4b554c`,fog:`#6d7463`,sun:`#e5b664`,sunStrength:.015,field:`#3f5141`,leaf:`#172f2d`,hill:`#475b50`,house:`#9f9272`,roof:`#4e4b3d`,ambient:`#91a99e`,ground:`#283c39`,ambientPower:.82,key:`#d9c6a1`,keyPower:1.3,keyPosition:[5,9,-4],fill:`#638d8c`,fillPower:.7,warm:`#ffc66a`,interiorPower:.28,exposure:1.03,fogNear:9,fogFar:175,lamps:!0,windowGlow:.7,passingPower:6,accentPower:0,glass:`#9caa9a`,drop:`#e3d5ac`,glare:`#ffc155`,road:`#35433f`,roadLine:`#b1ad82`},overcast:{skyTop:`#344c5d`,skyHorizon:`#aab7b8`,skyBottom:`#7a9991`,fog:`#8ca39b`,sun:`#d6ded4`,sunStrength:.01,field:`#517c4b`,leaf:`#193f35`,hill:`#5a8577`,house:`#b4b39d`,roof:`#5a655f`,ambient:`#b6d0cf`,ground:`#344e42`,ambientPower:1.5,key:`#d2ddd6`,keyPower:1.9,keyPosition:[4,12,-7],fill:`#739eac`,fillPower:.55,warm:`#c6c8b1`,interiorPower:.12,exposure:.98,fogNear:24,fogFar:340,lamps:!1,windowGlow:.015,passingPower:.06,accentPower:0,glass:`#93b5b4`,drop:`#d1e3df`,glare:`#dbe9dc`,road:`#394e52`,roadLine:`#c1c7b5`},dawn:{skyTop:`#4a456d`,skyHorizon:`#c9b4ca`,skyBottom:`#8e94b1`,fog:`#a298b8`,sun:`#ffe2b5`,sunStrength:.27,field:`#526b65`,leaf:`#2e414d`,hill:`#7d809d`,house:`#b5a3a7`,roof:`#62586f`,ambient:`#b6b2d6`,ground:`#414759`,ambientPower:1.15,key:`#ffe0b0`,keyPower:2.6,keyPosition:[11,1.4,-5],fill:`#8fa3cd`,fillPower:1,warm:`#e3bc9a`,interiorPower:.16,exposure:1,fogNear:14,fogFar:300,lamps:!1,windowGlow:.1,passingPower:.18,accentPower:0,glass:`#b4a9cd`,drop:`#e0d9ee`,glare:`#ffe0ad`,road:`#4c4f66`,roadLine:`#c3bbc6`},sodiumFog:{skyTop:`#292d2b`,skyHorizon:`#99845a`,skyBottom:`#77735b`,fog:`#96825a`,sun:`#ffd079`,sunStrength:0,field:`#4b503e`,leaf:`#303a31`,hill:`#6b7159`,house:`#99815a`,roof:`#514735`,ambient:`#b6ac83`,ground:`#373c30`,ambientPower:.7,key:`#c8b47d`,keyPower:.95,keyPosition:[5,6,-4],fill:`#637a73`,fillPower:.45,warm:`#ffd390`,interiorPower:.23,exposure:.98,fogNear:2,fogFar:68,lamps:!0,windowGlow:.9,passingPower:7,accentPower:0,glass:`#b7a77b`,drop:`#e8d5aa`,glare:`#ffd16e`,road:`#474a3b`,roadLine:`#c8ba86`},neutral:{skyTop:`#7996a7`,skyHorizon:`#c5c9bf`,skyBottom:`#9caeaa`,fog:`#a7b4af`,sun:`#fff0cb`,sunStrength:.12,field:`#70816a`,leaf:`#3f584b`,hill:`#7d9690`,house:`#c4bba1`,roof:`#7b695d`,ambient:`#c4d5dc`,ground:`#5b544d`,ambientPower:1.55,key:`#fce2b8`,keyPower:2.3,keyPosition:[10,8,-4],fill:`#b4c9cf`,fillPower:.6,warm:`#e4caaa`,interiorPower:.25,exposure:1,fogNear:18,fogFar:420,lamps:!1,windowGlow:.03,passingPower:.1,accentPower:0,glass:`#b0a3ad`,drop:`#cfddd5`,glare:`#ffb18a`,road:`#41494c`,roadLine:`#aaa894`}},Nd=Tt.clamp,Pd=Tt.lerp,Fd=(e,t)=>(e%t+t)%t,Id=e=>{let t=Nd(e,0,1);return t*t*(3-2*t)},Ld=Object.freeze([{key:`night`,label:`Blue night`,description:`Dark blue silhouettes, cool glass and passing warm lamps.`},{key:`amberRain`,label:`Amber rain`,description:`Green-grey wet evening, close amber streetlights and muted houses.`},{key:`overcast`,label:`Slate countryside`,description:`Clouded daylight, green fields, cool slate road and a longer view.`},{key:`dawn`,label:`Lavender dawn`,description:`Low pale sun, lavender distance and a warm edge on the cabin.`},{key:`sodiumFog`,label:`Sodium fog`,description:`Short visibility, olive silhouettes and strong sodium-coloured lamps.`}].map(e=>Object.freeze(e)));function Rd(e,t,n){let r=(Math.imul(e,73244475)^t^n)>>>0;return r=Math.imul(r^r>>>16,2146121005),r=Math.imul(r^r>>>15,2221713035),((r^r>>>16)>>>0)/4294967295*2-1}function zd(e,t,n){let r=Math.floor(e),i=e-r,a=i*i*i*(i*(i*6-15)+10);return Pd(Rd(r,t,n),Rd(r+1,t,n),a)}function Bd(e={}){let t=Number.isFinite(e.time)?e.time:0,n=Number.isFinite(e.distance)?e.distance:0,r=Number.isFinite(e.speed)?Math.abs(e.speed):0,i=Number.isFinite(e.roadSeed)?e.roadSeed>>>0:7955506,a=e.reducedMotion||e.roadTexture===!1?0:Id(r/12),o=(e,t)=>zd(e,t,i),s=o(n/6.7+t*.035,6561),c=o(n/1.45,14731),l=o(n/.61,24909),u=o(n/10.3+t*.018,36129),d=o(n/147+t*.002,28956)*.006;return{active:a>0,seed:i,gain:a,position:[u*.0035*a,(s*.55+c*.32+l*.13)*.0055*a,s*.002*a].map(e=>e||0),rotation:[(s*.65+c*.35)*.0024*a,(d+u*.0015)*a,(u*.65+s*.35)*.003*a].map(e=>e||0),heading:d*a||0,bounds:{positionMetres:[.0035,.0055,.002],rotationRadians:[.0024,.0075,.003]},model:`Seeded smooth road and correlated suspension approximation; no physical vehicle simulation.`}}function Vd(e){let n=new cd({canvas:e,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});n.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.5)),n.outputColorSpace=Pe,n.toneMapping=4,n.shadowMap.enabled=!1,n.shadowMap.type=2;let r=new Nn,i=new Cn;i.name=`authored-to-physical-world`,i.scale.z=-1,r.add(i);let a=new Cn;a.name=`complete-car`,i.add(a);let o=new Cn;o.name=`world-depth`,i.add(o);let s=new _s(74,16/9,.025,1600);s.position.copy(Td(Dd));let c=`right`,l=`night`,u=1600,d=900,f={},p=7955506,m=()=>(p=Math.imul(p,1664525)+1013904223>>>0,p/4294967296),h=new Set,g=new Set,_=new Set,v=[],y=[],b=[],x=[];function S(e,t={}){let n=new ko({color:e,roughness:.88,...t});return h.add(n),n}function C(e,t={}){let n=new zr({color:e,...t});return h.add(n),n}function w(e,t={}){let n=S(Md.night[e],t);return v.push({m:n,key:e}),n}function T(e,t,n,r=a){g.add(e);let i=new Zr(e,t);return n&&i.position.set(...n),i.castShadow=!0,i.receiveShadow=!0,r.add(i),i}function E(e){for(let t=e;t;t=t.parent)if(t===o)return!0;return!1}function D(e,t,n,r=a,i=.015){return E(r)&&(i=0),T(i?new dd(...e,1,Math.min(i,...e.map(e=>e*.45))):new Ki(...e),n,t,r)}let O=new _o(1,12,8);g.add(O);let k=new _o(1,8,6);g.add(k);function A(e,t,n,r=a){let i=T(E(r)?k:O,n,t,r);return i.scale.set(...e),i}let j=new K(0,1,0);function M(e,t,n,r,i=a,o=n,s=10){let c=new K(...e),l=new K(...t),u=l.clone().sub(c),d=T(new Ji(o,n,u.length(),s),r,c.clone().add(l).multiplyScalar(.5).toArray(),i);return d.quaternion.setFromUnitVectors(j,u.normalize()),d}function N(e,t,n,r,i,o=a){M(e,t,n,i,o,r,12),A([n,n,n],e,i,o),A([r,r,r],t,i,o)}function P(){let e=document.createElement(`canvas`);e.width=e.height=128;let r=e.getContext(`2d`);r.fillStyle=`#b2b4af`,r.fillRect(0,0,128,128);for(let e=0;e<128;e+=2)for(let t=0;t<128;t+=2)r.fillStyle=(t+e)%4?`#bec0ba`:`#a6aba6`,r.fillRect(t,e,1,1);for(let e=3;e<128;e+=16)for(let t=4;t<128;t+=13)r.strokeStyle=(e/16|0)%2?`#818f8c`:`#95918c`,r.lineWidth=1,r.beginPath(),r.moveTo(t,e+4),r.lineTo(t+3,e),r.lineTo(t+7,e+4),r.stroke();let i=new Hi(e);return i.colorSpace=Pe,i.wrapS=i.wrapT=t,i.repeat.set(3,3),i.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),_.add(i),i}let F=P(),I=S(`#66747a`,{map:F,roughness:1}),ee=S(`#465359`,{roughness:1}),L=S(`#829090`,{roughness:1}),te=S(`#343d3d`,{roughness:.8}),ne=S(`#525a54`,{roughness:.86}),re=S(`#aba58d`,{roughness:1}),ie=S(`#111d22`,{roughness:.95}),ae=S(`#182229`),R=S(`#adb6ae`,{roughness:.31,metalness:.65}),z=S(`#546c71`,{roughness:.43,metalness:.3}),oe=S(`#c79c7d`,{roughness:.91}),se=S(`#b78b71`,{roughness:.9}),ce=S(`#cfae96`,{roughness:.75}),le=S(`#49372f`),ue=S(`#252b2c`),de=S(`#8c7d67`,{map:F}),fe=S(`#a96160`,{roughness:1}),pe=S(`#465970`,{map:F}),me=S(`#6c7468`),he=S(`#7b5667`),ge=C(`#ffe3a0`);D([1.72,.16,3.65],[0,.16,.1],ae,a,.06),D([1.67,.25,.85],[0,.48,1.65],z,a,.08),D([1.64,.22,.4],[0,.47,-1.62],z,a,.07),D([1.49,.075,2.65],[0,1.59,-.04],re,a,.08),D([1.37,.018,2.55],[0,1.546,-.04],re,a,.04),D([1.66,.15,.68],[0,.77,1.34],te,a,.035),D([1.59,.06,.55],[0,.875,1.34],ne,a,.04),D([.28,.31,1.45],[0,.35,.54],te,a,.045);for(let e of[-1,1]){D([.12,.57,2.67],[e*.84,.54,-.13],z,a,.035),D([.072,.49,1.43],[e*.785,.565,-.615],ne,a,.025),D([.047,.3,1.1],[e*.738,.605,-.65],I,a,.026),D([.14,.065,1.46],[e*.795,.83,-.62],ie,a,.014),D([.16,.016,1.4],[e*.775,.866,-.62],te,a,.006),D([.18,.071,.54],[e*.706,.655,-.48],te,a,.025),D([.17,.018,.52],[e*.697,.7,-.48],ne,a,.007),D([.035,.073,.18],[e*.723,.751,-.22],ie,a,.015),D([.023,.022,.115],[e*.699,.766,-.22],R,a,.007);let t=e*.714;M([t,.65,-.97],[t-e*.018,.604,-.88],.01,te),A([.014,.026,.026],[t-e*.024,.604,-.88],ie),A([.016,.029,.029],[t,.65,-.97],te),D([.055,.13,1.05],[e*.727,.37,-.61],ae,a,.015),D([.06,.045,1.04],[e*.702,.421,-.61],te,a,.012),D([.025,.15,.2],[e*.715,.37,-.2],ie,a,.025);for(let t=0;t<9;t++)D([.009,.004,.15],[e*.698,.319+t*.012,-.2],ne,a,0);M([e*.77,.88,-1.18],[e*.77,.93,-1.18],.006,ae),M([e*.84,.82,-1.39],[e*.73,1.55,-1.39],.068,re,a,.055),M([e*.84,.83,-.06],[e*.73,1.55,-.06],.052,re,a,.046),M([e*.84,.85,1.35],[e*.73,1.55,.97],.055,re,a,.05),M([e*.73,1.55,-1.4],[e*.73,1.55,.98],.044,re);for(let t of[Od.rear,Od.front])M([e*.86,.854,t],[e*.75,1.51,t],.013,ie);M([e*.75,1.511,Od.rear],[e*.75,1.511,Od.front],.015,ie),M([e*.861,.853,Od.rear],[e*.861,.853,Od.front],.012,ie),D([.075,.49,1.12],[e*.786,.565,.76],ne,a,.03),D([.14,.06,1.11],[e*.8,.84,.75],ie,a,.012),D([.15,.07,.36],[e*.704,.65,.67],te,a,.025),M([e*.72,1.26,-.06],[e*.55,.65,-.09],.018,ae),D([.28,.11,.13],[e*.855,1.04,1.14],z,a,.035),D([.25,.085,.019],[e*.855,1.04,1.065],R,a,.02);for(let t of[-1.14,1.37]){let n=T(new Ji(.295,.295,.16,20),ie,[e*.82,.22,t]);n.rotation.z=Math.PI/2;let r=T(new Ji(.17,.17,.164,16),R,[e*.82,.22,t]);r.rotation.z=Math.PI/2}}D([1.52,.09,.35],[0,.92,-1.49],te,a,.025),M([-.73,1.55,-1.4],[.73,1.55,-1.4],.045,re),M([-.84,.9,-1.57],[.84,.9,-1.57],.035,ae);for(let e of[-1,1])M([e*.64,1.51,-.45],[e*.64,1.48,-.45],.012,ne),M([e*.64,1.48,-.45],[e*.64,1.48,-.75],.014,re),M([e*.64,1.48,-.75],[e*.64,1.51,-.75],.012,ne);D([.18,.026,.12],[0,1.535,.26],te,a,.025),D([.11,.012,.07],[0,1.514,.26],S(`#d8c69c`,{emissive:`#d7aa76`,emissiveIntensity:.12}),a,.018),D([.25,.12,.035],[0,1.39,1.04],ae,a,.025),D([.22,.085,.015],[0,1.393,1.016],R,a,.015),M([0,1.46,1.05],[0,1.55,1],.012,ae),D([.3,.12,.075],[0,.8,1.032],ae,a,.014),D([.16,.028,.01],[0,.81,.989],C(`#779382`),a,.003);for(let e of[-.62,-.24,.24,.62]){D([.14,.065,.02],[e,.83,1.035],ie,a,.005);for(let t=0;t<4;t++)D([.115,.003,.006],[e,.81+t*.012,1.02],ne,a,0)}D([.37,.13,.12],[-.43,.89,1.1],te,a,.028),M([0,.35,.66],[0,.56,.66],.016,ae),A([.036,.043,.032],[0,.57,.66],ae);let _e=T(new vo(.17,.018,10,32),ae,[-.43,.94,1]);_e.name=`steering-wheel`,_e.rotation.x=-.45,M([-.43,.79,.98],[-.43,1.06,1.05],.012,te),M([-.57,.95,1],[-.29,.95,1],.012,te);function ve(e){let t=new Cn;t.name=e>0?`front-passenger-seat`:`driver-seat`,a.add(t),D([.61,.16,.65],[e,.48,.48],ee,t,.065),D([.45,.07,.54],[e,.58,.49],I,t,.045);let n=new Cn;n.position.set(e,.56,.12),n.rotation.x=-.105,t.add(n),D([.61,.63,.15],[0,.315,0],ee,n,.065),D([.43,.51,.075],[0,.32,-.087],I,n,.045);for(let e of[-1,1])D([.065,.53,.065],[e*.24,.31,-.05],ee,n,.028),M([e*.13,.6,0],[e*.13,.73,0],.009,R,n);return D([.34,.17,.14],[0,.72,0],I,n,.05),D([.37,.19,.025],[0,.17,-.095],ee,n,.02),M([-.18,.25,-.112],[.18,.25,-.112],.0025,L,n),M([-.22,.61,-.11],[-.22,.1,-.11],.002,L,n),M([.22,.61,-.11],[.22,.1,-.11],.002,L,n),t}let ye=[ve(-.43),ve(.43)],be=new Cn;be.name=`rear-bench`,a.add(be),D([1.43,.2,.67],[0,.43,-.97],ee,be,.07),D([1.36,.065,.55],[0,.56,-.94],I,be,.045),D([1.43,.49,.16],[0,.77,-1.28],I,be,.065);for(let e of[-.43,.43])D([.47,.4,.07],[e,.79,-1.17],ee,be,.04),D([.34,.17,.14],[e,1.08,-1.3],I,be,.05),D([.043,.06,.07],[e>0?.12:-.12,.61,-.73],ae,be,.01),D([.03,.015,.038],[e>0?.12:-.12,.648,-.73],S(`#9c3d40`),be,.005);M([-.23,.58,-.95],[-.23,.58,-.69],.002,L,be),M([.23,.58,-.95],[.23,.58,-.69],.002,L,be);function xe(e,t,n,r){A([t*.74,t,t*.78],e,se,r),A([t*.78,t*.62,t*.81],[e[0],e[1]+t*.48,e[2]-t*.04],n,r),A([t*.17,t*.24,t*.11],[e[0],e[1]-.003,e[2]+t*.78],se,r);for(let n of[-1,1])A([t*.13,t*.25,t*.11],[e[0]+n*t*.74,e[1]-t*.08,e[2]],se,r)}function Se(e,t,n=!1,r=1){let i=new Cn;i.position.set(...e),i.scale.setScalar(r),t.add(i),A([.034,.045,.02],[0,0,0],oe,i);for(let e=0;e<4;e++){let t=-.025+e*.016,r=.026-Math.abs(e-1.4)*.002;n&&e===1?(N([t,r,0],[t,r+.055,-.004],.009,.008,oe,i),N([t,r+.055,-.004],[t,r+.088,-.01],.008,.006,oe,i),A([.004,.008,.001],[t,r+.079,.001],ce,i)):(N([t,r,0],[t,r+.022,.013],.009,.008,oe,i),N([t,r+.022,.013],[t,r+.007,.027],.008,.007,oe,i))}return N([.026,-.02,.004],[.044,.003,.016],.013,.009,oe,i),i}let Ce=new Cn;Ce.name=`parents`,a.add(Ce);for(let e of[-.43,.43]){let t=e<0?me:he;A([.21,.31,.13],[e,.99,.43],t,Ce),M([e,1.19,.43],[e,1.31,.43],.048,se,Ce),xe([e,1.43,.46],.126,e<0?ue:le,Ce);for(let t of[-1,1])N([e+t*.11,.62,.48],[e+t*.12,.57,.94],.085,.06,pe,Ce),N([e+t*.12,.57,.94],[e+t*.12,.27,1.14],.06,.047,pe,Ce),A([.067,.045,.13],[e+t*.12,.235,1.18],ae,Ce);if(e<0)for(let n of[-1,1])N([e+n*.18,1.16,.47],[e+n*.23,.97,.74],.065,.055,t,Ce),N([e+n*.23,.97,.74],[e+n*.13,1,.97],.055,.03,se,Ce),A([.037,.031,.036],[e+n*.13,1,.97],se,Ce);else N([e-.18,1.15,.47],[e-.21,.82,.58],.065,.047,t,Ce),N([e-.21,.82,.58],[e-.07,.67,.76],.047,.028,se,Ce),Se([e-.07,.67,.76],Ce,!1,.85).rotation.x=Math.PI/2}let we=new Cn;we.position.set(.23,1.16,.47),Ce.add(we),N([0,0,0],[-.15,-.04,.23],.062,.048,he,we);let Te=new Cn;Te.position.set(-.15,-.04,.23),we.add(Te),N([0,0,0],[.07,.26,-.2],.044,.028,se,Te);let Ee=Se([.07,.26,-.2],Te,!1,.9);Ee.rotation.z=-.35,M([.07,.3,-.17],[.16,.3,-.17],.003,S(`#ded2b8`),Te,.003,8);let De=A([.0035,.0035,.0035],[.164,.3,-.17],C(`#ff8b55`),Te),Oe=new Map,B=new Map;function ke(e,t){let n=new Cn;return n.name=e,t.add(n),Oe.set(e,n),n}function Ae(e,t,n){let r=new Cn;r.name=e>0?`player-body`:`brother`,a.add(r);let i=ke(`${r.name}-torso`,r),o=ke(`${r.name}-legs`,r);A([.15,.215,.11],[e,.81,-.92],t,i),A([.145,.085,.125],[e,.61,-.89],pe,o);for(let t of[-1,1])N([e+t*.072,.62,-.89],[e+t*.085,.61,-.51],.055,.044,pe,o),N([e+t*.085,.61,-.51],[e+t*.085,.31,-.48],.044,.03,pe,o),A([.047,.037,.09],[e+t*.085,.28,-.425],S(`#6d655a`),o);return n&&(M([e,.96,-.92],[e,1.04,-.92],.032,oe,r),xe([e,1.12,-.91],.102,le,r)),N([e-.12,.94,-.91],[e-.18,.73,-.79],.045,.035,t,r),N([e-.18,.73,-.79],[e-.02,.65,-.65],.035,.023,oe,r),Se([e-.02,.65,-.65],r,!1,.72).rotation.x=1.3,r}let je=Ae(.43,de,!1);Oe.get(`player-body-torso`).visible=!1;let V=Ae(-.43,fe,!0);N([-.31,.94,-.91],[-.21,.73,-.79],.045,.034,fe,V);let Me=new Cn;Me.position.set(-.21,.73,-.79),V.add(Me),N([0,0,0],[.16,.03,.12],.032,.022,oe,Me);let H=Se([.16,.03,.12],Me,!0,.76);H.rotation.z=-.8;let Ne=ke(`player-right-upper-arm`,je);N([.55,.94,-.91],[.62,.69,-.83],.045,.038,de,Ne);let Fe=new Cn;Fe.position.set(.62,.69,-.83),je.add(Fe),N([0,0,0],[.063,.18,.18],.037,.025,de,Fe),N([.063,.18,.18],[.075,.225,.21],.024,.022,oe,Fe);let Ie=Se([.075,.255,.21],Fe,!0,.86);Ie.rotation.z=-.16,Ie.rotation.x=-.1;let Le=new K(-Ad,-(Od.bottomX-Od.topX),0).normalize(),Re=new K(-(Od.bottomX-Od.topX),Ad,0).normalize(),ze=new Et().setFromRotationMatrix(new J().makeBasis(new K(0,0,-1),Re,Le.clone().negate()));function Ve(e,t,n=0){return new K(Pd(Od.topX,Od.bottomX,t),Pd(Od.top,Od.bottom,t),Pd(Od.front,Od.rear,e)).addScaledVector(Le,n)}let He=Cd(a,de,oe,g,h),Ue=wd(a,fe,oe,le,g,h),We=[Ve(0,0),Ve(1,0),Ve(1,1),Ve(0,1)],Ge=new jr().setFromNormalAndCoplanarPoint(Le,Td(We[0])),Ke=new Dr;Ke.setAttribute(`position`,new hr([0,0,0,1,0,0,1,1,0,0,1,0].flatMap((e,t,n)=>t%3?[]:Ve(n[t],n[t+1]).toArray()),3)),Ke.setIndex([0,1,2,0,2,3]),Ke.computeVertexNormals(),g.add(Ke);let qe=C(`#8ea6b0`,{transparent:!0,opacity:.045,side:2,depthWrite:!1}),Je=T(Ke,qe,[0,0,0]);Je.castShadow=!1,Je.receiveShadow=!1,Je.renderOrder=2;let U=Je.clone();U.geometry=Ke.clone(),U.scale.x=-1,U.material=qe,g.add(U.geometry),a.add(U);let W=new Cn;W.name=`drops-on-inclined-glass`,a.add(W);let Ye=S(`#b9d9d5`,{transparent:!0,opacity:.82,roughness:.16,metalness:.32,depthWrite:!1}),Xe=C(`#243e4c`,{transparent:!0,opacity:.73,depthWrite:!1}),Ze=C(`#f3f1da`,{transparent:!0,opacity:.89,depthWrite:!1}),Qe=C(`#ffe9b6`,{side:2,depthTest:!0}),$e=C(`#ffabc3`,{side:2,depthTest:!0}),et=C(`#e8e6ce`,{transparent:!0,opacity:.62,side:2,depthWrite:!1});function tt(e){let t=new Ta;if(e===`star`)for(let e=0;e<10;e++){let n=Math.PI/2+e*Math.PI/5,r=e%2?.44:1,i=Math.cos(n)*r,a=Math.sin(n)*r;e?t.lineTo(i,a):t.moveTo(i,a)}else t.moveTo(0,-.83),t.bezierCurveTo(-1.65,.22,-.72,1.25,0,.53),t.bezierCurveTo(.72,1.25,1.65,.22,0,-.83);t.closePath();let n=new ho(t,12);return g.add(n),n}let nt=tt(`star`),rt=tt(`heart`),it=new mo(.78,1,28);g.add(it);let at=Array.from({length:180},(e,t)=>t);function ot(e,t){let n=new Ci(e,t,at.length);return n.count=0,n.instanceMatrix.setUsage(Be),n.frustumCulled=!1,n.renderOrder=4,W.add(n),n}let st=ot(k,Xe),ct=ot(k,Ye),lt=ot(k,Ze),ut=ot(nt,Qe),dt=ot(rt,$e),ft=ot(it,et),pt=new qi(1,20);g.add(pt);let mt={};for(let[e,t,n]of[[`smudge`,.14,256],[`speck`,.27,1024],[`sticker`,.87,16],[`creature`,.9,32]]){let r=new zr({color:`#ffffff`,transparent:!0,opacity:t,depthWrite:e===`sticker`||e===`creature`,toneMapped:!1,side:2});h.add(r);let i=new Ci(pt,r,n);i.count=0,i.frustumCulled=!1,i.renderOrder=2,i.instanceMatrix.setUsage(Be),W.add(i),mt[e]={batch:i,capacity:n}}let ht=new An,gt=new J,_t=new K;function vt(e,t,n,r,i,a=r){_t.set(r,i,a),gt.compose(n,ze,_t),e.setMatrixAt(t,gt)}let yt=new Float32Array(6e4),bt=new Dr;bt.setAttribute(`position`,new fr(yt,3)),bt.setDrawRange(0,0),g.add(bt);let xt=new Oi({color:`#c3d2cd`,transparent:!0,opacity:.26,depthWrite:!1});h.add(xt);let St=new Bi(bt,xt);St.frustumCulled=!1,St.renderOrder=3,W.add(St);let Ct=[];for(let e=0;e<20;e++)Ct.push(...Ve(.95,.06+e*.044,.008).toArray(),...Ve(.95,.079+e*.044,.008).toArray());let wt=new Dr().setAttribute(`position`,new hr(Ct,3));g.add(wt);let Tt=new Oi({color:`#ffe7aa`,transparent:!0,opacity:.62,depthWrite:!1});h.add(Tt);let Dt=new Bi(wt,Tt);Dt.renderOrder=3,W.add(Dt);let Ot=new Do({side:1,depthWrite:!1,uniforms:{topColor:{value:new An},horizonColor:{value:new An},bottomColor:{value:new An},sunColor:{value:new An},sunStrength:{value:1},sunDirection:{value:new K(1,.11,.32).normalize()}},vertexShader:`varying vec3 d; void main(){d=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 d; uniform vec3 topColor,horizonColor,bottomColor,sunColor,sunDirection; uniform float sunStrength;
      void main(){vec3 v=normalize(d); float h=clamp(v.y*2.5,0.,1.); vec3 c=mix(horizonColor,topColor,pow(h,.66));
      c=mix(c,bottomColor,1.-smoothstep(-.15,0.,v.y)); float sun=dot(v,sunDirection); c+=sunColor*sunStrength*(smoothstep(.99945,.99965,sun)*1.7+pow(max(sun,0.),160.)*.35);
      float cloud=sin(v.z*35.+v.y*17.)*.5+.5; c+=vec3(.035,.012,.022)*(1.-smoothstep(.01,.10,abs(v.y-.16)))*cloud; gl_FragColor=vec4(c,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});h.add(Ot);let q=T(new _o(1100,32,16),Ot,[0,0,0],o);q.castShadow=!1,q.receiveShadow=!1;let kt=new as;i.add(kt);let At=new Ss;At.castShadow=!0,At.shadow.mapSize.set(1024,1024),At.shadow.camera.left=-2.2,At.shadow.camera.right=2.2,At.shadow.camera.top=2.8,At.shadow.camera.bottom=-2.5,At.shadow.camera.near=.1,At.shadow.camera.far=30,At.shadow.bias=-25e-5,At.shadow.normalBias=.015,i.add(At);let jt=new Ss;jt.position.set(-4,1,1),i.add(jt);let Mt=new ys(`#ffc88b`,.35,3,1.3);Mt.position.set(-.2,1.49,-.4),i.add(Mt);let Nt=new ys(`#ffd08a`,0,9,1.3);Nt.position.set(2.2,2.8,0),i.add(Nt);let Pt=new ys(`#e464a9`,0,7,1.2);Pt.position.set(2.5,1.4,-.7),i.add(Pt);let Ft=w(`field`),It=w(`leaf`),Lt=w(`hill`,{roughness:1}),Rt=w(`house`),zt=w(`roof`),Bt=S(`#41494c`,{roughness:.55}),Vt=S(`#aaa894`),Ht=S(`#4c4b45`),Ut=S(`#7a8177`),Wt=S(`#344b50`,{emissive:`#ffc573`,emissiveIntensity:.18,roughness:.3});D([1e3,.08,2600],[0,-.16,0],Ft,o,0),D([7,.025,260],[0,-.1,0],Bt,o,0);for(let e of[-3.25,3.25])D([.1,.018,260],[e,-.077,0],Vt,o,0);let Gt=new Cn;o.add(Gt);for(let e=0;e<34;e++)D([.1,.012,2.4],[-.6,-.077,-98+e*6],Vt,Gt,0);y.push({group:Gt,base:0,span:6,tile:!0});for(let e=0;e<80;e++){let t=new Cn;t.position.set(4.35,0,e*2.3-92),o.add(t),y.push({group:t,base:t.position.z,span:184}),D([.07,.65,.08],[0,.24,0],Ut,t,.005),D([.045,.07,2.32],[0,.32,1.15],Ut,t,.005),D([.045,.07,2.32],[0,.08,1.15],Ut,t,.005)}for(let e=0;e<74;e++){let t=new Cn;t.position.set(7+m()*11,-.1,e*3.5-120),o.add(t),y.push({group:t,base:t.position.z,span:259});let n=2.7+m()*4.1;if(M([0,0,0],[0,n*.76,0],.09,Ht,t,.045,7),e%4==0)A([.45,n*.44,.45],[0,n*.58,0],It,t),A([.35,n*.28,.36],[.05,n*.78,.03],It,t);else for(let e=0;e<4;e++){let r=e*Math.PI*2/4+m()*.3,i=[Math.cos(r)*.43,n*(.64+m()*.18),Math.sin(r)*.45];M([0,n*.44,0],i,.035,Ht,t,.018,6),A([.75+m()*.4,n*.26,.7+m()*.35],i,It,t)}}for(let e=0;e<21;e++){let t=new Cn;t.position.set(25+m()*26,-.12,e*20-195),o.add(t),y.push({group:t,base:t.position.z,span:420});let n=4+m()*3,r=4+m()*3,i=3+m()*3;D([n,i,r],[0,i/2,0],Rt,t,.05);let a=new Ta;a.moveTo(-n/2-.3,i),a.lineTo(0,i+1.4),a.lineTo(n/2+.3,i),a.closePath(),T(new lo(a,{depth:r+.5,bevelEnabled:!1}),zt,[0,0,-r/2-.25],t);for(let e=0;e<Math.floor(i/1.5);e++)for(let i=0;i<3;i++){let a=-.31*r+i*r*.31,o=1+e*1.5;D([.035,.75,.55],[-n/2-.025,o,a],Wt,t,.004);for(let e of[-1,1])D([.05,.76,.2],[-n/2-.05,o,a+e*.42],zt,t,.003)}D([.53,1.6,.54],[n*.26,i+.9,0],Rt,t,.02),e%3==0&&x.push(D([.041,.9,.7],[-n/2-.04,.95,.8],C(`#efbe79`),t,.004))}for(let e=0;e<17;e++){let t=new Cn;t.position.set(6.1,-.1,e*18-144),o.add(t),y.push({group:t,base:t.position.z,span:306}),M([0,0,0],[0,5.3,0],.055,Ht,t,.035,8),M([0,5.25,0],[-1.5,5.48,0],.035,Ht,t),D([.52,.15,.28],[-1.5,5.42,0],te,t,.04);let n=D([.4,.025,.19],[-1.5,5.33,0],ge,t,.02);b.push(n)}for(let e=0;e<11;e++){let t=new Cn;t.position.set(170+e%3*38,-.15,e*115-570),o.add(t),y.push({group:t,base:t.position.z,span:1265});let n=15+m()*22;A([80+m()*35,n,85+m()*50],[0,-n*.35,0],Lt,t)}let Kt=new Do({transparent:!0,depthWrite:!1,side:2,uniforms:{opacity:{value:0},time:{value:0}},vertexShader:`varying vec2 st; void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 st; uniform float opacity,time;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
      void main(){vec2 p=st-.5; float curl=sin(p.y*12.+time)*.06+sin(p.y*23.-time*.7)*.025;
        p.x+=curl;float a=exp(-(p.x*p.x*28.+p.y*p.y*7.));
        float n=noise(vec2(p.x*17.+time*.11,p.y*12.-time*.23));
        n=.55*n+.30*noise(p*31.-vec2(time*.15,time*.07))+.15*noise(p*61.);
        a*=smoothstep(0.,.13,st.y)*(1.-smoothstep(.76,1.,st.y));
        a*=1.-smoothstep(.34,.5,abs(st.x-.5));
        gl_FragColor=vec4(.68,.74,.79,a*smoothstep(.15,.78,n)*opacity);}`});h.add(Kt);let qt=[];for(let e=0;e<6;e++){let e=T(new po(.48,.6),Kt,[0,0,0]);e.castShadow=!1,e.renderOrder=7,qt.push(e)}let Jt=new Do({transparent:!0,depthWrite:!1,side:2,uniforms:{opacity:{value:0},tint:{value:new An(`#ffbd80`)}},vertexShader:`varying vec2 st; void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 st;uniform float opacity;uniform vec3 tint;void main(){vec2 p=st-.5;float core=exp(-dot(p,p)*52.);float streak=exp(-p.x*p.x*145.-p.y*p.y*7.);float halo=exp(-dot(p,p)*14.);gl_FragColor=vec4(tint,min(.94,core*.57+streak*.25+halo*.16)*opacity);}`});h.add(Jt);let Yt=T(new po(.48,.5),Jt,Ve(.36,.35,.009).toArray());Yt.quaternion.copy(ze),Yt.castShadow=!1,Yt.renderOrder=6;function Xt(e,t=new Set){r.updateMatrixWorld(!0);let n=e.matrixWorld.clone().invert(),i=new Map,a=[];function o(r){if(!(r!==e&&t.has(r))){if(r.isMesh&&!r.material.transparent&&!b.includes(r)&&!x.includes(r)){let e=r.material.id;i.has(e)||i.set(e,{material:r.material,geometries:[]});let t=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();t.applyMatrix4(n.clone().multiply(r.matrixWorld)),i.get(e).geometries.push(t),a.push(r)}for(let e of[...r.children])o(e)}}o(e);for(let t of i.values()){let n=fd(t.geometries,!1);if(n){g.add(n);let r=new Zr(n,t.material);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}t.geometries.forEach(e=>e.dispose())}for(let e of a)e.removeFromParent()}for(let e of y)Xt(e.group);Xt(Ce,new Set([Te])),Xt(Te,new Set([De])),Xt(He.fist),Xt(je,new Set([Fe,...Oe.values()])),Xt(Fe);for(let e of Oe.values())Xt(e);Xt(V,new Set([Me,...Oe.values()])),Xt(Me),Xt(be);for(let e of ye)Xt(e);Xt(a,new Set([Ce,je,V,be,W,_e,He.root,Ue.root,...ye]));function Zt(e){c=Object.hasOwn(jd,e)?e:`right`,$t(f)}function Qt(e){l=Object.hasOwn(Md,e)?e:`night`;let t=Md[l];r.fog=new Mn(t.fog,t.fogNear,t.fogFar),r.background=new An(t.skyHorizon);for(let{m:e,key:n}of v)e.color.set(t[n]);let i=Ot.uniforms;i.topColor.value.set(t.skyTop),i.horizonColor.value.set(t.skyHorizon),i.bottomColor.value.set(t.skyBottom),i.sunColor.value.set(t.sun),i.sunStrength.value=t.sunStrength,kt.color.set(t.ambient),kt.groundColor.set(t.ground),kt.intensity=t.ambientPower,At.color.set(t.key),At.intensity=t.keyPower,At.position.set(...t.keyPosition),jt.color.set(t.fill),jt.intensity=t.fillPower,Mt.color.set(t.warm),Mt.intensity=t.interiorPower,n.toneMappingExposure=t.exposure,Wt.emissiveIntensity=t.windowGlow,b.forEach(e=>{e.visible=t.lamps}),x.forEach(e=>{e.visible=t.lamps}),Nt.color.set(t.glare),Pt.color.set(t.fill),Bt.color.set(t.road),Vt.color.set(t.roadLine),qe.color.set(t.glass),Ye.color.set(t.drop),Jt.uniforms.tint.value.set(t.glare)}function $t(e={}){s.position.copy(Td(Dd));let t=Td(jd[c]);s.fov!==Ed[c]&&(s.fov=Ed[c],s.updateProjectionMatrix()),s.up.set(0,1,0);let n=Number.isFinite(e.eventAge)?e.eventAge:100;if(!e.reducedMotion&&n>=0){if(e.event===`bump`&&n<.72){let e=(1-n/.72)**2,r=Math.sin(n*Math.PI*9);s.position.y+=r*.023*e,t.y+=r*.011*e,s.up.x=Math.sin(n*22)*.015*e}else if(e.event===`brake`&&n<1.4){let e=Math.sin(Math.PI*n/1.4)**2;s.position.z-=.065*e,s.position.y-=.018*e,t.y-=.03*e}}let r=Bd(e);s.position.add(new K(...r.position)),t.add(new K(...r.position)),s.lookAt(t),s.rotateX(r.rotation[0]),s.rotateY(r.rotation[1]),s.rotateZ(r.rotation[2]),s.updateMatrixWorld()}function en(e={}){f=e,$t(e);let t=Number.isFinite(e.time)?e.time:0,i=Number.isFinite(e.distance)?e.distance:0,a=Nd(Number(e.previewGain)||1,1,3),o=Md[l];for(let e of y)e.group.position.z=e.tile?-Fd(i,e.span):Fd(e.base-i+e.span/2,e.span)-e.span/2;let u=Fd(i+4,18)/18,d=Math.exp(-(((u-.5)/.13)**2)),p=e.softLights?.18:1;Nt.intensity=o.passingPower*d*p*a,Nt.position.z=8-u*16,Pt.intensity=o.accentPower*(.28+.72*Math.exp(-(((Fd(i,49)-20)/6)**2)))*p*a,Fe.rotation.z=-.22*(1-Id(e.playerGesture??0)),Fe.rotation.x=.45*(1-Id(e.playerGesture??0)),je.visible=c===`down`,Fe.visible=!1,Ne.visible=!1;let m=e.playerKnock,h=e.playerGesture>0?(1-e.playerGesture)*.72:1/0;He.render(s,Ve(m?.u??.55,m?.v??.45),Le,[`right`,`side`,`down`].includes(c)?m?m.age:h:1/0),Me.rotation.x=-.65*Id(e.brotherGesture??0),Me.rotation.z=.25*Id(e.brotherGesture??0),H.rotation.z=-.8+.45*Id(e.brotherGesture??0),V.visible=!1;let g=e.rivalKnock,_=g&&g.age<.9?g:e.rivalWindup;Ue.render(s,Ve(_?.u??.55,_?.v??.45),Le,_?.age??1/0,t);let v=e.phase===`parents`||c===`parents`?Id(t<2?t/2:t<5?1:Math.max(0,(7-t)/2)):0;Te.rotation.x=Pd(-1.1,0,v),Te.rotation.z=0,De.visible=!!e.smoke;for(let n=0;n<qt.length;n++){let r=qt[n],i=Fd(t*.13+n/6,1);r.visible=!!e.smoke,r.position.set(.26+i*(n%2?.32:-.38)+Math.sin(n*2+t*.22)*.035,1.36+i*.075,.6-i*1.5),r.quaternion.set(-s.quaternion.x,-s.quaternion.y,s.quaternion.z,s.quaternion.w);let a=.42+i*.85;r.scale.set(a,Math.min(a,(1.525-r.position.y)/.3),a)}Kt.uniforms.opacity.value=e.smoke?Math.min(.82,.43*a):0,Kt.uniforms.time.value=t*.4,Yt.visible=!!e.glare,Yt.position.copy(Ve(.24+u*.55,.28,.012)),Jt.uniforms.opacity.value=e.glare?Math.min(.94,.82*a)*p*d:0;let b=Array.isArray(e.drops)?e.drops:[];for(let{batch:e}of Object.values(mt))e.count=0;for(let t of e.glassMarks||[]){let e=mt[t.kind];if(!e||e.batch.count>=e.capacity)continue;let n=e.batch.count++;vt(e.batch,n,Ve(t.u,t.v,.001),t.ru*kd,t.rv*Math.hypot(Ad,Od.bottomX-Od.topX),.001),e.batch.setColorAt(n,ht.set(t.color))}for(let{batch:e}of Object.values(mt))e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0);let x=0,S=0,C=0,w=0,T=Math.min(at.length,b.length);st.count=ct.count=lt.count=T;for(let e=0;e<at.length;e++){let t=b[e];if(!t)continue;let n=Number.isFinite(t.x)?t.x:.5,r=Number.isFinite(t.y)?t.y:.5,i=Math.max(.0014,Math.min(.035,Number(t.radius)||.004)*kd),a=Ve(n,r,.007),o=1+(Number(t.shiver)||0);vt(st,e,a,i*1.17,i*1.55,i*.18),vt(ct,e,a.clone().addScaledVector(Le,.002),i*o,i*1.32/o,i*.45);let s=a.clone().addScaledVector(Re,i*.55).addScaledVector(new K(0,0,-1),-i*.27).addScaledVector(Le,.0035);if(vt(lt,e,s,i*.24,i*.3,i*.15),t.owner===`player`||t.owner===`rival`){let e=a.clone().addScaledVector(Re,i*2.2+.012).addScaledVector(Le,.005),n=Math.max(.008,i*1.5);t.owner===`player`?vt(ut,S++,e,n,n):vt(dt,C++,e,n,n)}if(t.owner===`candidate`){let e=Math.max(.008,i*2.2);vt(ft,w++,a.clone().addScaledVector(Le,.005),e,e)}let c=Array.isArray(t.trail)?t.trail:[];for(let e=1;e<c.length&&x+2<=2e4;e++){let t=Ve(c[e-1][0],c[e-1][1],.006),n=Ve(c[e][0],c[e][1],.006);t.toArray(yt,x++*3),n.toArray(yt,x++*3)}c.length&&x+2<=2e4&&(Ve(c.at(-1)[0],c.at(-1)[1],.006).toArray(yt,x++*3),Ve(n,r,.006).toArray(yt,x++*3))}ut.count=S,dt.count=C,ft.count=w;for(let e of[st,ct,lt,ut,dt,ft])e.instanceMatrix.needsUpdate=!0;bt.attributes.position.needsUpdate=!0,bt.setDrawRange(0,x),Dt.visible=(e.finish??0)>0,Tt.opacity=.58*Nd(e.finish??0,0,1),$t(e),n.render(r,s)}let tn=new Bs,nn=[];a.traverse(e=>{if(e.isMesh&&!e.material?.transparent){for(let t=e;t;t=t.parent)if(t===W||t===He.root||t===Ue.root)return;nn.push(e)}});function rn(e,t){if(!Number.isFinite(e)||!Number.isFinite(t)||e<0||e>1||t<0||t>1)return!1;let n=Td(Ve(e,t)),r=n.clone().sub(s.position),i=n.clone().project(s);if(Math.abs(i.x)>1||Math.abs(i.y)>1||i.z<-1||i.z>1)return!1;let a=r.length();tn.set(s.position,r.normalize()),tn.far=Math.max(0,a-.004);let o=nn.filter(e=>{for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}),c=tn.intersectObjects(o,!1).length>0;return tn.far=1/0,!c}function an(t,n){let r=e.getBoundingClientRect();if(!r.width||!r.height)return null;tn.setFromCamera(new G((t-r.left)/r.width*2-1,1-(n-r.top)/r.height*2),s);let i=new K;if(!tn.ray.intersectPlane(Ge,i))return null;let a=(Od.front+i.z)/kd,o=(Od.top-i.y)/Ad;return a<0||a>1||o<0||o>1||!rn(a,o)?null:{u:a,v:o}}function on(e,t){let n=Td(Ve(e,t)).project(s);return{x:(n.x+1)*u/2,y:(1-n.y)*d/2,visible:n.z>-1&&n.z<1&&Math.abs(n.x)<=1&&Math.abs(n.y)<=1}}function sn(t,r){u=Math.max(1,Number(t)||e.clientWidth||1600),d=Math.max(1,Number(r)||e.clientHeight||900),n.setSize(u,d,!1),s.aspect=u/d,s.updateProjectionMatrix(),$t(f)}function cn(){let e=e=>e.toArray().map(e=>Math.round(e*1e4)/1e4),t=[];for(let n of[a,be,Ce,je,V]){let r=new Jn().setFromObject(n);t.push({name:n.name,min:e(r.min),max:e(r.max)})}let i=0,o=0;return r.traverse(e=>{e.isMesh&&(i++,o+=e.geometry.index?e.geometry.index.count/3:e.geometry.attributes.position.count/3)}),{axes:{x:`right`,y:`up`,z:`rearward`},forward:[0,0,-1],right:[1,0,0],up:[0,1,0],units:`metres`,dimensions:{width:1.8,length:4.05,floorHeight:.24,roofHeight:1.63,rearSeatHeight:.59,frontSeatZ:-.48,rearSeatZ:.94},eyes:e(Td(Dd)),fov:s.fov,fovByView:{...Ed},view:c,mood:l,target:e(Td(jd[c])),motion:Bd(f),moodOptions:Ld.map(e=>({...e})),moodSettings:{...Md[l],keyPosition:[...Md[l].keyPosition]},effects:{previewGain:Nd(Number(f.previewGain)||1,1,3),glareOpacity:Jt.uniforms.opacity.value,smokeOpacity:Kt.uniforms.opacity.value,passingLightPower:Nt.intensity,reducedMotion:!!f.reducedMotion},steeringWheel:e(_e.getWorldPosition(new K)),physicalLandmarks:{steeringWheel:e(_e.getWorldPosition(new K)),frontSeats:ye.map(t=>({name:t.name,center:e(new Jn().setFromObject(t).getCenter(new K))})),rearBench:e(new Jn().setFromObject(be).getCenter(new K)),sampleFencePost:e(y[2].group.getWorldPosition(new K)),passingLight:e(Nt.getWorldPosition(new K)),keyLight:e(At.getWorldPosition(new K))},camera:{position:e(s.position),forward:e(s.getWorldDirection(new K)),screenRight:e(new K().setFromMatrixColumn(s.matrixWorld,0)),up:e(new K().setFromMatrixColumn(s.matrixWorld,1))},gestures:{player:He.info(),rival:Ue.info(),seatedPlayerVisible:je.visible},parts:Object.fromEntries([...Oe].map(([t,n])=>[t,{visible:n.visible,center:e(new Jn().setFromObject(n).getCenter(new K))}])),targets:Object.fromEntries(Object.entries(jd).map(([t,n])=>[t,e(Td(n))])),window:{...Od,front:-Od.front,rear:-Od.rear,width:kd,height:Ad,u:`0 front, 1 rear`,v:`0 top, 1 sill`,corners:We.map(t=>e(Td(t)))},corners:We.map(t=>e(Td(t))),windowCorners:We.map(t=>e(Td(t))),frontSeats:[-.43,.43].map(e=>({center:[e,.59,-.48],size:[.61,.92,.73]})),rearSeats:[-.43,.43].map(e=>({center:[e,.59,.94],size:[.61,.56,.67]})),rearBench:{center:[0,.59,.94],size:[1.43,.56,.67]},carBounds:{min:[-.92,-.075,-2.075],max:[.92,1.63,1.82]},triangles:n.info.render.triangles,drawCalls:n.info.render.calls,seats:[{name:`driver`,x:-.43,y:.59,z:-.48},{name:`front-passenger`,x:.43,y:.59,z:-.48},{name:`brother`,x:-.43,y:.59,z:.94},{name:`player`,x:.43,y:.59,z:.94}],counts:{meshes:i,triangles:o,drops:at.length,trees:74,houses:21,lamps:17,smokePlanes:qt.length,proposalMoods:Ld.length},bounds:t,render:{calls:n.info.render.calls,triangles:n.info.render.triangles}}}function ln(e,t){let n=Oe.get(e);return n?(B.set(e,!!t),n.visible=!!t,!0):!1}function un(t,n){let r=e.getBoundingClientRect();tn.setFromCamera(new G((t-r.left)/r.width*2-1,1-(n-r.top)/r.height*2),s);for(let e of tn.intersectObject(a,!0)){if(e.object.material?.transparent)continue;let t=[],n=!0;for(let r=e.object;r;r=r.parent)n&&=r.visible,r.name&&t.push(r.name);if(n)return{path:t,worldPoint:e.point.toArray(),distance:e.distance}}return null}function dn(){for(let e of g)e.dispose();for(let e of h)e.dispose();for(let e of _)e.dispose();n.dispose()}function fn(){return Ld.map(e=>({...e}))}function pn(e=f){return Bd(e)}return sn(e.clientWidth||1600,e.clientHeight||900),Qt(`night`),Zt(`right`),{render:en,setView:Zt,setMood:Qt,resize:sn,windowPoint:an,windowPointVisible:rn,projectWindow:on,getRigInfo:cn,getMoodOptions:fn,getCameraMotion:pn,setPartVisibility:ln,identifySurface:un,dispose:dn}}var Hd=Math.sqrt,Ud=Math.floor,Wd=Math.ceil,Gd=Math.round,Kd=Math.min,qd=Math.max,Jd=Math.imul,Yd=Math.LN2;function Xd(e,t,n){return e<t?t:e>n?n:e}function Zd(e,t){if(!(e>0))return 0;let n=t>0?t:e>1?e*.3333333333333333+.6666666666666666:1;for(let t=0;t<60;t++){let t=n*n,r=n-(t*n-e)/(3*t),i=r-n;if(n=r,(i<0?-i:i)<=n*1e-15)break}return n}function Qd(e){if(e>700&&(e=700),e<-700)return 0;let t=Gd(e/Yd),n=e-t*Yd,r=1,i=1;for(let e=1;e<=14;e++)r=r*n/e,i+=r;let a=t<0?-t:t,o=t<0?.5:2,s=1;for(;a>0;)a&1&&(s*=o),o*=o,a>>>=1;return i*s}function $d(e,t){return Qd(-Yd*e/t)}function ef(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Jd(t,16777619);return t>>>0}function tf(e){let t=e^e>>>16;return t=Jd(t,569420461),t^=t>>>15,t=Jd(t,1935289751),(t^t>>>15)>>>0}function nf(e,t){let n=ef(`${e}|${t}`)|0;n=n+2654435769|0;let r=tf(n);n=n+2654435769|0;let i=tf(n);n=n+2654435769|0;let a=tf(n);n=n+2654435769|0;let o=tf(n),s={a:r|0,b:i|0,c:a|0,d:o|0};for(let e=0;e<12;e++)rf(s);return s}function rf(e){let t=(e.a+e.b|0)+e.d|0;return e.d=e.d+1|0,e.a=e.b^e.b>>>9,e.b=e.c+(e.c<<3)|0,e.c=e.c<<21|e.c>>>11,e.c=e.c+t|0,t>>>0}function af(e){return rf(e)/4294967296}function X(e,t,n){return t+(n-t)*af(e)}function of(e,t){return Ud(af(e)*t)}function sf(e,t){return af(e)<t}function cf(e,t,n){let r=Jd(e|0,374761393)+Jd(t|0,668265263)+Jd(n|0,1274126177)|0;return r=Jd(r^r>>>13,1274126177),r^=r>>>16,r=Jd(r,2246822507),r^=r>>>13,r>>>0}function lf(e,t,n){return cf(e,t,n)/4294967296}function uf(e,t,n){let r=Ud(e),i=Ud(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=lf(r,i,n),u=lf(r+1,i,n),d=lf(r,i+1,n),f=lf(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}function df(e,t){let n=X(t,e.ACCEL_S_MIN,e.ACCEL_S_MAX),r=Wd(e.HARD_END_S/e.CRUISE_KEY_S)+3,i=new Float64Array(r);for(let n=0;n<r;n++)i[n]=(af(t)*2-1)*e.CRUISE_JITTER;return{accelS:n,keys:i}}function ff(e,t,n,r,i){if(t<e.startTick||t>=e.endTick)return 0;let a=r*n,o=i*n,s=t-e.startTick;if(s<a)return s/a;let c=e.endTick-t;return c<o?c/o:1}function pf(e,t){if(t<0)return 0;let n=e.p,r=t*e.dt,i=e.car.accelS,a=r<i?r/i:1,o=r/n.CRUISE_KEY_S,s=Ud(o);s>e.car.keys.length-2&&(s=e.car.keys.length-2);let c=o-s,l=e.car.keys[s]+(e.car.keys[s+1]-e.car.keys[s])*(c>1?1:c),u=(n.CRUISE_KMH+l)*a,d=e.events;for(let e=0;e<d.length;e++){let r=d[e];if(r.type!==`brake`)continue;let i=ff(r,t,n.TICK_HZ,n.BRAKE_DOWN_S,n.BRAKE_UP_S);i>0&&(u+=(r.kmh-u)*i)}if(r>n.ANTI_STALL_S){let e=(r-n.ANTI_STALL_S)/n.ANTI_STALL_RAMP_S;u+=n.ANTI_STALL_KMH*(e>1?1:e)}return qd(0,u)}var Z={GREEN:1,EVENT_WARN:2,EVENT_START:3,EVENT_END:4,FLY_LAND:5,CREATURE_GONE:6,FLY_NO_LAND:7,LEAF_LAND:8,LEAF_SURF:9,LEAF_CARRY:10,KNOCK:11,SCARE_OK:12,SCARE_FAIL:13,JOLT:14,STOP_IT:15,KNOCK_LOCKED:16,KNOCK_COOLDOWN:17,PICK:18,MERGE_PICKED:19,GULP:20,CAND_FINISH:21,CAND_OUT:22,LEAD_SWAP:23,FAST_FORWARD:24,SLOWMO:25,BREATH:26,ANTI_STALL:27,HARD_END:28,RESULT:29,SPAWN_FULL:30,LIGHTNING:31,FINAL_STRAIGHT:32,BLOCKED:33,RIVAL_NOTICE:34,SWALLOW_CAND:35,FF_OFF:36,DROP_MERGE:37};function mf(e,t,n,r,i,a){let o=e.head;e.tick[o]=t,e.code[o]=n,e.a[o]=r,e.b[o]=i,e.c[o]=a,e.head=(o+1)%e.cap,e.count<e.cap&&e.count++,e.total++}function hf(e,t){return(e.head-e.count+t+e.cap)%e.cap}var gf=[`none`,`gutter`,`gulped`,`evaporated`,`leaf`],_f=[`pick`,`racing`,`done`];function vf(e){return e===`player`?1:2}var yf=[`none`,`finish`,`gulp`,`gulp-draw`,`both-out`,`time-nearest`,`time-draw`],bf=[`favorite`,`middle`,`outsider`,`sleeper`,`free`,`monster`],xf=[`monster`,`drizzle`,`lane`,`twins`],Sf=[`scheduled`,`warning`,`active`,`done`],Cf=[`fly`,`leaf`,`paper`],wf=[`none`,`decided`,`out`,`gap`];function Tf(e){return{cap:e,n:0,nextId:1,id:new Int32Array(e),x:new Float64Array(e),y:new Float64Array(e),v:new Float64Array(e),a:new Float64Array(e),vx:new Float64Array(e),vy:new Float64Array(e),alive:new Uint8Array(e),moving:new Uint8Array(e),kind:new Uint8Array(e),cand:new Int8Array(e),burst:new Int32Array(e),jolt:new Int32Array(e),joltMm:new Float64Array(e),stuck:new Int32Array(e),held:new Int8Array(e),contact:new Uint8Array(e),shedAcc:new Float64Array(e),nextShed:new Float64Array(e),shedCount:new Int32Array(e),parent:new Int32Array(e),parentUntil:new Int32Array(e),free:new Int32Array(e),freeTop:0}}function Ef(e){return{cap:e,head:0,count:0,total:0,tick:new Int32Array(e),code:new Uint8Array(e),a:new Float64Array(e),b:new Float64Array(e),c:new Float64Array(e)}}function Df(e){return{count:e,slot:new Int32Array(e).fill(-1),dropId:new Int32Array(e),state:new Uint8Array(e),finishTick:new Int32Array(e).fill(-1),finishTime:new Float64Array(e).fill(-1),outTick:new Int32Array(e).fill(-1),outReason:new Uint8Array(e),gulpedBy:new Int8Array(e).fill(-1),endX:new Float64Array(e).fill(-1),endY:new Float64Array(e).fill(-1),startX:new Float64Array(e),startY:new Float64Array(e),startV:new Float64Array(e),profile:new Uint8Array(e),hasFeeder:new Uint8Array(e)}}function Of(e){return e.greenTick<0?-1:(e.tick-e.greenTick)*e.dt}function kf(e){return e.greenTick<0?-1:e.tick-e.greenTick}function Af(e,t,n){let r=e.result;r.reason===0&&(r.winner=t,r.reason=n,r.decidedTick=kf(e),mf(e.log,e.tick,Z.RESULT,t,n,0))}function jf(e,t,n,r,i){if(e.mode!==`race`)return;let a=e.picks[1],o=e.picks[2];if(!(t===a&&n===o||t===o&&n===a))return;let s=r>i?r:i;(r>i?r-i:i-r)<=e.p.GULP_DRAW*s?Af(e,3,3):Af(e,t===a?1:2,2)}function Mf(e,t){let n=e.cands;if(n.state[t]===1)return 1;let r=n.state[t]===0?e.drops.x[n.slot[t]]:n.endX[t],i=e.p.FINISH_X-n.startX[t],a=i>0?(r-n.startX[t])/i:1;return a<0?0:a>1?1:a}function Nf(e,t,n){let r=e>t?e:t;return r>n?r:n}function Pf(e,t,n){let r=e.director;r.ffOn=1,r.ffReason=t,r.fastForwardTick<0&&(r.fastForwardTick=n),t===3&&r.ffGapTick<0&&(r.ffGapTick=n,r.ffTrailer=r.ffTrailerNow),mf(e.log,e.tick,Z.FAST_FORWARD,t,r.safeGap,0)}function Ff(e){e.phase=2,e.result.endTick=kf(e)}function If(e){let t=e.cands,n=0;for(let e=0;e<t.count;e++)t.state[e]===0&&n++;(n===0||kf(e)>=Gd(e.p.HARD_END_S*e.p.TICK_HZ))&&Ff(e)}function Lf(e){let t=e.p,n=e.cands,r=e.drops,i=e.director,a=kf(e),o=e.picks[1],s=e.picks[2],c=n.state[o],l=n.state[s];if(e.result.reason===0){let t=c===1,r=l===1;if(t&&r){let t=n.finishTime[o],r=n.finishTime[s];Af(e,t<r?1:r<t?2:3,1)}else t?Af(e,1,1):r?Af(e,2,1):c===2&&l===2&&Af(e,3,4)}if(c===1&&l===1&&e.result.gap<0){let t=n.finishTime[o]-n.finishTime[s];e.result.gap=t<0?-t:t}e.result.firstFinishTick<0&&(c===1||l===1)&&(e.result.firstFinishTick=a);let u=Mf(e,o),d=Mf(e,s),f=u>d?u:d;if(f>i.maxProgress&&(i.maxProgress=f),c===0&&l===0){let a=r.x[n.slot[o]]-r.x[n.slot[s]],c=t.LEAD_HYST_MM,l=i.lead;a>c?l=1:a<-c&&(l=-1),l!==i.lead&&(i.lead!==0&&(i.leadSwaps++,i.maxProgress>=.5&&i.leadSwapsAfterHalf++,mf(e.log,e.tick,Z.LEAD_SWAP,l>0?1:2,i.maxProgress,0)),i.lead=l)}!e.knocks.locked&&i.maxProgress>=t.FINAL_STRAIGHT&&(e.knocks.locked=1,mf(e.log,e.tick,Z.FINAL_STRAIGHT,0,0,0));let p=e.dt/t.ETA_TAU_S;for(let e=1;e<=2;e++){let a=e===1?o:s;if(n.state[a]!==0){i.eta[e]=n.state[a]===1?0:1e9;continue}let c=n.slot[a];i.emaVx[e]+=p*(r.vx[c]-i.emaVx[e]);let l=i.emaVx[e]>.3?i.emaVx[e]:.3;i.eta[e]=(t.FINISH_X-r.x[c])/l}let m=c===0&&l===0,h=i.eta[1]-i.eta[2];i.predictedGap=m?h<0?-h:h:-1;let g=i.eta[1]<i.eta[2]?i.eta[1]:i.eta[2],_=e.car.kmh>=t.FF_MIN_KMH;if(!m)i.safeGap=-1;else if(_){let c=i.xHist.length>>1,l=r.x[n.slot[o]],u=r.x[n.slot[s]],d=i.histCount>=c,f=d?i.histHead:0,p=(d?c:i.histCount)*e.dt,m=a*e.dt;if(p>=1&&m>0){let e=(l-i.xHist[f])/p,r=(u-i.xHist[c+f])/p,a=(l-n.startX[o])/m,d=(u-n.startX[s])/m,h=Nf(e,a,.3),g=Nf(r,d,.3),_=Nf(e<a?e:a,.3,.3),v=Nf(r<d?r:d,.3,.3),y=t.FINISH_X-l,b=t.FINISH_X-u,x=b/g-y/_,S=y/h-b/v;i.safeGap=x>S?x:S,i.ffTrailerNow=x>S?2:1}i.xHist[i.histHead]=l,i.xHist[c+i.histHead]=u,i.histHead=(i.histHead+1)%c,d||i.histCount++}if(!i.ffOn||i.ffReason===3){let n=0;e.result.reason===0?(c===2&&u<t.FF_OUT_PROGRESS||l===2&&d<t.FF_OUT_PROGRESS)&&(n=2):n=1,n!==0&&Pf(e,n,a)}i.ffOn?i.ffReason===3&&m&&_&&i.safeGap>=0&&i.safeGap<t.FF_UNLATCH_GAP_S&&(i.ffOn=0,i.ffReason=0,i.ffHold=0,i.ffUnlatches++,mf(e.log,e.tick,Z.FF_OFF,i.safeGap,0,0)):m&&i.safeGap>t.FF_GAP_S&&f>=t.FF_MIN_PROGRESS?(_&&i.ffHold++,i.ffHold>=t.FF_HOLD_S*t.TICK_HZ&&Pf(e,3,a)):(_||!m)&&(i.ffHold=0),m&&!i.ffOn&&i.breathTick<0&&g<t.BREATH_GAP_S&&i.predictedGap<t.BREATH_GAP_S&&(i.breathTick=a,mf(e.log,e.tick,Z.BREATH,i.predictedGap,0,0)),m&&!i.ffOn&&i.slowMoTick<0&&g<t.SLOWMO_GAP_S&&i.predictedGap<t.SLOWMO_GAP_S&&(i.slowMoTick=a,mf(e.log,e.tick,Z.SLOWMO,i.predictedGap,0,0));let v=c!==0,y=l!==0;if(v&&y)Ff(e);else if(a>=Gd(t.HARD_END_S*t.TICK_HZ)){if(mf(e.log,e.tick,Z.HARD_END,0,0,0),e.result.reason===0){if(!v&&!y){let t=r.x[n.slot[o]],i=r.x[n.slot[s]];Af(e,t>i?1:i>t?2:3,t===i?6:5)}else Af(e,v?2:1,5)}Ff(e)}}function Rf(e,t,n){let r=Ud(t),i=Ud(n);return r<0?r=0:r>=e.pw&&(r=e.pw-1),i<0?i=0:i>=e.ph&&(i=e.ph-1),e.pin[i*e.pw+r]}function zf(e,t,n,r){let i=Ud(n/t),a=Ud(r/t);return i<0?i=0:i>=e.ww&&(i=e.ww-1),a<0?a=0:a>=e.wh&&(a=e.wh-1),a*e.ww+i}function Bf(e,t,n,r,i){let a=qd(0,Ud(t-r)),o=Kd(e.pw-1,Ud(t+r)),s=qd(0,Ud(n-r)),c=Kd(e.ph-1,Ud(n+r)),l=r*r;for(let r=s;r<=c;r++)for(let s=a;s<=o;s++){let a=s+.5-t,o=r+.5-n;a*a+o*o<=l&&(e.pin[r*e.pw+s]*=i)}}function Vf(e,t,n,r,i,a,o,s){let c=t.WET_CELL;for(let l=n;l<=i;l+=1){let i=(uf(l/14,.5,s)-.5)*3,u=r+a*(l-n)+i;if(u<1||u>t.H-1)break;for(let t=-1;t<=1;t+=2){let n=zf(e,c,l,u+t*.75);e.wet[n]<o&&(e.wet[n]=o)}}}function Hf(e,t){let n=t.CAND_Y_MIN,r=t.CAND_Y_MAX,i={profile:0,vMin:7.6,vMax:t.CAND_V_MAX,yMin:22,yMax:40,feeder:!1,streak:!1},a={profile:1,vMin:6.5,vMax:7.5,yMin:n,yMax:r,feeder:!1,streak:!0},o={profile:2,vMin:t.CAND_V_MIN,vMax:6.2,yMin:n,yMax:r,feeder:!0,streak:!1},s={profile:3,vMin:t.CAND_V_MIN,vMax:6.2,yMin:n,yMax:n+6,feeder:!1,streak:!1},c={profile:4,vMin:t.CAND_V_MIN,vMax:t.CAND_V_MAX,yMin:n,yMax:r,feeder:!1,streak:!1};if(e===`monster`){let e={profile:5,vMin:t.MONSTER_V_MIN,vMax:t.MONSTER_V_MAX,yMin:22,yMax:40,feeder:!1,streak:!1},n={...o,vMax:6.5};return[e,n,n,n,n,n]}if(e===`drizzle`){let e={...a,vMin:t.CAND_V_MIN,vMax:6.5};return[e,e,e,o,s,{...c,vMax:6.5}]}return e===`twins`?[i,i,a,o,s,c]:[i,a,o,s,c,c]}function Uf(e,t){return 1+e.CAND_SPEED_PER_UL*(t-e.CAND_V_MIN)}function Wf(e,t,n,r){let i=e.CAND_V_MIN+(t-1)/e.CAND_SPEED_PER_UL;return i<n?n:i>r?r:i}function Gf(e,t,n,r){let i=e.W,a=e.H,o=xf[of(t,xf.length)],s=i,c=a,l=Ud((i+e.WET_CELL-1)/e.WET_CELL),u=Ud((a+e.WET_CELL-1)/e.WET_CELL),d={kind:o,pin:new Float64Array(s*c),pw:s,ph:c,wet:new Float64Array(l*u),ww:l,wh:u,wetDecay:1,specks:new Float64Array,smudges:new Float64Array,stickers:new Float64Array,genRetries:0},f=rf(t)|0,p=rf(t)|0,m=e.HET_W1;for(let t=0;t<c;t++)for(let n=0;n<s;n++){let r=n+.5,i=t+.5,a=m*(2*uf(r/e.HET_SCALE1,i/e.HET_SCALE1,f)-1)+(1-m)*(2*uf(r/e.HET_SCALE2,i/e.HET_SCALE2,p)-1);d.pin[t*s+n]=1+e.HET_AMP*a}let h=Ud(i*a/e.SPECK_AREA);d.specks=new Float64Array(h*3);for(let n=0;n<h;n++){let r=af(t)*i,o=af(t)*a,s=X(t,e.SPECK_R_MIN,e.SPECK_R_MAX);d.specks[n*3]=r,d.specks[n*3+1]=o,d.specks[n*3+2]=s,Bf(d,r,o,s,e.SPECK_MUL)}if(sf(t,e.SMUDGE_CHANCE)){let n=1+of(t,2);d.smudges=new Float64Array(n*3);for(let r=0;r<n;r++){let n=X(t,60,215),i=X(t,12,a-12),o=X(t,e.SMUDGE_R_MIN,e.SMUDGE_R_MAX);d.smudges[r*3]=n,d.smudges[r*3+1]=i,d.smudges[r*3+2]=o,Bf(d,n,i,o,e.SMUDGE_MUL)}}sf(t,e.STICKER_CHANCE)&&(d.stickers=new Float64Array(3),d.stickers[0]=X(t,80,200),d.stickers[1]=X(t,20,100),d.stickers[2]=X(t,e.STICKER_R_MIN,e.STICKER_R_MAX));let g=Hf(o,e),_=g.length,v=[],y=[],b=e.CAND_SPACING,x=Zd(e.MONSTER_V_MAX/e.CAP_K,2.5),S=(t,n)=>{for(let r of[d.specks,d.smudges])for(let i=0;i+2<r.length;i+=3){let a=r[i]-t,o=r[i+1]-n,s=r[i+2]+x+e.CAND_CLEAN_R;if(a*a+o*o<s*s)return!1}return!0};for(let t=0;t<400&&v.length<_;t++){t>0&&t%40==0&&(d.genRetries++,--b),v.length=0,y.length=0;let r=b*b;for(let t=0;t<200&&v.length<_;t++){let t=X(n,e.CAND_X_MIN,e.CAND_X_MAX),i=X(n,e.CAND_Y_MIN,e.CAND_Y_MAX),a=!0;for(let e=0;e<v.length&&a;e++){let n=v[e]-t,o=y[e]-i;n*n+o*o<r&&(a=!1)}if(a&&d.stickers.length===3){let e=d.stickers[0]-t,n=d.stickers[1]-i,r=d.stickers[2]+6;e*e+n*n<r*r&&(a=!1)}a&&!S(t,i)&&(a=!1),a&&(v.push(t),y.push(i))}}let C=[!1,!1,!1,!1,!1,!1,!1,!1],w=[];for(let e=0;e<_;e++)w.push(-1);let T=(e,t)=>{let n=-1;for(let e=0;e<_;e++)!C[e]&&(n<0||t(e)<t(n))&&(n=e);w[e]=n,C[n]=!0};for(let t of[3,5,0,2])for(let r=0;r<_;r++)g[r].profile!==t||w[r]>=0||(t===3?T(r,e=>y[e]):t===2?T(r,t=>-v[t]+X(n,0,e.CAND_X_JITTER)):T(r,t=>v[t]+X(n,0,e.CAND_X_JITTER)));for(let e=0;e<_;e++)w[e]<0&&T(e,()=>af(n));let E=-1;for(let e=0;e<_;e++)v[e]>E&&(E=v[e]);let D=Uf(e,X(n,e.CAND_V_MIN,e.CAND_V_MIN+.5)),O=[],k=-1;for(let t=0;t<_;t++){let r=g[t],i=w[t],a;a=r.profile===5?X(n,r.vMin,r.vMax):Wf(e,D*(e.FINISH_X-v[i])/(e.FINISH_X-E)*(1+X(n,-e.CAND_ETA_NOISE,e.CAND_ETA_NOISE)),r.vMin,r.vMax),o===`twins`&&r.profile===0&&(k<0?k=a:a=k),O.push(a)}let A=[];for(let e=0;e<_;e++){let t=w[e];A.push({x:v[t],y:y[t],v:O[e],profile:g[e].profile,feederX:-1,feederY:-1,feederV:0})}for(let t=0;t<_;t++){if(!g[t].feeder)continue;let r=A[t];for(let i=0;i<8;i++){let i=X(n,e.FEEDER_DIST_MIN,e.FEEDER_DIST_MAX),a=r.x-i,o=r.y+X(n,-1.5,1.5);if(a<3)continue;let s=!0;for(let e=0;e<_&&s;e++){if(e===t)continue;let n=A[e],r=n.x-a,i=n.y-o;if(r*r+i*i<64&&(s=!1),n.feederX>=0){let e=n.feederX-a,t=n.feederY-o;e*e+t*t<25&&(s=!1)}}if(s){r.feederX=a,r.feederY=o,r.feederV=X(n,e.FEEDER_V_MIN,e.FEEDER_V_MAX);break}}}let j=rf(t)|0,M=e.STREAKS_MIN+of(t,e.STREAKS_MAX-e.STREAKS_MIN+1);for(let n=0;n<M;n++){let r=X(t,0,150);Vf(d,e,r,X(t,10,100),Kd(i,r+X(t,50,160)),X(t,.12,.3),X(t,.5,.9),j+n)}let N=!1;for(let n=0;n<A.length;n++){let r=A[n],a=Zd(r.v/e.CAP_K,1.6);if(r.profile===1){let s=o===`lane`&&!N,c=s?e.FINISH_X-r.x:X(t,70,170),l=s?X(t,.08,.16):X(t,.12,.28);Vf(d,e,r.x+a,r.y,Kd(i,r.x+c),l,s?1:X(t,.7,1),j+100+n),s&&(N=!0)}if(r.feederX>=0){let t=r.x-r.feederX;Vf(d,e,r.feederX,r.feederY,r.x-1.5*a-1,(r.y-r.feederY)/(t>.1?t:.1),.8,j+200+n)}}d.wetDecay=1;for(let t=0;t<A.length;t++){let n=A[t],r=Zd(n.v/e.CAP_K,1.6),i=r+e.CAND_CLEAN_R;for(let e=qd(0,Ud(n.y-i));e<=Kd(c-1,Ud(n.y+i));e++)for(let t=qd(0,Ud(n.x-i));t<=Kd(s-1,Ud(n.x+i));t++){let r=t+.5-n.x,a=e+.5-n.y;r*r+a*a<=i*i&&(d.pin[e*s+t]=1)}if(n.profile===1)continue;let a=e.WET_CELL,o=r+1;for(let e=qd(0,Ud((n.y-o)/a));e<=Kd(d.wh-1,Ud((n.y+o)/a));e++)for(let t=qd(0,Ud((n.x-o)/a));t<=Kd(d.ww-1,Ud((n.x+o)/a));t++){let r=(t+.5)*a-n.x,i=(e+.5)*a-n.y;r*r+i*i<=o*o&&(d.wet[e*d.ww+t]=0)}}for(let e=A.length-1;e>0;e--){let t=of(n,e+1),r=A[e];A[e]=A[t],A[t]=r}let P=[],F=e.AMBIENT_CLEAR_R*e.AMBIENT_CLEAR_R;for(let t=0;t<e.AMBIENT_COUNT;t++)for(let t=0;t<4;t++){let t=af(r)*i,n=af(r)*a,o=af(r),s=e.RAIN_V_MIN+e.RAIN_V_SPAN*o*o*o,c=!0;for(let e=0;e<A.length&&c;e++){let r=A[e],i=r.x-t,a=r.y-n;if(i*i+a*a<F&&(c=!1),c&&r.feederX>=0){let e=r.feederX-t,i=r.feederY-n;e*e+i*i<25&&(c=!1)}}if(c&&d.stickers.length===3){let e=d.stickers[0]-t,r=d.stickers[1]-n,i=d.stickers[2]+1;e*e+r*r<i*i&&(c=!1)}if(c){P.push({x:t,y:n,v:s});break}}return{glass:d,cands:A,ambient:P}}function Kf(e){for(let t of Object.values(e))typeof t==`object`&&t&&Kf(t);return Object.freeze(e)}var qf=Kf({W:240,H:135,FINISH_X:228,TICK_HZ:60,PREROLL_S:2,CAP_K:.785,G:7.7,CW:.167,PPIN:70,DYN:.88,KV:.095,VMAX:60,HET_AMP:.3,HET_SCALE1:9,HET_SCALE2:3.5,HET_W1:.7,SPECK_AREA:330,SPECK_MUL:2.4,SPECK_R_MIN:1,SPECK_R_MAX:2.5,SMUDGE_CHANCE:.6,SMUDGE_MUL:1.6,SMUDGE_R_MIN:8,SMUDGE_R_MAX:14,STICKER_CHANCE:.3,STICKER_R_MIN:5,STICKER_R_MAX:7,WET_CELL:2,WET_K:.45,WET_HALF_LIFE:25,STREAKS_MIN:2,STREAKS_MAX:3,STEER_K:.9,STEER_MAX:.3,STEER_AHEAD:1.5,SHED_V:9.5,SHED_VMIN:3,SHED_FRAC:.03,SHED_GAP_MIN:2.5,SHED_GAP_SPAN:2,PEARL_IGNORE_S:.5,MERGE_K:.85,RACER_MERGE_K:.85,BURST_S:.3,BURST_MUL:.6,GULP_DRAW:.05,RAIN_SCALE:1,RAIN_V_MIN:.15,RAIN_V_SPAN:3.5,AMBIENT_COUNT:135,AMBIENT_CLEAR_R:8,MAX_DROPS:1024,CAND_COUNT:6,CAND_X_MIN:10,CAND_X_MAX:60,CAND_Y_MIN:10,CAND_Y_MAX:52,CAND_V_MIN:5.5,CAND_V_MAX:8.5,CAND_SPACING:20,CAND_X_JITTER:10,CAND_CLEAN_R:2,CAND_ETA_NOISE:.1,CAND_SPEED_PER_UL:.066,MONSTER_V_MIN:11,MONSTER_V_MAX:13,FEEDER_V_MIN:3.5,FEEDER_V_MAX:5,FEEDER_DIST_MIN:7,FEEDER_DIST_MAX:11,FLOW_BASE:.85,FLOW_TOP:.25,FLOW_SWIRL:.12,CRUISE_KMH:65,CRUISE_JITTER:5,CRUISE_KEY_S:5,ACCEL_S_MIN:3,ACCEL_S_MAX:6,ANTI_STALL_S:50,ANTI_STALL_KMH:30,ANTI_STALL_RAMP_S:3,HARD_END_S:90,ROAD_S:.2,ROAD_RATE:1,ROAD_REF_KMH:65,ROAD_MUL_MIN:.5,ROAD_MUL_MAX:.9,ROAD_MIN_KMH:10,EVENT_QUIET_S:4,EVENT_GAP_S:6,EVENT_CUTOFF_S:25.5,EVENT_MAX:4,WARN_S:1,BUMP_MUL:.6,BUMP_S:.3,BUMP_G_EXTRA:1,BRAKE_KMH:20,BRAKE_STOP_CHANCE:.3,BRAKE_HOLD_MIN:2,BRAKE_HOLD_MAX:8,BRAKE_DOWN_S:1,BRAKE_UP_S:2,PACK_SPEED:4.4,PACK_DELAY:3,PACK_SLOPE:.25,PACK_LEAD_MIN:4,PACK_LEAD_MAX:18,PACK_SIDE:4,PACK_Y_MIN:15,PACK_Y_MAX:90,FLY_MAX_KMH:30,FLY_R:3.5,FLY_LIFE_MIN:5,FLY_LIFE_MAX:11,FLY_GRIP_MIN:45,FLY_GRIP_MAX:80,CONTACT_SLOW:.35,LEAF_R_MIN:9,LEAF_R_MAX:12,LEAF_HOLD_MIN:3,LEAF_HOLD_MAX:8,LEAF_SURF_V:18,PAPER_KMH:60,DOWNPOUR_MUL:3,DOWNPOUR_S:6,DOWNPOUR_WARN_S:1.5,CLEAR_MIN_S:6,CLEAR_MAX_S:10,CLEAR_WARN_S:2,EVAP_C:.04,V_VANISH:.05,LIGHTNING_GAP_S:4,KNOCKS:3,KNOCK_COOLDOWN_S:1,KNOCK_SCARE_R:15,KNOCK_JOLT_R:10,KNOCK_JOLT_MUL:.5,KNOCK_JOLT_S:1,KNOCK_JOLT_MOVE:2,SCARE_FLY:.58,SCARE_LEAF:.5,PITY_STEP:.2,PITY_SURE_AFTER:2,KNOCK_QUANT_MM:.5,FINAL_STRAIGHT:.85,RIVAL_SIZE_LOVE:1.5,RIVAL_CORNER_BONUS:2.5,RIVAL_DIRT_PENALTY:2,RIVAL_DIRT_R:5,RIVAL_WHIM:.1,RIVAL_SEE_AHEAD:35,RIVAL_SEE_SIDE:12,RIVAL_REACT_MIN:.8,RIVAL_REACT_MAX:1.6,RIVAL_KNOCK_P:.75,RIVAL_STUCK_S:2,RIVAL_STUCK_MIN_KMH:45,RIVAL_RANDOM_KNOCK:.05,FF_GAP_S:6,FF_HOLD_S:2,FF_MIN_PROGRESS:.5,FF_WINDOW_S:5,FF_MIN_KMH:30,FF_UNLATCH_GAP_S:2,FF_OUT_PROGRESS:.7,SLOWMO_GAP_S:1,BREATH_GAP_S:1.5,ETA_TAU_S:1.5,LEAD_HYST_MM:1}),Jf=Kf({grey:{rainPerS:8,bump:.55,brake:.55,flyGivenBrake:1,leaf:.35,downpour:.25,clearing:.2,lightning:0},sunset:{rainPerS:5,bump:.5,brake:.5,flyGivenBrake:.6,leaf:.35,downpour:.1,clearing:.5,lightning:0},storm:{rainPerS:12,bump:.55,brake:.5,flyGivenBrake:.3,leaf:.3,downpour:.45,clearing:.1,lightning:.4}});function Yf(e,t,n,r,i){let a=e.drops,o;if(a.freeTop>0)a.freeTop--,o=a.free[a.freeTop];else if(a.n<a.cap)o=a.n,a.n++;else return mf(e.log,e.tick,Z.SPAWN_FULL,r,0,0),-1;return a.id[o]=a.nextId++,a.x[o]=t,a.y[o]=n,a.v[o]=r,a.a[o]=Zd(r/e.p.CAP_K,1.5),a.vx[o]=0,a.vy[o]=0,a.alive[o]=1,a.moving[o]=0,a.kind[o]=i,a.cand[o]=-1,a.burst[o]=0,a.jolt[o]=0,a.joltMm[o]=0,a.stuck[o]=0,a.held[o]=-1,a.contact[o]=0,a.shedAcc[o]=0,a.nextShed[o]=e.p.SHED_GAP_MIN*a.a[o],a.shedCount[o]=0,a.parent[o]=0,a.parentUntil[o]=0,o}function Xf(e,t){let n=e.drops;n.alive[t]&&(n.alive[t]=0,n.moving[t]=0,n.held[t]=-1,n.free[n.freeTop]=t,n.freeTop++)}function Zf(e,t,n){e.drops.kind[t]=1,e.drops.cand[t]=n,e.cands.slot[n]=t,e.cands.dropId[n]=e.drops.id[t]}function Qf(e,t,n,r){let i=e.cands;i.state[t]===0&&(i.state[t]=2,i.outTick[t]=kf(e),i.endX[t]=e.drops.x[i.slot[t]],i.endY[t]=e.drops.y[i.slot[t]],i.outReason[t]=n,i.gulpedBy[t]=r,mf(e.log,e.tick,Z.CAND_OUT,t,n,r))}function $f(e,t,n,r){let i=e.cands;if(i.state[t]!==0)return;i.state[t]=1,i.endX[t]=n,i.endY[t]=e.drops.y[i.slot[t]];let a=kf(e);i.finishTick[t]=a;let o=r>0?(n-e.p.FINISH_X)/r:0;o>e.dt&&(o=e.dt),o<0&&(o=0),i.finishTime[t]=a*e.dt-o,mf(e.log,e.tick,Z.CAND_FINISH,t,i.finishTime[t],0)}function ep(e,t,n,r,i){let a=of(n,r.length),o=X(n,e.PACK_LEAD_MIN,e.PACK_LEAD_MAX),s=X(n,-e.PACK_SIDE,e.PACK_SIDE),c=r[a]+e.PACK_SPEED*(t>e.PACK_DELAY?t-e.PACK_DELAY:0)+o;c=c<40?40:c>e.FINISH_X-15?e.FINISH_X-15:c;let l=i[a]+e.PACK_SLOPE*(c-r[a])+s;return l=l<e.PACK_Y_MIN?e.PACK_Y_MIN:l>e.PACK_Y_MAX?e.PACK_Y_MAX:l,[c,l]}function tp(e,t){return Gd(t*e.TICK_HZ)}function np(e,t,n,r,i){return{kind:e,event:t,x:n,y:r,r:i,state:0,landTick:-1,lastTick:-1,gripKmh:999,failedKnocks:0,outcome:0,releaseTick:-1,surfing:0,goneWhy:0,triesPlayer:0,triesRival:0}}function rp(e,t,n,r,i){let a=[];if(sf(n,t.bump)&&a.push(`bump`),sf(n,t.brake)&&a.push(`brake`),sf(n,t.leaf)&&a.push(`leaf`),sf(n,t.downpour)&&a.push(`downpour`),sf(n,t.clearing)&&a.push(`clearing`),a.length===0){let e=[t.bump,t.brake,t.leaf,t.downpour,t.clearing],r=[`bump`,`brake`,`leaf`,`downpour`,`clearing`],i=0;for(let t=0;t<e.length;t++)i+=e[t];let o=af(n)*i,s=0;for(;s<e.length-1&&o>=e[s];)o-=e[s],s++;a.push(r[s])}for(let e=a.length-1;e>0;e--){let t=of(n,e+1),r=a[e];a[e]=a[t],a[t]=r}let o=[],s=[];for(let t=0;t<a.length&&s.length<e.EVENT_MAX;t++)for(let r=0;r<16;r++){let r=X(n,e.EVENT_QUIET_S,e.EVENT_CUTOFF_S),i=!0;for(let t=0;t<o.length;t++){let n=o[t]-r;(n<0?-n:n)<e.EVENT_GAP_S&&(i=!1)}if(i){o.push(r),s.push(a[t]);break}}for(let e=1;e<o.length;e++)for(let t=e;t>0&&o[t-1]>o[t];t--){let e=o[t];o[t]=o[t-1],o[t-1]=e;let n=s[t];s[t]=s[t-1],s[t-1]=n}let c=[],l=[];for(let a=0;a<s.length;a++){let u=s[a],d=o[a],f={type:u,warnTick:tp(e,d-e.WARN_S),startTick:tp(e,d),endTick:tp(e,d),x:-1,y:-1,kmh:0,creature:-1,phase:0};if(u===`bump`)f.endTick=tp(e,d+e.BUMP_S),c.push(f);else if(u===`brake`){let a=X(n,e.BRAKE_HOLD_MIN,e.BRAKE_HOLD_MAX);f.kmh=sf(n,e.BRAKE_STOP_CHANCE)?0:e.BRAKE_KMH,f.endTick=tp(e,d+e.BRAKE_DOWN_S+a+e.BRAKE_UP_S),c.push(f);let o=d+e.BRAKE_DOWN_S+.3,s=d+e.BRAKE_DOWN_S+(a>.8?a-.5:.3),u=s<e.EVENT_CUTOFF_S?s:e.EVENT_CUTOFF_S;if(sf(n,t.flyGivenBrake)&&u>=o){let t=X(n,o,u),a=X(n,e.FLY_LIFE_MIN,e.FLY_LIFE_MAX),[s,d]=ep(e,t,n,r,i),f=np(0,c.length,s,d,e.FLY_R);f.gripKmh=X(n,e.FLY_GRIP_MIN,e.FLY_GRIP_MAX);let p={type:`fly`,warnTick:tp(e,t-e.WARN_S),startTick:tp(e,t),endTick:tp(e,t+a),x:s,y:d,kmh:0,creature:l.length,phase:0};l.push(f),c.push(p)}}else if(u===`leaf`){let t=X(n,e.LEAF_HOLD_MIN,e.LEAF_HOLD_MAX);[f.x,f.y]=ep(e,d,n,r,i);let a=np(1,c.length,f.x,f.y,X(n,e.LEAF_R_MIN,e.LEAF_R_MAX));a.outcome=+!sf(n,.5),f.endTick=tp(e,d+t),f.creature=l.length,l.push(a),c.push(f)}else u===`downpour`?(f.warnTick=tp(e,d-e.DOWNPOUR_WARN_S),f.endTick=tp(e,d+e.DOWNPOUR_S),c.push(f)):(f.warnTick=tp(e,d-e.CLEAR_WARN_S),f.endTick=tp(e,d+X(n,e.CLEAR_MIN_S,e.CLEAR_MAX_S)),c.push(f))}let u=new Int32Array;if(t.lightning>0&&sf(n,t.lightning)){let t=1+of(n,3);u=new Int32Array(t);let r=X(n,2,10);for(let i=0;i<t;i++)u[i]=tp(e,r),r+=e.LIGHTNING_GAP_S+X(n,0,12)}return{events:c,creatures:l,lightning:u}}function ip(e,t,n){let r=e.p,i=e.creatures[t];if(i.kind===0){if(e.car.kmh>=r.FLY_MAX_KMH){i.state=2,i.goneWhy=4,mf(e.log,e.tick,Z.FLY_NO_LAND,t,e.car.kmh,0);return}i.state=1,i.landTick=n,i.lastTick=e.events[i.event].endTick,mf(e.log,e.tick,Z.FLY_LAND,t,i.x,i.y);return}e.car.kmh>r.PAPER_KMH&&(i.kind=2),i.state=1,i.landTick=n;let a=e.drops,o=0,s=i.r*i.r;for(let e=0;e<a.n;e++){if(!a.alive[e]||a.held[e]>=0)continue;let n=a.x[e]-i.x,r=a.y[e]-i.y;n*n+r*r<=s&&(a.held[e]=t,a.moving[e]=0,o++)}mf(e.log,e.tick,Z.LEAF_LAND,t,o,i.kind)}function ap(e,t,n){let r=e.creatures[t];if(r.state===2)return;r.state=2,r.goneWhy=n;let i=e.drops;if(r.kind!==0)for(let r=0;r<i.n;r++)i.held[r]===t&&(n===3?(i.cand[r]>=0&&Qf(e,i.cand[r],4,-1),Xf(e,r)):i.held[r]=-1);let a=e.events[r.event];a&&a.phase!==3&&(a.phase=3),mf(e.log,e.tick,Z.CREATURE_GONE,t,n,r.kind)}function op(e,t){let n=e.p;e.fx.pinMul=1,e.fx.rainMul=1,e.fx.evap=0,e.fx.gMul=1;let r=e.events;for(let i=0;i<r.length;i++){let a=r[i];a.phase!==3&&(a.phase===0&&t>=a.warnTick&&(a.phase=1,mf(e.log,e.tick,Z.EVENT_WARN,i,0,0)),a.phase===1&&t>=a.startTick&&(a.phase=2,mf(e.log,e.tick,Z.EVENT_START,i,0,0),a.creature>=0&&ip(e,a.creature,t)),a.phase===2&&(a.type===`bump`?(e.fx.pinMul*=n.BUMP_MUL,e.fx.gMul+=n.BUMP_G_EXTRA):a.type===`downpour`?e.fx.rainMul*=n.DOWNPOUR_MUL:a.type===`clearing`&&(e.fx.evap=1),a.creature<0&&t>=a.endTick&&(a.phase=3,mf(e.log,e.tick,Z.EVENT_END,i,0,0))))}let i=e.creatures;for(let a=0;a<i.length;a++){let o=i[a];if(o.state===1){if(o.kind===0){let i=r[o.event],s=t-o.landTick>n.TICK_HZ/2;(t>=i.endTick||s&&e.car.kmh>o.gripKmh)&&ap(e,a,0)}else{if(!o.surfing&&t>=r[o.event].endTick){if(o.outcome===0)o.surfing=1,mf(e.log,e.tick,Z.LEAF_SURF,a,0,0);else{mf(e.log,e.tick,Z.LEAF_CARRY,a,0,0),ap(e,a,3);continue}}o.surfing&&(o.x+=n.LEAF_SURF_V*e.dt,o.x-o.r>n.W&&ap(e,a,2))}}}for(let n=0;n<e.lightning.length;n++)e.lightning[n]===t&&mf(e.log,e.tick,Z.LIGHTNING,n,0,0)}function sp(e,t){return Gd(e/t)*t}function cp(e,t,n,r){let i=e.p;if(e.phase!==1)return!1;let a=kf(e),o=e.knocks;if(o.left[t]<=0)return o.wanted[t]++,mf(e.log,e.tick,Z.STOP_IT,t,0,0),!1;if(o.locked)return mf(e.log,e.tick,Z.KNOCK_LOCKED,t,0,0),!1;if(o.lastTick[t]>=0&&a-o.lastTick[t]<Gd(i.KNOCK_COOLDOWN_S*i.TICK_HZ))return mf(e.log,e.tick,Z.KNOCK_COOLDOWN,t,0,0),!1;let s=sp(Xd(n,0,i.W),i.KNOCK_QUANT_MM),c=sp(Xd(r,0,i.H),i.KNOCK_QUANT_MM);o.left[t]--,o.used[t]++,o.lastTick[t]=a,mf(e.log,e.tick,Z.KNOCK,t,s,c);let l=-1,u=i.KNOCK_SCARE_R*i.KNOCK_SCARE_R;for(let t=0;t<e.creatures.length;t++){let n=e.creatures[t];if(n.state!==1)continue;let r=n.x-s,i=n.y-c,a=r*r+i*i;a<=u&&(u=a,l=t)}if(l>=0){let n=e.creatures[l],r=n.kind===0?i.SCARE_FLY:i.SCARE_LEAF,a=n.failedKnocks>=i.PITY_SURE_AFTER,o=t===1?n.triesPlayer++:n.triesRival++,s=lf(e.knockSeed,l*4+t,o);a||s<r+i.PITY_STEP*n.failedKnocks?(mf(e.log,e.tick,Z.SCARE_OK,t,l,n.failedKnocks),ap(e,l,1)):(n.failedKnocks++,mf(e.log,e.tick,Z.SCARE_FAIL,t,l,n.failedKnocks))}let d=e.drops,f=-1,p=i.KNOCK_JOLT_R*i.KNOCK_JOLT_R;for(let e=0;e<d.n;e++){if(!d.alive[e]||d.moving[e]||d.held[e]>=0)continue;let t=d.x[e]-s,n=d.y[e]-c,r=t*t+n*n;(r<p||r===p&&f>=0&&d.id[e]<d.id[f])&&(p=r,f=e)}return f>=0&&(d.jolt[f]=Gd(i.KNOCK_JOLT_S*i.TICK_HZ),d.joltMm[f]=i.KNOCK_JOLT_MOVE*d.a[f],mf(e.log,e.tick,Z.JOLT,t,d.id[f],d.cand[f])),!0}var lp=.9393727128473789,up=.34289780745545134,dp=.7648421872844885,fp=.644217687237691;function pp(e,t,n){let r=e.p,i=e.lightProfile.rainPerS*r.RAIN_SCALE*n;if(af(t)>=i*e.dt)return;let a=af(t)*r.W,o=af(t),s=r.RAIN_V_MIN+r.RAIN_V_SPAN*o*o*o,c=Zd(s/r.CAP_K,1),l=c+af(t)*(r.H-2*c),u=e.glass.stickers;if(u.length===3){let e=a-u[0],t=l-u[1];if(e*e+t*t<u[2]*u[2])return}Yf(e,a,l,s,0)}function mp(e,t){let n=e.p,r=e.car.kmh;if(r<n.ROAD_MIN_KMH)return 1;let i=Gd(n.ROAD_S*n.TICK_HZ),a=e.drops.id[t],o=cf(e.roadSeed,a,-1)%i,s=Ud((e.tick+o)/i),c=lf(e.roadSeed,a,s),l=r<n.ROAD_REF_KMH?r/n.ROAD_REF_KMH:1,u=n.ROAD_RATE*n.ROAD_S*l;return c>=u?1:1-(1-(n.ROAD_MUL_MIN+(n.ROAD_MUL_MAX-n.ROAD_MUL_MIN)*(c/u)))*l*l}function hp(e,t,n){let r=e.glass;return Rf(r,t,n)*(1-e.p.WET_K*r.wet[zf(r,e.p.WET_CELL,t,n)])}function gp(e){if(e.tick%30!=0)return;let t=e.glass.wet,n=e.glass.wetDecay;for(let e=0;e<t.length;e++)t[e]*=n}function _p(e,t){return t>=0&&(e.picks[1]===t||e.picks[2]===t)}function vp(e){let t=e.p,n=e.drops,r=e.glass,i=e.dt,a=e.car.kmh/3.6,o=a*a,s=t.W,c=t.H,l=t.FINISH_X,u=t.WET_CELL,d=e.fx.pinMul,f=e.fx.gMul,p=t.WET_K,m=r.stickers,h=m.length===3,g=e.creatures,_=Gd(t.PEARL_IGNORE_S*t.TICK_HZ);for(let a=0;a<n.n;a++){if(!n.alive[a])continue;if(n.held[a]>=0){g[n.held[a]].surfing?(n.x[a]+=t.LEAF_SURF_V*i,n.vx[a]=t.LEAF_SURF_V):n.vx[a]=0,n.vy[a]=0,n.x[a]>=l&&(n.cand[a]>=0&&$f(e,n.cand[a],n.x[a],n.vx[a]),Xf(e,a));continue}let v=n.a[a],y=n.x[a],b=n.y[a],x=t.FLOW_BASE+t.FLOW_TOP*(1-b/c),S=t.FLOW_SWIRL*(1-y/s)*(.5-b/c),C=t.CW*x*v*v*o,w=C,T=t.G*v*v*v*f-C*S,E=Hd(w*w+T*T),D=E>0?w/E:0,O=E>0?T/E:1,k=hp(e,y+D*v,b+O*v),A=hp(e,y+(D*dp-O*fp)*v,b+(D*fp+O*dp)*v),j=hp(e,y+(D*dp+O*fp)*v,b+(-D*fp+O*dp)*v);A>k&&(k=A),j>k&&(k=j),k*=d*mp(e,a),n.burst[a]>0&&(k*=t.BURST_MUL,n.burst[a]--),n.jolt[a]>0&&(k*=t.KNOCK_JOLT_MUL,n.jolt[a]--);let M=t.PPIN*v*k;if(n.moving[a]?E<t.DYN*M&&(n.moving[a]=0):E>M&&(n.moving[a]=1),!n.moving[a]||E<=0){n.stuck[a]++,n.vx[a]=0,n.vy[a]=0,n.contact[a]=0,b>c-.5*v&&(n.cand[a]>=0&&Qf(e,n.cand[a],1,-1),Xf(e,a));continue}n.stuck[a]=0;let N=t.KV*(E-t.DYN*M)/v;N>t.VMAX&&(N=t.VMAX),N<0&&(N=0);let P=w/E,F=T/E,I=v+t.STEER_AHEAD,ee=P*lp-F*up,L=P*up+F*lp,te=P*lp+F*up,ne=-P*up+F*lp,re=y+ee*I,ie=b+L*I,ae=y+te*I,R=b+ne*I,z=Rf(r,re,ie)*(1-p*r.wet[zf(r,u,re,ie)]),oe=(Rf(r,ae,R)*(1-p*r.wet[zf(r,u,ae,R)])-z)*t.STEER_K;oe>t.STEER_MAX?oe=t.STEER_MAX:oe<-t.STEER_MAX&&(oe=-t.STEER_MAX);{let e=P;P-=F*oe,F+=e*oe;let t=Hd(P*P+F*F);P/=t,F/=t}let se=y+P*N*i,ce=b+F*N*i,le=0;if(h){let e=se-m[0],t=ce-m[1],n=m[2]+v,r=e*e+t*t;if(r<n*n){let i=r>0?Hd(r):1;se=m[0]+e/i*n,ce=m[1]+t/i*n}}for(let e=0;e<g.length;e++){let n=g[e];if(n.state!==1)continue;let r=se-n.x,i=ce-n.y,a=n.r+v,o=r*r+i*i;if(o<a*a){let s=o>0?Hd(o):1;se=n.x+r/s*a,ce=n.y+i/s*a,se=y+(se-y)*t.CONTACT_SLOW,ce=b+(ce-b)*t.CONTACT_SLOW,le=e+1}}le&&!n.contact[a]&&_p(e,n.cand[a])&&mf(e.log,e.tick,Z.BLOCKED,n.cand[a],le-1,0),n.contact[a]=+!!le;let ue=se-y,de=ce-b;if(n.vx[a]=ue/i,n.vy[a]=de/i,n.jolt[a]>0&&(n.joltMm[a]-=Hd(ue*ue+de*de),n.joltMm[a]<=0&&(n.jolt[a]=0)),n.x[a]=se,n.y[a]=ce,r.wet[zf(r,u,se-P*v,ce-F*v)]=1,N>t.SHED_V&&n.v[a]>t.SHED_VMIN&&(n.shedAcc[a]+=Hd(ue*ue+de*de),n.shedAcc[a]>n.nextShed[a])){let r=n.v[a]*t.SHED_FRAC;n.v[a]-=r,n.a[a]=Zd(n.v[a]/t.CAP_K,v);let i=n.a[a]+.6,o=Yf(e,se-P*i,ce-F*i,r,2);o>=0&&(n.parent[o]=n.id[a],n.parentUntil[o]=e.tick+_),n.shedAcc[a]=0,n.shedCount[a]++,n.nextShed[a]=(t.SHED_GAP_MIN+t.SHED_GAP_SPAN*lf(e.pearlSeed,n.id[a],n.shedCount[a]))*n.a[a]}let fe=n.a[a];n.y[a]<fe&&(n.y[a]=fe),n.x[a]<fe&&(n.x[a]=fe),n.y[a]>c-.5*fe?(n.cand[a]>=0&&Qf(e,n.cand[a],1,-1),Xf(e,a)):n.x[a]>=l&&(n.cand[a]>=0&&$f(e,n.cand[a],n.x[a],n.vx[a]),Xf(e,a))}}function yp(e){let t=e.p,n=e.drops,r=e.gridHead,i=e.gridNext,a=e.gridW,o=e.gridH;r.fill(-1);for(let e=0;e<n.n;e++){if(!n.alive[e]||n.held[e]>=0)continue;let t=Ud(n.x[e]/8)+1,s=Ud(n.y[e]/8)+1;t<0?t=0:t>=a&&(t=a-1),s<0?s=0:s>=o&&(s=o-1);let c=s*a+t;i[e]=r[c],r[c]=e}let s=t.MERGE_K,c=t.RACER_MERGE_K;for(let t=0;t<n.n;t++){if(!n.alive[t]||n.held[t]>=0)continue;let l=Ud(n.x[t]/8)+1,u=Ud(n.y[t]/8)+1;l<1?l=1:l>a-2&&(l=a-2),u<1?u=1:u>o-2&&(u=o-2);for(let o=-1;o<=1&&n.alive[t];o++)for(let d=-1;d<=1&&n.alive[t];d++){let f=r[(u+o)*a+l+d];for(;f>=0&&n.alive[t];){let r=i[f];if(f!==t&&n.alive[f]&&n.held[f]<0&&n.id[f]>n.id[t]&&!(n.kind[f]===2&&n.parent[f]===n.id[t]&&e.tick<n.parentUntil[f]||n.kind[t]===2&&n.parent[t]===n.id[f]&&e.tick<n.parentUntil[t])){let r=n.x[f]-n.x[t],i=n.y[f]-n.y[t],a=(n.a[t]+n.a[f])*(n.cand[t]>=0&&n.cand[f]>=0?c:s);r*r+i*i<=a*a&&bp(e,t,f)}f=r}}}}function bp(e,t,n){let r=e.p,i=e.drops,a=i.cand[t],o=i.cand[n],s=t,c=n;(a<0&&o>=0||a>=0==o>=0&&i.v[n]>i.v[t])&&(s=n,c=t);let l=i.v[s],u=i.v[c],d=i.cand[s],f=i.cand[c];if(d>=0&&f>=0){let t=e.mode===`race`&&_p(e,d),n=e.mode===`race`&&_p(e,f);e.mode===`race`&&n&&!t?(mf(e.log,e.tick,Z.SWALLOW_CAND,f,d,l),Qf(e,d,2,f),Zf(e,s,f)):e.mode===`race`&&t&&!n?(mf(e.log,e.tick,Z.SWALLOW_CAND,d,f,u),Qf(e,f,2,d)):((e.mode!==`race`||t&&n)&&mf(e.log,e.tick,Z.GULP,d,f,u/l),Qf(e,f,2,d),jf(e,d,f,l,u))}else d>=0&&_p(e,d)&&mf(e.log,e.tick,Z.MERGE_PICKED,d,u,0);let p=l+u;i.x[s]=(i.x[s]*l+i.x[c]*u)/p,i.y[s]=(i.y[s]*l+i.y[c]*u)/p,i.v[s]=p,i.a[s]=Zd(p/r.CAP_K,i.a[s]>i.a[c]?i.a[s]:i.a[c]),i.burst[s]=Gd(r.BURST_S*r.TICK_HZ),i.moving[c]&&(i.moving[s]=1),i.kind[s]===2&&(i.kind[s]=0),mf(e.log,e.tick,Z.DROP_MERGE,i.id[s],i.id[c],u),Xf(e,c)}function xp(e){let t=e.p,n=e.drops,r=e.dt;for(let i=0;i<n.n;i++){if(!n.alive[i])continue;let a=n.v[i]-t.EVAP_C*n.a[i]*r;a<t.V_VANISH?(n.cand[i]>=0&&Qf(e,n.cand[i],3,-1),Xf(e,i)):(n.v[i]=a,n.a[i]=Zd(a/t.CAP_K,n.a[i]))}}function Sp(e,t,n){let r=e.p.RIVAL_DIRT_R;for(let i of[e.glass.specks,e.glass.smudges])for(let e=0;e+2<i.length;e+=3){let a=i[e]-t,o=i[e+1]-n,s=r+i[e+2];if(a*a+o*o<=s*s)return!0}return!1}function Cp(e,t){let n=e.p,r=e.cands.slot[t],i=e.drops.v[r],a=e.drops.y[r],o=n.CAND_Y_MIN+(n.CAND_Y_MAX-n.CAND_Y_MIN)/3,s=i*n.RIVAL_SIZE_LOVE;return a<=o&&(s+=n.RIVAL_CORNER_BONUS),Sp(e,e.drops.x[r],a)&&(s-=n.RIVAL_DIRT_PENALTY),s}function wp(e){let t=e.picks[1],n=e.cands.count;if(sf(e.streams.rival,e.p.RIVAL_WHIM)){let r=t>=0?n-1:n,i=of(e.streams.rival,r);for(let e=0;e<n;e++)if(e!==t){if(i===0)return e;i--}}let r=-1,i=-1e9;for(let a=0;a<n;a++){if(a===t)continue;let n=Cp(e,a)+af(e.streams.rival)*1e-6;n>i&&(i=n,r=a)}return r}function Tp(e){if(!e.rivalAuto||e.phase!==1)return;let t=e.picks[2];if(t<0||e.cands.state[t]!==0)return;let n=e.p,r=e.cands.slot[t],i=e.drops,a=e.rival,o=kf(e),s=i.x[r],c=i.y[r],l=e.streams.rival;if(a.knockTick>=0&&o>=a.knockTick){let t=e.creatures[a.noticed];a.knockTick=-1,a.willKnock&&t.state===1&&(sf(l,n.RIVAL_RANDOM_KNOCK)?cp(e,2,X(l,40,n.FINISH_X),X(l,10,n.H-10)):cp(e,2,t.x,t.y)),a.noticed=-1}if(a.knockTick<0&&e.knocks.left[2]>0&&!e.knocks.locked)for(let t=0;t<e.creatures.length;t++){if(a.ignored>>t&1)continue;let u=e.creatures[t];if(u.state!==1)continue;let d=u.x-s,f=u.y-c;if(d>=0&&d<=n.RIVAL_SEE_AHEAD&&(f<0?-f:f)<=n.RIVAL_SEE_SIDE+u.r||i.held[r]===t){a.noticed=t,a.knockTick=o+Gd(X(l,n.RIVAL_REACT_MIN,n.RIVAL_REACT_MAX)*n.TICK_HZ),a.willKnock=+!!sf(l,n.RIVAL_KNOCK_P),a.willKnock||(a.ignored|=1<<t,a.knockTick=-1,a.noticed=-1),mf(e.log,e.tick,Z.RIVAL_NOTICE,t,a.willKnock,0);break}}i.stuck[r]===0?a.joltedStuck=0:!a.joltedStuck&&i.stuck[r]>n.RIVAL_STUCK_S*n.TICK_HZ&&e.car.kmh>=n.RIVAL_STUCK_MIN_KMH&&e.knocks.left[2]>0&&!e.knocks.locked&&(a.joltedStuck=1,sf(l,n.RIVAL_RANDOM_KNOCK)?cp(e,2,X(l,40,n.FINISH_X),X(l,10,n.H-10)):cp(e,2,s,c))}function Ep(e,t=``){let n=`drops|sim2|${String(e)}`;return{key:n,dyn:t===``?n:`${n}|variant:${t}`}}function Dp(e,t={}){let n=t.params??{};for(let e of Object.keys(n))if(!Object.hasOwn(qf,e))throw Error(`createRace: unknown parameter "${e}"`);let r={...qf,...n},i=t.light??`grey`;if(!Object.hasOwn(Jf,i))throw Error(`createRace: unknown light "${String(i)}"`);let a=String(e),o=t.variant??``,{key:s,dyn:c}=Ep(e,o),l={glass:nf(s,`glass`),candidates:nf(s,`candidates`),ambient:nf(s,`ambient`),preroll:nf(s,`preroll`),rain:nf(c,`rain`),events:nf(c,`events`),car:nf(c,`car`),rival:nf(c,`rival`)},u={...Jf[i]},d=Gf(r,l.glass,l.candidates,l.ambient);d.glass.wetDecay=$d(.5,r.WET_HALF_LIFE);let f=rp(r,u,l.events,d.cands.map(e=>e.x),d.cands.map(e=>e.y)),p=df(r,l.car),m=Gd(r.W/8)+3,h=Gd(r.H/8)+3,g={simVersion:2,seed:a,variant:o,light:i,lightProfile:u,mode:t.mode??`race`,firstPicker:t.firstPicker??`player`,rivalAuto:t.rivalAuto??!0,p:r,dt:1/r.TICK_HZ,tick:0,greenTick:-1,phase:0,streams:l,pearlSeed:rf(nf(c,`pearls`))|0,hopSeed:rf(nf(c,`hops`))|0,knockSeed:rf(nf(c,`knock`))|0,roadSeed:rf(nf(c,`road`))|0,glass:d.glass,drops:Tf(r.MAX_DROPS),gridHead:new Int32Array(m*h),gridNext:new Int32Array(r.MAX_DROPS),gridW:m,gridH:h,cands:Df(d.cands.length),picks:new Int8Array([-1,-1,-1]),knocks:{left:new Int8Array([0,r.KNOCKS,r.KNOCKS]),lastTick:new Int32Array([-1,-1,-1]),used:new Int8Array(3),wanted:new Int16Array(3),locked:0},car:{accelS:p.accelS,keys:p.keys,kmh:0,antiStallLogged:0},events:f.events,creatures:f.creatures,lightning:f.lightning,fx:{pinMul:1,rainMul:1,evap:0,gMul:1},rival:{noticed:-1,ignored:0,knockTick:-1,willKnock:0,joltedStuck:0},director:{emaVx:new Float64Array(3),eta:new Float64Array(3),predictedGap:-1,xHist:new Float64Array(2*Gd(r.FF_WINDOW_S*r.TICK_HZ)),histHead:0,histCount:0,safeGap:-1,ffTrailer:0,ffTrailerNow:0,ffOn:0,ffReason:0,ffUnlatches:0,ffGapTick:-1,lead:0,leadSwaps:0,leadSwapsAfterHalf:0,maxProgress:0,ffHold:0,fastForwardTick:-1,slowMoTick:-1,breathTick:-1},result:{winner:0,reason:0,decidedTick:-1,endTick:-1,gap:-1,firstFinishTick:-1},log:Ef(128)};for(let e=0;e<d.cands.length;e++){let t=d.cands[e];Zf(g,Yf(g,t.x,t.y,t.v,1),e),g.cands.startX[e]=t.x,g.cands.startY[e]=t.y,g.cands.startV[e]=t.v,g.cands.profile[e]=t.profile,g.cands.hasFeeder[e]=+(t.feederX>=0)}for(let e=0;e<d.cands.length;e++){let t=d.cands[e];t.feederX>=0&&Yf(g,t.feederX,t.feederY,t.feederV,0)}for(let e=0;e<d.ambient.length;e++){let t=d.ambient[e];Yf(g,t.x,t.y,t.v,0)}let _=Gd(r.PREROLL_S*r.TICK_HZ);for(let e=0;e<_;e++)g.tick++,g.car.kmh=0,pp(g,g.streams.preroll,1),gp(g),vp(g),yp(g);return g.mode===`rollout`?Op(g):g.rivalAuto&&g.firstPicker===`rival`&&kp(g,2,wp(g)),g}function Op(e){e.phase=1,e.greenTick=e.tick,mf(e.log,e.tick,Z.GREEN,0,0,0)}function kp(e,t,n){if(e.phase!==0||e.mode!==`race`||n<0||n>=e.cands.count||e.picks[t]>=0)return!1;let r=t===1?2:1;return e.picks[r]!==n&&(e.picks[t]=n,mf(e.log,e.tick,Z.PICK,t,n,0),e.rivalAuto&&t===1&&e.picks[2]<0&&kp(e,2,wp(e)),e.picks[1]>=0&&e.picks[2]>=0&&Op(e),!0)}function Ap(e,t){if(e.phase===0){if(t?.picks)for(let n of t.picks)kp(e,vf(n.who),n.cand);return e}if(e.phase!==1)return e;e.tick++;let n=e.tick-e.greenTick;if(t?.knocks)for(let n=0;n<t.knocks.length;n++){let r=t.knocks[n];r.who===`rival`&&e.rivalAuto||cp(e,vf(r.who),r.x,r.y)}return Tp(e),e.car.kmh=pf(e,n),!e.car.antiStallLogged&&n*e.dt>e.p.ANTI_STALL_S&&(e.car.antiStallLogged=1,mf(e.log,e.tick,Z.ANTI_STALL,0,0,0)),op(e,n),pp(e,e.streams.rain,e.fx.rainMul),gp(e),vp(e),yp(e),e.fx.evap&&xp(e),e.mode===`rollout`?If(e):Lf(e),e}var jp=[`ambient`,`candidate`,`pearl`];function Mp(e,t=20){let n=e.drops,r=[];for(let e=0;e<n.n;e++){if(!n.alive[e])continue;let t=n.vx[e],i=n.vy[e];r.push({id:n.id[e],x:n.x[e],y:n.y[e],volume:n.v[e],radius:n.a[e],vx:t,vy:i,speed:Np(t,i),moving:n.moving[e]===1,kind:jp[n.kind[e]],cand:n.cand[e],held:n.held[e]>=0})}r.sort((e,t)=>e.id-t.id);let i=e.cands,a=[];for(let t=0;t<i.count;t++)a.push({index:t,dropId:i.dropId[t],state:i.state[t]===1?`finished`:i.state[t]===2?`out`:`racing`,finishTime:i.finishTime[t],outReason:gf[i.outReason[t]],startX:i.startX[t],startY:i.startY[t],startVolume:i.startV[t],profile:bf[i.profile[t]],owner:e.picks[1]===t?`player`:e.picks[2]===t?`rival`:null});let o=t=>t<0?-1:t*e.dt,s=e.result,c=s.winner===1?`player`:s.winner===2?`rival`:s.winner===3?`draw`:null,l=[];for(let t=0;t+2<e.glass.stickers.length;t+=3)l.push({x:e.glass.stickers[t],y:e.glass.stickers[t+1],r:e.glass.stickers[t+2]});return{simVersion:e.simVersion,seed:e.seed,variant:e.variant,light:e.light,glassKind:e.glass.kind,tick:e.tick,raceTime:Of(e),phase:_f[e.phase],carKmh:e.greenTick<0?0:pf(e,kf(e)),drops:r,candidates:a,picks:{player:e.picks[1],rival:e.picks[2]},knocksLeft:{player:e.knocks.left[1],rival:e.knocks.left[2]},knocksLocked:e.knocks.locked===1,events:e.events.map(t=>({type:t.type,phase:Sf[t.phase],warnTime:t.warnTick*e.dt,startTime:t.startTick*e.dt,endTime:t.endTick*e.dt,x:t.x,y:t.y})),creatures:e.creatures.filter(e=>e.state!==2||e.landTick>=0).map(e=>({kind:Cf[e.kind],x:e.x,y:e.y,r:e.r,landed:e.state===1})),stickers:l,director:{fastForward:e.director.ffOn===1,slowMo:e.director.slowMoTick>=0,breath:e.director.breathTick>=0,predictedGap:e.director.predictedGap,leadSwaps:e.director.leadSwaps,leadSwapsAfterHalf:e.director.leadSwapsAfterHalf},result:{decided:s.reason!==0,winner:c,reason:yf[s.reason],decidedTime:o(s.decidedTick),gap:s.gap},log:Ip(e,t)}}function Np(e,t){return Hd(e*e+t*t)}function Pp(e,t){return e.toFixed(t)}function Fp(e){return e===1?`you`:e===2?`brother`:`nobody`}function Ip(e,t){let n=e.log,r=[],i=n.count>t?n.count-t:0;for(let t=i;t<n.count;t++){let i=hf(n,t),a=n.tick[i],o=e.greenTick<0||a<e.greenTick?-1:(a-e.greenTick)*e.dt;r.push({tick:a,time:o,text:Lp(e,n.code[i],n.a[i],n.b[i],n.c[i])})}return r}function Lp(e,t,n,r,i){let a=t=>e.events[t]?.type??`?`,o=t=>Cf[e.creatures[t]?.kind??0];switch(t){case Z.GREEN:return`green light: race starts`;case Z.EVENT_WARN:return`warning: ${a(n)} coming`;case Z.EVENT_START:return`${a(n)} starts`;case Z.EVENT_END:return`${a(n)} ends`;case Z.FLY_LAND:return`fly lands at ${Pp(r,0)},${Pp(i,0)} mm`;case Z.FLY_NO_LAND:return`fly stays away: car at ${Pp(r,0)} km/h`;case Z.CREATURE_GONE:return`${o(n)} gone (${[`let go`,`knocked off`,`surfed off`,`carried drops away`,`never landed`][r]??`?`})`;case Z.LEAF_LAND:return`${Cf[i]??`leaf`} sticks, holding ${r} drops`;case Z.LEAF_SURF:return`${o(n)} surfs back with its drops`;case Z.LEAF_CARRY:return`${o(n)} peels off and takes its drops`;case Z.KNOCK:return`${Fp(n)} knock at ${Pp(r,1)},${Pp(i,1)} mm`;case Z.SCARE_OK:return`${Fp(n)} scared the ${o(r)} away`;case Z.SCARE_FAIL:return`the ${o(r)} holds on (miss ${i})`;case Z.JOLT:return`${Fp(n)} jolted drop #${r}${i>=0?` (candidate ${i})`:``}`;case Z.STOP_IT:return`"stop it!" (${Fp(n)} has no knocks left)`;case Z.KNOCK_LOCKED:return`${Fp(n)} knock ignored: final straight`;case Z.KNOCK_COOLDOWN:return`${Fp(n)} knock ignored: too soon`;case Z.PICK:return`${Fp(n)} picked drop ${r}`;case Z.MERGE_PICKED:return`candidate ${n} swallowed a drop (+${Pp(r,2)} uL)`;case Z.DROP_MERGE:return`drop #${n} absorbed drop #${r} (+${Pp(i,2)} uL)`;case Z.GULP:return`gulp! candidate ${n} swallowed candidate ${r}`;case Z.CAND_FINISH:return`candidate ${n} reached the seal at ${Pp(r,2)} s`;case Z.CAND_OUT:return`candidate ${n} out: ${gf[r]??`?`}`;case Z.LEAD_SWAP:return`lead swap: ${Fp(n)} ahead (${Pp(r*100,0)}% of the path)`;case Z.FAST_FORWARD:return`fast-forward (${wf[n]??`?`}${n===3?`, safe gap ${Pp(r,1)} s`:``})`;case Z.FF_OFF:return`fast-forward off: the race got close again (safe gap ${Pp(n,1)} s)`;case Z.SLOWMO:return`photo finish coming: slow motion (gap ${Pp(n,2)} s)`;case Z.BREATH:return`close finish: breath (gap ${Pp(n,2)} s)`;case Z.ANTI_STALL:return`faster road: +30 km/h`;case Z.HARD_END:return`"we are here!" 90 s hard end`;case Z.RESULT:return`result: ${n===1?`you win`:n===2?`brother wins`:`draw`} (${yf[r]??`?`})`;case Z.SPAWN_FULL:return`glass full: rain drop skipped`;case Z.LIGHTNING:return`lightning`;case Z.FINAL_STRAIGHT:return`final straight: knocks locked`;case Z.BLOCKED:return`candidate ${n} blocked by the ${o(r)}`;case Z.SWALLOW_CAND:return`candidate ${n} swallowed unpicked candidate ${r} (+${Pp(i,2)} uL)`;case Z.RIVAL_NOTICE:return`brother noticed the ${o(n)}${r?``:` (will not knock)`}`;default:return`event ${t}`}}var Rp=new DataView(new ArrayBuffer(8));function zp(e,t){return Jd(e^(t|0),16777619)}function Bp(e,t){return Number.isNaN(t)&&(t=-123456789),Rp.setFloat64(0,t,!0),e=zp(e,Rp.getUint32(0,!0)),zp(e,Rp.getUint32(4,!0))}function Vp(e,t){return zp(zp(zp(zp(e,t.a),t.b),t.c),t.d)}function Hp(e){let t=-2128831035;t=zp(t,e.tick),t=zp(t,e.greenTick),t=zp(t,e.phase);let n=e.streams;t=Vp(t,n.rain),t=Vp(t,n.events),t=Vp(t,n.car),t=Vp(t,n.rival),t=zp(t,e.knockSeed),t=Vp(t,n.preroll);let r=e.drops;t=zp(t,r.n),t=zp(t,r.nextId);for(let e=0;e<r.n;e++)r.alive[e]&&(t=zp(t,r.id[e]),t=Bp(t,r.x[e]),t=Bp(t,r.y[e]),t=Bp(t,r.v[e]),t=Bp(t,r.a[e]),t=zp(t,r.moving[e]|r.kind[e]<<1|r.cand[e]+1<<4|r.held[e]+1<<8),t=zp(t,r.burst[e]),t=zp(t,r.jolt[e]),t=Bp(t,r.shedAcc[e]));let i=e.glass.wet;for(let e=0;e<i.length;e++)i[e]!==0&&(t=Bp(zp(t,e),i[e]));let a=e.cands;for(let e=0;e<a.count;e++)t=zp(t,a.state[e]),t=zp(t,a.finishTick[e]),t=Bp(t,a.finishTime[e]),t=zp(t,a.outReason[e]);t=zp(t,e.picks[1]),t=zp(t,e.picks[2]),t=zp(t,e.knocks.left[1]),t=zp(t,e.knocks.left[2]),t=zp(t,e.knocks.locked);for(let n=0;n<e.creatures.length;n++){let r=e.creatures[n];t=zp(t,r.state),t=Bp(t,r.x),t=zp(t,r.failedKnocks)}return t=zp(t,e.result.winner),t=zp(t,e.result.reason),t=zp(t,e.result.decidedTick),t=Bp(t,e.director.emaVx[1]),t=Bp(t,e.director.emaVx[2]),t=zp(t,e.director.leadSwaps),(t>>>0).toString(16).padStart(8,`0`)}function Up(e,t){let n=e.candidates.find(e=>e.owner===`player`),r=e.drops.find(e=>e.id===n?.dropId),i=new Map(e.candidates.map(e=>[e.dropId,e.owner])),a=e.creatures.filter(e=>e.landed).map((e,n)=>({key:`obstacle-${n}`,u:e.x/t.W,v:e.y/t.H,kind:e.kind,priority:1}));for(let n of e.drops){if(n.moving||n.held)continue;let e=i.get(n.id),o=r?Math.hypot(n.x-r.x,n.y-r.y):1/0;!e&&n.kind!==`candidate`&&(o>50||n.volume<.15)||a.push({key:`drop-${n.id}`,id:n.id,u:n.x/t.W,v:n.y/t.H,kind:e===`player`?`own`:e===`rival`?`rival`:`other`,priority:e===`player`?0:e===`rival`?3:2,distance:o,volume:n.volume})}return a.sort((e,t)=>e.priority-t.priority||(e.distance??0)-(t.distance??0)||(t.volume??0)-(e.volume??0)),a}function Wp(e,t=`player`){let n=e.candidates.find(e=>e.owner===t),r=e.drops.find(e=>e.id===n?.dropId);return!n||!r?{state:n?.state||`pick`,speed:null,volumeRatio:null}:{state:r.held?`held`:r.moving?`moving`:`stuck`,speed:r.speed,volumeRatio:r.volume/n.startVolume,dropId:r.id}}function Gp(e,t){if(e)for(let n of e.effects||[]){if(n.type!==`jolt`)continue;let r=t.drops.find(e=>e.id===n.dropId);t.raceTime-e.time<=1.05&&r?.moving&&(n.released=!0),t.raceTime-e.time>=1.05&&!n.released&&(n.resisted=!0)}}function Kp(e,t,n){let r=[],i=(e,t,i,a,o)=>r.push({kind:e,u:t/n.W,v:i/n.H,ru:a/n.W,rv:a/n.H,color:o});for(let e=0;e<t.smudges.length;e+=3)i(`smudge`,t.smudges[e],t.smudges[e+1],t.smudges[e+2],`#67583b`);for(let e=0;e<t.specks.length;e+=3)i(`speck`,t.specks[e],t.specks[e+1],t.specks[e+2],`#5b4a33`);for(let t of e.stickers)i(`sticker`,t.x,t.y,t.r,`#a1a373`);for(let t of e.creatures)t.landed&&i(`creature`,t.x,t.y,t.r,t.kind===`fly`?`#1b231f`:t.kind===`paper`?`#ddd4bd`:`#6d7b43`);return r}var qp=class{constructor(e=`7`){this.reset(e)}reset(e=this.seed){return this.seed=String(e),this.race=Dp(this.seed,{light:`grey`}),this.previous=this.current=Mp(this.race,12),this.distance=0,this.previousDistance=0,this.trails=new Map,this.actions=[],this.pending=void 0,this.lastPlayerKnock=-100,this.lastRivalKnock=-100,this.lastKnocks={player:null,rival:null},this.trackedDrops=new Map,this.lastGrowth=null,this.remember(),this.current}choose(e){if(this.current.phase!==`pick`)return!1;let t={picks:[{who:`player`,cand:e}]};return Ap(this.race,t),this.actions.push({tick:this.race.tick,input:t}),this.previous=this.current=Mp(this.race,12),this.current.picks.player===e}knock(e,t){this.current.phase===`racing`&&(this.pending={knocks:[{who:`player`,x:e*this.race.p.W,y:t*this.race.p.H}]})}advanceOne(){if(this.current.phase!==`racing`)return;this.previous=this.current,this.previousDistance=this.distance;let e=this.pending;this.pending=void 0,e&&this.actions.push({tick:this.race.tick+1,input:e});let t=this.race.log.total;Ap(this.race,e),this.current=Mp(this.race,12),this.distance+=this.current.carKmh/3.6*this.race.dt;let n=this.race.log,r=n.total-t,i=!1;for(let e=Math.max(0,n.count-r);e<n.count;e++){let t=hf(n,e),r=n.code[t],a=n.a[t]===1?`player`:`rival`;if(r===Z.KNOCK)this.lastKnocks[a]={who:a,u:n.b[t]/this.race.p.W,v:n.c[t]/this.race.p.H,time:this.current.raceTime,tick:this.race.tick,effects:[]},a===`player`?this.lastPlayerKnock=this.current.raceTime:this.lastRivalKnock=this.current.raceTime;else if([Z.JOLT,Z.SCARE_OK,Z.SCARE_FAIL].includes(r)){let e=this.lastKnocks[a];if(!e||e.tick!==this.race.tick)continue;if(r===Z.JOLT){let r=this.current.candidates.find(e=>e.index===n.c[t]),i=this.previous.drops.find(e=>e.id===n.b[t]);e.effects.push({type:`jolt`,dropId:n.b[t],owner:r?.owner||null,u:i?.x/this.race.p.W,v:i?.y/this.race.p.H,released:!1,resisted:!1}),a===`player`&&this.trackedDrops.set(n.b[t],{sourceId:n.b[t],id:n.b[t],ownerAtTap:r?.owner||null,time:this.current.raceTime})}else e.effects.push({type:r===Z.SCARE_OK?`scare-ok`:`scare-fail`,creature:n.b[t]})}else if(r===Z.DROP_MERGE)for(let e of this.trackedDrops.values())e.id===n.b[t]?(e.id=n.a[t],i=!0):e.id===n.a[t]&&(i=!0)}if(i){let e=this.current.candidates.find(e=>e.owner===`player`);for(let t of this.trackedDrops.values())t.ownerAtTap!==`player`&&t.id===e?.dropId&&!t.joined&&(t.joined=!0,this.lastGrowth={time:this.current.raceTime,sourceId:t.sourceId,id:t.id})}Gp(this.lastKnocks.player,this.current),Gp(this.lastKnocks.rival,this.current),this.race.tick%6==0&&this.remember()}remember(){for(let e of this.current.drops){if(e.kind!==`candidate`)continue;let t=this.trails.get(e.id)||[];t.push([e.x/this.race.p.W,e.y/this.race.p.H]),t.length>24&&t.shift(),this.trails.set(e.id,t)}}drawing(e=1){let t=this.current,n=this.previous,r=new Map(n.drops.map(e=>[e.id,e])),i=(t,n)=>t+(n-t)*e,a=new Map(t.candidates.map(e=>[e.dropId,e.owner])),o=0,s=t.drops.filter(e=>e.kind===`candidate`||o++<150).map(e=>{let n=r.get(e.id)||e,o=0;for(let n of Object.values(this.lastKnocks)){let r=n?t.raceTime-n.time-(n.who===`player`?.16:0):1/0;r>=0&&r<.45&&n.effects.some(t=>t.type===`jolt`&&t.dropId===e.id)&&(o=Math.sin(r/.45*Math.PI*5)*.12*(1-r/.45))}return{id:e.id,x:i(n.x,e.x)/this.race.p.W,y:i(n.y,e.y)/this.race.p.H,radius:e.radius/this.race.p.W,owner:a.get(e.id)||(e.cand>=0?`candidate`:`ambient`),trail:this.trails.get(e.id)||[],shiver:o}}),c=t.events.find(e=>e.phase===`active`&&(e.type===`bump`||e.type===`brake`)),l=i(Math.max(0,n.raceTime),Math.max(0,t.raceTime)),u=e=>this.lastKnocks[e]?{...this.lastKnocks[e],age:Math.max(0,l-this.lastKnocks[e].time)}:null,d=this.rivalWindup();return{time:l,distance:i(this.previousDistance,this.distance),speed:i(n.carKmh,t.carKmh)/3.6,event:c?.type||`smooth`,eventAge:c?Math.max(0,t.raceTime-c.startTime):0,playerGesture:Math.max(0,1-(t.raceTime-this.lastPlayerKnock)/.72),brotherGesture:t.phase===`pick`?.45:Math.max(0,1-(t.raceTime-this.lastRivalKnock)/.5),playerKnock:u(`player`),rivalKnock:u(`rival`),rivalWindup:d,tappedDrops:[...this.trackedDrops.values()].filter(e=>t.drops.some(t=>t.id===e.id)).map(e=>({...e})),lastGrowth:this.lastGrowth?{...this.lastGrowth}:null,phase:t.phase,drops:s,finish:this.race.p.FINISH_X/this.race.p.W}}rivalWindup(){let e=this.race,t=e.p;if(!e.rivalAuto||e.knocks.left[2]<=0||e.knocks.locked||this.current.phase!==`racing`)return null;let n=e.tick-e.greenTick,r=e.rival,i=[];if(r.willKnock&&r.knockTick>=n){let a=e.creatures[r.noticed];a?.state===1&&i.push({x:a.x,y:a.y,remaining:(r.knockTick-n)/t.TICK_HZ})}let a=e.picks[2];if(a<0)return null;let o=e.cands.slot[a],s=e.drops,c=(this.current.carKmh-this.previous.carKmh)/e.dt,l=e.car.kmh>=t.RIVAL_STUCK_MIN_KMH?0:c>0?(t.RIVAL_STUCK_MIN_KMH-e.car.kmh)/c:1/0,u=Math.max(0,t.RIVAL_STUCK_S-s.stuck[o]/t.TICK_HZ,l);!r.joltedStuck&&!s.moving[o]&&s.held[o]<0&&u>=0&&i.push({x:s.x[o],y:s.y[o],remaining:u}),i.sort((e,t)=>e.remaining-t.remaining);let d=i[0];if(!d||d.remaining>.55)return null;let f={...e.streams.rival},p=sf(f,t.RIVAL_RANDOM_KNOCK),m=p?X(f,40,t.FINISH_X):d.x,h=p?X(f,10,t.H-10):d.y;return{u:sp(m,t.KNOCK_QUANT_MM)/t.W,v:sp(h,t.KNOCK_QUANT_MM)/t.H,age:-Math.max(e.dt,d.remaining)}}state(){return{seed:this.seed,hash:Hp(this.race),snapshot:this.current,distance:this.distance,actions:this.actions}}};function Jp(e,t,n){return e.windowPoint(t,n)}function Yp(e,t,n,r,i=!1){let a=e.projectWindow(n.u,n.v),o=t.getBoundingClientRect(),s={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[r];return s&&Jp(e,o.left+a.x+s[0]*(i?2:12),o.top+a.y+s[1]*(i?2:12))||n}var Xp={it:{title:`drops. - Una prova`,language:`Lingua`,entryTitle:`Una corsa sul finestrino.`,story:`Ispirato alle gare tra gocce immaginate durante i viaggi in auto. Sei sul sedile posteriore con il tuo fratellino. Scegliete una goccia a testa sul finestrino destro: vince la prima che raggiunge il traguardo.`,knockContext:`Quando dai un colpo, vedi la tua mano. Anche il tuo fratellino può battere sul vetro.`,scope:`Proviamo scelta, colpi e ritmo. Personaggi e finitura sono provvisori. Si gioca senza audio.`,step1:`Scegli una goccia con il suo numero.`,step2:`Hai tre colpi: puoi sbloccare una goccia ferma o provare a liberare un ostacolo. Tocca il punto scelto sul vetro. Anche tuo fratello può bussare.`,begin:`Entra nella prova`,local:`Prova del gioco`,pick:`Scegli una goccia`,follow:`Segui la tua stella.`,won:`La tua goccia ha vinto.`,lost:`Ha vinto la goccia di tuo fratello.`,draw:`Pareggio.`,pause:`Pausa`,resume:`Riprendi`,paused:`Corsa in pausa.`,feedbackPause:`Corsa in pausa per scrivere. Premi Riprendi quando vuoi.`,hiddenPause:`Corsa in pausa dopo il cambio di scheda.`,languagePause:`Lingua cambiata. La corsa è in pausa.`,tap:`Dai un colpo`,again:`Un’altra corsa`,feedback:`Dai un riscontro`,closeFeedback:`Chiudi il questionario`,panelTitle:`Come ti è sembrata?`,panelHint:`Quando vuoi, puoi scrivere qui senza cambiare pagina.`,panelScope:`Ci interessano i comandi e la corsa. La finitura verrà dopo.`,panelOpenHint:`Aprire durante la corsa la mette in pausa.`,formTitle:`Questionario sulla prova`,own:`La tua goccia`,rival:`Quella di tuo fratello`,drop:`Goccia`,knocks:`colpi rimasti`,oneKnock:`colpo rimasto`,knockGiven:`Colpo dato.`,rivalKnock:`Il tuo fratellino batte sul vetro.`,rivalCount:e=>`${e} ${e===1?`colpo`:`colpi`}`,notGlass:`Scegli un punto visibile sul vetro.`,wait:`Aspetta un momento prima del prossimo colpo.`,locked:`Ultimo tratto: i colpi sono chiusi.`,empty:`Hai usato tutti e tre i colpi.`,nextPoint:`Cambia punto`,keys:`Frecce: mira. Spazio: colpo. Q/E: scegli bersaglio. P: pausa.`,help:`Comandi`,hideHelp:`Chiudi i comandi`,tapHint:`Tocca il vetro per battere lì. Il pulsante usa il mirino.`,reduced:`Movimento ridotto`,finishHint:`Puoi fare un’altra corsa o lasciare un riscontro.`,backToGame:`Torna alla corsa`,bump:`Una buca.`,brake:`L’auto frena.`,fly:`Una mosca sul vetro.`,leaf:`Una foglia sul vetro.`,paper:`Carta sul vetro.`,downpour:`La pioggia aumenta.`,clearing:`Il cielo si schiarisce.`,noGraphics:`Grafica e persone ancora in lavorazione.`,error:`La scena non è partita. Ricarica la pagina.`,targetCanvas:`Gocce sul finestrino posteriore destro. Le frecce muovono il mirino; Spazio dà un colpo.`,selectLabel:`Scegli la goccia`,ackLanguage:`Le risposte già scritte restano nel questionario.`},en:{title:`drops. - A playtest`,language:`Language`,entryTitle:`A race on the window.`,story:`Inspired by imaginary raindrop races on car journeys. You're in the back seat with your little brother. You each pick a drop on the right window. The first to reach the finish wins.`,knockContext:`When you tap the glass, you see your own hand. Your little brother can tap the glass too.`,scope:`We are testing choices, taps and pace. Characters and visual polish are unfinished. This test has no sound.`,step1:`Choose a drop by its number.`,step2:`You have three taps to try to free a still drop or clear an obstacle. Tap or click your chosen point on the glass. Your brother can tap too.`,begin:`Start the playtest`,local:`Playtest`,pick:`Choose a drop`,follow:`Follow your star.`,won:`Your drop won.`,lost:`Your brother’s drop won.`,draw:`A draw.`,pause:`Pause`,resume:`Resume`,paused:`Race paused.`,feedbackPause:`Race paused while you write. Press Resume when you want to continue.`,hiddenPause:`Race paused after changing tabs.`,languagePause:`Language changed. The race is paused.`,tap:`Tap the glass`,again:`Race again`,feedback:`Give feedback`,closeFeedback:`Close feedback`,panelTitle:`How did it feel?`,panelHint:`You can write here whenever you want, without changing pages.`,panelScope:`We are asking about the controls and the race. Visual polish comes later.`,panelOpenHint:`Opening this during a race pauses it.`,formTitle:`Playtest feedback`,own:`Your drop`,rival:`Your brother’s drop`,drop:`Drop`,knocks:`taps left`,oneKnock:`tap left`,knockGiven:`Tap sent.`,rivalKnock:`Your little brother taps the glass.`,rivalCount:e=>`${e} ${e===1?`tap`:`taps`}`,notGlass:`Choose a visible point on the glass.`,wait:`Wait a moment before the next tap.`,locked:`Final stretch: no more taps.`,empty:`You have used all three taps.`,nextPoint:`Change aim`,keys:`Arrows: aim. Space: tap. Q/E: choose a target. P: pause.`,help:`Controls`,hideHelp:`Close controls`,tapHint:`Tap the glass to hit that point. The button taps at the crosshair.`,reduced:`Reduced motion`,finishHint:`You can race again or leave feedback.`,backToGame:`Back to the race`,bump:`A bump.`,brake:`The car brakes.`,fly:`A fly on the glass.`,leaf:`A leaf on the glass.`,paper:`Paper on the glass.`,downpour:`Heavier rain.`,clearing:`The sky clears.`,noGraphics:`Characters and visual polish are unfinished.`,error:`The scene did not start. Reload the page.`,targetCanvas:`Drops on the rear right window. Arrow keys move the aim; Space taps the glass.`,selectLabel:`Choose drop`,ackLanguage:`Your existing answers stay in the questionnaire.`}},Zp={it:{speed:`Velocità`,speedUnit:`millimetri al secondo`,size:`Volume`,sizeUnit:`Rispetto alla partenza`,pick:`Scegli la tua goccia`,moving:`Scorre`,stuck:`Ferma`,held:`Trattenuta`,finished:`Arrivata`,out:`Fuori corsa`,target:`Scegli bersaglio`,targetHint:`Il colpo può sbloccare una goccia ferma o liberare un ostacolo. Non accelera le gocce che scorrono.`,targetOwn:`La tua goccia è ferma.`,targetRival:`La goccia di tuo fratello è ferma.`,targetOther:`Un’altra goccia ferma. Potrebbe unirsi ad altre, ma non è garantito.`,targetObstacle:`Un ostacolo sul vetro.`,noTarget:`Nessun bersaglio adatto visibile ora. Puoi aspettare.`,miss:`Colpo sul vetro: nessuna goccia ferma o ostacolo vicino.`,joltOwn:`Hai scosso la tua goccia.`,joltOther:`Hai scosso un’altra goccia.`,released:`Si è mossa.`,resisted:`Non è partita subito.`,waiting:`Guarda se riparte.`,scareOk:`Ostacolo liberato.`,scareFail:`L’ostacolo resiste.`,rivalTap:`Tuo fratello dà un colpo.`,merge:`La goccia che hai scosso si è unita alla tua.`},en:{speed:`Speed`,speedUnit:`millimetres per second`,size:`Volume`,sizeUnit:`Compared with the start`,pick:`Choose your drop`,moving:`Moving`,stuck:`Still`,held:`Held`,finished:`Finished`,out:`Out of the race`,target:`Choose a target`,targetHint:`A tap can free a still drop or clear an obstacle. It does not speed up a moving drop.`,targetOwn:`Your drop is still.`,targetRival:`Your brother’s drop is still.`,targetOther:`Another still drop. It might merge with others, but this is not guaranteed.`,targetObstacle:`An obstacle on the glass.`,noTarget:`No suitable visible target right now. You can wait.`,miss:`Tap on the glass: no still drop or obstacle nearby.`,joltOwn:`You shook your drop.`,joltOther:`You shook another drop.`,released:`It moved.`,resisted:`It did not start moving straight away.`,waiting:`Watch to see if it moves.`,scareOk:`Obstacle cleared.`,scareFail:`The obstacle holds on.`,rivalTap:`Your brother taps the glass.`,merge:`The drop you shook merged with yours.`}};function Qp(e,t){let n=Zp[t];return!e||!e.effects?.length?n.miss:e.effects.map(e=>e.type===`jolt`?`${e.owner===`player`?n.joltOwn:n.joltOther} ${e.released?n.released:e.resisted?n.resisted:n.waiting}`:e.type===`scare-ok`?n.scareOk:n.scareFail).join(` `)}var Q=e=>document.querySelector(e),$p=e=>[...document.querySelectorAll(e)],em=new URLSearchParams(location.search),tm=e=>e===`it`||e===`en`,nm=tm(em.get(`lang`))?em.get(`lang`):null,rm,$,im=!1,am=!0,om=``,sm={u:.5,v:.5},cm=null,lm=0,um=performance.now(),dm=!0,fm=7,pm=!1,mm=!1,hm=``,gm=!1,_m=-100,vm=-1,ym=``,bm=Q(`#feedback-frame`),xm=Q(`#scene`),Sm=e=>Xp[nm||`en`][e];function Cm(){return{build:`friends-2026-10-18-v7-gestures`,seed:$?.seed||`7`,phase:$?.current.phase||`pick`}}function wm(){mm&&bm.contentWindow.postMessage({type:`drops-playtest-context`,context:Cm()},location.origin)}function Tm(){mm=!0,wm(),bm.contentWindow.postMessage({type:`drops-playtest-language`,language:nm},location.origin)}function Em(e){if(!tm(e))return;let t=nm&&nm!==e;nm=e,document.documentElement.lang=e,document.title=Sm(`title`),Q(`#language`).value=e;for(let e of $p(`[data-copy]`))e.textContent=Sm(e.dataset.copy);Q(`#help`).textContent=Sm(Q(`#keyboard-help`).hidden?`help`:`hideHelp`),Q(`#feedback-frame`).title=Sm(`formTitle`),Q(`#language`).setAttribute(`aria-label`,Sm(`language`)),xm.setAttribute(`aria-label`,Sm(`targetCanvas`)),xm.setAttribute(`aria-describedby`,`short-help keyboard-help`),Q(`#language-step`).hidden=!0,Q(`#scope-step`).hidden=!1;let n=new URL(location.href);n.searchParams.set(`lang`,nm),history.replaceState(null,``,n),t&&im&&(Mm(`languagePause`),mm&&bm.contentWindow.postMessage({type:`drops-playtest-language`,language:nm},location.origin)),im&&Rm()}for(let e of $p(`[data-language]`))e.onclick=()=>Em(e.dataset.language);Q(`#language`).onchange=()=>Em(Q(`#language`).value);function Dm(){if(!im){im=!0,Q(`#entry`).hidden=!0,Q(`#app`).hidden=!1,window.scrollTo({top:0,left:0,behavior:`instant`});try{rm=Vd(xm),rm.setView(`right`),rm.setMood(`night`),$=new qp(`7`),Q(`#reduced`).checked=!1;let e=new URL(`../feedback-study/`,location.href);e.searchParams.set(`lang`,nm),e.searchParams.set(`embed`,`1`),document.documentElement.dataset.feedbackDelivery===`file`&&e.searchParams.set(`delivery`,`file`),e.hash=location.hash,em.get(`collector`)&&e.searchParams.set(`collector`,em.get(`collector`)),bm.src=e.href,bm.onload=Tm,new ResizeObserver(Om).observe(xm),Om(),Rm(),zm(),um=performance.now(),requestAnimationFrame(Vm),requestAnimationFrame(()=>{$.current.phase===`pick`&&(window.scrollTo({top:0,left:0,behavior:`instant`}),Q(`#choices button`)?.focus({preventScroll:!0}))})}catch(e){throw Q(`#race-status`).textContent=Sm(`error`),e}}}Q(`#begin`).onclick=Dm;function Om(){if(!rm)return;let e=xm.getBoundingClientRect();e.width&&e.height&&rm.resize(Math.round(e.width),Math.round(e.height)),dm=!0}function km(e){$.choose(e)&&(am=!1,om=``,lm=0,um=performance.now(),Am(),dm=!0,Rm(),wm(),xm.focus({preventScroll:!0}))}function Am(){let e=$.current.candidates.find(e=>e.owner===`player`),t=$.current.drops.find(t=>t.id===e?.dropId);t&&(sm={u:t.x/$.race.p.W,v:t.y/$.race.p.H})}function jm(e=1){let t=Up($.current,$.race.p).filter(e=>rm.windowPointVisible(e.u,e.v));if(!t.length){hm=`noTarget`,ym=``,Rm();return}vm=(t.findIndex(e=>e.key===ym)+e+t.length)%t.length;let n=t[vm];sm={u:n.u,v:n.v},ym=n.key,hm=n.kind===`own`?`targetOwn`:n.kind===`rival`?`targetRival`:n.kind===`other`?`targetOther`:`targetObstacle`,dm=!0,Rm()}function Mm(e=`paused`){am=!0,om=e,lm=0,um=performance.now(),dm=!0,Rm()}function Nm(){$.current.phase===`racing`&&(am=!1,om=``,lm=0,um=performance.now(),dm=!0,Rm())}function Pm(e){pm=!!e,Q(`#feedback-body`).hidden=!e,Q(`#panel-intro`).hidden=e,document.body.classList.toggle(`feedback-open`,e),Q(`#feedback-toggle`).setAttribute(`aria-expanded`,String(e)),e&&($.current.phase===`racing`&&Mm(`feedbackPause`),wm(),innerWidth<1100&&Q(`#feedback-panel`).scrollIntoView({behavior:`instant`,block:`start`})),Rm()}Q(`#feedback-toggle`).onclick=()=>Pm(!pm),Q(`#back-to-game`).onclick=()=>{Pm(!1),Q(`.game`).scrollIntoView({behavior:`instant`,block:`start`}),xm.focus({preventScroll:!0})},window.addEventListener(`message`,e=>{e.origin===location.origin&&e.source===bm.contentWindow&&e.data&&e.data.type===`drops-feedback-ready`&&Tm()});function Fm(){if(!$||$.current.phase!==`racing`)return;let e=$.current;am?(hm=`paused`,Rm()):e.knocksLocked?(hm=`locked`,Rm()):e.knocksLeft.player<=0?(hm=`empty`,Rm()):gm||e.raceTime-_m<1?(hm=`wait`,Rm()):rm.windowPointVisible(sm.u,sm.v)?($.knock(sm.u,sm.v),gm=!0,dm=!0):(hm=`notGlass`,Rm())}function Im(){let e=$.current.phase,t=$.current.knocksLeft.player;$.advanceOne(),gm&&($.current.knocksLeft.player<t?(_m=$.current.raceTime,hm=`knockGiven`):hm=`wait`,gm=!1,Rm(),wm()),e!==$.current.phase&&(am=!0,$.current.phase===`done`&&(hm=``),Rm(),wm())}function Lm(){$.reset(String(++fm)),am=!0,om=``,lm=0,gm=!1,hm=``,_m=-100,vm=-1,ym=``,dm=!0,Rm(),wm()}Q(`#again`).onclick=Lm,Q(`#pause`).onclick=()=>am?Nm():Mm(),Q(`#tap`).onclick=Fm,Q(`#target`).onclick=()=>jm(),Q(`#help`).onclick=()=>{let e=Q(`#keyboard-help`).hidden;Q(`#keyboard-help`).hidden=!e,Q(`#help`).setAttribute(`aria-expanded`,String(e)),Q(`#help`).textContent=Sm(e?`hideHelp`:`help`),Q(`#short-help`).hidden=e},Q(`#reduced`).onchange=()=>{dm=!0},xm.addEventListener(`pointerdown`,e=>{if(!e.isPrimary){cm=null;return}if(e.button!==0)return;let t=rm?.windowPoint(e.clientX,e.clientY);t&&(e.preventDefault(),xm.focus({preventScroll:!0}),cm=e.pointerId,sm=t,xm.setPointerCapture(e.pointerId),dm=!0)}),xm.addEventListener(`pointermove`,e=>{if(e.pointerId!==cm)return;let t=rm.windowPoint(e.clientX,e.clientY);t&&(sm=t,dm=!0)}),xm.addEventListener(`pointerup`,e=>{if(e.pointerId!==cm)return;cm=null,xm.releasePointerCapture(e.pointerId);let t=rm.windowPoint(e.clientX,e.clientY);if(t){if(sm=t,$.current.phase===`pick`){let t=xm.getBoundingClientRect(),n=null,r=44;for(let i of $.current.candidates){let a=$.current.drops.find(e=>e.id===i.dropId);if(!a)continue;let o=rm.projectWindow(a.x/$.race.p.W,a.y/$.race.p.H),s=Math.hypot(o.x-e.clientX+t.left,o.y-e.clientY+t.top);o.visible&&s<r&&(n=i.index,r=s)}n!==null&&km(n)}else Fm();dm=!0}}),xm.addEventListener(`pointercancel`,()=>{cm=null}),xm.addEventListener(`keydown`,e=>{e.key.startsWith(`Arrow`)?(e.preventDefault(),sm=Yp(rm,xm,sm,e.key,e.shiftKey),dm=!0):e.key===` `?(e.preventDefault(),e.repeat||Fm()):[`q`,`e`].includes(e.key.toLowerCase())?(e.preventDefault(),e.repeat||jm(e.key.toLowerCase()===`q`?-1:1)):e.key.toLowerCase()===`p`&&(e.preventDefault(),e.repeat||(am?Nm():Mm()))}),document.addEventListener(`visibilitychange`,()=>{im&&document.hidden&&$.current.phase===`racing`&&Mm(`hiddenPause`),um=performance.now()});function Rm(){if(!$)return;let e=$.current,t=e.phase===`pick`,n=e.phase===`done`,r=e.knocksLeft.player,i=t?Sm(`pick`):n?e.result.winner===`player`?Sm(`won`):e.result.winner===`rival`?Sm(`lost`):Sm(`draw`):Sm(am?`paused`:`follow`);Q(`#race-status`).textContent!==i&&(Q(`#race-status`).textContent=i),Q(`#remaining`).textContent=`${r} ${Sm(r===1?`oneKnock`:`knocks`)}`,Q(`#rival-count`).textContent=`· ${Xp[nm].rivalCount(e.knocksLeft.rival)}`;let a=$.lastKnocks.player;Q(`#remaining`).dataset.tapRecent=String(!!a&&e.raceTime-a.time<.8);let o=Zp[nm],s=hm===`knockGiven`?Qp(a,nm):hm?o[hm]||Sm(hm):``;Q(`#receipt`).textContent!==s&&(Q(`#receipt`).textContent=s),Q(`#short-help`).textContent=t?Sm(`step1`):n?Sm(`finishHint`):Zp[nm].targetHint,Q(`#pause`).textContent=Sm(am?`resume`:`pause`),Q(`#pause`).disabled=t||n,Q(`#target`).textContent=o.target,Q(`#tap-rules`).textContent=o.targetHint;let c=Wp(e),l=e=>new Intl.NumberFormat(nm,{maximumFractionDigits:1,minimumFractionDigits:1}).format(e);Q(`#drop-motion`).textContent=o[c.state]||o.pick,Q(`#speed-label`).textContent=o.speed,Q(`#speed-unit`).textContent=o.speedUnit,Q(`#size-label`).textContent=o.size,Q(`#size-unit`).textContent=o.sizeUnit,Q(`#drop-speed`).textContent=c.speed===null?`-`:l(c.speed),Q(`#drop-size`).textContent=c.volumeRatio===null?`-`:`×`+l(c.volumeRatio),Q(`.drop-reading`).setAttribute(`aria-label`,Sm(`own`)),Q(`#tap`).disabled=t||n||am||r<=0||e.knocksLocked,Q(`#target`).disabled=t||n,Q(`#again`).disabled=t,Q(`#feedback-toggle`).textContent=Sm(pm?`closeFeedback`:`feedback`),Q(`#pause-banner`).hidden=t||n||!am,Q(`#pause-banner`).textContent=Sm(om||`paused`);let u=Q(`#choices`),d=Q(`#candidate-labels`);if(u.hidden=d.hidden=!t,Q(`.actions`).hidden=t,u.setAttribute(`aria-label`,Sm(`pick`)),t){if(u.childElementCount!==e.candidates.length){u.replaceChildren(),d.replaceChildren();for(let t of e.candidates){let e=document.createElement(`button`);e.onclick=()=>km(t.index),u.append(e);let n=document.createElement(`span`);n.textContent=String(t.index+1),n.dataset.candidate=t.index,n.setAttribute(`aria-hidden`,`true`),d.append(n)}}[...u.children].forEach((e,t)=>e.textContent=`${Sm(`drop`)} ${t+1}`)}let f=e.events.find(e=>e.phase===`active`),p=e.creatures.find(e=>e.landed),m=$.lastKnocks.rival,h=$.lastGrowth,g=h&&e.raceTime-h.time<3;Q(`.drop-reading`).dataset.growing=String(!!g);let _=g?o.merge:m&&e.raceTime-m.time<1.2?Sm(`rivalKnock`):p?Sm(p.kind):f&&Xp[nm][f.type]?Sm(f.type):``;Q(`#game-event`).textContent!==_&&(Q(`#game-event`).textContent=_)}function zm(){if(!rm)return;let e=$.state().hash,t=$.current,n=$.drawing(am||t.phase!==`racing`?1:lm/$.race.dt);rm.render({...n,glassMarks:Kp(t,$.race.glass,$.race.p),roadSeed:Number($.seed),smoke:!1,glare:!1,reducedMotion:Q(`#reduced`).checked});let r=xm.getBoundingClientRect(),i=Q(`#overlay`);i.setAttribute(`viewBox`,`0 0 ${r.width} ${r.height}`);let a=``,o=``,s=``;for(let e of[n.playerKnock,n.rivalKnock]){let t=e?.who===`player`?.16:0,n=t+.7;if(!e||e.age<t||e.age>n||!rm.windowPointVisible(e.u,e.v))continue;let r=rm.projectWindow(e.u,e.v);if(!r.visible)continue;let i=Math.min(1,(e.age-t)/.03)*Math.min(1,(n-e.age)/.25),a=e.who===`player`?`#ffe0a0`:`#b9e3ff`;s+=`<g data-tap-who="${e.who}" opacity="${i}" stroke="${a}" fill="none" stroke-width="2.1"><circle cx="${r.x}" cy="${r.y}" r="8"/><path d="M ${r.x-13},${r.y} h -4 M ${r.x+13},${r.y} h 4 M ${r.x},${r.y-13} v -4 M ${r.x},${r.y+13} v 4"/><circle cx="${r.x}" cy="${r.y}" r="2" fill="${a}" stroke="none"/></g>`}for(let e of n.tappedDrops||[]){if(e.joined||e.ownerAtTap===`player`)continue;let n=t.drops.find(t=>t.id===e.id);if(!n)continue;let i=n.x/$.race.p.W,a=n.y/$.race.p.H;if(!rm.windowPointVisible(i,a))continue;let o=rm.projectWindow(i,a),c=Math.max(5,Math.min(12,n.radius/$.race.p.W*r.width+3));s+=`<circle data-tracked-drop="${e.sourceId}" cx="${o.x}" cy="${o.y}" r="${c}" stroke="#efb45f" stroke-width="1.4" stroke-dasharray="2 3" fill="none"/>`}let c=[[0,0],[1,0],[1,1],[0,1]].map(([e,t])=>{let n=rm.projectWindow(e,t);return`${n.x},${n.y}`}).join(` `),l=rm.projectWindow(sm.u,sm.v);if(t.phase===`racing`&&l.visible&&rm.windowPointVisible(sm.u,sm.v)&&(a+=`<path d="M ${l.x-7},${l.y} h 14 M ${l.x},${l.y-7} v 14" stroke="#fff3c8" stroke-width="1.6"/>`),t.phase===`pick`){let e=[...Q(`#candidate-labels`).children].map(e=>{let n=t.candidates[Number(e.dataset.candidate)],r=t.drops.find(e=>e.id===n?.dropId),i=r?rm.projectWindow(r.x/$.race.p.W,r.y/$.race.p.H):null;return e.hidden=!i?.visible||r&&!rm.windowPointVisible(r.x/$.race.p.W,r.y/$.race.p.H),{node:e,point:i}}).filter(e=>!e.node.hidden),n=[];for(let t of e){let e=[];for(let n of[0,26,40,54,68,82])for(let i=0;i<12;i++){let a=-Math.PI/2+i*Math.PI/6,o=Math.max(12,Math.min(r.width-12,t.point.x+Math.cos(a)*n)),s=Math.max(12,Math.min(r.height-12,t.point.y+Math.sin(a)*n));e.push({x:o,y:s,distance:Math.hypot(o-t.point.x,s-t.point.y)})}e.sort((e,t)=>e.distance-t.distance);let i=e.find(e=>n.every(t=>Math.abs(t.x-e.x)>=26||Math.abs(t.y-e.y)>=26))||e.at(-1),{x:a,y:s}=i;n.push(i),t.node.style.left=a+`px`,t.node.style.top=s+`px`,i.distance>3&&(o+=`<path d="M ${t.point.x},${t.point.y} L ${a},${s}" stroke="#fff0bc" stroke-opacity=".85" stroke-width="1.2"/><circle cx="${t.point.x}" cy="${t.point.y}" r="2" fill="#fff0bc"/>`)}}if(i.innerHTML=`<defs><clipPath id="playtest-pane"><polygon points="${c}"/></clipPath></defs><g clip-path="url(#playtest-pane)">${a}</g>${o}${s}`,e!==$.state().hash)throw Error(`Rendering changed race state`);dm=!1}var Bm=0;function Vm(e){let t=Math.min(.25,(e-um)/1e3);if(um=e,!am&&$.current.phase===`racing`&&!document.hidden){for(lm+=t;lm>=$.race.dt&&$.current.phase===`racing`;)Im(),lm-=$.race.dt;dm=!0,e-Bm>250&&(Rm(),Bm=e)}dm&&zm(),requestAnimationFrame(Vm)}window.__friendsStudy={begin:Dm,setLanguage:Em,choose:km,pause:Mm,resume:Nm,setFeedback:Pm,queueTap:Fm,cycleAim:jm,setAim:e=>{sm=e,dm=!0},project:(e,t)=>rm.projectWindow(e,t),rig:()=>rm.getRigInfo(),visible:(e,t)=>rm.windowPointVisible(e,t),state:()=>({language:nm,started:im,paused:am,reason:om,feedbackOpen:pm,aim:sm,source:$?.state(),taps:structuredClone($?.lastKnocks)}),advance(e){Mm();for(let t=0;t<e&&$.current.phase===`racing`;t++)Im();lm=0,Rm(),zm(),wm()},reset:Lm},nm&&Em(nm);