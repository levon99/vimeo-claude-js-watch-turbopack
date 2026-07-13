{
  "use strict";

  function _v3(_v0) {
    return (_v3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.isPromise = function (_v0) {
    return !!_v0 && ("object" === _v3(_v0) || "function" == typeof _v0) && "function" == typeof _v0.then;
  }, _v2.isArray = function (_v0) {
    return Array.isArray(_v0);
  }, _v2.isObject = function (_v0) {
    return "object" === _v3(_v0) && !Array.isArray(_v0);
  };
}