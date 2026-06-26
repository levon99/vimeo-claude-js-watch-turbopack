{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "paywall_id",
    _v5 = "paywall_trigger",
    _v6 = "paywall_location",
    _v7 = "paywall_type",
    _v8 = "paywall_feature";
  _v0.s(["PAYWALL_FEATURE_STORAGE_KEY", 0, _v8, "PAYWALL_ID_STORAGE_KEY", 0, _v4, "PAYWALL_LOCATION_STORAGE_KEY", 0, _v6, "PAYWALL_TRIGGER_STORAGE_KEY", 0, _v5, "PAYWALL_TYPE_STORAGE_KEY", 0, _v7, "usePaywallTracking", 0, _v0 => {
    let {
        paywallTrigger: _v1,
        paywallLocation: _v2,
        paywallType: _v3,
        paywallFeature: _v4,
        isVisible: _v5
      } = _v0,
      _v6 = (0, _v3.usePico)();
    return (0, _v1.useEffect)(() => {
      if (!_v5 || null === _v6) return;
      let _v0 = (0, _v2.v4)();
      sessionStorage.setItem(_v4, _v0), sessionStorage.setItem(_v5, _v1), sessionStorage.setItem(_v6, _v2), sessionStorage.setItem(_v7, _v3), sessionStorage.setItem(_v8, _v4), _v6.track("paywall_displayed", {
        paywall_id: _v0,
        paywall_trigger: _v1,
        paywall_location: _v2,
        paywall_type: _v3,
        paywall_feature: _v4
      });
    }, [_v6, _v1, _v2, _v3, _v4, _v5]), {
      trackPaywallDismissed: () => {
        let _v0 = sessionStorage.getItem(_v4) ?? "unknown";
        sessionStorage.setItem(_v4, ""), null !== _v6 && _v6.track("paywall_dismissed", {
          paywall_id: _v0,
          paywall_trigger: _v1,
          paywall_location: _v2,
          paywall_type: _v3,
          paywall_feature: _v4
        });
      },
      trackPaywallCtaClicked: (_v0 = "primary") => {
        let _v1 = sessionStorage.getItem(_v4) ?? "unknown";
        null !== _v6 && _v6.track("paywall_cta_clicked", {
          paywall_id: _v1,
          paywall_trigger: _v1,
          paywall_location: _v2,
          paywall_type: _v3,
          paywall_feature: _v4,
          paywall_cta: _v0
        });
      }
    };
  }]);
}