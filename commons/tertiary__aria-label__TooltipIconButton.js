{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v2.forwardRef)(({
    icon: _v0,
    isDisabled: _v1,
    ariaLabel: _v2 = "",
    onClick: _v3,
    sx: _v4 = {},
    size: _v5 = "sm",
    variant: _v6 = "tertiary",
    placement: _v7 = "top",
    label: _v8,
    ..._v9
  }, _v10) => {
    let _v11 = (0, _v1.jsx)(_v3.IconButton, {
      ref: _v10,
      "aria-label": _v2,
      variant: _v6,
      size: _v5,
      sx: _v4,
      isDisabled: _v1,
      icon: _v0,
      onClick: _v3,
      ..._v9
    });
    return _v8 ? (0, _v1.jsx)(_v4.BokehTooltip, {
      placement: _v7,
      label: _v8,
      shouldWrapChildren: !1,
      children: _v11
    }) : _v11;
  });
  _v0.s(["TooltipIconButton", 0, _v5]);
}