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
    _v13 = _v0.i(0);
  let _v14 = ({
    wsInternalId: _v0,
    wsUuid: _v1,
    orgUuid: _v2
  }) => {
    let {
        data: _v3
      } = (0, _v8.useGetUser)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: ["metadata.connections.teamMembers.roles"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      }),
      {
        updateCount: _v4
      } = (0, _v11.useGetWorkspaceGroupsCount)(_v1),
      {
        trackTeamGroupsRowClick: _v5,
        trackGroupOpenBP2Event: _v6,
        trackGroupMemberSearchEvent: _v7,
        trackGroupSearchEvent: _v8,
        trackSearch: _v9,
        trackSortEvent: _v10
      } = (0, _v13.useTrackGroupEvents)(_v12.ENTITY_TYPE.WORKSPACE),
      _v11 = (0, _v4.useMemo)(() => {
        let _v0 = () => {};
        return {
          analyticsHandlers: {
            trackTeamGroupsRowClick: _v5,
            trackGroupOpenBP2Event: _v6,
            trackGroupMemberSearchEvent: _v7,
            trackGroupSearchEvent: _v8,
            trackSearch: _v9,
            trackSortEvent: _v10,
            sendGroupCreationEvent: _v0,
            sendGroupDeleteEvent: _v0,
            sendGroupUpdateEvent: _v0
          },
          ownerId: _v0,
          rolesInfo: _v3?.metadata?.connections?.teamMembers?.roles ?? [],
          mode: _v9.GroupsPageMode.WORKSPACE,
          wsUuid: _v1,
          orgUuid: _v2
        };
      }, [_v2, _v7, _v6, _v8, _v9, _v10, _v5, _v3?.metadata?.connections?.teamMembers?.roles, _v0, _v1]);
    return _v0 && _v3 ? (0, _v1.jsx)(_v7.Box, {
      p: "lg",
      children: (0, _v1.jsx)(_v10.TeamGroups, {
        ..._v11,
        updateTotalGroupsCount: _v4
      })
    }) : (0, _v1.jsx)(_v6.Center, {
      children: (0, _v1.jsx)(_v5.Spinner, {})
    });
  };
  var _v15 = _v0.i(0);
  let _v16 = ({
    workspaceInternalId: _v0,
    organizationUuid: _v1,
    workspaceUuid: _v2
  }) => (0, _v1.jsx)(_v14, {
    wsInternalId: _v0,
    wsUuid: _v2,
    orgUuid: _v1
  });
  (0, _v2.withPageSetup)(_v15.getWspServerSideProps, {
    requireLogin: !0
  }), _v16.getLayout = (_v0, _v1) => (0, _v3.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v16], 0);
}