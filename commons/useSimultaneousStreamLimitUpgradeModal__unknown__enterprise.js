{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useSimultaneousStreamLimitUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    let _v1 = (0, _v2.useContext)(_v6.LiveGlobalsContext),
      _v2 = _v1?.initialState?.sessionApplicationType,
      _v3 = (0, _v5.inline)(() => _v2 === _v4.EComposerApplicationType.BROADCASTER ? "109955" : _v2 === _v4.EComposerApplicationType.RTMP ? "109956" : "unknown");
    return (0, _v8.useUpgradeModal)({
      canOpen: _v0,
      templateType: "enterprise",
      tracking: {
        params: {
          feature: "live_event_settings",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "fail_safe_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_simultaneous_stream_limit_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      modalConfig: {
        mkcCode: _v3,
        enterpriseTitle: _v3.T_GET_ADDITIONAL_CONCURRENT_STREAMS,
        enterpriseSubtitle: "",
        customFeaturesList: (0, _v1.jsx)(_v7.UpsellFeaturesList, {
          featuresList: _v3.T_ADDITIONAL_CONCURRENT_STREAMS_FEATURES
        })
      }
    });
  }]);
}