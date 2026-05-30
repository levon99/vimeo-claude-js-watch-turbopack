{
  "use strict";

  class _v1 {
    static instance;
    storage = new Map();
    static getInstance() {
      return _v1.instance || (_v1.instance = new _v1()), _v1.instance;
    }
    get length() {
      return this.storage.size;
    }
    clear() {
      this.storage.clear();
    }
    getItem(_v0) {
      return this.storage.get(_v0) ?? null;
    }
    key(_v0) {
      let _v1 = Array.from(this.storage.keys());
      return _v1.length > _v0 ? _v1[_v0] : null;
    }
    removeItem(_v0) {
      this.storage.delete(_v0);
    }
    setItem(_v0, _v1) {
      this.storage.set(_v0, _v1);
    }
  }
  _v0.s(["getStorageInstance", 0, function () {
    return !function (_v0) {
      let _v1;
      try {
        _v1 = window[_v0];
        let _v0 = "__storage_test__";
        return _v1.setItem(_v0, _v0), _v1.removeItem(_v0), !0;
      } catch (_v0) {
        return !1;
      }
    }("sessionStorage") ? _v1.getInstance() : window.sessionStorage;
  }]);
}