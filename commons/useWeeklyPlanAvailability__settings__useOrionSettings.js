{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useWeeklyPlanAvailability", 0, _v0 => {
    let {
        settings: _v1
      } = (0, _v1.useOrionSettings)(),
      {
        plans: _v2
      } = (0, _v2.useGetSubscriptionPlansDataResult)([_v0], void 0, !1),
      _v3 = _v2?.find(_v0 => _v0.tier === _v0) ?? _v2?.[0];
    return {
      isReady: void 0 !== _v2,
      hasWeeklyPlan: _v1.onboarding_paywall_weekly_enabled && !!(_v3?.priceFormatted.weekly ?? _v3?.price.weekly)
    };
  }]);
}