{
  "use strict";

  _v1.exports = function () {
    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
    if ("symbol" == typeof Symbol.iterator) return !0;
    var _v0 = {},
      _v1 = Symbol("test"),
      _v2 = Object(_v1);
    if ("string" == typeof _v1 || "[object Symbol]" !== Object.prototype.toString.call(_v1) || "[object Symbol]" !== Object.prototype.toString.call(_v2)) return !1;
    for (var _v3 in _v0[_v1] = 42, _v0) return !1;
    if ("function" == typeof Object.keys && 0 !== Object.keys(_v0).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(_v0).length) return !1;
    var _v4 = Object.getOwnPropertySymbols(_v0);
    if (1 !== _v4.length || _v4[0] !== _v1 || !Object.prototype.propertyIsEnumerable.call(_v0, _v1)) return !1;
    if ("function" == typeof Object.getOwnPropertyDescriptor) {
      var _v5 = Object.getOwnPropertyDescriptor(_v0, _v1);
      if (42 !== _v5.value || !0 !== _v5.enumerable) return !1;
    }
    return !0;
  };
}