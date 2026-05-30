{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "getDomainLocale", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0, _v1, _v2, _v3) {
    {
      let _v0 = _v0.r(0).normalizeLocalePath,
        _v1 = _v0.r(0).detectDomainLocale,
        _v2 = _v1 || _v0(_v0, _v2).detectedLocale,
        _v3 = _v1(_v3, void 0, _v2);
      if (_v3) {
        let _v0 = `http${_v3.http ? "" : "s"}://`,
          _v1 = _v2 === _v3.defaultLocale ? "" : `/${_v2}`;
        return `${_v0}${_v3.domain}${(0, _v3.normalizePathTrailingSlash)(`${_v1}${_v0}`)}`;
      }
      return !1;
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}