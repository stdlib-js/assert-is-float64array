// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=o,n=function(t){return e.call(t)},r=Object.prototype.hasOwnProperty,l=function(t,o){return null!=t&&r.call(t,o)},f="function"==typeof Symbol?Symbol.toStringTag:"",i=l,a=f,y=o,u=n,c=function(t){var o,e,n;if(null==t)return y.call(t);e=t[a],o=i(t,a);try{t[a]=void 0}catch(o){return y.call(t)}return n=y.call(t),o?t[a]=e:delete t[a],n},p=t&&"symbol"==typeof Symbol.toStringTag?c:u,b="function"==typeof Float64Array;return function(t){return b&&t instanceof Float64Array||"[object Float64Array]"===p(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).isFloat64Array=o();
//# sourceMappingURL=index.js.map
