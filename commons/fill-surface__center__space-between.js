{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.forwardRef)(({
    children: _v0,
    description: _v1,
    headerActions: _v2,
    headingAs: _v3 = "h4",
    title: _v4,
    visible: _v5 = !0
  }, _v6) => _v5 ? (0, _v1.jsxs)(_v3.Box, {
    ref: _v6,
    borderRadius: "md",
    padding: "300",
    marginBottom: "300",
    backgroundColor: "fill-surface",
    children: [(_v4 || _v2) && (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      justifyContent: "space-between",
      gap: "200",
      children: [_v4 && (0, _v1.jsx)(_v5.Header, {
        variant: "heading-md",
        as: _v3,
        size: "xl",
        children: _v4
      }), _v2]
    }), _v1 && (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v6.Text, {
        marginTop: "50",
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })
    }), _v0]
  }) : null);
  _v0.s(["TeamSettingsPageCategory", 0, _v7]);
}