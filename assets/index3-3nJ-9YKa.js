import{G as R}from"./index-BNJXVkPX.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=(t,n,c,o)=>{const s=F(t)?{capture:!1,passive:!!o.passive}:!1;let r,u;return t.__zone_symbol__addEventListener?(r="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(r="addEventListener",u="removeEventListener"),t[r](n,c,s),()=>{t[u](n,c,s)}},F=t=>{if(g===void 0)try{const n=Object.defineProperty({},"passive",{get:()=>{g=!0}});t.addEventListener("optsTest",()=>{},n)}catch(n){g=!1}return!!g};let g;const W=2e3,j=(t,n,c,o,s)=>{let r,u,m,i,f,a,h,p=0;const y=d=>{p=Date.now()+W,n(d)&&(!u&&c&&(u=T(t,"touchmove",c,s)),m||(m=T(d.target,"touchend",e,s)),i||(i=T(d.target,"touchcancel",e,s)))},X=d=>{p>Date.now()||n(d)&&(!a&&c&&(a=T(G(t),"mousemove",c,s)),h||(h=T(G(t),"mouseup",Y,s)))},e=d=>{v(),o&&o(d)},Y=d=>{S(),o&&o(d)},v=()=>{u&&u(),m&&m(),i&&i(),u=m=i=void 0},S=()=>{a&&a(),h&&h(),a=h=void 0},E=()=>{v(),S()},_=(d=!0)=>{d?(r||(r=T(t,"touchstart",y,s)),f||(f=T(t,"mousedown",X,s))):(r&&r(),f&&f(),r=f=void 0,E())};return{enable:_,stop:E,destroy:()=>{_(!1),o=c=n=void 0}}},G=t=>t instanceof Document?t:t.ownerDocument,q=(t,n,c)=>{const o=c*(Math.PI/180),s=t==="x",r=Math.cos(o),u=n*n;let m=0,i=0,f=!1,a=0;return{start(h,p){m=h,i=p,a=0,f=!0},detect(h,p){if(!f)return!1;const y=h-m,X=p-i,e=y*y+X*X;if(e<u)return!1;const Y=Math.sqrt(e),v=(s?y:X)/Y;return v>r?a=1:v<-r?a=-1:a=0,f=!1,!0},isGesture(){return a!==0},getDirection(){return a}}},I=t=>{let n=!1,c=!1,o=!0,s=!1;const r=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),u=r.canStart,m=r.onWillStart,i=r.onStart,f=r.onEnd,a=r.notCaptured,h=r.onMove,p=r.threshold,y=r.passive,X=r.blurOnStart,e={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},Y=q(r.direction,r.threshold,r.maxAngle),v=R.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=l=>{const D=w(l);return c||!o||(x(l,e),e.startX=e.currentX,e.startY=e.currentY,e.startTime=e.currentTime=D,e.velocityX=e.velocityY=e.deltaX=e.deltaY=0,e.event=l,u&&u(e)===!1)||(v.release(),!v.start())?!1:(c=!0,p===0?b():(Y.start(e.startX,e.startY),!0))},E=l=>{if(n){!s&&o&&(s=!0,O(e,l),requestAnimationFrame(_));return}O(e,l),Y.detect(e.currentX,e.currentY)&&(!Y.isGesture()||!b())&&A()},_=()=>{n&&(s=!1,h&&h(e))},b=()=>v.capture()?(n=!0,o=!1,e.startX=e.currentX,e.startY=e.currentY,e.startTime=e.currentTime,m?m(e).then(C):C(),!0):!1,d=()=>{if(typeof document<"u"){const l=document.activeElement;l!=null&&l.blur&&l.blur()}},C=()=>{X&&d(),i&&i(e),o=!0},M=()=>{n=!1,c=!1,s=!1,o=!0,v.release()},L=l=>{const D=n,z=o;if(M(),!!z){if(O(e,l),D){f&&f(e);return}a&&a(e)}},P=j(r.el,S,E,L,{passive:y}),A=()=>{M(),P.stop(),a&&a(e)};return{enable(l=!0){l||(n&&L(void 0),M()),P.enable(l)},destroy(){v.destroy(),P.destroy()}}},O=(t,n)=>{if(!n)return;const c=t.currentX,o=t.currentY,s=t.currentTime;x(n,t);const r=t.currentX,u=t.currentY,i=(t.currentTime=w(n))-s;if(i>0&&i<100){const f=(r-c)/i,a=(u-o)/i;t.velocityX=f*.7+t.velocityX*.3,t.velocityY=a*.7+t.velocityY*.3}t.deltaX=r-t.startX,t.deltaY=u-t.startY,t.event=n},x=(t,n)=>{let c=0,o=0;if(t){const s=t.changedTouches;if(s&&s.length>0){const r=s[0];c=r.clientX,o=r.clientY}else t.pageX!==void 0&&(c=t.pageX,o=t.pageY)}n.currentX=c,n.currentY=o},w=t=>t.timeStamp||Date.now();export{R as GESTURE_CONTROLLER,I as createGesture};
