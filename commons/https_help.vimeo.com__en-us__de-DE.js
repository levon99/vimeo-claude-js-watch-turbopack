{
  "use strict";

  let _v1 = "https://help.vimeo.com",
    _v2 = new Map([["en", "en-us"], ["de-DE", "de"], ["es", "es"], ["fr-FR", "fr"], ["ja-JP", "ja"], ["ko-KR", "ko"], ["pt-BR", "pt-br"], ["zh-CN", "zh-cn"]]),
    _v3 = _v0 => _v2.get(_v0) ?? "en-us";
  _v0.s(["HC_BASE_URL", 0, _v1, "getHelpCenterRequestsUrl", 0, _v0 => `https://vimeo.com/help/sso?redirect_to=${((_v0, _v1 = "") => `${_v1}/hc/${_v3(_v0)}${_v1}`)(_v0, "/requests")}`, "getZendeskLocale", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ["/video/[clipId]", "/video/[clipId]/[clipHash]", "/share/[token]"];
  _v0.s(["Join", 0, () => {
    let _v0 = (0, _v6.useRouter)(),
      _v1 = (0, _v12.useAuthPageEntry)(),
      _v2 = (0, _v11.resolveAuthOriginRoute)(_v0.pathname),
      _v3 = (0, _v7.useMemo)(() => (0, _v11.authAttributionUrl)("/join", (0, _v11.buildAuthAttribution)({
        flowId: null,
        entry: "global_nav_join",
        originRoute: _v2,
        surfaceType: "page",
        initialIntent: "join",
        entryTimestamp: null
      })), [_v2]);
    return (0, _v4.jsx)(_v8.Button, {
      as: _v5.default,
      href: _v3,
      variant: "primary",
      onClick: _v0 => {
        _v15.includes(_v0.pathname) ? (0, _v13.stashPostSurveyRedirect)() : (0, _v13.clearPostSurveyRedirect)(), (0, _v9.isPlainLeftClick)(_v0) && (_v0.preventDefault(), _v0.push(_v1("global_nav_join", "join", "/join")));
      },
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v10.translate)({
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
    } = (0, _v14.useLoginJoinModalContext)();
    return (0, _v4.jsx)(_v8.Button, {
      variant: "secondary",
      onClick: () => {
        _v0?.("login", "global_nav_login");
      },
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v10.translate)({
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