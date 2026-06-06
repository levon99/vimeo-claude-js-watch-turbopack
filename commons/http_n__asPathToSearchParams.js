{
  "use strict";

  function _v3(_v0) {
    return new URL(_v0, "http://n").searchParams;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "asPathToSearchParams", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}