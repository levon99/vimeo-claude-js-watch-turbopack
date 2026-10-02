{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0).trim,
    _v8 = _v0.r(0),
    _v9 = _v3.parseInt,
    _v10 = _v3.Symbol,
    _v11 = _v10 && _v10.iterator,
    _v12 = /^[+-]?0x/i,
    _v13 = _v5(_v12.exec);
  _v1.exports = 8 !== _v9(_v8 + "08") || 22 !== _v9(_v8 + "0x16") || _v11 && !_v4(function () {
    _v9(Object(_v11));
  }) ? function (_v0, _v1) {
    var _v2 = _v7(_v6(_v0));
    return _v9(_v2, _v1 >>> 0 || (_v13(_v12, _v2) ? 16 : 10));
  } : _v9;
}