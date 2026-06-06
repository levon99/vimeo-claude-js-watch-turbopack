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
      return _v11.RedirectType;
    },
    ServerInsertedHTMLContext: function () {
      return _v9.ServerInsertedHTMLContext;
    },
    forbidden: function () {
      return _v11.forbidden;
    },
    notFound: function () {
      return _v11.notFound;
    },
    permanentRedirect: function () {
      return _v11.permanentRedirect;
    },
    redirect: function () {
      return _v11.redirect;
    },
    unauthorized: function () {
      return _v11.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return _v10.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function () {
      return _v11.unstable_rethrow;
    },
    useParams: function () {
      return _v20;
    },
    usePathname: function () {
      return _v18;
    },
    useRouter: function () {
      return _v19;
    },
    useSearchParams: function () {
      return _v17;
    },
    useSelectedLayoutSegment: function () {
      return _v22;
    },
    useSelectedLayoutSegments: function () {
      return _v21;
    },
    useServerInsertedHTML: function () {
      return _v9.useServerInsertedHTML;
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
    _v12 = "u" < typeof window ? _v0.r(0).useDynamicRouteParams : void 0,
    _v13 = "u" < typeof window ? _v0.r(0).useDynamicSearchParams : void 0,
    {
      instrumentParamsForClientValidation: _v14,
      instrumentSearchParamsForClientValidation: _v15,
      expectCompleteParamsInClientValidation: _v16
    } = {};
  function _v17() {
    _v13?.("useSearchParams()");
    let _v0 = (0, _v5.useContext)(_v7.SearchParamsContext);
    return (0, _v5.useMemo)(() => _v0 ? new _v7.ReadonlyURLSearchParams(_v0) : null, [_v0]);
  }
  function _v18() {
    return _v12?.("usePathname()"), (0, _v5.useContext)(_v7.PathnameContext);
  }
  function _v19() {
    let _v0 = (0, _v5.useContext)(_v6.AppRouterContext);
    if (null === _v0) throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
      value: "E238",
      enumerable: !1,
      configurable: !0
    });
    return _v0;
  }
  function _v20() {
    return _v12?.("useParams()"), (0, _v5.useContext)(_v7.PathParamsContext);
  }
  function _v21(_v0 = "children") {
    _v12?.("useSelectedLayoutSegments()");
    let _v1 = (0, _v5.useContext)(_v6.LayoutRouterContext);
    return _v1 ? (0, _v8.getSelectedLayoutSegmentPath)(_v1.parentTree, _v0) : null;
  }
  function _v22(_v0 = "children") {
    _v12?.("useSelectedLayoutSegment()"), (0, _v5.useContext)(_v7.NavigationPromisesContext);
    let _v1 = _v21(_v0);
    return (0, _v8.computeSelectedLayoutSegment)(_v1, _v0);
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}