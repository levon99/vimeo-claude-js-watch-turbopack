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
    _v11 = _v0.i(0);
  _v0.s(["useTeamPermissionsActions", 0, () => {
    let {
        logError: _v0
      } = (0, _v5.useErrorTracking)(),
      _v1 = (0, _v7.useGlobalStore)(({
        teamPermissions: _v0
      }) => _v0.actions.loadMoreTeamPermissions),
      {
        resourceType: _v2,
        resourceId: _v3
      } = (0, _v7.useGlobalStore)((0, _v2.useShallow)(({
        resourceProps: _v0
      }) => ({
        resourceType: _v0.resourceType,
        resourceId: _v0.data.id
      }))),
      [_v4, {
        loading: _v5,
        error: _v6
      }] = (0, _v3.usePostResourceResourceIdTeamPermission)(),
      [_v7, {
        loading: _v8,
        error: _v9
      }] = (0, _v3.useDeleteResourceResourceIdTeamPermission)(),
      {
        sendAnalyticEvent: _v10
      } = (0, _v11.useAnalyticsEvent)(),
      _v11 = (0, _v1.useContext)(_v4.ViewerContext);
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
    let _v12 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = _v6.RESOURCE_TYPE_API_MAP[_v2];
        if (_v1) return _v4({
          where: {
            resourceType: _v1,
            resourceId: _v3
          },
          variables: _v0
        });
      }, [_v4, _v2, _v3]),
      _v13 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = _v6.RESOURCE_TYPE_API_MAP[_v2];
        if (_v1) return _v7({
          where: {
            resourceType: _v1,
            resourceId: _v3
          },
          variables: _v0
        });
      }, [_v7, _v2, _v3]),
      _v14 = (0, _v1.useCallback)(() => {
        _v11 && _v1();
      }, [_v1, _v11]),
      _v15 = (0, _v1.useCallback)(async (_v0, _v1) => {
        if (!_v11) return;
        let {
          type: _v2,
          entityUri: _v3
        } = (0, _v10.getTeamEntityDetails)(_v0.teamEntity);
        _v0.metadata?.interactions.edit && _v2 && _v3 && (await _v12({
          teamEntityType: _v2,
          teamEntityUri: _v3,
          permissionPolicyUri: _v1.uri
        }));
      }, [_v11, _v12]);
    return {
      fetchMoreTeamPermissions: _v14,
      updateTeamPermission: _v12,
      changeTeamPermission: _v15,
      removeTeamPermission: (0, _v1.useCallback)(async _v0 => {
        let {
          type: _v1,
          entityUri: _v2
        } = (0, _v10.getTeamEntityDetails)(_v0.teamEntity);
        _v0.metadata?.interactions.remove?.uri && _v1 && _v2 && (_v2 === _v9.ResourceType.Folder ? _v10((0, _v8.trackRevokeFolderAccess)({
          teamPermission: _v0
        })) : _v2 === _v9.ResourceType.Video && _v10((0, _v8.trackRevokeVideoAccess)({
          teamPermission: _v0
        })), await _v13({
          teamEntityType: _v1,
          teamEntityUri: _v2
        }));
      }, [_v13, _v10, _v2]),
      isLoading: _v5 || _v8
    };
  }]);
}