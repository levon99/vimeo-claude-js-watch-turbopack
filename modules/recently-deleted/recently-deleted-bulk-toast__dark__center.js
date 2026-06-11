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
    _v32 = _v0.i(0);
  let _v33 = "recently-deleted-bulk-toast";
  function _v34({
    numSelected: _v0,
    onDelete: _v1,
    onRestore: _v2,
    onClear: _v3
  }) {
    let [_v4, _v5] = (0, _v10.useState)(!1),
      {
        colorMode: _v6
      } = (0, _v29.useColorMode)(),
      _v7 = async () => {
        if (!_v4) {
          _v5(!0);
          try {
            await _v2();
          } finally {
            _v5(!1);
          }
        }
      },
      _v8 = "dark" === _v6 ? _v27.LightMode : _v27.DarkMode;
    return (0, _v1.jsx)(_v8, {
      children: (0, _v1.jsx)(_v32.BulkActionsBar.ActionBar, {
        isActive: _v0 > 0,
        targetElementId: _v33,
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
          }), (0, _v1.jsx)(_v32.BulkActionsBar.ActionButton, {
            icon: (0, _v1.jsx)(_v31.History, {}),
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
            disabled: _v4,
            onClick: _v7
          }), (0, _v1.jsx)(_v32.BulkActionsBar.ActionButton, {
            icon: (0, _v1.jsx)(_v15.TrashBin, {}),
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
          }), (0, _v1.jsx)(_v28.IconButton, {
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
            icon: (0, _v1.jsx)(_v30.CloseX, {}),
            variant: "tertiary"
          })]
        })
      })
    });
  }
  function _v35({
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
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  function _v43({
    isOpen: _v0,
    onClose: _v1,
    onConfirm: _v2,
    numItemsToDelete: _v3,
    title: _v4
  }) {
    let [_v5, _v6] = (0, _v10.useState)(!1),
      _v7 = async () => {
        _v6(!0);
        try {
          await _v2();
        } finally {
          _v6(!1);
        }
      },
      _v8 = _v4 && 1 === _v3 ? (0, _v16.translate)({
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
    return (0, _v1.jsxs)(_v37.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v42.ModalOverlay, {}), (0, _v1.jsxs)(_v39.ModalContent, {
        borderRadius: "md",
        children: [(0, _v1.jsx)(_v41.ModalHeader, {
          padding: "lg",
          fontSize: "heading-md",
          color: "text-primary",
          children: (0, _v16.translate)({
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
        }), (0, _v1.jsx)(_v38.ModalBody, {
          padding: "0.5rem 1.5rem",
          fontSize: "body-md",
          color: "text-primary",
          children: _v8
        }), (0, _v1.jsxs)(_v40.ModalFooter, {
          border: "0",
          padding: "lg",
          children: [(0, _v1.jsx)(_v36.Button, {
            onClick: _v1,
            variant: "tertiary",
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
          }), (0, _v1.jsx)(_v36.Button, {
            onClick: _v7,
            variant: "destructive",
            isDisabled: _v5,
            isLoading: _v5,
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
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  function _v52({
    onDelete: _v0,
    onRestore: _v1
  }) {
    let [_v2, _v3] = (0, _v10.useState)(!1),
      _v4 = async () => {
        if (_v1 && !_v2) {
          _v3(!0);
          try {
            await _v1();
          } finally {
            _v3(!1);
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
      children: [(0, _v1.jsx)(_v51.Tooltip, {
        label: (0, _v16.translate)({
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
        children: (0, _v1.jsx)(_v28.IconButton, {
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
          icon: (0, _v1.jsx)(_v31.History, {}),
          variant: "blur",
          size: "xs",
          isDisabled: _v2,
          isLoading: _v2,
          onClick: _v4
        })
      }), (0, _v1.jsx)(_v51.Tooltip, {
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
        children: (0, _v1.jsx)(_v28.IconButton, {
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
          icon: (0, _v1.jsx)(_v15.TrashBin, {}),
          variant: "blur",
          size: "xs",
          isDisabled: _v2,
          onClick: _v0
        })
      })]
    });
  }
  let _v53 = `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 6fr 2fr 3fr 2fr ${(0, _v5.rem)(80)}`;
  function _v54({
    videos: _v0,
    viewerUserId: _v1,
    selectedUris: _v2,
    onToggleSelected: _v3,
    onRestoreVideo: _v4,
    onDeleteVideo: _v5
  }) {
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0.map(_v0 => {
        let _v1,
          _v2 = _v0.filesSize && _v0.filesSize.totalSize > 0 ? (0, _v49.bytesToSize)(_v0.filesSize.totalSize) : "—",
          _v3 = _v0.deletedBy?.uri ? (0, _v50.idFromUri)(_v0.deletedBy.uri) : null,
          _v4 = _v0.modifiedTime ? (_v1 = Math.ceil((new Date(_v0.modifiedTime).getTime() + 0 - Date.now()) / 0)) <= 0 ? (0, _v16.translate)({
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
        return (0, _v1.jsxs)(_v46.ContentRow, {
          listGridColumns: _v53,
          isSelected: !!_v0.uri && _v2.has(_v0.uri),
          onToggleSelected: _v0.uri ? () => _v3(_v0.uri) : void 0,
          children: [(0, _v1.jsx)(_v46.ContentRow.Column, {
            children: (0, _v1.jsx)(_v46.ContentRow.SelectCheckbox, {
              size: "md"
            })
          }), (0, _v1.jsx)(_v46.ContentRow.Column, {
            children: (0, _v1.jsx)(_v47.VideoThumbnail, {
              alt: _v0.name ?? "",
              badgeText: (0, _v48.secondsToDisplay)(_v0.duration),
              isDefaultPicture: _v0.pictures?.defaultPicture,
              thumbnailSrc: _v0.pictures?.sizes[3]?.link
            })
          }), (0, _v1.jsx)(_v46.ContentRow.Column, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              paddingLeft: (0, _v5.rem)(8),
              children: _v0.name
            })
          }), (0, _v1.jsx)(_v46.ContentRow.Column, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v2
            })
          }), (0, _v1.jsx)(_v46.ContentRow.Column, {
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
              children: [(0, _v1.jsx)(_v45.Avatar, {
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
          }), (0, _v1.jsx)(_v46.ContentRow.Column, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4
            })
          }), (0, _v1.jsx)(_v46.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: (0, _v1.jsx)(_v52, {
              onRestore: () => _v4(_v0.uri),
              onDelete: () => _v5(_v0.uri)
            })
          })]
        }, _v0.uri);
      })
    });
  }
  function _v55({
    videos: _v0,
    selectedUris: _v1,
    onToggleSelected: _v2,
    onRestoreVideo: _v3,
    onDeleteVideo: _v4
  }) {
    let _v5 = (0, _v44.useViewer)(),
      _v6 = _v5?.user?.id;
    return (0, _v1.jsx)(_v54, {
      videos: _v0,
      viewerUserId: _v6,
      selectedUris: _v1,
      onToggleSelected: _v2,
      onRestoreVideo: _v3,
      onDeleteVideo: _v4
    });
  }
  function _v56() {
    return (0, _v1.jsxs)(_v46.ContentRow, {
      listGridColumns: _v53,
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
      children: [(0, _v1.jsx)(_v46.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v46.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v46.ContentRow.Column, {
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
      }), (0, _v1.jsx)(_v46.ContentRow.Column, {
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
      }), (0, _v1.jsx)(_v46.ContentRow.Column, {
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
      }), (0, _v1.jsx)(_v46.ContentRow.Column, {
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
      }), (0, _v1.jsx)(_v46.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    });
  }
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ["video.createdTime", "video.deletedBy", "video.deletedBy.name", "video.deletedBy.pictures", "video.deletedBy.uri", "video.duration", "video.filesSize", "video.filesSize.fileSizeType", "video.filesSize.totalSize", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.sizes", "video.pictures.uri", "video.uri"];
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  async function _v62({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v60.measureLatency)("postVideosPermanentDeletion", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/permanent-deletion`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v61.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  function _v65() {
    let [_v0, _v1] = (0, _v10.useState)([]),
      [_v2, _v3] = (0, _v10.useState)(_v20.DEFAULT_RECENTLY_DELETED_SORT),
      [_v4, _v5] = (0, _v10.useState)([]),
      [_v6, _v7] = (0, _v10.useState)(""),
      {
        videos: _v8,
        total: _v9,
        isLoading: _v10,
        isLoadingMore: _v11,
        isDone: _v12,
        loadMore: _v13,
        mutate: _v14
      } = function (_v0, _v1 = []) {
        let _v2 = (0, _v44.useViewer)(),
          _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
          _v4 = !_v2?.teamUser || _v2.teamUser.permissionLevel <= 2,
          _v5 = _v1.length > 0 ? _v1.map(_v0 => _v0.userId).join(",") : void 0,
          {
            data: _v6,
            mutate: _v7,
            setSize: _v8,
            size: _v9
          } = (0, _v57.useGetUserFoldersRootInfinite)(() => _v3 ? {
            where: {
              userId: _v3
            },
            select: _v59,
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
          } = (0, _v58.getInfiniteRequestLoadingState)({
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
      }(_v2, _v4),
      {
        users: _v15,
        isLoadingMore: _v16,
        isLoadingInitialData: _v17,
        isDone: _v18,
        setSize: _v19,
        size: _v20
      } = (0, _v24.useUserTeamMembers)(_v6),
      [_v21, _v22] = (0, _v10.useState)(new Set()),
      _v23 = (0, _v10.useCallback)(() => _v22(new Set()), []),
      _v24 = (0, _v10.useCallback)(() => _v22(new Set(_v8.map(_v0 => _v0.uri).filter(_v0 => !!_v0))), [_v8]),
      _v25 = (0, _v10.useCallback)(_v0 => {
        _v22(_v0 => {
          let _v1 = new Set(_v0);
          return _v1.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v1;
        });
      }, []),
      _v26 = (0, _v1.jsx)(_v22.CheckboxItemCount, {
        hasCheckbox: _v9 > 0,
        isLoading: _v10,
        onChange: () => {
          _v21.size ? _v23() : _v24();
        },
        selectedItemCount: _v21.size,
        subtitle: !!_v9 && (_v4.length > 0 ? (0, _v16.translate)({
          count: _v9,
          singular: "{NUM_ITEMS} result",
          plural: "{NUM_ITEMS} results",
          replacements: {
            NUM_ITEMS: _v9
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
          count: _v9,
          singular: "{NUM_ITEMS} item",
          plural: "{NUM_ITEMS} items",
          replacements: {
            NUM_ITEMS: _v9
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
      }),
      _v27 = (0, _v1.jsx)(_v21.FilterSortBar, {
        checkbox: _v26,
        sort: _v2,
        setSort: _v3,
        sortOptions: _v20.RECENTLY_DELETED_SORT_OPTIONS,
        layout: "LIST_LAYOUT",
        setLayout: () => {},
        isLayoutToggleDisabled: !0,
        shouldHideLayoutSelector: !0,
        children: (0, _v1.jsx)(_v23.DeletedByFilter, {
          filter: _v4,
          options: _v15,
          setFilter: _v5,
          searchQuery: _v6,
          setSearchQuery: _v7,
          isLoadingMore: _v16,
          isLoadingInitialData: _v17,
          isDone: _v18,
          onLoadMore: () => _v19(_v20 + 1)
        })
      }),
      _v28 = (0, _v25.useNotification)(),
      _v29 = (0, _v13.useToast)(),
      _v30 = function () {
        let {
          baseUrl: _v0,
          jwt: _v1,
          xVimeoPage: _v2,
          locale: _v3
        } = (0, _v63.useGctlConfig)();
        return async _v0 => (await (0, _v64.postVideosRestore)({
          variables: {
            uris: _v0
          },
          baseUrl: _v0,
          headers: {
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        })).data;
      }(),
      _v31 = async _v0 => {
        let _v1;
        try {
          _v1 = await _v30(_v0);
        } catch {
          _v28({
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
        let _v2 = _v1.filter(_v0 => "restored" === _v0.status),
          _v3 = _v1.filter(_v0 => "not_found" === _v0.status || "error" === _v0.status).length;
        if (_v3 > 0) _v28({
          content: (0, _v16.translate)({
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
          let _v0 = _v8.find(_v0 => _v0.uri === _v2[0].uri)?.name,
            _v1 = _v2[0].folderUri,
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
          _v29({
            title: (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v2, _v1 && (0, _v1.jsx)("button", {
                onClick: () => window.location.href = (0, _v26.getFolderPageUriFromApiUri)(_v1),
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
            }),
            variant: "success",
            icon: (0, _v1.jsx)(_v14.CircleCheckFilled, {
              color: "status-positive-primary"
            }),
            isClosable: !0
          });
        } else _v2.length > 1 && _v28({
          content: (0, _v16.translate)({
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
        _v23(), await _v14();
      },
      _v32 = function () {
        let {
          baseUrl: _v0,
          jwt: _v1,
          xVimeoPage: _v2,
          locale: _v3
        } = (0, _v63.useGctlConfig)();
        return async _v0 => (await _v62({
          variables: {
            uris: _v0
          },
          baseUrl: _v0,
          headers: {
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        })).data;
      }(),
      _v33 = async () => {
        let _v0;
        try {
          _v0 = await _v32(_v0);
        } catch {
          _v28({
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
        _v2 > 0 ? _v28({
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
        }) : _v1 > 0 && _v28({
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
        }), _v1([]), _v23(), await _v14();
      };
    return (0, _v1.jsx)(_v18.Page, {
      children: (0, _v1.jsxs)(_v18.Page.Main, {
        children: [(0, _v1.jsxs)(_v18.Page.StickyTop, {
          children: [(0, _v1.jsx)(_v19.PageHeader, {
            bottomBar: _v27,
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
          }), (_v10 || _v4.length > 0 || _v9 > 0) && (0, _v1.jsx)(_v56, {})]
        }), _v10 && (0, _v1.jsx)(_v11.Flex, {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          children: (0, _v1.jsx)(_v12.Spinner, {})
        }), !_v10 && (_v9 > 0 ? (0, _v1.jsx)(_v55, {
          videos: _v8,
          selectedUris: _v21,
          onToggleSelected: _v25,
          onRestoreVideo: _v0 => _v31([_v0]),
          onDeleteVideo: _v0 => _v1([_v0])
        }) : (0, _v1.jsx)(_v35, {
          icon: (0, _v1.jsx)(_v15.TrashBin, {
            width: "lg",
            height: "lg",
            color: "text-primary"
          }),
          title: _v4.length > 0 ? (0, _v16.translate)({
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
        })), !_v12 && !_v11 && (0, _v1.jsx)(_v17.InfiniteScrollTrigger, {
          isLoading: !!_v11,
          onLoadMore: _v13
        }), (0, _v1.jsx)(_v43, {
          isOpen: _v0.length > 0,
          onClose: () => _v1([]),
          onConfirm: _v33,
          numItemsToDelete: _v0.length,
          title: _v0.length > 1 ? void 0 : _v8.find(_v0 => _v0.uri === _v0[0])?.name
        }), (0, _v1.jsx)(_v34, {
          numSelected: _v21.size,
          onDelete: () => _v1(Array.from(_v21)),
          onRestore: () => _v31(Array.from(_v21)),
          onClear: _v23
        }), (0, _v1.jsx)("div", {
          id: _v33
        })]
      })
    });
  }
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = () => {
    let _v0 = (0, _v44.useViewer)(),
      {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v9.useOrionSettings)();
    if (_v2 || !_v0) return null;
    if (!_v1.has_recently_deleted) return (0, _v1.jsx)(_v66.ErrorPage, {
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
      }), (0, _v1.jsx)(_v65, {})]
    });
  };
  _v69.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v68.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v67.HomeSideNavContent, {}),
    children: _v0
  }), (0, _v7.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !1
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v69], 0);
}