{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "resolveHref", {
    enumerable: !0,
    get: function () {
      return _v13;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0);
  function _v13(_v0, _v1, _v2) {
    let _v3,
      _v4 = "string" == typeof _v1 ? _v1 : (0, _v4.formatWithValidation)(_v1),
      _v5 = _v4.match(/^[a-z][a-z0-9+.-]*:\/\//i),
      _v6 = _v5 ? _v4.slice(_v5[0].length) : _v4;
    if ((_v6.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
      console.error(`Invalid href '${_v4}' passed to next/router in page: '${_v0.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
      let _v0 = (0, _v6.normalizeRepeatedSlashes)(_v6);
      _v4 = (_v5 ? _v5[0] : "") + _v0;
    }
    if (!(0, _v8.isLocalURL)(_v4)) return _v2 ? [_v4] : _v4;
    try {
      let _v0 = _v4.startsWith("#") ? _v0.asPath : _v0.pathname;
      if (_v4.startsWith("?") && (_v0 = _v0.asPath, (0, _v9.isDynamicRoute)(_v0.pathname))) {
        _v0 = _v0.pathname;
        let _v0 = (0, _v11.getRouteRegex)(_v0.pathname);
        (0, _v12.getRouteMatcher)(_v0)(_v0.asPath) || (_v0 = _v0.asPath);
      }
      _v3 = new URL(_v0, "http://n");
    } catch (_v0) {
      _v3 = new URL("/", "http://n");
    }
    try {
      let _v0 = new URL(_v4, _v3);
      _v0.pathname = (0, _v7.normalizePathTrailingSlash)(_v0.pathname);
      let _v1 = "";
      if ((0, _v9.isDynamicRoute)(_v0.pathname) && _v0.searchParams && _v2) {
        let _v0 = (0, _v3.searchParamsToUrlQuery)(_v0.searchParams),
          {
            result: _v1,
            params: _v2
          } = (0, _v10.interpolateAs)(_v0.pathname, _v0.pathname, _v0);
        _v1 && (_v1 = (0, _v4.formatWithValidation)({
          pathname: _v1,
          hash: _v0.hash,
          query: (0, _v5.omit)(_v0, _v2)
        }));
      }
      let _v2 = _v0.origin === _v3.origin ? _v0.href.slice(_v0.origin.length) : _v0.href;
      return _v2 ? [_v2, _v1 || _v2] : _v2;
    } catch (_v0) {
      return _v2 ? [_v4] : _v4;
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}