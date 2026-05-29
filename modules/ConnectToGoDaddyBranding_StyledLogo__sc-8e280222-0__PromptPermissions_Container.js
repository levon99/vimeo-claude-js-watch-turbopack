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
    _v20 = _v0.i(0);
  let _v21 = (0, _v6.default)(_v19.default).withConfig({
    displayName: "ConnectToGoDaddyBranding__StyledLogo",
    componentId: "sc-8e280222-0"
  })`
  height: ${(0, _v4.rem)(40)};
  width: ${(0, _v4.rem)(40)};
`;
  function _v22() {
    return (0, _v1.jsx)(_v20.default, {
      logo: (0, _v1.jsx)(_v21, {})
    });
  }
  var _v23 = _v0.i(0);
  let _v24 = _v6.default.div.withConfig({
      displayName: "PromptPermissions__Container",
      componentId: "sc-bd0e6f49-0"
    })`
  margin: ${(0, _v4.rem)(20)} auto ${(0, _v4.rem)(40)} auto;
  text-align: left;
`,
    _v25 = (0, _v6.default)(_v14.Paragraph).withConfig({
      displayName: "PromptPermissions__PermissionsGrantPrompt",
      componentId: "sc-bd0e6f49-1"
    })`
  font-weight: 700;
`,
    _v26 = _v6.default.ul.withConfig({
      displayName: "PromptPermissions__PermissionsList",
      componentId: "sc-bd0e6f49-2"
    })`
  max-width: ${(0, _v4.rem)(360)};
  padding-left: ${(0, _v4.rem)(16)};
  font-size: ${(0, _v4.rem)(14)};
  line-height: ${(0, _v4.rem)(20)};
`,
    _v27 = _v6.default.li.withConfig({
      displayName: "PromptPermissions__PermissionsListItem",
      componentId: "sc-bd0e6f49-3"
    })`
  list-style-type: disc;
`,
    _v28 = function ({
      permissions: _v0,
      permissionPrompt: _v1
    }) {
      return (0, _v1.jsxs)(_v24, {
        children: [(0, _v1.jsx)(_v25, {
          size: "2",
          children: _v1
        }), (0, _v1.jsx)(_v26, {
          children: _v0?.map((_v0, _v1) => (0, _v1.jsx)(_v27, {
            children: _v0
          }, `oauth-permission-${_v1}`))
        })]
      });
    };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = (0, _v6.default)(_v11.Button).withConfig({
      displayName: "production__AllowButton",
      componentId: "sc-2244cbb8-0"
    })`
  max-width: ${(0, _v4.rem)(350)};
  margin-top: ${(0, _v4.rem)(4)};
`,
    _v32 = _v6.default.div.withConfig({
      displayName: "production__PromptUserDetails",
      componentId: "sc-2244cbb8-1"
    })`
  display: flex;
  align-items: center;
  margin-top: ${(0, _v4.rem)(12)};
  margin-bottom: ${(0, _v4.rem)(24)};
`,
    _v33 = (0, _v6.default)(_v14.Paragraph).withConfig({
      displayName: "production__UserNameParagraph",
      componentId: "sc-2244cbb8-2"
    })`
  display: flex;
  align-items: center;
  margin-left: ${(0, _v4.rem)(12)};
  margin-bottom: 0;
`,
    _v34 = (0, _v6.default)(_v13.ChevronDown).withConfig({
      displayName: "production__StyledChevron",
      componentId: "sc-2244cbb8-3"
    })`
  margin-top: ${(0, _v4.rem)(6)};
`,
    _v35 = (0, _v6.default)(_v11.Button).attrs({
      variant: "hyperminimal"
    }).withConfig({
      displayName: "production__PopOverTrigger",
      componentId: "sc-2244cbb8-4"
    })`
  margin-left: ${(0, _v4.rem)(8)};
  padding: 0;
`,
    _v36 = [(0, _v10.translate)({
      singular: "Create Showcases, Groups, Channels and Portfolios on your behalf.",
      dictionary: {
        es: {
          singular: "Crear presentaciones, grupos, canales y portafolios en tu nombre."
        },
        "de-DE": {
          singular: "Erstellen von Videos, Präsentationen, Gruppen, Kanälen und Portfolios in deinem Namen"
        },
        "fr-FR": {
          singular: "Créer des présentations, des groupes, des chaînes et des portfolios en votre nom."
        },
        "ja-JP": {
          singular: "あなたの代わりにショーケース、グループ、チャンネル、およびポートフォリオを作成します。"
        },
        "ko-KR": {
          singular: "나를 대신하여 쇼케이스, 그룹, 채널 및 포트폴리오를 생성합니다."
        },
        "pt-BR": {
          singular: "Criar Vitrines, Grupos, Canais e Portfólios em seu nome."
        },
        "zh-CN": {
          singular: "代表您创建橱窗、群组、频道和作品集。"
        }
      }
    }), (0, _v10.translate)({
      singular: "Edit settings, Showcases, Groups, Channels and Portfolios on your behalf.",
      dictionary: {
        es: {
          singular: "Editar opciones de configuración, presentaciones, grupos, canales y portafolios en tu nombre."
        },
        "de-DE": {
          singular: "Bearbeiten von Videos, Präsentationen, Gruppen, Kanälen und Portfolios in deinem Namen"
        },
        "fr-FR": {
          singular: "Modifier des paramètres, des présentations, des groupes, des chaînes et des portfolios en votre nom."
        },
        "ja-JP": {
          singular: "あなたの代わりに設定、ショーケース、グループ、チャンネル、およびポートフォリオを編集します。"
        },
        "ko-KR": {
          singular: "나를 대신하여 설정, 쇼케이스, 그룹, 채널 및 포트폴리오를 편집합니다."
        },
        "pt-BR": {
          singular: "Editar configurações, Vitrines, Grupos, Canais e Portfólios em seu nome."
        },
        "zh-CN": {
          singular: "代表您编辑设置、橱窗、群组、频道和作品集。"
        }
      }
    }), (0, _v10.translate)({
      singular: "Upload videos on your behalf.",
      dictionary: {
        es: {
          singular: "Subir videos en tu nombre."
        },
        "de-DE": {
          singular: "Lade Videos in deinem Namen hoch."
        },
        "fr-FR": {
          singular: "Mettre en ligne des vidéos en votre nom."
        },
        "ja-JP": {
          singular: "動画のアップロードを許可する。"
        },
        "ko-KR": {
          singular: "나를 대신하여 동영상을 업로드합니다."
        },
        "pt-BR": {
          singular: "Carregar vídeos em seu nome."
        },
        "zh-CN": {
          singular: "代表您上传视频。"
        }
      }
    }), (0, _v10.translate)({
      singular: "Delete videos, Showcases, Groups, Channels and Portfolios on your behalf",
      dictionary: {
        es: {
          singular: "Borrar videos, presentaciones, grupos, canales y portafolios en tu nombre."
        },
        "de-DE": {
          singular: "Löschen von Videos, Präsentationen, Gruppen, Kanälen und Portfolios in deinem Namen."
        },
        "fr-FR": {
          singular: "Supprimer des vidéos, des présentations, des groupes, des chaînes et des portfolios en votre nom."
        },
        "ja-JP": {
          singular: "あなたの代わりに動画、ショーケース、グループ、チャンネル、およびポートフォリオを削除します。"
        },
        "ko-KR": {
          singular: "나를 대신하여 동영상, 쇼케이스, 그룹, 채널 및 포트폴리오를 삭제합니다."
        },
        "pt-BR": {
          singular: "Excluir vídeos, Vitrines, Grupos, Canais e Portfólios em seu nome."
        },
        "zh-CN": {
          singular: "代表您删除视频、橱窗、群组、频道和作品集"
        }
      }
    })];
  function _v37() {
    let [_v0, _v1] = (0, _v5.useState)(!1),
      _v2 = (0, _v5.useContext)(_v17.ViewerContext),
      _v3 = _v2?.user,
      _v4 = (0, _v2.useRouter)(),
      _v5 = _v4.query,
      _v6 = _v5 && _v5.link ? (0, _v9.deepDecodeURIComponent)(_v5.link) : null,
      _v7 = _v5?.state,
      _v8 = _v5?.auth_action,
      _v9 = _v5 && _v5.redirect_uri ? (0, _v9.deepDecodeURIComponent)(_v5.redirect_uri) : null,
      _v10 = _v5 && _v5.transfer_status ? _v5.transfer_status : _v29.TransferStatus.TRANSFER_NOT_REQUESTED,
      _v11 = window?.location?.search,
      {
        managed_user_id: _v12 = "0",
        via: _v13,
        third_party_integration: _v14
      } = (_v11 || window.location.search).substr(1).split("&").map(_v0 => _v0.split("=")).filter(([_v0]) => /\S/.test(_v0)).reduce((_v0, [_v1, _v2]) => ({
        ..._v0,
        [_v1]: _v2
      }), {}),
      _v15 = null;
    if (void 0 === _v14 && ("godaddy_create" === _v13 || "godaddy_upload" === _v13) && (_v15 = "godaddy"), (0, _v5.useEffect)(() => {
      _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
        component: "authorization",
        type: "landing",
        account_type: null,
        managed_user_id: _v12,
        user_id: _v3?.id ? `${_v3.id}` : null,
        product: _v13,
        device_id: _v2?.vuid ?? null,
        third_party_integration: _v15
      }));
    }, [_v15, _v12, _v13, _v2?.vuid, _v3?.id]), (0, _v5.useEffect)(() => {
      if (_v2) {
        if (!_v3) return void _v4.push({
          pathname: _v8 ? _v18.RequiredOAuthPaths[_v8] : _v18.RequiredOAuthPaths.join,
          query: _v4.query
        });
        if ("0" !== _v12 && _v10 === _v29.TransferStatus.TRANSFER_COMPLETED && _v6) return void window.location.replace((0, _v30.transformLink)(_v6, _v5));
      }
    }, [_v8, _v6, _v12, _v18.RequiredOAuthPaths, _v18.RequiredOAuthPaths.join, _v5, _v11, _v10, _v3, _v2]), !_v2 || _v2 && !_v3 || _v0) return (0, _v1.jsxs)(_v23.Layout, {
      children: [(0, _v1.jsx)(_v22, {}), (0, _v1.jsx)(_v23.Loader, {})]
    });
    let _v16 = _v3?.pictures?.sizes?.[2]?.link || "",
      _v17 = _v3?.pictures?.sizes?.[3]?.link,
      _v18 = () => "string" == typeof _v9 && _v9.includes("?") ? "&" : "?",
      _v19 = async () => {
        _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
          component: "authorization",
          type: "accept",
          account_type: null,
          managed_user_id: _v12,
          user_id: _v3?.id ? `${_v3.id}` : null,
          product: _v13,
          device_id: _v2?.vuid ?? null,
          third_party_integration: _v15
        }));
        try {
          let _v0 = await fetch(`//${_v2?.apiUrl}/oauth/authorize/accept${_v11}`, {
              method: "POST",
              headers: {
                Authorization: `jwt ${_v2?.jwt}`,
                "Content-Type": "application/json"
              },
              redirect: "follow"
            }),
            {
              code: _v1,
              token: _v2
            } = await _v0.json(),
            _v3 = _v7 ? `&state=${_v7}` : "",
            _v4 = _v1 ? `&code=${_v1}` : "",
            _v5 = _v2 ? `&token=${_v2}` : "";
          if ("0" !== _v12 && (_v10 === _v29.TransferStatus.TRANSFER_NOT_REQUESTED || _v10 === _v29.TransferStatus.TRANSFER_IN_PROGRESS)) return void window.location.replace((0, _v30.transformLink)("upgrade", _v5) + _v4 + _v5);
          if (_v6) return void window.location.replace((0, _v30.transformLink)(_v6, _v5) + _v4 + _v5);
          if (_v1) return void window.location.replace(`${_v9}${_v18()}code=${_v1}${_v3}`);
          if (_v2) return void window.location.replace(`${_v9}${_v18()}access_token=${_v2}${_v3}`);
        } catch (_v0) {
          console.log("Error with authorize request", _v0);
        }
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v23.Layout, {
        children: [(0, _v1.jsx)(_v22, {}), (0, _v1.jsx)(_v23.PromptHeading, {
          size: "3",
          children: (0, _v10.translate)({
            singular: "Allow GoDaddy to access your Vimeo account?",
            dictionary: {
              es: {
                singular: "¿Deseas permitir que GoDaddy acceda a tu cuenta de Vimeo?"
              },
              "de-DE": {
                singular: "Darf GoDaddy auf dein Vimeo-Konto zugreifen?"
              },
              "fr-FR": {
                singular: "Autoriser GoDaddy à accéder à votre compte Vimeo ?"
              },
              "ja-JP": {
                singular: "GoDaddyによるVimeoアカウントへのアクセスを許可しますか？"
              },
              "ko-KR": {
                singular: "GoDaddy가 회원님의 Vimeo 계정에 액세스하도록 허용할까요?"
              },
              "pt-BR": {
                singular: "Permitir que o GoDaddy acesse sua conta do Vimeo?"
              },
              "zh-CN": {
                singular: "允许 GoDaddy 访问您的 Vimeo 帐户吗？"
              }
            }
          })
        }), (0, _v1.jsxs)(_v32, {
          children: [(0, _v1.jsx)(_v8.Avatar, {
            alt: "",
            src: _v16,
            srcSet: `${_v17} 2x`,
            size: "sm",
            nameProps: {
              name: _v3?.name ?? ""
            }
          }), (0, _v1.jsx)(_v12.PopOver, {
            attach: "bottom",
            content: (0, _v1.jsx)(_v11.Button, {
              variant: "hyperminimal",
              format: "soft",
              onClick: () => {
                _v1(!0), fetch("/log_out", {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    "content-type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                  },
                  body: JSON.stringify({
                    token: _v2?.xsrft
                  })
                }).then(() => {
                  _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
                    component: "authorization",
                    type: "signin_redirect",
                    account_type: null,
                    managed_user_id: _v12,
                    user_id: _v3?.id ? `${_v3.id}` : null,
                    product: _v13,
                    device_id: _v2?.vuid ?? null,
                    third_party_integration: _v15
                  })), window.location.href = `${_v8 ? _v18.RequiredOAuthPaths[_v8] : _v18.RequiredOAuthPaths.join}${_v11}`;
                });
              },
              children: (0, _v10.translate)({
                singular: "Switch account",
                dictionary: {
                  es: {
                    singular: "Cambiar de cuenta"
                  },
                  "de-DE": {
                    singular: "Konto wechseln"
                  },
                  "fr-FR": {
                    singular: "Changer de compte"
                  },
                  "ja-JP": {
                    singular: "アカウントを切り替える"
                  },
                  "ko-KR": {
                    singular: "계정 전환하기"
                  },
                  "pt-BR": {
                    singular: "Mude de conta"
                  },
                  "zh-CN": {
                    singular: "切换账户"
                  }
                }
              })
            }),
            style: {
              minWidth: "0",
              minHeight: "0"
            },
            children: (0, _v1.jsx)(_v35, {
              icon: (0, _v1.jsx)(_v34, {
                width: "24",
                height: "24"
              }),
              iconPosition: "right",
              children: (0, _v1.jsx)(_v33, {
                size: "2",
                children: _v3?.name
              })
            })
          })]
        }), (0, _v1.jsx)(_v23.PromptMessage, {
          size: "2",
          style: {
            textAlign: "left"
          },
          children: (0, _v10.translate)({
            singular: "When you allow GoDaddy to access your Vimeo account, your videos will appear in both accounts.",
            dictionary: {
              es: {
                singular: "Si permites que GoDaddy acceda a tu cuenta de Vimeo, tus videos aparecerán en ambas cuentas."
              },
              "de-DE": {
                singular: "Wenn du GoDaddy den Zugriff auf dein Vimeo-Konto erlaubst, werden deine Videos in beiden Konten angezeigt."
              },
              "fr-FR": {
                singular: "En autorisant GoDaddy à accéder à votre compte Vimeo, vous ferez apparaître vos vidéos sur les deux comptes."
              },
              "ja-JP": {
                singular: "GoDaddyにあなたのVimeoアカウントへのアクセスを許可すると、動画は両方のアカウントに表示されるようになります。"
              },
              "ko-KR": {
                singular: "GoDaddy가 Vimeo 계정에 액세스하도록 허용하면 두 계정 모두에 동영상이 나타납니다."
              },
              "pt-BR": {
                singular: "Quando você permite que o GoDaddy acesse sua conta do Vimeo, seus vídeos aparecerão em ambas as contas."
              },
              "zh-CN": {
                singular: "当您允许 GoDaddy 访问您的 Vimeo 帐户时，您的视频将同时出现在两个帐户中。"
              }
            }
          })
        }), (0, _v1.jsx)(_v28, {
          permissionPrompt: (0, _v10.translate)({
            singular: "Give GoDaddy permission to:",
            dictionary: {
              es: {
                singular: "Otórgale permiso a GoDaddy para que haga lo siguiente:"
              },
              "de-DE": {
                singular: "Gib GoDaddy die Erlaubnis zum:"
              },
              "fr-FR": {
                singular: "Accorder à GoDaddy les autorisations suivantes :"
              },
              "ja-JP": {
                singular: "GoDaddy に次のアクセスを許可する："
              },
              "ko-KR": {
                singular: "GoDaddy에게 다음 권한을 부여합니다."
              },
              "pt-BR": {
                singular: "Dê permissão ao GoDaddy para:"
              },
              "zh-CN": {
                singular: "允许 GoDaddy："
              }
            }
          }),
          permissions: _v36
        }), (0, _v1.jsx)(_v31, {
          fluid: !0,
          size: "lg",
          onClick: _v19,
          children: (0, _v10.translate)({
            singular: "Allow",
            dictionary: {
              es: {
                singular: "Permitir"
              },
              "de-DE": {
                singular: "Erlauben"
              },
              "fr-FR": {
                singular: "Autoriser"
              },
              "ja-JP": {
                singular: "許可する"
              },
              "ko-KR": {
                singular: "허용"
              },
              "pt-BR": {
                singular: "Permitir"
              },
              "zh-CN": {
                singular: "允许"
              }
            }
          })
        }), (0, _v1.jsx)(_v31, {
          fluid: !0,
          size: "lg",
          variant: "minimal",
          onClick: () => {
            "string" == typeof _v9 && window.location.replace(`${_v9}${_v18()}state=${_v7}`);
          },
          children: (0, _v10.translate)({
            singular: "Don’t allow",
            dictionary: {
              es: {
                singular: "No permitir"
              },
              "de-DE": {
                singular: "Nicht zulassen"
              },
              "fr-FR": {
                singular: "Ne pas autoriser"
              },
              "ja-JP": {
                singular: "許可しない"
              },
              "ko-KR": {
                singular: "허용 안 함"
              },
              "pt-BR": {
                singular: "Não Permitir"
              },
              "zh-CN": {
                singular: "不允许"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Disclaimer, {
          size: "3",
          children: (0, _v10.translate)({
            singular: "Don’t worry, {GODADDY_LINK}GoDaddy{GODADDY_LINK} won’t have access to your password. To change your application preferences, go to your {SETTINGS_LINK}settings{SETTINGS_LINK}.",
            replacements: {
              SETTINGS_LINK: _v0 => (0, _v1.jsx)(_v15.Link, {
                href: "#",
                target: "_blank",
                children: _v0
              }),
              GODADDY_LINK: _v0 => (0, _v1.jsx)(_v15.Link, {
                href: "#",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "No debes preocuparte, ya que {GODADDY_LINK}GoDaddy{GODADDY_LINK} no tendrá acceso a tu contraseña. Para cambiar las preferencias de la aplicación, ve a la {SETTINGS_LINK}configuración{SETTINGS_LINK}."
              },
              "de-DE": {
                singular: "Keine Sorge, {GODADDY_LINK}GoDaddy{GODADDY_LINK} bekommt keinen Zugriff auf dein Kennwort. Du kannst die Optionen für Apps in deinen {SETTINGS_LINK}Einstellungen{SETTINGS_LINK} ändern."
              },
              "fr-FR": {
                singular: "Ne vous inquiétez pas, {GODADDY_LINK}GoDaddy{GODADDY_LINK} n'aura pas accès à votre mot de passe. Pour modifier les préférences de l'application, rendez-vous dans vos {SETTINGS_LINK}paramètres{SETTINGS_LINK}."
              },
              "ja-JP": {
                singular: "ご心配なく、{GODADDY_LINK}GoDaddy{GODADDY_LINK}があなたのパスワードにアクセスすることはできません。アプリの詳細設定を変更するには{SETTINGS_LINK}設定{SETTINGS_LINK}にお進みください。"
              },
              "ko-KR": {
                singular: "걱정하지 마세요. {GODADDY_LINK}GoDaddy{GODADDY_LINK}는 회원님의 비밀번호에 액세스할 수 없습니다. 애플리케이션 설정을 변경하려면 {SETTINGS_LINK}설정{SETTINGS_LINK}으로 이동하세요."
              },
              "pt-BR": {
                singular: "Não se preocupe, o {GODADDY_LINK}GoDaddy{GODADDY_LINK} não terá acesso à sua senha. Para alterar as preferências do seu aplicativo, acesse as suas {SETTINGS_LINK}configurações{SETTINGS_LINK}."
              },
              "zh-CN": {
                singular: "别担心，{GODADDY_LINK}GoDaddy{GODADDY_LINK} 无法获得您的密码。要更改应用程序首选项，请前往{SETTINGS_LINK}设置{SETTINGS_LINK}。"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v16.MinimalFooterLayout, {})]
    });
  }
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = (0, _v6.default)(_v11.Button).withConfig({
      displayName: "staging__AllowButton",
      componentId: "sc-908ab41c-0"
    })`
  max-width: ${(0, _v4.rem)(350)};
  margin-top: ${(0, _v4.rem)(4)};
`,
    _v44 = _v6.default.div.withConfig({
      displayName: "staging__PromptUserDetails",
      componentId: "sc-908ab41c-1"
    })`
  display: flex;
  align-items: center;
  margin-top: ${(0, _v4.rem)(12)};
  margin-bottom: ${(0, _v4.rem)(24)};
`,
    _v45 = (0, _v6.default)(_v14.Paragraph).withConfig({
      displayName: "staging__UserNameParagraph",
      componentId: "sc-908ab41c-2"
    })`
  display: flex;
  align-items: center;
  margin-left: ${(0, _v4.rem)(12)};
  margin-bottom: 0;
`,
    _v46 = (0, _v6.default)(_v13.ChevronDown).withConfig({
      displayName: "staging__StyledChevron",
      componentId: "sc-908ab41c-3"
    })`
  margin-top: ${(0, _v4.rem)(4)};
  margin-bottom: ${(0, _v4.rem)(2)};
`,
    _v47 = (0, _v6.default)(_v11.Button).attrs({
      variant: "hyperminimal"
    }).withConfig({
      displayName: "staging__PopOverTrigger",
      componentId: "sc-908ab41c-4"
    })`
  margin-left: ${(0, _v4.rem)(8)};
  padding: 0;
`,
    _v48 = _v0 => {
      let _v1 = [];
      for (let _v0 in _v0) if (_v0[_v0]) {
        let _v0 = encodeURIComponent(_v0),
          _v1 = encodeURIComponent(_v0[_v0]);
        _v1.push(_v0 + "=" + _v1);
      }
      return _v1.join("&");
    };
  function _v49({
    userInfo: _v0
  }) {
    let _v1,
      {
        setTheme: _v2
      } = (0, _v5.useContext)(_v38.ThemeDispatchContext),
      [_v3, _v4] = (0, _v5.useState)(!1),
      [_v5, _v6] = (0, _v5.useState)(!1),
      [_v7, _v8] = (0, _v5.useState)((0, _v42.getCopyForApp)(0)),
      _v9 = (0, _v5.useContext)(_v17.ViewerContext),
      _v10 = _v9?.user,
      _v11 = (0, _v2.useRouter)(),
      _v12 = _v11.query,
      _v13 = _v12 && _v12.link ? (0, _v9.deepDecodeURIComponent)(_v12.link) : null,
      _v14 = _v12?.state,
      _v15 = _v12?.auth_action,
      _v16 = _v12?.response_type,
      _v17 = _v12?.email_policy && decodeURIComponent(_v12.email_policy),
      _v18 = _v12 && _v12.redirect_uri ? (0, _v9.deepDecodeURIComponent)(_v12.redirect_uri) : null,
      _v19 = window?.location?.search,
      _v20 = _v0.managed_user?.id?.toString() ?? "0",
      {
        scope: _v21 = "",
        via: _v22,
        third_party_integration: _v23
      } = _v12,
      _v24 = _v23 ?? (0, _v42.getTrackingName)(_v0?.app_id, _v22),
      _v25 = _v22 ?? _v24,
      _v26 = !!_v17;
    _v26 && (_v1 = _v0.managed_user?.email ? _v0.managed_user?.email : _v17);
    let _v27 = async (_v0 = []) => {
        _v4(!0), await fetch("/log_out", {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: JSON.stringify({
            token: _v9?.xsrft
          })
        }), await _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
          component: "authorization",
          type: "signin_redirect",
          account_type: null,
          managed_user_id: _v20,
          user_id: _v10?.id ? `${_v10.id}` : null,
          product: _v25,
          device_id: _v9?.vuid ?? null,
          third_party_integration: _v24
        }));
        let _v1 = _v19;
        if (_v0) {
          let _v0 = new URLSearchParams(_v19);
          _v0.forEach(_v0 => {
            _v0.delete(_v0);
          }), _v1 = _v0.toString();
        }
        window.location.href = `${_v15 ? _v18.RequiredOAuthPaths[_v15] : _v18.RequiredOAuthPaths.join}?${_v1}`;
      },
      _v28 = async () => {
        await _v27();
      },
      {
        data: _v29,
        loading: _v30
      } = (0, _v39.useQuery)(`/apps/${_v0.app_id}?fields=name,thumbnail,callbacks`);
    (0, _v5.useEffect)(() => {
      if (!_v30 && _v29 && _v0 && (!_v18 || _v18.match(/\/apps\/[0-9]+\/create.*/)?.index !== 0 && _v18.match(/\/apps\/[0-9]+\/preview.*/)?.index !== 0)) {
        if (_v18 && !_v29.callbacks.some(_v0 => _v0 === _v18 || _v0 === _v18.split("?")[0])) throw Error("Redirect URI is invalid.");
        _v8((0, _v42.getCopyForApp)(_v0.app_id ?? "0", _v29));
      }
    }, [_v30, _v0, _v29, _v18]), (0, _v5.useEffect)(() => {
      _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
        component: "authorization",
        type: "landing",
        account_type: null,
        managed_user_id: _v20,
        user_id: _v10?.id ? `${_v10.id}` : null,
        product: _v25,
        device_id: _v9?.vuid ?? null,
        third_party_integration: _v24
      }));
    }, [_v24, _v0, _v22, _v9?.vuid, _v10?.id, _v20, _v25]), (0, _v5.useEffect)(() => {
      if (_v9 && _v0) {
        if ((async () => {
          _v26 && _v0.auth_user && _v0.auth_user !== _v1 && (_v6(!0), await _v27(["current_user_email"]));
        })(), !_v10) {
          _v6(!0), _v11.push({
            pathname: _v15 ? _v18.RequiredOAuthPaths[_v15] : _v18.RequiredOAuthPaths.join,
            query: _v11.query
          });
          return;
        }
        if (_v0.managed_user?.id && _v0.managed_user?.transfer_status === _v29.TransferStatus.TRANSFER_COMPLETED && _v13) return void window.location.replace((0, _v30.transformLink)(_v13, _v12));
      }
    }, [_v15, _v13, _v12, _v19, _v0, _v10, _v9, _v26, _v1, _v27, _v11]);
    let _v31 = () => "string" == typeof _v18 && _v18.includes("?") ? "&" : "?",
      _v32 = async () => {
        _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
          component: "authorization",
          type: "accept",
          account_type: null,
          managed_user_id: _v20,
          user_id: _v10?.id ? `${_v10.id}` : null,
          product: _v25,
          device_id: _v9?.vuid ?? null,
          third_party_integration: _v24
        }));
        try {
          if (_v16 !== _v18.AuthResponseTypes.code && _v16 !== _v18.AuthResponseTypes.token) throw Error("Invalid parameter `response_type`.");
          let _v0 = _v16 === _v18.AuthResponseTypes.code ? "/oauth/authorize/code" : "/oauth/authorize/implicit",
            _v1 = await fetch(`//${_v9?.apiUrl}${_v0}${_v19}`, {
              method: "POST",
              headers: {
                Authorization: `jwt ${_v9?.jwt}`,
                "Content-Type": "application/json"
              },
              redirect: "follow"
            }),
            {
              code: _v2,
              access_token: _v3,
              expires_in: _v4,
              scope: _v5
            } = await _v1.json(),
            _v6 = _v2 ? `&code=${_v2}` : "",
            _v7 = _v3 ? `&access_token=${_v3}` : "";
          if (_v0.managed_user?.id && (_v0.managed_user?.transfer_status === _v29.TransferStatus.TRANSFER_NOT_REQUESTED || _v0.managed_user?.transfer_status === _v29.TransferStatus.TRANSFER_IN_PROGRESS)) return void window.location.replace((0, _v30.transformLink)("upgrade", _v12) + _v6 + _v7);
          if (_v13) return void window.location.replace((0, _v30.transformLink)(_v13, _v12) + _v6 + _v7);
          if (_v2) {
            let _v0 = _v48({
              code: _v2,
              state: _v14
            });
            window.location.replace(`${_v18}${_v31()}${_v0}`);
            return;
          }
          if (_v3) {
            let _v0 = _v48({
              access_token: _v3,
              token_type: "bearer",
              scope: _v5,
              expires_in: _v4,
              state: _v14
            });
            window.location.replace(`${_v18}${_v31()}#${_v0}`);
            return;
          }
        } catch (_v0) {
          console.log("Error with authorize request", _v0);
        }
      };
    if ((0, _v5.useEffect)(() => {
      _v0.app_id && (0, _v42.canSkipGrantStep)(_v0.app_id) ? (_v2(_v41.themes.dark), _v6(!0), _v9 && _v32()) : _v6(!1);
    }, [_v0.app_id, _v9?.vuid]), !_v7 || _v5 || _v30 || !_v9 || _v9 && !_v10 || _v3) return (0, _v1.jsx)(_v23.Layout, {
      children: (0, _v1.jsx)(_v23.Loader, {})
    });
    let _v33 = _v10?.pictures?.sizes?.[2]?.link || "",
      _v34 = _v10?.pictures?.sizes?.[3]?.link,
      _v35 = _v0.app_id,
      _v36 = _v10?.email,
      _v37 = _v12.partner_emails?.split(",");
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v23.Layout, {
        children: [(0, _v1.jsx)(_v20.default, {
          logo: _v7.logo
        }), (0, _v1.jsx)(_v23.PromptHeading, {
          size: "3",
          children: _v7.getAuthHeading()
        }), (0, _v1.jsxs)(_v44, {
          children: [(0, _v1.jsx)(_v8.Avatar, {
            alt: "",
            src: _v33,
            srcSet: `${_v34} 2x`,
            size: "sm",
            nameProps: {
              name: _v10?.name ?? ""
            }
          }), (0, _v1.jsx)(_v12.PopOver, {
            attach: "bottom",
            content: _v26 ? "" : (0, _v1.jsx)(_v11.Button, {
              variant: "hyperminimal",
              format: "soft",
              onClick: _v28,
              children: (0, _v10.translate)({
                singular: "Switch account",
                dictionary: {
                  es: {
                    singular: "Cambiar de cuenta"
                  },
                  "de-DE": {
                    singular: "Konto wechseln"
                  },
                  "fr-FR": {
                    singular: "Changer de compte"
                  },
                  "ja-JP": {
                    singular: "アカウントを切り替える"
                  },
                  "ko-KR": {
                    singular: "계정 전환하기"
                  },
                  "pt-BR": {
                    singular: "Mude de conta"
                  },
                  "zh-CN": {
                    singular: "切换账户"
                  }
                }
              })
            }),
            disabled: _v26,
            style: {
              minWidth: "0",
              minHeight: "0"
            },
            children: (0, _v1.jsx)(_v47, {
              icon: _v26 ? "" : (0, _v1.jsx)(_v46, {
                width: "24",
                height: "24"
              }),
              iconPosition: "right",
              children: (0, _v1.jsx)(_v45, {
                size: "2",
                children: _v10?.name
              })
            })
          })]
        }), _v35 && _v36 && _v37 && _v37.length > 0 && !_v37.includes(_v36) && (0, _v1.jsx)(_v40.Notice, {
          format: "negative",
          children: (0, _v42.getPartnerEmailWarningCopy)(_v35, _v37.join(", "), _v36)
        }), (0, _v1.jsx)(_v23.PromptMessage, {
          size: "2",
          style: {
            textAlign: "left"
          },
          children: _v7.getAuthPrompt()
        }), (0, _v1.jsx)(_v28, {
          permissionPrompt: _v7.getAuthPermissionsPrompt(),
          permissions: _v7.getAuthPermissions(_v21)
        }), (0, _v1.jsx)(_v43, {
          fluid: !0,
          size: "lg",
          onClick: _v32,
          children: (0, _v10.translate)({
            singular: "Allow",
            dictionary: {
              es: {
                singular: "Permitir"
              },
              "de-DE": {
                singular: "Erlauben"
              },
              "fr-FR": {
                singular: "Autoriser"
              },
              "ja-JP": {
                singular: "許可する"
              },
              "ko-KR": {
                singular: "허용"
              },
              "pt-BR": {
                singular: "Permitir"
              },
              "zh-CN": {
                singular: "允许"
              }
            }
          })
        }), (0, _v1.jsx)(_v43, {
          fluid: !0,
          size: "lg",
          variant: "minimal",
          onClick: () => {
            _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo_com.account_connection", 3, {
              component: "authorization",
              type: "decline",
              account_type: null,
              managed_user_id: _v20,
              user_id: _v10?.id ? `${_v10.id}` : null,
              product: _v25,
              device_id: _v9?.vuid ?? null,
              third_party_integration: _v24
            })), "string" == typeof _v18 && window.location.replace(`${_v18}${_v31()}state=${_v14}`);
          },
          children: (0, _v10.translate)({
            singular: "Don’t allow",
            dictionary: {
              es: {
                singular: "No permitir"
              },
              "de-DE": {
                singular: "Nicht zulassen"
              },
              "fr-FR": {
                singular: "Ne pas autoriser"
              },
              "ja-JP": {
                singular: "許可しない"
              },
              "ko-KR": {
                singular: "허용 안 함"
              },
              "pt-BR": {
                singular: "Não Permitir"
              },
              "zh-CN": {
                singular: "不允许"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Disclaimer, {
          size: "3",
          children: _v7.getAuthDisclaimer()
        })]
      }), (0, _v1.jsx)(_v16.MinimalFooterLayout, {})]
    });
  }
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  (0, _v3.withPageSetup)(async _v0 => {
    let {
        AccessToken: _v1
      } = await _v0.A(0),
      _v2 = _v0.query?.scope,
      _v3 = _v2 ? _v1.validateScopes(decodeURIComponent(_v2)) : "";
    if (_v3.length > 0) {
      let _v0 = new URL(_v0.resolvedUrl, _v0.req.headers.host?.includes("https://") ? _v0.req.headers.host : `https://${_v0.req.headers.host}`);
      return _v0.searchParams.set("scope", _v3), {
        redirect: {
          destination: `${_v0.pathname}?${_v0.searchParams.toString()}`,
          permanent: !1
        }
      };
    }
    return {
      props: {
        layoutOptions: {
          globalNotifications: !1
        },
        hasThemeSupport: !0
      }
    };
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, function () {
    let _v0 = (0, _v2.useRouter)(),
      {
        isLoading: _v1
      } = (0, _v51.useValidateClientId)(),
      {
        appId: _v2 = "0"
      } = _v0.query,
      {
        isLoading: _v3,
        userInfo: _v4
      } = (0, _v50.useManagedUserOauthInfo)((0, _v50.decodeOAuthQuery)(_v0.query));
    return _v1 ? (0, _v1.jsx)(_v23.Layout, {
      children: (0, _v1.jsx)(_v23.Loader, {})
    }) : parseInt(_v2, 10) === _v42.PartnerAppIds.GoDaddyProductionApp ? (0, _v1.jsx)(_v37, {}) : !_v3 && _v4.app_id ? (0, _v1.jsx)(_v49, {
      userInfo: _v4
    }) : (0, _v1.jsx)(_v23.Layout, {
      children: (0, _v1.jsx)(_v23.Loader, {})
    });
  }], 0);
}