{
  "use strict";

  var _v3 = _v0.i(0);
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v14;
    }
  });
  let _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v4._(_v0.r(0)),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0);
  _v0.r(0);
  let _v13 = _v0.r(0);
  class _v14 {
    constructor(_v0, _v1) {
      this.routeLoader = (0, _v12.createRouteLoader)(_v1), this.buildId = _v0, this.assetPrefix = _v1, this.promisedSsgManifest = new Promise(_v0 => {
        window.__SSG_MANIFEST ? _v0(window.__SSG_MANIFEST) : window.__SSG_MANIFEST_CB = () => {
          _v0(window.__SSG_MANIFEST);
        };
      });
    }
    getPageList() {
      return (0, _v12.getClientBuildManifest)().then(_v0 => _v0.sortedPages);
    }
    getMiddleware() {
      if (_v3.default.env.__NEXT_MIDDLEWARE_MATCHERS) {
        let _v0 = _v3.default.env.__NEXT_MIDDLEWARE_MATCHERS;
        return window.__MIDDLEWARE_MATCHERS = _v0 || void 0, window.__MIDDLEWARE_MATCHERS;
      }
      if (window.__MIDDLEWARE_MATCHERS) return window.__MIDDLEWARE_MATCHERS;
      {
        let _v0 = new Promise(_v0 => {
          let _v1 = self.__MIDDLEWARE_MATCHERS_CB;
          self.__MIDDLEWARE_MATCHERS_CB = () => {
            _v0(self.__MIDDLEWARE_MATCHERS), _v1 && _v1();
          };
        });
        return (0, _v13.resolvePromiseWithTimeout)(_v0, (0, _v12.markAssetError)(Object.defineProperty(Error("Failed to load client middleware manifest"), "__NEXT_ERROR_CODE", {
          value: "E980",
          enumerable: !1,
          configurable: !0
        })), void 0);
      }
    }
    getDataHref(_v0) {
      var _v1;
      let _v2,
        {
          asPath: _v3,
          href: _v4,
          locale: _v5
        } = _v0,
        {
          pathname: _v6,
          query: _v7,
          search: _v8
        } = (0, _v10.parseRelativeUrl)(_v4),
        {
          pathname: _v9
        } = (0, _v10.parseRelativeUrl)(_v3),
        _v10 = (0, _v11.removeTrailingSlash)(_v6);
      if ("/" !== _v10[0]) throw Object.defineProperty(Error(`Route name should start with a "/", got "${_v10}"`), "__NEXT_ERROR_CODE", {
        value: "E303",
        enumerable: !1,
        configurable: !0
      });
      return _v1 = _v0.skipInterpolation ? _v9 : (0, _v9.isDynamicRoute)(_v10) ? (0, _v6.interpolateAs)(_v6, _v9, _v7).result : _v10, _v2 = (0, _v7.default)((0, _v11.removeTrailingSlash)((0, _v8.addLocale)(_v1, _v5)), ".json"), (0, _v5.addBasePath)(`/_next/data/${this.buildId}${_v2}${_v8}`, !0);
    }
    _isSsg(_v0) {
      return this.promisedSsgManifest.then(_v0 => _v0.has(_v0));
    }
    loadPage(_v0) {
      return this.routeLoader.loadRoute(_v0).then(_v0 => {
        if ("component" in _v0) return {
          page: _v0.component,
          mod: _v0.exports,
          styleSheets: _v0.styles.map(_v0 => ({
            href: _v0.href,
            text: _v0.content
          }))
        };
        throw _v0.error;
      });
    }
    prefetch(_v0) {
      return this.routeLoader.prefetch(_v0);
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}