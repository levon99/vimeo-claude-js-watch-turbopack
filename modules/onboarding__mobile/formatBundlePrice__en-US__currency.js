{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["formatBundlePrice", 0, ({
    amount: _v0,
    currency: _v1
  }) => new Intl.NumberFormat("" !== (0, _v1.getCurrentLocale)() ? (0, _v1.getCurrentLocale)() : "en-US", {
    style: "currency",
    currency: _v1
  }).format(_v0)]);
}