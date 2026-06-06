{
  "use strict";

  function _v3(_v0, _v1) {
    let _v2 = {};
    return Object.keys(_v0).forEach(_v0 => {
      _v1.includes(_v0) || (_v2[_v0] = _v0[_v0]);
    }), _v2;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "omit", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}