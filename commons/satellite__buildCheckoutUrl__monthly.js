{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => {
    let _v0 = new URLSearchParams(window.location.search),
      _v1 = {};
    return _v0.forEach((_v0, _v1) => {
      _v1.startsWith("satellite_") && (_v1[_v1] = _v0);
    }), Object.keys(_v1).length > 0 ? _v1 : void 0;
  };
  _v0.s(["buildCheckoutUrl", 0, (_v0, _v1) => {
    let _v2 = [`/checkout/${_v0.tier}`];
    _v0.isMonthly && _v2.push("/monthly"), _v0.isTrial && _v2.push("/trial");
    let _v3 = _v2.join(""),
      _v4 = new URLSearchParams({
        paywall_trigger: _v0.paywallTrigger,
        paywall_location: _v0.paywallLocation,
        paywall_type: _v0.paywallType ?? "popup",
        paywall_feature: _v0.paywallFeature,
        ..._v4(),
        ..._v1
      });
    return `${_v3}?${_v4.toString()}`;
  }, "getSatelliteCheckoutParamsFromCurrentLocation", 0, _v4, "useCheckoutTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = new URLSearchParams(window.location.search).has("fdsource"),
      _v2 = () => {
        let _v0 = new URLSearchParams(window.location.search),
          _v1 = _v0 => sessionStorage.getItem(_v0) ?? null,
          _v2 = _v0 => _v0?.get(_v0) || null;
        return {
          paywall_id: _v1(_v3.PAYWALL_ID_STORAGE_KEY),
          paywall_trigger: _v1(_v3.PAYWALL_TRIGGER_STORAGE_KEY) ?? _v2("paywall_trigger"),
          paywall_feature: _v1(_v3.PAYWALL_FEATURE_STORAGE_KEY) ?? _v2("paywall_feature"),
          paywall_location: _v1(_v3.PAYWALL_LOCATION_STORAGE_KEY) ?? _v2("paywall_location")
        };
      },
      _v3 = (0, _v1.useCallback)(_v0 => {
        null === _v0 || _v1 || _v0.track("checkout_open", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          default_payment_method: _v0.defaultPaymentMethod ?? null,
          ..._v2()
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null === _v0 || _v1 || _v0.track("checkout_purchase_button_clicked", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          ..._v2()
        });
      }, [_v0]);
    return {
      trackCheckoutOpen: _v3,
      trackCheckoutPurchaseButtonClicked: _v4,
      trackCheckoutFailed: (0, _v1.useCallback)(_v0 => {
        null === _v0 || _v1 || _v0.track("checkout_failed", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          error_message: _v0.error_message ?? null,
          error_code: _v0.error_code ?? null,
          ..._v2()
        });
      }, [_v0]),
      trackUserConverted: (0, _v1.useCallback)(_v0 => {
        null === _v0 || _v1 || _v0.track("user_converted", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          ..._v2()
        });
      }, [_v0])
    };
  }]);
}