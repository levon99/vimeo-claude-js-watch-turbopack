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
    _v11 = _v0.i(0);
  let _v12 = () => (0, _v1.jsxs)(_v5.Popover, {
    trigger: "hover",
    placement: "top",
    closeDelay: 200,
    closeOnBlur: !0,
    isLazy: !0,
    children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
      children: (0, _v1.jsx)(_v2.Box, {
        as: "span",
        ml: (0, _v8.rem)(4),
        display: "inline-flex",
        cursor: "pointer",
        children: (0, _v1.jsx)(_v10.InfoCircle, {
          color: "text-secondary",
          boxSize: "2xs"
        })
      })
    }), (0, _v1.jsx)(_v6.PopoverContent, {
      width: (0, _v8.rem)(300),
      maxWidth: "320px",
      borderRadius: "sm",
      boxShadow: "none",
      backgroundColor: "gray.600",
      color: "text-button-inverted",
      fontSize: "body-md",
      textAlign: "left",
      paddingY: "1",
      paddingX: "3",
      backdropFilter: "blur(var(--vimeo-blur-md))",
      _dark: {
        bgColor: "gray.300"
      },
      children: (0, _v1.jsxs)(_v2.Box, {
        children: [(0, _v1.jsx)(_v9.Text, {
          children: (0, _v11.translate)({
            singular: "Using your custom dictionary involves additional processing, which uses more credits per minute.",
            dictionary: {
              es: {
                singular: "El uso de tu diccionario personalizado implica un procesamiento adicional, que consume más créditos por minuto."
              },
              "de-DE": {
                singular: "Die Verwendung Ihres benutzerdefinierten Wörterbuchs erfordert zusätzliche Verarbeitung, die pro Minute mehr Credits verbraucht."
              },
              "fr-FR": {
                singular: "L'utilisation de votre dictionnaire personnalisé implique un traitement supplémentaire, ce qui consomme davantage de crédits par minute."
              },
              "ja-JP": {
                singular: "カスタム辞書を使用すると追加の処理が必要になり、1分あたりのクレジット消費が増加します。"
              },
              "ko-KR": {
                singular: "사용자 정의 사전을 사용하면 추가 처리가 필요하여 분당 더 많은 크레딧이 소모됩니다."
              },
              "pt-BR": {
                singular: "Usar seu dicionário personalizado envolve processamento adicional, que consome mais créditos por minuto."
              },
              "zh-CN": {
                singular: "使用自定义词典会涉及额外处理，从而每分钟消耗更多积分。"
              }
            }
          })
        }), (0, _v1.jsx)(_v9.Text, {
          as: "a",
          href: "https://help.vimeo.com/hc/en-us/articles/12426960030353-Automatic-closed-captioning-for-live-events",
          target: "_blank",
          textDecoration: "underline",
          marginTop: (0, _v8.rem)(4),
          display: "inline-block",
          children: (0, _v11.translate)({
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
      })
    })]
  });
  _v0.s(["AccountDictionaryCheckbox", 0, ({
    isChecked: _v0,
    onChange: _v1
  }) => (0, _v1.jsx)(_v3.Checkbox, {
    size: "md",
    alignItems: "flex-start",
    isChecked: _v0,
    onChange: _v0 => _v1(_v0.target.checked),
    children: (0, _v1.jsxs)(_v2.Box, {
      children: [(0, _v1.jsxs)(_v4.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v9.Text, {
          variant: "heading-xs",
          children: (0, _v11.translate)({
            singular: "Use custom dictionary",
            dictionary: {
              es: {
                singular: "Usar diccionario personalizado"
              },
              "de-DE": {
                singular: "Benutzerdefiniertes Wörterbuch verwenden"
              },
              "fr-FR": {
                singular: "Utiliser le dictionnaire personnalisé"
              },
              "ja-JP": {
                singular: "カスタム辞書を使用する"
              },
              "ko-KR": {
                singular: "사용자 정의 사전 사용"
              },
              "pt-BR": {
                singular: "Usar dicionário personalizado"
              },
              "zh-CN": {
                singular: "使用自定义词典"
              }
            }
          })
        }), (0, _v1.jsx)(_v12, {})]
      }), (0, _v1.jsx)(_v9.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: (0, _v11.translate)({
          singular: "Apply your glossary terms, translations, and custom rules when generating subtitles.",
          dictionary: {
            es: {
              singular: "Aplica tus términos de glosario, traducciones y reglas personalizadas al generar subtítulos."
            },
            "de-DE": {
              singular: "Wenden Sie Ihre Glossarbegriffe, Übersetzungen und benutzerdefinierten Regeln beim Erstellen von Untertiteln an."
            },
            "fr-FR": {
              singular: "Appliquez les termes de votre glossaire, les traductions et les règles personnalisées lors de la génération des sous-titres."
            },
            "ja-JP": {
              singular: "字幕を生成する際に、用語集、翻訳、およびカスタムルールを適用します。"
            },
            "ko-KR": {
              singular: "자막을 생성할 때 용어집 항목, 번역 및 사용자 지정 규칙을 적용합니다."
            },
            "pt-BR": {
              singular: "Aplique seus termos do glossário, traduções e regras personalizadas ao gerar legendas."
            },
            "zh-CN": {
              singular: "在生成字幕时应用您的词汇表、翻译和自定义规则。"
            }
          }
        })
      })]
    })
  }), "AccountDictionaryPriceInfo", 0, _v12], 0);
  var _v13 = _v0.i(0),
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
  class _v24 {
    code;
    localized;
    native;
    accent;
    constructor(_v0, _v1, _v2, _v3) {
      this.code = _v0, this.localized = _v1, this.native = _v2, this.accent = _v3;
    }
    getKey = () => `${this.code}${this.accent ? `-${this.accent.key}` : ""}`;
    getDisplayLabel = () => `${this.localized}${this.accent ? ` - ${this.accent.label}` : ""}`;
  }
  _v0.s(["TranslationLanguage", 0, _v24], 0);
  let _v25 = "original",
    _v26 = ({
      menuKey: _v0,
      selectedLanguage: _v1,
      selectedLanguages: _v2,
      availableLanguages: _v3,
      onSelectLanguage: _v4,
      onRemoveLanguage: _v5,
      onReplaceLanguage: _v6,
      hasOriginalTranslationsAccents: _v7 = !1
    }) => {
      let _v8 = (0, _v13.useCallback)(_v0 => {
          let _v1 = _v0.lastIndexOf("-"),
            _v2 = _v0.substring(0, _v1),
            _v3 = _v0.substring(_v1 + 1),
            _v4 = _v3.find(_v0 => _v0.code == _v2),
            _v5 = _v4?.accents?.find(_v0 => _v0.key == _v3);
          if (_v4 && _v5) {
            let _v0 = new _v24(_v4.code, _v4.localized, _v4.native, {
              label: String(_v5.label),
              key: String(_v5.key)
            });
            _v1 ? _v6(_v1, _v0) : _v4(_v0);
          }
        }, [_v3, _v6, _v4, _v1]),
        _v9 = (0, _v13.useCallback)((_v0, _v1) => `${_v0}-${_v1}`, []),
        _v10 = (0, _v13.useCallback)(_v0 => {
          let _v1 = _v0.detail.target;
          _v1.id?.includes(_v0) && _v0.preventDefault();
        }, [_v0]),
        _v11 = (0, _v13.useMemo)(() => (0, _v1.jsx)(_v14.NestedMenuContent, {
          maxH: (0, _v8.rem)(220),
          w: "100%",
          children: _v3.map(_v0 => {
            let _v1 = _v0?.accents?.find(_v0 => _v0.key === _v25),
              _v2 = _v9(_v0.code, String(_v1?.key));
            return _v2?.some(_v0 => _v0.code === _v0.code) ? (0, _v1.jsx)(_v14.NestedMenu, {
              lazyMount: !0,
              id: `${_v0}-${_v0.code}`,
              positioning: {
                placement: "right-end",
                hideWhenDetached: !0
              },
              unmountOnExit: !0,
              closeOnSelect: !0,
              children: (0, _v1.jsx)(_v14.NestedMenuTriggerItem, {
                children: (0, _v1.jsx)(_v4.Flex, {
                  width: "100%",
                  h: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: .4,
                  children: (0, _v1.jsx)(_v16.Tooltip, {
                    label: _v23.thisLanguageAlreadyAdded,
                    placement: "top",
                    children: (0, _v1.jsxs)(_v4.Flex, {
                      justifyContent: "space-between",
                      w: "100%",
                      children: [(0, _v1.jsx)(_v4.Flex, {
                        gap: "sm",
                        children: _v0.localized
                      }), (0, _v1.jsx)(_v20.ChevronRightSmall, {
                        height: 20,
                        width: 20
                      })]
                    })
                  })
                })
              })
            }, `${_v0}-${_v0.code}`) : (0, _v1.jsxs)(_v14.NestedMenu, {
              lazyMount: !0,
              id: `${_v0}-${_v0.code}`,
              positioning: {
                placement: "right-end",
                hideWhenDetached: !0
              },
              onSelect: _v0 => _v8(_v0.value),
              unmountOnExit: !0,
              closeOnSelect: !0,
              children: [(0, _v1.jsx)(_v14.NestedMenuTriggerItem, {
                children: (0, _v1.jsxs)(_v4.Flex, {
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "sm",
                  children: [(0, _v1.jsx)(_v4.Flex, {
                    gap: "sm",
                    children: _v0.localized
                  }), (0, _v1.jsx)(_v20.ChevronRightSmall, {
                    height: 20,
                    width: 20
                  })]
                })
              }), (0, _v1.jsx)(_v15.NestedMenuPortal, {
                children: (0, _v1.jsx)(_v14.NestedMenuPositioner, {
                  style: {
                    zIndex: _v22.Z_INDEX.BOKEH_DROPDOWN_MENU
                  },
                  children: (0, _v1.jsxs)(_v14.NestedMenuContent, {
                    children: [_v7 && _v1 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v14.NestedMenuItem, {
                        value: _v2,
                        id: _v2,
                        children: _v1.label
                      }), (0, _v1.jsx)(_v14.NestedMenuDivider, {})]
                    }), (0, _v1.jsxs)(_v14.NestedMenuItemGroup, {
                      children: [(0, _v1.jsx)(_v14.NestedMenuItemGroupLabel, {
                        children: (0, _v1.jsxs)(_v17.HStack, {
                          alignItems: "center",
                          gap: "xs",
                          children: [(0, _v1.jsx)(_v2.Box, {
                            children: _v23.aiVoices
                          }), (0, _v1.jsx)(_v16.Tooltip, {
                            label: _v23.aiVoicesTooltipText,
                            placement: "top",
                            maxW: (0, _v8.rem)(280),
                            children: (0, _v1.jsx)(_v2.Box, {
                              position: "relative",
                              children: (0, _v1.jsx)(_v10.InfoCircle, {
                                boxSize: "2xs",
                                color: "text-secondary"
                              })
                            })
                          })]
                        })
                      }), _v0?.accents?.filter(_v0 => _v0.key !== _v25).map(_v0 => {
                        let _v1 = _v9(_v0.code, String(_v0.key));
                        return (0, _v1.jsx)(_v14.NestedMenuItem, {
                          value: _v1,
                          id: _v1,
                          children: _v0.label
                        }, _v1);
                      })]
                    })]
                  })
                })
              })]
            }, `${_v0}-${_v0.code}`);
          })
        }, _v0), [_v3, _v9, _v0, _v8, _v2, _v7]);
      return (0, _v1.jsxs)(_v4.Flex, {
        gap: (0, _v8.rem)(4),
        alignItems: "center",
        w: "100%",
        position: "relative",
        children: [(0, _v1.jsx)(_v2.Box, {
          w: "100%",
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v14.NestedMenu, {
            id: `${_v0}-parent`,
            unmountOnExit: !0,
            closeOnSelect: !0,
            lazyMount: !0,
            positioning: {
              placement: "bottom-start",
              sameWidth: !0
            },
            onFocusOutside: _v10,
            children: [(0, _v1.jsx)(_v14.NestedMenuTrigger, {
              variant: "tertiary",
              fontSize: (0, _v8.rem)(12),
              w: "100%",
              borderColor: "input-stroke",
              borderWidth: (0, _v8.rem)(1),
              backgroundColor: "input-fill !important",
              children: (0, _v1.jsxs)(_v4.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                gap: "sm",
                w: "100%",
                children: [(0, _v1.jsx)(_v9.Text, {
                  variant: "body-md",
                  gap: "sm",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  minWidth: "0",
                  flexGrow: "1",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  children: _v1 ? _v1.getDisplayLabel() : _v23.selectLanguage
                }), (0, _v1.jsx)(_v19.ChevronDown, {
                  height: 20,
                  width: 20
                })]
              })
            }), (0, _v1.jsx)(_v15.NestedMenuPortal, {
              children: (0, _v1.jsx)(_v14.NestedMenuPositioner, {
                style: {
                  zIndex: _v22.Z_INDEX.BOKEH_DROPDOWN_MENU
                },
                children: _v11
              })
            })]
          })
        }, `${_v0}-parent`), (0, _v1.jsx)(_v16.Tooltip, {
          label: _v23.remove,
          placement: "top",
          isDisabled: !_v1,
          children: (0, _v1.jsx)(_v18.IconButton, {
            "aria-label": "Remove language",
            isDisabled: !_v1,
            icon: (0, _v1.jsx)(_v21.CloseX, {}),
            size: "md",
            onClick: _v1 ? () => _v5(_v1) : void 0,
            variant: "secondary"
          })
        })]
      });
    };
  _v0.s(["LanguageSelectList", 0, ({
    selectedLanguages: _v0,
    availableLanguages: _v1,
    onChange: _v2,
    onUnmount: _v3,
    hasOriginalTranslationsAccents: _v4 = !1
  }) => {
    (0, _v13.useEffect)(() => _v3 && _v3(), [_v3]);
    let _v5 = (0, _v13.useCallback)(_v0 => {
        _v2([..._v0, _v0]);
      }, [_v2, _v0]),
      _v6 = (0, _v13.useCallback)(_v0 => {
        _v2(_v0.filter(_v0 => _v0.getKey() !== _v0.getKey()));
      }, [_v2, _v0]),
      _v7 = (0, _v13.useCallback)((_v0, _v1) => {
        let _v2 = _v0.findIndex(_v0 => _v0.getKey() === _v0.getKey());
        if (-1 !== _v2) {
          let _v0 = [..._v0];
          _v0[_v2] = _v1, _v2(_v0);
        }
      }, [_v2, _v0]);
    return (0, _v1.jsxs)(_v4.Flex, {
      flexDirection: "column",
      gap: (0, _v8.rem)(12),
      children: [_v0.map((_v0, _v1) => (0, _v1.jsx)(_v26, {
        menuKey: `lang-select-${_v1}`,
        selectedLanguage: _v0,
        selectedLanguages: _v0,
        availableLanguages: _v1,
        onSelectLanguage: _v5,
        onRemoveLanguage: _v6,
        onReplaceLanguage: _v7,
        hasOriginalTranslationsAccents: _v4
      }, `lang-select-${_v1}`)), (0, _v1.jsx)(_v26, {
        menuKey: `lang-select-${Number(_v0.length)}`,
        availableLanguages: _v1,
        onRemoveLanguage: _v6,
        onSelectLanguage: _v5,
        onReplaceLanguage: _v7,
        selectedLanguages: _v0,
        hasOriginalTranslationsAccents: _v4
      }, `lang-select-${Number(_v0.length)}`)]
    });
  }], 0);
}