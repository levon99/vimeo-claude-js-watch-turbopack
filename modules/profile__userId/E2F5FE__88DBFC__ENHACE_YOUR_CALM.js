{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10 = ((_v1 = {}).SKY_BLUE = "#E2F5FE", _v1.LIGHT_BLUE = "#88DBFC", _v1),
    _v11 = ((_v2 = {})[_v2.ENHACE_YOUR_CALM = 420] = "ENHACE_YOUR_CALM", _v2[_v2.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", _v2),
    _v12 = ((_v3 = {}).GET = "GET", _v3.POST = "POST", _v3.PATCH = "PATCH", _v3.PUT = "PUT", _v3.DELETE = "DELETE", _v3),
    _v13 = ((_v4 = {})[_v4.TAB = 9] = "TAB", _v4[_v4.ENTER = 13] = "ENTER", _v4[_v4.ESC = 27] = "ESC", _v4[_v4.LEFT = 37] = "LEFT", _v4[_v4.UP = 38] = "UP", _v4[_v4.RIGHT = 39] = "RIGHT", _v4[_v4.DOWN = 40] = "DOWN", _v4[_v4.BACKSPACE = 8] = "BACKSPACE", _v4[_v4.COMMA = 188] = "COMMA", _v4[_v4.SPACE = 32] = "SPACE", _v4),
    _v14 = ((_v5 = {}).DONE = "done", _v5.STREAMING = "streaming", _v5),
    _v15 = ((_v6 = {}).STAFFPICK = "staffpick", _v6.BEST_OF_THE_MONTH = "staffpick-best-of-the-month", _v6.BEST_OF_THE_YEAR = "staffpick-best-of-the-year", _v6.PREMIERE = "staffpick-premiere", _v6),
    _v16 = ((_v7 = {}).GRID = "grid", _v7.MASONRY = "masonry", _v7),
    _v17 = ((_v8 = {}).FACEBOOK = "facebook", _v8.TWITTER = "twitter", _v8.LINKEDIN = "linkedin", _v8.CUSTOM_LINK = "custom_link", _v8);
  let _v18 = {
      autopause: 0,
      autoplay: 0,
      controls: 1,
      like: 1,
      logo: 1,
      loop: 0,
      share: 1,
      watchLater: 1,
      infoOnPause: 1,
      badge: 1,
      playbar: 1,
      defaultToHd: 1,
      volume: 1
    },
    _v19 = ["video_details", "profile_section_uri", "is_staff_pick", "column_width", "clip.link", "clip.uri", "clip.name", "clip.type", "clip.categories.name", "clip.categories.uri", "clip.config_url", "clip.pictures", "clip.height", "clip.width", "clip.duration", "clip.description", "clip.created_time", "clip.user.uri", "clip.user.name", "clip.user.link", "clip.user.location", "clip.user.bio", "clip.user.membership.badge", "clip.user.skills", "clip.user.background_video", "clip.user.pictures.sizes", "clip.user.is_expert", "clip.badge.type", "clip.live.scheduled_start_time", "clip.live.status", "clip.live.recurring_event.link", "clip.content_rating"],
    _v20 = ["clip.metadata.interactions.like.added", "clip.metadata.interactions.like.uri"],
    _v21 = ["uri", "title", "userUri", "uri", "unbounded", "position", "clip_uris", "videos.total"].concat(_v19.map(_v0 => `videos.data.${_v0}`)),
    _v22 = {
      ..._v18,
      fields: _v19,
      page: 1,
      perPage: 12
    },
    _v23 = {
      ..._v18,
      includeVideos: 1,
      fields: _v21,
      videosCountPerSection: 12,
      page: 1,
      perPage: 4
    };
  var _v24 = ((_v9 = {}).CLICK_TO_FOLLOW_CREATOR = "click_to_follow_creator", _v9.CLICK_TO_MESSAGE_CREATOR = "click_to_message_creator", _v9.CLICK_TO_CREATOR_LINK = "click_to_creator_link", _v9.CLICK_TO_SHARE_PROFILE = "click_to_share_profile", _v9.VISIT_PROFILE_PAGE = "visit_profile_page", _v9.CLICK_TO_DRAG_VIDEO = "click_to_drag_video", _v9.CLICK_TO_SWITCH_LAYOUT = "click_to_switch_layout", _v9.CLICK_TO_PUBLIC_VIDEOS_TOGGLE = "click_to_public_videos_toggle", _v9.CLICK_TO_UPGRADE_FORHIRE = "click_to_upgrade_forhire", _v9.UPDATE_FOREHIRE_SETTINGS = "update_forhire_settings", _v9.CLICK_TO_ORDER_SECTION = "click_to_order_section", _v9.CLICK_TO_REMOVE_SECTION = "click_to_remove_section", _v9.CLICK_TO_CREATE_SECTION = "click_to_create_section", _v9.CLOSE_ADD_VIDEO_MODAL = "close_add_video_modal", _v9.CLICK_TO_ADD_VIDEO = "click_to_add_video", _v9.CLOSE_COVER_VIDEO_MODAL = "close_cover_video_modal", _v9.CLICK_TO_ADD_COVER_VIDEO = "click_to_add_cover_video", _v9.CLICK_PROFILE_SHARE_SOCIAL_PLATFORM = "vimeo.click_profile_share_social_platform", _v9.CLICK_GET_LISTED_BUTTON = "click_get_listed_button", _v9.CLICK_REMOVE_LISTING_BUTTON = "click_remove_listing_button", _v9.CLICK_UPGRADE_TO_GET_LISTED_BUTTON = "click_upgrade_to_get_listed_button", _v9.UPGRADE_TO_GET_LISTED_SUCCESS = "upgrade_to_get_listed_success", _v9);
  _v0.s(["ABOUT_MAX_CHAR_COUNT", 0, 0, "BPEvent", () => _v24, "COLORS", () => _v10, "DEFAULT_PROFILE_URI_REGEX", 0, /\/profile_sections\/default$/, "EMAIL_INVALID_DOMAIN_ERROR_CODE", 0, 0, "ErrorCodes", () => _v11, "HTTPMethods", () => _v12, "IMAGE_CROP_CIRCLE_DIAMETER", 0, 200, "IMAGE_CROP_CIRCLE_DIAMETER_MOBILE", 0, 160, "KeyCodes", () => _v13, "LIVE_STATUS", () => _v14, "MAX_LINK_LENGTH", 0, 256, "MAX_VIDEOS_PER_PAGE", 0, 100, "MIN_NO_OF_LINKS_TO_SHOW", 0, 5, "PROFILE_NAME_MAX_LENGTH", 0, 32, "REGEX_URL", 0, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, "SCROLL_BUFFER", 0, 200, "SCRUBBER_WIDTH", 0, 6, "SECTION_NAME_MAX_LENGTH", 0, 80, "SECTION_VARIABLES", 0, _v23, "SOCIAL_PLATFORM", () => _v17, "StaffPicks", () => _v15, "TRIMMER_ROUND_OFFSET", 0, .501, "VIDEO_VARIABLES", 0, _v22, "ViewType", () => _v16, "getSectionVariables", 0, function (_v0) {
    let _v1 = _v0 ? _v21.concat(_v20.map(_v0 => `videos.data.${_v0}`)) : _v21;
    return {
      ..._v23,
      fields: _v1
    };
  }, "getVideoFields", 0, function (_v0) {
    return _v0 ? [..._v19, ..._v20] : _v19;
  }]);
}