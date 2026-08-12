{
  "use strict";

  var _v3 = "function" == typeof Symbol && Symbol.for,
    _v4 = _v3 ? Symbol.for("react.element") : 0,
    _v5 = _v3 ? Symbol.for("react.portal") : 0,
    _v6 = _v3 ? Symbol.for("react.fragment") : 0,
    _v7 = _v3 ? Symbol.for("react.strict_mode") : 0,
    _v8 = _v3 ? Symbol.for("react.profiler") : 0,
    _v9 = _v3 ? Symbol.for("react.provider") : 0,
    _v10 = _v3 ? Symbol.for("react.context") : 0,
    _v11 = _v3 ? Symbol.for("react.async_mode") : 0,
    _v12 = _v3 ? Symbol.for("react.concurrent_mode") : 0,
    _v13 = _v3 ? Symbol.for("react.forward_ref") : 0,
    _v14 = _v3 ? Symbol.for("react.suspense") : 0,
    _v15 = _v3 ? Symbol.for("react.suspense_list") : 0,
    _v16 = _v3 ? Symbol.for("react.memo") : 0,
    _v17 = _v3 ? Symbol.for("react.lazy") : 0,
    _v18 = _v3 ? Symbol.for("react.block") : 0,
    _v19 = _v3 ? Symbol.for("react.fundamental") : 0,
    _v20 = _v3 ? Symbol.for("react.responder") : 0,
    _v21 = _v3 ? Symbol.for("react.scope") : 0;
  function _v22(_v0) {
    if ("object" == typeof _v0 && null !== _v0) {
      var _v1 = _v0.$$typeof;
      switch (_v1) {
        case _v4:
          switch (_v0 = _v0.type) {
            case _v11:
            case _v12:
            case _v6:
            case _v8:
            case _v7:
            case _v14:
              return _v0;
            default:
              switch (_v0 = _v0 && _v0.$$typeof) {
                case _v10:
                case _v13:
                case _v17:
                case _v16:
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
  function _v23(_v0) {
    return _v22(_v0) === _v12;
  }
  _v2.AsyncMode = _v11, _v2.ConcurrentMode = _v12, _v2.ContextConsumer = _v10, _v2.ContextProvider = _v9, _v2.Element = _v4, _v2.ForwardRef = _v13, _v2.Fragment = _v6, _v2.Lazy = _v17, _v2.Memo = _v16, _v2.Portal = _v5, _v2.Profiler = _v8, _v2.StrictMode = _v7, _v2.Suspense = _v14, _v2.isAsyncMode = function (_v0) {
    return _v23(_v0) || _v22(_v0) === _v11;
  }, _v2.isConcurrentMode = _v23, _v2.isContextConsumer = function (_v0) {
    return _v22(_v0) === _v10;
  }, _v2.isContextProvider = function (_v0) {
    return _v22(_v0) === _v9;
  }, _v2.isElement = function (_v0) {
    return "object" == typeof _v0 && null !== _v0 && _v0.$$typeof === _v4;
  }, _v2.isForwardRef = function (_v0) {
    return _v22(_v0) === _v13;
  }, _v2.isFragment = function (_v0) {
    return _v22(_v0) === _v6;
  }, _v2.isLazy = function (_v0) {
    return _v22(_v0) === _v17;
  }, _v2.isMemo = function (_v0) {
    return _v22(_v0) === _v16;
  }, _v2.isPortal = function (_v0) {
    return _v22(_v0) === _v5;
  }, _v2.isProfiler = function (_v0) {
    return _v22(_v0) === _v8;
  }, _v2.isStrictMode = function (_v0) {
    return _v22(_v0) === _v7;
  }, _v2.isSuspense = function (_v0) {
    return _v22(_v0) === _v14;
  }, _v2.isValidElementType = function (_v0) {
    return "string" == typeof _v0 || "function" == typeof _v0 || _v0 === _v6 || _v0 === _v12 || _v0 === _v8 || _v0 === _v7 || _v0 === _v14 || _v0 === _v15 || "object" == typeof _v0 && null !== _v0 && (_v0.$$typeof === _v17 || _v0.$$typeof === _v16 || _v0.$$typeof === _v9 || _v0.$$typeof === _v10 || _v0.$$typeof === _v13 || _v0.$$typeof === _v19 || _v0.$$typeof === _v20 || _v0.$$typeof === _v21 || _v0.$$typeof === _v18);
  }, _v2.typeOf = _v22;
}