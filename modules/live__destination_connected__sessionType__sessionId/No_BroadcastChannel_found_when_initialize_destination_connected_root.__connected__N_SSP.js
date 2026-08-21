{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7() {
    let {
      sessionType: _v0,
      sessionId: _v1,
      social: _v2
    } = (0, _v3.useRouter)().query;
    return (0, _v4.useEffect)(() => {
      if (!window.BroadcastChannel) throw new _v6.LiveError("No BroadcastChannel found when initialize destination connected root.", {
        code: _v5.ELiveErrorCode.INITIALIZATION,
        data: {
          sessionId: _v1,
          sessionType: _v0
        }
      });
      new window.BroadcastChannel(`${_v0}-${_v1}-destinations`).postMessage({
        action: "connected",
        social: _v2
      });
    }, [_v0, _v1, _v2]), (0, _v1.jsx)(_v1.Fragment, {});
  }
  (0, _v2.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsx)(_v7, {})], 0);
}