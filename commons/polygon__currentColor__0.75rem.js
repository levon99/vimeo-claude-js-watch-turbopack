{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0 => (0, _v6.jsx)("svg", {
      viewBox: "0 0 14 14",
      width: "1em",
      height: "1em",
      ..._v0,
      children: (0, _v6.jsx)("polygon", {
        fill: "currentColor",
        points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
      })
    }),
    _v8 = (0, _v4.forwardRef)((_v0, _v1) => {
      let {
          icon: _v2,
          iconSpacing: _v3 = "0.75rem",
          ..._v4
        } = _v0,
        _v5 = (0, _v3.useMenuOption)(_v4, _v1);
      return (0, _v6.jsxs)(_v1.StyledMenuItem, {
        ..._v5,
        className: (0, _v5.cx)("chakra-menu__menuitem-option", _v4.className),
        children: [null !== _v2 && (0, _v6.jsx)(_v2.MenuIcon, {
          fontSize: "0.8em",
          marginEnd: _v3,
          opacity: +!!_v0.isChecked,
          children: _v2 || (0, _v6.jsx)(_v7, {})
        }), (0, _v6.jsx)("span", {
          style: {
            flex: 1
          },
          children: _v5.children
        })]
      });
    });
  _v8.id = "MenuItemOption", _v8.displayName = "MenuItemOption", _v0.s(["MenuItemOption", 0, _v8]);
}