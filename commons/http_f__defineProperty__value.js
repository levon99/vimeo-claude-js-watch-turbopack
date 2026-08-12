{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    PathnameContextProviderAdapter: function () {
      return _v15;
    },
    adaptForAppRouterInstance: function () {
      return _v12;
    },
    adaptForPathParams: function () {
      return _v14;
    },
    adaptForSearchParams: function () {
      return _v13;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v5._(_v0.r(0)),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0);
  function _v12(_v0) {
    return {
      back() {
        _v0.back();
      },
      forward() {
        _v0.forward();
      },
      refresh() {
        _v0.reload();
      },
      hmrRefresh() {},
      push(_v0, {
        scroll: _v1
      } = {}) {
        _v0.push(_v0, void 0, {
          scroll: _v1
        });
      },
      replace(_v0, {
        scroll: _v1
      } = {}) {
        _v0.replace(_v0, void 0, {
          scroll: _v1
        });
      },
      prefetch(_v0) {
        _v0.prefetch(_v0);
      }
    };
  }
  function _v13(_v0) {
    return _v0.isReady && _v0.query ? (0, _v10.asPathToSearchParams)(_v0.asPath) : new URLSearchParams();
  }
  function _v14(_v0) {
    if (!_v0.isReady || !_v0.query) return null;
    let _v1 = {};
    for (let _v0 of Object.keys((0, _v11.getRouteRegex)(_v0.pathname).groups)) _v1[_v0] = _v0.query[_v0];
    return _v1;
  }
  function _v15({
    children: _v0,
    router: _v1,
    ..._v2
  }) {
    let _v3 = (0, _v7.useRef)(_v2.isAutoExport),
      _v4 = (0, _v7.useMemo)(() => {
        let _v0,
          _v1 = _v3.current;
        if (_v1 && (_v3.current = !1), (0, _v9.isDynamicRoute)(_v1.pathname) && (_v1.isFallback || _v1 && !_v1.isReady)) return null;
        try {
          _v0 = new URL(_v1.asPath, "http://f");
        } catch (_v0) {
          return "/";
        }
        return _v0.pathname;
      }, [_v1.asPath, _v1.isFallback, _v1.isReady, _v1.pathname]);
    return (0, _v6.jsx)(_v8.PathnameContext.Provider, {
      value: _v4,
      children: _v0
    });
  }
}