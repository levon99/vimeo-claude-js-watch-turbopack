{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      webinarId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v2.measureLatency)("getWebinar", "GET", async () => {
      let _v0 = await fetch(`${_v0}/webinars/${_v2}?${(0, _v3.searchQueryString)(_v3)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v4,
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
    let _v1 = _v0.params?.webinarUuid;
    return !_v1 || Array.isArray(_v1) ? {
      notFound: !0
    } : {
      redirect: {
        destination: (await _v4({
          where: {
            webinarId: _v1
          },
          select: ["link"],
          headers: _v0.headers,
          baseUrl: _v0.baseUrl
        })).link || "",
        permanent: !0
      }
    };
  }, {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => null], 0);
}