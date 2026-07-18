{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.TLRUCache = void 0;
  let _v3 = _v0.r(0);
  class _v4 extends _v3.LRUCache {
    constructor(_v0, _v1) {
      super(_v0), this.maxSize = _v0, this.ttl = _v1, this.cacheEntriesTTLRegistry = new Map();
    }
    getCacheEntryEvictionTime() {
      return new Date(Date.now() + this.ttl);
    }
    clearCacheEntryEvictionTimeIfExists(_v0) {
      this.cacheEntriesTTLRegistry.has(_v0) && this.cacheEntriesTTLRegistry.delete(_v0);
    }
    isCacheEntryValid(_v0) {
      let _v1 = new Date(Date.now()),
        _v2 = this.cacheEntriesTTLRegistry.get(_v0);
      return void 0 !== _v2 && _v1 < _v2;
    }
    setCacheEntryEvictionTime(_v0) {
      this.cacheEntriesTTLRegistry.set(_v0, this.getCacheEntryEvictionTime());
    }
    resetCacheEntryEvictionTime(_v0) {
      this.clearCacheEntryEvictionTimeIfExists(_v0), this.setCacheEntryEvictionTime(_v0);
    }
    evictExpiredCacheEntries() {
      let _v0;
      for (_v0 of this.cache.keys()) if (this.isCacheEntryValid(_v0)) break;else this.delete(_v0);
    }
    entries() {
      return this.evictExpiredCacheEntries(), super.entries();
    }
    keys() {
      return this.evictExpiredCacheEntries(), super.keys();
    }
    values() {
      return this.evictExpiredCacheEntries(), super.values();
    }
    delete(_v0) {
      return this.clearCacheEntryEvictionTimeIfExists(_v0), super.delete(_v0);
    }
    has(_v0) {
      return this.isCacheEntryValid(_v0) ? this.cache.has(_v0) : (this.delete(_v0), !1);
    }
    get(_v0) {
      if (!this.isCacheEntryValid(_v0)) return void this.delete(_v0);
      let _v1 = super.get(_v0);
      return void 0 !== _v1 && this.resetCacheEntryEvictionTime(_v0), _v1;
    }
    set(_v0, _v1) {
      let _v2 = super.set(_v0, _v1);
      return this.resetCacheEntryEvictionTime(_v0), _v2;
    }
  }
  _v2.TLRUCache = _v4;
}