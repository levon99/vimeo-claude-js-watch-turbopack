{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      logoId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("getUserCustomlogo", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/customlogos/${_v3}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  async function _v4({
    baseUrl: _v0,
    where: {
      userId: _v1,
      logoId: _v2
    },
    ..._v3
  }) {
    return (0, _v1.measureLatency)("deleteUserCustomlogo", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/customlogos/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["deleteUserCustomlogo", 0, _v4, "getUserCustomlogo", 0, _v3]);
}