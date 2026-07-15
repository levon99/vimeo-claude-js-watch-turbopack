{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = () => (0, _v1.jsx)(_v4.Center, {
    h: "100vh",
    w: "100vw",
    children: (0, _v1.jsx)(_v5.Spinner, {
      size: "sm"
    })
  });
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = (0, _v3.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v11 = ({
      match: _v0,
      history: _v1
    }) => {
      let _v2 = (({
        match: _v0
      }) => {
        let _v1 = (0, _v9.useOptionalViewer)(),
          _v2 = Number(_v0.params.id),
          {
            data: _v3,
            error: _v4
          } = (0, _v8.useGetAlbum)(() => _v1 && _v2 ? {
            where: {
              albumId: _v2
            },
            select: ["user.uri", "embed"]
          } : null, {
            revalidateOnFocus: !1
          });
        if (_v4) throw new _v7.ResourceNotFoundError("Showcase not found.");
        if (_v3 && !_v3.embed) throw new _v7.UnauthorizedError("You are unauthorized for this action.");
        return _v1 && _v3 ? {
          viewer: _v1
        } : null;
      })({
        match: _v0
      });
      return _v2 ? (0, _v1.jsx)(_v10, {
        viewer: _v2.viewer,
        match: _v0,
        history: _v1,
        location: _v1.location
      }) : (0, _v1.jsx)(_v6, {});
    };
  var _v12 = _v0.i(0);
  let _v13 = ({
    match: _v0,
    history: _v1
  }) => (0, _v1.jsx)(_v11, {
    match: _v0,
    history: _v1
  });
  (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      omitEsi: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0
  }), _v13.getLayout = _v0 => (0, _v1.jsx)(_v12.ReactRouterLayout, {
    path: "/manage/showcases/:id",
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v13], 0);
}