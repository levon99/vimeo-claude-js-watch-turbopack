{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.MemoryOnlyConfigurationStore = _v2.MemoryStore = void 0;
  class _v3 {
    constructor() {
      this.store = {}, this.initialized = !1;
    }
    get(_v0) {
      return this.store[_v0] ?? null;
    }
    entries() {
      return this.store;
    }
    getKeys() {
      return Object.keys(this.store);
    }
    isInitialized() {
      return this.initialized;
    }
    setEntries(_v0) {
      this.store = {
        ..._v0
      }, this.initialized = !0;
    }
  }
  _v2.MemoryStore = _v3, _v2.MemoryOnlyConfigurationStore = class {
    constructor() {
      this.servingStore = new _v3(), this.initialized = !1, this.configFetchedAt = null, this.configPublishedAt = null, this.environment = null, this.format = null;
    }
    init() {
      return this.initialized = !0, Promise.resolve();
    }
    get(_v0) {
      return this.servingStore.get(_v0);
    }
    entries() {
      return this.servingStore.entries();
    }
    getKeys() {
      return this.servingStore.getKeys();
    }
    async isExpired() {
      return !0;
    }
    isInitialized() {
      return this.initialized;
    }
    async setEntries(_v0) {
      return this.servingStore.setEntries(_v0), this.initialized = !0, !0;
    }
    getEnvironment() {
      return this.environment;
    }
    setEnvironment(_v0) {
      this.environment = _v0;
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