{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = class {
    constructor() {
      this.store = new Map(), this.cache = new _v3.NonExpiringInMemoryAssignmentCache(this.store);
    }
    set(_v0) {
      this.cache.set(_v0);
    }
    has(_v0) {
      return this.cache.has(_v0);
    }
    setEntries(_v0) {
      let {
        store: _v1
      } = this;
      _v0.forEach(([_v0, _v1]) => _v1.set(_v0, _v1));
    }
    getEntries() {
      return Promise.resolve(Array.from(this.cache.entries()));
    }
  };
}