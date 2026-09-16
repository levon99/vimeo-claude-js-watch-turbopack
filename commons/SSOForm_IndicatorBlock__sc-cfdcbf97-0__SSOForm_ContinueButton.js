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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = _v21.default.div.withConfig({
      displayName: "SSOForm__IndicatorBlock",
      componentId: "sc-cfdcbf97-0"
    })`
  margin-top: ${(0, _v20.rem)(12)};
  display: flex;
  justify-content: center;

  svg {
    width: ${(0, _v20.rem)(12)};
    height ${(0, _v20.rem)(12)};
    margin: ${(0, _v20.rem)(2)} ${(0, _v20.rem)(4)};
  }
`,
    _v31 = (0, _v21.default)(_v24.Button).withConfig({
      displayName: "SSOForm__ContinueButton",
      componentId: "sc-cfdcbf97-1"
    })`
  width: 100%;
`,
    _v32 = (0, _v21.default)(_v18.Header).withConfig({
      displayName: "SSOForm__LinkWrapper",
      componentId: "sc-cfdcbf97-2"
    })`
  text-align: center;
  font-weight: normal;
  padding-top: ${(0, _v20.rem)(16)};
  a {
    color: var(--vimeo-colors-text-primary) !important;
  }
`,
    _v33 = (0, _v21.default)(_v26.CircleInfoSmall).withConfig({
      displayName: "SSOForm__Info",
      componentId: "sc-cfdcbf97-3"
    })`
  color: #00adef;
  width: ${(0, _v20.rem)(40)};
  height: ${(0, _v20.rem)(40)};
  margin: ${(0, _v20.rem)(4.8)} ${(0, _v20.rem)(9.6)} ${(0, _v20.rem)(4.8)} ${(0, _v20.rem)(4.8)};
  * {
    fill: currentColor;
  }
`,
    _v34 = _v21.default.div.withConfig({
      displayName: "SSOForm__Upsell",
      componentId: "sc-cfdcbf97-4"
    })`
  background: var(--vimeo-colors-status-info-secondary);
  justify-content: center;
  padding: ${(0, _v20.rem)(10)} ${(0, _v20.rem)(16)} ${(0, _v20.rem)(10)} ${(0, _v20.rem)(10)};
  align-items: center;
  flex-direction: row;
  border-radius: ${(0, _v20.rem)(3)};
  display: flex;
  margin: ${(0, _v20.rem)(20)} 0;

  .sso-enterprise-upsell-text-container {
    text-align: left;
    line-height: ${(0, _v20.rem)(20)};
  }

  a {
    color: var(--vimeo-colors-status-info-primary);
    text-decoration: underline;
  }
`,
    _v35 = _v21.default.div.withConfig({
      displayName: "SSOForm__FirstTimeSSONotice",
      componentId: "sc-cfdcbf97-5"
    })`
  color: var(--vimeo-colors-text-primary) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 173, 239, 0.15);
  border-radius: ${(0, _v20.rem)(3)};
  padding: ${(0, _v20.rem)(8)};
  margin-bottom: ${(0, _v20.rem)(14)};
  font-size: ${(0, _v20.rem)(13)};
  line-height: ${(0, _v20.rem)(22)};
  letter-spacing: ${(0, _v20.rem)(0)};
`,
    _v36 = (0, _v21.default)(_v33).withConfig({
      displayName: "SSOForm__InfoIcon",
      componentId: "sc-cfdcbf97-6"
    })`
  width: ${(0, _v20.rem)(40)};
  margin-right: ${(0, _v20.rem)(8)};
`,
    _v37 = (0, _v21.default)(_v23.Input).withConfig({
      displayName: "SSOForm__EmailInput",
      componentId: "sc-cfdcbf97-7"
    })`
  input {
    padding: ${(0, _v20.rem)(16)} ${(0, _v20.rem)(8)};
  }
`,
    _v38 = _v21.default.div.withConfig({
      displayName: "SSOForm__JoinContainer",
      componentId: "sc-cfdcbf97-8"
    })`
  padding-top: ${(0, _v20.rem)(10)};
  margin-top: ${(0, _v20.rem)(30)};
  text-align: center;
  border-top: 1px solid var(--vimeo-colors-stroke);
`,
    _v39 = _v21.default.section.withConfig({
      displayName: "SSOForm__FormSection",
      componentId: "sc-cfdcbf97-9"
    })`
  padding: ${(0, _v20.rem)(10)} 0;
`;
  function _v40({
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
    (0, _v4.useEffect)(() => {
      _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo.impression", 5, {
        page: "lohp",
        location: "login_modal",
        name: "impression_signin_with_sso",
        feature: "login",
        type: "general"
      }));
    }, []);
    let _v13 = _v8 ? (0, _v22.translate)({
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
    }) : (0, _v22.translate)({
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
    return _v4 && (_v13 = (0, _v22.translate)({
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
      children: [(0, _v1.jsx)(_v37, {
        defaultValue: _v0,
        status: "neutral",
        onChange: _v0 => _v1(_v0.target.value),
        disabled: _v3
      }), !_v12 && (0, _v1.jsxs)(_v30, {
        children: [(0, _v1.jsx)(_v25.Lock, {}), (0, _v1.jsx)(_v27.Paragraph, {
          size: 3,
          children: (0, _v22.translate)({
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
      }), _v7 && (0, _v1.jsxs)(_v35, {
        children: [(0, _v1.jsx)(_v36, {}), (0, _v1.jsx)(_v28.Text, {
          children: (0, _v22.translate)({
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
      }), _v12 && (0, _v1.jsxs)(_v34, {
        children: [(0, _v1.jsx)("span", {
          className: "sso-enterprise-upsell-icon-container",
          children: (0, _v1.jsx)(_v33, {})
        }), (0, _v1.jsx)("span", {
          className: "sso-enterprise-upsell-text-container",
          children: (0, _v22.translate)({
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
      }), _v11 && (0, _v1.jsxs)(_v39, {
        children: [(0, _v1.jsx)(_v27.Paragraph, {
          format: "soft",
          size: "3",
          children: _v11
        }), _v10 && (0, _v1.jsx)(_v27.Paragraph, {
          size: "3",
          children: _v10
        })]
      }), (0, _v1.jsx)(_v31, {
        disabled: _v4 || !_v6,
        format: "positive",
        size: "lg",
        onClick: _v2,
        children: _v13
      }), _v3 ? "" : (0, _v1.jsx)(_v32, {
        size: "6",
        children: (0, _v1.jsx)(_v29.Link, {
          onClick: () => {
            _v1(""), _v5(!1);
          },
          format: "soft",
          children: (0, _v22.translate)({
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
      }), _v9 && (0, _v1.jsx)(_v38, {
        children: (0, _v1.jsxs)(_v27.Paragraph, {
          size: "2",
          format: "alternative",
          children: [(0, _v22.translate)({
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
          }), " ", (0, _v1.jsx)(_v29.Link, {
            onClick: _v0 => {
              _v5(!1), _v1(""), _v9 && _v9(_v0);
            },
            element: "span",
            variant: "minimal",
            children: (0, _v22.translate)({
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
  }
  var _v41 = _v0.i(0);
  function _v42({
    disclaimer: _v0,
    userInfo: _v1,
    termsAndConditions: _v2,
    onSocialLoginClick: _v3,
    onSocialLoginSubmit: _v4,
    target: _v5 = "_self",
    onAuthSuccess: _v6,
    thirdPartyIntegration: _v7
  }) {
    let _v8 = (0, _v4.useContext)(_v11.ViewerContext),
      _v9 = (0, _v2.useRouter)(),
      _v10 = _v9.query,
      _v11 = _v9.pathname === _v12.RequiredOAuthPaths.login,
      [_v12, _v13] = (0, _v4.useState)(+!!_v11),
      _v14 = window?.location?.search ?? "",
      _v15 = _v9.pathname + _v14,
      _v16 = _v10?.name && decodeURIComponent(_v10.name),
      _v17 = _v10?.email_policy && decodeURIComponent(_v10.email_policy),
      _v18 = !!_v17,
      _v19 = _v10?.use_sso && decodeURIComponent(_v10.use_sso),
      _v20 = _v10?.email && decodeURIComponent(_v10.email);
    _v17 && _v1?.managed_user?.email ? _v20 = _v1.managed_user.email : _v17 && (_v20 = _v17);
    let [_v21, _v22] = (0, _v4.useState)(_v20),
      [_v23, _v24] = (0, _v4.useState)(_v41.ssoDataInitialState),
      [_v25, _v26] = (0, _v4.useState)(_v23.SSO || !!_v19),
      _v27 = _v0 => (_v22(_v0), (0, _v41.validateSSOEmail)(_v0, _v24));
    (0, _v4.useEffect)(() => {
      (0, _v41.validateSSOEmail)(_v20 ?? "", _v24);
    }, [_v20]);
    let {
      managed_user_id: _v28
    } = _v10;
    _v28 || (_v28 = _v1?.managed_user?.id ? _v1.managed_user.id.toString() : "");
    let _v29 = {
        label: (0, _v16.translate)({
          singular: "Join Vimeo",
          dictionary: {
            es: {
              singular: "Unirse a Vimeo"
            },
            "de-DE": {
              singular: "Registriere dich bei Vimeo"
            },
            "fr-FR": {
              singular: "S'inscrire à Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoに登録"
            },
            "ko-KR": {
              singular: "Vimeo 가입"
            },
            "pt-BR": {
              singular: "Cadastre-se no Vimeo"
            },
            "zh-CN": {
              singular: "加入 Vimeo"
            }
          }
        }),
        tabId: "auth-join",
        content: (0, _v1.jsx)(_v19.JoinForm, {
          xsrft: _v8?.xsrft ?? "",
          redirectUrl: _v15,
          name: _v16,
          email: _v21,
          disableEmail: _v18,
          disclaimer: _v0,
          termsAndConditions: _v2,
          shouldOptIntoMarketing: _v8?.shouldOptIntoMarketing,
          onSuccess: _v6("sign_up"),
          onEmailChange: (0, _v15.default)(_v27, 500),
          onSocialLoginClick: _v3,
          onSocialLoginSubmit: _v4,
          target: _v5,
          fa: {
            container: "onboarding",
            thirdPartyIntegration: _v7
          }
        })
      },
      _v30 = {
        label: (0, _v16.translate)({
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
        }),
        tabId: "auth-login",
        content: (0, _v1.jsx)(_v19.LoginForm, {
          xsrft: _v8?.xsrft ?? "",
          redirectUrl: _v15,
          email: _v21,
          disableEmail: _v18,
          termsAndConditions: _v2,
          onSuccess: _v6("sign_in"),
          onEmailChange: (0, _v15.default)(_v27, 500),
          onSocialLoginClick: _v3,
          onSocialLoginSubmit: _v4,
          target: _v5,
          fa: {
            container: "onboarding",
            thirdPartyIntegration: _v7
          }
        })
      },
      _v31 = !0,
      _v32 = !0;
    _v18 && (_v31 = !(_v32 = !_v1?.managed_user?.email && !_v1?.vimeo_user_exists));
    let _v33 = [];
    if (_v32 && _v33.push(_v29), _v31 && _v33.push(_v30), !_v8) return null;
    if (_v23.SSO || _v25) return (0, _v1.jsx)(_v40, {
      email: _v21,
      isSSO: _v23.SSO,
      onEmailChange: (0, _v15.default)(_v27, 500),
      handleSSOLogin: () => {
        let _v0 = _v23.prevPage || `${_v12.RequiredOAuthPaths.authorize}${_v14}`,
          _v1 = `${_v23?.customDomain || ""}/auth0/connect?connection=${_v23.connection}&prev_page=${encodeURIComponent(_v0)}`;
        window.location.assign(_v1);
      },
      disableEmailUpdate: _v18,
      checkInProgress: _v23.checkInProgress,
      onSSOFlowChoice: _v0 => _v26(_v0),
      firstTimeSSOLogin: _v23.firstTimeSSOLogin
    });
    if (1 === _v33.length) {
      let _v0 = _v33[0];
      return (0, _v1.jsxs)("div", {
        style: {
          width: "100%"
        },
        children: [(0, _v1.jsx)(_v18.Header, {
          size: "4",
          children: _v0.label
        }), _v0.content]
      });
    }
    return (0, _v1.jsx)(_v17.Tabs, {
      style: {
        width: "100%"
      },
      children: _v33.map((_v0, _v1) => (0, _v1.jsx)(_v17.Tabs.Panel, {
        active: _v1 === _v12,
        label: _v0.label,
        id: _v0.tabId,
        onOpen: () => _v13(_v1),
        children: _v0.content
      }, `${_v0.tabId}-${_v1}`))
    });
  }
  var _v43 = _v0.i(0);
  let _v44 = _v21.default.div.withConfig({
      displayName: "VenuesAppHeader__VenuesAppWrapper",
      componentId: "sc-723ac717-0"
    })`
  padding: ${(0, _v43.rem)(20)} 0;
  border-bottom-color: #525252;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: ${_v0 => _v0.theme.content.background};
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v45 = (0, _v21.default)(_v18.Header).withConfig({
      displayName: "VenuesAppHeader__HeaderTitle",
      componentId: "sc-723ac717-1"
    })`
  margin-bottom: 0;
`,
    _v46 = () => (0, _v1.jsx)(_v44, {
      children: (0, _v1.jsx)(_v45, {
        size: "3",
        children: (0, _v16.translate)({
          singular: "Connect to Vimeo",
          dictionary: {
            es: {
              singular: "Conectar con Vimeo"
            },
            "de-DE": {
              singular: "Verknüpfe dich mit Vimeo"
            },
            "fr-FR": {
              singular: "Connexion à Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoに接続する"
            },
            "ko-KR": {
              singular: "Vimeo에 연결"
            },
            "pt-BR": {
              singular: "Conectar ao Vimeo"
            },
            "zh-CN": {
              singular: "连接到 Vimeo"
            }
          }
        })
      })
    });
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  function _v50({
    userInfo: _v0
  }) {
    let {
        setTheme: _v1
      } = (0, _v4.useContext)(_v6.ThemeDispatchContext),
      _v2 = (0, _v4.useContext)(_v11.ViewerContext),
      _v3 = (0, _v2.useRouter)(),
      _v4 = _v3.query,
      _v5 = "?" + _v3.default.stringify(_v4),
      {
        managed_user_id: _v6,
        via: _v7,
        third_party_integration: _v8
      } = _v4,
      _v9 = _v8 ?? (0, _v49.getTrackingName)(_v0.app_id, _v7);
    _v6 && (0, _v8.saveCookie)({
      name: "was_managed_user",
      value: "true",
      path: "/"
    });
    let {
        data: _v10,
        loading: _v11
      } = (0, _v7.useQuery)(`/apps/${_v0.app_id}?fields=name,thumbnail`),
      _v12 = _v3.pathname === _v12.RequiredOAuthPaths.join,
      _v13 = (0, _v4.useCallback)(_v0 => () => {
        _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo_com.account_connection", 3, {
          component: _v0,
          type: "submit",
          account_type: null,
          managed_user_id: _v6 ?? null,
          user_id: _v2?.user?.id ? `${_v2.user.id}` : null,
          product: _v7 ?? _v9,
          device_id: _v2?.vuid ?? null,
          third_party_integration: _v9
        })), window.location.href = `${_v12.RequiredOAuthPaths.authorize}${_v5}`;
      }, [_v5, _v6, _v2?.user?.id, _v2?.vuid, _v7, _v9]),
      _v14 = null;
    _v0.app_id && _v10 && (_v14 = (0, _v49.getCopyForApp)(_v0.app_id, _v10));
    let _v15 = _v0.app_id === _v49.PartnerAppIds.VenuesDevelopmentApp;
    return (0, _v4.useEffect)(() => {
      _v15 ? _v1(_v9.themes.dark) : _v1(_v9.themes.light);
    }, [_v15, _v1]), (0, _v1.jsxs)(_v14.LoginWrapper, {
      children: [_v15 && (0, _v1.jsx)(_v46, {}), (0, _v1.jsx)(_v14.Layout, {
        children: _v2 && _v14 && !_v11 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [!_v15 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v13.default, {
              logo: _v14.logo
            }), (0, _v1.jsx)(_v14.PromptHeading, {
              size: "4",
              children: _v12 ? _v14.getJoinHeading() : _v14.getLoginHeading()
            })]
          }), (0, _v1.jsx)(_v14.PromptMessage, {
            size: "2",
            children: _v12 ? _v14.getJoinPrompt() : _v14.getLoginPrompt()
          }), _v14.getHeaderDisclaimer() && (0, _v1.jsx)(_v14.PromptMessage, {
            size: "2",
            children: _v14.getHeaderDisclaimer()
          }), (0, _v1.jsx)(_v42, {
            disclaimer: _v14.getDisclaimer(),
            termsAndConditions: _v14.getTermsAndConditions(),
            userInfo: _v0,
            target: "_self",
            onSocialLoginClick: function (_v0) {
              _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo_com.account_connection", 3, {
                component: _v0 ? _v0 + "_social_login" : "social_login",
                type: "submit",
                account_type: null,
                managed_user_id: _v6 ?? null,
                user_id: _v2?.user?.id ? `${_v2.user.id}` : null,
                product: _v7 ?? _v9,
                device_id: _v2?.vuid ?? null,
                third_party_integration: _v9
              }));
            },
            onAuthSuccess: _v13,
            thirdPartyIntegration: _v9
          })]
        }) : (0, _v1.jsx)(_v14.Loader, {})
      }), (0, _v1.jsx)(_v10.MinimalFooterLayout, {})]
    });
  }
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v4.useContext)(_v11.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      _v2 = _v1.query,
      {
        isLoading: _v3
      } = (0, _v48.useValidateClientId)(),
      {
        isLoading: _v4,
        userInfo: _v5
      } = (0, _v47.useManagedUserOauthInfo)((0, _v47.decodeOAuthQuery)(_v2)),
      _v6 = _v0?.user?.uri;
    return ((0, _v4.useEffect)(() => {
      _v6 && _v1.push({
        pathname: _v12.RequiredOAuthPaths.authorize,
        query: _v1.query
      });
    }, [_v1, _v6]), _v4 || _v3 || !_v5.app_id) ? (0, _v1.jsx)(_v14.Layout, {
      children: (0, _v1.jsx)(_v14.Loader, {})
    }) : (0, _v1.jsx)(_v50, {
      userInfo: _v5
    });
  }], 0);
}