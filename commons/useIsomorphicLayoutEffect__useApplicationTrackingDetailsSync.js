{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0.i(0).environmentConfig.IS_SSR ? _v2.useEffect : _v2.useLayoutEffect;
  _v0.s(["useIsomorphicLayoutEffect", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useApplicationTrackingDetailsSync", 0, function ({
    sessionApplicationType: _v0 = null,
    sessionType: _v1 = null,
    sessionId: _v2 = null,
    userId: _v3 = null,
    userLocale: _v4 = null,
    teamOwnerId: _v5 = null,
    teamAccountType: _v6 = null,
    teamUser: _v7 = null
  }) {
    _v3(() => {
      (0, _v1.updateTrackingConfig)({
        DETAILS: {
          SESSION_APPLICATION: _v0,
          SESSION_TYPE: _v1,
          SESSION_ID: _v2,
          USER_ID: _v3,
          USER_LOCALE: _v4
        },
        BIG_PICTURE_TEAM_CONTEXT_BASE: {
          teamOwnerId: _v5,
          teamAccountType: _v6,
          teamUser: _v7
        }
      }), (0, _v5.updateDatadogGlobals)((0, _v4.getLiveApplicationGlobals)());
    }, [_v0, _v1, _v2, _v3, _v4]);
  }], 0);
}