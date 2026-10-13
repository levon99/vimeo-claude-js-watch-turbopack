{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2, _v3) {
    if (!_v6(_v0)) return _v0;
    _v1 = _v4(_v1, _v0);
    for (var _v4 = -1, _v5 = _v1.length, _v6 = _v5 - 1, _v7 = _v0; null != _v7 && ++_v4 < _v5;) {
      var _v8 = _v7(_v1[_v4]),
        _v9 = _v2;
      if ("__proto__" === _v8 || "constructor" === _v8 || "prototype" === _v8) break;
      if (_v4 != _v6) {
        var _v10 = _v7[_v8];
        void 0 === (_v9 = _v3 ? _v3(_v10, _v8, _v7) : void 0) && (_v9 = _v6(_v10) ? _v10 : _v5(_v1[_v4 + 1]) ? [] : {});
      }
      _v3(_v7, _v8, _v9), _v7 = _v7[_v8];
    }
    return _v0;
  };
}