{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.HybridConfigurationStore = void 0;
  let _v3 = _v0.r(0);
  _v2.HybridConfigurationStore = class {
    constructor(_v0, _v1) {
      this.servingStore = _v0, this.persistentStore = _v1, this.environment = null, this.configFetchedAt = null, this.configPublishedAt = null, this.format = null;
    }
    async init() {
      if (!this.persistentStore) return;
      this.persistentStore.isInitialized() || _v3.logger.warn(`${_v3.loggerPrefix} Persistent store is not initialized from remote configuration. Serving assignments that may be stale.`);
      let _v0 = await this.persistentStore.entries();
      this.servingStore.setEntries(_v0);
    }
    isInitialized() {
      return this.servingStore.isInitialized() && (this.persistentStore?.isInitialized() ?? !0);
    }
    async isExpired() {
      return (await this.persistentStore?.isExpired()) ?? !0;
    }
    get(_v0) {
      return this.servingStore.isInitialized() || _v3.logger.warn(`${_v3.loggerPrefix} getting a value from a ServingStore that is not initialized.`), this.servingStore.get(_v0);
    }
    entries() {
      return this.servingStore.entries();
    }
    getKeys() {
      return this.servingStore.getKeys();
    }
    async setEntries(_v0) {
      return this.persistentStore && (await this.persistentStore.setEntries(_v0)), this.servingStore.setEntries(_v0), !0;
    }
    setEnvironment(_v0) {
      this.environment = _v0;
    }
    getEnvironment() {
      return this.environment;
    }
    getConfigFetchedAt() {
      return this.configFetchedAt;
    }
    setConfigFetchedAt(_v0) {
      this.configFetchedAt = _v0;
    }
    getConfigPublishedAt() {
      return this.configPublishedAt;
    }
    setConfigPublishedAt(_v0) {
      this.configPublishedAt = _v0;
    }
    getFormat() {
      return this.format;
    }
    setFormat(_v0) {
      this.format = _v0;
    }
  };
}