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
    _v10 = _v0.i(0);
  let _v11 = () => {
    let _v0 = (0, _v6.useLocation)(),
      _v1 = (0, _v9.checkSideBarDrawerActive)(_v0.pathname),
      _v2 = _v0.pathname.includes(_v10.ShowcaseRouteMap.ANALYTICS) ? "right" : "left",
      _v3 = [_v1 && (0, _v1.jsx)(_v8.SidebarDrawerLoading, {
        location: _v2
      }, "sidebar"), (0, _v1.jsx)(_v7.MainContentLoading, {}, "main")],
      _v4 = ("right" === _v2 ? _v3.reverse() : _v3).filter(Boolean);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v4
    });
  };
  _v0.s(["LoadingState", 0, _v11], 0);
  let _v12 = {
    HomeSideNavContent: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.HomeSideNavContent), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    WayfinderSideNav: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.WayfinderSideNav), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    Footer: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.Footer), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    VideoListTable: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.VideoListTable), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v5.LoadingStateList, {})
    }),
    VideoListModalWrapper: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.VideoListModalWrapper), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    DeleteShowcaseModal: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.DeleteShowcaseModal), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    ResourceShareModalWrapper: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.ResourceShareModalWrapper), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    UpsellModalWrapper: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.UpsellModalWrapper), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    DeleteLiveEventModal: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.DeleteLiveEventModal), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    EventCreationModal: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.EventCreationModal), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    SaveWithoutPremiumModal: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.SaveWithoutPremiumModal), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    MobileViewSettings: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.MobileViewSettings), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v11, {})
    }),
    VideoListTableRow: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.VideoListTableRow), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v3.ContentRowLoading, {})
    }),
    VideoListSidebarRow: (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.VideoListSidebarRow), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: () => (0, _v1.jsx)(_v4.ContentRowSideDrawerLoading, {})
    })
  };
  _v0.s(["dynamicImportComponents", 0, _v12], 0);
}