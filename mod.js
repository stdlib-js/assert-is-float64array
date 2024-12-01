// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,l="function"==typeof n?n.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,a,e,y,c;if(null==t)return o.call(t);a=t[l],c=l,n=null!=(y=t)&&r.call(y,c);try{t[l]=void 0}catch(r){return o.call(t)}return e=o.call(t),n?t[l]=a:delete t[l],e}:function(t){return o.call(t)},e="function"==typeof Float64Array;function y(t){return e&&t instanceof Float64Array||"[object Float64Array]"===a(t)}export{y as default};
//# sourceMappingURL=mod.js.map
