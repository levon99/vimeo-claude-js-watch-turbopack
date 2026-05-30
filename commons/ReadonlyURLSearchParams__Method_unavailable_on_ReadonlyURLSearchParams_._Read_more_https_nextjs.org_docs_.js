{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "ReadonlyURLSearchParams", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  class _v3 extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
    }
  }
  class _v4 extends URLSearchParams {
    append() {
      throw new _v3();
    }
    delete() {
      throw new _v3();
    }
    set() {
      throw new _v3();
    }
    sort() {
      throw new _v3();
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}