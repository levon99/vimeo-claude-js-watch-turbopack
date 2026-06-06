{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    DEVICE_NAME_HASH_REGEX: / \([a-f0-9]{2,8}:[a-f0-9]{2,8}\)$/,
    LOCAL_MEDIA: {
      CONSTRAINTS: (0, _v0.i(0).inline)(() => {
        let _v0 = (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_WIDTH, 0),
          _v1 = (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_HEIGHT, 0),
          _v2 = (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_FRAMERATE, 24),
          _v3 = (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_ASPECT_RATIO, 16 / 9);
        return {
          aspectRatio: {
            ideal: _v3,
            max: _v3,
            min: _v3
          },
          height: {
            ideal: _v1,
            max: _v1,
            min: 240
          },
          frameRate: {
            ideal: _v2,
            max: 30
          },
          width: {
            ideal: _v0,
            max: _v0,
            min: 426
          }
        };
      }),
      BITRATE_MAX: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_BITRATE_MAX, 0),
      BITRATE_MIN: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_BITRATE_MIN, 0),
      OPTIMIZATION_MODE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_BITRATE_MIN, "motion"),
      VIRTUAL_BACKGROUND_OPTIONS: {
        type: "blur",
        blurDegree: 2
      }
    },
    LOCAL_AUDIO: {
      DISCONTINUOUS_TRANSMISSION: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_DISCONTINUOUS_TRANSMISSION, !0),
      ECHO_CANCELLATION: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_ECHO_CANCELLATION, !0),
      AUTO_GAIN: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_AUTO_GAIN, !0),
      NOISE_SUPPRESSION: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_NOISE_SUPPRESSION, !0),
      ENCODER: {
        BITRATE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_BITRATE, 128),
        SAMPLE_RATE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_SAMPLE_RATE, 0),
        SAMPLE_SIZE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_SAMPLE_SIZE, 16),
        STEREO: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_STEREO, !1)
      }
    },
    LOCAL_SCREEN: {
      ENCODER_PRESET: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.SCREEN_ENCODER_PRESET, "1080p_2"),
      SVC_PRESET: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.SCREEN_SVC_PRESET, void 0),
      OPTIMIZATION_MODE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.SCREEN_OPTIMIZATION_MODE, "detail"),
      NONE: "NONE"
    },
    AGORA: {
      LOG_LEVEL: +(0, _v3.getLiveConfigValue)(_v1.localStorageConfig.LIVE.AGORA_LOG_LEVEL, 3),
      DISABLE_WEB_AUDIO: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.LIVE.AGORA_DISABLE_WEB_AUDIO, !1),
      LOG_UPLOAD: !!(0, _v3.getLiveConfigValue)(_v1.localStorageConfig.LIVE.AGORA_LOG_UPLOAD, !0),
      USE_VIDEO_HARD_MUTE: !!(0, _v3.getLiveConfigValue)(_v1.localStorageConfig.LIVE.AGORA_VIDEO_HARD_MUTE, !0),
      USE_AUDIO_HARD_MUTE: !!(0, _v3.getLiveConfigValue)(_v1.localStorageConfig.LIVE.AGORA_AUDIO_HARD_MUTE, !1),
      UID_META_SEPARATOR: "|",
      VOLUME_CHECK_INTERVAL: 100,
      CODEC: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.STREAM_CODEC, "vp8"),
      MEDIA_MODE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AGORA_SDK_MEDIA_MODE, _v2.EAgoraMode.LIVE),
      SCREEN_MODE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AGORA_SDK_SCREEN_MODE, _v2.EAgoraMode.LIVE),
      CLOUD_PROXY: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AGORA_SDK_CLOUD_PROXY, null),
      VOLUME_CHECK_THRESHOLD: .4,
      REMOTE_NETWORK_CHECK_INTERVAL: 0,
      REMOTE_STREAM_FALLBACK_OPTION: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.REMOTE_STREAM_FALLBACK_OPTION, 0),
      ROOM_VOLUME_CHECK_THROTTLE: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.ROOM_VOLUME_CHECK_THROTTLE, 0),
      ROOM_VOLUME_CHECK_INTERVAL: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.ROOM_VOLUME_CHECK_INTERVAL, 250),
      AUDIO_VOLUME_CHECK_THRESHOLD: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.AUDIO_VOLUME_CHECK_THRESHOLD, 30)
    },
    DUAL_STREAM: {
      IS_ENABLED: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.DUAL_STREAM_MEDIA_ENABLED, !0),
      CONFIG: {
        height: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.LOW_STREAM_HEIGHT, 360),
        width: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.LOW_STREAM_WIDTH, 640),
        framerate: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.LOW_STREAM_FRAMERATE, 24),
        bitrate: (0, _v3.getLiveConfigValue)(_v1.localStorageConfig.MEDIA.LOW_STREAM_FRAMERATE, 950)
      },
      GFX_ELEMENT_WIDTH_HQ_TOGGLE_THRESHOLD: 90,
      PREVIEW_SCALE_HQ_TOGGLE_THRESHOLD: 640,
      PREVIEW_SCALE_HQ_TOGGLE_THROTTLE: 500,
      ROOM_SCALE_BREAKPOINTS: [4, 8, 16],
      ROOM_SCALE_PRESETS: [{
        height: 360,
        width: 640
      }, {
        height: 270,
        width: 480
      }, {
        height: 240,
        width: 426
      }]
    },
    PERFORMANCE: {
      PERFORMANCE_CHECK_INTERVAL: 0,
      PERFORMANCE_CHECK_OMITTED_TIME: 0,
      PERFORMANCE_REPORT_TIMEOUT: 0,
      PERFORMANCE_REPORT_INTERVAL: 0,
      PERFORMANCE_REPORT_SAMPLES_MAX: 15,
      PERFORMANCE_REPORT_CONNECTION_SAMPLES_MIN: 5,
      PERFORMANCE_REPORT_SAMPLES_OFFSET: 5,
      PERFORMANCE_LARGE_RESOLUTION_THRESHOLD: 0
    }
  };
  _v0.s(["liveMediaConfig", 0, _v4]);
}