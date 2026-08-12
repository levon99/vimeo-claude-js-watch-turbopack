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
    let _v0 = (0, _v2.useContext)(_v6.ManageTeamStateCtx),
      _v1 = (0, _v9.useViewer)(),
      _v2 = _v0?.teamInfo?.teamData?.ownerId,
      _v3 = _v0?.isTeamInfoLoading,
      {
        loading: _v4,
        capabilities: _v5
      } = (0, _v3.useCapability)(["hasLegalHoldsActive"], _v1?.teamUser?.ownerId);
    if (_v3 || _v4 || !_v2) return (0, _v1.jsx)(_v8.default, {});
    if (_v5?.hasLegalHoldsActive === !1) throw new _v4.UnauthorizedError();
    return (0, _v1.jsx)(_v10.default, {
      userId: _v2
    });
  };
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v11.getLayout = _v7.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}