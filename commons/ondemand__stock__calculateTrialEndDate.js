{
  "use strict";

  let _v1 = /^\d{5}(-\d{4})?$/,
    _v2 = _v0 => ["ondemand", "stock"].includes(_v0),
    _v3 = _v0 => {
      let _v1 = _v0.match(/^(\d+(?:\.\d+)?)([a-zA-Z]+)$/);
      if (!_v1) return _v0;
      let [, _v2, _v3] = _v1;
      return `${_v2} ${_v3}`;
    };
  _v0.s(["calculateTrialEndDate", 0, (_v0, _v1, _v2 = new Date()) => {
    let _v3 = new Date(_v2);
    switch (_v1) {
      case "days":
      default:
        _v3.setTime(_v3.getTime() + 24 * _v0 * 0);
        break;
      case "weeks":
        _v3.setTime(_v3.getTime() + 7 * _v0 * 0);
        break;
      case "months":
        _v3.setMonth(_v3.getMonth() + _v0);
        break;
      case "years":
        _v3.setFullYear(_v3.getFullYear() + _v0);
    }
    return _v3;
  }, "filterSavedPaymentMethods", 0, _v0 => {
    if ("PAYMENT_METHOD_TYPES_CC_REF" === _v0.type) return !0;
    if ("PAYMENT_METHOD_TYPES_CARD" === _v0.type) {
      let _v0 = _v0.card?.billingAddress?.country,
        _v1 = _v0.card?.billingAddress?.postalCode;
      if (!_v0 || ["US", "CA"].includes(_v0) && (!_v1 || "" === _v1)) return !1;
    }
    return !0;
  }, "getActiveValidPaymentMethod", 0, _v0 => {
    if (_v0) return _v0.find(_v0 => _v0.isDefault && !(_v0 => {
      if ("PAYMENT_METHOD_TYPES_CARD" !== _v0.type || !_v0.card) return !1;
      let {
        expirationYear: _v1,
        expirationMonth: _v2
      } = _v0.card;
      if (!_v1 || !_v2) return !1;
      let _v3 = new Date(),
        _v4 = _v3.getFullYear(),
        _v5 = _v3.getMonth() + 1;
      return _v4 > _v1 || _v4 === _v1 && _v5 > _v2;
    })(_v0));
  }, "getBillingPeriod", 0, (_v0, _v1, _v2, _v3) => _v0 && _v1 ? _v0 === _v1.plans.monthly ? _v2 : _v0 === _v1.plans.annual ? _v3 : "" : "", "getErrorRedirectPath", 0, (_v0, _v1, _v2) => {
    if (_v0 && _v2(_v0)) try {
      let _v0 = _v1 ?? (document?.referrer !== "" ? document?.referrer : `${window.location.origin}/ondemand`),
        _v1 = new URL(_v0, window.location.origin);
      return _v1?.pathname;
    } catch (_v0) {
      return "/ondemand";
    }
    if (_v2) try {
      let _v0 = Object.fromEntries(new URLSearchParams(window.location.search)),
        _v1 = _v2.getRedirectUrl(_v0),
        _v2 = new URL(_v1, window.location.origin);
      return _v2?.pathname;
    } catch (_v0) {}
    return "/upgrade";
  }, "getFinalProductName", 0, (_v0, _v1) => {
    if (!_v0) return "";
    let {
        name: _v2,
        plans: _v3,
        isBandwidthProduct: _v4
      } = _v0,
      _v5 = _v2;
    if (_v4) {
      let _v0 = _v3[_v1 ? "altAnnual" : "annual"].features.bandwidth.periodicQuota || "";
      _v5 = `${_v2} ${_v3(_v0)} annual bandwidth`;
    }
    return _v5;
  }, "getPlanType", 0, _v0 => "rent" === _v0 ? "rental" : "buy" === _v0 ? "onetime" : "monthly", "isCreatorProductAction", 0, _v0 => "string" == typeof _v0 && ["rent", "buy", "subscribe"].includes(_v0), "isCreatorProductTier", 0, _v2, "isPayPalToken", 0, _v0 => _v0.startsWith("EC-") || _v0.startsWith("BA-"), "isRentalPlan", 0, _v0 => void 0 !== _v0.rentalTerms, "isUsZipCodeFormatValid", 0, _v0 => _v1.test(_v0.trim()), "isZipCodeIsRequiredAutorenewalOptInRange", 0, _v0 => 5 === _v0.length && [["05001", "05495"], ["05601", "05907"], ["80001", "81658"], ["90001", "96162"]].some(_v0 => _v0[0] <= _v0 && _v0 <= _v0[1]), "separateNumberAndUnit", 0, _v3, "transformToOrderItemOptions", 0, _v0 => {
    let {
      billingPlanId: _v1,
      productId: _v2,
      quantity: _v3
    } = _v0;
    return {
      billingPlanId: _v1,
      productId: _v2,
      quantity: _v3
    };
  }]);
}