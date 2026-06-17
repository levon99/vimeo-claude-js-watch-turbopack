{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = class {
    constructor(_v0) {
      this.storage = _v0;
    }
    async has(_v0) {
      return !!(await this.get(_v0));
    }
    async get(_v0) {
      var _v1;
      let _v2 = await this.storage.get(_v0);
      return null != (_v1 = null == _v2 ? void 0 : _v2[_v0]) ? _v1 : void 0;
    }
    async entries() {
      return await this.storage.get(null);
    }
    async set(_v0, _v1) {
      await this.storage.set({
        [_v0]: _v1
      });
    }
  };
}