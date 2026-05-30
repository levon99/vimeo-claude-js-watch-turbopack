{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = (0, _v9.keyframes)(_v1 || (_v1 = (0, _v7.a)(["\n  0% {\n    transform: translateY(2rem) scale(0.98);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: translateY(2rem) scale(0.98);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n"]))),
    _v13 = _v9.default.div(_v2 || (_v2 = (0, _v7.a)(["\n  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);\n  border-radius: 0.25rem;\n  z-index: 4000;\n  ", ";\n  animation: ", " 300ms ease-in-out;\n"], ["\n  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);\n  border-radius: 0.25rem;\n  z-index: 4000;\n  ", ";\n  animation: ", " 300ms ease-in-out;\n"])), function (_v0) {
      var _v1 = _v0.size;
      return (0, _v9.css)(_v3 || (_v3 = (0, _v7.a)(["\n    max-width: ", ";\n  "], ["\n    max-width: ", ";\n  "])), (0, _v10.rem)(_v14[void 0 === _v1 ? "md" : _v1]));
    }, _v12),
    _v14 = {
      sm: 340,
      md: 440,
      lg: 660
    },
    _v15 = (0, _v9.default)(_v11.Button)(_v4 || (_v4 = (0, _v7.a)(["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n"], ["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n"]))),
    _v16 = _v0.i(0),
    _v17 = (0, _v8.createContext)(null),
    _v18 = function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.format,
        _v3 = _v0.onClick,
        _v4 = (0, _v7.b)(_v0, ["children", "format", "onClick"]),
        _v5 = (0, _v8.useContext)(_v17).close;
      return _v8.default.createElement(_v19, (0, _v7.c)({}, _v4, {
        format: _v2,
        onClick: function (_v0) {
          _v5 && _v5(_v0), _v3 && _v3(_v0);
        }
      }), _v1);
    },
    _v19 = (0, _v9.default)(_v11.Button)(_v5 || (_v5 = (0, _v7.a)(["\n  width: 100%;\n\n  &:first-of-type {\n    margin-right: 1rem;\n  }\n"], ["\n  width: 100%;\n\n  &:first-of-type {\n    margin-right: 1rem;\n  }\n"]))),
    _v20 = _v9.default.div(_v6 || (_v6 = (0, _v7.a)(["\n  border-top: 1px ", "\n    solid;\n  display: flex;\n  padding-top: 1.5rem;\n"], ["\n  border-top: 1px ", "\n    solid;\n  display: flex;\n  padding-top: 1.5rem;\n"])), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v10.rgba)(_v1.content.color, .2);
    }),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.i(0);
  var _v25 = (0, _v22.withIris)(function (_v0) {
    var _v1 = _v0.active,
      _v2 = _v0.children,
      _v3 = _v0.content,
      _v4 = _v0.dismissLabel,
      _v5 = _v0.feature,
      _v6 = _v0.forwardRef,
      _v7 = _v0.onClose,
      _v8 = _v0.onOpen,
      _v9 = _v0.screen,
      _v10 = void 0 === _v9 || _v9,
      _v11 = (0, _v7.b)(_v0, ["active", "children", "content", "dismissLabel", "feature", "forwardRef", "onClose", "onOpen", "screen"]),
      _v12 = (0, _v7._)((0, _v23.usePortal_DEPRECATED)(_v8.default.createElement(_v13, (0, _v7.c)({
        ref: _v6
      }, _v11), _v8.default.createElement(_v8.default.Fragment, null, _v5 && _v8.default.createElement(_v15, {
        icon: _v8.default.createElement(_v24.DismissX, null),
        size: "sm",
        variant: "minimalTransparent",
        format: "basic",
        theme: _v21.themes.dark,
        title: _v4,
        onClick: function (_v0) {
          return _v14.onClick(_v0);
        }
      }), _v8.default.createElement(_v27, null, _v3))), {
        allowPageInteraction: _v5 && !_v10,
        anchorToWindow: !0,
        animation: _v26,
        attach: _v5 ? [[97, 97], [100, 100]] : [[50, 50], [50, 50]],
        forceActive: _v1,
        onClose: _v7,
        onOpen: _v8,
        screen: _v10
      }), 2),
      _v13 = _v12[0],
      _v14 = _v12[1];
    return _v8.default.createElement(_v8.default.Fragment, null, _v13 && _v8.default.createElement(_v17.Provider, {
      value: {
        close: _v14.onClick
      }
    }, _v13), _v2 && (0, _v8.cloneElement)(_v2, _v14));
  });
  _v25.Header = function (_v0) {
    var _v1 = _v0.children,
      _v2 = (0, _v7.b)(_v0, ["children"]);
    return _v8.default.createElement(_v16.Header, (0, _v7.c)({
      size: "2"
    }, _v2), _v1);
  }, _v25.Footer = _v20, _v25.PrimaryAction = function (_v0) {
    return _v8.default.createElement(_v18, (0, _v7.c)({
      format: "primary"
    }, _v0));
  }, _v25.SecondaryAction = function (_v0) {
    return _v8.default.createElement(_v18, (0, _v7.c)({
      format: "secondary"
    }, _v0));
  };
  var _v26 = {
    enter: {
      opacity: 1,
      transform: "translateY(0)"
    },
    exit: {
      opacity: 0,
      transform: "translateY(-15%)"
    }
  };
  function _v27(_v0) {
    var _v1 = _v0.children,
      _v2 = (0, _v8.useRef)(null);
    return (0, _v8.useLayoutEffect)(function () {
      var _v0 = document.addEventListener,
        _v1 = document.removeEventListener,
        _v2 = _v2.current.querySelectorAll(_v28)[0];
      function _v3(_v0) {
        var _v1,
          _v2,
          _v3 = _v0.target;
        (null == (_v1 = _v2.current) ? void 0 : _v1.contains(_v3)) || (null == (_v2 = document.getElementById("iris-portals")) ? void 0 : _v2.contains(_v3)) || null == _v2 || _v2.focus();
      }
      return _v0("focusin", _v3), _v1("focusin", _v3, !0);
    }, [_v2, _v1]), _v8.default.createElement("div", {
      ref: _v2
    }, _v1);
  }
  var _v28 = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
  _v0.s(["Modal", 0, _v25], 0);
}