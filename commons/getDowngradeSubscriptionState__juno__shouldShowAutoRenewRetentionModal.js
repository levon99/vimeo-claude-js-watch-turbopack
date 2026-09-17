{
  "use strict";

  _v0.s(["getDowngradeSubscriptionState", 0, (_v0, _v1) => {
    let _v2 = _v0?.gracePeriodType ?? null;
    return {
      subscriptionId: _v0?.subscriptionId ?? "",
      subscriptionEndDate: _v0?.endDate ?? "",
      gracePeriodType: _v2,
      isInGracePeriod: null !== _v2,
      supportsGraceDowngrade: _v0?.vendor === "juno",
      hasAutorenew: _v1 || null == _v0 || !0 === _v0.hasAutorenew
    };
  }, "shouldShowAutoRenewRetentionModal", 0, (_v0, _v1) => !_v0 && !_v1]);
}