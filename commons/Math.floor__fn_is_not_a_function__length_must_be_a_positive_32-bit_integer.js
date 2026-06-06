{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0)(),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v3("%Math.floor%");
  _v1.exports = function (_v0, _v1) {
    if ("function" != typeof _v0) throw new _v7("`fn` is not a function");
    if ("number" != typeof _v1 || _v1 < 0 || _v1 > 0 || _v8(_v1) !== _v1) throw new _v7("`length` must be a positive 32-bit integer");
    var _v2 = arguments.length > 2 && !!arguments[2],
      _v3 = !0,
      _v4 = !0;
    if ("length" in _v0 && _v6) {
      var _v5 = _v6(_v0, "length");
      _v5 && !_v5.configurable && (_v3 = !1), _v5 && !_v5.writable && (_v4 = !1);
    }
    return (_v3 || _v4 || !_v2) && (_v5 ? _v4(_v0, "length", _v1, !0, !0) : _v4(_v0, "length", _v1)), _v0;
  };
}