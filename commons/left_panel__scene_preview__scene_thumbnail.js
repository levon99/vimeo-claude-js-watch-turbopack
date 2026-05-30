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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = ((_v1 = {}).LEFT_PANEL = "left_panel", _v1.SCENE_PREVIEW = "scene_preview", _v1.SCENE_THUMBNAIL = "scene_thumbnail", _v1),
    _v12 = ((_v2 = {}).AT_END = "at_end", _v2.IN_BETWEEN = "in_between", _v2.DUPLICATE = "as_duplicate", _v2),
    _v13 = ((_v3 = {}).LIVE = "live", _v3.SIMULIVE = "simulive", _v3),
    _v14 = ((_v4 = {}).GUEST = "guest", _v4.OTHER = "other", _v4),
    _v15 = ((_v5 = {}).BOTTOM_BAR = "bottom_bar", _v5.START_EVENT_BUTTON = "start_event_button", _v5.SEND_GUEST_SPEAKER_INVITE = "send_guest_speaker_invite", _v5),
    _v16 = ((_v6 = {}).FILE_TOO_LARGE = "file_too_large", _v6.UPLOAD_TIMED_OUT = "upload_timed_out", _v6),
    _v17 = ((_v7 = {}).UPLOADING = "uploading", _v7.PROCESSING = "processing", _v7);
  let _v18 = {
      [_v10.EStreamPrivacy.NOBODY]: "private",
      [_v10.EStreamPrivacy.PASSWORD]: "password",
      [_v10.EStreamPrivacy.ANYBODY]: "public",
      [_v10.EStreamPrivacy.UNLISTED]: "unlisted",
      [_v10.EStreamPrivacy.EMBED_ONLY]: "hide_from_vimeo"
    },
    _v19 = {
      [_v9.EComposerSessionType.VENUE]: "venues",
      [_v9.EComposerSessionType.LIVE_EVENT]: "live_event",
      [_v9.EComposerSessionType.INTERVIEW]: "live_event",
      [_v9.EComposerSessionType.UNKNOWN]: null
    },
    _v20 = {
      [_v10.EEventStreamingMethodVariant.Browser]: "browser_studio",
      [_v10.EEventStreamingMethodVariant.Encoder]: "stream_management"
    },
    _v21 = {
      [_v10.EEventLatency.FailSafe]: "fail_safe_streaming",
      [_v10.EEventLatency.Standard]: "standard_latency",
      [_v10.EEventLatency.Low]: "low_latency"
    };
  var _v22 = ((_v8 = {}).YOUTUBE = "youtube", _v8.FACEBOOK = "facebook", _v8.LINKEDIN = "linkedin", _v8.VIMEO_OTT = "vimeo_ott", _v8.RTMP = "rtmp", _v8.INSTAGRAM = "instagram", _v8.TIKTOK = "tiktok", _v8.X = "x", _v8);
  _v0.s(["AudienceType", 0, _v19, "ELowerThirdType", () => _v14, "ESceneLocation", () => _v12, "ESceneMode", () => _v13, "ESimulcastValue", () => _v22, "ESlidesErrorReason", () => _v16, "ESlidesUploadState", () => _v17, "ETtrackingAddGraphicLocations", () => _v11, "EUpgradeLocationType", () => _v15, "EventLatency", 0, _v21, "EventPrivacy", 0, _v18, "ProductionMethod", 0, _v20]);
}