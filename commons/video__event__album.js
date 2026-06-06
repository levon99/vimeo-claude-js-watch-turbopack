{
  "use strict";

  let _v1 = {
      VIDEO: "video",
      EVENT: "event",
      SHOWCASE: "album",
      EMPTY: ""
    },
    _v2 = {
      [_v1.VIDEO]: "videos",
      [_v1.EVENT]: "live_events",
      [_v1.SHOWCASE]: "albums"
    };
  _v0.s(["DOUBLE_GATE_BROADCAST_CHANNEL", 0, "lc_double_gate", "DOUBLE_GATE_MESSAGE_TYPE", 0, {
    REQUEST_PARENT_LEAD_DETAILS: "requestParentLeadDetails",
    RESPONSE_PARENT_LEAD_DETAILS: "responseParentLeadDetails"
  }, "EMAIL_REGEX", 0, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "ENTITY_TO_PATH_MAP", 0, _v2, "ENTITY_TYPE", 0, _v1, "GET_TROUBLESHOOTING_TIPS", 0, "https://help.vimeo.com/hc/en-us/articles/20925479262737-How-to-sync-a-contact-form-with-your-email-service-provider", "KEY_CODES", 0, {
    TAB: "Tab",
    ENTER: "Enter",
    ESCAPE: "Escape"
  }, "LEAD_CAPTURE_COOKIE_NAME_PREFIX", 0, "lc_", "LOCATION_STATE", 0, {
    TAB: "tab",
    SIDE_MENU: "side_menu",
    PREVIEW_TYPE: "preview_type",
    SECTION: "section"
  }, "MAX_URL_LINK", 0, 250, "PROVIDER_ID_TO_SERVICE_ID_MAPPING", 0, {
    1: "mailchimp",
    2: "campaign_monitor",
    3: "constant_contact",
    4: "infusionsoft",
    5: "hubspot",
    6: "constant_contact_v3",
    7: "marketo",
    8: "salescloud"
  }]);
}