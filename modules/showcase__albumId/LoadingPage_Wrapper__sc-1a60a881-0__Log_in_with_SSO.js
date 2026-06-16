{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
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
  let _v17 = _v15.default.div.withConfig({
      displayName: "LoadingPage__Wrapper",
      componentId: "sc-1a60a881-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(0, _v14.rem)(100)};
`,
    _v18 = () => (0, _v6.jsx)(_v17, {
      children: (0, _v6.jsx)(_v16.Spinner, {
        size: "xl"
      })
    });
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = (0, _v9.createContext)({
      isShowcaseEmbeded: !1,
      referrer: ""
    }),
    _v34 = function ({
      name: _v0,
      url: _v1,
      brandColor: _v2,
      ssoEnabled: _v3,
      userId: _v4,
      customLogo: _v5,
      theme: _v6,
      domain: _v7,
      id: _v8,
      ssoConnectionsCount: _v9
    }) {
      let _v10 = (0, _v9.useContext)(_v32.ViewerContext),
        _v11 = (0, _v9.useContext)(_v33),
        _v12 = (0, _v8.useRouter)(),
        _v13 = _v10 && _v10.vimeoHttpsUrl,
        _v14 = _v9 > 1,
        _v15 = _v3 && !_v14 ? (0, _v31.translate)({
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
        }) : (0, _v31.translate)({
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
        _v16 = _v1 || _v8,
        _v17 = window.location.hostname === _v7,
        _v18 = _v12?.query?.offsite === "redirect" ? "/offsite_redirect" : "?app=showcase",
        _v19 = _v2 ?? null,
        [_v20] = (0, _v28.useToken)("colors", ["fill-brand"]),
        _v21 = "dark" === _v6 ? _v27.DarkMode : _v27.LightMode,
        _v22 = _v17 ? encodeURIComponent(`${_v13}/showcase/${_v16}${_v18}`) : `${_v13}/showcase/${_v16}`,
        _v23 = async (_v0 = !0) => {
          let _v1 = window.open(`/showcase/${_v8}/authorize?use_sso=${_v0}`, "", "width=800,height=600,menubar=no,scrollbars=no,titlebar=no,toolbar=no");
          try {
            await new Promise((_v0, _v1) => {
              let _v2 = _v0 => {
                try {
                  if (_v0.origin !== _v13) return;
                  _v0.data.type && "success" === _v0.data.type ? _v0() : _v1(Error("Login failed"));
                } finally {
                  window.removeEventListener("message", _v2);
                }
              };
              window.addEventListener("message", _v2);
            }), _v1?.close(), location.reload();
          } catch (_v0) {
            console.error(_v0.message), _v1?.close();
          }
        };
      return (0, _v6.jsx)(_v21, {
        children: (0, _v6.jsx)(_v22.Center, {
          h: "100vh",
          minH: (0, _v30.rem)(400),
          w: "100%",
          bgColor: "background",
          flexFlow: "column",
          flex: "1",
          p: "1rem",
          children: (0, _v6.jsxs)(_v22.Center, {
            maxWidth: (0, _v30.rem)(520),
            paddingX: (0, _v30.rem)(80),
            paddingY: (0, _v30.rem)(60),
            backgroundColor: "fill-surface",
            flexFlow: "column",
            borderRadius: "xl",
            textAlign: "center",
            children: [null !== _v5 && (0, _v6.jsx)(_v24.Image, {
              src: _v5,
              alt: _v0 || "",
              marginX: "auto",
              marginBottom: (0, _v30.rem)(36),
              display: "block",
              maxWidth: (0, _v30.rem)(260),
              width: "auto",
              maxHeight: (0, _v30.rem)(200),
              height: "auto"
            }), (0, _v6.jsx)(_v21.Header, {
              variant: "heading-lg",
              marginBottom: (0, _v30.rem)(36),
              color: "text-primary",
              size: "xl",
              children: _v0 ? (0, _v31.translate)({
                singular: "Log in to {TITLE}",
                replacements: {
                  TITLE: _v0
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
              }) : (0, _v31.translate)({
                singular: "Log in to watch",
                dictionary: {
                  es: {
                    singular: "Inicia sesión para verla"
                  },
                  "de-DE": {
                    singular: "Melde dich an, um das Video anzusehen"
                  },
                  "fr-FR": {
                    singular: "Connectez-vous pour la regarder."
                  },
                  "ja-JP": {
                    singular: "視聴するにはログインしてください"
                  },
                  "ko-KR": {
                    singular: "시청하려면 로그인하세요."
                  },
                  "pt-BR": {
                    singular: "Faça login para assistir"
                  },
                  "zh-CN": {
                    singular: "登录观看"
                  }
                }
              })
            }), (0, _v6.jsx)(_v25.Text, {
              variant: "body-md",
              color: "text-secondary",
              marginBottom: "200",
              textAlign: "center",
              children: (0, _v31.translate)({
                singular: "By logging in to Vimeo, you agree to our {TERMS}Terms of Service{/TERMS} and acknowledge our {PRIVACY}Privacy Policy{/PRIVACY}.",
                replacements: {
                  TERMS: _v0 => (0, _v6.jsx)(_v23.Link, {
                    href: "/terms",
                    target: "_blank",
                    variant: "inline-primary",
                    fontSize: "inherit",
                    color: "inherit",
                    children: _v0
                  }, "terms"),
                  PRIVACY: _v0 => (0, _v6.jsx)(_v23.Link, {
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
            }), (0, _v6.jsx)(_v20.Button, {
              size: "lg",
              ...(_v19 && {
                bgColor: _v19,
                color: (0, _v29.readableColor)(_v19),
                _hover: {
                  bgColor: (0, _v29.lighten)(_v19, .1)
                },
                _dark: {
                  bgColor: _v19,
                  _hover: {
                    bgColor: (0, _v29.lighten)(_v19, .1)
                  }
                }
              }),
              onClick: () => {
                if (_v13.FatalAttraction.trackClick({
                  container: "showcase",
                  component: "login",
                  keyword: _v3 ? "sso" : "use_email_password"
                }), _v11?.isShowcaseEmbeded) _v23(_v3);else {
                  let _v0;
                  _v0 = _v3 && !_v14 ? `${_v13}/auth0/connect?prev_page=${_v22}&team_id=${_v4}` : `${_v13}/log_in?redirect=${_v22}`, window.location.href = _v0;
                }
              },
              children: _v15
            }), _v3 && !_v14 && (0, _v6.jsx)(_v26.Paragraph, {
              variant: "body-md",
              marginTop: "200",
              color: "text-primary",
              children: (0, _v31.translate)({
                singular: "{A}Log in{/A} with email and password",
                replacements: {
                  A: _v0 => (0, _v6.jsx)(_v23.Link, {
                    href: "#",
                    onClick: () => _v23(!1),
                    variant: "inline-primary",
                    fontSize: "inherit",
                    style: {
                      color: _v19 ?? _v20
                    },
                    children: _v0
                  }, "showcase-login-with-email")
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
        })
      });
    };
  var _v35 = _v0.i(0);
  let _v36 = {
      PRIVACY_ERROR: {
        heading: (0, _v31.translate)({
          singular: "This is private",
          dictionary: {
            es: {
              singular: "Esto es privado"
            },
            "de-DE": {
              singular: "Dieser Inhalt ist privat"
            },
            "fr-FR": {
              singular: "Ceci est privé"
            },
            "ja-JP": {
              singular: "これはプライベート動画です。"
            },
            "ko-KR": {
              singular: "비공개 상태입니다."
            },
            "pt-BR": {
              singular: "Isto é privado"
            },
            "zh-CN": {
              singular: "这是私人视频"
            }
          }
        }),
        body: (0, _v31.translate)({
          singular: "Sorry, you don’t have permission to watch here.",
          dictionary: {
            es: {
              singular: "Lo sentimos, no tienes autorización para ver el contenido."
            },
            "de-DE": {
              singular: "Sorry, du bist nicht befugt, das zu sehen."
            },
            "fr-FR": {
              singular: "Désolé, vous n'avez pas la permission de regarder."
            },
            "ja-JP": {
              singular: "申し訳ありません、この動画の鑑賞には許可が必要です。"
            },
            "ko-KR": {
              singular: "죄송합니다! 이곳에서는 시청 권한이 없습니다."
            },
            "pt-BR": {
              singular: "Desculpe, mas você não tem permissão para assistir aqui."
            },
            "zh-CN": {
              singular: "抱歉，您没有权限在这里观看。"
            }
          }
        })
      }
    },
    _v37 = "PRIVACY_ERROR",
    _v38 = ({
      errorType: _v0 = _v37
    }) => (0, _v6.jsxs)(_v35.Flex, {
      alignContent: "center",
      background: "linear-gradient(180deg, rgba(20, 21, 22, 0) 0%, #141516 100%)",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      textAlign: "center",
      width: "100vw",
      children: [(0, _v6.jsx)(_v25.Text, {
        variant: "heading",
        color: "white",
        display: "block",
        fontWeight: "700",
        children: _v36[_v0]?.heading
      }), (0, _v6.jsx)(_v25.Text, {
        variant: "heading",
        color: "white",
        children: _v36[_v0]?.body
      })]
    }),
    _v39 = () => {
      let _v0 = (0, _v9.useContext)(_v33);
      return {
        getEmbedQueryParam: (_v0 = "&") => _v0?.referrer && _v0?.isShowcaseEmbeded ? `${_v0}referrer=${encodeURIComponent(_v0?.referrer)}&is_embed=${_v0.isShowcaseEmbeded}` : ""
      };
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = function ({
      albumId: _v0,
      xsrft: _v1,
      onSuccess: _v2
    }) {
      let [_v3, _v4] = (0, _v9.useState)(""),
        [_v5, _v6] = (0, _v9.useState)(!1),
        [_v7, _v8] = (0, _v9.useState)(!1),
        _v9 = (0, _v9.useContext)(_v33),
        _v10 = (0, _v9.useCallback)(_v0 => {
          _v4(_v0.currentTarget.value);
        }, [_v3, _v4]),
        _v11 = (0, _v9.useCallback)(_v0 => {
          let _v1, _v2;
          _v0.preventDefault(), _v8(!0);
          let _v3 = {
              password: _v3,
              token: _v1,
              referer_url: `/showcase/${_v0}`
            },
            _v4 = new FormData();
          for (let [_v0, _v1] of Object.entries(_v3)) _v4.append(_v0, _v1);
          (_v2 = {
            credentials: "include",
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }, _v9?.isShowcaseEmbeded ? (_v1 = `/showcase/${_v0}/password?password=${_v3}`, _v2.method = "GET") : (_v1 = "/" === location.pathname ? "/auth" : `/showcase/${_v0}/auth`, _v2.method = "POST", _v2.body = _v4), fetch(_v1, _v2)).then(_v0 => (_v0.ok || _v6(!0), _v0.json())).then(_v0 => {
            if (!1 === _v0.password && _v6(!0), null === _v0.error_code) {
              let _v0 = "string" == typeof _v0.metadata?.name ? _v0.metadata.name : void 0;
              _v2(_v0.hashed_pass, _v0);
            }
            _v8(!1);
          }).catch(() => {
            _v8(!1);
          });
        }, [_v3, _v5, _v6]);
      return (0, _v9.useEffect)(() => {
        _v5 && _v6(!1);
      }, [_v3]), (0, _v6.jsxs)(_v45, {
        onSubmit: _v11,
        children: [(0, _v6.jsx)(_v46, {
          children: (0, _v31.translate)({
            singular: "This showcase is private",
            dictionary: {
              es: {
                singular: "Esta presentación es privada"
              },
              "de-DE": {
                singular: "Diese Präsentation ist privat."
              },
              "fr-FR": {
                singular: "Cette présentation est privée"
              },
              "ja-JP": {
                singular: "このショーケースは非公開です"
              },
              "ko-KR": {
                singular: "비공개 쇼케이스입니다"
              },
              "pt-BR": {
                singular: "Esta vitrine é privada"
              },
              "zh-CN": {
                singular: "此为私人橱窗"
              }
            }
          })
        }), (0, _v6.jsxs)(_v47, {
          children: [(0, _v6.jsx)(_v48, {
            size: "md",
            type: "password",
            id: `${_v0}`,
            value: _v3,
            onChange: _v10,
            placeholder: (0, _v31.translate)({
              singular: "Enter password",
              dictionary: {
                es: {
                  singular: "Ingresar la contraseña"
                },
                "de-DE": {
                  singular: "Bitte Kennwort eingeben"
                },
                "fr-FR": {
                  singular: "Saisir mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを入力"
                },
                "ko-KR": {
                  singular: "비밀번호 입력"
                },
                "pt-BR": {
                  singular: "Digite a senha"
                },
                "zh-CN": {
                  singular: "输入密码"
                }
              }
            }),
            "aria-label": (0, _v31.translate)({
              singular: "Enter password",
              dictionary: {
                es: {
                  singular: "Ingresar la contraseña"
                },
                "de-DE": {
                  singular: "Bitte Kennwort eingeben"
                },
                "fr-FR": {
                  singular: "Saisir mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを入力"
                },
                "ko-KR": {
                  singular: "비밀번호 입력"
                },
                "pt-BR": {
                  singular: "Digite a senha"
                },
                "zh-CN": {
                  singular: "输入密码"
                }
              }
            }),
            disabled: _v7
          }), (0, _v6.jsx)(_v49, {
            disabled: _v7,
            size: "md",
            format: "primary",
            children: (0, _v31.translate)({
              singular: "Submit",
              dictionary: {
                es: {
                  singular: "Enviar"
                },
                "de-DE": {
                  singular: "Senden"
                },
                "fr-FR": {
                  singular: "Envoyer"
                },
                "ja-JP": {
                  singular: "送信"
                },
                "ko-KR": {
                  singular: "제출"
                },
                "pt-BR": {
                  singular: "Enviar"
                },
                "zh-CN": {
                  singular: "提交"
                }
              }
            })
          })]
        }), _v5 && (0, _v6.jsx)(_v50, {
          format: "negative",
          role: "alert",
          children: (0, _v31.translate)({
            singular: "Sorry, that password was incorrect. Please try again.",
            dictionary: {
              es: {
                singular: "Lo sentimos, pero esta contraseña es incorrecta. Inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Leider ist das Kennwort falsch. Bitte noch einmal versuchen."
              },
              "fr-FR": {
                singular: "Désolé, ce mot de passe est incorrect. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "パスワードが間違っています。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다, 잘못된 비밀번호입니다. 올바른 비밀번호로 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Desculpe, mas a senha estava incorreta. Tente de novo."
              },
              "zh-CN": {
                singular: "抱歉，密码不正确。请重试。"
              }
            }
          })
        })]
      });
    },
    _v45 = _v15.default.form.withConfig({
      displayName: "PasswordPrompt__Form",
      componentId: "sc-905b4224-0"
    })`
  width: 100%;
  text-align: center;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`,
    _v46 = (0, _v15.default)(_v43.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "PasswordPrompt__PromptMessage",
      componentId: "sc-905b4224-1"
    })`
  max-width: none;
`,
    _v47 = _v15.default.div.withConfig({
      displayName: "PasswordPrompt__Row",
      componentId: "sc-905b4224-2"
    })`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${(0, _v14.rem)(50)};
  width: 100%;
`,
    _v48 = (0, _v15.default)(_v41.Input).withConfig({
      displayName: "PasswordPrompt__PasswordInput",
      componentId: "sc-905b4224-3"
    })`
  min-width: ${(0, _v14.rem)(320)};
`,
    _v49 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "PasswordPrompt__SubmitButton",
      componentId: "sc-905b4224-4"
    })`
  width: ${(0, _v14.rem)(320)};
  margin: ${(0, _v14.rem)(15)} 0 0;
  @media screen and (min-width: ${(0, _v14.rem)(768)}) {
    margin-left: ${(0, _v14.rem)(15)};
    width: auto;
  }
`,
    _v50 = (0, _v15.default)(_v42.Notice).withConfig({
      displayName: "PasswordPrompt__NoticeStyled",
      componentId: "sc-905b4224-5"
    })`
  width: ${(0, _v14.rem)(320)};
  margin: ${(0, _v14.rem)(25)} 0 0;
  @media screen and (min-width: ${(0, _v14.rem)(768)}) {
    width: auto;
  }
`;
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = _v9.default.lazy(() => _v0.A(0).then(({
      Container: _v0
    }) => ({
      default: _v0
    }))),
    _v63 = _v15.default.div.withConfig({
      displayName: "AppLayout__Container",
      componentId: "sc-15c38044-0"
    })`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,
    _v64 = _v15.default.div.withConfig({
      displayName: "AppLayout__HeaderContainer",
      componentId: "sc-15c38044-1"
    })`
  width: 100%;
  ${_v0 => _v0.isFixed && _v15.css`
      position: fixed;
      z-index: 100;
    `};
`,
    _v65 = _v15.default.div.withConfig({
      displayName: "AppLayout__Content",
      componentId: "sc-15c38044-2"
    })`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: ${_v0 => _v0.offset ? `${(0, _v30.rem)(_v0.offset)}` : "auto"};
`,
    _v66 = "none",
    _v67 = "minimal";
  function _v68({
    option: _v0,
    viewer: _v1
  }) {
    switch (_v0) {
      case _v67:
        return (0, _v6.jsx)(_v58.default, {
          ..._v1
        });
      case "default":
        return (0, _v6.jsx)(_v59.default, {
          ..._v1
        });
      case "essential":
        return (0, _v6.jsx)(_v57.default, {
          ..._v1
        });
      default:
        return null;
    }
  }
  let _v69 = ({
    options: _v0,
    viewer: _v1,
    children: _v2,
    hasThemeSupport: _v3
  }) => {
    let _v4 = _v0.header !== _v66,
      _v5 = "fixed" === _v0.header,
      [_v6, _v7] = (0, _v61.useClientRect)(["height"], [_v4]),
      _v8 = _v4 && _v5 && null !== _v6 ? _v6.height : 0,
      [_v9, _v10] = (0, _v9.useState)(!1),
      [_v11, _v12] = (0, _v9.useState)(!1);
    return (0, _v9.useEffect)(() => {
      let _v0 = window.location.pathname;
      _v10(-1 !== document.cookie.indexOf("create_fb_context=1") && -1 === _v0.indexOf("/create") && -1 === _v0.indexOf("/preview"));
    }, [_v1]), (0, _v9.useEffect)(() => {
      _v12(_v1 && _v1.teamUser && -1 !== window.location.pathname.indexOf("/create/templates") && !window.location.pathname.match(/\/apps\/[0-9]+/));
    }, [_v1]), (0, _v6.jsxs)(_v63, {
      children: [(0, _v6.jsxs)(_v64, {
        ref: _v7,
        isFixed: _v5,
        children: [(0, _v6.jsx)(_v60.default, {}), _v0.globalNotifications && _v9 && (0, _v6.jsx)(_v56.default, {}), _v0.globalNotifications && _v1 && _v1.xsrft ? (0, _v6.jsx)(_v9.Suspense, {
          fallback: null,
          children: (0, _v6.jsx)(_v62, {
            token: _v1.xsrft
          })
        }) : null, _v11 && (0, _v6.jsx)(_v55.default, {
          teamUserRole: _v1.teamUser.plainTextPermissionLevel,
          userId: _v1.user.id,
          locale: _v1.locale,
          vuid: _v1.vuid
        }), _v0.ribbon ? (0, _v6.jsx)(_v54.Ribbon, {
          variant: _v1 && _v1.ribbonModifier,
          animate: !1,
          style: {
            height: (0, _v30.rem)(3)
          }
        }) : null, _v4 && (0, _v6.jsx)(_v53.DefaultNavigation, {
          hasThemeSupport: _v3
        })]
      }), (0, _v6.jsx)(_v65, {
        offset: _v8,
        children: _v2
      }), (0, _v6.jsx)(_v68, {
        option: _v0.footer,
        viewer: _v1
      })]
    });
  };
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v9,
    _v74 = _v0.i(0);
  let _v75 = _v15.css`
  background: ${_v74.bokehTheme.colors.gray["800"]};

  a {
    color: ${_v74.bokehTheme.colors.gray["50"]};
  }
`,
    _v76 = _v15.css`
  background: white;
  color: ${_v74.bokehTheme.colors.gray["800"]};
`,
    _v77 = _v15.css`
  min-height: 100vh;
`,
    _v78 = _v15.css`
  width: 100%;
  padding: 0;
  min-height: 100vh;
`,
    _v79 = ({
      theme: _v0
    }) => "dark" === _v0 ? _v75 : _v76,
    _v80 = _v15.default.div.withConfig({
      displayName: "SiteWrapperStyled__FullHeightWrapper",
      componentId: "sc-5c63f3dc-0"
    })`
  min-height: 100vh;
  ${_v79}
`,
    _v81 = _v15.default.section.withConfig({
      displayName: "SiteWrapperStyled__SiteSection",
      componentId: "sc-5c63f3dc-1"
    })`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  position: relative;

  a,
  a:visited {
    color: ${_v74.bokehTheme.colors.gray["800"]};
    text-decoration: none;
  }

  a:hover {
    color: ${_v74.bokehTheme.colors.blue["500"]};
  }

  ${_v79}
  ${({
      layout: _v0
    }) => "grid" === _v0 ? _v77 : _v78}
`,
    _v82 = "user",
    _v83 = "video",
    _v84 = "live_events",
    _v85 = "#00adef",
    _v86 = "stock",
    _v87 = "grid",
    _v88 = "player",
    _v89 = "live",
    _v90 = "playlist",
    _v91 = "standard",
    _v92 = "dark",
    _v93 = {
      sort: "default"
    },
    _v94 = {
      alphabetical: {
        sort: "alphabetical",
        direction: "asc"
      },
      newest: {
        sort: "date",
        direction: "desc"
      },
      oldest: {
        sort: "date",
        direction: "asc"
      },
      likes: {
        sort: "likes",
        direction: "desc"
      },
      plays: {
        sort: "plays",
        direction: "desc"
      },
      comments: {
        sort: "comments",
        direction: "desc"
      },
      arranged: {
        sort: "manual"
      },
      added_first: _v93,
      added_last: _v93
    },
    _v95 = {
      brandColor: _v85,
      customLogo: null,
      file: null,
      hideNav: !1,
      layout: _v87,
      logo: "",
      logoUrl: "",
      theme: _v91
    },
    _v96 = ["allow_continuous_play", "allow_downloads", "allow_share", "autoplay", "brand_color", "custom_logo", "description", "domain", "embed", "hide_nav", "hide_upcoming", "layout", "name", "pictures.sizes.link", "pictures.uri", "has_chosen_thumbnail", "pictures.type", "privacy", "share_link", "sort", "theme", "unlisted_hash", "user.uri", "web_custom_logo", "web_brand_color", "metadata.connections.videos.total"],
    _v97 = ["description", "duration", "is_free", "live", "name", "pictures.sizes.link", "pictures.sizes.width", "pictures.uri", "privacy.download", "privacy.view", "content_rating_class", "type", "uri", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri"],
    _v98 = {
      SU: 0,
      MO: 1,
      TU: 2,
      WE: 3,
      TH: 4,
      FR: 5,
      SA: 6
    };
  class _v99 extends _v73.Component {
    static defaultProps = {
      theme: "standard",
      color: _v85,
      layout: "player",
      hideNav: !1
    };
    componentDidMount() {
      document.body.classList.remove("is--loading");
    }
    render() {
      let {
        theme: _v0,
        layout: _v1,
        children: _v2
      } = this.props;
      return (0, _v6.jsx)(_v80, {
        theme: _v0,
        children: (0, _v6.jsx)(_v81, {
          theme: _v0,
          layout: _v1,
          children: _v2
        })
      });
    }
  }
  let _v100 = (0, _v9.createContext)({
    albumId: 0,
    isOwnerOrAdmin: !1,
    hashedPass: "",
    navIsHidden: !1
  });
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = _v15.default.div.withConfig({
    displayName: "AlbumsAppStyled__HideByScreenWidth",
    componentId: "sc-d8a0e507-0"
  })`
  @media only screen and (max-width: ${({
    minWidth: _v0
  }) => (0, _v14.rem)(_v0)}) {
    display: none;
  }
`;
  var _v105 = _v0.i(0),
    _v106 = _v9,
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = (0, _v9.forwardRef)(function (_v0, _v1) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v9.default.createElement("path", {
        d: "M13.71 11.3l-4-4-1.42 1.41L10.58 11H2v2h8.59l-2.3 2.29L9.7 16.7l4-4a1 1 0 0 0 .01-1.4z",
        fill: "#1a2e3b"
      }), _v9.default.createElement("path", {
        d: "M16 2h-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v5h2V4h1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h1v14H4v-3H2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 2H7V2h6z",
        fill: "#1a2e3b"
      }));
    }),
    _v115 = _v0.i(0);
  _v0.i(0);
  var _v116 = (0, _v113.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = void 0 === _v1 ? _v9.default.createElement(_v114, null) : _v1,
        _v3 = _v0.format;
      _v0.forwardRef;
      var _v4 = _v0.label,
        _v5 = _v0.messages,
        _v6 = _v0.onCopy,
        _v7 = _v0.size,
        _v8 = void 0 === _v7 ? "md" : _v7,
        _v9 = _v0.variant,
        _v10 = (0, _v111.b)(_v0, ["children", "format", "forwardRef", "label", "messages", "onCopy", "size", "variant"]),
        _v11 = (0, _v9.useRef)(null),
        _v12 = (0, _v111._)((0, _v9.useState)(!1), 2),
        _v13 = _v12[0],
        _v14 = _v12[1],
        _v15 = (0, _v111._)((0, _v9.useState)(0), 2),
        _v16 = _v15[0],
        _v17 = _v15[1];
      return (0, _v9.useLayoutEffect)(function () {
        return _v17((0, _v115.geometry)(_v11.current).height);
      }, []), _v9.default.createElement(_v9.default.Fragment, null, _v9.default.createElement(_v41.Input, (0, _v111.c)({}, _v10, {
        size: _v8,
        ref: _v11,
        label: _v4,
        readOnly: !0
      }), _v9.default.createElement(_v117, {
        format: void 0 === _v3 ? "primary" : _v3,
        variant: void 0 === _v9 ? "basic" : _v9,
        label: _v4,
        size: _v8,
        height: _v16,
        onClick: function (_v0) {
          document && !_v13 && (_v11.current.select(), document.execCommand("copy"), _v6 && _v6(_v0), _v14(!0), setTimeout(function () {
            return _v14(!1);
          }, 0));
        }
      }, _v2)), _v9.default.createElement(_v107.Notification, {
        showing: _v13,
        content: _v5.success
      }));
    }),
    _v117 = (0, _v15.default)(_v112.InnerButton)(_v3 || (_v3 = (0, _v111.a)(["\n  & > button {\n    padding: 0 0.5rem;\n  }\n"], ["\n  & > button {\n    padding: 0 0.5rem;\n  }\n"]))),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0);
  let _v121 = {
      xs: 320,
      xsm: 375,
      xmd: 480,
      sm: 768,
      md: 0,
      lg: 0,
      hd: 0,
      xhd: 0
    },
    _v122 = Object.keys(_v121).reduce((_v0, _v1) => {
      let _v2 = _v121[_v1];
      return _v0[_v1] = (_v0, ..._v1) => _v15.css`
    @media (min-width: ${_v2}px) {
      ${(0, _v15.css)(_v0, ..._v1)};
    }
  `, _v0;
    }, {}),
    _v123 = _v15.default.div.withConfig({
      displayName: "Styles__ModalContentWrapper",
      componentId: "sc-39d0ba95-0"
    })`
  ${_v122.xs`
    width: ${(0, _v14.rem)(240)};
  `}
  ${_v122.sm`
    width: ${(0, _v14.rem)(360)};
  `}
`,
    _v124 = _v15.default.div.withConfig({
      displayName: "Styles__ShareModalWrapper",
      componentId: "sc-39d0ba95-1"
    })`
  ${_v122.md`
    display: inline-block;
  `}
`,
    _v125 = _v15.default.div.withConfig({
      displayName: "Styles__CaptchaWrapper",
      componentId: "sc-39d0ba95-2"
    })`
  padding-bottom: ${(0, _v14.rem)(20)};
  min-height: ${(0, _v14.rem)(85)};
  ${_v122.xs`
    transform: scale(0.79);
    transform-origin: 0 0;
  `}
  ${_v122.sm`
    transform: none;
  `}
`,
    _v126 = _v15.default.div.withConfig({
      displayName: "Styles__ButtonsWrapper",
      componentId: "sc-39d0ba95-3"
    })`
  display: flex;
  justify-content: flex-end;
`,
    _v127 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "Styles__ButtonMargin",
      componentId: "sc-39d0ba95-4"
    })`
  margin-right: ${(0, _v14.rem)(6)};
`,
    _v128 = _v15.default.div.withConfig({
      displayName: "Styles__CopyFieldWrapper",
      componentId: "sc-39d0ba95-5"
    })`
  padding-bottom: ${(0, _v14.rem)(24)};
  border-bottom: ${(0, _v14.rem)(1)} solid ${(0, _v120.slate)(200)};
`,
    _v129 = _v15.default.div.withConfig({
      displayName: "Styles__EmailFieldWrapper",
      componentId: "sc-39d0ba95-6"
    })`
  padding-top: ${(0, _v14.rem)(24)};
`,
    _v130 = _v15.default.div.withConfig({
      displayName: "Styles__MessageFieldWrapper",
      componentId: "sc-39d0ba95-7"
    })`
  padding: ${(0, _v14.rem)(24)} 0;
`,
    _v131 = _v15.default.span.withConfig({
      displayName: "Styles__ErrorMsg",
      componentId: "sc-39d0ba95-8"
    })`
  color: ${(0, _v120.red)(600)};
  font-size: ${(0, _v14.rem)(12)};
`,
    _v132 = _v15.default.div.withConfig({
      displayName: "Styles__EmailInputWrapper",
      componentId: "sc-39d0ba95-9"
    })`
  margin-bottom: ${(0, _v14.rem)(8)};
`,
    _v133 = (0, _v15.default)(_v119.Tag).withConfig({
      displayName: "Styles__EmailTag",
      componentId: "sc-39d0ba95-10"
    })`
  margin-bottom: ${(0, _v14.rem)(8)};
  display: inline-flex;
  color: ${(0, _v120.grayscale)(800)};
  &:not(:last-child) {
    margin-right: ${(0, _v14.rem)(8)};
  }
`,
    _v134 = ({
      recaptchaSiteKey: _v0,
      handleCaptcha: _v1,
      handleCaptchaExpire: _v2
    }) => (0, _v6.jsx)(_v125, {
      children: (0, _v6.jsx)(_v118.default, {
        sitekey: _v0,
        callback: _v1,
        expiredCallback: _v2
      })
    });
  var _v135 = _v9;
  class _v136 extends _v135.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        isValidEmail: !0,
        inputStr: ""
      };
    }
    render() {
      let {
          emails: _v0,
          removeEmail: _v1
        } = this.props,
        {
          isValidEmail: _v2,
          inputStr: _v3
        } = this.state;
      return (0, _v6.jsxs)(_v129, {
        children: [(0, _v6.jsx)(_v132, {
          children: (0, _v6.jsx)(_v41.Input, {
            name: "email",
            id: "userEmail",
            label: _v108.T.Email,
            placeholder: _v108.T.EmailText,
            status: _v2 ? "neutral" : "negative",
            messages: _v2 ? void 0 : {
              error: (0, _v6.jsx)(_v131, {
                children: _v108.T.InvalidEmail
              })
            },
            value: _v3,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onBlur: this.offFocus
          })
        }), _v0.map((_v0, _v1) => (0, _v6.jsxs)(_v133, {
          size: "sm",
          children: [(0, _v6.jsx)(_v119.TagLabel, {
            children: _v0
          }), (0, _v6.jsx)(_v119.TagCloseButton, {
            onClick: () => _v1(_v1)
          })]
        }, `EMAIL_${_v1}`))]
      });
    }
    updateEmailFieldValue = _v0 => {
      this.setState({
        inputStr: _v0
      });
    };
    clearEmailField = () => {
      this.setState({
        inputStr: ""
      });
    };
    setEmailValidity = _v0 => {
      this.setState({
        isValidEmail: _v0
      });
    };
    handleEmailInput = _v0 => {
      for (let _v0 of _v0.split(",")) (_v0 = _v0.trim()) && _v108.EMAIL_REGEX.test(String(_v0).toLowerCase()) ? (this.setEmailValidity(!0), this.props.updateEmailArray(_v0), this.clearEmailField(), this.props.onAddEmail && this.props.onAddEmail()) : this.setEmailValidity(!1);
    };
    offFocus = _v0 => {
      let _v1 = _v0.target.value;
      _v1 && 0 !== _v1.length && this.handleEmailInput(_v1);
    };
    handleChange = _v0 => {
      _v0.persist();
      let _v1 = _v0.target.value;
      _v1.length && ("," === _v1[0] || " " === _v1[0]) || this.updateEmailFieldValue(_v1);
    };
    handleKeyDown = _v0 => {
      let _v1 = _v0.target ? _v0.target.value : "";
      _v1.length && ("," === _v0.key || "Tab" === _v0.key || "Enter" === _v0.key || " " === _v0.key) ? (_v0.preventDefault(), this.handleEmailInput(_v1)) : this.setEmailValidity(!0);
    };
  }
  let _v137 = ({
    card: _v0 = null,
    link: _v1,
    enableSubmit: _v2,
    closeModal: _v3,
    showModal: _v4,
    loading: _v5,
    hasExceededCount: _v6,
    exceededCount: _v7,
    captchaResToken: _v8,
    reCaptchaSiteKey: _v9,
    emails: _v10,
    messageInputValue: _v11,
    removeEmail: _v12,
    trackCopy: _v13,
    trackAddEmail: _v14,
    handleCaptcha: _v15,
    handleSubmit: _v16,
    handleCaptchaExpire: _v17,
    handleMessageInput: _v18,
    updateEmailArray: _v19,
    hideShareByEmail: _v20
  }) => (0, _v6.jsx)(_v109.Modal, {
    modalLabelId: "shareModal",
    modalDescriptionId: "Share a clip to multiple users via email",
    firstFocusSelector: "No first focus",
    modalCloseLabel: "Close this dialog.",
    modalTitle: _v108.T.Share,
    onDismiss: _v3,
    dismissButtonFormat: "dark",
    isShowing: _v4,
    size: "fluid",
    children: (0, _v6.jsxs)(_v123, {
      children: [_v0, _v20 ? (0, _v6.jsx)(_v116, {
        id: "copyClipUri",
        label: _v108.T.CopyLink,
        messages: {
          success: _v108.T.Copied
        },
        value: _v1,
        onCopy: _v13
      }) : (0, _v6.jsx)(_v128, {
        children: (0, _v6.jsx)(_v116, {
          id: "copyClipUri",
          label: _v108.T.CopyLink,
          messages: {
            success: _v108.T.Copied
          },
          value: _v1,
          onCopy: _v13
        })
      }), !_v20 && (0, _v6.jsxs)("div", {
        children: [(0, _v6.jsx)(_v136, {
          emails: _v10,
          removeEmail: _v12,
          updateEmailArray: _v19,
          onAddEmail: _v14
        }), (0, _v6.jsx)(_v130, {
          children: (0, _v6.jsx)(_v110.TextArea, {
            name: "shareMsg",
            id: "msg1",
            label: _v108.T.OptionalMsg,
            format: _v6 ? "negative" : "neutral",
            errorMsg: _v6 && (0, _v6.jsx)("span", {
              children: `- ${_v7} ${_v108.T.Characters}`
            }) || void 0,
            defaultValue: _v11,
            onChange: _v18
          })
        }), (0, _v6.jsx)(_v134, {
          recaptchaSiteKey: _v9,
          handleCaptcha: _v15,
          handleCaptchaExpire: _v17
        }), (0, _v6.jsxs)(_v126, {
          children: [(0, _v6.jsx)(_v127, {
            format: "secondary",
            onClick: _v3,
            children: _v108.T.Cancel
          }), (0, _v6.jsx)(_v40.Button, {
            format: "primary",
            disabled: !_v2,
            loading: _v5,
            onClick: () => _v16(_v8),
            children: _v108.T.Send
          })]
        })]
      })]
    })
  });
  class _v138 extends _v106.default.Component {
    handleMsgInputThrottled;
    static getDerivedStateFromProps(_v0, _v1) {
      return _v1.showModal !== _v0.showModal ? {
        showModal: _v0.showModal
      } : null;
    }
    constructor(_v0) {
      super(_v0), this.state = {
        enableSubmit: !1,
        showModal: _v0.showModal ?? !1,
        hasExceededCount: !1,
        captchaPassed: !1,
        hasError: !1,
        exceededCount: 0,
        captchaResToken: "",
        emails: [],
        messageInputValue: "",
        removeEmail: () => void 0,
        closeModal: () => void 0,
        handleSendBtnState: () => void 0
      }, this.handleMsgInputThrottled = (0, _v105.default)(this.handleMessageInputValue, _v108.THROTTLE_TIME);
    }
    render() {
      let {
          children: _v0
        } = this.props,
        {
          hasError: _v1
        } = this.state;
      return (0, _v6.jsxs)(_v124, {
        children: [_v0 ? _v0({
          openShareModal: this.openShareModal
        }) : null, (0, _v6.jsx)(_v137, {
          ...this.props,
          ...this.state,
          removeEmail: this.removeEmail,
          closeModal: () => this.closeShareModal(!1),
          handleCaptcha: this.handleCaptcha,
          handleSubmit: this.handleSubmit,
          updateEmailArray: this.updateEmailArray,
          handleCaptchaExpire: this.handleCaptchaExpire,
          handleMessageInput: this.handleMessageInput
        }), (0, _v6.jsx)(_v107.Notification, {
          status: "negative",
          showing: _v1,
          onComplete: this.hideToast,
          content: _v108.T.ErrorMsg
        })]
      });
    }
    handleSubmit = _v0 => {
      let _v1 = {
        data: {
          user_emails: this.state.emails.join(","),
          message: this.state.messageInputValue,
          "g-recaptcha-response": _v0
        },
        onSuccess: () => {
          this.props.trackSubmit && this.props.trackSubmit(this.state.messageInputValue), this.closeShareModal(!0);
        },
        onError: () => {
          this.setState({
            hasError: !0
          });
        }
      };
      this.props.api.execute(_v1);
    };
    handleMessageInput = _v0 => {
      _v0.persist(), this.handleMsgInputThrottled(_v0.target.value);
    };
    handleMessageInputValue = _v0 => {
      _v0.length > _v108.MESSAGE_CHAR_LIMIT && this.setState({
        exceededCount: _v0.length - _v108.MESSAGE_CHAR_LIMIT
      }), this.setState({
        messageInputValue: _v0,
        hasExceededCount: _v0.length > _v108.MESSAGE_CHAR_LIMIT
      });
    };
    hideToast = () => {
      this.setState({
        hasError: !1
      });
    };
    handleCaptcha = _v0 => {
      this.setState({
        captchaResToken: _v0,
        captchaPassed: !0
      }, this.handleSendBtnState);
    };
    handleCaptchaExpire = () => {
      this.setState({
        captchaPassed: !1
      }, this.handleSendBtnState);
    };
    closeShareModal = _v0 => {
      let {
        grecaptcha: _v1
      } = window;
      (_v1 && _v1.reset(), this.setState({
        showModal: !1,
        captchaPassed: !1,
        emails: [],
        captchaResToken: "",
        messageInputValue: "",
        hasExceededCount: !1,
        enableSubmit: !1
      }), _v0 && this.props.onSuccess) ? this.props.onSuccess() : this.props.onDismiss && this.props.onDismiss(_v0);
    };
    openShareModal = () => {
      this.setState({
        showModal: !0
      });
    };
    handleSendBtnState = () => {
      this.setState({
        enableSubmit: this.state.captchaPassed && this.state.emails.length > 0
      });
    };
    updateEmailArray = _v0 => {
      this.setState(_v0 => ({
        ..._v0,
        emails: [..._v0.emails, _v0]
      }), this.handleSendBtnState);
    };
    removeEmail = _v0 => {
      this.setState(_v0 => ({
        ..._v0,
        emails: _v0.emails.filter((_v0, _v1) => _v1 !== _v0)
      }), this.handleSendBtnState);
    };
  }
  let _v139 = _v0 => (0, _v6.jsx)(_v102.Post, {
    children: ({
      post: _v0,
      loading: _v1
    }) => (0, _v6.jsx)(_v138, {
      ..._v0,
      loading: _v1,
      api: {
        execute: _v0 => {
          let _v1 = {
              token: _v0.token,
              action: "send_message"
            },
            _v2 = {
              ..._v0.data,
              ..._v1
            };
          return _v0({
            credentials: "include",
            uri: `/showcase/${_v0.albumId}/send_message`,
            body: JSON.stringify(_v2),
            onSuccess: _v0.onSuccess,
            onError: _v0.onError
          });
        }
      },
      children: _v0.children
    })
  });
  var _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0);
  let _v144 = (0, _v15.default)(_v140.Card).withConfig({
    displayName: "ShareUpsellCard__UpgradeCard",
    componentId: "sc-b92733b7-0"
  })`
  padding: ${(0, _v14.rem)("20px")};
  margin-bottom: ${(0, _v14.rem)("40px")};
  /* Iris issue with the card's box-shadow, forcing for now: */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0.625rem 0px;
  &:after {
    display: none;
  }
`;
  function _v145({
    albumUrl: _v0
  }) {
    return (0, _v6.jsxs)(_v144, {
      children: [(0, _v6.jsx)(_v43.Header, {
        size: "4",
        children: (0, _v31.translate)({
          singular: "Custom album",
          dictionary: {
            es: {
              singular: "Álbum personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Album"
            },
            "fr-FR": {
              singular: "Album personnalisé"
            },
            "ja-JP": {
              singular: "カスタムアルバム"
            },
            "ko-KR": {
              singular: "커스텀 앨범"
            },
            "pt-BR": {
              singular: "Customizar álbum"
            },
            "zh-CN": {
              singular: "自定义专辑"
            }
          }
        })
      }), (0, _v6.jsx)(_v141.Paragraph, {
        size: "2",
        children: (0, _v31.translate)({
          singular: "You’re sharing the {LINK}default view{/LINK}. To share this album with your custom settings, upgrade to Pro.",
          replacements: {
            LINK: _v0 => (0, _v6.jsx)(_v142.Link, {
              href: _v0,
              target: "_blank",
              children: _v0
            }, "upsell-link")
          },
          dictionary: {
            es: {
              singular: "Estás compartiendo la {LINK}vista predeterminada{/LINK}. Para compartir este álbum con tu configuración personalizada, cámbiate a Pro."
            },
            "de-DE": {
              singular: "Du teilst die {LINK}Defaultansicht{/LINK}. Aktualisiere auf Pro, um dieses Album mit deinen personalisierten Einstellungen zu teilen."
            },
            "fr-FR": {
              singular: "Vous partagez l'{LINK}affichage par défaut{/LINK}. Afin de partager cet album avec vos paramètres personnalisés, passez à Pro."
            },
            "ja-JP": {
              singular: "現在{LINK}デフォルト表示{/LINK}を共有しています。このアルバムをカスタム設定で共有するには、Proにアップグレードしてください。"
            },
            "ko-KR": {
              singular: "현재 {LINK}기본 뷰{/LINK}로 공유하고 있습니다. 커스텀한 설정으로 앨범을 공유하려면 Pro로 업그레이드하세요."
            },
            "pt-BR": {
              singular: "Você está compartilhando a {LINK}visualização padrão{/LINK}. Para compartilhar este álbum com suas configurações personalizadas, faça o upgrade para o Pro."
            },
            "zh-CN": {
              singular: "您正在分享{LINK}默认视图{/LINK}。要使用您的自定义设置分享此专辑，请升级到 Pro。"
            }
          }
        })
      }), (0, _v6.jsx)("a", {
        href: (0, _v143.buildUpgradePlanUrl)({
          paywallTrigger: "showcase_share_upsell_upgrade_button",
          paywallLocation: "share_album_modal",
          paywallFeature: "custom_album"
        }, {
          paywall: "1"
        }),
        target: "_blank",
        rel: "noreferrer",
        children: (0, _v6.jsx)(_v40.Button, {
          size: "sm",
          element: "span",
          onClick: () => _v13.FatalAttraction.trackClick({
            container: "share_album_modal",
            component: "upgrade_link",
            keyword: "custom_album"
          }),
          children: (0, _v31.translate)({
            singular: "Upgrade",
            dictionary: {
              es: {
                singular: "Actualizar"
              },
              "de-DE": {
                singular: "Upgraden"
              },
              "fr-FR": {
                singular: "Mettre à niveau"
              },
              "ja-JP": {
                singular: "アップグレード"
              },
              "ko-KR": {
                singular: "업그레이드"
              },
              "zh-CN": {
                singular: "升级"
              }
            }
          })
        })
      })]
    });
  }
  _v0.i(0);
  var _v146 = ((_v1 = {}).SAFE = "safe", _v1.UNRATED = "unrated", _v1.MATURE = "explicit", _v1);
  let _v147 = "weekly",
    _v148 = (_v0, _v1) => {
      if (!_v0) return 0;
      try {
        let _v0 = {
          album: "/albums/",
          [_v82]: "/users/",
          [_v83]: "/videos/",
          [_v84]: "/live_events/"
        }[_v1];
        if (!_v0 || !_v0.includes(_v0)) return 0;
        return parseInt(_v0.split(_v0)[1], 10);
      } catch (_v0) {
        return 0;
      }
    },
    _v149 = _v0 => {
      let _v1 = _v0.uri.split("videos/")[1];
      return "unlisted" === _v0.privacy.view ? Number(_v1.split(":")[0]) : Number(_v1);
    },
    _v150 = (_v0 = "00adef") => null !== _v0 ? `#${_v0}` : _v85,
    _v151 = _v0 => {
      let _v1 = _v0.baseLink;
      if (_v1) return _v1;
      if (!_v0.sizes) return "";
      let _v2 = _v0.sizes[0],
        {
          height: _v3,
          width: _v4
        } = _v2;
      return _v2.link.split(`_${_v4}x${_v3}`)[0];
    },
    _v152 = () => /iphone|ipod|ipad|android|webos|blackberry|windows phone|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),
    _v153 = _v0 => {
      for (let _v0 in _v95) if (_v0[_v0] && _v0[_v0] !== _v95[_v0]) return !0;
      return !1;
    },
    _v154 = () => {
      let {
        preview: _v0
      } = _v156(window.location.search);
      return "true" === _v0;
    },
    _v155 = (_v0, _v1) => {
      let _v2,
        _v3,
        _v4,
        _v5 = _v1;
      if (0 === _v0) return "00:00";
      _v5 || (_v5 = _v0 >= 0 ? "hh:mm:ss" : "mm:ss");
      let _v6 = [],
        _v7 = _v5 ? _v5.split(":") : [],
        _v8 = 0;
      for (; _v8 < _v7.length;) {
        switch (_v7[_v8]) {
          case "h":
            _v2 = Math.floor(_v0 / 60 / 60), _v6.push(_v2);
            break;
          case "hh":
            (_v2 = Math.floor(_v0 / 60 / 60)) < 10 && (_v2 = "0" + _v2), _v6.push(_v2);
            break;
          case "m":
            _v3 = _v2 ? Math.floor(_v0 / 60 % 60) : Math.floor(_v0 / 60), _v6.push(_v3);
            break;
          case "mm":
            (_v3 = _v2 ? Math.floor(_v0 / 60 % 60) : Math.floor(_v0 / 60)) < 10 && (_v3 = "0" + _v3), _v6.push(_v3);
            break;
          case "ss":
            (_v4 = Math.floor(_v0 % 60)) < 10 && (_v4 = "0" + _v4), _v6.push(_v4);
            break;
          default:
            _v6.push("");
        }
        _v8 += 1;
      }
      return _v6.join(":");
    },
    _v156 = _v0 => _v0.substr(1).split("&").map(_v0 => _v0.split("=")).reduce((_v0, [_v1, _v2]) => ({
      ..._v0,
      [_v1]: _v2
    }), {}),
    _v157 = _v0 => _v0 === _v88 ? 24 : 12,
    _v158 = _v0 => {
      let _v1 = Array.isArray(_v0) ? _v0.filter(_v0 => !!_v0.uri) : [_v0];
      if (_v1.length > 1) return;
      let _v2 = _v1.flatMap(_v0 => _v0.sizes);
      return _v2[_v2.length - 1]?.link;
    },
    _v159 = _v0 => {
      let {
        rrule: _v1
      } = _v0;
      return _v1 ? _v1.split("FREQ=")[1].split(";")[0].toLowerCase() : "";
    },
    _v160 = _v0 => _v0 ? "https://vimeo.com" : "",
    _v161 = function ({
      album: _v0,
      recaptchaSiteKey: _v1,
      token: _v2,
      children: _v3,
      teamRole: _v4
    }) {
      let [_v5, _v6] = (0, _v9.useState)(!1),
        {
          albumId: _v7,
          isOwnerOrAdmin: _v8
        } = (0, _v9.useContext)(_v100),
        {
          capabilities: _v9
        } = (0, _v103.useCapability)(["canCustomizeAlbums"]);
      if (!_v9) return null;
      let {
          canCustomizeAlbums: _v10
        } = _v9,
        _v11 = _v0 => {
          70 === _v0.keyCode && _v5 && _v0.currentTarget instanceof HTMLInputElement && _v0.preventDefault();
        };
      (0, _v9.useEffect)(() => () => {
        window.removeEventListener("keydown", _v11);
      }, []);
      let _v12 = _v8 && !_v10 && _v154() && _v153({
          ..._v0,
          logoUrl: _v0.customLogo ? _v151(_v0.customLogo) : ""
        }),
        _v13 = window.location.hostname === _v0.domain || !_v8 && "password" === _v0.privacy.view;
      return (0, _v6.jsxs)(_v6.Fragment, {
        children: [_v3({
          openShare: () => {
            _v6(!0), window.addEventListener("keydown", _v11);
          }
        }), _v5 && (0, _v6.jsx)(_v139, {
          showModal: _v5,
          onDismiss: _v0 => {
            _v4 && !_v0 && _v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "share_modal",
              keyword: "close_share_" + _v4.toLowerCase()
            }), _v6(!1), window.removeEventListener("keydown", _v11);
          },
          hideShareByEmail: _v13,
          card: _v12 ? (0, _v6.jsx)(_v145, {
            albumUrl: _v0.shareLink
          }) : null,
          albumId: _v7,
          link: _v0.shareLink,
          token: _v2,
          reCaptchaSiteKey: _v1,
          trackCopy: () => {
            _v13.FatalAttraction.trackClick({
              container: "share_album_modal",
              component: "copy_link",
              keyword: "copy"
            }), _v4 && _v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "share_modal",
              keyword: "copy_link_" + _v4.toLowerCase()
            });
          },
          trackSubmit: _v0 => {
            _v13.FatalAttraction.trackClick({
              container: "share_album_modal",
              component: "send"
            }), _v4 && (_v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "share_modal",
              keyword: "send_email_" + _v4.toLowerCase()
            }), _v0.length > 0 && _v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "share_modal",
              keyword: "send_message_" + _v4.toLowerCase()
            }));
          },
          trackAddEmail: () => {
            _v4 && _v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "share_modal",
              keyword: "add_email"
            });
          }
        })]
      });
    };
  class _v162 extends Error {}
  var _v163 = _v0.i(0),
    _v164 = _v9,
    _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  class _v167 extends _v164.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        open: this.props.open || !1
      };
    }
    render() {
      let {
        modalHeader: _v0
      } = this.props;
      return void 0 !== this.props.open && this.props.open !== this.state.open && this.setState({
        open: this.props.open
      }), (0, _v6.jsx)(_v168, {
        onClose: this._handleCloseClick,
        active: this.state.open,
        content: (0, _v6.jsxs)(_v169, {
          children: [(0, _v6.jsx)(_v170, {
            onClick: this._handleCloseClick
          }), (0, _v6.jsx)(_v165.Modal.Header, {
            children: _v0
          }), this.props.children]
        })
      });
    }
    _handleCloseClick = () => {
      void 0 !== this.props.open ? "function" == typeof this.props.onClose && this.props.onClose() : this.setState({
        open: !1
      });
    };
  }
  let _v168 = (0, _v15.default)(_v165.Modal).withConfig({
      displayName: "ContentModal__StyledModal",
      componentId: "sc-4d7e39c2-0"
    })`
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  overflow: auto;
  transition: all 0.5s;

  max-width: ${(0, _v14.rem)(340)};
  width: ${(0, _v14.rem)(349)};

  @media (min-width: 480px) {
    max-width: ${(0, _v14.rem)(440)};
    width: ${(0, _v14.rem)(440)};
  }

  @media (min-width: 780px) {
    max-width: ${(0, _v14.rem)(660)};
    width: ${(0, _v14.rem)(660)};
  }
`,
    _v169 = _v15.default.div.withConfig({
      displayName: "ContentModal__ModalStyled",
      componentId: "sc-4d7e39c2-1"
    })`
  position: relative;
  padding: ${(0, _v14.rem)(32)};
  border-radius: ${(0, _v14.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v170 = (0, _v15.default)(_v166.DismissX).withConfig({
      displayName: "ContentModal__DismissIcon",
      componentId: "sc-4d7e39c2-2"
    })`
  position: absolute;
  top: ${(0, _v14.rem)(18)};
  right: ${(0, _v14.rem)(18)};
  width: ${(0, _v14.rem)(20)};
  height: ${(0, _v14.rem)(20)};
  z-index: 1;
  cursor: pointer;

  fill {
    color: ${({
      theme: _v0
    }) => _v0.content.color};
  }

  &:hover {
    width: ${(0, _v14.rem)(22)};
    height: ${(0, _v14.rem)(22)};
    top: ${(0, _v14.rem)(17)};
    right: ${(0, _v14.rem)(17)};
  }
`;
  var _v171 = _v9,
    _v172 = (0, _v9.forwardRef)(function (_v0, _v1) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        viewBox: "0 0 18.86 20",
        ref: _v1
      }, _v0), _v9.default.createElement("path", {
        d: "M10.43 20h-2a2 2 0 0 1-2-2v-1.67a7 7 0 0 1-1-.57l-1.46.84a2 2 0 0 1-2.72-.73l-1-1.74a2 2 0 0 1 .73-2.73l1.45-.84V9.44L.97 8.6a2 2 0 0 1-.73-2.73l1-1.74a2 2 0 0 1 2.75-.73l1.44.84a7 7 0 0 1 1-.57V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.67a7.11 7.11 0 0 1 1 .56l1.46-.84a2 2 0 0 1 2.72.74l1 1.74a2 2 0 0 1-.72 2.73l-1.46.84v1.12l1.46.84a2 2 0 0 1 .72 2.73l-1 1.74a2 2 0 0 1-2.72.73l-1.46-.84a7 7 0 0 1-1 .57V18a2 2 0 0 1-2 2zm-4.88-6.6l1 .72a5 5 0 0 0 .7.4l1.14.54V18h2v-2.94l1.14-.54a5.14 5.14 0 0 0 .7-.4l1-.72 2.56 1.47 1-1.74-2.54-1.47.1-1.26v-.82l-.1-1.26 2.55-1.47-1-1.73-2.49 1.48-1-.72a5.06 5.06 0 0 0-.7-.4l-1.18-.54V2h-2v2.94l-1.14.54a5 5 0 0 0-.7.4l-1 .72-2.6-1.47-1 1.74 2.55 1.47-.11 1.25v.82l.1 1.26-2.54 1.47 1 1.73z",
        fill: "#1a2e3b"
      }), _v9.default.createElement("path", {
        d: "M9.43 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z",
        fill: "#1a2e3b"
      }));
    }),
    _v173 = _v0.i(0);
  let _v174 = _v15.default.div.withConfig({
      displayName: "Styles__FileTitle",
      componentId: "sc-db9ec41a-0"
    })`
  font-weight: 700;
  color: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v74.bokehTheme.colors.gray["100"] : _v74.bokehTheme.colors.gray["800"]};
  font-size: ${(0, _v14.rem)(14)};
  display: inline-block;
  width: 30%;
`,
    _v175 = _v15.default.div.withConfig({
      displayName: "Styles__DownloadButtonColumn",
      componentId: "sc-db9ec41a-1"
    })`
  display: inline-block;
  width: 70%;
  text-align: right;
  padding: ${(0, _v14.rem)(10)} 0;
`,
    _v176 = _v15.default.span.withConfig({
      displayName: "Styles__FileDetails",
      componentId: "sc-db9ec41a-2"
    })`
  color: #8a9599;
  font-size: ${(0, _v14.rem)(14)};
  margin-right: ${(0, _v14.rem)(10)};
`,
    _v177 = _v15.default.div.withConfig({
      displayName: "Styles__FileConfigRow",
      componentId: "sc-db9ec41a-3"
    })`
  border-bottom: ${(0, _v14.rem)(1)} solid #e3e8e9;
  height: ${(0, _v14.rem)(60)};
  &:last-child {
    border: 0;
  }
`,
    _v178 = _v15.default.div.withConfig({
      displayName: "Styles__DownloadPanelStyled",
      componentId: "sc-db9ec41a-4"
    })`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  @media (min-height: 480px) {
    overflow: hidden;
  }
`,
    _v179 = _v15.css`
  padding: ${(0, _v14.rem)(20)};
  background-color: #f2f4f5;
  border-radius: ${(0, _v14.rem)(5)};
  display: block;
  position: relative;
  font-size: ${(0, _v14.rem)(14)};
  line-height: 1.3;
  color: #1a2e3b;
  text-align: left;
`,
    _v180 = _v15.default.div.withConfig({
      displayName: "Styles__PanelNotification",
      componentId: "sc-db9ec41a-5"
    })`
  ${_v179};
`;
  _v15.default.a.withConfig({
    displayName: "Styles__PanelNotificationLink",
    componentId: "sc-db9ec41a-6"
  })`
  ${_v179};
`;
  let _v181 = _v15.default.div.withConfig({
      displayName: "Styles__MenuContainer",
      componentId: "sc-db9ec41a-7"
    })`
  display: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-width: ${(0, _v14.rem)(7)} ${(0, _v14.rem)(9)} ${(0, _v14.rem)(7)} 0;
    border-style: solid;
    border-color: transparent #ffffff transparent transparent;
    bottom: ${(0, _v14.rem)(33)};
    left: 50%;
    transform: translateX(-50%) rotate(270deg);
  }
  &::before {
    border-top: ${(0, _v14.rem)(7)} solid transparent;
    border-right: ${(0, _v14.rem)(9)} solid #d0d8db;
    border-bottom: ${(0, _v14.rem)(7)} solid transparent;
  }
  &::after {
    bottom: ${(0, _v14.rem)(34)};
  }
`,
    _v182 = _v15.default.ul.withConfig({
      displayName: "Styles__MenuPanel",
      componentId: "sc-db9ec41a-8"
    })`
  position: absolute;
  left: 50%;
  transform: translate(-50%, ${(0, _v14.rem)(10)});
  padding: ${(0, _v14.rem)(5)} 0;
  font-size: ${(0, _v14.rem)(13)};
  font-weight: 400;
  border-radius: ${(0, _v14.rem)(3)};
  box-shadow: ${(0, _v14.rem)(3)} 0 ${(0, _v14.rem)(5)} 0 rgba(0, 0, 0, 0.1);
  border: ${(0, _v14.rem)(1)} solid #d0d8db;
  background-color: #ffffff;
  bottom: ${(0, _v14.rem)(54)};
  max-height: calc(100% - ${(0, _v14.rem)(40)});
  overflow-y: auto;
  &:hover {
    display: block;
  }
`,
    _v183 = _v15.default.li.withConfig({
      displayName: "Styles__MenuOption",
      componentId: "sc-db9ec41a-9"
    })`
  width: 100%;
  min-width: ${(0, _v14.rem)(121)};
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
  font-size: ${(0, _v14.rem)(13)};
  font-weight: 400;
  padding: 0 ${(0, _v14.rem)(5)};
`,
    _v184 = _v15.default.div.withConfig({
      displayName: "Styles__MenuWrapper",
      componentId: "sc-db9ec41a-10"
    })`
  position: static;
  display: inline-block;

  &::before {
    content: '';
    width: 100%;
    display: block;
    height: ${(0, _v14.rem)(19)};
    bottom: 100%;
  }

  &:hover {
    .menu-container {
      display: block;
    }
  }
`,
    _v185 = (0, _v15.default)(_v173.CircleInfo).withConfig({
      displayName: "Styles__ColdStorageInfoIcon",
      componentId: "sc-db9ec41a-11"
    })`
  width: ${(0, _v14.rem)(17)};
  vertical-align: bottom;
`,
    _v186 = _v15.default.button.withConfig({
      displayName: "Styles__FetchBtnWidth",
      componentId: "sc-db9ec41a-12"
    })`
  width: ${(0, _v14.rem)(90)};
  display: inline-flex;
  font-weight: 700;
  cursor: pointer;
  border: ${(0, _v14.rem)(1)} solid;
  border-radius: ${(0, _v14.rem)(3)};
  transition: all 0.1s ease-in-out;
  justify-content: center;
`,
    _v187 = ({
      clipId: _v0
    }) => (0, _v6.jsxs)(_v180, {
      children: [(0, _v6.jsx)("span", {
        className: "iris_notification-text",
        children: (0, _v31.translate)({
          singular: "Don’t worry! Only you (the creator) can download this video.",
          dictionary: {
            es: {
              singular: "¡No te preocupes! Solo tú (el creador) puedes descargar este video."
            },
            "de-DE": {
              singular: "Keine Bange! Nur du (der Ersteller) kannst dieses Video herunterladen."
            },
            "fr-FR": {
              singular: "Pas de panique ! Seul le créateur, c'est-à-dire vous, peut télécharger cette vidéo."
            },
            "ja-JP": {
              singular: "ご心配なく！この動画をダウンロードできるのはクリエイターであるあなただけです。"
            },
            "ko-KR": {
              singular: "걱정할 필요 없습니다! 창작가 본인만 이 동영상을 다운로드할 수 있습니다."
            },
            "pt-BR": {
              singular: "Não se preocupe! Somente você (o/a criador/a) pode baixar este vídeo."
            },
            "zh-CN": {
              singular: "别担心！只有您（创作者）可以下载此视频。"
            }
          }
        })
      }), (0, _v6.jsxs)("a", {
        href: `/manage/videos/${_v0}/privacy`,
        children: [(0, _v6.jsx)(_v172, {
          className: "iris_notification-icon iris_ic is--16"
        }), (0, _v6.jsx)("span", {
          className: "iris_notification-icon-link",
          children: (0, _v31.translate)({
            singular: "Settings",
            dictionary: {
              es: {
                singular: "Configuración"
              },
              "de-DE": {
                singular: "Einstellungen"
              },
              "fr-FR": {
                singular: "Paramètres"
              },
              "ja-JP": {
                singular: "設定"
              },
              "ko-KR": {
                singular: "설정"
              },
              "pt-BR": {
                singular: "Configurações"
              },
              "zh-CN": {
                singular: "设置"
              }
            }
          })
        })]
      })]
    });
  var _v188 = _v0.i(0);
  let _v189 = ({
    file: _v0,
    isReview: _v1 = !1,
    fetchFile: _v2
  }) => {
    if (_v0?.isCold) return (0, _v6.jsx)(_v186, {
      type: "button",
      className: "iris_btn-outline--downplay iris_btn--sm",
      onClick: _v2,
      children: (0, _v31.translate)({
        singular: "Fetch",
        dictionary: {
          es: {
            singular: "Buscar"
          },
          "de-DE": {
            singular: "Hols dir hier"
          },
          "fr-FR": {
            singular: "Télécharger"
          },
          "ja-JP": {
            singular: "ファイルを取得"
          },
          "ko-KR": {
            singular: "불러오기"
          },
          "pt-BR": {
            singular: "Buscar"
          },
          "zh-CN": {
            singular: "获取"
          }
        }
      })
    });
    let _v3 = (0, _v188.camelize)(_v0.publicName),
      _v4 = `container:${_v1 ? "video_review" : "clip"}|component:modal|keyword:download_${_v3}`;
    return (0, _v6.jsx)("a", {
      "data-fatal-attraction": _v4,
      href: _v0.link,
      children: (0, _v6.jsx)(_v40.Button, {
        format: "secondary",
        size: "sm",
        element: "span",
        children: (0, _v31.translate)({
          singular: "Download",
          dictionary: {
            es: {
              singular: "Descargar"
            },
            "de-DE": {
              singular: "Herunterladen"
            },
            "fr-FR": {
              singular: "Télécharger "
            },
            "ja-JP": {
              singular: "ダウンロード"
            },
            "ko-KR": {
              singular: "다운로드"
            },
            "pt-BR": {
              singular: "Baixar"
            },
            "zh-CN": {
              singular: "下载"
            }
          }
        })
      })
    });
  };
  var _v190 = _v0.i(0);
  let _v191 = {
      borderBottom: "1px solid #ebeef1"
    },
    _v192 = {
      margin: "10px 0"
    },
    _v193 = ({
      file: _v0,
      isDefrosting: _v1 = !1,
      fetchConfirmation: _v2,
      coldStorageClose: _v3
    }) => (0, _v6.jsx)("tr", {
      children: (0, _v6.jsx)("td", {
        style: _v191,
        colSpan: 3,
        children: _v1 ? (0, _v6.jsxs)("div", {
          style: _v192,
          className: "iris_notification iris_notification--success",
          children: [(0, _v6.jsx)("div", {
            className: "iris_notification--success-icon",
            children: (0, _v6.jsx)(_v190.CircleWarning, {
              className: "iris_ic is--16"
            })
          }), (0, _v6.jsx)("div", {
            className: "iris_notification-content-wrapper",
            children: (0, _v31.translate)({
              singular: "We’re on it! Please check back later, as it could take a few hours.",
              dictionary: {
                es: {
                  singular: "¡Estamos trabajando en ello! Vuelve a intentarlo más tarde; podríamos demorarnos un par de horas."
                },
                "de-DE": {
                  singular: "Wir kümmern uns sofort darum! Bitte versuchen Sie es später noch einmal, denn das könnte ein paar Stunden dauern."
                },
                "fr-FR": {
                  singular: "On est sur le coup ! Veuillez revenir plus tard, car cela peut prendre plusieurs heures. "
                },
                "ja-JP": {
                  singular: "了解！数時間ほど時間をください。"
                },
                "ko-KR": {
                  singular: "파일을 불러오는 중입니다! 이 작업은 몇 시간 정도 걸릴 수 있으니 잠시 후 다시 확인해주시기 바랍니다."
                },
                "pt-BR": {
                  singular: "Estamos trabalhando nisso! Volte mais tarde, pois poderá levar algumas horas."
                },
                "zh-CN": {
                  singular: "我们正在处理！请稍后再查看，因为这可能需要几个小时。"
                }
              }
            })
          }), (0, _v6.jsx)("button", {
            className: "iris_notification-close iris_notification-close--success iris_notification-close--top",
            type: "button",
            onClick: _v3,
            children: (0, _v6.jsx)(_v166.DismissX, {
              className: "iris_ic is--12"
            })
          })]
        }) : (0, _v6.jsxs)("div", {
          style: _v192,
          className: "iris_notification iris_notification--warning",
          children: [(0, _v6.jsx)("div", {
            className: "iris_notification--warning-icon",
            children: (0, _v6.jsx)(_v190.CircleWarning, {
              className: "iris_ic is--16"
            })
          }), (0, _v6.jsxs)("div", {
            className: "iris_notification-content-wrapper",
            children: [(0, _v6.jsx)("h5", {
              className: "iris_notification-header",
              children: (0, _v31.translate)({
                singular: "Original file is in the archive",
                dictionary: {
                  es: {
                    singular: "El archivo original está archivado"
                  },
                  "de-DE": {
                    singular: "Die Originaldatei ist im Archiv"
                  },
                  "fr-FR": {
                    singular: "Le fichier original est stocké dans les archives"
                  },
                  "ja-JP": {
                    singular: "元のファイルはアーカイブされています。"
                  },
                  "ko-KR": {
                    singular: "원본 파일은 아카이브에 있습니다"
                  },
                  "pt-BR": {
                    singular: "O arquivo original está em nosso arquivo"
                  },
                  "zh-CN": {
                    singular: "原始文件已存档"
                  }
                }
              })
            }), (0, _v6.jsx)("p", {
              className: "iris_notification-text",
              children: (0, _v31.translate)({
                singular: "Source files not accessed for 30 days are automatically stored in our secret underground storage archive. As such, it may take a few hours to retrieve the file. Still want the original source file?",
                dictionary: {
                  es: {
                    singular: "Los archivos originales a los que no se accede por 30 días se guardan automáticamente en nuestro almacenamiento de archivos subterráneo. Por eso, podemos tardar algunas horas en recuperar el archivo. ¿Todavía quieres el archivo original?"
                  },
                  "de-DE": {
                    singular: "Wenn Quelldateien 30 Tage lang nicht aufgerufen werden, speichern wir sie automatisch in unserem geheimen, unterirdischen Speicherarchiv. Daher kann es vielleicht ein paar Stunden dauern, bis wir die Datei wieder hervorgekramt haben. Willst du immer noch die ursprüngliche Quelldatei haben?"
                  },
                  "fr-FR": {
                    singular: "Les fichiers sources non consultés pendant 30 jours sont automatiquement stockés dans notre archive de stockage souterraine secrète. Par conséquent, la récupération de ce type de fichier peut prendre quelques heures. Vous voulez toujours le fichier source d'origine ?"
                  },
                  "ja-JP": {
                    singular: "30 日間アクセスのないソース ファイルは自動的に秘密の地下保管庫に保存されます。そのため、ファイルを取り込むのに数時間かかることがあります。まだオリジナル ソース ファイルが必要ですか？"
                  },
                  "ko-KR": {
                    singular: "30일 이상 액세스하지 않은 소스 파일은 자동으로 Vimeo의 비밀 아카이브 공간에 저장됩니다. 그렇기 때문에 파일을 불러오는데 몇 시간 정도 걸릴 수 있습니다. 그래도 원본 소스 파일을 원하시나요?"
                  },
                  "pt-BR": {
                    singular: "Arquivos-fonte não acessados por 30 dias são armazenados automaticamente em nosso depósito de arquivos subterrâneo secreto. Por isso, podem-se levar algumas horas para recuperar o arquivo. Ainda quer o arquivo-fonte original?"
                  },
                  "zh-CN": {
                    singular: "30 天内未访问的源文件将自动存储在我们的秘密地下存储档案中。因此，检索文件可能需要数小时。仍要检索此原始源文件？"
                  }
                }
              })
            }), (0, _v6.jsx)("a", {
              role: "button",
              className: "iris_notification-btn iris_btn iris_btn--yellow iris_btn--sm",
              href: _v0.link,
              onClick: _v2,
              children: (0, _v31.translate)({
                singular: "Yes, fetch original file",
                dictionary: {
                  es: {
                    singular: "Sí, buscar el archivo original"
                  },
                  "de-DE": {
                    singular: "Ja, bitte die Originaldatei herholen"
                  },
                  "fr-FR": {
                    singular: "Oui, récupérer le fichier original"
                  },
                  "ja-JP": {
                    singular: "元ファイルを取得"
                  },
                  "ko-KR": {
                    singular: "원본 파일 불러오기"
                  },
                  "pt-BR": {
                    singular: "Sim, busque o arquivo original"
                  },
                  "zh-CN": {
                    singular: "是的，获取原始文件"
                  }
                }
              })
            })]
          }), (0, _v6.jsx)("button", {
            className: "iris_notification-close iris_notification-close--warning iris_notification-close--top",
            type: "button",
            onClick: _v3,
            children: (0, _v6.jsx)(_v166.DismissX, {
              className: "iris_ic is--12"
            })
          })]
        })
      })
    }),
    _v194 = ({
      style: _v0 = {},
      message: _v1 = ""
    }) => (0, _v6.jsx)("span", {
      style: _v0,
      className: "iris_tooltip",
      children: _v1
    }),
    _v195 = ({
      file: _v0,
      isDefrosting: _v1 = !1,
      isReview: _v2 = !1,
      coldStorageNotificationToggled: _v3 = !1,
      tooltipShow: _v4 = !1,
      tooltipMessage: _v5 = "",
      tooltipStyle: _v6 = {},
      showTooltip: _v7,
      hideTooltip: _v8,
      fetchFile: _v9,
      fetchConfirmation: _v10,
      coldStorageClose: _v11
    }) => _v0.error ? (0, _v6.jsx)("tr", {
      className: "iris_table-item",
      children: (0, _v6.jsx)("td", {
        colSpan: 3,
        id: "storage-info",
        className: "iris_table-data iris_table-icon",
        children: (0, _v6.jsxs)("div", {
          className: "notification notification--warning",
          children: [(0, _v6.jsx)("div", {
            className: "notification--warning-icon",
            children: (0, _v6.jsx)(_v190.CircleWarning, {
              className: "iris_ic is--16"
            })
          }), (0, _v6.jsx)("p", {
            className: "iris_notification-content",
            children: _v0.error.message
          })]
        })
      })
    }, "download_original") : _v3 ? (0, _v6.jsx)(_v193, {
      file: _v0,
      isDefrosting: _v1,
      fetchConfirmation: _v10,
      coldStorageClose: _v11
    }, "download_original") : (0, _v6.jsxs)(_v177, {
      children: [(0, _v6.jsxs)(_v174, {
        children: [_v0.publicName, _v0.isCold && (0, _v6.jsx)("span", {
          title: _v5,
          onMouseOver: _v7,
          onMouseOut: _v8,
          children: (0, _v6.jsx)(_v185, {})
        }), (0, _v6.jsx)("div", {
          children: _v4 && (0, _v6.jsx)(_v194, {
            style: _v6,
            message: _v5
          })
        })]
      }), (0, _v6.jsxs)(_v175, {
        children: [(0, _v6.jsxs)(_v176, {
          children: [_v0.width, " × ", _v0.height, " / ", _v0.size]
        }), (0, _v6.jsx)(_v189, {
          file: _v0,
          isReview: _v2,
          fetchFile: _v9
        })]
      })]
    }),
    _v196 = ({
      textTracks: _v0
    }) => (0, _v6.jsxs)("section", {
      className: "secondary-action",
      children: [(0, _v6.jsx)("span", {
        className: "secondary-action-text",
        children: (0, _v31.translate)({
          singular: "Download captions and subtitles",
          dictionary: {
            es: {
              singular: "Descargar las leyendas y los subtítulos"
            },
            "de-DE": {
              singular: "Untertitel und erweiterte Untertitel herunterladen"
            },
            "fr-FR": {
              singular: "Télécharger des légendes et des sous-titres"
            },
            "ja-JP": {
              singular: "キャプションと字幕をダウンロード"
            },
            "ko-KR": {
              singular: "캡션 및 자막 다운로드"
            },
            "pt-BR": {
              singular: "Baixar closed captions (CC) e legendas"
            },
            "zh-CN": {
              singular: "下载字幕"
            }
          }
        })
      }), (0, _v6.jsxs)(_v184, {
        children: [(0, _v6.jsx)(_v40.Button, {
          format: "basic",
          variant: "hyperminimal",
          children: (0, _v31.translate)({
            singular: "Choose file",
            dictionary: {
              es: {
                singular: "Elegir un archivo"
              },
              "de-DE": {
                singular: "Datei auswählen"
              },
              "fr-FR": {
                singular: "Choisir un fichier"
              },
              "ja-JP": {
                singular: "ファイルを選択"
              },
              "ko-KR": {
                singular: "파일 선택"
              },
              "pt-BR": {
                singular: "Escolher arquivo"
              },
              "zh-CN": {
                singular: "选择文件"
              }
            }
          })
        }), (0, _v6.jsx)(_v181, {
          className: "menu-container",
          children: (0, _v6.jsx)(_v182, {
            children: _v0.map((_v0, _v1) => (0, _v6.jsx)(_v183, {
              children: (0, _v6.jsx)("a", {
                className: "iris_menu-link iris_link",
                href: _v0.downloadUrl?.replace("http://", "https://"),
                children: _v0.displayName
              })
            }, `text_track_${_v1}`))
          })
        })]
      })]
    }),
    _v197 = () => {
      let _v0 = (0, _v31.translate)({
        singular: "You need a 360 player to watch this download. {A}See our recommendations{/A}.",
        replacements: {
          A: _v0 => (0, _v6.jsx)("a", {
            href: "https://www.vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/115001878167#downloading",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Necesitas un reproductor de 360 para ver esta descarga. {A}Consulta nuestras recomendaciones{/A}."
          },
          "de-DE": {
            singular: "Du brauchst einen 360-Grad-Player, um dir diesen Download anzusehen. {A}Hier findest du unsere Empfehlungen{/A}."
          },
          "fr-FR": {
            singular: "Vous devez disposer d'un player à 360° pour visionner ce contenu. {A}Consulter nos recommandations{/A}."
          },
          "ja-JP": {
            singular: "このダウンロードファイルを視聴するには、360度プレーヤーが必要です。{A} Vimeo のオススメを見る{/A}。"
          },
          "ko-KR": {
            singular: "이 다운로드를 시청하려면 360 플레이어가 필요합니다. {A}Vimeo 추천 동영상 보기{/A}"
          },
          "pt-BR": {
            singular: "Você precisa de um player 360 para assistir ao vídeo baixado. {A}Veja as nossas recomendações{/A}."
          },
          "zh-CN": {
            singular: "需要使用 360 播放器才能观看此下载。请{A}查阅我们的建议{/A}。"
          }
        }
      });
      return (0, _v6.jsx)(_v42.Notice, {
        format: "primary",
        children: (0, _v6.jsx)("span", {
          className: "iris_notification-text",
          children: _v0
        })
      });
    },
    _v198 = () => (0, _v6.jsx)("div", {
      children: (0, _v6.jsxs)("div", {
        className: "iris_throbber",
        children: [(0, _v6.jsx)("div", {
          className: "iris_throbber-dot iris_throbber-dot--blue"
        }), (0, _v6.jsx)("div", {
          className: "iris_throbber-dot iris_throbber-dot--green"
        }), (0, _v6.jsx)("div", {
          className: "iris_throbber-dot iris_throbber-dot--red"
        })]
      })
    }),
    _v199 = {
      left: "30px"
    };
  class _v200 extends _v171.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        coldStorageVisible: !1,
        tooltipShow: !1
      }, this._handleIconMouseOver = this._handleIconMouseOver.bind(this), this._handleIconMouseOut = this._handleIconMouseOut.bind(this), this._handleFetchClick = this._handleFetchClick.bind(this), this._handleFetchConfirmation = this._handleFetchConfirmation.bind(this), this._handleColdStorageClose = this._handleColdStorageClose.bind(this);
    }
    _handleIconMouseOver() {
      this.setState({
        tooltipShow: !0
      });
    }
    _handleIconMouseOut() {
      this.setState({
        tooltipShow: !1
      });
    }
    _handleFetchClick(_v0) {
      _v0.preventDefault(), this.setState({
        coldStorageNotificationToggled: !0
      });
    }
    _handleFetchConfirmation(_v0) {
      _v0.preventDefault();
      let _v1 = _v0.target;
      if (_v1) {
        let _v0 = _v1.getAttribute("href") || "";
        this.props.fetchColdSourceFile(_v0);
      }
    }
    _handleColdStorageClose(_v0) {
      _v0.preventDefault(), this.setState({
        coldStorageNotificationToggled: !1
      });
    }
    render() {
      let {
          clipId: _v0,
          downloadConfig: _v1,
          sourceFile: _v2,
          isSpatial: _v3,
          isOwnerOrAdmin: _v4,
          allowDownloads: _v5,
          textTracks: _v6,
          isReview: _v7,
          isDefrosting: _v8
        } = this.props,
        {
          coldStorageNotificationToggled: _v9,
          tooltipShow: _v10
        } = this.state;
      if (!_v1 || 0 === _v1.length) return (0, _v6.jsx)("div", {
        id: "download_panel",
        children: (0, _v6.jsx)(_v198, {})
      });
      let _v11 = _v1.filter(_v0 => ["hd", "sd", "source", "uhd"].includes(_v0.quality)).sort((_v0, _v1) => "source" === _v0.quality ? 0 : _v0.height - _v1.height),
        _v12 = (0, _v31.translate)({
          singular: "This source file has been lovingly stored in our archive.",
          dictionary: {
            es: {
              singular: "Este archivo fuente se almacenó cuidadosamente en nuestro archivo."
            },
            "de-DE": {
              singular: "Diese Quelldatei wurde sorgfältig in unserem Archiv aufbewahrt."
            },
            "fr-FR": {
              singular: "Ce fichier source a été stocké avec amour dans notre archive."
            },
            "ja-JP": {
              singular: "このソースファイルは、アーカイブに保存されました。"
            },
            "ko-KR": {
              singular: "이 소스 파일은 Vimeo 아카이브에 소중하게 보관되었습니다."
            },
            "pt-BR": {
              singular: "Este arquivo de origem foi carinhosamente armazenado em nosso arquivo."
            },
            "zh-CN": {
              singular: "该源文件已被妥善保存在我们的档案中。"
            }
          }
        });
      return (0, _v6.jsxs)(_v178, {
        children: [_v4 && !_v5 ? (0, _v6.jsx)(_v187, {
          clipId: _v0
        }) : null, _v3 ? (0, _v6.jsx)(_v197, {}) : null, (0, _v6.jsxs)("div", {
          children: [_v11.map((_v0, _v1) => (0, _v6.jsxs)(_v177, {
            children: [(0, _v6.jsx)(_v174, {
              children: "source" === _v0.quality ? (0, _v31.translate)({
                singular: "Original",
                dictionary: {
                  "ja-JP": {
                    singular: "オリジナルサイズ"
                  },
                  "ko-KR": {
                    singular: "오리지널"
                  },
                  "zh-CN": {
                    singular: "原创"
                  }
                }
              }) : _v0.publicName
            }), (0, _v6.jsxs)(_v175, {
              children: [(0, _v6.jsxs)(_v176, {
                children: [_v0.width, " × ", _v0.height, " / ", _v0.sizeShort]
              }), (0, _v6.jsx)(_v189, {
                file: _v0,
                isReview: _v7,
                fetchFile: this._handleFetchClick
              })]
            })]
          }, `download_${_v1}`)), _v2 ? (0, _v6.jsx)(_v195, {
            file: _v2,
            isDefrosting: _v8,
            isReview: _v7,
            coldStorageNotificationToggled: _v9,
            tooltipShow: _v10,
            tooltipMessage: _v12,
            tooltipStyle: _v199,
            showTooltip: this._handleIconMouseOver,
            hideTooltip: this._handleIconMouseOut,
            fetchFile: this._handleFetchClick,
            fetchConfirmation: this._handleFetchConfirmation,
            coldStorageClose: this._handleColdStorageClose
          }) : null]
        }), _v6 && _v6.length ? (0, _v6.jsx)(_v196, {
          textTracks: _v6
        }) : null]
      });
    }
  }
  function _v201(_v0) {
    let {
        allowDownloads: _v1,
        clipId: _v2,
        downloadConfig: _v3,
        onClose: _v4,
        fetchColdSourceFile: _v5,
        modalOpen: _v6
      } = _v0,
      {
        capabilities: _v7
      } = (0, _v103.useCapability)(["hasPaid"]);
    if (!_v7) return null;
    let _v8 = (0, _v31.translate)({
      singular: "Download",
      dictionary: {
        es: {
          singular: "Descargar"
        },
        "de-DE": {
          singular: "Herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger "
        },
        "ja-JP": {
          singular: "ダウンロード"
        },
        "ko-KR": {
          singular: "다운로드"
        },
        "pt-BR": {
          singular: "Baixar"
        },
        "zh-CN": {
          singular: "下载"
        }
      }
    });
    return (0, _v6.jsx)(_v167, {
      modalHeader: _v8,
      open: _v6,
      onClose: _v4,
      children: (0, _v6.jsx)(_v200, {
        ..._v0,
        allowDownloads: _v1,
        clipId: _v2,
        downloadConfig: _v3,
        fetchColdSourceFile: _v5
      })
    });
  }
  let _v202 = ({
    albumId: _v0,
    clipId: _v1,
    curUser: _v2,
    hashedPass: _v3,
    ownerId: _v4,
    isOwnerOrAdmin: _v5,
    children: _v6
  }) => {
    let [_v7, _v8] = (0, _v9.useState)(!1),
      [_v9, _v10] = (0, _v9.useState)(!1),
      _v11 = (0, _v9.useContext)(_v33),
      _v12 = (_v0 => {
        let [_v1, _v2] = (0, _v9.useState)(null);
        return (0, _v9.useEffect)(() => {
          let _v0;
          if (!_v0 || null !== _v1) return;
          let _v1 = (_v0 = `album-signature-${_v0}`, document.querySelector(`meta[name=${_v0}]`)?.getAttribute("content"));
          _v1 ? _v2(_v1) : _v2("");
        }, [_v0, _v1]), _v1;
      })(_v0),
      [_v13, {
        data: _v14,
        error: _v15
      }] = (0, _v163.useLazyQuery)(`/albums/${_v0}/videos/${_v1}`, {
        variables: {
          fields: ["download", "privacy.download"],
          _hashed_pass: _v3 || "",
          is_embed: _v11?.isShowcaseEmbeded,
          referrer: _v11?.referrer,
          album_signature: _v12 || "",
          album_uri: `albums/${_v0}`
        }
      });
    return (0, _v9.useEffect)(function () {
      _v7 && 0 !== _v1 && _v13();
    }, [_v7, _v1]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [_v7 && _v14?.download && !_v15 && (0, _v6.jsx)(_v201, {
        allowDownloads: _v14.privacy.download,
        clipId: _v1,
        curUser: _v2,
        downloadConfig: _v14.download,
        ownerId: _v4,
        isOwnerOrAdmin: _v5,
        onClose: () => {
          _v8(!1);
        },
        fetchColdSourceFile: _v0 => {
          _v0 && fetch(_v0, {
            method: "get",
            credentials: "include",
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }).then(_v0 => _v0.json()).then(_v0 => {
            _v10(_v0.is_defrosting);
          });
        },
        modalOpen: _v7,
        isDefrosting: _v9
      }), _v6({
        openDownloadModal: () => {
          _v8(!0);
        }
      })]
    });
  };
  var _v203 = _v0.i(0),
    _v204 = _v9,
    _v205 = _v0.i(0),
    _v206 = _v0.i(0);
  let _v207 = _v15.default.div.withConfig({
      displayName: "ShowcaseShareButton__ShareWrapper",
      componentId: "sc-6f33511f-0"
    })`
  margin: 0 ${(0, _v14.rem)(10)};
`,
    _v208 = _v15.default.div.withConfig({
      displayName: "ShowcaseShareButton__DropdownWrapper",
      componentId: "sc-6f33511f-1"
    })`
  cursor: pointer;
  padding: ${(0, _v14.rem)(10)} 0;
`,
    _v209 = _v15.default.div.withConfig({
      displayName: "ShowcaseShareButton__DropdownItem",
      componentId: "sc-6f33511f-2"
    })`
  padding: ${(0, _v14.rem)(10)};
  label {
    cursor: pointer;
  }
  &:hover {
    background: ${_v74.bokehTheme.colors.gray["50"]};
  }
`,
    _v210 = (0, _v15.default)(_v141.Paragraph).withConfig({
      displayName: "ShowcaseShareButton__Paragraph",
      componentId: "sc-6f33511f-3"
    })`
  margin: 0;
`,
    _v211 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "ShowcaseShareButton__StyledButton",
      componentId: "sc-6f33511f-4"
    })`
  > span {
    display: flex;
  }
  svg {
    width: ${(0, _v14.rem)(24)};
    height: ${(0, _v14.rem)(24)};
  }
`,
    _v212 = (0, _v15.default)(_v205.PopOver).withConfig({
      displayName: "ShowcaseShareButton__StyledPopOver",
      componentId: "sc-6f33511f-5"
    })`
  text-decoration: none;
`;
  class _v213 extends _v204.Component {
    state = {
      menuOpen: !1,
      showNotification: !1
    };
    onCopy = _v0 => {
      let _v1 = (0, _v203.default)(_v0);
      this.setState({
        showNotification: _v1,
        menuOpen: !_v1
      });
    };
    render() {
      let {
          canCreateEmbeddedPlaylists: _v0,
          openShare: _v1,
          embed: _v2
        } = this.props,
        {
          menuOpen: _v3,
          showNotification: _v4
        } = this.state,
        _v5 = (0, _v6.jsxs)(_v208, {
          role: "dropdown",
          children: [(0, _v6.jsx)(_v209, {
            onClick: _v0 => {
              _v1(_v0), this.setState({
                menuOpen: !1
              });
            },
            children: (0, _v6.jsx)(_v210, {
              size: "2",
              children: (0, _v31.translate)({
                singular: "Share showcase",
                dictionary: {
                  es: {
                    singular: "Compartir presentación"
                  },
                  "de-DE": {
                    singular: "Präsentation teilen"
                  },
                  "fr-FR": {
                    singular: "Partager la présentation"
                  },
                  "ja-JP": {
                    singular: "ショーケースを共有"
                  },
                  "ko-KR": {
                    singular: "쇼케이스 공유"
                  },
                  "pt-BR": {
                    singular: "Compartilhe a vitrine"
                  },
                  "zh-CN": {
                    singular: "分享橱窗"
                  }
                }
              })
            })
          }), _v0 && _v2 && _v2.html && (0, _v6.jsx)(_v209, {
            onClick: () => {
              _v2 && _v2.html && this.onCopy(_v2.html);
            },
            children: (0, _v6.jsx)(_v210, {
              size: "2",
              children: (0, _v31.translate)({
                singular: "Copy embed code",
                dictionary: {
                  es: {
                    singular: "Copiar el código de inserción"
                  },
                  "de-DE": {
                    singular: "Einbettungscode kopieren"
                  },
                  "fr-FR": {
                    singular: "Copier le code d’intégration"
                  },
                  "ja-JP": {
                    singular: "埋め込みコードをコピー"
                  },
                  "ko-KR": {
                    singular: "임베드 코드 복사하기"
                  },
                  "pt-BR": {
                    singular: "Copiar código de incorporação"
                  },
                  "zh-CN": {
                    singular: "复制嵌入代码"
                  }
                }
              })
            })
          })]
        });
      return (0, _v6.jsxs)(_v207, {
        children: [(0, _v6.jsx)(_v212, {
          attach: "top",
          content: _v5,
          active: _v3,
          children: (0, _v6.jsx)(_v211, {
            format: "secondary",
            icon: (0, _v6.jsx)(_v206.ChevronDown, {}),
            iconPosition: "right",
            onClick: () => this.setState({
              menuOpen: !this.state.menuOpen
            }),
            children: (0, _v31.translate)({
              singular: "Share",
              dictionary: {
                es: {
                  singular: "Compartir"
                },
                "de-DE": {
                  singular: "Teilen"
                },
                "fr-FR": {
                  singular: "Partager"
                },
                "ja-JP": {
                  singular: "共有"
                },
                "ko-KR": {
                  singular: "공유"
                },
                "pt-BR": {
                  singular: "Compartilhar"
                },
                "zh-CN": {
                  singular: "分享"
                }
              }
            })
          })
        }), (0, _v6.jsx)(_v107.Notification, {
          status: "negative",
          showing: _v4,
          onComplete: () => this.setState({
            showNotification: !1
          }),
          content: (0, _v31.translate)({
            singular: "Copied!",
            dictionary: {
              es: {
                singular: "Copiado"
              },
              "de-DE": {
                singular: "Kopiert!"
              },
              "fr-FR": {
                singular: "Copié !"
              },
              "ja-JP": {
                singular: "コピー完了！"
              },
              "ko-KR": {
                singular: "복사 완료!"
              },
              "pt-BR": {
                singular: "Copiado!"
              },
              "zh-CN": {
                singular: "已复制！"
              }
            }
          })
        })]
      });
    }
  }
  let _v214 = {
      formats: {
        primary: _v74.bokehTheme.colors.blue["600"]
      }
    },
    _v215 = _v15.default.div.withConfig({
      displayName: "UpgradeBanner__BlueBanner",
      componentId: "sc-e99e0cb0-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${_v74.bokehTheme.colors.blue["500"]};
  padding: ${(0, _v14.rem)("8px")} 0;
`,
    _v216 = _v15.default.div.withConfig({
      displayName: "UpgradeBanner__UpgradeText",
      componentId: "sc-e99e0cb0-1"
    })`
  color: white;
  font-size: ${(0, _v14.rem)("14px")};
  margin-right: ${(0, _v14.rem)("16px")};
`;
  function _v217({
    text: _v0,
    linkText: _v1,
    url: _v2 = "/upgrade"
  }) {
    return (0, _v6.jsxs)(_v215, {
      children: [(0, _v6.jsx)(_v216, {
        children: _v0
      }), (0, _v6.jsx)("a", {
        target: "_blank",
        href: _v2,
        rel: "noreferrer",
        children: (0, _v6.jsx)(_v40.Button, {
          size: "sm",
          format: "primary",
          element: "span",
          theme: _v214,
          onClick: () => _v13.FatalAttraction.trackClick({
            container: "album_player",
            component: "upgrade_link",
            keyword: "preview_upsell_banner"
          }),
          children: _v1
        })
      })]
    });
  }
  let _v218 = _v15.default.div.withConfig({
      displayName: "CreatorActionBarStyled",
      componentId: "sc-eda95643-0"
    })`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: ${13};
  background: ${(0, _v14.rgba)(_v74.bokehTheme.colors.gray["800"], .9)};
`,
    _v219 = _v15.default.div.withConfig({
      displayName: "CreatorActionBarStyled__BottomSection",
      componentId: "sc-eda95643-1"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(0, _v14.rem)("60px")};
`,
    _v220 = _v15.default.div.withConfig({
      displayName: "CreatorActionBarStyled__NavSection",
      componentId: "sc-eda95643-2"
    })`
  display: flex;
  align-items: center;
  margin-left: ${(0, _v14.rem)("20px")};
`,
    _v221 = _v15.default.div.withConfig({
      displayName: "CreatorActionBarStyled__ActionsSection",
      componentId: "sc-eda95643-3"
    })`
  display: flex;
  align-items: center;
  margin-right: ${(0, _v14.rem)("16px")};
`,
    _v222 = () => void 0,
    _v223 = ({
      albumId: _v0,
      canCreateEmbeddedPlaylists: _v1 = !1,
      embed: _v2,
      isPreviewing: _v3 = !1,
      hasVideos: _v4 = !1,
      openShare: _v5 = _v222,
      isOffsite: _v6 = !1
    }) => (0, _v6.jsxs)(_v218, {
      children: [_v3 && (0, _v6.jsx)(_v217, {
        text: (0, _v31.translate)({
          singular: "This is a preview of your custom album. To save and share your settings, upgrade to Pro.",
          dictionary: {
            es: {
              singular: "Esta es la vista previa de tu álbum personalizado. Para guardar y compartir tu configuración, cámbiate a Pro."
            },
            "de-DE": {
              singular: "Dies ist eine Vorschau auf dein benutzerdefiniertes Album. Aktualisiere auf Pro, um deine Einstellungen zu speichern und zu teilen."
            },
            "fr-FR": {
              singular: "Ceci est un aperçu de votre album personnalisé. Afin de sauvegarder et partager vos paramètres, passez à Pro."
            },
            "ja-JP": {
              singular: "これはカスタムアルバムのプレビューです。設定を保存して共有するには、Pro にアップグレードしてください。"
            },
            "ko-KR": {
              singular: "이 화면은 커스텀 앨범의 미리 보기 페이지입니다. Pro로 업그레이드하여 설정을 저장하고 공유하세요."
            },
            "pt-BR": {
              singular: "Esta é uma pré-visualização do seu álbum personalizado. Para salvar e compartilhar suas configurações, faça o upgrade para o Pro."
            },
            "zh-CN": {
              singular: "这是您自定义专辑的预览。要保存和分享您的设置，请升级到 Pro。"
            }
          }
        }),
        linkText: (0, _v31.translate)({
          singular: "Upgrade",
          dictionary: {
            es: {
              singular: "Actualizar"
            },
            "de-DE": {
              singular: "Upgraden"
            },
            "fr-FR": {
              singular: "Mettre à niveau"
            },
            "ja-JP": {
              singular: "アップグレード"
            },
            "ko-KR": {
              singular: "업그레이드"
            },
            "zh-CN": {
              singular: "升级"
            }
          }
        })
      }), (0, _v6.jsxs)(_v219, {
        children: [(0, _v6.jsx)(_v220, {
          children: _v4 && !_v3 && (0, _v6.jsx)(_v141.Paragraph, {
            size: "2",
            theme: _v52.themes.dark,
            style: {
              margin: 0
            },
            children: (0, _v31.translate)({
              singular: "This is what your showcase looks like when you share it",
              dictionary: {
                es: {
                  singular: "Así es como se ve tu presentación cuando la compartes"
                },
                "de-DE": {
                  singular: "So sieht deine Präsentation aus, wenn du sie teilst"
                },
                "fr-FR": {
                  singular: "Voici à quoi ressemble votre présentation lorsque vous la partagez"
                },
                "ja-JP": {
                  singular: "ショーケースを共有するとこのように表示されます"
                },
                "ko-KR": {
                  singular: "쇼케이스를 공유할 때 이렇게 나타납니다."
                },
                "pt-BR": {
                  singular: "É assim que sua vitrine aparece quando você a compartilha"
                },
                "zh-CN": {
                  singular: "这是您分享橱窗时的样子"
                }
              }
            })
          })
        }), (0, _v6.jsxs)(_v221, {
          children: [(0, _v6.jsx)(_v224, {
            href: `${_v160(_v6)}/manage/showcases/${_v0}`,
            children: (0, _v6.jsx)(_v40.Button, {
              element: "span",
              format: "secondary",
              children: (0, _v31.translate)({
                singular: "Edit",
                dictionary: {
                  es: {
                    singular: "Editar"
                  },
                  "de-DE": {
                    singular: "Bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier"
                  },
                  "ja-JP": {
                    singular: "編集"
                  },
                  "ko-KR": {
                    singular: "편집"
                  },
                  "pt-BR": {
                    singular: "Editar"
                  },
                  "zh-CN": {
                    singular: "编辑"
                  }
                }
              })
            })
          }), (0, _v6.jsx)(_v213, {
            canCreateEmbeddedPlaylists: _v1,
            embed: _v2,
            openShare: _v5
          })]
        })]
      })]
    }),
    _v224 = _v15.default.a.withConfig({
      displayName: "CreatorActionBar__Link",
      componentId: "sc-af4b844d-0"
    })`
  text-decoration: none;
`;
  (0, _v31.translate)({
    singular: "Edit",
    dictionary: {
      es: {
        singular: "Editar"
      },
      "de-DE": {
        singular: "Bearbeiten"
      },
      "fr-FR": {
        singular: "Modifier"
      },
      "ja-JP": {
        singular: "編集"
      },
      "ko-KR": {
        singular: "편집"
      },
      "pt-BR": {
        singular: "Editar"
      },
      "zh-CN": {
        singular: "编辑"
      }
    }
  });
  let _v225 = (0, _v31.translate)({
      singular: "Load more",
      dictionary: {
        es: {
          singular: "Cargar más"
        },
        "de-DE": {
          singular: "Mehr laden"
        },
        "fr-FR": {
          singular: "Afficher plus"
        },
        "ja-JP": {
          singular: "もっとロードする"
        },
        "ko-KR": {
          singular: "동영상 더 보기"
        },
        "pt-BR": {
          singular: "Carregar mais"
        },
        "zh-CN": {
          singular: "加载更多"
        }
      }
    }),
    _v226 = (0, _v31.translate)({
      singular: "No videos",
      dictionary: {
        es: {
          singular: "No hay videos"
        },
        "de-DE": {
          singular: "Keine Videos"
        },
        "fr-FR": {
          singular: "Pas de vidéos"
        },
        "ja-JP": {
          singular: "動画がありません"
        },
        "ko-KR": {
          singular: "동영상이 없습니다"
        },
        "pt-BR": {
          singular: "Não há vídeos"
        },
        "zh-CN": {
          singular: "没有视频"
        }
      }
    }),
    _v227 = (0, _v31.translate)({
      singular: "Share",
      dictionary: {
        es: {
          singular: "Compartir"
        },
        "de-DE": {
          singular: "Teilen"
        },
        "fr-FR": {
          singular: "Partager"
        },
        "ja-JP": {
          singular: "共有"
        },
        "ko-KR": {
          singular: "공유"
        },
        "pt-BR": {
          singular: "Compartilhar"
        },
        "zh-CN": {
          singular: "分享"
        }
      }
    });
  (0, _v31.translate)({
    singular: "View description",
    dictionary: {
      es: {
        singular: "Ver descripción"
      },
      "de-DE": {
        singular: "Beschreibung einsehen"
      },
      "fr-FR": {
        singular: "Voir la description"
      },
      "ja-JP": {
        singular: "概要を見る"
      },
      "ko-KR": {
        singular: "설명 보기"
      },
      "pt-BR": {
        singular: "Ver descrição"
      },
      "zh-CN": {
        singular: "查看描述"
      }
    }
  }), (0, _v31.translate)({
    singular: "Next",
    dictionary: {
      es: {
        singular: "Siguiente"
      },
      "de-DE": {
        singular: "Weiter"
      },
      "fr-FR": {
        singular: "Suivant"
      },
      "ja-JP": {
        singular: "次へ"
      },
      "ko-KR": {
        singular: "다음"
      },
      "pt-BR": {
        singular: "Próxima"
      },
      "zh-CN": {
        singular: "下一步"
      }
    }
  });
  let _v228 = ({
      album: _v0,
      getMoreAlbumVideos: _v1,
      videoData: _v2,
      isLoadingMore: _v3
    }) => {
      let {
        layout: _v4,
        theme: _v5
      } = _v0;
      if (!_v2) return null;
      let {
        next: _v6
      } = _v2.paging;
      return _v6 ? (0, _v6.jsx)(_v231, {
        fluid: !0,
        layout: _v4,
        format: "dark" === _v5 ? "basic" : "secondary",
        variant: "dark" === _v5 ? "minimalTransparent" : "solid",
        style: {
          marginBottom: "90px"
        },
        onClick: _v1,
        children: _v3 ? (0, _v6.jsx)(_v16.Spinner, {
          color: "gray.500"
        }) : _v225
      }) : null;
    },
    _v229 = _v15.css`
  width: calc(100% - 6.5rem);
  margin-left: 3.25rem;
`,
    _v230 = _v15.css`
  max-width: ${"1024px"};
`,
    _v231 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "LoadMoreButton__LoadMoreButtonStyled",
      componentId: "sc-89525c22-0"
    })`
  ${_v0 => "player" === _v0.layout ? _v229 : _v230};
`;
  var _v232 = _v0.i(0),
    _v233 = _v0.i(0);
  let _v234 = (0, _v15.default)(_v165.Modal.Footer).withConfig({
      displayName: "OfComLoginModal__ModalFooter",
      componentId: "sc-8d54ec8b-0"
    })`
  border-top: 0;
`,
    _v235 = _v15.default.div.withConfig({
      displayName: "OfComLoginModal__ModalStyled",
      componentId: "sc-8d54ec8b-1"
    })`
  padding: ${(0, _v14.rem)(32)};
  border-radius: ${(0, _v14.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v236 = ({
      xsrft: _v0,
      albumId: _v1
    }) => {
      let [_v2, _v3] = (0, _v9.useState)(!0);
      return (0, _v9.useEffect)(() => {
        let _v0 = new _v232.Event("vimeo.content_rating_block", 2, {
          product: "Distribution",
          path: location.pathname,
          collection_id: _v1,
          collection_type: "showcase",
          video_id: null,
          content_rating: null
        });
        _v232.BigPictureClient.sendEvent(_v0);
      }, [_v1]), (0, _v6.jsx)(_v233.LoginJoinModal, {
        type: "login",
        xsrft: _v0,
        onDismiss: () => _v3(!0),
        onSuccess: () => window.location.reload(),
        children: _v0 => (0, _v6.jsx)(_v165.Modal, {
          active: _v2,
          content: (0, _v6.jsxs)(_v235, {
            children: [(0, _v6.jsx)(_v165.Modal.Header, {
              children: (0, _v31.translate)({
                singular: "Log in to watch",
                dictionary: {
                  es: {
                    singular: "Inicia sesión para verla"
                  },
                  "de-DE": {
                    singular: "Melde dich an, um das Video anzusehen"
                  },
                  "fr-FR": {
                    singular: "Connectez-vous pour la regarder."
                  },
                  "ja-JP": {
                    singular: "視聴するにはログインしてください"
                  },
                  "ko-KR": {
                    singular: "시청하려면 로그인하세요."
                  },
                  "pt-BR": {
                    singular: "Faça login para assistir"
                  },
                  "zh-CN": {
                    singular: "登录观看"
                  }
                }
              })
            }), (0, _v6.jsx)(_v141.Paragraph, {
              size: "2",
              children: (0, _v31.translate)({
                singular: "This collection contains unrated or mature content. Please log in to watch.",
                dictionary: {
                  es: {
                    singular: "Esta colección incluye contenido para adultos o sin clasificación. Inicia sesión para verla."
                  },
                  "de-DE": {
                    singular: "Diese Sammlung enthält nicht eingestufte oder nicht jugendfreie Inhalte. Zum Ansehen bitte anmelden."
                  },
                  "fr-FR": {
                    singular: "Cette collection contient du contenu non classé ou réservé aux adultes. Veuillez vous connecter pour le visionner."
                  },
                  "ja-JP": {
                    singular: "このコレクションにはレーティングなし、または成人向けコンテンツが含まれています。ログインして視聴してください。"
                  },
                  "ko-KR": {
                    singular: "이 컬렉션은 등급 미정 또는 성인 콘텐츠를 포함하고 있습니다. 시청하려면 로그인하세요."
                  },
                  "pt-BR": {
                    singular: "Esta coleção contém conteúdo adulto ou sem classificação. Faça login para assistir."
                  },
                  "zh-CN": {
                    singular: "此合集包含未分级的内容或成人内容。请登录后再观看。"
                  }
                }
              })
            }), (0, _v6.jsx)(_v234, {
              children: (0, _v6.jsx)(_v165.Modal.PrimaryAction, {
                onClick: () => {
                  _v0(), _v3(!1);
                },
                children: (0, _v31.translate)({
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
              })
            })]
          })
        })
      });
    };
  function _v237(_v0, _v1) {
    switch (_v1.type) {
      case "SEARCH_SUCCESS":
        return {
          ..._v0,
          isLoading: !1,
          searchTotal: _v1.payload.total,
          searchPage: _v1.payload.page,
          results: _v1.payload.data
        };
      case "CLOSE_SEARCH":
        return {
          ..._v0,
          isSearching: !1,
          isLoading: !0
        };
      case "START_SEARCH":
        return {
          ..._v0,
          isSearching: !0,
          isLoading: !0,
          hasErrored: !1
        };
      case "SEARCH_ERROR":
        return {
          ..._v0,
          isLoading: !1,
          hasErrored: !0
        };
      case "SEARCH_PAGE":
        return {
          ..._v0,
          isLoading: !0,
          searchPage: _v1.payload
        };
      case "SEARCH_TEXT":
        return {
          ..._v0,
          searchText: _v1.payload
        };
      default:
        return _v0;
    }
  }
  let _v238 = {
      isSearching: !1,
      isLoading: !0,
      hasErrored: !1,
      searchTotal: 0,
      searchPage: 1,
      results: [],
      searchText: ""
    },
    _v239 = (0, _v9.createContext)(_v238),
    _v240 = (0, _v9.createContext)(() => {
      throw Error("Not implemented. Must be inside of provider.");
    });
  function _v241({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v9.useReducer)(_v237, _v238),
      _v3 = (0, _v9.useMemo)(() => ({
        state: _v1,
        dispatch: _v2
      }), [_v1, _v2]);
    return (0, _v6.jsx)(_v239.Provider, {
      value: _v3.state,
      children: (0, _v6.jsx)(_v240.Provider, {
        value: _v3.dispatch,
        children: _v0
      })
    });
  }
  function _v242() {
    return (0, _v9.useContext)(_v239);
  }
  function _v243() {
    return (0, _v9.useContext)(_v240);
  }
  var _v244 = _v0.i(0);
  let _v245 = function (_v0 = 1, _v1) {
    let _v2 = (0, _v244.useHistory)(),
      [_v3, _v4] = (0, _v9.useState)(_v0),
      {
        pathname: _v5,
        search: _v6
      } = _v2.location,
      _v7 = _v156(_v6);
    return (0, _v9.useEffect)(() => {
      let _v0 = 1 === _v0 && 1 === _v3,
        _v1 = _v7.video;
      if (!_v1 && !_v1) {
        let _v0 = `${_v5}${_v6}`,
          _v1 = new URLSearchParams(_v6);
        _v1.append("page", _v3.toString());
        let _v2 = `${_v5}?${_v1.toString()}`;
        _v2.replace(_v0 ? _v0 : _v2);
      }
    }, [_v3]), [_v3, _v4];
  };
  var _v246 = _v0.i(0),
    _v247 = function (_v0) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        "data-name": "Layer 1",
        viewBox: "0 0 780 120"
      }, _v0), _v9.default.createElement("path", {
        d: "M471.9 70.31c-12.14-2.74-24.28-3.9-24.28-12 0-6.5 8.82-7.66 13.59-7.66 7.22 0 13.73 2.17 15.17 10h17.2c-2-16.62-15.9-23-31.22-23-13.58 0-31.21 5.05-31.21 21.38 0 15.17 11.85 19.51 24 22.11s24 3.76 24.42 12.43c.43 8.52-10.4 9.82-16.62 9.82-8.81 0-16-3.46-16.9-13h-16.49c.29 17.63 14.31 26 33.09 26 15.46 0 33.38-6.5 33.38-24.28-.03-14.72-12.14-19.05-24.13-21.8zm53.76-53.03h-16.48v22.4h-12.42V52h12.42v44c.29 12.43 3.47 19.08 20.67 19.08 3.61 0 7.08-.58 10.69-.87v-12.68a28.52 28.52 0 0 1-6.94.57c-7.37 0-7.94-3.47-7.94-10.26V52h14.88V39.68h-14.88zm55.19 20.38c-24 0-37.71 16.47-37.71 39.3 0 23 13.73 39.45 37.71 39.45S618.57 99.94 618.57 77c0-22.87-13.73-39.34-37.72-39.34zm0 65.74c-14.73 0-21.24-13.4-21.24-26.4s6.51-26.3 21.24-26.3S602.1 64.1 602.1 77s-6.51 26.4-21.25 26.4zm81.94-52.74c9.1 0 15.75 4.91 17.05 14h16.47c-1.59-18.35-16.33-27-33.67-27-24.56 0-36.85 17.63-36.85 40.17 0 22 12.86 38.58 36.27 38.58 19.22 0 31.22-10.69 34.25-30.06h-16.47c-1.59 10.7-8.24 17.05-17.78 17.05-14.3 0-19.79-13.15-19.79-25.57 0-22.69 11.99-27.17 20.52-27.17zm79.47 16.47l28.61-27.45h-20.23l-29.76 30.2V11.21H704.4v103.18h16.48V87.65l9.82-9.53 22.83 36.27h20.09l-31.36-47.26z",
        fill: "#fff"
      }), _v9.default.createElement("path", {
        d: "M117.25 26.72a18.37 18.37 0 0 0 13.14-5.31q4.92-4.69 5.13-9.8a9.62 9.62 0 0 0-2.67-6.84 9.08 9.08 0 0 0-7.18-3.37 20.91 20.91 0 0 0-13.45 4.9q-6.06 4.91-6.26 10.21-.4 10.22 11.29 10.21zm268.87 11.53q-22.38 0-37.15 16.39Q335.2 69.4 336.24 87c.05.86.12 1.7.22 2.53l-1.54.68q-17.46 7.52-32.23 7.51-7.4 0-11.09-5.12 19.9-3.27 33-15.35 12.4-11.03 11.54-21.47-1.23-16.37-21.34-16.38-21.8 0-37.8 16.42-14.56 15-14.77 31.6a37.57 37.57 0 0 0 .27 5.37c-2.29 1.51-4 2.27-5.2 2.27q-3.9 0-4.92-1.63c-.69-1.09-1-3.06-.83-5.93q0-1.64 2.57-12.57t2.77-16.67q.4-8.37-3.28-12.88-4.32-5.52-14.17-4.7a30.42 30.42 0 0 0-15.8 6.16 54.57 54.57 0 0 0-9.23 8.82c-1.1 1-2.12 1.86-3.08 2.67q.19-8.41-3.28-12.93-4.32-5.53-14.38-4.72a36.46 36.46 0 0 0-21.13 9.24 37.67 37.67 0 0 0-7.19 8.21 18.15 18.15 0 0 0 .41-3.9A19.42 19.42 0 0 0 162.5 43q-3.28-4.82-8.62-4.41-3.07.21-11.69 8.21-11.91 11.08-12.93 11.9l4.92 5.54c3.83-2.76 6.16-4.15 7-4.15q2.25 0 1.85 3.68a114.11 114.11 0 0 1-1.89 14.84c-.7 3.94-1.2 7.33-1.52 10.19l-.18.15q-7.39 6.08-10.26 6.07c-4.38 0-6.5-2.92-6.37-8.79q3.08-19.22 5.76-31.69.81-7.36-2.37-12t-10-4q-4.32.4-13.14 8.21L97 52.39c-.41-9.68-4.82-14.66-13.28-14.91q-19-.6-25.74 21.46a17.19 17.19 0 0 1 6.76-1.5q7 0 6.16 7.84-.46 4.72-6.2 13.81t-8.62 9.06q-3.69 0-6.77-14-1-4.11-3.69-21-2.47-15.54-13.14-14.52Q28 39 18.94 46.84q-6.57 6-13.34 11.9l4.3 5.54Q16.05 60 17.07 60q4.71 0 8.81 14.76l7.38 27.06q5.52 14.76 13.51 14.76 12.92 0 31.55-24.24 13.1-16.84 17-28.5c3.44-2.55 5.57-3.84 6.35-3.84q3.69 0 3.69 5.33 0 1-4 15.18t-4.2 20.92q-.21 6.57 3.18 10.66c2.25 2.74 5.51 4.11 9.75 4.11q13.75 0 27.5-11.9c.82-.71 1.61-1.44 2.39-2.18a16.51 16.51 0 0 0 3.77 7.56q5.93 6.34 20 5.93-1.89-4.52-1.47-16a59.7 59.7 0 0 1 6.57-24.43q6-11.68 11.1-11.7 6 0 5.55 7.59a53.13 53.13 0 0 1-2 11.71 55.23 55.23 0 0 0-2 13.13q-.41 10.47 4.71 15 5.73 5.13 20.05 4.72-2.13-4.71-1.72-13.54.6-12.52 8.44-25.86 7.41-12.72 12.76-12.73 5 0 4.74 7.8a74.94 74.94 0 0 1-2.56 14.36 74.61 74.61 0 0 0-2.57 15.79q-.41 14.78 12.94 14.77 13.74 0 27.5-11.9l.44-.4c.32.54.64 1.08 1 1.6q7.19 11.08 23.81 11.08 22.36 0 44.13-12.5c1.63-.92 3.17-1.83 4.65-2.75a29.43 29.43 0 0 0 3.24 5.18q8.42 10.45 24.63 10.45 19.5 0 32.64-13.73a48.79 48.79 0 0 0 14-32.58q.61-13.93-6.36-22.75-7.49-9.65-21.85-9.67zm-97.76 46.56a11.12 11.12 0 0 1 0-2.66q.19-7.75 6.55-16.23t12.5-8.48c3.15 0 4.65 1.85 4.51 5.52q-.19 4.08-6.14 10.62a46.25 46.25 0 0 1-17.42 11.23zM391 69.85a39 39 0 0 1-6 18.92q-6.57 10.91-15.81 10.9-4.11 0-6.36-4.52a17.66 17.66 0 0 1-1.85-9.05 39.81 39.81 0 0 1 6.16-19.74q6.86-11.31 17.33-11.31c2.19 0 3.86 1.54 5 4.63A25.82 25.82 0 0 1 391 69.85z",
        fill: "#00adef"
      }));
    },
    _v248 = _v0.i(0),
    _v249 = _v0.i(0),
    _v250 = (0, _v9.forwardRef)(function (_v0, _v1) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        "data-name": "Layer 1",
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v9.default.createElement("circle", {
        cx: 15.5,
        cy: 18.5,
        r: 1.5,
        fill: "#1a2e3b"
      }), _v9.default.createElement("circle", {
        cx: 2.5,
        cy: 18.5,
        r: 1.5,
        fill: "#1a2e3b"
      }), _v9.default.createElement("path", {
        d: "M19.83 3.45A1 1 0 0 0 19 3H3V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h14a1 1 0 0 0 0-2H3v-2h13.08a1 1 0 0 0 .92-.62l2.92-7a1 1 0 0 0-.09-.93zM15.42 10H3V5h14.5z",
        fill: "#1a2e3b"
      }));
    }),
    _v251 = (0, _v9.forwardRef)(function (_v0, _v1) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v9.default.createElement("path", {
        d: "M14 2v12H2V2h12m0-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z",
        fill: "#1a2e3b"
      }), _v9.default.createElement("path", {
        d: "M5.6 5.51c0-.55.39-.77.86-.5l4.28 2.5a.54.54 0 0 1 0 1l-4.28 2.57c-.47.28-.86.07-.86-.49zM16 20a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2v13a2 2 0 0 1-2 2H3a2 2 0 0 0 2 2z",
        fill: "#192e3b",
        fillRule: "evenodd"
      }));
    });
  let _v252 = {
      container: "stock_creator_albums",
      component: "download"
    },
    _v253 = {
      container: "stock_creator_albums",
      component: "add_to_cart"
    },
    _v254 = {
      container: "stock_creator_albums",
      component: "view_clip"
    },
    _v255 = {
      container: "stock_creator_albums",
      component: "add_to_account_confirm"
    },
    _v256 = "#d0d8db",
    _v257 = _v15.keyframes`
  0% {transform: translate3d(100%, 0, 0)}
  100% {
    transform: translate3d(0)}
`,
    _v258 = _v15.default.div.withConfig({
      displayName: "styles__NotificationContainer",
      componentId: "sc-dced93bf-0"
    })`
  @media (min-width: ${768}px) {
    right: ${(0, _v14.rem)(7)};
    width: ${(0, _v14.rem)(320)};
    margin: auto;
    left: auto;
  }
  position: fixed;
  top: ${(0, _v14.rem)(70)};
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index: 101;
  background: white;
  width: 96%;
  border: ${(0, _v14.rem)(1)} solid ${_v256};
  border-radius: ${(0, _v14.rem)(3)};
  box-shadow: 0 ${(0, _v14.rem)(2)} ${(0, _v14.rem)(4)} 0 rgba(0, 0, 0, 0.12);
  animation: 0.4s ${_v257} ease-out 1 forwards;
`,
    _v259 = _v15.default.div.withConfig({
      displayName: "styles__NotificationHeader",
      componentId: "sc-dced93bf-1"
    })`
  padding: ${(0, _v14.rem)(12)} ${(0, _v14.rem)(8)} 0 ${(0, _v14.rem)(12)};
  border-bottom: ${(0, _v14.rem)(1)} solid ${_v256};
  text-align: left;
`,
    _v260 = _v15.default.div.withConfig({
      displayName: "styles__ClipThumbnail",
      componentId: "sc-dced93bf-2"
    })`
  vertical-align: top;
  display: inline-block;
  width: ${(0, _v14.rem)(80)};
  height: ${(0, _v14.rem)(60)};
  background: grey url(${_v0 => _v0.thumbnailUrl}) no-repeat center;
  background-size: cover;
  margin-right: ${(0, _v14.rem)(10)};
`,
    _v261 = _v15.default.div.withConfig({
      displayName: "styles__Header6Wrapper",
      componentId: "sc-dced93bf-3"
    })`
  display: inline-block;
  width: ${(0, _v14.rem)(196)};
  margin-bottom: ${(0, _v14.rem)(-20)};
`,
    _v262 = _v15.default.div.withConfig({
      displayName: "styles__ManageClips",
      componentId: "sc-dced93bf-4"
    })`
  text-align: right;
  padding: ${(0, _v14.rem)(12)};
  box-shadow: 0 ${(0, _v14.rem)(4)} ${(0, _v14.rem)(10)} ${(0, _v14.rem)(6)} rgba(0, 0, 0, 0.1);
`,
    _v263 = _v15.default.div.withConfig({
      displayName: "styles__ClipDetailsWrapper",
      componentId: "sc-dced93bf-5"
    })`
  padding: ${(0, _v14.rem)(12)};
`,
    _v264 = {
      ManageClips: (0, _v31.translate)({
        singular: "Manage Clips",
        dictionary: {
          es: {
            singular: "Gestionar videos"
          },
          "de-DE": {
            singular: "Clips verwalten"
          },
          "fr-FR": {
            singular: "Gérer les clips"
          },
          "ja-JP": {
            singular: "クリップを管理"
          },
          "ko-KR": {
            singular: "클립 관리"
          },
          "pt-BR": {
            singular: "Gerenciar Clipes"
          },
          "zh-CN": {
            singular: "管理剪辑片段"
          }
        }
      }),
      Confirmed: (0, _v31.translate)({
        singular: "Confirmed!",
        dictionary: {
          es: {
            singular: "¡Confirmado!"
          },
          "de-DE": {
            singular: "Bestätigt!"
          },
          "fr-FR": {
            singular: "Confirmé !"
          },
          "ja-JP": {
            singular: "追加されました"
          },
          "ko-KR": {
            singular: "추가되었습니다!"
          },
          "pt-BR": {
            singular: "Confirmado!"
          },
          "zh-CN": {
            singular: "已确认！"
          }
        }
      })
    },
    _v265 = ({
      clip: _v0
    }) => (0, _v6.jsxs)(_v258, {
      children: [(0, _v6.jsx)(_v259, {
        children: (0, _v6.jsx)(_v43.Header, {
          size: "5",
          children: _v264.Confirmed
        })
      }), (0, _v6.jsxs)(_v263, {
        children: [(0, _v6.jsx)(_v260, {
          thumbnailUrl: _v0.thumbnail.split("?r=pad").shift() || ""
        }), (0, _v6.jsxs)(_v261, {
          children: [(0, _v6.jsx)(_v43.Header, {
            size: "6",
            children: _v0.name
          }), (0, _v6.jsx)(_v141.Paragraph, {
            size: "2",
            format: "alternative",
            children: `(${_v0.dimension} ${_v0.codec})`
          })]
        })]
      }), (0, _v6.jsx)(_v262, {
        children: (0, _v6.jsx)("a", {
          target: "_blank",
          href: "/manage/videos",
          onClick: () => {
            _v13.FatalAttraction.trackClick({
              container: "stock_creator_albums",
              component: "confirmation",
              keyword: "manage_clips"
            });
          },
          children: (0, _v6.jsx)(_v40.Button, {
            element: "span",
            size: "sm",
            children: _v264.ManageClips
          })
        })
      })]
    }),
    _v266 = _v15.default.section.withConfig({
      displayName: "Styles__ClipCardWrapper",
      componentId: "sc-3f096cb-0"
    })`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 1.25rem;
  transition: all 0.25s linear;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  flex: 0 1 330px;
  margin-right: 0.75rem;
  position: relative;
`,
    _v267 = (0, _v15.default)("div").withConfig({
      displayName: "Styles__DescriptionBox",
      componentId: "sc-3f096cb-1"
    })`
  padding: 1.25rem;
  position: relative;
  background-color: ${_v0 => _v0.darkTheme ? "#2E2E2E" : "#fff"};
  min-height: 151px;
  > p {
    display: block;
    display: -webkit-box;
    margin: 0.75rem 1.25rem 0 0;
    font-weight: 400;
    max-height: 41px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,
    _v268 = (0, _v15.default)(_v43.Header).attrs({
      size: "3"
    }).withConfig({
      displayName: "Styles__ClipTitle",
      componentId: "sc-3f096cb-2"
    })`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 3rem;
  ${_v0 => "dark" === _v0.theme.name ? "color: '#fff';" : ""};
`;
  _v15.default.div.withConfig({
    displayName: "Styles__PlayerPlaceholder",
    componentId: "sc-3f096cb-3"
  })`
  width: 100%;
  height: 250px;
`;
  let _v269 = _v15.css`
  height: ${(0, _v14.rem)(40)};
  margin-top: ${(0, _v14.rem)(12)};
  display: flex;
  justify-content: space-between;
  position: relative;
`,
    _v270 = _v15.css`
  margin-top: 0;
  position: static;
  .StyledButtons {
    right: ${(0, _v14.rem)(5)};
  }
  @media only screen and (max-width: 1024px) {
    display: initial;
  }
`,
    _v271 = _v15.default.div.withConfig({
      displayName: "Styles__StockWrapper",
      componentId: "sc-3f096cb-4"
    })`
  ${_v0 => _v0.isFeatured ? _v270 : _v269};
`,
    _v272 = _v15.css`
  width: ${(0, _v14.rem)(140)};
  height: ${(0, _v14.rem)(32)};
  cursor: pointer;
`,
    _v273 = (0, _v15.default)(_v247).withConfig({
      displayName: "Styles__StockIconLight",
      componentId: "sc-3f096cb-5"
    })`
  ${_v272};
`,
    _v274 = (0, _v15.default)(function (_v0) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        "data-name": "Layer 1",
        viewBox: "0 0 780 120"
      }, _v0), _v9.default.createElement("path", {
        d: "M471.9 70.31c-12.14-2.74-24.28-3.9-24.28-12 0-6.5 8.82-7.66 13.59-7.66 7.22 0 13.73 2.17 15.17 10h17.2c-2-16.62-15.9-23-31.22-23-13.58 0-31.21 5.05-31.21 21.38 0 15.17 11.85 19.51 24 22.11s24 3.76 24.42 12.43c.43 8.52-10.4 9.82-16.62 9.82-8.81 0-16-3.46-16.9-13h-16.49c.29 17.63 14.31 26 33.09 26 15.46 0 33.38-6.5 33.38-24.28-.03-14.72-12.14-19.05-24.13-21.8zm53.76-53.03h-16.48v22.4h-12.42V52h12.42v44c.29 12.43 3.47 19.08 20.67 19.08 3.61 0 7.08-.58 10.69-.87v-12.68a28.52 28.52 0 0 1-6.94.57c-7.37 0-7.94-3.47-7.94-10.26V52h14.88V39.68h-14.88zm55.19 20.38c-24 0-37.71 16.47-37.71 39.3 0 23 13.73 39.45 37.71 39.45S618.57 99.94 618.57 77c0-22.87-13.73-39.34-37.72-39.34zm0 65.74c-14.73 0-21.24-13.4-21.24-26.4s6.51-26.3 21.24-26.3S602.1 64.1 602.1 77s-6.51 26.4-21.25 26.4zm81.94-52.74c9.1 0 15.75 4.91 17.05 14h16.47c-1.59-18.35-16.33-27-33.67-27-24.56 0-36.85 17.63-36.85 40.17 0 22 12.86 38.58 36.27 38.58 19.22 0 31.22-10.69 34.25-30.06h-16.47c-1.59 10.7-8.24 17.05-17.78 17.05-14.3 0-19.79-13.15-19.79-25.57 0-22.69 11.99-27.17 20.52-27.17zm79.47 16.47l28.61-27.45h-20.23l-29.76 30.2V11.21H704.4v103.18h16.48V87.65l9.82-9.53 22.83 36.27h20.09l-31.36-47.26z",
        fill: "#1a2e3b"
      }), _v9.default.createElement("path", {
        d: "M117.25 26.72a18.37 18.37 0 0 0 13.14-5.31q4.92-4.69 5.13-9.8a9.62 9.62 0 0 0-2.67-6.84 9.08 9.08 0 0 0-7.18-3.37 20.91 20.91 0 0 0-13.45 4.9q-6.06 4.91-6.26 10.21-.4 10.22 11.29 10.21zm268.87 11.53q-22.38 0-37.15 16.39Q335.2 69.4 336.24 87c.05.86.12 1.7.22 2.53l-1.54.68q-17.46 7.52-32.23 7.51-7.4 0-11.09-5.12 19.9-3.27 33-15.35 12.4-11.03 11.54-21.47-1.23-16.37-21.34-16.38-21.8 0-37.8 16.42-14.56 15-14.77 31.6a37.57 37.57 0 0 0 .27 5.37c-2.29 1.51-4 2.27-5.2 2.27q-3.9 0-4.92-1.63c-.69-1.09-1-3.06-.83-5.93q0-1.64 2.57-12.57t2.77-16.67q.4-8.37-3.28-12.88-4.32-5.52-14.17-4.7a30.42 30.42 0 0 0-15.8 6.16 54.57 54.57 0 0 0-9.23 8.82c-1.1 1-2.12 1.86-3.08 2.67q.19-8.41-3.28-12.93-4.32-5.53-14.38-4.72a36.46 36.46 0 0 0-21.13 9.24 37.67 37.67 0 0 0-7.19 8.21 18.15 18.15 0 0 0 .41-3.9A19.42 19.42 0 0 0 162.5 43q-3.28-4.82-8.62-4.41-3.07.21-11.69 8.21-11.91 11.08-12.93 11.9l4.92 5.54c3.83-2.76 6.16-4.15 7-4.15q2.25 0 1.85 3.68a114.11 114.11 0 0 1-1.89 14.84c-.7 3.94-1.2 7.33-1.52 10.19l-.18.15q-7.39 6.08-10.26 6.07c-4.38 0-6.5-2.92-6.37-8.79q3.08-19.22 5.76-31.69.81-7.36-2.37-12t-10-4q-4.32.4-13.14 8.21L97 52.39c-.41-9.68-4.82-14.66-13.28-14.91q-19-.6-25.74 21.46a17.19 17.19 0 0 1 6.76-1.5q7 0 6.16 7.84-.46 4.72-6.2 13.81t-8.62 9.06q-3.69 0-6.77-14-1-4.11-3.69-21-2.47-15.54-13.14-14.52Q28 39 18.94 46.84q-6.57 6-13.34 11.9l4.3 5.54Q16.05 60 17.07 60q4.71 0 8.81 14.76l7.38 27.06q5.52 14.76 13.51 14.76 12.92 0 31.55-24.24 13.1-16.84 17-28.5c3.44-2.55 5.57-3.84 6.35-3.84q3.69 0 3.69 5.33 0 1-4 15.18t-4.2 20.92q-.21 6.57 3.18 10.66c2.25 2.74 5.51 4.11 9.75 4.11q13.75 0 27.5-11.9c.82-.71 1.61-1.44 2.39-2.18a16.51 16.51 0 0 0 3.77 7.56q5.93 6.34 20 5.93-1.89-4.52-1.47-16a59.7 59.7 0 0 1 6.57-24.43q6-11.68 11.1-11.7 6 0 5.55 7.59a53.13 53.13 0 0 1-2 11.71 55.23 55.23 0 0 0-2 13.13q-.41 10.47 4.71 15 5.73 5.13 20.05 4.72-2.13-4.71-1.72-13.54.6-12.52 8.44-25.86 7.41-12.72 12.76-12.73 5 0 4.74 7.8a74.94 74.94 0 0 1-2.56 14.36 74.61 74.61 0 0 0-2.57 15.79q-.41 14.78 12.94 14.77 13.74 0 27.5-11.9l.44-.4c.32.54.64 1.08 1 1.6q7.19 11.08 23.81 11.08 22.36 0 44.13-12.5c1.63-.92 3.17-1.83 4.65-2.75a29.43 29.43 0 0 0 3.24 5.18q8.42 10.45 24.63 10.45 19.5 0 32.64-13.73a48.79 48.79 0 0 0 14-32.58q.61-13.93-6.36-22.75-7.49-9.65-21.85-9.67zm-97.76 46.56a11.12 11.12 0 0 1 0-2.66q.19-7.75 6.55-16.23t12.5-8.48c3.15 0 4.65 1.85 4.51 5.52q-.19 4.08-6.14 10.62a46.25 46.25 0 0 1-17.42 11.23zM391 69.85a39 39 0 0 1-6 18.92q-6.57 10.91-15.81 10.9-4.11 0-6.36-4.52a17.66 17.66 0 0 1-1.85-9.05 39.81 39.81 0 0 1 6.16-19.74q6.86-11.31 17.33-11.31c2.19 0 3.86 1.54 5 4.63A25.82 25.82 0 0 1 391 69.85z",
        fill: "#00adef"
      }));
    }).withConfig({
      displayName: "Styles__StockIconDark",
      componentId: "sc-3f096cb-6"
    })`
  ${_v272};
`,
    _v275 = _v15.default.span.withConfig({
      displayName: "Styles__StyledButtons",
      componentId: "sc-3f096cb-7"
    })`
  width: ${(0, _v14.rem)(80)};
  height: ${(0, _v14.rem)(37)};
  display: flex;
  z-index: 2;
  position: absolute;
  bottom: ${(0, _v14.rem)(3)};
  right: 0;
  ${_v0 => _v0.isSmartPhoneOrTablet || !_v0.isPaid && _v0.isFree ? `width: ${(0, _v14.rem)(40)}` : ""};
`,
    _v276 = _v15.default.div.withConfig({
      displayName: "Styles__AddButton",
      componentId: "sc-3f096cb-8"
    })`
  margin-left: ${(0, _v14.rem)(4)};
`,
    _v277 = _v15.default.div.withConfig({
      displayName: "Styles__ButtonBackground",
      componentId: "sc-3f096cb-9"
    })`
  ${_v0 => "dark" === _v0.$theme ? `background-color: ${_v74.bokehTheme.colors.gray["600"]};` : ""};
`,
    _v278 = (0, _v15.default)(_v246.DownloadArrow).withConfig({
      displayName: "Styles__StyledDownloadIcon",
      componentId: "sc-3f096cb-10"
    })`
  path {
    fill: white;
  }
`;
  function _v279({
    clipId: _v0,
    name: _v1,
    pictures: _v2,
    theme: _v3,
    featured: _v4,
    isFree: _v5,
    user: _v6,
    stockService: _v7
  }) {
    let _v8 = (0, _v9.useContext)(_v32.ViewerContext),
      {
        capabilities: _v9,
        loading: _v10
      } = (0, _v103.useCapability)(["hasStockEnterprise", "canReceiveFreeStock"]);
    if (!_v8 || _v10) return null;
    let {
        jwt: _v11,
        xsrft: _v12,
        apiUrl: _v13
      } = _v8,
      [_v14, _v15] = (0, _v9.useState)(),
      [_v16, _v17] = (0, _v9.useState)(!1),
      [_v18, _v19] = (0, _v9.useState)(),
      [_v20, _v21] = (0, _v9.useState)(!1);
    (0, _v9.useEffect)(() => {
      let _v0;
      return _v16 && (_v0 = setTimeout(() => {
        _v27();
      }, 0)), () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v16]);
    let _v22 = _v9?.hasStockEnterprise,
      _v23 = _v9?.canReceiveFreeStock,
      _v24 = _v6 && _v6.account !== _v248.AccountType.Basic,
      _v25 = () => {
        _v7 && _v6 && _v7.addToCart(_v0, _v12, _v148(_v6?.uri, _v82)).then(_v0 => {
          _v0 && _v0.message && _v14 !== (0, _v31.translate)({
            singular: "This clip could not be added to the cart.",
            dictionary: {
              es: {
                singular: "No pudimos agregar el video al carrito."
              },
              "de-DE": {
                singular: "Dieser Clip konnte nicht in den Warenkorb gelegt werden."
              },
              "fr-FR": {
                singular: "Ce clip n'a pas pu être ajouté au panier."
              },
              "ja-JP": {
                singular: "このクリップはカートに追加できませんでした。"
              },
              "ko-KR": {
                singular: "이 클립은 장바구니에 추가할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível adicionar o clipe ao carrinho."
              },
              "zh-CN": {
                singular: "此剪辑片段无法添加到购物车。"
              }
            }
          }) && (_v15(_v14), _v17(!0));
        });
      },
      _v26 = () => {
        location.href = "/stock";
      },
      _v27 = () => {
        _v19(void 0), _v17(!1);
      };
    return (0, _v6.jsxs)("div", {
      children: [_v16 && _v18 && (0, _v6.jsx)(_v265, {
        clip: _v18
      }), (0, _v6.jsxs)(_v271, {
        isFeatured: _v4,
        children: [!_v4 && (_v3 === _v92 ? (0, _v6.jsx)(_v273, {
          onClick: _v26
        }) : (0, _v6.jsx)(_v274, {
          onClick: _v26
        })), (0, _v6.jsxs)(_v275, {
          isPaid: _v24,
          isFree: _v5,
          isSmartPhoneOrTablet: _v152(),
          children: [!_v152() && (0, _v6.jsx)(_v249.Tip, {
            content: (0, _v31.translate)({
              singular: "Download preview",
              dictionary: {
                es: {
                  singular: "Descargar vista previa"
                },
                "de-DE": {
                  singular: "Download-Vorschau"
                },
                "fr-FR": {
                  singular: "Télécharger un aperçu"
                },
                "ja-JP": {
                  singular: "ダウンロードのプレビュー"
                },
                "ko-KR": {
                  singular: "미리 보기 다운로드"
                },
                "pt-BR": {
                  singular: "Pré-visualização do download"
                },
                "zh-CN": {
                  singular: "下载预览"
                }
              }
            }),
            children: (0, _v6.jsx)(_v277, {
              $theme: _v3 ?? "",
              children: (0, _v6.jsx)(_v40.Button, {
                icon: (0, _v6.jsx)(_v278, {}),
                format: "soft",
                variant: "minimalTransparent",
                size: "md",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v13.FatalAttraction.trackClick({
                    ..._v252,
                    keyword: _v0
                  }), _v7 && _v7.downloadStockClip({
                    clipId: _v0,
                    name: _v1,
                    pictures: _v2
                  });
                }
              })
            })
          }), _v5 || _v22 ? _v24 && _v23 ? (0, _v6.jsx)(_v276, {
            children: (0, _v6.jsx)(_v249.Tip, {
              content: (0, _v31.translate)({
                singular: "Add to account",
                dictionary: {
                  es: {
                    singular: "Agregar a la cuenta"
                  },
                  "de-DE": {
                    singular: "Zu Konto hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter au compte"
                  },
                  "ja-JP": {
                    singular: "アカウントに追加"
                  },
                  "ko-KR": {
                    singular: "계정에 추가하기"
                  },
                  "pt-BR": {
                    singular: "Adicionar à conta"
                  },
                  "zh-CN": {
                    singular: "添加到帐户"
                  }
                }
              }),
              children: (0, _v6.jsx)(_v40.Button, {
                icon: (0, _v6.jsx)(_v251, {}),
                format: "primary",
                size: "md",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v13.FatalAttraction.trackClick({
                    ..._v255,
                    keyword: _v0
                  }), _v7 && _v6 && _v7.addToAccount(_v6, _v0, _v13, _v11).then(_v0 => {
                    if (_v0 && _v0.message) {
                      let _v0 = (0, _v31.translate)({
                        singular: "Something went wrong. Please try again.",
                        dictionary: {
                          es: {
                            singular: "Algo salió mal. Inténtalo de nuevo."
                          },
                          "de-DE": {
                            singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                          },
                          "fr-FR": {
                            singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                          },
                          "ja-JP": {
                            singular: "エラーが発生しました。 再度お試しください。"
                          },
                          "ko-KR": {
                            singular: "문제가 발생했습니다. 다시 시도해주세요."
                          },
                          "pt-BR": {
                            singular: "Alguma coisa deu errado. Por favor, tente novamente."
                          },
                          "zh-CN": {
                            singular: "出错了。请重试。"
                          }
                        }
                      });
                      _v14 !== _v0 && (_v15(_v0), _v21(!1));
                    } else _v19(_v0), _v17(!0);
                  });
                }
              })
            })
          }) : null : (0, _v6.jsx)(_v276, {
            children: (0, _v6.jsx)(_v249.Tip, {
              content: (0, _v31.translate)({
                singular: "Add to cart",
                dictionary: {
                  es: {
                    singular: "Agregar al carrito de compras"
                  },
                  "de-DE": {
                    singular: "In den Warenkorb legen"
                  },
                  "fr-FR": {
                    singular: "Ajouter au panier"
                  },
                  "ja-JP": {
                    singular: "カートに追加"
                  },
                  "ko-KR": {
                    singular: "장바구니에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar ao carrinho"
                  },
                  "zh-CN": {
                    singular: "添加到购物车"
                  }
                }
              }),
              children: (0, _v6.jsx)(_v40.Button, {
                icon: (0, _v6.jsx)(_v250, {}),
                format: "primary",
                size: "md",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v13.FatalAttraction.trackClick({
                    ..._v253,
                    keyword: _v0
                  }), _v25();
                }
              })
            })
          })]
        })]
      }), _v14 && (0, _v6.jsx)(_v107.Notification, {
        showing: !!_v14,
        onActionClick: _v25,
        actionLabel: _v20 ? (0, _v31.translate)({
          singular: "Try again.",
          dictionary: {
            es: {
              singular: "Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Nochmal versuchen."
            },
            "fr-FR": {
              singular: "Veuillez réessayer."
            },
            "ja-JP": {
              singular: "再度お試しください。"
            },
            "zh-CN": {
              singular: "请重试。"
            }
          }
        }) : "",
        onComplete: _v27,
        content: _v14
      })]
    });
  }
  let _v280 = {
      plus_yearly: {
        name: "Plus membership",
        logoUrl: "https://f.vimeocdn.com/images_v6/stock/plus_yearly.svg"
      },
      pro: {
        name: "Pro membership",
        logoUrl: "https://f.vimeocdn.com/images_v6/stock/pro.svg"
      },
      business: {
        name: "Business membership",
        logoUrl: "https://f.vimeocdn.com/images_v6/stock/business.svg"
      }
    },
    _v281 = (_v0, _v1, _v2) => {
      let {
          clipId: _v3,
          title: _v4,
          pictures: _v5,
          qualities: _v6,
          pageUri: _v7
        } = _v2,
        {
          discountedDisplayPrice: _v8,
          originalDisplayPrice: _v9,
          quality: _v10,
          productId: _v11
        } = _v0,
        {
          link: _v12
        } = _v5.sizes[0],
        _v13 = `${_v12.split("_")[0]}.jpg`,
        _v14 = _v6.find(_v0 => _v0.format === _v10);
      return {
        clip_id: _v3,
        clip_url: `${window.origin}${_v7}`,
        description: _v14 ? `${_v14.format} ${_v14.dimension} ${_v14.codec}` : _v10,
        dimension21: _v4,
        id: _v11,
        name: "Stock",
        price: _v1 ? _v8 : _v9,
        price_discount: _v8,
        price_original: _v9,
        quantity: 1,
        stride_name: _v4,
        thumbnail: _v13,
        variant: _v14 && _v14.format
      };
    },
    _v282 = _v0 => {
      let {
          subscriptionType: _v1,
          subscriptionPricings: _v2
        } = _v0,
        {
          discountedDisplayPrice: _v3,
          originalDisplayPrice: _v4
        } = _v2[(0, _v188.camelize)(_v1)];
      return {
        name: _v1,
        price_discount: _v3,
        price_original: _v4,
        description: _v280[_v1].name,
        thumbnail: _v280[_v1].logoUrl
      };
    };
  function _v283(_v0) {
    return _v0.text().then(_v0 => _v0 ? JSON.parse(_v0) : {}).then(_v0 => {
      let _v1 = (0, _v188.camelize)(_v0);
      if (!_v0.ok || _v0.status >= 400) throw Error(_v0.statusText);
      return _v1;
    });
  }
  let _v284 = {
      downloadStockClip: ({
        clipId: _v0,
        name: _v1,
        pictures: _v2
      }) => {
        let _v3;
        return (_v3 = _v0, fetch(`/stock/${_v3}/download_url`, {
          credentials: "include"
        }).then(_v283)).then(_v0 => {
          if (!_v0.downloadUrl) return Error(_v0.error.message);
          window.open(_v0.downloadUrl, "_self"), (_v0 => {
            let {
              clipId: _v1,
              name: _v2,
              pictures: _v3
            } = _v0;
            _v13.GoogleTagManager.addData({
              downloadStockClipPreview: {
                products: [{
                  clip_id: _v1,
                  clip_url: `${window.location.origin}/${_v1}`,
                  stride_name: _v2,
                  thumbnail: `${_v3.sizes[0].link.split("_")[0]}.jpg`
                }]
              }
            });
          })({
            clipId: _v0,
            name: _v1,
            pictures: _v2
          });
        });
      },
      addToCart: (_v0, _v1, _v2) => fetch("/cart/stock", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          stocks_to_add: [{
            clip_id: _v0
          }],
          token: _v1
        })
      }).then(_v283).then(_v0 => {
        let _v1;
        if (_v0.error) return _v0.error;
        "function" == typeof window.CustomEvent ? _v1 = new CustomEvent("addToCart", {
          detail: _v0
        }) : (_v1 = window.document.createEvent("CustomEvent")).initCustomEvent("addToCart", !0, !0, _v0), window.dispatchEvent(_v1);
        let _v2 = _v0.items.map(_v0 => _v0.clipId);
        _v284.getStockMetadata(_v2).then(_v0 => {
          !function (_v0, _v1, _v2, _v3) {
            let {
                currencyCode: _v4
              } = _v1,
              _v5 = ((_v0, _v1) => {
                let _v2 = [],
                  {
                    items: _v3,
                    subscriptionDetails: _v4,
                    discountApplied: _v5
                  } = _v0;
                return _v4 && _v4.subscriptionAdded && _v2.push(_v282(_v4)), _v3.forEach(_v0 => {
                  let _v1 = _v1.find(_v0 => _v0.clipId === _v0.clipId);
                  _v1 && _v2.push(_v281(_v0, _v5, _v1));
                }), _v2;
              })(_v1, _v2),
              _v6 = ((_v0, _v1, _v2) => {
                let {
                    items: _v3,
                    discountApplied: _v4
                  } = _v1,
                  _v5 = _v2.find(_v0 => _v0.clipId === _v0);
                if (_v5) {
                  let _v0 = _v3.find(_v0 => _v0.clipId === _v0 && _v0.quality === (_v5.qualities.length > 1 ? "4K" : "HD"));
                  return _v0 && _v281(_v0, _v4, _v5);
                }
                return null;
              })(_v0, _v1, _v2),
              _v7 = ((_v0, _v1) => {
                let {
                    items: _v2,
                    pricingInfo: _v3
                  } = _v0,
                  {
                    subtotalDisplay: _v4,
                    totalDisplay: _v5,
                    totalDiscountDisplay: _v6
                  } = _v3,
                  _v7 = _v2.map(_v0 => _v0.clipId),
                  _v8 = new Date().getTime();
                return {
                  affiliation: "stock",
                  membership_discount: _v6,
                  sub_total: _v4,
                  total: _v5,
                  clips_added: _v2.length,
                  cart_clip_ids: _v7,
                  id: _v1 ? `${_v1}_${_v8}` : _v8
                };
              })(_v1, _v3);
            _v6 && _v13.GoogleTagManager.addData({
              ecommerce: {
                add: {
                  currencyCode: _v4,
                  products: [_v6]
                }
              }
            }), _v13.GoogleTagManager.addData({
              ecommerce: {
                currencyCode: _v4,
                checkout: {
                  actionField: _v7,
                  products: _v5
                }
              }
            });
          }(_v0, _v0, _v0, _v2);
        });
      }),
      getStockMetadata: _v0 => fetch(`/stocks/clips?clip_ids=${_v0}&fields=title,description,clip_uri,pictures,qualities,page_uri`).then(_v0 => {
        let _v1 = _v0.headers.get("content-type");
        return _v1 && /^application\/.*json/i.test(_v1) ? _v0.json() : _v0;
      }).then(_v0 => (0, _v188.camelize)(_v0)).then(_v0 => _v0.map(_v0 => ({
        ..._v0,
        clipId: _v148(_v0?.clipUri, _v83)
      }))),
      addToAccount: (_v0, _v1, _v2, _v3) => {
        let _v4 = _v148(_v0?.uri, _v82);
        return fetch(`https://${_v2}/users/${_v4}/purchases/stocks/${_v1}?clip_uri=/videos/${_v1}`, {
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1",
            Authorization: `jwt ${_v3}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          credentials: "omit"
        }).then(_v0 => _v0.ok ? _v0.json() : {
          error: {
            message: (0, _v31.translate)({
              singular: "Sorry, something weird happened. Please try again.",
              dictionary: {
                es: {
                  singular: "Lo sentimos, algo salió mal. Inténtalo de nuevo."
                },
                "de-DE": {
                  singular: "Hier ist leider etwas schief gegangen. Bitte erneut versuchen."
                },
                "fr-FR": {
                  singular: "Désolé, quelque chose de bizarre s'est produit. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "申し訳ありません、問題が発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다, 알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Desculpe, algo estranho aconteceu. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "对不起，出现异常问题。请重试。"
                }
              }
            })
          }
        }).then(_v0 => _v0.error ? _v0.error : {
          clipId: _v148(_v0?.clip_uri, _v83),
          name: _v0.title,
          thumbnail: _v0.pictures.sizes[0].link,
          dimension: _v0.qualities[0].dimension,
          codec: _v0.qualities[0].codec,
          quality: _v0.qualities[0].format
        });
      }
    },
    _v285 = _v15.default.span.withConfig({
      displayName: "EssentialsBadge__Badge",
      componentId: "sc-233514f5-0"
    })`
  color: ${_v74.bokehTheme.colors.gray["200"]};
  background-color: ${_v74.bokehTheme.colors.gray["800"]};
  font-size: ${(0, _v14.rem)(10)};
  font-weight: bold;
  letter-spacing: ${(0, _v14.rem)(.11)};
  line-height: ${(0, _v14.rem)(18)};
  text-transform: uppercase;
  padding: 0 ${(0, _v14.rem)(5)};
  height: ${(0, _v14.rem)(19)};
  vertical-align: super;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  margin: 0 0 ${(0, _v14.rem)(9)};
`,
    _v286 = () => (0, _v6.jsx)(_v285, {
      children: "Essentials"
    }),
    _v287 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__Wrapper",
      componentId: "sc-820d4cd0-0"
    })`
  display: flex;
  display: grid;
  min-width: ${(0, _v14.rem)(330)};
  max-width: ${(0, _v14.rem)(0)};
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: ${(0, _v14.rem)(20)} ${(0, _v14.rem)(40)};
  grid-template-columns: repeat(auto-fill, minmax(${(0, _v14.rem)("256px")}, 1fr));

  &:after {
    content: '';
    flex: auto;
  }
`,
    _v288 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__PlayerLayoutGridItem",
      componentId: "sc-820d4cd0-1"
    })`
  padding: ${(0, _v14.rem)(12)};
  height: ${(0, _v14.rem)(190)};
  max-height: 14rem;
  flex: 0 1 ${(0, _v14.rem)(256)};
  position: relative;

  @media only screen and (max-width: 1600px) {
    height: 13vw;
  }

  @media only screen and (max-width: 1359px) {
    height: 16vw;
  }

  @media only screen and (max-width: 1103px) {
    height: 19vw;
  }

  @media only screen and (max-width: 847px) {
    height: 28vw;
  }

  @media only screen and (max-width: 591px) {
    width: 100%;
    height: 54vw;
    padding: 0;
  }
`,
    _v289 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__GridBlock",
      componentId: "sc-820d4cd0-2"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,
    _v290 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__GridItemWrapper",
      componentId: "sc-820d4cd0-3"
    })`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: ${(0, _v14.rem)(8)};
  box-shadow: ${_v0 => _v0.isSelected ? `0 0 0 2px ${_v0.brandColor}` : null};
  border-radius: ${_v0 => _v0.isSelected ? "3px" : null};
  overflow: ${_v0 => _v0.isStock ? "auto" : null};
`,
    _v291 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__GridItemThumbContainer",
      componentId: "sc-820d4cd0-4"
    })`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  background: black;
`,
    _v292 = _v15.default.img.withConfig({
      displayName: "PlayerLayoutGrid__GridItemThumb",
      componentId: "sc-820d4cd0-5"
    })`
  height: 100%;
  width: 100%;
  object-fit: contain;
  color: black;
`,
    _v293 = (0, _v15.default)(_v247).withConfig({
      displayName: "PlayerLayoutGrid__StockIcon",
      componentId: "sc-820d4cd0-6"
    })`
  height: ${(0, _v14.rem)(18)};
  position: absolute;
  right: ${(0, _v14.rem)(10)};
  top: ${(0, _v14.rem)(10)};
  width: ${(0, _v14.rem)(80)};
`,
    _v294 = _v15.default.span.withConfig({
      displayName: "PlayerLayoutGrid__Badge",
      componentId: "sc-820d4cd0-7"
    })`
  height: ${(0, _v14.rem)(18)};
  position: absolute;
  left: ${(0, _v14.rem)(10)};
  top: ${(0, _v14.rem)(11)};
  width: ${(0, _v14.rem)(80)};
`,
    _v295 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__MetaInfo",
      componentId: "sc-820d4cd0-8"
    })`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: ${(0, _v14.rem)(8)};
  left: ${(0, _v14.rem)(8)};
  right: ${(0, _v14.rem)(8)};
  height: 60px;
  padding: ${(0, _v14.rem)(16)} ${(0, _v14.rem)(8)} ${(0, _v14.rem)(8)};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);
  align-items: ${_v0 => _v0.isStock ? "initial" : null};

  p {
    color: ${_v0 => !_v0.isStock && "white"};
    margin-bottom: 0;
  }
`,
    _v296 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__MetaGrid",
      componentId: "sc-820d4cd0-9"
    })`
  position: relative;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    padding-left: ${_v0 => _v0.isStock ? 0 : null};
  }
`,
    _v297 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__MetaInfoName",
      componentId: "sc-820d4cd0-10"
    })`
  p,
  strong {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: bottom;
  }
  align-self: ${_v0 => _v0.isStock ? "flex-start" : null};
  padding-top: ${_v0 => _v0.isStock ? "1rem" : null};
  max-width: ${_v0 => _v0.isStock ? "70%" : "85%"};

  @media only screen and (max-width: 767px) {
    width: ${_v0 => _v0.isStock ? "75%" : null};
    height: ${_v0 => _v0.isStock ? (0, _v14.rem)(40) : null};
    p {
      line-height: ${_v0 => _v0.isStock ? (0, _v14.rem)(15) : null};
    }
  }
`,
    _v298 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutGrid__MetaInfoDuration",
      componentId: "sc-820d4cd0-11"
    })`
  display: flex;
  text-align: right;
  align-self: ${_v0 => _v0.isStock ? "flex-start" : "flex-end"};
  @media only screen and (max-width: 767px) {
    width: ${_v0 => _v0.isStock ? "20%" : null};
  }
`,
    _v299 = _v15.default.strong.withConfig({
      displayName: "PlayerLayoutGrid__ClipTitle",
      componentId: "sc-820d4cd0-12"
    })`
  color: white;
  &:hover {
    color: ${_v0 => _v0.hoverColor || _v74.bokehTheme.colors.blue["500"]};
  }
`,
    _v300 = (0, _v15.default)(_v246.DownloadArrow).withConfig({
      displayName: "PlayerLayoutGrid__StyledDownloadIcon",
      componentId: "sc-820d4cd0-13"
    })`
  path {
    fill: white;
  }
`,
    _v301 = ({
      brandColor: _v0,
      displayedVideos: _v1,
      onSelect: _v2,
      selectedVideoIndex: _v3,
      curUser: _v4,
      isOffsite: _v5,
      allowDownloads: _v6,
      setDownloadClipId: _v7,
      openDownloadModal: _v8,
      ..._v9
    }) => {
      let _v10 = _v4?.teamUserPermissionLevel && (_v4.teamUserPermissionLevel === _v248.TeamUserPermissionLevel.Contributor || _v4.teamUserPermissionLevel === _v248.TeamUserPermissionLevel.Viewer);
      return (0, _v6.jsx)(_v287, {
        children: _v1.map((_v0, _v1) => {
          let _v2 = _v0.pictures.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", "),
            _v3 = "CLIP_PLACEHOLDER" === _v0.displayType ? _v1 : _v148(_v0?.uri, _v83),
            _v4 = _v0.pictures.sizes.length > 0 && _v0.pictures.sizes.find(_v0 => 640 === _v0.width),
            _v5 = _v4 ? _v4.link : void 0,
            _v6 = `/showcase/${_v9.albumId}/video/${_v3}`,
            _v7 = `/${_v3}`,
            _v8 = "CLIP_PLACEHOLDER" !== _v0.displayType && _v0.privacy.view === _v86,
            _v9 = _v8 && _v0.isFree;
          return (0, _v6.jsx)(_v288, {
            children: (0, _v6.jsxs)(_v290, {
              brandColor: _v0,
              isSelected: _v3 === _v1,
              isStock: _v8,
              onClick: () => {
                _v2(_v1), _v13.FatalAttraction.trackClick({
                  container: "showcase",
                  component: "featured_video_row",
                  keyword: _v1
                });
              },
              children: [(0, _v6.jsxs)(_v291, {
                children: [(0, _v6.jsx)(_v292, {
                  srcSet: _v2,
                  src: _v5,
                  alt: _v0.name
                }), _v9 && (0, _v6.jsx)(_v294, {
                  children: (0, _v6.jsx)(_v286, {})
                }), _v8 && (0, _v6.jsx)("a", {
                  href: "/stock",
                  children: (0, _v6.jsx)(_v293, {})
                })]
              }), (0, _v6.jsx)(_v295, {
                isStock: _v8,
                children: (0, _v6.jsx)(_v296, {
                  isStock: _v8,
                  children: (0, _v6.jsxs)(_v289, {
                    children: [(0, _v6.jsx)(_v297, {
                      isStock: _v8,
                      children: (0, _v6.jsx)(_v141.Paragraph, {
                        size: "2",
                        children: _v5 || _v10 || "CLIP_PLACEHOLDER" === _v0.displayType ? (0, _v6.jsx)(_v299, {
                          title: _v0.name,
                          hoverColor: _v0,
                          children: _v0.name
                        }) : (0, _v6.jsx)(_v142.Link, {
                          href: _v8 ? _v7 : _v6,
                          format: "basic",
                          theme: _v52.themes.dark,
                          onClick: () => {
                            _v8 && _v13.FatalAttraction.trackClick({
                              ..._v254,
                              keyword: _v3
                            });
                          },
                          children: (0, _v6.jsx)(_v299, {
                            title: _v0.name,
                            hoverColor: _v0,
                            children: _v0.name
                          })
                        })
                      })
                    }), (0, _v6.jsx)(_v298, {
                      isStock: _v8,
                      children: _v8 && _v4 ? (0, _v6.jsx)(_v279, {
                        clipId: _v3,
                        pictures: _v0.pictures,
                        name: name,
                        user: _v4,
                        featured: !0,
                        stockService: _v284,
                        isFree: _v9
                      }) : _v6 && _v0.privacy.download ? (0, _v6.jsx)(_v40.Button, {
                        icon: (0, _v6.jsx)(_v300, {}),
                        format: "basic",
                        variant: "hyperminimal",
                        size: "md",
                        onClick: _v0 => {
                          _v0.stopPropagation(), "CLIP_PLACEHOLDER" !== _v0.displayType && _v7 && _v8 && (_v7(_v3), _v8());
                        }
                      }) : (0, _v6.jsx)(_v141.Paragraph, {
                        size: "3",
                        children: _v155(_v0.duration, "mm:ss")
                      })
                    })]
                  })
                })
              })]
            })
          }, _v3);
        })
      });
    };
  var _v302 = _v0.i(0),
    _v303 = _v0.i(0);
  let _v304 = _v15.default.div.withConfig({
      displayName: "CustomGridHeaderStyled__TopBar",
      componentId: "sc-638574ec-0"
    })`
  padding-top: ${(0, _v14.rem)(70)};
  margin-bottom: ${({
      isSearching: _v0
    }) => _v0 ? "0" : (0, _v14.rem)(50)};
  ${({
      isSearching: _v0
    }) => _v0 && "display: none;"};
`,
    _v305 = _v15.default.div.withConfig({
      displayName: "CustomGridHeaderStyled__CustomLogo",
      componentId: "sc-638574ec-1"
    })`
  width: 100px;
  position: relative;
  overflow: hidden;
  max-height: 200px;
  margin-bottom: ${(0, _v14.rem)(20)};

  img {
    width: 100%;
    height: auto;
  }
`,
    _v306 = (0, _v15.default)(_v43.Header).attrs({
      size: "plusUltra"
    }).withConfig({
      displayName: "CustomGridHeaderStyled__MegaHeader",
      componentId: "sc-638574ec-2"
    })`
  max-width: 64rem;
`,
    _v307 = (0, _v15.default)(_v141.Paragraph).attrs({
      size: "1"
    }).withConfig({
      displayName: "CustomGridHeaderStyled__AlbumDescription",
      componentId: "sc-638574ec-3"
    })`
  @media only screen and (min-width: 767px) {
    font-size: ${(0, _v14.rem)(20)};
  }
`,
    _v308 = ({
      children: _v0,
      theme: _v1
    }) => {
      let _v2 = _v0.split(/\s/),
        _v3 = _v2.map((_v0, _v1) => {
          let _v2 = _v1 !== _v2.length - 1 ? " " : "";
          return _v0.match(/(https?:\/\/[^\s]+)/g) ? (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsx)(_v309, {
              variant: "minimal",
              target: "_blank",
              href: _v0,
              children: _v0
            }, _v1), _v2]
          }) : _v0 + _v2;
        });
      return (0, _v6.jsx)(_v307, {
        theme: _v1,
        children: _v3
      });
    },
    _v309 = (0, _v15.default)(_v142.Link).withConfig({
      displayName: "AlbumDescriptionWithLinks__StyledLink",
      componentId: "sc-8c398401-0"
    })`
  color: ${_v74.bokehTheme.colors.blue["500"]} !important;
  &:visited {
    color: ${_v74.bokehTheme.colors.blue["500"]} !important;
  }
`,
    _v310 = _v74.bokehTheme.colors.white,
    _v311 = _v15.default.div.withConfig({
      displayName: "TeamMenu__TeamMenuWrapper",
      componentId: "sc-cf8daaa4-0"
    })`
  @media only screen and (max-width: 767px) {
    display: none;
  }
  display: inline-block;
  font-size: ${(0, _v14.rem)(16)};
`,
    _v312 = _v15.default.div.withConfig({
      displayName: "TeamMenu__TeamMenuListItem",
      componentId: "sc-cf8daaa4-1"
    })`
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  color: white;
`,
    _v313 = (0, _v15.default)(_v142.Link).withConfig({
      displayName: "TeamMenu__StyledLink",
      componentId: "sc-cf8daaa4-2"
    })`
  white-space: nowrap;
  color: ${_v0 => _v0.hrefColor};
  &:hover,
  &:link,
  &:active,
  &:visited {
    color: ${_v0 => _v0.hrefColor} !important;
  }
  &:after {
    display: none;
  }
`,
    _v314 = ({
      ownerId: _v0,
      userRole: _v1,
      hrefColor: _v2
    }) => {
      let _v3 = (0, _v9.useContext)(_v32.ViewerContext);
      function _v4() {
        window.location.href = "/manage/videos";
      }
      return _v2 = _v2 || _v310, (0, _v6.jsx)(_v311, {
        children: (0, _v6.jsx)(_v312, {
          children: (0, _v6.jsx)(_v313, {
            hrefColor: _v2,
            href: "/manage/videos",
            onClick: _v0 => {
              _v0.preventDefault(), _v13.FatalAttraction.trackClick({
                container: "team_home_page",
                component: "manage_videos_link",
                keyword: "click_managed_videos_" + _v1.toLowerCase()
              }), fetch("/manage/videos?action=SWITCH_TEAMS", {
                body: JSON.stringify({
                  team_owner_id: _v0,
                  token: _v3?.xsrft
                }),
                method: "POST",
                headers: {
                  "X-Requested-With": "XMLHttpRequest",
                  "Content-Type": "application/json"
                }
              }).then(_v4);
            },
            children: (0, _v31.translate)({
              singular: "Manage videos",
              dictionary: {
                es: {
                  singular: "Gestionar videos"
                },
                "de-DE": {
                  singular: "Videos verwalten"
                },
                "fr-FR": {
                  singular: "Gérer les vidéos"
                },
                "ja-JP": {
                  singular: "動画の管理"
                },
                "ko-KR": {
                  singular: "동영상 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar vídeos"
                },
                "zh-CN": {
                  singular: "管理视频"
                }
              }
            })
          })
        })
      });
    };
  var _v315 = _v0.i(0);
  let _v316 = _v15.default.input.withConfig({
      displayName: "SearchFieldStyled__Input",
      componentId: "sc-c347d28e-0"
    })`
  border: none;
  &:focus {
    outline: none;
  }
`,
    _v317 = (0, _v15.default)(_v303.Search).withConfig({
      displayName: "SearchFieldStyled__SearchIcon",
      componentId: "sc-c347d28e-1"
    })`
  ${(0, _v14.size)((0, _v14.rem)(22))};
  path {
    fill: ${_v74.bokehTheme.colors.gray["200"]};
  }
`,
    _v318 = (0, _v15.default)(_v166.DismissX).withConfig({
      displayName: "SearchFieldStyled__CancelIcon",
      componentId: "sc-c347d28e-2"
    })`
  ${(0, _v14.size)((0, _v14.rem)(20))};
  path {
    fill: ${_v74.bokehTheme.colors.gray["200"]};
  }
`,
    _v319 = _v15.default.button.withConfig({
      displayName: "SearchFieldStyled__Button",
      componentId: "sc-c347d28e-3"
    })`
  ${(0, _v14.size)((0, _v14.rem)(38))};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`,
    _v320 = _v15.default.div.withConfig({
      displayName: "SearchFieldStyled__InputWrapper",
      componentId: "sc-c347d28e-4"
    })`
  position: absolute;
  z-index: 110;
  background-color: white;
  display: flex;
  padding: 0 ${(0, _v14.rem)(6)};
  border: 1px solid ${_v74.bokehTheme.colors.gray["200"]};
  ${function ({
      focused: _v0
    }) {
      if (_v0) return _v15.css`
    outline: ${_v74.bokehTheme.colors.blue["500"]} auto 5px;
  `;
    }}
`,
    _v321 = _v15.default.div.withConfig({
      displayName: "SearchFieldStyled__OuterWrapper",
      componentId: "sc-c347d28e-5"
    })`
  position: relative;
  display: inline-block;
  width: ${(0, _v14.rem)(180)};
`;
  function _v322({
    onChange: _v0,
    closeSearch: _v1,
    setShowSearchBar: _v2,
    autofocus: _v3
  }) {
    let {
        searchText: _v4,
        isSearching: _v5
      } = _v242(),
      _v6 = _v243(),
      [_v7, _v8] = (0, _v9.useState)(!1),
      _v9 = (0, _v9.useRef)(null),
      _v10 = (0, _v9.useCallback)(_v0 => {
        let {
          value: _v1
        } = _v0.currentTarget;
        _v0(_v1), _v6({
          type: "SEARCH_TEXT",
          payload: _v1
        });
      }, [_v0, _v5]);
    return (0, _v9.useEffect)(() => {
      _v9.current && _v3 && _v9.current.focus();
    }, [_v9]), (0, _v6.jsx)(_v321, {
      children: (0, _v6.jsxs)(_v320, {
        focused: _v7,
        children: [(0, _v6.jsx)(_v316, {
          "aria-label": (0, _v31.translate)({
            singular: "Search",
            dictionary: {
              es: {
                singular: "Buscar"
              },
              "de-DE": {
                singular: "Suchen"
              },
              "fr-FR": {
                singular: "Chercher"
              },
              "ja-JP": {
                singular: "検索"
              },
              "ko-KR": {
                singular: "검색"
              },
              "pt-BR": {
                singular: "Pesquisar"
              },
              "zh-CN": {
                singular: "搜索"
              }
            }
          }),
          ref: _v9,
          value: _v4,
          onChange: _v10,
          onFocus: function () {
            _v8(!0);
          },
          onBlur: function () {
            _v2 && !_v5 && _v2(!1), _v8(!1);
          }
        }), (0, _v6.jsx)(_v319, {
          onClick: _v5 ? function () {
            _v2 && _v2(!1), _v6({
              type: "SEARCH_TEXT",
              payload: ""
            }), _v1();
          } : void 0,
          "aria-label": (0, _v31.translate)({
            singular: "Search",
            dictionary: {
              es: {
                singular: "Buscar"
              },
              "de-DE": {
                singular: "Suchen"
              },
              "fr-FR": {
                singular: "Chercher"
              },
              "ja-JP": {
                singular: "検索"
              },
              "ko-KR": {
                singular: "검색"
              },
              "pt-BR": {
                singular: "Pesquisar"
              },
              "zh-CN": {
                singular: "搜索"
              }
            }
          }),
          children: _v5 ? (0, _v6.jsx)(_v318, {}) : (0, _v6.jsx)(_v317, {})
        })]
      })
    });
  }
  let _v323 = _v15.default.div.withConfig({
    displayName: "SearchStyled__SearchWrapper",
    componentId: "sc-364e7505-0"
  })`
  margin-right: ${(0, _v14.rem)(8)};
  height: ${(0, _v14.rem)(68)};
`;
  function _v324({
    setShowSearchBar: _v0,
    autofocus: _v1 = !0,
    className: _v2,
    teamRole: _v3
  }) {
    let _v4 = (0, _v9.useContext)(_v32.ViewerContext),
      {
        albumId: _v5,
        hashedPass: _v6
      } = (0, _v9.useContext)(_v100),
      _v7 = _v243(),
      {
        searchPage: _v8,
        searchText: _v9
      } = _v242(),
      _v10 = (0, _v9.useContext)(_v33);
    (0, _v9.useEffect)(() => {
      _v14(_v9);
    }, [_v8]);
    let _v11 = (0, _v9.useCallback)(() => {
        _v13.FatalAttraction.trackClick({
          container: "showcase",
          component: "search",
          keyword: "close_search"
        }), _v3 && _v13.FatalAttraction.trackClick({
          container: "team_home_page",
          component: "search",
          keyword: "close_search_" + _v3.toLowerCase()
        }), _v7({
          type: "CLOSE_SEARCH"
        });
      }, [_v7]),
      _v12 = (0, _v9.useCallback)(() => {
        _v7({
          type: "START_SEARCH"
        });
      }, [_v7]),
      _v13 = (0, _v9.useCallback)(async (_v0, _v1 = {}) => {
        let {
          headers: _v2 = {}
        } = _v1;
        _v13.FatalAttraction.trackClick({
          container: "showcase",
          component: "search",
          keyword: "execute_search"
        }), _v3 && _v13.FatalAttraction.trackClick({
          container: "team_home_page",
          component: "search",
          keyword: "execute_search_" + _v3.toLowerCase()
        });
        let _v3 = await fetch(`//${_v4 && _v4.apiUrl}${_v0}&per_page=25&page=${_v8}`, {
          method: "GET",
          ..._v1,
          headers: {
            Authorization: `jwt ${_v4 && _v4.jwt}`,
            Accept: "application/vnd.vimeo.*;version=3.4.1",
            "Content-Type": "application/json",
            ..._v2
          }
        });
        return await _v3.json();
      }, [_v4, _v8]),
      {
        debouncedCallback: _v14
      } = (0, _v315.useDebouncedCallback)(async _v0 => {
        if (_v0.length > 0) try {
          let _v0 = new URLSearchParams({
              query: _v0,
              _hashed_pass: _v6 || "",
              fields: _v97.join(","),
              referrer: document?.referrer || ""
            }),
            _v1 = `/albums/${_v5}/videos?${_v0.toString()}&is_embed=${_v10?.isShowcaseEmbeded}`,
            _v2 = await _v13(_v1, {
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            });
          _v2.data && _v2.data.length > 0 ? _v13.FatalAttraction.trackEvent({
            container: "showcase",
            component: "search",
            keyword: "results_shown"
          }) : _v13.FatalAttraction.trackEvent({
            container: "showcase",
            component: "search",
            keyword: "no_results"
          }), _v7({
            type: "SEARCH_SUCCESS",
            payload: _v2
          });
        } catch (_v0) {
          _v13.FatalAttraction.trackEvent({
            container: "showcase",
            component: "showcase-api-error",
            keyword: `showcase-api-error: ${_v0}`
          }), _v7({
            type: "SEARCH_ERROR"
          });
        }
      }, 0),
      _v15 = (0, _v9.useCallback)(_v0 => {
        _v0.length > 0 ? (_v12(), _v14(_v0), _v7({
          type: "SEARCH_TEXT",
          payload: _v0
        })) : _v11();
      }, [_v7]);
    return (0, _v6.jsx)(_v323, {
      className: _v2,
      title: "Search Field",
      children: (0, _v6.jsx)(_v322, {
        closeSearch: _v11,
        onChange: _v15,
        setShowSearchBar: _v0,
        autofocus: _v1
      })
    });
  }
  var _v325 = _v0.i(0);
  let _v326 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutNavStyled__CustomLogoWrapper",
      componentId: "sc-5ef86512-0"
    })`
  position: relative;
  width: 100px;
  overflow: hidden;
  max-height: 200px;
  img {
    width: 100%;
    height: auto;
  }
`,
    _v327 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "PlayerLayoutNavStyled__SearchButton",
      componentId: "sc-5ef86512-1"
    })`
  margin-right: ${(0, _v14.rem)(12)};
`,
    _v328 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "PlayerLayoutNavStyled__StartWatchingButton",
      componentId: "sc-5ef86512-2"
    })`
  margin: ${(0, _v14.rem)(10)} 0;
`,
    _v329 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutNavStyled__AlbumInfo",
      componentId: "sc-5ef86512-3"
    })`
  text-align: left;
`;
  (0, _v15.default)(_v43.Header).attrs({
    size: "1"
  }).withConfig({
    displayName: "PlayerLayoutNavStyled__AlbumTitle",
    componentId: "sc-5ef86512-4"
  })`
  font-weight: 300;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
  let _v330 = (0, _v15.default)(_v325.PaperPlane).withConfig({
    displayName: "PlayerLayoutNavStyled__ShareIcon",
    componentId: "sc-5ef86512-5"
  })`
  margin-left: ${(0, _v14.rem)(12)};
  path {
    fill: white;
  }
`;
  (0, _v15.default)(_v43.Header).attrs({
    size: "4"
  }).withConfig({
    displayName: "PlayerLayoutNavStyled__CurrentVideoTitle",
    componentId: "sc-5ef86512-6"
  })`
  margin-top: ${(0, _v14.rem)(4)};
  margin-bottom: ${(0, _v14.rem)(20)};
`;
  let _v331 = _v15.css`
  height: 45vh;
  background: linear-gradient(
    ${(0, _v14.rgba)(_v74.bokehTheme.colors.gray["800"], .35)} 0%,
    ${(0, _v14.rgba)(_v74.bokehTheme.colors.gray["800"], .2)} 35%,
    ${(0, _v14.rgba)(_v74.bokehTheme.colors.gray["800"], .1)} 70%,
    ${(0, _v14.rgba)(_v74.bokehTheme.colors.gray["800"], .015)} 85%,
    ${(0, _v14.rgba)(_v74.bokehTheme.colors.gray["800"], 0)} 100%
  );
`,
    _v332 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutNavStyled__InfoBar",
      componentId: "sc-5ef86512-7"
    })`
  width: 100%;

  padding: 0 ${(0, _v14.rem)(60)} ${({
      isSearching: _v0
    }) => !_v0 && (0, _v14.rem)(80)};

  ${({
      isSearching: _v0,
      thumbnail: _v1
    }) => _v0 && _v15.css`
        background: black;
      ` || _v1 && _v15.css`
        background-size: cover;
        background-image:
          linear-gradient(
            rgba(0, 0, 0, 0.25) 0%,
            rgba(0, 0, 0, 0.25) 50%,
            rgba(0, 0, 0, 0.25) 100%
          ),
          url(${_v1});
      ` || _v15.css`
      background: linear-gradient(
        to right,
        black,
        rgba(0, 0, 0, 0.95) 10%,
        rgba(0, 0, 0, 0.65) 30%,
        rgba(0, 0, 0, 0.15) 50%,
        rgba(0, 0, 0, 0.05) 90%,
        transparent 100%
      );
    `};

  z-index: 101;

  @media screen and (max-width: 500px) {
    padding: 0
      ${({
      isSearching: _v0
    }) => _v0 ? `${(0, _v14.rem)(40)} ${(0, _v14.rem)(80)}` : `${(0, _v14.rem)(40)}`};
  }

  ${({
      isEmpty: _v0
    }) => _v0 && _v331}
  ${_v329} {
    ${function ({
      isSearching: _v0
    }) {
      return _v15.css`
    display: ${_v0 ? "none" : "inherit"};
  `;
    }}
  }
`,
    _v333 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutNavStyled__CountAndShareButton",
      componentId: "sc-5ef86512-8"
    })`
  height: ${(0, _v14.rem)(90)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-bottom: ${({
      isSearching: _v0
    }) => _v0 ? "1rem" : "2rem"};
  padding-top: 1.5rem;
`,
    _v334 = _v15.default.span.withConfig({
      displayName: "PlayerLayoutNavStyled__VideoCount",
      componentId: "sc-5ef86512-9"
    })`
  color: white;
`,
    _v335 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutNav__InfoContainer",
      componentId: "sc-f6c2d29d-0"
    })`
  width: 100%;
  max-width: ${(0, _v14.rem)(0)};
  margin: 0 auto;
`;
  function _v336({
    albumName: _v0,
    brandColor: _v1,
    customLogo: _v2,
    webCustomLogo: _v3,
    description: _v4,
    onPlay: _v5,
    openShare: _v6,
    videoTotal: _v7 = 0,
    allowShare: _v8,
    albumOwnerId: _v9,
    teamRole: _v10,
    thumbnail: _v11
  }) {
    let _v12 = _v3 && _v2 && _v2.active,
      _v13 = (0, _v9.useContext)(_v33),
      {
        isSearching: _v14
      } = _v242(),
      [_v15, _v16] = (0, _v9.useState)(!1),
      _v17 = _v12 ? _v151(_v2) : void 0;
    return (0, _v6.jsx)(_v332, {
      isEmpty: 0 === _v7,
      isSearching: _v14,
      thumbnail: _v11,
      children: (0, _v6.jsxs)(_v335, {
        children: [(0, _v6.jsxs)(_v333, {
          isSearching: _v14,
          children: [_v9 && _v10 && !_v13?.isShowcaseEmbeded && (0, _v6.jsx)(_v314, {
            ownerId: _v9,
            userRole: _v10
          }), !_v15 && (0, _v6.jsx)(_v327, {
            "aria-label": (0, _v31.translate)({
              singular: "Search",
              dictionary: {
                es: {
                  singular: "Buscar"
                },
                "de-DE": {
                  singular: "Suchen"
                },
                "fr-FR": {
                  singular: "Chercher"
                },
                "ja-JP": {
                  singular: "検索"
                },
                "ko-KR": {
                  singular: "검색"
                },
                "pt-BR": {
                  singular: "Pesquisar"
                },
                "zh-CN": {
                  singular: "搜索"
                }
              }
            }),
            format: "secondary",
            theme: _v52.themes.dark,
            icon: (0, _v6.jsx)(_v303.Search, {}),
            onClick: () => {
              _v13.FatalAttraction.trackClick({
                container: "showcase",
                component: "search",
                keyword: "open_search"
              }), _v10 && _v13.FatalAttraction.trackClick({
                container: "team_home_page",
                component: "search",
                keyword: "open_search_" + _v10.toLowerCase()
              }), _v16(!0);
            }
          }), _v15 && (0, _v6.jsx)(_v324, {
            setShowSearchBar: _v16,
            teamRole: _v10
          }), (0, _v6.jsx)(_v334, {
            children: 0 === _v7 ? _v226 : (0, _v31.translate)({
              count: _v7,
              singular: "{COUNT} video",
              plural: "{COUNT} videos",
              replacements: {
                COUNT: _v7
              },
              dictionary: {
                "de-DE": {
                  singular: "{COUNT} Video",
                  plural: "{COUNT} Videos"
                },
                "fr-FR": {
                  singular: "{COUNT} vidéo",
                  plural: "{COUNT} vidéos"
                },
                "ja-JP": {
                  singular: "{COUNT} 件の動画",
                  plural: "{COUNT}件の動画"
                },
                "ko-KR": {
                  singular: "동영상 {COUNT}개",
                  plural: "동영상 {COUNT}개"
                },
                "pt-BR": {
                  singular: "{COUNT} vídeo",
                  plural: "{COUNT} vídeos"
                },
                "zh-CN": {
                  singular: "{COUNT} 个视频",
                  plural: "{COUNT} 个视频"
                }
              }
            })
          }), _v8 && (0, _v6.jsx)(_v40.Button, {
            format: "basic",
            variant: "hyperminimal",
            onClick: () => {
              _v10 && _v13.FatalAttraction.trackClick({
                container: "team_home_page",
                component: "share_modal",
                keyword: "open_share_" + _v10.toLowerCase()
              }), _v6();
            },
            size: "sm",
            icon: (0, _v6.jsx)(_v330, {})
          })]
        }), _v12 && !_v14 && (0, _v6.jsx)(_v326, {
          children: (0, _v6.jsx)("img", {
            src: _v17,
            alt: _v0
          })
        }), (0, _v6.jsxs)(_v329, {
          children: [(0, _v6.jsx)(_v306, {
            theme: _v52.themes.dark,
            children: _v0
          }), _v4 && (0, _v6.jsx)(_v308, {
            theme: _v52.themes.dark,
            children: _v4
          }), _v7 > 0 && (0, _v6.jsx)(_v328, {
            format: "primary",
            theme: {
              ..._v52.themes.dark,
              formats: {
                primary: _v1
              }
            },
            icon: (0, _v6.jsx)(_v302.Play, {
              style: {
                height: (0, _v14.rem)(18),
                width: (0, _v14.rem)(18),
                marginRight: (0, _v14.rem)(4)
              }
            }),
            onClick: () => {
              _v5(), _v13.FatalAttraction.trackClick({
                container: "showcase",
                component: "start_watching"
              });
            },
            size: "md",
            children: (0, _v31.translate)({
              singular: "Start watching",
              dictionary: {
                es: {
                  singular: "Empezar a ver"
                },
                "de-DE": {
                  singular: "Jetzt Videos anschauen"
                },
                "fr-FR": {
                  singular: "Regarder"
                },
                "ja-JP": {
                  singular: "視聴開始"
                },
                "ko-KR": {
                  singular: "동영상 보기"
                },
                "pt-BR": {
                  singular: "Comece a assistir"
                },
                "zh-CN": {
                  singular: "开始观看"
                }
              }
            })
          })]
        })]
      })
    });
  }
  var _v337 = _v0.i(0);
  let _v338 = _v15.default.div.withConfig({
      displayName: "LiveGridItem__Item",
      componentId: "sc-17934575-0"
    })`
  flex: 0 1 ${(0, _v14.rem)(280)};
  display: block;
  width: 100%;
  padding: ${(0, _v14.rem)(10)} ${(0, _v14.rem)(10)} ${(0, _v14.rem)(20)};
  position: relative;
  overflow: hidden;
`,
    _v339 = _v15.default.div.withConfig({
      displayName: "LiveGridItem__Badge",
      componentId: "sc-17934575-1"
    })`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  right: ${(0, _v14.rem)(15)};
  bottom: ${(0, _v14.rem)(15)};
  padding: ${(0, _v14.rem)(2)} ${(0, _v14.rem)(8)};
  font-size: ${(0, _v14.rem)(12)};
  font-weight: normal;
  border-radius: ${(0, _v14.rem)(2)};
`,
    _v340 = _v15.default.div.withConfig({
      displayName: "LiveGridItem__ThumbContainer",
      componentId: "sc-17934575-2"
    })`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  max-height: ${(0, _v14.rem)(200)};
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: black;

  &::before {
    content: ' ';
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.2s ease-out;
  }

  &:hover {
    & > svg {
      opacity: 1;
    }

    &::before {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`,
    _v341 = _v15.default.img.withConfig({
      displayName: "LiveGridItem__ThumbImg",
      componentId: "sc-17934575-3"
    })`
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`,
    _v342 = _v15.default.div.withConfig({
      displayName: "LiveGridItem__TitleWrapper",
      componentId: "sc-17934575-4"
    })`
  margin: ${(0, _v14.rem)(10)} 0 0;
  cursor: pointer;
`,
    _v343 = (0, _v15.default)(_v43.Header).attrs({
      size: "5"
    }).withConfig({
      displayName: "LiveGridItem__Title",
      componentId: "sc-17934575-5"
    })`
  display: block;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: ${(0, _v14.rem)(5)};
  max-height: ${(0, _v14.rem)(39)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${_v0 => "dark" === _v0.albumTheme ? _v74.bokehTheme.colors.white : "black"};
`,
    _v344 = (0, _v15.default)(_v141.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "LiveGridItem__Description",
      componentId: "sc-17934575-6"
    })`
  display: block;
  display: -webkit-box;
  margin-bottom: 0;
  font-weight: normal;
  max-height: ${(0, _v14.rem)(38)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${_v0 => "dark" === _v0.albumTheme ? _v74.bokehTheme.colors.gray["200"] : _v74.bokehTheme.colors.gray["500"]};
`,
    _v345 = (0, _v15.default)(_v339).withConfig({
      displayName: "LiveGridItem__StreamingBadge",
      componentId: "sc-17934575-7"
    })`
  background-color: ${_v74.bokehTheme.colors.red["500"]};
`,
    _v346 = (0, _v15.default)(_v337.CircleFilled).withConfig({
      displayName: "LiveGridItem__RecordIcon",
      componentId: "sc-17934575-8"
    })`
  width: ${(0, _v14.rem)(7)};
  height: ${(0, _v14.rem)(7)};
  margin-bottom: ${(0, _v14.rem)(1)};
  circle {
    fill: white;
  }
`,
    _v347 = _v15.default.span.withConfig({
      displayName: "LiveGridItem__DownloadButtonContainer",
      componentId: "sc-17934575-9"
    })`
  position: absolute;
  bottom: ${(0, _v14.rem)(10)};
  left: ${(0, _v14.rem)(10)};
  z-index: 3;
`,
    _v348 = (0, _v15.default)(_v302.Play).withConfig({
      displayName: "LiveGridItem__PlayIcon",
      componentId: "sc-17934575-10"
    })`
  background: ${_v0 => _v0.brandColor ? _v0.brandColor : _v74.bokehTheme.colors.blue["500"]};
  padding: ${(0, _v14.rem)(8)} ${(0, _v14.rem)(20)};
  z-index: 2;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: ${(0, _v14.rem)(70)};
  border-radius: ${(0, _v14.rem)(5)};
  max-height: ${(0, _v14.rem)(46)};
  transition: opacity 0.2s ease-out;

  path {
    fill: ${_v0 => _v0.brandColor ? (0, _v14.readableColor)(_v0.brandColor) : (0, _v14.readableColor)(_v74.bokehTheme.colors.blue["500"])};
  }
`,
    _v349 = ({
      brandColor: _v0,
      description: _v1,
      duration: _v2,
      onPlay: _v3,
      theme: _v4,
      thumbnails: _v5,
      title: _v6,
      type: _v7,
      live: _v8,
      allowDownloads: _v9,
      setDownloadClipId: _v10,
      openDownloadModal: _v11,
      displayType: _v12,
      videoId: _v13
    }) => {
      let _v14 = _v5.sizes[0],
        _v15 = _v14.link.substring(0, _v14.link.lastIndexOf("_")),
        _v16 = _v14 && _v14.link ? `${_v15}_640x350` : void 0,
        _v17 = `${_v15}_640x350 640w, ${_v15}_960x525 960w, ${_v15}_1280x700 1280w`,
        _v18 = "live" !== _v7 || !_v8 || "done" === _v8.status,
        _v19 = _v8 && "streaming" === _v8.status,
        _v20 = _v8 && ("unavailable" === _v8.status || "pending" === _v8.status || "ready" === _v8.status);
      return (0, _v6.jsxs)(_v338, {
        children: [(0, _v6.jsxs)(_v340, {
          onClick: _v3,
          children: [(0, _v6.jsx)(_v348, {
            brandColor: _v0
          }), (0, _v6.jsx)(_v341, {
            src: _v16,
            srcSet: _v17,
            alt: _v6
          }), _v18 && (0, _v6.jsx)(_v339, {
            children: _v155(_v2, "mm:ss")
          }), _v9 && _v18 && (0, _v6.jsx)(_v347, {
            title: (0, _v31.translate)({
              singular: "Download",
              dictionary: {
                es: {
                  singular: "Descargar"
                },
                "de-DE": {
                  singular: "Herunterladen"
                },
                "fr-FR": {
                  singular: "Télécharger "
                },
                "ja-JP": {
                  singular: "ダウンロード"
                },
                "ko-KR": {
                  singular: "다운로드"
                },
                "pt-BR": {
                  singular: "Baixar"
                },
                "zh-CN": {
                  singular: "下载"
                }
              }
            }),
            children: (0, _v6.jsx)(_v40.Button, {
              icon: (0, _v6.jsx)(_v246.DownloadArrow, {}),
              format: "basic",
              variant: "hyperminimal",
              size: "md",
              onClick: _v0 => {
                _v0.stopPropagation(), "CLIP_PLACEHOLDER" !== _v12 && _v10 && _v11 && (_v10(_v13), _v11());
              }
            })
          }), _v19 && (0, _v6.jsxs)(_v345, {
            children: [(0, _v6.jsx)(_v346, {}), " LIVE"]
          }), _v20 && (0, _v6.jsx)(_v339, {
            children: "UPCOMING"
          })]
        }), (0, _v6.jsxs)("div", {
          children: [(0, _v6.jsx)(_v342, {
            title: _v6,
            onClick: _v3,
            children: (0, _v6.jsx)(_v343, {
              albumTheme: _v4,
              children: _v6
            })
          }), _v1 && (0, _v6.jsx)(_v344, {
            albumTheme: _v4,
            children: _v1
          })]
        })]
      });
    },
    _v350 = (0, _v15.default)(_v16.Spinner).withConfig({
      displayName: "LoadingSpinner",
      componentId: "sc-e59f07a1-0"
    })`
  margin: 30vh auto 40vh;
  display: flex;
  justify-content: center;
`;
  var _v351 = _v9,
    _v352 = _v0.i(0);
  let _v353 = _v15.default.header.withConfig({
      displayName: "Styles__PageControlHeader",
      componentId: "sc-55a6c06b-0"
    })`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 25px;
  > * {
    margin-left: 15px;
  }
`,
    _v354 = (0, _v15.default)(_v43.Header).attrs({
      size: "5"
    }).withConfig({
      displayName: "Styles__NoWrapHeader",
      componentId: "sc-55a6c06b-1"
    })`
  display: flex;
  align-items: center;
  white-space: nowrap;
`,
    _v355 = _v15.default.footer.withConfig({
      displayName: "Styles__PageControlFooter",
      componentId: "sc-55a6c06b-2"
    })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
`,
    _v356 = _v15.default.div.withConfig({
      displayName: "Styles__NextButtonWrapper",
      componentId: "sc-55a6c06b-3"
    })`
  @media only screen and (min-width: 768px) {
    transform: translateX(50%);
  }
`,
    _v357 = _v15.default.div.withConfig({
      displayName: "Styles__PageControls",
      componentId: "sc-55a6c06b-4"
    })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 15px;

  > * {
    margin: 0 15px;
  }
`,
    _v358 = (0, _v15.default)(_v352.ChevronRight).withConfig({
      displayName: "Styles__ChevronLeft",
      componentId: "sc-55a6c06b-5"
    })`
  transform: rotate(180deg);
`,
    _v359 = (0, _v15.default)(_v41.Input).withConfig({
      displayName: "Styles__PageNumberInput",
      componentId: "sc-55a6c06b-6"
    })`
  text-align: center;
  min-width: ${(0, _v14.rem)(40)};
`;
  class _v360 extends _v351.Component {
    state = {
      pageNumber: this.props.currentPage || 1
    };
    onInput = _v0 => {
      _v0.preventDefault();
      let {
          pageSize: _v1 = 12,
          totalItems: _v2
        } = this.props,
        _v3 = Math.ceil(_v2 / _v1),
        _v4 = parseInt(_v0.currentTarget.value, 10);
      _v4 > 0 && _v4 <= _v3 && _v4 !== this.state.pageNumber ? this.setState({
        pageNumber: _v4
      }) : isNaN(_v4) && this.setState({
        pageNumber: null
      });
    };
    onSet = _v0 => {
      let {
        onSetPage: _v1
      } = this.props;
      this.state.pageNumber !== _v0 && this.setState({
        pageNumber: _v0
      }), this.scrollToTop(), _v1(_v0);
    };
    onPressEnter = _v0 => {
      let {
        onSetPage: _v1
      } = this.props;
      "Enter" === _v0.key && !isNaN(this.state.pageNumber) && this.state.pageNumber && (this.scrollToTop(), _v1(this.state.pageNumber));
    };
    scrollToTop = () => {
      let {
        layout: _v0
      } = this.props;
      if ("live" === _v0) {
        let _v0 = window.innerWidth > 767 ? .8 * window.innerHeight - 50 : 460;
        window.scroll(0, _v0);
      } else window.scrollTo(0, 0);
    };
    render() {
      let {
          theme: _v0 = "standard",
          currentPage: _v1 = 1,
          pageSize: _v2 = 12,
          totalItems: _v3
        } = this.props,
        _v4 = Math.ceil(_v3 / _v2);
      return (0, _v6.jsx)("div", {
        children: _v4 > 1 && (0, _v6.jsxs)(_v355, {
          children: [(0, _v6.jsx)(_v356, {
            children: (0, _v6.jsx)(_v40.Button, {
              format: "secondary",
              theme: "standard" === _v0 ? _v52.themes.light : _v52.themes.dark,
              disabled: _v1 === _v4,
              onClick: () => {
                this.onSet(_v1 + 1), _v13.FatalAttraction.trackClick({
                  container: "showcase",
                  component: "pages",
                  keyword: "next_footer"
                });
              },
              children: (0, _v31.translate)({
                singular: "Next",
                dictionary: {
                  es: {
                    singular: "Siguiente"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Suivant"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "다음"
                  },
                  "pt-BR": {
                    singular: "Próxima"
                  },
                  "zh-CN": {
                    singular: "下一步"
                  }
                }
              })
            })
          }), (0, _v6.jsxs)(_v357, {
            children: [(0, _v6.jsx)(_v40.Button, {
              size: "md",
              format: "secondary",
              theme: "standard" === _v0 ? _v52.themes.light : _v52.themes.dark,
              icon: (0, _v6.jsx)(_v358, {}),
              disabled: 1 === _v1,
              onClick: () => {
                this.onSet(_v1 - 1), _v13.FatalAttraction.trackClick({
                  container: "showcase",
                  component: "pages",
                  keyword: "previous"
                });
              }
            }), (0, _v6.jsx)(_v359, {
              id: "page-number",
              name: "page-number",
              label: !1,
              value: this.state.pageNumber ? this.state.pageNumber : "",
              onChange: this.onInput,
              onKeyDown: this.onPressEnter,
              style: {
                width: this.state.pageNumber ? 25 + 8 * this.state.pageNumber.toString().length : 40
              }
            }), (0, _v6.jsx)(_v40.Button, {
              size: "md",
              format: "secondary",
              theme: "standard" === _v0 ? _v52.themes.light : _v52.themes.dark,
              icon: (0, _v6.jsx)(_v352.ChevronRight, {}),
              disabled: _v1 === _v4,
              onClick: () => {
                this.onSet(_v1 + 1), _v13.FatalAttraction.trackClick({
                  container: "showcase",
                  component: "pages",
                  keyword: "next"
                });
              }
            }), (0, _v6.jsx)(_v354, {
              style: {
                margin: 0
              },
              children: (0, _v6.jsxs)("span", {
                children: ["of ", _v4]
              })
            })]
          })]
        })
      });
    }
  }
  function _v361() {
    return (_v361 = Object.assign.bind()).apply(null, arguments);
  }
  let _v362 = function (_v0) {
    return _v9.createElement("svg", _v361({
      width: 130,
      height: 69,
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v4 || (_v4 = _v9.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, _v9.createElement("path", {
      d: "M123.195 37.687c0-.702-.574-1.272-1.28-1.272-.708 0-1.28.57-1.28 1.272 0 .703.572 1.273 1.28 1.273.706 0 1.28-.57 1.28-1.273M112 4.273C112 3.57 111.426 3 110.72 3c-.708 0-1.281.57-1.281 1.273s.573 1.273 1.28 1.273c.707 0 1.281-.57 1.281-1.273",
      fill: "#CFE0ED"
    }), _v9.createElement("path", {
      d: "M114.439 50.092A2.558 2.558 0 01117 47.546 2.558 2.558 0 01114.439 45a2.559 2.559 0 01-2.561 2.546 2.559 2.559 0 012.561 2.546z",
      fill: "#1A2E3B"
    }), _v9.createElement("path", {
      d: "M10.484 58.078c.31-1.925 1.406-3.089 3.446-3.425a.08.08 0 000-.158c-2.112-.347-3.137-1.5-3.446-3.425a.08.08 0 00-.159 0c-.309 1.925-1.299 3.114-3.446 3.425-.094.014-.093.142 0 .158 2.093.336 3.137 1.5 3.446 3.425a.08.08 0 00.16 0",
      fill: "#8498A4"
    }), _v9.createElement("path", {
      fill: "#1A2E3B",
      d: "M2.5 29l-.625 1.875L0 31.5l1.875.625L2.5 34l.625-1.875L5 31.5l-1.875-.625zM128.023 50.875a.822.822 0 000 1.166.834.834 0 001.173 0 .822.822 0 000-1.166.834.834 0 00-1.173 0"
    }), _v9.createElement("path", {
      d: "M7.658 43.485a.822.822 0 000 1.166.834.834 0 001.173 0 .822.822 0 000-1.166.834.834 0 00-1.173 0M9.838 11.176l3.502 1.169-3.502 1.168-1.168 3.503-1.168-3.503L4 12.345v-.001l3.502-1.168L8.67 7.672z",
      fill: "#CFE0ED"
    }), _v9.createElement("path", {
      d: "M19.723 28.193c0-3.238 2.64-5.88 5.877-5.88-3.237 0-5.877-2.642-5.877-5.88 0 3.238-2.64 5.88-5.877 5.88 3.236 0 5.877 2.642 5.877 5.88z",
      fill: "#EEF1F2"
    }), _v9.createElement("path", {
      fill: "#CFE0ED",
      d: "M23.856 41l-.759 1.386-1.385.759 1.385.758.759 1.386.757-1.386L26 43.145l-1.386-.76z"
    }), _v9.createElement("path", {
      d: "M112.877 23.565a1.752 1.752 0 10-3.505 0 1.752 1.752 0 003.505 0",
      fill: "#8498A4"
    }), _v9.createElement("path", {
      d: "M122.836 18.76c0-3.238 2.64-5.88 5.877-5.88-3.237 0-5.877-2.642-5.877-5.88 0 3.238-2.64 5.88-5.877 5.88 3.237 0 5.877 2.642 5.877 5.88z",
      fill: "#EEF1F2"
    }), _v9.createElement("circle", {
      fill: "#8498A4",
      fillRule: "nonzero",
      cx: 66.146,
      cy: 34.146,
      r: 34.146
    }), _v9.createElement("g", {
      transform: "translate(53 21)",
      stroke: "#1A2E3B",
      strokeWidth: 2
    }, _v9.createElement("circle", {
      cx: 11.012,
      cy: 11.012,
      r: 11
    }), _v9.createElement("path", {
      d: "M19 20l6.83 6.83",
      strokeLinecap: "round"
    })))));
  };
  function _v363() {
    return (_v363 = Object.assign.bind()).apply(null, arguments);
  }
  let _v364 = (0, _v15.default)(_v141.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "SearchGridStyled__Paragraph",
      componentId: "sc-2479d2c4-0"
    })`
  color: white;
  margin-top: ${(0, _v14.rem)(14)};
`,
    _v365 = (0, _v15.default)(_v43.Header).attrs({
      size: "2"
    }).withConfig({
      displayName: "SearchGridStyled__Header",
      componentId: "sc-2479d2c4-1"
    })`
  color: white;
`,
    _v366 = (0, _v15.default)(function (_v0) {
      return _v9.createElement("svg", _v363({
        width: 69,
        height: 69,
        xmlns: "http://www.w3.org/2000/svg"
      }, _v0), _v5 || (_v5 = _v9.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _v9.createElement("circle", {
        fill: "#8498A4",
        fillRule: "nonzero",
        cx: 34.146,
        cy: 34.146,
        r: 34.146
      }), _v9.createElement("g", {
        transform: "translate(17 17)"
      }, _v9.createElement("path", {
        d: "M17.638 1.748L32.416 28.35A1.111 1.111 0 0131.445 30H1.888a1.111 1.111 0 01-.97-1.65L15.694 1.747a1.111 1.111 0 011.943 0z",
        stroke: "#1A2E3B",
        strokeWidth: 2,
        strokeLinecap: "square"
      }), _v9.createElement("circle", {
        fill: "#1A2E3B",
        cx: 16.667,
        cy: 23.333,
        r: 1.111
      }), _v9.createElement("path", {
        stroke: "#1A2E3B",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "bevel",
        d: "M16.667 13.333v6"
      })))));
    }).withConfig({
      displayName: "SearchGridStyled__ErrorIcon",
      componentId: "sc-2479d2c4-2"
    })`
  margin-bottom: ${(0, _v14.rem)(14)};
`,
    _v367 = _v15.default.div.withConfig({
      displayName: "SearchGridStyled__MessageWrapper",
      componentId: "sc-2479d2c4-3"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`,
    _v368 = _v15.default.div.withConfig({
      displayName: "SearchGridStyled__Background",
      componentId: "sc-2479d2c4-4"
    })`
  background: black;
  height: calc(100vh + 80px);
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`,
    _v369 = _v15.default.div.withConfig({
      displayName: "SearchGridStyled__Grid",
      componentId: "sc-2479d2c4-5"
    })`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  display: grid;
  margin: 0 auto;
  padding: ${(0, _v14.rem)(25)};
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(${(0, _v14.rem)("280px")}, 1fr));
  min-width: ${(0, _v14.rem)(330)};
  left: 0;
  ${({
      navIsHidden: _v0
    }) => _v15.css`
    top: ${_v0 ? (0, _v14.rem)(80) : (0, _v14.rem)(64)};
  `}
  width: 100vw;
  background: black;

  @media only screen and (max-width: 767px) {
    padding: ${(0, _v14.rem)(10)};
  }
`,
    _v370 = _v15.default.div.withConfig({
      displayName: "SearchGridStyled__PaginationWrapper",
      componentId: "sc-2479d2c4-6"
    })`
  padding-right: 20px;
  background: black;
  padding-bottom: 100px;
  position: relative;
  ${({
      navIsHidden: _v0
    }) => _v15.css`
    top: ${_v0 ? (0, _v14.rem)(80) : (0, _v14.rem)(64)};
  `}
`,
    _v371 = function ({
      results: _v0,
      hasErrored: _v1,
      isLoading: _v2,
      onPlay: _v3,
      page: _v4,
      totalVideos: _v5
    }) {
      let {
          navIsHidden: _v6
        } = (0, _v9.useContext)(_v100),
        _v7 = _v243(),
        _v8 = "dark";
      return (0, _v6.jsx)(_v368, {
        navIsHidden: _v6,
        children: _v2 ? (0, _v6.jsx)(_v350, {}) : _v1 ? (0, _v6.jsxs)(_v367, {
          children: [(0, _v6.jsx)(_v366, {}), (0, _v6.jsx)(_v365, {
            children: (0, _v31.translate)({
              singular: "Please try again",
              dictionary: {
                es: {
                  singular: "Inténtalo de nuevo"
                },
                "de-DE": {
                  singular: "Bitte versuche es erneut."
                },
                "fr-FR": {
                  singular: "Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "再度お試しください"
                },
                "ko-KR": {
                  singular: "다시 시도해주세요"
                },
                "pt-BR": {
                  singular: "Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "请重试"
                }
              }
            })
          }), (0, _v6.jsx)(_v364, {
            children: (0, _v31.translate)({
              singular: "Sorry, something went wrong during your search.",
              dictionary: {
                es: {
                  singular: "Lo sentimos, algo salió mal durante la búsqueda."
                },
                "de-DE": {
                  singular: "Leider ist bei deiner Suche etwas schief gegangen."
                },
                "fr-FR": {
                  singular: "Désolé, une erreur s'est produite lors de votre recherche."
                },
                "ja-JP": {
                  singular: "申し訳ありません、検索中に問題が発生しました。"
                },
                "ko-KR": {
                  singular: "죄송합니다, 검색 중 문제가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Desculpe, ocorreu um erro durante sua pesquisa."
                },
                "zh-CN": {
                  singular: "抱歉，搜索过程中出现问题。"
                }
              }
            })
          })]
        }) : _v0 && _v0.length > 0 ? (0, _v6.jsxs)("div", {
          children: [(0, _v6.jsx)(_v369, {
            navIsHidden: _v6,
            children: _v0.map(_v0 => {
              let _v1 = _v148(_v0?.uri, _v83),
                _v2 = _v0 && _v0.privacy && _v0.privacy.view === _v86;
              return (0, _v6.jsx)(_v349, {
                brandColor: "#4e4e4e",
                title: _v0.name,
                description: _v0.description,
                duration: _v0.duration,
                thumbnails: _v0.pictures,
                theme: _v8,
                onPlay: () => {
                  _v13.FatalAttraction.trackClick({
                    container: "showcase",
                    component: "search",
                    keyword: "select_video"
                  }), _v3(_v1, _v2, _v0);
                },
                type: "",
                allowDownloads: !1,
                displayType: "",
                videoId: _v1
              }, _v0.uri);
            })
          }), (0, _v6.jsx)(_v370, {
            navIsHidden: _v6,
            children: (0, _v6.jsx)(_v360, {
              theme: _v8,
              currentPage: _v4,
              totalItems: _v5,
              onSetPage: _v0 => {
                _v7({
                  type: "SEARCH_PAGE",
                  payload: _v0
                });
              },
              pageSize: 25
            })
          })]
        }) : (0, _v6.jsxs)(_v367, {
          children: [(0, _v6.jsx)(_v362, {}), (0, _v6.jsx)(_v364, {
            children: (0, _v31.translate)({
              singular: "No results. Try again?",
              dictionary: {
                es: {
                  singular: "Sin resultados. Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Keine Ergebnisse. Nochmal versuchen?"
                },
                "fr-FR": {
                  singular: "Aucun résultat. Souhaitez-vous réessayer ?"
                },
                "ja-JP": {
                  singular: "結果がありません。再試行しますか？"
                },
                "ko-KR": {
                  singular: "결과가 없습니다. 다시 시도할까요?"
                },
                "pt-BR": {
                  singular: "Nenhum resultado. Tente novamente."
                },
                "zh-CN": {
                  singular: "无结果。再试一次？"
                }
              }
            })
          })]
        })
      });
    },
    _v372 = (0, _v15.default)(_v352.ChevronRight).withConfig({
      displayName: "PlayerLayoutStyled__PreviousIcon",
      componentId: "sc-8c84d5ef-0"
    })`
  transform: rotate(180deg);
`,
    _v373 = _v15.css`
  padding-bottom: ${(0, _v14.rem)("72px")};
`,
    _v374 = _v15.css`
  background-color: ${_v74.bokehTheme.colors.gray["800"]};
`;
  _v15.default.section.withConfig({
    displayName: "PlayerLayoutStyled__PlayerLayoutSection",
    componentId: "sc-8c84d5ef-1"
  })`
  ${({
    isEmpty: _v0
  }) => _v0 && _v374}
  ${({
    padBottom: _v0
  }) => _v0 && _v373}
`;
  let _v375 = _v15.css`
  z-index: ${103};
  height: 65vh;

  @media only screen and (max-width: 960px) {
    height: 50vh;
  }

  @media only screen and (max-width: 767px) {
    height: 40vh;
  }
`,
    _v376 = _v15.css`
  display: none;
`,
    _v377 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutStyled__FeaturedPlayer",
      componentId: "sc-8c84d5ef-2"
    })`
  width: 100%;
  ${function ({
      isSearching: _v0 = null
    }) {
      return _v15.css`
    min-height: ${_v0 ? "none" : "40vh"};
  `;
    }}
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: black;
  transition: min-height 0.25s linear;

  ${_v0 => _v0.isPlayerActive ? _v375 : null};

  iframe {
    ${_v0 => _v0.isLoadingPlayerIframe ? _v376 : null};
    border: none;
    height: 100%;
    width: 100%;
  }
`,
    _v378 = _v15.css`
  @media only screen and (max-width: 480px) {
    width: 10vw;
  }
`,
    _v379 = _v15.css`
  @media only screen and (max-width: 480px) {
    width: 24px;
  }
`,
    _v380 = _v15.css`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${104};
  opacity: 0.25;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`,
    _v381 = _v15.css`
  width: 40px;
  path {
    fill: white;
  }
`,
    _v382 = (0, _v15.default)(_v372).withConfig({
      displayName: "PlayerLayoutStyled__PreviousIconStyled",
      componentId: "sc-8c84d5ef-3"
    })`
  ${_v381}
  ${_v379};
`,
    _v383 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutStyled__PreviousButton",
      componentId: "sc-8c84d5ef-4"
    })`
  ${_v380};
  ${_v378};
  left: 0;
`,
    _v384 = (0, _v15.default)(_v352.ChevronRight).withConfig({
      displayName: "PlayerLayoutStyled__NextIconStyled",
      componentId: "sc-8c84d5ef-5"
    })`
  ${_v381};
  ${_v379};
  margin-top: -55px;
`,
    _v385 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutStyled__NextButton",
      componentId: "sc-8c84d5ef-6"
    })`
  ${_v380};
  ${_v378};
  top: 55px;
  right: 0;
`,
    _v386 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutStyled__CloseButton",
      componentId: "sc-8c84d5ef-7"
    })`
  position: absolute;
  top: 2%;
  right: 0;
  width: 5vw;
  z-index: ${104};
  opacity: 0.25;
  cursor: pointer;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`,
    _v387 = (0, _v15.default)(_v166.DismissX).withConfig({
      displayName: "PlayerLayoutStyled__CloseIconStyled",
      componentId: "sc-8c84d5ef-8"
    })`
  width: 32px;
  path {
    fill: white;
  }
  ${_v379};
`,
    _v388 = "100vw",
    _v389 = "90vw",
    _v390 = "80vw",
    _v391 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutStyled__PlayerElement",
      componentId: "sc-8c84d5ef-9"
    })`
  position: absolute;
  width: ${_v389};
  height: 100%;
  left: calc((${_v388} - ${_v389}) / 2);
  @media only screen and (max-width: 480px) {
    width: ${_v390};
    left: calc((${_v388} - ${_v390}) / 2);
  }
`,
    _v392 = _v15.default.div.withConfig({
      displayName: "PlayerLayoutStyled__TitleCard",
      componentId: "sc-8c84d5ef-10"
    })`
  z-index: ${100};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  ${function ({
      isSearching: _v0 = null
    }) {
      return _v15.css`
    display: ${_v0 ? "none" : "inherit"};
  `;
    }}
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 100%),
    url(${_v0 => _v0.thumbnail || ""});
`,
    _v393 = ({
      albumName: _v0,
      brandColor: _v1,
      customLogo: _v2,
      webCustomLogo: _v3,
      description: _v4,
      onNext: _v5,
      onPlay: _v6,
      onPrevious: _v7,
      onStop: _v8,
      openShare: _v9,
      selectedVideo: _v10,
      selectedVideoId: _v11,
      skipTitleCard: _v12,
      totalVideos: _v13,
      albumId: _v14,
      allowShare: _v15,
      continuousPlay: _v16 = !1,
      baseUrl: _v17,
      jwt: _v18,
      hashedPass: _v19,
      albumOwnerId: _v20,
      teamRole: _v21
    }) => {
      let [_v22, _v23] = (0, _v9.useState)(!_v12),
        [_v24, _v25] = (0, _v9.useState)(_v12),
        [_v26, _v27] = (0, _v9.useState)(_v12),
        [_v28, _v29] = (0, _v9.useState)(!1),
        {
          isSearching: _v30
        } = _v242(),
        {
          getEmbedQueryParam: _v31
        } = _v39(),
        _v32 = (0, _v9.useRef)(null),
        _v33 = _v10.pictures.sizes[_v10.pictures.sizes.length - 1].link,
        _v34 = (0, _v9.useMemo)(() => `${_v17}/showcase/${_v14}/video/${_v11}/embed?jwt=${_v18}&autoplay=${_v28 || _v16 ? 1 : 0}${_v16 ? "&autopause=0" : ""}${_v19 ? `&hash=${_v19}` : ""}${_v31()}`, [_v17, _v14, _v11, _v28, _v16, _v19]),
        _v35 = _v0 => {
          "PLAYER_ENDED" === _v0.data && _v5();
        };
      return (0, _v9.useEffect)(() => (window.addEventListener("message", _v35), () => window.removeEventListener("message", _v35))), (0, _v9.useEffect)(() => {
        _v24 && (_v27(!0), _v29(!1));
      }, [_v24]), (0, _v9.useEffect)(() => {
        _v12 && "CLIP_PLACEHOLDER" !== _v10.displayType && (_v23(!1), _v25(!0), _v27(!0), _v29(!0));
      }, [_v12]), (0, _v6.jsxs)(_v377, {
        isPlayerActive: _v24,
        isLoadingPlayerIframe: _v26,
        isSearching: _v30,
        children: [_v26 && (0, _v6.jsx)(_v394, {}), (0, _v6.jsx)(_v391, {
          children: _v24 && (0, _v6.jsx)("iframe", {
            ref: _v32,
            onLoad: () => {
              _v32.current && _v32.current.contentWindow && _v32.current.contentWindow.postMessage("ATTACH_PLAYER_EVENTS", "*"), _v27(!1);
            },
            scrolling: "no",
            allowFullScreen: !0,
            allow: "autoplay",
            src: _v34,
            title: _v10.name
          })
        }), _v22 && (0, _v6.jsx)(_v392, {
          isSearching: _v30,
          thumbnail: _v33
        }), _v22 && (0, _v6.jsx)(_v336, {
          albumName: _v0,
          brandColor: _v1,
          customLogo: _v2,
          webCustomLogo: _v3,
          description: _v4,
          videoTotal: _v13,
          onPlay: _v6,
          openShare: _v9,
          allowShare: _v15,
          albumOwnerId: _v20,
          teamRole: _v21
        }), _v24 && (0, _v6.jsxs)("div", {
          children: [(0, _v6.jsx)(_v383, {
            onClick: _v7,
            children: (0, _v6.jsx)(_v382, {})
          }), (0, _v6.jsx)(_v385, {
            onClick: _v5,
            children: (0, _v6.jsx)(_v384, {})
          }), (0, _v6.jsx)(_v386, {
            onClick: () => {
              _v23(!0), _v25(!1), _v8();
            },
            children: (0, _v6.jsx)(_v387, {})
          })]
        })]
      });
    },
    _v394 = (0, _v15.default)(_v16.Spinner).withConfig({
      displayName: "FeaturedPlayerContainer__CenteredLoader",
      componentId: "sc-780f1287-0"
    })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v395 = "next",
    _v396 = _v15.default.div.withConfig({
      displayName: "Featured__Container",
      componentId: "sc-ff4a0f8-0"
    })`
  width: 100%;
`,
    _v397 = function ({
      albumId: _v0,
      albumIsEmpty: _v1,
      brandColor: _v2,
      curUser: _v3,
      customLogo: _v4,
      webCustomLogo: _v5,
      description: _v6,
      LoadMoreButton: _v7,
      name: _v8,
      totalVideos: _v9,
      videos: _v10,
      isOffsite: _v11 = !1,
      allowDownloads: _v12,
      setDownloadClipId: _v13,
      openDownloadModal: _v14,
      allowShare: _v15,
      continuousPlay: _v16,
      openShare: _v17,
      page: _v18,
      isUpdating: _v19,
      albumOwnerId: _v20,
      teamRole: _v21,
      pictures: _v22,
      hasChosenThumbnail: _v23
    }) {
      let _v24 = (0, _v9.useContext)(_v32.ViewerContext),
        {
          hashedPass: _v25
        } = (0, _v9.useContext)(_v100),
        _v26 = (0, _v9.useMemo)(() => _v158(_v23 ? _v22 : []), [_v22, _v23]);
      if (!_v24) return null;
      let {
          vimeoHttpsUrl: _v27
        } = _v24,
        [_v28, _v29] = (0, _v9.useState)(!1),
        [_v30, _v31] = (0, _v9.useState)(0),
        [_v32, _v33] = (0, _v9.useState)(!1),
        [_v34, _v35] = (0, _v9.useState)(_v10),
        [_v36, _v37] = (0, _v9.useState)(_v10),
        {
          isSearching: _v38,
          isLoading: _v39,
          hasErrored: _v40,
          results: _v41,
          searchPage: _v42,
          searchTotal: _v43
        } = _v242(),
        _v44 = _v243(),
        _v45 = (0, _v9.useMemo)(() => {
          if (_v36.length > 0) return _v36[_v30];
        }, [_v30]),
        _v46 = () => {
          _v32 && (_v37([..._v34]), _v33(!1));
        };
      (0, _v9.useEffect)(() => {
        !_v19 && _v18 > 1 && (_v32 && _v33(!1), _v37([..._v34, ..._v10]), _v35([..._v34, ..._v10]));
      }, [_v18, _v19]);
      let _v47 = _v45 ? _v149(_v45) : 0,
        _v48 = () => {
          _v17(), _v13.FatalAttraction.trackClick({
            container: "album_player",
            component: "album",
            keyword: "share"
          });
        },
        _v49 = (0, _v9.useCallback)(_v0 => {
          window.scrollTo(0, 0), _v31(_v0);
        }, [_v45, _v30, _v47]),
        _v50 = _v0 => {
          if (_v46(), _v45) {
            let _v0 = _v34.length - 1,
              _v1 = _v30 >= _v0 ? 0 : _v30 + 1,
              _v2 = 0 === _v30 ? _v0 : _v30 - 1;
            _v49(_v0 === _v395 ? _v1 : _v2);
          }
        },
        _v51 = (0, _v9.useCallback)(_v0 => {
          _v29(_v0);
        }, [_v29]);
      return (0, _v9.useEffect)(() => {
        _v1 || _v49(0);
      }, []), (0, _v6.jsxs)(_v396, {
        children: [_v45 && (0, _v6.jsx)(_v393, {
          albumName: _v8,
          brandColor: _v2,
          customLogo: _v4,
          webCustomLogo: _v5,
          description: _v6,
          onNext: () => _v50(_v395),
          onPrevious: () => _v50("previous"),
          onPlay: () => _v51(!0),
          onStop: () => _v51(!1),
          openShare: _v48,
          selectedVideo: _v45,
          selectedVideoId: _v47,
          skipTitleCard: _v28,
          totalVideos: _v9,
          albumId: _v0,
          allowShare: _v15,
          continuousPlay: _v16,
          baseUrl: _v27,
          jwt: _v24.jwt,
          hashedPass: _v25,
          albumOwnerId: _v20,
          teamRole: _v21
        }), _v1 ? (0, _v6.jsx)(_v336, {
          albumName: _v8,
          brandColor: _v2,
          description: _v6,
          customLogo: _v4,
          webCustomLogo: _v5,
          onPlay: () => _v51(!0),
          openShare: _v48,
          videoTotal: _v9,
          allowShare: _v15,
          thumbnail: _v26
        }) : _v38 ? (0, _v6.jsx)(_v371, {
          results: _v41,
          page: _v42,
          totalVideos: _v43,
          isLoading: _v39,
          hasErrored: _v40,
          onPlay: (_v0, _v1, _v2) => {
            let _v3, _v4;
            return _v46(), void (-1 === (_v4 = _v0, _v3 = _v36.findIndex(_v0 => _v0.uri ? _v4 === parseInt(_v0.uri.split("videos/")[1], 10) : -1)) && _v2 && (_v37([..._v34, _v2]), _v3 = _v34.length, _v33(!0)), _v44({
              type: "CLOSE_SEARCH"
            }), _v49(_v3), _v51(!0));
          }
        }) : (0, _v6.jsx)(_v301, {
          albumId: _v0,
          brandColor: _v2,
          onSelect: _v49,
          displayedVideos: _v34,
          selectedVideoIndex: _v30,
          curUser: _v3,
          isOffsite: _v11,
          allowDownloads: _v12,
          setDownloadClipId: _v13,
          openDownloadModal: _v14
        }), _v7 && !_v38 ? _v7 : null]
      });
    },
    _v398 = _v15.default.div.withConfig({
      displayName: "GridStyled__PaddedWrapper",
      componentId: "sc-3ce72b39-0"
    })`
  padding-bottom: ${(0, _v14.rem)("72px")};
`,
    _v399 = _v15.default.div.withConfig({
      displayName: "GridStyled__PaddedLayout",
      componentId: "sc-3ce72b39-1"
    })`
  padding-left: 65px;
  padding-right: 65px;

  @media only screen and (max-width: 1024px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`,
    _v400 = (0, _v15.default)(_v399).withConfig({
      displayName: "GridStyled__TopSwatch",
      componentId: "sc-3ce72b39-2"
    })`
  background-color: ${({
      theme: _v0,
      isSearching: _v1
    }) => "dark" === _v0 || _v1 ? "black" : _v74.bokehTheme.colors.gray["50"]};
  padding-bottom: ${(0, _v14.rem)("150px")};
  ${({
      thumbnail: _v0,
      isSearching: _v1
    }) => !_v1 && _v0 && _v15.css`
      background-size: cover;
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 100%),
        url(${_v0});
    `};
`,
    _v401 = (0, _v15.default)(_v399).withConfig({
      displayName: "GridStyled__BottomSwatch",
      componentId: "sc-3ce72b39-3"
    })`
  position: relative;
  top: ${(0, _v14.rem)("-150px")};
`,
    _v402 = _v15.default.div.withConfig({
      displayName: "GridStyled__VideoGrid",
      componentId: "sc-3ce72b39-4"
    })`
  margin-bottom: ${(0, _v14.rem)("15px")};
  display: flex;
  display: grid;
  min-width: 330px;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(${(0, _v14.rem)("330px")}, 1fr));

  @media screen and (min-width: ${(0, _v14.rem)(480)}) {
    min-width: 370px;
    grid-template-columns: repeat(auto-fill, minmax(${(0, _v14.rem)("370px")}, 1fr));
    grid-gap: ${(0, _v14.rem)("20px")};
  }
`,
    _v403 = _v15.default.div.withConfig({
      displayName: "GridStyled__GridHeaderWrapper",
      componentId: "sc-3ce72b39-5"
    })`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: ${({
      isSearching: _v0
    }) => _v0 ? "flex-end" : "space-between"};
`,
    _v404 = _v15.default.div.withConfig({
      displayName: "GridStyled__FullScreen",
      componentId: "sc-3ce72b39-6"
    })`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`,
    _v405 = (0, _v15.default)(_v324).withConfig({
      displayName: "GridStyled__StyledSearch",
      componentId: "sc-3ce72b39-7"
    })`
  float: right;
  display: inline-block;
  vertical-align: middle;
`,
    _v406 = ({
      customLogo: _v0,
      webCustomLogo: _v1,
      description: _v2,
      name: _v3,
      isSearching: _v4 = !1
    }) => {
      let _v5 = _v1 && _v0 && _v0.active && _v151(_v0);
      return (0, _v6.jsxs)(_v304, {
        isSearching: _v4,
        children: [_v5 && (0, _v6.jsx)(_v305, {
          children: (0, _v6.jsx)("img", {
            src: _v5,
            alt: _v3
          })
        }), (0, _v6.jsx)(_v306, {
          style: {
            margin: _v2 ? "" : 0
          },
          children: _v3
        }), _v2 && (0, _v6.jsx)(_v308, {
          children: _v2
        })]
      });
    };
  var _v407 = function (_v0) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        viewBox: "0 0 200 96"
      }, _v0), _v9.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _v9.default.createElement("path", {
        fill: "#E3E8E9",
        d: "M191.902 11.236l-4.857 1.606 4.857 1.605 1.62 4.815 1.62-4.815 4.857-1.605-4.857-1.606-1.62-4.815zm-28.339-8.828A2.42 2.42 0 0 1 165.992 0a2.419 2.419 0 0 1 2.43 2.408 2.418 2.418 0 0 1-2.43 2.408 2.419 2.419 0 0 1-2.43-2.408"
      }), _v9.default.createElement("path", {
        d: "M178.192 34.621c0-4.45-3.662-8.08-8.152-8.08 4.49 0 8.152-3.63 8.152-8.08 0 4.45 3.662 8.08 8.151 8.08-4.489 0-8.151 3.63-8.151 8.08z",
        stroke: "#8699A6",
        strokeWidth: 1.62
      }), _v9.default.createElement("path", {
        fill: "#8699A6",
        d: "M143.881 4.166l.987 2.935 2.961.979-2.961.978-.987 2.935-.987-2.935-2.961-.978 2.96-.979z"
      }), _v9.default.createElement("path", {
        fill: "#E3E8E9",
        d: "M172.204 52.171l1.052 1.905 1.921 1.042-1.921 1.042-1.052 1.905-1.051-1.905-1.923-1.042 1.923-1.042zm.799 7.409a.776.776 0 0 1 0 1.103.792.792 0 0 1-1.113 0 .776.776 0 0 1 0-1.103.792.792 0 0 1 1.113 0M41.829 7.452a.776.776 0 0 1 0 1.103.792.792 0 0 1-1.113 0 .776.776 0 0 1 0-1.103.792.792 0 0 1 1.113 0M4.857 24.88L0 26.488l4.857 1.605 1.62 4.815 1.62-4.815 4.858-1.605v-.001L8.097 24.88l-1.62-4.815z"
      }), _v9.default.createElement("path", {
        d: "M27.53 16.855a2.42 2.42 0 0 1 2.43-2.408 2.419 2.419 0 0 1 2.429 2.408 2.418 2.418 0 0 1-2.43 2.408 2.419 2.419 0 0 1-2.429-2.408",
        fill: "#8699A6"
      }), _v9.default.createElement("path", {
        d: "M30.014 49.069c0-4.45-3.662-8.08-8.152-8.08 4.49 0 8.152-3.63 8.152-8.081 0 4.45 3.662 8.08 8.151 8.08-4.489 0-8.151 3.63-8.151 8.08z",
        stroke: "#8699A6",
        strokeWidth: 1.62
      }), _v9.default.createElement("path", {
        fill: "#E3E8E9",
        d: "M41.03 0l1.052 1.905 1.921 1.042-1.921 1.042-1.052 1.905-1.051-1.905-1.922-1.042 1.922-1.042z"
      }), _v9.default.createElement("path", {
        stroke: "#657987",
        strokeWidth: 3.24,
        fill: "#B3BFC8",
        d: "M47.748 93.931H152.2v-69.76H47.748z"
      }), _v9.default.createElement("path", {
        d: "M141.675 79.553H75.278",
        stroke: "#657987",
        strokeWidth: 3.24
      }), _v9.default.createElement("path", {
        fill: "#657987",
        d: "M68.8 78.347L58.274 72.33v12.04z"
      })));
    },
    _v408 = function (_v0) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        viewBox: "0 0 200 96"
      }, _v0), _v9.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _v9.default.createElement("path", {
        fill: "#D6D6D6",
        d: "M191.902 11.356l-4.857 1.623 4.857 1.622 1.62 4.866 1.62-4.866 4.857-1.622v-.001l-4.857-1.622-1.62-4.867zm-27.938-8.923A2.432 2.432 0 0 1 166.394 0c1.34 0 2.428 1.09 2.428 2.433a2.431 2.431 0 0 1-2.429 2.434 2.433 2.433 0 0 1-2.429-2.434"
      }), _v9.default.createElement("path", {
        d: "M178.192 34.99c0-4.497-3.662-8.166-8.152-8.166 4.49 0 8.152-3.67 8.152-8.167 0 4.498 3.662 8.167 8.151 8.167-4.489 0-8.151 3.669-8.151 8.166z",
        stroke: "#1A2E3B",
        strokeWidth: 1.62
      }), _v9.default.createElement("path", {
        fill: "#1A2E3B",
        d: "M143.881 4.21l.987 2.967 2.961.989-2.961.989-.987 2.966-.987-2.966-2.961-.99 2.96-.988zm28.323 48.516l1.052 1.925 1.921 1.054-1.921 1.053-1.052 1.924-1.051-1.924-1.923-1.053 1.923-1.054zm.799 7.488a.786.786 0 1 1-1.113 0 .786.786 0 0 1 1.113 0"
      }), _v9.default.createElement("path", {
        d: "M41.829 7.531a.786.786 0 1 1-1.113 0 .786.786 0 0 1 1.113 0",
        fill: "#E8EAEB"
      }), _v9.default.createElement("path", {
        fill: "#D6D6D6",
        d: "M4.857 25.145L0 26.768l4.857 1.623 1.62 4.866 1.62-4.866 4.858-1.623-4.858-1.623-1.62-4.866z"
      }), _v9.default.createElement("path", {
        d: "M27.53 17.034a2.432 2.432 0 0 1 2.43-2.433 2.432 2.432 0 0 1 2.429 2.433 2.431 2.431 0 0 1-2.43 2.434 2.433 2.433 0 0 1-2.429-2.434",
        fill: "#1A2E3B"
      }), _v9.default.createElement("path", {
        d: "M30.014 49.59c0-4.496-3.662-8.165-8.152-8.165 4.49 0 8.152-3.67 8.152-8.167 0 4.498 3.662 8.167 8.151 8.167-4.489 0-8.151 3.669-8.151 8.166z",
        stroke: "#1A2E3B",
        strokeWidth: 1.62
      }), _v9.default.createElement("path", {
        fill: "#E8EAEB",
        d: "M41.03 0l1.052 1.925 1.921 1.054-1.921 1.052-1.052 1.925-1.051-1.925-1.922-1.052 1.922-1.054z"
      }), _v9.default.createElement("path", {
        stroke: "#1A2E3B",
        strokeWidth: 3.24,
        fill: "#EEF1F2",
        d: "M47.748 94.189H152.2v-69.76H47.748z"
      }), _v9.default.createElement("path", {
        d: "M75.278 80.399h66.397-66.397z",
        fill: "#E8EAEB"
      }), _v9.default.createElement("path", {
        d: "M141.675 80.399H75.278",
        stroke: "#1A2E3B",
        strokeWidth: 3.24
      }), _v9.default.createElement("path", {
        fill: "#1A2E3B",
        d: "M68.8 79.18L58.274 73.1v12.167z"
      })));
    };
  let _v409 = ({
      isOwnerOrAdmin: _v0,
      theme: _v1
    }) => (0, _v6.jsxs)(_v410, {
      children: [(0, _v6.jsx)(_v411, {
        children: _v1 === _v92 ? (0, _v6.jsx)(_v407, {}) : (0, _v6.jsx)(_v408, {})
      }), _v0 && (0, _v6.jsxs)("div", {
        children: [(0, _v6.jsx)(_v43.Header, {
          size: "3",
          theme: _v1 === _v92 ? _v52.themes.dark : _v52.themes.light,
          children: (0, _v31.translate)({
            singular: "No videos",
            dictionary: {
              es: {
                singular: "No hay videos"
              },
              "de-DE": {
                singular: "Keine Videos"
              },
              "fr-FR": {
                singular: "Pas de vidéos"
              },
              "ja-JP": {
                singular: "動画がありません"
              },
              "ko-KR": {
                singular: "동영상이 없습니다"
              },
              "pt-BR": {
                singular: "Não há vídeos"
              },
              "zh-CN": {
                singular: "没有视频"
              }
            }
          })
        }), (0, _v6.jsx)(_v141.Paragraph, {
          size: "2",
          theme: _v1 === _v92 ? _v52.themes.dark : _v52.themes.light,
          children: (0, _v31.translate)({
            singular: "You can add your own videos from {LINK}All videos{/LINK}, or add other videos as you discover them on Vimeo.",
            replacements: {
              LINK: _v0 => (0, _v6.jsx)("a", {
                href: "/manage/videos",
                children: _v0
              }, "manage-link")
            },
            dictionary: {
              es: {
                singular: "Agrega tus videos desde {LINK}Todos los videos{/LINK} o agrega otros videos a medida de que los descubras en Vimeo."
              },
              "de-DE": {
                singular: "Du kannst deine eigenen Videos von {LINK}Alle Videos{/LINK} hinzufügen oder nach und nach einzeln in der Reihenfolge hinzufügen, in der du sie auf Vimeo findest."
              },
              "fr-FR": {
                singular: "Vous pouvez ajouter vos propres vidéos depuis {LINK}Toutes les vidéos{/LINK}, ou bien ajouter d'autres vidéos que vous découvrez sur Vimeo."
              },
              "ja-JP": {
                singular: "{LINK}すべての動画{/LINK}から自分の動画やVimeoで見つけた他の動画を追加することができます。"
              },
              "ko-KR": {
                singular: "{LINK}모든 동영상{/LINK}에서 내 동영상을 추가하거나 Vimeo에서 발견한 다른 동영상을 추가할 수도 있습니다."
              },
              "pt-BR": {
                singular: "Você pode adicionar seus próprios vídeos de {LINK}Todos os vídeos{/LINK} ou adicionar outros vídeos, quando você começar a descobri-los no Vimeo."
              },
              "zh-CN": {
                singular: "您可以从{LINK}所有视频{/LINK}中添加自己的视频，或在 Vimeo 上发现其他视频时添加这些视频。"
              }
            }
          })
        })]
      })]
    }),
    _v410 = _v15.default.div.withConfig({
      displayName: "EmptyAlbum__EmptyAlbumStyled",
      componentId: "sc-20cca500-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: column;
  p {
    width: 350px;
  }
  a {
    text-decoration: underline;
  }
  svg {
    width: 64px;
  }
`,
    _v411 = _v15.default.div.withConfig({
      displayName: "EmptyAlbum__IconContainer",
      componentId: "sc-20cca500-1"
    })`
  width: 100%;
  text-align: center;
  padding: ${(0, _v14.rem)(15)} 0 ${(0, _v14.rem)(5)};
  svg {
    width: ${(0, _v14.rem)(200)};
  }
`,
    _v412 = function ({
      theme: _v0 = "standard",
      currentPage: _v1 = 1,
      pageSize: _v2 = 12,
      totalItems: _v3,
      onShare: _v4,
      allowShare: _v5
    }) {
      let _v6 = Math.min(_v1 * _v2, _v3),
        _v7 = Math.ceil(_v3 / _v2);
      return (0, _v6.jsxs)(_v353, {
        children: [_v7 > 1 && (0, _v6.jsx)(_v354, {
          children: (0, _v6.jsxs)("span", {
            children: [(_v1 - 1) * _v2 + 1, " - ", _v6, " of ", _v3]
          })
        }), _v5 && (0, _v6.jsx)(_v40.Button, {
          format: "standard" === _v0 ? "alternative" : "secondary",
          theme: "standard" === _v0 ? _v52.themes.light : _v52.themes.dark,
          size: "md",
          onClick: () => {
            _v4(), _v13.FatalAttraction.trackClick({
              container: "showcase",
              component: "share"
            });
          },
          children: _v227
        })]
      });
    },
    _v413 = (0, _v15.default)(_v142.Link).withConfig({
      displayName: "Styles__UserLinkWrapper",
      componentId: "sc-7030d213-0"
    })`
  color: ${_v0 => _v0.isDarkTheme ? "white" : _v74.bokehTheme.colors.gray["800"]};
  &:hover,
  &:link,
  &:active,
  &:visited {
    color: ${_v0 => _v0.isDarkTheme ? "white" : _v74.bokehTheme.colors.gray["800"]} !important;
  }
`,
    _v414 = _v15.default.img.withConfig({
      displayName: "Styles__ThumbnailImage",
      componentId: "sc-7030d213-1"
    })`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  vertical-align: middle;
`,
    _v415 = _v15.default.span.withConfig({
      displayName: "Styles__UserName",
      componentId: "sc-7030d213-2"
    })`
  vertical-align: middle;
  font-size: 12px;
  font-weight: bold;
  color: inherit;
`,
    _v416 = _v15.default.span.withConfig({
      displayName: "UserLink__StyledSpan",
      componentId: "sc-ab2c21a3-0"
    })`
  color: ${_v0 => _v0.isDarkTheme ? "white" : _v74.bokehTheme.colors.gray["800"]};
`,
    _v417 = ({
      isFree: _v0,
      isImpersonatingViewerOrContrib: _v1,
      isStock: _v2,
      user: _v3,
      isOffsite: _v4 = !1,
      theme: _v5
    }) => {
      let _v6 = _v3.pictures.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`),
        _v7 = _v148(_v3?.uri, _v82),
        _v8 = "dark" === _v5,
        _v9 = _v2 ? _v0 ? "/stock/collection/5855140" : `/stock/search?page=1&filter_user=/user/${_v7}&via=stock-creator-albums` : _v3.link;
      return _v4 || _v1 ? (0, _v6.jsxs)(_v416, {
        isDarkTheme: _v8,
        children: [(0, _v6.jsx)(_v414, {
          src: _v3.pictures.sizes[0].link,
          srcSet: _v6.join(", "),
          alt: ""
        }), (0, _v6.jsx)(_v415, {
          children: _v3.name
        })]
      }) : (0, _v6.jsxs)(_v413, {
        href: _v9,
        isDarkTheme: _v8,
        format: "basic",
        variant: "minimal",
        children: [(0, _v6.jsx)(_v414, {
          src: _v3.pictures.sizes[0].link,
          srcSet: _v6.join(", "),
          alt: ""
        }), (0, _v6.jsx)(_v415, {
          children: _v3.name
        })]
      });
    },
    _v418 = _v15.default.div.withConfig({
      displayName: "ClipCard__PlayerWrapper",
      componentId: "sc-14146ec7-0"
    })`
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  position: relative;

  &::after {
    content: ' ';
    padding-bottom: 56.25%;
    display: block;
  }

  iframe {
    border: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`,
    _v419 = _v15.default.div.withConfig({
      displayName: "ClipCard__BadgeWrapper",
      componentId: "sc-14146ec7-1"
    })`
  position: absolute;
  display: inline-block;
  height: 19px;
  background-color: ${_v74.bokehTheme.colors.gray["800"]};
  top: 10px;
  left: 10px;
  border-radius: 2px;
  z-index: 10;
`,
    _v420 = _v15.default.div.withConfig({
      displayName: "ClipCard__DownloadWrapper",
      componentId: "sc-14146ec7-2"
    })`
  position: absolute;
  right: 10px;
  bottom: 12px;
`,
    _v421 = (0, _v15.default)(_v246.DownloadArrow).withConfig({
      displayName: "ClipCard__StyledDownloadIcon",
      componentId: "sc-14146ec7-3"
    })`
  path {
    fill: ${_v0 => _v0.isDarkTheme ? "white" : void 0};
  }
`,
    _v422 = (0, _v15.default)(_v142.Link).withConfig({
      displayName: "ClipCard__StyledLink",
      componentId: "sc-14146ec7-4"
    })`
  color: ${_v0 => _v0.isDarkTheme ? "white" : _v74.bokehTheme.colors.gray["800"]};
  &:hover,
  &:link,
  &:active,
  &:visited {
    color: ${_v0 => _v0.isDarkTheme ? "white" : _v74.bokehTheme.colors.gray["800"]} !important;
  }
`,
    _v423 = function (_v0) {
      let _v1 = (0, _v9.useContext)(_v32.ViewerContext),
        {
          hashedPass: _v2
        } = (0, _v9.useContext)(_v100),
        _v3 = (0, _v9.useContext)(_v33),
        {
          getEmbedQueryParam: _v4
        } = _v39(),
        _v5 = _v1 && _v1.vimeoHttpsUrl,
        _v6 = _v1?.user?.teamUserPermissionLevel && (_v1.user.teamUserPermissionLevel === _v248.TeamUserPermissionLevel.Contributor || _v1.user.teamUserPermissionLevel === _v248.TeamUserPermissionLevel.Viewer),
        {
          link: _v7,
          user: _v8,
          name: _v9,
          description: _v10,
          theme: _v11,
          privacy: _v12,
          clipId: _v13,
          pictures: _v14,
          isFree: _v15,
          curUser: _v16,
          albumId: _v17,
          albumHash: _v18,
          isOffsite: _v19,
          allowDownloads: _v20,
          setDownloadClipId: _v21,
          openDownloadModal: _v22,
          trackClipClick: _v23
        } = _v0,
        _v24 = _v11 === _v92,
        _v25 = _v12.view === _v86,
        _v26 = `${_v5}/${_v13}`,
        _v27 = `${_v5}${_v7}${_v4("?")}`,
        _v28 = !_v25 && _v20 && _v12.download;
      null === _v8 && _v13.FatalAttraction.trackEvent({
        container: "showcase_error_clip_has_null_user",
        component: `albumId: ${_v17}`,
        keyword: `clipId: ${_v13}`
      });
      let _v29 = _v18 ?? null,
        _v30 = `${_v5}/showcase/${_v17}/video/${_v13}/embed`;
      return _v2 && (_v30 += `?hash=${_v2}`), _v29 && (_v30 += `${_v2 ? "&" : "?"}sh=${_v29}`), _v3?.isShowcaseEmbeded && (_v30 += _v4(_v2 || _v29 ? "&" : "?")), (0, _v6.jsxs)(_v266, {
        onClick: _v23,
        children: [_v15 && (0, _v6.jsx)(_v419, {
          children: (0, _v6.jsx)(_v286, {})
        }), (0, _v6.jsx)(_v418, {
          children: (0, _v6.jsx)("iframe", {
            allowFullScreen: !0,
            scrolling: "no",
            src: _v30,
            title: _v9
          })
        }), (0, _v6.jsxs)(_v267, {
          darkTheme: _v24,
          children: [(0, _v6.jsx)(_v268, {
            children: _v19 || _v6 ? _v9 : (0, _v6.jsx)(_v422, {
              format: "basic",
              variant: "minimal",
              isDarkTheme: _v24,
              href: _v25 ? _v26 : _v27,
              children: _v9
            })
          }), _v8 && (0, _v6.jsx)(_v417, {
            theme: _v11,
            isImpersonatingViewerOrContrib: !!_v6,
            isOffsite: _v19,
            user: _v8
          }), _v25 ? (0, _v6.jsx)(_v279, {
            clipId: _v13,
            pictures: _v14,
            name: _v9,
            theme: _v11,
            stockService: _v284,
            user: _v16,
            isFree: _v15
          }) : _v10 ? (0, _v6.jsx)(_v141.Paragraph, {
            size: "2",
            style: {
              marginRight: `${_v28 ? "30px" : "20px"}`
            },
            children: _v10
          }) : null, _v28 && (0, _v6.jsx)(_v420, {
            children: (0, _v6.jsx)(_v40.Button, {
              icon: (0, _v6.jsx)(_v421, {
                isDarkTheme: _v24
              }),
              format: "soft",
              variant: "minimalTransparent",
              size: "md",
              onClick: _v0 => {
                _v0.stopPropagation(), _v21 && _v22 && (_v21(_v13), _v22());
              }
            })
          })]
        })]
      });
    };
  function _v424({
    video: _v0,
    albumId: _v1,
    albumHash: _v2,
    theme: _v3 = _v91,
    curUser: _v4,
    isOffsite: _v5,
    allowDownloads: _v6,
    setDownloadClipId: _v7,
    openDownloadModal: _v8,
    trackClipClick: _v9
  }) {
    let {
        description: _v10,
        isFree: _v11,
        name: _v12,
        pictures: _v13,
        privacy: _v14,
        user: _v15
      } = _v0,
      _v16 = _v149(_v0),
      _v17 = _v2 ? `?sh=${_v2}` : "",
      _v18 = `/showcase/${_v1}/video/${_v16}${_v17}`;
    return (0, _v6.jsx)(_v423, {
      albumId: _v1,
      albumHash: _v2,
      clipId: _v16,
      description: _v10,
      isFree: _v11,
      link: _v18,
      name: _v12,
      privacy: _v14,
      theme: _v3,
      user: _v15,
      pictures: _v13,
      curUser: _v4,
      isOffsite: _v5,
      allowDownloads: _v6,
      setDownloadClipId: _v7,
      openDownloadModal: _v8,
      trackClipClick: _v9
    });
  }
  let _v425 = _v15.default.div.withConfig({
      displayName: "Styles__ImagePlaceholder",
      componentId: "sc-abfe9587-0"
    })`
  background-image: url(${_v0 => _v0.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #000000;
  width: 100%;
  height: 250px;
`,
    _v426 = _v15.default.div.withConfig({
      displayName: "Styles__UserBlock",
      componentId: "sc-abfe9587-1"
    })`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
`,
    _v427 = (0, _v15.default)(_v266).withConfig({
      displayName: "VideoCardPlaceholder__ClipCardWrapperStyled",
      componentId: "sc-8e1c8d48-0"
    })`
  background: transparent;
`,
    _v428 = _v15.default.div.withConfig({
      displayName: "VideoCardPlaceholder__DownloadWrapper",
      componentId: "sc-8e1c8d48-1"
    })`
  position: absolute;
  right: 10px;
  bottom: 12px;
`,
    _v429 = (0, _v15.default)(_v246.DownloadArrow).withConfig({
      displayName: "VideoCardPlaceholder__StyledDownloadIcon",
      componentId: "sc-8e1c8d48-2"
    })`
  path {
    fill: ${_v0 => _v0.isDarkTheme ? "white" : void 0};
  }
`;
  function _v430({
    video: _v0,
    user: _v1,
    theme: _v2,
    allowDownloads: _v3
  }) {
    let _v4 = _v1.pictures.map(_v0 => `${_v0.link} ${_v0.width}w`),
      _v5 = _v2 === _v92;
    return (0, _v6.jsxs)(_v427, {
      children: [(0, _v6.jsx)(_v425, {
        image: _v0.picture && _v0.picture.link
      }), (0, _v6.jsxs)(_v267, {
        darkTheme: _v5,
        children: [(0, _v6.jsx)(_v268, {
          children: _v0.name
        }), (0, _v6.jsxs)(_v426, {
          children: [(0, _v6.jsx)(_v414, {
            src: _v4[0],
            srcSet: _v4.join(", "),
            alt: ""
          }), (0, _v6.jsx)(_v415, {
            children: _v1.name
          })]
        }), (0, _v6.jsx)(_v141.Paragraph, {
          size: "2",
          children: _v0.description
        }), _v3 && _v0.privacy.download && (0, _v6.jsx)(_v428, {
          children: (0, _v6.jsx)(_v40.Button, {
            icon: (0, _v6.jsx)(_v429, {
              isDarkTheme: _v5
            }),
            format: "soft",
            variant: "minimalTransparent",
            theme: _v5 ? _v52.themes.dark : _v52.themes.light,
            size: "md"
          })
        })]
      })]
    });
  }
  function _v431({
    albumId: _v0,
    albumHash: _v1,
    albumIsEmpty: _v2,
    customLogo: _v3,
    webCustomLogo: _v4,
    description: _v5,
    isOwnerOrAdmin: _v6,
    name: _v7,
    theme: _v8,
    openShare: _v9,
    videos: _v10 = [],
    totalVideos: _v11,
    page: _v12,
    setPage: _v13,
    isUpdating: _v14,
    curUser: _v15,
    isOffsite: _v16 = !1,
    allowDownloads: _v17,
    setDownloadClipId: _v18,
    openDownloadModal: _v19,
    allowShare: _v20,
    albumOwnerId: _v21,
    teamRole: _v22,
    pictures: _v23,
    hasChosenThumbnail: _v24
  }) {
    let _v25 = (0, _v9.useMemo)(() => _v158(_v24 ? _v23 : []), [_v23, _v24]),
      _v26 = (0, _v9.useContext)(_v32.ViewerContext),
      _v27 = (0, _v9.useContext)(_v33);
    if (!_v26) return null;
    let {
        vimeoHttpsUrl: _v28
      } = _v26,
      _v29 = _v26?.user?.teamUserPermissionLevel && (_v26.user.teamUserPermissionLevel === _v248.TeamUserPermissionLevel.Contributor || _v26.user.teamUserPermissionLevel === _v248.TeamUserPermissionLevel.Viewer),
      {
        isSearching: _v30,
        isLoading: _v31,
        hasErrored: _v32,
        results: _v33,
        searchPage: _v34,
        searchTotal: _v35
      } = _v242();
    return (0, _v6.jsxs)(_v398, {
      children: [(0, _v6.jsx)(_v400, {
        thumbnail: _v25,
        theme: _v8,
        isSearching: _v30,
        children: (0, _v6.jsxs)(_v403, {
          isSearching: _v30,
          children: [(0, _v6.jsx)(_v406, {
            isSearching: _v30,
            customLogo: _v3,
            webCustomLogo: _v4,
            description: _v5,
            name: _v7
          }), (0, _v6.jsxs)("div", {
            children: [!_v29 && (0, _v6.jsx)(_v405, {
              autofocus: !1,
              teamRole: _v22
            }), _v21 && _v22 && !_v27?.isShowcaseEmbeded && (0, _v6.jsx)(_v432, {
              children: (0, _v6.jsx)(_v314, {
                ownerId: _v21,
                userRole: _v22,
                hrefColor: _v52.themes["dark" === _v8 ? "dark" : "light"].formats.soft
              })
            })]
          })]
        })
      }), _v2 ? !_v14 && (0, _v6.jsx)(_v409, {
        isOwnerOrAdmin: _v6,
        theme: _v8
      }) : (0, _v6.jsxs)(_v401, {
        children: [_v30 ? null : (0, _v6.jsx)(_v412, {
          theme: _v8,
          currentPage: _v12,
          totalItems: _v11,
          onShare: () => {
            _v9(), _v13.FatalAttraction.trackClick({
              container: "album_player",
              component: "album",
              keyword: "share"
            }), _v22 && _v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "share_modal",
              keyword: "open_share_" + _v22.toLowerCase()
            });
          },
          allowShare: _v20,
          pageSize: _v157(_v87)
        }), _v30 ? (0, _v6.jsx)(_v371, {
          results: _v33,
          page: _v34,
          totalVideos: _v35,
          isLoading: _v31,
          hasErrored: _v32,
          onPlay: (_v0, _v1) => {
            let _v2;
            _v2 = _v1 ? `${_v28}/${_v0}` : `${_v28}/showcase/${_v0}/video/${_v0}`, _v27?.isShowcaseEmbeded ? window.open(_v2, "_blank") : window.location.href = _v2;
          }
        }) : (0, _v6.jsx)(_v402, {
          children: _v10.map((_v0, _v1) => {
            if ("CLIP_PLACEHOLDER" !== _v0.displayType) return (0, _v6.jsx)(_v424, {
              albumId: _v0,
              albumHash: _v1,
              theme: _v8,
              video: _v0,
              curUser: _v15,
              isOffsite: _v16,
              allowDownloads: _v17,
              setDownloadClipId: _v18,
              openDownloadModal: _v19,
              trackClipClick: () => _v13.FatalAttraction.trackClick({
                container: "showcase",
                component: "grid_video_row",
                keyword: _v1
              })
            }, _v0.uri);
            {
              let _v0 = _v0.user;
              return (0, _v6.jsx)(_v430, {
                video: _v0,
                user: _v0,
                theme: _v8,
                allowDownloads: _v17
              });
            }
          })
        }), !_v30 && (0, _v6.jsx)(_v360, {
          theme: _v8,
          currentPage: _v12,
          totalItems: _v11,
          onSetPage: _v13,
          pageSize: _v157(_v87)
        })]
      }), _v14 && (0, _v6.jsx)(_v404, {
        children: (0, _v6.jsx)(_v350, {})
      })]
    });
  }
  let _v432 = _v15.default.div.withConfig({
      displayName: "Grid__TeamHomeWrapper",
      componentId: "sc-79af4d00-0"
    })`
  position: absolute;
  right: 200px;
  top: 23px;
`,
    _v433 = function ({
      isOwnerOrAdmin: _v0,
      albumId: _v1,
      defaultThumbnail: _v2
    }) {
      return (0, _v6.jsxs)("div", {
        children: [(0, _v6.jsx)(_v434, {
          thumbnail: _v2
        }), _v0 && (0, _v6.jsxs)(_v435, {
          children: ["You can add your own videos from", " ", (0, _v6.jsx)("a", {
            className: "all-videos",
            onClick: () => {
              _v13.FatalAttraction.trackClick({
                container: "showcase",
                component: "empty_state",
                keyword: "add_videos"
              });
            },
            href: `/manage/showcases/${_v1}`,
            children: "All videos"
          }), ", or add other videos as you discover them on Vimeo."]
        })]
      });
    },
    _v434 = _v15.default.div.withConfig({
      displayName: "EmptyLiveHero__Hero",
      componentId: "sc-c0afa7ac-0"
    })`
  width: 100%;
  height: 50vh;
  min-height: ${(0, _v14.rem)(600)};
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.86) 100%),
    url(${_v0 => _v0.thumbnail}), linear-gradient(180deg, #eeeeee 0%, #d8d8d8 100%);

  @media only screen and (max-width: 767px) {
    min-height: ${(0, _v14.rem)(480)};
    height: ${(0, _v14.rem)(480)};
  }
`,
    _v435 = (0, _v15.default)(_v141.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "EmptyLiveHero__OwnerMessage",
      componentId: "sc-c0afa7ac-1"
    })`
  margin: ${(0, _v14.rem)(80)} auto;
  text-align: center;
  a.all-videos {
    color: ${_v74.bokehTheme.colors.blue["500"]};
  }
`;
  var _v436 = _v0.i(0),
    _v437 = _v0.i(0);
  let _v438 = ({
      status: _v0
    }) => "streaming" === _v0 ? (0, _v6.jsxs)(_v440, {
      format: "live",
      label: "Live Event",
      children: [(0, _v6.jsx)(_v439, {}), " Live Event"]
    }) : (0, _v6.jsxs)(_v441, {
      format: "info",
      label: "Offline",
      children: [(0, _v6.jsx)(_v439, {}), " Offline"]
    }),
    _v439 = (0, _v15.default)(_v337.CircleFilled).withConfig({
      displayName: "LiveBadge__RecordIcon",
      componentId: "sc-522f16e9-0"
    })`
  width: ${(0, _v14.rem)(7)};
  height: ${(0, _v14.rem)(7)};
  circle {
    fill: white;
  }
`,
    _v440 = (0, _v15.default)(_v437.Badge).withConfig({
      displayName: "LiveBadge__FeaturedBadge",
      componentId: "sc-522f16e9-1"
    })`
  pointer-events: none;
  margin: 0 auto ${(0, _v14.rem)(25)};
  font-size: ${(0, _v14.rem)(12)};
  text-align: center;
`,
    _v441 = (0, _v15.default)(_v440).withConfig({
      displayName: "LiveBadge__OffAirBadge",
      componentId: "sc-522f16e9-2"
    })`
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  text-transform: uppercase;
`;
  var _v442 = _v0.i(0);
  function _v443({
    schedule: _v0
  }) {
    let _v1,
      [_v2, _v3] = (0, _v9.useState)(0),
      _v4 = _v159(_v0);
    return ((0, _v9.useEffect)(() => {
      let _v0 = _v0.startTime,
        _v1 = _v436.DateTime.fromJSDate(new Date()),
        _v2 = _v436.DateTime.fromISO(_v0),
        _v3 = _v1.toFormat("LL/dd/yyyy") === _v2.toFormat("LL/dd/yyyy"),
        _v4 = _v4 === _v147 && (_v159(_v0) !== _v147 || !_v0.rrule.includes("BYDAY=") ? [] : _v0.rrule.split("BYDAY=")[1].split(",").map(_v0 => _v98[_v0])).indexOf(new Date().getDay()) >= 0,
        _v5 = "monthly" === _v4 && Number(_v0.rrule.split("BYMONTHDAY=")[1]) === _v1.day;
      (_v4 || _v3 || _v5) && (_v2 = _v2.set({
        day: _v1.day,
        month: _v1.month,
        year: _v1.year
      }));
      let _v6 = _v2.diff(_v1, ["hours", "seconds"]);
      _v3(_v6.hours < 12 && _v6.seconds > 0 && (_v3 || _v4 || _v5) ? 0 * _v6.hours + _v6.seconds : 0);
    }, [_v0]), (0, _v9.useEffect)(() => (_v1 = setInterval(() => {
      _v2 <= 0 ? clearInterval(_v1) : _v3(_v2 - 1);
    }, 0), () => {
      _v1 && clearInterval(_v1);
    }), [_v2]), _v2) ? (0, _v6.jsx)(_v444, {
      children: (0, _v6.jsx)(_v445, {
        children: _v2 > 900 ? (0, _v31.translate)({
          singular: "Starting in {TIME}",
          replacements: {
            TIME: (_v0 => {
              if (!_v0) return "";
              let _v1 = _v436.Duration.fromObject({
                seconds: _v0
              });
              return _v0 > 0 ? _v1.toFormat(" hh 'hrs' mm 'mins'") : _v1.toFormat(" m 'mins' s 'secs'");
            })(_v2)
          },
          dictionary: {
            es: {
              singular: "Comienza en {TIME}"
            },
            "de-DE": {
              singular: "Beginnt in {TIME}"
            },
            "fr-FR": {
              singular: "Commence dans {TIME}"
            },
            "ja-JP": {
              singular: "開始まで {TIME}"
            },
            "ko-KR": {
              singular: "{TIME} 후 시작"
            },
            "pt-BR": {
              singular: "Começa em {TIME}"
            },
            "zh-CN": {
              singular: "{TIME} 后开始"
            }
          }
        }) : (0, _v31.translate)({
          singular: "Starting soon...",
          dictionary: {
            es: {
              singular: "Comienza pronto..."
            },
            "de-DE": {
              singular: "Beginnt in Kürze …"
            },
            "fr-FR": {
              singular: "Commence bientôt..."
            },
            "ja-JP": {
              singular: "まもなく始まります..."
            },
            "ko-KR": {
              singular: "곧 시작합니다"
            },
            "pt-BR": {
              singular: "Começando em breve..."
            },
            "zh-CN": {
              singular: "即将开始..."
            }
          }
        })
      })
    }) : "single" === _v4 || "yearly" === _v4 ? (0, _v6.jsx)(_v444, {
      children: (0, _v6.jsxs)(_v445, {
        children: ["This event will start ", (0, _v442.getScheduleTime)(_v0)]
      })
    }) : (0, _v6.jsx)(_v444, {
      children: (0, _v6.jsx)(_v445, {
        children: (0, _v442.getScheduleTime)(_v0)
      })
    });
  }
  let _v444 = _v15.default.div.withConfig({
      displayName: "LiveSchedule__Countdown",
      componentId: "sc-fb42866e-0"
    })`
  padding: ${(0, _v14.rem)(15)} 0;
  text-align: center;
`,
    _v445 = (0, _v15.default)(_v43.Header).attrs({
      size: "3"
    }).withConfig({
      displayName: "LiveSchedule__Message",
      componentId: "sc-fb42866e-1"
    })`
  color: white;
`;
  function _v446({
    albumId: _v0,
    brandColor: _v1,
    onPlay: _v2,
    featuredVideo: _v3,
    logo: _v4,
    name: _v5,
    defaultThumbnail: _v6,
    apiUrl: _v7,
    apiJwt: _v8,
    hashedPass: _v9
  }) {
    let [_v10, _v11] = (0, _v9.useState)(!1),
      [_v12, _v13] = (0, _v9.useState)(_v3.live && _v3.live.status),
      [_v14, _v15] = (0, _v9.useState)(_v3.live && _v3.live.recurringEvent && _v3.live.recurringEvent.schedule),
      [_v16, _v17] = (0, _v9.useState)(null);
    (0, _v9.useEffect)(() => (["unavailable", "pending", "ready", "streaming"].some(_v0 => _v0 === _v12) && _v18(), () => {
      _v16 && clearInterval(_v16);
    }), [_v12]);
    let _v18 = () => {
        let {
          live: _v0
        } = _v3;
        _v0 && _v0.recurringEvent && _v17(setInterval(_v19, ((_v0, _v1) => {
          let {
            schedule: _v2
          } = _v0;
          if (_v2) {
            let _v0 = _v2.startTime,
              _v1 = _v436.DateTime.fromJSDate(new Date()),
              _v2 = _v436.DateTime.fromISO(_v0).diff(_v1, ["hours"]);
            if ("streaming" === _v1) return 0;
            if (_v2.hours > 24) return 0;
            if (_v2.hours > 12) return 0;
          }
          return 0;
        })(_v0.recurringEvent, _v0.status)));
      },
      _v19 = () => {
        fetch(`https://${_v7}/albums/${_v0}/videos/${_v148(_v3?.uri, _v83)}?_hashed_pass=${_v9}&fields=live.status,live.recurring_event.schedule`, {
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.9",
            Authorization: `jwt ${_v8}`,
            "Content-Type": "application/json"
          }
        }).then(_v0 => (((_v0, _v1 = "unknown_method") => {
          _v0 && _v0.errorCode && _v13.FatalAttraction.trackEvent({
            container: "showcase_api_error",
            component: _v1,
            keyword: _v0.errorCode
          });
        })(_v0, "fetchLiveStatus"), _v0.ok || 0 !== _v0.errorCode) ? _v0.json() : location.reload()).then(_v0 => {
          if (_v0.live && _v0.live.status) {
            if ("done" === _v0.live.status && "streaming" === _v12) return location.reload();
            let _v0 = _v0.live.recurring_event && _v0.live.recurring_event.schedule;
            _v13(_v0.live.status), _v0 && _v15((0, _v188.camelize)(_v0));
          }
        }).catch(_v0 => location.reload());
      },
      _v20 = !_v3.live || "done" === _v12 && _v3.live.archivedTime,
      _v21 = _v6;
    if (_v20 && _v3.pictures) {
      let _v0 = _v3.pictures.sizes[_v3.pictures.sizes.length - 1].link,
        _v1 = _v0.substring(0, _v0.lastIndexOf("_"));
      _v21 = _v0 && _v0 ? `${_v1}_1680x945` : "";
    }
    let _v22 = "streaming" === _v12,
      _v23 = _v22 ? (0, _v31.translate)({
        singular: "Watch now",
        dictionary: {
          es: {
            singular: "Ver ahora"
          },
          "de-DE": {
            singular: "Anschauen"
          },
          "fr-FR": {
            singular: "Regarder"
          },
          "ja-JP": {
            singular: "今すぐ再生"
          },
          "ko-KR": {
            singular: "지금 시청하기"
          },
          "pt-BR": {
            singular: "Assistir agora"
          },
          "zh-CN": {
            singular: "立即观看"
          }
        }
      }) : (0, _v31.translate)({
        singular: "Watch",
        dictionary: {
          es: {
            singular: "Ver"
          },
          "de-DE": {
            singular: "Anschauen"
          },
          "fr-FR": {
            singular: "Regarder"
          },
          "ja-JP": {
            singular: "鑑賞"
          },
          "ko-KR": {
            singular: "시청하기"
          },
          "pt-BR": {
            singular: "Assistir"
          },
          "zh-CN": {
            singular: "观看"
          }
        }
      });
    return (0, _v6.jsx)(_v447, {
      thumbnail: _v21,
      children: _v10 ? (0, _v6.jsxs)(_v456, {
        children: [(0, _v6.jsx)(_v454, {}), (0, _v6.jsx)(_v455, {
          children: (0, _v31.translate)({
            singular: "Event is starting",
            dictionary: {
              es: {
                singular: "El evento está comenzando"
              },
              "de-DE": {
                singular: "Event beginnt"
              },
              "fr-FR": {
                singular: "L'événement est sur le point de commencer"
              },
              "ja-JP": {
                singular: "イベントが始まります"
              },
              "ko-KR": {
                singular: "이벤트가 곧 시작합니다"
              },
              "pt-BR": {
                singular: "O evento está começando"
              },
              "zh-CN": {
                singular: "活动即将开始"
              }
            }
          })
        })]
      }) : (0, _v6.jsxs)(_v450, {
        children: [(0, _v6.jsxs)(_v453, {
          children: [_v4 && (0, _v6.jsx)(_v457, {
            children: _v5
          }), _v3.live && !_v3.live.archivedTime && (0, _v6.jsx)(_v438, {
            status: _v12
          }), (0, _v6.jsx)(_v451, {
            title: _v3.name,
            children: _v3.name && ((_v0, _v1) => {
              if (_v0.length <= _v1) return _v0;
              let _v2 = _v0.substring(0, _v1),
                _v3 = _v2.lastIndexOf(" ") > -1 ? Math.min(_v1, _v2.lastIndexOf(" ")) : _v1;
              return `${_v2.substr(0, _v3)}...`;
            })(_v3.name, 60)
          }), _v3.description && (0, _v6.jsx)(_v452, {
            children: _v3.description
          })]
        }), (_v22 || _v20) && (0, _v6.jsx)(_v449, {
          brandColor: _v1,
          onClick: () => {
            _v22 ? (_v11(!0), setTimeout(() => {
              _v2(), _v11(!1);
            }, 0)) : _v2(), _v13.FatalAttraction.trackClick({
              container: "showcase",
              component: _v22 ? "live_event" : "video",
              keyword: "watch"
            });
          },
          children: _v23
        }), _v14 && !_v20 && !_v22 && (0, _v6.jsx)(_v443, {
          schedule: _v14
        })]
      })
    });
  }
  let _v447 = _v15.default.div.withConfig({
    displayName: "LiveHero__Hero",
    componentId: "sc-4135386-0"
  })`
  width: 100%;
  height: 80vh;
  min-height: ${(0, _v14.rem)(600)};
  background-color: black;
  background-position: center;
  background-size: cover;
  background-image:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.85) 35%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url(${_v0 => _v0.thumbnail});

  @media only screen and (max-width: 767px) {
    min-height: ${(0, _v14.rem)(480)};
    height: ${(0, _v14.rem)(480)};
  }
`;
  function _v448(_v0, _v1 = !1) {
    let _v2 = _v0.brandColor ? _v0.brandColor : _v74.bokehTheme.colors.red["500"];
    return _v1 && (_v2 = _v0.brandColor ? (0, _v14.darken)(.15, _v0.brandColor) : _v74.bokehTheme.colors.red["600"]), `background-color: ${_v2};
          border-color: ${_v2};
          color: ${(0, _v14.readableColor)(_v2)}`;
  }
  let _v449 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "LiveHero__WatchButton",
      componentId: "sc-4135386-1"
    })`
  ${_v448};
  min-width: ${(0, _v14.rem)(194)};
  width: auto;
  margin-top: ${(0, _v14.rem)(15)};
  text-align: center;
  height: ${(0, _v14.rem)(50)};

  &:hover {
    ${_v0 => _v448(_v0, !0)};
  }
`,
    _v450 = _v15.default.div.withConfig({
      displayName: "LiveHero__Details",
      componentId: "sc-4135386-2"
    })`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,
    _v451 = (0, _v15.default)(_v43.Header).attrs({
      size: "plusUltra"
    }).withConfig({
      displayName: "LiveHero__Title",
      componentId: "sc-4135386-3"
    })`
  color: white;
  text-align: center;
  overflow: hidden;
  font-size: ${(0, _v14.rem)(72)};
  line-height: ${(0, _v14.rem)(84)};
  letter-spacing: ${(0, _v14.rem)(-2)};

  @media only screen and (max-width: 1024px) {
    font-size: ${(0, _v14.rem)(55)};
    line-height: ${(0, _v14.rem)(64)};
    letter-spacing: ${(0, _v14.rem)(-1.5)};
  }

  @media only screen and (max-width: 767px) {
    font-size: ${(0, _v14.rem)(40)};
    line-height: ${(0, _v14.rem)(46)};
    letter-spacing: ${(0, _v14.rem)(-1)};
    padding: 0 ${(0, _v14.rem)(10)};
  }
`,
    _v452 = (0, _v15.default)(_v43.Header).attrs({
      size: "5"
    }).withConfig({
      displayName: "LiveHero__Description",
      componentId: "sc-4135386-4"
    })`
  color: #8498a4;
  text-align: center;
  display: -webkit-box;
  margin-bottom: ${(0, _v14.rem)(30)};
  font-weight: normal;
  line-height: ${(0, _v14.rem)(22)};
  max-height: ${(0, _v14.rem)(44)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    font-size: ${(0, _v14.rem)(14)};
    line-height: ${(0, _v14.rem)(18)};
    max-width: 80%;
    margin: 0 auto ${(0, _v14.rem)(10)};
    max-height: ${(0, _v14.rem)(36)};
  }
`,
    _v453 = _v15.default.div.withConfig({
      displayName: "LiveHero__Metadata",
      componentId: "sc-4135386-5"
    })`
  margin: 0 auto;
  padding: 0 ${(0, _v14.rem)(15)};
  text-align: center;
`,
    _v454 = (0, _v15.default)(_v16.Spinner).withConfig({
      displayName: "LiveHero__BigRedLoader",
      componentId: "sc-4135386-6"
    })`
  height: ${(0, _v14.rem)(96)};
  width: ${(0, _v14.rem)(96)};
  color: ${_v74.bokehTheme.colors.red["500"]};
  border-radius: 50%;
`,
    _v455 = (0, _v15.default)(_v43.Header).attrs({
      size: "2"
    }).withConfig({
      displayName: "LiveHero__LoaderText",
      componentId: "sc-4135386-7"
    })`
  color: white;
  margin-top: ${(0, _v14.rem)(25)};
`,
    _v456 = _v15.default.div.withConfig({
      displayName: "LiveHero__EventIsStarting",
      componentId: "sc-4135386-8"
    })`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`,
    _v457 = (0, _v15.default)(_v43.Header).attrs({
      size: "5"
    }).withConfig({
      displayName: "LiveHero__ShowcaseName",
      componentId: "sc-4135386-9"
    })`
  color: white;
  margin-bottom: ${(0, _v14.rem)(30)};
  display: none;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`,
    _v458 = _v15.default.div.withConfig({
      displayName: "LiveNav__CenterSection",
      componentId: "sc-43b800dc-0"
    })`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`,
    _v459 = (0, _v15.default)(_v325.PaperPlane).withConfig({
      displayName: "LiveNav__ShareIcon",
      componentId: "sc-43b800dc-1"
    })`
  path {
    fill: white;
  }
`,
    _v460 = _v15.default.img.withConfig({
      displayName: "LiveNav__AvatarImg",
      componentId: "sc-43b800dc-2"
    })`
  width: ${(0, _v14.rem)(40)};
  border-radius: 50%;
  margin-left: ${(0, _v14.rem)(15)};
`,
    _v461 = _v15.default.div.withConfig({
      displayName: "LiveNav__SideSection",
      componentId: "sc-43b800dc-3"
    })`
  width: 25%;
`,
    _v462 = (0, _v15.default)(_v43.Header).attrs({
      size: "5"
    }).withConfig({
      displayName: "LiveNav__Title",
      componentId: "sc-43b800dc-4"
    })`
  color: white;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
`,
    _v463 = _v15.default.div.withConfig({
      displayName: "LiveNav__Container",
      componentId: "sc-43b800dc-5"
    })`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 ${(0, _v14.rem)(50)};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(0, _v14.rem)(125)};
  ${_v460}, ${_v458}, ${_v462} {
    ${({
      isSearching: _v0 = !1
    }) => _v15.css`
  visibility: ${_v0 ? "hidden" : "inherit"};
`};
  }
`,
    _v464 = _v15.default.img.withConfig({
      displayName: "LiveNav__CustomLogoImg",
      componentId: "sc-43b800dc-6"
    })`
  width: ${(0, _v14.rem)(75)};
  vertical-align: middle;
`,
    _v465 = (0, _v15.default)(_v461).withConfig({
      displayName: "LiveNav__ShareAvatarContainer",
      componentId: "sc-43b800dc-7"
    })`
  @media only screen and (max-width: 1280px) {
    width: 33%;
  }
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
`,
    _v466 = ({
      allowShare: _v0,
      avatar: _v1,
      userName: _v2,
      logo: _v3,
      name: _v4,
      openShare: _v5,
      webCustomLogo: _v6,
      albumOwnerId: _v7,
      teamRole: _v8
    }) => {
      let _v9 = (0, _v9.useContext)(_v33),
        _v10 = _v6 && _v3 && _v151(_v3),
        _v11 = _v1 && _v1.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`),
        _v12 = _v1 && _v1.sizes[0].link,
        {
          isSearching: _v13
        } = _v242(),
        [_v14, _v15] = (0, _v9.useState)(!1);
      return (0, _v6.jsxs)(_v463, {
        isSearching: _v13,
        children: [(0, _v6.jsx)(_v461, {
          children: !_v13 && (_v10 ? (0, _v6.jsx)(_v464, {
            src: _v10,
            alt: _v4
          }) : (0, _v6.jsx)(_v462, {
            children: _v4
          }))
        }), _v10 && (0, _v6.jsx)(_v458, {
          children: (0, _v6.jsx)(_v462, {
            children: _v4
          })
        }), (0, _v6.jsxs)(_v465, {
          children: [_v7 && _v8 && !_v9?.isShowcaseEmbeded && (0, _v6.jsx)(_v314, {
            ownerId: _v7,
            userRole: _v8
          }), !_v14 && (0, _v6.jsx)(_v40.Button, {
            "aria-label": (0, _v31.translate)({
              singular: "Search",
              dictionary: {
                es: {
                  singular: "Buscar"
                },
                "de-DE": {
                  singular: "Suchen"
                },
                "fr-FR": {
                  singular: "Chercher"
                },
                "ja-JP": {
                  singular: "検索"
                },
                "ko-KR": {
                  singular: "검색"
                },
                "pt-BR": {
                  singular: "Pesquisar"
                },
                "zh-CN": {
                  singular: "搜索"
                }
              }
            }),
            format: "secondary",
            theme: _v52.themes.dark,
            icon: (0, _v6.jsx)(_v303.Search, {}),
            onClick: () => {
              _v13.FatalAttraction.trackClick({
                container: "showcase",
                component: "search",
                keyword: "open_search"
              }), _v8 && _v13.FatalAttraction.trackClick({
                container: "team_home_page",
                component: "search",
                keyword: "open_search_" + _v8.toLowerCase()
              }), _v15(!0);
            }
          }), _v14 && (0, _v6.jsx)(_v324, {
            setShowSearchBar: _v15,
            teamRole: _v8
          }), _v0 && (0, _v6.jsx)(_v40.Button, {
            "aria-label": (0, _v31.translate)({
              singular: "Share",
              dictionary: {
                es: {
                  singular: "Compartir"
                },
                "de-DE": {
                  singular: "Teilen"
                },
                "fr-FR": {
                  singular: "Partager"
                },
                "ja-JP": {
                  singular: "共有"
                },
                "ko-KR": {
                  singular: "공유"
                },
                "pt-BR": {
                  singular: "Compartilhar"
                },
                "zh-CN": {
                  singular: "分享"
                }
              }
            }),
            format: "basic",
            variant: "hyperminimal",
            onClick: () => {
              _v8 && _v13.FatalAttraction.trackClick({
                container: "team_home_page",
                component: "share_modal",
                keyword: "open_share_" + _v8.toLowerCase()
              }), _v5();
            },
            size: "sm",
            icon: (0, _v6.jsx)(_v459, {})
          }), _v12 && (0, _v6.jsx)(_v460, {
            src: _v12,
            srcSet: _v11 && _v11.join(", "),
            alt: _v2
          })]
        })]
      });
    };
  var _v467 = _v0.i(0),
    _v468 = (0, _v9.forwardRef)(function (_v0, _v1) {
      return _v9.default.createElement("svg", (0, _v111.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v9.default.createElement("path", {
        d: "M6 20v-6h-.5A5.51 5.51 0 0 1 0 8.5v-1A5.51 5.51 0 0 1 5.5 2h9A5.51 5.51 0 0 1 20 7.5v1a5.51 5.51 0 0 1-5.5 5.5H12zM5.5 4A3.47 3.47 0 0 0 2 7.5v1A3.47 3.47 0 0 0 5.5 12H8v3.19L11.19 12h3.31A3.47 3.47 0 0 0 18 8.5v-1A3.47 3.47 0 0 0 14.5 4z",
        fill: "#1a2e3b"
      }));
    }),
    _v469 = _v0.i(0),
    _v470 = _v0.i(0),
    _v471 = _v0.i(0);
  async function _v472(_v0, _v1) {
    let _v2 = await fetch(`//${_v1.apiUrl}/live_chat/${_v0}/status`, {
      headers: {
        Authorization: `jwt ${_v1.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (_v2.ok) return (0, _v188.camelize)(await _v2.json()).chatEnabled;
    throw Error("Failed to fetch chat status data.");
  }
  let _v473 = function ({
      onBack: _v0,
      albumId: _v1,
      selectedVideo: _v2,
      brandColor: _v3,
      theme: _v4,
      onNext: _v5,
      onPrevious: _v6,
      continuousPlay: _v7,
      displayArrows: _v8,
      baseUrl: _v9,
      jwt: _v10,
      hashedPass: _v11
    }) {
      let [_v12, _v13] = (0, _v9.useState)(!0),
        [_v14, _v15] = (0, _v9.useState)(!0),
        [_v16, _v17] = (0, _v9.useState)(!0),
        [_v18, _v19] = (0, _v9.useState)(!1),
        {
          getEmbedQueryParam: _v20
        } = _v39(),
        [_v21] = function (_v0) {
          let _v1 = (0, _v9.useContext)(_v32.ViewerContext),
            [_v2, _v3] = (0, _v9.useState)(!1),
            [_v4, _v5] = (0, _v9.useState)(!1),
            _v6 = _v0?.live?.status === "streaming";
          return (0, _v9.useEffect)(function () {
            if (_v6 && _v1) {
              let _v0 = _v0?.live?.chat.roomId;
              setTimeout(async () => {
                try {
                  let _v0 = await _v472(_v0, _v1);
                  _v3(_v0);
                } catch (_v0) {
                  console.error(_v0);
                }
              });
              let _v1 = setInterval(async () => {
                try {
                  _v3(await _v472(_v0, _v1));
                } catch (_v0) {}
              }, 0);
              return () => clearInterval(_v1);
            }
            _v3(!1);
          }, [_v6, _v1?.jwt]), (0, _v9.useEffect)(function () {
            _v5(!!(_v6 && _v2));
          }, [_v6, _v2]), [_v4];
        }(_v2),
        _v22 = (0, _v9.useRef)(null),
        _v23 = (0, _v9.useRef)(null),
        _v24 = _v2.user.pictures.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", "),
        _v25 = _v149(_v2),
        _v26 = _v22 && _v22.current && _v21 && _v18 ? window.innerHeight - _v22.current.clientHeight - 40 : "unset",
        _v27 = _v148(_v2.live?.recurringEvent?.uri, _v84),
        _v28 = _v2.live?.recurringEvent?.streamPrivacy?.unlistedHash,
        _v29 = _v2.live?.recurringEvent?.album?.id === _v1 ? _v11 : void 0,
        _v30 = _v21 && _v16 && !!_v27,
        _v31 = (0, _v9.useMemo)(() => `${_v9}/showcase/${_v1}/video/${_v25}/embed?jwt=${_v10}&autoplay=${_v14 || _v7 ? 1 : 0}${_v11 ? `&hash=${_v11}` : ""}${_v20()}`, [_v9, _v1, _v25, _v14, _v7, _v11]);
      (0, _v9.useEffect)(() => (window.addEventListener("message", _v32), window.addEventListener("resize", _v33), _v33(), () => {
        window.removeEventListener("message", _v32), window.removeEventListener("resize", _v33);
      })), (0, _v9.useEffect)(() => {
        _v13(!0), _v15(!1);
      }, [_v2.uri]);
      let _v32 = _v0 => {
          "PLAYER_ENDED" === _v0.data && _v5();
        },
        _v33 = () => {
          window.innerWidth <= 767 && !_v18 && _v19(!0), window.innerWidth > 767 && _v18 && (_v17(!1), _v19(!1));
        };
      return (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsxs)(_v478, {
          ref: _v22,
          children: [(0, _v6.jsxs)(_v479, {
            onClick: _v0,
            brandColor: _v3,
            children: [(0, _v6.jsx)(_v467.ArrowLeft, {}), (0, _v6.jsx)(_v483, {
              size: "1",
              children: (0, _v31.translate)({
                singular: "Back",
                dictionary: {
                  es: {
                    singular: "Atrás"
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
                    singular: "뒤로"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              })
            })]
          }), (0, _v6.jsxs)(_v480, {
            isChatVisible: _v30,
            children: [_v12 && (0, _v6.jsx)(_v486, {}), (0, _v6.jsx)("iframe", {
              onLoad: () => {
                _v23.current && _v23.current.contentWindow && _v23.current.contentWindow.postMessage("ATTACH_PLAYER_EVENTS", "*"), _v13(!1);
              },
              ref: _v23,
              scrolling: "no",
              allowFullScreen: !0,
              allow: "autoplay",
              src: _v31,
              title: _v2.name
            }), _v8 && (0, _v6.jsxs)("div", {
              children: [(0, _v6.jsx)(_v488, {
                theme: _v4,
                onClick: _v6,
                children: (0, _v6.jsx)(_v477, {})
              }), (0, _v6.jsx)(_v489, {
                theme: _v4,
                onClick: _v5,
                children: (0, _v6.jsx)(_v352.ChevronRight, {})
              })]
            }), _v21 && (0, _v6.jsx)(_v476, {
              onClick: () => {
                _v17(!_v16);
              },
              children: (0, _v6.jsx)(_v468, {})
            })]
          }), _v30 && !_v18 && (0, _v6.jsx)(_v474, {
            children: (0, _v6.jsx)(_v471.InteractionToolsEntry, {
              isStandalone: !0,
              isActiveStatusObservingEnabled: !1,
              isCustomThemeEnabled: !1,
              isFooterEnabled: !1,
              isManagementDisabled: !0,
              isCollapsibleSignIn: !0,
              isBypassStatusObservingEnabled: !0,
              sessionType: _v470.EComposerSessionType.LIVE_EVENT,
              sessionId: _v27,
              roomHashedPassword: _v29,
              roomUnlistedHash: _v28,
              toolbarPanelMaxSize: 400
            })
          })]
        }), (0, _v6.jsxs)(_v490, {
          style: {
            minHeight: _v26
          },
          children: [(0, _v6.jsxs)(_v481, {
            theme: _v4,
            children: [(0, _v6.jsx)(_v482, {
              children: _v2.name
            }), (0, _v6.jsxs)(_v484, {
              theme: _v4,
              children: [_v24 && (0, _v6.jsx)(_v485, {
                src: _v2.user.pictures.sizes[0].link,
                srcSet: _v24,
                alt: ""
              }), (0, _v6.jsx)(_v141.Paragraph, {
                size: "2",
                children: _v2.user.name
              })]
            }), (0, _v6.jsx)(_v141.Paragraph, {
              size: "2",
              children: _v2.description
            })]
          }), _v21 && _v18 && (0, _v6.jsx)(_v475, {
            children: (0, _v6.jsx)(_v471.InteractionToolsEntry, {
              isStandalone: !0,
              isActiveStatusObservingEnabled: !1,
              isCustomThemeEnabled: !1,
              isFooterEnabled: !1,
              isManagementDisabled: !0,
              isCollapsibleSignIn: !0,
              isBypassStatusObservingEnabled: !0,
              sessionType: _v470.EComposerSessionType.LIVE_EVENT,
              sessionId: _v27,
              roomHashedPassword: _v29,
              roomUnlistedHash: _v28,
              toolbarPanelMaxSize: 600,
              toolbarAttachPosition: _v469.ESidebarAttach.BOTTOM
            })
          })]
        })]
      });
    },
    _v474 = _v15.default.div.withConfig({
      displayName: "LivePlayer__LiveChatWrapper",
      componentId: "sc-23c0fa7d-0"
    })`
  flex-shrink: 0;
  background: white;
  position: relative;
  margin-top: ${(0, _v14.rem)(70)};
  width: ${(0, _v14.rem)(400)};
`,
    _v475 = _v15.default.div.withConfig({
      displayName: "LivePlayer__MobileChatWrapper",
      componentId: "sc-23c0fa7d-1"
    })`
  background: white;
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: ${(0, _v14.rem)(600)};
`,
    _v476 = _v15.default.div.withConfig({
      displayName: "LivePlayer__ChatIconWrapper",
      componentId: "sc-23c0fa7d-2"
    })`
  padding: ${(0, _v14.rem)(10)};
  background: rgba(0, 0, 0, 0.3);
  width: ${(0, _v14.rem)(50)};
  height: ${(0, _v14.rem)(50)};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  svg path {
    fill: white;
  }

  @media only screen and (max-width: 960px) {
    width: ${(0, _v14.rem)(50)};
    height: ${(0, _v14.rem)(50)};
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`,
    _v477 = (0, _v15.default)(_v352.ChevronRight).withConfig({
      displayName: "LivePlayer__PreviousIcon",
      componentId: "sc-23c0fa7d-3"
    })`
  transform: rotate(180deg);
`,
    _v478 = _v15.default.div.withConfig({
      displayName: "LivePlayer__LivePlayerContainer",
      componentId: "sc-23c0fa7d-4"
    })`
  display: flex;
  position: relative;
  height: calc(70vw * 9 / 16 + ${(0, _v14.rem)(70)});

  @media only screen and (max-width: 767px) {
    height: calc(100vw * 9 / 16 + ${(0, _v14.rem)(70)});
  }
`,
    _v479 = _v15.default.div.withConfig({
      displayName: "LivePlayer__BackArrow",
      componentId: "sc-23c0fa7d-5"
    })`
  position: absolute;
  top: ${(0, _v14.rem)(20)};
  left: ${(0, _v14.rem)(30)};
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: ${(0, _v14.rem)(30)};
    height: ${(0, _v14.rem)(30)};
    padding-right: ${(0, _v14.rem)(10)};
    path {
      fill: ${_v0 => _v0.brandColor ? _v0.brandColor : _v74.bokehTheme.colors.blue["500"]};
    }
  }
`,
    _v480 = _v15.default.div.withConfig({
      displayName: "LivePlayer__VideoWrapper",
      componentId: "sc-23c0fa7d-6"
    })`
  width: 70vw;
  height: calc(100% - ${(0, _v14.rem)(70)});
  position: relative;
  margin: ${_v0 => _v0.isChatVisible ? `${(0, _v14.rem)(70)} 0 0` : `${(0, _v14.rem)(70)} auto 0`};
  flex-grow: ${_v0 => _v0.isChatVisible ? "1" : "0"};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`,
    _v481 = _v15.default.div.withConfig({
      displayName: "LivePlayer__TextWrapper",
      componentId: "sc-23c0fa7d-7"
    })`
  margin: ${(0, _v14.rem)(50)} auto;
  padding: ${(0, _v14.rem)(40)} 0;
  width: 70vw;
  color: ${_v0 => "dark" === _v0.theme ? "white" : "black"};
  flex-grow: 0;

  p {
    color: inherit;
  }

  @media only screen and (max-width: 767px) {
    padding: ${(0, _v14.rem)(20)};
    margin: 0;
  }
`,
    _v482 = (0, _v15.default)(_v43.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "LivePlayer__Title",
      componentId: "sc-23c0fa7d-8"
    })`
  font-size: calc(2rem + 3.5vw);
  font-weight: 800;
  color: inherit;
  font-size: ${(0, _v14.rem)(55)};
  line-height: ${(0, _v14.rem)(60)};
  letter-spacing: ${(0, _v14.rem)(-1.5)};

  @media only screen and (max-width: 1024px) {
    font-size: ${(0, _v14.rem)(40)};
    line-height: ${(0, _v14.rem)(46)};
    letter-spacing: ${(0, _v14.rem)(-1)};
  }

  @media only screen and (max-width: 767px) {
    font-size: ${(0, _v14.rem)(30)};
    line-height: ${(0, _v14.rem)(34)};
    letter-spacing: ${(0, _v14.rem)(-.75)};
  }
`,
    _v483 = (0, _v15.default)(_v141.Paragraph).withConfig({
      displayName: "LivePlayer__ParagraphNoMargin",
      componentId: "sc-23c0fa7d-9"
    })`
  margin: 0;
`,
    _v484 = _v15.default.div.withConfig({
      displayName: "LivePlayer__ProfileLine",
      componentId: "sc-23c0fa7d-10"
    })`
  display: flex;

  p {
    color: ${_v0 => "dark" === _v0.theme ? "white" : "black"};
  }
`,
    _v485 = _v15.default.img.withConfig({
      displayName: "LivePlayer__AvatarImg",
      componentId: "sc-23c0fa7d-11"
    })`
  width: ${(0, _v14.rem)(30)};
  height: ${(0, _v14.rem)(30)};
  border-radius: 50%;
  margin-right: ${(0, _v14.rem)(15)};
`,
    _v486 = (0, _v15.default)(_v16.Spinner).withConfig({
      displayName: "LivePlayer__CenteredLoader",
      componentId: "sc-23c0fa7d-12"
    })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v487 = _v15.css`
  width: 5vw;
  z-index: 5;
  opacity: 0.25;
  cursor: pointer;

  path {
    fill: ${_v0 => "dark" === _v0.theme ? "white" : "black"};
  }

  &:hover {
    opacity: 1;
  }
`,
    _v488 = _v15.default.div.withConfig({
      displayName: "LivePlayer__PreviousButton",
      componentId: "sc-23c0fa7d-13"
    })`
  position: absolute;
  top: 42%;
  left: -14%;

  svg {
    ${_v487};
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`,
    _v489 = _v15.default.div.withConfig({
      displayName: "LivePlayer__NextButton",
      componentId: "sc-23c0fa7d-14"
    })`
  position: absolute;
  top: 42%;
  right: -14%;

  svg {
    ${_v487};
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`,
    _v490 = _v15.default.div.withConfig({
      displayName: "LivePlayer__BottomWrapper",
      componentId: "sc-23c0fa7d-15"
    })`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    overflow: scroll;
  }
`,
    _v491 = "next",
    _v492 = "previous",
    _v493 = _v0 => _v156(_v0.search).video || null,
    _v494 = _v15.default.div.withConfig({
      displayName: "Live__LiveWrapper",
      componentId: "sc-13f4ef67-0"
    })`
  width: 100%;
  background-color: ${_v0 => "dark" === _v0.theme ? "black" : "white"};
  color: ${_v0 => "dark" === _v0.theme ? "white" : "black"};
  position: relative;
`,
    _v495 = _v15.default.div.withConfig({
      displayName: "Live__VideoGrid",
      componentId: "sc-13f4ef67-1"
    })`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  display: grid;
  margin: 0 auto;
  padding: ${(0, _v14.rem)(25)};
  grid-template-columns: repeat(auto-fill, minmax(${(0, _v14.rem)("280px")}, 1fr));
  min-width: ${(0, _v14.rem)(330)};
  max-width: ${(0, _v14.rem)(0)};
  @media only screen and (max-width: 767px) {
    padding: ${(0, _v14.rem)(10)};
  }
`,
    _v496 = _v15.default.div.withConfig({
      displayName: "Live__BottomSwatch",
      componentId: "sc-13f4ef67-2"
    })`
  padding-bottom: ${(0, _v14.rem)(60)};
`,
    _v497 = _v15.default.div.withConfig({
      displayName: "Live__PaginationWrapper",
      componentId: "sc-13f4ef67-3"
    })`
  padding: 0 ${(0, _v14.rem)(25)};
  max-width: ${(0, _v14.rem)(0)};
  margin: 0 auto;
`,
    _v498 = function ({
      albumId: _v0,
      allowShare: _v1,
      brandColor: _v2,
      curUser: _v3,
      customLogo: _v4,
      name: _v5,
      openShare: _v6,
      openWatch: _v7,
      theme: _v8,
      videos: _v9,
      albumIsEmpty: _v10,
      allowDownloads: _v11,
      setDownloadClipId: _v12,
      openDownloadModal: _v13,
      continuousPlay: _v14 = !1,
      page: _v15,
      setPage: _v16,
      totalVideos: _v17,
      isUpdating: _v18,
      layout: _v19,
      isOffsite: _v20 = !1,
      isOwnerOrAdmin: _v21,
      webCustomLogo: _v22,
      pictures: _v23,
      sort: _v24,
      hideUpcoming: _v25,
      hashedPass: _v26,
      albumOwnerId: _v27,
      teamRole: _v28,
      hasChosenThumbnail: _v29
    }) {
      let _v30 = (0, _v244.useHistory)(),
        _v31 = _v493(_v30.location),
        _v32 = _v31 && _v31.length,
        _v33 = _v32 ? _v31 : null,
        {
          isSearching: _v34,
          isLoading: _v35,
          hasErrored: _v36,
          results: _v37,
          searchPage: _v38,
          searchTotal: _v39
        } = _v242(),
        _v40 = _v243(),
        _v41 = _v24 && _v94[_v24] ? _v94[_v24] : _v93,
        _v42 = (0, _v9.useContext)(_v32.ViewerContext),
        _v43 = (0, _v9.useContext)(_v33),
        _v44 = (0, _v9.useMemo)(() => _v158(_v29 ? _v23 : []), [_v23, _v29]);
      if (!_v42) return null;
      let {
          apiUrl: _v45,
          vimeoHttpsUrl: _v46,
          jwt: _v47
        } = _v42,
        [_v48, _v49] = (0, _v9.useState)(!!_v32),
        [_v50, _v51] = (0, _v9.useState)(0),
        [_v52, _v53] = (0, _v9.useState)(_v9.length > 1),
        _v54 = (_v0, _v1) => _v1 ? `/showcase/${_v0}/embed2` : _v20 ? "" + _v0 : `/showcase/${_v0}` + _v0,
        _v55 = (0, _v9.useCallback)(() => {
          _v13.FatalAttraction.trackClick({
            container: "live_event",
            component: "live_web_layout",
            keyword: "back"
          }), _v28 && _v13.FatalAttraction.trackClick({
            container: "team_home_page",
            component: "live_web_layout",
            keyword: "back_to_team_home_page_" + _v28.toLowerCase()
          }), _v49(!1), _v30.replace(_v54("", _v43?.isShowcaseEmbeded));
        }, [_v48]);
      (0, _v9.useEffect)(() => {
        _v32 && _v59(), _v30.listen(() => {
          let _v0 = (() => {
            let _v0 = _v493(_v30.location);
            if (!(!_v0 || 0 > Number(_v0))) return Number(_v0);
          })();
          _v0 ? (_v49(!0), _v51(_v0)) : _v49(!1);
        });
      }, [_v32]);
      let _v56 = {
          ..._v41,
          fields: _v97,
          page: 1,
          per_page: 1,
          filter: _v25 ? "playable" : "",
          _hashed_pass: _v26 || "",
          is_embed: _v43?.isShowcaseEmbeded,
          referrer: _v43?.referrer
        },
        {
          data: _v57
        } = (0, _v51.useQuery)(`/albums/${_v0}/videos`, {
          variables: _v56,
          accept: [{
            resource: "video",
            version: "3.4.9"
          }]
        }),
        _v58 = _v57 && _v57.items.length ? _v57.items[0] : _v9[0],
        [_v59, {
          data: _v60,
          error: _v61
        }] = (0, _v163.useLazyQuery)(`/albums/${_v0}/videos/${_v33}`, {
          variables: _v56
        });
      (0, _v9.useEffect)(() => {
        _v60 && !_v60.uri && _v31 && _v30.replace(_v54(""));
      }, [_v60]);
      let _v62 = _v9.findIndex(_v0 => _v0.uri ? _v50 === parseInt(_v0.uri.split("videos/")[1], 10) : -1),
        _v63 = (0, _v9.useMemo)(() => {
          let _v0 = _v493(_v30.location);
          return _v60 && _v60.uri && _v0 && _v0 === _v60.uri.split("videos/")[1] ? _v60 : _v62 < 0 && _v58 && _v58.uri && _v50 === parseInt(_v58.uri.split("videos/")[1], 10) ? _v58 : _v9[_v62];
        }, [_v62, _v58, _v60]);
      if (_v61) throw _v61;
      if (_v32 && !_v63 || !_v58 && !_v10) return null;
      let _v64 = _v0 => {
          _v34 && _v40({
            type: "CLOSE_SEARCH"
          }), window.scrollTo(0, 0), _v30.push(_v54(`?video=${_v0}`));
        },
        _v65 = _v0 => {
          let _v1 = _v9.length;
          if (_v62 >= 0) {
            let _v0 = _v1 - 1,
              _v1 = _v62 === _v0 ? 0 : _v62 + 1,
              _v2 = 0 === _v62 ? _v0 : _v62 - 1;
            _v15 > 1 && (_v1 = _v62 === _v0 ? -1 : _v62 + 1, _v2 = 0 === _v62 ? -1 : _v62 - 1);
            let _v3 = _v0 === _v491 ? _v1 : _v2;
            _v28 && _v13.FatalAttraction.trackClick({
              container: "team_home_page",
              component: "live_web_layout",
              keyword: _v0 === _v492 ? "clicked_left" : "clicked_right"
            }), _v3 >= 0 && _v64(parseInt(_v9[_v3].uri.split("videos/")[1], 10)), _v3 < 0 && _v58 && _v64(parseInt(_v58.uri.split("videos/")[1], 10));
          } else _v64(parseInt(_v9[_v0 === _v491 ? 0 : _v17 - 1].uri.split("videos/")[1], 10));
        };
      return _v10 ? (0, _v6.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, _v6.jsx)(_v466, {
          allowShare: _v1,
          avatar: _v3 && _v3.pictures,
          userName: _v3 && _v3.name,
          logo: _v4,
          name: _v5,
          openShare: _v6,
          webCustomLogo: _v22,
          albumOwnerId: _v27,
          teamRole: _v28
        }), (0, _v6.jsx)(_v433, {
          isOwnerOrAdmin: _v21,
          albumId: _v0,
          defaultThumbnail: _v44
        })]
      }) : (0, _v6.jsx)(_v6.Fragment, {
        children: _v48 && _v63 && "CLIP_PLACEHOLDER" !== _v63.displayType ? (0, _v6.jsx)(_v473, {
          onBack: _v55,
          brandColor: _v2,
          theme: _v8,
          albumId: _v0,
          selectedVideo: _v63,
          onNext: () => _v65(_v491),
          onPrevious: () => _v65(_v492),
          continuousPlay: _v14,
          displayArrows: _v52,
          baseUrl: _v46,
          jwt: _v47,
          hashedPass: _v26
        }) : (0, _v6.jsxs)(_v494, {
          theme: _v8,
          children: [_v58 && (0, _v6.jsxs)("div", {
            children: [(0, _v6.jsx)(_v466, {
              allowShare: _v1,
              avatar: _v3 && _v3.pictures,
              userName: _v3 && _v3.name,
              logo: _v4,
              name: _v5,
              openShare: _v6,
              webCustomLogo: _v22,
              albumOwnerId: _v27,
              teamRole: _v28
            }), !_v34 && (0, _v6.jsx)(_v446, {
              albumId: _v0,
              brandColor: _v2,
              defaultThumbnail: _v44,
              logo: !!_v4,
              name: _v5,
              onPlay: () => {
                _v7 && _v7(), _v58 && _v58.uri && (_v52 || _v53(!0), _v64(parseInt(_v58.uri.split("videos/")[1], 10)));
              },
              featuredVideo: _v58,
              apiUrl: _v45,
              apiJwt: _v47,
              hashedPass: _v26
            })]
          }), _v18 ? (0, _v6.jsx)(_v350, {}) : (0, _v6.jsx)(_v496, {
            children: (0, _v6.jsxs)(_v6.Fragment, {
              children: [_v34 ? (0, _v6.jsx)(_v371, {
                results: _v37,
                page: _v38,
                totalVideos: _v39,
                isLoading: _v35,
                hasErrored: _v36,
                onPlay: _v64
              }) : (0, _v6.jsx)(_v495, {
                children: _v9.map((_v0, _v1) => 1 === _v15 && 0 === _v1 ? null : (0, _v6.jsx)(_v349, {
                  brandColor: _v2,
                  title: _v0.name,
                  description: _v0.description,
                  duration: _v0.duration,
                  thumbnails: _v0.pictures,
                  onPlay: () => {
                    _v52 || _v53(!0), "CLIP_PLACEHOLDER" !== _v0.displayType && (_v64(parseInt(_v0.uri.split("videos/")[1], 10)), _v13.FatalAttraction.trackClick({
                      container: "showcase",
                      component: "live_video_row",
                      keyword: _v1
                    }), _v28 && _v13.FatalAttraction.trackClick({
                      container: "team_home_page",
                      component: "live_video_row",
                      keyword: _v1
                    }));
                  },
                  type: _v0.type,
                  live: _v0.live,
                  theme: _v8,
                  allowDownloads: _v11 && _v0.privacy.download,
                  setDownloadClipId: _v12,
                  openDownloadModal: _v13,
                  displayType: _v0.displayType,
                  videoId: "CLIP_PLACEHOLDER" === _v0.displayType ? _v1 : _v148(_v0?.uri, _v83)
                }, "CLIP_PLACEHOLDER" === _v0.displayType ? _v1 : _v148(_v0?.uri, _v83)))
              }), !_v34 && (0, _v6.jsx)(_v497, {
                children: (0, _v6.jsx)(_v360, {
                  theme: _v8,
                  currentPage: _v15,
                  pageSize: _v157(_v89),
                  totalItems: _v17,
                  onSetPage: _v16,
                  layout: _v19
                })
              })]
            })
          })]
        })
      });
    },
    _v499 = _v15.default.iframe.withConfig({
      displayName: "Player__StyledIframe",
      componentId: "sc-6e6dba4c-0"
    })`
  width: ${({
      width: _v0
    }) => _v0};
  height: ${({
      height: _v0
    }) => _v0};
  position: ${({
      position: _v0
    }) => _v0};
  @media (max-width: ${500}px) {
    height: ${({
      mobileHeight: _v0
    }) => _v0};
  }
`,
    _v500 = ({
      albumId: _v0,
      width: _v1 = "100%",
      height: _v2 = "100%",
      position: _v3 = "absolute",
      mobileHeight: _v4 = "100%",
      isOffsite: _v5
    }) => {
      let _v6 = (0, _v9.useContext)(_v33);
      return (0, _v6.jsx)(_v499, {
        src: `${_v160(_v5)}/showcase/${_v0}/embed${_v6?.isShowcaseEmbeded ? `?referrer=${encodeURIComponent(document?.referrer)}` : ""}`,
        width: _v1,
        height: _v2,
        mobileHeight: _v4,
        position: _v3
      });
    };
  var _v501 = _v0.i(0);
  let _v502 = _v15.default.div.withConfig({
      displayName: "ErrorPage__Container",
      componentId: "sc-5dea97be-0"
    })`
  margin-top: ${(0, _v14.rem)(40)};
  text-align: center;
`,
    _v503 = _v15.default.h1.withConfig({
      displayName: "ErrorPage__Title",
      componentId: "sc-5dea97be-1"
    })`
  margin-top: 0;
  margin-bottom: ${(0, _v14.rem)(10)};
`,
    _v504 = _v15.default.div.withConfig({
      displayName: "ErrorPage__Content",
      componentId: "sc-5dea97be-2"
    })`
  margin: 0 auto;
  max-width: ${(0, _v14.rem)(660)};
  padding: 0 ${(0, _v14.rem)(15)} ${(0, _v14.rem)(10)};
`,
    _v505 = _v15.default.div.withConfig({
      displayName: "ErrorPage__Message",
      componentId: "sc-5dea97be-3"
    })`
  margin-bottom: ${(0, _v14.rem)(30)};
`,
    _v506 = ({
      title: _v0,
      message: _v1
    }) => (0, _v6.jsxs)(_v502, {
      children: [(0, _v6.jsx)(_v503, {
        children: _v0
      }), (0, _v6.jsx)(_v504, {
        children: (0, _v6.jsx)(_v505, {
          children: _v1
        })
      })]
    });
  function _v507({
    error: _v0
  }) {
    let {
        trackErrorPageDisplayed: _v1
      } = (0, _v501.useErrorPageTracking)(),
      _v2 = _v0 instanceof _v19.RateLimitError ? {
        errorType: "rate_limit",
        errorPageErrorCode: 429
      } : _v0 instanceof _v19.ResourceNotFoundError ? {
        errorType: "resource_not_found",
        errorPageErrorCode: 404
      } : _v0 instanceof _v19.ForbiddenError ? {
        errorType: "forbidden",
        errorPageErrorCode: 403
      } : _v0 instanceof _v19.UnauthorizedError ? {
        errorType: "unauthorized",
        errorPageErrorCode: 401
      } : _v0 instanceof _v162 ? {
        errorType: "clips_fetch",
        errorPageErrorCode: null
      } : {
        errorType: "technical_difficulties",
        errorPageErrorCode: null
      };
    switch ((0, _v71.usePicoEffect)(() => {
      _v1({
        errorPageType: "showcase",
        ..._v2
      });
    }, [], {
      once: !0
    }), _v0.constructor) {
      default:
        return window.DD_RUM && window.DD_RUM.onReady(() => {
          window.DD_RUM.addError(_v0, {
            component: "TechnicalDifficulties"
          });
        }), (0, _v6.jsx)(_v506, {
          title: (0, _v31.translate)({
            singular: "Technical Difficulties",
            dictionary: {
              es: {
                singular: "Dificultades técnicas"
              },
              "de-DE": {
                singular: "Technische Schwierigkeiten"
              },
              "fr-FR": {
                singular: "Difficultés techniques"
              },
              "ja-JP": {
                singular: "技術的な問題が発生しました"
              },
              "ko-KR": {
                singular: "기술적 문제"
              },
              "pt-BR": {
                singular: "Dificuldades Técnicas"
              },
              "zh-CN": {
                singular: "技术难题"
              }
            }
          }),
          message: (0, _v31.translate)({
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
          })
        });
      case _v19.RateLimitError:
        return (0, _v6.jsx)(_v506, {
          title: (0, _v31.translate)({
            singular: "Whoa there!",
            dictionary: {
              es: {
                singular: "¡Hey!"
              },
              "de-DE": {
                singular: "Immer langsam!"
              },
              "fr-FR": {
                singular: "Wow !"
              },
              "ja-JP": {
                singular: "ちょっと待って！"
              },
              "ko-KR": {
                singular: "한 번 더 생각해보세요!"
              },
              "pt-BR": {
                singular: "Calma aí!"
              },
              "zh-CN": {
                singular: "哇喔！"
              }
            }
          }),
          message: (0, _v31.translate)({
            singular: "Sorry, you have made too many requests in a short period of time. Please wait a few minutes and try again.",
            dictionary: {
              es: {
                singular: "Lo sentimos, has realizado demasiadas solicitudes en un corto periodo de tiempo. Espera unos minutos e inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Entschuldige, aber du hast innerhalb zu kurzer Zeit zu viele Anfragen gestellt. Bitte warte einige Minuten und versuche es erneut."
              },
              "fr-FR": {
                singular: "Nous sommes désolés, mais vous avez effectué un trop grand nombre de demandes sur une période réduite. Veuillez patienter quelques minutes, puis réessayer."
              },
              "ja-JP": {
                singular: "大変申し訳ありません。短時間に大量のリクエストが送信されました。しばらくお待ちいただいてから、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 짧은 시간 내에 너무 많은 요청을 했습니다. 몇 분 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Desculpe, mas você fez muitas solicitações em um curto período de tempo. Aguarde alguns minutos e tente de novo."
              },
              "zh-CN": {
                singular: "对不起，您在短时间内提出了太多请求。请过几分钟后再重试。"
              }
            }
          })
        });
      case _v19.ResourceNotFoundError:
        return (0, _v6.jsx)(_v506, {
          title: (0, _v31.translate)({
            singular: "Sorry, we couldn’t find that page",
            dictionary: {
              es: {
                singular: "Lo sentimos, no pudimos encontrar esa página"
              },
              "de-DE": {
                singular: "Leider konnten wir die Seite nicht finden"
              },
              "fr-FR": {
                singular: "Désolé, nous n'avons pas pu trouver cette page."
              },
              "ja-JP": {
                singular: "申し訳ありませんが、ページが見つかりませんでした。"
              },
              "ko-KR": {
                singular: "죄송합니다, 페이지를 찾을 수 없습니다"
              },
              "pt-BR": {
                singular: "Desculpe, não conseguimos encontrar essa página"
              },
              "zh-CN": {
                singular: "抱歉，我们找不到该页面"
              }
            }
          }),
          message: (0, _v31.translate)({
            singular: "Make sure you’ve typed the URL correctly, or try searching Vimeo.",
            dictionary: {
              es: {
                singular: "Asegúrese de haber escrito bien el URL o intente buscar el video en Vimeo."
              },
              "de-DE": {
                singular: "Stellen Sie sicher, dass Sie die URL korrekt eingeben oder versuchen Sie Vimeo zu googeln. "
              },
              "fr-FR": {
                singular: "Assurez-vous d'avoir saisi l'URL correctement, ou essayez une recherche sur Vimeo."
              },
              "ja-JP": {
                singular: "URLが正しく記入されているか確認するか、Vimeoを検索してください。"
              },
              "ko-KR": {
                singular: "URL을 정확히 입력했는지 확인하거나 Vimeo를 검색해보세요."
              },
              "pt-BR": {
                singular: "Certifique-se de que você digitou o URL corretamente ou tente procurar no Vimeo."
              },
              "zh-CN": {
                singular: "请确保您输入的 URL 正确无误，或尝试搜索 Vimeo。"
              }
            }
          })
        });
      case _v19.ForbiddenError:
        return (0, _v6.jsx)(_v506, {
          title: (0, _v31.translate)({
            singular: "Permission Denied",
            dictionary: {
              es: {
                singular: "Permiso denegado"
              },
              "de-DE": {
                singular: "Berechtigung verweigert"
              },
              "fr-FR": {
                singular: "Autorisation refusée"
              },
              "ja-JP": {
                singular: "拒否されました"
              },
              "ko-KR": {
                singular: "승인 거부"
              },
              "pt-BR": {
                singular: "Permissão Negada"
              },
              "zh-CN": {
                singular: "权限被拒绝"
              }
            }
          }),
          message: (0, _v31.translate)({
            singular: "Sorry but you do not have the proper permission to access this area of Vimeo.",
            dictionary: {
              es: {
                singular: "No dispones del permiso adecuado para acceder a esta zona de Vimeo."
              },
              "de-DE": {
                singular: "Für diesen Bereich bei Vimeo fehlt dir leider die Zugangsberechtigung."
              },
              "fr-FR": {
                singular: "Désolé, nous n'avez pas l'autorisation nécessaire pour accéder à cet espace de Vimeo."
              },
              "ja-JP": {
                singular: "大変申し訳ありません。この Vimeo エリアへのアクセスは許可されていません。"
              },
              "ko-KR": {
                singular: "죄송합니다. 이 영역을 액세스하기 위해 필요한 권한이 없습니다."
              },
              "pt-BR": {
                singular: "Desculpe, mas você não tem a permissão necessária para acessar esta área do Vimeo."
              },
              "zh-CN": {
                singular: "抱歉，您没有访问 Vimeo 此区域的适当权限。"
              }
            }
          })
        });
      case _v19.UnauthorizedError:
        return (0, _v6.jsx)(_v506, {
          title: (0, _v31.translate)({
            singular: "Unauthorized",
            dictionary: {
              es: {
                singular: "No autorizado"
              },
              "de-DE": {
                singular: "Nicht genehmigt"
              },
              "fr-FR": {
                singular: "Non autorisé"
              },
              "ja-JP": {
                singular: "許可されていません。"
              },
              "ko-KR": {
                singular: "권한이 없습니다"
              },
              "pt-BR": {
                singular: "Não autorizado"
              },
              "zh-CN": {
                singular: "未经授权"
              }
            }
          }),
          message: (0, _v31.translate)({
            singular: "You are unauthorized for this action.",
            dictionary: {
              es: {
                singular: "No estás autorizado para llevar a cabo esta acción."
              },
              "de-DE": {
                singular: "Zu dieser Aktion bist du nicht berechtigt."
              },
              "fr-FR": {
                singular: "Vous n'avez pas l’autorisation requise pour effectuer cette action."
              },
              "ja-JP": {
                singular: "このアクションは許可されません"
              },
              "ko-KR": {
                singular: "이 작업에 대한 권한이 없습니다."
              },
              "pt-BR": {
                singular: "Você não tem autorização para realizar esta ação."
              },
              "zh-CN": {
                singular: "您无权进行此操作。"
              }
            }
          })
        });
      case _v162:
        return (0, _v6.jsx)(_v506, {
          title: (0, _v31.translate)({
            singular: "Sorry, there was an error",
            dictionary: {
              es: {
                singular: "Lo sentimos; hubo un error."
              },
              "de-DE": {
                singular: "Leider ergab sich ein Fehler"
              },
              "fr-FR": {
                singular: "Désolé, une erreur est survenue"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "죄송합니다, 오류가 발생했습니다"
              },
              "pt-BR": {
                singular: "Desculpe, mas ocorreu um erro"
              },
              "zh-CN": {
                singular: "抱歉，出错了"
              }
            }
          }),
          message: (0, _v31.translate)({
            singular: "There was a problem loading these videos. Refresh to try again.",
            dictionary: {
              es: {
                singular: "Hubo un problema al cargar los videos. Refresca la página e inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Es gab einen Fehler beim Laden des Videos. Bitte aktualisieren, um zu sehen, ob das hilft."
              },
              "fr-FR": {
                singular: "Une erreur est survenue lors du chargement de ces vidéo. Recharger la page pour essayer à nouveau."
              },
              "ja-JP": {
                singular: "この動画の読み込みに問題が発生しました。ページを更新し再度お試しください。"
              },
              "ko-KR": {
                singular: "이 동영상을 로드하는 도중에 오류가 발생했습니다. 새로고침하여 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Houve um erro ao carregar estes vídeos. Atualize a página para tentar novamente."
              },
              "zh-CN": {
                singular: "加载这些视频时出现问题。请刷新重试。"
              }
            }
          })
        });
    }
  }
  let _v508 = "theme__dark",
    _v509 = new _v102.BasicCache(),
    _v510 = "vimeo_sso_auth",
    _v511 = function ({
      albumId: _v0,
      albumHash: _v1,
      handleError: _v2,
      curUser: _v3,
      album: _v4,
      hashedPass: _v5,
      defaultPage: _v6
    }) {
      let _v7,
        _v8,
        {
          sort: _v9,
          hideUpcoming: _v10,
          layout: _v11
        } = _v4,
        _v12 = _v9 && _v94[_v9] ? _v94[_v9] : _v93,
        _v13 = (0, _v9.useContext)(_v33),
        [_v14, _v15] = _v245(_v6, _v4.layout === _v88),
        {
          data: _v16,
          error: _v17,
          loading: _v18
        } = (0, _v51.useQuery)(`/albums/${_v0}/videos`, {
          variables: {
            page: _v14,
            ..._v12,
            fields: _v97,
            per_page: _v157(_v11),
            filter: _v10 ? "playable" : "",
            is_embed: _v13?.isShowcaseEmbeded,
            _hashed_pass: _v5 || "",
            referrer: _v13?.referrer
          },
          accept: {
            version: "3.4.9",
            resource: "video"
          }
        }),
        [_v19, _v20] = (0, _v9.useState)(0),
        {
          isOffsite: _v21,
          isOwnerOrAdmin: _v22
        } = (0, _v9.useContext)(_v100),
        _v23 = _v21 || _v13?.isShowcaseEmbeded,
        _v24 = (0, _v9.useContext)(_v32.ViewerContext),
        _v25 = _v148(_v4?.user?.uri, _v82);
      if (_v3) {
        let {
            data: _v0
          } = (0, _v51.useQuery)(`/users/${_v3.id}/teams`, {
            variables: {
              fields: ["owner.uri", "team_membership.role", "team_data.team_showcase_id"]
            }
          }),
          _v1 = _v0?.items.find(_v0 => function (_v0) {
            if (!_v0) return null;
            let _v1 = _v0.match(/^([0-9]+)$/);
            if (_v1) return _v1[1];
            let _v2 = _v0.match(/users\/([0-9]+)/);
            return _v2 ? _v2[1] : null;
          }(_v0.owner.uri) === String(_v25)),
          _v2 = _v25 === _v3?.id ? "Owner" : _v1?.teamMembership?.role;
        _v7 = _v1?.teamData?.teamShowcaseId ? _v2 : void 0;
      }
      let {
          capabilities: _v26
        } = (0, _v103.useCapability)(["canCustomizeAlbums", "canCreateEmbeddedPlaylists"]),
        _v27 = (0, _v9.useMemo)(() => !!_v16 && (_v18 || _v16.page !== _v14), [_v14, _v16]),
        _v28 = _v16 && _v16.items,
        _v29 = (0, _v9.useMemo)(() => !!_v28 && _v28.some(_v0 => _v0.contentRatingClass === _v146.MATURE || _v0.contentRatingClass === _v146.UNRATED), [_v28]);
      if ((0, _v9.useMemo)(() => {
        "1" === _v101.default.get(_v510) && _v7 && (_v101.default.remove(_v510, {
          path: "/",
          domain: document.domain
        }), _v13.FatalAttraction.trackImpression({
          container: "team_home_page",
          component: "team_home_page",
          keyword: "redirected_" + _v7.toLowerCase()
        }), _v13.FatalAttraction.trackImpression({
          container: "team_home_page",
          component: "team_home_page",
          keyword: "layout_" + _v11
        }));
      }, [_v7]), _v17) return (0, _v6.jsx)(_v507, {
        error: new _v162()
      });
      if (!_v16 || !_v28 || !_v26 || !_v24) return _v16 && 0 === _v16.errorCode && (window.location.hostname === _v4.domain ? location.assign("/") : location.assign(`/showcase/${_v0}`)), (0, _v6.jsx)(_v18, {});
      let {
          recaptchaSiteKey: _v30,
          xsrft: _v31
        } = _v24,
        _v32 = "anybody" === _v4.privacy.view && !_v24.user && _v24.ofcomQualifies,
        {
          canCustomizeAlbums: _v33,
          canCreateEmbeddedPlaylists: _v34
        } = _v26,
        _v35 = _v0 => {
          _v0.preventDefault(), _v15(_v14 + 1);
        },
        {
          allowDownloads: _v36,
          allowShare: _v37,
          allowContinuousPlay: _v38,
          theme: _v39
        } = _v4;
      (_v8 = document.querySelector(".footer_v2")) && ("dark" === _v39 ? _v8.classList.add(_v508) : _v8.classList.remove(_v508));
      let _v40 = !_v16 || !_v16.total || 0 === _v16.total || 0 === _v28.length,
        _v41 = _v22 && !_v13?.isShowcaseEmbeded;
      return (0, _v6.jsx)(_v102.RestfulProvider, {
        cache: _v509,
        children: _v32 && _v29 && !_v21 ? (0, _v6.jsx)(_v236, {
          albumId: _v0,
          xsrft: _v31
        }) : (0, _v6.jsx)(_v241, {
          children: (0, _v6.jsx)(_v161, {
            album: _v4,
            token: _v31,
            recaptchaSiteKey: _v30,
            teamRole: _v7,
            children: _v0 => (0, _v6.jsx)(_v202, {
              albumId: _v0,
              clipId: _v19,
              curUser: _v3,
              hashedPass: _v5,
              ownerId: _v25,
              isOwnerOrAdmin: _v22,
              children: ({
                openDownloadModal: _v0
              }) => (0, _v6.jsxs)(_v6.Fragment, {
                children: [_v11 === _v87 && (0, _v6.jsx)(_v431, {
                  albumId: _v0,
                  albumHash: _v1,
                  albumIsEmpty: _v40,
                  customLogo: _v4.customLogo,
                  webCustomLogo: _v4.webCustomLogo,
                  description: _v4.description,
                  isOwnerOrAdmin: _v22,
                  layout: _v4.layout,
                  name: _v4.name,
                  theme: _v4.theme,
                  videos: _v28,
                  totalVideos: _v16.total,
                  page: _v14,
                  setPage: _v15,
                  openShare: _v0.openShare,
                  allowShare: _v37,
                  isUpdating: _v27,
                  curUser: _v3,
                  isOffsite: _v23,
                  allowDownloads: _v36,
                  setDownloadClipId: _v20,
                  openDownloadModal: _v0,
                  albumOwnerId: _v25,
                  teamRole: _v7,
                  pictures: _v4.pictures,
                  hasChosenThumbnail: _v4.hasChosenThumbnail
                }), _v11 === _v88 && (0, _v6.jsx)(_v397, {
                  albumId: _v0,
                  albumIsEmpty: _v40,
                  brandColor: _v150(_v4.brandColor),
                  customLogo: _v4.customLogo,
                  webCustomLogo: _v4.webCustomLogo,
                  description: _v4.description,
                  layout: _v4.layout,
                  name: _v4.name,
                  theme: _v4.theme,
                  totalVideos: _v16.total,
                  videos: _v28,
                  openShare: _v0.openShare,
                  allowShare: _v37,
                  isUpdating: _v27,
                  LoadMoreButton: (0, _v6.jsx)(_v228, {
                    videoData: _v16,
                    album: _v4,
                    getMoreAlbumVideos: _v35,
                    isLoadingMore: _v18
                  }),
                  handleError: _v2,
                  curUser: _v3,
                  isOffsite: _v23,
                  allowDownloads: _v36,
                  setDownloadClipId: _v20,
                  openDownloadModal: _v0,
                  continuousPlay: _v38,
                  page: _v14,
                  albumOwnerId: _v25,
                  teamRole: _v7,
                  pictures: _v4.pictures,
                  hasChosenThumbnail: _v4.hasChosenThumbnail
                }), _v11 === _v89 && (0, _v6.jsx)(_v498, {
                  albumIsEmpty: _v40 || 0 === _v28.length,
                  customLogo: _v4.customLogo,
                  webCustomLogo: _v4.webCustomLogo,
                  openShare: _v0.openShare,
                  name: _v4.name,
                  curUser: _v3,
                  allowShare: _v37,
                  videos: _v28,
                  albumId: _v0,
                  brandColor: _v150(_v4.brandColor),
                  theme: _v4.theme,
                  allowDownloads: _v36,
                  setDownloadClipId: _v20,
                  openDownloadModal: _v0,
                  continuousPlay: _v38,
                  page: _v14,
                  setPage: _v15,
                  totalVideos: _v16.total,
                  isUpdating: _v27,
                  layout: _v4.layout,
                  isOffsite: _v23,
                  isOwnerOrAdmin: _v22,
                  pictures: _v4.pictures,
                  sort: _v4.sort,
                  hideUpcoming: _v4.hideUpcoming,
                  hashedPass: _v5,
                  albumOwnerId: _v25,
                  teamRole: _v7,
                  hasChosenThumbnail: _v4.hasChosenThumbnail
                }), _v11 === _v90 && (0, _v6.jsx)(_v500, {
                  albumId: _v0,
                  height: _v41 ? `calc(100vh - ${(0, _v30.rem)(60)})` : "100%",
                  isOffsite: _v21
                }), _v41 && (0, _v6.jsx)(_v104, {
                  minWidth: 500,
                  children: (0, _v6.jsx)(_v223, {
                    albumId: Number(_v0),
                    albumPrivacy: _v4.privacy.view,
                    canCreateEmbeddedPlaylists: !!_v34,
                    embed: _v4.embed,
                    isPreviewing: _v22 && _v154() && !_v33 && _v153(_v4),
                    hasVideos: !!_v16 && _v16.total > 0,
                    openShare: () => {
                      _v0.openShare(), _v13.FatalAttraction.trackEvent({
                        container: "creator_toolbar",
                        component: "album",
                        keyword: "share"
                      });
                    },
                    isOffsite: !!_v21
                  })
                })]
              })
            })
          })
        })
      });
    };
  var _v512 = _v9;
  class _v513 extends _v512.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        handleError: this.handleError
      };
    }
    render() {
      let _v0 = this.requestError();
      return (0, _v6.jsxs)("div", {
        children: [this.props.children({
          handleError: this.state.handleError
        }), (0, _v6.jsx)(_v107.Notification, {
          status: "negative",
          showing: !!_v0,
          content: _v0 || ""
        })]
      });
    }
    handleError = ({
      error: _v0,
      message: _v1
    }) => {
      console.error(_v0), this.setState(_v0 => ({
        ..._v0,
        error: _v0,
        message: _v1
      }));
    };
    requestError = () => {
      let {
        error: _v0,
        message: _v1
      } = this.state;
      if (_v0 && _v1) return `${_v1}: ${_v0}`;
    };
  }
  let _v514 = {};
  function _v515({
    id: _v0,
    albumHash: _v1,
    viewer: _v2,
    match: _v3,
    hashedPass: _v4
  }) {
    let _v5 = (0, _v9.useContext)(_v33),
      {
        data: _v6,
        error: _v7
      } = (0, _v51.useQuery)(`/albums/${_v0}`, {
        variables: {
          fields: _v96,
          preview: _v154(),
          referrer: _v5?.referrer,
          is_embed: _v5?.isShowcaseEmbeded
        }
      }),
      _v8 = !!_v6?.embed,
      _v9 = !!(_v6 && _v6.hideNav),
      _v10 = _v6 ? window.location.hostname === _v6.domain : void 0,
      _v11 = (0, _v9.useMemo)(() => ({
        hashedPass: _v4,
        isOffsite: _v10,
        isOwnerOrAdmin: _v8,
        albumId: _v0,
        navIsHidden: _v9
      }), [_v2, _v8, _v4, _v9, _v10]),
      {
        trackShowcasePageDisplayed: _v12
      } = (0, _v72.useShowcaseTracking)();
    if ((0, _v71.usePicoEffect)(() => {
      if (!_v6 || !_v2) return !1;
      let _v0 = _v6.user?.uri?.split("/").pop();
      if (!_v0) return !1;
      _v12({
        showcaseId: _v0.toString(),
        showcaseOwnerId: _v0,
        showcaseVideoCount: _v6.metadata?.connections?.videos?.total ?? 0,
        showcasePageLayout: _v6.layout,
        showcasePagePrivacy: _v6.privacy.view,
        showcasePageViewerAuthStatus: (0, _v70.deriveViewerAuthStatus)(_v2),
        referrerPage: (0, _v70.deriveReferrerPage)()
      });
    }, [_v6, _v0, _v2], {
      once: !0
    }), !_v3 || !_v2) return null;
    let {
      user: _v13,
      vimeoHttpsUrl: _v14
    } = _v2;
    if (_v7) throw _v7;
    if (!_v6) return (0, _v6.jsx)(_v18, {});
    let {
        brandColor: _v15,
        hideNav: _v16,
        theme: _v17,
        layout: _v18,
        webBrandColor: _v19
      } = _v6,
      _v20 = _v10 || _v5?.isShowcaseEmbeded || _v16 || _v18 === _v90,
      _v21 = _v156(location.search).video;
    if (_v21 && _v21.length > 0 && "live" !== _v18) return location.href = `${_v14}/showcase/${_v0}/video/${_v21}`, (0, _v6.jsx)(_v18, {});
    let _v22 = {
        header: _v20 ? _v66 : "default",
        footer: _v20 ? "none" : _v67
      },
      _v23 = _v6.layout !== _v88 && Number(_v156(location.search).page) || 1,
      _v24 = "standard" === _v17 ? "light" : "dark";
    return (0, _v6.jsx)(_v100.Provider, {
      value: _v11,
      children: (0, _v6.jsx)(_v513, {
        children: ({
          handleError: _v0
        }) => (0, _v6.jsx)(_v15.ThemeProvider, {
          theme: _v52.themes[_v24],
          children: (0, _v6.jsx)(_v69, {
            viewer: _v2,
            options: _v22,
            hasThemeSupport: !1,
            children: (0, _v6.jsx)(_v99, {
              color: _v15,
              hideNav: _v20,
              layout: _v18,
              theme: _v17,
              webBrandColor: _v19,
              children: _v6 === _v514 ? (0, _v6.jsx)(_v18, {}) : (0, _v6.jsx)(_v511, {
                albumId: _v0,
                albumHash: _v1,
                handleError: _v0,
                curUser: _v13 || void 0,
                album: _v6,
                hashedPass: _v4,
                defaultPage: _v23
              })
            })
          })
        })
      })
    });
  }
  let _v516 = ({
      brandColor: _v0,
      customLogo: _v1,
      name: _v2,
      theme: _v3
    }) => (0, _v6.jsxs)(_v517, {
      brandColor: _v0,
      theme: _v3,
      children: [null !== _v1 && (0, _v6.jsx)(_v518, {
        src: _v1,
        alt: _v2
      }), (0, _v6.jsx)(_v43.Header, {
        size: "1",
        children: (0, _v31.translate)({
          singular: "This account doesn’t have access",
          dictionary: {
            es: {
              singular: "No puedes acceder a través de esta cuenta"
            },
            "de-DE": {
              singular: "Dieses Konto hat keinen Zugriff"
            },
            "fr-FR": {
              singular: "Ce compte ne bénéficie pas d'un accès"
            },
            "ja-JP": {
              singular: "このアカウントにはアクセス権がありません"
            },
            "ko-KR": {
              singular: "이 계정은 접근 권한이 없습니다"
            },
            "pt-BR": {
              singular: "Esta conta não tem acesso"
            },
            "zh-CN": {
              singular: "此账户没有访问权限"
            }
          }
        })
      }), (0, _v6.jsx)(_v141.Paragraph, {
        size: "1",
        children: (0, _v31.translate)({
          singular: "Try again, or contact your team’s admin for help.",
          dictionary: {
            es: {
              singular: "Inténtalo de nuevo o ponte en contacto con el administrador de tu equipo para recibir ayuda."
            },
            "de-DE": {
              singular: "Versuche es erneut oder bitte den Administrator deines Teams um Hilfe."
            },
            "fr-FR": {
              singular: "Veuillez réessayer ou contacter l'administrateur de votre équipe pour obtenir de l'aide."
            },
            "ja-JP": {
              singular: "再試行するか、チームの管理者に連絡してください。"
            },
            "ko-KR": {
              singular: "다시 시도하거나 팀 관리자에게 도움을 요청하세요."
            },
            "pt-BR": {
              singular: "Tente novamente ou entre em contato com o administrador da sua equipe para obter ajuda."
            },
            "zh-CN": {
              singular: "请再试一次，或联系您团队的管理员寻求帮助。"
            }
          }
        })
      }), (0, _v6.jsx)(_v519, {
        brandColor: _v0,
        onClick: () => location.reload(),
        children: (0, _v31.translate)({
          singular: "Try again",
          dictionary: {
            es: {
              singular: "Intentar de nuevo"
            },
            "de-DE": {
              singular: "Nochmal versuchen"
            },
            "fr-FR": {
              singular: "Veuillez réessayer"
            },
            "ja-JP": {
              singular: "再試行してください"
            },
            "ko-KR": {
              singular: "다시 시도하세요"
            },
            "pt-BR": {
              singular: "Tente de novo"
            },
            "zh-CN": {
              singular: "再试一次"
            }
          }
        })
      })]
    }),
    _v517 = _v15.default.div.withConfig({
      displayName: "UserNotAllowed__Wrapper",
      componentId: "sc-b544cb3f-0"
    })`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${_v0 => "dark" === _v0.theme ? _v74.bokehTheme.colors.gray["800"] : "inherit"};
  color: ${_v0 => "dark" === _v0.theme ? "white" : _v74.bokehTheme.colors.gray["800"]};
  a {
    color: ${_v0 => _v0.brandColor};
    text-decoration: none;
  }
  a:hover {
    color: ${_v0 => (0, _v14.darken)(.1, _v0.brandColor)};
  }
`,
    _v518 = _v15.default.img.withConfig({
      displayName: "UserNotAllowed__CustomLogoImg",
      componentId: "sc-b544cb3f-1"
    })`
  width: ${(0, _v14.rem)(185)};
  margin-bottom: ${(0, _v14.rem)(25)};
`,
    _v519 = (0, _v15.default)(_v40.Button).withConfig({
      displayName: "UserNotAllowed__TryAgainButton",
      componentId: "sc-b544cb3f-2"
    })`
  min-width: ${(0, _v14.rem)(350)};
  color: white;
  background-color: ${_v0 => _v0.brandColor};
  border-color: ${_v0 => _v0.brandColor};
  text-decoration: none;
  &:hover {
    background-color: ${_v0 => (0, _v14.darken)(.1, _v0.brandColor)};
    border-color: ${_v0 => (0, _v14.darken)(.1, _v0.brandColor)};
  }
`;
  _v13.GoogleTagManager.init(window._gtm || []);
  var _v520 = ((_v2 = _v520 || {})[_v2.passwordPrivacy = 0] = "passwordPrivacy", _v2[_v2.incorrectPassword = 1] = "incorrectPassword", _v2[_v2.teamPrivacy = 2] = "teamPrivacy", _v2[_v2.teamPrivacyLoggedInUser = 3] = "teamPrivacyLoggedInUser", _v2[_v2.embedOnly = 4] = "embedOnly", _v2[_v2.unknownReason = 5] = "unknownReason", _v2[_v2.unlisted = 6] = "unlisted", _v2[_v2.showcaseNotFound = 7] = "showcaseNotFound", _v2);
  let _v521 = function ({
    viewer: _v0,
    match: _v1,
    location: _v2,
    history: _v3
  }) {
    let {
        getEmbedQueryParam: _v4
      } = _v39(),
      [{
        isLoading: _v5,
        allowAccess: _v6,
        errorCode: _v7,
        hashedPass: _v8,
        unlockedName: _v9,
        metadata: _v10
      }, _v11] = (0, _v9.useReducer)(function (_v0, _v1) {
        switch (_v1.type) {
          case "AUTH_FAILURE":
            return {
              ..._v0,
              isLoading: !1,
              allowAccess: _v1?.payload?.metadata?.layout === _v90 && _v1?.payload?.error_code === 0,
              metadata: _v1.payload?.metadata ?? _v0.metadata,
              errorCode: _v1.payload.error_code
            };
          case "AUTH_SUCCESS":
            return {
              ..._v0,
              isLoading: !1,
              allowAccess: !0,
              hashedPass: _v1.payload.hashed_pass ?? "",
              metadata: _v1.payload.metadata ?? _v0.metadata
            };
          case "PASSWORD_SUCCESS":
            return {
              ..._v0,
              allowAccess: !0,
              hashedPass: _v1.payload.hashedPass,
              unlockedName: _v1.payload.name ?? _v0.unlockedName
            };
          default:
            return _v0;
        }
      }, {
        isLoading: !0,
        allowAccess: !1,
        errorCode: null,
        hashedPass: "",
        unlockedName: "",
        metadata: {
          name: "",
          url: "",
          creator: 0,
          brand_color: null,
          has_sso: !1,
          custom_logo: null,
          id: 0,
          theme: "standard",
          domain: "",
          sso_connections_count: 0,
          layout: ""
        }
      }),
      _v12 = _v1 ? _v1.params.albumId : "",
      _v13 = _v156(_v2.search).sh || "",
      _v14 = (0, _v9.useCallback)(async () => {
        try {
          let _v0 = _v13 ? `?sh=${_v13}` : "",
            _v1 = _v12 ? `/showcase/${_v12}/auth${_v0}${_v4("?")}` : "/auth",
            _v2 = await fetch(_v1, {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              }
            });
          return await _v2.json();
        } catch (_v0) {
          return {
            error_code: 5
          };
        }
      }, [_v13, _v12, _v4]);
    if ((0, _v9.useEffect)(() => {
      (async () => {
        let _v0 = await _v14();
        null !== _v0.error_code ? _v11({
          type: "AUTH_FAILURE",
          payload: _v0
        }) : _v11({
          type: "AUTH_SUCCESS",
          payload: _v0
        });
      })();
    }, []), (0, _v9.useEffect)(() => {
      if ("u" < typeof document) return;
      let _v0 = _v9 || _v10.name;
      _v6 && _v0 && (document.title = _v0);
    }, [_v6, _v10.name, _v9]), !_v1 || !_v0) return null;
    if (_v5) return (0, _v6.jsx)(_v18, {});
    if (!_v6) switch (_v7) {
      case 0:
        return (0, _v6.jsx)(_v44, {
          albumId: _v10.id,
          xsrft: _v0.xsrft,
          onSuccess: (_v0, _v1) => {
            _v11({
              type: "PASSWORD_SUCCESS",
              payload: {
                hashedPass: _v0,
                name: _v1
              }
            });
          }
        });
      case 2:
        return (0, _v6.jsx)(_v34, {
          name: _v10.name,
          userId: _v10.creator,
          url: _v10.url,
          brandColor: _v150(_v10.brand_color),
          ssoEnabled: _v10.has_sso,
          customLogo: _v10.custom_logo,
          theme: _v10.theme,
          domain: _v10.domain,
          id: _v10.id,
          ssoConnectionsCount: _v10.sso_connections_count
        });
      case 3:
        return (0, _v6.jsx)(_v516, {
          name: _v10.name,
          brandColor: _v150(_v10.brand_color),
          customLogo: _v10.custom_logo,
          theme: _v10.theme
        });
      case 7:
        throw new _v19.ResourceNotFoundError();
      default:
        return (0, _v6.jsx)(_v38, {});
    }
    return (0, _v6.jsx)(_v515, {
      viewer: _v0,
      match: _v1,
      location: _v2,
      history: _v3,
      hashedPass: _v8,
      id: _v10.id,
      albumHash: _v13
    });
  };
  var _v522 = _v0.i(0),
    _v523 = _v0.i(0),
    _v524 = _v0.i(0),
    _v525 = _v0.i(0),
    _v526 = _v0.i(0);
  function _v527({
    match: _v0,
    history: _v1,
    ssrData: _v2
  }) {
    let _v3 = (0, _v9.useContext)(_v32.ViewerContext),
      {
        isViewerShowcases: _v4
      } = (() => {
        let [_v0, _v1] = (0, _v9.useState)(null);
        return (0, _v9.useEffect)(() => {
          let _v0 = document.querySelector('meta[name="viewer-showcases"]');
          _v0?.getAttribute("content") === "1" ? _v1(!0) : _v1(!1);
        }, []), {
          isViewerShowcases: _v0
        };
      })(),
      {
        albumId: _v5,
        event: _v6,
        video: _v7
      } = (0, _v8.useRouter)().query;
    if ((0, _v11.useEnterpriseSiteRedirect)(_v3?.teamUser?.enterpriseSiteDomain), null === _v3 || null === _v4 || !_v5) return (0, _v6.jsx)("div", {});
    if (Array.isArray(_v5)) throw Error("Invalid query params");
    if (_v4) {
      let _v0 = (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsx)(_v7.default, {
          children: !!(_v7 || _v6) && (0, _v6.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
          })
        }), (0, _v6.jsx)(_v522.ViewerShowcasesAuthorization, {
          albumIdOrUrl: _v5
        })]
      });
      return _v2 ? (0, _v6.jsx)(_v523.ShowcaseSSRContext.Provider, {
        value: _v2,
        children: _v0
      }) : _v0;
    }
    return (0, _v6.jsx)(_v521, {
      viewer: _v3,
      match: _v0,
      history: _v1,
      location: _v1.location
    });
  }
  (0, _v10.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.albumId,
      _v2 = {
        hasPlayerAPI: !0,
        metadata: {
          className: "ShowcaseMetadata",
          routeRule: "/showcase/[albumId]"
        }
      };
    if (!_v1) return {
      props: _v2
    };
    let _v3 = _v0.vimeoConfig.get("vimeo_url"),
      _v4 = _v0.req.headers.cookie || "",
      _v5 = Array.isArray(_v0.query.sh) ? _v0.query.sh[0] : _v0.query.sh,
      _v6 = _v5 ? `?sh=${encodeURIComponent(_v5)}` : "",
      _v7 = `https://${_v3}/showcase/${encodeURIComponent(_v1)}/auth${_v6}`,
      _v8 = {};
    try {
      let _v0 = await fetch(_v7, {
        headers: {
          Cookie: _v4,
          "User-Agent": _v0.req.headers["user-agent"] || "",
          "X-Forwarded-For": _v0.req.headers["x-forwarded-for"] || ""
        },
        redirect: "manual"
      });
      if (_v0.status >= 300 && _v0.status < 400) return {
        props: _v2
      };
      let _v1 = await (0, _v525.parseShowcaseAuthResponse)(_v0);
      if (404 === _v1.status || !_v1.data) return {
        props: _v2
      };
      if (_v1.ok) {
        _v8.authData = _v1.data;
        let _v0 = _v1.data.metadata?.id;
        if (_v0) try {
          let _v0 = new AbortController(),
            _v1 = setTimeout(() => _v0.abort(), 300),
            _v2 = await (0, _v12.getAlbum)({
              where: {
                albumId: _v0
              },
              select: [..._v524.SHOWCASE_ALBUM_FIELDS],
              query: {
                isEmbed: !1
              },
              headers: _v0.headers,
              baseUrl: _v0.baseUrl,
              signal: _v0.signal
            });
          clearTimeout(_v1), _v8.albumData = _v2;
        } catch {}
      } else _v8.authError = {
        res: _v1.data,
        status: _v1.status
      };
    } catch {
      _v8 = {};
    }
    let _v9 = !!(_v8.authData || _v8.authError);
    return {
      props: {
        ..._v2,
        ...(_v9 && {
          ssrData: _v8
        })
      }
    };
  }), _v527.getLayout = _v0 => (0, _v6.jsx)(_v526.ReactRouterLayout, {
    path: "/showcase/:albumId",
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v527], 0);
}