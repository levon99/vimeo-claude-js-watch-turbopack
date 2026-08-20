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
`;
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v5.bokeh)("div", {
      baseStyle: {
        direction: "flex",
        flexDir: "column",
        height: `calc(100% - ${(0, _v6.rem)(48)} - ${(0, _v6.rem)(8)})`,
        py: 0,
        pos: "relative"
      }
    }),
    _v8 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v7, {
      children: _v0
    });
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = _v3.default.div.withConfig({
      displayName: "DrawerHeader.styles__DrawerHeaderContainer",
      componentId: "sc-81055844-0"
    })`
  display: flex;
  align-items: center;
  height: ${(0, _v2.rem)(48)};
  width: 100%;
  padding: ${(0, _v2.rem)(8)} ${(0, _v2.rem)(16)};
  justify-content: space-between;
`,
    _v14 = _v3.default.div.withConfig({
      displayName: "DrawerHeader.styles__DrawerHeaderLeftContainer",
      componentId: "sc-81055844-1"
    })`
  display: flex;
  align-items: center;
  gap: ${(0, _v2.rem)(5)};
`,
    _v15 = (0, _v3.default)(_v12.Header).withConfig({
      displayName: "DrawerHeader.styles__DrawerHeaderTitle",
      componentId: "sc-81055844-2"
    })`
  font-size: ${(0, _v2.rem)(16)};
  font-weight: 700;
  margin-bottom: 0;
`;
  _v3.default.div.withConfig({
    displayName: "DrawerHeader.styles__DrawerHeaderIcon",
    componentId: "sc-81055844-3"
  })`
  width: ${(0, _v2.rem)(32)};
  height: ${(0, _v2.rem)(32)};
  border-radius: ${(0, _v2.rem)(6)};
  padding: ${(0, _v2.rem)(6)};

  svg {
    width: ${(0, _v2.rem)(20)};
    height: ${(0, _v2.rem)(20)};
  }
`;
  let _v16 = (0, _v3.default)(_v11.Button).withConfig({
    displayName: "DrawerHeader.styles__HeaderButton",
    componentId: "sc-81055844-4"
  })`
  color: ${({
    theme: _v0
  }) => _v0.content.color};
`;
  var _v17 = _v0.i(0),
    _v18 = _v1,
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = _v3.default.div.withConfig({
      displayName: "DrawerTabs.styles__DrawerTabsContainer",
      componentId: "sc-25e712be-0"
    })`
  display: flex;
  flex-direction: column;
  gap: ${(0, _v2.rem)(8)};
`,
    _v25 = _v3.default.button.withConfig({
      displayName: "DrawerTabs.styles__DrawerTabContainer",
      componentId: "sc-25e712be-1"
    })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(0, _v2.rem)(12)};
  gap: ${(0, _v2.rem)(8)};
  height: 100%;
  width: 100%;
  margin: 0;
  background: transparent;
  outline: none;
  border: none;
  border-radius: ${(0, _v2.rem)(3)};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    ${({
      disabled: _v0,
      theme: _v1
    }) => _v3.css`
      background: ${_v0 ? "inherit" : _v1.formats.secondary};
    `}
`,
    _v26 = _v3.default.div.withConfig({
      displayName: "DrawerTabs.styles__DrawerTabContent",
      componentId: "sc-25e712be-2"
    })`
  display: flex;
  flex-direction: column;
  gap: ${(0, _v2.rem)(6)};
`,
    _v27 = _v3.default.div.withConfig({
      displayName: "DrawerTabs.styles__DrawerTabHeader",
      componentId: "sc-25e712be-3"
    })`
  display: flex;
  align-items: center;
  gap: ${(0, _v2.rem)(2)};
`,
    _v28 = _v3.default.div.withConfig({
      displayName: "DrawerTabs.styles__DrawerTabIcon",
      componentId: "sc-25e712be-4"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0, _v2.rem)(24)};
  height: ${(0, _v2.rem)(24)};
  border-radius: ${(0, _v2.rem)(4)};
  padding: ${(0, _v2.rem)(4)};

  svg {
    width: ${(0, _v2.rem)(16)};
    height: ${(0, _v2.rem)(16)};

    path,
    rect {
      fill: ${({
      theme: _v0
    }) => (0, _v2.rgba)(_v0.additions.content.color, .667)};
    }
  }
`,
    _v29 = (0, _v3.default)(_v11.Button).withConfig({
      displayName: "DrawerTabs.styles__DrawerButton",
      componentId: "sc-25e712be-5"
    })`
  svg {
    width: unset;
    height: unset;
  }
