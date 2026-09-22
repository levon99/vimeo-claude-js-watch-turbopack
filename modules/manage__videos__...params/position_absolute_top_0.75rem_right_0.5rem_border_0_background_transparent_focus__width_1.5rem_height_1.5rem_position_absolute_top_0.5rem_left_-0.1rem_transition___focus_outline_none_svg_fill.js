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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v13.default.button(_v1 || (_v1 = (0, _v11.a)(["\n  position: absolute;\n  top: 0.75rem;\n  right: 0.5rem;\n  border: 0;\n  background: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  > svg {\n    width: 1.125rem;\n    height: 1.125rem;\n\n    * {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0.75rem;\n  right: 0.5rem;\n  border: 0;\n  background: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  > svg {\n    width: 1.125rem;\n    height: 1.125rem;\n\n    * {\n      fill: ", ";\n    }\n  }\n"])), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v14.rgba)(_v1.content.color, .667);
    }),
    _v18 = _v13.default.div(_v2 || (_v2 = (0, _v11.a)(["\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  top: 0.5rem;\n  left: -0.1rem;\n  transition: 120ms ease-in-out;\n\n  transform: ", ";\n\n  &:focus {\n    outline: none;\n  }\n\n  > svg {\n    * {\n      fill: ", ";\n    }\n  }\n"], ["\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  top: 0.5rem;\n  left: -0.1rem;\n  transition: 120ms ease-in-out;\n\n  transform: ", ";\n\n  &:focus {\n    outline: none;\n  }\n\n  > svg {\n    * {\n      fill: ", ";\n    }\n  }\n"])), function (_v0) {
      return _v0.open ? "rotate(0deg)" : "rotate(-90deg)";
    }, function (_v0) {
      return _v0.theme.content.color;
    }),
    _v19 = _v13.default.div(_v3 || (_v3 = (0, _v11.a)(["\n  display: block;\n  padding: 0.5rem 1.25rem;\n  text-transform: uppercase;\n  margin: 0.2rem 0 0;\n  color: ", ";\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.025rem;\n"], ["\n  display: block;\n  padding: 0.5rem 1.25rem;\n  text-transform: uppercase;\n  margin: 0.2rem 0 0;\n  color: ", ";\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.025rem;\n"])), function (_v0) {
      return (0, _v14.rgba)(_v0.theme.content.color, .5);
    }),
    _v20 = (0, _v13.keyframes)(_v4 || (_v4 = (0, _v11.a)(["\n  0% {\n    opacity: 0;\n    transform: scale(0.99) translateX(-0.25rem);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateX(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: scale(0.99) translateX(-0.25rem);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateX(0);\n  }\n"]))),
    _v21 = _v13.default.div(_v6 || (_v6 = (0, _v11.a)(["\n  border-radius: 0.2rem;\n  position: relative;\n  background: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n\n  > svg {\n    width: 1.125rem;\n    height: 1.125rem;\n    margin: 0 0.5rem 0 0;\n    display: inline-block;\n\n    * {\n      fill: ", ";\n    }\n  }\n"], ["\n  border-radius: 0.2rem;\n  position: relative;\n  background: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n\n  > svg {\n    width: 1.125rem;\n    height: 1.125rem;\n    margin: 0 0.5rem 0 0;\n    display: inline-block;\n\n    * {\n      fill: ", ";\n    }\n  }\n"])), function (_v0) {
      var _v1 = _v0.active,
        _v2 = _v0.theme;
      return _v1 && ("dark" === _v2.name ? (0, _v14.rgba)(_v2.content.color, .095) : (0, _v14.rgba)(_v2.content.color, .065));
    }, function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v14.rgba)(_v1.content.color, .025);
    }, function (_v0) {
      return _v0.$height && (0, _v13.css)(_v5 || (_v5 = (0, _v11.a)(["\n      transition: 230ms ease-in-out;\n      height: ", "rem;\n    "], ["\n      transition: 230ms ease-in-out;\n      height: ", "rem;\n    "])), (_v0.$height + 1) * 2.5 + .25);
    }, function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v14.rgba)(_v1.content.color, .667);
    }),
    _v22 = _v13.default.button(_v7 || (_v7 = (0, _v11.a)(["\n  padding: 0.5rem 1.25rem 0.5rem 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  align-items: center;\n  line-height: 1.5rem;\n  border-radius: 0.2rem;\n  font-size: 0.875rem;\n  width: 100%;\n  background: transparent;\n  color: ", ";\n  border: 0;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    color: ", ";\n    opacity: 0.5;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  > svg {\n    width: 1.125rem;\n    height: 1.125rem;\n    margin-right: 1rem;\n\n    * {\n      fill: ", ";\n    }\n  }\n"], ["\n  padding: 0.5rem 1.25rem 0.5rem 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  align-items: center;\n  line-height: 1.5rem;\n  border-radius: 0.2rem;\n  font-size: 0.875rem;\n  width: 100%;\n  background: transparent;\n  color: ", ";\n  border: 0;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    color: ", ";\n    opacity: 0.5;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  > svg {\n    width: 1.125rem;\n    height: 1.125rem;\n    margin-right: 1rem;\n\n    * {\n      fill: ", ";\n    }\n  }\n"])), _v15.core.color.text(0), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v14.rgba)(_v1.content.color, .05);
    }, _v15.core.color.text(600), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v14.rgba)(_v1.content.color, .667);
    }),
    _v23 = _v13.default.div(_v8 || (_v8 = (0, _v11.a)(["\n  display: block;\n  width: 20rem;\n  border-radius: 0.25rem;\n  color: ", ";\n  background: ", ";\n"], ["\n  display: block;\n  width: 20rem;\n  border-radius: 0.25rem;\n  color: ", ";\n  background: ", ";\n"])), function (_v0) {
      return _v0.theme.content.color;
    }, function (_v0) {
      var _v1 = _v0.theme;
      return "secondary" === _v0.format ? "dark" === _v1.name ? (0, _v16.grayscale)(970) : (0, _v16.slate)(30) : "none";
    }),
    _v24 = _v13.default.div(_v10 || (_v10 = (0, _v11.a)(["\n  width: 100%;\n  padding-top: 0.25rem;\n\n  > div {\n    animation: ", " 120ms ease-in-out both;\n\n    ", ";\n  }\n"], ["\n  width: 100%;\n  padding-top: 0.25rem;\n\n  > div {\n    animation: ", " 120ms ease-in-out both;\n\n    ", ";\n  }\n"])), _v20, function (_v0) {
      return (0, _v11.e)([], (0, _v11._)(Array(30)), !1).map(function (_v0, _v1) {
        return (0, _v13.css)(_v9 || (_v9 = (0, _v11.a)(["\n          &:nth-child(", ") {\n            animation-delay: ", "ms;\n          }\n        "], ["\n          &:nth-child(", ") {\n            animation-delay: ", "ms;\n          }\n        "])), _v1, _v1 * (20 + 100 / _v0.total));
      });
    }),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.format,
        _v3 = _v0.forwardRef,
        _v4 = (0, _v11.b)(_v0, ["children", "format", "forwardRef"]);
      return _v12.default.createElement(_v23, (0, _v11.c)({
        ref: _v3,
        format: void 0 === _v2 ? "secondary" : _v2
      }, _v4), _v1);
    });
  _v27.Section = function (_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.title,
      _v3 = void 0 === _v2 ? null : _v2,
      _v4 = (0, _v11.b)(_v0, ["children", "title"]);
    return _v12.default.createElement("div", (0, _v11.c)({}, _v4), _v3 && _v12.default.createElement(_v19, null, _v3), _v1);
  }, _v27.Item = function (_v0) {
    var _v1 = _v0.action,
      _v2 = _v0.active,
      _v3 = _v0.children,
      _v4 = _v0.href,
      _v5 = _v0.toggle,
      _v6 = void 0 !== _v5 && _v5,
      _v7 = _v0.icon,
      _v8 = _v0.onOpen,
      _v9 = _v0.onClose,
      _v10 = (0, _v11.b)(_v0, ["action", "active", "children", "href", "toggle", "icon", "onOpen", "onClose"]),
      _v11 = (0, _v12.useRef)(!0),
      _v12 = (0, _v11._)((0, _v12.useState)(!_v6), 2),
      _v13 = _v12[0],
      _v14 = _v12[1];
    (0, _v12.useEffect)(function () {
      _v11.current ? _v11.current = !1 : _v13 ? null == _v8 || _v8() : null == _v9 || _v9();
    }, [_v9, _v8, _v13]);
    var _v15 = "object" != typeof _v3 || _v3.props ? _v3 : _v3.flat().filter(function (_v0) {
        return "string" == typeof _v0;
      }),
      _v16 = "object" == typeof _v3 && !_v3.props && _v3.flat().filter(function (_v0) {
        return "string" != typeof _v0;
      });
    0 === _v16.length && (_v16 = !1);
    var _v17 = _v15 && _v4,
      _v18 = _v13 && _v16.length;
    return _v12.default.createElement(_v21, {
      active: _v2,
      $height: _v18
    }, _v12.default.createElement(_v22, (0, _v11.c)({
      as: _v17 ? "a" : "button",
      href: _v4,
      onClick: function () {
        return _v6 && _v14(function (_v0) {
          return !_v0;
        });
      }
    }, _v10), _v6 && _v12.default.createElement(_v18, {
      open: _v13
    }, _v12.default.createElement(_v25.ChevronDown, null), _v12.default.createElement(_v26.Focus, {
      parent: _v18,
      isKeyboardOnly: !0
    })), _v1 && _v12.default.createElement(_v17, {
      onClick: function (_v0) {
        _v1.onClick && _v1.onClick(_v0);
      }
    }, _v1.icon, _v12.default.createElement(_v26.Focus, {
      parent: _v17,
      isKeyboardOnly: !0
    })), _v7 && _v7, _v15, _v12.default.createElement(_v26.Focus, {
      parent: _v22,
      isKeyboardOnly: !0
    })), _v13 && _v16 && _v12.default.createElement(_v24, {
      total: _v16.length
    }, _v16));
  }, _v0.s(["Menu", 0, _v27], 0);
}