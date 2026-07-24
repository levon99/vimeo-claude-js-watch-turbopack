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
      {
        loading: _v2,
        capabilities: _v3
      } = (0, _v3.useCapability)(["createLiveEvents", "hasEnterprise"], _v0),
      {
        settings: _v4,
        isLoadingResponse: _v5
      } = (0, _v7.useOrionSettings)();
    if (_v2 || _v1 || _v5 || !_v0) return (0, _v1.jsx)(_v6.Spinner, {});
    if (!_v4.enable_webinar_viewer_anonymization || _v3?.hasEnterprise === !1 || _v3?.createLiveEvents === !1) throw new _v4.UnauthorizedError();
    return (0, _v1.jsx)(_v10.WebinarViewerAnonymisation, {
      userId: _v0
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
  }), _v11.getLayout = _v8.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}