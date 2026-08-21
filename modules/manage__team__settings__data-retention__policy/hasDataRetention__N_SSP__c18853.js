{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.i(0);
  var _v10 = _v0.i(0);
  let _v11 = () => {
    let _v0 = (0, _v3.useContext)(_v9.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      {
        loading: _v2,
        capabilities: _v3
      } = (0, _v4.useCapability)(["hasDataRetention"], _v0?.teamUser?.ownerId),
      {
        policy: _v4
      } = _v1.query;
    _v4 = Array.isArray(_v4) ? _v4[0] : _v4;
    let _v5 = _v0?.teamUser?.ownerId || _v0?.user?.id || null;
    if (!_v5 || !_v4 || _v2) return (0, _v1.jsx)(_v8.default, {});
    if (_v3?.hasDataRetention === !1) throw new _v5.UnauthorizedError();
    return (0, _v1.jsx)(_v10.default, {
      userId: _v5,
      policyId: parseInt(_v4)
    });
  };
  (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v11.getLayout = _v7.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}