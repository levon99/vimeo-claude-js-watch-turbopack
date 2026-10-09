{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = ((_v1 = {}).LEFT_PANEL = "left_panel", _v1.SCENE_PREVIEW = "scene_preview", _v1.SCENE_THUMBNAIL = "scene_thumbnail", _v1),
    _v11 = ((_v2 = {}).AT_END = "at_end", _v2.IN_BETWEEN = "in_between", _v2.DUPLICATE = "as_duplicate", _v2),
    _v12 = ((_v3 = {}).LIVE = "live", _v3.SIMULIVE = "simulive", _v3),
    _v13 = ((_v4 = {}).GUEST = "guest", _v4.OTHER = "other", _v4),
    _v14 = ((_v5 = {}).BOTTOM_BAR = "bottom_bar", _v5.START_EVENT_BUTTON = "start_event_button", _v5.SEND_GUEST_SPEAKER_INVITE = "send_guest_speaker_invite", _v5),
    _v15 = ((_v6 = {}).FILE_TOO_LARGE = "file_too_large", _v6.UPLOAD_TIMED_OUT = "upload_timed_out", _v6),
    _v16 = ((_v7 = {}).UPLOADING = "uploading", _v7.PROCESSING = "processing", _v7);
  _v9.EStreamPrivacy.NOBODY, _v9.EStreamPrivacy.PASSWORD, _v9.EStreamPrivacy.ANYBODY, _v9.EStreamPrivacy.UNLISTED, _v9.EStreamPrivacy.EMBED_ONLY, _v8.EComposerSessionType.VENUE, _v8.EComposerSessionType.LIVE_EVENT, _v8.EComposerSessionType.INTERVIEW, _v8.EComposerSessionType.UNKNOWN;
  let _v17 = {
    [_v9.EEventStreamingMethodVariant.Browser]: "browser_studio",
    [_v9.EEventStreamingMethodVariant.Encoder]: "stream_management"
  };
  _v9.EEventLatency.FailSafe, _v9.EEventLatency.Standard, _v9.EEventLatency.Low, _v0.s(["ELowerThirdType", () => _v13, "ESceneLocation", () => _v11, "ESceneMode", () => _v12, "ESlidesErrorReason", () => _v15, "ESlidesUploadState", () => _v16, "ETtrackingAddGraphicLocations", () => _v10, "EUpgradeLocationType", () => _v14, "ProductionMethod", 0, _v17]);
}