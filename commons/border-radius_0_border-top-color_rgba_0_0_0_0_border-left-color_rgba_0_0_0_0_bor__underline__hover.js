{
  "use strict";

  _v0.i(0);
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
    _v23,
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = {
      xxs: .5,
      xs: .75,
      sm: .75,
      md: 1,
      lg: 1.5,
      xl: 1.75,
      xxl: 2
    },
    _v29 = {
      xxs: .75,
      xs: .875,
      sm: 1.25,
      md: 1.375,
      lg: 1.5,
      xl: 2,
      xxl: 2.5
    },
    _v30 = (0, _v25.css)(_v6 || (_v6 = (0, _v24.a)(["\n  border-radius: 0;\n  border-top-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(0, 0, 0, 0);\n  border-right-color: rgba(0, 0, 0, 0);\n"], ["\n  border-radius: 0;\n  border-top-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(0, 0, 0, 0);\n  border-right-color: rgba(0, 0, 0, 0);\n"])));
  function _v31(_v0) {
    var _v1 = _v0.variant;
    return "underline" === (void 0 === _v1 ? null : _v1) && (0, _v25.css)(_v7 || (_v7 = (0, _v24.a)(["\n      ", ";\n\n      &:hover {\n        ", ";\n      }\n    "], ["\n      ", ";\n\n      &:hover {\n        ", ";\n      }\n    "])), _v30, _v30);
  }
  var _v32 = function (_v0) {
    return (0, _v25.css)(_v8 || (_v8 = (0, _v24.a)(["\n  width: ", ";\n  height: ", ";\n  border-width: ", ";\n  border-style: solid;\n  border-radius: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  border-width: ", ";\n  border-style: solid;\n  border-radius: ", ";\n"])), (0, _v26.rem)(_v0), (0, _v26.rem)(_v0), (0, _v26.rem)(1), (0, _v26.rem)(2));
  };
  (0, _v25.css)(_v11 || (_v11 = (0, _v24.a)(["\n  display: block;\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n"], ["\n  display: block;\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n"])));
  var _v33 = (0, _v25.css)(_v16 || (_v16 = (0, _v24.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  outline: 0;\n  opacity: 0;\n  appearance: none;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  outline: 0;\n  opacity: 0;\n  appearance: none;\n"]))),
    _v34 = _v25.default.label(_v20 || (_v20 = (0, _v24.a)(["\n  display: inline-flex;\n  line-height: 1.25rem;\n  font-size: 0.875rem;\n  padding: 0.5rem;\n  width: 100%;\n\n  ", ";\n  ", ";\n\n  ", ";\n"], ["\n  display: inline-flex;\n  line-height: 1.25rem;\n  font-size: 0.875rem;\n  padding: 0.5rem;\n  width: 100%;\n\n  ", ";\n  ", ";\n\n  ", ";\n"])), function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.size,
        _v3 = _v0.type,
        _v4 = _v0.mirror,
        _v5 = void 0 === _v4 ? null : _v4;
      if (void 0 === _v1 ? null : _v1) if ("toggle" === _v3) return _v5 ? {
        paddingRight: 2 * _v35[_v2] + 20
      } : {
        paddingLeft: 2 * _v35[_v2] + 20
      };else return _v5 ? {
        paddingRight: 1.5 * _v35[_v2] + 16
      } : {
        paddingLeft: 1.5 * _v35[_v2] + 16
      };
    }, function (_v0) {
      var _v1 = _v0.theme,
        _v2 = _v0.format,
        _v3 = _v1.formats[void 0 === _v2 ? "basic" : _v2];
      return (0, _v25.css)(_v17 || (_v17 = (0, _v24.a)(["\n    color: ", ";\n    letter-spacing: 0.01rem;\n  "], ["\n    color: ", ";\n    letter-spacing: 0.01rem;\n  "])), _v3);
    }, function (_v0) {
      return _v0.disabled ? (0, _v25.css)(_v19 || (_v19 = (0, _v24.a)(["\n          cursor: not-allowed;\n        "], ["\n          cursor: not-allowed;\n        "]))) : (0, _v25.css)(_v18 || (_v18 = (0, _v24.a)(["\n          cursor: pointer;\n\n          &:hover ~ ", " {\n            border: 1px solid\n              ", ";\n          }\n        "], ["\n          cursor: pointer;\n\n          &:hover ~ ", " {\n            border: 1px solid\n              ", ";\n          }\n        "])), _v0.fauxMark, function (_v0) {
        var _v1 = _v0.theme;
        return (0, _v26.rgba)(_v1.content.color, .5);
      });
    }),
    _v35 = {
      sm: 12,
      md: 14,
      lg: 18,
      xl: 24
    };
  _v0.s(["FauxMark", 0, function (_v0, _v1) {
    var _v2;
    return (0, _v25.css)(_v14 || (_v14 = (0, _v24.a)(["\n    pointer-events: none;\n    ", ";\n\n    ", ";\n\n    &:after {\n      content: '';\n      display: block;\n      background: ", ";\n      opacity: 0;\n      transition: 200ms ease-in-out;\n      transform: scale(0);\n\n      ", ";\n    }\n  "], ["\n    pointer-events: none;\n    ", ";\n\n    ", ";\n\n    &:after {\n      content: '';\n      display: block;\n      background: ", ";\n      opacity: 0;\n      transition: 200ms ease-in-out;\n      transform: scale(0);\n\n      ", ";\n    }\n  "])), (_v2 = _v1, (0, _v25.css)(_v15 || (_v15 = (0, _v24.a)(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    ", ";\n  "], ["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    ", ";\n  "])), _v2 ? "right: 0" : "left: 0")), "toggle" === _v0 && (0, _v25.css)(_v12 || (_v12 = (0, _v24.a)(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), function (_v0) {
      var _v1 = _v0.theme;
      return "dark" === _v1.name ? _v1.content.background : _v1.formats.alternative;
    }), (0, _v27.blue)(500), "toggle" === _v0 && (0, _v25.css)(_v13 || (_v13 = (0, _v24.a)(["\n        background: ", ";\n        opacity: 1;\n        transition: 120ms ease-in-out;\n        transform: scale(1);\n        width: 50%;\n      "], ["\n        background: ", ";\n        opacity: 1;\n        transition: 120ms ease-in-out;\n        transform: scale(1);\n        width: 50%;\n      "])), _v27.white));
  }, "Hidden", 0, _v33, "Label", 0, _v34, "RoundInput", 0, function (_v0) {
    return (0, _v25.css)(_v9 || (_v9 = (0, _v24.a)(["\n  ", ";\n  border-radius: 50%;\n"], ["\n  ", ";\n  border-radius: 50%;\n"])), _v32(_v0));
  }, "SquareInput", 0, _v32, "ToggleInput", 0, function (_v0) {
    return (0, _v25.css)(_v10 || (_v10 = (0, _v24.a)(["\n  ", ";\n  width: ", ";\n  border-radius: 3rem;\n"], ["\n  ", ";\n  width: ", ";\n  border-radius: 3rem;\n"])), _v32(_v0), (0, _v26.rem)(2 * _v0));
  }, "inputColors", 0, function (_v0) {
    var _v1 = _v0.theme,
      _v2 = _v0.disabled,
      _v3 = void 0 !== _v2 && _v2,
      _v4 = _v0.format;
    _v4 && _v1.formats[_v4] || (_v4 = "basic");
    var _v5 = _v1.formats[_v4],
      _v6 = .4 * ("basic" !== _v4);
    return (0, _v25.css)(_v3 || (_v3 = (0, _v24.a)(["\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    transition: 120ms ease-in-out;\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n\n    ", "\n\n    ", "\n  "], ["\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    transition: 120ms ease-in-out;\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n\n    ", "\n\n    ", "\n  "])), _v1.content.color, _v1.content.background, (0, _v26.rgba)(_v5, .25 + _v6), (0, _v26.rgba)(_v5, .5 + _v6), !_v3 && (0, _v25.css)(_v1 || (_v1 = (0, _v24.a)(["\n      &:hover {\n        border: 1px solid ", ";\n      }\n    "], ["\n      &:hover {\n        border: 1px solid ", ";\n      }\n    "])), (0, _v26.rgba)(_v5, .5 + _v6)), _v3 && (0, _v25.css)(_v2 || (_v2 = (0, _v24.a)(["\n      background-color: ", ";\n      border-color: ", ";\n      pointer-events: none;\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n      pointer-events: none;\n    "])), _v1.content.disabled, (0, _v26.rgba)(_v5, .1 + _v6)));
  }, "inputShape", 0, function (_v0) {
    var _v1 = _v0.inputSize,
      _v2 = _v0.floating,
      _v3 = _v0.variant,
      _v4 = _v0.pill,
      _v5 = (_v29[_v1] / 2 - .175) / ("underline" === (void 0 === _v3 ? null : _v3) ? 2.5 : 1);
    return (0, _v25.css)(_v5 || (_v5 = (0, _v24.a)(["\n    border-radius: ", ";\n    padding: ", "rem;\n    width: 100%;\n    margin: 0;\n    font-size: ", "rem;\n    outline: none;\n    ", ";\n\n    ", ";\n  "], ["\n    border-radius: ", ";\n    padding: ", "rem;\n    width: 100%;\n    margin: 0;\n    font-size: ", "rem;\n    outline: none;\n    ", ";\n\n    ", ";\n  "])), void 0 !== _v4 && _v4 ? "2rem" : "0.25rem", _v5, _v28[_v1], _v31, _v2 && (0, _v25.css)(_v4 || (_v4 = (0, _v24.a)(["\n      padding-top: ", "rem;\n    "], ["\n      padding-top: ", "rem;\n    "])), 3 * _v5));
  }], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = (0, _v36.forwardRef)(function (_v0, _v1) {
      var _v2 = _v0.children;
      _v0.defaultValue;
      var _v3 = _v0.disabled,
        _v4 = _v0.floating,
        _v5 = _v0.floatLabel;
      _v0.icon;
      var _v6 = _v0.id,
        _v7 = _v0.label,
        _v8 = _v0.messages,
        _v9 = void 0 === _v8 ? {} : _v8,
        _v10 = _v0.status,
        _v11 = _v0.style,
        _v12 = _v0.size,
        _v13 = _v0.theme;
      _v0.value;
      var _v14 = (0, _v24.b)(_v0, ["children", "defaultValue", "disabled", "floating", "floatLabel", "icon", "id", "label", "messages", "status", "style", "size", "theme", "value"]),
        _v15 = _v4 && _v5,
        _v16 = _v9.pre && _v9.pre,
        _v17 = _v9.post && _v9.post,
        _v18 = "negative" === _v10 && _v9.error,
        _v19 = "positive" === _v10 && _v9.help;
      return _v36.default.createElement("div", (0, _v24.c)({}, _v14, {
        ref: _v1,
        style: (0, _v24.c)((0, _v24.c)({}, _v11), {
          position: "relative"
        })
      }), _v16, _v7 && _v36.default.createElement(_v44, {
        floating: _v4,
        active: _v15,
        sizeInput: _v12,
        htmlFor: _v6,
        disabled: _v3
      }, _v7), _v2, Object.values(_v9).length > 0 && _v36.default.createElement(_v45, {
        error: _v18,
        help: _v19,
        post: _v17,
        status: _v10,
        theme: _v13
      }));
    }),
    _v41 = {
      xxs: .5,
      xs: .75,
      sm: .75,
      md: 1,
      lg: 1.5,
      xl: 1.75,
      xxl: 2
    },
    _v42 = {
      xxs: .25,
      xs: .55,
      sm: .95,
      md: .95,
      lg: 1.1,
      xl: 1.55,
      xxl: 2
    },
    _v43 = {
      xxs: .25,
      xs: .35,
      sm: .5,
      md: .6,
      lg: .7,
      xl: .9,
      xxl: 1.1
    },
    _v44 = (0, _v25.default)(_v37.Text).attrs({
      element: "label"
    })(_v23 || (_v23 = (0, _v24.a)(["\n  display: inline-block;\n  transition: 120ms ease-in-out;\n  cursor: ", ";\n  font-size: ", "rem;\n  color: ", ";\n  margin-bottom: 0.2rem;\n  font-weight: 400;\n\n  ", ";\n\n  ", ";\n"], ["\n  display: inline-block;\n  transition: 120ms ease-in-out;\n  cursor: ", ";\n  font-size: ", "rem;\n  color: ", ";\n  margin-bottom: 0.2rem;\n  font-weight: 400;\n\n  ", ";\n\n  ", ";\n"])), function (_v0) {
      return _v0.disabled ? "not-allowed" : "pointer";
    }, function (_v0) {
      return .315 + _v41[_v0.sizeInput] / 1.8;
    }, _v38.core.color.text(600), function (_v0) {
      return _v0.floating && !_v0.active && (0, _v25.css)(_v21 || (_v21 = (0, _v24.a)(["\n      pointer-events: none;\n      position: absolute;\n      z-index: 1;\n      font-size: ", "rem;\n      top: ", "rem;\n      left: 0.75rem;\n    "], ["\n      pointer-events: none;\n      position: absolute;\n      z-index: 1;\n      font-size: ", "rem;\n      top: ", "rem;\n      left: 0.75rem;\n    "])), _v41[_v0.sizeInput], _v42[_v0.sizeInput]);
    }, function (_v0) {
      return _v0.floating && _v0.active && (0, _v25.css)(_v22 || (_v22 = (0, _v24.a)(["\n      position: absolute;\n      z-index: 1;\n      font-size: ", "rem;\n      top: ", "rem;\n      left: ", "rem;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      font-size: ", "rem;\n      top: ", "rem;\n      left: ", "rem;\n    "])), .315 + _v41[_v0.sizeInput] / 1.8, .25 + _v42[_v0.sizeInput] / 4, _v43[_v0.sizeInput]);
    }),
    _v45 = (0, _v36.forwardRef)(function (_v0, _v1) {
      var _v2 = _v0.error,
        _v3 = _v0.position,
        _v4 = _v0.help,
        _v5 = _v0.post;
      _v0.theme;
      var _v6 = (0, _v24.b)(_v0, ["error", "position", "help", "post", "theme"]);
      return _v5 && (_v6.children = _v5), _v4 && (_v6.children = _v4), _v2 && (_v6.children = _v2), _v36.default.createElement("div", (0, _v24.c)({}, _v6, {
        style: {
          display: "inline-flex",
          marginBottom: "sublabel" === (void 0 === _v3 ? "bottom" : _v3) && "0.5rem"
        }
      }), _v5 && _v36.default.createElement(_v46, (0, _v24.c)({
        ref: _v1
      }, _v6)), _v4 && _v36.default.createElement(_v46, (0, _v24.c)({
        ref: _v1
      }, _v6)), _v2 && _v36.default.createElement(_v46, (0, _v24.c)({
        ref: _v1
      }, _v6)));
    });
  function _v46(_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.status,
      _v3 = (0, _v24.b)(_v0, ["children", "status"]);
    return _v36.default.createElement(_v39.Paragraph, (0, _v24.c)({}, _v3, {
      size: "3",
      element: "span",
      role: "negative" === _v2 ? "alert" : "note",
      status: _v2,
      style: {
        overflow: "hidden"
      }
    }), _v1);
  }
  _v0.s(["Wrapper", 0, _v40], 0);
}