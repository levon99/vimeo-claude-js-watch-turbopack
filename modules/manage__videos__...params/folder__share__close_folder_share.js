{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    [_v1.ResourceType.Folder]: {
      entityType: "folder",
      feature: "share",
      closeFlow: "close_folder_share",
      flow: "share_folder",
      linkFlow: "share_folder_link"
    },
    [_v1.ResourceType.Video]: {
      entityType: "video",
      feature: "share_video",
      closeFlow: "close_video_share",
      flow: "share_video",
      linkFlow: "share_video_link"
    },
    [_v1.ResourceType.Album]: {
      entityType: "showcase",
      feature: "share",
      closeFlow: "share_showcase",
      flow: "share_showcase",
      linkFlow: null
    }
  };
  _v0.s(["DistributionActionDefaults", 0, {
    is_internal: !0,
    distribution_type: "share",
    sharee_id: null,
    sharee_email: null,
    is_send_email_notification: null,
    sharee_entity_permission: null,
    sharee_team_permission: null,
    embed_config: null,
    embed_custom_dimensions: null,
    number_of_items: null,
    target_file_details: null,
    target_quality: null,
    target_resolution: null,
    collection_type: null,
    embed_layout: null,
    target_transcript_language: null,
    embed_playback_toggles_off: null,
    embed_playback_toggles_on: null,
    audio_language_selected_for_download: null,
    distribution_tab: null,
    is_ai_translated: null,
    is_original_language_downloaded: null,
    lms_completion_threshold: null,
    lms_scoring_method: null,
    lms_technical_standard: null
  }, "HelpActionDefaults", 0, {
    cta_type: null
  }, "ModalNameMap", 0, {
    EMBED: "share_entity_modal",
    CUSTOM_EMBED: "customize_embed_modal",
    COPY_LINK: "customize_link_modal"
  }, "PermissionActionDefaults", 0, {
    is_send_email_notification: null,
    target_user_id: null,
    old_resource_permission: null,
    new_resource_permission: null,
    member_team_role: null
  }, "PrivacyActionDefaults", 0, {
    is_preset_applied: null,
    is_video_password_protected: null,
    privacy_field_name: null,
    privacy_field_value: null
  }, "ResourceTypeEntityMap", 0, _v2, "ShareModalActionDefaults", 0, {
    value: null
  }, "VIMEO_DISTRIBUTION_ACTIONS_VERSION", 0, 18, "VIMEO_HELP_CENTER_ACTIONS_VERSION", 0, 2, "VIMEO_PERMISSION_ACTIONS_VERSION", 0, 2, "VIMEO_PRIVACY_ACTIONS_VERSION", 0, 10, "VIMEO_SHARE_MODAL_ACTIONS_VERSION", 0, 2]);
}