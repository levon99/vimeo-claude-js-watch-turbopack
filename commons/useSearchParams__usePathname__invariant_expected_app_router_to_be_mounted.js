{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    ReadonlyURLSearchParams: function () {
      return _v7.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return _v12.RedirectType;
    },
    ServerInsertedHTMLContext: function () {
      return _v10.ServerInsertedHTMLContext;
    },
    forbidden: function () {
      return _v12.forbidden;
    },
    notFound: function () {
      return _v12.notFound;
    },
    permanentRedirect: function () {
      return _v12.permanentRedirect;
    },
    redirect: function () {
      return _v12.redirect;
    },
    unauthorized: function () {
      return _v12.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return _v11.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function () {
      return _v12.unstable_rethrow;
    },
    useParams: function () {
      return _v19;
    },
    usePathname: function () {
      return _v17;
    },
    useRouter: function () {
      return _v18;
    },
    useSearchParams: function () {
      return _v16;
    },
    useSelectedLayoutSegment: function () {
      return _v21;
    },
    useSelectedLayoutSegments: function () {
      return _v20;
    },
    useServerInsertedHTML: function () {
      return _v10.useServerInsertedHTML;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0)._(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    {
      instrumentParamsForClientValidation: _v13,
      instrumentSearchParamsForClientValidation: _v14,
      expectCompleteParamsInClientValidation: _v15
    } = {};
  function _v16() {
    _v9.useDynamicSearchParams?.("useSearchParams()");
    let _v0 = (0, _v5.useContext)(_v7.SearchParamsContext);
    return (0, _v5.useMemo)(() => _v0 ? new _v7.ReadonlyURLSearchParams(_v0) : null, [_v0]);
  }
  function _v17() {
    return _v9.useDynamicRouteParams?.("usePathname()"), (0, _v5.useContext)(_v7.PathnameContext);
  }
  function _v18() {
    let _v0 = (0, _v5.useContext)(_v6.AppRouterContext);
    if (null === _v0) throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
      value: "E238",
      enumerable: !1,
      configurable: !0
    });
    let _v1 = (0, _v5.useContext)(_v6.LayoutRouterContext),
      _v2 = _v1?.parentCacheNode.bfcacheId ?? 0;
    return (0, _v5.useMemo)(() => ({
      back: _v0.back,
      forward: _v0.forward,
      refresh: _v0.refresh,
      hmrRefresh: _v0.hmrRefresh,
      push: _v0.push,
      replace: _v0.replace,
      prefetch: _v0.prefetch,
      experimental_gesturePush: _v0.experimental_gesturePush,
      bfcacheId: "_b_" + _v2 + "_"
    }), [_v0, _v2]);
  }
  function _v19() {
    return _v9.useDynamicRouteParams?.("useParams()"), (0, _v5.useContext)(_v7.PathParamsContext);
  }
  function _v20(_v0 = "children") {
    _v9.useDynamicRouteParams?.("useSelectedLayoutSegments()");
    let _v1 = (0, _v5.useContext)(_v6.LayoutRouterContext);
    return _v1 ? (0, _v8.getSelectedLayoutSegmentPath)(_v1.parentTree, _v0) : null;
  }
  function _v21(_v0 = "children") {
    _v9.useDynamicRouteParams?.("useSelectedLayoutSegment()"), (0, _v5.useContext)(_v7.NavigationPromisesContext);
    let _v1 = _v20(_v0);
    return (0, _v8.computeSelectedLayoutSegment)(_v1, _v0);
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}