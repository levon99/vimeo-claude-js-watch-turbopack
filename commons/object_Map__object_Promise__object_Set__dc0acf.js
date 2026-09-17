{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = "[object Map]",
    _v11 = "[object Promise]",
    _v12 = "[object Set]",
    _v13 = "[object WeakMap]",
    _v14 = "[object DataView]",
    _v15 = _v9(_v3),
    _v16 = _v9(_v4),
    _v17 = _v9(_v5),
    _v18 = _v9(_v6),
    _v19 = _v9(_v7),
    _v20 = _v8;
  (_v3 && _v20(new _v3(new ArrayBuffer(1))) != _v14 || _v4 && _v20(new _v4()) != _v10 || _v5 && _v20(_v5.resolve()) != _v11 || _v6 && _v20(new _v6()) != _v12 || _v7 && _v20(new _v7()) != _v13) && (_v20 = function (_v0) {
    var _v1 = _v8(_v0),
      _v2 = "[object Object]" == _v1 ? _v0.constructor : void 0,
      _v3 = _v2 ? _v9(_v2) : "";
    if (_v3) switch (_v3) {
      case _v15:
        return _v14;
      case _v16:
        return _v10;
      case _v17:
        return _v11;
      case _v18:
        return _v12;
      case _v19:
        return _v13;
    }
    return _v1;
  }), _v1.exports = _v20;
}