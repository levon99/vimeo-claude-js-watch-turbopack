{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => null == _v0 ? null : String(_v0);
  _v0.s(["useFolderShareTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_modal_displayed", {
        folder_id: _v3(_v0.folderId),
        folder_share_entry_point: _v0.entryPoint,
        folder_share_page: _v0.page,
        folder_share_tab: _v0.tab
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_tab_clicked", {
        folder_id: _v3(_v0.folderId),
        folder_share_tab: _v0.tab
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_privacy_changed", {
        folder_id: _v3(_v0.folderId),
        folder_share_privacy_from: _v0.fromPrivacy,
        folder_share_privacy_to: _v0.toPrivacy,
        folder_share_has_password: _v0.hasPassword
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_upsell_displayed", {
        folder_id: _v3(_v0.folderId),
        folder_share_upsell_event: _v0.upsellEvent
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_link_copied", {
        folder_id: _v3(_v0.folderId),
        folder_share_link_privacy: _v0.privacy,
        folder_share_link_has_expiration: _v0.hasExpiration,
        folder_share_link_expiration_days: _v0.expirationDays,
        folder_share_link_copy_surface: _v0.copySurface,
        folder_share_link_copy_source: _v0.copySource
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_link_created", {
        folder_id: _v3(_v0.folderId),
        folder_share_link_creation_source: _v0.source,
        folder_share_link_has_expiration: _v0.hasExpiration,
        folder_share_link_expiration_days: _v0.expirationDays
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_link_password_changed", {
        folder_id: _v3(_v0.folderId)
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_link_expiration_changed", {
        folder_id: _v3(_v0.folderId),
        from_value: _v0.fromValue,
        to_value: _v0.toValue,
        default_value_shown: _v0.defaultShown,
        is_first_link_value: _v0.isFirstLinkValue,
        entry_point: "library"
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_link_expiration_reset", {
        folder_id: _v3(_v0.folderId),
        folder_share_link_reset_entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_invite_submitted", {
        folder_id: _v3(_v0.folderId),
        folder_share_invite_type: _v0.inviteType,
        folder_share_invite_count: _v0.inviteCount,
        folder_share_invite_role: _v0.role
      }), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_people_invited", {
        folder_id: _v3(_v0.folderId),
        folder_share_invite_type: _v0.inviteType,
        folder_share_invite_count: _v0.inviteCount,
        folder_share_invite_role: _v0.role
      }), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_links_displayed", {
        folder_id: _v3(_v0.folderId),
        folder_share_review_links_count: _v0.reviewLinksCount
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_link_created", {
        folder_id: _v3(_v0.folderId),
        ...(void 0 !== _v0.hasExpiration && {
          folder_share_review_link_has_expiration: _v0.hasExpiration
        }),
        ...(void 0 !== _v0.expirationPreset && {
          folder_share_review_link_expiration_preset: _v0.expirationPreset
        }),
        ...(void 0 !== _v0.hasPassword && {
          folder_share_review_link_has_password: _v0.hasPassword
        }),
        ...(void 0 !== _v0.permissionComment && {
          folder_share_review_link_permission_comment: _v0.permissionComment
        }),
        ...(void 0 !== _v0.permissionDownload && {
          folder_share_review_link_permission_download: _v0.permissionDownload
        }),
        ...(void 0 !== _v0.permissionChangeStatus && {
          folder_share_review_link_permission_change_status: _v0.permissionChangeStatus
        }),
        ...(void 0 !== _v0.permissionViewResolvedComments && {
          folder_share_review_link_permission_view_resolved_comments: _v0.permissionViewResolvedComments
        }),
        ...(void 0 !== _v0.permissionViewPreviousVersions && {
          folder_share_review_link_permission_view_previous_versions: _v0.permissionViewPreviousVersions
        }),
        ...(void 0 !== _v0.appearanceLogo && {
          folder_share_review_link_appearance_logo: _v0.appearanceLogo
        }),
        ...(void 0 !== _v0.appearanceDarkMode && {
          folder_share_review_link_appearance_dark_mode: _v0.appearanceDarkMode
        }),
        ...(void 0 !== _v0.appearanceShowOtherVideos && {
          folder_share_review_link_appearance_show_other_videos: _v0.appearanceShowOtherVideos
        }),
        ...(void 0 !== _v0.setAsDefault && {
          folder_share_review_link_set_as_default: _v0.setAsDefault
        })
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_link_edited", {
        folder_id: _v3(_v0.folderId),
        review_id: _v0.reviewId
      }), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_link_deleted", {
        folder_id: _v3(_v0.folderId),
        review_id: _v0.reviewId
      }), !0), [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_link_copied", {
        folder_id: _v3(_v0.folderId),
        review_id: _v0.reviewId,
        folder_share_review_link_copied_surface: _v0.surface
      }), !0), [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_link_toggled", {
        folder_id: _v3(_v0.folderId),
        review_id: _v0.reviewId,
        folder_share_review_link_new_status: _v0.newStatus
      }), !0), [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_review_link_action_clicked", {
        folder_id: _v3(_v0.folderId),
        review_id: _v0.reviewId,
        folder_share_review_link_action: _v0.action
      }), !0), [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_page_displayed", {
        folder_id: _v3(_v0.folderId),
        folder_share_viewer_auth_status: _v0.viewerAuthStatus
      }), !0), [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_password_page_displayed", {
        folder_id: _v3(_v0.folderId),
        folder_share_password_scope: _v0.passwordScope ?? "folder",
        file_id: _v0.fileId ?? null
      }), !0), [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_password_submitted", {
        folder_id: _v3(_v0.folderId),
        folder_share_password_is_success: _v0.isSuccess,
        folder_share_password_error_type: _v0.errorType,
        folder_share_password_scope: _v0.passwordScope ?? "folder",
        file_id: _v0.fileId ?? null
      }), !0), [_v0]),
      _v22 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_link_unavailable_displayed", {
        folder_id: _v3(_v0.folderId)
      }), !0), [_v0]),
      _v23 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_item_clicked", {
        folder_id: _v3(_v0.folderId),
        folder_share_item_type: _v0.itemType
      }), !0), [_v0]);
    return {
      trackFolderShareModalDisplayed: _v1,
      trackFolderShareTabClicked: _v2,
      trackFolderSharePrivacyChanged: _v3,
      trackFolderShareUpsellDisplayed: _v4,
      trackFolderShareLinkCopied: _v5,
      trackFolderShareLinkCreated: _v6,
      trackFolderShareLinkPasswordChanged: _v7,
      trackFolderShareLinkExpirationChanged: _v8,
      trackFolderShareLinkExpirationReset: _v9,
      trackFolderShareInviteSubmitted: _v10,
      trackFolderSharePeopleInvited: _v11,
      trackFolderShareReviewLinksDisplayed: _v12,
      trackFolderShareReviewLinkCreated: _v13,
      trackFolderShareReviewLinkEdited: _v14,
      trackFolderShareReviewLinkDeleted: _v15,
      trackFolderShareReviewLinkCopied: _v16,
      trackFolderShareReviewLinkToggled: _v17,
      trackFolderShareReviewLinkActionClicked: _v18,
      trackFolderSharePageDisplayed: _v19,
      trackFolderSharePasswordPageDisplayed: _v20,
      trackFolderSharePasswordSubmitted: _v21,
      trackFolderShareLinkUnavailableDisplayed: _v22,
      trackFolderShareItemClicked: _v23,
      trackFolderShareVideoDisplayed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_video_displayed", {
        folder_id: _v3(_v0.folderId),
        clip_id: _v0.clipId
      }), !0), [_v0]),
      trackFolderShareFileDisplayed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("folder_share_file_displayed", {
        folder_id: _v3(_v0.folderId),
        file_id: _v0.fileId
      }), !0), [_v0])
    };
  }]);
}