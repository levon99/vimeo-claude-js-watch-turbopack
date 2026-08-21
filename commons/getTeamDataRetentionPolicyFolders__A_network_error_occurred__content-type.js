{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      policyId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v3.measureLatency)("getTeamDataRetentionPolicyFolders", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/policies/${_v3}/folders?${(0, _v4.searchQueryString)(_v4)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v5,
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
    select: _v1,
    where: {
      userId: _v2,
      policyId: _v3
    },
    ..._v4
  }) {
    return (0, _v3.measureLatency)("putTeamDataRetentionPolicyFolders", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/policies/${_v3}/folders?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PUT"
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
  function _v12() {
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
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/policies/${_v0.where.policyId}/folders${(0, _v2.serializeQuery)(_v0)}`, _v5({
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
  function _v13() {
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
  }
  async function _v14({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      policyId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v3.measureLatency)("getTeamDataRetentionPolicyTeamGroups", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/policies/${_v3}/team_groups?${(0, _v4.searchQueryString)(_v4)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v15({
    baseUrl: _v0,
    where: {
      userId: _v1,
      policyId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("putTeamDataRetentionPolicyTeamGroups", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/data_retention/policies/${_v2}/team_groups`, {
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
  function _v16() {
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
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/policies/${_v0.where.policyId}/team_groups${(0, _v2.serializeQuery)(_v0)}`, _v14({
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
  function _v17() {
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
        let _v0 = await _v15({
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
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v8.default)(_v2 ? `/teams/${_v2.where.userId}/data_retention/policies/${_v2.where.policyId}/folders${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v5({
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
    endpoint: "/teams/:userId/data_retention/policies/:policyId/folders",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v12, {
    endpoint: "/teams/:userId/data_retention/policies/:policyId/folders",
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
      return [`/teams/${_v2.where.userId}/data_retention/policies/${_v2.where.policyId}/folders?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
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
    endpoint: "/teams/:userId/data_retention/policies/:policyId/folders",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v13, {
    endpoint: "/teams/:userId/data_retention/policies/:policyId/folders",
    method: "PUT"
  }), _v0.s(["useGetTeamDataRetentionPolicyFoldersLazy", 0, _v12, "usePutTeamDataRetentionPolicyFolders", 0, _v13], 0), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v8.default)(_v2 ? `/teams/${_v2.where.userId}/data_retention/policies/${_v2.where.policyId}/team_groups${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v14({
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
    endpoint: "/teams/:userId/data_retention/policies/:policyId/team_groups",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v16, {
    endpoint: "/teams/:userId/data_retention/policies/:policyId/team_groups",
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
      return [`/teams/${_v2.where.userId}/data_retention/policies/${_v2.where.policyId}/team_groups?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v14({
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
    endpoint: "/teams/:userId/data_retention/policies/:policyId/team_groups",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v17, {
    endpoint: "/teams/:userId/data_retention/policies/:policyId/team_groups",
    method: "PUT"
  }), _v0.s(["useGetTeamDataRetentionPolicyTeamGroupsLazy", 0, _v16, "usePutTeamDataRetentionPolicyTeamGroups", 0, _v17], 0);
}