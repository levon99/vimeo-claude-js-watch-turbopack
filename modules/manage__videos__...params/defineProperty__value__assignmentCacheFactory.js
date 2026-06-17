{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.assignmentCacheFactory = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  _v2.assignmentCacheFactory = function ({
    forceMemoryOnly: _v0 = !1,
    chromeStorage: _v1,
    storageKeySuffix: _v2
  }) {
    let _v3 = new _v7.default();
    if (_v0) return _v3;
    if (_v1) {
      let _v0 = new _v4.default(_v1);
      return new _v5.default(_v3, _v0);
    }
    if (!(0, _v3.hasWindowLocalStorage)()) return _v3;
    {
      let _v0 = new _v6.LocalStorageAssignmentCache(_v2);
      return new _v5.default(_v3, _v0);
    }
  };
}