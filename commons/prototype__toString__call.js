{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = 1 / 0,
    _v8 = _v3 ? _v3.prototype : void 0,
    _v9 = _v8 ? _v8.toString : void 0;
  _v1.exports = function _v0(_v1) {
    if ("string" == typeof _v1) return _v1;
    if (_v5(_v1)) return _v4(_v1, _v0) + "";
    if (_v6(_v1)) return _v9 ? _v9.call(_v1) : "";
    var _v2 = _v1 + "";
    return "0" == _v2 && 1 / _v1 == -_v7 ? "-0" : _v2;
  };
}