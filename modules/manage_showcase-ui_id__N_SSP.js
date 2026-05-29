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
    match: _v0,
    history: _v1
  }) => {
    let _v2 = (0, _v2.useContext)(_v6.ViewerContext);
    return _v2 ? (0, _v1.jsx)(_v4.default, {
      viewer: _v2,
      match: _v0,
      history: _v1,
      location: _v1.location
    }) : (0, _v1.jsx)(_v5.default, {});
  };
  (0, _v3.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    staffOnly: !0
  }), _v8.getLayout = _v0 => (0, _v1.jsx)(_v7.ReactRouterLayout, {
    path: "/manage/showcase-ui/:id",
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}