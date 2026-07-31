{
  "use strict";

  function _v1(_v0) {
    return "[object Date]" === Object.prototype.toString.call(_v0);
  }
  function _v2() {
    return !window.document;
  }
  _v0.s(["isClientNonProduction", 0, function () {
    if (_v2()) return !1;
    let _v0 = window.location?.hostname ?? "";
    return "vimeo.dev" === _v0 || "localhost" === _v0 || _v0.endsWith(".vimeows.com");
  }, "isDate", 0, _v1, "isRecord", 0, function (_v0) {
    return "object" == typeof _v0 && !Array.isArray(_v0) && !_v1(_v0) && "[object RegExp]" !== Object.prototype.toString.call(_v0) && null !== _v0;
  }, "isSSR", 0, _v2]);
}