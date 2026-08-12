{
  "use strict";

  var _v3,
    _v4 = Symbol.for("react.element"),
    _v5 = Symbol.for("react.portal"),
    _v6 = Symbol.for("react.fragment"),
    _v7 = Symbol.for("react.strict_mode"),
    _v8 = Symbol.for("react.profiler"),
    _v9 = Symbol.for("react.provider"),
    _v10 = Symbol.for("react.context"),
    _v11 = Symbol.for("react.server_context"),
    _v12 = Symbol.for("react.forward_ref"),
    _v13 = Symbol.for("react.suspense"),
    _v14 = Symbol.for("react.suspense_list"),
    _v15 = Symbol.for("react.memo"),
    _v16 = Symbol.for("react.lazy"),
    _v17 = Symbol.for("react.offscreen");
  function _v18(_v0) {
    if ("object" == typeof _v0 && null !== _v0) {
      var _v1 = _v0.$$typeof;
      switch (_v1) {
        case _v4:
          switch (_v0 = _v0.type) {
            case _v6:
            case _v8:
            case _v7:
            case _v13:
            case _v14:
              return _v0;
            default:
              switch (_v0 = _v0 && _v0.$$typeof) {
                case _v11:
                case _v10:
                case _v12:
                case _v16:
                case _v15:
                case _v9:
                  return _v0;
                default:
                  return _v1;
              }
          }
        case _v5:
          return _v1;
      }
    }
  }
  _v3 = Symbol.for("react.module.reference"), _v2.ContextConsumer = _v10, _v2.ContextProvider = _v9, _v2.Element = _v4, _v2.ForwardRef = _v12, _v2.Fragment = _v6, _v2.Lazy = _v16, _v2.Memo = _v15, _v2.Portal = _v5, _v2.Profiler = _v8, _v2.StrictMode = _v7, _v2.Suspense = _v13, _v2.SuspenseList = _v14, _v2.isAsyncMode = function () {
    return !1;
  }, _v2.isConcurrentMode = function () {
    return !1;
  }, _v2.isContextConsumer = function (_v0) {
    return _v18(_v0) === _v10;
  }, _v2.isContextProvider = function (_v0) {
    return _v18(_v0) === _v9;
  }, _v2.isElement = function (_v0) {
    return "object" == typeof _v0 && null !== _v0 && _v0.$$typeof === _v4;
  }, _v2.isForwardRef = function (_v0) {
    return _v18(_v0) === _v12;
  }, _v2.isFragment = function (_v0) {
    return _v18(_v0) === _v6;
  }, _v2.isLazy = function (_v0) {
    return _v18(_v0) === _v16;
  }, _v2.isMemo = function (_v0) {
    return _v18(_v0) === _v15;
  }, _v2.isPortal = function (_v0) {
    return _v18(_v0) === _v5;
  }, _v2.isProfiler = function (_v0) {
    return _v18(_v0) === _v8;
  }, _v2.isStrictMode = function (_v0) {
    return _v18(_v0) === _v7;
  }, _v2.isSuspense = function (_v0) {
    return _v18(_v0) === _v13;
  }, _v2.isSuspenseList = function (_v0) {
    return _v18(_v0) === _v14;
  }, _v2.isValidElementType = function (_v0) {
    return "string" == typeof _v0 || "function" == typeof _v0 || _v0 === _v6 || _v0 === _v8 || _v0 === _v7 || _v0 === _v13 || _v0 === _v14 || _v0 === _v17 || "object" == typeof _v0 && null !== _v0 && (_v0.$$typeof === _v16 || _v0.$$typeof === _v15 || _v0.$$typeof === _v9 || _v0.$$typeof === _v10 || _v0.$$typeof === _v12 || _v0.$$typeof === _v3 || void 0 !== _v0.getModuleId) || !1;
  }, _v2.typeOf = _v18;
}