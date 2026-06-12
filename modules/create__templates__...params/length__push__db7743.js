{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = -1,
      _v4 = _v4,
      _v5 = _v0.length,
      _v6 = !0,
      _v7 = [],
      _v8 = _v7;
    if (_v2) _v6 = !1, _v4 = _v5;else if (_v5 >= 200) {
      var _v9 = _v1 ? null : _v7(_v0);
      if (_v9) return _v8(_v9);
      _v6 = !1, _v4 = _v6, _v8 = new _v3();
    } else _v8 = _v1 ? [] : _v7;
    e: for (; ++_v3 < _v5;) {
      var _v10 = _v0[_v3],
        _v11 = _v1 ? _v1(_v10) : _v10;
      if (_v10 = _v2 || 0 !== _v10 ? _v10 : 0, _v6 && _v11 == _v11) {
        for (var _v12 = _v8.length; _v12--;) if (_v8[_v12] === _v11) continue e;
        _v1 && _v8.push(_v11), _v7.push(_v10);
      } else _v4(_v8, _v11, _v2) || (_v8 !== _v7 && _v8.push(_v11), _v7.push(_v10));
    }
    return _v7;
  };
}