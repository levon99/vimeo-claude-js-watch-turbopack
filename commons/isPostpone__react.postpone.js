{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "isPostpone", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = Symbol.for("react.postpone");
  function _v4(_v0) {
    return "object" == typeof _v0 && null !== _v0 && _v0.$$typeof === _v3;
  }
}