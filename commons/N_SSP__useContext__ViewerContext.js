{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8() {
    let _v0 = (0, _v2.useContext)(_v7.ViewerContext),
      {
        teamInfo: _v1,
        isTeamInfoLoading: _v2
      } = (0, _v2.useContext)(_v5.ManageTeamStateCtx);
    if (!_v0?.user) return null;
    if (_v2) return (0, _v1.jsx)(_v6.TeamBrandingPageLoader, {});
    let _v3 = {
      apiUrl: _v0?.apiUrl,
      jwt: _v0?.jwt,
      ownerId: _v1.teamData.ownerId
    };
    return (0, _v1.jsx)(_v6.TeamBrandingPage, {
      apiConfig: _v3
    });
  }
  (0, _v3.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v8.getLayout = _v4.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}