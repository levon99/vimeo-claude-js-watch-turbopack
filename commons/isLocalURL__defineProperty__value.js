{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "isLocalURL", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0) {
    if (!(0, _v3.isAbsoluteUrl)(_v0)) return !0;
    try {
      let _v0 = (0, _v3.getLocationOrigin)(),
        _v1 = new URL(_v0, _v0);
      return _v1.origin === _v0 && (0, _v4.hasBasePath)(_v1.pathname);
    } catch (_v0) {
      return !1;
    }
  }
}