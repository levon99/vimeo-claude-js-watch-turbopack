{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.forwardRef)(({
    icon: _v0,
    isDisabled: _v1,
    ariaLabel: _v2 = "",
    onClick: _v3,
    iconWidth: _v4 = (0, _v3.rem)(20),
    iconHeight: _v5 = (0, _v3.rem)(20),
    sx: _v6 = {},
    size: _v7 = "sm",
    variant: _v8 = "tertiary",
    ..._v9
  }, _v10) => (0, _v1.jsx)(_v4.IconButton, {
    ref: _v10,
    variant: _v8,
    size: _v7,
    sx: {
      ..._v6
    },
    icon: (0, _v1.jsx)(_v5.Flex, {
      width: _v4,
      height: _v5,
      justifyContent: "center",
      alignItems: "center",
      children: _v0
    }),
    isDisabled: _v1,
    onClick: _v3,
    "aria-label": _v2,
    ..._v9
  }));
  _v0.s(["BokehIconButton", 0, _v6]);
}