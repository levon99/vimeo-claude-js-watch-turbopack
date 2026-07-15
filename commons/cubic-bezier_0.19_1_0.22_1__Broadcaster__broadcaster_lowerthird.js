{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
    CLEANUP: {
      STALE_OBJECT_REMOVAL_DELAY: 500
    },
    ANIMATION: {
      DEFAULT_ANIMATION_DURATION: 0,
      DEFAULT_TIMING: "cubic-bezier(0.19, 1, 0.22, 1)"
    },
    BROADCASTER: {
      DEFAULT_NAME: "Broadcaster",
      LOWERTHIRD_KEY: "broadcaster_lowerthird"
    },
    VALIDATION: {
      LOWER_THIRD_LINE_MAX_LENGTH: 120,
      IMAGE_LINE_MAX_LENGTH: 120
    },
    CACHE: {
      PRELOAD_CONCURRENT_DOWNLOADS_LIMIT: (0, _v5.getLiveConfigValue)(_v3.localStorageConfig.GRAPHICS.PRELOAD_CONCURRENT_DOWNLOADS_LIMIT, 4),
      PRELOAD_CACHED_ITEMS_LIMIT: (0, _v5.getLiveConfigValue)(_v3.localStorageConfig.GRAPHICS.PRELOAD_CACHED_ITEMS_LIMIT, 100),
      PRELOAD_CACHED_ITEMS_REMOVAL_STEP: 5,
      IS_CACHING_LOG_ENABLED: (0, _v5.getLiveConfigValue)(_v3.localStorageConfig.GRAPHICS.IS_CACHING_LOG_ENABLED, !1),
      IS_PRELOAD_ENABLED: (0, _v5.getLiveConfigValue)(_v3.localStorageConfig.GRAPHICS.IS_PRELOAD_ENABLED, !0),
      CACHEABLE_TYPES: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.SLIDES],
      SECONDARY_CACHING_DELAY: 0
    },
    UPLOADS: {
      FILE_CACHE_CONTROL: "public, max-age=2592000",
      FILE_UPLOAD_LIMIT: 0,
      THUMBNAIL_FILE_UPLOAD_LIMIT_MB: 10,
      THUMBNAIL_FILE_UPLOAD_LIMIT: 0,
      SLIDES_FILE_UPLOAD_LIMIT: 0,
      SLIDES_UPLOADING_PROGRESS_FRACTION: .25,
      ACCEPTED_IMAGE_TYPES: "image/png,image/x-png,image/jpeg,.jpg,.jpeg,.png",
      ACCEPTED_SLIDES_TYPES: ".ppt,.pptx,.pdf",
      UPLOADED_FILE_NAME: (_v0, _v1, _v2 = "") => `${_v1}/${_v2}${(0, _v1.v4)()}${_v0}`
    },
    SCENE: {
      MIN_WIDTH: 340,
      MAX_WIDTH: 0,
      LAYOUT_HEIGHT_LIVE: 302,
      LAYOUT_HEIGHT_SIMULIVE: 348,
      FULLSCREEN_MODE_MIN_WIDTH: 640,
      FULLSCREEN_MODE_MAX_WIDTH: 0,
      RELATIVE_COEFFICIENT: .75,
      DEFAULT_RESCALE_THROTTLE: 25,
      MAX_NAME_LENGTH: 64,
      MAX_SCENES_COUNT: 100,
      MAX_SPEAKERS_COUNT: 12,
      BASIC_SCENE_PREVIEW_HEIGHT: 88,
      BASIC_SCENE_PREVIEW_WIDTH: 156,
      INFO: {
        MODIFIER_TYPES: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.POLL, _v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.AGORA_SCREEN, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.SLIDES],
        PIP_TYPES: [_v4.EGraphicsDescriptorType.SLIDES, _v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.AGORA_SCREEN]
      },
      CONTROLS: {
        INLINE_TOGGLE_ALLOWED: [_v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.LOGO, _v4.EGraphicsDescriptorType.POLL],
        INLINE_REMOVAL_ALLOWED: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.POLL, _v4.EGraphicsDescriptorType.LOGO, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.AGORA_STREAM, _v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.SLIDES],
        INDEXED_POSITION_ALLOWED: [_v4.EGraphicsDescriptorType.AGORA_STREAM, _v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.SLIDES],
        SCHEDULED_PLAYBACK_ALLOWED: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.POLL, _v4.EGraphicsDescriptorType.LOGO, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.AGORA_MEDIA],
        BG_POSITION_ALLOWED: [_v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.AGORA_MEDIA],
        CONFLICTING_ALLOWED: [_v4.EGraphicsDescriptorType.IMAGE]
      },
      GRAPHIC_THUMBNAIL: {
        CUSTOM_LIST_DRAG: [_v4.EGraphicsDescriptorType.AGORA_STREAM, _v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.IMAGE, _v4.EGraphicsDescriptorType.SLIDES],
        DRAG: {
          WIDTH: 144,
          HEIGHT: 81
        }
      }
    },
    RTMP_PREVIEW: {
      MIN_WIDTH: 524,
      MAX_WIDTH: 0
    },
    COMPLETED_PREVIEW: {
      MIN_WIDTH: 340,
      MAX_WIDTH: 0
    },
    RENDERER: {
      POSITION_PRECISION: 2,
      REQUIRED_DATA_FIELDS: ["container", "value", "image", "track", "icon", "text", "ta", "th-cr", "th-bg", "th-bs", "a-t", "a-du", "a-dl", "ai-du", "ao-du", "ai-dl", "ao-dl"],
      WIDTH: 0,
      HEIGHT: 0,
      OVERFLOW_VISIBLE: "visible",
      TRANSPARENT_BACKGROUND: "rgba(0, 0, 0, 0)",
      AUTO_BACKGROUND: "auto",
      TOP_LEFT_BACKGROUND: "0% 0%",
      STYLE_NONE: "none",
      TEXT_ALIGN_START: "start",
      WORD_BREAK_NORMAL: "normal",
      LINE_HEIGHT_NORMAL: "normal",
      TEXT_OVERFLOW_CLIP: "clip",
      ZERO_ANIMATION: "0s",
      ANIMATION: {
        SYSTEM_DURATION_OFFSET: 200
      }
    },
    DEFAULT_THEME: {
      font: _v4.EFontFamily.ROBOTO,
      primaryColor: "#1A2E3B",
      secondaryColor: "#657987"
    },
    FONTS: {
      FONTS_PATH: _v2.environmentConfig.IS_COM ? "https://f.vimeocdn.com/fonts/" : "/assets/fonts/",
      ENABLED_FONTS: [_v4.EFontFamily.ROBOTO],
      AVAILABLE_FONTS: {
        [_v4.EFontFamily.ROBOTO]: {
          displayName: "Roboto (default)",
          family: "Roboto"
        }
      }
    },
    GRAPHICS_CONFLICTING: {
      [_v4.EGraphicsDescriptorType.LOGO]: [_v4.EGraphicsDescriptorType.LOGO],
      [_v4.EGraphicsDescriptorType.IMAGE]: [_v4.EGraphicsDescriptorType.IMAGE],
      [_v4.EGraphicsDescriptorType.LOWER_THIRD]: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.POLL, _v4.EGraphicsDescriptorType.LOWER_THIRD],
      [_v4.EGraphicsDescriptorType.GUEST_LOWER_THIRD]: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.POLL],
      [_v4.EGraphicsDescriptorType.POLL]: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.POLL, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.GUEST_LOWER_THIRD],
      [_v4.EGraphicsDescriptorType.QNA]: [_v4.EGraphicsDescriptorType.QNA, _v4.EGraphicsDescriptorType.LOWER_THIRD, _v4.EGraphicsDescriptorType.POLL, _v4.EGraphicsDescriptorType.GUEST_LOWER_THIRD],
      [_v4.EGraphicsDescriptorType.AGORA_MEDIA]: [_v4.EGraphicsDescriptorType.AGORA_MEDIA, _v4.EGraphicsDescriptorType.SLIDES],
      [_v4.EGraphicsDescriptorType.AGORA_STREAM]: [],
      [_v4.EGraphicsDescriptorType.SLIDES]: [_v4.EGraphicsDescriptorType.SLIDES, _v4.EGraphicsDescriptorType.AGORA_MEDIA]
    },
    GRAPHICS_POSITIONING: {
      FULL_POSITION: {
        align: "topLeft",
        left: 0,
        top: 0,
        z: 15,
        width: 100,
        height: 100,
        visible: !0
      },
      Z_INDEX: {
        SCENE_LABEL: 100,
        SCENE_MODIFIERS: 100,
        SCENE_CONTROLS: 49,
        LOGO: 40,
        GRAPHIC: 30,
        CUSTOM_SLOT: 25,
        CUSTOM_SLOT_ELEVATED: 26,
        AGORA_MEDIA: 17,
        SLIDES: 17,
        AGORA_STREAM: 15,
        AGORA_SCREEN: 10,
        IMAGE: 5,
        LAYOUT: 1
      },
      SCREEN_SPEAKER_POSITION: {
        align: "topLeft",
        left: 75,
        top: 75,
        z: 25,
        width: 20,
        height: 20,
        visible: !0
      },
      DEFAULT_POSITION_FOR_TYPE(_v0) {
        switch (_v0) {
          case _v4.EGraphicsDescriptorType.IMAGE:
            return {
              align: "bottomLeft",
              left: 0,
              top: 0,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.IMAGE,
              index: null,
              width: 100,
              height: 100,
              visible: !0
            };
          case _v4.EGraphicsDescriptorType.SLIDES:
            return {
              align: "topLeft",
              left: 0,
              top: 0,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.SLIDES,
              index: null,
              width: 100,
              height: 100,
              visible: !0
            };
          case _v4.EGraphicsDescriptorType.LOGO:
            return {
              align: "bottomLeft",
              left: 85,
              top: 75,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.LOGO,
              index: null,
              width: 10,
              height: 17.77,
              visible: !1
            };
          case _v4.EGraphicsDescriptorType.GUEST_LOWER_THIRD:
            return {
              align: "topLeft",
              left: 5,
              top: 75,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.GRAPHIC,
              index: null,
              width: 90,
              height: 20,
              visible: !0
            };
          case _v4.EGraphicsDescriptorType.LOWER_THIRD:
            return {
              align: "topLeft",
              left: 5,
              top: 75,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.GRAPHIC,
              index: null,
              width: 90,
              height: 20,
              visible: !1
            };
          case _v4.EGraphicsDescriptorType.POLL:
            return {
              align: "bottomLeft",
              left: 5,
              top: 63,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.GRAPHIC,
              index: null,
              width: 90,
              height: 32,
              visible: !1
            };
          case _v4.EGraphicsDescriptorType.QNA:
            return {
              align: "bottomLeft",
              left: 5,
              top: 60,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.GRAPHIC,
              index: null,
              width: 90,
              height: 35,
              visible: !0
            };
          case _v4.EGraphicsDescriptorType.AGORA_STREAM:
            return {
              align: "topLeft",
              left: 0,
              top: 0,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.AGORA_STREAM,
              index: null,
              width: 100,
              height: 100,
              guestLabelScale: 1,
              visible: !0
            };
          case _v4.EGraphicsDescriptorType.AGORA_MEDIA:
            return {
              align: "bottomLeft",
              left: 0,
              top: 0,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.AGORA_MEDIA,
              index: null,
              width: 100,
              height: 100,
              visible: !0
            };
          case _v4.EGraphicsDescriptorType.AGORA_SCREEN:
            return {
              align: "bottomLeft",
              left: 0,
              top: 0,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.AGORA_SCREEN,
              index: null,
              width: 100,
              height: 100,
              visible: !0
            };
          default:
            return {
              align: "topLeft",
              left: 0,
              top: 0,
              z: _v6.GRAPHICS_POSITIONING.Z_INDEX.LAYOUT,
              index: null,
              width: 100,
              height: 100,
              visible: !1
            };
        }
      }
    }
  };
  _v0.s(["graphicsConfig", 0, _v6]);
}