{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = async _v0 => {
    let _v1 = _v0.params?.sessionType,
      _v2 = _v0.params?.sessionId;
    if (!_v2 || !_v1) return {
      notFound: !0
    };
    try {
      if ("event" === _v1 || "live_event" === _v1) {
        let _v0 = await (0, _v1.getInternalPageLiveRtcStudio)({
          query: {
            sessionType: _v1,
            sessionId: _v2
          },
          select: ["otpLink", "eventType"],
          headers: _v0.headers,
          baseUrl: _v0.baseUrl
        });
        if (_v0.otpLink) return {
          redirect: {
            destination: _v0.otpLink,
            permanent: !1
          }
        };
        if ("venue" === _v0.eventType) return {
          notFound: !0
        };
      }
    } catch {
      return {
        notFound: !0
      };
    }
    return {
      props: {
        hasThemeSupport: !0,
        omitEsi: !0
      }
    };
  };
  _v0.s(["getLiveRtcStudioServerSideProps", 0, _v2]);
}