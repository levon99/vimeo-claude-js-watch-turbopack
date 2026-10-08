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
  _v0.s(["useSidebarDrawer", 0, _v0 => {
    let _v1 = (0, _v2.useHistory)(),
      _v2 = (0, _v6.useStore)(_v0 => _v0.appearanceStore.legacyBannerHeight),
      _v3 = (0, _v1.useCallback)(() => (0, _v7.getSideDrawerHeaderText)(_v1.location.pathname), [_v1.location.pathname]),
      _v4 = (0, _v1.useMemo)(() => {
        let _v0 = (0, _v7.getParentPath)(_v1?.location?.pathname),
          _v1 = (0, _v7.getCurrentPath)(_v1?.location?.pathname),
          _v2 = [_v8.ShowcaseRouteMap.INFO, _v8.ShowcaseRouteMap.SEO, _v8.ShowcaseRouteMap.REGISTRATION, _v8.ShowcaseRouteMap.CUSTOMIZATION, _v8.ShowcaseRouteMap.ROKU_TV_APPS, _v8.ShowcaseRouteMap.AMAZON_TV_APPS, _v8.ShowcaseRouteMap.ANALYTICS, _v8.ShowcaseRouteMap.PLAYBACK, _v8.ShowcaseRouteMap.LAYOUT, _v8.ShowcaseRouteMap.LAYOUT_NAVIGATION, _v8.ShowcaseRouteMap.LAYOUT_FEATURED, _v8.ShowcaseRouteMap.LAYOUT_VIDEO_GRID];
        return (0, _v7.isPathMatch)(_v2, _v0, _v1);
      }, [_v1?.location?.pathname]),
      _v5 = `calc(100vh - ${(0, _v5.rem)(160)} - ${(0, _v5.rem)(_v2)})`;
    return {
      enableTransition: _v4,
      getHeaderText: _v3,
      containerConfig: {
        right: {
          Container: _v4.Flex,
          height: _v5,
          mr: "md"
        },
        left: {
          Container: _v3.Center,
          height: _v5,
          mr: "auto"
        }
      }[_v0],
      panelBodyMaxHeight: _v5
    };
  }], 0);
  var _v9 = _v0.i(0);
  _v0.s(["useSideDrawerMaxWidth", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)(_v7.getSideDrawerMaxWidth);
    return (0, _v1.useLayoutEffect)(() => {
      let _v0 = () => _v1((0, _v7.getSideDrawerMaxWidth)());
      return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, []), (0, _v9.useDebouncedValue)(_v0, 150);
  }], 0);
}