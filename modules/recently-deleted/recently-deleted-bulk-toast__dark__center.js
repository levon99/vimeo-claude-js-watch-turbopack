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
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = "recently-deleted-bulk-toast";
  function _v37({
    numSelected: _v0,
    onDelete: _v1,
    onRestore: _v2,
    onClear: _v3,
    isRestoreDisabled: _v4
  }) {
    let [_v5, _v6] = (0, _v10.useState)(!1),
      {
        colorMode: _v7
      } = (0, _v32.useColorMode)(),
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
      _v9 = "dark" === _v7 ? _v29.LightMode : _v29.DarkMode;
    return (0, _v1.jsx)(_v9, {
      children: (0, _v1.jsx)(_v35.BulkActionsBar.ActionBar, {
        isActive: _v0 > 0,
        targetElementId: _v36,
        children: (0, _v1.jsxs)(_v11.Flex, {
          alignItems: "center",
          gap: "0.5rem",
          children: [(0, _v1.jsx)(_v4.Text, {
            color: "text-primary",
            variant: "body-lg",
            marginRight: "3rem",
            children: (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v31.Tooltip, {
            label: _v4 ? (0, _v15.translate)({
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
            children: (0, _v1.jsx)(_v35.BulkActionsBar.ActionButton, {
              icon: (0, _v1.jsx)(_v34.History, {}),
              label: (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v35.BulkActionsBar.ActionButton, {
            icon: (0, _v1.jsx)(_v13.TrashBin, {}),
            label: (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v30.IconButton, {
            "aria-label": (0, _v15.translate)({
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
            icon: (0, _v1.jsx)(_v33.CloseX, {}),
            variant: "tertiary"
          })]
        })
      })
    });
  }
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  function _v45() {
    let _v0 = (0, _v28.useViewer)(),
      {
        capabilities: _v1
      } = (0, _v44.useCapability)(["hasDataRetention"], _v0?.teamUser?.ownerId);
    return _v1?.hasDataRetention ? (0, _v1.jsxs)(_v40.AlertRoot, {
      size: "sm",
      backgroundColor: "fill-component",
      borderRadius: "md",
      children: [(0, _v1.jsx)(_v39.AlertIcon, {
        children: (0, _v1.jsx)(_v43.ShieldInfo, {
          color: "text-primary"
        })
      }), (0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsx)(_v41.AlertTitle, {
          color: "text-primary",
          children: (0, _v15.translate)({
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
        }), (0, _v1.jsx)(_v38.AlertDescription, {
          color: "text-primary",
          children: (0, _v15.translate)({
            singular: "This page only shows videos manually deleted by team members. Videos removed automatically by your organization's retention policy live in {LINK}Data retention history{/LINK}.",
            replacements: {
              LINK: _v0 => (0, _v1.jsxs)(_v42.Link, {
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
  function _v46({
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
        children: _v2
      })]
    });
  }
  var _v47 = _v0.i(0);
  function _v48({
    onEmptyTrash: _v0,
    recentlyDeletedDiskSpace: _v1
  }) {
    let _v2 = (0, _v18.bytesToSize)(_v1, 1);
    return (0, _v1.jsx)(_v40.AlertRoot, {
      backgroundColor: "status-info-secondary",
      borderRadius: "md",
      p: "sm",
      pl: "md",
      marginBottom: "0",
      alignItems: "center",
      children: (0, _v1.jsx)(_v38.AlertDescription, {
        width: "100%",
        children: (0, _v1.jsxs)(_v11.Flex, {
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "sm",
          children: [(0, _v1.jsxs)(_v4.Text, {
            as: "span",
            variant: "body-sm",
            children: [(0, _v15.translate)({
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
            }), " ", (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v47.Button, {
            variant: "secondary",
            size: "sm",
            onClick: _v0,
            flexShrink: 0,
            bg: "fill-surface",
            children: (0, _v15.translate)({
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
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  function _v55({
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
      _v11 = _v4 && 1 === _v3 ? _v7 ? (0, _v15.translate)({
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
      }) : (0, _v15.translate)({
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
      }) : _v7 ? (0, _v15.translate)({
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
      }) : (0, _v15.translate)({
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
    return (0, _v1.jsxs)(_v49.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v54.ModalOverlay, {}), (0, _v1.jsxs)(_v51.ModalContent, {
        borderRadius: "md",
        children: [(0, _v1.jsx)(_v53.ModalHeader, {
          padding: "lg",
          fontSize: "heading-md",
          color: "text-primary",
          children: _v5 ?? (0, _v15.translate)({
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
        }), (0, _v1.jsx)(_v50.ModalBody, {
          padding: "0.5rem 1.5rem",
          fontSize: "body-md",
          color: "text-primary",
          children: _v6 ?? _v11
        }), (0, _v1.jsxs)(_v52.ModalFooter, {
          border: "0",
          padding: "lg",
          children: [(0, _v1.jsx)(_v47.Button, {
            onClick: _v1,
            variant: "tertiary",
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
          }), (0, _v1.jsx)(_v47.Button, {
            onClick: _v10,
            variant: "destructive",
            isDisabled: _v8,
            isLoading: _v8,
            children: (0, _v15.translate)({
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
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  function _v60({
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
      children: [(0, _v1.jsx)(_v31.Tooltip, {
        label: _v2 ? (0, _v15.translate)({
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
        }) : (0, _v15.translate)({
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
        children: (0, _v1.jsx)(_v30.IconButton, {
          "aria-label": (0, _v15.translate)({
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
          icon: (0, _v1.jsx)(_v34.History, {}),
          variant: "blur",
          size: "xs",
          isDisabled: _v3 || !!_v2,
          isLoading: _v3,
          onClick: _v5
        })
      }), (0, _v1.jsx)(_v31.Tooltip, {
        label: (0, _v15.translate)({
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
        children: (0, _v1.jsx)(_v30.IconButton, {
          "aria-label": (0, _v15.translate)({
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
          icon: (0, _v1.jsx)(_v13.TrashBin, {}),
          variant: "blur",
          size: "xs",
          isDisabled: _v3,
          onClick: _v0
        })
      })]
    });
  }
  let _v61 = `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 6fr 2fr 3fr 2fr ${(0, _v5.rem)(80)}`;
  function _v62({
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
          _v2 = _v0.filesSize && _v0.filesSize.totalSize > 0 ? (0, _v18.bytesToSize)(_v0.filesSize.totalSize) : "—",
          _v3 = _v0.deletedBy?.uri ? (0, _v27.idFromUri)(_v0.deletedBy.uri) : null,
          _v4 = _v0.modifiedTime ? (_v1 = Math.min(Math.ceil((new Date(_v0.modifiedTime).getTime() + 0 - Date.now()) / 0), 30)) <= 0 ? (0, _v15.translate)({
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
          }) : (0, _v15.translate)({
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
        return (0, _v1.jsxs)(_v57.ContentRow, {
          listGridColumns: _v61,
          isSelected: !!_v0.uri && _v2.has(_v0.uri),
          onToggleSelected: _v0.uri ? () => _v3(_v0.uri) : void 0,
          children: [(0, _v1.jsx)(_v57.ContentRow.Column, {
            children: (0, _v1.jsx)(_v57.ContentRow.SelectCheckbox, {
              size: "md"
            })
          }), (0, _v1.jsx)(_v57.ContentRow.Column, {
            children: (0, _v1.jsx)(_v58.VideoThumbnail, {
              alt: _v0.name ?? "",
              badgeText: (0, _v59.secondsToDisplay)(_v0.duration),
              isDefaultPicture: _v0.pictures?.defaultPicture,
              thumbnailSrc: _v0.pictures?.sizes[3]?.link
            })
          }), (0, _v1.jsx)(_v57.ContentRow.Column, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              paddingLeft: (0, _v5.rem)(8),
              children: _v0.name
            })
          }), (0, _v1.jsx)(_v57.ContentRow.Column, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v2
            })
          }), (0, _v1.jsx)(_v57.ContentRow.Column, {
            children: _v3 && _v3 === _v1 ? (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v15.translate)({
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
              children: [(0, _v1.jsx)(_v56.Avatar, {
                size: "sm",
                alt: (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v57.ContentRow.Column, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4
            })
          }), (0, _v1.jsx)(_v57.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: (0, _v1.jsx)(_v60, {
              onRestore: () => _v4(_v0.uri),
              onDelete: () => _v5(_v0.uri),
              isRestoreDisabled: _v6
            })
          })]
        }, _v0.uri);
      })
    });
  }
  function _v63({
    videos: _v0,
    selectedUris: _v1,
    onToggleSelected: _v2,
    onRestoreVideo: _v3,
    onDeleteVideo: _v4,
    isRestoreDisabled: _v5
  }) {
    let _v6 = (0, _v28.useViewer)(),
      _v7 = _v6?.user?.id;
    return (0, _v1.jsx)(_v62, {
      videos: _v0,
      viewerUserId: _v7,
      selectedUris: _v1,
      onToggleSelected: _v2,
      onRestoreVideo: _v3,
      onDeleteVideo: _v4,
      isRestoreDisabled: _v5
    });
  }
  function _v64() {
    return (0, _v1.jsxs)(_v57.ContentRow, {
      listGridColumns: _v61,
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
      children: [(0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v15.translate)({
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
      }), (0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v15.translate)({
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
      }), (0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v15.translate)({
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
      }), (0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v15.translate)({
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
      }), (0, _v1.jsx)(_v57.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    });
  }
  var _v65 = _v0.i(0);
  function _v66({
    total: _v0,
    selectedCount: _v1,
    videoCount: _v2,
    isLoading: _v3,
    hasFilters: _v4,
    onSelectAll: _v5,
    onDeselectAll: _v6,
    onTrackAllSelected: _v7
  }) {
    return (0, _v1.jsx)(_v65.CheckboxItemCount, {
      hasCheckbox: _v0 > 0,
      isChecked: !!_v1,
      isIndeterminate: !!_v1 && _v1 < _v2,
      isLoading: _v3,
      onChange: () => {
        _v1 ? (_v7(!1), _v6()) : (_v7(!0), _v5());
      },
      selectedItemCount: _v1,
      subtitle: _v1 > 0 ? (0, _v15.translate)({
        singular: "{NUM_ITEMS} selected",
        replacements: {
          NUM_ITEMS: _v1
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
      }) : !!_v0 && (_v4 ? (0, _v15.translate)({
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
      }) : (0, _v15.translate)({
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
      }))
    });
  }
  var _v67 = _v0.i(0);
  function _v68({
    source: _v0,
    onClose: _v1
  }) {
    return (0, _v1.jsx)(_v67.UpsellModal, {
      userConfig: {},
      onClose: _v1,
      templateType: "default",
      modalConfig: {
        headerText: (0, _v15.translate)({
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
        subHeaderText: (0, _v15.translate)({
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
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ["video.createdTime", "video.deletedBy", "video.deletedBy.name", "video.deletedBy.pictures", "video.deletedBy.uri", "video.duration", "video.filesSize", "video.filesSize.fileSizeType", "video.filesSize.totalSize", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.sizes", "video.pictures.uri", "video.uri"];
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  async function _v79({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v77.measureLatency)("postVideosPermanentDeletion", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/permanent-deletion`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v78.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v78.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v78.deepCamelCase)(_v1);
    });
  }
  var _v80 = _v0.i(0);
  async function _v81({
    baseUrl: _v0,
    ..._v1
  }) {
    return (0, _v77.measureLatency)("postVideosPermanentDeletionAll", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/permanent-deletion/all`, {
        ..._v1,
        method: "POST"
      });
      if (!_v0.ok) throw new _v78.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v78.deepCamelCase)(_v1);
    });
  }
  var _v82 = _v0.i(0);
  function _v83() {
    let _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7 = (0, _v28.useViewer)(),
      _v8 = _v7?.teamUser?.ownerId ?? _v7?.user?.id,
      {
        data: _v9,
        mutate: _v10
      } = (0, _v14.useGetUser)(() => _v8 ? {
        where: {
          userId: _v8
        },
        select: ["uploadQuota.recentlyDeletedDiskSpace", "uploadQuota.space.free", "uploadQuota.space.unit"]
      } : null),
      [_v11, _v12] = (0, _v10.useState)("row_hover"),
      [_v13, _v14] = (0, _v10.useState)(!1),
      [_v15, _v16] = (0, _v10.useState)("row_hover"),
      [_v17, _v18] = (0, _v10.useState)(_v22.DEFAULT_RECENTLY_DELETED_SORT),
      [_v19, _v20] = (0, _v10.useState)([]),
      [_v21, _v22] = (0, _v10.useState)(""),
      {
        videos: _v23,
        total: _v24,
        isLoading: _v25,
        isLoadingMore: _v26,
        isDone: _v27,
        loadMore: _v28,
        mutate: _v29
      } = function (_v0, _v1 = []) {
        let _v2 = (0, _v28.useViewer)(),
          _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
          _v4 = !_v2?.teamUser || _v2.teamUser.permissionLevel <= 2,
          _v5 = _v1.length > 0 ? _v1.map(_v0 => _v0.userId).join(",") : void 0,
          {
            data: _v6,
            mutate: _v7,
            setSize: _v8,
            size: _v9
          } = (0, _v69.useGetUserFoldersRootInfinite)(() => _v3 ? {
            where: {
              userId: _v3
            },
            select: _v71,
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
          } = (0, _v70.getInfiniteRequestLoadingState)({
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
      }(_v17, _v19),
      {
        users: _v30,
        isLoadingMore: _v31,
        isLoadingInitialData: _v32,
        isDone: _v33,
        setSize: _v34,
        size: _v35
      } = (0, _v26.useUserTeamMembers)(_v21),
      [_v36, _v37] = (0, _v10.useState)(new Set()),
      _v38 = (0, _v10.useCallback)(() => _v37(new Set()), []),
      _v39 = (0, _v10.useCallback)(() => _v37(new Set(_v23.map(_v0 => _v0.uri).filter(_v0 => !!_v0))), [_v23]),
      {
        trackPageDisplayed: _v40,
        trackPermaDelete: _v41,
        trackRestoreAsk: _v42,
        trackItemSelected: _v43,
        trackSortChanged: _v44,
        trackFilterChanged: _v45,
        trackEmptyTrash: _v46,
        trackAllSelected: _v47
      } = (_v0 = (0, _v17.usePico)(), _v1 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_page_displayed", {
          itemCount: _v0
        });
      }, [_v0]), _v2 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_empty_trash_click", {
          itemCount: _v0 ?? null
        });
      }, [_v0]), _v3 = (0, _v10.useCallback)((_v0, _v1, _v2, _v3) => {
        null !== _v0 && _v0.track("recently_deleted_permanent_delete_modal_open", {
          action: _v0,
          source: _v1,
          itemCount: _v2,
          ...(void 0 !== _v3 && {
            videoIds: _v3
          })
        });
      }, [_v0]), _v4 = (0, _v10.useCallback)((_v0, _v1, _v2) => {
        null !== _v0 && _v0.track("recently_deleted_restore_click", {
          source: _v0,
          itemCount: _v1,
          ...(void 0 !== _v2 && {
            videoIds: _v2
          })
        });
      }, [_v0]), _v5 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_page_sort_by_click", {
          sortBy: _v0
        });
      }, [_v0]), _v6 = (0, _v10.useCallback)(_v0 => {
        null !== _v0 && _v0.track("recently_deleted_filter_changed", {
          activeFilterCount: _v0
        });
      }, [_v0]), {
        trackPageDisplayed: _v1,
        trackEmptyTrash: _v2,
        trackPermaDelete: _v3,
        trackRestoreAsk: _v4,
        trackSortChanged: _v5,
        trackFilterChanged: _v6,
        trackItemSelected: (0, _v10.useCallback)((_v0, _v1, _v2) => {
          null !== _v0 && _v0.track("recently_deleted_item_toggle", {
            totalSelected: _v0,
            isSelected: _v1,
            videoId: _v2
          });
        }, [_v0]),
        trackAllSelected: (0, _v10.useCallback)(_v0 => {
          null !== _v0 && _v0.track("recently_deleted_all_selected_toggle", {
            isSelected: _v0
          });
        }, [_v0])
      });
    (0, _v16.usePicoEffect)(() => {
      _v25 || _v40(_v24);
    }, [_v25]);
    let _v48 = (0, _v10.useCallback)(_v0 => {
        let _v1 = !_v36.has(_v0);
        _v43(_v1 ? _v36.size + 1 : _v36.size - 1, _v1, (0, _v27.idFromUri)(_v0)), _v37(_v0 => {
          let _v1 = new Set(_v0);
          return _v1.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v1;
        });
      }, [_v36, _v43]),
      {
        handleRestore: _v49,
        handleDeletePermanently: _v50,
        handleEmptyTrashConfirm: _v51,
        handleEmptyTrashClick: _v52,
        handleSetSort: _v53,
        handleSetFilteredTeamUsers: _v54,
        pendingDeleteUris: _v55,
        setPendingDeleteUris: _v56,
        isEmptyTrashModalOpen: _v57,
        setIsEmptyTrashModalOpen: _v58
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
        trackPermaDeleteAsk: _v10
      }) {
        let _v11 = (0, _v76.useNotification)(),
          _v12 = (0, _v73.useToast)(),
          _v13 = function () {
            let {
              baseUrl: _v0,
              jwt: _v1,
              xVimeoPage: _v2,
              locale: _v3
            } = (0, _v80.useGctlConfig)();
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
                let _v0 = await (0, _v82.postVideosRestore)({
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
          _v14 = function () {
            let {
              baseUrl: _v0,
              jwt: _v1,
              xVimeoPage: _v2,
              locale: _v3
            } = (0, _v80.useGctlConfig)();
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
                let _v0 = await _v79({
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
            } = (0, _v80.useGctlConfig)();
            return async () => {
              await _v81({
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
          [_v16, _v17] = (0, _v10.useState)([]),
          [_v18, _v19] = (0, _v10.useState)(!1),
          _v20 = (0, _v10.useRef)(void 0),
          _v21 = (0, _v10.useRef)(void 0),
          _v22 = (0, _v10.useRef)(_v3);
        (0, _v10.useEffect)(() => {
          _v22.current = _v3;
        }, [_v3]);
        let _v23 = (0, _v10.useCallback)(_v0 => {
          _v7(`${_v0.type}_${_v0.direction}`), _v5(_v0);
        }, [_v7, _v5]);
        return {
          handleRestore: async _v0 => {
            let _v1;
            try {
              _v1 = await _v13(_v0);
            } catch {
              _v11({
                content: (0, _v15.translate)({
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
            let _v2 = _v1.filter(_v0 => "restored" === _v0.status),
              _v3 = _v1.filter(_v0 => "not_found" === _v0.status || "error" === _v0.status).length;
            if (_v3 > 0) _v11({
              content: (0, _v15.translate)({
                singular: "Error restoring 1 file",
                plural: "Error restoring {COUNT} files",
                count: _v3,
                replacements: {
                  COUNT: _v3
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
            });else if (1 === _v2.length) {
              let _v0 = _v0.find(_v0 => _v0.uri === _v2[0].uri)?.name,
                _v1 = _v2[0].folderUri,
                _v2 = _v0 ? (0, _v15.translate)({
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
                }) : (0, _v15.translate)({
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
              _v12({
                isClosable: !0,
                render: _v0 => (0, _v1.jsx)(_v73.ToastRoot, {
                  ..._v0,
                  variant: "success",
                  children: (0, _v1.jsxs)(_v72.Center, {
                    gap: "sm",
                    children: [(0, _v1.jsx)(_v73.ToastIcon, {}), (0, _v1.jsx)(_v73.ToastTitle, {
                      children: _v2
                    }), _v1 && (0, _v1.jsx)(_v73.ToastButton, {
                      bgColor: "text-secondary",
                      color: "text-button-inverted",
                      fontWeight: "medium",
                      _hover: {
                        bgColor: "text-primary"
                      },
                      onClick: () => window.location.href = (0, _v75.getFolderPageUriFromApiUri)(_v1),
                      children: (0, _v15.translate)({
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
            } else _v2.length > 1 && _v11({
              content: (0, _v15.translate)({
                singular: "{COUNT} files restored",
                replacements: {
                  COUNT: _v2.length
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
              _v0 = await _v14(_v16);
            } catch {
              _v11({
                content: (0, _v15.translate)({
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
            _v2 > 0 ? _v11({
              content: (0, _v15.translate)({
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
            }) : _v1 > 0 && _v11({
              content: (0, _v15.translate)({
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
            }), _v17([]), _v4(), await Promise.all([_v1(), _v2()]);
          },
          handleEmptyTrashConfirm: async () => {
            _v19(!1);
            try {
              await _v15();
            } catch {
              _v11({
                content: (0, _v15.translate)({
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
            _v20.current = _v12({
              title: (0, _v15.translate)({
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
              icon: (0, _v1.jsx)(_v74.CircleCheckFilled, {
                color: "status-positive-primary"
              }),
              duration: 0
            }), _v1();
            let _v0 = Date.now();
            _v21.current = setInterval(() => {
              if (Date.now() - _v0 > 0 || 0 === _v22.current) {
                clearInterval(_v21.current), void 0 !== _v20.current && _v12.close(_v20.current), _v2();
                return;
              }
              _v1();
            }, 0);
          },
          handleEmptyTrashClick: () => {
            _v9(_v3), _v10(_v3), _v19(!0);
          },
          handleSetSort: _v23,
          handleSetFilteredTeamUsers: (0, _v10.useCallback)(_v0 => {
            _v8(_v0.length), _v6(_v0);
          }, [_v8, _v6]),
          pendingDeleteUris: _v16,
          setPendingDeleteUris: _v17,
          isEmptyTrashModalOpen: _v18,
          setIsEmptyTrashModalOpen: _v19
        };
      }({
        videos: _v23,
        mutate: _v29,
        mutateUser: _v10,
        total: _v24,
        deselectAllItems: _v38,
        setSort: _v18,
        setFilteredTeamUsers: _v20,
        trackSortChanged: _v44,
        trackFilterChanged: _v45,
        trackEmptyTrash: _v46,
        trackPermaDeleteAsk: _v0 => _v41("ask", "empty_trash", _v0)
      }),
      _v59 = _v9?.uploadQuota?.recentlyDeletedDiskSpace ?? 0,
      _v60 = (_v9?.uploadQuota?.space?.free ?? 0) <= 0,
      _v61 = (0, _v25.isPerSeatSelfServeTier)(_v7?.user?.account),
      _v62 = _v55.reduce((_v0, _v1) => {
        let _v2 = _v23.find(_v0 => _v0.uri === _v1);
        return _v0 + (_v2?.filesSize?.totalSize ?? 0);
      }, 0),
      _v63 = (0, _v1.jsx)(_v23.FilterSortBar, {
        checkbox: (0, _v1.jsx)(_v66, {
          total: _v24,
          selectedCount: _v36.size,
          videoCount: _v23.length,
          isLoading: _v25,
          hasFilters: _v19.length > 0,
          onSelectAll: _v39,
          onDeselectAll: _v38,
          onTrackAllSelected: _v47
        }),
        sort: _v17,
        setSort: _v53,
        sortOptions: _v22.RECENTLY_DELETED_SORT_OPTIONS,
        layout: "LIST_LAYOUT",
        setLayout: () => {},
        isLayoutToggleDisabled: !0,
        shouldHideLayoutSelector: !0,
        children: (0, _v1.jsx)(_v24.DeletedByFilter, {
          filter: _v19,
          options: _v30,
          setFilter: _v54,
          searchQuery: _v21,
          setSearchQuery: _v22,
          isLoadingMore: _v31,
          isLoadingInitialData: _v32,
          isDone: _v33,
          onLoadMore: () => _v34(_v35 + 1)
        })
      }),
      _v64 = _v57 ? {
        isOpen: !0,
        onClose: () => {
          _v41("cancel", "empty_trash", _v24), _v58(!1);
        },
        onConfirm: () => {
          _v41("confirm", "empty_trash", _v24), _v51();
        },
        numItemsToDelete: _v24,
        headerText: (0, _v15.translate)({
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
        bodyText: _v19.length > 0 ? _v7?.teamUser ? (0, _v15.translate)({
          singular: "All your organization's deleted files will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
          replacements: {
            STORAGE: (0, _v18.bytesToSize)(_v59, 1)
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
        }) : (0, _v15.translate)({
          singular: "All your deleted files will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
          replacements: {
            STORAGE: (0, _v18.bytesToSize)(_v59, 1)
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
        }) : (0, _v15.translate)({
          singular: "All {COUNT} files in your trash will be deleted forever. This will free up {STORAGE} of storage. This action can't be undone.",
          replacements: {
            COUNT: _v24,
            STORAGE: (0, _v18.bytesToSize)(_v59, 1)
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
        isOpen: _v55.length > 0,
        onClose: () => {
          _v55.length > 0 && _v41("cancel", _v11, _v55.length), _v56([]);
        },
        onConfirm: () => (_v41("confirm", _v11, _v55.length), _v50()),
        numItemsToDelete: _v55.length,
        title: _v55.length > 1 ? void 0 : _v23.find(_v0 => _v0.uri === _v55[0])?.name,
        storageSize: (0, _v18.bytesToSize)(_v62, 1)
      };
    return (0, _v1.jsx)(_v20.Page, {
      children: (0, _v1.jsxs)(_v20.Page.Main, {
        children: [(0, _v1.jsxs)(_v20.Page.StickyTop, {
          children: [(0, _v1.jsx)(_v21.PageHeader, {
            bottomBar: _v63,
            title: (0, _v15.translate)({
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
          }), (_v25 || _v19.length > 0 || _v23.length > 0) && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(!_v7?.teamUser || _v7.teamUser.permissionLevel <= 2) && (0, _v1.jsx)(_v48, {
              onEmptyTrash: _v52,
              recentlyDeletedDiskSpace: _v59
            }), (0, _v1.jsx)(_v45, {}), (0, _v1.jsx)(_v64, {})]
          })]
        }), _v25 && (0, _v1.jsx)(_v11.Flex, {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          children: (0, _v1.jsx)(_v12.Spinner, {})
        }), !_v25 && (_v23.length > 0 ? (0, _v1.jsx)(_v63, {
          videos: _v23,
          selectedUris: _v36,
          onToggleSelected: _v48,
          isRestoreDisabled: _v60 && !_v61,
          onRestoreVideo: _v0 => {
            if (_v60 && _v61) {
              _v16("row_hover"), _v14(!0);
              return;
            }
            _v42("row_hover", 1), _v49([_v0]);
          },
          onDeleteVideo: _v0 => {
            _v41("ask", "row_hover", 1), _v12("row_hover"), _v56([_v0]);
          }
        }) : (0, _v1.jsx)(_v46, {
          icon: (0, _v1.jsx)(_v13.TrashBin, {
            width: "lg",
            height: "lg",
            color: "text-primary"
          }),
          title: _v19.length > 0 ? (0, _v15.translate)({
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
          }) : (0, _v15.translate)({
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
          description: (0, _v15.translate)({
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
        })), !_v27 && !_v26 && (0, _v1.jsx)(_v19.InfiniteScrollTrigger, {
          isLoading: !!_v26,
          onLoadMore: _v28
        }), (0, _v1.jsx)(_v55, {
          ..._v64
        }), (0, _v1.jsx)(_v37, {
          numSelected: _v36.size,
          isRestoreDisabled: _v60 && !_v61,
          onDelete: () => {
            _v41("ask", "bulk_toast", _v36.size, Array.from(_v36).map(_v27.idFromUri)), _v12("bulk_toast"), _v56(Array.from(_v36));
          },
          onRestore: () => {
            if (_v60 && _v61) {
              _v16("bulk_toast"), _v14(!0);
              return;
            }
            _v42("bulk_toast", _v36.size, Array.from(_v36).map(_v27.idFromUri)), _v49(Array.from(_v36));
          },
          onClear: _v38
        }), (0, _v1.jsx)("div", {
          id: _v36
        }), _v13 && (0, _v1.jsx)(_v68, {
          source: _v15,
          onClose: () => _v14(!1)
        })]
      })
    });
  }
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = () => {
    let _v0 = (0, _v28.useViewer)(),
      {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v9.useOrionSettings)();
    if (_v2 || !_v0) return null;
    if (!_v1.has_recently_deleted) return (0, _v1.jsx)(_v84.ErrorPage, {
      error: new _v6.ResourceNotFoundError()
    });
    let _v3 = !_v0?.teamUser || _v0.teamUser.permissionLevel <= 2;
    return _v0?.user?.capabilities.hasEnterprise && !_v3 ? (0, _v1.jsxs)(_v3.Box, {
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
    }) : (0, _v1.jsxs)(_v1.Fragment, {
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
      }), (0, _v1.jsx)(_v83, {})]
    });
  };
  _v87.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v86.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v85.HomeSideNavContent, {}),
    children: _v0
  }), (0, _v7.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !1
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v87], 0);
}