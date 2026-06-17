{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.TLRUInMemoryAssignmentCache = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  class _v6 extends _v4.AbstractAssignmentCache {
    constructor(_v0, _v1 = _v3.DEFAULT_TLRU_TTL_MS) {
      super(new _v5.TLRUCache(_v0, _v1));
    }
  }
  _v2.TLRUInMemoryAssignmentCache = _v6;
}