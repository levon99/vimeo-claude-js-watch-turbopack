{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = [["/satellite/auth-complete", "satellite_handoff"], ["/satellite-onboarding", "satellite_handoff"], ["/sso-login-complete", "sso_handoff"]],
    _v6 = new Set(["help.vimeo.com", "vimeosupport.zendesk.com"]);
  var _v7 = _v0.i(0);
  let _v8 = new Set(Object.values(_v7.AUTH_ENTRY_PAIRS).map(_v0 => _v0[0])),
    _v9 = new Set(Object.values(_v7.AUTH_ENTRY_PAIRS).map(_v0 => _v0[1])),
    _v10 = (_v0, _v1) => _v0.some(_v0 => (void 0 === _v0.originRoutes || null !== _v1.originRoute && _v0.originRoutes.includes(_v1.originRoute)) && (void 0 === _v0.pairs || _v0.pairs.some(_v0 => (void 0 === _v0.surface || !!_v8.has(_v0.surface)) && (void 0 === _v0.trigger || !!_v9.has(_v0.trigger)) && (void 0 === _v0.surface || void 0 === _v0.trigger || null !== (0, _v7.findAuthEntry)(_v0.surface, _v0.trigger)) && (void 0 === _v0.surface || _v0.surface === _v1.surface) && (void 0 === _v0.trigger || _v0.trigger === _v1.trigger))) && (void 0 === _v0.surfaceTypes || _v0.surfaceTypes.includes(_v1.surfaceType)));
  var _v11 = _v0.i(0);
  let _v12 = "https://vimeo.com",
    _v13 = "signup",
    _v14 = _v0 => {
      let _v1;
      try {
        _v1 = new URL(_v0, _v12);
      } catch {
        return _v0;
      }
      return "/create/templates" === _v1.pathname && _v1.searchParams.has(_v13) ? (_v1.searchParams.delete(_v13), _v0.startsWith("/") ? `${_v1.pathname}${_v1.search}${_v1.hash}` : _v1.toString()) : _v0;
    },
    _v15 = _v0 => {
      let _v1;
      try {
        _v1 = new URL(_v0, _v12);
      } catch {
        return null;
      }
      return _v1.pathname;
    },
    _v16 = {
      clip_page: [{
        originRoutes: ["/video/:clipId"]
      }],
      all: [{}]
    },
    _v17 = _v0 => (0, _v11.isOnboardingMode)(_v0) ? _v0 : null;
  var _v18 = _v0.i(0);
  _v0.s(["useAuthRoutingPolicy", 0, function ({
    attribution: _v0,
    originUrl: _v1,
    explicitRedirect: _v2,
    authHostPathname: _v3,
    completionSupported: _v4 = !0,
    allowRoutedCompletion: _v5 = !1,
    emitResolved: _v6 = !0
  }) {
    let _v7,
      {
        post_auth_routing_targets: _v8,
        post_auth_routing_mode_desktop: _v9,
        post_auth_routing_mode_mobile: _v10
      } = (0, _v3.useOrionSettingsFields)(["post_auth_routing_targets", "post_auth_routing_mode_desktop", "post_auth_routing_mode_mobile"]),
      _v11 = (0, _v2.useOrionLoading)(),
      [_v12, _v13] = (0, _v1.useState)({
        status: "pending"
      }),
      [_v14, _v15] = (0, _v1.useState)(null),
      [_v16, _v17] = (0, _v1.useState)(!1),
      _v18 = (0, _v1.useRef)(null);
    null === _v18.current && (_v18.current = {
      promise: new Promise(_v0 => {
        _v7 = _v0;
      }),
      resolve: _v7
    });
    let _v19 = (0, _v1.useRef)(!1),
      _v20 = (0, _v1.useRef)(null),
      _v21 = (0, _v1.useRef)(!1),
      {
        trackRoutingResolved: _v22
      } = (0, _v4.usePostAuthRoutingTracking)();
    (0, _v1.useEffect)(() => {
      let _v0 = window.setTimeout(() => _v17(!0), 0);
      return () => window.clearTimeout(_v0);
    }, []);
    let _v23 = (0, _v1.useEffectEvent)(() => {
      if (_v19.current) return;
      _v19.current = !0;
      let _v0 = window.self !== window.top,
        _v1 = _v0?.status === "explicit",
        _v2 = !_v0 || _v5 && _v1,
        _v3 = !_v2 || void 0 === _v0 || _v11 ? null : ((_v0, _v1, _v2) => {
          if (!("string" == typeof _v0 && Object.prototype.hasOwnProperty.call(_v16, _v0))) return null;
          let _v3 = _v17(_v1),
            _v4 = _v17(_v2);
          return null === _v3 && null === _v4 ? null : {
            target: _v0,
            rules: _v16[_v0],
            modes: {
              desktop: _v3,
              mobile: _v4
            }
          };
        })(_v8, _v9, _v10),
        _v4 = {
          status: "legacy"
        },
        _v5 = (0, _v18.default)(),
        _v6 = "mobile" === _v5 ? _v10 : _v9,
        _v7 = "no_matching_rule";
      if (_v2 ? void 0 === _v0 ? _v7 = "missing_attribution" : _v11 ? _v7 = "orion_timeout" : "control" === _v8 ? _v7 = "control_target" : null === _v3 && (_v7 = ("clip_page" === _v8 || "all" === _v8) && "control" === _v6 ? "control_device_mode" : "invalid_config") : _v7 = _v0 && _v5 && !_v1 ? "missing_attribution" : "embedded", null !== _v3 && void 0 !== _v0) {
        let _v0 = (_v0 => {
          if ("/video-uploader" === _v0.originRoute) return {
            excluded: !0,
            reason: "video_uploader_origin_route"
          };
          if (_v0.authHostPathname?.startsWith("/managed-accounts/accept") === !0) return {
            excluded: !0,
            reason: "managed_accounts_accept"
          };
          if (null !== _v0.returnTarget) {
            let _v0 = (_v0 => {
              try {
                let _v0 = new URL(_v0, "https://vimeo.com");
                return {
                  pathname: _v0.pathname,
                  hostname: _v0.hostname
                };
              } catch {
                return null;
              }
            })(_v0.returnTarget);
            if (null !== _v0) {
              if (_v6.has(_v0.hostname)) return {
                excluded: !0,
                reason: "help_desk_destination"
              };
              for (let [_v0, _v1] of _v5) if (_v0.pathname.startsWith(_v0)) return {
                excluded: !0,
                reason: _v1
              };
            }
          }
          return _v0.pageParams.has("popup") || _v0.pageParams.has("iframe") ? {
            excluded: !0,
            reason: "embedded"
          } : _v0.completionSupported ? {
            excluded: !1
          } : {
            excluded: !0,
            reason: "unsupported_completion"
          };
        })({
          originRoute: _v0.originRoute,
          authHostPathname: _v3 ?? null,
          returnTarget: _v2 ?? _v1 ?? null,
          pageParams: new URLSearchParams(window.location.search),
          completionSupported: _v4
        });
        if (_v0.excluded) _v15(_v0.reason), _v7 = _v0.reason;else {
          let _v0 = {
            surface: _v0.surface,
            trigger: _v0.trigger,
            originRoute: _v0.originRoute,
            surfaceType: _v0.surfaceType
          };
          "legacy" === (_v4 = (({
            policy: _v0,
            context: _v1,
            device: _v2,
            explicitRedirect: _v3,
            originUrl: _v4
          }) => {
            if (!_v10(_v0.rules, _v1)) return {
              status: "legacy"
            };
            let _v5 = "mobile" === _v2 ? _v0.modes.mobile : _v0.modes.desktop;
            if (null === _v5) return {
              status: "legacy"
            };
            let _v6 = ((_v0, _v1) => {
              let _v2 = void 0 === _v1 ? void 0 : _v14(_v1),
                _v3 = void 0 !== _v2 && (0, _v11.isAllowedReturnTarget)(_v2, "login");
              if (void 0 !== _v0) {
                let _v0 = _v14((_v0 => {
                  let _v1;
                  try {
                    _v1 = new URL(_v0, _v12);
                  } catch {
                    return _v0;
                  }
                  return "/welcome-survey" !== _v1.pathname ? _v0 : _v1.searchParams.get("vimeoHref") ?? _v1.searchParams.get("redirect") ?? _v0;
                })(_v0));
                if ((0, _v11.isAllowedReturnTarget)(_v0, "login")) return _v3 && void 0 !== _v2 && ((_v0, _v1) => {
                  if (/[?#]/.test(_v0) || !/[?#]/.test(_v1)) return !1;
                  let _v2 = _v15(_v0);
                  return null !== _v2 && _v2 === _v15(_v1);
                })(_v0, _v2) ? _v2 : _v0;
              }
              return _v3 && void 0 !== _v2 ? _v2 : _v11.DEFAULT_RETURN_TARGET;
            })(_v3, _v4);
            return {
              status: "routed",
              target: _v0.target,
              mode: _v5,
              returnTo: _v6,
              signupRedirect: (0, _v11.buildOnboardingEnvelope)(_v5, _v6),
              loginRedirect: _v6
            };
          })({
            policy: _v3,
            context: _v0,
            device: _v5,
            explicitRedirect: _v2,
            originUrl: _v1
          })).status && _v10(_v3.rules, _v0) && (_v7 = "control" === _v6 ? "control_device_mode" : "invalid_config");
        }
      }
      "routed" === _v4.status && (_v7 = "routed"), _v20.current = {
        reason: _v7,
        target: _v8,
        deviceMode: _v6,
        attribution: _v0
      }, _v13(_v4), _v18.current?.resolve(_v4);
    });
    return (0, _v1.useEffect)(() => {
      (!_v11 || _v16) && _v23();
    }, [_v11, _v16]), (0, _v1.useEffect)(() => {
      if (!_v6 || "pending" === _v12.status || _v21.current) return;
      let _v0 = _v20.current;
      null !== _v0 && (_v21.current = !0, _v22(_v0));
    }, [_v6, _v12, _v22]), {
      resolution: _v12,
      ready: _v18.current.promise,
      exclusionReason: _v14
    };
  }], 0);
}