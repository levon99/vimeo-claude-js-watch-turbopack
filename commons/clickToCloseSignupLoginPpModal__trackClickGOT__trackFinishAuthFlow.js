{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["clickToCloseSignupLoginPpModal", 0, (_v0, _v1, _v2, _v3, _v4) => {}, "trackClickGOT", 0, _v0 => {}, "trackFinishAuthFlow", 0, _v0 => {}, "trackForgotPasswordClick", 0, (_v0, _v1) => {}, "trackJoinModalImpression", 0, _v0 => {}, "trackJoinPageClickRegFlow0625", 0, _v0 => {}, "trackJoinPageImpressionRegFlow0625", 0, _v0 => {}, "trackJoinWithEmailClick", 0, (_v0, _v1) => {}, "trackJoinWithGoogleClick", 0, (_v0, _v1) => {}, "trackLogin", 0, (_v0, _v1) => {
    _v1 && _v1.FatalAttraction.trackClick({
      container: _v1.container,
      component: "login",
      keyword: JSON.stringify({
        mode: "password" === _v0 ? "email" : _v0,
        third_party_integration: _v1?.thirdPartyIntegration || "none"
      })
    });
  }, "trackLoginModalImpression", 0, _v0 => {}, "trackLoginWithEmailClick", 0, (_v0, _v1) => {}, "trackLoginWithSocialMediaClick", 0, (_v0, _v1, _v2) => {}, "trackMarketingTermCheckbox", 0, (_v0, _v1) => {}, "trackRegistration", 0, (_v0, _v1, _v2) => {
    _v1 && _v1.FatalAttraction.trackClick({
      container: _v1.container,
      component: "join",
      keyword: JSON.stringify({
        mode: "password" === _v0 ? "email" : _v0,
        third_party_integration: _v1?.thirdPartyIntegration || "none"
      })
    });
  }, "trackViewSignupLoginScreen", 0, (_v0, _v1, _v2, _v3) => {}, "viewPricingPage", 0, (_v0, _v1) => {}]);
}