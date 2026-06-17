{
  "use strict";

  var _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.LocalStorageAssignmentShim = void 0;
  let _v4 = _v0.r(0);
  class _v5 {
    constructor(_v0) {
      if (this.size = this.getCache().size, this[_v3] = this.getCache()[Symbol.toStringTag], !(0, _v4.hasWindowLocalStorage)()) throw Error("LocalStorage is not available");
      const _v1 = _v0 ? `-${_v0}` : "";
      this.localStorageKey = `eppo-assignment${_v1}`;
    }
    clear() {
      this.getCache().clear();
    }
    delete(_v0) {
      return this.getCache().delete(_v0);
    }
    forEach(_v0, _v1) {
      this.getCache().forEach(_v0, _v1);
    }
    entries() {
      return this.getCache().entries();
    }
    keys() {
      return this.getCache().keys();
    }
    values() {
      return this.getCache().values();
    }
    [Symbol.iterator]() {
      return this.getCache()[Symbol.iterator]();
    }
    has(_v0) {
      return this.getCache().has(_v0);
    }
    get(_v0) {
      var _v1;
      return null != (_v1 = this.getCache().get(_v0)) ? _v1 : void 0;
    }
    set(_v0, _v1) {
      return this.setCache(this.getCache().set(_v0, _v1));
    }
    getCache() {
      let _v0 = window.localStorage.getItem(this.localStorageKey);
      return _v0 ? new Map(JSON.parse(_v0)) : new Map();
    }
    setCache(_v0) {
      return window.localStorage.setItem(this.localStorageKey, JSON.stringify(Array.from(_v0.entries()))), this;
    }
  }
  _v2.LocalStorageAssignmentShim = _v5, _v3 = Symbol.toStringTag;
}