{
  "use strict";

  let _v1 = {
      WORKSPACE: "workspace",
      ORGANIZATION: "organization"
    },
    _v2 = {
      MEMBERS: `/manage/${_v1.ORGANIZATION}/members`,
      GROUPS: `/manage/${_v1.ORGANIZATION}/groups`,
      WORKSPACES: `/manage/${_v1.ORGANIZATION}/workspaces`,
      SECURITY_AND_DATA: `/manage/${_v1.ORGANIZATION}/security-and-data`,
      SSO: `/manage/${_v1.ORGANIZATION}/security-and-data/sso`,
      AUDIT_LOGS: `/manage/${_v1.ORGANIZATION}/security-and-data/audit-logs`,
      PRIVACY_RESTRICTIONS: `/manage/${_v1.ORGANIZATION}/security-and-data/privacy-restrictions`,
      REVIEW_PAGE_SETTINGS: `/manage/${_v1.ORGANIZATION}/security-and-data/review-page-settings`,
      ALLOWLIST: `/manage/${_v1.ORGANIZATION}/security-and-data/allowlist`,
      BRAND_KITS: `/manage/${_v1.ORGANIZATION}/brand-kits`,
      USAGE: `/manage/${_v1.ORGANIZATION}/usage`
    },
    _v3 = `/manage/${_v1.WORKSPACE}/members`,
    _v4 = {
      BASICS: `/manage/${_v1.WORKSPACE}/basics`,
      MEMBERS: `/manage/${_v1.WORKSPACE}/members`,
      GROUPS: `/manage/${_v1.WORKSPACE}/groups`,
      SECURITY_AND_DATA: `/manage/${_v1.WORKSPACE}/security-and-data`,
      AUDIT_LOGS: `/manage/${_v1.WORKSPACE}/security-and-data/audit-logs`,
      PRIVACY_RESTRICTIONS: `/manage/${_v1.WORKSPACE}/security-and-data/privacy-restrictions`,
      REVIEW_PAGE_SETTINGS: `/manage/${_v1.WORKSPACE}/security-and-data/review-page-settings`,
      DATA_RETENTION: `/manage/${_v1.WORKSPACE}/security-and-data/data-retention`,
      DATA_RETENTION_CREATE: `/manage/${_v1.WORKSPACE}/security-and-data/data-retention/create`,
      DATA_RETENTION_POLICIES: `/manage/${_v1.WORKSPACE}/security-and-data/data-retention/policies`,
      DEACTIVATED_FOLDERS: `/manage/${_v1.WORKSPACE}/security-and-data/deactivated`,
      CLIP_EXTENSION: `/manage/${_v1.WORKSPACE}/security-and-data/clip-extension`,
      HISTORY_AND_RECOVERY: `/manage/${_v1.WORKSPACE}/security-and-data/history`,
      LEGAL_HOLDS: `/manage/${_v1.WORKSPACE}/security-and-data/legal-hold`,
      WEBINAR_VIEWER_ANONYMIZATION: `/manage/${_v1.WORKSPACE}/security-and-data/webinar-viewer-anonymisation`,
      DEFAULTS: `/manage/${_v1.WORKSPACE}/defaults`,
      CUSTOM_METADATA: `/manage/${_v1.WORKSPACE}/custom-metadata`,
      BRAND_KITS: `/manage/${_v1.WORKSPACE}/brand-kits`,
      PRESETS: `/manage/${_v1.WORKSPACE}/presets`,
      INTEGRATIONS: `/manage/${_v1.WORKSPACE}/integrations`,
      MANAGE_AI: `/manage/${_v1.WORKSPACE}/manage-ai`,
      E_LEARNING: `/manage/${_v1.WORKSPACE}/e-learning`,
      REGISTRATION: `/manage/${_v1.WORKSPACE}/registration`,
      USAGE: `/manage/${_v1.WORKSPACE}/usage`,
      EMAIL_DEFAULTS: `/manage/${_v1.WORKSPACE}/registration/email-defaults`
    },
    _v5 = {
      ANALYTICS: `/manage/${_v1.ORGANIZATION}/analytics`,
      SETTINGS: "/settings",
      INTEGRATION_SETTINGS: "/settings/apps",
      VIEWING_PREFERENCES: "/settings/viewing_preferences",
      NOTIFICATIONS: "/settings/notifications"
    },
    _v6 = {
      ADMIN: "admin",
      CONTRIBUTOR: "contributor",
      CONTRIBUTOR_PLUS: "contributor_plus",
      VIEWER: "viewer"
    },
    _v7 = {
      Admin: _v6.ADMIN,
      Contributor: _v6.CONTRIBUTOR,
      "Contributor Plus": _v6.CONTRIBUTOR_PLUS,
      Viewer: _v6.VIEWER
    },
    _v8 = ["admin", "contributor_plus", "contributor", "viewer"],
    _v9 = [..._v8, "workspace_admin"];
  _v0.s(["ALLOWED_ROLES_FOR_INVITE", 0, _v6, "ANALYTICS_LEARN_MORE_LINK", 0, "https://help.vimeo.com/hc/en-us/articles/12426206785553-Integrate-the-Vimeo-player-with-Google-Analytics", "BILLING_PAGE_ROUTE", 0, "https://billing.vimeo.com", "EXTERNAL_ROUTES", 0, _v5, "GOOGLE_TEXT_4", 0, _v0 => `<script type="text/javascript" defer="defer" src="https://extend.vimeocdn.com/ga4/${_v0}.js"></script>`, "GOOGLE_TEXT_4_LEGACY", 0, _v0 => `<script type="text/javascript" defer="defer" src="https://extend.vimeocdn.com/ga/${_v0}.js"></script>`, "INVITE_MEMBER_MODAL_PRIMARY_BUTTON_ID", 0, "inviteMemberModalPrimaryButtonId", "INVITE_STATUS", 0, {
    ACCEPTED: "accepted"
  }, "MAX_ALLOWED_EMAIL_INVITES", 0, 10, "MAX_LENGTH_OF_EMAIL_ADDRESS", 0, 128, "MAX_LENGTH_OF_INVITATION_NOTE", 0, 500, "MAX_LENGTH_OF_WORKSPACE_NAME", 0, 32, "MIN_LENGTH_OF_WORKSPACE_NAME", 0, 3, "ORGANIZATION_ROLES", 0, {
    OWNER: "Owner",
    ADMIN: "Admin",
    MEMBER: "Organization Member"
  }, "ORGANIZATION_ROLE_CHANGE_OPTIONS", 0, {
    ORGANIZATION_MEMBER: "organization_member",
    ADMIN: "admin"
  }, "ORGANIZATION_SETTINGS_ROUTES", 0, _v2, "ORG_FILTER_BREAKPOINTS", 0, {
    base: 0,
    sm: 0,
    md: 1,
    lg: 3
  }, "ORG_MEMBERS_PER_PAGE_ITEM_COUNT", 0, 50, "ORG_MEMBERS_ROLES_FILTER_VALUES", 0, _v9, "ORG_NAME_MAX_LENGTH", 0, 32, "ORG_NAME_MIN_LENGTH", 0, 3, "PATH", 0, _v1, "PERMISSION_LEVELS", 0, {
    OWNER: 1,
    ADMIN: 2,
    UPLOADER: 3,
    CONTRIBUTER: 4,
    VIEWER: 5,
    CONTRIBUTER_PLUS: 6,
    ORG_MEMBER: 7
  }, "PER_PAGE_WORKSPACES", 0, 100, "POSSIBLE_INVITATION_STEPS", 0, {
    ADD_EMAIL_ADDRESSES: "addEmailAddresses",
    ADD_INVITATION_NOTE: "addInvitationNote",
    INVITATION_SENT: "invitationSent",
    SELECT_WORKSPACE_AND_ROLE: "selectWorkspaceAndRole",
    SHARE_FOLDER: "shareFolder"
  }, "UPLOAD_FILE_SIZE_LIMIT_5MB", 0, 0, "UPLOAD_FILE_VALID_TYPES", 0, ["image/jpeg", "image/png"], "USER_PREFERENCE_ID", 0, {
    PREF_ORGANIZATION_UUID: "orguid",
    PREF_WORKSPACE_UUID: "wspuid"
  }, "WORKSPACE_FILTER_BREAKPOINTS", 0, {
    base: 0,
    sm: 0,
    md: 2,
    lg: 2
  }, "WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT", 0, 50, "WORKSPACE_MEMBER_SETTINGS_ROUTE", 0, _v3, "WORKSPACE_ROLES", 0, {
    CONTRIBUTER: "Contributor",
    CONTRIBUTER_PLUS: "Contributor Plus",
    VIEWER: "Viewer",
    ADMIN: "Admin"
  }, "WORKSPACE_SETTINGS_ROUTES", 0, _v4, "WSP_MEMBERS_ROLES_FILTER_VALUES", 0, _v8, "WS_MEMBER_PERMISSION_LEVEL_TO_ROLE_FOR_INVITE", 0, _v7]);
}