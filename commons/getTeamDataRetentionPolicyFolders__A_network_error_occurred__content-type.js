{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      policyId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v2.measureLatency)("getTeamDataRetentionPolicyFolders", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/policies/${_v3}/folders?${(0, _v3.searchQueryString)(_v4)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
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
    select: _v1,
    where: {
      userId: _v2,
      policyId: _v3
    },
    ..._v4
  }) {
    return (0, _v2.measureLatency)("putTeamDataRetentionPolicyFolders", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/policies/${_v3}/folders?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0);
  _v0.i(0);
  var _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0);
  async function _v9({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      policyId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v2.measureLatency)("getTeamDataRetentionPolicyTeamGroups", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/policies/${_v3}/team_groups?${(0, _v3.searchQueryString)(_v4)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
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
  async function _v10({
    baseUrl: _v0,
    where: {
      userId: _v1,
      policyId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("putTeamDataRetentionPolicyTeamGroups", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/data_retention/policies/${_v2}/team_groups`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  _v0.s(["useGetTeamDataRetentionPolicyFoldersLazy", 0, function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v1.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/policies/${_v0.where.policyId}/folders${(0, _v1.serializeQuery)(_v0)}`, _v4({
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
  }, "usePutTeamDataRetentionPolicyFolders", 0, function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v8.useGctlConfig)(),
      [_v4, _v5] = (0, _v1.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v5({
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
  }], 0), _v0.s(["useGetTeamDataRetentionPolicyTeamGroupsLazy", 0, function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v1.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/policies/${_v0.where.policyId}/team_groups${(0, _v1.serializeQuery)(_v0)}`, _v9({
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
  }, "usePutTeamDataRetentionPolicyTeamGroups", 0, function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v8.useGctlConfig)(),
      [_v4, _v5] = (0, _v1.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v10({
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
  }], 0);
}