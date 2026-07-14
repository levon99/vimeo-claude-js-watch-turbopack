{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    playerAssetUrls: _v0,
    history: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("link", {
        rel: "manifest",
        href: "/vimeocreate_manifest"
      })
    }), (0, _v1.jsx)(_v4.VimeoCreateDefaultSetup, {
      playerAssetUrls: _v0,
      history: _v1
    })]
  });
  (0, _v3.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.path;
    return {
      props: {
        path: `/create/${_v1}`,
        layoutOptions: {
          globalNotifications: !1
        },
        hasUploader: !0,
        hasThemeSupport: ["edit", "interactive"].includes(_v1),
        omitEsi: !0
      }
    };
  }, {
    requireLogin: !0,
    capability: "hasCreation",
    redirect: "/features/video-editor",
    inlineViewer: !0,
    inlinePlayerAssets: !0,
    inlineMagistoResources: !0
  }), _v6.getLayout = _v0 => (0, _v1.jsx)(_v5.ReactRouterLayout, {
    path: "/create",
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v6], 0);
}