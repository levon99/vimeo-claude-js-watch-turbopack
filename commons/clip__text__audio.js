{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      VideoElement: "clip",
      TextStyleElement: "text",
      SoundElement: "audio",
      ImageElement: "image",
      ImageStickerElement: "graphic",
      GalleryImageStickerElement: "graphic",
      SolidElement: "graphic",
      logo_watermark: "logo",
      HotspotElement: "hotspot",
      TimeTrigger: "time_trigger",
      PollElement: "poll",
      ButtonElement: "button",
      OverlayElement: "overlay",
      IframeElement: "iframe"
    },
    _v4 = {
      landscape: "16_9",
      square: "1_1",
      portrait: "9_16"
    },
    _v5 = {
      orientation: "ratio",
      mediaType: "type"
    };
  _v0.s(["useEditorTracking", 0, function () {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_page_displayed", {
        editor_session_id: _v0
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_aspect_ratio_changed", {
        editor_session_id: _v0.editorSessionId,
        editor_new_aspect_ratio: _v0.editorNewAspectRatio
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_audio_added", {
        editor_session_id: _v0.editorSessionId,
        editor_audio_source: _v0.editorAudioSource
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_audio_new_audio_uploaded", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_brand_kit_item_opened", {
        editor_session_id: _v0.editorSessionId,
        editor_brand_kit_section: _v0.editorBrandKitSection
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_brand_kit_item_uploaded", {
        editor_session_id: _v0.editorSessionId,
        editor_brand_kit_item_type: _v0.editorBrandKitItemType
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_clip_animation_changed", {
        editor_session_id: _v0.editorSessionId,
        editor_clip_animation_type: _v0.animationName.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "")
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_clip_crop_ratio_changed", {
        editor_session_id: _v0.editorSessionId,
        editor_clip_crop_ratio: _v4[_v0.orientation] ?? _v0.orientation
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        var _v1;
        return null !== _v0 && (_v0.track("editor_asset_deleted", {
          editor_session_id: _v0.editorSessionId,
          editor_asset_deleted_asset_type: _v3[_v1 = _v0.assetType] ?? _v1
        }), !0);
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_clip_fit_type_changed", {
        editor_session_id: _v0.editorSessionId,
        editor_clip_fit_type: _v0.editorClipFitType
      }), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_clip_replaced", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_clip_transcript_clicked", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_clip_volume_changed", {
        editor_session_id: _v0.editorSessionId,
        editor_clip_volume_setting: _v0.editorClipVolumeSetting
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_graphic_added", {
        editor_session_id: _v0.editorSessionId,
        editor_graphic_category: _v0.editorGraphicCategory
      }), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_graphic_solid_background_added", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_media_added", {
        editor_session_id: _v0.editorSessionId,
        editor_media_source: _v0.editorMediaSource,
        editor_media_type: _v0.editorMediaType
      }), !0), [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_media_filter_applied", {
        editor_session_id: _v0.editorSessionId,
        editor_media_filter_type: _v5[_v0.filterKey] ?? _v0.filterKey
      }), !0), [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_new_media_uploaded", {
        editor_session_id: _v0.editorSessionId,
        editor_new_media_source: _v0.editorNewMediaSource
      }), !0), [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_panel_opened", {
        editor_session_id: _v0.editorSessionId,
        editor_panel_type: _v0.editorPanelType
      }), !0), [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_saved", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_exit_confirmation_displayed", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v22 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_exit_confirmation_closed", {
        editor_session_id: _v0.editorSessionId,
        action: _v0.action
      }), !0), [_v0]),
      _v23 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_start_with_template_clicked", {
        editor_session_id: _v0.editorSessionId
      }), !0), [_v0]),
      _v24 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_template_selected", {
        editor_session_id: _v0.editorSessionId,
        editor_template_category: _v0.editorTemplateCategory,
        editor_template_format: _v4[_v0.templateOrientation ?? ""] ?? _v0.templateOrientation?.replace(":", "_") ?? "16_9"
      }), !0), [_v0]),
      _v25 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_text_added", {
        editor_session_id: _v0.editorSessionId,
        editor_text_type: _v0.editorTextType
      }), !0), [_v0]),
      _v26 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_timeline_zoomed_in", {
        editor_session_id: _v0.editorSessionId,
        editor_timeline_zoom_in_method: _v0.editorTimelineZoomInMethod
      }), !0), [_v0]),
      _v27 = (0, _v1.useCallback)(_v0 => {
        var _v1;
        return null !== _v0 && (_v0.track("editor_timeline_asset_duration_adjusted", {
          editor_session_id: _v0.editorSessionId,
          asset_type: _v3[_v1 = _v0.assetType] ?? _v1,
          adjustment: _v0.action,
          edge: _v0.direction,
          duration_before: _v0.originalDuration,
          duration_after: _v0.newDuration,
          affected_asset_count: _v0.changedAssetCount
        }), !0);
      }, [_v0]),
      _v28 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_transcript_opened", {
        video_id: _v0.videoId
      }), !0), [_v0]),
      _v29 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_transcript_remove_from_video_clicked", {
        video_id: _v0.videoId
      }), !0), [_v0]);
    return {
      trackEditorPageDisplayed: _v1,
      trackEditorAspectRatioChanged: _v2,
      trackEditorAudioAdded: _v3,
      trackEditorAudioNewAudioUploaded: _v4,
      trackEditorBrandKitItemOpened: _v5,
      trackEditorBrandKitItemUploaded: _v6,
      trackEditorClipAnimationChanged: _v7,
      trackEditorClipCropRatioChanged: _v8,
      trackEditorAssetDeleted: _v9,
      trackEditorClipFitTypeChanged: _v10,
      trackEditorClipReplaced: _v11,
      trackEditorClipTranscriptClicked: _v12,
      trackEditorClipVolumeChanged: _v13,
      trackEditorGraphicAdded: _v14,
      trackEditorGraphicSolidBackgroundAdded: _v15,
      trackEditorMediaAdded: _v16,
      trackEditorMediaFilterApplied: _v17,
      trackEditorNewMediaUploaded: _v18,
      trackEditorPanelOpened: _v19,
      trackEditorSaved: _v20,
      trackEditorExitConfirmationDisplayed: _v21,
      trackEditorExitConfirmationClosed: _v22,
      trackEditorStartWithTemplateClicked: _v23,
      trackEditorTemplateSelected: _v24,
      trackEditorTextAdded: _v25,
      trackEditorTimelineZoomedIn: _v26,
      trackEditorTimelineAssetDurationAdjusted: _v27,
      trackEditorTranscriptOpened: _v28,
      trackEditorTranscriptRemoveFromVideoClicked: _v29,
      trackEditorTranscriptRemoveFillerWordsAndGapsClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_transcript_remove_filler_words_and_gaps_clicked", {
        video_id: _v0.videoId
      }), !0), [_v0]),
      trackEditorTranscriptRestoreClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("editor_transcript_restore_clicked", {
        video_id: _v0.videoId
      }), !0), [_v0])
    };
  }]);
}