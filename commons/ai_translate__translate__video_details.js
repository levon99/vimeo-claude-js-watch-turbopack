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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = _v0 => "ai_translate" === _v0 ? "translate" : _v0,
    _v19 = {
      video_title: "video_details",
      video_description: "video_details",
      video_tags: "video_details",
      chapters: "chapters",
      highlights: "highlights",
      ask_ai: "ask_ai"
    },
    _v20 = {
      add_on_feature: null,
      currency: null,
      discount_offer: null,
      duration: null,
      interface_type: null,
      is_discount: null,
      promo_code_id: null,
      purchase_type: null,
      selected_plan: null,
      usd_price: null
    };
  _v0.s(["useGetSvvManageBpEvents", 0, () => {
    let _v0 = (0, _v13.useViewer)(),
      _v1 = (0, _v16.useContainerDataStore)(_v0 => _v0.videoId),
      _v2 = (0, _v16.useContainerDataStore)(_v0 => _v0.pageName),
      _v3 = (0, _v4.useVideoManageTracking)(),
      _v4 = (0, _v3.useSearchTracking)(),
      _v5 = (0, _v15.useAiGenerationStore)(_v0 => _v0.startGeneration),
      _v6 = (0, _v15.useAiGenerationStore)(_v0 => _v0.getGenerationId),
      _v7 = "sidebar",
      {
        data: _v8
      } = (0, _v2.useGetVideo)({
        where: {
          videoId: _v1
        },
        select: ["duration", "uploader.link", "user.uri"]
      }),
      _v9 = _v8?.duration ?? null,
      _v10 = _v0?.teamUser,
      _v11 = "single_video_view_manage" === _v2,
      _v12 = "player" === _v2,
      _v13 = (0, _v1.useMemo)(() => {
        if (_v0?.user?.id && _v8?.uploader?.link) {
          let _v0 = _v8.uploader?.link.split("/user")[1];
          return !!_v0 && parseInt(_v0, 10) === _v0.user?.id;
        }
        return !1;
      }, [_v0?.user?.id, _v8?.uploader?.link]),
      _v14 = (0, _v1.useMemo)(() => parseInt(_v8?.user?.uri.split("/users/")[1] || "", 10) || null, [_v8?.user?.uri]),
      _v15 = (0, _v1.useCallback)(() => (0, _v8.buildTeamBpContextFromTeamUser)(_v10), [_v10]),
      _v16 = (0, _v1.useCallback)(() => (0, _v9.buildVideoBpContext)({
        video_id: _v1,
        video_owner_id: _v14,
        duration: _v9
      }), [_v14, _v9, _v1]),
      _v17 = (0, _v1.useCallback)(() => (0, _v6.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }), []),
      _v18 = (0, _v1.useCallback)(_v0 => (0, _v5.buildActionBpContext)({
        action_type: _v0,
        feature: null
      }), []),
      _v19 = (0, _v1.useCallback)((_v0, _v1, _v2 = null, _v3 = null, _v4 = null) => (0, _v7.buildProductAnalyticsBpContext)({
        product: "ai",
        feature: _v0,
        copy: _v1,
        device_type: (0, _v17.getDeviceType)(),
        location: _v4 ?? (_v11 ? _v7 : _v2),
        modal_name: null,
        element: _v3 || (_v11 ? "button" : null),
        flow: _v2
      }), [_v11, _v2, _v7]),
      _v20 = (0, _v1.useCallback)(() => (0, _v10.buildWebBpContext)({
        path: window.location.pathname,
        page_name: _v12 ? "embedded_page" : _v2,
        location: null,
        referrer_page_name: null
      }), [_v2, _v12]),
      _v21 = (0, _v1.useCallback)(() => (0, _v12.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }), []);
    return {
      sendPlayMomentClickEvent: (_v0, _v1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.play_video_moment", {
          ..._v18("click"),
          ..._v19("ask_ai", _v1, "ai", "button"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 4, {
          if_uploader: _v13,
          value: String(_v0)
        }), _v3.trackVideoManageVimeoAiAskAiMomentPlayed({
          clipId: String(_v1),
          generationId: _v6("ask_ai"),
          question: _v1,
          timecode: _v0
        });
      },
      sendSummaryNotificationViewedEvent: (_v0, _v1, _v2, _v3) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.notification_view", {
          ..._v19("ai", _v1),
          ..._v17(),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 3, {
          notification_name: _v0,
          error_id: _v2 ?? null,
          error_name: _v3 ?? null,
          checkbox_copy: null,
          notification_copy: null
        });
      },
      sendGenerateHighlightsLoaderViewedEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_generate_highlights", {
          ..._v17(),
          ..._v19("highlights", _v14.generatingHighlights),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        });
      },
      sendGenerateVideoDetailsLoaderViewedEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_generate_video_details", {
          ..._v17(),
          ..._v19("ai", _v0 ?? "ask_ai"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        });
      },
      sendSummaryDetailsViewedEvent: (_v0, _v1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_suggested_video_details", {
          ..._v17(),
          ..._v19("ai", _v0 ?? "ask_ai"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        }), _v3.trackVideoManageVimeoAiVideoDetailsShown({
          clipId: String(_v1),
          generationId: _v6("video_details"),
          fieldsGenerated: _v1
        });
      },
      sendSummaryDetailsSaveClickEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.save_video_details", {
          ..._v19("video_details", _v0),
          ..._v18("click"),
          ..._v16(),
          ..._v20(),
          ..._v15()
        }, 1, {
          value: null,
          device_type: null
        });
        let _v1 = "all",
          _v2 = "save";
        "title" === _v0 || "description" === _v0 || "tags" === _v0 ? _v1 = _v0 : "replace" === _v0 && (_v2 = "replace"), _v3.trackVideoManageVimeoAiVideoDetailsSaved({
          clipId: String(_v1),
          generationId: _v6("video_details"),
          field: _v1,
          action: _v2
        });
      },
      sendChapterDetailsViewedEvent: (_v0, _v1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_suggested_chapters", {
          ..._v17(),
          ..._v19("ai", _v0 ?? "ask_ai"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        }), _v3.trackVideoManageVimeoAiChaptersShown({
          clipId: String(_v1),
          generationId: _v6("chapters"),
          chapterCount: _v1
        });
      },
      sendChapterDetailsSaveClickEvent: (_v0, _v1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.save_video_chapters", {
          ..._v18("click"),
          ..._v19("chapters", _v0),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 2, {
          value: null
        }), _v3.trackVideoManageVimeoAiChaptersSaved({
          clipId: String(_v1),
          generationId: _v6("chapters"),
          chapterCount: _v1
        });
      },
      sendThumbsOnVideoTitleClickEvent: (_v0, _v1, _v2) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.thumbs_rate", {
          ..._v18("click"),
          ..._v19("video_details", "ask_ai"),
          ..._v15(),
          ..._v16()
        }, 1, {
          rated_feature: _v0,
          thumbs_up_state: _v2,
          thumbs_down_state: !_v2
        });
        let _v3 = _v19[_v0];
        _v4.trackThumbsRate({
          ratedFeature: _v0,
          isPositive: _v2,
          videoId: _v1,
          generationId: _v1 ?? (_v3 ? _v6(_v3) : null)
        });
      },
      sendAskAQuestionEvent: (_v0, _v1 = "typed") => {
        (0, _v11.sendBpEventWithContexts)("vimeo.typing_ai_question", {
          ..._v18("type"),
          ..._v19("ask_ai", _v0, "ai"),
          ..._v20(),
          ..._v15(),
          ..._v16()
        }, 3, {
          value: _v0,
          if_uploader: _v13
        });
        let _v2 = _v5("ask_ai");
        _v3.trackVideoManageVimeoAiAskAiQuestionAsked({
          clipId: String(_v1),
          generationId: _v2,
          question: _v0,
          source: _v1
        });
      },
      sendViewGenerateAIAnswerEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_generate_ai_answer", {
          ..._v17(),
          ..._v19("ask_ai", _v14.generatingAnswer, "ai"),
          ..._v20(),
          ..._v15(),
          ..._v16()
        }, 1, {
          value: null,
          service_version: null
        });
      },
      sendViewSuggestedAIAnswerEvent: (_v0, _v1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_suggested_ai_answer", {
          ..._v17(),
          ..._v19("ask_ai", _v0, "ai"),
          ..._v20(),
          ..._v15(),
          ..._v16()
        }, 4, {
          value: null,
          service_version: null,
          error_value: null,
          extra_text_field_1: _v1
        }), _v3.trackVideoManageVimeoAiAskAiAnswerShown({
          clipId: String(_v1),
          generationId: _v6("ask_ai"),
          question: _v0
        });
      },
      sendViewSuggestedAIHighlightVideosEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_suggested_highlight_videos", {
          ..._v17(),
          ..._v19("highlights", _v14.highlightsSectionTitle),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        }), _v3.trackVideoManageVimeoAiHighlightsShown({
          clipId: String(_v1),
          generationId: _v6("highlights"),
          highlightCount: _v0
        });
      },
      sendSelectHighlightVideo: ({
        videoTitle: _v0,
        value: _v1
      }) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_highlight_video", {
          ..._v18("click"),
          ..._v19("highlights", _v0),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: _v1,
          device_type: null
        }), _v3.trackVideoManageVimeoAiHighlightsHighlightClicked({
          clipId: String(_v1),
          generationId: _v6("highlights"),
          highlightType: _v1,
          highlightTitle: _v0
        });
      },
      sendSaveHighlightVideo: ({
        videoTitle: _v0,
        highlightType: _v1 = "recap"
      }) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.save_highlight_video", {
          ..._v18("click"),
          ..._v19("highlights", _v0),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: "svv_redesign",
          device_type: null
        }), _v3.trackVideoManageVimeoAiHighlightsSaved({
          clipId: String(_v1),
          generationId: _v6("highlights"),
          highlightTitle: _v0,
          highlightType: _v1
        });
      },
      sendEditHighlightVideo: ({
        videoTitle: _v0
      }) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.edit_highlight_video", {
          ..._v18("click"),
          ..._v19("highlights", _v0),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: "svv_redesign",
          device_type: null
        }), _v3.trackVideoManageVimeoAiHighlightsEdited({
          clipId: String(_v1),
          generationId: _v6("highlights"),
          highlightTitle: _v0
        });
      },
      sendSelectSuggestedAIQuestionEvent: ({
        copy: _v0,
        isRelated: _v1
      }) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_suggested_ai_question", {
          ..._v18("click"),
          ..._v19("ask_ai", _v0, "ai"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 3, {
          value: _v1 ? "related_question" : "suggested_question",
          if_uploader: _v13
        });
        let _v2 = _v5("ask_ai");
        _v3.trackVideoManageVimeoAiAskAiQuestionAsked({
          clipId: String(_v1),
          generationId: _v2,
          question: _v0,
          source: _v1 ? "related_question" : "suggested_question"
        });
      },
      sendViewSuggestedAskAIEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_suggested_ask_ai", {
          ..._v17(),
          ..._v19("ask_ai", "generate_Q&A"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        }), _v3.trackVideoManageVimeoAiAskAiShown({
          clipId: String(_v1),
          generationId: _v6("ask_ai")
        });
      },
      sendErrorNotificationViewEvent: (_v0, _v1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.notification_view", {
          ..._v19("ai", _v0),
          ..._v17(),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 3, {
          notification_name: _v0,
          error_id: null,
          error_name: _v1,
          checkbox_copy: null,
          notification_copy: null
        });
      },
      sendTranslateVideoMenuClickedEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_translate_video", {
          ..._v19("ai_translate", "translate_video"),
          ..._v18("click"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 4, {
          if_uploader: _v13,
          value: null
        });
      },
      sendTranslateVideoToggleSwitchEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.translate_preview_toggle_switch", {
          ..._v19("ai_translate", _v0, null, "toggle"),
          ..._v18("click"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 4, {
          if_uploader: _v13,
          value: null
        });
      },
      sendTranslateGenerateTranslationEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_generate_translation", {
          ..._v19("ai_translate", _v0, null, "button"),
          ..._v20(),
          ..._v17(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        });
      },
      sendTranslateLanguageToDiscardEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_translate_language_to_discard", {
          ..._v19("ai_translate", null, null, "button", _v11 ? _v7 : "drawer"),
          ..._v18("click"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: _v0,
          device_type: (0, _v17.getDeviceType)()
        });
      },
      sendTranslateVideoLanguageSelectedEvent: (_v0, _v1, _v2) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_translate_language", {
          ..._v19("ai_translate", _v2, _v1, "check_box"),
          ..._v18("click"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 4, {
          value: _v0,
          if_uploader: _v13
        });
      },
      sendTranslateVideoSpeakersNumberSelectedEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_translate_number_of_speakers", {
          ..._v19("ai_translate", "", null, "list"),
          ..._v18("click"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 4, {
          value: _v0,
          if_uploader: _v13
        });
      },
      sendTranslateVideoModalViewEvent: (_v0, _v1, _v2, _v3 = "ai_panel", _v4 = !1) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_translate_video_settings", {
          ..._v19("ai_translate", _v0, _v2),
          ..._v20(),
          ..._v17(),
          ..._v16(),
          ..._v15()
        }, 2, {
          service_version: null,
          value: _v1
        }), _v4 || _v3.trackVideoManageVimeoAiTranslateSettingsShown({
          clipId: String(_v1),
          generationId: _v6("translate"),
          source: _v3,
          productSelectionShown: _v4
        });
      },
      sendTranslateSaveTranslateSettingsEvent: (_v0, _v1, _v2, _v3, _v4 = {
        source: "ai_panel",
        productType: "audio_and_subtitles" === _v3 ? "audio_and_subtitles" : "subtitles_only",
        sourceLanguageCode: null,
        targetLanguageCodes: [],
        speakerCount: null
      }) => {
        (0, _v11.sendBpEventWithContexts)("vimeo.save_translate_settings", {
          ..._v19("ai_translate", _v0, _v3, "toggle"),
          ..._v18("click"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 4, {
          if_uploader: _v13,
          value: "preview" === _v1 ? _v1 : _v2
        }), _v3.trackVideoManageVimeoAiTranslateSaved({
          clipId: String(_v1),
          generationId: _v6("translate"),
          source: _v4.source,
          productType: _v4.productType,
          sourceLanguageCode: _v4.sourceLanguageCode,
          targetLanguageCodes: _v4.targetLanguageCodes,
          languageCount: _v4.targetLanguageCodes.length,
          speakerCount: _v4.speakerCount,
          previewEnabled: "preview" === _v1,
          submitAction: "Continue" === _v0 ? "continue" : "finish_and_save"
        });
      },
      sendCopyVideoDetailsEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.copy_video_details", {
          ..._v15(),
          ..._v16(),
          ..._v20(),
          ..._v18("click"),
          ..._v19("video_details", _v0, null, null, _v7)
        }, 4, {
          value: _v0,
          if_uploader: _v13
        }), _v3.trackVideoManageVimeoAiVideoDetailsCopied({
          clipId: String(_v1),
          generationId: _v6("video_details"),
          field: _v0
        });
      },
      sendDistributeContentEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.distribute_content", {
          ..._v21(),
          ..._v20(),
          ..._v16(),
          ..._v17(),
          ..._v18("click"),
          ..._v19("highlights", null, "share_highlight_video_link", null, _v7)
        }, 9, {
          distribution_type: "share",
          target_quality: null,
          target_resolution: null,
          target_file_details: null,
          number_of_items: 1,
          embed_config: null,
          embed_custom_dimensions: null,
          is_internal: !1,
          sharee_id: null,
          sharee_entity_permission: null,
          is_send_email_notification: !1,
          sharee_team_permission: null,
          sharee_email: null,
          collection_type: null
        }), _v3.trackVideoManageVimeoAiHighlightsShared({
          clipId: String(_v1),
          generationId: _v6("highlights"),
          distributionType: _v0
        });
      },
      sendViewTranslationProductSelection: (_v0, _v1 = "ai_panel") => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_translation_product_selection", {
          ..._v17(),
          ..._v19("ai_translate", _v0, null, "radio_button", _v7),
          ..._v16(),
          ..._v15()
        }, 2, {
          service_version: null,
          value: null
        }), _v3.trackVideoManageVimeoAiTranslateSettingsShown({
          clipId: String(_v1),
          generationId: _v6("translate"),
          source: _v1,
          productSelectionShown: !0
        });
      },
      sendSelectTranslationProduct: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_translation_product", {
          ..._v16(),
          ..._v20(),
          ..._v15(),
          ..._v18("click"),
          ..._v19("ai_translate", _v0, null, "radio_button", _v7)
        }, 4, {
          value: _v0,
          if_uploader: _v13
        });
      },
      sendViewGenerateChaptersEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_generate_chapters", {
          ..._v17(),
          ..._v19("ai", _v0 ?? "ask_ai"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        });
      },
      sendViewGenerateAskAIEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.view_generate_ask_ai", {
          ..._v17(),
          ..._v19("ai", "ask_ai"),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: null,
          service_version: null
        });
      },
      sendSelectGenerateVideoSummaryEvent: (_v0 = "ai_panel") => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_generate_video_summary", {
          ..._v18("click"),
          ..._v19("ai", _v14.activatingAi),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: "svv_redesign",
          device_type: null
        });
        let _v1 = _v5("video_details");
        _v3.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v1),
          generationId: _v1,
          feature: "video_details",
          location: _v0
        });
      },
      sendSelectGenerateChaptersEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_generate_chapters", {
          ..._v18("click"),
          ..._v19("ai", _v14.activatingAi),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: "svv_redesign",
          device_type: null
        });
        let _v0 = _v5("chapters");
        _v3.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v1),
          generationId: _v0,
          feature: "chapters",
          location: "ai_panel"
        });
      },
      sendSelectGenerateHighlightsEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_generate_highlights", {
          ..._v18("click"),
          ..._v19("ai", _v14.activatingAi),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: "svv_redesign",
          device_type: null
        });
        let _v0 = _v5("highlights");
        _v3.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v1),
          generationId: _v0,
          feature: "highlights",
          location: "ai_panel"
        });
      },
      sendSelectGenerateAskAIEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.select_generate_ask_ai", {
          ..._v18("click"),
          ..._v19("ai", _v14.activatingAi),
          ..._v20(),
          ..._v16(),
          ..._v15()
        }, 1, {
          value: "svv_redesign",
          device_type: null
        });
        let _v0 = _v5("ask_ai");
        _v3.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v1),
          generationId: _v0,
          feature: "ask_ai",
          location: "ai_panel"
        });
      },
      sendEnterpriseCTAImpressionEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.upsell_trigger_impression", {
          ..._v19(_v0, "upgrade"),
          ..._v20(),
          ..._v16(),
          ..._v15(),
          ..._v21(),
          ..._v17()
        }, 2, {
          ..._v20,
          upsell_name: "access_ai_highlights"
        }), _v3.trackVideoManageVimeoAiUpsellImpression({
          clipId: String(_v1),
          feature: _v18(_v0),
          upsellName: "access_ai_highlights"
        });
      },
      sendEnterpriseCTAClickEvent: () => {
        (0, _v11.sendBpEventWithContexts)("vimeo.trigger_contact_sales", {
          ..._v18("click"),
          ..._v19("highlights", "Enterprise"),
          ..._v20(),
          ..._v16(),
          ..._v15(),
          ..._v21()
        }), _v3.trackVideoManageVimeoAiUpsellContactSalesClicked({
          clipId: String(_v1),
          feature: "highlights"
        });
      },
      sendFeatureButtonUpgradeClickEvent: _v0 => {
        (0, _v11.sendBpEventWithContexts)("vimeo.trigger_upsell", {
          ..._v18("click"),
          ..._v19(_v0, _v14.upgradeToAccessAI),
          ..._v20(),
          ..._v16(),
          ..._v15(),
          ..._v21()
        }, 4, {
          ..._v20,
          upsell_name: "access_ai_upgrade"
        }), _v3.trackVideoManageVimeoAiUpsellTriggered({
          clipId: String(_v1),
          feature: _v18(_v0),
          upsellName: "access_ai_upgrade"
        });
        let _v1 = "ai_translate" === _v0 ? "translate" : "ai" === _v0 ? null : _v0;
        _v1 && _v3.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v1),
          generationId: null,
          feature: _v1,
          location: "ai_panel"
        });
      }
    };
  }], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  _v0.s(["TranslateFilled", 0, _v0 => (0, _v21.jsx)(_v22.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v21.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 2a1 1 0 0 1 1 1v1h2.468c.847 0 1.593.73 1.472 1.658-.197 1.524-.83 3.582-2.217 5.282-.189.232-.392.457-.609.672a9.824 9.824 0 0 0 2.296 1.476 1 1 0 1 1-.82 1.824c-1.172-.527-2.207-1.259-3.091-2.055C7.292 13.56 5.805 14 4 14a1 1 0 1 1 0-2c1.212 0 2.217-.241 3.053-.64-.96-1.134-1.623-2.231-1.956-2.93a1 1 0 1 1 1.806-.86c.294.619.91 1.618 1.792 2.634.17-.169.33-.345.478-.527C10.1 8.54 10.62 7.16 10.857 6H4a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1Zm8 11.693L17.323 17h-2.646L16 13.693ZM13.877 19l-.949 2.371a1 1 0 0 1-1.857-.742l3.536-8.84c.503-1.257 2.283-1.257 2.786 0l3.535 8.84a1 1 0 0 1-1.857.742L18.123 19h-4.246Z",
      fill: "currentColor"
    })
  })], 0);
  var _v23 = _v0.i(0);
  let _v24 = (_v0 = !1) => ({
      justifyContent: _v0 ? "flex-start !important" : "center",
      width: "100% !important",
      padding: _v0 ? "1rem 0.5rem" : "",
      height: _v0 ? "unset !important" : (0, _v23.rem)(40)
    }),
    _v25 = {
      ..._v24(),
      padding: "0.5rem 0.75rem !important",
      height: "unset !important",
      whiteSpace: "normal !important",
      textAlign: "left !important",
      wordWrap: "break-word !important",
      overflowWrap: "break-word !important"
    };
  _v0.s(["WrappingButtonSx", 0, _v25, "getChoiceButtonSx", 0, _v24], 0);
}