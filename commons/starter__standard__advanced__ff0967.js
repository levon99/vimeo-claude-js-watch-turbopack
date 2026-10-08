{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
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
    _v8 = {
      standard: "standard",
      advanced: "advanced",
      creator: "starter",
      professional: "advanced"
    },
    _v9 = {
      standard: "professional",
      advanced: "professional",
      creator: "creator",
      professional: "professional"
    },
    _v10 = _v0 => (0, _v5.getTierRecommendationRank)(_v0.toLowerCase()),
    _v11 = _v0 => _v7[_v0] ?? "standard",
    _v12 = () => {
      let _v0 = (0, _v4.useOrionSetting)("cold_storage_trigger_paywall_tier"),
        {
          showIndividualPlans: _v1
        } = (0, _v1.useB2BRepackagingContext)(),
        _v2 = (0, _v6.useViewer)(),
        {
          isRepackagedFree: _v3
        } = (0, _v2.useIsRepackagedFree)(),
        _v4 = (0, _v3.useIsRepackFreeWithRepackagingCampaign)();
      return ((_v0, _v1, _v2, _v3 = !0, _v4 = !1) => {
        let _v5;
        if (!_v4) {
          let _v0 = _v11(_v0),
            _v1 = _v8[_v2] ?? "standard",
            _v2 = "one_up" === _v2 || _v10(_v0) >= _v10(_v1) ? _v0 : _v1;
          return {
            tier: _v2,
            displayName: (0, _v5.getTierDisplayName)(_v2) ?? "Standard"
          };
        }
        if (_v1 && !_v3) return {
          tier: "studio",
          displayName: (0, _v5.getTierDisplayName)("studio") ?? "Studio"
        };
        let _v6 = _v1 ? "creator" : _v11(_v0),
          _v7 = _v1 ? _v9 : _v8;
        if ("one_up" === _v2) _v5 = _v6;else {
          let _v0 = _v7[_v2] ?? "standard";
          _v5 = _v10(_v0) >= _v10(_v0) ? _v6 : _v0;
        }
        return {
          tier: _v5,
          displayName: (0, _v5.getTierDisplayName)(_v5) ?? "Standard"
        };
      })((_v2?.user?.account ?? "free").toLowerCase(), _v3, _v0 ?? "one_up", _v1, _v4);
    };
  _v0.s(["useColdStorageUpgradeLabel", 0, () => _v12().displayName, "useColdStorageUpgradeTier", 0, _v12]);
}