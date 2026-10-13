{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "_gtm",
    _v6 = (0, _v4.default)();
  _v0.s(["GoogleTagManager", 0, function ({
    viewer: _v0
  }) {
    let _v1 = (0, _v3.useMemo)(() => function (_v0) {
      if (!_v0 || !1 === _v0.isThirdPartyTrackingEnabled) return {};
      let _v1 = {
        language: _v0.locale,
        user_status: _v0.user ? "logged_in" : "logged_out",
        user_type: _v0.user ? _v0.user.account : "none",
        vuid: _v0.vuid
      };
      switch (_v0.user && (_v1.user_id = _v0.user.id, _v1.is_free_trial = _v0.user.isFreeTrial, _v1.new_user = _v0.user.isNewUser), (_v0.user?.account === "enterprise" || _v0.teamUser) && (_v1.team_subscription_type = _v0.teamUser?.accountType, _v1.owner_id = _v0.teamUser?.ownerId), _v6) {
        case "production":
          return {
            ..._v1,
            ga_universal_id: "UA-76641-8",
            comscore_site_id: "10348289"
          };
        case "staging":
        case "development":
          return {
            ..._v1,
            ga_universal_id: "UA-76641-70",
            comscore_site_id: "10348289"
          };
      }
    }(_v0), [_v0]);
    return ((0, _v3.useEffect)(() => {
      !1 !== _v0.isThirdPartyTrackingEnabled && (window._gtm || (window._gtm = [_v1]), window.localStorage.setItem("vimeo_8bd2567c_vimeows_global_properties", JSON.stringify({
        user_id: _v0.user?.id,
        vuid: _v0.vuid
      })));
    }, [_v1, _v0]), !1 === _v0.isThirdPartyTrackingEnabled) ? null : (0, _v1.jsx)(_v2.GoogleTagManager, {
      gtmId: "GTM-RBKK",
      dataLayer: _v1,
      dataLayerName: _v5,
      auth: "production" === _v6 ? "" : "eSWk7P9f-D6sRBA_SuJKNw",
      preview: "production" === _v6 ? "" : "env-628"
    });
  }, "sendGTMEvent", 0, function (_v0, _v1) {
    (0, _v2.sendGTMEvent)(_v0, _v1 || _v5);
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = "backend_auth_account_created";
  _v0.s(["useBackendAuthAccountCreatedTracking", 0, () => {
    let _v0 = (0, _v9.usePico)(),
      _v1 = (0, _v3.useRef)(!1),
      _v2 = (0, _v3.useCallback)(() => {
        try {
          let _v0, _v1;
          if (_v1.current || !(0, _v8.isClientNonProduction)() || null === _v0) return;
          let _v2 = _v7.default.get(_v10);
          if (void 0 === _v2) return;
          _v1.current = !0, (() => {
            let {
              hostname: _v0
            } = window.location;
            _v7.default.remove(_v10, {
              path: "/",
              ...(_v0 ? {
                domain: _v0
              } : {})
            });
          })();
          try {
            _v0 = JSON.parse(_v2);
          } catch {
            return;
          }
          if (_v1 = _v0, "object" != typeof _v1 || null === _v1 || Array.isArray(_v1)) return;
          let {
            user_id: _v3,
            ..._v4
          } = _v0;
          Promise.resolve(_v0.track("auth_account_created", _v4, "string" == typeof _v3 ? {
            user_id: _v3
          } : void 0)).catch(() => void 0);
        } catch {
          return;
        }
      }, [_v0]);
    return (0, _v3.useEffect)(() => {
      _v2();
    }, [_v2]), {
      consume: _v2
    };
  }], 0);
  let _v11 = "backend_signup_completed";
  _v0.s(["useBackendSignupTracking", 0, () => {
    let _v0 = (0, _v9.usePico)();
    (0, _v3.useEffect)(() => {
      if (null === _v0) return;
      let _v0 = document.cookie.split(";").find(_v0 => _v0.trim().startsWith(`${_v11}=`));
      if (!_v0) return;
      let {
        registrationSource: _v1,
        marketingOptIn: _v2
      } = (_v0 => {
        let [_v1, _v2] = decodeURIComponent(_v0).split("|");
        return {
          registrationSource: _v1,
          marketingOptIn: "1" === _v2
        };
      })(_v0.trim().slice(_v11.length + 1));
      _v0.track("signup_completed", {
        registration_source: _v1,
        registration_method: (_v0 => {
          switch (_v0) {
            case "apple":
              return "Apple";
            case "facebook":
              return "Facebook";
            case "google":
            case "google_one_tap":
              return "Google";
            case "google_identity_platform":
              return "Email";
            default:
              return "SSO";
          }
        })(_v1),
        marketing_opt_in: _v2
      });
      let _v3 = window.location.hostname.split(".").slice(-2).join(".");
      document.cookie = `${_v11}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${_v3}`;
    }, [_v0]);
  }, "useSignupTracking", 0, () => {
    let _v0 = (0, _v9.usePico)();
    return {
      trackSignupCompleted: (0, _v3.useCallback)((_v0, _v1, _v2) => {
        null !== _v0 && _v0.track("signup_completed", {
          marketing_opt_in: _v0,
          registration_method: _v1
        }, _v2);
      }, [_v0])
    };
  }], 0);
}