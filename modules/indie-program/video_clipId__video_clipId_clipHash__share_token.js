{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = ["/video/[clipId]", "/video/[clipId]/[clipHash]", "/share/[token]"];
  _v0.s(["Join", 0, () => {
    let _v0 = (0, _v3.useRouter)(),
      _v1 = (0, _v9.useAuthPageEntry)(),
      [_v2, _v3] = (0, _v4.useState)(null);
    (0, _v4.useEffect)(() => {
      _v3((0, _v8.captureAuthOriginUrl)());
    }, []);
    let _v4 = (0, _v8.resolveAuthOriginRoute)(_v0.pathname),
      _v5 = (0, _v4.useMemo)(() => (0, _v8.appendAuthOriginUrl)((0, _v8.authAttributionUrl)("/join", (0, _v8.buildAuthAttribution)({
        flowId: null,
        entry: "global_nav_join",
        originRoute: _v4,
        surfaceType: "page",
        initialIntent: "join",
        entryTimestamp: null
      })), _v2), [_v4, _v2]);
    return (0, _v1.jsx)(_v5.Button, {
      as: _v2.default,
      href: _v5,
      variant: "primary",
      onClick: _v0 => {
        _v12.includes(_v0.pathname) ? (0, _v10.stashPostSurveyRedirect)() : (0, _v10.clearPostSurveyRedirect)(), (0, _v6.isPlainLeftClick)(_v0) && (_v0.preventDefault(), _v0.push(_v1("global_nav_join", "join", "/join")));
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
    } = (0, _v11.useLoginJoinModalContext)();
    return (0, _v1.jsx)(_v5.Button, {
      variant: "secondary",
      onClick: () => {
        _v0?.("login", "global_nav_login");
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
  }]);
}