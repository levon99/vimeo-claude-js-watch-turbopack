{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = new Set([..._v2.DEFAULT_TIER_ORDER.filter(_v0 => "enterprise" !== _v0), ..._v2.LEGACY_TIER_ORDER.filter(_v0 => "enterprise" !== _v0), ..._v2.REPACKAGING_TIER_ORDER.filter(_v0 => "free" !== _v0 && "production" !== _v0 && "enterprise" !== _v0)]),
    _v4 = {
      standard: {
        default: "standard",
        legacy: "pro",
        repackaging: "professional"
      },
      advanced: {
        default: "advanced",
        legacy: "business",
        repackaging: "professional"
      },
      creator: {
        default: "starter",
        legacy: "plus",
        repackaging: "creator"
      },
      professional: {
        default: "advanced",
        legacy: "business",
        repackaging: "professional"
      }
    },
    _v5 = _v0 => (0, _v2.getTierRecommendationRank)(_v0),
    _v6 = ({
      currentTier: _v0,
      tierSetting: _v1,
      plansData: _v2,
      excludePlans: _v3 = [],
      variant: _v4
    }) => {
      let _v5,
        _v6 = _v2.find(_v0 => "creator" === _v0.tier),
        _v7 = new Set("privacy" === _v4 && (0, _v1.isCreatorRestrictedForFeature)({
          creatorPlan: _v6,
          feature: "privacy"
        }) ? [..._v3, "creator"] : _v3),
        _v8 = _v2.filter(_v0 => !_v7.has(_v0.tier)),
        _v9 = [..._v8].filter(_v0 => _v5(_v0.tier) > _v5(_v0)).sort((_v0, _v1) => _v5(_v0.tier) - _v5(_v1.tier))[0]?.tier ?? null,
        _v10 = null !== _v9 && _v3.has(_v9) ? _v9 : null;
      if ("one_up" === _v1) return _v10;
      let _v11 = _v4[_v1][(_v5 = new Set(_v2.map(_v0 => _v0.tier))).has("production") || _v5.has("professional") ? "repackaging" : _v5.has("livePremium") ? "legacy" : "default"];
      return _v5(_v0) >= _v5(_v11) ? _v10 : _v8.some(_v0 => _v0.tier === _v11 && _v5(_v0.tier) > _v5(_v0)) ? _v11 : _v10;
    };
  _v0.s(["getRecommendedTierDisplayName", 0, _v0 => {
    let _v1 = _v6(_v0);
    if (!_v1) return {
      tier: null,
      displayName: null
    };
    let _v2 = _v0.plansData.find(_v0 => _v0.tier === _v1)?.name;
    return {
      tier: _v1,
      displayName: _v2 ?? (0, _v2.getTierDisplayName)(_v1) ?? null
    };
  }, "resolveRecommendedTier", 0, _v6]);
}