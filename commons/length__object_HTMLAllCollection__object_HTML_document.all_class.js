{
  "use strict";

  var _v3,
    _v4,
    _v5 = Function.prototype.toString,
    _v6 = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
  if ("function" == typeof _v6 && "function" == typeof Object.defineProperty) try {
    _v3 = Object.defineProperty({}, "length", {
      get: function () {
        throw _v4;
      }
    }), _v4 = {}, _v6(function () {
      throw 42;
    }, null, _v3);
  } catch (_v0) {
    _v0 !== _v4 && (_v6 = null);
  } else _v6 = null;
  var _v7 = /^\s*class\b/,
    _v8 = function (_v0) {
      try {
        var _v1 = _v5.call(_v0);
        return _v7.test(_v1);
      } catch (_v0) {
        return !1;
      }
    },
    _v9 = function (_v0) {
      try {
        if (_v8(_v0)) return !1;
        return _v5.call(_v0), !0;
      } catch (_v0) {
        return !1;
      }
    },
    _v10 = Object.prototype.toString,
    _v11 = "function" == typeof Symbol && !!Symbol.toStringTag,
    _v12 = !(0 in [,]),
    _v13 = function () {
      return !1;
    };
  if ("object" == typeof document) {
    var _v14 = document.all;
    _v10.call(_v14) === _v10.call(document.all) && (_v13 = function (_v0) {
      if ((_v12 || !_v0) && (void 0 === _v0 || "object" == typeof _v0)) try {
        var _v1 = _v10.call(_v0);
        return ("[object HTMLAllCollection]" === _v1 || "[object HTML document.all class]" === _v1 || "[object HTMLCollection]" === _v1 || "[object Object]" === _v1) && null == _v0("");
      } catch (_v0) {}
      return !1;
    });
  }
  _v1.exports = _v6 ? function (_v0) {
    if (_v13(_v0)) return !0;
    if (!_v0 || "function" != typeof _v0 && "object" != typeof _v0) return !1;
    try {
      _v6(_v0, null, _v3);
    } catch (_v0) {
      if (_v0 !== _v4) return !1;
    }
    return !_v8(_v0) && _v9(_v0);
  } : function (_v0) {
    if (_v13(_v0)) return !0;
    if (!_v0 || "function" != typeof _v0 && "object" != typeof _v0) return !1;
    if (_v11) return _v9(_v0);
    if (_v8(_v0)) return !1;
    var _v1 = _v10.call(_v0);
    return ("[object Function]" === _v1 || "[object GeneratorFunction]" === _v1 || !!/^\[object HTML/.test(_v1)) && _v9(_v0);
  };
}