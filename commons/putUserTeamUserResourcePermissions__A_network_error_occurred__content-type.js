{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      teamUserId: _v3
    },
    ..._v4
  }) {
    return (0, _v2.measureLatency)("putUserTeamUserResourcePermissions", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/team_users/${_v3}/resource_permissions`, {
        ..._v4,
        method: "PUT",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v5 = _v0.i(0);
  let _v6 = {
      loading: !1,
      complete: !1,
      error: void 0
    },
    _v7 = (_v0, _v1) => {
      switch (_v1.type) {
        case 0:
          return {
            ..._v0,
            complete: !0,
            loading: !1
          };
        case 1:
          return {
            ..._v0,
            error: _v1.payload.error,
            complete: !0,
            loading: !1
          };
        case 3:
          return {
            ..._v6,
            loading: !0
          };
        default:
          return _v0;
      }
    };
  _v0.s(["usePutBatchFolderTeamPermissions", 0, () => {
    let {
        baseUrl: _v0,
        xVimeoPage: _v1,
        jwt: _v2,
        locale: _v3
      } = (0, _v5.useGctlConfig)(),
      [_v4, _v5] = (0, _v1.useReducer)(_v7, _v6);
    return [(0, _v1.useCallback)(async (_v0, _v1, _v2, _v3, _v4 = !1, _v5 = [], _v6 = []) => {
      let _v7 = {
          "Content-Type": "application/json",
          Authorization: _v2 ? `jwt ${_v2}` : "",
          "Vimeo-Page": `${_v1}`,
          "Accept-Language": _v3 ?? "en"
        },
        _v8 = (_v0, _v1) => _v4({
          baseUrl: _v0,
          where: {
            userId: _v2,
            teamUserId: parseInt(_v0.uri.split("/").pop() || "0", 10)
          },
          variables: _v1,
          headers: _v7
        }),
        _v9 = async _v0 => {
          try {
            return _v5({
              type: 3
            }), await Promise.all(_v0), _v5({
              type: 0
            }), !0;
          } catch (_v0) {
            return _v5({
              type: 1,
              payload: {
                error: _v0.message
              }
            }), !1;
          }
        };
      if (_v4) {
        let _v0 = {
          permissions: [],
          selectAll: !0,
          permissionPolicyUri: _v3,
          excludedFolderUris: _v5,
          includedFolderUris: _v6
        };
        return _v9(_v0.map(_v0 => _v8(_v0, _v0)));
      }
      return _v9(Array(Math.ceil(_v1.length / 20)).fill(0).map((_v0, _v1) => _v1.slice(20 * _v1, 20 * _v1 + 20)).flatMap(_v0 => {
        let _v1 = {
          permissions: _v0.map(_v0 => ({
            resourceUri: _v0,
            permissionPolicyUri: _v3
          }))
        };
        return _v0.map(_v0 => _v8(_v0, _v1));
      }));
    }, [_v0, _v1, _v2, _v3, _v5]), _v4];
  }], 0);
}