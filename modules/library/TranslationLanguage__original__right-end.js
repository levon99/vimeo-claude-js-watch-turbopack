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
    _v17 = _v0.i(0);
  class _v18 {
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
  _v0.s(["TranslationLanguage", 0, _v18], 0);
  let _v19 = "original",
    _v20 = ({
      menuKey: _v0,
      selectedLanguage: _v1,
      selectedLanguages: _v2,
      availableLanguages: _v3,
      onSelectLanguage: _v4,
      onRemoveLanguage: _v5,
      onReplaceLanguage: _v6,
      hasOriginalTranslationsAccents: _v7 = !1
    }) => {
      let _v8 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v0.lastIndexOf("-"),
            _v2 = _v0.substring(0, _v1),
            _v3 = _v0.substring(_v1 + 1),
            _v4 = _v3.find(_v0 => _v0.code == _v2),
            _v5 = _v4?.accents?.find(_v0 => _v0.key == _v3);
          if (_v4 && _v5) {
            let _v0 = new _v18(_v4.code, _v4.localized, _v4.native, {
              label: String(_v5.label),
              key: String(_v5.key)
            });
            _v1 ? _v6(_v1, _v0) : _v4(_v0);
          }
        }, [_v3, _v6, _v4, _v1]),
        _v9 = (0, _v2.useCallback)((_v0, _v1) => `${_v0}-${_v1}`, []),
        _v10 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v0.detail.target;
          _v1.id?.includes(_v0) && _v0.preventDefault();
        }, [_v0]),
        _v11 = (0, _v2.useMemo)(() => (0, _v1.jsx)(_v6.NestedMenuContent, {
          maxH: (0, _v4.rem)(220),
          w: "100%",
          children: _v3.map(_v0 => {
            let _v1 = _v0?.accents?.find(_v0 => _v0.key === _v19),
              _v2 = _v9(_v0.code, String(_v1?.key));
            return _v2?.some(_v0 => _v0.code === _v0.code) ? (0, _v1.jsx)(_v6.NestedMenu, {
              lazyMount: !0,
              id: `${_v0}-${_v0.code}`,
              positioning: {
                placement: "right-end",
                hideWhenDetached: !0
              },
              unmountOnExit: !0,
              closeOnSelect: !0,
              children: (0, _v1.jsx)(_v6.NestedMenuTriggerItem, {
                children: (0, _v1.jsx)(_v3.Flex, {
                  width: "100%",
                  h: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: .4,
                  children: (0, _v1.jsx)(_v9.Tooltip, {
                    label: _v17.thisLanguageAlreadyAdded,
                    placement: "top",
                    children: (0, _v1.jsxs)(_v3.Flex, {
                      justifyContent: "space-between",
                      w: "100%",
                      children: [(0, _v1.jsx)(_v3.Flex, {
                        gap: "sm",
                        children: _v0.localized
                      }), (0, _v1.jsx)(_v13.ChevronRightSmall, {
                        height: 20,
                        width: 20
                      })]
                    })
                  })
                })
              })
            }, `${_v0}-${_v0.code}`) : (0, _v1.jsxs)(_v6.NestedMenu, {
              lazyMount: !0,
              id: `${_v0}-${_v0.code}`,
              positioning: {
                placement: "right-end",
                hideWhenDetached: !0
              },
              onSelect: _v0 => _v8(_v0.value),
              unmountOnExit: !0,
              closeOnSelect: !0,
              children: [(0, _v1.jsx)(_v6.NestedMenuTriggerItem, {
                children: (0, _v1.jsxs)(_v3.Flex, {
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "sm",
                  children: [(0, _v1.jsx)(_v3.Flex, {
                    gap: "sm",
                    children: _v0.localized
                  }), (0, _v1.jsx)(_v13.ChevronRightSmall, {
                    height: 20,
                    width: 20
                  })]
                })
              }), (0, _v1.jsx)(_v7.NestedMenuPortal, {
                children: (0, _v1.jsx)(_v6.NestedMenuPositioner, {
                  style: {
                    zIndex: _v16.Z_INDEX.BOKEH_DROPDOWN_MENU
                  },
                  children: (0, _v1.jsxs)(_v6.NestedMenuContent, {
                    children: [_v7 && _v1 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v6.NestedMenuItem, {
                        value: _v2,
                        id: _v2,
                        children: _v1.label
                      }), (0, _v1.jsx)(_v6.NestedMenuDivider, {})]
                    }), (0, _v1.jsxs)(_v6.NestedMenuItemGroup, {
                      children: [(0, _v1.jsx)(_v6.NestedMenuItemGroupLabel, {
                        children: (0, _v1.jsxs)(_v10.HStack, {
                          alignItems: "center",
                          gap: "xs",
                          children: [(0, _v1.jsx)(_v8.Box, {
                            children: _v17.aiVoices
                          }), (0, _v1.jsx)(_v9.Tooltip, {
                            label: _v17.aiVoicesTooltipText,
                            placement: "top",
                            maxW: (0, _v4.rem)(280),
                            children: (0, _v1.jsx)(_v8.Box, {
                              position: "relative",
                              children: (0, _v1.jsx)(_v15.InfoCircle, {
                                boxSize: "2xs",
                                color: "text-secondary"
                              })
                            })
                          })]
                        })
                      }), _v0?.accents?.filter(_v0 => _v0.key !== _v19).map(_v0 => {
                        let _v1 = _v9(_v0.code, String(_v0.key));
                        return (0, _v1.jsx)(_v6.NestedMenuItem, {
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
      return (0, _v1.jsxs)(_v3.Flex, {
        gap: (0, _v4.rem)(4),
        alignItems: "center",
        w: "100%",
        position: "relative",
        children: [(0, _v1.jsx)(_v8.Box, {
          w: "100%",
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v6.NestedMenu, {
            id: `${_v0}-parent`,
            unmountOnExit: !0,
            closeOnSelect: !0,
            lazyMount: !0,
            positioning: {
              placement: "bottom-start",
              sameWidth: !0
            },
            onFocusOutside: _v10,
            children: [(0, _v1.jsx)(_v6.NestedMenuTrigger, {
              variant: "tertiary",
              fontSize: (0, _v4.rem)(12),
              w: "100%",
              borderColor: "input-stroke",
              borderWidth: (0, _v4.rem)(1),
              backgroundColor: "input-fill !important",
              children: (0, _v1.jsxs)(_v3.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                gap: "sm",
                w: "100%",
                children: [(0, _v1.jsx)(_v5.Text, {
                  variant: "body-md",
                  gap: "sm",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  minWidth: "0",
                  flexGrow: "1",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  children: _v1 ? _v1.getDisplayLabel() : _v17.selectLanguage
                }), (0, _v1.jsx)(_v12.ChevronDown, {
                  height: 20,
                  width: 20
                })]
              })
            }), (0, _v1.jsx)(_v7.NestedMenuPortal, {
              children: (0, _v1.jsx)(_v6.NestedMenuPositioner, {
                style: {
                  zIndex: _v16.Z_INDEX.BOKEH_DROPDOWN_MENU
                },
                children: _v11
              })
            })]
          })
        }, `${_v0}-parent`), (0, _v1.jsx)(_v9.Tooltip, {
          label: _v17.remove,
          placement: "top",
          isDisabled: !_v1,
          children: (0, _v1.jsx)(_v11.IconButton, {
            "aria-label": "Remove language",
            isDisabled: !_v1,
            icon: (0, _v1.jsx)(_v14.CloseX, {}),
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
    (0, _v2.useEffect)(() => _v3 && _v3(), [_v3]);
    let _v5 = (0, _v2.useCallback)(_v0 => {
        _v2([..._v0, _v0]);
      }, [_v2, _v0]),
      _v6 = (0, _v2.useCallback)(_v0 => {
        _v2(_v0.filter(_v0 => _v0.getKey() !== _v0.getKey()));
      }, [_v2, _v0]),
      _v7 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v0.findIndex(_v0 => _v0.getKey() === _v0.getKey());
        if (-1 !== _v2) {
          let _v0 = [..._v0];
          _v0[_v2] = _v1, _v2(_v0);
        }
      }, [_v2, _v0]);
    return (0, _v1.jsxs)(_v3.Flex, {
      flexDirection: "column",
      gap: (0, _v4.rem)(12),
      children: [_v0.map((_v0, _v1) => (0, _v1.jsx)(_v20, {
        menuKey: `lang-select-${_v1}`,
        selectedLanguage: _v0,
        selectedLanguages: _v0,
        availableLanguages: _v1,
        onSelectLanguage: _v5,
        onRemoveLanguage: _v6,
        onReplaceLanguage: _v7,
        hasOriginalTranslationsAccents: _v4
      }, `lang-select-${_v1}`)), (0, _v1.jsx)(_v20, {
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