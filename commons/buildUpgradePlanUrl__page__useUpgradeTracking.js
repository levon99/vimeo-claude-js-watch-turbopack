{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["buildUpgradePlanUrl", 0, (_v0, _v1) => {
    let _v2 = (0, _v2.serializePaywallAttribution)({
      paywallTrigger: _v0.paywallTrigger,
      paywallLocation: _v0.paywallLocation,
      paywallType: "page",
      paywallFeature: _v0.paywallFeature,
      postCheckoutUrl: _v0.postCheckoutUrl,
      extra: _v1
    });
    return `/upgrade-plan?${_v2}`;
  }, "useUpgradeTracking", 0, () => {
    let _v0 = (0, _v3.usePico)();
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