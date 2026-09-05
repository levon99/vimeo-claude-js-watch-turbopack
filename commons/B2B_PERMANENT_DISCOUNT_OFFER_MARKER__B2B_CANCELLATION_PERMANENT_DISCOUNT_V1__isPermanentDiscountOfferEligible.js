{
  "use strict";

  _v0.s(["B2B_PERMANENT_DISCOUNT_OFFER_MARKER", 0, "B2B_CANCELLATION_PERMANENT_DISCOUNT_V1", "isPermanentDiscountOfferEligible", 0, function ({
    isSettingEnabled: _v0,
    hasAutorenew: _v1,
    scheduledTier: _v2,
    areBusinessPlansEnforced: _v3,
    isWhitelistedForIndPlans: _v4
  }) {
    return _v0 && _v3 && !_v4 && !_v1 && "studio" === _v2;
  }]);
}