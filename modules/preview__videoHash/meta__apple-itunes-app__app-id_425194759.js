{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    playerAssetUrls: _v0,
    history: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("meta", {
        name: "apple-itunes-app",
        content: "app-id=425194759"
      }), (0, _v1.jsx)("link", {
        rel: "manifest",
        href: "/vimeocreate_manifest"
      })]
    }), (0, _v1.jsx)(_v6.VimeoCreateDefaultSetup, {
      playerAssetUrls: _v0,
      history: _v1
    })]
  });
  _v8.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.Ribbon, {
      animate: !1,
      style: {
        height: (0, _v3.rem)(3)
      }
    }), (0, _v1.jsx)(_v7.ReactRouterLayout, {
      path: "/preview",
      children: _v0
    })]
  }), (0, _v4.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    inlineMagistoResources: !0,
    omitEsi: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}