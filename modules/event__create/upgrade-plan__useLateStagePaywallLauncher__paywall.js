{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = "/upgrade-plan",
    _v9 = new Set([..._v6.DEFAULT_SEAT_PLANS, ..._v6.LEGACY_PLANS, ..._v6.NEW_PLANS]);
  _v0.s(["useLateStagePaywallLauncher", 0, ({
    apiUrl: _v0,
    userConfig: _v1,
    modalConfig: _v2
  }) => {
    let {
        settings: _v3
      } = (0, _v3.useOrionSettings)(),
      _v4 = _v3.paywall_redirect_arm,
      [_v5, _v6] = (0, _v2.useState)(null),
      [_v7, _v8] = (0, _v2.useState)(!1),
      _v9 = (0, _v2.useCallback)(() => {
        _v8(!1);
      }, []);
    return {
      isOpen: _v7,
      close: _v9,
      openFromUpgradePlanUrl: (0, _v2.useCallback)(_v0 => {
        let _v1;
        if (!(0, _v7.isBspLateStagePaywallKind)(_v3.late_stage_paywall_kind) || !_v1.jwt || !(void 0 !== (_v1 = _v1.accountType) && _v9.has(_v1))) return !1;
        let _v2 = (_v0 => {
          try {
            let _v0 = new URL(_v0, window.location.origin);
            if (_v0.pathname !== _v8) return null;
            let _v1 = _v0.searchParams,
              _v2 = _v1.get("paywall"),
              _v3 = _v1.get("paywall_trigger"),
              _v4 = _v1.get("paywall_location"),
              _v5 = _v1.get("paywall_feature");
            if ("1" !== _v2 || !_v3 || !_v4 || !_v5) return null;
            let _v6 = _v1.get("feature"),
              _v7 = _v1.get("location");
            return {
              params: {
                upsell_name: _v1.get("upsell"),
                page: _v1.get("page") ?? _v4,
                feature: _v6 ?? _v5,
                location: _v7 ?? _v4,
                target: _v8,
                integration: _v1.get("integration")
              },
              paywallTracking: {
                paywallTrigger: _v3,
                paywallLocation: _v4,
                paywallType: "popup",
                paywallFeature: _v5
              }
            };
          } catch (_v0) {
            return null;
          }
        })(_v0);
        return !(!_v2 || (0, _v4.shouldRedirectToPricingPage)(_v4, {
          paywallTrigger: _v2.paywallTracking.paywallTrigger
        })) && (_v6(_v2), _v8(!0), !0);
      }, [_v4, _v3.late_stage_paywall_kind, _v1.jwt, _v1.accountType]),
      lateStagePaywallModal: _v7 && _v5 ? (0, _v1.jsx)(_v5.default, {
        apiUrl: _v0,
        userConfig: _v1,
        templateType: "default",
        onClose: _v9,
        modalConfig: _v2,
        tracking: _v5
      }) : null
    };
  }]);
}