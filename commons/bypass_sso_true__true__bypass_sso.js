{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = () => {
      if (window.frameElement) return document.referrer.indexOf("bypass_sso=true") >= 0;
      let _v0 = new URLSearchParams(window.location.search);
      return "true" === (_v0 && decodeURIComponent(_v0?.get("bypass_sso") || ""));
    },
    _v3 = {
      SSO: !1,
      checkInProgress: !1,
      connection: "",
      firstTimeSSOLogin: !1,
      customDomain: "",
      prevPage: null,
      showEnterpriseOptInConsent: !1,
      bypassSSO: _v2()
    },
    _v4 = async (_v0, _v1) => {
      if (!_v0) return void _v1(_v3);
      try {
        if (_v1({
          ..._v3,
          checkInProgress: !0
        }), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_v0)) {
          let _v0 = await fetch(`/sso_domains/validate/${_v0}`),
            _v1 = await _v0.json();
          _v1({
            SSO: _v1.is_valid,
            connection: _v1.sso_domain.sso_connection,
            checkInProgress: !1,
            firstTimeSSOLogin: _v1.first_time_sso_login,
            customDomain: _v1?.custom_domain || "",
            prevPage: _v1.prev_page,
            showEnterpriseOptInConsent: _v1.show_enterprise_opt_in_consent,
            bypassSSO: _v2()
          });
        } else _v1(_v3);
      } catch (_v0) {
        _v1(_v3);
      }
    };
  _v0.s(["loginViaSSO", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1 && (0, _v1.isVimeoRedirectableUrl)(_v1) ? new URL(_v1, window.location.origin).href : window.location.href,
      _v4 = window.vimeo?.xsrft || "",
      _v5 = (_v2 || "") + "/auth0/connect?connection=" + _v0 + "&prev_page=" + encodeURIComponent(_v3) + "&token=" + encodeURIComponent(_v4);
    window.location.assign(_v5);
  }, "ssoDataInitialState", 0, _v3, "validateSSOEmail", 0, _v4]);
}