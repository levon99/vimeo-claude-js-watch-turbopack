{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.DeterministicSharder = _v2.MD5Sharder = _v2.Sharder = void 0;
  let _v3 = _v0.r(0);
  class _v4 {}
  _v2.Sharder = _v4, _v2.MD5Sharder = class extends _v4 {
    getShard(_v0, _v1) {
      return parseInt((0, _v3.getMD5Hash)(_v0).slice(0, 8), 16) % _v1;
    }
  }, _v2.DeterministicSharder = class extends _v4 {
    constructor(_v0) {
      super(), this.lookup = _v0;
    }
    getShard(_v0, _v1) {
      return this.lookup[_v0] ?? 0;
    }
  };
}