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
  function _v18({
    privacy: _v0,
    isDisabled: _v1,
    isActive: _v2,
    onItemClick: _v3
  }) {
    let _v4 = (0, _v2.useCallback)(() => {
      _v3(_v0);
    }, [_v3, _v0]);
    return (0, _v1.jsxs)(_v3.Flex, {
      "data-testid": `privacy-item-${_v0.value}`,
      direction: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      opacity: _v1 ? .6 : 1,
      padding: `${(0, _v4.rem)(8)} ${(0, _v4.rem)(12)}`,
      gap: (0, _v4.rem)(10),
      borderRadius: "sm",
      cursor: _v1 ? "not-allowed" : "pointer",
      background: "transparent",
      _hover: {
        background: "fill-component-hover"
      },
      onClick: _v1 ? void 0 : _v4,
      children: [(0, _v1.jsx)(_v3.Flex, {
        sx: {
          svg: {
            height: (0, _v4.rem)(20),
            width: (0, _v4.rem)(20)
          }
        },
        children: _v0.icon
      }), (0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        children: [(0, _v1.jsx)(_v16.Header, {
          size: "xs",
          marginBottom: 0,
          color: "text-primary",
          "data-testid": `privacy-item-${_v0.value}-header`,
          children: _v0.title
        }), (0, _v1.jsx)(_v9.Paragraph, {
          size: "sm",
          marginBottom: 0,
          color: "text-secondary",
          children: _v0.description
        })]
      }), _v2 ? (0, _v1.jsx)(_v17.CheckmarkFilled, {
        boxSize: (0, _v4.rem)(20),
        marginLeft: "auto"
      }) : null]
    });
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.s(["EventPrivacy", 0, function ({
    isDisabled: _v0,
    allowedPrivacies: _v1,
    selectedPrivacy: _v2,
    disabledTip: _v3,
    isVertical: _v4 = !0,
    onPrivacySelect: _v5,
    isShowcasePrivacyHintVisible: _v6 = !1
  }) {
    let _v7 = (0, _v2.useContext)(_v14.ViewerContext),
      _v8 = (0, _v2.useMemo)(() => (0, _v15.getDefaultPrivacies)(_v7?.teamUser?.teamName, _v7?.teamUser?.isWorkspace), [_v7?.teamUser?.isWorkspace, _v7?.teamUser?.teamName]),
      [_v9, _v10] = (0, _v2.useState)(_v8.find(_v0 => _v0.value === _v2) ?? _v8.find(_v0 => "anybody" === _v0.value) ?? _v8[0]),
      [_v11, _v12] = (0, _v2.useState)(!1),
      _v13 = (0, _v2.useRef)(null),
      _v14 = (0, _v2.useMemo)(() => _v8.filter(_v0 => _v1.includes(_v0.value)), [_v1, _v8]),
      _v15 = (0, _v2.useMemo)(() => _v0 || !_v14.length || !_v1.find(_v0 => _v0 === _v2), [_v0, _v14.length, _v1, _v2]),
      _v16 = (0, _v2.useCallback)(() => {
        _v15 || _v12(!_v11);
      }, [_v15, _v11]),
      _v17 = (0, _v2.useCallback)(_v0 => {
        _v5(_v0.value), _v10(_v0), _v12(!1);
      }, [_v5, _v12]);
    return (0, _v2.useEffect)(() => {
      _v10(_v8.find(_v0 => _v0.value === _v2) ?? _v8[0]);
    }, [_v8, _v2]), (0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
        _v11 && "Escape" === _v0.code && _v12(!1);
      };
      return window.addEventListener("keydown", _v0), () => {
        window.removeEventListener("keydown", _v0);
      };
    }), (0, _v5.useOutsideClick)({
      enabled: _v11,
      ref: _v13,
      handler: () => {
        _v11 && _v12(!1);
      }
    }), (0, _v1.jsxs)(_v3.Flex, {
      gap: (0, _v4.rem)(4),
      direction: _v4 ? "column" : "row",
      "data-testid": "event-privacy",
      children: [(0, _v1.jsx)(_v10.FormLabel, {
        color: "text-primary",
        fontWeight: "bold",
        role: "heading",
        minWidth: (0, _v4.rem)(120),
        marginBottom: _v4 ? (0, _v4.rem)(8) : 0,
        marginTop: (0, _v4.rem)(6),
        display: "flex",
        alignItems: "flex-start",
        children: (0, _v1.jsx)(_v9.Paragraph, {
          size: "md",
          fontWeight: "bold",
          color: "text-primary",
          children: (0, _v13.translate)({
            singular: "Link privacy",
            dictionary: {
              es: {
                singular: "Privacidad de los enlaces"
              },
              "de-DE": {
                singular: "Link-Datenschutz"
              },
              "fr-FR": {
                singular: "Confidentialité du lien"
              },
              "ja-JP": {
                singular: "リンクのプライバシー"
              },
              "ko-KR": {
                singular: "링크 프라이버시"
              },
              "pt-BR": {
                singular: "Link de Privacidade"
              },
              "zh-CN": {
                singular: "链接隐私"
              }
            }
          })
        })
      }), (0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        flex: 1,
        children: [(0, _v1.jsxs)(_v6.Popover, {
          isOpen: _v11,
          placement: "top",
          matchWidth: !0,
          children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
            children: (0, _v1.jsx)(_v3.Flex, {
              "data-testid": "selected-privacy-wrapper",
              ref: _v13,
              direction: "row",
              alignItems: "center",
              width: "100%",
              background: "surface",
              outline: _v11 ? "2px solid" : "1px solid",
              outlineColor: _v11 ? "inherit" : "input-stroke",
              borderRadius: "sm",
              height: (0, _v4.rem)(32),
              padding: `${(0, _v4.rem)(6)} ${(0, _v4.rem)(12)}`,
              cursor: _v15 ? "not-allowed" : "pointer",
              tabIndex: 0,
              opacity: _v15 ? .6 : 1,
              sx: {
                "&:hover": {
                  background: "fill-component-hover"
                },
                "&:focus, &:active": _v15 ? {} : {
                  outline: "2px solid",
                  outlineColor: "inherit"
                },
                '& span[tabindex="0"]': {
                  flex: 1
                }
              },
              onClick: _v16,
              children: (0, _v1.jsx)(_v20.BokehTooltip, {
                placement: "bottom",
                isDisabled: !_v15 || _v15 && !_v3,
                maxWidth: (0, _v4.rem)(300),
                label: _v3,
                children: (0, _v1.jsxs)(_v3.Flex, {
                  gap: (0, _v4.rem)(16),
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                  children: [(0, _v1.jsx)(_v9.Paragraph, {
                    size: "md",
                    color: "text-primary",
                    "data-testid": "selected-privacy-header",
                    children: _v9.title
                  }), (0, _v1.jsx)(_v11.ChevronDown, {})]
                })
              })
            })
          }), (0, _v1.jsx)(_v8.PopoverContent, {
            className: "privacy-items-popover",
            minWidth: "100%",
            children: (0, _v1.jsx)(_v3.Flex, {
              className: "privacy-items-list",
              direction: "column",
              overflowY: "auto",
              overflowX: "hidden",
              height: "100%",
              width: "100%",
              gap: (0, _v4.rem)(8),
              children: _v14.map(_v0 => (0, _v1.jsx)(_v18, {
                privacy: _v0,
                isActive: _v0.value === _v9.value,
                onItemClick: _v17
              }, _v0.value))
            })
          })]
        }), _v6 ? (0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v4.rem)(4),
          marginTop: (0, _v4.rem)(8),
          children: [(0, _v1.jsx)(_v12.InfoCircle, {
            boxSize: (0, _v4.rem)(16),
            color: "text-tertiary"
          }), (0, _v1.jsx)(_v9.Paragraph, {
            color: "text-secondary",
            size: "sm",
            letterSpacing: (0, _v4.rem)(-.24),
            children: _v19.T_PRIVACY_IS_SET_BY_SHOWCASE
          })]
        }) : null]
      })]
    });
  }], 0);
}