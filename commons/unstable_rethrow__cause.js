{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "unstable_rethrow", {
    enumerable: !0,
    get: function () {
      return function _v0(_v1) {
        if ((0, _v4.isNextRouterError)(_v1) || (0, _v3.isBailoutToCSRError)(_v1)) throw _v1;
        _v1 instanceof Error && "cause" in _v1 && _v0(_v1.cause);
      };
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}