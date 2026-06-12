{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      free: _v2.PLANS.STARTER,
      starter: _v2.PLANS.STANDARD,
      standard: _v2.PLANS.ADVANCED,
      advanced: _v2.PLANS.ADVANCED,
      basic: _v2.PLANS.PLUS,
      plus: _v2.PLANS.PRO,
      pro: _v2.PLANS.BUSINESS,
      business: _v2.PLANS.PREMIUM,
      premium: _v2.PLANS.PREMIUM,
      creator: _v2.PLANS.PROFESSIONAL,
      professional: _v2.PLANS.STUDIO,
      studio: _v2.PLANS.ENTERPRISE,
      production: _v2.PLANS.ENTERPRISE
    },
    _v5 = {
      standard: _v2.PLANS.STANDARD,
      advanced: _v2.PLANS.ADVANCED,
      creator: _v2.PLANS.STARTER,
      professional: _v2.PLANS.ADVANCED
    },
    _v6 = _v0 => _v2.PLANS_ORDER[_v0] ?? -1,
    _v7 = _v0 => _v4[_v0] ?? _v2.PLANS.STANDARD,
    _v8 = () => {
      let _v0,
        {
          settings: _v1
        } = (0, _v1.useOrionSettings)(),
        _v2 = (0, _v3.useViewer)(),
        _v3 = (_v2?.user?.account ?? "free").toLowerCase(),
        _v4 = _v1.cold_storage_trigger_paywall_tier ?? "one_up";
      if ("one_up" === _v4) _v0 = _v7(_v3);else {
        let _v0 = _v5[_v4] ?? _v2.PLANS.STANDARD;
        _v0 = _v6(_v3) >= _v6(_v0) ? _v7(_v3) : _v0;
      }
      let _v5 = _v2.PLANS_DISPLAY_NAMES[_v0] ?? "Standard";
      return {
        tier: _v0,
        displayName: _v5
      };
    };
  _v0.s(["useColdStorageUpgradeLabel", 0, () => _v8().displayName, "useColdStorageUpgradeTier", 0, _v8]);
}