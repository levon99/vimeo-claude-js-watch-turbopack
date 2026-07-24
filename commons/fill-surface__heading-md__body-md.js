{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.forwardRef)(({
    children: _v0,
    description: _v1,
    headingAs: _v2 = "h4",
    title: _v3,
    visible: _v4 = !0
  }, _v5) => _v4 ? (0, _v1.jsxs)(_v3.Box, {
    ref: _v5,
    borderRadius: "md",
    padding: "300",
    marginBottom: "300",
    backgroundColor: "fill-surface",
    children: [_v3 && (0, _v1.jsx)(_v4.Header, {
      variant: "heading-md",
      as: _v2,
      size: "xl",
      children: _v3
    }), _v1 && (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v5.Text, {
        marginTop: "50",
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })
    }), _v0]
  }) : null);
  _v0.s(["TeamSettingsPageCategory", 0, _v6]);
}