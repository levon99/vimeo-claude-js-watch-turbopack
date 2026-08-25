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
    _v13 = _v0.i(0);
  let _v14 = _v0 => (0, _v1.jsx)(_v13.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.881 3.473a1 1 0 0 1-1.775-.92L10 3l-.894-.448V2.55l.002-.003.002-.004.006-.011a1.39 1.39 0 0 1 .054-.095 2.919 2.919 0 0 1 .643-.719C10.29 1.338 11.007 1 12 1c.993 0 1.71.338 2.187.72a2.917 2.917 0 0 1 .643.718 1.903 1.903 0 0 1 .054.095l.006.01.002.005.001.003s.001.002-.893.449l.894-.447a1 1 0 0 1-1.775.92.92.92 0 0 0-.181-.192C12.79 3.162 12.508 3 12 3c-.507 0-.79.162-.938.28a.92.92 0 0 0-.181.193ZM3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-1v9.838c0 .528 0 .982-.03 1.357-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H9.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 0 1 5 16.838V7H4a1 1 0 0 1-1-1Zm4 1v9.8c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C8.25 19 8.623 19 9.2 19h5.6c.577 0 .949 0 1.232-.024.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C17 17.75 17 17.377 17 16.8V7H7Zm3 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z",
      fill: "currentColor"
    })
  });
  var _v15 = _v0.i(0),
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
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = _v0 => (0, _v1.jsx)(_v13.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 1 1 4 12a1 1 0 1 0-2 0A10 10 0 1 0 12 2Zm0 4.5a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V7.5a1 1 0 0 0-1-1Z",
      fill: "currentColor"
    })
  });
  var _v36 = _v0.i(0);
  let _v37 = "recently-deleted-bulk-toast";
  function _v38({
    numSelected: _v0,
    onDelete: _v1,
    onRestore: _v2,
    onClear: _v3,
    isRestoreDisabled: _v4
  }) {
    let [_v5, _v6] = (0, _v10.useState)(!1),
      {
        colorMode: _v7
      } = (0, _v33.useColorMode)(),
      _v8 = async () => {
        if (!_v5) {
          _v6(!0);
          try {
            await _v2();
          } finally {
            _v6(!1);
          }
        }
      },
      _v9 = "dark" === _v7 ? _v30.LightMode : _v30.DarkMode;
    return (0, _v1.jsx)(_v9, {
      children: (0, _v1.jsx)(_v36.BulkActionsBar.ActionBar, {
        isActive: _v0 > 0,
        targetElementId: _v37,
        children: (0, _v1.jsxs)(_v11.Flex, {
          alignItems: "center",
          gap: "0.5rem",
          children: [(0, _v1.jsx)(_v4.Text, {
            color: "text-primary",
            variant: "body-lg",
            marginRight: "3rem",
            children: (0, _v16.translate)({
              singular: "{COUNT} video selected",
              plural: "{COUNT} videos selected",
              count: _v0,
              replacements: {
                COUNT: _v0
              },
              dictionary: {
                es: {
                  singular: "{COUNT} video seleccionado",
                  plural: "{COUNT} videos seleccionados"
                },
                "de-DE": {
                  singular: "{COUNT} Video ausgewählt",
                  plural: "{COUNT} Videos ausgewählt"
                },
                "fr-FR": {
                  singular: "{COUNT} vidéo sélectionnée",
                  plural: "{COUNT} vidéos sélectionnées"
                },
                "ja-JP": {
                  singular: "{COUNT} 件の動画が選択されました",
                  plural: "{COUNT} 件の動画が選択されました"
                },
                "ko-KR": {
                  singular: "동영상 {COUNT}개 선택",
                  plural: "동영상 {COUNT}개 선택"
                },
                "pt-BR": {
                  singular: "{COUNT} vídeo selecionado",
                  plural: "{COUNT} vídeos selecionados"
                },
                "zh-CN": {
                  singular: "已选择 {COUNT} 个视频",
                  plural: "已选择 {COUNT} 个视频"
                }
              }
            })
          }), (0, _v1.jsx)(_v32.Tooltip, {
            label: _v4 ? (0, _v16.translate)({
              singular: "Your storage is full. Permanently delete files to free up space.",
              dictionary: {
                es: {
                  singular: "Tu almacenamiento está lleno. Elimina archivos de forma permanente para liberar espacio."
                },
                "de-DE": {
                  singular: "Ihr Speicher ist voll. Löschen Sie Dateien endgültig, um Speicherplatz freizugeben."
                },
                "fr-FR": {
                  singular: "Votre espace de stockage est plein. Supprimez définitivement des fichiers pour libérer de l'espace."
                },
                "ja-JP": {
                  singular: "ストレージがいっぱいです. 空き容量を確保するにはファイルを完全に削除してください."
                },
                "ko-KR": {
                  singular: "저장 공간이 가득 찼습니다. 공간을 확보하려면 파일을 영구 삭제하세요."
                },
                "pt-BR": {
                  singular: "Seu armazenamento está cheio. Exclua arquivos permanentemente para liberar espaço."
                },
                "zh-CN": {
                  singular: "您的存储已满。永久删除文件以释放空间。"
                }
              }
            }) : void 0,
            children: (0, _v1.jsx)(_v36.BulkActionsBar.ActionButton, {
              icon: (0, _v1.jsx)(_v35, {}),
              label: (0, _v16.translate)({
                singular: "Restore",
                dictionary: {
                  es: {
                    singular: "Restaurar"
                  },
                  "de-DE": {
                    singular: "Wiederherstellen"
                  },
                  "fr-FR": {
                    singular: "Réinstaurer"
                  },
                  "ja-JP": {
                    singular: "復元"
                  },
                  "ko-KR": {
                    singular: "복원"
                  },
                  "pt-BR": {
                    singular: "Restaure"
                  },
                  "zh-CN": {
                    singular: "恢复"
                  }
                }
              }),
              disabled: _v5 || !!_v4,
              onClick: _v8
            })
          }), (0, _v1.jsx)(_v36.BulkActionsBar.ActionButton, {
            icon: (0, _v1.jsx)(_v14, {}),
            label: (0, _v16.translate)({
              singular: "Delete forever",
              dictionary: {
                es: {
                  singular: "Eliminar definitivamente"
                },
                "de-DE": {
                  singular: "Endgültig löschen"
                },
                "fr-FR": {
                  singular: "Supprimer définitivement"
                },
                "ja-JP": {
                  singular: "完全に削除"
                },
                "ko-KR": {
                  singular: "영구 삭제"
                },
                "pt-BR": {
                  singular: "Excluir permanentemente"
                },
                "zh-CN": {
                  singular: "永久删除"
                }
              }
            }),
            onClick: _v1
          }), (0, _v1.jsx)(_v31.IconButton, {
            "aria-label": (0, _v16.translate)({
              singular: "Deselect all",
              dictionary: {
                es: {
                  singular: "Deseleccionar todo"
                },
                "de-DE": {
                  singular: "Alle abwählen"
                },
                "fr-FR": {
                  singular: "Tout désélectionner"
                },
                "ja-JP": {
                  singular: "すべての選択を解除"
                },
                "ko-KR": {
                  singular: "모두 선택 해제"
                },
                "pt-BR": {
                  singular: "Desmarcar tudo"
                },
                "zh-CN": {
                  singular: "取消全选"
                }
              }
            }),
            onClick: _v3,
            icon: (0, _v1.jsx)(_v34.CloseX, {}),
            variant: "tertiary"
          })]
        })
      })
    });
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = _v0 => (0, _v1.jsx)(_v13.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M11.104 8.744c.02.062.05.119.09.17l.12.15a.999.999 0 0 0 1.42 0 .613.613 0 0 0 .12-.15.56.56 0 0 0 .09-.17.704.704 0 0 0 .06-.19 1.23 1.23 0 0 0 0-.19.881.881 0 0 0-.08-.39 1 1 0 0 0-1.3-.54 1.189 1.189 0 0 0-.33.22.998.998 0 0 0-.21.32.998.998 0 0 0-.08.39 1.23 1.23 0 0 0 0 .19.698.698 0 0 0 .1.19ZM12.024 16.384a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.239 1.732a2 2 0 0 1 1.522 0l7.5 3.088A2 2 0 0 1 21.5 6.67V11c0 6.46-4.761 10.24-8.99 11.4-.337.093-.691.09-1.027-.004C7.266 21.204 2.5 17.465 2.5 11V6.67a2 2 0 0 1 1.239-1.85l7.5-3.088ZM12 3.582 4.5 6.67V11c0 5.28 3.855 8.425 7.504 9.465C15.641 19.459 19.5 16.285 19.5 11V6.67L12 3.582Z"
      })]
    })
  });
  var _v45 = _v0.i(0);
  function _v46() {
    let _v0 = (0, _v29.useViewer)(),
      {
        capabilities: _v1
      } = (0, _v45.useCapability)(["hasDataRetention"], _v0?.teamUser?.ownerId);
    return _v1?.hasDataRetention ? (0, _v1.jsxs)(_v41.AlertRoot, {
      size: "sm",
      backgroundColor: "fill-component",
      borderRadius: "md",
      children: [(0, _v1.jsx)(_v40.AlertIcon, {
        children: (0, _v1.jsx)(_v44, {
          color: "text-primary"
        })
      }), (0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsx)(_v42.AlertTitle, {
          color: "text-primary",
          children: (0, _v16.translate)({
            singular: "Looking for videos removed by your data retention policy?",
            dictionary: {
              es: {
                singular: "¿Busca videos eliminados por la política de retención de datos?"
              },
              "de-DE": {
                singular: "Suchen Sie nach Videos, die durch die Datenaufbewahrungsrichtlinie Ihrer Organisation entfernt wurden?"
              },
              "fr-FR": {
                singular: "Vous recherchez des vidéos supprimées par votre politique de conservation des données ?"
              },
              "ja-JP": {
                singular: "データ保持ポリシーによって削除された動画をお探しですか?"
              },
              "ko-KR": {
                singular: "데이터 보존 정책에 의해 삭제된 동영상을 찾고 계신가요?"
              },
              "pt-BR": {
                singular: "Procurando vídeos removidos pela sua política de retenção de dados?"
              },
              "zh-CN": {
                singular: "正在查找被您的数据保留策略删除的视频吗？"
              }
            }
          })
        }), (0, _v1.jsx)(_v39.AlertDescription, {
          color: "text-primary",
          children: (0, _v16.translate)({
            singular: "This page only shows videos manually deleted by team members. Videos removed automatically by your organization's retention policy live in {LINK}Data retention history{/LINK}.",
            replacements: {
              LINK: _v0 => (0, _v1.jsxs)(_v43.Link, {
                href: "/manage/team/settings/history",
                target: "_blank",
                variant: "inline-secondary",
                color: "text-primary",
                fontSize: "inherit",
                children: [_v0, " ↗"]
              }, "data-retention-link")
            },
            dictionary: {
              es: {
                singular: "Esta página solo muestra los videos eliminados manualmente por los miembros del equipo. Los videos eliminados automáticamente por la política de retención de su organización se encuentran en {LINK}Historial de retención de datos{/LINK}."
              },
              "de-DE": {
                singular: "Auf dieser Seite werden nur Videos angezeigt, die von Teammitgliedern manuell gelöscht wurden. Videos, die automatisch gemäß der Aufbewahrungsrichtlinie Ihrer Organisation entfernt wurden, finden Sie im {LINK}Verlauf der Datenaufbewahrung{/LINK}."
              },
              "fr-FR": {
                singular: "Cette page n'affiche que les vidéos supprimées manuellement par les membres de l'équipe. Les vidéos supprimées automatiquement par la politique de conservation de votre organisation se trouvent dans {LINK}Historique de conservation des données{/LINK}."
              },
              "ja-JP": {
                singular: "このページには、チームメンバーによって手動で削除された動画のみが表示されます。組織の保持ポリシーによって自動的に削除された動画は{LINK}データ保持履歴{/LINK}に表示されます。"
              },
              "ko-KR": {
                singular: "이 페이지에는 팀 구성원이 수동으로 삭제한 동영상만 표시됩니다. 조직의 보존 정책에 따라 자동으로 제거된 동영상은 {LINK}데이터 보존 기록{/LINK}에서 확인할 수 있습니다."
              },
              "pt-BR": {
                singular: "Esta página mostra apenas vídeos excluídos manualmente por membros da equipe. Vídeos removidos automaticamente pela política de retenção da sua organização podem ser encontrados em {LINK}Histórico de retenção de dados{/LINK}."
              },
              "zh-CN": {
                singular: "此页面仅显示由团队成员手动删除的视频。因贵组织的保留策略而被自动删除的视频会显示在{LINK}数据保留记录{/LINK}中。"
              }
            }
          })
        })]
      })]
    }) : null;
  }
  function _v47({
    icon: _v0,
    title: _v1,
    description: _v2
  }) {
    return (0, _v1.jsxs)(_v11.Flex, {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      w: "100%",
      h: "100%",
      children: [_v0, (0, _v1.jsx)(_v4.Text, {
        variant: "heading-lg",
        margin: `${(0, _v5.rem)(16)} 0`,
        children: _v1
      }), (0, _v1.jsx)(_v4.Text, {
        variant: "body-lg",
        color: "text-secondary",
        maxW: (0, _v5.rem)(300),
        textAlign: "center",
        children: _v2
      })]
    });
  }
  var _v48 = _v0.i(0);
  function _v49({
    onEmptyTrash: _v0,
    recentlyDeletedDiskSpace: _v1
  }) {
    let _v2 = (0, _v19.bytesToSize)(_v1, 1);
    return (0, _v1.jsx)(_v41.AlertRoot, {
      backgroundColor: "#BEE3F87A",
      sx: {
        _dark: {
          backgroundColor: "rgba(26, 54, 93, 1)"
        }
      },
      borderRadius: "md",
      p: "sm",
      pl: "md",
      marginBottom: "0",
      alignItems: "center",
      children: (0, _v1.jsx)(_v39.AlertDescription, {
        width: "100%",
        children: (0, _v1.jsxs)(_v11.Flex, {
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "sm",
          children: [(0, _v1.jsxs)(_v4.Text, {
            as: "span",
            variant: "body-sm",
            fontSize: (0, _v5.rem)(14),
            children: [(0, _v16.translate)({
              singular: "Deleted videos are using",
              dictionary: {
                es: {
                  singular: "Los videos eliminados están ocupando"
                },
                "de-DE": {
                  singular: "Gelöschte Videos belegen"
                },
                "fr-FR": {
                  singular: "Les vidéos supprimées occupent"
                },
                "ja-JP": {
                  singular: "削除済みの動画は"
                },
                "ko-KR": {
                  singular: "삭제된 동영상이"
                },
                "pt-BR": {
                  singular: "Vídeos excluídos estão ocupando"
                },
                "zh-CN": {
                  singular: "已删除的视频占用了您"
                }
              }
            }), " ", (0, _v1.jsx)("strong", {
              children: _v2
            }), " ", (0, _v16.translate)({
              singular: "of your storage. They'll be permanently deleted after {DAYS} days, or you can remove them now to free up storage.",
              replacements: {
                DAYS: 30
              },
              dictionary: {
                es: {
                  singular: "de tu almacenamiento. Se eliminarán de forma permanente después de {DAYS} días, o puedes eliminarlos ahora para liberar espacio de almacenamiento."
                },
                "de-DE": {
                  singular: "Ihres Speicherplatzes. Sie werden nach {DAYS} Tagen dauerhaft gelöscht, oder Sie können sie jetzt entfernen, um Speicherplatz freizugeben."
                },
                "fr-FR": {
                  singular: "de votre espace de stockage. Ils seront définitivement supprimés après {DAYS} jours, ou vous pouvez les supprimer maintenant pour libérer de l'espace de stockage."
                },
                "ja-JP": {
                  singular: "ストレージの容量を占めています。これらは{DAYS}日後に永続的に削除されます。ストレージを空けるために、今すぐ削除することもできます。"
                },
                "ko-KR": {
                  singular: "저장 공간의 일부입니다. 해당 항목은 {DAYS}일 후에 영구적으로 삭제됩니다. 또는 지금 삭제하여 저장 공간을 확보할 수 있습니다."
                },
                "pt-BR": {
                  singular: "do seu armazenamento. Eles serão excluídos permanentemente após {DAYS} dias, ou você pode removê‑los agora para liberar espaço de armazenamento."
                },
                "zh-CN": {
                  singular: "占用你的存储空间。它们将在 {DAYS} 天后被永久删除，或者你现在也可以删除它们以释放存储空间。"
                }
              }
            })]
          }), (0, _v1.jsx)(_v48.Button, {
            variant: "secondary",
            size: "sm",
            onClick: _v0,
            flexShrink: 0,
            _light: {
              bg: "rgba(255, 255, 255, 0.6)",
              _hover: {
                bg: "rgba(255, 255, 255, 1)"
              }
            },
            _dark: {
              bg: "lightBlueAlpha.300",
              _hover: {
                bg: "lightBlueAlpha.400"
              }
            },
            children: (0, _v16.translate)({
              singular: "Empty trash",
              dictionary: {
                es: {
                  singular: "Vaciar la papelera"
                },
                "de-DE": {
                  singular: "Papierkorb leeren"
                },
                "fr-FR": {
                  singular: "Vider la corbeille"
                },
                "ja-JP": {
                  singular: "ゴミ箱を空にする"
                },
                "ko-KR": {
                  singular: "휴지통 비우기"
                },
                "pt-BR": {
                  singular: "Esvaziar lixeira"
                },
                "zh-CN": {
                  singular: "清空垃圾箱"
                }
              }
            })
          })]
        })
      })
    });
  }
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = _v0 => (0, _v1.jsx)(_v13.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M21 13.86v-.05a2.608 2.608 0 0 0-.1-.57l-1.64-7.73a3 3 0 0 0-3-2.51H7.69a3 3 0 0 0-2.95 2.51l-1.62 7.71a2.61 2.61 0 0 0-.1.57v.05C3 13.91 3 14 3 14v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4.14ZM6.71 5.83a1 1 0 0 1 1-.83h8.6a1 1 0 0 1 1 .83l1.2 5.22A2.623 2.623 0 0 0 18 11H6a2.626 2.626 0 0 0-.49.05l1.2-5.22ZM19 18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3.92l.08-.46A1 1 0 0 1 6 13h12a1 1 0 0 1 .92.62l.08.46V18Zm-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
      fill: "currentColor"
    })
  });
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  function _v60({
    icon: _v0,
    title: _v1,
    subtitle: _v2
  }) {
    return (0, _v1.jsxs)(_v11.Flex, {
      gap: (0, _v5.rem)(12),
      h: (0, _v5.rem)(60),
      align: "center",
      py: (0, _v5.rem)(8),
      pr: (0, _v5.rem)(8),
      children: [(0, _v1.jsx)(_v11.Flex, {
        w: (0, _v5.rem)(40),
        h: (0, _v5.rem)(40),
        borderRadius: (0, _v5.rem)(8),
        align: "center",
        justify: "center",
        flexShrink: 0,
        children: _v0
      }), (0, _v1.jsxs)(_v55.Stack, {
        gap: (0, _v5.rem)(4),
        flex: 1,
        children: [(0, _v1.jsx)(_v4.Text, {
          variant: "heading-xs",
          color: "text-primary",
          children: _v1
        }), (0, _v1.jsx)(_v4.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v2
        })]
      })]
    });
  }
  function _v61({
    isOpen: _v0,
    isNewUser: _v1,
    onDismiss: _v2
  }) {
    let _v3 = (0, _v10.useRef)("overlay");
    return (0, _v1.jsxs)(_v51.Modal, {
      isOpen: _v0,
      onClose: () => _v2(_v3.current),
      children: [(0, _v1.jsx)(_v54.ModalOverlay, {}), (0, _v1.jsxs)(_v53.ModalContent, {
        width: (0, _v5.rem)(488),
        maxWidth: (0, _v5.rem)(488),
        borderRadius: (0, _v5.rem)(20),
        padding: 0,
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v52.ModalCloseButton, {
          top: (0, _v5.rem)(20),
          right: (0, _v5.rem)(20),
          onClick: () => {
            _v3.current = "close_button";
          },
          color: "text-secondary"
        }), (0, _v1.jsxs)(_v55.Stack, {
          gap: (0, _v5.rem)(12),
          pt: (0, _v5.rem)(24),
          px: (0, _v5.rem)(24),
          pb: 0,
          children: [!_v1 && (0, _v1.jsx)(_v50.Badge, {
            variant: "new",
            size: "sm",
            fontFamily: "heading",
            children: (0, _v16.translate)({
              singular: "Important update",
              dictionary: {
                es: {
                  singular: "Actualización importante"
                },
                "de-DE": {
                  singular: "Wichtige Aktualisierung"
                },
                "fr-FR": {
                  singular: "Mise à jour importante"
                },
                "ja-JP": {
                  singular: "重要なお知らせ"
                },
                "ko-KR": {
                  singular: "중요 업데이트"
                },
                "pt-BR": {
                  singular: "Atualização importante"
                },
                "zh-CN": {
                  singular: "重要更新"
                }
              }
            })
          }), (0, _v1.jsxs)(_v55.Stack, {
            gap: (0, _v5.rem)(4),
            children: [(0, _v1.jsx)(_v4.Text, {
              variant: "heading-md",
              color: "text-primary",
              children: _v1 ? (0, _v16.translate)({
                singular: "Deleted videos have a safety net",
                dictionary: {
                  es: {
                    singular: "Los vídeos eliminados tienen una red de seguridad"
                  },
                  "de-DE": {
                    singular: "Gelöschte Videos haben ein Sicherheitsnetz"
                  },
                  "fr-FR": {
                    singular: "Les vidéos supprimées bénéficient d’un filet de sécurité"
                  },
                  "ja-JP": {
                    singular: "削除された動画には保護措置があります"
                  },
                  "ko-KR": {
                    singular: "삭제된 동영상에는 안전망이 있습니다"
                  },
                  "pt-BR": {
                    singular: "Vídeos excluídos têm uma rede de segurança"
                  },
                  "zh-CN": {
                    singular: "已删除的视频有安全保障"
                  }
                }
              }) : (0, _v16.translate)({
                singular: "Deleted videos now have a safety net",
                dictionary: {
                  es: {
                    singular: "Los videos eliminados ahora tienen una red de seguridad"
                  },
                  "de-DE": {
                    singular: "Gelöschte Videos haben jetzt ein Sicherheitsnetz"
                  },
                  "fr-FR": {
                    singular: "Les vidéos supprimées disposent désormais d'un filet de sécurité"
                  },
                  "ja-JP": {
                    singular: "削除された動画に保護機能が追加されました"
                  },
                  "ko-KR": {
                    singular: "삭제된 동영상에 이제 안전망이 생겼습니다"
                  },
                  "pt-BR": {
                    singular: "Vídeos excluídos agora têm uma rede de segurança"
                  },
                  "zh-CN": {
                    singular: "已删除的视频现在有了安全保障"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v1 ? (0, _v16.translate)({
                singular: "Anything you delete lands here and stays recoverable for {RETENTION_DAYS} days.",
                replacements: {
                  RETENTION_DAYS: 30
                },
                dictionary: {
                  es: {
                    singular: "Todo lo que elimines va a parar aquí y permanece recuperable durante {RETENTION_DAYS} días."
                  },
                  "de-DE": {
                    singular: "Alles, was Sie löschen, landet hier und kann für {RETENTION_DAYS} Tage wiederhergestellt werden."
                  },
                  "fr-FR": {
                    singular: "Tout ce que vous supprimez se retrouve ici et reste récupérable pendant {RETENTION_DAYS} jours."
                  },
                  "ja-JP": {
                    singular: "削除したアイテムはここに移動し、{RETENTION_DAYS}日間は復元可能な状態で保持されます。"
                  },
                  "ko-KR": {
                    singular: "삭제한 항목은 모두 여기에 저장되며 {RETENTION_DAYS}일 동안 복구 가능한 상태로 유지됩니다."
                  },
                  "pt-BR": {
                    singular: "Tudo o que você excluir ficará aqui e poderá ser recuperado por {RETENTION_DAYS} dias."
                  },
                  "zh-CN": {
                    singular: "您删除的任何内容都会放在此处，并在 {RETENTION_DAYS} 天内可恢复。"
                  }
                }
              }) : (0, _v16.translate)({
                singular: "From today, anything you delete lands here and stays recoverable for {RETENTION_DAYS} days.",
                replacements: {
                  RETENTION_DAYS: 30
                },
                dictionary: {
                  es: {
                    singular: "A partir de hoy, todo lo que elimines va aquí y se puede recuperar durante {RETENTION_DAYS} días."
                  },
                  "de-DE": {
                    singular: "Ab heute landet alles, was Sie löschen, hier und bleibt für {RETENTION_DAYS} Tage wiederherstellbar."
                  },
                  "fr-FR": {
                    singular: "Dès aujourd'hui, tout ce que vous supprimez est placé ici et reste récupérable pendant {RETENTION_DAYS} jours."
                  },
                  "ja-JP": {
                    singular: "本日から、削除したアイテムはすべてここに移動し、{RETENTION_DAYS}日間は復元可能な状態で保持されます。"
                  },
                  "ko-KR": {
                    singular: "오늘부터 삭제하는 모든 항목은 여기에 보관되며 {RETENTION_DAYS}일 동안 복구할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "A partir de hoje, tudo o que você excluir vai para cá e ficará recuperável por {RETENTION_DAYS} dias."
                  },
                  "zh-CN": {
                    singular: "从今天起，任何你删除的内容都会到达此处，并在 {RETENTION_DAYS} 天内可恢复。"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v55.Stack, {
          gap: (0, _v5.rem)(24),
          pt: (0, _v5.rem)(24),
          px: (0, _v5.rem)(24),
          pb: (0, _v5.rem)(8),
          children: [(0, _v1.jsxs)(_v55.Stack, {
            gap: 0,
            children: [(0, _v1.jsx)(_v60, {
              icon: (0, _v1.jsx)(_v56.CircleCheck, {
                w: (0, _v5.rem)(24),
                h: (0, _v5.rem)(24)
              }),
              title: (0, _v16.translate)({
                singular: "Nothing disappears right away",
                dictionary: {
                  es: {
                    singular: "Nada desaparece de inmediato"
                  },
                  "de-DE": {
                    singular: "Nichts verschwindet sofort"
                  },
                  "fr-FR": {
                    singular: "Rien ne disparaît immédiatement"
                  },
                  "ja-JP": {
                    singular: "何もすぐには消えません"
                  },
                  "ko-KR": {
                    singular: "아무것도 바로 사라지지 않습니다"
                  },
                  "pt-BR": {
                    singular: "Nada desaparece imediatamente"
                  },
                  "zh-CN": {
                    singular: "不会立即消失"
                  }
                }
              }),
              subtitle: (0, _v16.translate)({
                singular: "Deleted videos and folders stay here for {RETENTION_DAYS} days",
                replacements: {
                  RETENTION_DAYS: 30
                },
                dictionary: {
                  es: {
                    singular: "Los videos y carpetas eliminados permanecen aquí durante {RETENTION_DAYS} días"
                  },
                  "de-DE": {
                    singular: "Gelöschte Videos und Ordner bleiben hier {RETENTION_DAYS} Tage lang"
                  },
                  "fr-FR": {
                    singular: "Les vidéos et dossiers supprimés restent ici pendant {RETENTION_DAYS} jours"
                  },
                  "ja-JP": {
                    singular: "削除された動画およびフォルダは{RETENTION_DAYS}日間ここに残ります"
                  },
                  "ko-KR": {
                    singular: "삭제된 동영상과 폴더는 {RETENTION_DAYS}일간 여기에 보관됩니다"
                  },
                  "pt-BR": {
                    singular: "Vídeos e pastas excluídos permanecem aqui por {RETENTION_DAYS} dias"
                  },
                  "zh-CN": {
                    singular: "已删除的视频和文件夹会在此保留 {RETENTION_DAYS} 天"
                  }
                }
              })
            }), (0, _v1.jsx)(_v60, {
              icon: (0, _v1.jsx)(_v59.Reset, {
                w: (0, _v5.rem)(24),
                h: (0, _v5.rem)(24)
              }),
              title: (0, _v16.translate)({
                singular: "Restore in one click",
                dictionary: {
                  es: {
                    singular: "Restaurar con un clic"
                  },
                  "de-DE": {
                    singular: "Mit einem Klick wiederherstellen"
                  },
                  "fr-FR": {
                    singular: "Restaurer en un clic"
                  },
                  "ja-JP": {
                    singular: "ワンクリックで復元"
                  },
                  "ko-KR": {
                    singular: "클릭 한 번으로 복원"
                  },
                  "pt-BR": {
                    singular: "Restaurar com um clique"
                  },
                  "zh-CN": {
                    singular: "一键恢复"
                  }
                }
              }),
              subtitle: (0, _v16.translate)({
                singular: "Bring any item back to its original folder anytime within {RETENTION_DAYS} days",
                replacements: {
                  RETENTION_DAYS: 30
                },
                dictionary: {
                  es: {
                    singular: "Devuelve cualquier elemento a su carpeta original en cualquier momento dentro de {RETENTION_DAYS} días"
                  },
                  "de-DE": {
                    singular: "Stellen Sie jedes Element jederzeit innerhalb von {RETENTION_DAYS} Tagen in seinen ursprünglichen Ordner zurück"
                  },
                  "fr-FR": {
                    singular: "Restaurez n'importe quel élément dans son dossier d'origine à tout moment pendant {RETENTION_DAYS} jours"
                  },
                  "ja-JP": {
                    singular: "任意のアイテムを{RETENTION_DAYS}日以内ならいつでも元のフォルダに戻せます"
                  },
                  "ko-KR": {
                    singular: "항목을 {RETENTION_DAYS}일 이내에 언제든 원래 폴더로 복원할 수 있습니다"
                  },
                  "pt-BR": {
                    singular: "Traga qualquer item de volta para sua pasta original a qualquer momento dentro de {RETENTION_DAYS} dias"
                  },
                  "zh-CN": {
                    singular: "在 {RETENTION_DAYS} 天内，可随时将任意项目恢复到其原始文件夹"
                  }
                }
              })
            }), (0, _v1.jsx)(_v60, {
              icon: (0, _v1.jsx)(_v57, {
                w: (0, _v5.rem)(24),
                h: (0, _v5.rem)(24)
              }),
              title: (0, _v16.translate)({
                singular: "Free up space when you're ready",
                dictionary: {
                  es: {
                    singular: "Libera espacio cuando quieras"
                  },
                  "de-DE": {
                    singular: "Geben Sie Speicherplatz frei, wenn Sie bereit sind"
                  },
                  "fr-FR": {
                    singular: "Libérez de l'espace quand vous le souhaitez"
                  },
                  "ja-JP": {
                    singular: "準備ができたらスペースを解放できます"
                  },
                  "ko-KR": {
                    singular: "준비되면 공간을 확보하세요"
                  },
                  "pt-BR": {
                    singular: "Libere espaço quando quiser"
                  },
                  "zh-CN": {
                    singular: "在你准备好时释放空间"
                  }
                }
              }),
              subtitle: (0, _v16.translate)({
                singular: "Deleted videos keep using storage until you remove them for good",
                dictionary: {
                  es: {
                    singular: "Los videos eliminados siguen ocupando espacio hasta que los elimines definitivamente"
                  },
                  "de-DE": {
                    singular: "Gelöschte Videos belegen weiterhin Speicherplatz, bis Sie sie endgültig entfernen"
                  },
                  "fr-FR": {
                    singular: "Les vidéos supprimées continuent d'occuper de l'espace de stockage tant que vous ne les supprimez pas définitivement"
                  },
                  "ja-JP": {
                    singular: "削除された動画は完全に削除するまでストレージを使用し続けます"
                  },
                  "ko-KR": {
                    singular: "삭제된 동영상은 완전히 삭제할 때까지 저장 공간을 계속 사용합니다"
                  },
                  "pt-BR": {
                    singular: "Vídeos excluídos continuam consumindo espaço até que você os remova permanentemente"
                  },
                  "zh-CN": {
                    singular: "已删除的视频会继续占用存储，直到你永久删除它们"
                  }
                }
              })
            })]
          }), (0, _v1.jsxs)(_v41.AlertRoot, {
            size: "sm",
            backgroundColor: "#BEE3F87A",
            sx: {
              _dark: {
                backgroundColor: "rgba(26, 54, 93, 1)"
              }
            },
            p: (0, _v5.rem)(16),
            borderRadius: "md",
            children: [(0, _v1.jsx)(_v40.AlertIcon, {
              color: "status-info-primary",
              children: (0, _v1.jsx)(_v58.InfoCircle, {})
            }), (0, _v1.jsx)(_v39.AlertDescription, {
              color: "text-secondary",
              fontSize: (0, _v5.rem)(14),
              children: (0, _v16.translate)({
                singular: "Please note: after {RETENTION_DAYS} days items are permanently deleted and can't be recovered.",
                replacements: {
                  RETENTION_DAYS: 30
                },
                dictionary: {
                  es: {
                    singular: "Tenga en cuenta: después de {RETENTION_DAYS} días, los elementos se eliminan permanentemente y no se pueden recuperar."
                  },
                  "de-DE": {
                    singular: "Bitte beachten Sie: Nach {RETENTION_DAYS} Tagen werden Elemente dauerhaft gelöscht und können nicht wiederhergestellt werden."
                  },
                  "fr-FR": {
                    singular: "Veuillez noter2F: au bout de {RETENTION_DAYS} jours, les éléments sont supprimés définitivement et ne peuvent pas être récupérés."
                  },
                  "ja-JP": {
                    singular: "ご注意：{RETENTION_DAYS}日を過ぎるとアイテムは完全に削除され、復元できなくなります。"
                  },
                  "ko-KR": {
                    singular: "참고: {RETENTION_DAYS}일 후에는 항목이 영구 삭제되어 복구할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Por favor, note: após {RETENTION_DAYS} dias os itens são excluídos permanentemente e não podem ser recuperados."
                  },
                  "zh-CN": {
                    singular: "请注意：在 {RETENTION_DAYS} 天后，项目将被永久删除且无法恢复。"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v55.Stack, {
          gap: (0, _v5.rem)(8),
          px: (0, _v5.rem)(24),
          py: (0, _v5.rem)(16),
          children: [(0, _v1.jsx)(_v48.Button, {
            variant: "primary",
            size: "md",
            width: "100%",
            onClick: () => _v2("got_it"),
            children: (0, _v16.translate)({
              singular: "Got it",
              dictionary: {
                es: {
                  singular: "Entendido"
                },
                "de-DE": {
                  singular: "Alles klar"
                },
                "fr-FR": {
                  singular: "J'ai compris"
                },
                "ja-JP": {
                  singular: "了解"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "pt-BR": {
                  singular: "Entendi"
                },
                "zh-CN": {
                  singular: "明白"
                }
              }
            })
          }), (0, _v1.jsx)(_v48.Button, {
            variant: "tertiary",
            size: "md",
            width: "100%",
            onClick: () => {
              window.open("/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/48519439830289-Recently-deleted-how-to-recover-your-videos", "_blank", "noopener,noreferrer"), _v2("learn_more");
            },
            children: (0, _v16.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  function _v65({
    isOpen: _v0,
    onClose: _v1,
    onConfirm: _v2,
    numItemsToDelete: _v3,
    title: _v4,
    headerText: _v5,
    bodyText: _v6,
    storageSize: _v7
  }) {
    let [_v8, _v9] = (0, _v10.useState)(!1),
      _v10 = async () => {
        _v9(!0);
        try {
          await _v2();
        } finally {
          _v9(!1);
        }
      },
      _v11 = _v4 && 1 === _v3 ? _v7 ? (0, _v16.translate)({
        singular: "{TITLE} will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
        replacements: {
          TITLE: _v4,
          STORAGE: _v7
        },
        dictionary: {
          es: {
            singular: "{TITLE} se eliminará permanentemente. Esto liberará {STORAGE} de espacio de almacenamiento. Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "{TITLE} wird dauerhaft gelöscht. Dadurch werden {STORAGE} Speicherplatz frei. Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "{TITLE} sera supprimé définitivement. Cela libérera {STORAGE} d'espace de stockage. Cette action est irréversible."
          },
          "ja-JP": {
            singular: "{TITLE}は完全に削除されます。これにより{STORAGE}の容量が空きます。この操作は取り消せません。"
          },
          "ko-KR": {
            singular: "{TITLE}이(가) 영구적으로 삭제됩니다. 이로써 {STORAGE}의 저장 공간이 확보됩니다. 이 작업은 되돌릴 수 없습니다."
          },
          "pt-BR": {
            singular: "{TITLE} será excluído permanentemente. Isso liberará {STORAGE} de armazenamento. Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "{TITLE} 将被永久删除。这将释放 {STORAGE} 的存储空间。此操作无法撤销。"
          }
        }
      }) : (0, _v16.translate)({
        singular: "{TITLE} will be deleted forever. This action can't be undone.",
        replacements: {
          TITLE: _v4
        },
        dictionary: {
          es: {
            singular: "{TITLE} se eliminará definitivamente. Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "{TITLE} wird endgültig gelöscht. Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "{TITLE} sera supprimé définitivement. Cette action est irréversible."
          },
          "ja-JP": {
            singular: "{TITLE} は完全に削除されます。この操作は元に戻せません。"
          },
          "ko-KR": {
            singular: "{TITLE}이(가) 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
          },
          "pt-BR": {
            singular: "{TITLE} será excluído permanentemente. Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "{TITLE} 将被永久删除。此操作不可撤销。"
          }
        }
      }) : _v7 ? (0, _v16.translate)({
        singular: "This video will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
        plural: "{COUNT} videos will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
        count: _v3,
        replacements: {
          COUNT: _v3,
          STORAGE: _v7
        },
        dictionary: {
          es: {
            singular: "Este vídeo se eliminará permanentemente. Esto liberará {STORAGE} de espacio de almacenamiento. Esta acción no se puede deshacer.",
            plural: "{COUNT} vídeos se eliminarán permanentemente. Esto liberará {STORAGE} de espacio de almacenamiento. Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "Dieses Video wird dauerhaft gelöscht. Dadurch werden {STORAGE} Speicherplatz frei. Diese Aktion kann nicht rückgängig gemacht werden.",
            plural: "{COUNT} Videos werden dauerhaft gelöscht. Dadurch werden {STORAGE} Speicherplatz frei. Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "Cette vidéo sera supprimée définitivement. Cela libérera {STORAGE} d'espace de stockage. Cette action est irréversible.",
            plural: "{COUNT} vidéos seront supprimées définitivement. Cela libérera {STORAGE} d'espace de stockage. Cette action est irréversible."
          },
          "ja-JP": {
            singular: "この動画は完全に削除されます。これにより{STORAGE}の容量が空きます。この操作は取り消せません。",
            plural: "{COUNT}本の動画が完全に削除されます。これにより{STORAGE}の容量が空きます。この操作は取り消せません。"
          },
          "ko-KR": {
            singular: "이 동영상은 영구적으로 삭제됩니다. 이로써 {STORAGE}의 저장 공간이 확보됩니다. 이 작업은 되돌릴 수 없습니다.",
            plural: "{COUNT}개의 동영상이 영구적으로 삭제됩니다. 이로써 {STORAGE}의 저장 공간이 확보됩니다. 이 작업은 되돌릴 수 없습니다."
          },
          "pt-BR": {
            singular: "Este vídeo será excluído permanentemente. Isso liberará {STORAGE} de armazenamento. Esta ação não pode ser desfeita.",
            plural: "{COUNT} vídeos serão excluídos permanentemente. Isso liberará {STORAGE} de armazenamento. Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "该视频将被永久删除。这将释放 {STORAGE} 的存储空间。此操作无法撤销。",
            plural: "{COUNT} 个视频将被永久删除。这将释放 {STORAGE} 的存储空间。此操作无法撤销。"
          }
        }
      }) : (0, _v16.translate)({
        singular: "This video will be deleted forever. This action can't be undone.",
        plural: "{COUNT} videos will be deleted forever. This action can't be undone.",
        count: _v3,
        replacements: {
          COUNT: _v3
        },
        dictionary: {
          es: {
            singular: "Este video se eliminará definitivamente. Esta acción no se puede deshacer.",
            plural: "{COUNT} videos se eliminarán definitivamente. Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "Dieses Video wird endgültig gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.",
            plural: "{COUNT} Videos werden endgültig gelöscht. Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "Cette vidéo sera supprimée définitivement. Cette action est irréversible.",
            plural: "{COUNT} vidéos seront supprimées définitivement. Cette action est irréversible."
          },
          "ja-JP": {
            singular: "この動画は完全に削除されます。この操作は元に戻せません。",
            plural: "{COUNT} 本の動画が完全に削除されます。この操作は元に戻せません。"
          },
          "ko-KR": {
            singular: "이 동영상은 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.",
            plural: "{COUNT}개의 동영상이 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
          },
          "pt-BR": {
            singular: "Este vídeo será excluído permanentemente. Esta ação não pode ser desfeita.",
            plural: "{COUNT} vídeos serão excluídos permanentemente. Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "该视频将被永久删除。此操作不可撤销。",
            plural: "{COUNT} 个视频将被永久删除。此操作不可撤销。"
          }
        }
      });
    return (0, _v1.jsxs)(_v51.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v54.ModalOverlay, {}), (0, _v1.jsxs)(_v53.ModalContent, {
        borderRadius: "xl",
        children: [(0, _v1.jsx)(_v52.ModalCloseButton, {}), (0, _v1.jsx)(_v64.ModalHeader, {
          px: "lg",
          pt: "lg",
          pb: "sm",
          fontSize: "heading-md",
          letterSpacing: "-0.03em",
          color: "text-primary",
          children: _v5 ?? (0, _v16.translate)({
            singular: "Permanently delete?",
            dictionary: {
              es: {
                singular: "¿Eliminar definitivamente?"
              },
              "de-DE": {
                singular: "Endgültig löschen?"
              },
              "fr-FR": {
                singular: "Supprimer définitivement ?"
              },
              "ja-JP": {
                singular: "完全に削除しますか？"
              },
              "ko-KR": {
                singular: "영구적으로 삭제하시겠습니까?"
              },
              "pt-BR": {
                singular: "Excluir permanentemente?"
              },
              "zh-CN": {
                singular: "永久删除？"
              }
            }
          })
        }), (0, _v1.jsx)(_v62.ModalBody, {
          px: "lg",
          py: "sm",
          fontSize: "body-md",
          letterSpacing: "-0.03em",
          color: "text-primary",
          children: _v6 ?? _v11
        }), (0, _v1.jsxs)(_v63.ModalFooter, {
          border: "0",
          px: "lg",
          pt: "sm",
          pb: "lg",
          children: [(0, _v1.jsx)(_v48.Button, {
            onClick: _v1,
            variant: "tertiary",
            borderRadius: "md",
            children: (0, _v16.translate)({
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
          }), (0, _v1.jsx)(_v48.Button, {
            onClick: _v10,
            variant: "destructive",
            borderRadius: "md",
            isDisabled: _v8,
            isLoading: _v8,
            children: (0, _v16.translate)({
              singular: "Delete forever",
              dictionary: {
                es: {
                  singular: "Eliminar definitivamente"
                },
                "de-DE": {
                  singular: "Endgültig löschen"
                },
                "fr-FR": {
                  singular: "Supprimer définitivement"
                },
                "ja-JP": {
                  singular: "完全に削除"
                },
                "ko-KR": {
                  singular: "영구 삭제"
                },
                "pt-BR": {
                  singular: "Excluir permanentemente"
                },
                "zh-CN": {
                  singular: "永久删除"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  function _v70({
    onDelete: _v0,
    onRestore: _v1,
    isRestoreDisabled: _v2
  }) {
    let [_v3, _v4] = (0, _v10.useState)(!1),
      _v5 = async () => {
        if (_v1 && !_v3) {
          _v4(!0);
          try {
            await _v1();
          } finally {
            _v4(!1);
          }
        }
      };
    return (0, _v1.jsxs)(_v11.Flex, {
      gap: (0, _v5.rem)(4),
      opacity: 0,
      _groupHover: {
        opacity: 1
      },
      transition: "opacity 0.2s ease",
      children: [(0, _v1.jsx)(_v32.Tooltip, {
        label: _v2 ? (0, _v16.translate)({
          singular: "Your storage is full. Permanently delete files to free up space.",
          dictionary: {
            es: {
              singular: "Tu almacenamiento está lleno. Elimina archivos de forma permanente para liberar espacio."
            },
            "de-DE": {
              singular: "Ihr Speicher ist voll. Löschen Sie Dateien endgültig, um Speicherplatz freizugeben."
            },
            "fr-FR": {
              singular: "Votre espace de stockage est plein. Supprimez définitivement des fichiers pour libérer de l'espace."
            },
            "ja-JP": {
              singular: "ストレージがいっぱいです. 空き容量を確保するにはファイルを完全に削除してください."
            },
            "ko-KR": {
              singular: "저장 공간이 가득 찼습니다. 공간을 확보하려면 파일을 영구 삭제하세요."
            },
            "pt-BR": {
              singular: "Seu armazenamento está cheio. Exclua arquivos permanentemente para liberar espaço."
            },
            "zh-CN": {
              singular: "您的存储已满。永久删除文件以释放空间。"
            }
          }
        }) : (0, _v16.translate)({
          singular: "Restore file",
          dictionary: {
            es: {
              singular: "Restaurar archivo"
            },
            "de-DE": {
              singular: "Datei wiederherstellen"
            },
            "fr-FR": {
              singular: "Restaurer le fichier"
            },
            "ja-JP": {
              singular: "ファイルを復元"
            },
            "ko-KR": {
              singular: "파일 복원"
            },
            "pt-BR": {
              singular: "Restaurar arquivo"
            },
            "zh-CN": {
              singular: "恢复文件"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v31.IconButton, {
          "aria-label": (0, _v16.translate)({
            singular: "Restore file",
            dictionary: {
              es: {
                singular: "Restaurar archivo"
              },
              "de-DE": {
                singular: "Datei wiederherstellen"
              },
              "fr-FR": {
                singular: "Restaurer le fichier"
              },
              "ja-JP": {
                singular: "ファイルを復元"
              },
              "ko-KR": {
                singular: "파일 복원"
              },
              "pt-BR": {
                singular: "Restaurar arquivo"
              },
              "zh-CN": {
                singular: "恢复文件"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v35, {}),
          variant: "minimal",
          size: "sm",
          isDisabled: _v3 || !!_v2,
          isLoading: _v3,
          onClick: _v5
        })
      }), (0, _v1.jsx)(_v32.Tooltip, {
        label: (0, _v16.translate)({
          singular: "Delete forever",
          dictionary: {
            es: {
              singular: "Eliminar definitivamente"
            },
            "de-DE": {
              singular: "Endgültig löschen"
            },
            "fr-FR": {
              singular: "Supprimer définitivement"
            },
            "ja-JP": {
              singular: "完全に削除"
            },
            "ko-KR": {
              singular: "영구 삭제"
            },
            "pt-BR": {
              singular: "Excluir permanentemente"
            },
            "zh-CN": {
              singular: "永久删除"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v31.IconButton, {
          "aria-label": (0, _v16.translate)({
            singular: "Delete forever",
            dictionary: {
              es: {
                singular: "Eliminar definitivamente"
              },
              "de-DE": {
                singular: "Endgültig löschen"
              },
              "fr-FR": {
                singular: "Supprimer définitivement"
              },
              "ja-JP": {
                singular: "完全に削除"
              },
              "ko-KR": {
                singular: "영구 삭제"
              },
              "pt-BR": {
                singular: "Excluir permanentemente"
              },
              "zh-CN": {
                singular: "永久删除"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v14, {}),
          variant: "minimal",
          size: "sm",
          isDisabled: _v3,
          onClick: _v0
        })
      })]
    });
  }
  let _v71 = `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 6fr ${(0, _v5.rem)(105)} ${(0, _v5.rem)(160)} ${(0, _v5.rem)(105)} ${(0, _v5.rem)(80)}`;
  function _v72({
    videos: _v0,
    viewerUserId: _v1,
    selectedUris: _v2,
    onToggleSelected: _v3,
    onRestoreVideo: _v4,
    onDeleteVideo: _v5,
    isRestoreDisabled: _v6
  }) {
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0.map(_v0 => {
        let _v1,
          _v2 = _v0.filesSize && _v0.filesSize.totalSize > 0 ? (0, _v19.bytesToSize)(_v0.filesSize.totalSize) : "—",
          _v3 = _v0.deletedBy?.uri ? (0, _v28.idFromUri)(_v0.deletedBy.uri) : null,
          _v4 = _v0.modifiedTime ? (_v1 = Math.min(Math.ceil((new Date(_v0.modifiedTime).getTime() + 0 - Date.now()) / 0), 30)) <= 0 ? (0, _v16.translate)({
            singular: "< 1 day",
            dictionary: {
              es: {
                singular: "< 1 día"
              },
              "de-DE": {
                singular: "< 1 Tag"
              },
              "fr-FR": {
                singular: "< 1 jour"
              },
              "ja-JP": {
                singular: "< 1日"
              },
              "ko-KR": {
                singular: "< 1일"
              },
              "pt-BR": {
                singular: "< 1 dia"
              },
              "zh-CN": {
                singular: "< 1 天"
              }
            }
          }) : (0, _v16.translate)({
            singular: "{daysRemaining} day",
            plural: "{daysRemaining} days",
            replacements: {
              daysRemaining: _v1
            },
            count: _v1,
            dictionary: {
              es: {
                singular: "{daysRemaining} día",
                plural: "{daysRemaining} días"
              },
              "de-DE": {
                singular: "{daysRemaining} Tag",
                plural: "{daysRemaining} Tage"
              },
              "fr-FR": {
                singular: "{daysRemaining} jour",
                plural: "{daysRemaining} jours"
              },
              "ja-JP": {
                singular: "{daysRemaining}日",
                plural: "{daysRemaining}日"
              },
              "ko-KR": {
                singular: "{daysRemaining}일",
                plural: "{daysRemaining}일"
              },
              "pt-BR": {
                singular: "{daysRemaining} dia",
                plural: "{daysRemaining} dias"
              },
              "zh-CN": {
                singular: "{daysRemaining} 天",
                plural: "{daysRemaining} 天"
              }
            }
          }) : "—";
        return (0, _v1.jsxs)(_v67.ContentRow, {
          listGridColumns: _v71,
          isSelected: !!_v0.uri && _v2.has(_v0.uri),
          onToggleSelected: _v0.uri ? () => _v3(_v0.uri) : void 0,
          children: [(0, _v1.jsx)(_v67.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v67.ContentRow.SelectCheckbox, {
              size: "md"
            })
          }), (0, _v1.jsx)(_v67.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v68.VideoThumbnail, {
              alt: _v0.name ?? "",
              badgeText: (0, _v69.secondsToDisplay)(_v0.duration),
              isDefaultPicture: _v0.pictures?.defaultPicture,
              thumbnailSrc: _v0.pictures?.sizes[3]?.link
            })
          }), (0, _v1.jsx)(_v67.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              paddingLeft: (0, _v5.rem)(8),
              children: _v0.name
            })
          }), (0, _v1.jsx)(_v67.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v2
            })
          }), (0, _v1.jsx)(_v67.ContentRow.Column, {
            overflow: "hidden",
            children: _v3 && _v3 === _v1 ? (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v16.translate)({
                singular: "You",
                dictionary: {
                  es: {
                    singular: "Tú"
                  },
                  "de-DE": {
                    singular: "Du"
                  },
                  "fr-FR": {
                    singular: "Vous"
                  },
                  "ja-JP": {
                    singular: "あなた"
                  },
                  "ko-KR": {
                    singular: "회원님"
                  },
                  "pt-BR": {
                    singular: "Você"
                  },
                  "zh-CN": {
                    singular: "您"
                  }
                }
              })
            }) : _v0.deletedBy ? (0, _v1.jsxs)(_v11.Flex, {
              alignItems: "center",
              gap: (0, _v5.rem)(8),
              children: [(0, _v1.jsx)(_v66.Avatar, {
                size: "sm",
                alt: (0, _v16.translate)({
                  singular: "Display picture",
                  dictionary: {
                    es: {
                      singular: "Mostrar imagen"
                    },
                    "de-DE": {
                      singular: "Bild anzeigen"
                    },
                    "fr-FR": {
                      singular: "Image à afficher"
                    },
                    "ja-JP": {
                      singular: "画像を表示"
                    },
                    "ko-KR": {
                      singular: "사진 표시"
                    },
                    "pt-BR": {
                      singular: "Exibir imagem"
                    },
                    "zh-CN": {
                      singular: "显示图片"
                    }
                  }
                }),
                src: _v0.deletedBy.pictures?.sizes?.[1]?.link,
                nameProps: {
                  name: _v0.deletedBy.name
                }
              }), (0, _v1.jsx)(_v4.Text, {
                variant: "body-md",
                color: "text-secondary",
                noOfLines: 1,
                children: _v0.deletedBy.name
              })]
            }) : (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: "—"
            })
          }), (0, _v1.jsx)(_v67.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4
            })
          }), (0, _v1.jsx)(_v67.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: (0, _v1.jsx)(_v70, {
              onRestore: () => _v4(_v0.uri),
              onDelete: () => _v5(_v0.uri),
              isRestoreDisabled: _v6
            })
          })]
        }, _v0.uri);
      })
    });
  }
  function _v73({
    videos: _v0,
    selectedUris: _v1,
    onToggleSelected: _v2,
    onRestoreVideo: _v3,
    onDeleteVideo: _v4,
    isRestoreDisabled: _v5
  }) {
    let _v6 = (0, _v29.useViewer)(),
      _v7 = _v6?.user?.id;
    return (0, _v1.jsx)(_v3.Box, {
      children: (0, _v1.jsx)(_v72, {
        videos: _v0,
        viewerUserId: _v7,
        selectedUris: _v1,
        onToggleSelected: _v2,
        onRestoreVideo: _v3,
        onDeleteVideo: _v4,
        isRestoreDisabled: _v5
      })
    });
  }
  function _v74() {
    return (0, _v1.jsxs)(_v67.ContentRow, {
      listGridColumns: _v71,
      cursor: "initial",
      disableHover: !0,
      backgroundColor: "fill-component",
      paddingTop: "0",
      paddingBottom: "0",
      minHeight: "2.5rem",
      display: {
        base: "none",
        sm: "grid"
      },
      children: [(0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v16.translate)({
            singular: "Title",
            dictionary: {
              es: {
                singular: "Título"
              },
              "de-DE": {
                singular: "Titel"
              },
              "fr-FR": {
                singular: "Titre"
              },
              "ja-JP": {
                singular: "タイトル"
              },
              "ko-KR": {
                singular: "제목"
              },
              "pt-BR": {
                singular: "Título"
              },
              "zh-CN": {
                singular: "标题"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v16.translate)({
            singular: "Size",
            dictionary: {
              es: {
                singular: "Tamaño"
              },
              "de-DE": {
                singular: "Größe"
              },
              "fr-FR": {
                singular: "Taille"
              },
              "ja-JP": {
                singular: "サイズ"
              },
              "ko-KR": {
                singular: "크기"
              },
              "pt-BR": {
                singular: "Tamanho"
              },
              "zh-CN": {
                singular: "大小"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v16.translate)({
            singular: "Deleted by",
            dictionary: {
              es: {
                singular: "Eliminado por"
              },
              "de-DE": {
                singular: "Gelöscht von"
              },
              "fr-FR": {
                singular: "Supprimé par"
              },
              "ja-JP": {
                singular: "削除者"
              },
              "ko-KR": {
                singular: "삭제한 사용자"
              },
              "pt-BR": {
                singular: "Excluído por"
              },
              "zh-CN": {
                singular: "删除者"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v16.translate)({
            singular: "Time remaining",
            dictionary: {
              es: {
                singular: "Tiempo restante"
              },
              "de-DE": {
                singular: "Verbleibende Zeit"
              },
              "fr-FR": {
                singular: "Temps restant"
              },
              "ja-JP": {
                singular: "残り時間"
              },
              "ko-KR": {
                singular: "남은 시간"
              },
              "pt-BR": {
                singular: "Tempo restante"
              },
              "zh-CN": {
                singular: "剩余时间"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v67.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    });
  }
  var _v75 = _v0.i(0);
  function _v76({
    total: _v0,
    isTotalCapped: _v1,
    selectedCount: _v2,
    videoCount: _v3,
    isLoading: _v4,
    hasFilters: _v5,
    onSelectAll: _v6,
    onDeselectAll: _v7,
    onTrackAllSelected: _v8
  }) {
    let _v9;
    return _v2 > 0 ? _v9 = (0, _v16.translate)({
      singular: "{NUM_ITEMS} selected",
      replacements: {
        NUM_ITEMS: _v2
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} seleccionado"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} ausgewählt"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} sélectionné"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS}件選択済み"
        },
        "ko-KR": {
          singular: "{NUM_ITEMS}개 선택됨"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} selecionado(s)"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 已选择"
        }
      }
    }) : _v0 > 0 && (_v9 = _v1 ? _v5 ? (0, _v16.translate)({
      count: _v0,
      singular: "At least {NUM_ITEMS} result",
      plural: "At least {NUM_ITEMS} results",
      replacements: {
        NUM_ITEMS: _v0
      },
      dictionary: {
        es: {
          singular: "Al menos {NUM_ITEMS} resultado",
          plural: "Al menos {NUM_ITEMS} resultados"
        },
        "de-DE": {
          singular: "Mindestens {NUM_ITEMS} Ergebnis",
          plural: "Mindestens {NUM_ITEMS} Ergebnisse"
        },
        "fr-FR": {
          singular: "Au moins {NUM_ITEMS} résultat",
          plural: "Au moins {NUM_ITEMS} résultats"
        },
        "ja-JP": {
          singular: "少なくとも{NUM_ITEMS}件の結果",
          plural: "少なくとも{NUM_ITEMS}件の結果"
        },
        "ko-KR": {
          singular: "최소 {NUM_ITEMS}개의 결과",
          plural: "최소 {NUM_ITEMS}개의 결과"
        },
        "pt-BR": {
          singular: "Pelo menos {NUM_ITEMS} resultado",
          plural: "Pelo menos {NUM_ITEMS} resultados"
        },
        "zh-CN": {
          singular: "至少 {NUM_ITEMS} 个结果",
          plural: "至少 {NUM_ITEMS} 个结果"
        }
      }
    }) : (0, _v16.translate)({
      count: _v0,
      singular: "At least {NUM_ITEMS} item",
      plural: "At least {NUM_ITEMS} items",
      replacements: {
        NUM_ITEMS: _v0
      },
      dictionary: {
        es: {
          singular: "Al menos {NUM_ITEMS} elemento",
          plural: "Al menos {NUM_ITEMS} elementos"
        },
        "de-DE": {
          singular: "Mindestens {NUM_ITEMS} Element",
          plural: "Mindestens {NUM_ITEMS} Elemente"
        },
        "fr-FR": {
          singular: "Au moins {NUM_ITEMS} élément",
          plural: "Au moins {NUM_ITEMS} éléments"
        },
        "ja-JP": {
          singular: "少なくとも{NUM_ITEMS}項目",
          plural: "少なくとも{NUM_ITEMS}項目"
        },
        "ko-KR": {
          singular: "최소 {NUM_ITEMS}개의 항목",
          plural: "최소 {NUM_ITEMS}개의 항목"
        },
        "pt-BR": {
          singular: "Pelo menos {NUM_ITEMS} item",
          plural: "Pelo menos {NUM_ITEMS} itens"
        },
        "zh-CN": {
          singular: "至少 {NUM_ITEMS} 项",
          plural: "至少 {NUM_ITEMS} 项"
        }
      }
    }) : _v5 ? (0, _v16.translate)({
      count: _v0,
      singular: "{NUM_ITEMS} result",
      plural: "{NUM_ITEMS} results",
      replacements: {
        NUM_ITEMS: _v0
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} resultado",
          plural: "{NUM_ITEMS} resultados"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Ergebnis",
          plural: "{NUM_ITEMS} Ergebnisse"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} résultat",
          plural: "{NUM_ITEMS} résultats"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS}件の検索結果",
          plural: "{NUM_ITEMS} 件の結果"
        },
        "ko-KR": {
          singular: "검색 결과 {NUM_ITEMS}건",
          plural: "결과 {NUM_ITEMS}개"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} resultado",
          plural: "{NUM_ITEMS} resultados"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 个结果",
          plural: "{NUM_ITEMS} 个结果"
        }
      }
    }) : (0, _v16.translate)({
      count: _v0,
      singular: "{NUM_ITEMS} item",
      plural: "{NUM_ITEMS} items",
      replacements: {
        NUM_ITEMS: _v0
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} elemento",
          plural: "{NUM_ITEMS} elementos"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Element",
          plural: "{NUM_ITEMS} Elemente"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} élément",
          plural: "{NUM_ITEMS} éléments"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS} 件のアイテム",
          plural: "{NUM_ITEMS} 件のアイテム"
        },
        "ko-KR": {
          singular: "{NUM_ITEMS}개 항목",
          plural: "{NUM_ITEMS}개 항목"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} iten",
          plural: "{NUM_ITEMS} itens"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 项",
          plural: "{NUM_ITEMS} 项"
        }
      }
    })), (0, _v1.jsx)(_v75.CheckboxItemCount, {
      hasCheckbox: _v0 > 0,
      isChecked: !!_v2,
      isIndeterminate: !!_v2 && _v2 < _v3,
      isLoading: _v4,
      onChange: () => {
        _v2 ? (_v8(!1), _v7()) : (_v8(!0), _v6());
      },
      selectedItemCount: _v2,
      subtitle: _v9
    });
  }
  var _v77 = _v0.i(0);
  function _v78({
    source: _v0,
    onClose: _v1
  }) {
    return (0, _v1.jsx)(_v77.UpsellModal, {
      userConfig: {},
      onClose: _v1,
      templateType: "default",
      modalConfig: {
        headerText: (0, _v16.translate)({
          singular: "Upgrade to unlock more storage",
          dictionary: {
            es: {
              singular: "Actualice su plan para desbloquear más almacenamiento"
            },
            "de-DE": {
              singular: "Upgrade durchführen, um mehr Speicherplatz freizuschalten"
            },
            "fr-FR": {
              singular: "Mettez votre abonnement à niveau pour obtenir plus d'espace de stockage"
            },
            "ja-JP": {
              singular: "アップグレードしてストレージを増量"
            },
            "ko-KR": {
              singular: "업그레이드하고 더 많은 저장 공간을 확보하세요."
            },
            "pt-BR": {
              singular: "Faça upgrade para ter acesso a mais armazenamento"
            },
            "zh-CN": {
              singular: "升级以解锁更多存储空间"
            }
          }
        }),
        subHeaderText: (0, _v16.translate)({
          singular: "Upgrade for full access to creation tools and more storage for your videos.",
          dictionary: {
            es: {
              singular: "Cambie de plan para tener acceso completo a las herramientas de creación y más espacio de almacenamiento para sus videos."
            },
            "de-DE": {
              singular: "Mit einem Upgrade erhältst du vollen Zugriff auf die Erstellungstools und mehr Speicherplatz für deine Videos."
            },
            "fr-FR": {
              singular: "Passez au niveau supérieur pour obtenir le plein accès aux outils de création et à plus de stockage pour vos vidéos."
            },
            "ja-JP": {
              singular: "アップグレードして動画用の作成ツールとより大きなストレージ容量をフル活用しましょう。"
            },
            "ko-KR": {
              singular: "업그레이드하여 전체 제작 도구와 동영상을 위한 더 많은 저장 공간을 이용하세요."
            },
            "pt-BR": {
              singular: "Faça upgrade para ter acesso completo às ferramentas de criação e mais espaço de armazenamento para seus vídeos."
            }
          }
        }),
        mkcCode: "108511"
      },
      tracking: {
        params: {
          page: "recently_deleted",
          feature: "quota",
          location: _v0,
          upsell_name: "at_limit_quota_restore"
        },
        paywallTracking: {
          paywallTrigger: "recently_deleted_quota_limit_button",
          paywallLocation: "recently_deleted",
          paywallType: "popup",
          paywallFeature: "quota"
        }
      }
    });
  }
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = ["video.createdTime", "video.deletedBy", "video.deletedBy.name", "video.deletedBy.pictures", "video.deletedBy.uri", "video.duration", "video.filesSize", "video.filesSize.fileSizeType", "video.filesSize.totalSize", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.sizes", "video.pictures.uri", "video.uri"];
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  async function _v90({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v88.measureLatency)("postVideosPermanentDeletion", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/permanent-deletion`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v89.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v89.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v89.deepCamelCase)(_v1);
    });
  }
  var _v91 = _v0.i(0);
  async function _v92({
    baseUrl: _v0,
    ..._v1
  }) {
    return (0, _v88.measureLatency)("postVideosPermanentDeletionAll", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/permanent-deletion/all`, {
        ..._v1,
        method: "POST"
      });
      if (!_v0.ok) throw new _v89.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v89.deepCamelCase)(_v1);
    });
  }
  var _v93 = _v0.i(0);
  function _v94() {
    let _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8 = (0, _v29.useViewer)(),
      _v9 = _v8?.teamUser?.ownerId ?? _v8?.user?.id,
      {
        data: _v10,
        mutate: _v11
      } = (0, _v15.useGetUser)(() => _v9 ? {
        where: {
          userId: _v9
        },
        select: ["uploadQuota.recentlyDeletedDiskSpace", "uploadQuota.space.free", "uploadQuota.space.unit"]
      } : null),
      [_v12, _v13] = (0, _v10.useState)("row_hover"),
      [_v14, _v15] = (0, _v10.useState)(!1),
      [_v16, _v17] = (0, _v10.useState)("row_hover"),
      [_v18, _v19] = (0, _v10.useState)(_v23.DEFAULT_RECENTLY_DELETED_SORT),
      [_v20, _v21] = (0, _v10.useState)([]),
      [_v22, _v23] = (0, _v10.useState)(""),
      {
        videos: _v24,
        total: _v25,
        isLoading: _v26,
        isLoadingMore: _v27,
        isDone: _v28,
        loadMore: _v29,
        mutate: _v30
      } = function (_v0, _v1 = []) {
        let _v2 = (0, _v29.useViewer)(),
          _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
          _v4 = !_v2?.teamUser || _v2.teamUser.permissionLevel <= 2,
          _v5 = _v1.length > 0 ? _v1.map(_v0 => _v0.userId).join(",") : void 0,
          {
            data: _v6,
            mutate: _v7,
            setSize: _v8,
            size: _v9
          } = (0, _v79.useGetUserFoldersRootInfinite)(() => _v3 ? {
            where: {
              userId: _v3
            },
            select: _v81,
            query: {
              filter: "video",
              includeOnlyDeletedClips: !0,
              perPage: 25,
              sort: _v0.type,
              direction: _v0.direction,
              clipDeletedByFilters: _v5,
              clipCreatedByFilters: _v4 ? void 0 : _v2?.teamUser?.userId?.toString()
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4"
            }
          } : null),
          _v10 = (0, _v10.useMemo)(() => _v6?.flatMap(_v0 => _v0?.data ?? []).flatMap(_v0 => _v0.video ? [_v0.video] : []) ?? [], [_v6]),
          {
            isDone: _v11,
            isLoadingInitialData: _v12,
            isLoadingMore: _v13
          } = (0, _v80.getInfiniteRequestLoadingState)({
            data: _v6,
            itemsPerPage: 25,
            size: _v9
          });
        return {
          videos: _v10,
          total: _v6?.[0]?.total ?? 0,
          isLoading: _v12,
          isLoadingMore: _v13,
          isDone: _v11,
          loadMore: () => _v8(_v9 + 1),
          mutate: _v7
        };
      }(_v18, _v20),
      _v31 = (_v8?.teamUser?.ownerIsSuperUser ?? _v8?.user?.isSuperUser ?? !1) && _v25 >= 0,
      {
        users: _v32,
        isLoadingMore: _v33,
        isLoadingInitialData: _v34,
        isDone: _v35,
        setSize: _v36,
        size: _v37
      } = (0, _v27.useUserTeamMembers)(_v22),
      [_v38, _v39] = (0, _v10.useState)(new Set()),
      _v40 = (0, _v10.useCallback)(() => _v39(new Set()), []),
      _v41 = (0, _v10.useCallback)(() => _v39(new Set(_v24.map(_v0 => _v0.uri).filter(_v0 => !!_v0))), [_v24]),
      {
        trackPageDisplayed: _v42,
        trackPermaDelete: _v43,
        trackRestoreAsk: _v44,
        trackItemSelected: _v45,
        trackSortChanged: _v46,
        trackFilterChanged: _v47,
        trackEmptyTrash: _v48,
        trackAllSelected: _v49,
        trackIntroModalDismissed: _v50
      } = (_v0 = (0, _v18.usePico)(), _v1 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_page_displayed", {
          item_count: _v0
        });
      }, [_v0]), _v2 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_empty_trash_click", {
          item_count_in_action: _v0 ?? null
        });
      }, [_v0]), _v3 = (0, _v10.useCallback)((_v0, _v1, _v2, _v3) => {
        null !== _v0 && (void 0 !== _v3 ? _v3.forEach(_v0 => {
          _v0.track("recently_deleted_permanent_delete_modal_open", {
            action: _v0,
            source: _v1,
            item_count_in_action: _v2,
            video_id: _v0
          });
        }) : _v0.track("recently_deleted_permanent_delete_modal_open", {
          action: _v0,
          source: _v1,
          item_count_in_action: _v2
        }));
      }, [_v0]), _v4 = (0, _v10.useCallback)((_v0, _v1, _v2, _v3) => {
        null !== _v0 && (void 0 !== _v3 ? _v3.forEach(_v0 => {
          _v0.track("recently_deleted_restore_click", {
            source: _v0,
            recently_deleted_restore_destination: _v1,
            item_count_in_action: _v2,
            video_id: _v0
          });
        }) : _v0.track("recently_deleted_restore_click", {
          source: _v0,
          recently_deleted_restore_destination: _v1,
          item_count_in_action: _v2
        }));
      }, [_v0]), _v5 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_page_sort_by_click", {
          sort_by: _v0
        });
      }, [_v0]), _v6 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_filter_changed", {
          active_filter_count: _v0
        });
      }, [_v0]), _v7 = (0, _v10.useCallback)((_v0, _v1, _v2) => {
        null !== _v0 && _v0.track("recently_deleted_item_toggle", {
          total_selected: _v0,
          is_selected: _v1,
          video_id: _v2
        });
      }, [_v0]), {
        trackPageDisplayed: _v1,
        trackEmptyTrash: _v2,
        trackPermaDelete: _v3,
        trackRestoreAsk: _v4,
        trackSortChanged: _v5,
        trackFilterChanged: _v6,
        trackItemSelected: _v7,
        trackAllSelected: (0, _v10.useCallback)(_v0 => {
          null !== _v0 && _v0.track("recently_deleted_all_selected_toggle", {
            is_selected: _v0
          });
        }, [_v0]),
        trackIntroModalDismissed: (0, _v10.useCallback)(_v0 => {
          null !== _v0 && _v0.track("recently_deleted_intro_modal_dismissed", {
            dismiss_method: _v0
          });
        }, [_v0])
      }),
      {
        isOpen: _v51,
        acknowledge: _v52
      } = function () {
        let {
            data: _v0,
            mutate: _v1
          } = (0, _v82.useGetMePreferences)({
            select: ["rdtim"]
          }),
          [_v2] = (0, _v82.usePatchMePreferences)(),
          [_v3, _v4] = (0, _v10.useState)(!1),
          _v5 = (0, _v10.useRef)(!1),
          _v6 = void 0 !== _v0,
          _v7 = !!_v0?.rdtim;
        (0, _v10.useEffect)(() => {
          !_v6 || _v7 || _v5.current || _v4(!0);
        }, [_v6, _v7]);
        let _v8 = (0, _v10.useRef)(null);
        (0, _v10.useEffect)(() => {
          _v8.current = () => {
            _v7 || _v5.current || (_v5.current = !0, _v2({
              select: ["rdtim"],
              variables: {
                rdtim: 1
              }
            }).then(() => _v1()));
          };
        });
        let _v9 = (0, _v10.useCallback)(() => {
            _v4(!1), _v8.current?.();
          }, []),
          _v10 = (0, _v10.useRef)(_v3);
        return (0, _v10.useEffect)(() => {
          _v10.current = _v3;
        }, [_v3]), (0, _v10.useEffect)(() => () => {
          _v10.current && _v8.current?.();
        }, []), {
          isOpen: _v3,
          acknowledge: _v9
        };
      }(),
      _v53 = (0, _v10.useCallback)(_v0 => {
        _v52(), _v50(_v0);
      }, [_v52, _v50]);
    (0, _v17.usePicoEffect)(() => {
      _v26 || _v42(_v25);
    }, [_v26]);
    let _v54 = (0, _v10.useCallback)(_v0 => {
        let _v1 = !_v38.has(_v0);
        _v45(_v1 ? _v38.size + 1 : _v38.size - 1, _v1, (0, _v28.idFromUri)(_v0)), _v39(_v0 => {
          let _v1 = new Set(_v0);
          return _v1.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v1;
        });
      }, [_v38, _v45]),
      {
        handleRestore: _v55,
        handleDeletePermanently: _v56,
        handleEmptyTrashConfirm: _v57,
        handleEmptyTrashClick: _v58,
        handleSetSort: _v59,
        handleSetFilteredTeamUsers: _v60,
        pendingDeleteUris: _v61,
        setPendingDeleteUris: _v62,
        isEmptyTrashModalOpen: _v63,
        setIsEmptyTrashModalOpen: _v64
      } = function ({
        videos: _v0,
        mutate: _v1,
        mutateUser: _v2,
        total: _v3,
        deselectAllItems: _v4,
        setSort: _v5,
        setFilteredTeamUsers: _v6,
        trackSortChanged: _v7,
        trackFilterChanged: _v8,
        trackEmptyTrash: _v9,
        trackPermaDeleteAsk: _v10,
        trackRestoreAsk: _v11
      }) {
        let _v12 = (0, _v87.useNotification)(),
          _v13 = (0, _v84.useToast)(),
          _v14 = function () {
            let {
              baseUrl: _v0,
              jwt: _v1,
              xVimeoPage: _v2,
              locale: _v3
            } = (0, _v91.useGctlConfig)();
            return async _v0 => {
              let _v1 = {
                  baseUrl: _v0,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v1 ? `jwt ${_v1}` : "",
                    "Vimeo-Page": `${_v2}`,
                    "Accept-Language": _v3 ?? "en"
                  }
                },
                _v2 = [];
              for (let _v0 = 0; _v0 < _v0.length; _v0 += 25) {
                let _v0 = await (0, _v93.postVideosRestore)({
                  variables: {
                    uris: _v0.slice(_v0, _v0 + 25)
                  },
                  ..._v1
                });
                _v2.push(..._v0.data);
              }
              return _v2;
            };
          }(),
          _v15 = function () {
            let {
              baseUrl: _v0,
              jwt: _v1,
              xVimeoPage: _v2,
              locale: _v3
            } = (0, _v91.useGctlConfig)();
            return async _v0 => {
              let _v1 = {
                  baseUrl: _v0,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v1 ? `jwt ${_v1}` : "",
                    "Vimeo-Page": `${_v2}`,
                    "Accept-Language": _v3 ?? "en"
                  }
                },
                _v2 = [];
              for (let _v0 = 0; _v0 < _v0.length; _v0 += 25) {
                let _v0 = await _v90({
                  variables: {
                    uris: _v0.slice(_v0, _v0 + 25)
                  },
                  ..._v1
                });
                _v2.push(..._v0.data);
              }
              return _v2;
            };
          }(),
          _v16 = function () {
            let {
              baseUrl: _v0,
              jwt: _v1,
              xVimeoPage: _v2,
              locale: _v3
            } = (0, _v91.useGctlConfig)();
            return async () => {
              await _v92({
                baseUrl: _v0,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v1 ? `jwt ${_v1}` : "",
                  "Vimeo-Page": `${_v2}`,
                  "Accept-Language": _v3 ?? "en"
                }
              });
            };
          }(),
          [_v17, _v18] = (0, _v10.useState)([]),
          [_v19, _v20] = (0, _v10.useState)(!1),
          _v21 = (0, _v10.useRef)(void 0),
          _v22 = (0, _v10.useCallback)(_v0 => {
            _v7(`${_v0.type}_${_v0.direction}`), _v5(_v0);
          }, [_v7, _v5]);
        return {
          handleRestore: async (_v0, _v1) => {
            let _v2;
            try {
              _v2 = await _v14(_v0);
            } catch {
              _v12({
                content: (0, _v16.translate)({
                  singular: "Error restoring files",
                  dictionary: {
                    es: {
                      singular: "Error al restaurar archivos"
                    },
                    "de-DE": {
                      singular: "Fehler beim Wiederherstellen von Dateien"
                    },
                    "fr-FR": {
                      singular: "Erreur lors de la restauration des fichiers"
                    },
                    "ja-JP": {
                      singular: "ファイルの復元中にエラーが発生しました"
                    },
                    "ko-KR": {
                      singular: "파일 복원 오류"
                    },
                    "pt-BR": {
                      singular: "Erro ao restaurar arquivos"
                    },
                    "zh-CN": {
                      singular: "恢复文件时出错"
                    }
                  }
                }),
                status: "error"
              });
              return;
            }
            let _v3 = _v2.filter(_v0 => "restored" === _v0.status);
            _v3.forEach(_v0 => {
              _v11(_v1, _v0.restoreDestination ?? "root_originally_root", _v0.length, [(0, _v28.idFromUri)(_v0.uri)]);
            });
            let _v4 = _v2.filter(_v0 => "not_found" === _v0.status || "error" === _v0.status).length;
            if (_v4 > 0) _v12({
              content: (0, _v16.translate)({
                singular: "Error restoring 1 file",
                plural: "Error restoring {COUNT} files",
                count: _v4,
                replacements: {
                  COUNT: _v4
                },
                dictionary: {
                  es: {
                    singular: "Error al restaurar 1 archivo",
                    plural: "Error al restaurar {COUNT} archivos"
                  },
                  "de-DE": {
                    singular: "Fehler beim Wiederherstellen von 1 Datei",
                    plural: "Fehler beim Wiederherstellen von {COUNT} Dateien"
                  },
                  "fr-FR": {
                    singular: "Erreur lors de la restauration de 1 fichier",
                    plural: "Erreur lors de la restauration de {COUNT} fichiers"
                  },
                  "ja-JP": {
                    singular: "1 件のファイルの復元中にエラーが発生しました",
                    plural: "{COUNT} 件のファイルの復元中にエラーが発生しました"
                  },
                  "ko-KR": {
                    singular: "1개 파일 복원 오류",
                    plural: "{COUNT}개 파일 복원 오류"
                  },
                  "pt-BR": {
                    singular: "Erro ao restaurar 1 arquivo",
                    plural: "Erro ao restaurar {COUNT} arquivos"
                  },
                  "zh-CN": {
                    singular: "恢复 1 个文件时出错",
                    plural: "恢复 {COUNT} 个文件时出错"
                  }
                }
              }),
              status: "error"
            });else if (1 === _v3.length) {
              let _v0 = _v0.find(_v0 => _v0.uri === _v3[0].uri)?.name,
                _v1 = _v3[0].folderUri,
                _v2 = _v0 ? (0, _v16.translate)({
                  singular: '"{TITLE}" restored',
                  replacements: {
                    TITLE: _v0
                  },
                  dictionary: {
                    es: {
                      singular: '"{TITLE}" restaurado'
                    },
                    "de-DE": {
                      singular: '"{TITLE}" wiederhergestellt'
                    },
                    "fr-FR": {
                      singular: '"{TITLE}" restauré'
                    },
                    "ja-JP": {
                      singular: '"{TITLE}" を復元しました'
                    },
                    "ko-KR": {
                      singular: '"{TITLE}" 복원됨'
                    },
                    "pt-BR": {
                      singular: '"{TITLE}" restaurado'
                    },
                    "zh-CN": {
                      singular: '"{TITLE}" 已恢复'
                    }
                  }
                }) : (0, _v16.translate)({
                  singular: "1 file restored",
                  dictionary: {
                    es: {
                      singular: "1 archivo restaurado"
                    },
                    "de-DE": {
                      singular: "1 Datei wiederhergestellt"
                    },
                    "fr-FR": {
                      singular: "1 fichier restauré"
                    },
                    "ja-JP": {
                      singular: "1 件のファイルを復元しました"
                    },
                    "ko-KR": {
                      singular: "1개 파일 복원됨"
                    },
                    "pt-BR": {
                      singular: "1 arquivo restaurado"
                    },
                    "zh-CN": {
                      singular: "已恢复 1 个文件"
                    }
                  }
                });
              _v13({
                isClosable: !0,
                render: _v0 => (0, _v1.jsx)(_v84.ToastRoot, {
                  ..._v0,
                  variant: "success",
                  children: (0, _v1.jsxs)(_v83.Center, {
                    gap: "sm",
                    children: [(0, _v1.jsx)(_v84.ToastIcon, {}), (0, _v1.jsx)(_v84.ToastTitle, {
                      children: _v2
                    }), _v1 && (0, _v1.jsx)(_v84.ToastButton, {
                      bgColor: "white",
                      color: "black",
                      fontWeight: "medium",
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                      _hover: {
                        bgColor: "gray.100"
                      },
                      _dark: {
                        bgColor: "white",
                        color: "black",
                        _hover: {
                          bgColor: "gray.100"
                        }
                      },
                      onClick: () => window.location.href = (0, _v86.getFolderPageUriFromApiUri)(_v1),
                      children: (0, _v16.translate)({
                        singular: "Show file location",
                        dictionary: {
                          es: {
                            singular: "Mostrar la ubicación del archivo"
                          },
                          "de-DE": {
                            singular: "Dateispeicherort anzeigen"
                          },
                          "fr-FR": {
                            singular: "Afficher l'emplacement du fichier"
                          },
                          "ja-JP": {
                            singular: "ファイルの場所を表示"
                          },
                          "ko-KR": {
                            singular: "파일 위치 표시"
                          },
                          "pt-BR": {
                            singular: "Mostrar localização do arquivo"
                          },
                          "zh-CN": {
                            singular: "显示文件位置"
                          }
                        }
                      })
                    })]
                  })
                })
              });
            } else _v3.length > 1 && _v12({
              content: (0, _v16.translate)({
                singular: "{COUNT} files restored",
                replacements: {
                  COUNT: _v3.length
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} archivos restaurados"
                  },
                  "de-DE": {
                    singular: "{COUNT} Dateien wiederhergestellt"
                  },
                  "fr-FR": {
                    singular: "{COUNT} fichiers restaurés"
                  },
                  "ja-JP": {
                    singular: "{COUNT} 個のファイルが復元されました"
                  },
                  "ko-KR": {
                    singular: "{COUNT}개의 파일이 복원되었습니다"
                  },
                  "pt-BR": {
                    singular: "{COUNT} arquivos restaurados"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 个文件已恢复"
                  }
                }
              }),
              status: "success"
            });
            _v4(), await Promise.all([_v1(), _v2()]);
          },
          handleDeletePermanently: async () => {
            let _v0;
            try {
              _v0 = await _v15(_v17);
            } catch {
              _v12({
                content: (0, _v16.translate)({
                  singular: "Error deleting files",
                  dictionary: {
                    es: {
                      singular: "Error al eliminar archivos"
                    },
                    "de-DE": {
                      singular: "Fehler beim Löschen von Dateien"
                    },
                    "fr-FR": {
                      singular: "Erreur lors de la suppression des fichiers"
                    },
                    "ja-JP": {
                      singular: "ファイルの削除中にエラーが発生しました"
                    },
                    "ko-KR": {
                      singular: "파일 삭제 오류"
                    },
                    "pt-BR": {
                      singular: "Erro ao excluir arquivos"
                    },
                    "zh-CN": {
                      singular: "删除文件时出错"
                    }
                  }
                }),
                status: "error"
              });
              return;
            }
            let _v1 = _v0.filter(_v0 => "deleted" === _v0.status).length,
              _v2 = _v0.filter(_v0 => "error" === _v0.status).length;
            _v2 > 0 ? _v12({
              content: (0, _v16.translate)({
                singular: "Error deleting 1 file",
                plural: "Error deleting {COUNT} files",
                count: _v2,
                replacements: {
                  COUNT: _v2
                },
                dictionary: {
                  es: {
                    singular: "Error al eliminar 1 archivo",
                    plural: "Error al eliminar {COUNT} archivos"
                  },
                  "de-DE": {
                    singular: "Fehler beim Löschen von 1 Datei",
                    plural: "Fehler beim Löschen von {COUNT} Dateien"
                  },
                  "fr-FR": {
                    singular: "Erreur lors de la suppression de 1 fichier",
                    plural: "Erreur lors de la suppression de {COUNT} fichiers"
                  },
                  "ja-JP": {
                    singular: "1 件のファイルの削除中にエラーが発生しました",
                    plural: "{COUNT} 件のファイルの削除中にエラーが発生しました"
                  },
                  "ko-KR": {
                    singular: "1개 파일 삭제 오류",
                    plural: "{COUNT}개 파일 삭제 오류"
                  },
                  "pt-BR": {
                    singular: "Erro ao excluir 1 arquivo",
                    plural: "Erro ao excluir {COUNT} arquivos"
                  },
                  "zh-CN": {
                    singular: "删除 1 个文件时出错",
                    plural: "删除 {COUNT} 个文件时出错"
                  }
                }
              }),
              status: "error"
            }) : _v1 > 0 && _v12({
              content: (0, _v16.translate)({
                singular: "File deleted forever",
                plural: "Files deleted forever",
                count: _v1,
                dictionary: {
                  es: {
                    singular: "Archivo eliminado permanentemente",
                    plural: "Archivos eliminados permanentemente"
                  },
                  "de-DE": {
                    singular: "Datei endgültig gelöscht",
                    plural: "Dateien endgültig gelöscht"
                  },
                  "fr-FR": {
                    singular: "Fichier supprimé définitivement",
                    plural: "Fichiers supprimés définitivement"
                  },
                  "ja-JP": {
                    singular: "ファイルが完全に削除されました",
                    plural: "{COUNT} 件のファイルが完全に削除されました"
                  },
                  "ko-KR": {
                    singular: "1개 파일 영구 삭제됨",
                    plural: "{COUNT}개 파일 영구 삭제됨"
                  },
                  "pt-BR": {
                    singular: "Arquivo excluído permanentemente",
                    plural: "Arquivos excluídos permanentemente"
                  },
                  "zh-CN": {
                    singular: "文件已被永久删除",
                    plural: "文件已被永久删除"
                  }
                }
              }),
              status: "success"
            }), _v18([]), _v4(), await Promise.all([_v1(), _v2()]);
          },
          handleEmptyTrashConfirm: async () => {
            _v20(!1), _v21.current = _v13({
              title: (0, _v16.translate)({
                singular: "Emptying trash",
                dictionary: {
                  es: {
                    singular: "Vaciando la papelera"
                  },
                  "de-DE": {
                    singular: "Papierkorb wird geleert"
                  },
                  "fr-FR": {
                    singular: "Vidage de la corbeille"
                  },
                  "ja-JP": {
                    singular: "ゴミ箱を空にしています"
                  },
                  "ko-KR": {
                    singular: "휴지통 비우기"
                  },
                  "pt-BR": {
                    singular: "Esvaziando a lixeira"
                  },
                  "zh-CN": {
                    singular: "正在清空回收站"
                  }
                }
              }),
              variant: "success",
              icon: (0, _v1.jsx)(_v85.CircleCheckFilled, {
                color: "status-positive-primary"
              })
            });
            try {
              await _v16();
            } catch {
              void 0 !== _v21.current && _v13.close(_v21.current), _v12({
                content: (0, _v16.translate)({
                  singular: "Error deleting files",
                  dictionary: {
                    es: {
                      singular: "Error al eliminar archivos"
                    },
                    "de-DE": {
                      singular: "Fehler beim Löschen von Dateien"
                    },
                    "fr-FR": {
                      singular: "Erreur lors de la suppression des fichiers"
                    },
                    "ja-JP": {
                      singular: "ファイルの削除中にエラーが発生しました"
                    },
                    "ko-KR": {
                      singular: "파일 삭제 오류"
                    },
                    "pt-BR": {
                      singular: "Erro ao excluir arquivos"
                    },
                    "zh-CN": {
                      singular: "删除文件时出错"
                    }
                  }
                }),
                status: "error"
              });
              return;
            }
            await _v1(), void 0 !== _v21.current && _v13.close(_v21.current), _v2();
          },
          handleEmptyTrashClick: () => {
            _v9(_v3), _v10(_v3), _v20(!0);
          },
          handleSetSort: _v22,
          handleSetFilteredTeamUsers: (0, _v10.useCallback)(_v0 => {
            _v8(_v0.length), _v6(_v0);
          }, [_v8, _v6]),
          pendingDeleteUris: _v17,
          setPendingDeleteUris: _v18,
          isEmptyTrashModalOpen: _v19,
          setIsEmptyTrashModalOpen: _v20
        };
      }({
        videos: _v24,
        mutate: _v30,
        mutateUser: _v11,
        total: _v25,
        deselectAllItems: _v40,
        setSort: _v19,
        setFilteredTeamUsers: _v21,
        trackSortChanged: _v46,
        trackFilterChanged: _v47,
        trackEmptyTrash: _v48,
        trackPermaDeleteAsk: _v0 => _v43("ask", "empty_trash", _v0),
        trackRestoreAsk: _v44
      }),
      _v65 = (0, _v10.useMemo)(() => !_v26 && _v28 && _v24.length <= 25 && 0 === _v20.length ? _v24.filter(_v0 => _v0.filesSize?.fileSizeType === "UPLOAD" || _v0.filesSize?.fileSizeType === "PROCESSING").reduce((_v0, _v1) => _v0 + (_v1.filesSize?.totalSize ?? 0), 0) : _v10?.uploadQuota?.recentlyDeletedDiskSpace ?? 0, [_v20.length, _v28, _v26, _v10, _v24]),
      _v66 = (_v10?.uploadQuota?.space?.free ?? 0) <= 0,
      _v67 = (0, _v26.isPerSeatSelfServeTier)(_v8?.user?.account),
      _v68 = _v61.reduce((_v0, _v1) => {
        let _v2 = _v24.find(_v0 => _v0.uri === _v1);
        return _v0 + (_v2?.filesSize?.totalSize ?? 0);
      }, 0),
      _v69 = (0, _v1.jsx)(_v24.FilterSortBar, {
        checkbox: (0, _v1.jsx)(_v76, {
          total: _v25,
          isTotalCapped: _v31,
          selectedCount: _v38.size,
          videoCount: _v24.length,
          isLoading: _v26,
          hasFilters: _v20.length > 0,
          onSelectAll: _v41,
          onDeselectAll: _v40,
          onTrackAllSelected: _v49
        }),
        sort: _v18,
        setSort: _v59,
        sortOptions: _v23.RECENTLY_DELETED_SORT_OPTIONS,
        layout: "LIST_LAYOUT",
        setLayout: () => {},
        isLayoutToggleDisabled: !0,
        shouldHideLayoutSelector: !0,
        children: (0, _v1.jsx)(_v25.DeletedByFilter, {
          filter: _v20,
          options: _v32,
          setFilter: _v60,
          searchQuery: _v22,
          setSearchQuery: _v23,
          isLoadingMore: _v33,
          isLoadingInitialData: _v34,
          isDone: _v35,
          onLoadMore: () => _v36(_v37 + 1)
        })
      }),
      _v70 = _v63 ? {
        isOpen: !0,
        onClose: () => {
          _v43("cancel", "empty_trash", _v25), _v64(!1);
        },
        onConfirm: () => {
          _v43("confirm", "empty_trash", _v25), _v57();
        },
        numItemsToDelete: _v25,
        headerText: (0, _v16.translate)({
          singular: "Permanently delete all files?",
          dictionary: {
            es: {
              singular: "¿Eliminar todos los archivos de forma permanente?"
            },
            "de-DE": {
              singular: "Alle Dateien endgültig löschen?"
            },
            "fr-FR": {
              singular: "Supprimer définitivement tous les fichiers ?"
            },
            "ja-JP": {
              singular: "すべてのファイルを永久に削除しますか？"
            },
            "ko-KR": {
              singular: "모든 파일을 영구적으로 삭제하시겠습니까?"
            },
            "pt-BR": {
              singular: "Excluir todos os arquivos permanentemente?"
            },
            "zh-CN": {
              singular: "永久删除所有文件？"
            }
          }
        }),
        bodyText: _v20.length > 0 || _v31 ? _v8?.teamUser ? (0, _v16.translate)({
          singular: "All your organization's deleted files will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
          replacements: {
            STORAGE: (0, _v19.bytesToSize)(_v65, 1)
          },
          dictionary: {
            es: {
              singular: "Todos los archivos eliminados de tu organización se eliminarán de forma permanente. Esto liberará {STORAGE} de espacio de almacenamiento. Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Alle gelöschten Dateien Ihrer Organisation werden endgültig gelöscht. Dadurch werden {STORAGE} an Speicherplatz freigegeben. Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Tous les fichiers supprimés de votre organisation seront supprimés définitivement. Cela libérera {STORAGE} d'espace de stockage. Cette action est irréversible."
            },
            "ja-JP": {
              singular: "組織の削除済みファイルはすべて永久に削除されます。これにより{STORAGE}の容量が解放されます。この操作は元に戻せません。"
            },
            "ko-KR": {
              singular: "귀하의 조직에서 삭제된 모든 파일이 영구적으로 삭제됩니다. 이로써 {STORAGE}의 저장 공간이 확보됩니다. 이 작업은 취소할 수 없습니다."
            },
            "pt-BR": {
              singular: "Todos os arquivos excluídos da sua organização serão apagados permanentemente. Isso liberará {STORAGE} de armazenamento. Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "您所在组织的所有已删除文件将被永久删除。这将释放 {STORAGE} 的存储空间。此操作无法撤销。"
            }
          }
        }) : (0, _v16.translate)({
          singular: "All your deleted files will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
          replacements: {
            STORAGE: (0, _v19.bytesToSize)(_v65, 1)
          },
          dictionary: {
            es: {
              singular: "Todos tus archivos eliminados se eliminarán de forma permanente. Esto liberará {STORAGE} de espacio de almacenamiento. Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Alle Ihre gelöschten Dateien werden endgültig gelöscht. Dadurch werden {STORAGE} an Speicherplatz freigegeben. Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Tous vos fichiers supprimés seront supprimés définitivement. Cela libérera {STORAGE} d'espace de stockage. Cette action est irréversible."
            },
            "ja-JP": {
              singular: "削除済みのファイルはすべて永久に削除されます。これにより{STORAGE}の容量が解放されます。この操作は元に戻せません。"
            },
            "ko-KR": {
              singular: "삭제된 모든 파일이 영구적으로 삭제됩니다. 이로써 {STORAGE}의 저장 공간이 확보됩니다. 이 작업은 취소할 수 없습니다."
            },
            "pt-BR": {
              singular: "Todos os seus arquivos excluídos serão apagados permanentemente. Isso liberará {STORAGE} de armazenamento. Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "您所有已删除的文件将被永久删除。这将释放 {STORAGE} 的存储空间。此操作无法撤销。"
            }
          }
        }) : (0, _v16.translate)({
          singular: "All {COUNT} files in your trash will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
          replacements: {
            COUNT: _v25,
            STORAGE: (0, _v19.bytesToSize)(_v65, 1)
          },
          dictionary: {
            es: {
              singular: "Todos los {COUNT} archivos de tu papelera se eliminarán permanentemente. Esto liberará {STORAGE} de espacio de almacenamiento. Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Alle {COUNT} Dateien in Ihrem Papierkorb werden dauerhaft gelöscht. Dadurch werden {STORAGE} Speicherplatz frei. Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Tous les {COUNT} fichiers de votre corbeille seront supprimés définitivement. Cela libérera {STORAGE} d'espace de stockage. Cette action est irréversible."
            },
            "ja-JP": {
              singular: "ゴミ箱内の{COUNT}件のファイルは完全に削除されます。これにより{STORAGE}の容量が空きます。この操作は取り消せません。"
            },
            "ko-KR": {
              singular: "휴지통에 있는 {COUNT}개의 파일이 영구적으로 삭제됩니다. 이로써 {STORAGE}의 저장 공간이 확보됩니다. 이 작업은 되돌릴 수 없습니다."
            },
            "pt-BR": {
              singular: "Todos os {COUNT} arquivos na sua lixeira serão excluídos permanentemente. Isso liberará {STORAGE} de armazenamento. Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "回收站中的全部 {COUNT} 个文件将被永久删除。这将释放 {STORAGE} 的存储空间。此操作无法撤销。"
            }
          }
        })
      } : {
        isOpen: _v61.length > 0,
        onClose: () => {
          _v61.length > 0 && _v43("cancel", _v12, _v61.length), _v62([]);
        },
        onConfirm: () => (_v43("confirm", _v12, _v61.length), _v56()),
        numItemsToDelete: _v61.length,
        title: _v61.length > 1 ? void 0 : _v24.find(_v0 => _v0.uri === _v61[0])?.name,
        storageSize: (0, _v19.bytesToSize)(_v68, 1)
      };
    return (0, _v1.jsx)(_v21.Page, {
      children: (0, _v1.jsxs)(_v21.Page.Main, {
        children: [(0, _v1.jsxs)(_v21.Page.StickyTop, {
          children: [(0, _v1.jsx)(_v22.PageHeader, {
            bottomBar: _v69,
            title: (0, _v16.translate)({
              singular: "Recently deleted",
              dictionary: {
                es: {
                  singular: "Eliminados recientemente"
                },
                "de-DE": {
                  singular: "Kürzlich gelöscht"
                },
                "fr-FR": {
                  singular: "Récemment supprimés"
                },
                "ja-JP": {
                  singular: "最近削除された項目"
                },
                "ko-KR": {
                  singular: "최근 삭제됨"
                },
                "pt-BR": {
                  singular: "Excluído recentemente"
                },
                "zh-CN": {
                  singular: "最近删除"
                }
              }
            })
          }), (0, _v1.jsx)(_v46, {}), (_v26 || _v20.length > 0 || _v24.length > 0) && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(!_v8?.teamUser || _v8.teamUser.permissionLevel <= 2) && (0, _v1.jsx)(_v49, {
              onEmptyTrash: _v58,
              recentlyDeletedDiskSpace: _v65
            }), (0, _v1.jsx)(_v74, {})]
          })]
        }), _v26 && (0, _v1.jsx)(_v11.Flex, {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          children: (0, _v1.jsx)(_v12.Spinner, {})
        }), !_v26 && (_v24.length > 0 ? (0, _v1.jsx)(_v73, {
          videos: _v24,
          selectedUris: _v38,
          onToggleSelected: _v54,
          isRestoreDisabled: _v66 && !_v67,
          onRestoreVideo: _v0 => {
            if (_v66 && _v67) {
              _v17("row_hover"), _v15(!0);
              return;
            }
            _v55([_v0], "row_hover");
          },
          onDeleteVideo: _v0 => {
            _v43("ask", "row_hover", 1), _v13("row_hover"), _v62([_v0]);
          }
        }) : (0, _v1.jsx)(_v47, {
          icon: (0, _v1.jsx)(_v14, {
            width: "lg",
            height: "lg",
            color: "text-primary"
          }),
          title: _v20.length > 0 ? (0, _v16.translate)({
            singular: "No results found",
            dictionary: {
              es: {
                singular: "No encontramos resultados."
              },
              "de-DE": {
                singular: "Keine Ergebnisse"
              },
              "fr-FR": {
                singular: "Aucun résultat trouvé"
              },
              "ja-JP": {
                singular: "検索結果がありません"
              },
              "ko-KR": {
                singular: "검색 결과가 없습니다"
              },
              "pt-BR": {
                singular: "Nenhum resultado encontrado."
              },
              "zh-CN": {
                singular: "未找到结果"
              }
            }
          }) : (0, _v16.translate)({
            singular: "No deleted files",
            dictionary: {
              es: {
                singular: "No hay archivos eliminados"
              },
              "de-DE": {
                singular: "Keine gelöschten Dateien"
              },
              "fr-FR": {
                singular: "Aucun fichier supprimé"
              },
              "ja-JP": {
                singular: "削除されたファイルはありません"
              },
              "ko-KR": {
                singular: "삭제된 파일이 없습니다"
              },
              "pt-BR": {
                singular: "Nenhum arquivo excluído"
              },
              "zh-CN": {
                singular: "没有已删除的文件"
              }
            }
          }),
          description: (0, _v16.translate)({
            singular: "Items you delete will appear here for {RETENTION_DAYS} days before being permanently removed.",
            replacements: {
              RETENTION_DAYS: 30
            },
            dictionary: {
              es: {
                singular: "Los elementos que elimines aparecerán aquí durante {RETENTION_DAYS} días antes de ser eliminados permanentemente."
              },
              "de-DE": {
                singular: "Elemente, die Sie löschen, werden hier für {RETENTION_DAYS} Tage angezeigt, bevor sie dauerhaft entfernt werden."
              },
              "fr-FR": {
                singular: "Les éléments que vous supprimez apparaîtront ici pendant {RETENTION_DAYS} jours avant d'être définitivement supprimés."
              },
              "ja-JP": {
                singular: "削除したアイテムはここに{RETENTION_DAYS}日間表示され、その後完全に削除されます。"
              },
              "ko-KR": {
                singular: "삭제한 항목은 영구적으로 제거되기 전 {RETENTION_DAYS}일 동안 여기에 표시됩니다."
              },
              "pt-BR": {
                singular: "Os itens que você excluir aparecerão aqui por {RETENTION_DAYS} dias antes de serem removidos permanentemente."
              },
              "zh-CN": {
                singular: "您删除的项目将在此处保留{RETENTION_DAYS}天，之后将被永久删除。"
              }
            }
          })
        })), !_v28 && !_v27 && (0, _v1.jsx)(_v20.InfiniteScrollTrigger, {
          isLoading: !!_v27,
          onLoadMore: _v29
        }), (0, _v1.jsx)(_v61, {
          isOpen: _v51,
          isNewUser: !!_v8?.user?.createdTime && new Date(_v8.user.createdTime) > new Date("2026-07-13T00:00:00Z"),
          onDismiss: _v53
        }), (0, _v1.jsx)(_v65, {
          ..._v70
        }), (0, _v1.jsx)(_v38, {
          numSelected: _v38.size,
          isRestoreDisabled: _v66 && !_v67,
          onDelete: () => {
            _v43("ask", "bulk_toast", _v38.size, Array.from(_v38).map(_v28.idFromUri)), _v13("bulk_toast"), _v62(Array.from(_v38));
          },
          onRestore: () => {
            if (_v66 && _v67) {
              _v17("bulk_toast"), _v15(!0);
              return;
            }
            _v55(Array.from(_v38), "bulk_toast");
          },
          onClear: _v40
        }), (0, _v1.jsx)(_v11.Flex, {
          id: _v37,
          justifyContent: "center"
        }), _v14 && (0, _v1.jsx)(_v78, {
          source: _v16,
          onClose: () => _v15(!1)
        })]
      })
    });
  }
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  let _v98 = () => {
    let _v0 = (0, _v29.useViewer)(),
      {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v9.useOrionSettings)();
    return _v2 || !_v0 ? null : _v1.has_recently_deleted ? !_v0?.teamUser || _v0.teamUser.permissionLevel <= _v23.RECENTLY_DELETED_MAX_PERMISSION_LEVEL ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: (0, _v8.translate)({
            singular: "Recently deleted",
            dictionary: {
              es: {
                singular: "Eliminados recientemente"
              },
              "de-DE": {
                singular: "Kürzlich gelöscht"
              },
              "fr-FR": {
                singular: "Récemment supprimés"
              },
              "ja-JP": {
                singular: "最近削除された項目"
              },
              "ko-KR": {
                singular: "최근 삭제됨"
              },
              "pt-BR": {
                singular: "Excluído recentemente"
              },
              "zh-CN": {
                singular: "最近删除"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v94, {})]
    }) : (0, _v1.jsxs)(_v3.Box, {
      textAlign: "center",
      marginTop: "500",
      children: [(0, _v1.jsx)(_v4.Text, {
        variant: "heading-xl",
        as: "h1",
        marginBottom: "100",
        children: (0, _v8.translate)({
          singular: "Permission denied",
          dictionary: {
            es: {
              singular: "Permiso denegado"
            },
            "de-DE": {
              singular: "Zugriff verweigert"
            },
            "fr-FR": {
              singular: "Accès refusé"
            },
            "ja-JP": {
              singular: "権限がありません"
            },
            "ko-KR": {
              singular: "권한이 거부되었습니다"
            },
            "pt-BR": {
              singular: "Permissão negada"
            },
            "zh-CN": {
              singular: "权限被拒绝"
            }
          }
        })
      }), (0, _v1.jsx)(_v3.Box, {
        margin: "0 auto",
        maxWidth: (0, _v5.rem)(660),
        paddingX: "200",
        paddingBottom: "100",
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v8.translate)({
            singular: "Restore and permanently delete capabilities are available to your team or workspace admins. Contact your admins to restore or remove recently deleted videos.",
            dictionary: {
              es: {
                singular: "Las funciones de restauración y eliminación permanente están disponibles para los administradores de su equipo o espacio de trabajo. Póngase en contacto con sus administradores para restaurar o eliminar vídeos eliminados recientemente."
              },
              "de-DE": {
                singular: "Wiederherstellungs- und permanente Löschfunktionen stehen den Administratoren Ihres Teams oder Ihres Arbeitsbereichs zur Verfügung. Wenden Sie sich an Ihre Administratoren, um kürzlich gelöschte Videos wiederherzustellen oder zu entfernen."
              },
              "fr-FR": {
                singular: "Les fonctionnalités de restauration et de suppression définitive sont disponibles pour les administrateurs de votre équipe ou de votre espace de travail. Contactez vos administrateurs pour restaurer ou supprimer les vidéos récemment supprimées."
              },
              "ja-JP": {
                singular: "復元および完全削除の機能はチームまたはワークスペースの管理者が利用できます。最近削除された動画を復元または完全に削除するには、管理者にお問い合わせください。"
              },
              "ko-KR": {
                singular: "복원 및 영구 삭제 기능은 팀 또는 워크스페이스 관리자에게 제공됩니다. 최근에 삭제된 동영상을 복원하거나 영구 삭제하려면 관리자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Os recursos de restauração e de exclusão permanente estão disponíveis para os administradores da sua equipe ou do workspace. Entre em contato com seus administradores para restaurar ou remover vídeos excluídos recentemente."
              },
              "zh-CN": {
                singular: "恢复和永久删除功能仅对您的团队或工作区管理员可用。请联系管理员以恢复或移除最近删除的视频。"
              }
            }
          })
        })
      })]
    }) : (0, _v1.jsx)(_v95.ErrorPage, {
      error: new _v6.ResourceNotFoundError()
    });
  };
  _v98.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v97.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v96.SideNavContent, {
      surface: "home"
    }),
    sideNavSurface: "home",
    children: _v0
  }), (0, _v7.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !1
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v98], 0);
}