(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const to="182",Nc=0,Co=1,Oc=2,Kr=1,Bc=2,or=3,Xn=0,Bt=1,pn=2,An=0,Ui=1,Ro=2,Po=3,Uo=4,kc=5,ri=100,Gc=101,zc=102,Vc=103,Hc=104,Wc=200,Xc=201,Yc=202,qc=203,ta=204,na=205,jc=206,Kc=207,Zc=208,Jc=209,Qc=210,$c=211,eu=212,tu=213,nu=214,ia=0,ra=1,sa=2,Li=3,aa=4,oa=5,la=6,ca=7,kl=0,iu=1,ru=2,gn=0,Gl=1,zl=2,Vl=3,Hl=4,Wl=5,Xl=6,Yl=7,ql=300,ci=301,Ii=302,ua=303,ha=304,os=306,fa=1e3,bn=1001,da=1002,wt=1003,su=1004,br=1005,Et=1006,Ms=1007,ai=1008,jt=1009,jl=1010,Kl=1011,fr=1012,no=1013,vn=1014,an=1015,Rn=1016,io=1017,ro=1018,dr=1020,Zl=35902,Jl=35899,Ql=1021,$l=1022,on=1023,Pn=1026,oi=1027,so=1028,ao=1029,Fi=1030,oo=1031,lo=1033,Zr=33776,Jr=33777,Qr=33778,$r=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Sa=37496,Ma=37488,ya=37489,Ea=37490,Ta=37491,ba=37808,Aa=37809,wa=37810,Ca=37811,Ra=37812,Pa=37813,Ua=37814,Da=37815,La=37816,Ia=37817,Fa=37818,Na=37819,Oa=37820,Ba=37821,ka=36492,Ga=36494,za=36495,Va=36283,Ha=36284,Wa=36285,Xa=36286,au=3200,ou=3201,lu=0,cu=1,Hn="",qt="srgb",Ni="srgb-linear",rs="linear",lt="srgb",pi=7680,Do=519,uu=512,hu=513,fu=514,co=515,du=516,pu=517,uo=518,mu=519,Lo=35044,Ya="300 es",mn=2e3,ss=2001;function ec(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function as(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gu(){const s=as("canvas");return s.style.display="block",s}const Io={};function Fo(...s){const e="THREE."+s.shift();console.log(e,...s)}function qe(...s){const e="THREE."+s.shift();console.warn(e,...s)}function it(...s){const e="THREE."+s.shift();console.error(e,...s)}function pr(...s){const e=s.join(" ");e in Io||(Io[e]=!0,qe(...s))}function _u(s,e,t){return new Promise(function(r,n){function i(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,qa=180/Math.PI;function gr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function vu(s,e){return(s%e+e)%e}function Es(s,e,t){return(1-t)*s+t*e}function Ji(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let l=r[n+0],c=r[n+1],u=r[n+2],h=r[n+3],f=i[a+0],d=i[a+1],_=i[a+2],S=i[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=S;return}if(h!==S||l!==f||c!==d||u!==_){let g=l*f+c*d+u*_+h*S;g<0&&(f=-f,d=-d,_=-_,S=-S,g=-g);let m=1-o;if(g<.9995){const E=Math.acos(g),T=Math.sin(E);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T,l=l*m+f*o,c=c*m+d*o,u=u*m+_*o,h=h*m+S*o}else{l=l*m+f*o,c=c*m+d*o,u=u*m+_*o,h=h*m+S*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,i,a){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],h=i[a],f=i[a+1],d=i[a+2],_=i[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),h=o(i/2),f=l(r/2),d=l(n/2),_=l(i/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(a-n)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(i-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(a-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+a*o+n*c-i*l,this._y=n*u+a*l+i*o-r*c,this._z=i*u+a*c+r*l-n*o,this._w=a*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,n=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(r=-r,n=-n,i=-i,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+r*t,this._y=this._y*l+n*t,this._z=this._z*l+i*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+r*t,this._y=this._y*l+n*t,this._z=this._z*l+i*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(No.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(No.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*r),u=2*(o*t-i*n),h=2*(i*r-a*t);return this.x=t+l*c+a*h-o*u,this.y=r+l*u+o*c-i*h,this.z=n+l*h+i*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*a-r*l,this.z=r*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new se,No=new _r;class Ke{constructor(e,t,r,n,i,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c)}set(e,t,r,n,i,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],d=r[5],_=r[8],S=n[0],g=n[3],m=n[6],E=n[1],T=n[4],y=n[7],w=n[2],U=n[5],b=n[8];return i[0]=a*S+o*E+l*w,i[3]=a*g+o*T+l*U,i[6]=a*m+o*y+l*b,i[1]=c*S+u*E+h*w,i[4]=c*g+u*T+h*U,i[7]=c*m+u*y+h*b,i[2]=f*S+d*E+_*w,i[5]=f*g+d*T+_*U,i[8]=f*m+d*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-r*i*u+r*o*l+n*i*c-n*a*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*i,d=c*i-a*l,_=t*h+r*f+n*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(n*c-u*r)*S,e[2]=(o*r-n*a)*S,e[3]=f*S,e[4]=(u*t-n*l)*S,e[5]=(n*i-o*t)*S,e[6]=d*S,e[7]=(r*l-c*t)*S,e[8]=(a*t-r*i)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bs.makeScale(e,t)),this}rotate(e){return this.premultiply(bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bs=new Ke,Oo=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xu(){const s={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(n,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===lt&&(n.r=wn(n.r),n.g=wn(n.g),n.b=wn(n.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b))),n},workingToColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},colorSpaceToWorking:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?rs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,a){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,i){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,i)},toWorkingColorSpace:function(n,i){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ni]:{primaries:e,whitePoint:r,transfer:rs,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:r,transfer:lt,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),s}const tt=xu();function wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Di(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let mi;class Su{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mi===void 0&&(mi=as("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=mi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=wn(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wn(t[r]/255)*255):t[r]=wn(t[r]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mu=0;class ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(As(n[a].image)):i.push(As(n[a]))}else i=As(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function As(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let yu=0;const ws=new se;class Ut extends Bi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,r=bn,n=bn,i=Et,a=ai,o=on,l=jt,c=Ut.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=gr(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ws).x}get height(){return this.source.getSize(ws).y}get depth(){return this.source.getSize(ws).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ql;Ut.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,r=0,n=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(d+1)/2,w=(m+1)/2,U=(u+f)/4,b=(h+S)/4,M=(_+g)/4;return T>y&&T>w?T<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(T),n=U/r,i=b/r):y>w?y<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(y),r=U/n,i=M/n):w<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(w),r=b/i,n=M/i),this.set(r,n,i,t),this}let E=Math.sqrt((g-_)*(g-_)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(h-S)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eu extends Bi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const n={width:e,height:t,depth:r.depth},i=new Ut(n);this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Eu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class tc extends Ut{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends Ut{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(i,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ar.copy(r.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),wr.subVectors(this.max,Qi),gi.subVectors(e.a,Qi),_i.subVectors(e.b,Qi),vi.subVectors(e.c,Qi),On.subVectors(_i,gi),Bn.subVectors(vi,_i),Zn.subVectors(gi,vi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Zn.z,Zn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Zn.z,0,-Zn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Zn.y,Zn.x,0];return!Cs(t,gi,_i,vi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Cs(t,gi,_i,vi,wr))?!1:(Cr.crossVectors(On,Bn),t=[Cr.x,Cr.y,Cr.z],Cs(t,gi,_i,vi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new se,new se,new se,new se,new se,new se,new se,new se],en=new se,Ar=new Dn,gi=new se,_i=new se,vi=new se,On=new se,Bn=new se,Zn=new se,Qi=new se,wr=new se,Cr=new se,Jn=new se;function Cs(s,e,t,r,n){for(let i=0,a=s.length-3;i<=a;i+=3){Jn.fromArray(s,i);const o=n.x*Math.abs(Jn.x)+n.y*Math.abs(Jn.y)+n.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=r.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bu=new Dn,$i=new se,Rs=new se;class ki{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bu.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector($i,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Rs)),this.expandByPoint($i.copy(e.center).sub(Rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new se,Ps=new se,Rr=new se,kn=new se,Us=new se,Pr=new se,Ds=new se;class Au{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ps.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ps);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=kn.dot(this.direction),l=-kn.dot(Rr),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=i*u,h>=0)if(f>=-_)if(f<=_){const S=1/u;h*=S,f*=S,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*i+o)),f=h>0?-i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(h=Math.max(0,-(a*i+o)),f=h>0?i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c);else f=a>0?-i:i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ps).addScaledVector(Rr,f),d}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const r=Mn.dot(this.direction),n=Mn.dot(Mn)-r*r,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(i=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,r,n,i){Us.subVectors(t,e),Pr.subVectors(r,e),Ds.crossVectors(Us,Pr);let a=this.direction.dot(Ds),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(Pr.crossVectors(kn,Pr));if(l<0)return null;const c=o*this.direction.dot(Us.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(Ds);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,r,n,i,a,o,l,c,u,h,f,d,_,S,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c,u,h,f,d,_,S,g)}set(e,t,r,n,i,a,o,l,c,u,h,f,d,_,S,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,n=1/xi.setFromMatrixColumn(e,0).length(),i=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,S=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,S=c*h;t[0]=f+S*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,S=c*h;t[0]=f-S*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,S=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+S,t[1]=l*h,t[5]=S*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-S*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+S,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,Cu)}lookAt(e,t,r){const n=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Gn.crossVectors(r,Ht),Gn.lengthSq()===0&&(Math.abs(r.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Gn.crossVectors(r,Ht)),Gn.normalize(),Ur.crossVectors(Ht,Gn),n[0]=Gn.x,n[4]=Ur.x,n[8]=Ht.x,n[1]=Gn.y,n[5]=Ur.y,n[9]=Ht.y,n[2]=Gn.z,n[6]=Ur.z,n[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],d=r[13],_=r[2],S=r[6],g=r[10],m=r[14],E=r[3],T=r[7],y=r[11],w=r[15],U=n[0],b=n[4],M=n[8],p=n[12],v=n[1],D=n[5],A=n[9],I=n[13],F=n[2],X=n[6],O=n[10],k=n[14],K=n[3],W=n[7],Y=n[11],L=n[15];return i[0]=a*U+o*v+l*F+c*K,i[4]=a*b+o*D+l*X+c*W,i[8]=a*M+o*A+l*O+c*Y,i[12]=a*p+o*I+l*k+c*L,i[1]=u*U+h*v+f*F+d*K,i[5]=u*b+h*D+f*X+d*W,i[9]=u*M+h*A+f*O+d*Y,i[13]=u*p+h*I+f*k+d*L,i[2]=_*U+S*v+g*F+m*K,i[6]=_*b+S*D+g*X+m*W,i[10]=_*M+S*A+g*O+m*Y,i[14]=_*p+S*I+g*k+m*L,i[3]=E*U+T*v+y*F+w*K,i[7]=E*b+T*D+y*X+w*W,i[11]=E*M+T*A+y*O+w*Y,i[15]=E*p+T*I+y*k+w*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],S=e[7],g=e[11],m=e[15],E=l*d-c*f,T=o*d-c*h,y=o*f-l*h,w=a*d-c*u,U=a*f-l*u,b=a*h-o*u;return t*(S*E-g*T+m*y)-r*(_*E-g*w+m*U)+n*(_*T-S*w+m*b)-i*(_*y-S*U+g*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],S=e[13],g=e[14],m=e[15],E=h*g*c-S*f*c+S*l*d-o*g*d-h*l*m+o*f*m,T=_*f*c-u*g*c-_*l*d+a*g*d+u*l*m-a*f*m,y=u*S*c-_*h*c+_*o*d-a*S*d-u*o*m+a*h*m,w=_*h*l-u*S*l-_*o*f+a*S*f+u*o*g-a*h*g,U=t*E+r*T+n*y+i*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/U;return e[0]=E*b,e[1]=(S*f*i-h*g*i-S*n*d+r*g*d+h*n*m-r*f*m)*b,e[2]=(o*g*i-S*l*i+S*n*c-r*g*c-o*n*m+r*l*m)*b,e[3]=(h*l*i-o*f*i-h*n*c+r*f*c+o*n*d-r*l*d)*b,e[4]=T*b,e[5]=(u*g*i-_*f*i+_*n*d-t*g*d-u*n*m+t*f*m)*b,e[6]=(_*l*i-a*g*i-_*n*c+t*g*c+a*n*m-t*l*m)*b,e[7]=(a*f*i-u*l*i+u*n*c-t*f*c-a*n*d+t*l*d)*b,e[8]=y*b,e[9]=(_*h*i-u*S*i-_*r*d+t*S*d+u*r*m-t*h*m)*b,e[10]=(a*S*i-_*o*i+_*r*c-t*S*c-a*r*m+t*o*m)*b,e[11]=(u*o*i-a*h*i-u*r*c+t*h*c+a*r*d-t*o*d)*b,e[12]=w*b,e[13]=(u*S*n-_*h*n+_*r*f-t*S*f-u*r*g+t*h*g)*b,e[14]=(_*o*n-a*S*n-_*r*l+t*S*l+a*r*g-t*o*g)*b,e[15]=(a*h*n-u*o*n+u*r*l-t*h*l-a*r*f+t*o*f)*b,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,o=e.y,l=e.z,c=i*a,u=i*o;return this.set(c*a+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*a,0,c*l-n*o,u*l+n*a,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,u=a+a,h=o+o,f=i*c,d=i*u,_=i*h,S=a*u,g=a*h,m=o*h,E=l*c,T=l*u,y=l*h,w=r.x,U=r.y,b=r.z;return n[0]=(1-(S+m))*w,n[1]=(d+y)*w,n[2]=(_-T)*w,n[3]=0,n[4]=(d-y)*U,n[5]=(1-(f+m))*U,n[6]=(g+E)*U,n[7]=0,n[8]=(_+T)*b,n[9]=(g-E)*b,n[10]=(1-(f+S))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let i=xi.set(n[0],n[1],n[2]).length();const a=xi.set(n[4],n[5],n[6]).length(),o=xi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),tn.copy(this);const c=1/i,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),r.x=i,r.y=a,r.z=o,this}makePerspective(e,t,r,n,i,a,o=mn,l=!1){const c=this.elements,u=2*i/(t-e),h=2*i/(r-n),f=(t+e)/(t-e),d=(r+n)/(r-n);let _,S;if(l)_=i/(a-i),S=a*i/(a-i);else if(o===mn)_=-(a+i)/(a-i),S=-2*a*i/(a-i);else if(o===ss)_=-a/(a-i),S=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,n,i,a,o=mn,l=!1){const c=this.elements,u=2/(t-e),h=2/(r-n),f=-(t+e)/(t-e),d=-(r+n)/(r-n);let _,S;if(l)_=1/(a-i),S=a/(a-i);else if(o===mn)_=-2/(a-i),S=-(a+i)/(a-i);else if(o===ss)_=-1/(a-i),S=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const xi=new se,tn=new ft,wu=new se(0,0,0),Cu=new se(1,1,1),Gn=new se,Ur=new se,Ht=new se,ko=new ft,Go=new _r;class Un{constructor(e=0,t=0,r=0,n=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Go.setFromEuler(this),this.setFromQuaternion(Go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ru=0;const zo=new se,Si=new _r,yn=new ft,Dr=new se,er=new se,Pu=new se,Uu=new _r,Vo=new se(1,0,0),Ho=new se(0,1,0),Wo=new se(0,0,1),Xo={type:"added"},Du={type:"removed"},Mi={type:"childadded",child:null},Ls={type:"childremoved",child:null};class kt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new se,t=new Un,r=new _r,n=new se(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return zo.copy(e).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dr.copy(e):Dr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(er,Dr,this.up):yn.lookAt(Dr,er,this.up),this.quaternion.setFromRotationMatrix(yn),n&&(yn.extractRotation(n.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),_.length>0&&(r.nodes=_)}return r.object=n,r;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}kt.DEFAULT_UP=new se(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new se,En=new se,Is=new se,Tn=new se,yi=new se,Ei=new se,Yo=new se,Fs=new se,Ns=new se,Os=new se,Bs=new dt,ks=new dt,Gs=new dt;class sn{constructor(e=new se,t=new se,r=new se){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),nn.subVectors(e,t),n.cross(nn);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){nn.subVectors(n,t),En.subVectors(r,t),Is.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(En),l=nn.dot(Is),c=En.dot(En),u=En.dot(Is),h=a*c-o*o;if(h===0)return i.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return i.set(1-d-_,_,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,r,n,i,a,o,l){return this.getBarycoord(e,t,r,n,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,r,n,i,a){return Bs.setScalar(0),ks.setScalar(0),Gs.setScalar(0),Bs.fromBufferAttribute(e,t),ks.fromBufferAttribute(e,r),Gs.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Bs,i.x),a.addScaledVector(ks,i.y),a.addScaledVector(Gs,i.z),a}static isFrontFacing(e,t,r,n){return nn.subVectors(r,t),En.subVectors(e,t),nn.cross(En).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return sn.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let a,o;yi.subVectors(n,r),Ei.subVectors(i,r),Fs.subVectors(e,r);const l=yi.dot(Fs),c=Ei.dot(Fs);if(l<=0&&c<=0)return t.copy(r);Ns.subVectors(e,n);const u=yi.dot(Ns),h=Ei.dot(Ns);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(r).addScaledVector(yi,a);Os.subVectors(e,i);const d=yi.dot(Os),_=Ei.dot(Os);if(_>=0&&d<=_)return t.copy(i);const S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(r).addScaledVector(Ei,o);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return Yo.subVectors(i,n),o=(h-u)/(h-u+(d-_)),t.copy(n).addScaledVector(Yo,o);const m=1/(g+S+f);return a=S*m,o=f*m,t.copy(r).addScaledVector(yi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function zs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,tt.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=tt.workingColorSpace){if(e=vu(e,1),t=Qe(t,0,1),r=Qe(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=zs(a,i,e+1/3),this.g=zs(a,i,e),this.b=zs(a,i,e-1/3)}return tt.colorSpaceToWorking(this,n),this}setStyle(e,t=qt){function r(i){i!==void 0&&parseFloat(i)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const r=ic[e.toLowerCase()];return r!==void 0?this.setHex(r,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return tt.workingToColorSpace(Pt.copy(this),e),Math.round(Qe(Pt.r*255,0,255))*65536+Math.round(Qe(Pt.g*255,0,255))*256+Math.round(Qe(Pt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Pt.copy(this),t);const r=Pt.r,n=Pt.g,i=Pt.b,a=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case r:l=(n-i)/h+(n<i?6:0);break;case n:l=(i-r)/h+2;break;case i:l=(r-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=qt){tt.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,r=Pt.g,n=Pt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Lr);const r=Es(zn.h,Lr.h,t),n=Es(zn.s,Lr.s,t),i=Es(zn.l,Lr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new nt;nt.NAMES=ic;let Lu=0;class ls extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Ui,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(r.blending=this.blending),this.side!==Xn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ta&&(r.blendSrc=this.blendSrc),this.blendDst!==na&&(r.blendDst=this.blendDst),this.blendEquation!==ri&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fo extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new se,Ir=new rt;let Iu=0;class ln{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Lo,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ji(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ot(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class rc extends ln{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class sc extends ln{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Cn extends ln{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Fu=0;const Yt=new ft,Vs=new kt,Ti=new se,Wt=new Dn,tr=new Dn,yt=new se;class xn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ec(e)?sc:rc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Ke().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,r){return Yt.makeTranslation(e,t,r),this.applyMatrix4(Yt),this}scale(e,t,r){return Yt.makeScale(e,t,r),this.applyMatrix4(Yt),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Cn(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Wt.setFromBufferAttribute(i),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Wt.min,tr.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,tr.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(tr.min),Wt.expandByPoint(tr.max))}Wt.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)yt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(yt));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),yt.add(Ti)),n=Math.max(n,r.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let M=0;M<r.count;M++)o[M]=new se,l[M]=new se;const c=new se,u=new se,h=new se,f=new rt,d=new rt,_=new rt,S=new se,g=new se;function m(M,p,v){c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,p),h.fromBufferAttribute(r,v),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,p),_.fromBufferAttribute(i,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),o[M].add(S),o[p].add(S),o[v].add(S),l[M].add(g),l[p].add(g),l[v].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let M=0,p=E.length;M<p;++M){const v=E[M],D=v.start,A=v.count;for(let I=D,F=D+A;I<F;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const T=new se,y=new se,w=new se,U=new se;function b(M){w.fromBufferAttribute(n,M),U.copy(w);const p=o[M];T.copy(p),T.sub(w.multiplyScalar(w.dot(p))).normalize(),y.crossVectors(U,p);const D=y.dot(l[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,D)}for(let M=0,p=E.length;M<p;++M){const v=E[M],D=v.start,A=v.count;for(let I=D,F=D+A;I<F;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new se,i=new se,a=new se,o=new se,l=new se,c=new se,u=new se,h=new se;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);n.fromBufferAttribute(t,_),i.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,S),c.fromBufferAttribute(r,g),o.add(u),l.add(u),c.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(S,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new ln(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],h=i[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new ft,Qn=new Au,Fr=new ki,jo=new se,Nr=new se,Or=new se,Br=new se,Hs=new se,kr=new se,Ko=new se,Gr=new se;class Gt extends kt{constructor(e=new xn,t=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){kr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],h=i[l];u!==0&&(Hs.fromBufferAttribute(h,e),a?kr.addScaledVector(Hs,u):kr.addScaledVector(Hs.sub(t),u))}t.add(kr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fr.copy(r.boundingSphere),Fr.applyMatrix4(i),Qn.copy(e.ray).recast(e.near),!(Fr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Fr,jo)===null||Qn.origin.distanceToSquared(jo)>(e.far-e.near)**2))&&(qo.copy(i).invert(),Qn.copy(e.ray).applyMatrix4(qo),!(r.boundingBox!==null&&Qn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const g=f[_],m=a[g.materialIndex],E=Math.max(g.start,d.start),T=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,w=T;y<w;y+=3){const U=o.getX(y),b=o.getX(y+1),M=o.getX(y+2);n=zr(this,m,e,r,c,u,h,U,b,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=_,m=S;g<m;g+=3){const E=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);n=zr(this,a,e,r,c,u,h,E,T,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const g=f[_],m=a[g.materialIndex],E=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,w=T;y<w;y+=3){const U=y,b=y+1,M=y+2;n=zr(this,m,e,r,c,u,h,U,b,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=_,m=S;g<m;g+=3){const E=g,T=g+1,y=g+2;n=zr(this,a,e,r,c,u,h,E,T,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function Nu(s,e,t,r,n,i,a,o){let l;if(e.side===Bt?l=r.intersectTriangle(a,i,n,!0,o):l=r.intersectTriangle(n,i,a,e.side===Xn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:s}}function zr(s,e,t,r,n,i,a,o,l,c){s.getVertexPosition(o,Nr),s.getVertexPosition(l,Or),s.getVertexPosition(c,Br);const u=Nu(s,e,t,r,Nr,Or,Br,Ko);if(u){const h=new se;sn.getBarycoord(Ko,Nr,Or,Br,h),n&&(u.uv=sn.getInterpolatedAttribute(n,o,l,c,h,new rt)),i&&(u.uv1=sn.getInterpolatedAttribute(i,o,l,c,h,new rt)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,h,new se),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new se,materialIndex:0};sn.getNormal(Nr,Or,Br,f.normal),u.face=f,u.barycoord=h}return u}class vr extends xn{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};const o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,r,t,e,a,i,0),_("z","y","x",1,-1,r,t,-e,a,i,1),_("x","z","y",1,1,e,r,t,n,a,2),_("x","z","y",1,-1,e,r,-t,n,a,3),_("x","y","z",1,-1,e,t,r,n,i,4),_("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(h,2));function _(S,g,m,E,T,y,w,U,b,M,p){const v=y/b,D=w/M,A=y/2,I=w/2,F=U/2,X=b+1,O=M+1;let k=0,K=0;const W=new se;for(let Y=0;Y<O;Y++){const L=Y*D-I;for(let z=0;z<X;z++){const V=z*v-A;W[S]=V*E,W[g]=L*T,W[m]=F,c.push(W.x,W.y,W.z),W[S]=0,W[g]=0,W[m]=U>0?1:-1,u.push(W.x,W.y,W.z),h.push(z/b),h.push(1-Y/M),k+=1}}for(let Y=0;Y<M;Y++)for(let L=0;L<b;L++){const z=f+L+X*Y,V=f+L+X*(Y+1),ee=f+(L+1)+X*(Y+1),J=f+(L+1)+X*Y;l.push(z,V,J),l.push(V,ee,J),K+=6}o.addGroup(d,K,p),d+=K,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const n=s[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const r=Oi(s[t]);for(const n in r)e[n]=r[n]}return e}function Ou(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ac(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const oc={clone:Oi,merge:Lt};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class lc extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new se,Zo=new rt,Jo=new rt;class rn extends lc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Zo,Jo),t.subVectors(Jo,Zo)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*n/l,t-=a.offsetY*r/c,n*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Ai=1;class Gu extends kt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new rn(bi,Ai,e,t);n.layers=this.layers,this.add(n);const i=new rn(bi,Ai,e,t);i.layers=this.layers,this.add(i);const a=new rn(bi,Ai,e,t);a.layers=this.layers,this.add(a);const o=new rn(bi,Ai,e,t);o.layers=this.layers,this.add(o);const l=new rn(bi,Ai,e,t);l.layers=this.layers,this.add(l);const c=new rn(bi,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,l]=t;for(const c of t)this.remove(c);if(e===mn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=S,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class cc extends Ut{constructor(e=[],t=ci,r,n,i,a,o,l,c,u){super(e,t,r,n,i,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uc extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new cc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new vr(5,5,5),i=new cn({name:"CubemapFromEquirect",uniforms:Oi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bt,blending:An});i.uniforms.tEquirect.value=t;const a=new Gt(n,i),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=Et),new Gu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}}class Vr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zu={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,r),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Vr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Vu extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hc extends Ut{constructor(e=null,t=1,r=1,n,i,a,o,l,c=wt,u=wt,h,f){super(null,a,o,l,c,u,n,i,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja extends ln{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wi=new ft,Qo=new ft,Hr=[],$o=new Dn,Hu=new ft,nr=new Gt,ir=new ki;class Wu extends Gt{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,Hu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,wi),$o.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union($o)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,wi),ir.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,i=r.length+1,a=e*i+1;for(let o=0;o<r.length;o++)r[o]=n[a+o]}raycast(e,t){const r=this.matrixWorld,n=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(r),e.ray.intersectsSphere(ir)!==!1))for(let i=0;i<n;i++){this.getMatrixAt(i,wi),Qo.multiplyMatrices(r,wi),nr.matrixWorld=Qo,nr.raycast(e,Hr);for(let a=0,o=Hr.length;a<o;a++){const l=Hr[a];l.instanceId=i,l.object=this,t.push(l)}Hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new hc(new Float32Array(n*this.count),n,this.count,so,an));const i=this.morphTexture.source.data.data;let a=0;for(let c=0;c<r.length;c++)a+=r[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;i[l]=o,i.set(r,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xs=new se,Xu=new se,Yu=new Ke;class ii{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Xs.subVectors(r,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Xs),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Yu.getNormalMatrix(e),n=this.coplanarPoint(Xs).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ki,qu=new rt(.5,.5),Wr=new se;class fc{constructor(e=new ii,t=new ii,r=new ii,n=new ii,i=new ii,a=new ii){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=mn,r=!1){const n=this.planes,i=e.elements,a=i[0],o=i[1],l=i[2],c=i[3],u=i[4],h=i[5],f=i[6],d=i[7],_=i[8],S=i[9],g=i[10],m=i[11],E=i[12],T=i[13],y=i[14],w=i[15];if(n[0].setComponents(c-a,d-u,m-_,w-E).normalize(),n[1].setComponents(c+a,d+u,m+_,w+E).normalize(),n[2].setComponents(c+o,d+h,m+S,w+T).normalize(),n[3].setComponents(c-o,d-h,m-S,w-T).normalize(),r)n[4].setComponents(l,f,g,y).normalize(),n[5].setComponents(c-l,d-f,m-g,w-y).normalize();else if(n[4].setComponents(c-l,d-f,m-g,w-y).normalize(),t===mn)n[5].setComponents(c+l,d+f,m+g,w+y).normalize();else if(t===ss)n[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=qu.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Wr.x=n.normal.x>0?e.max.x:e.min.x,Wr.y=n.normal.y>0?e.max.y:e.min.y,Wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mr extends Ut{constructor(e,t,r=vn,n,i,a,o=wt,l=wt,c,u=Pn,h=1){if(u!==Pn&&u!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,n,i,a,o,l,u,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ju extends mr{constructor(e,t=vn,r=ci,n,i,a=wt,o=wt,l,c=Pn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,r,n,i,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dc extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yn extends xn{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,a=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],S=[],g=[];for(let m=0;m<u;m++){const E=m*f-a;for(let T=0;T<c;T++){const y=T*h-i;_.push(y,-E,0),S.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const T=E+c*m,y=E+c*(m+1),w=E+1+c*(m+1),U=E+1+c*m;d.push(T,y,U),d.push(y,w,U)}this.setIndex(d),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(S,3)),this.setAttribute("uv",new Cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ku extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pc extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mc extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class po extends lc{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,a=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zu extends xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ju extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function el(s,e,t,r){const n=Qu(r);switch(t){case Ql:return s*e;case so:return s*e/n.components*n.byteLength;case ao:return s*e/n.components*n.byteLength;case Fi:return s*e*2/n.components*n.byteLength;case oo:return s*e*2/n.components*n.byteLength;case $l:return s*e*3/n.components*n.byteLength;case on:return s*e*4/n.components*n.byteLength;case lo:return s*e*4/n.components*n.byteLength;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qr:case $r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ma:case _a:return Math.max(s,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(s,8)*Math.max(e,8)/2;case va:case xa:case Ma:case ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ea:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ka:case Ga:case za:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Va:case Ha:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qu(s){switch(s){case jt:case jl:return{byteLength:1,components:1};case fr:case Kl:case Rn:return{byteLength:2,components:1};case io:case ro:return{byteLength:2,components:4};case vn:case no:case an:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);function gc(){let s=null,e=!1,t=null,r=null;function n(i,a){t(i,a),r=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function $u(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],S=h[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const S=h[d];s.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:a}}var eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
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
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dh=`#ifdef USE_IRIDESCENCE
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
#endif`,ph=`#ifdef USE_BUMPMAP
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eh=`#define PI 3.141592653589793
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
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
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
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
#endif`,Qh=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,$h=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,kf=`float getShadowMask() {
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,ld=`#define DISTANCE
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
}`,cd=`#define DISTANCE
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
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
}`,dd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 diffuse;
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
}`,gd=`#define LAMBERT
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
}`,_d=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vd=`#define MATCAP
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
}`,xd=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,Md=`#define NORMAL
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
}`,yd=`#define PHONG
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
}`,Ed=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Td=`#define STANDARD
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
}`,bd=`#define STANDARD
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
}`,Ad=`#define TOON
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
}`,wd=`#define TOON
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
}`,Cd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Ud=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:eh,alphahash_pars_fragment:th,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:rh,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:lh,batching_vertex:ch,begin_vertex:uh,beginnormal_vertex:hh,bsdfs:fh,iridescence_fragment:dh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:_h,clipping_planes_vertex:vh,color_fragment:xh,color_pars_fragment:Sh,color_pars_vertex:Mh,color_vertex:yh,common:Eh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:bh,displacementmap_pars_vertex:Ah,displacementmap_vertex:wh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Rh,colorspace_fragment:Ph,colorspace_pars_fragment:Uh,envmap_fragment:Dh,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Ih,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Yh,envmap_vertex:Nh,fog_vertex:Oh,fog_pars_vertex:Bh,fog_fragment:kh,fog_pars_fragment:Gh,gradientmap_pars_fragment:zh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:qh,lights_toon_pars_fragment:jh,lights_phong_fragment:Kh,lights_phong_pars_fragment:Zh,lights_physical_fragment:Jh,lights_physical_pars_fragment:Qh,lights_fragment_begin:$h,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:uf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:ff,morphinstance_vertex:df,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:vf,normal_fragment_maps:xf,normal_pars_fragment:Sf,normal_pars_vertex:Mf,normal_vertex:yf,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:wf,opaque_fragment:Cf,packing:Rf,premultiplied_alpha_fragment:Pf,project_vertex:Uf,dithering_fragment:Df,dithering_pars_fragment:Lf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:kf,skinbase_vertex:Gf,skinning_pars_vertex:zf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:Yf,tonemapping_pars_fragment:qf,transmission_fragment:jf,transmission_pars_fragment:Kf,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:$f,background_vert:ed,background_frag:td,backgroundCube_vert:nd,backgroundCube_frag:id,cube_vert:rd,cube_frag:sd,depth_vert:ad,depth_frag:od,distance_vert:ld,distance_frag:cd,equirect_vert:ud,equirect_frag:hd,linedashed_vert:fd,linedashed_frag:dd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:gd,meshlambert_frag:_d,meshmatcap_vert:vd,meshmatcap_frag:xd,meshnormal_vert:Sd,meshnormal_frag:Md,meshphong_vert:yd,meshphong_frag:Ed,meshphysical_vert:Td,meshphysical_frag:bd,meshtoon_vert:Ad,meshtoon_frag:wd,points_vert:Cd,points_frag:Rd,shadow_vert:Pd,shadow_frag:Ud,sprite_vert:Dd,sprite_frag:Ld},Fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},dn={basic:{uniforms:Lt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Lt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Lt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Lt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Lt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Lt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Lt([Fe.points,Fe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Lt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Lt([Fe.common,Fe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Lt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Lt([Fe.sprite,Fe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Lt([Fe.common,Fe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Lt([Fe.lights,Fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};dn.physical={uniforms:Lt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Xr={r:0,b:0,g:0},ei=new Un,Id=new ft;function Fd(s,e,t,r,n,i,a){const o=new nt(0);let l=i===!0?0:1,c,u,h=null,f=0,d=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function S(T){let y=!1;const w=_(T);w===null?m(o,l):w&&w.isColor&&(m(w,1),y=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(T,y){const w=_(y);w&&(w.isCubeTexture||w.mapping===os)?(u===void 0&&(u=new Gt(new vr(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Oi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),ei.copy(y.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(ei)),u.material.toneMapped=tt.getTransfer(w.colorSpace)!==lt,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Gt(new Yn(2,2),new cn({name:"BackgroundMaterial",uniforms:Oi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(Xr,ac(s)),r.buffers.color.setClear(Xr.r,Xr.g,Xr.b,y,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:S,addToRenderList:g,dispose:E}}function Nd(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},n=f(null);let i=n,a=!1;function o(v,D,A,I,F){let X=!1;const O=h(I,A,D);i!==O&&(i=O,c(i.object)),X=d(v,I,A,F),X&&_(v,I,A,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(v,D,A,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,D,A){const I=A.wireframe===!0;let F=r[v.id];F===void 0&&(F={},r[v.id]=F);let X=F[D.id];X===void 0&&(X={},F[D.id]=X);let O=X[I];return O===void 0&&(O=f(l()),X[I]=O),O}function f(v){const D=[],A=[],I=[];for(let F=0;F<t;F++)D[F]=0,A[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:A,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,D,A,I){const F=i.attributes,X=D.attributes;let O=0;const k=A.getAttributes();for(const K in k)if(k[K].location>=0){const Y=F[K];let L=X[K];if(L===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(L=v.instanceColor)),Y===void 0||Y.attribute!==L||L&&Y.data!==L.data)return!0;O++}return i.attributesNum!==O||i.index!==I}function _(v,D,A,I){const F={},X=D.attributes;let O=0;const k=A.getAttributes();for(const K in k)if(k[K].location>=0){let Y=X[K];Y===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor));const L={};L.attribute=Y,Y&&Y.data&&(L.data=Y.data),F[K]=L,O++}i.attributes=F,i.attributesNum=O,i.index=I}function S(){const v=i.newAttributes;for(let D=0,A=v.length;D<A;D++)v[D]=0}function g(v){m(v,0)}function m(v,D){const A=i.newAttributes,I=i.enabledAttributes,F=i.attributeDivisors;A[v]=1,I[v]===0&&(s.enableVertexAttribArray(v),I[v]=1),F[v]!==D&&(s.vertexAttribDivisor(v,D),F[v]=D)}function E(){const v=i.newAttributes,D=i.enabledAttributes;for(let A=0,I=D.length;A<I;A++)D[A]!==v[A]&&(s.disableVertexAttribArray(A),D[A]=0)}function T(v,D,A,I,F,X,O){O===!0?s.vertexAttribIPointer(v,D,A,F,X):s.vertexAttribPointer(v,D,A,I,F,X)}function y(v,D,A,I){S();const F=I.attributes,X=A.getAttributes(),O=D.defaultAttributeValues;for(const k in X){const K=X[k];if(K.location>=0){let W=F[k];if(W===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),W!==void 0){const Y=W.normalized,L=W.itemSize,z=e.get(W);if(z===void 0)continue;const V=z.buffer,ee=z.type,J=z.bytesPerElement,B=ee===s.INT||ee===s.UNSIGNED_INT||W.gpuType===no;if(W.isInterleavedBufferAttribute){const G=W.data,q=G.stride,oe=W.offset;if(G.isInstancedInterleavedBuffer){for(let le=0;le<K.locationSize;le++)m(K.location+le,G.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<K.locationSize;le++)g(K.location+le);s.bindBuffer(s.ARRAY_BUFFER,V);for(let le=0;le<K.locationSize;le++)T(K.location+le,L/K.locationSize,ee,Y,q*J,(oe+L/K.locationSize*le)*J,B)}else{if(W.isInstancedBufferAttribute){for(let G=0;G<K.locationSize;G++)m(K.location+G,W.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let G=0;G<K.locationSize;G++)g(K.location+G);s.bindBuffer(s.ARRAY_BUFFER,V);for(let G=0;G<K.locationSize;G++)T(K.location+G,L/K.locationSize,ee,Y,L*J,L/K.locationSize*G*J,B)}}else if(O!==void 0){const Y=O[k];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(K.location,Y);break;case 3:s.vertexAttrib3fv(K.location,Y);break;case 4:s.vertexAttrib4fv(K.location,Y);break;default:s.vertexAttrib1fv(K.location,Y)}}}}E()}function w(){M();for(const v in r){const D=r[v];for(const A in D){const I=D[A];for(const F in I)u(I[F].object),delete I[F];delete D[A]}delete r[v]}}function U(v){if(r[v.id]===void 0)return;const D=r[v.id];for(const A in D){const I=D[A];for(const F in I)u(I[F].object),delete I[F];delete D[A]}delete r[v.id]}function b(v){for(const D in r){const A=r[D];if(A[v.id]===void 0)continue;const I=A[v.id];for(const F in I)u(I[F].object),delete I[F];delete A[v.id]}}function M(){p(),a=!0,i!==n&&(i=n,c(i.object))}function p(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:M,resetDefaultState:p,dispose:w,releaseStatesOfGeometry:U,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:g,disableUnusedAttributes:E}}function Od(s,e,t){let r;function n(c){r=c}function i(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(r,c,u,h),t.update(u,r,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,r,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=u[S]*f[S];t.update(_,r,1)}}this.setMode=n,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bd(s,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){return!(b!==on&&r.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const M=b===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==jt&&r.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==an&&!M)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:U}}function kd(s){const e=this;let t=null,r=0,n=!1,i=!1;const a=new ii,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||n;return n=f,r=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!n||_===null||_.length===0||i&&!g)i?u(null):c();else{const E=i?0:r,T=E*4;let y=m.clippingState||null;l.value=y,y=u(_,f,T,d);for(let w=0;w!==T;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,_){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const m=d+S*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,y=d;T!==S;++T,y+=4)a.copy(h[T]).applyMatrix4(E,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Gd(s){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=ci:o===ha&&(a.mapping=Ii),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Wn=4,tl=[.125,.215,.35,.446,.526,.582],si=20,zd=256,rr=new po,nl=new nt;let Ys=null,qs=0,js=0,Ks=!1;const Vd=new se;class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,n=100,i={}){const{size:a=256,position:o=Vd}=i;Ys=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys,qs,js),this._renderer.xr.enabled=Ks,e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Rn,format:on,colorSpace:Ni,depthBuffer:!1},n=rl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,r);const{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hd(i)),this._blurMaterial=Xd(i,e,t),this._ggxMaterial=Wd(i,e,t)}return n}_compileMaterial(e){const t=new Gt(new xn,e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,r,n,i){const l=new rn(90,1,t,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(nl),h.toneMapping=gn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new vr,new fo({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let m=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,m=!0):(g.color.copy(nl),m=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+u[T],i.y,i.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+u[T],i.z)):(l.up.set(0,c[T],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+u[T]));const w=this._cubeSize;Ci(n,y*w,T>2?w:0,w,w),h.setRenderTarget(n),m&&h.render(S,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===ci||e.mapping===Ii;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const i=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;const o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Ci(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,rr)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let i=1;i<n;i++)this._applyGGXFilter(e,i-1,i);t.autoClear=r}_applyGGXFilter(e,t,r){const n=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[r];o.material=a;const l=a.uniforms,c=r/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,S=this._sizeLods[r],g=3*S*(r>_-Wn?r-_+Wn:0),m=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Ci(i,g,m,3*S,2*S),n.setRenderTarget(i),n.render(o,rr),l.envMap.value=i.texture,l.roughness.value=0,l.mipInt.value=_-r,Ci(e,g,m,3*S,2*S),n.setRenderTarget(e),n.render(o,rr)}_blur(e,t,r,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[n];h.material=c;const f=c.uniforms,d=this._sizeLods[r]-1,_=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*si-1),S=i/_,g=isFinite(i)?1+Math.floor(u*S):si;g>si&&qe(`sigmaRadians, ${i}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${si}`);const m=[];let E=0;for(let b=0;b<si;++b){const M=b/S,p=Math.exp(-M*M/2);m.push(p),b===0?E+=p:b<g&&(E+=2*p)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-r;const y=this._sizeLods[n],w=3*y*(n>T-Wn?n-T+Wn:0),U=4*(this._cubeSize-y);Ci(t,w,U,3*y,2*y),l.setRenderTarget(t),l.render(h,rr)}}function Hd(s){const e=[],t=[],r=[];let n=s;const i=s-Wn+1+tl.length;for(let a=0;a<i;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Wn?l=tl[a-s+Wn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,S=3,g=2,m=1,E=new Float32Array(S*_*d),T=new Float32Array(g*_*d),y=new Float32Array(m*_*d);for(let U=0;U<d;U++){const b=U%3*2/3-1,M=U>2?0:-1,p=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];E.set(p,S*_*U),T.set(f,g*_*U);const v=[U,U,U,U,U,U];y.set(v,m*_*U)}const w=new xn;w.setAttribute("position",new ln(E,S)),w.setAttribute("uv",new ln(T,g)),w.setAttribute("faceIndex",new ln(y,m)),r.push(new Gt(w,null)),n>Wn&&n--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function rl(s,e,t){const r=new _n(s,e,t);return r.texture.mapping=os,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ci(s,e,t,r,n){s.viewport.set(e,t,r,n),s.scissor.set(e,t,r,n)}function Wd(s,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cs(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Xd(s,e,t){const r=new Float32Array(si),n=new se(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:cs(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function sl(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cs(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function al(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function cs(){return`

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
	`}function Yd(s){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===ua||l===ha,u=l===ci||l===Ii;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new il(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new il(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",i),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function qd(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const n=s.getExtension(r);return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&pr("WebGLRenderer: "+r+" extension not supported."),n}}}function jd(s,e,t,r){const n={},i=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let S=0;if(d!==null){const E=d.array;S=d.version;for(let T=0,y=E.length;T<y;T+=3){const w=E[T+0],U=E[T+1],b=E[T+2];f.push(w,U,U,b,b,w)}}else if(_!==void 0){const E=_.array;S=_.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const w=T+0,U=T+1,b=T+2;f.push(w,U,U,b,b,w)}}else return;const g=new(ec(f)?sc:rc)(f,1);g.version=S;const m=i.get(h);m&&e.remove(m),i.set(h,g)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return i.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Kd(s,e,t){let r;function n(f){r=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(r,d,i,f*a),t.update(d,r,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(r,d,i,f*a,_),t.update(d,r,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,f,0,_);let g=0;for(let m=0;m<_;m++)g+=d[m];t.update(g,r,1)}function h(f,d,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],S[m]);else{g.multiDrawElementsInstancedWEBGL(r,d,0,i,f,0,S,0,_);let m=0;for(let E=0;E<_;E++)m+=d[E]*S[E];t.update(m,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Zd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Jd(s,e,t){const r=new WeakMap,n=new dt;function i(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(o);if(f===void 0||f.count!==h){let p=function(){b.dispose(),r.delete(o),o.removeEventListener("dispose",p)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;d===!0&&(T=1),_===!0&&(T=2),S===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*w*4*h),b=new tc(U,y,w,h);b.type=an,b.needsUpdate=!0;const M=T*4;for(let v=0;v<h;v++){const D=g[v],A=m[v],I=E[v],F=y*w*4*v;for(let X=0;X<D.count;X++){const O=X*M;d===!0&&(n.fromBufferAttribute(D,X),U[F+O+0]=n.x,U[F+O+1]=n.y,U[F+O+2]=n.z,U[F+O+3]=0),_===!0&&(n.fromBufferAttribute(A,X),U[F+O+4]=n.x,U[F+O+5]=n.y,U[F+O+6]=n.z,U[F+O+7]=0),S===!0&&(n.fromBufferAttribute(I,X),U[F+O+8]=n.x,U[F+O+9]=n.y,U[F+O+10]=n.z,U[F+O+11]=I.itemSize===4?n.w:1)}}f={count:h,texture:b,size:new rt(y,w)},r.set(o,f),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:i}}function Qd(s,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:a}}const $d={[Gl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Vl]:"CINEON_TONE_MAPPING",[Hl]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function ep(s,e,t,r,n){const i=new _n(e,t,{type:s,depthBuffer:r,stencilBuffer:n}),a=new _n(e,t,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),o=new xn;o.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const l=new Ku({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Gt(o,l),u=new po(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,S=null,g=[],m=!1;this.setSize=function(E,T){i.setSize(E,T),a.setSize(E,T);for(let y=0;y<g.length;y++){const w=g[y];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){g=E,m=g.length>0&&g[0].isRenderPass===!0;const T=i.width,y=i.height;for(let w=0;w<g.length;w++){const U=g[w];U.setSize&&U.setSize(T,y)}},this.begin=function(E,T){if(d||E.toneMapping===gn&&g.length===0)return!1;if(S=T,T!==null){const y=T.width,w=T.height;(i.width!==y||i.height!==w)&&this.setSize(y,w)}return m===!1&&E.setRenderTarget(i),_=E.toneMapping,E.toneMapping=gn,!0},this.hasRenderPass=function(){return m},this.end=function(E,T){E.toneMapping=_,d=!0;let y=i,w=a;for(let U=0;U<g.length;U++){const b=g[U];if(b.enabled!==!1&&(b.render(E,w,y,T),b.needsSwap!==!1)){const M=y;y=w,w=M}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,l.defines={},tt.getTransfer(h)===lt&&(l.defines.SRGB_TRANSFER="");const U=$d[f];U&&(l.defines[U]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(S),E.render(c,u),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){i.dispose(),a.dispose(),o.dispose(),l.dispose()}}const _c=new Ut,Ka=new mr(1,1),vc=new tc,xc=new Tu,Sc=new cc,ol=[],ll=[],cl=new Float32Array(16),ul=new Float32Array(9),hl=new Float32Array(4);function Gi(s,e,t){const r=s[0];if(r<=0||r>0)return s;const n=e*t;let i=ol[n];if(i===void 0&&(i=new Float32Array(n),ol[n]=i),e!==0){r.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function us(s,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function tp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function sp(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,r))return;hl.set(r),s.uniformMatrix2fv(this.addr,!1,hl),St(t,r)}}function ap(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,r))return;ul.set(r),s.uniformMatrix3fv(this.addr,!1,ul),St(t,r)}}function op(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,r))return;cl.set(r),s.uniformMatrix4fv(this.addr,!1,cl),St(t,r)}}function lp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function fp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function gp(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n);let i;this.type===s.SAMPLER_2D_SHADOW?(Ka.compareFunction=t.isReversedDepthBuffer()?uo:co,i=Ka):i=_c,t.setTexture2D(e||i,n)}function _p(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||xc,n)}function vp(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Sc,n)}function xp(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||vc,n)}function Sp(s){switch(s){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return up;case 35669:case 35673:return hp;case 5125:return fp;case 36294:return dp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}function Mp(s,e){s.uniform1fv(this.addr,e)}function yp(s,e){const t=Gi(e,this.size,2);s.uniform2fv(this.addr,t)}function Ep(s,e){const t=Gi(e,this.size,3);s.uniform3fv(this.addr,t)}function Tp(s,e){const t=Gi(e,this.size,4);s.uniform4fv(this.addr,t)}function bp(s,e){const t=Gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ap(s,e){const t=Gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wp(s,e){const t=Gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Cp(s,e){s.uniform1iv(this.addr,e)}function Rp(s,e){s.uniform2iv(this.addr,e)}function Pp(s,e){s.uniform3iv(this.addr,e)}function Up(s,e){s.uniform4iv(this.addr,e)}function Dp(s,e){s.uniform1uiv(this.addr,e)}function Lp(s,e){s.uniform2uiv(this.addr,e)}function Ip(s,e){s.uniform3uiv(this.addr,e)}function Fp(s,e){s.uniform4uiv(this.addr,e)}function Np(s,e,t){const r=this.cache,n=e.length,i=us(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ka:a=_c;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,i[o])}function Op(s,e,t){const r=this.cache,n=e.length,i=us(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||xc,i[a])}function Bp(s,e,t){const r=this.cache,n=e.length,i=us(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Sc,i[a])}function kp(s,e,t){const r=this.cache,n=e.length,i=us(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||vc,i[a])}function Gp(s){switch(s){case 5126:return Mp;case 35664:return yp;case 35665:return Ep;case 35666:return Tp;case 35674:return bp;case 35675:return Ap;case 35676:return wp;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Up;case 5125:return Dp;case 36294:return Lp;case 36295:return Ip;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return kp}}class zp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Sp(t.type)}}class Vp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function fl(s,e){s.seq.push(e),s.map[e.id]=e}function Wp(s,e,t){const r=s.name,n=r.length;for(Zs.lastIndex=0;;){const i=Zs.exec(r),a=Zs.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){fl(t,c===void 0?new zp(o,s,e):new Vp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Hp(o),fl(t,h)),t=h}}}class es{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Wp(o,l,this)}const n=[],i=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):i.push(a);n.length>0&&(this.seq=n.concat(i))}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const a=e[n];a.id in t&&r.push(a)}return r}}function dl(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Xp=37297;let Yp=0;function qp(s,e){const t=s.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}const pl=new Ke;function jp(s){tt._getMatrix(pl,tt.workingColorSpace,s);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case rs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ml(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),i=(s.getShaderInfoLog(e)||"").trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+qp(s.getShaderSource(e),o)}else return i}function Kp(s,e){const t=jp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Zp={[Gl]:"Linear",[zl]:"Reinhard",[Vl]:"Cineon",[Hl]:"ACESFilmic",[Xl]:"AgX",[Yl]:"Neutral",[Wl]:"Custom"};function Jp(s,e){const t=Zp[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new se;function Qp(){tt.getLuminanceCoefficients(Yr);const s=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function em(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function tm(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=s.getActiveAttrib(e,n),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function lr(s){return s!==""}function gl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(s){return s.replace(nm,rm)}const im=new Map;function rm(s,e){let t=Je[e];if(t===void 0){const r=im.get(e);if(r!==void 0)t=Je[r],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Za(t)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(s){return s.replace(sm,am)}function am(s,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function xl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const om={[Kr]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function lm(s){return om[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cm={[ci]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE_UV"};function um(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cm[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hm={[Ii]:"ENVMAP_MODE_REFRACTION"};function fm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dm={[kl]:"ENVMAP_BLENDING_MULTIPLY",[iu]:"ENVMAP_BLENDING_MIX",[ru]:"ENVMAP_BLENDING_ADD"};function pm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":dm[s.combine]||"ENVMAP_BLENDING_NONE"}function mm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function gm(s,e,t,r){const n=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lm(t),c=um(t),u=fm(t),h=pm(t),f=mm(t),d=$p(t),_=em(i),S=n.createProgram();let g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(g=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Je.tonemapping_pars_fragment:"",t.toneMapping!==gn?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),Qp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Za(a),a=gl(a,t),a=_l(a,t),o=Za(o),o=gl(o,t),o=_l(o,t),a=vl(a),o=vl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=E+g+a,y=E+m+o,w=dl(n,n.VERTEX_SHADER,T),U=dl(n,n.FRAGMENT_SHADER,y);n.attachShader(S,w),n.attachShader(S,U),t.index0AttributeName!==void 0?n.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function b(D){if(s.debug.checkShaderErrors){const A=n.getProgramInfoLog(S)||"",I=n.getShaderInfoLog(w)||"",F=n.getShaderInfoLog(U)||"",X=A.trim(),O=I.trim(),k=F.trim();let K=!0,W=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,S,w,U);else{const Y=ml(n,w,"vertex"),L=ml(n,U,"fragment");it("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+Y+`
`+L)}else X!==""?qe("WebGLProgram: Program Info Log:",X):(O===""||k==="")&&(W=!1);W&&(D.diagnostics={runnable:K,programLog:X,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:m}})}n.deleteShader(w),n.deleteShader(U),M=new es(n,S),p=tm(n,S)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let p;this.getAttributes=function(){return p===void 0&&b(this),p};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(S,Xp)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=U,this}let _m=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xm(e),t.set(e,r)),r}}class xm{constructor(e){this.id=_m++,this.code=e,this.usedTimes=0}}function Sm(s,e,t,r,n,i,a){const o=new nc,l=new vm,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(p){return c.add(p),p===0?"uv":`uv${p}`}function g(p,v,D,A,I){const F=A.fog,X=I.geometry,O=p.isMeshStandardMaterial?A.environment:null,k=(p.isMeshStandardMaterial?t:e).get(p.envMap||O),K=k&&k.mapping===os?k.image.height:null,W=_[p.type];p.precision!==null&&(d=n.getMaxPrecision(p.precision),d!==p.precision&&qe("WebGLProgram.getParameters:",p.precision,"not supported, using",d,"instead."));const Y=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,L=Y!==void 0?Y.length:0;let z=0;X.morphAttributes.position!==void 0&&(z=1),X.morphAttributes.normal!==void 0&&(z=2),X.morphAttributes.color!==void 0&&(z=3);let V,ee,J,B;if(W){const Xe=dn[W];V=Xe.vertexShader,ee=Xe.fragmentShader}else V=p.vertexShader,ee=p.fragmentShader,l.update(p),J=l.getVertexShaderID(p),B=l.getFragmentShaderID(p);const G=s.getRenderTarget(),q=s.state.buffers.depth.getReversed(),oe=I.isInstancedMesh===!0,le=I.isBatchedMesh===!0,ne=!!p.map,ce=!!p.matcap,we=!!k,ye=!!p.aoMap,ge=!!p.lightMap,fe=!!p.bumpMap,Re=!!p.normalMap,P=!!p.displacementMap,Te=!!p.emissiveMap,Ae=!!p.metalnessMap,ue=!!p.roughnessMap,Se=p.anisotropy>0,C=p.clearcoat>0,x=p.dispersion>0,N=p.iridescence>0,$=p.sheen>0,Q=p.transmission>0,j=Se&&!!p.anisotropyMap,Me=C&&!!p.clearcoatMap,de=C&&!!p.clearcoatNormalMap,Ce=C&&!!p.clearcoatRoughnessMap,Pe=N&&!!p.iridescenceMap,he=N&&!!p.iridescenceThicknessMap,_e=$&&!!p.sheenColorMap,xe=$&&!!p.sheenRoughnessMap,Ue=!!p.specularMap,Ee=!!p.specularColorMap,We=!!p.specularIntensityMap,H=Q&&!!p.transmissionMap,me=Q&&!!p.thicknessMap,ve=!!p.gradientMap,Ie=!!p.alphaMap,pe=p.alphaTest>0,ae=!!p.alphaHash,be=!!p.extensions;let Oe=gn;p.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const Be={shaderID:W,shaderType:p.type,shaderName:p.name,vertexShader:V,fragmentShader:ee,defines:p.defines,customVertexShaderID:J,customFragmentShaderID:B,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:d,batching:le,batchingColor:le&&I._colorsTexture!==null,instancing:oe,instancingColor:oe&&I.instanceColor!==null,instancingMorph:oe&&I.morphTexture!==null,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ni,alphaToCoverage:!!p.alphaToCoverage,map:ne,matcap:ce,envMap:we,envMapMode:we&&k.mapping,envMapCubeUVHeight:K,aoMap:ye,lightMap:ge,bumpMap:fe,normalMap:Re,displacementMap:P,emissiveMap:Te,normalMapObjectSpace:Re&&p.normalMapType===cu,normalMapTangentSpace:Re&&p.normalMapType===lu,metalnessMap:Ae,roughnessMap:ue,anisotropy:Se,anisotropyMap:j,clearcoat:C,clearcoatMap:Me,clearcoatNormalMap:de,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:N,iridescenceMap:Pe,iridescenceThicknessMap:he,sheen:$,sheenColorMap:_e,sheenRoughnessMap:xe,specularMap:Ue,specularColorMap:Ee,specularIntensityMap:We,transmission:Q,transmissionMap:H,thicknessMap:me,gradientMap:ve,opaque:p.transparent===!1&&p.blending===Ui&&p.alphaToCoverage===!1,alphaMap:Ie,alphaTest:pe,alphaHash:ae,combine:p.combine,mapUv:ne&&S(p.map.channel),aoMapUv:ye&&S(p.aoMap.channel),lightMapUv:ge&&S(p.lightMap.channel),bumpMapUv:fe&&S(p.bumpMap.channel),normalMapUv:Re&&S(p.normalMap.channel),displacementMapUv:P&&S(p.displacementMap.channel),emissiveMapUv:Te&&S(p.emissiveMap.channel),metalnessMapUv:Ae&&S(p.metalnessMap.channel),roughnessMapUv:ue&&S(p.roughnessMap.channel),anisotropyMapUv:j&&S(p.anisotropyMap.channel),clearcoatMapUv:Me&&S(p.clearcoatMap.channel),clearcoatNormalMapUv:de&&S(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&S(p.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&S(p.iridescenceMap.channel),iridescenceThicknessMapUv:he&&S(p.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&S(p.sheenColorMap.channel),sheenRoughnessMapUv:xe&&S(p.sheenRoughnessMap.channel),specularMapUv:Ue&&S(p.specularMap.channel),specularColorMapUv:Ee&&S(p.specularColorMap.channel),specularIntensityMapUv:We&&S(p.specularIntensityMap.channel),transmissionMapUv:H&&S(p.transmissionMap.channel),thicknessMapUv:me&&S(p.thicknessMap.channel),alphaMapUv:Ie&&S(p.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Re||Se),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(ne||Ie),fog:!!F,useFog:p.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:q,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:z,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ne&&p.map.isVideoTexture===!0&&tt.getTransfer(p.map.colorSpace)===lt,decodeVideoTextureEmissive:Te&&p.emissiveMap.isVideoTexture===!0&&tt.getTransfer(p.emissiveMap.colorSpace)===lt,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===pn,flipSided:p.side===Bt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:be&&p.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&p.extensions.multiDraw===!0||le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(p){const v=[];if(p.shaderID?v.push(p.shaderID):(v.push(p.customVertexShaderID),v.push(p.customFragmentShaderID)),p.defines!==void 0)for(const D in p.defines)v.push(D),v.push(p.defines[D]);return p.isRawShaderMaterial===!1&&(E(v,p),T(v,p),v.push(s.outputColorSpace)),v.push(p.customProgramCacheKey),v.join()}function E(p,v){p.push(v.precision),p.push(v.outputColorSpace),p.push(v.envMapMode),p.push(v.envMapCubeUVHeight),p.push(v.mapUv),p.push(v.alphaMapUv),p.push(v.lightMapUv),p.push(v.aoMapUv),p.push(v.bumpMapUv),p.push(v.normalMapUv),p.push(v.displacementMapUv),p.push(v.emissiveMapUv),p.push(v.metalnessMapUv),p.push(v.roughnessMapUv),p.push(v.anisotropyMapUv),p.push(v.clearcoatMapUv),p.push(v.clearcoatNormalMapUv),p.push(v.clearcoatRoughnessMapUv),p.push(v.iridescenceMapUv),p.push(v.iridescenceThicknessMapUv),p.push(v.sheenColorMapUv),p.push(v.sheenRoughnessMapUv),p.push(v.specularMapUv),p.push(v.specularColorMapUv),p.push(v.specularIntensityMapUv),p.push(v.transmissionMapUv),p.push(v.thicknessMapUv),p.push(v.combine),p.push(v.fogExp2),p.push(v.sizeAttenuation),p.push(v.morphTargetsCount),p.push(v.morphAttributeCount),p.push(v.numDirLights),p.push(v.numPointLights),p.push(v.numSpotLights),p.push(v.numSpotLightMaps),p.push(v.numHemiLights),p.push(v.numRectAreaLights),p.push(v.numDirLightShadows),p.push(v.numPointLightShadows),p.push(v.numSpotLightShadows),p.push(v.numSpotLightShadowsWithMaps),p.push(v.numLightProbes),p.push(v.shadowMapType),p.push(v.toneMapping),p.push(v.numClippingPlanes),p.push(v.numClipIntersection),p.push(v.depthPacking)}function T(p,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),p.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),p.push(o.mask)}function y(p){const v=_[p.type];let D;if(v){const A=dn[v];D=oc.clone(A.uniforms)}else D=p.uniforms;return D}function w(p,v){let D=h.get(v);return D!==void 0?++D.usedTimes:(D=new gm(s,v,p,i),u.push(D),h.set(v,D)),D}function U(p){if(--p.usedTimes===0){const v=u.indexOf(p);u[v]=u[u.length-1],u.pop(),h.delete(p.cacheKey),p.destroy()}}function b(p){l.remove(p)}function M(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:U,releaseShaderCache:b,programs:u,dispose:M}}function Mm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function r(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function i(){s=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ml(){const s=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function a(h,f,d,_,S,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:S,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=S,m.group=g),e++,m}function o(h,f,d,_,S,g){const m=a(h,f,d,_,S,g);d.transmission>0?r.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,_,S,g){const m=a(h,f,d,_,S,g);d.transmission>0?r.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||ym),r.length>1&&r.sort(f||Sl),n.length>1&&n.sort(f||Sl)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function Em(){let s=new WeakMap;function e(r,n){const i=s.get(r);let a;return i===void 0?(a=new Ml,s.set(r,[a])):n>=i.length?(a=new Ml,i.push(a)):a=i[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new nt};break;case"SpotLight":t={position:new se,direction:new se,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=t,t}}}function bm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Am=0;function wm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cm(s){const e=new Tm,t=bm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new se);const n=new se,i=new ft,a=new ft;function o(c){let u=0,h=0,f=0;for(let p=0;p<9;p++)r.probe[p].set(0,0,0);let d=0,_=0,S=0,g=0,m=0,E=0,T=0,y=0,w=0,U=0,b=0;c.sort(wm);for(let p=0,v=c.length;p<v;p++){const D=c[p],A=D.color,I=D.intensity,F=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Fi?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=A.r*I,h+=A.g*I,f+=A.b*I;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],I);b++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,K=t.get(D);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.directionalShadow[d]=K,r.directionalShadowMap[d]=X,r.directionalShadowMatrix[d]=D.shadow.matrix,E++}r.directional[d]=O,d++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(A).multiplyScalar(I),O.distance=F,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[S]=O;const k=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,k.updateMatrices(D),D.castShadow&&U++),r.spotLightMatrix[S]=k.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.spotShadow[S]=K,r.spotShadowMap[S]=X,y++}S++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(A).multiplyScalar(I),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=O,g++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const k=D.shadow,K=t.get(D);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,r.pointShadow[_]=K,r.pointShadowMap[_]=X,r.pointShadowMatrix[_]=D.shadow.matrix,T++}r.point[_]=O,_++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(I),O.groundColor.copy(D.groundColor).multiplyScalar(I),r.hemi[m]=O,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=f;const M=r.hash;(M.directionalLength!==d||M.pointLength!==_||M.spotLength!==S||M.rectAreaLength!==g||M.hemiLength!==m||M.numDirectionalShadows!==E||M.numPointShadows!==T||M.numSpotShadows!==y||M.numSpotMaps!==w||M.numLightProbes!==b)&&(r.directional.length=d,r.spot.length=S,r.rectArea.length=g,r.point.length=_,r.hemi.length=m,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=y+w-U,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=b,M.directionalLength=d,M.pointLength=_,M.spotLength=S,M.rectAreaLength=g,M.hemiLength=m,M.numDirectionalShadows=E,M.numPointShadows=T,M.numSpotShadows=y,M.numSpotMaps=w,M.numLightProbes=b,r.version=Am++)}function l(c,u){let h=0,f=0,d=0,_=0,S=0;const g=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const T=c[m];if(T.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),h++}else if(T.isSpotLight){const y=r.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),d++}else if(T.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),a.identity(),i.copy(T.matrixWorld),i.premultiply(g),a.extractRotation(i),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=r.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const y=r.hemi[S];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:r}}function yl(s){const e=new Cm(s),t=[],r=[];function n(u){c.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function a(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function Rm(s){let e=new WeakMap;function t(n,i=0){const a=e.get(n);let o;return a===void 0?(o=new yl(s),e.set(n,[o])):i>=a.length?(o=new yl(s),a.push(o)):o=a[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`,Dm=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],Lm=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],El=new ft,sr=new se,Js=new se;function Im(s,e,t){let r=new fc;const n=new rt,i=new rt,a=new dt,o=new pc,l=new mc,c={},u=t.maxTextureSize,h={[Xn]:Bt,[Bt]:Xn,[pn]:pn},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Pm,fragmentShader:Um}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let m=this.type;this.render=function(U,b,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;U.type===Bc&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=Kr);const p=s.getRenderTarget(),v=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),A=s.state;A.setBlending(An),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const I=m!==this.type;I&&b.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(X=>X.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,X=U.length;F<X;F++){const O=U[F],k=O.shadow;if(k===void 0){qe("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const K=k.getFrameExtents();if(n.multiply(K),i.copy(k.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/K.x),n.x=i.x*K.x,k.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/K.y),n.y=i.y*K.y,k.mapSize.y=i.y)),k.map===null||I===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===or){if(O.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new _n(n.x,n.y,{format:Fi,type:Rn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new mr(n.x,n.y,an),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=Pn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt}else{O.isPointLight?(k.map=new uc(n.x),k.map.depthTexture=new ju(n.x,vn)):(k.map=new _n(n.x,n.y),k.map.depthTexture=new mr(n.x,n.y,vn)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=Pn;const Y=s.state.buffers.depth.getReversed();this.type===Kr?(k.map.depthTexture.compareFunction=Y?uo:co,k.map.depthTexture.minFilter=Et,k.map.depthTexture.magFilter=Et):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt)}k.camera.updateProjectionMatrix()}const W=k.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<W;Y++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,Y),s.clear();else{Y===0&&(s.setRenderTarget(k.map),s.clear());const L=k.getViewport(Y);a.set(i.x*L.x,i.y*L.y,i.x*L.z,i.y*L.w),A.viewport(a)}if(O.isPointLight){const L=k.camera,z=k.matrix,V=O.distance||L.far;V!==L.far&&(L.far=V,L.updateProjectionMatrix()),sr.setFromMatrixPosition(O.matrixWorld),L.position.copy(sr),Js.copy(L.position),Js.add(Dm[Y]),L.up.copy(Lm[Y]),L.lookAt(Js),L.updateMatrixWorld(),z.makeTranslation(-sr.x,-sr.y,-sr.z),El.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k._frustum.setFromProjectionMatrix(El,L.coordinateSystem,L.reversedDepth)}else k.updateMatrices(O);r=k.getFrustum(),y(b,M,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===or&&E(k,M),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(p,v,D)};function E(U,b){const M=e.update(S);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,d.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new _n(n.x,n.y,{format:Fi,type:Rn})),f.uniforms.shadow_pass.value=U.map.depthTexture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(b,null,M,f,S,null),d.uniforms.shadow_pass.value=U.mapPass.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(b,null,M,d,S,null)}function T(U,b,M,p){let v=null;const D=M.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)v=D;else if(v=M.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const A=v.uuid,I=b.uuid;let F=c[A];F===void 0&&(F={},c[A]=F);let X=F[I];X===void 0&&(X=v.clone(),F[I]=X,b.addEventListener("dispose",w)),v=X}if(v.visible=b.visible,v.wireframe=b.wireframe,p===or?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,M.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const A=s.properties.get(v);A.light=M}return v}function y(U,b,M,p,v){if(U.visible===!1)return;if(U.layers.test(b.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&v===or)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,U.matrixWorld);const I=e.update(U),F=U.material;if(Array.isArray(F)){const X=I.groups;for(let O=0,k=X.length;O<k;O++){const K=X[O],W=F[K.materialIndex];if(W&&W.visible){const Y=T(U,W,p,v);U.onBeforeShadow(s,U,b,M,I,Y,K),s.renderBufferDirect(M,null,I,Y,U,K),U.onAfterShadow(s,U,b,M,I,Y,K)}}}else if(F.visible){const X=T(U,F,p,v);U.onBeforeShadow(s,U,b,M,I,X,null),s.renderBufferDirect(M,null,I,X,U,null),U.onAfterShadow(s,U,b,M,I,X,null)}}const A=U.children;for(let I=0,F=A.length;I<F;I++)y(A[I],b,M,p,v)}function w(U){U.target.removeEventListener("dispose",w);for(const M in c){const p=c[M],v=U.target.uuid;v in p&&(p[v].dispose(),delete p[v])}}}const Fm={[ia]:ra,[sa]:la,[aa]:ca,[Li]:oa,[ra]:ia,[la]:sa,[ca]:aa,[oa]:Li};function Nm(s,e){function t(){let H=!1;const me=new dt;let ve=null;const Ie=new dt(0,0,0,0);return{setMask:function(pe){ve!==pe&&!H&&(s.colorMask(pe,pe,pe,pe),ve=pe)},setLocked:function(pe){H=pe},setClear:function(pe,ae,be,Oe,Be){Be===!0&&(pe*=Oe,ae*=Oe,be*=Oe),me.set(pe,ae,be,Oe),Ie.equals(me)===!1&&(s.clearColor(pe,ae,be,Oe),Ie.copy(me))},reset:function(){H=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,me=!1,ve=null,Ie=null,pe=null;return{setReversed:function(ae){if(me!==ae){const be=e.get("EXT_clip_control");ae?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),me=ae;const Oe=pe;pe=null,this.setClear(Oe)}},getReversed:function(){return me},setTest:function(ae){ae?G(s.DEPTH_TEST):q(s.DEPTH_TEST)},setMask:function(ae){ve!==ae&&!H&&(s.depthMask(ae),ve=ae)},setFunc:function(ae){if(me&&(ae=Fm[ae]),Ie!==ae){switch(ae){case ia:s.depthFunc(s.NEVER);break;case ra:s.depthFunc(s.ALWAYS);break;case sa:s.depthFunc(s.LESS);break;case Li:s.depthFunc(s.LEQUAL);break;case aa:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case la:s.depthFunc(s.GREATER);break;case ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ae}},setLocked:function(ae){H=ae},setClear:function(ae){pe!==ae&&(me&&(ae=1-ae),s.clearDepth(ae),pe=ae)},reset:function(){H=!1,ve=null,Ie=null,pe=null,me=!1}}}function n(){let H=!1,me=null,ve=null,Ie=null,pe=null,ae=null,be=null,Oe=null,Be=null;return{setTest:function(Xe){H||(Xe?G(s.STENCIL_TEST):q(s.STENCIL_TEST))},setMask:function(Xe){me!==Xe&&!H&&(s.stencilMask(Xe),me=Xe)},setFunc:function(Xe,ct,ut){(ve!==Xe||Ie!==ct||pe!==ut)&&(s.stencilFunc(Xe,ct,ut),ve=Xe,Ie=ct,pe=ut)},setOp:function(Xe,ct,ut){(ae!==Xe||be!==ct||Oe!==ut)&&(s.stencilOp(Xe,ct,ut),ae=Xe,be=ct,Oe=ut)},setLocked:function(Xe){H=Xe},setClear:function(Xe){Be!==Xe&&(s.clearStencil(Xe),Be=Xe)},reset:function(){H=!1,me=null,ve=null,Ie=null,pe=null,ae=null,be=null,Oe=null,Be=null}}}const i=new t,a=new r,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,S=!1,g=null,m=null,E=null,T=null,y=null,w=null,U=null,b=new nt(0,0,0),M=0,p=!1,v=null,D=null,A=null,I=null,F=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,k=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),O=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),O=k>=2);let W=null,Y={};const L=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),V=new dt().fromArray(L),ee=new dt().fromArray(z);function J(H,me,ve,Ie){const pe=new Uint8Array(4),ae=s.createTexture();s.bindTexture(H,ae),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<ve;be++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(me+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ae}const B={};B[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(s.DEPTH_TEST),a.setFunc(Li),fe(!1),Re(Co),G(s.CULL_FACE),ye(An);function G(H){u[H]!==!0&&(s.enable(H),u[H]=!0)}function q(H){u[H]!==!1&&(s.disable(H),u[H]=!1)}function oe(H,me){return h[H]!==me?(s.bindFramebuffer(H,me),h[H]=me,H===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=me),H===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=me),!0):!1}function le(H,me){let ve=d,Ie=!1;if(H){ve=f.get(me),ve===void 0&&(ve=[],f.set(me,ve));const pe=H.textures;if(ve.length!==pe.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,be=pe.length;ae<be;ae++)ve[ae]=s.COLOR_ATTACHMENT0+ae;ve.length=pe.length,Ie=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ve)}function ne(H){return _!==H?(s.useProgram(H),_=H,!0):!1}const ce={[ri]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[zc]:s.FUNC_REVERSE_SUBTRACT};ce[Vc]=s.MIN,ce[Hc]=s.MAX;const we={[Wc]:s.ZERO,[Xc]:s.ONE,[Yc]:s.SRC_COLOR,[ta]:s.SRC_ALPHA,[Qc]:s.SRC_ALPHA_SATURATE,[Zc]:s.DST_COLOR,[jc]:s.DST_ALPHA,[qc]:s.ONE_MINUS_SRC_COLOR,[na]:s.ONE_MINUS_SRC_ALPHA,[Jc]:s.ONE_MINUS_DST_COLOR,[Kc]:s.ONE_MINUS_DST_ALPHA,[$c]:s.CONSTANT_COLOR,[eu]:s.ONE_MINUS_CONSTANT_COLOR,[tu]:s.CONSTANT_ALPHA,[nu]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(H,me,ve,Ie,pe,ae,be,Oe,Be,Xe){if(H===An){S===!0&&(q(s.BLEND),S=!1);return}if(S===!1&&(G(s.BLEND),S=!0),H!==kc){if(H!==g||Xe!==p){if((m!==ri||y!==ri)&&(s.blendEquation(s.FUNC_ADD),m=ri,y=ri),Xe)switch(H){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFunc(s.ONE,s.ONE);break;case Po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:it("WebGLState: Invalid blending: ",H);break}else switch(H){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Po:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",H);break}E=null,T=null,w=null,U=null,b.set(0,0,0),M=0,g=H,p=Xe}return}pe=pe||me,ae=ae||ve,be=be||Ie,(me!==m||pe!==y)&&(s.blendEquationSeparate(ce[me],ce[pe]),m=me,y=pe),(ve!==E||Ie!==T||ae!==w||be!==U)&&(s.blendFuncSeparate(we[ve],we[Ie],we[ae],we[be]),E=ve,T=Ie,w=ae,U=be),(Oe.equals(b)===!1||Be!==M)&&(s.blendColor(Oe.r,Oe.g,Oe.b,Be),b.copy(Oe),M=Be),g=H,p=!1}function ge(H,me){H.side===pn?q(s.CULL_FACE):G(s.CULL_FACE);let ve=H.side===Bt;me&&(ve=!ve),fe(ve),H.blending===Ui&&H.transparent===!1?ye(An):ye(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),i.setMask(H.colorWrite);const Ie=H.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?G(s.SAMPLE_ALPHA_TO_COVERAGE):q(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(H){v!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),v=H)}function Re(H){H!==Nc?(G(s.CULL_FACE),H!==D&&(H===Co?s.cullFace(s.BACK):H===Oc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):q(s.CULL_FACE),D=H}function P(H){H!==A&&(O&&s.lineWidth(H),A=H)}function Te(H,me,ve){H?(G(s.POLYGON_OFFSET_FILL),(I!==me||F!==ve)&&(s.polygonOffset(me,ve),I=me,F=ve)):q(s.POLYGON_OFFSET_FILL)}function Ae(H){H?G(s.SCISSOR_TEST):q(s.SCISSOR_TEST)}function ue(H){H===void 0&&(H=s.TEXTURE0+X-1),W!==H&&(s.activeTexture(H),W=H)}function Se(H,me,ve){ve===void 0&&(W===null?ve=s.TEXTURE0+X-1:ve=W);let Ie=Y[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},Y[ve]=Ie),(Ie.type!==H||Ie.texture!==me)&&(W!==ve&&(s.activeTexture(ve),W=ve),s.bindTexture(H,me||B[H]),Ie.type=H,Ie.texture=me)}function C(){const H=Y[W];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function $(){try{s.texSubImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function Q(){try{s.texSubImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function de(){try{s.texStorage2D(...arguments)}catch(H){it("WebGLState:",H)}}function Ce(){try{s.texStorage3D(...arguments)}catch(H){it("WebGLState:",H)}}function Pe(){try{s.texImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function he(){try{s.texImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function _e(H){V.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),V.copy(H))}function xe(H){ee.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ee.copy(H))}function Ue(H,me){let ve=c.get(me);ve===void 0&&(ve=new WeakMap,c.set(me,ve));let Ie=ve.get(H);Ie===void 0&&(Ie=s.getUniformBlockIndex(me,H.name),ve.set(H,Ie))}function Ee(H,me){const Ie=c.get(me).get(H);l.get(me)!==Ie&&(s.uniformBlockBinding(me,Ie,H.__bindingPointIndex),l.set(me,Ie))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},W=null,Y={},h={},f=new WeakMap,d=[],_=null,S=!1,g=null,m=null,E=null,T=null,y=null,w=null,U=null,b=new nt(0,0,0),M=0,p=!1,v=null,D=null,A=null,I=null,F=null,V.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:G,disable:q,bindFramebuffer:oe,drawBuffers:le,useProgram:ne,setBlending:ye,setMaterial:ge,setFlipSided:fe,setCullFace:Re,setLineWidth:P,setPolygonOffset:Te,setScissorTest:Ae,activeTexture:ue,bindTexture:Se,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Pe,texImage3D:he,updateUBOMapping:Ue,uniformBlockBinding:Ee,texStorage2D:de,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:_e,viewport:xe,reset:We}}function Om(s,e,t,r,n,i,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return d?new OffscreenCanvas(C,x):as("canvas")}function S(C,x,N){let $=1;const Q=Se(C);if((Q.width>N||Q.height>N)&&($=N/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor($*Q.width),Me=Math.floor($*Q.height);h===void 0&&(h=_(j,Me));const de=x?_(j,Me):h;return de.width=j,de.height=Me,de.getContext("2d").drawImage(C,0,0,j,Me),qe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Me+")."),de}else return"data"in C&&qe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(C,x,N,$,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=x;if(x===s.RED&&(N===s.FLOAT&&(j=s.R32F),N===s.HALF_FLOAT&&(j=s.R16F),N===s.UNSIGNED_BYTE&&(j=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.R8UI),N===s.UNSIGNED_SHORT&&(j=s.R16UI),N===s.UNSIGNED_INT&&(j=s.R32UI),N===s.BYTE&&(j=s.R8I),N===s.SHORT&&(j=s.R16I),N===s.INT&&(j=s.R32I)),x===s.RG&&(N===s.FLOAT&&(j=s.RG32F),N===s.HALF_FLOAT&&(j=s.RG16F),N===s.UNSIGNED_BYTE&&(j=s.RG8)),x===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.RG8UI),N===s.UNSIGNED_SHORT&&(j=s.RG16UI),N===s.UNSIGNED_INT&&(j=s.RG32UI),N===s.BYTE&&(j=s.RG8I),N===s.SHORT&&(j=s.RG16I),N===s.INT&&(j=s.RG32I)),x===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.RGB8UI),N===s.UNSIGNED_SHORT&&(j=s.RGB16UI),N===s.UNSIGNED_INT&&(j=s.RGB32UI),N===s.BYTE&&(j=s.RGB8I),N===s.SHORT&&(j=s.RGB16I),N===s.INT&&(j=s.RGB32I)),x===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),N===s.UNSIGNED_INT&&(j=s.RGBA32UI),N===s.BYTE&&(j=s.RGBA8I),N===s.SHORT&&(j=s.RGBA16I),N===s.INT&&(j=s.RGBA32I)),x===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),x===s.RGBA){const Me=Q?rs:tt.getTransfer($);N===s.FLOAT&&(j=s.RGBA32F),N===s.HALF_FLOAT&&(j=s.RGBA16F),N===s.UNSIGNED_BYTE&&(j=Me===lt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(C,x){let N;return C?x===null||x===vn||x===dr?N=s.DEPTH24_STENCIL8:x===an?N=s.DEPTH32F_STENCIL8:x===fr&&(N=s.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vn||x===dr?N=s.DEPTH_COMPONENT24:x===an?N=s.DEPTH_COMPONENT32F:x===fr&&(N=s.DEPTH_COMPONENT16),N}function w(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==wt&&C.minFilter!==Et?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function U(C){const x=C.target;x.removeEventListener("dispose",U),M(x),x.isVideoTexture&&u.delete(x)}function b(C){const x=C.target;x.removeEventListener("dispose",b),v(x)}function M(C){const x=r.get(C);if(x.__webglInit===void 0)return;const N=C.source,$=f.get(N);if($){const Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&p(C),Object.keys($).length===0&&f.delete(N)}r.remove(C)}function p(C){const x=r.get(C);s.deleteTexture(x.__webglTexture);const N=C.source,$=f.get(N);delete $[x.__cacheKey],a.memory.textures--}function v(C){const x=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Q=0;Q<x.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)s.deleteFramebuffer(x.__webglFramebuffer[$]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let $=0,Q=N.length;$<Q;$++){const j=r.get(N[$]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),r.remove(N[$])}r.remove(C)}let D=0;function A(){D=0}function I(){const C=D;return C>=n.maxTextures&&qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function F(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function X(C,x){const N=r.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const $=C.image;if($===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{B(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function O(C,x){const N=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){B(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function k(C,x){const N=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){B(N,C,x);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function K(C,x){const N=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){G(N,C,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}const W={[fa]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},Y={[wt]:s.NEAREST,[su]:s.NEAREST_MIPMAP_NEAREST,[br]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[Ms]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},L={[uu]:s.NEVER,[mu]:s.ALWAYS,[hu]:s.LESS,[co]:s.LEQUAL,[fu]:s.EQUAL,[uo]:s.GEQUAL,[du]:s.GREATER,[pu]:s.NOTEQUAL};function z(C,x){if(x.type===an&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Et||x.magFilter===Ms||x.magFilter===br||x.magFilter===ai||x.minFilter===Et||x.minFilter===Ms||x.minFilter===br||x.minFilter===ai)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,W[x.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,W[x.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,W[x.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Y[x.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Y[x.minFilter]),x.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,L[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==br&&x.minFilter!==ai||x.type===an&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function V(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",U));const $=x.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const j=F(x);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[j].usedTimes++;const Me=Q[C.__cacheKey];Me!==void 0&&(Q[C.__cacheKey].usedTimes--,Me.usedTimes===0&&p(x)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return N}function ee(C,x,N){return Math.floor(Math.floor(C/N)/x)}function J(C,x,N,$){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,N,$,x.data);else{j.sort((he,_e)=>he.start-_e.start);let Me=0;for(let he=1;he<j.length;he++){const _e=j[Me],xe=j[he],Ue=_e.start+_e.count,Ee=ee(xe.start,x.width,4),We=ee(_e.start,x.width,4);xe.start<=Ue+1&&Ee===We&&ee(xe.start+xe.count-1,x.width,4)===Ee?_e.count=Math.max(_e.count,xe.start+xe.count-_e.start):(++Me,j[Me]=xe)}j.length=Me+1;const de=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let he=0,_e=j.length;he<_e;he++){const xe=j[he],Ue=Math.floor(xe.start/4),Ee=Math.ceil(xe.count/4),We=Ue%x.width,H=Math.floor(Ue/x.width),me=Ee,ve=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,We,H,me,ve,N,$,x.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,de),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function B(C,x,N){let $=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=s.TEXTURE_3D);const Q=V(C,x),j=x.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+N);const Me=r.get(j);if(j.version!==Me.__version||Q===!0){t.activeTexture(s.TEXTURE0+N);const de=tt.getPrimaries(tt.workingColorSpace),Ce=x.colorSpace===Hn?null:tt.getPrimaries(x.colorSpace),Pe=x.colorSpace===Hn||de===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let he=S(x.image,!1,n.maxTextureSize);he=ue(x,he);const _e=i.convert(x.format,x.colorSpace),xe=i.convert(x.type);let Ue=T(x.internalFormat,_e,xe,x.colorSpace,x.isVideoTexture);z($,x);let Ee;const We=x.mipmaps,H=x.isVideoTexture!==!0,me=Me.__version===void 0||Q===!0,ve=j.dataReady,Ie=w(x,he);if(x.isDepthTexture)Ue=y(x.format===oi,x.type),me&&(H?t.texStorage2D(s.TEXTURE_2D,1,Ue,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,_e,xe,null));else if(x.isDataTexture)if(We.length>0){H&&me&&t.texStorage2D(s.TEXTURE_2D,Ie,Ue,We[0].width,We[0].height);for(let pe=0,ae=We.length;pe<ae;pe++)Ee=We[pe],H?ve&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,_e,xe,Ee.data):t.texImage2D(s.TEXTURE_2D,pe,Ue,Ee.width,Ee.height,0,_e,xe,Ee.data);x.generateMipmaps=!1}else H?(me&&t.texStorage2D(s.TEXTURE_2D,Ie,Ue,he.width,he.height),ve&&J(x,he,_e,xe)):t.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,_e,xe,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ue,We[0].width,We[0].height,he.depth);for(let pe=0,ae=We.length;pe<ae;pe++)if(Ee=We[pe],x.format!==on)if(_e!==null)if(H){if(ve)if(x.layerUpdates.size>0){const be=el(Ee.width,Ee.height,x.format,x.type);for(const Oe of x.layerUpdates){const Be=Ee.data.subarray(Oe*be/Ee.data.BYTES_PER_ELEMENT,(Oe+1)*be/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,Oe,Ee.width,Ee.height,1,_e,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,he.depth,_e,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Ue,Ee.width,Ee.height,he.depth,0,Ee.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,he.depth,_e,xe,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,Ue,Ee.width,Ee.height,he.depth,0,_e,xe,Ee.data)}else{H&&me&&t.texStorage2D(s.TEXTURE_2D,Ie,Ue,We[0].width,We[0].height);for(let pe=0,ae=We.length;pe<ae;pe++)Ee=We[pe],x.format!==on?_e!==null?H?ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,_e,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,Ue,Ee.width,Ee.height,0,Ee.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,_e,xe,Ee.data):t.texImage2D(s.TEXTURE_2D,pe,Ue,Ee.width,Ee.height,0,_e,xe,Ee.data)}else if(x.isDataArrayTexture)if(H){if(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ue,he.width,he.height,he.depth),ve)if(x.layerUpdates.size>0){const pe=el(he.width,he.height,x.format,x.type);for(const ae of x.layerUpdates){const be=he.data.subarray(ae*pe/he.data.BYTES_PER_ELEMENT,(ae+1)*pe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,_e,xe,be)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,_e,xe,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,_e,xe,he.data);else if(x.isData3DTexture)H?(me&&t.texStorage3D(s.TEXTURE_3D,Ie,Ue,he.width,he.height,he.depth),ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,_e,xe,he.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,_e,xe,he.data);else if(x.isFramebufferTexture){if(me)if(H)t.texStorage2D(s.TEXTURE_2D,Ie,Ue,he.width,he.height);else{let pe=he.width,ae=he.height;for(let be=0;be<Ie;be++)t.texImage2D(s.TEXTURE_2D,be,Ue,pe,ae,0,_e,xe,null),pe>>=1,ae>>=1}}else if(We.length>0){if(H&&me){const pe=Se(We[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ue,pe.width,pe.height)}for(let pe=0,ae=We.length;pe<ae;pe++)Ee=We[pe],H?ve&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,_e,xe,Ee):t.texImage2D(s.TEXTURE_2D,pe,Ue,_e,xe,Ee);x.generateMipmaps=!1}else if(H){if(me){const pe=Se(he);t.texStorage2D(s.TEXTURE_2D,Ie,Ue,pe.width,pe.height)}ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,xe,he)}else t.texImage2D(s.TEXTURE_2D,0,Ue,_e,xe,he);g(x)&&m($),Me.__version=j.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function G(C,x,N){if(x.image.length!==6)return;const $=V(C,x),Q=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+N);const j=r.get(Q);if(Q.version!==j.__version||$===!0){t.activeTexture(s.TEXTURE0+N);const Me=tt.getPrimaries(tt.workingColorSpace),de=x.colorSpace===Hn?null:tt.getPrimaries(x.colorSpace),Ce=x.colorSpace===Hn||Me===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!Pe&&!he?_e[ae]=S(x.image[ae],!0,n.maxCubemapSize):_e[ae]=he?x.image[ae].image:x.image[ae],_e[ae]=ue(x,_e[ae]);const xe=_e[0],Ue=i.convert(x.format,x.colorSpace),Ee=i.convert(x.type),We=T(x.internalFormat,Ue,Ee,x.colorSpace),H=x.isVideoTexture!==!0,me=j.__version===void 0||$===!0,ve=Q.dataReady;let Ie=w(x,xe);z(s.TEXTURE_CUBE_MAP,x);let pe;if(Pe){H&&me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,We,xe.width,xe.height);for(let ae=0;ae<6;ae++){pe=_e[ae].mipmaps;for(let be=0;be<pe.length;be++){const Oe=pe[be];x.format!==on?Ue!==null?H?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,0,0,Oe.width,Oe.height,Ue,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,We,Oe.width,Oe.height,0,Oe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,0,0,Oe.width,Oe.height,Ue,Ee,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,We,Oe.width,Oe.height,0,Ue,Ee,Oe.data)}}}else{if(pe=x.mipmaps,H&&me){pe.length>0&&Ie++;const ae=Se(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Ue,Ee,_e[ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,_e[ae].width,_e[ae].height,0,Ue,Ee,_e[ae].data);for(let be=0;be<pe.length;be++){const Be=pe[be].image[ae].image;H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,0,0,Be.width,Be.height,Ue,Ee,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,We,Be.width,Be.height,0,Ue,Ee,Be.data)}}else{H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Ee,_e[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Ue,Ee,_e[ae]);for(let be=0;be<pe.length;be++){const Oe=pe[be];H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,0,0,Ue,Ee,Oe.image[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,We,Ue,Ee,Oe.image[ae])}}}g(x)&&m(s.TEXTURE_CUBE_MAP),j.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function q(C,x,N,$,Q,j){const Me=i.convert(N.format,N.colorSpace),de=i.convert(N.type),Ce=T(N.internalFormat,Me,de,N.colorSpace),Pe=r.get(x),he=r.get(N);if(he.__renderTarget=x,!Pe.__hasExternalTextures){const _e=Math.max(1,x.width>>j),xe=Math.max(1,x.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Ce,_e,xe,x.depth,0,Me,de,null):t.texImage2D(Q,j,Ce,_e,xe,0,Me,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Te(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,he.__webglTexture,0,P(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,he.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,C),x.depthBuffer){const $=x.depthTexture,Q=$&&$.isDepthTexture?$.type:null,j=y(x.stencilBuffer,Q),Me=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Te(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(x),j,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(x),j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,C)}else{const $=x.textures;for(let Q=0;Q<$.length;Q++){const j=$[Q],Me=i.convert(j.format,j.colorSpace),de=i.convert(j.type),Ce=T(j.internalFormat,Me,de,j.colorSpace);Te(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(x),Ce,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(x),Ce,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(C,x,N){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=r.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",U)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),z(s.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=i.convert(x.depthTexture.format),he=i.convert(x.depthTexture.type);let _e;x.depthTexture.format===Pn?_e=s.DEPTH_COMPONENT24:x.depthTexture.format===oi&&(_e=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_e,x.width,x.height,0,Pe,he,null)}}else X(x.depthTexture,0);const j=Q.__webglTexture,Me=P(x),de=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Ce=x.depthTexture.format===oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pn)Te(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,de,j,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,de,j,0);else if(x.depthTexture.format===oi)Te(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,de,j,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,de,j,0);else throw new Error("Unknown depthTexture format")}function ne(C){const x=r.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let $=0;$<6;$++)le(x.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?le(x.__webglFramebuffer[0],C,0):le(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=s.createRenderbuffer(),oe(x.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),oe(x.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(C,x,N){const $=r.get(C);x!==void 0&&q($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&ne(C)}function we(C){const x=C.texture,N=r.get(C),$=r.get(x);C.addEventListener("dispose",b);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=x.version,a.memory.textures++),j){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)N.__webglFramebuffer[de][Ce]=s.createFramebuffer()}else N.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[de]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Me)for(let de=0,Ce=Q.length;de<Ce;de++){const Pe=r.get(Q[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Te(C)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const Ce=Q[de];N.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const Pe=i.convert(Ce.format,Ce.colorSpace),he=i.convert(Ce.type),_e=T(Ce.internalFormat,Pe,he,Ce.colorSpace,C.isXRRenderTarget===!0),xe=P(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,_e,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,N.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),z(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)q(N.__webglFramebuffer[de][Ce],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else q(N.__webglFramebuffer[de],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let de=0,Ce=Q.length;de<Ce;de++){const Pe=Q[de],he=r.get(Pe);let _e=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,he.__webglTexture),z(_e,Pe),q(N.__webglFramebuffer,C,Pe,s.COLOR_ATTACHMENT0+de,_e,0),g(Pe)&&m(_e)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),z(de,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)q(N.__webglFramebuffer[Ce],C,x,s.COLOR_ATTACHMENT0,de,Ce);else q(N.__webglFramebuffer,C,x,s.COLOR_ATTACHMENT0,de,0);g(x)&&m(de),t.unbindTexture()}C.depthBuffer&&ne(C)}function ye(C){const x=C.textures;for(let N=0,$=x.length;N<$;N++){const Q=x[N];if(g(Q)){const j=E(C),Me=r.get(Q).__webglTexture;t.bindTexture(j,Me),m(j),t.unbindTexture()}}}const ge=[],fe=[];function Re(C){if(C.samples>0){if(Te(C)===!1){const x=C.textures,N=C.width,$=C.height;let Q=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(C),de=x.length>1;if(de)for(let Pe=0;Pe<x.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ce=C.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);const he=r.get(x[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,N,$,0,0,N,$,Q,s.NEAREST),l===!0&&(ge.length=0,fe.length=0,ge.push(s.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ge.push(j),fe.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Pe=0;Pe<x.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);const he=r.get(x[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,he,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function P(C){return Math.min(n.maxSamples,C.samples)}function Te(C){const x=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function ue(C,x){const N=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Ni&&N!==Hn&&(tt.getTransfer(N)===lt?($!==on||Q!==jt)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",N)),x}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bm(s,e){function t(r,n=Hn){let i;const a=tt.getTransfer(n);if(r===jt)return s.UNSIGNED_BYTE;if(r===io)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ro)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zl)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===jl)return s.BYTE;if(r===Kl)return s.SHORT;if(r===fr)return s.UNSIGNED_SHORT;if(r===no)return s.INT;if(r===vn)return s.UNSIGNED_INT;if(r===an)return s.FLOAT;if(r===Rn)return s.HALF_FLOAT;if(r===Ql)return s.ALPHA;if(r===$l)return s.RGB;if(r===on)return s.RGBA;if(r===Pn)return s.DEPTH_COMPONENT;if(r===oi)return s.DEPTH_STENCIL;if(r===so)return s.RED;if(r===ao)return s.RED_INTEGER;if(r===Fi)return s.RG;if(r===oo)return s.RG_INTEGER;if(r===lo)return s.RGBA_INTEGER;if(r===Zr||r===Jr||r===Qr||r===$r)if(a===lt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Zr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$r)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Zr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$r)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pa||r===ma||r===ga||r===_a)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===pa)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ma)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ga)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_a)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===va||r===xa||r===Sa||r===Ma||r===ya||r===Ea||r===Ta)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===va||r===xa)return a===lt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Sa)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ma)return i.COMPRESSED_R11_EAC;if(r===ya)return i.COMPRESSED_SIGNED_R11_EAC;if(r===Ea)return i.COMPRESSED_RG11_EAC;if(r===Ta)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ba||r===Aa||r===wa||r===Ca||r===Ra||r===Pa||r===Ua||r===Da||r===La||r===Ia||r===Fa||r===Na||r===Oa||r===Ba)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===ba)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Aa)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wa)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ca)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ra)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pa)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ua)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Da)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===La)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ia)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fa)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Na)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oa)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ba)return a===lt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ka||r===Ga||r===za)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===ka)return a===lt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ga)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===za)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Va||r===Ha||r===Wa||r===Xa)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Va)return i.COMPRESSED_RED_RGTC1_EXT;if(r===Ha)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wa)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xa)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gm=`
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

}`;class zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cn({vertexShader:km,fragmentShader:Gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Yn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vm extends Bi{constructor(e,t){super();const r=this;let n=null,i=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const S=typeof XRWebGLBinding<"u",g=new zm,m={},E=t.getContextAttributes();let T=null,y=null;const w=[],U=[],b=new rt;let M=null;const p=new rn;p.viewport=new dt;const v=new rn;v.viewport=new dt;const D=[p,v],A=new Ju;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=w[B];return G===void 0&&(G=new Ws,w[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=w[B];return G===void 0&&(G=new Ws,w[B]=G),G.getGripSpace()},this.getHand=function(B){let G=w[B];return G===void 0&&(G=new Ws,w[B]=G),G.getHandSpace()};function X(B){const G=U.indexOf(B.inputSource);if(G===-1)return;const q=w[G];q!==void 0&&(q.update(B.inputSource,B.frame,c||a),q.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",k);for(let B=0;B<w.length;B++){const G=U[B];G!==null&&(U[B]=null,w[B].disconnect(G))}I=null,F=null,g.reset();for(const B in m)delete m[B];e.setRenderTarget(T),d=null,f=null,h=null,n=null,y=null,J.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(b.width,b.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){i=B,r.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,r.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",O),n.addEventListener("inputsourceschange",k),E.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(b),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,oe=null,le=null;E.depth&&(le=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=E.stencil?oi:Pn,oe=E.stencil?dr:vn);const ne={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:i};h=this.getBinding(),f=h.createProjectionLayer(ne),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new _n(f.textureWidth,f.textureHeight,{format:on,type:jt,depthTexture:new mr(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const q={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,q),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new _n(d.framebufferWidth,d.framebufferHeight,{format:on,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),J.setContext(n),J.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(B){for(let G=0;G<B.removed.length;G++){const q=B.removed[G],oe=U.indexOf(q);oe>=0&&(U[oe]=null,w[oe].disconnect(q))}for(let G=0;G<B.added.length;G++){const q=B.added[G];let oe=U.indexOf(q);if(oe===-1){for(let ne=0;ne<w.length;ne++)if(ne>=U.length){U.push(q),oe=ne;break}else if(U[ne]===null){U[ne]=q,oe=ne;break}if(oe===-1)break}const le=w[oe];le&&le.connect(q)}}const K=new se,W=new se;function Y(B,G,q){K.setFromMatrixPosition(G.matrixWorld),W.setFromMatrixPosition(q.matrixWorld);const oe=K.distanceTo(W),le=G.projectionMatrix.elements,ne=q.projectionMatrix.elements,ce=le[14]/(le[10]-1),we=le[14]/(le[10]+1),ye=(le[9]+1)/le[5],ge=(le[9]-1)/le[5],fe=(le[8]-1)/le[0],Re=(ne[8]+1)/ne[0],P=ce*fe,Te=ce*Re,Ae=oe/(-fe+Re),ue=Ae*-fe;if(G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ue),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),le[10]===-1)B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Se=ce+Ae,C=we+Ae,x=P-ue,N=Te+(oe-ue),$=ye*we/C*Se,Q=ge*we/C*Se;B.projectionMatrix.makePerspective(x,N,$,Q,Se,C),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function L(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;let G=B.near,q=B.far;g.texture!==null&&(g.depthNear>0&&(G=g.depthNear),g.depthFar>0&&(q=g.depthFar)),A.near=v.near=p.near=G,A.far=v.far=p.far=q,(I!==A.near||F!==A.far)&&(n.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,F=A.far),A.layers.mask=B.layers.mask|6,p.layers.mask=A.layers.mask&3,v.layers.mask=A.layers.mask&5;const oe=B.parent,le=A.cameras;L(A,oe);for(let ne=0;ne<le.length;ne++)L(le[ne],oe);le.length===2?Y(A,p,v):A.projectionMatrix.copy(p.projectionMatrix),z(B,A,oe)};function z(B,G,q){q===null?B.matrix.copy(G.matrixWorld):(B.matrix.copy(q.matrixWorld),B.matrix.invert(),B.matrix.multiply(G.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=qa*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(B){return m[B]};let V=null;function ee(B,G){if(u=G.getViewerPose(c||a),_=G,u!==null){const q=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let oe=!1;q.length!==A.cameras.length&&(A.cameras.length=0,oe=!0);for(let we=0;we<q.length;we++){const ye=q[we];let ge=null;if(d!==null)ge=d.getViewport(ye);else{const Re=h.getViewSubImage(f,ye);ge=Re.viewport,we===0&&(e.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(y))}let fe=D[we];fe===void 0&&(fe=new rn,fe.layers.enable(we),fe.viewport=new dt,D[we]=fe),fe.matrix.fromArray(ye.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ye.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ge.x,ge.y,ge.width,ge.height),we===0&&(A.matrix.copy(fe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),oe===!0&&A.cameras.push(fe)}const le=n.enabledFeatures;if(le&&le.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){h=r.getBinding();const we=h.getDepthInformation(q[0]);we&&we.isValid&&we.texture&&g.init(we,n.renderState)}if(le&&le.includes("camera-access")&&S){e.state.unbindTexture(),h=r.getBinding();for(let we=0;we<q.length;we++){const ye=q[we].camera;if(ye){let ge=m[ye];ge||(ge=new dc,m[ye]=ge);const fe=h.getCameraImage(ye);ge.sourceTexture=fe}}}}for(let q=0;q<w.length;q++){const oe=U[q],le=w[q];oe!==null&&le!==void 0&&le.update(oe,G,c||a)}V&&V(B,G),G.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:G}),_=null}const J=new gc;J.setAnimationLoop(ee),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}const ti=new Un,Hm=new ft;function Wm(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function r(g,m){m.color.getRGB(g.fogColor.value,ac(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,E,T,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(g,m):m.isMeshToonMaterial?(i(g,m),h(g,m)):m.isMeshPhongMaterial?(i(g,m),u(g,m)):m.isMeshStandardMaterial?(i(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(i(g,m),_(g,m)):m.isMeshDepthMaterial?i(g,m):m.isMeshDistanceMaterial?(i(g,m),S(g,m)):m.isMeshNormalMaterial?i(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,E,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Bt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Bt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const E=e.get(m),T=E.envMap,y=E.envMapRotation;T&&(g.envMap.value=T,ti.copy(y),ti.x*=-1,ti.y*=-1,ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),g.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(ti)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){const E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Xm(s,e,t,r){let n={},i={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const y=T.program;r.uniformBlockBinding(E,y)}function c(E,T){let y=n[E.id];y===void 0&&(_(E),y=u(E),n[E.id]=y,E.addEventListener("dispose",g));const w=T.program;r.updateUBOMapping(E,w);const U=e.render.frame;i[E.id]!==U&&(f(E),i[E.id]=U)}function u(E){const T=h();E.__bindingPointIndex=T;const y=s.createBuffer(),w=E.__size,U=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=n[E.id],y=E.uniforms,w=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let U=0,b=y.length;U<b;U++){const M=Array.isArray(y[U])?y[U]:[y[U]];for(let p=0,v=M.length;p<v;p++){const D=M[p];if(d(D,U,p,w)===!0){const A=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let X=0;X<I.length;X++){const O=I[X],k=S(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,A+F,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,A,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,T,y,w){const U=E.value,b=T+"_"+y;if(w[b]===void 0)return typeof U=="number"||typeof U=="boolean"?w[b]=U:w[b]=U.clone(),!0;{const M=w[b];if(typeof U=="number"||typeof U=="boolean"){if(M!==U)return w[b]=U,!0}else if(M.equals(U)===!1)return M.copy(U),!0}return!1}function _(E){const T=E.uniforms;let y=0;const w=16;for(let b=0,M=T.length;b<M;b++){const p=Array.isArray(T[b])?T[b]:[T[b]];for(let v=0,D=p.length;v<D;v++){const A=p[v],I=Array.isArray(A.value)?A.value:[A.value];for(let F=0,X=I.length;F<X;F++){const O=I[F],k=S(O),K=y%w,W=K%k.boundary,Y=K+W;y+=W,Y!==0&&w-Y<k.storage&&(y+=w-Y),A.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,y+=k.storage}}}const U=y%w;return U>0&&(y+=w-U),E.__size=y,E.__cache={},this}function S(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",E),T}function g(E){const T=E.target;T.removeEventListener("dispose",g);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[T.id]),delete n[T.id],delete i[T.id]}function m(){for(const E in n)s.deleteBuffer(n[E]);a=[],n={},i={}}return{bind:l,update:c,dispose:m}}const Ym=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function qm(){return fn===null&&(fn=new hc(Ym,16,16,Fi,Rn),fn.name="DFG_LUT",fn.minFilter=Et,fn.magFilter=Et,fn.wrapS=bn,fn.wrapT=bn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class jm{constructor(e={}){const{canvas:t=gu(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=jt}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=a;const S=d,g=new Set([lo,oo,ao]),m=new Set([jt,vn,fr,dr,io,ro]),E=new Uint32Array(4),T=new Int32Array(4);let y=null,w=null;const U=[],b=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const p=this;let v=!1;this._outputColorSpace=qt;let D=0,A=0,I=null,F=-1,X=null;const O=new dt,k=new dt;let K=null;const W=new nt(0);let Y=0,L=t.width,z=t.height,V=1,ee=null,J=null;const B=new dt(0,0,L,z),G=new dt(0,0,L,z);let q=!1;const oe=new fc;let le=!1,ne=!1;const ce=new ft,we=new se,ye=new dt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Re(){return I===null?V:1}let P=r;function Te(R,Z){return t.getContext(R,Z)}try{const R={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),P===null){const Z="webgl2";if(P=Te(Z,R),P===null)throw Te(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw it("WebGLRenderer: "+R.message),R}let Ae,ue,Se,C,x,N,$,Q,j,Me,de,Ce,Pe,he,_e,xe,Ue,Ee,We,H,me,ve,Ie,pe;function ae(){Ae=new qd(P),Ae.init(),ve=new Bm(P,Ae),ue=new Bd(P,Ae,e,ve),Se=new Nm(P,Ae),ue.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),C=new Zd(P),x=new Mm,N=new Om(P,Ae,Se,x,ue,ve,C),$=new Gd(p),Q=new Yd(p),j=new $u(P),Ie=new Nd(P,j),Me=new jd(P,j,C,Ie),de=new Qd(P,Me,j,C),We=new Jd(P,ue,N),xe=new kd(x),Ce=new Sm(p,$,Q,Ae,ue,Ie,xe),Pe=new Wm(p,x),he=new Em,_e=new Rm(Ae),Ee=new Fd(p,$,Q,Se,de,_,l),Ue=new Im(p,de,ue),pe=new Xm(P,C,ue,Se),H=new Od(P,Ae,C),me=new Kd(P,Ae,C),C.programs=Ce.programs,p.capabilities=ue,p.extensions=Ae,p.properties=x,p.renderLists=he,p.shadowMap=Ue,p.state=Se,p.info=C}ae(),S!==jt&&(M=new ep(S,t.width,t.height,n,i));const be=new Vm(p,P);this.xr=be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=Ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(L,z,!1))},this.getSize=function(R){return R.set(L,z)},this.setSize=function(R,Z,re=!0){if(be.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,z=Z,t.width=Math.floor(R*V),t.height=Math.floor(Z*V),re===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(L*V,z*V).floor()},this.setDrawingBufferSize=function(R,Z,re){L=R,z=Z,V=re,t.width=Math.floor(R*re),t.height=Math.floor(Z*re),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(S===jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(B)},this.setViewport=function(R,Z,re,ie){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,Z,re,ie),Se.viewport(O.copy(B).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,Z,re,ie){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,Z,re,ie),Se.scissor(k.copy(G).multiplyScalar(V).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){Se.setScissorTest(q=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,re=!0){let ie=0;if(R){let te=!1;if(I!==null){const De=I.texture.format;te=g.has(De)}if(te){const De=I.texture.type,Ne=m.has(De),Le=Ee.getClearColor(),ke=Ee.getClearAlpha(),Ge=Le.r,Ye=Le.g,Ve=Le.b;Ne?(E[0]=Ge,E[1]=Ye,E[2]=Ve,E[3]=ke,P.clearBufferuiv(P.COLOR,0,E)):(T[0]=Ge,T[1]=Ye,T[2]=Ve,T[3]=ke,P.clearBufferiv(P.COLOR,0,T))}else ie|=P.COLOR_BUFFER_BIT}Z&&(ie|=P.DEPTH_BUFFER_BIT),re&&(ie|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Ee.dispose(),he.dispose(),_e.dispose(),x.dispose(),$.dispose(),Q.dispose(),de.dispose(),Ie.dispose(),pe.dispose(),Ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",Zt),be.removeEventListener("sessionend",un),Tt.stop()};function Oe(R){R.preventDefault(),Fo("WebGLRenderer: Context Lost."),v=!0}function Be(){Fo("WebGLRenderer: Context Restored."),v=!1;const R=C.autoReset,Z=Ue.enabled,re=Ue.autoUpdate,ie=Ue.needsUpdate,te=Ue.type;ae(),C.autoReset=R,Ue.enabled=Z,Ue.autoUpdate=re,Ue.needsUpdate=ie,Ue.type=te}function Xe(R){it("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ct(R){const Z=R.target;Z.removeEventListener("dispose",ct),ut(Z)}function ut(R){pt(R),x.remove(R)}function pt(R){const Z=x.get(R).programs;Z!==void 0&&(Z.forEach(function(re){Ce.releaseProgram(re)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,re,ie,te,De){Z===null&&(Z=ge);const Ne=te.isMesh&&te.matrixWorld.determinant()<0,Le=fs(R,Z,re,ie,te);Se.setMaterial(ie,Ne);let ke=re.index,Ge=1;if(ie.wireframe===!0){if(ke=Me.getWireframeAttribute(re),ke===void 0)return;Ge=2}const Ye=re.drawRange,Ve=re.attributes.position;let Ze=Ye.start*Ge,$e=(Ye.start+Ye.count)*Ge;De!==null&&(Ze=Math.max(Ze,De.start*Ge),$e=Math.min($e,(De.start+De.count)*Ge)),ke!==null?(Ze=Math.max(Ze,0),$e=Math.min($e,ke.count)):Ve!=null&&(Ze=Math.max(Ze,0),$e=Math.min($e,Ve.count));const ht=$e-Ze;if(ht<0||ht===1/0)return;Ie.setup(te,ie,Le,re,ke);let ot,st=H;if(ke!==null&&(ot=j.get(ke),st=me,st.setIndex(ot)),te.isMesh)ie.wireframe===!0?(Se.setLineWidth(ie.wireframeLinewidth*Re()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(te.isLine){let He=ie.linewidth;He===void 0&&(He=1),Se.setLineWidth(He*Re()),te.isLineSegments?st.setMode(P.LINES):te.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else te.isPoints?st.setMode(P.POINTS):te.isSprite&&st.setMode(P.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))st.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const He=te._multiDrawStarts,et=te._multiDrawCounts,je=te._multiDrawCount,Dt=ke?j.get(ke).bytesPerElement:1,Jt=x.get(ie).currentProgram.getUniforms();for(let _t=0;_t<je;_t++)Jt.setValue(P,"_gl_DrawID",_t),st.render(He[_t]/Dt,et[_t])}else if(te.isInstancedMesh)st.renderInstances(Ze,ht,te.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,et=Math.min(re.instanceCount,He);st.renderInstances(Ze,ht,et)}else st.render(Ze,ht)};function It(R,Z,re){R.transparent===!0&&R.side===pn&&R.forceSinglePass===!1?(R.side=Bt,R.needsUpdate=!0,qn(R,Z,re),R.side=Xn,R.needsUpdate=!0,qn(R,Z,re),R.side=pn):qn(R,Z,re)}this.compile=function(R,Z,re=null){re===null&&(re=R),w=_e.get(re),w.init(Z),b.push(w),re.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),R!==re&&R.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),w.setupLights();const ie=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let Ne=0;Ne<De.length;Ne++){const Le=De[Ne];It(Le,re,te),ie.add(Le)}else It(De,re,te),ie.add(De)}),w=b.pop(),ie},this.compileAsync=function(R,Z,re=null){const ie=this.compile(R,Z,re);return new Promise(te=>{function De(){if(ie.forEach(function(Ne){x.get(Ne).currentProgram.isReady()&&ie.delete(Ne)}),ie.size===0){te(R);return}setTimeout(De,10)}Ae.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Xt=null;function Kt(R){Xt&&Xt(R)}function Zt(){Tt.stop()}function un(){Tt.start()}const Tt=new gc;Tt.setAnimationLoop(Kt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(R){Xt=R,be.setAnimationLoop(R),R===null?Tt.stop():Tt.start()},be.addEventListener("sessionstart",Zt),be.addEventListener("sessionend",un),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;const re=be.enabled===!0&&be.isPresenting===!0,ie=M!==null&&(I===null||re)&&M.begin(p,I);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(Z),Z=be.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,Z,I),w=_e.get(R,b.length),w.init(Z),b.push(w),ce.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),oe.setFromProjectionMatrix(ce,mn,Z.reversedDepth),ne=this.localClippingEnabled,le=xe.init(this.clippingPlanes,ne),y=he.get(R,U.length),y.init(),U.push(y),be.enabled===!0&&be.isPresenting===!0){const Ne=p.xr.getDepthSensingMesh();Ne!==null&&gt(Ne,Z,-1/0,p.sortObjects)}gt(R,Z,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(ee,J),fe=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,fe&&Ee.addToRenderList(y,R),this.info.render.frame++,le===!0&&xe.beginShadows();const te=w.state.shadowsArray;if(Ue.render(te,R,Z),le===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&M.hasRenderPass())===!1){const Ne=y.opaque,Le=y.transmissive;if(w.setupLights(),Z.isArrayCamera){const ke=Z.cameras;if(Le.length>0)for(let Ge=0,Ye=ke.length;Ge<Ye;Ge++){const Ve=ke[Ge];Vi(Ne,Le,R,Ve)}fe&&Ee.render(R);for(let Ge=0,Ye=ke.length;Ge<Ye;Ge++){const Ve=ke[Ge];hn(y,R,Ve,Ve.viewport)}}else Le.length>0&&Vi(Ne,Le,R,Z),fe&&Ee.render(R),hn(y,R,Z)}I!==null&&A===0&&(N.updateMultisampleRenderTarget(I),N.updateRenderTargetMipmap(I)),ie&&M.end(p),R.isScene===!0&&R.onAfterRender(p,R,Z),Ie.resetDefaultState(),F=-1,X=null,b.pop(),b.length>0?(w=b[b.length-1],le===!0&&xe.setGlobalState(p.clippingPlanes,w.state.camera)):w=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function gt(R,Z,re,ie){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){ie&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);const Ne=de.update(R),Le=R.material;Le.visible&&y.push(R,Ne,Le,re,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const Ne=de.update(R),Le=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ye.copy(Ne.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(Le)){const ke=Ne.groups;for(let Ge=0,Ye=ke.length;Ge<Ye;Ge++){const Ve=ke[Ge],Ze=Le[Ve.materialIndex];Ze&&Ze.visible&&y.push(R,Ne,Ze,re,ye.z,Ve)}}else Le.visible&&y.push(R,Ne,Le,re,ye.z,null)}}const De=R.children;for(let Ne=0,Le=De.length;Ne<Le;Ne++)gt(De[Ne],Z,re,ie)}function hn(R,Z,re,ie){const{opaque:te,transmissive:De,transparent:Ne}=R;w.setupLightsView(re),le===!0&&xe.setGlobalState(p.clippingPlanes,re),ie&&Se.viewport(O.copy(ie)),te.length>0&&Ln(te,Z,re),De.length>0&&Ln(De,Z,re),Ne.length>0&&Ln(Ne,Z,re),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Vi(R,Z,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ie.id]===void 0){const Ze=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ie.id]=new _n(1,1,{generateMipmaps:!0,type:Ze?Rn:jt,minFilter:ai,samples:ue.samples,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const De=w.state.transmissionRenderTarget[ie.id],Ne=ie.viewport||O;De.setSize(Ne.z*p.transmissionResolutionScale,Ne.w*p.transmissionResolutionScale);const Le=p.getRenderTarget(),ke=p.getActiveCubeFace(),Ge=p.getActiveMipmapLevel();p.setRenderTarget(De),p.getClearColor(W),Y=p.getClearAlpha(),Y<1&&p.setClearColor(16777215,.5),p.clear(),fe&&Ee.render(re);const Ye=p.toneMapping;p.toneMapping=gn;const Ve=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),w.setupLightsView(ie),le===!0&&xe.setGlobalState(p.clippingPlanes,ie),Ln(R,re,ie),N.updateMultisampleRenderTarget(De),N.updateRenderTargetMipmap(De),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let $e=0,ht=Z.length;$e<ht;$e++){const ot=Z[$e],{object:st,geometry:He,material:et,group:je}=ot;if(et.side===pn&&st.layers.test(ie.layers)){const Dt=et.side;et.side=Bt,et.needsUpdate=!0,xr(st,re,ie,He,et,je),et.side=Dt,et.needsUpdate=!0,Ze=!0}}Ze===!0&&(N.updateMultisampleRenderTarget(De),N.updateRenderTargetMipmap(De))}p.setRenderTarget(Le,ke,Ge),p.setClearColor(W,Y),Ve!==void 0&&(ie.viewport=Ve),p.toneMapping=Ye}function Ln(R,Z,re){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let te=0,De=R.length;te<De;te++){const Ne=R[te],{object:Le,geometry:ke,group:Ge}=Ne;let Ye=Ne.material;Ye.allowOverride===!0&&ie!==null&&(Ye=ie),Le.layers.test(re.layers)&&xr(Le,Z,re,ke,Ye,Ge)}}function xr(R,Z,re,ie,te,De){R.onBeforeRender(p,Z,re,ie,te,De),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(p,Z,re,ie,R,De),te.transparent===!0&&te.side===pn&&te.forceSinglePass===!1?(te.side=Bt,te.needsUpdate=!0,p.renderBufferDirect(re,Z,ie,te,R,De),te.side=Xn,te.needsUpdate=!0,p.renderBufferDirect(re,Z,ie,te,R,De),te.side=pn):p.renderBufferDirect(re,Z,ie,te,R,De),R.onAfterRender(p,Z,re,ie,te,De)}function qn(R,Z,re){Z.isScene!==!0&&(Z=ge);const ie=x.get(R),te=w.state.lights,De=w.state.shadowsArray,Ne=te.state.version,Le=Ce.getParameters(R,te.state,De,Z,re),ke=Ce.getProgramCacheKey(Le);let Ge=ie.programs;ie.environment=R.isMeshStandardMaterial?Z.environment:null,ie.fog=Z.fog,ie.envMap=(R.isMeshStandardMaterial?Q:$).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",ct),Ge=new Map,ie.programs=Ge);let Ye=Ge.get(ke);if(Ye!==void 0){if(ie.currentProgram===Ye&&ie.lightsStateVersion===Ne)return ui(R,Le),Ye}else Le.uniforms=Ce.getUniforms(R),R.onBeforeCompile(Le,p),Ye=Ce.acquireProgram(Le,ke),Ge.set(ke,Ye),ie.uniforms=Le.uniforms;const Ve=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=xe.uniform),ui(R,Le),ie.needsLights=hi(R),ie.lightsStateVersion=Ne,ie.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.directionalShadowMap.value=te.state.directionalShadowMap,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotShadowMap.value=te.state.spotShadowMap,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMap.value=te.state.pointShadowMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=Ye,ie.uniformsList=null,Ye}function jn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=es.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ui(R,Z){const re=x.get(R);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function fs(R,Z,re,ie,te){Z.isScene!==!0&&(Z=ge),N.resetTextureUnits();const De=Z.fog,Ne=ie.isMeshStandardMaterial?Z.environment:null,Le=I===null?p.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ni,ke=(ie.isMeshStandardMaterial?Q:$).get(ie.envMap||Ne),Ge=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!re.morphAttributes.position,Ze=!!re.morphAttributes.normal,$e=!!re.morphAttributes.color;let ht=gn;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ht=p.toneMapping);const ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=ot!==void 0?ot.length:0,He=x.get(ie),et=w.state.lights;if(le===!0&&(ne===!0||R!==X)){const Mt=R===X&&ie.id===F;xe.setState(ie,R,Mt)}let je=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==et.state.version||He.outputColorSpace!==Le||te.isBatchedMesh&&He.batching===!1||!te.isBatchedMesh&&He.batching===!0||te.isBatchedMesh&&He.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&He.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&He.instancing===!1||!te.isInstancedMesh&&He.instancing===!0||te.isSkinnedMesh&&He.skinning===!1||!te.isSkinnedMesh&&He.skinning===!0||te.isInstancedMesh&&He.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&He.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&He.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&He.instancingMorph===!1&&te.morphTexture!==null||He.envMap!==ke||ie.fog===!0&&He.fog!==De||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==xe.numPlanes||He.numIntersection!==xe.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Ye||He.morphTargets!==Ve||He.morphNormals!==Ze||He.morphColors!==$e||He.toneMapping!==ht||He.morphTargetsCount!==st)&&(je=!0):(je=!0,He.__version=ie.version);let Dt=He.currentProgram;je===!0&&(Dt=qn(ie,Z,te));let Jt=!1,_t=!1,In=!1;const at=Dt.getUniforms(),vt=He.uniforms;if(Se.useProgram(Dt.program)&&(Jt=!0,_t=!0,In=!0),ie.id!==F&&(F=ie.id,_t=!0),Jt||X!==R){Se.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),at.setValue(P,"projectionMatrix",R.projectionMatrix),at.setValue(P,"viewMatrix",R.matrixWorldInverse);const bt=at.map.cameraPosition;bt!==void 0&&bt.setValue(P,we.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&at.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&at.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,_t=!0,In=!0)}if(He.needsLights&&(et.state.directionalShadowMap.length>0&&at.setValue(P,"directionalShadowMap",et.state.directionalShadowMap,N),et.state.spotShadowMap.length>0&&at.setValue(P,"spotShadowMap",et.state.spotShadowMap,N),et.state.pointShadowMap.length>0&&at.setValue(P,"pointShadowMap",et.state.pointShadowMap,N)),te.isSkinnedMesh){at.setOptional(P,te,"bindMatrix"),at.setOptional(P,te,"bindMatrixInverse");const Mt=te.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),at.setValue(P,"boneTexture",Mt.boneTexture,N))}te.isBatchedMesh&&(at.setOptional(P,te,"batchingTexture"),at.setValue(P,"batchingTexture",te._matricesTexture,N),at.setOptional(P,te,"batchingIdTexture"),at.setValue(P,"batchingIdTexture",te._indirectTexture,N),at.setOptional(P,te,"batchingColorTexture"),te._colorsTexture!==null&&at.setValue(P,"batchingColorTexture",te._colorsTexture,N));const Ct=re.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&We.update(te,re,Dt),(_t||He.receiveShadow!==te.receiveShadow)&&(He.receiveShadow=te.receiveShadow,at.setValue(P,"receiveShadow",te.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(vt.envMap.value=ke,vt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Z.environment!==null&&(vt.envMapIntensity.value=Z.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=qm()),_t&&(at.setValue(P,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&Sr(vt,In),De&&ie.fog===!0&&Pe.refreshFogUniforms(vt,De),Pe.refreshMaterialUniforms(vt,ie,V,z,w.state.transmissionRenderTarget[R.id]),es.upload(P,jn(He),vt,N)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(es.upload(P,jn(He),vt,N),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&at.setValue(P,"center",te.center),at.setValue(P,"modelViewMatrix",te.modelViewMatrix),at.setValue(P,"normalMatrix",te.normalMatrix),at.setValue(P,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Mt=ie.uniformsGroups;for(let bt=0,Kn=Mt.length;bt<Kn;bt++){const zt=Mt[bt];pe.update(zt,Dt),pe.bind(zt,Dt)}}return Dt}function Sr(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function hi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,Z,re){const ie=x.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),x.get(R.texture).__webglTexture=Z,x.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const re=x.get(R);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0};const Hi=P.createFramebuffer();this.setRenderTarget=function(R,Z=0,re=0){I=R,D=Z,A=re;let ie=null,te=!1,De=!1;if(R){const Le=x.get(R);if(Le.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(R.viewport),k.copy(R.scissor),K=R.scissorTest,Se.viewport(O),Se.scissor(k),Se.setScissorTest(K),F=-1;return}else if(Le.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Le.__hasExternalTextures)N.rebindTextures(R,x.get(R.texture).__webglTexture,x.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Le.__boundDepthTexture!==Ye){if(Ye!==null&&x.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(De=!0);const Ge=x.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[Z])?ie=Ge[Z][re]:ie=Ge[Z],te=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?ie=x.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[re]:ie=Ge,O.copy(R.viewport),k.copy(R.scissor),K=R.scissorTest}else O.copy(B).multiplyScalar(V).floor(),k.copy(G).multiplyScalar(V).floor(),K=q;if(re!==0&&(ie=Hi),Se.bindFramebuffer(P.FRAMEBUFFER,ie)&&Se.drawBuffers(R,ie),Se.viewport(O),Se.scissor(k),Se.setScissorTest(K),te){const Le=x.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Le.__webglTexture,re)}else if(De){const Le=Z;for(let ke=0;ke<R.textures.length;ke++){const Ge=x.get(R.textures[ke]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,re,Le)}}else if(R!==null&&re!==0){const Le=x.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Le.__webglTexture,re)}F=-1},this.readRenderTargetPixels=function(R,Z,re,ie,te,De,Ne,Le=0){if(!(R&&R.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=x.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){Se.bindFramebuffer(P.FRAMEBUFFER,ke);try{const Ge=R.textures[Le],Ye=Ge.format,Ve=Ge.type;if(!ue.textureFormatReadable(Ye)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ve)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ie&&re>=0&&re<=R.height-te&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Le),P.readPixels(Z,re,ie,te,ve.convert(Ye),ve.convert(Ve),De))}finally{const Ge=I!==null?x.get(I).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,Z,re,ie,te,De,Ne,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=x.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(Z>=0&&Z<=R.width-ie&&re>=0&&re<=R.height-te){Se.bindFramebuffer(P.FRAMEBUFFER,ke);const Ge=R.textures[Le],Ye=Ge.format,Ve=Ge.type;if(!ue.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.bufferData(P.PIXEL_PACK_BUFFER,De.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Le),P.readPixels(Z,re,ie,te,ve.convert(Ye),ve.convert(Ve),0);const $e=I!==null?x.get(I).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,$e);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await _u(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,De),P.deleteBuffer(Ze),P.deleteSync(ht),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,re=0){const ie=Math.pow(2,-re),te=Math.floor(R.image.width*ie),De=Math.floor(R.image.height*ie),Ne=Z!==null?Z.x:0,Le=Z!==null?Z.y:0;N.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,Ne,Le,te,De),Se.unbindTexture()};const Wi=P.createFramebuffer(),ze=P.createFramebuffer();this.copyTextureToTexture=function(R,Z,re=null,ie=null,te=0,De=null){De===null&&(te!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=te,te=0):De=0);let Ne,Le,ke,Ge,Ye,Ve,Ze,$e,ht;const ot=R.isCompressedTexture?R.mipmaps[De]:R.image;if(re!==null)Ne=re.max.x-re.min.x,Le=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,Ge=re.min.x,Ye=re.min.y,Ve=re.isBox3?re.min.z:0;else{const Ct=Math.pow(2,-te);Ne=Math.floor(ot.width*Ct),Le=Math.floor(ot.height*Ct),R.isDataArrayTexture?ke=ot.depth:R.isData3DTexture?ke=Math.floor(ot.depth*Ct):ke=1,Ge=0,Ye=0,Ve=0}ie!==null?(Ze=ie.x,$e=ie.y,ht=ie.z):(Ze=0,$e=0,ht=0);const st=ve.convert(Z.format),He=ve.convert(Z.type);let et;Z.isData3DTexture?(N.setTexture3D(Z,0),et=P.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),et=P.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),et=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Z.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),Dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Jt=P.getParameter(P.UNPACK_SKIP_PIXELS),_t=P.getParameter(P.UNPACK_SKIP_ROWS),In=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const at=R.isDataArrayTexture||R.isData3DTexture,vt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Ct=x.get(R),Mt=x.get(Z),bt=x.get(Ct.__renderTarget),Kn=x.get(Mt.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,bt.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let zt=0;zt<ke;zt++)at&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(R).__webglTexture,te,Ve+zt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(Z).__webglTexture,De,ht+zt)),P.blitFramebuffer(Ge,Ye,Ne,Le,Ze,$e,Ne,Le,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||x.has(R)){const Ct=x.get(R),Mt=x.get(Z);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Wi),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,ze);for(let bt=0;bt<ke;bt++)at?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.__webglTexture,te,Ve+bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ct.__webglTexture,te),vt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.__webglTexture,De,ht+bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,De),te!==0?P.blitFramebuffer(Ge,Ye,Ne,Le,Ze,$e,Ne,Le,P.COLOR_BUFFER_BIT,P.NEAREST):vt?P.copyTexSubImage3D(et,De,Ze,$e,ht+bt,Ge,Ye,Ne,Le):P.copyTexSubImage2D(et,De,Ze,$e,Ge,Ye,Ne,Le);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else vt?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(et,De,Ze,$e,ht,Ne,Le,ke,st,He,ot.data):Z.isCompressedArrayTexture?P.compressedTexSubImage3D(et,De,Ze,$e,ht,Ne,Le,ke,st,ot.data):P.texSubImage3D(et,De,Ze,$e,ht,Ne,Le,ke,st,He,ot):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,De,Ze,$e,Ne,Le,st,He,ot.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,De,Ze,$e,ot.width,ot.height,st,ot.data):P.texSubImage2D(P.TEXTURE_2D,De,Ze,$e,Ne,Le,st,He,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jt),P.pixelStorei(P.UNPACK_SKIP_ROWS,_t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,In),De===0&&Z.generateMipmaps&&P.generateMipmap(et),Se.unbindTexture()},this.initRenderTarget=function(R){x.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){D=0,A=0,I=null,Se.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Km{constructor(e){this.state=e,this.mesh=null}initialize(e){this.dispose();const t=new Yn(2,2),r=new cn({uniforms:{camera:{value:null}},glslVersion:Ya,vertexShader:`
                out vec2 vUv;
                out vec3 vColor;
                uniform float camera;

				void main() { 
					vUv = position.xy; 
					vColor = instanceColor; 
					float size = instanceMatrix[0].x;  

					gl_Position = projectionMatrix * viewMatrix * vec4(vUv * (size + camera) + instanceMatrix[3].xy, 0.0, 1.0); 

                }
            `,fragmentShader:`
                in vec2 vUv;
                in vec3 vColor;
                out vec4 fragColor;

                void main() {
                    if(length(vUv) > 1.0) discard;
                    fragColor = vec4(vColor, 1.0);
                }
            `}),{numItems:n,offsets:i,sizes:a,colors:o}=this.state.data;this.mesh=new Wu(t,r,n);const l=new kt,c=new nt;for(let u=0;u<n;u++)l.position.set(i[u*2],i[u*2+1],0),l.scale.set(a[u],a[u]),l.updateMatrix(),c.setRGB(o[u*4],o[u*4+1],o[u*4+2]),this.mesh.setMatrixAt(u,l.matrix),this.mesh.setColorAt(u,c);e.add(this.mesh)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose())}}function Zm(){var s=Object.create(null);function e(n,i){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){i(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function Jm(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var Mc=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Mc=function(){return s},s},Qm=0,$m=0,Qs=!1,ur=Object.create(null),hr=Object.create(null),Ja=Object.create(null);function zi(s){if((!s||typeof s.init!="function")&&!Qs)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,n=s.workerId,i=Jm(s);n==null&&(n="#default");var a="workerModule"+ ++Qm,o=s.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Qs=!0,u=zi({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+ts(u)+`
)}`}),Qs=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!Mc())return i.apply(void 0,u);if(!l){l=Tl(n,"registerModule",c.workerModuleData);var f=function(){l=null,hr[n].delete(f)};(hr[n]||(hr[n]=new Set)).add(f)}return l.then(function(d){var _=d.isCallable;if(_)return Tl(n,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:ts(t),getTransferables:r&&ts(r)},c.onMainThread=i,c}function eg(s){hr[s]&&hr[s].forEach(function(e){e()}),ur[s]&&(ur[s].terminate(),delete ur[s])}function ts(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function tg(s){var e=ur[s];if(!e){var t=ts(Zm);e=ur[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,a=Ja[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Ja[i],a(n)}}return e}function Tl(s,e,t){return new Promise(function(r,n){var i=++$m;Ja[i]=function(a){a.success?r(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},tg(s).postMessage({messageId:i,action:e,data:t})})}function yc(){var s=(function(e){function t(W,Y,L,z,V,ee,J,B){var G=1-J;B.x=G*G*W+2*G*J*L+J*J*V,B.y=G*G*Y+2*G*J*z+J*J*ee}function r(W,Y,L,z,V,ee,J,B,G,q){var oe=1-G;q.x=oe*oe*oe*W+3*oe*oe*G*L+3*oe*G*G*V+G*G*G*J,q.y=oe*oe*oe*Y+3*oe*oe*G*z+3*oe*G*G*ee+G*G*G*B}function n(W,Y){for(var L=/([MLQCZ])([^MLQCZ]*)/g,z,V,ee,J,B;z=L.exec(W);){var G=z[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(q){return parseFloat(q)});switch(z[1]){case"M":J=V=G[0],B=ee=G[1];break;case"L":(G[0]!==J||G[1]!==B)&&Y("L",J,B,J=G[0],B=G[1]);break;case"Q":{Y("Q",J,B,J=G[2],B=G[3],G[0],G[1]);break}case"C":{Y("C",J,B,J=G[4],B=G[5],G[0],G[1],G[2],G[3]);break}case"Z":(J!==V||B!==ee)&&Y("L",J,B,V,ee);break}}}function i(W,Y,L){L===void 0&&(L=16);var z={x:0,y:0};n(W,function(V,ee,J,B,G,q,oe,le,ne){switch(V){case"L":Y(ee,J,B,G);break;case"Q":{for(var ce=ee,we=J,ye=1;ye<L;ye++)t(ee,J,q,oe,B,G,ye/(L-1),z),Y(ce,we,z.x,z.y),ce=z.x,we=z.y;break}case"C":{for(var ge=ee,fe=J,Re=1;Re<L;Re++)r(ee,J,q,oe,le,ne,B,G,Re/(L-1),z),Y(ge,fe,z.x,z.y),ge=z.x,fe=z.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(W,Y){var L=W.getContext?W.getContext("webgl",c):W,z=l.get(L);if(!z){let oe=function(ge){var fe=ee[ge];if(!fe&&(fe=ee[ge]=L.getExtension(ge),!fe))throw new Error(ge+" not supported");return fe},le=function(ge,fe){var Re=L.createShader(fe);return L.shaderSource(Re,ge),L.compileShader(Re),Re},ne=function(ge,fe,Re,P){if(!J[ge]){var Te={},Ae={},ue=L.createProgram();L.attachShader(ue,le(fe,L.VERTEX_SHADER)),L.attachShader(ue,le(Re,L.FRAGMENT_SHADER)),L.linkProgram(ue),J[ge]={program:ue,transaction:function(C){L.useProgram(ue),C({setUniform:function(N,$){for(var Q=[],j=arguments.length-2;j-- >0;)Q[j]=arguments[j+2];var Me=Ae[$]||(Ae[$]=L.getUniformLocation(ue,$));L["uniform"+N].apply(L,[Me].concat(Q))},setAttribute:function(N,$,Q,j,Me){var de=Te[N];de||(de=Te[N]={buf:L.createBuffer(),loc:L.getAttribLocation(ue,N),data:null}),L.bindBuffer(L.ARRAY_BUFFER,de.buf),L.vertexAttribPointer(de.loc,$,L.FLOAT,!1,0,0),L.enableVertexAttribArray(de.loc),V?L.vertexAttribDivisor(de.loc,j):oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(de.loc,j),Me!==de.data&&(L.bufferData(L.ARRAY_BUFFER,Me,Q),de.data=Me)}})}}}J[ge].transaction(P)},ce=function(ge,fe){G++;try{L.activeTexture(L.TEXTURE0+G);var Re=B[ge];Re||(Re=B[ge]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,Re),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,Re),fe(Re,G)}finally{G--}},we=function(ge,fe,Re){var P=L.createFramebuffer();q.push(P),L.bindFramebuffer(L.FRAMEBUFFER,P),L.activeTexture(L.TEXTURE0+fe),L.bindTexture(L.TEXTURE_2D,ge),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge,0);try{Re(P)}finally{L.deleteFramebuffer(P),L.bindFramebuffer(L.FRAMEBUFFER,q[--q.length-1]||null)}},ye=function(){ee={},J={},B={},G=-1,q.length=0};var V=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,ee={},J={},B={},G=-1,q=[];L.canvas.addEventListener("webglcontextlost",function(ge){ye(),ge.preventDefault()},!1),l.set(L,z={gl:L,isWebGL2:V,getExtension:oe,withProgram:ne,withTexture:ce,withTextureFramebuffer:we,handleContextLoss:ye})}Y(z)}function h(W,Y,L,z,V,ee,J,B){J===void 0&&(J=15),B===void 0&&(B=null),u(W,function(G){var q=G.gl,oe=G.withProgram,le=G.withTexture;le("copy",function(ne,ce){q.texImage2D(q.TEXTURE_2D,0,q.RGBA,V,ee,0,q.RGBA,q.UNSIGNED_BYTE,Y),oe("copy",a,o,function(we){var ye=we.setUniform,ge=we.setAttribute;ge("aUV",2,q.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),ye("1i","image",ce),q.bindFramebuffer(q.FRAMEBUFFER,B||null),q.disable(q.BLEND),q.colorMask(J&8,J&4,J&2,J&1),q.viewport(L,z,V,ee),q.scissor(L,z,V,ee),q.drawArrays(q.TRIANGLES,0,3)})})})}function f(W,Y,L){var z=W.width,V=W.height;u(W,function(ee){var J=ee.gl,B=new Uint8Array(z*V*4);J.readPixels(0,0,z,V,J.RGBA,J.UNSIGNED_BYTE,B),W.width=Y,W.height=L,h(J,B,0,0,z,V)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function _(W,Y,L,z,V,ee){ee===void 0&&(ee=1);var J=new Uint8Array(W*Y),B=z[2]-z[0],G=z[3]-z[1],q=[];i(L,function(ge,fe,Re,P){q.push({x1:ge,y1:fe,x2:Re,y2:P,minX:Math.min(ge,Re),minY:Math.min(fe,P),maxX:Math.max(ge,Re),maxY:Math.max(fe,P)})}),q.sort(function(ge,fe){return ge.maxX-fe.maxX});for(var oe=0;oe<W;oe++)for(var le=0;le<Y;le++){var ne=we(z[0]+B*(oe+.5)/W,z[1]+G*(le+.5)/Y),ce=Math.pow(1-Math.abs(ne)/V,ee)/2;ne<0&&(ce=1-ce),ce=Math.max(0,Math.min(255,Math.round(ce*255))),J[le*W+oe]=ce}return J;function we(ge,fe){for(var Re=1/0,P=1/0,Te=q.length;Te--;){var Ae=q[Te];if(Ae.maxX+P<=ge)break;if(ge+P>Ae.minX&&fe-P<Ae.maxY&&fe+P>Ae.minY){var ue=m(ge,fe,Ae.x1,Ae.y1,Ae.x2,Ae.y2);ue<Re&&(Re=ue,P=Math.sqrt(Re))}}return ye(ge,fe)&&(P=-P),P}function ye(ge,fe){for(var Re=0,P=q.length;P--;){var Te=q[P];if(Te.maxX<=ge)break;var Ae=Te.y1>fe!=Te.y2>fe&&ge<(Te.x2-Te.x1)*(fe-Te.y1)/(Te.y2-Te.y1)+Te.x1;Ae&&(Re+=Te.y1<Te.y2?1:-1)}return Re!==0}}function S(W,Y,L,z,V,ee,J,B,G,q){ee===void 0&&(ee=1),B===void 0&&(B=0),G===void 0&&(G=0),q===void 0&&(q=0),g(W,Y,L,z,V,ee,J,null,B,G,q)}function g(W,Y,L,z,V,ee,J,B,G,q,oe){ee===void 0&&(ee=1),G===void 0&&(G=0),q===void 0&&(q=0),oe===void 0&&(oe=0);for(var le=_(W,Y,L,z,V,ee),ne=new Uint8Array(le.length*4),ce=0;ce<le.length;ce++)ne[ce*4+oe]=le[ce];h(J,ne,G,q,W,Y,1<<3-oe,B)}function m(W,Y,L,z,V,ee){var J=V-L,B=ee-z,G=J*J+B*B,q=G?Math.max(0,Math.min(1,((W-L)*J+(Y-z)*B)/G)):0,oe=W-(L+q*J),le=Y-(z+q*B);return oe*oe+le*le}var E=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:S,generateIntoFramebuffer:g}),T="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",w="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",U=new Float32Array([0,0,2,0,0,2]),b=null,M=!1,p={},v=new WeakMap;function D(W){if(!M&&!X(W))throw new Error("WebGL generation not supported")}function A(W,Y,L,z,V,ee,J){if(ee===void 0&&(ee=1),J===void 0&&(J=null),!J&&(J=b,!J)){var B=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!B)throw new Error("OffscreenCanvas or DOM canvas not supported");J=b=B.getContext("webgl",{depth:!1})}D(J);var G=new Uint8Array(W*Y*4);u(J,function(ne){var ce=ne.gl,we=ne.withTexture,ye=ne.withTextureFramebuffer;we("readable",function(ge,fe){ce.texImage2D(ce.TEXTURE_2D,0,ce.RGBA,W,Y,0,ce.RGBA,ce.UNSIGNED_BYTE,null),ye(ge,fe,function(Re){F(W,Y,L,z,V,ee,ce,Re,0,0,0),ce.readPixels(0,0,W,Y,ce.RGBA,ce.UNSIGNED_BYTE,G)})})});for(var q=new Uint8Array(W*Y),oe=0,le=0;oe<G.length;oe+=4)q[le++]=G[oe];return q}function I(W,Y,L,z,V,ee,J,B,G,q){ee===void 0&&(ee=1),B===void 0&&(B=0),G===void 0&&(G=0),q===void 0&&(q=0),F(W,Y,L,z,V,ee,J,null,B,G,q)}function F(W,Y,L,z,V,ee,J,B,G,q,oe){ee===void 0&&(ee=1),G===void 0&&(G=0),q===void 0&&(q=0),oe===void 0&&(oe=0),D(J);var le=[];i(L,function(ne,ce,we,ye){le.push(ne,ce,we,ye)}),le=new Float32Array(le),u(J,function(ne){var ce=ne.gl,we=ne.isWebGL2,ye=ne.getExtension,ge=ne.withProgram,fe=ne.withTexture,Re=ne.withTextureFramebuffer,P=ne.handleContextLoss;if(fe("rawDistances",function(Te,Ae){(W!==Te._lastWidth||Y!==Te._lastHeight)&&ce.texImage2D(ce.TEXTURE_2D,0,ce.RGBA,Te._lastWidth=W,Te._lastHeight=Y,0,ce.RGBA,ce.UNSIGNED_BYTE,null),ge("main",T,y,function(ue){var Se=ue.setAttribute,C=ue.setUniform,x=!we&&ye("ANGLE_instanced_arrays"),N=!we&&ye("EXT_blend_minmax");Se("aUV",2,ce.STATIC_DRAW,0,U),Se("aLineSegment",4,ce.DYNAMIC_DRAW,1,le),C.apply(void 0,["4f","uGlyphBounds"].concat(z)),C("1f","uMaxDistance",V),C("1f","uExponent",ee),Re(Te,Ae,function($){ce.enable(ce.BLEND),ce.colorMask(!0,!0,!0,!0),ce.viewport(0,0,W,Y),ce.scissor(0,0,W,Y),ce.blendFunc(ce.ONE,ce.ONE),ce.blendEquationSeparate(ce.FUNC_ADD,we?ce.MAX:N.MAX_EXT),ce.clear(ce.COLOR_BUFFER_BIT),we?ce.drawArraysInstanced(ce.TRIANGLES,0,3,le.length/4):x.drawArraysInstancedANGLE(ce.TRIANGLES,0,3,le.length/4)})}),ge("post",a,w,function(ue){ue.setAttribute("aUV",2,ce.STATIC_DRAW,0,U),ue.setUniform("1i","tex",Ae),ce.bindFramebuffer(ce.FRAMEBUFFER,B),ce.disable(ce.BLEND),ce.colorMask(oe===0,oe===1,oe===2,oe===3),ce.viewport(G,q,W,Y),ce.scissor(G,q,W,Y),ce.drawArrays(ce.TRIANGLES,0,3)})}),ce.isContextLost())throw P(),new Error("webgl context lost")})}function X(W){var Y=!W||W===b?p:W.canvas||W,L=v.get(Y);if(L===void 0){M=!0;var z=null;try{var V=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ee=A(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,W);L=ee&&V.length===ee.length&&ee.every(function(J,B){return J===V[B]}),L||(z="bad trial run results",console.info(V,ee))}catch(J){L=!1,z=J.message}z&&console.warn("WebGL SDF generation not supported:",z),M=!1,v.set(Y,L)}return L}var O=Object.freeze({__proto__:null,generate:A,generateIntoCanvas:I,generateIntoFramebuffer:F,isSupported:X});function k(W,Y,L,z,V,ee){V===void 0&&(V=Math.max(z[2]-z[0],z[3]-z[1])/2),ee===void 0&&(ee=1);try{return A.apply(O,arguments)}catch(J){return console.info("WebGL SDF generation failed, falling back to JS",J),_.apply(E,arguments)}}function K(W,Y,L,z,V,ee,J,B,G,q){V===void 0&&(V=Math.max(z[2]-z[0],z[3]-z[1])/2),ee===void 0&&(ee=1),B===void 0&&(B=0),G===void 0&&(G=0),q===void 0&&(q=0);try{return I.apply(O,arguments)}catch(oe){return console.info("WebGL SDF generation failed, falling back to JS",oe),S.apply(E,arguments)}}return e.forEachPathCommand=n,e.generate=k,e.generateIntoCanvas=K,e.javascript=E,e.pathToLineSegments=i,e.webgl=O,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function ng(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(P,Te){r[P]=1<<Te+1,n[r[P]]=P}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function h(){if(!u){u=new Map;var P=function(Ae){if(t.hasOwnProperty(Ae)){var ue=0;t[Ae].split(",").forEach(function(Se){var C=Se.split("+"),x=C[0],N=C[1];x=parseInt(x,36),N=N?parseInt(N,36):0,u.set(ue+=x,r[Ae]);for(var $=0;$<N;$++)u.set(++ue,r[Ae])})}};for(var Te in t)P(Te)}}function f(P){return h(),u.get(P.codePointAt(0))||r.L}function d(P){return n[f(P)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function S(P,Te){var Ae=36,ue=0,Se=new Map,C=Te&&new Map,x;return P.split(",").forEach(function N($){if($.indexOf("+")!==-1)for(var Q=+$;Q--;)N(x);else{x=$;var j=$.split(">"),Me=j[0],de=j[1];Me=String.fromCodePoint(ue+=parseInt(Me,Ae)),de=String.fromCodePoint(ue+=parseInt(de,Ae)),Se.set(Me,de),Te&&C.set(de,Me)}}),{map:Se,reverseMap:C}}var g,m,E;function T(){if(!g){var P=S(_.pairs,!0),Te=P.map,Ae=P.reverseMap;g=Te,m=Ae,E=S(_.canonical,!1).map}}function y(P){return T(),g.get(P)||null}function w(P){return T(),m.get(P)||null}function U(P){return T(),E.get(P)||null}var b=r.L,M=r.R,p=r.EN,v=r.ES,D=r.ET,A=r.AN,I=r.CS,F=r.B,X=r.S,O=r.ON,k=r.BN,K=r.NSM,W=r.AL,Y=r.LRO,L=r.RLO,z=r.LRE,V=r.RLE,ee=r.PDF,J=r.LRI,B=r.RLI,G=r.FSI,q=r.PDI;function oe(P,Te){for(var Ae=125,ue=new Uint32Array(P.length),Se=0;Se<P.length;Se++)ue[Se]=f(P[Se]);var C=new Map;function x(Ft,$t){var Nt=ue[Ft];ue[Ft]=$t,C.set(Nt,C.get(Nt)-1),Nt&o&&C.set(o,C.get(o)-1),C.set($t,(C.get($t)||0)+1),$t&o&&C.set(o,(C.get(o)||0)+1)}for(var N=new Uint8Array(P.length),$=new Map,Q=[],j=null,Me=0;Me<P.length;Me++)j||Q.push(j={start:Me,end:P.length-1,level:Te==="rtl"?1:Te==="ltr"?0:Ao(Me,!1)}),ue[Me]&F&&(j.end=Me,j=null);for(var de=V|z|L|Y|i|q|ee|F,Ce=function(Ft){return Ft+(Ft&1?1:2)},Pe=function(Ft){return Ft+(Ft&1?2:1)},he=0;he<Q.length;he++){j=Q[he];var _e=[{_level:j.level,_override:0,_isolate:0}],xe=void 0,Ue=0,Ee=0,We=0;C.clear();for(var H=j.start;H<=j.end;H++){var me=ue[H];if(xe=_e[_e.length-1],C.set(me,(C.get(me)||0)+1),me&o&&C.set(o,(C.get(o)||0)+1),me&de)if(me&(V|z)){N[H]=xe._level;var ve=(me===V?Pe:Ce)(xe._level);ve<=Ae&&!Ue&&!Ee?_e.push({_level:ve,_override:0,_isolate:0}):Ue||Ee++}else if(me&(L|Y)){N[H]=xe._level;var Ie=(me===L?Pe:Ce)(xe._level);Ie<=Ae&&!Ue&&!Ee?_e.push({_level:Ie,_override:me&L?M:b,_isolate:0}):Ue||Ee++}else if(me&i){me&G&&(me=Ao(H+1,!0)===1?B:J),N[H]=xe._level,xe._override&&x(H,xe._override);var pe=(me===B?Pe:Ce)(xe._level);pe<=Ae&&Ue===0&&Ee===0?(We++,_e.push({_level:pe,_override:0,_isolate:1,_isolInitIndex:H})):Ue++}else if(me&q){if(Ue>0)Ue--;else if(We>0){for(Ee=0;!_e[_e.length-1]._isolate;)_e.pop();var ae=_e[_e.length-1]._isolInitIndex;ae!=null&&($.set(ae,H),$.set(H,ae)),_e.pop(),We--}xe=_e[_e.length-1],N[H]=xe._level,xe._override&&x(H,xe._override)}else me&ee?(Ue===0&&(Ee>0?Ee--:!xe._isolate&&_e.length>1&&(_e.pop(),xe=_e[_e.length-1])),N[H]=xe._level):me&F&&(N[H]=j.level);else N[H]=xe._level,xe._override&&me!==k&&x(H,xe._override)}for(var be=[],Oe=null,Be=j.start;Be<=j.end;Be++){var Xe=ue[Be];if(!(Xe&l)){var ct=N[Be],ut=Xe&i,pt=Xe===q;Oe&&ct===Oe._level?(Oe._end=Be,Oe._endsWithIsolInit=ut):be.push(Oe={_start:Be,_end:Be,_level:ct,_startsWithPDI:pt,_endsWithIsolInit:ut})}}for(var It=[],Xt=0;Xt<be.length;Xt++){var Kt=be[Xt];if(!Kt._startsWithPDI||Kt._startsWithPDI&&!$.has(Kt._start)){for(var Zt=[Oe=Kt],un=void 0;Oe&&Oe._endsWithIsolInit&&(un=$.get(Oe._end))!=null;)for(var Tt=Xt+1;Tt<be.length;Tt++)if(be[Tt]._start===un){Zt.push(Oe=be[Tt]);break}for(var gt=[],hn=0;hn<Zt.length;hn++)for(var Vi=Zt[hn],Ln=Vi._start;Ln<=Vi._end;Ln++)gt.push(Ln);for(var xr=N[gt[0]],qn=j.level,jn=gt[0]-1;jn>=0;jn--)if(!(ue[jn]&l)){qn=N[jn];break}var ui=gt[gt.length-1],fs=N[ui],Sr=j.level;if(!(ue[ui]&i)){for(var hi=ui+1;hi<=j.end;hi++)if(!(ue[hi]&l)){Sr=N[hi];break}}It.push({_seqIndices:gt,_sosType:Math.max(qn,xr)%2?M:b,_eosType:Math.max(Sr,fs)%2?M:b})}}for(var Hi=0;Hi<It.length;Hi++){var Wi=It[Hi],ze=Wi._seqIndices,R=Wi._sosType,Z=Wi._eosType,re=N[ze[0]]&1?M:b;if(C.get(K))for(var ie=0;ie<ze.length;ie++){var te=ze[ie];if(ue[te]&K){for(var De=R,Ne=ie-1;Ne>=0;Ne--)if(!(ue[ze[Ne]]&l)){De=ue[ze[Ne]];break}x(te,De&(i|q)?O:De)}}if(C.get(p))for(var Le=0;Le<ze.length;Le++){var ke=ze[Le];if(ue[ke]&p)for(var Ge=Le-1;Ge>=-1;Ge--){var Ye=Ge===-1?R:ue[ze[Ge]];if(Ye&a){Ye===W&&x(ke,A);break}}}if(C.get(W))for(var Ve=0;Ve<ze.length;Ve++){var Ze=ze[Ve];ue[Ze]&W&&x(Ze,M)}if(C.get(v)||C.get(I))for(var $e=1;$e<ze.length-1;$e++){var ht=ze[$e];if(ue[ht]&(v|I)){for(var ot=0,st=0,He=$e-1;He>=0&&(ot=ue[ze[He]],!!(ot&l));He--);for(var et=$e+1;et<ze.length&&(st=ue[ze[et]],!!(st&l));et++);ot===st&&(ue[ht]===v?ot===p:ot&(p|A))&&x(ht,ot)}}if(C.get(p))for(var je=0;je<ze.length;je++){var Dt=ze[je];if(ue[Dt]&p){for(var Jt=je-1;Jt>=0&&ue[ze[Jt]]&(D|l);Jt--)x(ze[Jt],p);for(je++;je<ze.length&&ue[ze[je]]&(D|l|p);je++)ue[ze[je]]!==p&&x(ze[je],p)}}if(C.get(D)||C.get(v)||C.get(I))for(var _t=0;_t<ze.length;_t++){var In=ze[_t];if(ue[In]&(D|v|I)){x(In,O);for(var at=_t-1;at>=0&&ue[ze[at]]&l;at--)x(ze[at],O);for(var vt=_t+1;vt<ze.length&&ue[ze[vt]]&l;vt++)x(ze[vt],O)}}if(C.get(p))for(var Ct=0,Mt=R;Ct<ze.length;Ct++){var bt=ze[Ct],Kn=ue[bt];Kn&p?Mt===b&&x(bt,b):Kn&a&&(Mt=Kn)}if(C.get(o)){var zt=M|p|A,go=zt|b,Mr=[];{for(var fi=[],di=0;di<ze.length;di++)if(ue[ze[di]]&o){var Xi=P[ze[di]],_o=void 0;if(y(Xi)!==null)if(fi.length<63)fi.push({char:Xi,seqIndex:di});else break;else if((_o=w(Xi))!==null)for(var Yi=fi.length-1;Yi>=0;Yi--){var ds=fi[Yi].char;if(ds===_o||ds===w(U(Xi))||y(U(ds))===Xi){Mr.push([fi[Yi].seqIndex,di]),fi.length=Yi;break}}}Mr.sort(function(Ft,$t){return Ft[0]-$t[0]})}for(var ps=0;ps<Mr.length;ps++){for(var vo=Mr[ps],yr=vo[0],ms=vo[1],xo=!1,Qt=0,gs=yr+1;gs<ms;gs++){var So=ze[gs];if(ue[So]&go){xo=!0;var Mo=ue[So]&zt?M:b;if(Mo===re){Qt=Mo;break}}}if(xo&&!Qt){Qt=R;for(var _s=yr-1;_s>=0;_s--){var yo=ze[_s];if(ue[yo]&go){var Eo=ue[yo]&zt?M:b;Eo!==re?Qt=Eo:Qt=re;break}}}if(Qt){if(ue[ze[yr]]=ue[ze[ms]]=Qt,Qt!==re){for(var qi=yr+1;qi<ze.length;qi++)if(!(ue[ze[qi]]&l)){f(P[ze[qi]])&K&&(ue[ze[qi]]=Qt);break}}if(Qt!==re){for(var ji=ms+1;ji<ze.length;ji++)if(!(ue[ze[ji]]&l)){f(P[ze[ji]])&K&&(ue[ze[ji]]=Qt);break}}}}for(var Fn=0;Fn<ze.length;Fn++)if(ue[ze[Fn]]&o){for(var To=Fn,vs=Fn,xs=R,Ki=Fn-1;Ki>=0;Ki--)if(ue[ze[Ki]]&l)To=Ki;else{xs=ue[ze[Ki]]&zt?M:b;break}for(var bo=Z,Zi=Fn+1;Zi<ze.length;Zi++)if(ue[ze[Zi]]&(o|l))vs=Zi;else{bo=ue[ze[Zi]]&zt?M:b;break}for(var Ss=To;Ss<=vs;Ss++)ue[ze[Ss]]=xs===bo?xs:re;Fn=vs}}}for(var Vt=j.start;Vt<=j.end;Vt++){var Ic=N[Vt],Er=ue[Vt];if(Ic&1?Er&(b|p|A)&&N[Vt]++:Er&M?N[Vt]++:Er&(A|p)&&(N[Vt]+=2),Er&l&&(N[Vt]=Vt===0?j.level:N[Vt-1]),Vt===j.end||f(P[Vt])&(X|F))for(var Tr=Vt;Tr>=0&&f(P[Tr])&c;Tr--)N[Tr]=j.level}}return{levels:N,paragraphs:Q};function Ao(Ft,$t){for(var Nt=Ft;Nt<P.length;Nt++){var Nn=ue[Nt];if(Nn&(M|W))return 1;if(Nn&(F|b)||$t&&Nn===q)return 0;if(Nn&i){var wo=Fc(Nt);Nt=wo===-1?P.length:wo}}return 0}function Fc(Ft){for(var $t=1,Nt=Ft+1;Nt<P.length;Nt++){var Nn=ue[Nt];if(Nn&F)break;if(Nn&q){if(--$t===0)return Nt}else Nn&i&&$t++}return-1}}var le="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ne;function ce(){if(!ne){var P=S(le,!0),Te=P.map,Ae=P.reverseMap;Ae.forEach(function(ue,Se){Te.set(Se,ue)}),ne=Te}}function we(P){return ce(),ne.get(P)||null}function ye(P,Te,Ae,ue){var Se=P.length;Ae=Math.max(0,Ae==null?0:+Ae),ue=Math.min(Se-1,ue==null?Se-1:+ue);for(var C=new Map,x=Ae;x<=ue;x++)if(Te[x]&1){var N=we(P[x]);N!==null&&C.set(x,N)}return C}function ge(P,Te,Ae,ue){var Se=P.length;Ae=Math.max(0,Ae==null?0:+Ae),ue=Math.min(Se-1,ue==null?Se-1:+ue);var C=[];return Te.paragraphs.forEach(function(x){var N=Math.max(Ae,x.start),$=Math.min(ue,x.end);if(N<$){for(var Q=Te.levels.slice(N,$+1),j=$;j>=N&&f(P[j])&c;j--)Q[j]=x.level;for(var Me=x.level,de=1/0,Ce=0;Ce<Q.length;Ce++){var Pe=Q[Ce];Pe>Me&&(Me=Pe),Pe<de&&(de=Pe|1)}for(var he=Me;he>=de;he--)for(var _e=0;_e<Q.length;_e++)if(Q[_e]>=he){for(var xe=_e;_e+1<Q.length&&Q[_e+1]>=he;)_e++;_e>xe&&C.push([xe+N,_e+N])}}}),C}function fe(P,Te,Ae,ue){var Se=Re(P,Te,Ae,ue),C=[].concat(P);return Se.forEach(function(x,N){C[N]=(Te.levels[x]&1?we(P[x]):null)||P[x]}),C.join("")}function Re(P,Te,Ae,ue){for(var Se=ge(P,Te,Ae,ue),C=[],x=0;x<P.length;x++)C[x]=x;return Se.forEach(function(N){for(var $=N[0],Q=N[1],j=C.slice($,Q+1),Me=j.length;Me--;)C[Q-Me]=j[Me]}),C}return e.closingToOpeningBracket=w,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=U,e.getEmbeddingLevels=oe,e.getMirroredCharacter=we,e.getMirroredCharactersMap=ye,e.getReorderSegments=ge,e.getReorderedIndices=Re,e.getReorderedString=fe,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const Ec=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Qa(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Je[n];return i?Qa(i):r}return s.replace(e,t)}const At=[];for(let s=0;s<256;s++)At[s]=(s<16?"0":"")+s.toString(16);function ig(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]).toUpperCase()}const ni=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},rg=Date.now(),bl=new WeakMap,Al=new Map;let sg=1e10;function $a(s,e){const t=cg(e);let r=bl.get(s);if(r||bl.set(s,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Al[h];if(!f){const d=ag(this,c,e,t);f=Al[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,ni(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-rg}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:sg++}),u.uuid=ig(),u.uniforms=ni({},c.uniforms,e.uniforms),u.defines=ni({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ni({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(ni(this.extensions,c.extensions),ni(this.defines,c.defines),ni(this.uniforms,oc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=$a(s.isDerivedMaterial?s.getDepthMaterial():new pc({depthPacking:ou}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=$a(s.isDerivedMaterial?s.getDistanceMaterial():new mc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function ag(s,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:_}=r;if(i=i||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=Qa(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Qa(t)),d){let S=d({vertexShader:e,fragmentShader:t});e=S.vertexShader,t=S.fragmentShader}if(f){let S=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,g=>(S.push(g),"")),h=`${f}
${S.join(`
`)}
${h}`}if(_){const S=`
uniform float ${_};
`;i=S+i,c=S+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(S,g,m,E)=>/\battribute\s+vec[23]\s+$/.test(E.substr(0,m))?g:`troika_${g}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=wl(e,n,i,a,o),t=wl(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function wl(s,e,t,r,n){return(r||n||t)&&(s=s.replace(Ec,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),s}function og(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let lg=0;const Cl=new Map;function cg(s){const e=JSON.stringify(s,og);let t=Cl.get(e);return t==null&&Cl.set(e,t=++lg),t}function ug(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var l=i.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=i.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var _=a.readUint(n,i);i+=4;var S=a.readUint(n,i);i+=4,h[d]={offset:_,length:S}}for(f=0;f<c.length;f++){var g=c[f];h[g]&&(u[g.trim()]=e[g.trim()].parse(n,h[g].offset,h[g].length,u))}return u},_tabOffset:function(n,i,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,a){for(var o="",l=0;l<a;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,l){var c=e._bin,u={},h=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var _=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+_,l),u},e._lctf.readLookupList=function(n,i,a){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var _=a(n,h,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)(n>>>a&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],l=a.readUshort(n,i);if(i+=2,l==1){var c=a.readUshort(n,i);i+=2;var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,i)),i+=2}if(l==2){var f=a.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=i&&i<=l)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,l)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,i);i+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,i+2*h));return l},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,i,4);i+=4;var d=a.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],_=[];i=e.CFF.readIndex(n,i,_);var S=[];for(u=0;u<_.length-1;u++)S.push(o.readASCII(n,i+_[u],_[u+1]-_[u]));if(i+=_[_.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,_=[],i=e.CFF.readIndex(n,i,_);var g=[];for(u=0;u<_.length-1;u++)g.push(o.readBytes(n,i+_[u],_[u+1]-_[u]));d.CharStrings=g}if(d.ROS){i=d.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),d.FDArray=[],u=0;u<m.length-1;u++){var E=e.CFF.readDict(n,i+m[u],i+m[u+1]);e.CFF._readFDict(n,E,S),d.FDArray.push(E)}i+=m[m.length-1],i=d.FDSelect,d.FDSelect=[];var T=n[i];if(i++,T!=3)throw T;var y=o.readUshort(n,i);for(i+=2,u=0;u<y+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,S),d},e.CFF._readFDict=function(n,i,a){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=a[i[l]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,i+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,i);i+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,i,a){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)a.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,i+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,i,a){for(var o=i+a,l=e._bin,c=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,_=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(_=l.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255&&(_=l.readInt(n,i+1)/65535,f=5),c.push(_??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,a){for(var o=e._bin,l={},c=[];i<a;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,_=null;if(u==28&&(_=o.readShort(n,i+1),f=3),u==29&&(_=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255)throw _=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var S=[];for(f=1;;){var g=n[i+f];f++;var m=g>>4,E=15&g;if(m!=15&&S.push(m),E!=15&&S.push(E),E==15)break}for(var T="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],w=0;w<S.length;w++)T+=y[S[w]];_=parseFloat(T)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var _=o.readUint(n,i);i+=4;var S="p"+f+"e"+d,g=u.indexOf(_);if(g==-1){var m;g=l.tables.length,u.push(_);var E=o.readUshort(n,_);E==0?m=e.cmap.parse0(n,_):E==4?m=e.cmap.parse4(n,_):E==6?m=e.cmap.parse6(n,_):E==12?m=e.cmap.parse12(n,_):console.debug("unknown format: "+E,f,d,_),l.tables.push(m)}if(l[S]!=null)throw"multiple tables for one platform+encoding";l[S]=g}return l},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,l={};l.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var u=a.readUshort(n,i);i+=2;var h=u/2;l.searchRange=a.readUshort(n,i),i+=2,l.entrySelector=a.readUshort(n,i),i+=2,l.rangeShift=a.readUshort(n,i),i+=2,l.endCount=a.readUshorts(n,i,h),i+=2*h,i+=2,l.startCount=a.readUshorts(n,i,h),i+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(n,i)),i+=2;for(l.idRangeOffset=a.readUshorts(n,i,h),i+=2*h,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(a.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var l=a.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var S=0;S<_;S++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var g=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;g?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)g=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,g?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var E=0,T=0;for(u=0;u<f;u++)E+=c.xs[u],T+=c.ys[u],c.xs[u]=E,c.ys[u]=T}else{var y;c.parts=[];do{y=a.readUshort(o,l),l+=2;var w={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(w),w.glyphIndex=a.readUshort(o,l),l+=2,1&y){var U=a.readShort(o,l);l+=2;var b=a.readShort(o,l);l+=2}else U=a.readInt8(o,l),l++,b=a.readInt8(o,l),l++;2&y?(w.m.tx=U,w.m.ty=b):(w.p1=U,w.p2=b),8&y?(w.m.a=w.m.d=a.readF2dot14(o,l),l+=2):64&y?(w.m.a=a.readF2dot14(o,l),l+=2,w.m.d=a.readF2dot14(o,l),l+=2):128&y&&(w.m.a=a.readF2dot14(o,l),l+=2,w.m.b=a.readF2dot14(o,l),l+=2,w.m.c=a.readF2dot14(o,l),l+=2,w.m.d=a.readF2dot14(o,l),l+=2)}while(32&y);if(256&y){var M=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<M;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(i==1&&u.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var _=e._lctf.numOfOnes(f),S=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var g=l.readUshort(n,a);a+=2;for(var m=0;m<g;m++){var E=c+l.readUshort(n,a);a+=2;var T=l.readUshort(n,E);E+=2;for(var y=[],w=0;w<T;w++){var U=l.readUshort(n,E);E+=2,f!=0&&(A=e.GPOS.readValueRecord(n,E,f),E+=2*_),d!=0&&(I=e.GPOS.readValueRecord(n,E,d),E+=2*S),y.push({gid2:U,val1:A,val2:I})}u.pairsets.push(y)}}if(u.fmt==2){var b=l.readUshort(n,a);a+=2;var M=l.readUshort(n,a);a+=2;var p=l.readUshort(n,a);a+=2;var v=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+b),u.classDef2=e._lctf.readClassDef(n,c+M),u.matrix=[],m=0;m<p;m++){var D=[];for(w=0;w<v;w++){var A=null,I=null;f!=0&&(A=e.GPOS.readValueRecord(n,a,f),a+=2*_),d!=0&&(I=e.GPOS.readValueRecord(n,a,d),a+=2*S),D.push({val1:A,val2:I})}u.matrix.push(D)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var F=l.readUshort(n,a);a+=2;var X=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+X)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,l.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,l.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,l.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],l=i,c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+l);h.markClass=a.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var f=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,f),a+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var _=l.readUshort(n,a)+c;a+=2;var S=l.readUshort(n,_);u.seqs.push(l.readUshorts(n,_+2,S))}}else if(i==4)for(u.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var g=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+g))}else if(i==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var E=l.readUshort(n,a);for(a+=2,d=0;d<E;d++){var T=l.readUshort(n,a);a+=2,u.scset.push(T==0?null:e.GSUB.readSubClassSet(n,c+T))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var y=[],w=0;w<f;w++)y.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*w)));a+=2*f,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}f=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(i==7&&u.fmt==1){var U=l.readUshort(n,a);a+=2;var b=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=U;else if(o.ltype!=U)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,l=[],c=a(n,i);i+=2;for(var u=0;u<c;u++){var h=a(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},l=a(n,i),c=a(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,h=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,i,a,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,a,o);var u=l.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,a=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,a,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,a){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var _=a.rval[a.rval.length-1];_.glyph2.push(f),_.vals.push(d),l=h}return i},e.loca={},e.loca.parse=function(n,i,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,a){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var _=o.readUshort(n,i);i+=2;var S=o.readUshort(n,i);i+=2;var g=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var E=o.readUshort(n,i);i+=2;var T=o.readUshort(n,i);i+=2;var y,w=h[m],U=f+12*c+T;if(_==0)y=o.readUnicode(n,U,E/2);else if(_==3&&S==0)y=o.readUnicode(n,U,E/2);else if(S==0)y=o.readASCII(n,U,E);else if(S==1)y=o.readUnicode(n,U,E/2);else if(S==3)y=o.readUnicode(n,U,E/2);else{if(_!=1)throw"unknown encoding "+S+", platformID: "+_;y=o.readASCII(n,U,E),console.debug("reading unknown MAC encoding "+S+" as ASCII")}var b="p"+_+","+g.toString(16);l[b]==null&&(l[b]={}),l[b][w!==void 0?w:m]=y,l[b]._lang=g}for(var M in l)if(l[M].postScriptName!=null&&l[M]._lang==1033)return l[M];for(var M in l)if(l[M].postScriptName!=null&&l[M]._lang==0)return l[M];for(var M in l)if(l[M].postScriptName!=null&&l[M]._lang==3084)return l[M];for(var M in l)if(l[M].postScriptName!=null)return l[M];for(var M in l){u=M;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=i;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],_=1&n.flags[h],S=n.xs[c],g=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,S,g);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+S)/2,(n.ys[u]+g)/2);f?d&&e.U.P.lineTo(i,S,g):_?e.U.P.qcurveTo(i,S,g,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,S,g,(S+n.xs[h])/2,(g+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var l=n.length-i-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(a.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var _=f[d],S=_.chain.length;if(!(S>l)){for(var g=!0,m=0,E=0;E<S;E++){for(;n[i+m+(1+E)]==-1;)m++;_.chain[E]!=n[i+m+(1+E)]&&(g=!1)}if(g){for(n[i]=_.nglyph,E=0;E<S+m;E++)n[i+E+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var T=e._lctf.getInterval(h.cDef,n[i]),y=h.cDef[T+2],w=h.scset[y],U=0;U<w.length;U++){var b=w[U],M=b.input;if(!(M.length>l)){for(g=!0,E=0;E<M.length;E++){var p=e._lctf.getInterval(h.cDef,n[i+1+E]);if(T==-1&&h.cDef[p+2]!=M[E]){g=!1;break}}if(g){var v=b.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var D=h.lookupRec;for(U=0;U<D.length;U+=2){T=D[U];var A=o[D[U+1]];e.U._applySubs(n,i+T,A,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var h=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,l,c,u){n.cmds.push("C"),n.crds.push(i,a,o,l,c,u)},e.U.P.qcurveTo=function(n,i,a,o,l){n.cmds.push("Q"),n.crds.push(i,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,l){for(var c=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,_=0,S=i.x,g=i.y,m=0,E=0,T=0,y=0,w=0,U=0,b=0,M=0,p=0,v=0,D={val:0,size:0};_<n.length;){e.CFF.getCharString(n,_,D);var A=D.val;if(_+=D.size,A=="o1"||A=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(A=="o3"||A=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(A=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),g+=c.pop(),e.U.P.moveTo(l,S,g),d=!0;else if(A=="o5")for(;c.length>0;)S+=c.shift(),g+=c.shift(),e.U.P.lineTo(l,S,g);else if(A=="o6"||A=="o7")for(var I=c.length,F=A=="o6",X=0;X<I;X++){var O=c.shift();F?S+=O:g+=O,F=!F,e.U.P.lineTo(l,S,g)}else if(A=="o8"||A=="o24"){I=c.length;for(var k=0;k+6<=I;)m=S+c.shift(),E=g+c.shift(),T=m+c.shift(),y=E+c.shift(),S=T+c.shift(),g=y+c.shift(),e.U.P.curveTo(l,m,E,T,y,S,g),k+=6;A=="o24"&&(S+=c.shift(),g+=c.shift(),e.U.P.lineTo(l,S,g))}else{if(A=="o11")break;if(A=="o1234"||A=="o1235"||A=="o1236"||A=="o1237")A=="o1234"&&(E=g,T=(m=S+c.shift())+c.shift(),v=y=E+c.shift(),U=y,M=g,S=(b=(w=(p=T+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,E,T,y,p,v),e.U.P.curveTo(l,w,U,b,M,S,g)),A=="o1235"&&(m=S+c.shift(),E=g+c.shift(),T=m+c.shift(),y=E+c.shift(),p=T+c.shift(),v=y+c.shift(),w=p+c.shift(),U=v+c.shift(),b=w+c.shift(),M=U+c.shift(),S=b+c.shift(),g=M+c.shift(),c.shift(),e.U.P.curveTo(l,m,E,T,y,p,v),e.U.P.curveTo(l,w,U,b,M,S,g)),A=="o1236"&&(m=S+c.shift(),E=g+c.shift(),T=m+c.shift(),v=y=E+c.shift(),U=y,b=(w=(p=T+c.shift())+c.shift())+c.shift(),M=U+c.shift(),S=b+c.shift(),e.U.P.curveTo(l,m,E,T,y,p,v),e.U.P.curveTo(l,w,U,b,M,S,g)),A=="o1237"&&(m=S+c.shift(),E=g+c.shift(),T=m+c.shift(),y=E+c.shift(),p=T+c.shift(),v=y+c.shift(),w=p+c.shift(),U=v+c.shift(),b=w+c.shift(),M=U+c.shift(),Math.abs(b-S)>Math.abs(M-g)?S=b+c.shift():g=M+c.shift(),e.U.P.curveTo(l,m,E,T,y,p,v),e.U.P.curveTo(l,w,U,b,M,S,g));else if(A=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var K=c.shift(),W=c.shift(),Y=c.shift(),L=c.shift(),z=e.CFF.glyphBySE(a,Y),V=e.CFF.glyphBySE(a,L);e.U._drawCFF(a.CharStrings[z],i,a,o,l),i.x=K,i.y=W,e.U._drawCFF(a.CharStrings[V],i,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(A=="o19"||A=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,_+=u+7>>3;else if(A=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),g+=c.pop(),S+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,S,g),d=!0;else if(A=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),S+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,S,g),d=!0;else if(A=="o25"){for(;c.length>6;)S+=c.shift(),g+=c.shift(),e.U.P.lineTo(l,S,g);m=S+c.shift(),E=g+c.shift(),T=m+c.shift(),y=E+c.shift(),S=T+c.shift(),g=y+c.shift(),e.U.P.curveTo(l,m,E,T,y,S,g)}else if(A=="o26")for(c.length%2&&(S+=c.shift());c.length>0;)m=S,E=g+c.shift(),S=T=m+c.shift(),g=(y=E+c.shift())+c.shift(),e.U.P.curveTo(l,m,E,T,y,S,g);else if(A=="o27")for(c.length%2&&(g+=c.shift());c.length>0;)E=g,T=(m=S+c.shift())+c.shift(),y=E+c.shift(),S=T+c.shift(),g=y,e.U.P.curveTo(l,m,E,T,y,S,g);else if(A=="o10"||A=="o29"){var ee=A=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var J=c.pop(),B=ee.Subrs[J+ee.Bias];i.x=S,i.y=g,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(B,i,a,o,l),S=i.x,g=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(A=="o30"||A=="o31"){var G=c.length,q=(k=0,A=="o31");for(k+=G-(I=-3&G);k<I;)q?(E=g,T=(m=S+c.shift())+c.shift(),g=(y=E+c.shift())+c.shift(),I-k==5?(S=T+c.shift(),k++):S=T,q=!1):(m=S,E=g+c.shift(),T=m+c.shift(),y=E+c.shift(),S=T+c.shift(),I-k==5?(g=y+c.shift(),k++):g=y,q=!0),e.U.P.curveTo(l,m,E,T,y,S,g),k+=4}else{if((A+"").charAt(0)=="o")throw console.debug("Unknown operation: "+A,n),A;c.push(A)}}}i.x=S,i.y=g,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}function hg(){return(function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(A,I){for(var F=new t(31),X=0;X<31;++X)F[X]=I+=1<<A[X-1];var O=new r(F[30]);for(X=1;X<30;++X)for(var k=F[X];k<F[X+1];++k)O[k]=k-F[X]<<5|X;return[F,O]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,f[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var S=function(A,I,F){for(var X=A.length,O=0,k=new t(I);O<X;++O)++k[A[O]-1];var K,W=new t(I);for(O=0;O<I;++O)W[O]=W[O-1]+k[O-1]<<1;{K=new t(1<<I);var Y=15-I;for(O=0;O<X;++O)if(A[O])for(var L=O<<4|A[O],z=I-A[O],V=W[A[O]-1]++<<z,ee=V|(1<<z)-1;V<=ee;++V)K[f[V]>>>Y]=L}return K},g=new e(288);for(d=0;d<144;++d)g[d]=8;for(d=144;d<256;++d)g[d]=9;for(d=256;d<280;++d)g[d]=7;for(d=280;d<288;++d)g[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var E=S(g,9),T=S(m,5),y=function(A){for(var I=A[0],F=1;F<A.length;++F)A[F]>I&&(I=A[F]);return I},w=function(A,I,F){var X=I/8|0;return(A[X]|A[X+1]<<8)>>(7&I)&F},U=function(A,I){var F=I/8|0;return(A[F]|A[F+1]<<8|A[F+2]<<16)>>(7&I)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],M=function(A,I,F){var X=new Error(I||b[A]);if(X.code=A,Error.captureStackTrace&&Error.captureStackTrace(X,M),!F)throw X;return X},p=function(A,I,F){var X=A.length;if(!X||F&&!F.l&&X<5)return I||new e(0);var O=!I||F,k=!F||F.i;F||(F={}),I||(I=new e(3*X));var K,W=function(xe){var Ue=I.length;if(xe>Ue){var Ee=new e(Math.max(2*Ue,xe));Ee.set(I),I=Ee}},Y=F.f||0,L=F.p||0,z=F.b||0,V=F.l,ee=F.d,J=F.m,B=F.n,G=8*X;do{if(!V){F.f=Y=w(A,L,1);var q=w(A,L+1,3);if(L+=3,!q){var oe=A[(Ae=((K=L)/8|0)+(7&K&&1)+4)-4]|A[Ae-3]<<8,le=Ae+oe;if(le>X){k&&M(0);break}O&&W(z+oe),I.set(A.subarray(Ae,le),z),F.b=z+=oe,F.p=L=8*le;continue}if(q==1)V=E,ee=T,J=9,B=5;else if(q==2){var ne=w(A,L,31)+257,ce=w(A,L+10,15)+4,we=ne+w(A,L+5,31)+1;L+=14;for(var ye=new e(we),ge=new e(19),fe=0;fe<ce;++fe)ge[a[fe]]=w(A,L+3*fe,7);L+=3*ce;var Re=y(ge),P=(1<<Re)-1,Te=S(ge,Re);for(fe=0;fe<we;){var Ae,ue=Te[w(A,L,P)];if(L+=15&ue,(Ae=ue>>>4)<16)ye[fe++]=Ae;else{var Se=0,C=0;for(Ae==16?(C=3+w(A,L,3),L+=2,Se=ye[fe-1]):Ae==17?(C=3+w(A,L,7),L+=3):Ae==18&&(C=11+w(A,L,127),L+=7);C--;)ye[fe++]=Se}}var x=ye.subarray(0,ne),N=ye.subarray(ne);J=y(x),B=y(N),V=S(x,J),ee=S(N,B)}else M(1);if(L>G){k&&M(0);break}}O&&W(z+131072);for(var $=(1<<J)-1,Q=(1<<B)-1,j=L;;j=L){var Me=(Se=V[U(A,L)&$])>>>4;if((L+=15&Se)>G){k&&M(0);break}if(Se||M(2),Me<256)I[z++]=Me;else{if(Me==256){j=L,V=null;break}var de=Me-254;if(Me>264){var Ce=n[fe=Me-257];de=w(A,L,(1<<Ce)-1)+c[fe],L+=Ce}var Pe=ee[U(A,L)&Q],he=Pe>>>4;if(Pe||M(3),L+=15&Pe,N=h[he],he>3&&(Ce=i[he],N+=U(A,L)&(1<<Ce)-1,L+=Ce),L>G){k&&M(0);break}O&&W(z+131072);for(var _e=z+de;z<_e;z+=4)I[z]=I[z-N],I[z+1]=I[z+1-N],I[z+2]=I[z+2-N],I[z+3]=I[z+3-N];z=_e}}F.l=V,F.p=j,F.b=z,V&&(Y=1,F.m=J,F.d=ee,F.n=B)}while(!Y);return z==I.length?I:(function(xe,Ue,Ee){(Ee==null||Ee>xe.length)&&(Ee=xe.length);var We=new(xe instanceof t?t:xe instanceof r?r:e)(Ee-Ue);return We.set(xe.subarray(Ue,Ee)),We})(I,0,z)},v=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(v,{stream:!0})}catch{}return s.convert_streams=function(A){var I=new DataView(A),F=0;function X(){var ne=I.getUint16(F);return F+=2,ne}function O(){var ne=I.getUint32(F);return F+=4,ne}function k(ne){oe.setUint16(le,ne),le+=2}function K(ne){oe.setUint32(le,ne),le+=4}for(var W={signature:O(),flavor:O(),length:O(),numTables:X(),reserved:X(),totalSfntSize:O(),majorVersion:X(),minorVersion:X(),metaOffset:O(),metaLength:O(),metaOrigLength:O(),privOffset:O(),privLength:O()},Y=0;Math.pow(2,Y)<=W.numTables;)Y++;Y--;for(var L=16*Math.pow(2,Y),z=16*W.numTables-L,V=12,ee=[],J=0;J<W.numTables;J++)ee.push({tag:O(),offset:O(),compLength:O(),origLength:O(),origChecksum:O()}),V+=16;var B,G=new Uint8Array(12+16*ee.length+ee.reduce((function(ne,ce){return ne+ce.origLength+4}),0)),q=G.buffer,oe=new DataView(q),le=0;return K(W.flavor),k(W.numTables),k(L),k(Y),k(z),ee.forEach((function(ne){K(ne.tag),K(ne.origChecksum),K(V),K(ne.origLength),ne.outOffset=V,(V+=ne.origLength)%4!=0&&(V+=4-V%4)})),ee.forEach((function(ne){var ce,we=A.slice(ne.offset,ne.offset+ne.compLength);if(ne.compLength!=ne.origLength){var ye=new Uint8Array(ne.origLength);ce=new Uint8Array(we,2),p(ce,ye)}else ye=new Uint8Array(we);G.set(ye,ne.outOffset);var ge=0;(V=ne.outOffset+ne.origLength)%4!=0&&(ge=4-V%4),G.set(new Uint8Array(ge).buffer,ne.outOffset+ne.origLength),B=V+ge})),q.slice(0,B)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function fg(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,l=16,c=32;let u;function h(b){if(!u){const M={R:i,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let p in r){let v=0;r[p].split(",").forEach(D=>{let[A,I]=D.split("+");A=parseInt(A,36),I=I?parseInt(I,36):0,u.set(v+=A,M[p]);for(let F=I;F--;)u.set(++v,M[p])})}}return u.get(b)||c}const f=1,d=2,_=3,S=4,g=[null,"isol","init","fina","medi"];function m(b){const M=new Uint8Array(b.length);let p=c,v=f,D=-1;for(let A=0;A<b.length;A++){const I=b.codePointAt(A);let F=h(I)|0,X=f;F&o||(p&(n|a|l)?F&(i|a|l)?(X=_,(v===f||v===_)&&M[D]++):F&(n|c)&&(v===d||v===S)&&M[D]--:p&(i|c)&&(v===d||v===S)&&M[D]--,v=M[A]=X,p=F,D=A,I>65535&&A++)}return M}function E(b,M){const p=[];for(let D=0;D<M.length;D++){const A=M.codePointAt(D);A>65535&&D++,p.push(s.U.codeToGlyph(b,A))}const v=b.GSUB;if(v){const{lookupList:D,featureList:A}=v;let I;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,X=[];A.forEach(O=>{if(F.test(O.tag))for(let k=0;k<O.tab.length;k++){if(X[O.tab[k]])continue;X[O.tab[k]]=!0;const K=D[O.tab[k]],W=/^(isol|init|fina|medi)$/.test(O.tag);W&&!I&&(I=m(M));for(let Y=0;Y<p.length;Y++)(!I||!W||g[I[Y]]===O.tag)&&s.U._applySubs(p,Y,K,D)}})}return p}function T(b,M){const p=new Int16Array(M.length*3);let v=0;for(;v<M.length;v++){const F=M[v];if(F===-1)continue;p[v*3+2]=b.hmtx.aWidth[F];const X=b.GPOS;if(X){const O=X.lookupList;for(let k=0;k<O.length;k++){const K=O[k];for(let W=0;W<K.tabs.length;W++){const Y=K.tabs[W];if(K.ltype===1){if(s._lctf.coverageIndex(Y.coverage,F)!==-1&&Y.pos){I(Y.pos,v);break}}else if(K.ltype===2){let L=null,z=D();if(z!==-1){const V=s._lctf.coverageIndex(Y.coverage,M[z]);if(V!==-1){if(Y.fmt===1){const ee=Y.pairsets[V];for(let J=0;J<ee.length;J++)ee[J].gid2===F&&(L=ee[J])}else if(Y.fmt===2){const ee=s.U._getGlyphClass(M[z],Y.classDef1),J=s.U._getGlyphClass(F,Y.classDef2);L=Y.matrix[ee][J]}if(L){L.val1&&I(L.val1,z),L.val2&&I(L.val2,v);break}}}}else if(K.ltype===4){const L=s._lctf.coverageIndex(Y.markCoverage,F);if(L!==-1){const z=D(A),V=z===-1?-1:s._lctf.coverageIndex(Y.baseCoverage,M[z]);if(V!==-1){const ee=Y.markArray[L],J=Y.baseArray[V][ee.markClass];p[v*3]=J.x-ee.x+p[z*3]-p[z*3+2],p[v*3+1]=J.y-ee.y+p[z*3+1];break}}}else if(K.ltype===6){const L=s._lctf.coverageIndex(Y.mark1Coverage,F);if(L!==-1){const z=D();if(z!==-1){const V=M[z];if(y(b,V)===3){const ee=s._lctf.coverageIndex(Y.mark2Coverage,V);if(ee!==-1){const J=Y.mark1Array[L],B=Y.mark2Array[ee][J.markClass];p[v*3]=B.x-J.x+p[z*3]-p[z*3+2],p[v*3+1]=B.y-J.y+p[z*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const O=D();if(O!==-1){const k=b.kern.glyph1.indexOf(M[O]);if(k!==-1){const K=b.kern.rval[k].glyph2.indexOf(F);K!==-1&&(p[O*3+2]+=b.kern.rval[k].vals[K])}}}}return p;function D(F){for(let X=v-1;X>=0;X--)if(M[X]!==-1&&(!F||F(M[X])))return X;return-1}function A(F){return y(b,F)===1}function I(F,X){for(let O=0;O<3;O++)p[X*3+O]+=F[O]||0}}function y(b,M){const p=b.GDEF&&b.GDEF.glyphClassDef;return p?s.U._getGlyphClass(M,p):0}function w(...b){for(let M=0;M<b.length;M++)if(typeof b[M]=="number")return b[M]}function U(b){const M=Object.create(null),p=b["OS/2"],v=b.hhea,D=b.head.unitsPerEm,A=w(p&&p.sTypoAscender,v&&v.ascender,D),I={unitsPerEm:D,ascender:A,descender:w(p&&p.sTypoDescender,v&&v.descender,0),capHeight:w(p&&p.sCapHeight,A),xHeight:w(p&&p.sxHeight,A),lineGap:w(p&&p.sTypoLineGap,v&&v.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(b,F)>0},forEachGlyph(F,X,O,k){let K=0;const W=1/I.unitsPerEm*X,Y=E(b,F);let L=0;const z=T(b,Y);return Y.forEach((V,ee)=>{if(V!==-1){let J=M[V];if(!J){const{cmds:B,crds:G}=s.U.glyphToPath(b,V);let q="",oe=0;for(let ye=0,ge=B.length;ye<ge;ye++){const fe=t[B[ye]];q+=B[ye];for(let Re=1;Re<=fe;Re++)q+=(Re>1?",":"")+G[oe++]}let le,ne,ce,we;if(G.length){le=ne=1/0,ce=we=-1/0;for(let ye=0,ge=G.length;ye<ge;ye+=2){let fe=G[ye],Re=G[ye+1];fe<le&&(le=fe),Re<ne&&(ne=Re),fe>ce&&(ce=fe),Re>we&&(we=Re)}}else le=ce=ne=we=0;J=M[V]={index:V,advanceWidth:b.hmtx.aWidth[V],xMin:le,yMin:ne,xMax:ce,yMax:we,path:q}}k.call(null,J,K+z[ee*3]*W,z[ee*3+1]*W,L),K+=z[ee*3+2]*W,O&&(K+=O*X)}L+=F.codePointAt(L)>65535?2:1}),K}};return I}return function(M){const p=new Uint8Array(M,0,4),v=s._bin.readASCII(p,0,4);if(v==="wOFF")M=e(M);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return U(s.parse(M)[0])}}const dg=zi({name:"Typr Font Parser",dependencies:[ug,hg,fg],init(s,e,t){const r=s(),n=e();return t(r,n)}});function pg(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(T){var y=T>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&T))},e.prototype.has=function(T){var y=this.buckets.get(T>>5);return y!==void 0&&(y&1<<(31&T))!=0},e.prototype.serialize=function(){var T=[];return this.buckets.forEach((function(y,w){T.push((+w).toString(36)+":"+y.toString(36))})),T.join(",")},e.prototype.deserialize=function(T){var y=this;this.buckets.clear(),T.split(",").forEach((function(w){var U=w.split(":");y.buckets.set(parseInt(U[0],36),parseInt(U[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(T){var y=(function(U){return U&n})(T).toString(16),w=(function(U){return(U&n)+t-1})(T).toString(16);return"codepoint-index/plane"+(T>>16)+"/"+y+"-"+w+".json"}function a(T,y){var w=T&r,U=y.codePointAt(w/6|0);return((U=(U||48)-48)&1<<w%6)!=0}function o(T,y){var w;(w=T,w.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(U){return U.split("-").map((function(b){return parseInt(b.trim(),16)}))}))).forEach((function(U){var b=U[0],M=U[1];M===void 0&&(M=b),y(b,M)}))}function l(T,y){o(T,(function(w,U){for(var b=w;b<=U;b++)y(b)}))}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(T){var y=h.get(T);return y||(y=new e,l(T.ranges,(function(w){return y.add(w)})),h.set(T,y)),y}var _,S=new Map;function g(T,y,w){return T[y]?y:T[w]?w:(function(U){for(var b in U)return b})(T)}function m(T,y){var w=y;if(!T.includes(w)){w=1/0;for(var U=0;U<T.length;U++)Math.abs(T[U]-y)<Math.abs(w-y)&&(w=T[U])}return w}function E(T){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(y){_.add(y)}))),_.has(T)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(T,y){y===void 0&&(y={});var w,U=y.lang;U===void 0&&(U=new RegExp("\\p{Script=Hangul}","u").test(w=T)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(w)?"ja":"en");var b=y.category;b===void 0&&(b="sans-serif");var M=y.style;M===void 0&&(M="normal");var p=y.weight;p===void 0&&(p=400);var v=(y.dataUrl||f).replace(/\/$/g,""),D=new Map,A=new Uint8Array(T.length),I={},F={},X=new Array(T.length),O=new Map,k=!1;function K(L){var z=S.get(L);return z||(z=fetch(v+"/"+L).then((function(V){if(!V.ok)throw new Error(V.statusText);return V.json().then((function(ee){if(!Array.isArray(ee)||ee[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ee[0]);return ee[1]}))})).catch((function(V){if(v!==f)return k||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+V.message),k=!0),v=f,S.delete(L),K(L);throw V})),S.set(L,z)),z}for(var W=function(L){var z=T.codePointAt(L),V=i(z);X[L]=V,c[V]||O.has(V)||O.set(V,K(V).then((function(ee){c[V]=ee}))),z>65535&&(L++,Y=L)},Y=0;Y<T.length;Y++)W(Y);return Promise.all(O.values()).then((function(){O.clear();for(var L=function(V){var ee=T.codePointAt(V),J=null,B=c[X[V]],G=void 0;for(var q in B){var oe=F[q];if(oe===void 0&&(oe=F[q]=new RegExp(q).test(U||"en")),oe){for(var le in G=q,B[q])if(a(ee,B[q][le])){J=le;break}break}}if(!J){e:for(var ne in B)if(ne!==G){for(var ce in B[ne])if(a(ee,B[ne][ce])){J=ce;break e}}}J||(console.debug("No font coverage for U+"+ee.toString(16)),J="latin"),X[V]=J,u[J]||O.has(J)||O.set(J,K("font-meta/"+J+".json").then((function(we){u[J]=we}))),ee>65535&&(V++,z=V)},z=0;z<T.length;z++)L(z);return Promise.all(O.values())})).then((function(){for(var L,z=null,V=0;V<T.length;V++){var ee=T.codePointAt(V);if(z&&(E(ee)||d(z).has(ee)))A[V]=A[V-1];else{z=u[X[V]];var J=I[z.id];if(!J){var B=z.typeforms,G=g(B,b,"sans-serif"),q=g(B[G],M,"normal"),oe=m((L=B[G])===null||L===void 0?void 0:L[q],p);J=I[z.id]=v+"/font-files/"+z.id+"/"+G+"."+q+"."+oe+".woff"}var le=D.get(J);le==null&&(le=D.size,D.set(J,le)),A[V]=le}ee>65535&&(V++,A[V]=A[V-1])}return{fontUrls:Array.from(D.keys()),chars:A}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function mg(s,e){const t=Object.create(null),r=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(a,o){let l=t[a];l?o(l):r[a]?r[a].push(o):(r[a]=[o],n(a,c=>{c.src=a,t[a]=c,r[a].forEach(u=>u(c)),delete r[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),_=[];a.length||E();const S=new Map,g=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let b=0;(function M(p=0){for(let v=p,D=a.length;v<D;v++){const A=a.codePointAt(v);if(b===1&&_[d[v-1]].supportsCodePoint(A)||v>0&&/\s/.test(a[v]))d[v]=d[v-1],b===2&&(g[g.length-1][1]=v);else for(let I=d[v],F=c.length;I<=F;I++)if(I===F){const X=b===2?g[g.length-1]:g[g.length]=[v,v];X[1]=v,b=2}else{d[v]=I;const{src:X,unicodeRange:O}=c[I];if(!O||T(A,O)){const k=t[X];if(!k){i(X,()=>{M(v)});return}if(k.supportsCodePoint(A)){let K=S.get(k);typeof K!="number"&&(K=_.length,_.push(k),S.set(k,K)),d[v]=K,b=1;break}}}A>65535&&v+1<D&&(d[v+1]=d[v],v++,b===2&&(g[g.length-1][1]=v))}m()})()}else g.push([0,a.length-1]),m();function m(){if(g.length){const y=g.map(w=>a.substring(w[0],w[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:w,chars:U})=>{const b=_.length;let M=0;g.forEach(v=>{for(let D=0,A=v[1]-v[0];D<=A;D++)d[v[0]+D]=U[M++]+b;M++});let p=0;w.forEach((v,D)=>{i(v,A=>{_[D+b]=A,++p===w.length&&E()})})})}else E()}function E(){o({chars:d,fonts:_})}function T(y,w){for(let U=0;U<w.length;U++){const[b,M=b]=w[U];if(b<=y&&y<=M)return!0}return!1}}}const gg=zi({name:"FontResolver",dependencies:[mg,dg,pg],init(s,e,t){return s(e,t())}});function _g(s,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:_,lang:S,fonts:g,style:m,weight:E,preResolvedFonts:T,unicodeFontsURL:y},w){const U=({chars:b,fonts:M})=>{let p,v;const D=[];for(let A=0;A<b.length;A++)b[A]!==v?(v=b[A],D.push(p={start:A,end:A,fontObj:M[b[A]]})):p.end=A;w(D)};T?U(T):s(_,U,{lang:S,fonts:g,style:m,weight:E,unicodeFontsURL:y})}function o({text:_="",font:S,lang:g,sdfGlyphSize:m=64,fontSize:E=400,fontWeight:T=1,fontStyle:y="normal",letterSpacing:w=0,lineHeight:U="normal",maxWidth:b=1/0,direction:M,textAlign:p="left",textIndent:v=0,whiteSpace:D="normal",overflowWrap:A="normal",anchorX:I=0,anchorY:F=0,metricsOnly:X=!1,unicodeFontsURL:O,preResolvedFonts:k=null,includeCaretPositions:K=!1,chunkedBoundsSize:W=8192,colorRanges:Y=null},L){const z=h(),V={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),E=+E,w=+w,b=+b,U=U||"normal",v=+v,a({text:_,lang:g,style:y,weight:T,fonts:typeof S=="string"?[{src:S}]:S,unicodeFontsURL:O,preResolvedFonts:k},ee=>{V.fontLoad=h()-z;const J=isFinite(b);let B=null,G=null,q=null,oe=null,le=null,ne=null,ce=null,we=null,ye=0,ge=0,fe=D!=="nowrap";const Re=new Map,P=h();let Te=v,Ae=0,ue=new f;const Se=[ue];ee.forEach(Q=>{const{fontObj:j}=Q,{ascender:Me,descender:de,unitsPerEm:Ce,lineGap:Pe,capHeight:he,xHeight:_e}=j;let xe=Re.get(j);if(!xe){const me=E/Ce,ve=U==="normal"?(Me-de+Pe)*me:U*E,Ie=(ve-(Me-de)*me)/2,pe=Math.min(ve,(Me-de)*me),ae=(Me+de)/2*me+pe/2;xe={index:Re.size,src:j.src,fontObj:j,fontSizeMult:me,unitsPerEm:Ce,ascender:Me*me,descender:de*me,capHeight:he*me,xHeight:_e*me,lineHeight:ve,baseline:-Ie-Me*me,caretTop:ae,caretBottom:ae-pe},Re.set(j,xe)}const{fontSizeMult:Ue}=xe,Ee=_.slice(Q.start,Q.end+1);let We,H;j.forEachGlyph(Ee,E,w,(me,ve,Ie,pe)=>{ve+=Ae,pe+=Q.start,We=ve,H=me;const ae=_.charAt(pe),be=me.advanceWidth*Ue,Oe=ue.count;let Be;if("isEmpty"in me||(me.isWhitespace=!!ae&&new RegExp(n).test(ae),me.canBreakAfter=!!ae&&i.test(ae),me.isEmpty=me.xMin===me.xMax||me.yMin===me.yMax||r.test(ae)),!me.isWhitespace&&!me.isEmpty&&ge++,fe&&J&&!me.isWhitespace&&ve+be+Te>b&&Oe){if(ue.glyphAt(Oe-1).glyphObj.canBreakAfter)Be=new f,Te=-ve;else for(let ct=Oe;ct--;)if(ct===0&&A==="break-word"){Be=new f,Te=-ve;break}else if(ue.glyphAt(ct).glyphObj.canBreakAfter){Be=ue.splitAt(ct+1);const ut=Be.glyphAt(0).x;Te-=ut;for(let pt=Be.count;pt--;)Be.glyphAt(pt).x-=ut;break}Be&&(ue.isSoftWrapped=!0,ue=Be,Se.push(ue),ye=b)}let Xe=ue.glyphAt(ue.count);Xe.glyphObj=me,Xe.x=ve+Te,Xe.y=Ie,Xe.width=be,Xe.charIndex=pe,Xe.fontData=xe,ae===`
`&&(ue=new f,Se.push(ue),Te=-(ve+be+w*E)+v)}),Ae=We+H.advanceWidth*Ue+w*E});let C=0;Se.forEach(Q=>{let j=!0;for(let Me=Q.count;Me--;){const de=Q.glyphAt(Me);j&&!de.glyphObj.isWhitespace&&(Q.width=de.x+de.width,Q.width>ye&&(ye=Q.width),j=!1);let{lineHeight:Ce,capHeight:Pe,xHeight:he,baseline:_e}=de.fontData;Ce>Q.lineHeight&&(Q.lineHeight=Ce);const xe=_e-Q.baseline;xe<0&&(Q.baseline+=xe,Q.cap+=xe,Q.ex+=xe),Q.cap=Math.max(Q.cap,Q.baseline+Pe),Q.ex=Math.max(Q.ex,Q.baseline+he)}Q.baseline-=C,Q.cap-=C,Q.ex-=C,C+=Q.lineHeight});let x=0,N=0;if(I&&(typeof I=="number"?x=-I:typeof I=="string"&&(x=-ye*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),F&&(typeof F=="number"?N=-F:typeof F=="string"&&(N=F==="top"?0:F==="top-baseline"?-Se[0].baseline:F==="top-cap"?-Se[0].cap:F==="top-ex"?-Se[0].ex:F==="middle"?C/2:F==="bottom"?C:F==="bottom-baseline"?-Se[Se.length-1].baseline:c(F)*C)),!X){const Q=e.getEmbeddingLevels(_,M);B=new Uint16Array(ge),G=new Uint8Array(ge),q=new Float32Array(ge*2),oe={},ce=[1/0,1/0,-1/0,-1/0],we=[],K&&(ne=new Float32Array(_.length*4)),Y&&(le=new Uint8Array(ge*3));let j=0,Me=-1,de=-1,Ce,Pe;if(Se.forEach((he,_e)=>{let{count:xe,width:Ue}=he;if(xe>0){let Ee=0;for(let pe=xe;pe--&&he.glyphAt(pe).glyphObj.isWhitespace;)Ee++;let We=0,H=0;if(p==="center")We=(ye-Ue)/2;else if(p==="right")We=ye-Ue;else if(p==="justify"&&he.isSoftWrapped){let pe=0;for(let ae=xe-Ee;ae--;)he.glyphAt(ae).glyphObj.isWhitespace&&pe++;H=(ye-Ue)/pe}if(H||We){let pe=0;for(let ae=0;ae<xe;ae++){let be=he.glyphAt(ae);const Oe=be.glyphObj;be.x+=We+pe,H!==0&&Oe.isWhitespace&&ae<xe-Ee&&(pe+=H,be.width+=H)}}const me=e.getReorderSegments(_,Q,he.glyphAt(0).charIndex,he.glyphAt(he.count-1).charIndex);for(let pe=0;pe<me.length;pe++){const[ae,be]=me[pe];let Oe=1/0,Be=-1/0;for(let Xe=0;Xe<xe;Xe++)if(he.glyphAt(Xe).charIndex>=ae){let ct=Xe,ut=Xe;for(;ut<xe;ut++){let pt=he.glyphAt(ut);if(pt.charIndex>be)break;ut<xe-Ee&&(Oe=Math.min(Oe,pt.x),Be=Math.max(Be,pt.x+pt.width))}for(let pt=ct;pt<ut;pt++){const It=he.glyphAt(pt);It.x=Be-(It.x+It.width-Oe)}break}}let ve;const Ie=pe=>ve=pe;for(let pe=0;pe<xe;pe++){const ae=he.glyphAt(pe);ve=ae.glyphObj;const be=ve.index,Oe=Q.levels[ae.charIndex]&1;if(Oe){const Be=e.getMirroredCharacter(_[ae.charIndex]);Be&&ae.fontData.fontObj.forEachGlyph(Be,0,0,Ie)}if(K){const{charIndex:Be,fontData:Xe}=ae,ct=ae.x+x,ut=ae.x+ae.width+x;ne[Be*4]=Oe?ut:ct,ne[Be*4+1]=Oe?ct:ut,ne[Be*4+2]=he.baseline+Xe.caretBottom+N,ne[Be*4+3]=he.baseline+Xe.caretTop+N;const pt=Be-Me;pt>1&&u(ne,Me,pt),Me=Be}if(Y){const{charIndex:Be}=ae;for(;Be>de;)de++,Y.hasOwnProperty(de)&&(Pe=Y[de])}if(!ve.isWhitespace&&!ve.isEmpty){const Be=j++,{fontSizeMult:Xe,src:ct,index:ut}=ae.fontData,pt=oe[ct]||(oe[ct]={});pt[be]||(pt[be]={path:ve.path,pathBounds:[ve.xMin,ve.yMin,ve.xMax,ve.yMax]});const It=ae.x+x,Xt=ae.y+he.baseline+N;q[Be*2]=It,q[Be*2+1]=Xt;const Kt=It+ve.xMin*Xe,Zt=Xt+ve.yMin*Xe,un=It+ve.xMax*Xe,Tt=Xt+ve.yMax*Xe;Kt<ce[0]&&(ce[0]=Kt),Zt<ce[1]&&(ce[1]=Zt),un>ce[2]&&(ce[2]=un),Tt>ce[3]&&(ce[3]=Tt),Be%W===0&&(Ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},we.push(Ce)),Ce.end++;const gt=Ce.rect;if(Kt<gt[0]&&(gt[0]=Kt),Zt<gt[1]&&(gt[1]=Zt),un>gt[2]&&(gt[2]=un),Tt>gt[3]&&(gt[3]=Tt),B[Be]=be,G[Be]=ut,Y){const hn=Be*3;le[hn]=Pe>>16&255,le[hn+1]=Pe>>8&255,le[hn+2]=Pe&255}}}}}),ne){const he=_.length-Me;he>1&&u(ne,Me,he)}}const $=[];Re.forEach(({index:Q,src:j,unitsPerEm:Me,ascender:de,descender:Ce,lineHeight:Pe,capHeight:he,xHeight:_e})=>{$[Q]={src:j,unitsPerEm:Me,ascender:de,descender:Ce,lineHeight:Pe,capHeight:he,xHeight:_e}}),V.typesetting=h()-P,L({glyphIds:B,glyphFontIndices:G,glyphPositions:q,glyphData:oe,fontData:$,caretPositions:ne,glyphColors:le,chunkedBounds:we,fontSize:E,topBaseline:N+Se[0].baseline,blockBounds:[x,N-C,x+ye,N],visibleBounds:ce,timings:V})})}function l(_,S){o({..._,metricsOnly:!0},g=>{const[m,E,T,y]=g.blockBounds;S({width:T-m,height:y-E})})}function c(_){let S=_.match(/^([\d.]+)%$/),g=S?parseFloat(S[1]):NaN;return isNaN(g)?0:g/100}function u(_,S,g){const m=_[S*4],E=_[S*4+1],T=_[S*4+2],y=_[S*4+3],w=(E-m)/g;for(let U=0;U<g;U++){const b=(S+U)*4;_[b]=m+w*U,_[b+1]=m+w*(U+1),_[b+2]=T,_[b+3]=y}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let S=f.flyweight;return S.data=this.data,S.index=_,S},splitAt(_){let S=new f;return S.data=this.data.splice(_*d.length),S}},f.flyweight=d.reduce((_,S,g,m)=>(Object.defineProperty(_,S,{get(){return this.data[this.index*d.length+g]},set(E){this.data[this.index*d.length+g]=E}}),_),{data:null,index:0}),{typeset:o,measure:l}}const li=()=>(self.performance||Date).now(),hs=yc();let Rl;function vg(s,e,t,r,n,i,a,o,l,c,u=!0){return u?Sg(s,e,t,r,n,i,a,o,l,c).then(null,h=>(Rl||(console.warn("WebGL SDF generation failed, falling back to JS",h),Rl=!0),Ul(s,e,t,r,n,i,a,o,l,c))):Ul(s,e,t,r,n,i,a,o,l,c)}const ns=[],xg=5;let eo=0;function Tc(){const s=li();for(;ns.length&&li()-s<xg;)ns.shift()();eo=ns.length?setTimeout(Tc,0):0}const Sg=(...s)=>new Promise((e,t)=>{ns.push(()=>{const r=li();try{hs.webgl.generateIntoCanvas(...s),e({timing:li()-r})}catch(n){t(n)}}),eo||(eo=setTimeout(Tc,0))}),Mg=4,yg=2e3,Pl={};let Eg=0;function Ul(s,e,t,r,n,i,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+Eg++%Mg;let h=Pl[u];return h||(h=Pl[u]={workerModule:zi({name:u,workerId:u,dependencies:[yc,li],init(f,d){const _=f().javascript.generate;return function(...S){const g=d();return{textureData:_(...S),timing:d()-g}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,r,n,i).then(({textureData:f,timing:d})=>{const _=li(),S=new Uint8Array(f.length*4);for(let g=0;g<f.length;g++)S[g*4+c]=f[g];return hs.webglUtils.renderImageData(a,S,o,l,s,e,1<<3-c),d+=li()-_,--h.requests===0&&(h.idleTimer=setTimeout(()=>{eg(u)},yg)),{timing:d}})}function Tg(s){s._warm||(hs.webgl.isSupported(s),s._warm=!0)}const bg=hs.webglUtils.resizeWebGLCanvasWithoutClearing,cr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Ag=new nt;function Ri(){return(self.performance||Date).now()}const Dl=Object.create(null);function wg(s,e){s=Rg({},s);const t=Ri(),r=[];if(s.font&&r.push({label:"user",src:Pg(s.font)}),s.font=r,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||cr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||cr.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let _=s.colorRanges[d];typeof _!="number"&&(_=Ag.set(_).getHex()),f[d]=_}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:i}=cr,{sdfGlyphSize:a}=s,o=n/a*4;let l=Dl[a];if(!l){const f=document.createElement("canvas");f.width=n,f.height=a*256/o,l=Dl[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Ut(f,void 0,void 0,void 0,Et,Et),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,Cg(l)}const{sdfTexture:c,sdfCanvas:u}=l;wc(s).then(f=>{const{glyphIds:d,glyphFontIndices:_,fontData:S,glyphPositions:g,fontSize:m,timings:E}=f,T=[],y=new Float32Array(d.length*4);let w=0,U=0;const b=Ri(),M=S.map(I=>{let F=l.glyphsByFont.get(I.src);return F||l.glyphsByFont.set(I.src,F=new Map),F});d.forEach((I,F)=>{const X=_[F],{src:O,unitsPerEm:k}=S[X];let K=M[X].get(I);if(!K){const{path:V,pathBounds:ee}=f.glyphData[O][I],J=Math.max(ee[2]-ee[0],ee[3]-ee[1])/a*(cr.sdfMargin*a+.5),B=l.glyphCount++,G=[ee[0]-J,ee[1]-J,ee[2]+J,ee[3]+J];M[X].set(I,K={path:V,atlasIndex:B,sdfViewBox:G}),T.push(K)}const{sdfViewBox:W}=K,Y=g[U++],L=g[U++],z=m/k;y[w++]=Y+W[0]*z,y[w++]=L+W[1]*z,y[w++]=Y+W[2]*z,y[w++]=L+W[3]*z,d[F]=K.atlasIndex}),E.quads=(E.quads||0)+(Ri()-b);const p=Ri();E.sdf={};const v=u.height,D=Math.ceil(l.glyphCount/o),A=Math.pow(2,Math.ceil(Math.log2(D*a)));A>v&&(console.info(`Increasing SDF texture size ${v}->${A}`),bg(u,n,A),c.dispose()),Promise.all(T.map(I=>bc(I,l,s.gpuAccelerateSDF).then(({timing:F})=>{E.sdf[I.atlasIndex]=F}))).then(()=>{T.length&&!l.contextLost&&(Ac(l),c.needsUpdate=!0),E.sdfTotal=Ri()-p,E.total=Ri()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:i,glyphBounds:y,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Tg(u)})}function bc({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=cr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return vg(r,r,s,t,c,l,n,h,f,d,a)}function Cg(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const r=[];s.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(bc(i,s,!0))})}),Promise.all(r).then(()=>{Ac(s),s.sdfTexture.needsUpdate=!0})})}function Rg(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let qr;function Pg(s){return qr||(qr=typeof document>"u"?{}:document.createElement("a")),qr.href=s,qr.href}function Ac(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:n}=e,i=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*n*4)&&(a=new Uint8Array(r*n*4),t.image={width:r,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,a)}}const Ug=zi({name:"Typesetter",dependencies:[_g,gg,ng],init(s,e,t){return s(e,t())}}),wc=zi({name:"Typesetter",dependencies:[Ug],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});wc.onMainThread;const Ll={};function Dg(s){let e=Ll[s];return e||(e=Ll[s]=new Yn(1,1,s,s).translate(.5,.5,0)),e}const Lg="aTroikaGlyphBounds",Il="aTroikaGlyphIndex",Ig="aTroikaGlyphColor";class Fg extends Zu{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ki,this.boundingBox=new Dn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Dg(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(Lg,e,4),this.updateAttributeData(Il,t,1),this.updateAttributeData(Ig,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,_=e[2]/f,S=i((d+u)/h)!==i((_+u)/h)?-f:a(l(d)*f,l(_)*f),g=i((d-u)/h)!==i((_-u)/h)?f:o(l(d)*f,l(_)*f),m=i((d+n)/h)!==i((_+n)/h)?f*2:o(f-c(d)*f,f-c(_)*f);r.min.set(S,e[1],t<0?-m:0),r.max.set(g,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Il).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new ja(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Ng=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Og=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Bg=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,kg=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Gg(s){const e=$a(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new rt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new dt(0,0,0,0)},uTroikaClipRect:{value:new dt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new rt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new nt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Ng,vertexTransform:Og,fragmentDefs:Bg,fragmentColorTransform:kg,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Ec,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const mo=new fo({color:16777215,side:pn,transparent:!0}),Fl=8421504,Nl=new ft,jr=new se,$s=new se,ar=[],zg=new se,ea="+x+y";function Ol(s){return Array.isArray(s)?s[0]:s}let Cc=()=>{const s=new Gt(new Yn(1,1),mo);return Cc=()=>s,s},Rc=()=>{const s=new Gt(new Yn(1,1,32,1),mo);return Rc=()=>s,s};const Vg={type:"syncstart"},Hg={type:"synccomplete"},Pc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Wg=Pc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Uc extends Gt{constructor(){const e=new Fg;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Fl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ea,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Vg),wg({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Hg),e&&e()})))}onBeforeRender(e,t,r,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return Gg(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=mo.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Ol(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Ol(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,_,S=0,g=0;if(t){let{outlineWidth:E,outlineOffsetX:T,outlineOffsetY:y,outlineBlur:w,outlineOpacity:U}=this;c=this._parsePercent(E)||0,u=Math.max(0,this._parsePercent(w)||0),f=U,S=this._parsePercent(T)||0,g=this._parsePercent(y)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(_=this.strokeColor,r.uTroikaStrokeColor.value.set(_??Fl),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(S,g),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{const E=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-E,l[1]-E,l[2]+E,l[3]+E)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new nt;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||ea;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==ea&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;jr.set(0,0,0)[u]=c==="-"?1:-1,$s.set(0,0,0)[f]=h==="-"?-1:1,Nl.lookAt(zg,jr.cross($s),$s),o.setFromMatrix4(Nl)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new rt){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new rt){return jr.copy(e),this.localPositionToTextCoords(this.worldToLocal(jr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,a=n?Rc():Cc(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=i[0]+c.getX(u)*(i[2]-i[0]);const f=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,ar.length=0,a.raycast(e,ar);for(let u=0;u<ar.length;u++)ar[u].object=this,t.push(ar[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Wg.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Pc.forEach(s=>{const e="_private_"+s;Object.defineProperty(Uc.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Dn;new nt;class Xg{constructor(e){this.state=e,this.meshes=[],this.maxLabels=25}initialize(e){this.dispose();for(let t=0;t<this.maxLabels;t++){const r=new Uc;r.anchorX="center",r.anchorY="middle",r.outlineWidth="2%",r.visible=!1,e.add(r),this.meshes.push(r)}}updateVisibleText(){const e=this.state.controls.screenToWorld(0,0),t=this.state.controls.screenToWorld(this.state.canvas.clientWidth,this.state.canvas.clientHeight),r={minX:Math.min(e.x,t.x),maxX:Math.max(e.x,t.x),minY:Math.min(e.y,t.y),maxY:Math.max(e.y,t.y)};if((r.maxX-r.minX)*(r.maxY-r.minY)>3e3)return;let i=[];const{numItems:a,offsets:o,sizes:l,titles:c}=this.state.data;for(let u=0;u<a;u++){const h=o[u*2],f=o[u*2+1];h>=r.minX&&h<=r.maxX&&f>=r.minY&&f<=r.maxY&&i.push({titles:c[u],x:h,y:f,diam:l[u]*2})}i=i.sort((u,h)=>h.diam-u.diam).slice(0,this.maxLabels);for(let u=0;u<this.maxLabels;u++){const h=this.meshes[u];u>=i.length?h.visible=!1:(h.text=i[u].titles,h.visible=!0,h.sync(()=>{h.position.set(i[u].x,i[u].y,0);const f=h.geometry.boundingBox.max.x-h.geometry.boundingBox.min.x,d=h.geometry.boundingBox.max.y-h.geometry.boundingBox.min.y,_=Math.min(i[u].diam/f,i[u].diam/d);h.scale.set(_,_,1)}))}}dispose(){this.meshes.forEach(e=>{e.dispose()}),this.meshes=[]}}function Yg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var is={exports:{}};var qg=is.exports,Bl;function jg(){return Bl||(Bl=1,(function(s,e){((t,r)=>{s.exports=r()})(qg,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},n,i=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,o={},l=0,c={};function u(M){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(p){var v=w(p);v.chunkSize=parseInt(v.chunkSize),p.step||p.chunk||(v.chunkSize=null),this._handle=new S(v),(this._handle.streamer=this)._config=v}).call(this,M),this.parseChunk=function(p,v){var D=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<D){let I=this._config.newline;I||(A=this._config.quoteChar||'"',I=this._handle.guessLineEndings(p,A)),p=[...p.split(I).slice(D)].join(I)}this.isFirstChunk&&b(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(p))!==void 0&&(p=A),this.isFirstChunk=!1,this._halted=!1;var D=this._partialLine+p,A=(this._partialLine="",this._handle.parse(D,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(p=A.meta.cursor,D=(this._finished||(this._partialLine=D.substring(p-this._baseIndex),this._baseIndex=p),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:A,workerId:c.WORKER_ID,finished:D});else if(b(this._config.chunk)&&!v){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!D||!b(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(p){b(this._config.error)?this._config.error(p):a&&this._config.error&&r.postMessage({workerId:c.WORKER_ID,error:p,finished:!1})}}function h(M){var p;(M=M||{}).chunkSize||(M.chunkSize=c.RemoteChunkSize),u.call(this,M),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(p=new XMLHttpRequest,this._config.withCredentials&&(p.withCredentials=this._config.withCredentials),i||(p.onload=U(this._chunkLoaded,this),p.onerror=U(this._chunkError,this)),p.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var v,D=this._config.downloadRequestHeaders;for(v in D)p.setRequestHeader(v,D[v])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,p.setRequestHeader("Range","bytes="+this._start+"-"+A));try{p.send(this._config.downloadRequestBody)}catch(I){this._chunkError(I.message)}i&&p.status===0&&this._chunkError()}},this._chunkLoaded=function(){p.readyState===4&&(p.status<200||400<=p.status?this._chunkError():(this._start+=this._config.chunkSize||p.responseText.length,this._finished=!this._config.chunkSize||this._start>=(v=>(v=v.getResponseHeader("Content-Range"))!==null?parseInt(v.substring(v.lastIndexOf("/")+1)):-1)(p),this.parseChunk(p.responseText)))},this._chunkError=function(v){v=p.statusText||v,this._sendError(new Error(v))}}function f(M){(M=M||{}).chunkSize||(M.chunkSize=c.LocalChunkSize),u.call(this,M);var p,v,D=typeof FileReader<"u";this.stream=function(A){this._input=A,v=A.slice||A.webkitSlice||A.mozSlice,D?((p=new FileReader).onload=U(this._chunkLoaded,this),p.onerror=U(this._chunkError,this)):p=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,I=(this._config.chunkSize&&(I=Math.min(this._start+this._config.chunkSize,this._input.size),A=v.call(A,this._start,I)),p.readAsText(A,this._config.encoding));D||this._chunkLoaded({target:{result:I}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(p.error)}}function d(M){var p;u.call(this,M=M||{}),this.stream=function(v){return p=v,this._nextChunk()},this._nextChunk=function(){var v,D;if(!this._finished)return v=this._config.chunkSize,p=v?(D=p.substring(0,v),p.substring(v)):(D=p,""),this._finished=!p,this.parseChunk(D)}}function _(M){u.call(this,M=M||{});var p=[],v=!0,D=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){D&&p.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),p.length?this.parseChunk(p.shift()):v=!0},this._streamData=U(function(A){try{p.push(typeof A=="string"?A:A.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(p.shift()))}catch(I){this._streamError(I)}},this),this._streamError=U(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=U(function(){this._streamCleanUp(),D=!0,this._streamData("")},this),this._streamCleanUp=U(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function S(M){var p,v,D,A,I=Math.pow(2,53),F=-I,X=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,O=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,k=this,K=0,W=0,Y=!1,L=!1,z=[],V={data:[],errors:[],meta:{}};function ee(q){return M.skipEmptyLines==="greedy"?q.join("").trim()==="":q.length===1&&q[0].length===0}function J(){if(V&&D&&(G("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),D=!1),M.skipEmptyLines&&(V.data=V.data.filter(function(ne){return!ee(ne)})),B()){let ne=function(ce,we){b(M.transformHeader)&&(ce=M.transformHeader(ce,we)),z.push(ce)};if(V)if(Array.isArray(V.data[0])){for(var q=0;B()&&q<V.data.length;q++)V.data[q].forEach(ne);V.data.splice(0,1)}else V.data.forEach(ne)}function oe(ne,ce){for(var we=M.header?{}:[],ye=0;ye<ne.length;ye++){var ge=ye,fe=ne[ye],fe=((Re,P)=>(Te=>(M.dynamicTypingFunction&&M.dynamicTyping[Te]===void 0&&(M.dynamicTyping[Te]=M.dynamicTypingFunction(Te)),(M.dynamicTyping[Te]||M.dynamicTyping)===!0))(Re)?P==="true"||P==="TRUE"||P!=="false"&&P!=="FALSE"&&((Te=>{if(X.test(Te)&&(Te=parseFloat(Te),F<Te&&Te<I))return 1})(P)?parseFloat(P):O.test(P)?new Date(P):P===""?null:P):P)(ge=M.header?ye>=z.length?"__parsed_extra":z[ye]:ge,fe=M.transform?M.transform(fe,ge):fe);ge==="__parsed_extra"?(we[ge]=we[ge]||[],we[ge].push(fe)):we[ge]=fe}return M.header&&(ye>z.length?G("FieldMismatch","TooManyFields","Too many fields: expected "+z.length+" fields but parsed "+ye,W+ce):ye<z.length&&G("FieldMismatch","TooFewFields","Too few fields: expected "+z.length+" fields but parsed "+ye,W+ce)),we}var le;V&&(M.header||M.dynamicTyping||M.transform)&&(le=1,!V.data.length||Array.isArray(V.data[0])?(V.data=V.data.map(oe),le=V.data.length):V.data=oe(V.data,0),M.header&&V.meta&&(V.meta.fields=z),W+=le)}function B(){return M.header&&z.length===0}function G(q,oe,le,ne){q={type:q,code:oe,message:le},ne!==void 0&&(q.row=ne),V.errors.push(q)}b(M.step)&&(A=M.step,M.step=function(q){V=q,B()?J():(J(),V.data.length!==0&&(K+=q.data.length,M.preview&&K>M.preview?v.abort():(V.data=V.data[0],A(V,k))))}),this.parse=function(q,oe,le){var ne=M.quoteChar||'"',ne=(M.newline||(M.newline=this.guessLineEndings(q,ne)),D=!1,M.delimiter?b(M.delimiter)&&(M.delimiter=M.delimiter(q),V.meta.delimiter=M.delimiter):((ne=((ce,we,ye,ge,fe)=>{var Re,P,Te,Ae;fe=fe||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var ue=0;ue<fe.length;ue++){for(var Se,C=fe[ue],x=0,N=0,$=0,Q=(Te=void 0,new m({comments:ge,delimiter:C,newline:we,preview:10}).parse(ce)),j=0;j<Q.data.length;j++)ye&&ee(Q.data[j])?$++:(Se=Q.data[j].length,N+=Se,Te===void 0?Te=Se:0<Se&&(x+=Math.abs(Se-Te),Te=Se));0<Q.data.length&&(N/=Q.data.length-$),(P===void 0||x<=P)&&(Ae===void 0||Ae<N)&&1.99<N&&(P=x,Re=C,Ae=N)}return{successful:!!(M.delimiter=Re),bestDelimiter:Re}})(q,M.newline,M.skipEmptyLines,M.comments,M.delimitersToGuess)).successful?M.delimiter=ne.bestDelimiter:(D=!0,M.delimiter=c.DefaultDelimiter),V.meta.delimiter=M.delimiter),w(M));return M.preview&&M.header&&ne.preview++,p=q,v=new m(ne),V=v.parse(p,oe,le),J(),Y?{meta:{paused:!0}}:V||{meta:{paused:!1}}},this.paused=function(){return Y},this.pause=function(){Y=!0,v.abort(),p=b(M.chunk)?"":p.substring(v.getCharIndex())},this.resume=function(){k.streamer._halted?(Y=!1,k.streamer.parseChunk(p,!0)):setTimeout(k.resume,3)},this.aborted=function(){return L},this.abort=function(){L=!0,v.abort(),V.meta.aborted=!0,b(M.complete)&&M.complete(V),p=""},this.guessLineEndings=function(ce,ne){ce=ce.substring(0,1048576);var ne=new RegExp(g(ne)+"([^]*?)"+g(ne),"gm"),le=(ce=ce.replace(ne,"")).split("\r"),ne=ce.split(`
`),ce=1<ne.length&&ne[0].length<le[0].length;if(le.length===1||ce)return`
`;for(var we=0,ye=0;ye<le.length;ye++)le[ye][0]===`
`&&we++;return we>=le.length/2?`\r
`:"\r"}}function g(M){return M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(M){var p=(M=M||{}).delimiter,v=M.newline,D=M.comments,A=M.step,I=M.preview,F=M.fastMode,X=null,O=!1,k=M.quoteChar==null?'"':M.quoteChar,K=k;if(M.escapeChar!==void 0&&(K=M.escapeChar),(typeof p!="string"||-1<c.BAD_DELIMITERS.indexOf(p))&&(p=","),D===p)throw new Error("Comment character same as delimiter");D===!0?D="#":(typeof D!="string"||-1<c.BAD_DELIMITERS.indexOf(D))&&(D=!1),v!==`
`&&v!=="\r"&&v!==`\r
`&&(v=`
`);var W=0,Y=!1;this.parse=function(L,z,V){if(typeof L!="string")throw new Error("Input must be a string");var ee=L.length,J=p.length,B=v.length,G=D.length,q=b(A),oe=[],le=[],ne=[],ce=W=0;if(!L)return x();if(F||F!==!1&&L.indexOf(k)===-1){for(var we=L.split(v),ye=0;ye<we.length;ye++){if(ne=we[ye],W+=ne.length,ye!==we.length-1)W+=v.length;else if(V)return x();if(!D||ne.substring(0,G)!==D){if(q){if(oe=[],Ae(ne.split(p)),N(),Y)return x()}else Ae(ne.split(p));if(I&&I<=ye)return oe=oe.slice(0,I),x(!0)}}return x()}for(var ge=L.indexOf(p,W),fe=L.indexOf(v,W),Re=new RegExp(g(K)+g(k),"g"),P=L.indexOf(k,W);;)if(L[W]===k)for(P=W,W++;;){if((P=L.indexOf(k,P+1))===-1)return V||le.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:oe.length,index:W}),Se();if(P===ee-1)return Se(L.substring(W,P).replace(Re,k));if(k===K&&L[P+1]===K)P++;else if(k===K||P===0||L[P-1]!==K){ge!==-1&&ge<P+1&&(ge=L.indexOf(p,P+1));var Te=ue((fe=fe!==-1&&fe<P+1?L.indexOf(v,P+1):fe)===-1?ge:Math.min(ge,fe));if(L.substr(P+1+Te,J)===p){ne.push(L.substring(W,P).replace(Re,k)),L[W=P+1+Te+J]!==k&&(P=L.indexOf(k,W)),ge=L.indexOf(p,W),fe=L.indexOf(v,W);break}if(Te=ue(fe),L.substring(P+1+Te,P+1+Te+B)===v){if(ne.push(L.substring(W,P).replace(Re,k)),C(P+1+Te+B),ge=L.indexOf(p,W),P=L.indexOf(k,W),q&&(N(),Y))return x();if(I&&oe.length>=I)return x(!0);break}le.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:oe.length,index:W}),P++}}else if(D&&ne.length===0&&L.substring(W,W+G)===D){if(fe===-1)return x();W=fe+B,fe=L.indexOf(v,W),ge=L.indexOf(p,W)}else if(ge!==-1&&(ge<fe||fe===-1))ne.push(L.substring(W,ge)),W=ge+J,ge=L.indexOf(p,W);else{if(fe===-1)break;if(ne.push(L.substring(W,fe)),C(fe+B),q&&(N(),Y))return x();if(I&&oe.length>=I)return x(!0)}return Se();function Ae($){oe.push($),ce=W}function ue($){var Q=0;return Q=$!==-1&&($=L.substring(P+1,$))&&$.trim()===""?$.length:Q}function Se($){return V||($===void 0&&($=L.substring(W)),ne.push($),W=ee,Ae(ne),q&&N()),x()}function C($){W=$,Ae(ne),ne=[],fe=L.indexOf(v,W)}function x($){if(M.header&&!z&&oe.length&&!O){var Q=oe[0],j=Object.create(null),Me=new Set(Q);let de=!1;for(let Ce=0;Ce<Q.length;Ce++){let Pe=Q[Ce];if(j[Pe=b(M.transformHeader)?M.transformHeader(Pe,Ce):Pe]){let he,_e=j[Pe];for(;he=Pe+"_"+_e,_e++,Me.has(he););Me.add(he),Q[Ce]=he,j[Pe]++,de=!0,(X=X===null?{}:X)[he]=Pe}else j[Pe]=1,Q[Ce]=Pe;Me.add(Pe)}de&&console.warn("Duplicate headers found and renamed."),O=!0}return{data:oe,errors:le,meta:{delimiter:p,linebreak:v,aborted:Y,truncated:!!$,cursor:ce+(z||0),renamedHeaders:X}}}function N(){A(x()),oe=[],le=[]}},this.abort=function(){Y=!0},this.getCharIndex=function(){return W}}function E(M){var p=M.data,v=o[p.workerId],D=!1;if(p.error)v.userError(p.error,p.file);else if(p.results&&p.results.data){var A={abort:function(){D=!0,T(p.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(v.userStep)){for(var I=0;I<p.results.data.length&&(v.userStep({data:p.results.data[I],errors:p.results.errors,meta:p.results.meta},A),!D);I++);delete p.results}else b(v.userChunk)&&(v.userChunk(p.results,A,p.file),delete p.results)}p.finished&&!D&&T(p.workerId,p.results)}function T(M,p){var v=o[M];b(v.userComplete)&&v.userComplete(p),v.terminate(),delete o[M]}function y(){throw new Error("Not implemented.")}function w(M){if(typeof M!="object"||M===null)return M;var p,v=Array.isArray(M)?[]:{};for(p in M)v[p]=w(M[p]);return v}function U(M,p){return function(){M.apply(p,arguments)}}function b(M){return typeof M=="function"}return c.parse=function(M,p){var v=(p=p||{}).dynamicTyping||!1;if(b(v)&&(p.dynamicTypingFunction=v,v={}),p.dynamicTyping=v,p.transform=!!b(p.transform)&&p.transform,!p.worker||!c.WORKERS_SUPPORTED)return v=null,c.NODE_STREAM_INPUT,typeof M=="string"?(M=(D=>D.charCodeAt(0)!==65279?D:D.slice(1))(M),v=new(p.download?h:d)(p)):M.readable===!0&&b(M.read)&&b(M.on)?v=new _(p):(r.File&&M instanceof File||M instanceof Object)&&(v=new f(p)),v.stream(M);(v=(()=>{var D;return!!c.WORKERS_SUPPORTED&&(D=(()=>{var A=r.URL||r.webkitURL||null,I=t.toString();return c.BLOB_URL||(c.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",I,")();"],{type:"text/javascript"})))})(),(D=new r.Worker(D)).onmessage=E,D.id=l++,o[D.id]=D)})()).userStep=p.step,v.userChunk=p.chunk,v.userComplete=p.complete,v.userError=p.error,p.step=b(p.step),p.chunk=b(p.chunk),p.complete=b(p.complete),p.error=b(p.error),delete p.worker,v.postMessage({input:M,config:p,workerId:v.id})},c.unparse=function(M,p){var v=!1,D=!0,A=",",I=`\r
`,F='"',X=F+F,O=!1,k=null,K=!1,W=((()=>{if(typeof p=="object"){if(typeof p.delimiter!="string"||c.BAD_DELIMITERS.filter(function(z){return p.delimiter.indexOf(z)!==-1}).length||(A=p.delimiter),typeof p.quotes!="boolean"&&typeof p.quotes!="function"&&!Array.isArray(p.quotes)||(v=p.quotes),typeof p.skipEmptyLines!="boolean"&&typeof p.skipEmptyLines!="string"||(O=p.skipEmptyLines),typeof p.newline=="string"&&(I=p.newline),typeof p.quoteChar=="string"&&(F=p.quoteChar),typeof p.header=="boolean"&&(D=p.header),Array.isArray(p.columns)){if(p.columns.length===0)throw new Error("Option columns is empty");k=p.columns}p.escapeChar!==void 0&&(X=p.escapeChar+F),p.escapeFormulae instanceof RegExp?K=p.escapeFormulae:typeof p.escapeFormulae=="boolean"&&p.escapeFormulae&&(K=/^[=+\-@\t\r].*$/)}})(),new RegExp(g(F),"g"));if(typeof M=="string"&&(M=JSON.parse(M)),Array.isArray(M)){if(!M.length||Array.isArray(M[0]))return Y(null,M,O);if(typeof M[0]=="object")return Y(k||Object.keys(M[0]),M,O)}else if(typeof M=="object")return typeof M.data=="string"&&(M.data=JSON.parse(M.data)),Array.isArray(M.data)&&(M.fields||(M.fields=M.meta&&M.meta.fields||k),M.fields||(M.fields=Array.isArray(M.data[0])?M.fields:typeof M.data[0]=="object"?Object.keys(M.data[0]):[]),Array.isArray(M.data[0])||typeof M.data[0]=="object"||(M.data=[M.data])),Y(M.fields||[],M.data||[],O);throw new Error("Unable to serialize unrecognized input");function Y(z,V,ee){var J="",B=(typeof z=="string"&&(z=JSON.parse(z)),typeof V=="string"&&(V=JSON.parse(V)),Array.isArray(z)&&0<z.length),G=!Array.isArray(V[0]);if(B&&D){for(var q=0;q<z.length;q++)0<q&&(J+=A),J+=L(z[q],q);0<V.length&&(J+=I)}for(var oe=0;oe<V.length;oe++){var le=(B?z:V[oe]).length,ne=!1,ce=B?Object.keys(V[oe]).length===0:V[oe].length===0;if(ee&&!B&&(ne=ee==="greedy"?V[oe].join("").trim()==="":V[oe].length===1&&V[oe][0].length===0),ee==="greedy"&&B){for(var we=[],ye=0;ye<le;ye++){var ge=G?z[ye]:ye;we.push(V[oe][ge])}ne=we.join("").trim()===""}if(!ne){for(var fe=0;fe<le;fe++){0<fe&&!ce&&(J+=A);var Re=B&&G?z[fe]:fe;J+=L(V[oe][Re],fe)}oe<V.length-1&&(!ee||0<le&&!ce)&&(J+=I)}}return J}function L(z,V){var ee,J;return z==null?"":z.constructor===Date?JSON.stringify(z).slice(1,25):(J=!1,K&&typeof z=="string"&&K.test(z)&&(z="'"+z,J=!0),ee=z.toString().replace(W,X),(J=J||v===!0||typeof v=="function"&&v(z,V)||Array.isArray(v)&&v[V]||((B,G)=>{for(var q=0;q<G.length;q++)if(-1<B.indexOf(G[q]))return!0;return!1})(ee,c.BAD_DELIMITERS)||-1<ee.indexOf(A)||ee.charAt(0)===" "||ee.charAt(ee.length-1)===" ")?F+ee+F:ee)}},c.RECORD_SEP="",c.UNIT_SEP="",c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!i&&!!r.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=m,c.ParserHandle=S,c.NetworkStreamer=h,c.FileStreamer=f,c.StringStreamer=d,c.ReadableStreamStreamer=_,r.jQuery&&((n=r.jQuery).fn.parse=function(M){var p=M.config||{},v=[];return this.each(function(I){if(!(n(this).prop("tagName").toUpperCase()==="INPUT"&&n(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var F=0;F<this.files.length;F++)v.push({file:this.files[F],inputElem:this,instanceConfig:n.extend({},p)})}),D(),this;function D(){if(v.length===0)b(M.complete)&&M.complete();else{var I,F,X,O,k=v[0];if(b(M.before)){var K=M.before(k.file,k.inputElem);if(typeof K=="object"){if(K.action==="abort")return I="AbortError",F=k.file,X=k.inputElem,O=K.reason,void(b(M.error)&&M.error({name:I},F,X,O));if(K.action==="skip")return void A();typeof K.config=="object"&&(k.instanceConfig=n.extend(k.instanceConfig,K.config))}else if(K==="skip")return void A()}var W=k.instanceConfig.complete;k.instanceConfig.complete=function(Y){b(W)&&W(Y,k.file,k.inputElem),A()},c.parse(k.file,k.instanceConfig)}}function A(){v.splice(0,1),D()}}),a&&(r.onmessage=function(M){M=M.data,c.WORKER_ID===void 0&&M&&(c.WORKER_ID=M.workerId),typeof M.input=="string"?r.postMessage({workerId:c.WORKER_ID,results:c.parse(M.input,M.config),finished:!0}):(r.File&&M.input instanceof File||M.input instanceof Object)&&(M=c.parse(M.input,M.config))&&r.postMessage({workerId:c.WORKER_ID,results:M,finished:!0})}),(h.prototype=Object.create(u.prototype)).constructor=h,(f.prototype=Object.create(u.prototype)).constructor=f,(d.prototype=Object.create(d.prototype)).constructor=d,(_.prototype=Object.create(u.prototype)).constructor=_,c})})(is)),is.exports}var Kg=jg();const Zg=Yg(Kg);class Jg{constructor(e){this.state=e,this.fileSizes={"layout60k-Sep-10-2024.csv":6792224,"layout500k-Sep-10-2024.csv":57693366,"layout1m-part1-Sep-10-2024.csv":59988553,"layout1m-part2-Sep-10-2024.csv":56877942}}async loadCSV(e){this.state.ui.setProgress(0);const t=e.split(","),r=t.length;let n=[];for(let i=0;i<r;i++){const a=await fetch(t[i]),o=t[i].split("/").pop(),l=this.fileSizes[o],c=a.body.getReader();let u=0;const h=[];for(;;){const{done:S,value:g}=await c.read();if(S)break;h.push(g),u+=g.length,this.state.ui.setProgress(Math.floor((i+u/l)/r*100))}const d=await new Blob(h).text(),_=Zg.parse(d,{header:!0,dynamicTyping:!1,skipEmptyLines:!0});n=n.concat(_.data)}return this.processData(n)}processData(e){const t=e.length,r=new Float32Array(t*2),n=new Float32Array(t),i=new Float32Array(t*4),a=new Array(t),o=new Array(t);let l=r[1]+n[0],c=r[0]+n[0],u=r[1]-n[0],h=r[0]-n[0];for(let f=0;f<t;f++){const d=e[f];r[f*2]=+d.x,r[f*2+1]=+d.y,n[f]=+d.size,i[f*4]=+d.r,i[f*4+1]=+d.g,i[f*4+2]=+d.b,i[f*4+3]=1,a[f]=d.title,o[f]=+d.id,l=Math.max(l,r[f*2+1]+n[f]),c=Math.max(c,r[f*2]+n[f]),u=Math.min(u,r[f*2+1]-n[f]),h=Math.min(h,r[f*2]-n[f])}return{numItems:t,offsets:r,sizes:n,colors:i,titles:a,ids:o,axisLimits:[h,u,c,l]}}}class Qg{constructor(e){this.state=e,this.isDataInitialized=!1,this.searchWorker=new Worker(new URL("/assets/searchworker-DUDDIaOC.js",import.meta.url),{type:"module"}),this.searchWorker.addEventListener("message",t=>this.handleWorkerMessage(t))}performSearch(e){if(!e){this.state.ui.clearResults();return}this.state.ui.toggleSearchLoading(!0),this.searchWorker.postMessage({query:e,titles:this.isDataInitialized?null:this.state.data.titles,options:{limit:5}}),this.isDataInitialized=!0}handleWorkerMessage(e){const{results:t}=e.data;this.state.ui.displayResults(t),this.state.ui.toggleSearchLoading(!1)}}class $g{constructor(e){this.zoomLevel=0,this.cameraX=0,this.cameraY=0,this.isDragging=!1,this.wasDragging=!1,this.lastMouseX=0,this.lastMouseY=0,this.sensitivity=.002,this.lastTouchDistance=null,this.transitionActive=!1,this.startState=null,this.endState=null,this.midState=null,this.stageCount=0,this.stage=0,this.stage1Duration=2e3,this.stage2Duration=2e3,this.transitionStartTime=0,this.state=e,this.lastAspectRatio=this.state.width/this.state.height}handleMouseDown(e){this.transitionActive||(this.isDragging=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY)}handleMouseMove(e){!this.isDragging||this.transitionActive||(this.wasDragging=!0,this.updateCameraPosition(e.clientX,e.clientY))}handleMouseUp(){this.isDragging=!1}handleClick(e){this.wasDragging||this.clickArticle(e),this.wasDragging=!1}handleZoom(e){if(this.transitionActive)return;const t=Math.exp(e.deltaY*this.sensitivity);this.updateCameraPosition(e.clientX,e.clientY,t)}handleTouchStart(e){this.transitionActive||(e.preventDefault(),e.touches.length===2?this.lastTouchDistance=this.getTouchDistance(e.touches):e.touches.length===1&&(this.isDragging=!0,this.lastMouseX=e.touches[0].clientX,this.lastMouseY=e.touches[0].clientY))}handleTouchMove(e){if(!this.transitionActive)if(e.preventDefault(),e.touches.length===2){const t=this.getTouchDistance(e.touches),r=(e.touches[0].clientX+e.touches[1].clientX)/2,n=(e.touches[0].clientY+e.touches[1].clientY)/2,i=this.lastTouchDistance/t;this.updateCameraPosition(r,n,i),this.lastTouchDistance=t}else e.touches.length===1&&this.isDragging&&this.updateCameraPosition(e.touches[0].clientX,e.touches[0].clientY)}handleTouchEnd(){this.isDragging=!1}getTouchDistance(e){const t=e[0].clientX-e[1].clientX,r=e[0].clientY-e[1].clientY;return Math.hypot(t,r)}handleResize(){const e=this.state.width/this.state.height;(this.lastAspectRatio>1&&e<1||this.lastAspectRatio<1&&e>1)&&(this.cameraX=0,this.cameraY=0,this.zoomLevel=this.getMaxZoomLevel()),this.lastAspectRatio=e,this.zoomLevel=Math.min(this.zoomLevel,this.getMaxZoomLevel())}screenToWorld(e,t){const r=e/this.state.canvas.clientWidth,n=t/this.state.canvas.clientHeight,i=r*2-1,a=-(n*2-1),o=this.zoomLevel*this.state.width/this.state.height,l=this.zoomLevel,c=this.cameraX+i*o/2,u=this.cameraY+a*l/2;return{x:c,y:u}}updateCameraPosition(e,t,r){const n=this.screenToWorld(r?e:this.lastMouseX,r?t:this.lastMouseY);r&&(this.zoomLevel*=r,this.zoomLevel=Math.min(this.zoomLevel,this.getMaxZoomLevel()),this.zoomLevel=Math.max(this.zoomLevel,1e-7));const i=this.screenToWorld(e,t);this.cameraX+=n.x-i.x,this.cameraY+=n.y-i.y,this.lastMouseX=e,this.lastMouseY=t}getMaxZoomLevel(){if(!this.state.data)return;const[e,t,r,n]=this.state.data.axisLimits,i=r-e,a=n-t,o=this.state.width/this.state.height,l=i/o;return Math.max(l,a)*1.1}smoothTransition(e,t,r,n){if(this.transitionActive=!0,this.startState={x:this.cameraX,y:this.cameraY,zoom:this.zoomLevel},this.endState={x:e,y:t,zoom:r},this.stage1Duration=2e3,this.stage2Duration=2e3,n===!1)this.stageCount=1;else{const i=Math.abs(this.endState.x-this.startState.x),a=Math.abs(this.endState.y-this.startState.y),o=i*2/(this.state.width/this.state.height),l=a*2,c=Math.max(l,o)*1.1,u=Math.max(this.startState.zoom,c);this.midState={x:this.cameraX,y:this.cameraY,zoom:u},this.stageCount=2,this.stage=0,this.zoomLevel===u&&(this.stage1Duration=0)}this.transitionStartTime=performance.now()}updateTransition(e){const t=e-this.transitionStartTime;let r;this.stageCount===1?r=this.stage1Duration:this.stage===0?r=this.stage1Duration:r=this.stage2Duration;const n=Math.min(t/r,1),i=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;if(this.stageCount===1)this.zoomLevel=this.startState.zoom+(this.endState.zoom-this.startState.zoom)*i,n>=1&&(this.cameraX=this.endState.x,this.cameraY=this.endState.y,this.transitionActive=!1);else if(this.stageCount===2&&this.stage===0)this.zoomLevel=this.startState.zoom+(this.midState.zoom-this.startState.zoom)*i,n>=1&&(this.stage=1,this.transitionStartTime=e);else if(this.stageCount===2&&this.stage===1){const a=this.midState,o=this.endState;this.cameraX=a.x+(o.x-a.x)*i,this.cameraY=a.y+(o.y-a.y)*i,this.zoomLevel=a.zoom+(o.zoom-a.zoom)*i,n>=1&&(this.transitionActive=!1)}}reset(){this.cameraX=0,this.cameraY=0,this.zoomLevel=0,this.smoothTransition(0,0,this.getMaxZoomLevel(),!1)}clickArticle(e){const t=this.screenToWorld(e.clientX,e.clientY),{offsets:r,sizes:n,ids:i,numItems:a}=this.state.data;for(let o=0;o<a;o++){const l=r[o*2],c=r[o*2+1],u=n[o],h=t.x-l,f=t.y-c;if(Math.hypot(h,f)<=u){this.showEmbeddedWikiArticle(i[o]);return}}}showEmbeddedWikiArticle(e){const t=document.getElementById("wiki"),r=document.getElementById("wiki-iframe"),n=`https://en.wikipedia.org/?curid=${e}`;r.src=n,t.classList.add("active"),document.getElementById("close-wiki").onclick=()=>{t.classList.remove("active"),r.src="about:blank"}}goToArticle(e){let t;if(e){if(t=this.state.data.titles.indexOf(e),t===-1)return}else t=Math.floor(Math.random()*this.state.data.numItems);const r=this.state.data.offsets[t*2],n=this.state.data.offsets[t*2+1],i=this.state.data.sizes[t]*5;this.smoothTransition(r,n,i,!0)}}class Dc{constructor(e,t,r){this.id=0,this.name=e,this.fg=t,this.bg=r,this.gradient=null,this.PR=Math.round(window.devicePixelRatio||1),this.WIDTH=90*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=84*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.canvas=document.createElement("canvas"),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.width="90px",this.canvas.style.height="48px",this.canvas.style.position="absolute",this.canvas.style.cssText="width:90px;height:48px;background-color: transparent !important;",this.context=this.canvas.getContext("2d"),this.initializeCanvas()}createGradient(){if(!this.context)throw new Error("No context");const e=this.context.createLinearGradient(0,this.GRAPH_Y,0,this.GRAPH_Y+this.GRAPH_HEIGHT);let t;const r=this.fg;switch(this.fg.toLowerCase()){case"#0ff":t="#006666";break;case"#0f0":t="#006600";break;case"#ff0":t="#666600";break;case"#e1e1e1":t="#666666";break;default:t=this.bg;break}return e.addColorStop(0,t),e.addColorStop(1,r),e}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.gradient=this.createGradient(),this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT))}update(e,t,r=0){if(!this.context||!this.gradient)return;const n=Math.min(1/0,e),i=Math.max(t,e);this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(`${e.toFixed(r)} ${this.name} (${n.toFixed(r)}-${parseFloat(i.toFixed(r))})`,this.TEXT_X,this.TEXT_Y)}updateGraph(e,t){if(!this.context||!this.gradient)return;e===0&&t===0&&(t=1),t=Math.max(t,e,.1),e=Math.max(e,0);const r=Math.round(this.GRAPH_X),n=Math.round(this.GRAPH_Y),i=Math.round(this.GRAPH_WIDTH),a=Math.round(this.GRAPH_HEIGHT),o=Math.round(this.PR);this.context.drawImage(this.canvas,r+o,n,i-o,a,r,n,i-o,a),this.context.fillStyle=this.bg,this.context.fillRect(r+i-o,n,o,a);const l=Math.min(a,Math.round(e/t*a));l>0&&(this.context.globalAlpha=.9,this.context.fillStyle=this.gradient,this.context.fillRect(r+i-o,n+(a-l),o,l)),this.context.globalAlpha=1}}class e0 extends Dc{constructor(e,t,r){super(e,t,r),this.vsyncValue=0,this.SMALL_HEIGHT=9*this.PR,this.HEIGHT=this.SMALL_HEIGHT,this.WIDTH=35*this.PR,this.TEXT_Y=0*this.PR,this.canvas.height=this.HEIGHT,this.canvas.width=this.WIDTH,this.canvas.style.height="9px",this.canvas.style.width="35px",this.canvas.style.cssText=`
            width: 35px;
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent !important;
            pointer-events: none;
        `,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.globalAlpha=1)}update(e,t,r=0){this.context&&(this.vsyncValue=e,this.context.clearRect(0,0,this.WIDTH,this.HEIGHT),this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillText(`${e.toFixed(0)}Hz`,this.TEXT_X,this.TEXT_Y))}updateGraph(e,t){}setOffset(e,t){this.canvas.style.transform=`translate(${e}px, ${t}px)`}}const Lc=class Pi{constructor({trackGPU:e=!1,trackCPT:t=!1,trackHz:r=!1,trackFPS:n=!0,logsPerSecond:i=4,graphsPerSecond:a=30,samplesLog:o=40,samplesGraph:l=10,precision:c=2,minimal:u=!1,horizontal:h=!0,mode:f=0}={}){this.gl=null,this.ext=null,this.activeQuery=null,this.gpuQueries=[],this.threeRendererPatched=!1,this.frameTimes=[],this.renderCount=0,this.totalCpuDuration=0,this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.averageFps={logs:[],graph:[]},this.averageCpu={logs:[],graph:[]},this.averageGpu={logs:[],graph:[]},this.averageGpuCompute={logs:[],graph:[]},this.updateCounter=0,this.lastMin={},this.lastMax={},this.lastValue={},this.VSYNC_RATES=[{refreshRate:60,frameTime:16.67},{refreshRate:75,frameTime:13.33},{refreshRate:90,frameTime:11.11},{refreshRate:120,frameTime:8.33},{refreshRate:144,frameTime:6.94},{refreshRate:165,frameTime:6.06},{refreshRate:240,frameTime:4.17}],this.detectedVSync=null,this.frameTimeHistory=[],this.HISTORY_SIZE=120,this.VSYNC_THRESHOLD=.05,this.lastFrameTime=0,this.handleClick=_=>{_.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},this.handleResize=()=>{this.fpsPanel&&this.resizePanel(this.fpsPanel),this.msPanel&&this.resizePanel(this.msPanel),this.gpuPanel&&this.resizePanel(this.gpuPanel),this.gpuPanelCompute&&this.resizePanel(this.gpuPanelCompute)},this.mode=f,this.horizontal=h,this.minimal=u,this.trackGPU=e,this.trackCPT=t,this.trackHz=r,this.trackFPS=n,this.samplesLog=o,this.samplesGraph=l,this.precision=c,this.logsPerSecond=i,this.graphsPerSecond=a;const d=performance.now();this.prevGraphTime=d,this.dom=document.createElement("div"),this.initializeDOM(),this.beginTime=performance.now(),this.prevTextTime=this.beginTime,this.prevCpuTime=this.beginTime,this._panelId=0,this.trackFPS&&(this.fpsPanel=this.addPanel(new Pi.Panel("FPS","#0ff","#002")),this.msPanel=this.addPanel(new Pi.Panel("CPU","#0f0","#020"))),this.trackHz===!0&&(this.vsyncPanel=new e0("","#f0f","#202"),this.dom.appendChild(this.vsyncPanel.canvas),this.vsyncPanel.setOffset(56,35)),this.setupEventListeners()}initializeDOM(){this.dom.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal?"cursor: pointer;":""}
    `}setupEventListeners(){this.minimal?(this.dom.addEventListener("click",this.handleClick),this.showPanel(this.mode)):window.addEventListener("resize",this.handleResize)}async init(e){if(!e){console.error('Stats: The "canvas" parameter is undefined.');return}if(!this.handleThreeRenderer(e)&&!await this.handleWebGPURenderer(e))if(this.initializeWebGL(e)){this.trackGPU&&this.initializeGPUTracking();return}else console.error("Stats-gl: Failed to initialize WebGL context")}handleThreeRenderer(e){return e.isWebGLRenderer&&!this.threeRendererPatched?(this.patchThreeRenderer(e),this.gl=e.getContext(),this.trackGPU&&this.initializeGPUTracking(),!0):!1}async handleWebGPURenderer(e){return e.isWebGPURenderer?((this.trackGPU||this.trackCPT)&&(e.backend.trackTimestamp=!0,e._initialized||await e.init(),e.hasFeature("timestamp-query")&&this.initializeWebGPUPanels()),this.info=e.info,this.patchThreeWebGPU(e),!0):!1}initializeWebGPUPanels(){this.trackGPU&&(this.gpuPanel=this.addPanel(new Pi.Panel("GPU","#ff0","#220"))),this.trackCPT&&(this.gpuPanelCompute=this.addPanel(new Pi.Panel("CPT","#e1e1e1","#212121")))}initializeWebGL(e){if(e instanceof WebGL2RenderingContext)this.gl=e;else if(e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas){if(this.gl=e.getContext("webgl2"),!this.gl)return console.error("Stats: Unable to obtain WebGL2 context."),!1}else return console.error("Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas."),!1;return!0}initializeGPUTracking(){this.gl&&(this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.ext&&(this.gpuPanel=this.addPanel(new Pi.Panel("GPU","#ff0","#220"))))}begin(){this.beginProfiling("cpu-started"),!(!this.gl||!this.ext)&&(this.activeQuery&&this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.activeQuery=this.gl.createQuery(),this.activeQuery&&this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.activeQuery))}end(){this.renderCount++,this.gl&&this.ext&&this.activeQuery&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.gpuQueries.push({query:this.activeQuery}),this.activeQuery=null),this.endProfiling("cpu-started","cpu-finished","cpu-duration")}update(){this.endProfiling("cpu-started","cpu-finished","cpu-duration"),this.info?this.processWebGPUTimestamps():this.processGpuQueries(),this.updateAverages(),this.resetCounters()}processWebGPUTimestamps(){this.totalGpuDuration=this.info.render.timestamp,this.totalGpuDurationCompute=this.info.compute.timestamp}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=this.endInternal()}resizePanel(e){e.canvas.style.position="absolute",this.minimal?e.canvas.style.display="none":(e.canvas.style.display="block",this.horizontal?(e.canvas.style.top="0px",e.canvas.style.left=e.id*e.WIDTH/e.PR+"px"):(e.canvas.style.left="0px",e.canvas.style.top=e.id*e.HEIGHT/e.PR+"px"))}addPanel(e){return e.canvas&&(this.dom.appendChild(e.canvas),e.id=this._panelId,this.resizePanel(e),this._panelId++),e}showPanel(e){for(let t=0;t<this.dom.children.length;t++){const r=this.dom.children[t];r.style.display=t===e?"block":"none"}this.mode=e}processGpuQueries(){!this.gl||!this.ext||(this.totalGpuDuration=0,this.gpuQueries.forEach((e,t)=>{if(this.gl){const r=this.gl.getQueryParameter(e.query,this.gl.QUERY_RESULT_AVAILABLE),n=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);if(r&&!n){const a=this.gl.getQueryParameter(e.query,this.gl.QUERY_RESULT)*1e-6;this.totalGpuDuration+=a,this.gl.deleteQuery(e.query),this.gpuQueries.splice(t,1)}}}))}detectVSync(e){if(this.lastFrameTime===0){this.lastFrameTime=e;return}const t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.frameTimeHistory.push(t),this.frameTimeHistory.length>this.HISTORY_SIZE&&this.frameTimeHistory.shift(),this.frameTimeHistory.length<60)return;const r=this.frameTimeHistory.reduce((l,c)=>l+c)/this.frameTimeHistory.length,n=this.frameTimeHistory.reduce((l,c)=>l+Math.pow(c-r,2),0)/this.frameTimeHistory.length;if(Math.sqrt(n)>2){this.detectedVSync=null;return}let a=null,o=1/0;for(const l of this.VSYNC_RATES){const c=Math.abs(r-l.frameTime);c<o&&(o=c,a=l)}a&&o/a.frameTime<=this.VSYNC_THRESHOLD?this.detectedVSync=a:this.detectedVSync=null}endInternal(){var e;const t=performance.now();for(this.frameTimes.push(t);this.frameTimes.length>0&&this.frameTimes[0]<=t-1e3;)this.frameTimes.shift();const r=Math.round(this.frameTimes.length);this.addToAverage(r,this.averageFps);const n=t>=this.prevTextTime+1e3/this.logsPerSecond,i=t>=this.prevGraphTime+1e3/this.graphsPerSecond;if(this.updatePanelComponents(this.fpsPanel,this.averageFps,0,n,i),this.updatePanelComponents(this.msPanel,this.averageCpu,this.precision,n,i),this.gpuPanel&&this.updatePanelComponents(this.gpuPanel,this.averageGpu,this.precision,n,i),this.trackCPT&&this.gpuPanelCompute&&this.updatePanelComponents(this.gpuPanelCompute,this.averageGpuCompute,this.precision,n,i),n&&(this.prevTextTime=t),i&&(this.prevGraphTime=t),this.vsyncPanel!==null){this.detectVSync(t);const a=((e=this.detectedVSync)==null?void 0:e.refreshRate)||0;n&&a>0&&this.vsyncPanel.update(a,a)}return t}updatePanelComponents(e,t,r,n,i){if(!e||t.logs.length===0)return;e.name in this.lastMin||(this.lastMin[e.name]=1/0,this.lastMax[e.name]=0,this.lastValue[e.name]=0);const a=t.logs[t.logs.length-1];this.lastMax[e.name]=Math.max(...t.logs),this.lastMin[e.name]=Math.min(this.lastMin[e.name],a),this.lastValue[e.name]=this.lastValue[e.name]*.7+a*.3;const o=Math.max(Math.max(...t.logs),...t.graph.slice(-this.samplesGraph));this.updateCounter++,n&&e.update(this.lastValue[e.name],this.lastMax[e.name],r),i&&e.updateGraph(a,o)}beginProfiling(e){if(window.performance)try{window.performance.clearMarks(e),window.performance.mark(e)}catch(t){console.debug("Stats: Performance marking failed:",t)}}endProfiling(e,t,r){if(!(!window.performance||!t||!e))try{window.performance.getEntriesByName(e,"mark").length===0&&this.beginProfiling(e),window.performance.clearMarks(t),window.performance.mark(t),window.performance.clearMeasures(r);const i=performance.measure(r,e,t);this.totalCpuDuration+=i.duration,window.performance.clearMarks(e),window.performance.clearMarks(t),window.performance.clearMeasures(r)}catch(n){console.debug("Stats: Performance measurement failed:",n)}}updatePanel(e,t,r=2){if(!e||t.logs.length===0)return;const n=performance.now();e.name in this.lastMin||(this.lastMin[e.name]=1/0,this.lastMax[e.name]=0,this.lastValue[e.name]=0);const i=t.logs[t.logs.length-1],a=Math.max(...t.logs.slice(-30));this.lastMin[e.name]=Math.min(this.lastMin[e.name],i),this.lastMax[e.name]=Math.max(this.lastMax[e.name],i),this.lastValue[e.name]=this.lastValue[e.name]*.7+i*.3;const o=Math.max(a,...t.graph.slice(-this.samplesGraph));this.updateCounter++,this.updateCounter%(this.logsPerSecond*2)===0&&(this.lastMax[e.name]=a,this.lastMin[e.name]=i),e.update&&(n>=this.prevCpuTime+1e3/this.logsPerSecond&&e.update(this.lastValue[e.name],i,this.lastMax[e.name],o,r),n>=this.prevGraphTime+1e3/this.graphsPerSecond&&(e.updateGraph(i,o),this.prevGraphTime=n))}updateAverages(){this.addToAverage(this.totalCpuDuration,this.averageCpu),this.addToAverage(this.totalGpuDuration,this.averageGpu),this.info&&this.totalGpuDurationCompute!==void 0&&this.addToAverage(this.totalGpuDurationCompute,this.averageGpuCompute)}addToAverage(e,t){t.logs.push(e),t.logs.length>this.samplesLog&&(t.logs=t.logs.slice(-this.samplesLog)),t.graph.push(e),t.graph.length>this.samplesGraph&&(t.graph=t.graph.slice(-this.samplesGraph))}get domElement(){return this.dom}patchThreeWebGPU(e){const t=e.info.reset,r=this;e.info.reset=function(){r.beginProfiling("cpu-started"),t.call(this)}}patchThreeRenderer(e){const t=e.render,r=this;e.render=function(n,i){r.begin(),t.call(this,n,i),r.end()},this.threeRendererPatched=!0}};Lc.Panel=Dc;let t0=Lc;class n0{constructor(e){this.state=e,this.canvas=this.state.canvas,this.canvas.addEventListener("mousedown",n=>{this.state.controls.handleMouseDown(n)}),this.canvas.addEventListener("touchstart",n=>{this.state.controls.handleTouchStart(n)},{passive:!1}),this.canvas.addEventListener("mouseup",()=>{this.state.controls.handleMouseUp()}),this.canvas.addEventListener("mouseleave",()=>{this.state.controls.handleMouseUp()}),this.canvas.addEventListener("touchend",()=>{this.state.controls.handleTouchEnd()}),this.canvas.addEventListener("mousemove",n=>{this.state.controls.handleMouseMove(n)}),this.canvas.addEventListener("touchmove",n=>{this.state.controls.handleTouchMove(n)},{passive:!1}),this.canvas.addEventListener("wheel",n=>{this.state.controls.handleZoom(n)},{passive:!0}),this.canvas.addEventListener("click",n=>{this.state.controls.handleClick(n)}),document.getElementById("random-button").addEventListener("click",()=>{this.state.controls.goToArticle()}),document.getElementById("sensitivity-range").addEventListener("input",n=>{this.state.controls.sensitivity=n.target.value/25e3,document.getElementById("sensitivity-value").textContent=n.target.value.padStart(3,"0")}),/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&(document.getElementById("sensitivity").style.display="none"),this.searchInput=document.getElementById("search"),this.loadingIndicator=document.getElementById("loader"),this.resultsContainer=document.getElementById("search-results"),document.getElementById("search-button").addEventListener("click",()=>{this.state.search.performSearch(this.searchInput.value.trim())}),document.getElementById("search").addEventListener("input",()=>{this.clearResults()});const t=document.getElementById("intro"),r=document.getElementById("start");document.getElementById("load-button").addEventListener("click",()=>{this.state.initialize(document.getElementById("selected").value)}),r.addEventListener("click",()=>{const n=document.querySelector('input[name="dataset"]:checked').value;t.style.display="none",this.state.initialize(n)}),this.stats=new t0({trackGPU:!1,trackHz:!1,trackCPT:!1,logsPerSecond:4,graphsPerSecond:30,samplesLog:40,samplesGraph:10,precision:2,horizontal:!0,minimal:!0,mode:0}),this.stats.dom.style.top="auto",this.stats.dom.style.left="auto",this.stats.dom.style.bottom="48px",this.stats.dom.style.right="90px",document.body.appendChild(this.stats.dom),this.pctEl=document.getElementById("loading-percent")}clearResults(){this.resultsContainer.innerHTML="",this.resultsContainer.style.display="none"}toggleSearchLoading(e){this.loadingIndicator.style.display=e?"grid":"none"}displayResults(e){if(e.length===0){this.resultsContainer.innerHTML="<div class='search-result-item'>No results found</div>",this.resultsContainer.style.display="block";return}this.resultsContainer.innerHTML=e.map(t=>`<div class="search-result-item">${t.target}</div>`).join(""),this.resultsContainer.style.display="block",this.resultsContainer.querySelectorAll(".search-result-item").forEach(t=>{t.addEventListener("click",r=>this.handleResultClick(r))})}handleResultClick(e){const t=e.target.closest(".search-result-item").textContent;this.searchInput.value="",this.clearResults(),this.state.controls.goToArticle(t)}setProgress(e){this.pctEl.textContent=e+"%"}toggleLoading(e){const t=document.getElementById("loading");t.style.display=e?"flex":"none",e&&document.getElementById("wiki").classList.remove("active")}}class i0{constructor(){this.data=null,this.renderer=new jm({canvas:document.getElementById("webgl")}),this.canvas=this.renderer.domElement,this.resize(),this.scene=new Vu,this.camera=new po(0,0,0,0,0,1),this.initializing=!1,this.lastTime=0,this.circle=new Km(this),this.textTroika=new Xg(this),this.controls=new $g(this),this.search=new Qg(this),this.dataLoader=new Jg(this),this.ui=new n0(this)}async initialize(e){this.initializing||(this.initializing=!0,this.renderer.setAnimationLoop(null),this.ui.toggleLoading(!0),this.search.isDataInitialized=!1,this.data=await this.dataLoader.loadCSV(e),this.scene.clear(),this.circle.initialize(this.scene),this.textTroika.initialize(this.scene),this.controls.reset(),this.ui.toggleLoading(!1),this.initializing=!1,this.renderer.setAnimationLoop(this.render.bind(this)))}resize(){this.dpr=window.devicePixelRatio,this.width=Math.floor(this.canvas.clientWidth*this.dpr),this.height=Math.floor(this.canvas.clientHeight*this.dpr),this.renderer.setSize(this.width,this.height,!1)}render(e){(Math.floor(this.canvas.clientWidth*this.dpr)!==this.width||Math.floor(this.canvas.clientHeight*this.dpr)!==this.height)&&(this.resize(),this.controls.handleResize()),this.controls.transitionActive&&this.controls.updateTransition(e);const t=this.width/this.height,r=this.controls.zoomLevel,n=this.controls.zoomLevel*t;this.camera.left=this.controls.cameraX-n/2,this.camera.right=this.controls.cameraX+n/2,this.camera.bottom=this.controls.cameraY-r/2,this.camera.top=this.controls.cameraY+r/2,this.camera.updateProjectionMatrix(),this.circle.mesh.material.uniforms.camera.value=this.controls.zoomLevel*4e-4,e-this.lastTime>1e3&&(this.textTroika.updateVisibleText(),this.lastTime=e,this.dbg=!0),this.renderer.render(this.scene,this.camera),this.ui.stats.update()}}new i0;
