{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = "join",
    _v11 = "login",
    _v12 = "click",
    _v13 = "impression",
    _v14 = "select",
    _v15 = "join_modal",
    _v16 = "login_modal",
    _v17 = "vimeo.auth_flow_action",
    _v18 = {
      client_ver: null,
      debug_mode: null,
      in_background: null,
      flow: null,
      vsid: null,
      client_timestamp: null
    },
    _v19 = "create_homepage";
  function _v20(_v0) {
    let _v1 = (0, _v8.getPathName)(),
      _v2 = (0, _v8.getPageNameFromPath)(_v1);
    return {
      interface_version: _v0 ? "reg_flow_3_0" : "reg_flow_2_0",
      interface_type: "modal",
      page: _v2 === _v1 ? "other" : _v2,
      path: _v1,
      referrer: document.referrer,
      referrer_path: document.referrer ? document.referrer.replace(/^.*\/\/[^\/]+/, "") : null,
      device_type: (0, _v9.default)(),
      third_party_integration: null
    };
  }
  let _v21 = ({
    copy: _v0,
    flow: _v1,
    pageName: _v2 = "other",
    product: _v3 = "general",
    feature: _v4 = "general"
  }) => ({
    ...(0, _v3.buildActionBpContext)({
      action_type: "click",
      feature: null
    }),
    ...(0, _v6.buildWebBpContext)({
      page_name: _v2,
      path: window.location.pathname
    }),
    ...(0, _v4.buildProductAnalyticsBpContext)({
      product: _v3,
      feature: _v4,
      location: "modal",
      modal_name: "join_modal",
      flow: _v1,
      element: "modal",
      device_type: (0, _v9.default)(),
      is_user_facing_data: null,
      copy: _v0
    }),
    ...(0, _v5.buildThirdPartyIntegrationBpContext)({
      is_partner: !1,
      integration_id: null,
      integration_name: null
    })
  });
  _v0.s(["clickToCloseSignupLoginPpModal", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = {
      product: "Vimeo Create",
      path: window.location.pathname,
      location: _v4 || "",
      session_id: _v1?.xsrft && parseInt(_v1?.xsrft) || null,
      platform: window.navigator.platform,
      user_id: _v1?.user?.id.toString() || null,
      user_package_type: JSON.stringify(_v1?.user?.account) || null,
      third_party_integration: _v2 ? "Facebook" : "none",
      device_id: _v1?.vuid || null,
      clients_session_start_ts: null,
      is_guest: _v1 ? !_v1.user : null,
      lang: _v1?.locale || null,
      via: _v0 || null,
      test_layout: null,
      join_or_login: _v3 || null,
      ..._v18
    };
    _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.click_to_close_signup_login_screen", 1, {
      ..._v5
    }));
  }, "getCommonAttributesV2", 0, _v20, "trackClickGOT", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.click_on_google_one_tap", 1, {
      product: "Vimeo Create",
      path: window.location.pathname,
      location: _v19,
      session_id: _v0?.xsrft && parseInt(_v0.xsrft) || null,
      client_timestamp: Date.now().toString(),
      platform: window.navigator.platform,
      user_id: JSON.stringify(_v0?.user?.id) || null,
      user_package_type: JSON.stringify(_v0?.user?.account) || null,
      third_party_integration: "none",
      vsid: null,
      via: _v19
    }));
  }, "trackContinueWithEmailClick", 0, () => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "join_with_email",
      auth_type: _v10,
      action_type: _v12,
      is_final_action: !1,
      location: `${_v15}_step_1`,
      copy: "continue_with_email",
      target: "email_auth_join",
      target_path: null,
      feature: "join",
      ..._v20(!0)
    }));
  }, "trackFinishAuthFlow", 0, ({
    pageName: _v0 = "other",
    product: _v1 = "general",
    feature: _v2 = "general"
  }) => {
    (0, _v7.sendBpEventWithContexts)("vimeo.finish_auth_flow", _v21({
      copy: "join vimeo",
      flow: "join",
      pageName: _v0,
      product: _v1,
      feature: _v2
    }), 2, {
      interface_type: "modal",
      auth_type: "join"
    });
  }, "trackForgotPasswordClick", 0, (_v0, _v1) => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "forgot_your_password",
      auth_type: _v11,
      action_type: _v12,
      is_final_action: !1,
      location: _v16,
      copy: "forgot_your_password?",
      target: "forgot_password",
      target_path: _v1 || null,
      feature: "login",
      ..._v20(_v0)
    }));
  }, "trackGoBackToPrevScreenCTAClick", 0, () => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "previous_step",
      auth_type: _v10,
      action_type: "click",
      is_final_action: !1,
      location: `${_v15}_step_2`,
      copy: "go_back",
      target: null,
      target_path: null,
      feature: "reg_flow",
      ..._v20(!0)
    }));
  }, "trackJoinModalImpression", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "join_modal_impression",
      auth_type: _v10,
      action_type: _v13,
      is_final_action: !1,
      location: _v0 ? `${_v15}_step_1` : _v15,
      copy: null,
      target: null,
      target_path: null,
      feature: "join",
      ..._v20(_v0)
    }));
  }, "trackJoinPageClickRegFlow0625", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 13, {
      path: (0, _v8.getPathName)(),
      referrer: document.referrer,
      referrer_path: document.referrer ? document.referrer.replace(/^.*\/\/[^\/]+/, "") : null,
      is_final_action: !1,
      interface_version: "reg_flow_0625_v2",
      third_party_integration: null,
      auth_type: _v10,
      interface_type: "page",
      action_type: _v12,
      device_type: (0, _v9.default)(),
      feature: "join",
      location: "join_page_step_1",
      page: "reg_flow_page",
      event_name: "",
      copy: null,
      target: null,
      target_path: null,
      password_strength_score: null,
      ..._v0
    }));
  }, "trackJoinPageImpressionRegFlow0625", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 12, {
      path: (0, _v8.getPathName)(),
      referrer: document.referrer,
      referrer_path: document.referrer ? document.referrer.replace(/^.*\/\/[^\/]+/, "") : null,
      is_final_action: !1,
      interface_version: "reg_flow_0625_v2",
      third_party_integration: null,
      auth_type: _v10,
      interface_type: "page",
      action_type: "pageview",
      device_type: (0, _v9.default)(),
      feature: "join",
      location: "join_page_step_1",
      page: "reg_flow_page",
      event_name: "join_pageview",
      copy: null,
      target: null,
      target_path: null,
      ..._v0
    }));
  }, "trackJoinWithEmailClick", 0, (_v0, _v1) => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "join_with_email",
      auth_type: _v10,
      action_type: _v12,
      is_final_action: !0,
      location: _v0 ? `${_v15}_step_2` : _v15,
      copy: "join_with_email",
      target: "email_auth_join",
      target_path: _v1 || null,
      feature: "join",
      ..._v20(_v0)
    }));
  }, "trackJoinWithGoogleClick", 0, (_v0, _v1) => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "join_with_google",
      auth_type: _v10,
      action_type: _v12,
      is_final_action: !0,
      location: _v0 ? `${_v15}_step_1` : _v15,
      copy: "join_with_google",
      target: "google_auth_join",
      target_path: _v1 || null,
      feature: "join",
      ..._v20(_v0)
    }));
  }, "trackJoinWithinLoginModalClick", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "join_or_log_in",
      auth_type: _v11,
      action_type: _v12,
      is_final_action: !1,
      location: _v16,
      copy: "don’t_have_an_account?_join_vimeo",
      target: _v15,
      target_path: null,
      feature: "login",
      ..._v20(_v0)
    }));
  }, "trackLogin", 0, (_v0, _v1) => {
    _v1 && _v1.FatalAttraction.trackClick({
      container: _v1.container,
      component: "login",
      keyword: JSON.stringify({
        mode: "password" === _v0 ? "email" : _v0,
        third_party_integration: _v1?.thirdPartyIntegration || "none"
      })
    }), _v2.BigPictureClient.sendEvent(new _v2.Event("login_from_login_modal", 4, {
      product: "Vimeo Create",
      path: window.location.pathname,
      location: _v19,
      method: _v0,
      test_layout: null,
      via: _v1?.container || null,
      third_party_integration: _v1?.thirdPartyIntegration || "none"
    }));
  }, "trackLoginModalImpression", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "login_modal_impression",
      auth_type: _v11,
      action_type: _v13,
      is_final_action: !1,
      location: _v16,
      copy: null,
      target: null,
      target_path: null,
      feature: "login",
      ..._v20(_v0)
    }));
  }, "trackLoginWithEmailClick", 0, (_v0, _v1) => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "login_with_email",
      auth_type: _v11,
      action_type: _v12,
      is_final_action: !0,
      location: _v16,
      copy: "log_in_with_an_email",
      target: "email_auth_login",
      target_path: _v1 || null,
      feature: "login",
      ..._v20(_v0)
    }));
  }, "trackLoginWithSocialMediaClick", 0, (_v0, _v1, _v2) => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      auth_type: _v11,
      action_type: _v12,
      is_final_action: !0,
      location: _v16,
      target_path: _v2 || null,
      feature: "login",
      ...("google" === _v0 ? {
        event_name: "login_with_google",
        copy: "log_in_with_google",
        target: "google_auth_login"
      } : "facebook" === _v0 ? {
        event_name: "login_with_facebook",
        copy: "log_in_with_facebook",
        target: "facebook_auth"
      } : {
        event_name: "login_with_apple",
        copy: "log_in_with_apple",
        target: "apple_auth"
      }),
      ..._v20(_v1)
    }));
  }, "trackLoginWithinJoinModalClick", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: "join_or_log_in",
      auth_type: _v10,
      action_type: _v12,
      is_final_action: !1,
      location: _v15,
      copy: _v0 ? "already_have_an_account?_log_in" : "create_and_share_videos_in_seconds._join_or_log_in",
      target: _v16,
      target_path: null,
      feature: "join",
      ..._v20(_v0)
    }));
  }, "trackMarketingTermCheckbox", 0, (_v0, _v1) => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 11, {
      event_name: _v0 ? "check_marketing_optin" : "uncheck_marketing_optin",
      auth_type: _v10,
      action_type: _v14,
      is_final_action: !1,
      location: _v1 ? `${_v15}_step_2` : _v15,
      copy: "i_agree_to_receive_newsletters,_product_updates_and_exclusive_offers_from_vimeo.",
      target: null,
      target_path: null,
      feature: "join",
      ..._v20(_v1)
    }));
  }, "trackMarketingTermCheckboxRegFlow0625", 0, _v0 => {
    _v2.BigPictureClient.sendEvent(new _v2.Event(_v17, 12, {
      path: (0, _v8.getPathName)(),
      referrer: document.referrer,
      referrer_path: document.referrer ? document.referrer.replace(/^.*\/\/[^\/]+/, "") : null,
      is_final_action: !1,
      interface_version: "reg_flow_0625_v2",
      third_party_integration: null,
      interface_type: "page",
      auth_type: _v10,
      action_type: _v14,
      device_type: (0, _v9.default)(),
      location: "join_page_step_2",
      page: "reg_flow_page",
      event_name: _v0 ? "check_marketing_optin" : "uncheck_marketing_optin",
      copy: "i_agree_to_receive_newsletters,_product_updates_and_exclusive_offers_from_vimeo.",
      target: null,
      target_path: null,
      feature: "join"
    }));
  }, "trackProgressInAuthFlow", 0, ({
    copy: _v0,
    pageName: _v1 = "other",
    product: _v2 = "general",
    feature: _v3 = "general"
  }) => {
    (0, _v7.sendBpEventWithContexts)("vimeo.progress_in_auth_flow", _v21({
      copy: _v0,
      flow: "join",
      pageName: _v1,
      product: _v2,
      feature: _v3
    }), 2, {
      interface_type: "modal",
      auth_type: "join"
    });
  }, "trackRegistration", 0, (_v0, _v1, _v2) => {
    _v1 && _v1.FatalAttraction.trackClick({
      container: _v1.container,
      component: "join",
      keyword: JSON.stringify({
        mode: "password" === _v0 ? "email" : _v0,
        third_party_integration: _v1?.thirdPartyIntegration || "none"
      })
    }), _v2.BigPictureClient.sendEvent(new _v2.Event("register_from_login_modal", 4, {
      product: "Vimeo Create",
      path: window.location.pathname,
      location: _v19,
      method: _v0,
      test_layout: null,
      via: _v1?.container || _v2 || null,
      third_party_integration: _v1?.thirdPartyIntegration || "none"
    }));
  }, "trackTriggerAuthFlow", 0, ({
    copy: _v0,
    flow: _v1,
    pageName: _v2 = "other",
    product: _v3 = "general",
    feature: _v4 = "general"
  }) => {
    (0, _v7.sendBpEventWithContexts)("vimeo.trigger_auth_flow", _v21({
      copy: _v0,
      flow: _v1,
      pageName: _v2,
      product: _v3,
      feature: _v4
    }), 2, {
      interface_type: "modal",
      auth_type: _v1
    });
  }, "trackViewSignupLoginScreen", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = {
      product: "Vimeo Create",
      path: window.location.pathname,
      location: _v19,
      session_id: _v1?.xsrft && parseInt(_v1.xsrft) || null,
      platform: window.navigator.platform,
      user_id: _v1?.user?.id.toString() || null,
      user_package_type: JSON.stringify(_v1?.user?.account) || null,
      third_party_integration: _v2 ? "Facebook" : "none",
      clients_session_start_ts: null,
      is_guest: _v1 ? !_v1.user : null,
      device_id: _v1?.vuid || null,
      lang: _v1?.locale || null,
      via: _v0 || null,
      test_layout: null,
      join_or_login: _v3 || null,
      referrer: _v19,
      ..._v18
    };
    _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.view_signup_login_screen", 2, {
      ..._v4
    }));
  }, "viewPricingPage", 0, (_v0, _v1) => {
    let _v2 = {
      product: "Vimeo Create",
      path: window.location.pathname,
      location: _v19,
      session_id: _v0?.xsrft && parseInt(_v0?.xsrft) || null,
      platform: window.navigator.platform,
      user_id: JSON.stringify(_v0?.user?.id) || null,
      user_package_type: JSON.stringify(_v0?.user?.account) || null,
      third_party_integration: _v1 ? "Facebook" : "none",
      device_id: _v0?.vuid || null,
      clients_session_start_ts: null,
      is_guest: _v0 ? !_v0.user : null,
      lang: _v0?.locale || null,
      ..._v18
    };
    _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.view_pricing_page", 2, {
      ..._v2
    }));
  }]);
}