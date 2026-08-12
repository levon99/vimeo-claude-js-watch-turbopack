{
  "use strict";

  function _v3(_v0) {
    return _v0.split("/").map(_v0 => encodeURIComponent(_v0)).join("/");
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "encodeURIPath", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}