{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.AbstractAssignmentCache = void 0, _v2.assignmentCacheKeyToString = _v4, _v2.assignmentCacheValueToString = _v5;
  let _v3 = _v0.r(0);
  function _v4({
    subjectKey: _v0,
    flagKey: _v1
  }) {
    return (0, _v3.getMD5Hash)([_v0, _v1].join(";"));
  }
  function _v5(_v0) {
    return (0, _v3.getMD5Hash)(Object.values(_v0).join(";"));
  }
  _v2.AbstractAssignmentCache = class {
    constructor(_v0) {
      this.delegate = _v0;
    }
    has(_v0) {
      return this.get(_v0) === _v5(_v0);
    }
    get(_v0) {
      return this.delegate.get(_v4(_v0));
    }
    set(_v0) {
      this.delegate.set(_v4(_v0), _v5(_v0));
    }
    entries() {
      return this.delegate.entries();
    }
  };
}