{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "formatNextPathnameInfo", {
    enumerable: !0,
    get: function () {
      return _v7;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0) {
    let _v1 = (0, _v6.addLocale)(_v0.pathname, _v0.locale, _v0.buildId ? void 0 : _v0.defaultLocale, _v0.ignorePrefix);
    return (_v0.buildId || !_v0.trailingSlash) && (_v1 = (0, _v3.removeTrailingSlash)(_v1)), _v0.buildId && (_v1 = (0, _v5.addPathSuffix)((0, _v4.addPathPrefix)(_v1, `/_next/data/${_v0.buildId}`), "/" === _v0.pathname ? "index.json" : ".json")), _v1 = (0, _v4.addPathPrefix)(_v1, _v0.basePath), !_v0.buildId && _v0.trailingSlash ? _v1.endsWith("/") ? _v1 : (0, _v5.addPathSuffix)(_v1, "/") : (0, _v3.removeTrailingSlash)(_v1);
  }
}