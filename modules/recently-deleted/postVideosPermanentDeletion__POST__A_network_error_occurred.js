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
    _v14 = _v0.i(0);
  async function _v15({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v13.measureLatency)("postVideosPermanentDeletion", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/permanent-deletion`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v12.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/permanent-deletion${(0, _v12.serializeQuery)(_v0)}`, _v15({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v11.default.env.STORYBOOK && (0, _v12.assignMswData)(_v18, {
    endpoint: "/videos/permanent-deletion",
    method: "POST"
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
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = "recently-deleted-bulk-toast";
  function _v37({
    numSelected: _v0,
    onDelete: _v1,
    onRestore: _v2,
    onClear: _v3
  }) {
    let [_v4, _v5] = (0, _v7.useState)(!1),
      {
        colorMode: _v6
      } = (0, _v32.useColorMode)(),
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
      _v8 = "dark" === _v6 ? _v29.LightMode : _v29.DarkMode;
    return (0, _v1.jsx)(_v8, {
      children: (0, _v1.jsx)(_v35.BulkActionsBar.ActionBar, {
        isActive: _v0 > 0,
        targetElementId: _v36,
        children: (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          gap: "0.5rem",
          children: [(0, _v1.jsx)(_v31.Text, {
            color: "text-primary",
            variant: "body-lg",
            marginRight: "3rem",
            children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v35.BulkActionsBar.ActionButton, {
            icon: (0, _v1.jsx)(_v34.History, {}),
            label: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v35.BulkActionsBar.ActionButton, {
            icon: (0, _v1.jsx)(_v10.TrashBin, {}),
            label: (0, _v20.translate)({
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
            "aria-label": (0, _v20.translate)({
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
  var _v38 = _v0.i(0);
  function _v39({
    icon: _v0,
    title: _v1,
    description: _v2
  }) {
    return (0, _v1.jsxs)(_v8.Flex, {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      w: "100%",
      h: "100%",
      children: [_v0, (0, _v1.jsx)(_v31.Text, {
        variant: "heading-lg",
        margin: `${(0, _v38.rem)(16)} 0`,
        children: _v1
      }), (0, _v1.jsx)(_v31.Text, {
        variant: "body-lg",
        color: "text-secondary",
        maxW: (0, _v38.rem)(300),
        children: _v2
      })]
    });
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  function _v47({
    isOpen: _v0,
    onClose: _v1,
    onConfirm: _v2,
    numItemsToDelete: _v3,
    title: _v4
  }) {
    let [_v5, _v6] = (0, _v7.useState)(!1),
      _v7 = async () => {
        _v6(!0);
        try {
          await _v2();
        } finally {
          _v6(!1);
        }
      },
      _v8 = _v4 && 1 === _v3 ? (0, _v20.translate)({
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
      }) : (0, _v20.translate)({
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
    return (0, _v1.jsxs)(_v41.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v46.ModalOverlay, {}), (0, _v1.jsxs)(_v43.ModalContent, {
        borderRadius: "md",
        children: [(0, _v1.jsx)(_v45.ModalHeader, {
          padding: "lg",
          fontSize: "heading-md",
          color: "text-primary",
          children: (0, _v20.translate)({
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
        }), (0, _v1.jsx)(_v42.ModalBody, {
          padding: "0.5rem 1.5rem",
          fontSize: "body-md",
          color: "text-primary",
          children: _v8
        }), (0, _v1.jsxs)(_v44.ModalFooter, {
          border: "0",
          padding: "lg",
          children: [(0, _v1.jsx)(_v40.Button, {
            onClick: _v1,
            variant: "tertiary",
            children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v40.Button, {
            onClick: _v7,
            variant: "destructive",
            isDisabled: _v5,
            isLoading: _v5,
            children: (0, _v20.translate)({
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
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  function _v56({
    onDelete: _v0,
    onRestore: _v1
  }) {
    let [_v2, _v3] = (0, _v7.useState)(!1),
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
    return (0, _v1.jsxs)(_v8.Flex, {
      gap: (0, _v38.rem)(4),
      opacity: 0,
      _groupHover: {
        opacity: 1
      },
      transition: "opacity 0.2s ease",
      children: [(0, _v1.jsx)(_v55.Tooltip, {
        label: (0, _v20.translate)({
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
          "aria-label": (0, _v20.translate)({
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
          isDisabled: _v2,
          isLoading: _v2,
          onClick: _v4
        })
      }), (0, _v1.jsx)(_v55.Tooltip, {
        label: (0, _v20.translate)({
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
          "aria-label": (0, _v20.translate)({
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
          icon: (0, _v1.jsx)(_v10.TrashBin, {}),
          variant: "blur",
          size: "xs",
          isDisabled: _v2,
          onClick: _v0
        })
      })]
    });
  }
  let _v57 = `${(0, _v38.rem)(32)} ${(0, _v38.rem)(150)} 6fr 2fr 3fr 2fr ${(0, _v38.rem)(80)}`;
  function _v58({
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
          _v2 = _v0.filesSize && _v0.filesSize.totalSize > 0 ? (0, _v53.bytesToSize)(_v0.filesSize.totalSize) : "—",
          _v3 = _v0.deletedBy?.uri ? (0, _v54.idFromUri)(_v0.deletedBy.uri) : null,
          _v4 = _v0.modifiedTime ? (_v1 = Math.ceil((new Date(_v0.modifiedTime).getTime() + 0 - Date.now()) / 0)) <= 0 ? (0, _v20.translate)({
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
          }) : (0, _v20.translate)({
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
        return (0, _v1.jsxs)(_v50.ContentRow, {
          listGridColumns: _v57,
          isSelected: !!_v0.uri && _v2.has(_v0.uri),
          onToggleSelected: _v0.uri ? () => _v3(_v0.uri) : void 0,
          children: [(0, _v1.jsx)(_v50.ContentRow.Column, {
            children: (0, _v1.jsx)(_v50.ContentRow.SelectCheckbox, {
              size: "md"
            })
          }), (0, _v1.jsx)(_v50.ContentRow.Column, {
            children: (0, _v1.jsx)(_v51.VideoThumbnail, {
              alt: _v0.name ?? "",
              badgeText: (0, _v52.secondsToDisplay)(_v0.duration),
              isDefaultPicture: _v0.pictures?.defaultPicture,
              thumbnailSrc: _v0.pictures?.sizes[3]?.link
            })
          }), (0, _v1.jsx)(_v50.ContentRow.Column, {
            children: (0, _v1.jsx)(_v31.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              paddingLeft: (0, _v38.rem)(8),
              children: _v0.name
            })
          }), (0, _v1.jsx)(_v50.ContentRow.Column, {
            children: (0, _v1.jsx)(_v31.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v2
            })
          }), (0, _v1.jsx)(_v50.ContentRow.Column, {
            children: _v3 && _v3 === _v1 ? (0, _v1.jsx)(_v31.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v20.translate)({
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
            }) : _v0.deletedBy ? (0, _v1.jsxs)(_v8.Flex, {
              alignItems: "center",
              gap: (0, _v38.rem)(8),
              children: [(0, _v1.jsx)(_v49.Avatar, {
                size: "sm",
                alt: (0, _v20.translate)({
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
              }), (0, _v1.jsx)(_v31.Text, {
                variant: "body-md",
                color: "text-secondary",
                noOfLines: 1,
                children: _v0.deletedBy.name
              })]
            }) : (0, _v1.jsx)(_v31.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: "—"
            })
          }), (0, _v1.jsx)(_v50.ContentRow.Column, {
            children: (0, _v1.jsx)(_v31.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4
            })
          }), (0, _v1.jsx)(_v50.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: (0, _v1.jsx)(_v56, {
              onRestore: () => _v4(_v0.uri),
              onDelete: () => _v5(_v0.uri)
            })
          })]
        }, _v0.uri);
      })
    });
  }
  function _v59({
    videos: _v0,
    selectedUris: _v1,
    onToggleSelected: _v2,
    onRestoreVideo: _v3,
    onDeleteVideo: _v4
  }) {
    let _v5 = (0, _v48.useViewer)(),
      _v6 = _v5?.user?.id;
    return (0, _v1.jsx)(_v58, {
      videos: _v0,
      viewerUserId: _v6,
      selectedUris: _v1,
      onToggleSelected: _v2,
      onRestoreVideo: _v3,
      onDeleteVideo: _v4
    });
  }
  function _v60() {
    return (0, _v1.jsxs)(_v50.ContentRow, {
      listGridColumns: _v57,
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
      children: [(0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v31.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v20.translate)({
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
      }), (0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v31.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v20.translate)({
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
      }), (0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v31.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v20.translate)({
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
      }), (0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v31.Text, {
          variant: "label-sm",
          color: "text-secondary",
          children: (0, _v20.translate)({
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
      }), (0, _v1.jsx)(_v50.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    });
  }
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = ["video.createdTime", "video.deletedBy", "video.deletedBy.name", "video.deletedBy.pictures", "video.deletedBy.uri", "video.duration", "video.filesSize", "video.filesSize.fileSizeType", "video.filesSize.totalSize", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.sizes", "video.pictures.uri", "video.uri"];
  function _v64() {
    let [_v0, _v1] = (0, _v7.useState)([]),
      [_v2, _v3] = (0, _v7.useState)(_v24.DEFAULT_RECENTLY_DELETED_SORT),
      [_v4, _v5] = (0, _v7.useState)([]),
      [_v6, _v7] = (0, _v7.useState)(""),
      {
        videos: _v8,
        total: _v9,
        isLoading: _v10,
        isLoadingMore: _v11,
        isDone: _v12,
        loadMore: _v13,
        mutate: _v14
      } = function (_v0, _v1 = []) {
        let _v2 = (0, _v48.useViewer)(),
          _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
          _v4 = _v1.length > 0 ? _v1.map(_v0 => _v0.userId).join(",") : void 0,
          {
            data: _v5,
            mutate: _v6,
            setSize: _v7,
            size: _v8
          } = (0, _v61.useGetUserFoldersRootInfinite)(() => _v3 ? {
            where: {
              userId: _v3
            },
            select: _v63,
            query: {
              filter: "video",
              includeOnlyDeletedClips: !0,
              perPage: 25,
              sort: _v0.type,
              direction: _v0.direction,
              clipDeletedByFilters: _v4
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4"
            }
          } : null),
          _v9 = (0, _v7.useMemo)(() => _v5?.flatMap(_v0 => _v0?.data ?? []).flatMap(_v0 => _v0.video ? [_v0.video] : []) ?? [], [_v5]),
          {
            isDone: _v10,
            isLoadingInitialData: _v11,
            isLoadingMore: _v12
          } = (0, _v62.getInfiniteRequestLoadingState)({
            data: _v5,
            itemsPerPage: 25,
            size: _v8
          });
        return {
          videos: _v9,
          total: _v5?.[0]?.total ?? 0,
          isLoading: _v11,
          isLoadingMore: _v12,
          isDone: _v10,
          loadMore: () => _v7(_v8 + 1),
          mutate: _v6
        };
      }(_v2, _v4),
      {
        users: _v15,
        isLoadingMore: _v16,
        isLoadingInitialData: _v17,
        isDone: _v18,
        setSize: _v19,
        size: _v20
      } = (0, _v28.useUserTeamMembers)(_v6),
      [_v21, _v22] = (0, _v7.useState)(new Set()),
      _v23 = (0, _v7.useCallback)(() => _v22(new Set()), []),
      _v24 = (0, _v7.useCallback)(() => _v22(new Set(_v8.map(_v0 => _v0.uri).filter(_v0 => !!_v0))), [_v8]),
      _v25 = (0, _v7.useCallback)(_v0 => {
        _v22(_v0 => {
          let _v1 = new Set(_v0);
          return _v1.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v1;
        });
      }, []),
      _v26 = (0, _v1.jsx)(_v26.CheckboxItemCount, {
        hasCheckbox: _v9 > 0,
        isLoading: _v10,
        onChange: () => {
          _v21.size ? _v23() : _v24();
        },
        selectedItemCount: _v21.size,
        subtitle: !!_v9 && (_v4.length > 0 ? (0, _v20.translate)({
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
        }) : (0, _v20.translate)({
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
      _v27 = (0, _v1.jsx)(_v25.FilterSortBar, {
        checkbox: _v26,
        sort: _v2,
        setSort: _v3,
        sortOptions: _v24.RECENTLY_DELETED_SORT_OPTIONS,
        layout: "LIST_LAYOUT",
        setLayout: () => {},
        isLayoutToggleDisabled: !0,
        shouldHideLayoutSelector: !0,
        children: (0, _v1.jsx)(_v27.DeletedByFilter, {
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
      [_v28] = (0, _v19.usePostVideosRestore)(),
      _v29 = async _v0 => {
        await _v28({
          variables: {
            uris: _v0
          }
        }), _v23(), await _v14();
      },
      [_v30] = _v18(),
      _v31 = async () => {
        await _v30({
          variables: {
            uris: _v0
          }
        }), _v1([]), _v23(), await _v14();
      };
    return (0, _v1.jsx)(_v22.Page, {
      children: (0, _v1.jsxs)(_v22.Page.Main, {
        children: [(0, _v1.jsxs)(_v22.Page.StickyTop, {
          children: [(0, _v1.jsx)(_v23.PageHeader, {
            bottomBar: _v27,
            title: (0, _v20.translate)({
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
          }), (_v10 || _v4.length > 0 || _v9 > 0) && (0, _v1.jsx)(_v60, {})]
        }), _v10 && (0, _v1.jsx)(_v8.Flex, {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          children: (0, _v1.jsx)(_v9.Spinner, {})
        }), !_v10 && (_v9 > 0 ? (0, _v1.jsx)(_v59, {
          videos: _v8,
          selectedUris: _v21,
          onToggleSelected: _v25,
          onRestoreVideo: _v0 => _v29([_v0]),
          onDeleteVideo: _v0 => _v1([_v0])
        }) : (0, _v1.jsx)(_v39, {
          icon: (0, _v1.jsx)(_v10.TrashBin, {
            width: "lg",
            height: "lg",
            color: "text-primary"
          }),
          title: _v4.length > 0 ? (0, _v20.translate)({
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
          }) : (0, _v20.translate)({
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
          description: (0, _v20.translate)({
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
        })), !_v12 && !_v11 && (0, _v1.jsx)(_v21.InfiniteScrollTrigger, {
          isLoading: !!_v11,
          onLoadMore: _v13
        }), (0, _v1.jsx)(_v47, {
          isOpen: _v0.length > 0,
          onClose: () => _v1([]),
          onConfirm: _v31,
          numItemsToDelete: _v0.length,
          title: _v0.length > 1 ? void 0 : _v8.find(_v0 => _v0.uri === _v0[0])?.name
        }), (0, _v1.jsx)(_v37, {
          numSelected: _v21.size,
          onDelete: () => _v1(Array.from(_v21)),
          onRestore: () => _v29(Array.from(_v21)),
          onClear: _v23
        }), (0, _v1.jsx)("div", {
          id: _v36
        })]
      })
    });
  }
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  let _v68 = () => {
    let _v0 = (0, _v48.useViewer)(),
      {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v6.useOrionSettings)();
    return _v2 || !_v0 ? null : _v1.has_recently_deleted ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: (0, _v5.translate)({
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
      }), (0, _v1.jsx)(_v64, {})]
    }) : (0, _v1.jsx)(_v65.ErrorPage, {
      error: new _v3.ResourceNotFoundError()
    });
  };
  _v68.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v67.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v66.HomeSideNavContent, {}),
    children: _v0
  }), (0, _v4.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !1
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v68], 0);
}