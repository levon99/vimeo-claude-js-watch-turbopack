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
    _v10 = _v0.i(0);
  function _v11() {
    return (0, _v1.jsx)("svg", {
      width: "38",
      height: "3",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v1.jsx)("path", {
        d: "M1 1.5h37",
        stroke: "#E3E8E9",
        strokeWidth: "2",
        fill: "none",
        fillRule: "evenodd",
        strokeDasharray: "4,4",
        strokeLinecap: "round"
      })
    });
  }
  function _v12() {
    return (0, _v1.jsx)("svg", {
      width: "45",
      height: "23",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v1.jsxs)("g", {
        fillRule: "nonzero",
        fill: "none",
        children: [(0, _v1.jsx)("path", {
          d: "M17.414 11.247a5.632 5.632 0 0 1-5.805 5.442 5.632 5.632 0 0 1-5.805-5.442 5.632 5.632 0 0 1 5.805-5.442 5.632 5.632 0 0 1 5.805 5.442",
          fill: "#41EBAF"
        }), (0, _v1.jsx)("path", {
          d: "M0 22.494h1.451V0H0zM21.768 22.494h1.45V0h-1.45zM42.811 22.494h1.451V0h-1.45z",
          fill: "#0A0A3C"
        }), (0, _v1.jsx)("path", {
          fill: "#41EBAF",
          d: "M28.986 5.805H28.3V16.69h.687l8.746-5.088v-.708z"
        })]
      })
    });
  }
  function _v13() {
    return (0, _v1.jsx)("svg", {
      height: "17",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v1.jsx)("path", {
        d: "M19.174 4.572c-.084 1.802-1.36 4.27-3.832 7.403-2.554 3.272-4.715 4.908-6.483 4.908-1.095 0-2.022-.996-2.779-2.99l-1.516-5.48c-.562-1.992-1.165-2.989-1.81-2.989-.14 0-.632.292-1.474.872L.396 5.174c.927-.803 1.842-1.606 2.742-2.41C4.374 1.711 5.302 1.158 5.92 1.102c1.462-.139 2.362.846 2.7 2.955.365 2.275.618 3.69.76 4.243.421 1.888.885 2.83 1.391 2.83.394 0 .984-.612 1.772-1.836.786-1.224 1.208-2.156 1.265-2.796.112-1.057-.31-1.586-1.265-1.586-.45 0-.914.102-1.39.303.923-2.98 2.687-4.428 5.29-4.346 1.931.056 2.841 1.29 2.73 3.703",
        fill: "#36C5FC",
        fillRule: "evenodd"
      })
    });
  }
  let _v14 = _v5.default.div.withConfig({
    displayName: "Branding__Container",
    componentId: "sc-bda95af9-0"
  })`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${(0, _v3.rem)(28)};
  width: ${(0, _v3.rem)(139)};
  justify-content: space-between;
  margin-bottom: ${(0, _v3.rem)(31)};
`;
  function _v15() {
    return (0, _v1.jsxs)(_v14, {
      children: [(0, _v1.jsx)(_v12, {}), (0, _v1.jsx)(_v11, {}), (0, _v1.jsx)(_v13, {})]
    });
  }
  var _v16 = _v0.i(0);
  let _v17 = {
      LogIn: (0, _v16.translate)({
        singular: "Log In",
        dictionary: {
          es: {
            singular: "Iniciar sesión"
          },
          "de-DE": {
            singular: "Einloggen"
          },
          "fr-FR": {
            singular: "Se connecter "
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
      }),
      LoginHeading: (0, _v16.translate)({
        singular: "Connect to your Vimeo account",
        dictionary: {
          es: {
            singular: "Conecta tu cuenta de Vimeo"
          },
          "de-DE": {
            singular: "Stelle eine Verbindung zu deinem Vimeo-Konto her"
          },
          "fr-FR": {
            singular: "Connectez-vous à votre compte Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoアカウントに接続"
          },
          "ko-KR": {
            singular: "Vimeo 계정에 연결하세요"
          },
          "pt-BR": {
            singular: "Conecte-se à sua conta do Vimeo"
          },
          "zh-CN": {
            singular: "连接到您的 Vimeo 帐户"
          }
        }
      }),
      Join: (0, _v16.translate)({
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
      }),
      JoinHeading: (0, _v16.translate)({
        singular: "Activate your Vimeo account",
        dictionary: {
          es: {
            singular: "Activa tu cuenta de Vimeo"
          },
          "de-DE": {
            singular: "Aktiviere dein Vimeo-Konto"
          },
          "fr-FR": {
            singular: "Activez votre compte Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoアカウントの有効化"
          },
          "ko-KR": {
            singular: "Vimeo 계정을 활성화하세요"
          },
          "pt-BR": {
            singular: "Ative sua conta do Vimeo"
          },
          "zh-CN": {
            singular: "激活您的 Vimeo 账户"
          }
        }
      }),
      JoinSubHeading: (0, _v16.translate)({
        singular: "Upload to Vimeo and do more with your Magisto videos",
        dictionary: {
          es: {
            singular: "Sube a Vimeo y haz más con tus videos Magisto"
          },
          "de-DE": {
            singular: "Lade deine Magisto-Videos auf Vimeo hoch und freue dich auf mehr Möglichkeiten"
          },
          "fr-FR": {
            singular: "Mettez vos vidéos Magisto en ligne sur Vimeo pour en tirer le maximum"
          },
          "ja-JP": {
            singular: "VimeoにアップロードしてMagisto動画をさらに活用しましょう"
          },
          "ko-KR": {
            singular: "Vimeo에 업로드하고 Magisto 동영상으로 더 많은 것을 즐기세요"
          },
          "pt-BR": {
            singular: "Carregue para o Vimeo e faça mais com seus vídeos do Magisto"
          },
          "zh-CN": {
            singular: "上传到 Vimeo，让您的 Magisto 视频发挥更大作用"
          }
        }
      }),
      Continue: (0, _v16.translate)({
        singular: "Continue",
        dictionary: {
          es: {
            singular: "Continuar"
          },
          "de-DE": {
            singular: "Weiter"
          },
          "fr-FR": {
            singular: "Continuer"
          },
          "ja-JP": {
            singular: "次へ"
          },
          "ko-KR": {
            singular: "계속"
          },
          "pt-BR": {
            singular: "Continuar"
          },
          "zh-CN": {
            singular: "继续"
          }
        }
      }),
      ContinueWithFacebook: (0, _v16.translate)({
        singular: "Continue with Facebook",
        dictionary: {
          es: {
            singular: "Continuar con Facebook"
          },
          "de-DE": {
            singular: "Weiter mit Facebook"
          },
          "fr-FR": {
            singular: "Continuer avec Facebook"
          },
          "ja-JP": {
            singular: "Facebookで続ける"
          },
          "ko-KR": {
            singular: "Facebook으로 계속하기"
          },
          "pt-BR": {
            singular: "Continuar com o Facebook"
          },
          "zh-CN": {
            singular: "使用 Facebook 继续"
          }
        }
      }),
      ContinueWithGoogle: (0, _v16.translate)({
        singular: "Continue with Google",
        dictionary: {
          es: {
            singular: "Continuar con Google"
          },
          "de-DE": {
            singular: "Mit Google fortfahren"
          },
          "fr-FR": {
            singular: "Continuer avec Google"
          },
          "ja-JP": {
            singular: "Googleで続ける"
          },
          "ko-KR": {
            singular: "Google로 계속하기"
          },
          "pt-BR": {
            singular: "Continuar com o Google"
          },
          "zh-CN": {
            singular: "使用 Google 继续"
          }
        }
      }),
      TermsOfService: (0, _v16.translate)({
        singular: "Terms of Service",
        dictionary: {
          es: {
            singular: "Términos de servicio"
          },
          "de-DE": {
            singular: "Nutzungsbedingungen"
          },
          "fr-FR": {
            singular: "Conditions d'utilisation "
          },
          "ja-JP": {
            singular: "利用規約"
          },
          "ko-KR": {
            singular: "서비스 약관"
          },
          "pt-BR": {
            singular: "Termos de Serviço"
          },
          "zh-CN": {
            singular: "服务条款"
          }
        }
      }),
      PrivacyPolicy: (0, _v16.translate)({
        singular: "Privacy Policy",
        dictionary: {
          es: {
            singular: "Política de privacidad"
          },
          "de-DE": {
            singular: "Datenschutzerklärung"
          },
          "fr-FR": {
            singular: "Politique de confidentialité "
          },
          "ja-JP": {
            singular: "プライバシーポリシー"
          },
          "ko-KR": {
            singular: "개인정보보호 정책"
          },
          "pt-BR": {
            singular: "Política de Privacidade"
          },
          "zh-CN": {
            singular: "隐私政策"
          }
        }
      }),
      CookiePolicy: (0, _v16.translate)({
        singular: "Cookie Policy",
        dictionary: {
          es: {
            singular: "Política de cookies"
          },
          "de-DE": {
            singular: "Cookie-Richtlinie"
          },
          "fr-FR": {
            singular: "Politique concernant les cookies"
          },
          "ja-JP": {
            singular: "クッキーポリシー"
          },
          "ko-KR": {
            singular: "쿠키 정책"
          },
          "pt-BR": {
            singular: "Política de Cookies"
          },
          "zh-CN": {
            singular: "Cookie 政策"
          }
        }
      })
    },
    _v18 = _v5.default.div.withConfig({
      displayName: "customauth__Container",
      componentId: "sc-96801456-0"
    })`
  padding: ${(0, _v3.rem)(24)} ${(0, _v3.rem)(24)};
  display: flex;
  flex-direction: column;
  align-items: center;
`,
    _v19 = _v5.default.div.withConfig({
      displayName: "customauth__TabsWrapper",
      componentId: "sc-96801456-1"
    })`
  width: ${(0, _v3.rem)(280)};
  margin-top: ${(0, _v3.rem)(15)};
  @media (min-width: ${(0, _v3.rem)(320)}) {
    max-width: ${(0, _v3.rem)(327)};
  }
  @media (min-width: ${(0, _v3.rem)(768)}) {
    width: ${(0, _v3.rem)(360)};
  }
`,
    _v20 = _v5.default.h2.withConfig({
      displayName: "customauth__Heading",
      componentId: "sc-96801456-2"
    })`
  font-size: ${(0, _v3.rem)(22)};
  font-weight: 500;
  line-height: ${(0, _v3.rem)(28)};
  max-width: ${(0, _v3.rem)(302)};
  text-align: center;
  @media (min-width: ${(0, _v3.rem)(768)}) {
    font-size: ${(0, _v3.rem)(28)};
    line-height: ${(0, _v3.rem)(32)};
  }
`,
    _v21 = (0, _v5.default)(_v20).withConfig({
      displayName: "customauth__LoginHeading",
      componentId: "sc-96801456-3"
    })`
  margin-bottom: ${(0, _v3.rem)(38)};
`,
    _v22 = (0, _v5.default)(_v7.Paragraph).withConfig({
      displayName: "customauth__SubHeading",
      componentId: "sc-96801456-4"
    })`
  text-align: center;
  max-width: ${(0, _v3.rem)(328)};
`,
    _v23 = "/login/custom";
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v4.useContext)(_v10.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      _v2 = _v1 && _v1.pathname === _v23,
      [_v3, _v4] = (0, _v4.useState)(() => +!!_v2),
      _v5 = _v1.query,
      _v6 = _v5.redirect,
      _v7 = _v5.name && decodeURIComponent(_v5.name),
      _v8 = _v5.email && decodeURIComponent(_v5.email),
      _v9 = {
        container: "magisto_integration"
      },
      _v10 = (0, _v4.useMemo)(() => [{
        label: _v17.Join,
        tabId: "auth-join",
        content: (0, _v1.jsx)(_v8.JoinForm, {
          xsrft: _v0?.xsrft || "",
          redirectUrl: _v6,
          name: _v7,
          email: _v8,
          shouldOptIntoMarketing: _v0?.shouldOptIntoMarketing,
          fa: _v9,
          onSuccess: _v0 => {
            _v0.redirect_url && (0, _v9.isVimeoRedirectableUrl)(_v0.redirect_url) ? window.location.href = _v0.redirect_url : window.location.href = "/";
          }
        }),
        onClick: () => {
          _v4(0), _v1.push({
            pathname: "/signup/custom",
            query: _v5
          });
        }
      }, {
        label: _v17.LogIn,
        tabId: "auth-login",
        content: (0, _v1.jsx)(_v8.LoginForm, {
          xsrft: _v0?.xsrft || "",
          redirectUrl: _v6,
          email: _v8,
          fa: _v9,
          onSuccess: _v0 => {
            _v0.redirect_url && (0, _v9.isVimeoRedirectableUrl)(_v0.redirect_url) ? window.location.href = _v0.redirect_url : window.location.href = "/";
          }
        }),
        onClick: () => {
          _v4(1), _v1.push({
            pathname: _v23,
            query: _v5
          });
        }
      }], [_v4, _v0]),
      _v11 = 0 === _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v20, {
          children: _v17.JoinHeading
        }), (0, _v1.jsx)(_v22, {
          size: "2",
          children: _v17.JoinSubHeading
        })]
      }) : (0, _v1.jsx)(_v21, {
        children: _v17.LoginHeading
      });
    return _v0 ? (0, _v1.jsxs)(_v18, {
      children: [(0, _v1.jsx)(_v15, {}), _v11, (0, _v1.jsx)(_v19, {
        children: (0, _v1.jsx)(_v6.Tabs, {
          children: _v10.map((_v0, _v1) => (0, _v1.jsx)(_v6.Tabs.Panel, {
            active: _v1 === _v3,
            label: _v0.label,
            onActivate: _v0.onClick,
            id: _v0.tabId,
            children: _v0.content
          }, _v3))
        })
      })]
    }) : null;
  }], 0);
}