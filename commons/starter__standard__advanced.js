{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
      free: "starter",
      starter: "standard",
      standard: "advanced",
      advanced: "advanced",
      basic: "plus",
      plus: "pro",
      pro: "business",
      business: "livePremium",
      premium: "livePremium",
      creator: "professional",
      professional: "studio",
      studio: "enterprise",
      production: "enterprise"
    },
    _v7 = {
      standard: "standard",
      advanced: "advanced",
      creator: "starter",
      professional: "advanced"
    },
    _v8 = {
      standard: "professional",
      advanced: "professional",
      creator: "creator",
      professional: "professional"
    },
    _v9 = _v0 => (0, _v4.getTierRecommendationRank)(_v0.toLowerCase()),
    _v10 = () => {
      let {
          settings: _v0
        } = (0, _v3.useOrionSettings)(),
        {
          showIndividualPlans: _v1
        } = (0, _v1.useB2BRepackagingContext)(),
        _v2 = (0, _v5.useViewer)(),
        {
          isRepackagedFree: _v3
        } = (0, _v2.useIsRepackagedFree)();
      return ((_v0, _v1, _v2, _v3 = !0) => {
        let _v4;
        if (_v1 && !_v3) return {
          tier: "studio",
          displayName: (0, _v4.getTierDisplayName)("studio") ?? "Studio"
        };
        let _v5 = _v1 ? "creator" : _v6[_v0] ?? "standard";
        if ("one_up" === _v2) _v4 = _v5;else {
          let _v0 = (_v1 ? _v8 : _v7)[_v2] ?? "standard";
          _v4 = _v9(_v0) >= _v9(_v0) ? _v5 : _v0;
        }
        return {
          tier: _v4,
          displayName: (0, _v4.getTierDisplayName)(_v4) ?? "Standard"
        };
      })((_v2?.user?.account ?? "free").toLowerCase(), _v3, _v0.cold_storage_trigger_paywall_tier ?? "one_up", _v1);
    };
  _v0.s(["useColdStorageUpgradeLabel", 0, () => _v10().displayName, "useColdStorageUpgradeTier", 0, _v10]);
}