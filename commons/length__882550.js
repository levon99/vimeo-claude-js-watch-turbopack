{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    if (!_v6(_v2)) return !1;
    var _v3 = typeof _v1;
    return ("number" == _v3 ? !!(_v4(_v2) && _v5(_v1, _v2.length)) : "string" == _v3 && _v1 in _v2) && _v3(_v2[_v1], _v0);
  };
}