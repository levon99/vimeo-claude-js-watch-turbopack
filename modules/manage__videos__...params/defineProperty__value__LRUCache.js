{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.LRUCache = void 0;
  class _v3 {
    constructor(_v0) {
      this.capacity = _v0, this.cache = new Map(), this.size = this.cache.size;
    }
    [(Symbol.toStringTag, Symbol.iterator)]() {
      return this.cache[Symbol.iterator]();
    }
    forEach(_v0, _v1) {
      this.cache.forEach(_v0, _v1);
    }
    entries() {
      return this.cache.entries();
    }
    clear() {
      this.cache.clear();
    }
    delete(_v0) {
      return this.cache.delete(_v0);
    }
    keys() {
      return this.cache.keys();
    }
    values() {
      return this.cache.values();
    }
    has(_v0) {
      return this.cache.has(_v0);
    }
    get(_v0) {
      if (!this.has(_v0)) return;
      let _v1 = this.cache.get(_v0);
      return void 0 !== _v1 && (this.delete(_v0), this.cache.set(_v0, _v1)), _v1;
    }
    set(_v0, _v1) {
      if (0 === this.capacity) return this;
      if (this.cache.has(_v0)) this.cache.delete(_v0);else if (this.cache.size >= this.capacity) {
        let _v0 = this.cache.keys().next().value;
        _v0 && this.delete(_v0);
      }
      return this.cache.set(_v0, _v1), this;
    }
  }
  _v2.LRUCache = _v3;
}