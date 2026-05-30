{
  var _v3 = _v0.r(0),
    _v4 = Object.prototype.hasOwnProperty;
  _v1.exports = function (_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6 = 1 & _v2,
      _v7 = _v3(_v0),
      _v8 = _v7.length;
    if (_v8 != _v3(_v1).length && !_v6) return !1;
    for (var _v9 = _v8; _v9--;) {
      var _v10 = _v7[_v9];
      if (!(_v6 ? _v10 in _v1 : _v4.call(_v1, _v10))) return !1;
    }
    var _v11 = _v5.get(_v0),
      _v12 = _v5.get(_v1);
    if (_v11 && _v12) return _v11 == _v1 && _v12 == _v0;
    var _v13 = !0;
    _v5.set(_v0, _v1), _v5.set(_v1, _v0);
    for (var _v14 = _v6; ++_v9 < _v8;) {
      var _v15 = _v0[_v10 = _v7[_v9]],
        _v16 = _v1[_v10];
      if (_v3) var _v17 = _v6 ? _v3(_v16, _v15, _v10, _v1, _v0, _v5) : _v3(_v15, _v16, _v10, _v0, _v1, _v5);
      if (!(void 0 === _v17 ? _v15 === _v16 || _v4(_v15, _v16, _v2, _v3, _v5) : _v17)) {
        _v13 = !1;
        break;
      }
      _v14 || (_v14 = "constructor" == _v10);
    }
    if (_v13 && !_v14) {
      var _v18 = _v0.constructor,
        _v19 = _v1.constructor;
      _v18 != _v19 && "constructor" in _v0 && "constructor" in _v1 && !("function" == typeof _v18 && _v18 instanceof _v18 && "function" == typeof _v19 && _v19 instanceof _v19) && (_v13 = !1);
    }
    return _v5.delete(_v0), _v5.delete(_v1), _v13;
  };
}