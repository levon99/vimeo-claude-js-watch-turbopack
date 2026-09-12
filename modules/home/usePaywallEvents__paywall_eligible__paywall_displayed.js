{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (_v0, _v1) => ({
    paywall_id: _v0,
    paywall_trigger: _v1.paywallTrigger,
    paywall_location: _v1.paywallLocation,
    paywall_type: _v1.paywallType,
    paywall_feature: _v1.paywallFeature,
    paywall_style: _v1.paywallStyle,
    paywall_plans_displayed: _v1.paywallPlansDisplayed,
    paywall_periodicities_displayed: _v1.paywallPeriodicitiesDisplayed
  });
  _v0.s(["usePaywallEvents", 0, function () {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v1.useRef)(null),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("paywall_eligible", {
          paywall_id: (0, _v2.v4)(),
          paywall_trigger: _v0.paywallTrigger,
          paywall_location: _v0.paywallLocation,
          paywall_type: _v0.paywallType,
          paywall_feature: _v0.paywallFeature
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return;
        let _v1 = (0, _v2.v4)();
        _v1.current = _v1;
        try {
          (0, _v4.writeStoredPaywallContext)(_v1, _v0);
        } catch {}
        _v0.track("paywall_displayed", _v5(_v1, _v0));
      }, [_v0]),
      _v4 = (0, _v1.useCallback)((_v0, _v1) => {
        let _v2 = _v1.current;
        if (null !== _v0 && null !== _v2) {
          if (_v1.current = null, "paywall_dismissed" === _v0) try {
            sessionStorage.setItem(_v4.PAYWALL_ID_STORAGE_KEY, ""), (0, _v4.clearStoredPaywallDimensions)();
          } catch {}
          _v0.track(_v0, _v5(_v2, _v1));
        }
      }, [_v0]);
    return {
      trackEligible: _v2,
      trackDisplayed: _v3,
      trackDismissed: (0, _v1.useCallback)(_v0 => _v4("paywall_dismissed", _v0), [_v4]),
      trackCtaClicked: (0, _v1.useCallback)(_v0 => _v4("paywall_cta_clicked", _v0), [_v4])
    };
  }]);
}