{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => void 0,
    _v5 = (_v0, ..._v1) => {
      try {
        return _v0.track(..._v1).catch(_v4), !0;
      } catch {
        return !1;
      }
    };
  _v0.s(["usePostAuthRoutingTracking", 0, () => {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v1.useCallback)(({
        reason: _v0,
        target: _v1,
        deviceMode: _v2,
        attribution: _v3
      }) => null !== _v0 && _v5(_v0, "post_auth_routing_resolved", {
        post_auth_routing_reason: _v0,
        post_auth_routing_target: "control" === _v1 || "clip_page" === _v1 || "all" === _v1 ? _v1 : "invalid",
        post_auth_routing_device_mode: "control" === _v2 || "survey_paywall" === _v2 || "paywall_only" === _v2 ? _v2 : "invalid",
        auth_surface: _v3?.surface ?? null,
        auth_trigger: _v3?.trigger ?? null,
        auth_origin_route: _v3?.originRoute ?? null,
        unified_auth_flow_id: _v3?.flowId ?? null
      }), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && _v5(_v0, "post_auth_routing_onboarding_displayed", {
        post_auth_routing_onboarding_mode: _v0
      }), [_v0]),
      _v3 = (0, _v1.useCallback)(({
        stage: _v0,
        authOutcome: _v1,
        destination: _v2,
        flowId: _v3
      }) => {
        null !== _v0 && _v5(_v0, "post_auth_routing_destination_selected", {
          post_auth_routing_stage: _v0,
          post_auth_routing_auth_outcome: _v1,
          post_auth_routing_destination: (_v0 => {
            if (/[\u0000-\u0020\u007f\\]/.test(_v0) || !_v0.startsWith("/") && !/^https?:\/\//i.test(_v0)) return "unknown";
            try {
              var _v1;
              let _v0,
                _v1 = new URL(_v0, "https://vimeo.com");
              if ("vimeo.com" !== _v1.hostname || "https:" !== _v1.protocol && "http:" !== _v1.protocol) return "unknown";
              if ("/survey/join" === _v1.pathname.replace(/\/$/, "")) return "/survey/join";
              if ("/checkout" === _v1.pathname || _v1.pathname.startsWith("/checkout/")) return "checkout";
              let _v2 = (0, _v2.resolveAuthOriginRoute)(_v1.pathname);
              switch (_v2) {
                case "/video/:clipId":
                case "/:clipId":
                  return "clip_page";
                case "/home":
                case "/create/templates":
                  return _v2;
              }
              return (_v0 = (_v1 = _v1.pathname).length > 1 && _v1.endsWith("/") ? _v1.slice(0, -1) : _v1, "/" === _v0 || _v2.AUTH_MARKETING_DESTINATION_ROUTES.some(_v0 => "/" !== _v0 && (_v0 === _v0 || _v0.startsWith(`${_v0}/`)))) ? "marketing" : "unknown";
            } catch {
              return "unknown";
            }
          })(_v2),
          unified_auth_flow_id: _v3
        }, void 0, {
          delivery: "immediate"
        });
      }, [_v0]);
    return (0, _v1.useMemo)(() => ({
      trackRoutingResolved: _v1,
      trackOnboardingDisplayed: _v2,
      trackDestinationSelected: _v3
    }), [_v1, _v2, _v3]);
  }], 0);
  var _v6 = _v0.i(0);
  let _v7 = "onboarding_mode",
    _v8 = "return_to",
    _v9 = "/survey/join",
    _v10 = "/home",
    _v11 = "/checkout",
    _v12 = ["survey_paywall", "paywall_only"],
    _v13 = ["/survey", "/welcome", "/welcome-survey", "/join", "/join-auth-modal", "/join_modal", "/sign_up", "/signup", "/log_in", "/log_in_modal", "/login", "/login-auth-modal", "/login-auth-popup", "/signin", "/auth-modal"],
    _v14 = _v0 => "string" == typeof _v0 && _v12.includes(_v0),
    _v15 = _v0 => {
      let _v1;
      try {
        _v1 = new URL(_v0, "https://vimeo.com");
      } catch {
        return null;
      }
      return {
        pathname: _v1.pathname,
        hostname: _v1.hostname,
        params: _v1.searchParams
      };
    },
    _v16 = _v0 => {
      let _v1, _v2;
      if (!(0, _v6.isVimeoRedirectableUrl)(_v0)) return !1;
      let _v3 = _v15(_v0);
      return null !== _v3 && (_v2 = (_v1 = _v3.pathname).length > 1 && _v1.endsWith("/") ? _v1.slice(0, -1) : _v1, !_v13.some(_v0 => _v2 === _v0 || _v2.startsWith(`${_v0}/`)));
    },
    _v17 = _v0 => {
      let _v1 = _v15(_v0);
      return null !== _v1 && (_v1.pathname === _v11 || _v1.pathname.startsWith(`${_v11}/`));
    };
  _v0.s(["DEFAULT_RETURN_TARGET", 0, _v10, "buildOnboardingEnvelope", 0, (_v0, _v1) => {
    let _v2 = new URLSearchParams();
    return _v2.set(_v7, _v0), _v2.set(_v8, _v1), `${_v9}?${_v2.toString()}`;
  }, "isAllowedReturnTarget", 0, (_v0, _v1) => {
    if ("login" === _v1 || _v17(_v0)) return _v16(_v0);
    let _v2 = (_v0 => {
      let _v1 = _v15(_v0);
      if (null === _v1 || "vimeo.com" !== _v1.hostname || _v1.pathname !== _v9) return null;
      for (let _v0 of _v1.params.keys()) if (_v0 !== _v7 && _v0 !== _v8) return null;
      let _v2 = _v1.params.get(_v7);
      return null !== _v2 && _v14(_v2) ? {
        returnTo: _v1.params.get(_v8) ?? void 0
      } : null;
    })(_v0);
    return null !== _v2 && (void 0 === _v2.returnTo || _v16(_v2.returnTo));
  }, "isCheckoutTarget", 0, _v17, "isOnboardingMode", 0, _v14, "parseRoutingRequest", 0, _v0 => {
    let _v1 = _v0.get(_v7);
    if (null === _v1 || !_v14(_v1)) return {
      kind: "legacy"
    };
    let _v2 = _v0.get(_v8);
    return {
      kind: "routed",
      mode: _v1,
      returnTo: null !== _v2 && _v16(_v2) ? _v2 : _v10
    };
  }], 0);
}