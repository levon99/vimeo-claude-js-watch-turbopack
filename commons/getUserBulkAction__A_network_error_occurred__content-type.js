{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    where: {
      userId: _v1,
      batchId: _v2
    },
    ..._v3
  }) {
    return (0, _v1.measureLatency)("getUserBulkAction", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/bulk_actions/${_v2}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  var _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0);
  _v0.s(["useGetUserBulkAction", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v6.useGctlConfig)();
    return (0, _v4.default)(_v2 ? `/users/${_v2.where.userId}/bulk_actions/${_v2.where.batchId}${(0, _v5.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v3({
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