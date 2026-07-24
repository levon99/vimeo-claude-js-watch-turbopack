{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = () => {
    let _v0 = (0, _v4.useContext)(_v6.ViewerContext),
      [_v1, _v2] = (0, _v4.useState)(!1),
      [_v3, _v4] = (0, _v4.useState)(null),
      _v5 = (0, _v3.useRouter)();
    return (0, _v4.useEffect)(() => {
      _v2(!0), _v0 && (_v0.user || window.close());
    }, [_v0]), (0, _v4.useEffect)(() => {
      _v5.isReady && ("string" == typeof _v5.query[_v7.SESSION_ID] ? _v4(_v5.query[_v7.SESSION_ID]) : window.close());
    }, [_v5]), _v1 && _v3 ? (0, _v2.jsx)(_v5.TeleprompterPoppedOut, {
      session: _v3
    }) : null;
  };
  _v8.getLayout = _v0 => _v0, (0, _v1.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      },
      hasThemeSupport: !0
    }
  }), {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}