{
  "use strict";

  var _v1,
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
    _v21 = ((_v1 = _v21 || {}).control = "control", _v1.variant = "variant", _v1);
  let _v22 = _v5.default.section.withConfig({
      displayName: "forms__FormSection",
      componentId: "sc-3c307515-0"
    })`
  margin-top: ${(0, _v3.rem)(12)};
  display: flex;
  flex-direction: column;
`,
    _v23 = (0, _v5.default)(_v9.Paragraph).withConfig({
      displayName: "forms__Paragraph",
      componentId: "sc-3c307515-1"
    })`
  margin-left: 50%; /*for ie11*/
  margin: auto;
  text-align: center;
  ${_v0 => _v0.faded && _v5.css`
      color: var(--vimeo-colors-text-tertiary);
    `}
  ${_v0 => _v0.addBottomMargin && _v5.css`
      margin-bottom: ${(0, _v3.rem)(8)};
    `}
`,
    _v24 = _v5.default.div.withConfig({
      displayName: "forms__CheckboxContainer",
      componentId: "sc-3c307515-2"
    })`
  margin-top: ${(0, _v3.rem)(8)};
`,
    _v25 = (0, _v5.default)(_v22).withConfig({
      displayName: "forms__FacebookConnectFormSection",
      componentId: "sc-3c307515-3"
    })`
  margin: ${(0, _v3.rem)(35)} 0 ${(0, _v3.rem)(41)} 0;
`,
    _v26 = (0, _v5.default)(_v10.Link).withConfig({
      displayName: "forms__TermsLink",
      componentId: "sc-3c307515-4"
    })`
  text-decoration: underline;
`,
    _v27 = _v5.default.button.withConfig({
      displayName: "forms__LinkText",
      componentId: "sc-3c307515-5"
    })`
  color: var(--vimeo-colors-status-info-primary);
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  font-size: ${(0, _v3.rem)(14)};
`;
  _v0.s(["ConnectToFbForm", 0, function ({
    onSuccess: _v0,
    switchType: _v1,
    xsrft: _v2,
    redirectUrl: _v3,
    shouldOptIntoMarketing: _v4 = !1,
    target: _v5
  }) {
    let [_v6, _v7] = (0, _v4.useState)(_v4),
      _v8 = (0, _v4.useContext)(_v12.ViewerContext);
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [_v1 && (0, _v2.jsxs)(_v23, {
        size: "1",
        faded: !0,
        addBottomMargin: !0,
        children: [(0, _v7.translate)({
          singular: "Already have an account?",
          dictionary: {
            es: {
              singular: "¿Ya tiene una cuenta?"
            },
            "de-DE": {
              singular: "Hast du schon ein Konto?"
            },
            "fr-FR": {
              singular: "Vous avez déjà un compte ?"
            },
            "ja-JP": {
              singular: "すでにアカウントをお持ちですか？"
            },
            "ko-KR": {
              singular: "이미 계정이 있나요?"
            },
            "pt-BR": {
              singular: "Já tem uma conta?"
            },
            "zh-CN": {
              singular: "已有帐户？"
            }
          }
        }), " ", (0, _v2.jsx)(_v10.Link, {
          onClick: _v1,
          element: "span",
          variant: "minimal",
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
        })]
      }), (0, _v2.jsx)(_v25, {
        children: (0, _v2.jsx)(_v18.FacebookForm, {
          xsrft: _v2,
          action: "join",
          optIn: null,
          onClick: () => {
            _v6.BigPictureClient.sendEvent(new _v6.Event("click_to_signup_via_fb", 3, {
              product: "Vimeo Create",
              cta: "continue_with_facebook",
              path: window.location.pathname,
              location: "signup",
              device_id: _v8?.vuid || null,
              lang: _v8?.locale || null,
              platform: window.navigator.platform,
              user_id: _v8?.user?.id.toString() || null,
              session_id: null,
              client_timestamp: null,
              client_ver: null,
              clients_session_start_ts: null,
              debug_mode: null,
              in_background: null,
              is_guest: null,
              flow: null,
              user_package_type: null
            }));
          },
          redirectUrl: _v3,
          target: _v5,
          children: (0, _v7.translate)({
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
          })
        })
      }), (0, _v2.jsxs)(_v22, {
        children: [(0, _v2.jsx)(_v24, {
          children: (0, _v2.jsx)(_v8.Checkbox, {
            checked: _v6,
            onChange: () => {
              _v7(!_v6);
            },
            id: "marketing_opt_in",
            label: (0, _v2.jsx)(_v23, {
              size: "3",
              children: (0, _v7.translate)({
                singular: "I agree to receive newsletters, product updates, and exclusive offers from Vimeo.",
                dictionary: {
                  es: {
                    singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de Vimeo."
                  },
                  "de-DE": {
                    singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von Vimeo zu erhalten."
                  },
                  "fr-FR": {
                    singular: "J'accepte de recevoir des newsletters, des nouveautés produit et des offres exclusives de Vimeo."
                  },
                  "ja-JP": {
                    singular: "Vimeoからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
                  },
                  "ko-KR": {
                    singular: "Vimeo로부터 뉴스레터, 제품 업데이트, 특별 제안을 받는 데 동의합니다."
                  },
                  "pt-BR": {
                    singular: "Concordo em receber boletins informativos, atualizações de produto e ofertas exclusivas do Vimeo."
                  },
                  "zh-CN": {
                    singular: "我同意接收来自 Vimeo 的时事通讯、产品新资讯和独家优惠。"
                  }
                }
              })
            })
          })
        }), (0, _v2.jsx)(_v16.HR, {})]
      }), (0, _v2.jsx)(_v22, {
        children: (0, _v2.jsx)(_v23, {
          size: "3",
          children: (0, _v7.translate)({
            singular: "By joining Vimeo, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK} and {COOKIE_LINK}Cookie Policy{/COOKIE_LINK}.",
            replacements: {
              TERMS_LINK: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "/terms",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }, "terms"),
              PRIVACY_LINK: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "/privacy",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }, "privacy"),
              COOKIE_LINK: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "/cookie_policy",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }, "cookie")
            },
            dictionary: {
              es: {
                singular: "Al registrarse en Vimeo, acepta nuestros {TERMS_LINK}Términos y condiciones{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y nuestra {COOKIE_LINK}Política de cookies{/COOKIE_LINK}."
              },
              "de-DE": {
                singular: "Wenn du dich bei Vimeo registrierst, stimmst du unseren{TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, {PRIVACY_LINK} Datenschutzrichtlinien{/PRIVACY_LINK} und {COOKIE_LINK}Cookie-Richtlinien zu.{/COOKIE_LINK}"
              },
              "fr-FR": {
                singular: "En vous inscrivant sur Vimeo, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} et notre {COOKIE_LINK}politique concernant les cookies{/COOKIE_LINK}."
              },
              "ja-JP": {
                singular: "Vimeoにご登録いただくと、{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、{COOKIE_LINK}Cookieポリシー{/COOKIE_LINK}に同意したものとみなされます。"
              },
              "ko-KR": {
                singular: "Vimeo에 가입함으로써 {TERMS_LINK}서비스 약관{/TERMS_LINK} 및 {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK}, {COOKIE_LINK}쿠키 정책{/COOKIE_LINK}에 동의하게 됩니다."
              },
              "pt-BR": {
                singular: "Ao se cadastrar no Vimeo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e com a {COOKIE_LINK}Política de Cookie do Vimeo.{/COOKIE_LINK}"
              },
              "zh-CN": {
                singular: "加入 Vimeo，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和 {COOKIE_LINK}Cookie 政策{/COOKIE_LINK}。"
              }
            }
          })
        })
      })]
    });
  }, "JoinForm", 0, function ({
    email: _v0,
    fa: _v1,
    name: _v2,
    onSuccess: _v3,
    redirectUrl: _v4,
    shouldOptIntoMarketing: _v5 = !1,
    switchType: _v6,
    xsrft: _v7,
    onEmailChange: _v8,
    redirectUrlAfterSocialLogin: _v9 = "",
    redirectUrlAfterSocialJoin: _v10 = "",
    disableEmail: _v11 = !1,
    socialSubmitBtn: _v12,
    onSocialLoginSubmit: _v13,
    onSocialLoginClick: _v14,
    target: _v15,
    termsAndConditions: _v16,
    disclaimer: _v17,
    onSSOFlowChoice: _v18,
    placeholder: _v19,
    hasF2PVariant: _v20,
    isFullScreen: _v21
  }) {
    let [_v22, _v23] = (0, _v4.useState)(_v5),
      _v24 = () => {
        _v23(!_v22), (0, _v13.trackMarketingTermCheckbox)(!_v22, !1);
      },
      _v25 = _v14 ?? _v13.trackRegistration;
    _v16 = _v16 || (0, _v7.translate)({
      singular: "By joining Vimeo, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK} and {COOKIE_LINK}Cookie Policy{/COOKIE_LINK}.",
      replacements: {
        TERMS_LINK: _v0 => (0, _v2.jsx)(_v26, {
          href: "/terms",
          target: "_blank",
          variant: "minimal",
          format: "soft",
          children: _v0
        }, "terms"),
        PRIVACY_LINK: _v0 => (0, _v2.jsx)(_v26, {
          href: "/privacy",
          target: "_blank",
          variant: "minimal",
          format: "soft",
          children: _v0
        }, "privacy"),
        COOKIE_LINK: _v0 => (0, _v2.jsx)(_v26, {
          href: "/cookie_policy",
          target: "_blank",
          variant: "minimal",
          format: "soft",
          children: _v0
        }, "cookie")
      },
      dictionary: {
        es: {
          singular: "Al registrarse en Vimeo, acepta nuestros {TERMS_LINK}Términos y condiciones{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y nuestra {COOKIE_LINK}Política de cookies{/COOKIE_LINK}."
        },
        "de-DE": {
          singular: "Wenn du dich bei Vimeo registrierst, stimmst du unseren{TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, {PRIVACY_LINK} Datenschutzrichtlinien{/PRIVACY_LINK} und {COOKIE_LINK}Cookie-Richtlinien zu.{/COOKIE_LINK}"
        },
        "fr-FR": {
          singular: "En vous inscrivant sur Vimeo, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} et notre {COOKIE_LINK}politique concernant les cookies{/COOKIE_LINK}."
        },
        "ja-JP": {
          singular: "Vimeoにご登録いただくと、{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、{COOKIE_LINK}Cookieポリシー{/COOKIE_LINK}に同意したものとみなされます。"
        },
        "ko-KR": {
          singular: "Vimeo에 가입함으로써 {TERMS_LINK}서비스 약관{/TERMS_LINK} 및 {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK}, {COOKIE_LINK}쿠키 정책{/COOKIE_LINK}에 동의하게 됩니다."
        },
        "pt-BR": {
          singular: "Ao se cadastrar no Vimeo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e com a {COOKIE_LINK}Política de Cookie do Vimeo.{/COOKIE_LINK}"
        },
        "zh-CN": {
          singular: "加入 Vimeo，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和 {COOKIE_LINK}Cookie 政策{/COOKIE_LINK}。"
        }
      }
    });
    let [_v26, _v27] = (0, _v4.useState)(!1),
      [_v28, _v29] = (0, _v4.useState)(void 0),
      {
        turnstileToken: _v30
      } = (0, _v11.useTurnstile)(!1, "turnstile-container", {
        errorCb: _v0 => {
          "script_load_error" === _v0 || "script_timeout" === _v0 ? _v29((0, _v7.translate)({
            singular: "We're having trouble verifying your browser. This is usually caused by an ad blocker or privacy extension. Try disabling it and {B}refreshing the page{/B}, or {A}contact support{/A}.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }),
              B: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "#",
                variant: "minimal",
                onClick: _v0 => {
                  _v0.preventDefault(), window.location.reload();
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Tenemos problemas para verificar su navegador. Esto suele ser causado por un bloqueador de anuncios o por una extensión de privacidad. Intente desactivarlo y {B}actualizar la página{/B}, o {A}póngase en contacto con el soporte{/A}."
              },
              "de-DE": {
                singular: "Wir haben Schwierigkeiten, Ihren Browser zu verifizieren. Dies wird normalerweise durch einen Adblocker oder eine Datenschutz-Erweiterung verursacht. Versuchen Sie, den Adblocker bzw. die Datenschutz-Erweiterung zu deaktivieren und {B}die Seite neu zu laden{/B}, oder {A}kontaktieren Sie den Support{/A}."
              },
              "fr-FR": {
                singular: "Nous rencontrons des difficultés pour vérifier votre navigateur. Cela est généralement causé par un bloqueur de publicités ou une extension de confidentialité. Essayez de le désactiver et {B}de rafraîchir la page{/B}, ou {A}contacter le support{/A}."
              },
              "ja-JP": {
                singular: "ブラウザの確認に問題が発生しています。これは通常、広告ブロッカーやプライバシー関連の拡張機能が原因です。それらを無効にして{B}ページを再読み込みする{/B}か、{A}サポートにお問い合わせください{/A}。"
              },
              "ko-KR": {
                singular: "브라우저를 확인하는 데 문제가 발생했습니다. 이는 일반적으로 광고 차단기나 개인정보 보호 확장 프로그램으로 인해 발생합니다. 해당 확장 프로그램을 비활성화한 다음 {B}페이지를 새로 고침{/B}하거나 {A}지원팀에 문의{/A}."
              },
              "pt-BR": {
                singular: "Estamos com dificuldades para verificar seu navegador. Isso geralmente é causado por um bloqueador de anúncios ou por uma extensão de privacidade. Tente desativar o bloqueador ou a extensão e {B}atualizar a página{/B}, ou {A}entre em contato com o suporte{/A}."
              },
              "zh-CN": {
                singular: "我们在验证您的浏览器时遇到问题。这通常是由广告拦截器或隐私扩展引起的。请尝试禁用它并{B}刷新页面{/B}，或 {A}联系支持{/A}。"
              }
            }
          })) : (_v27(!0), _v29((0, _v7.translate)({
            singular: "Whoops! We are having some technical difficulties. To continue, contact our {A}support team{/A}.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¡Uy! Estamos teniendo algunas dificultades técnicas. Para continuar, póngase en contacto con nuestro {A}equipo de asistencia{/A}."
              },
              "de-DE": {
                singular: "Hoppla! Wir haben einige technische Schwierigkeiten. Um fortzufahren, kontaktieren Sie unser {A}Support-Team{/A}."
              },
              "fr-FR": {
                singular: "Oups ! Nous rencontrons des difficultés techniques. Pour continuer, contactez notre {A}équipe d'assistance{/A}."
              },
              "ja-JP": {
                singular: "申し訳ありません。現在、技術的な問題が発生しています。続行するには、 {A}サポートチーム{/A}までお問い合わせください。"
              },
              "ko-KR": {
                singular: "이런! 현재 기술적인 문제가 발생했습니다. 계속하려면 {A}지원팀{/A}에 문의하세요."
              },
              "pt-BR": {
                singular: "Opa! Estamos com algumas dificuldades técnicas. Para continuar, entre em contato com nossa {A}equipe de suporte{/A}."
              },
              "zh-CN": {
                singular: "抱歉！我们遇到了一些技术困难。如需继续，请联系我们的{A}支持团队{/A}。"
              }
            }
          })));
        },
        beforeInteractiveCb: () => _v27(!0)
      });
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v22, {
        children: (0, _v2.jsx)(_v14.JoinEmailForm, {
          xsrft: _v7,
          redirectUrl: _v4,
          optIn: _v22,
          name: _v2,
          email: _v0,
          disableEmail: _v11,
          onEmailChange: _v8,
          fa: _v1,
          onSuccess: _v3,
          placeholder: _v19,
          termsAndConditions: _v16,
          disclaimer: _v17,
          hasF2PVariant: _v20,
          marketingCheckBox: (0, _v2.jsx)(_v17.default, {
            hideHorizontalRule: !0,
            marketingOptIn: _v22,
            marketingOptInHandler: _v24
          }),
          turnstileToken: _v30,
          turnstileError: _v28,
          captchaVisible: _v26,
          isFullScreen: _v21
        })
      }), !1, !_v20 && (0, _v2.jsx)(_v22, {
        children: (0, _v2.jsx)(_v16.OrSeparator, {
          children: (0, _v7.translate)({
            singular: "or",
            dictionary: {
              es: {
                singular: "o"
              },
              "de-DE": {
                singular: "oder"
              },
              "fr-FR": {
                singular: "ou"
              },
              "ja-JP": {
                singular: "または"
              },
              "ko-KR": {
                singular: "또는"
              },
              "pt-BR": {
                singular: "ou"
              },
              "zh-CN": {
                singular: "或"
              }
            }
          })
        })
      }), (0, _v2.jsx)(_v22, {
        children: (0, _v2.jsx)(_v19.GoogleForm, {
          xsrft: _v7,
          action: "join",
          optIn: _v22,
          redirectUrl: _v4,
          onClick: () => {
            (0, _v13.trackJoinWithGoogleClick)(!1, _v4), _v25("google", _v1);
          },
          redirectUrlAfterSocialLogin: _v9,
          redirectUrlAfterSocialJoin: _v10,
          target: _v15,
          onSubmit: _v13,
          socialSubmitBtn: _v12,
          turnstileToken: _v30,
          children: (0, _v7.translate)({
            singular: "Join with Google",
            dictionary: {
              es: {
                singular: "Regístrate con Google"
              },
              "de-DE": {
                singular: "Registriere dich mit Google"
              },
              "fr-FR": {
                singular: "S'inscrire avec Google"
              },
              "ja-JP": {
                singular: "Googleで登録"
              },
              "ko-KR": {
                singular: "Google로 가입하기"
              },
              "pt-BR": {
                singular: "Cadastrar com o Google"
              },
              "zh-CN": {
                singular: "使用 Google 加入"
              }
            }
          })
        })
      }), !_v20 && (0, _v2.jsx)(_v17.default, {
        hideHorizontalRule: !1,
        marketingOptIn: _v22,
        marketingOptInHandler: _v24
      }), _v6 && (0, _v2.jsx)(_v22, {
        children: (0, _v2.jsxs)(_v23, {
          size: "2",
          format: "alternative",
          addBottomMargin: !0,
          children: [(0, _v7.translate)({
            singular: "Already have an account?",
            dictionary: {
              es: {
                singular: "¿Ya tiene una cuenta?"
              },
              "de-DE": {
                singular: "Hast du schon ein Konto?"
              },
              "fr-FR": {
                singular: "Vous avez déjà un compte ?"
              },
              "ja-JP": {
                singular: "すでにアカウントをお持ちですか？"
              },
              "ko-KR": {
                singular: "이미 계정이 있나요?"
              },
              "pt-BR": {
                singular: "Já tem uma conta?"
              },
              "zh-CN": {
                singular: "已有帐户？"
              }
            }
          }), " ", (0, _v2.jsx)(_v27, {
            onClick: _v6,
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
          })]
        })
      }), !_v20 && (0, _v2.jsxs)(_v22, {
        children: [(0, _v2.jsx)(_v23, {
          format: "soft",
          size: "3",
          className: "termsandconditions",
          children: _v16
        }), _v17 && (0, _v2.jsx)(_v23, {
          size: "3",
          children: _v17
        })]
      })]
    });
  }, "LoginForm", 0, function ({
    isTwoStep: _v0 = !1,
    xsrft: _v1,
    switchType: _v2,
    redirectUrl: _v3,
    email: _v4,
    fa: _v5,
    disableEmail: _v6,
    onSuccess: _v7,
    onEmailChange: _v8,
    redirectUrlAfterSocialLogin: _v9 = "",
    redirectUrlAfterSocialJoin: _v10 = "",
    onSocialLoginSubmit: _v11,
    onSocialLoginClick: _v12,
    target: _v13,
    onSSOFlowChoice: _v14,
    showEnterpriseOptInConsent: _v15,
    className: _v16,
    placeholder: _v17,
    submitCtaText: _v18,
    isF2PVariant: _v19,
    isSimplifiedSite: _v20,
    isFullScreen: _v21
  }) {
    let _v22 = _v12 ?? _v13.trackLogin,
      [_v23, _v24] = (0, _v4.useState)(void 0),
      _v25 = (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v22, {
          children: (0, _v2.jsx)(_v15.LoginEmailForm, {
            xsrft: _v1,
            redirectUrl: _v3,
            email: _v4,
            onEmailChange: _v8,
            disableEmail: _v6,
            fa: _v5,
            onSuccess: _v7,
            target: _v13,
            showEnterpriseOptInConsent: _v15,
            placeholder: _v17,
            submitCtaText: _v18,
            className: _v16,
            isF2PVariant: _v19,
            isTwoStep: _v0,
            onTurnstileTokenChange: _v24,
            isFullScreen: _v21
          })
        }), !1]
      }),
      _v26 = (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v22, {
          children: (0, _v2.jsx)(_v18.FacebookForm, {
            xsrft: _v1,
            action: "login",
            optIn: null,
            redirectUrl: _v3,
            target: _v13,
            onSubmit: _v11,
            onClick: () => {
              _v22("facebook", _v5), (0, _v13.trackLoginWithSocialMediaClick)("facebook", _v0, _v3);
            },
            className: _v16,
            turnstileToken: _v23,
            children: (0, _v7.translate)({
              singular: "Log in with Facebook",
              dictionary: {
                es: {
                  singular: "Iniciar sesión con Facebook"
                },
                "de-DE": {
                  singular: "Über Facebook anmelden"
                },
                "fr-FR": {
                  singular: "Connexion avec Facebook"
                },
                "ja-JP": {
                  singular: "Facebookでログイン"
                },
                "ko-KR": {
                  singular: "Facebook 계정으로 로그인"
                },
                "pt-BR": {
                  singular: "Entrar com Facebook"
                },
                "zh-CN": {
                  singular: "使用 Facebook 登录"
                }
              }
            })
          })
        }), (0, _v2.jsx)(_v22, {
          children: (0, _v2.jsx)(_v19.GoogleForm, {
            xsrft: _v1,
            action: "login",
            optIn: null,
            redirectUrl: _v3,
            onClick: () => {
              _v22("google", _v5), (0, _v13.trackLoginWithSocialMediaClick)("google", _v0, _v3);
            },
            onSubmit: _v11,
            target: _v13,
            redirectUrlAfterSocialLogin: _v9,
            redirectUrlAfterSocialJoin: _v10,
            className: _v16,
            turnstileToken: _v23,
            children: (0, _v7.translate)({
              singular: "Log in with Google",
              dictionary: {
                es: {
                  singular: "Ingresar con Google"
                },
                "de-DE": {
                  singular: "Melde dich mit Google an"
                },
                "fr-FR": {
                  singular: "Connexion avec Google"
                },
                "ja-JP": {
                  singular: "Googleでログイン"
                },
                "ko-KR": {
                  singular: "Google로 로그인"
                },
                "pt-BR": {
                  singular: "Entre com o Google"
                },
                "zh-CN": {
                  singular: "使用 Google 登录"
                }
              }
            })
          })
        }), (0, _v2.jsx)(_v22, {
          children: (0, _v2.jsx)(_v20.AppleForm, {
            xsrft: _v1,
            action: "login",
            optIn: null,
            redirectUrl: _v3,
            target: _v13,
            onSubmit: _v11,
            onClick: () => {
              _v22("apple", _v5), (0, _v13.trackLoginWithSocialMediaClick)("apple", _v0, _v3);
            },
            className: _v16,
            turnstileToken: _v23,
            children: (0, _v7.translate)({
              singular: "Log in with Apple",
              dictionary: {
                es: {
                  singular: "Iniciar sesión con Apple"
                },
                "de-DE": {
                  singular: "Mit Apple einloggen"
                },
                "fr-FR": {
                  singular: "Se connecter avec Apple"
                },
                "ja-JP": {
                  singular: "Appleでログイン"
                },
                "ko-KR": {
                  singular: "Apple로 로그인"
                },
                "pt-BR": {
                  singular: "Entre com seu login da Apple"
                },
                "zh-CN": {
                  singular: "使用 Apple 登录"
                }
              }
            })
          })
        })]
      }),
      _v27 = (0, _v2.jsx)(_v22, {
        children: (0, _v2.jsx)(_v16.OrSeparator, {
          children: (0, _v7.translate)({
            singular: "or",
            dictionary: {
              es: {
                singular: "o"
              },
              "de-DE": {
                singular: "oder"
              },
              "fr-FR": {
                singular: "ou"
              },
              "ja-JP": {
                singular: "または"
              },
              "ko-KR": {
                singular: "또는"
              },
              "pt-BR": {
                singular: "ou"
              },
              "zh-CN": {
                singular: "或"
              }
            }
          })
        })
      }),
      _v28 = [_v25, _v27, _v26];
    return _v0 && (_v28 = _v20 ? [_v25] : [_v26, _v27, _v25]), (0, _v2.jsxs)(_v2.Fragment, {
      children: [_v28, _v2 && (0, _v2.jsx)(_v22, {
        children: (0, _v2.jsxs)(_v23, {
          size: "2",
          format: "alternative",
          addBottomMargin: !0,
          children: [(0, _v7.translate)({
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
          }), " ", (0, _v2.jsx)(_v27, {
            onClick: _v2,
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
          })]
        })
      })]
    });
  }]);
}