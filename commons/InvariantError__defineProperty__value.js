{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "InvariantError", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
  class _v3 extends Error {
    constructor(_v0, _v1) {
      super(`Invariant: ${_v0.endsWith(".") ? _v0 : _v0 + "."} This is a bug in Next.js.`, _v1), this.name = "InvariantError";
    }
  }
}