{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17,
    _v18,
    _v19,
    _v20 = _v0.i(0);
  let _v21 = {
    FEATURE: {
      USE_RTC_PERFORMANCE_TOOLS: "LSC.LIVE.USE_RTC_PERFORMANCE_TOOLS",
      USE_TEST_VIDEOS_SEARCH: "LSC.LIVE.USE_TEST_VIDEOS_SEARCH",
      USE_MOBILE_ACCESS: "LSC.LIVE.USE_MOBILE_ACCESS",
      USE_MULTIPLE_AUDIO_TRACKS_IN_RTMP_PREVIEW: "LSC.LIVE.USE_MULTIPLE_AUDIO_TRACKS_IN_RTMP_PREVIEW"
    },
    DEBUG: {
      SECTION_FILTER: "LSC.DEBUG.SECTION_FILTER",
      LOGGING: "LSC.DEBUG.LOGGING",
      FILE_LOGGING: "LSC.DEBUG.FILE_LOGGING",
      BP_TRACKING_LOGGING: "LSC.DEBUG.BP_TRACKING_LOGGING",
      AGORA_STATS_COLLECTING: "LSC.DEBUG.AGORA_STATS_COLLECTING",
      DATADOG_TRACKING_LOGGING: "LSC.DEBUG.DATADOG_TRACKING_LOGGING",
      API_TRACKING_LOGGING: "LSC.DEBUG.API_TRACKING_LOGGING",
      EMBED_MESSAGING_ACTIONS_LOGGING: "LSC.DEBUG.EMBED_MESSAGING_ACTIONS_LOGGING",
      FB_ACTIONS_LOGGING: "LSC.DEBUG.FB_ACTIONS_LOGGING",
      FB_SDK_LOGGING: "LSC.DEBUG.FB_SDK_LOGGING",
      INTERVALS_DEBUG_ENABLED: "LSC.DEBUG.INTERVALS_DEBUG_ENABLED",
      ENABLED: "LSC.DEBUG.ENABLED"
    },
    LIVE: {
      AGORA_LOG_LEVEL: "LSC.LIVE.AGORA_LOG_LEVEL",
      AGORA_DISABLE_WEB_AUDIO: "LSC.LIVE.AGORA_DISABLE_WEB_AUDIO",
      AGORA_LOG_UPLOAD: "LSC.LIVE.AGORA_LOG_UPLOAD",
      AGORA_AUDIO_HARD_MUTE: "LSC.LIVE.AGORA_AUDIO_HARD_MUTE",
      AGORA_VIDEO_HARD_MUTE: "LSC.LIVE.AGORA_VIDEO_HARD_MUTE",
      COMBINED_PROVIDERS: "LSC.LIVE.COMBINED_PROVIDERS",
      PREFERRED_ENCODER_MODE: "LSC.SETTINGS.PREFERRED_ENCODER_MODE"
    },
    GRAPHICS: {
      BACKGROUND_LAST_COLOR: "LSC.GRAPHICS.BACKGROUND_LAST_COLOR",
      IS_CACHING_LOG_ENABLED: "LSC.GRAPHICS.IS_CACHING_LOG_ENABLED",
      IS_PRELOAD_ENABLED: "LSC.GRAPHICS.IS_PRELOAD_ENABLED",
      PRELOAD_CONCURRENT_DOWNLOADS_LIMIT: "LSC.GRAPHICS.PRELOAD_CONCURRENT_DOWNLOADS_LIMIT",
      PRELOAD_CACHED_ITEMS_LIMIT: "LSC.GRAPHICS.PRELOAD_CACHED_ITEMS_LIMIT"
    },
    MEDIA: {
      AGORA_SDK_MEDIA_MODE: "LSC.LIVE.AGORA_SDK_MEDIA_MODE",
      AGORA_SDK_SCREEN_MODE: "LSC.LIVE.AGORA_SDK_SCREEN_MODE",
      AGORA_SDK_CLOUD_PROXY: "LSC.LIVE.AGORA_SDK_CLOUD_PROXY",
      STREAM_HEIGHT: "LSC.MEDIA.STREAM_HEIGHT",
      STREAM_WIDTH: "LSC.MEDIA.STREAM_WIDTH",
      STREAM_ASPECT_RATIO: "LSC.MEDIA.STREAM_ASPECT_RATIO",
      STREAM_FRAMERATE: "LSC.MEDIA.STREAM_FRAMERATE",
      STREAM_BITRATE_MAX: "LSC.MEDIA.STREAM_STREAM_BITRATE_MAX",
      STREAM_BITRATE_MIN: "LSC.MEDIA.STREAM_STREAM_BITRATE_MIN",
      STREAM_OPTIMIZATION_MODE: "LSC.MEDIA.STREAM_OPTIMIZATION_MODE",
      STREAM_CODEC: "LSC.MEDIA.CODEC",
      SCREEN_OPTIMIZATION_MODE: "LSC.MEDIA.SCREEN_OPTIMIZATION_MODE",
      SCREEN_ENCODER_PRESET: "LSC.MEDIA.SCREEN_ENCODER_PRESET",
      SCREEN_BITRATE_MAX: "LSC.MEDIA.SCREEN_BITRATE_MAX",
      SCREEN_BITRATE_MIN: "LSC.MEDIA.SCREEN_BITRATE_MIN",
      SCREEN_WIDTH: "LSC.MEDIA.SCREEN_WIDTH",
      SCREEN_HEIGHT: "LSC.MEDIA.SCREEN_HEIGHT",
      SCREEN_FRAMERATE: "LSC.MEDIA.SCREEN_FRAMERATE",
      SCREEN_SVC_PRESET: "LSC.MEDIA.SCREEN_SVC_PRESET",
      DUAL_STREAM_MEDIA_ENABLED: "LSC.DS_MEDIA_ENABLED",
      DUAL_STREAM_SCREEN_ENABLED: "LSC.DS_SCREEN_ENABLED",
      LOW_STREAM_HEIGHT: "LSC.MEDIA.LOW_STREAM_HEIGHT",
      LOW_STREAM_WIDTH: "LSC.MEDIA.LOW_STREAM_WIDTH",
      LOW_STREAM_FRAMERATE: "LSC.MEDIA.LOW_STREAM_WIDTH",
      LOW_STREAM_BITRATE: "LSC.MEDIA.LOW_STREAM_BITRATE",
      AUDIO_DISCONTINUOUS_TRANSMISSION: "LSC.AUDIO.DTX",
      AUDIO_NOISE_SUPPRESSION: "LSC.AUDIO.NSP",
      AUDIO_ECHO_CANCELLATION: "LSC.AUDIO.ECL",
      AUDIO_AUTO_GAIN: "LSC.AUDIO.AUG",
      AUDIO_STEREO: "LSC.AUDIO.STEREO",
      AUDIO_BITRATE: "LSC.AUDIO.BITRATE",
      AUDIO_SAMPLE_RATE: "LSC.AUDIO.SAMPLE_RATE",
      AUDIO_SAMPLE_SIZE: "LSC.AUDIO.SAMPLE_SIZE",
      AUDIO_MIXING_MODE: "LSC.AUDIO.MIXING_MODE",
      AUDIO_VOLUME_CHECK_THRESHOLD: "LSC.AUDIO.AUDIO_VOLUME_CHECK_THRESHOLD",
      ACTIVE_VIDEO_DEVICE_ID: "LSC.MEDIA.ACTIVE_VIDEO_DEVICE_ID",
      ACTIVE_VIDEO_DEVICE_STATE: "LSC.MEDIA.ACTIVE_VIDEO_DEVICE_STATE",
      ACTIVE_AUDIO_DEVICE_ID: "LSC.MEDIA.ACTIVE_AUDIO_DEVICE_ID",
      ACTIVE_AUDIO_DEVICE_STATE: "LSC.MEDIA.ACTIVE_AUDIO_DEVICE_STATE",
      ROOM_VOLUME_CHECK_THROTTLE: "LSC.MEDIA.ROOM_VOLUME_CHECK_THROTTLE",
      ROOM_VOLUME_CHECK_INTERVAL: "LSC.MEDIA.ROOM_VOLUME_CHECK_INTERVAL",
      REMOTE_STREAM_FALLBACK_OPTION: "LSC.RS_FALLBACK_OPTION",
      MIRRORING_ENABLED: "LSC.MEDIA.MIRRORING_ENABLED",
      BLUR_ENABLED: "LSC.MEDIA.BLUR_ENABLED"
    },
    MARKETING: {
      QNA_UPSELL: "LSC.MARKETING.QNA_UPSELL",
      HOW_GO_LIVE_NOTICE: "LSC.MARKETING.HOW_GO_LIVE_NOTICE",
      STREAMING_4K_UPSELL: "LSC.MARKETING.STREAMING_4K_UPSELL",
      MULTI_TRACK_INFO_NOTICE: "LSC.MARKETING.MULTI_TRACK_INFO_NOTICE"
    },
    INTERACTION: {
      SAVED_USER_AUTH_PREFERENCES: _v0 => `LSC.INTERACTION.SAVED_USER_AUTH_PREFERENCES.${_v0}`
    }
  };
  _v0.s(["localStorageConfig", 0, _v21], 0);
  var _v22 = ((_v1 = {})[_v1.HIGH = 0] = "HIGH", _v1[_v1.LOW = 1] = "LOW", _v1),
    _v23 = ((_v2 = {}).HOST = "host", _v2.AUDIENCE = "audience", _v2),
    _v24 = ((_v3 = {}).LIVE = "live", _v3.RTC = "rtc", _v3),
    _v25 = ((_v4 = {}).AUTO = "auto", _v4.FORCE_UDP = "force_udp", _v4.FORCE_TCP = "force_tcp", _v4),
    _v26 = ((_v5 = {}).OPERATION_ABORTED = "OPERATION_ABORTED", _v5.PERMISSION_DENIED = "PERMISSION_DENIED", _v5.CONSTRAINT_NOT_SATISFIED = "CONSTRAINT_NOT_SATISFIED", _v5.TRACK_IS_DISABLED = "TRACK_IS_DISABLED", _v5.NO_DEVICES = "NO_DEVICES", _v5.CAN_NOT_GET_GATEWAY_SERVER = "CAN_NOT_GET_GATEWAY_SERVER", _v5.UNEXPECTED_ERROR = "UNEXPECTED_ERROR", _v5.UNEXPECTED_RESPONSE = "UNEXPECTED_RESPONSE", _v5.NOT_READABLE = "NOT_READABLE", _v5),
    _v27 = ((_v6 = {})[_v6.UNKNOWN = 0] = "UNKNOWN", _v6[_v6.EXCELLENT = 1] = "EXCELLENT", _v6[_v6.GOOD = 2] = "GOOD", _v6[_v6.IMPAIRED = 3] = "IMPAIRED", _v6[_v6.BAD = 4] = "BAD", _v6[_v6.POOR = 5] = "POOR", _v6[_v6.DOWN = 6] = "DOWN", _v6),
    _v28 = ((_v7 = {}).BROADCASTER = "BROADCASTER", _v7.PREVIEW = "PREVIEW", _v7.MEDIA = "MEDIA", _v7.GUEST = "GUEST", _v7.RTMP = "RTMP", _v7.SCREEN = "SCREEN", _v7.GUEST_SCREEN = "GUEST_SCREEN", _v7.BROADCASTER_SCREEN = "BROADCASTER_SCREEN", _v7.UNKNOWN = "UNKNOWN", _v7),
    _v29 = ((_v8 = {}).CONNECTING = "CONNECTING", _v8.CONNECTED = "CONNECTED", _v8.DISCONNECTED = "DISCONNECTED", _v8.DISCONNECTING = "DISCONNECTING", _v8.RECONNECTING = "RECONNECTING", _v8),
    _v30 = ((_v9 = {}).AUDIO_VOLUME_INDICATION_INTERVAL = "AUDIO_VOLUME_INDICATION_INTERVAL", _v9);
  _v0.s(["EAgoraConnectionState", () => _v29, "EAgoraConnectionType", () => _v28, "EAgoraErrorCode", () => _v26, "EAgoraMode", () => _v24, "EAgoraNetworkQuality", () => _v27, "EAgoraParameter", () => _v30, "EAgoraProxyMode", () => _v25, "EClientRole", () => _v23, "EStreamQuality", () => _v22], 0);
  var _v31 = ((_v10 = {}).ARROW_LEFT = "ArrowLeft", _v10.ARROW_RIGHT = "ArrowRight", _v10.I = "KeyI", _v10.O = "KeyO", _v10.P = "KeyP", _v10.K = "KeyK", _v10.L = "KeyL", _v10.D = "KeyD", _v10.ENTER = "Enter", _v10);
  async function _v32() {}
  _v0.s(["CallablePlaceholder", 0, function () {}, "CallablePlaceholderAsync", 0, _v32, "ComponentPlaceholder", 0, function () {
    return null;
  }, "EKey", () => _v31, "StopPropagation", 0, function (_v0) {
    return _v0.stopPropagation(), _v0.preventDefault(), null;
  }], 0);
  var _v33 = ((_v11 = {})[_v11.INCOMPATIBLE_BROWSER = 1] = "INCOMPATIBLE_BROWSER", _v11[_v11.DEVICE_BUSY = 2] = "DEVICE_BUSY", _v11[_v11.NO_DEVICES = 3] = "NO_DEVICES", _v11[_v11.DEVICE_ABORTED = 4] = "DEVICE_ABORTED", _v11[_v11.DEVICE_NOT_AVAILABLE = 5] = "DEVICE_NOT_AVAILABLE", _v11[_v11.DEVICE_UNPLUGGED = 6] = "DEVICE_UNPLUGGED", _v11[_v11.INVALID_INTERVIEW_LINK = 7] = "INVALID_INTERVIEW_LINK", _v11),
    _v34 = ((_v12 = {}).FACETIME = "facetime", _v12.NORMAL = "normal", _v12.UNKNOWN = "unknown", _v12.OTHER = "other", _v12.DISABLED = "disabled", _v12),
    _v35 = ((_v13 = {}).VIDEO = "video", _v13.AUDIO = "audio", _v13),
    _v36 = ((_v14 = {}).MANUAL = "manual", _v14.AUTO = "auto", _v14.LOOP = "loop", _v14),
    _v37 = ((_v15 = {}).ALL = "ALL", _v15.SCENE = "SCENE", _v15),
    _v38 = ((_v16 = {})[_v16.MUTED = 0] = "MUTED", _v16[_v16.FULL = 100] = "FULL", _v16);
  _v0.s(["EAudioMixingMode", () => _v37, "EAudioVolume", () => _v38, "EDeviceWeight", () => _v34, "EMediaError", () => _v33, "ETrackKind", () => _v35, "EVideoTransitionState", () => _v36], 0);
  var _v39 = ((_v17 = {}).ONBOARDING_RTMP = "rtmpobtp", _v17.ONBOARDING_RTC = "slobtp", _v17.ONBOARDING_RTC_BOKEH = "slnwbrdnbh", _v17.ONBOARDING_RTC_SIMULIVE = "sltrschld", _v17.PUBLISH_TO_SOCIAL = "psaa", _v17.ECDN_KOLLECTIVE_JITC = "kj", _v17.EXTENDED_STREAM_WITH_DVR = "ldful", _v17.EXTENDED_STREAM_WITH_SIMULCAST = "lsful", _v17.AUDIO_TRACKS_MANAGEMENT = "latm", _v17),
    _v40 = ((_v18 = {}).LIVE_GUEST_API_MANAGEMENT = "liveGuestApiManagement", _v18.LIVE_MEDIA_API_MANAGEMENT = "liveMediaApiManagement", _v18.LIVE_COMPOSER_TEMPLATES_ACCESS = "liveComposerTemplatesAccess", _v18);
  function _v41(_v0, _v1 = !0) {
    try {
      let _v0 = localStorage?.getItem(_v1 ? btoa(_v0) : _v0) || null;
      return null === _v0 ? null : function (_v0, _v1 = !0) {
        return JSON.parse(_v1 ? atob(_v0) : _v0);
      }(_v0, _v1);
    } catch (_v0) {
      return null;
    }
  }
  function _v42(_v0, _v1) {
    try {
      let _v0 = _v41(_v0, !0);
      return null === _v0 ? _v1 : _v0;
    } catch (_v0) {
      return _v1;
    }
  }
  _v0.s(["EUserEntitlement", () => _v40, "EUserPreference", () => _v39], 0), _v0.s(["getFromLocalStorage", 0, _v41, "getLocalStorageConfigItem", 0, _v42, "removeLocalStorageItem", 0, function (_v0) {
    try {
      localStorage?.removeItem(btoa(_v0));
    } catch (_v0) {}
  }, "setLocalStorageItem", 0, function (_v0, _v1) {
    try {
      var _v2;
      localStorage?.setItem(btoa(_v0), (_v2 = JSON.stringify(_v1), btoa(_v2)));
    } catch (_v0) {}
  }], 0);
  var _v43 = _v0.i(0);
  let _v44 = _v20.environmentConfig.IS_SSR ? {} : (0, _v43.getUrlQueryObject)();
  function _v45(_v0, _v1, _v2 = _v44) {
    if (_v0 in _v2) {
      let _v0 = _v2[_v0];
      try {
        return JSON.parse(_v0);
      } catch (_v0) {
        return _v0;
      }
    }
    return _v42(_v0, _v1);
  }
  _v0.s(["getLiveConfigValue", 0, _v45], 0);
  let _v46 = {
    ASK_TO_REPLACE_ALL_SCENES: !0,
    AUDIO_TRACKS: {
      DEFAULT_LANGUAGES_COUNT: 2,
      DEFAULT_LANGUAGE: "en"
    },
    IS_ACTIVE: !0,
    TIMING: {
      STARTED_AT: Date.now(),
      IDLE_TIME: 0,
      IDLE_TIME_CHECK_INTERVAL: 0,
      IDLE_TIME_TIMEOUT: 0,
      CLOCK_SKEW: 0,
      JWT_UPDATED_AT: 0,
      DEBUG_TIMERS: _v45(_v21.DEBUG.INTERVALS_DEBUG_ENABLED, !1),
      MAXIMAL_EXPECTED_INGEST_START_DELAY: 0
    },
    EVENT: {
      STREAM_STATS_POLLING_INTERVAL: 0,
      MAXIMAL_EXPECTED_INGEST_START_DELAY: 0,
      VIDEO_TRANSCODING_POLLING_INTERVAL: 0,
      STATUS_POLLING_INTERVAL: 0,
      STATUS_ERRORS_NOTIFICATION_THRESHOLD: 10,
      DURATION_RECALCULATION_INTERVAL: 500
    },
    GUESTS: {
      MAX_GUEST_MAIL_LENGTH: 128,
      MAX_GUEST_NAME_LENGTH: 64,
      MAX_GUEST_TITLE_LENGTH: 64,
      LIMIT: 12
    },
    USE_COMBINED_PROVIDERS: _v45(_v21.LIVE.COMBINED_PROVIDERS, !1),
    TRACKING: {
      IS_ENABLED: !0,
      IS_BP_LOG_ENABLED: _v45(_v21.DEBUG.BP_TRACKING_LOGGING, !1),
      IS_AGORA_STATS_COLLECTING_ENABLED: _v45(_v21.DEBUG.AGORA_STATS_COLLECTING, !1),
      IS_DATADOG_LOG_ENABLED: _v45(_v21.DEBUG.DATADOG_TRACKING_LOGGING, _v20.environmentConfig.IS_LOCAL_DEV),
      IS_EMBED_MESSAGING_LOG_ENABLED: _v45(_v21.DEBUG.EMBED_MESSAGING_ACTIONS_LOGGING, !0),
      IS_FIREBASE_LOG_ENABLED: _v45(_v21.DEBUG.FB_ACTIONS_LOGGING, !1),
      IS_FIREBASE_SDK_LOG_ENABLED: _v45(_v21.DEBUG.FB_SDK_LOGGING, !1),
      IS_INTERVAL_CHECKING_ENABLED: _v45(_v21.DEBUG.INTERVALS_DEBUG_ENABLED, !1),
      NR_LOG_ERRORS_TRACKED: 0,
      NR_LOG_ERRORS_LIMIT: 200,
      NR_AGORA_IGNORED_CODES: [_v26.PERMISSION_DENIED, _v26.OPERATION_ABORTED],
      NR_IGNORED_USERS: [0, 0, 0, 0, 0, 0],
      BP_IGNORED_USERS: [0, 0, 0, 0, 0, 0],
      BP_FREQUENT_EVENTS_THROTTLE_PERIOD: 0
    },
    MARKETING: {
      QNA_UPSELL_LAST_EVENT_ID: _v45(_v21.MARKETING.QNA_UPSELL, 0),
      STREAMING_4K_UPSELL_TIMEOUT: 0,
      STREAMING_4K_UPSELL_LAST_EVENT_ID: _v45(_v21.MARKETING.STREAMING_4K_UPSELL, 0)
    },
    MEDIA: {
      MEDIA_TRANSITION_TIMEOUT: 250,
      MIN_VIDEO_SEEK_CHECK_INTERVAL: 50,
      MAX_VIDEO_SEEK_CHECK_INTERVAL: 500,
      VIDEO_TIME_LEFT_CHECK_INTERVAL: 500,
      SPEAKING_NOTIFICATION_INTERVAL: 0,
      DEFAULT_AUDIO_MIXING_MODE: _v37.ALL
    },
    USER: {
      REQUIRED_OWNER_CAPABILITIES: ["canSendGuestEmailInvites", "canUseBackupStream", "hasAutoClosedCaptions", "hasDashStreaming", "hasDisableAutoArchiving", "hasEcdn", "hasEnterprise", "hasGeoBlock", "hasLiveComposerApp", "hasLiveSubscription", "hasLiveSupportChat", "hasScheduledMediaPlayback", "hasUnlimitedLiveEventDuration", "hasUhdStreaming"],
      REQUIRED_OWNER_ENTITLEMENTS: [_v40.LIVE_COMPOSER_TEMPLATES_ACCESS, _v40.LIVE_GUEST_API_MANAGEMENT, _v40.LIVE_MEDIA_API_MANAGEMENT],
      REQUIRED_OWNER_PREFERENCES: [_v39.ECDN_KOLLECTIVE_JITC, _v39.EXTENDED_STREAM_WITH_DVR, _v39.EXTENDED_STREAM_WITH_SIMULCAST, _v39.AUDIO_TRACKS_MANAGEMENT],
      REQUIRED_PREFERENCES: [_v39.ONBOARDING_RTMP, _v39.ONBOARDING_RTC, _v39.ONBOARDING_RTC_BOKEH, _v39.ONBOARDING_RTC_SIMULIVE, _v39.PUBLISH_TO_SOCIAL]
    },
    FEATURE: {
      USE_RTC_PERFORMANCE_TOOLS: _v45(_v21.FEATURE.USE_RTC_PERFORMANCE_TOOLS, !1),
      USE_TEST_VIDEOS_SEARCH: _v45(_v21.FEATURE.USE_TEST_VIDEOS_SEARCH, !1),
      USE_MOBILE_ACCESS: _v45(_v21.FEATURE.USE_MOBILE_ACCESS, !1),
      USE_MULTIPLE_AUDIO_TRACKS_IN_RTMP_PREVIEW: _v45(_v21.FEATURE.USE_MULTIPLE_AUDIO_TRACKS_IN_RTMP_PREVIEW, !1)
    },
    KEY_BINDS: {
      KEYPRESS_THROTTLING_PERIOD: 100,
      ENABLED_KEYS: [_v31.ARROW_LEFT, _v31.ARROW_RIGHT]
    },
    AUTO_CC: {
      UPDATE_TIMEOUT: 0,
      MAX_KEYWORDS_COUNT: 50,
      DEFAULT_LANGUAGE: "en-US",
      LANGUAGE_LIST: [{
        value: "en-US",
        label: "English"
      }, {
        value: "fr-FR",
        label: "French"
      }, {
        value: "de-DE",
        label: "German"
      }, {
        value: "es-ES",
        label: "Spanish"
      }, {
        value: "pt-BR",
        label: "Portuguese"
      }, {
        value: "zh-CN",
        label: "Chinese"
      }],
      UPGRADE_ENTERPRISE_LINK: "/enterprise/contact-us?mkc=auto_cc",
      UPGRADE_UNLIMITED_LINK: "mailto:Accountmanagement@vimeo.com"
    },
    DOM: {
      LIVE_APP_NAMING_PREFIX: "live",
      INTERACTION_APP_NAMING_PREFIX: "interaction"
    }
  };
  _v0.s(["liveApplicationConfig", 0, _v46], 0);
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = {
    DETAILS: {
      SESSION_PAGE_UUID: (0, _v47.v4)(),
      SESSION_APPLICATION: _v48.EComposerApplicationType.UNKNOWN,
      SESSION_TYPE: _v48.EComposerSessionType.UNKNOWN,
      SESSION_USER_ROLE: null,
      SESSION_ID: null,
      USER_ID: null,
      USER_LOCALE: null,
      SESSION_CLOUD_ID: null
    },
    BIG_PICTURE_LIVE_SCHEMA_BASE: {
      page: null,
      liveStatus: null,
      videoId: null,
      liveEventId: null,
      liveEventType: null,
      isTestEvent: !1,
      leadSource: null
    },
    BIG_PICTURE_INTERACTION_SCHEMA_BASE: {
      liveStatus: null,
      page: null,
      view: null,
      videoId: null,
      roomId: null,
      roomType: null
    },
    BIG_PICTURE_SCHEME_ADDITIONAL: {
      isSimulive: null,
      isRecord: null
    },
    BIG_PICTURE_TEAM_CONTEXT_BASE: {
      teamOwnerId: null,
      teamAccountType: null,
      teamUser: null
    },
    BIG_PICTURE_EVENT_SETTINGS_SCHEMA_BASE: {
      eventPrivacy: null,
      productionMethod: null
    },
    BIG_PICTURE_VENUE_SCHEMA_BASE: {}
  };
  _v0.s(["liveTrackingConfig", 0, _v49], 0);
  var _v50 = ((_v19 = {}).LIVE = "LIVE", _v19.GENERIC = "GENERIC", _v19.AGORA = "AGORA", _v19.MEDIA = "MEDIA", _v19.GUEST = "GUEST", _v19.INTERACTION = "INTERACTION", _v19.GRAPHICS = "GRAPHICS", _v19.FIREBASE = "FIREBASE", _v19.RTMP = "RTMP", _v19);
  function _v51() {
    let _v0 = {
      pageCombinedProviders: _v46.USE_COMBINED_PROVIDERS,
      pageSessionApplication: _v49.DETAILS.SESSION_APPLICATION,
      pageSessionType: _v49.DETAILS.SESSION_TYPE,
      pageSessionId: _v49.DETAILS.SESSION_ID,
      pageSessionLocale: _v49.DETAILS.USER_LOCALE,
      pageSessionUuid: _v49.DETAILS.SESSION_PAGE_UUID,
      buildId: _v20.environmentConfig.BUILD_ID
    };
    return _v20.environmentConfig.IS_IFRAME && (_v0.pageIsIframe = !0, _v0.pageIframeReferer = String(window?.document.referrer)), _v0;
  }
  _v0.s(["ELiveErrorCategory", () => _v50, "getLiveApplicationGlobals", 0, _v51, "getLiveApplicationInfo", 0, function () {
    let _v0 = window.performance.memory;
    return {
      ..._v51(),
      pageLifeDuration: Date.now() - _v46.TIMING.STARTED_AT,
      pageIdleTime: _v46.TIMING.IDLE_TIME,
      pageIsActive: _v46.IS_ACTIVE,
      pageIsVisible: !window.document.hidden,
      pageIsFocused: window.document.hasFocus(),
      pageErrorsTracked: _v46.TRACKING.NR_LOG_ERRORS_TRACKED,
      pageSessionCloudId: _v49.DETAILS.SESSION_CLOUD_ID,
      pageSessionUserRole: _v49.DETAILS.SESSION_USER_ROLE,
      pageEventState: _v49.BIG_PICTURE_LIVE_SCHEMA_BASE.liveStatus,
      usedJSHeapSize: Math.floor((_v0?.usedJSHeapSize || 0) / 0 / 0),
      totalJSHeapSize: Math.floor((_v0?.totalJSHeapSize || 0) / 0 / 0),
      jsHeapSizeLimit: Math.floor((_v0?.jsHeapSizeLimit || 0) / 0 / 0)
    };
  }], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  _v0.s(["getErrorCode", 0, function (_v0) {
    return _v0 && _v0.code || null;
  }, "getErrorName", 0, function (_v0) {
    return _v0 && _v0.name || null;
  }, "isApiError", 0, function (_v0) {
    return !!(_v0 && _v0 instanceof _v52.LiveError && _v0.code === _v53.ELiveErrorCode.API_ERROR && _v0.data.body);
  }], 0);
}