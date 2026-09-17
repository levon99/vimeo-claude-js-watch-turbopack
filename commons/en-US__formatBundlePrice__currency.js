{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "en-US";
  _v0.s(["formatBundlePrice", 0, ({
    amount: _v0,
    currency: _v1
  }) => new Intl.NumberFormat("" !== (0, _v1.getCurrentLocale)() ? (0, _v1.getCurrentLocale)() : _v2, {
    style: "currency",
    currency: _v1
  }).format(_v0), "roundBundlePriceAmount", 0, (_v0, _v1) => {
    let {
        maximumFractionDigits: _v2
      } = new Intl.NumberFormat(_v2, {
        style: "currency",
        currency: _v1
      }).resolvedOptions(),
      _v3 = 10 ** (_v2 ?? 2);
    return Math.round((_v0 + Number.EPSILON) * _v3) / _v3;
  }]);
}