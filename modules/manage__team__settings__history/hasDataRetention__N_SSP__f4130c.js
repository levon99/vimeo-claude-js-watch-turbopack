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
    let _v0 = (0, _v9.useViewer)(),
      {
        loading: _v1,
        capabilities: _v2
      } = (0, _v3.useCapability)(["hasDataRetention"], _v0?.teamUser?.ownerId),
      {
        teamInfo: {
          teamData: {
            ownerId: _v3
          }
        },
        isTeamInfoLoading: _v4
      } = (0, _v2.useContext)(_v8.ManageTeamStateCtx);
    if (_v1 || _v4 || !_v3) return (0, _v1.jsx)(_v6.Spinner, {});
    if (_v2?.hasDataRetention === !1) throw new _v4.UnauthorizedError();
    return (0, _v1.jsx)(_v10.HistoryPage, {
      userId: _v3
    });
  };
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    omitEsi: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v11.getLayout = _v7.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}