{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  (0, _v2.withPageSetup)(async ({
    params: _v0,
    baseUrl: _v1
  }) => _v0 && _v0.sessionType && _v0.sessionId ? {
    props: {
      hasThemeSupport: !0,
      providers: {
        mode: "export",
        vpaas: {
          enabled: !0,
          baseUrl: _v1,
          hasVpaasViewer: !0
        }
      }
    }
  } : {
    notFound: !0
  }, {
    requireLogin: !1,
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v1.jsx)(_v3.LiveRtcRoot, {
    ..._v0
  })], 0);
}