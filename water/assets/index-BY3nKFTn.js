var Ku=Object.defineProperty;var qu=(r,e,t)=>e in r?Ku(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var D=(r,e,t)=>qu(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="184",Yu=0,ll=1,$u=2,os=1,Zu=2,mr=3,tn=0,Gt=1,Qt=2,fn=0,ki=1,cl=2,ul=3,hl=4,Ju=5,fi=100,Qu=101,eh=102,th=103,nh=104,ih=200,rh=201,sh=202,oh=203,Eo=204,wo=205,ah=206,lh=207,ch=208,uh=209,hh=210,dh=211,fh=212,ph=213,mh=214,Ao=0,Ro=1,Co=2,Wi=3,Po=4,Do=5,Lo=6,Io=7,jc=0,gh=1,vh=2,En=0,Kc=1,qc=2,Yc=3,$c=4,Zc=5,Jc=6,Qc=7,dl="attached",xh="detached",eu=300,gi=301,Xi=302,Us=303,Fs=304,Es=306,ii=1e3,an=1001,ps=1002,wt=1003,tu=1004,gr=1005,nt=1006,as=1007,Sn=1008,qt=1009,nu=1010,iu=1011,yr=1012,Ta=1013,Rn=1014,en=1015,Cn=1016,Ea=1017,wa=1018,Mr=1020,ru=35902,su=35899,ou=1021,au=1022,Vt=1023,Gn=1026,mi=1027,ws=1028,Aa=1029,vi=1030,Ra=1031,Ca=1033,ls=33776,cs=33777,us=33778,hs=33779,No=35840,Uo=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,Ho=37496,ko=37488,Vo=37489,ms=37490,Go=37491,Wo=37808,Xo=37809,jo=37810,Ko=37811,qo=37812,Yo=37813,$o=37814,Zo=37815,Jo=37816,Qo=37817,ea=37818,ta=37819,na=37820,ia=37821,ra=36492,sa=36494,oa=36495,aa=36283,la=36284,gs=36285,ca=36286,Sr=2300,Tr=2301,Os=2302,fl=2303,pl=2400,ml=2401,gl=2402,_h=2500,bh=0,lu=1,ua=2,yh=3200,ha=0,Mh=1,zn="",Nt="srgb",nn="srgb-linear",vs="linear",Qe="srgb",Ei=7680,vl=519,Sh=512,Th=513,Eh=514,Pa=515,wh=516,Ah=517,Da=518,Rh=519,da=35044,xl="300 es",Tn=2e3,Er=2001;function Ch(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ph(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dh(){const r=wr("canvas");return r.style.display="block",r}const _l={};function xs(...r){const e="THREE."+r.shift();console.log(e,...r)}function cu(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ye(...r){r=cu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function we(...r){r=cu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fa(...r){const e=r.join(" ");e in _l||(_l[e]=!0,ye(...r))}function Lh(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ih={[Ao]:Ro,[Co]:Lo,[Po]:Io,[Wi]:Do,[Ro]:Ao,[Lo]:Co,[Io]:Po,[Do]:Wi};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const xr=Math.PI/180,ji=180/Math.PI;function pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function La(r,e){return(r%e+e)%e}function Nh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Uh(r,e,t){return r!==e?(t-r)/(e-r):0}function _r(r,e,t){return(1-t)*r+t*e}function Fh(r,e,t,n){return _r(r,e,1-Math.exp(-t*n))}function Oh(r,e=1){return e-Math.abs(La(r,e*2)-e)}function Bh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function kh(r,e){return r+Math.random()*(e-r)}function Vh(r){return r*(.5-Math.random())}function Gh(r){r!==void 0&&(bl=r);let e=bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wh(r){return r*xr}function Xh(r){return r*ji}function jh(r){return(r&r-1)===0&&r!==0}function Kh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yh(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Kt={DEG2RAD:xr,RAD2DEG:ji,generateUUID:pn,clamp:je,euclideanModulo:La,mapLinear:Nh,inverseLerp:Uh,lerp:_r,damp:Fh,pingpong:Oh,smoothstep:Bh,smootherstep:zh,randInt:Hh,randFloat:kh,randFloatSpread:Vh,seededRandom:Gh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:jh,ceilPowerOfTwo:Kh,floorPowerOfTwo:qh,setQuaternionFromProperEuler:Yh,normalize:et,denormalize:hn},Ya=class Ya{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ya.prototype.isVector2=!0;let He=Ya;class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],p=s[o+1],g=s[o+2],b=s[o+3];if(h!==b||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+h*b;m<0&&(d=-d,p=-p,g=-g,b=-b,m=-m);let f=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);f=Math.sin(f*v)/y,a=Math.sin(a*v)/y,l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+b*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+b*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $a=class $a{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$a.prototype.isVector3=!0;let C=$a;const Bs=new C,yl=new Wn,Za=class Za{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],b=i[0],m=i[3],f=i[6],v=i[1],y=i[4],S=i[7],A=i[2],T=i[5],R=i[8];return s[0]=o*b+a*v+l*A,s[3]=o*m+a*y+l*T,s[6]=o*f+a*S+l*R,s[1]=c*b+u*v+h*A,s[4]=c*m+u*y+h*T,s[7]=c*f+u*S+h*R,s[2]=d*b+p*v+g*A,s[5]=d*m+p*y+g*T,s[8]=d*f+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*c-u*n)*b,e[2]=(a*n-i*o)*b,e[3]=d*b,e[4]=(u*t-i*l)*b,e[5]=(i*s-a*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Za.prototype.isMatrix3=!0;let Ne=Za;const zs=new Ne,Ml=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){const r={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qe&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?vs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[nn]:{primaries:e,whitePoint:n,transfer:vs,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),r}const Xe=$h();function Vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wi;class Zh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=wr("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jh=0;class Ia{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Hs(i[o].image)):s.push(Hs(i[o]))}else s=Hs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}let Qh=0;const ks=new C;class Ut extends xi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=an,i=an,s=nt,o=Sn,a=Vt,l=qt,c=Ut.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=pn(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ks).x}get height(){return this.source.getSize(ks).y}get depth(){return this.source.getSize(ks).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=eu;Ut.DEFAULT_ANISOTROPY=1;const Ja=class Ja{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,A=(f+1)/2,T=(u+d)/4,R=(h+b)/4,_=(g+m)/4;return y>S&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=R/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=_/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=_/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-b)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ja.prototype.isVector4=!0;let ht=Ja;class ed extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Ut(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ft extends ed{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uu extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class td extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=class Ts{constructor(e,t,n,i,s,o,a,l,c,u,h,d,p,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,p,g,b,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ts().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,b=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-b*c,t[9]=-a*l,t[2]=b-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,b=c*h;t[0]=d+b*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=b+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,b=c*h;t[0]=d-b*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=b-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,b=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,b=a*c;t[0]=l*u,t[4]=b-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-b*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,b=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nd,e,id)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(n,Zt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(n,Zt)),qn.normalize(),Pr.crossVectors(Zt,qn),i[0]=qn.x,i[4]=Pr.x,i[8]=Zt.x,i[1]=qn.y,i[5]=Pr.y,i[9]=Zt.y,i[2]=qn.z,i[6]=Pr.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],v=n[3],y=n[7],S=n[11],A=n[15],T=i[0],R=i[4],_=i[8],w=i[12],N=i[1],P=i[5],O=i[9],W=i[13],j=i[2],U=i[6],V=i[10],z=i[14],Q=i[3],ee=i[7],ue=i[11],_e=i[15];return s[0]=o*T+a*N+l*j+c*Q,s[4]=o*R+a*P+l*U+c*ee,s[8]=o*_+a*O+l*V+c*ue,s[12]=o*w+a*W+l*z+c*_e,s[1]=u*T+h*N+d*j+p*Q,s[5]=u*R+h*P+d*U+p*ee,s[9]=u*_+h*O+d*V+p*ue,s[13]=u*w+h*W+d*z+p*_e,s[2]=g*T+b*N+m*j+f*Q,s[6]=g*R+b*P+m*U+f*ee,s[10]=g*_+b*O+m*V+f*ue,s[14]=g*w+b*W+m*z+f*_e,s[3]=v*T+y*N+S*j+A*Q,s[7]=v*R+y*P+S*U+A*ee,s[11]=v*_+y*O+S*V+A*ue,s[15]=v*w+y*W+S*z+A*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15],v=l*p-c*d,y=a*p-c*h,S=a*d-l*h,A=o*p-c*u,T=o*d-l*u,R=o*h-a*u;return t*(b*v-m*y+f*S)-n*(g*v-m*A+f*T)+i*(g*y-b*A+f*R)-s*(g*S-b*T+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],v=t*a-n*o,y=t*l-i*o,S=t*c-s*o,A=n*l-i*a,T=n*c-s*a,R=i*c-s*l,_=u*b-h*g,w=u*m-d*g,N=u*f-p*g,P=h*m-d*b,O=h*f-p*b,W=d*f-p*m,j=v*W-y*O+S*P+A*N-T*w+R*_;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/j;return e[0]=(a*W-l*O+c*P)*U,e[1]=(i*O-n*W-s*P)*U,e[2]=(b*R-m*T+f*A)*U,e[3]=(d*T-h*R-p*A)*U,e[4]=(l*N-o*W-c*w)*U,e[5]=(t*W-i*N+s*w)*U,e[6]=(m*S-g*R-f*y)*U,e[7]=(u*R-d*S+p*y)*U,e[8]=(o*O-a*N+c*_)*U,e[9]=(n*N-t*O-s*_)*U,e[10]=(g*T-b*S+f*v)*U,e[11]=(h*S-u*T-p*v)*U,e[12]=(a*w-o*P-l*_)*U,e[13]=(t*P-n*w+i*_)*U,e[14]=(b*y-g*A-m*v)*U,e[15]=(u*A-h*y+d*v)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,b=o*u,m=o*h,f=a*h,v=l*c,y=l*u,S=l*h,A=n.x,T=n.y,R=n.z;return i[0]=(1-(b+f))*A,i[1]=(p+S)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(d+f))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ai.set(i[0],i[1],i[2]).length();const a=Ai.set(i[4],i[5],i[6]).length(),l=Ai.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ln.copy(this);const c=1/o,u=1/a,h=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Tn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,b;if(l)g=s/(o-s),b=o*s/(o-s);else if(a===Tn)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Er)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Tn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,b;if(l)g=1/(o-s),b=o/(o-s);else if(a===Tn)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===Er)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ts.prototype.isMatrix4=!0;let Le=Ts;const Ai=new C,ln=new Le,nd=new C(0,0,0),id=new C(1,1,1),qn=new C,Pr=new C,Zt=new C,Tl=new Le,El=new Wn;class ri{constructor(e=0,t=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rd=0;const wl=new C,Ri=new Wn,In=new Le,Dr=new C,ir=new C,sd=new C,od=new Wn,Al=new C(1,0,0),Rl=new C(0,1,0),Cl=new C(0,0,1),Pl={type:"added"},ad={type:"removed"},Ci={type:"childadded",child:null},Vs={type:"childremoved",child:null};class _t extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new C,t=new ri,n=new Wn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ne}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ir,Dr,this.up):In.lookAt(Dr,ir,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(In),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new C(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ld={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Ws(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=La(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ws(o,s,e+1/3),this.g=Ws(o,s,e),this.b=Ws(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Xe.workingToColorSpace(Ht.copy(this),e),Math.round(je(Ht.r*255,0,255))*65536+Math.round(je(Ht.g*255,0,255))*256+Math.round(je(Ht.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Nt){Xe.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Lr);const n=_r(Yn.h,Lr.h,t),i=_r(Yn.s,Lr.s,t),s=_r(Yn.l,Lr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ce;Ce.NAMES=hu;class Ua extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new C,Nn=new C,Xs=new C,Un=new C,Pi=new C,Di=new C,Dl=new C,js=new C,Ks=new C,qs=new C,Ys=new ht,$s=new ht,Zs=new ht;class dn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Nn.subVectors(n,t),Xs.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Nn),l=cn.dot(Xs),c=Nn.dot(Nn),u=Nn.dot(Xs),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ys.setScalar(0),$s.setScalar(0),Zs.setScalar(0),Ys.fromBufferAttribute(e,t),$s.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ys,s.x),o.addScaledVector($s,s.y),o.addScaledVector(Zs,s.z),o}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Nn.subVectors(e,t),cn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),cn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Pi.subVectors(i,n),Di.subVectors(s,n),js.subVectors(e,n);const l=Pi.dot(js),c=Di.dot(js);if(l<=0&&c<=0)return t.copy(n);Ks.subVectors(e,i);const u=Pi.dot(Ks),h=Di.dot(Ks);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Pi,o);qs.subVectors(e,s);const p=Pi.dot(qs),g=Di.dot(qs);if(g>=0&&p<=g)return t.copy(s);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Di,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Dl.subVectors(s,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Dl,a);const f=1/(m+b+d);return o=b*f,a=d*f,t.copy(n).addScaledVector(Pi,o).addScaledVector(Di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Nr.subVectors(this.max,rr),Li.subVectors(e.a,rr),Ii.subVectors(e.b,rr),Ni.subVectors(e.c,rr),$n.subVectors(Ii,Li),Zn.subVectors(Ni,Ii),ai.subVectors(Li,Ni);let t=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-ai.z,ai.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,ai.z,0,-ai.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-ai.y,ai.x,0];return!Js(t,Li,Ii,Ni,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,Li,Ii,Ni,Nr))?!1:(Ur.crossVectors($n,Zn),t=[Ur.x,Ur.y,Ur.z],Js(t,Li,Ii,Ni,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new C,new C,new C,new C,new C,new C,new C,new C],un=new C,Ir=new mn,Li=new C,Ii=new C,Ni=new C,$n=new C,Zn=new C,ai=new C,rr=new C,Nr=new C,Ur=new C,li=new C;function Js(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){li.fromArray(r,s);const a=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=n.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Rt=new C,Fr=new He;let cd=0;class Wt extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=da,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==da&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class du extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fu extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ud=new mn,sr=new C,Qs=new C;class Pn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ud.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Qs)),this.expandByPoint(sr.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hd=0;const sn=new Le,eo=new _t,Ui=new C,Jt=new mn,or=new mn,It=new C;class Ot extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?fu:du)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];or.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Jt.min,or.min),Jt.expandByPoint(It),It.addVectors(Jt.max,or.max),Jt.expandByPoint(It)):(Jt.expandByPoint(or.min),Jt.expandByPoint(or.max))}Jt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(e,c),It.add(Ui)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new C,l[_]=new C;const c=new C,u=new C,h=new C,d=new He,p=new He,g=new He,b=new C,m=new C;function f(_,w,N){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,N),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,N),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[_].add(b),a[w].add(b),a[N].add(b),l[_].add(m),l[w].add(m),l[N].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,w=v.length;_<w;++_){const N=v[_],P=N.start,O=N.count;for(let W=P,j=P+O;W<j;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new C,S=new C,A=new C,T=new C;function R(_){A.fromBufferAttribute(i,_),T.copy(A);const w=a[_];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(T,w);const P=S.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,w=v.length;_<w;++_){const N=v[_],P=N.start,O=N.count;for(let W=P,j=P+O;W<j;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Wt(d,u,h)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=da,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new C;class Fa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let fd=0;class wn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=ki,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=wo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const On=new C,to=new C,Or=new C,Jn=new C,no=new C,Br=new C,io=new C;class Ji{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){to.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(to);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Or),a=Jn.dot(this.direction),l=-Jn.dot(Or),c=Jn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const b=1/u;h*=b,d*=b,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(to).addScaledVector(Or,d),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,s){no.subVectors(t,e),Br.subVectors(n,e),io.crossVectors(no,Br);let o=this.direction.dot(io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Br.crossVectors(Jn,Br));if(l<0)return null;const c=a*this.direction.dot(no.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(io);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ti extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ll=new Le,ci=new Ji,zr=new Pn,Il=new C,Hr=new C,kr=new C,Vr=new C,ro=new C,Gr=new C,Nl=new C,Wr=new C;class pt extends _t{constructor(e=new Ot,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ro.fromBufferAttribute(h,e),o?Gr.addScaledVector(ro,u):Gr.addScaledVector(ro.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(zr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(zr,Il)===null||ci.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),ci.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,A=y;S<A;S+=3){const T=a.getX(S),R=a.getX(S+1),_=a.getX(S+2);i=Xr(this,f,e,n,c,u,h,T,R,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const v=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);i=Xr(this,o,e,n,c,u,h,v,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,A=y;S<A;S+=3){const T=S,R=S+1,_=S+2;i=Xr(this,f,e,n,c,u,h,T,R,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const v=m,y=m+1,S=m+2;i=Xr(this,o,e,n,c,u,h,v,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function pd(r,e,t,n,i,s,o,a){let l;if(e.side===Gt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===tn,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:r}}function Xr(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Hr),r.getVertexPosition(l,kr),r.getVertexPosition(c,Vr);const u=pd(r,e,t,n,Hr,kr,Vr,Nl);if(u){const h=new C;dn.getBarycoord(Nl,Hr,kr,Vr,h),i&&(u.uv=dn.getInterpolatedAttribute(i,a,l,c,h,new He)),s&&(u.uv1=dn.getInterpolatedAttribute(s,a,l,c,h,new He)),o&&(u.normal=dn.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};dn.getNormal(Hr,kr,Vr,d.normal),u.face=d,u.barycoord=h}return u}const ar=new ht,Ul=new ht,Fl=new ht,md=new ht,Ol=new Le,jr=new C,so=new Pn,Bl=new Le,oo=new Ji;class gd extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dl,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1&&(Bl.copy(i).invert(),oo.copy(e.ray).applyMatrix4(Bl),!(this.boundingBox!==null&&oo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xh?this.bindMatrixInverse.copy(this.bindMatrix).invert():ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ul.fromBufferAttribute(i.attributes.skinIndex,e),Fl.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ar.copy(t),t.set(0,0,0,0)):(ar.set(...t,1),t.set(0,0,0)),ar.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=Fl.getComponent(s);if(o!==0){const a=Ul.getComponent(s);Ol.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(md.copy(ar).applyMatrix4(Ol),o)}}return t.isVector4&&(t.w=ar.w),t.applyMatrix4(this.bindMatrixInverse)}}class pu extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class As extends Ut{constructor(e=null,t=1,n=1,i,s,o,a,l,c=wt,u=wt,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zl=new Le,vd=new Le;class Oa{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:vd;zl.multiplyMatrices(a,t[s]),zl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new As(t,e,e,Vt,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ye("Skeleton: No bone found with UUID:",s),o=new pu),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class pa extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Le,Hl=new Le,Kr=[],kl=new mn,xd=new Le,lr=new pt,cr=new Pn;class _d extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),kl.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),cr.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fi),Hl.multiplyMatrices(n,Fi),lr.matrixWorld=Hl,lr.raycast(e,Kr);for(let o=0,a=Kr.length;o<a;o++){const l=Kr[o];l.instanceId=s,l.object=this,t.push(l)}Kr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(i*this.count),i,this.count,ws,en));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ao=new C,bd=new C,yd=new Ne;class di{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ao),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yd.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Pn,Md=new He(.5,.5),qr=new C;class Ba{constructor(e=new di,t=new di,n=new di,i=new di,s=new di,o=new di){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],b=s[9],m=s[10],f=s[11],v=s[12],y=s[13],S=s[14],A=s[15];if(i[0].setComponents(c-o,p-u,f-g,A-v).normalize(),i[1].setComponents(c+o,p+u,f+g,A+v).normalize(),i[2].setComponents(c+a,p+h,f+b,A+y).normalize(),i[3].setComponents(c-a,p-h,f-b,A-y).normalize(),n)i[4].setComponents(l,d,m,S).normalize(),i[5].setComponents(c-l,p-d,f-m,A-S).normalize();else if(i[4].setComponents(c-l,p-d,f-m,A-S).normalize(),t===Tn)i[5].setComponents(c+l,p+d,f+m,A+S).normalize();else if(t===Er)i[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=Md.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qr.x=i.normal.x>0?e.max.x:e.min.x,qr.y=i.normal.y>0?e.max.y:e.min.y,qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mu extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _s=new C,bs=new C,Vl=new Le,ur=new Ji,Yr=new Pn,lo=new C,Gl=new C;class za extends _t{constructor(e=new Ot,t=new mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_s.fromBufferAttribute(t,i-1),bs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_s.distanceTo(bs);e.setAttribute("lineDistance",new Mt(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;Vl.copy(i).invert(),ur.copy(e.ray).applyMatrix4(Vl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=c){const f=u.getX(b),v=u.getX(b+1),y=$r(this,e,ur,l,f,v,b);y&&t.push(y)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(p),f=$r(this,e,ur,l,b,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=c){const f=$r(this,e,ur,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){const b=$r(this,e,ur,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $r(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(_s.fromBufferAttribute(a,i),bs.fromBufferAttribute(a,s),t.distanceSqToSegment(_s,bs,lo,Gl)>n)return;lo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(lo);if(!(c<e.near||c>e.far))return{distance:c,point:Gl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Wl=new C,Xl=new C;class Sd extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Wl.fromBufferAttribute(t,i),Xl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Mt(n,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Td extends za{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gu extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jl=new Le,ma=new Ji,Zr=new Pn,Jr=new C;class vu extends _t{constructor(e=new Ot,t=new gu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;jl.copy(i).invert(),ma.copy(e.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,b=p;g<b;g++){const m=c.getX(g);Jr.fromBufferAttribute(h,m),Kl(Jr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,b=p;g<b;g++)Jr.fromBufferAttribute(h,g),Kl(Jr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(r,e,t,n,i,s,o){const a=ma.distanceSqToPoint(r);if(a<t){const l=new C;ma.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ha extends Ut{constructor(e=[],t=gi,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ki extends Ut{constructor(e,t,n=Rn,i,s,o,a=wt,l=wt,c,u=Gn,h=1){if(u!==Gn&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ed extends Ki{constructor(e,t=Rn,n=gi,i,s,o=wt,a=wt,l,c=Gn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xu extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _i extends Ot{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function g(b,m,f,v,y,S,A,T,R,_,w){const N=S/R,P=A/_,O=S/2,W=A/2,j=T/2,U=R+1,V=_+1;let z=0,Q=0;const ee=new C;for(let ue=0;ue<V;ue++){const _e=ue*P-W;for(let Te=0;Te<U;Te++){const Ye=Te*N-O;ee[b]=Ye*v,ee[m]=_e*y,ee[f]=j,c.push(ee.x,ee.y,ee.z),ee[b]=0,ee[m]=0,ee[f]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Te/R),h.push(1-ue/_),z+=1}}for(let ue=0;ue<_;ue++)for(let _e=0;_e<R;_e++){const Te=d+_e+U*ue,Ye=d+_e+U*(ue+1),it=d+(_e+1)+U*(ue+1),Oe=d+(_e+1)+U*ue;l.push(Te,Ye,Oe),l.push(Ye,it,Oe),Q+=6}a.addGroup(p,Q,w),p+=Q,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ys extends Ot{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const b=[],m=n/2;let f=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(p,2));function v(){const S=new C,A=new C;let T=0;const R=(t-e)/n;for(let _=0;_<=s;_++){const w=[],N=_/s,P=N*(t-e)+e;for(let O=0;O<=i;O++){const W=O/i,j=W*l+a,U=Math.sin(j),V=Math.cos(j);A.x=P*U,A.y=-N*n+m,A.z=P*V,h.push(A.x,A.y,A.z),S.set(U,R,V).normalize(),d.push(S.x,S.y,S.z),p.push(W,1-N),w.push(g++)}b.push(w)}for(let _=0;_<i;_++)for(let w=0;w<s;w++){const N=b[w][_],P=b[w+1][_],O=b[w+1][_+1],W=b[w][_+1];(e>0||w!==0)&&(u.push(N,P,W),T+=3),(t>0||w!==s-1)&&(u.push(P,O,W),T+=3)}c.addGroup(f,T,0),f+=T}function y(S){const A=g,T=new He,R=new C;let _=0;const w=S===!0?e:t,N=S===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*N,0),d.push(0,N,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const j=O/i*l+a,U=Math.cos(j),V=Math.sin(j);R.x=w*V,R.y=m*N,R.z=w*U,h.push(R.x,R.y,R.z),d.push(0,N,0),T.x=U*.5+.5,T.y=V*.5*N+.5,p.push(T.x,T.y),g++}for(let O=0;O<i;O++){const W=A+O,j=P+O;S===!0?u.push(j,j+1,W):u.push(j+1,j,W),_+=3}c.addGroup(f,_,S===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bi extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<u;f++){const v=f*d-o;for(let y=0;y<c;y++){const S=y*h-s;g.push(S,-v,0),b.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const y=v+c*f,S=v+c*(f+1),A=v+1+c*(f+1),T=v+1+c*f;p.push(y,S,T),p.push(S,A,T)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rs extends Ot{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,d=new C,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const T=A/t;h.x=-e*Math.cos(i+T*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+T*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),m.push(T+S,1-y),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const y=u[f][v+1],S=u[f][v],A=u[f+1][v],T=u[f+1][v+1];(f!==0||o>0)&&p.push(y,S,T),(f!==n-1||l<Math.PI)&&p.push(S,A,T)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ka extends Ot{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new C,d=new C,p=new C,g=new C,b=new C,m=new C,f=new C;for(let y=0;y<=n;++y){const S=y/n*s*Math.PI*2;v(S,s,o,e,p),v(S+.01,s,o,e,g),m.subVectors(g,p),f.addVectors(g,p),b.crossVectors(m,f),f.crossVectors(b,m),b.normalize(),f.normalize();for(let A=0;A<=i;++A){const T=A/i*Math.PI*2,R=-t*Math.cos(T),_=t*Math.sin(T);h.x=p.x+(R*f.x+_*b.x),h.y=p.y+(R*f.y+_*b.y),h.z=p.z+(R*f.z+_*b.z),l.push(h.x,h.y,h.z),d.subVectors(h,p).normalize(),c.push(d.x,d.y,d.z),u.push(y/n),u.push(A/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){const A=(i+1)*(y-1)+(S-1),T=(i+1)*y+(S-1),R=(i+1)*y+S,_=(i+1)*(y-1)+S;a.push(A,T,_),a.push(T,R,_)}this.setIndex(a),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2));function v(y,S,A,T,R){const _=Math.cos(y),w=Math.sin(y),N=A/S*y,P=Math.cos(N);R.x=T*(2+P)*.5*_,R.y=T*(2+P)*w*.5,R.z=T*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function qi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(ql(i))i.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ql(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=qi(r[t]);for(const i in n)e[i]=n[i]}return e}function ql(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function wd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _u(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ad={clone:qi,merge:jt};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class at extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pd extends at{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Va extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Va{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dd extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Id(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function bu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Qi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nd extends Qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ml:s=e,a=2*t-n;break;case gl:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ml:o=e,l=2*n-t;break;case gl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*b+.5*g,S=p*m-p*b;for(let A=0;A!==a;++A)s[A]=f*o[u+A]+v*o[c+A]+y*o[l+A]+S*o[h+A];return s}}class Ud extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class Fd extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Od extends Qi{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const b=(n-t)/(i-t),m=1-b;for(let f=0;f!==a;++f)s[f]=o[c+f]*m+o[l+f]*b;return s}const p=a*2,g=e-1;for(let b=0;b!==a;++b){const m=o[c+b],f=o[l+b],v=g*p+b*2,y=d[v],S=d[v+1],A=e*p+b*2,T=h[A],R=h[A+1];let _=(n-t)/(i-t),w,N,P,O,W;for(let j=0;j<8;j++){w=_*_,N=w*_,P=1-_,O=P*P,W=O*P;const V=W*t+3*O*_*y+3*P*w*T+N*i-n;if(Math.abs(V)<1e-10)break;const z=3*O*(y-t)+6*P*_*(T-y)+3*w*(i-T);if(Math.abs(z)<1e-10)break;_=_-V/z,_=Math.max(0,Math.min(1,_))}s[b]=W*m+3*O*_*S+3*P*w*R+N*f}return s}}class gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Od(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case Os:t=this.InterpolantFactoryMethodSmooth;break;case fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return Os;case this.InterpolantFactoryMethodBezier:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){we("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){we("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ph(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){we("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Os,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[d+g]||b!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Tr;class er extends gn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Sr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class yu extends gn{constructor(e,t,n,i){super(e,t,n,i)}}yu.prototype.ValueTypeName="color";class Yi extends gn{constructor(e,t,n,i){super(e,t,n,i)}}Yi.prototype.ValueTypeName="number";class Bd extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class $i extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Bd(this.times,this.values,this.getValueSize(),e)}}$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends gn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Sr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends gn{constructor(e,t,n,i){super(e,t,n,i)}}Zi.prototype.ValueTypeName="vector";class zd{constructor(e="",t=-1,n=[],i=_h){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kd(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(gn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Id(l);l=Yl(l,1,u),c=Yl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Yi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return we("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,b){if(p.length!==0){const m=[],f=[];bu(p,m,f,g),m.length!==0&&b.push(new h(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),f.push(y.morphTarget===b?1:0)}i.push(new Yi(".morphTargetInfluence["+b+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Zi,p+".position",d,"pos",i),n($i,p+".quaternion",d,"rot",i),n(Zi,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Hd(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return Zi;case"color":return yu;case"quaternion":return $i;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hd(r.type);if(r.times===void 0){const t=[],n=[];bu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const kn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&($l(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!$l(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function $l(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gd=new Vd;class yi{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Wd extends Error{constructor(e,t){super(e),this.response=t}}class Mu extends yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=kn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:y,value:S})=>{if(y)f.close();else{b+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let T=0,R=u.length;T<R;T++){const _=u[T];_.onProgress&&_.onProgress(A)}f.enqueue(S),v()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Wd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{kn.add(`file:${e}`,c);const u=Bn[e];delete Bn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Oi=new WeakMap;class Su extends yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Oi.get(o);h===void 0&&(h=[],Oi.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=wr("img");function l(){u(),t&&t(this);const h=Oi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Oi.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),kn.remove(`image:${e}`);const d=Oi.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(h)}Oi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Xd extends yi{constructor(e){super(e)}load(e,t,n,i){const s=new Ha;s.colorSpace=Nt;const o=new Su(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Ga extends yi{constructor(e){super(e)}load(e,t,n,i){const s=new Ut,o=new Su(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Wa extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const co=new Le,Zl=new C,Jl=new C;class Xa{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Er||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const es=new C,ts=new Wn,_n=new C;class Tu extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(es,ts,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(es,ts,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(es,ts,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(es,ts,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new C,Ql=new He,ec=new He;class kt extends Tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Ql,ec),t.subVectors(ec,Ql)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jd extends Xa{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kd extends Wa{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qd extends Xa{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Yd extends Wa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Mi extends Tu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $d extends Xa{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new $d}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class br{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const uo=new WeakMap;class Jd extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{uo.has(o)===!0?(i&&i(uo.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){kn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),uo.set(l,c),kn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Bi=-90,zi=1;class Qd extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Bi,zi,e,t);i.layers=this.layers,this.add(i);const s=new kt(Bi,zi,e,t);s.layers=this.layers,this.add(s);const o=new kt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new kt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const l=new kt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new kt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ef extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ja="\\[\\]\\.:\\/",tf=new RegExp("["+ja+"]","g"),Ka="[^"+ja+"]",nf="[^"+ja.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",Ka),sf=/(WCOD+)?/.source.replace("WCOD",nf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ka),af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ka),lf=new RegExp("^"+rf+sf+of+af+"$"),cf=["material","materials","bones","map"];class uf{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tf,"")}static parseTrackName(e){const t=lf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;we("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=uf;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const tc=new Le;class Eu{constructor(e,t,n=0,i=1/0){this.ray=new Ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):we("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tc),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort(nc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ga(e[i],this,n,t);return n.sort(nc),n}}function nc(r,e){return r.distance-e.distance}function ga(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ga(s[o],e,t,!0)}}const Qa=class Qa{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Qa.prototype.isMatrix2=!0;let ic=Qa;function rc(r,e,t,n){const i=hf(n);switch(t){case ou:return r*e;case ws:return r*e/i.components*i.byteLength;case Aa:return r*e/i.components*i.byteLength;case vi:return r*e*2/i.components*i.byteLength;case Ra:return r*e*2/i.components*i.byteLength;case au:return r*e*3/i.components*i.byteLength;case Vt:return r*e*4/i.components*i.byteLength;case Ca:return r*e*4/i.components*i.byteLength;case ls:case cs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case us:case hs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Oo:return Math.max(r,16)*Math.max(e,8)/4;case No:case Fo:return Math.max(r,8)*Math.max(e,8)/2;case Bo:case zo:case ko:case Vo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ho:case ms:case Go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ra:case sa:case oa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case aa:case la:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gs:case ca:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hf(r){switch(r){case qt:case nu:return{byteLength:1,components:1};case yr:case iu:case Cn:return{byteLength:2,components:1};case Ea:case wa:return{byteLength:2,components:4};case Rn:case Ta:case en:return{byteLength:4,components:1};case ru:case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function df(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],b=h[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const b=h[p];r.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ff=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,hp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,dp=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
void main () {
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:_f,aomap_pars_fragment:bf,batching_pars_vertex:yf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:Tf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Df,color_fragment:Lf,color_pars_fragment:If,color_pars_vertex:Nf,color_vertex:Uf,common:Ff,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:Hf,emissivemap_fragment:kf,emissivemap_pars_fragment:Vf,colorspace_fragment:Gf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Kf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sp,envmap_vertex:Yf,fog_vertex:$f,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:rp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:up,lights_physical_pars_fragment:hp,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,lightprobes_pars_fragment:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:_p,map_fragment:bp,map_pars_fragment:yp,map_particle_fragment:Mp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:wp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Dp,normal_fragment_maps:Lp,normal_pars_fragment:Ip,normal_pars_vertex:Np,normal_vertex:Up,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Hp,opaque_fragment:kp,packing:Vp,premultiplied_alpha_fragment:Gp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:jp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:$p,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Qp,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:rm,tonemapping_fragment:sm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:um,uv_vertex:hm,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:vm,cube_frag:xm,depth_vert:_m,depth_frag:bm,distance_vert:ym,distance_frag:Mm,equirect_vert:Sm,equirect_frag:Tm,linedashed_vert:Em,linedashed_frag:wm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Pm,meshmatcap_vert:Dm,meshmatcap_frag:Lm,meshnormal_vert:Im,meshnormal_frag:Nm,meshphong_vert:Um,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:Hm,points_vert:km,points_frag:Vm,shadow_vert:Gm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:jm},ce={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Mn={basic:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:jt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:jt([ce.lights,ce.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Mn.physical={uniforms:jt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const ns={r:0,b:0,g:0},Km=new Le,Au=new Ne;Au.set(-1,0,0,0,1,0,0,0,1);function qm(r,e,t,n,i,s){const o=new Ce(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=e.get(y,S)}return y}function g(v){let y=!1;const S=p(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(v,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===Es)?(c===void 0&&(c=new pt(new _i(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:qi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Au),c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Qe,(u!==S||h!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pt(new bi(2,2),new at({name:"BackgroundMaterial",uniforms:qi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(ns,_u(r)),t.buffers.color.setClear(ns.r,ns.g,ns.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:b,dispose:f}}function Ym(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(P,O,W,j,U){let V=!1;const z=h(P,j,W,O);s!==z&&(s=z,c(s.object)),V=p(P,j,W,U),V&&g(P,j,W,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(P,O,W,j),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function h(P,O,W,j){const U=j.wireframe===!0;let V=n[O.id];V===void 0&&(V={},n[O.id]=V);const z=P.isInstancedMesh===!0?P.id:0;let Q=V[z];Q===void 0&&(Q={},V[z]=Q);let ee=Q[W.id];ee===void 0&&(ee={},Q[W.id]=ee);let ue=ee[U];return ue===void 0&&(ue=d(l()),ee[U]=ue),ue}function d(P){const O=[],W=[],j=[];for(let U=0;U<t;U++)O[U]=0,W[U]=0,j[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,O,W,j){const U=s.attributes,V=O.attributes;let z=0;const Q=W.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const _e=U[ee];let Te=V[ee];if(Te===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;z++}return s.attributesNum!==z||s.index!==j}function g(P,O,W,j){const U={},V=O.attributes;let z=0;const Q=W.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let _e=V[ee];_e===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),U[ee]=Te,z++}s.attributes=U,s.attributesNum=z,s.index=j}function b(){const P=s.newAttributes;for(let O=0,W=P.length;O<W;O++)P[O]=0}function m(P){f(P,0)}function f(P,O){const W=s.newAttributes,j=s.enabledAttributes,U=s.attributeDivisors;W[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),U[P]!==O&&(r.vertexAttribDivisor(P,O),U[P]=O)}function v(){const P=s.newAttributes,O=s.enabledAttributes;for(let W=0,j=O.length;W<j;W++)O[W]!==P[W]&&(r.disableVertexAttribArray(W),O[W]=0)}function y(P,O,W,j,U,V,z){z===!0?r.vertexAttribIPointer(P,O,W,U,V):r.vertexAttribPointer(P,O,W,j,U,V)}function S(P,O,W,j){b();const U=j.attributes,V=W.getAttributes(),z=O.defaultAttributeValues;for(const Q in V){const ee=V[Q];if(ee.location>=0){let ue=U[Q];if(ue===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){const _e=ue.normalized,Te=ue.itemSize,Ye=e.get(ue);if(Ye===void 0)continue;const it=Ye.buffer,Oe=Ye.type,$=Ye.bytesPerElement,fe=Oe===r.INT||Oe===r.UNSIGNED_INT||ue.gpuType===Ta;if(ue.isInterleavedBufferAttribute){const re=ue.data,Ae=re.stride,Ie=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)f(ee.location+Re,re.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<ee.locationSize;Re++)m(ee.location+Re);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Re=0;Re<ee.locationSize;Re++)y(ee.location+Re,Te/ee.locationSize,Oe,_e,Ae*$,(Ie+Te/ee.locationSize*Re)*$,fe)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)f(ee.location+re,ue.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<ee.locationSize;re++)m(ee.location+re);r.bindBuffer(r.ARRAY_BUFFER,it);for(let re=0;re<ee.locationSize;re++)y(ee.location+re,Te/ee.locationSize,Oe,_e,Te*$,Te/ee.locationSize*re*$,fe)}}else if(z!==void 0){const _e=z[Q];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(ee.location,_e);break;case 3:r.vertexAttrib3fv(ee.location,_e);break;case 4:r.vertexAttrib4fv(ee.location,_e);break;default:r.vertexAttrib1fv(ee.location,_e)}}}}v()}function A(){w();for(const P in n){const O=n[P];for(const W in O){const j=O[W];for(const U in j){const V=j[U];for(const z in V)u(V[z].object),delete V[z];delete j[U]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const W in O){const j=O[W];for(const U in j){const V=j[U];for(const z in V)u(V[z].object),delete V[z];delete j[U]}}delete n[P.id]}function R(P){for(const O in n){const W=n[O];for(const j in W){const U=W[j];if(U[P.id]===void 0)continue;const V=U[P.id];for(const z in V)u(V[z].object),delete V[z];delete U[P.id]}}}function _(P){for(const O in n){const W=n[O],j=P.isInstancedMesh===!0?P.id:0,U=W[j];if(U!==void 0){for(const V in U){const z=U[V];for(const Q in z)u(z[Q].object),delete z[Q];delete U[V]}delete W[j],Object.keys(W).length===0&&delete n[O]}}}function w(){N(),o=!0,s!==i&&(s=i,c(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function $m(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Zm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Vt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==en&&!_)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:A,samples:T}}function Jm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new di,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let S=f.clippingState||null;l.value=S,S=u(g,d,y,p);for(let A=0;A!==y;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const f=p+b*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,S=p;y!==b;++y,S+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const ni=4,sc=[.125,.215,.35,.446,.526,.582],pi=20,Qm=256,hr=new Mi,oc=new Ce;let ho=null,fo=0,po=0,mo=!1;const eg=new C;class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=eg}=s;ho=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:Cn,format:Vt,colorSpace:nn,depthBuffer:!1},i=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tg(s)),this._blurMaterial=ig(s,e,t),this._ggxMaterial=ng(s,e,t)}return i}_compileMaterial(e){const t=new pt(new Ot,e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,i,s){const l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(oc),h.toneMapping=En,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new _i,new ti({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(oc),f=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Hi(i,S*A,y>2?A:0,A,A),h.setRenderTarget(i),f&&h.render(b,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-ni?n-g+ni:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Hi(s,m,f,3*b,2*b),i.setRenderTarget(s),i.render(a,hr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Hi(e,m,f,3*b,2*b),i.setRenderTarget(e),i.render(a,hr)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pi-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):pi;m>pi&&ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const f=[];let v=0;for(let R=0;R<pi;++R){const _=R/b,w=Math.exp(-_*_/2);f.push(w),R===0?v+=w:R<m&&(v+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const S=this._sizeLods[i],A=3*S*(i>y-ni?i-y+ni:0),T=4*(this._cubeSize-S);Hi(t,A,T,3*S,2*S),l.setRenderTarget(t),l.render(h,hr)}}function tg(r){const e=[],t=[],n=[];let i=r;const s=r-ni+1+sc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ni?l=sc[o-r+ni-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,b=3,m=2,f=1,v=new Float32Array(b*g*p),y=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,_=T>2?0:-1,w=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];v.set(w,b*g*T),y.set(d,m*g*T);const N=[T,T,T,T,T,T];S.set(N,f*g*T)}const A=new Ot;A.setAttribute("position",new Wt(v,b)),A.setAttribute("uv",new Wt(y,m)),A.setAttribute("faceIndex",new Wt(S,f)),n.push(new pt(A,null)),i>ni&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lc(r,e,t){const n=new Ft(r,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ng(r,e,t){return new at({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ig(r,e,t){const n=new Float32Array(pi),i=new C(0,1,0);return new at({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function cc(){return new at({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function uc(){return new at({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ru extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ha(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _i(5,5,5),s=new at({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:fn});s.uniforms.tEquirect.value=t;const o=new pt(i,s),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=nt),new Qd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function rg(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Us||p===Fs)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const b=new Ru(g.height);return b.fromEquirectangularTexture(r,d),e.set(d,b),d.addEventListener("dispose",c),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===Us||p===Fs,b=p===gi||p===Xi;if(g||b){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new ac(r)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||b&&v&&l(v)?(n===null&&(n=new ac(r)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Us?d.mapping=gi:p===Fs&&(d.mapping=Xi),d}function l(d){let p=0;const g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function sg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fa("WebGLRenderer: "+n+" extension not supported."),i}}}function og(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let b=0;if(g===void 0)return;if(p!==null){const v=p.array;b=p.version;for(let y=0,S=v.length;y<S;y+=3){const A=v[y+0],T=v[y+1],R=v[y+2];d.push(A,T,T,R,R,A)}}else{const v=g.array;b=g.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const A=y+0,T=y+1,R=y+2;d.push(A,T,T,R,R,A)}}const m=new(g.count>=65535?fu:du)(d,1);m.version=b;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ag(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,h*o,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let b=0;for(let m=0;m<p;m++)b+=d[m];t.update(b,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cg(r,e,t){const n=new WeakMap,i=new ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let N=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var p=N;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let A=a.attributes.position.count*S,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*T*4*h),_=new uu(R,A,T,h);_.type=en,_.needsUpdate=!0;const w=S*4;for(let P=0;P<h;P++){const O=f[P],W=v[P],j=y[P],U=A*T*4*P;for(let V=0;V<O.count;V++){const z=V*w;g===!0&&(i.fromBufferAttribute(O,V),R[U+z+0]=i.x,R[U+z+1]=i.y,R[U+z+2]=i.z,R[U+z+3]=0),b===!0&&(i.fromBufferAttribute(W,V),R[U+z+4]=i.x,R[U+z+5]=i.y,R[U+z+6]=i.z,R[U+z+7]=0),m===!0&&(i.fromBufferAttribute(j,V),R[U+z+8]=i.x,R[U+z+9]=i.y,R[U+z+10]=i.z,R[U+z+11]=j.itemSize===4?i.w:1)}}d={count:h,texture:_,size:new He(A,T)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ug(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const hg={[Kc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[$c]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function dg(r,e,t,n,i){const s=new Ft(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Ki(e,t):void 0}),o=new Ft(e,t,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),a=new Ot;a.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const l=new Pd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pt(a,l),u=new Mi(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,b=null,m=[],f=!1;this.setSize=function(v,y){s.setSize(v,y),o.setSize(v,y);for(let S=0;S<m.length;S++){const A=m[S];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){m=v,f=m.length>0&&m[0].isRenderPass===!0;const y=s.width,S=s.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(y,S)}},this.begin=function(v,y){if(p||v.toneMapping===En&&m.length===0)return!1;if(b=y,y!==null){const S=y.width,A=y.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return f===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=En,!0},this.hasRenderPass=function(){return f},this.end=function(v,y){v.toneMapping=g,p=!0;let S=s,A=o;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(v,A,S,y),R.needsSwap!==!1)){const _=S;S=A,A=_}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,l.defines={},Xe.getTransfer(h)===Qe&&(l.defines.SRGB_TRANSFER="");const T=hg[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(b),v.render(c,u),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Cu=new Ut,va=new Ki(1,1),Pu=new uu,Du=new td,Lu=new Ha,hc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function nr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hc[i];if(s===void 0&&(s=new Float32Array(i),hc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ps(r,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;mc.set(n),r.uniformMatrix2fv(this.addr,!1,mc),Lt(t,n)}}function xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;pc.set(n),r.uniformMatrix3fv(this.addr,!1,pc),Lt(t,n)}}function _g(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;fc.set(n),r.uniformMatrix4fv(this.addr,!1,fc),Lt(t,n)}}function bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function Tg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function Rg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(va.compareFunction=t.isReversedDepthBuffer()?Da:Pa,s=va):s=Cu,t.setTexture2D(e||s,i)}function Cg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Du,i)}function Pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lu,i)}function Dg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pu,i)}function Lg(r){switch(r){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return bg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Tg;case 36294:return Eg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ig(r,e){r.uniform1fv(this.addr,e)}function Ng(r,e){const t=nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Ug(r,e){const t=nr(e,this.size,3);r.uniform3fv(this.addr,t)}function Fg(r,e){const t=nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Og(r,e){const t=nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bg(r,e){const t=nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zg(r,e){const t=nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Hg(r,e){r.uniform1iv(this.addr,e)}function kg(r,e){r.uniform2iv(this.addr,e)}function Vg(r,e){r.uniform3iv(this.addr,e)}function Gg(r,e){r.uniform4iv(this.addr,e)}function Wg(r,e){r.uniform1uiv(this.addr,e)}function Xg(r,e){r.uniform2uiv(this.addr,e)}function jg(r,e){r.uniform3uiv(this.addr,e)}function Kg(r,e){r.uniform4uiv(this.addr,e)}function qg(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=va:o=Cu;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Yg(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Du,s[o])}function $g(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lu,s[o])}function Zg(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pu,s[o])}function Jg(r){switch(r){case 5126:return Ig;case 35664:return Ng;case 35665:return Ug;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Hg;case 35667:case 35671:return kg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Zg}}class Qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lg(t.type)}}class e0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}}class t0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function gc(r,e){r.seq.push(e),r.map[e.id]=e}function n0(r,e,t){const n=r.name,i=n.length;for(go.lastIndex=0;;){const s=go.exec(n),o=go.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gc(t,c===void 0?new Qg(a,r,e):new e0(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new t0(a),gc(t,h)),t=h}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);n0(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const i0=37297;let r0=0;function s0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const xc=new Ne;function o0(r){Xe._getMatrix(xc,Xe.workingColorSpace,r);const e=`mat3( ${xc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case vs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _c(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+s0(r.getShaderSource(e),a)}else return s}function a0(r,e){const t=o0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const l0={[Kc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[$c]:"ACESFilmic",[Jc]:"AgX",[Qc]:"Neutral",[Zc]:"Custom"};function c0(r,e){const t=l0[e];return t===void 0?(ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const is=new C;function u0(){Xe.getLuminanceCoefficients(is);const r=is.x.toFixed(4),e=is.y.toFixed(4),t=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function d0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function vr(r){return r!==""}function bc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(r){return r.replace(p0,g0)}const m0=new Map;function g0(r,e){let t=ze[e];if(t===void 0){const n=m0.get(e);if(n!==void 0)t=ze[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xa(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(r){return r.replace(v0,x0)}function x0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _0={[os]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function b0(r){return _0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y0={[gi]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE_UV"};function M0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":y0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const S0={[Xi]:"ENVMAP_MODE_REFRACTION"};function T0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E0={[jc]:"ENVMAP_BLENDING_MULTIPLY",[gh]:"ENVMAP_BLENDING_MIX",[vh]:"ENVMAP_BLENDING_ADD"};function w0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":E0[r.combine]||"ENVMAP_BLENDING_NONE"}function A0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=b0(t),c=M0(t),u=T0(t),h=w0(t),d=A0(t),p=h0(t),g=d0(s),b=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),f.length>0&&(f+=`
`)):(m=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?ze.tonemapping_pars_fragment:"",t.toneMapping!==En?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),u0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=xa(o),o=bc(o,t),o=yc(o,t),a=xa(a),a=bc(a,t),a=yc(a,t),o=Mc(o),a=Mc(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+o,S=v+f+a,A=vc(i,i.VERTEX_SHADER,y),T=vc(i,i.FRAGMENT_SHADER,S);i.attachShader(b,A),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(b)||"",W=i.getShaderInfoLog(A)||"",j=i.getShaderInfoLog(T)||"",U=O.trim(),V=W.trim(),z=j.trim();let Q=!0,ee=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,A,T);else{const ue=_c(i,A,"vertex"),_e=_c(i,T,"fragment");we("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+ue+`
`+_e)}else U!==""?ye("WebGLProgram: Program Info Log:",U):(V===""||z==="")&&(ee=!1);ee&&(P.diagnostics={runnable:Q,programLog:U,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:f}})}i.deleteShader(A),i.deleteShader(T),_=new ds(i,b),w=f0(i,b)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(b,i0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=T,this}let C0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new D0(e),t.set(e,n)),n}}class D0{constructor(e){this.id=C0++,this.code=e,this.usedTimes=0}}function L0(r){return r===vi||r===ms||r===gs}function I0(r,e,t,n,i,s){const o=new Na,a=new P0,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,w,N,P,O,W){const j=P.fog,U=O.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||V,z),ee=Q&&Q.mapping===Es?Q.image.height:null,ue=p[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&ye("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const _e=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Te=_e!==void 0?_e.length:0;let Ye=0;U.morphAttributes.position!==void 0&&(Ye=1),U.morphAttributes.normal!==void 0&&(Ye=2),U.morphAttributes.color!==void 0&&(Ye=3);let it,Oe,$,fe;if(ue){const Ue=Mn[ue];it=Ue.vertexShader,Oe=Ue.fragmentShader}else it=_.vertexShader,Oe=_.fragmentShader,a.update(_),$=a.getVertexShaderID(_),fe=a.getFragmentShaderID(_);const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,vt=!!_.map,Ke=!!_.matcap,rt=!!Q,mt=!!_.aoMap,Ge=!!_.lightMap,Ct=!!_.bumpMap,xt=!!_.normalMap,Yt=!!_.displacementMap,I=!!_.emissiveMap,Pt=!!_.metalnessMap,qe=!!_.roughnessMap,dt=_.anisotropy>0,le=_.clearcoat>0,bt=_.dispersion>0,E=_.iridescence>0,x=_.sheen>0,B=_.transmission>0,q=dt&&!!_.anisotropyMap,J=le&&!!_.clearcoatMap,te=le&&!!_.clearcoatNormalMap,ae=le&&!!_.clearcoatRoughnessMap,X=E&&!!_.iridescenceMap,Y=E&&!!_.iridescenceThicknessMap,pe=x&&!!_.sheenColorMap,ve=x&&!!_.sheenRoughnessMap,se=!!_.specularMap,ne=!!_.specularColorMap,De=!!_.specularIntensityMap,Be=B&&!!_.transmissionMap,Ze=B&&!!_.thicknessMap,L=!!_.gradientMap,ie=!!_.alphaMap,K=_.alphaTest>0,me=!!_.alphaHash,oe=!!_.extensions;let Z=En;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Z=r.toneMapping);const Me={shaderID:ue,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:Oe,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:vt,matcap:Ke,envMap:rt,envMapMode:rt&&Q.mapping,envMapCubeUVHeight:ee,aoMap:mt,lightMap:Ge,bumpMap:Ct,normalMap:xt,displacementMap:Yt,emissiveMap:I,normalMapObjectSpace:xt&&_.normalMapType===Mh,normalMapTangentSpace:xt&&_.normalMapType===ha,packedNormalMap:xt&&_.normalMapType===ha&&L0(_.normalMap.format),metalnessMap:Pt,roughnessMap:qe,anisotropy:dt,anisotropyMap:q,clearcoat:le,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,dispersion:bt,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:Y,sheen:x,sheenColorMap:pe,sheenRoughnessMap:ve,specularMap:se,specularColorMap:ne,specularIntensityMap:De,transmission:B,transmissionMap:Be,thicknessMap:Ze,gradientMap:L,opaque:_.transparent===!1&&_.blending===ki&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:K,alphaHash:me,combine:_.combine,mapUv:vt&&g(_.map.channel),aoMapUv:mt&&g(_.aoMap.channel),lightMapUv:Ge&&g(_.lightMap.channel),bumpMapUv:Ct&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:Yt&&g(_.displacementMap.channel),emissiveMapUv:I&&g(_.emissiveMap.channel),metalnessMapUv:Pt&&g(_.metalnessMap.channel),roughnessMapUv:qe&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:J&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(_.sheenRoughnessMap.channel),specularMapUv:se&&g(_.specularMap.channel),specularColorMapUv:ne&&g(_.specularColorMap.channel),specularIntensityMapUv:De&&g(_.specularIntensityMap.channel),transmissionMapUv:Be&&g(_.transmissionMap.channel),thicknessMapUv:Ze&&g(_.thicknessMap.channel),alphaMapUv:ie&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||dt),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(vt||ie),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ae,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Z,decodeVideoTexture:vt&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:I&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qt,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)w.push(N),w.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(f(w,_),v(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function f(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function y(_){const w=p[_.type];let N;if(w){const P=Mn[w];N=Ad.clone(P.uniforms)}else N=_.uniforms;return N}function S(_,w){let N=u.get(w);return N!==void 0?++N.usedTimes:(N=new R0(r,w,_,i),c.push(N),u.set(w,N)),N}function A(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function N0(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function U0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Tc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ec(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,b,m,f){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},r[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=o(d),v.groupOrder=b,v.renderOrder=d.renderOrder,v.z=m,v.group=f),e++,v}function l(d,p,g,b,m,f){const v=a(d,p,g,b,m,f);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function c(d,p,g,b,m,f){const v=a(d,p,g,b,m,f);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,p){t.length>1&&t.sort(d||U0),n.length>1&&n.sort(p||Tc),i.length>1&&i.sort(p||Tc)}function h(){for(let d=e,p=r.length;d<p;d++){const g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function F0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ec,r.set(n,[o])):i>=s.length?(o=new Ec,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function O0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function B0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let z0=0;function H0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function k0(r){const e=new O0,t=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,s=new Le,o=new Le;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,v=0,y=0,S=0,A=0,T=0,R=0;c.sort(H0);for(let w=0,N=c.length;w<N;w++){const P=c[w],O=P.color,W=P.intensity,j=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vi?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*W,h+=O.g*W,d+=O.b*W;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],W);R++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=V,p++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(W),V.distance=j,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[b]=V;const z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[b]=z.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=U,S++}b++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(O).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const z=P.shadow,Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(W),V.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[f]=V,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==b||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==v||_.numPointShadows!==y||_.numSpotShadows!==S||_.numSpotMaps!==A||_.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,_.directionalLength=p,_.pointLength=g,_.spotLength=b,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=v,_.numPointShadows=y,_.numSpotShadows=S,_.numSpotMaps=A,_.numLightProbes=R,n.version=z0++)}function l(c,u){let h=0,d=0,p=0,g=0,b=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(y.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[b];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:n}}function wc(r){const e=new k0(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function V0(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new wc(r),e.set(i,[a])):s>=o.length?(a=new wc(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`,X0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],j0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ac=new Le,dr=new C,vo=new C;function K0(r,e,t){let n=new Ba;const i=new He,s=new He,o=new ht,a=new Dd,l=new Ld,c={},u=t.maxTextureSize,h={[tn]:Gt,[Gt]:tn,[Qt]:Qt},d=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let f=this.type;this.render=function(T,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Zu&&(ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=os);const w=r.getRenderTarget(),N=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=f!==this.type;W&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(U=>U.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,U=T.length;j<U;j++){const V=T[j],z=V.shadow;if(z===void 0){ye("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Q=z.getFrameExtents();i.multiply(Q),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,z.mapSize.y=s.y));const ee=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ee,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===mr){if(V.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ft(i.x,i.y,{format:vi,type:Cn,minFilter:nt,magFilter:nt,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Ki(i.x,i.y,en),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Gn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wt,z.map.depthTexture.magFilter=wt}else V.isPointLight?(z.map=new Ru(i.x),z.map.depthTexture=new Ed(i.x,Rn)):(z.map=new Ft(i.x,i.y),z.map.depthTexture=new Ki(i.x,i.y,Rn)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Gn,this.type===os?(z.map.depthTexture.compareFunction=ee?Da:Pa,z.map.depthTexture.minFilter=nt,z.map.depthTexture.magFilter=nt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wt,z.map.depthTexture.magFilter=wt);z.camera.updateProjectionMatrix()}const ue=z.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ue;_e++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,_e),r.clear();else{_e===0&&(r.setRenderTarget(z.map),r.clear());const Te=z.getViewport(_e);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),O.viewport(o)}if(V.isPointLight){const Te=z.camera,Ye=z.matrix,it=V.distance||Te.far;it!==Te.far&&(Te.far=it,Te.updateProjectionMatrix()),dr.setFromMatrixPosition(V.matrixWorld),Te.position.copy(dr),vo.copy(Te.position),vo.add(X0[_e]),Te.up.copy(j0[_e]),Te.lookAt(vo),Te.updateMatrixWorld(),Ye.makeTranslation(-dr.x,-dr.y,-dr.z),Ac.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ac,Te.coordinateSystem,Te.reversedDepth)}else z.updateMatrices(V);n=z.getFrustum(),S(R,_,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===mr&&v(z,_),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(w,N,P)};function v(T,R){const _=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ft(i.x,i.y,{format:vi,type:Cn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,_,d,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,_,p,b,null)}function y(T,R,_,w){let N=null;const P=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)N=P;else if(N=_.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=N.uuid,W=R.uuid;let j=c[O];j===void 0&&(j={},c[O]=j);let U=j[W];U===void 0&&(U=N.clone(),j[W]=U,R.addEventListener("dispose",A)),N=U}if(N.visible=R.visible,N.wireframe=R.wireframe,w===mr?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:h[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const O=r.properties.get(N);O.light=_}return N}function S(T,R,_,w,N){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===mr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const W=e.update(T),j=T.material;if(Array.isArray(j)){const U=W.groups;for(let V=0,z=U.length;V<z;V++){const Q=U[V],ee=j[Q.materialIndex];if(ee&&ee.visible){const ue=y(T,ee,w,N);T.onBeforeShadow(r,T,R,_,W,ue,Q),r.renderBufferDirect(_,null,W,ue,T,Q),T.onAfterShadow(r,T,R,_,W,ue,Q)}}}else if(j.visible){const U=y(T,j,w,N);T.onBeforeShadow(r,T,R,_,W,U,null),r.renderBufferDirect(_,null,W,U,T,null),T.onAfterShadow(r,T,R,_,W,U,null)}}const O=T.children;for(let W=0,j=O.length;W<j;W++)S(O[W],R,_,w,N)}function A(T){T.target.removeEventListener("dispose",A);for(const _ in c){const w=c[_],N=T.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function q0(r,e){function t(){let L=!1;const ie=new ht;let K=null;const me=new ht(0,0,0,0);return{setMask:function(oe){K!==oe&&!L&&(r.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){L=oe},setClear:function(oe,Z,Me,Ue,St){St===!0&&(oe*=Ue,Z*=Ue,Me*=Ue),ie.set(oe,Z,Me,Ue),me.equals(ie)===!1&&(r.clearColor(oe,Z,Me,Ue),me.copy(ie))},reset:function(){L=!1,K=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ie=!1,K=null,me=null,oe=null;return{setReversed:function(Z){if(ie!==Z){const Me=e.get("EXT_clip_control");Z?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Ue=oe;oe=null,this.setClear(Ue)}},getReversed:function(){return ie},setTest:function(Z){Z?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Z){K!==Z&&!L&&(r.depthMask(Z),K=Z)},setFunc:function(Z){if(ie&&(Z=Ih[Z]),me!==Z){switch(Z){case Ao:r.depthFunc(r.NEVER);break;case Ro:r.depthFunc(r.ALWAYS);break;case Co:r.depthFunc(r.LESS);break;case Wi:r.depthFunc(r.LEQUAL);break;case Po:r.depthFunc(r.EQUAL);break;case Do:r.depthFunc(r.GEQUAL);break;case Lo:r.depthFunc(r.GREATER);break;case Io:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Z}},setLocked:function(Z){L=Z},setClear:function(Z){oe!==Z&&(oe=Z,ie&&(Z=1-Z),r.clearDepth(Z))},reset:function(){L=!1,K=null,me=null,oe=null,ie=!1}}}function i(){let L=!1,ie=null,K=null,me=null,oe=null,Z=null,Me=null,Ue=null,St=null;return{setTest:function(st){L||(st?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(st){ie!==st&&!L&&(r.stencilMask(st),ie=st)},setFunc:function(st,Ln,vn){(K!==st||me!==Ln||oe!==vn)&&(r.stencilFunc(st,Ln,vn),K=st,me=Ln,oe=vn)},setOp:function(st,Ln,vn){(Z!==st||Me!==Ln||Ue!==vn)&&(r.stencilOp(st,Ln,vn),Z=st,Me=Ln,Ue=vn)},setLocked:function(st){L=st},setClear:function(st){St!==st&&(r.clearStencil(st),St=st)},reset:function(){L=!1,ie=null,K=null,me=null,oe=null,Z=null,Me=null,Ue=null,St=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,v=null,y=null,S=null,A=null,T=null,R=null,_=new Ce(0,0,0),w=0,N=!1,P=null,O=null,W=null,j=null,U=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),z=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),z=Q>=2);let ue=null,_e={};const Te=r.getParameter(r.SCISSOR_BOX),Ye=r.getParameter(r.VIEWPORT),it=new ht().fromArray(Te),Oe=new ht().fromArray(Ye);function $(L,ie,K,me){const oe=new Uint8Array(4),Z=r.createTexture();r.bindTexture(L,Z),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<K;Me++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ie+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return Z}const fe={};fe[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(Wi),Ct(!1),xt(ll),re(r.CULL_FACE),mt(fn);function re(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ae(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ie(L,ie){return d[L]!==ie?(r.bindFramebuffer(L,ie),d[L]=ie,L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ie),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(L,ie){let K=g,me=!1;if(L){K=p.get(ie),K===void 0&&(K=[],p.set(ie,K));const oe=L.textures;if(K.length!==oe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Me=oe.length;Z<Me;Z++)K[Z]=r.COLOR_ATTACHMENT0+Z;K.length=oe.length,me=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,me=!0);me&&r.drawBuffers(K)}function vt(L){return b!==L?(r.useProgram(L),b=L,!0):!1}const Ke={[fi]:r.FUNC_ADD,[Qu]:r.FUNC_SUBTRACT,[eh]:r.FUNC_REVERSE_SUBTRACT};Ke[th]=r.MIN,Ke[nh]=r.MAX;const rt={[ih]:r.ZERO,[rh]:r.ONE,[sh]:r.SRC_COLOR,[Eo]:r.SRC_ALPHA,[hh]:r.SRC_ALPHA_SATURATE,[ch]:r.DST_COLOR,[ah]:r.DST_ALPHA,[oh]:r.ONE_MINUS_SRC_COLOR,[wo]:r.ONE_MINUS_SRC_ALPHA,[uh]:r.ONE_MINUS_DST_COLOR,[lh]:r.ONE_MINUS_DST_ALPHA,[dh]:r.CONSTANT_COLOR,[fh]:r.ONE_MINUS_CONSTANT_COLOR,[ph]:r.CONSTANT_ALPHA,[mh]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(L,ie,K,me,oe,Z,Me,Ue,St,st){if(L===fn){m===!0&&(Ae(r.BLEND),m=!1);return}if(m===!1&&(re(r.BLEND),m=!0),L!==Ju){if(L!==f||st!==N){if((v!==fi||A!==fi)&&(r.blendEquation(r.FUNC_ADD),v=fi,A=fi),st)switch(L){case ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cl:r.blendFunc(r.ONE,r.ONE);break;case ul:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",L);break}else switch(L){case ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ul:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",L);break}y=null,S=null,T=null,R=null,_.set(0,0,0),w=0,f=L,N=st}return}oe=oe||ie,Z=Z||K,Me=Me||me,(ie!==v||oe!==A)&&(r.blendEquationSeparate(Ke[ie],Ke[oe]),v=ie,A=oe),(K!==y||me!==S||Z!==T||Me!==R)&&(r.blendFuncSeparate(rt[K],rt[me],rt[Z],rt[Me]),y=K,S=me,T=Z,R=Me),(Ue.equals(_)===!1||St!==w)&&(r.blendColor(Ue.r,Ue.g,Ue.b,St),_.copy(Ue),w=St),f=L,N=!1}function Ge(L,ie){L.side===Qt?Ae(r.CULL_FACE):re(r.CULL_FACE);let K=L.side===Gt;ie&&(K=!K),Ct(K),L.blending===ki&&L.transparent===!1?mt(fn):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){P!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),P=L)}function xt(L){L!==Yu?(re(r.CULL_FACE),L!==O&&(L===ll?r.cullFace(r.BACK):L===$u?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),O=L}function Yt(L){L!==W&&(z&&r.lineWidth(L),W=L)}function I(L,ie,K){L?(re(r.POLYGON_OFFSET_FILL),(j!==ie||U!==K)&&(j=ie,U=K,o.getReversed()&&(ie=-ie),r.polygonOffset(ie,K))):Ae(r.POLYGON_OFFSET_FILL)}function Pt(L){L?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function qe(L){L===void 0&&(L=r.TEXTURE0+V-1),ue!==L&&(r.activeTexture(L),ue=L)}function dt(L,ie,K){K===void 0&&(ue===null?K=r.TEXTURE0+V-1:K=ue);let me=_e[K];me===void 0&&(me={type:void 0,texture:void 0},_e[K]=me),(me.type!==L||me.texture!==ie)&&(ue!==K&&(r.activeTexture(K),ue=K),r.bindTexture(L,ie||fe[L]),me.type=L,me.texture=ie)}function le(){const L=_e[ue];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function bt(){try{r.compressedTexImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function E(){try{r.compressedTexImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function x(){try{r.texSubImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function B(){try{r.texSubImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function te(){try{r.texStorage2D(...arguments)}catch(L){we("WebGLState:",L)}}function ae(){try{r.texStorage3D(...arguments)}catch(L){we("WebGLState:",L)}}function X(){try{r.texImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function Y(){try{r.texImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function pe(L){return h[L]!==void 0?h[L]:r.getParameter(L)}function ve(L,ie){h[L]!==ie&&(r.pixelStorei(L,ie),h[L]=ie)}function se(L){it.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function ne(L){Oe.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function De(L,ie){let K=c.get(ie);K===void 0&&(K=new WeakMap,c.set(ie,K));let me=K.get(L);me===void 0&&(me=r.getUniformBlockIndex(ie,L.name),K.set(L,me))}function Be(L,ie){const me=c.get(ie).get(L);l.get(ie)!==me&&(r.uniformBlockBinding(ie,me,L.__bindingPointIndex),l.set(ie,me))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},ue=null,_e={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,v=null,y=null,S=null,A=null,T=null,R=null,_=new Ce(0,0,0),w=0,N=!1,P=null,O=null,W=null,j=null,U=null,it.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ae,bindFramebuffer:Ie,drawBuffers:Re,useProgram:vt,setBlending:mt,setMaterial:Ge,setFlipSided:Ct,setCullFace:xt,setLineWidth:Yt,setPolygonOffset:I,setScissorTest:Pt,activeTexture:qe,bindTexture:dt,unbindTexture:le,compressedTexImage2D:bt,compressedTexImage3D:E,texImage2D:X,texImage3D:Y,pixelStorei:ve,getParameter:pe,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:te,texStorage3D:ae,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:se,viewport:ne,reset:Ze}}function Y0(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,x){return g?new OffscreenCanvas(E,x):wr("canvas")}function m(E,x,B){let q=1;const J=bt(E);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const te=Math.floor(q*J.width),ae=Math.floor(q*J.height);d===void 0&&(d=b(te,ae));const X=x?b(te,ae):d;return X.width=te,X.height=ae,X.getContext("2d").drawImage(E,0,0,te,ae),ye("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+ae+")."),X}else return"data"in E&&ye("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function f(E){return E.generateMipmaps}function v(E){r.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(E,x,B,q,J,te=!1){if(E!==null){if(r[E]!==void 0)return r[E];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=x;if(x===r.RED&&(B===r.FLOAT&&(X=r.R32F),B===r.HALF_FLOAT&&(X=r.R16F),B===r.UNSIGNED_BYTE&&(X=r.R8),B===r.UNSIGNED_SHORT&&ae&&(X=ae.R16_EXT),B===r.SHORT&&ae&&(X=ae.R16_SNORM_EXT)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.R8UI),B===r.UNSIGNED_SHORT&&(X=r.R16UI),B===r.UNSIGNED_INT&&(X=r.R32UI),B===r.BYTE&&(X=r.R8I),B===r.SHORT&&(X=r.R16I),B===r.INT&&(X=r.R32I)),x===r.RG&&(B===r.FLOAT&&(X=r.RG32F),B===r.HALF_FLOAT&&(X=r.RG16F),B===r.UNSIGNED_BYTE&&(X=r.RG8),B===r.UNSIGNED_SHORT&&ae&&(X=ae.RG16_EXT),B===r.SHORT&&ae&&(X=ae.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RG8UI),B===r.UNSIGNED_SHORT&&(X=r.RG16UI),B===r.UNSIGNED_INT&&(X=r.RG32UI),B===r.BYTE&&(X=r.RG8I),B===r.SHORT&&(X=r.RG16I),B===r.INT&&(X=r.RG32I)),x===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGB8UI),B===r.UNSIGNED_SHORT&&(X=r.RGB16UI),B===r.UNSIGNED_INT&&(X=r.RGB32UI),B===r.BYTE&&(X=r.RGB8I),B===r.SHORT&&(X=r.RGB16I),B===r.INT&&(X=r.RGB32I)),x===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),B===r.UNSIGNED_INT&&(X=r.RGBA32UI),B===r.BYTE&&(X=r.RGBA8I),B===r.SHORT&&(X=r.RGBA16I),B===r.INT&&(X=r.RGBA32I)),x===r.RGB&&(B===r.UNSIGNED_SHORT&&ae&&(X=ae.RGB16_EXT),B===r.SHORT&&ae&&(X=ae.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),x===r.RGBA){const Y=te?vs:Xe.getTransfer(J);B===r.FLOAT&&(X=r.RGBA32F),B===r.HALF_FLOAT&&(X=r.RGBA16F),B===r.UNSIGNED_BYTE&&(X=Y===Qe?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&ae&&(X=ae.RGBA16_EXT),B===r.SHORT&&ae&&(X=ae.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(E,x){let B;return E?x===null||x===Rn||x===Mr?B=r.DEPTH24_STENCIL8:x===en?B=r.DEPTH32F_STENCIL8:x===yr&&(B=r.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===Mr?B=r.DEPTH_COMPONENT24:x===en?B=r.DEPTH_COMPONENT32F:x===yr&&(B=r.DEPTH_COMPONENT16),B}function T(E,x){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==wt&&E.minFilter!==nt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){const x=E.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function _(E){const x=E.target;x.removeEventListener("dispose",_),P(x)}function w(E){const x=n.get(E);if(x.__webglInit===void 0)return;const B=E.source,q=p.get(B);if(q){const J=q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(E),Object.keys(q).length===0&&p.delete(B)}n.remove(E)}function N(E){const x=n.get(E);r.deleteTexture(x.__webglTexture);const B=E.source,q=p.get(B);delete q[x.__cacheKey],o.memory.textures--}function P(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let J=0;J<x.__webglFramebuffer[q].length;J++)r.deleteFramebuffer(x.__webglFramebuffer[q][J]);else r.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)r.deleteFramebuffer(x.__webglFramebuffer[q]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=E.textures;for(let q=0,J=B.length;q<J;q++){const te=n.get(B[q]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(B[q])}n.remove(E)}let O=0;function W(){O=0}function j(){return O}function U(E){O=E}function V(){const E=O;return E>=i.maxTextures&&ye("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),O+=1,E}function z(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Q(E,x){const B=n.get(E);if(E.isVideoTexture&&dt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const q=E.image;if(q===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,E,x);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function ee(E,x){const B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Ae(B,E,x);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function ue(E,x){const B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Ae(B,E,x);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function _e(E,x){const B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Ie(B,E,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}const Te={[ii]:r.REPEAT,[an]:r.CLAMP_TO_EDGE,[ps]:r.MIRRORED_REPEAT},Ye={[wt]:r.NEAREST,[tu]:r.NEAREST_MIPMAP_NEAREST,[gr]:r.NEAREST_MIPMAP_LINEAR,[nt]:r.LINEAR,[as]:r.LINEAR_MIPMAP_NEAREST,[Sn]:r.LINEAR_MIPMAP_LINEAR},it={[Sh]:r.NEVER,[Rh]:r.ALWAYS,[Th]:r.LESS,[Pa]:r.LEQUAL,[Eh]:r.EQUAL,[Da]:r.GEQUAL,[wh]:r.GREATER,[Ah]:r.NOTEQUAL};function Oe(E,x){if(x.type===en&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nt||x.magFilter===as||x.magFilter===gr||x.magFilter===Sn||x.minFilter===nt||x.minFilter===as||x.minFilter===gr||x.minFilter===Sn)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,Te[x.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,Te[x.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,Te[x.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,Ye[x.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,Ye[x.minFilter]),x.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==gr&&x.minFilter!==Sn||x.type===en&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let J=p.get(q);J===void 0&&(J={},p.set(q,J));const te=z(x);if(te!==E.__cacheKey){J[te]===void 0&&(J[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[te].usedTimes++;const ae=J[E.__cacheKey];ae!==void 0&&(J[E.__cacheKey].usedTimes--,ae.usedTimes===0&&N(x)),E.__cacheKey=te,E.__webglTexture=J[te].texture}return B}function fe(E,x,B){return Math.floor(Math.floor(E/B)/x)}function re(E,x,B,q){const te=E.updateRanges;if(te.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{te.sort((ve,se)=>ve.start-se.start);let ae=0;for(let ve=1;ve<te.length;ve++){const se=te[ae],ne=te[ve],De=se.start+se.count,Be=fe(ne.start,x.width,4),Ze=fe(se.start,x.width,4);ne.start<=De+1&&Be===Ze&&fe(ne.start+ne.count-1,x.width,4)===Be?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++ae,te[ae]=ne)}te.length=ae+1;const X=t.getParameter(r.UNPACK_ROW_LENGTH),Y=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let ve=0,se=te.length;ve<se;ve++){const ne=te[ve],De=Math.floor(ne.start/4),Be=Math.ceil(ne.count/4),Ze=De%x.width,L=Math.floor(De/x.width),ie=Be,K=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Ze,L,ie,K,B,q,x.data)}E.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,X),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function Ae(E,x,B){let q=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=r.TEXTURE_3D);const J=$(E,x),te=x.source;t.bindTexture(q,E.__webglTexture,r.TEXTURE0+B);const ae=n.get(te);if(te.version!==ae.__version||J===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=Xe.getPrimaries(Xe.workingColorSpace),me=x.colorSpace===zn?null:Xe.getPrimaries(x.colorSpace),oe=x.colorSpace===zn||K===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let Y=m(x.image,!1,i.maxTextureSize);Y=le(x,Y);const pe=s.convert(x.format,x.colorSpace),ve=s.convert(x.type);let se=S(x.internalFormat,pe,ve,x.normalized,x.colorSpace,x.isVideoTexture);Oe(q,x);let ne;const De=x.mipmaps,Be=x.isVideoTexture!==!0,Ze=ae.__version===void 0||J===!0,L=te.dataReady,ie=T(x,Y);if(x.isDepthTexture)se=A(x.format===mi,x.type),Ze&&(Be?t.texStorage2D(r.TEXTURE_2D,1,se,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,se,Y.width,Y.height,0,pe,ve,null));else if(x.isDataTexture)if(De.length>0){Be&&Ze&&t.texStorage2D(r.TEXTURE_2D,ie,se,De[0].width,De[0].height);for(let K=0,me=De.length;K<me;K++)ne=De[K],Be?L&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ne.width,ne.height,pe,ve,ne.data):t.texImage2D(r.TEXTURE_2D,K,se,ne.width,ne.height,0,pe,ve,ne.data);x.generateMipmaps=!1}else Be?(Ze&&t.texStorage2D(r.TEXTURE_2D,ie,se,Y.width,Y.height),L&&re(x,Y,pe,ve)):t.texImage2D(r.TEXTURE_2D,0,se,Y.width,Y.height,0,pe,ve,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,se,De[0].width,De[0].height,Y.depth);for(let K=0,me=De.length;K<me;K++)if(ne=De[K],x.format!==Vt)if(pe!==null)if(Be){if(L)if(x.layerUpdates.size>0){const oe=rc(ne.width,ne.height,x.format,x.type);for(const Z of x.layerUpdates){const Me=ne.data.subarray(Z*oe/ne.data.BYTES_PER_ELEMENT,(Z+1)*oe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,Z,ne.width,ne.height,1,pe,Me)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,Y.depth,pe,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,se,ne.width,ne.height,Y.depth,0,ne.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,Y.depth,pe,ve,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,se,ne.width,ne.height,Y.depth,0,pe,ve,ne.data)}else{Be&&Ze&&t.texStorage2D(r.TEXTURE_2D,ie,se,De[0].width,De[0].height);for(let K=0,me=De.length;K<me;K++)ne=De[K],x.format!==Vt?pe!==null?Be?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,K,se,ne.width,ne.height,0,ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ne.width,ne.height,pe,ve,ne.data):t.texImage2D(r.TEXTURE_2D,K,se,ne.width,ne.height,0,pe,ve,ne.data)}else if(x.isDataArrayTexture)if(Be){if(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,se,Y.width,Y.height,Y.depth),L)if(x.layerUpdates.size>0){const K=rc(Y.width,Y.height,x.format,x.type);for(const me of x.layerUpdates){const oe=Y.data.subarray(me*K/Y.data.BYTES_PER_ELEMENT,(me+1)*K/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Y.width,Y.height,1,pe,ve,oe)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,pe,ve,Y.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,Y.width,Y.height,Y.depth,0,pe,ve,Y.data);else if(x.isData3DTexture)Be?(Ze&&t.texStorage3D(r.TEXTURE_3D,ie,se,Y.width,Y.height,Y.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,pe,ve,Y.data)):t.texImage3D(r.TEXTURE_3D,0,se,Y.width,Y.height,Y.depth,0,pe,ve,Y.data);else if(x.isFramebufferTexture){if(Ze)if(Be)t.texStorage2D(r.TEXTURE_2D,ie,se,Y.width,Y.height);else{let K=Y.width,me=Y.height;for(let oe=0;oe<ie;oe++)t.texImage2D(r.TEXTURE_2D,oe,se,K,me,0,pe,ve,null),K>>=1,me>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Y.parentNode!==K){K.appendChild(Y),h.add(x),K.onpaint=Ue=>{const St=Ue.changedElements;for(const st of h)St.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}const me=0,oe=r.RGBA,Z=r.RGBA,Me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,me,oe,Z,Me,Y),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(De.length>0){if(Be&&Ze){const K=bt(De[0]);t.texStorage2D(r.TEXTURE_2D,ie,se,K.width,K.height)}for(let K=0,me=De.length;K<me;K++)ne=De[K],Be?L&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,pe,ve,ne):t.texImage2D(r.TEXTURE_2D,K,se,pe,ve,ne);x.generateMipmaps=!1}else if(Be){if(Ze){const K=bt(Y);t.texStorage2D(r.TEXTURE_2D,ie,se,K.width,K.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,ve,Y)}else t.texImage2D(r.TEXTURE_2D,0,se,pe,ve,Y);f(x)&&v(q),ae.__version=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ie(E,x,B){if(x.image.length!==6)return;const q=$(E,x),J=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+B);const te=n.get(J);if(J.version!==te.__version||q===!0){t.activeTexture(r.TEXTURE0+B);const ae=Xe.getPrimaries(Xe.workingColorSpace),X=x.colorSpace===zn?null:Xe.getPrimaries(x.colorSpace),Y=x.colorSpace===zn||ae===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,ve=x.image[0]&&x.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!pe&&!ve?se[Z]=m(x.image[Z],!0,i.maxCubemapSize):se[Z]=ve?x.image[Z].image:x.image[Z],se[Z]=le(x,se[Z]);const ne=se[0],De=s.convert(x.format,x.colorSpace),Be=s.convert(x.type),Ze=S(x.internalFormat,De,Be,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ie=te.__version===void 0||q===!0,K=J.dataReady;let me=T(x,ne);Oe(r.TEXTURE_CUBE_MAP,x);let oe;if(pe){L&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ze,ne.width,ne.height);for(let Z=0;Z<6;Z++){oe=se[Z].mipmaps;for(let Me=0;Me<oe.length;Me++){const Ue=oe[Me];x.format!==Vt?De!==null?L?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,Ze,Ue.width,Ue.height,0,Ue.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Ue.width,Ue.height,De,Be,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,Ze,Ue.width,Ue.height,0,De,Be,Ue.data)}}}else{if(oe=x.mipmaps,L&&ie){oe.length>0&&me++;const Z=bt(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ve){L?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,De,Be,se[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,se[Z].width,se[Z].height,0,De,Be,se[Z].data);for(let Me=0;Me<oe.length;Me++){const St=oe[Me].image[Z].image;L?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,St.width,St.height,De,Be,St.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,Ze,St.width,St.height,0,De,Be,St.data)}}else{L?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,Be,se[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,De,Be,se[Z]);for(let Me=0;Me<oe.length;Me++){const Ue=oe[Me];L?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,De,Be,Ue.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,Ze,De,Be,Ue.image[Z])}}}f(x)&&v(r.TEXTURE_CUBE_MAP),te.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Re(E,x,B,q,J,te){const ae=s.convert(B.format,B.colorSpace),X=s.convert(B.type),Y=S(B.internalFormat,ae,X,B.normalized,B.colorSpace),pe=n.get(x),ve=n.get(B);if(ve.__renderTarget=x,!pe.__hasExternalTextures){const se=Math.max(1,x.width>>te),ne=Math.max(1,x.height>>te);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,te,Y,se,ne,x.depth,0,ae,X,null):t.texImage2D(J,te,Y,se,ne,0,ae,X,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),qe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,J,ve.__webglTexture,0,Pt(x)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,J,ve.__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(E,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),x.depthBuffer){const q=x.depthTexture,J=q&&q.isDepthTexture?q.type:null,te=A(x.stencilBuffer,J),ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt(x),te,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt(x),te,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,te,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,E)}else{const q=x.textures;for(let J=0;J<q.length;J++){const te=q[J],ae=s.convert(te.format,te.colorSpace),X=s.convert(te.type),Y=S(te.internalFormat,ae,X,te.normalized,te.colorSpace);qe(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt(x),Y,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt(x),Y,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Y,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(E,x,B){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x.depthTexture);const pe=s.convert(x.depthTexture.format),ve=s.convert(x.depthTexture.type);let se;x.depthTexture.format===Gn?se=r.DEPTH_COMPONENT24:x.depthTexture.format===mi&&(se=r.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,x.width,x.height,0,pe,ve,null)}}else Q(x.depthTexture,0);const te=J.__webglTexture,ae=Pt(x),X=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Y=x.depthTexture.format===mi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)qe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,X,te,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,Y,X,te,0);else if(x.depthTexture.format===mi)qe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,X,te,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,Y,X,te,0);else throw new Error("Unknown depthTexture format")}function rt(E){const x=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=q}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)Ke(x.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?Ke(x.__webglFramebuffer[0],E,0):Ke(x.__webglFramebuffer,E,0)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=r.createRenderbuffer(),vt(x.__webglDepthbuffer[q],E,!1);else{const J=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,te)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),vt(x.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,te)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(E,x,B){const q=n.get(E);x!==void 0&&Re(q.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&rt(E)}function Ge(E){const x=E.texture,B=n.get(E),q=n.get(x);E.addEventListener("dispose",_);const J=E.textures,te=E.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=x.version,o.memory.textures++),te){B.__webglFramebuffer=[];for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[X]=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[X][Y]=r.createFramebuffer()}else B.__webglFramebuffer[X]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let X=0;X<x.mipmaps.length;X++)B.__webglFramebuffer[X]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ae)for(let X=0,Y=J.length;X<Y;X++){const pe=n.get(J[X]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(E.samples>0&&qe(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let X=0;X<J.length;X++){const Y=J[X];B.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[X]);const pe=s.convert(Y.format,Y.colorSpace),ve=s.convert(Y.type),se=S(Y.internalFormat,pe,ve,Y.normalized,Y.colorSpace,E.isXRRenderTarget===!0),ne=Pt(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,se,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,B.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x);for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Re(B.__webglFramebuffer[X][Y],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else Re(B.__webglFramebuffer[X],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(x)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let X=0,Y=J.length;X<Y;X++){const pe=J[X],ve=n.get(pe);let se=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ve.__webglTexture),Oe(se,pe),Re(B.__webglFramebuffer,E,pe,r.COLOR_ATTACHMENT0+X,se,0),f(pe)&&v(se)}t.unbindTexture()}else{let X=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(X,q.__webglTexture),Oe(X,x),x.mipmaps&&x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Re(B.__webglFramebuffer[Y],E,x,r.COLOR_ATTACHMENT0,X,Y);else Re(B.__webglFramebuffer,E,x,r.COLOR_ATTACHMENT0,X,0);f(x)&&v(X),t.unbindTexture()}E.depthBuffer&&rt(E)}function Ct(E){const x=E.textures;for(let B=0,q=x.length;B<q;B++){const J=x[B];if(f(J)){const te=y(E),ae=n.get(J).__webglTexture;t.bindTexture(te,ae),v(te),t.unbindTexture()}}}const xt=[],Yt=[];function I(E){if(E.samples>0){if(qe(E)===!1){const x=E.textures,B=E.width,q=E.height;let J=r.COLOR_BUFFER_BIT;const te=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(E),X=x.length>1;if(X)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Y=E.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),X){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);const ve=n.get(x[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,B,q,0,0,B,q,J,r.NEAREST),l===!0&&(xt.length=0,Yt.length=0,xt.push(r.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xt.push(te),Yt.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);const ve=n.get(x[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Pt(E){return Math.min(i.maxSamples,E.samples)}function qe(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function dt(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function le(E,x){const B=E.colorSpace,q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==nn&&B!==zn&&(Xe.getTransfer(B)===Qe?(q!==Vt||J!==qt)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",B)),x}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=j,this.setTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=_e,this.rebindTextures=mt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $0(r,e){function t(n,i=zn){let s;const o=Xe.getTransfer(i);if(n===qt)return r.UNSIGNED_BYTE;if(n===Ea)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return r.BYTE;if(n===iu)return r.SHORT;if(n===yr)return r.UNSIGNED_SHORT;if(n===Ta)return r.INT;if(n===Rn)return r.UNSIGNED_INT;if(n===en)return r.FLOAT;if(n===Cn)return r.HALF_FLOAT;if(n===ou)return r.ALPHA;if(n===au)return r.RGB;if(n===Vt)return r.RGBA;if(n===Gn)return r.DEPTH_COMPONENT;if(n===mi)return r.DEPTH_STENCIL;if(n===ws)return r.RED;if(n===Aa)return r.RED_INTEGER;if(n===vi)return r.RG;if(n===Ra)return r.RG_INTEGER;if(n===Ca)return r.RGBA_INTEGER;if(n===ls||n===cs||n===us||n===hs)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Uo||n===Fo||n===Oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===No)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===Ho||n===ko||n===Vo||n===ms||n===Go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bo||n===zo)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ho)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ko)return s.COMPRESSED_R11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ms)return s.COMPRESSED_RG11_EAC;if(n===Go)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===Xo||n===jo||n===Ko||n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===Qo||n===ea||n===ta||n===na||n===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===sa||n===oa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ra)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===la||n===gs||n===ca)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===la)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J0=`
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

}`;class Q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new at({vertexShader:Z0,fragmentShader:J0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ev extends xi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",m=new Q0,f={},v=t.getContextAttributes();let y=null,S=null;const A=[],T=[],R=new He;let _=null;const w=new kt;w.viewport=new ht;const N=new kt;N.viewport=new ht;const P=[w,N],O=new ef;let W=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=A[$];return fe===void 0&&(fe=new Gs,A[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=A[$];return fe===void 0&&(fe=new Gs,A[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=A[$];return fe===void 0&&(fe=new Gs,A[$]=fe),fe.getHandSpace()};function U($){const fe=T.indexOf($.inputSource);if(fe===-1)return;const re=A[fe];re!==void 0&&(re.update($.inputSource,$.frame,c||o),re.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let $=0;$<A.length;$++){const fe=T[$];fe!==null&&(T[$]=null,A[$].disconnect(fe))}W=null,j=null,m.reset();for(const $ in f)delete f[$];e.setRenderTarget(y),p=null,d=null,h=null,i=null,S=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ae=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?mi:Gn,Ae=v.stencil?Mr:Rn);const Re={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ft(d.textureWidth,d.textureHeight,{format:Vt,type:qt,depthTexture:new Ki(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ft(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let fe=0;fe<$.removed.length;fe++){const re=$.removed[fe],Ae=T.indexOf(re);Ae>=0&&(T[Ae]=null,A[Ae].disconnect(re))}for(let fe=0;fe<$.added.length;fe++){const re=$.added[fe];let Ae=T.indexOf(re);if(Ae===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(re),Ae=Re;break}else if(T[Re]===null){T[Re]=re,Ae=Re;break}if(Ae===-1)break}const Ie=A[Ae];Ie&&Ie.connect(re)}}const Q=new C,ee=new C;function ue($,fe,re){Q.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Ae=Q.distanceTo(ee),Ie=fe.projectionMatrix.elements,Re=re.projectionMatrix.elements,vt=Ie[14]/(Ie[10]-1),Ke=Ie[14]/(Ie[10]+1),rt=(Ie[9]+1)/Ie[5],mt=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],Ct=(Re[8]+1)/Re[0],xt=vt*Ge,Yt=vt*Ct,I=Ae/(-Ge+Ct),Pt=I*-Ge;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pt),$.translateZ(I),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=vt+I,dt=Ke+I,le=xt-Pt,bt=Yt+(Ae-Pt),E=rt*Ke/dt*qe,x=mt*Ke/dt*qe;$.projectionMatrix.makePerspective(le,bt,E,x,qe,dt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _e($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let fe=$.near,re=$.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),O.near=N.near=w.near=fe,O.far=N.far=w.far=re,(W!==O.near||j!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,j=O.far),O.layers.mask=$.layers.mask|6,w.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;const Ae=$.parent,Ie=O.cameras;_e(O,Ae);for(let Re=0;Re<Ie.length;Re++)_e(Ie[Re],Ae);Ie.length===2?ue(O,w,N):O.projectionMatrix.copy(w.projectionMatrix),Te($,O,Ae)};function Te($,fe,re){re===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ji*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return f[$]};let Ye=null;function it($,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ae=!1;re.length!==O.cameras.length&&(O.cameras.length=0,Ae=!0);for(let Ke=0;Ke<re.length;Ke++){const rt=re[Ke];let mt=null;if(p!==null)mt=p.getViewport(rt);else{const Ct=h.getViewSubImage(d,rt);mt=Ct.viewport,Ke===0&&(e.setRenderTargetTextures(S,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(S))}let Ge=P[Ke];Ge===void 0&&(Ge=new kt,Ge.layers.enable(Ke),Ge.viewport=new ht,P[Ke]=Ge),Ge.matrix.fromArray(rt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(rt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(mt.x,mt.y,mt.width,mt.height),Ke===0&&(O.matrix.copy(Ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ae===!0&&O.cameras.push(Ge)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const Ke=h.getDepthInformation(re[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(Ie&&Ie.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let Ke=0;Ke<re.length;Ke++){const rt=re[Ke].camera;if(rt){let mt=f[rt];mt||(mt=new xu,f[rt]=mt);const Ge=h.getCameraImage(rt);mt.sourceTexture=Ge}}}}for(let re=0;re<A.length;re++){const Ae=T[re],Ie=A[re];Ae!==null&&Ie!==void 0&&Ie.update(Ae,fe,c||o)}Ye&&Ye($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Oe=new wu;Oe.setAnimationLoop(it),this.setAnimationLoop=function($){Ye=$},this.dispose=function(){}}}const tv=new Le,Iu=new Ne;Iu.set(-1,0,0,0,1,0,0,0,1);function nv(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,_u(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),b(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Iu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iv(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;n.uniformBlockBinding(v,S)}function c(v,y){let S=i[v.id];S===void 0&&(g(v),S=u(v),i[v.id]=S,v.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(v,A);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const y=h();v.__bindingPointIndex=y;const S=r.createBuffer(),A=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],S=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,R=S.length;T<R;T++){const _=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,N=_.length;w<N;w++){const P=_[w];if(p(P,T,w,A)===!0){const O=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let U=0;U<W.length;U++){const V=W[U],z=b(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,O+j,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):ArrayBuffer.isView(V)?P.__data.set(new V.constructor(V.buffer,V.byteOffset,P.__data.length)):(V.toArray(P.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,y,S,A){const T=v.value,R=y+"_"+S;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:ArrayBuffer.isView(T)?A[R]=T.slice():A[R]=T.clone(),!0;{const _=A[R];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return A[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(v){const y=v.uniforms;let S=0;const A=16;for(let R=0,_=y.length;R<_;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let N=0,P=w.length;N<P;N++){const O=w[N],W=Array.isArray(O.value)?O.value:[O.value];for(let j=0,U=W.length;j<U;j++){const V=W[j],z=b(V),Q=S%A,ee=Q%z.boundary,ue=Q+ee;S+=ee,ue!==0&&A-ue<z.storage&&(S+=A-ue),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=z.storage}}}const T=S%A;return T>0&&(S+=A-T),v.__size=S,v.__cache={},this}function b(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):ye("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}const rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function sv(){return bn===null&&(bn=new As(rv,16,16,vi,Cn),bn.name="DFG_LUT",bn.minFilter=nt,bn.magFilter=nt,bn.wrapS=an,bn.wrapT=an,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class ov{constructor(e={}){const{canvas:t=Dh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const b=p,m=new Set([Ca,Ra,Aa]),f=new Set([qt,Rn,yr,Mr,Ea,wa]),v=new Uint32Array(4),y=new Int32Array(4),S=new C;let A=null,T=null;const R=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,O=null;this._outputColorSpace=Nt;let W=0,j=0,U=null,V=-1,z=null;const Q=new ht,ee=new ht;let ue=null;const _e=new Ce(0);let Te=0,Ye=t.width,it=t.height,Oe=1,$=null,fe=null;const re=new ht(0,0,Ye,it),Ae=new ht(0,0,Ye,it);let Ie=!1;const Re=new Ba;let vt=!1,Ke=!1;const rt=new Le,mt=new C,Ge=new ht,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Yt(){return U===null?Oe:1}let I=n;function Pt(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),I===null){const F="webgl2";if(I=Pt(F,M),I===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw we("WebGLRenderer: "+M.message),M}let qe,dt,le,bt,E,x,B,q,J,te,ae,X,Y,pe,ve,se,ne,De,Be,Ze,L,ie,K;function me(){qe=new sg(I),qe.init(),L=new $0(I,qe),dt=new Zm(I,qe,e,L),le=new q0(I,qe),dt.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),bt=new lg(I),E=new N0,x=new Y0(I,qe,le,E,dt,L,bt),B=new rg(N),q=new df(I),ie=new Ym(I,q),J=new og(I,q,bt,ie),te=new ug(I,J,q,ie,bt),De=new cg(I,dt,x),ve=new Jm(E),ae=new I0(N,B,qe,dt,ie,ve),X=new nv(N,E),Y=new F0,pe=new V0(qe),ne=new qm(N,B,le,te,g,l),se=new K0(N,te,dt),K=new iv(I,bt,dt,le),Be=new $m(I,qe,bt),Ze=new ag(I,qe,bt),bt.programs=ae.programs,N.capabilities=dt,N.extensions=qe,N.properties=E,N.renderLists=Y,N.shadowMap=se,N.state=le,N.info=bt}me(),b!==qt&&(w=new dg(b,t.width,t.height,i,s));const oe=new ev(N,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(M){M!==void 0&&(Oe=M,this.setSize(Ye,it,!1))},this.getSize=function(M){return M.set(Ye,it)},this.setSize=function(M,F,G=!0){if(oe.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=M,it=F,t.width=Math.floor(M*Oe),t.height=Math.floor(F*Oe),G===!0&&(t.style.width=M+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ye*Oe,it*Oe).floor()},this.setDrawingBufferSize=function(M,F,G){Ye=M,it=F,Oe=G,t.width=Math.floor(M*G),t.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(b===qt){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){ye("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(re)},this.setViewport=function(M,F,G,H){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,F,G,H),le.viewport(Q.copy(re).multiplyScalar(Oe).round())},this.getScissor=function(M){return M.copy(Ae)},this.setScissor=function(M,F,G,H){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,F,G,H),le.scissor(ee.copy(Ae).multiplyScalar(Oe).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(M){le.setScissorTest(Ie=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,G=!0){let H=0;if(M){let k=!1;if(U!==null){const de=U.texture.format;k=m.has(de)}if(k){const de=U.texture.type,xe=f.has(de),he=ne.getClearColor(),be=ne.getClearAlpha(),Se=he.r,Fe=he.g,ke=he.b;xe?(v[0]=Se,v[1]=Fe,v[2]=ke,v[3]=be,I.clearBufferuiv(I.COLOR,0,v)):(y[0]=Se,y[1]=Fe,y[2]=ke,y[3]=be,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ne.dispose(),Y.dispose(),pe.dispose(),E.dispose(),B.dispose(),te.dispose(),ie.dispose(),K.dispose(),ae.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",el),oe.removeEventListener("sessionend",tl),oi.stop()};function Z(M){M.preventDefault(),xs("WebGLRenderer: Context Lost."),P=!0}function Me(){xs("WebGLRenderer: Context Restored."),P=!1;const M=bt.autoReset,F=se.enabled,G=se.autoUpdate,H=se.needsUpdate,k=se.type;me(),bt.autoReset=M,se.enabled=F,se.autoUpdate=G,se.needsUpdate=H,se.type=k}function Ue(M){we("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function St(M){const F=M.target;F.removeEventListener("dispose",St),st(F)}function st(M){Ln(M),E.remove(M)}function Ln(M){const F=E.get(M).programs;F!==void 0&&(F.forEach(function(G){ae.releaseProgram(G)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,H,k,de){F===null&&(F=Ct);const xe=k.isMesh&&k.matrixWorld.determinant()<0,he=ku(M,F,G,H,k);le.setMaterial(H,xe);let be=G.index,Se=1;if(H.wireframe===!0){if(be=J.getWireframeAttribute(G),be===void 0)return;Se=2}const Fe=G.drawRange,ke=G.attributes.position;let Ee=Fe.start*Se,ot=(Fe.start+Fe.count)*Se;de!==null&&(Ee=Math.max(Ee,de.start*Se),ot=Math.min(ot,(de.start+de.count)*Se)),be!==null?(Ee=Math.max(Ee,0),ot=Math.min(ot,be.count)):ke!=null&&(Ee=Math.max(Ee,0),ot=Math.min(ot,ke.count));const Tt=ot-Ee;if(Tt<0||Tt===1/0)return;ie.setup(k,H,he,G,be);let yt,lt=Be;if(be!==null&&(yt=q.get(be),lt=Ze,lt.setIndex(yt)),k.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*Yt()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(k.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),le.setLineWidth(Bt*Yt()),k.isLineSegments?lt.setMode(I.LINES):k.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else k.isPoints?lt.setMode(I.POINTS):k.isSprite&&lt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,ge=k._multiDrawCounts,$t=k._multiDrawCount,$e=be?q.get(be).bytesPerElement:1,rn=E.get(H).currentProgram.getUniforms();for(let xn=0;xn<$t;xn++)rn.setValue(I,"_gl_DrawID",xn),lt.render(Bt[xn]/$e,ge[xn])}else if(k.isInstancedMesh)lt.renderInstances(Ee,Tt,k.count);else if(G.isInstancedBufferGeometry){const Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,Bt);lt.renderInstances(Ee,Tt,ge)}else lt.render(Ee,Tt)};function vn(M,F,G){M.transparent===!0&&M.side===Qt&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,Cr(M,F,G),M.side=tn,M.needsUpdate=!0,Cr(M,F,G),M.side=Qt):Cr(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),T=pe.get(G),T.init(F),_.push(T),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),M!==G&&M.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const H=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const he=de[xe];vn(he,G,k),H.add(he)}else vn(de,G,k),H.add(de)}),T=_.pop(),H},this.compileAsync=function(M,F,G=null){const H=this.compile(M,F,G);return new Promise(k=>{function de(){if(H.forEach(function(xe){E.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){k(M);return}setTimeout(de,10)}qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Is=null;function zu(M){Is&&Is(M)}function el(){oi.stop()}function tl(){oi.start()}const oi=new wu;oi.setAnimationLoop(zu),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){Is=M,oe.setAnimationLoop(M),M===null?oi.stop():oi.start()},oe.addEventListener("sessionstart",el),oe.addEventListener("sessionend",tl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(M,F);const G=oe.enabled===!0&&oe.isPresenting===!0,H=w!==null&&(U===null||G)&&w.begin(N,U);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,F,U),T=pe.get(M,_.length),T.init(F),T.state.textureUnits=x.getTextureUnits(),_.push(T),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Re.setFromProjectionMatrix(rt,Tn,F.reversedDepth),Ke=this.localClippingEnabled,vt=ve.init(this.clippingPlanes,Ke),A=Y.get(M,R.length),A.init(),R.push(A),oe.enabled===!0&&oe.isPresenting===!0){const xe=N.xr.getDepthSensingMesh();xe!==null&&Ns(xe,F,-1/0,N.sortObjects)}Ns(M,F,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort($,fe),xt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,xt&&ne.addToRenderList(A,M),this.info.render.frame++,vt===!0&&ve.beginShadows();const k=T.state.shadowsArray;if(se.render(k,M,F),vt===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&w.hasRenderPass())===!1){const xe=A.opaque,he=A.transmissive;if(T.setupLights(),F.isArrayCamera){const be=F.cameras;if(he.length>0)for(let Se=0,Fe=be.length;Se<Fe;Se++){const ke=be[Se];il(xe,he,M,ke)}xt&&ne.render(M);for(let Se=0,Fe=be.length;Se<Fe;Se++){const ke=be[Se];nl(A,M,ke,ke.viewport)}}else he.length>0&&il(xe,he,M,F),xt&&ne.render(M),nl(A,M,F)}U!==null&&j===0&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),H&&w.end(N),M.isScene===!0&&M.onAfterRender(N,M,F),ie.resetDefaultState(),V=-1,z=null,_.pop(),_.length>0?(T=_[_.length-1],x.setTextureUnits(T.state.textureUnits),vt===!0&&ve.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,O!==null&&O.renderEnd()};function Ns(M,F,G,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Re.intersectsSprite(M)){H&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(rt);const xe=te.update(M),he=M.material;he.visible&&A.push(M,xe,he,G,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Re.intersectsObject(M))){const xe=te.update(M),he=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(rt)),Array.isArray(he)){const be=xe.groups;for(let Se=0,Fe=be.length;Se<Fe;Se++){const ke=be[Se],Ee=he[ke.materialIndex];Ee&&Ee.visible&&A.push(M,xe,Ee,G,Ge.z,ke)}}else he.visible&&A.push(M,xe,he,G,Ge.z,null)}}const de=M.children;for(let xe=0,he=de.length;xe<he;xe++)Ns(de[xe],F,G,H)}function nl(M,F,G,H){const{opaque:k,transmissive:de,transparent:xe}=M;T.setupLightsView(G),vt===!0&&ve.setGlobalState(N.clippingPlanes,G),H&&le.viewport(Q.copy(H)),k.length>0&&Rr(k,F,G),de.length>0&&Rr(de,F,G),xe.length>0&&Rr(xe,F,G),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function il(M,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ee=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Ft(1,1,{generateMipmaps:!0,type:Ee?Cn:qt,minFilter:Sn,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const de=T.state.transmissionRenderTarget[H.id],xe=H.viewport||Q;de.setSize(xe.z*N.transmissionResolutionScale,xe.w*N.transmissionResolutionScale);const he=N.getRenderTarget(),be=N.getActiveCubeFace(),Se=N.getActiveMipmapLevel();N.setRenderTarget(de),N.getClearColor(_e),Te=N.getClearAlpha(),Te<1&&N.setClearColor(16777215,.5),N.clear(),xt&&ne.render(G);const Fe=N.toneMapping;N.toneMapping=En;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),vt===!0&&ve.setGlobalState(N.clippingPlanes,H),Rr(M,G,H),x.updateMultisampleRenderTarget(de),x.updateRenderTargetMipmap(de),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ot=0,Tt=F.length;ot<Tt;ot++){const yt=F[ot],{object:lt,geometry:Bt,material:ge,group:$t}=yt;if(ge.side===Qt&&lt.layers.test(H.layers)){const $e=ge.side;ge.side=Gt,ge.needsUpdate=!0,rl(lt,G,H,Bt,ge,$t),ge.side=$e,ge.needsUpdate=!0,Ee=!0}}Ee===!0&&(x.updateMultisampleRenderTarget(de),x.updateRenderTargetMipmap(de))}N.setRenderTarget(he,be,Se),N.setClearColor(_e,Te),ke!==void 0&&(H.viewport=ke),N.toneMapping=Fe}function Rr(M,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,de=M.length;k<de;k++){const xe=M[k],{object:he,geometry:be,group:Se}=xe;let Fe=xe.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),he.layers.test(G.layers)&&rl(he,F,G,be,Fe,Se)}}function rl(M,F,G,H,k,de){M.onBeforeRender(N,F,G,H,k,de),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(N,F,G,H,M,de),k.transparent===!0&&k.side===Qt&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,N.renderBufferDirect(G,F,H,k,M,de),k.side=tn,k.needsUpdate=!0,N.renderBufferDirect(G,F,H,k,M,de),k.side=Qt):N.renderBufferDirect(G,F,H,k,M,de),M.onAfterRender(N,F,G,H,k,de)}function Cr(M,F,G){F.isScene!==!0&&(F=Ct);const H=E.get(M),k=T.state.lights,de=T.state.shadowsArray,xe=k.state.version,he=ae.getParameters(M,k.state,de,F,G,T.state.lightProbeGridArray),be=ae.getProgramCacheKey(he);let Se=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=B.get(M.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Se===void 0&&(M.addEventListener("dispose",St),Se=new Map,H.programs=Se);let ke=Se.get(be);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===xe)return ol(M,he),ke}else he.uniforms=ae.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,G,he),M.onBeforeCompile(he,N),ke=ae.acquireProgram(he,be),Se.set(be,ke),H.uniforms=he.uniforms;const Ee=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=ve.uniform),ol(M,he),H.needsLights=Gu(M),H.lightsStateVersion=xe,H.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=ke,H.uniformsList=null,ke}function sl(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=ds.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ol(M,F){const G=E.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Hu(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let G=0,H=M.length;G<H;G++){const k=M[G];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function ku(M,F,G,H,k){F.isScene!==!0&&(F=Ct),x.resetTextureUnits();const de=F.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,he=U===null?N.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Xe.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Se=B.get(H.envMap||xe,be),Fe=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!G.morphAttributes.position,ot=!!G.morphAttributes.normal,Tt=!!G.morphAttributes.color;let yt=En;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(yt=N.toneMapping);const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Bt=lt!==void 0?lt.length:0,ge=E.get(H),$t=T.state.lights;if(vt===!0&&(Ke===!0||M!==z)){const ft=M===z&&H.id===V;ve.setState(H,M,ft)}let $e=!1;H.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==$t.state.version||ge.outputColorSpace!==he||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Se||H.fog===!0&&ge.fog!==de||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ve.numPlanes||ge.numIntersection!==ve.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==ke||ge.morphTargets!==Ee||ge.morphNormals!==ot||ge.morphColors!==Tt||ge.toneMapping!==yt||ge.morphTargetsCount!==Bt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ge.__version=H.version);let rn=ge.currentProgram;$e===!0&&(rn=Cr(H,F,k),O&&H.isNodeMaterial&&O.onUpdateProgram(H,rn,ge));let xn=!1,Xn=!1,Si=!1;const ct=rn.getUniforms(),Et=ge.uniforms;if(le.useProgram(rn.program)&&(xn=!0,Xn=!0,Si=!0),H.id!==V&&(V=H.id,Xn=!0),ge.needsLights){const ft=Hu(T.state.lightProbeGridArray,k);ge.lightProbeGrid!==ft&&(ge.lightProbeGrid=ft,Xn=!0)}if(xn||z!==M){le.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",M.projectionMatrix),ct.setValue(I,"viewMatrix",M.matrixWorldInverse);const Kn=ct.map.cameraPosition;Kn!==void 0&&Kn.setValue(I,mt.setFromMatrixPosition(M.matrixWorld)),dt.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),z!==M&&(z=M,Xn=!0,Si=!0)}if(ge.needsLights&&($t.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",$t.state.directionalShadowMap,x),$t.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",$t.state.spotShadowMap,x),$t.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",$t.state.pointShadowMap,x)),k.isSkinnedMesh){ct.setOptional(I,k,"bindMatrix"),ct.setOptional(I,k,"bindMatrixInverse");const ft=k.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(I,"boneTexture",ft.boneTexture,x))}k.isBatchedMesh&&(ct.setOptional(I,k,"batchingTexture"),ct.setValue(I,"batchingTexture",k._matricesTexture,x),ct.setOptional(I,k,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",k._indirectTexture,x),ct.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",k._colorsTexture,x));const jn=G.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&De.update(k,G,rn),(Xn||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,ct.setValue(I,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Et.envMapIntensity.value=F.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=sv()),Xn){if(ct.setValue(I,"toneMappingExposure",N.toneMappingExposure),ge.needsLights&&Vu(Et,Si),de&&H.fog===!0&&X.refreshFogUniforms(Et,de),X.refreshMaterialUniforms(Et,H,Oe,it,T.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){const ft=ge.lightProbeGrid;Et.probesSH.value=ft.texture,Et.probesMin.value.copy(ft.boundingBox.min),Et.probesMax.value.copy(ft.boundingBox.max),Et.probesResolution.value.copy(ft.resolution)}ds.upload(I,sl(ge),Et,x)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ds.upload(I,sl(ge),Et,x),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(I,"center",k.center),ct.setValue(I,"modelViewMatrix",k.modelViewMatrix),ct.setValue(I,"normalMatrix",k.normalMatrix),ct.setValue(I,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){const ft=H.uniformsGroups;for(let Kn=0,Ti=ft.length;Kn<Ti;Kn++){const al=ft[Kn];K.update(al,rn),K.bind(al,rn)}}return rn}function Vu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Gu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,F,G){const H=E.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),E.get(M.texture).__webglTexture=F,E.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const G=E.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Wu=I.createFramebuffer();this.setRenderTarget=function(M,F=0,G=0){U=M,W=F,j=G;let H=null,k=!1,de=!1;if(M){const he=E.get(M);if(he.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(I.FRAMEBUFFER,he.__webglFramebuffer),Q.copy(M.viewport),ee.copy(M.scissor),ue=M.scissorTest,le.viewport(Q),le.scissor(ee),le.setScissorTest(ue),V=-1;return}else if(he.__webglFramebuffer===void 0)x.setupRenderTarget(M);else if(he.__hasExternalTextures)x.rebindTextures(M,E.get(M.texture).__webglTexture,E.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&E.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);const Se=E.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Se[F])?H=Se[F][G]:H=Se[F],k=!0):M.samples>0&&x.useMultisampledRTT(M)===!1?H=E.get(M).__webglMultisampledFramebuffer:Array.isArray(Se)?H=Se[G]:H=Se,Q.copy(M.viewport),ee.copy(M.scissor),ue=M.scissorTest}else Q.copy(re).multiplyScalar(Oe).floor(),ee.copy(Ae).multiplyScalar(Oe).floor(),ue=Ie;if(G!==0&&(H=Wu),le.bindFramebuffer(I.FRAMEBUFFER,H)&&le.drawBuffers(M,H),le.viewport(Q),le.scissor(ee),le.setScissorTest(ue),k){const he=E.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,G)}else if(de){const he=F;for(let be=0;be<M.textures.length;be++){const Se=E.get(M.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,Se.__webglTexture,G,he)}}else if(M!==null&&G!==0){const he=E.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,G)}V=-1},this.readRenderTargetPixels=function(M,F,G,H,k,de,xe,he=0){if(!(M&&M.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){le.bindFramebuffer(I.FRAMEBUFFER,be);try{const Se=M.textures[he],Fe=Se.format,ke=Se.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!dt.textureFormatReadable(Fe)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(ke)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&G>=0&&G<=M.height-k&&I.readPixels(F,G,H,k,L.convert(Fe),L.convert(ke),de)}finally{const Se=U!==null?E.get(U).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,H,k,de,xe,he=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(F>=0&&F<=M.width-H&&G>=0&&G<=M.height-k){le.bindFramebuffer(I.FRAMEBUFFER,be);const Se=M.textures[he],Fe=Se.format,ke=Se.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!dt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ee),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),I.readPixels(F,G,H,k,L.convert(Fe),L.convert(ke),0);const ot=U!==null?E.get(U).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,ot);const Tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lh(I,Tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ee),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.deleteBuffer(Ee),I.deleteSync(Tt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,G=0){const H=Math.pow(2,-G),k=Math.floor(M.image.width*H),de=Math.floor(M.image.height*H),xe=F!==null?F.x:0,he=F!==null?F.y:0;x.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,xe,he,k,de),le.unbindTexture()};const Xu=I.createFramebuffer(),ju=I.createFramebuffer();this.copyTextureToTexture=function(M,F,G=null,H=null,k=0,de=0){let xe,he,be,Se,Fe,ke,Ee,ot,Tt;const yt=M.isCompressedTexture?M.mipmaps[de]:M.image;if(G!==null)xe=G.max.x-G.min.x,he=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Se=G.min.x,Fe=G.min.y,ke=G.isBox3?G.min.z:0;else{const Et=Math.pow(2,-k);xe=Math.floor(yt.width*Et),he=Math.floor(yt.height*Et),M.isDataArrayTexture?be=yt.depth:M.isData3DTexture?be=Math.floor(yt.depth*Et):be=1,Se=0,Fe=0,ke=0}H!==null?(Ee=H.x,ot=H.y,Tt=H.z):(Ee=0,ot=0,Tt=0);const lt=L.convert(F.format),Bt=L.convert(F.type);let ge;F.isData3DTexture?(x.setTexture3D(F,0),ge=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),ge=I.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),ge=I.TEXTURE_2D),le.activeTexture(I.TEXTURE0),le.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),le.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),le.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const $t=le.getParameter(I.UNPACK_ROW_LENGTH),$e=le.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=le.getParameter(I.UNPACK_SKIP_PIXELS),xn=le.getParameter(I.UNPACK_SKIP_ROWS),Xn=le.getParameter(I.UNPACK_SKIP_IMAGES);le.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),le.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),le.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),le.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),le.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Si=M.isDataArrayTexture||M.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Et=E.get(M),jn=E.get(F),ft=E.get(Et.__renderTarget),Kn=E.get(jn.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ti=0;Ti<be;Ti++)Si&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,E.get(M).__webglTexture,k,ke+Ti),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,E.get(F).__webglTexture,de,Tt+Ti)),I.blitFramebuffer(Se,Fe,xe,he,Ee,ot,xe,he,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||E.has(M)){const Et=E.get(M),jn=E.get(F);le.bindFramebuffer(I.READ_FRAMEBUFFER,Xu),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,ju);for(let ft=0;ft<be;ft++)Si?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,k,ke+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,k),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jn.__webglTexture,de,Tt+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,jn.__webglTexture,de),k!==0?I.blitFramebuffer(Se,Fe,xe,he,Ee,ot,xe,he,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(ge,de,Ee,ot,Tt+ft,Se,Fe,xe,he):I.copyTexSubImage2D(ge,de,Ee,ot,Se,Fe,xe,he);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ge,de,Ee,ot,Tt,xe,he,be,lt,Bt,yt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ge,de,Ee,ot,Tt,xe,he,be,lt,yt.data):I.texSubImage3D(ge,de,Ee,ot,Tt,xe,he,be,lt,Bt,yt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,Ee,ot,xe,he,lt,Bt,yt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,Ee,ot,yt.width,yt.height,lt,yt.data):I.texSubImage2D(I.TEXTURE_2D,de,Ee,ot,xe,he,lt,Bt,yt);le.pixelStorei(I.UNPACK_ROW_LENGTH,$t),le.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),le.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),le.pixelStorei(I.UNPACK_SKIP_ROWS,xn),le.pixelStorei(I.UNPACK_SKIP_IMAGES,Xn),de===0&&F.generateMipmaps&&I.generateMipmap(ge),le.unbindTexture()},this.initRenderTarget=function(M){E.get(M).__webglFramebuffer===void 0&&x.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?x.setTextureCube(M,0):M.isData3DTexture?x.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?x.setTexture2DArray(M,0):x.setTexture2D(M,0),le.unbindTexture()},this.resetState=function(){W=0,j=0,U=null,le.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const av=.5,lv=10,rs=1080,xo=-89.999,_o=89.999;class cv{constructor(){D(this,"target",new C(0,-.6,0));D(this,"angleX",-22);D(this,"angleY",-200.5);D(this,"distance",4.2);D(this,"velocityX",0);D(this,"velocityY",0);D(this,"lastX",0);D(this,"lastY",0);D(this,"lastTime",0);D(this,"orbiting",!1)}beginOrbit(e,t,n){this.lastX=e,this.lastY=t,this.lastTime=n,this.velocityX=0,this.velocityY=0,this.orbiting=!0}orbitTo(e,t,n){if(!this.orbiting)return;const i=e-this.lastX,s=t-this.lastY,o=Math.max((n-this.lastTime)/1e3,1/240);this.angleY-=i,this.angleX=Kt.clamp(this.angleX-s,xo,_o),this.velocityY=Kt.clamp(-i/o,-rs,rs),this.velocityX=Kt.clamp(-s/o,-rs,rs),this.lastX=e,this.lastY=t,this.lastTime=n}endOrbit(e){if(!this.orbiting)return;const t=Math.exp(-6*Math.max(0,(e-this.lastTime)/1e3));this.velocityX*=t,this.velocityY*=t,this.orbiting=!1}stopInertia(){this.velocityX=0,this.velocityY=0,this.orbiting=!1}update(e){if(this.orbiting)return;this.angleY+=this.velocityY*e;const t=Kt.clamp(this.angleX+this.velocityX*e,xo,_o);(t===xo||t===_o)&&(this.velocityX=0),this.angleX=t;const n=Math.exp(-6*e);this.velocityX*=n,this.velocityY*=n,Math.abs(this.velocityX)<.01&&(this.velocityX=0),Math.abs(this.velocityY)<.01&&(this.velocityY=0)}zoomByWheel(e){this.zoomByScale(Math.exp(e*.001))}zoomByScale(e){this.distance=Kt.clamp(this.distance*e,av,lv)}apply(e){const t=new C(0,0,this.distance);t.applyAxisAngle(new C(1,0,0),Kt.degToRad(this.angleX)),t.applyAxisAngle(new C(0,1,0),Kt.degToRad(this.angleY)),e.position.copy(this.target).add(t),e.up.set(0,1,0),e.lookAt(this.target)}getLightDirection(e){const t=Kt.degToRad(90-this.angleY),n=Kt.degToRad(-this.angleX);return e.set(Math.cos(t)*Math.cos(n),Math.sin(n),Math.sin(t)*Math.cos(n)).normalize()}}var uv=`const float IOR_AIR = 1.0; 
const float IOR_WATER = 1.333; 
const float poolHeight = 1.0; 

uniform vec3 light; 
uniform sampler2D water; 

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**\r
 * Computes ray intersection with a bounding cube (representing the pool bounds)\r
 * using the Kay-Kajiya slab method.\r
 * Returns vec2(tNear, tFar) representing entry and exit parameters.\r
 */\r
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / r;\r
  vec3 tMax = (cubeMax - origin) / r;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Projects a point from the water surface onto the pool floor/walls.\r
 *\r
 * This handles two types of light paths:\r
 * 1. Direct path: Ray goes straight to the floor\r
 * 2. Wall bounce path: Ray hits a side wall first, then continues to floor\r
 *\r
 * The two-step process ensures we properly handle rays that exit through\r
 * the sides of the pool before reaching the bottom.\r
 *\r
 * @param origin Starting point (on water surface)\r
 * @param r Initial ray direction (may hit wall first)\r
 * @param refractedLight Final ray direction for floor projection\r
 * @return Final position on pool floor\r
 */\r
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {\r
  
  
  vec2 tcube = intersectCube(origin, r, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));

  
  origin += r * tcube.y;

  
  
  
  float tplane = (-origin.y - 1.0) / refractedLight.y;\r
  return origin + refractedLight * tplane;\r
}

void main() {\r
  /**\r
 * * CAUSTICS VERTEX TRANSFORMATION\r
 *    *\r
 *    * Each vertex in the water grid represents one "column" of light entering the water.\r
 *    * We compute where this light column hits the pool floor, both for flat water\r
 *    * (reference) and for the actual wavy surface (distorted).\r
 */

  
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);\r
  info.ba *= 0.5; 

  /**\r
 * * Step 2: Reconstruct surface normal from stored derivatives.\r
 *    *\r
 *    * The water texture stores ∂h/∂x in B and ∂h/∂z in A (height partial derivatives).\r
 *    * The normal vector N = normalize(-∂h/∂x, 1, -∂h/∂z)\r
 *    *\r
 *    * We use the identity: for unit normal, Ny = sqrt(1 - Nx² - Nz²)\r
 *    * where Nx and Nz are the (scaled) stored derivatives.\r
 */\r
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));\r
  float slopeLengthSq = min(dot(slope, slope), 0.999);\r
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  /**\r
 * * Step 3: Compute refracted light directions using Snell's Law.\r
 *    *\r
 *    * refractedLight: Direction if water were perfectly flat (uniform refraction)\r
 *    * ray: Direction through the actual wavy surface (varies per vertex)\r
 *    *\r
 *    * GLSL refract(I, N, eta) computes the refracted direction where:\r
 *    *   I = incident direction (normalized)\r
 *    *   N = surface normal (normalized)\r
 *    *   eta = n1/n2 (ratio of indices of refraction)\r
 */\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);

  /**\r
 * * Step 4: Project light rays to pool floor.\r
 *    *\r
 *    * oldPos: Where light would hit if water were flat (reference grid)\r
 *    * newPos: Where light actually hits through wavy surface (distorted grid)\r
 *    *\r
 *    * Note: position.xzy swizzle converts from XY grid to XZ world (Y is up in world space)\r
 */\r
  oldPos = project(position.xzy, refractedLight, refractedLight);\r
  newPos = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);

  /**\r
 * * Step 5: Position vertex for rasterization.\r
 *    *\r
 *    * We render directly to the caustics texture, so gl_Position maps to texture UV.\r
 *    * The 0.75 scale factor matches the pool floor's coverage in the texture.\r
 *    *\r
 *    * The offset (refractedLight.xz / refractedLight.y) accounts for the slant of\r
 *    * the light - without this, caustics would be misaligned with the pool floor rendering.\r
 */\r
  gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);\r
}`,hv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;\r
const float poolHeight = 1.0;

uniform vec3 light; 
uniform vec3 sphereCenter; 
uniform float sphereRadius; 
uniform bool sphereEnabled; 
uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize; 
uniform bool cubeEnabled; 
uniform vec3 torusKnotCenter; 
uniform bool torusKnotEnabled; 
uniform vec3 meshCenter; 
uniform float meshBoundingRadius; 
uniform bool meshEnabled; 
uniform sampler2D objectShadowTex; 

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**\r
 * Ray-AABB (Axis-Aligned Bounding Box) intersection using the slab method.\r
 *\r
 * The slab method treats each axis as a pair of parallel planes (slabs).\r
 * For each axis, we compute where the ray enters and exits that slab.\r
 * The ray intersects the box where ALL slabs overlap simultaneously.\r
 *\r
 * Math: For each axis i, solve:  origin.i + t * direction.i = plane.i\r
 *       Therefore: t = (plane.i - origin.i) / direction.i\r
 *\r
 * @param origin Ray starting point\r
 * @param r Ray direction (does not need to be normalized)\r
 * @param cubeMin Minimum corner of the AABB\r
 * @param cubeMax Maximum corner of the AABB\r
 * @return vec2(tNear, tFar) - parametric distances to entry and exit points\r
 *         If tNear > tFar, the ray misses the box entirely\r
 */\r
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {\r
  
  vec3 tMin = (cubeMin - origin) / r;\r
  vec3 tMax = (cubeMax - origin) / r;

  
  vec3 t1 = min(tMin, tMax); 
  vec3 t2 = max(tMin, tMax); 

  
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  
  float tFar = min(min(t2.x, t2.y), t2.z);

  return vec2(tNear, tFar);\r
}

/**\r
 * Returns 1.0 if the ray intersects the cube object, otherwise 0.0.\r
 */\r
float cubeOcclusion(vec3 origin, vec3 direction) {\r
  vec2 hit = intersectCube(origin, direction, cubeCenter - cubeHalfSize, cubeCenter + cubeHalfSize);\r
  return step(0.0, hit.y) * step(hit.x, hit.y);\r
}

/**\r
 * Analytical ray-sphere intersection using the quadratic formula.\r
 *\r
 * A sphere is defined as all points P where |P - C|² = r².\r
 * A ray is defined as P(t) = O + t*D where O is origin, D is direction.\r
 *\r
 * Substituting the ray into the sphere equation:\r
 *   |O + t*D - C|² = r²\r
 *   |(O - C) + t*D|² = r²\r
 *\r
 * Let L = O - C (vector from sphere center to ray origin):\r
 *   |L + t*D|² = r²\r
 *   (L + t*D)·(L + t*D) = r²\r
 *   L·L + 2*t*(L·D) + t²*(D·D) = r²\r
 *\r
 * Rearranging into standard quadratic form at² + bt + c = 0:\r
 *   a = D·D           (always positive for non-zero direction)\r
 *   b = 2 * L·D       (projection of L onto ray direction)\r
 *   c = L·L - r²      (distance² from origin to center, minus radius²)\r
 *\r
 * discriminant = b² - 4ac determines number of intersections:\r
 *   < 0: ray misses sphere (no real solutions)\r
 *   = 0: ray tangent to sphere (one solution)\r
 *   > 0: ray pierces sphere (two solutions)\r
 *\r
 * @return Parametric t of nearest intersection, or 1.0e6 if no hit\r
 */\r
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center; 
  float a = dot(ray, ray); 
  float b = 2.0 * dot(toSphere, ray); 
  float c = dot(toSphere, toSphere) - radius * radius; 
  float discriminant = b * b - 4.0 * a * c;

  if (discriminant > 0.0) {\r
    
    float t = (-b - sqrt(discriminant)) / (2.0 * a);\r
    if (t > 0.0) return t; 
  }\r
  return 1.0e6; 
}

/**\r
 * Returns near entry intersection distance with sphere bounds.\r
 */\r
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float root = sqrt(discriminant);\r
    float near = (-b - root) / (2.0 * a);\r
    float far = (-b + root) / (2.0 * a);\r
    if (near > 0.0) return near;\r
    if (far > 0.0) return 0.0;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Signed Distance Function (SDF) for a (p, q) Torus Knot.\r
 *\r
 * A torus knot is a curve that winds around a torus surface, going through\r
 * the hole p times while circling the torus q times. Here we use (2, 3) = trefoil knot.\r
 *\r
 * PARAMETRIC EQUATIONS for a (p, q) torus knot:\r
 *   r(θ) = R * (2 + cos(q*θ)) / 2    -- varying radius from center\r
 *   x(θ) = r(θ) * cos(p*θ)           -- horizontal position\r
 *   y(θ) = R * sin(q*θ) / 2          -- vertical oscillation\r
 *   z(θ) = r(θ) * sin(p*θ)           -- depth position\r
 *\r
 * where θ ∈ [0, 2π], R is the major radius, and the curve is then inflated\r
 * by 'tube' radius to create the solid shape.\r
 *\r
 * SDF COMPUTATION:\r
 * We discretize the curve into 64 line segments and find the minimum distance\r
 * from point p to any segment. This uses the point-to-line-segment formula:\r
 *   For segment from A to B, and point P:\r
 *   h = clamp((PA · AB) / (AB · AB), 0, 1)  -- projection parameter\r
 *   distance = |PA - AB * h|                 -- perpendicular distance\r
 *\r
 * @param p Query point in world space\r
 * @param center Center of the torus knot\r
 * @return Signed distance (negative inside, positive outside)\r
 */\r
float sdTorusKnot(vec3 p, vec3 center) {\r
  vec3 pos = p - center;

  
  
  
  float d_bound = length(pos) - 0.31;\r
  if (d_bound > 0.08) {\r
    return d_bound;\r
  }

  float minDist = 1.0e6;\r
  const int segments = 64; 
  const float radius = 0.17; 
  const float tube = 0.045; 
  const float p_knot = 2.0; 
  const float q_knot = 3.0; 

  vec3 prevPt = vec3(0.0);\r
  for (int i = 0; i <= segments; i++) {\r
    
    float theta = float(i) / float(segments) * 6.283185307179586; 

    
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5; 
    vec3 pt = vec3(\r
      rad * cos(p_knot * theta), 
      -radius * sin(q_knot * theta) * 0.5, 
      rad * sin(p_knot * theta) 
    );

    if (i > 0) {\r
      
      vec3 ba = pt - prevPt; 
      vec3 pa = pos - prevPt; 
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); 
      float d = length(pa - ba * h); 
      minDist = min(minDist, d);\r
    }\r
    prevPt = pt;\r
  }

  
  return minDist - tube;\r
}

/**\r
 * Sphere-tracing (raymarching) to find ray intersection with the torus knot.\r
 *\r
 * SPHERE TRACING ALGORITHM:\r
 * Unlike analytical intersections (spheres, planes), complex SDFs require\r
 * iterative raymarching. The key insight is that the SDF gives us a safe\r
 * distance to step - if SDF(p) = d, we know there's no surface within d\r
 * units of p, so we can safely advance the ray by d.\r
 *\r
 * Algorithm:\r
 *   1. Start at ray entry into bounding sphere\r
 *   2. Evaluate SDF at current point\r
 *   3. If SDF < ε, we've hit the surface\r
 *   4. Otherwise, advance ray by SDF distance (guaranteed safe)\r
 *   5. Repeat until hit or max iterations/distance exceeded\r
 *\r
 * This converges quickly near surfaces (small steps) and efficiently\r
 * skips empty space (large steps).\r
 *\r
 * @param origin Ray starting point\r
 * @param ray Ray direction\r
 * @param center Torus knot center position\r
 * @return Parametric t of intersection, or 1.0e6 if no hit\r
 */\r
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {\r
  
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);\r
  if (t_bound > 1.0e5) return 1.0e6; 

  float t = t_bound; 
  for (int i = 0; i < 30; i++) {\r
    vec3 p = origin + ray * t;\r
    float d = sdTorusKnot(p, center);

    if (d < 0.001) {\r
      return t; 
    }

    t += d; 

    
    if (t > t_bound + 0.5) break;\r
  }\r
  return 1.0e6; 
}

/**\r
 * Returns 1.0 if the ray intersects the torus knot, otherwise 0.0.\r
 */\r
float torusKnotOcclusion(vec3 origin, vec3 direction) {\r
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);\r
  return hit < 1.0e5\r
    ? 1.0\r
    : 0.0;\r
}

void main() {\r
  /**\r
 * * CAUSTICS INTENSITY CALCULATION via Differential Area Comparison\r
 *    *\r
 *    * The physical basis: energy conservation. Light energy in a beam is constant,\r
 *    * but when the beam's cross-sectional area changes (due to refraction), the\r
 *    * intensity (energy per unit area) must change inversely.\r
 *    *\r
 *    * MATHEMATICAL APPROACH:\r
 *    * We use GPU screen-space derivatives (dFdx, dFdy) to measure how positions\r
 *    * change across neighboring pixels. For a grid of parallel rays:\r
 *    *\r
 *    *   oldPos: Where rays hit if water were flat (regular grid)\r
 *    *   newPos: Where rays hit after refracting through waves (distorted grid)\r
 *    *\r
 *    * The derivative gives us the Jacobian of this mapping:\r
 *    *   J = | ∂newPos/∂x  ∂newPos/∂y |\r
 *    *       | ∂newPos/∂x  ∂newPos/∂y |\r
 *    *\r
 *    * Area ratio ≈ |det(J_old)| / |det(J_new)|\r
 *    * For simplicity, we approximate this as (length of sides).\r
 *    *\r
 *    * When waves FOCUS light (convex lens effect):\r
 *    *   - newArea shrinks as rays converge\r
 *    *   - oldArea / newArea becomes large → bright caustic\r
 *    *\r
 *    * When waves SPREAD light (concave lens effect):\r
 *    *   - newArea expands as rays diverge\r
 *    *   - oldArea / newArea becomes small → dim area\r
 */\r
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));\r
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));

  
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  
  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  /**\r
 * * SHADOW/OCCLUSION CALCULATION\r
 *    *\r
 *    * Objects in the water block light rays, creating shadows on the pool floor.\r
 *    * We store the shadow factor in the Green channel (1.0 = fully lit, 0.0 = full shadow).\r
 *    *\r
 *    * Different techniques are used based on object type:\r
 *    * - Sphere: Analytical soft shadow using cross-product area calculation\r
 *    * - Cube: Multi-sample ray-box intersection tests\r
 *    * - Complex meshes: Pre-rendered shadow map with PCF filtering\r
 */\r
  if (sphereEnabled) {\r
    /**\r
 * * ANALYTICAL SPHERE SOFT SHADOW\r
 *      *\r
 *      * This technique computes a soft shadow penumbra analytically, avoiding\r
 *      * multi-sample noise while still producing smooth shadow edges.\r
 *      *\r
 *      * Method:\r
 *      * 1. Compute vector from surface point to sphere center (normalized by radius)\r
 *      * 2. Cross product with light direction gives "perpendicular area"\r
 *      * 3. This area metric indicates how much of the sphere subtends the light\r
 *      * 4. Sigmoid smoothstep creates smooth penumbra transition\r
 */\r
    vec3 dir = (sphereCenter - newPos) / sphereRadius; 
    vec3 area = cross(dir, refractedLight); 
    float shadow = dot(area, area); 

    
    float dist = dot(dir, -refractedLight);

    
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);

    
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);

    
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));\r
    gl_FragColor.g = shadow;

  } else if (cubeEnabled) {\r
    /**\r
 * * MULTI-SAMPLE CUBE SOFT SHADOW (3x3 = 9 samples)\r
 *      *\r
 *      * For boxes, we can't easily compute analytical soft shadows due to the\r
 *      * sharp corners. Instead, we use stochastic sampling:\r
 *      *\r
 *      * 1. Create an orthonormal basis perpendicular to the light direction\r
 *      * 2. Sample 9 points in a grid pattern around the surface point\r
 *      * 3. Test each sample ray against the cube\r
 *      * 4. Average results for soft shadow approximation\r
 *      *\r
 *      * This is essentially a simple form of Percentage Closer Soft Shadows (PCSS).\r
 */\r
    vec3 shadowRay = -refractedLight; 

    
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));\r
    vec3 up = normalize(cross(right, shadowRay));

    float occlusion = 0.0;\r
    const float spread = 0.025; 

    
    for (int x = -1; x <= 1; x++) {\r
      for (int y = -1; y <= 1; y++) {\r
        vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;\r
        occlusion += cubeOcclusion(sampleOrigin, shadowRay);\r
      }\r
    }\r
    gl_FragColor.g = 1.0 - occlusion / 9.0; 

  } else if (torusKnotEnabled || meshEnabled) {\r
    /**\r
 * * SHADOW MAP LOOKUP WITH PCF (Percentage-Closer Filtering)\r
 *      *\r
 *      * Complex geometry uses a pre-rendered shadow map. PCF samples the\r
 *      * shadow map at multiple offsets and averages, creating soft edges.\r
 *      *\r
 *      * Shadow UV calculation:\r
 *      *   Project the 3D point onto the shadow map plane using the light direction.\r
 *      *   UV = (point.xz - point.y * light.xz/light.y) -- projection formula\r
 *      *\r
 *      * The 0.75 scaling and 0.5+0.5 offset map world [-1,1] to texture [0,1].\r
 */\r
    vec2 shadowUV =\r
      0.75 * (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;\r
    const float d = 4.0 / 1024.0; 

    
    float occlusion = texture2D(objectShadowTex, shadowUV).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, 0.0)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, 0.0)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, -d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, -d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, -d)).r;\r
    gl_FragColor.g = 1.0 - 0.8 * occlusion / 9.0; 

  } else {\r
    gl_FragColor.g = 1.0; 
  }

  /**\r
 * * EDGE FADEOUT (Anti-Aliasing at Pool Boundaries)\r
 *    *\r
 *    * Caustics should fade smoothly near the water surface line to avoid\r
 *    * hard seams where the underwater tiles meet the air. This uses a\r
 *    * sigmoid function to create a smooth transition zone.\r
 *    *\r
 *    * The calculation:\r
 *    * 1. Trace a ray from the surface point toward the light\r
 *    * 2. Find where this ray exits the pool bounds\r
 *    * 3. If the exit point is near the water surface (Y ≈ 0), fade out\r
 *    *\r
 *    * The sigmoid 1/(1 + e^(-x)) maps the distance to a smooth [0,1] range.\r
 *    * The constants (200.0, 10.0, 2.0/12.0) are tuned for visual appearance.\r
 */\r
  vec2 t = intersectCube(\r
    newPos,\r
    -refractedLight,\r
    vec3(-1.0, -poolHeight, -1.0),\r
    vec3(1.0, 2.0, 1.0)\r
  );\r
  gl_FragColor.r *=\r
    1.0 /\r
    (1.0 +\r
      exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));\r
}`,dv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

uniform vec3 light;

uniform sampler2D water;

uniform float cornerRadius;\r
uniform float poolWidth;\r
uniform float poolHeight;\r
uniform float poolLength;

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**\r
 * Solves 2D intersections of a ray with a rounded rectangle layout on the horizontal XZ plane.\r
 * Used to find coordinates where refracted light hits the pool perimeter walls.\r
 */\r
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {\r
  float tNear = 1e6;\r
  float tFar = -1e6;\r
  bool found = false;

  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;\r
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (-poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (-poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }

  
  if (R > 0.0) {\r
    vec2 centers[4];\r
    centers[0] = vec2(r_sub_x, r_sub_z);\r
    centers[1] = vec2(-r_sub_x, r_sub_z);\r
    centers[2] = vec2(-r_sub_x, -r_sub_z);\r
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {\r
      vec2 center = centers[i];\r
      vec2 toCenter = origin - center;\r
      float a = dot(ray, ray);\r
      float b = 2.0 * dot(toCenter, ray);\r
      float c = dot(toCenter, toCenter) - R * R;\r
      float disc = b * b - 4.0 * a * c;\r
      if (disc >= 0.0) {\r
        float sqrtDisc = sqrt(disc);\r
        float tA = (-b - sqrtDisc) / (2.0 * a);\r
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;\r
        bool validA = false;\r
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;\r
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;\r
        if (validA) {\r
          tNear = min(tNear, tA);\r
          tFar = max(tFar, tA);\r
          found = true;\r
        }

        
        vec2 ptB = origin + tB * ray;\r
        bool validB = false;\r
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;\r
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;\r
        if (validB) {\r
          tNear = min(tNear, tB);\r
          tFar = max(tFar, tB);\r
          found = true;\r
        }\r
      }\r
    }\r
  }

  if (!found) {\r
    return vec2(-1e6, 1e6);\r
  }

  return vec2(tNear, tFar);\r
}

/**\r
 * Calculates 3D intersection parameters of a ray with the rounded pool box boundaries.\r
 */\r
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {\r
  float tYNear = -1.0e6;\r
  float tYFar = 1.0e6;\r
  if (abs(ray.y) > 1.0e-7) {\r
    float tYMin = (-poolHeight - origin.y) / ray.y;\r
    float tYMax = (2.0 - origin.y) / ray.y;\r
    tYNear = min(tYMin, tYMax);\r
    tYFar = max(tYMin, tYMax);\r
  }\r
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);\r
  float tNear = max(tYNear, tXZ.x);\r
  float tFar = min(tYFar, tXZ.y);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Projects a ray from the surface down to the pool walls/floor boundary.\r
 */\r
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {\r
  
  vec2 tcube = intersectRoundedBox(origin, r, cornerRadius);\r
  origin += r * tcube.y;

  
  float tplane = (-origin.y - poolHeight) / refractedLight.y;\r
  return origin + refractedLight * tplane;\r
}

void main() {\r
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);\r
  info.ba *= 0.5;

  
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));\r
  float slopeLengthSq = min(dot(slope, slope), 0.999);\r
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  
  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);

  
  oldPos = project(\r
    vec3(position.x * poolWidth, 0.0, position.y * poolLength),\r
    refractedLight,\r
    refractedLight\r
  );\r
  newPos = project(\r
    vec3(position.x * poolWidth, info.r, position.y * poolLength),\r
    ray,\r
    refractedLight\r
  );

  
  gl_Position.x = 0.75 * (newPos.x - newPos.y * refractedLight.x / refractedLight.y) / poolWidth;\r
  gl_Position.y = 0.75 * (newPos.z - newPos.y * refractedLight.z / refractedLight.y) / poolLength;\r
  gl_Position.z = 0.0;\r
  gl_Position.w = 1.0;\r
}`,fv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

uniform vec3 light;\r
uniform vec3 sphereCenter;\r
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter;\r
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter;\r
uniform float meshBoundingRadius;\r
uniform bool meshEnabled;

uniform sampler2D objectShadowTex;

uniform float cornerRadius;\r
uniform float poolWidth;\r
uniform float poolHeight;\r
uniform float poolLength;

varying vec3 oldPos; 
varying vec3 newPos; 
varying vec3 ray; 

/**\r
 * Solves 2D intersections of a ray with a rounded rectangle layout on the horizontal XZ plane.\r
 */\r
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {\r
  float tNear = 1e6;\r
  float tFar = -1e6;\r
  bool found = false;

  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;\r
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (-poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (-poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }

  
  if (R > 0.0) {\r
    vec2 centers[4];\r
    centers[0] = vec2(r_sub_x, r_sub_z);\r
    centers[1] = vec2(-r_sub_x, r_sub_z);\r
    centers[2] = vec2(-r_sub_x, -r_sub_z);\r
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {\r
      vec2 center = centers[i];\r
      vec2 toCenter = origin - center;\r
      float a = dot(ray, ray);\r
      float b = 2.0 * dot(toCenter, ray);\r
      float c = dot(toCenter, toCenter) - R * R;\r
      float disc = b * b - 4.0 * a * c;\r
      if (disc >= 0.0) {\r
        float sqrtDisc = sqrt(disc);\r
        float tA = (-b - sqrtDisc) / (2.0 * a);\r
        float tB = (-b + sqrtDisc) / (2.0 * a);

        vec2 ptA = origin + tA * ray;\r
        bool validA = false;\r
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;\r
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;\r
        if (validA) {\r
          tNear = min(tNear, tA);\r
          tFar = max(tFar, tA);\r
          found = true;\r
        }

        vec2 ptB = origin + tB * ray;\r
        bool validB = false;\r
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;\r
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;\r
        if (validB) {\r
          tNear = min(tNear, tB);\r
          tFar = max(tFar, tB);\r
          found = true;\r
        }\r
      }\r
    }\r
  }

  if (!found) {\r
    return vec2(-1e6, 1e6);\r
  }

  return vec2(tNear, tFar);\r
}

/**\r
 * Calculates 3D intersection parameters of a ray with the rounded pool box.\r
 */\r
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {\r
  float tYNear = -1.0e6;\r
  float tYFar = 1.0e6;\r
  if (abs(ray.y) > 1.0e-7) {\r
    float tYMin = (-poolHeight - origin.y) / ray.y;\r
    float tYMax = (2.0 - origin.y) / ray.y;\r
    tYNear = min(tYMin, tYMax);\r
    tYFar = max(tYMin, tYMax);\r
  }\r
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);\r
  float tNear = max(tYNear, tXZ.x);\r
  float tFar = min(tYFar, tXZ.y);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Solves standard ray-box intersection.\r
 * Used for fast shadow occlusion slab tests against the active cube obstacle.\r
 */\r
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / r;\r
  vec3 tMax = (cubeMax - origin) / r;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Checks if a shadow ray intersects the cube obstacle.\r
 */\r
float cubeOcclusion(vec3 origin, vec3 direction) {\r
  vec2 hit = intersectCube(origin, direction, cubeCenter - cubeHalfSize, cubeCenter + cubeHalfSize);\r
  return step(0.0, hit.y) * step(hit.x, hit.y);\r
}

/**\r
 * Checks intersection against a sphere.\r
 */\r
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float t = (-b - sqrt(discriminant)) / (2.0 * a);\r
    if (t > 0.0) return t;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Checks entry/exit bounds on a sphere obstacle.\r
 */\r
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float root = sqrt(discriminant);\r
    float near = (-b - root) / (2.0 * a);\r
    float far = (-b + root) / (2.0 * a);\r
    if (near > 0.0) return near;\r
    if (far > 0.0) return 0.0;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Evaluates the Signed Distance Function (SDF) of the Torus Knot.\r
 */\r
float sdTorusKnot(vec3 p, vec3 center) {\r
  vec3 pos = p - center;\r
  float d_bound = length(pos) - 0.31;\r
  if (d_bound > 0.08) {\r
    return d_bound;\r
  }\r
  float minDist = 1.0e6;\r
  const int segments = 64;\r
  const float radius = 0.17;\r
  const float tube = 0.045;\r
  const float p_knot = 2.0;\r
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);\r
  for (int i = 0; i <= segments; i++) {\r
    float theta = float(i) / float(segments) * 6.283185307179586;\r
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;\r
    vec3 pt = vec3(\r
      rad * cos(p_knot * theta),\r
      -radius * sin(q_knot * theta) * 0.5,\r
      rad * sin(p_knot * theta)\r
    );\r
    if (i > 0) {\r
      vec3 ba = pt - prevPt;\r
      vec3 pa = pos - prevPt;\r
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\r
      float d = length(pa - ba * h);\r
      minDist = min(minDist, d);\r
    }\r
    prevPt = pt;\r
  }\r
  return minDist - tube;\r
}

/**\r
 * Traces a ray to find intersections with the Torus Knot obstacle.\r
 */\r
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {\r
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);\r
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;\r
  for (int i = 0; i < 30; i++) {\r
    vec3 p = origin + ray * t;\r
    float d = sdTorusKnot(p, center);\r
    if (d < 0.001) {\r
      return t;\r
    }\r
    t += d;\r
    if (t > t_bound + 0.5) break;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Checks if a shadow ray hits the Torus Knot.\r
 */\r
float torusKnotOcclusion(vec3 origin, vec3 direction) {\r
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);\r
  return hit < 1.0e5\r
    ? 1.0\r
    : 0.0;\r
}

void main() {\r
  
  
  
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));\r
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));

  
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  if (sphereEnabled) {\r
    
    vec3 dir = (sphereCenter - newPos) / sphereRadius;\r
    vec3 area = cross(dir, refractedLight);\r
    float shadow = dot(area, area);\r
    float dist = dot(dir, -refractedLight);\r
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);\r
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);\r
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));\r
    gl_FragColor.g = shadow;\r
  } else if (cubeEnabled) {\r
    
    vec3 shadowRay = -refractedLight;\r
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));\r
    vec3 up = normalize(cross(right, shadowRay));\r
    float occlusion = 0.0;\r
    const float spread = 0.025;

    for (int x = -1; x <= 1; x++) {\r
      for (int y = -1; y <= 1; y++) {\r
        vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;\r
        occlusion += cubeOcclusion(sampleOrigin, shadowRay);\r
      }\r
    }\r
    gl_FragColor.g = 1.0 - occlusion / 9.0;\r
  } else if (torusKnotEnabled || meshEnabled) {\r
    
    vec2 shadowUV =\r
      0.75 *\r
        (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
      0.5;\r
    const float d = 4.0 / 1024.0;\r
    float occlusion = texture2D(objectShadowTex, shadowUV).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, 0.0)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, 0.0)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, -d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, -d)).r;\r
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, -d)).r;\r
    gl_FragColor.g = 1.0 - 0.8 * occlusion / 9.0;\r
  } else {\r
    gl_FragColor.g = 1.0;\r
  }

  
  vec2 t = intersectRoundedBox(newPos, -refractedLight, cornerRadius);\r
  gl_FragColor.r *=\r
    1.0 /\r
    (1.0 +\r
      exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));\r
}`;class pv{constructor(e,t,n){D(this,"texture");D(this,"target");D(this,"scene",new Ua);D(this,"camera",new Mi(-1,1,1,-1,0,1));D(this,"mesh");D(this,"boxMaterial");D(this,"roundedBoxMaterial",null);this.renderer=e,this.state=t,this.objectShadowTexture=n,this.target=new Ft(1024,1024,{minFilter:nt,magFilter:nt,format:Vt}),this.texture=this.target.texture,this.boxMaterial=new at({vertexShader:uv,fragmentShader:hv,uniforms:{light:{value:t.lightDirection.clone()},water:{value:null},objectShadowTex:{value:n},...t.createUniforms()},blending:fn,side:Qt,depthTest:!1,depthWrite:!1}),this.mesh=new pt(new bi(2,2,200,200),this.boxMaterial),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setPoolShape(e,t,n,i,s){e==="Box"?(this.camera.left=-1,this.camera.right=1,this.camera.top=1,this.camera.bottom=-1,this.camera.updateProjectionMatrix(),this.mesh.material=this.boxMaterial):(this.camera.left=-n,this.camera.right=n,this.camera.top=s,this.camera.bottom=-s,this.camera.updateProjectionMatrix(),this.roundedBoxMaterial?(this.roundedBoxMaterial.uniforms.cornerRadius.value=t,this.roundedBoxMaterial.uniforms.poolWidth.value=n,this.roundedBoxMaterial.uniforms.poolHeight.value=i,this.roundedBoxMaterial.uniforms.poolLength.value=s):this.roundedBoxMaterial=new at({vertexShader:dv,fragmentShader:fv,uniforms:{light:{value:this.state.lightDirection.clone()},water:{value:null},objectShadowTex:{value:this.objectShadowTexture},...this.state.createUniforms(),cornerRadius:{value:t},poolWidth:{value:n},poolHeight:{value:i},poolLength:{value:s}},blending:fn,side:Qt,depthTest:!1,depthWrite:!1}),this.mesh.material=this.roundedBoxMaterial)}update(e){const t=this.mesh.material;t.uniforms.water.value=e.textureA.texture,t.uniforms.light.value.copy(this.state.lightDirection),this.state.syncUniforms(t),t.uniformsNeedUpdate=!0,this.renderer.setRenderTarget(this.target),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}const mv=`
precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;
uniform float poolWidth;
uniform float poolLength;

void main() {
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 refractedLight = refract(-normalize(light), vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec2 projected = 0.75 * (worldPosition.xz - worldPosition.y * refractedLight.xz / refractedLight.y);
  gl_Position = vec4(projected.x / poolWidth, projected.y / poolLength, 0.0, 1.0);
}
`,gv=`
precision highp float;

void main() {
  gl_FragColor = vec4(1.0);
}
`;class vv{constructor(e,t){D(this,"reflectionTarget");D(this,"clippedReflectionTarget");D(this,"refractionTarget");D(this,"shadowTarget");D(this,"reflectionViewProjectionMatrix",new Le);D(this,"viewProjectionMatrix",new Le);D(this,"reflectionCamera",new kt);D(this,"shadowCamera",new Mi(-1,1,1,-1,0,1));D(this,"shadowMaterial");D(this,"clearColor",new Ce);D(this,"previousClearColor",new Ce);this.renderer=e,this.lightDirection=t;const n={minFilter:nt,magFilter:nt,format:Vt,depthBuffer:!0,stencilBuffer:!1};this.reflectionTarget=new Ft(512,512,n),this.clippedReflectionTarget=new Ft(512,512,n),this.refractionTarget=new Ft(512,512,n),this.shadowTarget=new Ft(1024,1024,{minFilter:nt,magFilter:nt,format:Vt,depthBuffer:!1,stencilBuffer:!1}),this.shadowMaterial=new at({vertexShader:mv,fragmentShader:gv,uniforms:{light:{value:t.clone()},poolWidth:{value:1},poolLength:{value:1}},depthTest:!1,depthWrite:!1,side:Qt})}setPoolBounds(e,t){this.shadowMaterial.uniforms.poolWidth.value=e,this.shadowMaterial.uniforms.poolLength.value=t}setSize(e,t){const n=Math.min(1,1024/Math.max(e,t));this.reflectionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n))),this.clippedReflectionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n))),this.refractionTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)))}update(e,t,n){var s,o,a;if(this.updateViewProjection(t),!n){this.withTransparentClear(()=>{this.clearTarget(this.reflectionTarget),this.clearTarget(this.clippedReflectionTarget),this.clearTarget(this.refractionTarget),this.clearTarget(this.shadowTarget)});return}const i=this.collectMaterials(n);for(const l of i)(s=l.uniforms)!=null&&s.isTexturePass&&(l.uniforms.isTexturePass.value=!0);this.withOnlyObjectVisible(e,n,()=>{this.withTransparentClear(()=>{this.renderRefraction(e,t,i),this.renderReflection(e,t,i),this.renderClippedReflection(e,i),this.renderShadow(e)})});for(const l of i)(o=l.uniforms)!=null&&o.isTexturePass&&(l.uniforms.isTexturePass.value=!1),(a=l.uniforms)!=null&&a.texturePassMode&&(l.uniforms.texturePassMode.value=0)}updateViewProjection(e){e.updateMatrixWorld(),this.viewProjectionMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}renderRefraction(e,t,n){this.setTexturePassMode(n,1),this.renderer.setRenderTarget(this.refractionTarget),this.renderer.clear(),this.renderer.render(e,t)}renderReflection(e,t,n){const i=new C,s=new C,o=new C;t.getWorldPosition(i),t.getWorldDirection(s),o.copy(i).add(s),this.reflectionCamera.copy(t),this.reflectionCamera.position.set(i.x,-i.y,i.z),this.reflectionCamera.up.set(t.up.x,-t.up.y,t.up.z),this.reflectionCamera.lookAt(o.x,-o.y,o.z),this.reflectionCamera.updateMatrixWorld(),this.reflectionViewProjectionMatrix.multiplyMatrices(this.reflectionCamera.projectionMatrix,this.reflectionCamera.matrixWorldInverse),this.setTexturePassMode(n,1),this.renderer.setRenderTarget(this.reflectionTarget),this.renderer.clear(),this.renderer.render(e,this.reflectionCamera)}renderClippedReflection(e,t){this.setTexturePassMode(t,2),this.renderer.setRenderTarget(this.clippedReflectionTarget),this.renderer.clear(),this.renderer.render(e,this.reflectionCamera)}renderShadow(e){this.shadowMaterial.uniforms.light.value.copy(this.lightDirection),this.shadowMaterial.uniformsNeedUpdate=!0;const t=e.overrideMaterial;e.overrideMaterial=this.shadowMaterial,this.renderer.setRenderTarget(this.shadowTarget),this.renderer.clear(),this.renderer.render(e,this.shadowCamera),e.overrideMaterial=t}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.clear()}withTransparentClear(e){const t=this.renderer.getRenderTarget();this.renderer.getClearColor(this.previousClearColor);const n=this.renderer.getClearAlpha();this.renderer.setClearColor(this.clearColor,0),e(),this.renderer.setRenderTarget(t),this.renderer.setClearColor(this.previousClearColor,n)}withOnlyObjectVisible(e,t,n){const i=[];e.traverse(s=>{s!==e&&!this.isObjectOrDescendant(s,t)&&(i.push([s,s.visible]),s.visible=!1)}),n();for(const[s,o]of i)s.visible=o}isObjectOrDescendant(e,t){for(let n=e;n;n=n.parent)if(n===t)return!0;return!1}setTexturePassMode(e,t){var n;for(const i of e)(n=i.uniforms)!=null&&n.texturePassMode&&(i.uniforms.texturePassMode.value=t,i.uniformsNeedUpdate=!0)}collectMaterials(e){const t=[];return e.traverse(n=>{n instanceof pt&&n.material instanceof at&&t.push(n.material)}),t}}var xv=`const float poolHeight = 1.0; 

varying vec3 vPosition; 

void main() {\r
  vPosition = position.xyz;

  /**\r
 * * VERTICAL COORDINATE REMAPPING\r
 *    *\r
 *    * Transform from standard box coords to pool coords:\r
 *    *   Input:  Y ∈ [-1, 1]  (standard box)\r
 *    *   Output: Y ∈ [-poolHeight, rim]\r
 *    *\r
 *    * Formula breakdown:\r
 *    *   (1.0 - Y) maps [-1,1] → [2,0]  (flip and shift)\r
 *    *   * (7/12)  scales to pool proportions\r
 *    *   - 1.0     shifts so water surface is at Y=0\r
 *    *   * poolHeight  scales to actual pool depth\r
 */\r
  vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,_v=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\r
const float poolHeight = 1.0;\r
const float torusKnotShadowRadius = 0.13;

uniform vec3 light; 
uniform vec3 sphereCenter; 
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter; 
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter; 
uniform float meshBoundingRadius;\r
uniform float meshShadowRadius;\r
uniform bool meshEnabled;\r
uniform sampler2D tiles; 
uniform sampler2D causticTex; 
uniform sampler2D water; 

varying vec3 vPosition; 

/**\r
 * Ray-AABB intersection for shadow edge calculations.\r
 * Returns parametric distances (tNear, tFar) along the ray.\r
 */\r
vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / ray;\r
  vec3 tMax = (cubeMax - origin) / ray;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Computes the final color for a point on the pool walls or floor.\r
 *\r
 * RENDERING FEATURES:\r
 * 1. Triplanar texture mapping - tiles projected based on surface orientation\r
 * 2. Proximity-based ambient occlusion from scene objects\r
 * 3. Diffuse lighting from refracted sunlight\r
 * 4. Caustic patterns for underwater surfaces\r
 * 5. Edge fadeout for above-water portions\r
 */\r
vec3 getWallColor(vec3 point) {\r
  float scale = 0.5; 
  vec3 wallColor;\r
  vec3 normal;

  /**\r
 * * TRIPLANAR TEXTURE MAPPING\r
 *    *\r
 *    * Instead of traditional UV unwrapping, we project the tile texture\r
 *    * from each axis direction. The dominant axis determines which\r
 *    * projection to use, ensuring seamless tiling on all pool surfaces.\r
 */\r
  if (abs(point.x) > 0.999) {\r
    
    
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\r
    normal = vec3(-point.x, 0.0, 0.0); 
  } else if (abs(point.z) > 0.999) {\r
    
    
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\r
    normal = vec3(0.0, 0.0, -point.z); 
  } else {\r
    
    
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\r
    normal = vec3(0.0, 1.0, 0.0); 
  }

  /**\r
 * * DISTANCE-BASED ATTENUATION\r
 *    *\r
 *    * Surfaces farther from the center receive less ambient light,\r
 *    * simulating the natural falloff of indirect illumination.\r
 */\r
  scale /= length(point);

  /**\r
 * * OBJECT PROXIMITY SHADOWS (Soft Ambient Occlusion)\r
 *    *\r
 *    * Objects in the pool cast soft shadows on nearby surfaces.\r
 *    * Uses inverse power falloff: 1 - 0.9 / d^4\r
 *    *\r
 *    * Close to object (d ≈ 1): shadow ≈ 0.1 (dark)\r
 *    * Far from object (d >> 1): shadow → 1 (full brightness)\r
 */\r
  if (sphereEnabled) {\r
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);\r
  } else if (cubeEnabled) {\r
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);\r
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);\r
  } else if (torusKnotEnabled) {\r
    float knotDistance = length(point - torusKnotCenter);\r
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);\r
  } else if (meshEnabled) {\r
    float meshDistance = length(point - meshCenter);\r
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);\r
  }

  
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(refractedLight, normal)); 

  
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);

  if (point.y < info.r) {\r
    /**\r
 * * UNDERWATER CAUSTIC LIGHTING\r
 *      *\r
 *      * Sample the caustic texture at the projected position.\r
 *      * The projection accounts for the light's slant angle through water.\r
 *      *\r
 *      * caustic.r = intensity (brightness)\r
 *      * caustic.g = shadow factor (object occlusion)\r
 */\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    scale += diffuse * caustic.r * 2.0 * caustic.g;\r
  } else {\r
    /**\r
 * * ABOVE-WATER LIGHTING (Pool Rim)\r
 *      *\r
 *      * For the portion above the waterline, we fade the lighting\r
 *      * smoothly to avoid hard edges where water meets the rim.\r
 *      * Uses a sigmoid function for smooth transition.\r
 */\r
    vec2 t = intersectCube(\r
      point,\r
      refractedLight,\r
      vec3(-1.0, -poolHeight, -1.0),\r
      vec3(1.0, 2.0, 1.0)\r
    );\r
    diffuse *=\r
      1.0 /\r
      (1.0 +\r
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\r
    scale += diffuse * 0.5;\r
  }

  return wallColor * scale;\r
}

void main() {\r
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);

  
  vec4 info = texture2D(water, vPosition.xz * 0.5 + 0.5);\r
  if (vPosition.y < info.r) {\r
    gl_FragColor.rgb *= underwaterColor * 1.2;\r
  }\r
}`,bv=`varying vec3 vPosition; 

void main() {\r
  
  vPosition = position.xyz;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,yv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;\r
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\r
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;\r
uniform vec3 sphereCenter;\r
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter;\r
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter;\r
uniform float meshBoundingRadius;\r
uniform float meshShadowRadius;\r
uniform bool meshEnabled;\r
uniform sampler2D tiles;\r
uniform sampler2D causticTex;\r
uniform sampler2D water;

uniform float cornerRadius; 
uniform float poolWidth; 
uniform float poolHeight; 
uniform float poolLength; 

varying vec3 vPosition;

/**\r
 * Ray-Rounded-Rectangle intersection in 2D (XZ plane).\r
 *\r
 * A rounded rectangle consists of:\r
 * - 4 straight edge segments (top, bottom, left, right)\r
 * - 4 quarter-circle arcs at the corners\r
 *\r
 * GEOMETRY:\r
 *   +---( arc )---+\r
 *   |             |\r
 *  (arc)       (arc)\r
 *   |             |\r
 *   +---( arc )---+\r
 *\r
 * The straight edges span from -r_sub to +r_sub, where r_sub = dimension - R.\r
 * The arcs connect the ends of adjacent edges.\r
 *\r
 * ALGORITHM:\r
 * 1. Test ray against each of the 4 straight edge lines\r
 * 2. Test ray against each of the 4 corner circles (quadratic formula)\r
 * 3. Validate that hits fall within the correct segment/quadrant\r
 * 4. Return the overall entry (tNear) and exit (tFar) parameters\r
 *\r
 * @param origin Ray starting point in XZ space\r
 * @param ray Ray direction in XZ space\r
 * @param R Corner radius\r
 * @return vec2(tNear, tFar) parametric intersection distances\r
 */\r
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {\r
  float tNear = 1e6;\r
  float tFar = -1e6;\r
  bool found = false;

  
  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;\r
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (-poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (-poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }

  
  
  if (R > 0.0) {\r
    vec2 centers[4];\r
    centers[0] = vec2(r_sub_x, r_sub_z);\r
    centers[1] = vec2(-r_sub_x, r_sub_z);\r
    centers[2] = vec2(-r_sub_x, -r_sub_z);\r
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {\r
      vec2 center = centers[i];\r
      vec2 toCenter = origin - center;\r
      float a = dot(ray, ray);\r
      float b = 2.0 * dot(toCenter, ray);\r
      float c = dot(toCenter, toCenter) - R * R;\r
      float disc = b * b - 4.0 * a * c;\r
      if (disc >= 0.0) {\r
        float sqrtDisc = sqrt(disc);\r
        float tA = (-b - sqrtDisc) / (2.0 * a);\r
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;\r
        bool validA = false;\r
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;\r
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;\r
        if (validA) {\r
          tNear = min(tNear, tA);\r
          tFar = max(tFar, tA);\r
          found = true;\r
        }

        
        vec2 ptB = origin + tB * ray;\r
        bool validB = false;\r
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;\r
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;\r
        if (validB) {\r
          tNear = min(tNear, tB);\r
          tFar = max(tFar, tB);\r
          found = true;\r
        }\r
      }\r
    }\r
  }

  if (!found) {\r
    return vec2(-1e6, 1e6);\r
  }

  return vec2(tNear, tFar);\r
}

/**\r
 * Calculates 3D intersection parameters of a ray with the rounded pool box.\r
 * Combines vertical height checks (Y) with horizontal 2D shape boundaries (XZ).\r
 */\r
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {\r
  float tYNear = -1.0e6;\r
  float tYFar = 1.0e6;

  
  if (abs(ray.y) > 1.0e-7) {\r
    float tYMin = (-poolHeight - origin.y) / ray.y;\r
    float tYMax = (2.0 - origin.y) / ray.y;\r
    tYNear = min(tYMin, tYMax);\r
    tYFar = max(tYMin, tYMax);\r
  }

  
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);

  
  float tNear = max(tYNear, tXZ.x);\r
  float tFar = min(tYFar, tXZ.y);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Computes surface normal and UV coordinates for a point on the rounded pool.\r
 *\r
 * NORMAL CALCULATION:\r
 * - Floor: Always (0, 1, 0) pointing up\r
 * - Flat walls: Perpendicular to the wall (-X, 0, 0) or (0, 0, -Z)\r
 * - Curved corners: Radial direction from corner center\r
 *\r
 * UV CALCULATION (Perimeter Parameterization):\r
 * The U coordinate uses the Y position (height).\r
 * The V coordinate uses the perimeter distance 's' around the pool.\r
 *\r
 * To achieve seamless tiling around corners, we compute 's' as the\r
 * arc-length distance along the perimeter, starting from the +X, -Z corner\r
 * and wrapping counterclockwise:\r
 *\r
 *   s = 0: Start at (+width, -length)\r
 *   s increases along +Z wall, through corner arc, along +X side, etc.\r
 *   s = perimeter: Back to start\r
 *\r
 * This ensures continuous texture coordinates even across curved sections.\r
 *\r
 * @param point Surface point position\r
 * @param R Corner radius\r
 * @param normal Output: surface normal\r
 * @param uv Output: texture coordinates\r
 */\r
void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {\r
  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;

  
  if (point.y < -poolHeight + 0.001) {\r
    normal = vec3(0.0, 1.0, 0.0);\r
    uv = point.xz * 0.5 + 0.5;\r
    return;\r
  }

  vec2 absP = abs(point.xz);

  
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {\r
    
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);\r
    vec2 d = point.xz - center;\r
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    
    float s = 0.0;\r
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {\r
      s = point.z + r_sub_z;\r
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {\r
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);\r
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);\r
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {\r
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);\r
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {\r
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);\r
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);\r
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {\r
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);\r
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {\r
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);\r
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);\r
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {\r
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);\r
    } else {\r
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);\r
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);\r
    }\r
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);\r
  } else {\r
    
    vec2 normP = absP / vec2(poolWidth, poolLength);\r
    if (normP.x > normP.y) {\r
      normal = vec3(-sign(point.x), 0.0, 0.0);\r
      uv = point.yz * 0.5 + vec2(1.0, 0.5);\r
    } else {\r
      normal = vec3(0.0, 0.0, -sign(point.z));\r
      uv = point.yx * 0.5 + vec2(1.0, 0.5);\r
    }\r
  }\r
}

/**\r
 * Calculates shading color for pool boundary walls.\r
 * Approximates ambient occlusion from obstacles, projects refracted shadows,\r
 * and overlays underwater caustics.\r
 */\r
vec3 getWallColor(vec3 point) {\r
  float scale = 0.5;\r
  vec3 wallColor;\r
  vec3 normal;\r
  vec2 uv;

  
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);\r
  wallColor = texture2D(tiles, uv).rgb;

  
  scale /= length(point);\r
  if (sphereEnabled) {\r
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);\r
  } else if (cubeEnabled) {\r
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);\r
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);\r
  } else if (torusKnotEnabled) {\r
    float knotDistance = length(point - torusKnotCenter);\r
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);\r
  } else if (meshEnabled) {\r
    float meshDistance = length(point - meshCenter);\r
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);\r
  }

  
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(refractedLight, normal));

  
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  if (point.y < info.r) {\r
    
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    scale += diffuse * caustic.r * 2.0 * caustic.g;\r
  } else {\r
    
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);\r
    diffuse *=\r
      1.0 /\r
      (1.0 +\r
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\r
    scale += diffuse * 0.5;\r
  }\r
  return wallColor * scale;\r
}

void main() {\r
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (vPosition.y < info.r) {\r
    gl_FragColor.rgb *= underwaterColor * 1.2;\r
  }\r
}`;const Mv=0;function Sv(r,e,t,n){const i=new Ot,s=Math.min(r,Math.max(0,Math.min(e,n)-Mv)),o=[],a=[],l=[],c=-t,u=2/12,h=e-s,d=n-s,p=16,g=4*p,b=[];for(let v=0;v<4;v++){let y=0,S=0,A=0;v===0?(y=h,S=d,A=0):v===1?(y=-h,S=d,A=Math.PI/2):v===2?(y=-h,S=-d,A=Math.PI):(y=h,S=-d,A=1.5*Math.PI);for(let T=0;T<p;T++){const R=A+T/p*(Math.PI/2),_=y+s*Math.cos(R),w=S+s*Math.sin(R);b.push(new C(_,c,w))}}o.push(0,c,0),a.push(0,1,0);for(let v=0;v<g;v++){const y=b[v];o.push(y.x,y.y,y.z),a.push(0,1,0)}for(let v=0;v<g;v++){const y=(v+1)%g;l.push(0,y+1,v+1)}const m=[];for(let v=0;v<g;v++){const y=b[v],S=new C;if(s>0){const A=Math.sign(y.x)*h,T=Math.sign(y.z)*d;S.set(y.x-A,0,y.z-T).normalize().negate()}else Math.abs(y.x)>=e-.001?S.set(-Math.sign(y.x),0,0):S.set(0,0,-Math.sign(y.z));m.push(S)}const f=o.length/3;for(let v=0;v<g;v++){const y=b[v],S=m[v];o.push(y.x,c,y.z),a.push(S.x,S.y,S.z),o.push(y.x,u,y.z),a.push(S.x,S.y,S.z)}for(let v=0;v<g;v++){const y=(v+1)%g,S=f+2*v,A=f+2*v+1,T=f+2*y,R=f+2*y+1;l.push(S,T,R),l.push(S,R,A)}return i.setAttribute("position",new Mt(o,3)),i.setAttribute("normal",new Mt(a,3)),i.setIndex(l),i}class Tv{constructor(e,t,n){D(this,"mesh");D(this,"boxGeometry");D(this,"boxMaterial");D(this,"roundedBoxGeometry",null);D(this,"roundedBoxMaterial",null);this.tileTexture=e,this.causticTexture=t,this.state=n,this.boxMaterial=new at({vertexShader:xv,fragmentShader:_v,uniforms:{light:{value:n.lightDirection.clone()},...n.createUniforms(),tiles:{value:e},causticTex:{value:t},water:{value:null}},side:tn,depthTest:!0,depthWrite:!0}),this.boxGeometry=this.createGeometry(),this.mesh=new pt(this.boxGeometry,this.boxMaterial),this.mesh.frustumCulled=!1}setPoolShape(e,t,n,i,s){e==="Box"?(this.mesh.geometry=this.boxGeometry,this.mesh.material=this.boxMaterial):(this.roundedBoxGeometry&&this.roundedBoxGeometry.dispose(),this.roundedBoxGeometry=Sv(t,n,i,s),this.roundedBoxMaterial?(this.roundedBoxMaterial.uniforms.cornerRadius.value=t,this.roundedBoxMaterial.uniforms.poolWidth.value=n,this.roundedBoxMaterial.uniforms.poolHeight.value=i,this.roundedBoxMaterial.uniforms.poolLength.value=s):this.roundedBoxMaterial=new at({vertexShader:bv,fragmentShader:yv,uniforms:{light:{value:this.state.lightDirection.clone()},...this.state.createUniforms(),tiles:{value:this.tileTexture},causticTex:{value:this.causticTexture},water:{value:null},cornerRadius:{value:t},poolWidth:{value:n},poolHeight:{value:i},poolLength:{value:s}},side:tn,depthTest:!0,depthWrite:!0}),this.mesh.geometry=this.roundedBoxGeometry,this.mesh.material=this.roundedBoxMaterial)}prepare(e){const t=this.mesh.material;t.uniforms.water.value=e.textureA.texture,t.uniforms.light.value.copy(this.state.lightDirection),this.state.syncUniforms(t),t.uniformsNeedUpdate=!0}createGeometry(){const e=new _i(2,2,2),t=e.attributes.position,n=e.index,i=[];for(let s=0;s<n.count;s+=3){const o=n.getX(s),a=n.getX(s+1),l=n.getX(s+2);t.getY(o)<0&&t.getY(a)<0&&t.getY(l)<0||i.push(o,a,l)}return e.setIndex(i),e}}var Ev=`uniform sampler2D water;

varying vec3 vPosition;

void main() {\r
  
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  
  vPosition = position.xzy;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,wv=`precision highp float;

const float IOR_AIR = 1.0; 
const float IOR_WATER = 1.333; 

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); 
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); 

const float poolHeight = 1.0; 
const float torusKnotShadowRadius = 0.13; 

uniform vec3 light;\r
uniform vec3 sphereCenter;\r
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter;\r
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter;\r
uniform float meshBoundingRadius;\r
uniform float meshShadowRadius;\r
uniform bool meshEnabled;\r
uniform sampler2D tiles;\r
uniform sampler2D causticTex;\r
uniform sampler2D objectReflectionTex;\r
uniform sampler2D objectClippedReflectionTex;\r
uniform sampler2D objectRefractionTex;\r
uniform sampler2D water;\r
uniform samplerCube sky;\r
uniform vec3 eye;\r
uniform mat4 viewProjectionMatrix;\r
uniform mat4 reflectionViewProjectionMatrix;

varying vec3 vPosition;

/**\r
 * Calculates intersections of a ray with the pool bounding box limits.\r
 */\r
vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / ray;\r
  vec3 tMax = (cubeMax - origin) / ray;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Ray-Sphere intersection using the quadratic formula.\r
 *\r
 * Geometric setup:\r
 *   - Sphere: all points P where |P - C|² = r²\r
 *   - Ray: P(t) = O + t*D (origin O, direction D, parameter t ≥ 0)\r
 *\r
 * Substituting ray into sphere equation yields quadratic:\r
 *   at² + bt + c = 0\r
 *\r
 * Where:\r
 *   a = D·D (always > 0)\r
 *   b = 2(O-C)·D\r
 *   c = (O-C)·(O-C) - r²\r
 *\r
 * Solutions: t = (-b ± √(b²-4ac)) / 2a\r
 * We use -b - √... to get the nearest intersection (smallest positive t).\r
 */\r
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center; 
  float a = dot(ray, ray); 
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;

  if (discriminant > 0.0) {\r
    float t = (-b - sqrt(discriminant)) / (2.0 * a); 
    if (t > 0.0) return t; 
  }\r
  return 1.0e6; 
}

/**\r
 * Calculates exit/entry bounds on a sphere obstacle.\r
 */\r
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float root = sqrt(discriminant);\r
    float near = (-b - root) / (2.0 * a);\r
    float far = (-b + root) / (2.0 * a);\r
    if (near > 0.0) return near;\r
    if (far > 0.0) return 0.0;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Signed Distance Function (SDF) for a (2,3) Torus Knot (Trefoil Knot).\r
 *\r
 * A (p,q) torus knot winds p times through the hole and q times around\r
 * the torus. This creates a continuous closed curve in 3D space.\r
 *\r
 * The SDF is computed by discretizing the knot curve into line segments\r
 * and finding the minimum distance from the query point to any segment.\r
 * This distance is then offset by the tube radius to create a solid shape.\r
 *\r
 * For raymarching, the SDF's key property is: at any point, the SDF value\r
 * is a safe distance to step without overshooting the surface.\r
 */\r
float sdTorusKnot(vec3 p, vec3 center) {\r
  vec3 pos = p - center;

  
  float d_bound = length(pos) - 0.31;\r
  if (d_bound > 0.08) {\r
    return d_bound;\r
  }

  float minDist = 1.0e6;\r
  const int segments = 64; 
  const float radius = 0.17; 
  const float tube = 0.045; 
  const float p_knot = 2.0; 
  const float q_knot = 3.0; 

  vec3 prevPt = vec3(0.0);\r
  for (int i = 0; i <= segments; i++) {\r
    
    float theta = float(i) / float(segments) * 6.283185307179586;

    
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;\r
    vec3 pt = vec3(\r
      rad * cos(p_knot * theta),\r
      -radius * sin(q_knot * theta) * 0.5,\r
      rad * sin(p_knot * theta)\r
    );

    if (i > 0) {\r
      
      vec3 ba = pt - prevPt; 
      vec3 pa = pos - prevPt; 
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); 
      float d = length(pa - ba * h); 
      minDist = min(minDist, d);\r
    }\r
    prevPt = pt;\r
  }\r
  return minDist - tube; 
}

/**\r
 * Traces a ray to intersect the Torus Knot SDF.\r
 */\r
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {\r
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);\r
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;\r
  for (int i = 0; i < 30; i++) {\r
    vec3 p = origin + ray * t;\r
    float d = sdTorusKnot(p, center);\r
    if (d < 0.001) {\r
      return t;\r
    }\r
    t += d;\r
    if (t > t_bound + 0.5) break;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Computes surface normal of the Torus Knot using gradient estimation.\r
 *\r
 * For an SDF, the gradient ∇d points away from the surface (outward normal).\r
 * We estimate the gradient using central finite differences:\r
 *\r
 *   ∂d/∂x ≈ (d(x+ε) - d(x-ε)) / (2ε)\r
 *\r
 * This works because the SDF's gradient direction is the surface normal,\r
 * and the gradient magnitude is 1 (for a proper distance field).\r
 *\r
 * @param p Query point on the surface\r
 * @param center Torus knot center position\r
 * @return Normalized outward-facing surface normal\r
 */\r
vec3 getTorusKnotNormal(vec3 p, vec3 center) {\r
  const float eps = 0.001; 

  
  
  vec3 n = vec3(\r
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)\r
  );\r
  return normalize(n);\r
}

/**\r
 * Computes shading color for a point on the sphere surface.\r
 *\r
 * Uses a combination of:\r
 * 1. Proximity-based ambient occlusion (darkening near walls/floor)\r
 * 2. Diffuse lighting from the underwater sun direction\r
 * 3. Caustic light patterns when underwater\r
 */\r
vec3 getSphereColor(vec3 point) {\r
  vec3 color = vec3(0.5); 

  /**\r
 * * PROXIMITY AMBIENT OCCLUSION\r
 *    *\r
 *    * Darkens the sphere near pool walls and floor to simulate soft shadows\r
 *    * and reduced ambient light in corners. Uses an inverse power falloff:\r
 *    *\r
 *    *   occlusion = 1 - 0.9 / (distance/radius)³\r
 *    *\r
 *    * When distance ≈ radius: occlusion ≈ 1 - 0.9 = 0.1 (very dark)\r
 *    * When distance >> radius: occlusion → 1 (full brightness)\r
 *    *\r
 *    * Distances measured from walls (X=±1), back wall (Z=±1), and floor (Y=-poolHeight)\r
 */\r
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0); 
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0); 
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0); 

  
  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

  
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    
    
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    diffuse *= caustic.r * 4.0; 
  }

  color += diffuse;\r
  return color;\r
}

/**\r
 * Computes cube shading.\r
 */\r
vec3 getCubeColor(vec3 point) {\r
  vec3 local = (point - cubeCenter) / cubeHalfSize;\r
  vec3 axis = abs(local);\r
  vec3 cubeNormal;\r
  if (axis.x > axis.y && axis.x > axis.z) {\r
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);\r
  } else if (axis.y > axis.z) {\r
    cubeNormal = vec3(0.0, sign(local.y), 0.0);\r
  } else {\r
    cubeNormal = vec3(0.0, 0.0, sign(local.z));\r
  }

  vec3 color = vec3(0.5);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

/**\r
 * Computes Torus Knot shading.\r
 */\r
vec3 getTorusKnotColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

/**\r
 * Computes pool wall shading.\r
 */\r
vec3 getWallColor(vec3 point) {\r
  float scale = 0.5;\r
  vec3 wallColor;\r
  vec3 normal;\r
  if (abs(point.x) > 0.999) {\r
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\r
    normal = vec3(-point.x, 0.0, 0.0);\r
  } else if (abs(point.z) > 0.999) {\r
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\r
    normal = vec3(0.0, 0.0, -point.z);\r
  } else {\r
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\r
    normal = vec3(0.0, 1.0, 0.0);\r
  }

  scale /= length(point);\r
  if (sphereEnabled) {\r
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);\r
  } else if (cubeEnabled) {\r
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);\r
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);\r
  } else if (torusKnotEnabled) {\r
    float knotDistance = length(point - torusKnotCenter);\r
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);\r
  } else if (meshEnabled) {\r
    float meshDistance = length(point - meshCenter);\r
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);\r
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(refractedLight, normal));\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    scale += diffuse * caustic.r * 2.0 * caustic.g;\r
  } else {\r
    vec2 t = intersectCube(\r
      point,\r
      refractedLight,\r
      vec3(-1.0, -poolHeight, -1.0),\r
      vec3(1.0, 2.0, 1.0)\r
    );\r
    diffuse *=\r
      1.0 /\r
      (1.0 +\r
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\r
    scale += diffuse * 0.5;\r
  }\r
  return wallColor * scale;\r
}

/**\r
 * Samples a texture projected from camera matrices.\r
 */\r
vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {\r
  vec4 clip = matrix * vec4(point, 1.0);\r
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);\r
  vec2 uv = ndc.xy * 0.5 + 0.5;\r
  float inBounds =\r
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);\r
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;\r
}

/**\r
 * Samples refracted objects inside water.\r
 */\r
vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);\r
}

/**\r
 * Samples reflected objects inside water.\r
 */\r
vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(\r
    objectReflectionTex,\r
    reflectionViewProjectionMatrix,\r
    origin + ray * hit\r
  );\r
}

/**\r
 * Ray-traces a single ray to determine the color seen in that direction.\r
 *\r
 * This is a simple ray tracer that handles:\r
 * 1. Intersection with scene objects (sphere, cube, torus knot)\r
 * 2. Intersection with pool walls and floor\r
 * 3. Escape to sky (cubemap environment)\r
 * 4. Water color absorption (Beer's Law)\r
 *\r
 * The ray can be either a reflected ray (bouncing off water surface toward sky)\r
 * or a refracted ray (entering water toward pool floor).\r
 *\r
 * @param origin Starting point of the ray (on water surface)\r
 * @param ray Normalized direction of the ray\r
 * @param waterColor Tinting color for underwater light absorption\r
 * @return Final color for this ray\r
 */\r
vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {\r
  vec3 color;

  
  float sphereDistance = sphereEnabled\r
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)\r
    : 1.0e6;

  vec2 cubeIntersection = intersectCube(\r
    origin,\r
    ray,\r
    cubeCenter - cubeHalfSize,\r
    cubeCenter + cubeHalfSize\r
  );\r
  bool cubeHit =\r
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;\r
  float cubeDistance = cubeHit\r
    ? cubeIntersection.x > 0.0\r
      ? cubeIntersection.x\r
      : cubeIntersection.y > 0.0\r
        ? cubeIntersection.y\r
        : 1.0e6\r
    : 1.0e6;

  
  float torusKnotDistance =\r
    torusKnotEnabled && ray.y > 0.0\r
      ? intersectTorusKnot(origin, ray, torusKnotCenter)\r
      : 1.0e6;

  
  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);

  if (objectDistance < 1.0e6) {\r
    
    vec3 hit = origin + ray * objectDistance;\r
    if (objectDistance == sphereDistance) {\r
      color = getSphereColor(hit);\r
    } else if (objectDistance == cubeDistance) {\r
      color = getCubeColor(hit);\r
    } else {\r
      color = getTorusKnotColor(hit);\r
    }

  } else if (ray.y < 0.0) {\r
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\r
    color = getWallColor(origin + ray * t.y);

  } else {\r
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\r
    vec3 hit = origin + ray * t.y;

    if (hit.y < 2.0 / 12.0) {\r
      
      color = getWallColor(hit);\r
    } else {\r
      
      color = textureCube(sky, ray).rgb;

      /**\r
 * * SUN SPOT (Specular Highlight)\r
 *        *\r
 *        * Add a bright spot where the ray direction aligns with the sun.\r
 *        * Uses a high-power falloff (5000) for a small, intense highlight.\r
 *        *\r
 *        * Color (10, 8, 6) gives a warm yellow-white sun appearance.\r
 */\r
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);\r
    }\r
  }

  /**\r
 * * WATER COLOR ABSORPTION (Beer-Lambert Law Approximation)\r
 *    *\r
 *    * Light traveling through water is absorbed, with longer wavelengths\r
 *    * (red) absorbed more than shorter ones (blue). This is why deep\r
 *    * water appears blue-green.\r
 *    *\r
 *    * We simplify this by multiplying by a tint color for downward rays\r
 *    * (longer path through water = more absorption).\r
 */\r
  if (ray.y < 0.0) color *= waterColor;

  return color;\r
}

void main() {\r
  /**\r
 * * STEP 1: COORDINATE MAPPING\r
 *    * Convert world XZ position to UV texture coordinates [0,1]\r
 *    * World space: X,Z ∈ [-1, 1] → UV: [0, 1]\r
 */\r
  vec2 coord = vPosition.xz * 0.5 + 0.5;\r
  vec4 info = texture2D(water, coord);

  /**\r
 * * STEP 2: PARALLAX DISPLACEMENT (Iterative Refinement)\r
 *    *\r
 *    * Problem: The water surface is displaced vertically, but we're sampling\r
 *    * from a fixed horizontal grid. A naive lookup would misalign the surface\r
 *    * features with their actual 3D positions.\r
 *    *\r
 *    * Solution: Iteratively offset the UV lookup in the direction of the\r
 *    * surface gradient (stored in BA channels). This approximates ray-heightmap\r
 *    * intersection without expensive per-pixel raymarching.\r
 *    *\r
 *    * The gradient (info.ba) points toward higher water; we step along it\r
 *    * to converge toward the correct sampling point.\r
 */\r
  for (int i = 0; i < 5; i++) {\r
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0); 
    info = texture2D(water, coord); 
  }

  /**\r
 * * STEP 3: NORMAL RECONSTRUCTION\r
 *    *\r
 *    * The water texture stores surface slope components:\r
 *    *   info.b = ∂height/∂x (x-component of gradient)\r
 *    *   info.a = ∂height/∂z (z-component of gradient)\r
 *    *\r
 *    * For a heightfield, the normal is N = normalize(-∂h/∂x, 1, -∂h/∂z)\r
 *    * The y-component is computed from the unit normal constraint:\r
 *    *   |N| = 1  →  Nx² + Ny² + Nz² = 1  →  Ny = sqrt(1 - Nx² - Nz²)\r
 */\r
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));\r
  float slopeLengthSq = min(dot(slope, slope), 0.999);\r
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  
  vec3 incomingRay = normalize(vPosition - eye);

  /**\r
 * * STEP 5: REFLECTION AND REFRACTION RAYS\r
 *    *\r
 *    * reflect(I, N): R = I - 2*(I·N)*N\r
 *    *   Mirrors the incident ray about the normal\r
 *    *\r
 *    * refract(I, N, eta): Snell's Law implementation\r
 *    *   n₁ sin(θ₁) = n₂ sin(θ₂)\r
 *    *   eta = n₁/n₂ = IOR_AIR/IOR_WATER ≈ 0.75\r
 *    *   Returns the transmitted ray direction\r
 */\r
  vec3 reflectedRay = reflect(incomingRay, normal);\r
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);

  /**\r
 * * STEP 6: FRESNEL REFLECTANCE (Schlick's Approximation)\r
 *    *\r
 *    * The Fresnel equations describe how much light reflects vs. refracts\r
 *    * at an interface, depending on the incident angle and polarization.\r
 *    *\r
 *    * Schlick's approximation: F(θ) = F₀ + (1 - F₀)(1 - cos(θ))⁵\r
 *    *\r
 *    * Where:\r
 *    *   F₀ = ((n₁ - n₂)/(n₁ + n₂))² ≈ 0.02 for air-water at normal incidence\r
 *    *   θ = angle between view ray and surface normal\r
 *    *\r
 *    * Physical behavior:\r
 *    *   - Looking straight down (θ ≈ 0°): mostly see refracted (underwater) image\r
 *    *   - Looking at grazing angle (θ → 90°): mostly see reflected (sky) image\r
 *    *\r
 *    * We use a modified version with F₀ = 0.25 and power = 3 for artistic control.\r
 */\r
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);\r
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  
  if (torusKnotEnabled) {\r
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31);\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
    vec4 reflectedObject = sampleObjectReflection(vPosition, reflectedRay, torusKnotCenter, 0.31);\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
  } else if (meshEnabled) {\r
    vec4 refractedObject = sampleObjectRefraction(\r
      vPosition,\r
      refractedRay,\r
      meshCenter,\r
      meshBoundingRadius\r
    );\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
    
    vec4 reflectedObject = sampleProjectedTexture(\r
      objectClippedReflectionTex,\r
      reflectionViewProjectionMatrix,\r
      vPosition\r
    );\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
  }

  
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);\r
}`,Av=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); 
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); 
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;\r
uniform vec3 sphereCenter;\r
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter;\r
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter;\r
uniform float meshBoundingRadius;\r
uniform float meshShadowRadius;\r
uniform bool meshEnabled;

uniform sampler2D tiles; 
uniform sampler2D causticTex; 
uniform sampler2D objectReflectionTex; 
uniform sampler2D objectClippedReflectionTex; 
uniform sampler2D objectRefractionTex; 
uniform sampler2D water; 
uniform samplerCube sky; 
uniform sampler2D dyeTex; 
uniform float dyeEnabled; 

uniform vec3 eye;\r
uniform mat4 viewProjectionMatrix;\r
uniform mat4 reflectionViewProjectionMatrix;

uniform float cornerRadius;\r
uniform float poolWidth;\r
uniform float poolHeight;\r
uniform float poolLength;

varying vec3 vPosition;

vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {\r
  float tNear = 1e6;\r
  float tFar = -1e6;\r
  bool found = false;

  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;\r
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (-poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (-poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }

  
  if (R > 0.0) {\r
    vec2 centers[4];\r
    centers[0] = vec2(r_sub_x, r_sub_z);\r
    centers[1] = vec2(-r_sub_x, r_sub_z);\r
    centers[2] = vec2(-r_sub_x, -r_sub_z);\r
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {\r
      vec2 center = centers[i];\r
      vec2 toCenter = origin - center;\r
      float a = dot(ray, ray);\r
      float b = 2.0 * dot(toCenter, ray);\r
      float c = dot(toCenter, toCenter) - R * R;\r
      float disc = b * b - 4.0 * a * c;\r
      if (disc >= 0.0) {\r
        float sqrtDisc = sqrt(disc);\r
        float tA = (-b - sqrtDisc) / (2.0 * a);\r
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;\r
        bool validA = false;\r
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;\r
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;\r
        if (validA) {\r
          tNear = min(tNear, tA);\r
          tFar = max(tFar, tA);\r
          found = true;\r
        }

        
        vec2 ptB = origin + tB * ray;\r
        bool validB = false;\r
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;\r
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;\r
        if (validB) {\r
          tNear = min(tNear, tB);\r
          tFar = max(tFar, tB);\r
          found = true;\r
        }\r
      }\r
    }\r
  }

  if (!found) {\r
    return vec2(-1e6, 1e6);\r
  }

  return vec2(tNear, tFar);\r
}

vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {\r
  float tYNear = -1.0e6;\r
  float tYFar = 1.0e6;\r
  if (abs(ray.y) > 1.0e-7) {\r
    float tYMin = (-poolHeight - origin.y) / ray.y;\r
    float tYMax = (2.0 - origin.y) / ray.y;\r
    tYNear = min(tYMin, tYMax);\r
    tYFar = max(tYMin, tYMax);\r
  }\r
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);\r
  float tNear = max(tYNear, tXZ.x);\r
  float tFar = min(tYFar, tXZ.y);\r
  return vec2(tNear, tFar);\r
}

void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {\r
  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;

  if (point.y < -poolHeight + 0.001) {\r
    normal = vec3(0.0, 1.0, 0.0);\r
    uv = point.xz * 0.5 + 0.5;\r
    return;\r
  }

  vec2 absP = abs(point.xz);\r
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {\r
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);\r
    vec2 d = point.xz - center;\r
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    float s = 0.0;\r
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {\r
      s = point.z + r_sub_z;\r
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {\r
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);\r
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);\r
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {\r
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);\r
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {\r
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);\r
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);\r
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {\r
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);\r
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {\r
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);\r
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);\r
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {\r
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);\r
    } else {\r
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);\r
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);\r
    }\r
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);\r
  } else {\r
    vec2 normP = absP / vec2(poolWidth, poolLength);\r
    if (normP.x > normP.y) {\r
      normal = vec3(-sign(point.x), 0.0, 0.0);\r
      uv = point.yz * 0.5 + vec2(1.0, 0.5);\r
    } else {\r
      normal = vec3(0.0, 0.0, -sign(point.z));\r
      uv = point.yx * 0.5 + vec2(1.0, 0.5);\r
    }\r
  }\r
}

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / ray;\r
  vec3 tMax = (cubeMax - origin) / ray;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float t = (-b - sqrt(discriminant)) / (2.0 * a);\r
    if (t > 0.0) return t;\r
  }\r
  return 1.0e6;\r
}

float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float root = sqrt(discriminant);\r
    float near = (-b - root) / (2.0 * a);\r
    float far = (-b + root) / (2.0 * a);\r
    if (near > 0.0) return near;\r
    if (far > 0.0) return 0.0;\r
  }\r
  return 1.0e6;\r
}

float sdTorusKnot(vec3 p, vec3 center) {\r
  vec3 pos = p - center;\r
  float d_bound = length(pos) - 0.31;\r
  if (d_bound > 0.08) {\r
    return d_bound;\r
  }\r
  float minDist = 1.0e6;\r
  const int segments = 64;\r
  const float radius = 0.17;\r
  const float tube = 0.045;\r
  const float p_knot = 2.0;\r
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);\r
  for (int i = 0; i <= segments; i++) {\r
    float theta = float(i) / float(segments) * 6.283185307179586;\r
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;\r
    vec3 pt = vec3(\r
      rad * cos(p_knot * theta),\r
      -radius * sin(q_knot * theta) * 0.5,\r
      rad * sin(p_knot * theta)\r
    );\r
    if (i > 0) {\r
      vec3 ba = pt - prevPt;\r
      vec3 pa = pos - prevPt;\r
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\r
      float d = length(pa - ba * h);\r
      minDist = min(minDist, d);\r
    }\r
    prevPt = pt;\r
  }\r
  return minDist - tube;\r
}

float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {\r
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);\r
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;\r
  for (int i = 0; i < 30; i++) {\r
    vec3 p = origin + ray * t;\r
    float d = sdTorusKnot(p, center);\r
    if (d < 0.001) {\r
      return t;\r
    }\r
    t += d;\r
    if (t > t_bound + 0.5) break;\r
  }\r
  return 1.0e6;\r
}

vec3 getTorusKnotNormal(vec3 p, vec3 center) {\r
  const float eps = 0.001;\r
  vec3 n = vec3(\r
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)\r
  );\r
  return normalize(n);\r
}

vec3 getSphereColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  color *= 1.0 - 0.6 / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);\r
  color *= 1.0 - 0.6 / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);\r
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse *= caustic.r * 4.0;\r
  }\r
  color += diffuse;\r
  return color;\r
}

vec3 getCubeColor(vec3 point) {\r
  vec3 local = (point - cubeCenter) / cubeHalfSize;\r
  vec3 axis = abs(local);\r
  vec3 cubeNormal;\r
  if (axis.x > axis.y && axis.x > axis.z) {\r
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);\r
  } else if (axis.y > axis.z) {\r
    cubeNormal = vec3(0.0, sign(local.y), 0.0);\r
  } else {\r
    cubeNormal = vec3(0.0, 0.0, sign(local.z));\r
  }

  vec3 color = vec3(0.5);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

vec3 getTorusKnotColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

vec3 getWallColor(vec3 point) {\r
  float scale = 0.5;\r
  vec3 wallColor;\r
  vec3 normal;\r
  vec2 uv;\r
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);\r
  wallColor = texture2D(tiles, uv).rgb;

  scale /= length(point);\r
  if (sphereEnabled) {\r
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);\r
  } else if (cubeEnabled) {\r
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);\r
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);\r
  } else if (torusKnotEnabled) {\r
    float knotDistance = length(point - torusKnotCenter);\r
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);\r
  } else if (meshEnabled) {\r
    float meshDistance = length(point - meshCenter);\r
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);\r
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(refractedLight, normal));\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    scale += diffuse * caustic.r * 2.0 * caustic.g;\r
  } else {\r
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);\r
    diffuse *=\r
      1.0 /\r
      (1.0 +\r
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\r
    scale += diffuse * 0.5;\r
  }\r
  return wallColor * scale;\r
}

vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {\r
  vec4 clip = matrix * vec4(point, 1.0);\r
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);\r
  vec2 uv = ndc.xy * 0.5 + 0.5;\r
  float inBounds =\r
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);\r
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;\r
}

vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);\r
}

vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(\r
    objectReflectionTex,\r
    reflectionViewProjectionMatrix,\r
    origin + ray * hit\r
  );\r
}

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {\r
  vec3 color;

  
  float sphereDistance = sphereEnabled\r
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)\r
    : 1.0e6;\r
  vec2 cubeIntersection = intersectCube(\r
    origin,\r
    ray,\r
    cubeCenter - cubeHalfSize,\r
    cubeCenter + cubeHalfSize\r
  );\r
  bool cubeHit =\r
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;\r
  float cubeDistance = cubeHit\r
    ? cubeIntersection.x > 0.0\r
      ? cubeIntersection.x\r
      : cubeIntersection.y > 0.0\r
        ? cubeIntersection.y\r
        : 1.0e6\r
    : 1.0e6;\r
  float torusKnotDistance =\r
    torusKnotEnabled && ray.y > 0.0\r
      ? intersectTorusKnot(origin, ray, torusKnotCenter)\r
      : 1.0e6;

  
  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);\r
  if (objectDistance < 1.0e6) {\r
    vec3 hit = origin + ray * objectDistance;\r
    if (objectDistance == sphereDistance) {\r
      color = getSphereColor(hit);\r
    } else if (objectDistance == cubeDistance) {\r
      color = getCubeColor(hit);\r
    } else {\r
      color = getTorusKnotColor(hit);\r
    }\r
  } else 
  if (ray.y < 0.0) {\r
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);\r
    color = getWallColor(origin + ray * t.y);\r
  } else 
  {\r
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);\r
    vec3 hit = origin + ray * t.y;\r
    
    if (hit.y < 2.0 / 12.0) {\r
      color = getWallColor(hit);\r
    } else 
    {\r
      color = textureCube(sky, ray).rgb;\r
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0); 
    }\r
  }

  
  if (ray.y < 0.0) color *= waterColor;\r
  return color;\r
}

void main() {\r
  
  vec2 absP = abs(vPosition.xz);\r
  float r_sub_x = poolWidth - cornerRadius;\r
  float r_sub_z = poolLength - cornerRadius;\r
  if (absP.x > r_sub_x && absP.y > r_sub_z) {\r
    if (length(absP - vec2(r_sub_x, r_sub_z)) > cornerRadius) {\r
      discard;\r
    }\r
  }

  
  vec2 coord = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;\r
  vec4 info = texture2D(water, coord);

  
  for (int i = 0; i < 5; i++) {\r
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0);\r
    info = texture2D(water, coord);\r
  }

  
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));\r
  float slopeLengthSq = min(dot(slope, slope), 0.999);\r
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));\r
  vec3 incomingRay = normalize(vPosition - eye);

  
  vec3 reflectedRay = reflect(incomingRay, normal);\r
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);

  
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);\r
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  
  if (torusKnotEnabled) {\r
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31);\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
    vec4 reflectedObject = sampleObjectReflection(vPosition, reflectedRay, torusKnotCenter, 0.31);\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
  } else if (meshEnabled) {\r
    vec4 refractedObject = sampleObjectRefraction(\r
      vPosition,\r
      refractedRay,\r
      meshCenter,\r
      meshBoundingRadius\r
    );\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
    vec4 reflectedObject = sampleProjectedTexture(\r
      objectClippedReflectionTex,\r
      reflectionViewProjectionMatrix,\r
      vPosition\r
    );\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
  }

  
  vec3 finalColor = mix(refractedColor, reflectedColor, fresnel);

  
  
  
  if (dyeEnabled > 0.5) {\r
    vec2 dyeUv = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;\r
    float dye = texture2D(dyeTex, dyeUv).r;\r
    vec3 dyeColor = vec3(0.95, 0.16, 0.10) * (0.25 + 0.85 * length(finalColor));\r
    finalColor = mix(finalColor, dyeColor, clamp(dye * 1.4, 0.0, 0.9));\r
  }

  gl_FragColor = vec4(finalColor, 1.0);\r
}`,Rv=`uniform sampler2D water;

varying vec3 vPosition;

void main() {\r
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  vPosition = position.xzy;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,Cv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;\r
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\r
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\r
const float poolHeight = 1.0;\r
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;\r
uniform vec3 sphereCenter;\r
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter;\r
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter;\r
uniform float meshBoundingRadius;\r
uniform float meshShadowRadius;\r
uniform bool meshEnabled;\r
uniform sampler2D tiles;\r
uniform sampler2D causticTex;\r
uniform sampler2D objectReflectionTex;\r
uniform sampler2D objectRefractionTex;\r
uniform sampler2D water;\r
uniform samplerCube sky;\r
uniform vec3 eye;\r
uniform mat4 viewProjectionMatrix;\r
uniform mat4 reflectionViewProjectionMatrix;

varying vec3 vPosition;\r

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / ray;\r
  vec3 tMax = (cubeMax - origin) / ray;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

/**\r
 * Computes ray-sphere intersection.\r
 */\r
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float t = (-b - sqrt(discriminant)) / (2.0 * a);\r
    if (t > 0.0) return t;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Checks entry/exit bounds on a sphere obstacle.\r
 */\r
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float root = sqrt(discriminant);\r
    float near = (-b - root) / (2.0 * a);\r
    float far = (-b + root) / (2.0 * a);\r
    if (near > 0.0) return near;\r
    if (far > 0.0) return 0.0;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Torus Knot signed distance function (SDF).\r
 */\r
float sdTorusKnot(vec3 p, vec3 center) {\r
  vec3 pos = p - center;\r
  float d_bound = length(pos) - 0.31;\r
  if (d_bound > 0.08) {\r
    return d_bound;\r
  }\r
  float minDist = 1.0e6;\r
  const int segments = 64;\r
  const float radius = 0.17;\r
  const float tube = 0.045;\r
  const float p_knot = 2.0;\r
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);\r
  for (int i = 0; i <= segments; i++) {\r
    float theta = float(i) / float(segments) * 6.283185307179586;\r
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;\r
    vec3 pt = vec3(\r
      rad * cos(p_knot * theta),\r
      -radius * sin(q_knot * theta) * 0.5,\r
      rad * sin(p_knot * theta)\r
    );\r
    if (i > 0) {\r
      vec3 ba = pt - prevPt;\r
      vec3 pa = pos - prevPt;\r
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\r
      float d = length(pa - ba * h);\r
      minDist = min(minDist, d);\r
    }\r
    prevPt = pt;\r
  }\r
  return minDist - tube;\r
}

/**\r
 * Traces a ray to intersect the Torus Knot SDF.\r
 */\r
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {\r
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);\r
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;\r
  for (int i = 0; i < 30; i++) {\r
    vec3 p = origin + ray * t;\r
    float d = sdTorusKnot(p, center);\r
    if (d < 0.001) {\r
      return t;\r
    }\r
    t += d;\r
    if (t > t_bound + 0.5) break;\r
  }\r
  return 1.0e6;\r
}

/**\r
 * Computes normal on Torus Knot surface.\r
 */\r
vec3 getTorusKnotNormal(vec3 p, vec3 center) {\r
  const float eps = 0.001;\r
  vec3 n = vec3(\r
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)\r
  );\r
  return normalize(n);\r
}

/**\r
 * Calculates shading color on the sphere.\r
 */\r
vec3 getSphereColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);\r
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);\r
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    diffuse *= caustic.r * 4.0;\r
  }\r
  color += diffuse;\r
  return color;\r
}

/**\r
 * Calculates shading color on the cube.\r
 */\r
vec3 getCubeColor(vec3 point) {\r
  vec3 local = (point - cubeCenter) / cubeHalfSize;\r
  vec3 axis = abs(local);\r
  vec3 cubeNormal;\r
  if (axis.x > axis.y && axis.x > axis.z) {\r
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);\r
  } else if (axis.y > axis.z) {\r
    cubeNormal = vec3(0.0, sign(local.y), 0.0);\r
  } else {\r
    cubeNormal = vec3(0.0, 0.0, sign(local.z));\r
  }

  vec3 color = vec3(0.5);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

/**\r
 * Calculates shading color on the Torus Knot.\r
 */\r
vec3 getTorusKnotColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

/**\r
 * Calculates wall/floor tiles color.\r
 */\r
vec3 getWallColor(vec3 point) {\r
  float scale = 0.5;\r
  vec3 wallColor;\r
  vec3 normal;\r
  if (abs(point.x) > 0.999) {\r
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\r
    normal = vec3(-point.x, 0.0, 0.0);\r
  } else if (abs(point.z) > 0.999) {\r
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\r
    normal = vec3(0.0, 0.0, -point.z);\r
  } else {\r
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\r
    normal = vec3(0.0, 1.0, 0.0);\r
  }

  scale /= length(point);\r
  if (sphereEnabled) {\r
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);\r
  } else if (cubeEnabled) {\r
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);\r
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);\r
  } else if (torusKnotEnabled) {\r
    float knotDistance = length(point - torusKnotCenter);\r
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);\r
  } else if (meshEnabled) {\r
    float meshDistance = length(point - meshCenter);\r
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);\r
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(refractedLight, normal));\r
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5\r
    );\r
    scale += diffuse * caustic.r * 2.0 * caustic.g;\r
  } else {\r
    vec2 t = intersectCube(\r
      point,\r
      refractedLight,\r
      vec3(-1.0, -poolHeight, -1.0),\r
      vec3(1.0, 2.0, 1.0)\r
    );\r
    diffuse *=\r
      1.0 /\r
      (1.0 +\r
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\r
    scale += diffuse * 0.5;\r
  }\r
  return wallColor * scale;\r
}

/**\r
 * Samples a texture projected from the camera's view-projection matrix coordinates.\r
 */\r
vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {\r
  vec4 clip = matrix * vec4(point, 1.0);\r
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);\r
  vec2 uv = ndc.xy * 0.5 + 0.5;\r
  float inBounds =\r
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);\r
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;\r
}

/**\r
 * Samples refraction texture mapped to a sphere boundary approximation.\r
 */\r
vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);\r
}

/**\r
 * Samples reflection texture mapped to a sphere boundary approximation.\r
 */\r
vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(\r
    objectReflectionTex,\r
    reflectionViewProjectionMatrix,\r
    origin + ray * hit\r
  );\r
}

/**\r
 * Ray-traces primary refraction/reflection rays to find colors of background wall tiles,\r
 * objects, or sky dome exits.\r
 */\r
vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {\r
  vec3 color;\r
  float sphereDistance = sphereEnabled\r
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)\r
    : 1.0e6;\r
  vec2 cubeIntersection = intersectCube(\r
    origin,\r
    ray,\r
    cubeCenter - cubeHalfSize,\r
    cubeCenter + cubeHalfSize\r
  );\r
  bool cubeHit =\r
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;\r
  float cubeDistance = cubeHit\r
    ? cubeIntersection.x > 0.0\r
      ? cubeIntersection.x\r
      : cubeIntersection.y > 0.0\r
        ? cubeIntersection.y\r
        : 1.0e6\r
    : 1.0e6;\r
  float torusKnotDistance =\r
    torusKnotEnabled && ray.y > 0.0\r
      ? intersectTorusKnot(origin, ray, torusKnotCenter)\r
      : 1.0e6;

  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);\r
  if (objectDistance < 1.0e6) {\r
    vec3 hit = origin + ray * objectDistance;\r
    if (objectDistance == sphereDistance) {\r
      color = getSphereColor(hit);\r
    } else if (objectDistance == cubeDistance) {\r
      color = getCubeColor(hit);\r
    } else {\r
      color = getTorusKnotColor(hit);\r
    }\r
  } else if (ray.y < 0.0) {\r
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\r
    color = getWallColor(origin + ray * t.y);\r
  } else {\r
    
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\r
    vec3 hit = origin + ray * t.y;\r
    if (hit.y < 2.0 / 12.0) {\r
      color = getWallColor(hit);\r
    } else {\r
      color = textureCube(sky, ray).rgb;\r
      
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);\r
    }\r
  }

  
  if (ray.y < 0.0) color *= waterColor;\r
  return color;\r
}

void main() {\r
  
  vec2 coord = vPosition.xz * 0.5 + 0.5;\r
  vec4 info = texture2D(water, coord);

  
  
  for (int i = 0; i < 5; i++) {\r
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0);\r
    info = texture2D(water, coord);\r
  }

  
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));\r
  float slopeLengthSq = min(dot(slope, slope), 0.999);\r
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));\r
  normal = -normal;

  
  vec3 incomingRay = normalize(vPosition - eye);

  
  vec3 reflectedRay = reflect(incomingRay, normal);\r
  vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);

  
  float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, underwaterColor);\r
  vec3 refractedColor =\r
    getSurfaceRayColor(vPosition, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

  
  if (torusKnotEnabled) {\r
    vec4 reflectedObject = sampleProjectedTexture(\r
      objectReflectionTex,\r
      reflectionViewProjectionMatrix,\r
      vPosition\r
    );\r
    vec4 refractedObject = sampleProjectedTexture(\r
      objectRefractionTex,\r
      viewProjectionMatrix,\r
      vPosition\r
    );\r
    refractedObject = max(\r
      refractedObject,\r
      sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31)\r
    );\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
  } else if (meshEnabled) {\r
    vec4 reflectedObject = sampleObjectReflection(\r
      vPosition,\r
      reflectedRay,\r
      meshCenter,\r
      meshBoundingRadius\r
    );\r
    vec4 refractedObject = sampleObjectRefraction(\r
      vPosition,\r
      refractedRay,\r
      meshCenter,\r
      meshBoundingRadius\r
    );\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
  }

  
  gl_FragColor = vec4(\r
    mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)),\r
    1.0\r
  );\r
}`,Pv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\r
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\r
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;\r
uniform vec3 sphereCenter;\r
uniform float sphereRadius;\r
uniform bool sphereEnabled;\r
uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;\r
uniform bool cubeEnabled;\r
uniform vec3 torusKnotCenter;\r
uniform bool torusKnotEnabled;\r
uniform vec3 meshCenter;\r
uniform float meshBoundingRadius;\r
uniform float meshShadowRadius;\r
uniform bool meshEnabled;

uniform sampler2D tiles;\r
uniform sampler2D causticTex;\r
uniform sampler2D objectReflectionTex;\r
uniform sampler2D objectRefractionTex;\r
uniform sampler2D water;\r
uniform samplerCube sky;\r
uniform sampler2D dyeTex; 
uniform float dyeEnabled; 

uniform vec3 eye;\r
uniform mat4 viewProjectionMatrix;\r
uniform mat4 reflectionViewProjectionMatrix;

uniform float cornerRadius;\r
uniform float poolWidth;\r
uniform float poolHeight;\r
uniform float poolLength;

varying vec3 vPosition;

vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {\r
  float tNear = 1e6;\r
  float tFar = -1e6;\r
  bool found = false;

  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;\r
  float eps = 1.0e-3;

  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.x) > 1.0e-7) {\r
    float t = (-poolWidth - origin.x) / ray.x;\r
    float z = origin.y + t * ray.y;\r
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }\r
  
  if (abs(ray.y) > 1.0e-7) {\r
    float t = (-poolLength - origin.y) / ray.y;\r
    float x = origin.x + t * ray.x;\r
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {\r
      tNear = min(tNear, t);\r
      tFar = max(tFar, t);\r
      found = true;\r
    }\r
  }

  
  if (R > 0.0) {\r
    vec2 centers[4];\r
    centers[0] = vec2(r_sub_x, r_sub_z);\r
    centers[1] = vec2(-r_sub_x, r_sub_z);\r
    centers[2] = vec2(-r_sub_x, -r_sub_z);\r
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {\r
      vec2 center = centers[i];\r
      vec2 toCenter = origin - center;\r
      float a = dot(ray, ray);\r
      float b = 2.0 * dot(toCenter, ray);\r
      float c = dot(toCenter, toCenter) - R * R;\r
      float disc = b * b - 4.0 * a * c;\r
      if (disc >= 0.0) {\r
        float sqrtDisc = sqrt(disc);\r
        float tA = (-b - sqrtDisc) / (2.0 * a);\r
        float tB = (-b + sqrtDisc) / (2.0 * a);

        
        vec2 ptA = origin + tA * ray;\r
        bool validA = false;\r
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;\r
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;\r
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;\r
        if (validA) {\r
          tNear = min(tNear, tA);\r
          tFar = max(tFar, tA);\r
          found = true;\r
        }

        
        vec2 ptB = origin + tB * ray;\r
        bool validB = false;\r
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;\r
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;\r
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;\r
        if (validB) {\r
          tNear = min(tNear, tB);\r
          tFar = max(tFar, tB);\r
          found = true;\r
        }\r
      }\r
    }\r
  }

  if (!found) {\r
    return vec2(-1e6, 1e6);\r
  }

  return vec2(tNear, tFar);\r
}

vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {\r
  float tYNear = -1.0e6;\r
  float tYFar = 1.0e6;\r
  if (abs(ray.y) > 1.0e-7) {\r
    float tYMin = (-poolHeight - origin.y) / ray.y;\r
    float tYMax = (2.0 - origin.y) / ray.y;\r
    tYNear = min(tYMin, tYMax);\r
    tYFar = max(tYMin, tYMax);\r
  }\r
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);\r
  float tNear = max(tYNear, tXZ.x);\r
  float tFar = min(tYFar, tXZ.y);\r
  return vec2(tNear, tFar);\r
}

void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {\r
  float r_sub_x = poolWidth - R;\r
  float r_sub_z = poolLength - R;

  if (point.y < -poolHeight + 0.001) {\r
    normal = vec3(0.0, 1.0, 0.0);\r
    uv = point.xz * 0.5 + 0.5;\r
    return;\r
  }

  vec2 absP = abs(point.xz);\r
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {\r
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);\r
    vec2 d = point.xz - center;\r
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    float s = 0.0;\r
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {\r
      s = point.z + r_sub_z;\r
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {\r
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);\r
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);\r
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {\r
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);\r
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {\r
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);\r
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);\r
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {\r
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);\r
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {\r
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);\r
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);\r
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {\r
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);\r
    } else {\r
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);\r
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);\r
    }\r
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);\r
  } else {\r
    vec2 normP = absP / vec2(poolWidth, poolLength);\r
    if (normP.x > normP.y) {\r
      normal = vec3(-sign(point.x), 0.0, 0.0);\r
      uv = point.yz * 0.5 + vec2(1.0, 0.5);\r
    } else {\r
      normal = vec3(0.0, 0.0, -sign(point.z));\r
      uv = point.yx * 0.5 + vec2(1.0, 0.5);\r
    }\r
  }\r
}

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\r
  vec3 tMin = (cubeMin - origin) / ray;\r
  vec3 tMax = (cubeMax - origin) / ray;\r
  vec3 t1 = min(tMin, tMax);\r
  vec3 t2 = max(tMin, tMax);\r
  float tNear = max(max(t1.x, t1.y), t1.z);\r
  float tFar = min(min(t2.x, t2.y), t2.z);\r
  return vec2(tNear, tFar);\r
}

float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float t = (-b - sqrt(discriminant)) / (2.0 * a);\r
    if (t > 0.0) return t;\r
  }\r
  return 1.0e6;\r
}

float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  vec3 toSphere = origin - center;\r
  float a = dot(ray, ray);\r
  float b = 2.0 * dot(toSphere, ray);\r
  float c = dot(toSphere, toSphere) - radius * radius;\r
  float discriminant = b * b - 4.0 * a * c;\r
  if (discriminant > 0.0) {\r
    float root = sqrt(discriminant);\r
    float near = (-b - root) / (2.0 * a);\r
    float far = (-b + root) / (2.0 * a);\r
    if (near > 0.0) return near;\r
    if (far > 0.0) return 0.0;\r
  }\r
  return 1.0e6;\r
}

float sdTorusKnot(vec3 p, vec3 center) {\r
  vec3 pos = p - center;\r
  float d_bound = length(pos) - 0.31;\r
  if (d_bound > 0.08) {\r
    return d_bound;\r
  }\r
  float minDist = 1.0e6;\r
  const int segments = 64;\r
  const float radius = 0.17;\r
  const float tube = 0.045;\r
  const float p_knot = 2.0;\r
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);\r
  for (int i = 0; i <= segments; i++) {\r
    float theta = float(i) / float(segments) * 6.283185307179586;\r
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;\r
    vec3 pt = vec3(\r
      rad * cos(p_knot * theta),\r
      -radius * sin(q_knot * theta) * 0.5,\r
      rad * sin(p_knot * theta)\r
    );\r
    if (i > 0) {\r
      vec3 ba = pt - prevPt;\r
      vec3 pa = pos - prevPt;\r
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\r
      float d = length(pa - ba * h);\r
      minDist = min(minDist, d);\r
    }\r
    prevPt = pt;\r
  }\r
  return minDist - tube;\r
}

float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {\r
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);\r
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;\r
  for (int i = 0; i < 30; i++) {\r
    vec3 p = origin + ray * t;\r
    float d = sdTorusKnot(p, center);\r
    if (d < 0.001) {\r
      return t;\r
    }\r
    t += d;\r
    if (t > t_bound + 0.5) break;\r
  }\r
  return 1.0e6;\r
}

vec3 getTorusKnotNormal(vec3 p, vec3 center) {\r
  const float eps = 0.001;\r
  vec3 n = vec3(\r
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),\r
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)\r
  );\r
  return normalize(n);\r
}

vec3 getSphereColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  color *= 1.0 - 0.6 / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);\r
  color *= 1.0 - 0.6 / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);\r
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse *= caustic.r * 4.0;\r
  }\r
  color += diffuse;\r
  return color;\r
}

vec3 getCubeColor(vec3 point) {\r
  vec3 local = (point - cubeCenter) / cubeHalfSize;\r
  vec3 axis = abs(local);\r
  vec3 cubeNormal;\r
  if (axis.x > axis.y && axis.x > axis.z) {\r
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);\r
  } else if (axis.y > axis.z) {\r
    cubeNormal = vec3(0.0, sign(local.y), 0.0);\r
  } else {\r
    cubeNormal = vec3(0.0, 0.0, sign(local.z));\r
  }

  vec3 color = vec3(0.5);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

vec3 getTorusKnotColor(vec3 point) {\r
  vec3 color = vec3(0.5);\r
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);\r
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }\r
  return color + diffuse;\r
}

vec3 getWallColor(vec3 point) {\r
  float scale = 0.5;\r
  vec3 wallColor;\r
  vec3 normal;\r
  vec2 uv;\r
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);\r
  wallColor = texture2D(tiles, uv).rgb;

  scale /= length(point);\r
  if (sphereEnabled) {\r
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);\r
  } else if (cubeEnabled) {\r
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);\r
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);\r
  } else if (torusKnotEnabled) {\r
    float knotDistance = length(point - torusKnotCenter);\r
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);\r
  } else if (meshEnabled) {\r
    float meshDistance = length(point - meshCenter);\r
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);\r
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  float diffuse = max(0.0, dot(refractedLight, normal));\r
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (point.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    scale += diffuse * caustic.r * 2.0 * caustic.g;\r
  } else {\r
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);\r
    diffuse *=\r
      1.0 /\r
      (1.0 +\r
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\r
    scale += diffuse * 0.5;\r
  }\r
  return wallColor * scale;\r
}

vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {\r
  vec4 clip = matrix * vec4(point, 1.0);\r
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);\r
  vec2 uv = ndc.xy * 0.5 + 0.5;\r
  float inBounds =\r
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);\r
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;\r
}

vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);\r
}

vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {\r
  float hit = intersectSphereBounds(origin, ray, center, radius);\r
  if (hit >= 1.0e6) return vec4(0.0);\r
  return sampleProjectedTexture(\r
    objectReflectionTex,\r
    reflectionViewProjectionMatrix,\r
    origin + ray * hit\r
  );\r
}

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {\r
  vec3 color;\r
  float sphereDistance = sphereEnabled\r
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)\r
    : 1.0e6;\r
  vec2 cubeIntersection = intersectCube(\r
    origin,\r
    ray,\r
    cubeCenter - cubeHalfSize,\r
    cubeCenter + cubeHalfSize\r
  );\r
  bool cubeHit =\r
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;\r
  float cubeDistance = cubeHit\r
    ? cubeIntersection.x > 0.0\r
      ? cubeIntersection.x\r
      : cubeIntersection.y > 0.0\r
        ? cubeIntersection.y\r
        : 1.0e6\r
    : 1.0e6;\r
  float torusKnotDistance =\r
    torusKnotEnabled && ray.y > 0.0\r
      ? intersectTorusKnot(origin, ray, torusKnotCenter)\r
      : 1.0e6;

  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);\r
  if (objectDistance < 1.0e6) {\r
    vec3 hit = origin + ray * objectDistance;\r
    if (objectDistance == sphereDistance) {\r
      color = getSphereColor(hit);\r
    } else if (objectDistance == cubeDistance) {\r
      color = getCubeColor(hit);\r
    } else {\r
      color = getTorusKnotColor(hit);\r
    }\r
  } else if (ray.y < 0.0) {\r
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);\r
    color = getWallColor(origin + ray * t.y);\r
  } else {\r
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);\r
    vec3 hit = origin + ray * t.y;\r
    if (hit.y < 2.0 / 12.0) {\r
      color = getWallColor(hit);\r
    } else {\r
      color = textureCube(sky, ray).rgb;\r
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);\r
    }\r
  }\r
  if (ray.y < 0.0) color *= waterColor;\r
  return color;\r
}

void main() {\r
  
  vec2 absP = abs(vPosition.xz);\r
  float r_sub_x = poolWidth - cornerRadius;\r
  float r_sub_z = poolLength - cornerRadius;\r
  if (absP.x > r_sub_x && absP.y > r_sub_z) {\r
    if (length(absP - vec2(r_sub_x, r_sub_z)) > cornerRadius) {\r
      discard;\r
    }\r
  }

  vec2 coord = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;\r
  vec4 info = texture2D(water, coord);

  for (int i = 0; i < 5; i++) {\r
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0);\r
    info = texture2D(water, coord);\r
  }

  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));\r
  float slopeLengthSq = min(dot(slope, slope), 0.999);\r
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));\r
  normal = -normal;\r
  vec3 incomingRay = normalize(vPosition - eye);

  vec3 reflectedRay = reflect(incomingRay, normal);\r
  vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);\r
  float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, underwaterColor);\r
  vec3 refractedColor =\r
    getSurfaceRayColor(vPosition, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

  if (torusKnotEnabled) {\r
    vec4 reflectedObject = sampleProjectedTexture(\r
      objectReflectionTex,\r
      reflectionViewProjectionMatrix,\r
      vPosition\r
    );\r
    vec4 refractedObject = sampleProjectedTexture(\r
      objectRefractionTex,\r
      viewProjectionMatrix,\r
      vPosition\r
    );\r
    refractedObject = max(\r
      refractedObject,\r
      sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31)\r
    );\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
  } else if (meshEnabled) {\r
    vec4 reflectedObject = sampleObjectReflection(\r
      vPosition,\r
      reflectedRay,\r
      meshCenter,\r
      meshBoundingRadius\r
    );\r
    vec4 refractedObject = sampleObjectRefraction(\r
      vPosition,\r
      refractedRay,\r
      meshCenter,\r
      meshBoundingRadius\r
    );\r
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);\r
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);\r
  }

  vec3 finalColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));

  
  if (dyeEnabled > 0.5) {\r
    vec2 dyeUv = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;\r
    float dye = texture2D(dyeTex, dyeUv).r;\r
    vec3 dyeColor = vec3(0.95, 0.16, 0.10) * (0.25 + 0.85 * length(finalColor));\r
    finalColor = mix(finalColor, dyeColor, clamp(dye * 1.2, 0.0, 0.85));\r
  }

  gl_FragColor = vec4(finalColor, 1.0);\r
}`,Rc=`uniform sampler2D water;

uniform float poolWidth; 
uniform float poolLength; 

varying vec3 vPosition; 

void main() {\r
  
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  
  vPosition = position.xzy;

  
  
  vPosition.x *= poolWidth;\r
  vPosition.z *= poolLength;

  
  vPosition.y += info.r;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`;class Dv{constructor(e,t,n,i,s,o,a){D(this,"aboveMesh");D(this,"belowMesh");D(this,"aboveMaterial");D(this,"belowMaterial");D(this,"roundedBoxAboveMaterial",null);D(this,"roundedBoxBelowMaterial",null);D(this,"dyeTexture",null);D(this,"dyeEnabled",!1);this.tileTexture=e,this.cubemap=t,this.causticTexture=n,this.objectReflectionTexture=i,this.objectClippedReflectionTexture=s,this.objectRefractionTexture=o,this.state=a,this.aboveMaterial=this.createMaterial(Ev,wv,Gt,e,t,n,i,s,o),this.belowMaterial=this.createMaterial(Rv,Cv,tn,e,t,n,i,s,o);const l=new bi(2,2,200,200);this.aboveMesh=new pt(l,this.aboveMaterial),this.belowMesh=new pt(l.clone(),this.belowMaterial),this.aboveMesh.frustumCulled=!1,this.belowMesh.frustumCulled=!1}setPoolShape(e,t,n,i,s){e==="Box"?(this.aboveMesh.material=this.aboveMaterial,this.belowMesh.material=this.belowMaterial):(this.roundedBoxAboveMaterial?(this.roundedBoxAboveMaterial.uniforms.cornerRadius.value=t,this.roundedBoxAboveMaterial.uniforms.poolWidth.value=n,this.roundedBoxAboveMaterial.uniforms.poolHeight.value=i,this.roundedBoxAboveMaterial.uniforms.poolLength.value=s,this.roundedBoxBelowMaterial.uniforms.cornerRadius.value=t,this.roundedBoxBelowMaterial.uniforms.poolWidth.value=n,this.roundedBoxBelowMaterial.uniforms.poolHeight.value=i,this.roundedBoxBelowMaterial.uniforms.poolLength.value=s):(this.roundedBoxAboveMaterial=this.createMaterial(Rc,Av,Gt,this.tileTexture,this.cubemap,this.causticTexture,this.objectReflectionTexture,this.objectClippedReflectionTexture,this.objectRefractionTexture),this.roundedBoxAboveMaterial.uniforms.cornerRadius={value:t},this.roundedBoxAboveMaterial.uniforms.poolWidth={value:n},this.roundedBoxAboveMaterial.uniforms.poolHeight={value:i},this.roundedBoxAboveMaterial.uniforms.poolLength={value:s},this.roundedBoxBelowMaterial=this.createMaterial(Rc,Pv,tn,this.tileTexture,this.cubemap,this.causticTexture,this.objectReflectionTexture,this.objectClippedReflectionTexture,this.objectRefractionTexture),this.roundedBoxBelowMaterial.uniforms.cornerRadius={value:t},this.roundedBoxBelowMaterial.uniforms.poolWidth={value:n},this.roundedBoxBelowMaterial.uniforms.poolHeight={value:i},this.roundedBoxBelowMaterial.uniforms.poolLength={value:s}),this.aboveMesh.material=this.roundedBoxAboveMaterial,this.belowMesh.material=this.roundedBoxBelowMaterial)}setDye(e,t){this.dyeTexture=e,this.dyeEnabled=t}prepare(e,t,n){const i=new C;t.getWorldPosition(i),this.prepareMaterial(this.aboveMesh.material,e,i,n),this.prepareMaterial(this.belowMesh.material,e,i,n)}createMaterial(e,t,n,i,s,o,a,l,c){return new at({vertexShader:e,fragmentShader:t,uniforms:{light:{value:this.state.lightDirection.clone()},...this.state.createUniforms(),tiles:{value:i},causticTex:{value:o},objectReflectionTex:{value:a},objectClippedReflectionTex:{value:l},objectRefractionTex:{value:c},viewProjectionMatrix:{value:new Le},reflectionViewProjectionMatrix:{value:new Le},water:{value:null},sky:{value:s},eye:{value:new C},dyeTex:{value:null},dyeEnabled:{value:0}},side:n,depthTest:!0,depthWrite:!0})}prepareMaterial(e,t,n,i){e.uniforms.water.value=t.textureA.texture,e.uniforms.dyeTex.value=this.dyeTexture,e.uniforms.dyeEnabled.value=this.dyeEnabled&&this.dyeTexture?1:0,e.uniforms.eye.value.copy(n),e.uniforms.light.value.copy(this.state.lightDirection),e.uniforms.viewProjectionMatrix.value.copy(i.viewProjectionMatrix),e.uniforms.reflectionViewProjectionMatrix.value.copy(i.reflectionViewProjectionMatrix),this.state.syncUniforms(e),e.uniformsNeedUpdate=!0}}class Lv{constructor(){D(this,"lightDirection",new C(2,2,-1).normalize());D(this,"sphereCenter",new C);D(this,"sphereRadius",.25);D(this,"sphereEnabled",!1);D(this,"cubeCenter",new C);D(this,"cubeHalfSize",new C(.25,.25,.25));D(this,"cubeEnabled",!1);D(this,"torusKnotCenter",new C);D(this,"torusKnotEnabled",!1);D(this,"meshCenter",new C);D(this,"meshBoundingRadius",.25);D(this,"meshShadowRadius",.25);D(this,"meshEnabled",!1)}apply(e){this.sphereEnabled=!1,this.cubeEnabled=!1,this.torusKnotEnabled=!1,this.meshEnabled=!1,e.kind==="sphere"?(this.sphereCenter.copy(e.center),this.sphereRadius=e.radius,this.sphereEnabled=!0):e.kind==="box"?(this.cubeCenter.copy(e.center),this.cubeHalfSize.copy(e.halfSize),this.cubeEnabled=!0):e.kind==="torusknot"?(this.torusKnotCenter.copy(e.center),this.torusKnotEnabled=!0):e.kind==="mesh"&&(this.meshCenter.copy(e.center),this.meshBoundingRadius=e.boundingRadius,this.meshShadowRadius=e.shadowRadius??e.boundingRadius,this.meshEnabled=!0)}createUniforms(){return{sphereCenter:{value:this.sphereCenter.clone()},sphereRadius:{value:this.sphereRadius},sphereEnabled:{value:this.sphereEnabled},cubeCenter:{value:this.cubeCenter.clone()},cubeHalfSize:{value:this.cubeHalfSize.clone()},cubeEnabled:{value:this.cubeEnabled},torusKnotCenter:{value:this.torusKnotCenter.clone()},torusKnotEnabled:{value:this.torusKnotEnabled},meshCenter:{value:this.meshCenter.clone()},meshBoundingRadius:{value:this.meshBoundingRadius},meshShadowRadius:{value:this.meshShadowRadius},meshEnabled:{value:this.meshEnabled}}}syncUniforms(e){e.uniforms.sphereCenter.value.copy(this.sphereCenter),e.uniforms.sphereRadius.value=this.sphereRadius,e.uniforms.sphereEnabled.value=this.sphereEnabled,e.uniforms.cubeCenter.value.copy(this.cubeCenter),e.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize),e.uniforms.cubeEnabled.value=this.cubeEnabled,e.uniforms.torusKnotCenter&&e.uniforms.torusKnotCenter.value.copy(this.torusKnotCenter),e.uniforms.torusKnotEnabled&&(e.uniforms.torusKnotEnabled.value=this.torusKnotEnabled),e.uniforms.meshCenter&&e.uniforms.meshCenter.value.copy(this.meshCenter),e.uniforms.meshBoundingRadius&&(e.uniforms.meshBoundingRadius.value=this.meshBoundingRadius),e.uniforms.meshShadowRadius&&(e.uniforms.meshShadowRadius.value=this.meshShadowRadius),e.uniforms.meshEnabled&&(e.uniforms.meshEnabled.value=this.meshEnabled)}}const Iv=0;class Nv{constructor(e,t,n){D(this,"lightDir");D(this,"objectRenderResources");D(this,"opticsState");D(this,"objectTextures");D(this,"caustics");D(this,"pool");D(this,"waterSurface");this.opticsState=new Lv,this.lightDir=this.opticsState.lightDirection,this.objectTextures=new vv(e,this.lightDir),this.caustics=new pv(e,this.opticsState,this.objectTextures.shadowTarget.texture),this.objectRenderResources={lightDirection:this.lightDir,causticTexture:this.caustics.texture},this.pool=new Tv(t,this.caustics.texture,this.opticsState),this.waterSurface=new Dv(t,n,this.caustics.texture,this.objectTextures.reflectionTarget.texture,this.objectTextures.clippedReflectionTarget.texture,this.objectTextures.refractionTarget.texture,this.opticsState)}setSize(e,t){this.objectTextures.setSize(e,t)}updateCaustics(e){this.caustics.update(e)}updateObjectTextures(e,t,n){const i=this.opticsState.torusKnotEnabled||this.opticsState.meshEnabled;this.objectTextures.update(e,t,i?n:null)}renderPool(e){this.pool.prepare(e)}renderWater(e,t){this.waterSurface.prepare(e,t,{viewProjectionMatrix:this.objectTextures.viewProjectionMatrix,reflectionViewProjectionMatrix:this.objectTextures.reflectionViewProjectionMatrix})}setWaterOptics(e){this.opticsState.apply(e)}setDye(e,t){this.waterSurface.setDye(e,t)}setPoolShape(e,t,n,i,s){const o=Math.max(0,Math.min(n,s)-Iv),a=e==="Box"?t:Math.min(t,o);this.pool.setPoolShape(e,a,n,i,s),this.caustics.setPoolShape(e,a,n,i,s),this.waterSurface.setPoolShape(e,a,n,i,s),this.objectTextures.setPoolBounds(n,s)}getPoolMesh(){return this.pool.mesh}getWaterMesh(){return this.waterSurface.aboveMesh}getWaterMeshBack(){return this.waterSurface.belowMesh}markWaterOpticsHidden(){this.pool.mesh.userData.waterOpticsHidden=!0,this.waterSurface.aboveMesh.userData.waterOpticsHidden=!0,this.waterSurface.belowMesh.userData.waterOpticsHidden=!0}}const Uv={kind:"none"},fs="None";class Fv{constructor(e){D(this,"objects",new Map);D(this,"activeObject",null);D(this,"sharedPosition",new C);this.scene=e}register(e,t=!1){if(this.objects.has(e.name))throw new Error(`Simulation object "${e.name}" is already registered`);return this.objects.set(e.name,e),this.scene.add(e.mesh),t&&(this.activeObject=e,this.sharedPosition.copy(e.position)),this}get options(){return[fs,...this.objects.keys()]}get active(){return this.activeObject}get optics(){var e;return((e=this.activeObject)==null?void 0:e.optics)??Uv}select(e,t,n=1,i=1,s=1){const o=e===fs?null:this.objects.get(e);if(e!==fs&&!o)throw new Error(`Unknown simulation object "${e}"`);o!==this.activeObject&&(this.activeObject&&(this.sharedPosition.copy(this.activeObject.position),this.activeObject.setEnabled(!1,t)),this.activeObject=o??null,this.activeObject&&(this.activeObject.position.copy(this.sharedPosition),this.activeObject.position.y=Math.max(this.activeObject.position.y,this.activeObject.floorY(i)),this.activeObject.moveBy(new C(0,0,0),n,i,s),this.activeObject.setEnabled(!0,t)))}update(e,t,n){var i;(i=this.activeObject)==null||i.update(e,t,n)}prepareRender(e,t,n,i){var s;(s=this.activeObject)==null||s.prepareRender(e,t,n,i)}}var Ov=`uniform vec3 cubeCenter; 
uniform vec3 cubeHalfSize; 

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {\r
  
  
  
  vPosition = cubeCenter + position.xyz * cubeHalfSize * 2.0;

  
  vNormal = normal;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,Bv=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform float poolWidth;\r
uniform float poolLength;\r
uniform float poolHeight;

uniform vec3 cubeCenter;\r
uniform vec3 cubeHalfSize;

uniform sampler2D water; 
uniform sampler2D causticTex; 

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {\r
  
  vec3 color = vec3(0.5);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));\r
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + cubeHalfSize.x - abs(vPosition.x)) / cubeHalfSize.x, 3.0);\r
  
  color *= 1.0 - aoStrength / pow((poolLength + cubeHalfSize.z - abs(vPosition.z)) / cubeHalfSize.z, 3.0);\r
  
  color *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + cubeHalfSize.y) / cubeHalfSize.y, 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (vPosition.y < info.r) {\r
    
    
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }

  color += diffuse;

  
  if (vPosition.y < info.r) {\r
    color *= underwaterColor * 1.2;\r
  }

  gl_FragColor = vec4(color, 1.0);\r
}`;class zv{constructor(e){this.radius=e}move(e,t,n,i=1,s=1){e.moveSphere(t,n,this.radius,1,i,s)}}class Hv{constructor(e){this.halfSize=e}move(e,t,n,i=1,s=1){e.moveCube(t,n,this.halfSize,i,s)}}class Nu{constructor(e,t=1){D(this,"previousCenter",new C);D(this,"center",new C);this.spheres=e,this.displacementScale=t}move(e,t,n,i=1,s=1){for(const o of this.spheres)this.previousCenter.copy(t).add(o.offset),this.center.copy(n).add(o.offset),e.moveSphere(this.previousCenter,this.center,o.radius,this.displacementScale,i,s)}}function Ds(r,e,t,n,i,s){if(n.dragging){t.set(0,0,0);return}if(!n.physicsEnabled)return;const o=n.densityEnabled?1/n.density:1.1,a=Kt.clamp((i-e.y)/(2*i),0,1);t.addScaledVector(n.gravity,r-o*r*a);const l=t.lengthSq();l>0&&t.addScaledVector(t.clone().normalize(),-a*r*l),e.addScaledVector(t,r);const c=s-n.poolHeight;e.y<c&&(e.y=c,t.y=Math.abs(t.y)*.7)}function Ls(r,e,t,n,i,s,o,a){const l=t-s,c=i-o;r.add(e),r.x=Kt.clamp(r.x,-l,l),r.y=Kt.clamp(r.y,a-n,10),r.z=Kt.clamp(r.z,-c,c)}class kv{constructor(e){D(this,"name","Cube");D(this,"halfSize",new C(.25,.25,.25));D(this,"position",new C(-.4,this.halfSize.y-1,.2));D(this,"velocity",new C);D(this,"displacement",new Hv(this.halfSize));D(this,"optics",{kind:"box",center:this.position,halfSize:this.halfSize});D(this,"mesh");D(this,"enabled",!1);D(this,"previousPosition",this.position.clone());D(this,"bounds",new mn);D(this,"material");this.resources=e,this.material=new at({vertexShader:Ov,fragmentShader:Bv,uniforms:{light:{value:e.lightDirection.clone()},cubeCenter:{value:this.position.clone()},cubeHalfSize:{value:this.halfSize.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture}},depthTest:!0,depthWrite:!0}),this.mesh=new pt(new _i(1,1,1),this.material),this.mesh.frustumCulled=!1,this.mesh.visible=!1}floorY(e){return this.halfSize.y-e}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?this.displacement.move(t,n,this.position):(this.displacement.move(t,this.position,n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position)}update(e,t,n){this.enabled&&(Ds(e,this.position,this.velocity,t,this.halfSize.y,this.halfSize.y),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position))}hitTest(e,t){return this.enabled?(this.bounds.set(this.position.clone().sub(this.halfSize),this.position.clone().add(this.halfSize)),new Ji(e,t).intersectBox(this.bounds,new C)):null}moveBy(e,t=1,n=1,i=1){Ls(this.position,e,t,n,i,this.halfSize.x,this.halfSize.z,this.halfSize.y)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.cubeCenter.value.copy(this.position),this.material.uniforms.cubeHalfSize.value.copy(this.halfSize),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}getInactivePosition(){return new C(this.position.x,10,this.position.z)}}function Cc(r,e){if(e===bh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ua||e===lu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ua)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Vv(r){const e=new Map,t=new Map,n=r.clone();return Uu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Uu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Uu(r.children[n],e.children[n],t)}class Gv extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Pc(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ax(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=br.extractUrlBase(e);o=br.resolveURL(c,this.path)}else o=br.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Mu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Fu){try{o[Ve.KHR_BINARY_GLTF]=new lx(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:o[h]=new jv;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[h]=new cx(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[h]=new ux;break;case Ve.KHR_MESH_QUANTIZATION:o[h]=new hx;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Wv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function At(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xv{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],nn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yd(u),c.distance=h;break;case"spot":c=new Kd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class jv{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Nt))}return Promise.all(i)}}class Kv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class qv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(s,s)}return Promise.all(i)}}class Yv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class $v{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Zv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Jv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Qv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(s[0],s[1],s[2],nn),Promise.all(i)}}class ex{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(s[0],s[1],s[2],nn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(i)}}class nx{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class ix{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class rx{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class sx{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class ox{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Pc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class ax{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==on.TRIANGLES&&c.mode!==on.TRIANGLE_STRIP&&c.mode!==on.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const b=new Le,m=new C,f=new Wn,v=new C(1,1,1),y=new _d(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,b.compose(m,f,v));for(const S in l)if(S==="_COLOR_0"){const A=l[S];y.instanceColor=new pa(A.array,A.itemSize,A.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);_t.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Fu="glTF",fr=12,Dc={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-fr,s=new DataView(e,fr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Dc.JSON){const c=new Uint8Array(e,fr+o,a);this.content=n.decode(c)}else if(l===Dc.BIN){const c=fr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=_a[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=_a[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Gi[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const g in p.attributes){const b=p.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}h(p)},a,c,nn,d)})})}}class ux{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hx{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Ou extends Qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,b=g-c,m=-2*p+3*d,f=p-d,v=1-m,y=f-d+h;for(let S=0;S!==a;S++){const A=o[b+S+a],T=o[b+S+l]*u,R=o[g+S+a],_=o[g+S]*u;s[S]=v*A+y*T+m*R+f*_}return s}}const dx=new Wn;class fx extends Ou{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return dx.fromArray(s).normalize().toArray(s),s}}const on={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lc={9728:wt,9729:nt,9984:tu,9985:as,9986:gr,9987:Sn},Ic={33071:an,33648:ps,10497:ii},bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:Tr,STEP:Sr},yo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Va({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tn})),r.DefaultMaterial}function hi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gx(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function vx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xx(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mo(t.attributes):e=r.indices+":"+Mo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Mo(r.targets[n]);return e}function Mo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ba(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _x(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bx=new Le;class yx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Ga(this.options.manager):this.textureLoader=new Jd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hi(s,a,i),yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(br.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=bo[i.type],a=Gi[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=bo[i.type],c=Gi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(p&&p!==h){const f=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(v);y||(b=new c(a,f*p,i.count*p/u),y=new dd(b,p/u),t.cache.add(v,y)),m=new Fa(y,l,d%p/u,g)}else a===null?b=new c(i.count*l):b=new c(a,d,i.count*l),m=new Wt(b,l,g);if(i.sparse!==void 0){const f=bo.SCALAR,v=Gi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,A=new v(o[1],y,i.sparse.count*f),T=new c(o[2],S,i.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=A.length;R<_;R++){const w=A[R];if(m.setX(w,T[R*l]),l>=2&&m.setY(w,T[R*l+1]),l>=3&&m.setZ(w,T[R*l+2]),l>=4&&m.setW(w,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Lc[d.magFilter]||nt,u.minFilter=Lc[d.minFilter]||Sn,u.wrapS=Ic[d.wrapS]||ii,u.wrapT=Ic[d.wrapT]||ii,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==wt&&u.minFilter!==nt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Ut(b);m.needsUpdate=!0,d(m)}),t.load(br.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),yn(h,o),h.userData.mimeType=o.mimeType||_x(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gu,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new mu,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Va}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const h=i[Ve.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Nt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Qt);const u=s.alphaMode||yo.OPAQUE;if(u===yo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===yo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ti&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ti&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ti){const h=s.emissiveFactor;a.emissive=new Ce().setRGB(h[0],h[1],h[2],nn)}return s.emissiveTexture!==void 0&&o!==ti&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Nt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),yn(h,s),t.associations.set(h,{materials:e}),s.extensions&&hi(i,h,s),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Nc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=xx(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Nc(new Ot,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?mx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const b=u[p],m=o[p];let f;const v=c[p];if(m.mode===on.TRIANGLES||m.mode===on.TRIANGLE_STRIP||m.mode===on.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new gd(b,v):new pt(b,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===on.TRIANGLE_STRIP?f.geometry=Cc(f.geometry,lu):m.mode===on.TRIANGLE_FAN&&(f.geometry=Cc(f.geometry,ua));else if(m.mode===on.LINES)f=new Sd(b,v);else if(m.mode===on.LINE_STRIP)f=new za(b,v);else if(m.mode===on.LINE_LOOP)f=new Td(b,v);else if(m.mode===on.POINTS)f=new vu(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&vx(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),yn(f,s),m.extensions&&hi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&hi(i,h[0],s),h[0];const d=new Hn;s.extensions&&hi(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Mi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Le;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oa(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],g=i.samplers[p.sampler],b=p.target,m=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],b=h[3],m=h[4],f=[];for(let y=0,S=d.length;y<S;y++){const A=d[y],T=p[y],R=g[y],_=b[y],w=m[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const N=n._createAnimationTracks(A,T,R,_,w);if(N)for(let P=0;P<N.length;P++)f.push(N[P])}const v=new zd(s,void 0,f);return yn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,bx)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){const p=u.userData.pivot,g=h[0];u.pivot=new C().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new pu:c.length>1?u=new Hn:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),yn(u,s),s.extensions&&hi(n,u,s),s.matrix!==void 0){const h=new Le;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Hn;n.name&&(s.name=i.createUniqueName(n.name)),yn(s,n),n.extensions&&hi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?s.add(Vv(d)):s.add(d)}const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof wn||d instanceof Ut)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}ei[s.path]===ei.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(ei[s.path]){case ei.weights:u=Yi;break;case ei.rotation:u=$i;break;case ei.translation:case ei.scale:u=Zi;break;default:switch(n.itemSize){case 1:u=Yi;break;case 2:case 3:default:u=Zi;break}break}const h=i.interpolation!==void 0?px[i.interpolation]:Tr,d=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){const b=new u(l[p]+"."+ei[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),o.push(b)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ba(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof $i?fx:Ou;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mx(r,e,t){const n=e.attributes,i=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const u=ba(Gi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const b=ba(Gi[d.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Nc(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=_a[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),yn(r,e),Mx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gx(r,e.targets,t):r})}var Sx=`varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec2 vUv; 

void main() {\r
  
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  
  
  vNormal = normalMatrix * normal;

  
  vUv = uv;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,Tx=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform float poolWidth;\r
uniform float poolLength;\r
uniform float poolHeight;

uniform vec3 meshCenter;

uniform sampler2D water; 
uniform sampler2D causticTex; 

uniform sampler2D modelTexture;

uniform int texturePassMode;

varying vec3 vPosition; 
varying vec3 vNormal; 
varying vec2 vUv; 

void main() {\r
  
  vec3 baseColor = texture2D(modelTexture, vUv).rgb;

  vec3 n = normalize(vNormal);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(n, -refractedLight));\r
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(vPosition.x)) / 0.25, 3.0);\r
  
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(vPosition.z)) / 0.25, 3.0);\r
  
  baseColor *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + 0.25) / 0.25, 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, n)) * 0.6;

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (texturePassMode == 2 && vPosition.y < info.r) {\r
    discard;\r
  }

  
  if (vPosition.y < info.r) {\r
    
    
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    
    diffuse *= caustic.r * 4.0;\r
  }

  
  vec3 color = baseColor * (0.4 + diffuse);

  
  if (vPosition.y < info.r) {\r
    color *= underwaterColor * 1.2;\r
  }

  gl_FragColor = vec4(color, 1.0);\r
}`;class Ex{constructor(e){D(this,"name","Rubber Duck");D(this,"boundingRadius",.25);D(this,"floorClearance",.265);D(this,"position",new C(.4,this.floorClearance-1,-.2));D(this,"velocity",new C);D(this,"displacement");D(this,"optics",{kind:"mesh",center:this.position,boundingRadius:this.boundingRadius});D(this,"mesh");D(this,"enabled",!1);D(this,"previousPosition",this.position.clone());D(this,"material",null);D(this,"loaded",!1);this.resources=e,this.mesh=new Hn,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.displacement=new Nu(this.generateDisplacementSpheres(),.15),this.loadModel()}floorY(e){return this.floorClearance-e}generateDisplacementSpheres(){const e=[];return e.push({offset:new C(0,0,0),radius:.15}),e.push({offset:new C(0,.1,.1),radius:.08}),e.push({offset:new C(0,-.08,-.05),radius:.1}),e}async loadModel(){const t=new Gv;try{const i=(await t.loadAsync("./models/duck/Duck.gltf")).scene,o=await new Ga().loadAsync("./models/duck/DuckCM.png");o.flipY=!1,this.material=new at({vertexShader:Sx,fragmentShader:Tx,uniforms:{light:{value:this.resources.lightDirection.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},meshCenter:{value:this.position.clone()},water:{value:null},causticTex:{value:this.resources.causticTexture},modelTexture:{value:o},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0}),i.traverse(p=>{p instanceof pt&&(p.material=this.material,p.frustumCulled=!1)});const a=new mn().setFromObject(i),l=a.getSize(new C),c=a.getCenter(new C),u=Math.max(l.x,l.y,l.z),d=this.boundingRadius*2/u;i.scale.setScalar(d),i.position.sub(c.multiplyScalar(d)),i.position.y-=a.min.y*d,this.mesh.add(i),this.loaded=!0}catch(n){console.error("Failed to load duck model:",n)}}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?(this.position.y<=this.floorClearance-1&&(this.position.y=this.floorClearance-1),this.displacement.move(t,n,this.position),this.mesh.position.copy(this.position)):(this.displacement.move(t,this.position,n),this.mesh.position.copy(n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e&&this.loaded,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position),this.mesh.position.copy(this.position)}update(e,t,n){this.enabled&&(!this.mesh.visible&&this.loaded&&(this.mesh.visible=!0),Ds(e,this.position,this.velocity,t,this.boundingRadius,this.floorClearance),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position),this.mesh.position.copy(this.position))}hitTest(e,t){if(!this.enabled||!this.loaded)return null;const n=e.clone().sub(this.position),i=t.lengthSq(),s=2*n.dot(t),o=n.lengthSq()-this.boundingRadius*this.boundingRadius,a=s*s-4*i*o;if(a<=0)return null;const l=(-s-Math.sqrt(a))/(2*i);return l>0?e.clone().addScaledVector(t,l):null}moveBy(e,t=1,n=1,i=1){Ls(this.position,e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance),this.mesh.position.copy(this.position)}prepareRender(e,t=1,n=1,i=1){this.material&&(this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniforms.meshCenter.value.copy(this.position),this.material.uniformsNeedUpdate=!0)}getInactivePosition(){return new C(this.position.x,10,this.position.z)}}var wx=`uniform vec3 sphereCenter; 
uniform float sphereRadius; 

varying vec3 vPosition; 

void main() {\r
  
  
  vPosition = sphereCenter + position.xyz * sphereRadius;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,Ax=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;

const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;

uniform vec3 sphereCenter;\r
uniform float sphereRadius;

uniform float poolWidth;\r
uniform float poolHeight;\r
uniform float poolLength;

uniform sampler2D water; 
uniform sampler2D causticTex; 

varying vec3 vPosition; 

/**\r
 * Calculates shading and illumination for the sphere obstacle.\r
 * Models synthetic ambient occlusion based on proximity to the pool walls and floor.\r
 */\r
vec3 getSphereColor(vec3 point) {\r
  
  vec3 color = vec3(0.5);

  
  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\r
  vec3 targetRefracted = refractedLight;

  
  
  float litFactor = max(0.0, dot(sphereNormal, -targetRefracted));\r
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);\r
  
  color *= 1.0 - aoStrength / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);\r
  
  color *= 1.0 - aoStrength / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  
  float diffuse = max(0.0, dot(-targetRefracted, sphereNormal)) * 0.5;

  
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (point.y < info.r) {\r
    
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (point.xz - point.y * targetRefracted.xz / targetRefracted.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    
    diffuse *= caustic.r * 4.0;\r
  }

  color += diffuse;\r
  return color;\r
}

void main() {\r
  
  gl_FragColor = vec4(getSphereColor(vPosition), 1.0);

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);\r
  if (vPosition.y < info.r) {\r
    gl_FragColor.rgb *= underwaterColor * 1.2;\r
  }\r
}`;class Rx{constructor(e){D(this,"name","Sphere");D(this,"position",new C(.45,-.22,-.5));D(this,"velocity",new C);D(this,"interactionRadius",.25);D(this,"displacement",new zv(this.interactionRadius));D(this,"optics",{kind:"sphere",center:this.position,radius:this.interactionRadius});D(this,"mesh");D(this,"enabled",!0);D(this,"previousPosition",this.position.clone());D(this,"material");this.resources=e,this.material=new at({vertexShader:wx,fragmentShader:Ax,uniforms:{light:{value:e.lightDirection.clone()},sphereCenter:{value:this.position.clone()},sphereRadius:{value:this.interactionRadius},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture}},depthTest:!0,depthWrite:!0}),this.mesh=new pt(new Rs(1,32,32),this.material),this.mesh.frustumCulled=!1}floorY(e){return this.interactionRadius-e}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?this.displacement.move(t,n,this.position):(this.displacement.move(t,this.position,n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position)}update(e,t,n){this.enabled&&(Ds(e,this.position,this.velocity,t,this.interactionRadius,this.interactionRadius),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position))}hitTest(e,t){if(!this.enabled)return null;const n=e.clone().sub(this.position),i=t.lengthSq(),s=2*n.dot(t),o=n.lengthSq()-this.interactionRadius*this.interactionRadius,a=s*s-4*i*o;if(a<=0)return null;const l=(-s-Math.sqrt(a))/(2*i);return l>0?e.clone().addScaledVector(t,l):null}moveBy(e,t=1,n=1,i=1){Ls(this.position,e,t,n,i,this.interactionRadius,this.interactionRadius,this.interactionRadius)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.sphereCenter.value.copy(this.position),this.material.uniforms.sphereRadius.value=this.interactionRadius,this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}getInactivePosition(){return new C(this.position.x,10,this.position.z)}}var Cx=`varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {\r
  
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  
  vNormal = normal;

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,Px=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;\r
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\r
const float torusKnotShadowRadius = 0.13;

uniform vec3 light;

uniform vec3 torusKnotCenter;

uniform float poolWidth;\r
uniform float poolLength;\r
uniform float poolHeight;

uniform sampler2D water; 
uniform sampler2D causticTex; 

uniform int texturePassMode;

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {\r
  
  vec3 color = vec3(0.5);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));\r
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  color *= 1.0 - aoStrength / pow((poolWidth + torusKnotShadowRadius - abs(vPosition.x)) / torusKnotShadowRadius, 3.0);\r
  
  color *= 1.0 - aoStrength / pow((poolLength + torusKnotShadowRadius - abs(vPosition.z)) / torusKnotShadowRadius, 3.0);\r
  
  color *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + torusKnotShadowRadius) / torusKnotShadowRadius, 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (texturePassMode == 2 && vPosition.y < info.r) {\r
    discard;\r
  }

  
  if (vPosition.y < info.r) {\r
    
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;\r
  }

  color += diffuse;

  
  if (vPosition.y < info.r) {\r
    color *= underwaterColor * 1.2;\r
  }

  gl_FragColor = vec4(color, 1.0);\r
}`;class Dx{constructor(e){D(this,"name","TorusKnot");D(this,"boundingRadius",.31);D(this,"floorClearance",.13);D(this,"position",new C(-.4,this.floorClearance-1,.2));D(this,"velocity",new C);D(this,"displacement");D(this,"optics",{kind:"mesh",center:this.position,boundingRadius:this.boundingRadius,shadowRadius:.13});D(this,"mesh");D(this,"enabled",!1);D(this,"previousPosition",this.position.clone());D(this,"material");D(this,"raycaster",new Eu);this.resources=e,this.material=new at({vertexShader:Cx,fragmentShader:Px,uniforms:{light:{value:e.lightDirection.clone()},torusKnotCenter:{value:this.position.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0});const t=new ka(.17,.045,64,8);t.rotateX(Math.PI/2),this.mesh=new pt(t,this.material),this.mesh.frustumCulled=!1,this.mesh.visible=!1;const n=[],i=24,s=.17,o=.045,a=2,l=3;for(let c=0;c<i;c++){const u=c/i*Math.PI*2,h=s*(2+Math.cos(l*u))*.5,d=h*Math.cos(a*u),p=h*Math.sin(a*u),g=-s*Math.sin(l*u)*.5;n.push({offset:new C(d,g,p),radius:o*2})}this.displacement=new Nu(n,.15)}floorY(e){return this.floorClearance-e}setEnabled(e,t){if(e===this.enabled)return;const n=this.getInactivePosition();e?(this.position.y<=this.boundingRadius-1&&(this.position.y=this.floorClearance-1),this.displacement.move(t,n,this.position),this.mesh.position.copy(this.position)):(this.displacement.move(t,this.position,n),this.mesh.position.copy(n),this.velocity.set(0,0,0)),this.enabled=e,this.mesh.visible=e,this.previousPosition.copy(this.position)}syncPreviousPosition(){this.previousPosition.copy(this.position),this.mesh.position.copy(this.position)}update(e,t,n){this.enabled&&(Ds(e,this.position,this.velocity,t,this.boundingRadius,this.floorClearance),this.displacement.move(n,this.previousPosition,this.position,t.poolWidth,t.poolLength),this.previousPosition.copy(this.position),this.mesh.position.copy(this.position))}hitTest(e,t){if(!this.enabled)return null;this.mesh.position.copy(this.position),this.mesh.updateMatrixWorld(!0),this.raycaster.set(e,t);const n=this.raycaster.intersectObject(this.mesh);return n.length>0?n[0].point:null}moveBy(e,t=1,n=1,i=1){Ls(this.position,e,t,n,i,this.boundingRadius,this.boundingRadius,this.floorClearance),this.mesh.position.copy(this.position)}prepareRender(e,t=1,n=1,i=1){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.torusKnotCenter.value.copy(this.position),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}getInactivePosition(){return new C(this.position.x,10,this.position.z)}}function Lx(r,e){return new Fv(r).register(new Rx(e),!0).register(new kv(e)).register(new Dx(e)).register(new Ex(e))}var Ix=`varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {\r
  
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  
  vNormal = normalize(mat3(modelMatrix) * normal);

  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,Nx=`precision highp float;

const float IOR_AIR = 1.0;\r
const float IOR_WATER = 1.333;\r
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\r
const float pipeShadowRadius = 0.1;

uniform vec3 light;

uniform float poolWidth;\r
uniform float poolLength;\r
uniform float poolHeight;

uniform sampler2D water; 
uniform sampler2D causticTex; 

uniform int texturePassMode;

varying vec3 vPosition; 
varying vec3 vNormal; 

void main() {\r
  
  
  vec3 color = vec3(0.4, 0.42, 0.45);

  
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));\r
  float aoStrength = 0.6 * (1.0 - litFactor);

  
  
  
  color *= 1.0 - aoStrength / pow(max((poolWidth + pipeShadowRadius - abs(vPosition.x)) / pipeShadowRadius, 1.0), 3.0);\r
  color *= 1.0 - aoStrength / pow(max((poolLength + pipeShadowRadius - abs(vPosition.z)) / pipeShadowRadius, 1.0), 3.0);\r
  color *= 1.0 - aoStrength / pow(max((vPosition.y + poolHeight + pipeShadowRadius) / pipeShadowRadius, 1.0), 3.0);

  
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  
  if (texturePassMode == 2 && vPosition.y < info.r) {\r
    discard;\r
  }

  
  if (vPosition.y < info.r) {\r
    vec4 caustic = texture2D(\r
      causticTex,\r
      0.75 *\r
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *\r
        vec2(0.5 / poolWidth, 0.5 / poolLength) +\r
        0.5\r
    );\r
    diffuse = (diffuse + 0.06) * caustic.r * 2.2;\r
  }

  color += diffuse;

  
  if (vPosition.y < info.r) {\r
    color *= underwaterColor;\r
  }

  gl_FragColor = vec4(color, 1.0);\r
}`;const si=30,Uc=60/2/si,Ms=57/2/si,Ss=48/si,Ux="Rounded Box",Fc=0,pr=1.25/si,Oc=6/si,Fx=0,ya=18.6/si,Ox=Ms+1/si-ya,ss=55*Math.PI/180,Bc=13.5/si,zc=.09,Bx=.0035,zx=.03;class Hx{constructor(e){D(this,"mesh");D(this,"flow",1);D(this,"material");D(this,"streamMaterial");D(this,"streamMeshes",[]);D(this,"outletOffsets");D(this,"armDirections");D(this,"jets",[{x:0,z:0,dirX:0,dirZ:0,strength:0},{x:0,z:0,dirX:0,dirZ:0,strength:0}]);D(this,"jetTime",0);D(this,"jetPulse",0);this.resources=e,this.material=new at({vertexShader:Ix,fragmentShader:Nx,uniforms:{light:{value:e.lightDirection.clone()},poolWidth:{value:1},poolHeight:{value:1},poolLength:{value:1},water:{value:null},causticTex:{value:e.causticTexture},texturePassMode:{value:0}},depthTest:!0,depthWrite:!0}),this.streamMaterial=new ti({color:14479359,transparent:!0,opacity:.45,depthWrite:!1}),this.mesh=new Hn,this.mesh.frustumCulled=!1;const t=[new C(Math.sin(ss),0,-Math.cos(ss)),new C(-Math.sin(ss),0,-Math.cos(ss))];this.addSegment(new C(0,0,1),Ox);for(const i of t)this.addSegment(i,Bc);const n=new pt(new Rs(pr*1.25,20,16),this.material);n.frustumCulled=!1,this.mesh.add(n),this.outletOffsets=t.map(i=>i.clone().multiplyScalar(Bc)),this.armDirections=t.map(i=>i.clone());for(const i of this.outletOffsets){const s=Oc+.03,o=new pt(new ys(pr*.45,pr*.6,s,12),this.streamMaterial);o.position.set(i.x,-s/2,i.z),o.frustumCulled=!1,this.streamMeshes.push(o),this.mesh.add(o)}this.mesh.position.set(Fx,Oc,ya)}addSegment(e,t){const n=new ys(pr,pr,t,20),i=new pt(n,this.material);i.quaternion.setFromUnitVectors(new C(0,1,0),e.clone().normalize()),i.position.copy(e).multiplyScalar(t/2),i.frustumCulled=!1,this.mesh.add(i)}update(e,t,n,i){if(this.followBackWall(i),!!this.syncStreamVisibility())for(this.jetTime+=e;this.jetTime>=zc;){this.jetTime-=zc,this.jetPulse++;const o=this.outletOffsets[this.jetPulse%2],a=(this.jetPulse>>1)%2===0?1:-1,l=(Math.random()-.5)*.03,c=(Math.random()-.5)*.03,u=(this.mesh.position.x+o.x)/n+l,h=(this.mesh.position.z+o.z)/i+c,d=Bx*this.flow*(.75+Math.random()*.5);t.addDrop(u,h,zx,d*a,n,i)}}getJets(){const e=this.mesh.visible&&this.flow>.001;for(let t=0;t<2;t++){const n=this.jets[t];n.x=this.mesh.position.x+this.outletOffsets[t].x,n.z=this.mesh.position.z+this.outletOffsets[t].z,n.dirX=this.armDirections[t].x,n.dirZ=this.armDirections[t].z,n.strength=e?this.flow:0}return this.jets}followBackWall(e){this.mesh.position.z=ya+(e-Ms)}syncStreamVisibility(){const e=this.mesh.visible&&this.flow>.001;for(const t of this.streamMeshes)t.visible=e;return e}prepareRender(e,t=1,n=1,i=1){this.followBackWall(i),this.syncStreamVisibility(),this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.light.value.copy(this.resources.lightDirection),this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolHeight.value=n,this.material.uniforms.poolLength.value=i,this.material.uniformsNeedUpdate=!0}}var kx=`uniform sampler2D water; 
uniform float poolWidth; 
uniform float poolLength; 
uniform float poolHeight; 

varying float vDepth; 

void main() {\r
  vec2 ndc = position.xz;\r
  vec4 info = texture2D(water, ndc * 0.5 + 0.5);\r
  float surfaceY = info.r + 0.006;

  
  float y = position.y > -0.03 ? surfaceY : position.y;\r
  vDepth = clamp(-y / poolHeight, 0.0, 1.0);

  vec3 world = vec3(ndc.x * poolWidth, y, ndc.y * poolLength);

  vec4 mvPosition = viewMatrix * vec4(world, 1.0);\r
  gl_Position = projectionMatrix * mvPosition;

  
  gl_PointSize = clamp(80.0 / -mvPosition.z, 1.5, 6.0);\r
}`,Vx=`precision highp float;\r

uniform vec3 color;

varying float vDepth;

void main() {\r
  vec2 d = gl_PointCoord - 0.5;\r
  if (dot(d, d) > 0.25) discard;\r
  vec3 deepColor = vec3(0.45, 0.08, 0.28);\r
  vec3 c = mix(color, deepColor, vDepth * 0.75);\r
  gl_FragColor = vec4(c, 0.8);\r
}`;const Hc=400;class Gx{constructor(){D(this,"points");D(this,"material");D(this,"velocitySample",{vx:0,vy:0,vz:0});const e=new Float32Array(Hc*3);for(let n=0;n<Hc;n++)e[n*3]=(Math.random()*2-1)*.97,e[n*3+1]=-.02-Math.random()*(Ss*.9),e[n*3+2]=(Math.random()*2-1)*.97;const t=new Ot;t.setAttribute("position",new Wt(e,3)),this.material=new at({vertexShader:kx,fragmentShader:Vx,uniforms:{water:{value:null},poolWidth:{value:1},poolLength:{value:1},poolHeight:{value:Ss},color:{value:new Ce(16734780)}},transparent:!0,depthWrite:!1,depthTest:!1}),this.points=new vu(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=10}advect(e,t,n,i,s,o=0){if(!this.points.visible||t<=0)return;const a=this.points.geometry.getAttribute("position"),l=a.array,c=Math.min(o,Math.min(n,i));for(let u=0;u<l.length;u+=3){let h=l[u]*n,d=l[u+1],p=l[u+2]*i;e.sampleVelocityWorld(h,d,p,n,i,s,this.velocitySample),h+=this.velocitySample.vx*t,d+=this.velocitySample.vy*t,p+=this.velocitySample.vz*t;const g=n*.985,b=i*.985;h>g?h=g:h<-g&&(h=-g),p>b?p=b:p<-b&&(p=-b);const m=-s*.97;if(d<m?d=m:d>-.008&&(d=-.008),c>.02){const f=n-c,v=i-c,y=Math.abs(h),S=Math.abs(p);if(y>f&&S>v){const A=y-f,T=S-v,R=Math.sqrt(A*A+T*T),_=c*.985;if(R>_){const w=_/R;h=Math.sign(h)*(f+A*w),p=Math.sign(p)*(v+T*w)}}}l[u]=h/n,l[u+1]=d,l[u+2]=p/i}a.needsUpdate=!0}prepareRender(e,t,n,i){this.material.uniforms.water.value=e.textureA.texture,this.material.uniforms.poolWidth.value=t,this.material.uniforms.poolLength.value=n,this.material.uniforms.poolHeight.value=i,this.material.uniformsNeedUpdate=!0}}const Pe=40,Je=20,We=40,gt=192,Wx=18,Bu=1/30,Xx=.35,jx=.06,Kx=.55,qx=7,kc=1.5,So=.5,Vc=.85,Yx=12,$x=4,Gc=30;class ut{constructor(){D(this,"u",new Float32Array(Pe*Je*We));D(this,"v",new Float32Array(Pe*Je*We));D(this,"w",new Float32Array(Pe*Je*We));D(this,"u0",new Float32Array(Pe*Je*We));D(this,"v0",new Float32Array(Pe*Je*We));D(this,"w0",new Float32Array(Pe*Je*We));D(this,"p",new Float32Array(Pe*Je*We));D(this,"p0",new Float32Array(Pe*Je*We));D(this,"div",new Float32Array(Pe*Je*We));D(this,"dye",new Float32Array(gt*gt));D(this,"dye0",new Float32Array(gt*gt));D(this,"dyeData",new Uint8Array(gt*gt));D(this,"dyeTexture");D(this,"impulses",[]);this.dyeTexture=new As(this.dyeData,gt,gt,ws,qt),this.dyeTexture.minFilter=nt,this.dyeTexture.magFilter=nt,this.dyeTexture.wrapS=an,this.dyeTexture.wrapT=an,this.dyeTexture.needsUpdate=!0}static idx(e,t,n){return e+Pe*(n+We*t)}addImpulse(e,t,n,i){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(i))return;const s=.2;n=Math.max(-s,Math.min(s,n)),i=Math.max(-s,Math.min(s,i)),this.impulses.push({x:e,z:t,dx:n,dz:i})}clearDye(){this.dye.fill(0),this.dye0.fill(0),this.dyeData.fill(0),this.dyeTexture.needsUpdate=!0}sampleVelocityWorld(e,t,n,i,s,o,a){const l=(e/i*.5+.5)*Pe-.5,c=(t+o)/o*Je-.5,u=(n/s*.5+.5)*We-.5;a.vx=this.trilinear(this.u,l,c,u)*(2*i/Pe),a.vy=this.trilinear(this.v,l,c,u)*(o/Je),a.vz=this.trilinear(this.w,l,c,u)*(2*s/We)}step(e,t,n,i,s,o){if(e=Math.min(e,Bu),e<=0)return;const a=2*n/Pe,l=s/Je,c=2*i/We,u=Math.hypot(So,Vc);for(const m of t){if(m.strength<=0)continue;const f=(m.x/n*.5+.5)*Pe-.5,v=(-.1+s)/s*Je-.5,y=(m.z/i*.5+.5)*We-.5,S=Kx*m.strength,A=m.dirX*So/u*(S/a),T=-Vc/u*(S/l),R=m.dirZ*So/u*(S/c);this.splatBlend(f,v,y,kc,A,T,R,qx*e)}for(const m of this.impulses){const f=(m.x/n*.5+.5)*Pe-.5,v=(m.z/i*.5+.5)*We-.5;this.splatAddSurface(f,v,kc,m.dx/a*Gc,m.dz/c*Gc)}this.impulses.length=0;const h=Math.max(0,1-Xx*e);for(let m=0;m<this.u.length;m++)this.u[m]*=h,this.v[m]*=h,this.w[m]*=h;for(let m=0;m<Je;m++)for(let f=0;f<We;f++)for(let v=0;v<Pe;v++){const y=ut.idx(v,m,f),S=v-this.u[y]*e,A=m-this.v[y]*e,T=f-this.w[y]*e;this.u0[y]=this.trilinear(this.u,S,A,T),this.v0[y]=this.trilinear(this.v,S,A,T),this.w0[y]=this.trilinear(this.w,S,A,T)}[this.u,this.u0]=[this.u0,this.u],[this.v,this.v0]=[this.v0,this.v],[this.w,this.w0]=[this.w0,this.w],this.applyVelocityBoundary();for(let m=1;m<Je-1;m++)for(let f=1;f<We-1;f++)for(let v=1;v<Pe-1;v++){const y=ut.idx(v,m,f);this.div[y]=.5*(this.u[y+1]-this.u[y-1]+(this.w[y+Pe]-this.w[y-Pe])+(this.v[y+Pe*We]-this.v[y-Pe*We]))}for(let m=0;m<Wx;m++){for(let f=1;f<Je-1;f++)for(let v=1;v<We-1;v++)for(let y=1;y<Pe-1;y++){const S=ut.idx(y,f,v);this.p0[S]=(this.p[S-1]+this.p[S+1]+this.p[S-Pe]+this.p[S+Pe]+this.p[S-Pe*We]+this.p[S+Pe*We]-this.div[S])/6}[this.p,this.p0]=[this.p0,this.p],this.mirrorPressureBoundary(this.p)}for(let m=1;m<Je-1;m++)for(let f=1;f<We-1;f++)for(let v=1;v<Pe-1;v++){const y=ut.idx(v,m,f);this.u[y]-=.5*(this.p[y+1]-this.p[y-1]),this.w[y]-=.5*(this.p[y+Pe]-this.p[y-Pe]),this.v[y]-=.5*(this.p[y+Pe*We]-this.p[y-Pe*We])}this.applyVelocityBoundary();const d=(-.06+s)/s*Je-.5,p=Math.max(0,1-jx*e),g=gt/Pe,b=gt/We;for(let m=0;m<gt;m++)for(let f=0;f<gt;f++){const v=m*gt+f,y=(f+.5)/g-.5,S=(m+.5)/b-.5,A=this.trilinear(this.u,y,d,S)*e*g,T=this.trilinear(this.w,y,d,S)*e*b;this.dye0[v]=this.bilinearDye(f-A,m-T)*p}if([this.dye,this.dye0]=[this.dye0,this.dye],o)for(const m of t){if(m.strength<=0)continue;const f=(m.x/n*.5+.5)*gt-.5,v=(m.z/i*.5+.5)*gt-.5;this.splatDye(f,v,$x,Yx*m.strength*e)}for(let m=0;m<gt*gt;m++){const f=this.dye[m];this.dyeData[m]=f>=1?255:f<=0?0:f*255|0}this.dyeTexture.needsUpdate=!0}mirrorPressureBoundary(e){for(let t=0;t<Je;t++)for(let n=0;n<We;n++)e[ut.idx(0,t,n)]=e[ut.idx(1,t,n)],e[ut.idx(Pe-1,t,n)]=e[ut.idx(Pe-2,t,n)];for(let t=0;t<Je;t++)for(let n=0;n<Pe;n++)e[ut.idx(n,t,0)]=e[ut.idx(n,t,1)],e[ut.idx(n,t,We-1)]=e[ut.idx(n,t,We-2)];for(let t=0;t<We;t++)for(let n=0;n<Pe;n++)e[ut.idx(n,0,t)]=e[ut.idx(n,1,t)],e[ut.idx(n,Je-1,t)]=e[ut.idx(n,Je-2,t)]}applyVelocityBoundary(){for(let e=0;e<Je;e++)for(let t=0;t<We;t++)this.u[ut.idx(0,e,t)]=0,this.u[ut.idx(Pe-1,e,t)]=0;for(let e=0;e<Je;e++)for(let t=0;t<Pe;t++)this.w[ut.idx(t,e,0)]=0,this.w[ut.idx(t,e,We-1)]=0;for(let e=0;e<We;e++)for(let t=0;t<Pe;t++)this.v[ut.idx(t,0,e)]=0,this.v[ut.idx(t,Je-1,e)]=0}splatBlend(e,t,n,i,s,o,a,l){const c=Math.ceil(i*3),u=Math.round(e),h=Math.round(t),d=Math.round(n);for(let p=Math.max(1,h-c);p<=Math.min(Je-2,h+c);p++)for(let g=Math.max(1,d-c);g<=Math.min(We-2,d+c);g++)for(let b=Math.max(1,u-c);b<=Math.min(Pe-2,u+c);b++){const m=(b-e)*(b-e)+(p-t)*(p-t)+(g-n)*(g-n),f=Math.exp(-m/(2*i*i)),v=ut.idx(b,p,g),y=Math.min(1,l*f);this.u[v]+=(s-this.u[v])*y,this.v[v]+=(o-this.v[v])*y,this.w[v]+=(a-this.w[v])*y}}splatAddSurface(e,t,n,i,s){const o=Math.ceil(n*3),a=Math.round(e),l=Math.round(t);for(let c=Je-3;c<=Je-2;c++)for(let u=Math.max(1,l-o);u<=Math.min(We-2,l+o);u++)for(let h=Math.max(1,a-o);h<=Math.min(Pe-2,a+o);h++){const d=(h-e)*(h-e)+(u-t)*(u-t),p=Math.exp(-d/(2*n*n)),g=ut.idx(h,c,u);this.u[g]+=i*p,this.w[g]+=s*p}}splatDye(e,t,n,i){const s=Math.ceil(n*3),o=Math.round(e),a=Math.round(t);for(let l=Math.max(0,a-s);l<=Math.min(gt-1,a+s);l++)for(let c=Math.max(0,o-s);c<=Math.min(gt-1,o+s);c++){const u=(c-e)*(c-e)+(l-t)*(l-t),h=Math.exp(-u/(2*n*n)),d=l*gt+c;this.dye[d]=Math.min(1.2,this.dye[d]+i*h)}}trilinear(e,t,n,i){const s=Math.min(Math.max(t,0),Pe-1.001),o=Math.min(Math.max(n,0),Je-1.001),a=Math.min(Math.max(i,0),We-1.001),l=s|0,c=o|0,u=a|0,h=s-l,d=o-c,p=a-u,g=ut.idx(l,c,u),b=g+1,m=g+Pe*We,f=m+1,v=g+Pe,y=v+1,S=m+Pe,A=S+1,T=e[g]*(1-h)+e[b]*h,R=e[v]*(1-h)+e[y]*h,_=e[m]*(1-h)+e[f]*h,w=e[S]*(1-h)+e[A]*h,N=T*(1-p)+R*p,P=_*(1-p)+w*p;return N*(1-d)+P*d}bilinearDye(e,t){const n=Math.min(Math.max(e,0),gt-1.001),i=Math.min(Math.max(t,0),gt-1.001),s=n|0,o=i|0,a=n-s,l=i-o,c=o*gt+s,u=this.dye[c]*(1-a)+this.dye[c+1]*a,h=this.dye[c+gt]*(1-a)+this.dye[c+gt+1]*a;return u*(1-l)+h*l}}var Zx=`varying vec2 coord;

void main() {\r
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);\r
}`,Jx=`precision highp float;\r

const float PI = 3.141592653589793;

uniform sampler2D tInput;

uniform vec2 center;

uniform float radius;

uniform float strength;

uniform float poolWidth;\r
uniform float poolLength;

varying vec2 coord;

void main() {\r
  vec4 info = texture2D(tInput, coord);

  /**\r
   * DROP PROFILE CALCULATION\r
   *\r
   * Step 1: Coordinate transformation\r
   *   NDC center [-1, 1] → UV space [0, 1]\r
   *   Formula: UV = NDC * 0.5 + 0.5\r
   *\r
   * Step 2: Distance calculation\r
   *   Compute physical distance from pixel to drop center\r
   *\r
   * Step 3: Invert and clamp to [0, 1]\r
   *   drop = max(0, 1 - d)\r
   *   Result: 1 at center, 0 at/beyond radius edge\r
   */\r
  vec2 physicalDiff = (coord - (center * 0.5 + 0.5)) * 2.0 * vec2(poolWidth, poolLength);\r
  \r
  
  
  
  
  float physRadius = radius * 2.0 * poolLength;\r
  float drop = max(0.0, 1.0 - length(physicalDiff) / physRadius);

  /**\r
 * * SMOOTH COSINE PROFILE\r
 *    *\r
 *    * A simple linear falloff would create waves with sharp edges, causing\r
 *    * high-frequency artifacts. Instead, we use a raised cosine profile:\r
 *    *\r
 *    *   f(x) = 0.5 - 0.5 * cos(x * π)\r
 *    *\r
 *    * This is the "Hann window" function, which has these properties:\r
 *    *   - f(0) = 0       (zero at the edge)\r
 *    *   - f(1) = 1       (maximum at the center)\r
 *    *   - f'(0) = 0      (zero slope at edge - smooth transition)\r
 *    *   - f'(1) = 0      (zero slope at center - smooth peak)\r
 *    *\r
 *    * The smooth derivatives ensure no discontinuities in the wave shape,\r
 *    * producing clean, natural-looking circular ripples.\r
 */\r
  drop = 0.5 - cos(drop * PI) * 0.5;

  
  
  
  info.r += drop * strength;

  gl_FragColor = info;\r
}`,Qx=`varying vec2 coord;

void main() {\r
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);\r
}`,e_=`precision highp float;

uniform sampler2D tInput;

uniform vec2 delta;

uniform float poolWidth;\r
uniform float poolLength;

varying vec2 coord;

void main() {\r
  
  vec4 info = texture2D(tInput, coord);

  
  vec2 dx = vec2(delta.x, 0.0);  
  vec2 dy = vec2(0.0, delta.y);  

  /**\r
   * DISCRETE LAPLACIAN COMPUTATION IN PHYSICAL COORDINATES\r
   *\r
   * The continuous Laplacian ∇²h = ∂²h/∂x² + ∂²h/∂z² measures surface curvature.\r
   * On a non-uniform grid where cells have physical dimensions (2*poolWidth*delta.x)\r
   * in X and (2*poolLength*delta.y) in Z, the second derivatives are:\r
   *\r
   *   ∂²h/∂x² ≈ (H_E - 2*H_C + H_W) / Δx²\r
   *   ∂²h/∂z² ≈ (H_N - 2*H_C + H_S) / Δz²\r
   *\r
   * By scaling the delta grid spacing by poolWidth and poolLength, we make the\r
   * wave propagation speed c isotropic in physical space.\r
   */\r
  float d2h_dx2 = texture2D(tInput, coord + dx).r + texture2D(tInput, coord - dx).r - 2.0 * info.r;\r
  float d2h_dz2 = texture2D(tInput, coord + dy).r + texture2D(tInput, coord - dy).r - 2.0 * info.r;

  /**\r
   * VELOCITY UPDATE (Semi-implicit Euler)\r
   *\r
   * From physics: acceleration = c² * ∇²h\r
   *\r
   * When poolWidth = poolLength = 1.0, this simplifies exactly to:\r
   *   info.g += 2.0 * (average - info.r)\r
   * which matches the original isotropic simulation rate.\r
   */\r
  float stabilityScale = min(1.0, min(poolWidth * poolWidth, poolLength * poolLength));\r
  info.g += 0.5 * stabilityScale * (d2h_dx2 / (poolWidth * poolWidth) + d2h_dz2 / (poolLength * poolLength));

  /**\r
   * DAMPING (Energy Dissipation)\r
   *\r
   * Real water loses energy to friction, viscosity, and air resistance.\r
   * We model this with exponential decay: v(t+dt) = v(t) * damping\r
   *\r
   * damping = 0.995 per frame:\r
   *   - After 60 frames (1 sec @ 60fps): velocity reduced to 0.995^60 ≈ 74%\r
   *   - After 300 frames (5 sec): velocity reduced to 0.995^300 ≈ 22%\r
   *\r
   * This provides gradual settling without abrupt stopping.\r
   */\r
  info.g *= 0.995;

  /**\r
   * HEIGHT UPDATE (Euler Integration)\r
   *\r
   * height += velocity * dt\r
   *\r
   * Since dt is absorbed into our coefficients, we simply add velocity.\r
   */\r
  info.r += info.g;

  gl_FragColor = info;\r
}`,t_=`varying vec2 coord;

void main() {\r
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);\r
}`,n_=`precision highp float;

uniform sampler2D tInput;

uniform float poolWidth;\r
uniform float poolLength;\r
uniform vec2 delta;

varying vec2 coord;

void main() {\r
  vec4 info = texture2D(tInput, coord);

  /**\r
   * TANGENT VECTOR COMPUTATION\r
   *\r
   * We compute tangent vectors using finite differences:\r
   *\r
   *   T_x ≈ S(x + Δx) - S(x) = (Δx, h(x+Δx) - h(x), 0)\r
   *   T_z ≈ S(z + Δz) - S(z) = (0, h(z+Δz) - h(z), Δz)\r
   *\r
   * These approximate the partial derivative directions on the surface.\r
   */

  
  
  vec3 dx = vec3(\r
    delta.x * 2.0 * poolWidth, 
    texture2D(tInput, vec2(coord.x + delta.x, coord.y)).r - info.r, 
    0.0 
  );

  
  
  vec3 dy = vec3(\r
    0.0, 
    texture2D(tInput, vec2(coord.x, coord.y + delta.y)).r - info.r, 
    delta.y * 2.0 * poolLength 
  );

  /**\r
 * * CROSS PRODUCT FOR NORMAL\r
 *    *\r
 *    * N = T_z × T_x = dy × dx\r
 *    *\r
 *    * Cross product formula:\r
 *    *   (a × b).x = a.y * b.z - a.z * b.y\r
 *    *   (a × b).y = a.z * b.x - a.x * b.z\r
 *    *   (a × b).z = a.x * b.y - a.y * b.x\r
 *    *\r
 *    * With our vectors:\r
 *    *   dy = (0, Δh_z, Δz)\r
 *    *   dx = (Δx, Δh_x, 0)\r
 *    *\r
 *    *   N.x = Δh_z * 0 - Δz * Δh_x = -Δz * Δh_x\r
 *    *   N.y = Δz * Δx - 0 * 0 = Δz * Δx  (positive, pointing up)\r
 *    *   N.z = 0 * Δh_x - Δh_z * Δx = -Δh_z * Δx\r
 *    *\r
 *    * The result points upward (N.y > 0) for a surface viewed from above.\r
 *    *\r
 *    * STORAGE OPTIMIZATION:\r
 *    * We only store N.x and N.z in the BA channels. N.y can be reconstructed:\r
 *    *   |N| = 1  →  N.y = sqrt(1 - N.x² - N.z²)\r
 */\r
  info.ba = normalize(cross(dy, dx)).xz;

  gl_FragColor = info;\r
}`,Wc=`varying vec2 coord; 

void main() {\r
  
  
  coord = position.xy * 0.5 + 0.5;

  
  gl_Position = vec4(position.xyz, 1.0);\r
}`,i_=`precision highp float;\r

uniform sampler2D tInput; 
uniform vec3 oldCenter; 
uniform vec3 newCenter; 
uniform float radius; 
uniform float displacementScale; 
uniform float poolWidth;\r
uniform float poolLength;\r
varying vec2 coord; 

/**\r
 * Computes an approximation of the submerged "column volume" of the sphere\r
 * at the current texture coordinate position.\r
 *\r
 * APPROACH:\r
 * For each (X, Z) position on the water grid, we estimate how much of the\r
 * vertical column is occupied by the sphere below the water surface (Y ≤ 0).\r
 *\r
 * Instead of computing exact sphere-plane intersection (which involves\r
 * sqrt and is discontinuous at the boundary), we use a smooth exponential\r
 * falloff that approximates the sphere profile while avoiding sharp edges\r
 * that would cause high-frequency ripples.\r
 *\r
 * MATHEMATICAL MODEL:\r
 *   t = horizontal distance from sphere center / radius (normalized)\r
 *   dy = exp(-(1.5*t)^6)  -- Super-Gaussian falloff (flatter than Gaussian near center)\r
 *\r
 * This dy represents the "thickness" of the sphere at distance t.\r
 * A true sphere has dy = sqrt(1 - t²) for t < 1, but the exponential\r
 * version is smoother at the boundary and avoids sqrt discontinuities.\r
 *\r
 * @param center Sphere center position in world coordinates\r
 * @return Approximate submerged column height (water displacement amount)\r
 */\r
float volumeInSphere(vec3 center) {\r
  
  
  vec3 pointPhys = vec3(\r
    (coord.x * 2.0 - 1.0) * poolWidth,\r
    0.0,\r
    (coord.y * 2.0 - 1.0) * poolLength\r
  );

  
  vec3 toCenter = pointPhys - center;

  
  float t = length(toCenter) / radius;

  
  
  float dy = exp(-pow(t * 1.5, 6.0));

  
  
  
  float ymin = min(0.0, center.y - dy);\r
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);

  
  return (ymax - ymin) * 0.1 * displacementScale;\r
}

void main() {\r
  vec4 info = texture2D(tInput, coord);

  
  info.r += volumeInSphere(oldCenter);\r
  
  info.r -= volumeInSphere(newCenter);

  gl_FragColor = info;\r
}`,r_=`precision highp float;

uniform sampler2D tInput;

uniform vec3 oldCenter;

uniform vec3 newCenter;

uniform vec3 halfSize;

uniform float poolWidth;\r
uniform float poolLength;

varying vec2 coord;

/**\r
 * Computes an approximation of the submerged "column volume" of the box\r
 * at the current texture coordinate position.\r
 *\r
 * SIGNED DISTANCE FUNCTION (SDF) APPROACH:\r
 *\r
 * An SDF returns the shortest distance from a point to a surface:\r
 *   - Negative inside the shape\r
 *   - Zero on the surface\r
 *   - Positive outside the shape\r
 *\r
 * For an axis-aligned box centered at origin with half-extents h:\r
 *   d = max(|p| - h, 0) + min(max(|p| - h components), 0)\r
 *\r
 * The first term handles points outside (Euclidean distance to nearest face).\r
 * The second term handles points inside (negative distance to nearest face).\r
 *\r
 * @param center Box center position in world coordinates\r
 * @return Approximate submerged column height (water displacement amount)\r
 */\r
float volumeInCube(vec3 center) {\r
  
  
  vec3 point = vec3(\r
    (coord.x * 2.0 - 1.0) * poolWidth,\r
    0.0,\r
    (coord.y * 2.0 - 1.0) * poolLength\r
  );

  /**\r
   * BOX SDF COMPUTATION\r
   *\r
   * Vector from box surface to query point:\r
   *   q = |p - center| - halfSize\r
   *\r
   * For each axis:\r
   *   q.i > 0: point is outside box in this dimension (distance = q.i)\r
   *   q.i < 0: point is inside box in this dimension (penetration = -q.i)\r
   *   q.i = 0: point is exactly on the box face\r
   */\r
  vec3 distanceToBox = abs(point - center) - halfSize;

  /**\r
   * SIGNED DISTANCE CALCULATION\r
   *\r
   * Case 1: Point outside box (at least one q.i > 0)\r
   *   Distance = Euclidean distance to nearest corner/edge/face\r
   *   = length(max(q, 0))\r
   *\r
   * Case 2: Point inside box (all q.i < 0)\r
   *   Distance = negative of smallest penetration (closest face)\r
   *   = min(max(q.x, q.y, q.z), 0)  [returns negative value]\r
   *\r
   * Combined formula covers both cases:\r
   */\r
  float signedDistance =\r
    length(max(distanceToBox, 0.0)) + 
    min(max(distanceToBox.x, max(distanceToBox.y, distanceToBox.z)), 0.0); 

  
  float scale = max(max(halfSize.x, halfSize.y), halfSize.z);

  
  float t = max(signedDistance, 0.0) / scale;

  /**\r
   * SMOOTH FALLOFF PROFILE\r
   *\r
   * Like the sphere shader, we use a super-Gaussian falloff to create\r
   * smooth wave profiles without sharp discontinuities at box edges.\r
   *\r
   * exp(-(1.5*t)^6) is nearly 1 inside and on the box surface (t ≈ 0),\r
   * and drops quickly to 0 as we move away from the box.\r
   */\r
  float dy = exp(-pow(t * 1.5, 6.0));

  
  float ymin = min(0.0, center.y - dy);\r
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);

  
  return (ymax - ymin) * 0.1;\r
}

void main() {\r
  vec4 info = texture2D(tInput, coord);

  
  info.r += volumeInCube(oldCenter);

  
  info.r -= volumeInCube(newCenter);

  gl_FragColor = info;\r
}`;class s_{constructor(e){D(this,"textureA");D(this,"textureB");D(this,"renderer");D(this,"plane");D(this,"camera");D(this,"scene");D(this,"dropMaterial");D(this,"updateMaterial");D(this,"normalMaterial");D(this,"sphereMaterial");D(this,"moveCubeMaterial");this.renderer=e;const t=256,i={type:this.getSimulationTextureType(),minFilter:wt,magFilter:wt,format:Vt,stencilBuffer:!1,depthBuffer:!1};this.textureA=new Ft(t,t,i),this.textureB=new Ft(t,t,i),this.camera=new Mi(-1,1,1,-1,0,1),this.scene=new Ua;const s=new bi(2,2);this.dropMaterial=new at({vertexShader:Zx,fragmentShader:Jx,uniforms:{tInput:{value:null},center:{value:new He},radius:{value:0},strength:{value:0},poolWidth:{value:1},poolLength:{value:1}}}),this.updateMaterial=new at({vertexShader:Qx,fragmentShader:e_,uniforms:{tInput:{value:null},delta:{value:new He(1/t,1/t)},poolWidth:{value:1},poolLength:{value:1}}}),this.normalMaterial=new at({vertexShader:t_,fragmentShader:n_,uniforms:{tInput:{value:null},delta:{value:new He(1/t,1/t)},poolWidth:{value:1},poolLength:{value:1}}}),this.sphereMaterial=new at({vertexShader:Wc,fragmentShader:i_,uniforms:{tInput:{value:null},oldCenter:{value:new C},newCenter:{value:new C},radius:{value:0},displacementScale:{value:1},poolWidth:{value:1},poolLength:{value:1}}}),this.moveCubeMaterial=new at({vertexShader:Wc,fragmentShader:r_,uniforms:{tInput:{value:null},oldCenter:{value:new C},newCenter:{value:new C},halfSize:{value:new C},poolWidth:{value:1},poolLength:{value:1}}}),this.plane=new pt(s,this.dropMaterial),this.scene.add(this.plane),this.clearTextures()}getSimulationTextureType(){return this.renderer.capabilities.isWebGL2&&this.renderer.extensions.has("EXT_color_buffer_float")&&this.renderer.extensions.has("OES_texture_float_linear")?en:Cn}clearTextures(){const e=this.renderer.getRenderTarget(),t=new Ce;this.renderer.getClearColor(t);const n=this.renderer.getClearAlpha();this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(this.textureA),this.renderer.clear(),this.renderer.setRenderTarget(this.textureB),this.renderer.clear(),this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,n)}swapTextures(){const e=this.textureA;this.textureA=this.textureB,this.textureB=e}addDrop(e,t,n,i,s=1,o=1){this.plane.material=this.dropMaterial,this.dropMaterial.uniforms.tInput.value=this.textureA.texture,this.dropMaterial.uniforms.center.value.set(e,t),this.dropMaterial.uniforms.radius.value=n,this.dropMaterial.uniforms.strength.value=i,this.dropMaterial.uniforms.poolWidth.value=s,this.dropMaterial.uniforms.poolLength.value=o,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}moveSphere(e,t,n,i=1,s=1,o=1){this.plane.material=this.sphereMaterial,this.sphereMaterial.uniforms.tInput.value=this.textureA.texture,this.sphereMaterial.uniforms.oldCenter.value.copy(e),this.sphereMaterial.uniforms.newCenter.value.copy(t),this.sphereMaterial.uniforms.radius.value=n,this.sphereMaterial.uniforms.displacementScale.value=i,this.sphereMaterial.uniforms.poolWidth.value=s,this.sphereMaterial.uniforms.poolLength.value=o,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}moveCube(e,t,n,i=1,s=1){this.plane.material=this.moveCubeMaterial,this.moveCubeMaterial.uniforms.tInput.value=this.textureA.texture,this.moveCubeMaterial.uniforms.oldCenter.value.copy(e),this.moveCubeMaterial.uniforms.newCenter.value.copy(t),this.moveCubeMaterial.uniforms.halfSize.value.copy(n),this.moveCubeMaterial.uniforms.poolWidth.value=i,this.moveCubeMaterial.uniforms.poolLength.value=s,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}stepSimulation(e=1,t=1){this.plane.material=this.updateMaterial,this.updateMaterial.uniforms.tInput.value=this.textureA.texture,this.updateMaterial.uniforms.poolWidth.value=e,this.updateMaterial.uniforms.poolLength.value=t,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}updateNormals(e=1,t=1){this.plane.material=this.normalMaterial,this.normalMaterial.uniforms.tInput.value=this.textureA.texture,this.normalMaterial.uniforms.poolWidth.value=e,this.normalMaterial.uniforms.poolLength.value=t,this.renderer.setRenderTarget(this.textureB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.swapTextures()}}class o_{constructor(e){D(this,"mode",0);D(this,"previousHit",null);D(this,"lastDropPoint",null);D(this,"dragPlaneNormal",null);D(this,"activePointerId",null);D(this,"touchPointers",new Map);D(this,"pinchDistance",null);D(this,"pinching",!1);D(this,"settingLightDirection",!1);D(this,"onPointerDown",e=>{if(!(e.pointerType==="mouse"&&e.button!==0)&&!(e.pointerType!=="touch"&&(this.activePointerId!==null||!e.isPrimary))&&!(e.pointerType==="touch"&&this.touchPointers.size>=2)){if(e.preventDefault(),this.dependencies.canvas.setPointerCapture(e.pointerId),e.pointerType==="touch"){if(this.touchPointers.set(e.pointerId,new He(e.clientX,e.clientY)),this.touchPointers.size===2){this.pinching=!0,this.pinchDistance=this.getPinchDistance(),this.activePointerId=null,this.dependencies.cameraController.stopInertia(),this.stopDrag();return}if(this.pinching||this.touchPointers.size>1)return}else if(this.activePointerId!==null)return;this.activePointerId=e.pointerId,this.startDrag(e.clientX,e.clientY,e.timeStamp)}});D(this,"onPointerMove",e=>{if(e.pointerType==="touch"&&this.touchPointers.has(e.pointerId)&&(this.touchPointers.get(e.pointerId).set(e.clientX,e.clientY),this.pinching&&this.pinchDistance!==null&&this.touchPointers.size>=2)){e.preventDefault();const t=this.getPinchDistance();t>0&&(this.dependencies.cameraController.zoomByScale(this.pinchDistance/t),this.pinchDistance=t,this.dependencies.controls.paused&&this.dependencies.draw());return}e.pointerId===this.activePointerId&&(e.preventDefault(),this.duringDrag(e.clientX,e.clientY,e.timeStamp))});D(this,"onPointerEnd",e=>this.finishPointer(e,!0));D(this,"onLostPointerCapture",e=>this.finishPointer(e,!1));D(this,"onWheel",e=>{e.preventDefault(),this.dependencies.cameraController.zoomByWheel(e.deltaY),this.dependencies.controls.paused&&this.dependencies.draw()});D(this,"onKeyDown",e=>{const{cameraController:t,renderer:n,water:i,controls:s,draw:o}=this.dependencies;e.code==="KeyL"?(this.settingLightDirection=!0,t.getLightDirection(n.lightDir),s.paused?o():n.updateCaustics(i)):e.code==="Space"&&!e.repeat?s.togglePaused():e.code==="KeyG"&&!e.repeat&&s.togglePhysics()});D(this,"onKeyUp",e=>{e.code==="KeyL"&&(this.settingLightDirection=!1)});this.dependencies=e}get draggingObject(){return this.mode===2}connect(){const{canvas:e}=this.dependencies;e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerEnd),e.addEventListener("pointercancel",this.onPointerEnd),e.addEventListener("lostpointercapture",this.onLostPointerCapture),e.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown,{capture:!0}),window.addEventListener("keyup",this.onKeyUp,{capture:!0})}update(e){this.dependencies.cameraController.update(e),this.syncLightDirection()}preparePausedDraw(){this.syncLightDirection()&&this.dependencies.controls.paused&&this.dependencies.renderer.updateCaustics(this.dependencies.water)}cancelDrag(){this.stopDrag()}getRay(e,t){const{canvas:n,camera:i}=this.dependencies,s=n.getBoundingClientRect(),o=new He((e-s.left)/s.width*2-1,-((t-s.top)/s.height)*2+1),a=new Eu;return a.setFromCamera(o,i),{origin:a.ray.origin.clone(),direction:a.ray.direction.clone()}}startDrag(e,t,n){var g;const{cameraController:i,camera:s,objects:o,controls:a}=this.dependencies;i.stopInertia();const{origin:l,direction:c}=this.getRay(e,t),u=l.clone().addScaledVector(c,-l.y/c.y),h=((g=o.active)==null?void 0:g.hitTest(l,c))??null,d=a.poolShape==="Box"?1:a.poolWidth,p=a.poolShape==="Box"?1:a.poolLength;h?(this.mode=2,this.previousHit=h,this.dragPlaneNormal=new C(0,0,-1).applyQuaternion(s.quaternion).negate()):Math.abs(u.x)<d&&Math.abs(u.z)<p?(this.mode=1,this.duringDrag(e,t,n)):(this.mode=3,i.beginOrbit(e,t,n))}duringDrag(e,t,n){var p;const{water:i,renderer:s,objects:o,cameraController:a,controls:l,draw:c}=this.dependencies,u=l.poolShape==="Box"?1:l.poolWidth,h=l.poolShape==="Box"?1:l.poolHeight,d=l.poolShape==="Box"?1:l.poolLength;if(this.mode===1){const{origin:g,direction:b}=this.getRay(e,t),m=g.clone().addScaledVector(b,-g.y/b.y);if(!Number.isFinite(m.x)||!Number.isFinite(m.z)||Math.abs(m.x)>=u||Math.abs(m.z)>=d){this.lastDropPoint=null;return}i.addDrop(m.x/u,m.z/d,.03,.01,u,d),this.lastDropPoint&&!l.paused&&((p=this.dependencies.flow)==null||p.addImpulse(m.x,m.z,m.x-this.lastDropPoint.x,m.z-this.lastDropPoint.z)),this.lastDropPoint=m.clone(),l.paused&&(i.updateNormals(u,d),s.updateCaustics(i))}else if(this.mode===2){if(!this.previousHit||!this.dragPlaneNormal||!o.active)return;const{origin:g,direction:b}=this.getRay(e,t),m=-this.dragPlaneNormal.dot(g.clone().sub(this.previousHit))/this.dragPlaneNormal.dot(b),f=g.clone().addScaledVector(b,m);o.active.moveBy(f.clone().sub(this.previousHit),u,h,d),s.setWaterOptics(o.optics),this.previousHit=f,l.paused&&s.updateCaustics(i)}else this.mode===3&&a.orbitTo(e,t,n);l.paused&&c()}stopDrag(){this.mode=0,this.previousHit=null,this.dragPlaneNormal=null,this.lastDropPoint=null}finishPointer(e,t){const n=e.pointerId===this.activePointerId;e.pointerType==="touch"&&(this.touchPointers.delete(e.pointerId),this.pinching&&(this.touchPointers.size<2&&(this.pinchDistance=null),this.touchPointers.size===0&&(this.pinching=!1))),n&&(this.mode===3&&this.dependencies.cameraController.endOrbit(e.timeStamp),this.activePointerId=null,this.stopDrag());const{canvas:i}=this.dependencies;t&&i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId)}getPinchDistance(){const[e,t]=Array.from(this.touchPointers.values());return e.distanceTo(t)}syncLightDirection(){return!this.settingLightDirection&&!this.dependencies.controls.lightFollowsCamera?!1:(this.dependencies.cameraController.getLightDirection(this.dependencies.renderer.lightDir),!0)}}async function a_(){const e=await new Ga().loadAsync("./tiles.jpg");e.wrapS=ii,e.wrapT=ii,e.minFilter=Sn,e.generateMipmaps=!0;const t=await new Xd().loadAsync(["./xpos.jpg","./xneg.jpg","./ypos.jpg","./ypos.jpg","./zpos.jpg","./zneg.jpg"]);return t.flipY=!0,t.colorSpace=zn,t.minFilter=nt,t.magFilter=nt,t.generateMipmaps=!1,{tileTexture:e,cubemap:t}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class An{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),An.nextNameID=An.nextNameID||0,this.$name.id=`lil-gui-name-${++An.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class l_ extends An{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ma(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const c_={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Ma,toHexString:Ma},Ar={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},u_={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Ar.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ar.toHexString(i)}},h_={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Ar.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ar.toHexString(i)}},d_=[c_,Ar,u_,h_];function f_(r){return d_.find(e=>e.match(r))}class p_ extends An{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=f_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Ma(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class To extends An{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class m_ extends An{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,u,h;const d=5,p=v=>{a=v.clientX,l=c=v.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",b)},g=v=>{if(o){const y=v.clientX-a,S=v.clientY-l;Math.abs(S)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&b()}if(!o){const y=v.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=v.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",b)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(f,v,y,S,A)=>(f-v)/(y-v)*(A-S)+S,t=f=>{const v=this.$slider.getBoundingClientRect();let y=e(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(o){const v=f.touches[0].clientX-a,y=f.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let b;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const y=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class g_ extends An{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class v_ extends An{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var x_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function __(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Xc=!1;class qa{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Xc&&a&&(__(x_),Xc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new g_(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new m_(this,e,t,n,i,s);case"boolean":return new l_(this,e,t);case"string":return new v_(this,e,t);case"function":return new To(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new p_(this,e,t,n)}addFolder(e){const t=new qa({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof To||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof To)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const b_=0;class y_{constructor(e,t){D(this,"paused",!1);D(this,"physicsEnabled",!0);D(this,"densityEnabled",!1);D(this,"density",.9);D(this,"lightFollowsCamera",!1);D(this,"poolShape",Ux);D(this,"cornerRadius",Fc);D(this,"poolWidth",Uc);D(this,"poolHeight",Ss);D(this,"poolLength",Ms);D(this,"flowStrength",1);D(this,"dyeVisible",!0);D(this,"state",{object:"",gravity:!0,densityEnabled:!1,density:.9,paused:!1,pipeVisible:!0,flowStrength:1,tracerVisible:!0,dyeVisible:!0,clearDye:()=>{var e,t;(t=(e=this.callbacks).onClearDye)==null||t.call(e)},lightFollowsCamera:!1,cornerRadius:Fc,poolWidth:Uc,poolHeight:Ss,poolLength:Ms,updateLightDirection:()=>{var e,t;(t=(e=this.callbacks).onUpdateLightDirection)==null||t.call(e)}});D(this,"gravityController");D(this,"densityEnabledController");D(this,"densityController");D(this,"pausedController");D(this,"cornerRadiusController");D(this,"updateLightDirectionController");D(this,"physicsAvailable",!0);this.callbacks=t,this.state.object=e.length>1?e[1]:e[0];const n=new qa({title:"控制面板"});n.close(),n.domElement.style.left="0",n.domElement.style.right="auto";const i=n.addFolder("場景");i.close(),this.pausedController=i.add(this.state,"paused").name("暫停").onChange(c=>{this.paused=c,t.onPausedChange(c)}),i.add(this.state,"tracerVisible").name("示蹤粒子").onChange(c=>{var u;(u=t.onTracerVisibleChange)==null||u.call(t,c)}),i.add(this.state,"dyeVisible").name("色素染料").onChange(c=>{var u;this.dyeVisible=c,(u=t.onDyeVisibleChange)==null||u.call(t,c)}),i.add(this.state,"clearDye").name("清除染料");const s=n.addFolder("出水口");s.close(),s.add(this.state,"pipeVisible").name("顯示管件").onChange(c=>{var u;(u=t.onPipeVisibleChange)==null||u.call(t,c)}),s.add(this.state,"flowStrength",0,3,.05).name("出水強度").onChange(c=>{this.flowStrength=c});const o=n.addFolder("物理物件");o.close(),o.add(this.state,"object",e).name("物件").onChange(c=>t.onObjectChange(c)),this.gravityController=o.add(this.state,"gravity").name("重力 / 浮力").onChange(c=>{this.physicsEnabled=c}),this.densityEnabledController=o.add(this.state,"densityEnabled").name("自訂密度").onChange(c=>{this.densityEnabled=c,this.updateDensityController()}),this.densityController=o.add(this.state,"density",.2,2,.01).name("密度（<1 漂浮）").onChange(c=>{this.density=c});const a=n.addFolder("缸體尺寸");a.close(),this.cornerRadiusController=a.add(this.state,"cornerRadius",0,1,.01).name("圓角半徑").onChange(c=>{var h;const u=this.clampCornerRadius(c);this.cornerRadius=u,this.state.cornerRadius=u,this.cornerRadiusController.updateDisplay(),(h=t.onCornerRadiusChange)==null||h.call(t,u)}),a.add(this.state,"poolWidth",.5,3,.05).name("半寬 X").onChange(c=>{var u;this.poolWidth=c,this.updateCornerRadiusLimit(),(u=t.onPoolWidthChange)==null||u.call(t,c)}),a.add(this.state,"poolHeight",.3,2,.05).name("水深").onChange(c=>{var u;this.poolHeight=c,(u=t.onPoolHeightChange)==null||u.call(t,c)}),a.add(this.state,"poolLength",.5,3,.05).name("半深 Z").onChange(c=>{var u;this.poolLength=c,this.updateCornerRadiusLimit(),(u=t.onPoolLengthChange)==null||u.call(t,c)});const l=n.addFolder("光源");l.close(),l.add(this.state,"lightFollowsCamera").name("跟隨相機").onChange(c=>{var u;this.lightFollowsCamera=c,this.updateLightDirectionButton(),(u=t.onLightFollowsCameraChange)==null||u.call(t)}),this.updateLightDirectionController=l.add(this.state,"updateLightDirection").name("更新光源方向"),this.updateCornerRadiusLimit(),this.updateDensityController(),this.updateLightDirectionButton()}togglePaused(){this.paused=!this.paused,this.state.paused=this.paused,this.pausedController.updateDisplay(),this.callbacks.onPausedChange(this.paused)}togglePhysics(){this.physicsEnabled=!this.physicsEnabled,this.state.gravity=this.physicsEnabled,this.gravityController.updateDisplay()}setPhysicsAvailable(e){this.physicsAvailable=e,this.gravityController.disable(!e),this.densityEnabledController.disable(!e),this.updateDensityController()}updateDensityController(){this.densityController.show(this.physicsAvailable&&this.densityEnabled)}updateCornerRadiusLimit(){var t,n;const e=this.clampCornerRadius(this.cornerRadius);this.cornerRadiusController.max(this.maxCornerRadius),e!==this.cornerRadius&&(this.cornerRadius=e,this.state.cornerRadius=e,this.cornerRadiusController.updateDisplay(),(n=(t=this.callbacks).onCornerRadiusChange)==null||n.call(t,e))}clampCornerRadius(e){return Math.min(e,this.maxCornerRadius)}get maxCornerRadius(){return Math.max(0,Math.min(this.poolWidth,this.poolLength)-b_)}updateLightDirectionButton(){this.updateLightDirectionController.disable(this.lightFollowsCamera)}}class M_{constructor(){D(this,"gravity",new C(0,-4,0));D(this,"cameraController",new cv);D(this,"scene",new Ua);D(this,"camera",new kt(45,1,.01,100));D(this,"webglRenderer");D(this,"renderer");D(this,"water");D(this,"objects");D(this,"pipe");D(this,"tracer");D(this,"flow",new ut);D(this,"controls");D(this,"interaction");D(this,"previousTime",performance.now());D(this,"animate",e=>{this.controls.paused||(this.update((e-this.previousTime)/1e3),this.draw()),this.previousTime=e,requestAnimationFrame(this.animate)});D(this,"draw",()=>{var i;this.interaction.preparePausedDraw(),this.cameraController.apply(this.camera);const e=this.controls.poolShape==="Box"?1:this.controls.poolWidth,t=this.controls.poolShape==="Box"?1:this.controls.poolHeight,n=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.prepareRender(this.water,e,t,n),this.pipe.flow=this.controls.flowStrength,this.pipe.prepareRender(this.water,e,t,n),this.tracer.prepareRender(this.water,e,n,t),this.renderer.setDye(this.flow.dyeTexture,this.controls.dyeVisible),this.renderer.updateObjectTextures(this.scene,this.camera,((i=this.objects.active)==null?void 0:i.mesh)??null),this.renderer.updateCaustics(this.water),this.renderer.renderPool(this.water),this.renderer.renderWater(this.water,this.camera),this.webglRenderer.render(this.scene,this.camera)});D(this,"resize",()=>{const e=document.getElementById("help"),n=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-e.clientWidth-20,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.webglRenderer.setSize(n,i),this.renderer.setSize(n,i),this.draw()});D(this,"selectSimulationObject",e=>{const t=this.controls.poolShape==="Box"?1:this.controls.poolWidth,n=this.controls.poolShape==="Box"?1:this.controls.poolHeight,i=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.objects.select(e,this.water,t,n,i),this.renderer.setWaterOptics(this.objects.optics),this.interaction.cancelDrag(),this.controls.setPhysicsAvailable(e!==fs),this.water.updateNormals(t,i),this.renderer.updateCaustics(this.water),this.draw()})}async init(){const e=document.getElementById("app"),t=document.getElementById("loading");this.webglRenderer=new ov({antialias:!0}),this.webglRenderer.setPixelRatio(window.devicePixelRatio),this.webglRenderer.setClearColor(0),e.appendChild(this.webglRenderer.domElement);const{tileTexture:n,cubemap:i}=await a_();this.water=new s_(this.webglRenderer),this.renderer=new Nv(this.webglRenderer,n,i),this.scene.add(this.renderer.getPoolMesh(),this.renderer.getWaterMesh(),this.renderer.getWaterMeshBack()),this.renderer.markWaterOpticsHidden(),this.objects=Lx(this.scene,this.renderer.objectRenderResources),this.renderer.setWaterOptics(this.objects.optics),this.pipe=new Hx(this.renderer.objectRenderResources),this.scene.add(this.pipe.mesh),this.tracer=new Gx,this.scene.add(this.tracer.points),this.controls=new y_(this.objects.options,{onObjectChange:this.selectSimulationObject,onPausedChange:a=>{a&&this.draw()},onLightFollowsCameraChange:()=>{this.controls.paused&&this.draw()},onUpdateLightDirection:()=>{this.cameraController.getLightDirection(this.renderer.lightDir),this.controls.paused?this.draw():this.renderer.updateCaustics(this.water)},onPipeVisibleChange:a=>{this.pipe.mesh.visible=a,this.controls.paused&&this.draw()},onTracerVisibleChange:a=>{this.tracer.points.visible=a,this.controls.paused&&this.draw()},onDyeVisibleChange:()=>{this.controls.paused&&this.draw()},onClearDye:()=>{this.flow.clearDye(),this.controls.paused&&this.draw()},onPoolShapeChange:a=>{const l=a==="Box"?1:this.controls.poolWidth,c=a==="Box"?1:this.controls.poolHeight,u=a==="Box"?1:this.controls.poolLength;if(this.renderer.setPoolShape(a,this.controls.cornerRadius,l,c,u),this.objects.active){const h=this.objects.active.floorY(c);this.objects.active.position.y<h&&(this.objects.active.position.y=h,this.objects.active.velocity.y=0),this.objects.active.moveBy(new C(0,0,0),l,c,u),this.objects.active.syncPreviousPosition()}this.controls.paused&&this.draw()},onCornerRadiusChange:a=>{this.renderer.setPoolShape(this.controls.poolShape,a,this.controls.poolWidth,this.controls.poolHeight,this.controls.poolLength),this.controls.paused&&this.draw()},onPoolWidthChange:a=>{const l=this.controls.poolShape==="Box"?1:this.controls.poolHeight,c=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,a,l,c),this.objects.active&&(this.objects.active.moveBy(new C(0,0,0),a,l,c),this.objects.active.syncPreviousPosition()),this.controls.paused&&this.draw()},onPoolHeightChange:a=>{const l=this.controls.poolShape==="Box"?1:this.controls.poolWidth,c=this.controls.poolShape==="Box"?1:this.controls.poolLength;if(this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,l,a,c),this.objects.active){const u=this.objects.active.floorY(a);this.objects.active.position.y<u&&(this.objects.active.position.y=u,this.objects.active.velocity.y=0),this.objects.active.moveBy(new C(0,0,0),l,a,c),this.objects.active.syncPreviousPosition()}this.controls.paused&&this.draw()},onPoolLengthChange:a=>{const l=this.controls.poolShape==="Box"?1:this.controls.poolWidth,c=this.controls.poolShape==="Box"?1:this.controls.poolHeight;this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,l,c,a),this.objects.active&&(this.objects.active.moveBy(new C(0,0,0),l,c,a),this.objects.active.syncPreviousPosition()),this.controls.paused&&this.draw()}}),this.renderer.setPoolShape(this.controls.poolShape,this.controls.cornerRadius,this.controls.poolWidth,this.controls.poolHeight,this.controls.poolLength),this.interaction=new o_({canvas:this.webglRenderer.domElement,camera:this.camera,cameraController:this.cameraController,water:this.water,renderer:this.renderer,objects:this.objects,controls:this.controls,flow:this.flow,draw:this.draw}),this.interaction.connect(),this.seedWater(),t.innerHTML="";const s=document.getElementById("help"),o=document.getElementById("help-toggle");o.addEventListener("click",()=>{s.classList.toggle("collapsed"),o.textContent=s.classList.contains("collapsed")?"menu":"chevron_right"}),window.addEventListener("pointerdown",a=>{if(window.matchMedia("(max-width: 600px)").matches&&!s.classList.contains("collapsed")){const c=a.target;!s.contains(c)&&!o.contains(c)&&(s.classList.add("collapsed"),o.textContent="menu")}}),this.resize(),window.addEventListener("resize",this.resize),this.previousTime=performance.now(),requestAnimationFrame(this.animate)}seedWater(){const e=this.controls.poolShape==="Box"?1:this.controls.poolWidth,t=this.controls.poolShape==="Box"?1:this.controls.poolLength;for(let n=0;n<8;n++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.03,n%2===0?-.005:.005,e,t)}update(e){if(e>1)return;this.interaction.update(e);const t=this.controls.poolShape==="Box"?1:this.controls.poolWidth,n=this.controls.poolShape==="Box"?1:this.controls.poolHeight,i=this.controls.poolShape==="Box"?1:this.controls.poolLength;this.pipe.flow=this.controls.flowStrength,this.pipe.update(e,this.water,t,i);const s=Math.min(e,Bu);this.flow.step(s,this.pipe.getJets(),t,i,n,this.controls.dyeVisible),this.tracer.advect(this.flow,s,t,i,n,this.controls.cornerRadius),this.objects.update(e,{dragging:this.interaction.draggingObject,physicsEnabled:this.controls.physicsEnabled,densityEnabled:this.controls.densityEnabled,density:this.controls.density,gravity:this.gravity,poolWidth:t,poolHeight:n,poolLength:i},this.water),this.water.stepSimulation(t,i),this.water.stepSimulation(t,i),this.water.updateNormals(t,i),this.renderer.setWaterOptics(this.objects.optics)}}new M_().init();
