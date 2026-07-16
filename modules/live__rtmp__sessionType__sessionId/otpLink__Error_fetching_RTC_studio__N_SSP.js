{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  (0, _v2.withPageSetup)(async _v0 => {
    try {
      let _v0 = await (0, _v3.getInternalPageLiveRtcStudio)({
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
      return console.error("Error fetching RTC studio:", _v0), {
        notFound: !0
      };
    }
    return {
      props: {
        hasThemeSupport: !0
      }
    };
  }, {
    omitEsi: !0,
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v1.jsx)(_v4.LiveRtmpRoot, {
    ..._v0
  })], 0);
}