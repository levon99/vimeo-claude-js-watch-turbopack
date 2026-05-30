{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useTrackEvents", 0, () => {
    let {
        buildActionContext: _v0,
        buildProductAnalyticsContext: _v1,
        buildTeamContext: _v2,
        buildThirdPartyContext: _v3,
        buildViewContext: _v4,
        buildWebContext: _v5
      } = (0, _v5.Contexts)(),
      _v6 = (0, _v3.useViewer)();
    return {
      openTeamInviteModal: ({
        orgId: _v0,
        orgName: _v1
      }) => {
        let _v2 = _v0({
            action_type: _v4.ACTION_TYPE.CLICK
          }),
          _v3 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: _v4.ELEMENT.BUTTON,
            copy: "invite",
            flow: null,
            entity_type: _v4.ENTITY_TYPE.ORGANIZATION,
            location: _v4.LOCATION.TOP_TOOLBAR,
            modal_name: null
          }),
          _v4 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer_page_name: null,
            referrer: document.referrer ?? null,
            path: window.location.pathname
          });
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.OPEN_TEAM_INVITE_MODAL, {
          ..._v2,
          ..._v3,
          ..._v4,
          ..._v2({
            teamUser: void 0
          })
        }, 4, {
          search_query: null,
          search_result_qty: null,
          action_name: null,
          action_value: null,
          entity_id: _v0,
          entity_name: _v1,
          tab_name: null,
          number_of_users_invited: null,
          new_role: null,
          old_role: null,
          includes_message: null,
          filter_name: null,
          filter_value: null,
          sorted_by_field: null,
          new_resource_permission: null,
          old_resource_permission: null
        });
      },
      sendClickInAccountManagementNavBarEvent: ({
        buttonText: _v0,
        tabName: _v1
      }) => {
        let _v2 = _v0({
            action_type: _v4.ACTION_TYPE.CLICK
          }),
          _v3 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: _v4.ELEMENT.BUTTON,
            location: _v4.LOCATION.SIDE_NAV,
            copy: _v0,
            modal_name: null,
            flow: null,
            entity_type: null
          }),
          _v4 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer: document.referrer ?? null,
            referrer_page_name: null,
            path: window.location.pathname
          }),
          _v5 = _v2({
            teamUser: _v6.teamUser
          });
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.CLICK_IN_ACCOUNT_MANAGEMENT_NAV_BAR, {
          ..._v2,
          ..._v3,
          ..._v4,
          ..._v5
        }, 4, {
          search_query: null,
          search_result_qty: null,
          action_name: null,
          action_value: null,
          entity_name: null,
          entity_id: null,
          tab_name: _v1,
          number_of_users_invited: null,
          new_role: null,
          old_role: null,
          includes_message: null,
          filter_name: null,
          filter_value: null,
          sorted_by_field: null,
          new_resource_permission: null,
          old_resource_permission: null
        });
      },
      sendClickInTeamMemberMenuEvent: ({
        actionName: _v0,
        buttonText: _v1,
        memberId: _v2,
        memberName: _v3
      }) => {
        let _v4 = _v0({
            action_type: _v4.ACTION_TYPE.CLICK
          }),
          _v5 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: _v4.ELEMENT.BUTTON,
            location: _v4.LOCATION.MENU,
            copy: _v1,
            modal_name: null,
            flow: null,
            entity_type: _v4.ENTITY_TYPE.USER
          }),
          _v6 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer: document.referrer ?? null,
            referrer_page_name: null,
            path: window.location.pathname
          }),
          _v7 = _v2({
            teamUser: _v6.teamUser
          });
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.CLICK_IN_TEAM_MEMBER_MENU, {
          ..._v4,
          ..._v5,
          ..._v6,
          ..._v7
        }, 4, {
          search_query: null,
          search_result_qty: null,
          action_name: _v0,
          action_value: null,
          entity_name: _v3,
          entity_id: _v2,
          tab_name: _v4.TAB_NAME.PEOPLE,
          number_of_users_invited: null,
          new_role: null,
          old_role: null,
          includes_message: null,
          filter_name: null,
          filter_value: null,
          sorted_by_field: null,
          new_resource_permission: null,
          old_resource_permission: null
        });
      },
      sendOpenMemberMenuEvent: ({
        memberId: _v0,
        memberName: _v1
      }) => {
        let _v2 = _v0({
            action_type: _v4.ACTION_TYPE.CLICK
          }),
          _v3 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: _v4.ELEMENT.ELLIPSES,
            location: _v4.LOCATION.MEMBERS_ROSTER,
            copy: null,
            modal_name: null,
            flow: null,
            entity_type: _v4.ENTITY_TYPE.USER
          }),
          _v4 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer: document.referrer ?? null,
            referrer_page_name: null,
            path: window.location.pathname
          }),
          _v5 = _v2({
            teamUser: _v6.teamUser
          });
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.OPEN_TEAM_MEMBER_MENU, {
          ..._v2,
          ..._v3,
          ..._v4,
          ..._v5
        }, 4, {
          search_query: null,
          search_result_qty: null,
          action_name: null,
          action_value: null,
          entity_name: _v1,
          entity_id: _v0,
          tab_name: _v4.TAB_NAME.PEOPLE,
          number_of_users_invited: null,
          new_role: null,
          old_role: null,
          includes_message: null,
          filter_name: null,
          filter_value: null,
          sorted_by_field: null,
          new_resource_permission: null,
          old_resource_permission: null
        });
      },
      sendInviteMembersToTeamEvent: ({
        entityId: _v0,
        entityName: _v1,
        entityType: _v2,
        includesMessage: _v3,
        inviteRole: _v4,
        numberOfInvitedMembers: _v5
      }) => {
        let _v6 = _v0({
            action_type: _v4.ACTION_TYPE.CLICK
          }),
          _v7 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: _v4.ELEMENT.BUTTON,
            location: _v4.LOCATION.MODAL,
            copy: null,
            modal_name: _v4.MODAL_NAME.INVITATION_MODAL,
            flow: null,
            entity_type: _v2
          }),
          _v8 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer: window.location.href ?? null,
            referrer_page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            path: window.location.pathname
          }),
          _v9 = _v2({
            teamUser: _v6.teamUser
          });
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.INVITE_MEMBERS_TO_TEAM, {
          ..._v6,
          ..._v7,
          ..._v8,
          ..._v9
        }, 4, {
          search_query: null,
          search_result_qty: null,
          action_name: null,
          action_value: null,
          entity_name: _v1,
          entity_id: _v0,
          tab_name: null,
          number_of_users_invited: _v5,
          new_role: _v4,
          old_role: null,
          includes_message: _v3,
          filter_name: null,
          filter_value: null,
          sorted_by_field: null,
          new_resource_permission: null,
          old_resource_permission: null
        });
      },
      sendChangeInAccountSettingsEvent: ({
        location: _v0,
        buttonText: _v1,
        entityType: _v2,
        tabName: _v3,
        actionName: _v4,
        actionValue: _v5 = null
      }) => {
        let _v6 = _v0({
            action_type: _v4.ACTION_TYPE.CLICK
          }),
          _v7 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: _v4.ELEMENT.BUTTON,
            location: _v0,
            copy: _v1,
            modal_name: null,
            flow: null,
            entity_type: _v2
          }),
          _v8 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer: document.referrer ?? null,
            referrer_page_name: null,
            path: window.location.pathname
          }),
          _v9 = _v2({
            teamUser: _v6.teamUser
          });
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.CHANGE_IN_ACCOUNT_SETTINGS, {
          ..._v6,
          ..._v7,
          ..._v8,
          ..._v9
        }, 4, {
          search_query: null,
          search_result_qty: null,
          entity_id: null,
          entity_name: null,
          parent_name: null,
          parent_id: null,
          tab_name: _v3,
          number_of_users_invited: null,
          new_role: null,
          old_role: null,
          includes_message: !1,
          action_name: _v4,
          action_value: _v5,
          status: null,
          sorted_by_field: null,
          filter_name: null,
          filter_value: null,
          member_user_is: null
        });
      },
      sendTeamManagementPageView: () => {
        let _v0 = _v4({
            view_type: _v4.ACTION_TYPE.IMPRESSION
          }),
          _v1 = _v5({
            page_name: _v4.PAGE_NAME.TEAM_MANAGEMENT,
            referrer_page_name: null,
            referrer: document.referrer ?? null,
            path: window.location.pathname
          }),
          _v2 = _v2({
            teamUser: _v6.teamUser
          }),
          _v3 = _v1({
            feature: _v4.FEATURE.ACCOUNT_MANAGEMENT,
            product: _v4.ACCOUNTS,
            element: null,
            location: _v4.LOCATION.PAGE_VIEW,
            copy: null,
            modal_name: null,
            flow: null,
            entity_type: null
          }),
          _v4 = _v3();
        (0, _v2.sendBpEventWithContexts)(_v4.EVENTS.VIEW_TEAM_MANAGEMENT_PAGE, {
          ..._v0,
          ..._v1,
          ..._v2,
          ..._v4,
          ..._v3
        }, 1);
      },
      sendSortTeamMembersListEvent: ({
        field: _v0,
        direction: _v1
      }) => _v1.BigPictureClient.sendEvent(new _v1.Event(_v4.EVENTS.SORT_TEAM_MEMBERS_LIST, 1, {
        product: "accounts",
        user_id: _v6.user?.id?.toString() ?? null,
        field: _v0,
        direction: _v1
      })),
      sendFilterTeamMembersListEvent: ({
        filter: _v0,
        filterValues: _v1
      }) => _v1.BigPictureClient.sendEvent(new _v1.Event(_v4.EVENTS.FILTER_TEAM_MEMBERS_LIST, 4, {
        product: "accounts",
        user_id: _v6.user?.id?.toString() ?? null,
        filter: _v0,
        filter_values: _v1
      })),
      sendOrganizationMemberExportEvent: ({
        path: _v0
      }) => _v1.BigPictureClient.sendEvent(new _v1.Event(_v4.EVENTS.GENERAL_CLICK, 45, {
        copy: null,
        feature: "team_management",
        location: "header",
        name: "export_organization_members",
        page: _v0,
        target: null,
        type: "general"
      })),
      sendWorkspaceMemberExportEvent: ({
        path: _v0
      }) => _v1.BigPictureClient.sendEvent(new _v1.Event(_v4.EVENTS.GENERAL_CLICK, 45, {
        copy: null,
        feature: "team_management",
        location: "header",
        name: "export_workspace_members",
        page: _v0,
        target: null,
        type: "general"
      }))
    };
  }]);
}