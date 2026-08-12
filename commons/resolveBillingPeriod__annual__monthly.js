{
  "use strict";

  _v0.s(["resolveBillingPeriod", 0, (_v0, _v1) => {
    let _v2 = _v0.id?.annual != null,
      _v3 = _v0.id?.monthly != null;
    return "annual" === _v1 && !_v2 && _v3 ? "monthly" : "monthly" === _v1 && !_v3 && _v2 ? "annual" : _v1;
  }]);
}