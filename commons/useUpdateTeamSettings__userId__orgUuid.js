{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useUpdateTeamSettings", 0, ({
    userId: _v0,
    orgUuid: _v1,
    workspaceUuid: _v2
  }) => {
    let [_v3, {
        loading: _v4,
        error: _v5
      }] = (0, _v2.usePatchTeamSettings)(),
      [_v6, {
        loading: _v7,
        error: _v8
      }] = (0, _v1.usePatchOrganizationSettings)(),
      [_v9, {
        loading: _v10,
        error: _v11
      }] = (0, _v3.usePatchWorkspaceSettings)(),
      _v12 = async (_v0, _v1) => {
        _v1 && _v6 ? await _v6({
          where: {
            orgUuid: _v1
          },
          variables: _v0,
          ...(_v1 && {
            query: _v1
          })
        }) : _v0 && _v3 ? await _v3({
          where: {
            userId: _v0
          },
          variables: _v0,
          ...(_v1 && {
            query: _v1
          })
        }) : _v2 && _v9 && (await _v9({
          where: {
            workspaceUuid: _v2
          },
          variables: _v0,
          ...(_v1 && {
            query: _v1
          })
        }));
      },
      [_v13, _v14] = _v1 ? [_v8, _v7] : _v2 ? [_v11, _v10] : [_v5, _v4];
    return {
      teamSettingsUpdateError: _v13,
      teamSettingsUpdateLoading: _v14,
      onUpdateSetting: _v12
    };
  }]);
}