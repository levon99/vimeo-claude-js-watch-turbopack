{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = /#|\.prototype\./,
    _v6 = function (_v0, _v1) {
      var _v2 = _v8[_v7(_v0)];
      return _v2 === _v10 || _v2 !== _v9 && (_v4(_v1) ? _v3(_v1) : !!_v1);
    },
    _v7 = _v6.normalize = function (_v0) {
      return String(_v0).replace(_v5, ".").toLowerCase();
    },
    _v8 = _v6.data = {},
    _v9 = _v6.NATIVE = "N",
    _v10 = _v6.POLYFILL = "P";
  _v1.exports = _v6;
}