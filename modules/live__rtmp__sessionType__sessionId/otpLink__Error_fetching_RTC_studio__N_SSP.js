{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  (0, _v3.withPageSetup)(async _v0 => {
    try {
      let _v0 = await (0, _v4.getInternalPageLiveRtcStudio)({
        query: {
          sessionType: _v0.params?.sessionType,
          sessionId: _v0.params?.sessionId
        },
        select: ["otpLink"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      if (_v0.otpLink) return {
        redirect: {
          destination: _v0.otpLink,
          permanent: !1
        }
      };
    } catch (_v0) {
      return _v2.serverLogger.error({
        err: _v0,
        session_type: _v0.params?.sessionType,
        session_id: _v0.params?.sessionId
      }, "Error fetching RTC studio"), {
        notFound: !0
      };
    }
    return {
      props: {
        hasThemeSupport: !0
      }
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v1.jsx)(_v5.LiveRtmpRoot, {
    ..._v0
  })], 0);
}