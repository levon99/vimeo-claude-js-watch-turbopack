{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["buildUpgradePlanUrl", 0, (_v0, _v1) => {
    let _v2 = new URLSearchParams({
      paywall_trigger: _v0.paywallTrigger,
      paywall_location: _v0.paywallLocation,
      paywall_type: "page",
      paywall_feature: _v0.paywallFeature,
      ...(_v0.postCheckoutUrl ? {
        post_checkout_url: _v0.postCheckoutUrl
      } : void 0),
      ..._v1
    });
    return `/upgrade-plan?${_v2.toString()}`;
  }, "useUpgradeTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackUpgradeButtonClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("upgrade_button_clicked", {
          button_name: _v0.name,
          button_location: _v0.location,
          target_url: _v0.targetUrl ?? null,
          page_url: window.location.href
        });
      }, [_v0])
    };
  }]);
}