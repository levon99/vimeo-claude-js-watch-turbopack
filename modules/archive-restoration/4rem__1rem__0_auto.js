{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "4rem",
    _v6 = {
      base: "md",
      md: "lg"
    },
    _v7 = (0, _v4.rem)(0),
    _v8 = {
      contentMaxWidth: _v7,
      contentInlineStart: (0, _v4.rem)(24)
    },
    _v9 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v3.Flex, {
      flexGrow: "1",
      gap: "1rem",
      maxWidth: _v7,
      margin: "0 auto",
      padding: _v6,
      paddingTop: {
        base: "0",
        md: "0"
      },
      width: "100%",
      children: _v0
    });
  _v9.Main = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    direction: "column",
    flexGrow: "1",
    flexShrink: "1",
    gap: "1rem",
    children: _v0
  }), _v9.Panel = ({
    children: _v0
  }) => (0, _v1.jsx)(_v2.Box, {
    display: {
      base: "none",
      md: "block"
    },
    height: {
      base: `calc(100vh - ${_v5} - var(--vimeo-space-md, 1rem))`,
      md: `calc(100vh - ${_v5} - var(--vimeo-space-lg, 1.5rem))`
    },
    paddingTop: _v6,
    position: "sticky",
    top: _v5,
    children: _v0
  }), _v9.StickyTop = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    background: "background",
    flexDirection: "column",
    gap: "1rem",
    paddingTop: _v6,
    position: "sticky",
    top: _v5,
    width: "100%",
    zIndex: "30",
    children: _v0
  }), _v0.s(["Page", 0, _v9, "VIDEO_LIBRARY_PAGE_CONTENT_MAX_WIDTH", 0, _v7, "VIDEO_LIBRARY_PAGE_SEARCH_CONTENT_ALIGNMENT", 0, _v8]);
}