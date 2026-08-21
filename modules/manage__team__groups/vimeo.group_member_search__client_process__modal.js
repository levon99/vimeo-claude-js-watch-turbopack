{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = {
      name: "vimeo.group_member_search",
      version: 1,
      actionContext: {
        action_type: "client_process"
      },
      productAnalyticsContext: {
        location: "modal",
        element: "text",
        entity_type: "user"
      },
      additionalFields: {
        search_query: null,
        search_result_qty: null
      }
    },
    _v13 = {
      name: "vimeo.group_open",
      version: -1,
      actionContext: {
        action_type: "click"
      },
      productAnalyticsContext: {
        element: "button",
        entity_type: "group"
      }
    },
    _v14 = {
      name: "vimeo.group_search",
      version: -1,
      actionContext: {
        action_type: "client_process"
      },
      productAnalyticsContext: {
        element: "text",
        entity_type: "group"
      }
    };
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = {
    name: "vimeo.team_management_page",
    version: 1,
    productAnalyticsContext: {}
  };
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = () => {
      let _v0,
        _v1,
        _v2,
        {
          teamInfo: _v3
        } = (0, _v4.useContext)(_v10.ManageTeamStateCtx),
        {
          teamData: {
            ownerId: _v4 = null
          } = {}
        } = _v3,
        {
          trackTeamGroupsRowClick: _v5
        } = (0, _v4.useContext)(_v10.ManageTeamAnalytics),
        _v6 = (_v0 = (0, _v11.useTeamManagementActionEvent)(), (0, _v4.useCallback)(() => _v0(_v13), [_v0])),
        _v7 = (_v1 = (0, _v11.useTeamManagementActionEvent)(), (0, _v4.useCallback)(() => _v1(_v12), [_v1])),
        _v8 = (_v2 = (0, _v11.useTeamManagementActionEvent)(), (0, _v4.useCallback)(() => _v2(_v14), [_v2]));
      (() => {
        let {
            pathname: _v0
          } = (0, _v15.useRouter)(),
          _v1 = (0, _v9.useViewer)(),
          _v2 = (0, _v16.buildTeamBpContextFromTeamUser)(_v1?.teamUser),
          _v3 = (0, _v4.useRef)(!1),
          _v4 = (0, _v4.useCallback)(() => {
            let _v0 = (0, _v20.getTeamManagementTabFromPath)(_v0);
            if (_v3.current || null == _v0) return;
            let _v1 = document.referrer ? new URL(document.referrer) : null,
              _v2 = _v1 ? (0, _v20.pageNameFromPathname)(_v1.pathname) : null,
              _v3 = {
                ..._v2,
                ...(0, _v20.buildThirdPartyContext)(),
                ...(0, _v17.buildViewBpContext)({
                  view_type: "pageview",
                  feature: null
                }),
                ...(0, _v20.buildProductAnalyticsContext)({
                  element: "tab",
                  copy: (0, _v20.getTabCopy)(_v0)
                }),
                ...(0, _v18.buildWebBpContext)({
                  path: _v0,
                  page_name: "team_management_page",
                  referrer: document.referrer || "",
                  referrer_page_name: _v2
                })
              },
              {
                name: _v4,
                version: _v5
              } = _v21;
            (0, _v19.sendBpEventWithContexts)(_v4, _v3, _v5, {
              entry_point: null
            }), _v3.current = !0;
          }, [_v2, _v0]);
        (0, _v4.useEffect)(() => {
          _v4();
        }, [_v4]);
      })();
      let _v9 = _v3.owner.metadata?.connections?.teamMembers?.roles,
        _v10 = (0, _v9.useViewer)(),
        _v11 = _v10?.teamUser?.userId.toString() ?? null,
        {
          sendGroupCreationEvent: _v12,
          sendGroupDeleteEvent: _v13,
          sendGroupUpdateEvent: _v14
        } = (() => {
          let _v0 = (0, _v9.useViewer)(),
            _v1 = (0, _v4.useMemo)(() => (0, _v16.buildTeamBpContextFromTeamUser)(_v0?.teamUser), [_v0?.teamUser]),
            {
              pathname: _v2
            } = (0, _v15.useRouter)(),
            _v3 = (0, _v4.useMemo)(() => (0, _v18.buildWebBpContext)({
              path: _v2,
              page_name: "team_management_page"
            }), [_v2]),
            _v4 = (0, _v4.useCallback)(({
              name: _v0,
              version: _v1,
              actionContext: _v2,
              productAnalyticsContext: _v3,
              additionalFields: _v4
            }) => {
              let _v5 = (0, _v22.buildActionBpContext)({
                  feature: null,
                  ..._v2
                }),
                _v6 = (0, _v20.buildProductAnalyticsContext)(_v3),
                _v7 = (0, _v20.buildThirdPartyContext)(),
                _v8 = {
                  ..._v5,
                  ..._v6,
                  ..._v3,
                  ..._v1,
                  ..._v7
                };
              (0, _v19.sendBpEventWithContexts)(_v0, _v8, _v1, _v4);
            }, [_v1, _v3]),
            _v5 = (0, _v4.useCallback)((_v0, _v1, _v2) => {
              let _v3 = "sso" === _v0.type;
              _v4({
                name: "vimeo.group_creation",
                version: 2,
                actionContext: {
                  action_type: _v3 ? "server" : "click"
                },
                productAnalyticsContext: {
                  flow: void 0,
                  entity_type: "group",
                  element: "button",
                  location: void 0,
                  feature: "settings",
                  product: "collaboration",
                  copy: "create_group"
                },
                additionalFields: {
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
                }
              });
            }, [_v4]),
            _v6 = (0, _v4.useCallback)((_v0, _v1, _v2, _v3, _v4) => {
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
                _v7 = _v6[_v0] ?? _v6.add_member;
              _v4({
                name: "vimeo.group_update",
                version: 2,
                actionContext: {
                  action_type: _v5 ? "server" : "click"
                },
                productAnalyticsContext: {
                  flow: _v7.flow,
                  entity_type: "group",
                  element: _v7.element,
                  location: void 0,
                  feature: "settings",
                  product: "collaboration",
                  copy: _v7.copy
                },
                additionalFields: {
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
                }
              });
            }, [_v4]),
            _v7 = (0, _v4.useCallback)((_v0, _v1, _v2) => {
              let _v3 = "sso" === _v0.type;
              _v4({
                name: "vimeo.group_delete",
                version: 2,
                actionContext: {
                  action_type: _v3 ? "server" : "click"
                },
                productAnalyticsContext: {
                  flow: void 0,
                  entity_type: "group",
                  element: "button",
                  location: void 0,
                  feature: "settings",
                  product: "collaboration",
                  copy: "delete"
                },
                additionalFields: {
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
                }
              });
            }, [_v4]),
            _v8 = (0, _v4.useCallback)((_v0, _v1) => _v6("add_member", [`${_v0.groupsCount}_groups`], {
              type: "sso"
            }, {
              action_name: "sync_groups",
              search_result_qty: _v0.groupsCount,
              ..._v1
            }, {
              syncSource: _v0.source,
              syncOperation: "sync",
              batchSize: _v0.groupsCount
            }), [_v6]);
          return {
            sendGroupCreationEvent: _v5,
            sendGroupUpdateEvent: _v6,
            sendGroupDeleteEvent: _v7,
            sendGroupSyncEvent: _v8
          };
        })(),
        {
          updateCount: _v15
        } = (0, _v8.useGetTeamGroupsCount)(_v4),
        _v16 = (0, _v4.useMemo)(() => ({
          analyticsHandlers: {
            trackTeamGroupsRowClick: _v5,
            trackGroupOpenBP2Event: _v6,
            trackGroupMemberSearchEvent: _v7,
            trackGroupSearchEvent: _v8,
            trackSearch: () => {
              _v5.GoogleTagManager.trackEvent(_v23.GTMEvent.SEARCH);
            },
            trackSortEvent: _v0 => {
              _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.sort_team_members_list", 1, {
                product: "collaboration_groups",
                field: "name",
                user_id: _v11,
                direction: _v0
              }));
            },
            sendGroupCreationEvent: _v12,
            sendGroupDeleteEvent: _v13,
            sendGroupUpdateEvent: _v14
          },
          ownerId: _v4,
          rolesInfo: _v9 ?? []
        }), [_v4, _v9, _v12, _v13, _v14, _v7, _v6, _v8, _v5, _v11]);
      return (0, _v1.jsx)(_v7.TeamGroups, {
        ..._v16,
        updateTotalGroupsCount: _v15
      });
    },
    _v25 = () => (0, _v1.jsx)(_v24, {});
  _v25.getLayout = _v3.getLayout, (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v25], 0);
}