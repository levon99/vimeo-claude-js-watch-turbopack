{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(async () => ({
    default: (await _v0.A(0)).MsTeamsWelcomePage
  }), {
    loadableGenerated: {
      modules: [0]
    }
  });
  (0, _v5.withPageSetup)(({
    res: _v0
  }) => (_v0.removeHeader("x-frame-options"), {
    props: {
      isIframe: !0,
      layoutOptions: {
        globalNotifications: !1
      },
      hasThemeSupport: !0
    }
  })), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v3.useRouter)(),
      _v1 = _v0?.query?.appId;
    if (void 0 === _v1) return null;
    if (!_v6.MS_TEAMS_ALLOWED_APP_ID.includes(Number(_v1))) throw new _v4.ResourceNotFoundError();
    return (0, _v1.jsx)(_v7, {});
  }], 0);
}