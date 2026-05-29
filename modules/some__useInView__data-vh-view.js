{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.i(0);
  var _v4 = _v0.i(0);
  let _v5 = {
    some: 0,
    all: 1
  };
  function _v6(_v0, {
    root: _v1,
    margin: _v2,
    amount: _v3,
    once: _v4 = !1
  } = {}) {
    let [_v5, _v6] = (0, _v3.useState)(!1);
    return (0, _v3.useEffect)(() => {
      if (!_v0.current || _v4 && _v5) return;
      let _v0 = {
        root: _v1 && _v1.current || void 0,
        margin: _v2,
        amount: _v3
      };
      return function (_v0, _v1, {
        root: _v2,
        margin: _v3,
        amount: _v4 = "some"
      } = {}) {
        let _v5 = (0, _v4.resolveElements)(_v0),
          _v6 = new WeakMap(),
          _v7 = new IntersectionObserver(_v0 => {
            _v0.forEach(_v0 => {
              let _v1 = _v6.get(_v0.target);
              if (!!_v1 !== _v0.isIntersecting) if (_v0.isIntersecting) {
                let _v0 = _v1(_v0);
                "function" == typeof _v0 ? _v6.set(_v0.target, _v0) : _v7.unobserve(_v0.target);
              } else "function" == typeof _v1 && (_v1(_v0), _v6.delete(_v0.target));
            });
          }, {
            root: _v2,
            rootMargin: _v3,
            threshold: "number" == typeof _v4 ? _v4 : _v5[_v4]
          });
        return _v5.forEach(_v0 => _v7.observe(_v0)), () => _v7.disconnect();
      }(_v0.current, () => (_v6(!0), _v4 ? void 0 : () => _v6(!1)), _v0);
    }, [_v1, _v0, _v2, _v4, _v3]), _v5;
  }
  _v0.s(["useInView", 0, _v6], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = ({
    canSeePlaylist: _v0 = !1,
    showComments: _v1 = !1,
    showcaseConfig: _v2,
    isLiveEventView: _v3 = !1,
    ..._v4
  }) => {
    let {
        isSideBySideActive: _v5,
        isSideModuleOpen: _v6,
        isShowcaseLayout: _v7
      } = (0, _v15.useLayout)(),
      _v8 = _v2?.isShowcaseClipView || !1,
      _v9 = _v7 ? (0, _v18.createShowcaseGridTemplateAreasConfig)(_v8, _v3 || _v1, _v1) : (0, _v18.createGridTemplateAreasConfig)(_v1, _v0),
      _v10 = (0, _v18.returnActiveGridTemplateName)(_v6, _v5),
      _v11 = (0, _v13.useBreakpointValue)({
        base: _v9.MOBILE,
        md: _v9[_v10]
      }, {
        ssr: !0,
        fallback: "md"
      });
    return (0, _v1.jsx)(_v17.ClipPageBase, {
      "data-vh-view": "vh-player-view",
      isSideBySideActive: _v5,
      gridTemplateAreas: _v11,
      showcaseConfig: _v2,
      ..._v4
    });
  };
  _v19.Media = (0, _v3.forwardRef)(({
    children: _v0,
    backgroundColor: _v1
  }, _v2) => (0, _v1.jsx)(_v16.ModuleWrapper, {
    ref: _v2,
    gridArea: "media",
    w: "100%",
    h: "100%",
    zIndex: 2,
    backgroundColor: _v1,
    position: "unset",
    children: _v0
  })), _v19.Comments = ({
    children: _v0,
    globalNavigationHidden: _v1
  }) => {
    let {
        isSideModuleOpen: _v2,
        isSideBySideActive: _v3,
        isShowcaseLayout: _v4
      } = (0, _v15.useLayout)(),
      [_v5, _v6] = (0, _v11.useToken)("space", ["space.200", "space.300"]),
      _v7 = (0, _v18.getAsideTopStyles)(_v5, _v6, _v1),
      _v8 = (0, _v18.getAsideHeightStyles)(_v5, _v6, _v1, _v4),
      _v9 = _v3 && !_v2 ? (0, _v12.rem)(0) : (0, _v12.rem)(640),
      _v10 = _v3 && !_v2;
    return (0, _v1.jsx)(_v16.ModuleWrapper, {
      gridArea: "comments",
      minH: (0, _v12.rem)(420),
      maxH: _v9,
      h: _v3 && !_v2 ? _v8 : void 0,
      w: "100%",
      position: _v10 ? "sticky" : "relative",
      top: _v10 ? _v7 : "auto",
      children: _v0
    });
  }, _v19.Playlist = ({
    children: _v0
  }) => (0, _v1.jsx)(_v16.ModuleWrapper, {
    gridArea: "playlist",
    h: "max-content",
    children: _v0
  }), _v19.ShowcasePlaylist = ({
    children: _v0
  }) => {
    let {
      isSideBySideActive: _v1
    } = (0, _v15.useLayout)();
    return (0, _v1.jsx)(_v7.Box, {
      as: _v2.motion.div,
      layout: !_v1 && "position",
      backgroundColor: "background",
      gridArea: "playlist",
      h: "max-content",
      children: _v0
    });
  }, _v19.SideModule = ({
    children: _v0,
    globalNavigationHidden: _v1
  }) => {
    let {
        isShowcaseLayout: _v2
      } = (0, _v15.useLayout)(),
      [_v3, _v4] = (0, _v11.useToken)("space", ["space.200", "space.300"]),
      _v5 = (0, _v18.getAsideTopStyles)(_v3, _v4, _v1),
      _v6 = (0, _v18.getAsideHeightStyles)(_v3, _v4, _v1, _v2);
    return (0, _v1.jsx)(_v16.ModuleWrapper, {
      gridArea: "sideModule",
      w: "100%",
      minH: (0, _v12.rem)(420),
      maxH: (0, _v12.rem)(0),
      h: _v6,
      position: "sticky",
      top: _v5,
      children: _v0
    });
  }, _v19.ContentStack = ({
    children: _v0
  }) => (0, _v1.jsx)(_v10.VStack, {
    gridArea: "contentStack",
    spacing: {
      base: 200,
      lg: 300
    },
    align: "stretch",
    w: "100%",
    children: _v0
  }), _v19.MobileDrawer = ({
    children: _v0,
    playerContainerRef: _v1
  }) => {
    let {
        isMobileDrawerOpen: _v2,
        setActiveMobileDrawer: _v3
      } = (0, _v15.useLayout)(),
      [_v4] = (0, _v11.useToken)("space", ["space.200"]),
      _v5 = _v1.current?.getBoundingClientRect()?.bottom || 0,
      _v6 = _v6(_v1, {
        margin: `-${_v14.NAV_HEIGHT}px 0px 0px 0px`
      }),
      _v7 = Math.max(_v5, _v14.NAV_HEIGHT),
      _v8 = (0, _v3.useCallback)(() => {
        _v2 && _v3?.("");
      }, [_v2, _v3]);
    return (0, _v3.useEffect)(() => {
      let _v0 = document.getElementById("global-nav");
      return _v0 && _v0.addEventListener("click", _v8), () => {
        _v0 && _v0.removeEventListener("click", _v8);
      };
    }, [_v8]), (0, _v1.jsx)(_v8.Drawer, {
      isOpen: _v2,
      onClose: () => _v3?.(""),
      placement: "bottom",
      blockScrollOnMount: !0,
      closeOnOverlayClick: !1,
      trapFocus: !1,
      children: (0, _v1.jsx)(_v9.DrawerContent, {
        containerProps: {
          top: _v6 ? `calc(min(calc(${(0, _v12.rem)(_v7)} + ${_v4}), calc(100vh - 350px)))` : (0, _v12.rem)(_v7),
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
              top: (0, _v12.rem)(_v14.NAV_HEIGHT)
            }
          }
        },
        children: (0, _v1.jsx)(_v16.ModuleWrapper, {
          h: "100%",
          children: _v0
        })
      })
    });
  }, _v0.s(["ClipLayout", 0, _v19], 0);
}