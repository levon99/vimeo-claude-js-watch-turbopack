{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v3.measureLatency)("getMeChannels", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/channels?${(0, _v4.searchQueryString)(_v2)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v6({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v3.measureLatency)("postMeChannels", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/channels`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v8.default)(_v2 ? `/me/channels${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v5({
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
  async function _v13({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v3.measureLatency)("getMeGroups", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/groups?${(0, _v4.searchQueryString)(_v2)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  function _v14(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v8.default)(_v2 ? `/me/groups${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v13({
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
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v12, {
    endpoint: "/me/channels",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v9.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/channels${(0, _v2.serializeQuery)(_v0)}`, _v5({
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
    endpoint: "/me/channels",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v10.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/me/channels?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v5({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/me/channels",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v11.useGctlConfig)(),
      [_v4, _v5] = (0, _v2.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v6({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/me/channels",
    method: "POST"
  }), _v0.s(["useGetMeChannels", 0, _v12], 0), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v14, {
    endpoint: "/me/groups",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v9.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups${(0, _v2.serializeQuery)(_v0)}`, _v13({
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
    endpoint: "/me/groups",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v10.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/me/groups?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v13({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/me/groups",
    method: "GET"
  }), _v0.s(["useGetMeGroups", 0, _v14], 0);
}