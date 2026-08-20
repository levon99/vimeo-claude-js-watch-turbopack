{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["EyeFilled", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.348 10.41a11.002 11.002 0 0 1 10-6.41c4.438 0 8.26 2.63 9.999 6.41a3.807 3.807 0 0 1 0 3.18 11.002 11.002 0 0 1-10 6.41 11.002 11.002 0 0 1-10-6.41 3.808 3.808 0 0 1 0-3.18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
      fill: "currentColor"
    })
  })], 0), _v0.s(["EyeShutFilled", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m18.945 6.47 1.763-1.763a1 1 0 0 0-1.415-1.414l-16 16a1 1 0 1 0 1.415 1.414l2.04-2.04A10.956 10.956 0 0 0 12 20c4.44 0 8.262-2.63 10-6.41a3.808 3.808 0 0 0 0-3.18 11.034 11.034 0 0 0-3.055-3.94Zm-3.498 3.498-5.479 5.479a4 4 0 0 0 5.478-5.478Z"
      }), (0, _v1.jsx)("path", {
        d: "M2 10.41a11.002 11.002 0 0 1 12.2-6.19 1 1 0 0 1 .5 1.694l-1.839 1.803a1 1 0 0 1-.731.285A4 4 0 0 0 8 12v.049a1 1 0 0 1-.3.726l-3 2.94a1 1 0 0 1-1.5-.113A10.998 10.998 0 0 1 2 13.589a3.808 3.808 0 0 1 0-3.178Z"
      })]
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    where: {
      liveEventId: _v2,
      speakerProfileId: _v3
    },
    ..._v4
  }) {
    return (0, _v5.measureLatency)("getLiveEventSpeakerProfile", "GET", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/speaker_profiles/${_v3}?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
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
      liveEventId: _v1,
      speakerProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v5.measureLatency)("deleteLiveEventSpeakerProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v1}/speaker_profiles/${_v2}`, {
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
  async function _v9({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3,
      speakerProfileId: _v4
    },
    ..._v5
  }) {
    return (0, _v5.measureLatency)("patchLiveEventSpeakerProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/speaker_profiles/${_v4}?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v6.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14() {
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
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v4.serializeQuery)(_v0)}`, _v8({
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
  async function _v15({
    baseUrl: _v0,
    select: _v1,
    where: {
      personProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v5.measureLatency)("getPersonProfile", "GET", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v2}?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  async function _v16({
    baseUrl: _v0,
    where: {
      personProfileId: _v1
    },
    ..._v2
  }) {
    return (0, _v5.measureLatency)("deletePersonProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  async function _v17({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3
    },
    ..._v4
  }) {
    return (0, _v5.measureLatency)("patchPersonProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v6.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  function _v18() {
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
        let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v4.serializeQuery)(_v0)}`, _v16({
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
  function _v19() {
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
        let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v4.serializeQuery)(_v0)}`, _v17({
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
  async function _v20({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v5.measureLatency)("getUserPersonProfiles", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/person_profiles?${(0, _v6.searchQueryString)(_v3)}&fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  async function _v21({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v5.measureLatency)("postUserPersonProfiles", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/person_profiles?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v6.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v11.default)(_v2 ? `/live_events/${_v2.where.liveEventId}/speaker_profiles/${_v2.where.speakerProfileId}${(0, _v4.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v7({
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
  }, {
    endpoint: "/live_events/:liveEventId/speaker_profiles/:speakerProfileId",
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
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v4.serializeQuery)(_v0)}`, _v7({
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
    endpoint: "/live_events/:liveEventId/speaker_profiles/:speakerProfileId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v14, {
    endpoint: "/live_events/:liveEventId/speaker_profiles/:speakerProfileId",
    method: "DELETE"
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
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v4.serializeQuery)(_v0)}`, _v9({
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
  }, {
    endpoint: "/live_events/:liveEventId/speaker_profiles/:speakerProfileId",
    method: "PATCH"
  }), _v0.s(["useDeleteLiveEventSpeakerProfile", 0, _v14], 0), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v11.default)(_v2 ? `/person_profiles/${_v2.where.personProfileId}${(0, _v4.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v15({
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
  }, {
    endpoint: "/person_profiles/:personProfileId",
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
        let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v4.serializeQuery)(_v0)}`, _v15({
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
    endpoint: "/person_profiles/:personProfileId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v18, {
    endpoint: "/person_profiles/:personProfileId",
    method: "DELETE"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v19, {
    endpoint: "/person_profiles/:personProfileId",
    method: "PATCH"
  }), _v0.s(["useDeletePersonProfile", 0, _v18, "usePatchPersonProfile", 0, _v19], 0);
  var _v22 = _v0.i(0);
  function _v23(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v11.default)(_v2 ? `/users/${_v2.where.userId}/person_profiles${(0, _v4.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v20({
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
  function _v24() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v13.useGctlConfig)(),
      [_v4, _v5] = (0, _v4.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v21({
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
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v23, {
    endpoint: "/users/:userId/person_profiles",
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
        let _v0 = await _v0(`/users/${_v0.where.userId}/person_profiles${(0, _v4.serializeQuery)(_v0)}`, _v20({
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
    endpoint: "/users/:userId/person_profiles",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v22.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/person_profiles?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v20({
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
    endpoint: "/users/:userId/person_profiles",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v24, {
    endpoint: "/users/:userId/person_profiles",
    method: "POST"
  }), _v0.s(["useGetUserPersonProfiles", 0, _v23, "usePostUserPersonProfiles", 0, _v24], 0);
}