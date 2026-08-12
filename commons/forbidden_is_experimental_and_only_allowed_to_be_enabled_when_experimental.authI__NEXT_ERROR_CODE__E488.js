{
  "use strict";

  function _v3() {
    throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
      value: "E488",
      enumerable: !1,
      configurable: !0
    });
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "forbidden", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  }), _v0.r(0).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}