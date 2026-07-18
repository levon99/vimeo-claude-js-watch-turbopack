{
  "use strict";

  async function _v3(_v0, _v1) {
    if (_v0) {
      let _v0 = await _v0.setEntries(_v1.entries);
      return _v0 && (_v0.setEnvironment(_v1.environment), _v0.setConfigFetchedAt(new Date().toISOString()), _v0.setConfigPublishedAt(_v1.createdAt), _v0.setFormat(_v1.format), _v0.salt = _v1.salt), _v0;
    }
    return !1;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.hydrateConfigurationStore = _v3;
}