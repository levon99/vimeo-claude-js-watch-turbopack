{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0 => {
      let {
          className: _v1,
          ..._v2
        } = _v0,
        _v3 = (0, _v1.useMenuStyles)();
      return (0, _v4.jsx)(_v2.chakra.hr, {
        "aria-orientation": "horizontal",
        className: (0, _v3.cx)("chakra-menu__divider", _v1),
        ..._v2,
        __css: _v3.divider
      });
    };
  _v5.displayName = "MenuDivider", _v0.s(["MenuDivider", 0, _v5]);
}