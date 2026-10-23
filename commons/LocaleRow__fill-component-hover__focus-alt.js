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
  }], 0);
  var _v22 = _v0.i(0),
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
  let _v35 = ({
    label: _v0,
    panelProps: _v1,
    children: _v2
  }) => (0, _v1.jsx)(_v33.AccordionItem, {
    bg: "transparent",
    border: "none",
    w: "100%",
    children: ({
      isExpanded: _v0
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v32.AccordionButton, {
        borderRadius: "sm",
        gap: "xs",
        justifyContent: "flex-start",
        pl: "0",
        pr: "xs",
        py: "xs",
        children: [(0, _v1.jsx)(_v31.ChevronDownSmall, {
          "aria-hidden": !0,
          boxSize: "2xs",
          color: "text-tertiary",
          flexShrink: 0,
          transform: _v0 ? void 0 : "rotate(-90deg)",
          transition: "transform 150ms ease"
        }), (0, _v1.jsx)(_v9.Text, {
          color: "text-tertiary",
          variant: "heading-2xs",
          children: _v0
        })]
      }), (0, _v1.jsx)(_v34.AccordionPanel, {
        pb: "0",
        ..._v1,
        children: _v2
      })]
    })
  });
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = ({
    onCancel: _v0,
    onDiscard: _v1
  }) => (0, _v1.jsxs)(_v36.Modal, {
    isOpen: !0,
    onClose: _v0,
    children: [(0, _v1.jsx)(_v29.ModalOverlay, {}), (0, _v1.jsxs)(_v38.ModalContent, {
      borderRadius: "md",
      children: [(0, _v1.jsx)(_v39.ModalHeader, {
        color: "text-primary",
        fontSize: "heading-md",
        padding: "lg",
        children: (0, _v18.translate)({
          singular: "Discard changes?",
          dictionary: {
            es: {
              singular: "¿Descartar cambios?"
            },
            "de-DE": {
              singular: "Änderungen verwerfen?"
            },
            "fr-FR": {
              singular: "Abandonner les modifications ? "
            },
            "ja-JP": {
              singular: "変更を破棄しますか？"
            },
            "ko-KR": {
              singular: "변경 사항을 폐기하시겠습니까?"
            },
            "pt-BR": {
              singular: "Descartar alterações?"
            },
            "zh-CN": {
              singular: "要放弃更改吗？"
            }
          }
        })
      }), (0, _v1.jsx)(_v37.ModalBody, {
        color: "text-primary",
        fontSize: "body-md",
        padding: "0.5rem 1.5rem",
        children: (0, _v18.translate)({
          singular: "If you continue, all unsaved changes will be permanently removed and cannot be recovered.",
          dictionary: {
            es: {
              singular: "Si continúa, todos los cambios no guardados se eliminarán de forma permanente y no podrán recuperarse."
            },
            "de-DE": {
              singular: "Wenn Sie fortfahren, werden alle ungespeicherten Änderungen dauerhaft entfernt und können nicht wiederhergestellt werden."
            },
            "fr-FR": {
              singular: "Si vous continuez, toutes les modifications non enregistrées seront définitivement supprimées et ne pourront pas être récupérées."
            },
            "ja-JP": {
              singular: "続行すると、保存されていないすべての変更が完全に削除され、復元できなくなります。"
            },
            "ko-KR": {
              singular: "계속하면 저장되지 않은 모든 변경 사항이 영구적으로 제거되며 복구할 수 없습니다."
            },
            "pt-BR": {
              singular: "Se você continuar, todas as alterações não salvas serão removidas permanentemente e não poderão ser recuperadas."
            },
            "zh-CN": {
              singular: "如果继续，所有未保存的更改将被永久删除且无法恢复。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v28.ModalFooter, {
        border: "0",
        padding: "lg",
        children: [(0, _v1.jsx)(_v25.Button, {
          onClick: _v0,
          variant: "tertiary",
          children: (0, _v18.translate)({
            singular: "Keep editing",
            dictionary: {
              es: {
                singular: "Seguir editando"
              },
              "de-DE": {
                singular: "Weiter bearbeiten"
              },
              "fr-FR": {
                singular: "Poursuivre le montage"
              },
              "ja-JP": {
                singular: "編集を続ける"
              },
              "ko-KR": {
                singular: "계속 편집"
              },
              "pt-BR": {
                singular: "Continuar editando"
              },
              "zh-CN": {
                singular: "继续编辑"
              }
            }
          })
        }), (0, _v1.jsx)(_v25.Button, {
          onClick: _v1,
          variant: "destructive",
          children: (0, _v18.translate)({
            singular: "Discard",
            dictionary: {
              es: {
                singular: "Descartar"
              },
              "de-DE": {
                singular: "Verwerfen"
              },
              "fr-FR": {
                singular: "Ignorer"
              },
              "ja-JP": {
                singular: "破棄する"
              },
              "ko-KR": {
                singular: "폐기"
              },
              "pt-BR": {
                singular: "Descartar"
              },
              "zh-CN": {
                singular: "丢弃"
              }
            }
          })
        })]
      })]
    })]
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = (0, _v11.rem)(32),
    _v45 = ({
      source: _v0,
      target: _v1
    }) => (0, _v1.jsxs)(_v3.Flex, {
      align: "center",
      gap: "lg",
      w: "100%",
      children: [(0, _v1.jsx)(_v3.Flex, {
        align: "center",
        flex: "1",
        minH: _v44,
        minW: 0,
        children: _v0
      }), (0, _v1.jsx)(_v43.ArrowRight, {
        "aria-hidden": !0,
        boxSize: "2xs",
        color: "text-primary",
        flexShrink: 0
      }), (0, _v1.jsx)(_v3.Flex, {
        align: "center",
        flex: "1",
        gap: "xs",
        minH: _v44,
        minW: 0,
        children: _v1
      })]
    }),
    _v46 = ({
      field: _v0,
      value: _v1,
      onChange: _v2
    }) => (0, _v1.jsx)(_v35, {
      label: _v0.label,
      panelProps: {
        pt: "xs",
        px: "0"
      },
      children: (0, _v1.jsx)(_v45, {
        source: !0 === _v0.isMultiline ? (0, _v1.jsx)(_v42.Textarea, {
          "aria-label": _v0.sourceAriaLabel,
          isDisabled: !0,
          resize: "none",
          rows: 5,
          value: _v0.sourceValue
        }) : (0, _v1.jsx)(_v41.Input, {
          "aria-label": _v0.sourceAriaLabel,
          isDisabled: !0,
          value: _v0.sourceValue
        }),
        target: !0 === _v0.isMultiline ? (0, _v1.jsx)(_v42.Textarea, {
          "aria-label": _v0.targetAriaLabel,
          maxLength: _v0.maxLength,
          onChange: _v0 => _v2(_v0.path, _v0.target.value),
          placeholder: _v0.sourceValue,
          resize: "none",
          rows: 5,
          value: _v1
        }) : (0, _v1.jsx)(_v41.Input, {
          "aria-label": _v0.targetAriaLabel,
          maxLength: _v0.maxLength,
          onChange: _v0 => _v2(_v0.path, _v0.target.value),
          placeholder: _v0.sourceValue,
          value: _v1
        })
      })
    }),
    _v47 = ({
      sourceLocale: _v0,
      isTranslating: _v1,
      onCancel: _v2,
      onConfirm: _v3
    }) => {
      let _v4 = (0, _v19.useLocale)();
      return (0, _v1.jsxs)(_v36.Modal, {
        closeOnEsc: !_v1,
        closeOnOverlayClick: !_v1,
        isOpen: !0,
        onClose: _v2,
        children: [(0, _v1.jsx)(_v29.ModalOverlay, {}), (0, _v1.jsxs)(_v38.ModalContent, {
          children: [(0, _v1.jsx)(_v39.ModalHeader, {
            children: (0, _v18.translate)({
              singular: "Translate again",
              dictionary: {
                es: {
                  singular: "Volver a traducir"
                },
                "de-DE": {
                  singular: "Erneut übersetzen"
                },
                "fr-FR": {
                  singular: "Traduire à nouveau"
                },
                "ja-JP": {
                  singular: "再翻訳"
                },
                "ko-KR": {
                  singular: "다시 번역"
                },
                "pt-BR": {
                  singular: "Traduzir novamente"
                },
                "zh-CN": {
                  singular: "重新翻译"
                }
              }
            })
          }), (0, _v1.jsx)(_v37.ModalBody, {
            children: (0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              gap: "lg",
              w: "100%",
              children: [(0, _v1.jsx)(_v9.Text, {
                color: "text-primary",
                variant: "body-md",
                children: (0, _v18.translate)({
                  singular: "Generate a new AI translation from the latest {LANGUAGE} content? Your published version will remain live until you publish the new draft.",
                  replacements: {
                    LANGUAGE: (0, _v21.getLocaleLabel)(_v0, _v4)
                  },
                  dictionary: {
                    es: {
                      singular: "¿Generar una nueva traducción con IA a partir del contenido más reciente en {LANGUAGE}? Su versión publicada permanecerá activa hasta que publique el nuevo borrador."
                    },
                    "de-DE": {
                      singular: "Neue KI-Übersetzung aus dem aktuellen {LANGUAGE}-Inhalt generieren? Ihre veröffentlichte Version bleibt online, bis Sie den neuen Entwurf veröffentlichen."
                    },
                    "fr-FR": {
                      singular: "Générer une nouvelle traduction avec l’IA à partir du contenu {LANGUAGE} le plus récent ?  Votre version publiée restera en ligne jusqu’à ce que vous publiiez le nouveau brouillon."
                    },
                    "ja-JP": {
                      singular: "最新の{LANGUAGE}コンテンツから新しいAI翻訳を生成しますか？新しい下書きを公開するまで、公開中のバージョンはそのまま表示されます。"
                    },
                    "ko-KR": {
                      singular: "{LANGUAGE}의 최신 콘텐츠에서 새 AI 번역을 생성하시겠습니까? 새 초안을 게시할 때까지 현재 게시된 버전은 계속 유지됩니다."
                    },
                    "pt-BR": {
                      singular: "Gerar uma nova tradução por IA a partir do conteúdo mais recente em {LANGUAGE}? Sua versão publicada permanecerá ativa até que você publique o novo rascunho."
                    },
                    "zh-CN": {
                      singular: "要根据最新的 {LANGUAGE} 内容生成新的 AI 翻译吗？在您发布新草稿之前，已发布的版本将继续保留。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v9.Text, {
                color: "text-tertiary",
                variant: "body-sm",
                children: (0, _v18.translate)({
                  singular: "AI doesn’t always get it right. Review translations before publishing.",
                  dictionary: {
                    es: {
                      singular: "La IA no siempre acierta. Revise las traducciones antes de publicarlas."
                    },
                    "de-DE": {
                      singular: "KI ist nicht immer korrekt. Überprüfen Sie Übersetzungen, bevor Sie sie veröffentlichen."
                    },
                    "fr-FR": {
                      singular: "L’IA n’a pas toujours raison. Vérifiez les traductions avant de publier."
                    },
                    "ja-JP": {
                      singular: "AIは常に正確とは限りません。公開する前に翻訳を確認してください。"
                    },
                    "ko-KR": {
                      singular: "AI가 항상 정확한 번역을 제공하는 것은 아닙니다. 게시하기 전에 번역을 검토하세요."
                    },
                    "pt-BR": {
                      singular: "A IA nem sempre acerta. Revise as traduções antes de publicar."
                    },
                    "zh-CN": {
                      singular: "人工智能并非总是准确。发布前请审核翻译。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsxs)(_v28.ModalFooter, {
            children: [(0, _v1.jsx)(_v25.Button, {
              isDisabled: _v1,
              onClick: _v2,
              variant: "tertiary",
              children: (0, _v18.translate)({
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
            }), (0, _v1.jsx)(_v25.Button, {
              "data-testid": "confirm-translate-again-button",
              isLoading: _v1,
              onClick: _v3,
              variant: "primary",
              children: (0, _v18.translate)({
                singular: "Generate",
                dictionary: {
                  es: {
                    singular: "Generar"
                  },
                  "de-DE": {
                    singular: "Generieren"
                  },
                  "fr-FR": {
                    singular: "Générer"
                  },
                  "ja-JP": {
                    singular: "生成"
                  },
                  "ko-KR": {
                    singular: "생성"
                  },
                  "pt-BR": {
                    singular: "Gerar"
                  },
                  "zh-CN": {
                    singular: "生成"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v48 = (0, _v11.rem)(980),
    _v49 = (0, _v11.rem)(265),
    _v50 = {
      unsaved: "default",
      inProgress: "warning",
      savedDraft: "info",
      published: "success",
      unpublished: "info"
    };
  _v0.s(["LocalizationModal", 0, ({
    onClose: _v0,
    sourceLocale: _v1,
    targetLocale: _v2,
    onTargetLocaleChange: _v3,
    selectableLocales: _v4,
    sections: _v5,
    savedLocales: _v6,
    edits: _v7,
    onFieldChange: _v8,
    onSave: _v9,
    onTranslateAgain: _v10,
    isTranslating: _v11,
    isSaving: _v12,
    isAiEnabled: _v13
  }) => {
    let _v14 = (0, _v19.useLocale)(),
      [_v15, _v16] = (0, _v22.useState)(!1),
      [_v17, _v18] = (0, _v22.useState)(!1),
      [_v19, _v20] = (0, _v22.useState)(() => (_v5.find(_v0 => !_v0.isDisabled) ?? _v5[0])?.id),
      _v21 = _v5.find(_v0 => _v0.id === _v19),
      _v22 = (0, _v22.useMemo)(() => _v4.some(_v0 => {
        let _v1 = _v6[_v0]?.leaves ?? _v20.EMPTY_LEAVES;
        return !(0, _v20.areLeavesEqual)((0, _v20.getWorkingLeaves)(_v1, _v7[_v0]), _v1);
      }), [_v4, _v6, _v7]),
      _v23 = (0, _v22.useMemo)(() => (0, _v20.getWorkingLeaves)(_v6[_v2]?.leaves, _v7[_v2]), [_v6, _v7, _v2]),
      _v24 = (0, _v22.useMemo)(() => {
        let _v0 = _v6[_v2];
        return (0, _v20.getLocaleStatus)(_v0, !(0, _v20.areLeavesEqual)(_v23, _v0?.leaves ?? _v20.EMPTY_LEAVES));
      }, [_v6, _v2, _v23]),
      _v25 = (0, _v22.useCallback)((_v0, _v1) => _v8(_v2, _v0, _v1), [_v8, _v2]),
      _v26 = (0, _v22.useCallback)(_v0 => {
        _v9(_v2, _v23, _v0);
      }, [_v9, _v2, _v23]),
      _v27 = (0, _v22.useCallback)(() => {
        if (!_v12 && !_v11) {
          if (_v22) return void _v18(!0);
          _v0();
        }
      }, [_v12, _v11, _v22, _v0]),
      _v28 = (0, _v22.useCallback)(() => {
        _v10().then(_v0 => {
          _v0 && _v16(!1);
        });
      }, [_v10]),
      _v29 = (0, _v1.jsxs)(_v3.Flex, {
        align: "center",
        flex: "1",
        gap: "3",
        minW: 0,
        px: "lg",
        py: "md",
        children: [_v13 ? (0, _v1.jsx)(_v25.Button, {
          isDisabled: _v12,
          isLoading: _v11,
          leftIcon: (0, _v1.jsx)(_v30.AiSparkles, {}),
          onClick: () => _v16(!0),
          variant: "secondary",
          children: (0, _v18.translate)({
            singular: "Translate again",
            dictionary: {
              es: {
                singular: "Volver a traducir"
              },
              "de-DE": {
                singular: "Erneut übersetzen"
              },
              "fr-FR": {
                singular: "Traduire à nouveau"
              },
              "ja-JP": {
                singular: "再翻訳"
              },
              "ko-KR": {
                singular: "다시 번역"
              },
              "pt-BR": {
                singular: "Traduzir novamente"
              },
              "zh-CN": {
                singular: "重新翻译"
              }
            }
          })
        }) : null, (0, _v1.jsxs)(_v3.Flex, {
          align: "center",
          flex: "1",
          gap: "3",
          justify: "flex-end",
          minW: 0,
          children: [(0, _v1.jsx)(_v25.Button, {
            isDisabled: _v12 || _v11,
            onClick: _v27,
            variant: "tertiary",
            children: (0, _v18.translate)({
              singular: "Discard changes",
              dictionary: {
                es: {
                  singular: "Descartar los cambios"
                },
                "de-DE": {
                  singular: "Änderungen verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer les modifications"
                },
                "ja-JP": {
                  singular: "変更を破棄"
                },
                "ko-KR": {
                  singular: "변경사항 폐기"
                },
                "pt-BR": {
                  singular: "Descartar alterações"
                },
                "zh-CN": {
                  singular: "放弃更改"
                }
              }
            })
          }), (0, _v1.jsxs)(_v5.Menu, {
            placement: "top-end",
            children: [(0, _v1.jsx)(_v6.MenuButton, {
              as: _v25.Button,
              isLoading: _v12,
              rightIcon: (0, _v1.jsx)(_v31.ChevronDownSmall, {}),
              variant: "primary",
              children: (0, _v18.translate)({
                singular: "Save changes",
                dictionary: {
                  es: {
                    singular: "Guardar cambios"
                  },
                  "de-DE": {
                    singular: "Änderungen speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer les modifications"
                  },
                  "ja-JP": {
                    singular: "変更を保存"
                  },
                  "ko-KR": {
                    singular: "변경 사항 저장"
                  },
                  "pt-BR": {
                    singular: "Salvar alterações"
                  },
                  "zh-CN": {
                    singular: "保存更改"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v8.MenuList, {
              children: [(0, _v1.jsx)(_v7.MenuItem, {
                onClick: () => _v26(!0),
                children: (0, _v18.translate)({
                  singular: "Save and publish",
                  dictionary: {
                    es: {
                      singular: "Guardar y publicar"
                    },
                    "de-DE": {
                      singular: "Speichern und veröffentlichen"
                    },
                    "fr-FR": {
                      singular: "Enregistrer et publier"
                    },
                    "ja-JP": {
                      singular: "保存して公開"
                    },
                    "ko-KR": {
                      singular: "저장 및 게시"
                    },
                    "pt-BR": {
                      singular: "Salvar e publicar"
                    },
                    "zh-CN": {
                      singular: "保存并发布"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v7.MenuItem, {
                onClick: () => _v26(!1),
                children: (0, _v18.translate)({
                  singular: "Save as draft",
                  dictionary: {
                    es: {
                      singular: "Guardar como borrador"
                    },
                    "de-DE": {
                      singular: "Als Entwurf speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer comme brouillon"
                    },
                    "ja-JP": {
                      singular: "下書きとして保存"
                    },
                    "ko-KR": {
                      singular: "초안으로 저장"
                    },
                    "pt-BR": {
                      singular: "Salvar como rascunho"
                    },
                    "zh-CN": {
                      singular: "保存为草稿"
                    }
                  }
                })
              })]
            })]
          })]
        })]
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v26.ModalAdvanced, {
        blockScrollOnMount: !1,
        isOpen: !0,
        onClose: _v27,
        children: [(0, _v1.jsx)(_v29.ModalOverlay, {}), (0, _v1.jsxs)(_v26.ModalAdvancedContent, {
          maxWidth: _v48,
          width: _v48,
          children: [(0, _v1.jsx)(_v26.ModalAdvancedHeader, {
            description: (0, _v18.translate)({
              singular: "Save your draft, then preview and publish when ready.",
              dictionary: {
                es: {
                  singular: "Guarde su borrador; luego prévisualícelo y publíquelo cuando esté listo."
                },
                "de-DE": {
                  singular: "Speichern Sie Ihren Entwurf, dann Vorschau anzeigen und veröffentlichen, wenn Sie bereit sind."
                },
                "fr-FR": {
                  singular: "Enregistrez votre brouillon, puis prévisualisez-le et publiez-le lorsque vous êtes prêt."
                },
                "ja-JP": {
                  singular: "下書きを保存してから、準備ができたらプレビューして公開してください。"
                },
                "ko-KR": {
                  singular: "초안을 저장한 후 준비가 되면 미리보기 및 게시하세요."
                },
                "pt-BR": {
                  singular: "Salve seu rascunho, depois pré-visualize e publique quando estiver pronto."
                },
                "zh-CN": {
                  singular: "请先保存草稿，然后在准备就绪时预览并发布。"
                }
              }
            }),
            title: (0, _v18.translate)({
              singular: "Translate page content",
              dictionary: {
                es: {
                  singular: "Traducir el contenido de la página"
                },
                "de-DE": {
                  singular: "Seiteninhalt übersetzen"
                },
                "fr-FR": {
                  singular: "Traduire le contenu de la page"
                },
                "ja-JP": {
                  singular: "ページの内容を翻訳"
                },
                "ko-KR": {
                  singular: "페이지 콘텐츠 번역"
                },
                "pt-BR": {
                  singular: "Traduzir conteúdo da página"
                },
                "zh-CN": {
                  singular: "翻译页面内容"
                }
              }
            })
          }), (0, _v1.jsx)(_v27.ModalCloseButton, {
            isDisabled: _v11 || _v12
          }), (0, _v1.jsxs)(_v26.ModalAdvancedBody, {
            borderBottomWidth: "0",
            children: [(0, _v1.jsxs)(_v26.ModalAdvancedSidebar, {
              maxW: _v49,
              minW: _v49,
              w: _v49,
              children: [(0, _v1.jsx)(_v9.Text, {
                color: "text-secondary",
                pb: "sm",
                variant: "body-sm",
                children: (0, _v18.translate)({
                  singular: "Sections",
                  dictionary: {
                    es: {
                      singular: "Secciones"
                    },
                    "de-DE": {
                      singular: "Abschnitte"
                    },
                    "ja-JP": {
                      singular: "セクション"
                    },
                    "ko-KR": {
                      singular: "섹션"
                    },
                    "pt-BR": {
                      singular: "Seções"
                    },
                    "zh-CN": {
                      singular: "部分"
                    }
                  }
                })
              }), _v5.map(_v0 => {
                let _v1 = (0, _v1.jsx)(_v26.ModalAdvancedSidebarItem, {
                  isActive: _v19 === _v0.id,
                  isDisabled: _v0.isDisabled,
                  onClick: () => {
                    _v0.isDisabled || _v20(_v0.id);
                  },
                  children: _v0.label
                });
                return _v0.isDisabled ? (0, _v1.jsx)(_v10.Tooltip, {
                  label: (0, _v18.translate)({
                    singular: "This section has no text to translate",
                    dictionary: {
                      es: {
                        singular: "Esta sección no tiene texto para traducir"
                      },
                      "de-DE": {
                        singular: "Dieser Abschnitt enthält keinen Text zum Übersetzen"
                      },
                      "fr-FR": {
                        singular: "Cette section ne contient aucun texte à traduire"
                      },
                      "ja-JP": {
                        singular: "このセクションには翻訳するテキストがありません"
                      },
                      "ko-KR": {
                        singular: "이 섹션에는 번역할 텍스트가 없습니다"
                      },
                      "pt-BR": {
                        singular: "Esta seção não tem texto para traduzir"
                      },
                      "zh-CN": {
                        singular: "本部分没有可翻译的文本"
                      }
                    }
                  }),
                  children: (0, _v1.jsx)(_v2.Box, {
                    as: "span",
                    display: "block",
                    w: "100%",
                    children: _v1
                  })
                }, _v0.id) : (0, _v1.jsx)(_v2.Box, {
                  as: "span",
                  display: "block",
                  w: "100%",
                  children: _v1
                }, _v0.id);
              })]
            }), (0, _v1.jsx)(_v26.ModalAdvancedPanel, {
              children: (0, _v1.jsxs)(_v3.Flex, {
                direction: "column",
                flex: "1",
                gap: "md",
                minH: 0,
                w: "100%",
                children: [(0, _v1.jsx)(_v3.Flex, {
                  backgroundColor: "fill-component",
                  borderRadius: "md",
                  flexShrink: 0,
                  pl: "3",
                  py: "xs",
                  w: "100%",
                  children: (0, _v1.jsx)(_v45, {
                    source: (0, _v1.jsx)(_v9.Text, {
                      color: "text-primary",
                      noOfLines: 1,
                      variant: "heading-xs",
                      children: (0, _v18.translate)({
                        singular: "{LANGUAGE} (original)",
                        replacements: {
                          LANGUAGE: (0, _v21.getLocaleLabel)(_v1, _v14)
                        },
                        dictionary: {
                          "de-DE": {
                            singular: "{LANGUAGE} (Original)"
                          },
                          "ja-JP": {
                            singular: "{LANGUAGE}（原文）"
                          },
                          "ko-KR": {
                            singular: "{LANGUAGE} (원본)"
                          },
                          "zh-CN": {
                            singular: "{LANGUAGE} (原文)"
                          }
                        }
                      })
                    }),
                    target: (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsxs)(_v5.Menu, {
                        children: [(0, _v1.jsx)(_v6.MenuButton, {
                          as: _v25.Button,
                          isDisabled: _v12,
                          rightIcon: (0, _v1.jsx)(_v31.ChevronDownSmall, {}),
                          size: "sm",
                          variant: "tertiary",
                          children: (0, _v21.getLocaleLabel)(_v2, _v14)
                        }), (0, _v1.jsx)(_v8.MenuList, {
                          children: _v4.map(_v0 => (0, _v1.jsx)(_v7.MenuItem, {
                            onClick: () => _v3(_v0),
                            children: (0, _v21.getLocaleLabel)(_v0, _v14)
                          }, _v0))
                        })]
                      }), (0, _v1.jsx)(_v24.Badge, {
                        size: "sm",
                        variant: _v50[_v24],
                        children: (0, _v20.getLocaleStatusLabel)(_v24)
                      })]
                    })
                  })
                }), (0, _v1.jsx)(_v2.Box, {
                  flex: "1",
                  minH: 0,
                  overflowY: "auto",
                  w: "100%",
                  children: void 0 === _v21 ? null : (0, _v1.jsxs)(_v22.Fragment, {
                    children: [_v21.fields.length > 0 ? (0, _v1.jsx)(_v23.Accordion, {
                      allowMultiple: !0,
                      defaultIndex: [0, 1],
                      w: "100%",
                      children: _v21.fields.map(_v0 => (0, _v1.jsx)(_v46, {
                        field: _v0,
                        onChange: _v25,
                        value: _v23[_v0.path]?.value ?? ""
                      }, _v0.path))
                    }) : null, void 0 !== _v21.groups && _v21.groups.length > 0 ? (0, _v1.jsx)(_v23.Accordion, {
                      allowMultiple: !0,
                      defaultIndex: [0, 1],
                      display: "flex",
                      flexDirection: "column",
                      gap: "md",
                      w: "100%",
                      children: _v21.groups.map(_v0 => (0, _v1.jsx)(_v35, {
                        label: _v0.label,
                        panelProps: {
                          pt: "sm",
                          px: "md"
                        },
                        children: (0, _v1.jsx)(_v23.Accordion, {
                          allowMultiple: !0,
                          defaultIndex: _v0.fields.map((_v0, _v1) => _v1),
                          display: "flex",
                          flexDirection: "column",
                          gap: "md",
                          w: "100%",
                          children: _v0.fields.map(_v0 => (0, _v1.jsx)(_v46, {
                            field: _v0,
                            onChange: _v25,
                            value: _v23[_v0.path]?.value ?? ""
                          }, _v0.path))
                        })
                      }, _v0.id))
                    }) : null]
                  }, _v21.id)
                })]
              })
            })]
          }), (0, _v1.jsxs)(_v28.ModalFooter, {
            alignItems: "stretch",
            gap: "0",
            p: "0",
            children: [(0, _v1.jsx)(_v2.Box, {
              borderColor: "stroke",
              borderRightWidth: "1px",
              borderStyle: "solid",
              flexShrink: 0,
              w: _v49
            }), _v29]
          })]
        })]
      }), _v15 ? (0, _v1.jsx)(_v47, {
        isTranslating: _v11,
        onCancel: () => _v16(!1),
        onConfirm: _v28,
        sourceLocale: _v1
      }) : null, _v17 ? (0, _v1.jsx)(_v40, {
        onCancel: () => _v18(!1),
        onDiscard: _v0
      }) : null]
    });
  }], 0);
  var _v51 = _v0.i(0);
  _v0.s(["MainLanguageSection", 0, ({
    locales: _v0,
    sourceLocale: _v1,
    onChange: _v2,
    isDisabled: _v3
  }) => {
    let _v4 = (0, _v19.useLocale)(),
      _v5 = (0, _v22.useMemo)(() => _v0.map(_v0 => ({
        label: (0, _v21.getLocaleOptionLabel)(_v0, _v4),
        value: _v0
      })), [_v0, _v4]);
    return (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      gap: "xs",
      w: "100%",
      children: [(0, _v1.jsx)(_v9.Text, {
        color: "text-primary",
        variant: "heading-xs",
        children: (0, _v18.translate)({
          singular: "Main language",
          dictionary: {
            es: {
              singular: "Idioma principal"
            },
            "de-DE": {
              singular: "Hauptsprache"
            },
            "fr-FR": {
              singular: "Langue principale"
            },
            "ja-JP": {
              singular: "メイン言語"
            },
            "ko-KR": {
              singular: "기본 언어"
            },
            "pt-BR": {
              singular: "Idioma principal"
            },
            "zh-CN": {
              singular: "主要语言"
            }
          }
        })
      }), (0, _v1.jsx)(_v51.Select, {
        "data-testid": "main-language-select",
        disabled: _v3,
        items: _v5,
        onValueChange: _v0 => {
          let _v1 = _v0.find(_v0 => _v0 === _v0.value[0]);
          void 0 !== _v1 && _v2(_v1);
        },
        placeholder: (0, _v18.translate)({
          singular: "Select language",
          dictionary: {
            es: {
              singular: "Seleccionar el idioma"
            },
            "de-DE": {
              singular: "Sprache aussuchen"
            },
            "fr-FR": {
              singular: "Sélectionner la langue"
            },
            "ja-JP": {
              singular: "言語を選択"
            },
            "ko-KR": {
              singular: "언어 선택"
            },
            "pt-BR": {
              singular: "Selecione o idioma"
            },
            "zh-CN": {
              singular: "选择语言"
            }
          }
        }),
        value: null == _v1 ? [] : [_v1],
        variant: "withCheck",
        withPortal: !1
      })]
    });
  }], 0);
}