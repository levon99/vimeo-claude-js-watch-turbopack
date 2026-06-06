{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.default = class {
    constructor(_v0) {
      this.storage = new _v4.default(_v0);
    }
    set(_v0) {
      this.storage.set((0, _v3.assignmentCacheKeyToString)(_v0), (0, _v3.assignmentCacheValueToString)(_v0));
    }
    has(_v0) {
      throw Error("This should never be called for ChromeStorageAssignmentCache, use getEntries() instead.");
    }
    async getEntries() {
      return Object.entries(await this.storage.entries()).map(([_v0, _v1]) => [_v0, _v1]);
    }
  };
}