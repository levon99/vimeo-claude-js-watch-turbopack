{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0 => {
      let {
          className: _v1,
          title: _v2,
          ..._v3
        } = _v0,
        _v4 = (0, _v2.useMenuOptionGroup)(_v3);
      return (0, _v4.jsx)(_v1.MenuGroup, {
        title: _v2,
        className: (0, _v3.cx)("chakra-menu__option-group", _v1),
        ..._v4
      });
    };
  _v5.displayName = "MenuOptionGroup", _v0.s(["MenuOptionGroup", 0, _v5]);
}