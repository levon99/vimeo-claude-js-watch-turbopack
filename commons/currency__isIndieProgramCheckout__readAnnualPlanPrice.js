{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1, _v2) => new Intl.NumberFormat(_v1, {
    style: "currency",
    currency: _v2,
    maximumFractionDigits: 0
  }).format(_v0);
  _v0.s(["isIndieProgramCheckout", 0, _v0 => _v0?.id === _v1.INDIE_PROGRAM_BILLING_PLAN_ID, "readAnnualPlanPrice", 0, _v0 => {
    if (null == _v0 || "object" != typeof _v0) return null;
    let _v1 = _v0.price?.amount,
      _v2 = _v0.price?.currency;
    return "number" != typeof _v1 || "string" != typeof _v2 ? null : {
      amount: _v1,
      currency: _v2,
      monthlyFormatted: "string" == typeof _v0.priceMonthly?.formatted ? _v0.priceMonthly.formatted : void 0
    };
  }, "resolveIndieProgramPricing", 0, (_v0, _v1, _v2) => {
    let {
        amount: _v3,
        currency: _v4
      } = _v0.price,
      _v5 = null != _v1 && 0 !== _v1.amount;
    return {
      listMonthly: _v5 ? _v1.monthlyFormatted ?? _v2(Math.round(_v1.amount / 12), _v2, _v1.currency) : null,
      discountedAnnual: _v2(_v3, _v2, _v4),
      discountedMonthly: _v2(Math.round(_v3 / 12), _v2, _v4),
      discountPercent: _v5 ? Math.round((1 - _v3 / _v1.amount) * 100) : null
    };
  }]);
}