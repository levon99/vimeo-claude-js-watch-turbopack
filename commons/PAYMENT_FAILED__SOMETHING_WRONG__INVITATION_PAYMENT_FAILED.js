{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = ((_v1 = {}).PAYMENT_FAILED = "PAYMENT_FAILED", _v1.SOMETHING_WRONG = "SOMETHING_WRONG", _v1.INVITATION_PAYMENT_FAILED = "INVITATION_PAYMENT_FAILED", _v1.PURCHASE_SUCCESSFULL = "PURCHASE_SUCCESSFULL", _v1.PURCHASE_SUCCESSFULL_WITH_SEATS = "PURCHASE_SUCCESSFULL_WITH_SEATS", _v1.INVITATION_FAILED = "INVITATION_FAILED", _v1.PURCHASE_INVITATION_SUCCESSFULL = "PURCHASE_INVITATION_SUCCESSFULL", _v1.BILLING_FETCH_FAILED = "BILLING_FETCH_FAILED", _v1.ADDED_SEATS_SUCCESSFULLY = "ADDED_SEATS_SUCCESSFULLY", _v1),
    _v5 = ((_v2 = {})[_v2.INVITE_MODAL = 1] = "INVITE_MODAL", _v2[_v2.RESOURCE_SHARE_MODAL = 2] = "RESOURCE_SHARE_MODAL", _v2[_v2.FOLDER_SHARE_MODAL = 3] = "FOLDER_SHARE_MODAL", _v2[_v2.VIDEO_SHARE_MODAL = 4] = "VIDEO_SHARE_MODAL", _v2[_v2.ROLE_CHANGE_MENU = 5] = "ROLE_CHANGE_MENU", _v2[_v2.BILLING_PAGE_ADD_SEATS = 6] = "BILLING_PAGE_ADD_SEATS", _v2[_v2.UPSELL_BANNER = 7] = "UPSELL_BANNER", _v2[_v2.ONBOARDING_INVITES = 8] = "ONBOARDING_INVITES", _v2),
    _v6 = ((_v3 = {}).OPEN_CARD_DROPDOWN = "vimeo.open_card_dropdown", _v3.CHANGE_PAYMENT_METHOD = "vimeo.change_payment_method", _v3.ADD_PAYMENT_METHOD = "vimeo.add_payment_method", _v3);
  _v0.s(["BILLING_EVENTS", () => _v6, "EVENT_FEATURE_ONBOARDING", 0, "onboarding", "EVENT_FEATURE_TEAM_MANAGEMENT", 0, "team_management", "EVENT_LOCATION", 0, {
    6: "billing_page_add_seats_button",
    1: "team_management_invite_modal",
    2: "resource_share_modal",
    3: "folder_share_modal",
    4: "video_share_modal",
    5: "team_management_role_change_menu",
    7: "team_management_upsell_banner",
    8: "onboarding"
  }, "EVENT_NAMES", 0, {
    PURCHASE_TEAM_SEATS: "vimeo.purchase_team_seats",
    CONFIRM_TEAM_SEAT_PURCHASE: "vimeo.confirm_team_seat_purchase",
    PURCHASE_TEAM_SEATS_FAILED: "vimeo.purchase_team_seats_failed",
    CHANGE_NUMBER_OF_SEATS: "vimeo.change_number_of_seats",
    ZUORA_ORDER_COMPLETED: "vimeo.zuora_order_completed"
  }, "EVENT_PRODUCT", 0, "Collaboration", "NOTICE_TYPES", () => _v4, "PURCHASE_FAILURE_REASON", 0, {
    UNSUPPORTED_PAYPAL_PAYMENT: "unsupported_paypal_payment",
    UNKNOWN: "unknown"
  }, "PURCHASE_TRIGGERED_FROM", () => _v5, "tiers", 0, {
    free: "Free",
    starter: "Starter",
    standard: "Standard",
    advanced: "Advanced"
  }]);
}