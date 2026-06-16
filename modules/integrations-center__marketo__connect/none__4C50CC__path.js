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
  let _v17 = _v0 => (0, _v1.jsx)(_v16.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("g", {
      fill: "#4C50CC",
      children: (0, _v1.jsx)("path", {
        d: "M14.97 2v20l5.151-4.09V4.726L14.97 2ZM12.697 17.605l-4.242 1.819V3.666l4.242 1.212v12.727ZM3 17.151l3.182-.909v-10L3 5.788V17.15Z"
      })
    })
  });
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = () => {
    let _v0 = (0, _v2.useRouter)(),
      {
        xsrft: _v1
      } = (0, _v3.useContext)(_v20.ViewerContext) || {},
      [_v2, _v3] = (0, _v3.useState)(""),
      [_v4, _v5] = (0, _v3.useState)(""),
      [_v6, _v7] = (0, _v3.useState)(""),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(!1),
      [_v12, _v13] = (0, _v3.useState)(!1);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v11.Flex, {
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        children: (0, _v1.jsxs)(_v8.Card, {
          padding: "3xl",
          width: (0, _v15.rem)(500),
          children: [(0, _v1.jsxs)(_v11.Flex, {
            alignItems: "center",
            justifyContent: "center",
            gap: "sm",
            children: [(0, _v1.jsx)(_v17, {
              boxSize: "lg"
            }), (0, _v1.jsx)(_v10.Divider, {
              borderStyle: "dashed",
              borderColor: "stroke",
              borderBottomWidth: 3,
              width: "30%"
            }), (0, _v1.jsx)(_v18.Vimeo, {
              boxSize: "lg"
            })]
          }), (0, _v1.jsx)(_v7.Header, {
            size: "lg",
            textAlign: "center",
            mt: "lg",
            children: (0, _v19.translate)({
              singular: "Authenticate your account",
              dictionary: {
                es: {
                  singular: "Autentique su cuenta"
                },
                "de-DE": {
                  singular: "Authentifizieren Sie Ihr Konto."
                },
                "fr-FR": {
                  singular: "Veuillez authentifier votre compte"
                },
                "ja-JP": {
                  singular: "アカウントを認証"
                },
                "ko-KR": {
                  singular: "계정 인증"
                },
                "pt-BR": {
                  singular: "Autenticar sua conta"
                },
                "zh-CN": {
                  singular: "验证您的账户"
                }
              }
            })
          }), (0, _v1.jsxs)(_v5.Box, {
            mt: "lg",
            mb: "lg",
            children: [_v10 && (0, _v1.jsx)(_v4.Alert, {
              status: "error",
              mb: "md",
              onClose: () => _v11(!1),
              children: (0, _v19.translate)({
                singular: "Unable to connect your accounts",
                dictionary: {
                  es: {
                    singular: "No se pudieron conectar tus cuentas"
                  },
                  "de-DE": {
                    singular: "Deine Konten können derzeit nicht verknüpft werden"
                  },
                  "fr-FR": {
                    singular: "Impossible de connecter vos comptes"
                  },
                  "ja-JP": {
                    singular: "アカウントを接続することができませんでした"
                  },
                  "ko-KR": {
                    singular: "계정 연결 실패"
                  },
                  "pt-BR": {
                    singular: "Não é possível conectar suas contas"
                  },
                  "zh-CN": {
                    singular: "无法连接您的帐户"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v12.FormControl, {
              children: [(0, _v1.jsx)(_v13.FormLabel, {
                size: "md",
                mt: "sm",
                children: (0, _v19.translate)({
                  singular: "Munchkin account ID*",
                  dictionary: {
                    es: {
                      singular: "ID de cuenta de Munchkin*"
                    },
                    "de-DE": {
                      singular: "Munchkin Konto-ID*"
                    },
                    "fr-FR": {
                      singular: "Identifiant du compte Munchkin*"
                    },
                    "ja-JP": {
                      singular: "MunchkinアカウントID*"
                    },
                    "ko-KR": {
                      singular: "Munchkin 계정 ID*"
                    },
                    "pt-BR": {
                      singular: "ID da conta do Munchkin*"
                    },
                    "zh-CN": {
                      singular: "Munchkin 账户 ID*"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14.Input, {
                placeholder: "xxx-xxx-xxx",
                value: _v2,
                onChange: _v0 => _v3(_v0.target.value)
              })]
            }), (0, _v1.jsxs)(_v12.FormControl, {
              children: [(0, _v1.jsx)(_v13.FormLabel, {
                size: "md",
                mt: "md",
                children: (0, _v19.translate)({
                  singular: "Client ID*",
                  dictionary: {
                    es: {
                      singular: "ID del cliente*"
                    },
                    "de-DE": {
                      singular: "Kunden-ID*"
                    },
                    "fr-FR": {
                      singular: "Identifiant client*"
                    },
                    "ja-JP": {
                      singular: "クライアントID*"
                    },
                    "ko-KR": {
                      singular: "클라이언트 ID*"
                    },
                    "pt-BR": {
                      singular: "ID do cliente*"
                    },
                    "zh-CN": {
                      singular: "客户端 ID*"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14.Input, {
                placeholder: "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: _v4,
                onChange: _v0 => _v5(_v0.target.value)
              })]
            }), (0, _v1.jsxs)(_v12.FormControl, {
              children: [(0, _v1.jsx)(_v13.FormLabel, {
                size: "md",
                mt: "md",
                children: (0, _v19.translate)({
                  singular: "Client secret*",
                  dictionary: {
                    es: {
                      singular: "Secreto del cliente*"
                    },
                    "de-DE": {
                      singular: "Kunden-Geheimschlüssel*"
                    },
                    "fr-FR": {
                      singular: "Secret client*"
                    },
                    "ja-JP": {
                      singular: "クライアントシークレット*"
                    },
                    "ko-KR": {
                      singular: "클라이언트 비밀*"
                    },
                    "pt-BR": {
                      singular: "Segredo do cliente*"
                    },
                    "zh-CN": {
                      singular: "客户端密钥*"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14.Input, {
                type: "password",
                placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                value: _v6,
                onChange: _v0 => _v7(_v0.target.value)
              })]
            }), (0, _v1.jsx)(_v12.FormControl, {
              children: (0, _v1.jsx)(_v9.Checkbox, {
                size: "md",
                mt: "md",
                isChecked: _v8,
                onChange: _v0 => _v9(_v0.target.checked),
                children: (0, _v19.translate)({
                  singular: "I consent to Vimeo persisting my Marketo credentials",
                  dictionary: {
                    es: {
                      singular: "Acepto que Vimeo mantenga mis credenciales de Marketo."
                    },
                    "de-DE": {
                      singular: "Ich bin damit einverstanden, dass Vimeo meine Marketo-Anmeldedaten speichert."
                    },
                    "fr-FR": {
                      singular: "Je consens à ce que Vimeo conserve mes informations d'identification Marketo."
                    },
                    "ja-JP": {
                      singular: "VimeoがMarketoの認証情報を保持することに同意します"
                    },
                    "ko-KR": {
                      singular: "Vimeo가 내 Marketo 자격증명을 보유하는 데 동의합니다."
                    },
                    "pt-BR": {
                      singular: "Eu concordo que o Vimeo persiga minhas credenciais do Marketo"
                    },
                    "zh-CN": {
                      singular: "我同意 Vimeo 保留我的 Marketo 证书"
                    }
                  }
                })
              })
            })]
          }), (0, _v1.jsx)(_v6.Button, {
            variant: "primary",
            isDisabled: !_v2 || !_v4 || !_v6 || !_v8,
            isLoading: _v12,
            onClick: () => {
              _v13(!0), _v11(!1), fetch("/settings/marketing/provider/marketo", {
                method: "POST",
                body: JSON.stringify({
                  service: "marketo",
                  munchkin_id: _v2,
                  client_id: _v4,
                  client_secret: _v6,
                  token: _v1
                }),
                headers: {
                  "Content-type": "application/json"
                }
              }).then(_v0 => _v0.json()).then(_v0 => {
                _v0.success && _v0.push(`/integrations-center/${_v21.PARTNER_ID.MARKETO}/details?success=true`);
              }).catch(_v0 => {
                _v11(!0), console.error(_v0);
              }).finally(() => {
                _v13(!1);
              });
            },
            children: (0, _v19.translate)({
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
            })
          }), (0, _v1.jsx)(_v6.Button, {
            variant: "tertiary",
            mt: "sm",
            onClick: () => {
              _v0.push(`/integrations-center/${_v21.PARTNER_ID.MARKETO}/details`);
            },
            children: (0, _v19.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          })]
        })
      })
    });
  };
  function _v23() {
    return (0, _v1.jsx)(_v22, {});
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v23, {})
  });
  (0, _v24.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    capability: "hasIntegrationCenter",
    redirect: "/settings/apps"
  }), _v27.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v25.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v26.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v27], 0);
}