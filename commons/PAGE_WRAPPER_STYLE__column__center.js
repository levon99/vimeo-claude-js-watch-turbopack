{
  "use strict";

  _v0.s(["PAGE_WRAPPER_STYLE", 0, {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "surface"
  }], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = (0, _v5.rem)(80),
    _v15 = (0, _v5.rem)(64),
    _v16 = (0, _v5.rem)(420);
  function _v17(_v0 = !1, _v1, _v2 = !1, _v3 = !1) {
    return _v0 ? "100%" : _v1 ? _v2 ? _v3 ? "75vh" : "75vw" : (0, _v5.rem)(_v1) : _v2 ? _v3 ? "75vh" : "75vw" : _v16;
  }
  function _v18(_v0 = !1, _v1, _v2 = !1, _v3 = !1, _v4 = !1) {
    return _v0 ? "100%" : `calc(${_v17(_v0, _v1, _v2, _v3)} - ${_v4 ? _v15 : _v14})`;
  }
  function _v19({
    isActive: _v0,
    isMinified: _v1,
    isFullscreen: _v2,
    maxSize: _v3,
    isOrientationChanged: _v4,
    isExtended: _v5,
    isPortrait: _v6
  }, _v7) {
    return {
      width: "100%",
      flexDirection: "column",
      justifyContent: _v7,
      alignItems: "center",
      flexGrow: _v2 ? 1 : "unset",
      height: _v0 ? _v17(_v2, _v3, _v5, _v6) : _v1 ? _v15 : _v14,
      transition: _v2 || _v4 && _v0 ? "none" : "height 200ms ease"
    };
  }
  function _v20({
    isActive: _v0,
    isMinified: _v1,
    isFullscreen: _v2,
    maxSize: _v3,
    isOrientationChanged: _v4,
    isExtended: _v5,
    isPortrait: _v6
  }, _v7) {
    return {
      justifyContent: _v2 ? "center" : _v7,
      width: _v0 ? _v17(_v2, _v3, _v5, _v6) : _v1 ? _v15 : _v14,
      transition: _v2 || _v4 ? "none" : "width 200ms ease"
    };
  }
  function _v21(_v0, _v1) {
    let _v2 = "";
    switch (_v0) {
      case _v11.ESidebarAttach.TOP:
        _v2 = "bottom";
        break;
      case _v11.ESidebarAttach.BOTTOM:
        _v2 = "top";
        break;
      case _v11.ESidebarAttach.RIGHT:
        _v2 = _v1 ? "top" : "left";
        break;
      case _v11.ESidebarAttach.LEFT:
        _v2 = _v1 ? "top" : "right";
    }
    return {
      [`border-${_v2}`]: "1px solid",
      borderColor: "stroke"
    };
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  function _v26({
    id: _v0,
    className: _v1,
    children: _v2 = null,
    icon: _v3,
    label: _v4,
    isActive: _v5,
    isMinified: _v6,
    onClick: _v7
  }) {
    let _v8 = (0, _v24.useColorModeValue)("slate.50", "grayscale.700"),
      _v9 = (0, _v24.useColorModeValue)("slate.100", "grayscale.500"),
      _v10 = (0, _v1.jsxs)(_v6.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        shrink: 0,
        gap: (0, _v5.rem)(2),
        width: _v6 ? (0, _v5.rem)(48) : (0, _v5.rem)(64),
        minWidth: _v6 ? (0, _v5.rem)(48) : (0, _v5.rem)(64),
        minHeight: _v6 ? (0, _v5.rem)(48) : (0, _v5.rem)(64),
        padding: (0, _v5.rem)(4),
        backgroundColor: _v5 ? _v8 : "transparent",
        borderRadius: (0, _v5.rem)(12),
        textAlign: "center",
        fontWeight: 400,
        fontSize: (0, _v5.rem)(10),
        lineHeight: (0, _v5.rem)(12),
        whiteSpace: _v6 ? "nowrap" : "normal",
        overflowWrap: "break-word",
        _hover: {
          backgroundColor: _v9
        },
        sx: {
          "& svg": {
            width: (0, _v5.rem)(20),
            height: (0, _v5.rem)(20)
          }
        },
        onClick: _v7,
        children: [_v3, _v6 ? null : (0, _v1.jsx)(_v23.Box, {
          display: "-webkit-box",
          overflow: "hidden",
          overflowWrap: "break-word",
          sx: {
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical"
          },
          children: _v2
        })]
      });
    return _v6 ? (0, _v1.jsx)(_v25.BokehTooltip, {
      placement: "right",
      label: _v4,
      shouldWrapChildren: !1,
      children: _v10
    }) : _v10;
  }
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = (0, _v4.memo)(function ({
    id: _v0 = (0, _v12.createDomName)("sidebar"),
    className: _v1 = (0, _v12.createDomName)("sidebar"),
    attach: _v2,
    state: _v3,
    initialStateValue: _v4 = null,
    isFullscreen: _v5 = !1,
    isFullSizeItemList: _v6 = !1,
    isPortrait: _v7 = !1,
    isResponsive: _v8 = !1,
    isWithRouting: _v9 = !1,
    isWithHeader: _v10 = !0,
    isInactiveDisabled: _v11 = !1,
    isWithBorder: _v12 = !1,
    maxSize: _v13,
    responsiveBreakpoint: _v14 = 0,
    isLoading: _v15 = !1,
    items: _v16,
    contentFooter: _v17,
    contentNotice: _v18,
    zIndex: _v19,
    backgroundColor: _v20,
    onOpen: _v21,
    onClose: _v22,
    onToggleExtend: _v23,
    onActiveItemChangedCallback: _v24 = _v31.CallablePlaceholder
  }) {
    let _v25,
      _v26,
      _v27 = (0, _v2.useScope)(),
      [_v28, _v29] = (_v25 = (0, _v4.useState)(_v4), _v3 || _v25),
      [_v30, _v31] = (0, _v4.useState)(_v10),
      [_v32, _v33] = (0, _v4.useState)(!1),
      [_v34, _v35] = (0, _v4.useState)(!!_v8 && window.innerHeight < _v14);
    (0, _v4.useEffect)(() => {
      _v29(_v4);
    }, [_v4, _v29]);
    let _v36 = (0, _v4.useRef)(null),
      {
        direction: _v37,
        offset: _v38
      } = (0, _v28.useSwipe)({
        ref: _v36,
        dependencies: [_v28]
      }),
      _v39 = (0, _v4.useMemo)(() => !!_v28, [_v28]),
      _v40 = (0, _v22.useSidebarPropConfigValue)(_v2),
      _v41 = (0, _v22.useSidebarPropConfigValue)(_v5),
      _v42 = (0, _v22.useSidebarPropConfigValue)(_v13),
      {
        swipeSameDirection: _v43,
        swipeOppositeDirection: _v44
      } = (0, _v22.useSidebarSwipeDirection)(_v40, _v7),
      _v45 = (0, _v4.useCallback)(_v0 => {
        _v24(_v0), _v29(_v0), _v31(_v10);
        let _v1 = _v16.find(_v0 => _v0.id === _v0);
        _v9 && (window.location.hash = _v1?.hash ? _v1.hash : window.location.hash = "none");
      }, [_v16, _v9, _v10, _v29, _v24]),
      _v46 = (0, _v4.useCallback)(_v0 => () => {
        if (_v31(_v10), _v28 === _v0) {
          if (_v11) return;else _v22?.(_v28), _v23?.(!1), _v33(!1), _v45(null);
        } else _v21?.(_v0), _v45(_v0);
      }, [_v10, _v28, _v11, _v22, _v23, _v45, _v21]),
      _v47 = (0, _v4.useCallback)(() => {
        _v33(_v0 => {
          let _v1 = !_v0;
          return _v23?.(_v1), _v1;
        });
      }, [_v23]),
      _v48 = (0, _v4.useMemo)(() => ({
        isHeaderEnabled: _v30,
        setIsHeaderEnabled: _v31
      }), [_v30]),
      _v49 = (0, _v4.useMemo)(() => _v28 ? _v16.find(({
        id: _v0
      }) => _v0 === _v28) : null, [_v28, _v16]),
      _v50 = (0, _v4.useMemo)(() => {
        if (!_v49) return null;
        {
          let {
            id: _v0,
            header: _v1,
            headerBackground: _v2,
            headerMenu: _v3,
            isClosable: _v4,
            Content: _v5
          } = _v49;
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v18 || null, _v30 ? (0, _v1.jsxs)(_v6.Flex, {
              id: (0, _v12.createDomName)(_v0, "content-header", _v0),
              className: (0, _v12.createDomName)(_v1, "content-header", _v0),
              justifyContent: "space-between",
              alignItems: "center",
              padding: (0, _v5.rem)(16),
              background: _v2,
              children: [(0, _v1.jsx)(_v7.Text, {
                id: (0, _v12.createDomName)(_v0, "header"),
                className: (0, _v12.createDomName)(_v1, "header"),
                variant: "heading-sm",
                color: "text-primary",
                children: _v1
              }), (0, _v1.jsxs)(_v6.Flex, {
                id: (0, _v12.createDomName)(_v0, "header-menu"),
                className: (0, _v12.createDomName)(_v1, "header-menu"),
                justifyContent: "flex-end",
                alignItems: "center",
                gap: (0, _v5.rem)(4),
                children: [_v3, _v4 && !_v11 ? (0, _v1.jsx)(_v9.CloseXSmall, {
                  id: (0, _v12.createDomName)(_v0, "close-sidebar-button"),
                  className: (0, _v12.createDomName)(_v1, "close-sidebar-button"),
                  cursor: "pointer",
                  tabIndex: 0,
                  "aria-label": "Close panel",
                  onClick: _v46(_v0)
                }) : null]
              })]
            }) : null, (0, _v1.jsx)(_v32.LiveErrorBoundary, {
              additionalInfo: _v0,
              component: "ResponsiveSidebar",
              children: (0, _v1.jsx)(_v5, {
                id: (0, _v12.createDomName)(_v0, "item-content", _v0),
                className: (0, _v12.createDomName)(_v1, "item-content")
              })
            }, _v0)]
          });
        }
      }, [_v49, _v1, _v18, _v0, _v30]),
      _v51 = _v2 === _v11.ESidebarAttach.TOP || _v2 === _v11.ESidebarAttach.BOTTOM,
      _v52 = (0, _v29.useScrollbarStyles)(),
      _v53 = (0, _v4.useMemo)(() => Object.keys(_v16).length ? (0, _v1.jsx)(_v6.Flex, {
        id: (0, _v12.createDomName)(_v0, "panel"),
        className: (0, _v12.createDomName)(_v1, "panel"),
        position: "relative",
        shrink: 0,
        justifyContent: "space-between",
        boxShadow: "none",
        zIndex: 101,
        color: "text-primary",
        background: _v20 || "background",
        children: (0, _v1.jsxs)(_v6.Flex, {
          id: (0, _v12.createDomName)(_v0, "panel-scroller"),
          className: (0, _v12.createDomName)(_v1, "panel-scroller"),
          justifyContent: "flex-start",
          gap: (0, _v5.rem)(4),
          padding: (0, _v5.rem)(8),
          overflow: "hidden",
          grow: _v6 ? 1 : void 0,
          sx: {
            ..._v52,
            "&::-webkit-scrollbar": {
              width: (0, _v5.rem)(12)
            },
            "&::-webkit-scrollbar-thumb": {
              ..._v52["&::-webkit-scrollbar-thumb"],
              borderRadius: (0, _v5.rem)(12)
            }
          },
          children: [_v16.map(({
            id: _v0,
            icon: _v1,
            label: _v2
          }, _v3) => _v0 ? (0, _v1.jsx)(_v26, {
            id: (0, _v12.createDomName)(_v0, "panel-button", _v0),
            className: (0, _v12.createDomName)(_v0, "panel-button"),
            icon: _v1,
            label: _v2,
            attach: _v40,
            isMinified: _v34,
            isActive: _v0 === _v28,
            isMobile: _v27.browserConfig.BROWSER?.isMobile,
            onClick: _v46(_v0),
            children: _v2
          }, _v0) : (0, _v1.jsx)(_v6.Flex, {
            className: (0, _v12.createDomName)(_v0, "panel-break"),
            transition: "120ms ease-in-out",
            height: _v51 ? "75%" : void 0,
            width: _v51 ? void 0 : "75%",
            margin: _v51 ? "auto 0" : "0 auto",
            borderLeft: _v51 ? "1px solid" : void 0,
            borderTop: _v51 ? void 0 : "1px solid",
            borderColor: "stroke"
          }, _v3)), (0, _v1.jsx)(_v6.Flex, {
            grow: 1
          }), _v17]
        })
      }) : null, [_v16, _v0, _v1, _v6, _v52, _v17, _v40, _v34, _v28, _v46, _v51]),
      _v54 = (0, _v4.useMemo)(() => _v40 === _v11.ESidebarAttach.TOP || _v40 === _v11.ESidebarAttach.LEFT && !_v7, [_v40, _v7]),
      _v55 = (0, _v4.useMemo)(() => _v40 === _v11.ESidebarAttach.RIGHT || _v40 === _v11.ESidebarAttach.BOTTOM || _v40 === _v11.ESidebarAttach.LEFT && _v7, [_v40, _v7]),
      _v56 = (_v26 = (0, _v4.useRef)(null), (0, _v4.useEffect)(() => {
        _v26.current = _v7;
      }, [_v7]), _v26.current);
    return ((0, _v4.useEffect)(() => {
      _v37 === _v44 && _v38 > 50 && !_v32 ? (_v33(!0), _v23?.(!0)) : _v37 === _v43 && _v38 > 50 && _v32 && (_v33(!1), _v23?.(!1));
    }, [_v37, _v38, _v44, _v43, _v32, _v23]), (0, _v4.useEffect)(() => {
      _v27.subscribeToSignals(_v0 => {
        _v0.type === _v30.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST && (null === _v0.data || _v16.find(_v0 => _v0.id === _v0.data)) && _v45(_v0.data);
      });
    }, [_v27, _v16, _v45]), (0, _v4.useLayoutEffect)(() => {
      if (_v11) {
        if (0 === _v16.length) return;else if (!_v28 || !_v16.some(_v0 => _v0.id === _v28)) return _v29(_v16[0].id);
      }
    }, [_v11, _v28, _v16, _v29]), (0, _v4.useEffect)(() => {
      if (!_v8 || _v2 === _v11.ESidebarAttach.TOP || _v2 === _v11.ESidebarAttach.BOTTOM || _v7) return _v35(!1);
      let _v0 = (0, _v3.default)(() => {
        _v35(window.innerHeight < _v14);
      }, 500);
      return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, [_v2, _v7, _v8, _v14]), Object.keys(_v16).length) ? (0, _v1.jsx)(_v22.ResponsiveSidebarContext.Provider, {
      value: _v48,
      children: (0, _v1.jsxs)(_v6.Flex, {
        id: _v0,
        className: _v1,
        shrink: 0,
        background: _v20 || "background",
        sx: function (_v0) {
          let {
              className: _v1,
              zIndex: _v2,
              attach: _v3,
              isActive: _v4,
              isFullscreen: _v5,
              isPortrait: _v6,
              isExtended: _v7,
              isMinified: _v8,
              isWithBorder: _v9,
              isOrientationChanged: _v10,
              maxSize: _v11,
              backgroundColor: _v12
            } = _v0,
            _v13 = _v3 === _v11.ESidebarAttach.TOP || _v3 === _v11.ESidebarAttach.BOTTOM || _v6;
          return {
            zIndex: _v2,
            ...(0, _v13.inline)(() => {
              switch (_v3) {
                case _v11.ESidebarAttach.TOP:
                  return _v19(_v0, "flex-start");
                case _v11.ESidebarAttach.BOTTOM:
                  return _v19(_v0, "flex-end");
                case _v11.ESidebarAttach.RIGHT:
                  return _v6 ? _v19(_v0, "flex-end") : _v20(_v0, "flex-end");
                case _v11.ESidebarAttach.LEFT:
                  return _v6 ? _v19(_v0, "flex-end") : _v20(_v0, "flex-start");
              }
            }),
            [`& .${(0, _v12.createDomName)(_v1, "content")}`]: {
              flexGrow: +!!_v4,
              transition: _v5 ? "flex-grow 200ms ease" : "none"
            },
            [`& .${(0, _v12.createDomName)(_v1, "panel")}`]: {
              ..._v21(_v3, _v6),
              background: _v12 || "background",
              height: _v13 ? _v8 ? _v15 : _v14 : void 0,
              width: _v13 ? "100%" : _v8 ? _v15 : _v14,
              flexDirection: _v13 ? "row" : "column",
              justifyContent: _v13 ? "center" : "flex-start"
            },
            [`& .${(0, _v12.createDomName)(_v1, "panel-scroller")}`]: {
              flexDirection: _v13 ? "row" : "column",
              alignItems: _v13 ? void 0 : "center",
              overflowX: _v13 ? "auto" : void 0,
              overflowY: _v13 ? void 0 : "auto"
            },
            [`& .${(0, _v12.createDomName)(_v1, "content-wrapper")}`]: {
              ...(_v9 ? _v21(_v3, _v6) : {}),
              ...function ({
                attach: _v0,
                maxSize: _v1,
                isFullscreen: _v2,
                isMinified: _v3,
                isPortrait: _v4,
                isExtended: _v5,
                isOrientationChanged: _v6
              }) {
                return _v0 === _v11.ESidebarAttach.TOP ? {
                  right: 0,
                  bottom: 0,
                  left: 0,
                  height: _v18(_v2, _v1, _v5, _v4, _v3),
                  transition: "height 200ms ease"
                } : _v0 === _v11.ESidebarAttach.BOTTOM || _v0 === _v11.ESidebarAttach.RIGHT && _v4 || _v0 === _v11.ESidebarAttach.LEFT && _v4 ? {
                  top: 0,
                  right: 0,
                  left: 0,
                  height: _v18(_v2, _v1, _v5, _v4, _v3),
                  transition: "height 200ms ease"
                } : _v0 === _v11.ESidebarAttach.RIGHT ? {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: _v18(_v2, _v1, _v5, _v4, _v3),
                  transition: _v2 || _v6 ? "none" : "width 200ms ease"
                } : _v0 === _v11.ESidebarAttach.LEFT ? {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: _v18(_v2, _v1, _v5, _v4, _v3),
                  transition: _v2 || _v6 ? "none" : "width 200ms ease"
                } : {};
              }({
                attach: _v3,
                maxSize: _v11,
                isFullscreen: _v5,
                isPortrait: _v6,
                isMinified: _v8,
                isExtended: _v7,
                isOrientationChanged: _v10
              })
            }
          };
        }({
          id: _v0,
          className: _v1,
          zIndex: _v19,
          attach: _v40,
          isActive: _v39,
          isFullscreen: _v41,
          isPortrait: _v7,
          isExtended: _v32,
          isMobile: _v27.browserConfig.BROWSER?.isMobile,
          isMinified: _v34,
          isWithBorder: _v12,
          isOrientationChanged: _v56 !== _v7,
          maxSize: _v42,
          backgroundColor: _v20
        }),
        children: [_v54 ? _v53 : null, (0, _v1.jsxs)(_v6.Flex, {
          id: (0, _v12.createDomName)(_v0, "content"),
          className: (0, _v12.createDomName)(_v1, "content"),
          position: "relative",
          width: "100%",
          height: "100%",
          maxWidth: _v27.browserConfig.BROWSER?.isMobile ? "100%" : (0, _v5.rem)(640),
          zIndex: 100,
          children: [(0, _v1.jsx)(_v6.Flex, {
            id: (0, _v12.createDomName)(_v0, "content-wrapper"),
            className: (0, _v12.createDomName)(_v1, "content-wrapper"),
            direction: "column",
            position: "absolute",
            color: "text-primary",
            children: _v15 ? null : _v50
          }), _v50 ? (0, _v1.jsx)(_v8.IconButton, {
            ref: _v36,
            "aria-label": "extend",
            id: (0, _v12.createDomName)(_v0, "content-grip"),
            className: (0, _v12.createDomName)(_v1, "content-grip"),
            icon: (0, _v1.jsx)(_v10.GripHorizontalLine, {}),
            position: "absolute",
            transition: "none",
            width: (0, _v5.rem)(80),
            variant: "hyperminimal",
            display: "none",
            _active: {
              transform: void 0,
              background: "transparent"
            },
            _focus: {
              background: "transparent"
            },
            sx: function ({
              isMobile: _v0,
              attach: _v1,
              isPortrait: _v2,
              isFullscreen: _v3
            }) {
              let _v4 = _v0 && !_v3 ? "flex" : "none";
              return _v1 === _v11.ESidebarAttach.TOP ? {
                display: _v4,
                left: "50%",
                bottom: (0, _v5.rem)(-10),
                transform: "translateX(-50%)"
              } : _v1 === _v11.ESidebarAttach.BOTTOM || _v1 === _v11.ESidebarAttach.RIGHT && _v2 || _v1 === _v11.ESidebarAttach.LEFT && _v2 ? {
                display: _v4,
                top: (0, _v5.rem)(-10),
                left: "50%",
                transform: "translateX(-50%)"
              } : _v1 === _v11.ESidebarAttach.RIGHT ? {
                display: _v4,
                top: "50%",
                left: (0, _v5.rem)(-30),
                transform: "translateY(-50%) rotate(90deg)"
              } : _v1 === _v11.ESidebarAttach.LEFT ? {
                display: _v4,
                top: "50%",
                right: (0, _v5.rem)(-30),
                transform: "translateY(-50%) rotate(90deg)"
              } : {
                display: _v4
              };
            }({
              isMobile: _v27.browserConfig.BROWSER?.isMobile,
              attach: _v40,
              isPortrait: _v7,
              isFullscreen: _v41
            }),
            onClick: _v47
          }) : null]
        }), _v55 ? _v53 : null]
      })
    }) : null;
  });
  _v0.s(["ResponsiveSidebar", 0, _v33], 0);
}