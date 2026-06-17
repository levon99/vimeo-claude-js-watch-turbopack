{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = ((_v1 = {}).UPLOAD = "UPLOAD", _v1.CREATE = "CREATE", _v1.LIVE = "LIVE", _v1.RECORD = "RECORD", _v1),
    _v5 = ((_v2 = {}).UPLOAD = "videos", _v2.CREATE = "video-maker", _v2.LIVE = "live-event", _v2.RECORD = "screen-recording", _v2),
    _v6 = ((_v3 = {}).Periodic = "send_quota_email", _v3.Lifetime = "send_total_cap_email", _v3);
  _v0.s(["ACCEPTED_FILE_EXT", 0, [".mpg", ".mpeg", ".mp4", ".m4v", ".avi", ".mov", ".flv", ".webm"], "BREAKPOINTS", 0, {
    small: 480,
    medium: 769,
    mediumLarge: 0,
    large: 0
  }, "QuotaEmailTypes", () => _v6, "UPLOAD_ROUTES", () => _v5, "UPLOAD_ROUTES_TYPE_MAP", 0, {
    videos: "UPLOAD",
    "video-maker": "CREATE",
    "live-event": "LIVE",
    "screen-recording": "RECORD"
  }, "UPLOAD_TYPES", () => _v4, "UPLOAD_TYPE_TO_TAB", 0, {
    UPLOAD: "upload",
    RECORD: "record",
    CREATE: "create",
    LIVE: "event"
  }]);
}