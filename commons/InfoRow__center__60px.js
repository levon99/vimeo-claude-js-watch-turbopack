{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["InfoRow", 0, ({
    icon: _v0,
    title: _v1,
    description: _v2
  }) => (0, _v1.jsxs)(_v3.Flex, {
    align: "center",
    gap: "3",
    w: "100%",
    minH: "60px",
    pl: "none",
    pr: "sm",
    children: [(0, _v1.jsx)(_v3.Flex, {
      align: "center",
      flexShrink: 0,
      p: "2",
      borderRadius: "sm",
      bgColor: "button-tertiary-hover",
      children: (0, _v1.jsx)(_v2.Box, {
        display: "inline-flex",
        fontSize: "1.5rem",
        children: _v0
      })
    }), (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      justify: "center",
      gap: "px",
      flex: "1 0 0",
      minW: 0,
      children: [(0, _v1.jsx)(_v4.Header, {
        size: "xs",
        color: "text-primary",
        children: _v1
      }), (0, _v1.jsx)(_v5.Paragraph, {
        size: "sm",
        color: "text-secondary",
        children: _v2
      })]
    })]
  })]);
}