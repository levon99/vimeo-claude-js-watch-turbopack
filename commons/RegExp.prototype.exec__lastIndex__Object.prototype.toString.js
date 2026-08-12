{
  "use strict";

  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0)(),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  if (_v5) {
    var _v8 = _v4("RegExp.prototype.exec"),
      _v9 = {},
      _v10 = function () {
        throw _v9;
      },
      _v11 = {
        toString: _v10,
        valueOf: _v10
      };
    "symbol" == typeof Symbol.toPrimitive && (_v11[Symbol.toPrimitive] = _v10), _v3 = function (_v0) {
      if (!_v0 || "object" != typeof _v0) return !1;
      var _v1 = _v7(_v0, "lastIndex");
      if (!(_v1 && _v6(_v1, "value"))) return !1;
      try {
        _v8(_v0, _v11);
      } catch (_v0) {
        return _v0 === _v9;
      }
    };
  } else {
    var _v12 = _v4("Object.prototype.toString");
    _v3 = function (_v0) {
      return !!_v0 && ("object" == typeof _v0 || "function" == typeof _v0) && "[object RegExp]" === _v12(_v0);
    };
  }
  _v1.exports = _v3;
}