{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "removePathPrefix", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0, _v1) {
    if (!(0, _v3.pathHasPrefix)(_v0, _v1)) return _v0;
    let _v2 = _v0.slice(_v1.length);
    return _v2.startsWith("/") ? _v2 : `/${_v2}`;
  }
}