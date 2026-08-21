{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useAgeVerificationTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("age_verification_displayed", {}), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("age_verification_passed", {}), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("age_verification_failed", {}), !0), [_v0]);
    return {
      trackAgeVerificationDisplayed: _v1,
      trackAgeVerificationPassed: _v2,
      trackAgeVerificationFailed: _v3,
      trackViewPageAgeVerificationDisplayed: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("view_page_age_verification_displayed", {}), !0), [_v0]),
      trackViewPageAgeVerificationClicked: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("view_page_age_verification_clicked", {}), !0), [_v0])
    };
  }]);
}