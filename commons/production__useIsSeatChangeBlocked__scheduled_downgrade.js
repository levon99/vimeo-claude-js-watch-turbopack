{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["production"];
  _v0.s(["useIsSeatChangeBlocked", 0, function ({
    tier: _v0,
    hasScheduledDowngrade: _v1 = !1
  }) {
    let {
      settings: _v2
    } = (0, _v1.useOrionSettings)();
    return _v1 ? {
      isBlocked: !0,
      reason: "scheduled_downgrade"
    } : _v2.enable_seat_changes_for_tiered ? {
      isBlocked: !1,
      reason: null
    } : _v2.includes(_v0 ?? "") ? {
      isBlocked: !0,
      reason: "tier_restricted"
    } : {
      isBlocked: !1,
      reason: null
    };
  }]);
}