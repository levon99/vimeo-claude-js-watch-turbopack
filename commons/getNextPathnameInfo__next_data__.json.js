{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "getNextPathnameInfo", {
    enumerable: !0,
    get: function () {
      return _v6;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  function _v6(_v0, _v1) {
    let {
        basePath: _v2,
        i18n: _v3,
        trailingSlash: _v4
      } = _v1.nextConfig ?? {},
      _v5 = {
        pathname: _v0,
        trailingSlash: "/" !== _v0 ? _v0.endsWith("/") : _v4
      };
    _v2 && (0, _v5.pathHasPrefix)(_v5.pathname, _v2) && (_v5.pathname = (0, _v4.removePathPrefix)(_v5.pathname, _v2), _v5.basePath = _v2);
    let _v6 = _v5.pathname;
    if (_v5.pathname.startsWith("/_next/data/") && _v5.pathname.endsWith(".json")) {
      let _v0 = _v5.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
      _v5.buildId = _v0[0], _v6 = "index" !== _v0[1] ? `/${_v0.slice(1).join("/")}` : "/", !0 === _v1.parseData && (_v5.pathname = _v6);
    }
    if (_v3) {
      let _v0 = _v1.i18nProvider ? _v1.i18nProvider.analyze(_v5.pathname) : (0, _v3.normalizeLocalePath)(_v5.pathname, _v3.locales);
      _v5.locale = _v0.detectedLocale, _v5.pathname = _v0.pathname ?? _v5.pathname, !_v0.detectedLocale && _v5.buildId && (_v0 = _v1.i18nProvider ? _v1.i18nProvider.analyze(_v6) : (0, _v3.normalizeLocalePath)(_v6, _v3.locales)).detectedLocale && (_v5.locale = _v0.detectedLocale);
    }
    return _v5;
  }
}