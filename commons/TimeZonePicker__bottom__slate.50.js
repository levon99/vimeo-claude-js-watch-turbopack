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
    _v19 = _v0.i(0);
  function _v20(_v0) {
    let _v1 = Math.abs(_v0),
      [_v2, _v3] = [Math.floor(_v1 / 60), _v1 % 60].map(_v0 => _v0.toString().padStart(2, "0")),
      _v4 = `${_v2}:${_v3}`;
    return `${_v0 >= 0 ? "+" : "-"} ${_v4}`;
  }
  _v0.s(["TimeZonePicker", 0, function ({
    timeZone: _v0,
    attach: _v1 = "bottom",
    onChange: _v2
  }) {
    let _v3 = (0, _v13.useColorModeValue)("slate.50", "grayscale.800"),
      [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(""),
      _v8 = (0, _v3.useRef)(null),
      _v9 = (0, _v3.useRef)(null),
      _v10 = (0, _v3.useRef)(null),
      _v11 = (0, _v3.useRef)(null),
      _v12 = (0, _v3.useRef)(null),
      _v13 = (0, _v3.useMemo)(() => (0, _v2.getTimeZones)(), []),
      _v14 = (0, _v3.useMemo)(() => _v13.find(_v0 => _v0 === _v0.name || _v0.group[0] === _v0) ?? _v13.find(_v0 => _v0.group.includes(_v0)), [_v13, _v0]),
      _v15 = (0, _v3.useMemo)(() => _v6 ? _v13.filter(_v0 => _v0.rawFormat.toLowerCase().search(_v6.toLowerCase()) >= 0 || _v0.countryName.toLowerCase().search(_v6.toLowerCase()) >= 0) : _v13, [_v13, _v6]);
    (0, _v3.useEffect)(() => {
      _v4 && (_v11?.current?.scroll({
        top: (_v12?.current?.offsetTop ?? 0) - 120,
        behavior: "auto"
      }), setTimeout(() => {
        _v9.current?.focus();
      }, 100));
    }, [_v4, _v11, _v12]), (0, _v14.useOutsideClick)({
      enabled: _v4,
      ref: _v10,
      handler: _v0 => {
        _v0.target && _v8?.current?.contains(_v0.target) || _v5(!1);
      }
    });
    let _v16 = (0, _v19.useScrollbarStyles)({
      width: (0, _v4.rem)(8),
      scrollbarColor: "transparent"
    });
    return (0, _v1.jsxs)(_v6.Popover, {
      isOpen: _v4,
      placement: _v1,
      matchWidth: !0,
      children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
        children: (0, _v1.jsxs)(_v9.Flex, {
          ref: _v8,
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: (0, _v4.rem)(32),
          borderRadius: "sm",
          padding: `${(0, _v4.rem)(6)} ${(0, _v4.rem)(12)}`,
          cursor: "pointer",
          tabIndex: 0,
          background: "surface",
          outline: _v4 ? "2px solid" : "1px solid",
          outlineColor: _v4 ? "inherit" : "input-stroke",
          sx: {
            "&:hover": {
              background: "fill-component-hover"
            },
            "&:focus, &:active": {
              outline: "2px solid",
              outlineColor: "inherit"
            }
          },
          onClick: () => {
            _v5(_v0 => !_v0), _v7("");
          },
          children: [(0, _v1.jsxs)(_v5.Paragraph, {
            size: "md",
            color: "text-primary",
            letterSpacing: (0, _v4.rem)(-.14),
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v15.Box, {
              as: "span",
              "data-testid": "time-zone-picker-value",
              children: _v14 && `${_v14.mainCities[0]}, ${_v14.countryName}`
            }), (0, _v1.jsx)(_v15.Box, {
              as: "span",
              fontSize: (0, _v4.rem)(14),
              color: "text-secondary",
              whiteSpace: "nowrap",
              children: ` (GMT ${_v20(_v14?.currentTimeOffsetInMinutes ?? 0)})`
            })]
          }), (0, _v1.jsx)(_v16.ChevronDown, {})]
        })
      }), (0, _v1.jsx)(_v8.PopoverContent, {
        minWidth: "100%",
        children: (0, _v1.jsxs)(_v9.Flex, {
          ref: _v10,
          direction: "column",
          children: [(0, _v1.jsx)(_v9.Flex, {
            position: "relative",
            padding: (0, _v4.rem)(8),
            width: "100%",
            children: (0, _v1.jsxs)(_v10.InputGroup, {
              size: "sm",
              children: [(0, _v1.jsx)(_v12.InputLeftElement, {
                children: (0, _v1.jsx)(_v17.SearchMagnifier, {
                  height: 20,
                  width: 20
                })
              }), (0, _v1.jsx)(_v11.Input, {
                ref: _v9,
                placeholder: (0, _v18.translate)({
                  singular: "Search",
                  dictionary: {
                    es: {
                      singular: "Buscar"
                    },
                    "de-DE": {
                      singular: "Suchen"
                    },
                    "fr-FR": {
                      singular: "Chercher"
                    },
                    "ja-JP": {
                      singular: "検索"
                    },
                    "ko-KR": {
                      singular: "검색"
                    },
                    "pt-BR": {
                      singular: "Pesquisar"
                    },
                    "zh-CN": {
                      singular: "搜索"
                    }
                  }
                }),
                value: _v6,
                onChange: _v0 => {
                  _v7(_v0.target.value);
                }
              })]
            })
          }), (0, _v1.jsx)(_v9.Flex, {
            ref: _v11,
            direction: "column",
            gap: (0, _v4.rem)(8),
            padding: `0 ${(0, _v4.rem)(8)} ${(0, _v4.rem)(8)} ${(0, _v4.rem)(8)}`,
            overflowY: "auto",
            overflowX: "hidden",
            height: "100%",
            maxHeight: (0, _v4.rem)(180),
            sx: _v16,
            children: _v15.map(_v0 => (0, _v1.jsx)(_v9.Flex, {
              ref: _v0.name === _v14?.name ? _v12 : null,
              justifyContent: "flex-start",
              alignItems: "center",
              padding: `${(0, _v4.rem)(8)} ${(0, _v4.rem)(12)}`,
              gap: (0, _v4.rem)(8),
              borderRadius: (0, _v4.rem)(8),
              cursor: "pointer",
              width: "100%",
              background: _v0.name === _v14?.name ? _v3 : "transparent",
              _hover: {
                background: _v3
              },
              onClick: () => {
                _v5(!1), _v2(_v0.name);
              },
              children: (0, _v1.jsxs)(_v5.Paragraph, {
                alignItems: "center",
                size: "md",
                whiteSpace: "wrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                margin: 0,
                gap: (0, _v4.rem)(4),
                width: "100%",
                children: [(0, _v1.jsx)(_v15.Box, {
                  as: "span",
                  children: `${_v0.mainCities[0]}, ${_v0.countryName}`
                }), (0, _v1.jsx)(_v15.Box, {
                  as: "span",
                  fontSize: (0, _v4.rem)(14),
                  color: "text-secondary",
                  whiteSpace: "nowrap",
                  children: ` (GMT ${_v20(_v0.currentTimeOffsetInMinutes)})`
                })]
              })
            }, _v0.name))
          })]
        })
      })]
    });
  }], 0);
}