{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v1.useMenuStyles)();
      return (0, _v6.jsx)(_v4.chakra.button, {
        ref: _v1,
        ..._v0,
        __css: {
          display: "inline-flex",
          appearance: "none",
          alignItems: "center",
          outline: 0,
          ..._v2.button
        }
      });
    }),
    _v8 = (0, _v3.forwardRef)((_v0, _v1) => {
      let {
          children: _v2,
          as: _v3,
          ..._v4
        } = _v0,
        _v5 = (0, _v2.useMenuButton)(_v4, _v1);
      return (0, _v6.jsx)(_v3 || _v7, {
        ..._v5,
        className: (0, _v5.cx)("chakra-menu__menu-button", _v0.className),
        children: (0, _v6.jsx)(_v4.chakra.span, {
          __css: {
            pointerEvents: "none",
            flex: "1 1 auto",
            minW: 0
          },
          children: _v0.children
        })
      });
    });
  _v8.displayName = "MenuButton", _v0.s(["MenuButton", 0, _v8]);
}