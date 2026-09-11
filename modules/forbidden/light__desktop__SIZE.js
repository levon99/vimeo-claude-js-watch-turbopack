{
  "use strict";

  var _v1,
    _v2,
    _v3 = {
      COLOR: "light",
      SIZE: "desktop"
    };
  function _v4(_v0, _v1) {
    if (void 0 === _v1 && (_v1 = 500), "SIZE" === _v0.type) {
      var _v2 = _v0.modes.desktop;
      if ("string" == typeof _v2) return _v2;
      if ("function" == typeof _v2) return _v2(_v1);
    }
    if ("COLOR" === _v0.type) return function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5 = _v0.theme;
      "string" == typeof _v5 && (_v4 = _v5), "string" == typeof (null == _v5 ? void 0 : _v5.name) && (_v4 = _v5.name);
      var _v6 = (_v1 = _v0, _v2 = _v4, "function" != typeof (_v3 = _v1.modes[_v2]) && "string" != typeof _v3 && (console.warn("Invalid Theme: " + _v2), _v1.default && (_v2 = _v1.default), _v1.default || (_v2 = _v3[_v1.type]), _v3 = _v1.modes[_v2]), _v3);
      return "string" == typeof _v6 ? _v6 : "function" == typeof _v6 ? _v6(_v1) : void 0;
    };
  }
  var _v5 = _v0.i(0);
  function _v6(_v0, _v1) {
    var _v2 = void 0 === _v1 ? {
        min: 0,
        max: 0
      } : _v1,
      _v3 = _v2.min,
      _v4 = _v2.max;
    return Math.min(Math.max(_v0, void 0 === _v3 ? 0 : _v3), void 0 === _v4 ? 0 : _v4);
  }
  var _v7 = function (_v0) {
      return _v4(_v8, _v0);
    },
    _v8 = {
      default: "light",
      type: "COLOR",
      modes: {
        dark: function (_v0) {
          return (0, _v5.grayscale)(_v6(900 + _v0 / 10));
        },
        light: function (_v0) {
          return (0, _v5.slate)(_v6((_v0 + 200) / 4 - 175));
        }
      }
    };
  _v7.primary = _v7(500), _v7.secondary = _v7(0);
  var _v9 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.blue)(500),
        light: (0, _v5.blue)(500)
      }
    }),
    _v10 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.grayscale)(50),
        light: (0, _v5.grayscale)(700)
      }
    }),
    _v11 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.slate)(700),
        light: (0, _v5.slate)(700)
      }
    }),
    _v12 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: "conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)",
        light: "conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)"
      }
    }),
    _v13 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: "conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)",
        light: "conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)"
      }
    }),
    _v14 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: "linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)",
        light: "linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)"
      }
    }),
    _v15 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: "linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",
        light: "linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)"
      }
    }),
    _v16 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: "#FF4D4D",
        light: "#FF4D4D"
      }
    }),
    _v17 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.yellow)(500),
        light: (0, _v5.yellow)(500)
      }
    }),
    _v18 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.red)(500),
        light: (0, _v5.red)(500)
      }
    }),
    _v19 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.green)(500),
        light: (0, _v5.green)(500)
      }
    }),
    _v20 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.grayscale)(680),
        light: (0, _v5.slate)(100)
      }
    }),
    _v21 = function (_v0) {
      return _v4(_v22, _v0);
    },
    _v22 = {
      default: "light",
      type: "COLOR",
      modes: {
        dark: function (_v0) {
          return (0, _v5.grayscale)(_v6(-1 * (_v0 / 5 - 0)));
        },
        light: function (_v0) {
          return _v0 >= 300 ? _v5.white : (0, _v5.slate)(_v6(-1 * (_v0 / 2 - 150)));
        }
      }
    };
  _v21.primary = _v21(400), _v21.secondary = _v21(600), _v21.tertiary = _v21(800);
  var _v23 = function (_v0) {
      return _v4(_v24, _v0);
    },
    _v24 = {
      default: "light",
      type: "COLOR",
      modes: {
        dark: function (_v0) {
          return (0, _v5.grayscale)(_v6(_v0 / 2.5));
        },
        light: function (_v0) {
          return (0, _v5.slate)(_v6(function (_v0, _v1) {
            if (void 0 === _v1 && (_v1 = 2), 0 === _v1) return Math.round(_v0);
            var _v2 = Math.pow(10, _v1);
            return Math.round(_v0 * _v2) / _v2;
          }(-(_v0 / 1.667) + 900, 0)));
        }
      }
    };
  _v23.primary = _v23(0), _v23.secondary = _v23(600);
  var _v25 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.violet)(400),
        light: (0, _v5.violet)(400)
      }
    }),
    _v26 = _v4({
      default: "light",
      type: "COLOR",
      modes: {
        dark: (0, _v5.violet)(400),
        light: (0, _v5.violet)(400)
      }
    }),
    _v27 = {
      background: _v7,
      format: {
        primary: _v9,
        secondary: _v10,
        tertiary: _v11
      },
      rainbow: {
        conic: {
          sm: _v12,
          xl: _v13
        },
        linear: {
          sm: _v14,
          xl: _v15
        }
      },
      livestream: _v16,
      status: {
        caution: _v17,
        negative: _v18,
        positive: _v19
      },
      stroke: _v20,
      surface: _v21,
      text: _v23,
      upsell: {
        New: _v4({
          default: "light",
          type: "COLOR",
          modes: {
            dark: (0, _v5.violet)(400),
            light: (0, _v5.violet)(400)
          }
        }),
        sm: _v25,
        xl: _v26
      }
    };
  _v0.s(["color", 0, _v27], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = {
      default: "light",
      type: "COLOR",
      modes: {
        dark: function (_v0) {
          var _v1 = .15 + _v0 / 0,
            _v2 = .75 + _v0 / 0;
          return (0, _v29.css)(_v1 || (_v1 = (0, _v28.a)(["\n    border: ", "px solid rgba(255, 255, 255, ", ");\n    box-shadow: ", ", ", ";\n  "], ["\n    border: ", "px solid rgba(255, 255, 255, ", ");\n    box-shadow: ", ", ", ";\n  "])), _v2, _v1, _v33(_v0), _v32(_v0));
        },
        light: function (_v0) {
          var _v1 = 1 + _v0 / 0;
          return (0, _v29.css)(_v2 || (_v2 = (0, _v28.a)(["\n    border: ", "px solid ", ";\n    box-shadow: ", ", ", ";\n  "], ["\n    border: ", "px solid ", ";\n    box-shadow: ", ", ", ";\n  "])), _v1, (0, _v30.rgba)(_v5.black, .025), _v33(_v0), _v32(_v0));
        }
      }
    };
  function _v32(_v0) {
    return _v34({
      blur: 10 + _v0 / 500,
      spread: .5 + _v0 / 0,
      opacity: _v0 / 0 + _v0 / 0
    });
  }
  function _v33(_v0) {
    return _v34({
      offsetY: 10,
      blur: 6 + _v0 / 500,
      spread: -5 + _v0 / 0,
      opacity: _v0 / 0 + _v0 / 0
    });
  }
  function _v34(_v0) {
    var _v1 = _v0.offsetX,
      _v2 = _v0.offsetY,
      _v3 = _v0.blur,
      _v4 = _v0.spread,
      _v5 = _v0.color,
      _v6 = void 0 === _v5 ? _v5.black : _v5,
      _v7 = _v0.opacity;
    return "\n  ".concat(void 0 === _v1 ? 0 : _v1, "px\n  ").concat(void 0 === _v2 ? 0 : _v2, "px\n  ").concat(void 0 === _v3 ? 3 : _v3, "px\n  ").concat(void 0 === _v4 ? 1 : _v4, "px\n  ").concat((0, _v30.rgba)(_v6, void 0 === _v7 ? .2 : _v7), "\n");
  }
  var _v35 = {
    default: "desktop",
    type: "SIZE",
    modes: {
      desktop: function (_v0) {
        return Math.max(Math.round(+(8.5 + 3 * Math.pow(1.4, (_v0 += 100) / 100) / 1.618)) / 1, 10);
      }
    }
  };
  _v0.s(["core", 0, {
    color: _v27,
    edge: function (_v0) {
      return _v4(_v31, _v0);
    },
    space: function (_v0) {
      return "".concat(.25 * _v0 / 50, "rem");
    },
    typography: {
      size: function (_v0) {
        return _v4(_v35, _v0);
      }
    }
  }], 0);
}