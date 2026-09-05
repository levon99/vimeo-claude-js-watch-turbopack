{
  "use strict";

  _v0.s(["resolveStudioRenewalDiscount", 0, function ({
    studioPlan: _v0,
    professionalPlan: _v1,
    isAnnual: _v2
  }) {
    let _v3 = _v2 ? _v0?.price?.annualMonthly : _v0?.price?.monthly,
      _v4 = _v2 ? _v1?.price?.annualMonthly : _v1?.price?.monthly;
    return null == _v3 || null == _v4 || _v4 <= 0 || _v4 >= _v3 ? null : {
      savingsPercent: Math.floor((_v3 - _v4) / _v3 * 100),
      discountedMonthlyPrice: _v4,
      fullMonthlyPrice: _v3
    };
  }]);
}