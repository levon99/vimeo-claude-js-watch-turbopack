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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v3.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v12 = ({
      match: _v0,
      history: _v1
    }) => {
      let _v2 = (({
        match: _v0
      }) => {
        let _v1 = (0, _v10.useOptionalViewer)(),
          _v2 = Number(_v0.params.id),
          {
            data: _v3,
            error: _v4
          } = (0, _v9.useGetAlbum)(() => _v1 && _v2 ? {
            where: {
              albumId: _v2
            },
            select: ["user.uri", "embed"]
          } : null, {
            revalidateOnFocus: !1
          });
        if (_v4) {
          let _v0 = _v4 instanceof _v8.NetworkError ? _v4.status : void 0;
          if (404 === _v0) throw new _v7.ResourceNotFoundError("Showcase not found.");
          if (403 === _v0) throw new _v7.ForbiddenError("You are unauthorized for this action.");
          if (401 === _v0) throw new _v7.UnauthorizedError("Your session is no longer valid.");
          if (void 0 === _v0 && _v4 instanceof TypeError) return null;
          throw _v4;
        }
        if (_v3 && !_v3.embed) throw new _v7.UnauthorizedError("You are unauthorized for this action.");
        return _v1 && _v3 ? {
          viewer: _v1
        } : null;
      })({
        match: _v0
      });
      return _v2 ? (0, _v1.jsx)(_v11, {
        viewer: _v2.viewer,
        match: _v0,
        history: _v1,
        location: _v1.location
      }) : (0, _v1.jsx)(_v6, {});
    };
  var _v13 = _v0.i(0);
  let _v14 = ({
    match: _v0,
    history: _v1
  }) => (0, _v1.jsx)(_v12, {
    match: _v0,
    history: _v1
  });
  (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0
  }), _v14.getLayout = _v0 => (0, _v1.jsx)(_v13.ReactRouterLayout, {
    path: "/manage/showcases/:id",
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v14], 0);
}