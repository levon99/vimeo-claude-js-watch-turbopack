{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v2.Flex, {
    flex: "1 0",
    direction: "column",
    justify: "start",
    position: "relative",
    align: "center",
    py: "md",
    w: "100%",
    px: {
      base: "3",
      md: "md"
    },
    overflow: "hidden",
    ..._v1,
    children: _v0
  });
  _v0.s(["Wrapper", 0, _v3], 0);
  var _v4 = _v0.i(0);
  let _v5 = () => (0, _v1.jsx)(_v2.Flex, {
    height: "100%",
    justify: "center",
    align: "center",
    children: (0, _v1.jsx)(_v4.Spinner, {
      size: "sm"
    })
  });
  _v0.s(["LoadingContent", 0, _v5], 0), _v0.s(["MainContentLoading", 0, () => (0, _v1.jsx)(_v3, {
    children: (0, _v1.jsx)(_v5, {})
  })], 0);
}