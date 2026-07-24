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
    _v14 = _v0.i(0);
  let _v15 = _v4.default.div.withConfig({
      displayName: "SSOForm__IndicatorBlock",
      componentId: "sc-cfdcbf97-0"
    })`
  margin-top: ${(0, _v2.rem)(12)};
  display: flex;
  justify-content: center;

  svg {
    width: ${(0, _v2.rem)(12)};
    height ${(0, _v2.rem)(12)};
    margin: ${(0, _v2.rem)(2)} ${(0, _v2.rem)(4)};
  }
`,
    _v16 = (0, _v4.default)(_v8.Button).withConfig({
      displayName: "SSOForm__ContinueButton",
      componentId: "sc-cfdcbf97-1"
    })`
  width: 100%;
`,
    _v17 = (0, _v4.default)(_v14.Header).withConfig({
      displayName: "SSOForm__LinkWrapper",
      componentId: "sc-cfdcbf97-2"
    })`
  text-align: center;
  font-weight: normal;
  padding-top: ${(0, _v2.rem)(16)};
  a {
    color: var(--vimeo-colors-text-primary) !important;
  }
`,
    _v18 = (0, _v4.default)(_v10.CircleInfoSmall).withConfig({
      displayName: "SSOForm__Info",
      componentId: "sc-cfdcbf97-3"
    })`
  color: #00adef;
  width: ${(0, _v2.rem)(40)};
  height: ${(0, _v2.rem)(40)};
  margin: ${(0, _v2.rem)(4.8)} ${(0, _v2.rem)(9.6)} ${(0, _v2.rem)(4.8)} ${(0, _v2.rem)(4.8)};
  * {
    fill: currentColor;
  }
`,
    _v19 = _v4.default.div.withConfig({
      displayName: "SSOForm__Upsell",
      componentId: "sc-cfdcbf97-4"
    })`
  background: var(--vimeo-colors-status-info-secondary);
  justify-content: center;
  padding: ${(0, _v2.rem)(10)} ${(0, _v2.rem)(16)} ${(0, _v2.rem)(10)} ${(0, _v2.rem)(10)};
  align-items: center;
  flex-direction: row;
  border-radius: ${(0, _v2.rem)(3)};
  display: flex;
  margin: ${(0, _v2.rem)(20)} 0;

  .sso-enterprise-upsell-text-container {
    text-align: left;
    line-height: ${(0, _v2.rem)(20)};
  }

  a {
    color: var(--vimeo-colors-status-info-primary);
    text-decoration: underline;
  }
`,
    _v20 = _v4.default.div.withConfig({
      displayName: "SSOForm__FirstTimeSSONotice",
      componentId: "sc-cfdcbf97-5"
    })`
  color: var(--vimeo-colors-text-primary) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 173, 239, 0.15);
  border-radius: ${(0, _v2.rem)(3)};
  padding: ${(0, _v2.rem)(8)};
  margin-bottom: ${(0, _v2.rem)(14)};
  font-size: ${(0, _v2.rem)(13)};
  line-height: ${(0, _v2.rem)(22)};
  letter-spacing: ${(0, _v2.rem)(0)};
`,
    _v21 = (0, _v4.default)(_v18).withConfig({
      displayName: "SSOForm__InfoIcon",
      componentId: "sc-cfdcbf97-6"
    })`
  width: ${(0, _v2.rem)(40)};
  margin-right: ${(0, _v2.rem)(8)};
`,
    _v22 = (0, _v4.default)(_v7.Input).withConfig({
      displayName: "SSOForm__EmailInput",
      componentId: "sc-cfdcbf97-7"
    })`
  input {
    padding: ${(0, _v2.rem)(16)} ${(0, _v2.rem)(8)};
  }
`,
    _v23 = _v4.default.div.withConfig({
      displayName: "SSOForm__JoinContainer",
      componentId: "sc-cfdcbf97-8"
    })`
  padding-top: ${(0, _v2.rem)(10)};
  margin-top: ${(0, _v2.rem)(30)};
  text-align: center;
  border-top: 1px solid var(--vimeo-colors-stroke);
`,
    _v24 = _v4.default.section.withConfig({
      displayName: "SSOForm__FormSection",
      componentId: "sc-cfdcbf97-9"
    })`
  padding: ${(0, _v2.rem)(10)} 0;
`;
  _v0.s(["default", 0, function ({
    email: _v0,
    onEmailChange: _v1,
    handleSSOLogin: _v2,
    disableEmailUpdate: _v3,
    checkInProgress: _v4,
    onSSOFlowChoice: _v5,
    isSSO: _v6,
    firstTimeSSOLogin: _v7,
    customDomain: _v8,
    switchType: _v9,
    disclaimer: _v10,
    termsAndConditions: _v11
  }) {
    _v3 || (_v3 = !1);
    let _v12 = !_v6 && !_v4 && _v0 && _v0.length > 0;
    (0, _v3.useEffect)(() => {
      _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo.impression", 5, {
        page: "lohp",
        location: "login_modal",
        name: "impression_signin_with_sso",
        feature: "login",
        type: "general"
      }));
    }, []);
    let _v13 = _v8 ? (0, _v6.translate)({
      singular: "Log into custom domain",
      dictionary: {
        es: {
          singular: "Iniciar sesión en el dominio personalizado"
        },
        "de-DE": {
          singular: "Bei der benutzerdefinierten Domain anmelden"
        },
        "fr-FR": {
          singular: "Connexion à un domaine personnalisé"
        },
        "ja-JP": {
          singular: "カスタムドメインにログイン"
        },
        "ko-KR": {
          singular: "커스텀 도메인으로 로그인"
        },
        "pt-BR": {
          singular: "Faça login no domínio customizado"
        },
        "zh-CN": {
          singular: "登录到自定义域"
        }
      }
    }) : (0, _v6.translate)({
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
    });
    return _v4 && (_v13 = (0, _v6.translate)({
      singular: "Checking...",
      dictionary: {
        es: {
          singular: "Comprobando..."
        },
        "de-DE": {
          singular: "Überprüfung erfolgt …"
        },
        "fr-FR": {
          singular: "Vérification en cours."
        },
        "ja-JP": {
          singular: "チェックしています..."
        },
        "ko-KR": {
          singular: "확인 중.."
        },
        "pt-BR": {
          singular: "Verificando..."
        },
        "zh-CN": {
          singular: "正在检查..."
        }
      }
    })), (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)(_v22, {
        defaultValue: _v0,
        status: "neutral",
        onChange: _v0 => _v1(_v0.target.value),
        disabled: _v3
      }), !_v12 && (0, _v1.jsxs)(_v15, {
        children: [(0, _v1.jsx)(_v9.Lock, {}), (0, _v1.jsx)(_v11.Paragraph, {
          size: 3,
          children: (0, _v6.translate)({
            singular: "Single sign-on enabled",
            dictionary: {
              es: {
                singular: "Inicio de sesión único habilitado"
              },
              "de-DE": {
                singular: "Single-Sign-on aktiviert"
              },
              "fr-FR": {
                singular: "Authentification unique activée"
              },
              "ja-JP": {
                singular: "シングルサインオンが有効"
              },
              "ko-KR": {
                singular: "싱글 사인온 활성화됨"
              },
              "pt-BR": {
                singular: "Autenticação única ativada."
              },
              "zh-CN": {
                singular: "已启用单点登录"
              }
            }
          })
        })]
      }), _v7 && (0, _v1.jsxs)(_v20, {
        children: [(0, _v1.jsx)(_v21, {}), (0, _v1.jsx)(_v12.Text, {
          children: (0, _v6.translate)({
            singular: "Your organization now requires you to log in through single-sign-on (SSO).",
            dictionary: {
              es: {
                singular: "Tu organización ahora exige que inicies sesión a través del inicio de sesión único (SSO)."
              },
              "de-DE": {
                singular: "Deine Organisation verlangt nun, dass du dich über Single Sign-on (SSO) einloggst."
              },
              "fr-FR": {
                singular: "Votre organisation exige désormais que vous vous connectiez au moyen d'une authentification unique (SSO)."
              },
              "ja-JP": {
                singular: "お客様の組織では、シングルサインオン（SSO）によるログインが必要になりました。"
              },
              "ko-KR": {
                singular: "이제 조직에서 싱글 사인온(SSO)을 통해 로그인해야 합니다."
              },
              "pt-BR": {
                singular: "Sua organização agora exige que você faça login por meio de autenticação única (SSO)."
              },
              "zh-CN": {
                singular: "您的组织现在要求您使用单点登录 (SSO) 进行登录。"
              }
            }
          })
        })]
      }), _v12 && (0, _v1.jsxs)(_v19, {
        children: [(0, _v1.jsx)("span", {
          className: "sso-enterprise-upsell-icon-container",
          children: (0, _v1.jsx)(_v18, {})
        }), (0, _v1.jsx)("span", {
          className: "sso-enterprise-upsell-text-container",
          children: (0, _v6.translate)({
            singular: "SSO is not enabled for this domain. Interested in additional security for your team? {A}Contact us.{/A}",
            replacements: {
              A: _v0 => (0, _v1.jsx)("a", {
                href: "https://vimeo.com/enterprise/contact-us?mkc=ent_sso_privacy",
                target: "_blank",
                rel: "noreferrer",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "El SSO no está habilitado para este dominio. ¿Te gustaría contar con uno para tu equipo? {A}Ponte en contacto con nosotros.{/A}"
              },
              "de-DE": {
                singular: "SSO ist für diese Domain nicht aktiviert. Du willst mehr Sicherheit für dein Team? {A}Kontaktiere uns.{/A}"
              },
              "fr-FR": {
                singular: "L'authentification unique n'est pas activée pour ce domaine. Une sécurité supplémentaire pour votre équipe vous intéresse ? {A}Contactez-nous.{/A}"
              },
              "ja-JP": {
                singular: "このドメインにはSSOが有効になっていません。チーム用のセキュリティを追加されたい場合は、{A}ご連絡ください。{/A}"
              },
              "ko-KR": {
                singular: "이 도메인에는 SSO가 활성화되어 있지 않습니다. 팀을 위한 추가 보안을 원하시나요? {A}Vimeo에 문의{/A}주세요."
              },
              "pt-BR": {
                singular: "O SSO não está habilitado para este domínio. Gostaria de ter segurança adicional para sua equipe? {A}Entre em contato conosco.{/A}"
              },
              "zh-CN": {
                singular: "此域名未启用单点登录 (SSO)。想为您的团队提供额外的安全保障吗？请{A}联系我们。{/A}"
              }
            }
          })
        })]
      }), _v11 && (0, _v1.jsxs)(_v24, {
        children: [(0, _v1.jsx)(_v11.Paragraph, {
          format: "soft",
          size: "3",
          children: _v11
        }), _v10 && (0, _v1.jsx)(_v11.Paragraph, {
          size: "3",
          children: _v10
        })]
      }), (0, _v1.jsx)(_v16, {
        disabled: _v4 || !_v6,
        format: "positive",
        size: "lg",
        onClick: _v2,
        children: _v13
      }), _v3 ? "" : (0, _v1.jsx)(_v17, {
        size: "6",
        children: (0, _v1.jsx)(_v13.Link, {
          onClick: () => {
            _v1(""), _v5(!1);
          },
          format: "soft",
          children: (0, _v6.translate)({
            singular: "Use a different email address",
            dictionary: {
              es: {
                singular: "Usar otra dirección de correo electrónico"
              },
              "de-DE": {
                singular: "Eine andere E-Mail-Adresse verwenden"
              },
              "fr-FR": {
                singular: "Utiliser une adresse e-mail différente"
              },
              "ja-JP": {
                singular: "違うメールアドレスを使用する"
              },
              "ko-KR": {
                singular: "다른 이메일 주소를 이용하세요"
              },
              "pt-BR": {
                singular: "Use um endereço de e-mail diferente"
              },
              "zh-CN": {
                singular: "使用其他电子邮件地址"
              }
            }
          })
        })
      }), _v9 && (0, _v1.jsx)(_v23, {
        children: (0, _v1.jsxs)(_v11.Paragraph, {
          size: "2",
          format: "alternative",
          children: [(0, _v6.translate)({
            singular: "Don't have an account?",
            dictionary: {
              es: {
                singular: "¿No tienes una cuenta?"
              },
              "de-DE": {
                singular: "Du hast noch kein Konto?"
              },
              "fr-FR": {
                singular: "Vous n'avez pas de compte ?"
              },
              "ja-JP": {
                singular: "新規アカウントを作る"
              },
              "ko-KR": {
                singular: "아직 계정이 없으신가요?"
              },
              "pt-BR": {
                singular: "Você não tem uma conta?"
              },
              "zh-CN": {
                singular: "没有账户？"
              }
            }
          }), " ", (0, _v1.jsx)(_v13.Link, {
            onClick: _v0 => {
              _v5(!1), _v1(""), _v9 && _v9(_v0);
            },
            element: "span",
            variant: "minimal",
            children: (0, _v6.translate)({
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
          })]
        })
      })]
    });
  }], 0);
  var _v25 = _v0.i(0);
  let _v26 = () => {
      if (window.frameElement) return document.referrer.indexOf("bypass_sso=true") >= 0;
      let _v0 = new URLSearchParams(window.location.search);
      return "true" === (_v0 && decodeURIComponent(_v0?.get("bypass_sso") || ""));
    },
    _v27 = {
      SSO: !1,
      checkInProgress: !1,
      connection: "",
      firstTimeSSOLogin: !1,
      customDomain: "",
      prevPage: null,
      showEnterpriseOptInConsent: !1,
      bypassSSO: _v26()
    },
    _v28 = async (_v0, _v1) => {
      if (!_v0) return void _v1(_v27);
      try {
        if (_v1({
          ..._v27,
          checkInProgress: !0
        }), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_v0)) {
          let _v0 = await fetch(`/sso_domains/validate/${_v0}`),
            _v1 = await _v0.json();
          _v1({
            SSO: _v1.is_valid,
            connection: _v1.sso_domain.sso_connection,
            checkInProgress: !1,
            firstTimeSSOLogin: _v1.first_time_sso_login,
            customDomain: _v1?.custom_domain || "",
            prevPage: _v1.prev_page,
            showEnterpriseOptInConsent: _v1.show_enterprise_opt_in_consent,
            bypassSSO: _v26()
          });
        } else _v1(_v27);
      } catch (_v0) {
        _v1(_v27);
      }
    };
  _v0.s(["loginViaSSO", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1 && (0, _v25.isVimeoRedirectableUrl)(_v1) ? new URL(_v1, window.location.origin).href : window.location.href,
      _v4 = window.vimeo?.xsrft || "",
      _v5 = (_v2 || "") + "/auth0/connect?connection=" + _v0 + "&prev_page=" + encodeURIComponent(_v3) + "&token=" + encodeURIComponent(_v4);
    window.location.assign(_v5);
  }, "ssoDataInitialState", 0, _v27, "validateSSOEmail", 0, _v28], 0);
}