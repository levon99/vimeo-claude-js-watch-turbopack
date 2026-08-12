{
  "use strict";

  _v0.s(["formatUkVatPrice", 0, function (_v0, _v1) {
    if ("number" != typeof _v0) return;
    let _v2 = Math.round(1.2 * _v0 * 100) / 100,
      _v3 = _v2 % 1 == 0;
    try {
      return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: _v1,
        currencyDisplay: "narrowSymbol",
        minimumFractionDigits: 2 * !_v3,
        maximumFractionDigits: 2
      }).format(_v2);
    } catch {
      return `${_v3 ? _v2.toFixed(0) : _v2.toFixed(2)} ${_v1}`;
    }
  }, "isUkLocation", 0, _v0 => _v0?.toUpperCase() === "GB"]);
}