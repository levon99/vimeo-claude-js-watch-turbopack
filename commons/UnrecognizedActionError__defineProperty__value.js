{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    UnrecognizedActionError: function () {
      return _v5;
    },
    unstable_isUnrecognizedActionError: function () {
      return _v6;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  class _v5 extends Error {
    constructor(..._v0) {
      super(..._v0), this.name = "UnrecognizedActionError";
    }
  }
  function _v6(_v0) {
    return !!(_v0 && "object" == typeof _v0 && _v0 instanceof _v5);
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}