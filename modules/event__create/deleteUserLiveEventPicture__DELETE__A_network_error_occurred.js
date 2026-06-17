{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    where: {
      userId: _v1,
      liveEventId: _v2,
      thumbnailId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("deleteUserLiveEventPicture", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/live_events/${_v2}/pictures/${_v3}`, {
        ..._v4,
        method: "DELETE"
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
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      liveEventId: _v4,
      thumbnailId: _v5
    },
    ..._v6
  }) {
    return (0, _v1.measureLatency)("patchUserLiveEventPicture", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/live_events/${_v4}/pictures/${_v5}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v6,
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
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("getUserLiveEventPictures", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/live_events/${_v3}/pictures?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      liveEventId: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("postUserLiveEventPictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/live_events/${_v4}/pictures?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  _v0.s(["deleteUserLiveEventPicture", 0, _v3, "patchUserLiveEventPicture", 0, _v4], 0), _v0.s(["getUserLiveEventPictures", 0, _v5, "postUserLiveEventPictures", 0, _v6], 0);
}