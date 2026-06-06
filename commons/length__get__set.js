{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6 = 1 & _v2,
      _v7 = _v0.length,
      _v8 = _v1.length;
    if (_v7 != _v8 && !(_v6 && _v8 > _v7)) return !1;
    var _v9 = _v5.get(_v0),
      _v10 = _v5.get(_v1);
    if (_v9 && _v10) return _v9 == _v1 && _v10 == _v0;
    var _v11 = -1,
      _v12 = !0,
      _v13 = 2 & _v2 ? new _v3() : void 0;
    for (_v5.set(_v0, _v1), _v5.set(_v1, _v0); ++_v11 < _v7;) {
      var _v14 = _v0[_v11],
        _v15 = _v1[_v11];
      if (_v3) var _v16 = _v6 ? _v3(_v15, _v14, _v11, _v1, _v0, _v5) : _v3(_v14, _v15, _v11, _v0, _v1, _v5);
      if (void 0 !== _v16) {
        if (_v16) continue;
        _v12 = !1;
        break;
      }
      if (_v13) {
        if (!_v4(_v1, function (_v0, _v1) {
          if (!_v5(_v13, _v1) && (_v14 === _v0 || _v4(_v14, _v0, _v2, _v3, _v5))) return _v13.push(_v1);
        })) {
          _v12 = !1;
          break;
        }
      } else if (!(_v14 === _v15 || _v4(_v14, _v15, _v2, _v3, _v5))) {
        _v12 = !1;
        break;
      }
    }
    return _v5.delete(_v0), _v5.delete(_v1), _v12;
  };
}