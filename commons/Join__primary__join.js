{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["Join", 0, () => {
    let _v0 = (0, _v6.useTrackNavigationEvent)(),
      _v1 = (0, _v2.useRouter)();
    return (0, _v1.jsx)(_v3.Button, {
      variant: "primary",
      onClick: () => {
        _v0({
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
        }), _v1.push("/join");
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
      } = (0, _v5.useLoginJoinModalContext)(),
      _v1 = (0, _v6.useTrackNavigationEvent)();
    return (0, _v1.jsx)(_v3.Button, {
      variant: "secondary",
      onClick: () => {
        _v0?.("login"), _v1({
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
  }]);
}