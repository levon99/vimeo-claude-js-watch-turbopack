{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useErrorPageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = function () {
        let _v0 = (0, _v3.useViewer)();
        try {
          return (0, _v4.deriveCanonicalPage)(new URL(window.location.href), {
            is_team_user: _v0?.user?.isTeamUser ?? !1
          });
        } catch {
          return "unknown";
        }
      }();
    return {
      trackErrorPageDisplayed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("error_page_displayed", {
          error_page_type: _v0.errorPageType,
          error_page_error_code: _v0.errorPageErrorCode,
          error_page_location: _v1,
          error_type: _v0.errorType
        });
      }, [_v0, _v1])
    };
  }], 0);
}