(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c1da5":"6a3daf41","chunk-2d0e14ac":"df487fc8","chunk-2d216fd5":"512e9ad7","chunk-2d21a3d2":"8a979739"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2fc4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("159b"),n("b64b"),n("7a23")),a=Object(o["i"])("div",{id:"nav"},null,-1);function c(e,t){var n=Object(o["B"])("router-view");return Object(o["v"])(),Object(o["h"])(o["a"],null,[a,Object(o["l"])(n)],64)}const u={};u.render=c;var i,l=u,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("6c02")),s=[{path:"login",name:"login",component:function(){return n.e("chunk-2d216fd5").then(n.bind(null,"c58e"))}},{path:"profile",name:"profile",component:function(){return n.e("chunk-2d0c1da5").then(n.bind(null,"488c"))}}],d=n("5502"),p=n("ade3"),b=(n("99af"),n("d281")),h=n("bc3a"),m=n.n(h),v="token",O={profile:null,token:localStorage.getItem(v)};O.token&&(m.a.defaults.headers.common["Authorization"]="Token ".concat(O.token));var g={isAuthenticated:function(e){return!!e.profile},accountFullName:function(e){return e.profile?e.profile.last_name||e.profile.first_name?"".concat(e.profile.last_name," ").concat(e.profile.first_name):e.profile.username:"-"}},j=(i={},Object(p["a"])(i,b["b"],(function(e,t){e.profile=t})),Object(p["a"])(i,b["d"],(function(e,t){Object.keys(t).forEach((function(n){e.profile[n]=t[n]}))})),Object(p["a"])(i,b["a"],(function(e){e.profile=null,e.token=null,m.a.defaults.headers.common["Authorization"]=null,localStorage.removeItem(v)})),Object(p["a"])(i,b["c"],(function(e,t){e.token=t.data.token,m.a.defaults.headers.common["Authorization"]="Token ".concat(t.data.token),localStorage.setItem(v,e.token)})),i),k={state:O,getters:g,mutations:j},y=Object(d["a"])({state:{},mutations:{},actions:{},modules:{account:k}}),_=[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/account",component:function(){return n.e("chunk-2d0e14ac").then(n.bind(null,"7a8d"))},children:s}],E=Object(f["a"])({history:Object(f["b"])("/"),routes:_});E.beforeEach((function(e,t,n){var r="login"===e.name,o="login"===t.name;if(!y.getters.isAuthenticated){if(o)return;return r?void n():void n({name:"login"})}r?n({name:"home"}):n()}));var w=E,T=n("9319"),P=n("bb57"),A=n("5b2c"),S=n("6f85"),C=n("8398"),N=n("a034"),x=n("1e2d"),U={Button:P["a"],DataTable:A["a"],Column:S["a"],InputText:C["a"],Password:N["a"],Panel:x["a"]},R=n("be3b");n("2fc4");function L(){var e=Object(o["e"])(l).use(y);e.use(w).use(T["a"]),Object.keys(U).forEach((function(t){e.component(t,U[t])})),e.mount("#app")}function I(){return M.apply(this,arguments)}function M(){return M=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["a"].get("profile/");case 3:t=e.sent,y.commit(b["b"],t.data.data.user),L(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),L();case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),M.apply(this,arguments)}I()},be3b:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");var r=n("bc3a"),o=n.n(r);o.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/"}).baseURL||Object({NODE_ENV:"production",BASE_URL:"/"}).apiUrl||"/api/";var a=localStorage.getItem("token");a&&(o.a.defaults.headers.common["Authorization"]="Token ".concat(a));var c={},u=o.a.create(c);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var i=u},d281:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c}));var r="ACCOUNT_SET_PROFILE",o="ACCOUNT_SET_TOKEN",a="ACCOUNT_REMOVE_TOKEN",c="ACCOUNT_UPDATE_PROFILE"}});
//# sourceMappingURL=app.f21446ab.js.map