{
  "use strict";

  function _v1(_v0) {
    return (_v1 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  var _v2 = _v0.i(0);
  function _v3(_v0, _v1, _v2) {
    return (_v3 = !function () {
      if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (_v0) {
        return !1;
      }
    }() ? function (_v0, _v1, _v2) {
      var _v3 = [null];
      _v3.push.apply(_v3, _v1);
      var _v4 = new (Function.bind.apply(_v0, _v3))();
      return _v2 && (0, _v2.default)(_v4, _v2.prototype), _v4;
    } : Reflect.construct).apply(null, arguments);
  }
  function _v4(_v0) {
    var _v1 = "function" == typeof Map ? new Map() : void 0;
    return (_v4 = function (_v0) {
      if (null === _v0 || -1 === Function.toString.call(_v0).indexOf("[native code]")) return _v0;
      if ("function" != typeof _v0) throw TypeError("Super expression must either be null or a function");
      if (void 0 !== _v1) {
        if (_v1.has(_v0)) return _v1.get(_v0);
        _v1.set(_v0, _v1);
      }
      function _v1() {
        return _v3(_v0, arguments, _v1(this).constructor);
      }
      return _v1.prototype = Object.create(_v0.prototype, {
        constructor: {
          value: _v1,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), (0, _v2.default)(_v1, _v0);
    })(_v0);
  }
  _v0.s(["default", () => _v4], 0), _v0.s(["default", 0, function (_v0, _v1) {
    return _v1 || (_v1 = _v0.slice(0)), _v0.raw = _v1, _v0;
  }], 0);
}