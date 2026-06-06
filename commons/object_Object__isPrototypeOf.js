{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    getObjectClassLabel: function () {
      return _v5;
    },
    isPlainObject: function () {
      return _v6;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  function _v5(_v0) {
    return Object.prototype.toString.call(_v0);
  }
  function _v6(_v0) {
    if ("[object Object]" !== _v5(_v0)) return !1;
    let _v1 = Object.getPrototypeOf(_v0);
    return null === _v1 || _v1.hasOwnProperty("isPrototypeOf");
  }
}