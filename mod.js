// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var l="function"==typeof Symbol?Symbol.toStringTag:"";var n=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,a,e,y,c;if(null==t)return o.call(t);a=t[l],c=l,n=null!=(y=t)&&r.call(y,c);try{t[l]=void 0}catch(r){return o.call(t)}return e=o.call(t),n?t[l]=a:delete t[l],e}:function(t){return o.call(t)},a="function"==typeof Float64Array;function e(t){return a&&t instanceof Float64Array||"[object Float64Array]"===n(t)}export{e as default};
//# sourceMappingURL=mod.js.map
