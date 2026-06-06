{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ["svv_recipient_clip_page", "showcase_recipient", "channels", "groups"],
    _v4 = (_v0, _v1) => {
      let _v2 = {
        "^/blog.*": "blog",
        "^/store/ondemand/buy/.*": "checkout_form_page_vod",
        "^/store/receipt.*": "checkout_form_page_receipt",
        "^/store/.*": "checkout_form_page_ss",
        "^/ondemand(/.*)?$": "vod",
        "^/stock(/.*)?$": "stock",
        "%/ott/pricing/calculator%": "ott_pricing_calculation_page",
        "%/ott/pricing%": "ott_pricing_page",
        "/welcome-survey%": "registration_survey_page",
        "^/channels.*": "channels",
        "/manage/folders": "video_library",
        "/manage/videos": "video_library",
        "/library": "video_library",
        "/manage/(folders|team|events|showcases|webinars)/([0-9]|[a-z])+.*": `${_v0.split("/")[2]}_manager`,
        "/manage/videos/([0-9]|[a-z])+.*": "single_video_view_manager",
        "%/create/templates%": "create_homepage",
        "%/create/customize?%": "editor",
        "%/create/trimmer%": "create_trimmer",
        "/create/new%": "create_wizard",
        ".*/download/.*": "download_video_file",
        "^/security": "marketing_landing_page_enterprise",
        "/live/(select|event/create)(/[0-9]+.*)?$": "live_event_type_select",
        "/live/broadcaster(/event)?/[0-9]+.*": "live_browser_studio",
        "/live/rtmp/event/[0-9]+.*": "live_event_rtmp_page",
        "/live/registration/([0-9]|[a-z])+.*": "event_registration_page",
        "/events?/[0-9]+.*": "live_event_view_page",
        "/live/completed/event/[0-9]+.*": "live_event_completed",
        "/events/.*": "marketing_landing_page_events",
        "/integrations/.*": "marketing_landing_page_integrations",
        "(/campaigns/|/bestoftheyear(/)?).*": "marketing_landing_page_campaigns",
        "^/accounts/.*": "livestream_com",
        "/experts/.*": "experts_homepage",
        "^/ott(/.*)?$": "ott",
        "^/help/.*": "help",
        "^/features(/.*)?$": "marketing_landing_page_features",
        ".*/showcase/[0-9a-zA-Z]+.*": "showcase_recipient",
        "(^/about/.*|^/about$)": "about",
        ".*/features(/.*)?$": "marketing_uri_part_features",
        "^(/create|/tools|/video-editor)(/.*)?$": "marketing_landing_page_create",
        "^/enterprise(/.*)?$": "marketing_landing_page_enterprise",
        ".*/video-teleprompter/.*": "marketing_landing_page_video_teleprompter",
        "/experts": "marketing_landing_page_experts",
        "^/solutions/.*": "marketing_landing_page_solutions",
        "^(/log_in|/login|/log_in_modal)(/.*)?$": "login_screen",
        "^(/join|/oauth/(join|authorize)|/signup|/join_modal)(/.*)?$": "join_screen",
        "^/analytics/.*|^/analytics$": "analytics_page",
        "^/cancel/offer.*": "cancel_sub_page",
        "^/library-search/.*|^/library-search$": "library_search_result_page",
        "^/manage/event/[0-9]+.*": "event_setting_page",
        "^/watch/.*|^/watch$": "watch",
        "^/watchlater(/.*)?$": "watch_later_list",
        "^/webinars/.*|^/webinars$": "webinars",
        "^/activity/.*|^/activity$": "activity_page",
        "^/logged_out/.*|^/logged_out$": "log_out_page",
        "^/categories/.*|^/categories$": "categories_page",
        "^/vindiciapaypalomnipay/.*|^/vindiciapaypalomnipay$": "vindicia_pay",
        "^/apps/237719/preview/.*|^//apps/237719/preview/$": "apps_preview_page",
        "^/publisher/.*|^/publisher$": "logged_in_homepage_publish_modal_opened",
        "^/embed-email/.*|^/embed-email$": "logged_in_homepage_embed_email_modal_opened",
        ".*.wirewax.com.*|.*wirewax.com$": "interactive",
        "^/share/resource.*": "share_resource_page",
        "^/_facebook/join/.*": "facebook_join_page",
        "^/_facebook/login/.*": "facebook_login_page",
        "^/forgot_password.*": "forgot_password",
        "^/record/.*": "record",
        "^/_google/join/.*": "google_join_page",
        "^/_google/login/.*": "google_login_page",
        "^/_facebook/login/.": "facebook_login_page",
        "(.*/user|.*/user[0-9]+.*)": "user_profile",
        "^/settings/.*": "user_settings",
        "^/groups/.*": "groups",
        "^/upload(/.*)?$": "upload_page",
        "(/review/[0-9]+.*|%/review/%)": "review_page",
        "(.*/videos/[0-9]+.*|.*/[0-9]+.*|/clip)": "clip_page",
        "^(/upgrade|/upgrade-plan|/pricing|/sign_up|/welcome)(/.*)?$": "upgrade_page",
        "(/watch/.*|/watch$)": "watch",
        "^/$|^/vmlp|^/#|(/home(/.*)?)$": _v1 ? "logged_in_home_page" : "logged_out_homepage"
      };
      for (let _v0 in _v2) if (new RegExp(_v0).test(_v0)) return _v2[_v0];
      return "other";
    };
  function _v5() {
    return window.self === window.top ? window.document.location.pathname : document.referrer.replace(/^[^:]+:\/\/[^/]+/, "").replace(/#.*/, "");
  }
  _v0.s(["getPageNameFromPath", 0, _v4, "getPathName", 0, _v5, "getRedirectAndTypeFromQueryParams", 0, function (_v0) {
    let _v1 = _v0?.get("redirect"),
      _v2 = _v0?.get("redirect_url_after_social_login"),
      _v3 = _v0?.get("join_redirect");
    return {
      redirect: _v1,
      modalType: _v0?.get("type") || "join",
      socialLoginRedirect: _v2,
      joinRedirect: _v3
    };
  }, "getReferrerPath", 0, function () {
    let _v0 = document.referrer,
      _v1 = window.location.origin;
    return _v0.startsWith(_v1) ? _v0.replace(_v1, "") : "/";
  }, "handlePreRedirectTask", 0, _v0 => {
    if ("join" === _v0) {
      let _v0 = _v4(window.parent.location.pathname);
      _v3.includes(_v0) && window.sessionStorage.setItem("reg-source", "clip_page");
    }
  }, "handleRedirect", 0, (_v0, _v1, _v2) => {
    if ("join" === _v2) {
      if (window.sessionStorage.setItem("upsellModal-dismissed", "joinWithEmail"), window.localStorage.setItem("upsellModal-dismissed", "joinWithEmail"), window.location.pathname.includes("/reviews/")) {
        window.parent.location.href = window.location.pathname + window.location.search;
        return;
      }
      let _v0 = sessionStorage.getItem("redirectUrl");
      if (_v0 && (sessionStorage.removeItem("redirectUrl"), (0, _v2.isVimeoRedirectableUrl)(_v0))) {
        window.parent.location.href = _v0;
        return;
      }
    }
    if (_v1?.redirect_user_to_help_desk) {
      let _v0 = (0, _v2.isVimeoRedirectableUrl)(_v1.redirect_url) ? _v1.redirect_url : "";
      window.location.href = `https://${window.location.hostname}/help/sso?redirect_to=${_v0}`;
    } else _v0 ? _v0(_v1) : _v1.redirect_url && (0, _v2.isVimeoRedirectableUrl)(_v1.redirect_url) ? window.parent.location.href = _v1.redirect_url : window.parent.location = "/";
  }, "handleSSOLogin", 0, (_v0, _v1, _v2) => {
    let _v3 = new URLSearchParams(window?.parent?.location?.search),
      _v4 = _v3?.get("redirect") || "",
      _v5 = _v5(),
      _v6 = "&prev_page=" + (_v2 && (0, _v2.isVimeoRedirectableUrl)(_v2) ? _v2 : (0, _v2.isVimeoRedirectableUrl)(_v4) && "/log_in" === _v5 ? _v4 : encodeURIComponent(_v5));
    window.parent.location.href = (_v1 || "") + "/auth0/connect?connection=" + _v0 + _v6;
  }, "useIsModalInIframe", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)(!1);
    return (0, _v1.useEffect)(() => {
      _v1(window.self !== window.top);
    }, []), _v0;
  }]);
}