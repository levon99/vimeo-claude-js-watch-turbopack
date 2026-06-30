{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createContext)(null);
  function _v3() {
    return (0, _v1.useContext)(_v2);
  }
  _v0.s(["ShowcaseSSRContext", 0, _v2, "useShowcaseSSR", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useLeadCaptureRegistration", 0, _v0 => {
    let _v1 = (0, _v7.useViewer)(),
      [_v2, _v3] = (0, _v1.useState)(null),
      {
        data: _v4,
        isLoading: _v5
      } = (0, _v4.useGetLeadCaptureResourceIdForm)(() => _v1 && _v0 ? {
        where: {
          resourceId: _v0.toString(),
          resourceType: _v6.ENTITY_TO_PATH_MAP[_v6.ENTITY_TYPE.SHOWCASE]
        },
        select: ["enabled"]
      } : null, {
        revalidateOnFocus: !1,
        shouldRetryOnError: !1
      });
    return (0, _v1.useEffect)(() => {
      let _v0 = (0, _v5.getLeadCaptureCookie)(_v0?.toString());
      _v0 && _v3(_v0);
    }, [_v0]), {
      registrationEnabled: !!_v4?.enabled && !_v2,
      registrationLoading: _v5 && !_v2,
      setLeadUuid: _v3
    };
  }], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11(_v0) {
    if (404 === _v0.status) return {
      status: 404,
      ok: !1
    };
    let _v1 = await _v0.json(),
      _v2 = (0, _v9.deepCamelCase)(_v1);
    return {
      status: _v0.status,
      ok: _v0.ok,
      data: _v2
    };
  }
  let _v12 = async _v0 => {
    let _v1 = await fetch(_v0),
      _v2 = await _v11(_v1);
    if (404 === _v2.status) throw new _v9.NetworkError("Not found", _v1.status, _v1);
    if (!_v2.ok) throw new _v9.NetworkError("A network error occurred", _v2.status, _v2.data);
    return _v2.data;
  };
  _v0.s(["ShowcaseAuthErrorCode", 0, {
    passwordPrivacy: 0,
    incorrectPassword: 1,
    teamPrivacy: 2,
    teamPrivacyLoggedInUser: 3,
    embedOnly: 4,
    unknownReason: 5,
    unlisted: 6
  }, "parseShowcaseAuthResponse", 0, _v11, "useShowcaseAuth", 0, (_v0, _v1) => {
    let _v2 = (0, _v7.useViewer)(),
      _v3 = (0, _v10.getSearchParams)().get("sh");
    return (0, _v8.default)(() => {
      let _v0;
      if (!_v2) return null;
      let _v1 = {
        ...(_v3 && {
          sh: _v3
        }),
        ...(_v1?.isShowcaseEmbedded && {
          referrer: encodeURIComponent((() => {
            try {
              if (document?.referrer) return document.referrer;
              return document?.querySelector('meta[name="referrer"]')?.getAttribute("content") || "";
            } catch (_v0) {
              return "";
            }
          })() || ""),
          is_embed: !0
        })
      };
      return _v0 ? `/showcase/${_v0}/auth${(_v0 = Object.entries(_v1).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&")) ? `?${_v0}` : ""}` : "/auth";
    }, _v12, {
      revalidateOnFocus: !1,
      shouldRetryOnError: !1,
      ...(_v1?.fallbackData && {
        fallbackData: _v1.fallbackData
      })
    });
  }], 0);
  _v0.s(["useSSGShowcaseSignature", 0, _v0 => {
    let [_v1, _v2] = (0, _v1.useState)(null);
    return (0, _v1.useEffect)(() => {
      let _v0;
      if (!_v0 || null !== _v1) return;
      let _v1 = (_v0 = `album-signature-${_v0}`, document.querySelector(`meta[name=${_v0}]`)?.getAttribute("content"));
      _v1 ? _v2(_v1) : _v2("");
    }, [_v0, _v1]), _v1;
  }], 0);
  var _v13 = _v0.i(0),
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
  let _v30 = (0, _v1.createContext)(null);
  function _v31(_v0) {
    let _v1 = (0, _v1.useContext)(_v30);
    if (!_v1) throw Error("useAlbumStore must be used within an AlbumStoreProvider");
    return (0, _v27.useStore)(_v1, _v0);
  }
  _v0.s(["AlbumStoreProvider", 0, ({
    children: _v0,
    albumId: _v1,
    albumSignature: _v2,
    hashedPass: _v3 = "",
    isShowcaseEmbedded: _v4,
    isOffsite: _v5 = !1,
    showcaseHash: _v6
  }) => {
    let [_v7, _v8] = (0, _v1.useState)(""),
      _v9 = (0, _v1.useMemo)(() => {
        var _v0;
        let _v1;
        return _v0 = {
          albumId: _v1,
          albumSignature: _v2,
          hashedPass: _v3,
          isShowcaseEmbedded: _v4,
          isOffsite: _v5,
          referrer: _v7,
          showcaseHash: _v6
        }, _v1 = _v0 => ({
          albumId: 0,
          albumOwnerId: 0,
          hashedPass: "",
          albumSignature: null,
          isShowcaseEmbedded: !1,
          isOffsite: !1,
          continuousPlay: !0,
          referrer: "",
          albumPrivacy: null,
          noOfVideos: null,
          seoAllowIndexed: null,
          clipPlaylistPage: null,
          showcaseHash: "",
          setContinuousPlay: _v0 => _v0(_v0 => {
            _v0.continuousPlay = _v0;
          }),
          setClipPlaylistPage: _v0 => _v0(_v0 => {
            _v0.clipPlaylistPage = _v0;
          }),
          setNoOfVideos: _v0 => _v0(_v0 => {
            _v0.noOfVideos = _v0;
          }),
          setAlbumPrivacy: _v0 => _v0(_v0 => {
            _v0.albumPrivacy = _v0;
          }),
          setSeoAllowIndex: _v0 => _v0(_v0 => {
            _v0.seoAllowIndexed = _v0;
          }),
          setAlbumOwnerId: _v0 => _v0(_v0 => {
            _v0.albumOwnerId = _v0;
          }),
          setBannerHeight: _v0 => {
            _v0(_v0 => {
              _v0.bannerHeight = _v0;
            });
          },
          ..._v0
        }), (0, _v27.create)((0, _v29.immer)((0, _v28.devtools)(_v1, {
          enabled: !0
        })));
      }, [_v1, _v2, _v3, _v5, _v4, _v7, _v6]);
    return (0, _v1.useEffect)(() => {
      _v8((() => {
        try {
          if (document?.referrer) return document.referrer;
          return document?.querySelector('meta[name="referrer"]')?.getAttribute("content") || "";
        } catch (_v0) {
          return "";
        }
      })());
    }, []), (0, _v13.jsx)(_v30.Provider, {
      value: _v9,
      children: _v0
    });
  }, "useAlbumStore", 0, _v31], 0), _v0.s(["BrandedLoginPage", 0, ({
    name: _v0,
    customLogo: _v1,
    brandColor: _v2,
    theme: _v3,
    hasSso: _v4,
    ssoConnectionsCount: _v5,
    url: _v6,
    id: _v7,
    creator: _v8
  }) => {
    let {
        isShowcaseEmbedded: _v9,
        isOffsite: _v10
      } = _v31(_v0 => ({
        isShowcaseEmbedded: _v0.isShowcaseEmbedded,
        isOffsite: _v0.isOffsite
      })),
      _v11 = _v2 ? `#${_v2}` : null,
      [_v12] = (0, _v23.useToken)("colors", ["fill-brand"]),
      _v13 = "dark" === _v3 ? _v22.DarkMode : _v22.LightMode,
      _v14 = _v4 && !(_v5 > 1),
      _v15 = _v14 ? (0, _v26.translate)({
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
      }) : (0, _v26.translate)({
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
      _v16 = (0, _v14.useRouter)(),
      _v17 = (0, _v7.useViewer)(),
      _v18 = _v17 && _v17.vimeoHttpsUrl,
      _v19 = _v6 || _v7,
      _v20 = _v16?.query?.offsite === "redirect" ? "/offsite_redirect" : "?app=showcase",
      _v21 = _v10 ? encodeURIComponent(`${_v18}/showcase/${_v19}${_v20}`) : `${_v18}/showcase/${_v19}`,
      _v22 = async (_v0 = !0) => {
        let _v1 = window.open(`/showcase/${_v7}/authorize?use_sso=${_v0}`, "", "width=800,height=600,menubar=no,scrollbars=no,titlebar=no,toolbar=no");
        try {
          await new Promise((_v0, _v1) => {
            let _v2 = _v0 => {
              try {
                if (_v0.origin !== _v18) return;
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
    return (0, _v13.jsx)(_v13, {
      children: (0, _v13.jsx)(_v21.Center, {
        h: "100vh",
        minH: (0, _v25.rem)(400),
        w: "100%",
        bgColor: "background",
        flexFlow: "column",
        p: "1rem",
        children: (0, _v13.jsxs)(_v21.Center, {
          maxWidth: (0, _v25.rem)(520),
          paddingX: (0, _v25.rem)(80),
          paddingY: (0, _v25.rem)(60),
          backgroundColor: "fill-surface",
          flexFlow: "column",
          borderRadius: "xl",
          textAlign: "center",
          children: [_v1 ? (0, _v13.jsx)(_v16.Image, {
            src: _v1,
            alt: _v0,
            marginX: "auto",
            marginBottom: (0, _v25.rem)(36),
            display: "block",
            maxWidth: (0, _v25.rem)(260),
            width: "auto",
            maxHeight: (0, _v25.rem)(200),
            height: "auto"
          }) : null, (0, _v13.jsx)(_v20.Header, {
            variant: "heading-lg",
            marginBottom: (0, _v25.rem)(36),
            color: "text-primary",
            size: "xl",
            children: (0, _v26.translate)({
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
            })
          }), (0, _v13.jsx)(_v19.Text, {
            variant: "body-md",
            color: "text-secondary",
            marginBottom: "200",
            textAlign: "center",
            children: (0, _v26.translate)({
              singular: "By logging in to Vimeo, you agree to our {TERMS}Terms of Service{/TERMS} and acknowledge our {PRIVACY}Privacy Policy{/PRIVACY}.",
              replacements: {
                TERMS: _v0 => (0, _v13.jsx)(_v18.Link, {
                  href: "/terms",
                  target: "_blank",
                  variant: "inline-primary",
                  fontSize: "inherit",
                  color: "inherit",
                  children: _v0
                }, "terms"),
                PRIVACY: _v0 => (0, _v13.jsx)(_v18.Link, {
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
          }), (0, _v13.jsx)(_v15.Button, {
            size: "lg",
            ...(_v11 && {
              bgColor: _v11,
              color: (0, _v24.readableColor)(_v11),
              _hover: {
                bgColor: (0, _v24.lighten)(_v11, .1)
              },
              _dark: {
                bgColor: _v11,
                _hover: {
                  bgColor: (0, _v24.lighten)(_v11, .1)
                }
              }
            }),
            onClick: () => {
              if (_v9) return void _v22(_v14);
              let _v0 = _v14 ? `${_v18}/auth0/connect?prev_page=${_v21}&team_id=${_v8}` : `${_v18}/log_in?redirect=${_v21}`;
              window.location.href = _v0;
            },
            children: _v15
          }), _v14 ? (0, _v13.jsx)(_v17.Paragraph, {
            variant: "body-md",
            marginTop: "200",
            color: "text-primary",
            children: (0, _v26.translate)({
              singular: "{A}Log in{/A} with email and password",
              replacements: {
                A: _v0 => (0, _v13.jsx)(_v18.Link, {
                  href: "#",
                  style: {
                    color: _v11 ?? _v12
                  },
                  onClick: () => _v22(!1),
                  variant: "inline-primary",
                  fontSize: "inherit",
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
          }) : null]
        })
      })
    });
  }], 0);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  _v0.s(["ErrorPage", 0, () => (0, _v13.jsx)(_v21.Center, {
    h: "100vh",
    w: "100%",
    bgColor: "surface",
    children: (0, _v13.jsx)(_v32.ErrorView, {
      error: new _v33.UnauthorizedError()
    })
  })], 0);
  var _v34 = _v0.i(0);
  let _v35 = (0, _v34.default)(async () => {
    let {
      LeadCaptureView: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    },
    ssr: !1
  });
  _v0.s(["LeadCapturePage", 0, ({
    albumId: _v0,
    setLeadUuid: _v1
  }) => (0, _v13.jsx)(_v35, {
    entityId: _v0,
    type: _v6.ENTITY_TYPE.SHOWCASE,
    setLeadUuid: _v1,
    previewSize: {
      height: "100vh",
      width: "100%"
    }
  })], 0);
  var _v36 = _v0.i(0);
  _v0.s(["LoadingPage", 0, () => (0, _v13.jsx)(_v21.Center, {
    flex: "1",
    h: "100vh",
    children: (0, _v13.jsx)(_v36.Spinner, {})
  })], 0);
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = {
    called: !1,
    loading: !1,
    error: null,
    isSuccess: !1
  };
  function _v46(_v0, _v1) {
    switch (_v1.type) {
      case "REQUEST":
        return {
          ..._v0,
          loading: !0,
          called: !0
        };
      case "SUCCESS":
        return {
          ..._v0,
          loading: !1,
          error: null,
          isSuccess: !0
        };
      case "FAILURE":
        return {
          ..._v0,
          loading: !1,
          error: _v1.payload
        };
      case "COOKIES_DISABLED":
        return {
          ..._v0,
          loading: !1,
          called: !0,
          error: _v1.payload
        };
      default:
        return _v0;
    }
  }
  let _v47 = {
      incorrect_password: (0, _v26.translate)({
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
      }),
      generic_error: (0, _v26.translate)({
        singular: "Unable to validate password. Ensure cookies are enabled in your browser, refresh the page, and try again.",
        dictionary: {
          es: {
            singular: "No se puede validar la contraseña. Asegúrese de que las cookies estén habilitadas en su navegador, actualice la página y vuelva a intentarlo."
          },
          "de-DE": {
            singular: "Das Kennwort kann nicht validiert werden. Stellen Sie sicher, dass Cookies in Ihrem Browser aktiviert sind, aktualisieren Sie die Seite und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Impossible de valider le mot de passe. Assurez-vous que les cookies sont activés dans votre navigateur, actualisez la page et réessayez."
          },
          "ja-JP": {
            singular: "パスワードを認証できませんでした。ブラウザでCookieが有効になっていることを確認し、ページを更新してからもう一度お試しください。"
          },
          "ko-KR": {
            singular: "비밀번호를 인증할 수 없습니다. 브라우저에서 쿠키가 활성화되어 있는지 확인하고, 페이지를 새로 고침한 후 다시 시도하세요."
          },
          "pt-BR": {
            singular: "Não foi possível validar a senha. Certifique-se de que os cookies estão habilitados no seu navegador, atualize a página e tente novamente."
          },
          "zh-CN": {
            singular: "无法验证密码。确保浏览器已启用 cookie，刷新页面后再试一次。"
          }
        }
      })
    },
    _v48 = async _v0 => {
      let _v1 = await fetch(_v0),
        _v2 = await _v1.json();
      if (!_v1.ok || !1 === _v2.password) throw new _v9.NetworkError("A network error occurred", _v1.status, {
        ...(0, _v9.deepCamelCase)(_v2),
        errorCode: 1
      });
      return _v2;
    },
    _v49 = async (_v0, _v1) => {
      let _v2 = new FormData();
      Object.entries(_v1).forEach(([_v0, _v1]) => {
        "string" == typeof _v1 && _v2.append(_v0, _v1);
      });
      let _v3 = await fetch(_v0, {
        method: "POST",
        body: _v2
      });
      if (!_v3.ok) {
        let _v0 = await _v3.json();
        throw new _v9.NetworkError("A network error occurred", _v3.status, _v0);
      }
      let _v4 = await _v3.json();
      return (0, _v9.deepCamelCase)(_v4);
    };
  _v0.s(["PasswordPage", 0, ({
    isCookiesDisabled: _v0 = !1,
    onSuccess: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useState)(!1),
      {
        validatePassword: _v4,
        isSuccess: _v5,
        error: _v6,
        loading: _v7,
        called: _v8
      } = (({
        isCookiesDisabled: _v0
      }) => {
        let _v1 = (0, _v7.useViewer)(),
          _v2 = _v1?.xsrft,
          {
            albumId: _v3,
            isShowcaseEmbedded: _v4
          } = _v31(_v0 => ({
            albumId: _v0.albumId,
            isShowcaseEmbedded: _v0.isShowcaseEmbedded
          })),
          [_v5, _v6] = (0, _v1.useReducer)(_v46, _v45),
          {
            mutate: _v7
          } = (0, _v44.useSWRConfig)();
        return {
          validatePassword: (0, _v1.useCallback)(async _v0 => {
            let _v1;
            if (_v0) return void _v6({
              type: "COOKIES_DISABLED",
              payload: Error(_v47.generic_error)
            });
            _v1 = _v4 ? `/showcase/${_v3}/password?password=${_v0}` : "/" === location.pathname ? "/auth" : `/showcase/${_v3}/auth`;
            let _v2 = _v4 ? _v48 : _v49;
            try {
              _v6({
                type: "REQUEST"
              }), await _v7(`key-${_v1}`, _v2(_v1, {
                password: _v0,
                token: _v2,
                referer_url: `/showcase/${_v3}`
              })), _v6({
                type: "SUCCESS"
              });
            } catch (_v0) {
              _v6({
                type: "FAILURE",
                payload: Error(_v47[1 === _v0.res.errorCode ? "incorrect_password" : "generic_error"])
              });
            }
          }, [_v0, _v4, _v3, _v2, _v7]),
          ..._v5
        };
      })({
        isCookiesDisabled: _v0
      });
    (0, _v1.useEffect)(() => {
      _v5 && _v1();
    }, [_v5, _v1]), (0, _v1.useEffect)(() => {
      _v8 && _v6 && _v3(!0);
    }, [_v8, _v6, _v3]);
    let _v9 = _v7 || _v5;
    return (0, _v13.jsxs)(_v38.ClipPageBase, {
      gridTemplateAreas: _v39.GRID_TEMPLATE_AREAS_LOADER,
      children: [(0, _v13.jsx)(_v42.PlayerWrapper, {
        gridArea: "media",
        children: (0, _v13.jsx)(_v21.Center, {
          w: "100%",
          h: "100%",
          children: _v9 ? (0, _v13.jsx)(_v36.Spinner, {
            size: "xl"
          }) : (0, _v13.jsxs)(_v41.PasswordForm, {
            error: _v6,
            isInvalid: _v2,
            onSubmit: _v4,
            children: [(0, _v13.jsx)(_v20.Header, {
              as: "h1",
              size: {
                base: "lg",
                md: "2xl"
              },
              textAlign: "center",
              children: (0, _v26.translate)({
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
            }), (0, _v13.jsx)(_v17.Paragraph, {
              fontSize: {
                base: "text-sm",
                md: "text"
              },
              textAlign: "center",
              children: (0, _v26.translate)({
                singular: "Enter the password to view it. You can also try logging in or contacting the creator to gain access.",
                dictionary: {
                  es: {
                    singular: "Ingrese la contraseña para verlo. También puede intentar iniciar sesión o ponerse en contacto con el creador para obtener acceso."
                  },
                  "de-DE": {
                    singular: "Geben Sie das Passwort ein, um es anzuzeigen. Sie können auch versuchen, sich einzuloggen oder den Creator zu kontaktieren, um Zugang zu erhalten."
                  },
                  "fr-FR": {
                    singular: "Saisissez le mot de passe pour l'afficher. Vous pouvez également essayer de vous connecter ou de contacter le créateur pour avoir accès."
                  },
                  "ja-JP": {
                    singular: "パスワードを入力して視聴します。ログインするか、クリエイターに問い合わせてアクセスすることもできます。"
                  },
                  "ko-KR": {
                    singular: "비밀번호를 입력하면 볼 수 있습니다. 로그인하거나 크리에이터에게 연락하여 액세스 권한을 얻을 수도 있습니다."
                  },
                  "pt-BR": {
                    singular: "Digite a senha para visualizar. Você também pode tentar fazer login ou entrar em contato com o criador para obter acesso."
                  },
                  "zh-CN": {
                    singular: "输入密码即可观看。您也可以尝试登录，或联系创建者获得访问权限。"
                  }
                }
              })
            })]
          })
        })
      }), (0, _v13.jsxs)(_v40.ModuleWrapper, {
        gridArea: "contentStack",
        backgroundColor: "background",
        children: [(0, _v13.jsx)(_v37.Show, {
          above: "md",
          children: (0, _v13.jsx)(_v43.ShowcasePlaylistSkeleton, {
            length: 4
          })
        }), (0, _v13.jsx)(_v37.Show, {
          below: "md",
          children: (0, _v13.jsx)(_v43.ShowcasePlaylistSkeleton, {
            length: 1
          })
        })]
      })]
    });
  }], 0);
  var _v50 = _v0.i(0);
  _v0.s(["UserNotAllowedPage", 0, ({
    name: _v0,
    brandColor: _v1,
    customLogo: _v2,
    theme: _v3
  }) => {
    let _v4 = _v1 ? `#${_v1}` : null,
      _v5 = "dark" === _v3 ? _v22.DarkMode : _v22.LightMode;
    return (0, _v13.jsx)(_v5, {
      children: (0, _v13.jsxs)(_v50.VStack, {
        h: "100vh",
        minH: (0, _v25.rem)(400),
        w: "100%",
        justifyContent: "center",
        gap: "200",
        bgColor: "background",
        p: "1rem",
        children: [_v2 ? (0, _v13.jsx)(_v16.Image, {
          alt: _v0,
          src: _v2,
          width: (0, _v25.rem)(185)
        }) : null, (0, _v13.jsx)(_v19.Text, {
          variant: "heading-xl",
          align: "center",
          color: "text-primary",
          children: (0, _v26.translate)({
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
        }), (0, _v13.jsx)(_v19.Text, {
          variant: "body-xl",
          color: "text-primary",
          align: "center",
          children: (0, _v26.translate)({
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
        }), (0, _v13.jsx)(_v15.Button, {
          size: "lg",
          minW: (0, _v25.rem)(350),
          ...(_v4 && {
            bgColor: _v4,
            color: (0, _v24.readableColor)(_v4),
            _hover: {
              bgColor: (0, _v24.lighten)(_v4, .1)
            },
            _dark: {
              bgColor: _v4,
              _hover: {
                bgColor: (0, _v24.lighten)(_v4, .1)
              }
            }
          }),
          onClick: () => {
            location.reload();
          },
          children: (0, _v26.translate)({
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
      })
    });
  }], 0);
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = {
      sort: "default"
    },
    _v54 = {
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
      added_first: _v53,
      added_last: _v53,
      modified_time_desc: {
        sort: "modified_time",
        direction: "desc"
      },
      modified_time_asc: {
        sort: "modified_time",
        direction: "asc"
      }
    },
    _v55 = ["privacy.view", "allowDownloads", "allowShare", "brandColor", "customLogo.sizes.link", "description", "domain", "embed", "hideNav", "hideUpcoming", "layout", "loop", "metadata.connections.videos.total", "name", "pictures.sizes.link", "sort", "theme", "url", "user.link", "user.name", "user.pictures.sizes.link", "user.uri", "webCustomLogo", "webBrandColor", "hasFeaturedContent", "seoAllowIndexed", "seoTitle", "seoDescription", "config"];
  _v0.s(["ALBUM_SORT_MAP", 0, _v54, "DEFAULT_BRAND_COLOR_DARK_THEME", 0, "#F9FAFB", "DEFAULT_SHOWCASE_PLAYER_RESPONSIVE_QUERY", 0, {
    transparent: 0
  }, "DEFAULT_SORT", 0, _v53, "ITEMS_PER_PAGE", 0, 20, "ITEMS_PER_PAGE_MOBILE", 0, 10, "NAV_HEIGHT", 0, 63, "SELECT_ALBUM_FIELDS", 0, ["badge.type", "duration", "isColdStorage", "isFree", "link", "live", "name", "pictures.sizes.link", "pictures.sizes.width", "pictures.uri", "privacy.download", "uri", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri", "embedPlayerConfigUrl", "playerEmbedUrl"], "SHOWCASE_ALBUM_FIELDS", 0, _v55, "VIDEOS_API_VERSION", 0, "3.4.12", "VIDEO_MODAL_TYPE", 0, {
    VIDEO: "video",
    ALBUM_VIDEO: "albumVideo"
  }], 0);
  let _v56 = {
    grid: "default",
    player: "featured",
    live: "live",
    playlist: "playlist"
  };
  _v0.s(["useGetShowcase", 0, () => {
    let {
        albumId: _v0,
        password: _v1,
        isShowcaseEmbedded: _v2,
        isOffsite: _v3,
        referrer: _v4,
        setNoOfVideos: _v5,
        setSeoAllowIndex: _v6,
        setAlbumPrivacy: _v7,
        setAlbumOwnerId: _v8
      } = _v31(_v0 => ({
        albumId: _v0.albumId,
        password: _v0.hashedPass,
        isShowcaseEmbedded: _v0.isShowcaseEmbedded,
        isOffsite: _v0.isOffsite,
        referrer: _v0.referrer,
        setNoOfVideos: _v0.setNoOfVideos,
        setSeoAllowIndex: _v0.setSeoAllowIndex,
        setAlbumPrivacy: _v0.setAlbumPrivacy,
        setAlbumOwnerId: _v0.setAlbumOwnerId
      })),
      _v9 = _v3(),
      _v10 = (0, _v52.useIsClipView)(),
      _v11 = (0, _v7.useViewer)(),
      {
        data: _v12,
        isLoading: _v13
      } = (0, _v51.useGetAlbum)(() => _v11 ? {
        where: {
          albumId: _v0
        },
        select: [..._v55],
        query: {
          isEmbed: _v2,
          ...(_v2 && {
            referrer: _v4
          }),
          ...(_v1 && {
            password: _v1
          })
        }
      } : null, _v9?.albumData ? {
        fallbackData: _v9.albumData
      } : void 0),
      _v14 = _v12?.layout && "playlist" === _v56[_v12.layout],
      _v15 = _v12?.hideNav || _v3 || _v2 || _v14,
      _v16 = _v12?.sort ? _v54[_v12.sort] : _v53,
      _v17 = _v12?.metadata?.connections?.videos?.total || null,
      _v18 = "boolean" == typeof _v12?.seoAllowIndexed ? _v12?.seoAllowIndexed : null,
      _v19 = _v12?.privacy?.view || null,
      _v20 = _v12?.user?.uri?.split("/").pop(),
      _v21 = "?share=copy&fl=sc&fe=fs",
      {
        banner: _v22,
        layout: _v23,
        playback: _v24,
        showVideoDetails: _v25,
        showVideoPlayerCards: _v26
      } = _v12?.config || {},
      _v27 = (0, _v1.useCallback)(_v0 => !!(0, _v10.getConfigProperty)(_v24?.[_v0]), [_v24]),
      _v28 = (0, _v1.useCallback)((_v0, _v1) => {
        let _v2 = _v10 ? _v24?.[_v0] : _v23?.[_v1];
        return !!(0, _v10.getConfigProperty)(_v2);
      }, [_v10, _v23, _v24]);
    (0, _v1.useEffect)(() => {
      "number" == typeof _v17 && _v5(_v17);
    }, [_v5, _v17]), (0, _v1.useEffect)(() => {
      "boolean" == typeof _v18 && _v6(_v18);
    }, [_v18, _v6]), (0, _v1.useEffect)(() => {
      _v19 && _v7(_v19);
    }, [_v19, _v7]), (0, _v1.useEffect)(() => {
      _v20 && _v8(Number(_v20) || 0);
    }, [_v20, _v8]);
    let _v29 = !!(0, _v10.getConfigProperty)(_v26);
    return {
      allowContinuousPlay: !0,
      user: _v12?.user,
      layout: _v56[_v12?.layout || "grid"],
      albumLayout: _v12?.layout,
      title: _v12?.name || "",
      description: _v12?.description || "",
      allowShare: _v12?.allowShare || !1,
      customLogo: _v12?.webCustomLogo ? _v12?.customLogo?.sizes?.[_v12?.customLogo?.sizes?.length - 1].link : "",
      thumbnailUrl: _v12?.hasFeaturedContent ? _v12?.pictures?.sizes?.[_v12?.pictures?.sizes?.length - 1].link : "",
      hideNav: _v15,
      colorMode: _v12?.theme === "dark" ? "dark" : "light",
      isLoading: _v13 || !_v12,
      ...(_v12?.brandColor && _v12?.webBrandColor && {
        brandColor: `#${_v12?.brandColor}`,
        playerAccentColor: _v12?.brandColor
      }),
      theme: _v12?.theme,
      loop: _v12?.loop,
      isEmpty: _v12?.metadata?.connections?.videos?.total === 0,
      sortConfig: _v16,
      canEditShowcase: !!_v12?.embed && !_v3 && !_v2,
      allowDownloads: _v12?.allowDownloads,
      hideUpcoming: _v12?.hideUpcoming,
      hasFeaturedContent: _v12?.hasFeaturedContent,
      shareLink: _v3 && _v12?.domain ? `${_v12.domain}${_v21}` : `${_v11?.vimeoHttpsUrl ?? ""}/showcase/${_v12?.url ?? _v0}${_v21}`,
      gridSize: _v10 ? (0, _v10.getConfigProperty)(_v24?.playbackGridSize) : (0, _v10.getConfigProperty)(_v23?.gridSize),
      playback: {
        enableAskAi: _v27("enableAskAi"),
        enableComments: _v27("enableComments"),
        enableLike: _v27("enableLike"),
        enableShare: _v27("enableShare"),
        showDateAdded: _v27("showPlaybackAddedDate"),
        showDescription: _v27("showPlaybackVideoDescription"),
        showProfileImage: _v27("showPlaybackProfileImage"),
        showProfileName: _v27("showPlaybackProfileName"),
        showTitle: _v27("showPlaybackVideoTitle"),
        showViews: _v27("showPlaybackViews")
      },
      showGridProfileImage: _v28("showPlaybackGridProfileImage", "showGridProfileImage"),
      showGridProfileName: _v28("showPlaybackGridProfileName", "showGridProfileName"),
      showGridVideoTitle: _v28("showPlaybackGridVideoTitle", "showGridVideoTitles"),
      showVideoCount: _v28("showPlaybackVideoCount", "showGridVideoCount"),
      showGridVideoCard: _v10 ? !!(0, _v10.getConfigProperty)(_v24?.showPlaybackGridVideoCard) : _v29,
      showVideoDetails: !!(0, _v10.getConfigProperty)(_v25),
      showBannerDescription: !!(0, _v10.getConfigProperty)(_v22?.showBannerDescription),
      showBannerTitle: !!(0, _v10.getConfigProperty)(_v22?.showBannerTitle),
      showSearchBar: !!(0, _v10.getConfigProperty)(_v12?.config?.navigation?.showSearchBar),
      showBannerHeader: !!(0, _v10.getConfigProperty)(_v22?.showBannerHeader),
      showStartWatchingButton: !!(0, _v10.getConfigProperty)(_v22?.showStartWatchingButton),
      textCtaAlignment: String((0, _v10.getConfigProperty)(_v12?.config?.textCtaAlignment))
    };
  }], 0);
  let _v57 = (0, _v34.default)(async () => {
      let {
        Footer: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v58 = (0, _v34.default)(async () => {
      let {
        Footer: {
          Legal: _v0
        }
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    });
  _v0.s(["FooterModule", 0, () => {
    let _v0 = (0, _v7.useViewer)(),
      _v1 = _v0?.impressumQualifies ?? !1,
      _v2 = _v0?.terminateContractQualifies ?? !1;
    return (0, _v13.jsx)(_v57, {
      children: (0, _v13.jsx)(_v58, {
        impressumQualifies: _v1,
        terminateContractQualifies: _v2
      })
    });
  }], 0);
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = () => (0, _v13.jsxs)(_v60.Navigation, {
      children: [(0, _v13.jsx)(_v60.Navigation.LeftContent, {
        children: (0, _v13.jsx)(_v59.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        })
      }), (0, _v13.jsxs)(_v60.Navigation.RightContent, {
        children: [(0, _v13.jsx)(_v59.Skeleton, {
          borderRadius: "button",
          w: "92px",
          h: "40px"
        }), (0, _v13.jsx)(_v59.Skeleton, {
          borderRadius: "full",
          w: "40px",
          h: "40px"
        })]
      })]
    }),
    _v62 = (0, _v34.default)(async () => {
      let {
        DefaultNavigation: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v13.jsx)(_v61, {}),
      ssr: !1
    });
  _v0.s(["NavigationModule", 0, () => (0, _v13.jsx)(_v62, {
    isSideNavActive: !1,
    hasThemeSupport: !1
  })], 0);
}