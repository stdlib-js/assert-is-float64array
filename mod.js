// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var o=function(){return t&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,n=r;var l=function(t){return n.call(t)},e=Object.prototype.hasOwnProperty;var a=function(t,o){return null!=t&&e.call(t,o)},c="function"==typeof Symbol?Symbol.toStringTag:"",u=a,y=c,f=r;var i=l,p=function(t){var o,r,n;if(null==t)return f.call(t);r=t[y],o=u(t,y);try{t[y]=void 0}catch(o){return f.call(t)}return n=f.call(t),o?t[y]=r:delete t[y],n},b=o()?p:i,S="function"==typeof Float64Array;function m(t){return S&&t instanceof Float64Array||"[object Float64Array]"===b(t)}export{m as default};
//# sourceMappingURL=mod.js.map
