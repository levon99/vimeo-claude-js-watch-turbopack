{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    BailoutToCSRError: function () {
      return _v6;
    },
    isBailoutToCSRError: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
  class _v6 extends Error {
    constructor(_v0) {
      super(`Bail out to client-side rendering: ${_v0}`), this.reason = _v0, this.digest = _v5;
    }
  }
  function _v7(_v0) {
    return "object" == typeof _v0 && null !== _v0 && "digest" in _v0 && _v0.digest === _v5;
  }
}