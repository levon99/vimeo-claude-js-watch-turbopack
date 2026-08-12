{
  "use strict";

  var _v3 = _v0.r(0)(),
    _v4 = _v0.r(0)("Object.prototype.toString"),
    _v5 = function (_v0) {
      return (!_v3 || !_v0 || "object" != typeof _v0 || !(Symbol.toStringTag in _v0)) && "[object Arguments]" === _v4(_v0);
    },
    _v6 = function (_v0) {
      return !!_v5(_v0) || null !== _v0 && "object" == typeof _v0 && "length" in _v0 && "number" == typeof _v0.length && _v0.length >= 0 && "[object Array]" !== _v4(_v0) && "callee" in _v0 && "[object Function]" === _v4(_v0.callee);
    },
    _v7 = function () {
      return _v5(arguments);
    }();
  _v5.isLegacyArguments = _v6, _v1.exports = _v7 ? _v5 : _v6;
}