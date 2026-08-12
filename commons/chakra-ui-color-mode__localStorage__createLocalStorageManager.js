{
  "use strict";

  var _v1 = "chakra-ui-color-mode";
  function _v2(_v0) {
    return {
      ssr: !1,
      type: "localStorage",
      get(_v0) {
        let _v1;
        if (!(null == globalThis ? void 0 : globalThis.document)) return _v0;
        try {
          _v1 = localStorage.getItem(_v0) || _v0;
        } catch (_v0) {}
        return _v1 || _v0;
      },
      set(_v0) {
        try {
          localStorage.setItem(_v0, _v0);
        } catch (_v0) {}
      }
    };
  }
  var _v3 = _v2(_v1);
  _v0.s(["createLocalStorageManager", 0, _v2, "localStorageManager", 0, _v3]);
}