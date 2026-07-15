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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = () => {
    let {
        teamInfo: {
          teamData: {
            ownerId: _v0
          }
        },
        isTeamInfoLoading: _v1
      } = (0, _v2.useContext)(_v9.ManageTeamStateCtx),
      _v2 = (0, _v10.useViewer)(),
      {
        loading: _v3,
        capabilities: _v4
      } = (0, _v4.useCapability)(["canViewAuditLogsPage"], _v2?.teamUser?.ownerId);
    if (!_v0 || _v1 || _v3) return (0, _v1.jsx)(_v7.Spinner, {});
    if (_v4?.canViewAuditLogsPage === !1) throw new _v5.UnauthorizedError();
    return (0, _v1.jsx)(_v3.default, {
      ownerId: _v0
    });
  };
  (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0
  }), _v11.getLayout = _v8.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}