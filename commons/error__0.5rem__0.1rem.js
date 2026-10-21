{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ({
    errorMessage: _v0
  }) => (0, _v1.jsx)(_v7.Alert, {
    status: "error",
    borderRadius: "0.5rem",
    margin: "0",
    children: (0, _v1.jsx)(_v8.AlertDescription, {
      marginTop: "0.1rem",
      children: _v0
    })
  });
  _v0.s(["Widget", 0, ({
    children: _v0,
    isExternal: _v1 = !1,
    isMobile: _v2 = !1,
    header: _v3,
    width: _v4 = 1,
    maxHeight: _v5,
    errorMessage: _v6,
    maxWidth: _v7 = "87.5rem",
    onHeaderClick: _v8
  }) => (0, _v1.jsxs)(_v3.Box, {
    backgroundColor: "fill-surface",
    borderRadius: 16,
    minHeight: {
      sm: "18.25rem",
      md: "21.875rem"
    },
    maxWidth: _v7,
    maxHeight: _v2 && _v5 ? _v5 : "inherit",
    width: _v4,
    position: "relative",
    padding: "1.5rem",
    gap: _v2 ? "0.031rem" : "1.5rem",
    display: "flex",
    flexDirection: "column",
    children: [void 0 !== _v6 && "" !== _v6 && (0, _v1.jsx)(_v9, {
      errorMessage: _v6
    }), (0, _v1.jsx)(_v3.Box, {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      children: (0, _v1.jsxs)(_v4.Flex, {
        alignItems: "center",
        cursor: "pointer",
        _hover: {
          color: "text-secondary",
          transition: "color 0.1s ease-in-out"
        },
        role: "group",
        onClick: () => {
          _v8?.();
        },
        children: [_v1 ? (0, _v1.jsx)(_v5.Text, {
          as: "a",
          href: _v3.to,
          variant: "heading-md",
          marginRight: "0.125rem",
          _groupHover: {
            marginRight: "0.25rem",
            transition: "margin 0.1s ease-in-out"
          },
          children: _v3.title
        }) : (0, _v1.jsx)(_v5.Text, {
          as: _v2.Link,
          to: _v3.to,
          variant: "heading-md",
          marginRight: "0.125rem",
          _groupHover: {
            marginRight: "0.25rem",
            transition: "margin 0.1s ease-in-out"
          },
          children: _v3.title
        }), (0, _v1.jsx)(_v6.ChevronRightSmall, {
          width: "1.5rem",
          height: "1.5rem"
        })]
      })
    }), _v0]
  })], 0);
}