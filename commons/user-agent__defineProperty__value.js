{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v9;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  function _v9(_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6,
      _v7 = !1,
      _v8 = !1,
      _v9 = (0, _v8.parseRelativeUrl)(_v0),
      _v10 = (0, _v5.removeTrailingSlash)((0, _v6.normalizeLocalePath)((0, _v7.removeBasePath)(_v9.pathname), _v5).pathname),
      _v11 = _v0 => {
        let _v1 = (0, _v3.getPathMatch)(_v0.source + "", {
          removeUnnamedParams: !0,
          strict: !0
        })(_v9.pathname);
        if ((_v0.has || _v0.missing) && _v1) {
          let _v0 = (0, _v4.matchHas)({
            headers: {
              host: document.location.hostname,
              "user-agent": navigator.userAgent
            },
            cookies: document.cookie.split("; ").reduce((_v0, _v1) => {
              let [_v2, ..._v3] = _v1.split("=");
              return _v0[_v2] = _v3.join("="), _v0;
            }, {})
          }, _v9.query, _v0.has, _v0.missing);
          _v0 ? Object.assign(_v1, _v0) : _v1 = !1;
        }
        if (_v1) {
          if (!_v0.destination) return _v8 = !0, !0;
          let _v0 = (0, _v4.prepareDestination)({
            appendParamsToQuery: !0,
            destination: _v0.destination,
            params: _v1,
            query: _v3
          });
          if (_v9 = _v0.parsedDestination, _v0 = _v0.newUrl, Object.assign(_v3, _v0.parsedDestination.query), _v10 = (0, _v5.removeTrailingSlash)((0, _v6.normalizeLocalePath)((0, _v7.removeBasePath)(_v0), _v5).pathname), _v1.includes(_v10)) return _v7 = !0, _v6 = _v10, !0;
          if ((_v6 = _v4(_v10)) !== _v0 && _v1.includes(_v6)) return _v7 = !0, !0;
        }
      },
      _v12 = !1;
    for (let _v0 = 0; _v0 < _v2.beforeFiles.length; _v0++) _v11(_v2.beforeFiles[_v0]);
    if (!(_v7 = _v1.includes(_v10))) {
      if (!_v12) {
        for (let _v0 = 0; _v0 < _v2.afterFiles.length; _v0++) if (_v11(_v2.afterFiles[_v0])) {
          _v12 = !0;
          break;
        }
      }
      if (_v12 || (_v6 = _v4(_v10), _v12 = _v7 = _v1.includes(_v6)), !_v12) {
        for (let _v0 = 0; _v0 < _v2.fallback.length; _v0++) if (_v11(_v2.fallback[_v0])) {
          _v12 = !0;
          break;
        }
      }
    }
    return {
      asPath: _v0,
      parsedAs: _v9,
      matchedPage: _v7,
      resolvedHref: _v6,
      externalDest: _v8
    };
  }
}