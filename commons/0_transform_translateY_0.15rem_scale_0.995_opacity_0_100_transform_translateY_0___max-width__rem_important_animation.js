{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = (0, _v10.keyframes)(_v1 || (_v1 = (0, _v8.a)(["\n  0% {\n    transform: translateY(0.15rem) scale(0.995);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0) scale(1) rotate(0deg);\n    opacity: 1\n  }\n"], ["\n  0% {\n    transform: translateY(0.15rem) scale(0.995);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0) scale(1) rotate(0deg);\n    opacity: 1\n  }\n"]))),
    _v14 = _v10.default.div(_v2 || (_v2 = (0, _v8.a)(["\n  max-width: ", "rem !important;\n  animation: ", " 120ms ease-in-out;\n  will-change: transform;\n  visibility: ", ";\n\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  max-width: ", "rem !important;\n  animation: ", " 120ms ease-in-out;\n  will-change: transform;\n  visibility: ", ";\n\n  ", ";\n  ", ";\n  ", ";\n"])), 17, _v13, function (_v0) {
      return _v0.disabled ? "hidden" : "visible";
    }, function (_v0) {
      var _v1 = _v0.pill,
        _v2 = void 0 !== _v1 && _v1;
      return (0, _v10.css)(_v4 || (_v4 = (0, _v8.a)(["\n    padding: 0.5rem ", ";\n    border-radius: ", ";\n  "], ["\n    padding: 0.5rem ", ";\n    border-radius: ", ";\n  "])), _v2 ? "1rem" : "0.5rem", _v2 ? "2rem" : "0.25rem");
    }, function (_v0) {
      var _v1 = _v0.theme,
        _v2 = _v0.$wrap,
        _v3 = _v0.variant;
      switch (void 0 === _v3 ? "simple" : _v3) {
        case "simple":
          return (0, _v10.css)(_v5 || (_v5 = (0, _v8.a)(["\n        min-width: ", ";\n        background-color: ", ";\n        color: ", ";\n        text-align: center;\n\n        p {\n          color: ", ";\n        }\n      "], ["\n        min-width: ", ";\n        background-color: ", ";\n        color: ", ";\n        text-align: center;\n\n        p {\n          color: ", ";\n        }\n      "])), _v2 ? "".concat(8.5, "rem") : "0", _v12.black, _v12.white, _v12.white);
        case "speech-bubble":
          return (0, _v10.css)(_v6 || (_v6 = (0, _v8.a)(["\n        max-width: ", "rem !important;\n        padding: 1.5rem;\n        background: ", ";\n        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0.5rem -0.25rem,\n          rgba(0, 0, 0, 0.15) 0 0.75rem 0.75rem -0.75rem;\n        color: ", ";\n\n        ", ";\n\n        p {\n          color: ", ";\n        }\n      "], ["\n        max-width: ", "rem !important;\n        padding: 1.5rem;\n        background: ", ";\n        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0.5rem -0.25rem,\n          rgba(0, 0, 0, 0.15) 0 0.75rem 0.75rem -0.75rem;\n        color: ", ";\n\n        ", ";\n\n        p {\n          color: ", ";\n        }\n      "])), 21.25, _v1.content.background, _v1.content.color, _v15, _v1.content.color);
      }
    }, function (_v0) {
      var _v1 = _v0.theme,
        _v2 = "dark" === _v1.name ? .2 : .05,
        _v3 = _v1.content.color;
      return (0, _v10.css)(_v3 || (_v3 = (0, _v8.a)(["\n    border: 1px solid ", ";\n  "], ["\n    border: 1px solid ", ";\n  "])), (0, _v11.rgba)(_v3, _v2));
    });
  function _v15(_v0) {
    var _v1,
      _v2 = _v0.theme,
      _v3 = _v0.attach,
      _v4 = (0, _v8._)("top" === (_v1 = _v3) ? ["bottom", "left", "right"] : "bottom" === _v1 ? ["top", "left", "right"] : "left" === _v1 ? ["right", "top", "bottom"] : "right" === _v1 ? ["left", "top", "bottom"] : void 0, 3),
      _v5 = _v4[0],
      _v6 = _v4[1],
      _v7 = _v4[2],
      _v8 = _v2.content,
      _v9 = _v8.background,
      _v10 = _v8.color,
      _v11 = "dark" === _v2.name ? .25 : .15,
      _v12 = "dark" === _v2.name ? "" : "filter: blur(1px)";
    return (0, _v10.css)(_v7 || (_v7 = (0, _v8.a)(["\n    &:after,\n    &:before {\n      content: '';\n      z-index: 5000;\n      position: absolute;\n      transform: translate3d(0, 0, 0);\n      ", ": calc(50% - 0.75rem);\n      ", ": -0.75rem;\n\n      border-", ": 0.75rem solid ", ";\n      border-", ": 0.75rem solid transparent;\n      border-", ": 0.75rem solid transparent;\n    }\n\n    &:before {\n      border-", ": 0.75rem solid ", ";\n      ", ": -0.83rem;\n      ", ";\n    }\n  "], ["\n    &:after,\n    &:before {\n      content: '';\n      z-index: 5000;\n      position: absolute;\n      transform: translate3d(0, 0, 0);\n      ", ": calc(50% - 0.75rem);\n      ", ": -0.75rem;\n\n      border-", ": 0.75rem solid ", ";\n      border-", ": 0.75rem solid transparent;\n      border-", ": 0.75rem solid transparent;\n    }\n\n    &:before {\n      border-", ": 0.75rem solid ", ";\n      ", ": -0.83rem;\n      ", ";\n    }\n  "])), _v6, _v5, _v3, _v9, _v6, _v7, _v3, (0, _v11.rgba)(_v10, _v11), _v5, _v12);
  }
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  _v0.i(0);
  var _v19 = (0, _v16.withIris)(function (_v0) {
      var _v1,
        _v2,
        _v3 = _v0.active,
        _v4 = _v0.disabled,
        _v5 = _v0.attach,
        _v6 = void 0 === _v5 ? "top" : _v5,
        _v7 = _v0.content,
        _v8 = _v0.children,
        _v9 = _v0.forwardRef,
        _v10 = _v0.trigger,
        _v11 = _v0.variant,
        _v12 = void 0 === _v11 ? "simple" : _v11,
        _v13 = (0, _v8.b)(_v0, ["active", "disabled", "attach", "content", "children", "forwardRef", "trigger", "variant"]),
        _v14 = (0, _v8._)("string" == typeof (_v1 = _v7) ? [_v1.length > 15, _v9.default.createElement(_v18.Paragraph, {
          size: "2",
          style: {
            margin: 0
          }
        }, _v1)] : [null, _v1], 2),
        _v15 = _v14[0],
        _v16 = _v14[1],
        _v17 = (0, _v8._)((0, _v17.usePortal_DEPRECATED)(_v9.default.createElement(_v14, (0, _v8.c)({
          attach: _v6,
          ref: _v9,
          variant: _v12,
          $wrap: _v15,
          disabled: void 0 !== _v4 && _v4
        }, _v13, {
          children: _v16
        })), {
          attach: _v6,
          animation: _v20,
          forceActive: _v3,
          margin: "speech-bubble" === _v12 ? 18 : 8,
          trigger: void 0 === _v10 ? "hover" : _v10
        }), 2),
        _v18 = _v17[0],
        _v19 = _v17[1],
        _v20 = ((0, _v17.validate)(_v8), _v2 = "usePortal components require children to accept refs! Please pass correct children to <Tip />!", _v13.className, _v13.style, void (void 0 === _v2 && (_v2 = null)));
      return _v20 ? _v9.default.createElement("div", (0, _v8.c)({}, _v20), _v8) : _v9.default.createElement(_v9.default.Fragment, null, _v18, (0, _v9.cloneElement)(_v8, _v19));
    }),
    _v20 = {
      enter: {
        opacity: 1,
        transform: "translateY(0)"
      },
      exit: {
        opacity: 0,
        transform: "translateY(5%)"
      }
    };
  _v0.s(["Tip", 0, _v19], 0);
}