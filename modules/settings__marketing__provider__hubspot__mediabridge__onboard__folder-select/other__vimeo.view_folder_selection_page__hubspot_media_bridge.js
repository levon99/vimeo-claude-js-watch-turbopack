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
    _v18 = _v0.i(0);
  function _v19() {
    let _v0 = (0, _v4.useContext)(_v13.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      _v2 = Number(_v1?.query?.team_id),
      _v3 = Array.isArray(_v1?.query?.flow) ? _v1.query.flow[0] : _v1?.query?.flow,
      [_v4, _v5] = (0, _v4.useState)(!1),
      [_v6, _v7] = (0, _v4.useState)(!1),
      [_v8, _v9] = (0, _v4.useState)([]),
      {
        sendActionEvent: _v10
      } = (0, _v18.useBpEvents)("other", "vimeo.view_folder_selection_page");
    (0, _v4.useEffect)(() => {
      let {
        team_owner_id: _v0,
        folders_data: _v1
      } = JSON.parse(document.getElementById("hubspot_media_bridge")?.innerText || "{}");
      _v1 && _v0 === _v2 && _v9([..._v1]);
    }, [_v2]);
    let _v11 = async () => {
        if (_v10("vimeo.select_number_of_folders", "next", "" + _v8.length), !_v2 || !_v0?.xsrft) return void _v5(!0);
        _v7(!0);
        let _v0 = _v8.map(_v0 => ((_v0 = "") => Number(_v0?.match(/(\d)+/gm)?.[1]))(_v0?.uri)),
          _v1 = await (0, _v14.postHubSpotMediaBridgeImport)(_v2, _v0, _v0.xsrft);
        _v7(!1);
        let {
          import_uuid: _v2,
          archive_uuid: _v3
        } = _v1;
        _v2 || _v3 ? _v1.push({
          pathname: _v17.ONBOARD_PROGRESS_URL,
          query: {
            import_uuid: _v2,
            archive_uuid: _v3,
            flow: _v3
          }
        }) : _v5(!0);
      },
      _v12 = _v6 || 0 === _v8.length,
      _v13 = _v4 || !_v2 || !_v0?.xsrft;
    return (0, _v1.jsx)(_v15.Container, {
      children: (0, _v1.jsxs)(_v15.Wrapper, {
        children: [_v13 && (0, _v1.jsx)(_v9.Alert, {
          status: "error",
          children: (0, _v1.jsx)(_v10.AlertDescription, {
            children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v16.ConnectingToVimeo, {}), (0, _v1.jsx)(_v6.Header, {
          as: "h1",
          size: "xl",
          marginBottom: "24",
          children: (0, _v12.translate)({
            singular: "Select folders",
            dictionary: {
              es: {
                singular: "Seleccionar carpetas"
              },
              "de-DE": {
                singular: "Ordner auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner des dossiers"
              },
              "ja-JP": {
                singular: "フォルダーを選択"
              },
              "ko-KR": {
                singular: "폴더 선택"
              },
              "pt-BR": {
                singular: "Selecionar pastas"
              },
              "zh-CN": {
                singular: "选择文件夹"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-xl",
          children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-xl",
          children: (0, _v12.translate)({
            singular: "All users in the HubSpot account will see the same media.",
            dictionary: {
              es: {
                singular: "Todos los usuarios de la cuenta de HubSpot verán los mismos archivos."
              },
              "de-DE": {
                singular: "Alle Benutzer:innen des HubSpot-Kontos sehen die gleichen Medien."
              },
              "fr-FR": {
                singular: "Tous les utilisateurs du compte HubSpot verront les mêmes médias."
              },
              "ja-JP": {
                singular: "HubSpotアカウントのすべてのユーザーに同じメディアが表示されます。"
              },
              "ko-KR": {
                singular: "HubSpot 계정의 모든 사용자에게는 동일한 미디어가 표시됩니다."
              },
              "pt-BR": {
                singular: "Todos os usuários da conta do HubSpot verão a mesma mídia."
              },
              "zh-CN": {
                singular: "HubSpot 账户中的所有用户均将看到相同的媒体。"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-xl",
          children: (0, _v12.translate)({
            singular: "You can always change folders later in your Vimeo account settings.",
            dictionary: {
              es: {
                singular: "Siempre puede cambiar las carpetas más adelante en la configuración de su cuenta de Vimeo."
              },
              "de-DE": {
                singular: "Sie können die Ordner später in den Einstellungen Ihres Vimeo-Kontos jederzeit ändern."
              },
              "fr-FR": {
                singular: "Vous pouvez toujours modifier les dossiers ultérieurement dans les paramètres de votre compte Vimeo."
              },
              "ja-JP": {
                singular: "フォルダーはVimeoアカウントの設定でいつでも変更できます。"
              },
              "ko-KR": {
                singular: "폴더는 나중에 Vimeo 계정 설정에서 언제든지 변경할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você pode alterar as pastas posteriormente a qualquer momento nas configurações da sua conta do Vimeo."
              },
              "zh-CN": {
                singular: "您以后可以随时在 Vimeo 账户设置中更改文件夹。"
              }
            }
          })
        }), (0, _v1.jsx)(_v20, {
          children: _v2 && (0, _v1.jsx)(_v11.FolderSelect, {
            attach: "bottom",
            userId: _v2,
            selectedFolderURI: null,
            placeholderText: (0, _v12.translate)({
              singular: "Select folders",
              dictionary: {
                es: {
                  singular: "Seleccionar carpetas"
                },
                "de-DE": {
                  singular: "Ordner auswählen"
                },
                "fr-FR": {
                  singular: "Sélectionner des dossiers"
                },
                "ja-JP": {
                  singular: "フォルダーを選択"
                },
                "ko-KR": {
                  singular: "폴더 선택"
                },
                "pt-BR": {
                  singular: "Selecionar pastas"
                },
                "zh-CN": {
                  singular: "选择文件夹"
                }
              }
            }),
            multiSelect: !0,
            selectedFolderList: _v8,
            onChangeList: _v0 => {
              let _v1 = [..._v8];
              _v0.forEach(_v0 => {
                _v0.add && (_v1 = [..._v1, _v0.folder]), _v0.remove && (_v1 = [..._v1.filter(_v0 => _v0.uri !== _v0.folder.uri)]);
              }), _v9([..._v1]);
            }
          })
        }), (0, _v1.jsxs)(_v15.ButtonWrapper, {
          children: [(0, _v1.jsx)(_v7.Button, {
            onClick: () => {
              _v1.push({
                pathname: _v17.ONBOARD_URL,
                query: {
                  flow: _v3
                }
              });
            },
            variant: "secondary",
            children: (0, _v12.translate)({
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
          }), (0, _v1.jsx)(_v7.Button, {
            onClick: _v11,
            disabled: _v12,
            isLoading: _v6,
            children: (0, _v12.translate)({
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
    });
  }
  let _v20 = _v5.default.div.withConfig({
    displayName: "FolderSelectScreen__FolderSelectWrapper",
    componentId: "sc-78144eb3-0"
  })`
  margin: ${(0, _v3.rem)(16)};
  width: 40%;
  height: ${(0, _v3.rem)(360)};
`;
  var _v21 = _v0.i(0);
  _v0.i(0);
  let _v22 = () => (0, _v1.jsx)(_v19, {});
  _v22.getLayout = _v21.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v22], 0);
}