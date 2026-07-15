{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  (0, _v4.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v3.useContext)(_v6.ViewerContext),
      _v1 = (0, _v2.useRouter)();
    if (!_v0 || !_v1) return null;
    let _v2 = "string" == typeof _v1.query.userId ? _v1.query.userId : "",
      _v3 = {
        apiUrl: _v0.apiUrl,
        jwt: _v0.jwt,
        ownerId: parseInt(_v2)
      };
    return (0, _v1.jsx)(_v5.TeamBrandingPage, {
      apiConfig: _v3
    });
  }], 0);
}