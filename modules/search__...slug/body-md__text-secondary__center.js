{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13() {
    return (0, _v2.jsx)(_v4.Text, {
      variant: "body-md",
      color: "text-secondary",
      textAlign: "center",
      children: (0, _v6.translate)({
        singular: "Can't log in? {LINK}Get help{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v2.jsx)(_v12.Link, {
            href: "/help/contact",
            variant: "inline-secondary",
            color: "text-secondary",
            children: _v0
          }, "get-help")
        },
        dictionary: {
          es: {
            singular: "¿No puedes iniciar sesión? {LINK}Obtén ayuda{/LINK}"
          },
          "de-DE": {
            singular: "Probleme beim Anmelden? {LINK}Hilfe erhalten{/LINK}"
          },
          "fr-FR": {
            singular: "Impossible de se connecter ? {LINK}Obtenir de l'aide{/LINK}"
          },
          "ja-JP": {
            singular: "ログインできませんか？ {LINK}ヘルプを見る{/LINK}"
          },
          "ko-KR": {
            singular: "로그인할 수 없나요? {LINK}도움 받기{/LINK}"
          },
          "pt-BR": {
            singular: "Não consegue fazer login? {LINK}Obtenha ajuda{/LINK}"
          },
          "zh-CN": {
            singular: "无法登录？{LINK}获取帮助{/LINK}"
          }
        }
      })
    });
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = "Escape",
    _v17 = "REG_V2_MODAL_CLOSED",
    _v18 = ".iris_modal-btn--close",
    _v19 = `${(0, _v15.rem)(590)}`,
    _v20 = `${(0, _v15.rem)(974)}`;
  (0, _v15.rem)(0);
  let _v21 = `${(0, _v15.rem)(744)}`,
    _v22 = "join",
    _v23 = "login";
  function _v24() {
    try {
      if (window.top && window.top !== window && "number" == typeof window.top.innerWidth) return window.top;
    } catch {}
    return window;
  }
  _v0.s(["CLOSE_ICON_CLASS", 0, _v18, "DESKTOP", 0, _v20, "ESCAPE_KEY", 0, _v16, "LG_BREAKPOINT_PX", 0, 992, "MODAL_CARD_BREAKPOINT", 0, _v21, "MODAL_CARD_BREAKPOINT_PX", 0, 744, "MODAL_TYPE_JOIN", 0, _v22, "MODAL_TYPE_LOGIN", 0, _v23, "REG_V2_MODAL_CLOSE_MESSAGE", 0, _v17, "TABLET", 0, _v19], 0);
  let _v25 = new Set(),
    _v26 = null;
  function _v27() {
    _v25.forEach(_v0 => {
      _v0();
    });
  }
  function _v28(_v0) {
    if (_v25.add(_v0), 1 === _v25.size) {
      let _v0 = _v24();
      _v0.addEventListener("resize", _v27), _v0.addEventListener("orientationchange", _v27), _v0 !== window && window.addEventListener("resize", _v27), _v26 = () => {
        _v0.removeEventListener("resize", _v27), _v0.removeEventListener("orientationchange", _v27), _v0 !== window && window.removeEventListener("resize", _v27);
      };
    }
    return () => {
      _v25.delete(_v0), 0 === _v25.size && (_v26?.(), _v26 = null);
    };
  }
  function _v29(_v0) {
    let _v1 = _v0 ? 992 : 744;
    return (0, _v3.useSyncExternalStore)(_v28, () => _v24().innerWidth < _v1, () => !1);
  }
  function _v30({
    isFullScreen: _v0,
    type: _v1,
    banner: _v2,
    children: _v3,
    ..._v4
  }) {
    let _v5 = (0, _v3.useContext)(_v7.ViewerContext),
      _v6 = _v29(_v0);
    return _v5 ? _v0 ? (0, _v2.jsxs)(_v10.Flex, {
      w: "100%",
      minH: "100vh",
      justifyContent: "space-between",
      background: "white",
      children: [(0, _v2.jsxs)(_v10.Flex, {
        w: {
          base: "100%",
          lg: "50%"
        },
        direction: "column",
        children: [(0, _v2.jsx)(_v9.Box, {
          marginTop: (0, _v5.rem)(32),
          alignSelf: "center",
          children: (0, _v2.jsx)(_v14.default, {
            height: "32",
            width: "74"
          })
        }), (0, _v2.jsxs)(_v9.Box, {
          padding: {
            base: "5",
            lg: "0"
          },
          w: "100%",
          maxW: (0, _v5.rem)(400),
          alignSelf: "center",
          margin: {
            base: `${(0, _v5.rem)(20)} 0`,
            lg: "auto 0"
          },
          display: _v6 ? "flex" : "block",
          flexDirection: "column",
          flex: _v6 ? 1 : "initial",
          children: [_v2 && (0, _v2.jsx)(_v9.Box, {
            marginBottom: (0, _v5.rem)(24),
            children: _v2
          }), _v3]
        }), _v1 === _v23 && (0, _v2.jsx)(_v9.Box, {
          marginBottom: (0, _v5.rem)(32),
          alignSelf: "center",
          display: {
            base: "none",
            lg: "block"
          },
          children: (0, _v2.jsx)(_v13, {})
        })]
      }), (0, _v2.jsx)(_v9.Box, {
        w: "50%",
        display: {
          base: "none",
          lg: "flex"
        },
        maxH: "100vh",
        overflow: "hidden",
        children: (0, _v2.jsx)(_v9.Box, {
          as: "video",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          autoPlay: !0,
          loop: !0,
          playsInline: !0,
          muted: !0,
          src: "https://player.vimeo.com/progressive_redirect/playback/1088206071/rendition/720p/file.mp4?loc=external&signature=7a8a69b0cd71e9fd6be8e8ea09efb9c270b710aef33c3aef3b86e953d9eab568",
          poster: "https://i.vimeocdn.com/custom_asset/d5d3585a7f0da266f9c067753e2677d6"
        })
      })]
    }) : (0, _v2.jsx)(_v32, {
      className: "f2pJoinLoginContainer",
      tabIndex: -1,
      onKeyDown: _v0 => {
        _v0.key === _v16 && window.parent.postMessage(_v17, window.location.origin);
      },
      overflowY: "auto",
      minHeight: "100vh",
      direction: "column",
      overflow: "hidden",
      background: "var(--vimeo-colors-fill-surface)",
      ..._v4,
      children: (0, _v2.jsx)(_v10.Flex, {
        className: "f2pJoinLoginScreen",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingY: (0, _v5.rem)(24),
        paddingX: 0,
        width: "100%",
        flexGrow: +!!_v6,
        children: (0, _v2.jsx)(_v31, {
          maxW: (0, _v5.rem)(400),
          paddingX: (0, _v5.rem)(20),
          marginInline: "auto",
          display: _v6 ? "flex" : "block",
          flexDirection: "column",
          flexGrow: +!!_v6,
          children: _v3
        })
      })
    }) : (0, _v2.jsx)(_v10.Flex, {
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v2.jsx)(_v11.Spinner, {})
    });
  }
  var _v31 = (0, _v8.default)(_v9.Box).withConfig({
      displayName: "AuthModalLayout___StyledBox",
      componentId: "sc-16e7f38a-0"
    })`
            width: -webkit-fill-available;
            width: -moz-available;
          `,
    _v32 = (0, _v8.default)(_v10.Flex).withConfig({
      displayName: "AuthModalLayout___StyledFlex",
      componentId: "sc-16e7f38a-1"
    })`
        @media screen and (min-width: ${_v19}) {
          justify-content: center;
        }
      `,
    _v33 = _v0.i(0);
  let _v34 = _v8.css`
  button {
    padding: 0;
    justify-content: flex-start;
    color: var(--vimeo-colors-text-secondary);
    &:hover {
      color: var(--vimeo-colors-text-secondary);
    }
    font-size: ${(0, _v15.rem)(14)};
    font-weight: 400;
    line-height: ${(0, _v15.rem)(20)};
    text-decoration-line: underline;
    text-decoration: none;
  }
  svg {
    width: ${(0, _v15.rem)(19)};
    height: ${(0, _v15.rem)(19)};
    margin-left: -${(0, _v15.rem)(5)};
    margin-right: ${(0, _v15.rem)(4)};
    path {
      fill: var(--vimeo-colors-text-secondary);
    }
  }
`,
    _v35 = () => (0, _v2.jsxs)("svg", {
      width: "31",
      height: "31",
      viewBox: "0 0 31 31",
      fill: "none",
      children: [(0, _v2.jsx)("ellipse", {
        cx: "15.06",
        cy: "15.58",
        rx: "15.06",
        ry: "14.815"
      }), (0, _v2.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.224 10.44a1.02 1.02 0 0 0-1.426 0l-3.74 3.678-3.738-3.678a1.02 1.02 0 0 0-1.426 0l-.058.058a.98.98 0 0 0 0 1.402l3.739 3.678-3.74 3.68a.98.98 0 0 0 0 1.402l.058.057a1.02 1.02 0 0 0 1.425 0l3.74-3.679 3.74 3.68a1.02 1.02 0 0 0 1.427 0l.058-.058a.98.98 0 0 0 0-1.403l-3.74-3.679 3.739-3.678a.98.98 0 0 0 0-1.402l-.058-.058Z",
        fill: "#fff"
      })]
    });
  var _v36 = _v0.i(0);
  let _v37 = ({
      handleClick: _v0,
      text: _v1
    }) => (0, _v2.jsx)(_v33.Button, {
      color: {
        color: "transparent"
      },
      icon: (0, _v2.jsx)(_v36.ChevronLeft, {}),
      variant: "hyperminimal",
      onClick: _v0 => {
        _v0.stopPropagation(), _v0?.();
      },
      children: _v1 || (0, _v6.translate)({
        singular: "Go back",
        dictionary: {
          es: {
            singular: "Volver"
          },
          "de-DE": {
            singular: "Zurück"
          },
          "fr-FR": {
            singular: "Retour"
          },
          "ja-JP": {
            singular: "戻る"
          },
          "ko-KR": {
            singular: "돌아가기"
          },
          "pt-BR": {
            singular: "Voltar"
          },
          "zh-CN": {
            singular: "返回"
          }
        }
      })
    }),
    _v38 = ({
      handleCloseClick: _v0,
      hideInMobile: _v1
    }) => {
      var _v2;
      let _v3,
        _v4 = (_v2 = !!_v0, _v3 = (0, _v3.useRef)(null), (0, _v3.useEffect)(() => {
          _v2 || (_v3.current = window.parent.document.querySelector(_v18));
        }, [_v2]), _v3),
        _v5 = () => {
          _v0 ? _v0() : (window.parent.postMessage(_v17, window.location.origin), _v4.current && _v4.current.click());
        };
      return (0, _v2.jsx)(_v2.Fragment, {
        children: (0, _v2.jsxs)(_v39, {
          children: [(0, _v2.jsx)(_v41, {
            children: (0, _v2.jsx)(_v33.Button, {
              color: {
                color: "transparent"
              },
              icon: (0, _v2.jsx)(_v35, {}),
              variant: "hyperminimal",
              onClick: _v5
            })
          }), _v1 ? null : (0, _v2.jsx)(_v40, {
            children: (0, _v2.jsx)(_v37, {
              handleClick: _v5
            })
          })]
        })
      });
    },
    _v39 = _v8.default.div.withConfig({
      displayName: "CloseButton__ButtonContainer",
      componentId: "sc-54835adf-0"
    })`
  background: transparent;
  position: relative;
  margin-bottom: ${(0, _v15.rem)(24)};
  @media screen and (min-width: ${_v19}) {
    position: absolute;
    right: ${(0, _v15.rem)(24)};
    top: ${(0, _v15.rem)(30)};
  }
  @media screen and (min-width: ${_v20}) {
    right: ${(0, _v15.rem)(44)};
    top: ${(0, _v15.rem)(46)};
  }
`,
    _v40 = _v8.default.span.withConfig({
      displayName: "CloseButton__ButtonMobile",
      componentId: "sc-54835adf-1"
    })`
  ${_v34};
  display: block;
  @media screen and (min-width: ${_v19}) {
    display: none;
  }
`,
    _v41 = _v8.default.span.withConfig({
      displayName: "CloseButton__ButtonDesktop",
      componentId: "sc-54835adf-2"
    })`
  button {
    color: transparent;
    &:hover {
      color: transparent;
    }
  }
  svg {
    width: ${(0, _v15.rem)(36)};
    height: ${(0, _v15.rem)(36)};
    path {
      fill: var(--vimeo-colors-text-primary);
    }
  }
  display: none;
  @media screen and (min-width: ${_v19}) {
    display: block;
  }
`;
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = () => {
    let _v0 = (0, _v43.usePico)(),
      _v1 = (0, _v3.useCallback)(_v0 => {
        null !== _v0 && _v0.track("unified_auth_displayed", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_type: _v0.authType,
          unified_auth_viewer_auth_status: _v0.viewerAuthStatus,
          referrer_page: _v0.referrerPage,
          unified_auth_is_full_screen: _v0.isFullScreen,
          unified_auth_is_simplified_site: _v0.isSimplifiedSite
        });
      }, [_v0]),
      _v2 = (0, _v3.useCallback)(_v0 => {
        null !== _v0 && _v0.track("unified_auth_button_clicked", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_step: _v0.step,
          unified_auth_element: _v0.element
        });
      }, [_v0]),
      _v3 = (0, _v3.useCallback)(_v0 => {
        null !== _v0 && _v0.track("unified_auth_email_resolved", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_resolved_step: _v0.resolvedStep
        });
      }, [_v0]),
      _v4 = (0, _v3.useCallback)(_v0 => {
        null !== _v0 && _v0.track("unified_auth_completed", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_method: _v0.method,
          unified_auth_outcome: _v0.outcome
        });
      }, [_v0]),
      _v5 = (0, _v3.useCallback)(_v0 => {
        null !== _v0 && _v0.track("unified_auth_error", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_step: _v0.step,
          unified_auth_error_reason: _v0.reason
        });
      }, [_v0]);
    return (0, _v3.useMemo)(() => ({
      trackUnifiedAuthDisplayed: _v1,
      trackUnifiedAuthButtonClicked: _v2,
      trackUnifiedAuthEmailResolved: _v3,
      trackUnifiedAuthCompleted: _v4,
      trackUnifiedAuthError: _v5
    }), [_v1, _v2, _v3, _v4, _v5]);
  };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = "__vimeoHcaptchaOnload";
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = () => (0, _v6.translate)({
    singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
    dictionary: {
      es: {
        singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
      },
      "de-DE": {
        singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
      },
      "fr-FR": {
        singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
      },
      "ja-JP": {
        singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
      },
      "ko-KR": {
        singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
      },
      "pt-BR": {
        singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
      },
      "zh-CN": {
        singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
      }
    }
  });
  async function _v53(_v0, _v1, _v2, _v3) {
    let _v4 = _v51.ssoDataInitialState;
    if (await (0, _v51.validateSSOEmail)(_v0, _v0 => {
      _v4 = _v0;
    }), _v4.SSO && !_v4.bypassSSO) return {
      step: "sso",
      connection: _v4.connection,
      customDomain: _v4.customDomain || void 0,
      firstTimeSSOLogin: _v4.firstTimeSSOLogin
    };
    let _v5 = new URLSearchParams({
      email: _v0,
      token: _v1,
      action: "join",
      service: "vimeo",
      email_validation: "true",
      unified_auth_flow_id: _v3
    });
    _v2 && _v5.set("hcaptcha_token", _v2);
    try {
      let _v0 = await (0, _v50.Login)(_v5.toString(), "/join");
      if (_v0?.status === 429) return {
        step: "error",
        message: (0, _v6.translate)({
          singular: "Too many requests, please try again later.",
          dictionary: {
            es: {
              singular: "Demasiadas solicitudes, inténtelo de nuevo más tarde."
            },
            "de-DE": {
              singular: "Zu viele Anfragen. Bitte versuchen Sie es später erneut."
            },
            "fr-FR": {
              singular: "Trop de requêtes, veuillez réessayer plus tard."
            },
            "ja-JP": {
              singular: "リクエストが多すぎます。しばらくしてから再度お試しください。"
            },
            "ko-KR": {
              singular: "요청이 너무 많습니다. 나중에 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Muitas solicitações, por favor tente novamente mais tarde."
            },
            "zh-CN": {
              singular: "请求过多，请稍后再试。"
            }
          }
        })
      };
      return {
        step: "error",
        message: _v52()
      };
    } catch (_v0) {
      if (_v0?.status === 200) return {
        step: "register"
      };
      if (_v0?.status === 418 && _v0?.has_error_user_exists) return {
        step: "login"
      };
      if (_v0?.status === 418 && "string" == typeof _v0?.email) return {
        step: "error",
        message: _v0.email
      };
      return {
        step: "error",
        message: _v52()
      };
    }
  }
  let _v54 = _v0 => (0, _v2.jsx)(_v12.Link, {
      variant: "brand",
      fontWeight: "medium",
      fontSize: "body-sm",
      ..._v0
    }),
    _v55 = {
      TERMS_LINK: _v0 => (0, _v2.jsx)(_v54, {
        href: "/terms",
        target: "_blank",
        children: _v0
      }, "terms"),
      PRIVACY_LINK: _v0 => (0, _v2.jsx)(_v54, {
        href: "/privacy",
        target: "_blank",
        children: _v0
      }, "privacy")
    };
  function _v56() {
    let _v0 = (0, _v3.useContext)(_v7.ViewerContext);
    return (0, _v2.jsx)(_v4.Text, {
      variant: "body-sm",
      color: "text-secondary",
      children: _v0?.isSimplifiedSite ? (0, _v6.translate)({
        singular: "By logging in to VideoJi, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK} and acknowledge our {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}",
        replacements: _v55,
        dictionary: {
          es: {
            singular: "Al iniciar sesión en VideoJi, acepta nuestros {TERMS_LINK}Términos de servicio{/TERMS_LINK} y reconoce nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}"
          },
          "de-DE": {
            singular: "Wenn Sie sich bei VideoJi einloggen, stimmen Sie unseren {TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK} zu und erkennen unsere {PRIVACY_LINK}Datenschutzerklärung{/PRIVACY_LINK} an"
          },
          "fr-FR": {
            singular: "En vous connectant à VideoJi, vous acceptez nos {TERMS_LINK}Conditions d'utilisation{/TERMS_LINK} et reconnaissez notre {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}"
          },
          "ja-JP": {
            singular: "VideoJiにログインすることで、{TERMS_LINK}利用規約{/TERMS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を認めたものとします。"
          },
          "ko-KR": {
            singular: "VideoJi에 로그인하면 {TERMS_LINK}서비스 약관{/TERMS_LINK}에 동의하고 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인했음을 인정합니다."
          },
          "pt-BR": {
            singular: "Ao efetuar login no VideoJi, você concorda com nossos {TERMS_LINK}Termos de Serviço{/TERMS_LINK} e reconhece nossa {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}"
          },
          "zh-CN": {
            singular: "登录 VideoJi 后，您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}，并已知悉我们的{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}"
          }
        }
      }) : (0, _v6.translate)({
        singular: "By logging in to Vimeo, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK} and acknowledge our {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}",
        replacements: _v55,
        dictionary: {
          es: {
            singular: "Al iniciar sesión en Vimeo, acepta nuestros {TERMS_LINK}Términos de servicio{/TERMS_LINK} y reconoce nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}"
          },
          "de-DE": {
            singular: "Wenn Sie sich bei Vimeo einloggen, stimmen Sie unseren {TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK} zu und erkennen unsere {PRIVACY_LINK}Datenschutzerklärung{/PRIVACY_LINK} an"
          },
          "fr-FR": {
            singular: "En vous connectant à Vimeo, vous acceptez nos {TERMS_LINK}Conditions d'utilisation{/TERMS_LINK} et reconnaissez notre {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}"
          },
          "ja-JP": {
            singular: "Vimeoにログインすることで、{TERMS_LINK}利用規約{/TERMS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を認めたものとします。"
          },
          "ko-KR": {
            singular: "Vimeo에 로그인하면 {TERMS_LINK}서비스 약관{/TERMS_LINK}에 동의하고 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인했음을 인정합니다."
          },
          "pt-BR": {
            singular: "Ao efetuar login no Vimeo, você concorda com nossos {TERMS_LINK}Termos de Serviço{/TERMS_LINK} e reconhece nossa {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}"
          },
          "zh-CN": {
            singular: "登录 Vimeo 后，您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}，并已知悉我们的{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}"
          }
        }
      })
    });
  }
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = "unified_auth_email_form",
    _v63 = "hcaptcha-auth-container",
    _v64 = _v45.object({
      email: _v45.string().email((0, _v6.translate)({
        singular: "Please enter a valid email address",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an"
          },
          "fr-FR": {
            singular: "Veuillez saisir une adresse e-mail valide"
          },
          "ja-JP": {
            singular: "正しいメールアドレスを入力してください"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido"
          },
          "zh-CN": {
            singular: "请输入有效的电子邮件地址"
          }
        }
      })).required((0, _v6.translate)({
        singular: "Please enter a valid email address",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an"
          },
          "fr-FR": {
            singular: "Veuillez saisir une adresse e-mail valide"
          },
          "ja-JP": {
            singular: "正しいメールアドレスを入力してください"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido"
          },
          "zh-CN": {
            singular: "请输入有效的电子邮件地址"
          }
        }
      }))
    }),
    _v65 = {
      google: "social_google",
      facebook: "social_facebook",
      apple: "social_apple"
    };
  function _v66({
    flowId: _v0,
    onResolved: _v1,
    isFullScreen: _v2,
    isSimplifiedSite: _v3,
    redirectUrlAfterSocialLogin: _v4,
    redirectUrlAfterSocialJoin: _v5,
    showGetHelp: _v6
  }) {
    var _v7;
    let _v8,
      _v9,
      _v10 = (0, _v3.useContext)(_v7.ViewerContext),
      _v11 = _v10?.xsrft || "",
      [_v12, _v13] = (0, _v3.useState)(null),
      [_v14, _v15] = (0, _v3.useState)(!1),
      _v16 = _v10?.isHcaptchaAuthEnforcing === !0,
      {
        trackUnifiedAuthButtonClicked: _v17,
        trackUnifiedAuthEmailResolved: _v18
      } = _v44(),
      {
        trackHcaptchaLoadFailed: _v19,
        trackHcaptchaChallengeShown: _v20,
        trackHcaptchaExecuteCompleted: _v21
      } = (_v7 = "unified_auth_email", _v8 = (0, _v43.usePico)(), _v9 = (0, _v3.useCallback)(_v0 => {
        null !== _v8 && _v8.track("hcaptcha_load_failed", {
          hcaptcha_load_failed_reason: _v0.reason,
          hcaptcha_load_failed_surface: _v7,
          unified_auth_flow_id: _v0 ?? null
        });
      }, [_v8, _v7, _v0]), {
        trackHcaptchaLoadFailed: _v9,
        trackHcaptchaChallengeShown: (0, _v3.useCallback)(() => {
          null !== _v8 && _v8.track("hcaptcha_challenge_shown", {
            hcaptcha_challenge_surface: _v7,
            unified_auth_flow_id: _v0 ?? null
          });
        }, [_v8, _v7, _v0]),
        trackHcaptchaExecuteCompleted: (0, _v3.useCallback)(_v0 => {
          null !== _v8 && _v8.track("hcaptcha_execute_completed", {
            hcaptcha_execute_outcome: _v0.outcome,
            hcaptcha_execute_surface: _v7,
            unified_auth_flow_id: _v0 ?? null
          });
        }, [_v8, _v7, _v0])
      }),
      _v22 = _v0 => {
        _v16 && ("script_load_error" === _v0 || "script_timeout" === _v0 ? (_v15(!0), _v13((0, _v6.translate)({
          singular: "We're having trouble verifying your browser. This is usually caused by an ad blocker or privacy extension. Try disabling it and {B}refreshing the page{/B}, or {A}contact support{/A}.",
          replacements: {
            A: _v0 => (0, _v2.jsx)(_v12.Link, {
              href: "https://vimeo.com/help/contact",
              variant: "inline-secondary",
              target: "_blank",
              children: _v0
            }),
            B: _v0 => (0, _v2.jsx)(_v12.Link, {
              href: "#",
              variant: "inline-secondary",
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
        }))) : _v13((0, _v6.translate)({
          singular: "Please complete verification and try again.",
          dictionary: {
            es: {
              singular: "Por favor, complete la verificación y vuelva a intentarlo."
            },
            "de-DE": {
              singular: "Bitte schließen Sie die Überprüfung ab und versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Veuillez compléter la vérification et réessayer."
            },
            "ja-JP": {
              singular: "本人確認を完了して、もう一度お試しください。"
            },
            "ko-KR": {
              singular: "인증을 완료한 후 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Por favor, conclua a verificação e tente novamente."
            },
            "zh-CN": {
              singular: "请完成验证后重试。"
            }
          }
        })));
      },
      {
        execute: _v23,
        isActive: _v24
      } = function (_v0, _v1 = {}) {
        let {
            enabled: _v2 = !1,
            errorCb: _v3,
            openCb: _v4
          } = _v1,
          _v5 = (0, _v3.useContext)(_v7.ViewerContext),
          _v6 = _v5?.hcaptchaAuthSiteKey ?? "",
          _v7 = _v5?.locale ?? "en",
          _v8 = _v2 && !!_v6,
          _v9 = (0, _v3.useRef)(_v3),
          _v10 = (0, _v3.useRef)(_v4);
        (0, _v3.useEffect)(() => {
          _v9.current = _v3, _v10.current = _v4;
        });
        let _v11 = (0, _v3.useRef)(null),
          _v12 = (0, _v3.useRef)(void 0),
          _v13 = (0, _v3.useRef)(void 0);
        return (0, _v3.useEffect)(() => {
          let _v0;
          if (!_v8) return;
          let _v1 = {
            promise: new Promise(_v0 => {
              _v0 = _v0;
            }),
            resolve: _v0
          };
          _v12.current = _v1;
          let _v2 = !1,
            _v3 = _v0 => {
              !_v2 && (_v1.resolve(_v0), _v0 && _v9.current?.(_v0));
            };
          return function (_v0) {
            if ("u" > typeof hcaptcha) return Promise.resolve(null);
            if (_v1) return _v1;
            let _v1 = window;
            return _v1 = new Promise(_v0 => {
              let _v1,
                _v2 = document.createElement("script"),
                _v3 = !1,
                _v4 = _v0 => {
                  _v3 || (_v3 = !0, void 0 !== _v1 && clearTimeout(_v1), delete _v1[_v48], _v0 && (_v1 = void 0, _v2.remove()), _v0(_v0));
                };
              _v1[_v48] = () => _v4(null);
              let _v5 = new URLSearchParams({
                render: "explicit",
                onload: _v48,
                hl: _v0
              });
              _v2.src = `https://js.hcaptcha.com/1/api.js?${_v5.toString()}`, _v2.async = !0, _v2.defer = !0, _v2.onerror = () => _v4("script_load_error"), _v1 = window.setTimeout(() => _v4("script_timeout"), 0), document.body.appendChild(_v2);
            });
          }(_v7).then(_v0 => {
            if (_v2) return;
            if (_v0 || "u" < typeof hcaptcha) return void _v3(_v0 ?? "challenge_error");
            let _v1 = () => {
              !_v13.current && _v11.current && "u" > typeof hcaptcha && hcaptcha.reset(_v11.current);
            };
            try {
              _v11.current = hcaptcha.render(_v0, {
                sitekey: _v6,
                size: "invisible",
                hl: _v7,
                "error-callback": _v1,
                "expired-callback": _v1,
                "chalexpired-callback": _v1,
                "open-callback": () => {
                  _v10.current?.();
                }
              }), _v3(null);
            } catch {
              _v3("challenge_error");
            }
          }), () => {
            if (_v2 = !0, _v11.current && "u" > typeof hcaptcha) try {
              hcaptcha.remove(_v11.current);
            } catch {}
            _v11.current = null, _v12.current = void 0;
          };
        }, [_v8]), {
          execute: (0, _v3.useCallback)(async () => {
            if (!_v8) return {
              token: ""
            };
            if (_v13.current) return _v13.current;
            let _v0 = (async () => {
              let _v0 = _v12.current?.promise ?? Promise.resolve("script_timeout"),
                _v1 = await _v0;
              if (_v1) return {
                token: "",
                reason: _v1
              };
              let _v2 = _v11.current;
              if (!_v2 || "u" < typeof hcaptcha) return _v9.current?.("challenge_error"), {
                token: "",
                reason: "challenge_error"
              };
              try {
                let {
                  response: _v0
                } = await hcaptcha.execute(_v2, {
                  async: !0
                });
                try {
                  hcaptcha.reset(_v2);
                } catch {}
                return {
                  token: _v0 ?? ""
                };
              } catch (_v0) {
                try {
                  hcaptcha.reset(_v2);
                } catch {}
                let _v1 = "string" == typeof _v0 ? _v0 : "";
                if ("challenge-closed" === _v1 || "challenge-expired" === _v1) return {
                  token: "",
                  reason: "abandoned"
                };
                return _v9.current?.("challenge_error"), {
                  token: "",
                  reason: "challenge_error"
                };
              }
            })();
            _v13.current = _v0;
            try {
              return await _v0;
            } finally {
              _v13.current = void 0;
            }
          }, [_v8]),
          isActive: _v8
        };
      }(_v63, {
        enabled: !0,
        errorCb: _v0 => {
          _v0 && (_v19({
            reason: _v0
          }), _v22(_v0));
        },
        openCb: _v20
      }),
      _v25 = (0, _v47.useForm)({
        validationSchema: _v64,
        initialValues: {
          email: ""
        },
        onSubmit: async _v0 => {
          let _v1;
          if (_v17({
            flowId: _v0,
            step: "email",
            element: "continue_with_email"
          }), !_v25.valid) return void _v13((0, _v6.translate)({
            singular: "Please enter a valid email address",
            dictionary: {
              es: {
                singular: "Introduce una dirección de correo electrónico válida."
              },
              "de-DE": {
                singular: "Bitte gib eine gültige E-Mail-Adresse an"
              },
              "fr-FR": {
                singular: "Veuillez saisir une adresse e-mail valide"
              },
              "ja-JP": {
                singular: "正しいメールアドレスを入力してください"
              },
              "ko-KR": {
                singular: "올바른 이메일 주소를 입력하세요."
              },
              "pt-BR": {
                singular: "Digite um endereço de e-mail válido"
              },
              "zh-CN": {
                singular: "请输入有效的电子邮件地址"
              }
            }
          }));
          _v13(null);
          let {
            token: _v2,
            reason: _v3
          } = await _v23();
          if (_v21({
            outcome: _v2 ? "token_minted" : _v3 ?? (_v24 ? "empty_response" : "inactive")
          }), _v2) _v1 = _v2;else if (_v3 && _v16) return void _v22(_v3);
          let _v4 = await _v53(_v0.email, _v11, _v1, _v0);
          (_v18({
            flowId: _v0,
            resolvedStep: _v4.step
          }), "error" === _v4.step) ? _v13(_v4.message) : _v1(_v4, _v0.email);
        }
      }),
      _v26 = (0, _v47.useField)(_v25, "email"),
      _v27 = _v0 => {
        _v17({
          flowId: _v0,
          step: "email",
          element: _v65[_v0]
        });
      },
      _v28 = _v12 || (_v26.meta.touched && _v26.meta.errors ? String(_v26.meta.errors) : null),
      _v29 = (0, _v6.translate)({
        singular: "Sign up or log in to continue",
        dictionary: {
          es: {
            singular: "Regístrate o inicia sesión para continuar"
          },
          "de-DE": {
            singular: "Registrieren Sie sich oder melden Sie sich an, um fortzufahren"
          },
          "fr-FR": {
            singular: "Inscrivez-vous ou connectez-vous pour continuer"
          },
          "ja-JP": {
            singular: "続行するには、登録またはログインしてください"
          },
          "ko-KR": {
            singular: "계속하려면 가입하거나 로그인하세요"
          },
          "pt-BR": {
            singular: "Inscreva-se ou faça login para continuar"
          },
          "zh-CN": {
            singular: "注册或登录以继续"
          }
        }
      }),
      _v30 = (0, _v6.translate)({
        singular: "One account — we'll log you in or help you create one.",
        dictionary: {
          es: {
            singular: "Una cuenta — iniciaremos sesión por ti o te ayudaremos a crear una."
          },
          "de-DE": {
            singular: "Ein Konto — wir melden Sie an oder helfen Ihnen, eines zu erstellen."
          },
          "fr-FR": {
            singular: "Un seul compte — nous vous connecterons ou vous aiderons à en créer un."
          },
          "ja-JP": {
            singular: "1つのアカウント — ログインするか、新規作成をお手伝いします。"
          },
          "ko-KR": {
            singular: "하나의 계정 — 로그인해 드리거나 새 계정 생성을 도와드립니다."
          },
          "pt-BR": {
            singular: "Uma conta — faremos seu login ou ajudaremos você a criar uma."
          },
          "zh-CN": {
            singular: "一个账号 — 我们会为你登录或帮助你创建一个。"
          }
        }
      }),
      _v31 = _v29(_v2);
    return (0, _v2.jsxs)(_v10.Flex, {
      direction: "column",
      width: "100%",
      flexGrow: _v31 ? 1 : void 0,
      children: [_v31 && (0, _v2.jsx)(_v9.Box, {
        marginTop: "auto"
      }), (0, _v2.jsx)(_v4.Text, {
        variant: "heading-md",
        marginBottom: (0, _v5.rem)(8),
        textAlign: "center",
        children: _v29
      }), (0, _v2.jsx)(_v4.Text, {
        variant: "body-md",
        color: "text-secondary",
        marginBottom: (0, _v5.rem)(20),
        textAlign: "center",
        children: _v30
      }), !_v3 && (0, _v2.jsxs)(_v10.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v2.jsx)(_v60.GoogleForm, {
          xsrft: _v11,
          action: "join",
          optIn: !0,
          redirectUrlAfterSocialLogin: _v4,
          redirectUrlAfterSocialJoin: _v5,
          target: "_top",
          onSubmit: () => _v27("google"),
          className: "f2pPilotRegLogin",
          children: (0, _v6.translate)({
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
          })
        }), (0, _v2.jsx)(_v59.FacebookForm, {
          xsrft: _v11,
          action: "join",
          optIn: !0,
          redirectUrlAfterSocialLogin: _v4,
          redirectUrlAfterSocialJoin: _v5,
          target: "_top",
          onSubmit: () => _v27("facebook"),
          className: "f2pPilotRegLogin",
          children: (0, _v6.translate)({
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
        }), (0, _v2.jsx)(_v58.AppleForm, {
          xsrft: _v11,
          action: "join",
          optIn: !0,
          redirectUrlAfterSocialLogin: _v4,
          redirectUrlAfterSocialJoin: _v5,
          target: "_top",
          onSubmit: () => _v27("apple"),
          className: "f2pPilotRegLogin",
          children: (0, _v6.translate)({
            singular: "Continue with Apple",
            dictionary: {
              es: {
                singular: "Continuar con Apple"
              },
              "de-DE": {
                singular: "Mit Apple fortfahren"
              },
              "fr-FR": {
                singular: "Continuer avec Apple"
              },
              "ja-JP": {
                singular: "Appleで続ける"
              },
              "ko-KR": {
                singular: "Apple로 계속하기"
              },
              "pt-BR": {
                singular: "Continuar com a Apple"
              },
              "zh-CN": {
                singular: "继续使用 Apple"
              }
            }
          })
        }), (0, _v2.jsx)(_v9.Box, {
          marginY: (0, _v5.rem)(10),
          children: (0, _v2.jsx)(_v57.OrSeparator, {
            children: (0, _v6.translate)({
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
        })]
      }), (0, _v2.jsxs)(_v9.Box, {
        as: "form",
        id: _v62,
        onSubmit: _v25.handleSubmit,
        noValidate: !0,
        children: [(0, _v2.jsxs)(_v61.InputWrapper, {
          formFieldErrorMessage: _v28,
          isInvalid: !!_v28,
          children: [(0, _v2.jsx)(_v61.StyledInput, {
            id: "unified_auth_email",
            autoComplete: "username",
            ..._v26.input,
            onChange: _v0 => {
              _v26.input.onChange(_v0), _v12 && _v13(null);
            },
            "aria-invalid": !!_v28 || void 0
          }), (0, _v2.jsx)(_v61.Label, {
            htmlFor: "unified_auth_email",
            children: (0, _v6.translate)({
              singular: "Enter email",
              dictionary: {
                es: {
                  singular: "Escribir correo electrónico"
                },
                "de-DE": {
                  singular: "E-Mail-Adresse eingeben"
                },
                "fr-FR": {
                  singular: "Saisir une adresse e-mail"
                },
                "ja-JP": {
                  singular: "Eメールアドレスを入力"
                },
                "ko-KR": {
                  singular: "이메일 입력"
                },
                "pt-BR": {
                  singular: "Inserir e-mail"
                },
                "zh-CN": {
                  singular: "输入电子邮件"
                }
              }
            })
          })]
        }), (0, _v2.jsx)("div", {
          id: _v63
        })]
      }), _v6 && (0, _v2.jsx)(_v9.Box, {
        marginTop: "md",
        display: {
          base: "block",
          lg: "none"
        },
        children: (0, _v2.jsx)(_v13, {})
      }), (0, _v2.jsx)(_v49.MobileStickyFooter, {
        active: _v31,
        background: (0, _v49.getStickyFooterBackground)(_v2),
        desktopMarginTop: (0, _v5.rem)(32),
        terms: (0, _v2.jsx)(_v56, {}),
        children: (0, _v2.jsx)(_v46.Button, {
          w: "100%",
          type: "submit",
          form: _v62,
          variant: "brand",
          size: "lg",
          isLoading: _v25.submitting,
          isDisabled: _v25.submitting || _v16 && _v14,
          children: (0, _v6.translate)({
            singular: "Continue with email",
            dictionary: {
              es: {
                singular: "Continuar con el correo electrónico"
              },
              "de-DE": {
                singular: "Weiter mit E-Mail-Adresse"
              },
              "fr-FR": {
                singular: "Continuer avec votre e-mail"
              },
              "ja-JP": {
                singular: "Eメールで続ける"
              },
              "ko-KR": {
                singular: "이메일로 계속하기"
              },
              "pt-BR": {
                singular: "Continuar com email"
              },
              "zh-CN": {
                singular: "通过电子邮件继续"
              }
            }
          })
        })
      })]
    });
  }
  var _v67 = _v0.i(0);
  let _v68 = "unified_auth_password_form",
    _v69 = _v45.object({
      password: _v45.string().required((0, _v6.translate)({
        singular: "Please enter your password",
        dictionary: {
          es: {
            singular: "Introduce tu contraseña."
          },
          "de-DE": {
            singular: "Bitte gib dein Kennwort ein"
          },
          "fr-FR": {
            singular: "Veuillez saisir votre mot de passe"
          },
          "ja-JP": {
            singular: "パスワードを入力してください"
          },
          "ko-KR": {
            singular: "비밀번호를 입력하세요"
          },
          "pt-BR": {
            singular: "Por favor, digite sua senha"
          },
          "zh-CN": {
            singular: "请输入密码"
          }
        }
      }))
    });
  async function _v70(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let _v7 = new URLSearchParams({
      email: _v0,
      password: _v1,
      token: _v2,
      action: "login",
      service: "vimeo"
    });
    _v4 && _v7.append("otp", _v4), _v5 && _v7.append("otp_required", _v5), _v6 && _v7.append("request_new_token", "1"), _v3 && _v7.append("redirect", _v3);
    try {
      let _v0 = await (0, _v50.Login)(_v7.toString(), "/log_in");
      if (429 === _v0.status) return {
        status: "error",
        errorMessage: _v6 ? (0, _v6.translate)({
          singular: "You've requested too many one-time-password emails to this address for now. Be sure to check your spam folder to see if they've arrived.",
          dictionary: {
            es: {
              singular: "Has solicitado demasiados correos electrónicos de contraseña de un solo uso a esta dirección por ahora. Asegúrate de revisar la carpeta de spam para ver si han llegado."
            },
            "de-DE": {
              singular: "Sie haben für diese Adresse vorerst zu viele E-Mails mit Einmalpasswörtern angefordert. Bitte prüfen Sie Ihren Spam-Ordner, um zu sehen, ob sie angekommen sind."
            },
            "fr-FR": {
              singular: "Vous avez demandé trop de courriels de mot de passe à usage unique pour cette adresse pour le moment. Veuillez vérifier votre dossier de courrier indésirable pour voir s'ils sont arrivés."
            },
            "ja-JP": {
              singular: "このアドレスには現時点でワンタイムパスワード（OTP）メールの送信リクエストが多く寄せられています。迷惑メールフォルダに届いていないか必ずご確認ください。"
            },
            "ko-KR": {
              singular: "현재 이 주소로 일회용 비밀번호 이메일을 너무 많이 요청하셨습니다. 스팸 폴더를 확인하여 메일이 도착했는지 확인해 보세요."
            },
            "pt-BR": {
              singular: "Você solicitou muitos e-mails de senha de uso único para este endereço por enquanto. Certifique-se de verificar sua pasta de spam para ver se eles chegaram."
            },
            "zh-CN": {
              singular: "您目前已向该地址请求了过多的一次性密码电子邮件。请务必检查您的垃圾邮件文件夹，查看是否已收到。"
            }
          }
        }) : (0, _v6.translate)({
          singular: "Sorry, but you have had too many invalid login attempts. Please wait a few minutes and try again.",
          dictionary: {
            es: {
              singular: "Lo sentimos, has tenido muchos intentos fallidos para iniciar sesión. Espera unos minutos e inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Es tut uns leid, aber du hattest zu viele ungültige Anmeldeversuche. Bitte warte einige Minuten und versuche es erneut."
            },
            "fr-FR": {
              singular: "Désolé, mais vous avez accumulé un trop grand nombre de tentatives de connexion invalides. Veuillez attendre quelques minutes et réessayer."
            },
            "ja-JP": {
              singular: "残念ながら、短時間に大量に無効ログインが試されました。安全性確保のため、しばらくお待ちいただいてから、もう一度お試しください。"
            },
            "ko-KR": {
              singular: "죄송합니다, 로그인 실패 한도를 초과했습니다. 몇 분 후 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Desculpe, mas já ocorreram muitas tentativas inválidas de conexão. Aguarde alguns minutos e tente de novo."
            },
            "zh-CN": {
              singular: "抱歉，您的无效登录尝试次数过多。请过几分钟后再重试。"
            }
          }
        }),
        reason: "too_many_attempts"
      };
      if (_v0.force_redirect) return {
        status: "redirect",
        redirectUrl: _v0.redirect_url && (0, _v67.isVimeoRedirectableUrl)(_v0.redirect_url) ? _v0.redirect_url : "/"
      };
      return {
        status: "ok",
        response: _v0
      };
    } catch (_v0) {
      if ("object" != typeof _v0 || null === _v0) return {
        status: "error",
        errorMessage: (0, _v6.translate)({
          singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
          dictionary: {
            es: {
              singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
            },
            "de-DE": {
              singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
            },
            "fr-FR": {
              singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
            },
            "ja-JP": {
              singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
            },
            "ko-KR": {
              singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
            },
            "zh-CN": {
              singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
            }
          }
        }),
        reason: "technical_error"
      };
      if ("has_error_resent_otp" in _v0) return {
        status: "otp_resent"
      };
      let _v1 = "has_error_invalid_otp_email" in _v0 ? "email" : "has_error_invalid_otp_totp" in _v0 ? "totp" : "has_error_invalid_otp_risky" in _v0 ? "risky" : null;
      if (_v1) return {
        status: "otp_challenge",
        otpType: _v1,
        invalid: !!_v4
      };
      if ("has_error_invalid_credentials" in _v0) return {
        status: "error",
        errorMessage: (0, _v6.translate)({
          singular: "That password doesn't look right.",
          dictionary: {
            es: {
              singular: "Esa contraseña no parece correcta."
            },
            "de-DE": {
              singular: "Das Passwort scheint nicht zu stimmen."
            },
            "fr-FR": {
              singular: "Ce mot de passe ne semble pas correct."
            },
            "ja-JP": {
              singular: "そのパスワードは正しくないようです。"
            },
            "ko-KR": {
              singular: "비밀번호가 올바르지 않은 것 같습니다."
            },
            "pt-BR": {
              singular: "Essa senha não parece correta."
            },
            "zh-CN": {
              singular: "密码似乎不正确。"
            }
          }
        }),
        reason: "invalid_credentials"
      };
      return {
        status: "error",
        errorMessage: (0, _v6.translate)({
          singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
          dictionary: {
            es: {
              singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
            },
            "de-DE": {
              singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
            },
            "fr-FR": {
              singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
            },
            "ja-JP": {
              singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
            },
            "ko-KR": {
              singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
            },
            "zh-CN": {
              singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
            }
          }
        }),
        reason: "technical_error"
      };
    }
  }
  function _v71({
    flowId: _v0,
    email: _v1,
    isFullScreen: _v2,
    redirectUrl: _v3,
    showGetHelp: _v4,
    onSuccess: _v5,
    onBack: _v6,
    onAuthenticated: _v7
  }) {
    let _v8 = (0, _v3.useContext)(_v7.ViewerContext),
      _v9 = _v8?.xsrft || "",
      [_v10, _v11] = (0, _v3.useState)(null),
      [_v12, _v13] = (0, _v3.useState)(null),
      [_v14, _v15] = (0, _v3.useState)(!1),
      {
        trackUnifiedAuthButtonClicked: _v16,
        trackUnifiedAuthError: _v17
      } = _v44(),
      _v18 = _v0 => {
        switch (_v0.status) {
          case "error":
            _v11(_v0.errorMessage), _v17({
              flowId: _v0,
              step: "login",
              reason: _v0.reason
            });
            return;
          case "otp_challenge":
            _v13({
              type: _v0.otpType,
              resent: !1
            }), _v0.invalid ? (_v11((0, _v6.translate)({
              singular: "Security code entered is incorrect",
              dictionary: {
                es: {
                  singular: "El código de seguridad introducido es incorrecto"
                },
                "de-DE": {
                  singular: "Der eingegebene Sicherheitscode ist falsch"
                },
                "fr-FR": {
                  singular: "Le code de sécurité saisi est incorrect"
                },
                "ja-JP": {
                  singular: "入力されたセキュリティコードが正しくありません"
                },
                "ko-KR": {
                  singular: "입력한 보안 코드가 올바르지 않습니다"
                },
                "pt-BR": {
                  singular: "O código de segurança inserido está incorreto"
                },
                "zh-CN": {
                  singular: "输入的安全代码不正确"
                }
              }
            })), _v17({
              flowId: _v0,
              step: "login",
              reason: "otp_invalid"
            })) : _v11(null);
            return;
          case "otp_resent":
            _v13(_v0 => _v0 ? {
              ..._v0,
              resent: !0
            } : _v0), _v11(null);
            return;
          case "redirect":
            _v7(() => {
              window.location.href = _v0.redirectUrl;
            });
            return;
          case "ok":
            _v7(() => _v5?.(_v0.response));
            return;
          default:
            throw Error(`Unhandled password login result: ${JSON.stringify(_v0)}`);
        }
      },
      _v19 = (0, _v47.useForm)({
        validationSchema: _v69,
        initialValues: {
          password: "",
          otp: ""
        },
        onSubmit: async _v0 => {
          if (_v16({
            flowId: _v0,
            step: "login",
            element: "log_in"
          }), !_v19.valid) {
            _v11((0, _v6.translate)({
              singular: "Please enter your password",
              dictionary: {
                es: {
                  singular: "Introduce tu contraseña."
                },
                "de-DE": {
                  singular: "Bitte gib dein Kennwort ein"
                },
                "fr-FR": {
                  singular: "Veuillez saisir votre mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを入力してください"
                },
                "ko-KR": {
                  singular: "비밀번호를 입력하세요"
                },
                "pt-BR": {
                  singular: "Por favor, digite sua senha"
                },
                "zh-CN": {
                  singular: "请输入密码"
                }
              }
            })), _v17({
              flowId: _v0,
              step: "login",
              reason: "missing_fields"
            });
            return;
          }
          if (_v12 && !_v0.otp) {
            _v11((0, _v6.translate)({
              singular: "Please enter the security code",
              dictionary: {
                es: {
                  singular: "Por favor, introduzca el código de seguridad"
                },
                "de-DE": {
                  singular: "Bitte geben Sie den Sicherheitscode ein"
                },
                "fr-FR": {
                  singular: "Veuillez saisir le code de sécurité"
                },
                "ja-JP": {
                  singular: "セキュリティコードを入力してください"
                },
                "ko-KR": {
                  singular: "보안 코드를 입력해 주세요"
                },
                "pt-BR": {
                  singular: "Por favor, insira o código de segurança"
                },
                "zh-CN": {
                  singular: "请输入安全代码"
                }
              }
            })), _v17({
              flowId: _v0,
              step: "login",
              reason: "otp_invalid"
            });
            return;
          }
          _v11(null), _v18(await _v70(_v1, _v0.password, _v9, _v3 ?? null, _v0.otp, _v12?.type ?? "", !1));
        }
      }),
      _v20 = (0, _v47.useField)(_v19, "password"),
      _v21 = (0, _v47.useField)(_v19, "otp"),
      _v22 = async () => {
        if (!_v14 && _v12) {
          _v15(!0), _v11(null);
          try {
            let _v0 = await _v70(_v1, _v20.input.value, _v9, _v3 ?? null, _v21.input.value, _v12.type, !0);
            _v18(_v0);
          } finally {
            _v15(!1);
          }
        }
      },
      _v23 = _v20.meta.touched && _v20.meta.errors ? String(_v20.meta.errors) : null,
      _v24 = _v12 ? null : _v10 ?? _v23,
      _v25 = _v12 ? _v10 : null,
      _v26 = _v12 ? _v12.resent ? (0, _v6.translate)({
        singular: "Authentication code emailed",
        dictionary: {
          es: {
            singular: "Código de autentificación enviado por correo electrónico"
          },
          "de-DE": {
            singular: "Authentifizierungscode wurde gesendet"
          },
          "fr-FR": {
            singular: "Code d'authentification envoyé"
          },
          "ja-JP": {
            singular: "認証コードがEメールで送信されました"
          },
          "ko-KR": {
            singular: "인증 코드가 이메일로 전송되었습니다."
          },
          "pt-BR": {
            singular: "Código de autenticação enviado por e-mail"
          },
          "zh-CN": {
            singular: "验证码已通过电子邮件发送"
          }
        }
      }) : function (_v0) {
        switch (_v0) {
          case "email":
          case "risky":
            return (0, _v6.translate)({
              singular: "A security code has been sent to your email address",
              dictionary: {
                es: {
                  singular: "Se envió un código de seguridad a tu dirección de correo electrónico."
                },
                "de-DE": {
                  singular: "Eine E-Mail mit einem Sicherheitscode wurde an deine E-Mail-Adresse gesendet."
                },
                "fr-FR": {
                  singular: "Un code de sécurité vous a été envoyé à votre adresse e-mail"
                },
                "ja-JP": {
                  singular: "メールアドレスにセキュリティコードが送信されました"
                },
                "ko-KR": {
                  singular: "보안 코드가 이메일 주소로 전송되었습니다."
                },
                "pt-BR": {
                  singular: "Um código de segurança foi enviado para o seu endereço de e-mail"
                },
                "zh-CN": {
                  singular: "安全代码已发送至您的电子邮箱"
                }
              }
            });
          case "totp":
            return (0, _v6.translate)({
              singular: "Please enter the code from the authenticator app you configured when setting up Two-Factor authentication (2FA).",
              dictionary: {
                es: {
                  singular: "Ingresa el código de la aplicación de autenticación que configuraste al establecer la autenticación de dos factores (2FA)."
                },
                "de-DE": {
                  singular: "Bitte gib den Code aus der Authenticator-App ein, den du beim Erstellen der Zwei-Faktor-Authentifizierung (2FA) konfiguriert hast."
                },
                "fr-FR": {
                  singular: "Veuillez saisir le code de l'application d'authentification que vous avez configurée lorsque vous avez paramétré l'authentification à deux facteurs (2FA)."
                },
                "ja-JP": {
                  singular: "二段階認証（2FA）を設定する際に構成した、Authenticatorアプリのコードを入力してください。"
                },
                "ko-KR": {
                  singular: "2단계 인증(2FA)을 설정할 때 구성한 인증 앱의 코드를 입력하세요."
                },
                "pt-BR": {
                  singular: "Por favor, insira o código do Aplicativo de Autenticação que você definiu ao configurar a autenticação de dois fatores (2FA)."
                },
                "zh-CN": {
                  singular: "请输入您在设置双因素身份验证 (2FA) 时配置的身份验证器应用程序中的代码。"
                }
              }
            });
        }
      }(_v12.type) : null,
      _v27 = (0, _v6.translate)({
        singular: "Log in to {EMAIL} or {LINK}go back{/LINK}",
        replacements: {
          EMAIL: (0, _v2.jsx)(_v4.Text, {
            as: "span",
            fontFamily: "heading",
            children: _v1
          }, "email"),
          LINK: _v0 => (0, _v2.jsx)(_v12.Link, {
            as: "span",
            variant: "brand",
            fontWeight: "medium",
            cursor: "pointer",
            onClick: () => {
              _v16({
                flowId: _v0,
                step: "login",
                element: "back"
              }), _v6();
            },
            children: _v0
          }, "back")
        },
        dictionary: {
          es: {
            singular: "Inicia sesión en {EMAIL} o {LINK}volver{/LINK}"
          },
          "de-DE": {
            singular: "Bei {EMAIL} anmelden oder {LINK}zurück{/LINK}"
          },
          "fr-FR": {
            singular: "Connectez-vous à {EMAIL} ou {LINK}revenir{/LINK}"
          },
          "ja-JP": {
            singular: "{EMAIL} にログインするか {LINK}戻る{/LINK}"
          },
          "ko-KR": {
            singular: "{EMAIL}로 로그인하거나 {LINK}돌아가기{/LINK}"
          },
          "pt-BR": {
            singular: "Faça login em {EMAIL} ou {LINK}voltar{/LINK}"
          },
          "zh-CN": {
            singular: "登录到 {EMAIL} 或 {LINK}返回{/LINK}"
          }
        }
      }),
      _v28 = _v29(_v2);
    return (0, _v2.jsxs)(_v10.Flex, {
      direction: "column",
      width: "100%",
      flexGrow: _v28 ? 1 : void 0,
      children: [_v28 && (0, _v2.jsx)(_v9.Box, {
        marginTop: "auto"
      }), (0, _v2.jsx)(_v4.Text, {
        variant: "heading-md",
        marginBottom: "sm",
        textAlign: "center",
        children: (0, _v6.translate)({
          singular: "Welcome back",
          dictionary: {
            es: {
              singular: "Bienvenido de nuevo"
            },
            "de-DE": {
              singular: "Willkommen zurück"
            },
            "fr-FR": {
              singular: "Content de vous revoir"
            },
            "ja-JP": {
              singular: "お帰りなさい"
            },
            "ko-KR": {
              singular: "다시 오신 것을 환영합니다"
            },
            "pt-BR": {
              singular: "Bem-vindo de volta"
            },
            "zh-CN": {
              singular: "欢迎回来"
            }
          }
        })
      }), (0, _v2.jsx)(_v4.Text, {
        variant: "body-md",
        color: "text-secondary",
        marginBottom: (0, _v5.rem)(20),
        textAlign: "center",
        children: _v27
      }), (0, _v2.jsxs)(_v9.Box, {
        as: "form",
        id: _v68,
        onSubmit: _v19.handleSubmit,
        noValidate: !0,
        children: [(0, _v2.jsxs)(_v61.InputWrapper, {
          formFieldErrorMessage: _v24,
          isInvalid: !!_v24,
          children: [(0, _v2.jsx)(_v61.StyledInput, {
            id: "unified_auth_password",
            type: "password",
            autoComplete: "current-password",
            ..._v20.input,
            onChange: _v0 => {
              _v20.input.onChange(_v0), _v10 && _v11(null);
            },
            isDisabled: !!_v12,
            "aria-invalid": !!_v24 || void 0
          }), (0, _v2.jsx)(_v61.Label, {
            htmlFor: "unified_auth_password",
            children: (0, _v6.translate)({
              singular: "Password",
              dictionary: {
                es: {
                  singular: "Contraseña"
                },
                "de-DE": {
                  singular: "Kennwort"
                },
                "fr-FR": {
                  singular: "Mot de passe "
                },
                "ja-JP": {
                  singular: "パスワード"
                },
                "ko-KR": {
                  singular: "비밀번호"
                },
                "pt-BR": {
                  singular: "Senha"
                },
                "zh-CN": {
                  singular: "密码"
                }
              }
            })
          })]
        }), _v12 && (0, _v2.jsxs)(_v9.Box, {
          marginTop: "md",
          children: [_v26 && (0, _v2.jsx)(_v4.Text, {
            variant: "body-sm",
            color: "text-secondary",
            marginBottom: "sm",
            children: _v26
          }), (0, _v2.jsxs)(_v61.InputWrapper, {
            formFieldErrorMessage: _v25,
            isInvalid: !!_v25,
            children: [(0, _v2.jsx)(_v61.StyledInput, {
              id: "unified_auth_otp",
              type: "text",
              inputMode: "numeric",
              autoComplete: "one-time-code",
              ..._v21.input,
              onChange: _v0 => {
                _v21.input.onChange(_v0), _v10 && _v11(null);
              },
              "aria-invalid": !!_v25 || void 0
            }), (0, _v2.jsx)(_v61.Label, {
              htmlFor: "unified_auth_otp",
              children: (0, _v6.translate)({
                singular: "Security code",
                dictionary: {
                  es: {
                    singular: "Código de seguridad"
                  },
                  "de-DE": {
                    singular: "Sicherheitscode"
                  },
                  "fr-FR": {
                    singular: "Code de sécurité"
                  },
                  "ja-JP": {
                    singular: "セキュリティコード"
                  },
                  "ko-KR": {
                    singular: "보안 코드"
                  },
                  "pt-BR": {
                    singular: "Código de segurança"
                  },
                  "zh-CN": {
                    singular: "安全码"
                  }
                }
              })
            })]
          }), (0, _v2.jsx)(_v46.Button, {
            type: "button",
            variant: "tertiary",
            size: "sm",
            marginTop: "sm",
            onClick: _v22,
            isLoading: _v14,
            isDisabled: _v14,
            children: (0, _v6.translate)({
              singular: "Email me a new code",
              dictionary: {
                es: {
                  singular: "Recibir un nuevo código por correo electrónico"
                },
                "de-DE": {
                  singular: "Neuen Code per E-Mail senden"
                },
                "fr-FR": {
                  singular: "Envoyez-moi un nouveau code par e-mail"
                },
                "ja-JP": {
                  singular: "新しいコードをEメールする"
                },
                "ko-KR": {
                  singular: "새 코드 전송하기"
                },
                "pt-BR": {
                  singular: "Me envie um email com o novo código"
                },
                "zh-CN": {
                  singular: "通过电子邮件向我发送新代码"
                }
              }
            })
          })]
        })]
      }), _v4 && (0, _v2.jsx)(_v9.Box, {
        marginY: "xl",
        display: {
          base: "block",
          lg: "none"
        },
        children: (0, _v2.jsx)(_v13, {})
      }), (0, _v2.jsx)(_v49.MobileStickyFooter, {
        active: _v28,
        background: (0, _v49.getStickyFooterBackground)(_v2),
        desktopMarginTop: (0, _v5.rem)(24),
        terms: (0, _v2.jsx)(_v56, {}),
        children: (0, _v2.jsxs)(_v10.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v2.jsx)(_v46.Button, {
            w: "100%",
            type: "submit",
            form: _v68,
            variant: "brand",
            size: "lg",
            isLoading: _v19.submitting,
            isDisabled: _v19.submitting,
            children: (0, _v6.translate)({
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
          }), (0, _v2.jsx)(_v12.Link, {
            href: "/forgot_password",
            variant: "secondary",
            fontSize: "body-md",
            textAlign: "center",
            alignSelf: "center",
            onClick: () => _v16({
              flowId: _v0,
              step: "login",
              element: "forgot_password"
            }),
            children: (0, _v6.translate)({
              singular: "Forgot your password?",
              dictionary: {
                es: {
                  singular: "¿Olvidó su contraseña?"
                },
                "de-DE": {
                  singular: "Kennwort vergessen?"
                },
                "fr-FR": {
                  singular: "Vous avez oublié votre mot de passe ?"
                },
                "ja-JP": {
                  singular: "パスワードをお忘れですか？"
                },
                "ko-KR": {
                  singular: "비밀번호를 잊으셨나요?"
                },
                "pt-BR": {
                  singular: "Esqueceu sua senha?"
                },
                "zh-CN": {
                  singular: "忘记密码？"
                }
              }
            })
          })]
        })
      })]
    });
  }
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0);
  function _v75({
    flowId: _v0,
    email: _v1,
    isFullScreen: _v2,
    isSimplifiedSite: _v3,
    redirectUrl: _v4,
    onSuccess: _v5,
    onBack: _v6,
    onAuthenticated: _v7
  }) {
    let _v8 = (0, _v3.useContext)(_v7.ViewerContext),
      [_v9, _v10] = (0, _v3.useState)(_v8?.shouldOptIntoMarketing ?? !1),
      {
        trackUnifiedAuthButtonClicked: _v11,
        trackUnifiedAuthError: _v12
      } = _v44(),
      _v13 = _v3 ? (0, _v6.translate)({
        singular: "Create a VideoJi account for free.",
        dictionary: {
          es: {
            singular: "Crea una cuenta de VideoJi gratis."
          },
          "de-DE": {
            singular: "Erstelle ein kostenloses VideoJi-Konto."
          },
          "fr-FR": {
            singular: "Créez un compte VideoJi gratuitement."
          },
          "ja-JP": {
            singular: "無料で VideoJi アカウントを作成できます."
          },
          "ko-KR": {
            singular: "무료로 VideoJi 계정을 만드세요."
          },
          "pt-BR": {
            singular: "Crie uma conta gratuita no VideoJi."
          },
          "zh-CN": {
            singular: "免费创建 VideoJi 账户。"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Create a Vimeo account for free.",
        dictionary: {
          es: {
            singular: "Crea una cuenta de Vimeo gratis."
          },
          "de-DE": {
            singular: "Erstelle ein kostenloses Vimeo-Konto."
          },
          "fr-FR": {
            singular: "Créez un compte Vimeo gratuitement."
          },
          "ja-JP": {
            singular: "無料で Vimeo アカウントを作成できます."
          },
          "ko-KR": {
            singular: "무료로 Vimeo 계정을 만드세요."
          },
          "pt-BR": {
            singular: "Crie uma conta gratuita no Vimeo."
          },
          "zh-CN": {
            singular: "免费创建 Vimeo 账户。"
          }
        }
      }),
      _v14 = _v29(_v2),
      _v15 = (0, _v2.jsxs)(_v9.Box, {
        children: [(0, _v2.jsx)(_v4.Text, {
          variant: "heading-md",
          marginBottom: (0, _v5.rem)(20),
          textAlign: "center",
          children: _v13
        }), (0, _v2.jsxs)(_v61.InputWrapper, {
          children: [(0, _v2.jsx)(_v61.StyledInput, {
            id: "register_email",
            name: "email",
            type: "email",
            value: _v1,
            autoComplete: "username",
            "aria-readonly": !0,
            onChange: _v0 => {
              _v0.currentTarget.value = _v1, _v0.stopPropagation();
            },
            onBeforeInput: _v0 => _v0.preventDefault(),
            onPaste: _v0 => _v0.preventDefault(),
            onDrop: _v0 => _v0.preventDefault(),
            sx: {
              caretColor: "transparent"
            },
            paddingRight: "2xl"
          }), (0, _v2.jsx)(_v61.Label, {
            htmlFor: "register_email",
            children: (0, _v6.translate)({
              singular: "Email",
              dictionary: {
                es: {
                  singular: "Correo electrónico"
                },
                "de-DE": {
                  singular: "E-Mail-Adresse"
                },
                "fr-FR": {
                  singular: "E-mail"
                },
                "ja-JP": {
                  singular: "E メール"
                },
                "ko-KR": {
                  singular: "이메일"
                },
                "pt-BR": {
                  singular: "E-mail"
                },
                "zh-CN": {
                  singular: "电子邮件"
                }
              }
            })
          }), (0, _v2.jsx)(_v72.CloseButton, {
            "aria-label": (0, _v6.translate)({
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
            }),
            size: "xs",
            onClick: () => {
              _v11({
                flowId: _v0,
                step: "register",
                element: "use_different_email"
              }), _v6();
            },
            position: "absolute",
            top: "50%",
            right: "sm",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "transparent",
            _hover: {
              background: "transparent"
            },
            _active: {
              background: "transparent"
            }
          })]
        })]
      });
    return (0, _v2.jsx)(_v73.JoinEmailForm, {
      email: _v1,
      hideEmail: !0,
      hideName: _v3,
      xsrft: _v8?.xsrft || "",
      redirectUrl: _v4 || void 0,
      optIn: _v9,
      onSuccess: _v0 => _v7(() => _v5?.(_v0)),
      onError: _v0 => _v12({
        flowId: _v0,
        step: "register",
        reason: _v0
      }),
      hasF2PVariant: !0,
      header: _v15,
      marketingCheckBox: (0, _v2.jsx)(_v74.default, {
        hideHorizontalRule: !0,
        marketingOptIn: _v9,
        marketingOptInHandler: () => _v10(_v0 => !_v0),
        isSimplifiedSite: _v3,
        isFullScreen: !0
      }),
      placeholder: {
        email: (0, _v6.translate)({
          singular: "Email",
          dictionary: {
            es: {
              singular: "Correo electrónico"
            },
            "de-DE": {
              singular: "E-Mail-Adresse"
            },
            "fr-FR": {
              singular: "E-mail"
            },
            "ja-JP": {
              singular: "E メール"
            },
            "ko-KR": {
              singular: "이메일"
            },
            "pt-BR": {
              singular: "E-mail"
            },
            "zh-CN": {
              singular: "电子邮件"
            }
          }
        }),
        name: (0, _v6.translate)({
          singular: "Enter full name",
          dictionary: {
            es: {
              singular: "Escribir nombre completo"
            },
            "de-DE": {
              singular: "Vollständigen Namen angeben"
            },
            "fr-FR": {
              singular: "Saisir un nom complet"
            },
            "ja-JP": {
              singular: "フルネームを入力"
            },
            "ko-KR": {
              singular: "이름 입력"
            },
            "pt-BR": {
              singular: "Inserir nome completo"
            },
            "zh-CN": {
              singular: "输入全名"
            }
          }
        }),
        password: (0, _v6.translate)({
          singular: "Create password",
          dictionary: {
            es: {
              singular: "Crear contraseña"
            },
            "de-DE": {
              singular: "Kennwort erstellen"
            },
            "fr-FR": {
              singular: "Créer un mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを作成"
            },
            "ko-KR": {
              singular: "비밀번호 만들기"
            },
            "pt-BR": {
              singular: "Criar senha"
            },
            "zh-CN": {
              singular: "创建密码"
            }
          }
        })
      },
      submitCtaText: _v3 ? (0, _v6.translate)({
        singular: "Join VideoJi",
        dictionary: {
          es: {
            singular: "Únase a VideoJi"
          },
          "de-DE": {
            singular: "VideoJi beitreten"
          },
          "fr-FR": {
            singular: "Rejoignez VideoJi"
          },
          "ja-JP": {
            singular: "VimeoJiに登録"
          },
          "ko-KR": {
            singular: "VideoJi 가입"
          },
          "pt-BR": {
            singular: "Junte-se ao VideoJi"
          },
          "zh-CN": {
            singular: "加入 VideoJi"
          }
        }
      }) : (0, _v6.translate)({
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
      unifiedAuthDesignOverride: !0,
      isFullScreen: !0,
      stickyFooter: {
        active: _v14,
        background: (0, _v49.getStickyFooterBackground)(_v2),
        terms: (0, _v2.jsx)(_v56, {}),
        desktopTermsMarginTop: 24
      }
    });
  }
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  function _v80({
    flowId: _v0,
    email: _v1,
    connection: _v2,
    customDomain: _v3,
    firstTimeSSOLogin: _v4,
    isFullScreen: _v5,
    isSimplifiedSite: _v6,
    redirectUrl: _v7,
    showGetHelp: _v8,
    onBack: _v9
  }) {
    let {
        trackUnifiedAuthButtonClicked: _v10
      } = _v44(),
      _v11 = _v6 ? (0, _v6.translate)({
        singular: "Log in to VideoJi",
        dictionary: {
          es: {
            singular: "Iniciar sesión en VideoJi"
          },
          "de-DE": {
            singular: "Bei VideoJi einloggen"
          },
          "fr-FR": {
            singular: "Connectez-vous à VideoJi"
          },
          "ja-JP": {
            singular: "VideoJiにログイン"
          },
          "ko-KR": {
            singular: "VideoJi에 로그인"
          },
          "pt-BR": {
            singular: "Faça login no VideoJi"
          },
          "zh-CN": {
            singular: "登录 VideoJi"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Log in to Vimeo",
        dictionary: {
          es: {
            singular: "Iniciar sesión en Vimeo"
          },
          "de-DE": {
            singular: "Melde dich bei Vimeo an"
          },
          "fr-FR": {
            singular: "Se connecter à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoにログイン"
          },
          "ko-KR": {
            singular: "Vimeo 로그인"
          },
          "pt-BR": {
            singular: "Entrar no Vimeo"
          },
          "zh-CN": {
            singular: "登录 Vimeo"
          }
        }
      }),
      _v12 = (0, _v6.translate)({
        singular: "Want to join with a different account? {LINK}Go back{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v2.jsx)(_v12.Link, {
            as: "span",
            variant: "brand",
            fontWeight: "medium",
            cursor: "pointer",
            onClick: () => {
              _v10({
                flowId: _v0,
                step: "sso",
                element: "back"
              }), _v9();
            },
            children: _v0
          }, "back")
        },
        dictionary: {
          es: {
            singular: "¿Quieres unirte con otra cuenta? {LINK}Volver{/LINK}"
          },
          "de-DE": {
            singular: "Möchtest du dich mit einem anderen Konto anmelden? {LINK}Zurück{/LINK}"
          },
          "fr-FR": {
            singular: "Vous souhaitez vous connecter avec un autre compte ? {LINK}Retour{/LINK}"
          },
          "ja-JP": {
            singular: "別のアカウントで参加しますか？ {LINK}戻る{/LINK}"
          },
          "ko-KR": {
            singular: "다른 계정으로 진행하시겠습니까? {LINK}뒤로 가기{/LINK}"
          },
          "pt-BR": {
            singular: "Deseja entrar com uma conta diferente? {LINK}Voltar{/LINK}"
          },
          "zh-CN": {
            singular: "想要使用其他账户加入吗？{LINK}返回{/LINK}"
          }
        }
      }),
      _v13 = null != _v3 ? (0, _v6.translate)({
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
      }),
      _v14 = _v29(_v5);
    return (0, _v2.jsxs)(_v10.Flex, {
      direction: "column",
      width: "100%",
      flexGrow: _v14 ? 1 : void 0,
      children: [_v14 && (0, _v2.jsx)(_v9.Box, {
        marginTop: "auto"
      }), (0, _v2.jsx)(_v4.Text, {
        variant: "heading-md",
        marginBottom: "sm",
        textAlign: "center",
        children: _v11
      }), (0, _v2.jsx)(_v4.Text, {
        variant: "body-md",
        color: "text-secondary",
        marginBottom: "lg",
        textAlign: "center",
        children: _v12
      }), (0, _v2.jsxs)(_v61.InputWrapper, {
        children: [(0, _v2.jsx)(_v61.StyledInput, {
          id: "sso_email",
          value: _v1,
          isReadOnly: !0,
          autoComplete: "email",
          paddingRight: "2xl"
        }), (0, _v2.jsx)(_v61.Label, {
          htmlFor: "sso_email",
          children: (0, _v6.translate)({
            singular: "Email",
            dictionary: {
              es: {
                singular: "Correo electrónico"
              },
              "de-DE": {
                singular: "E-Mail-Adresse"
              },
              "fr-FR": {
                singular: "E-mail"
              },
              "ja-JP": {
                singular: "E メール"
              },
              "ko-KR": {
                singular: "이메일"
              },
              "pt-BR": {
                singular: "E-mail"
              },
              "zh-CN": {
                singular: "电子邮件"
              }
            }
          })
        }), (0, _v2.jsx)(_v72.CloseButton, {
          "aria-label": (0, _v6.translate)({
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
          }),
          size: "xs",
          onClick: () => {
            _v10({
              flowId: _v0,
              step: "sso",
              element: "use_different_email"
            }), _v9();
          },
          position: "absolute",
          top: "50%",
          right: "sm",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "transparent",
          _hover: {
            background: "transparent"
          },
          _active: {
            background: "transparent"
          }
        })]
      }), (0, _v2.jsxs)(_v10.Flex, {
        align: "center",
        justify: "center",
        gap: "xs",
        marginTop: "sm",
        children: [(0, _v2.jsx)(_v78.Lock, {
          boxSize: (0, _v5.rem)(16),
          color: "text-secondary",
          "aria-hidden": !0
        }), (0, _v2.jsx)(_v4.Text, {
          variant: "body-sm",
          color: "text-secondary",
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
      }), _v4 && (0, _v2.jsx)(_v76.Alert, {
        status: "info",
        marginTop: "md",
        children: (0, _v2.jsx)(_v77.AlertDescription, {
          children: (0, _v2.jsx)(_v4.Text, {
            variant: "body-sm",
            children: (0, _v6.translate)({
              singular: "Your organization now requires you to log in through single sign-on (SSO).",
              dictionary: {
                es: {
                  singular: "Tu organización ahora requiere que inicies sesión mediante inicio de sesión único (SSO)."
                },
                "de-DE": {
                  singular: "Deine Organisation verlangt jetzt, dass du dich über Single Sign-On (SSO) anmeldest."
                },
                "fr-FR": {
                  singular: "Votre organisation exige désormais que vous vous connectiez via l'authentification unique (SSO)."
                },
                "ja-JP": {
                  singular: "お使いの組織では現在、シングルサインオン (SSO) によるログインが必要です."
                },
                "ko-KR": {
                  singular: "귀하의 조직에서는 이제 싱글 사인온(SSO)을 통해 로그인해야 합니다."
                },
                "pt-BR": {
                  singular: "Sua organização agora exige que você faça login por meio de autenticação única (SSO)."
                },
                "zh-CN": {
                  singular: "您的组织现在要求您通过单点登录（SSO）登录。"
                }
              }
            })
          })
        })
      }), _v8 && (0, _v2.jsx)(_v9.Box, {
        marginY: "xl",
        display: {
          base: "block",
          lg: "none"
        },
        children: (0, _v2.jsx)(_v13, {})
      }), (0, _v2.jsx)(_v49.MobileStickyFooter, {
        active: _v14,
        background: (0, _v49.getStickyFooterBackground)(_v5),
        desktopMarginTop: (0, _v5.rem)(24),
        terms: (0, _v2.jsx)(_v56, {}),
        children: (0, _v2.jsx)(_v46.Button, {
          w: "100%",
          variant: "brand",
          size: "lg",
          onClick: () => {
            _v10({
              flowId: _v0,
              step: "sso",
              element: "sso_login"
            }), (0, _v79.handleSSOLogin)(_v2, _v3 ?? "", _v7);
          },
          children: _v13
        })
      })]
    });
  }
  var _v81 = _v0.i(0);
  function _v82({
    isSimplifiedSite: _v0,
    onRedirect: _v1
  }) {
    let _v2 = (0, _v3.useEffectEvent)(_v1);
    (0, _v3.useEffect)(() => {
      let _v0 = setTimeout(() => _v2(), 0);
      return () => clearTimeout(_v0);
    }, []);
    let _v3 = _v0 ? (0, _v6.translate)({
      singular: "Taking you to VideoJi...",
      dictionary: {
        es: {
          singular: "Redirigiéndote a VideoJi..."
        },
        "de-DE": {
          singular: "Wir leiten Sie zu VideoJi weiter..."
        },
        "fr-FR": {
          singular: "Nous vous redirigeons vers VideoJi..."
        },
        "ja-JP": {
          singular: "VideoJiに移動しています..."
        },
        "ko-KR": {
          singular: "VideoJi로 이동 중..."
        },
        "pt-BR": {
          singular: "Levando você para o VideoJi..."
        },
        "zh-CN": {
          singular: "正在将您带到 VideoJi..."
        }
      }
    }) : (0, _v6.translate)({
      singular: "Taking you to Vimeo...",
      dictionary: {
        es: {
          singular: "Redirigiéndote a Vimeo..."
        },
        "de-DE": {
          singular: "Wir leiten Sie zu Vimeo weiter..."
        },
        "fr-FR": {
          singular: "Nous vous redirigeons vers Vimeo..."
        },
        "ja-JP": {
          singular: "Vimeoに移動しています..."
        },
        "ko-KR": {
          singular: "Vimeo로 이동 중..."
        },
        "pt-BR": {
          singular: "Levando você para o Vimeo..."
        },
        "zh-CN": {
          singular: "正在将您带到 Vimeo..."
        }
      }
    });
    return (0, _v2.jsxs)(_v10.Flex, {
      direction: "column",
      width: "100%",
      align: "center",
      gap: "lg",
      children: [(0, _v2.jsx)(_v81.CircleCheck, {
        boxSize: (0, _v5.rem)(48),
        color: "status-positive-primary",
        "aria-hidden": !0
      }), (0, _v2.jsxs)(_v10.Flex, {
        direction: "column",
        align: "center",
        gap: "xs",
        children: [(0, _v2.jsx)(_v4.Text, {
          variant: "heading-md",
          textAlign: "center",
          children: (0, _v6.translate)({
            singular: "You're in",
            dictionary: {
              es: {
                singular: "Ya estás dentro"
              },
              "de-DE": {
                singular: "Sie sind dabei"
              },
              "fr-FR": {
                singular: "Vous y êtes"
              },
              "ja-JP": {
                singular: "参加しました"
              },
              "ko-KR": {
                singular: "입장하셨습니다"
              },
              "pt-BR": {
                singular: "Você está dentro"
              },
              "zh-CN": {
                singular: "您已进入"
              }
            }
          })
        }), (0, _v2.jsx)(_v4.Text, {
          variant: "body-md",
          color: "text-secondary",
          textAlign: "center",
          children: _v3
        })]
      }), (0, _v2.jsx)(_v11.Spinner, {
        size: "md",
        "aria-label": (0, _v6.translate)({
          singular: "Redirecting",
          dictionary: {
            es: {
              singular: "Redirigiendo"
            },
            "de-DE": {
              singular: "Wird weitergeleitet"
            },
            "fr-FR": {
              singular: "Redirection en cours"
            },
            "ja-JP": {
              singular: "リダイレクトしています"
            },
            "ko-KR": {
              singular: "리디렉션 중"
            },
            "pt-BR": {
              singular: "Redirecionando"
            },
            "zh-CN": {
              singular: "正在重定向"
            }
          }
        })
      })]
    });
  }
  function _v83(_v0, _v1) {
    switch (_v1.type) {
      case "GO_TO_SSO":
        return {
          type: "sso",
          email: _v1.email,
          connection: _v1.connection,
          customDomain: _v1.customDomain,
          firstTimeSSOLogin: _v1.firstTimeSSOLogin
        };
      case "GO_TO_LOGIN":
        return {
          type: "login",
          email: _v1.email
        };
      case "GO_TO_REGISTER":
        return {
          type: "register",
          email: _v1.email
        };
      case "GO_TO_SUCCESS":
        return {
          type: "success",
          redirect: _v1.redirect
        };
      default:
        return {
          type: "email"
        };
    }
  }
  function _v84(_v0) {
    let {
        authType: _v1,
        disableDismiss: _v2,
        handleCloseClick: _v3,
        isFullScreen: _v4,
        isSimplifiedSite: _v5,
        redirectUrl: _v6,
        redirectUrlAfterSocialLogin: _v7,
        redirectUrlAfterSocialJoin: _v8,
        showGetHelp: _v9,
        onSuccess: _v10,
        onStepChange: _v11
      } = _v0,
      {
        step: _v12,
        goToEmail: _v13,
        goToSso: _v14,
        goToLogin: _v15,
        goToRegister: _v16,
        goToSuccess: _v17
      } = function () {
        let [_v0, _v1] = (0, _v3.useReducer)(_v83, {
          type: "email"
        });
        return {
          step: _v0,
          ...(0, _v3.useMemo)(() => ({
            goToEmail: () => _v1({
              type: "RESET"
            }),
            goToSso: (_v0, _v1, _v2, _v3) => _v1({
              type: "GO_TO_SSO",
              email: _v0,
              connection: _v1,
              customDomain: _v2,
              firstTimeSSOLogin: _v3
            }),
            goToLogin: _v0 => _v1({
              type: "GO_TO_LOGIN",
              email: _v0
            }),
            goToRegister: _v0 => _v1({
              type: "GO_TO_REGISTER",
              email: _v0
            }),
            goToSuccess: _v0 => _v1({
              type: "GO_TO_SUCCESS",
              redirect: _v0
            })
          }), [])
        };
      }(),
      _v18 = (0, _v3.useContext)(_v7.ViewerContext),
      {
        trackUnifiedAuthDisplayed: _v19,
        trackUnifiedAuthButtonClicked: _v20,
        trackUnifiedAuthCompleted: _v21
      } = _v44(),
      _v22 = (0, _v3.useMemo)(() => crypto.randomUUID(), []),
      _v23 = (0, _v3.useEffectEvent)(() => {
        _v19({
          flowId: _v22,
          authType: _v1 ?? "unknown",
          viewerAuthStatus: (0, _v42.deriveViewerAuthStatus)(_v18),
          referrerPage: (0, _v42.deriveReferrerPage)(),
          isFullScreen: !!_v4,
          isSimplifiedSite: !!_v5
        });
      });
    (0, _v3.useEffect)(() => {
      _v23();
    }, []);
    let _v24 = (0, _v3.useCallback)(_v0 => {
        let _v1 = function (_v0) {
          switch (_v0) {
            case "login":
              return "password";
            case "sso":
              return "sso";
            case "register":
              return "register";
            default:
              return "social";
          }
        }(_v12.type);
        _v21({
          flowId: _v22,
          method: _v1,
          outcome: function (_v0) {
            switch (_v0) {
              case "password":
                return "login";
              case "register":
                return "register";
              default:
                return "unknown";
            }
          }(_v1)
        }), _v17(_v0);
      }, [_v12.type, _v22, _v21, _v17]),
      _v25 = (0, _v3.useCallback)((_v0, _v1) => {
        switch (_v0.step) {
          case "sso":
            _v14(_v1, _v0.connection, _v0.customDomain, _v0.firstTimeSSOLogin);
            break;
          case "login":
            _v15(_v1);
            break;
          case "register":
            _v16(_v1);
        }
        _v11?.(_v0.step);
      }, [_v14, _v15, _v16, _v11]),
      _v26 = (0, _v3.useCallback)(() => {
        _v13(), _v11?.("email");
      }, [_v13, _v11]),
      _v27 = !_v2 && "success" !== _v12.type,
      _v28 = (0, _v3.useMemo)(() => _v3 ? () => {
        _v20({
          flowId: _v22,
          step: function (_v0) {
            if ("success" === _v0) throw Error("Unexpected click tracked on the unified auth success step");
            return _v0;
          }(_v12.type),
          element: "close"
        }), _v3();
      } : void 0, [_v3, _v20, _v22, _v12.type]);
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [_v27 && (0, _v2.jsx)(_v38, {
        handleCloseClick: _v28
      }), (() => {
        switch (_v12.type) {
          case "sso":
            return (0, _v2.jsx)(_v80, {
              flowId: _v22,
              email: _v12.email,
              connection: _v12.connection,
              customDomain: _v12.customDomain,
              firstTimeSSOLogin: _v12.firstTimeSSOLogin,
              isFullScreen: _v4,
              isSimplifiedSite: _v5,
              redirectUrl: _v6,
              showGetHelp: _v9,
              onBack: _v26
            });
          case "login":
            return (0, _v2.jsx)(_v71, {
              flowId: _v22,
              email: _v12.email,
              isFullScreen: _v4,
              redirectUrl: _v6,
              showGetHelp: _v9,
              onSuccess: _v10,
              onBack: _v26,
              onAuthenticated: _v24
            });
          case "register":
            return (0, _v2.jsx)(_v75, {
              flowId: _v22,
              email: _v12.email,
              isFullScreen: _v4,
              isSimplifiedSite: _v5,
              redirectUrl: _v6,
              onSuccess: _v10,
              onBack: _v26,
              onAuthenticated: _v24
            });
          case "success":
            return (0, _v2.jsx)(_v82, {
              isSimplifiedSite: _v5,
              onRedirect: _v12.redirect
            });
          default:
            return (0, _v2.jsx)(_v66, {
              flowId: _v22,
              isFullScreen: _v4,
              isSimplifiedSite: _v5,
              redirectUrlAfterSocialLogin: _v7,
              redirectUrlAfterSocialJoin: _v8,
              showGetHelp: _v9,
              onResolved: _v25
            });
        }
      })()]
    });
  }
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  _v0.s(["AuthModal", 0, function ({
    authType: _v0,
    onSuccess: _v1,
    redirectUrlAfterSocialLogin: _v2,
    redirectUrl: _v3,
    showFBCreativeConnectJoinModal: _v4,
    target: _v5,
    handleCloseClick: _v6,
    disableDismiss: _v7,
    isFullScreen: _v8,
    banner: _v9,
    ..._v10
  }) {
    let _v11 = (0, _v3.useContext)(_v7.ViewerContext),
      _v12 = _v11?.isSimplifiedSite ?? !1,
      {
        type: _v13,
        setType: _v14,
        finalRedirectUrl: _v15,
        socialLoginRedirectUrl: _v16,
        socialJoinRedirectUrl: _v17,
        handleSuccess: _v18
      } = function ({
        authType: _v0,
        redirectUrl: _v1,
        redirectUrlAfterSocialLogin: _v2,
        isFullScreen: _v3,
        onSuccess: _v4
      }) {
        let _v5 = "mobile" === (0, _v86.default)() ? "/welcome" : "/home",
          [_v6, _v7] = (0, _v3.useState)(_v0),
          [_v8, _v9] = (0, _v3.useState)(!0);
        (0, _v3.useEffect)(() => {
          _v6 && _v8 && (_v6 === _v23 ? (0, _v85.trackLoginModalImpression)(!0) : _v6 === _v22 && (_v3 ? (0, _v85.trackJoinPageImpressionRegFlow0625)() : (0, _v85.trackJoinModalImpression)(!0)), _v9(!1));
        }, [_v6]);
        let _v10 = (0, _v79.useIsModalInIframe)();
        (0, _v3.useEffect)(() => {
          if (!_v10) return;
          let {
            modalType: _v0
          } = (0, _v79.getRedirectAndTypeFromQueryParams)(new URLSearchParams(window.location.search));
          _v7(_v0 === _v23 || "log_in" === _v0 ? _v23 : _v22);
        }, [_v10]);
        let {
            finalRedirectUrl: _v11,
            socialLoginRedirectUrl: _v12,
            socialJoinRedirectUrl: _v13
          } = (0, _v3.useMemo)(() => {
            let {
              redirect: _v0,
              joinRedirect: _v1,
              socialLoginRedirect: _v2
            } = (0, _v79.getRedirectAndTypeFromQueryParams)(new URLSearchParams(window.location.search));
            if (_v10) return {
              finalRedirectUrl: _v6 === _v23 ? _v0 || (0, _v79.getReferrerPath)() : _v1 || _v0 || _v5,
              socialLoginRedirectUrl: _v2 || _v2,
              socialJoinRedirectUrl: _v1 || _v0 || _v1 || _v5
            };
            let _v3 = _v1 || _v0 || _v1 || (_v3 ? "/survey/join" : _v5),
              _v4 = _v2 ?? _v0 ?? void 0;
            if (_v6 === _v23) {
              let _v0 = ["/log_in", "/login-auth-modal", "/login-auth-popup"].includes(window.location.pathname) ? (0, _v79.getReferrerPath)() : window.location.pathname;
              return {
                finalRedirectUrl: _v0 || _v1 || _v0,
                socialLoginRedirectUrl: _v4,
                socialJoinRedirectUrl: _v3
              };
            }
            return {
              finalRedirectUrl: _v6 && _v6 !== _v0 ? _v5 : _v3,
              socialLoginRedirectUrl: _v4,
              socialJoinRedirectUrl: _v3
            };
          }, [_v6, _v0, _v10, _v1, _v2, _v3, _v5]),
          _v14 = (0, _v3.useCallback)(_v0 => {
            (0, _v79.handlePreRedirectTask)(_v6), (0, _v79.handleRedirect)(_v4, _v0, _v6);
          }, [_v4, _v6]);
        return {
          type: _v6,
          setType: _v7,
          finalRedirectUrl: _v11,
          socialLoginRedirectUrl: _v12,
          socialJoinRedirectUrl: _v13,
          handleSuccess: _v14
        };
      }({
        authType: _v0,
        redirectUrl: _v3,
        redirectUrlAfterSocialLogin: _v2,
        isFullScreen: _v8,
        onSuccess: _v1
      }),
      _v19 = (0, _v3.useCallback)(_v0 => {
        "register" === _v0 ? _v14(_v22) : "login" === _v0 || "sso" === _v0 ? _v14(_v23) : _v14(_v0);
      }, [_v0, _v14]),
      _v20 = !!_v8 && _v13 === _v23,
      _v21 = !0 === _v4 && _v13 === _v22 && window.location.pathname.includes("/create");
    return (0, _v2.jsx)(_v30, {
      isFullScreen: _v8,
      type: _v13,
      banner: _v9,
      ..._v10,
      children: _v21 ? (0, _v2.jsxs)(_v2.Fragment, {
        children: [!0 !== _v7 && (0, _v2.jsx)(_v38, {
          handleCloseClick: _v6
        }), (0, _v2.jsx)(_v4.Text, {
          variant: "heading-md",
          marginBottom: !0 === _v8 ? (0, _v5.rem)(12) : (0, _v5.rem)(8),
          textAlign: "center",
          children: _v12 ? (0, _v6.translate)({
            singular: "Join VideoJi",
            dictionary: {
              es: {
                singular: "Únase a VideoJi"
              },
              "de-DE": {
                singular: "VideoJi beitreten"
              },
              "fr-FR": {
                singular: "Rejoignez VideoJi"
              },
              "ja-JP": {
                singular: "VimeoJiに登録"
              },
              "ko-KR": {
                singular: "VideoJi 가입"
              },
              "pt-BR": {
                singular: "Junte-se ao VideoJi"
              },
              "zh-CN": {
                singular: "加入 VideoJi"
              }
            }
          }) : !0 === _v8 ? (0, _v6.translate)("Join Vimeo for free and share high-quality videos in seconds") : (0, _v6.translate)("Join Vimeo for free")
        }), !0 !== _v8 && (0, _v2.jsx)(_v4.Text, {
          variant: "body-md",
          color: "text-secondary",
          marginBottom: (0, _v5.rem)(24),
          textAlign: "center",
          children: (0, _v6.translate)("Create and share videos in seconds.")
        }), (0, _v2.jsx)(_v87.ConnectToFbForm, {
          xsrft: _v11?.xsrft ?? "",
          redirectUrl: _v3,
          shouldOptIntoMarketing: _v11?.shouldOptIntoMarketing,
          target: _v5 ?? "_top",
          switchType: () => _v14(_v23),
          onSuccess: _v18
        })]
      }) : (0, _v2.jsx)(_v84, {
        authType: _v0,
        isFullScreen: _v8,
        isSimplifiedSite: _v12,
        redirectUrl: _v15,
        redirectUrlAfterSocialLogin: _v16,
        redirectUrlAfterSocialJoin: _v17,
        disableDismiss: _v7,
        handleCloseClick: _v6,
        showGetHelp: _v20,
        onSuccess: _v18,
        onStepChange: _v19
      })
    });
  }], 0);
}