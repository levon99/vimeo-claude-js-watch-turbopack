{
  "use strict";

  let _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v15 = {
    emitter: function () {
      return _v42;
    },
    hydrate: function () {
      return _v66;
    },
    initialize: function () {
      return _v45;
    },
    router: function () {
      return _v3;
    },
    version: function () {
      return _v41;
    }
  };
  for (var _v16 in _v15) Object.defineProperty(_v2, _v16, {
    enumerable: !0,
    get: _v15[_v16]
  });
  let _v17 = _v0.r(0),
    _v18 = _v0.r(0);
  _v0.r(0);
  let _v19 = _v17._(_v0.r(0)),
    _v20 = _v17._(_v0.r(0)),
    _v21 = _v0.r(0),
    _v22 = _v17._(_v0.r(0)),
    _v23 = _v0.r(0),
    _v24 = _v0.r(0),
    _v25 = _v0.r(0),
    _v26 = _v0.r(0),
    _v27 = _v0.r(0),
    _v28 = _v0.r(0),
    _v29 = _v17._(_v0.r(0)),
    _v30 = _v17._(_v0.r(0)),
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
  _v0.r(0), _v0.r(0);
  let _v41 = "16.3.1",
    _v42 = (0, _v22.default)(),
    _v43 = !1;
  class _v44 extends _v19.default.Component {
    componentDidCatch(_v0, _v1) {
      this.props.fn(_v0, _v1);
    }
    componentDidMount() {
      this.scrollToHash(), _v3.isSsr && (_v4.isFallback || _v4.nextExport && ((0, _v25.isDynamicRoute)(_v3.pathname) || location.search || 1) || _v4.props && _v4.props.__N_SSG && (location.search || 1)) && _v3.replace(_v3.pathname + "?" + String((0, _v26.assign)((0, _v26.urlQueryToSearchParams)(_v3.query), new URLSearchParams(location.search))), _v5, {
        _h: 1,
        shallow: !_v4.isFallback && !_v43
      }).catch(_v0 => {
        if (!_v0.cancelled) throw _v0;
      });
    }
    componentDidUpdate() {
      this.scrollToHash();
    }
    scrollToHash() {
      let {
        hash: _v0
      } = location;
      if (!(_v0 = _v0 && _v0.substring(1))) return;
      let _v1 = document.getElementById(_v0);
      _v1 && setTimeout(() => _v1.scrollIntoView(), 0);
    }
    render() {
      return this.props.children;
    }
  }
  async function _v45(_v0 = {}) {
    _v4 = JSON.parse(document.getElementById("__NEXT_DATA__").textContent), window.__NEXT_DATA__ = _v4, _v14 = _v4.defaultLocale;
    let _v1 = _v4.assetPrefix || "";
    self.__next_set_public_path__(`${_v1}/_next/`), _v5 = (0, _v27.getURL)(), (0, _v36.hasBasePath)(_v5) && (_v5 = (0, _v35.removeBasePath)(_v5));
    {
      let {
          normalizeLocalePath: _v0
        } = _v0.r(0),
        {
          detectDomainLocale: _v1
        } = _v0.r(0),
        {
          parseRelativeUrl: _v2
        } = _v0.r(0),
        {
          formatUrl: _v3
        } = _v0.r(0);
      if (_v4.locales) {
        let _v0 = _v2(_v5),
          _v1 = _v0(_v0.pathname, _v4.locales);
        _v1.detectedLocale ? (_v0.pathname = _v1.pathname, _v5 = _v3(_v0)) : _v14 = _v4.locale;
        let _v2 = _v1(!1, window.location.hostname);
        _v2 && (_v14 = _v2.defaultLocale);
      }
    }
    if (_v4.scriptLoader) {
      let {
        initScriptLoader: _v0
      } = _v0.r(0);
      _v0(_v4.scriptLoader);
    }
    _v6 = new _v30.default(_v4.buildId, _v1);
    let _v2 = ([_v0, _v1]) => _v6.routeLoader.onEntrypoint(_v0, _v1);
    return window.__NEXT_P && window.__NEXT_P.map(_v0 => setTimeout(() => _v2(_v0), 0)), window.__NEXT_P = [], window.__NEXT_P.push = _v2, (_v8 = (0, _v29.default)()).getIsSsr = () => _v3.isSsr, _v7 = document.getElementById("__next"), {
      assetPrefix: _v1
    };
  }
  function _v46(_v0, _v1) {
    return (0, _v18.jsx)(_v0, {
      ..._v1
    });
  }
  function _v47({
    children: _v0
  }) {
    let _v1 = _v19.default.useMemo(() => (0, _v38.adaptForAppRouterInstance)(_v3), []);
    return (0, _v18.jsx)(_v44, {
      fn: _v0 => _v49({
        App: _v11,
        err: _v0
      }).catch(_v0 => console.error("Error rendering page: ", _v0)),
      children: (0, _v18.jsx)(_v37.AppRouterContext.Provider, {
        value: _v1,
        children: (0, _v18.jsx)(_v39.SearchParamsContext.Provider, {
          value: (0, _v38.adaptForSearchParams)(_v3),
          children: (0, _v18.jsx)(_v38.PathnameContextProviderAdapter, {
            router: _v3,
            isAutoExport: self.__NEXT_DATA__.autoExport ?? !1,
            children: (0, _v18.jsx)(_v39.PathParamsContext.Provider, {
              value: (0, _v38.adaptForPathParams)(_v3),
              children: (0, _v18.jsx)(_v23.RouterContext.Provider, {
                value: (0, _v32.makePublicRouterInstance)(_v3),
                children: (0, _v18.jsx)(_v21.HeadManagerContext.Provider, {
                  value: _v8,
                  children: (0, _v18.jsx)(_v34.ImageConfigContext.Provider, {
                    value: {
                      deviceSizes: [640, 750, 828, 0, 0, 0, 0, 0],
                      imageSizes: [32, 48, 64, 96, 128, 256, 384],
                      qualities: [75],
                      path: "/_next/image",
                      loader: "default",
                      dangerouslyAllowSVG: !1,
                      unoptimized: !1
                    },
                    children: _v0
                  })
                })
              })
            })
          })
        })
      })
    });
  }
  let _v48 = _v0 => _v0 => {
    let _v1 = {
      ..._v0,
      Component: _v13,
      err: _v4.err,
      router: _v3
    };
    return (0, _v18.jsx)(_v47, {
      children: _v46(_v0, _v1)
    });
  };
  function _v49(_v0) {
    let {
      App: _v1,
      err: _v2
    } = _v0;
    return console.error(_v2), console.error("A client-side exception has occurred, see here for more info: https://nextjs.org/docs/messages/client-side-exception-occurred"), _v6.loadPage("/_error").then(({
      page: _v0,
      styleSheets: _v1
    }) => _v9?.Component === _v0 ? _v0.A(0).then(_v0 => _v0.A(0).then(_v0 => (_v0.App = _v1 = _v0.default, _v0))).then(_v0 => ({
      ErrorComponent: _v0.default,
      styleSheets: []
    })) : {
      ErrorComponent: _v0,
      styleSheets: _v1
    }).then(({
      ErrorComponent: _v0,
      styleSheets: _v1
    }) => {
      let _v2 = _v48(_v1),
        _v3 = {
          Component: _v0,
          AppTree: _v2,
          router: _v3,
          ctx: {
            err: _v2,
            pathname: _v4.page,
            query: _v4.query,
            asPath: _v5,
            AppTree: _v2
          }
        };
      return Promise.resolve(_v0.props?.err ? _v0.props : (0, _v27.loadGetInitialProps)(_v1, _v3)).then(_v0 => _v64({
        ..._v0,
        err: _v2,
        Component: _v0,
        styleSheets: _v1,
        props: _v0
      }));
    });
  }
  function _v50({
    callback: _v0
  }) {
    return _v19.default.useLayoutEffect(() => _v0(), [_v0]), null;
  }
  let _v51 = "beforeRender",
    _v52 = "afterRender",
    _v53 = "afterHydrate",
    _v54 = "routeChange",
    _v55 = "Next.js-hydration",
    _v56 = "Next.js-route-change-to-render",
    _v57 = "Next.js-render",
    _v58 = null,
    _v59 = !0;
  function _v60() {
    [_v51, _v53, _v52, _v54].forEach(_v0 => performance.clearMarks(_v0));
  }
  function _v61() {
    _v27.ST && (performance.mark(_v53), performance.getEntriesByName(_v51, "mark").length && (performance.measure("Next.js-before-hydration", "navigationStart", _v51), performance.measure(_v55, _v51, _v53)), _v12 && performance.getEntriesByName(_v55).forEach(_v12), _v60());
  }
  function _v62() {
    if (!_v27.ST) return;
    performance.mark(_v52);
    let _v0 = performance.getEntriesByName(_v54, "mark");
    _v0.length && (performance.getEntriesByName(_v51, "mark").length && (performance.measure(_v56, _v0[0].name, _v51), performance.measure(_v57, _v51, _v52), _v12 && (performance.getEntriesByName(_v57).forEach(_v12), performance.getEntriesByName(_v56).forEach(_v12))), _v60(), [_v56, _v57].forEach(_v0 => performance.clearMeasures(_v0)));
  }
  function _v63({
    callbacks: _v0,
    children: _v1
  }) {
    return _v19.default.useLayoutEffect(() => _v0.forEach(_v0 => _v0()), [_v0]), _v1;
  }
  function _v64(_v0) {
    var _v1, _v2;
    let _v3,
      _v4,
      {
        App: _v5,
        Component: _v6,
        props: _v7,
        err: _v8
      } = _v0,
      _v9 = "initial" in _v0 ? void 0 : _v0.styleSheets;
    _v6 = _v6 || _v9.Component;
    let _v10 = {
      ...(_v7 = _v7 || _v9.props),
      Component: _v6,
      err: _v8,
      router: _v3
    };
    _v9 = _v10;
    let _v11 = new Promise((_v0, _v1) => {
      _v10 && _v10(), _v4 = () => {
        _v10 = null, _v0();
      }, _v10 = () => {
        _v10 = null;
        let _v0 = Object.defineProperty(Error("Cancel rendering route"), "__NEXT_ERROR_CODE", {
          value: "E503",
          enumerable: !1,
          configurable: !0
        });
        _v0.cancelled = !0, _v1(_v0);
      };
    });
    function _v12() {
      _v4();
    }
    !function () {
      let _v0;
      if (!_v9) return;
      let _v1 = new Set((_v0 = document.querySelectorAll("style[data-n-href]"), [].slice.call(_v0)).map(_v0 => _v0.getAttribute("data-n-href"))),
        _v2 = document.querySelector("noscript[data-n-css]"),
        _v3 = _v2?.getAttribute("data-n-css");
      _v9.forEach(({
        href: _v0,
        text: _v1
      }) => {
        if (!_v1.has(_v0)) {
          let _v0 = document.createElement("style");
          _v0.setAttribute("data-n-href", _v0), _v0.setAttribute("media", "x"), _v3 && _v0.setAttribute("nonce", _v3), document.head.appendChild(_v0), _v0.appendChild(document.createTextNode(_v1));
        }
      });
    }();
    let _v13 = (0, _v18.jsxs)(_v18.Fragment, {
      children: [(0, _v18.jsx)(_v50, {
        callback: function () {
          if (_v0.scroll) {
            let {
              x: _v0,
              y: _v1
            } = _v0.scroll;
            (0, _v24.disableSmoothScrollDuringRouteTransition)(() => {
              window.scrollTo(_v0, _v1);
            });
          }
        }
      }), (0, _v18.jsxs)(_v47, {
        children: [_v46(_v5, _v10), (0, _v18.jsx)(_v28.Portal, {
          type: "next-route-announcer",
          children: (0, _v18.jsx)(_v31.RouteAnnouncer, {})
        })]
      })]
    });
    return _v1 = _v7, _v2 = _v0 => (0, _v18.jsx)(_v63, {
      callbacks: [_v0, _v12],
      children: _v13
    }), _v27.ST && performance.mark(_v51), _v3 = _v2(_v59 ? _v61 : _v62), _v58 ? (0, _v19.default.startTransition)(() => {
      _v58.render(_v3);
    }) : (_v58 = _v20.default.hydrateRoot(_v1, _v3, {
      onRecoverableError: _v40.onRecoverableError
    }), _v59 = !1), _v11;
  }
  async function _v65(_v0) {
    if (_v0.err && (void 0 === _v0.Component || !_v0.isHydratePass)) return void (await _v49(_v0));
    try {
      await _v64(_v0);
    } catch (_v0) {
      let _v1 = (0, _v33.getProperError)(_v0);
      if (_v1.cancelled) throw _v1;
      await _v49({
        ..._v0,
        err: _v1
      });
    }
  }
  async function _v66(_v0) {
    let _v1 = _v4.err;
    try {
      let _v0 = await _v6.routeLoader.whenEntrypoint("/_app");
      if ("error" in _v0) throw _v0.error;
      let {
        component: _v1,
        exports: _v2
      } = _v0;
      _v11 = _v1, _v2 && _v2.reportWebVitals && (_v12 = ({
        id: _v0,
        name: _v1,
        startTime: _v2,
        value: _v3,
        duration: _v4,
        entryType: _v5,
        entries: _v6,
        attribution: _v7
      }) => {
        let _v8,
          _v9 = `${Date.now()}-${Math.floor(Math.random() * (0 - 1)) + 0}`;
        _v6 && _v6.length && (_v8 = _v6[0].startTime);
        let _v10 = {
          id: _v0 || _v9,
          name: _v1,
          startTime: _v2 || _v8,
          value: null == _v3 ? _v4 : _v3,
          label: "mark" === _v5 || "measure" === _v5 ? "custom" : "web-vital"
        };
        _v7 && (_v10.attribution = _v7), _v2.reportWebVitals(_v10);
      });
      let _v3 = await _v6.routeLoader.whenEntrypoint(_v4.page);
      if ("error" in _v3) throw _v3.error;
      _v13 = _v3.component;
    } catch (_v0) {
      _v1 = (0, _v33.getProperError)(_v0);
    }
    window.__NEXT_PRELOADREADY && (await window.__NEXT_PRELOADREADY(_v4.dynamicIds)), _v3 = (0, _v32.createRouter)(_v4.page, _v4.query, _v5, {
      initialProps: _v4.props,
      pageLoader: _v6,
      App: _v11,
      Component: _v13,
      wrapApp: _v48,
      err: _v1,
      isFallback: !!_v4.isFallback,
      subscription: (_v0, _v1, _v2) => _v65(Object.assign({}, _v0, {
        App: _v1,
        scroll: _v2
      })),
      locale: _v4.locale,
      locales: _v4.locales,
      defaultLocale: _v14,
      domainLocales: _v4.domainLocales,
      isPreview: _v4.isPreview
    }), _v43 = await _v3._initialMatchesMiddlewarePromise;
    let _v2 = {
      App: _v11,
      initial: !0,
      Component: _v13,
      props: _v4.props,
      err: _v1,
      isHydratePass: !0
    };
    _v0?.beforeRender && (await _v0.beforeRender()), _v65(_v2);
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}