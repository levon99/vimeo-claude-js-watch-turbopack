{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ["Owner", "Admin", "Contributor Plus"],
    _v7 = ["enterpriseAddonTrials.expiresOn", "enterpriseAddonTrials.forcedUpsell", "enterpriseAddonTrials.key", "enterpriseAddonTrials.paid", "enterpriseAddonTrials.trial"];
  _v0.s(["useAccessEventSeriesEditor", 0, () => {
    let _v0 = (0, _v5.useViewer)(),
      {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v4.useOrionSettings)(),
      _v3 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        capabilities: _v4,
        ready: _v5
      } = (0, _v1.useCapability)(["hasEventSeriesEnabled"], _v3),
      _v6 = _v1.enable_event_series || _v1.release_event_series_v1,
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v3.useGetUserTeamRole)(() => _v3 && !_v2 && _v6 ? {
        select: ["permissionLevel"],
        where: {
          userId: _v3
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v9,
        isLoading: _v10
      } = (0, _v2.useGetUser)(() => _v3 ? {
        where: {
          userId: _v3
        },
        select: _v7
      } : null, {
        revalidateOnFocus: !1
      }),
      _v11 = _v9?.enterpriseAddonTrials?.find(({
        key: _v0
      }) => "event_series" === _v0),
      _v12 = !!_v3 && _v10,
      _v13 = _v11?.expiresOn,
      _v14 = _v11?.forcedUpsell === !0,
      _v15 = _v11?.trial === !0 && !_v11.paid,
      _v16 = null != _v11 && !!_v11.expiresOn && !_v11.trial && !_v11.paid,
      _v17 = _v2 || _v8 || !_v5 || _v12,
      _v18 = _v7?.permissionLevel,
      _v19 = _v6 && !!_v18 && _v6.includes(_v18),
      _v20 = _v4.hasEventSeriesEnabled,
      _v21 = !_v17 && _v19 && ((_v15 || _v16) && !_v14 || _v20);
    return {
      canAccessEventSeriesEditor: _v21,
      canCreateNewEventSeries: _v21 && (!_v16 || _v20),
      isLoading: _v17,
      expiresOn: _v13,
      isTrialing: _v15,
      isTrialExpired: _v16,
      isForcedUpsell: _v14,
      hasEventSeriesEnabled: _v20
    };
  }]);
}