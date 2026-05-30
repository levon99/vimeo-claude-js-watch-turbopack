{
  "use strict";

  var _v3,
    _v4,
    _v5,
    _v6 = _v0.e && _v0.e.__spreadArrays || function () {
      for (var _v0 = 0, _v1 = 0, _v2 = arguments.length; _v1 < _v2; _v1++) _v0 += arguments[_v1].length;
      for (var _v3 = Array(_v0), _v4 = 0, _v1 = 0; _v1 < _v2; _v1++) for (var _v5 = arguments[_v1], _v6 = 0, _v7 = _v5.length; _v6 < _v7; _v6++, _v4++) _v3[_v4] = _v5[_v6];
      return _v3;
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), (_v3 = _v5 = _v2.PLANS || (_v2.PLANS = {})).BASIC = "basic", _v3.PLUS = "plus", _v3.PRO = "pro", _v3.PRO_U = "proUnlimited", _v3.BUSINESS = "business", _v3.PREMIUM = "livePremium", _v3.ENTERPRISE = "enterprise", _v3.OTT = "ott", _v3.FREE = "free", _v3.STARTER = "starter", _v3.STANDARD = "standard", _v3.ADVANCED = "advanced", _v2.DEFAULT_DISPLAYED_PLANS = [_v5.PLUS, _v5.PRO, _v5.BUSINESS, _v5.PREMIUM], _v2.DEFAULT_USER_PLANS = _v6(_v2.DEFAULT_DISPLAYED_PLANS, [_v5.ENTERPRISE]), (_v4 = {})[_v5.BASIC] = "Basic", _v4[_v5.PLUS] = "Plus", _v4[_v5.PRO] = "Pro", _v4[_v5.PRO_U] = "Pro Unlimited", _v4[_v5.BUSINESS] = "Business", _v4[_v5.PREMIUM] = "Premium", _v4[_v5.ENTERPRISE] = "Enterprise", _v4[_v5.OTT] = "OTT", _v4[_v5.FREE] = "Free", _v4[_v5.STARTER] = "Starter", _v4[_v5.STANDARD] = "Standard", _v4[_v5.ADVANCED] = "Advanced", _v2.PLANS_DISPLAY_NAMES = _v4;
}