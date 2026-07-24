{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v1.measureLatency)("postVideosRestore", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/restore`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["postVideosRestore", 0, _v3]);
}