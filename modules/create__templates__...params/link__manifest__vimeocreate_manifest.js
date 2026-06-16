{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    playerAssetUrls: _v0,
    history: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("link", {
        rel: "manifest",
        href: "/vimeocreate_manifest"
      })
    }), (0, _v1.jsx)(_v5.VimeoCreateDefaultSetup, {
      playerAssetUrls: _v0,
      history: _v1
    })]
  });
  (0, _v3.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.path,
      _v2 = _v1?.includes("/create/templates/category/") ? "/create/templates/category/:category/:subcategory" : "/create/templates/:template",
      _v3 = _v1?.match(/^\/create\/templates\/\w+/) ? "CreateTemplateMetadata" : "CreateTemplateGalleryMetadata";
    return {
      props: {
        path: `/create/${_v1}`,
        layoutOptions: {
          globalNotifications: !1
        },
        hasUploader: !1,
        hasThemeSupport: !1,
        metadata: {
          className: _v3,
          routeRule: _v2,
          args: {
            preloadCreateTemplates: "CreateTemplateGalleryMetadata" === _v3
          }
        }
      }
    };
  }), _v7.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.DefaultNavigation, {
      fixed: !1,
      hasThemeSupport: !1
    }), (0, _v1.jsx)(_v6.ReactRouterLayout, {
      path: "/create/templates",
      children: _v0
    })]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}