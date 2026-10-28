{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.setLocalStorageItem = _v2.getLocalStorageItem = void 0;
  var _v3 = function () {
    try {
      return "u" < typeof window ? null : window.localStorage;
    } catch (_v0) {
      return null;
    }
  };
  _v2.getLocalStorageItem = function (_v0) {
    var _v1, _v2;
    try {
      return null != (_v2 = null == (_v1 = _v3()) ? void 0 : _v1.getItem(_v0)) ? _v2 : null;
    } catch (_v0) {
      return null;
    }
  }, _v2.setLocalStorageItem = function (_v0, _v1) {
    var _v2;
    try {
      null == (_v2 = _v3()) || _v2.setItem(_v0, _v1);
    } catch (_v0) {}
  };
}