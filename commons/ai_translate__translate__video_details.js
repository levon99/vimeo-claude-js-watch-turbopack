{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => "ai_translate" === _v0 ? "translate" : _v0,
    _v8 = {
      video_title: "video_details",
      video_description: "video_details",
      video_tags: "video_details",
      chapters: "chapters",
      highlights: "highlights",
      ask_ai: "ask_ai"
    };
  _v0.s(["useGetSvvManageBpEvents", 0, () => {
    let _v0 = (0, _v6.useContainerDataStore)(_v0 => _v0.videoId),
      _v1 = (0, _v4.useVideoManageTracking)(),
      _v2 = (0, _v3.useSearchTracking)(),
      _v3 = (0, _v5.useAiGenerationStore)(_v0 => _v0.startGeneration),
      _v4 = (0, _v5.useAiGenerationStore)(_v0 => _v0.getGenerationId),
      {
        data: _v5
      } = (0, _v2.useGetVideo)({
        where: {
          videoId: _v0
        },
        select: ["user.uri"]
      }),
      _v6 = (0, _v1.useMemo)(() => parseInt(_v5?.user?.uri.split("/users/")[1] || "", 10) || null, [_v5?.user?.uri]);
    return {
      sendPlayMomentClickEvent: (_v0, _v1) => {
        _v1.trackVideoManageVimeoAiAskAiMomentPlayed({
          clipId: String(_v0),
          generationId: _v4("ask_ai"),
          question: _v1,
          timecode: _v0
        });
      },
      sendSummaryNotificationViewedEvent: (_v0, _v1, _v2, _v3) => {},
      sendGenerateHighlightsLoaderViewedEvent: () => {},
      sendGenerateVideoDetailsLoaderViewedEvent: _v0 => {},
      sendSummaryDetailsViewedEvent: (_v0, _v1) => {
        _v1.trackVideoManageVimeoAiVideoDetailsShown({
          clipId: String(_v0),
          generationId: _v4("video_details"),
          fieldsGenerated: _v1
        });
      },
      sendSummaryDetailsSaveClickEvent: _v0 => {
        let _v1 = "all",
          _v2 = "save";
        "title" === _v0 || "description" === _v0 || "tags" === _v0 ? _v1 = _v0 : "replace" === _v0 && (_v2 = "replace"), _v1.trackVideoManageVimeoAiVideoDetailsSaved({
          clipId: String(_v0),
          generationId: _v4("video_details"),
          field: _v1,
          action: _v2
        });
      },
      sendChapterDetailsViewedEvent: (_v0, _v1) => {
        _v1.trackVideoManageVimeoAiChaptersShown({
          clipId: String(_v0),
          generationId: _v4("chapters"),
          chapterCount: _v1
        });
      },
      sendChapterDetailsSaveClickEvent: (_v0, _v1) => {
        _v1.trackVideoManageVimeoAiChaptersSaved({
          clipId: String(_v0),
          generationId: _v4("chapters"),
          chapterCount: _v1
        });
      },
      sendThumbsOnVideoTitleClickEvent: (_v0, _v1, _v2) => {
        let _v3 = _v8[_v0];
        _v2.trackThumbsRate({
          ratedFeature: _v0,
          isPositive: _v2,
          videoId: _v0,
          generationId: _v1 ?? (_v3 ? _v4(_v3) : null)
        });
      },
      sendAskAQuestionEvent: (_v0, _v1 = "typed") => {
        let _v2 = _v3("ask_ai");
        _v1.trackVideoManageVimeoAiAskAiQuestionAsked({
          clipId: String(_v0),
          generationId: _v2,
          question: _v0,
          source: _v1
        });
      },
      sendAskAiAnswerShownEvent: (_v0, _v1, _v2, _v3) => {
        _v1.trackVideoManageVimeoAiAskAiAnswerShown({
          clipId: String(_v0),
          generationId: _v4("ask_ai"),
          question: _v0,
          answer: _v1,
          answerOrigin: _v2,
          questionSource: _v3,
          videoOwnerId: null === _v6 ? null : String(_v6)
        });
      },
      sendViewGenerateAIAnswerEvent: () => {},
      sendViewSuggestedAIAnswerEvent: (_v0, _v1) => {},
      sendViewSuggestedAIHighlightVideosEvent: _v0 => {
        _v1.trackVideoManageVimeoAiHighlightsShown({
          clipId: String(_v0),
          generationId: _v4("highlights"),
          highlightCount: _v0
        });
      },
      sendSelectHighlightVideo: ({
        videoTitle: _v0,
        value: _v1
      }) => {
        _v1.trackVideoManageVimeoAiHighlightsHighlightClicked({
          clipId: String(_v0),
          generationId: _v4("highlights"),
          highlightType: _v1,
          highlightTitle: _v0
        });
      },
      sendSaveHighlightVideo: ({
        videoTitle: _v0,
        highlightType: _v1 = "recap"
      }) => {
        _v1.trackVideoManageVimeoAiHighlightsSaved({
          clipId: String(_v0),
          generationId: _v4("highlights"),
          highlightTitle: _v0,
          highlightType: _v1
        });
      },
      sendEditHighlightVideo: ({
        videoTitle: _v0
      }) => {
        _v1.trackVideoManageVimeoAiHighlightsEdited({
          clipId: String(_v0),
          generationId: _v4("highlights"),
          highlightTitle: _v0
        });
      },
      sendSelectSuggestedAIQuestionEvent: ({
        copy: _v0,
        isRelated: _v1
      }) => {
        let _v2 = _v3("ask_ai");
        _v1.trackVideoManageVimeoAiAskAiQuestionAsked({
          clipId: String(_v0),
          generationId: _v2,
          question: _v0,
          source: _v1 ? "related_question" : "suggested_question"
        });
      },
      sendViewSuggestedAskAIEvent: () => {
        _v1.trackVideoManageVimeoAiAskAiShown({
          clipId: String(_v0),
          generationId: _v4("ask_ai")
        });
      },
      sendErrorNotificationViewEvent: (_v0, _v1) => {},
      sendTranslateVideoMenuClickedEvent: () => {},
      sendTranslateVideoToggleSwitchEvent: _v0 => {},
      sendTranslateGenerateTranslationEvent: _v0 => {},
      sendTranslateLanguageToDiscardEvent: _v0 => {},
      sendTranslateVideoLanguageSelectedEvent: (_v0, _v1, _v2) => {},
      sendTranslateVideoSpeakersNumberSelectedEvent: _v0 => {},
      sendTranslateVideoModalViewEvent: (_v0, _v1, _v2, _v3 = "ai_panel", _v4 = !1) => {
        _v4 || _v1.trackVideoManageVimeoAiTranslateSettingsShown({
          clipId: String(_v0),
          generationId: _v4("translate"),
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
        _v1.trackVideoManageVimeoAiTranslateSaved({
          clipId: String(_v0),
          generationId: _v4("translate"),
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
        _v1.trackVideoManageVimeoAiVideoDetailsCopied({
          clipId: String(_v0),
          generationId: _v4("video_details"),
          field: _v0
        });
      },
      sendDistributeContentEvent: _v0 => {
        _v1.trackVideoManageVimeoAiHighlightsShared({
          clipId: String(_v0),
          generationId: _v4("highlights"),
          distributionType: _v0
        });
      },
      sendViewTranslationProductSelection: (_v0, _v1 = "ai_panel") => {
        _v1.trackVideoManageVimeoAiTranslateSettingsShown({
          clipId: String(_v0),
          generationId: _v4("translate"),
          source: _v1,
          productSelectionShown: !0
        });
      },
      sendSelectTranslationProduct: _v0 => {},
      sendViewGenerateChaptersEvent: _v0 => {},
      sendViewGenerateAskAIEvent: () => {},
      sendSelectGenerateVideoSummaryEvent: (_v0 = "ai_panel") => {
        let _v1 = _v3("video_details");
        _v1.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v0),
          generationId: _v1,
          feature: "video_details",
          location: _v0
        });
      },
      sendSelectGenerateChaptersEvent: () => {
        let _v0 = _v3("chapters");
        _v1.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v0),
          generationId: _v0,
          feature: "chapters",
          location: "ai_panel"
        });
      },
      sendSelectGenerateHighlightsEvent: () => {
        let _v0 = _v3("highlights");
        _v1.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v0),
          generationId: _v0,
          feature: "highlights",
          location: "ai_panel"
        });
      },
      sendSelectGenerateAskAIEvent: () => {
        let _v0 = _v3("ask_ai");
        _v1.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v0),
          generationId: _v0,
          feature: "ask_ai",
          location: "ai_panel"
        });
      },
      sendEnterpriseCTAImpressionEvent: _v0 => {
        _v1.trackVideoManageVimeoAiUpsellImpression({
          clipId: String(_v0),
          feature: _v7(_v0),
          upsellName: "access_ai_highlights"
        });
      },
      sendEnterpriseCTAClickEvent: () => {
        _v1.trackVideoManageVimeoAiUpsellContactSalesClicked({
          clipId: String(_v0),
          feature: "highlights"
        });
      },
      sendFeatureButtonUpgradeClickEvent: _v0 => {
        _v1.trackVideoManageVimeoAiUpsellTriggered({
          clipId: String(_v0),
          feature: _v7(_v0),
          upsellName: "access_ai_upgrade"
        });
        let _v1 = "ai_translate" === _v0 ? "translate" : "ai" === _v0 ? null : _v0;
        _v1 && _v1.trackVideoManageVimeoAiFeatureClicked({
          clipId: String(_v0),
          generationId: null,
          feature: _v1,
          location: "ai_panel"
        });
      }
    };
  }], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["Subscriptions", 0, _v0 => (0, _v9.jsx)(_v10.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v9.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v9.jsx)("path", {
        d: "M10 12.752c0-.583.604-.943 1.08-.645l3.57 2.243c.467.294.466 1.006-.002 1.3l-3.568 2.243c-.476.298-1.08-.062-1.08-.645v-4.496Z"
      }), (0, _v9.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.5 9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h11Zm-11 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-11Z"
      }), (0, _v9.jsx)("path", {
        d: "M17 6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2h10ZM15 3a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h6Z"
      })]
    })
  })], 0), _v0.s(["Subtitles", 0, _v0 => (0, _v9.jsx)(_v10.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v9.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v9.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 7.625C2 5.597 3.683 4 5.7 4h12.6C20.317 4 22 5.597 22 7.625v8.75C22 18.403 20.317 20 18.3 20H5.7C3.683 20 2 18.403 2 16.375v-8.75ZM5.7 6C4.734 6 4 6.754 4 7.625v8.75C4 17.246 4.734 18 5.7 18h12.6c.966 0 1.7-.754 1.7-1.625v-8.75C20 6.754 19.266 6 18.3 6H5.7ZM9 15.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      }), (0, _v9.jsx)("path", {
        d: "M7.5 12a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z"
      })]
    })
  })], 0), _v0.s(["TranslateFilled", 0, _v0 => (0, _v9.jsx)(_v10.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v9.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 2a1 1 0 0 1 1 1v1h2.468c.847 0 1.593.73 1.472 1.658-.197 1.524-.83 3.582-2.217 5.282-.189.232-.392.457-.609.672a9.824 9.824 0 0 0 2.296 1.476 1 1 0 1 1-.82 1.824c-1.172-.527-2.207-1.259-3.091-2.055C7.292 13.56 5.805 14 4 14a1 1 0 1 1 0-2c1.212 0 2.217-.241 3.053-.64-.96-1.134-1.623-2.231-1.956-2.93a1 1 0 1 1 1.806-.86c.294.619.91 1.618 1.792 2.634.17-.169.33-.345.478-.527C10.1 8.54 10.62 7.16 10.857 6H4a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1Zm8 11.693L17.323 17h-2.646L16 13.693ZM13.877 19l-.949 2.371a1 1 0 0 1-1.857-.742l3.536-8.84c.503-1.257 2.283-1.257 2.786 0l3.535 8.84a1 1 0 0 1-1.857.742L18.123 19h-4.246Z",
      fill: "currentColor"
    })
  })], 0);
  var _v11 = _v0.i(0);
  let _v12 = (_v0 = !1) => ({
      justifyContent: _v0 ? "flex-start !important" : "center",
      width: "100% !important",
      padding: _v0 ? "1rem 0.5rem" : "",
      height: _v0 ? "unset !important" : (0, _v11.rem)(40)
    }),
    _v13 = {
      ..._v12(),
      padding: "0.5rem 0.75rem !important",
      height: "unset !important",
      whiteSpace: "normal !important",
      textAlign: "left !important",
      wordWrap: "break-word !important",
      overflowWrap: "break-word !important"
    };
  _v0.s(["WrappingButtonSx", 0, _v13, "getChoiceButtonSx", 0, _v12], 0);
}