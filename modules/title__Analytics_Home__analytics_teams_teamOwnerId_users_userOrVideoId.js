{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    let _v1 = (0, _v5.useViewer)();
    return (0, _v1.jsx)(_v3.AnalyticsLayout, {
      ..._v0,
      viewer: _v1
    });
  }
  _v7.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("title", {
        children: "Analytics Home"
      })
    }), (0, _v1.jsx)(_v6.ReactRouterLayout, {
      path: ["/analytics/teams/:teamOwnerId/users/:userOrVideoId", "/analytics/teams/:teamOwnerId/videos/:userOrVideoId", "/analytics/teams/:teamOwnerId/users", "/analytics/teams/:teamOwnerId/videos", "/analytics/teams", "/analytics/video", "/analytics/region", "/analytics/source", "/analytics/device", "/analytics/date", "/analytics/bandwidth/video", "/analytics/bandwidth", "/analytics/v2/:reportName", "/analytics"],
      children: _v0
    })]
  }), (0, _v4.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasEppo: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}