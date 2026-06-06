{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)((_v0, _v1) => {
      let {
          title: _v2,
          children: _v3,
          className: _v4,
          ..._v5
        } = _v0,
        _v6 = (0, _v4.cx)("chakra-menu__group__title", _v4),
        _v7 = (0, _v1.useMenuStyles)();
      return (0, _v5.jsxs)("div", {
        ref: _v1,
        className: "chakra-menu__group",
        role: "group",
        children: [_v2 && (0, _v5.jsx)(_v2.chakra.p, {
          className: _v6,
          ..._v5,
          __css: _v7.groupTitle,
          children: _v2
        }), _v3]
      });
    });
  _v6.displayName = "MenuGroup", _v0.s(["MenuGroup", 0, _v6]);
}