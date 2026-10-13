{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = "gotta-run-eligibility";
  function _v10() {
    try {
      let _v0 = JSON.parse(sessionStorage.getItem(_v9) ?? "null");
      if ("object" != typeof _v0 || null === _v0 || "control" !== _v0.arm && "t1" !== _v0.arm && "t2" !== _v0.arm || "string" != typeof _v0.clipId || "string" != typeof _v0.gottaRunEligibleId || "string" != typeof _v0.pathname || _v0.pathname !== window.location.pathname) return null;
      return {
        arm: _v0.arm,
        clipId: _v0.clipId,
        gottaRunEligibleId: _v0.gottaRunEligibleId
      };
    } catch {
      return null;
    }
  }
  _v0.s(["clearGottaRunEligibility", 0, function () {
    try {
      sessionStorage.removeItem(_v9);
    } catch {}
  }, "readGottaRunEligibility", 0, _v10, "storeGottaRunEligibility", 0, function (_v0) {
    try {
      sessionStorage.setItem(_v9, JSON.stringify({
        ..._v0,
        pathname: window.location.pathname
      }));
    } catch {}
  }], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = _v0 => ({
      arm: _v0.arm,
      gotta_run_clip_id: _v0.clipId,
      gotta_run_eligible_id: _v0.gottaRunEligibleId,
      state: _v0.state,
      gotta_run_modal_id: _v0.gottaRunModalId
    }),
    _v15 = () => {
      let _v0 = (0, _v13.usePico)(),
        _v1 = (0, _v4.useCallback)(_v0 => {
          if (null === _v0) return null;
          let _v1 = {
            ..._v0,
            gottaRunEligibleId: (0, _v12.v4)()
          };
          return _v0.track("gotta_run_modal_eligible", {
            arm: _v1.arm,
            gotta_run_clip_id: _v1.clipId,
            gotta_run_eligible_id: _v1.gottaRunEligibleId
          }), _v1;
        }, [_v0]),
        _v2 = (0, _v4.useCallback)(_v0 => {
          if (null === _v0) return null;
          let _v1 = {
            ..._v0,
            gottaRunModalId: (0, _v12.v4)()
          };
          return _v0.track("gotta_run_modal_displayed", _v14(_v1)), _v1;
        }, [_v0]),
        _v3 = (0, _v4.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_signup_clicked", _v14(_v0)), !0), [_v0]),
        _v4 = (0, _v4.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_login_clicked", _v14(_v0)), !0), [_v0]),
        _v5 = (0, _v4.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_dismissed", _v14(_v0)), !0), [_v0]);
      return {
        trackEligible: _v1,
        trackDisplayed: _v2,
        trackSignupClicked: _v3,
        trackLoginClicked: _v4,
        trackDismissed: _v5,
        trackPlaybackResumed: (0, _v4.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_playback_resumed", _v14(_v0)), !0), [_v0]),
        trackAuthInitiated: (0, _v4.useCallback)(async _v0 => {
          if (null === _v0) return !1;
          try {
            return await _v0.track("gotta_run_auth_initiated", {
              arm: _v0.eligibility.arm,
              gotta_run_clip_id: _v0.eligibility.clipId,
              gotta_run_eligible_id: _v0.eligibility.gottaRunEligibleId,
              source: _v0.source,
              intent: _v0.intent
            }), !0;
          } catch {
            return !1;
          }
        }, [_v0])
      };
    };
  _v0.s(["useGottaRunModalTracking", 0, _v15], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ["/video/[clipId]", "/video/[clipId]/[clipHash]", "/share/[token]"];
  _v0.s(["Join", 0, () => {
    let _v0 = (0, _v3.useRouter)(),
      _v1 = (0, _v11.useAuthPageEntry)(),
      {
        trackAuthInitiated: _v2
      } = _v15(),
      _v3 = (0, _v8.resolveAuthOriginRoute)(_v0.pathname),
      _v4 = (0, _v4.useMemo)(() => (0, _v8.authAttributionUrl)("/join", (0, _v8.buildAuthAttribution)({
        flowId: null,
        entry: "global_nav_join",
        originRoute: _v3,
        surfaceType: "page",
        initialIntent: "join",
        entryTimestamp: null
      })), [_v3]);
    return (0, _v1.jsx)(_v5.Button, {
      as: _v2.default,
      href: _v4,
      variant: "primary",
      onClick: _v0 => {
        let _v1 = _v10();
        null !== _v1 && _v2({
          eligibility: _v1,
          source: "top_nav_join",
          intent: "join"
        }), _v18.includes(_v0.pathname) ? (0, _v16.stashPostSurveyRedirect)() : (0, _v16.clearPostSurveyRedirect)(), (0, _v6.isPlainLeftClick)(_v0) && (_v0.preventDefault(), _v0.push(_v1("global_nav_join", "join", "/join")));
      },
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v7.translate)({
        singular: "Join",
        dictionary: {
          es: {
            singular: "Unirse"
          },
          "de-DE": {
            singular: "Registrieren"
          },
          "fr-FR": {
            singular: "S'inscrire"
          },
          "ja-JP": {
            singular: "登録"
          },
          "ko-KR": {
            singular: "가입"
          },
          "pt-BR": {
            singular: "Inscrever-se"
          },
          "zh-CN": {
            singular: "加入"
          }
        }
      })
    });
  }, "Login", 0, () => {
    let {
        setModal: _v0
      } = (0, _v17.useLoginJoinModalContext)(),
      {
        trackAuthInitiated: _v1
      } = _v15();
    return (0, _v1.jsx)(_v5.Button, {
      variant: "secondary",
      onClick: () => {
        let _v0 = _v10();
        null !== _v0 && _v1({
          eligibility: _v0,
          source: "top_nav_login",
          intent: "login"
        }), _v0?.("login", "global_nav_login");
      },
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v7.translate)({
        singular: "Log in",
        dictionary: {
          es: {
            singular: "Iniciar sesión"
          },
          "de-DE": {
            singular: "Anmelden"
          },
          "fr-FR": {
            singular: "Se connecter"
          },
          "ja-JP": {
            singular: "ログイン"
          },
          "ko-KR": {
            singular: "로그인"
          },
          "pt-BR": {
            singular: "Entrar"
          },
          "zh-CN": {
            singular: "登录"
          }
        }
      })
    });
  }], 0);
}