{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v3 ? _v3.prototype : void 0,
    _v10 = _v9 ? _v9.valueOf : void 0;
  _v1.exports = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    switch (_v2) {
      case "[object DataView]":
        if (_v0.byteLength != _v1.byteLength || _v0.byteOffset != _v1.byteOffset) break;
        _v0 = _v0.buffer, _v1 = _v1.buffer;
      case "[object ArrayBuffer]":
        if (_v0.byteLength != _v1.byteLength || !_v5(new _v4(_v0), new _v4(_v1))) break;
        return !0;
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return _v5(+_v0, +_v1);
      case "[object Error]":
        return _v0.name == _v1.name && _v0.message == _v1.message;
      case "[object RegExp]":
      case "[object String]":
        return _v0 == _v1 + "";
      case "[object Map]":
        var _v7 = _v7;
      case "[object Set]":
        var _v8 = 1 & _v3;
        if (_v7 || (_v7 = _v8), _v0.size != _v1.size && !_v8) break;
        var _v9 = _v6.get(_v0);
        if (_v9) return _v9 == _v1;
        _v3 |= 2, _v6.set(_v0, _v1);
        var _v10 = _v6(_v7(_v0), _v7(_v1), _v3, _v4, _v5, _v6);
        return _v6.delete(_v0), _v10;
      case "[object Symbol]":
        if (_v10) return _v10.call(_v0) == _v10.call(_v1);
    }
    return !1;
  };
}