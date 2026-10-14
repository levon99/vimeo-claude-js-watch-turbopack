{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      texttrackId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v2.measureLatency)("getVideoTexttrack", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/texttracks/${_v3}?${(0, _v3.searchQueryString)(_v4)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  async function _v5({
    baseUrl: _v0,
    where: {
      videoId: _v1,
      texttrackId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("deleteVideoTexttrack", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/texttracks/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      texttrackId: _v4
    },
    ..._v5
  }) {
    return (0, _v2.measureLatency)("patchVideoTexttrack", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/texttracks/${_v4}?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  _v0.s(["deleteVideoTexttrack", 0, _v5, "getVideoTexttrack", 0, _v4, "patchVideoTexttrack", 0, _v6], 0);
  var _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useDeleteVideoTexttrack", 0, function () {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v1.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/texttracks/${_v0.where.texttrackId}${(0, _v1.serializeQuery)(_v0)}`, _v5({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, "usePatchVideoTexttrack", 0, function () {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v1.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/texttracks/${_v0.where.texttrackId}${(0, _v1.serializeQuery)(_v0)}`, _v6({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["EllipsisVFilled", 0, _v0 => (0, _v10.jsx)(_v11.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v10.jsx)("path", {
      d: "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z",
      fill: "currentColor"
    })
  })], 0);
}