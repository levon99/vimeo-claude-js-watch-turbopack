{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => ["ondemand", "stock"].includes(_v0),
    _v3 = _v0 => "rent" === _v0 ? "rental" : "buy" === _v0 ? "onetime" : "monthly",
    _v4 = _v0 => {
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
  }, "getActiveValidPaymentMethod", 0, _v0 => {
    if (_v0) return _v0.find(_v0 => _v0.isDefault && !(0, _v1.isPaymentMethodExpired)(_v0));
  }, "getBillingPeriod", 0, (_v0, _v1, _v2, _v3) => _v0 && _v1 ? _v0 === _v1.plans.monthly ? _v2 : _v0 === _v1.plans.annual ? _v3 : "" : "", "getCheckoutPeriodicity", 0, (_v0, _v1, _v2) => _v0 ? _v3(_v1) : _v2 ? "monthly" : "annual", "getErrorRedirectPath", 0, (_v0, _v1, _v2) => {
    if (_v0 && _v2(_v0)) try {
      let _v0 = _v1 ?? (document?.referrer !== "" ? document?.referrer : `${window.location.origin}/ondemand`),
        _v1 = new URL(_v0, window.location.origin);
      return _v1?.pathname;
    } catch {
      return "/ondemand";
    }
    if (_v2) try {
      let _v0 = Object.fromEntries(new URLSearchParams(window.location.search)),
        _v1 = _v2.getRedirectUrl(_v0),
        _v2 = new URL(_v1, window.location.origin);
      return _v2?.pathname;
    } catch {}
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
      _v5 = `${_v2} ${_v4(_v0)} annual bandwidth`;
    }
    return _v5;
  }, "getPlanType", 0, _v3, "isCreatorProductAction", 0, _v0 => "string" == typeof _v0 && ["rent", "buy", "subscribe"].includes(_v0), "isCreatorProductTier", 0, _v2, "isPayPalToken", 0, _v0 => _v0.startsWith("EC-") || _v0.startsWith("BA-"), "isRentalPlan", 0, _v0 => void 0 !== _v0.rentalTerms, "isUpgradeToPlanAlreadyOnSubscription", 0, (_v0, _v1) => !!_v0 && !!_v1?.plans?.length && _v1.plans.some(_v0 => _v0.billingPlanId === _v0), "separateNumberAndUnit", 0, _v4, "transformToOrderItemOptions", 0, _v0 => {
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