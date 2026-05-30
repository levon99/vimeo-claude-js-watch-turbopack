{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = (0, _v7.keyframes)(_v1 || (_v1 = (0, _v5.a)(["\n  0% {\n    transform: translateY(-0.25rem) scale(0.98);\n    opacity: 0;\n\n  }\n\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: translateY(-0.25rem) scale(0.98);\n    opacity: 0;\n\n  }\n\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n"]))),
    _v10 = _v7.default.div(_v4 || (_v4 = (0, _v5.a)(["\n  background: ", ";\n  min-width: 10rem;\n  min-height: 2rem;\n  max-width: 40rem;\n  border-radius: 0.25rem;\n  animation: ", " 150ms ease-in-out;\n\n  ", ";\n"], ["\n  background: ", ";\n  min-width: 10rem;\n  min-height: 2rem;\n  max-width: 40rem;\n  border-radius: 0.25rem;\n  animation: ", " 150ms ease-in-out;\n\n  ", ";\n"])), function (_v0) {
      return _v0.theme.content.background;
    }, _v9, function (_v0) {
      return "dark" === _v0.theme.name ? (0, _v7.css)(_v2 || (_v2 = (0, _v5.a)(["\n          border: 1px solid ", ";\n        "], ["\n          border: 1px solid ", ";\n        "])), (0, _v8.rgba)(255, 255, 255, .125)) : (0, _v7.css)(_v3 || (_v3 = (0, _v5.a)(["\n          box-shadow: 0 0 ", " 0 rgba(0, 0, 0, 0.15),\n            0 ", " ", " 0 rgba(0, 0, 0, 0.15);\n        "], ["\n          box-shadow: 0 0 ", " 0 rgba(0, 0, 0, 0.15),\n            0 ", " ", " 0 rgba(0, 0, 0, 0.15);\n        "])), (0, _v8.rem)(1), (0, _v8.rem)(4), (0, _v8.rem)(8));
    }),
    _v11 = _v0.i(0),
    _v12 = function (_v0) {
      function _v1() {
        var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
        return _v0.state = {
          hasError: !1
        }, _v0;
      }
      return (0, _v5.f)(_v1, _v0), _v1.getDerivedStateFromError = function () {
        return {
          hasError: !0
        };
      }, _v1.prototype.componentDidCatch = function (_v0, _v1) {
        console.log("ERROR with Iris PopOver component", _v0, _v1);
      }, _v1.prototype.render = function () {
        var _v0 = this.state.hasError,
          _v1 = this.props.children;
        return _v0 ? _v6.default.createElement(_v11.Header, {
          size: "3"
        }, "Something went wrong.") : _v1;
      }, _v1;
    }(_v6.Component),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.i(0);
  var _v15 = (0, _v13.withIris)(function (_v0) {
      var _v1 = _v0.active,
        _v2 = _v0.attach,
        _v3 = _v0.content,
        _v4 = _v0.children,
        _v5 = _v0.forwardRef,
        _v6 = _v0.onClose,
        _v7 = _v0.onOpen,
        _v8 = (0, _v5.b)(_v0, ["active", "attach", "content", "children", "forwardRef", "onClose", "onOpen"]),
        _v9 = (0, _v5._)((0, _v14.usePortal_DEPRECATED)(_v6.default.createElement(_v10, (0, _v5.c)({
          ref: _v5
        }, _v8), _v6.default.createElement("div", null, _v3)), {
          attach: void 0 === _v2 ? "bottom" : _v2,
          animation: _v16,
          forceActive: _v1,
          onClose: _v6,
          onOpen: _v7,
          onClick: _v4.props.onClick
        }), 2),
        _v10 = _v9[0],
        _v11 = _v9[1];
      return (0, _v6.useImperativeHandle)(null == _v4 ? void 0 : _v4.ref, function () {
        return _v11.ref.current;
      }), _v6.default.createElement(_v12, null, _v10, (0, _v6.cloneElement)(_v4, _v11));
    }),
    _v16 = {
      enter: {
        opacity: 1,
        transform: "translateY(0) scale(1)"
      },
      exit: {
        opacity: 0,
        transform: "translateY(-0.25rem) scale(0.98)"
      }
    };
  _v0.s(["PopOver", 0, _v15], 0);
}