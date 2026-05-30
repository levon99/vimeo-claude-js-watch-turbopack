{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = _v0.constructor;
    switch (_v1) {
      case "[object ArrayBuffer]":
        return _v3(_v0);
      case "[object Boolean]":
      case "[object Date]":
        return new _v3(+_v0);
      case "[object DataView]":
        return _v4(_v0, _v2);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return _v7(_v0, _v2);
      case "[object Map]":
      case "[object Set]":
        return new _v3();
      case "[object Number]":
      case "[object String]":
        return new _v3(_v0);
      case "[object RegExp]":
        return _v5(_v0);
      case "[object Symbol]":
        return _v6(_v0);
    }
  };
}