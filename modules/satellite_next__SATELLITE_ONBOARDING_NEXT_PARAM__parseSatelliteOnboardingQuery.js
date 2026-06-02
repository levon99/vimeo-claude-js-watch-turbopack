{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "satellite_next",
    _v4 = /^[a-z0-9_-]+$/i,
    _v5 = new Set(Object.values(_v2.PLANS)),
    _v6 = _v0 => "string" == typeof _v0 ? _v0 : Array.isArray(_v0) ? _v0[0] : void 0;
  _v0.s(["SATELLITE_ONBOARDING_NEXT_PARAM", 0, _v3, "parseSatelliteOnboardingQuery", 0, _v0 => {
    var _v1;
    let _v2,
      _v3,
      _v4 = (_v2 = _v6(_v0.satellite_flow)) && _v4.test(_v2) ? _v2 : "satellite",
      _v5 = (_v3 = _v6(_v0[_v3])) && _v3.startsWith("/") && (0, _v1.isVimeoRedirectableUrl)(_v3) ? _v3 : "/",
      _v6 = (_v1 = _v6(_v0.paywall_exclude_plans)) ? [...new Set(_v1.split(",").map(_v0 => _v0.trim()))].filter(_v0 => _v5.has(_v0)).map(_v0 => _v0) : [];
    return {
      flow: _v4,
      next: _v5,
      modalConfig: {
        ...(_v6.length > 0 && {
          excludePlans: _v6
        })
      },
      tracking: {
        params: {
          upsell_name: `${_v4}_satellite_onboarding`,
          page: "satellite_onboarding",
          feature: _v4,
          location: "satellite_onboarding",
          target: _v5
        },
        paywallTracking: {
          paywallTrigger: `${_v4}_satellite_onboarding`,
          paywallLocation: "satellite_onboarding",
          paywallType: "popup",
          paywallFeature: "satellite_onboarding"
        }
      }
    };
  }]);
}