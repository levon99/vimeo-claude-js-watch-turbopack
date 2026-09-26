{
  "use strict";

  _v0.s(["ACCOUNTS", 0, "accounts", "ACTION_TYPE", 0, {
    CLICK: "click",
    IMPRESSION: "impression",
    CLIENT_PROCESS: "client_process"
  }, "ELEMENT", 0, {
    DROPDOWN_HEADER: "dropdown_header",
    ELLIPSES: "ellipses",
    BUTTON: "button",
    MODAL: "modal",
    DROPDOWN: "dropdown",
    PAGE: "page",
    CONTENT_AREA: "content_area",
    TEXT: "text"
  }, "ENTITY_TYPE", 0, {
    ORGANIZATION: "organization",
    USER: "user",
    WORKSPACE: "workspace",
    GROUP: "group"
  }, "EVENTS", 0, {
    CLICK_IN_ACCOUNT_MANAGEMENT_NAV_BAR: "vimeo.click_in_account_managment_nav_bar",
    CLICK_IN_TEAM_MEMBER_MENU: "vimeo.click_in_team_member_menu",
    INVITE_MEMBERS_TO_TEAM: "vimeo.invite_members_to_team",
    OPEN_TEAM_MEMBER_MENU: "vimeo.open_team_member_menu",
    OPEN_TEAM_INVITE_MODAL: "vimeo.open_team_invite_modal",
    VIEW_TEAM_MANAGEMENT_PAGE: "vimeo.team_management_page",
    SORT_TEAM_MEMBERS_LIST: "vimeo.sort_team_members_list",
    FILTER_TEAM_MEMBERS_LIST: "vimeo.filter_team_members_list",
    CHANGE_IN_ACCOUNT_SETTINGS: "vimeo.change_in_account_settings",
    GENERAL_CLICK: "vimeo.click",
    GROUP_OPEN: "vimeo.group_open",
    GROUP_MEMBER_SEARCH: "vimeo.group_member_search",
    GROUP_SEARCH: "vimeo.group_search",
    GROUP_CREATION: "vimeo.group_creation",
    GROUP_UPDATE: "vimeo.group_update",
    GROUP_DELETE: "vimeo.group_delete"
  }, "FEATURE", 0, {
    ACCOUNT: "account",
    ACCOUNT_MANAGEMENT: "accounts_management",
    SHARE: "share",
    FOLDER: "folder",
    UPLOAD: "upload",
    TEAM_MANAGEMENT: "team_management",
    TEAMS: "teams",
    SETTINGS: "settings"
  }, "LOCATION", 0, {
    TOP_NAVIGATION_BAR: "top_navigation_bar",
    ACCOUNT_SWITCHER_DROPDOWN: "account_switcher_dropdown",
    MEMBERS_ROSTER: "members_roster",
    MENU: "menu",
    TOP_TOOLBAR: "top_toolbar",
    MODAL: "modal",
    PAGE_VIEW: "not_applicable_pageview",
    SIDE_NAV: "side_nav",
    BAR: "bar",
    CARD: "card",
    TOP: "top",
    TEAM_GROUPS_ROW: "team_groups_row",
    PAGE_AREA: "page_area"
  }, "MODAL_NAME", 0, {
    INVITATION_MODAL: "invitation_modal"
  }, "PAGE_NAME", 0, {
    TEAM_MANAGEMENT: "team_management_page",
    WORKSPACE_MANAGEMENT: "workspace_management",
    ORGANIZATION_MANAGEMENT: "organization_management"
  }, "TAB_NAME", 0, {
    PEOPLE: "people",
    WORKSPACE_MEMBERS: "workspace_members"
  }], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["Contexts", 0, () => ({
    buildProductAnalyticsContext: ({
      feature: _v0,
      product: _v1,
      element: _v2,
      location: _v3,
      copy: _v4,
      modal_name: _v5,
      flow: _v6,
      entity_type: _v7
    }) => (0, _v3.buildProductAnalyticsBpContext)({
      feature: _v0,
      product: _v1,
      element: _v2,
      location: _v3,
      copy: _v4,
      modal_name: _v5,
      device_type: (0, _v1.default)(),
      flow: _v6,
      entity_type: _v7
    }),
    buildActionContext: ({
      action_type: _v0
    }) => (0, _v2.buildActionBpContext)({
      action_type: _v0,
      feature: null
    }),
    buildViewContext: ({
      view_type: _v0
    }) => (0, _v8.buildViewBpContext)({
      view_type: _v0,
      feature: null
    }),
    buildWebContext: ({
      page_name: _v0,
      referrer: _v1 = null,
      referrer_page_name: _v2,
      path: _v3
    }) => (0, _v9.buildWebBpContext)({
      page_name: _v0,
      referrer: _v1,
      referrer_page_name: _v2,
      path: _v3
    }),
    buildTeamContext: ({
      teamUser: _v0
    }) => (0, _v4.buildTeamBpContextFromTeamUser)(_v0),
    buildTargetTeamContext: ({
      team_owner_id: _v0,
      team_subscription_type: _v1,
      team_role: _v2,
      team_id: _v3,
      resource_permission_level: _v4
    }) => (0, _v6.buildTargetTeamBpContext)({
      is_team_member: !0,
      team_owner_id: _v0 || null,
      team_subscription_type: _v1 || null,
      team_role: _v2,
      team_id: _v3 || null,
      resource_permission_level: _v4,
      joined_team_at: null
    }),
    buildContentManagementContext: ({
      origin_location: _v0,
      destination_location: _v1,
      number_of_items: _v2,
      destination_privacy: _v3,
      origin_privacy: _v4,
      entity_id: _v5
    }) => (0, _v7.buildContentManagementBpContext)({
      origin_location: _v0,
      destination_location: _v1,
      number_of_items: _v2,
      destination_privacy: _v3,
      origin_privacy: _v4,
      entity_id: _v5
    }),
    buildThirdPartyContext: () => (0, _v5.buildThirdPartyIntegrationBpContext)({
      is_integration: !1,
      integration_id: null,
      integration_name: null,
      is_partner: null
    })
  })], 0);
}