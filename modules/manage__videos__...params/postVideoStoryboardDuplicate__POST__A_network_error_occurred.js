{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      storyboardId: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("postVideoStoryboardDuplicate", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/storyboards/${_v4}/duplicate?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["postVideoStoryboardDuplicate", 0, _v3]);
}