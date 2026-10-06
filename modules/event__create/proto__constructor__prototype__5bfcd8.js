{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = Object.prototype.hasOwnProperty;
  _v1.exports = function (_v0, _v1) {
    _v1 = _v3(_v1, _v0);
    var _v2 = -1,
      _v3 = _v1.length;
    if (!_v3) return !0;
    for (; ++_v2 < _v3;) {
      var _v4 = _v6(_v1[_v2]);
      if ("__proto__" === _v4 && !_v7.call(_v0, "__proto__") || ("constructor" === _v4 || "prototype" === _v4) && _v2 < _v3 - 1) return !1;
    }
    var _v5 = _v5(_v0, _v1);
    return null == _v5 || delete _v5[_v6(_v4(_v1))];
  };
}