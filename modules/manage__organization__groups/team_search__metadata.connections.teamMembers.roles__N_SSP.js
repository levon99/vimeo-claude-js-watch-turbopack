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
    _v12 = _v0.i(0);
  let _v13 = () => void 0,
    _v14 = () => {
      _v5.GoogleTagManager.trackEvent("team_search");
    },
    _v15 = ({
      organizationInternalId: _v0,
      organizationUuid: _v1
    }) => {
      let {
          data: _v2
        } = (0, _v9.useGetUser)(() => _v0 ? {
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
        } = (0, _v12.useGetOrganizationGroupsCount)(_v1),
        _v4 = (0, _v4.useMemo)(() => ({
          analyticsHandlers: {
            trackTeamGroupsRowClick: _v13,
            trackGroupOpenBP2Event: _v13,
            trackGroupMemberSearchEvent: _v13,
            trackGroupSearchEvent: _v13,
            trackSearch: _v14,
            trackSortEvent: _v13,
            sendGroupCreationEvent: _v13,
            sendGroupDeleteEvent: _v13,
            sendGroupUpdateEvent: _v13
          },
          ownerId: _v0,
          rolesInfo: _v2?.metadata?.connections?.teamMembers?.roles ?? [],
          mode: _v10.GroupsPageMode.ORGANIZATION,
          orgUuid: _v1
        }), [_v0, _v1, _v2?.metadata?.connections?.teamMembers?.roles]);
      return _v0 && _v2 ? (0, _v1.jsx)(_v8.Box, {
        p: "lg",
        children: (0, _v1.jsx)(_v11.TeamGroups, {
          ..._v4,
          updateTotalGroupsCount: _v3
        })
      }) : (0, _v1.jsx)(_v7.Center, {
        children: (0, _v1.jsx)(_v6.Spinner, {})
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
  (0, _v2.withPageSetup)(_v16.getOrgUuidServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v17.getLayout = (_v0, _v1) => (0, _v3.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v17], 0);
}