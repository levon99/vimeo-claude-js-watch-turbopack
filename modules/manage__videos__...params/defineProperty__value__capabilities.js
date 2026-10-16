{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = _v0.r(0),
    _v4 = function (_v0) {
      var _v1 = _v0.capabilities,
        _v2 = _v1.hasBusiness,
        _v3 = _v1.hasPro,
        _v4 = _v1.hasProCustom,
        _v5 = _v1.hasProUnlimited,
        _v6 = _v1.hasLiveBusiness,
        _v7 = _v1.hasLivePremium;
      return _v3 || _v5 || _v4 ? [_v3.PLANS.PRO, _v3.PLANS.BUSINESS, _v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE] : _v7 ? [_v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE, _v3.PLANS.OTT] : _v2 || _v6 ? [_v3.PLANS.BUSINESS, _v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE] : _v3.DEFAULT_USER_PLANS;
    },
    _v5 = function (_v0) {
      var _v1 = _v0.capabilities,
        _v2 = _v1.hasBusiness,
        _v3 = _v1.hasPlus,
        _v4 = _v1.hasPro,
        _v5 = _v1.hasProCustom,
        _v6 = _v1.hasProUnlimited,
        _v7 = _v1.hasLiveBusiness;
      return _v2 || _v7 ? [_v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE] : _v4 || _v6 || _v5 ? [_v3.PLANS.BUSINESS, _v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE] : _v3 ? [_v3.PLANS.PRO, _v3.PLANS.BUSINESS, _v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE] : [_v3.PLANS.PLUS, _v3.PLANS.PRO, _v3.PLANS.BUSINESS, _v3.PLANS.PREMIUM, _v3.PLANS.ENTERPRISE];
    };
  _v2.default = function (_v0, _v1) {
    return _v0 && _v1 ? _v5(_v0) : _v0 && _v0.isPaid ? _v4(_v0) : _v0 ? _v3.DEFAULT_USER_PLANS : _v3.DEFAULT_DISPLAYED_PLANS;
  };
}