{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    STREAMYARD_APP_URIS: ["/apps/522256", "/apps/522338", "/apps/522339"],
    USER: {
      DEFAULT_LOGO_URL: (_v0, _v1) => `${_v1.environmentConfig.IS_DEV ? _v4.CDN.DEV : _v4.CDN.PROD}/portrait/defaults-blue_${_v0}x${_v1 ?? _v0}.png`
    },
    PATH: {
      CLIP_VIEWER_PAGE: _v0 => `/${_v0}`,
      CLIP_SETTINGS_PAGE: (_v0, _v1 = {}) => `/manage/videos/${_v0}${_v1.trim ? "/trim" : ""}`,
      CLIP_BROADCASTER_PAGE: (_v0, _v1 = null) => `/manage/videos/${_v0}/registration${(0, _v3.encodeQueryObjectAsString)(_v1)}`,
      SHOWCASE_MANAGE_URL: _v0 => `${window.location.origin}/manage/showcases/${_v0}`,
      SHOWCASE_VIEW_URL: _v0 => `${window.location.origin}/showcase/${_v0}`,
      BROADCASTER_PAGE: (_v0, _v1, _v2 = null) => `/live/broadcaster/${(0, _v2.transformSessionTypeToUri)(_v0)}/${_v1}${(0, _v3.encodeQueryObjectAsString)(_v2)}`,
      RTMP_PAGE: (_v0, _v1, _v2 = null) => `/live/rtmp/${(0, _v2.transformSessionTypeToUri)(_v0)}/${_v1}${(0, _v3.encodeQueryObjectAsString)(_v2)}`,
      EVENT_VIEWER_PAGE: (_v0, _v1 = null) => `${window.location.origin}/event/${_v0}${_v1 ? "/" + _v1 : ""}`,
      INTERACTION_TOOLS_PAGE: (_v0, _v1, _v2 = null) => `/live/interaction_tools/${(0, _v2.transformSessionTypeToUri)(_v0)}/${_v1}${(0, _v3.encodeQueryObjectAsString)(_v2)}`,
      COMPLETED_PAGE: (_v0, _v1, _v2 = null) => `/live/completed/${(0, _v2.transformSessionTypeToUri)(_v0)}/${_v1}${(0, _v3.encodeQueryObjectAsString)(_v2)}`,
      VIMEO_OTT_CHANNEL_VIEW_URL: _v0 => `https://${_v0}.vhx.tv/products`,
      VIMEO_OTT_CHANNEL_MANAGE_URL: (_v0, _v1) => `https://${_v0}.vhx.tv/admin/manage/events/${_v1}/general`,
      REQUEST_UPGRADE_PATH: "/upgrade#pricing",
      REQUEST_DEMO_UPGRADE_BUTTON_PATH: "/upgrade?context=events&mkc=368265-sl-se",
      CONTACT_US_FORM_FROM_LIVE: "/enterprise-contact-us-modal",
      CONTACT_US_FORM_EVENT: "/enterprise-contact-us-modal?left_side_content_type=vimeo_events&mkc=368ip-events_t1t2-mp&more_plan_details=hide",
      FAIL_SAFE_RTMP_URL: "rtmp://localhost:1937/live",
      CONNECT_OTT_DESTINATION_URL: "/manage/ott"
    },
    CDN: {
      PROD: "https://i.vimeocdn.com",
      DEV: "https://devi.vimeocdn.com",
      ASSETS: {
        ONBOARDING_TOUR_MODAL_BG: "/custom_asset/3276"
      }
    },
    VIDEOTHUMB: {
      DEFAULT_URL: () => "https://i.vimeocdn.com/video/default",
      URL_AT_RATIO(_v0, _v1, _v2 = 9 / 16) {
        let _v3 = _v0.split("_")[0],
          _v4 = Math.round(_v1 * _v2);
        return _v3 + `_${_v1}x${_v4}`;
      },
      URL_AT_RATIO_FOR_ID: (_v0, _v1, _v2 = 16 / 9, _v3) => `${_v1.environmentConfig.IS_COM || _v3 ? _v4.CDN.PROD : _v4.CDN.DEV}/video/${_v0}_${Math.floor(_v1 * _v2)}x${Math.floor(_v1)}`
    },
    SUPPORT: {
      VIMEO_HELP_CENTER: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426925620497",
      ENCODER_GUIDE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426924775953-Encoder-guide",
      AUTO_CC_LEARN_MORE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426960030353",
      GUEST_PAGE_LEARN_MORE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426959504401",
      DEVICE_PERMISSIONS: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426959565457",
      SCREEN_USAGE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426962678545",
      MULTIPLE_AUDIO_TRACKS_LIVE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/47511438056209-About-multiple-audio-tracks-for-live-events",
      UPGRADE_YOUR_PLAN: "/help/sso?redirect_to=https://vimeo.com/enterprise/contact-us",
      UPGRADE_YOUR_PLAN_DIRECT: "/enterprise/contact-us",
      CONTACT_SALES_EMAIL: "mailto:accountmanagement@vimeo.com"
    }
  };
  _v0.s(["vimeoConfig", 0, _v4]);
}