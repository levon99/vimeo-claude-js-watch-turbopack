{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2, _v3) {
    var _v4 = _v2.length,
      _v5 = _v4,
      _v6 = !_v3;
    if (null == _v0) return !_v5;
    for (_v0 = Object(_v0); _v4--;) {
      var _v7 = _v2[_v4];
      if (_v6 && _v7[2] ? _v7[1] !== _v0[_v7[0]] : !(_v7[0] in _v0)) return !1;
    }
    for (; ++_v4 < _v5;) {
      var _v8 = (_v7 = _v2[_v4])[0],
        _v9 = _v0[_v8],
        _v10 = _v7[1];
      if (_v6 && _v7[2]) {
        if (void 0 === _v9 && !(_v8 in _v0)) return !1;
      } else {
        var _v11 = new _v3();
        if (_v3) var _v12 = _v3(_v9, _v10, _v8, _v0, _v1, _v11);
        if (!(void 0 === _v12 ? _v4(_v10, _v9, 3, _v3, _v11) : _v12)) return !1;
      }
    }
    return !0;
  };
}