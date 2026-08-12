{
  "use strict";

  function _v3(_v0) {
    switch (_v0) {
      case "catchall-intercepted-(..)(..)":
      case "dynamic-intercepted-(..)(..)":
        return "(..)(..)";
      case "catchall-intercepted-(.)":
      case "dynamic-intercepted-(.)":
        return "(.)";
      case "catchall-intercepted-(..)":
      case "dynamic-intercepted-(..)":
        return "(..)";
      case "catchall-intercepted-(...)":
      case "dynamic-intercepted-(...)":
        return "(...)";
      default:
        return null;
    }
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "interceptionPrefixFromParamType", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}