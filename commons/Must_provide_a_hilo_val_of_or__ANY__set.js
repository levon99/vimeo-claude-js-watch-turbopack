{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    {
      ANY: _v5
    } = _v4,
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0);
  _v1.exports = (_v0, _v1, _v2, _v3) => {
    let _v4, _v5, _v6, _v7, _v8;
    switch (_v0 = new _v3(_v0, _v3), _v1 = new _v6(_v1, _v3), _v2) {
      case ">":
        _v4 = _v8, _v5 = _v10, _v6 = _v9, _v7 = ">", _v8 = ">=";
        break;
      case "<":
        _v4 = _v9, _v5 = _v11, _v6 = _v8, _v7 = "<", _v8 = "<=";
        break;
      default:
        throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (_v7(_v0, _v1, _v3)) return !1;
    for (let _v0 = 0; _v0 < _v1.set.length; ++_v0) {
      let _v0 = _v1.set[_v0],
        _v1 = null,
        _v2 = null;
      if (_v0.forEach(_v0 => {
        _v0.semver === _v5 && (_v0 = new _v4(">=0.0.0")), _v1 = _v1 || _v0, _v2 = _v2 || _v0, _v4(_v0.semver, _v1.semver, _v3) ? _v1 = _v0 : _v6(_v0.semver, _v2.semver, _v3) && (_v2 = _v0);
      }), _v1.operator === _v7 || _v1.operator === _v8 || (!_v2.operator || _v2.operator === _v7) && _v5(_v0, _v2.semver) || _v2.operator === _v8 && _v6(_v0, _v2.semver)) return !1;
    }
    return !0;
  };
}