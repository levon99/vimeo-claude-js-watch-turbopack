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
    _v21 = _v0.i(0);
  _v0.s(["LocaleRow", 0, ({
    locale: _v0,
    savedLocale: _v1,
    isSubmitting: _v2,
    onEdit: _v3,
    onPublishedChange: _v4,
    onRemove: _v5
  }) => {
    let _v6 = (0, _v19.useLocale)(),
      _v7 = _v1?.isPublished ?? !1,
      _v8 = _v1?.isOutOfSync === !0,
      _v9 = (0, _v20.getLocaleStatusLabel)((0, _v20.getLocaleStatus)(_v1, !1));
    return (0, _v1.jsxs)(_v3.Flex, {
      _focusWithin: {
        backgroundColor: "fill-component-hover",
        borderColor: "focus-alt"
      },
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      align: "center",
      backgroundColor: "fill-component",
      border: "1px solid transparent",
      borderRadius: "md",
      cursor: "pointer",
      gap: "xs",
      minH: (0, _v11.rem)(40),
      onClick: _v3,
      pl: "md",
      pr: "sm",
      py: "sm",
      role: "group",
      transition: "background-color 150ms ease, border-color 150ms ease",
      w: "100%",
      children: [(0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        flex: "1",
        minW: 0,
        children: [(0, _v1.jsxs)(_v3.Flex, {
          align: "center",
          gap: (0, _v11.rem)(4),
          minW: 0,
          children: [(0, _v1.jsx)(_v9.Text, {
            color: "text-primary",
            minW: 0,
            noOfLines: 1,
            variant: "body-md",
            children: (0, _v21.getLocaleOptionLabel)(_v0, _v6)
          }), _v8 ? (0, _v1.jsx)(_v15.InfoCircle, {
            boxSize: "2xs",
            color: "status-caution-primary",
            cursor: "pointer",
            tabIndex: 0
          }) : null]
        }), (0, _v1.jsx)(_v9.Text, {
          color: "text-secondary",
          noOfLines: 1,
          variant: "body-sm",
          children: _v8 ? (0, _v18.translate)({
            singular: "{STATUS} · Out of sync",
            replacements: {
              STATUS: _v9
            },
            dictionary: {
              es: {
                singular: "{STATUS} · Desincronizado"
              },
              "de-DE": {
                singular: "{STATUS} · Nicht synchronisiert"
              },
              "fr-FR": {
                singular: "{STATUS} · Non synchronisé"
              },
              "ja-JP": {
                singular: "{STATUS} · 同期されていません"
              },
              "ko-KR": {
                singular: "{STATUS} · 동기화되지 않음"
              },
              "pt-BR": {
                singular: "{STATUS} · Fora de sincronia"
              },
              "zh-CN": {
                singular: "{STATUS} · 不同步"
              }
            }
          }) : _v9
        })]
      }), (0, _v1.jsxs)(_v3.Flex, {
        _focusWithin: {
          opacity: 1
        },
        _groupHover: {
          opacity: 1
        },
        align: "center",
        gap: "xs",
        opacity: 0,
        transition: "opacity 150ms ease",
        children: [(0, _v1.jsx)(_v10.Tooltip, {
          label: (0, _v18.translate)({
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
          }),
          children: (0, _v1.jsx)(_v4.IconButton, {
            "aria-label": (0, _v18.translate)({
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
            }),
            icon: (0, _v1.jsx)(_v13.EditPencil, {}),
            onClick: _v0 => {
              _v0.stopPropagation(), _v3();
            },
            size: "sm",
            variant: "tertiary"
          })
        }), (0, _v1.jsx)(_v2.Box, {
          display: "flex",
          onClick: _v0 => _v0.stopPropagation(),
          children: (0, _v1.jsxs)(_v5.Menu, {
            placement: "top-end",
            children: [(0, _v1.jsx)(_v6.MenuButton, {
              "aria-label": (0, _v18.translate)({
                singular: "more actions",
                dictionary: {
                  es: {
                    singular: "más acciones"
                  },
                  "de-DE": {
                    singular: "Weitere Aktionen"
                  },
                  "fr-FR": {
                    singular: "plus d’actions"
                  },
                  "ja-JP": {
                    singular: "その他の操作"
                  },
                  "ko-KR": {
                    singular: "추가 작업"
                  },
                  "pt-BR": {
                    singular: "mais ações"
                  },
                  "zh-CN": {
                    singular: "更多操作"
                  }
                }
              }),
              as: _v4.IconButton,
              icon: (0, _v1.jsx)(_v14.EllipsisH, {}),
              size: "sm",
              variant: "tertiary"
            }), (0, _v1.jsxs)(_v8.MenuList, {
              children: [(0, _v1.jsx)(_v7.MenuItem, {
                icon: _v7 ? (0, _v1.jsx)(_v16.MinusCircle, {}) : (0, _v1.jsx)(_v12.CircleCheck, {}),
                isDisabled: _v2,
                onClick: () => _v4(!_v7),
                children: _v7 ? (0, _v18.translate)({
                  singular: "Unpublish",
                  dictionary: {
                    es: {
                      singular: "Despublicar"
                    },
                    "de-DE": {
                      singular: "Veröffentlichung zurückziehen"
                    },
                    "fr-FR": {
                      singular: "Dépublier"
                    },
                    "ja-JP": {
                      singular: "公開を取り消す"
                    },
                    "ko-KR": {
                      singular: "게시 취소"
                    },
                    "pt-BR": {
                      singular: "Despublicar"
                    },
                    "zh-CN": {
                      singular: "取消发布"
                    }
                  }
                }) : (0, _v18.translate)({
                  singular: "Publish",
                  dictionary: {
                    es: {
                      singular: "Publicar"
                    },
                    "de-DE": {
                      singular: "Veröffentlichen"
                    },
                    "fr-FR": {
                      singular: "Publier"
                    },
                    "ja-JP": {
                      singular: "公開する"
                    },
                    "ko-KR": {
                      singular: "게시"
                    },
                    "pt-BR": {
                      singular: "Publicar"
                    },
                    "zh-CN": {
                      singular: "发布"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v7.MenuItem, {
                icon: (0, _v1.jsx)(_v17.TrashBin, {}),
                onClick: _v5,
                children: (0, _v18.translate)({
                  singular: "Remove translation",
                  dictionary: {
                    es: {
                      singular: "Eliminar traducción"
                    },
                    "de-DE": {
                      singular: "Übersetzung entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer la traduction"
                    },
                    "ja-JP": {
                      singular: "翻訳を削除"
                    },
                    "ko-KR": {
                      singular: "번역 제거"
                    },
                    "pt-BR": {
                      singular: "Remover tradução"
                    },
                    "zh-CN": {
                      singular: "移除翻译"
                    }
                  }
                })
              })]
            })]
          })
        })]
      })]
    });
  }]);
}