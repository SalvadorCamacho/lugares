"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{2093:(_,y,u)=>{u.d(y,{c:()=>c});var v=u(2361),w=u(2335),s=u(1363);const c=(o,t)=>{let e,n;const i=(g,l,f)=>{if("undefined"==typeof document)return;const d=document.elementFromPoint(g,l);d&&t(d)?d!==e&&(h(),a(d,f)):h()},a=(g,l)=>{e=g,n||(n=e);const f=e;(0,v.c)(()=>f.classList.add("ion-activated")),l()},h=(g=!1)=>{if(!e)return;const l=e;(0,v.c)(()=>l.classList.remove("ion-activated")),g&&n!==e&&e.click(),e=void 0};return(0,s.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>i(g.currentX,g.currentY,w.a),onMove:g=>i(g.currentX,g.currentY,w.b),onEnd:()=>{h(!0),(0,w.h)(),n=void 0}})}},7438:(_,y,u)=>{u.d(y,{g:()=>v});const v=(t,e,n,i,a)=>s(t[1],e[1],n[1],i[1],a).map(h=>w(t[0],e[0],n[0],i[0],h)),w=(t,e,n,i,a)=>a*(3*e*Math.pow(a-1,2)+a*(-3*n*a+3*n+i*a))-t*Math.pow(a-1,3),s=(t,e,n,i,a)=>o((i-=a)-3*(n-=a)+3*(e-=a)-(t-=a),3*n-6*e+3*t,3*e-3*t,t).filter(g=>g>=0&&g<=1),o=(t,e,n,i)=>{if(0===t)return((t,e,n)=>{const i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]})(e,n,i);const a=(3*(n/=t)-(e/=t)*e)/3,h=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===a)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-a),-Math.sqrt(-a)];const g=Math.pow(h/2,2)+Math.pow(a/3,3);if(0===g)return[Math.pow(h/2,.5)-e/3];if(g>0)return[Math.pow(-h/2+Math.sqrt(g),1/3)-Math.pow(h/2+Math.sqrt(g),1/3)-e/3];const l=Math.sqrt(Math.pow(-a/3,3)),f=Math.acos(-h/(2*Math.sqrt(Math.pow(-a/3,3)))),d=2*Math.pow(l,1/3);return[d*Math.cos(f/3)-e/3,d*Math.cos((f+2*Math.PI)/3)-e/3,d*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(_,y,u)=>{u.d(y,{i:()=>v});const v=w=>w&&""!==w.dir?"rtl"===w.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},4560:(_,y,u)=>{u.r(y),u.d(y,{startFocusVisible:()=>c});const v="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=o=>{let t=[],e=!0;const n=o?o.shadowRoot:document,i=o||document.body,a=p=>{t.forEach(m=>m.classList.remove(v)),p.forEach(m=>m.classList.add(v)),t=p},h=()=>{e=!1,a([])},g=p=>{e=s.includes(p.key),e||a([])},l=p=>{if(e&&p.composedPath){const m=p.composedPath().filter(P=>!!P.classList&&P.classList.contains("ion-focusable"));a(m)}},f=()=>{n.activeElement===i&&a([])};return n.addEventListener("keydown",g),n.addEventListener("focusin",l),n.addEventListener("focusout",f),n.addEventListener("touchstart",h),n.addEventListener("mousedown",h),{destroy:()=>{n.removeEventListener("keydown",g),n.removeEventListener("focusin",l),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",h),n.removeEventListener("mousedown",h)},setFocus:a}}},2407:(_,y,u)=>{u.d(y,{C:()=>o,a:()=>s,d:()=>c});var v=u(5861),w=u(206);const s=function(){var t=(0,v.Z)(function*(e,n,i,a,h,g){if(e)return e.attachViewToDom(n,i,h,a);if(!(g||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i;return a&&a.forEach(f=>l.classList.add(f)),h&&Object.assign(l,h),n.appendChild(l),yield new Promise(f=>(0,w.c)(l,f)),l});return function(n,i,a,h,g,l){return t.apply(this,arguments)}}(),c=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},o=()=>{let t,e;return{attachViewToDom:function(){var a=(0,v.Z)(function*(h,g,l={},f=[]){if(t=h,g){const p="string"==typeof g?t.ownerDocument&&t.ownerDocument.createElement(g):g;f.forEach(m=>p.classList.add(m)),Object.assign(p,l),t.appendChild(p),yield new Promise(m=>(0,w.c)(p,m))}else if(t.children.length>0){const p=t.ownerDocument&&t.ownerDocument.createElement("div");f.forEach(m=>p.classList.add(m)),p.append(...t.children),t.appendChild(p)}const d=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),d.appendChild(t),t});return function(g,l){return a.apply(this,arguments)}}(),removeViewFromDom:()=>(t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve())}}},2335:(_,y,u)=>{u.d(y,{a:()=>s,b:()=>c,c:()=>w,d:()=>t,h:()=>o});const v={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const n=this.getEngine();if(!n)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;n.impact({style:i})},notification(e){const n=this.getEngine();if(!n)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;n.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},w=()=>{v.selection()},s=()=>{v.selectionStart()},c=()=>{v.selectionChanged()},o=()=>{v.selectionEnd()},t=e=>{v.impact(e)}},6665:(_,y,u)=>{u.d(y,{s:()=>v});const v=n=>{try{if(n instanceof class e{constructor(i){this.value=i}})return n.value;if(!c()||"string"!=typeof n||""===n)return n;const i=document.createDocumentFragment(),a=document.createElement("div");i.appendChild(a),a.innerHTML=n,t.forEach(f=>{const d=i.querySelectorAll(f);for(let p=d.length-1;p>=0;p--){const m=d[p];m.parentNode?m.parentNode.removeChild(m):i.removeChild(m);const P=s(m);for(let r=0;r<P.length;r++)w(P[r])}});const h=s(i);for(let f=0;f<h.length;f++)w(h[f]);const g=document.createElement("div");g.appendChild(i);const l=g.querySelector("div");return null!==l?l.innerHTML:g.innerHTML}catch(i){return console.error(i),""}},w=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let a=n.attributes.length-1;a>=0;a--){const h=n.attributes.item(a),g=h.name;if(!o.includes(g.toLowerCase())){n.removeAttribute(g);continue}const l=h.value;null!=l&&l.toLowerCase().includes("javascript:")&&n.removeAttribute(g)}const i=s(n);for(let a=0;a<i.length;a++)w(i[a])},s=n=>null!=n.children?n.children:n.childNodes,c=()=>{const n=window,i=n&&n.Ionic&&n.Ionic.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},o=["class","id","href","src","name","slot"],t=["script","style","iframe","meta","link","object","embed"]},8117:(_,y,u)=>{u.d(y,{a:()=>v,b:()=>h,c:()=>t,d:()=>g,e:()=>r,f:()=>s,g:()=>w,h:()=>m,i:()=>e,j:()=>i,k:()=>l,l:()=>n,m:()=>o,n:()=>c,o:()=>a,p:()=>f,q:()=>d,r:()=>p,s:()=>P});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},410:(_,y,u)=>{u.r(y),u.d(y,{KEYBOARD_DID_CLOSE:()=>w,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>P,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>l,resetKeyboardAssist:()=>e,setKeyboardClose:()=>h,setKeyboardOpen:()=>a,startKeyboardAssist:()=>n,trackViewportChanges:()=>m});const v="ionKeyboardDidShow",w="ionKeyboardDidHide";let c={},o={},t=!1;const e=()=>{c={},o={},t=!1},n=r=>{i(r),r.visualViewport&&(o=P(r.visualViewport),r.visualViewport.onresize=()=>{m(r),g()||l(r)?a(r):f(r)&&h(r)})},i=r=>{r.addEventListener("keyboardDidShow",E=>a(r,E)),r.addEventListener("keyboardDidHide",()=>h(r))},a=(r,E)=>{d(r,E),t=!0},h=r=>{p(r),t=!1},g=()=>!t&&c.width===o.width&&(c.height-o.height)*o.scale>150,l=r=>t&&!f(r),f=r=>t&&o.height===r.innerHeight,d=(r,E)=>{const D=new CustomEvent(v,{detail:{keyboardHeight:E?E.keyboardHeight:r.innerHeight-o.height}});r.dispatchEvent(D)},p=r=>{const E=new CustomEvent(w);r.dispatchEvent(E)},m=r=>{c=Object.assign({},o),o=P(r.visualViewport)},P=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},9955:(_,y,u)=>{u.d(y,{S:()=>w});const w={bubbles:{dur:1e3,circles:9,fn:(s,c,o)=>{const t=s*c/o-s+"ms",e=2*Math.PI*c/o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(s,c,o)=>{const t=c/o,e=s*t-s+"ms",n=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(s,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(s,c,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":s*c/o-s+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(s,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":s*c/o-s+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(s,c,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":s*c/o-s+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(s,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":s*c/o-s+"ms"}})}}},5732:(_,y,u)=>{u.r(y),u.d(y,{createSwipeBackGesture:()=>o});var v=u(206),w=u(5062),s=u(1363);u(2733);const o=(t,e,n,i,a)=>{const h=t.ownerDocument.defaultView,g=(0,w.i)(t),f=r=>g?-r.deltaX:r.deltaX;return(0,s.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:M}=r;return g?M>=h.innerWidth-50:M<=50})(r)&&e(),onStart:n,onMove:r=>{const M=f(r)/h.innerWidth;i(M)},onEnd:r=>{const E=f(r),M=h.innerWidth,D=E/M,C=(r=>g?-r.velocityX:r.velocityX)(r),x=C>=0&&(C>.2||E>M/2),A=(x?1-D:D)*M;let L=0;if(A>5){const B=A/Math.abs(C);L=Math.min(B,540)}a(x,D<=0?.01:(0,v.k)(0,D,.9999),L)}})}},7300:(_,y,u)=>{u.d(y,{c:()=>s,g:()=>o,h:()=>w,o:()=>e});var v=u(5861);const w=(n,i)=>null!==i.closest(n),s=(n,i)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},i):i,o=n=>{const i={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(a=>null!=a).map(a=>a.trim()).filter(a=>""!==a):[])(n).forEach(a=>i[a]=!0),i},t=/^[a-z][a-z0-9+\-.]*:/,e=function(){var n=(0,v.Z)(function*(i,a,h,g){if(null!=i&&"#"!==i[0]&&!t.test(i)){const l=document.querySelector("ion-router");if(l)return null!=a&&a.preventDefault(),l.push(i,h,g)}return!1});return function(a,h,g,l){return n.apply(this,arguments)}}()},8125:(_,y,u)=>{u.r(y),u.d(y,{PageDetailsPageModule:()=>f});var v=u(9808),w=u(4182),s=u(9537),c=u(9800),o=u(655),t=u(2096),e=u(4395);function n(d,p){if(1&d&&(t.TgZ(0,"ion-item"),t._uU(1),t.qZA()),2&d){const m=p.$implicit;t.xp6(1),t.hij(" ",m," ")}}function i(d,p){if(1&d&&(t.TgZ(0,"ion-list"),t.YNc(1,n,2,1,"ion-item",11),t.qZA()),2&d){const m=t.oxw();t.xp6(1),t.Q6J("ngForOf",m.place.comments)}}function a(d,p){1&d&&(t.TgZ(0,"ion-text")(1,"p",8),t._uU(2,"Sin comentarios a\xfan."),t.qZA()())}const g=[{path:"",component:(()=>{class d{constructor(m,P,r,E){this.r=m,this.s=P,this.router=r,this.alert=E}ngOnInit(){this.r.paramMap.subscribe(m=>{const P=m.get("placeId");this.place=this.s.getPlace(P)})}deletePlace(){return(0,o.mG)(this,void 0,void 0,function*(){yield(yield this.alert.create({header:"\xbfEst\xe1s seguro de eliminar registro?",message:"Confirmar",buttons:[{text:"Cancelar",role:"cancel"},{text:"Eliminar",handler:()=>{this.s.deletePlace(this.place.id),this.router.navigate(["/places"])}}]})).present()})}}return d.\u0275fac=function(m){return new(m||d)(t.Y36(c.gz),t.Y36(e.E),t.Y36(c.F0),t.Y36(s.Br))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-page-details"]],decls:23,vars:5,consts:[["color","secondary"],["slot","start"],["defaultHref","/places"],["slot","end"],[3,"click"],["name","trash"],[1,"ion-no-padding"],[3,"src"],[1,"ion-text-center"],[4,"ngIf","ngIfElse"],["noComments",""],[4,"ngFor","ngForOf"]],template:function(m,P){if(1&m&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",3)(7,"ion-button",4),t.NdJ("click",function(){return P.deletePlace()}),t._UZ(8,"ion-icon",5),t.qZA()()()(),t.TgZ(9,"ion-content")(10,"ion-grid",6)(11,"ion-row")(12,"ion-col",6),t._UZ(13,"ion-img",7),t.qZA()(),t.TgZ(14,"ion-row")(15,"ion-col")(16,"h1",8),t._uU(17),t.qZA()()(),t.TgZ(18,"ion-row")(19,"ion-col"),t.YNc(20,i,2,1,"ion-list",9),t.YNc(21,a,3,0,"ng-template",null,10,t.W1O),t.qZA()()()()),2&m){const r=t.MAs(22);t.xp6(5),t.Oqu(P.place.title),t.xp6(8),t.Q6J("src",P.place.imageURL),t.xp6(4),t.Oqu(P.place.title),t.xp6(3),t.Q6J("ngIf",P.place.comments&&P.place.comments.length>0)("ngIfElse",r)}},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.YG,s.gu,s.W2,s.jY,s.Nd,s.wI,s.Xz,v.O5,s.q_,v.sg,s.Ie,s.yW],styles:[""]}),d})()}];let l=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),d})(),f=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[v.ez,w.u5,s.Pc,l]]}),d})()},7193:(_,y,u)=>{u.r(y),u.d(y,{PlaceAddPageModule:()=>g});var v=u(9808),w=u(4182),s=u(9537),c=u(9800),o=u(2096),t=u(4395);const e=["titulo"],n=["ruta"],a=[{path:"",component:(()=>{class l{constructor(d,p){this.s=d,this.r=p}ngOnInit(){}saveNewPlace(){this.s.adPlace(this.ti.value,this.ru.value),this.r.navigate(["/places"])}}return l.\u0275fac=function(d){return new(d||l)(o.Y36(t.E),o.Y36(c.F0))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-place-add"]],viewQuery:function(d,p){if(1&d&&(o.Gf(e,5),o.Gf(n,5)),2&d){let m;o.iGM(m=o.CRH())&&(p.ti=m.first),o.iGM(m=o.CRH())&&(p.ru=m.first)}},decls:17,vars:0,consts:[["slot","start"],["defaultHref","/places"],["type","text","placeholder","Write a title"],["titulo",""],["type","text","placeholder","ruta"],["ruta",""],["color","primary",3,"click"]],template:function(d,p){1&d&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-back-button",1),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"Add a new place"),o.qZA()()(),o.TgZ(6,"ion-content")(7,"ion-row")(8,"ion-col")(9,"ion-card")(10,"ion-card-content"),o._UZ(11,"ion-input",2,3)(13,"ion-input",4,5),o.TgZ(15,"ion-button",6),o.NdJ("click",function(){return p.saveNewPlace()}),o._uU(16," Save "),o.qZA()()()()()())},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.Nd,s.wI,s.PM,s.FN,s.pK,s.j9,s.YG],styles:[""]}),l})()}];let h=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[c.Bz.forChild(a)],c.Bz]}),l})(),g=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[v.ez,w.u5,s.Pc,h]]}),l})()},4395:(_,y,u)=>{u.d(y,{E:()=>s});var v=u(2096),w=u(520);let s=(()=>{class c{constructor(t){this.http=t,this.places=[{id:"1",title:"Teotihuac\xe1n",imageURL:"https://www.ngenespanol.com/wp-content/uploads/2018/08/Teotihuac%C3%A1n-celebra-m%C3%A1s-de-100-a%C3%B1os-1280x720.jpg",comments:["This city was owesome in pass time ....","Beatifull, simply awesome"]},{id:"2",title:"Machu Picchu",imageURL:"https://content.r9cdn.net/rimg/dimg/19/e5/ef7b40cc-city-45618-16ed2f16974.jpg?crop=true&width=1366&height=768&xhint=1742&yhint=1434",comments:["A pesar de ser uno de los sitios hist\xf3ricos m\xe1s conocidos del mundo, el pasado de la ciudadela inca y las personas que la habitaron sigue siendo uno de los m\xe1s misteriosos para los historiadores occidentales."]},{id:"3",title:"Cascadas de agua azul",imageURL:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/12/02/61a8eb8b028ad.jpeg",comments:["El laberinto de cascadas albicelestes de Agua Azul, en M\xe9xico"]},{id:"4",title:"Cascadas de agua azul 2",imageURL:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/12/02/61a8eb8b028ad.jpeg",comments:[]}]}getPlaces(){return[...this.places]}getPlace(t){return Object.assign({},this.places.find(e=>e.id==t))}adPlace(t,e){this.places.push({id:this.places.length+1+"",title:t,imageURL:e,comments:[]})}deletePlace(t){this.places=this.places.filter(e=>e.id!==t)}getFotos(){return this.http.get("https://jsonplaceholder.typicode.com/photos?_limit=15")}}return c.\u0275fac=function(t){return new(t||c)(v.LFG(w.eN))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);