{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
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
    _v6 = {
      standard: "standard",
      advanced: "advanced",
      creator: "starter",
      professional: "advanced"
    },
    _v7 = {
      standard: "professional",
      advanced: "professional",
      creator: "creator",
      professional: "professional"
    },
    _v8 = _v0 => (0, _v3.getTierRecommendationRank)(_v0.toLowerCase()),
    _v9 = () => {
      let _v0,
        {
          settings: _v1
        } = (0, _v2.useOrionSettings)(),
        _v2 = (0, _v4.useViewer)(),
        {
          isRepackagedFree: _v3
        } = (0, _v1.useIsRepackagedFree)(),
        _v4 = (_v2?.user?.account ?? "free").toLowerCase(),
        _v5 = _v1.cold_storage_trigger_paywall_tier ?? "one_up",
        _v6 = _v3 ? "creator" : _v5[_v4] ?? "standard";
      if ("one_up" === _v5) _v0 = _v6;else {
        let _v0 = (_v3 ? _v7 : _v6)[_v5] ?? "standard";
        _v0 = _v8(_v4) >= _v8(_v0) ? _v6 : _v0;
      }
      return {
        tier: _v0,
        displayName: (0, _v3.getTierDisplayName)(_v0) ?? "Standard"
      };
    };
  _v0.s(["useColdStorageUpgradeLabel", 0, () => _v9().displayName, "useColdStorageUpgradeTier", 0, _v9]);
}