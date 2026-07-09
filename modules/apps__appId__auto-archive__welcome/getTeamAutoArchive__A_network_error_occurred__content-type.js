{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v1.measureLatency)("getTeamAutoArchive", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/auto_archive?${(0, _v2.searchQueryString)(_v3)}&fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v1.measureLatency)("deleteTeamAutoArchive", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/auto_archive`, {
        ..._v2,
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
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v1.measureLatency)("getUserAutoArchiveMsTeams", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/auto_archive/ms_teams?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  _v0.s(["deleteTeamAutoArchive", 0, _v4, "getTeamAutoArchive", 0, _v3], 0), _v0.s(["getUserAutoArchiveMsTeams", 0, _v5], 0);
}