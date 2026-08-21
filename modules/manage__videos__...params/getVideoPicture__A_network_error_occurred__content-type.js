{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      pictureId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("getVideoPicture", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/pictures/${_v3}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
      videoId: _v1,
      pictureId: _v2
    },
    ..._v3
  }) {
    return (0, _v1.measureLatency)("deleteVideoPicture", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/pictures/${_v2}`, {
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
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      pictureId: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("patchVideoPicture", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/pictures/${_v4}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["deleteVideoPicture", 0, _v4, "getVideoPicture", 0, _v3, "patchVideoPicture", 0, _v5]);
}