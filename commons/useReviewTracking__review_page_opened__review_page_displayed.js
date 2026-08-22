{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useReviewTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_page_opened", {
        video_id: _v0.videoId,
        review_id: _v0.reviewId,
        is_expired: _v0.isExpired
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_page_displayed", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId,
        review_page_viewer_auth_status: _v0.reviewPageViewerAuthStatus
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_link_created", {
        clip_id: _v0.clipId,
        video_manage_review_link_has_expiration: _v0.hasExpiration,
        video_manage_review_link_expiration_preset: _v0.expirationPreset,
        video_manage_review_link_has_password: _v0.hasPassword,
        video_manage_review_link_permission_comment: _v0.permissionComment,
        video_manage_review_link_permission_download: _v0.permissionDownload,
        video_manage_review_link_permission_change_status: _v0.permissionChangeStatus,
        video_manage_review_link_permission_view_resolved_comments: _v0.permissionViewResolvedComments,
        video_manage_review_link_permission_view_previous_versions: _v0.permissionViewPreviousVersions,
        video_manage_review_link_appearance_logo: _v0.appearanceLogo,
        video_manage_review_link_appearance_dark_mode: _v0.appearanceDarkMode,
        video_manage_review_link_appearance_show_other_videos: _v0.appearanceShowOtherVideos,
        video_manage_review_link_set_as_default: _v0.setAsDefault
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_video_played", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_playback_speed_changed", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId,
        review_new_speed: _v0.reviewNewSpeed
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_note_posted", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_comment_posted", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_page_comments_sorted", {
        user_id: _v0.userId ?? null,
        new_sort: _v0.newSort,
        prev_sort: _v0.prevSort,
        default_sort: _v0.defaultSort
      }), !0), [_v0]);
    return {
      trackReviewPageOpened: _v1,
      trackReviewPageDisplayed: _v2,
      trackReviewLinkCreated: _v3,
      trackReviewVideoPlayed: _v4,
      trackReviewPlaybackSpeedChanged: _v5,
      trackReviewNotePosted: _v6,
      trackReviewCommentPosted: _v7,
      trackReviewCommentSortChanged: _v8,
      trackReviewCommentReactionAdded: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_comment_reaction_added", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId,
        review_comment_reaction: _v0.reviewCommentReaction,
        is_reply: _v0.isReply
      }), !0), [_v0]),
      trackReviewCommentReactionRemoved: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_comment_reaction_removed", {
        review_id: _v0.reviewId,
        clip_id: _v0.clipId,
        clip_owner_id: _v0.clipOwnerId,
        review_comment_reaction: _v0.reviewCommentReaction,
        is_reply: _v0.isReply
      }), !0), [_v0])
    };
  }]);
}