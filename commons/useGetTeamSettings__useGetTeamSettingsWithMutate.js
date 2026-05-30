{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useGetTeamSettings", 0, ({
    userId: _v0,
    orgUuid: _v1,
    workspaceUuid: _v2,
    settings: _v3 = []
  }) => {
    let [_v4, {
        error: _v5,
        data: _v6,
        loading: _v7
      }] = (0, _v3.useGetTeamSettingsLazy)(),
      [_v8, {
        error: _v9,
        data: _v10,
        loading: _v11
      }] = (0, _v2.useGetOrganizationSettingsLazy)(),
      [_v12, {
        error: _v13,
        data: _v14,
        loading: _v15
      }] = (0, _v4.useGetWorkspaceSettingsLazy)();
    (0, _v1.useEffect)(() => {
      _v1 && _v8 ? _v8({
        select: _v3 || [],
        where: {
          orgUuid: _v1
        }
      }) : _v0 && _v4 ? _v4({
        select: _v3 || [],
        where: {
          userId: _v0
        }
      }) : _v2 && _v12 ? _v12({
        select: _v3 || [],
        where: {
          workspaceUuid: _v2
        }
      }) : Promise.resolve();
    }, [_v0, _v1, _v2]);
    let [_v16, _v17, _v18] = _v1 ? [_v10, _v11, _v9] : _v2 ? [_v14, _v15, _v13] : [_v6, _v7, _v5];
    return {
      teamSettingsResult: _v16,
      teamSettingsLoading: _v17,
      teamSettingsError: _v18
    };
  }, "useGetTeamSettingsWithMutate", 0, ({
    userId: _v0,
    settings: _v1 = [],
    swrConfig: _v2,
    workspaceUuid: _v3
  }) => {
    let _v4 = (0, _v4.useGetWorkspaceSettings)(() => _v3 ? {
        select: _v1,
        where: {
          workspaceUuid: _v3
        }
      } : null, _v2),
      _v5 = (0, _v3.useGetTeamSettings)(() => _v0 ? {
        select: _v1,
        where: {
          userId: _v0
        }
      } : null, _v2),
      _v6 = _v3 ? _v4.data : _v5.data,
      _v7 = _v3 ? _v4.error : _v5.error,
      _v8 = _v3 ? _v4.isLoading : _v5.isLoading,
      _v9 = _v3 ? _v4.isValidating : _v5.isValidating;
    return {
      data: _v6,
      isLoading: _v8,
      error: _v7,
      mutate: _v3 ? _v4.mutate : _v5.mutate,
      isValidating: _v9
    };
  }]);
}