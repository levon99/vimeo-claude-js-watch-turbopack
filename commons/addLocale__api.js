{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "addLocale", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1, _v2, _v3) {
    if (!_v1 || _v1 === _v2) return _v0;
    let _v4 = _v0.toLowerCase();
    return !_v3 && ((0, _v4.pathHasPrefix)(_v4, "/api") || (0, _v4.pathHasPrefix)(_v4, `/${_v1.toLowerCase()}`)) ? _v0 : (0, _v3.addPathPrefix)(_v0, `/${_v1}`);
  }
}