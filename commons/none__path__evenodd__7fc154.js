{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = _v0 => (0, _v1.jsx)(_v49.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.348 10.41a11.002 11.002 0 0 1 10-6.41c4.438 0 8.26 2.63 9.999 6.41a3.807 3.807 0 0 1 0 3.18 11.002 11.002 0 0 1-10 6.41 11.002 11.002 0 0 1-10-6.41 3.808 3.808 0 0 1 0-3.18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
      fill: "currentColor"
    })
  });
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  function _v59() {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v56.serializeQuery)(_v0)}`, (0, _v19.deleteLiveEventSpeakerProfile)({
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
  "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v20.useGctlConfig)();
    return (0, _v57.default)(_v2 ? `/live_events/${_v2.where.liveEventId}/speaker_profiles/${_v2.where.speakerProfileId}${(0, _v56.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v19.getLiveEventSpeakerProfile)({
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
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v56.serializeQuery)(_v0)}`, (0, _v19.getLiveEventSpeakerProfile)({
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
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(_v59, {
    endpoint: "/live_events/:liveEventId/speaker_profiles/:speakerProfileId",
    method: "DELETE"
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v56.serializeQuery)(_v0)}`, (0, _v19.patchLiveEventSpeakerProfile)({
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
  });
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  async function _v62({
    baseUrl: _v0,
    select: _v1,
    where: {
      personProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v60.measureLatency)("getPersonProfile", "GET", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v2}?fields=${_v1.map(_v61.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  async function _v63({
    baseUrl: _v0,
    where: {
      personProfileId: _v1
    },
    ..._v2
  }) {
    return (0, _v60.measureLatency)("deletePersonProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  async function _v64({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3
    },
    ..._v4
  }) {
    return (0, _v60.measureLatency)("patchPersonProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}?fields=${_v1.map(_v61.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v61.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  function _v65() {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v56.serializeQuery)(_v0)}`, _v63({
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
  function _v66() {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v56.serializeQuery)(_v0)}`, _v64({
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
  async function _v67({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v60.measureLatency)("getUserPersonProfiles", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/person_profiles?${(0, _v61.searchQueryString)(_v3)}&fields=${_v1.map(_v61.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  async function _v68({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v60.measureLatency)("postUserPersonProfiles", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/person_profiles?fields=${_v1.map(_v61.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v61.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v20.useGctlConfig)();
    return (0, _v57.default)(_v2 ? `/person_profiles/${_v2.where.personProfileId}${(0, _v56.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v62({
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
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v56.serializeQuery)(_v0)}`, _v62({
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
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(_v65, {
    endpoint: "/person_profiles/:personProfileId",
    method: "DELETE"
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(_v66, {
    endpoint: "/person_profiles/:personProfileId",
    method: "PATCH"
  });
  var _v69 = _v0.i(0);
  function _v70(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v20.useGctlConfig)();
    return (0, _v57.default)(_v2 ? `/users/${_v2.where.userId}/person_profiles${(0, _v56.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v67({
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
  function _v71() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v20.useGctlConfig)(),
      [_v4, _v5] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v68({
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
  "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(_v70, {
    endpoint: "/users/:userId/person_profiles",
    method: "GET"
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v58.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v20.useGctlConfig)(),
      [_v5, _v6] = (0, _v56.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/person_profiles${(0, _v56.serializeQuery)(_v0)}`, _v67({
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
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v20.useGctlConfig)();
    return (0, _v69.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/person_profiles?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v67({
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
  }), "true" === _v55.default.env.STORYBOOK && (0, _v56.assignMswData)(_v71, {
    endpoint: "/users/:userId/person_profiles",
    method: "POST"
  });
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  async function _v80({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3,
      pictureId: _v4
    },
    ..._v5
  }) {
    return (0, _v60.measureLatency)("patchPersonProfilePicture", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}/pictures/${_v4}?fields=${_v1.map(_v61.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v61.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  async function _v81({
    baseUrl: _v0,
    select: _v1,
    where: {
      personProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v60.measureLatency)("postPersonProfilePictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v2}/pictures?fields=${_v1.map(_v61.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v61.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v61.deepCamelCase)(_v1);
    });
  }
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = ["uri", "link", "baseLink"];
  async function _v85({
    baseUrl: _v0,
    headers: _v1,
    personProfileId: _v2,
    upload: _v3,
    activate: _v4 = !0
  }) {
    let _v5 = await _v81({
      baseUrl: _v0,
      headers: _v1,
      where: {
        personProfileId: _v2
      },
      select: _v84
    });
    if (!_v5?.link) throw new _v83.LiveError("Thumbnail upload link missing in create response.", {
      code: _v82.ELiveErrorCode.API_ERROR
    });
    let _v6 = await fetch(_v5.link, {
      method: "PUT",
      body: _v3.body,
      headers: {
        "Content-Type": _v3.contentType
      }
    });
    if (!_v6.ok) throw new _v61.NetworkError("Thumbnail upload failed.", _v6.status, _v6);
    let _v7 = _v5.uri.split("/").pop() ?? "";
    if ("" === _v7) throw new _v83.LiveError("Could not resolve picture uid from created picture.", {
      code: _v82.ELiveErrorCode.API_ERROR
    });
    return _v4 && (await _v80({
      baseUrl: _v0,
      headers: _v1,
      where: {
        personProfileId: _v2,
        pictureId: _v7
      },
      select: ["uri", "active"],
      variables: {
        active: !0
      }
    })), {
      picture: _v5,
      pictureId: _v7
    };
  }
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  function _v92({
    image: _v0,
    isOpen: _v1,
    onDismiss: _v2,
    onSaved: _v3
  }) {
    let [_v4, _v5] = (0, _v13.useState)(),
      [_v6, _v7] = (0, _v13.useState)(50),
      {
        width: _v8
      } = (0, _v91.useWindowSize)(),
      _v9 = (0, _v13.useRef)(null),
      _v10 = (0, _v88.useBreakpointValue)({
        base: 160,
        md: 200
      }) || 200,
      _v11 = (0, _v13.useMemo)(() => _v4 ? 100 * _v10 / Math.min(_v4.naturalHeight, _v4.naturalWidth) : 0, [_v10, _v4]);
    return (0, _v13.useEffect)(() => {
      let _v0 = !1,
        _v1 = new FileReader();
      return _v1.onload = () => {
        if (_v0 || "string" != typeof _v1.result) return;
        let _v0 = new Image();
        _v0.onload = () => {
          _v0 || _v5(_v0);
        }, _v0.src = _v1.result;
      }, _v1.readAsDataURL(_v0), () => {
        _v0 = !0;
      };
    }, [_v0]), (0, _v1.jsxs)(_v31.Modal, {
      closeOnOverlayClick: !1,
      size: "lg",
      isCentered: !0,
      isOpen: _v1,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v36.ModalOverlay, {}), (0, _v1.jsxs)(_v33.ModalContent, {
        children: [(0, _v1.jsx)(_v35.ModalHeader, {
          children: (0, _v10.translate)({
            singular: "Upload speaker photo",
            dictionary: {
              es: {
                singular: "Subir foto del ponente"
              },
              "de-DE": {
                singular: "Sprecherfoto hochladen"
              },
              "fr-FR": {
                singular: "Téléverser la photo de l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーの写真をアップロード"
              },
              "ko-KR": {
                singular: "발표자 사진 업로드"
              },
              "pt-BR": {
                singular: "Carregar foto do palestrante"
              },
              "zh-CN": {
                singular: "上传演讲者照片"
              }
            }
          })
        }), (0, _v1.jsx)(_v32.ModalBody, {
          px: 0,
          display: "flex",
          flexDirection: "column",
          gap: "md",
          children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v89.ImageCrop, {
              ref: _v9,
              image: _v4,
              zoomRatio: (_v6 + _v11) / 100,
              imageCropCircleDiameter: _v10,
              windowWidth: _v8,
              cropShape: "square"
            }), (0, _v1.jsx)(_v90.ImageCropSlider, {
              value: _v6,
              onChange: _v7
            })]
          }) : (0, _v1.jsx)(_v7.Flex, {
            align: "center",
            justify: "center",
            h: {
              base: (0, _v8.rem)(366),
              md: (0, _v8.rem)(284)
            },
            children: (0, _v1.jsx)(_v87.Spinner, {
              size: "md"
            })
          })
        }), (0, _v1.jsxs)(_v34.ModalFooter, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v14.Button, {
            onClick: _v2,
            variant: "secondary",
            children: (0, _v10.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), (0, _v1.jsx)(_v14.Button, {
            isDisabled: !_v4,
            onClick: () => {
              let _v0 = _v9.current?.calculateCropSize();
              _v0 && _v3({
                x: _v0.xMin,
                y: _v0.yMin,
                width: _v0.xMax - _v0.xMin,
                height: _v0.yMax - _v0.yMin
              });
            },
            variant: "primary",
            children: (0, _v10.translate)({
              singular: "Save",
              dictionary: {
                es: {
                  singular: "Guardar"
                },
                "de-DE": {
                  singular: "Speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer"
                },
                "ja-JP": {
                  singular: "保存"
                },
                "ko-KR": {
                  singular: "저장"
                },
                "pt-BR": {
                  singular: "Salvar"
                },
                "zh-CN": {
                  singular: "保存"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  function _v93({
    id: _v0,
    fileName: _v1,
    fileSize: _v2,
    previewSrc: _v3,
    onCropSaved: _v4,
    onRemove: _v5
  }) {
    let [_v6, _v7] = (0, _v13.useState)(!1),
      [_v8, _v9] = (0, _v13.useState)(),
      _v10 = (0, _v18.useToast)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v86.ImageUploader, {
        id: _v0,
        label: (0, _v10.translate)({
          singular: "Upload picture",
          dictionary: {
            es: {
              singular: "Subir imagen"
            },
            "de-DE": {
              singular: "Bild hochladen"
            },
            "fr-FR": {
              singular: "Téléverser l'image"
            },
            "ja-JP": {
              singular: "画像をアップロード"
            },
            "ko-KR": {
              singular: "사진 업로드"
            },
            "pt-BR": {
              singular: "Enviar imagem"
            },
            "zh-CN": {
              singular: "上传图片"
            }
          }
        }),
        accept: "image/jpeg,image/png,image/webp,image/gif",
        acceptedFormats: (0, _v10.translate)({
          singular: "JPEG, PNG, WebP, or GIF",
          dictionary: {
            es: {
              singular: "JPEG, PNG, WebP o GIF"
            },
            "de-DE": {
              singular: "JPEG, PNG, WebP oder GIF"
            },
            "fr-FR": {
              singular: "JPEG, PNG, WebP ou GIF"
            },
            "ja-JP": {
              singular: "JPEG、PNG、WebP、またはGIF"
            },
            "ko-KR": {
              singular: "JPEG, PNG, WebP, 또는 GIF"
            },
            "pt-BR": {
              singular: "JPEG, PNG, WebP, ou GIF"
            },
            "zh-CN": {
              singular: "JPEG、PNG、WebP 或 GIF"
            }
          }
        }),
        fileName: _v1,
        fileSize: _v2,
        previewSrc: _v3,
        status: _v3 ? "uploaded" : "default",
        helperText: (0, _v10.translate)({
          singular: "Max size 2MB",
          dictionary: {
            es: {
              singular: "Tamaño máximo 2 MB"
            },
            "de-DE": {
              singular: "Max. Größe 2 MB"
            },
            "fr-FR": {
              singular: "Taille max 2MB"
            },
            "ja-JP": {
              singular: "最大サイズ 2MB"
            },
            "ko-KR": {
              singular: "최대 크기 2MB"
            },
            "pt-BR": {
              singular: "Tamanho máximo 2MB"
            },
            "zh-CN": {
              singular: "最大 2MB"
            }
          }
        }),
        size: "xs",
        onRemove: _v5,
        onSelect: _v0 => {
          if (0 === _v0.length) return;
          let _v1 = _v0[0];
          _v1.size > 0 ? _v10({
            status: "error",
            duration: 0,
            title: (0, _v10.translate)({
              singular: "Your file can’t be uploaded because it exceeds the size limit of {FILE_SIZE_LIMIT}MB",
              replacements: {
                FILE_SIZE_LIMIT: 2
              },
              dictionary: {
                es: {
                  singular: "Tu archivo no se puede subir porque excede el límite de {FILE_SIZE_LIMIT}MB"
                },
                "de-DE": {
                  singular: "Ihre Datei kann nicht hochgeladen werden, da sie die Größengrenze von {FILE_SIZE_LIMIT}MB überschreitet"
                },
                "fr-FR": {
                  singular: "Votre fichier ne peut pas être téléchargé car il dépasse la taille maximale autorisée de {FILE_SIZE_LIMIT}MB"
                },
                "ja-JP": {
                  singular: "ファイルをアップロードできません。{FILE_SIZE_LIMIT}MBのサイズ制限を超えています"
                },
                "ko-KR": {
                  singular: "{FILE_SIZE_LIMIT}MB의 크기 제한을 초과하여 파일을 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Seu arquivo não pode ser enviado porque excede o limite de tamanho de {FILE_SIZE_LIMIT}MB"
                },
                "zh-CN": {
                  singular: "您的文件无法上传，因为其超过了 {FILE_SIZE_LIMIT}MB 的大小限制"
                }
              }
            })
          }) : (_v9(_v1), _v7(!0));
        }
      }), _v8 ? (0, _v1.jsx)(_v92, {
        image: _v8,
        isOpen: _v6,
        onDismiss: () => {
          _v7(!1), _v9(void 0);
        },
        onSaved: _v0 => {
          _v8 && _v4(_v8, _v0), _v7(!1), _v9(void 0);
        }
      }) : null]
    });
  }
  let _v94 = async (_v0, _v1) => {
    try {
      let _v0 = await createImageBitmap(_v0),
        _v1 = document.createElement("canvas");
      _v1.width = 48, _v1.height = 48;
      let _v2 = _v1.getContext("2d");
      if (!_v2) return _v0.close(), URL.createObjectURL(_v0);
      _v2.drawImage(_v0, _v1.x, _v1.y, _v1.width, _v1.height, 0, 0, 48, 48), _v0.close();
      let _v3 = await new Promise(_v0 => _v1.toBlob(_v0));
      return URL.createObjectURL(_v3 ?? _v0);
    } catch {
      return URL.createObjectURL(_v0);
    }
  };
  function _v95({
    initialSpeaker: _v0,
    isOpen: _v1,
    mode: _v2,
    onClose: _v3,
    onSaved: _v4
  }) {
    let [_v5, _v6] = (0, _v13.useState)(_v0),
      [_v7, _v8] = (0, _v13.useState)(!1),
      [_v9, _v10] = (0, _v13.useState)(null),
      [_v11, _v12] = (0, _v13.useState)(null),
      _v13 = (0, _v72.useSessionOwnerId)(),
      {
        baseUrl: _v14,
        jwt: _v15
      } = (0, _v20.useGctlConfig)(),
      _v16 = (0, _v18.useToast)(),
      [_v17, {
        data: _v18,
        loading: _v19
      }] = _v71(),
      [_v20, {
        data: _v21,
        loading: _v22
      }] = _v66(),
      _v23 = (0, _v13.useEffectEvent)(async _v0 => {
        if (_v9 && null != _v14) try {
          await _v85({
            baseUrl: _v14,
            headers: {
              Authorization: null != _v15 ? `jwt ${_v15}` : "",
              "Content-Type": "application/json"
            },
            personProfileId: _v0,
            upload: {
              body: _v9.file,
              contentType: _v9.file.type
            }
          });
        } catch (_v0) {
          _v16({
            status: "error",
            duration: 0,
            title: (0, _v24.getErrorToastTitle)(_v0, (0, _v10.translate)({
              singular: "Your speaker was saved, but the photo failed to upload.",
              dictionary: {
                es: {
                  singular: "El orador se guardó, pero no se pudo subir la foto."
                },
                "de-DE": {
                  singular: "Ihr Sprecher wurde gespeichert, aber das Foto konnte nicht hochgeladen werden."
                },
                "fr-FR": {
                  singular: "Votre intervenant a été enregistré, mais la photo n'a pas pu être téléversée."
                },
                "ja-JP": {
                  singular: "スピーカーは保存されましたが、写真のアップロードに失敗しました。"
                },
                "ko-KR": {
                  singular: "연사가 저장되었지만, 사진 업로드에 실패했습니다."
                },
                "pt-BR": {
                  singular: "Seu palestrante foi salvo, mas a foto não pôde ser enviada."
                },
                "zh-CN": {
                  singular: "您的演讲者已保存，但照片上传失败。"
                }
              }
            }))
          });
        }
        _v4(_v0), _v3();
      }),
      _v24 = _v18 ?? _v21,
      _v25 = _v19 || _v22 || null != _v24;
    (0, _v13.useEffect)(() => {
      _v24 && _v23(_v24.id);
    }, [_v24]);
    let _v26 = (0, _v13.useMemo)(() => null !== _v9 ? URL.createObjectURL(_v9.file) : null, [_v9]);
    (0, _v13.useEffect)(() => () => {
      null !== _v26 && URL.revokeObjectURL(_v26);
    }, [_v26]), (0, _v13.useEffect)(() => {
      if (null === _v9) return;
      let _v0 = null,
        _v1 = !1;
      return _v94(_v9.file, _v9.crop).then(_v0 => {
        _v1 ? URL.revokeObjectURL(_v0) : (_v0 = _v0, _v12(_v0));
      }), () => {
        _v1 = !0, null !== _v0 && URL.revokeObjectURL(_v0);
      };
    }, [_v9]);
    let _v27 = (_v0, _v1) => {
      "name" === _v0 && "" !== _v1.trim() && _v8(!1), _v6({
        ..._v5,
        [_v0]: _v1
      });
    };
    return (0, _v1.jsxs)(_v31.Modal, {
      closeOnOverlayClick: !1,
      size: "lg",
      isCentered: !0,
      isOpen: _v1,
      onClose: _v3,
      children: [(0, _v1.jsx)(_v36.ModalOverlay, {}), (0, _v1.jsxs)(_v33.ModalContent, {
        children: [(0, _v1.jsx)(_v35.ModalHeader, {
          children: "edit" === _v2 ? (0, _v10.translate)({
            singular: "Edit speaker",
            dictionary: {
              es: {
                singular: "Editar orador"
              },
              "de-DE": {
                singular: "Redner bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーを編集"
              },
              "ko-KR": {
                singular: "발표자 편집"
              },
              "pt-BR": {
                singular: "Editar palestrante"
              },
              "zh-CN": {
                singular: "编辑演讲人"
              }
            }
          }) : (0, _v10.translate)({
            singular: "New speaker",
            dictionary: {
              es: {
                singular: "Nuevo ponente"
              },
              "de-DE": {
                singular: "Neuer Sprecher"
              },
              "fr-FR": {
                singular: "Nouvel intervenant"
              },
              "ja-JP": {
                singular: "新しいスピーカー"
              },
              "ko-KR": {
                singular: "새 스피커"
              },
              "pt-BR": {
                singular: "Novo palestrante"
              },
              "zh-CN": {
                singular: "新增演讲者"
              }
            }
          })
        }), (0, _v1.jsx)(_v32.ModalBody, {
          display: "flex",
          flexDirection: "column",
          children: (0, _v1.jsxs)(_v7.Flex, {
            gap: "xl",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              flex: "1",
              gap: "md",
              minWidth: 0,
              children: [(0, _v1.jsx)(_v7.Flex, {
                direction: "column",
                children: (0, _v1.jsxs)(_v15.FormControl, {
                  isInvalid: _v7,
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    htmlFor: "speaker-name",
                    children: (0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
                        singular: "Name",
                        dictionary: {
                          es: {
                            singular: "Nombre"
                          },
                          "fr-FR": {
                            singular: "Nom"
                          },
                          "ja-JP": {
                            singular: "名前"
                          },
                          "ko-KR": {
                            singular: "이름"
                          },
                          "pt-BR": {
                            singular: "Nome"
                          },
                          "zh-CN": {
                            singular: "姓名"
                          }
                        }
                      })
                    })
                  }), (0, _v1.jsx)(_v76.Input, {
                    id: "speaker-name",
                    isInvalid: _v7,
                    onChange: _v0 => _v27("name", _v0.target.value),
                    placeholder: (0, _v10.translate)({
                      singular: "Add name",
                      dictionary: {
                        es: {
                          singular: "Agregar nombre"
                        },
                        "de-DE": {
                          singular: "Name hinzufügen"
                        },
                        "fr-FR": {
                          singular: "Ajouter un nom"
                        },
                        "ja-JP": {
                          singular: "名前を追加"
                        },
                        "ko-KR": {
                          singular: "이름 추가"
                        },
                        "pt-BR": {
                          singular: "Adicionar nome"
                        },
                        "zh-CN": {
                          singular: "添加姓名"
                        }
                      }
                    }),
                    value: _v5.name
                  }), (0, _v1.jsx)(_v73.AnimatePresence, {
                    children: _v7 ? (0, _v1.jsx)(_v7.Flex, {
                      as: _v74.motion.div,
                      initial: {
                        height: 0,
                        opacity: 0
                      },
                      animate: {
                        height: "auto",
                        opacity: 1
                      },
                      exit: {
                        height: 0,
                        opacity: 0
                      },
                      transition: {
                        duration: "2",
                        type: "spring",
                        stiffness: "600",
                        damping: "32"
                      },
                      overflow: "hidden",
                      mt: "xs",
                      children: (0, _v1.jsx)(_v75.FormErrorMessage, {
                        variant: "error",
                        fontSize: "body-sm",
                        lineHeight: "body-sm",
                        mt: "0",
                        children: (0, _v10.translate)({
                          singular: "Required",
                          dictionary: {
                            es: {
                              singular: "Requerido"
                            },
                            "de-DE": {
                              singular: "Erforderlich"
                            },
                            "fr-FR": {
                              singular: "Obligatoire"
                            },
                            "ja-JP": {
                              singular: "必須"
                            },
                            "ko-KR": {
                              singular: "필수"
                            },
                            "pt-BR": {
                              singular: "Obrigatório"
                            },
                            "zh-CN": {
                              singular: "必填"
                            }
                          }
                        })
                      })
                    }) : null
                  })]
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  htmlFor: "speaker-role",
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
                        singular: "Role",
                        dictionary: {
                          es: {
                            singular: "Rol"
                          },
                          "de-DE": {
                            singular: "Rolle"
                          },
                          "fr-FR": {
                            singular: "Rôle"
                          },
                          "ja-JP": {
                            singular: "肩書き"
                          },
                          "ko-KR": {
                            singular: "역할"
                          },
                          "pt-BR": {
                            singular: "Função"
                          },
                          "zh-CN": {
                            singular: "职位"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v43.Tooltip, {
                      label: (0, _v10.translate)({
                        singular: "Role appears on the event page",
                        dictionary: {
                          es: {
                            singular: "El rol aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Rolle erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "Le rôle apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "肩書きはイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "역할은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A função aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "职位会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v78.InfoCircle, {
                        boxSize: (0, _v8.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v76.Input, {
                  id: "speaker-role",
                  onChange: _v0 => _v27("role", _v0.target.value),
                  placeholder: (0, _v10.translate)({
                    singular: "Add role",
                    dictionary: {
                      es: {
                        singular: "Agregar rol"
                      },
                      "de-DE": {
                        singular: "Rolle hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un rôle"
                      },
                      "ja-JP": {
                        singular: "肩書きを追加"
                      },
                      "ko-KR": {
                        singular: "역할 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar função"
                      },
                      "zh-CN": {
                        singular: "添加职位"
                      }
                    }
                  }),
                  value: _v5.role
                })]
              }), (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  htmlFor: "speaker-photo",
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
                        singular: "Photo",
                        dictionary: {
                          es: {
                            singular: "Foto"
                          },
                          "ja-JP": {
                            singular: "写真"
                          },
                          "ko-KR": {
                            singular: "사진"
                          },
                          "pt-BR": {
                            singular: "Foto"
                          },
                          "zh-CN": {
                            singular: "照片"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v43.Tooltip, {
                      label: (0, _v10.translate)({
                        singular: "Photo appears on the event page",
                        dictionary: {
                          es: {
                            singular: "La foto aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Foto erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "La photo apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "写真はイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "사진은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A foto aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "照片会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v78.InfoCircle, {
                        boxSize: (0, _v8.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v93, {
                  id: "speaker-photo",
                  fileName: _v9?.file.name,
                  fileSize: _v9 ? (_v0 => {
                    if (_v0 < 0) return `${_v0} B`;
                    if (_v0 < 0) return `${Math.max(1, Math.round(_v0 / 0))} KB`;
                    let _v1 = _v0 / 0;
                    return _v1 < 10 ? `${_v1.toFixed(1)} MB` : `${Math.round(_v1)} MB`;
                  })(_v9.file.size) : void 0,
                  previewSrc: _v11 || _v26 || void 0,
                  onCropSaved: (_v0, _v1) => {
                    _v10({
                      file: _v0,
                      crop: _v1
                    }), _v12(null);
                  },
                  onRemove: () => {
                    _v10(null), _v12(null);
                  }
                })]
              }), (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  htmlFor: "speaker-description",
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
                        singular: "Description",
                        dictionary: {
                          es: {
                            singular: "Descripción"
                          },
                          "de-DE": {
                            singular: "Beschreibung"
                          },
                          "ja-JP": {
                            singular: "説明"
                          },
                          "ko-KR": {
                            singular: "설명"
                          },
                          "pt-BR": {
                            singular: "Descrição"
                          },
                          "zh-CN": {
                            singular: "描述"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v43.Tooltip, {
                      label: (0, _v10.translate)({
                        singular: "Description appears on the event page",
                        dictionary: {
                          es: {
                            singular: "La descripción aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Beschreibung erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "La description apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "説明はイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "설명은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A descrição aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "描述会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v78.InfoCircle, {
                        boxSize: (0, _v8.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v77.Textarea, {
                  id: "speaker-description",
                  minHeight: (0, _v8.rem)(120),
                  onChange: _v0 => _v27("description", _v0.target.value),
                  placeholder: (0, _v10.translate)({
                    singular: "Add description",
                    dictionary: {
                      es: {
                        singular: "Agregar descripción"
                      },
                      "de-DE": {
                        singular: "Beschreibung hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter une description"
                      },
                      "ja-JP": {
                        singular: "説明を追加"
                      },
                      "ko-KR": {
                        singular: "설명 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar descrição"
                      },
                      "zh-CN": {
                        singular: "添加描述"
                      }
                    }
                  }),
                  maxLength: 255,
                  resize: "none",
                  value: _v5.description
                })]
              })]
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              px: "xs",
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-sm",
                children: (0, _v10.translate)({
                  singular: "Preview",
                  dictionary: {
                    es: {
                      singular: "Vista previa"
                    },
                    "de-DE": {
                      singular: "Vorschau"
                    },
                    "fr-FR": {
                      singular: "Aperçu"
                    },
                    "ja-JP": {
                      singular: "プレビュー"
                    },
                    "ko-KR": {
                      singular: "미리 보기"
                    },
                    "pt-BR": {
                      singular: "Visualização"
                    },
                    "zh-CN": {
                      singular: "预览"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v79.SpeakerProfileCard, {
                name: _v5.name.trim() || "Name (required)",
                role: _v5.role,
                description: _v5.description,
                thumbnailUrl: _v26 ?? _v5.picture?.baseLink
              })]
            })]
          })
        }), (0, _v1.jsxs)(_v34.ModalFooter, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v14.Button, {
            isDisabled: _v25,
            onClick: _v3,
            variant: "secondary",
            children: (0, _v10.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), (0, _v1.jsx)(_v14.Button, {
            isLoading: _v25,
            onClick: () => {
              if (_v25) return;
              let _v0 = _v5.name.trim();
              if ("" === _v0) return void _v8(!0);
              let _v1 = {
                name: _v0,
                role: _v5.role.trim() || null,
                description: _v5.description.trim() || null,
                ...(null !== _v9 ? {
                  avatarCrop: _v9.crop
                } : {})
              };
              if ("edit" === _v2) {
                let _v0 = _v0.id;
                if (!_v0) return;
                _v20({
                  select: ["id"],
                  where: {
                    personProfileId: _v0
                  },
                  variables: _v1
                });
                return;
              }
              _v13 <= 0 || _v17({
                select: ["id"],
                where: {
                  userId: _v13
                },
                variables: _v1
              });
            },
            variant: "primary",
            children: (0, _v10.translate)({
              singular: "Save",
              dictionary: {
                es: {
                  singular: "Guardar"
                },
                "de-DE": {
                  singular: "Speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer"
                },
                "ja-JP": {
                  singular: "保存"
                },
                "ko-KR": {
                  singular: "저장"
                },
                "pt-BR": {
                  singular: "Salvar"
                },
                "zh-CN": {
                  singular: "保存"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  let _v96 = ({
      title: _v0,
      body: _v1,
      confirmLabel: _v2,
      cancelLabel: _v3,
      isConfirmLoading: _v4 = !1,
      onCancel: _v5,
      onConfirm: _v6
    }) => (0, _v1.jsxs)(_v31.Modal, {
      isOpen: !0,
      onClose: _v5,
      children: [(0, _v1.jsx)(_v36.ModalOverlay, {}), (0, _v1.jsxs)(_v33.ModalContent, {
        children: [(0, _v1.jsx)(_v35.ModalHeader, {
          children: _v0
        }), (0, _v1.jsx)(_v32.ModalBody, {
          children: _v1
        }), (0, _v1.jsxs)(_v34.ModalFooter, {
          children: [(0, _v1.jsx)(_v14.Button, {
            onClick: _v5,
            variant: "tertiary",
            children: _v3 ?? (0, _v10.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), (0, _v1.jsx)(_v14.Button, {
            isLoading: _v4,
            onClick: _v6,
            variant: "destructive",
            children: _v2 ?? (0, _v10.translate)({
              singular: "Delete",
              dictionary: {
                es: {
                  singular: "Eliminar"
                },
                "de-DE": {
                  singular: "Löschen"
                },
                "fr-FR": {
                  singular: "Supprimer"
                },
                "ja-JP": {
                  singular: "削除"
                },
                "ko-KR": {
                  singular: "삭제"
                },
                "pt-BR": {
                  singular: "Excluir"
                },
                "zh-CN": {
                  singular: "删除"
                }
              }
            })
          })]
        })]
      })]
    }),
    _v97 = (0, _v8.rem)(56),
    _v98 = ["id", "name", "role", "description", "pictures.baseLink", "avatarCrop"],
    _v99 = ["id", "personProfile.id"];
  function _v100({
    isOpen: _v0,
    onClose: _v1,
    eventId: _v2
  }) {
    let _v3 = _v2 > 0,
      _v4 = (0, _v72.useSessionOwnerId)(),
      _v5 = (0, _v18.useToast)(),
      [_v6, _v7] = (0, _v13.useState)(!1),
      [_v8, _v9] = (0, _v13.useState)(null),
      [_v10, _v11] = (0, _v13.useState)(null),
      {
        data: _v12,
        mutate: _v13
      } = _v70(() => _v4 <= 0 ? null : {
        select: _v98,
        where: {
          userId: _v4
        }
      }, {
        revalidateOnFocus: !1
      }),
      _v14 = _v12?.data,
      {
        data: _v15,
        mutate: _v16
      } = (0, _v21.useGetLiveEventSpeakerProfiles)(() => _v3 ? {
        select: _v99,
        where: {
          liveEventId: _v2
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v17 = (0, _v13.useMemo)(() => {
        let _v0 = new Map();
        return _v15?.data.forEach(_v0 => {
          _v0.set(_v0.personProfile.id, _v0.id);
        }), _v0;
      }, [_v15]),
      _v18 = (0, _v13.useMemo)(() => _v14?.filter(_v0 => _v17.has(_v0.id)) ?? [], [_v14, _v17]),
      _v19 = (0, _v13.useMemo)(() => _v14?.filter(_v0 => !_v17.has(_v0.id)) ?? [], [_v14, _v17]),
      _v20 = (0, _v13.useMemo)(() => _v14?.find(_v0 => _v0.id === _v8), [_v14, _v8]),
      _v21 = (0, _v13.useMemo)(() => _v14?.find(_v0 => _v0.id === _v10), [_v14, _v10]),
      [_v22] = (0, _v21.usePostLiveEventSpeakerProfiles)(),
      [_v23] = _v59(),
      [_v24] = _v65(),
      [_v25, _v26] = (0, _v13.useState)(new Set()),
      [_v27, _v28] = (0, _v13.useState)(new Set()),
      _v29 = (_v0, _v1) => {
        if (!_v3 || _v25.has(_v0)) return;
        _v26(_v0 => new Set(_v0).add(_v0));
        let _v2 = null !== _v1;
        (_v2 ? _v23({
          where: {
            liveEventId: _v2,
            speakerProfileId: _v1
          }
        }) : _v22({
          select: ["id"],
          where: {
            liveEventId: _v2
          },
          variables: {
            personProfileId: _v0
          }
        })).then(() => {
          _v16(), _v5({
            status: "success",
            duration: 0,
            title: _v2 ? (0, _v10.translate)({
              singular: "Speaker hidden from the event landing page.",
              dictionary: {
                es: {
                  singular: "Ponente oculto en la página de destino del evento."
                },
                "de-DE": {
                  singular: "Sprecher auf der Landingpage der Veranstaltung ausgeblendet."
                },
                "fr-FR": {
                  singular: "L'intervenant est masqué sur la page de destination de l'événement."
                },
                "ja-JP": {
                  singular: "イベントのランディングページでスピーカーが非表示になりました。"
                },
                "ko-KR": {
                  singular: "발표자가 이벤트 랜딩 페이지에서 숨겨졌습니다."
                },
                "pt-BR": {
                  singular: "Palestrante oculto na landing page do evento."
                },
                "zh-CN": {
                  singular: "演讲者已从活动着陆页隐藏。"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Speaker shown on the event landing page.",
              dictionary: {
                es: {
                  singular: "Ponente visible en la página de destino del evento."
                },
                "de-DE": {
                  singular: "Sprecher auf der Landingpage der Veranstaltung angezeigt."
                },
                "fr-FR": {
                  singular: "L'intervenant est affiché sur la page de destination de l'événement."
                },
                "ja-JP": {
                  singular: "イベントのランディングページでスピーカーが表示されました。"
                },
                "ko-KR": {
                  singular: "발표자가 이벤트 랜딩 페이지에 표시되었습니다."
                },
                "pt-BR": {
                  singular: "Palestrante exibido na landing page do evento."
                },
                "zh-CN": {
                  singular: "演讲者已在活动着陆页上显示。"
                }
              }
            })
          });
        }).catch(_v0 => {
          _v5({
            status: "error",
            duration: 0,
            title: (0, _v24.getErrorToastTitle)(_v0, (0, _v10.translate)({
              singular: "Something went wrong updating speaker visibility. Try again.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al actualizar la visibilidad del ponente. Inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Beim Aktualisieren der Sichtbarkeit des Sprechers ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Une erreur est survenue lors de la mise à jour de la visibilité de l'intervenant. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "スピーカーの表示設定の更新中に問題が発生しました。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "발표자 가시성 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao atualizar a visibilidade do palestrante. Tente novamente."
                },
                "zh-CN": {
                  singular: "更新演讲者可见性时出错。请重试。"
                }
              }
            }))
          });
        }).finally(() => {
          _v26(_v0 => {
            let _v1 = new Set(_v0);
            return _v1.delete(_v0), _v1;
          });
        });
      },
      _v30 = () => {
        _v7(!1), _v9(null), _v11(null), _v1();
      },
      _v31 = () => {
        _v9(null), _v7(!0);
      },
      _v32 = _v0 => {
        _v7(!1), _v9(_v0);
      },
      _v33 = _v0 => {
        _v11(_v0);
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v31.Modal, {
        closeOnOverlayClick: !1,
        size: "lg",
        isCentered: !0,
        isOpen: _v0,
        onClose: _v30,
        children: [(0, _v1.jsx)(_v36.ModalOverlay, {}), (0, _v1.jsxs)(_v33.ModalContent, {
          minWidth: (0, _v8.rem)(990),
          children: [(0, _v1.jsxs)(_v35.ModalHeader, {
            children: [(0, _v10.translate)({
              singular: "Manage visible speakers",
              dictionary: {
                es: {
                  singular: "Administrar ponentes visibles"
                },
                "de-DE": {
                  singular: "Sichtbare Sprecher verwalten"
                },
                "fr-FR": {
                  singular: "Gérer les intervenants visibles"
                },
                "ja-JP": {
                  singular: "表示されるスピーカーを管理"
                },
                "ko-KR": {
                  singular: "표시되는 스피커 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar palestrantes visíveis"
                },
                "zh-CN": {
                  singular: "管理可见演讲者"
                }
              }
            }), (0, _v1.jsx)(_v37.ModalCloseButton, {
              onClick: _v30
            })]
          }), (0, _v1.jsxs)(_v32.ModalBody, {
            display: "flex",
            flexDirection: "column",
            gap: "md",
            children: [(0, _v1.jsx)(_v25.Alert, {
              status: "info",
              overflow: "unset",
              children: (0, _v1.jsx)(_v26.AlertDescription, {
                children: (0, _v1.jsx)(_v9.Text, {
                  variant: "body-sm",
                  children: (0, _v10.translate)({
                    singular: "If you add speakers from the Speakers tab, they’ll automatically appear here. However, you still need to manually enable them to be displayed on the event landing page.",
                    dictionary: {
                      es: {
                        singular: "Si agregas ponentes desde la pestaña Ponentes, aparecerán automáticamente aquí. Sin embargo, aún debes habilitarlos manualmente para que se muestren en la página de aterrizaje del evento."
                      },
                      "de-DE": {
                        singular: "Wenn Sie Sprecher im Tab „Sprecher“ hinzufügen, erscheinen sie hier automatisch. Sie müssen sie jedoch weiterhin manuell aktivieren, damit sie auf der Event-Landingpage angezeigt werden."
                      },
                      "fr-FR": {
                        singular: "Si vous ajoutez des intervenants depuis l'onglet Speakers, ils apparaîtront automatiquement ici. Cependant, vous devez toujours les activer manuellement pour qu'ils s'affichent sur la page de présentation de l'événement."
                      },
                      "ja-JP": {
                        singular: "「Speakers」タブからスピーカーを追加すると、ここに自動的に表示されます。ただし、イベントのランディングページに表示するには、手動で有効化する必要があります。"
                      },
                      "ko-KR": {
                        singular: "Speakers 탭에서 스피커를 추가하면 이곳에 자동으로 나타납니다. 그러나 이벤트 랜딩 페이지에 표시하려면 수동으로 활성화해야 합니다."
                      },
                      "pt-BR": {
                        singular: "Se você adicionar palestrantes na aba Palestrantes, eles aparecerão automaticamente aqui. Entretanto, você ainda precisa habilitá‑los manualmente para que sejam exibidos na página de destino do evento."
                      },
                      "zh-CN": {
                        singular: "如果您从 Speakers 选项卡添加演讲者，他们会自动出现在此处。不过，您仍需手动启用他们，以便在活动着陆页上显示。"
                      }
                    }
                  })
                })
              })
            }), (0, _v1.jsx)(_v101, {
              title: (0, _v10.translate)({
                singular: "Visible speaker ({COUNT})",
                plural: "Visible speakers ({COUNT})",
                count: _v18.length,
                replacements: {
                  COUNT: _v18.length
                },
                dictionary: {
                  es: {
                    singular: "Orador visible ({COUNT})",
                    plural: "Oradores visibles ({COUNT})"
                  },
                  "de-DE": {
                    singular: "Sichtbarer Sprecher ({COUNT})",
                    plural: "Sichtbare Sprecher ({COUNT})"
                  },
                  "fr-FR": {
                    singular: "Intervenant visible ({COUNT})",
                    plural: "Intervenants visibles ({COUNT})"
                  },
                  "ja-JP": {
                    singular: "表示されている発言者 ({COUNT})",
                    plural: "表示されている発言者 ({COUNT})"
                  },
                  "ko-KR": {
                    singular: "표시된 발표자 ({COUNT})",
                    plural: "표시된 발표자들 ({COUNT})"
                  },
                  "pt-BR": {
                    singular: "Orador visível ({COUNT})",
                    plural: "Oradores visíveis ({COUNT})"
                  },
                  "zh-CN": {
                    singular: "可见发言者 ({COUNT})",
                    plural: "可见发言者 ({COUNT})"
                  }
                }
              }),
              speakersCount: _v18.length,
              emptyStateText: (0, _v10.translate)({
                singular: "No speakers are visible on the event landing page yet.",
                dictionary: {
                  es: {
                    singular: "Aún no hay ponentes visibles en la página de inicio del evento."
                  },
                  "de-DE": {
                    singular: "Auf der Event-Landingpage sind noch keine Sprecher sichtbar."
                  },
                  "fr-FR": {
                    singular: "Aucun intervenant n'est encore visible sur la page de destination de l'événement."
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページにはまだ登壇者が表示されていません。"
                  },
                  "ko-KR": {
                    singular: "아직 이벤트 랜딩 페이지에 표시되는 발표자가 없습니다."
                  },
                  "pt-BR": {
                    singular: "Ainda não há palestrantes visíveis na página de destino do evento."
                  },
                  "zh-CN": {
                    singular: "目前活动登录页面尚未显示任何演讲者。"
                  }
                }
              }),
              onAddClick: _v31,
              children: _v18.map(_v0 => (0, _v1.jsx)(_v102, {
                profile: _v0,
                attachedSpeakerId: _v17.get(_v0.id) ?? null,
                onOpenEditSpeakerModal: _v32,
                onToggleAddedToEvent: _v29,
                onSetDeleteCandidateId: _v33,
                isDeleting: _v27.has(_v0.id),
                isToggling: _v25.has(_v0.id)
              }, _v0.id))
            }), (0, _v1.jsx)(_v101, {
              title: (0, _v10.translate)({
                singular: "Available speaker ({COUNT})",
                plural: "Available speakers ({COUNT})",
                count: _v19.length,
                replacements: {
                  COUNT: _v19.length
                },
                dictionary: {
                  es: {
                    singular: "Orador disponible ({COUNT})",
                    plural: "Oradores disponibles ({COUNT})"
                  },
                  "de-DE": {
                    singular: "Verfügbarer Sprecher ({COUNT})",
                    plural: "Verfügbare Sprecher ({COUNT})"
                  },
                  "fr-FR": {
                    singular: "Intervenant disponible ({COUNT})",
                    plural: "Intervenants disponibles ({COUNT})"
                  },
                  "ja-JP": {
                    singular: "利用可能な発言者 ({COUNT})",
                    plural: "利用可能な発言者 ({COUNT})"
                  },
                  "ko-KR": {
                    singular: "사용 가능한 발표자 ({COUNT})",
                    plural: "사용 가능한 발표자들 ({COUNT})"
                  },
                  "pt-BR": {
                    singular: "Orador disponível ({COUNT})",
                    plural: "Oradores disponíveis ({COUNT})"
                  },
                  "zh-CN": {
                    singular: "可用发言者 ({COUNT})",
                    plural: "可用发言者 ({COUNT})"
                  }
                }
              }),
              speakersCount: _v19.length,
              emptyStateText: (0, _v10.translate)({
                singular: "All added speakers are currently visible on the event landing page.",
                dictionary: {
                  es: {
                    singular: "Todos los ponentes añadidos están actualmente visibles en la página de inicio del evento."
                  },
                  "de-DE": {
                    singular: "Alle hinzugefügten Sprecher sind derzeit auf der Event-Landingpage sichtbar."
                  },
                  "fr-FR": {
                    singular: "Tous les intervenants ajoutés sont actuellement visibles sur la page de destination de l'événement."
                  },
                  "ja-JP": {
                    singular: "追加されたすべての登壇者は現在イベントのランディングページに表示されています。"
                  },
                  "ko-KR": {
                    singular: "추가된 모든 발표자가 현재 이벤트 랜딩 페이지에 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Todos os palestrantes adicionados estão atualmente visíveis na página de destino do evento."
                  },
                  "zh-CN": {
                    singular: "所有已添加的演讲者目前都在活动登录页面可见。"
                  }
                }
              }),
              onAddClick: _v31,
              children: _v19.map(_v0 => (0, _v1.jsx)(_v102, {
                profile: _v0,
                attachedSpeakerId: null,
                onOpenEditSpeakerModal: _v32,
                onToggleAddedToEvent: _v29,
                onSetDeleteCandidateId: _v33,
                isDeleting: _v27.has(_v0.id),
                isToggling: _v25.has(_v0.id)
              }, _v0.id))
            })]
          }), (0, _v1.jsx)(_v34.ModalFooter, {})]
        })]
      }), _v6 ? (0, _v1.jsx)(_v95, {
        initialSpeaker: {
          name: "",
          role: "",
          description: "",
          picture: null,
          avatarCrop: null
        },
        isOpen: _v6,
        mode: "add",
        onClose: () => {
          _v7(!1);
        },
        onSaved: _v0 => {
          _v13(), _v3 && _v22({
            select: ["id"],
            where: {
              liveEventId: _v2
            },
            variables: {
              personProfileId: _v0
            }
          }).then(() => _v16());
        }
      }, "add-speaker-modal") : null, _v20 ? (0, _v1.jsx)(_v95, {
        initialSpeaker: {
          id: _v20.id,
          name: _v20.name,
          role: _v20.role || "",
          description: _v20.description || "",
          picture: _v20.pictures,
          avatarCrop: _v20.avatarCrop
        },
        isOpen: null !== _v20,
        mode: "edit",
        onClose: () => {
          _v9(null);
        },
        onSaved: () => _v13()
      }, `edit-speaker-modal-${_v20.id}`) : null, _v21 ? (0, _v1.jsx)(_v96, {
        title: (0, _v10.translate)({
          singular: 'Delete "{NAME}"?',
          replacements: {
            NAME: _v21.name
          },
          dictionary: {
            es: {
              singular: '¿Eliminar "{NAME}"?'
            },
            "de-DE": {
              singular: '"{NAME}" löschen?'
            },
            "fr-FR": {
              singular: 'Supprimer "{NAME}" ?'
            },
            "ja-JP": {
              singular: '"{NAME}"を削除しますか?'
            },
            "ko-KR": {
              singular: '"{NAME}"을(를) 삭제하시겠습니까?'
            },
            "pt-BR": {
              singular: 'Excluir "{NAME}"?'
            },
            "zh-CN": {
              singular: '删除 "{NAME}"?'
            }
          }
        }),
        body: (0, _v10.translate)({
          singular: "This speaker will be deleted and removed from every event. This action can't be undone.",
          dictionary: {
            es: {
              singular: "Este ponente será eliminado y retirado de todos los eventos. Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Dieser Sprecher wird gelöscht und aus allen Veranstaltungen entfernt. Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Cet intervenant sera supprimé et retiré de tous les événements. Cette action est irréversible."
            },
            "ja-JP": {
              singular: "このスピーカーを削除すると、すべてのイベントからも削除されます。この操作は取り消せません。"
            },
            "ko-KR": {
              singular: "이 발표자는 삭제되어 모든 이벤트에서 제거됩니다. 이 작업은 되돌릴 수 없습니다."
            },
            "pt-BR": {
              singular: "Este palestrante será excluído e removido de todos os eventos. Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "此发言人将被删除，并从每个活动中移除。此操作无法撤销。"
            }
          }
        }),
        onCancel: () => _v11(null),
        onConfirm: () => {
          null !== _v10 && (_v27.has(_v10) || (_v28(_v0 => new Set(_v0).add(_v10)), _v24({
            where: {
              personProfileId: _v10
            }
          }).then(() => {
            _v13(), _v16();
          }).finally(() => {
            _v28(_v0 => {
              let _v1 = new Set(_v0);
              return _v1.delete(_v10), _v1;
            });
          })), _v11(null));
        }
      }) : null]
    });
  }
  let _v101 = ({
      title: _v0,
      speakersCount: _v1,
      emptyStateText: _v2,
      children: _v3,
      onAddClick: _v4
    }) => {
      let [_v5, _v6] = (0, _v13.useState)(!0);
      return (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          align: "center",
          justify: "space-between",
          gap: (0, _v8.rem)(16),
          children: [(0, _v1.jsxs)(_v7.Flex, {
            align: "center",
            appearance: "none",
            "aria-expanded": _v5,
            "aria-label": _v5 ? (0, _v10.translate)({
              singular: "Collapse section",
              dictionary: {
                es: {
                  singular: "Contraer sección"
                },
                "de-DE": {
                  singular: "Abschnitt einklappen"
                },
                "fr-FR": {
                  singular: "Réduire la section"
                },
                "ja-JP": {
                  singular: "セクションを折りたたむ"
                },
                "ko-KR": {
                  singular: "섹션 접기"
                },
                "pt-BR": {
                  singular: "Recolher seção"
                },
                "zh-CN": {
                  singular: "折叠部分"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Expand section",
              dictionary: {
                es: {
                  singular: "Expandir sección"
                },
                "de-DE": {
                  singular: "Abschnitt aufklappen"
                },
                "fr-FR": {
                  singular: "Développer la section"
                },
                "ja-JP": {
                  singular: "セクションを展開する"
                },
                "ko-KR": {
                  singular: "섹션 펼치기"
                },
                "pt-BR": {
                  singular: "Expandir seção"
                },
                "zh-CN": {
                  singular: "展开部分"
                }
              }
            }),
            as: "button",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            flex: "1",
            gap: "xs",
            minWidth: "0",
            onClick: () => _v6(_v0 => !_v0),
            padding: "0",
            textAlign: "left",
            type: "button",
            children: [(0, _v1.jsx)(_v9.Text, {
              noOfLines: 1,
              variant: "heading-xs",
              children: _v0
            }), (0, _v1.jsx)(_v45.ChevronDownSmall, {
              color: "icon-primary",
              transform: _v5 ? void 0 : "rotate(-90deg)"
            })]
          }), (0, _v1.jsx)(_v14.Button, {
            leftIcon: (0, _v1.jsx)(_v47.PlusCircle, {}),
            onClick: _v4,
            size: "sm",
            variant: "secondary",
            children: (0, _v10.translate)({
              singular: "Add speaker",
              dictionary: {
                es: {
                  singular: "Agregar orador"
                },
                "de-DE": {
                  singular: "Redner hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter un(e) intervenant(e)"
                },
                "ja-JP": {
                  singular: "スピーカーを追加"
                },
                "ko-KR": {
                  singular: "발표자 추가"
                },
                "pt-BR": {
                  singular: "Adicionar palestrante"
                },
                "zh-CN": {
                  singular: "添加演讲人"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v28.Collapse, {
          in: _v5,
          children: _v1 > 0 ? (0, _v1.jsxs)(_v38.Table, {
            variant: "unstyled",
            children: [(0, _v1.jsx)(_v42.Thead, {
              children: (0, _v1.jsxs)(_v44.Tr, {
                color: "text-secondary",
                children: [(0, _v1.jsx)(_v41.Th, {
                  backgroundColor: "fill-component",
                  borderStartRadius: "input-md",
                  px: "2",
                  py: "2",
                  width: "27%",
                  children: (0, _v1.jsx)(_v7.Flex, {
                    align: "center",
                    gap: (0, _v8.rem)(8),
                    minWidth: 0,
                    children: (0, _v1.jsx)(_v9.Text, {
                      noOfLines: 1,
                      variant: "heading-xs",
                      children: (0, _v10.translate)({
                        singular: "Name",
                        dictionary: {
                          es: {
                            singular: "Nombre"
                          },
                          "fr-FR": {
                            singular: "Nom"
                          },
                          "ja-JP": {
                            singular: "名前"
                          },
                          "ko-KR": {
                            singular: "이름"
                          },
                          "pt-BR": {
                            singular: "Nome"
                          },
                          "zh-CN": {
                            singular: "姓名"
                          }
                        }
                      })
                    })
                  })
                }), (0, _v1.jsx)(_v41.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "13%",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    children: (0, _v10.translate)({
                      singular: "Visible",
                      dictionary: {
                        "de-DE": {
                          singular: "Sichtbar"
                        },
                        "ja-JP": {
                          singular: "表示"
                        },
                        "ko-KR": {
                          singular: "표시됨"
                        },
                        "pt-BR": {
                          singular: "Visível"
                        },
                        "zh-CN": {
                          singular: "可见"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v41.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "17%",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    children: (0, _v10.translate)({
                      singular: "Role",
                      dictionary: {
                        es: {
                          singular: "Rol"
                        },
                        "de-DE": {
                          singular: "Rolle"
                        },
                        "fr-FR": {
                          singular: "Rôle"
                        },
                        "ja-JP": {
                          singular: "肩書き"
                        },
                        "ko-KR": {
                          singular: "역할"
                        },
                        "pt-BR": {
                          singular: "Função"
                        },
                        "zh-CN": {
                          singular: "职位"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v41.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "29%",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    children: (0, _v10.translate)({
                      singular: "Description",
                      dictionary: {
                        es: {
                          singular: "Descripción"
                        },
                        "de-DE": {
                          singular: "Beschreibung"
                        },
                        "ja-JP": {
                          singular: "説明"
                        },
                        "ko-KR": {
                          singular: "설명"
                        },
                        "pt-BR": {
                          singular: "Descrição"
                        },
                        "zh-CN": {
                          singular: "描述"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v41.Th, {
                  backgroundColor: "fill-component",
                  borderEndRadius: "input-md",
                  px: "2",
                  py: "2",
                  width: "14%"
                })]
              })
            }), (0, _v1.jsx)(_v39.Tbody, {
              children: _v3
            })]
          }) : (0, _v1.jsx)(_v9.Text, {
            color: "text-secondary",
            py: (0, _v8.rem)(16),
            variant: "body-md",
            children: _v2
          })
        })]
      });
    },
    _v102 = ({
      profile: _v0,
      attachedSpeakerId: _v1,
      onOpenEditSpeakerModal: _v2,
      onToggleAddedToEvent: _v3,
      onSetDeleteCandidateId: _v4,
      isDeleting: _v5,
      isToggling: _v6
    }) => {
      let _v7 = null !== _v1,
        _v8 = _v0.pictures?.baseLink,
        _v9 = _v0.avatarCrop && _v0.avatarCrop.width > 0 ? _v0.avatarCrop : null;
      return (0, _v1.jsxs)(_v44.Tr, {
        children: [(0, _v1.jsx)(_v40.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "27%",
          children: (0, _v1.jsxs)(_v7.Flex, {
            align: "center",
            gap: (0, _v8.rem)(16),
            minWidth: 0,
            children: [_v8 ? (0, _v1.jsx)(_v27.Box, {
              borderRadius: "input-md",
              flexShrink: 0,
              height: _v97,
              overflow: "hidden",
              width: _v97,
              children: (0, _v1.jsx)(_v30.Image, {
                alt: _v0.name || "",
                src: _v8,
                ...(_v9 ? {
                  maxWidth: "none",
                  transform: `scale(${56 / _v9.width}) translate(${-_v9.x}px, ${-_v9.y}px)`,
                  transformOrigin: "top left"
                } : {
                  height: "100%",
                  objectFit: "cover",
                  width: "100%"
                })
              })
            }) : (0, _v1.jsx)(_v27.Box, {
              width: _v97,
              height: _v97,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "input-md",
              backgroundColor: "fill-component",
              color: "icon-secondary",
              children: (0, _v1.jsx)(_v48.PersonUserFilled, {})
            }), (0, _v1.jsx)(_v9.Text, {
              noOfLines: 1,
              variant: "heading-xs",
              children: _v0.name
            })]
          })
        }), (0, _v1.jsx)(_v40.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "13%",
          children: (0, _v1.jsx)(_v27.Box, {
            "aria-label": _v7 ? (0, _v10.translate)({
              singular: "Show on the event landing page",
              dictionary: {
                es: {
                  singular: "Mostrar en la página de aterrizaje del evento"
                },
                "de-DE": {
                  singular: "Auf der Event-Landingpage anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher sur la page de présentation de l'événement"
                },
                "ja-JP": {
                  singular: "イベントのランディングページに表示する"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에 표시"
                },
                "pt-BR": {
                  singular: "Exibir na página de destino do evento"
                },
                "zh-CN": {
                  singular: "在活动着陆页显示"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Hide from the event landing page",
              dictionary: {
                es: {
                  singular: "Ocultar de la página de aterrizaje del evento"
                },
                "de-DE": {
                  singular: "Auf der Event-Landingpage ausblenden"
                },
                "fr-FR": {
                  singular: "Masquer de la page de présentation de l'événement"
                },
                "ja-JP": {
                  singular: "イベントのランディングページから非表示にする"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에서 숨기기"
                },
                "pt-BR": {
                  singular: "Ocultar da página de destino do evento"
                },
                "zh-CN": {
                  singular: "从活动着陆页隐藏"
                }
              }
            }),
            backgroundColor: "fill-component",
            borderRadius: "sm",
            display: "inline-flex",
            p: (0, _v8.rem)(6),
            children: _v7 ? (0, _v1.jsx)(_v50, {
              boxSize: (0, _v8.rem)(20),
              color: "text-tertiary"
            }) : (0, _v1.jsx)(_v51.CloseXCircleFilled, {
              boxSize: (0, _v8.rem)(20),
              color: "text-tertiary"
            })
          })
        }), (0, _v1.jsx)(_v40.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "17%",
          children: (0, _v1.jsx)(_v9.Text, {
            noOfLines: 1,
            variant: "body-md",
            color: "text-secondary",
            children: _v0.role || "-"
          })
        }), (0, _v1.jsx)(_v40.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "29%",
          children: (0, _v1.jsx)(_v9.Text, {
            noOfLines: 1,
            variant: "body-md",
            color: "text-secondary",
            children: _v0.description || "-"
          })
        }), (0, _v1.jsx)(_v40.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "14%",
          children: (0, _v1.jsxs)(_v7.Flex, {
            gap: "1",
            justify: "flex-end",
            children: [(0, _v1.jsx)(_v43.Tooltip, {
              label: (0, _v10.translate)({
                singular: "Edit speaker details",
                dictionary: {
                  es: {
                    singular: "Editar detalles del ponente"
                  },
                  "de-DE": {
                    singular: "Sprecherdetails bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier les détails de l'intervenant"
                  },
                  "ja-JP": {
                    singular: "スピーカーの詳細を編集"
                  },
                  "ko-KR": {
                    singular: "연사 세부 정보 편집"
                  },
                  "pt-BR": {
                    singular: "Editar detalhes do palestrante"
                  },
                  "zh-CN": {
                    singular: "编辑演讲者详细信息"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v29.IconButton, {
                "aria-label": (0, _v10.translate)({
                  singular: "Edit speaker details",
                  dictionary: {
                    es: {
                      singular: "Editar detalles del ponente"
                    },
                    "de-DE": {
                      singular: "Sprecherdetails bearbeiten"
                    },
                    "fr-FR": {
                      singular: "Modifier les détails de l'intervenant"
                    },
                    "ja-JP": {
                      singular: "スピーカーの詳細を編集"
                    },
                    "ko-KR": {
                      singular: "연사 세부 정보 편집"
                    },
                    "pt-BR": {
                      singular: "Editar detalhes do palestrante"
                    },
                    "zh-CN": {
                      singular: "编辑演讲者详细信息"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v46.EditSheet, {}),
                onClick: () => _v2(_v0.id),
                size: "sm",
                variant: "tertiary"
              })
            }), (0, _v1.jsx)(_v43.Tooltip, {
              label: _v7 ? (0, _v10.translate)({
                singular: "Hide from the event landing page",
                dictionary: {
                  es: {
                    singular: "Ocultar de la página de aterrizaje del evento"
                  },
                  "de-DE": {
                    singular: "Auf der Event-Landingpage ausblenden"
                  },
                  "fr-FR": {
                    singular: "Masquer de la page de présentation de l'événement"
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページから非表示にする"
                  },
                  "ko-KR": {
                    singular: "이벤트 랜딩 페이지에서 숨기기"
                  },
                  "pt-BR": {
                    singular: "Ocultar da página de destino do evento"
                  },
                  "zh-CN": {
                    singular: "从活动着陆页隐藏"
                  }
                }
              }) : (0, _v10.translate)({
                singular: "Show on the event landing page",
                dictionary: {
                  es: {
                    singular: "Mostrar en la página de aterrizaje del evento"
                  },
                  "de-DE": {
                    singular: "Auf der Event-Landingpage anzeigen"
                  },
                  "fr-FR": {
                    singular: "Afficher sur la page de présentation de l'événement"
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページに表示する"
                  },
                  "ko-KR": {
                    singular: "이벤트 랜딩 페이지에 표시"
                  },
                  "pt-BR": {
                    singular: "Exibir na página de destino do evento"
                  },
                  "zh-CN": {
                    singular: "在活动着陆页显示"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v29.IconButton, {
                "aria-label": _v7 ? (0, _v10.translate)({
                  singular: "Hide from the event landing page",
                  dictionary: {
                    es: {
                      singular: "Ocultar de la página de aterrizaje del evento"
                    },
                    "de-DE": {
                      singular: "Auf der Event-Landingpage ausblenden"
                    },
                    "fr-FR": {
                      singular: "Masquer de la page de présentation de l'événement"
                    },
                    "ja-JP": {
                      singular: "イベントのランディングページから非表示にする"
                    },
                    "ko-KR": {
                      singular: "이벤트 랜딩 페이지에서 숨기기"
                    },
                    "pt-BR": {
                      singular: "Ocultar da página de destino do evento"
                    },
                    "zh-CN": {
                      singular: "从活动着陆页隐藏"
                    }
                  }
                }) : (0, _v10.translate)({
                  singular: "Show on the event landing page",
                  dictionary: {
                    es: {
                      singular: "Mostrar en la página de aterrizaje del evento"
                    },
                    "de-DE": {
                      singular: "Auf der Event-Landingpage anzeigen"
                    },
                    "fr-FR": {
                      singular: "Afficher sur la page de présentation de l'événement"
                    },
                    "ja-JP": {
                      singular: "イベントのランディングページに表示する"
                    },
                    "ko-KR": {
                      singular: "이벤트 랜딩 페이지에 표시"
                    },
                    "pt-BR": {
                      singular: "Exibir na página de destino do evento"
                    },
                    "zh-CN": {
                      singular: "在活动着陆页显示"
                    }
                  }
                }),
                icon: _v7 ? (0, _v1.jsx)(_v52.EyeShut, {}) : (0, _v1.jsx)(_v53.Eye, {}),
                isLoading: _v6,
                onClick: () => _v3(_v0.id, _v1),
                size: "sm",
                variant: "tertiary"
              })
            }), (0, _v1.jsx)(_v43.Tooltip, {
              label: (0, _v10.translate)({
                singular: "Delete speaker",
                dictionary: {
                  es: {
                    singular: "Eliminar orador"
                  },
                  "de-DE": {
                    singular: "Sprecher löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer l'intervenant"
                  },
                  "ja-JP": {
                    singular: "スピーカーを削除"
                  },
                  "ko-KR": {
                    singular: "발표자 삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir palestrante"
                  },
                  "zh-CN": {
                    singular: "删除演讲者"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v29.IconButton, {
                "aria-label": (0, _v10.translate)({
                  singular: "Delete speaker",
                  dictionary: {
                    es: {
                      singular: "Eliminar orador"
                    },
                    "de-DE": {
                      singular: "Sprecher löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer l'intervenant"
                    },
                    "ja-JP": {
                      singular: "スピーカーを削除"
                    },
                    "ko-KR": {
                      singular: "발표자 삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir palestrante"
                    },
                    "zh-CN": {
                      singular: "删除演讲者"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v54.TrashBin, {}),
                isLoading: _v5,
                onClick: () => _v4(_v0.id),
                size: "sm",
                variant: "tertiary"
              })
            })]
          })
        })]
      }, _v0.id);
    },
    _v103 = "manage-speakers-field-show-speakers",
    _v104 = ["id", "visibilityStatus"];
  function _v105() {
    let [_v0, _v1] = (0, _v13.useState)(!1),
      [_v2, _v3] = (0, _v13.useState)(null),
      [_v4, _v5] = (0, _v13.useState)(!0),
      {
        sessionId: _v6
      } = (0, _v12.useManager)(_v23.ComposerSessionManager),
      _v7 = Number(_v6),
      _v8 = _v7 > 0,
      _v9 = (0, _v18.useToast)(),
      {
        data: _v10,
        mutate: _v11
      } = (0, _v21.useGetLiveEventSpeakerProfiles)(() => _v8 ? {
        select: _v104,
        where: {
          liveEventId: _v7
        },
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v12 = _v10?.data,
      {
        baseUrl: _v13,
        jwt: _v14,
        xVimeoPage: _v15,
        locale: _v16
      } = (0, _v20.useGctlConfig)(),
      _v17 = _v4;
    return null !== _v2 ? _v17 = "visible" === _v2 : _v12 && _v12.length > 0 && (_v17 = _v12.some(_v0 => "visible" === _v0.visibilityStatus)), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "md",
        width: "100%",
        children: [(0, _v1.jsx)(_v15.FormControl, {
          children: (0, _v1.jsxs)(_v16.FormLabel, {
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            htmlFor: _v103,
            justifyContent: "space-between",
            margin: "0",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              align: "center",
              gap: (0, _v8.rem)(4),
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-xs",
                children: (0, _v10.translate)({
                  singular: "Show speakers",
                  dictionary: {
                    es: {
                      singular: "Mostrar oradores"
                    },
                    "de-DE": {
                      singular: "Redner einblenden"
                    },
                    "fr-FR": {
                      singular: "Montrer les intervenants"
                    },
                    "ja-JP": {
                      singular: "スピーカーを表示する"
                    },
                    "ko-KR": {
                      singular: "발표자 표시"
                    },
                    "pt-BR": {
                      singular: "Exibir palestrantes"
                    },
                    "zh-CN": {
                      singular: "显示演讲人"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v22.CircleTip, {
                as: "span",
                label: (0, _v10.translate)({
                  singular: "Speakers are shown in the event page with a dedicated section.",
                  dictionary: {
                    es: {
                      singular: "Los ponentes se muestran en la página del evento con una sección dedicada."
                    },
                    "de-DE": {
                      singular: "Sprecher werden auf der Veranstaltungsseite in einem eigenen Abschnitt angezeigt."
                    },
                    "fr-FR": {
                      singular: "Les intervenants sont affichés sur la page de l'événement dans une section dédiée."
                    },
                    "ja-JP": {
                      singular: "スピーカーはイベントページの専用セクションに表示されます。"
                    },
                    "ko-KR": {
                      singular: "스피커는 전용 섹션과 함께 이벤트 페이지에 표시됩니다."
                    },
                    "pt-BR": {
                      singular: "Os palestrantes são exibidos na página do evento em uma seção dedicada."
                    },
                    "zh-CN": {
                      singular: "演讲者在活动页面中以专门的区域展示。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v17.Switch, {
              id: _v103,
              isChecked: _v17,
              isDisabled: null !== _v2,
              onChange: () => {
                if (null !== _v2) return;
                let _v0 = _v17 ? "hidden" : "visible";
                _v5("visible" === _v0), _v12 && 0 !== _v12.length && (_v3(_v0), Promise.all(_v12.map(_v0 => (0, _v19.patchLiveEventSpeakerProfile)({
                  baseUrl: _v13,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v14 ? `jwt ${_v14}` : "",
                    "Vimeo-Page": `${_v15}`,
                    "Accept-Language": _v16 ?? "en"
                  },
                  select: _v104,
                  where: {
                    liveEventId: _v7,
                    speakerProfileId: _v0.id
                  },
                  variables: {
                    visibilityStatus: _v0
                  }
                }))).then(() => _v11()).catch(_v0 => {
                  _v9({
                    status: "error",
                    duration: 0,
                    title: (0, _v24.getErrorToastTitle)(_v0, (0, _v10.translate)({
                      singular: "Something went wrong updating speaker visibility. Try again.",
                      dictionary: {
                        es: {
                          singular: "Se produjo un error al actualizar la visibilidad del ponente. Inténtelo de nuevo."
                        },
                        "de-DE": {
                          singular: "Beim Aktualisieren der Sichtbarkeit des Sprechers ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                        },
                        "fr-FR": {
                          singular: "Une erreur est survenue lors de la mise à jour de la visibilité de l'intervenant. Veuillez réessayer."
                        },
                        "ja-JP": {
                          singular: "スピーカーの表示設定の更新中に問題が発生しました。もう一度お試しください。"
                        },
                        "ko-KR": {
                          singular: "발표자 가시성 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요."
                        },
                        "pt-BR": {
                          singular: "Ocorreu um erro ao atualizar a visibilidade do palestrante. Tente novamente."
                        },
                        "zh-CN": {
                          singular: "更新演讲者可见性时出错。请重试。"
                        }
                      }
                    }))
                  });
                }).finally(() => {
                  _v3(null);
                }));
              }
            })]
          })
        }), (0, _v1.jsx)(_v14.Button, {
          isDisabled: !_v17 || !_v8,
          onClick: () => _v1(!0),
          size: "sm",
          variant: "secondary",
          width: "100%",
          children: (0, _v10.translate)({
            singular: "Manage visible speakers",
            dictionary: {
              es: {
                singular: "Administrar ponentes visibles"
              },
              "de-DE": {
                singular: "Sichtbare Sprecher verwalten"
              },
              "fr-FR": {
                singular: "Gérer les intervenants visibles"
              },
              "ja-JP": {
                singular: "表示されるスピーカーを管理"
              },
              "ko-KR": {
                singular: "표시되는 스피커 관리"
              },
              "pt-BR": {
                singular: "Gerenciar palestrantes visíveis"
              },
              "zh-CN": {
                singular: "管理可见演讲者"
              }
            }
          })
        })]
      }), _v0 ? (0, _v1.jsx)(_v100, {
        isOpen: _v0,
        onClose: () => _v1(!1),
        eventId: _v7
      }) : null]
    });
  }
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = {
    type: "vimeo",
    uri: null,
    url: null
  };
  function _v111({
    eventSettingsContext: {
      settings: {
        value: _v0
      },
      actions: {
        updateLiveEventSettings: _v1
      }
    } = (0, _v12.useManager)(_v108.EventSettingsManager)
  }) {
    let [_v2, _v3] = (0, _v13.useState)(!1),
      _v4 = _v0?.landingPageLogo ?? _v110,
      _v5 = [{
        label: (0, _v10.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        value: "none"
      }, {
        label: (0, _v10.translate)({
          singular: "Custom logo",
          dictionary: {
            es: {
              singular: "Logotipo personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Logo"
            },
            "fr-FR": {
              singular: "Logo personnalisé"
            },
            "ja-JP": {
              singular: "カスタムロゴ"
            },
            "ko-KR": {
              singular: "사용자 지정 로고"
            },
            "pt-BR": {
              singular: "Logotipo personalizado"
            },
            "zh-CN": {
              singular: "自定义徽标"
            }
          }
        }),
        value: "custom"
      }, {
        label: (0, _v10.translate)({
          singular: "Vimeo logo",
          dictionary: {
            es: {
              singular: "Logotipo de Vimeo"
            },
            "de-DE": {
              singular: "Vimeo-Logo"
            },
            "fr-FR": {
              singular: "Logo Vimeo"
            },
            "ja-JP": {
              singular: "Vimeo ロゴ"
            },
            "ko-KR": {
              singular: "Vimeo 로고"
            },
            "pt-BR": {
              singular: "Logotipo do Vimeo"
            },
            "zh-CN": {
              singular: "Vimeo 徽标"
            }
          }
        }),
        value: "vimeo"
      }];
    return (0, _v1.jsxs)(_v7.Flex, {
      direction: "column",
      gap: (0, _v8.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v106.Select, {
        defaultValue: [_v4.type],
        items: _v5,
        onValueChange: _v0 => {
          var _v1;
          "custom" === (_v1 = _v0.value[0]) ? _v1({
            landingPageLogo: {
              type: _v1,
              uri: _v4.uri,
              url: _v4.url
            }
          }) : _v1({
            landingPageLogo: {
              type: _v1,
              uri: null,
              url: null
            }
          });
        },
        withPortal: !1
      }), "custom" === _v4.type ? (0, _v1.jsx)(_v109.LogoPickerBrandKit, {
        LogoPickerControlComponent: () => (0, _v1.jsxs)(_v7.Flex, {
          align: "center",
          as: "button",
          backgroundColor: "surface",
          borderColor: "input-stroke",
          borderRadius: (0, _v8.rem)(8),
          borderStyle: "solid",
          borderWidth: (0, _v8.rem)(1),
          gap: (0, _v8.rem)(12),
          onClick: () => _v3(_v0 => !_v0),
          padding: (0, _v8.rem)(8),
          type: "button",
          width: "100%",
          children: [(0, _v1.jsx)(_v27.Box, {
            alignItems: "center",
            backgroundColor: "fill-component",
            borderRadius: (0, _v8.rem)(6),
            display: "flex",
            flexShrink: 0,
            height: (0, _v8.rem)(48),
            justifyContent: "center",
            overflow: "hidden",
            width: (0, _v8.rem)(48),
            children: _v4.url ? (0, _v1.jsx)(_v27.Box, {
              alt: (0, _v10.translate)({
                singular: "Custom logo",
                dictionary: {
                  es: {
                    singular: "Logotipo personalizado"
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Logo"
                  },
                  "fr-FR": {
                    singular: "Logo personnalisé"
                  },
                  "ja-JP": {
                    singular: "カスタムロゴ"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo personalizado"
                  },
                  "zh-CN": {
                    singular: "自定义徽标"
                  }
                }
              }),
              as: "img",
              height: "100%",
              objectFit: "contain",
              src: _v4.url,
              width: "100%"
            }) : (0, _v1.jsx)(_v107.Upload, {
              boxSize: 20,
              color: "text-primary"
            })
          }), (0, _v1.jsx)(_v9.Text, {
            color: "text-primary",
            textAlign: "left",
            variant: "heading-xs",
            children: _v4.url ? (0, _v10.translate)({
              singular: "Change picture",
              dictionary: {
                es: {
                  singular: "Cambiar imagen"
                },
                "de-DE": {
                  singular: "Bild ändern"
                },
                "fr-FR": {
                  singular: "Changer l'image"
                },
                "ja-JP": {
                  singular: "画像を変更"
                },
                "ko-KR": {
                  singular: "사진 변경"
                },
                "pt-BR": {
                  singular: "Alterar imagem"
                },
                "zh-CN": {
                  singular: "更换图片"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Upload picture",
              dictionary: {
                es: {
                  singular: "Subir imagen"
                },
                "de-DE": {
                  singular: "Bild hochladen"
                },
                "fr-FR": {
                  singular: "Téléverser l'image"
                },
                "ja-JP": {
                  singular: "画像をアップロード"
                },
                "ko-KR": {
                  singular: "사진 업로드"
                },
                "pt-BR": {
                  singular: "Enviar imagem"
                },
                "zh-CN": {
                  singular: "上传图片"
                }
              }
            })
          })]
        }),
        initialLogo: _v4.url ? {
          url: _v4.url,
          uri: _v4.uri ?? void 0
        } : void 0,
        isPickerOpen: _v2,
        onClose: () => _v3(!1),
        onLogoSelect: ({
          logoUri: _v0,
          logoUrl: _v1
        }) => {
          _v1({
            landingPageLogo: {
              type: "custom",
              uri: _v0,
              url: _v1
            }
          }), _v3(!1);
        },
        popoverPlacement: "bottom-start",
        visualMatchingEnabled: !0
      }) : null]
    });
  }
  var _v112 = _v0.i(0);
  _v0.s(["LandingPageSettings", 0, function () {
    let {
      settings: _v0
    } = (0, _v11.useOrionSettings)();
    return (0, _v1.jsxs)(_v7.Flex, {
      direction: "column",
      gap: (0, _v8.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v9.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: (0, _v10.translate)({
          singular: "The event landing page is what users see when you share the link to this event.",
          dictionary: {
            es: {
              singular: "La página de destino del evento es lo que ven los usuarios cuando compartes el enlace a este evento."
            },
            "de-DE": {
              singular: "Die Event-Landingpage ist die Seite, die Nutzer sehen, wenn Sie den Link zu dieser Veranstaltung teilen."
            },
            "fr-FR": {
              singular: "La page de destination de l'événement est ce que voient les utilisateurs lorsque vous partagez le lien vers cet événement."
            },
            "ja-JP": {
              singular: "イベントのランディングページは、このイベントへのリンクを共有したときにユーザーが見るページです。"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지는 이 이벤트의 링크를 공유했을 때 사용자가 보게 되는 페이지입니다."
            },
            "pt-BR": {
              singular: "A página de destino do evento é o que os usuários veem quando você compartilha o link deste evento."
            },
            "zh-CN": {
              singular: "活动着陆页是在您分享该活动链接时用户看到的页面。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v2.Accordion, {
        allowMultiple: !0,
        defaultIndex: [0, 1],
        width: "100%",
        children: [(0, _v1.jsxs)(_v5.AccordionItem, {
          children: [(0, _v1.jsx)(_v9.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v3.AccordionButton, {
              children: [(0, _v10.translate)({
                singular: "Navbar logo",
                dictionary: {
                  es: {
                    singular: "Logotipo de la barra de navegación"
                  },
                  "de-DE": {
                    singular: "Navbar-Logo"
                  },
                  "fr-FR": {
                    singular: "Logo de la barre de navigation"
                  },
                  "ja-JP": {
                    singular: "ナビゲーションバーのロゴ"
                  },
                  "ko-KR": {
                    singular: "네비게이션 바 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo da barra de navegação"
                  },
                  "zh-CN": {
                    singular: "导航栏徽标"
                  }
                }
              }), (0, _v1.jsx)(_v4.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v6.AccordionPanel, {
            children: (0, _v1.jsx)(_v111, {})
          })]
        }), _v0.release_single_event_customization ? (0, _v1.jsxs)(_v5.AccordionItem, {
          children: [(0, _v1.jsx)(_v9.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v3.AccordionButton, {
              children: [_v112.translations.speakers, (0, _v1.jsx)(_v4.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v6.AccordionPanel, {
            children: (0, _v1.jsx)(_v105, {})
          })]
        }) : null]
      })]
    });
  }], 0);
}