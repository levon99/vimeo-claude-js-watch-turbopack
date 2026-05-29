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
    _v10,
    _v11,
    _v12,
    _v13,
    _v14 = ((_v1 = {}).SNOW = "#FBFBFB", _v1.CYAN_WHITE = "#EEEFF0", _v1.DARK_CYAN = "#172322", _v1.SKY_BLUE = "#E2F5FE", _v1.LIGHT_BLUE = "#88DBFC", _v1.PALE_GRAY = "#D0D8DB", _v1),
    _v15 = ((_v2 = {})[_v2.DEFAULT = 20] = "DEFAULT", _v2[_v2.SM = 15] = "SM", _v2[_v2.MD = 10] = "MD", _v2[_v2.HD = 12] = "HD", _v2),
    _v16 = ((_v3 = {})[_v3.SM_TOP = 17] = "SM_TOP", _v3[_v3.SM_RIGHT = 17] = "SM_RIGHT", _v3[_v3.MD_TOP = 7] = "MD_TOP", _v3[_v3.MD_RIGHT = 26] = "MD_RIGHT", _v3[_v3.MD_BOTTOM = 17] = "MD_BOTTOM", _v3[_v3.XHD_TOP = 3] = "XHD_TOP", _v3[_v3.XHD_RIGHT = 23] = "XHD_RIGHT", _v3[_v3.XHD_BOTTOM = 13] = "XHD_BOTTOM", _v3),
    _v17 = ((_v4 = {})[_v4.ENHACE_YOUR_CALM = 420] = "ENHACE_YOUR_CALM", _v4[_v4.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", _v4),
    _v18 = ((_v5 = {})[_v5.DEFAULT = 16] = "DEFAULT", _v5[_v5.SM_RIGHT = 20] = "SM_RIGHT", _v5[_v5.SM_TOP = 24] = "SM_TOP", _v5[_v5.HD_RIGHT = 24] = "HD_RIGHT", _v5[_v5.HD_TOP = 36] = "HD_TOP", _v5[_v5.XHD = 40] = "XHD", _v5),
    _v19 = ((_v6 = {}).GET = "GET", _v6.POST = "POST", _v6.PATCH = "PATCH", _v6.PUT = "PUT", _v6.DELETE = "DELETE", _v6),
    _v20 = ((_v7 = {})[_v7.TAB = 9] = "TAB", _v7[_v7.ENTER = 13] = "ENTER", _v7[_v7.ESC = 27] = "ESC", _v7[_v7.LEFT = 37] = "LEFT", _v7[_v7.UP = 38] = "UP", _v7[_v7.RIGHT = 39] = "RIGHT", _v7[_v7.DOWN = 40] = "DOWN", _v7[_v7.BACKSPACE = 8] = "BACKSPACE", _v7[_v7.COMMA = 188] = "COMMA", _v7[_v7.SPACE = 32] = "SPACE", _v7),
    _v21 = ((_v8 = {}).DONE = "done", _v8.STREAMING = "streaming", _v8),
    _v22 = ((_v9 = {}).CONTACT_EMAIL = "CONTACT_EMAIL_CACHE_KEY", _v9.USER_RESOURCE = "USER_RESOURCE_CACHE_KEY", _v9.VIDEO_SECTION = "VIDEO_SECTION_CACHE_KEY", _v9.ROLES_RESOURCE = "ROLES_RESOURCE_CACHE_KEY", _v9.CLIENTS_RESOURCE = "CLIENTS_RESOURCE_CACHE_KEY", _v9.PROJECTS_RESOURCE = "PROJECT_RESOURCE_CACHE_KEY", _v9.USER_RATE = "USER_RATE_CACHE_KEY", _v9.VIDEO_CATEGORIES_RESOURCE = "VIDEO_CATEGORIES_RESOURCE", _v9.SECTIONS_RESOURCE = "SECTIONS_RESOURCE_CACHE_KEY", _v9.FILTERED_CLIP_RESOURCE = "FILTERED_CLIP_RESOURCE_KEY", _v9),
    _v23 = ((_v10 = {}).STAFFPICK = "staffpick", _v10.BEST_OF_THE_MONTH = "staffpick-best-of-the-month", _v10.BEST_OF_THE_YEAR = "staffpick-best-of-the-year", _v10.PREMIERE = "staffpick-premiere", _v10),
    _v24 = ((_v11 = {}).GRID = "grid", _v11.MASONRY = "masonry", _v11),
    _v25 = ((_v12 = {}).FACEBOOK = "facebook", _v12.TWITTER = "twitter", _v12.LINKEDIN = "linkedin", _v12.CUSTOM_LINK = "custom_link", _v12);
  let _v26 = {
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
    _v27 = ["video_details", "profile_section_uri", "is_staff_pick", "show_featured_comment", "featured_comment", "column_width", "clip.link", "clip.uri", "clip.name", "clip.type", "clip.categories.name", "clip.categories.uri", "clip.config_url", "clip.pictures", "clip.height", "clip.width", "clip.duration", "clip.description", "clip.created_time", "clip.user.uri", "clip.user.name", "clip.user.link", "clip.user.location", "clip.user.bio", "clip.user.membership.badge", "clip.user.skills", "clip.user.background_video", "clip.user.pictures.sizes", "clip.user.is_expert", "clip.badge.type", "clip.metadata.connections.comments.total", "clip.live.scheduled_start_time", "clip.live.status", "clip.live.recurring_event.link", "clip.content_rating"],
    _v28 = ["uri", "title", "userUri", "uri", "unbounded", "position", "clip_uris", "videos.total"].concat(_v27.map(_v0 => `videos.data.${_v0}`)),
    _v29 = {
      ..._v26,
      fields: _v27,
      page: 1,
      perPage: 10
    },
    _v30 = {
      ..._v26,
      includeVideos: 1,
      fields: _v28,
      videosCountPerSection: 10,
      page: 1,
      perPage: 4
    },
    _v31 = {
      ..._v26,
      fields: ["uri", "name", "type", "categories.name", "categories.uri", "config_url", "pictures", "height", "width", "duration", "description", "created_time", "badge.type", "user.uri", "live.scheduled_start_time", "live.status", "user.name", "user.link", "user.location", "user.bio", "user.membership.badge", "user.skills", "user.background_video", "user.pictures.sizes"],
      filter: "category",
      page: 1,
      perPage: 10
    };
  var _v32 = ((_v13 = {}).CLICK_TO_FOLLOW_CREATOR = "click_to_follow_creator", _v13.CLICK_TO_MESSAGE_CREATOR = "click_to_message_creator", _v13.CLICK_TO_CREATOR_LINK = "click_to_creator_link", _v13.CLICK_TO_SHARE_PROFILE = "click_to_share_profile", _v13.CLICK_TO_CATEGORY = "click_on_category", _v13.VISIT_PROFILE_PAGE = "visit_profile_page", _v13.CLICK_TO_DRAG_VIDEO = "click_to_drag_video", _v13.CLICK_TO_SWITCH_LAYOUT = "click_to_switch_layout", _v13.CLICK_TO_PUBLIC_VIDEOS_TOGGLE = "click_to_public_videos_toggle", _v13.CLICK_TO_REMOVE_FEATURED_COMMENT = "click_to_remove_featured_comment", _v13.CANCEL_FEATURED_COMMENT_MODAL = "cancel_featured_comment_modal", _v13.CLICK_TO_ADD_FEATURED_COMMENT = "click_to_add_featured_comment", _v13.CLICK_TO_UPGRADE_FORHIRE = "click_to_upgrade_forhire", _v13.UPDATE_FOREHIRE_SETTINGS = "update_forhire_settings", _v13.CATEGORIES_ADD = "categories_added", _v13.CLICK_TO_ORDER_SECTION = "click_to_order_section", _v13.CLICK_TO_REMOVE_SECTION = "click_to_remove_section", _v13.CLICK_TO_CREATE_SECTION = "click_to_create_section", _v13.CLOSE_ADD_VIDEO_MODAL = "close_add_video_modal", _v13.CLICK_TO_ADD_VIDEO = "click_to_add_video", _v13.CLOSE_COVER_VIDEO_MODAL = "close_cover_video_modal", _v13.CLICK_TO_ADD_COVER_VIDEO = "click_to_add_cover_video", _v13.CLICK_TO_JOIN_CONTACT_MODULE = "vimeo_com.click_to_join_contact_module", _v13.CLICK_PROFILE_SHARE_SOCIAL_PLATFORM = "vimeo.click_profile_share_social_platform", _v13.CLICK_GET_LISTED_BUTTON = "click_get_listed_button", _v13.CLICK_REMOVE_LISTING_BUTTON = "click_remove_listing_button", _v13.CLICK_UPGRADE_TO_GET_LISTED_BUTTON = "click_upgrade_to_get_listed_button", _v13.UPGRADE_TO_GET_LISTED_SUCCESS = "upgrade_to_get_listed_success", _v13);
  _v0.s(["ABOUT_MAX_CHAR_COUNT", 0, 0, "BPEvent", () => _v32, "COLORS", () => _v14, "COMMENT_USER_DETAIL_GAP", () => _v15, "COMMENT_WRAPPER_GAP", () => _v16, "DEFAULT_PROFILE_URI_REGEX", 0, /\/profile_sections\/default$/, "EMAIL_INVALID_DOMAIN_ERROR_CODE", 0, 0, "ErrorCodes", () => _v17, "FILTERED_VIDEOS_VARIABLES", 0, _v31, "GRID_GAP", () => _v18, "HTTPMethods", () => _v19, "IMAGE_CROP_CIRCLE_DIAMETER", 0, 200, "IMAGE_CROP_CIRCLE_DIAMETER_MOBILE", 0, 160, "KeyCodes", () => _v20, "LIVE_STATUS", () => _v21, "LOAD_MORE_DISPLAY_BUFFER", 0, 50, "MAX_CATEGORY_SELECTION_ALLOWED", 0, 6, "MAX_LINK_LENGTH", 0, 256, "MINIMUM_BIO_LENGTH", 0, 98, "MIN_NO_OF_LINKS_TO_SHOW", 0, 5, "MOBILE_FEATURE_COMMENT_PADDING", 0, 10, "PROFILE_NAME_MAX_LENGTH", 0, 32, "REGEX_URL", 0, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, "ResourceKeys", () => _v22, "SCROLL_BUFFER", 0, 200, "SCRUBBER_WIDTH", 0, 6, "SECTION_NAME_MAX_LENGTH", 0, 80, "SECTION_VARIABLES", 0, _v30, "SOCIAL_PLATFORM", () => _v25, "StaffPicks", () => _v23, "TRIMMER_ROUND_OFFSET", 0, .501, "TRUNCATE_FEATURED_COMMENT_AFTER", 0, 200, "VIDEO_COMMENTS_VARIABLES", 0, {
    fields: ["uri", "link", "text", "user.name", "user.link", "user.uri", "user.membership.badge", "user.pictures.sizes", "user.bio", "user.skills", "user.background_video", "user.location"],
    page: 1,
    perPage: 20
  }, "VIDEO_DESCRIPTION_MAX_LENGTH", 0, 0, "VIDEO_NAME_MAX_LENGTH", 0, 128, "VIDEO_VARIABLES", 0, _v29, "ViewType", () => _v24]);
}