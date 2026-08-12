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
    descriptionMaxWidth: _v2,
    headerActions: _v3,
    headerActionsShouldWrap: _v4 = !1,
    headingAs: _v5 = "h4",
    title: _v6,
    visible: _v7 = !0
  }, _v8) => _v7 ? (0, _v1.jsxs)(_v3.Box, {
    ref: _v8,
    borderRadius: "md",
    padding: "300",
    marginBottom: "300",
    backgroundColor: "fill-surface",
    children: [(_v6 || _v3) && (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      justifyContent: "space-between",
      gap: "200",
      flexWrap: _v4 ? "wrap" : "nowrap",
      children: [_v6 && (0, _v1.jsx)(_v5.Header, {
        variant: "heading-md",
        as: _v5,
        size: "xl",
        children: _v6
      }), _v3]
    }), _v1 && (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v6.Text, {
        marginTop: "50",
        maxWidth: _v2,
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })
    }), _v0]
  }) : null);
  _v0.s(["TeamSettingsPageCategory", 0, _v7]);
}