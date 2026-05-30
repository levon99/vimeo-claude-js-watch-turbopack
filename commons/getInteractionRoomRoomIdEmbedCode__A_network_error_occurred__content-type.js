{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      roomType: _v2,
      roomId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v1.measureLatency)("getInteractionRoomRoomIdEmbedCode", "GET", async () => {
      let _v0 = await fetch(`${_v0}/interaction_rooms/${_v2}/${_v3}/embed_code?${(0, _v2.searchQueryString)(_v4)}&fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getInteractionRoomRoomIdEmbedCode", 0, _v3]);
}