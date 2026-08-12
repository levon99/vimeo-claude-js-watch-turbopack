{
  "use strict";

  function _v3() {
    let _v0,
      _v1,
      _v2 = new Promise((_v0, _v1) => {
        _v0 = _v0, _v1 = _v1;
      });
    return {
      resolve: _v0,
      reject: _v1,
      promise: _v2
    };
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "createPromiseWithResolvers", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}