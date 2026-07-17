{
  "use strict";

  let _v1 = {
      CARD_BRAND_AMERICAN_EXPRESS: "Amex",
      CARD_BRAND_DISCOVER: "Discover",
      CARD_BRAND_JCB: "JCB",
      CARD_BRAND_MASTER_CARD: "Mastercard",
      CARD_BRAND_UNION_PAY: "UnionPay",
      CARD_BRAND_VISA: "Visa"
    },
    _v2 = {
      PAYMENT_METHOD_TYPES_APPLEPAY: "Apple Pay",
      PAYMENT_METHOD_TYPES_PAYPAL: "PayPal"
    },
    _v3 = "/checkout/payments/new";
  _v0.s(["PAYMENT_TYPE_FALLBACK_LABEL", 0, {
    amex: "Amex",
    visa: "Visa",
    mastercard: "Mastercard",
    discover: "Discover",
    jcb: "JCB",
    china_unionpay: "UnionPay",
    creditcard: "Card",
    paypal: "PayPal",
    applepay: "Apple Pay"
  }, "buildGracePeriodCheckoutHref", 0, function (_v0) {
    let _v1 = new URLSearchParams();
    _v0?.routeThroughDunning && _v1.set("source", "dunning"), _v0?.returnUrl && _v1.set("return_url", _v0.returnUrl);
    let _v2 = _v1.toString();
    return _v2 ? `${_v3}?${_v2}` : _v3;
  }, "daysUntil", 0, function (_v0) {
    if (!_v0) return 0;
    let _v1 = new Date(_v0).getTime();
    if (Number.isNaN(_v1)) return 0;
    let _v2 = Math.ceil((_v1 - Date.now()) / 0);
    return _v2 > 0 ? _v2 : 0;
  }, "formatSuspensionDate", 0, function (_v0) {
    if (!_v0) return "";
    let _v1 = new Date(_v0);
    if (Number.isNaN(_v1.getTime())) return "";
    let _v2 = "u" > typeof navigator && navigator.language || "en-US";
    return _v1.toLocaleString(_v2, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short"
    });
  }, "getPaymentsServiceCardBrandLabel", 0, function (_v0) {
    return _v0 ? _v0.card?.brand ? _v1[_v0.card.brand] ?? "Card" : _v0.type ? _v2[_v0.type] ?? "Card" : "Card" : "";
  }]);
}