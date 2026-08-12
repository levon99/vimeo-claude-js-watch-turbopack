{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "4rem",
    _v5 = {
      base: "md",
      md: "lg"
    },
    _v6 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v3.Flex, {
      flexGrow: "1",
      gap: "1rem",
      maxWidth: "1860px",
      margin: "0 auto",
      padding: _v5,
      paddingTop: {
        base: "0",
        md: "0"
      },
      width: "100%",
      children: _v0
    });
  _v6.Main = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    direction: "column",
    flexGrow: "1",
    flexShrink: "1",
    gap: "1rem",
    children: _v0
  }), _v6.Panel = ({
    children: _v0
  }) => (0, _v1.jsx)(_v2.Box, {
    display: {
      base: "none",
      md: "block"
    },
    height: {
      base: `calc(100vh - ${_v4} - var(--vimeo-space-md, 1rem))`,
      md: `calc(100vh - ${_v4} - var(--vimeo-space-lg, 1.5rem))`
    },
    paddingTop: _v5,
    position: "sticky",
    top: _v4,
    children: _v0
  }), _v6.StickyTop = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    background: "background",
    flexDirection: "column",
    gap: "1rem",
    paddingTop: _v5,
    position: "sticky",
    top: _v4,
    width: "100%",
    zIndex: "30",
    children: _v0
  }), _v0.s(["Page", 0, _v6]);
}