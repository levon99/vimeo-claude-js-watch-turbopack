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
  let _v9 = Error("Account dictionary team owner is unavailable"),
    _v10 = () => {
      let {
          teamInfo: _v0,
          isTeamInfoLoading: _v1
        } = (0, _v2.useContext)(_v6.ManageTeamStateCtx),
        _v2 = _v0.teamData.ownerId;
      return _v1 ? (0, _v1.jsx)(_v4.Spinner, {}) : _v2 ? (0, _v1.jsx)(_v8.AccountDictionaryRoute, {
        ownerUserId: _v2
      }) : (0, _v1.jsx)(_v7.ErrorPage, {
        error: _v9,
        useBokeh: !0
      });
    };
  (0, _v3.withPageSetup)({
    requireLogin: !0,
    capability: "canSeeAiSettings",
    inlineViewer: !0,
    noIndex: !0
  }), _v10.getLayout = _v0 => (0, _v5.getLayout)(_v0, {
    contentColumn: "dictionary"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}