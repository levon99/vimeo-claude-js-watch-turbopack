{
  "use strict";

  let _v3 = _v0.r(0);
  _v1.exports = (_v0, _v1, _v2, _v3, _v4) => {
    "string" == typeof _v2 && (_v4 = _v3, _v3 = _v2, _v2 = void 0);
    try {
      return new _v3(_v0 instanceof _v3 ? _v0.version : _v0, _v2).inc(_v1, _v3, _v4).version;
    } catch (_v0) {
      return null;
    }
  };
}