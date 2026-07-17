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
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = ({
    workspaceUuid: _v0
  } = {}) => {
    let _v1 = (0, _v2.useContext)(_v7.ManageTeamStateCtx),
      {
        capabilities: _v2
      } = (0, _v3.useCapability)(["hasDataRetention"], _v1?.teamInfo?.teamData?.ownerId),
      _v3 = _v1?.teamInfo?.teamData?.ownerId,
      _v4 = _v1?.isTeamInfoLoading;
    if (!_v3 || _v4) return (0, _v1.jsx)(_v8.default, {});
    if (_v2?.hasDataRetention === !1) throw new _v4.UnauthorizedError();
    return (0, _v1.jsx)(_v9.default, {
      userId: _v3,
      wsMode: !!_v0,
      inputPolicyData: (0, _v10.getBlankPolicyData)()
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
  }), _v11.getLayout = _v6.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}