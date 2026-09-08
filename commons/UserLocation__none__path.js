{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["UserLocation", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M14.49 10.86a3.09 3.09 0 1 0-5 0c-.425.27-.803.608-1.12 1A1.03 1.03 0 1 0 10 13.12a2.62 2.62 0 0 1 2.05-1 2.621 2.621 0 0 1 2.05 1 1 1 0 0 0 1.56-1.25c-.331-.4-.727-.74-1.17-1.01ZM12 10.13A1.09 1.09 0 1 1 12 7.95 1.09 1.09 0 0 1 12 10.13Zm8.46-.5A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a.998.998 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.42-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.569 6.569 0 0 1 2.89 4.81 6.491 6.491 0 0 1-1.87 5.24Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    baseUrl: _v0,
    where: {
      followUserId: _v1
    },
    ..._v2
  }) {
    return (0, _v5.measureLatency)("getMeFollowing", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/following/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  async function _v8({
    baseUrl: _v0,
    where: {
      followUserId: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v5.measureLatency)("putMeFollowing", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/following/${_v1}?${(0, _v6.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  async function _v9({
    baseUrl: _v0,
    where: {
      followUserId: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v5.measureLatency)("deleteMeFollowing", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/following/${_v1}?${(0, _v6.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  _v0.s(["deleteMeFollowing", 0, _v9, "getMeFollowing", 0, _v7, "putMeFollowing", 0, _v8], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v11.default)(_v2 ? `/me/following/${_v2.where.followUserId}${(0, _v4.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v7({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  function _v15() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/following/${_v0.where.followUserId}${(0, _v4.serializeQuery)(_v0)}`, _v8({
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
  }
  function _v16() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/following/${_v0.where.followUserId}${(0, _v4.serializeQuery)(_v0)}`, _v9({
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
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v14, {
    endpoint: "/me/following/:followUserId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/following/${_v0.where.followUserId}${(0, _v4.serializeQuery)(_v0)}`, _v7({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/me/following/:followUserId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v15, {
    endpoint: "/me/following/:followUserId",
    method: "PUT"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v16, {
    endpoint: "/me/following/:followUserId",
    method: "DELETE"
  }), _v0.s(["useDeleteMeFollowing", 0, _v16, "useGetMeFollowing", 0, _v14, "usePutMeFollowing", 0, _v15], 0);
}