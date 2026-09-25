{
  "use strict";

  let _v1 = `
  radial-gradient(#82FFEB 0%, #17D5FF 30%, #0BA1FF 45%, #9E00FF 75%, #9E00FF 0%);
`,
    _v2 = `
  linear-gradient(90deg, var(--vimeo-colors-stroke) 0%, var(--vimeo-colors-stroke) 70%, transparent 100%);
`,
    _v3 = `
  animation: loading 3s linear infinite;
  @keyframes loading {
    0% {background-position: 200% 0}
    50% {background-position: 100% 0}
    100% {background-position: 0 0}
  }
`;
  _v0.s(["ACTIVATION_PROCESSING", 0, "activation_processing", "AI_NOT_AVAILABLE", 0, "ai_not_available", "AI_PRIMARY_BUTTON_COLORS", 0, {
    dark: {
      normal: "#FFFFFF !important",
      hover: "#E0E0E0 !important",
      disabled: "#585858 !important",
      textColor: "#000000 !important"
    },
    light: {
      normal: "#000000 !important",
      hover: "#282828 !important",
      disabled: "#808080 !important",
      textColor: "#FFFFFF !important"
    }
  }, "AVAILABLE_WINDOW_HEIGHT", 0, "calc(100vh - 146px)", "ChapterPresets", 0, {
    STANDARD: "standard",
    FINE_GRAINED: "fine_grained",
    HIGH_LEVEL: "high_level",
    CUSTOM: "custom"
  }, "FEATURE_DISABLED", 0, "feature_disabled", "GRANULAR_METADATA_GENERATING", 0, "granular_metadata_generating", "LOADER_BAR_HEIGHT", 0, 48, "MENU_SHOW_ANIMATION_DURATION_S", 0, .06, "NEUTRAL_SHIMMER_GRADIENT", 0, _v2, "PENDO_EDITABLE_DUBBING_GUID_ID", 0, "HBhCWeBpico0-vnRiEdAx_g9GU8", "PENDO_UPDATE_PAYMENT_METHODS_MODAL_GUIDE_ID", 0, "10Fh7-3sYselCXGGIGdf1qa_fgs", "POLLING_INTERVAL", 0, 0, "POLLING_INTERVAL_SHORT", 0, 0, "POLLING_SERVICE_KEY", 0, "polling_service", "POLLING_START_DELAY", 0, 800, "QNA_LIMIT_ERRORS", 0, [0, 0, 0], "SCROLLBAR_STYLE_SX", 0, {
    "::-webkit-scrollbar-track": {
      background: "transparent",
      border: "none",
      padding: "2px"
    },
    "::-webkit-scrollbar": {
      width: "12px"
    },
    "::-webkit-scrollbar-thumb": {
      width: "3px",
      background: "var(--chakra-colors-stroke)",
      border: "3px solid transparent",
      borderRadius: "6px",
      backgroundClip: "padding-box",
      _hover: {
        background: "var(--chakra-colors-text-600)"
      }
    }
  }, "SERVICE_CALL_DEBOUNCE_INTERVAL", 0, 0, "SERVICE_STATUSES", 0, {
    PROCESSING: "PRCS",
    DONE: "DONE",
    NONE_EXISTING: "NONE_EXISTING",
    ERROR: "ERROR",
    FAILED: "FAILED",
    INITIALIZING: "INIT",
    INVALID: "INVALID"
  }, "SHIMMER_GRADIENT", 0, _v1, "TRANSCRIPTION_IN_PROGRESS", 0, "transcript_status_in_progress", "TRANSLATIONS_DISABLE_REASON_INCOMPLETE_TRANSCODING", 0, "transcoding_incomplete", "TRANSLATIONS_MAX_SPEAKERS_COUNT", 0, 9, "TRANSLATION_TRACK_ACTION_TYPES", 0, {
    UP: "up",
    DOWN: "down",
    DELETE: "delete",
    NONE: null
  }, "TranslationTypes", 0, {
    DUBBING: "dubbing",
    SUBTITLING: "subtitling"
  }, "USER_CONFIRMED_LOCATION_KEY", 0, "user_confirmed_location", "VIDEO_TRANSLATIONS_STEPS", 0, {
    TYPE_SELECTION: "type_selection",
    SUBTITLING: "subtitling",
    DUBBING: "dubbing"
  }, "VIEWER_QNA_ANSWER_PLACEHOLDER_ANIMATION", 0, _v3, "Z_INDEX", 0, {
    BOKEH_MODAL: 0,
    BOKEH_DROPDOWN_MENU: 0
  }]);
}