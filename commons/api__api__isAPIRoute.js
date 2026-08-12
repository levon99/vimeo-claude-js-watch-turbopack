{
  "use strict";

  function _v3(_v0) {
    return "/api" === _v0 || !!(null == _v0 ? void 0 : _v0.startsWith("/api/"));
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "isAPIRoute", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}