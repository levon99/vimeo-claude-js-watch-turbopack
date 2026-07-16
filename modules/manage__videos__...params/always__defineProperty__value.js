{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.localStorageIfAvailable = _v2.hasWindowLocalStorage = _v2.chromeStorageIfAvailable = _v2.hasChromeStorage = _v2.overrideStorageFactory = _v2.configurationStorageFactory = _v2.precomputedBanditStoreFactory = _v2.precomputedFlagsStorageFactory = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0);
  function _v10() {
    return "u" > typeof chrome && !!chrome.storage;
  }
  function _v11() {
    try {
      return "u" > typeof window && !!window.localStorage;
    } catch (_v0) {
      return !1;
    }
  }
  _v2.precomputedFlagsStorageFactory = function () {
    return new _v3.MemoryOnlyConfigurationStore();
  }, _v2.precomputedBanditStoreFactory = function () {
    return new _v3.MemoryOnlyConfigurationStore();
  }, _v2.configurationStorageFactory = function ({
    maxAgeSeconds: _v0 = 0,
    servingStoreUpdateStrategy: _v1 = "always",
    hasChromeStorage: _v2 = !1,
    hasWindowLocalStorage: _v3 = !1,
    persistentStore: _v4,
    forceMemoryOnly: _v5 = !1
  }, {
    chromeStorage: _v6,
    windowLocalStorage: _v7,
    storageKeySuffix: _v8
  } = {}) {
    if (_v5) ;else if (_v4) return new _v6.IsolatableHybridConfigurationStore(new _v3.MemoryStore(), _v4, _v1);else if (_v2 && _v6) {
      let _v0 = new _v5.ChromeStorageEngine(new _v4.default(_v6), null != _v8 ? _v8 : "");
      return new _v6.IsolatableHybridConfigurationStore(new _v3.MemoryStore(), new _v9.StringValuedAsyncStore(_v0, _v0), _v1);
    } else if (_v3 && _v7) {
      let _v0 = new _v7.LocalStorageEngine(_v7, null != _v8 ? _v8 : "");
      return new _v6.IsolatableHybridConfigurationStore(new _v3.MemoryStore(), new _v9.StringValuedAsyncStore(_v0, _v0), _v1);
    }
    return new _v3.MemoryOnlyConfigurationStore();
  }, _v2.overrideStorageFactory = function ({
    hasWindowLocalStorage: _v0 = !1,
    forceMemoryOnly: _v1 = !1
  }, {
    windowLocalStorage: _v2,
    storageKey: _v3 = _v8.OVERRIDES_KEY
  } = {}) {
    let _v4 = new _v3.MemoryStore();
    if (!_v1 && _v0 && _v2) {
      let _v0 = _v2.getItem(_v3);
      if (_v0) {
        let _v0 = JSON.parse(_v0);
        _v4.setEntries(_v0);
      }
    }
    return _v4;
  }, _v2.hasChromeStorage = _v10, _v2.chromeStorageIfAvailable = function () {
    return _v10() ? chrome.storage.local : void 0;
  }, _v2.hasWindowLocalStorage = _v11, _v2.localStorageIfAvailable = function () {
    return _v11() ? window.localStorage : void 0;
  };
}