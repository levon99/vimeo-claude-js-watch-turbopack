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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["BrandedLogin", 0, function ({
    metaUrl: _v0,
    errorConstructor: _v1,
    forceEmailLogin: _v2 = !1
  }) {
    let _v3 = (0, _v2.useContext)(_v14.ViewerContext)?.vimeoHttpsUrl,
      {
        data: _v4
      } = (0, _v11.useQuery)(_v0);
    if (!_v4) return (0, _v1.jsx)(_v16.default, {});
    if ((0, _v12.isErrorResponse)(_v4)) return (0, _v1.jsx)(_v15.ErrorPage, {
      error: new _v1(_v4.error)
    });
    let _v5 = window.location.href,
      {
        signInUrl: _v6,
        ownerName: _v7,
        ownerImage: _v8,
        ssoConnectionsCount: _v9
      } = _v4,
      _v10 = _v2 || _v9 > 1 || null === _v6;
    return (0, _v1.jsx)(_v3.Center, {
      width: "100%",
      flex: "1",
      flexFlow: "column",
      backgroundColor: "background",
      children: (0, _v1.jsxs)(_v3.Center, {
        maxWidth: (0, _v10.rem)(520),
        paddingX: (0, _v10.rem)(80),
        paddingY: (0, _v10.rem)(60),
        backgroundColor: "fill-surface",
        flexFlow: "column",
        borderRadius: "xl",
        textAlign: "center",
        children: [_v8 && (0, _v1.jsx)(_v4.Image, {
          src: _v8,
          alt: _v7,
          marginX: "auto",
          marginBottom: (0, _v10.rem)(36),
          display: "block",
          maxWidth: (0, _v10.rem)(260),
          width: "auto",
          maxHeight: (0, _v10.rem)(200),
          height: "auto"
        }), (0, _v1.jsx)(_v5.Header, {
          variant: "heading-lg",
          marginBottom: (0, _v10.rem)(36),
          size: "xl",
          children: (0, _v13.translate)({
            singular: "Log in to {TITLE}",
            replacements: {
              TITLE: _v7
            },
            dictionary: {
              es: {
                singular: "Inicie sesión en {TITLE}"
              },
              "de-DE": {
                singular: "Melde dich an bei {TITLE}"
              },
              "fr-FR": {
                singular: "Connectez-vous à {TITLE}"
              },
              "ja-JP": {
                singular: "{TITLE}にログイン"
              },
              "ko-KR": {
                singular: "{TITLE}에 로그인"
              },
              "pt-BR": {
                singular: "Faça login em {TITLE}"
              },
              "zh-CN": {
                singular: "登录 {TITLE}"
              }
            }
          })
        }), (0, _v1.jsx)(_v9.Text, {
          variant: "body-md",
          color: "text-secondary",
          marginBottom: "200",
          textAlign: "center",
          children: (0, _v13.translate)({
            singular: "By logging in to Vimeo, you agree to our {TERMS}Terms of Service{/TERMS} and acknowledge our {PRIVACY}Privacy Policy{/PRIVACY}.",
            replacements: {
              TERMS: _v0 => (0, _v1.jsx)(_v7.Link, {
                href: "/terms",
                target: "_blank",
                variant: "inline-primary",
                fontSize: "inherit",
                color: "inherit",
                children: _v0
              }, "terms"),
              PRIVACY: _v0 => (0, _v1.jsx)(_v7.Link, {
                href: "/privacy",
                target: "_blank",
                variant: "inline-primary",
                fontSize: "inherit",
                color: "inherit",
                children: _v0
              }, "privacy")
            },
            dictionary: {
              es: {
                singular: "Al iniciar sesión en Vimeo, acepta nuestros {TERMS}Términos de servicio{/TERMS} y nuestra {PRIVACY}Política de privacidad{/PRIVACY}."
              },
              "de-DE": {
                singular: "Indem Sie sich bei Vimeo anmelden, stimmen Sie unseren {TERMS}Nutzungsbedingungen{/TERMS} zu und bestätigen unsere {PRIVACY}Datenschutzrichtlinie{/PRIVACY}."
              },
              "fr-FR": {
                singular: "En vous connectant à Vimeo, vous acceptez nos {TERMS}Conditions de service{/TERMS} et reconnaissez notre {PRIVACY}Politique de confidentialité{/PRIVACY}."
              },
              "ja-JP": {
                singular: "Vimeoにログインすると、当社の{TERMS}利用規約{/TERMS}に同意し、当社の{PRIVACY}プライバシーポリシー{/PRIVACY}を承認したものとみなされます。"
              },
              "ko-KR": {
                singular: "Vimeo에 로그인하면 Vimeo의 {TERMS}서비스 약관{/TERMS}에 동의하고 {PRIVACY}개인정보 처리방침{/PRIVACY}을 인정하는 것입니다."
              },
              "pt-BR": {
                singular: "Ao fazer login no Vimeo, você concorda com nossos {TERMS}Termos de Serviço{/TERMS} e aceita nossa {PRIVACY}Política de Privacidade{/PRIVACY}."
              },
              "zh-CN": {
                singular: "登录 Vimeo 即表示您同意我们的{TERMS}服务条款{/TERMS}并认可我们的{PRIVACY}隐私政策{/PRIVACY}。"
              }
            }
          })
        }), (0, _v1.jsx)(_v6.Button, {
          size: "lg",
          onClick: () => {
            let _v0 = _v10 ? `/log_in?redirect=${_v5}` : `${_v6}&prev_page=${_v5}`;
            window.location.href = _v0;
          },
          variant: "primary",
          children: _v10 ? (0, _v13.translate)({
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
          }) : (0, _v13.translate)({
            singular: "Log in with SSO",
            dictionary: {
              es: {
                singular: "Iniciar sesión con SSO"
              },
              "de-DE": {
                singular: "Mit SSO einloggen"
              },
              "fr-FR": {
                singular: "Se connecter avec l'authentification unique"
              },
              "ja-JP": {
                singular: "SSOでログイン"
              },
              "ko-KR": {
                singular: "SSO로 로그인"
              },
              "pt-BR": {
                singular: "Fazer login com SSO"
              },
              "zh-CN": {
                singular: "使用 SSO 登录"
              }
            }
          })
        }), !_v10 && (0, _v1.jsx)(_v8.Paragraph, {
          variant: "body-md",
          marginTop: "200",
          children: (0, _v13.translate)({
            singular: "{A}Log in{/A} with email and password",
            replacements: {
              A: _v0 => (0, _v1.jsx)(_v7.Link, {
                href: `${_v3}/log_in?redirect=${_v5}`,
                variant: "inline-primary",
                fontSize: "inherit",
                color: "inherit",
                children: _v0
              }, "login-with-email")
            },
            dictionary: {
              es: {
                singular: "{A}Inicie sesión{/A} con un correo electrónico y contraseña"
              },
              "de-DE": {
                singular: "Mit E-Mail und Passwort {A}anmelden{/A}"
              },
              "fr-FR": {
                singular: "{A}Se connecter{/A} avec une adresse e-mail et un mot de passe"
              },
              "ja-JP": {
                singular: "Eメールとパスワードで{A}ログイン{/A}"
              },
              "ko-KR": {
                singular: "이메일과 비밀번호로 {A}로그인{/A}"
              },
              "pt-BR": {
                singular: "{A}Entrar{/A} com e-mail e senha"
              },
              "zh-CN": {
                singular: "{A}登录{/A}使用电子邮箱和密码"
              }
            }
          })
        })]
      })
    });
  }]);
}