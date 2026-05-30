{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0)(/^\s*(?:function)?\*/),
    _v5 = _v0.r(0)(),
    _v6 = _v0.r(0),
    _v7 = _v3("Object.prototype.toString"),
    _v8 = _v3("Function.prototype.toString"),
    _v9 = _v0.r(0);
  _v1.exports = function (_v0) {
    if ("function" != typeof _v0) return !1;
    if (_v4(_v8(_v0))) return !0;
    if (!_v5) return "[object GeneratorFunction]" === _v7(_v0);
    if (!_v6) return !1;
    var _v1 = _v9();
    return _v1 && _v6(_v0) === _v1.prototype;
  };
}