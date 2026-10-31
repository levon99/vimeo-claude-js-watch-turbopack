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
    _v23 = _v0.i(0);
  let _v24 = ["ai", "manual"];
  _v0.s(["AddLocalizationModal", 0, ({
    title: _v0,
    description: _v1,
    aiStartModeDescription: _v2,
    availableLocales: _v3,
    onClose: _v4,
    onConfirm: _v5,
    isTranslating: _v6,
    isAiEnabled: _v7
  }) => {
    let _v8 = (0, _v22.useLocale)(),
      [_v9, _v10] = (0, _v2.useState)(1),
      [_v11, _v12] = (0, _v2.useState)([]),
      [_v13, _v14] = (0, _v2.useState)("ai"),
      _v15 = (0, _v2.useMemo)(() => [{
        value: "ai",
        label: (0, _v21.translate)({
          singular: "Translate with AI",
          dictionary: {
            es: {
              singular: "Traducir con IA"
            },
            "de-DE": {
              singular: "Mit KI übersetzen"
            },
            "fr-FR": {
              singular: "Traduire avec l'IA"
            },
            "ja-JP": {
              singular: "AIで翻訳"
            },
            "ko-KR": {
              singular: "AI로 번역"
            },
            "pt-BR": {
              singular: "Traduzir com IA"
            },
            "zh-CN": {
              singular: "使用 AI 翻译"
            }
          }
        }),
        description: _v2
      }, {
        value: "manual",
        label: (0, _v21.translate)({
          singular: "Translate manually",
          dictionary: {
            es: {
              singular: "Traducir manualmente"
            },
            "de-DE": {
              singular: "Manuell übersetzen"
            },
            "fr-FR": {
              singular: "Traduire manuellement"
            },
            "ja-JP": {
              singular: "手動で翻訳"
            },
            "ko-KR": {
              singular: "수동으로 번역"
            },
            "pt-BR": {
              singular: "Traduzir manualmente"
            },
            "zh-CN": {
              singular: "手动翻译"
            }
          }
        }),
        description: (0, _v21.translate)({
          singular: "Start with empty fields and add your own translations.",
          dictionary: {
            es: {
              singular: "Comience con campos vacíos y agregue sus propias traducciones."
            },
            "de-DE": {
              singular: "Beginnen Sie mit leeren Feldern und fügen Sie Ihre eigenen Übersetzungen hinzu."
            },
            "fr-FR": {
              singular: "Commencez avec des champs vides et ajoutez vos propres traductions."
            },
            "ja-JP": {
              singular: "空のフィールドから始めて、自分の翻訳を追加してください。"
            },
            "ko-KR": {
              singular: "빈 필드로 시작하여 직접 번역을 추가하세요."
            },
            "pt-BR": {
              singular: "Comece com campos vazios e adicione suas próprias traduções."
            },
            "zh-CN": {
              singular: "从空白字段开始并添加您自己的翻译。"
            }
          }
        })
      }], [_v2]),
      _v16 = (0, _v2.useMemo)(() => _v11.length < _v3.length ? [..._v11, null] : _v11, [_v11, _v3.length]),
      _v17 = (0, _v2.useMemo)(() => _v3.map(_v0 => ({
        label: (0, _v23.getLocaleOptionLabel)(_v0, _v8),
        value: _v0
      })), [_v3, _v8]),
      _v18 = (0, _v2.useCallback)(_v0 => _v17.filter(_v0 => _v0.value === _v0 || !_v11.includes(_v0.value)), [_v17, _v11]),
      _v19 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v3.find(_v0 => _v0 === _v1);
        void 0 !== _v2 && _v12(_v0 => {
          let _v1 = [..._v0];
          return _v1[_v0] = _v2, _v1;
        });
      }, [_v3]),
      _v20 = (0, _v2.useCallback)(_v0 => {
        _v12(_v0 => _v0.filter((_v0, _v1) => _v1 !== _v0));
      }, []),
      _v21 = (0, _v2.useCallback)(_v0 => {
        _v24.some(_v0 => _v0 === _v0) && _v14(_v0);
      }, []);
    return (0, _v1.jsxs)(_v7.Modal, {
      closeOnEsc: !_v6,
      closeOnOverlayClick: !_v6,
      isOpen: !0,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v13.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        children: [(0, _v1.jsx)(_v12.ModalHeader, {
          pb: "md",
          children: _v0 ?? (0, _v21.translate)({
            singular: "Add translation",
            dictionary: {
              es: {
                singular: "Agregar traducción"
              },
              "de-DE": {
                singular: "Übersetzung hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter une traduction"
              },
              "ja-JP": {
                singular: "翻訳を追加"
              },
              "ko-KR": {
                singular: "번역 추가"
              },
              "pt-BR": {
                singular: "Adicionar tradução"
              },
              "zh-CN": {
                singular: "添加翻译"
              }
            }
          })
        }), (0, _v1.jsx)(_v9.ModalCloseButton, {
          isDisabled: _v6
        }), (0, _v1.jsx)(_v8.ModalBody, {
          display: "flex",
          flexDirection: "column",
          gap: (0, _v18.rem)(24),
          p: "lg",
          children: 1 === _v9 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v17.Text, {
              color: "text-tertiary",
              variant: "body-md",
              children: _v1
            }), (0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              gap: (0, _v18.rem)(8),
              children: [(0, _v1.jsxs)(_v5.Flex, {
                align: "center",
                gap: (0, _v18.rem)(8),
                children: [(0, _v1.jsx)(_v17.Text, {
                  color: "text-primary",
                  variant: "heading-xs",
                  children: (0, _v21.translate)({
                    singular: "Translations",
                    dictionary: {
                      es: {
                        singular: "Traducciones"
                      },
                      "de-DE": {
                        singular: "Übersetzungen"
                      },
                      "fr-FR": {
                        singular: "Traductions"
                      },
                      "ja-JP": {
                        singular: "翻訳"
                      },
                      "ko-KR": {
                        singular: "번역"
                      },
                      "pt-BR": {
                        singular: "Traduções"
                      },
                      "zh-CN": {
                        singular: "翻译"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v17.Text, {
                  color: "text-secondary",
                  variant: "body-md",
                  children: (0, _v21.translate)({
                    singular: "{COUNT} of {MAX}",
                    replacements: {
                      COUNT: _v11.length,
                      MAX: _v3.length
                    },
                    dictionary: {
                      es: {
                        singular: "{COUNT} de {MAX}"
                      },
                      "de-DE": {
                        singular: "{COUNT} von {MAX}"
                      },
                      "fr-FR": {
                        singular: "{COUNT} sur {MAX}"
                      },
                      "ja-JP": {
                        singular: "{COUNT}／{MAX}"
                      },
                      "ko-KR": {
                        singular: "{COUNT}/{MAX}"
                      },
                      "pt-BR": {
                        singular: "{COUNT} de {MAX}"
                      },
                      "zh-CN": {
                        singular: "{COUNT} / {MAX}"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v5.Flex, {
                direction: "column",
                gap: (0, _v18.rem)(12),
                w: "100%",
                children: _v16.map((_v0, _v1) => (0, _v1.jsxs)(_v5.Flex, {
                  align: "center",
                  gap: (0, _v18.rem)(8),
                  w: "100%",
                  children: [(0, _v1.jsx)(_v3.Box, {
                    flex: "1",
                    minW: 0,
                    children: (0, _v1.jsx)(_v16.Select, {
                      items: _v18(_v0),
                      onValueChange: _v0 => _v19(_v1, _v0.value[0]),
                      placeholder: (0, _v21.translate)({
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
                      value: null == _v0 ? [] : [_v0]
                    })
                  }), (0, _v1.jsx)(_v6.IconButton, {
                    "aria-label": (0, _v21.translate)({
                      singular: "Remove language",
                      dictionary: {
                        es: {
                          singular: "Eliminar idioma"
                        },
                        "de-DE": {
                          singular: "Sprache entfernen"
                        },
                        "fr-FR": {
                          singular: "Supprimer la langue"
                        },
                        "ja-JP": {
                          singular: "言語を削除"
                        },
                        "ko-KR": {
                          singular: "언어 제거"
                        },
                        "pt-BR": {
                          singular: "Remover idioma"
                        },
                        "zh-CN": {
                          singular: "移除语言"
                        }
                      }
                    }),
                    icon: (0, _v1.jsx)(_v20.CloseXSmall, {}),
                    isDisabled: null == _v0,
                    onClick: () => _v20(_v1),
                    variant: "secondary"
                  })]
                }, _v0 ?? "unpicked"))
              })]
            })]
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              gap: (0, _v18.rem)(12),
              w: "100%",
              children: [(0, _v1.jsx)(_v17.Text, {
                color: "text-primary",
                variant: "heading-xs",
                children: (0, _v21.translate)({
                  singular: "How would you like to start?",
                  dictionary: {
                    es: {
                      singular: "¿Cómo le gustaría empezar?"
                    },
                    "de-DE": {
                      singular: "Wie möchten Sie beginnen?"
                    },
                    "fr-FR": {
                      singular: "Comment souhaitez-vous commencer ? "
                    },
                    "ja-JP": {
                      singular: "どのように開始しますか？"
                    },
                    "ko-KR": {
                      singular: "어떤 방식으로 시작하시겠습니까?"
                    },
                    "pt-BR": {
                      singular: "Como você gostaria de começar?"
                    },
                    "zh-CN": {
                      singular: "想如何开始？"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v15.RadioGroup, {
                isDisabled: _v6,
                onChange: _v21,
                value: _v13,
                children: (0, _v1.jsx)(_v5.Flex, {
                  direction: "column",
                  gap: (0, _v18.rem)(12),
                  w: "100%",
                  children: _v15.map(_v0 => (0, _v1.jsx)(_v14.Radio, {
                    borderRadius: "sm",
                    px: (0, _v18.rem)(8),
                    py: (0, _v18.rem)(4),
                    size: "sm",
                    spacing: (0, _v18.rem)(12),
                    value: _v0.value,
                    w: "100%",
                    children: (0, _v1.jsxs)(_v5.Flex, {
                      direction: "column",
                      children: [(0, _v1.jsx)(_v17.Text, {
                        color: "text-primary",
                        variant: "heading-xs",
                        children: _v0.label
                      }), (0, _v1.jsx)(_v17.Text, {
                        color: "text-primary",
                        variant: "body-md",
                        children: _v0.description
                      })]
                    })
                  }, _v0.value))
                })
              })]
            }), (0, _v1.jsx)(_v17.Text, {
              color: "text-tertiary",
              variant: "body-sm",
              children: (0, _v21.translate)({
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
        }), (0, _v1.jsxs)(_v11.ModalFooter, {
          borderColor: "stroke",
          borderStyle: "solid",
          borderTopWidth: "1px",
          py: "md",
          children: [_v7 ? (0, _v1.jsx)(_v17.Text, {
            color: "text-secondary",
            flex: "1",
            variant: "body-md",
            children: (0, _v21.translate)({
              singular: "Step {STEP} of {TOTAL}",
              replacements: {
                STEP: _v9,
                TOTAL: 2
              },
              dictionary: {
                es: {
                  singular: "Paso {STEP} de {TOTAL}"
                },
                "de-DE": {
                  singular: "Schritt {STEP} von {TOTAL}"
                },
                "fr-FR": {
                  singular: "Étape {STEP} sur {TOTAL}"
                },
                "ja-JP": {
                  singular: "ステップ {STEP} / {TOTAL}"
                },
                "ko-KR": {
                  singular: "{TOTAL}단계 중 {STEP}단계"
                },
                "pt-BR": {
                  singular: "Etapa {STEP} de {TOTAL}"
                },
                "zh-CN": {
                  singular: "第 {STEP} 步，共 {TOTAL} 步"
                }
              }
            })
          }) : null, 1 === _v9 && _v7 ? (0, _v1.jsx)(_v4.Button, {
            isDisabled: 0 === _v11.length,
            onClick: () => _v10(2),
            variant: "primary",
            children: (0, _v21.translate)({
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
          }) : null, 1 !== _v9 || _v7 ? null : (0, _v1.jsx)(_v4.Button, {
            "data-testid": "confirm-translation-button",
            isDisabled: 0 === _v11.length,
            isLoading: _v6,
            onClick: () => _v5(_v11, "manual"),
            variant: "primary",
            children: (0, _v21.translate)({
              singular: "Translate manually",
              dictionary: {
                es: {
                  singular: "Traducir manualmente"
                },
                "de-DE": {
                  singular: "Manuell übersetzen"
                },
                "fr-FR": {
                  singular: "Traduire manuellement"
                },
                "ja-JP": {
                  singular: "手動で翻訳"
                },
                "ko-KR": {
                  singular: "수동으로 번역"
                },
                "pt-BR": {
                  singular: "Traduzir manualmente"
                },
                "zh-CN": {
                  singular: "手动翻译"
                }
              }
            })
          }), 2 === _v9 ? (0, _v1.jsx)(_v4.Button, {
            "data-testid": "confirm-translation-button",
            isLoading: _v6,
            leftIcon: "ai" === _v13 ? (0, _v1.jsx)(_v19.AiSparkles, {}) : void 0,
            onClick: () => _v5(_v11, _v13),
            variant: "primary",
            children: "ai" === _v13 ? (0, _v21.translate)({
              singular: "Translate with AI",
              dictionary: {
                es: {
                  singular: "Traducir con IA"
                },
                "de-DE": {
                  singular: "Mit KI übersetzen"
                },
                "fr-FR": {
                  singular: "Traduire avec l'IA"
                },
                "ja-JP": {
                  singular: "AIで翻訳"
                },
                "ko-KR": {
                  singular: "AI로 번역"
                },
                "pt-BR": {
                  singular: "Traduzir com IA"
                },
                "zh-CN": {
                  singular: "使用 AI 翻译"
                }
              }
            }) : (0, _v21.translate)({
              singular: "Translate manually",
              dictionary: {
                es: {
                  singular: "Traducir manualmente"
                },
                "de-DE": {
                  singular: "Manuell übersetzen"
                },
                "fr-FR": {
                  singular: "Traduire manuellement"
                },
                "ja-JP": {
                  singular: "手動で翻訳"
                },
                "ko-KR": {
                  singular: "수동으로 번역"
                },
                "pt-BR": {
                  singular: "Traduzir manualmente"
                },
                "zh-CN": {
                  singular: "手动翻译"
                }
              }
            })
          }) : null]
        })]
      })]
    });
  }]);
}