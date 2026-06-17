{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.LocalStorageEngine = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  class _v6 {
    constructor(_v0, _v1) {
      this.localStorage = _v0, this.getContentsJsonString = async () => {
        let _v0 = this.localStorage.getItem(this.contentsKey);
        if (!_v0) return null;
        try {
          return _v3.decompressFromBase64(_v0) || null;
        } catch (_v0) {
          return this.localStorage.removeItem(this.contentsKey), null;
        }
      }, this.getMetaJsonString = async () => this.localStorage.getItem(this.metaKey), this.setContentsJsonString = async _v0 => {
        let _v1 = _v3.compressToBase64(_v0);
        this.safeWrite(this.contentsKey, _v1);
      }, this.setMetaJsonString = async _v0 => {
        this.safeWrite(this.metaKey, _v0);
      };
      const _v2 = _v1 ? `-${_v1}` : "";
      this.contentsKey = _v4.CONFIGURATION_KEY + _v2, this.metaKey = _v4.META_KEY + _v2, this.ensureCompressionMigration();
    }
    safeWrite(_v0, _v1) {
      try {
        this.localStorage.setItem(_v0, _v1);
      } catch (_v0) {
        if (_v0 instanceof DOMException && (_v0.code === DOMException.QUOTA_EXCEEDED_ERR || "QuotaExceededError" === _v0.name)) try {
          this.clear(), this.localStorage.setItem(_v0, _v1);
          return;
        } catch (_v0) {
          throw new _v5.StorageFullUnableToWrite();
        }
        let _v1 = _v0 instanceof Error ? _v0.message : String(_v0);
        throw new _v5.LocalStorageUnknownFailure(`Failed to write to localStorage: ${_v1}`, (_v0 instanceof Error, _v0));
      }
    }
    ensureCompressionMigration() {
      if (!(this.getGlobalMeta().version >= _v6.MIGRATION_VERSION)) try {
        this.clear(), this.setGlobalMeta({
          migratedAt: Date.now(),
          version: _v6.MIGRATION_VERSION
        });
      } catch (_v0) {}
    }
    getGlobalMeta() {
      try {
        let _v0 = this.localStorage.getItem(_v6.GLOBAL_META_KEY);
        if (_v0) return JSON.parse(_v0);
      } catch (_v0) {}
      return {
        version: 0
      };
    }
    setGlobalMeta(_v0) {
      this.localStorage.setItem(_v6.GLOBAL_META_KEY, JSON.stringify(_v0));
    }
    clear() {
      let _v0 = [];
      for (let _v0 = 0; _v0 < this.localStorage.length; _v0++) {
        let _v0 = this.localStorage.key(_v0);
        (null == _v0 ? void 0 : _v0.startsWith(_v4.CONFIGURATION_KEY)) && _v0.push(_v0);
      }
      _v0.forEach(_v0 => {
        this.localStorage.removeItem(_v0);
      });
    }
  }
  _v2.LocalStorageEngine = _v6, _v6.GLOBAL_META_KEY = "eppo-meta", _v6.MIGRATION_VERSION = 1;
}