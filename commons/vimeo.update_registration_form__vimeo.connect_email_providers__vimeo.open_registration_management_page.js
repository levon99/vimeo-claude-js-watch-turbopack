{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      UPDATE_REGISTRATION_FORM: "vimeo.update_registration_form",
      CONNECT_EMAIL_PROVIDERS: "vimeo.connect_email_providers",
      OPEN_REGISTRATION_MANAGEMENT_PAGE: "vimeo.open_registration_management_page",
      REGISTRATION_FORM_COMPLETE: "vimeo.registration_form_complete",
      REGISTRATION_FORM_VIEWED: "vimeo.registration_form_viewed",
      UPDATE_PRESET: "vimeo.update_preset",
      IMPRESSION_INITIAL_STATE: "vimeo.impression_intial_state",
      IMPRESSION_PRESET_CHANGED: "vimeo.impression_preset_changed",
      NOTIFICATION_VIEW: "vimeo.notification_view",
      UPSELL_TRIGGER_IMPRESSION: "vimeo.upsell_trigger_impression",
      REGISTRATION_FROM_ACTION: "vimeo.registration_form_action"
    },
    _v3 = {
      [_v2.REGISTRATION_FORM_VIEWED]: 4,
      [_v2.REGISTRATION_FORM_COMPLETE]: 6,
      [_v2.REGISTRATION_FROM_ACTION]: 13
    },
    _v4 = {
      SELECT_MULTISTEP_LAYOUT: "select_multistep_layout",
      SELECT_SINGLESTEP_LAYOUT: "select_singlestep_layout",
      SELECT_LAYOUT: "select_layout_option",
      SELECT_APPEARANCE_TAB: "select_appearance_tab",
      SELECT_FORM_TAB: "select_fields_tab",
      LOGO_UPDATE: "logo_update",
      BACKGROUND_UPDATE: "background_update",
      TOGGLE_DATE: "toggle_date",
      TOGGLE_ADD_TO_CALENDAR: "toggle_add_to_calendar",
      CONNECT_EMAIL_PROVIDERS: "connect_email_providers",
      CREATE_HIDDEN_FIELD: "create_hidden_field",
      CHECK_HIDDEN_FIELD: "check_hidden_field",
      ADD_REGISTRATION_FIELD_TEXT: "add_registration_field_text",
      ADD_REGISTRATION_FIELD_DROPDOWN: "add_registration_field_dropdown",
      ADD_REGISTRATION_FIELD_CHECKBOX: "add_registration_field_checkbox",
      DELETE_REGISTRATION_FIELD: "delete_registration_field",
      ADD_EMAIL_LIST_PROVIDER: "add_email_list_provider",
      ADD_DYNAMIC_ELEMENT: "add_dynamic_element",
      SELECT_PREVIEW_OPTION: "select_preview_option",
      SELECT_PLACEMENT: "select_placement",
      TOGGLE_SKIP_FORM: "toggle_skip_form",
      TOGGLE_SINGLE_STEP_FORM: "toggle_single_step_form"
    },
    _v5 = {
      [_v1.CustomFieldTypes.Text]: _v4.ADD_REGISTRATION_FIELD_TEXT,
      [_v1.CustomFieldTypes.Dropdown]: _v4.ADD_REGISTRATION_FIELD_DROPDOWN,
      [_v1.CustomFieldTypes.Checkbox]: _v4.ADD_REGISTRATION_FIELD_CHECKBOX
    },
    _v6 = {
      [_v1.CustomFieldTypes.Text]: "field_text",
      [_v1.CustomFieldTypes.Dropdown]: "field_dropdown",
      [_v1.CustomFieldTypes.Checkbox]: "field_checkbox"
    };
  _v0.s(["BP_ACTION_NAME", 0, _v4, "BP_COPY", 0, {
    MANAGE_PROVIDERS: "Manage Providers",
    CONNECT_PROVIDERS: "Connect Providers",
    APPEARANCE: "Appearance",
    FIELDS: "Fields",
    SIGN_IN_SCREEN: "Sign-in-screen",
    CONFIRMATION: "Confirmation",
    FORM: "Form",
    ON: "on",
    OFF: "off",
    BEFORE_VIDEO: "before video",
    DURING_VIDEO: "during video",
    AFTER_VIDEO: "after video",
    NONE_APPLIED: "none_applied",
    SAVE: "save",
    DELETE: "delete",
    APPLY: "apply",
    UPGRADE: "upgrade"
  }, "BP_CURRENT_SCHEMA_VERSION", 0, 13, "BP_CURRENT_VERSION_PRESET", 0, 12, "BP_ELEMENT", 0, {
    CARD: "card",
    BUTTON: "button",
    DROPDOWN: "dropdown",
    CHECKBOX: "checkbox",
    TOGGLE: "toggle",
    CHECK_BOX: "check_box",
    TAB: "tab",
    TOP_ACTION_BAR: "top_action_bar"
  }, "BP_EVENT_NAMES", 0, _v2, "BP_EVENT_VERSIONS", 0, _v3, "BP_FEATURE", 0, {
    REGISTRATION: "registration"
  }, "BP_FLOW", 0, {
    FORM_FIELDS_TAB: "form_fields_tab",
    REGISTRATION_DRAWER: "registration_drawer",
    FORM_TAB: "form_tab"
  }, "BP_INTEGRATION_TYPE", 0, {
    CORE_CONNECT: "core_connect"
  }, "BP_LOCATION", 0, {
    LIVE_EVENT_REGISTRATION_DRAWER: "live_event_registration_drawer",
    SIDE_NAV: "side_nav",
    DRAWER: "drawer",
    TOP_ACTION_BAR: "top_action_bar",
    NOTIFICATION: "notification",
    WIDGET: "widget",
    BANNER: "banner"
  }, "BP_PAGE", 0, {
    EVENT_REGISTRATION_PAGE: "event_registration_page",
    SINGLE_VIDEO_VIEW_MANAGE: "single_video_view_manage",
    SHOWCASE_MANAGER: "showcase_manager"
  }, "BP_PARTNER_BUCKET", 0, {
    MARKETING: "Marketing"
  }, "BP_PRODUCT", 0, {
    GATES: "gates"
  }, "BP_REFERRER_PAGE_NAME", 0, {
    SVVM: "single_video_view_manage"
  }, "BP_TARGET", 0, {
    USER_SETTINGS: "user_settings",
    UPGRADE_PAGE: "upgrade_page"
  }, "DEFAULT_SCHEMA_VERSION", 0, 7, "FIELD_TO_TYPE_MAPPING", 0, _v6, "FIELD_TYPE_TO_ACTION_MAPPING", 0, _v5, "UPSELL_NAME", 0, {
    ADD_VIDEO_REG_CAPABILITY: "add_video_registration_capability",
    ADD_SHOWCASE_REG_CAPABILITY: "add_showcase_registration_capability"
  }]);
}