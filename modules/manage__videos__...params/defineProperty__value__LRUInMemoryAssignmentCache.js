{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.LRUInMemoryAssignmentCache = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  class _v5 extends _v3.AbstractAssignmentCache {
    constructor(_v0) {
      super(new _v4.LRUCache(_v0));
    }
  }
  _v2.LRUInMemoryAssignmentCache = _v5;
}