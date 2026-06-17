{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.StringValuedAsyncStore = _v2.LocalStorageUnknownFailure = _v2.StorageFullUnableToWrite = void 0, _v2.StorageFullUnableToWrite = class extends Error {
    constructor(_v0 = "Storage is full and unable to write.") {
      super(_v0), this.name = "StorageFullUnableToWrite";
    }
  }, _v2.LocalStorageUnknownFailure = class extends Error {
    constructor(_v0 = "Local storage operation failed for unknown reason.", _v1) {
      super(_v0), this.originalError = _v1, this.name = "LocalStorageUnknownFailure";
    }
  }, _v2.StringValuedAsyncStore = class {
    constructor(_v0, _v1 = 0) {
      this.storageEngine = _v0, this.cooldownSeconds = _v1, this.initialized = !1;
    }
    isInitialized() {
      return this.initialized;
    }
    async isExpired() {
      if (!this.cooldownSeconds) return !0;
      let _v0 = await this.storageEngine.getMetaJsonString(),
        _v1 = !0;
      if (_v0) {
        let _v0 = JSON.parse(_v0).lastUpdatedAtMs;
        _v1 = !_v0 || Date.now() - _v0 > 0 * this.cooldownSeconds;
      }
      return _v1;
    }
    async entries() {
      let _v0 = await this.storageEngine.getContentsJsonString();
      return _v0 ? JSON.parse(_v0) : {};
    }
    async setEntries(_v0) {
      await this.storageEngine.setContentsJsonString(JSON.stringify(_v0));
      let _v1 = {
        lastUpdatedAtMs: new Date().getTime()
      };
      await this.storageEngine.setMetaJsonString(JSON.stringify(_v1)), this.initialized = !0;
    }
  };
}