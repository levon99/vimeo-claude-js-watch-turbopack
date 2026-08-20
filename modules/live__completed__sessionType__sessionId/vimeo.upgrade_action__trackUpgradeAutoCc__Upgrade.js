{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v0.i(0).createLiveSchemaEventFactoryNew)("vimeo.upgrade_action", 42, () => ({
    planSelected: null,
    purchaseType: null,
    duration: null,
    price: null,
    currency: null,
    isDiscount: null,
    discountOffer: null,
    path: null,
    targetPath: null,
    deviceType: null,
    upsellName: null,
    feature: null,
    isNewPricing: null,
    upgradeFlags: null,
    loadingTime: null,
    promoCodeId: null
  }));
  _v0.s(["trackUpgradeAutoCc", 0, function (_v0) {
    return _v4({
      eventType: void 0,
      copy: "Upgrade",
      actionType: "click",
      page: "live_event_stream_settings",
      target: "enterprise_contact_us_page",
      upsellName: "auto_cc",
      feature: "live_event_settings",
      path: window.location.pathname,
      targetPath: _v0
    });
  }, "trackUpgradeQna", 0, function (_v0) {
    return _v4({
      eventType: void 0,
      actionType: _v0,
      upsellName: "live_qna_moderation"
    });
  }, "trackUpgradeQnaV2", 0, function (_v0) {
    let _v1 = {
        device_type: _v2.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
        upsell_name: "q_and_a_moderation"
      },
      _v2 = {
        ...(0, _v3.newWebCtx)({
          target: "contact_us"
        }),
        ...("click" === _v0 ? (0, _v3.newActionCtx)("click") : (0, _v3.newViewCtx)("impression")),
        ...(0, _v3.newProductAnalyticsCtx)({
          copy: "Learn more",
          location: "drawer",
          feature: "q_and_a_moderation",
          product: "events"
        }),
        ...(0, _v3.newThirdPartyIntegrationCtx)()
      };
    (0, _v1.sendBpEventWithContexts)("click" === _v0 ? "vimeo.trigger_upsell" : "vimeo.upsell_trigger_impression", _v2, void 0, _v1);
  }]);
}