{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      webinarEventUuid: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("getWebinarsEvent", "GET", async () => {
      let _v0 = await fetch(`${_v0}/webinars/events/${_v2}?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
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
  (0, _v1.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.eventUuid;
    if (!_v1 || Array.isArray(_v1)) return {
      notFound: !0
    };
    try {
      let _v0 = await _v4({
        where: {
          webinarEventUuid: _v1
        },
        select: ["link"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      if (!_v0 || !_v0.link) return {
        notFound: !0
      };
      return {
        redirect: {
          destination: _v0.link,
          permanent: !0
        }
      };
    } catch (_v0) {
      if (_v0.status < 500) return {
        notFound: !0
      };
      throw _v0;
    }
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => null], 0);
}