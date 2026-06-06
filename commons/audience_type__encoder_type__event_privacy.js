{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createNullObject)(["audience_type", "encoder_type", "event_privacy", "is_guest_speaker", "lead_source", "live_event_id", "live_feature", "live_production_method", "live_status", "recurring_live_event_id"]);
  _v0.s(["buildLiveBpContext", 0, _v0 => ({
    live_context: new _v1.EventContext("live_context", 5, {
      ..._v2,
      ..._v0
    })
  })]);
}