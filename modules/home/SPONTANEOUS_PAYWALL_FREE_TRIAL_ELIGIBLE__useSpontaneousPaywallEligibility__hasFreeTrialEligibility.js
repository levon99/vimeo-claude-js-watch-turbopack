{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["SPONTANEOUS_PAYWALL_FREE_TRIAL_ELIGIBLE", 0, !0, "useSpontaneousPaywallEligibility", 0, function () {
    let _v0 = (0, _v6.useViewer)(),
      {
        capabilities: {
          hasFreeTrialEligibility: _v1
        },
        ready: _v2
      } = (0, _v1.useCapability)(["hasFreeTrialEligibility"], _v0?.teamUser?.ownerId),
      _v3 = (0, _v3.useOrionLoading)(),
      _v4 = (0, _v2.useIsRepackFreeWithRepackagingCampaign)(),
      {
        spontaneous_paywall_arm: _v5,
        spontaneous_paywall_basic_enabled: _v6
      } = (0, _v4.useOrionSettingsFields)(["spontaneous_paywall_arm", "spontaneous_paywall_basic_enabled"]),
      _v7 = !!_v0 && _v2 && !_v3,
      _v8 = _v0?.teamUser?.accountType ?? _v0?.user?.account,
      _v9 = _v6 && _v8 === _v5.AccountType.Basic,
      _v10 = _v8 === _v5.AccountType.Free || _v9;
    return {
      arm: _v5,
      tier: _v9 ? "pro" : "starter",
      isEligibleAudience: !!(_v7 && _v10 && _v1 && !_v4 && !function (_v0) {
        if (!_v0) return !1;
        let _v1 = Date.parse(_v0);
        return !Number.isNaN(_v1) && new Date(_v1).toDateString() === new Date().toDateString();
      }(_v0?.user?.createdTime)),
      userId: _v0?.user?.id
    };
  }], 0);
  var _v7 = _v0.i(0);
  _v0.s(["useSpontaneousPaywallTracking", 0, function () {
    let {
      trackEligible: _v0
    } = (0, _v7.usePaywallEvents)();
    return {
      trackEligible: _v0
    };
  }], 0);
}