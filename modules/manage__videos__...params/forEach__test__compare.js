{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = (_v0, _v1, _v2) => {
    let _v3 = null,
      _v4 = null,
      _v5 = null;
    try {
      _v5 = new _v4(_v1, _v2);
    } catch (_v0) {
      return null;
    }
    return _v0.forEach(_v0 => {
      _v5.test(_v0) && (!_v3 || -1 === _v4.compare(_v0)) && (_v4 = new _v3(_v3 = _v0, _v2));
    }), _v3;
  };
}