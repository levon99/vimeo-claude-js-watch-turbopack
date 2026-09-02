{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    public: "anywhere",
    private: "nowhere",
    whitelist: "specific_domains"
  };
  _v0.s(["useDistributionTracking", 0, function () {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_publish_button_clicked", {
        clip_id: _v0.clipId,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        var _v1, _v2;
        return null !== _v0 && (_v0.track("share_publish_destination_clicked", {
          clip_id: _v0.clipId,
          share_publish_destination: (_v1 = _v0.destination, _v2 = _v0.socialNetworkId, "publish_to_social" === _v1 ? "twitter" === _v2 ? "x" : _v2 ?? _v1 : "embed_in_email" === _v1 ? "email" : _v1),
          share_surface: _v0.shareSurface
        }), !0);
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_privacy_dropdown_opened", {
        clip_id: _v0.clipId,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_embed_button_clicked", {
        clip_id: _v0.clipId,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        var _v1;
        return null !== _v0 && (_v0.track("share_embed_privacy_changed", {
          clip_id: _v0.clipId,
          share_embed_new_privacy: _v3[_v1 = _v0.privacy] ?? _v1,
          share_surface: _v0.shareSurface
        }), !0);
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_embed_size_changed", {
        clip_id: _v0.clipId,
        share_embed_new_size_type: _v0.embedSizeType,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_embed_playback_toggled", {
        clip_id: _v0.clipId,
        share_embed_playback_setting: _v0.playbackSetting,
        share_embed_playback_new_status: _v0.playbackNewStatus,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_add_people_button_clicked", {
        clip_id: _v0.clipId,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_add_people_invited", {
        clip_id: _v0.clipId,
        share_add_people_role: _v0.role,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("share_review_button_clicked", {
        clip_id: _v0.clipId,
        share_review_type: _v0.shareReviewType,
        share_surface: _v0.shareSurface
      }), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_links_displayed", {
        clip_id: _v0.clipId,
        review_links_count: _v0.reviewLinksCount
      }), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_links_copied", {
        clip_id: _v0.clipId ?? null,
        folder_id: _v0.folderId ?? null,
        review_id: _v0.reviewId,
        review_links_copied_surface: _v0.surface
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_links_menu_action_clicked", {
        clip_id: _v0.clipId,
        review_id: _v0.reviewId,
        review_links_action: _v0.reviewLinksAction
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_links_toggled", {
        clip_id: _v0.clipId,
        review_id: _v0.reviewId,
        review_links_new_status: _v0.reviewLinksNewStatus
      }), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        var _v1, _v2;
        return null !== _v0 && (_v0.track("embed_code_copied", {
          clip_id: _v0.clipId,
          embed_code_copied_source: (_v1 = _v0.pageName, _v2 = _v0.location, "single_video_view" === _v1 ? "video_manage" : "modal" === _v2 ? "share_modal" : "share_panel")
        }), !0);
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("sharing_link_copied", {
        clip_id: _v0.clipId,
        sharing_link_copied_surface: _v0.surface,
        interval_days: _v0.intervalDays
      }), !0), [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("video_link_copied", {
        clip_id: _v0.clipId,
        video_link_copied_source: _v0.source
      }), !0), [_v0]);
    return {
      trackSharePublishButtonClicked: _v1,
      trackSharePublishDestinationClicked: _v2,
      trackSharePrivacyDropdownOpened: _v3,
      trackShareEmbedButtonClicked: _v4,
      trackShareEmbedPrivacyChanged: _v5,
      trackShareEmbedSizeChanged: _v6,
      trackShareEmbedPlaybackToggled: _v7,
      trackShareAddPeopleButtonClicked: _v8,
      trackShareAddPeopleInvited: _v9,
      trackShareReviewButtonClicked: _v10,
      trackReviewLinksDisplayed: _v11,
      trackReviewLinksCopied: _v12,
      trackReviewLinksMenuActionClicked: _v13,
      trackReviewLinksToggled: _v14,
      trackEmbedCodeCopied: _v15,
      trackSharingLinkCopied: _v16,
      trackVideoLinkCopied: _v17,
      trackSharingLinkExpirationValueChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("sharing_link_expiration_value_changed", {
        video_id: _v0.videoId,
        from_value: _v0.fromValue,
        to_value: _v0.toValue,
        default_value_shown: _v0.defaultValueShown,
        entry_point: _v0.entryPoint,
        is_first_link_value: _v0.isFirstLinkValue
      }), !0), [_v0]),
      trackSharingLinkExpirationReset: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("sharing_link_expiration_reset", {
        video_id: _v0.videoId,
        entry_point: _v0.entryPoint
      }), !0), [_v0])
    };
  }]);
}