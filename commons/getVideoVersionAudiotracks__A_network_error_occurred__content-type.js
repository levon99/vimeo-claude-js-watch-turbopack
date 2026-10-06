{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      versionId: _v3
    },
    ..._v4
  }) {
    return (0, _v2.measureLatency)("getVideoVersionAudiotracks", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/versions/${_v3}/audiotracks?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
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
  _v0.i(0);
  var _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0);
  _v0.s(["useGetVideoVersionAudiotracks", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v6.useGctlConfig)();
    return (0, _v5.default)(_v2 ? `/videos/${_v2.where.videoId}/versions/${_v2.where.versionId}/audiotracks${(0, _v1.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v4({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }], 0);
}