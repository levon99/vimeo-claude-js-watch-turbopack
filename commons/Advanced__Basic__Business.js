{
  "use strict";

  let _v1 = {
      advanced: "Advanced",
      basic: "Basic",
      business: "Business",
      core: "Core",
      creator: "Creator",
      customSelfServe: "Custom",
      enterprise: "Enterprise",
      free: "Free",
      livePremium: "Premium",
      ott: "OTT",
      plus: "Plus",
      pro: "Pro",
      proSolution: "Pro",
      proUnlimited: "Pro Unlimited",
      production: "Production",
      professional: "Professional",
      standard: "Standard",
      starter: "Starter",
      studio: "Studio",
      team: "Team",
      teamLive: "Team Live"
    },
    _v2 = {
      free: 0,
      creator: 1,
      starter: 1,
      plus: 1,
      standard: 2,
      core: 2,
      pro: 2,
      professional: 3,
      advanced: 3,
      proUnlimited: 3,
      studio: 4,
      business: 4,
      production: 5,
      livePremium: 5,
      enterprise: 6
    },
    _v3 = {
      basic: 0,
      plus: 1,
      pro: 2,
      business: 3,
      livePremium: 4,
      free: 0,
      starter: 1,
      standard: 2,
      advanced: 3,
      proSolution: 1,
      team: 2,
      teamLive: 3,
      enterprise: 4,
      creator: 1,
      core: 2,
      professional: 3,
      studio: 4,
      production: 5
    },
    _v4 = ["free", "starter", "standard", "advanced", "enterprise"],
    _v5 = ["basic", "plus", "pro", "business", "livePremium", "enterprise"],
    _v6 = ["free", "creator", "core", "professional", "studio", "production", "enterprise"],
    _v7 = ["free", "proSolution", "team", "teamLive", "enterprise"],
    _v8 = ["free", "starter", "standard", "advanced", "customSelfServe", "enterprise"],
    _v9 = ["plus", "pro", "proUnlimited", "business", "livePremium", "enterprise"],
    _v10 = {
      default: _v4,
      legacy: _v5,
      repackaging: _v6,
      solution: _v7,
      selfServe: _v8,
      flatRate: _v9
    },
    _v11 = (_v0, _v1) => _v10[_v1].includes(_v0),
    _v12 = _v0 => "free" !== _v0 && _v11(_v0, "repackaging");
  _v0.s(["DEFAULT_TIER_ORDER", 0, _v4, "FLAT_RATE_TIER_ORDER", 0, _v9, "LEGACY_TIER_ORDER", 0, _v5, "REPACKAGING_TIER_ORDER", 0, _v6, "SELF_SERVE_TIER_ORDER", 0, _v8, "SOLUTION_TIER_ORDER", 0, _v7, "getNextTierInFamily", 0, (_v0, _v1) => {
    let _v2 = _v10[_v1],
      _v3 = _v2.indexOf(_v0);
    if (!(_v3 < 0) && _v3 !== _v2.length - 1) return _v2[_v3 + 1];
  }, "getTierComparisonRank", 0, _v0 => _v2[_v0], "getTierDisplayName", 0, _v0 => _v1[_v0], "getTierRecommendationRank", 0, _v0 => _v3[_v0] ?? -1, "getTiersAtOrAbove", 0, (_v0, _v1) => {
    let _v2 = _v10[_v1],
      _v3 = _v2.indexOf(_v0);
    return _v3 < 0 ? [] : _v2.slice(_v3);
  }, "isFlatRateTier", 0, _v0 => _v11(_v0, "flatRate"), "isPaidRepackagingTier", 0, _v12, "isRepackagingSelfServeTier", 0, _v0 => _v12(_v0) && "enterprise" !== _v0, "isSolutionTier", 0, _v0 => _v11(_v0, "solution"), "isTierInFamily", 0, _v11, "normalizeTier", 0, _v0 => _v0.toLowerCase().replace(/_([a-z])/g, (_v0, _v1) => _v1.toUpperCase())]);
}