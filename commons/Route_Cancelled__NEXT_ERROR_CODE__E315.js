{
  "use strict";

  let _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v4 = {
    createKey: function () {
      return _v50;
    },
    default: function () {
      return _v53;
    },
    matchesMiddleware: function () {
      return _v42;
    }
  };
  for (var _v5 in _v4) Object.defineProperty(_v2, _v5, {
    enumerable: !0,
    get: _v4[_v5]
  });
  let _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v7._(_v0.r(0)),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v6._(_v0.r(0)),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = _v0.r(0),
    _v19 = _v0.r(0),
    _v20 = _v0.r(0),
    _v21 = _v0.r(0),
    _v22 = _v0.r(0),
    _v23 = _v0.r(0),
    _v24 = _v0.r(0),
    _v25 = _v0.r(0),
    _v26 = _v0.r(0),
    _v27 = _v0.r(0),
    _v28 = _v0.r(0),
    _v29 = _v0.r(0),
    _v30 = _v0.r(0),
    _v31 = _v0.r(0),
    _v32 = _v0.r(0),
    _v33 = _v0.r(0),
    _v34 = _v0.r(0),
    _v35 = _v0.r(0),
    _v36 = _v0.r(0),
    _v37 = _v0.r(0),
    _v38 = _v0.r(0),
    _v39 = _v0.r(0),
    _v40 = _v0.r(0);
  function _v41() {
    return Object.assign(Object.defineProperty(Error("Route Cancelled"), "__NEXT_ERROR_CODE", {
      value: "E315",
      enumerable: !1,
      configurable: !0
    }), {
      cancelled: !0
    });
  }
  async function _v42(_v0) {
    let _v1 = await Promise.resolve(_v0.router.pageLoader.getMiddleware());
    if (!_v1) return !1;
    let {
        pathname: _v2
      } = (0, _v22.parsePath)(_v0.asPath),
      _v3 = (0, _v27.hasBasePath)(_v2) ? (0, _v25.removeBasePath)(_v2) : _v2,
      _v4 = (0, _v26.addBasePath)((0, _v23.addLocale)(_v3, _v0.locale));
    return _v1.some(_v0 => new RegExp(_v0.regexp).test(_v4));
  }
  function _v43(_v0) {
    let _v1 = (0, _v15.getLocationOrigin)();
    return _v0.startsWith(_v1) ? _v0.substring(_v1.length) : _v0;
  }
  function _v44(_v0, _v1, _v2) {
    let [_v3, _v4] = (0, _v28.resolveHref)(_v0, _v1, !0),
      _v5 = (0, _v15.getLocationOrigin)(),
      _v6 = _v3.startsWith(_v5),
      _v7 = _v4 && _v4.startsWith(_v5);
    _v3 = _v43(_v3), _v4 = _v4 ? _v43(_v4) : _v4;
    let _v8 = _v6 ? _v3 : (0, _v26.addBasePath)(_v3),
      _v9 = _v2 ? _v43((0, _v28.resolveHref)(_v0, _v2)) : _v4 || _v3;
    return {
      url: _v8,
      as: _v7 ? _v9 : (0, _v26.addBasePath)(_v9)
    };
  }
  function _v45(_v0, _v1) {
    let _v2 = (0, _v8.removeTrailingSlash)((0, _v12.denormalizePagePath)(_v0));
    return "/404" === _v2 || "/_error" === _v2 ? _v0 : (_v1.includes(_v2) || _v1.some(_v0 => {
      if ((0, _v16.isDynamicRoute)(_v0) && (0, _v19.getRouteRegex)(_v0).re.test(_v2)) return _v0 = _v0, !0;
    }), (0, _v8.removeTrailingSlash)(_v0));
  }
  async function _v46(_v0) {
    if (!(await _v42(_v0)) || !_v0.fetchData) return null;
    let _v1 = await _v0.fetchData(),
      _v2 = await function (_v0, _v1, _v2) {
        let _v3 = {
            basePath: _v2.router.basePath,
            i18n: {
              locales: _v2.router.locales
            },
            trailingSlash: !1
          },
          _v4 = _v1.headers.get("x-nextjs-rewrite"),
          _v5 = _v4 || _v1.headers.get("x-nextjs-matched-path"),
          _v6 = _v1.headers.get(_v38.MATCHED_PATH_HEADER);
        if (!_v6 || _v5 || _v6.includes("__next_data_catchall") || _v6.includes("/_error") || _v6.includes("/404") || (_v5 = _v6), _v5) {
          if (_v5.startsWith("/")) {
            let _v0 = (0, _v17.parseRelativeUrl)(_v5),
              _v1 = (0, _v30.getNextPathnameInfo)(_v0.pathname, {
                nextConfig: _v3,
                parseData: !0
              }),
              _v2 = (0, _v8.removeTrailingSlash)(_v1.pathname);
            return Promise.all([_v2.router.pageLoader.getPageList(), (0, _v9.getClientBuildManifest)()]).then(([_v0, {
              __rewrites: _v1
            }]) => {
              let _v2 = (0, _v23.addLocale)(_v1.pathname, _v1.locale);
              if ((0, _v16.isDynamicRoute)(_v2) || !_v4 && _v0.includes((0, _v13.normalizeLocalePath)((0, _v25.removeBasePath)(_v2), _v2.router.locales).pathname)) {
                let _v0 = (0, _v30.getNextPathnameInfo)((0, _v17.parseRelativeUrl)(_v0).pathname, {
                  nextConfig: void 0,
                  parseData: !0
                });
                _v0.pathname = _v2 = (0, _v26.addBasePath)(_v0.pathname);
              }
              {
                let _v0 = _v3(_v2, _v0, _v1, _v0.query, _v0 => _v45(_v0, _v0), _v2.router.locales);
                _v0.matchedPage && (_v0.pathname = _v0.parsedAs.pathname, _v2 = _v0.pathname, Object.assign(_v0.query, _v0.parsedAs.query));
              }
              let _v3 = _v0.includes(_v2) ? _v2 : _v45((0, _v13.normalizeLocalePath)((0, _v25.removeBasePath)(_v0.pathname), _v2.router.locales).pathname, _v0);
              if ((0, _v16.isDynamicRoute)(_v3)) {
                let _v0 = (0, _v18.getRouteMatcher)((0, _v19.getRouteRegex)(_v3))(_v2);
                Object.assign(_v0.query, _v0 || {});
              }
              return {
                type: "rewrite",
                parsedAs: _v0,
                resolvedHref: _v3
              };
            });
          }
          let _v0 = (0, _v22.parsePath)(_v0),
            _v1 = (0, _v31.formatNextPathnameInfo)({
              ...(0, _v30.getNextPathnameInfo)(_v0.pathname, {
                nextConfig: _v3,
                parseData: !0
              }),
              defaultLocale: _v2.router.defaultLocale,
              buildId: ""
            });
          return Promise.resolve({
            type: "redirect-external",
            destination: `${_v1}${_v0.query}${_v0.hash}`
          });
        }
        let _v7 = _v1.headers.get("x-nextjs-redirect");
        if (_v7) {
          if (_v7.startsWith("/")) {
            let _v0 = (0, _v22.parsePath)(_v7),
              _v1 = (0, _v31.formatNextPathnameInfo)({
                ...(0, _v30.getNextPathnameInfo)(_v0.pathname, {
                  nextConfig: _v3,
                  parseData: !0
                }),
                defaultLocale: _v2.router.defaultLocale,
                buildId: ""
              });
            return Promise.resolve({
              type: "redirect-internal",
              newAs: `${_v1}${_v0.query}${_v0.hash}`,
              newUrl: `${_v1}${_v0.query}${_v0.hash}`
            });
          }
          return Promise.resolve({
            type: "redirect-external",
            destination: _v7
          });
        }
        return Promise.resolve({
          type: "next"
        });
      }(_v1.dataHref, _v1.response, _v0);
    return {
      dataHref: _v1.dataHref,
      json: _v1.json,
      response: _v1.response,
      text: _v1.text,
      cacheKey: _v1.cacheKey,
      effect: _v2
    };
  }
  _v3 = _v0.r(0).default;
  let _v47 = Symbol("SSG_DATA_NOT_FOUND");
  function _v48(_v0) {
    try {
      return JSON.parse(_v0);
    } catch (_v0) {
      return null;
    }
  }
  function _v49({
    dataHref: _v0,
    inflightCache: _v1,
    isPrefetch: _v2,
    hasMiddleware: _v3,
    isServerRender: _v4,
    parseJSON: _v5,
    persistCache: _v6,
    isBackground: _v7,
    unstable_skipClientCache: _v8
  }) {
    let {
        href: _v9
      } = new URL(_v0, window.location.href),
      _v10 = (0, _v39.getDeploymentId)(),
      _v11 = _v0 => function _v0(_v1, _v2, _v3) {
        return fetch(_v1, {
          credentials: "same-origin",
          method: _v3.method || "GET",
          headers: Object.assign({}, _v3.headers, {
            "x-nextjs-data": "1"
          })
        }).then(_v0 => !_v0.ok && _v2 > 1 && _v0.status >= 500 ? _v0(_v1, _v2 - 1, _v3) : _v0);
      }(_v0, _v4 ? 3 : 1, {
        headers: Object.assign({}, _v2 ? {
          purpose: "prefetch"
        } : {}, _v2 && _v3 ? {
          "x-middleware-prefetch": "1"
        } : {}, _v10 ? {
          "x-deployment-id": _v10
        } : {}),
        method: _v0?.method ?? "GET"
      }).then(_v0 => _v0.ok && _v0?.method === "HEAD" ? {
        dataHref: _v0,
        response: _v0,
        text: "",
        json: {},
        cacheKey: _v9
      } : _v0.text().then(_v0 => {
        if (!_v0.ok) {
          if (_v3 && [301, 302, 307, 308].includes(_v0.status)) return {
            dataHref: _v0,
            response: _v0,
            text: _v0,
            json: {},
            cacheKey: _v9
          };
          if (404 === _v0.status && _v48(_v0)?.notFound) return {
            dataHref: _v0,
            json: {
              notFound: _v47
            },
            response: _v0,
            text: _v0,
            cacheKey: _v9
          };
          let _v0 = Object.defineProperty(Error("Failed to load static props"), "__NEXT_ERROR_CODE", {
            value: "E124",
            enumerable: !1,
            configurable: !0
          });
          throw _v4 || (0, _v9.markAssetError)(_v0), _v0;
        }
        let _v1 = _v0.headers.get(_v38.NEXT_NAV_DEPLOYMENT_ID_HEADER);
        if (null != _v1 && _v1 !== _v10) {
          let _v0 = Object.defineProperty(Error("Loaded static props were from an outdated deployment, forcing a hard reload"), "__NEXT_ERROR_CODE", {
            value: "E989",
            enumerable: !1,
            configurable: !0
          });
          throw _v4 || (0, _v9.markAssetError)(_v0), _v0;
        }
        return {
          dataHref: _v0,
          json: _v5 ? _v48(_v0) : null,
          response: _v0,
          text: _v0,
          cacheKey: _v9
        };
      })).then(_v0 => (_v6 && "no-cache" !== _v0.response.headers.get("x-middleware-cache") || delete _v1[_v9], _v0)).catch(_v0 => {
        throw _v8 || delete _v1[_v9], ("Failed to fetch" === _v0.message || "NetworkError when attempting to fetch resource." === _v0.message || "Load failed" === _v0.message) && (0, _v9.markAssetError)(_v0), _v0;
      });
    return _v8 && _v6 ? _v11({}).then(_v0 => ("no-cache" !== _v0.response.headers.get("x-middleware-cache") && (_v1[_v9] = Promise.resolve(_v0)), _v0)) : void 0 !== _v1[_v9] ? _v1[_v9] : _v1[_v9] = _v11(_v7 ? {
      method: "HEAD"
    } : {});
  }
  function _v50() {
    return Math.random().toString(36).slice(2, 10);
  }
  function _v51({
    url: _v0,
    router: _v1
  }) {
    if (_v0 === (0, _v26.addBasePath)((0, _v23.addLocale)(_v1.asPath, _v1.locale))) throw Object.defineProperty(Error(`Invariant: attempted to hard navigate to the same URL ${_v0} ${location.href}`), "__NEXT_ERROR_CODE", {
      value: "E282",
      enumerable: !1,
      configurable: !0
    });
    window.location.href = _v0;
  }
  let _v52 = ({
    route: _v0,
    router: _v1
  }) => {
    let _v2 = !1,
      _v3 = _v1.clc = () => {
        _v2 = !0;
      };
    return () => {
      if (_v2) {
        let _v0 = Object.defineProperty(Error(`Abort fetching component for route: "${_v0}"`), "__NEXT_ERROR_CODE", {
          value: "E483",
          enumerable: !1,
          configurable: !0
        });
        throw _v0.cancelled = !0, _v0;
      }
      _v3 === _v1.clc && (_v1.clc = null);
    };
  };
  class _v53 {
    static {
      this.events = (0, _v14.default)();
    }
    constructor(_v0, _v1, _v2, {
      initialProps: _v3,
      pageLoader: _v4,
      App: _v5,
      wrapApp: _v6,
      Component: _v7,
      err: _v8,
      subscription: _v9,
      isFallback: _v10,
      locale: _v11,
      locales: _v12,
      defaultLocale: _v13,
      domainLocales: _v14,
      isPreview: _v15
    }) {
      this.sdc = {}, this.sbc = {}, this.isFirstPopStateEvent = !0, this._key = _v50(), this.onPopState = _v0 => {
        let _v1,
          {
            isFirstPopStateEvent: _v2
          } = this;
        this.isFirstPopStateEvent = !1;
        let _v3 = _v0.state;
        if (!_v3) {
          let {
            pathname: _v0,
            query: _v1
          } = this;
          this.changeState("replaceState", (0, _v20.formatWithValidation)({
            pathname: (0, _v26.addBasePath)(_v0),
            query: _v1
          }), (0, _v15.getURL)());
          return;
        }
        if (_v3.__NA) return void window.location.reload();
        if (!_v3.__N || _v2 && this.locale === _v3.options.locale && _v3.as === this.asPath) return;
        let {
          url: _v4,
          as: _v5,
          options: _v6,
          key: _v7
        } = _v3;
        this._key = _v7;
        let {
          pathname: _v8
        } = (0, _v17.parseRelativeUrl)(_v4);
        this.isSsr && _v5 === (0, _v26.addBasePath)(this.asPath) && _v8 === (0, _v26.addBasePath)(this.pathname) || (!this._bps || this._bps(_v3)) && this.change("replaceState", _v4, _v5, Object.assign({}, _v6, {
          shallow: _v6.shallow && this._shallow,
          locale: _v6.locale || this.defaultLocale,
          _h: 0
        }), _v1);
      };
      const _v16 = (0, _v8.removeTrailingSlash)(_v0);
      this.components = {}, "/_error" !== _v0 && (this.components[_v16] = {
        Component: _v7,
        initial: !0,
        props: _v3,
        err: _v8,
        __N_SSG: _v3 && _v3.__N_SSG,
        __N_SSP: _v3 && _v3.__N_SSP
      }), this.components["/_app"] = {
        Component: _v5,
        styleSheets: []
      }, this.events = _v53.events, this.pageLoader = _v4;
      const _v17 = (0, _v16.isDynamicRoute)(_v0) && self.__NEXT_DATA__.autoExport;
      if (this.basePath = "", this.sub = _v9, this.clc = null, this._wrapApp = _v6, this.isSsr = !0, this.isLocaleDomain = !1, this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.isExperimentalCompile || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !_v17 && !self.location.search && 0), this.locales = _v12, this.defaultLocale = _v13, this.domainLocales = _v14, this.isLocaleDomain = !!(0, _v21.detectDomainLocale)(_v14, self.location.hostname), this.state = {
        route: _v16,
        pathname: _v0,
        query: _v1,
        asPath: _v17 ? _v0 : _v2,
        isPreview: !!_v15,
        locale: _v11,
        isFallback: _v10
      }, this._initialMatchesMiddlewarePromise = Promise.resolve(!1), "u" > typeof window) {
        if (!_v2.startsWith("//")) {
          const _v0 = {
              locale: _v11
            },
            _v1 = (0, _v15.getURL)();
          this._initialMatchesMiddlewarePromise = _v42({
            router: this,
            locale: _v11,
            asPath: _v1
          }).then(_v0 => (_v0._shouldResolveHref = _v2 !== _v0, this.changeState("replaceState", _v0 ? _v1 : (0, _v20.formatWithValidation)({
            pathname: (0, _v26.addBasePath)(_v0),
            query: _v1
          }), _v1, _v0), _v0));
        }
        window.addEventListener("popstate", this.onPopState);
      }
    }
    reload() {
      window.location.reload();
    }
    back() {
      window.history.back();
    }
    forward() {
      window.history.forward();
    }
    push(_v0, _v1, _v2 = {}) {
      if ((0, _v40.isJavaScriptURLString)(_v0.toString()) || _v1 && (0, _v40.isJavaScriptURLString)(_v1.toString())) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      return ({
        url: _v0,
        as: _v1
      } = _v44(this, _v0, _v1)), this.change("pushState", _v0, _v1, _v2);
    }
    replace(_v0, _v1, _v2 = {}) {
      if ((0, _v40.isJavaScriptURLString)(_v0.toString()) || _v1 && (0, _v40.isJavaScriptURLString)(_v1.toString())) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      return ({
        url: _v0,
        as: _v1
      } = _v44(this, _v0, _v1)), this.change("replaceState", _v0, _v1, _v2);
    }
    async _bfl(_v0, _v1, _v2, _v3) {
      {
        if (!this._bfl_s && !this._bfl_d) {
          let _v0,
            _v1,
            {
              BloomFilter: _v2
            } = _v0.r(0);
          try {
            ({
              __routerFilterStatic: _v0,
              __routerFilterDynamic: _v1
            } = await (0, _v9.getClientBuildManifest)());
          } catch (_v0) {
            if (console.error(_v0), _v3) return !0;
            return _v51({
              url: (0, _v26.addBasePath)((0, _v23.addLocale)(_v0, _v2 || this.locale, this.defaultLocale)),
              router: this
            }), new Promise(() => {});
          }
          let _v3 = {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: null,
            bitArray: []
          };
          !_v0 && _v3 && (_v0 = _v3);
          let _v4 = {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: null,
            bitArray: []
          };
          !_v1 && _v4 && (_v1 = _v4), _v0?.numHashes && (this._bfl_s = new _v2(_v0.numItems, _v0.errorRate), this._bfl_s.import(_v0)), _v1?.numHashes && (this._bfl_d = new _v2(_v1.numItems, _v1.errorRate), this._bfl_d.import(_v1));
        }
        let _v0 = !1,
          _v1 = !1;
        for (let {
          as: _v0,
          allowMatchCurrent: _v1
        } of [{
          as: _v0
        }, {
          as: _v1
        }]) if (_v0) {
          let _v0 = (0, _v8.removeTrailingSlash)(new URL(_v0, "http://n").pathname),
            _v1 = (0, _v26.addBasePath)((0, _v23.addLocale)(_v0, _v2 || this.locale));
          if (_v1 || _v0 !== (0, _v8.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
            for (let _v0 of (_v0 = _v0 || !!this._bfl_s?.contains(_v0) || !!this._bfl_s?.contains(_v1), [_v0, _v1])) {
              let _v0 = _v0.split("/");
              for (let _v0 = 0; !_v1 && _v0 < _v0.length + 1; _v0++) {
                let _v0 = _v0.slice(0, _v0).join("/");
                if (_v0 && this._bfl_d?.contains(_v0)) {
                  _v1 = !0;
                  break;
                }
              }
            }
            if (_v0 || _v1) {
              if (_v3) return !0;
              return _v51({
                url: (0, _v26.addBasePath)((0, _v23.addLocale)(_v0, _v2 || this.locale, this.defaultLocale)),
                router: this
              }), new Promise(() => {});
            }
          }
        }
      }
      return !1;
    }
    async change(_v0, _v1, _v2, _v3, _v4) {
      let _v5, _v6;
      if (!(0, _v33.isLocalURL)(_v1)) return _v51({
        url: _v1,
        router: this
      }), !1;
      let _v7 = 1 === _v3._h;
      _v7 || _v3.shallow || (await this._bfl(_v2, void 0, _v3.locale));
      let _v8 = _v7 || _v3._shouldResolveHref || (0, _v22.parsePath)(_v1).pathname === (0, _v22.parsePath)(_v2).pathname,
        _v9 = {
          ...this.state
        },
        _v10 = !0 !== this.isReady;
      this.isReady = !0;
      let _v11 = this.isSsr;
      if (_v7 || (this.isSsr = !1), _v7 && this.clc) return !1;
      let _v12 = _v9.locale;
      {
        _v9.locale = !1 === _v3.locale ? this.defaultLocale : _v3.locale || _v9.locale, void 0 === _v3.locale && (_v3.locale = _v9.locale);
        let _v0 = (0, _v17.parseRelativeUrl)((0, _v27.hasBasePath)(_v2) ? (0, _v25.removeBasePath)(_v2) : _v2),
          _v1 = (0, _v13.normalizeLocalePath)(_v0.pathname, this.locales);
        _v1.detectedLocale && (_v9.locale = _v1.detectedLocale, _v0.pathname = (0, _v26.addBasePath)(_v0.pathname), _v2 = (0, _v20.formatWithValidation)(_v0), _v1 = (0, _v26.addBasePath)((0, _v13.normalizeLocalePath)((0, _v27.hasBasePath)(_v1) ? (0, _v25.removeBasePath)(_v1) : _v1, this.locales).pathname));
        let _v2 = !1;
        this.locales?.includes(_v9.locale) || (_v0.pathname = (0, _v23.addLocale)(_v0.pathname, _v9.locale), _v51({
          url: (0, _v20.formatWithValidation)(_v0),
          router: this
        }), _v2 = !0);
        let _v3 = (0, _v21.detectDomainLocale)(this.domainLocales, void 0, _v9.locale);
        if (!_v2 && _v3 && this.isLocaleDomain && self.location.hostname !== _v3.domain) {
          let _v0 = (0, _v25.removeBasePath)(_v2);
          _v51({
            url: `http${_v3.http ? "" : "s"}://${_v3.domain}${(0, _v26.addBasePath)(`${_v9.locale === _v3.defaultLocale ? "" : `/${_v9.locale}`}${"/" === _v0 ? "" : _v0}` || "/")}`,
            router: this
          }), _v2 = !0;
        }
        if (_v2) return new Promise(() => {});
      }
      _v15.ST && performance.mark("routeChange");
      let {
          shallow: _v13 = !1,
          scroll: _v14 = !0
        } = _v3,
        _v15 = {
          shallow: _v13
        };
      this._inFlightRoute && this.clc && (_v11 || _v53.events.emit("routeChangeError", _v41(), this._inFlightRoute, _v15), this.clc(), this.clc = null), _v2 = (0, _v26.addBasePath)((0, _v23.addLocale)((0, _v27.hasBasePath)(_v2) ? (0, _v25.removeBasePath)(_v2) : _v2, _v3.locale, this.defaultLocale));
      let _v16 = (0, _v24.removeLocale)((0, _v27.hasBasePath)(_v2) ? (0, _v25.removeBasePath)(_v2) : _v2, _v9.locale);
      this._inFlightRoute = _v2;
      let _v17 = _v12 !== _v9.locale;
      if (!_v7 && this.onlyAHashChange(_v16) && !_v17) {
        _v9.asPath = _v16, _v53.events.emit("hashChangeStart", _v2, _v15), this.changeState(_v0, _v1, _v2, {
          ..._v3,
          scroll: !1
        }), _v14 && this.scrollToHash(_v16);
        try {
          await this.set(_v9, this.components[_v9.route], null);
        } catch (_v0) {
          throw (0, _v11.default)(_v0) && _v0.cancelled && _v53.events.emit("routeChangeError", _v0, _v16, _v15), _v0;
        }
        return _v53.events.emit("hashChangeComplete", _v2, _v15), !0;
      }
      let _v18 = (0, _v17.parseRelativeUrl)(_v1),
        {
          pathname: _v19,
          query: _v20
        } = _v18;
      try {
        [_v5, {
          __rewrites: _v6
        }] = await Promise.all([this.pageLoader.getPageList(), (0, _v9.getClientBuildManifest)(), this.pageLoader.getMiddleware()]);
      } catch (_v0) {
        return _v51({
          url: _v2,
          router: this
        }), !1;
      }
      this.urlIsNew(_v16) || _v17 || (_v0 = "replaceState");
      let _v21 = _v2;
      _v19 = _v19 ? (0, _v8.removeTrailingSlash)((0, _v25.removeBasePath)(_v19)) : _v19;
      let _v22 = (0, _v8.removeTrailingSlash)(_v19),
        _v23 = _v2.startsWith("/") && (0, _v17.parseRelativeUrl)(_v2).pathname;
      if (this.components[_v19]?.__appRouter) return _v51({
        url: _v2,
        router: this
      }), new Promise(() => {});
      let _v24 = !!(_v23 && _v22 !== _v23 && (!(0, _v16.isDynamicRoute)(_v22) || !(0, _v18.getRouteMatcher)((0, _v19.getRouteRegex)(_v22))(_v23))),
        _v25 = !_v3.shallow && (await _v42({
          asPath: _v2,
          locale: _v9.locale,
          router: this
        }));
      if (_v7 && _v25 && (_v8 = !1), _v8 && "/_error" !== _v19) if (_v3._shouldResolveHref = !0, _v2.startsWith("/")) {
        let _v0 = _v3((0, _v26.addBasePath)((0, _v23.addLocale)(_v16, _v9.locale), !0), _v5, _v6, _v20, _v0 => _v45(_v0, _v5), this.locales);
        if (_v0.externalDest) return _v51({
          url: _v2,
          router: this
        }), !0;
        _v25 || (_v21 = _v0.asPath), _v0.matchedPage && _v0.resolvedHref && (_v19 = _v0.resolvedHref, _v18.pathname = (0, _v26.addBasePath)(_v19), _v25 || (_v1 = (0, _v20.formatWithValidation)(_v18)));
      } else _v18.pathname = _v45(_v19, _v5), _v18.pathname !== _v19 && (_v19 = _v18.pathname, _v18.pathname = (0, _v26.addBasePath)(_v19), _v25 || (_v1 = (0, _v20.formatWithValidation)(_v18)));
      if (!(0, _v33.isLocalURL)(_v2)) return _v51({
        url: _v2,
        router: this
      }), !1;
      _v21 = (0, _v24.removeLocale)((0, _v25.removeBasePath)(_v21), _v9.locale), _v22 = (0, _v8.removeTrailingSlash)(_v19);
      let _v26 = !1;
      if ((0, _v16.isDynamicRoute)(_v22)) {
        let _v0 = (0, _v17.parseRelativeUrl)(_v21),
          _v1 = _v0.pathname,
          _v2 = (0, _v19.getRouteRegex)(_v22);
        _v26 = (0, _v18.getRouteMatcher)(_v2)(_v1);
        let _v3 = _v22 === _v1,
          _v4 = _v3 ? (0, _v36.interpolateAs)(_v22, _v1, _v20) : {};
        if (_v26 && (!_v3 || _v4.result)) _v3 ? _v2 = (0, _v20.formatWithValidation)(Object.assign({}, _v0, {
          pathname: _v4.result,
          query: (0, _v35.omit)(_v20, _v4.params)
        })) : Object.assign(_v20, _v26);else {
          let _v0 = Object.keys(_v2.groups).filter(_v0 => !_v20[_v0] && !_v2.groups[_v0].optional);
          if (_v0.length > 0 && !_v25) throw Object.defineProperty(Error((_v3 ? `The provided \`href\` (${_v1}) value is missing query values (${_v0.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${_v1}) is incompatible with the \`href\` value (${_v22}). `) + `Read more: https://nextjs.org/docs/messages/${_v3 ? "href-interpolation-failed" : "incompatible-href-as"}`), "__NEXT_ERROR_CODE", {
            value: "E344",
            enumerable: !1,
            configurable: !0
          });
        }
      }
      _v7 || _v53.events.emit("routeChangeStart", _v2, _v15);
      let _v27 = "/404" === this.pathname || "/_error" === this.pathname;
      try {
        let _v0 = await this.getRouteInfo({
          route: _v22,
          pathname: _v19,
          query: _v20,
          as: _v2,
          resolvedAs: _v21,
          routeProps: _v15,
          locale: _v9.locale,
          isPreview: _v9.isPreview,
          hasMiddleware: _v25,
          unstable_skipClientCache: _v3.unstable_skipClientCache,
          isQueryUpdating: _v7 && !this.isFallback,
          isMiddlewareRewrite: _v24
        });
        if (_v7 || _v3.shallow || (await this._bfl(_v2, "resolvedAs" in _v0 ? _v0.resolvedAs : void 0, _v9.locale)), "route" in _v0 && _v25) {
          _v22 = _v19 = _v0.route || _v22, _v15.shallow || (_v20 = Object.assign({}, _v0.query || {}, _v20));
          let _v0 = (0, _v27.hasBasePath)(_v18.pathname) ? (0, _v25.removeBasePath)(_v18.pathname) : _v18.pathname;
          if (_v26 && _v19 !== _v0 && Object.keys(_v26).forEach(_v0 => {
            _v26 && _v20[_v0] === _v26[_v0] && delete _v20[_v0];
          }), (0, _v16.isDynamicRoute)(_v19)) {
            let _v0 = !_v15.shallow && _v0.resolvedAs ? _v0.resolvedAs : (0, _v26.addBasePath)((0, _v23.addLocale)(new URL(_v2, location.href).pathname, _v9.locale), !0);
            (0, _v27.hasBasePath)(_v0) && (_v0 = (0, _v25.removeBasePath)(_v0));
            {
              let _v0 = (0, _v13.normalizeLocalePath)(_v0, this.locales);
              _v9.locale = _v0.detectedLocale || _v9.locale, _v0 = _v0.pathname;
            }
            let _v1 = (0, _v19.getRouteRegex)(_v19),
              _v2 = (0, _v18.getRouteMatcher)(_v1)(new URL(_v0, location.href).pathname);
            _v2 && Object.assign(_v20, _v2);
          }
        }
        if ("type" in _v0) if ("redirect-internal" === _v0.type) return this.change(_v0, _v0.newUrl, _v0.newAs, _v3);else return _v51({
          url: _v0.destination,
          router: this
        }), new Promise(() => {});
        let _v1 = _v0.Component;
        if (_v1 && _v1.unstable_scriptLoader && [].concat(_v1.unstable_scriptLoader()).forEach(_v0 => {
          (0, _v10.handleClientScriptLoad)(_v0.props);
        }), (_v0.__N_SSG || _v0.__N_SSP) && _v0.props) {
          if (_v0.props.pageProps && _v0.props.pageProps.__N_REDIRECT) {
            _v3.locale = !1;
            let _v0 = _v0.props.pageProps.__N_REDIRECT;
            if (_v0.startsWith("/") && !1 !== _v0.props.pageProps.__N_REDIRECT_BASE_PATH) {
              let _v0 = (0, _v17.parseRelativeUrl)(_v0);
              _v0.pathname = _v45(_v0.pathname, _v5);
              let {
                url: _v1,
                as: _v2
              } = _v44(this, _v0, _v0);
              return this.change(_v0, _v1, _v2, _v3);
            }
            return _v51({
              url: _v0,
              router: this
            }), new Promise(() => {});
          }
          if (_v9.isPreview = !!_v0.props.__N_PREVIEW, _v0.props.notFound === _v47) {
            let _v0;
            try {
              await this.fetchComponent("/404"), _v0 = "/404";
            } catch (_v0) {
              _v0 = "/_error";
            }
            if (_v0 = await this.getRouteInfo({
              route: _v0,
              pathname: _v0,
              query: _v20,
              as: _v2,
              resolvedAs: _v21,
              routeProps: {
                shallow: !1
              },
              locale: _v9.locale,
              isPreview: _v9.isPreview,
              isNotFound: !0
            }), "type" in _v0) throw Object.defineProperty(Error("Unexpected middleware effect on /404"), "__NEXT_ERROR_CODE", {
              value: "E158",
              enumerable: !1,
              configurable: !0
            });
          }
        }
        _v7 && "/_error" === this.pathname && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && _v0.props?.pageProps && (_v0.props.pageProps.statusCode = 500);
        let _v2 = _v3.shallow && _v9.route === (_v0.route ?? _v22),
          _v3 = _v3.scroll ?? (!_v7 && !_v2),
          _v4 = _v4 ?? (_v3 ? {
            x: 0,
            y: 0
          } : null),
          _v5 = {
            ..._v9,
            route: _v22,
            pathname: _v19,
            query: _v20,
            asPath: _v16,
            isFallback: !1
          };
        if (_v7 && _v27) {
          if (_v0 = await this.getRouteInfo({
            route: this.pathname,
            pathname: this.pathname,
            query: _v20,
            as: _v2,
            resolvedAs: _v21,
            routeProps: {
              shallow: !1
            },
            locale: _v9.locale,
            isPreview: _v9.isPreview,
            isQueryUpdating: _v7 && !this.isFallback
          }), "type" in _v0) throw Object.defineProperty(Error(`Unexpected middleware effect on ${this.pathname}`), "__NEXT_ERROR_CODE", {
            value: "E225",
            enumerable: !1,
            configurable: !0
          });
          "/_error" === this.pathname && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && _v0.props?.pageProps && (_v0.props.pageProps.statusCode = 500);
          try {
            await this.set(_v5, _v0, _v4);
          } catch (_v0) {
            throw (0, _v11.default)(_v0) && _v0.cancelled && _v53.events.emit("routeChangeError", _v0, _v16, _v15), _v0;
          }
          return !0;
        }
        if (_v53.events.emit("beforeHistoryChange", _v2, _v15), this.changeState(_v0, _v1, _v2, _v3), !(_v7 && !_v4 && !_v10 && !_v17 && (0, _v32.compareRouterStates)(_v5, this.state))) {
          try {
            await this.set(_v5, _v0, _v4);
          } catch (_v0) {
            if (_v0.cancelled) _v0.error = _v0.error || _v0;else throw _v0;
          }
          if (_v0.error) throw _v7 || _v53.events.emit("routeChangeError", _v0.error, _v16, _v15), _v0.error;
          _v9.locale && (document.documentElement.lang = _v9.locale), _v7 || _v53.events.emit("routeChangeComplete", _v2, _v15), _v3 && /#.+$/.test(_v2) && this.scrollToHash(_v2);
        }
        return !0;
      } catch (_v0) {
        if ((0, _v11.default)(_v0) && _v0.cancelled) return !1;
        throw _v0;
      }
    }
    changeState(_v0, _v1, _v2, _v3 = {}) {
      ("pushState" !== _v0 || (0, _v15.getURL)() !== _v2) && (this._shallow = _v3.shallow, window.history[_v0]({
        url: _v1,
        as: _v2,
        options: _v3,
        __N: !0,
        key: this._key = "pushState" !== _v0 ? this._key : _v50()
      }, "", _v2));
    }
    async handleRouteInfoError(_v0, _v1, _v2, _v3, _v4, _v5) {
      if (_v0.cancelled) throw _v0;
      if ((0, _v9.isAssetError)(_v0) || _v5) throw _v53.events.emit("routeChangeError", _v0, _v3, _v4), _v51({
        url: _v3,
        router: this
      }), _v41();
      console.error(_v0);
      try {
        let _v0,
          {
            page: _v1,
            styleSheets: _v2
          } = await this.fetchComponent("/_error"),
          _v3 = {
            props: _v0,
            Component: _v1,
            styleSheets: _v2,
            err: _v0,
            error: _v0
          };
        if (!_v3.props) try {
          _v3.props = await this.getInitialProps(_v1, {
            err: _v0,
            pathname: _v1,
            query: _v2
          });
        } catch (_v0) {
          console.error("Error in error page `getInitialProps`: ", _v0), _v3.props = {};
        }
        return _v3;
      } catch (_v0) {
        return this.handleRouteInfoError((0, _v11.default)(_v0) ? _v0 : Object.defineProperty(Error(_v0 + ""), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        }), _v1, _v2, _v3, _v4, !0);
      }
    }
    async getRouteInfo({
      route: _v0,
      pathname: _v1,
      query: _v2,
      as: _v3,
      resolvedAs: _v4,
      routeProps: _v5,
      locale: _v6,
      hasMiddleware: _v7,
      isPreview: _v8,
      unstable_skipClientCache: _v9,
      isQueryUpdating: _v10,
      isMiddlewareRewrite: _v11,
      isNotFound: _v12
    }) {
      let _v13 = _v0;
      try {
        let _v0 = this.components[_v13];
        if (_v5.shallow && _v0 && this.route === _v13) return _v0;
        let _v1 = _v52({
          route: _v13,
          router: this
        });
        _v7 && (_v0 = void 0);
        let _v2 = !_v0 || "initial" in _v0 ? void 0 : _v0,
          _v3 = {
            dataHref: this.pageLoader.getDataHref({
              href: (0, _v20.formatWithValidation)({
                pathname: _v1,
                query: _v2
              }),
              skipInterpolation: !0,
              asPath: _v12 ? "/404" : _v4,
              locale: _v6
            }),
            hasMiddleware: !0,
            isServerRender: this.isSsr,
            parseJSON: !0,
            inflightCache: _v10 ? this.sbc : this.sdc,
            persistCache: !_v8,
            isPrefetch: !1,
            unstable_skipClientCache: _v9,
            isBackground: _v10
          },
          _v4 = _v10 && !_v11 ? null : await _v46({
            fetchData: () => _v49(_v3),
            asPath: _v12 ? "/404" : _v4,
            locale: _v6,
            router: this
          }).catch(_v0 => {
            if (_v10) return null;
            throw _v0;
          });
        if (_v4 && ("/_error" === _v1 || "/404" === _v1) && (_v4.effect = void 0), _v10 && (_v4 ? _v4.json = self.__NEXT_DATA__.props : _v4 = {
          json: self.__NEXT_DATA__.props
        }), _v1(), _v4?.effect?.type === "redirect-internal" || _v4?.effect?.type === "redirect-external") return _v4.effect;
        if (_v4?.effect?.type === "rewrite") {
          let _v0 = (0, _v8.removeTrailingSlash)(_v4.effect.resolvedHref),
            _v1 = await this.pageLoader.getPageList();
          if ((!_v10 || _v1.includes(_v0)) && (_v13 = _v0, _v1 = _v4.effect.resolvedHref, _v2 = {
            ..._v2,
            ..._v4.effect.parsedAs.query
          }, _v4 = (0, _v25.removeBasePath)((0, _v13.normalizeLocalePath)(_v4.effect.parsedAs.pathname, this.locales).pathname), _v0 = this.components[_v13], _v5.shallow && _v0 && this.route === _v13 && !_v7)) return {
            ..._v0,
            route: _v13
          };
        }
        if ((0, _v29.isAPIRoute)(_v13)) return _v51({
          url: _v3,
          router: this
        }), new Promise(() => {});
        let _v5 = _v2 || (await this.fetchComponent(_v13).then(_v0 => ({
            Component: _v0.page,
            styleSheets: _v0.styleSheets,
            __N_SSG: _v0.mod.__N_SSG,
            __N_SSP: _v0.mod.__N_SSP
          }))),
          _v6 = _v4?.response?.headers.get("x-middleware-skip"),
          _v7 = _v5.__N_SSG || _v5.__N_SSP;
        _v6 && _v4?.dataHref && delete this.sdc[_v4.dataHref];
        let {
          props: _v8,
          cacheKey: _v9
        } = await this._getData(async () => {
          if (_v7) {
            if (_v4?.json && !_v6) return {
              cacheKey: _v4.cacheKey,
              props: _v4.json
            };
            let _v0 = _v4?.dataHref ? _v4.dataHref : this.pageLoader.getDataHref({
                href: (0, _v20.formatWithValidation)({
                  pathname: _v1,
                  query: _v2
                }),
                asPath: _v4,
                locale: _v6
              }),
              _v1 = await _v49({
                dataHref: _v0,
                isServerRender: this.isSsr,
                parseJSON: !0,
                inflightCache: _v6 ? {} : this.sdc,
                persistCache: !_v8,
                isPrefetch: !1,
                unstable_skipClientCache: _v9
              });
            return {
              cacheKey: _v1.cacheKey,
              props: _v1.json || {}
            };
          }
          return {
            headers: {},
            props: await this.getInitialProps(_v5.Component, {
              pathname: _v1,
              query: _v2,
              asPath: _v3,
              locale: _v6,
              locales: this.locales,
              defaultLocale: this.defaultLocale
            })
          };
        });
        return _v5.__N_SSP && _v3.dataHref && _v9 && delete this.sdc[_v9], this.isPreview || !_v5.__N_SSG || _v10 || _v49(Object.assign({}, _v3, {
          isBackground: !0,
          persistCache: !1,
          inflightCache: this.sbc
        })).catch(() => {}), _v8.pageProps = Object.assign({}, _v8.pageProps), _v5.props = _v8, _v5.route = _v13, _v5.query = _v2, _v5.resolvedAs = _v4, this.components[_v13] = _v5, _v5;
      } catch (_v0) {
        return this.handleRouteInfoError((0, _v11.getProperError)(_v0), _v1, _v2, _v3, _v5);
      }
    }
    set(_v0, _v1, _v2) {
      return this.state = _v0, this.sub(_v1, this.components["/_app"].Component, _v2);
    }
    beforePopState(_v0) {
      this._bps = _v0;
    }
    onlyAHashChange(_v0) {
      if (!this.asPath) return !1;
      let [_v1, _v2] = this.asPath.split("#", 2),
        [_v3, _v4] = _v0.split("#", 2);
      return !!_v4 && _v1 === _v3 && _v2 === _v4 || _v1 === _v3 && _v2 !== _v4;
    }
    scrollToHash(_v0) {
      let [, _v1 = ""] = _v0.split("#", 2);
      (0, _v37.disableSmoothScrollDuringRouteTransition)(() => {
        if ("" === _v1 || "top" === _v1) return void window.scrollTo(0, 0);
        let _v0 = decodeURIComponent(_v1),
          _v1 = document.getElementById(_v0);
        if (_v1) return void _v1.scrollIntoView();
        let _v2 = document.getElementsByName(_v0)[0];
        _v2 && _v2.scrollIntoView();
      }, {
        onlyHashChange: this.onlyAHashChange(_v0)
      });
    }
    urlIsNew(_v0) {
      return this.asPath !== _v0;
    }
    async prefetch(_v0, _v1 = _v0, _v2 = {}) {
      if ("u" > typeof window && (0, _v34.isBot)(window.navigator.userAgent)) return;
      let _v3 = (0, _v17.parseRelativeUrl)(_v0),
        _v4 = _v3.pathname,
        {
          pathname: _v5,
          query: _v6
        } = _v3,
        _v7 = _v5;
      if (!1 === _v2.locale) {
        _v3.pathname = _v5 = (0, _v13.normalizeLocalePath)(_v5, this.locales).pathname, _v0 = (0, _v20.formatWithValidation)(_v3);
        let _v0 = (0, _v17.parseRelativeUrl)(_v1),
          _v1 = (0, _v13.normalizeLocalePath)(_v0.pathname, this.locales);
        _v0.pathname = _v1.pathname, _v2.locale = _v1.detectedLocale || this.defaultLocale, _v1 = (0, _v20.formatWithValidation)(_v0);
      }
      let _v8 = await this.pageLoader.getPageList(),
        _v9 = _v1,
        _v10 = void 0 !== _v2.locale ? _v2.locale || void 0 : this.locale,
        _v11 = await _v42({
          asPath: _v1,
          locale: _v10,
          router: this
        });
      if (_v1.startsWith("/")) {
        let _v0;
        ({
          __rewrites: _v0
        } = await (0, _v9.getClientBuildManifest)());
        let _v1 = _v3((0, _v26.addBasePath)((0, _v23.addLocale)(_v1, this.locale), !0), _v8, _v0, _v3.query, _v0 => _v45(_v0, _v8), this.locales);
        if (_v1.externalDest) return;
        _v11 || (_v9 = (0, _v24.removeLocale)((0, _v25.removeBasePath)(_v1.asPath), this.locale)), _v1.matchedPage && _v1.resolvedHref && (_v3.pathname = _v5 = _v1.resolvedHref, _v11 || (_v0 = (0, _v20.formatWithValidation)(_v3)));
      }
      _v3.pathname = _v45(_v3.pathname, _v8), (0, _v16.isDynamicRoute)(_v3.pathname) && (_v5 = _v3.pathname, _v3.pathname = _v5, Object.assign(_v6, (0, _v18.getRouteMatcher)((0, _v19.getRouteRegex)(_v3.pathname))((0, _v22.parsePath)(_v1).pathname) || {}), _v11 || (_v0 = (0, _v20.formatWithValidation)(_v3)));
      let _v12 = await _v46({
        fetchData: () => _v49({
          dataHref: this.pageLoader.getDataHref({
            href: (0, _v20.formatWithValidation)({
              pathname: _v7,
              query: _v6
            }),
            skipInterpolation: !0,
            asPath: _v9,
            locale: _v10
          }),
          hasMiddleware: !0,
          isServerRender: !1,
          parseJSON: !0,
          inflightCache: this.sdc,
          persistCache: !this.isPreview,
          isPrefetch: !0
        }),
        asPath: _v1,
        locale: _v10,
        router: this
      });
      if (_v12?.effect.type === "rewrite" && (_v3.pathname = _v12.effect.resolvedHref, _v5 = _v12.effect.resolvedHref, _v6 = {
        ..._v6,
        ..._v12.effect.parsedAs.query
      }, _v9 = _v12.effect.parsedAs.pathname, _v0 = (0, _v20.formatWithValidation)(_v3)), _v12?.effect.type === "redirect-external") return;
      let _v13 = (0, _v8.removeTrailingSlash)(_v5);
      (await this._bfl(_v1, _v9, _v2.locale, !0)) && (this.components[_v4] = {
        __appRouter: !0
      }), await Promise.all([this.pageLoader._isSsg(_v13).then(_v0 => !!_v0 && _v49({
        dataHref: _v12?.json ? _v12?.dataHref : this.pageLoader.getDataHref({
          href: _v0,
          asPath: _v9,
          locale: _v10
        }),
        isServerRender: !1,
        parseJSON: !0,
        inflightCache: this.sdc,
        persistCache: !this.isPreview,
        isPrefetch: !0,
        unstable_skipClientCache: _v2.unstable_skipClientCache || _v2.priority && !0
      }).then(() => !1).catch(() => !1)), this.pageLoader[_v2.priority ? "loadPage" : "prefetch"](_v13)]);
    }
    async fetchComponent(_v0) {
      let _v1 = _v52({
        route: _v0,
        router: this
      });
      try {
        let _v0 = await this.pageLoader.loadPage(_v0);
        return _v1(), _v0;
      } catch (_v0) {
        throw _v1(), _v0;
      }
    }
    _getData(_v0) {
      let _v1 = !1,
        _v2 = () => {
          _v1 = !0;
        };
      return this.clc = _v2, _v0().then(_v0 => {
        if (_v2 === this.clc && (this.clc = null), _v1) {
          let _v0 = Object.defineProperty(Error("Loading initial props cancelled"), "__NEXT_ERROR_CODE", {
            value: "E405",
            enumerable: !1,
            configurable: !0
          });
          throw _v0.cancelled = !0, _v0;
        }
        return _v0;
      });
    }
    getInitialProps(_v0, _v1) {
      let {
          Component: _v2
        } = this.components["/_app"],
        _v3 = this._wrapApp(_v2);
      return _v1.AppTree = _v3, (0, _v15.loadGetInitialProps)(_v2, {
        AppTree: _v3,
        Component: _v0,
        router: this,
        ctx: _v1
      });
    }
    get route() {
      return this.state.route;
    }
    get pathname() {
      return this.state.pathname;
    }
    get query() {
      return this.state.query;
    }
    get asPath() {
      return this.state.asPath;
    }
    get locale() {
      return this.state.locale;
    }
    get isFallback() {
      return this.state.isFallback;
    }
    get isPreview() {
      return this.state.isPreview;
    }
  }
}