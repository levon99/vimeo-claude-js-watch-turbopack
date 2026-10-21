{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["usePricingPageRedirect", 0, () => {
    let _v0 = (0, _v1.useRouter)(),
      _v1 = (0, _v3.useOrionSetting)("paywall_redirect_arm"),
      _v2 = (0, _v2.useCallback)(_v0 => {
        let {
          paywallTrigger: _v1
        } = _v0.paywallTracking;
        return !!_v1 && (0, _v5.shouldRedirectToPricingPage)(_v1, {
          paywallTrigger: _v1
        });
      }, [_v1]),
      _v3 = (0, _v2.useCallback)(_v0 => {
        if (!_v2(_v0)) return !1;
        let {
          paywallTrigger: _v1,
          paywallLocation: _v2,
          paywallFeature: _v3
        } = _v0.paywallTracking;
        if (!_v1 || !_v2 || !_v3) return !1;
        let {
            upsell_name: _v4,
            feature: _v5
          } = _v0.params,
          _v6 = {};
        return _v4 && (_v6.upsell = _v4), _v5 && (_v6.feature = _v5), _v0.push((0, _v4.buildUpgradePlanUrl)({
          paywallTrigger: _v1,
          paywallLocation: _v2,
          paywallFeature: _v3
        }, _v6)), !0;
      }, [_v0, _v2]);
    return {
      shouldRedirect: _v2,
      redirect: _v3
    };
  }]);
}