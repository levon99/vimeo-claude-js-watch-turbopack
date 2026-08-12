{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = Object.prototype,
    _v7 = Function.prototype.toString,
    _v8 = _v6.hasOwnProperty,
    _v9 = _v7.call(Object);
  _v1.exports = function (_v0) {
    if (!_v5(_v0) || "[object Object]" != _v3(_v0)) return !1;
    var _v1 = _v4(_v0);
    if (null === _v1) return !0;
    var _v2 = _v8.call(_v1, "constructor") && _v1.constructor;
    return "function" == typeof _v2 && _v2 instanceof _v2 && _v7.call(_v2) == _v9;
  };
}