{
  "use strict";

  function _v3(_v0, _v1 = "") {
    return ("/" === _v0 ? "/index" : /^\/index(\/|$)/.test(_v0) ? `/index${_v0}` : _v0) + _v1;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}