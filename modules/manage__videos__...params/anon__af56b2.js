{
  "use strict";

  let _v3 = _v0.r(0);
  _v1.exports = (_v0, _v1, _v2 = !1) => {
    if (_v0 instanceof _v3) return _v0;
    try {
      return new _v3(_v0, _v1);
    } catch (_v0) {
      if (!_v2) return null;
      throw _v0;
    }
  };
}