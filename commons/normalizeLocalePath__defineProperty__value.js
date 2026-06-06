{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "normalizeLocalePath", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = new WeakMap();
  function _v4(_v0, _v1) {
    let _v2;
    if (!_v1) return {
      pathname: _v0
    };
    let _v3 = _v3.get(_v1);
    _v3 || (_v3 = _v1.map(_v0 => _v0.toLowerCase()), _v3.set(_v1, _v3));
    let _v4 = _v0.split("/", 2);
    if (!_v4[1]) return {
      pathname: _v0
    };
    let _v5 = _v4[1].toLowerCase(),
      _v6 = _v3.indexOf(_v5);
    return _v6 < 0 ? {
      pathname: _v0
    } : (_v2 = _v1[_v6], {
      pathname: _v0 = _v0.slice(_v2.length + 1) || "/",
      detectedLocale: _v2
    });
  }
}