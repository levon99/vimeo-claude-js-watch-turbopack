{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17,
    _v18,
    _v19,
    _v20,
    _v21,
    _v22,
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v26.default.div(_v1 || (_v1 = (0, _v23.a)(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
  var _v27 = _v26.default.div(_v2 || (_v2 = (0, _v23.a)(["\n  border-radius: 50%;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 1rem;\n  display: inline-flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -0.375rem;\n  z-index: 10;\n  border: 0.5px solid ", ";\n"], ["\n  border-radius: 50%;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 1rem;\n  display: inline-flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -0.375rem;\n  z-index: 10;\n  border: 0.5px solid ", ";\n"])), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v25.rgba)(_v1.content.color, .1);
    }),
    _v28 = _v26.default.div(_v3 || (_v3 = (0, _v23.a)(["\n  padding: 0;\n  position: relative;\n  width: ", "px;\n  border-radius: 0.25rem;\n  overflow: hidden;\n"], ["\n  padding: 0;\n  position: relative;\n  width: ", "px;\n  border-radius: 0.25rem;\n  overflow: hidden;\n"])), function (_v0) {
      return _v0.width;
    }),
    _v29 = _v26.default.div(_v6 || (_v6 = (0, _v23.a)(["\n  position: relative;\n  width: calc(100% + 8rem);\n\n  ", ";\n"], ["\n  position: relative;\n  width: calc(100% + 8rem);\n\n  ", ";\n"])), function (_v0) {
      return _v0.dragging ? (0, _v26.css)(_v4 || (_v4 = (0, _v23.a)(["\n          padding: 4rem 8rem;\n          top: -4rem;\n          left: -8rem;\n        "], ["\n          padding: 4rem 8rem;\n          top: -4rem;\n          left: -8rem;\n        "]))) : (0, _v26.css)(_v5 || (_v5 = (0, _v23.a)(["\n          padding: 0 0;\n          top: 0;\n          left: 0;\n        "], ["\n          padding: 0 0;\n          top: 0;\n          left: 0;\n        "])));
    }),
    _v30 = _v26.default.div(_v7 || (_v7 = (0, _v23.a)(["\n  width: 1.25rem;\n  height: 1.25rem;\n  pointer-events: none;\n  border: 0.125rem solid white;\n  border-radius: 50%;\n  position: absolute;\n  left: -0.625rem;\n  top: -0.625rem;\n  z-index: 4001;\n"], ["\n  width: 1.25rem;\n  height: 1.25rem;\n  pointer-events: none;\n  border: 0.125rem solid white;\n  border-radius: 50%;\n  position: absolute;\n  left: -0.625rem;\n  top: -0.625rem;\n  z-index: 4001;\n"]))),
    _v31 = function (_v0, _v1, _v2) {
      return (0, _v26.css)(_v8 || (_v8 = (0, _v23.a)(["\n  ", " {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: 0.25rem 0.25rem 0 0;\n    background: linear-gradient(to ", ", ", ", transparent);\n  }\n"], ["\n  ", " {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: 0.25rem 0.25rem 0 0;\n    background: linear-gradient(to ", ", ", ", transparent);\n  }\n"])), _v2, _v1, _v0);
    },
    _v32 = _v26.default.div(_v9 || (_v9 = (0, _v23.a)(["\n  width: ", ";\n  height: ", ";\n  position: relative;\n  border-radius: 0.25rem 0.25rem 0 0;\n  cursor: pointer;\n\n  ", ";\n  ", ";\n\n  &:active {\n    cursor: none;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  position: relative;\n  border-radius: 0.25rem 0.25rem 0 0;\n  cursor: pointer;\n\n  ", ";\n  ", ";\n\n  &:active {\n    cursor: none;\n  }\n"])), function (_v0) {
      return (0, _v25.rem)(_v0.width);
    }, function (_v0) {
      return (0, _v25.rem)(_v0.height + 1);
    }, _v31("#FFF", "right", "&::before"), _v31("#000", "top", "&::after")),
    _v33 = _v0.i(0);
  function _v34(_v0, _v1) {
    var _v2 = _v1.type,
      _v3 = _v1.payload,
      _v4 = void 0 === _v3 ? null : _v3;
    switch (_v2) {
      case "TOGGLE":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          open: !_v0.open
        });
      case "CLOSE":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          open: !1
        });
      case "DRAG_START":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          dragging: !0
        });
      case "DRAG_END":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          dragging: !1
        });
      case "SET_COORDS":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          coords: _v4
        });
      case "SET_COLORSPACE":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          colorSpace: _v4
        });
      case "SET_ERROR":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          error: _v4
        });
      case "SET_EDITING":
        return (0, _v23.c)((0, _v23.c)({}, _v0), {
          editing: _v4
        });
      case "SET_LAST":
        return _v0;
      case "SET_HEX":
        try {
          var _v5 = _v35(_v4);
          return (0, _v23.c)((0, _v23.c)({}, _v0), {
            colorMeta: _v5
          });
        } catch (_v0) {
          return _v0;
        }
      case "SET_RGB":
        try {
          var _v5 = _v35(_v4);
          return (0, _v23.c)((0, _v23.c)({}, _v0), {
            colorMeta: _v5
          });
        } catch (_v0) {
          return _v0;
        }
      case "SET_HSL":
        try {
          var _v5 = _v35(_v4);
          return (0, _v23.c)((0, _v23.c)({}, _v0), {
            colorMeta: _v5
          });
        } catch (_v0) {
          return _v0;
        }
      default:
        throw Error();
    }
  }
  function _v35(_v0) {
    "string" == typeof _v0 && (_v0 = (0, _v25.parseToHsl)(_v0)), _v0.red && (_v0 = (0, _v25.parseToHsl)((0, _v25.rgb)(_v0)));
    var _v1 = (0, _v33.colorSpaces)(_v0);
    return {
      HSL: _v1.HSL,
      HSV: _v1.HSV,
      HEX: _v1.HEX,
      RGB: _v1.RGB
    };
  }
  var _v36 = _v0.i(0),
    _v37 = (0, _v26.css)(_v10 || (_v10 = (0, _v23.a)(["\n  border: none;\n  box-shadow: none;\n  border-radius: 0px;\n  background: transparent;\n"], ["\n  border: none;\n  box-shadow: none;\n  border-radius: 0px;\n  background: transparent;\n"]))),
    _v38 = _v26.default.input(_v13 || (_v13 = (0, _v23.a)(["\n  height: 1rem;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n  top: 1px;\n  background: rgba(0, 0, 0, 0);\n  left: 0;\n  appearance: none;\n\n  &:focus {\n    outline: none;\n\n    &::-webkit-slider-thumb {\n      border: 0.24rem solid ", ";\n      transform: scale(1.2) translateY(0.75px);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0px;\n    cursor: pointer;\n    ", ";\n  }\n\n  &::-webkit-slider-thumb {\n    border: 0.25rem solid ", ";\n    height: 36px;\n    width: 36px;\n    border-radius: 20px;\n    background: transparent;\n    cursor: pointer;\n    appearance: none;\n    margin-top: -12.5px;\n    transition: 80ms ease-in-out;\n\n    ", ";\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    background: #050505;\n  }\n\n  &::-moz-range-track {\n    width: 100%;\n    height: 1px;\n    cursor: pointer;\n    box-shadow: none;\n    ", ";\n  }\n\n  &::-moz-range-thumb {\n    ", ";\n    height: 26px;\n    width: 26px;\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    height: 1px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-fill-lower {\n    ", ";\n  }\n\n  &::-ms-fill-upper {\n    ", ";\n  }\n\n  &::-ms-thumb {\n    ", ";\n    height: 26px;\n    width: 26px;\n    cursor: pointer;\n  }\n\n  &:focus::-ms-fill-lower {\n    background: #000000;\n  }\n\n  &:focus::-ms-fill-upper {\n    background: #050505;\n  }\n"], ["\n  height: 1rem;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n  top: 1px;\n  background: rgba(0, 0, 0, 0);\n  left: 0;\n  appearance: none;\n\n  &:focus {\n    outline: none;\n\n    &::-webkit-slider-thumb {\n      border: 0.24rem solid ", ";\n      transform: scale(1.2) translateY(0.75px);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0px;\n    cursor: pointer;\n    ", ";\n  }\n\n  &::-webkit-slider-thumb {\n    border: 0.25rem solid ", ";\n    height: 36px;\n    width: 36px;\n    border-radius: 20px;\n    background: transparent;\n    cursor: pointer;\n    appearance: none;\n    margin-top: -12.5px;\n    transition: 80ms ease-in-out;\n\n    ", ";\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    background: #050505;\n  }\n\n  &::-moz-range-track {\n    width: 100%;\n    height: 1px;\n    cursor: pointer;\n    box-shadow: none;\n    ", ";\n  }\n\n  &::-moz-range-thumb {\n    ", ";\n    height: 26px;\n    width: 26px;\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    height: 1px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-fill-lower {\n    ", ";\n  }\n\n  &::-ms-fill-upper {\n    ", ";\n  }\n\n  &::-ms-thumb {\n    ", ";\n    height: 26px;\n    width: 26px;\n    cursor: pointer;\n  }\n\n  &:focus::-ms-fill-lower {\n    background: #000000;\n  }\n\n  &:focus::-ms-fill-upper {\n    background: #050505;\n  }\n"])), _v36.white, _v37, _v36.white, function (_v0) {
      return "dark" === _v0.theme.name ? (0, _v26.css)(_v11 || (_v11 = (0, _v23.a)(["\n            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2),\n              inset 0 0 2px 2px rgba(0, 0, 0, 0.15);\n          "], ["\n            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2),\n              inset 0 0 2px 2px rgba(0, 0, 0, 0.15);\n          "]))) : (0, _v26.css)(_v12 || (_v12 = (0, _v23.a)(["\n            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.275),\n              inset 0 0 2px 2px rgba(0, 0, 0, 0.2334);\n          "], ["\n            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.275),\n              inset 0 0 2px 2px rgba(0, 0, 0, 0.2334);\n          "])));
    }, _v37, _v37, _v37, _v37, _v37);
  function _v39(_v0) {
    return _v24.default.createElement(_v40, (0, _v23.c)({
      kind: "hue",
      max: "36000",
      step: "100"
    }, _v0));
  }
  function _v40(_v0) {
    var _v1 = _v0.dragging,
      _v2 = _v0.kind,
      _v3 = _v0.colorMeta,
      _v4 = (0, _v23.b)(_v0, ["dragging", "kind", "colorMeta"]),
      _v5 = _v3.HEX,
      _v6 = _v3.HSL;
    return _v24.default.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: _v1 ? "-6.5rem" : "1.5rem",
        padding: "0 1.5rem"
      }
    }, _v24.default.createElement(_v41, {
      style: {
        background: _v5
      },
      "aria-label": "color preview",
      color: _v5
    }), _v24.default.createElement(_v42, {
      kind: _v2,
      HSL: _v6
    }, _v24.default.createElement(_v38, (0, _v23.c)({
      type: "range",
      min: "0.01"
    }, _v4))));
  }
  var _v41 = _v26.default.div(_v14 || (_v14 = (0, _v23.a)(["\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  margin: 0 1rem 0 0;\n  display: inline-flex;\n"], ["\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  margin: 0 1rem 0 0;\n  display: inline-flex;\n"]))),
    _v42 = _v26.default.div(_v15 || (_v15 = (0, _v23.a)(["\n  height: 1.9rem;\n  width: calc(100% - 1.5rem);\n  border-radius: 0.25rem;\n  margin: 0;\n  position: relative;\n  display: inline-flex;\n  ", ";\n"], ["\n  height: 1.9rem;\n  width: calc(100% - 1.5rem);\n  border-radius: 0.25rem;\n  margin: 0;\n  position: relative;\n  display: inline-flex;\n  ", ";\n"])), function (_v0) {
      var _v1 = _v0.kind,
        _v2 = _v0.HSL;
      switch (_v1) {
        case "hue":
          return (0, _v26.css)(_v16 || (_v16 = (0, _v23.a)(["\n        background: linear-gradient(\n          to right,\n          #f00 0%,\n          #ff0 17%,\n          #0f0 33%,\n          #0ff 50%,\n          #00f 67%,\n          #f0f 83%,\n          #f00 100%\n        );\n      "], ["\n        background: linear-gradient(\n          to right,\n          #f00 0%,\n          #ff0 17%,\n          #0f0 33%,\n          #0ff 50%,\n          #00f 67%,\n          #f0f 83%,\n          #f00 100%\n        );\n      "])));
        case "sat":
          return (0, _v26.css)(_v17 || (_v17 = (0, _v23.a)(["\n        background: linear-gradient(\n          to right,\n          ", " 0%,\n          ", " 100%\n        );\n      "], ["\n        background: linear-gradient(\n          to right,\n          ", " 0%,\n          ", " 100%\n        );\n      "])), (0, _v25.hsl)(_v2.hue, 0, .5), (0, _v25.hsl)(_v2.hue, 1, .5));
        case "lit":
          return (0, _v26.css)(_v18 || (_v18 = (0, _v23.a)(["\n        background: linear-gradient(to right, #000 0%, #fff 100%);\n      "], ["\n        background: linear-gradient(to right, #000 0%, #fff 100%);\n      "])));
      }
    }),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  function _v45(_v0) {
    var _v1,
      _v2 = _v0.colorMeta,
      _v3 = _v0.colorSpace,
      _v4 = _v0.dispatch,
      _v5 = _v0.editing,
      _v6 = _v0.error,
      _v7 = _v0.onChange,
      _v8 = (0, _v23.b)(_v0, ["colorMeta", "colorSpace", "dispatch", "editing", "error", "onChange"]),
      _v9 = (0, _v24.useRef)(),
      _v10 = _v2.HEX,
      _v11 = _v2.RGB;
    (0, _v24.useEffect)(function () {
      var _v0;
      _v5 && (null == (_v0 = null == _v9 ? void 0 : _v9.current) || _v0.focus());
    }, [_v5]), "HEX" === _v3 && (_v1 = _v10), "RGB" === _v3 && (_v1 = _v49(_v11));
    var _v12 = {
      colorMeta: _v2,
      onClick: function () {
        return _v4({
          type: "SET_EDITING",
          payload: !0
        });
      }
    };
    return _v24.default.createElement(_v24.default.Fragment, null, _v24.default.createElement(_v52, (0, _v23.c)({}, _v8), _v24.default.createElement(_v44.Button, {
      format: "soft",
      onClick: function () {
        var _v0 = "SET_COLORSPACE";
        "HEX" === _v3 && _v4({
          type: _v0,
          payload: "RGB"
        }), "RGB" === _v3 && _v4({
          type: _v0,
          payload: "HEX"
        });
      },
      size: "sm",
      variant: "outline",
      status: _v6 ? "negative" : null,
      style: {
        opacity: "0.667",
        marginRight: "1rem"
      },
      pill: !0
    }, _v3), _v5 ? _v24.default.createElement(_v46, {
      value: _v1,
      dispatch: _v4,
      error: _v6,
      forwardRef: _v9,
      onChange: _v7
    }) : _v24.default.createElement(_v24.default.Fragment, null, "HEX" === _v3 && _v24.default.createElement(_v47, (0, _v23.c)({}, _v12)), "RGB" === _v3 && _v24.default.createElement(_v48, (0, _v23.c)({}, _v12)))));
  }
  function _v46(_v0) {
    var _v1 = _v0.value,
      _v2 = _v0.dispatch,
      _v3 = _v0.error,
      _v4 = _v0.forwardRef,
      _v5 = _v0.onChange;
    return _v24.default.createElement(_v51, {
      value: _v1,
      onBlur: function () {
        var _v0;
        _v50(null == (_v0 = null == _v4 ? void 0 : _v4.current) ? void 0 : _v0.value).valid || (_v2({
          type: "SET_LAST"
        }), _v2({
          type: "SET_COLORSPACE",
          payload: "HEX"
        }), _v2({
          type: "SET_ERROR",
          payload: !1
        })), _v2({
          type: "SET_EDITING",
          payload: !1
        });
      },
      onChange: function (_v0) {
        var _v1 = _v50(_v0.target.value);
        if (_v1.valid) {
          _v5(_v1.value), _v2({
            type: "SET_COLORSPACE",
            payload: _v1.type
          }), _v2({
            type: "SET_ERROR",
            payload: !1
          });
          var _v2 = void 0;
          "HEX" === _v1.type && (_v2 = _v1.value), "RGB" === _v1.type && (_v2 = (0, _v25.parseToRgb)(_v1.value)), _v2({
            type: "SET_" + _v1.type,
            payload: _v2
          });
        } else _v2({
          type: "SET_COLORSPACE",
          payload: "—"
        }), _v2({
          type: "SET_ERROR",
          payload: !0
        });
      },
      onFocus: function () {
        var _v0;
        return null == (_v0 = null == _v4 ? void 0 : _v4.current) ? void 0 : _v0.select();
      },
      onKeyUp: function (_v0) {
        "Enter" === _v0.key && _v2({
          type: "TOGGLE"
        });
      },
      ref: _v4,
      status: _v3 ? "negative" : null,
      style: {
        display: "inline-block"
      },
      type: "text"
    });
  }
  function _v47(_v0) {
    var _v1 = _v0.colorMeta,
      _v2 = _v0.onClick,
      _v3 = _v1.HEX;
    return _v24.default.createElement(_v51, (0, _v23.c)({
      value: _v3,
      style: {
        display: "inline-block"
      }
    }, {
      onClick: _v2,
      type: "text"
    }, {
      readOnly: !0
    }));
  }
  function _v48(_v0) {
    var _v1 = _v0.colorMeta,
      _v2 = _v0.onClick,
      _v3 = _v1.RGB;
    return _v24.default.createElement(_v24.default.Fragment, null, _v24.default.createElement(_v51, (0, _v23.c)({
      value: _v49(_v3)
    }, {
      onClick: _v2,
      type: "text",
      min: 0,
      max: 255,
      readOnly: !0
    }, {
      readOnly: !0
    })));
  }
  function _v49(_v0) {
    var _v1 = (0, _v23._)((0, _v33.roundValues)(_v0), 3),
      _v2 = _v1[0],
      _v3 = _v1[1],
      _v4 = _v1[2];
    return "rgb(".concat(_v2, ", ").concat(_v3, ", ").concat(_v4, ")");
  }
  function _v50(_v0) {
    var _v1,
      _v2 = !1,
      _v3 = _v0.replace(/\s+/g, "").replace(";", "");
    _v3.startsWith("#") && (_v1 = "HEX"), _v3.startsWith("rgb") && (_v1 = "RGB");
    try {
      (0, _v25.grayscale)(_v3), "HEX" !== _v1 && (_v2 = !0), 7 === _v3.length && (_v2 = !0);
    } catch (_v0) {}
    return {
      type: _v1,
      value: _v3,
      valid: _v2
    };
  }
  _v0.i(0);
  var _v51 = (0, _v26.default)(_v43.Input)(_v19 || (_v19 = (0, _v23.a)(["\n  width: 100%;\n  flex-grow: 1;\n  display: inline-flex;\n\n  + div {\n    margin-left: 0.334rem;\n  }\n"], ["\n  width: 100%;\n  flex-grow: 1;\n  display: inline-flex;\n\n  + div {\n    margin-left: 0.334rem;\n  }\n"]))),
    _v52 = _v26.default.div(_v20 || (_v20 = (0, _v23.a)(["\n  padding: 0.5rem 1.5rem 1.5rem;\n  width: 100%;\n  margin-top: 0.75rem;\n  display: flex;\n  align-items: center;\n"], ["\n  padding: 0.5rem 1.5rem 1.5rem;\n  width: 100%;\n  margin-top: 0.75rem;\n  display: flex;\n  align-items: center;\n"]))),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  function _v56(_v0) {
    var _v1 = _v0.colorMeta,
      _v2 = _v0.dispatch,
      _v3 = _v0.label,
      _v4 = _v0.onChange,
      _v5 = _v0.reset,
      _v6 = _v0.size,
      _v7 = _v0.toggle,
      _v8 = (0, _v24.useRef)(),
      _v9 = _v1.HEX,
      _v10 = (0, _v23._)((0, _v24.useState)(0), 2),
      _v11 = _v10[0],
      _v12 = _v10[1];
    return (0, _v24.useLayoutEffect)(function () {
      _v12((0, _v54.geometry)(null == _v8 ? void 0 : _v8.current).height);
    }, []), _v24.default.createElement("div", {
      style: {
        position: "relative"
      }
    }, _v24.default.createElement(_v43.Input, {
      label: _v3,
      onClick: _v7,
      ref: _v8,
      size: _v6,
      style: {
        paddingLeft: "2.25rem",
        cursor: "pointer"
      },
      type: "text",
      value: _v9,
      "aria-label": "color",
      readOnly: !0,
      onChange: function (_v0) {
        var _v1 = _v0.target.value;
        _v4 && _v4(_v1), _v2({
          type: "SET_HEX",
          payload: _v1
        });
      }
    }, _v24.default.createElement(_v27, {
      style: {
        background: _v9
      }
    }), _v5.label && _v9.toLowerCase() !== _v5.color.toLowerCase() && _v24.default.createElement(_v53.InnerButton, {
      "aria-label": "reset",
      format: "basic",
      variant: "minimalTransparent",
      size: _v6,
      onClick: function (_v0) {
        _v0.stopPropagation(), _v4 && _v4((0, _v25.hslToColorString)((0, _v25.parseToHsl)(_v5.color))), _v2({
          type: "SET_HSL",
          payload: (0, _v25.parseToHsl)(_v5.color)
        });
      },
      tooltipText: _v5.label,
      height: _v11
    }, _v24.default.createElement(_v55.History, {
      style: {
        opacity: .5
      }
    }))));
  }
  var _v57 = _v0.i(0);
  function _v58(_v0) {
    var _v1,
      _v2,
      _v3 = _v0.colorMeta,
      _v4 = _v0.coords,
      _v5 = _v0.width,
      _v6 = _v0.height,
      _v7 = _v0.dispatch,
      _v8 = _v0.throttleSpeed,
      _v9 = _v0.onChange,
      _v10 = _v0.dragging,
      _v11 = (0, _v23.b)(_v0, ["colorMeta", "coords", "width", "height", "dispatch", "throttleSpeed", "onChange", "dragging"]),
      _v12 = (_v1 = _v5, _v2 = _v6, function (_v0) {
        var _v1 = (0, _v23._)(_v0, 2),
          _v2 = _v1[0],
          _v3 = _v1[1];
        return _v2 < 0 && (_v2 = 0), _v3 < 0 && (_v3 = 0), _v2 > _v1 && (_v2 = _v1), _v3 > _v2 && (_v3 = _v2), [_v2, _v3];
      }),
      _v13 = _v3.HSL.hue,
      _v14 = (0, _v24.useRef)((0, _v57.throttle)(function (_v0, _v1) {
        var _v2 = _v0.nativeEvent,
          _v3 = _v2.offsetX,
          _v4 = _v2.offsetY;
        _v7({
          type: "SET_COORDS",
          payload: _v12([_v3, _v4])
        }), _v15({
          offsetX: _v3,
          offsetY: _v4
        }, _v1);
      }, _v8)).current;
    function _v15(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = (_v2 = _v0, _v3 = _v5, _v4 = _v6, {
          saturation: (_v5 = (0, _v33.HSVtoHSL)({
            hue: 360,
            saturation: (0, _v33.round)(_v2.offsetX / _v3),
            value: (0, _v33.round)(-((_v2.offsetY / _v4 - 1) * 1))
          })).saturation,
          lightness: _v5.lightness
        }),
        _v11 = (_v7 = (_v6 = {
          hue: _v1,
          saturation: _v10.saturation,
          lightness: _v10.lightness
        }).hue, _v8 = _v6.saturation, _v9 = _v6.lightness, _v7 < 0 && (_v7 = 0), _v7 > 360 && (_v7 = 360), _v8 < 0 && (_v8 = 0), _v8 > 1 && (_v8 = 1), _v9 < 0 && (_v9 = 0), _v9 > 1 && (_v9 = 1), {
          hue: _v7,
          saturation: _v8,
          lightness: _v9
        });
      _v9 && _v9((0, _v25.hslToColorString)(_v11)), _v7({
        type: "SET_HSL",
        payload: _v11
      });
    }
    var _v16 = function (_v0) {
        return function (_v0) {
          var _v1 = _v0.nativeEvent,
            _v2 = _v1.offsetX,
            _v3 = _v1.offsetY,
            _v4 = _v12([_v2, _v3]);
          _v0 ? _v7({
            type: "DRAG_START"
          }) : _v7({
            type: "DRAG_END"
          }), _v7({
            type: "SET_COORDS",
            payload: _v4
          }), _v15({
            offsetX: _v2,
            offsetY: _v3
          }, _v13);
        };
      },
      _v17 = _v16(!0),
      _v18 = _v16(!1),
      _v19 = function (_v0) {
        return _v14(_v0, _v13);
      };
    return _v24.default.createElement(_v29, (0, _v23.c)({
      dragging: _v10,
      onMouseDown: _v17,
      onMouseUp: _v18,
      onMouseLeave: function () {
        return _v7({
          type: "DRAG_END"
        });
      }
    }, _v11), _v24.default.createElement(_v32, {
      hue: _v13,
      onMouseMove: function (_v0) {
        var _v1, _v2;
        return _v10 && (_v1 = _v0, _v2 = _v19, void (_v1.persist(), _v2(_v1)));
      },
      width: _v5,
      height: _v6,
      style: {
        background: (0, _v25.hslToColorString)({
          hue: _v13,
          saturation: 1,
          lightness: .5
        })
      }
    }, _v24.default.createElement(_v30, {
      style: _v59(_v4)
    })));
  }
  var _v59 = function (_v0) {
      return {
        transform: "translate(".concat(_v0[0], "px, ").concat(_v0[1], "px)")
      };
    },
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v26.default.div(_v21 || (_v21 = (0, _v23.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"]))),
    _v63 = _v26.default.button(_v22 || (_v22 = (0, _v23.a)(["\n  height: 1.125rem;\n  width: 1.125rem;\n  border: ", " solid rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  margin: 0 0 0 0.75rem;\n  background-color: ", ";\n  position: relative;\n  outline: none;\n  transition: transform 0.2s ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  &:active {\n    transform: scale(1);\n  }\n"], ["\n  height: 1.125rem;\n  width: 1.125rem;\n  border: ", " solid rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  margin: 0 0 0 0.75rem;\n  background-color: ", ";\n  position: relative;\n  outline: none;\n  transition: transform 0.2s ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  &:active {\n    transform: scale(1);\n  }\n"])), (0, _v25.rem)(1), function (_v0) {
      return _v0.color;
    }),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = (0, _v65.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.height,
        _v3 = _v0.initial,
        _v4 = void 0 === _v3 ? {
          color: "#F00",
          colorSpace: "HEX"
        } : _v3,
        _v5 = _v0.initialColor,
        _v6 = _v0.label,
        _v7 = _v0.onChange,
        _v8 = _v0.onClose,
        _v9 = _v0.onOpen,
        _v10 = _v0.reset,
        _v11 = void 0 === _v10 ? {
          color: _v4.color,
          label: "reset"
        } : _v10,
        _v12 = _v0.resetColor,
        _v13 = _v0.resetLabel,
        _v14 = _v0.size,
        _v15 = _v0.throttleSpeed,
        _v16 = void 0 === _v15 ? 24 : _v15,
        _v17 = _v0.value,
        _v18 = _v0.width,
        _v19 = void 0 === _v18 ? 360 : _v18,
        _v20 = _v0.attach,
        _v21 = _v0.showHueSlider,
        _v22 = (0, _v23.b)(_v0, ["children", "height", "initial", "initialColor", "label", "onChange", "onClose", "onOpen", "reset", "resetColor", "resetLabel", "size", "throttleSpeed", "value", "width", "attach", "showHueSlider"]),
        _v23 = (0, _v24.useRef)(),
        _v24 = (0, _v24.useRef)();
      (0, _v66.useOutsideClick)([_v23, _v24], function () {
        _v29.open && (null == _v8 || _v8(), _v30({
          type: "CLOSE",
          payload: !0
        }));
      }), _v5 && (_v4.color = _v5 || _v4.color), _v12 && (_v11.color = _v12 || _v11.color), _v13 && (_v11.label = _v13);
      var _v25 = (0, _v25.parseToHsl)(_v4.color),
        _v26 = (0, _v33.colorSpaces)(_v25),
        _v27 = {
          open: !1,
          dragging: !1,
          editing: !1,
          error: !1,
          coords: [_v19, 0],
          colorMeta: (0, _v23.c)({
            HSL: _v25
          }, _v26),
          colorSpace: "HEX"
        },
        _v28 = (0, _v23._)((0, _v24.useReducer)(_v34, _v27), 2),
        _v29 = _v28[0],
        _v30 = _v28[1],
        _v31 = _v29.open,
        _v32 = _v29.dragging,
        _v33 = _v29.colorMeta,
        _v34 = _v33.HSL;
      (0, _v24.useEffect)(function () {
        _v30({
          type: "SET_HEX",
          payload: _v17
        });
      }, [_v17]);
      var _v35 = function () {
          _v31 && (null == _v8 || _v8()), _v31 || null == _v9 || _v9(), _v30({
            type: "TOGGLE"
          });
        },
        _v36 = (0, _v57.throttle)(function (_v0) {
          var _v1 = parseInt(_v0.target.value, 10) / 100,
            _v2 = (0, _v23.c)((0, _v23.c)({}, _v34), {
              hue: _v1
            });
          if (_v34.hue !== _v2.hue) {
            var _v3 = (0, _v25.hslToColorString)(_v2);
            _v7 && _v7(_v3), _v30({
              type: "SET_HSL",
              payload: _v2
            });
          }
        }, _v16 / 4);
      return _v24.default.createElement(_v64.PopOver, {
        attach: void 0 === _v20 ? "bottom" : _v20,
        active: _v31,
        content: _v24.default.createElement(_v28, {
          width: _v19,
          ref: _v24,
          "aria-label": "color picker"
        }, _v24.default.createElement(_v58, (0, _v23.c)({
          dispatch: _v30,
          dragging: _v32,
          height: void 0 === _v2 ? 360 : _v2,
          onChange: _v7,
          throttleSpeed: _v16,
          width: _v19
        }, _v29, _v22)), (void 0 === _v21 || _v21) && _v24.default.createElement(_v39, (0, _v23.c)({
          dragging: _v32,
          onChange: _v36,
          onMouseDown: function () {
            return !_v32 && _v30({
              type: "DRAG_START"
            });
          },
          onMouseUp: function () {
            return _v32 && _v30({
              type: "DRAG_END"
            });
          },
          value: 100 * _v34.hue,
          width: _v19
        }, _v29)), _v24.default.createElement(_v45, (0, _v23.c)({
          dispatch: _v30,
          onChange: _v7
        }, _v29)))
      }, _v1 ? _v24.default.createElement("div", {
        onClick: _v35,
        ref: _v23
      }, _v1) : _v24.default.createElement("div", {
        ref: _v23
      }, _v24.default.createElement(_v56, {
        colorMeta: _v33,
        dispatch: _v30,
        label: _v6,
        onChange: _v7,
        reset: _v11,
        size: _v14,
        toggle: _v35
      })));
    });
  _v67.Presets = function (_v0) {
    var _v1 = _v0.palette,
      _v2 = _v0.label,
      _v3 = _v0.onColorClick,
      _v4 = (0, _v23._)((0, _v24.useState)(0), 2),
      _v5 = _v4[0],
      _v6 = _v4[1],
      _v7 = function (_v0) {
        var _v1,
          _v2 = _v0.key;
        ("ArrowRight" === _v2 || "ArrowLeft" === _v2) && ("ArrowRight" === _v2 && (_v1 = 3 === _v5 ? 0 : _v5 + 1), "ArrowLeft" === _v2 && (_v1 = 0 === _v5 ? 3 : _v5 - 1), _v6(_v1), _v3(_v1[_v1]));
      };
    return _v24.default.createElement(_v62, null, _v2 && _v24.default.createElement(_v60.Header, {
      size: "6",
      style: {
        margin: "0 auto 0 0"
      }
    }, _v2), _v1.map(function (_v0) {
      return _v24.default.createElement(_v63, {
        "aria-label": _v0,
        color: _v0,
        key: _v0,
        onClick: function (_v0) {
          _v0.stopPropagation(), _v3(_v0);
        },
        onKeyUp: _v7
      }, _v24.default.createElement(_v61.Focus, {
        parent: _v63,
        radius: 12
      }));
    }));
  }, _v0.s(["ColorSelect", 0, _v67], 0);
}