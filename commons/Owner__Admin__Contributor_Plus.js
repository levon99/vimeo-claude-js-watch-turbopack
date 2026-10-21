{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ["Owner", "Admin", "Contributor Plus"],
    _v9 = ["Owner", "Admin"],
    _v10 = ["enterpriseAddonTrials.expiresOn", "enterpriseAddonTrials.forcedUpsell", "enterpriseAddonTrials.key", "enterpriseAddonTrials.paid", "enterpriseAddonTrials.trial"];
  _v0.s(["useAccessEventSeriesEditor", 0, () => {
    let _v0 = (0, _v7.useViewer)(),
      {
        release_event_series_v1: _v1
      } = (0, _v6.useOrionSettingsFields)(["release_event_series_v1"]),
      _v2 = (0, _v5.useOrionLoading)(),
      _v3 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        capabilities: _v4,
        ready: _v5
      } = (0, _v1.useCapability)(["hasEventSeriesEnabled"], _v3),
      {
        data: _v6,
        isLoading: _v7
      } = (0, _v4.useGetUserTeamRole)(() => _v3 && !_v2 && _v1 ? {
        select: ["permissionLevel"],
        where: {
          userId: _v3
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v8,
        isLoading: _v9
      } = (0, _v2.useGetUser)(() => _v3 ? {
        where: {
          userId: _v3
        },
        select: _v10
      } : null, {
        revalidateOnFocus: !1
      }),
      _v10 = _v8?.enterpriseAddonTrials?.find(({
        key: _v0
      }) => "event_series" === _v0),
      _v11 = !!_v3 && _v9,
      _v12 = _v10?.expiresOn,
      _v13 = _v10?.forcedUpsell === !0,
      _v14 = _v10?.trial === !0 && !_v10.paid,
      _v15 = null != _v10 && !!_v10.expiresOn && !_v10.trial && !_v10.paid,
      _v16 = _v2 || _v7 || !_v5 || _v11,
      _v17 = _v6?.permissionLevel,
      _v18 = _v1 && null != _v17 && _v8.includes(_v17),
      _v19 = null != _v17 && _v9.includes(_v17),
      _v20 = _v4.hasEventSeriesEnabled,
      _v21 = !_v16 && _v18 && ((_v14 || _v15) && !_v13 || _v20),
      _v22 = _v21 && _v15 && !_v20,
      {
        data: _v23,
        mutate: _v24
      } = (0, _v3.useGetUserEventSeries)(() => (_v14 || _v22) && _v3 ? {
        select: ["uri"],
        where: {
          userId: _v3
        },
        query: {
          perPage: 1
        }
      } : null),
      _v25 = _v14 && null !== _v23 && "object" == typeof _v23 && !0 === _v23.trialLimitReached,
      _v26 = _v22 && _v23?.total === 0;
    return {
      canAccessEventSeriesEditor: _v21,
      canCreateNewEventSeries: _v21 && !_v22 && !_v25,
      canUpsellEventSeries: _v26,
      revalidateEventSeriesProbe: _v24,
      isLoading: _v16,
      expiresOn: _v12,
      isTrialing: _v14,
      isTrialExpired: _v15,
      isForcedUpsell: _v13,
      isAccountManager: _v19
    };
  }]);
}