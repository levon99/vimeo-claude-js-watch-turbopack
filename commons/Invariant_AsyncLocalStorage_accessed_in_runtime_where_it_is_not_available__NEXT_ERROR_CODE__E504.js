{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    bindSnapshot: function () {
      return _v9;
    },
    createAsyncLocalStorage: function () {
      return _v8;
    },
    createSnapshot: function () {
      return _v10;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: !1,
    configurable: !0
  });
  class _v6 {
    disable() {
      throw _v5;
    }
    getStore() {}
    run() {
      throw _v5;
    }
    exit() {
      throw _v5;
    }
    enterWith() {
      throw _v5;
    }
    static bind(_v0) {
      return _v0;
    }
  }
  let _v7 = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
  function _v8() {
    return _v7 ? new _v7() : new _v6();
  }
  function _v9(_v0) {
    return _v7 ? _v7.bind(_v0) : _v6.bind(_v0);
  }
  function _v10() {
    return _v7 ? _v7.snapshot() : function (_v0, ..._v1) {
      return _v0(..._v1);
    };
  }
}