{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      eventSeriesId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v1.measureLatency)("getUserEventSeryEvents", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/event_series/${_v3}/events?${(0, _v2.searchQueryString)(_v4)}&fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      eventSeriesId: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("postUserEventSeryEvents", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/event_series/${_v4}/events?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      eventSeriesId: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("patchUserEventSeryEvents", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/event_series/${_v4}/events?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  _v0.s(["getUserEventSeryEvents", 0, _v3, "patchUserEventSeryEvents", 0, _v5, "postUserEventSeryEvents", 0, _v4]);
}