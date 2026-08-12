{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["formatAmountWithCurrency", 0, (_v0, _v1, _v2) => _v1.length ? new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: _v2,
    style: "currency",
    currency: _v1
  }).format(_v0).replace(String.fromCharCode(0), " ") : "", "getEventFeature", 0, _v0 => _v1.EVENT_LOCATION[_v0] === _v1.EVENT_LOCATION[_v1.PURCHASE_TRIGGERED_FROM.ONBOARDING_INVITES] ? _v1.EVENT_FEATURE_ONBOARDING : _v1.EVENT_FEATURE_TEAM_MANAGEMENT, "getIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\w+$/);
    return _v1 ? _v1[0] : "";
  }, "isPaymentExpired", 0, _v0 => {
    if (!_v0.lastFour || !_v0.expirationMonth || !_v0.expirationYear) return !1;
    let _v1 = new Date(),
      _v2 = new Date();
    return _v2.setFullYear(0 + _v0.expirationYear, _v0.expirationMonth - 1, 1), _v2.getTime() < _v1.getTime();
  }]);
}