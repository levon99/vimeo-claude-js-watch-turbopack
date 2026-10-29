{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["CardBorder", 0, ({
    purchaseStatus: _v0 = "",
    showBadge: _v1 = !1,
    showCardBorder: _v2 = !1,
    compact: _v3 = !1,
    ..._v4
  }) => (0, _v1.jsx)(_v2.Box, {
    background: "var(--vimeo-colors-fill-surface)",
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    borderRadius: _v3 ? "1.75rem" : {
      base: "1.5rem",
      md: "2.3rem"
    },
    border: _v1 ? {
      base: "#8a5ee8 solid 0.15rem",
      md: "#8a5ee8 solid 0.28rem"
    } : "purchased" === _v0 ? {
      border: "#8a5ee8 solid 0.15rem",
      md: "#f4f5f6 solid 0.15rem"
    } : {
      base: _v2 ? "var(--vimeo-colors-stroke) solid 0.125rem" : "var(--vimeo-colors-fill-surface) solid 0.1rem"
    },
    children: _v4.children
  })], 0);
  var _v3 = _v0.i(0);
  _v0.s(["PlanCardBadge", 0, function ({
    color: _v0 = "#000",
    text: _v1,
    compact: _v2 = !1
  }) {
    return (0, _v1.jsx)(_v2.Box, {
      position: "absolute",
      left: 0,
      top: {
        base: _v2 ? "-1.375rem" : "-1.5rem",
        md: _v2 ? "-1.375rem" : "-2.3125rem"
      },
      minHeight: {
        md: _v2 ? "1.5rem" : "2.25rem"
      },
      height: _v2 ? "3.25rem" : "4.375rem",
      width: "100%",
      paddingY: _v2 ? "0.25rem" : "0.375rem",
      paddingX: "1.5rem",
      backgroundColor: _v0,
      color: "white",
      borderTopLeftRadius: "1.25rem",
      borderTopRightRadius: "1.25rem",
      textAlign: "center",
      children: (0, _v1.jsx)(_v3.Text, {
        variant: _v2 ? "heading-2xs" : "heading-md",
        children: _v1
      })
    });
  }], 0);
}