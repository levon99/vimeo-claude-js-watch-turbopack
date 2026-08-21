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
    _v23,
    _v24,
    _v25,
    _v26,
    _v27,
    _v28,
    _v29,
    _v30,
    _v31,
    _v32,
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = {
      xs: 4,
      sm: 6,
      md: 8,
      lg: 10,
      xl: 12
    },
    _v38 = _v35.default.div(_v1 || (_v1 = (0, _v33.a)(["\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  height: calc(100% + 2px);\n  background: ", ";\n  border-right: ", ";\n  border-radius: ", ";\n"], ["\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  height: calc(100% + 2px);\n  background: ", ";\n  border-right: ", ";\n  border-radius: ", ";\n"])), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v36.rgba)(_v1.content.color, .2);
    }, function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v36.rgba)(_v1.content.color, .5);
    }, function (_v0) {
      return "".concat((0, _v36.rem)(_v37[_v0.size]), " 0 0 ").concat((0, _v36.rem)(_v37[_v0.size]));
    }),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = (0, _v35.css)(_v2 || (_v2 = (0, _v33.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n\n  > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n\n  > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"]))),
    _v43 = _v35.default.span(_v4 || (_v4 = (0, _v33.a)(["\n  ", "\n"], ["\n  ", "\n"])), function (_v0) {
      return ("xxl" === _v0.size || "xl" === _v0.size) && (0, _v35.css)(_v3 || (_v3 = (0, _v33.a)(["\n      transform: translateY(-1px);\n    "], ["\n      transform: translateY(-1px);\n    "])));
    }),
    _v44 = _v35.default.button(_v5 || (_v5 = (0, _v33.a)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), _v42, function (_v0) {
      var _v1 = _v0.size,
        _v2 = _v0.iconOnly,
        _v3 = _v0.iconPosition,
        _v4 = _v45[_v1];
      return _v2 ? (0, _v35.css)(_v6 || (_v6 = (0, _v33.a)(["\n        svg {\n          width: ", "rem;\n          height: ", "rem;\n          display: inline-flex;\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "], ["\n        svg {\n          width: ", "rem;\n          height: ", "rem;\n          display: inline-flex;\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "])), _v4 / 1.25 + .75, _v4 / 1.25 + .75) : (0, _v35.css)(_v7 || (_v7 = (0, _v33.a)(["\n        position: relative;\n\n        svg {\n          width: ", "rem;\n          min-width: ", "rem;\n          height: 100%;\n          min-height: 100%;\n          display: inline-flex;\n          margin: ", ";\n          position: ", ";\n          right: ", ";\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "], ["\n        position: relative;\n\n        svg {\n          width: ", "rem;\n          min-width: ", "rem;\n          height: 100%;\n          min-height: 100%;\n          display: inline-flex;\n          margin: ", ";\n          position: ", ";\n          right: ", ";\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "])), _v4 / 1.25 + .75, _v4 / 1.25 + .75, {
        left: "auto ".concat((_v4 + .75) / 2, "rem auto 0"),
        right: "auto 0 auto ".concat((_v4 + .75) / 2, "rem"),
        featured: "auto 0.75rem"
      }[_v3], "action" === _v3 && "absolute", "action" === _v3 && "0.5rem");
    }, function (_v0) {
      switch (_v0.size) {
        case "xxl":
          return {
            fontSize: (0, _v36.rem)(20),
            lineHeight: (0, _v36.rem)(70),
            height: (0, _v36.rem)(72),
            minWidth: (0, _v36.rem)(72)
          };
        case "xl":
          return {
            fontSize: (0, _v36.rem)(18),
            lineHeight: (0, _v36.rem)(54),
            height: (0, _v36.rem)(56),
            minWidth: (0, _v36.rem)(56)
          };
        case "lg":
          return {
            fontSize: (0, _v36.rem)(16),
            lineHeight: (0, _v36.rem)(46),
            height: (0, _v36.rem)(48),
            minWidth: (0, _v36.rem)(48)
          };
        case "md":
          return {
            fontSize: (0, _v36.rem)(14),
            lineHeight: (0, _v36.rem)(38),
            height: (0, _v36.rem)(40),
            minWidth: (0, _v36.rem)(40)
          };
        case "sm":
          return {
            fontSize: (0, _v36.rem)(14),
            lineHeight: (0, _v36.rem)(30),
            height: (0, _v36.rem)(32),
            minWidth: (0, _v36.rem)(32)
          };
        case "xs":
          return {
            fontSize: (0, _v36.rem)(12),
            lineHeight: (0, _v36.rem)(22),
            height: (0, _v36.rem)(24),
            minWidth: (0, _v36.rem)(24)
          };
        case "xxs":
          return {
            fontSize: (0, _v36.rem)(10),
            lineHeight: (0, _v36.rem)(18),
            height: (0, _v36.rem)(20),
            minWidth: (0, _v36.rem)(20)
          };
      }
    }, function (_v0) {
      var _v1 = _v0.fluid;
      return _v1 && (!0 === _v1 ? _v47({}) : _v47(_v1));
    }, function (_v0) {
      var _v1 = _v0.icon,
        _v2 = _v0.iconOnly,
        _v3 = _v0.iconPosition,
        _v4 = _v0.size;
      return !_v2 && function (_v0, _v1, _v2) {
        var _v3 = (0, _v36.rem)(3),
          _v4 = "".concat(4 * _v2 + 2, "rem");
        switch (_v0 && _v1) {
          case "left":
          case "right":
            return {
              padding: "0 " + _v2 + "rem",
              minHeight: _v3,
              minWidth: _v4
            };
          case "featured":
            return {
              padding: "0 ".concat(_v2, "rem 0 ").concat(_v2 + 2.5, "rem"),
              minHeight: _v3,
              minWidth: "".concat(12 * _v2, "rem")
            };
          case "action":
            return {
              padding: "0 2.5rem 0 0.5rem",
              minHeight: _v3,
              minWidth: _v4
            };
          default:
            return {
              padding: "0 ".concat(_v2, "rem"),
              minHeight: _v3,
              minWidth: _v4
            };
        }
      }(_v1, _v3, _v45[_v4]);
    }, function (_v0) {
      var _v1 = _v0.size,
        _v2 = _v0.pill;
      return _v0.circular && (_v2 = !0), {
        borderRadius: _v2 ? "2rem" : (0, _v36.rem)(_v37[_v1])
      };
    }, function (_v0) {
      var _v1 = _v0.floating;
      return (void 0 === _v1 ? null : _v1) && (0, _v35.css)(_v9 || (_v9 = (0, _v33.a)(["\n      box-shadow: 0 ", " ", " 0 ", ";\n\n      &:active {\n        transform: translateY(0) scale(0.98);\n      }\n\n      &:hover:not(:active) {\n        transform: translateY(-1px) scale(1.01);\n        box-shadow: 0 ", " ", " 0 ", ";\n      }\n    "], ["\n      box-shadow: 0 ", " ", " 0 ", ";\n\n      &:active {\n        transform: translateY(0) scale(0.98);\n      }\n\n      &:hover:not(:active) {\n        transform: translateY(-1px) scale(1.01);\n        box-shadow: 0 ", " ", " 0 ", ";\n      }\n    "])), (0, _v36.rem)(3), (0, _v36.rem)(6), (0, _v36.rgba)(_v40.black, .125), (0, _v36.rem)(5), (0, _v36.rem)(7), (0, _v36.rgba)(_v40.black, .175));
    }, function (_v0) {
      return {
        transition: _v0.theme.a11y.motion ? "none" : "all 170ms ease-in-out, font-size 50ms ease-in-out, width 0ms linear, padding 130ms ease-in-out"
      };
    }, function (_v0) {
      return _v0.$loading && (0, _v35.css)(_v8 || (_v8 = (0, _v33.a)(["\n      cursor: wait !important;\n\n      svg,\n      ", ", ", " {\n        opacity: 0;\n      }\n    "], ["\n      cursor: wait !important;\n\n      svg,\n      ", ", ", " {\n        opacity: 0;\n      }\n    "])), _v38, _v43);
    }, function (_v0) {
      var _v1 = _v0.active,
        _v2 = _v0.color,
        _v3 = _v0.format,
        _v4 = _v0.theme,
        _v5 = _v0.variant;
      if (!_v3.includes("upsell")) {
        var _v6,
          _v7,
          _v8,
          _v9,
          _v10 = (_v2 ? "string" == typeof _v2 ? (_v6 = _v2, _v7 = (0, _v36.tint)(.15, _v6), _v8 = (0, _v36.shade)(.15, _v6), _v9 = (0, _v36.readableColor)(_v6)) : _v2.color && (_v6 = _v2.color, _v7 = _v2.hover ? _v2.hover : (0, _v36.tint)(.15, _v6), _v8 = _v2.active ? _v2.active : (0, _v36.shade)(.15, _v6), _v9 = _v2.textColor ? _v2.textColor : (0, _v36.readableColor)(_v2.color)) : (_v6 = _v4.formats[_v3], _v7 = (0, _v36.tint)(.15, _v6), _v8 = (0, _v36.shade)(.15, _v6), _v9 = null), {
            color: _v6,
            hoverColor: _v7,
            activeColor: _v8,
            textColor: _v9
          }),
          _v11 = _v10.color,
          _v12 = _v10.hoverColor,
          _v13 = _v10.activeColor,
          _v14 = _v10.textColor || (0, _v39.a11yColor)(_v11),
          _v15 = _v2 ? (0, _v36.readableColor)(_v12) : (0, _v39.a11yColor)(_v12),
          _v16 = _v2 ? (0, _v36.readableColor)(_v13) : (0, _v39.a11yColor)(_v13);
        switch (_v5) {
          case "outline":
            return (0, _v35.css)(_v10 || (_v10 = (0, _v33.a)(["\n        border: ", " solid ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "], ["\n        border: ", " solid ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "])), "1px", _v11, _v11, "light" === _v4.name ? (0, _v36.shade)(.1, _v11) : (0, _v36.tint)(.5, _v11), "light" === _v4.name ? (0, _v36.rgba)(_v13, .2) : (0, _v36.rgba)((0, _v36.tint)(.3, _v13), .3));
          case "dashed":
            return (0, _v35.css)(_v11 || (_v11 = (0, _v33.a)(["\n        border: ", " dashed ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "], ["\n        border: ", " dashed ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "])), "1px", _v11, _v11, (0, _v36.shade)(.2, _v11), (0, _v36.rgba)(_v13, .2));
          case "minimal":
            var _v17 = (0, _v35.css)(_v12 || (_v12 = (0, _v33.a)(["\n        background: ", ";\n        color: ", ";\n      "], ["\n        background: ", ";\n        color: ", ";\n      "])), _v13, _v16);
            return (0, _v35.css)(_v13 || (_v13 = (0, _v33.a)(["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n\n        ", "\n\n        ", "\n      "], ["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n\n        ", "\n\n        ", "\n      "])), "1px", _v11, _v15, _v11, "&:active { ".concat(_v17, " }"), _v1 && _v17);
          case "hyperminimal":
            return (0, _v35.css)(_v14 || (_v14 = (0, _v33.a)(["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          /* color: hoverColorDark */\n          color: ", ";\n        }\n      "], ["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          /* color: hoverColorDark */\n          color: ", ";\n        }\n      "])), "1px", _v11, "1px", _v12);
          case "minimalTransparent":
            var _v18 = (0, _v35.css)(_v15 || (_v15 = (0, _v33.a)(["\n        border: ", " solid transparent;\n        background: ", ";\n      "], ["\n        border: ", " solid transparent;\n        background: ", ";\n      "])), "1px", (0, _v36.rgba)(_v11, .1));
            return (0, _v35.css)(_v16 || (_v16 = (0, _v33.a)(["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          background: ", ";\n          color: ", ";\n        }\n\n        ", "\n\n        ", "\n      "], ["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          background: ", ";\n          color: ", ";\n        }\n\n        ", "\n\n        ", "\n      "])), "1px", _v11, "1px", (0, _v36.rgba)(_v11, .1), _v12, "&:active { ".concat(_v18, " }"), _v1 && _v18);
          case "transparent":
            var _v19 = (0, _v35.css)(_v17 || (_v17 = (0, _v33.a)(["\n        background: ", ";\n      "], ["\n        background: ", ";\n      "])), (0, _v36.rgba)((0, _v36.shade)(.2, _v13), .75));
            return (0, _v35.css)(_v19 || (_v19 = (0, _v33.a)(["\n        background: ", ";\n        color: ", ";\n\n        &:active {\n          background: ", ";\n        }\n\n        ", "\n\n        ", "\n\n        &:hover:not(:active) {\n          background: ", ";\n          /* if: grow */\n          /* transform: scale(1.01); */\n          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n\n        &:active {\n          background: ", ";\n        }\n\n        ", "\n\n        ", "\n\n        &:hover:not(:active) {\n          background: ", ";\n          /* if: grow */\n          /* transform: scale(1.01); */\n          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */\n        }\n      "])), (0, _v36.rgba)(_v11, .6), _v40.white, (0, _v36.rgba)((0, _v36.shade)(.2, _v13), .75), "&:active { ".concat(_v19, " ").concat((0, _v35.css)(_v18 || (_v18 = (0, _v33.a)(["\n          transform: scale(0.98);\n        "], ["\n          transform: scale(0.98);\n        "]))), " }"), _v1 && _v19, (0, _v36.rgba)(_v11, .675));
          default:
            var _v20 = (0, _v35.css)(_v20 || (_v20 = (0, _v33.a)(["\n        background: ", ";\n        color: ", ";\n      "], ["\n        background: ", ";\n        color: ", ";\n      "])), _v13, _v16);
            return (0, _v35.css)(_v22 || (_v22 = (0, _v33.a)(["\n        border: ", " solid ", ";\n        background: ", ";\n        color: ", ";\n\n        ", "\n\n        ", "\n\n      &:hover:not(:active) {\n          background: ", ";\n          color: ", ";\n        }\n      "], ["\n        border: ", " solid ", ";\n        background: ", ";\n        color: ", ";\n\n        ", "\n\n        ", "\n\n      &:hover:not(:active) {\n          background: ", ";\n          color: ", ";\n        }\n      "])), _v11, _v11, _v11, _v14, "&:active { ".concat(_v20, " ").concat((0, _v35.css)(_v21 || (_v21 = (0, _v33.a)(["\n          transform: scale(0.98);\n        "], ["\n          transform: scale(0.98);\n        "]))), "}"), _v1 && _v20, _v12, _v15);
        }
      }
    }, function (_v0) {
      var _v1 = _v0.disabled;
      return (0, _v35.css)(_v24 || (_v24 = (0, _v33.a)(["\n    &:disabled {\n      ", "\n    }\n    ", "\n  "], ["\n    &:disabled {\n      ", "\n    }\n    ", "\n  "])), _v48, _v1 && _v48);
    }, function (_v0) {
      var _v1 = _v0.variant,
        _v2 = _v0.textShift,
        _v3 = _v0.iconPosition;
      if (_v1.includes("minimal")) return _v2 && (0, _v35.css)(_v27 || (_v27 = (0, _v33.a)(["\n      &:not(:hover):not(:focus):not(:focus-within) {\n        ", ": 0;\n      }\n    "], ["\n      &:not(:hover):not(:focus):not(:focus-within) {\n        ", ": 0;\n      }\n    "])), "padding-" + ("right" === _v3 ? "left" : "right"));
    }, function (_v0) {
      return _v0.checked && (0, _v35.css)(_v26 || (_v26 = (0, _v33.a)(["\n      border: 2px solid ", ";\n\n      &:hover:not(:active) {\n        border: 2px solid ", ";\n      }\n    "], ["\n      border: 2px solid ", ";\n\n      &:hover:not(:active) {\n        border: 2px solid ", ";\n      }\n    "])), (0, _v40.blue)(500), (0, _v40.blue)(500));
    }, function (_v0) {
      if (_v0.format.includes("upsell")) return (0, _v35.css)(_v28 || (_v28 = (0, _v33.a)(["\n    border: 1px solid transparent;\n    background: ", ";\n    color: #fff;\n\n    &:active {\n      background: ", ";\n      transform: scale(0.98);\n      color: ", ";\n    }\n\n    &:hover:not(:active) {\n      background: ", ";\n      border: 1px solid transparent;\n      color: ", ";\n    }\n  "], ["\n    border: 1px solid transparent;\n    background: ", ";\n    color: #fff;\n\n    &:active {\n      background: ", ";\n      transform: scale(0.98);\n      color: ", ";\n    }\n\n    &:hover:not(:active) {\n      background: ", ";\n      border: 1px solid transparent;\n      color: ", ";\n    }\n  "])), _v41.core.color.upsell.New, (0, _v40.violet)(600), (0, _v40.violet)(0), (0, _v40.violet)(500), (0, _v40.violet)(0));
    }),
    _v45 = {
      xxs: .125,
      xs: .25,
      sm: .5,
      md: .75,
      lg: 1,
      xl: 1.25,
      xxl: 1.5
    },
    _v46 = function (_v0) {
      var _v1 = _v0.min,
        _v2 = void 0 === _v1 ? 0 : _v1,
        _v3 = _v0.max,
        _v4 = _v0.type,
        _v5 = void 0 === _v4 ? "only screen" : _v4;
      return _v3 && _v2 !== _v3 ? "@media ".concat(_v5, " and (min-width: ").concat((0, _v36.em)(_v2), ") and (max-width: ").concat((0, _v36.em)(_v3), ")") : "@media ".concat(_v5, " and (min-width: ").concat((0, _v36.em)(_v2), ")");
    },
    _v47 = function (_v0) {
      var _v1 = _v0.min,
        _v2 = _v0.max;
      return (0, _v35.css)(_v23 || (_v23 = (0, _v33.a)(["\n  ", " {\n    width: 100%;\n  }\n"], ["\n  ", " {\n    width: 100%;\n  }\n"])), _v46({
        min: void 0 === _v1 ? 0 : _v1,
        max: _v2
      }));
    },
    _v48 = (0, _v35.css)(_v25 || (_v25 = (0, _v33.a)(["\n  opacity: 0.5;\n  pointer-events: none;\n  user-select: none;\n"], ["\n  opacity: 0.5;\n  pointer-events: none;\n  user-select: none;\n"]))),
    _v49 = {
      xl: (0, _v36.rem)(40),
      lg: (0, _v36.rem)(26),
      md: (0, _v36.rem)(24),
      sm: (0, _v36.rem)(16),
      xs: (0, _v36.rem)(12)
    },
    _v50 = (0, _v35.keyframes)(_v29 || (_v29 = (0, _v33.a)(["\n  from { transform: rotate(0deg) }\n  to   { transform: rotate(360deg) }\n"], ["\n  from { transform: rotate(0deg) }\n  to   { transform: rotate(360deg) }\n"]))),
    _v51 = _v35.default.div(_v31 || (_v31 = (0, _v33.a)(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), function (_v0) {
      var _v1,
        _v2,
        _v3 = _v0.theme,
        _v4 = (null == (_v2 = null == (_v1 = null == _v3 ? void 0 : _v3.motion) ? void 0 : _v1.loaderCircular) ? void 0 : _v2.speed) || 800;
      return (0, _v35.css)(_v30 || (_v30 = (0, _v33.a)(["\n    animation: ", " ", "ms linear infinite;\n  "], ["\n    animation: ", " ", "ms linear infinite;\n  "])), _v50, _v4);
    }, function (_v0) {
      var _v1,
        _v2,
        _v3 = _v0.theme,
        _v4 = _v0.format,
        _v5 = _v3.formats[_v4];
      return (null == (_v2 = null == (_v1 = null == _v3 ? void 0 : _v3.motion) ? void 0 : _v1.loaderCircular) ? void 0 : _v2.shape) || (0, _v35.css)(_v32 || (_v32 = (0, _v33.a)(["\n      border-width: ", ";\n      border-style: solid;\n      border-color: ", ";\n      border-bottom-color: transparent !important;\n      ", ";\n    "], ["\n      border-width: ", ";\n      border-style: solid;\n      border-color: ", ";\n      border-bottom-color: transparent !important;\n      ", ";\n    "])), (0, _v36.rem)(2), "adapative" === _v4 ? "currentColor" : _v5, _v52);
    });
  function _v52(_v0) {
    var _v1 = _v49[_v0.size];
    return {
      width: _v1,
      height: _v1,
      borderRadius: _v1
    };
  }
  var _v53 = _v0.i(0),
    _v54 = (0, _v53.withIris)(function (_v0) {
      var _v1 = _v0.format,
        _v2 = _v0.size,
        _v3 = _v0.forwardRef,
        _v4 = (0, _v33.b)(_v0, ["format", "size", "forwardRef"]);
      return _v34.default.createElement("div", (0, _v33.c)({}, _v4), _v34.default.createElement(_v51, {
        ref: _v3,
        format: void 0 === _v1 ? "primary" : _v1,
        size: void 0 === _v2 ? "md" : _v2
      }));
    }),
    _v55 = _v0.i(0),
    _v56 = (0, _v53.withIris)(function (_v0) {
      var _v1,
        _v2 = _v0.active,
        _v3 = _v0.checked,
        _v4 = _v0.children,
        _v5 = _v0.color,
        _v6 = _v0.element,
        _v7 = _v0.fluid,
        _v8 = _v0.format,
        _v9 = _v0.forwardRef,
        _v10 = _v0.icon,
        _v11 = _v0.iconPosition,
        _v12 = void 0 === _v11 ? "left" : _v11,
        _v13 = _v0.loading,
        _v14 = _v0.pill,
        _v15 = void 0 !== _v14 && _v14,
        _v16 = _v0.size,
        _v17 = void 0 === _v16 ? "md" : _v16,
        _v18 = _v0.status,
        _v19 = _v0.textShift,
        _v20 = _v0.theme,
        _v21 = _v0.type,
        _v22 = _v0.variant,
        _v23 = _v0.onClick,
        _v24 = (0, _v33.b)(_v0, ["active", "checked", "children", "color", "element", "fluid", "format", "forwardRef", "icon", "iconPosition", "loading", "pill", "size", "status", "textShift", "theme", "type", "variant", "onClick"]),
        _v25 = (0, _v34.useRef)(null),
        _v26 = void 0 === _v4 && _v10,
        _v27 = "left" === _v12 && _v10,
        _v28 = "right" === _v12 && _v10,
        _v29 = "featured" === _v12 && _v10,
        _v30 = "action" === _v12 && _v10,
        _v31 = _v15 ? 50 : _v37[_v17] + 2,
        _v32 = void 0 === _v8 ? "primary" : _v8;
      return _v18 && "neutral" !== _v18 && (_v32 = _v18), _v34.default.createElement(_v44, (0, _v33.c)({
        as: void 0 === _v6 ? "button" : _v6,
        color: _v5,
        fluid: _v7,
        format: _v32,
        icon: !!_v10,
        iconOnly: _v26,
        iconPosition: _v12,
        $loading: _v13,
        pill: _v15,
        ref: (_v1 = [_v25, _v9], function (_v0) {
          _v1.forEach(function (_v0) {
            "function" == typeof _v0 ? _v0(_v0) : null != _v0 && (_v0.current = _v0);
          });
        }),
        size: _v17,
        textShift: void 0 !== _v19 && _v19,
        theme: _v20,
        type: _v21,
        checked: void 0 !== _v3 && _v3,
        active: void 0 !== _v2 && _v2,
        variant: void 0 === _v22 ? "solid" : _v22,
        onClick: function (_v0) {
          var _v1;
          null == (_v1 = null == _v25 ? void 0 : _v25.current) || _v1.focus(), _v23 && _v23(_v0);
        }
      }, _v24), _v29 && _v34.default.createElement(_v38, {
        size: _v17
      }, _v10), _v27, _v4 && _v34.default.createElement(_v43, {
        size: _v17
      }, _v4), _v28, _v30, _v13 && _v34.default.createElement(_v54, {
        size: _v17,
        format: "adaptive",
        style: _v55.centered
      }), _v34.default.createElement(_v55.Focus, {
        parent: _v44,
        radius: _v31,
        isKeyboardOnly: !0
      }));
    }, !0, "components/Button/Button");
  _v0.s(["Button", 0, _v56], 0);
}