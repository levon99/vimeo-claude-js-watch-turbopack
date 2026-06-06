{
  "use strict";

  let _v3;
  function _v4(_v0) {
    return (void 0 === _v3 && "u" > typeof window && (_v3 = window.trustedTypes?.createPolicy("nextjs", {
      createHTML: _v0 => _v0,
      createScript: _v0 => _v0,
      createScriptURL: _v0 => _v0
    }) || null), _v3)?.createScriptURL(_v0) || _v0;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "__unsafeCreateTrustedScriptURL", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  }), ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}