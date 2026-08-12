{
  "use strict";

  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  try {
    _v3 = [].__proto__ === Array.prototype;
  } catch (_v0) {
    if (!_v0 || "object" != typeof _v0 || !("code" in _v0) || "ERR_PROTO_ACCESS" !== _v0.code) throw _v0;
  }
  var _v6 = !!_v3 && _v5 && _v5(Object.prototype, "__proto__"),
    _v7 = Object,
    _v8 = _v7.getPrototypeOf;
  _v1.exports = _v6 && "function" == typeof _v6.get ? _v4([_v6.get]) : "function" == typeof _v8 && function (_v0) {
    return _v8(null == _v0 ? _v0 : _v7(_v0));
  };
}