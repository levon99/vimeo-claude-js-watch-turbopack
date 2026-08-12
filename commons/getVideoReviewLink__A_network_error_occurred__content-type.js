{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      reviewLinkId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v1.measureLatency)("getVideoReviewLink", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/review_links/${_v3}?${(0, _v2.searchQueryString)(_v4)}&fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
    where: {
      videoId: _v1,
      reviewLinkId: _v2
    },
    ..._v3
  }) {
    return (0, _v1.measureLatency)("deleteVideoReviewLink", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/review_links/${_v2}`, {
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
      reviewLinkId: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("patchVideoReviewLink", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/review_links/${_v4}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
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
  _v0.s(["deleteVideoReviewLink", 0, _v4, "getVideoReviewLink", 0, _v3, "patchVideoReviewLink", 0, _v5]);
}