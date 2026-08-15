{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "gotta-run-eligibility";
  function _v6() {
    try {
      let _v0 = JSON.parse(sessionStorage.getItem(_v5) ?? "null");
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
      sessionStorage.removeItem(_v5);
    } catch {}
  }, "readGottaRunEligibility", 0, _v6, "storeGottaRunEligibility", 0, function (_v0) {
    try {
      sessionStorage.setItem(_v5, JSON.stringify({
        ..._v0,
        pathname: window.location.pathname
      }));
    } catch {}
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = _v0 => ({
      arm: _v0.arm,
      gotta_run_clip_id: _v0.clipId,
      gotta_run_eligible_id: _v0.gottaRunEligibleId,
      state: _v0.state,
      gotta_run_modal_id: _v0.gottaRunModalId
    }),
    _v11 = () => {
      let _v0 = (0, _v9.usePico)(),
        _v1 = (0, _v7.useCallback)(_v0 => {
          if (null === _v0) return null;
          let _v1 = {
            ..._v0,
            gottaRunEligibleId: (0, _v8.v4)()
          };
          return _v0.track("gotta_run_modal_eligible", {
            arm: _v1.arm,
            gotta_run_clip_id: _v1.clipId,
            gotta_run_eligible_id: _v1.gottaRunEligibleId
          }), _v1;
        }, [_v0]),
        _v2 = (0, _v7.useCallback)(_v0 => {
          if (null === _v0) return null;
          let _v1 = {
            ..._v0,
            gottaRunModalId: (0, _v8.v4)()
          };
          return _v0.track("gotta_run_modal_displayed", _v10(_v1)), _v1;
        }, [_v0]),
        _v3 = (0, _v7.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_signup_clicked", _v10(_v0)), !0), [_v0]),
        _v4 = (0, _v7.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_login_clicked", _v10(_v0)), !0), [_v0]),
        _v5 = (0, _v7.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_dismissed", _v10(_v0)), !0), [_v0]);
      return {
        trackEligible: _v1,
        trackDisplayed: _v2,
        trackSignupClicked: _v3,
        trackLoginClicked: _v4,
        trackDismissed: _v5,
        trackPlaybackResumed: (0, _v7.useCallback)(_v0 => null !== _v0 && (_v0.track("gotta_run_modal_playback_resumed", _v10(_v0)), !0), [_v0]),
        trackAuthInitiated: (0, _v7.useCallback)(async _v0 => {
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
  _v0.s(["useGottaRunModalTracking", 0, _v11], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ["/video/[clipId]", "/video/[clipId]/[clipHash]", "/share/[token]"];
  _v0.s(["Join", 0, () => {
    let _v0 = (0, _v14.useTrackNavigationEvent)(),
      _v1 = (0, _v2.useRouter)(),
      {
        trackAuthInitiated: _v2
      } = _v11();
    return (0, _v1.jsx)(_v3.Button, {
      variant: "primary",
      onClick: () => {
        let _v0 = _v6();
        null !== _v0 && _v2({
          eligibility: _v0,
          source: "top_nav_join",
          intent: "join"
        }), _v0({
          feature: "join",
          element: "button",
          copy: "Join",
          additionalFields: {
            interface_type: "page",
            auth_type: "join"
          },
          product: "onboarding",
          eventName: "vimeo.trigger_auth_flow",
          version: 2
        }), _v15.includes(_v1.pathname) ? (0, _v12.stashPostSurveyRedirect)() : (0, _v12.clearPostSurveyRedirect)(), _v1.push("/join");
      },
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v4.translate)({
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
      } = (0, _v13.useLoginJoinModalContext)(),
      _v1 = (0, _v14.useTrackNavigationEvent)(),
      {
        trackAuthInitiated: _v2
      } = _v11();
    return (0, _v1.jsx)(_v3.Button, {
      variant: "secondary",
      onClick: () => {
        let _v0 = _v6();
        null !== _v0 && _v2({
          eligibility: _v0,
          source: "top_nav_login",
          intent: "login"
        }), _v0?.("login"), _v1({
          feature: "login",
          element: "button",
          copy: "login",
          additionalFields: {
            interface_type: "page",
            auth_type: "login"
          },
          product: "onboarding",
          eventName: "vimeo.trigger_auth_flow",
          version: 2
        });
      },
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v4.translate)({
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