{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.i(0), _v0.i(0);
  var _v4 = _v0.i(0);
  let _v5 = (_v0, _v1, _v2, _v3, _v4) => ({
    eventName: _v0,
    version: _v1,
    fields: _v2,
    commonFieldNames: _v3,
    overrideDefaultFields: _v4
  });
  var _v6 = ((_v1 = _v6 || {}).Add = "add", _v1.Remove = "remove", _v1.Change = "change", _v1);
  _v0.s(["trackChangeDownloadPrivacyEvent", 0, _v0 => _v5("vimeo.change_download_privacy", 1, {
    location: "share_settings_modal",
    product: "embed settings",
    allow_downloads: _v0
  }), "trackClickSVVUpsell", 0, ({
    upsellType: _v0
  }) => _v5("workflow.click_svv_upsell", 2, {
    upsell: _v0,
    target: "/upgrade"
  }, ["entry_page", "video_id.string", "video_privacy", "video_embed_privacy", "is_video_password_protected", "team_owner_id.string", "team_size", "team_subscription_type", "actor_team_role", "tier", "svv_nulls"]), "trackEmbedCodeClick", 0, ({
    sizing: _v0,
    dimensions: _v1,
    hash: _v2,
    isChinaDelivery: _v3
  }) => _v5("vimeo.click_embed_code_text", 1, {
    sizing: _v0,
    height: _v1 ? _v1.height : null,
    width: _v1 ? _v1.height : null,
    hash: _v2,
    is_china_delivery_video: _v3
  }, ["entry_page", "video_id.string", "video_privacy", "is_video_password_protected", "video_embed_privacy", "team_size", "actor_team_role", "team_owner_id.string", "team_subscription_type", "svv_nulls"]), "trackOpenCustomizeTabEvent", 0, () => ({
    eventName: "vimeo.open_customize_domain_tab",
    copy: "custom_domain",
    element: "tab",
    modalName: "customize_link_modal",
    eventSpecificFields: {
      collection_type: "showcase"
    }
  }), "trackRevokeFolderAccess", 0, ({
    teamPermission: _v0
  }) => {
    let {
      id: _v1,
      role: _v2
    } = (0, _v4.getTeamEntityDetails)(_v0.teamEntity);
    return _v5("remove_team_member_from_folder", 3, {
      team_member_id: _v1,
      role: _v2
    }, ["team_id", "folder_id"], ["product", "path", "location"]);
  }, "trackRevokeVideoAccess", 0, ({
    teamPermission: _v0
  }) => {
    let {
      id: _v1,
      role: _v2
    } = (0, _v4.getTeamEntityDetails)(_v0.teamEntity);
    return _v5("vimeo.remove_team_member_from_video", 1, {
      team_member_id: _v1,
      role: _v2
    }, ["team_id", "video_id"], ["product", "path", "location"]);
  }, "trackSettingsTabClickEvent", 0, () => _v5("vimeo.open_share_settings", 1, {
    product: "Collaboration"
  }, ["video_id"], ["path", "location"]), "trackTogglePublicCommentsEvent", 0, () => _v5("vimeo.svv_click", 1, {
    name: "action",
    location: "share_settings_modal",
    component: "save_comments_privacy",
    page: "manage"
  }), "trackToggleRegionalShareEvent", 0, ({
    isShareEnabled: _v0
  }) => _v5("vimeo.toggle_regional_share", 1, {
    is_share_enabled: _v0
  }, ["video_id", "team_owner_id", "actor_team_role"]), "trackToggleShowcasePrivacyEvent", 0, () => _v5("vimeo.svv_click", 1, {
    name: "action",
    location: "share_settings_modal",
    component: "toggle_showcase_privacy",
    page: "manage"
  }), "trackUpdateFolderSettings", 0, _v0 => _v5("update_folder_settings", 5, {
    settings_changed: [_v0]
  }, ["folder_id", "is_subfolder"], ["product", "path", "location"]), "trackUpsellCTAClick", 0, (_v0, _v1) => {
    let _v2 = document.referrer || "",
      _v3 = (0, _v3.getEntryPage)(_v2);
    _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.click", 31, {
      name: "Add Team Members Upsell",
      page: _v3,
      location: _v1,
      target: _v0,
      copy: "Add members",
      feature: "team_members",
      type: "upsell"
    }));
  }, "trackViewShareModal", 0, () => _v5("vimeo.view_share_modal", 2, {}, ["is_subfolder", "type", "tab"], ["path"])]);
}