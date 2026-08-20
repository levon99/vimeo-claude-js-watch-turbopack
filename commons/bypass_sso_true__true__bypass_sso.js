{
  "use strict";

  _v0.i(0);
  let _v1 = () => {
      if (window.frameElement) return document.referrer.indexOf("bypass_sso=true") >= 0;
      let _v0 = new URLSearchParams(window.location.search);
      return "true" === (_v0 && decodeURIComponent(_v0?.get("bypass_sso") || ""));
    },
    _v2 = {
      SSO: !1,
      checkInProgress: !1,
      connection: "",
      firstTimeSSOLogin: !1,
      customDomain: "",
      prevPage: null,
      showEnterpriseOptInConsent: !1,
      bypassSSO: _v1()
    },
    _v3 = async (_v0, _v1) => {
      if (!_v0) return void _v1(_v2);
      try {
        if (_v1({
          ..._v2,
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
            bypassSSO: _v1()
          });
        } else _v1(_v2);
      } catch (_v0) {
        _v1(_v2);
      }
    };
  _v0.s(["ssoDataInitialState", 0, _v2, "validateSSOEmail", 0, _v3]);
}