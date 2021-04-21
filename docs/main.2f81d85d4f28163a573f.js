(()=>{"use strict";var e,t,n,r={409:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(90);const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content__is-visible"),this.siteHeader.classList.toggle("site-header__is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&r(t.prototype,n),e}();var o=n(493),l=n.n(o),s=n(279),a=n.n(s);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thrPerc=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=l()(this.calcCaller,200).bind(this),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){console.log("resize just ran"),e.browserHeight=window.innerHeight}),333))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("element was calculated"),e.getBoundingClientRect().top/this.browserHeight*100<this.thrPerc&&(e.classList.add("reveal-item__is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}},{key:"calcCaller",value:function(){var e=this;console.log("scroll fuction ran"),this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}}])&&c(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",l()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header__dark"):this.siteHeader.classList.remove("site-header__dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="Down":this.scrollDirection="Up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&"Down"==this.scrollDirection||t<33&&"Up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&d(t.prototype,n),e}();var f;new i,new h,new u(document.querySelectorAll(".feature-item"),75),new u(document.querySelectorAll(".testimonial"),60),document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===f?n.e(582).then(n.bind(n,222)).then((function(e){f=new e.default,setTimeout((function(){return f.openTheModal()}),20)})).catch((function(){return HTMLFormControlsCollection.log("There was a problem.")})):f.openTheModal()}))}))}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,i)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,r,i]=e[c],s=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(s=!1,i<l&&(l=i));s&&(e.splice(c--,1),t=r())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"modal.08925dbc3ea1086454ad.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="travel-site:",o.l=(e,r,i,l)=>{if(t[e])t[e].push(r);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",n+i),s.src=e),t[e]=[r];var h=(n,r)=>{s.onerror=s.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),n)return n(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var l=o.p+o.u(t),s=new Error;o.l(l,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",s.name="ChunkLoadError",s.type=i,s.request=l,r[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[l,s,a]=n,c=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);for(a&&a(o),t&&t(n);c<l.length;c++)i=l[c],o.o(e,i)&&e[i]&&e[i][0](),e[l[c]]=0;o.O()},n=self.webpackChunktravel_site=self.webpackChunktravel_site||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=o.O(void 0,[636],(()=>o(409)));l=o.O(l)})();