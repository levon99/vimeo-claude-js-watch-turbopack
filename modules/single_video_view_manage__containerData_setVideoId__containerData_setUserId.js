{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      videoId: 0,
      userId: 0,
      pageName: "single_video_view_manage",
      isInitialized: !1
    },
    _v4 = (0, _v1.create)()((0, _v2.devtools)((_v0, _v1) => ({
      ..._v3,
      setVideoId: _v0 => _v0(() => ({
        videoId: _v0
      }), void 0, "containerData/setVideoId"),
      setUserId: _v0 => _v0(() => ({
        userId: _v0
      }), void 0, "containerData/setUserId"),
      setPageName: _v0 => _v0(() => ({
        pageName: _v0
      }), void 0, "containerData/setPageName"),
      initialize: (_v0, _v1) => {
        _v1().isInitialized || _v0(() => ({
          videoId: _v0,
          pageName: _v1,
          isInitialized: !0
        }), void 0, "containerData/initialize");
      },
      reset: () => _v0(() => _v3, void 0, "containerData/reset")
    }), {
      name: "ContainerDataStore",
      enabled: !1
    }));
  _v0.s(["useContainerDataStore", 0, _v4], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => "object" == typeof _v0 && !!_v0 && _v0?.res instanceof Response;
  async function _v8(_v0, _v1, _v2) {
    if (!_v7(_v0)) return;
    let _v3 = await _v0?.res.clone().json();
    "string" == typeof _v3?.error ? _v2?.(`${_v1}. ${_v3.error}`) : _v2?.(_v1);
  }
  async function _v9(_v0) {
    if (!_v7(_v0)) return !1;
    try {
      let _v0 = await _v0.res.clone().json();
      return _v5.QNA_LIMIT_ERRORS.includes(_v0.error_code);
    } catch {
      return !1;
    }
  }
  let _v10 = ["transcript_status_does_not_exist", "transcript_status_no_speech", "transcript_status_failed", "transcript_status_language_not_supported", "transcript_status_exceeds_maximum_duration", "video_transcript_too_short", "video_too_short", "transcript_ready_but_not_english"],
    _v11 = (_v0, _v1) => _v0 && !!_v1 && _v10.includes(_v1);
  _v0.s(["copyToClipBoard", 0, function (_v0) {
    return navigator.clipboard.writeText(_v0);
  }, "getDeviceType", 0, () => {
    let _v0 = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
  }, "getDisabledTooltipCopy", 0, function (_v0, _v1 = "") {
    switch (_v0) {
      case "transcript_status_language_not_supported":
      case "transcript_status_no_speech":
      case "transcript_status_failed":
      case "transcript_status_unknown":
      case "transcript_status_exceeds_maximum_duration":
      case "transcript_status_does_not_exist":
        return _v6.transcriptNotDetected;
      case "video_not_ready":
      case "transcript_status_not_started":
      case "transcript_status_in_progress":
        return _v6.unavailableUntilTranscriptIsReady;
      case "video_too_short":
      case "video_transcript_too_short":
        return _v6.transcriptIsTooShort;
      case "video_resolution_too_low":
        return _v6.unsupportedResolutionForHighlights;
      case _v5.TRANSLATIONS_DISABLE_REASON_INCOMPLETE_TRANSCODING:
        return _v6.translationsUnavailableWhileTranscoding;
      case "activation_processing":
        return _v6.activationInProgress;
      case "transcript_ready_but_not_english":
        return _v6.unavailableForThisVideosLanguage;
      case "owner_disabled_feature_group":
        return _v6.disabledFeatureGroupTooltip(_v1);
      default:
        return _v6.disabled;
    }
  }, "getMetadataActionDisabledReason", 0, ({
    canUseMultiModalMetadata: _v0,
    summaryDisabled: _v1 = !1,
    summaryDisabledReason: _v2,
    isActivationInProgress: _v3 = !1,
    isTranscriptingLoading: _v4 = !1,
    activationProcessingReason: _v5,
    transcriptionInProgressReason: _v6,
    fallbackReason: _v7
  }) => _v1 && _v2 && !_v11(_v0, _v2) ? _v2 : _v0 ? _v3 ? _v5 : _v4 ? _v6 : _v7 : _v2 ?? _v7, "getVideoRequestId", 0, (_v0, _v1) => _v1 ? `${_v0}:${_v1}` : _v0.toString(), "handleError", 0, _v8, "isClipInterractionsLimitError", 0, _v9, "isMetadataActionDisabled", 0, ({
    canUseMultiModalMetadata: _v0,
    summaryDisabled: _v1 = !1,
    summaryDisabledReason: _v2,
    isTranscriptingLoading: _v3 = !1
  }) => !(!_v1 || _v11(_v0, _v2)) || _v0 && _v3, "secondsToDisplay", 0, _v0 => {
    let _v1 = new Date(0 * _v0).toISOString();
    return _v0 >= 0 ? _v1.substr(11, 8) : _v1.substr(14, 5);
  }, "shortenStringToFiftyChars", 0, _v0 => _v0.length > 50 ? _v0.substring(0, 50) : _v0, "updateThumbnailUri", 0, _v0 => "string" != typeof _v0 ? "https://devi.vimeocdn.com/video/default_80x48" : _v0.replace(/h=\d+/, "h=48"), "versionIdFromUri", 0, _v0 => {
    let _v1 = _v0?.split("/") || [];
    return parseInt(_v1[_v1.length - 1], 10);
  }, "videoIdFromUri", 0, _v0 => {
    if (!_v0) return;
    let _v1 = _v0.match(/\/videos\/(\d+)/);
    return _v1?.[1];
  }], 0);
}