`,
    _v30 = (0, _v3.default)(_v12.Header).withConfig({
      displayName: "DrawerTabs.styles__DrawerTabTitle",
      componentId: "sc-25e712be-6"
    })`
  font-size: ${(0, _v2.rem)(14)};
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1;
`,
    _v31 = (0, _v3.default)(_v22.Paragraph).withConfig({
      displayName: "DrawerTabs.styles__DrawerTabDescription",
      componentId: "sc-25e712be-7"
    })`
  max-width: ${(0, _v2.rem)(230)};
  width: 100%;
  text-align: left;
  color: ${_v21.core.color.text.secondary};
  margin-bottom: 0;
`,
    _v32 = (0, _v3.default)(_v23.Skeleton).withConfig({
      displayName: "DrawerTabs.styles__DrawerTabSkeleton",
      componentId: "sc-25e712be-8"
    })`
  height: ${(0, _v2.rem)(64)};
  width: 100%;
  border-radius: ${(0, _v2.rem)(3)};
`;
  var _v33 = _v1,
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = ({
      icon: _v0,
      boxSize: _v1 = "2xs"
    }) => _v34.default.createElement(_v0, {
      boxSize: `${_v1} !important`
    }),
    _v43 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v4, {
      children: _v0
    });
  _v43.Header = ({
    title: _v0,
    action: _v1,
    settingsComponent: _v2,
    onBack: _v3
  }) => (0, _v1.jsxs)(_v13, {
    children: [(0, _v1.jsxs)(_v14, {
      children: [_v3 && (0, _v1.jsx)(_v16, {
        "aria-label": (0, _v9.translate)({
          singular: "Back",
          dictionary: {
            es: {
              singular: "Atrás"
            },
            "de-DE": {
              singular: "Zurück"
            },
            "fr-FR": {
              singular: "Retour"
            },
            "ja-JP": {
              singular: "戻る"
            },
            "ko-KR": {
              singular: "뒤로"
            },
            "pt-BR": {
              singular: "Voltar"
            },
            "zh-CN": {
              singular: "返回"
            }
          }
        }),
        format: "secondary",
        icon: (0, _v1.jsx)(_v10.ChevronLeft, {}),
        onClick: _v3,
        size: "sm",
        variant: "minimal",
        "data-testid": "drawer-back-button"
      }), (0, _v1.jsx)(_v15, {
        size: "5",
        "data-testid": "drawer-title",
        children: _v0
      })]
    }), _v2, _v1 && (0, _v1.jsx)(_v16, {
      format: "secondary",
      icon: _v1.icon,
      onClick: _v1.onClick,
      size: "sm",
      variant: "minimal",
      "data-testid": "drawer-action-button"
    })]
  }), _v43.Content = ({
    children: _v0
  }) => (0, _v1.jsx)(_v8, {
    onScroll: () => {
      window.dispatchEvent(new Event("resize"));
    },
    children: _v0
  }), _v43.Tabs = ({
    children: _v0
  }) => (0, _v1.jsx)(_v24, {
    children: _v0
  }), _v43.Tab = ({
    icon: _v0,
    title: _v1,
    description: _v2,
    headerInlineElement: _v3,
    actionIcon: _v4 = (0, _v18.jsx)(_v20.ChevronRight, {
      width: 24,
      height: 24
    }),
    loading: _v5,
    disabled: _v6,
    tooltip: _v7,
    onClick: _v8,
    ..._v9
  }) => {
    let _v10 = (0, _v18.jsxs)(_v25, {
      onClick: _v8,
      disabled: _v6,
      ..._v9,
      children: [(0, _v18.jsxs)(_v26, {
        children: [(0, _v18.jsxs)(_v27, {
          children: [_v0 && (0, _v18.jsx)(_v28, {
            children: _v0
          }), (0, _v18.jsx)(_v30, {
            size: "7",
            children: _v1
          }), _v3]
        }), _v2 && (0, _v18.jsx)(_v31, {
          size: "2",
          children: _v2
        })]
      }), _v4 && (0, _v18.jsx)(_v29, {
        variant: "hyperminimal",
        format: "basic",
        icon: _v4
      })]
    });
    return _v7 ? (0, _v18.jsx)(_v19.Tip, {
      content: _v7,
      attach: "right",
      children: (0, _v18.jsx)("div", {
        children: _v5 ? (0, _v18.jsx)(_v32, {}) : _v10
      })
    }) : (0, _v18.jsx)(_v18.Fragment, {
      children: _v5 ? (0, _v18.jsx)(_v32, {}) : _v10
    });
  }, _v43.Item = ({
    description: _v0,
    hasAttention: _v1,
    hasSubPanel: _v2,
    headerInlineElement: _v3,
    icon: _v4,
    layout: _v5 = "default",
    subPanelIcon: _v6 = (0, _v33.jsx)(_v41.ChevronRightSmall, {}),
    tooltipPlacement: _v7 = "right",
    title: _v8,
    tooltip: _v9,
    ..._v10
  }) => "leadingIcon" === _v5 ? (0, _v33.jsx)(_v40.Tooltip, {
    label: _v9,
    placement: _v7,
    children: (0, _v33.jsxs)(_v35.Button, {
      variant: "tertiary",
      justifyContent: "space-between",
      alignItems: "center",
      whiteSpace: "normal",
      height: "auto",
      minHeight: (0, _v6.rem)(60),
      pl: 0,
      pr: "sm",
      gap: "sm",
      borderRadius: "lg",
      ..._v10,
      children: [(0, _v33.jsxs)(_v36.Center, {
        gap: "sm",
        alignItems: "center",
        flex: "1",
        minWidth: "0",
        children: [(0, _v33.jsxs)(_v36.Center, {
          boxSize: "md",
          borderRadius: "full",
          position: "relative",
          flexShrink: 0,
          children: [_v4 && (0, _v33.jsx)(_v42, {
            icon: _v4,
            boxSize: "xs"
          }), _v1 && (0, _v33.jsx)(_v17.Box, {
            width: (0, _v6.rem)(6),
            height: (0, _v6.rem)(6),
            borderRadius: "round",
            position: "absolute",
            top: "-1px",
            right: "-1px",
            backgroundColor: "status-destructive-primary"
          })]
        }), (0, _v33.jsxs)(_v37.Flex, {
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "px",
          flex: "1",
          minWidth: "0",
          children: [(0, _v33.jsxs)(_v36.Center, {
            gap: "xs",
            alignItems: "center",
            children: [(0, _v33.jsx)(_v38.Header, {
              size: "xs",
              textAlign: "start",
              children: _v8
            }), _v3]
          }), _v0 && (0, _v33.jsx)(_v39.Paragraph, {
            size: "sm",
            textAlign: "start",
            color: "text-secondary",
            children: _v0
          })]
        })]
      }), _v2 && _v6]
    })
  }) : (0, _v33.jsx)(_v40.Tooltip, {
    label: _v9,
    placement: _v7,
    children: (0, _v33.jsxs)(_v35.Button, {
      variant: "tertiary",
      justifyContent: "space-between",
      alignItems: "center",
      whiteSpace: "normal",
      height: "auto",
      px: "sm",
      py: "md",
      gap: "xs",
      ..._v10,
      children: [(0, _v33.jsxs)(_v37.Flex, {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        children: [(0, _v33.jsxs)(_v36.Center, {
          gap: "sm",
          alignItems: "center",
          width: "100%",
          children: [(0, _v33.jsxs)(_v36.Center, {
            boxSize: "2xs",
            position: "relative",
            children: [_v4 && (0, _v33.jsx)(_v42, {
              icon: _v4
            }), _v1 && (0, _v33.jsx)(_v17.Box, {
              width: (0, _v6.rem)(6),
              height: (0, _v6.rem)(6),
              borderRadius: "round",
              position: "absolute",
              top: "-1px",
              right: "-1px",
              backgroundColor: "status-destructive-primary"
            })]
          }), (0, _v33.jsx)(_v38.Header, {
            size: "xs",
            textAlign: "start",
            flex: "1",
            children: _v8
          }), _v3]
        }), _v0 && (0, _v33.jsx)(_v39.Paragraph, {
          size: "sm",
          textAlign: "start",
          paddingLeft: "lg",
          color: "text-secondary",
          children: _v0
        })]
      }), _v2 && _v6]
    })
  }), _v43.StickyFooter = _v0 => (0, _v1.jsx)(_v17.Box, {
    position: "sticky",
    bottom: "-md",
    p: "md",
    mx: "-md",
    mb: "-md",
    bg: "surface",
    borderTop: "1px solid",
    borderColor: "stroke",
    ..._v0
  }), _v0.s(["Drawer", 0, _v43], 0);
}