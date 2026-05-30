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
    _v23 = _v0.i(0);
  let _v24 = ({
    name: _v0,
    columnKey: _v1,
    sortBy: _v2,
    direction: _v3,
    toggleSortDirection: _v4
  }) => (0, _v1.jsxs)(_v3.Flex, {
    alignItems: "center",
    gap: "50",
    onClick: () => _v4(_v1),
    cursor: "pointer",
    children: [_v0, _v2 === _v1 && ("asc" === _v3 ? (0, _v1.jsx)(_v23.ChevronUpSmall, {}) : (0, _v1.jsx)(_v22.ChevronDownSmall, {}))]
  });
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  async function _v31({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      presetId: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("getTeamWatermarkingPreset", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/watermarking_presets/${_v3}?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v32({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      presetId: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("deleteTeamWatermarkingPreset", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/watermarking_presets/${_v3}?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v33({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      presetId: _v4
    },
    ..._v5
  }) {
    return (0, _v29.measureLatency)("patchTeamWatermarkingPreset", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v3}/watermarking_presets/${_v4}?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v30.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  function _v37() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/watermarking_presets/${_v0.where.presetId}${(0, _v28.serializeQuery)(_v0)}`, _v32({
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
  function _v38() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/watermarking_presets/${_v0.where.presetId}${(0, _v28.serializeQuery)(_v0)}`, _v33({
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
  async function _v39({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v29.measureLatency)("getTeamWatermarkingPresets", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/watermarking_presets?${(0, _v30.searchQueryString)(_v3)}&fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v40({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("postTeamWatermarkingPresets", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v3}/watermarking_presets?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v30.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/teams/${_v2.where.userId}/watermarking_presets/${_v2.where.presetId}${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v31({
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
    endpoint: "/teams/:userId/watermarking_presets/:presetId",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/watermarking_presets/${_v0.where.presetId}${(0, _v28.serializeQuery)(_v0)}`, _v31({
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
    endpoint: "/teams/:userId/watermarking_presets/:presetId",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v37, {
    endpoint: "/teams/:userId/watermarking_presets/:presetId",
    method: "DELETE"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v38, {
    endpoint: "/teams/:userId/watermarking_presets/:presetId",
    method: "PATCH"
  });
  var _v41 = _v0.i(0);
  function _v42(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/teams/${_v2.where.userId}/watermarking_presets${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v39({
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
  function _v43() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v36.useGctlConfig)(),
      [_v4, _v5] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v40({
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
  async function _v44({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2,
      presetId: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("getWorkspaceWatermarkingPreset", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/watermarking_presets/${_v3}?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v45({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2,
      presetId: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("deleteWorkspaceWatermarkingPreset", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/watermarking_presets/${_v3}?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v46({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3,
      presetId: _v4
    },
    ..._v5
  }) {
    return (0, _v29.measureLatency)("patchWorkspaceWatermarkingPreset", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/watermarking_presets/${_v4}?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v30.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  function _v47() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/watermarking_presets/${_v0.where.presetId}${(0, _v28.serializeQuery)(_v0)}`, _v45({
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
  function _v48() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/watermarking_presets/${_v0.where.presetId}${(0, _v28.serializeQuery)(_v0)}`, _v46({
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
  async function _v49({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v29.measureLatency)("getWorkspaceWatermarkingPresets", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/watermarking_presets?${(0, _v30.searchQueryString)(_v3)}&fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v50({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("postWorkspaceWatermarkingPresets", "POST", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/watermarking_presets?fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v30.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  function _v51(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/watermarking_presets${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v49({
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
  function _v52() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v36.useGctlConfig)(),
      [_v4, _v5] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v50({
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
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v42, {
    endpoint: "/teams/:userId/watermarking_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/watermarking_presets${(0, _v28.serializeQuery)(_v0)}`, _v39({
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
    endpoint: "/teams/:userId/watermarking_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v41.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/teams/${_v2.where.userId}/watermarking_presets?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v39({
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
    endpoint: "/teams/:userId/watermarking_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v43, {
    endpoint: "/teams/:userId/watermarking_presets",
    method: "POST"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/watermarking_presets/${_v2.where.presetId}${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v44({
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
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets/:presetId",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/watermarking_presets/${_v0.where.presetId}${(0, _v28.serializeQuery)(_v0)}`, _v44({
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
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets/:presetId",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v47, {
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets/:presetId",
    method: "DELETE"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v48, {
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets/:presetId",
    method: "PATCH"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v51, {
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/watermarking_presets${(0, _v28.serializeQuery)(_v0)}`, _v49({
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
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v41.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/workspaces/${_v2.where.workspaceUuid}/watermarking_presets?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v49({
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
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v52, {
    endpoint: "/workspaces/:workspaceUuid/watermarking_presets",
    method: "POST"
  });
  var _v53 = _v0.i(0);
  let _v54 = {
      "abc-retro": '"Courier New", monospace',
      "gt-america": '"Helvetica Neue", Helvetica, Arial, sans-serif',
      "circular-std": '"Lucida Grande", "Lucida Sans Unicode", sans-serif',
      helvetica: "Helvetica, Arial, sans-serif"
    },
    _v55 = [{
      value: "abc-retro",
      label: "Courier New"
    }, {
      value: "gt-america",
      label: "Helvetica Neue"
    }, {
      value: "circular-std",
      label: "Lucida Grande"
    }, {
      value: "helvetica",
      label: "Helvetica"
    }],
    _v56 = [{
      value: "horizontal",
      label: (0, _v21.translate)({
        singular: "Horizontal",
        dictionary: {
          "ja-JP": {
            singular: "水平"
          },
          "ko-KR": {
            singular: "가로"
          }
        }
      })
    }, {
      value: "vertical",
      label: (0, _v21.translate)({
        singular: "Vertical",
        dictionary: {
          "de-DE": {
            singular: "Vertikal"
          },
          "ja-JP": {
            singular: "垂直方向"
          },
          "ko-KR": {
            singular: "세로"
          }
        }
      })
    }],
    _v57 = () => ({
      name: "Watermark preset 1",
      fields: [{
        id: "1",
        type: "viewer_name",
        label: (0, _v21.translate)({
          singular: "Viewer's name",
          dictionary: {
            es: {
              singular: "Nombre del espectador"
            },
            "de-DE": {
              singular: "Name des Zuschauenden"
            },
            "fr-FR": {
              singular: "Nom du spectateur"
            },
            "ja-JP": {
              singular: "視聴者の名前"
            },
            "ko-KR": {
              singular: "뷰어 이름"
            },
            "pt-BR": {
              singular: "Nome do espectador"
            },
            "zh-CN": {
              singular: "观众的姓名"
            }
          }
        }),
        enabled: !0
      }, {
        id: "2",
        type: "viewer_email_address",
        label: (0, _v21.translate)({
          singular: "Viewer's email",
          dictionary: {
            es: {
              singular: "Correo electrónico del espectador"
            },
            "de-DE": {
              singular: "E-Mail-Adresse des Zuschauenden"
            },
            "fr-FR": {
              singular: "Adresse e-mail du spectateur"
            },
            "ja-JP": {
              singular: "視聴者のメールアドレス"
            },
            "ko-KR": {
              singular: "뷰어 이메일"
            },
            "pt-BR": {
              singular: "E-mail do espectador"
            },
            "zh-CN": {
              singular: "观众电子邮件"
            }
          }
        }),
        enabled: !1
      }, {
        id: "3",
        type: "ip_address",
        label: (0, _v21.translate)({
          singular: "IP address",
          dictionary: {
            es: {
              singular: "Dirección IP"
            },
            "de-DE": {
              singular: "IP-Adresse"
            },
            "fr-FR": {
              singular: "Adresse IP"
            },
            "ja-JP": {
              singular: "IPアドレス"
            },
            "ko-KR": {
              singular: "IP 주소"
            },
            "pt-BR": {
              singular: "Endereço IP"
            },
            "zh-CN": {
              singular: "IP 地址"
            }
          }
        }),
        enabled: !1
      }, {
        id: "4",
        type: "date_time",
        label: (0, _v21.translate)({
          singular: "Date & time",
          dictionary: {
            es: {
              singular: "Fecha y hora"
            },
            "de-DE": {
              singular: "Datum und Uhrzeit"
            },
            "fr-FR": {
              singular: "Date et heure"
            },
            "ja-JP": {
              singular: "日時"
            },
            "ko-KR": {
              singular: "날짜 및 시간"
            },
            "pt-BR": {
              singular: "Data e hora"
            },
            "zh-CN": {
              singular: "日期与时间"
            }
          }
        }),
        enabled: !1
      }, {
        id: "5",
        type: "custom_text",
        label: (0, _v21.translate)({
          singular: "Custom text",
          dictionary: {
            es: {
              singular: "Texto personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefinierter Text"
            },
            "fr-FR": {
              singular: "Texte personnalisé"
            },
            "ja-JP": {
              singular: "カスタムテキスト"
            },
            "ko-KR": {
              singular: "커스텀 텍스트"
            },
            "pt-BR": {
              singular: "Texto personalizado"
            },
            "zh-CN": {
              singular: "自定义文本"
            }
          }
        }),
        enabled: !1
      }],
      font: {
        family: "gt-america",
        size: "medium"
      },
      textColor: {
        hex: "#ffffff",
        opacity: 85
      },
      position: "bottom-right",
      direction: "horizontal",
      dropShadow: {
        hex: "#000000",
        opacity: 60
      }
    }),
    _v58 = 0,
    _v59 = {
      small: "30",
      medium: "50",
      large: "80"
    },
    _v60 = {
      30: "small",
      50: "medium",
      80: "large"
    },
    _v61 = {
      top: "0",
      center: "50",
      bottom: "100"
    },
    _v62 = {
      0: "top",
      50: "center",
      100: "bottom"
    },
    _v63 = {
      left: "0",
      center: "50",
      right: "100"
    },
    _v64 = {
      0: "left",
      50: "center",
      100: "right"
    },
    _v65 = {
      viewerName: "viewer_name",
      viewerEmailAddress: "viewer_email_address",
      ipAddress: "ip_address",
      dateTime: "date_time",
      customText: "custom_text"
    },
    _v66 = {
      viewer_name: "viewerName",
      viewer_email_address: "viewerEmailAddress",
      ip_address: "ipAddress",
      date_time: "dateTime"
    };
  function _v67(_v0) {
    var _v1;
    let _v2, _v3, _v4;
    if (!_v0 || !_v0.elements || 0 === _v0.elements.length) return _v57();
    let _v5 = _v0.elements[0],
      _v6 = _v5.id,
      _v7 = _v5.config,
      _v8 = _v5.layout,
      _v9 = (_v1 = _v7.content || [], _v2 = [], _v3 = [], _v1.forEach((_v0, _v1) => {
        let _v2 = Object.keys(_v0)[0],
          _v3 = _v65[_v2];
        if (!_v3) return;
        if ("custom_text" === _v3) return void _v2.push({
          id: `custom-${Date.now()}-${_v58++}`,
          type: "custom_text",
          label: "Custom",
          enabled: !0,
          customText: _v0.customText || "",
          order: _v1
        });
        let _v4 = _v57().fields.find(_v0 => _v0.type === _v3);
        if (!_v4) return;
        let _v5 = !0 === _v0[_v2],
          _v6 = {
            ..._v4,
            enabled: _v5,
            order: _v1
          };
        _v5 ? _v2.push(_v6) : _v3.push(_v6);
      }), _v4 = new Set([..._v2.map(_v0 => _v0.type), ..._v3.map(_v0 => _v0.type)]), _v57().fields.forEach((_v0, _v1) => {
        _v4.has(_v0.type) || _v3.push({
          ..._v0,
          enabled: !1,
          order: _v2.length + _v3.length + _v1
        });
      }), [..._v2, ..._v3]),
      _v10 = function (_v0, _v1) {
        let _v2 = String(_v0 || "0").trim(),
          _v3 = String(_v1 || "0").trim();
        if ("50" === _v2 && "50" === _v3) return "center";
        let _v4 = _v62[_v2] || "top",
          _v5 = _v64[_v3] || "left";
        return `${_v4}-${_v5}`;
      }(_v8?.positionVertical || "0", _v8?.positionHorizontal || "0"),
      _v11 = _v57();
    return {
      ..._v11,
      name: _v0.name || _v11.name,
      fields: _v9,
      font: {
        family: _v7.font || _v11.font.family,
        size: _v60[_v7.size] || _v57().font.size
      },
      textColor: {
        hex: _v7.fontColor || _v11.textColor.hex,
        opacity: _v7.opacity ? parseFloat(_v7.opacity) : _v11.textColor.opacity
      },
      position: _v10,
      direction: _v8.direction || _v11.direction,
      dropShadow: {
        hex: _v7.shadowColor || _v11.dropShadow.hex,
        opacity: _v7.shadowOpacity ? parseFloat(_v7.shadowOpacity) : _v11.dropShadow.opacity
      },
      elementId: _v6
    };
  }
  let _v68 = ["id", "name", "createdOn", "createdBy", "ownerId", "elements.config", "elements.config.content", "elements.layout"];
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = {
      "top-left": {
        top: (0, _v12.rem)(16),
        left: (0, _v12.rem)(16)
      },
      "top-center": {
        top: (0, _v12.rem)(16),
        left: "50%",
        transform: "translateX(-50%)"
      },
      "top-right": {
        top: (0, _v12.rem)(16),
        right: (0, _v12.rem)(16)
      },
      "center-left": {
        left: (0, _v12.rem)(16),
        top: "50%",
        transform: "translateY(-50%)"
      },
      center: {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      },
      "center-right": {
        right: (0, _v12.rem)(16),
        top: "50%",
        transform: "translateY(-50%)"
      },
      "bottom-left": {
        bottom: (0, _v12.rem)(16),
        left: (0, _v12.rem)(16)
      },
      "bottom-center": {
        bottom: (0, _v12.rem)(16),
        left: "50%",
        transform: "translateX(-50%)"
      },
      "bottom-right": {
        bottom: (0, _v12.rem)(16),
        right: (0, _v12.rem)(16)
      }
    },
    _v72 = ({
      config: _v0
    }) => {
      var _v1, _v2;
      let _v3,
        _v4,
        _v5 = (0, _v2.useMemo)(() => _v0.fields?.filter(_v0 => _v0.enabled) || [], [_v0.fields]),
        _v6 = (0, _v2.useMemo)(() => _v5.map(_v0 => "custom_text" === _v0.type && _v0.customText ? _v0.customText : _v0.label), [_v5]);
      return (0, _v1.jsx)(_v70.VStack, {
        gap: "md",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsxs)(_v25.Box, {
          position: "relative",
          borderRadius: "lg",
          overflow: "hidden",
          bg: "surface-secondary",
          width: {
            base: "100%",
            sm: "80%",
            lg: (0, _v12.rem)(568)
          },
          aspectRatio: "568/319",
          maxWidth: {
            base: "100%",
            lg: (0, _v12.rem)(568)
          },
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          children: [(0, _v1.jsx)(_v69.Image, {
            src: "/assets/images_v6/watermark_presets/preview_preset_image.jpg",
            alt: "",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            fit: "cover"
          }), _v6.length > 0 && (0, _v1.jsx)(_v25.Box, {
            sx: (_v1 = _v0.position, _v3 = {
              position: "absolute",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "vertical" === (_v2 = _v0.direction) ? (0, _v12.rem)(2) : (0, _v12.rem)(8),
              flexDirection: "vertical" === _v2 ? "column" : "row"
            }, _v4 = _v71[_v1] || _v71["bottom-right"], {
              ..._v3,
              ..._v4
            }),
            zIndex: 10,
            pointerEvents: "none",
            children: _v6.map((_v0, _v1) => (0, _v1.jsx)(_v15.Text, {
              variant: "body-xl",
              fontSize: (_v0 => {
                switch (_v0) {
                  case "small":
                    return (0, _v12.rem)(12);
                  case "medium":
                  default:
                    return (0, _v12.rem)(16);
                  case "large":
                    return (0, _v12.rem)(20);
                }
              })(_v0.font.size),
              color: _v0.textColor.hex,
              opacity: _v0.textColor.opacity / 100,
              textShadow: `0 0 4px ${_v0.dropShadow.hex}${Math.round(_v0.dropShadow.opacity / 100 * 255).toString(16).padStart(2, "0")}`,
              fontWeight: "regular",
              lineHeight: "1",
              sx: {
                fontFamily: _v54[_v0.font.family] || _v54["gt-america"]
              },
              children: _v0
            }, _v1))
          })]
        })
      });
    };
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = ({
    color: _v0,
    opacity: _v1,
    onColorChange: _v2,
    onOpacityChange: _v3,
    isDisabled: _v4 = !1,
    colorPickerWidth: _v5 = 103,
    opacityInputWidth: _v6 = 49
  }) => (0, _v1.jsxs)(_v75.HStack, {
    gap: "sm",
    alignItems: "flex-start",
    width: (0, _v12.rem)(_v5 + _v6 + 8),
    children: [(0, _v1.jsx)(_v25.Box, {
      width: (0, _v12.rem)(_v5),
      children: (0, _v1.jsxs)(_v80.ColorPickerRoot, {
        value: (0, _v83.parseColor)(_v0),
        onValueChange: _v0 => _v2((0, _v82.toHex)(_v0.valueAsString)),
        disabled: _v4,
        children: [(0, _v1.jsx)(_v81.ColorPickerControl, {
          children: (0, _v1.jsx)(_v80.ColorPickerTrigger, {
            asChild: !0,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "secondary",
              size: "md",
              width: (0, _v12.rem)(_v5),
              justifyContent: "flex-start",
              isDisabled: _v4,
              leftIcon: (0, _v1.jsx)(_v25.Box, {
                width: (0, _v12.rem)(20),
                height: (0, _v12.rem)(20),
                backgroundColor: _v0,
                borderRadius: "sm",
                border: "1px solid",
                borderColor: "border-default"
              }),
              children: (0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                fontFamily: "monospace",
                children: _v0.toUpperCase()
              })
            })
          })
        }), (0, _v1.jsx)(_v80.ColorPickerPositioner, {
          children: (0, _v1.jsxs)(_v80.ColorPickerContent, {
            children: [(0, _v1.jsx)(_v80.ColorPickerArea, {}), (0, _v1.jsxs)(_v25.Box, {
              marginTop: "sm",
              children: [(0, _v1.jsxs)(_v80.ColorPickerChannelSlider, {
                channel: "hue",
                children: [(0, _v1.jsx)(_v80.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v80.ColorPickerChannelSliderThumb, {})]
              }), (0, _v1.jsx)(_v25.Box, {
                marginTop: "sm",
                children: (0, _v1.jsx)(_v80.ColorPickerChannelInput, {
                  channel: "hex"
                })
              })]
            })]
          })
        })]
      })
    }), (0, _v1.jsxs)(_v25.Box, {
      width: (0, _v12.rem)(_v6),
      position: "relative",
      children: [(0, _v1.jsx)(_v76.Input, {
        type: "number",
        value: _v1,
        onChange: _v0 => _v3(Math.min(100, Math.max(0, parseInt(_v0.target.value) || 0))),
        min: 0,
        max: 100,
        size: "md",
        placeholder: "0-100",
        width: (0, _v12.rem)(_v6),
        isDisabled: _v4,
        paddingRight: (0, _v12.rem)(28),
        textAlign: "right"
      }), (0, _v1.jsx)(_v15.Text, {
        position: "absolute",
        right: (0, _v12.rem)(12),
        top: "50%",
        transform: "translateY(-50%)",
        variant: "body-md",
        color: "text-primary",
        pointerEvents: "none",
        children: "%"
      })]
    })]
  });
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = ({
    value: _v0,
    options: _v1,
    onChange: _v2,
    placeholder: _v3,
    isDisabled: _v4 = !1,
    width: _v5 = 160,
    textTransform: _v6 = "none"
  }) => {
    let _v7 = _v1.find(_v0 => _v0.value === _v0);
    return (0, _v1.jsxs)(_v85.Menu, {
      children: [(0, _v1.jsx)(_v86.MenuButton, {
        as: _v4.Button,
        rightIcon: (0, _v1.jsx)(_v22.ChevronDownSmall, {}),
        variant: "secondary",
        size: "md",
        width: (0, _v12.rem)(_v5),
        textAlign: "left",
        isDisabled: _v4,
        children: (0, _v1.jsx)(_v15.Text, {
          variant: "body-md",
          textTransform: _v6,
          children: _v7?.label || _v3 || String(_v0)
        })
      }), (0, _v1.jsx)(_v88.MenuList, {
        children: _v1.map(_v0 => (0, _v1.jsx)(_v87.MenuItem, {
          onClick: () => _v2(_v0.value),
          children: _v0.label
        }, String(_v0.value)))
      })]
    });
  };
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = ({
      field: _v0,
      onToggle: _v1,
      onCustomTextChange: _v2,
      isDisabled: _v3
    }) => {
      let {
          attributes: _v4,
          listeners: _v5,
          setNodeRef: _v6,
          transform: _v7,
          transition: _v8
        } = (0, _v74.useSortable)({
          id: _v0.id
        }),
        _v9 = {
          transform: _v90.CSS.Transform.toString(_v7),
          transition: _v8
        },
        _v10 = "custom_text" === _v0.type;
      return (0, _v1.jsxs)(_v75.HStack, {
        ref: _v6,
        style: _v9,
        ..._v4,
        width: "100%",
        alignItems: "center",
        spacing: "xs",
        bg: "transparent",
        borderRadius: "sm",
        padding: "0",
        children: [(0, _v1.jsx)(_v25.Box, {
          ..._v5,
          display: "flex",
          alignItems: "center",
          cursor: "grab",
          _active: {
            cursor: "grabbing"
          },
          opacity: _v3 ? .5 : 1,
          children: (0, _v1.jsx)(_v92.DragV, {
            boxSize: "2xs"
          })
        }), _v10 ? (0, _v1.jsxs)(_v75.HStack, {
          flex: 1,
          alignItems: "center",
          spacing: "xs",
          children: [(0, _v1.jsx)(_v91.Checkbox, {
            isChecked: _v0.enabled,
            onChange: () => _v1(_v0.id),
            isDisabled: _v3
          }), (0, _v1.jsx)(_v76.Input, {
            value: _v0.customText || "",
            onChange: _v0 => _v2?.(_v0.id, _v0.target.value),
            placeholder: (0, _v21.translate)({
              singular: "Enter custom text",
              dictionary: {
                es: {
                  singular: "Escriba el texto personalizado"
                },
                "de-DE": {
                  singular: "Benutzerdefinierten Text eingeben"
                },
                "fr-FR": {
                  singular: "Saisissez un texte personnalisé"
                },
                "ja-JP": {
                  singular: "カスタムテキストを入力する"
                },
                "ko-KR": {
                  singular: "커스텀 텍스트 입력"
                },
                "pt-BR": {
                  singular: "Insira o texto personalizado"
                },
                "zh-CN": {
                  singular: "输入自定义文本"
                }
              }
            }),
            size: "sm",
            isDisabled: _v3 || !_v0.enabled,
            flex: 1
          })]
        }) : (0, _v1.jsx)(_v91.Checkbox, {
          isChecked: _v0.enabled,
          onChange: () => _v1(_v0.id),
          isDisabled: _v3,
          flex: 1,
          children: (0, _v1.jsx)(_v15.Text, {
            variant: "body-md",
            children: _v0.label
          })
        })]
      });
    },
    _v94 = ({
      config: _v0,
      onChange: _v1,
      isDisabled: _v2 = !1
    }) => {
      let {
        errors: _v3,
        touched: _v4,
        validateName: _v5,
        markAsTouched: _v6,
        clearError: _v7,
        clearAllErrors: _v8
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)({}),
          [_v2, _v3] = (0, _v2.useState)({}),
          _v4 = (0, _v2.useCallback)(_v0 => _v0.trim() ? (_v1(_v0 => ({
            ..._v0,
            name: ""
          })), !0) : (_v1(_v0 => ({
            ..._v0,
            name: (0, _v21.translate)({
              singular: "Watermark name is required",
              dictionary: {
                es: {
                  singular: "El nombre de la marca de agua es obligatorio"
                },
                "de-DE": {
                  singular: "Der Name des Wasserzeichens ist erforderlich"
                },
                "fr-FR": {
                  singular: "Le nom du filigrane est requis"
                },
                "ja-JP": {
                  singular: "ウォーターマーク名は必須です"
                },
                "ko-KR": {
                  singular: "워터마크 이름은 필수입니다."
                },
                "pt-BR": {
                  singular: "O nome da marca d'água é obrigatório"
                },
                "zh-CN": {
                  singular: "水印名称为必填项"
                }
              }
            })
          })), !1), []),
          _v5 = (0, _v2.useCallback)(_v0 => {
            _v3(_v0 => ({
              ..._v0,
              [_v0]: !0
            }));
          }, []);
        return {
          errors: _v0,
          touched: _v2,
          validateName: _v4,
          markAsTouched: _v5,
          clearError: (0, _v2.useCallback)(_v0 => {
            _v1(_v0 => ({
              ..._v0,
              [_v0]: ""
            }));
          }, []),
          clearAllErrors: (0, _v2.useCallback)(() => {
            _v1({}), _v3({});
          }, [])
        };
      })();
      (0, _v2.useEffect)(() => {
        _v8();
      }, [_v0.name, _v8]);
      let _v9 = (0, _v2.useCallback)((_v0, _v1) => {
          _v1({
            ..._v0,
            [_v0]: _v1
          });
        }, [_v0, _v1]),
        _v10 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
          _v1({
            ..._v0,
            [_v0]: {
              ..._v0[_v0],
              [_v1]: _v2
            }
          });
        }, [_v0, _v1]),
        _v11 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v0.fields?.map(_v0 => _v0.id === _v0 ? {
            ..._v0,
            enabled: !_v0.enabled
          } : _v0) || [];
          _v1({
            ..._v0,
            fields: _v1
          });
        }, [_v0, _v1]),
        _v12 = (0, _v2.useCallback)((_v0, _v1) => {
          let _v2 = _v0.fields?.map(_v0 => _v0.id === _v0 ? {
            ..._v0,
            customText: _v1
          } : _v0) || [];
          _v1({
            ..._v0,
            fields: _v2
          });
        }, [_v0, _v1]),
        _v13 = (0, _v2.useCallback)(_v0 => {
          let {
            active: _v1,
            over: _v2
          } = _v0;
          if (!_v2 || _v1.id === _v2.id || !_v0.fields) return;
          let _v3 = _v0.fields.findIndex(_v0 => _v0.id === _v1.id),
            _v4 = _v0.fields.findIndex(_v0 => _v0.id === _v2.id),
            _v5 = [..._v0.fields],
            [_v6] = _v5.splice(_v3, 1);
          _v5.splice(_v4, 0, _v6);
          let _v7 = _v5.map((_v0, _v1) => ({
            ..._v0,
            order: _v1
          }));
          _v1({
            ..._v0,
            fields: _v7
          });
        }, [_v0, _v1]);
      return (0, _v1.jsx)(_v25.Box, {
        marginTop: "5",
        children: (0, _v1.jsxs)(_v70.VStack, {
          gap: "lg",
          alignItems: "stretch",
          width: "100%",
          children: [(0, _v1.jsxs)(_v77.FormControl, {
            isInvalid: _v4.name && !!_v3.name,
            children: [(0, _v1.jsx)(_v78.FormLabel, {
              fontSize: "body-md",
              fontWeight: "medium",
              children: (0, _v21.translate)({
                singular: "Watermark name",
                dictionary: {
                  es: {
                    singular: "Nombre de marca de agua"
                  },
                  "de-DE": {
                    singular: "Name des Wasserzeichens"
                  },
                  "fr-FR": {
                    singular: "Nom du filigrane"
                  },
                  "ja-JP": {
                    singular: "ウォーターマーク名"
                  },
                  "ko-KR": {
                    singular: "워터마크 이름"
                  },
                  "pt-BR": {
                    singular: "Nome da marca d'água"
                  },
                  "zh-CN": {
                    singular: "水印名称"
                  }
                }
              })
            }), (0, _v1.jsx)(_v76.Input, {
              value: _v0.name,
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v1({
                  ..._v0,
                  name: _v1
                }), _v3.name && _v1.trim() && _v7("name");
              },
              onBlur: () => {
                _v6("name"), _v5(_v0.name);
              },
              placeholder: (0, _v21.translate)({
                singular: "Watermark preset",
                dictionary: {
                  es: {
                    singular: "Configuración predeterminada de marca de agua"
                  },
                  "de-DE": {
                    singular: "Wasserzeichen-Voreinstellung"
                  },
                  "fr-FR": {
                    singular: "Préréglage de filigrane"
                  },
                  "ja-JP": {
                    singular: "ウォーターマークプリセット"
                  },
                  "ko-KR": {
                    singular: "워터마크 사전 설정"
                  },
                  "pt-BR": {
                    singular: "Predefinição de marca d'água"
                  },
                  "zh-CN": {
                    singular: "水印预设"
                  }
                }
              }),
              size: "md",
              bg: "transparent",
              isDisabled: _v2
            }), _v4.name && _v3.name && (0, _v1.jsx)(_v79.FormErrorMessage, {
              children: _v3.name
            })]
          }), (0, _v1.jsxs)(_v25.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              size: "xs",
              mb: "xs",
              children: (0, _v21.translate)({
                singular: "Viewer’s details",
                dictionary: {
                  es: {
                    singular: "Datos del espectador"
                  },
                  "de-DE": {
                    singular: "Details des Zuschauenden"
                  },
                  "fr-FR": {
                    singular: "Détails du spectateur"
                  },
                  "ja-JP": {
                    singular: "視聴者の詳細"
                  },
                  "ko-KR": {
                    singular: "뷰어 세부 정보"
                  },
                  "pt-BR": {
                    singular: "Detalhes do espectador"
                  },
                  "zh-CN": {
                    singular: "观众详情"
                  }
                }
              })
            }), (0, _v1.jsx)(_v73.DndContext, {
              onDragEnd: _v13,
              children: (0, _v1.jsx)(_v74.SortableContext, {
                items: _v0.fields?.map(_v0 => _v0.id) || [],
                strategy: _v74.verticalListSortingStrategy,
                children: (0, _v1.jsx)(_v70.VStack, {
                  gap: "sm",
                  alignItems: "flex-start",
                  children: _v0.fields?.map(_v0 => (0, _v1.jsx)(_v93, {
                    field: _v0,
                    onToggle: _v11,
                    onCustomTextChange: _v12,
                    isDisabled: _v2
                  }, _v0.id))
                })
              })
            })]
          }), (0, _v1.jsxs)(_v25.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              size: "xs",
              mb: "sm",
              children: (0, _v21.translate)({
                singular: "Font",
                dictionary: {
                  es: {
                    singular: "Fuente"
                  },
                  "de-DE": {
                    singular: "Schriftart"
                  },
                  "fr-FR": {
                    singular: "Police"
                  },
                  "ja-JP": {
                    singular: "フォント"
                  },
                  "ko-KR": {
                    singular: "폰트"
                  },
                  "pt-BR": {
                    singular: "Fonte"
                  },
                  "zh-CN": {
                    singular: "字体"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v70.VStack, {
              gap: "sm",
              alignItems: "flex-start",
              width: "100%",
              children: [(0, _v1.jsxs)(_v75.HStack, {
                gap: "sm",
                alignItems: "flex-start",
                width: "100%",
                children: [(0, _v1.jsx)(_v25.Box, {
                  width: (0, _v12.rem)(160),
                  children: (0, _v1.jsx)(_v89, {
                    value: _v0.font.family,
                    options: _v55,
                    onChange: _v0 => _v10("font", "family", _v0),
                    isDisabled: _v2
                  })
                }), (0, _v1.jsx)(_v25.Box, {
                  width: (0, _v12.rem)(120),
                  children: (0, _v1.jsx)(_v89, {
                    value: _v0.font.size,
                    options: [{
                      value: "small",
                      label: (0, _v21.translate)({
                        singular: "Small",
                        dictionary: {
                          es: {
                            singular: "Pequeño"
                          },
                          "de-DE": {
                            singular: "Klein"
                          },
                          "fr-FR": {
                            singular: "Petit"
                          },
                          "ja-JP": {
                            singular: "小"
                          },
                          "ko-KR": {
                            singular: "소"
                          },
                          "pt-BR": {
                            singular: "Pequeno"
                          },
                          "zh-CN": {
                            singular: "小"
                          }
                        }
                      })
                    }, {
                      value: "medium",
                      label: (0, _v21.translate)({
                        singular: "Medium",
                        dictionary: {
                          es: {
                            singular: "Mediano"
                          },
                          "de-DE": {
                            singular: "Mittel"
                          },
                          "fr-FR": {
                            singular: "Mate"
                          },
                          "ja-JP": {
                            singular: "ミディアム"
                          },
                          "ko-KR": {
                            singular: "중간"
                          },
                          "pt-BR": {
                            singular: "Médio"
                          },
                          "zh-CN": {
                            singular: "中"
                          }
                        }
                      })
                    }, {
                      value: "large",
                      label: (0, _v21.translate)({
                        singular: "Large",
                        dictionary: {
                          es: {
                            singular: "Grande"
                          },
                          "ja-JP": {
                            singular: "大"
                          },
                          "ko-KR": {
                            singular: "대"
                          },
                          "pt-BR": {
                            singular: "Grande"
                          },
                          "zh-CN": {
                            singular: "大"
                          }
                        }
                      })
                    }],
                    onChange: _v0 => _v10("font", "size", _v0),
                    isDisabled: _v2,
                    textTransform: "capitalize"
                  })
                })]
              }), (0, _v1.jsx)(_v84, {
                color: _v0.textColor.hex,
                opacity: _v0.textColor.opacity,
                onColorChange: _v0 => _v10("textColor", "hex", _v0),
                onOpacityChange: _v0 => _v10("textColor", "opacity", _v0),
                isDisabled: _v2,
                colorPickerWidth: 160,
                opacityInputWidth: 80
              })]
            })]
          }), (0, _v1.jsxs)(_v25.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              size: "xs",
              mb: "sm",
              children: (0, _v21.translate)({
                singular: "Position",
                dictionary: {
                  es: {
                    singular: "Posición"
                  },
                  "fr-FR": {
                    singular: "Poste"
                  },
                  "ja-JP": {
                    singular: "ポジション"
                  },
                  "ko-KR": {
                    singular: "위치"
                  },
                  "pt-BR": {
                    singular: "Posição"
                  },
                  "zh-CN": {
                    singular: "位置"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v75.HStack, {
              gap: "sm",
              alignItems: "flex-start",
              children: [(0, _v1.jsx)(_v25.Box, {
                width: (0, _v12.rem)(160),
                children: (0, _v1.jsx)(_v89, {
                  value: _v0.position,
                  options: [{
                    value: "top-left",
                    label: (0, _v21.translate)({
                      singular: "Top left",
                      dictionary: {
                        es: {
                          singular: "Parte superior izquierda"
                        },
                        "de-DE": {
                          singular: "Links Oben"
                        },
                        "fr-FR": {
                          singular: "En haut à gauche"
                        },
                        "ja-JP": {
                          singular: "左上"
                        },
                        "ko-KR": {
                          singular: "상단 왼쪽"
                        },
                        "pt-BR": {
                          singular: "Canto superior esquerdo"
                        },
                        "zh-CN": {
                          singular: "左上角"
                        }
                      }
                    })
                  }, {
                    value: "top-center",
                    label: (0, _v21.translate)({
                      singular: "Top center",
                      dictionary: {
                        es: {
                          singular: "Parte superior central"
                        },
                        "de-DE": {
                          singular: "Mitte Oben"
                        },
                        "fr-FR": {
                          singular: "En haut au centre"
                        },
                        "ja-JP": {
                          singular: "中央上"
                        },
                        "ko-KR": {
                          singular: "상단 중앙"
                        },
                        "pt-BR": {
                          singular: "Centro superior"
                        },
                        "zh-CN": {
                          singular: "顶部中心"
                        }
                      }
                    })
                  }, {
                    value: "top-right",
                    label: (0, _v21.translate)({
                      singular: "Top right",
                      dictionary: {
                        es: {
                          singular: "Parte superior derecha"
                        },
                        "de-DE": {
                          singular: "Rechts Oben"
                        },
                        "fr-FR": {
                          singular: "En haut à droite"
                        },
                        "ja-JP": {
                          singular: "右上"
                        },
                        "ko-KR": {
                          singular: "상단 오른쪽"
                        },
                        "pt-BR": {
                          singular: "Canto superior direito"
                        },
                        "zh-CN": {
                          singular: "右上角"
                        }
                      }
                    })
                  }, {
                    value: "center-left",
                    label: (0, _v21.translate)({
                      singular: "Center left",
                      dictionary: {
                        es: {
                          singular: "Parte central izquierda"
                        },
                        "de-DE": {
                          singular: "Mitte links"
                        },
                        "fr-FR": {
                          singular: "Au centre à gauche"
                        },
                        "ja-JP": {
                          singular: "中央左"
                        },
                        "ko-KR": {
                          singular: "중앙 왼쪽"
                        },
                        "pt-BR": {
                          singular: "Centro à esquerda"
                        },
                        "zh-CN": {
                          singular: "左侧中间"
                        }
                      }
                    })
                  }, {
                    value: "center",
                    label: (0, _v21.translate)({
                      singular: "Center",
                      dictionary: {
                        es: {
                          singular: "Centro"
                        },
                        "de-DE": {
                          singular: "Mitte"
                        },
                        "fr-FR": {
                          singular: "Centre"
                        },
                        "ja-JP": {
                          singular: "中央揃え"
                        },
                        "ko-KR": {
                          singular: "가운데"
                        },
                        "pt-BR": {
                          singular: "Centro"
                        },
                        "zh-CN": {
                          singular: "中心"
                        }
                      }
                    })
                  }, {
                    value: "center-right",
                    label: (0, _v21.translate)({
                      singular: "Center right",
                      dictionary: {
                        es: {
                          singular: "Parte central derecha"
                        },
                        "de-DE": {
                          singular: "Mitte Rechts"
                        },
                        "fr-FR": {
                          singular: "Au milieu à droite"
                        },
                        "ja-JP": {
                          singular: "中央右"
                        },
                        "ko-KR": {
                          singular: "중앙 오른쪽"
                        },
                        "pt-BR": {
                          singular: "Centro à direita"
                        },
                        "zh-CN": {
                          singular: "右侧中心"
                        }
                      }
                    })
                  }, {
                    value: "bottom-left",
                    label: (0, _v21.translate)({
                      singular: "Bottom left",
                      dictionary: {
                        es: {
                          singular: "Parte inferior izquierda"
                        },
                        "de-DE": {
                          singular: "Unten links"
                        },
                        "fr-FR": {
                          singular: "En bas à gauche"
                        },
                        "ja-JP": {
                          singular: "左下"
                        },
                        "ko-KR": {
                          singular: "하단 왼쪽"
                        },
                        "pt-BR": {
                          singular: "Canto inferior esquerdo"
                        },
                        "zh-CN": {
                          singular: "左下角"
                        }
                      }
                    })
                  }, {
                    value: "bottom-center",
                    label: (0, _v21.translate)({
                      singular: "Bottom center",
                      dictionary: {
                        es: {
                          singular: "Parte inferior central"
                        },
                        "de-DE": {
                          singular: "Mitte Unten"
                        },
                        "fr-FR": {
                          singular: "En bas au centre"
                        },
                        "ja-JP": {
                          singular: "中央下"
                        },
                        "ko-KR": {
                          singular: "하단 중앙"
                        },
                        "pt-BR": {
                          singular: "Centro inferior"
                        },
                        "zh-CN": {
                          singular: "底部中心"
                        }
                      }
                    })
                  }, {
                    value: "bottom-right",
                    label: (0, _v21.translate)({
                      singular: "Bottom right",
                      dictionary: {
                        es: {
                          singular: "Inferior derecha"
                        },
                        "de-DE": {
                          singular: "Unten rechts"
                        },
                        "fr-FR": {
                          singular: "En bas à droite"
                        },
                        "ja-JP": {
                          singular: "右下"
                        },
                        "ko-KR": {
                          singular: "하단 오른쪽"
                        },
                        "pt-BR": {
                          singular: "Canto inferior direito"
                        },
                        "zh-CN": {
                          singular: "右下角"
                        }
                      }
                    })
                  }],
                  onChange: _v0 => _v9("position", _v0),
                  isDisabled: _v2
                })
              }), (0, _v1.jsx)(_v25.Box, {
                width: (0, _v12.rem)(120),
                children: (0, _v1.jsx)(_v89, {
                  value: _v0.direction,
                  options: _v56,
                  onChange: _v0 => _v9("direction", _v0),
                  isDisabled: _v2
                })
              })]
            })]
          }), (0, _v1.jsxs)(_v25.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              size: "xs",
              mb: "sm",
              children: (0, _v21.translate)({
                singular: "Drop shadow",
                dictionary: {
                  es: {
                    singular: "Sombra paralela"
                  },
                  "de-DE": {
                    singular: "Schlagschatten"
                  },
                  "fr-FR": {
                    singular: "Ombre portée"
                  },
                  "ja-JP": {
                    singular: "ドロップシャドウ"
                  },
                  "ko-KR": {
                    singular: "그림자 효과"
                  },
                  "pt-BR": {
                    singular: "Sombra"
                  },
                  "zh-CN": {
                    singular: "添加阴影"
                  }
                }
              })
            }), (0, _v1.jsx)(_v84, {
              color: _v0.dropShadow.hex,
              opacity: _v0.dropShadow.opacity,
              onColorChange: _v0 => _v10("dropShadow", "hex", _v0),
              onOpacityChange: _v0 => _v10("dropShadow", "opacity", _v0),
              isDisabled: _v2,
              colorPickerWidth: 160,
              opacityInputWidth: 80
            })]
          })]
        })
      });
    },
    _v95 = ({
      isOpen: _v0,
      onClose: _v1,
      onSuccess: _v2,
      ownerOrWorkspaceId: _v3,
      presetId: _v4,
      initialData: _v5,
      isSubmitting: _v6 = !1
    }) => {
      let _v7 = !!_v4,
        {
          savePreset: _v8,
          isSaving: _v9
        } = (({
          ownerOrWorkspaceId: _v0,
          onSuccess: _v1
        }) => {
          let [_v2, _v3] = _v52(),
            [_v4, _v5] = _v48(),
            [_v6, _v7] = _v43(),
            [_v8, _v9] = _v38(),
            _v10 = (0, _v19.useToast)(),
            [_v11, _v12] = (0, _v2.useState)(!1),
            {
              isWorkspace: _v13
            } = (0, _v53.useIsWorkspace)(),
            [_v14, _v15] = (0, _v2.useState)(0),
            [_v16, _v17] = (0, _v2.useState)(0),
            _v18 = (0, _v2.useCallback)(async _v0 => {
              _v10({
                title: (await _v0?.res?.clone().json()).error,
                variant: "warning",
                duration: 0,
                isClosable: !0
              });
            }, [_v10]);
          (0, _v2.useEffect)(() => {
            let _v0 = _v13 ? _v3 : _v7,
              _v1 = _v13 ? _v5 : _v9;
            _v0.called && !_v0.loading && _v0.callCount !== _v14 && (_v15(_v0.callCount), _v12(!1), _v0.error ? _v18(_v0.error) : (_v10({
              title: (0, _v21.translate)({
                singular: "Preset created",
                dictionary: {
                  es: {
                    singular: "Configuración predeterminada creada"
                  },
                  "de-DE": {
                    singular: "Voreinstellung erstellt"
                  },
                  "fr-FR": {
                    singular: "Préréglage créé"
                  },
                  "ja-JP": {
                    singular: "プリセットが作成されました"
                  },
                  "ko-KR": {
                    singular: "사전 설정 생성 완료"
                  },
                  "pt-BR": {
                    singular: "Predefinição criada"
                  },
                  "zh-CN": {
                    singular: "预设已创建"
                  }
                }
              }),
              description: (0, _v21.translate)({
                singular: "Your watermark preset has been created successfully",
                dictionary: {
                  es: {
                    singular: "Su configuración predeterminada de marca de agua se creó correctamente"
                  },
                  "de-DE": {
                    singular: "Ihre Wasserzeichenvoreinstellung wurde erfolgreich erstellt."
                  },
                  "fr-FR": {
                    singular: "Votre préréglage de filigrane a bien été créé."
                  },
                  "ja-JP": {
                    singular: "ウォーターマークのプリセットが作成されました"
                  },
                  "ko-KR": {
                    singular: "워터마크 사전 설정이 생성되었습니다."
                  },
                  "pt-BR": {
                    singular: "Sua predefinição de marca d'água foi criada com sucesso"
                  },
                  "zh-CN": {
                    singular: "您的水印预设已成功创建"
                  }
                }
              }),
              variant: "success",
              duration: 0,
              isClosable: !0
            }), _v1())), _v1.called && !_v1.loading && _v1.callCount !== _v16 && (_v17(_v1.callCount), _v12(!1), _v1.error ? _v18(_v1.error) : (_v10({
              title: (0, _v21.translate)({
                singular: "Preset updated",
                dictionary: {
                  es: {
                    singular: "Configuración predeterminada actualizada"
                  },
                  "de-DE": {
                    singular: "Voreinstellung aktualisiert"
                  },
                  "fr-FR": {
                    singular: "Préréglage mis à jour"
                  },
                  "ja-JP": {
                    singular: "プリセットが更新されました"
                  },
                  "ko-KR": {
                    singular: "사전 설정이 업데이트되었습니다."
                  },
                  "pt-BR": {
                    singular: "Predefinição atualizada"
                  },
                  "zh-CN": {
                    singular: "预设已更新"
                  }
                }
              }),
              description: (0, _v21.translate)({
                singular: "Your watermark preset has been updated successfully",
                dictionary: {
                  es: {
                    singular: "Su configuración predeterminada de marca de agua se actualizó correctamente"
                  },
                  "de-DE": {
                    singular: "Ihre Wasserzeichenvoreinstellung wurde erfolgreich aktualisiert."
                  },
                  "fr-FR": {
                    singular: "Votre préréglage de filigrane a bien été mis à jour."
                  },
                  "ja-JP": {
                    singular: "ウォーターマークのプリセットが更新されました"
                  },
                  "ko-KR": {
                    singular: "워터마크 사전 설정이 업데이트되었습니다."
                  },
                  "pt-BR": {
                    singular: "Sua predefinição de marca d’água foi atualizada com sucesso"
                  },
                  "zh-CN": {
                    singular: "您的水印预设已成功更新"
                  }
                }
              }),
              variant: "success",
              duration: 0,
              isClosable: !0
            }), _v1()));
          }, [_v13, _v3, _v7, _v5, _v9, _v14, _v16, _v10, _v18, _v1]);
          let _v19 = (0, _v2.useCallback)(_v0 => {
              let _v1 = "number" == typeof _v0 ? _v0 : parseInt(_v0, 10);
              if (isNaN(_v1) || _v1 < 0) throw Error(`Invalid user ID: ${_v0}`);
              return _v1;
            }, []),
            _v20 = (0, _v2.useCallback)(_v0 => {
              if (_v13) {
                if ("string" != typeof _v0) throw Error("Expected string for workspace UUID");
                return _v0 ? {
                  workspaceUuid: _v0,
                  presetId: _v0
                } : {
                  workspaceUuid: _v0
                };
              }
              let _v1 = _v19(_v0);
              return _v0 ? {
                userId: _v1,
                presetId: _v0
              } : {
                userId: _v1
              };
            }, [_v13, _v0, _v19]),
            _v21 = (0, _v2.useCallback)(_v0 => _v13 ? _v0 ? _v4 : _v2 : _v0 ? _v8 : _v6, [_v13, _v4, _v2, _v8, _v6]);
          return {
            savePreset: (0, _v2.useCallback)(async (_v0, _v1) => {
              _v12(!0);
              try {
                let _v0 = !!_v1,
                  _v1 = function (_v0, _v1) {
                    let _v2 = _v0.fields.filter(_v0 => _v0.enabled).sort((_v0, _v1) => (_v0.order ?? 0) - (_v1.order ?? 0)).map(_v0 => {
                        if ("custom_text" === _v0.type) return {
                          customText: _v0.customText || ""
                        };
                        let _v1 = _v66[_v0.type];
                        return _v1 ? {
                          [_v1]: !0
                        } : null;
                      }).filter(_v0 => null !== _v0),
                      {
                        vertical: _v3,
                        horizontal: _v4
                      } = function (_v0) {
                        if ("center" === _v0) return {
                          vertical: "50",
                          horizontal: "50"
                        };
                        let [_v1, _v2] = _v0.split("-");
                        return {
                          vertical: _v61[_v1] || "0",
                          horizontal: _v63[_v2] || "0"
                        };
                      }(_v0.position),
                      _v5 = {
                        id: _v1 && _v0.elementId ? _v0.elementId : 0,
                        type: "texts_collection",
                        label: "watermark",
                        config: {
                          content: _v2,
                          font: _v0.font.family,
                          fontColor: _v0.textColor.hex,
                          size: _v59[_v0.font.size] || "50",
                          opacity: Math.round(_v0.textColor.opacity).toString(),
                          shadowColor: _v0.dropShadow.hex,
                          shadowOpacity: Math.round(_v0.dropShadow.opacity).toString()
                        },
                        layout: {
                          positionVertical: _v3,
                          positionHorizontal: _v4,
                          direction: _v0.direction || "horizontal"
                        },
                        presetId: 0
                      };
                    return _v2.length > 0 ? [_v5] : [];
                  }(_v0, _v0);
                if (0 === _v1.length) {
                  let _v0 = (0, _v21.translate)({
                    singular: "At least one watermark field must be enabled",
                    dictionary: {
                      es: {
                        singular: "Se debe habilitar al menos un campo de marca de agua"
                      },
                      "de-DE": {
                        singular: "Mindestens ein Wasserzeichenfeld muss aktiviert werden"
                      },
                      "fr-FR": {
                        singular: "Au moins un champ de filigrane doit être activé."
                      },
                      "ja-JP": {
                        singular: "少なくとも1つのウォーターマークフィールドを有効にする必要があります"
                      },
                      "ko-KR": {
                        singular: "하나 이상의 워터마크 필드를 활성화해야 합니다."
                      },
                      "pt-BR": {
                        singular: "Pelo menos um campo de marca d'água deve estar ativado"
                      },
                      "zh-CN": {
                        singular: "必须至少启用一个水印字段"
                      }
                    }
                  });
                  _v10({
                    title: (0, _v21.translate)({
                      singular: "Cannot save preset",
                      dictionary: {
                        es: {
                          singular: "No se puede guardar la configuración predeterminada"
                        },
                        "de-DE": {
                          singular: "Voreinstellung kann nicht gespeichert werden"
                        },
                        "fr-FR": {
                          singular: "Impossible de sauvegarder le préréglage"
                        },
                        "ja-JP": {
                          singular: "プリセットを保存できません"
                        },
                        "ko-KR": {
                          singular: "사전 설정을 저장할 수 없습니다."
                        },
                        "pt-BR": {
                          singular: "Não foi possível salvar a predefinição"
                        },
                        "zh-CN": {
                          singular: "无法保存预设"
                        }
                      }
                    }),
                    description: _v0,
                    variant: "warning",
                    duration: 0,
                    isClosable: !0
                  }), _v12(!1);
                }
                let _v2 = _v20(_v1),
                  _v3 = {
                    variables: {
                      name: _v0.name.trim(),
                      elements: _v1
                    },
                    select: _v68
                  },
                  _v4 = _v21(_v0);
                await _v4({
                  where: _v2,
                  ..._v3
                });
              } catch (_v0) {
                console.error("Failed to save preset (caught exception):", {
                  error: _v0,
                  mode: _v1 ? "edit" : "create",
                  presetId: _v1
                }), _v12(!1), _v10({
                  title: (0, _v21.translate)({
                    singular: "Failed to save preset",
                    dictionary: {
                      es: {
                        singular: "No se pudo guardar la configuración predeterminada"
                      },
                      "de-DE": {
                        singular: "Voreinstellung konnte nicht gespeichert werden"
                      },
                      "fr-FR": {
                        singular: "Échec de l’enregistrement du préréglage"
                      },
                      "ja-JP": {
                        singular: "プリセットを保存できませんでした"
                      },
                      "ko-KR": {
                        singular: "사전 설정 저장하지 못했습니다."
                      },
                      "pt-BR": {
                        singular: "Falha ao salvar a predefinição"
                      },
                      "zh-CN": {
                        singular: "保存预设失败"
                      }
                    }
                  }),
                  variant: "warning",
                  duration: 0,
                  isClosable: !0
                });
              }
            }, [_v21, _v20, _v10]),
            isSaving: _v11
          };
        })({
          ownerOrWorkspaceId: _v3,
          onSuccess: _v2
        }),
        [_v10, _v11] = (0, _v2.useState)(() => _v67(_v5));
      (0, _v2.useEffect)(() => {
        _v0 && _v11(_v67(_v5));
      }, [_v0, _v5]);
      let _v12 = async () => {
        await _v8(_v10, _v4);
      };
      return (0, _v1.jsxs)(_v6.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: "full",
        isCentered: !0,
        closeOnOverlayClick: !1,
        closeOnEsc: !_v9,
        children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
          maxW: {
            base: "95vw",
            lg: (0, _v12.rem)(0)
          },
          minH: (0, _v12.rem)(700),
          margin: {
            base: (0, _v12.rem)(20),
            lg: (0, _v12.rem)(40)
          },
          children: [(0, _v1.jsx)(_v10.ModalHeader, {
            height: (0, _v12.rem)(64),
            display: "flex",
            alignItems: "center",
            children: (0, _v1.jsx)(_v5.Header, {
              size: "md",
              children: _v7 ? (0, _v21.translate)({
                singular: "Edit watermark",
                dictionary: {
                  es: {
                    singular: "Editar marca de agua"
                  },
                  "de-DE": {
                    singular: "Wasserzeichen bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier le filigrane"
                  },
                  "ja-JP": {
                    singular: "ウォーターマークを編集"
                  },
                  "ko-KR": {
                    singular: "워터마크 편집"
                  },
                  "pt-BR": {
                    singular: "Editar marca d'água"
                  },
                  "zh-CN": {
                    singular: "编辑水印"
                  }
                }
              }) : (0, _v21.translate)({
                singular: "Create watermark",
                dictionary: {
                  es: {
                    singular: "Crear marca de agua"
                  },
                  "de-DE": {
                    singular: "Wasserzeichen erstellen"
                  },
                  "fr-FR": {
                    singular: "Créer un filigrane"
                  },
                  "ja-JP": {
                    singular: "ウォーターマークを作成"
                  },
                  "ko-KR": {
                    singular: "워터마크 생성"
                  },
                  "pt-BR": {
                    singular: "Criar marca d'água"
                  },
                  "zh-CN": {
                    singular: "创建水印"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v7.ModalBody, {
            display: "flex",
            flexDirection: {
              base: "column",
              lg: "row"
            },
            gap: "xl",
            children: [(0, _v1.jsx)(_v25.Box, {
              w: {
                base: "100%",
                lg: (0, _v12.rem)(400)
              },
              overflowY: "auto",
              paddingRight: {
                base: "0",
                lg: "md"
              },
              maxHeight: {
                base: "none",
                lg: (0, _v12.rem)(620)
              },
              children: (0, _v1.jsx)(_v94, {
                config: _v10,
                onChange: _v11,
                isDisabled: _v9 || _v6
              })
            }), (0, _v1.jsx)(_v25.Box, {
              w: {
                base: "100%",
                lg: (0, _v12.rem)(740)
              },
              minH: {
                base: (0, _v12.rem)(200),
                lg: "auto"
              },
              maxH: {
                base: (0, _v12.rem)(250),
                lg: "none"
              },
              display: "flex",
              alignItems: "stretch",
              overflow: "hidden",
              children: (0, _v1.jsx)(_v72, {
                config: _v10
              })
            })]
          }), (0, _v1.jsxs)(_v26.ModalFooter, {
            height: (0, _v12.rem)(64),
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "md",
            borderTop: "1px solid",
            borderTopColor: "lightBlueAlpha.200",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              onClick: _v1,
              isDisabled: _v9,
              size: "md",
              children: (0, _v21.translate)({
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
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              onClick: _v12,
              isLoading: _v9,
              isDisabled: !_v10.name?.trim() || _v9,
              size: "md",
              children: (0, _v21.translate)({
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
    };
  var _v96 = _v21;
  let _v97 = ({
    isOpen: _v0,
    onClose: _v1,
    onConfirm: _v2,
    title: _v3,
    message: _v4,
    confirmText: _v5 = (0, _v96.translate)({
      singular: "Confirm",
      dictionary: {
        es: {
          singular: "Confirmar"
        },
        "de-DE": {
          singular: "Bestätigen"
        },
        "fr-FR": {
          singular: "Confirmer"
        },
        "ja-JP": {
          singular: "確定"
        },
        "ko-KR": {
          singular: "확인"
        },
        "pt-BR": {
          singular: "Confirmar"
        },
        "zh-CN": {
          singular: "确认"
        }
      }
    }),
    cancelText: _v6 = (0, _v96.translate)({
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
    }),
    isLoading: _v7 = !1,
    confirmColorScheme: _v8 = "red"
  }) => (0, _v1.jsxs)(_v6.Modal, {
    isOpen: _v0,
    onClose: _v1,
    isCentered: !0,
    closeOnOverlayClick: !_v7,
    children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
      maxW: (0, _v12.rem)(400),
      children: [(0, _v1.jsx)(_v10.ModalHeader, {
        children: (0, _v1.jsx)(_v5.Header, {
          size: "sm",
          children: _v3
        })
      }), (0, _v1.jsx)(_v7.ModalBody, {
        children: (0, _v1.jsx)(_v15.Text, {
          variant: "body-xl",
          children: _v4
        })
      }), (0, _v1.jsxs)(_v26.ModalFooter, {
        display: "flex",
        gap: "sm",
        children: [(0, _v1.jsx)(_v4.Button, {
          variant: "tertiary",
          onClick: _v1,
          isDisabled: _v7,
          children: _v6
        }), (0, _v1.jsx)(_v4.Button, {
          variant: "primary",
          onClick: _v2,
          isLoading: _v7,
          colorScheme: _v8,
          children: _v5
        })]
      })]
    })]
  });
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = _v0 => (0, _v1.jsxs)(_v100.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "currentColor",
    children: [(0, _v1.jsx)("path", {
      d: "M16 2C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16ZM16 4H4V16H16V4ZM22 18C22 20.209 20.209 22 18 22H7C5.895 22 5 21.105 5 20H18C19.105 20 20 19.105 20 18V5C21.105 5 22 5.895 22 7V18ZM9 6H11V9H14V11H11V14H9V11H6V9H9V6Z"
    }), " "]
  });
  var _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0);
  let _v105 = ({
    preset: _v0,
    onDelete: _v1,
    onEdit: _v2,
    onCopy: _v3,
    isDeleting: _v4
  }) => {
    var _v5;
    return (0, _v1.jsxs)(_v18.Tr, {
      opacity: _v4 ? .5 : 1,
      pointerEvents: _v4 ? "none" : "auto",
      children: [(0, _v1.jsx)(_v99.Td, {
        px: {
          base: "xs",
          md: "md"
        },
        py: "sm",
        children: (0, _v1.jsx)(_v15.Text, {
          variant: "body-xl",
          fontSize: "sm",
          fontWeight: "medium",
          cursor: "pointer",
          _hover: {
            color: "blue.500"
          },
          onClick: () => _v2(_v0),
          children: _v0.name
        })
      }), (0, _v1.jsx)(_v99.Td, {
        px: {
          base: "xs",
          md: "md"
        },
        py: "sm",
        display: {
          base: "none",
          sm: "table-cell"
        },
        children: (0, _v1.jsx)(_v15.Text, {
          fontSize: "sm",
          color: "text-secondary",
          children: (_v5 = _v0.updatedOn) ? new Date(_v5).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          }) : "N/A"
        })
      }), (0, _v1.jsx)(_v99.Td, {
        px: {
          base: "xs",
          md: "md"
        },
        py: "sm",
        display: {
          base: "none",
          md: "table-cell"
        },
        children: (0, _v1.jsx)(_v15.Text, {
          fontSize: "sm",
          color: "text-secondary",
          children: "0"
        })
      }), (0, _v1.jsx)(_v99.Td, {
        px: {
          base: "xs",
          md: "md"
        },
        py: "sm",
        children: (0, _v1.jsx)(_v25.Box, {
          children: (0, _v1.jsxs)(_v85.Menu, {
            placement: "bottom-end",
            children: [(0, _v1.jsx)(_v86.MenuButton, {
              as: _v98.IconButton,
              "aria-label": `Actions for ${_v0.name}`,
              icon: (0, _v1.jsx)(_v102.EllipsisV, {}),
              variant: "tertiary",
              size: "sm",
              isDisabled: _v4
            }), (0, _v1.jsxs)(_v88.MenuList, {
              minW: (0, _v12.rem)(160),
              children: [(0, _v1.jsx)(_v87.MenuItem, {
                icon: (0, _v1.jsx)(_v103.EditPencil, {}),
                onClick: () => _v2(_v0),
                isDisabled: _v4,
                children: (0, _v21.translate)({
                  singular: "Edit",
                  dictionary: {
                    es: {
                      singular: "Editar"
                    },
                    "de-DE": {
                      singular: "Bearbeiten"
                    },
                    "fr-FR": {
                      singular: "Modifier"
                    },
                    "ja-JP": {
                      singular: "編集"
                    },
                    "ko-KR": {
                      singular: "편집"
                    },
                    "pt-BR": {
                      singular: "Editar"
                    },
                    "zh-CN": {
                      singular: "编辑"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v87.MenuItem, {
                icon: (0, _v1.jsx)(_v101, {}),
                onClick: () => _v3(_v0),
                isDisabled: _v4,
                children: (0, _v21.translate)({
                  singular: "Make a copy",
                  dictionary: {
                    es: {
                      singular: "Hacer una copia"
                    },
                    "de-DE": {
                      singular: "Kopie erstellen"
                    },
                    "fr-FR": {
                      singular: "Faire une copie"
                    },
                    "ja-JP": {
                      singular: "コピーを作る"
                    },
                    "ko-KR": {
                      singular: "사본 만들기"
                    },
                    "pt-BR": {
                      singular: "Fazer uma cópia"
                    },
                    "zh-CN": {
                      singular: "复制"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v87.MenuItem, {
                icon: (0, _v1.jsx)(_v104.TrashBin, {}),
                onClick: () => _v1(_v0),
                color: "red.500",
                isDisabled: _v4,
                children: (0, _v21.translate)({
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
          })
        })
      })]
    });
  };
  _v0.s(["PresetListModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    presets: _v2,
    isLoading: _v3,
    ownerOrWorkspaceId: _v4,
    onDeletePreset: _v5,
    onRefresh: _v6,
    sortBy: _v7,
    sortOrder: _v8,
    onSortChange: _v9
  }) => {
    let [_v10, _v11] = (0, _v2.useState)(null),
      [_v12, _v13] = (0, _v2.useState)(!1),
      [_v14, _v15] = (0, _v2.useState)(null),
      [_v16, _v17] = (0, _v2.useState)(!1),
      [_v18, _v19] = (0, _v2.useState)(null),
      [_v20, _v21] = (0, _v2.useState)(!1),
      _v22 = (0, _v19.useToast)(),
      _v23 = _v0 => {
        _v9 && (_v7 === _v0 ? "asc" === _v8 ? _v9(_v0, "desc") : "desc" === _v8 ? _v9(_v0, void 0) : _v9(_v0, "asc") : _v9(_v0, "asc"));
      },
      _v24 = _v0 => {
        _v11(_v0);
      },
      _v25 = async () => {
        if (_v10) {
          _v13(!0), _v15(_v10.name);
          try {
            await _v5(_v10), _v22({
              title: (0, _v21.translate)({
                singular: "Preset deleted",
                dictionary: {
                  es: {
                    singular: "Configuración predeterminada eliminada"
                  },
                  "de-DE": {
                    singular: "Voreinstellung gelöscht"
                  },
                  "fr-FR": {
                    singular: "Préréglage supprimé"
                  },
                  "ja-JP": {
                    singular: "プリセットが削除されました"
                  },
                  "ko-KR": {
                    singular: "사전 설정이 삭제되었습니다."
                  },
                  "pt-BR": {
                    singular: "Predefinição excluída"
                  },
                  "zh-CN": {
                    singular: "预设已删除"
                  }
                }
              }),
              description: (0, _v21.translate)({
                singular: "The preset has been deleted successfully",
                dictionary: {
                  es: {
                    singular: "La configuración predeterminada se eliminó correctamente"
                  },
                  "de-DE": {
                    singular: "Die Voreinstellung wurde erfolgreich gelöscht"
                  },
                  "fr-FR": {
                    singular: "Le préréglage a été supprimé avec succès."
                  },
                  "ja-JP": {
                    singular: "プリセットが削除されました"
                  },
                  "ko-KR": {
                    singular: "사전 설정이 삭제되었습니다."
                  },
                  "pt-BR": {
                    singular: "A predefinição foi excluída com sucesso"
                  },
                  "zh-CN": {
                    singular: "预设已成功删除"
                  }
                }
              }),
              variant: "success",
              duration: 0,
              isClosable: !0
            }), _v11(null), _v6?.();
          } catch (_v0) {
            _v22({
              title: (0, _v21.translate)({
                singular: "Failed to delete preset",
                dictionary: {
                  es: {
                    singular: "No se pudo eliminar la configuración predeterminada"
                  },
                  "de-DE": {
                    singular: "Voreinstellung konnte nicht gelöscht werden"
                  },
                  "fr-FR": {
                    singular: "Échec de suppression du préréglage"
                  },
                  "ja-JP": {
                    singular: "プリセットを削除できませんでした"
                  },
                  "ko-KR": {
                    singular: "사전 설정을 삭제하지 못했습니다."
                  },
                  "pt-BR": {
                    singular: "Falha ao excluir predefinição"
                  },
                  "zh-CN": {
                    singular: "未能删除预设"
                  }
                }
              }),
              description: (0, _v21.translate)({
                singular: "An error occurred while deleting the preset. Please try again",
                dictionary: {
                  es: {
                    singular: "Se produjo un error al eliminar la configuración predeterminada. Inténtelo de nuevo"
                  },
                  "de-DE": {
                    singular: "Beim Löschen der Voreinstellung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite lors de la suppression du préréglage. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "プリセットの削除中にエラーが発生しました。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "사전 설정을 삭제하는 도중 오류가 발생했습니다. 다시 시도해 주세요."
                  },
                  "pt-BR": {
                    singular: "Ocorreu um erro ao excluir a predefinição. Tente novamente"
                  },
                  "zh-CN": {
                    singular: "删除预设时发生错误。请重试"
                  }
                }
              }),
              variant: "warning",
              duration: 0,
              isClosable: !0
            });
          } finally {
            _v13(!1), _v15(null), _v11(null);
          }
        }
      },
      _v26 = _v0 => {
        _v19(_v0), _v17(!0);
      },
      _v27 = _v0 => {
        _v19({
          name: `${(0, _v21.translate)({
            singular: "Copy of",
            dictionary: {
              es: {
                singular: "Copia de"
              },
              "de-DE": {
                singular: "Kopie von"
              },
              "fr-FR": {
                singular: "Copie de"
              },
              "ja-JP": {
                singular: "コピー："
              },
              "ko-KR": {
                singular: "다음의 복사본"
              },
              "pt-BR": {
                singular: "Cópia de"
              },
              "zh-CN": {
                singular: "副本"
              }
            }
          })} ${_v0.name}`,
          elements: _v0.elements
        }), _v21(!0), _v17(!0);
      },
      _v28 = () => {
        _v19(null), _v21(!1), _v17(!1);
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v6.Modal, {
        isOpen: _v0,
        onClose: _v1,
        isCentered: !0,
        closeOnOverlayClick: !_v12,
        closeOnEsc: !_v12,
        blockScrollOnMount: !1,
        children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
          w: {
            base: "95%",
            sm: "90%",
            md: (0, _v12.rem)(720)
          },
          maxW: (0, _v12.rem)(720),
          h: (0, _v12.rem)(600),
          display: "flex",
          flexDirection: "column",
          children: [(0, _v1.jsxs)(_v10.ModalHeader, {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            flexShrink: 0,
            children: [(0, _v1.jsx)(_v5.Header, {
              size: "md",
              children: (0, _v21.translate)({
                singular: "Manage Watermark Presets",
                dictionary: {
                  es: {
                    singular: "Gestionar configuraciones predeterminadas de marca de agua"
                  },
                  "de-DE": {
                    singular: "Wasserzeichenvoreinstellungen verwalten"
                  },
                  "fr-FR": {
                    singular: "Gérer les préréglages de filigrane"
                  },
                  "ja-JP": {
                    singular: "ウォーターマークのプリセットを管理"
                  },
                  "ko-KR": {
                    singular: "워터마크 사전 설정 관리"
                  },
                  "pt-BR": {
                    singular: "Gerenciar predefinições de marca d'água"
                  },
                  "zh-CN": {
                    singular: "管理水印预设"
                  }
                }
              })
            }), (0, _v1.jsx)(_v3.Flex, {
              gap: "md",
              alignItems: "center",
              children: (0, _v1.jsx)(_v8.ModalCloseButton, {
                position: "relative",
                top: "0",
                right: "0"
              })
            })]
          }), (0, _v1.jsx)(_v7.ModalBody, {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            overflowY: "auto",
            p: 0,
            children: _v3 ? (0, _v1.jsx)(_v3.Flex, {
              h: "100%",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v1.jsx)(_v20.Spinner, {
                size: "lg"
              })
            }) : 0 === _v2.length ? (0, _v1.jsxs)(_v3.Flex, {
              h: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "md",
              px: "md",
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-xl",
                fontSize: "lg",
                color: "text-primary",
                children: (0, _v21.translate)({
                  singular: "No presets found",
                  dictionary: {
                    es: {
                      singular: "No se encontraron configuraciones predeterminadas"
                    },
                    "de-DE": {
                      singular: "Keine Voreinstellungen gefunden"
                    },
                    "fr-FR": {
                      singular: "Aucun préréglage trouvé"
                    },
                    "ja-JP": {
                      singular: "プリセットが見つかりません"
                    },
                    "ko-KR": {
                      singular: "사전 설정을 찾을 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Nenhuma predefinição encontrada"
                    },
                    "zh-CN": {
                      singular: "未找到预设"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v15.Text, {
                variant: "body-xl",
                fontSize: "sm",
                color: "text-secondary",
                children: (0, _v21.translate)({
                  singular: "Create a preset to get started",
                  dictionary: {
                    es: {
                      singular: "Cree una configuración predeterminada para empezar"
                    },
                    "de-DE": {
                      singular: "Erstellen Sie zum Einstieg eine Voreinstellung"
                    },
                    "fr-FR": {
                      singular: "Créez un préréglage pour commencer"
                    },
                    "ja-JP": {
                      singular: "プリセットを作成して始める"
                    },
                    "ko-KR": {
                      singular: "시작하려면 사전 설정을 생성하세요."
                    },
                    "pt-BR": {
                      singular: "Crie uma predefinição para começar"
                    },
                    "zh-CN": {
                      singular: "创建一个预设即可开始"
                    }
                  }
                })
              })]
            }) : (0, _v1.jsxs)(_v13.Table, {
              variant: "simple",
              size: "sm",
              children: [(0, _v1.jsx)(_v17.Thead, {
                children: (0, _v1.jsxs)(_v18.Tr, {
                  children: [(0, _v1.jsx)(_v16.Th, {
                    textTransform: "none",
                    fontSize: "xs",
                    fontWeight: "semibold",
                    px: {
                      base: "xs",
                      md: "md"
                    },
                    py: "sm",
                    children: (0, _v1.jsx)(_v24, {
                      name: (0, _v21.translate)({
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
                      }),
                      columnKey: "name",
                      sortBy: _v7,
                      direction: _v8,
                      toggleSortDirection: _v23
                    })
                  }), (0, _v1.jsx)(_v16.Th, {
                    textTransform: "none",
                    fontSize: "xs",
                    fontWeight: "semibold",
                    px: {
                      base: "xs",
                      md: "md"
                    },
                    py: "sm",
                    display: {
                      base: "none",
                      sm: "table-cell"
                    },
                    children: (0, _v1.jsx)(_v24, {
                      name: (0, _v21.translate)({
                        singular: "Modified",
                        dictionary: {
                          es: {
                            singular: "Modificado"
                          },
                          "de-DE": {
                            singular: "Modifiziert"
                          },
                          "fr-FR": {
                            singular: "Modifiée"
                          },
                          "ja-JP": {
                            singular: "変更日"
                          },
                          "ko-KR": {
                            singular: "수정됨"
                          },
                          "pt-BR": {
                            singular: "Modificado"
                          },
                          "zh-CN": {
                            singular: "修改于"
                          }
                        }
                      }),
                      columnKey: "updated_on",
                      sortBy: _v7,
                      direction: _v8,
                      toggleSortDirection: _v23
                    })
                  }), (0, _v1.jsx)(_v16.Th, {
                    textTransform: "none",
                    fontSize: "xs",
                    fontWeight: "semibold",
                    px: {
                      base: "xs",
                      md: "md"
                    },
                    py: "sm",
                    display: {
                      base: "none",
                      md: "table-cell"
                    },
                    children: (0, _v21.translate)({
                      singular: "Instances",
                      dictionary: {
                        es: {
                          singular: "Instancias"
                        },
                        "de-DE": {
                          singular: "Instanzen"
                        },
                        "fr-FR": {
                          singular: "Cas"
                        },
                        "ja-JP": {
                          singular: "インスタンス"
                        },
                        "ko-KR": {
                          singular: "인스턴스"
                        },
                        "pt-BR": {
                          singular: "Instâncias"
                        },
                        "zh-CN": {
                          singular: "实例"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v16.Th, {
                    textTransform: "none",
                    fontSize: "xs",
                    fontWeight: "semibold",
                    px: {
                      base: "xs",
                      md: "md"
                    },
                    py: "sm",
                    children: (0, _v21.translate)({
                      singular: "Actions",
                      dictionary: {
                        es: {
                          singular: "Acciones"
                        },
                        "de-DE": {
                          singular: "Aktionen"
                        },
                        "ja-JP": {
                          singular: "メニュー"
                        },
                        "ko-KR": {
                          singular: "옵션"
                        },
                        "pt-BR": {
                          singular: "Ações"
                        },
                        "zh-CN": {
                          singular: "操作"
                        }
                      }
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v14.Tbody, {
                children: _v2.map(_v0 => (0, _v1.jsx)(_v105, {
                  preset: _v0,
                  onDelete: _v24,
                  onEdit: _v26,
                  onCopy: _v27,
                  isDeleting: _v14 === _v0.name
                }, _v0.id))
              })]
            })
          }), (0, _v1.jsx)(_v3.Flex, {
            p: "md",
            justifyContent: "flex-end",
            borderTop: "1px solid",
            borderTopColor: "lightBlueAlpha.200",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "sm",
              onClick: () => {
                _v19(null), _v21(!1), _v17(!0);
              },
              children: (0, _v21.translate)({
                singular: "Create preset",
                dictionary: {
                  es: {
                    singular: "Crear configuración predeterminada"
                  },
                  "de-DE": {
                    singular: "Voreinstellung erstellen"
                  },
                  "fr-FR": {
                    singular: "Créer préréglage"
                  },
                  "ja-JP": {
                    singular: "プリセットを作成"
                  },
                  "ko-KR": {
                    singular: "사전 설정 만들기"
                  },
                  "pt-BR": {
                    singular: "Criar Predefinição"
                  },
                  "zh-CN": {
                    singular: "创建预设"
                  }
                }
              })
            })
          })]
        })]
      }), (0, _v1.jsx)(_v97, {
        isOpen: !!_v10,
        onClose: () => {
          _v11(null);
        },
        onConfirm: _v25,
        isLoading: _v12,
        title: (0, _v21.translate)({
          singular: "Delete Preset",
          dictionary: {
            es: {
              singular: "Eliminar configuración predeterminada"
            },
            "de-DE": {
              singular: "Voreinstellung löschen"
            },
            "fr-FR": {
              singular: "Supprimer le préréglage"
            },
            "ja-JP": {
              singular: "プリセットを削除"
            },
            "ko-KR": {
              singular: "사전 설정 삭제"
            },
            "pt-BR": {
              singular: "Excluir predefinição"
            },
            "zh-CN": {
              singular: "删除预设"
            }
          }
        }),
        message: (0, _v21.translate)({
          singular: "Are you sure you want to delete this preset?",
          dictionary: {
            es: {
              singular: "¿Estás seguro de querer eliminar este ajuste predeterminado?"
            },
            "de-DE": {
              singular: "Willst du diese Voreinstellung wirklich löschen?"
            },
            "fr-FR": {
              singular: "Êtes-vous sûr de vouloir supprimer ce préréglage ? "
            },
            "ja-JP": {
              singular: "このプリセットを削除してもよろしいですか？"
            },
            "ko-KR": {
              singular: "이 사전 설정을 삭제하시겠습니까?"
            },
            "pt-BR": {
              singular: "Tem certeza de que deseja excluir esta predefinição?"
            },
            "zh-CN": {
              singular: "您确定要删除此预设吗？"
            }
          }
        }),
        confirmText: (0, _v21.translate)({
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
        }),
        cancelText: (0, _v21.translate)({
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
      }), (0, _v1.jsx)(_v95, {
        isOpen: _v16,
        onSuccess: () => {
          _v20 && _v9 && _v9("", void 0), _v6?.(), _v28();
        },
        onClose: _v28,
        ownerOrWorkspaceId: _v4,
        presetId: _v18?.id ?? void 0,
        initialData: _v18 ?? void 0
      })]
    });
  }], 0);
  let _v106 = ["name", "id", "createdOn", "createdBy", "updatedOn", "ownerId", "elements.id", "elements.config", "elements.config.content", "elements.layout"];
  _v0.s(["useWatermarkingPresets", 0, ({
    ownerId: _v0,
    isModalOpen: _v1,
    sortBy: _v2,
    sortOrder: _v3
  }) => {
    let {
        isWorkspace: _v4
      } = (0, _v53.useIsWorkspace)(),
      {
        data: _v5,
        mutate: _v6,
        error: _v7
      } = _v51(() => _v4 && _v0 && _v1 ? {
        select: _v106,
        where: {
          workspaceUuid: _v0
        },
        query: {
          sort: _v2,
          direction: _v3
        }
      } : null),
      [_v8] = _v47(),
      {
        data: _v9,
        mutate: _v10,
        error: _v11
      } = _v42(() => !_v4 && _v0 && _v1 ? {
        select: _v106,
        where: {
          userId: "number" == typeof _v0 ? _v0 : parseInt(_v0)
        },
        query: {
          sort: _v2,
          direction: _v3
        }
      } : null),
      [_v12] = _v37(),
      _v13 = _v4 ? _v5 : _v9,
      _v14 = _v4 ? _v6 : _v10,
      _v15 = _v4 ? _v7 : _v11,
      _v16 = async _v0 => {
        _v0.id && (_v4 ? await _v8({
          where: {
            workspaceUuid: _v0,
            presetId: _v0.id
          },
          select: ["id", "name"]
        }) : await _v12({
          where: {
            userId: "number" == typeof _v0 ? _v0 : parseInt(_v0),
            presetId: _v0.id
          },
          select: ["id", "name"]
        }));
      };
    return {
      presets: _v13?.data ?? [],
      isLoading: !_v13 && !_v15,
      error: _v15,
      deletePreset: _v16,
      refreshPresets: () => {
        _v14();
      }
    };
  }], 0);
}