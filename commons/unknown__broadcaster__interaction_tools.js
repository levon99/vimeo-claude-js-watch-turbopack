{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7 = ((_v1 = {}).UNKNOWN = "unknown", _v1.BROADCASTER = "broadcaster", _v1.INTERACTION_TOOLS = "interaction_tools", _v1.RTMP = "rtmp", _v1.GUEST = "guest", _v1.CREATE = "create", _v1.INTERVIEW = "interview", _v1.SELECT = "select", _v1.COMPLETED = "completed", _v1),
    _v8 = ((_v2 = {}).LIVE = "live", _v2.SIMULIVE = "simulive", _v2.RECORD = "record", _v2),
    _v9 = ((_v3 = {}).PLAYING = "playing", _v3.NOT_ACTIVE = "not-active", _v3),
    _v10 = ((_v4 = {}).PAUSE = "pause_recording", _v4.RESUME = "resume_recording", _v4.RESTART = "restart_recording", _v4.DELETE = "delete_recording", _v4),
    _v11 = ((_v5 = {}).UNKNOWN = "unknown", _v5.LIVE_EVENT = "live_event", _v5.VENUE = "venue", _v5.INTERVIEW = "interview", _v5),
    _v12 = ((_v6 = {}).FIREBASE = "firebase", _v6.FIRESTORE = "firestore", _v6.AGORA = "agora", _v6);
  _v0.s(["EComposerApplicationType", () => _v7, "EComposerSessionType", () => _v11, "EComposerStreamModeType", () => _v8, "EExternalModule", () => _v12, "ERecordState", () => _v9, "ERecordStateCommand", () => _v10]);
}