{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    albumId: _v0
  }) => (0, _v1.jsx)(_v5.ViewerShowcasesAuthorization, {
    albumIdOrUrl: _v0
  });
  (0, _v3.withPageSetup)(({
    params: _v0
  }) => {
    let _v1 = _v0?.albumId;
    return !_v1 || Array.isArray(_v1) ? {
      notFound: !0
    } : {
      props: {
        albumId: _v1,
        hasPlayerAPI: !0,
        hasThemeSupport: !0,
        metadata: {
          routeRule: "/viewer-showcase/[albumId]",
          className: "ShowcaseMetadata"
        }
      }
    };
  }, {
    staffOnly: !0
  }), _v6.getLayout = _v0 => (0, _v1.jsx)(_v2.ErrorBoundary, {
    errorPage: _v4.ErrorPage,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v6], 0);
}