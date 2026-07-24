{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["SPONTANEOUS_PAYWALL_FREE_TRIAL_ELIGIBLE", 0, !0, "SPONTANEOUS_PAYWALL_TIER", 0, "starter", "useSpontaneousPaywallEligibility", 0, function () {
    let _v0 = (0, _v5.useViewer)(),
      {
        capabilities: {
          hasFreeTrialEligibility: _v1
        },
        ready: _v2
      } = (0, _v1.useCapability)(["hasFreeTrialEligibility"], _v0?.teamUser?.ownerId),
      {
        settings: _v3,
        isLoadingResponse: _v4
      } = (0, _v3.useOrionSettings)(),
      {
        isRepackagedFree: _v5
      } = (0, _v2.useIsRepackagedFree)(),
      {
        spontaneous_paywall_arm: _v6
      } = _v3,
      _v7 = !!_v0 && _v2 && !_v4,
      _v8 = (_v0?.teamUser?.accountType ?? _v0?.user?.account) === _v4.AccountType.Free;
    return {
      arm: _v6,
      isEligibleAudience: !!(_v7 && _v8 && _v1 && !_v5),
      userId: _v0?.user?.id
    };
  }], 0);
  var _v6 = _v0.i(0);
  _v0.s(["useSpontaneousPaywallTracking", 0, function () {
    let {
      trackEligible: _v0
    } = (0, _v6.usePaywallEvents)();
    return {
      trackEligible: _v0
    };
  }], 0);
}