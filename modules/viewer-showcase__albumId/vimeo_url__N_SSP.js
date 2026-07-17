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
    albumId: _v0,
    showcaseMetadata: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v6.ShowcaseHead, {
      showcaseMetadata: _v1
    }), (0, _v1.jsx)(_v5.ViewerShowcasesAuthorization, {
      albumIdOrUrl: _v0
    })]
  });
  (0, _v3.withPageSetup)(async ({
    params: _v0,
    vimeoConfig: _v1
  }) => {
    let _v2 = _v0?.albumId;
    if (!_v2 || Array.isArray(_v2)) return {
      notFound: !0
    };
    let _v3 = _v1.get("vimeo_url"),
      _v4 = await (0, _v7.fetchShowcaseMetadata)(_v3, _v2);
    return {
      props: {
        albumId: _v2,
        hasPlayerAPI: !0,
        hasThemeSupport: !0,
        ...(_v4 && {
          showcaseMetadata: _v4
        })
      }
    };
  }, {
    staffOnly: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v8.getLayout = _v0 => (0, _v1.jsx)(_v2.ErrorBoundary, {
    errorPage: _v4.ErrorPage,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}