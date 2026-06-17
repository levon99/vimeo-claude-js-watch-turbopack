{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.LocalStorageAssignmentCache = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  class _v5 extends _v3.AbstractAssignmentCache {
    constructor(_v0) {
      super(new _v4.LocalStorageAssignmentShim(_v0));
    }
    setEntries(_v0) {
      _v0.forEach(([_v0, _v1]) => {
        _v0 && _v1 && this.delegate.set(_v0, _v1);
      });
    }
    getEntries() {
      return Promise.resolve(Array.from(this.entries()));
    }
  }
  _v2.LocalStorageAssignmentCache = _v5;
}