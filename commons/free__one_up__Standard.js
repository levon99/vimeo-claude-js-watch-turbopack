{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
      free: _v3.PLANS.STARTER,
      starter: _v3.PLANS.STANDARD,
      standard: _v3.PLANS.ADVANCED,
      advanced: _v3.PLANS.ADVANCED,
      basic: _v3.PLANS.PLUS,
      plus: _v3.PLANS.PRO,
      pro: _v3.PLANS.BUSINESS,
      business: _v3.PLANS.PREMIUM,
      premium: _v3.PLANS.PREMIUM,
      creator: _v3.PLANS.PROFESSIONAL,
      professional: _v3.PLANS.STUDIO,
      studio: _v3.PLANS.ENTERPRISE,
      production: _v3.PLANS.ENTERPRISE
    },
    _v6 = {
      standard: _v3.PLANS.STANDARD,
      advanced: _v3.PLANS.ADVANCED,
      creator: _v3.PLANS.STARTER,
      professional: _v3.PLANS.ADVANCED
    },
    _v7 = {
      standard: _v3.PLANS.PROFESSIONAL,
      advanced: _v3.PLANS.PROFESSIONAL,
      creator: _v3.PLANS.CREATOR,
      professional: _v3.PLANS.PROFESSIONAL
    },
    _v8 = _v0 => _v3.PLANS_ORDER[_v0] ?? -1,
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
        _v6 = _v3 ? _v3.PLANS.CREATOR : _v5[_v4] ?? _v3.PLANS.STANDARD;
      if ("one_up" === _v5) _v0 = _v6;else {
        let _v0 = (_v3 ? _v7 : _v6)[_v5] ?? _v3.PLANS.STANDARD;
        _v0 = _v8(_v4) >= _v8(_v0) ? _v6 : _v0;
      }
      let _v7 = _v3.PLANS_DISPLAY_NAMES[_v0] ?? "Standard";
      return {
        tier: _v0,
        displayName: _v7
      };
    };
  _v0.s(["useColdStorageUpgradeLabel", 0, () => _v9().displayName, "useColdStorageUpgradeTier", 0, _v9]);
}