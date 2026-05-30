{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = function (_v0, _v1) {
      var _v2,
        _v3 = (0, _v2.default)({}, _v0, _v1);
      for (var _v4 in _v0) _v0[_v4] && "object" == typeof _v1[_v4] && (0, _v2.default)(_v3, ((_v2 = {})[_v4] = (0, _v2.default)(_v0[_v4], _v1[_v4]), _v2));
      return _v3;
    },
    _v4 = function (_v0) {
      var _v1 = {};
      return Object.keys(_v0).sort(function (_v0, _v1) {
        return _v0.localeCompare(_v1, void 0, {
          numeric: !0,
          sensitivity: "base"
        });
      }).forEach(function (_v0) {
        _v1[_v0] = _v0[_v0];
      }), _v1;
    },
    _v5 = {
      breakpoints: [40, 52, 64].map(function (_v0) {
        return _v0 + "em";
      })
    },
    _v6 = function (_v0) {
      return "@media screen and (min-width: " + _v0 + ")";
    },
    _v7 = function (_v0, _v1) {
      return _v8(_v1, _v0, _v0);
    },
    _v8 = function (_v0, _v1, _v2, _v3, _v4) {
      for (_v3 = 0, _v1 = _v1 && _v1.split ? _v1.split(".") : [_v1]; _v3 < _v1.length; _v3++) _v0 = _v0 ? _v0[_v1[_v3]] : _v4;
      return _v0 === _v4 ? _v2 : _v0;
    },
    _v9 = function _v0(_v1) {
      var _v2 = {},
        _v3 = function (_v0) {
          var _v1 = {},
            _v2 = !1,
            _v3 = _v0.theme && _v0.theme.disableStyledSystemCache;
          for (var _v4 in _v0) if (_v1[_v4]) {
            var _v5 = _v1[_v4],
              _v6 = _v0[_v4],
              _v7 = _v8(_v0.theme, _v5.scale, _v5.defaults);
            if ("object" == typeof _v6) {
              if (_v2.breakpoints = !_v3 && _v2.breakpoints || _v8(_v0.theme, "breakpoints", _v5.breakpoints), Array.isArray(_v6)) {
                _v2.media = !_v3 && _v2.media || [null].concat(_v2.breakpoints.map(_v6)), _v1 = _v3(_v1, _v10(_v2.media, _v5, _v7, _v6, _v0));
                continue;
              }
              null !== _v6 && (_v1 = _v3(_v1, _v11(_v2.breakpoints, _v5, _v7, _v6, _v0)), _v2 = !0);
              continue;
            }
            (0, _v2.default)(_v1, _v5(_v6, _v7, _v0));
          }
          return _v2 && (_v1 = _v4(_v1)), _v1;
        };
      _v3.config = _v1, _v3.propNames = Object.keys(_v1), _v3.cache = _v2;
      var _v4 = Object.keys(_v1).filter(function (_v0) {
        return "config" !== _v0;
      });
      return _v4.length > 1 && _v4.forEach(function (_v0) {
        var _v1;
        _v3[_v0] = _v0(((_v1 = {})[_v0] = _v1[_v0], _v1));
      }), _v3;
    },
    _v10 = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5 = {};
      return _v3.slice(0, _v0.length).forEach(function (_v0, _v1) {
        var _v2,
          _v3 = _v0[_v1],
          _v4 = _v1(_v0, _v2, _v4);
        _v3 ? (0, _v2.default)(_v5, ((_v2 = {})[_v3] = (0, _v2.default)({}, _v5[_v3], _v4), _v2)) : (0, _v2.default)(_v5, _v4);
      }), _v5;
    },
    _v11 = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5 = {};
      for (var _v6 in _v3) {
        var _v7 = _v0[_v6],
          _v8 = _v1(_v3[_v6], _v2, _v4);
        if (_v7) {
          var _v9,
            _v10 = _v6(_v7);
          (0, _v2.default)(_v5, ((_v9 = {})[_v10] = (0, _v2.default)({}, _v5[_v10], _v8), _v9));
        } else (0, _v2.default)(_v5, _v8);
      }
      return _v5;
    },
    _v12 = function (_v0) {
      var _v1 = _v0.properties,
        _v2 = _v0.property,
        _v3 = _v0.scale,
        _v4 = _v0.transform,
        _v5 = void 0 === _v4 ? _v7 : _v4,
        _v6 = _v0.defaultScale;
      _v1 = _v1 || [_v2];
      var _v7 = function (_v0, _v1, _v2) {
        var _v3 = {},
          _v4 = _v5(_v0, _v1, _v2);
        if (null !== _v4) return _v1.forEach(function (_v0) {
          _v3[_v0] = _v4;
        }), _v3;
      };
      return _v7.scale = _v3, _v7.defaults = _v6, _v7;
    },
    _v13 = function (_v0) {
      void 0 === _v0 && (_v0 = {});
      var _v1 = {};
      return Object.keys(_v0).forEach(function (_v0) {
        var _v1 = _v0[_v0];
        if (!0 === _v1) {
          _v1[_v0] = _v12({
            property: _v0,
            scale: _v0
          });
          return;
        }
        if ("function" == typeof _v1) {
          _v1[_v0] = _v1;
          return;
        }
        _v1[_v0] = _v12(_v1);
      }), _v9(_v1);
    },
    _v14 = _v13({
      width: {
        property: "width",
        scale: "sizes",
        transform: function (_v0, _v1) {
          return _v8(_v1, _v0, !("number" == typeof _v0 && !isNaN(_v0)) || _v0 > 1 ? _v0 : 100 * _v0 + "%");
        }
      },
      height: {
        property: "height",
        scale: "sizes"
      },
      minWidth: {
        property: "minWidth",
        scale: "sizes"
      },
      minHeight: {
        property: "minHeight",
        scale: "sizes"
      },
      maxWidth: {
        property: "maxWidth",
        scale: "sizes"
      },
      maxHeight: {
        property: "maxHeight",
        scale: "sizes"
      },
      size: {
        properties: ["width", "height"],
        scale: "sizes"
      },
      overflow: !0,
      overflowX: !0,
      overflowY: !0,
      display: !0,
      verticalAlign: !0
    }),
    _v15 = {
      color: {
        property: "color",
        scale: "colors"
      },
      backgroundColor: {
        property: "backgroundColor",
        scale: "colors"
      },
      opacity: !0
    };
  _v15.bg = _v15.backgroundColor;
  var _v16 = _v13(_v15),
    _v17 = _v13({
      fontFamily: {
        property: "fontFamily",
        scale: "fonts"
      },
      fontSize: {
        property: "fontSize",
        scale: "fontSizes",
        defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
      },
      fontWeight: {
        property: "fontWeight",
        scale: "fontWeights"
      },
      lineHeight: {
        property: "lineHeight",
        scale: "lineHeights"
      },
      letterSpacing: {
        property: "letterSpacing",
        scale: "letterSpacings"
      },
      textAlign: !0,
      fontStyle: !0
    }),
    _v18 = _v13({
      alignItems: !0,
      alignContent: !0,
      justifyItems: !0,
      justifyContent: !0,
      flexWrap: !0,
      flexDirection: !0,
      flex: !0,
      flexGrow: !0,
      flexShrink: !0,
      flexBasis: !0,
      justifySelf: !0,
      alignSelf: !0,
      order: !0
    }),
    _v19 = [0, 4, 8, 16, 32, 64, 128, 256, 512],
    _v20 = _v13({
      gridGap: {
        property: "gridGap",
        scale: "space",
        defaultScale: _v19
      },
      gridColumnGap: {
        property: "gridColumnGap",
        scale: "space",
        defaultScale: _v19
      },
      gridRowGap: {
        property: "gridRowGap",
        scale: "space",
        defaultScale: _v19
      },
      gridColumn: !0,
      gridRow: !0,
      gridAutoFlow: !0,
      gridAutoColumns: !0,
      gridAutoRows: !0,
      gridTemplateColumns: !0,
      gridTemplateRows: !0,
      gridTemplateAreas: !0,
      gridArea: !0
    }),
    _v21 = {
      border: {
        property: "border",
        scale: "borders"
      },
      borderWidth: {
        property: "borderWidth",
        scale: "borderWidths"
      },
      borderStyle: {
        property: "borderStyle",
        scale: "borderStyles"
      },
      borderColor: {
        property: "borderColor",
        scale: "colors"
      },
      borderRadius: {
        property: "borderRadius",
        scale: "radii"
      },
      borderTop: {
        property: "borderTop",
        scale: "borders"
      },
      borderTopLeftRadius: {
        property: "borderTopLeftRadius",
        scale: "radii"
      },
      borderTopRightRadius: {
        property: "borderTopRightRadius",
        scale: "radii"
      },
      borderRight: {
        property: "borderRight",
        scale: "borders"
      },
      borderBottom: {
        property: "borderBottom",
        scale: "borders"
      },
      borderBottomLeftRadius: {
        property: "borderBottomLeftRadius",
        scale: "radii"
      },
      borderBottomRightRadius: {
        property: "borderBottomRightRadius",
        scale: "radii"
      },
      borderLeft: {
        property: "borderLeft",
        scale: "borders"
      },
      borderX: {
        properties: ["borderLeft", "borderRight"],
        scale: "borders"
      },
      borderY: {
        properties: ["borderTop", "borderBottom"],
        scale: "borders"
      }
    };
  _v21.borderTopWidth = {
    property: "borderTopWidth",
    scale: "borderWidths"
  }, _v21.borderTopColor = {
    property: "borderTopColor",
    scale: "colors"
  }, _v21.borderTopStyle = {
    property: "borderTopStyle",
    scale: "borderStyles"
  }, _v21.borderTopLeftRadius = {
    property: "borderTopLeftRadius",
    scale: "radii"
  }, _v21.borderTopRightRadius = {
    property: "borderTopRightRadius",
    scale: "radii"
  }, _v21.borderBottomWidth = {
    property: "borderBottomWidth",
    scale: "borderWidths"
  }, _v21.borderBottomColor = {
    property: "borderBottomColor",
    scale: "colors"
  }, _v21.borderBottomStyle = {
    property: "borderBottomStyle",
    scale: "borderStyles"
  }, _v21.borderBottomLeftRadius = {
    property: "borderBottomLeftRadius",
    scale: "radii"
  }, _v21.borderBottomRightRadius = {
    property: "borderBottomRightRadius",
    scale: "radii"
  }, _v21.borderLeftWidth = {
    property: "borderLeftWidth",
    scale: "borderWidths"
  }, _v21.borderLeftColor = {
    property: "borderLeftColor",
    scale: "colors"
  }, _v21.borderLeftStyle = {
    property: "borderLeftStyle",
    scale: "borderStyles"
  }, _v21.borderRightWidth = {
    property: "borderRightWidth",
    scale: "borderWidths"
  }, _v21.borderRightColor = {
    property: "borderRightColor",
    scale: "colors"
  }, _v21.borderRightStyle = {
    property: "borderRightStyle",
    scale: "borderStyles"
  };
  var _v22 = _v13(_v21),
    _v23 = {
      background: !0,
      backgroundImage: !0,
      backgroundSize: !0,
      backgroundPosition: !0,
      backgroundRepeat: !0
    };
  _v23.bgImage = _v23.backgroundImage, _v23.bgSize = _v23.backgroundSize, _v23.bgPosition = _v23.backgroundPosition, _v23.bgRepeat = _v23.backgroundRepeat;
  var _v24 = _v13(_v23),
    _v25 = [0, 4, 8, 16, 32, 64, 128, 256, 512],
    _v26 = _v13({
      position: !0,
      zIndex: {
        property: "zIndex",
        scale: "zIndices"
      },
      top: {
        property: "top",
        scale: "space",
        defaultScale: _v25
      },
      right: {
        property: "right",
        scale: "space",
        defaultScale: _v25
      },
      bottom: {
        property: "bottom",
        scale: "space",
        defaultScale: _v25
      },
      left: {
        property: "left",
        scale: "space",
        defaultScale: _v25
      }
    }),
    _v27 = [0, 4, 8, 16, 32, 64, 128, 256, 512],
    _v28 = function (_v0) {
      return "number" == typeof _v0 && !isNaN(_v0);
    },
    _v29 = function (_v0, _v1) {
      if (!_v28(_v0)) return _v8(_v1, _v0, _v0);
      var _v2 = _v0 < 0,
        _v3 = Math.abs(_v0),
        _v4 = _v8(_v1, _v3, _v3);
      return _v28(_v4) ? _v4 * (_v2 ? -1 : 1) : _v2 ? "-" + _v4 : _v4;
    },
    _v30 = {};
  _v30.margin = {
    margin: {
      property: "margin",
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    },
    marginTop: {
      property: "marginTop",
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    },
    marginRight: {
      property: "marginRight",
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    },
    marginBottom: {
      property: "marginBottom",
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    },
    marginLeft: {
      property: "marginLeft",
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    },
    marginX: {
      properties: ["marginLeft", "marginRight"],
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    },
    marginY: {
      properties: ["marginTop", "marginBottom"],
      scale: "space",
      transform: _v29,
      defaultScale: _v27
    }
  }, _v30.margin.m = _v30.margin.margin, _v30.margin.mt = _v30.margin.marginTop, _v30.margin.mr = _v30.margin.marginRight, _v30.margin.mb = _v30.margin.marginBottom, _v30.margin.ml = _v30.margin.marginLeft, _v30.margin.mx = _v30.margin.marginX, _v30.margin.my = _v30.margin.marginY, _v30.padding = {
    padding: {
      property: "padding",
      scale: "space",
      defaultScale: _v27
    },
    paddingTop: {
      property: "paddingTop",
      scale: "space",
      defaultScale: _v27
    },
    paddingRight: {
      property: "paddingRight",
      scale: "space",
      defaultScale: _v27
    },
    paddingBottom: {
      property: "paddingBottom",
      scale: "space",
      defaultScale: _v27
    },
    paddingLeft: {
      property: "paddingLeft",
      scale: "space",
      defaultScale: _v27
    },
    paddingX: {
      properties: ["paddingLeft", "paddingRight"],
      scale: "space",
      defaultScale: _v27
    },
    paddingY: {
      properties: ["paddingTop", "paddingBottom"],
      scale: "space",
      defaultScale: _v27
    }
  }, _v30.padding.p = _v30.padding.padding, _v30.padding.pt = _v30.padding.paddingTop, _v30.padding.pr = _v30.padding.paddingRight, _v30.padding.pb = _v30.padding.paddingBottom, _v30.padding.pl = _v30.padding.paddingLeft, _v30.padding.px = _v30.padding.paddingX, _v30.padding.py = _v30.padding.paddingY;
  var _v31 = function () {
      for (var _v0 = {}, _v1 = arguments.length, _v2 = Array(_v1), _v3 = 0; _v3 < _v1; _v3++) _v2[_v3] = arguments[_v3];
      return _v2.forEach(function (_v0) {
        _v0 && _v0.config && (0, _v2.default)(_v0, _v0.config);
      }), _v9(_v0);
    }(_v13(_v30.margin), _v13(_v30.padding)),
    _v32 = _v13({
      boxShadow: {
        property: "boxShadow",
        scale: "shadows"
      },
      textShadow: {
        property: "textShadow",
        scale: "shadows"
      }
    });
  function _v33() {
    return (_v33 = Object.assign || function (_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        for (var _v3 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v3) && (_v0[_v3] = _v2[_v3]);
      }
      return _v0;
    }).apply(this, arguments);
  }
  var _v34 = function (_v0, _v1, _v2, _v3, _v4) {
      for (_v3 = 0, _v1 = _v1 && _v1.split ? _v1.split(".") : [_v1]; _v3 < _v1.length; _v3++) _v0 = _v0 ? _v0[_v1[_v3]] : _v4;
      return _v0 === _v4 ? _v2 : _v0;
    },
    _v35 = [40, 52, 64].map(function (_v0) {
      return _v0 + "em";
    }),
    _v36 = {
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
    },
    _v37 = {
      bg: "backgroundColor",
      m: "margin",
      mt: "marginTop",
      mr: "marginRight",
      mb: "marginBottom",
      ml: "marginLeft",
      mx: "marginX",
      my: "marginY",
      p: "padding",
      pt: "paddingTop",
      pr: "paddingRight",
      pb: "paddingBottom",
      pl: "paddingLeft",
      px: "paddingX",
      py: "paddingY"
    },
    _v38 = {
      marginX: ["marginLeft", "marginRight"],
      marginY: ["marginTop", "marginBottom"],
      paddingX: ["paddingLeft", "paddingRight"],
      paddingY: ["paddingTop", "paddingBottom"],
      size: ["width", "height"]
    },
    _v39 = {
      color: "colors",
      backgroundColor: "colors",
      borderColor: "colors",
      margin: "space",
      marginTop: "space",
      marginRight: "space",
      marginBottom: "space",
      marginLeft: "space",
      marginX: "space",
      marginY: "space",
      padding: "space",
      paddingTop: "space",
      paddingRight: "space",
      paddingBottom: "space",
      paddingLeft: "space",
      paddingX: "space",
      paddingY: "space",
      top: "space",
      right: "space",
      bottom: "space",
      left: "space",
      gridGap: "space",
      gridColumnGap: "space",
      gridRowGap: "space",
      gap: "space",
      columnGap: "space",
      rowGap: "space",
      fontFamily: "fonts",
      fontSize: "fontSizes",
      fontWeight: "fontWeights",
      lineHeight: "lineHeights",
      letterSpacing: "letterSpacings",
      border: "borders",
      borderTop: "borders",
      borderRight: "borders",
      borderBottom: "borders",
      borderLeft: "borders",
      borderWidth: "borderWidths",
      borderStyle: "borderStyles",
      borderRadius: "radii",
      borderTopRightRadius: "radii",
      borderTopLeftRadius: "radii",
      borderBottomRightRadius: "radii",
      borderBottomLeftRadius: "radii",
      borderTopWidth: "borderWidths",
      borderTopColor: "colors",
      borderTopStyle: "borderStyles",
      borderBottomWidth: "borderWidths",
      borderBottomColor: "colors",
      borderBottomStyle: "borderStyles",
      borderLeftWidth: "borderWidths",
      borderLeftColor: "colors",
      borderLeftStyle: "borderStyles",
      borderRightWidth: "borderWidths",
      borderRightColor: "colors",
      borderRightStyle: "borderStyles",
      outlineColor: "colors",
      boxShadow: "shadows",
      textShadow: "shadows",
      zIndex: "zIndices",
      width: "sizes",
      minWidth: "sizes",
      maxWidth: "sizes",
      height: "sizes",
      minHeight: "sizes",
      maxHeight: "sizes",
      flexBasis: "sizes",
      size: "sizes",
      fill: "colors",
      stroke: "colors"
    },
    _v40 = function (_v0, _v1) {
      if ("number" != typeof _v1 || _v1 >= 0) return _v34(_v0, _v1, _v1);
      var _v2 = Math.abs(_v1),
        _v3 = _v34(_v0, _v2, _v2);
      return "string" == typeof _v3 ? "-" + _v3 : -1 * _v3;
    },
    _v41 = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function (_v0, _v1) {
      var _v2;
      return _v33({}, _v0, ((_v2 = {})[_v1] = _v40, _v2));
    }, {}),
    _v42 = function (_v0) {
      var _v1,
        _v2,
        _v3 = _v0.scale,
        _v4 = _v0.prop,
        _v5 = _v0.variants,
        _v6 = void 0 === _v5 ? {} : _v5,
        _v7 = _v0.key;
      return (_v2 = Object.keys(_v6).length ? function (_v0, _v1, _v2) {
        return function _v0(_v1) {
          return function (_v0) {
            void 0 === _v0 && (_v0 = {});
            var _v1,
              _v2 = _v33({}, _v36, {}, _v0.theme || _v0),
              _v3 = {},
              _v4 = (_v1 = "function" == typeof _v1 ? _v1(_v2) : _v1, function (_v0) {
                var _v1 = {},
                  _v2 = [null].concat(_v34(_v0, "breakpoints", _v35).map(function (_v0) {
                    return "@media screen and (min-width: " + _v0 + ")";
                  }));
                for (var _v3 in _v1) {
                  var _v4 = "function" == typeof _v1[_v3] ? _v1[_v3](_v0) : _v1[_v3];
                  if (null != _v4) {
                    if (!Array.isArray(_v4)) {
                      _v1[_v3] = _v4;
                      continue;
                    }
                    for (var _v5 = 0; _v5 < _v4.slice(0, _v2.length).length; _v5++) {
                      var _v6 = _v2[_v5];
                      if (!_v6) {
                        _v1[_v3] = _v4[_v5];
                        continue;
                      }
                      _v1[_v6] = _v1[_v6] || {}, null != _v4[_v5] && (_v1[_v6][_v3] = _v4[_v5]);
                    }
                  }
                }
                return _v1;
              })(_v2);
            for (var _v5 in _v4) {
              var _v6 = _v4[_v5],
                _v7 = "function" == typeof _v6 ? _v6(_v2) : _v6;
              if ("variant" === _v5) {
                var _v8 = _v0(_v34(_v2, _v7))(_v2);
                _v3 = _v33({}, _v3, {}, _v8);
                continue;
              }
              if (_v7 && "object" == typeof _v7) {
                _v3[_v5] = _v0(_v7)(_v2);
                continue;
              }
              var _v9 = _v34(_v37, _v5, _v5),
                _v10 = _v34(_v39, _v9),
                _v11 = _v34(_v2, _v10, _v34(_v2, _v9, {})),
                _v12 = _v34(_v41, _v9, _v34)(_v11, _v7, _v7);
              if (_v38[_v9]) for (var _v13 = _v38[_v9], _v14 = 0; _v14 < _v13.length; _v14++) _v3[_v13[_v14]] = _v12;else _v3[_v9] = _v12;
            }
            return _v3;
          };
        }(_v8(_v1, _v0, null))(_v2.theme);
      } : function (_v0, _v1) {
        return _v8(_v1, _v0, null);
      }).scale = _v3 || _v7, _v2.defaults = _v6, _v9(((_v1 = {})[void 0 === _v4 ? "variant" : _v4] = _v2, _v1));
    };
  _v42({
    key: "buttons"
  }), _v42({
    key: "textStyles",
    prop: "textStyle"
  }), _v42({
    key: "colorStyles",
    prop: "colors"
  }), _v14.width, _v14.height, _v14.minWidth, _v14.minHeight, _v14.maxWidth, _v14.maxHeight, _v14.size, _v14.verticalAlign, _v14.display, _v14.overflow, _v14.overflowX, _v14.overflowY, _v16.opacity, _v17.fontSize, _v17.fontFamily, _v17.fontWeight, _v17.lineHeight, _v17.textAlign, _v17.fontStyle, _v17.letterSpacing, _v18.alignItems, _v18.alignContent, _v18.justifyItems, _v18.justifyContent, _v18.flexWrap, _v18.flexDirection, _v18.flex, _v18.flexGrow, _v18.flexShrink, _v18.flexBasis, _v18.justifySelf, _v18.alignSelf, _v18.order, _v20.gridGap, _v20.gridColumnGap, _v20.gridRowGap, _v20.gridColumn, _v20.gridRow, _v20.gridAutoFlow, _v20.gridAutoColumns, _v20.gridAutoRows, _v20.gridTemplateColumns, _v20.gridTemplateRows, _v20.gridTemplateAreas, _v20.gridArea, _v22.borderWidth, _v22.borderStyle, _v22.borderColor, _v22.borderTop, _v22.borderRight, _v22.borderBottom, _v22.borderLeft, _v22.borderRadius, _v24.backgroundImage, _v24.backgroundSize, _v24.backgroundPosition, _v24.backgroundRepeat, _v26.zIndex, _v26.top, _v26.right, _v26.bottom, _v26.left;
  let _v43 = _v13({
      gap: {
        property: "gap"
      }
    }),
    _v44 = _v1.default.div.withConfig({
      shouldForwardProp: _v0 => ["as", "children"].includes(_v0)
    }).withConfig({
      displayName: "Box",
      componentId: "sc-971a3db9-0"
    })`
  ${_v31}
  ${_v16}
  ${_v14}
  ${_v18}
  ${_v20}
  ${_v24}
  ${_v22}
  ${_v26}
  ${_v32}
  ${_v43}
`;
  _v0.s(["Box", 0, _v44], 0);
}