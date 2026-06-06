{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v1.useMenuStyles)();
      return (0, _v4.jsx)(_v2.chakra.span, {
        ref: _v1,
        ..._v0,
        __css: _v2.command,
        className: "chakra-menu__command"
      });
    });
  _v5.displayName = "MenuCommand", _v0.s(["MenuCommand", 0, _v5], 62);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = (0, _v3.forwardRef)((_v0, _v1) => {
      let {
          icon: _v2,
          iconSpacing: _v3 = "0.75rem",
          command: _v4,
          commandSpacing: _v5 = "0.75rem",
          children: _v6,
          ..._v7
        } = _v0,
        _v8 = (0, _v8.useMenuItem)(_v7, _v1),
        _v9 = _v2 || _v4 ? (0, _v4.jsx)("span", {
          style: {
            pointerEvents: "none",
            flex: 1
          },
          children: _v6
        }) : _v6;
      return (0, _v4.jsxs)(_v6.StyledMenuItem, {
        ..._v8,
        className: (0, _v9.cx)("chakra-menu__menuitem", _v8.className),
        children: [_v2 && (0, _v4.jsx)(_v7.MenuIcon, {
          fontSize: "0.8em",
          marginEnd: _v3,
          children: _v2
        }), _v9, _v4 && (0, _v4.jsx)(_v5, {
          marginStart: _v5,
          children: _v4
        })]
      });
    });
  _v10.displayName = "MenuItem", _v0.s(["MenuItem", 0, _v10], 0);
}