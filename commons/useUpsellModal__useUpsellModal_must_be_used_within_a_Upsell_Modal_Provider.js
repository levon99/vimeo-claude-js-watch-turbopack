{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useUpsellModal", 0, () => {
    let {
        setModalContextState: _v0
      } = (0, _v2.useContext)(_v6.ModalContextDispatch),
      {
        settings: _v1
      } = (0, _v3.useOrionSettings)(),
      _v2 = (0, _v1.useRouter)();
    if (!_v0) throw Error("useUpsellModal must be used within a Upsell Modal Provider");
    return {
      close: (0, _v2.useCallback)(() => _v0({
        isActive: !1,
        state: null
      }), [_v0]),
      open: (0, _v2.useCallback)(_v0 => {
        if ((0, _v5.shouldRedirectToPricingPage)(_v1.paywall_redirect_arm, {
          paywallTrigger: _v0.tracking.paywallTracking.paywallTrigger
        })) {
          let {
              paywallTrigger: _v0,
              paywallLocation: _v1,
              paywallFeature: _v2
            } = _v0.tracking.paywallTracking,
            {
              upsell_name: _v3,
              feature: _v4
            } = _v0.tracking.params;
          _v2.push((0, _v4.buildUpgradePlanUrl)({
            paywallTrigger: _v0,
            paywallLocation: _v1,
            paywallFeature: _v2
          }, {
            upsell: _v3,
            feature: _v4
          }));
          return;
        }
        _v0({
          isActive: !0,
          state: _v0
        });
      }, [_v0, _v2, _v1.paywall_redirect_arm])
    };
  }]);
}