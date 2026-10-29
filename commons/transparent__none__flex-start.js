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
    _v26 = _v0.i(0);
  let _v27 = ({
    label: _v0,
    panelProps: _v1,
    children: _v2
  }) => (0, _v1.jsx)(_v25.AccordionItem, {
    bg: "transparent",
    border: "none",
    w: "100%",
    children: ({
      isExpanded: _v0
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v24.AccordionButton, {
        borderRadius: "sm",
        gap: "xs",
        justifyContent: "flex-start",
        pl: "0",
        pr: "xs",
        py: "xs",
        children: [(0, _v1.jsx)(_v21.ChevronDownSmall, {
          "aria-hidden": !0,
          boxSize: "2xs",
          color: "text-tertiary",
          flexShrink: 0,
          transform: _v0 ? void 0 : "rotate(-90deg)",
          transition: "transform 150ms ease"
        }), (0, _v1.jsx)(_v16.Text, {
          color: "text-tertiary",
          variant: "heading-2xs",
          children: _v0
        })]
      }), (0, _v1.jsx)(_v26.AccordionPanel, {
        pb: "0",
        ..._v1,
        children: _v2
      })]
    })
  });
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ({
    onCancel: _v0,
    onDiscard: _v1
  }) => (0, _v1.jsxs)(_v28.Modal, {
    isOpen: !0,
    onClose: _v0,
    children: [(0, _v1.jsx)(_v15.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
      borderRadius: "md",
      children: [(0, _v1.jsx)(_v31.ModalHeader, {
        color: "text-primary",
        fontSize: "heading-md",
        padding: "lg",
        children: (0, _v22.translate)({
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
      }), (0, _v1.jsx)(_v29.ModalBody, {
        color: "text-primary",
        fontSize: "body-md",
        padding: "0.5rem 1.5rem",
        children: (0, _v22.translate)({
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
      }), (0, _v1.jsxs)(_v14.ModalFooter, {
        border: "0",
        padding: "lg",
        children: [(0, _v1.jsx)(_v6.Button, {
          onClick: _v0,
          variant: "tertiary",
          children: (0, _v22.translate)({
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
        }), (0, _v1.jsx)(_v6.Button, {
          onClick: _v1,
          variant: "destructive",
          children: (0, _v22.translate)({
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
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = (0, _v18.rem)(32),
    _v37 = ({
      source: _v0,
      target: _v1
    }) => (0, _v1.jsxs)(_v7.Flex, {
      align: "center",
      gap: "lg",
      w: "100%",
      children: [(0, _v1.jsx)(_v7.Flex, {
        align: "center",
        flex: "1",
        minH: _v36,
        minW: 0,
        children: _v0
      }), (0, _v1.jsx)(_v35.ArrowRight, {
        "aria-hidden": !0,
        boxSize: "2xs",
        color: "text-primary",
        flexShrink: 0
      }), (0, _v1.jsx)(_v7.Flex, {
        align: "center",
        flex: "1",
        gap: "xs",
        minH: _v36,
        minW: 0,
        children: _v1
      })]
    }),
    _v38 = ({
      field: _v0,
      value: _v1,
      onChange: _v2
    }) => (0, _v1.jsx)(_v27, {
      label: _v0.label,
      panelProps: {
        pt: "xs",
        px: "0"
      },
      children: (0, _v1.jsx)(_v37, {
        source: !0 === _v0.isMultiline ? (0, _v1.jsx)(_v34.Textarea, {
          "aria-label": _v0.sourceAriaLabel,
          isDisabled: !0,
          name: `${_v0.path}-source`,
          resize: "none",
          rows: 3,
          value: _v0.sourceValue,
          _disabled: {
            opacity: 1,
            cursor: "not-allowed"
          }
        }) : (0, _v1.jsx)(_v33.Input, {
          "aria-label": _v0.sourceAriaLabel,
          isDisabled: !0,
          name: `${_v0.path}-source`,
          value: _v0.sourceValue,
          _disabled: {
            opacity: 1,
            cursor: "not-allowed"
          }
        }),
        target: !0 === _v0.isMultiline ? (0, _v1.jsx)(_v34.Textarea, {
          "aria-label": _v0.targetAriaLabel,
          maxLength: _v0.maxLength,
          name: _v0.path,
          onChange: _v0 => _v2(_v0.path, _v0.target.value),
          placeholder: _v0.sourceValue,
          resize: "none",
          rows: 3,
          value: _v1
        }) : (0, _v1.jsx)(_v33.Input, {
          "aria-label": _v0.targetAriaLabel,
          maxLength: _v0.maxLength,
          name: _v0.path,
          onChange: _v0 => _v2(_v0.path, _v0.target.value),
          placeholder: _v0.sourceValue,
          value: _v1
        })
      })
    });
  var _v39 = _v0.i(0);
  let _v40 = ({
    sourceLocale: _v0,
    isTranslating: _v1,
    onCancel: _v2,
    onConfirm: _v3
  }) => {
    let _v4 = (0, _v23.useLocale)();
    return (0, _v1.jsxs)(_v28.Modal, {
      closeOnEsc: !_v1,
      closeOnOverlayClick: !_v1,
      isOpen: !0,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v15.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
        children: [(0, _v1.jsx)(_v31.ModalHeader, {
          pb: "md",
          children: (0, _v22.translate)({
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
        }), (0, _v1.jsx)(_v29.ModalBody, {
          p: "lg",
          children: (0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: "lg",
            w: "100%",
            children: [(0, _v1.jsx)(_v16.Text, {
              color: "text-primary",
              variant: "body-md",
              children: (0, _v22.translate)({
                singular: "Generate a new AI translation from the latest {LANGUAGE} content? Your published version will remain live until you publish the new draft.",
                replacements: {
                  LANGUAGE: (0, _v39.getLocaleLabel)(_v0, _v4)
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
            }), (0, _v1.jsx)(_v16.Text, {
              color: "text-tertiary",
              variant: "body-sm",
              children: (0, _v22.translate)({
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
        }), (0, _v1.jsxs)(_v14.ModalFooter, {
          borderColor: "stroke",
          borderStyle: "solid",
          borderTopWidth: "1px",
          py: "md",
          children: [(0, _v1.jsx)(_v6.Button, {
            isDisabled: _v1,
            onClick: _v2,
            variant: "tertiary",
            children: (0, _v22.translate)({
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
          }), (0, _v1.jsx)(_v6.Button, {
            "data-testid": "confirm-translate-again-button",
            isLoading: _v1,
            onClick: _v3,
            variant: "primary",
            children: (0, _v22.translate)({
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
  };
  var _v41 = _v0.i(0);
  let _v42 = (0, _v18.rem)(0),
    _v43 = (0, _v18.rem)(265),
    _v44 = {
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
    let _v14 = (0, _v23.useLocale)(),
      [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, _v18] = (0, _v2.useState)(!1),
      [_v19, _v20] = (0, _v2.useState)(() => (_v5.find(_v0 => !_v0.isDisabled) ?? _v5[0])?.id),
      _v21 = _v5.find(_v0 => _v0.id === _v19),
      _v22 = (0, _v2.useMemo)(() => _v4.some(_v0 => {
        let _v1 = _v6[_v0]?.leaves ?? _v41.EMPTY_LEAVES;
        return !(0, _v41.areLeavesEqual)((0, _v41.getWorkingLeaves)(_v1, _v7[_v0]), _v1);
      }), [_v4, _v6, _v7]),
      _v23 = (0, _v2.useMemo)(() => (0, _v41.getWorkingLeaves)(_v6[_v2]?.leaves, _v7[_v2]), [_v6, _v7, _v2]),
      _v24 = (0, _v2.useMemo)(() => !(0, _v41.areLeavesEqual)(_v23, _v6[_v2]?.leaves ?? _v41.EMPTY_LEAVES), [_v6, _v2, _v23]),
      _v25 = (0, _v2.useMemo)(() => (0, _v41.getLocaleStatus)(_v6[_v2], _v24), [_v6, _v2, _v24]),
      _v26 = (0, _v2.useCallback)((_v0, _v1) => _v8(_v2, _v0, _v1), [_v8, _v2]),
      _v27 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v4.some(_v0 => {
          if (_v0 === _v2) return !1;
          let _v1 = _v6[_v0]?.leaves;
          return void 0 === _v1 || !(0, _v41.areLeavesEqual)((0, _v41.getWorkingLeaves)(_v1, _v7[_v0]), _v1);
        });
        _v9(_v2, _v23, _v0).then(_v0 => {
          _v0 && !_v1 && _v0();
        });
      }, [_v9, _v0, _v2, _v23, _v4, _v6, _v7]),
      _v28 = (0, _v2.useCallback)(() => {
        if (!_v12 && !_v11) {
          if (_v22) return void _v18(!0);
          _v0();
        }
      }, [_v12, _v11, _v22, _v0]),
      _v29 = (0, _v2.useCallback)(() => {
        _v10().then(_v0 => {
          _v0 && _v16(!1);
        });
      }, [_v10]),
      _v30 = (0, _v1.jsxs)(_v7.Flex, {
        align: "center",
        flex: "1",
        gap: "3",
        minW: 0,
        px: "lg",
        py: "md",
        children: [_v13 ? (0, _v1.jsx)(_v6.Button, {
          isDisabled: _v12,
          isLoading: _v11,
          leftIcon: (0, _v1.jsx)(_v19.AiSparkles, {}),
          onClick: () => _v16(!0),
          variant: "secondary",
          children: (0, _v22.translate)({
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
        }) : null, (0, _v1.jsxs)(_v7.Flex, {
          align: "center",
          flex: "1",
          gap: "3",
          justify: "flex-end",
          minW: 0,
          children: [(0, _v1.jsx)(_v6.Button, {
            isDisabled: _v12 || _v11,
            onClick: _v28,
            variant: "tertiary",
            children: (0, _v22.translate)({
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
          }), (0, _v1.jsxs)(_v8.Menu, {
            placement: "top-end",
            children: [(0, _v1.jsx)(_v9.MenuButton, {
              as: _v6.Button,
              isDisabled: !_v24 || _v11,
              isLoading: _v12,
              rightIcon: (0, _v1.jsx)(_v21.ChevronDownSmall, {}),
              variant: "primary",
              children: (0, _v22.translate)({
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
            }), (0, _v1.jsxs)(_v11.MenuList, {
              children: [(0, _v1.jsx)(_v10.MenuItem, {
                onClick: () => _v27(!0),
                children: (0, _v22.translate)({
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
              }), (0, _v1.jsx)(_v10.MenuItem, {
                onClick: () => _v27(!1),
                children: (0, _v22.translate)({
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
      children: [(0, _v1.jsxs)(_v12.ModalAdvanced, {
        blockScrollOnMount: !1,
        isOpen: !0,
        onClose: _v28,
        children: [(0, _v1.jsx)(_v15.ModalOverlay, {}), (0, _v1.jsxs)(_v12.ModalAdvancedContent, {
          maxWidth: _v42,
          width: _v42,
          children: [(0, _v1.jsx)(_v12.ModalAdvancedHeader, {
            description: (0, _v22.translate)({
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
            title: (0, _v22.translate)({
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
          }), (0, _v1.jsx)(_v13.ModalCloseButton, {
            isDisabled: _v11 || _v12
          }), (0, _v1.jsxs)(_v12.ModalAdvancedBody, {
            borderBottomWidth: "0",
            children: [(0, _v1.jsxs)(_v12.ModalAdvancedSidebar, {
              maxW: _v43,
              minW: _v43,
              w: _v43,
              children: [(0, _v1.jsx)(_v16.Text, {
                color: "text-secondary",
                pb: "sm",
                variant: "body-sm",
                children: (0, _v22.translate)({
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
                let _v1 = (0, _v1.jsx)(_v12.ModalAdvancedSidebarItem, {
                  isActive: _v19 === _v0.id,
                  isDisabled: _v0.isDisabled,
                  onClick: () => {
                    _v0.isDisabled || _v20(_v0.id);
                  },
                  children: _v0.label
                });
                return _v0.isDisabled ? (0, _v1.jsx)(_v17.Tooltip, {
                  label: (0, _v22.translate)({
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
                  children: (0, _v1.jsx)(_v5.Box, {
                    as: "span",
                    display: "block",
                    w: "100%",
                    children: _v1
                  })
                }, _v0.id) : (0, _v1.jsx)(_v5.Box, {
                  as: "span",
                  display: "block",
                  w: "100%",
                  children: _v1
                }, _v0.id);
              })]
            }), (0, _v1.jsx)(_v12.ModalAdvancedPanel, {
              children: (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                flex: "1",
                gap: "md",
                minH: 0,
                w: "100%",
                children: [(0, _v1.jsx)(_v7.Flex, {
                  backgroundColor: "fill-component",
                  borderRadius: "md",
                  flexShrink: 0,
                  px: "3",
                  py: "xs",
                  w: "100%",
                  children: (0, _v1.jsx)(_v37, {
                    source: (0, _v1.jsx)(_v16.Text, {
                      color: "text-primary",
                      noOfLines: 1,
                      variant: "heading-xs",
                      children: (0, _v22.translate)({
                        singular: "{LANGUAGE} (original)",
                        replacements: {
                          LANGUAGE: (0, _v39.getLocaleLabel)(_v1, _v14)
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
                      children: [(0, _v1.jsxs)(_v8.Menu, {
                        children: [(0, _v1.jsx)(_v9.MenuButton, {
                          as: _v6.Button,
                          isDisabled: _v12,
                          rightIcon: (0, _v1.jsx)(_v21.ChevronDownSmall, {}),
                          size: "sm",
                          variant: "tertiary",
                          children: (0, _v39.getLocaleLabel)(_v2, _v14)
                        }), (0, _v1.jsx)(_v11.MenuList, {
                          children: _v4.map(_v0 => (0, _v1.jsx)(_v10.MenuItem, {
                            onClick: () => _v3(_v0),
                            children: (0, _v1.jsxs)(_v7.Flex, {
                              align: "center",
                              gap: "sm",
                              justify: "space-between",
                              w: "100%",
                              children: [(0, _v1.jsx)(_v16.Text, {
                                as: "span",
                                variant: "body-md",
                                children: (0, _v39.getLocaleLabel)(_v0, _v14)
                              }), _v0 === _v2 ? (0, _v1.jsx)(_v20.Checkmark, {
                                boxSize: (0, _v18.rem)(20)
                              }) : null]
                            })
                          }, _v0))
                        })]
                      }), (0, _v1.jsx)(_v4.Badge, {
                        size: "sm",
                        variant: _v44[_v25],
                        children: (0, _v41.getLocaleStatusLabel)(_v25)
                      })]
                    })
                  })
                }), (0, _v1.jsx)(_v5.Box, {
                  flex: "1",
                  minH: 0,
                  overflowY: "auto",
                  w: "100%",
                  children: void 0 === _v21 ? null : (0, _v1.jsxs)(_v2.Fragment, {
                    children: [_v21.fields.length > 0 ? (0, _v1.jsx)(_v3.Accordion, {
                      allowMultiple: !0,
                      defaultIndex: [0, 1],
                      w: "100%",
                      children: _v21.fields.map(_v0 => (0, _v1.jsx)(_v38, {
                        field: _v0,
                        onChange: _v26,
                        value: _v23[_v0.path]?.value ?? ""
                      }, _v0.path))
                    }) : null, void 0 !== _v21.groups && _v21.groups.length > 0 ? (0, _v1.jsx)(_v3.Accordion, {
                      allowMultiple: !0,
                      defaultIndex: [0, 1],
                      display: "flex",
                      flexDirection: "column",
                      gap: "md",
                      w: "100%",
                      children: _v21.groups.map(_v0 => (0, _v1.jsx)(_v27, {
                        label: _v0.label,
                        panelProps: {
                          pt: "sm",
                          px: "md"
                        },
                        children: (0, _v1.jsx)(_v3.Accordion, {
                          allowMultiple: !0,
                          defaultIndex: _v0.fields.map((_v0, _v1) => _v1),
                          display: "flex",
                          flexDirection: "column",
                          gap: "md",
                          w: "100%",
                          children: _v0.fields.map(_v0 => (0, _v1.jsx)(_v38, {
                            field: _v0,
                            onChange: _v26,
                            value: _v23[_v0.path]?.value ?? ""
                          }, _v0.path))
                        })
                      }, _v0.id))
                    }) : null]
                  }, _v21.id)
                })]
              })
            })]
          }), (0, _v1.jsxs)(_v14.ModalFooter, {
            alignItems: "stretch",
            gap: "0",
            p: "0",
            children: [(0, _v1.jsx)(_v5.Box, {
              borderColor: "stroke",
              borderRightWidth: "1px",
              borderStyle: "solid",
              flexShrink: 0,
              w: _v43
            }), _v30]
          })]
        })]
      }), _v15 ? (0, _v1.jsx)(_v40, {
        isTranslating: _v11,
        onCancel: () => _v16(!1),
        onConfirm: _v29,
        sourceLocale: _v1
      }) : null, _v17 ? (0, _v1.jsx)(_v32, {
        onCancel: () => _v18(!1),
        onDiscard: _v0
      }) : null]
    });
  }], 0);
}