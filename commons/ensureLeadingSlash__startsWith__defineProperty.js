{
  "use strict";

  function _v3(_v0) {
    return _v0.startsWith("/") ? _v0 : `/${_v0}`;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "ensureLeadingSlash", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}