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
    _v12 = _v0.i(0);
  function _v13({
    label: _v0,
    options: _v1,
    value: _v2,
    onChange: _v3,
    isDisabled: _v4 = !1,
    isLabelHidden: _v5 = !1
  }) {
    let _v6 = (0, _v2.useId)(),
      _v7 = _v1.find(_v0 => _v0.value === _v2);
    return (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      gap: "xs",
      w: "100%",
      children: [(0, _v1.jsx)(_v9.Text, {
        color: "text-primary",
        id: _v6,
        variant: "heading-xs",
        hidden: _v5,
        children: _v0
      }), (0, _v1.jsxs)(_v4.Menu, {
        matchWidth: !0,
        children: [(0, _v1.jsx)(_v5.MenuButton, {
          "aria-labelledby": _v6,
          backgroundColor: "input-fill",
          border: "1px solid",
          minH: (0, _v10.rem)(40),
          borderColor: "input-stroke",
          borderRadius: "md",
          disabled: _v4,
          pl: "md",
          pr: "sm",
          py: "xs",
          w: "100%",
          _disabled: {
            cursor: "not-allowed",
            opacity: .4
          },
          _hover: {
            borderColor: "input-stroke-hover"
          },
          children: (0, _v1.jsxs)(_v3.Flex, {
            align: "center",
            gap: "xs",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v3.Flex, {
              align: "center",
              gap: "xs",
              minW: 0,
              children: [_v7?.icon, (0, _v1.jsx)(_v9.Text, {
                color: "text-primary",
                isTruncated: !0,
                variant: "body-md",
                children: _v7?.label
              })]
            }), (0, _v1.jsx)(_v12.ChevronDownSmall, {
              boxSize: (0, _v10.rem)(20)
            })]
          })
        }), (0, _v1.jsx)(_v7.MenuList, {
          children: (0, _v1.jsx)(_v8.MenuOptionGroup, {
            onChange: _v0 => _v3(_v0),
            type: "radio",
            value: _v2,
            children: _v1.map(_v0 => (0, _v1.jsx)(_v6.MenuItemOption, {
              icon: null,
              iconSpacing: 0,
              value: _v0.value,
              children: (0, _v1.jsxs)(_v3.Flex, {
                align: "center",
                gap: "xs",
                justify: "space-between",
                children: [(0, _v1.jsxs)(_v3.Flex, {
                  align: "center",
                  gap: "xs",
                  children: [_v0.icon, _v0.label]
                }), _v0.value === _v2 ? (0, _v1.jsx)(_v11.CheckSmall, {
                  color: "text-primary"
                }) : null]
              })
            }, _v0.value))
          })
        })]
      })]
    });
  }
  _v0.s(["MenuSelect", 0, _v13], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = ({
    label: _v0,
    value: _v1,
    onChange: _v2,
    isDisabled: _v3
  }) => (0, _v1.jsxs)(_v15.InputGroup, {
    flex: "1",
    minW: 0,
    children: [(0, _v1.jsx)(_v14.Input, {
      "aria-label": _v0,
      inputMode: "numeric",
      isDisabled: _v3,
      onChange: _v0 => _v2(_v0.target.value.replace(/\D/g, "")),
      pr: (0, _v10.rem)(52),
      value: _v1
    }), (0, _v1.jsx)(_v16.InputRightElement, {
      backgroundColor: "fill-component",
      borderRightRadius: "md",
      h: "100%",
      pointerEvents: "none",
      w: (0, _v10.rem)(40),
      children: (0, _v1.jsx)(_v9.Text, {
        color: "text-secondary",
        variant: "body-md",
        children: (0, _v18.translate)("px")
      })
    })]
  });
  _v0.s(["SizingInput", 0, function ({
    value: _v0,
    onChange: _v1,
    label: _v2,
    isDisabled: _v3 = !1
  }) {
    let _v4 = _v0 => _v1({
        ..._v0,
        ..._v0
      }),
      _v5 = [{
        value: "responsive",
        label: (0, _v18.translate)({
          singular: "Responsive",
          dictionary: {
            es: {
              singular: "Adaptable"
            },
            "de-DE": {
              singular: "Responsiv"
            },
            "fr-FR": {
              singular: "Adaptative"
            },
            "ja-JP": {
              singular: "レスポンシブ"
            },
            "ko-KR": {
              singular: "반응형"
            },
            "pt-BR": {
              singular: "Responsivo"
            },
            "zh-CN": {
              singular: "响应式"
            }
          }
        })
      }, {
        value: "fixed",
        label: (0, _v18.translate)({
          singular: "Fixed",
          dictionary: {
            es: {
              singular: "Fijo"
            },
            "de-DE": {
              singular: "Unveränderlich"
            },
            "fr-FR": {
              singular: "Fixe"
            },
            "ja-JP": {
              singular: "固定サイズ"
            },
            "ko-KR": {
              singular: "고정형"
            },
            "pt-BR": {
              singular: "Fixa"
            },
            "zh-CN": {
              singular: "固定"
            }
          }
        })
      }];
    return (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      gap: "md",
      w: "100%",
      children: [(0, _v1.jsx)(_v13, {
        isDisabled: _v3,
        label: _v2 ?? (0, _v18.translate)({
          singular: "Sizing",
          dictionary: {
            es: {
              singular: "Tamaño"
            },
            "de-DE": {
              singular: "Größe"
            },
            "fr-FR": {
              singular: "Taille"
            },
            "ja-JP": {
              singular: "サイズ"
            },
            "ko-KR": {
              singular: "크기"
            },
            "pt-BR": {
              singular: "Dimensionamento"
            },
            "zh-CN": {
              singular: "尺寸"
            }
          }
        }),
        onChange: _v0 => _v4({
          sizing: _v0
        }),
        options: _v5,
        value: _v0.sizing
      }), "fixed" === _v0.sizing ? (0, _v1.jsxs)(_v3.Flex, {
        align: "center",
        gap: "md",
        w: "100%",
        children: [(0, _v1.jsx)(_v19, {
          isDisabled: _v3,
          label: (0, _v18.translate)({
            singular: "Width",
            dictionary: {
              es: {
                singular: '"Width" (Ancho)'
              },
              "de-DE": {
                singular: "Width (Breite)"
              },
              "fr-FR": {
                singular: "Largeur"
              },
              "ja-JP": {
                singular: "幅"
              },
              "ko-KR": {
                singular: "너비"
              },
              "pt-BR": {
                singular: "Largura"
              },
              "zh-CN": {
                singular: "宽度"
              }
            }
          }),
          onChange: _v0 => _v4({
            width: _v0
          }),
          value: _v0.width
        }), (0, _v1.jsx)(_v17.CloseX, {
          "aria-hidden": !0,
          boxSize: (0, _v10.rem)(16)
        }), (0, _v1.jsx)(_v19, {
          isDisabled: _v3,
          label: (0, _v18.translate)({
            singular: "Height",
            dictionary: {
              es: {
                singular: '"Height" (Alturo)'
              },
              "de-DE": {
                singular: "Height (Höhe)"
              },
              "fr-FR": {
                singular: "Hauteur"
              },
              "ja-JP": {
                singular: "高さ"
              },
              "ko-KR": {
                singular: "높이"
              },
              "pt-BR": {
                singular: "Altura"
              },
              "zh-CN": {
                singular: "高"
              }
            }
          }),
          onChange: _v0 => _v4({
            height: _v0
          }),
          value: _v0.height
        })]
      }) : null]
    });
  }], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  async function _v22({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      eventSeriesId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v20.measureLatency)("getUserEventSeryEvents", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/event_series/${_v3}/events?${(0, _v21.searchQueryString)(_v4)}&fields=${_v1.map(_v21.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v21.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v21.deepCamelCase)(_v1);
    });
  }
  async function _v23({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      eventSeriesId: _v4
    },
    ..._v5
  }) {
    return (0, _v20.measureLatency)("postUserEventSeryEvents", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/event_series/${_v4}/events?fields=${_v1.map(_v21.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v21.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v21.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v21.deepCamelCase)(_v1);
    });
  }
  async function _v24({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      eventSeriesId: _v4
    },
    ..._v5
  }) {
    return (0, _v20.measureLatency)("patchUserEventSeryEvents", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/event_series/${_v4}/events?fields=${_v1.map(_v21.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v21.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v21.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v21.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getUserEventSeryEvents", 0, _v22, "patchUserEventSeryEvents", 0, _v24, "postUserEventSeryEvents", 0, _v23], 0);
}