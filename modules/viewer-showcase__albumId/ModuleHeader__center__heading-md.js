{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["ModuleHeader", 0, ({
    onClose: _v0,
    text: _v1,
    secondaryText: _v2,
    children: _v3
  }) => (0, _v1.jsxs)(_v3.HStack, {
    align: "center",
    spacing: 75,
    p: 300,
    children: [(0, _v1.jsx)(_v2.Text, {
      variant: "heading-md",
      as: "h2",
      color: "text-primary",
      children: _v1
    }), _v2 ? (0, _v1.jsx)(_v2.Text, {
      color: "text-secondary",
      variant: "heading-md",
      as: "h2",
      children: _v2
    }) : null, (0, _v1.jsxs)(_v3.HStack, {
      ml: "auto",
      spacing: 50,
      children: [_v3, _v0 ? (0, _v1.jsx)(_v4.IconButton, {
        "aria-label": "Close",
        variant: "tertiary",
        size: "sm",
        icon: (0, _v1.jsx)(_v5.CloseX, {}),
        onClick: _v0
      }) : null]
    })]
  })]);
}