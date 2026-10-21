{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = Object.prototype.hasOwnProperty;
  _v1.exports = function (_v0) {
    if (null == _v0) return !0;
    if (_v7(_v0) && (_v6(_v0) || "string" == typeof _v0 || "function" == typeof _v0.splice || _v8(_v0) || _v10(_v0) || _v5(_v0))) return !_v0.length;
    var _v1 = _v4(_v0);
    if ("[object Map]" == _v1 || "[object Set]" == _v1) return !_v0.size;
    if (_v9(_v0)) return !_v3(_v0).length;
    for (var _v2 in _v0) if (_v11.call(_v0, _v2)) return !1;
    return !0;
  };
}