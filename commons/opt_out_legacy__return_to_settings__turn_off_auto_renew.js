{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      legacyCancel: {
        container: "opt_out_legacy",
        component: "return_to_settings"
      },
      legacyContinue: {
        container: "opt_out_legacy",
        component: "turn_off_auto_renew"
      },
      promoRedeem: {
        container: "opt_out_promo",
        component: "redeem"
      },
      promoCheckout: {
        container: "opt_out_promo",
        component: "checkout"
      },
      promoCancel: {
        container: "opt_out_promo",
        component: "return_to_settings"
      },
      promoContinue: {
        container: "opt_out_promo",
        component: "turn_off_auto_renewal"
      },
      surveyContinue: {
        container: "opt_out_survey",
        component: "turn_off_auto_renewal"
      },
      surveyCancel: {
        container: "opt_out_survey",
        component: "return_to_settings"
      }
    },
    _v4 = {};
  _v0.s(["default", 0, (_v0, _v1 = {}) => {
    _v2.FatalAttraction.trackClick({
      ...(0, _v1.default)(_v3, _v0, {}),
      ..._v1
    }), _v2.GoogleTagManager.trackEvent((0, _v1.default)(_v4, `[${_v0}].event`, ""), (0, _v1.default)(_v4, _v0, {}));
  }], 0);
}