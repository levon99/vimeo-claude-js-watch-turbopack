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
    _v17 = _v0.i(0);
  async function _v18({
    baseUrl: _v0,
    select: _v1,
    where: {
      channelId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v16.measureLatency)("getChannel", "GET", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v2}?${(0, _v17.searchQueryString)(_v3)}&fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  async function _v19({
    baseUrl: _v0,
    where: {
      channelId: _v1
    },
    ..._v2
  }) {
    return (0, _v16.measureLatency)("deleteChannel", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  async function _v20({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      channelId: _v3
    },
    ..._v4
  }) {
    return (0, _v16.measureLatency)("patchChannel", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v3}?fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v17.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v21.default)(_v2 ? `/channels/${_v2.where.channelId}${(0, _v15.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v18({
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
  function _v25() {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/channels/${_v0.where.channelId}${(0, _v15.serializeQuery)(_v0)}`, _v18({
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
  }
  async function _v26({
    baseUrl: _v0,
    select: _v1,
    where: {
      channelId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v16.measureLatency)("getChannelCurationComponents", "GET", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v2}/curation_components?${(0, _v17.searchQueryString)(_v3)}&fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v24, {
    endpoint: "/channels/:channelId",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v25, {
    endpoint: "/channels/:channelId",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/channels/${_v0.where.channelId}${(0, _v15.serializeQuery)(_v0)}`, _v19({
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
    endpoint: "/channels/:channelId",
    method: "DELETE"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/channels/${_v0.where.channelId}${(0, _v15.serializeQuery)(_v0)}`, _v20({
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
    endpoint: "/channels/:channelId",
    method: "PATCH"
  });
  var _v27 = _v0.i(0);
  function _v28(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v21.default)(_v2 ? `/channels/${_v2.where.channelId}/curation_components${(0, _v15.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v26({
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
  "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v28, {
    endpoint: "/channels/:channelId/curation_components",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/channels/${_v0.where.channelId}/curation_components${(0, _v15.serializeQuery)(_v0)}`, _v26({
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
    endpoint: "/channels/:channelId/curation_components",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v27.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/channels/${_v2.where.channelId}/curation_components?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v26({
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
    endpoint: "/channels/:channelId/curation_components",
    method: "GET"
  });
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  async function _v36({
    baseUrl: _v0,
    select: _v1,
    where: {
      channelId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v16.measureLatency)("getChannelVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v2}/videos?${(0, _v17.searchQueryString)(_v3)}&fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  async function _v37({
    baseUrl: _v0,
    variables: _v1,
    where: {
      channelId: _v2
    },
    ..._v3
  }) {
    return (0, _v16.measureLatency)("putChannelVideos", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v2}/videos`, {
        ..._v3,
        method: "PUT",
        body: JSON.stringify((0, _v17.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  async function _v38({
    baseUrl: _v0,
    variables: _v1,
    where: {
      channelId: _v2
    },
    ..._v3
  }) {
    return (0, _v16.measureLatency)("deleteChannelVideos", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/channels/${_v2}/videos`, {
        ..._v3,
        method: "DELETE",
        body: JSON.stringify((0, _v17.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  function _v39(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v21.default)(_v2 ? `/channels/${_v2.where.channelId}/videos${(0, _v15.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v36({
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
  function _v40(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v27.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/channels/${_v2.where.channelId}/videos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v36({
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
  }
  "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v39, {
    endpoint: "/channels/:channelId/videos",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/channels/${_v0.where.channelId}/videos${(0, _v15.serializeQuery)(_v0)}`, _v36({
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
    endpoint: "/channels/:channelId/videos",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v40, {
    endpoint: "/channels/:channelId/videos",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v23.useGctlConfig)(),
      [_v4, _v5] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v37({
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
    endpoint: "/channels/:channelId/videos",
    method: "PUT"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v23.useGctlConfig)(),
      [_v4, _v5] = (0, _v15.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v38({
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
    endpoint: "/channels/:channelId/videos",
    method: "DELETE"
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = ({
    channel: _v0,
    channelId: _v1
  }) => {
    let _v2 = (0, _v47.useViewer)(),
      _v3 = (0, _v33.useBreakpointValue)({
        base: 3,
        xl: 4,
        "2xl": 5,
        "3xl": 6
      }) || 3,
      _v4 = (0, _v33.useBreakpointValue)({
        base: 1,
        md: 3,
        lg: 2
      }) || 2,
      [_v5, _v6] = (0, _v10.useState)(0),
      _v7 = (0, _v33.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      _v8 = (0, _v10.useRef)(null),
      _v9 = (0, _v10.useRef)(!1),
      _v10 = "desktop" === (0, _v46.default)(),
      {
        data: _v11,
        size: _v12,
        setSize: _v13,
        isLoading: _v14
      } = _v40(() => ({
        where: {
          channelId: _v1
        },
        select: ["name", "link", "pictures.sizes.link", "uri", "stats.plays", "user.link", "user.name", "user.pictures.sizes.link", "duration", "createdTime", "configUrl", "badge.type", ...(_v10 ? ["user.backgroundVideo.aspectRatio", "user.backgroundVideo.clipId", "user.backgroundVideo.configUrl", "user.backgroundVideo.endTime", "user.backgroundVideo.firstFrameUrl", "user.backgroundVideo.startTime", "user.backgroundVideo.yPosition", "user.locationDetails.formattedAddress", "user.membership", "user.skills.name", "user.metadata.connections.followers.total", "user.metadata.interactions.follow", "user.uri", "user.pictures.sizes.width"] : [])],
        query: {
          sizes: _v7 ? "270x152" : "640",
          perPage: _v7 ? 4 : _v3 * _v4,
          sort: "added"
        }
      }), {
        initialSize: _v7 ? void 0 : 2,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateAll: !1,
        revalidateFirstPage: !1
      }),
      _v15 = !!(_v11 && void 0 === _v11[_v5]),
      _v16 = !_v11?.[_v11?.length - 1]?.paging?.next;
    return (0, _v10.useEffect)(() => {
      _v5 > _v12 - 2 && !_v16 && _v13(_v12 + 1);
    }, [_v5, _v12, _v13, _v16]), (0, _v10.useEffect)(() => {
      _v14 || _v9.current || !_v11 || (_v9.current = !0, (0, _v49.trackWidgetViewEvent)({
        viewer: _v2,
        widgetName: "Recently added",
        widgetPlacement: 2,
        ..._v49.staffPicksBpValues
      }));
    }, [_v14, _v11, _v2]), (0, _v1.jsxs)(_v42.Playlist, {
      w: "100%",
      gap: "sm",
      minHeight: "300px",
      children: [(0, _v1.jsx)(_v53, {
        data: _v11?.[_v5 + 1]?.data ?? [],
        rel: "prefetch"
      }), (0, _v1.jsx)(_v43.PlaylistHeader, {
        header: {
          text: (0, _v41.translate)({
            singular: "Recently added",
            dictionary: {
              es: {
                singular: "Añadidos recientemente"
              },
              "de-DE": {
                singular: "Kürzlich hinzugefügt"
              },
              "fr-FR": {
                singular: "Récemment ajouté(s)"
              },
              "ja-JP": {
                singular: "最近追加されたタイトル"
              },
              "ko-KR": {
                singular: "최근에 추가된 동영상"
              },
              "pt-BR": {
                singular: "Adicionado recentemente"
              },
              "zh-CN": {
                singular: "最近添加"
              }
            }
          }),
          to: `${_v0.link}/videos`
        },
        onClick: () => {
          (0, _v49.trackPlaylistClick)({
            copy: "Recently added",
            source: {
              sourceType: "channel",
              sourceId: 927
            },
            element: "button",
            location: "header",
            target: _v0.link,
            widgetName: "Recently added",
            widgetPlacement: 2,
            viewer: _v2,
            ..._v49.staffPicksBpValues
          });
        },
        pt: 0,
        children: (0, _v1.jsx)(_v13.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "fit-content",
          children: !_v7 && (0, _v1.jsx)(_v44.NavigationButtons, {
            disableNextButton: _v16 && _v5 === (_v11?.length ?? 1) - 1,
            disablePrevButton: 0 === _v5,
            onNextClick: () => {
              (0, _v49.trackPlaylistNavigation)({
                flow: "forward",
                viewer: _v2,
                widgetName: "Recently added",
                widgetPlacement: 2,
                ..._v49.staffPicksBpValues
              }), _v6(_v5 + 1);
            },
            onPrevClick: () => {
              (0, _v49.trackPlaylistNavigation)({
                flow: "backward",
                viewer: _v2,
                widgetName: "Recently added",
                widgetPlacement: 2,
                ..._v49.staffPicksBpValues
              }), _v6(_v5 - 1);
            },
            marginLeft: "auto"
          })
        })
      }), (0, _v1.jsx)(_v13.Flex, {
        dir: "row",
        ref: _v8,
        gap: "sm",
        children: (0, _v1.jsx)(_v50.ResponsiveWrapper, {
          isLoading: _v14 || _v15 && _v5 > 0,
          numOfRows: _v4,
          numOfColumns: _v3,
          isMobile: _v7,
          children: _v11?.[_v5]?.data?.map(_v0 => {
            let _v1 = (0, _v41.translate)({
                singular: "{COUNT} view",
                plural: "{COUNT} views",
                count: _v0?.stats?.plays ?? 0,
                replacements: {
                  COUNT: (0, _v41.humanize)(_v0?.stats?.plays ?? 0)
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} vista",
                    plural: "{COUNT} vistas"
                  },
                  "de-DE": {
                    singular: "{COUNT} Ansicht",
                    plural: "{COUNT} Ansichten"
                  },
                  "fr-FR": {
                    singular: "{COUNT} vue",
                    plural: "{COUNT} vues"
                  },
                  "ja-JP": {
                    singular: "視聴回数: {COUNT}",
                    plural: "視聴回数: {COUNT}"
                  },
                  "ko-KR": {
                    singular: "{COUNT}회",
                    plural: "{COUNT}회"
                  },
                  "pt-BR": {
                    singular: "{COUNT} visualização",
                    plural: "{COUNT} visualizações"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 观看",
                    plural: "{COUNT} 次观看"
                  }
                }
              }),
              _v2 = _v0?.stats?.plays ? _v1 : "",
              _v3 = _v0.badge?.type && ["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"].includes(_v0.badge.type);
            return (0, _v1.jsx)(_v34.VideoCard, {
              hoverActions: (0, _v1.jsx)(_v51.WatchPlaylistHoverActions, {
                video: _v0
              }),
              title: _v0.name,
              href: _v0.link,
              thumbnailSrc: _v0.pictures?.sizes[0].link,
              subtitle: _v2,
              avatarSrc: _v0.user.pictures?.sizes[0].link || "",
              avatarName: _v0.user.name,
              hasFollow: !0,
              followSource: "Watch",
              tagText: (0, _v35.secondsToDisplay)(_v0.duration),
              tagTextStyles: {
                opacity: 0,
                _groupHover: {
                  opacity: 1
                },
                _groupFocusWithin: {
                  opacity: 1
                },
                transition: "opacity 0.2s ease"
              },
              configUrl: _v0.configUrl ?? "",
              clipId: (0, _v48.idFromUri)(_v0.uri),
              creator: {
                name: _v0.user.name,
                link: _v0.user.link,
                user: _v0.user,
                showCard: _v10,
                onClick: () => {
                  (0, _v49.trackCreatorNameClick)({
                    target: _v0.user.link,
                    viewer: _v2,
                    widgetName: "Recently added",
                    widgetPlacement: 2,
                    ..._v49.staffPicksBpValues
                  });
                }
              },
              shouldUseNextLink: !1,
              onClick: () => {
                (0, _v49.trackPlaylistVideoClick)({
                  target: _v0.link,
                  videoId: (0, _v48.idFromUri)(_v0.uri),
                  viewer: _v2,
                  widgetName: "Recently added",
                  widgetPlacement: 2,
                  ..._v49.staffPicksBpValues
                });
              },
              titleStyles: {
                maxWidth: {
                  base: "15rem",
                  md: "calc(100% - 2.5rem)"
                },
                minWidth: "9rem"
              },
              hasPlayOnHover: _v10,
              ...(_v3 && {
                topLeftDecoration: (0, _v1.jsx)(_v45.StaffPickBadge, {})
              })
            }, _v0.uri);
          })
        })
      })]
    });
  };
  function _v53({
    data: _v0,
    rel: _v1
  }) {
    return (0, _v1.jsx)(_v2.default, {
      children: _v0.map(_v0 => {
        let _v1 = _v0.pictures?.sizes[0]?.link;
        return _v1 && (0, _v1.jsx)("link", {
          as: "image",
          rel: _v1,
          href: _v1
        }, _v0?.uri);
      })
    });
  }
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = ({
      ..._v0
    }) => (0, _v1.jsxs)(_v55.bokeh.svg, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 96 96",
      fill: "none",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      ..._v0,
      children: [(0, _v1.jsx)("rect", {
        width: "96",
        height: "96",
        rx: "48",
        fill: "#97A1AD"
      }), (0, _v1.jsx)("path", {
        d: "M37.2973 37.9531V34.3636H58.6858V37.9531H50.0629V62H45.9067V37.9531H37.2973Z",
        fill: "black"
      }), (0, _v1.jsx)("rect", {
        width: "96",
        height: "96",
        rx: "48",
        fill: "url(#pattern0_29670_2235)"
      }), (0, _v1.jsx)("rect", {
        x: "0.25",
        y: "0.25",
        width: "95.5",
        height: "95.5",
        rx: "47.75",
        stroke: "black",
        strokeOpacity: "0.1",
        strokeWidth: "0.5"
      }), (0, _v1.jsxs)("defs", {
        children: [(0, _v1.jsx)("pattern", {
          id: "pattern0_29670_2235",
          patternContentUnits: "objectBoundingBox",
          width: "1",
          height: "1",
          children: (0, _v1.jsx)("use", {
            xlinkHref: "#image0_29670_2235",
            transform: "scale(0.00462963)"
          })
        }), (0, _v1.jsx)("image", {
          id: "image0_29670_2235",
          width: "216",
          height: "216",
          preserveAspectRatio: "none",
          xlinkHref: "data:image/jpeg;base64,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"
        })]
      })]
    }),
    _v74 = ({
      authModalType: _v0,
      channelId: _v1,
      channel: _v2,
      setShowLoginJoinModal: _v3
    }) => {
      let _v4 = (0, _v47.useViewer)(),
        _v5 = (0, _v33.useBreakpointValue)({
          base: !0,
          lg: !1
        }),
        {
          data: _v6,
          isLoading: _v7
        } = _v39({
          select: ["link", "name", "uri", "user.link", "user.name", "pictures"],
          query: {
            perPage: _v5 ? 1 : 5,
            sizes: "1824",
            sort: "added"
          },
          where: {
            channelId: _v1
          }
        }),
        _v8 = (0, _v9.useRouter)(),
        [_v9, _v10] = (0, _v10.useState)(_v2.metadata.interactions?.follow.added),
        [_v11, _v12] = (0, _v70.usePutMeChannel)(),
        [_v13, _v14] = (0, _v70.useDeleteMeChannel)(),
        [_v15, _v16] = _v25(),
        [_v17, _v18] = (0, _v10.useState)(!1);
      (0, _v10.useEffect)(() => {
        _v16.data?.metadata.interactions?.follow && _v10(_v16.data.metadata.interactions?.follow?.added);
      }, [_v16.data]);
      let _v19 = (0, _v72.useMarginXValue)({
          base: "0",
          md: "0",
          lg: (0, _v61.rem)(32)
        }),
        _v20 = (0, _v33.useBreakpointValue)({
          base: (0, _v61.rem)(16),
          lg: (0, _v61.rem)(24)
        }),
        _v21 = (0, _v10.useRef)(!1),
        _v22 = _v6?.data,
        [_v23, _v24] = (0, _v10.useState)(void 0),
        _v25 = (0, _v10.useCallback)(_v0 => {
          if (_v22 && _v22[_v0]) return (0, _v48.idFromUri)(_v22[_v0].uri);
        }, [_v22]);
      (0, _v10.useEffect)(() => {
        _v7 || _v21.current || (_v21.current = !0, _v24(0), (0, _v49.trackWidgetViewEvent)({
          feature: "staffpicks",
          pageName: "staffpicks",
          videoId: _v25(0),
          viewer: _v4,
          widgetName: "channel_video_hero",
          widgetPlacement: 1
        }));
      }, [_v25, _v7, _v4]);
      let _v26 = (0, _v33.useBreakpointValue)({
        base: !0,
        md: !1
      });
      if (_v7) return (0, _v1.jsx)(_v75, {});
      let _v27 = {
          base: "linear-gradient(0deg, #000 15%, rgba(0, 0, 0, 0.00) 75%)",
          lg: "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 75%)"
        },
        _v28 = 927 === _v1,
        _v29 = _v23 ? _v22?.[_v23] : void 0;
      return (0, _v1.jsxs)(_v57.Carousel, {
        slideCount: _v22?.length || 0,
        height: {
          base: (0, _v61.rem)(400),
          "2xl": (0, _v61.rem)(480)
        },
        padding: _v19,
        spacing: _v20,
        sx: {
          '> [data-part="item-group"]': {
            overscrollBehaviorY: "unset !important"
          }
        },
        flexShrink: "0",
        onPageChange: _v0 => {
          (0, _v49.trackWidgetViewEvent)({
            feature: "staffpicks",
            pageName: "staffpicks",
            videoId: _v25(_v0.page),
            viewer: _v4,
            widgetName: "channel_video_hero",
            widgetPlacement: 1
          }), _v0.page >= 0 && _v24(_v0.page);
        },
        ...(!_v26 && {
          autoplay: {
            delay: 0
          }
        }),
        children: [!_v5 && (0, _v1.jsxs)(_v57.CarouselControl, {
          width: "100%",
          display: {
            base: "none",
            md: "flex"
          },
          children: [(0, _v1.jsx)(_v57.CarouselPrevTrigger, {
            height: "100% !important",
            size: "lg",
            bg: "transparent",
            borderRadius: "unset",
            sx: {
              svg: {
                opacity: .6
              },
              _hover: {
                backgroundColor: "unset !important",
                svg: {
                  opacity: 1
                }
              }
            },
            width: {
              base: (0, _v61.rem)(32),
              xl: (0, _v61.rem)(48)
            },
            zIndex: "2"
          }), (0, _v1.jsx)(_v57.CarouselNextTrigger, {
            height: "100% !important",
            size: "lg",
            bg: "transparent",
            borderRadius: "unset",
            sx: {
              svg: {
                opacity: .6
              },
              _hover: {
                backgroundColor: "unset !important",
                svg: {
                  opacity: 1
                }
              }
            },
            width: {
              base: (0, _v61.rem)(32),
              xl: (0, _v61.rem)(48)
            },
            zIndex: "2",
            justifyContent: "flex-end"
          })]
        }), (0, _v1.jsxs)(_v57.CarouselItemGroup, {
          width: "100%",
          marginBottom: {
            base: 0,
            lg: "unset"
          },
          overscrollBehaviorX: "contain",
          overscrollBehaviorY: "unset",
          sx: {
            "> [data-inview]": {
              opacity: 1,
              transition: "opacity 0.5s ease-in"
            }
          },
          children: [_v22?.map((_v0, _v1) => (0, _v1.jsx)(_v57.CarouselItem, {
            index: _v1,
            borderRadius: {
              base: "none",
              lg: "md"
            },
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            opacity: .25,
            transition: "opacity 0.5s ease-out",
            children: (0, _v1.jsxs)(_v54.default, {
              href: _v0.link,
              onClick: () => {
                (0, _v49.trackCarouselVideoClickEvent)({
                  copy: null,
                  feature: "staffpicks",
                  pageName: "staffpicks",
                  target: _v0.link,
                  videoId: (0, _v48.idFromUri)(_v0.uri),
                  viewer: _v4
                });
              },
              children: [(0, _v1.jsx)(_v12.Box, {
                backgroundImage: `url(${_v0.pictures.sizes[0].link})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                role: "img"
              }), (0, _v1.jsx)(_v12.Box, {
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "100%",
                background: _v27
              }), (0, _v1.jsx)(_v62.Show, {
                above: "lg",
                children: _v29 ? (0, _v1.jsx)(_v58.DarkMode, {
                  children: (0, _v1.jsx)(_v56.Button, {
                    leftIcon: (0, _v1.jsx)(_v68.PlayFilled, {}),
                    position: "absolute",
                    right: "lg",
                    variant: "blur",
                    bottom: "lg",
                    py: "xs",
                    height: "unset",
                    onClick: () => {
                      (0, _v49.trackCarouselVideoClickEvent)({
                        copy: `${_v29.name}`,
                        element: "button",
                        feature: "staffpicks",
                        pageName: "staffpicks",
                        target: _v22?.[0]?.link || "",
                        videoId: (0, _v48.idFromUri)(_v22?.[0]?.uri),
                        viewer: _v4
                      });
                    },
                    children: (0, _v1.jsxs)(_v65.VStack, {
                      dir: "column",
                      gap: "0",
                      alignItems: "flex-start",
                      children: [(0, _v1.jsx)(_v64.Text, {
                        variant: {
                          base: "heading-2xs",
                          "3xl": "heading-xs"
                        },
                        maxWidth: "160px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        children: _v29.name
                      }), (0, _v1.jsx)(_v64.Text, {
                        variant: "body-sm",
                        maxWidth: "160px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        children: _v29.user.name
                      })]
                    })
                  })
                }) : (0, _v1.jsx)(_v1.Fragment, {})
              })]
            })
          }, _v0.uri)), (0, _v1.jsx)(_v54.default, {
            href: _v29 ? _v29.link : "",
            onClick: () => {
              (0, _v49.trackCarouselVideoClickEvent)({
                copy: null,
                element: "text",
                feature: "staffpicks",
                pageName: "staffpicks",
                target: _v29?.link || "",
                videoId: (0, _v48.idFromUri)(_v29?.uri),
                viewer: _v4
              });
            },
            children: (0, _v1.jsxs)(_v13.Flex, {
              position: "absolute",
              bottom: {
                base: "md",
                sm: "lg",
                md: "xl",
                xl: "3xl"
              },
              left: {
                base: "md",
                sm: "lg",
                md: "xl",
                lg: "4rem",
                xl: "6rem"
              },
              right: {
                base: "md",
                sm: "lg",
                md: "xl",
                lg: "4rem",
                xl: "6rem"
              },
              direction: "column",
              gap: {
                base: "md",
                lg: "lg"
              },
              maxW: "45rem",
              children: [_v28 ? (0, _v1.jsx)(_v73, {
                width: {
                  base: (0, _v61.rem)(64),
                  lg: (0, _v61.rem)(96)
                },
                height: {
                  base: (0, _v61.rem)(64),
                  lg: (0, _v61.rem)(96)
                }
              }) : (0, _v1.jsx)(_v55.bokeh.img, {
                src: _v2.pictures.sizes[0].link,
                height: {
                  base: (0, _v61.rem)(64),
                  lg: (0, _v61.rem)(96)
                },
                borderRadius: "round",
                width: "fit-content",
                objectFit: "cover"
              }), (0, _v1.jsxs)(_v13.Flex, {
                direction: "column",
                gap: "sm",
                children: [(0, _v1.jsx)(_v59.Header, {
                  as: "p",
                  size: {
                    base: "md",
                    sm: "lg",
                    md: "xl",
                    "2xl": "2xl"
                  },
                  pb: "2px",
                  color: "gray.50",
                  noOfLines: 3,
                  children: _v2.name
                }), (0, _v1.jsx)(_v58.DarkMode, {
                  children: (0, _v1.jsx)(_v71.VideoAndFollowersCount, {
                    textVariant: {
                      base: "body-sm",
                      md: "body-md"
                    },
                    totalVideos: _v2.metadata?.connections?.videos?.total,
                    totalFollowers: _v2.metadata?.connections?.users?.total,
                    mt: "-2px",
                    videosHref: `${_v2.link}/videos`,
                    followersHref: `${_v2.link}/followers`
                  })
                }), _v2.description && (0, _v1.jsx)(_v64.Text, {
                  variant: {
                    base: "body-md",
                    xl: "body-lg"
                  },
                  color: "gray.50",
                  noOfLines: 3,
                  children: _v2.description
                })]
              }), _v22 ? (0, _v1.jsx)(_v58.DarkMode, {
                children: (0, _v1.jsxs)(_v60.HStack, {
                  children: [(0, _v1.jsx)(_v56.Button, {
                    variant: "primary",
                    leftIcon: (0, _v1.jsx)(_v68.PlayFilled, {}),
                    width: {
                      base: "unset",
                      md: "fit-content"
                    },
                    as: "a",
                    href: _v22?.[0]?.link,
                    onClick: _v0 => {
                      _v0.preventDefault(), _v8.push(_v22?.[0]?.link), (0, _v49.trackCarouselVideoClickEvent)({
                        copy: "start watching",
                        feature: "staffpicks",
                        pageName: "staffpicks",
                        target: _v22?.[0]?.link || "",
                        videoId: (0, _v48.idFromUri)(_v22?.[0]?.uri),
                        viewer: _v4
                      });
                    },
                    children: (0, _v41.translate)({
                      singular: "Start watching",
                      dictionary: {
                        es: {
                          singular: "Empezar a ver"
                        },
                        "de-DE": {
                          singular: "Jetzt Videos anschauen"
                        },
                        "fr-FR": {
                          singular: "Regarder"
                        },
                        "ja-JP": {
                          singular: "視聴開始"
                        },
                        "ko-KR": {
                          singular: "동영상 보기"
                        },
                        "pt-BR": {
                          singular: "Comece a assistir"
                        },
                        "zh-CN": {
                          singular: "开始观看"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v56.Button, {
                    variant: "blur",
                    onMouseEnter: () => _v18(!0),
                    onMouseLeave: () => _v18(!1),
                    isLoading: _v12.loading || _v14.loading || _v16.loading,
                    isDisabled: _v12.loading || _v14.loading || _v16.loading,
                    leftIcon: _v9 ? _v17 ? (0, _v1.jsx)(_v67.CloseXSmall, {}) : (0, _v1.jsx)(_v66.Checkmark, {}) : (0, _v1.jsx)(_v69.Plus, {}),
                    width: _v9 ? (0, _v61.rem)(125) : "unset",
                    onClick: async _v0 => {
                      _v0.preventDefault(), (0, _v49.trackFollowClick)({
                        channelId: _v1,
                        copy: _v9 ? "unfollow" : "follow",
                        entityType: "channel",
                        feature: "staffpicks",
                        location: "carousel",
                        pageName: "staffpicks",
                        widgetName: "channel_video_hero",
                        widgetPlacement: 1,
                        viewer: _v4
                      }), _v4?.user ? (await (_v9 ? _v13 : _v11)({
                        where: {
                          channelId: _v1
                        }
                      }), await _v15({
                        where: {
                          channelId: _v1
                        },
                        select: ["metadata.interactions.follow.added"]
                      }), _v18(!1)) : ((0, _v49.trackTriggerAuthFlow)({
                        flow: _v0,
                        feature: "staffpicks",
                        pageName: "staffpicks"
                      }), _v3(!0));
                    },
                    children: _v9 ? _v17 ? (0, _v41.translate)({
                      singular: "Unfollow",
                      dictionary: {
                        es: {
                          singular: "Dejar de seguir"
                        },
                        "de-DE": {
                          singular: "Nicht mehr folgen"
                        },
                        "fr-FR": {
                          singular: "Ne plus suivre"
                        },
                        "ja-JP": {
                          singular: "フォロー解除"
                        },
                        "ko-KR": {
                          singular: "팔로우 취소"
                        },
                        "pt-BR": {
                          singular: "Parar de seguir"
                        },
                        "zh-CN": {
                          singular: "取消关注"
                        }
                      }
                    }) : (0, _v41.translate)({
                      singular: "Following",
                      dictionary: {
                        es: {
                          singular: "Siguiendo"
                        },
                        "de-DE": {
                          singular: "Folgt"
                        },
                        "fr-FR": {
                          singular: "Abonné"
                        },
                        "ja-JP": {
                          singular: "フォロー中"
                        },
                        "ko-KR": {
                          singular: "팔로잉"
                        },
                        "pt-BR": {
                          singular: "Seguindo"
                        },
                        "zh-CN": {
                          singular: "关注"
                        }
                      }
                    }) : (0, _v41.translate)({
                      singular: "Follow",
                      dictionary: {
                        es: {
                          singular: "Seguir"
                        },
                        "de-DE": {
                          singular: "Folgen"
                        },
                        "fr-FR": {
                          singular: "Suivre"
                        },
                        "ja-JP": {
                          singular: "フォロー"
                        },
                        "ko-KR": {
                          singular: "팔로우"
                        },
                        "pt-BR": {
                          singular: "Seguir"
                        },
                        "zh-CN": {
                          singular: "关注"
                        }
                      }
                    })
                  })]
                })
              }) : (0, _v1.jsx)(_v1.Fragment, {})]
            })
          })]
        }), !_v5 && (0, _v1.jsx)(_v57.CarouselIndicatorGroup, {
          bottom: {
            base: "0",
            lg: "5%"
          },
          height: "30px",
          children: _v22?.map((_v0, _v1) => (0, _v1.jsx)(_v57.CarouselIndicator, {
            bgColor: {
              base: "text-secondary",
              lg: "whiteAlpha.500"
            },
            index: _v1,
            size: "sm",
            height: "8px",
            width: "8px",
            sx: {
              "&[data-current]": {
                bgColor: {
                  base: "text-primary",
                  lg: "white"
                },
                height: "12px",
                width: "12px"
              },
              _hover: {
                bgColor: {
                  base: "text-primary",
                  lg: "white"
                }
              }
            }
          }, _v1))
        })]
      }, _v22?.length);
    },
    _v75 = () => {
      let _v0 = (0, _v72.useMarginXValue)({
        base: "0",
        md: "0",
        lg: (0, _v61.rem)(32)
      });
      return (0, _v1.jsx)(_v63.Skeleton, {
        height: {
          base: (0, _v61.rem)(400),
          "2xl": (0, _v61.rem)(480)
        },
        width: "unset",
        borderRadius: {
          base: "none",
          lg: "md"
        },
        marginX: _v0
      });
    };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = (0, _v7.default)(async () => {
    let {
      LoginJoinModal: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    }
  });
  function _v81({
    channelId: _v0,
    playerAssetUrls: _v1
  }) {
    let _v2 = (0, _v32.useOptionalViewer)(),
      [_v3, _v4] = (0, _v10.useState)(!1),
      [_v5, _v6] = (0, _v10.useState)("join"),
      _v7 = (0, _v8.usePathname)(),
      _v8 = (0, _v9.useRouter)(),
      {
        data: _v9
      } = _v24(() => _v2 ? {
        where: {
          channelId: _v0
        },
        query: {
          sizes: "216x"
        },
        select: ["name", "description", "metadata.connections.users.total", "metadata.connections.videos.total", "metadata.interactions.follow.added", "pictures", "link"]
      } : null),
      _v10 = (0, _v72.useMarginXValue)(),
      {
        data: _v11
      } = _v28(() => 927 === _v0 && _v2 ? {
        where: {
          channelId: _v0
        },
        select: ["uri", "title", "flairUrl", "artUrl", "shortTitle", "sourceDescription", "showCard", "link", "metadata.interactions.follow.added", "sourceId", "sourceType", "metadata.connections.videos.total", "metadata.connections.users.total"]
      } : null),
      [_v12, _v13] = (0, _v10.useState)(null),
      _v14 = (0, _v79.useShowCard)();
    return (0, _v1.jsxs)(_v12.Box, {
      children: [(0, _v1.jsxs)(_v13.Flex, {
        minHeight: "calc(100vh - 64px)",
        gap: {
          base: "md",
          xl: "lg"
        },
        flexDir: "column",
        children: [_v9 ? (0, _v1.jsx)(_v74, {
          authModalType: _v5,
          channelId: _v0,
          channel: _v9,
          setShowLoginJoinModal: _v4
        }) : (0, _v1.jsx)(_v75, {}), (0, _v1.jsx)(_v82, {
          type: _v31.PlayerType.BarebonePlayer,
          assetUrls: _v1,
          children: (0, _v1.jsxs)(_v13.Flex, {
            flexDir: "column",
            gap: {
              base: "sm",
              md: "lg",
              xl: "2xl"
            },
            mx: _v10,
            minHeight: "400px",
            children: [_v9 ? (0, _v1.jsx)(_v52, {
              channel: _v9,
              channelId: _v0
            }) : (0, _v1.jsx)(_v1.Fragment, {}), _v11?.data.map((_v0, _v1) => (0, _v1.jsx)(_v78.WatchPlaylist, {
              curationComponent: _v0,
              setShowLoginJoinModal: _v4,
              authModalType: _v5,
              widgetPlacement: _v1 + 2,
              shouldPreload: _v1 - 1 === _v12,
              onIntersection: () => _v13(_v1),
              hasSingleRow: !_v14 || !_v0.showCard,
              bpData: _v49.staffPicksBpValues
            }, _v0.uri))]
          })
        })]
      }), null !== _v2 && !_v2?.user && (0, _v1.jsx)(_v77.LoggedOutBanner, {
        page: "staffpicks"
      }), (0, _v1.jsx)(_v11.ThemeProvider, {
        theme: _v29.themes.light,
        children: (0, _v1.jsx)(_v80, {
          isShowing: _v3,
          type: _v5,
          onDismiss: () => _v4(!1),
          xsrft: _v2?.xsrft || "",
          updateInitialType: _v6,
          redirectUrl: _v7,
          onSuccess: () => {
            _v8.reload();
          },
          bpData: {}
        })
      }), (0, _v1.jsx)(_v76.FooterContainer, {
        viewer: _v2,
        onLoginSuccess: () => _v8.reload()
      })]
    });
  }
  let _v82 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v30.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v83 = ({
      playerAssetUrls: _v0
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: "Vimeo Staff Picks on Vimeo"
        }), (0, _v1.jsx)("meta", {
          name: "description",
          content: (0, _v6.translate)({
            singular: "The best short films on the internet, handpicked by Vimeo staff",
            dictionary: {
              es: {
                singular: "Los mejores cortometrajes de Internet, seleccionados por el equipo de Vimeo."
              },
              "de-DE": {
                singular: "Die besten Kurzfilme im Internet, sorgfältig vom Vimeo-Team ausgewählt"
              },
              "fr-FR": {
                singular: "Les meilleurs courts métrages sur Internet, sélectionnés par le staff Vimeo."
              },
              "ja-JP": {
                singular: "Vimeoスタッフが厳選したインターネット上で最高の短編映画"
              },
              "ko-KR": {
                singular: "Vimeo 스태프가 엄선한 최고의 단편 영화"
              },
              "pt-BR": {
                singular: "Os melhores curtas da internet, escolhidos a dedo pela equipe do Vimeo"
              },
              "zh-CN": {
                singular: "由 Vimeo Staff 精心挑选的互联网上最佳短片"
              }
            }
          })
        }), (0, _v1.jsx)("meta", {
          property: "og:title",
          content: "Vimeo Staff Picks"
        }), (0, _v1.jsx)("meta", {
          property: "al:ios:app_name",
          content: "Vimeo"
        }), (0, _v1.jsx)("meta", {
          property: "al:ios:app_store_id",
          content: "425194759"
        }), (0, _v1.jsx)("meta", {
          property: "al:ios:url",
          content: "vimeo://app.vimeo.com/explore"
        }), (0, _v1.jsx)("meta", {
          property: "al:android:app_name",
          content: "Vimeo"
        }), (0, _v1.jsx)("meta", {
          property: "al:android:package",
          content: "com.vimeo.android.videoapp"
        }), (0, _v1.jsx)("meta", {
          property: "al:android:url",
          content: "vimeo://app.vimeo.com/explore"
        }), (0, _v1.jsx)("meta", {
          property: "al:web:should_fallback",
          content: "true"
        }), (0, _v1.jsx)("link", {
          rel: "canonical",
          href: "https://vimeo.com/staffpicks"
        })]
      }), (0, _v1.jsx)(_v81, {
        playerAssetUrls: _v0,
        channelId: 927
      })]
    });
  _v83.getLayout = _v3.getLayout, (0, _v5.withPageSetup)(async _v0 => (await (0, _v4.isFromCopyrightRestrictedRegion)(_v0)) ? {
    redirect: {
      destination: "/europeanfilmacademy",
      permanent: !1
    }
  } : {
    props: {
      hasThemeSupport: !0,
      hasPlayerAPI: !0
    }
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v83], 0);
}