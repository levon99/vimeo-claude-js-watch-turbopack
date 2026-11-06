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
  let _v18 = "original",
    _v19 = () => (0, _v1.jsx)(_v7.Tag, {
      size: "sm",
      bg: "fill-brand",
      color: "text-primary",
      borderRadius: "xs",
      h: (0, _v10.rem)(14),
      px: (0, _v10.rem)(6),
      pointerEvents: "none",
      children: (0, _v1.jsx)(_v7.TagLabel, {
        fontSize: "body-xs",
        fontFamily: "heading",
        lineHeight: "1",
        children: _v17.proBadge
      })
    });
  _v0.s(["LanguageChipsField", 0, ({
    selectedLanguages: _v0,
    availableLanguages: _v1,
    proOnlyCodes: _v2 = new Set(),
    hasOriginalTranslationsAccents: _v3 = !1,
    onAdd: _v4,
    onRemove: _v5,
    placeholder: _v6 = _v17.selectLanguages
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(""),
      [_v9, _v10] = (0, _v2.useState)(0),
      _v11 = (0, _v2.useRef)(null),
      _v12 = _v1.filter(_v0 => {
        let _v1 = _v7.trim().toLowerCase();
        return 0 === _v1.length || _v0.localized.toLowerCase().includes(_v1) || _v0.native.toLowerCase().includes(_v1) || _v0.code.toLowerCase().includes(_v1);
      }),
      _v13 = _v0 => ({
        key: String(_v0.key),
        label: String(_v0.label)
      }),
      _v14 = _v0 => {
        let _v1 = _v0.accents?.find(_v0 => _v0.key === _v18),
          _v2 = _v0.accents?.find(_v0 => "auto" === _v0.key);
        return (_v3 ? _v1 : void 0) ?? _v2 ?? _v0.accents?.[0];
      },
      _v15 = (_v0, _v1) => {
        _v4(_v0, _v1), _v8(""), _v10(0), requestAnimationFrame(() => {
          _v11.current?.querySelector('[role="menuitem"]')?.focus();
        });
      };
    return (0, _v2.useEffect)(() => {
      if (!_v7) return;
      let _v0 = _v11.current?.querySelectorAll('[role="menuitem"]');
      _v0?.item(_v9)?.focus();
    }, [_v12.length, _v9, _v7]), (0, _v1.jsxs)(_v5.NestedMenu, {
      closeOnSelect: !1,
      positioning: {
        placement: "bottom-start",
        sameWidth: !0
      },
      onOpenChange: ({
        open: _v0
      }) => {
        _v0 || _v8(""), _v10(0);
      },
      children: [(0, _v1.jsx)(_v5.NestedMenuTrigger, {
        variant: "tertiary",
        w: "100%",
        height: "auto",
        minHeight: (0, _v10.rem)(40),
        p: (0, _v10.rem)(8),
        display: "flex",
        alignItems: "center",
        lineHeight: "normal",
        borderWidth: (0, _v10.rem)(1),
        borderColor: "input-stroke",
        borderRadius: "md",
        backgroundColor: "input-fill !important",
        justifyContent: "flex-start",
        fontWeight: "regular",
        outlineOffset: (0, _v10.rem)(-2),
        _hover: {
          backgroundColor: "input-fill !important"
        },
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexWrap: "wrap",
          gap: (0, _v10.rem)(8),
          alignItems: "center",
          w: "100%",
          children: [_v0.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
            bg: "fill-component-hover",
            h: (0, _v10.rem)(24),
            minH: (0, _v10.rem)(24),
            maxW: "100%",
            pl: (0, _v10.rem)(8),
            pr: (0, _v10.rem)(4),
            borderRadius: "sm",
            alignItems: "center",
            gap: (0, _v10.rem)(1),
            children: [(0, _v1.jsx)(_v9.Text, {
              variant: "body-md",
              color: "text-primary",
              isTruncated: !0,
              maxW: "100%",
              children: `${_v0.localized}${_v0.accent ? ` • ${_v0.accent.label}` : ""}`
            }), (0, _v1.jsx)(_v3.Box, {
              as: "span",
              display: "inline-flex",
              cursor: "pointer",
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation(), _v5(_v0);
              },
              children: (0, _v1.jsx)(_v13.CloseXSmall, {
                boxSize: (0, _v10.rem)(18)
              })
            })]
          }, _v0.getKey())), _v7 && (0, _v1.jsx)(_v15.LanguageSearchValue, {
            value: _v7
          }), !_v0.length && !_v7 && (0, _v1.jsx)(_v9.Text, {
            variant: "body-md",
            color: "text-tertiary",
            children: _v6
          })]
        })
      }), (0, _v1.jsx)(_v6.NestedMenuPortal, {
        children: (0, _v1.jsx)(_v5.NestedMenuPositioner, {
          style: {
            zIndex: _v16.Z_INDEX.BOKEH_DROPDOWN_MENU
          },
          children: (0, _v1.jsx)(_v5.NestedMenuContent, {
            maxH: (0, _v10.rem)(260),
            overflowY: "auto",
            onKeyDown: _v0 => {
              if ("Escape" === _v0.key) {
                _v7 && (_v0.preventDefault(), _v8(""));
                return;
              }
              if ("Backspace" === _v0.key) {
                _v7 && (_v0.preventDefault(), _v8(_v0 => _v0.slice(0, -1)), _v10(0));
                return;
              }
              if ("ArrowDown" === _v0.key && _v7) {
                _v0.preventDefault(), _v10(_v0 => Math.min(_v0 + 1, Math.max(_v12.length - 1, 0)));
                return;
              }
              if ("ArrowUp" === _v0.key && _v7) {
                _v0.preventDefault(), _v10(_v0 => Math.max(_v0 - 1, 0));
                return;
              }
              if ("Enter" === _v0.key && _v7 && _v12.length) {
                _v0.preventDefault();
                let _v0 = _v12[Math.min(_v9, _v12.length - 1)],
                  _v1 = _v14(_v0);
                _v15(_v0, _v1 ? _v13(_v1) : void 0);
                return;
              }
              1 !== _v0.key.length || _v0.metaKey || _v0.ctrlKey || _v0.altKey || (_v0.preventDefault(), _v8(_v0 => _v0 + _v0.key), _v10(0));
            },
            children: (0, _v1.jsx)(_v3.Box, {
              ref: _v11,
              children: _v12.map(_v0 => {
                let _v1,
                  _v2 = !!_v0.accents?.length,
                  _v3 = (_v1 = _v0.code, _v0.some(_v0 => _v0.code === _v1)),
                  _v4 = _v0.accents?.find(_v0 => _v0.key === _v18),
                  _v5 = _v14(_v0),
                  _v6 = (0, _v1.jsxs)(_v4.Flex, {
                    alignItems: "center",
                    gap: (0, _v10.rem)(6),
                    minWidth: 0,
                    children: [(0, _v1.jsx)(_v9.Text, {
                      variant: "body-md",
                      isTruncated: !0,
                      children: _v0.localized
                    }), _v2.has(_v0.code) && (0, _v1.jsx)(_v19, {})]
                  });
                return _v2 ? (0, _v1.jsxs)(_v5.NestedMenu, {
                  positioning: {
                    placement: "right-start"
                  },
                  children: [(0, _v1.jsx)(_v5.NestedMenuTriggerItem, {
                    children: (0, _v1.jsxs)(_v4.Flex, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      w: "100%",
                      gap: (0, _v10.rem)(8),
                      onClick: _v0 => {
                        _v0.target.closest("[data-language-chevron]") || (_v0.preventDefault(), _v0.stopPropagation(), _v5 ? _v15(_v0, _v13(_v5)) : _v15(_v0));
                      },
                      children: [_v6, (0, _v1.jsx)(_v3.Box, {
                        as: "span",
                        "data-language-chevron": !0,
                        display: "inline-flex",
                        children: (0, _v1.jsx)(_v11.ChevronRightSmall, {
                          boxSize: (0, _v10.rem)(20)
                        })
                      })]
                    })
                  }), (0, _v1.jsx)(_v6.NestedMenuPortal, {
                    children: (0, _v1.jsx)(_v5.NestedMenuPositioner, {
                      style: {
                        zIndex: _v16.Z_INDEX.BOKEH_NESTED_DROPDOWN_MENU
                      },
                      children: (0, _v1.jsxs)(_v5.NestedMenuContent, {
                        children: [_v3 && _v4 && (0, _v1.jsxs)(_v1.Fragment, {
                          children: [(0, _v1.jsx)(_v5.NestedMenuItem, {
                            value: `${_v0.code}-original`,
                            onClick: () => _v15(_v0, _v13(_v4)),
                            children: _v4.label
                          }), (0, _v1.jsx)(_v5.NestedMenuDivider, {})]
                        }), (0, _v1.jsxs)(_v5.NestedMenuItemGroup, {
                          children: [(0, _v1.jsx)(_v5.NestedMenuItemGroupLabel, {
                            children: (0, _v1.jsxs)(_v4.Flex, {
                              alignItems: "center",
                              gap: (0, _v10.rem)(4),
                              children: [_v17.aiVoices, (0, _v1.jsx)(_v8.Tooltip, {
                                label: _v17.aiVoicesTooltipText,
                                placement: "top",
                                maxW: (0, _v10.rem)(280),
                                children: (0, _v1.jsx)(_v3.Box, {
                                  position: "relative",
                                  children: (0, _v1.jsx)(_v14.InfoCircle, {
                                    boxSize: "2xs",
                                    color: "text-secondary"
                                  })
                                })
                              })]
                            })
                          }), _v0.accents?.filter(_v0 => _v0.key !== _v18).map(_v0 => (0, _v1.jsx)(_v5.NestedMenuItem, {
                            value: `${_v0.code}-${_v0.key}`,
                            onClick: () => _v15(_v0, _v13(_v0)),
                            children: _v0.label
                          }, _v0.key))]
                        })]
                      })
                    })
                  })]
                }, _v0.code) : (0, _v1.jsx)(_v5.NestedMenuItem, {
                  value: _v0.code,
                  onClick: () => _v15(_v0),
                  children: (0, _v1.jsxs)(_v4.Flex, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    w: "100%",
                    children: [_v6, _v3 && (0, _v1.jsx)(_v12.CircleCheck, {
                      boxSize: (0, _v10.rem)(16)
                    })]
                  })
                }, _v0.code);
              })
            })
          })
        })
      })]
    });
  }, "ProBadge", 0, _v19]);
}