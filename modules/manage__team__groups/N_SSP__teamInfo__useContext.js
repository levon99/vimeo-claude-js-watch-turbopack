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
    _v9 = _v0.i(0);
  let _v10 = () => {
      let {
          teamInfo: _v0
        } = (0, _v4.useContext)(_v8.ManageTeamStateCtx),
        {
          teamData: {
            ownerId: _v1 = null
          } = {}
        } = _v0,
        {
          trackTeamGroupsRowClick: _v2
        } = (0, _v4.useContext)(_v8.ManageTeamAnalytics),
        _v3 = _v0.owner.metadata?.connections?.teamMembers?.roles,
        {
          updateCount: _v4
        } = (0, _v7.useGetTeamGroupsCount)(_v1),
        _v5 = (0, _v4.useMemo)(() => ({
          analyticsHandlers: {
            trackTeamGroupsRowClick: _v2,
            trackSearch: () => {
              _v5.GoogleTagManager.trackEvent(_v9.GTMEvent.SEARCH);
            }
          },
          ownerId: _v1,
          rolesInfo: _v3 ?? []
        }), [_v1, _v3, _v2]);
      return (0, _v1.jsx)(_v6.TeamGroups, {
        ..._v5,
        updateTotalGroupsCount: _v4
      });
    },
    _v11 = () => (0, _v1.jsx)(_v10, {});
  _v11.getLayout = _v3.getLayout, (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}