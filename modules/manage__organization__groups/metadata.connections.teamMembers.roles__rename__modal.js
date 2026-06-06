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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
    organizationInternalId: _v0,
    organizationUuid: _v1
  }) => {
    let {
        data: _v2
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
        updateCount: _v3
      } = (0, _v11.useGetOrganizationGroupsCount)(_v1),
      {
        sendChangeInAccountSettingsEvent: _v4
      } = (0, _v13.useTrackEvents)(),
      _v5 = (0, _v4.useRef)(_v4),
      {
        trackTeamGroupsRowClick: _v6,
        trackGroupOpenBP2Event: _v7,
        trackGroupMemberSearchEvent: _v8,
        trackGroupSearchEvent: _v9,
        trackSearch: _v10,
        trackSortEvent: _v11,
        sendGroupCreationEvent: _v12,
        sendGroupUpdateEvent: _v13,
        sendGroupDeleteEvent: _v14
      } = (0, _v14.useTrackGroupEvents)(_v12.ENTITY_TYPE.ORGANIZATION),
      _v15 = (0, _v4.useMemo)(() => ({
        analyticsHandlers: {
          trackTeamGroupsRowClick: _v6,
          trackGroupOpenBP2Event: _v7,
          trackGroupMemberSearchEvent: _v8,
          trackGroupSearchEvent: _v9,
          trackSearch: _v10,
          trackSortEvent: _v11,
          sendGroupCreationEvent: _v12,
          sendGroupDeleteEvent: _v14,
          sendGroupUpdateEvent: (_v0, _v1, _v2, _v3, _v4) => {
            _v13(_v0, _v1, _v2, _v3, _v4), "rename" === _v0 && _v5.current?.({
              location: "modal",
              buttonText: "Save",
              entityType: "group",
              tabName: "groups",
              actionName: _v3?.action_name,
              actionValue: _v3?.action_value ?? null
            });
          }
        },
        ownerId: _v0,
        rolesInfo: _v2?.metadata?.connections?.teamMembers?.roles ?? [],
        mode: _v9.GroupsPageMode.ORGANIZATION,
        orgUuid: _v1
      }), [_v0, _v1, _v12, _v14, _v13, _v8, _v7, _v9, _v10, _v11, _v6, _v2?.metadata?.connections?.teamMembers?.roles]);
    return _v0 && _v2 ? (0, _v1.jsx)(_v7.Box, {
      p: "lg",
      children: (0, _v1.jsx)(_v10.TeamGroups, {
        ..._v15,
        updateTotalGroupsCount: _v3
      })
    }) : (0, _v1.jsx)(_v6.Center, {
      children: (0, _v1.jsx)(_v5.Spinner, {})
    });
  };
  var _v16 = _v0.i(0);
  let _v17 = ({
    organizationInternalId: _v0,
    organizationUuid: _v1
  }) => (0, _v1.jsx)(_v15, {
    organizationInternalId: _v0,
    organizationUuid: _v1
  });
  (0, _v2.withPageSetup)(_v16.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0
  }), _v17.getLayout = (_v0, _v1) => (0, _v3.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v17], 0);
}