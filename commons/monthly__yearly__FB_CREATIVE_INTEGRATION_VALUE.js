{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = ((_v1 = {}).MONTHLY = "monthly", _v1.YEARLY = "yearly", _v1);
  _v0.s(["FB_CREATIVE_INTEGRATION_VALUE", 0, "Facebook", "NON_WEB_FIELDS", 0, {
    session_id: null,
    client_timestamp: null,
    client_ver: null,
    clients_session_start_ts: null,
    debug_mode: null,
    in_background: null,
    is_guest: null,
    user_package_type: null,
    bi_id: null,
    price: null,
    price_currency: null,
    product_id: null,
    contextual_line: null,
    is_purchase_offered: null,
    is_fallback: null,
    origin: null
  }, "NO_INTEGRATION_VALUE", 0, "none", "UpsellDuration", () => _v5], 0);
  var _v6 = ((_v2 = {}).EDITOR = "editor", _v2.WIZARD = "wizard", _v2.PREVIEW = "preview", _v2.SCRIPT = "script", _v2);
  let _v7 = {
      flow: "",
      vuid: "",
      language: "",
      vsid: "",
      location: ""
    },
    _v8 = "teams_upgrade_blocker",
    _v9 = "view_notification",
    _v10 = "clicked_on_notification";
  function _v11(_v0, _v1, _v2, _v3 = "") {
    let _v4 = {
      container: _v1,
      component: _v2
    };
    switch (_v3 && (_v4.keyword = JSON.stringify(_v3)), _v0) {
      case "click":
        return _v3.FatalAttraction.trackClick(_v4);
      case "pageView":
        return _v3.FatalAttraction.trackPageView();
      case "impression":
        return _v3.FatalAttraction.trackImpression(_v4);
      case "event":
        return _v3.FatalAttraction.trackEvent(_v4);
      default:
        return null;
    }
  }
  let _v12 = "Vimeo Create";
  function _v13(_v0, _v1 = !0, _v2 = !1) {
    let {
        name: _v3,
        version: _v4 = 1,
        path: _v5 = window.location.pathname,
        ..._v6
      } = _v0,
      _v7 = _v6;
    _v7 = _v2 ? {
      path: _v5,
      ..._v6
    } : {
      session_id: null,
      client_timestamp: null,
      platform: window.navigator.platform,
      user_id: `${_v7.userId}`,
      user_package_type: null,
      path: _v5,
      ..._v6
    }, _v1 && Object.assign(_v7, {
      client_ver: null,
      clients_session_start_ts: null,
      debug_mode: null,
      device_id: _v7.vuid,
      in_background: null,
      is_guest: null,
      lang: _v7.language
    }), _v4.BigPictureClient.sendEvent(new _v4.Event(_v3, _v4, _v7));
  }
  _v0.s(["CONTAINER", () => _v6, "assignToAbTest", 0, function ({
    segment: _v0,
    location: _v1,
    test_name: _v2,
    test_id: _v3
  }) {
    _v13({
      name: "vimeo.assign_to_ab_test",
      product: _v12,
      location: _v1,
      test_name: _v2,
      test_id: _v3,
      segment: _v0,
      version: 1
    }, !1, !0);
  }, "downloadVideoFile", 0, _v0 => {
    _v13({
      name: "workflow.download_video_file",
      product: _v12,
      location: "preview",
      version: 3,
      video_privacy: null,
      entry_page: null,
      page: "preview",
      video_embed_privacy: null,
      is_preset_applied: null,
      is_video_password_protected: null,
      video_app_id: null,
      team_owner_id: null,
      team_size: null,
      team_subscription_type: null,
      video_status: null,
      upload_id: null,
      is_owner: null,
      video_type: null,
      actor_resource_role: null,
      aspect_ratio: null,
      actor_team_role: null,
      ..._v0
    }, !1, !0);
  }, "initialBI", 0, _v0 => {
    let {
      containerName: _v1,
      userId: _v2,
      vuid: _v3,
      locale: _v4,
      videoData: _v5,
      isShopifyUser: _v6,
      vsid: _v7
    } = _v0;
    _v7.flow = _v6 ? "shopify" : _v1, _v7.userId = _v2, _v7.vuid = _v3, _v7.language = _v4, _v7.vsid = _v7 || _v5?.vsid.toString() || null, _v7.location = _v1;
  }, "openDownloadModal", 0, _v0 => {
    _v13({
      name: "workflow.open_download_modal",
      product: _v12,
      location: "preview",
      version: 3,
      video_privacy: null,
      entry_page: null,
      page: "preview",
      video_embed_privacy: null,
      is_preset_applied: null,
      is_video_password_protected: null,
      video_app_id: null,
      team_owner_id: null,
      team_size: null,
      team_subscription_type: null,
      video_status: null,
      upload_id: null,
      is_owner: null,
      video_type: null,
      actor_resource_role: null,
      actor_team_role: null,
      ..._v0
    }, !1, !0);
  }, "trackClickFbAddButton", 0, ({
    title: _v0,
    account: _v1,
    cta: _v2,
    thirdPartyIntegration: _v3
  }) => {
    _v13({
      name: "click_on_save_to_facebook",
      product: _v12,
      location: "FB_save_modal",
      title: _v0,
      account: _v1,
      cta: _v2,
      version: 7,
      flow: _v7.flow,
      vsid: _v7.vsid,
      third_party_integration: _v3
    });
  }, "trackClickFbCloseModal", 0, () => {
    _v13({
      name: "click_to_close_fb_save_modal",
      product: _v12,
      location: "FB_save_modal",
      version: 5,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackClickMediaLibraryButton", 0, () => {
    _v13({
      name: "click_to_go_to_media_library_on_fb",
      product: _v12,
      location: "FB_integration",
      cta: "go_to_media_library",
      version: 6,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackClickOnTierBadge", 0, function (_v0) {
    let _v1 = {
      name: "vimeo.click_on_tier_badge",
      product: _v12,
      flow: _v7.flow,
      version: 1,
      vsid: _v7.vsid
    };
    _v13(_v1 = {
      ..._v0,
      ..._v1
    });
  }, "trackClickOpenFbModal", 0, () => {
    _v13({
      name: "click_to_open_save_to_facebook_modal",
      product: _v12,
      location: "preview_page",
      cta: "save_to_facebook",
      version: 6,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackClickToCloseRateUsModal", 0, _v0 => {
    let _v1 = {
      name: "vimeo.click_to_close_rate_us_modal",
      product: _v12,
      vsid: _v7.vsid,
      location: "preview_page",
      test_layout: null
    };
    _v13(_v1 = {
      ..._v0,
      ..._v1
    }, !1);
  }, "trackClickToRateUsOnThirdParty", 0, _v0 => {
    let _v1 = {
      name: "vimeo.click_to_rate_us_on_third_party",
      product: _v12,
      vsid: _v7.vsid,
      location: "preview_page",
      test_layout: null
    };
    _v13(_v1 = {
      ..._v0,
      ..._v1
    }, !1);
  }, "trackCreateAnotherVideo", 0, () => {
    _v13({
      name: "click_to_create_another_video_in_fb",
      product: _v12,
      location: "FB_integration",
      cta: "create_another_video",
      third_party_integration: "Facebook"
    }, !1);
  }, "trackFbStartUpload", 0, () => {
    _v13({
      name: "start_uploading_to_fb_integration",
      product: _v12,
      location: "FB_integration",
      version: 5,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackFbUploadStatus", 0, _v0 => {
    _v13({
      name: "upload_to_fb_integration_status",
      product: _v12,
      location: "FB_integration",
      status: _v0,
      version: 6,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackFeedbackClick", 0, _v0 => {
    _v13({
      name: "click_to_give_feedback",
      product: _v12,
      location: "rating layer",
      third_party_integration: _v0 ? "Facebook" : "none",
      vsid: _v7.vsid,
      flow: _v7.flow,
      cta: "tell_us_why"
    }, !0);
  }, "trackFeedbackSubmitClick", 0, (_v0, _v1) => {
    _v13({
      name: "click_to_submit_feedback",
      product: _v12,
      location: "rating layer",
      third_party_integration: _v0 ? "Facebook" : "none",
      vsid: _v7.vsid,
      flow: _v7.flow,
      selection: _v1
    }, !0);
  }, "trackLogoClick", 0, () => {
    _v11("click", _v7.flow, "logo_click");
  }, "trackPartnershipFlowClickedNotification", 0, function (_v0) {
    _v13({
      name: _v10,
      location: "preview_page",
      third_party_integration: _v0,
      notification_name: "save_video_on_partner",
      cta: "back_to_partner",
      product: _v12,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackPartnershipFlowViewNotification", 0, function (_v0) {
    _v13({
      name: _v9,
      location: "preview_page",
      third_party_integration: _v0,
      notification_name: "save_video_on_partner",
      product: _v12,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackPreviewEditTitleOpen", 0, () => {
    _v11("click", _v7.flow, "click_icon_to_edit_title");
  }, "trackPreviewEditTitleUpdate", 0, _v0 => {
    _v11("click", _v7.flow, "update_new_title", _v0);
  }, "trackPreviewEditVideo", 0, _v0 => {
    _v13({
      name: "click_to_edit_video",
      product: _v12,
      flow: _v7.flow,
      location: "preview",
      version: 7,
      vsid: _v7.vsid,
      third_party_integration: _v0
    }, !0);
  }, "trackPreviewSaveCta", 0, (_v0, _v1) => {
    let _v2 = {
      name: "save_video",
      product: _v12,
      vsid: _v7.vsid,
      flow: _v7.flow,
      location: "preview_page",
      third_party_integration: _v1,
      version: 3
    };
    _v13(_v2 = {
      ..._v0,
      ..._v2
    }, !0);
  }, "trackRateVideoOptionClick", 0, (_v0, _v1) => {
    _v13({
      name: "click_on_rating_option",
      product: _v12,
      location: "preview",
      third_party_integration: _v0 ? "Facebook" : "none",
      rating_selection: _v1,
      vsid: _v7.vsid,
      flow: _v7.flow
    }, !0);
  }, "trackRateVideoShown", 0, _v0 => {
    _v13({
      name: "view_rate_layer",
      product: _v12,
      location: "preview",
      third_party_integration: _v0,
      vsid: _v7.vsid,
      flow: _v7.flow
    }, !0);
  }, "trackReplayClick", 0, _v0 => {
    _v13({
      name: "click_on_replay_button",
      product: _v12,
      location: "rating layer",
      third_party_integration: _v0 ? "Facebook" : "none",
      vsid: _v7.vsid,
      flow: _v7.flow
    }, !0);
  }, "trackSuccessfulClientTransaction", 0, (_v0 = "", _v1 = "", _v2 = "", _v3 = "", _v4 = "", _v5, _v6, _v7 = _v7.flow, _v8 = _v5.YEARLY) => {
    _v13({
      name: "vimeo.client_transaction_status",
      product: _v12,
      location: _v7.location,
      version: 4,
      flow: _v7,
      vsid: _v7.vsid,
      displayed_plan: _v0,
      plan: _v1,
      duration: _v8,
      is_trial: _v5,
      trigger_for_upsell: _v2,
      current_tier: _v3,
      trigger_capability: _v4,
      status: "success",
      error_code: null,
      error_domain: null,
      bi_id: null,
      product_id: null,
      third_party_integration: _v6
    }, !0);
  }, "trackTeamUpgradeBlocker", 0, _v0 => {
    _v13({
      name: _v9,
      product: _v12,
      location: "teams_upsell",
      notification_name: _v8,
      vsid: _v7.vsid,
      third_party_integration: _v0,
      flow: _v7.flow
    }, !0);
  }, "trackTeamUpgradeBlockerCta", 0, _v0 => {
    _v13({
      name: _v10,
      product: _v12,
      location: "teams_upsell",
      cta: "got_it",
      notification_name: _v8,
      third_party_integration: _v0,
      vsid: _v7.vsid,
      flow: _v7.flow
    }, !0);
  }, "trackViewFbModal", 0, () => {
    _v13({
      name: "view_fb_save_modal",
      product: _v12,
      location: "preview_page",
      type: "Impression",
      version: 6,
      flow: _v7.flow,
      vsid: _v7.vsid
    });
  }, "trackWatermarkToggle", 0, _v0 => {
    let _v1 = {
      name: "click_on_watermark_toggle",
      product: _v12,
      platform: window.navigator.platform,
      version: 4,
      flow: _v7.flow,
      vsid: _v7.vsid
    };
    _v13(_v1 = {
      ..._v0,
      ..._v1
    });
  }], 0);
}