{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useProfileTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_page_displayed", {
        user_profile_page_user_id: _v0.userProfilePageUserId,
        referrer_page: _v0.referrerPage,
        user_profile_page_type: _v0.userProfilePageType,
        user_profile_page_viewer_auth_status: _v0.userProfilePageViewerAuthStatus
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_page_share_button_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_page_website_link_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_page_activity_link_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId,
        user_profile_page_link_type: _v0.userProfilePageLinkType
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_page_thumbnail_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId,
        clip_id: _v0.clipId,
        user_profile_page_thumbnail_position: _v0.userProfilePageThumbnailPosition,
        user_profile_page_thumbnail_section: _v0.userProfilePageThumbnailSection
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_video_like_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId,
        clip_id: _v0.clipId,
        user_profile_page_thumbnail_position: _v0.userProfilePageThumbnailPosition,
        user_profile_page_thumbnail_section: _v0.userProfilePageThumbnailSection,
        user_profile_video_like_action: _v0.userProfileVideoLikeAction
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_page_follow_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId,
        user_profile_page_follow_effect: _v0.userProfilePageFollowEffect
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_add_video_clicked", {}), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_cover_video_action_clicked", {
        user_profile_cover_video_action: _v0.userProfileCoverVideoAction
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_edit_field_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId,
        user_profile_edit_field: _v0.userProfileEditField
      }), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_join_experts_clicked", {
        user_profile_page_user_id: _v0.userProfilePageUserId
      }), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_layout_changed", {
        user_profile_layout: _v0.userProfileLayout
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_preview_clicked", {}), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_reorder_content_clicked", {}), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_reorder_saved", {}), !0), [_v0]),
      _v16 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_section_created", {}), !0), [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => {
        let _v1;
        return null !== _v0 && (_v0.track("user_profile_share_action_clicked", {
          user_profile_page_user_id: _v0.userProfilePageUserId,
          user_profile_share_action: "custom_link" === (_v1 = _v0.userProfileShareAction) ? "copy_link" : _v1
        }), !0);
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_video_added", {
        user_profile_video_source_tab: _v0.userProfileVideoSourceTab,
        user_profile_video_count: _v0.userProfileVideoCount
      }), !0), [_v0]),
      _v19 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_video_reordered", {}), !0), [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_video_thumbnail_resized", {
        user_profile_resize_action: _v0.userProfileResizeAction
      }), !0), [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_automatic_add_video_toggled", {
        user_profile_automatic_add_video_value: _v0.userProfileAutomaticAddVideoValue
      }), !0), [_v0]),
      _v22 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_cover_add_clicked", {}), !0), [_v0]);
    return {
      trackUserProfilePageDisplayed: _v1,
      trackUserProfilePageShareButtonClicked: _v2,
      trackUserProfilePageWebsiteLinkClicked: _v3,
      trackUserProfilePageActivityLinkClicked: _v4,
      trackUserProfilePageThumbnailClicked: _v5,
      trackUserProfilePageFollowClicked: _v7,
      trackUserProfileVideoLikeClicked: _v6,
      trackUserProfileAddVideoClicked: _v8,
      trackUserProfileCoverVideoActionClicked: _v9,
      trackUserProfileEditFieldClicked: _v10,
      trackUserProfileJoinExpertsClicked: _v11,
      trackUserProfileLayoutChanged: _v12,
      trackUserProfilePreviewClicked: _v13,
      trackUserProfileReorderContentClicked: _v14,
      trackUserProfileReorderSaved: _v15,
      trackUserProfileSectionCreated: _v16,
      trackUserProfileShareActionClicked: _v17,
      trackUserProfileVideoAdded: _v18,
      trackUserProfileVideoReordered: _v19,
      trackUserProfileVideoThumbnailResized: _v20,
      trackUserProfileAutomaticAddVideoToggled: _v21,
      trackUserProfileCoverAddClicked: _v22,
      trackUserProfileCoverVideoConfirmed: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("user_profile_cover_video_confirmed", {}), !0), [_v0]),
      trackUserProfileSectionNameConfirmed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("user_profile_section_name_confirmed", {
        user_profile_section_name_new: _v0.userProfileSectionNameNew
      }), !0), [_v0])
    };
  }]);
}