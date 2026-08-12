{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ({
    children: _v0
  }) => (0, _v1.jsx)(_v2.Flex, {
    flexDirection: "column",
    gap: "1rem",
    children: _v0
  });
  _v4.Body = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Box, {
    width: "100%",
    display: "grid",
    gap: "1.5rem 1rem",
    gridTemplateColumns: {
      base: "repeat(1, minmax(0, 1fr))",
      sm: "repeat(2, minmax(0, 1fr))",
      md: "repeat(3, minmax(0, 1fr))",
      lg: "repeat(auto-fill, minmax(280px, 1fr))"
    },
    children: _v0
  }), _v4.Header = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v2.Flex, {
    alignItems: "center",
    height: "68px",
    paddingX: "0.5rem",
    justifyContent: "space-between",
    ..._v1,
    children: _v0
  }), _v0.s(["ContentGrid", 0, _v4]);
}