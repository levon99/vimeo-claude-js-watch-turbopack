{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    where: {
      videoId: _v1,
      customerId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("getInternalPageLmsContentCustomerId", "GET", async () => {
      let _v0 = await fetch(`${_v0}/internal/page/lms_content/${_v1}/${_v2}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v5 = _v0.i(0);
  (0, _v1.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.clipHash ? `${_v0.params?.clipId}:${_v0.params?.clipHash}` : Number(_v0.params?.clipId),
      _v2 = Number(_v0.params?.customerId);
    if (!_v1 || !_v2) return {
      notFound: !0
    };
    try {
      await _v4({
        where: {
          customerId: _v2,
          videoId: _v1
        },
        baseUrl: _v0.baseUrl,
        headers: _v0.headers
      });
    } catch (_v0) {
      return {
        notFound: !0
      };
    }
    return _v0.res.setHeader("Content-Security-Policy", "frame-ancestors *"), {
      props: {
        isIframe: !0,
        layoutOptions: {
          globalNotifications: !1
        },
        hasThemeSupport: !0
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  });
  let _v6 = _v5.LMSCoursePage;
  _v0.s(["default", 0, _v6], 0);
}