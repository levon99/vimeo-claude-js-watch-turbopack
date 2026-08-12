{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
    paywallTrigger: "onboarding_upsell_interstitial",
    paywallLocation: "onboarding_upsell",
    paywallType: "page",
    paywallFeature: "one_tap_upsell"
  };
  (0, _v4.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    var _v0;
    let _v1 = (0, _v2.useRouter)();
    return _v1.isReady ? (0, _v1.jsx)(_v3.OneTapUpsellPage, {
      next: "string" == typeof (_v0 = _v1.query.next) && _v0.startsWith("/") && (0, _v5.isVimeoRedirectableUrl)(_v0) ? _v0 : "/home",
      checkoutTracking: _v6
    }) : null;
  }], 0);
}