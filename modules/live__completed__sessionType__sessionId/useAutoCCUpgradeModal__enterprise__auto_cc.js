{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useAutoCCUpgradeModal", 0, function ({
    canOpen: _v0 = !0,
    composerSessionContext: {
      sessionInfo: {
        value: _v1
      }
    } = (0, _v3.useManager)(_v4.ComposerSessionManager)
  } = {}) {
    let _v2 = !!_v1?.owner?.capabilities?.hasEnterprise;
    return (0, _v7.useUpgradeModal)({
      canOpen: _v0,
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "auto_cc",
        enterpriseTitle: _v2 ? _v5.T_UNLIMITED_AUTO_CC : void 0,
        enterpriseSubtitle: _v2 ? _v5.T_REACH_WIDER_AUDIENCE : _v5.T_ADD_UNLIMITED_AUTOCC,
        customFeaturesList: (0, _v2.jsx)(_v6.UpsellFeaturesList, {
          featuresList: _v2 ? _v5.T_AUTO_CC_UPGRADE_MODAL_FEATURES_LIST_ENTERPRISE : _v5.T_AUTO_CC_UPGRADE_MODAL_FEATURES_LIST
        })
      },
      tracking: {
        params: {},
        paywallTracking: {
          paywallTrigger: "live_event_auto_cc_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      }
    });
  }], 0);
  var _v8 = _v0.i(0),
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
    _v21 = ((_v1 = _v21 || {})[_v1.Limit = 1] = "Limit", _v1);
  let _v22 = {
    1: (0, _v20.T_MAX_AUTO_CC_KEYWORDS_COUNT)(_v19.MAX_AUTO_CC_KEYWORD_COUNT)
  };
  _v0.s(["AutoCcKeywords", 0, function ({
    keywords: _v0 = [],
    isLoading: _v1,
    isDisabled: _v2,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v8.useState)(""),
      [_v6, _v7] = (0, _v8.useState)(null),
      _v8 = (0, _v8.useMemo)(() => new Set(_v0), [_v0]),
      _v9 = !!(_v2 || _v1),
      _v10 = (0, _v8.useCallback)(_v0 => {
        let _v1 = [..._v0],
          _v2 = _v1.indexOf(_v0);
        _v1.splice(_v2, 1), _v3(_v1);
      }, [_v0, _v3]),
      _v11 = (0, _v8.useCallback)(() => {
        let _v0 = _v4.split(",").filter(_v0 => "" !== _v0.trim() && !_v8.has(_v0));
        if (_v8.size + _v0.length >= _v19.MAX_AUTO_CC_KEYWORD_COUNT) return _v7(1);
        _v0.forEach(_v0 => _v8.add(_v0)), _v3([..._v0, ..._v0]), _v5("");
      }, [_v0, _v3, _v8, _v4]),
      _v12 = (0, _v8.useCallback)(_v0 => {
        _v5(_v0.target.value.trim());
      }, []),
      _v13 = (0, _v8.useCallback)(_v0 => {
        "Enter" === _v0.key && _v11();
      }, [_v11]);
    return (0, _v2.jsxs)(_v9.Flex, {
      direction: "column",
      rowGap: (0, _v10.rem)(8),
      "data-testid": "auto-cc-keywords",
      children: [(0, _v2.jsx)(_v17.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v20.T_AUTO_CC_ENHANCED_SPEECH
      }), (0, _v2.jsxs)(_v13.FormControl, {
        isInvalid: !!_v6,
        children: [(0, _v2.jsxs)(_v16.InputGroup, {
          size: "sm",
          children: [(0, _v2.jsx)(_v12.Input, {
            isDisabled: _v9,
            value: _v4,
            size: "sm",
            placeholder: _v20.T_ADD_AUTO_CC_KEYWORD,
            onChange: _v12,
            onKeyDown: _v13
          }), (0, _v2.jsx)(_v15.InputRightElement, {
            cursor: "pointer",
            color: _v9 ? "text-secondary" : "text-primary",
            onClick: _v9 ? void 0 : _v11,
            children: (0, _v2.jsx)(_v18.PlusCircle, {})
          })]
        }), _v6 && _v22[_v6] ? (0, _v2.jsx)(_v14.FormErrorMessage, {
          children: _v22[_v6]
        }) : null]
      }), (0, _v2.jsx)(_v17.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: _v20.T_ADD_COMMA_SEPARATED_AUTO_CC_KEYWORDS
      }), _v0.length ? (0, _v2.jsx)(_v9.Flex, {
        gap: (0, _v10.rem)(8),
        flexWrap: "wrap",
        children: _v0.map((_v0, _v1) => (0, _v2.jsxs)(_v11.Tag, {
          size: "sm",
          children: [(0, _v2.jsx)(_v11.TagLabel, {
            fontSize: (0, _v10.rem)(14),
            children: _v0
          }), _v9 ? null : (0, _v2.jsx)(_v11.TagCloseButton, {
            onClick: () => _v10(_v0)
          })]
        }, `${_v0}-idx:${_v1}`))
      }) : null]
    });
  }], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  function _v33({
    isOpen: _v0,
    draftLanguages: _v1,
    sourceLanguage: _v2,
    isSaveDisabled: _v3,
    onDraftChange: _v4,
    onClose: _v5,
    onSave: _v6
  }) {
    let _v7 = _v1.filter(Boolean).length,
      _v8 = _v7 * _v19.AUTO_CC_TRANSLATION_CREDITS_PER_MINUTE,
      _v9 = (0, _v8.useCallback)(_v0 => {
        let _v1 = new Set(_v1.filter((_v0, _v1) => _v1 !== _v0 && !!_v0));
        return _v2 && _v1.add(_v2), [..._v19.AutoCcOptions].filter(_v0 => !_v1.has(_v0.value)).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)).map(_v0 => ({
          label: `${_v0.label} - ${_v0.nativeName}`,
          value: _v0.value
        }));
      }, [_v1, _v2]),
      _v10 = (0, _v8.useCallback)((_v0, _v1) => {
        let _v2 = [..._v1];
        _v2[_v0] = _v1, _v4(_v2);
      }, [_v1, _v4]),
      _v11 = (0, _v8.useCallback)(_v0 => {
        _v4(_v1.filter((_v0, _v1) => _v1 !== _v0));
      }, [_v1, _v4]),
      _v12 = _v7 < 10 && _v7 === _v1.length ? [..._v1, ""] : _v1;
    return (0, _v2.jsxs)(_v25.Modal, {
      isOpen: _v0,
      onClose: _v5,
      children: [(0, _v2.jsx)(_v27.ModalOverlay, {}), (0, _v2.jsxs)(_v26.ModalContent, {
        display: "flex",
        flexDirection: "column",
        padding: 0,
        width: (0, _v10.rem)(432),
        borderRadius: (0, _v10.rem)(20),
        overflow: "hidden",
        children: [(0, _v2.jsx)(_v23.Box, {
          paddingX: (0, _v10.rem)(24),
          paddingTop: (0, _v10.rem)(24),
          children: (0, _v2.jsx)(_v17.Text, {
            fontWeight: 500,
            fontSize: "text-xl",
            color: "text-primary",
            letterSpacing: "-0.04em",
            lineHeight: "140%",
            children: (0, _v31.translate)({
              singular: "Captions translations",
              dictionary: {
                es: {
                  singular: "Traducciones de subtítulos"
                },
                "de-DE": {
                  singular: "Untertitelübersetzungen"
                },
                "fr-FR": {
                  singular: "Traductions des sous-titres"
                },
                "ja-JP": {
                  singular: "キャプション翻訳"
                },
                "ko-KR": {
                  singular: "자막 번역"
                },
                "pt-BR": {
                  singular: "Traduções de legendas"
                },
                "zh-CN": {
                  singular: "字幕翻译"
                }
              }
            })
          })
        }), (0, _v2.jsxs)(_v9.Flex, {
          direction: "column",
          gap: (0, _v10.rem)(12),
          paddingX: (0, _v10.rem)(24),
          paddingTop: (0, _v10.rem)(16),
          flex: 1,
          children: [(0, _v2.jsxs)(_v9.Flex, {
            gap: (0, _v10.rem)(4),
            alignItems: "baseline",
            children: [(0, _v2.jsx)(_v17.Text, {
              fontWeight: 500,
              fontSize: "text-sm",
              color: "text-primary",
              children: (0, _v31.translate)({
                singular: "Captions translations",
                dictionary: {
                  es: {
                    singular: "Traducciones de subtítulos"
                  },
                  "de-DE": {
                    singular: "Untertitelübersetzungen"
                  },
                  "fr-FR": {
                    singular: "Traductions des sous-titres"
                  },
                  "ja-JP": {
                    singular: "キャプション翻訳"
                  },
                  "ko-KR": {
                    singular: "자막 번역"
                  },
                  "pt-BR": {
                    singular: "Traduções de legendas"
                  },
                  "zh-CN": {
                    singular: "字幕翻译"
                  }
                }
              })
            }), (0, _v2.jsx)(_v17.Text, {
              fontSize: "text-sm",
              color: "text-secondary",
              children: `${_v7} ${(0, _v31.translate)({
                singular: "of",
                dictionary: {
                  es: {
                    singular: "de"
                  },
                  "de-DE": {
                    singular: "von"
                  },
                  "fr-FR": {
                    singular: "de"
                  },
                  "ja-JP": {
                    singular: "の"
                  },
                  "ko-KR": {
                    singular: "중"
                  },
                  "pt-BR": {
                    singular: "de"
                  },
                  "zh-CN": {
                    singular: "的"
                  }
                }
              })} 10`
            })]
          }), (0, _v2.jsx)(_v9.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(12),
            minHeight: (0, _v10.rem)(200),
            children: _v12.map((_v0, _v1) => (0, _v2.jsxs)(_v9.Flex, {
              gap: (0, _v10.rem)(8),
              alignItems: "flex-end",
              children: [(0, _v2.jsx)(_v23.Box, {
                flex: 1,
                children: (0, _v2.jsx)(_v28.Select, {
                  id: `translation-lang-${_v1}`,
                  items: _v9(_v1),
                  value: _v0 ? [_v0] : [],
                  placeholder: (0, _v31.translate)({
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
                  variant: "withCheck",
                  withPortal: !1,
                  onValueChange: _v0 => {
                    _v10(_v1, _v0.value[0]);
                  },
                  children: _v0 => (0, _v2.jsx)(_v28.SelectItem, {
                    item: _v0,
                    children: (0, _v2.jsx)(_v28.SelectItemText, {
                      children: _v0.label
                    })
                  })
                })
              }), (0, _v2.jsx)(_v24.Button, {
                variant: "secondary",
                size: "sm",
                height: (0, _v10.rem)(40),
                minWidth: (0, _v10.rem)(40),
                padding: (0, _v10.rem)(8),
                borderRadius: (0, _v10.rem)(12),
                "aria-label": (0, _v31.translate)({
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
                onClick: () => _v11(_v1),
                children: (0, _v2.jsx)(_v29.CloseX, {
                  boxSize: 24
                })
              })]
            }, _v1))
          })]
        }), (0, _v2.jsxs)(_v9.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: (0, _v10.rem)(24),
          paddingTop: (0, _v10.rem)(16),
          paddingBottom: (0, _v10.rem)(24),
          children: [(0, _v2.jsxs)(_v9.Flex, {
            alignItems: "center",
            gap: (0, _v10.rem)(6),
            flex: 1,
            children: [(0, _v2.jsx)(_v17.Text, {
              color: "text-secondary",
              fontSize: "text-sm",
              children: (0, _v31.translate)({
                singular: "{COUNT} translation",
                plural: "{COUNT} translations",
                count: _v7,
                replacements: {
                  COUNT: _v7
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} traducción",
                    plural: "{COUNT} traducciones"
                  },
                  "de-DE": {
                    singular: "{COUNT} Übersetzung",
                    plural: "{COUNT} Übersetzungen"
                  },
                  "fr-FR": {
                    singular: "{COUNT} traduction",
                    plural: "{COUNT} traductions"
                  },
                  "ja-JP": {
                    singular: "{COUNT} 件の翻訳",
                    plural: "{COUNT} 件の翻訳"
                  },
                  "ko-KR": {
                    singular: "{COUNT}개의 번역",
                    plural: "{COUNT}개의 번역"
                  },
                  "pt-BR": {
                    singular: "{COUNT} tradução",
                    plural: "{COUNT} traduções"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 个翻译",
                    plural: "{COUNT} 个翻译"
                  }
                }
              })
            }), (0, _v2.jsxs)(_v9.Flex, {
              alignItems: "center",
              gap: (0, _v10.rem)(2),
              children: [(0, _v2.jsx)(_v30.VimeoCoin, {
                boxSize: 12,
                color: "text-primary"
              }), (0, _v2.jsx)(_v17.Text, {
                fontWeight: 500,
                fontSize: "text-sm",
                color: "text-primary",
                children: `${_v8}/${(0, _v31.translate)({
                  singular: "min",
                  dictionary: {
                    "ja-JP": {
                      singular: "分"
                    },
                    "ko-KR": {
                      singular: "분"
                    },
                    "zh-CN": {
                      singular: "分钟"
                    }
                  }
                })}`
              })]
            })]
          }), (0, _v2.jsxs)(_v9.Flex, {
            gap: (0, _v10.rem)(12),
            alignItems: "center",
            children: [(0, _v2.jsx)(_v24.Button, {
              variant: "ghost",
              size: "md",
              onClick: _v5,
              fontWeight: 500,
              children: (0, _v31.translate)({
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
            }), (0, _v2.jsx)(_v24.Button, {
              variant: "primary",
              size: "md",
              isDisabled: _v3,
              onClick: _v6,
              children: (0, _v31.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            })]
          })]
        })]
      })]
    });
  }
  _v0.s(["CaptionsTranslations", 0, function ({
    isDisabled: _v0 = !1,
    disabledTip: _v1,
    selectedLanguages: _v2,
    sourceLanguage: _v3,
    onChange: _v4
  }) {
    let [_v5, _v6] = (0, _v8.useState)(!1),
      [_v7, _v8] = (0, _v8.useState)([]),
      [_v9, _v10] = (0, _v8.useState)(!1),
      _v11 = _v2.length > 0,
      _v12 = (0, _v8.useCallback)(() => {
        _v8([..._v2]), _v6(!0);
      }, [_v2]),
      _v13 = (0, _v8.useCallback)(() => {
        _v6(!1);
      }, []),
      _v14 = (0, _v8.useCallback)(async () => {
        let _v0 = _v7.filter(Boolean);
        _v10(!0);
        try {
          await _v4(_v0), _v6(!1);
        } finally {
          _v10(!1);
        }
      }, [_v7, _v4]),
      _v15 = (0, _v8.useMemo)(() => _v11 ? _v2.map(_v0 => {
        let _v1 = _v19.AutoCcOptions.find(_v0 => _v0.value === _v0);
        return _v1 ? `${_v1.label} - ${_v1.nativeName}` : _v0;
      }).join(", ") : null, [_v2, _v11]),
      _v16 = _v11 ? (0, _v31.translate)({
        singular: "Manage Languages",
        dictionary: {
          es: {
            singular: "Administrar idiomas"
          },
          "de-DE": {
            singular: "Sprachen verwalten"
          },
          "fr-FR": {
            singular: "Gérer les langues"
          },
          "ja-JP": {
            singular: "言語を管理"
          },
          "ko-KR": {
            singular: "언어 관리"
          },
          "pt-BR": {
            singular: "Gerenciar idiomas"
          },
          "zh-CN": {
            singular: "管理语言"
          }
        }
      }) : (0, _v31.translate)({
        singular: "Add Languages",
        dictionary: {
          es: {
            singular: "Agregar idiomas"
          },
          "de-DE": {
            singular: "Sprachen hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter des langues"
          },
          "ja-JP": {
            singular: "言語を追加"
          },
          "ko-KR": {
            singular: "언어 추가"
          },
          "pt-BR": {
            singular: "Adicionar idiomas"
          },
          "zh-CN": {
            singular: "添加语言"
          }
        }
      }),
      _v17 = (0, _v8.useMemo)(() => {
        let _v0 = _v7.filter(Boolean);
        return _v0.length !== _v2.length || _v0.some((_v0, _v1) => _v0 !== _v2[_v1]);
      }, [_v7, _v2]);
    return (0, _v2.jsxs)(_v9.Flex, {
      direction: "column",
      width: "100%",
      children: [(0, _v2.jsx)(_v17.Text, {
        variant: "heading-xs",
        color: "text-primary",
        marginBottom: (0, _v10.rem)(8),
        children: (0, _v31.translate)({
          singular: "Captions translations",
          dictionary: {
            es: {
              singular: "Traducciones de subtítulos"
            },
            "de-DE": {
              singular: "Untertitelübersetzungen"
            },
            "fr-FR": {
              singular: "Traductions des sous-titres"
            },
            "ja-JP": {
              singular: "キャプション翻訳"
            },
            "ko-KR": {
              singular: "자막 번역"
            },
            "pt-BR": {
              singular: "Traduções de legendas"
            },
            "zh-CN": {
              singular: "字幕翻译"
            }
          }
        })
      }), _v11 && _v15 ? (0, _v2.jsx)(_v17.Text, {
        display: "block",
        fontSize: "text-sm",
        color: "text-secondary",
        marginBottom: (0, _v10.rem)(8),
        children: _v15
      }) : null, (0, _v2.jsx)(_v32.BokehTooltip, {
        label: _v1 ?? (0, _v31.translate)({
          singular: "Automatic closed captions are required to add caption translations",
          dictionary: {
            es: {
              singular: "Se requieren subtítulos automáticos para agregar traducciones de subtítulos"
            },
            "de-DE": {
              singular: "Automatische Untertitel sind erforderlich, um Untertitelübersetzungen hinzuzufügen"
            },
            "fr-FR": {
              singular: "Les sous-titres automatiques sont requis pour ajouter des traductions de sous-titres"
            },
            "ja-JP": {
              singular: "キャプション翻訳を追加するには自動のクローズドキャプションが必要です"
            },
            "ko-KR": {
              singular: "자막 번역을 추가하려면 자동으로 생성된 자막이 필요합니다."
            },
            "pt-BR": {
              singular: "Legendas automáticas são necessárias para adicionar traduções de legendas"
            },
            "zh-CN": {
              singular: "必须先生成自动隐藏字幕，才能添加字幕翻译"
            }
          }
        }),
        isDisabled: !_v0,
        maxWidth: (0, _v10.rem)(300),
        children: (0, _v2.jsx)(_v24.Button, {
          variant: "secondary",
          size: "sm",
          width: "100%",
          isDisabled: _v0,
          onClick: _v12,
          children: _v16
        })
      }), (0, _v2.jsx)(_v33, {
        isOpen: _v5,
        draftLanguages: _v7,
        sourceLanguage: _v3,
        isSaveDisabled: !_v17 || _v9,
        onDraftChange: _v8,
        onClose: _v13,
        onSave: _v14
      })]
    });
  }], 0);
}