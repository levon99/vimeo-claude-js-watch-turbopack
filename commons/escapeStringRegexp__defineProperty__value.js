{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "escapeStringRegexp", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = /[|\\{}()[\]^$+*?.-]/,
    _v4 = /[|\\{}()[\]^$+*?.-]/g;
  function _v5(_v0) {
    return _v3.test(_v0) ? _v0.replace(_v4, "\\$&") : _v0;
  }
}