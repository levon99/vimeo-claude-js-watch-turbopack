{
  "use strict";

  function _v1(_v0) {
    return "[object Date]" === Object.prototype.toString.call(_v0);
  }
  _v0.s(["isDate", 0, _v1, "isRecord", 0, function (_v0) {
    return "object" == typeof _v0 && !Array.isArray(_v0) && !_v1(_v0) && "[object RegExp]" !== Object.prototype.toString.call(_v0) && null !== _v0;
  }, "isSSR", 0, function () {
    return !window.document;
  }]);
}