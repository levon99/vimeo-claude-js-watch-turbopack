{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    where: {
      userId: _v1,
      announcementId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("putUserAnnouncementPreference", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/announcement_preferences/${_v2}`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/announcement_preferences/${_v0.where.announcementId}${(0, _v2.serializeQuery)(_v0)}`, _v5({
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
  async function _v10({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("getUserAnnouncementPreferences", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/announcement_preferences?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
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
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v9, {
    endpoint: "/users/:userId/announcement_preferences/:announcementId",
    method: "PUT"
  }), _v0.s(["usePutUserAnnouncementPreference", 0, _v9], 0);
  var _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v8.useGctlConfig)();
    return (0, _v11.default)(_v2 ? `/users/${_v2.where.userId}/announcement_preferences${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v10({
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
    endpoint: "/users/:userId/announcement_preferences",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/announcement_preferences${(0, _v2.serializeQuery)(_v0)}`, _v10({
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
    endpoint: "/users/:userId/announcement_preferences",
    method: "GET"
  }), _v0.s(["useGetUserAnnouncementPreferences", 0, _v12], 0);
}