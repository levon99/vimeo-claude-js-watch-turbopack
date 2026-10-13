{
  "use strict";

  let _v1 = "vimeo:late-stage-paywall-launch";
  _v0.s(["LATE_STAGE_PAYWALL_LAUNCH_EVENT", 0, _v1, "launchLateStagePaywallFromUpgradePlanUrl", 0, _v0 => {
    let _v1 = new CustomEvent(_v1, {
      cancelable: !0,
      detail: {
        url: _v0
      }
    });
    return window.dispatchEvent(_v1), _v1.defaultPrevented;
  }]);
}