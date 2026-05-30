{
  "use strict";

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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "surface"
  };
  _v0.s(["PAGE_WRAPPER_STYLE", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (0, _v18.rem)(80),
    _v28 = (0, _v18.rem)(64),
    _v29 = (0, _v18.rem)(420);
  function _v30(_v0 = !1, _v1, _v2 = !1, _v3 = !1) {
    return _v0 ? "100%" : _v1 ? _v2 ? _v3 ? "75vh" : "75vw" : (0, _v18.rem)(_v1) : _v2 ? _v3 ? "75vh" : "75vw" : _v29;
  }
  function _v31(_v0 = !1, _v1, _v2 = !1, _v3 = !1, _v4 = !1) {
    return _v0 ? "100%" : `calc(${_v30(_v0, _v1, _v2, _v3)} - ${_v4 ? _v28 : _v27})`;
  }
  function _v32({
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
      height: _v0 ? _v30(_v2, _v3, _v5, _v6) : _v1 ? _v28 : _v27,
      transition: _v2 || _v4 && _v0 ? "none" : "height 200ms ease"
    };
  }
  function _v33({
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
      width: _v0 ? _v30(_v2, _v3, _v5, _v6) : _v1 ? _v28 : _v27,
      transition: _v2 || _v4 ? "none" : "width 200ms ease"
    };
  }
  function _v34(_v0, _v1) {
    let _v2 = "";
    switch (_v0) {
      case _v14.ESidebarAttach.TOP:
        _v2 = "bottom";
        break;
      case _v14.ESidebarAttach.BOTTOM:
        _v2 = "top";
        break;
      case _v14.ESidebarAttach.RIGHT:
        _v2 = _v1 ? "top" : "left";
        break;
      case _v14.ESidebarAttach.LEFT:
        _v2 = _v1 ? "top" : "right";
    }
    return {
      [`border-${_v2}`]: "1px solid",
      borderColor: "stroke"
    };
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  function _v38({
    id: _v0,
    className: _v1,
    children: _v2 = null,
    icon: _v3,
    label: _v4,
    isActive: _v5,
    isMinified: _v6,
    onClick: _v7
  }) {
    let _v8 = (0, _v36.useColorModeValue)("slate.50", "grayscale.700"),
      _v9 = (0, _v36.useColorModeValue)("slate.100", "grayscale.500"),
      _v10 = (0, _v1.jsxs)(_v4.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        shrink: 0,
        gap: (0, _v18.rem)(2),
        height: _v6 ? (0, _v18.rem)(48) : (0, _v18.rem)(64),
        width: _v6 ? (0, _v18.rem)(48) : (0, _v18.rem)(64),
        minWidth: _v6 ? (0, _v18.rem)(48) : (0, _v18.rem)(64),
        minHeight: _v6 ? (0, _v18.rem)(48) : (0, _v18.rem)(64),
        padding: (0, _v18.rem)(4),
        backgroundColor: _v5 ? _v8 : "transparent",
        borderRadius: (0, _v18.rem)(12),
        textAlign: "center",
        fontWeight: 400,
        fontSize: (0, _v18.rem)(10),
        lineHeight: (0, _v18.rem)(12),
        whiteSpace: "nowrap",
        _hover: {
          backgroundColor: _v9
        },
        sx: {
          "& svg": {
            width: (0, _v18.rem)(20),
            height: (0, _v18.rem)(20)
          }
        },
        onClick: _v7,
        children: [_v3, _v6 ? null : _v2]
      });
    return _v6 ? (0, _v1.jsx)(_v37.BokehTooltip, {
      placement: "right",
      label: _v4,
      shouldWrapChildren: !1,
      children: _v10
    }) : _v10;
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = (0, _v3.memo)(function ({
    id: _v0 = (0, _v25.createDomName)("sidebar"),
    className: _v1 = (0, _v25.createDomName)("sidebar"),
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
    onActiveItemChangedCallback: _v24 = _v43.CallablePlaceholder
  }) {
    let _v25,
      _v26,
      _v27 = (0, _v2.useScope)(),
      [_v28, _v29] = (_v25 = (0, _v3.useState)(_v4), _v3 || _v25),
      [_v30, _v31] = (0, _v3.useState)(_v10),
      [_v32, _v33] = (0, _v3.useState)(!1),
      [_v34, _v35] = (0, _v3.useState)(!!_v8 && window.innerHeight < _v14);
    (0, _v3.useEffect)(() => {
      _v29(_v4);
    }, [_v4, _v29]);
    let _v36 = (0, _v3.useRef)(null),
      {
        direction: _v37,
        offset: _v38
      } = (0, _v40.useSwipe)({
        ref: _v36,
        dependencies: [_v28]
      }),
      _v39 = (0, _v3.useMemo)(() => !!_v28, [_v28]),
      _v40 = (0, _v35.useSidebarPropConfigValue)(_v2),
      _v41 = (0, _v35.useSidebarPropConfigValue)(_v5),
      _v42 = (0, _v35.useSidebarPropConfigValue)(_v13),
      {
        swipeSameDirection: _v43,
        swipeOppositeDirection: _v44
      } = (0, _v35.useSidebarSwipeDirection)(_v40, _v7),
      _v45 = (0, _v3.useCallback)(_v0 => {
        _v24(_v0), _v29(_v0), _v31(_v10);
        let _v1 = _v16.find(_v0 => _v0.id === _v0);
        _v9 && (window.location.hash = _v1?.hash ? _v1.hash : window.location.hash = "none");
      }, [_v16, _v9, _v10, _v29, _v24]),
      _v46 = (0, _v3.useCallback)(_v0 => () => {
        if (_v31(_v10), _v28 === _v0) {
          if (_v11) return;else _v22?.(_v28), _v23?.(!1), _v33(!1), _v45(null);
        } else _v21?.(_v0), _v45(_v0);
      }, [_v10, _v28, _v11, _v22, _v23, _v45, _v21]),
      _v47 = (0, _v3.useCallback)(() => {
        _v33(_v0 => {
          let _v1 = !_v0;
          return _v23?.(_v1), _v1;
        });
      }, [_v23]),
      _v48 = (0, _v3.useMemo)(() => ({
        isHeaderEnabled: _v30,
        setIsHeaderEnabled: _v31
      }), [_v30]),
      _v49 = (0, _v3.useMemo)(() => _v28 ? _v16.find(({
        id: _v0
      }) => _v0 === _v28) : null, [_v28, _v16]),
      _v50 = (0, _v3.useMemo)(() => {
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
            children: [_v18 || null, _v30 ? (0, _v1.jsxs)(_v4.Flex, {
              id: (0, _v25.createDomName)(_v0, "content-header", _v0),
              className: (0, _v25.createDomName)(_v1, "content-header", _v0),
              justifyContent: "space-between",
              alignItems: "center",
              padding: (0, _v18.rem)(16),
              background: _v2,
              children: [(0, _v1.jsx)(_v21.Text, {
                id: (0, _v25.createDomName)(_v0, "header"),
                className: (0, _v25.createDomName)(_v1, "header"),
                variant: "heading-sm",
                color: "text-primary",
                children: _v1
              }), (0, _v1.jsxs)(_v4.Flex, {
                id: (0, _v25.createDomName)(_v0, "header-menu"),
                className: (0, _v25.createDomName)(_v1, "header-menu"),
                justifyContent: "flex-end",
                alignItems: "center",
                gap: (0, _v18.rem)(4),
                children: [_v3, _v4 && !_v11 ? (0, _v1.jsx)(_v23.CloseXSmall, {
                  id: (0, _v25.createDomName)(_v0, "close-sidebar-button"),
                  className: (0, _v25.createDomName)(_v1, "close-sidebar-button"),
                  cursor: "pointer",
                  tabIndex: 0,
                  "aria-label": "Close panel",
                  onClick: _v46(_v0)
                }) : null]
              })]
            }) : null, (0, _v1.jsx)(_v44.LiveErrorBoundary, {
              additionalInfo: _v0,
              component: "ResponsiveSidebar",
              children: (0, _v1.jsx)(_v5, {
                id: (0, _v25.createDomName)(_v0, "item-content", _v0),
                className: (0, _v25.createDomName)(_v1, "item-content")
              })
            }, _v0)]
          });
        }
      }, [_v49, _v1, _v18, _v0, _v30]),
      _v51 = _v2 === _v14.ESidebarAttach.TOP || _v2 === _v14.ESidebarAttach.BOTTOM,
      _v52 = (0, _v41.useScrollbarStyles)(),
      _v53 = (0, _v3.useMemo)(() => Object.keys(_v16).length ? (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v25.createDomName)(_v0, "panel"),
        className: (0, _v25.createDomName)(_v1, "panel"),
        position: "relative",
        shrink: 0,
        justifyContent: "space-between",
        boxShadow: "none",
        zIndex: 101,
        color: "text-primary",
        background: _v20 || "background",
        children: (0, _v1.jsxs)(_v4.Flex, {
          id: (0, _v25.createDomName)(_v0, "panel-scroller"),
          className: (0, _v25.createDomName)(_v1, "panel-scroller"),
          justifyContent: "flex-start",
          gap: (0, _v18.rem)(4),
          padding: (0, _v18.rem)(8),
          overflow: "hidden",
          grow: _v6 ? 1 : void 0,
          sx: {
            ..._v52,
            "&::-webkit-scrollbar": {
              width: (0, _v18.rem)(12)
            },
            "&::-webkit-scrollbar-thumb": {
              ..._v52["&::-webkit-scrollbar-thumb"],
              borderRadius: (0, _v18.rem)(12)
            }
          },
          children: [_v16.map(({
            id: _v0,
            icon: _v1,
            label: _v2
          }, _v3) => _v0 ? (0, _v1.jsx)(_v38, {
            id: (0, _v25.createDomName)(_v0, "panel-button", _v0),
            className: (0, _v25.createDomName)(_v0, "panel-button"),
            icon: _v1,
            label: _v2,
            attach: _v40,
            isMinified: _v34,
            isActive: _v0 === _v28,
            isMobile: _v39.browserConfig.BROWSER?.isMobile,
            onClick: _v46(_v0),
            children: _v2
          }, _v0) : (0, _v1.jsx)(_v4.Flex, {
            className: (0, _v25.createDomName)(_v0, "panel-break"),
            transition: "120ms ease-in-out",
            height: _v51 ? "75%" : void 0,
            width: _v51 ? void 0 : "75%",
            margin: _v51 ? "auto 0" : "0 auto",
            borderLeft: _v51 ? "1px solid" : void 0,
            borderTop: _v51 ? void 0 : "1px solid",
            borderColor: "stroke"
          }, _v3)), (0, _v1.jsx)(_v4.Flex, {
            grow: 1
          }), _v17]
        })
      }) : null, [_v16, _v0, _v1, _v6, _v52, _v17, _v40, _v34, _v28, _v46, _v51]),
      _v54 = (0, _v3.useMemo)(() => _v40 === _v14.ESidebarAttach.TOP || _v40 === _v14.ESidebarAttach.LEFT && !_v7, [_v40, _v7]),
      _v55 = (0, _v3.useMemo)(() => _v40 === _v14.ESidebarAttach.RIGHT || _v40 === _v14.ESidebarAttach.BOTTOM || _v40 === _v14.ESidebarAttach.LEFT && _v7, [_v40, _v7]),
      _v56 = (_v26 = (0, _v3.useRef)(null), (0, _v3.useEffect)(() => {
        _v26.current = _v7;
      }, [_v7]), _v26.current);
    return ((0, _v3.useEffect)(() => {
      _v37 === _v44 && _v38 > 50 && !_v32 ? (_v33(!0), _v23?.(!0)) : _v37 === _v43 && _v38 > 50 && _v32 && (_v33(!1), _v23?.(!1));
    }, [_v37, _v38, _v44, _v43, _v32, _v23]), (0, _v3.useEffect)(() => {
      _v27.subscribeToSignals(_v0 => {
        _v0.type === _v42.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST && (null === _v0.data || _v16.find(_v0 => _v0.id === _v0.data)) && _v45(_v0.data);
      });
    }, [_v27, _v16, _v45]), (0, _v3.useLayoutEffect)(() => {
      if (_v11) {
        if (0 === _v16.length) return;else if (!_v28 || !_v16.some(_v0 => _v0.id === _v28)) return _v29(_v16[0].id);
      }
    }, [_v11, _v28, _v16, _v29]), (0, _v3.useEffect)(() => {
      if (!_v8 || _v2 === _v14.ESidebarAttach.TOP || _v2 === _v14.ESidebarAttach.BOTTOM || _v7) return _v35(!1);
      let _v0 = (0, _v20.default)(() => {
        _v35(window.innerHeight < _v14);
      }, 500);
      return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, [_v2, _v7, _v8, _v14]), Object.keys(_v16).length) ? (0, _v1.jsx)(_v35.ResponsiveSidebarContext.Provider, {
      value: _v48,
      children: (0, _v1.jsxs)(_v4.Flex, {
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
            _v13 = _v3 === _v14.ESidebarAttach.TOP || _v3 === _v14.ESidebarAttach.BOTTOM || _v6;
          return {
            zIndex: _v2,
            ...(0, _v26.inline)(() => {
              switch (_v3) {
                case _v14.ESidebarAttach.TOP:
                  return _v32(_v0, "flex-start");
                case _v14.ESidebarAttach.BOTTOM:
                  return _v32(_v0, "flex-end");
                case _v14.ESidebarAttach.RIGHT:
                  return _v6 ? _v32(_v0, "flex-end") : _v33(_v0, "flex-end");
                case _v14.ESidebarAttach.LEFT:
                  return _v6 ? _v32(_v0, "flex-end") : _v33(_v0, "flex-start");
              }
            }),
            [`& .${(0, _v25.createDomName)(_v1, "content")}`]: {
              flexGrow: +!!_v4,
              transition: _v5 ? "flex-grow 200ms ease" : "none"
            },
            [`& .${(0, _v25.createDomName)(_v1, "panel")}`]: {
              ..._v34(_v3, _v6),
              background: _v12 || "background",
              height: _v13 ? _v8 ? _v28 : _v27 : void 0,
              width: _v13 ? "100%" : _v8 ? _v28 : _v27,
              flexDirection: _v13 ? "row" : "column",
              justifyContent: _v13 ? "center" : "flex-start"
            },
            [`& .${(0, _v25.createDomName)(_v1, "panel-scroller")}`]: {
              flexDirection: _v13 ? "row" : "column",
              alignItems: _v13 ? void 0 : "center",
              overflowX: _v13 ? "auto" : void 0,
              overflowY: _v13 ? void 0 : "auto"
            },
            [`& .${(0, _v25.createDomName)(_v1, "content-wrapper")}`]: {
              ...(_v9 ? _v34(_v3, _v6) : {}),
              ...function ({
                attach: _v0,
                maxSize: _v1,
                isFullscreen: _v2,
                isMinified: _v3,
                isPortrait: _v4,
                isExtended: _v5,
                isOrientationChanged: _v6
              }) {
                return _v0 === _v14.ESidebarAttach.TOP ? {
                  right: 0,
                  bottom: 0,
                  left: 0,
                  height: _v31(_v2, _v1, _v5, _v4, _v3),
                  transition: "height 200ms ease"
                } : _v0 === _v14.ESidebarAttach.BOTTOM || _v0 === _v14.ESidebarAttach.RIGHT && _v4 || _v0 === _v14.ESidebarAttach.LEFT && _v4 ? {
                  top: 0,
                  right: 0,
                  left: 0,
                  height: _v31(_v2, _v1, _v5, _v4, _v3),
                  transition: "height 200ms ease"
                } : _v0 === _v14.ESidebarAttach.RIGHT ? {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: _v31(_v2, _v1, _v5, _v4, _v3),
                  transition: _v2 || _v6 ? "none" : "width 200ms ease"
                } : _v0 === _v14.ESidebarAttach.LEFT ? {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: _v31(_v2, _v1, _v5, _v4, _v3),
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
          isMobile: _v39.browserConfig.BROWSER?.isMobile,
          isMinified: _v34,
          isWithBorder: _v12,
          isOrientationChanged: _v56 !== _v7,
          maxSize: _v42,
          backgroundColor: _v20
        }),
        children: [_v54 ? _v53 : null, (0, _v1.jsxs)(_v4.Flex, {
          id: (0, _v25.createDomName)(_v0, "content"),
          className: (0, _v25.createDomName)(_v1, "content"),
          position: "relative",
          width: "100%",
          height: "100%",
          maxWidth: _v39.browserConfig.BROWSER?.isMobile ? "100%" : (0, _v18.rem)(640),
          zIndex: 100,
          children: [(0, _v1.jsx)(_v4.Flex, {
            id: (0, _v25.createDomName)(_v0, "content-wrapper"),
            className: (0, _v25.createDomName)(_v1, "content-wrapper"),
            direction: "column",
            position: "absolute",
            color: "text-primary",
            children: _v15 ? null : _v50
          }), _v50 ? (0, _v1.jsx)(_v22.IconButton, {
            ref: _v36,
            "aria-label": "extend",
            id: (0, _v25.createDomName)(_v0, "content-grip"),
            className: (0, _v25.createDomName)(_v1, "content-grip"),
            icon: (0, _v1.jsx)(_v24.GripHorizontalLine, {}),
            position: "absolute",
            transition: "none",
            width: (0, _v18.rem)(80),
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
              return _v1 === _v14.ESidebarAttach.TOP ? {
                display: _v4,
                left: "50%",
                bottom: (0, _v18.rem)(-10),
                transform: "translateX(-50%)"
              } : _v1 === _v14.ESidebarAttach.BOTTOM || _v1 === _v14.ESidebarAttach.RIGHT && _v2 || _v1 === _v14.ESidebarAttach.LEFT && _v2 ? {
                display: _v4,
                top: (0, _v18.rem)(-10),
                left: "50%",
                transform: "translateX(-50%)"
              } : _v1 === _v14.ESidebarAttach.RIGHT ? {
                display: _v4,
                top: "50%",
                left: (0, _v18.rem)(-30),
                transform: "translateY(-50%) rotate(90deg)"
              } : _v1 === _v14.ESidebarAttach.LEFT ? {
                display: _v4,
                top: "50%",
                right: (0, _v18.rem)(-30),
                transform: "translateY(-50%) rotate(90deg)"
              } : {
                display: _v4
              };
            }({
              isMobile: _v39.browserConfig.BROWSER?.isMobile,
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
  _v0.s(["ResponsiveSidebar", 0, _v45], 0);
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  function _v65({
    id: _v0 = (0, _v5.createInteractionDomName)("chat-manage"),
    chatContext: {
      isEnabled: _v1,
      chatActions: {
        enableChat: _v2
      }
    } = (0, _v2.useManager)(_v53.ChatManager),
    firebaseContext: {
      interactionCredentials: _v3,
      connectionStatuses: {
        isInteractionConnected: _v4
      }
    } = (0, _v2.useManager)(_v63.InteractionFirebaseManager)
  }) {
    let {
        initialState: _v5
      } = (0, _v7.useLiveGlobals)(),
      _v6 = _v3?.user?.id,
      _v7 = (0, _v3.useCallback)(() => {
        _v2(), (0, _v64.trackEnableAudienceChat)();
      }, [_v2]);
    return (0, _v1.jsx)(_v57.Box, {
      id: _v0,
      flexDirection: "column",
      flexGrow: 1,
      maxHeight: "100%",
      overflowY: "hidden",
      children: null !== _v1 && _v6 ? (0, _v1.jsx)(_v4.Flex, {
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        overflowY: "hidden",
        padding: `0 ${(0, _v18.rem)(16)} ${(0, _v18.rem)(16)} ${(0, _v18.rem)(16)}`,
        children: _v5?.interaction?.isStandalone ? _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v59.ChatHistory, {
            chatType: _v11.EChatType.PUBLIC,
            currentUserId: _v6,
            scrollBackground: _v5?.interaction?.backgroundColor || "background"
          }), (0, _v1.jsx)(_v60.ChatInput, {
            chatType: _v11.EChatType.PUBLIC,
            isDisabled: !_v4
          })]
        }) : (0, _v1.jsx)(_v62.EmptyStatePlaceholder, {
          icon: (0, _v1.jsx)(_v58.Chats, {
            boxSize: "lg"
          }),
          buttonLabel: _v19.translations.turnOn,
          description: _v19.translations.turnOnChatToEngageWithYourAudience,
          onButtonClick: _v7
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v59.ChatHistory, {
            chatType: _v11.EChatType.PUBLIC,
            currentUserId: _v6,
            scrollBackground: _v5?.interaction?.backgroundColor || "background"
          }), (0, _v1.jsx)(_v60.ChatInput, {
            chatType: _v11.EChatType.PUBLIC,
            isDisabled: !_v4
          })]
        })
      }) : (0, _v1.jsx)(_v61.ChatPreloader, {
        id: (0, _v5.createInteractionDomName)(_v0, "preloader")
      })
    });
  }
  function _v66({
    id: _v0 = (0, _v5.createInteractionDomName)("chat-view"),
    className: _v1 = (0, _v5.createInteractionDomName)("chat-view"),
    chatType: _v2,
    firebaseContext: {
      interactionCredentials: _v3,
      connectionStatuses: {
        isInteractionConnected: _v4
      }
    } = (0, _v2.useManager)(_v63.InteractionFirebaseManager, ({
      interactionCredentials: _v0
    }) => [_v0]),
    chatContext: {
      isEnabled: _v5
    } = (0, _v2.useManager)(_v53.ChatManager)
  }) {
    let {
        initialState: _v6
      } = (0, _v7.useLiveGlobals)(),
      _v7 = _v3?.user?.id;
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      flexGrow: 1,
      flexDirection: "column",
      overflow: "hidden",
      paddingTop: (0, _v18.rem)(4),
      children: _v7 ? _v5 ? (0, _v1.jsxs)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "content"),
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        padding: `0 ${(0, _v18.rem)(16)} ${(0, _v18.rem)(16)} ${(0, _v18.rem)(16)}`,
        children: [(0, _v1.jsx)(_v59.ChatHistory, {
          chatType: _v2,
          currentUserId: _v7,
          scrollBackground: _v6?.interaction?.backgroundColor || "background",
          placeholder: (0, _v1.jsx)(_v62.EmptyStatePlaceholder, {
            id: (0, _v5.createInteractionDomName)(_v0, "chat-history-placeholder"),
            icon: (0, _v1.jsx)(_v58.Chats, {
              boxSize: "lg"
            }),
            description: _v19.translations.sendMessageToStartChat,
            control: null
          })
        }), (0, _v1.jsx)(_v60.ChatInput, {
          chatType: _v2,
          isDisabled: !_v4,
          placeholderText: _v19.translations.sendMessage
        })]
      }) : (0, _v1.jsx)(_v62.EmptyStatePlaceholder, {
        id: (0, _v5.createInteractionDomName)(_v0, "placeholder"),
        className: (0, _v5.createInteractionDomName)(_v1, "placeholder"),
        icon: (0, _v1.jsx)(_v58.Chats, {
          boxSize: "lg"
        }),
        control: null
      }) : (0, _v1.jsx)(_v61.ChatPreloader, {
        id: (0, _v5.createInteractionDomName)(_v0, "preloader")
      })
    });
  }
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  function _v82({
    id: _v0 = (0, _v25.createDomName)("create-button-minimized"),
    className: _v1 = (0, _v25.createDomName)("create-button-minimized"),
    isDisabled: _v2,
    withBottomMargin: _v3,
    icon: _v4 = (0, _v1.jsx)(_v81.Plus, {
      width: (0, _v18.rem)(16),
      maxWidth: (0, _v18.rem)(16)
    }),
    children: _v5,
    onClick: _v6
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      borderRadius: (0, _v18.rem)(4),
      justifyContent: "center",
      color: "stroke",
      margin: `${(0, _v18.rem)(16)} 0 ${_v3 ? (0, _v18.rem)(16) : 0} 0`,
      children: (0, _v1.jsx)(_v80.Button, {
        id: (0, _v25.createDomName)(_v0, "target"),
        className: (0, _v25.createDomName)(_v1, "target"),
        variant: "primary",
        isDisabled: _v2,
        leftIcon: _v4,
        width: "100%",
        onClick: _v6,
        children: _v5
      })
    });
  }
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = {
    position: "relative",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: (0, _v18.rem)(24)
  };
  function _v90() {
    return {
      padding: `${(0, _v18.rem)(16)} ${(0, _v18.rem)(8)}`,
      height: "100%",
      overflowY: "auto",
      overflowX: "visible",
      "@supports (-moz-appearance: none)": {
        paddingRight: (0, _v18.rem)(20)
      }
    };
  }
  let _v91 = (0, _v88.createPollInteractionObject)({
    id: "",
    question: "",
    state: _v11.EPollState.DRAFT,
    createdAt: 0,
    options: [(0, _v88.createPollOptionInteractionObject)({
      id: (0, _v67.v4)(),
      text: ""
    }, {
      validate: !1
    }), (0, _v88.createPollOptionInteractionObject)({
      id: (0, _v67.v4)(),
      text: ""
    }, {
      validate: !1
    })]
  }, {
    validate: !1
  });
  function _v92({
    id: _v0 = (0, _v5.createInteractionDomName)("poll-manage"),
    className: _v1 = (0, _v5.createInteractionDomName)("poll-manage"),
    pollContext: {
      isHydrated: _v2,
      activePollId: _v3,
      polls: _v4,
      pollsHistory: _v5,
      pollActions: {
        createPoll: _v6,
        updatePoll: _v7,
        deletePoll: _v8,
        setActivePoll: _v9
      }
    } = (0, _v2.useManager)(_v54.PollManager)
  }) {
    let [_v10, _v11] = (0, _v3.useState)(!1),
      [_v12, _v13] = (0, _v3.useState)(null),
      {
        initialState: _v14,
        initialState: {
          sessionType: _v15
        }
      } = (0, _v7.useLiveGlobals)(),
      {
        setIsHeaderEnabled: _v16
      } = (0, _v35.useResponsiveSidebarContext)(),
      _v17 = (0, _v3.useMemo)(() => Object.values(_v4), [_v4]),
      _v18 = _v17.some(_v0 => _v0.state === _v11.EPollState.OPENED),
      _v19 = _v17.some(_v0 => _v0.state === _v11.EPollState.CLOSED),
      _v20 = !_v18,
      {
        panels: _v21,
        activePolls: _v22,
        activePanelId: _v23,
        setActivePanelId: _v24
      } = (0, _v77.usePollPanels)(_v4),
      _v25 = (0, _v3.useCallback)(() => {
        _v16(!1), _v11(!0), (0, _v85.trackClickAddPoll)();
      }, [_v16]),
      _v26 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, {
          ..._v0,
          state: _v11.EPollState.CLOSED
        });
      }, [_v7]),
      _v27 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, {
          ..._v0,
          state: _v11.EPollState.ARCHIVED
        });
      }, [_v7]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v3 ? _v4[_v3] : null;
        _v1 && _v27(_v1), _v7(_v0.id, {
          ..._v0,
          state: _v11.EPollState.OPENED
        }), _v9(_v0.id);
      }, [_v3, _v4, _v7, _v9, _v27]),
      _v29 = (0, _v3.useCallback)(_v0 => {
        _v16(!1), _v13(_v0);
      }, [_v16]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v31 = (0, _v3.useCallback)(() => {
        _v11(!1), _v16(!0);
      }, [_v16]),
      _v32 = (0, _v3.useCallback)(_v0 => (_v11(!1), _v16(!0), _v6(_v0)), [_v6, _v16]),
      _v33 = (0, _v3.useCallback)(() => {
        _v13(null), _v16(!0);
      }, [_v16]),
      _v34 = (0, _v3.useCallback)(_v0 => (_v13(null), _v16(!0), _v7(_v0.id, _v0)), [_v16, _v7]);
    (0, _v3.useEffect)(() => {
      (0, _v85.trackViewPoll)();
    }, []), (0, _v3.useEffect)(() => {
      _v2 && _v3 && _v15 === _v87.EComposerSessionType.VENUE && (0, _v86.trackVenuesViewPoll)(String(_v3));
    }, [_v3, _v2, _v15]);
    let _v35 = (0, _v41.useScrollbarStyles)();
    return _v10 ? (0, _v1.jsx)(_v57.Box, {
      id: _v0,
      className: _v1,
      sx: _v90(),
      children: (0, _v1.jsx)(_v75.PollForm, {
        poll: _v91,
        onClose: _v31,
        onSubmit: _v32
      })
    }) : _v12 ? (0, _v1.jsx)(_v57.Box, {
      id: _v0,
      className: _v1,
      sx: _v90(),
      children: (0, _v1.jsx)(_v75.PollForm, {
        poll: _v12,
        onClose: _v33,
        onSubmit: _v34
      })
    }) : _v2 ? _v17.length ? (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      className: _v1,
      sx: _v89,
      children: [(0, _v1.jsxs)(_v68.Tabs, {
        size: "sm",
        sx: _v83.TABS_STYLES,
        onChange: _v24,
        children: [(0, _v1.jsxs)(_v69.TabList, {
          children: [_v21.map(({
            id: _v0,
            label: _v1
          }) => (0, _v1.jsx)(_v70.Tab, {
            className: (0, _v5.createInteractionDomName)(_v0, _v0, "tab"),
            children: _v1
          }, _v0)), (0, _v1.jsx)(_v68.TabIndicator, {})]
        }), (0, _v1.jsx)(_v71.TabPanels, {
          sx: _v83.TAB_PANELS_STYLES,
          children: _v21.map(({
            id: _v0,
            polls: _v1
          }) => (0, _v1.jsx)(_v72.TabPanel, {
            className: (0, _v5.createInteractionDomName)(_v0, _v0, "tab-panel"),
            sx: _v83.TAB_PANEL_STYLES,
            children: (0, _v1.jsx)(_v57.Box, {
              id: (0, _v5.createInteractionDomName)(_v0, _v0, "scroll"),
              sx: {
                ...(0, _v83.createTabListScrollStyle)({
                  fullWidth: !0
                }),
                ..._v35
              },
              children: (0, _v1.jsx)(_v57.Box, {
                id: (0, _v5.createInteractionDomName)(_v0, _v0, "column"),
                sx: (0, _v83.createTabListColumnStyle)(!0),
                children: 0 === _v1.length ? (0, _v1.jsx)(_v78.PollEmptyState, {
                  id: (0, _v5.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                  className: (0, _v5.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                  width: "100%",
                  height: "100%",
                  buttonLabel: _v56.T_CREATE_POLL,
                  description: 0 === _v0 ? _v19.translations.createPollToInteractWithAudience : _v19.translations.noPollsArchived,
                  control: 0 === _v0,
                  history: 0 === _v0 ? _v5 : null,
                  onCreateClick: _v25
                }) : _v1.map(_v0 => {
                  var _v1;
                  return (0, _v1.jsx)(_v57.Box, {
                    sx: _v83.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
                    children: (0, _v1.jsx)(_v76.PollItem, {
                      poll: _v0,
                      isAnyPollPublished: _v19,
                      canOpenPoll: _v20,
                      menuAttach: "left-start",
                      itemActions: {
                        onPollOpen: _v28,
                        onPollClose: _v26,
                        onPollArchive: _v27
                      },
                      menuActions: (_v1 = {
                        onPollEdit: _v29,
                        onPollDelete: _v30
                      }, _v0.state === _v11.EPollState.DRAFT ? [{
                        key: "edit",
                        label: _v19.translations.edit,
                        onClick: () => {
                          _v1.onPollEdit(_v0), (0, _v85.trackClickEditPoll)();
                        },
                        icon: (0, _v1.jsx)(_v73.EditPencil, {})
                      }, {
                        key: "delete",
                        label: _v19.translations.remove,
                        onClick: () => {
                          _v1.onPollDelete(_v0.id), (0, _v85.trackRemovePollFromEvent)();
                        },
                        icon: (0, _v1.jsx)(_v74.TrashBin, {})
                      }] : [])
                    })
                  }, _v0.id);
                })
              })
            })
          }, _v0))
        }, _v23)]
      }), (0, _v1.jsx)(_v4.Flex, {
        position: "relative",
        children: (0, _v1.jsx)(_v84.HorizontalScrollShadow, {
          color: _v14?.interaction?.backgroundColor || "background"
        })
      }), 0 === _v23 && 0 !== _v22.length ? (0, _v1.jsx)(_v82, {
        id: (0, _v5.createInteractionDomName)(_v0, "add-button"),
        onClick: _v25,
        children: _v19.translations.addPoll
      }) : null]
    }) : (0, _v1.jsx)(_v78.PollEmptyState, {
      id: _v0,
      className: _v1,
      buttonLabel: _v56.T_CREATE_POLL,
      description: _v19.translations.createPollToInteractWithAudience,
      history: _v5,
      maxWidth: (0, _v18.rem)(360),
      sx: _v89,
      onCreateClick: _v25
    }) : (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      className: _v1,
      sx: _v89,
      children: (0, _v1.jsx)(_v79.BlockingLoadingWrapper, {
        id: (0, _v5.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  function _v96({
    id: _v0 = (0, _v5.createInteractionDomName)("poll-results"),
    poll: _v1
  }) {
    let _v2 = _v1.options.reduce((_v0, _v1) => _v0 + _v1.votesCount, 0);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v95.PollOptionVotesBar, {
        id: (0, _v5.createInteractionDomName)(_v0, "option", _v1),
        option: _v0,
        state: _v1.state,
        totalCount: _v2,
        isBold: !0
      }, _v0.id))
    });
  }
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  function _v99({
    id: _v0,
    className: _v1 = (0, _v25.createDomName)("poll-option-votes"),
    option: _v2,
    isBold: _v3 = !1
  }) {
    let _v4 = (0, _v36.useColorModeValue)("slate.200", "grayscale.700");
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      className: _v1,
      width: "100%",
      overflow: "hidden",
      position: "relative",
      direction: "column",
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v4.Flex, {
        width: "100%",
        justifyContent: "space-between",
        margin: `${(0, _v18.rem)(4)} 0`,
        padding: `${(0, _v18.rem)(4)} 0`,
        children: (0, _v1.jsxs)(_v4.Flex, {
          overflow: "hidden",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v21.Text, {
            className: (0, _v25.createDomName)(_v1, "option-text"),
            variant: "body-xl",
            fontSize: "text-sm",
            lineHeight: (0, _v18.rem)(18),
            marginRight: (0, _v18.rem)(8),
            children: _v2.text
          }), _v2.isVotedByMe ? (0, _v1.jsx)(_v98.Checkmark, {
            className: (0, _v25.createDomName)(_v1, "your-answer-icon"),
            "data-testid": "yourAnswerIcon",
            height: (0, _v18.rem)(14)
          }) : null]
        })
      }), (0, _v1.jsx)(_v4.Flex, {
        className: (0, _v25.createDomName)(_v1, "bar"),
        overflow: "hidden",
        borderRadius: _v3 ? (0, _v18.rem)(8) : (0, _v18.rem)(4),
        height: _v3 ? (0, _v18.rem)(8) : (0, _v18.rem)(4),
        backgroundColor: _v4,
        children: (0, _v1.jsx)(_v4.Flex, {
          position: "absolute",
          width: 0,
          zIndex: 5,
          borderRadius: _v3 ? (0, _v18.rem)(8) : (0, _v18.rem)(4),
          height: _v3 ? (0, _v18.rem)(8) : (0, _v18.rem)(4),
          background: "status-info-primary"
        })
      })]
    });
  }
  function _v100({
    id: _v0 = (0, _v5.createInteractionDomName)("poll-vote"),
    poll: _v1,
    isVotedOption: _v2,
    onSetVote: _v3
  }) {
    let _v4 = _v1.options.some(_v0 => _v0.isVotedByMe),
      _v5 = (0, _v36.useColorModeValue)("slate.400", "grayscale.700"),
      _v6 = (0, _v36.useColorModeValue)("slate.400", "grayscale.600"),
      _v7 = (0, _v36.useColorModeValue)("slate.50", "grayscale.700"),
      _v8 = (0, _v3.useCallback)((_v0, _v1) => {
        _v3(_v0, _v1), (0, _v85.trackVoteInPoll)();
      }, [_v3]);
    return _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v99, {
        id: (0, _v5.createInteractionDomName)(_v0, "option", _v1),
        option: _v0,
        isBold: !0
      }, _v0.id)), (0, _v1.jsx)(_v97.Paragraph, {
        size: "sm",
        color: "text-secondary",
        children: _v19.translations.waitingForFinalResults
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v80.Button, {
        id: (0, _v5.createInteractionDomName)(_v0, "option", _v1),
        "aria-label": _v0.text,
        variant: "tertiary",
        rightIcon: _v0.isVotedByMe ? (0, _v1.jsx)(_v98.Checkmark, {}) : void 0,
        isDisabled: _v2,
        width: "100%",
        justifyContent: "space-between",
        flexShrink: 0,
        border: "1px solid",
        whiteSpace: "break-spaces",
        textAlign: "left",
        minHeight: "sm",
        height: "auto",
        borderColor: _v5,
        backgroundColor: `${_v0.isVotedByMe ? _v6 : "transparent"}!important`,
        _disabled: {
          opacity: 1
        },
        _hover: {
          backgroundColor: `${_v7}!important`
        },
        onClick: () => _v8(_v1.id, _v1),
        children: _v0.text
      }, _v0.id))
    });
  }
  let _v101 = {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: (0, _v18.rem)(24),
    flexDirection: "column",
    alignSelf: "flex-start",
    rowGap: (0, _v18.rem)(16),
    overflow: "auto"
  };
  function _v102({
    id: _v0 = (0, _v5.createInteractionDomName)("poll-view"),
    pollContext: {
      isHydrated: _v1,
      polls: _v2,
      activePollId: _v3,
      pollActions: _v4
    } = (0, _v2.useManager)(_v54.PollManager)
  }) {
    let {
        initialState: {
          sessionType: _v5
        }
      } = (0, _v7.useLiveGlobals)(),
      _v6 = _v3 ? _v2[_v3] : null;
    if ((0, _v3.useEffect)(() => {
      (0, _v85.trackViewPoll)();
    }, []), (0, _v3.useEffect)(() => {
      _v1 && _v3 && _v5 === _v87.EComposerSessionType.VENUE && (0, _v86.trackVenuesViewPoll)(String(_v3));
    }, [_v3, _v1, _v5]), !_v1) return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v101,
      children: (0, _v1.jsx)(_v79.BlockingLoadingWrapper, {
        opacity: .1,
        withAnimation: !0
      })
    });
    if (!_v6) return (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "auto",
      children: [(0, _v1.jsx)(_v94.ChartGrowthAlt, {
        boxSize: "lg"
      }), (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "placeholder"),
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "text-secondary",
        textAlign: "center",
        flexGrow: 1,
        margin: `${(0, _v18.rem)(16)} 0`,
        children: _v19.translations.noPollCurrentlyAvailable
      })]
    });
    let _v7 = _v6.options.some(_v0 => _v0.isVotedByMe),
      _v8 = _v6.state === _v11.EPollState.OPENED;
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      sx: _v101,
      children: [(0, _v1.jsx)(_v93.Header, {
        id: (0, _v5.createInteractionDomName)(_v0, "question"),
        size: "sm",
        margin: 0,
        sx: {
          wordWrap: "break-word"
        },
        children: _v6.question
      }), _v8 ? (0, _v1.jsx)(_v100, {
        id: (0, _v5.createInteractionDomName)(_v0, "votes"),
        poll: _v6,
        onSetVote: _v4.voteForPollOption,
        isVotedOption: _v7
      }) : (0, _v1.jsx)(_v96, {
        id: (0, _v5.createInteractionDomName)(_v0, "results"),
        poll: _v6
      })]
    });
  }
  var _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  function _v116({
    id: _v0 = (0, _v5.createInteractionDomName)("qna-manage"),
    qnaContext: {
      isHydrated: _v1,
      activeSessionId: _v2,
      activeSession: _v3,
      activeSessionPinnedQuestionId: _v4,
      isEventModerated: _v5,
      qnaReplies: _v6,
      qnaActions: {
        approveQuestion: _v7,
        archiveQuestion: _v8,
        unArchiveQuestion: _v9,
        pinQuestion: _v10,
        unPinQuestion: _v11,
        deleteQuestionReply: _v12
      }
    } = (0, _v2.useManager)(_v55.QnAManager),
    firebaseContext: {
      connectionStatuses: {
        isInteractionConnected: _v13
      }
    } = (0, _v2.useManager)(_v63.InteractionFirebaseManager)
  }) {
    let {
        initialState: _v14,
        initialState: {
          sessionType: _v15
        }
      } = (0, _v7.useLiveGlobals)(),
      {
        selectedQuestionId: _v16,
        selectedQuestionState: _v17,
        selectedQuestionElement: _v18,
        onSelectedQuestion: _v19,
        onDeselectQuestion: _v20
      } = (0, _v113.useQnaResponding)(),
      {
        panels: _v21,
        currentQuestions: _v22,
        activePanelId: _v23,
        setActivePanelId: _v24
      } = (0, _v109.useQnaPanels)(),
      {
        getIdByIndex: _v25,
        getIndexById: _v26
      } = (0, _v110.useTabsMapping)(_v21),
      _v27 = (0, _v111.useSimpleNotification)(),
      _v28 = null !== _v16 && (0, _v112.canReplyQuestion)(_v22.find(_v0 => _v0.id === _v16)) && !(0, _v112.hasQuestionReplies)(_v16 ? _v6?.[_v16] : void 0);
    (0, _v3.useEffect)(() => {
      (0, _v114.trackViewQna)();
    }, []), (0, _v3.useEffect)(() => {
      _v1 && _v2 && _v15 === _v87.EComposerSessionType.VENUE && (0, _v86.trackVenuesViewQa)(String(_v2));
    }, [_v2, _v1, _v15]);
    let _v29 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id), (0, _v114.trackApproveModeratedQuestion)(), _v27({
          message: _v56.T_QUESTION_APPROVED
        });
      }, [_v7, _v27]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0.id, !!_v0.approved), (0, _v114.trackArchiveQuestion)(_v5), _v27({
          message: _v56.T_QUESTION_ARCHIVED
        });
      }, [_v8, _v5, _v27]),
      _v31 = (0, _v3.useCallback)(_v0 => {
        _v9(_v0.id, !!_v0.approved), (0, _v114.trackUnarchiveQuestion)(_v5), _v27({
          message: _v56.T_QUESTION_UNARCHIVED
        });
      }, [_v5, _v27, _v9]),
      _v32 = (0, _v3.useCallback)(_v0 => {
        _v10(_v0), (0, _v114.trackPinQuestion)(), _v27({
          message: _v56.T_QUESTION_PINNED
        });
      }, [_v27, _v10]),
      _v33 = (0, _v3.useCallback)(_v0 => {
        _v11(_v0), (0, _v114.trackUnpinQuestion)(), _v27({
          message: _v56.T_QUESTION_UNPINNED
        });
      }, [_v27, _v11]),
      _v34 = (0, _v3.useCallback)((_v0, _v1) => {
        _v12(_v0, _v1), _v27({
          message: _v56.T_QUESTION_REPLY_DELETED
        });
      }, [_v27, _v12]),
      _v35 = (0, _v3.useCallback)(_v0 => {
        _v24(_v25(_v0)), _v20(), (0, _v114.trackSwitchActiveTab)();
      }, [_v25, _v20, _v24]);
    return _v1 ? _v3 ? (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      maxHeight: "100%",
      overflow: "hidden",
      padding: (0, _v18.rem)(24),
      children: [(0, _v1.jsxs)(_v68.Tabs, {
        size: "sm",
        sx: _v83.TABS_STYLES,
        index: _v26(_v23),
        onChange: _v35,
        children: [(0, _v1.jsxs)(_v69.TabList, {
          children: [_v21.map(({
            id: _v0,
            label: _v1
          }) => (0, _v1.jsx)(_v70.Tab, {
            className: (0, _v5.createInteractionDomName)(_v0, _v0, "tab"),
            children: _v1
          }, _v0)), (0, _v1.jsx)(_v68.TabIndicator, {})]
        }), (0, _v1.jsx)(_v71.TabPanels, {
          sx: _v83.TAB_PANELS_STYLES,
          children: _v21.map(({
            id: _v0,
            questions: _v1
          }) => (0, _v1.jsx)(_v72.TabPanel, {
            className: (0, _v5.createInteractionDomName)(_v0, _v0, "tab-panel"),
            sx: _v83.TAB_PANEL_STYLES,
            children: (0, _v1.jsx)(_v107.QuestionsList, {
              id: (0, _v5.createInteractionDomName)(_v0, _v0, "questions-list"),
              tabId: _v0,
              selectedQuestionElement: _v18,
              questions: _v1,
              fullWidth: !0,
              pinnedQuestionId: _v4,
              isManagementAccessed: !0,
              scrollBackground: _v14?.interaction?.backgroundColor || "background",
              itemRenderer: _v0 => {
                let _v1 = _v16 === _v0.id ? _v115.FOCUSED_STATE_COLOR : "transparent";
                return (0, _v1.jsxs)(_v57.Box, {
                  sx: _v83.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
                  children: [(0, _v1.jsx)(_v106.NewQuestionManageItem, {
                    question: _v0,
                    isActive: _v0.id === _v16,
                    isPinned: _v0.id === _v4,
                    questionReplies: _v6[_v0.id],
                    onQuestionSelected: _v19,
                    onQuestionDeselected: _v20,
                    onQuestionApprove: _v29,
                    onQuestionArchive: _v30,
                    onQuestionUnArchive: _v31,
                    onQuestionPin: _v32,
                    onQuestionUnPin: _v33,
                    onDeleteQuestionReply: _v34
                  }), (0, _v1.jsx)(_v104.SceneItemOverlay, {
                    size: "sm",
                    width: 2,
                    borderRadius: 8,
                    zIndex: "auto",
                    color: _v1
                  })]
                }, _v0.id);
              },
              placeholder: (0, _v1.jsx)(_v62.EmptyStatePlaceholder, {
                id: (0, _v5.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                className: (0, _v5.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                isWithPadding: !0,
                icon: (0, _v1.jsx)(_v103.ReviewQuestion, {
                  boxSize: "lg"
                }),
                description: _v0 === _v11.EQnaTab.PENDING ? _v56.T_NO_QUESTIONS_PENDING : _v56.T_NO_QUESTIONS_YET,
                control: null
              })
            })
          }, _v0))
        }, _v23)]
      }), (0, _v1.jsxs)(_v57.Box, {
        id: (0, _v5.createInteractionDomName)(_v0, "controls"),
        position: "relative",
        width: "100%",
        children: [(0, _v1.jsx)(_v84.HorizontalScrollShadow, {
          color: _v14?.interaction?.backgroundColor || "background"
        }), _v28 ? (0, _v1.jsx)(_v105.QnaReplyForm, {
          id: (0, _v5.createInteractionDomName)(_v0, "reply-form"),
          selectedQuestionId: _v16,
          isApproveNeeded: _v17 === _v11.EQuestionState.PENDING,
          onDismiss: _v20
        }) : null]
      })]
    }) : (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      overflowY: "hidden",
      position: "relative",
      height: "100%",
      padding: `0 ${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)}`,
      children: [(0, _v1.jsx)(_v108.SessionInactive, {}), (0, _v1.jsx)(_v57.Box, {
        id: (0, _v5.createInteractionDomName)(_v0, "session-controls"),
        position: "relative",
        width: "100%"
      })]
    }) : (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      overflowY: "hidden",
      position: "relative",
      height: "100%",
      padding: `0 ${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)}`,
      children: (0, _v1.jsx)(_v79.BlockingLoadingWrapper, {
        id: (0, _v5.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0);
  function _v124({
    id: _v0 = (0, _v25.createDomName)("qna-question-input-form"),
    className: _v1 = (0, _v25.createDomName)("qna-question-input-form"),
    isDisabled: _v2 = !1,
    qnaContext: {
      isAnonymousQuestionsDisabled: _v3,
      qnaActions: _v4
    } = (0, _v2.useManager)(_v55.QnAManager, ({
      isAnonymousQuestionsDisabled: _v0
    }) => [_v0])
  }) {
    let _v5 = (0, _v3.useRef)(null),
      [_v6, _v7] = (0, _v3.useState)(""),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v111.useSimpleNotification)(),
      _v13 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.target.value);
      }, []),
      _v14 = (0, _v3.useCallback)(() => {
        _v9(_v0 => !_v0), _v5.current?.focus();
      }, [_v9]),
      _v15 = (0, _v3.useCallback)(async _v0 => {
        if ((_v0.preventDefault(), _v0.stopPropagation(), _v6.length && !(_v6.length > _v8.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH)) && !_v10) {
          _v11(!0);
          try {
            await _v4.submitQuestion(_v6, _v8), _v7(""), (0, _v114.trackAskQuestion)(), _v12({
              message: _v56.T_QUESTION_SUBMITTED
            }), setTimeout(() => _v11(!1), _v8.interactionToolsConfig.QNA.QUESTION_ASKING_THROTTLE);
          } catch (_v0) {
            _v11(!1);
          }
        }
      }, [_v6, _v10, _v4, _v8, _v12]),
      _v16 = (0, _v3.useCallback)(_v0 => {
        if (_v5.current) {
          let _v0 = _v5.current.selectionStart || 0,
            _v1 = _v5.current.value;
          _v7(_v1.slice(0, _v0) + _v0.native + _v1.slice(_v0, _v1.length)), _v5.current.focus();
        }
      }, []),
      _v17 = !_v2,
      _v18 = !!(_v17 && _v6.length && _v6.length <= _v8.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH && !_v10),
      _v19 = _v8.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH - _v6.length,
      _v20 = _v19 <= 20,
      _v21 = _v19 < 0;
    return (0, _v1.jsxs)(_v57.Box, {
      id: _v0,
      className: _v1,
      as: "form",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingTop: (0, _v18.rem)(8),
      onSubmit: _v15,
      onKeyUp: _v122.stopEventPropagation,
      onKeyDown: _v122.stopEventPropagation,
      onKeyPress: _v122.stopEventPropagation,
      children: [(0, _v1.jsxs)(_v4.Flex, {
        id: (0, _v25.createDomName)(_v0, "title"),
        className: (0, _v25.createDomName)(_v1, "title"),
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: (0, _v18.rem)(12),
        color: "text-primary",
        fontSize: "text-xs",
        fontWeight: "bold",
        children: [(0, _v1.jsx)("div", {
          children: _v56.T_ASK_QUESTION
        }), _v3 ? null : (0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          gap: (0, _v18.rem)(8),
          children: [(0, _v1.jsx)(_v4.Flex, {
            fontSize: "text-xs",
            fontWeight: 500,
            children: _v56.T_ANONYMOUS
          }), (0, _v1.jsx)(_v120.Switch, {
            id: (0, _v25.createDomName)(_v0, "anonymous-toggle"),
            className: (0, _v25.createDomName)(_v1, "anonymous-toggle"),
            size: "sm",
            isChecked: _v8,
            onChange: _v14
          })]
        })]
      }), (0, _v1.jsxs)(_v117.InputGroup, {
        id: (0, _v25.createDomName)(_v0, "controls"),
        className: (0, _v25.createDomName)(_v1, "controls"),
        children: [_v39.browserConfig.BROWSER?.isMobile ? null : (0, _v1.jsx)(_v118.InputLeftElement, {
          children: (0, _v1.jsx)(_v123.EmojiButton, {
            id: (0, _v25.createDomName)(_v0, "emoji-button"),
            className: (0, _v25.createDomName)(_v1, "emoji-button"),
            inputRef: _v5,
            isSubmitted: _v10,
            placement: "top-start",
            isDisabled: !_v17,
            onEmojiSelect: _v16
          })
        }), (0, _v1.jsx)(_v119.Input, {
          id: (0, _v25.createDomName)(_v0, "input"),
          className: (0, _v25.createDomName)(_v1, "input"),
          ref: _v5,
          maxLength: _v8.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH,
          value: _v6,
          autoComplete: "off",
          isDisabled: !_v17,
          size: "md",
          onChange: _v13
        }), (0, _v1.jsx)(_v118.InputRightElement, {
          children: (0, _v1.jsx)(_v22.IconButton, {
            id: (0, _v25.createDomName)(_v0, "send-button"),
            className: (0, _v25.createDomName)(_v1, "send-button"),
            "aria-label": "qna-submit-button",
            "data-chat-submit": !0,
            type: "submit",
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v121.Send, {}),
            isDisabled: !_v18,
            transition: "none",
            _hover: {
              backgroundColor: "transparent!important"
            }
          })
        })]
      }), (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v25.createDomName)(_v0, "info"),
        className: (0, _v25.createDomName)(_v1, "info"),
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        children: (0, _v1.jsxs)(_v4.Flex, {
          id: (0, _v25.createDomName)(_v0, "characters-count"),
          className: (0, _v25.createDomName)(_v1, "characters-count"),
          as: "span",
          alignItems: "center",
          fontSize: "text-xs",
          lineHeight: "text-xs",
          padding: `${(0, _v18.rem)(8)} 0 0`,
          fontWeight: _v20 || _v21 ? "bold" : 400,
          color: _v21 ? _v115.FAILED_STATUS_COLOR : "text-secondary",
          children: [_v19, " ", _v56.T_CHARACTERS]
        })
      })]
    });
  }
  var _v125 = _v0.i(0);
  function _v126({
    id: _v0 = (0, _v5.createInteractionDomName)("qna-view"),
    firebaseContext: {
      connectionStatuses: {
        isInteractionConnected: _v1
      }
    } = (0, _v2.useManager)(_v63.InteractionFirebaseManager),
    qnaContext: {
      activeSessionId: _v2,
      activeSession: _v3,
      activeSessionQuestions: _v4,
      activeSessionPendingQuestions: _v5,
      activeSessionPinnedQuestionId: _v6,
      isHydrated: _v7,
      qnaReplies: _v8,
      qnaActions: {
        voteQuestion: _v9
      }
    } = (0, _v2.useManager)(_v55.QnAManager)
  }) {
    let {
        initialState: _v10,
        initialState: {
          sessionType: _v11
        }
      } = (0, _v7.useLiveGlobals)(),
      {
        activeQuestions: _v12
      } = (0, _v113.useQnaQuestions)(_v5, _v4);
    return ((0, _v3.useEffect)(() => {
      (0, _v114.trackViewQna)();
    }, []), (0, _v3.useEffect)(() => {
      _v7 && _v2 && _v11 === _v87.EComposerSessionType.VENUE && (0, _v86.trackVenuesViewQa)(String(_v2));
    }, [_v2, _v7, _v11]), _v7) ? _v3 ? (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      position: "relative",
      direction: "column",
      grow: 1,
      maxHeight: "100%",
      overflowY: "hidden",
      padding: `${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)} 0 ${(0, _v18.rem)(24)}`,
      children: [(0, _v1.jsx)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "questions-panel"),
        direction: "column",
        grow: 1,
        overflow: "hidden",
        rowGap: (0, _v18.rem)(16),
        children: (0, _v1.jsx)(_v107.QuestionsList, {
          id: (0, _v5.createInteractionDomName)(_v0, "questions-list"),
          tabId: _v11.EQnaTab.ACTIVE,
          questions: _v12,
          fullWidth: !0,
          pinnedQuestionId: _v6,
          scrollBackground: _v10?.interaction?.backgroundColor || "background",
          itemRenderer: _v0 => (0, _v1.jsx)(_v57.Box, {
            sx: _v83.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
            children: (0, _v1.jsx)(_v125.NewQuestionViewItem, {
              question: _v0,
              isPinned: _v0.id === _v6,
              hasVoteButton: !0,
              questionReplies: _v8[_v0.id],
              onQuestionVoted: _v9
            })
          }, _v0.id),
          placeholder: (0, _v1.jsx)(_v62.EmptyStatePlaceholder, {
            id: (0, _v5.createInteractionDomName)(_v0, "questions-list-placeholder"),
            icon: (0, _v1.jsx)(_v103.ReviewQuestion, {
              boxSize: "lg"
            }),
            control: null
          })
        })
      }), (0, _v1.jsxs)(_v57.Box, {
        id: (0, _v5.createInteractionDomName)(_v0, "input-wrapper"),
        position: "relative",
        width: "100%",
        paddingBottom: (0, _v18.rem)(16),
        children: [(0, _v1.jsx)(_v84.HorizontalScrollShadow, {
          color: _v10?.interaction?.backgroundColor || "background"
        }), (0, _v1.jsx)(_v124, {
          id: (0, _v5.createInteractionDomName)(_v0, "input-form"),
          isDisabled: !_v1
        })]
      })]
    }) : (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      children: (0, _v1.jsx)(_v62.EmptyStatePlaceholder, {
        id: (0, _v5.createInteractionDomName)(_v0, "questions-list-placeholder"),
        icon: (0, _v1.jsx)(_v103.ReviewQuestion, {
          boxSize: "lg"
        }),
        control: null
      })
    }) : (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      children: (0, _v1.jsx)(_v79.BlockingLoadingWrapper, {
        id: (0, _v5.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  let _v127 = (0, _v3.memo)(function ({
    id: _v0 = (0, _v5.createInteractionDomName)("interaction-sidebar"),
    attach: _v1,
    isPortrait: _v2,
    isStandalone: _v3,
    isFullscreen: _v4,
    maxSize: _v5,
    onOpen: _v6,
    onClose: _v7,
    onToggleExtend: _v8,
    interactionSessionContext: {
      roomInfo: {
        value: _v9
      },
      roomUser: {
        value: _v10
      }
    } = (0, _v2.useManager)(_v9.InteractionSessionManager)
  }) {
    let {
        initialState: _v11,
        initialState: {
          interaction: _v12
        }
      } = (0, _v7.useLiveGlobals)(),
      _v13 = (0, _v3.useState)(null),
      [_v14, _v15] = (0, _v3.useState)(!!(!_v10?.isCreator && _v9?.settings.authOptions.admin && !_v3)),
      {
        items: _v16
      } = function (_v0) {
        let {
            initialState: {
              interaction: _v1
            }
          } = (0, _v7.useLiveGlobals)(),
          {
            roomUser: {
              value: _v2
            }
          } = (0, _v2.useManager)(_v9.InteractionSessionManager),
          {
            isEnabled: _v3
          } = (0, _v2.useManager)(_v53.ChatManager, ({
            isEnabled: _v0
          }) => [_v0]),
          {
            polls: _v4,
            activePollId: _v5
          } = (0, _v2.useManager)(_v54.PollManager, ({
            polls: _v0,
            activePollId: _v1
          }) => [_v0, _v1]),
          {
            activeSessionId: _v6
          } = (0, _v2.useManager)(_v55.QnAManager, ({
            activeSessionId: _v0
          }) => [_v0]),
          _v7 = !!(_v2?.isCreator && !_v1?.feature?.isManagementDisabled),
          _v8 = _v0 === _v11.EInteractionModule.CHAT || _v7 || !!_v3,
          _v9 = _v0 === _v11.EInteractionModule.POLL || _v7 || !!(_v5 && _v4[_v5]),
          _v10 = _v0 === _v11.EInteractionModule.QNA || _v7 || !!_v6,
          _v11 = (0, _v3.useMemo)(() => {
            let _v0 = {
                id: _v11.EInteractionModule.CHAT,
                label: _v56.T_CHAT,
                icon: (0, _v1.jsx)(_v50.PanelChatIcon, {
                  isActive: _v0 === _v11.EInteractionModule.CHAT,
                  isManagementAccessed: _v7
                }),
                header: _v56.T_CHAT,
                headerMenu: _v7 ? (0, _v1.jsx)(_v47.ChatSettingsButton, {
                  buttonIcon: (0, _v1.jsx)(_v46.EllipsisV, {})
                }) : void 0,
                Content: _v7 ? _v65 : ({
                  id: _v0
                }) => (0, _v1.jsx)(_v66, {
                  id: _v0,
                  chatType: _v11.EChatType.PUBLIC
                })
              },
              _v1 = {
                id: _v11.EInteractionModule.POLL,
                label: _v56.T_POLLS,
                icon: (0, _v1.jsx)(_v51.PanelPollIcon, {
                  isActive: _v0 === _v11.EInteractionModule.POLL
                }),
                header: _v56.T_POLLS,
                headerMenu: _v7 ? (0, _v1.jsx)(_v48.PollSettingsButton, {
                  buttonIcon: (0, _v1.jsx)(_v46.EllipsisV, {})
                }) : void 0,
                Content: _v7 ? _v92 : _v102
              },
              _v2 = {
                id: _v11.EInteractionModule.QNA,
                label: _v56.T_QNA,
                icon: (0, _v1.jsx)(_v52.PanelQnaIcon, {
                  isActive: _v0 === _v11.EInteractionModule.QNA,
                  isManagementAccessed: _v7
                }),
                header: _v56.T_QNA,
                headerMenu: _v7 ? (0, _v1.jsx)(_v49.QnaSettingsButton, {
                  buttonIcon: (0, _v1.jsx)(_v46.EllipsisV, {})
                }) : void 0,
                Content: _v7 ? _v116 : _v126
              };
            return [].concat(_v8 ? _v0 : [], _v9 ? _v1 : [], _v10 ? _v2 : []);
          }, [_v7, _v8, _v9, _v10, _v0]),
          [_v12, _v13] = (0, _v3.useState)([]),
          _v14 = (0, _v3.useCallback)(_v0 => {
            _v0 && _v13(_v0 => [..._v0, _v0]);
          }, []),
          _v15 = (0, _v3.useCallback)(_v0 => {
            _v0 && _v13(_v0 => _v0.filter(_v0 => _v0.id !== _v0));
          }, []);
        return {
          items: (0, _v3.useMemo)(() => [..._v11, ..._v12], [_v11, _v12]),
          addItem: _v14,
          removeItem: _v15
        };
      }(_v13[0]),
      _v17 = !!(_v10?.isCreator && !_v12?.feature?.isManagementDisabled),
      _v18 = (0, _v3.useCallback)(() => _v15(!1), [_v15]);
    return (0, _v1.jsx)(_v45, {
      id: _v0,
      state: _v13,
      items: _v16,
      attach: _v1,
      isPortrait: _v2,
      isFullscreen: _v4,
      isInactiveDisabled: _v3,
      isWithHeader: _v17 || _v1 !== _v14.ESidebarAttach.TOP,
      maxSize: _v5,
      contentNotice: _v14 ? (0, _v1.jsx)(_v17.Alert, {
        margin: `${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)} 0`,
        width: "auto",
        maxWidth: "100%",
        fontSize: "text-sm",
        onClose: _v18,
        children: _v19.translations.youDoNotHaveAccessToModerateThisEvent
      }) : null,
      backgroundColor: _v11?.interaction?.backgroundColor,
      onOpen: _v6,
      onClose: _v7,
      onToggleExtend: _v8
    });
  });
  function _v128({
    id: _v0 = (0, _v5.createInteractionDomName)("widget-auto")
  }) {
    let _v1 = (0, _v15.useIsPortraitScreenOrientation)(),
      {
        initialState: {
          interaction: _v2
        }
      } = (0, _v7.useLiveGlobals)(),
      _v3 = _v2?.toolbar?.attachPosition || _v14.ESidebarAttach.RIGHT;
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v16,
      children: (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "main"),
        position: "relative",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        overflow: "hidden",
        background: "surface",
        maxWidth: "100%",
        flexDirection: _v3 === _v14.ESidebarAttach.TOP || _v3 === _v14.ESidebarAttach.BOTTOM || _v1 ? "column" : "row",
        justifyContent: _v3 !== _v14.ESidebarAttach.TOP && (_v3 !== _v14.ESidebarAttach.LEFT || _v1) ? "flex-end" : "flex-start",
        children: (0, _v1.jsx)(_v127, {
          id: (0, _v5.createInteractionDomName)(_v0, "sidebar"),
          attach: _v3,
          isPortrait: _v1,
          isStandalone: _v2?.isStandalone,
          isFullscreen: _v2?.toolbar?.panelIsFluid,
          maxSize: _v2?.toolbar?.panelMaxSize,
          onOpen: _v2?.toolbar?.panelOnOpen,
          onClose: _v2?.toolbar?.panelOnClose,
          onToggleExtend: _v2?.toolbar?.panelOnToggleExtend
        })
      })
    });
  }
  var _v129 = _v0.i(0),
    _v130 = _v0.i(0);
  function _v131({
    id: _v0 = (0, _v5.createInteractionDomName)("content"),
    activeModule: _v1,
    isManagementAccessed: _v2,
    firebaseContext: {
      isInteractionReady: _v3
    } = (0, _v2.useManager)(_v63.InteractionFirebaseManager)
  }) {
    let {
        initialState: _v4
      } = (0, _v7.useLiveGlobals)(),
      {
        id: _v5,
        header: _v6,
        headerMenu: _v7,
        Content: _v8
      } = (0, _v3.useMemo)(() => {
        switch (_v1) {
          case _v11.EInteractionModule.CHAT:
            return {
              id: _v11.EInteractionModule.CHAT,
              header: _v56.T_CHAT,
              headerMenu: _v2 ? (0, _v1.jsx)(_v47.ChatSettingsButton, {
                buttonIcon: (0, _v1.jsx)(_v46.EllipsisV, {})
              }) : void 0,
              Content: _v2 ? _v65 : ({
                id: _v0
              }) => (0, _v1.jsx)(_v66, {
                id: _v0,
                chatType: _v11.EChatType.PUBLIC
              })
            };
          case _v11.EInteractionModule.POLL:
            return {
              id: _v11.EInteractionModule.POLL,
              header: _v56.T_POLLS,
              headerMenu: _v2 ? (0, _v1.jsx)(_v48.PollSettingsButton, {
                buttonIcon: (0, _v1.jsx)(_v46.EllipsisV, {})
              }) : void 0,
              Content: _v2 ? _v92 : _v102
            };
          case _v11.EInteractionModule.QNA:
            return {
              id: _v11.EInteractionModule.QNA,
              header: _v56.T_QNA,
              headerMenu: _v2 ? (0, _v1.jsx)(_v49.QnaSettingsButton, {
                buttonIcon: (0, _v1.jsx)(_v46.EllipsisV, {})
              }) : void 0,
              Content: _v2 ? _v116 : _v126
            };
          default:
            throw new _v130.LiveError(`Unexpected activeModule provided: '${_v1}'.`, {
              code: _v129.ELiveErrorCode.INVALID_PARAMETERS
            });
        }
      }, [_v1, _v2]);
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      height: "100%",
      width: "100%",
      maxWidth: (0, _v18.rem)(640),
      flexDirection: "column",
      flexGrow: 1,
      flexBasis: 0,
      overflow: "hidden",
      backgroundColor: _v4?.interaction?.backgroundColor || "background",
      children: _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v2 ? (0, _v1.jsxs)(_v4.Flex, {
          id: (0, _v5.createInteractionDomName)(_v0, "content-header", _v5),
          justifyContent: "space-between",
          alignItems: "center",
          padding: (0, _v18.rem)(16),
          children: [(0, _v1.jsx)(_v21.Text, {
            id: (0, _v5.createInteractionDomName)(_v0, "header"),
            variant: "heading-sm",
            color: "text-primary",
            children: _v6
          }), _v7 || null]
        }) : null, (0, _v1.jsx)(_v44.LiveErrorBoundary, {
          additionalInfo: _v5,
          component: "InteractionContent",
          children: (0, _v1.jsx)(_v8, {
            id: (0, _v5.createInteractionDomName)(_v0, "item-content", _v5)
          })
        }, _v5)]
      }) : (0, _v1.jsx)(_v79.BlockingLoadingWrapper, {
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  function _v132({
    children: _v0,
    ..._v1
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      background: (0, _v36.useColorModeValue)("slate.50", "grayscale.800"),
      height: (0, _v18.rem)(56),
      width: (0, _v18.rem)(56),
      borderRadius: "50%",
      textAlign: "center",
      flexShrink: 0,
      justifyContent: "center",
      alignItems: "center",
      ..._v1,
      children: _v0
    });
  }
  _v0.s(["InteractionRoomLayout", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("widget-room"),
    interactionSessionContext: {
      sessionId: _v1,
      roomInfo: {
        value: _v2
      },
      roomUser: {
        value: _v3
      },
      roomPassword: _v4,
      roomHashedPassword: _v5
    } = (0, _v2.useManager)(_v9.InteractionSessionManager)
  }) {
    let _v6 = (0, _v12.useLogger)("📡 BC in InteractionRoomLayout"),
      {
        initialState: {
          interaction: _v7
        }
      } = (0, _v7.useLiveGlobals)(),
      _v8 = (0, _v3.useRef)(null),
      _v9 = !!(_v3?.isCreator && !_v7?.feature?.isManagementDisabled),
      _v10 = _v2?.settings.authOptions || {},
      _v11 = _v2?.settings.privacy === _v10.EInteractionRoomPrivacy.PASSWORD,
      _v12 = !0 === _v10[_v10.EInteractionAuthOption.REGISTRANT],
      _v13 = _v7?.feature?.module,
      _v14 = !_v13 || _v13 === _v11.EInteractionModule.AUTO,
      {
        isChannelActive: _v15,
        sendChannelMessage: _v16,
        subscribe: _v17,
        closeChannel: _v18
      } = (0, _v13.useBroadcastChannel)({
        name: _v8.interactionToolsConfig.BROADCAST_CHANNEL.NAME
      }),
      _v19 = (0, _v3.useCallback)(() => {
        _v8.current && (_v6.info("Unsubscribe from ask_data messages"), _v8.current());
      }, [_v6]),
      _v20 = (0, _v3.useCallback)(() => {
        _v8.current || (_v8.current = _v17(function (_v0) {
          if (_v6.info("Subscribe to ask_data messages"), _v0.type !== _v8.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.ASK_DATA || String(_v0?.payload?.sessionId) !== String(_v1)) return;
          _v6.info("Receive ask_data message:", _v0);
          let _v1 = {
            type: _v8.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.NEW_DATA,
            payload: {
              sessionId: String(_v1),
              type: _v0.payload.type
            }
          };
          _v0.payload.type === _v6.ECredentialsType.PASSWORD && _v4 && (_v1.payload.value = _v4), _v0.payload.type === _v6.ECredentialsType.HASHED_PASSWORD && _v5 && (_v1.payload.value = _v5), "registrant_uuid" === _v0.payload.type && _v3?.id && (_v1.payload.value = _v3.id), _v1.payload.value && (_v6.info("Post new_data message as a response", _v1), _v16(_v1));
        }));
      }, [_v6, _v5, _v4, _v3?.id, _v16, _v1, _v17]);
    return (0, _v3.useEffect)(() => {
      _v15 && (_v11 || _v12 ? _v20() : _v19());
    }, [_v15, _v12, _v11, _v20, _v19]), (0, _v3.useEffect)(() => () => {
      _v19(), _v6.info("Close channel"), _v18();
    }, [_v6, _v19, _v18]), _v14 ? (0, _v1.jsx)(_v128, {}) : (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v16,
      children: (0, _v1.jsx)(_v131, {
        id: (0, _v5.createInteractionDomName)(_v0, "content"),
        activeModule: _v13,
        isManagementAccessed: _v9
      })
    });
  }], 0), _v0.s(["IconCircle", 0, _v132], 0);
  var _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  _v0.s(["InteractionPasswordLayout", 0, function ({
    id: _v0 = (0, _v25.createDomName)("password-screen"),
    className: _v1 = (0, _v25.createDomName)("password-screen"),
    interactionSessionContext: {
      sessionId: _v2,
      roomUser: {
        error: _v3,
        isLoading: _v4
      },
      interactionSessionActions: {
        checkPasswordAuth: _v5
      }
    } = (0, _v2.useManager)(_v9.InteractionSessionManager)
  }) {
    let [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10,, _v11] = (0, _v136.useDomInputValue)(""),
      _v12 = !!(_v3 && !_v4 && _v8),
      {
        isChannelActive: _v13,
        sendChannelMessage: _v14
      } = (0, _v13.useBroadcastChannel)({
        name: _v8.interactionToolsConfig.BROADCAST_CHANNEL.NAME
      }),
      _v15 = (0, _v3.useCallback)(async _v0 => {
        if (_v0.preventDefault(), _v0.stopPropagation(), _v9(!0), _v10 && (_v7(!0), await _v5(_v10), _v13)) try {
          _v14({
            type: _v8.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.NEW_DATA,
            payload: {
              sessionId: String(_v2),
              type: _v6.ECredentialsType.PASSWORD,
              value: _v10
            }
          });
        } catch (_v0) {
          _v139.Logger.getGlobal().error("Failed to send password layout channel message:", _v0), (0, _v138.trackLiveError)(_v0, {
            component: "InteractionPasswordLayout",
            category: _v137.ELiveErrorCategory.INTERACTION
          });
        }
      }, [_v10, _v5, _v13, _v2, _v14]);
    return (0, _v3.useEffect)(() => {
      _v3 && _v7(!1);
    }, [_v3]), (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      className: _v1,
      sx: _v16,
      children: (0, _v1.jsx)(_v57.Box, {
        margin: "auto",
        paddingX: (0, _v18.rem)(8),
        children: (0, _v1.jsxs)("form", {
          id: (0, _v25.createDomName)(_v0, "form"),
          className: (0, _v25.createDomName)(_v1, "form"),
          onSubmit: _v15,
          children: [(0, _v1.jsx)(_v93.Header, {
            size: "lg",
            textAlign: "center",
            marginBottom: (0, _v18.rem)(30),
            color: "text-primary",
            children: _v19.translations.passwordRequired
          }), (0, _v1.jsxs)(_v4.Flex, {
            children: [(0, _v1.jsxs)(_v133.FormControl, {
              isInvalid: _v12,
              children: [(0, _v1.jsx)(_v134.Password, {
                id: (0, _v25.createDomName)(_v0, "form-input"),
                className: (0, _v25.createDomName)(_v1, "form-input"),
                size: "md",
                placeholder: _v19.translations.enterPassword,
                value: _v10,
                isDisabled: _v4,
                onChange: _v11
              }), (0, _v1.jsx)(_v135.FormErrorMessage, {
                children: _v12 ? _v19.translations.incorrectPassword : ""
              })]
            }), (0, _v1.jsx)(_v80.Button, {
              id: (0, _v25.createDomName)(_v0, "form-button"),
              className: (0, _v25.createDomName)(_v1, "form-button"),
              type: "submit",
              isDisabled: !_v10 || _v4,
              isLoading: _v6,
              marginLeft: (0, _v18.rem)(16),
              children: _v19.translations.submit
            })]
          })]
        })
      })
    });
  }], 0);
  var _v140 = _v0.i(0);
  let _v141 = {
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
      flexGrow: 1,
      flexBasis: 0,
      overflow: "auto",
      width: "100%",
      maxWidth: (0, _v18.rem)(640),
      minHeight: (0, _v18.rem)(280),
      background: "surface"
    },
    _v142 = {
      flexDirection: "column",
      padding: (0, _v18.rem)(16),
      color: "text-primary",
      maxWidth: (0, _v18.rem)(420),
      width: "100%",
      margin: "auto"
    },
    _v143 = {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: (0, _v18.rem)(24),
      rowGap: (0, _v18.rem)(16)
    };
  _v0.s(["LOGIN_CONTAINER_WRAPPER_STYLE", 0, _v142, "LOGIN_CONTEXT_LABELS_STYLE", 0, _v143, "LOGIN_SCREEN_WRAPPER_STYLE", 0, _v141], 0), _v0.s(["InteractionNoAccessLayout", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("interaction-no-access"),
    isWithIcon: _v1,
    reason: _v2
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v16,
      children: (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "content"),
        sx: _v141,
        children: (0, _v1.jsx)(_v4.Flex, {
          id: (0, _v5.createInteractionDomName)(_v0, "form"),
          sx: _v142,
          children: (0, _v1.jsxs)(_v4.Flex, {
            sx: _v143,
            children: [_v1 ? (0, _v1.jsx)(_v132, {
              id: (0, _v5.createInteractionDomName)(_v0, "icon"),
              children: (0, _v1.jsx)(_v140.Comment, {
                boxSize: "sm"
              })
            }) : null, (0, _v1.jsx)(_v97.Paragraph, {
              size: "lg",
              textAlign: "center",
              color: "text-secondary",
              children: _v2
            })]
          })
        })
      })
    });
  }], 0);
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0);
  function _v148(_v0) {
    let _v1 = (0, _v12.useLogger)("auth"),
      {
        roomInfo: {
          value: _v2
        },
        roomUser: {
          error: _v3,
          isLoading: _v4
        },
        isRoomUserAuthAttempted: _v5,
        interactionSessionActions: _v6
      } = (0, _v2.useManager)(_v9.InteractionSessionManager),
      _v7 = !!_v3 && _v3?.data?.authType === _v0,
      _v8 = (0, _v3.useMemo)(() => {
        if (!_v7 || _v4) return null;
        if ((0, _v147.isApiError)(_v3)) switch (_v3.data.body.errorCode) {
          case _v129.EApiErrorCode.ROOM_AUTHORIZATION_FAILED:
            return _v19.translations.errorRoomJoinFailed + ".";
          case _v129.EApiErrorCode.ROOM_AUTHORIZATION_FAILED_SESSION_ENDED:
            return _v19.translations.eventHasEnded + ".";
          case _v129.EApiErrorCode.ROOM_AUTHORIZATION_FAILED_NOT_LIVE_YET:
            return _v19.translations.eventHasNotStarted + ".";
        }
        return _v19.translations.requestError;
      }, [_v3, _v4, _v7]);
    return {
      isLoading: _v4,
      isLoginFailed: _v7,
      isRoomUserAuthAttempted: _v5,
      roomInfo: _v2,
      log: _v1,
      error: _v3,
      errorMessage: _v8,
      onLogin: (0, _v3.useCallback)(_v0 => _v6.authorizeInteractionUser({
        type: _v0,
        ..._v0
      }), [_v0, _v6]),
      onResetError: (0, _v3.useCallback)(() => {
        _v6.resetAuthError();
      }, [_v6])
    };
  }
  function _v149({
    id: _v0 = (0, _v5.createInteractionDomName)("vimeo-user-login"),
    loginType: _v1 = _v10.EInteractionAuthOption.VIMEO,
    buttonRenderer: _v2
  }) {
    let [_v3, _v4] = (0, _v3.useState)(!1),
      [_v5, _v6] = (0, _v3.useState)("login"),
      _v7 = (0, _v146.useViewer)(),
      {
        isLoading: _v8,
        isLoginFailed: _v9,
        errorMessage: _v10,
        onLogin: _v11
      } = _v148(_v1),
      _v12 = !!(_v7 && !_v7?.user),
      _v13 = (0, _v3.useCallback)(() => _v11(), [_v11]),
      _v14 = (0, _v3.useCallback)(() => _v4(!1), []),
      _v15 = (0, _v3.useCallback)(() => _v4(!0), []),
      _v16 = (0, _v3.useCallback)(async () => {
        _v7.refreshJwt && (await _v7.refreshJwt(), await (0, _v144.nextAsyncQueue)(), await _v11()), _v4(!1);
      }, [_v7, _v11]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v12 ? (0, _v1.jsx)(_v145.LoginJoinModal, {
        type: _v5,
        xsrft: _v7.xsrft,
        isShowing: _v3,
        onDismiss: _v14,
        onSuccess: _v16,
        redirectUrl: window.location.href,
        redirectUrlAfterSocialLogin: window.location.href,
        updateInitialType: _v6
      }) : null, _v2({
        id: (0, _v5.createInteractionDomName)(_v0, "button"),
        label: _v19.translations.loginWithVimeo,
        isDisabled: _v8,
        onClick: _v12 ? _v15 : _v13
      }), _v9 ? (0, _v1.jsx)(_v97.Paragraph, {
        id: (0, _v5.createInteractionDomName)(_v0, "error"),
        size: "xs",
        color: "red.500",
        children: _v10
      }) : null]
    });
  }
  _v0.s(["useInteractionLoginOption", 0, _v148], 0), _v0.s(["VimeoUserLogin", 0, _v149], 0), _v0.s(["AdminLogin", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("admin-login")
  }) {
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: `${(0, _v18.rem)(8)} ${(0, _v18.rem)(16)}`,
      maxWidth: (0, _v18.rem)(480),
      margin: `${(0, _v18.rem)(16)} ${(0, _v18.rem)(16)} ${(0, _v18.rem)(24)} ${(0, _v18.rem)(16)}`,
      borderRadius: (0, _v18.rem)(8),
      backgroundColor: "background-blur",
      children: [(0, _v1.jsx)(_v93.Header, {
        size: "xs",
        children: _v19.translations.moderatorLogIn
      }), (0, _v1.jsx)(_v97.Paragraph, {
        size: "md",
        color: "text-secondary",
        children: _v19.translations.ifYouAreModeratorForThisEvent
      }), (0, _v1.jsx)(_v149, {
        id: _v0,
        loginType: _v10.EInteractionAuthOption.ADMIN,
        buttonRenderer: ({
          label: _v0,
          ..._v1
        }) => (0, _v1.jsx)(_v80.Button, {
          size: "md",
          variant: "tertiary",
          flexShrink: 0,
          ..._v1,
          children: _v0
        })
      })]
    });
  }], 0);
  var _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  _v0.s(["AnonymousLogin", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("anonymous-login")
  }) {
    let [_v1, _v2] = (0, _v3.useState)(""),
      _v3 = _v1.trim(),
      _v4 = _v3.length >= _v8.interactionToolsConfig.AUTHORIZATION.MIN_DISPLAYNAME_LENGTH && _v3.length <= _v8.interactionToolsConfig.AUTHORIZATION.MAX_DISPLAYNAME_LENGTH,
      {
        isLoading: _v5,
        isLoginFailed: _v6,
        error: _v7,
        errorMessage: _v8,
        onResetError: _v9,
        onLogin: _v10
      } = _v148(_v10.EInteractionAuthOption.ANONYMOUS),
      _v11 = (0, _v3.useCallback)(_v0 => {
        _v2(_v0.target.value), _v7 && _v9();
      }, [_v7, _v9]),
      _v12 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v10({
          roomDisplayName: _v3
        });
      }, [_v3, _v10]);
    return (0, _v1.jsxs)("form", {
      onSubmit: _v12,
      id: _v0,
      children: [(0, _v1.jsxs)(_v133.FormControl, {
        isInvalid: _v6,
        children: [(0, _v1.jsx)(_v150.FormLabel, {
          color: "text-primary",
          fontWeight: 700,
          marginBottom: (0, _v18.rem)(8),
          children: _v19.translations.name
        }), (0, _v1.jsx)(_v119.Input, {
          id: (0, _v5.createInteractionDomName)(_v0, "input"),
          size: "md",
          value: _v1,
          isDisabled: _v5,
          fontSize: (0, _v18.rem)(_v39.browserConfig.BROWSER?.isMobile ? 16 : 14),
          onChange: _v11
        })]
      }), (0, _v1.jsx)(_v80.Button, {
        id: (0, _v5.createInteractionDomName)(_v0, "button"),
        size: "md",
        type: "submit",
        isDisabled: _v5 || !_v4,
        width: "100%",
        marginTop: (0, _v18.rem)(24),
        children: _v19.translations.joinAudience
      }), _v8 ? (0, _v1.jsx)(_v17.Alert, {
        status: "error",
        margin: `${(0, _v18.rem)(8)} 0 0 0`,
        onClose: _v9,
        children: (0, _v1.jsx)(_v151.AlertDescription, {
          margin: 0,
          children: _v8
        })
      }) : null]
    });
  }], 0);
}