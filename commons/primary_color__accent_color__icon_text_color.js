{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      colorOne: "primary_color",
      colorTwo: "accent_color",
      colorThree: "icon_text_color",
      colorFour: "background_color",
      customLogo: "custom_logo"
    },
    _v4 = {
      chapters: "chapters",
      transcript: "transcript",
      collections: "add_to_collections",
      download: "download",
      comments: "comments",
      like: "like",
      watchlater: "watch_later",
      share: "share",
      embed: "embed",
      askAi: "vimeo_ai",
      reaction: "reaction",
      hideAll: "hide_all"
    },
    _v5 = {
      portrait: "profile_picture",
      owner: "byline",
      name: "name",
      description: "description",
      views: "views",
      dateAdded: "date_added",
      tags: "tags",
      credits: "credits",
      categories: "categories",
      creativeCommons: "copyright",
      uploader: "uploaded_by",
      hideAll: "hide_all"
    },
    _v6 = {
      autoplay: "autoplay",
      muted: "muted",
      playbar: "progress_bar",
      volume: "volume",
      closedCaptions: "cc_subtitles",
      ccTrackMenu: "cc_track_menu",
      qualitySelector: "quality",
      speed: "speed",
      audioTracks: "audio_tracks",
      chapters: "chapters",
      chromecast: "chromecast",
      airplay: "airplay",
      pip: "pip",
      fullscreen: "fullscreen",
      vimeoLogo: "vimeo_logo",
      skippingForward: "skipping_forward",
      contextMenu: "context_menu",
      loop: "loop",
      playButton_auto: "play_button_auto",
      playButton_bottom: "play_button_bottom",
      playButton_center: "play_button_center",
      transcript: "transcript",
      hideAll: "hide_all"
    },
    _v7 = {
      autoplay: "autoplay",
      muted: "muted",
      skippingForward: "skipping_forward",
      contextMenu: "context_menu",
      loop: "loop",
      matchPlayerBackground: "clip_page_auto_framing"
    },
    _v8 = {
      more_videos: "more_videos",
      call_to_action: "call_to_action",
      share_options: "share_buttons",
      video_picture: "custom_image",
      loop: "loop",
      back_to_beginning: "thumbnail",
      empty: "empty",
      description: "custom_message"
    };
  _v0.s(["useVideoManageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_page_displayed", {
          clip_id: _v0.clipId,
          referrer_page: _v0.referrerPage
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_status_changed", {
          clip_id: _v0.clipId,
          video_manage_new_status: _v0.newStatus
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_overflow_action_clicked", {
          clip_id: _v0.clipId,
          video_manage_overflow_action: _v0.action
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_replace_version", {
          clip_id: _v0.clipId,
          ...(void 0 !== _v0.location && {
            location: _v0.location
          }),
          ...(void 0 !== _v0.versionNumber && {
            version_number: _v0.versionNumber
          }),
          version_id: _v0.versionId,
          filename: _v0.filename,
          filesize: _v0.filesize,
          upload_status: _v0.uploadStatus,
          version_transcode_status: _v0.versionTranscodeStatus,
          ...(void 0 !== _v0.status && {
            status: _v0.status
          }),
          error: _v0.error
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_delete_version", {
          clip_id: _v0.clipId,
          ...(void 0 !== _v0.versionNumber && {
            version_number: _v0.versionNumber
          }),
          version_id: _v0.versionId,
          filename: _v0.filename,
          filesize: _v0.filesize,
          upload_status: _v0.uploadStatus,
          version_transcode_status: _v0.versionTranscodeStatus,
          ...(void 0 !== _v0.status && {
            status: _v0.status
          }),
          error: _v0.error
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_restore_version", {
          clip_id: _v0.clipId,
          ...(void 0 !== _v0.versionNumber && {
            version_number: _v0.versionNumber
          }),
          version_id: _v0.versionId,
          filename: _v0.filename,
          filesize: _v0.filesize,
          upload_status: _v0.uploadStatus,
          version_transcode_status: _v0.versionTranscodeStatus,
          ...(void 0 !== _v0.status && {
            status: _v0.status
          }),
          error: _v0.error
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_appearance_displayed", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_mode_switched", {
          clip_id: _v0.clipId,
          video_manage_appearance_new_mode: _v1
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v3[_v0.field];
        if (!_v1) return;
        let _v2 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_branding_changed", {
          clip_id: _v0.clipId,
          video_manage_appearance_branding_field: _v1,
          video_manage_appearance_mode: _v2
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v4[_v0.feature];
        if (!_v1) return;
        let _v2 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_engagement_toggled", {
          clip_id: _v0.clipId,
          video_manage_appearance_engagement_feature: _v1,
          video_manage_appearance_new_status: _v0.newStatus,
          video_manage_appearance_mode: _v2
        });
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v5[_v0.field];
        if (!_v1) return;
        let _v2 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_detail_toggled", {
          clip_id: _v0.clipId,
          video_manage_appearance_detail_field: _v1,
          video_manage_appearance_new_status: _v0.newStatus,
          video_manage_appearance_mode: _v2
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_saved", {
          clip_id: _v0.clipId,
          video_manage_appearance_mode: _v1
        });
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v6[_v0.field];
        if (!_v1) return;
        let _v2 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_control_changed", {
          clip_id: _v0.clipId,
          video_manage_appearance_control_field: _v1,
          video_manage_appearance_mode: _v2
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v7[_v0.field];
        if (!_v1) return;
        let _v2 = "page" === _v0.mode ? "video_page" : _v0.mode;
        _v0.track("video_manage_appearance_settings_toggled", {
          clip_id: _v0.clipId,
          video_manage_appearance_settings_field: _v1,
          video_manage_appearance_new_status: _v0.newStatus,
          video_manage_appearance_mode: _v2
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_languages_displayed", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_subtitles_generation_started", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_subtitles_uploaded", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_languages_add_action_clicked", {
          clip_id: _v0.clipId,
          video_manage_languages_add_action: _v0.action
        });
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_languages_overflow_action_clicked", {
          clip_id: _v0.clipId,
          video_manage_languages_overflow_action: _v0.action
        });
      }, [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_displayed", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_feature_opened", {
          clip_id: _v0.clipId,
          video_manage_interactivity_feature: _v0.feature
        });
      }, [_v0]),
      _v22 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_chapter_added", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v23 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_chapter_saved", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v24 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_toggled", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_new_status: _v0.newStatus
        });
      }, [_v0]),
      _v25 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_customize_clicked", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v26 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_manage_registrants_clicked", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v27 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_video_rating_saved", {
          clip_id: _v0.clipId,
          video_manage_interactivity_video_rating_type: _v0.ratingType
        });
      }, [_v0]),
      _v28 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_video_rating_type_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_video_rating_type: _v0.ratingType
        });
      }, [_v0]),
      _v29 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_card_added", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v30 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_card_image_added", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v31 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v8[_v0.source];
        _v1 && _v0.track("video_manage_interactivity_end_screen_source_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_end_screen_source: _v1
        });
      }, [_v0]),
      _v32 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_card_saved", {
          clip_id: _v0.clipId,
          video_manage_interactivity_card_has_description: _v0.hasDescription,
          video_manage_interactivity_card_has_image: _v0.hasImage
        });
      }, [_v0]),
      _v33 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = _v8[_v0.source];
        _v1 && ("more_videos" === _v1 && void 0 !== _v0.videoCount ? _v0.track("video_manage_interactivity_end_screen_saved", {
          clip_id: _v0.clipId,
          video_manage_interactivity_end_screen_source: _v1,
          video_manage_interactivity_end_screen_video_count: _v0.videoCount
        }) : _v0.track("video_manage_interactivity_end_screen_saved", {
          clip_id: _v0.clipId,
          video_manage_interactivity_end_screen_source: _v1
        }));
      }, [_v0]),
      _v34 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_editing_action_clicked", {
          clip_id: _v0.clipId,
          video_manage_editing_action: _v0.action,
          entry_point: _v0.entryPoint
        });
      }, [_v0]),
      _v35 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_gif_maker_create_clicked", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v36 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_gif_maker_created", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v37 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_gif_maker_deleted", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v38 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_gif_maker_share_action_clicked", {
          clip_id: _v0.clipId,
          video_manage_gif_maker_share_action: _v0.action
        });
      }, [_v0]),
      _v39 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_panel_displayed", {
          clip_id: _v0.clipId,
          source: _v0.source ?? "sidebar"
        });
      }, [_v0]),
      _v40 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_feature_clicked", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          feature: _v0.feature,
          location: _v0.location
        });
      }, [_v0]),
      _v41 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_settings_clicked", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v42 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_panel_closed", {
          clip_id: _v0.clipId,
          close_reason: _v0.closeReason
        });
      }, [_v0]),
      _v43 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_video_details_shown", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          fields_generated: _v0.fieldsGenerated
        });
      }, [_v0]),
      _v44 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_video_details_saved", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          field: _v0.field,
          action: _v0.action
        });
      }, [_v0]),
      _v45 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_video_details_copied", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          field: _v0.field
        });
      }, [_v0]),
      _v46 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_chapters_shown", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          chapter_count: _v0.chapterCount
        });
      }, [_v0]),
      _v47 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_chapters_chapter_clicked", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          chapter_index: _v0.chapterIndex,
          timecode: _v0.timecode
        });
      }, [_v0]),
      _v48 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_chapters_saved", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          chapter_count: _v0.chapterCount
        });
      }, [_v0]),
      _v49 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_highlights_shown", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          highlight_count: _v0.highlightCount
        });
      }, [_v0]),
      _v50 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_highlights_highlight_clicked", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          highlight_type: _v0.highlightType,
          highlight_title: _v0.highlightTitle
        });
      }, [_v0]),
      _v51 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_highlights_edited", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          highlight_title: _v0.highlightTitle
        });
      }, [_v0]),
      _v52 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_highlights_saved", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          highlight_title: _v0.highlightTitle,
          highlight_type: _v0.highlightType
        });
      }, [_v0]),
      _v53 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_highlights_shared", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          distribution_type: _v0.distributionType
        });
      }, [_v0]),
      _v54 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_ask_ai_shown", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId
        });
      }, [_v0]),
      _v55 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_ask_ai_question_asked", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          question: _v0.question,
          source: _v0.source
        });
      }, [_v0]),
      _v56 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_ask_ai_answer_shown", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          question: _v0.question,
          answer: _v0.answer,
          answer_origin: _v0.answerOrigin,
          question_source: _v0.questionSource,
          video_owner_id: _v0.videoOwnerId
        });
      }, [_v0]),
      _v57 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_ask_ai_moment_played", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          question: _v0.question,
          timecode: _v0.timecode
        });
      }, [_v0]),
      _v58 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_translate_settings_shown", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          source: _v0.source,
          product_selection_shown: _v0.productSelectionShown
        });
      }, [_v0]),
      _v59 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_translate_saved", {
          clip_id: _v0.clipId,
          generation_id: _v0.generationId,
          source: _v0.source,
          product_type: _v0.productType,
          source_language_code: _v0.sourceLanguageCode,
          target_language_codes: _v0.targetLanguageCodes,
          language_count: _v0.languageCount,
          speaker_count: _v0.speakerCount,
          preview_enabled: _v0.previewEnabled,
          submit_action: _v0.submitAction
        });
      }, [_v0]),
      _v60 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_upsell_triggered", {
          clip_id: _v0.clipId,
          feature: _v0.feature,
          upsell_name: _v0.upsellName
        });
      }, [_v0]),
      _v61 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_upsell_impression", {
          clip_id: _v0.clipId,
          feature: _v0.feature,
          upsell_name: _v0.upsellName
        });
      }, [_v0]),
      _v62 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_vimeo_ai_upsell_contact_sales_clicked", {
          clip_id: _v0.clipId,
          feature: _v0.feature
        });
      }, [_v0]),
      _v63 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_languages_track_toggled", {
          clip_id: _v0.clipId,
          track_type: _v0.trackType,
          language_code: _v0.languageCode,
          enabled: _v0.enabled
        });
      }, [_v0]),
      _v64 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_languages_track_edited", {
          clip_id: _v0.clipId,
          track_type: _v0.trackType,
          language_code: _v0.languageCode
        });
      }, [_v0]),
      _v65 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_languages_track_retranscribe_clicked", {
          clip_id: _v0.clipId,
          track_type: _v0.trackType,
          language_code: _v0.languageCode
        });
      }, [_v0]),
      _v66 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_tab_switched", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_tab: _v0.tab
        });
      }, [_v0]),
      _v67 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_preset_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_preset_action: _v0.action
        });
      }, [_v0]),
      _v68 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_connect_providers", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v69 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_placement_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_placement: _v0.placement
        });
      }, [_v0]),
      _v70 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_setting_toggled", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_setting: _v0.setting,
          video_manage_interactivity_registration_form_setting_new_status: _v0.newStatus
        });
      }, [_v0]),
      _v71 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_section_switched", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_section: _v0.section
        });
      }, [_v0]),
      _v72 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_field_added", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_field_type: _v0.fieldType
        });
      }, [_v0]),
      _v73 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_hidden_field_added", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_hidden_field_type: _v0.fieldType
        });
      }, [_v0]),
      _v74 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_privacy_policy_changed", {
          clip_id: _v0.clipId
        });
      }, [_v0]),
      _v75 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_appearance_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_appearance_setting: _v0.setting
        });
      }, [_v0]),
      _v76 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_preview_type_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_preview_type: _v0.previewType
        });
      }, [_v0]),
      _v77 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_form_preview_device_changed", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_form_preview_device: _v0.device
        });
      }, [_v0]);
    return {
      trackVideoManagePageDisplayed: _v1,
      trackVideoManageStatusChanged: _v2,
      trackVideoManageOverflowActionClicked: _v3,
      trackReplaceVersion: _v4,
      trackDeleteVersion: _v5,
      trackRestoreVersion: _v6,
      trackReplaceRevert: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_version_reverted", {
          clip_id: _v0.clipId,
          ...(void 0 !== _v0.versionNumber && {
            version_number: _v0.versionNumber
          }),
          version_id: _v0.versionId,
          filename: _v0.filename,
          filesize: _v0.filesize,
          upload_status: _v0.uploadStatus,
          version_transcode_status: _v0.versionTranscodeStatus,
          status: _v0.status,
          error: _v0.error
        });
      }, [_v0]),
      trackVideoManageAppearanceDisplayed: _v7,
      trackVideoManageAppearanceModeSwitched: _v8,
      trackVideoManageAppearanceBrandingChanged: _v9,
      trackVideoManageAppearanceEngagementToggled: _v10,
      trackVideoManageAppearanceDetailToggled: _v11,
      trackVideoManageAppearanceSaved: _v12,
      trackVideoManageAppearanceControlChanged: _v13,
      trackVideoManageAppearanceSettingsToggled: _v14,
      trackVideoManageLanguagesDisplayed: _v15,
      trackVideoManageSubtitlesGenerationStarted: _v16,
      trackVideoManageSubtitlesUploaded: _v17,
      trackVideoManageLanguagesAddActionClicked: _v18,
      trackVideoManageLanguagesOverflowActionClicked: _v19,
      trackVideoManageInteractivityDisplayed: _v20,
      trackVideoManageInteractivityFeatureOpened: _v21,
      trackVideoManageInteractivityChapterAdded: _v22,
      trackVideoManageInteractivityChapterSaved: _v23,
      trackVideoManageInteractivityRegistrationToggled: _v24,
      trackVideoManageInteractivityRegistrationCustomizeClicked: _v25,
      trackVideoManageInteractivityRegistrationManageRegistrantsClicked: _v26,
      trackVideoManageInteractivityCardAdded: _v29,
      trackVideoManageInteractivityCardImageAdded: _v30,
      trackVideoManageInteractivityEndScreenSourceChanged: _v31,
      trackVideoManageInteractivityVideoRatingSaved: _v27,
      trackVideoManageInteractivityVideoRatingTypeChanged: _v28,
      trackVideoManageInteractivityCardSaved: _v32,
      trackVideoManageInteractivityEndScreenSaved: _v33,
      trackVideoManageEditingActionClicked: _v34,
      trackVideoManageGifMakerCreateClicked: _v35,
      trackVideoManageGifMakerCreated: _v36,
      trackVideoManageGifMakerDeleted: _v37,
      trackVideoManageGifMakerShareActionClicked: _v38,
      trackVideoManageVimeoAiPanelDisplayed: _v39,
      trackVideoManageVimeoAiFeatureClicked: _v40,
      trackVideoManageVimeoAiSettingsClicked: _v41,
      trackVideoManageVimeoAiPanelClosed: _v42,
      trackVideoManageVimeoAiVideoDetailsShown: _v43,
      trackVideoManageVimeoAiVideoDetailsSaved: _v44,
      trackVideoManageVimeoAiVideoDetailsCopied: _v45,
      trackVideoManageVimeoAiChaptersShown: _v46,
      trackVideoManageVimeoAiChaptersChapterClicked: _v47,
      trackVideoManageVimeoAiChaptersSaved: _v48,
      trackVideoManageVimeoAiHighlightsShown: _v49,
      trackVideoManageVimeoAiHighlightsHighlightClicked: _v50,
      trackVideoManageVimeoAiHighlightsEdited: _v51,
      trackVideoManageVimeoAiHighlightsSaved: _v52,
      trackVideoManageVimeoAiHighlightsShared: _v53,
      trackVideoManageVimeoAiAskAiShown: _v54,
      trackVideoManageVimeoAiAskAiQuestionAsked: _v55,
      trackVideoManageVimeoAiAskAiAnswerShown: _v56,
      trackVideoManageVimeoAiAskAiMomentPlayed: _v57,
      trackVideoManageVimeoAiTranslateSettingsShown: _v58,
      trackVideoManageVimeoAiTranslateSaved: _v59,
      trackVideoManageVimeoAiUpsellTriggered: _v60,
      trackVideoManageVimeoAiUpsellImpression: _v61,
      trackVideoManageVimeoAiUpsellContactSalesClicked: _v62,
      trackVideoManageLanguagesTrackToggled: _v63,
      trackVideoManageLanguagesTrackEdited: _v64,
      trackVideoManageLanguagesTrackRetranscribeClicked: _v65,
      trackVideoManageInteractivityRegistrationFormTabSwitched: _v66,
      trackVideoManageInteractivityRegistrationFormPresetChanged: _v67,
      trackVideoManageInteractivityRegistrationFormConnectProviders: _v68,
      trackVideoManageInteractivityRegistrationFormPlacementChanged: _v69,
      trackVideoManageInteractivityRegistrationFormSettingToggled: _v70,
      trackVideoManageInteractivityRegistrationFormSectionSwitched: _v71,
      trackVideoManageInteractivityRegistrationFormFieldAdded: _v72,
      trackVideoManageInteractivityRegistrationFormHiddenFieldAdded: _v73,
      trackVideoManageInteractivityRegistrationFormPrivacyPolicyChanged: _v74,
      trackVideoManageInteractivityRegistrationFormAppearanceChanged: _v75,
      trackVideoManageInteractivityRegistrationFormPreviewTypeChanged: _v76,
      trackVideoManageInteractivityRegistrationFormPreviewDeviceChanged: _v77,
      trackVideoManageInteractivityRegistrationRegistrantsActionClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_manage_interactivity_registration_registrants_action_clicked", {
          clip_id: _v0.clipId,
          video_manage_interactivity_registration_registrants_action: _v0.action
        });
      }, [_v0])
    };
  }]);
}