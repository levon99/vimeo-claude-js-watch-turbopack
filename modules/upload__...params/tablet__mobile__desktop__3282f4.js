{
  "use strict";

  _v0.i(0), _v0.i(0);
  var _v1 = _v0.i(0);
  let _v2 = () => {
      let _v0 = navigator.userAgent;
      return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
    },
    _v3 = {
      "/": "ss_lihp",
      "/manage/videos": "manage_videos_mw",
      "/manage/events": "manage_events_mw",
      "/upload/videos": "logged_in_upload_page"
    },
    _v4 = _v0 => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click", 129, {
      click_type: "tap",
      device_type: _v2(),
      path: window.location.pathname,
      type: "general",
      page: _v3[window.location.pathname],
      third_party_integration: null,
      target_path: null,
      ..._v0
    }));
  _v0.s(["sendAppRedirectImpressionEvent", 0, ({
    feature: _v0
  }) => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.impression", 32, {
    device_type: _v2(),
    type: "general",
    page: _v3[window.location.pathname],
    location: "app_redirect_modal",
    feature: _v0,
    path: window.location.pathname,
    name: "app_redirect"
  })), "sendClickToSwitchTeamsTapEvent", 0, ({
    fromTeamOwnerId: _v0,
    toTeamOwnerId: _v1
  }) => _v1.BigPictureClient.sendEvent(new _v1.Event("click_to_switch_teams", 2, {
    product: "Workflow",
    path: window.location.pathname,
    location: "content_menu",
    switched_from_team_owner_id: _v0,
    switched_to_team_owner_id: _v1
  })), "sendDeclineAppRedirectTapEvent", 0, ({
    feature: _v0
  }) => _v4({
    feature: _v0,
    location: "app_redirect_modal",
    target: "app_download",
    name: "decline_app_redirect",
    copy: "No thanks"
  }), "sendGetTheAppTapEvent", 0, ({
    feature: _v0
  }) => _v4({
    feature: _v0,
    location: "app_redirect_modal",
    target: "app_download",
    name: "get_app_redirect",
    copy: "Get the app"
  }), "sendHomeButtonTapEvent", 0, () => _v4({
    feature: "home",
    location: "content_menu",
    target: "ss_lihp",
    target_path: "/",
    name: "home_button",
    copy: "Home"
  }), "sendLogoutTapEvent", 0, () => {
    let _v0;
    return _v0 = {
      feature: "home",
      location: "profile_menu",
      target: "logged_out_home_page",
      target_path: "/log_out",
      event_name: "profile_menu_log_out",
      copy: "Log out",
      is_final_action: !0,
      auth_type: "log_out",
      interface_type: "page",
      interface_version: null,
      referrer: null,
      referrer_path: null
    }, _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.auth_flow_action", 5, {
      action_type: "tap",
      auth_type: null,
      copy: null,
      device_type: _v2(),
      event_name: "",
      interface_type: "page",
      interface_version: null,
      is_final_action: !1,
      page: _v3[window.location.pathname],
      path: window.location.pathname,
      referrer: null,
      referrer_path: null,
      target: null,
      target_path: null,
      third_party_integration: null,
      ..._v0
    }));
  }, "sendNewVideoTapEvent", 0, () => _v4({
    feature: "content_menu_new_video",
    location: "content_menu",
    target: "upload_page",
    target_path: "/upload/videos",
    page: "ss_lihp",
    name: "new_video",
    copy: "new_video"
  }), "sendOpenHelpTapEvent", 0, () => _v4({
    feature: "home",
    location: "profile_menu",
    target: "help_center",
    target_path: "/help",
    name: "help_center",
    copy: "Help"
  }), "sendOpenPurchasesTapEvent", 0, () => _v4({
    feature: "home",
    location: "profile_menu",
    target: "purchases",
    target_path: "/ondemand",
    name: "purchases",
    copy: "Purchases"
  }), "sendOpenSettingsTapEvent", 0, () => _v4({
    feature: "home",
    location: "profile_menu",
    target: "account_settings",
    target_path: "/settings",
    name: "account_settings",
    copy: "Settings"
  }), "sendOpenTeamSwitcherEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("collaboration.open_team_switcher", 2, {
    product: "Workflow",
    path: window.location.pathname,
    location: "content_menu"
  })), "sendOpenUpgradePageEvent", 0, ({
    location: _v0,
    upsell_name: _v1
  }) => {
    var _v2;
    let _v3;
    return _v2 = {
      copy: "Upgrade",
      feature: "general",
      is_new_pricing: null,
      location: _v0,
      upsell_name: _v1,
      target: "upgrade_page",
      target_path: "/upgrade"
    }, _v3 = _v2(), void _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.upgrade_action", 20, {
      action_type: "tap",
      copy: null,
      currency: null,
      device_type: "mobile" === _v3 ? "phone" : _v3,
      discount_offer: null,
      duration: null,
      feature: null,
      is_discount: null,
      is_new_pricing: null,
      loading_time: null,
      location: null,
      page: _v3[window.location.pathname],
      path: window.location.pathname,
      plan_selected: null,
      price: null,
      promo_code_id: null,
      purchase_type: null,
      target: null,
      target_path: null,
      upgrade_flags: null,
      upsell_name: null,
      ..._v2
    }));
  }, "sendOpenUserMenuEvent", 0, () => _v4({
    feature: "user_menu",
    location: "global_nav_mw",
    target: "action_drawer",
    name: "open_user_menu",
    copy: "Profile Picture"
  }), "sendOpenWatchLaterTapEvent", 0, () => _v4({
    feature: "home",
    location: "profile_menu",
    target: "watch_later",
    target_path: "/watchlater",
    name: "watch_later",
    copy: "Watch Later"
  }), "sendOpenWatchTapEvent", 0, () => _v4({
    feature: "home",
    location: "profile_menu",
    target: "watch",
    target_path: "/watch",
    name: "watch",
    copy: "Watch"
  }), "sendUploadMethodButtonTapEvent", 0, ({
    copy: _v0
  }) => _v4({
    feature: "upload_method_selector",
    location: "logged_in_upload_page",
    target: "upload_method_selector_modal",
    name: "upload_method_selector",
    copy: _v0
  }), "sendUploadMethodSelectorTapEvent", 0, ({
    target: _v0,
    name: _v1
  }) => {
    _v4({
      feature: "upload_method_selector",
      location: "upload_method_selector_modal",
      target: _v0,
      target_path: _v0,
      name: `method_${_v1.toLowerCase()}`,
      copy: _v1
    });
  }, "sendViewProfileTapEvent", 0, ({
    targetPath: _v0
  }) => _v4({
    feature: "home",
    location: "profile_menu",
    target: "user_profile",
    target_path: _v0,
    name: "view_profile",
    copy: "View profile"
  })], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = _v9.createGlobalStyle`
  body {
    overflow: hidden
  }
`,
    _v12 = (0, _v9.default)(_v7.motion.div).withConfig({
      displayName: "BottomDrawer__Screen",
      componentId: "sc-7364571d-0"
    })`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${0};
  height: 200%;
`,
    _v13 = (0, _v9.default)(_v7.motion.div).withConfig({
      displayName: "BottomDrawer__Drawer",
      componentId: "sc-7364571d-1"
    })`
  ${_v10.core.edge(400)};
  background-color: ${_v10.core.color.surface(600)};
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  bottom: 0;
  height: ${_v0 => _v0.height ? (0, _v8.rem)(_v0.height) : (0, _v8.rem)(392)};
  left: 0;
  padding: ${_v10.core.space(200)} ${_v10.core.space(300)};
  position: fixed;
  width: 100%;
  z-index: ${0};
`;
  _v0.s(["SlideUpFromBottomDrawer", 0, ({
    active: _v0,
    children: _v1,
    onScreenClick: _v2,
    height: _v3,
    ref: _v4,
    ..._v5
  }) => (0, _v5.jsx)(_v6.AnimatePresence, {
    mode: "wait",
    children: _v0 && (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)(_v11, {}), _v2 && (0, _v5.jsx)(_v12, {
        onClick: _v2,
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          type: "keyframes"
        }
      }), (0, _v5.jsx)(_v13, {
        ref: _v4,
        initial: {
          y: "100%"
        },
        animate: {
          y: 0
        },
        exit: {
          y: "100%"
        },
        transition: {
          type: "keyframes"
        },
        height: _v3,
        ..._v5,
        children: _v1
      })]
    })
  })], 0);
  var _v14 = _v0.i(0);
  _v0.s(["Player", 0, _v0 => (0, _v5.jsx)(_v14.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v5.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v5.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6Z"
      }), (0, _v5.jsx)("path", {
        d: "M10 9.751c0-.582.605-.943 1.08-.643l3.569 2.242c.468.294.468 1.006 0 1.3l-3.568 2.242c-.476.3-1.081-.06-1.081-.643V9.75Z"
      })]
    })
  })], 0);
}