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
  }]);
}