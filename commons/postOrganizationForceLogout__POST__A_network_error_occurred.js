{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    baseUrl: _v0,
    where: {
      orgUuid: _v1
    },
    ..._v2
  }) {
    return (0, _v5.measureLatency)("postOrganizationForceLogout", "POST", async () => {
      let _v0 = await fetch(`${_v0}/organizations/${_v1}/force_logout`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/organizations/${_v0.where.orgUuid}/force_logout${(0, _v4.serializeQuery)(_v0)}`, _v7({
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
  async function _v11({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v5.measureLatency)("postTeamForceLogout", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/force_logout`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  function _v12() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/force_logout${(0, _v4.serializeQuery)(_v0)}`, _v11({
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
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v10, {
    endpoint: "/organizations/:orgUuid/force_logout",
    method: "POST"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v12, {
    endpoint: "/teams/:userId/force_logout",
    method: "POST"
  });
  let _v13 = {
      state: {
        error: !1,
        loading: !1
      },
      forceLogout: () => {
        throw Error("Not implemented");
      }
    },
    _v14 = (0, _v2.createContext)(_v13),
    _v15 = (0, _v2.createContext)(_v13);
  _v0.s(["ForceLogoutContextOrg", 0, _v15, "ForceLogoutContextProviderOrg", 0, ({
    orgUuid: _v0,
    children: _v1
  }) => {
    let [_v2, _v3] = _v10(),
      _v4 = (0, _v2.useMemo)(() => ({
        state: {
          loading: _v3.loading,
          error: !!_v3.error
        },
        forceLogout: () => {
          _v2({
            where: {
              orgUuid: _v0
            }
          });
        }
      }), [_v2, _v0, _v3]);
    return (0, _v1.jsx)(_v14.Provider, {
      value: _v4,
      children: _v1
    });
  }, "ForceLogoutContextProviderTeam", 0, ({
    ownerId: _v0,
    children: _v1
  }) => {
    let [_v2, _v3] = _v12(),
      _v4 = (0, _v2.useMemo)(() => ({
        state: {
          loading: _v3.loading,
          error: !!_v3.error
        },
        forceLogout: () => {
          _v2({
            where: {
              userId: _v0
            }
          });
        }
      }), [_v2, _v0, _v3]);
    return (0, _v1.jsx)(_v14.Provider, {
      value: _v4,
      children: _v1
    });
  }, "ForceLogoutContextTeam", 0, _v14], 0);
}