{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    DynamicServerError: function () {
      return _v6;
    },
    isDynamicServerError: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = "DYNAMIC_SERVER_USAGE";
  class _v6 extends Error {
    constructor(_v0) {
      super(`Dynamic server usage: ${_v0}`), this.description = _v0, this.digest = _v5;
    }
  }
  function _v7(_v0) {
    return "object" == typeof _v0 && null !== _v0 && "digest" in _v0 && "string" == typeof _v0.digest && _v0.digest === _v5;
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}