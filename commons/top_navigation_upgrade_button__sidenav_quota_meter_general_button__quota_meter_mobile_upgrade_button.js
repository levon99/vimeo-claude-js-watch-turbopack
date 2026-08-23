{
  "use strict";

  let _v1 = new Set(["top_navigation_upgrade_button", "sidenav_quota_meter_general_button", "quota_meter_mobile_upgrade_button"]),
    _v2 = new Set(["wayfinder_home_signup_banner_button", "search_results_live_events_upgrade_button"]);
  _v0.s(["shouldRedirectToPricingPage", 0, (_v0, {
    paywallTrigger: _v1
  }) => !_v2.has(_v1) && ("all" === _v0 || "home" === _v0 && _v1.has(_v1))]);
}