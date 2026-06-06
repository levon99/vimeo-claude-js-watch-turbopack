{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = "[object Arguments]",
    _v12 = "[object Array]",
    _v13 = "[object Object]",
    _v14 = Object.prototype.hasOwnProperty;
  _v1.exports = function (_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6 = _v8(_v0),
      _v7 = _v8(_v1),
      _v8 = _v6 ? _v12 : _v7(_v0),
      _v9 = _v7 ? _v12 : _v7(_v1);
    _v8 = _v8 == _v11 ? _v13 : _v8, _v9 = _v9 == _v11 ? _v13 : _v9;
    var _v10 = _v8 == _v13,
      _v11 = _v9 == _v13,
      _v12 = _v8 == _v9;
    if (_v12 && _v9(_v0)) {
      if (!_v9(_v1)) return !1;
      _v6 = !0, _v10 = !1;
    }
    if (_v12 && !_v10) return _v5 || (_v5 = new _v3()), _v6 || _v10(_v0) ? _v4(_v0, _v1, _v2, _v3, _v4, _v5) : _v5(_v0, _v1, _v8, _v2, _v3, _v4, _v5);
    if (!(1 & _v2)) {
      var _v13 = _v10 && _v14.call(_v0, "__wrapped__"),
        _v14 = _v11 && _v14.call(_v1, "__wrapped__");
      if (_v13 || _v14) {
        var _v15 = _v13 ? _v0.value() : _v0,
          _v16 = _v14 ? _v1.value() : _v1;
        return _v5 || (_v5 = new _v3()), _v4(_v15, _v16, _v2, _v3, _v5);
      }
    }
    return !!_v12 && (_v5 || (_v5 = new _v3()), _v6(_v0, _v1, _v2, _v3, _v4, _v5));
  };
}