{
  "use strict";

  _v0.s(["DistributionActionDefaults", 0, {
    is_internal: !0,
    distribution_type: null,
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
    collection_type: null
  }, "VIMEO_DISTRIBUTION_ACTIONS_VERSION", 0, 9], 0);
  var _v1 = _v0.i(0);
  _v0.s(["getFolderCtxFromFolder", 0, _v0 => {
    var _v1;
    return {
      folder_id: _v0?.uri ? (0, _v1.getResourceIdFromUri)(_v0?.uri) : 0,
      is_private_to_me: !!_v0?.isPrivateToUser,
      access_permission_to_folder: _v0 ? (_v1 = _v0.metadata?.interactions ?? null) ? _v1.delete ? "can_manage" : _v1.edit ? "can_edit" : "can_view" : "can_view" : null,
      is_subfolder: _v0?.metadata?.connections ? !!_v0.metadata?.connections.parentFolder : null
    };
  }, "getVideoCtxFromVideo", 0, _v0 => _v0 ? {
    video_id: (0, _v1.idFromUri)(_v0.uri),
    video_owner_id: (0, _v1.idFromUri)(_v0.user?.uri),
    video_privacy: _v0.privacy?.view,
    video_embed_privacy: _v0.privacy?.embed,
    content_rating: _v0.contentRating ?? null,
    duration: _v0.duration ?? null
  } : {
    video_id: 0,
    video_owner_id: 0,
    video_privacy: null,
    video_embed_privacy: null,
    content_rating: null,
    duration: null
  }, "getVideoViewCtxFromVideo", 0, _v0 => {
    let _v1 = _v0.metadata;
    return {
      existing_like_counts: _v1?.connections?.likes?.total ?? null,
      existing_view_counts: _v0?.stats?.plays ?? null,
      existing_comment_counts: _v1?.connections?.comments?.total ?? null,
      listed_categories_counts: _v0?.categories?.length ?? null,
      has_like_available: !!_v1?.connections?.likes?.uri,
      has_share_available: _v0.privacy?.allowShareLink ?? !1,
      has_watch_later_available: !!_v1?.interactions?.watchlater?.added,
      has_ai: !_v1?.interactions?.askAiViewer?.disabled,
      viewer_home_session_id: document.querySelector('meta[name="bp-server-session-id"]')?.getAttribute("content") ?? ""
    };
  }], 0);
}