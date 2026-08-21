{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "satellite_next",
    _v4 = "page",
    _v5 = ["starter", "standard", "advanced", "creator", "professional"],
    _v6 = /^[a-z0-9_-]+$/i,
    _v7 = new Set(Object.values(_v2.PLANS)),
    _v8 = _v0 => "string" == typeof _v0 ? _v0 : Array.isArray(_v0) ? _v0[0] : void 0;
  _v0.s(["SATELLITE_ONBOARDING_NEXT_PARAM", 0, _v3, "parseSatelliteOnboardingQuery", 0, _v0 => {
    var _v1;
    let _v2,
      _v3,
      _v4,
      _v5 = (_v2 = _v8(_v0.satellite_flow)) && _v6.test(_v2) ? _v2 : "satellite",
      _v6 = (_v3 = _v8(_v0[_v3])) && _v3.startsWith("/") && (0, _v1.isVimeoRedirectableUrl)(_v3) ? _v3 : "/",
      _v7 = _v8(_v0.paywall) === _v4 ? _v4 : void 0,
      _v8 = (_v4 = _v8(_v0.tier)) && _v5.includes(_v4) ? _v4 : "starter",
      _v9 = (_v1 = _v8(_v0.paywall_exclude_plans)) ? [...new Set(_v1.split(",").map(_v0 => _v0.trim()))].filter(_v0 => _v7.has(_v0)).map(_v0 => _v0) : [];
    return {
      flow: _v5,
      next: _v6,
      paywall: _v7,
      tier: _v8,
      modalConfig: {
        ...(_v9.length > 0 && {
          excludePlans: _v9
        })
      },
      tracking: {
        params: {
          upsell_name: `${_v5}_satellite_onboarding`,
          page: "satellite_onboarding",
          feature: _v5,
          location: "satellite_onboarding",
          target: _v6
        },
        paywallTracking: {
          paywallTrigger: `${_v5}_satellite_onboarding`,
          paywallLocation: "satellite_onboarding",
          paywallType: "popup",
          paywallFeature: "satellite_onboarding"
        }
      }
    };
  }]);
}