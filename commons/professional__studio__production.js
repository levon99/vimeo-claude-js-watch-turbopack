{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      custom_logo: ["professional", "studio", "production", "enterprise"],
      privacy: ["creator", "core", "professional", "studio", "production", "enterprise"]
    },
    _v3 = {
      free: 0,
      creator: 1,
      core: 2,
      professional: 3,
      studio: 4,
      production: 5,
      enterprise: 6
    };
  _v0.s(["getFeatureFloorRank", 0, _v0 => {
    let _v1 = _v2[_v0];
    if (_v1 && "privacy" !== _v0) return Math.min(..._v1.map(_v0 => _v3[_v0]));
  }, "isCreatorRestrictedForFeature", 0, ({
    creatorPlan: _v0,
    feature: _v1
  }) => "privacy" === _v1 && ((0, _v1.isCreatorV2Plan)(_v0) || (0, _v1.isCreatorJuly2026Plan)(_v0))]);
}