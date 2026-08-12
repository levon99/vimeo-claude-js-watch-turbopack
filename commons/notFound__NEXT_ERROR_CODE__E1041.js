{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "notFound", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = `${_v3.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
  function _v5() {
    let _v0 = Object.defineProperty(Error(_v4), "__NEXT_ERROR_CODE", {
      value: "E1041",
      enumerable: !1,
      configurable: !0
    });
    throw _v0.digest = _v4, _v0;
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}