{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = class {
    constructor(_v0, _v1) {
      this.servingStore = _v0, this.persistentStore = _v1;
    }
    async init() {
      let _v0 = await this.persistentStore.getEntries();
      _v0 && this.servingStore.setEntries(_v0);
    }
    set(_v0) {
      this.servingStore.set(_v0), this.persistentStore.set(_v0);
    }
    has(_v0) {
      return this.servingStore.has(_v0);
    }
  };
}