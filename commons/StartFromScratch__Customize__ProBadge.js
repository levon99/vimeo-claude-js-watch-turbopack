{
  "use strict";

  var _v1,
    _v2,
    _v3 = ((_v1 = {})[_v1.StartFromScratch = 0] = "StartFromScratch", _v1[_v1.Customize = 1] = "Customize", _v1[_v1.ProBadge = 2] = "ProBadge", _v1),
    _v4 = ((_v2 = {})[_v2.TVE = 0] = "TVE", _v2[_v2.BRAND = 1] = "BRAND", _v2[_v2.STOCK = 2] = "STOCK", _v2[_v2.TIER_BADGE = 3] = "TIER_BADGE", _v2[_v2.PLUS = 4] = "PLUS", _v2[_v2.PRO = 5] = "PRO", _v2[_v2.BUSINESS = 6] = "BUSINESS", _v2[_v2.PLUS_PRO = 7] = "PLUS_PRO", _v2[_v2.PRO_BUSINESS = 8] = "PRO_BUSINESS", _v2[_v2.STORAGE_QUOTA = 9] = "STORAGE_QUOTA", _v2[_v2.CREATE_QUOTA_NOTIFICATION = 10] = "CREATE_QUOTA_NOTIFICATION", _v2[_v2.FREEMIUM = 11] = "FREEMIUM", _v2[_v2.STARTER = 12] = "STARTER", _v2[_v2.STANDARD = 13] = "STANDARD", _v2[_v2.ADVANCED = 14] = "ADVANCED", _v2[_v2.STANDARD_BRAND = 15] = "STANDARD_BRAND", _v2[_v2.ENTERPRISE = 16] = "ENTERPRISE", _v2[_v2.STARTER_BLOCKING = 17] = "STARTER_BLOCKING", _v2[_v2.STANDARD_BLOCKING = 18] = "STANDARD_BLOCKING", _v2[_v2.ADVANCED_BLOCKING = 19] = "ADVANCED_BLOCKING", _v2[_v2.ENTERPRISE_BLOCKING = 20] = "ENTERPRISE_BLOCKING", _v2[_v2.NONE = 21] = "NONE", _v2);
  _v0.s(["COLORS", 0, {
    LightGrey: "#8498a4",
    LightBlue: "#a5d7e3",
    createBlue: "#b0dce7",
    createLightGray: "#E6EAEC",
    darkBlue: "#093AC9",
    hoverBluePrimary: "#0088cc"
  }, "CreationPath", () => _v3, "DIRECT_CUSTOMIZE_URLPARAM", 0, "direct", "FEATURE_FLAGS", 0, {
    enableStartFromScratch: !0,
    enableIntroVideo: !0
  }, "IMAGE_ASSETS_PATH", 0, "https://i.vimeocdn.com/custom_asset/", "JOB_DONE", 0, "DONE", "JOB_ERROR", 0, "ERR", "JOB_POLL_DELAY", 0, 0, "JOB_PRCS", 0, "PRCS", "LP_ONBOARDING_ID_URLPARAM", 0, "onboardingID", "QUERY", 0, "q", "SHOPIFY_APP_STORE_URL", 0, "https://apps.shopify.com/vimeo_product_video_maker?surface_detail=vimeo&surface_inter_position=1&surface_intra_position=4&surface_type=search", "SHOPIFY_LP_FIRST_SI", 0, "first_si", "SHOPIFY_LP_FIRST_SO", 0, "first_so", "SHOPIFY_LP_KEY", 0, "_SHOPIFY_LANDING_PAGE_FLOW", "SHOPIFY_LP_SECOND_SI", 0, "second_si", "SHOPIFY_LP_SECOND_SO", 0, "second_so", "SHOPIFY_LP_URLPARAM", 0, "slpf", "SHOPIFY_RATE_US_MODAL_IMAGE_SRC", 0, "https://i.vimeocdn.com/custom_asset/1733", "SHOPIFY_STORE_RATING_URL", 0, "https://apps.shopify.com/vimeo_product_video_maker#modal-show=ReviewListingModal", "TEMPLATE_FREEMIUM_IMPRESSION_KEY", 0, "freemiumSoftUpsellCustomize", "TOGGLE_WATERMARK_IMPRESSION_KEY", 0, "preview-pro-upsell-shown", "USER_MIGRATION_STATUS", 0, {
    NOT_MIGRATED: 0,
    IN_MIGRATION: 1,
    MIGRATED: 2
  }, "UpsellType", () => _v4, "VC_BACKEND_ERROR_CODES", 0, {
    NOT_ENOUGH_TIER: 0,
    NOT_ENOUGH_STORAGE_QUOTA: 0,
    RESTRICTED_VIDEO_STORAGE_LIMIT_EXCEEDED: 0,
    UPLOAD_RESTRICTED_STORAGE_LIMIT_EXCEEDED: 0
  }, "VIDEO_DATA_FIELDS", 0, ["edit_session.is_max_resolution", "download.link", "download.public_name", "download.video_file_id", "download.quality", "download.size_short", "download.type", "download.width", "download.height"], "VIMEO_ACCESS_TOKEN_SCOPES", 0, ["public", "private", "create", "edit", "upload"], "VIMEO_CREATE_ANDROID_APP_ID", 0, 0, "VIMEO_CREATE_BACKEND_APP_ID", 0, 0, "VIMEO_CREATE_IOS_APP_ID", 0, 0, "VIMEO_CREATE_WEB_APP_ID", 0, 0]);
}