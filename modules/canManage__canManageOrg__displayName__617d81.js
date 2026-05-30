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
    _v25 = _v0.i(0);
  let _v26 = ["canManage", "canManageOrg", "displayName", "icon", "icon.sizes", "logo", "logo.uri", "logo.sizes", "logo.defaultPicture", "orgUserRole", "orgUuid", "recordType", "teamDomain", "teamDomain.api", "teamDomain.site", "teamOwnerId", "untranslatedOrgUserRole", "untranslatedUserRole", "uri", "userRole"];
  function _v27() {
    let _v0 = (0, _v6.useContext)(_v20.ViewerContext),
      _v1 = (0, _v4.useRouter)(),
      _v2 = _v0?.user?.id,
      _v3 = Array.isArray(_v1?.query?.flow) ? _v1.query.flow[0] : _v1?.query?.flow,
      [_v4, _v5] = (0, _v6.useState)(null),
      {
        workspaceItems: _v6,
        workspaceError: _v7,
        workspaceLoading: _v8
      } = (_v0 => {
        let {
          data: _v1,
          error: _v2,
          isValidating: _v3
        } = (0, _v25.useGetUserWorkspaces)(() => _v0 ? {
          where: {
            userId: _v0
          },
          select: _v26
        } : null, {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        });
        return {
          workspaceItems: (0, _v6.useMemo)(() => {
            let _v0 = _v1?.data;
            return _v0 ? _v0.map(_v0 => {
              let _v1 = ["user_workspace", "workspace"].includes(_v0.recordType) ? _v0.icon?.sizes[0]?.link : _v0.logo?.sizes[0]?.link ?? _v0.logo?.baseLink;
              return {
                id: _v0.teamOwnerId,
                imgSrc: _v1,
                ownerAccount: _v0.tier,
                privateToMeFolderId: null,
                role: _v0.userRole,
                title: _v0.displayName
              };
            }).filter(({
              role: _v0
            }) => "Viewer" !== _v0 && "Uploader" !== _v0) : null;
          }, [_v1]),
          workspaceLoading: _v3,
          workspaceError: _v2
        };
      })(_v2),
      {} = (0, _v24.useBpEvents)("other", "vimeo.view_team_selection_page");
    (0, _v6.useEffect)(() => {
      if (_v2) {
        let {
          team_owner_id: _v0
        } = JSON.parse(document.getElementById("hubspot_media_bridge")?.innerText || "{}");
        _v5(_v0 || _v2);
      }
    }, [_v2]), (0, _v6.useEffect)(() => {
      _v6 && 1 === _v6.length && _v1.push({
        pathname: _v23.ONBOARD_FOLDER_SELECT_URL,
        query: {
          team_id: _v6[0].id,
          flow: _v3
        }
      });
    }, [_v1, _v6, _v3]);
    let _v9 = (0, _v6.useMemo)(() => _v6?.find(_v0 => _v0.id === _v4), [_v4, _v6]),
      _v10 = !!_v7,
      _v11 = _v10 || !_v4 || _v6?.length === 0;
    return _v8 || !_v1 || !_v0 || _v6 && 1 === _v6.length ? (0, _v1.jsx)(_v19.default, {}) : _v6 && 0 === _v6.length ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v18.ErrorPage, {
        error: new _v14.UnauthorizedError(),
        shouldShowSearch: !1
      }), (0, _v1.jsx)(_v21.Wrapper, {
        children: (0, _v1.jsx)(_v9.Text, {
          variant: "body-xl",
          children: (0, _v15.translate)({
            singular: "You need to be an Admin, Owner or Contributor in at least one team to proceed.",
            dictionary: {
              es: {
                singular: "Debe ser administrador, propietario o colaborador en, al menos, un equipo para poder continuar."
              },
              "de-DE": {
                singular: "Um fortzufahren, müssen Sie in mindestens ein Team Admin, Owner oder Beitragender sein."
              },
              "fr-FR": {
                singular: "Pour continuer, vous devez être administrateur, propriétaire ou contributeur dans au moins une équipe."
              },
              "ja-JP": {
                singular: "少なくとも1つのチームが続行するには、管理者、所有者、投稿者である必要があります。"
              },
              "ko-KR": {
                singular: "계속하려면 하나 이상의 팀에서 관리자, 소유자 또는 기여자여야 합니다."
              },
              "pt-BR": {
                singular: "Você precisa ser administrador, proprietário ou colaborador em pelo menos uma equipe para continuar."
              },
              "zh-CN": {
                singular: "您需要成为至少一个团队的管理员、所有者或贡献者才能继续。"
              }
            }
          })
        })
      })]
    }) : (0, _v1.jsx)(_v7.ThemeProvider, {
      theme: _v8.applyCustomThemeSVV,
      children: (0, _v1.jsx)(_v21.Container, {
        children: (0, _v1.jsxs)(_v21.Wrapper, {
          children: [_v10 && (0, _v1.jsx)(_v12.Alert, {
            status: "error",
            children: (0, _v1.jsx)(_v13.AlertDescription, {
              children: (0, _v15.translate)({
                singular: "Something went wrong!",
                dictionary: {
                  es: {
                    singular: "¡Se produjo un error!"
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schiefgelaufen."
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite !"
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました。"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다!"
                  },
                  "pt-BR": {
                    singular: "Algo deu errado!"
                  },
                  "zh-CN": {
                    singular: "出了点问题！"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v22.ConnectingToVimeo, {}), (0, _v1.jsx)(_v11.Header, {
            size: "xl",
            marginBottom: "24",
            children: (0, _v15.translate)({
              singular: "Select a team to connect to HubSpot",
              dictionary: {
                es: {
                  singular: "Seleccione un equipo para conectarse a HubSpot"
                },
                "de-DE": {
                  singular: "Wählen Sie ein Team für die Verbindung mit HubSpot"
                },
                "fr-FR": {
                  singular: "Sélectionnez une équipe à connecter à HubSpot"
                },
                "ja-JP": {
                  singular: "HubSpotに接続するチームを選択しましょう"
                },
                "ko-KR": {
                  singular: "HubSpot에 연결할 팀 선택"
                },
                "pt-BR": {
                  singular: "Selecione uma equipe para se conectar ao HubSpot"
                },
                "zh-CN": {
                  singular: "选择一个团队连接到 HubSpot"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Text, {
            variant: "body-xl",
            children: (0, _v15.translate)({
              singular: "The selected team’s video library will be available in the Vimeo app on HubSpot.",
              dictionary: {
                es: {
                  singular: "La videoteca del equipo seleccionado estará disponible en la aplicación de Vimeo en HubSpot."
                },
                "de-DE": {
                  singular: "Die Video Library des ausgewählten Teams wird in der Vimeo-App auf HubSpot verfügbar sein."
                },
                "fr-FR": {
                  singular: "La vidéothèque de l'équipe sélectionnée sera disponible dans l'application Vimeo sur HubSpot."
                },
                "ja-JP": {
                  singular: "選択したチームの動画ライブラリはHubSpotのVimeoアプリで利用できるようになります。"
                },
                "ko-KR": {
                  singular: "선택한 팀의 동영상 라이브러리는 HubSpot의 Vimeo 앱에서 사용할 수 있습니다."
                },
                "pt-BR": {
                  singular: "A biblioteca de vídeos da equipe selecionada estará disponível no aplicativo Vimeo no HubSpot."
                },
                "zh-CN": {
                  singular: "所选团队的视频库将可在 HubSpot 上的 Vimeo 应用程序中查看。"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Text, {
            variant: "body-xl",
            children: (0, _v15.translate)({
              singular: "You can change this later in your Vimeo account settings.",
              dictionary: {
                es: {
                  singular: "Puede cambiar esto más tarde en la configuración de su cuenta de Vimeo."
                },
                "de-DE": {
                  singular: "Sie können dies später in den Einstellungen Ihres Vimeo-Kontos ändern."
                },
                "fr-FR": {
                  singular: "Vous pouvez modifier cette option ultérieurement dans les paramètres de votre compte Vimeo."
                },
                "ja-JP": {
                  singular: "これはVimeoアカウントの設定で後から変更できます。"
                },
                "ko-KR": {
                  singular: "나중에 Vimeo 계정 설정에서 변경할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Você pode alterar isso posteriormente nas configurações da sua conta do Vimeo."
                },
                "zh-CN": {
                  singular: "您以后可以在 Vimeo 账户设置中进行更改。"
                }
              }
            })
          }), (0, _v1.jsxs)(_v28, {
            children: [(0, _v1.jsx)(_v11.Header, {
              size: "xs",
              marginBottom: "8",
              children: (0, _v15.translate)({
                singular: "Team",
                dictionary: {
                  es: {
                    singular: "Equipo"
                  },
                  "fr-FR": {
                    singular: "Équipe"
                  },
                  "ja-JP": {
                    singular: "チーム"
                  },
                  "ko-KR": {
                    singular: "팀"
                  },
                  "pt-BR": {
                    singular: "Equipe"
                  },
                  "zh-CN": {
                    singular: "团队"
                  }
                }
              })
            }), _v6 && _v4 && _v6.length > 0 && (0, _v1.jsx)(_v16.TeamListDropdown, {
              selectedId: _v4,
              items: _v6,
              icon: _v9 && _v9.imgSrc ? (0, _v1.jsx)(_v17.TeamLogo, {
                src: _v9.imgSrc
              }) : null,
              selectItem: _v0 => {
                _v5(_v0);
              },
              isLoading: !1,
              popOverAttach: "bottom"
            })]
          }), (0, _v1.jsxs)(_v21.ButtonWrapper, {
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              onClick: () => {
                _v1.push({
                  pathname: _v23.SETTINGS_MARKETING_URL
                });
              },
              children: (0, _v15.translate)({
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
            }), (0, _v1.jsx)(_v10.Button, {
              onClick: () => {
                _v4 && _v1.push({
                  pathname: _v23.ONBOARD_FOLDER_SELECT_URL,
                  query: {
                    team_id: _v4,
                    flow: _v3
                  }
                });
              },
              disabled: _v11,
              children: (0, _v15.translate)({
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
            })]
          })]
        })
      })
    });
  }
  let _v28 = _v7.default.div.withConfig({
      displayName: "TeamSelectScreen__TeamsWrapper",
      componentId: "sc-732aca12-0"
    })`
  margin: ${(0, _v5.rem)(24)};
`,
    _v29 = () => (0, _v1.jsx)(_v27, {});
  (0, _v2.withPageSetup)(() => ({
    props: {
      hubspotMediaBridge: !0
    }
  }), {
    requireLogin: !0,
    capability: "hasMarketingSettings"
  }), _v29.getLayout = _v3.getLayout, _v0.s(["default", 0, _v29], 0);
}