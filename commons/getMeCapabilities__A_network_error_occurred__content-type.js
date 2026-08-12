{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v1.measureLatency)("getMeCapabilities", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/capabilities?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getMeCapabilities", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    apiUrl: _v0,
    capabilities: _v1,
    headers: _v2,
    jwt: _v3,
    userId: _v4
  }) {
    let _v5,
      _v6 = _v1.reduce((_v0, _v1) => {
        let _v2 = _v1.match(/^(can|has)(.+)/)?.[2];
        return _v0[_v2 ? _v2[0].toLowerCase() + _v2.slice(1) : _v1] = _v1, _v0;
      }, {}),
      _v7 = {
        select: (0, _v5.getKeys)(_v6),
        headers: {
          Authorization: `jwt ${_v3}`,
          "Content-Type": "application/json",
          ...(_v2 || {})
        },
        baseUrl: _v0.startsWith("https://") ? _v0 : `https://${_v0}`
      };
    return Object.keys(_v5 = null != _v4 ? await (0, _v4.getUserCapabilities)({
      ..._v7,
      where: {
        userId: _v4
      }
    }) : await _v3(_v7)).reduce((_v0, _v1) => {
      let _v2 = _v5[_v1];
      if ("boolean" == typeof _v2 && _v6[_v1]) _v0[_v6[_v1]] = _v2;else throw Error("response is not well formed");
      return _v0;
    }, {});
  }
  _v0.s(["fetchAndFormatCapabilties", 0, _v6], 0);
}