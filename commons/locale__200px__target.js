{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    default: function () {
      return _v24;
    },
    useLinkStatus: function () {
      return _v23;
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
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0);
  _v0.r(0);
  let _v18 = new Set();
  function _v19(_v0, _v1, _v2, _v3) {
    if (!("u" < typeof window) && (0, _v9.isLocalURL)(_v1)) {
      if (!_v3.bypassPrefetchedCheck) {
        let _v0 = _v1 + "%" + _v2 + "%" + (void 0 !== _v3.locale ? _v3.locale : "locale" in _v0 ? _v0.locale : void 0);
        if (_v18.has(_v0)) return;
        _v18.add(_v0);
      }
      _v0.prefetch(_v1, _v2, _v3).catch(_v0 => {});
    }
  }
  function _v20(_v0) {
    return "string" == typeof _v0 ? _v0 : (0, _v10.formatUrl)(_v0);
  }
  let _v21 = _v7.default.forwardRef(function (_v0, _v1) {
      let _v2,
        _v3,
        {
          href: _v4,
          as: _v5,
          children: _v6,
          prefetch: _v7 = null,
          passHref: _v8,
          replace: _v9,
          shallow: _v10,
          scroll: _v11,
          locale: _v12,
          onClick: _v13,
          onNavigate: _v14,
          onMouseEnter: _v15,
          onTouchStart: _v16,
          legacyBehavior: _v17 = !1,
          transitionTypes: _v18,
          ..._v19
        } = _v0;
      _v2 = _v6, _v17 && ("string" == typeof _v2 || "number" == typeof _v2) && (_v2 = (0, _v6.jsx)("a", {
        children: _v2
      }));
      let _v20 = _v7.default.useContext(_v13.RouterContext),
        _v21 = !1 !== _v7,
        {
          href: _v22,
          as: _v23
        } = _v7.default.useMemo(() => {
          if (!_v20) {
            let _v0 = _v20(_v4);
            return {
              href: _v0,
              as: _v5 ? _v20(_v5) : _v0
            };
          }
          let [_v0, _v1] = (0, _v8.resolveHref)(_v20, _v4, !0);
          return {
            href: _v0,
            as: _v5 ? (0, _v8.resolveHref)(_v20, _v5) : _v1 || _v0
          };
        }, [_v20, _v4, _v5]),
        _v24 = _v7.default.useRef(_v22),
        _v25 = _v7.default.useRef(_v23);
      _v17 && (_v3 = _v7.default.Children.only(_v2));
      let _v26 = _v17 ? _v3 && "object" == typeof _v3 && _v3.ref : _v1,
        [_v27, _v28, _v29] = (0, _v14.useIntersection)({
          rootMargin: "200px"
        }),
        _v30 = _v7.default.useCallback(_v0 => {
          (_v25.current !== _v23 || _v24.current !== _v22) && (_v29(), _v25.current = _v23, _v24.current = _v22), _v27(_v0);
        }, [_v23, _v22, _v29, _v27]),
        _v31 = (0, _v17.useMergedRef)(_v30, _v26);
      _v7.default.useEffect(() => {
        !_v20 || _v28 && _v21 && _v19(_v20, _v22, _v23, {
          locale: _v12
        });
      }, [_v23, _v22, _v28, _v12, _v21, _v20?.locale, _v20]);
      let _v32 = {
        ref: _v31,
        onClick(_v0) {
          _v17 || "function" != typeof _v13 || _v13(_v0), _v17 && _v3.props && "function" == typeof _v3.props.onClick && _v3.props.onClick(_v0), !_v20 || _v0.defaultPrevented || function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
            let _v9,
              {
                nodeName: _v10
              } = _v0.currentTarget;
            if (!("A" === _v10.toUpperCase() && ((_v9 = _v0.currentTarget.getAttribute("target")) && "_self" !== _v9 || _v0.metaKey || _v0.ctrlKey || _v0.shiftKey || _v0.altKey || _v0.nativeEvent && 2 === _v0.nativeEvent.which) || _v0.currentTarget.hasAttribute("download"))) {
              if (!(0, _v9.isLocalURL)(_v2)) {
                _v4 && (_v0.preventDefault(), location.replace(_v2));
                return;
              }
              _v0.preventDefault(), (() => {
                if (_v8) {
                  let _v0 = !1;
                  if (_v8({
                    preventDefault: () => {
                      _v0 = !0;
                    }
                  }), _v0) return;
                }
                let _v0 = _v6 ?? !0;
                "beforePopState" in _v1 ? _v1[_v4 ? "replace" : "push"](_v2, _v3, {
                  shallow: _v5,
                  locale: _v7,
                  scroll: _v0
                }) : _v1[_v4 ? "replace" : "push"](_v3 || _v2, {
                  scroll: _v0
                });
              })();
            }
          }(_v0, _v20, _v22, _v23, _v9, _v10, _v11, _v12, _v14);
        },
        onMouseEnter(_v0) {
          _v17 || "function" != typeof _v15 || _v15(_v0), _v17 && _v3.props && "function" == typeof _v3.props.onMouseEnter && _v3.props.onMouseEnter(_v0), _v20 && _v19(_v20, _v22, _v23, {
            locale: _v12,
            priority: !0,
            bypassPrefetchedCheck: !0
          });
        },
        onTouchStart: function (_v0) {
          _v17 || "function" != typeof _v16 || _v16(_v0), _v17 && _v3.props && "function" == typeof _v3.props.onTouchStart && _v3.props.onTouchStart(_v0), _v20 && _v19(_v20, _v22, _v23, {
            locale: _v12,
            priority: !0,
            bypassPrefetchedCheck: !0
          });
        }
      };
      if ((0, _v11.isAbsoluteUrl)(_v23)) _v32.href = _v23;else if (!_v17 || _v8 || "a" === _v3.type && !("href" in _v3.props)) {
        let _v0 = void 0 !== _v12 ? _v12 : _v20?.locale;
        _v32.href = _v20?.isLocaleDomain && (0, _v15.getDomainLocale)(_v23, _v0, _v20?.locales, _v20?.domainLocales) || (0, _v16.addBasePath)((0, _v12.addLocale)(_v23, _v0, _v20?.defaultLocale));
      }
      return _v17 ? _v7.default.cloneElement(_v3, _v32) : (0, _v6.jsx)("a", {
        ..._v19,
        ..._v32,
        children: _v2
      });
    }),
    _v22 = (0, _v7.createContext)({
      pending: !1
    }),
    _v23 = () => (0, _v7.useContext)(_v22),
    _v24 = _v21;
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}