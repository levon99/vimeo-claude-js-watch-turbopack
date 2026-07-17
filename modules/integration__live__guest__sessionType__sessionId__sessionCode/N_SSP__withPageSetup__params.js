{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  (0, _v2.withPageSetup)(async _v0 => {
    let {
      params: _v1
    } = _v0;
    return _v1 && _v1.sessionType && _v1.sessionId && _v1.sessionCode ? {
      props: {
        hasThemeSupport: !0
      }
    } : {
      notFound: !0
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v1.jsx)(_v4.VpaasProvider, {
    children: (0, _v1.jsx)(_v3.LiveGuestRoot, {
      ..._v0
    })
  })], 0);
}