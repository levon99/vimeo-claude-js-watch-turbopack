{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.i(0);
  var _v9 = _v0.i(0);
  let _v10 = () => {
    let _v0 = (0, _v2.useContext)(_v8.ManageTeamStateCtx),
      {
        capabilities: _v1
      } = (0, _v3.useCapability)(["hasDataRetention"], _v0?.teamInfo?.teamData?.ownerId),
      _v2 = _v0?.teamInfo?.teamData?.ownerId;
    if (_v0?.isTeamInfoLoading) return (0, _v1.jsx)(_v6.LoadSpinner, {});
    if (_v1?.hasDataRetention === !1) throw new _v4.UnauthorizedError();
    return (0, _v1.jsx)(_v9.default, {
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
  }), _v10.getLayout = _v7.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}