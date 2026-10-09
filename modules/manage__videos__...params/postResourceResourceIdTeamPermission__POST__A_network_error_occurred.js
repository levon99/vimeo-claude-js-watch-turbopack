{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    variables: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("postResourceResourceIdTeamPermission", "POST", async () => {
      let _v0 = await fetch(`${_v0}/resources/${_v2}/${_v3}/team_permission`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  async function _v7({
    baseUrl: _v0,
    variables: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("deleteResourceResourceIdTeamPermission", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/resources/${_v2}/${_v3}/team_permission`, {
        ..._v4,
        method: "DELETE",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["useTeamPermissionsActions", 0, () => {
    let {
        logError: _v0
      } = (0, _v11.useErrorTracking)(),
      _v1 = (0, _v13.useGlobalStore)(({
        teamPermissions: _v0
      }) => _v0.actions.loadMoreTeamPermissions),
      {
        resourceType: _v2,
        resourceId: _v3
      } = (0, _v13.useGlobalStore)((0, _v2.useShallow)(({
        resourceProps: _v0
      }) => ({
        resourceType: _v0.resourceType,
        resourceId: _v0.data.id
      }))),
      [_v4, {
        loading: _v5,
        error: _v6
      }] = function () {
        let {
            mutate: _v0
          } = (0, _v8.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v9.useGctlConfig)(),
          [_v5, _v6] = (0, _v3.useInternalState)();
        return [(0, _v1.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/resources/${_v0.where.resourceType}/${_v0.where.resourceId}/team_permission${(0, _v3.serializeQuery)(_v0)}`, _v6({
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
      }(),
      [_v7, {
        loading: _v8,
        error: _v9
      }] = function () {
        let {
            mutate: _v0
          } = (0, _v8.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v9.useGctlConfig)(),
          [_v5, _v6] = (0, _v3.useInternalState)();
        return [(0, _v1.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/resources/${_v0.where.resourceType}/${_v0.where.resourceId}/team_permission${(0, _v3.serializeQuery)(_v0)}`, _v7({
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
      }(),
      _v10 = (0, _v1.useContext)(_v10.ViewerContext);
    (0, _v1.useEffect)(() => {
      _v6 && _v0(_v6, {
        additionalData: {
          action: "update_team_permission"
        }
      });
    }, [_v6, _v0]), (0, _v1.useEffect)(() => {
      _v9 && _v0(_v9, {
        additionalData: {
          action: "delete_team_permission"
        }
      });
    }, [_v9, _v0]);
    let _v11 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = _v12.RESOURCE_TYPE_API_MAP[_v2];
        if (_v1) return _v4({
          where: {
            resourceType: _v1,
            resourceId: _v3
          },
          variables: _v0
        });
      }, [_v4, _v2, _v3]),
      _v12 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = _v12.RESOURCE_TYPE_API_MAP[_v2];
        if (_v1) return _v7({
          where: {
            resourceType: _v1,
            resourceId: _v3
          },
          variables: _v0
        });
      }, [_v7, _v2, _v3]),
      _v13 = (0, _v1.useCallback)(() => {
        _v10 && _v1();
      }, [_v1, _v10]),
      _v14 = (0, _v1.useCallback)(async (_v0, _v1) => {
        if (!_v10) return;
        let {
          type: _v2,
          entityUri: _v3
        } = (0, _v14.getTeamEntityDetails)(_v0.teamEntity);
        _v0.metadata?.interactions.edit && _v2 && _v3 && (await _v11({
          teamEntityType: _v2,
          teamEntityUri: _v3,
          permissionPolicyUri: _v1.uri
        }));
      }, [_v10, _v11]);
    return {
      fetchMoreTeamPermissions: _v13,
      updateTeamPermission: _v11,
      changeTeamPermission: _v14,
      removeTeamPermission: (0, _v1.useCallback)(async _v0 => {
        let {
          type: _v1,
          entityUri: _v2
        } = (0, _v14.getTeamEntityDetails)(_v0.teamEntity);
        _v0.metadata?.interactions.remove?.uri && _v1 && _v2 && (await _v12({
          teamEntityType: _v1,
          teamEntityUri: _v2
        }));
      }, [_v12]),
      isLoading: _v5 || _v8
    };
  }], 0);
}