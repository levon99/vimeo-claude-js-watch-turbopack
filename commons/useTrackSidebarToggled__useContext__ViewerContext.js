{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useTrackSidebarToggled", 0, () => {
    let _v0 = (0, _v1.useContext)(_v4.ViewerContext),
      _v1 = _v0?.user?.isTeamUser ?? !1,
      {
        trackSidebarToggled: _v2
      } = (0, _v3.useWatchTracking)();
    return (0, _v1.useCallback)((_v0, _v1, _v2) => _v2({
      sidebarAction: _v0,
      page: (0, _v2.deriveCanonicalPage)(new URL(window.location.href), {
        is_team_user: _v1
      }),
      version: _v1 ? "2" : "1",
      isMobile: _v2
    }), [_v2, _v1]);
  }]);
}