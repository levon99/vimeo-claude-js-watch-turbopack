{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = {
    [_v8.ShareModalState.Default]: "share",
    [_v8.ShareModalState.Embed]: "embed"
  };
  _v0.s(["SCREEN_TAB_MAP", 0, _v9, "useAnalyticsEvent", 0, () => {
    let _v0 = (0, _v5.useViewer)(),
      {
        hooks: {
          useEventStore: _v1
        }
      } = (0, _v1.useContext)(_v6.ResourceConfigContext),
      {
        fields: _v2
      } = _v1(),
      _v3 = (0, _v7.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasUpsellsForFlatRateTiers),
      {
        userId: _v4,
        user: _v5
      } = (0, _v7.useGlobalStore)((0, _v2.useShallow)(({
        resourceProps: _v0
      }) => ({
        userId: _v0.data.userId,
        user: _v0.data.user
      }))),
      {
        page: _v6,
        entryPoint: _v7,
        teamPermissionLevel: _v8,
        totalTeamMembers: _v9
      } = (0, _v7.useGlobalStore)((0, _v2.useShallow)(({
        shared: _v0
      }) => ({
        page: _v0.data.page,
        entryPoint: _v0.data.entryPoint,
        teamPermissionLevel: _v0.data.teamPermissionLevel,
        totalTeamMembers: _v0.data.totalTeamMembers
      }))),
      _v10 = (0, _v7.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v11 = _v9[(0, _v7.useGlobalStore)(({
        screen: _v0
      }) => _v0.main)],
      _v12 = (0, _v1.useMemo)(() => {
        let _v0 = document.referrer || "",
          _v1 = (0, _v4.getEntryPage)(_v0);
        return {
          product: "Workflow",
          page: _v6,
          path: window.top?.location.pathname ?? "",
          team_id: _v4,
          team_owner_id: _v4,
          actor_team_role: _v8 ?? "",
          entry_point: _v7,
          team_size: _v9 ?? 0,
          team_subscription_type: _v5.membership?.type,
          entry_page: _v1,
          type: _v10,
          tier: _v3 ? "plus" : "starter",
          actor_resource_role: null,
          tab: _v11 ?? null,
          ..._v2
        };
      }, [_v11, _v7, _v3, _v6, _v2, _v10, _v8, _v9, _v5.membership?.type, _v4, _v0?.user?.id]),
      _v13 = _v0 => {
        let _v1 = {};
        return _v0.map(_v0 => {
          let _v1 = _v0.split("."),
            _v2 = _v1[0],
            _v3 = _v1[1];
          if (_v12.hasOwnProperty(_v2)) {
            let _v0 = _v12[_v2];
            _v0 && _v3 && "string" === _v3 && (_v0 = _v0.toString()), _v1[_v2] = _v0;
          }
        }), _v1;
      };
    return {
      sendAnalyticEvent: (0, _v1.useCallback)(({
        eventName: _v0,
        version: _v1,
        fields: _v2,
        commonFieldNames: _v3 = [],
        overrideDefaultFields: _v4 = ["product", "path", "location", "page"]
      }) => {
        _v3.includes("svv_nulls") && (_v3 = _v3.concat(["is_preset_applied", "video_app_id", "video_status", "upload_id", "video_type", "actor_resource_role"]));
        let _v5 = _v13(_v3),
          _v6 = _v13(_v4);
        _v3.BigPictureClient.sendEvent(new _v3.Event(_v0, _v1, {
          ..._v5,
          ..._v6,
          ..._v2
        }));
      }, [_v12])
    };
  }]);
}