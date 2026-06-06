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
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.s(["useGetContexts", 0, () => {
    let _v0 = (0, _v11.useViewer)(),
      {
        isPrivateToUser: _v1,
        hasParent: _v2,
        folderId: _v3,
        resourceType: _v4,
        userId: _v5
      } = (0, _v13.useGlobalStore)((0, _v1.useShallow)(({
        resourceProps: _v0
      }) => ({
        isPrivateToUser: _v0.data.isPrivateToUser,
        hasParent: _v0.data.hasParent,
        folderId: _v0.data.folderId,
        resourceType: _v0.resourceType,
        userId: _v0.data.userId
      }))),
      _v6 = (0, _v13.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.page),
      _v7 = (0, _v13.useGlobalStore)(({
        invite: _v0
      }) => _v0.data.newMemberRole),
      _v8 = _v0?.teamUser,
      _v9 = [_v14.ResourceType.Folder, _v14.ResourceType.Video].includes(_v4) ? (0, _v4.buildFolderBpContext)({
        folder_id: _v3 ? Number(_v3) : 0,
        is_subfolder: _v4 === _v14.ResourceType.Folder ? _v2 : null,
        is_private_to_me: _v1
      }) : null,
      _v10 = (0, _v10.buildWebBpContext)({
        page_name: _v12.PageMap[_v6] ?? "single_video_view",
        path: window.location.href
      }),
      _v11 = (0, _v7.buildTeamBpContextFromTeamUser)(_v8 ?? void 0),
      _v12 = (0, _v6.buildTargetTeamBpContext)({
        is_team_member: !0,
        team_owner_id: _v5 || null,
        team_subscription_type: _v8?.accountType || null,
        team_role: _v7.rawLabel?.toLowerCase() || null,
        team_id: _v8?.teamId || null,
        resource_permission_level: (0, _v15.camelToSnakeCase)(_v7.value ?? "").toLowerCase() || null,
        joined_team_at: null
      }),
      _v13 = (0, _v3.buildActionBpContext)({
        action_type: "click",
        feature: null
      });
    return {
      fetchProductAnalyticsBpContext: ({
        product: _v0,
        feature: _v1,
        flow: _v2,
        element: _v3,
        copy: _v4,
        modalName: _v5
      }) => (0, _v5.buildProductAnalyticsBpContext)({
        product: _v0 ?? "collaboration",
        feature: _v1 ?? "share",
        location: "modal",
        modal_name: _v5 ?? "share_entity_modal",
        flow: _v2,
        element: void 0 !== _v3 ? _v3 : "button",
        copy: _v4,
        device_type: (0, _v2.default)(),
        is_user_facing_data: !1,
        entity_type: _v12.ResourceTypeEntityMap[_v4]?.entityType
      }),
      webContext: _v10,
      teamContext: _v11,
      targetTeamContext: _v12,
      actionContext: _v13,
      viewContext: (0, _v9.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }),
      thirdPartyIntegrationContext: (0, _v8.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        managed_user_id: null,
        is_partner: null
      }),
      folderContext: _v9
    };
  }]);
}