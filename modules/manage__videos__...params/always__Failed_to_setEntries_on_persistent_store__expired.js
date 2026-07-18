{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.IsolatableHybridConfigurationStore = void 0;
  let _v3 = _v0.r(0);
  class _v4 extends _v3.HybridConfigurationStore {
    constructor(_v0, _v1, _v2 = "always") {
      super(_v0, _v1), this.servingStoreUpdateStrategy = _v2;
    }
    async setEntries(_v0) {
      var _v1;
      if (this.persistentStore) try {
        await this.persistentStore.setEntries(_v0);
      } catch (_v0) {
        _v3.applicationLogger.warn({
          err: _v0
        }, "Failed to setEntries on persistent store");
      }
      let _v2 = !this.persistentStore || (await this.persistentStore.isExpired()),
        _v3 = !(null == (_v1 = this.servingStore.getKeys()) ? void 0 : _v1.length),
        _v4 = "always" === this.servingStoreUpdateStrategy || _v2 && "expired" === this.servingStoreUpdateStrategy || _v2 && _v3;
      return _v4 && this.servingStore.setEntries(_v0), _v4;
    }
  }
  _v2.IsolatableHybridConfigurationStore = _v4;
}