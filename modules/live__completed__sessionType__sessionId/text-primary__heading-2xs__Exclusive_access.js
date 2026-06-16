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
    return (0, _v1.jsx)(_v18.Badge, {
      variant: "new",
      size: "sm",
      children: (0, _v1.jsx)(_v10.Text, {
        color: "text-primary",
        variant: "heading-2xs",
        children: (0, _v14.translate)({
          singular: "Exclusive access",
          dictionary: {
            es: {
              singular: "Acceso exclusivo"
            },
            "de-DE": {
              singular: "Exklusiver Zugang"
            },
            "fr-FR": {
              singular: "Accès exclusif"
            },
            "ja-JP": {
              singular: "限定アクセス"
            },
            "ko-KR": {
              singular: "독점 액세스"
            },
            "pt-BR": {
              singular: "Acesso exclusivo"
            },
            "zh-CN": {
              singular: "专属访问"
            }
          }
        })
      })
    });
  }
  _v0.s(["ExclusiveAccessBadge", 0, _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25({
    isOpen: _v0,
    title: _v1,
    body: _v2,
    note: _v3,
    availableUntil: _v4,
    onAcknowledge: _v5,
    children: _v6,
    placement: _v7 = "left-start"
  }) {
    return (0, _v1.jsxs)(_v20.Popover, {
      isOpen: _v0,
      placement: _v7,
      gutter: 16,
      strategy: "fixed",
      isLazy: !0,
      closeOnBlur: !1,
      children: [(0, _v1.jsx)(_v23.PopoverTrigger, {
        children: _v6
      }), (0, _v1.jsx)(_v24.Portal, {
        children: (0, _v1.jsxs)(_v22.PopoverContent, {
          width: (0, _v11.rem)(320),
          backgroundColor: "fill-surface",
          borderRadius: (0, _v11.rem)(8),
          boxShadow: "0px 4px 32px 0px rgba(11, 26, 41, 0.12)",
          padding: (0, _v11.rem)(16),
          border: "none",
          zIndex: "popover",
          sx: {
            "--popper-arrow-shadow-color": "transparent"
          },
          _focus: {
            outline: "none",
            boxShadow: "0px 4px 32px 0px rgba(11, 26, 41, 0.12)"
          },
          children: [(0, _v1.jsx)(_v21.PopoverArrow, {
            backgroundColor: "fill-surface"
          }), (0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: (0, _v11.rem)(24),
            alignItems: "stretch",
            children: [(0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              gap: (0, _v11.rem)(16),
              alignItems: "flex-start",
              children: [_v4 ? (0, _v1.jsx)(_v19, {}) : null, (0, _v1.jsxs)(_v5.Flex, {
                direction: "column",
                gap: (0, _v11.rem)(8),
                alignItems: "flex-start",
                width: "100%",
                children: [(0, _v1.jsx)(_v10.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  children: _v1
                }), (0, _v1.jsx)(_v10.Text, {
                  fontSize: (0, _v11.rem)(14),
                  color: "text-primary",
                  lineHeight: 1.4,
                  children: _v2
                }), _v3 ? (0, _v1.jsx)(_v10.Text, {
                  fontSize: (0, _v11.rem)(12),
                  color: "text-secondary",
                  lineHeight: 1.2,
                  children: _v3
                }) : null]
              })]
            }), (0, _v1.jsxs)(_v5.Flex, {
              justifyContent: _v4 ? "space-between" : "flex-end",
              alignItems: "flex-end",
              gap: (0, _v11.rem)(12),
              width: "100%",
              children: [_v4 ? (0, _v1.jsx)(_v10.Text, {
                fontSize: (0, _v11.rem)(12),
                color: "text-tertiary",
                lineHeight: 1.2,
                children: (0, _v14.translate)({
                  singular: "Available until {DATE}",
                  replacements: {
                    DATE: _v4
                  },
                  dictionary: {
                    es: {
                      singular: "Disponible hasta {DATE}"
                    },
                    "de-DE": {
                      singular: "Verfügbar bis {DATE}"
                    },
                    "fr-FR": {
                      singular: "Disponible jusqu'au {DATE}"
                    },
                    "ja-JP": {
                      singular: "{DATE}まで利用可能"
                    },
                    "ko-KR": {
                      singular: "{DATE}까지 이용 가능"
                    },
                    "pt-BR": {
                      singular: "Disponível até {DATE}"
                    },
                    "zh-CN": {
                      singular: "可用至 {DATE}"
                    }
                  }
                })
              }) : null, (0, _v1.jsx)(_v4.Button, {
                variant: "primary",
                size: "md",
                onClick: _v5,
                children: (0, _v14.translate)({
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
              })]
            })]
          })]
        })
      })]
    });
  }
  function _v26({
    isOpen: _v0,
    draftLanguages: _v1,
    sourceLanguage: _v2,
    isSaveDisabled: _v3,
    onDraftChange: _v4,
    onClose: _v5,
    onSave: _v6
  }) {
    let _v7 = _v1.filter(Boolean).length,
      _v8 = _v7 * _v15.AUTO_CC_TRANSLATION_CREDITS_PER_MINUTE,
      _v9 = (0, _v2.useCallback)(_v0 => {
        let _v1 = new Set(_v1.filter((_v0, _v1) => _v1 !== _v0 && !!_v0));
        return _v2 && _v1.add(_v2), [..._v15.AutoCcOptions].filter(_v0 => !_v1.has(_v0.value)).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)).map(_v0 => ({
          label: `${_v0.label} - ${_v0.nativeName}`,
          value: _v0.value
        }));
      }, [_v1, _v2]),
      _v10 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = [..._v1];
        _v2[_v0] = _v1, _v4(_v2);
      }, [_v1, _v4]),
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v4(_v1.filter((_v0, _v1) => _v1 !== _v0));
      }, [_v1, _v4]),
      _v12 = _v7 < 10 && _v7 === _v1.length ? [..._v1, ""] : _v1;
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v5,
      children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
        display: "flex",
        flexDirection: "column",
        padding: 0,
        width: (0, _v11.rem)(432),
        borderRadius: (0, _v11.rem)(20),
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v3.Box, {
          paddingX: (0, _v11.rem)(24),
          paddingTop: (0, _v11.rem)(24),
          children: (0, _v1.jsx)(_v10.Text, {
            fontWeight: 500,
            fontSize: "text-xl",
            color: "text-primary",
            letterSpacing: "-0.04em",
            lineHeight: "140%",
            children: (0, _v14.translate)({
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
        }), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: (0, _v11.rem)(12),
          paddingX: (0, _v11.rem)(24),
          paddingTop: (0, _v11.rem)(16),
          flex: 1,
          children: [(0, _v1.jsxs)(_v5.Flex, {
            gap: (0, _v11.rem)(4),
            alignItems: "baseline",
            children: [(0, _v1.jsx)(_v10.Text, {
              fontWeight: 500,
              fontSize: "text-sm",
              color: "text-primary",
              children: (0, _v14.translate)({
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
            }), (0, _v1.jsx)(_v10.Text, {
              fontSize: "text-sm",
              color: "text-secondary",
              children: `${_v7} ${(0, _v14.translate)({
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
          }), (0, _v1.jsx)(_v5.Flex, {
            direction: "column",
            gap: (0, _v11.rem)(12),
            minHeight: (0, _v11.rem)(200),
            children: _v12.map((_v0, _v1) => (0, _v1.jsxs)(_v5.Flex, {
              gap: (0, _v11.rem)(8),
              alignItems: "flex-end",
              children: [(0, _v1.jsx)(_v3.Box, {
                flex: 1,
                children: (0, _v1.jsx)(_v9.Select, {
                  id: `translation-lang-${_v1}`,
                  items: _v9(_v1),
                  value: _v0 ? [_v0] : [],
                  placeholder: (0, _v14.translate)({
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
                  children: _v0 => (0, _v1.jsx)(_v9.SelectItem, {
                    item: _v0,
                    children: (0, _v1.jsx)(_v9.SelectItemText, {
                      children: _v0.label
                    })
                  })
                })
              }), (0, _v1.jsx)(_v4.Button, {
                variant: "secondary",
                size: "sm",
                height: (0, _v11.rem)(40),
                minWidth: (0, _v11.rem)(40),
                padding: (0, _v11.rem)(8),
                borderRadius: (0, _v11.rem)(12),
                "aria-label": (0, _v14.translate)({
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
                children: (0, _v1.jsx)(_v12.CloseX, {
                  boxSize: 24
                })
              })]
            }, _v1))
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: (0, _v11.rem)(24),
          paddingTop: (0, _v11.rem)(16),
          paddingBottom: (0, _v11.rem)(24),
          children: [(0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            gap: (0, _v11.rem)(6),
            flex: 1,
            children: [(0, _v1.jsx)(_v10.Text, {
              color: "text-secondary",
              fontSize: "text-sm",
              children: (0, _v14.translate)({
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
            }), (0, _v1.jsxs)(_v5.Flex, {
              alignItems: "center",
              gap: (0, _v11.rem)(2),
              children: [(0, _v1.jsx)(_v13.VimeoCoin, {
                boxSize: 12,
                color: "text-primary"
              }), (0, _v1.jsx)(_v10.Text, {
                fontWeight: 500,
                fontSize: "text-sm",
                color: "text-primary",
                children: `${_v8}/${(0, _v14.translate)({
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
          }), (0, _v1.jsxs)(_v5.Flex, {
            gap: (0, _v11.rem)(12),
            alignItems: "center",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "ghost",
              size: "md",
              onClick: _v5,
              fontWeight: 500,
              children: (0, _v14.translate)({
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
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              isDisabled: _v3,
              onClick: _v6,
              children: (0, _v14.translate)({
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
  _v0.s(["FirstSeenLiveTourTooltip", 0, _v25], 0), _v0.s(["CaptionsTranslations", 0, function ({
    isDisabled: _v0 = !1,
    disabledTip: _v1,
    selectedLanguages: _v2,
    sourceLanguage: _v3,
    onChange: _v4,
    availableUntil: _v5
  }) {
    let [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)([]),
      [_v10, _v11] = (0, _v2.useState)(!1),
      {
        isOpen: _v12,
        show: _v13,
        acknowledge: _v14
      } = (0, _v16.useFirstSeenLiveModal)("lcdim");
    (0, _v2.useEffect)(() => {
      _v13();
    }, [_v13]);
    let _v15 = _v2.length > 0,
      _v16 = (0, _v2.useCallback)(() => {
        _v9([..._v2]), _v7(!0);
      }, [_v2]),
      _v17 = (0, _v2.useCallback)(() => {
        _v7(!1);
      }, []),
      _v18 = (0, _v2.useCallback)(async () => {
        let _v0 = _v8.filter(Boolean);
        _v11(!0);
        try {
          await _v4(_v0), _v7(!1);
        } finally {
          _v11(!1);
        }
      }, [_v8, _v4]),
      _v19 = (0, _v2.useMemo)(() => _v15 ? _v2.map(_v0 => {
        let _v1 = _v15.AutoCcOptions.find(_v0 => _v0.value === _v0);
        return _v1 ? `${_v1.label} - ${_v1.nativeName}` : _v0;
      }).join(", ") : null, [_v2, _v15]),
      _v20 = _v15 ? (0, _v14.translate)({
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
      }) : (0, _v14.translate)({
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
      _v21 = (0, _v2.useMemo)(() => {
        let _v0 = _v8.filter(Boolean);
        return _v0.length !== _v2.length || _v0.some((_v0, _v1) => _v0 !== _v2[_v1]);
      }, [_v8, _v2]);
    return (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      marginTop: (0, _v11.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v25, {
        isOpen: _v12,
        onAcknowledge: _v14,
        availableUntil: _v5,
        title: (0, _v14.translate)({
          singular: "Add multi-language {EM}live captions{/EM}",
          replacements: {
            EM: _v0 => (0, _v1.jsx)(_v10.Text, {
              as: "span",
              fontStyle: "italic",
              fontWeight: "inherit",
              fontSize: "inherit",
              children: _v0
            }, "em")
          },
          dictionary: {
            es: {
              singular: "Añadir {EM}subtítulos en vivo multilingües{/EM}"
            },
            "de-DE": {
              singular: "Mehrsprachige {EM}Live-Untertitel{/EM} hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter des {EM}sous-titres en direct{/EM} multilingues"
            },
            "ja-JP": {
              singular: "多言語の{EM}ライブキャプション{/EM}を追加"
            },
            "ko-KR": {
              singular: "다국어 {EM}라이브 자막{/EM} 추가"
            },
            "pt-BR": {
              singular: "Adicionar em vários idiomas {EM}legendas ao vivo{/EM}"
            },
            "zh-CN": {
              singular: "添加多语言 {EM}实时字幕{/EM}"
            }
          }
        }),
        body: (0, _v14.translate)({
          singular: "Add up to 10 languages for your event. Viewers pick their preferred one in the player.",
          dictionary: {
            es: {
              singular: "Añade hasta 10 idiomas para tu evento. Los espectadores pueden elegir su idioma preferido en el reproductor."
            },
            "de-DE": {
              singular: "Fügen Sie bis zu 10 Sprachen für Ihre Veranstaltung hinzu. Zuschauer wählen im Player ihre bevorzugte Sprache."
            },
            "fr-FR": {
              singular: "Ajoutez jusqu'à 10 langues pour votre événement. Les spectateurs choisissent leur langue préférée dans le lecteur."
            },
            "ja-JP": {
              singular: "イベントに最大10言語を追加できます。視聴者はプレーヤーで希望の言語を選択します。"
            },
            "ko-KR": {
              singular: "이벤트에 최대 10개 언어를 추가할 수 있습니다. 시청자는 플레이어에서 원하는 언어를 선택합니다."
            },
            "pt-BR": {
              singular: "Adicione até 10 idiomas ao seu evento. Os espectadores escolhem o idioma preferido no player."
            },
            "zh-CN": {
              singular: "为您的活动添加最多 10 种语言。观众可在播放器中选择其偏好的语言。"
            }
          }
        }),
        note: (0, _v14.translate)({
          singular: "Note: Once you go live, languages can't be changed.",
          dictionary: {
            es: {
              singular: "Nota: Una vez que inicies la transmisión, no se podrán cambiar los idiomas."
            },
            "de-DE": {
              singular: "Hinweis: Sobald Sie live gehen, können die Sprachen nicht mehr geändert werden."
            },
            "fr-FR": {
              singular: "Remarque : Une fois que vous êtes en direct, les langues ne peuvent pas être modifiées."
            },
            "ja-JP": {
              singular: "注意: ライブ配信を開始すると、言語は変更できません。"
            },
            "ko-KR": {
              singular: "참고: 라이브 시작 후에는 언어를 변경할 수 없습니다."
            },
            "pt-BR": {
              singular: "Observação: Depois de ir ao vivo, os idiomas não podem ser alterados."
            },
            "zh-CN": {
              singular: "注意：一旦开始直播，语言将无法更改。"
            }
          }
        }),
        children: (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          gap: (0, _v11.rem)(8),
          marginBottom: (0, _v11.rem)(8),
          children: [(0, _v1.jsx)(_v10.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: (0, _v14.translate)({
              singular: "Captions Translations",
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
                  singular: "字幕翻訳"
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
          }), _v5 ? (0, _v1.jsx)(_v19, {}) : null]
        })
      }), _v15 && _v19 ? (0, _v1.jsx)(_v10.Text, {
        display: "block",
        fontSize: "text-sm",
        color: "text-secondary",
        marginBottom: (0, _v11.rem)(8),
        children: _v19
      }) : null, (0, _v1.jsx)(_v17.BokehTooltip, {
        label: _v1 ?? (0, _v14.translate)({
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
        maxWidth: (0, _v11.rem)(300),
        children: (0, _v1.jsx)(_v4.Button, {
          variant: "secondary",
          size: "sm",
          width: "100%",
          isDisabled: _v0,
          onClick: _v16,
          children: _v20
        })
      }), (0, _v1.jsx)(_v26, {
        isOpen: _v6,
        draftLanguages: _v8,
        sourceLanguage: _v3,
        isSaveDisabled: !_v21 || _v10,
        onDraftChange: _v9,
        onClose: _v17,
        onSave: _v18
      })]
    });
  }], 0);
}