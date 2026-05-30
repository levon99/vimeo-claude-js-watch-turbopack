{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (_v0, _v1) => {
    _v0(void 0, {
      populateCache: (_v0, _v1) => ({
        ..._v1,
        total: _v1
      }),
      revalidate: !1
    });
  };
  _v0.s(["useGetOrganizationGroupsCount", 0, (_v0 = null, _v1 = !0) => {
    let {
      data: _v2,
      isLoading: _v3,
      mutate: _v4
    } = (0, _v2.useGetOrganizationTeamGroups)(() => _v0 && _v1 ? {
      where: {
        orgUuid: _v0
      },
      select: ["uri"],
      query: {
        includeAllUsersGroup: !0
      }
    } : null, {
      revalidateOnFocus: !1
    });
    return {
      count: _v2?.total ?? 0,
      isLoading: _v3,
      updateCount: (0, _v1.useCallback)(_v0 => {
        _v5(_v4, _v0);
      }, [_v4])
    };
  }, "useGetTeamGroupsCount", 0, (_v0 = null) => {
    let {
      data: _v1,
      isLoading: _v2,
      mutate: _v3
    } = (0, _v3.useGetUserTeamGroups)(() => _v0 ? {
      where: {
        userId: _v0
      },
      select: ["uri"]
    } : null, {
      revalidateOnFocus: !1
    });
    return {
      count: _v1?.total ?? 0,
      isLoading: _v2,
      updateCount: (0, _v1.useCallback)(_v0 => {
        _v5(_v3, _v0);
      }, [_v3])
    };
  }, "useGetWorkspaceGroupsCount", 0, (_v0 = null, _v1 = !0) => {
    let {
      data: _v2,
      isLoading: _v3,
      mutate: _v4
    } = (0, _v4.useGetWorkspaceGroups)(() => _v0 && _v1 ? {
      where: {
        workspaceUuid: _v0
      },
      select: ["uri"]
    } : null, {
      revalidateOnFocus: !1
    });
    return {
      count: _v2?.total ?? 0,
      isLoading: _v3,
      updateCount: (0, _v1.useCallback)(_v0 => {
        _v5(_v4, _v0);
      }, [_v4])
    };
  }]);
}