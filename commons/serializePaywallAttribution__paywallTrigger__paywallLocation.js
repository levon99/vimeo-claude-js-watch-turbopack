{
  "use strict";

  _v0.s(["serializePaywallAttribution", 0, ({
    paywallTrigger: _v0,
    paywallLocation: _v1,
    paywallType: _v2,
    paywallFeature: _v3,
    postCheckoutUrl: _v4,
    satellite: _v5,
    extra: _v6
  }) => new URLSearchParams({
    paywall_trigger: _v0,
    paywall_location: _v1,
    paywall_type: _v2,
    paywall_feature: _v3,
    ...(_v4 ? {
      post_checkout_url: _v4
    } : void 0),
    ..._v5,
    ..._v6
  }).toString()]);
}