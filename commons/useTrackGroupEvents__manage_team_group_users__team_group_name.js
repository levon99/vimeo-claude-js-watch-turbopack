{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useTrackGroupEvents", 0, _v0 => {
    let _v1 = (0, _v6.useViewer)(),
      {
        pathname: _v2
      } = (0, _v1.useRouter)(),
      {
        buildActionContext: _v3,
        buildProductAnalyticsContext: _v4,
        buildTeamContext: _v5,
        buildThirdPartyContext: _v6,
        buildWebContext: _v7
      } = (0, _v8.Contexts)(),
      _v8 = (0, _v2.useMemo)(() => _v6(), [_v6]),
      _v9 = (0, _v2.useMemo)(() => _v7({
        page_name: _v7.PAGE_NAME.TEAM_MANAGEMENT,
        referrer: document.referrer ?? null,
        referrer_page_name: null,
        path: _v2
      }), [_v7, _v2]),
      _v10 = (0, _v2.useMemo)(() => _v5({
        teamUser: _v1?.teamUser
      }), [_v5, _v1?.teamUser]),
      _v11 = (0, _v2.useCallback)(() => {
        try {
          let _v0 = new _v4.Event(_v7.EVENTS.GENERAL_CLICK, 30, {
            page: _v0 === _v7.ENTITY_TYPE.WORKSPACE ? _v7.PAGE_NAME.WORKSPACE_MANAGEMENT : _v7.PAGE_NAME.ORGANIZATION_MANAGEMENT,
            feature: _v7.FEATURE.TEAM_MANAGEMENT,
            location: _v7.LOCATION.TEAM_GROUPS_ROW,
            target: `/manage/${_v0}/groups`,
            name: "manage_team_group_users",
            copy: "team_group_name",
            type: "general"
          });
          _v4.BigPictureClient.sendEvent(_v0);
        } catch (_v0) {
          console.error(_v0);
        }
      }, [_v0]),
      _v12 = (0, _v2.useCallback)(() => {
        let _v0 = _v3({
            action_type: _v7.ACTION_TYPE.CLICK
          }),
          _v1 = _v4({
            product: "collaboration",
            feature: _v7.FEATURE.TEAMS,
            location: _v7.LOCATION.PAGE_AREA,
            element: _v7.ELEMENT.BUTTON,
            entity_type: _v7.ENTITY_TYPE.GROUP,
            copy: null,
            modal_name: null,
            flow: null
          }),
          _v2 = {
            ..._v0,
            ..._v1,
            ..._v9,
            ..._v10,
            ..._v8
          };
        (0, _v5.sendBpEventWithContexts)(_v7.EVENTS.GROUP_OPEN, _v2);
      }, [_v3, _v4, _v10, _v8, _v9]),
      _v13 = (0, _v2.useCallback)(() => {
        let _v0 = _v3({
            action_type: _v7.ACTION_TYPE.CLIENT_PROCESS
          }),
          _v1 = _v4({
            product: "collaboration",
            feature: _v7.FEATURE.TEAMS,
            location: _v7.LOCATION.MODAL,
            element: _v7.ELEMENT.TEXT,
            entity_type: _v7.ENTITY_TYPE.USER,
            copy: null,
            modal_name: null,
            flow: null
          }),
          _v2 = {
            ..._v0,
            ..._v1,
            ..._v9,
            ..._v10,
            ..._v8
          };
        (0, _v5.sendBpEventWithContexts)(_v7.EVENTS.GROUP_MEMBER_SEARCH, _v2, 1, {
          search_query: null,
          search_result_qty: null
        });
      }, [_v3, _v4, _v10, _v8, _v9]),
      _v14 = (0, _v2.useCallback)(() => {
        let _v0 = _v3({
            action_type: _v7.ACTION_TYPE.CLIENT_PROCESS
          }),
          _v1 = _v4({
            product: "collaboration",
            feature: _v7.FEATURE.TEAMS,
            location: _v7.LOCATION.PAGE_AREA,
            element: _v7.ELEMENT.TEXT,
            entity_type: _v7.ENTITY_TYPE.GROUP,
            copy: null,
            modal_name: null,
            flow: null
          }),
          _v2 = {
            ..._v0,
            ..._v1,
            ..._v9,
            ..._v10,
            ..._v8
          };
        (0, _v5.sendBpEventWithContexts)(_v7.EVENTS.GROUP_SEARCH, _v2);
      }, [_v3, _v4, _v10, _v8, _v9]),
      _v15 = (0, _v2.useCallback)(() => {
        _v3.GoogleTagManager.trackEvent("team_search");
      }, []),
      _v16 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v1?.teamUser?.userId.toString() ?? null;
        _v4.BigPictureClient.sendEvent(new _v4.Event(_v7.EVENTS.SORT_TEAM_MEMBERS_LIST, 1, {
          product: "collaboration_groups",
          field: "name",
          user_id: _v1,
          direction: _v0
        }));
      }, [_v1?.teamUser?.userId]),
      _v17 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        let _v3 = "sso" === _v0.type,
          _v4 = _v3({
            action_type: _v3 ? "server" : "click"
          }),
          _v5 = _v4({
            product: "collaboration",
            feature: _v7.FEATURE.SETTINGS,
            location: _v7.LOCATION.PAGE_AREA,
            element: _v7.ELEMENT.BUTTON,
            entity_type: _v7.ENTITY_TYPE.GROUP,
            copy: "create_group",
            modal_name: null,
            flow: null
          }),
          _v6 = {
            ..._v4,
            ..._v5,
            ..._v9,
            ..._v10,
            ..._v8
          },
          _v7 = {
            search_query: null,
            search_result_qty: 1,
            action_name: "create",
            action_value: _v3 ? ["sso_group"] : ["group"],
            group_type: _v0.type,
            ...(_v3 && _v2 && {
              sync_source: _v2.syncSource || "saml",
              sync_operation: _v2.syncOperation || "create",
              batch_size: _v2.batchSize || null
            }),
            ..._v1
          };
        (0, _v5.sendBpEventWithContexts)(_v7.EVENTS.GROUP_CREATION, _v6, 2, _v7);
      }, [_v3, _v4, _v10, _v8, _v9]),
      _v18 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3, _v4) => {
        let _v5 = "sso" === _v2.type,
          _v6 = {
            add_member: {
              copy: "add",
              flow: "team_change",
              element: "list",
              action_name: "add_member"
            },
            remove_member: {
              copy: "remove",
              flow: "team_change",
              element: "button",
              action_name: "remove_member"
            },
            change_default_role: {
              copy: "confirm_default",
              flow: "team_change",
              element: "button",
              action_name: "change_default_role"
            },
            rename: {
              copy: "save",
              flow: "team_change",
              element: "button",
              action_name: "rename"
            },
            copy: {
              copy: "copy",
              flow: "team_change",
              element: "button",
              action_name: "copy"
            }
          },
          _v7 = _v6[_v0] ?? _v6.add_member,
          _v8 = {
            search_query: null,
            search_result_qty: 1,
            action_name: _v7.action_name,
            action_value: _v1,
            group_type: _v2.type,
            ...(_v5 && _v4 && {
              sync_source: _v4.syncSource || "saml",
              sync_operation: _v4.syncOperation || "update",
              batch_size: _v4.batchSize || null
            }),
            ..._v3
          },
          _v9 = _v3({
            action_type: _v5 ? "server" : "click"
          }),
          _v10 = _v4({
            flow: _v7.flow,
            entity_type: "group",
            element: _v7.element,
            location: _v7.LOCATION.PAGE_AREA,
            feature: "settings",
            product: "collaboration",
            copy: _v7.copy,
            modal_name: null
          }),
          _v11 = {
            ..._v9,
            ..._v10,
            ..._v9,
            ..._v10,
            ..._v8
          };
        (0, _v5.sendBpEventWithContexts)(_v7.EVENTS.GROUP_UPDATE, _v11, 2, _v8);
      }, [_v3, _v4, _v10, _v8, _v9]),
      _v19 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        let _v3 = "sso" === _v0.type,
          _v4 = _v3({
            action_type: _v3 ? "server" : "click"
          }),
          _v5 = _v4({
            flow: null,
            entity_type: "group",
            element: "button",
            location: _v7.LOCATION.PAGE_AREA,
            feature: "settings",
            product: "collaboration",
            copy: "delete",
            modal_name: null
          }),
          _v6 = {
            ..._v4,
            ..._v5,
            ..._v9,
            ..._v10,
            ..._v8
          },
          _v7 = {
            search_query: null,
            search_result_qty: 1,
            action_name: "delete",
            action_value: ["delete"],
            group_type: _v0.type,
            ...(_v3 && _v2 && {
              sync_source: _v2.syncSource || "saml",
              sync_operation: _v2.syncOperation || "delete",
              batch_size: _v2.batchSize || null
            }),
            ..._v1
          };
        (0, _v5.sendBpEventWithContexts)(_v7.EVENTS.GROUP_DELETE, _v6, 2, _v7);
      }, [_v3, _v4, _v10, _v8, _v9]);
    return (0, _v2.useMemo)(() => ({
      trackTeamGroupsRowClick: _v11,
      trackGroupOpenBP2Event: _v12,
      trackGroupMemberSearchEvent: _v13,
      trackGroupSearchEvent: _v14,
      trackSearch: _v15,
      trackSortEvent: _v16,
      sendGroupCreationEvent: _v17,
      sendGroupUpdateEvent: _v18,
      sendGroupDeleteEvent: _v19
    }), [_v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19]);
  }]);
}