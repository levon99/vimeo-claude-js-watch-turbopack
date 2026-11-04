{
  "use strict";

  let _v1 = (_v0, _v1) => {
    if (!_v0) return null;
    let _v2 = "annual" === _v1 ? _v0.price.annual : "monthly" === _v1 ? _v0.price.monthly : _v0.price.weekly;
    return "number" == typeof _v2 && _v2 > 0 ? _v2 : null;
  };
  _v0.s(["comparePlanPrices", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1(_v0, _v2),
      _v4 = _v1(_v1, _v2);
    return null === _v3 || null === _v4 ? "unknown" : _v4 > _v3 ? "higher" : _v4 < _v3 ? "lower" : "equal";
  }]);
}