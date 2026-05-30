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
    _v9 = ((_v1 = {})[_v1.Wizard = 0] = "Wizard", _v1[_v1.Settings = 1] = "Settings", _v1),
    _v10 = ((_v2 = {})[_v2.UNKNOWN = -1] = "UNKNOWN", _v2[_v2.UNAVAILABLE = 0] = "UNAVAILABLE", _v2[_v2.PROVISION_REQUESTED = 1] = "PROVISION_REQUESTED", _v2[_v2.PROVISION_READY = 2] = "PROVISION_READY", _v2[_v2.PROVISION_EXPIRED = 3] = "PROVISION_EXPIRED", _v2[_v2.STREAMING = 4] = "STREAMING", _v2[_v2.ENDED = 5] = "ENDED", _v2),
    _v11 = ((_v3 = {}).UNKNOWN = "unknown", _v3.WEBRTC = "webrtc", _v3.RTMP = "rtmp", _v3.DASH = "dash", _v3.SRT = "srt", _v3.SIMPLE_LIVE = "simple_live", _v3),
    _v12 = ((_v4 = {})[_v4.NOT_STARTED = 0] = "NOT_STARTED", _v4[_v4.STARTED = 1] = "STARTED", _v4[_v4.DONE = 2] = "DONE", _v4[_v4.ERROR = 3] = "ERROR", _v4),
    _v13 = ((_v5 = {}).ANYBODY = "anybody", _v5.EMBED_ONLY = "embed_only", _v5.TEAM = "team", _v5.NOBODY = "nobody", _v5.PASSWORD = "password", _v5.UNLISTED = "unlisted", _v5),
    _v14 = ((_v6 = {}).PRIVATE = "private", _v6.PUBLIC = "public", _v6.WHITELIST = "whitelist", _v6),
    _v15 = ((_v7 = {}).STARTED = "started", _v7.ENDED = "ended", _v7),
    _v16 = ((_v8 = {})[_v8.NORMAL = 6] = "NORMAL", _v8[_v8.RECORDING_WAS_DELETED = 7] = "RECORDING_WAS_DELETED", _v8);
  _v0.s(["EArchiveStatus", () => _v12, "EEncoderType", () => _v11, "EEventCompletionStatus", () => _v15, "EEventLatency", 0, {
    Standard: "standard",
    Low: "low",
    FailSafe: "fail-safe"
  }, "EEventStreamingMethodVariant", 0, {
    Encoder: "encoder",
    Browser: "browser"
  }, "EIngestStatus", () => _v10, "ENTITY_STATUS", 0, {
    STARTED: "started",
    ENDED: "ended",
    EMPTY: ""
  }, "ESettingsLocation", () => _v9, "EStreamEmbedPrivacy", () => _v14, "EStreamEndedReason", () => _v16, "EStreamPrivacy", () => _v13]);
}