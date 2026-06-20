{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  (0, _v3.withPageSetup)(_v0 => {
    let _v1 = _v0.params?.sessionType;
    return "events" === _v1 && (_v1 = _v6.ENTITY_TYPE.EVENT), {
      props: {
        hasThemeSupport: !0,
        sessionType: _v1,
        sessionId: _v0.params?.sessionId,
        section: _v0.params?.section
      }
    };
  }, {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    sessionType: _v0,
    sessionId: _v1,
    section: _v2
  }) => {
    let _v3 = (0, _v2.useContext)(_v7.ViewerContext),
      [_v4, _v5] = (0, _v2.useState)("");
    return _v3 ? (0, _v1.jsx)(_v5.UpsellContext.Provider, {
      value: {
        message: _v4,
        setMessage: _v5
      },
      children: (0, _v1.jsx)(_v4.LiveLeadCapture, {
        sessionType: _v0,
        sessionId: _v1,
        section: _v2
      })
    }) : null;
  }], 0);
}