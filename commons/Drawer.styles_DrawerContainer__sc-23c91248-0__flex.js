{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v3.default.div.withConfig({
      displayName: "Drawer.styles__DrawerContainer",
      componentId: "sc-23c91248-0"
    })`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: ${(0, _v2.rem)(14)};
  gap: ${(0, _v2.rem)(8)};
`,
    _v5 = (0, _v0.i(0).bokeh)("div", {
      baseStyle: {
        direction: "flex",
        flexDir: "column",
        flex: 1,
        minH: 0,
        py: 0,
        pos: "relative"
      }
    }),
    _v6 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v5, {
      children: _v0
    });
  var _v7 = _v0.i(0),
    _v8 = _v1,
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ({
      icon: _v0,
      boxSize: _v1 = "2xs"
    }) => _v9.default.createElement(_v0, {
      boxSize: `${_v1} !important`
    }),
    _v19 = ({
      children: _v0,
      pt: _v1
    }) => (0, _v1.jsx)(_v4, {
      style: null != _v1 ? {
        paddingTop: _v1
      } : void 0,
      children: _v0
    });
  _v19.Content = ({
    children: _v0
  }) => (0, _v1.jsx)(_v6, {
    onScroll: () => {
      window.dispatchEvent(new Event("resize"));
    },
    children: _v0
  }), _v19.Item = ({
    description: _v0,
    hasAttention: _v1,
    hasSubPanel: _v2,
    headerInlineElement: _v3,
    icon: _v4,
    layout: _v5 = "default",
    subPanelIcon: _v6 = (0, _v8.jsx)(_v17.ChevronRightSmall, {}),
    tooltipPlacement: _v7 = "right",
    title: _v8,
    tooltip: _v9,
    ..._v10
  }) => "leadingIcon" === _v5 ? (0, _v8.jsx)(_v16.Tooltip, {
    label: _v9,
    placement: _v7,
    children: (0, _v8.jsxs)(_v10.Button, {
      variant: "tertiary",
      justifyContent: "space-between",
      alignItems: "center",
      whiteSpace: "normal",
      height: "auto",
      minHeight: (0, _v15.rem)(60),
      pl: 0,
      pr: "sm",
      gap: "sm",
      borderRadius: "lg",
      ..._v10,
      children: [(0, _v8.jsxs)(_v11.Center, {
        gap: "sm",
        alignItems: "center",
        flex: "1",
        minWidth: "0",
        children: [(0, _v8.jsxs)(_v11.Center, {
          boxSize: "md",
          borderRadius: "full",
          position: "relative",
          flexShrink: 0,
          children: [_v4 && (0, _v8.jsx)(_v18, {
            icon: _v4,
            boxSize: "xs"
          }), _v1 && (0, _v8.jsx)(_v7.Box, {
            width: (0, _v15.rem)(6),
            height: (0, _v15.rem)(6),
            borderRadius: "round",
            position: "absolute",
            top: "-1px",
            right: "-1px",
            backgroundColor: "status-destructive-primary"
          })]
        }), (0, _v8.jsxs)(_v12.Flex, {
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "px",
          flex: "1",
          minWidth: "0",
          children: [(0, _v8.jsxs)(_v11.Center, {
            gap: "xs",
            alignItems: "center",
            children: [(0, _v8.jsx)(_v13.Header, {
              size: "xs",
              textAlign: "start",
              children: _v8
            }), _v3]
          }), _v0 && (0, _v8.jsx)(_v14.Paragraph, {
            size: "sm",
            textAlign: "start",
            color: "text-secondary",
            children: _v0
          })]
        })]
      }), _v2 && _v6]
    })
  }) : (0, _v8.jsx)(_v16.Tooltip, {
    label: _v9,
    placement: _v7,
    children: (0, _v8.jsxs)(_v10.Button, {
      variant: "tertiary",
      justifyContent: "space-between",
      alignItems: "center",
      whiteSpace: "normal",
      height: "auto",
      px: "sm",
      py: "md",
      gap: "xs",
      ..._v10,
      children: [(0, _v8.jsxs)(_v12.Flex, {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        children: [(0, _v8.jsxs)(_v11.Center, {
          gap: "sm",
          alignItems: "center",
          width: "100%",
          children: [(0, _v8.jsxs)(_v11.Center, {
            boxSize: "2xs",
            position: "relative",
            children: [_v4 && (0, _v8.jsx)(_v18, {
              icon: _v4
            }), _v1 && (0, _v8.jsx)(_v7.Box, {
              width: (0, _v15.rem)(6),
              height: (0, _v15.rem)(6),
              borderRadius: "round",
              position: "absolute",
              top: "-1px",
              right: "-1px",
              backgroundColor: "status-destructive-primary"
            })]
          }), (0, _v8.jsx)(_v13.Header, {
            size: "xs",
            textAlign: "start",
            flex: "1",
            children: _v8
          }), _v3]
        }), _v0 && (0, _v8.jsx)(_v14.Paragraph, {
          size: "sm",
          textAlign: "start",
          paddingLeft: "lg",
          color: "text-secondary",
          children: _v0
        })]
      }), _v2 && _v6]
    })
  }), _v19.StickyFooter = _v0 => (0, _v1.jsx)(_v7.Box, {
    position: "sticky",
    bottom: "-md",
    p: "md",
    mx: "-md",
    mb: "-md",
    bg: "surface",
    borderTop: "1px solid",
    borderColor: "stroke",
    ..._v0
  }), _v0.s(["Drawer", 0, _v19], 0);
}