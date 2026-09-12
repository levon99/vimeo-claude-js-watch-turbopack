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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
    canSeePlaylist: _v0 = !1,
    showComments: _v1 = !1,
    playerTopGap: _v2 = !1,
    showcaseConfig: _v3,
    isLiveEventView: _v4 = !1,
    ..._v5
  }) => {
    let {
        isSideBySideActive: _v6,
        isSideModuleOpen: _v7,
        isShowcaseLayout: _v8
      } = (0, _v13.useLayout)(),
      _v9 = _v3?.isShowcaseClipView || !1,
      _v10 = _v8 ? (0, _v16.createShowcaseGridTemplateAreasConfig)(_v9, _v4 || _v1, _v1) : (0, _v16.createGridTemplateAreasConfig)(_v1, _v0),
      _v11 = (0, _v16.returnActiveGridTemplateName)(_v7, _v6),
      _v12 = (0, _v11.useBreakpointValue)({
        base: _v10.MOBILE,
        md: _v10[_v11]
      }, {
        ssr: !0,
        fallback: "md"
      });
    return (0, _v1.jsx)(_v15.ClipPageBase, {
      "data-vh-view": "vh-player-view",
      isSideBySideActive: _v6,
      gridTemplateAreas: _v12,
      showcaseConfig: _v3,
      playerTopGap: _v2,
      ..._v5
    });
  };
  _v17.Media = (0, _v4.forwardRef)(({
    children: _v0,
    backgroundColor: _v1
  }, _v2) => (0, _v1.jsx)(_v14.ModuleWrapper, {
    ref: _v2,
    gridArea: "media",
    w: "100%",
    h: "100%",
    zIndex: 2,
    backgroundColor: _v1,
    position: "unset",
    children: _v0
  })), _v17.Comments = ({
    children: _v0,
    globalNavigationHidden: _v1
  }) => {
    let {
        isSideModuleOpen: _v2,
        isSideBySideActive: _v3,
        isShowcaseLayout: _v4
      } = (0, _v13.useLayout)(),
      [_v5, _v6] = (0, _v9.useToken)("space", ["space.200", "space.300"]),
      _v7 = (0, _v16.getAsideTopStyles)(_v5, _v6, _v1),
      _v8 = (0, _v16.getAsideHeightStyles)(_v5, _v6, _v1, _v4),
      _v9 = _v3 && !_v2 ? (0, _v10.rem)(0) : (0, _v10.rem)(640),
      _v10 = _v3 && !_v2;
    return (0, _v1.jsx)(_v14.ModuleWrapper, {
      gridArea: "comments",
      minH: (0, _v10.rem)(420),
      maxH: _v9,
      h: _v3 && !_v2 ? _v8 : void 0,
      w: "100%",
      position: _v10 ? "sticky" : "relative",
      top: _v10 ? _v7 : "auto",
      children: _v0
    });
  }, _v17.Playlist = ({
    children: _v0
  }) => (0, _v1.jsx)(_v14.ModuleWrapper, {
    gridArea: "playlist",
    h: "max-content",
    children: _v0
  }), _v17.ShowcasePlaylist = ({
    children: _v0
  }) => {
    let {
      isSideBySideActive: _v1
    } = (0, _v13.useLayout)();
    return (0, _v1.jsx)(_v5.Box, {
      as: _v2.motion.div,
      layout: !_v1 && "position",
      backgroundColor: "background",
      gridArea: "playlist",
      h: "max-content",
      children: _v0
    });
  }, _v17.SideModule = ({
    children: _v0,
    globalNavigationHidden: _v1
  }) => {
    let {
        isShowcaseLayout: _v2
      } = (0, _v13.useLayout)(),
      [_v3, _v4] = (0, _v9.useToken)("space", ["space.200", "space.300"]),
      _v5 = (0, _v16.getAsideTopStyles)(_v3, _v4, _v1),
      _v6 = (0, _v16.getAsideHeightStyles)(_v3, _v4, _v1, _v2);
    return (0, _v1.jsx)(_v14.ModuleWrapper, {
      gridArea: "sideModule",
      w: "100%",
      minH: (0, _v10.rem)(420),
      maxH: (0, _v10.rem)(0),
      h: _v6,
      position: "sticky",
      top: _v5,
      children: _v0
    });
  }, _v17.ContentStack = ({
    children: _v0
  }) => (0, _v1.jsx)(_v8.VStack, {
    gridArea: "contentStack",
    spacing: {
      base: 200,
      lg: 300
    },
    align: "stretch",
    w: "100%",
    children: _v0
  }), _v17.MobileDrawer = ({
    children: _v0,
    playerContainerRef: _v1,
    containerStyle: _v2,
    contentStyle: _v3,
    globalNavigationHidden: _v4
  }) => {
    let {
        isMobileDrawerOpen: _v5,
        setActiveMobileDrawer: _v6
      } = (0, _v13.useLayout)(),
      [_v7] = (0, _v9.useToken)("space", ["space.200"]),
      _v8 = _v4 ? 0 : _v12.NAV_HEIGHT,
      _v9 = _v1.current?.getBoundingClientRect()?.bottom || 0,
      _v10 = (0, _v3.useInView)(_v1, {
        margin: `-${_v8}px 0px 0px 0px`
      }),
      _v11 = Math.max(_v9, _v8),
      _v12 = (0, _v4.useCallback)(() => {
        _v5 && _v6?.("");
      }, [_v5, _v6]);
    return (0, _v4.useEffect)(() => {
      let _v0 = document.getElementById("global-nav");
      return _v0 && _v0.addEventListener("click", _v12), () => {
        _v0 && _v0.removeEventListener("click", _v12);
      };
    }, [_v12]), (0, _v1.jsx)(_v6.Drawer, {
      isOpen: _v5,
      onClose: () => _v6?.(""),
      placement: "bottom",
      blockScrollOnMount: !0,
      closeOnOverlayClick: !1,
      trapFocus: !1,
      children: (0, _v1.jsx)(_v7.DrawerContent, {
        style: _v3,
        containerProps: {
          style: _v2,
          top: _v10 ? `calc(min(calc(${(0, _v10.rem)(_v11)} + ${_v7}), calc(100vh - 350px)))` : (0, _v10.rem)(_v11),
          bottom: 0
        },
        sx: {
          '&[data-placement="bottom"]': {
            maxW: "100vw",
            mb: 0,
            top: "inherit"
          },
          "@media screen and (max-width: 767px) and (orientation: landscape)": {
            '&[data-placement="bottom"]': {
              top: (0, _v10.rem)(_v8)
            }
          }
        },
        children: (0, _v1.jsx)(_v14.ModuleWrapper, {
          h: "100%",
          children: _v0
        })
      })
    });
  }, _v0.s(["ClipLayout", 0, _v17]);
}