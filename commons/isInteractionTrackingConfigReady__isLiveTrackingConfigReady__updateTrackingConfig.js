{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["isInteractionTrackingConfigReady", 0, function ({
    INTERACTION_SCHEMA_BASE: {
      roomId: _v0,
      roomType: _v1
    }
  } = _v1.liveTrackingConfig) {
    return !!(_v0 && _v1);
  }, "isLiveTrackingConfigReady", 0, function ({
    LIVE_SCHEMA_BASE: {
      liveEventId: _v0,
      liveEventType: _v1
    }
  } = _v1.liveTrackingConfig) {
    return !!(_v0 && _v1);
  }, "updateTrackingConfig", 0, function (_v0, _v1 = _v1.liveTrackingConfig) {
    for (let _v0 in _v0) "object" == typeof _v1[_v0] && Object.assign(_v1[_v0], _v0[_v0]);
  }]);
}