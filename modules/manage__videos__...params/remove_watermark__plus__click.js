{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1) => {
    let _v2 = "remove_watermark" === _v0.triggerCapability,
      _v3 = {
        click_on_upsell: {
          displayed_plan: "plus" === _v0.offeredPlan ? "pro" : _v0.offeredPlan,
          duration: _v0.offeredPlanDuration,
          type: "click",
          is_trial: !1
        },
        click_to_close_upsell_screen: {
          displayed_plan: "plus" === _v0.offeredPlan ? "pro" : _v0.offeredPlan,
          is_trial: !1
        },
        view_an_upsell: {
          duration: _v0.offeredPlanDuration,
          type: _v2 ? "impression" : "click",
          is_trial: !0
        }
      };
    return {
      ...{
        cta: _v0.cta || (_v2 ? "start free trial" : _v0.triggerCapability),
        plan: "plus" === _v0.offeredPlan ? "pro" : _v0.offeredPlan,
        layout_id: 0,
        location: _v0.location || "single_video_view",
        flow: _v0.flow || "blocker upgrade modal",
        session_id: window.localStorage.getItem("AF_SESSION"),
        client_timestamp: null,
        client_ver: null,
        clients_session_start_ts: window.localStorage.getItem("_uetsid_exp"),
        debug_mode: null,
        device_id: _v0.deviceId,
        in_background: null,
        is_guest: !1,
        lang: window.navigator.language,
        platform: window.navigator.platform,
        user_id: JSON.stringify(_v0.userId),
        user_package_type: _v0?.currentTier?.toUpperCase(),
        product: "SVV",
        path: window.location.pathname,
        vsid: JSON.stringify(_v0.vsid) || null,
        bi_id: null,
        price: null,
        price_currency: null,
        product_id: null,
        contextual_line: "was fired from " + _v0.triggerCapability,
        test_layout: null,
        trigger_for_upsell: _v0.triggerForUpsell,
        is_blocker: !_v2,
        is_purchase_offered: !1,
        current_tier: _v0.currentTier,
        trigger_capability: _v0.triggerCapability,
        third_party_integration: null,
        is_fallback: null,
        origin_from: _v0.triggerCapability
      },
      ..._v3[_v1]
    };
  };
  _v0.s(["trackClickOnUpgradeCapabilityModal", 0, _v0 => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("click_on_upsell", 16, {
      ..._v2(_v0, "click_on_upsell")
    }));
  }, "trackCloseUpgradeCapabilityModal", 0, _v0 => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("click_to_close_upsell_screen", 16, {
      ..._v2(_v0, "click_to_close_upsell_screen")
    }));
  }, "trackOpenUpgradeCapabilityModal", 0, _v0 => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("view_an_upsell", 15, {
      ..._v2(_v0, "view_an_upsell")
    }));
  }]);
}