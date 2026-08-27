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
  let _v10 = () => {
    let {
        teamInfo: {
          owner: _v0,
          teamData: _v1
        },
        isTeamInfoLoading: _v2
      } = (0, _v2.useContext)(_v8.ManageTeamStateCtx),
      _v3 = (0, _v9.useViewer)(),
      {
        loading: _v4,
        capabilities: _v5
      } = (0, _v3.useCapability)(["canViewSsoTeamSettings"], _v3?.teamUser?.ownerId);
    if (_v2 || _v4) return (0, _v1.jsx)(_v1.Fragment, {});
    if (_v5?.canViewSsoTeamSettings === !1) throw new _v4.UnauthorizedError();
    return (0, _v1.jsx)(_v6.SingleSignOnPage, {
      userId: _v1.ownerId,
      rolesInfo: _v0.metadata?.connections?.teamMembers?.roles
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
  }), _v10.getLayout = _v0 => (0, _v7.getTeamSettingsPageLayout)(_v0, {
    contentColumn: "compactSettings"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}