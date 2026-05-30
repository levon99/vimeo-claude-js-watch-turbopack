{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "denormalizePagePath", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0) {
    let _v1 = (0, _v4.normalizePathSep)(_v0);
    return _v1.startsWith("/index/") && !(0, _v3.isDynamicRoute)(_v1) ? _v1.slice(6) : "/index" !== _v1 ? _v1 : "/";
  }
}