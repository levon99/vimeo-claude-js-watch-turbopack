{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = () => {
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
      _v4 = (0, _v2.serializePaywallAttribution)({
        paywallTrigger: _v0.paywallTrigger,
        paywallLocation: _v0.paywallLocation,
        paywallType: _v0.paywallType ?? "popup",
        paywallFeature: _v0.paywallFeature,
        postCheckoutUrl: _v0.postCheckoutUrl,
        satellite: _v5(),
        extra: _v1
      });
    return `${_v3}?${_v4}`;
  }, "getSatelliteCheckoutParamsFromCurrentLocation", 0, _v5, "useCheckoutTracking", 0, _v0 => {
    let _v1 = (0, _v3.usePico)(),
      _v2 = new URLSearchParams(window.location.search).has("fdsource"),
      _v3 = (0, _v1.useMemo)(() => null != _v0 ? {
        user_id: String(_v0)
      } : void 0, [_v0]),
      _v4 = (0, _v1.useCallback)((_v0, _v1) => {
        null === _v1 || _v2 || (_v3 ? _v1.track(_v0, _v1, _v3) : _v1.track(_v0, _v1));
      }, [_v1, _v2, _v3]),
      _v5 = _v4.readStoredPaywallContext,
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v4("checkout_open", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          default_payment_method: _v0.defaultPaymentMethod ?? null,
          ..._v5()
        });
      }, [_v4]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        _v4("checkout_purchase_button_clicked", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          ..._v5()
        });
      }, [_v4]);
    return {
      trackCheckoutOpen: _v6,
      trackCheckoutPurchaseButtonClicked: _v7,
      trackCheckoutFailed: (0, _v1.useCallback)(_v0 => {
        _v4("checkout_failed", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          source: _v0.source ?? null,
          decline_category: _v0.decline_category ?? null,
          failing_field: _v0.failing_field ?? null,
          http_status: _v0.http_status ?? null,
          endpoint: _v0.endpoint ?? null,
          error_message: _v0.error_message ?? null,
          error_code: _v0.error_code ?? null,
          ..._v5()
        });
      }, [_v4]),
      trackUserConverted: (0, _v1.useCallback)(_v0 => {
        _v4("user_converted", {
          tier: _v0.tier,
          periodicity: _v0.periodicity,
          is_free_trial: _v0.isFreeTrial ?? !1,
          ..._v5()
        });
      }, [_v4])
    };
  }]);
}