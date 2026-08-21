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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = {
      CREATE: "CREATE",
      RENAME: "RENAME",
      COPY: "COPY",
      DELETE: "DELETE",
      EDIT: "EDIT",
      ROLE_SET: "ROLE_SET",
      ROLE_REMOVE: "ROLE_REMOVE",
      MANAGE_WORKSPACES: "MANAGE_WORKSPACES",
      UNASSIGN_WORKSPACE: "UNASSIGN_WORKSPACE"
    },
    _v21 = {
      ASSIGN_WS: "ASSIGN_WS"
    },
    _v22 = {
      RELOAD: "RELOAD",
      OPEN_MANAGE_WS_MODAL: "OPEN_MANAGE_WS_MODAL",
      OPEN_UNASSIGN_WS_MODAL: "OPEN_UNASSIGN_WS_MODAL",
      OPEN_COPY_GROUP_MODAL: "OPEN_COPY_WS_MODAL"
    },
    _v23 = {
      TEAM: "TEAM",
      WORKSPACE: "WORKSPACE",
      ORGANIZATION: "ORGANIZATION"
    };
  _v0.s(["BulkManageGroupsModalMode", 0, _v21, "GroupsPageMode", 0, _v23, "ManageGroupModalMode", 0, _v20, "ManageGroupsModalPostAction", 0, _v22], 0);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ({
    onError: _v0,
    onSuccess: _v1
  }) => {
    let [_v2, _v3] = (0, _v3.useState)(null),
      [_v4, {
        error: _v5,
        loading: _v6
      }] = (0, _v30.usePostWorkspaceGroups)(),
      _v7 = (0, _v3.useRef)(!1),
      _v8 = (0, _v3.useCallback)((_v0, _v1) => {
        try {
          let _v0 = _v0.map(_v0 => _v0.uri),
            _v1 = (0, _v31.getUuidFromUri)(_v2?.uri);
          if (!_v1 || !_v0.length) return;
          _v4({
            where: {
              workspaceUuid: _v1
            },
            variables: {
              groupUris: _v0,
              role: _v1 ?? void 0
            }
          });
        } catch {
          _v0();
        }
        _v7.current = !0;
      }, [_v0, _v4, _v2]);
    return (0, _v3.useEffect)(() => {
      _v7.current && !_v6 && (_v7.current = !1, _v5 ? _v0(_v5) : _v1(_v2));
    }, [_v5, _v6, _v0, _v1, _v2]), (0, _v3.useMemo)(() => ({
      loading: _v6,
      assignGroupsToWs: _v8,
      ws: _v2,
      setWs: _v3
    }), [_v6, _v8, _v2]);
  };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = ({
    toast: _v0,
    setErrorMessage: _v1
  }) => {
    let _v2 = (0, _v34.getTranslations)(),
      _v3 = (0, _v3.useCallback)(() => {
        _v0({
          duration: _v27.NOTIFICATION_DURATION,
          title: _v2.SomethingWentWrong
        });
      }, [_v2.SomethingWentWrong, _v0]);
    return (0, _v3.useCallback)(async _v0 => {
      try {
        let _v0 = _v0?.res,
          _v1 = await _v0.clone().json();
        _v1 && _v1.error_code === _v33.INVALID_GROUP_NAME_CODE ? _v1(_v2.GroupNameMustBeUnique) : _v3();
      } catch (_v0) {
        _v3();
      }
    }, [_v2.GroupNameMustBeUnique, _v3, _v1]);
  };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = _v0 => Math.max(1, Math.ceil(_v0 / 25)),
    _v45 = () => Error("Not implemented"),
    _v46 = {
      analyticsHandlers: {
        trackTeamGroupsRowClick: _v45,
        trackGroupOpenBP2Event: _v45,
        trackSearch: _v45,
        trackGroupMemberSearchEvent: _v45,
        trackGroupSearchEvent: _v45,
        trackSortEvent: _v45,
        sendGroupCreationEvent: _v45,
        sendGroupDeleteEvent: _v45,
        sendGroupUpdateEvent: _v45
      },
      ownerId: 0,
      rolesInfo: [],
      mode: _v23.TEAM,
      orgUuid: null,
      wsUuid: null,
      ws: null,
      searchQuery: "",
      previousSearchQuery: "",
      hasError: !1,
      isSearching: !1,
      isLoading: !1,
      isLoadingMore: !1,
      hasFetched: !1,
      teamGroupsInfo: {
        page: 1,
        total: null
      },
      sort: {},
      teamGroups: [],
      groupMembersPreviousSearchQuery: "",
      groupMembersSearchQuery: "",
      groupUsersError: !1,
      updateGroupMembersSearchQuery: _v45,
      setGroupUsersError: _v45,
      fetchTeamGroups: _v45,
      loadNextPage: _v45,
      updateSearchQuery: _v45,
      updateTeamGroupsLoadingSearching: _v45,
      updateTeamGroupSort: _v45,
      updateTeamGroups: _v45
    },
    _v47 = (0, _v3.createContext)(_v46),
    _v48 = ({
      children: _v0,
      ..._v1
    }) => {
      let {
          updateSearchQuery: _v2,
          fetchTeamGroups: _v3,
          updateTeamGroupsLoadingSearching: _v4,
          updateTeamGroupSort: _v5,
          updateTeamGroups: _v6,
          loadNextPage: _v7,
          searchQuery: _v8,
          hasError: _v9,
          isSearching: _v10,
          isLoading: _v11,
          isLoadingMore: _v12,
          teamGroupsInfo: _v13,
          teamGroups: _v14,
          sort: _v15,
          hasFetched: _v16,
          previousSearchQuery: _v17
        } = ((_v0 = _v23.TEAM, _v1, _v2) => {
          let [_v3, _v4] = (0, _v3.useState)(""),
            [_v5, _v6] = (0, _v3.useState)([]),
            [_v7, _v8] = (0, _v3.useState)({
              page: 0,
              total: null
            }),
            [_v9, _v10] = (0, _v3.useState)({
              type: "name",
              direction: "asc"
            }),
            [_v11, _v12] = (0, _v3.useState)(!1),
            [_v13, _v14] = (0, _v3.useState)(!1),
            [_v15, _v16] = (0, _v3.useState)(!1),
            [_v17, _v18] = (0, _v3.useState)(!1),
            _v19 = (0, _v3.useContext)(_v43.ViewerContext),
            _v20 = (0, _v42.useDebouncedValue)(_v3, 500),
            _v21 = (0, _v3.useRef)(0),
            _v22 = (0, _v3.useCallback)(async (_v0, _v1, _v2, _v3) => {
              if (!_v19 || !_v1) return;
              let _v4 = ++_v21.current;
              try {
                _v3 ? _v14(!0) : _v12(!0), _v16(!1);
                let {
                    type: _v0,
                    direction: _v1
                  } = _v1,
                  _v2 = _v0 && _v1 ? {
                    sort: _v0,
                    direction: _v1
                  } : {},
                  _v3 = `${location.protocol}//${_v19.apiUrl}`,
                  _v4 = [],
                  _v5 = 0,
                  _v6 = 1;
                if (_v0 === _v23.WORKSPACE && _v2) {
                  let _v0 = await (0, _v41.getWorkspaceGroups)({
                    baseUrl: _v3,
                    select: ["teamGroup", "role"],
                    where: {
                      workspaceUuid: _v2
                    },
                    query: {
                      ..._v2,
                      page: _v2,
                      perPage: 25,
                      ...(_v0 && {
                        query: _v0
                      })
                    },
                    headers: {
                      Authorization: `jwt ${_v19.jwt}`
                    }
                  });
                  _v4 = _v0.data.map(_v31.mapWsGroupToTeamGroup), _v5 = _v0.total, _v6 = _v0.page;
                } else if (_v1) {
                  let _v0 = await (0, _v40.getUserTeamGroups)({
                    baseUrl: _v3,
                    select: ["ownerId", "name", "uri", "type", "metadata", "modifiedOn", "createdOn", "role"],
                    where: {
                      userId: _v1
                    },
                    query: {
                      ..._v2,
                      page: _v2,
                      perPage: 25,
                      ...(_v0 && {
                        searchText: _v0
                      }),
                      includeAllUsersGroup: !0
                    },
                    headers: {
                      Authorization: `jwt ${_v19.jwt}`
                    }
                  });
                  _v4 = _v0.data, _v5 = _v0.total, _v6 = _v0.page;
                }
                if (_v4 !== _v21.current) return;
                _v6(_v0 => _v3 ? [..._v0, ..._v4] : _v4), _v8({
                  total: _v5,
                  page: _v6
                }), _v10(_v1), _v12(!1), _v14(!1), _v16(!1), _v18(!0);
              } catch {
                if (_v4 !== _v21.current) return;
                _v16(!0), _v12(!1), _v14(!1);
              }
            }, [_v0, _v1, _v19, _v2]),
            _v23 = (0, _v3.useRef)(null);
          (0, _v3.useEffect)(() => {
            if (!_v19 || !_v1) return;
            let _v0 = `${_v20}|${_v9.type}|${_v9.direction}`;
            _v23.current !== _v0 && (_v23.current = _v0, _v6([]), _v8({
              total: null,
              page: 0
            }), _v12(!0), _v22(_v20, _v9, 1, !1));
          }, [_v20, _v9, _v1, _v19, _v22]);
          let _v24 = (0, _v3.useCallback)(() => {
              _v11 || _v13 || _v15 || null === _v7.total || _v7.page >= _v44(_v7.total) || _v22(_v20, _v9, _v7.page + 1, !0);
            }, [_v20, _v9, _v11, _v13, _v15, _v7, _v22]),
            _v25 = (0, _v3.useCallback)(() => {
              _v6([]), _v8({
                total: null,
                page: 0
              }), _v12(!0), _v22(_v20, _v9, 1, !1);
            }, [_v20, _v9, _v22]),
            _v26 = (0, _v3.useCallback)((_v0 = "") => {
              _v4(_v0);
            }, []),
            _v27 = (0, _v3.useCallback)(_v0 => {
              _v10(_v0);
            }, []),
            _v28 = _v11 && _v3.length > 0;
          return {
            updateSearchQuery: _v26,
            fetchTeamGroups: _v25,
            updateTeamGroupSort: _v27,
            loadNextPage: _v24,
            searchQuery: _v3,
            previousSearchQuery: "",
            hasError: _v15,
            isSearching: _v28,
            isLoading: _v11,
            isLoadingMore: _v13,
            teamGroupsInfo: _v7,
            hasFetched: _v17,
            teamGroups: _v5,
            sort: _v9,
            updateTeamGroupsLoadingSearching: () => {},
            updateTeamGroups: () => {}
          };
        })(_v1.mode, _v1.ownerId, _v1.wsUuid),
        {
          data: _v18
        } = (0, _v39.useGetWorkspace)(() => "WORKSPACE" === _v1.mode && _v1.wsUuid ? {
          where: {
            workspaceUuid: _v1.wsUuid
          },
          select: ["displayName", "uri", "internalId"]
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        });
      (0, _v3.useEffect)(() => {
        _v13.total && !_v8 && _v1.updateTotalGroupsCount?.(_v13.total);
      }, [_v1, _v13.total, _v8]);
      let {
          groupMembersPreviousSearchQuery: _v19,
          groupMembersSearchQuery: _v20,
          groupUsersError: _v21,
          updateGroupMembersSearchQuery: _v22,
          setGroupUsersError: _v23
        } = (() => {
          let [_v0, _v1] = (0, _v3.useState)(""),
            [_v2, _v3] = (0, _v3.useState)(""),
            [_v4, _v5] = (0, _v3.useState)(!1),
            _v6 = (0, _v3.useCallback)((_v0 = "") => {
              _v1(_v2), _v3(_v0);
            }, [_v2]);
          return {
            groupMembersPreviousSearchQuery: _v0,
            groupMembersSearchQuery: _v2,
            groupUsersError: _v4,
            updateGroupMembersSearchQuery: _v6,
            setGroupUsersError: _v5
          };
        })(),
        _v24 = (0, _v3.useMemo)(() => ({
          ..._v1,
          updateSearchQuery: _v2,
          fetchTeamGroups: _v3,
          updateTeamGroupsLoadingSearching: _v4,
          updateTeamGroupSort: _v5,
          updateTeamGroups: _v6,
          loadNextPage: _v7,
          updateGroupMembersSearchQuery: _v22,
          setGroupUsersError: _v23,
          mode: _v1.mode ?? _v23.TEAM,
          orgUuid: _v1.orgUuid ?? null,
          wsUuid: _v1.wsUuid ?? null,
          ws: _v18,
          searchQuery: _v8,
          previousSearchQuery: _v17,
          hasError: _v9,
          isSearching: _v10,
          isLoading: _v11,
          isLoadingMore: _v12,
          teamGroupsInfo: _v13,
          teamGroups: _v14,
          sort: _v15,
          hasFetched: _v16,
          groupMembersPreviousSearchQuery: _v19,
          groupMembersSearchQuery: _v20,
          groupUsersError: _v21
        }), [_v1, _v2, _v3, _v4, _v5, _v6, _v7, _v22, _v23, _v18, _v8, _v17, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v19, _v20, _v21]);
      return (0, _v1.jsx)(_v47.Provider, {
        value: _v24,
        children: _v0
      });
    },
    _v49 = ({
      role: _v0,
      setRole: _v1,
      ws: _v2,
      setWs: _v3,
      label: _v4 = null
    }) => {
      let _v5 = (0, _v34.getTranslations)(),
        {
          orgUuid: _v6,
          rolesInfo: _v7
        } = (0, _v3.useContext)(_v47),
        [_v8, _v9] = (0, _v3.useState)(!1),
        {
          data: _v10,
          isLoading: _v11,
          error: _v12
        } = (0, _v38.useGetOrganizationWorkspaces)(() => _v6 ? {
          where: {
            orgUuid: _v6
          },
          select: ["uri", "icon", "displayName"]
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }),
        _v13 = (0, _v3.useMemo)(() => _v7?.map(_v0 => ({
          ..._v0,
          label: _v0.displayName ?? "",
          value: _v0.permissionLevel?.replace(/\s/g, "_").toLowerCase() ?? ""
        })) ?? [], [_v7]),
        _v14 = (0, _v3.useMemo)(() => _v10?.data?.map(_v0 => ({
          ..._v0,
          label: _v0.displayName ?? "",
          value: _v0.uri
        })) ?? [], [_v10?.data]),
        _v15 = (0, _v3.useCallback)(_v0 => {
          _v9(!1);
          try {
            (0, _v31.getUuidFromUri)(_v0), _v3(_v10?.data?.find(_v0 => _v0.uri === _v0) ?? null);
          } catch {
            _v9(!0);
          }
        }, [_v3, _v10?.data]);
      return _v11 ? (0, _v1.jsx)(_v7.Center, {
        width: "100%",
        paddingY: "4",
        children: (0, _v1.jsx)(_v9.Spinner, {
          size: "sm"
        })
      }) : _v6 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v4, (0, _v1.jsxs)(_v8.Flex, {
          gap: "4",
          width: "100%",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v8.Flex, {
            sx: {
              width: "calc((100% - 16px) * 0.65)",
              '& [data-scope="select"][data-part="root"]': {
                width: "100%"
              }
            },
            children: (0, _v1.jsx)(_v37.Select, {
              items: _v14,
              value: [_v2 ? _v2.uri : ""],
              onValueChange: _v0 => {
                _v15(_v0.value[0]);
              },
              placeholder: _v5.SelectWorkspace,
              children: _v0 => {
                let _v1 = _v0.icon?.sizes?.[0]?.link ?? null;
                return (0, _v1.jsx)(_v37.SelectItem, {
                  overflow: "hidden",
                  children: (0, _v1.jsxs)(_v8.Flex, {
                    alignItems: "center",
                    gap: "2",
                    overflow: "hidden",
                    sx: {
                      "& [data-scope=avatar], & svg": {
                        width: (0, _v10.rem)(20),
                        height: (0, _v10.rem)(20),
                        borderRadius: "50%",
                        border: "none"
                      }
                    },
                    children: [(0, _v1.jsx)(_v36.Avatar, {
                      size: "xs",
                      src: _v1,
                      "aria-label": _v0.label,
                      alt: _v0.label,
                      nameProps: {
                        name: _v0.label
                      }
                    }), (0, _v1.jsx)(_v29.ShrinkableText, {
                      variant: "heading-xs",
                      children: _v0.label
                    })]
                  })
                }, _v0.uri);
              }
            })
          }), (0, _v1.jsx)(_v8.Flex, {
            sx: {
              width: "calc((100% - 16px) * 0.35)",
              '& [data-scope="select"][data-part="root"]': {
                width: "100%"
              }
            },
            children: (0, _v1.jsx)(_v37.Select, {
              items: _v13,
              value: [_v0 ?? ""],
              onValueChange: _v0 => {
                _v1(_v0.value[0]);
              },
              placeholder: _v5.SelectRole,
              children: _v0 => (0, _v1.jsx)(_v37.SelectItem, {
                children: (0, _v1.jsx)(_v6.Box, {
                  overflow: "hidden",
                  children: (0, _v1.jsx)(_v29.ShrinkableText, {
                    variant: "heading-xs",
                    children: _v0.displayName
                  })
                })
              }, _v0.permissionLevel)
            })
          })]
        }), _v12 || _v8 ? (0, _v1.jsx)(_v4.Alert, {
          status: "error",
          size: "sm",
          marginTop: "4",
          children: (0, _v1.jsx)(_v5.AlertDescription, {
            marginTop: "50",
            children: _v5.SomethingWentWrong
          })
        }) : null]
      }) : (0, _v1.jsx)(_v4.Alert, {
        status: "error",
        size: "sm",
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          marginTop: "50",
          children: _v5.SomethingWentWrong
        })
      });
    };
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = ({
    mode: _v0,
    handleCancelClick: _v1,
    handleConfirmClick: _v2,
    isConfirmDisabled: _v3 = !1,
    isConfirmInProgress: _v4 = !1
  }) => {
    let _v5 = (0, _v34.getTranslations)(),
      _v6 = (0, _v3.useMemo)(() => _v0 === _v21.ASSIGN_WS ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v50.Button, {
          ...{
            variant: "tertiary",
            onClick: _v1
          },
          children: _v5.Cancel
        }), (0, _v1.jsx)(_v50.Button, {
          ...{
            variant: "primary",
            onClick: _v2,
            isDisabled: _v3,
            isLoading: _v4
          },
          children: _v5.Invite
        })]
      }) : null, [_v1, _v2, _v3, _v4, _v0, _v5.Cancel, _v5.Invite]);
    return _v6 ? (0, _v1.jsx)(_v51.ModalFooter, {
      children: _v6
    }) : null;
  };
  var _v53 = _v0.i(0);
  let _v54 = ({
      mode: _v0,
      groups: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        _v3 = (0, _v3.useMemo)(() => {
          if (_v0 === _v21.ASSIGN_WS) return _v2.InviteXGroups(_v1.length);
        }, [_v0, _v2, _v1.length]);
      return (0, _v1.jsx)(_v53.ModalHeader, {
        paddingBottom: "0",
        paddingTop: "300",
        overflowWrap: "break-word",
        "data-id": "groupMembersHead",
        children: (0, _v1.jsx)(_v8.Flex, {
          justifyContent: "space-between",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v29.ShrinkableText, {
            variant: "heading-md",
            as: "h2",
            children: _v3
          })
        })
      });
    },
    _v55 = ({
      closeModal: _v0,
      groups: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        [_v3, _v4] = (0, _v3.useState)(null),
        _v5 = (0, _v25.useToast)(),
        [_v6] = (0, _v26.useToken)("semanticTokens", ["colors.fill-surface"]),
        _v7 = _v35({
          toast: _v5
        }),
        {
          ws: _v8,
          setWs: _v9,
          assignGroupsToWs: _v10,
          loading: _v11
        } = _v32({
          onSuccess: (0, _v3.useCallback)(_v0 => {
            _v5({
              duration: _v27.NOTIFICATION_DURATION,
              title: _v2.XGroupsInvitedToWsName(_v1.length, _v0?.displayName ?? "")
            }), _v0();
          }, [_v5, _v2, _v1.length, _v0]),
          onError: _v7
        }),
        _v12 = (0, _v3.useCallback)(() => {
          _v10(_v1, _v3);
        }, [_v10, _v1, _v3]),
        _v13 = (0, _v3.useMemo)(() => {
          if (1 === _v1.length) return _v1[0].name;
          if (2 === _v1.length) return _v2.GroupNamesListAndName([_v1[0].name], _v1[1].name);
          let _v0 = _v1.map(_v0 => _v0.name);
          return _v2.GroupNamesListAndName(_v0.slice(0, -1), _v0[_v0.length - 1]);
        }, [_v2, _v1]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v54, {
          mode: _v21.ASSIGN_WS,
          groups: _v1
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingY: "200",
          children: (0, _v1.jsx)(_v49, {
            ws: _v8,
            setWs: _v9,
            role: _v3,
            setRole: _v4,
            label: (0, _v1.jsxs)(_v8.Flex, {
              marginBottom: "4",
              gap: "2",
              alignItems: "center",
              children: [(0, _v1.jsx)(_v8.Flex, {
                children: _v1.map((_v0, _v1) => (0, _v1.jsx)(_v28.GroupIcon, {
                  width: "24",
                  height: "24",
                  style: {
                    outline: `2px solid ${_v6}`,
                    borderRadius: (0, _v10.rem)(8),
                    marginLeft: _v1 > 0 ? "-12px" : "0",
                    display: "block"
                  }
                }, _v1))
              }), (0, _v1.jsx)(_v29.ShrinkableText, {
                variant: "heading-xs",
                children: _v13
              })]
            })
          })
        }), (0, _v1.jsx)(_v52, {
          mode: _v21.ASSIGN_WS,
          handleCancelClick: _v0,
          handleConfirmClick: _v12,
          isConfirmDisabled: !_v8,
          isConfirmInProgress: _v11
        })]
      });
    },
    _v56 = ({
      closeModal: _v0,
      groups: _v1,
      mode: _v2
    }) => {
      let _v3 = (0, _v3.useMemo)(() => _v1.length ? (_v21.ASSIGN_WS, (0, _v1.jsx)(_v55, {
        groups: _v1,
        closeModal: _v0
      })) : null, [_v1, _v0, _v2]);
      return (0, _v1.jsxs)(_v17.Modal, {
        onClose: _v0,
        size: "md",
        isOpen: !0,
        isCentered: !1,
        children: [(0, _v1.jsx)(_v18.ModalOverlay, {}), (0, _v1.jsx)(_v19.ModalContent, {
          marginTop: (0, _v10.rem)(50),
          minW: (0, _v10.rem)(480),
          children: _v3
        })]
      });
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = ({
    title: _v0,
    description: _v1,
    showButtons: _v2 = !1,
    canViewSsoTeamSettings: _v3,
    handleAddNewGroup: _v4,
    handleInviteNewGroup: _v5,
    ..._v6
  }) => {
    let _v7 = (0, _v57.useRouter)(),
      _v8 = (0, _v34.getTranslations)(),
      {
        mode: _v9
      } = (0, _v3.useContext)(_v47);
    return (0, _v1.jsxs)(_v7.Center, {
      flexFlow: "column",
      ..._v6,
      children: [(0, _v1.jsx)(_v60.Users, {
        width: "2xl",
        height: "2xl",
        marginBottom: "200"
      }), (0, _v1.jsx)(_v58.Header, {
        as: "h2",
        variant: "heading-xl",
        marginBottom: "200",
        size: "xl",
        children: _v0
      }), (0, _v1.jsx)(_v59.Paragraph, {
        variant: "body-lg",
        color: "text-secondary",
        textAlign: "center",
        maxWidth: (0, _v10.rem)(500),
        children: _v1
      }), _v2 && (0, _v1.jsxs)(_v8.Flex, {
        gap: "200",
        marginTop: "300",
        children: [_v3 && (0, _v1.jsx)(_v50.Button, {
          variant: "secondary",
          onClick: () => {
            _v7.push("/manage/team/settings/sso");
          },
          children: _v8.SetUpSSO
        }), "WORKSPACE" === _v9 ? (0, _v1.jsx)(_v50.Button, {
          onClick: _v5,
          variant: "primary",
          children: _v8.InviteGroup
        }) : (0, _v1.jsx)(_v50.Button, {
          onClick: _v4,
          variant: "primary",
          children: _v8.NewGroup
        })]
      })]
    });
  };
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = ({
    afterSearch: _v0,
    trackSearch: _v1,
    searchAction: _v2,
    isDisabled: _v3 = !1,
    placeholder: _v4 = "",
    query: _v5,
    updateQuery: _v6,
    ..._v7
  }) => {
    let _v8 = (0, _v3.useRef)(_v0),
      _v9 = (0, _v3.useRef)(_v2);
    (0, _v3.useEffect)(() => {
      _v8.current !== _v0 && (_v8.current = _v0), _v9.current !== _v2 && (_v9.current = _v2);
    }, [_v0, _v2]);
    let _v10 = (0, _v3.useMemo)(() => (0, _v72.default)(_v0 => {
      _v0.length < 1 || (_v9.current?.(), _v8.current?.());
    }, 500), []);
    return (0, _v3.useEffect)(() => () => _v10.cancel(), [_v10]), (0, _v3.useEffect)(() => {
      1 !== _v5.length && (_v10.cancel(), _v10(_v5));
    }, [_v5, _v10]), (0, _v1.jsx)(_v6.Box, {
      maxWidth: (0, _v10.rem)(350),
      flex: "1",
      sx: {
        "svg path": {
          fill: "text-primary"
        }
      },
      ..._v7,
      children: (0, _v1.jsx)(_v73.Search, {
        variant: "minimal",
        p: (0, _v10.rem)(15),
        borderRadius: "md",
        backgroundColor: "input-fill",
        fontWeight: "400",
        "data-id": _v4.replace(/\s+/g, ""),
        value: _v5,
        placeholder: _v4,
        onChange: _v0 => {
          _v6(_v0.currentTarget.value), _v1?.();
        },
        disabled: _v3,
        _placeholder: {
          color: "text-secondary",
          opacity: "1",
          marginLeft: (0, _v10.rem)(20)
        }
      })
    });
  };
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = ({
    groupData: _v0,
    openManageGroupModal: _v1,
    formatDate: _v2,
    rolesIndex: _v3,
    index: _v4,
    isSelectable: _v5,
    isSelected: _v6,
    groupsPageMode: _v7,
    handleSelect: _v8,
    canAccessOrganizationSettings: _v9 = !1
  }) => {
    let _v10 = (0, _v34.getTranslations)(),
      {
        type: _v11,
        uri: _v12,
        name: _v13,
        role: _v14,
        modifiedOn: _v15,
        metadata: _v16
      } = _v0,
      _v17 = _v16?.connections?.users?.total || 0,
      _v18 = _v14 && _v3[_v14]?.displayName,
      _v19 = "custom" === _v11 && _v7 !== _v23.WORKSPACE,
      _v20 = "all_users" !== _v11 && _v17 > 0 && _v7 !== _v23.WORKSPACE,
      _v21 = "custom" === _v11 || 0 === _v17 && "all_users" !== _v11 || "all_users" === _v11 && _v7 !== _v23.ORGANIZATION,
      _v22 = _v7 === _v23.ORGANIZATION,
      _v23 = _v7 !== _v23.ORGANIZATION,
      _v24 = _v7 === _v23.WORKSPACE && _v9;
    return (0, _v1.jsxs)(_v64.Tr, {
      children: [(0, _v1.jsx)(_v76.Td, {
        "data-id": `groupsListingItem-${_v13}`,
        children: (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          gap: "2",
          children: [_v5 && (0, _v1.jsx)(_v67.Checkbox, {
            isChecked: _v6,
            onChange: _v0 => _v8(_v12, _v0.target.checked)
          }), (0, _v1.jsx)(_v6.Box, {
            minW: (0, _v10.rem)(32),
            lineHeight: 0,
            children: (0, _v1.jsx)(_v28.GroupIcon, {
              "data-id": "groupIcon",
              name: _v13
            })
          }), (0, _v1.jsxs)(_v6.Box, {
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v29.ShrinkableText, {
              variant: "heading-xs",
              "data-id": "groupNameTitle",
              children: _v13
            }), _v23 && !!_v18 && (0, _v1.jsx)(_v29.ShrinkableText, {
              variant: "body-sm",
              "data-id": "groupRole",
              color: "text-secondary",
              children: _v10.RoleRoleName(_v18)
            })]
          })]
        })
      }), (0, _v1.jsx)(_v76.Td, {
        children: (0, _v1.jsx)(_v77.Text, {
          variant: "body-md",
          children: _v17
        })
      }), (0, _v1.jsx)(_v76.Td, {
        children: (0, _v1.jsx)(_v77.Text, {
          variant: "body-md",
          children: "sso" === _v11 ? _v10.SSO : _v10.Vimeo
        })
      }), (0, _v1.jsx)(_v76.Td, {
        children: (0, _v1.jsx)(_v29.ShrinkableText, {
          variant: "body-md",
          children: _v2(_v15)
        })
      }), (0, _v1.jsx)(_v76.Td, {
        children: (0, _v1.jsxs)(_v78.Menu, {
          children: [(0, _v1.jsx)(_v79.MenuButton, {
            as: _v80.IconButton,
            "aria-label": "",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v83.EllipsisV, {}),
            "data-id": `team-group-menu-${_v4}`
          }), (0, _v1.jsxs)(_v81.MenuList, {
            children: [_v24 && (0, _v1.jsx)(_v75.default, {
              href: "/manage/organization/groups?show_group=" + (0, _v31.getIdFromUri)(_v12) + "_" + _v13,
              children: (0, _v1.jsx)(_v82.MenuItem, {
                "data-id": "team-group-menu-manage",
                children: _v10.ManageGroup
              })
            }), ("sso" === _v11 && _v17 > 0 || "custom" === _v11) && (0, _v1.jsx)(_v82.MenuItem, {
              onClick: () => _v1("EDIT", _v0),
              "data-id": "team-group-menu-manage",
              children: "sso" === _v11 || _v7 === _v23.WORKSPACE ? _v10.ViewMembers : _v10.ManageMembers
            }), _v22 && (0, _v1.jsx)(_v82.MenuItem, {
              onClick: () => _v1("MANAGE_WORKSPACES", _v0),
              "data-id": "team-group-menu-manage-wss",
              children: _v10.ManageWorkspaces
            }), _v23 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v82.MenuItem, {
                onClick: () => _v1("ROLE_SET", _v0),
                "data-id": "team-group-menu-role-set",
                children: _v10.SetDefaultRole
              }), _v0.role && (0, _v1.jsx)(_v82.MenuItem, {
                onClick: () => _v1("ROLE_REMOVE", _v0),
                "data-id": "team-group-menu-role-remove",
                children: _v10.RemoveDefaultRole
              })]
            }), _v19 && (0, _v1.jsx)(_v82.MenuItem, {
              onClick: () => _v1("RENAME", _v0),
              "data-id": "team-group-menu-rename",
              children: _v10.RenameGroup
            }), _v20 && (0, _v1.jsx)(_v82.MenuItem, {
              onClick: () => _v1("COPY", _v0),
              "data-id": "team-group-menu-copy",
              children: "sso" === _v11 ? _v10.DuplicateSSOGroup : _v10.DuplicateVimeoGroup
            }), _v21 && (0, _v1.jsx)(_v82.MenuItem, {
              onClick: () => {
                _v7 === _v23.WORKSPACE ? _v1("UNASSIGN_WORKSPACE", _v0) : _v1("DELETE", _v0);
              },
              "data-id": "team-group-menu-delete",
              children: _v10.DeleteGroup
            })]
          })]
        })
      })]
    }, `key-group-${_v12}`);
  };
  var _v85 = _v0.i(0);
  let _v86 = ({
      listItemsCount: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: [...Array(_v0)].map((_v0, _v1) => (0, _v1.jsxs)(_v64.Tr, {
        children: [(0, _v1.jsx)(_v76.Td, {
          children: (0, _v1.jsxs)(_v8.Flex, {
            alignItems: "center",
            gap: "75",
            children: [(0, _v1.jsx)(_v85.Skeleton, {
              height: (0, _v10.rem)(32),
              width: (0, _v10.rem)(32),
              borderRadius: (0, _v10.rem)(10)
            }), (0, _v1.jsx)(_v85.Skeleton, {
              height: (0, _v10.rem)(20),
              width: (0, _v10.rem)(200)
            })]
          })
        }), (0, _v1.jsx)(_v76.Td, {
          children: (0, _v1.jsx)(_v85.Skeleton, {
            height: (0, _v10.rem)(20),
            width: (0, _v10.rem)(100)
          })
        }), (0, _v1.jsx)(_v76.Td, {
          children: (0, _v1.jsx)(_v85.Skeleton, {
            height: (0, _v10.rem)(20),
            width: (0, _v10.rem)(50)
          })
        }), (0, _v1.jsx)(_v76.Td, {
          children: (0, _v1.jsx)(_v85.Skeleton, {
            height: (0, _v10.rem)(20),
            width: (0, _v10.rem)(150)
          })
        }), (0, _v1.jsx)(_v76.Td, {})]
      }, _v1))
    }),
    _v87 = ({
      openManageGroupModal: _v0,
      openInviteGroupsToWsModal: _v1,
      handleAll: _v2,
      handleGroupSelect: _v3,
      selectedGroupUris: _v4
    }) => {
      let _v5 = (0, _v34.getTranslations)(),
        {
          analyticsHandlers: {
            trackGroupSearchEvent: _v6,
            trackSearch: _v7,
            trackSortEvent: _v8
          },
          teamGroups: _v9,
          teamGroupsInfo: _v10,
          hasError: _v11,
          isLoading: _v12,
          isLoadingMore: _v13,
          isSearching: _v14,
          searchQuery: _v15,
          sort: _v16,
          mode: _v17,
          updateTeamGroupSort: _v18,
          updateSearchQuery: _v19,
          loadNextPage: _v20,
          hasFetched: _v21,
          rolesInfo: _v22
        } = (0, _v3.useContext)(_v47),
        _v23 = (0, _v71.useViewer)(),
        {
          capabilities: {
            canAccessOrganizationSettings: _v24
          }
        } = (0, _v13.useCapability)(["canAccessOrganizationSettings"], _v23?.user?.id),
        _v25 = (0, _v3.useMemo)(() => {
          let _v0 = {};
          return _v22?.forEach(_v0 => {
            let _v1 = _v0.permissionLevel?.replace(/\s/g, "_").toLowerCase();
            _v1 && (_v0[_v1] = _v0);
          }), _v0;
        }, [_v22]),
        _v26 = (({
          total: _v0,
          page: _v1,
          rowCount: _v2,
          hasError: _v3
        }) => null !== _v0 && !_v3 && _v2 > 0 && _v1 < _v44(_v0))({
          total: _v10.total,
          page: _v10.page,
          rowCount: _v9.length,
          hasError: _v11
        }),
        [_v27, _v28] = (0, _v70.useInfiniteScroll)(_v26),
        _v29 = (0, _v3.useRef)(_v27);
      (0, _v3.useEffect)(() => {
        _v27 !== _v29.current && _v26 && (_v29.current = _v27, _v20());
      }, [_v27, _v26, _v20]);
      let _v30 = (0, _v3.useCallback)(() => {
          let _v0 = "asc" === _v16.direction ? "desc" : "asc";
          _v18({
            type: _v16.type ?? "name",
            direction: _v0
          }), _v8(_v0);
        }, [_v16, _v18, _v8]),
        [_v31, _v32] = (0, _v3.useState)(!1),
        {
          showGroupId: _v33,
          showGroupName: _v34
        } = (0, _v31.getPreselectedGroupFromQueryString)();
      (0, _v3.useEffect)(() => {
        if (_v33) {
          let _v0 = _v9.find(_v0 => _v0.uri.substring(_v0.uri.lastIndexOf("/") + 1) === _v33);
          _v0 && !_v31 && (_v0("EDIT", _v0), _v32(!0), (0, _v31.deletePreselectedGroupFromQueryString)()), _v34 && _v19(_v34);
        }
      }, [_v31, _v33, _v34, _v9, _v19, _v0]);
      let _v35 = (0, _v3.useMemo)(() => new Intl.DateTimeFormat(_v23?.locale, {
          dateStyle: "medium"
        }), [_v23?.locale]),
        _v36 = (0, _v3.useCallback)(_v0 => {
          try {
            return _v0 ? _v35.format(new Date(_v0)) : "-";
          } catch {
            return "-";
          }
        }, [_v35]),
        _v37 = _v17 === _v23.ORGANIZATION,
        _v38 = _v17 !== _v23.WORKSPACE,
        _v39 = _v17 === _v23.WORKSPACE,
        _v40 = _v15.length > 0 && 0 === _v10.total && !_v12;
      if (!_v21 && _v12) return (0, _v1.jsx)(_v7.Center, {
        paddingY: (0, _v10.rem)(200),
        children: (0, _v1.jsx)(_v9.Spinner, {})
      });
      let _v41 = _v16.direction ?? "asc",
        _v42 = [{
          name: (0, _v1.jsxs)(_v8.Flex, {
            alignItems: "center",
            gap: "2",
            children: [_v37 && (0, _v1.jsx)(_v67.Checkbox, {
              isChecked: !!_v9.length && _v9.length === _v4.length,
              onChange: _v0 => _v2(_v0.target.checked)
            }), (0, _v1.jsxs)(_v8.Flex, {
              alignItems: "center",
              gap: "2",
              onClick: _v30,
              cursor: "pointer",
              children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                color: "text-secondary",
                variant: "heading-xs",
                children: _v5.Name
              }), "asc" === _v41 ? (0, _v1.jsx)(_v69.ChevronUpSmall, {}) : (0, _v1.jsx)(_v68.ChevronDownSmall, {})]
            })]
          }),
          width: "40%"
        }, {
          name: (0, _v1.jsx)(_v29.ShrinkableText, {
            color: "text-secondary",
            variant: "heading-xs",
            children: _v5.Members
          }),
          width: "21%"
        }, {
          name: (0, _v1.jsx)(_v29.ShrinkableText, {
            color: "text-secondary",
            variant: "heading-xs",
            children: _v5.Type
          }),
          width: "21%"
        }, {
          name: (0, _v1.jsx)(_v29.ShrinkableText, {
            color: "text-secondary",
            variant: "heading-xs",
            children: _v5.LastModified
          }),
          width: "18%"
        }, {
          name: "",
          width: (0, _v10.rem)(64)
        }];
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v8.Flex, {
          justifyContent: "space-between",
          paddingBottom: "200",
          children: [(0, _v1.jsx)(_v74, {
            afterSearch: _v6,
            maxWidth: (0, _v10.rem)(262),
            trackSearch: _v7,
            query: _v15,
            updateQuery: _v19,
            placeholder: _v5.SearchGroups
          }), _v38 && (0, _v1.jsx)(_v50.Button, {
            "data-testid": "create-group-button",
            variant: "primary",
            onClick: () => _v0("CREATE"),
            children: _v5.NewGroup
          }), _v39 && (0, _v1.jsx)(_v50.Button, {
            "data-testid": "create-group-button",
            variant: "primary",
            onClick: _v1,
            children: _v5.InviteGroup
          })]
        }), _v40 ? (0, _v1.jsx)(_v61, {
          title: _v5.NoGroupsFound,
          description: _v5.TryAnotherSearch,
          marginY: (0, _v10.rem)(64)
        }) : (0, _v1.jsxs)(_v63.Table, {
          sx: {
            tableLayout: "fixed",
            fontVariantNumeric: "unset",
            "& tr": {
              display: "table-row"
            },
            "& td,& th": {
              paddingY: "75",
              paddingX: "200"
            },
            "& tr:last-child td": {
              borderBottom: "none"
            }
          },
          width: "100%",
          children: [(0, _v1.jsx)("colgroup", {
            children: _v42.map((_v0, _v1) => (0, _v1.jsx)("col", {
              style: {
                width: _v0.width
              }
            }, _v1))
          }), (0, _v1.jsx)(_v62.Thead, {
            children: (0, _v1.jsx)(_v64.Tr, {
              children: _v42.map((_v0, _v1) => (0, _v1.jsx)(_v65.Th, {
                children: _v0.name
              }, _v1))
            })
          }), (0, _v1.jsxs)(_v66.Tbody, {
            "data-id": "groupsListingContainer",
            children: [!_v14 && _v9.map((_v0, _v1) => (0, _v1.jsx)(_v84, {
              groupData: _v0,
              openManageGroupModal: _v0,
              formatDate: _v36,
              rolesIndex: _v25,
              index: _v1,
              isSelectable: _v37,
              isSelected: _v4.includes(_v0.uri),
              groupsPageMode: _v17,
              handleSelect: _v3,
              canAccessOrganizationSettings: _v24
            }, _v0.uri)), _v12 && !_v13 && (0, _v1.jsx)(_v86, {
              listItemsCount: 8
            })]
          })]
        }), _v13 && (0, _v1.jsx)(_v7.Center, {
          paddingY: "200",
          children: (0, _v1.jsx)(_v9.Spinner, {
            size: "sm"
          })
        }), _v26 && !_v13 ? (0, _v1.jsx)(_v88, {
          ref: _v28
        }) : null]
      });
    },
    _v88 = (0, _v3.forwardRef)((_v0, _v1) => (0, _v1.jsx)("div", {
      ..._v0,
      style: {
        marginTop: (0, _v10.rem)(24)
      },
      ref: _v1
    }));
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  let _v92 = ({
    role: _v0,
    updateRole: _v1,
    roles: _v2
  }) => {
    let _v3 = (0, _v34.getTranslations)(),
      _v4 = (0, _v3.useMemo)(() => _v2?.map(_v0 => ({
        ..._v0,
        label: _v0.displayName ?? "",
        value: _v0.permissionLevel?.replace(/\s/g, "_").toLowerCase() ?? ""
      })) ?? [], [_v2]);
    return (0, _v1.jsx)(_v8.Flex, {
      sx: {
        '& [data-scope="select"][data-part="root"]': {
          width: "100%"
        }
      },
      children: (0, _v1.jsx)(_v37.Select, {
        items: _v4,
        value: [_v0 ?? ""],
        onValueChange: _v0 => {
          _v1(_v0.value[0]);
        },
        placeholder: _v3.SelectRole,
        children: _v0 => (0, _v1.jsx)(_v37.SelectItem, {
          children: (0, _v1.jsx)(_v6.Box, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v29.ShrinkableText, {
              variant: "heading-xs",
              children: _v0.displayName
            })
          })
        }, _v0.permissionLevel)
      })
    });
  };
  var _v93 = _v0.i(0);
  let _v94 = ["name", "metadata.connections.users", "uri", "workspaces.uri"],
    _v95 = ({
      onClose: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(""),
        [_v3, _v4] = (0, _v3.useState)(""),
        [_v5, _v6] = (0, _v3.useState)(null),
        [_v7, _v8] = (0, _v3.useState)(null),
        [_v9, _v10] = (0, _v3.useState)(!1),
        _v11 = (0, _v25.useToast)(),
        _v12 = (0, _v34.getTranslations)(),
        {
          ws: _v13,
          rolesInfo: _v14
        } = (0, _v3.useContext)(_v47),
        _v15 = 1 === _v3.length ? _v1 : _v3,
        _v16 = (0, _v42.useDebouncedValue)(_v15, 500),
        {
          orgGroups: _v17,
          isLoading: _v18,
          isValidating: _v19,
          hasError: _v20,
          mutate: _v21,
          lastElementRef: _v22
        } = (({
          wsInternalId: _v0,
          query: _v1,
          select: _v2
        }) => {
          let [_v3, _v4] = (0, _v70.useInfiniteScroll)(!0),
            {
              data: _v5,
              size: _v6,
              isLoading: _v7,
              isValidating: _v8,
              error: _v9,
              setSize: _v10,
              mutate: _v11
            } = (0, _v93.useGetUserTeamGroupsInfinite)(() => _v0 ? {
              where: {
                userId: _v0
              },
              query: {
                perPage: 15,
                searchText: _v1,
                sort: "name",
                includeAllUsersGroup: !0
              },
              select: _v2,
              headers: {
                Accept: _v33.ACCEPT_HEADER_API_VERSION
              }
            } : null);
          return (0, _v3.useEffect)(() => {
            _v7 || _v8 || 15 * _v6 >= (_v5?.[0]?.total ?? 0) || _v10(_v6 + 1);
          }, [_v3]), (0, _v3.useMemo)(() => ({
            orgGroups: _v5,
            isLoading: _v7,
            isValidating: _v8,
            hasError: !!_v9,
            mutate: _v11,
            lastElementRef: _v4
          }), [_v9, _v7, _v8, _v4, _v11, _v5]);
        })({
          select: _v94,
          wsInternalId: _v13?.internalId ?? null,
          query: _v16
        }),
        _v23 = (0, _v3.useCallback)((_v0 = "") => {
          _v2(_v3), _v4(_v0);
        }, [_v3]),
        _v24 = _v35({
          toast: _v11
        }),
        {
          setWs: _v25,
          assignGroupsToWs: _v26,
          loading: _v27
        } = _v32({
          onSuccess: (0, _v3.useCallback)(() => {
            _v11({
              duration: _v27.NOTIFICATION_DURATION,
              title: _v12.GroupInvited
            }), _v21(), _v10(!1), _v8(null);
          }, [_v11, _v12.GroupInvited, _v21]),
          onError: _v24
        });
      (0, _v3.useEffect)(() => {
        _v13 && _v25(_v13);
      }, [_v25, _v13]);
      let _v28 = _v17?.flatMap(_v0 => _v0.data || []),
        _v29 = !_v20 && _v28?.length === 0 && !_v18;
      return (0, _v1.jsxs)(_v17.Modal, {
        onClose: _v0,
        size: "md",
        isOpen: !0,
        isCentered: !1,
        children: [(0, _v1.jsx)(_v18.ModalOverlay, {}), (0, _v1.jsx)(_v19.ModalContent, {
          marginTop: (0, _v10.rem)(50),
          minW: (0, _v10.rem)(480),
          children: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v53.ModalHeader, {
              paddingBottom: "0",
              paddingTop: "300",
              overflowWrap: "break-word",
              "data-id": "groupMembersHead",
              children: (0, _v1.jsxs)(_v8.Flex, {
                justifyContent: "space-between",
                gap: "100",
                children: [(0, _v1.jsx)(_v8.Flex, {
                  gap: "75",
                  alignItems: "center",
                  overflow: "hidden",
                  children: (0, _v1.jsx)(_v29.ShrinkableText, {
                    variant: "heading-md",
                    as: "h2",
                    children: _v9 ? _v12.SelectRole : _v12.InviteGroup
                  })
                }), (0, _v1.jsx)(_v89.ModalCloseButton, {
                  onClick: _v0,
                  position: "static"
                })]
              })
            }), (0, _v1.jsx)(_v24.ModalBody, {
              paddingY: "200",
              children: _v9 && _v14 ? (0, _v1.jsx)(_v92, {
                roles: _v14,
                role: _v7,
                updateRole: _v8
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [!_v29 && (0, _v1.jsx)(_v74, {
                  query: _v3,
                  updateQuery: _v23,
                  searchAction: () => void 0,
                  paddingBottom: "200",
                  maxW: "unset",
                  placeholder: _v12.SearchOrgGroups
                }), (0, _v1.jsxs)(_v6.Box, {
                  maxHeight: (0, _v10.rem)(244),
                  overflowY: "auto",
                  overflowX: "hidden",
                  children: [_v20 && (0, _v1.jsx)(_v4.Alert, {
                    status: "error",
                    children: (0, _v1.jsx)(_v5.AlertDescription, {
                      marginTop: "50",
                      children: _v12.SomethingWentWrong
                    })
                  }), _v28?.map((_v0, _v1) => {
                    let _v2 = (0, _v31.isLastElement)(_v1, _v28?.length || 0),
                      _v3 = _v0.metadata?.connections?.users?.total || 0,
                      _v4 = _v0.workspaces?.filter(({
                        uri: _v0
                      }) => _v0 === _v13?.uri).length === 0,
                      _v5 = _v5?.uri === _v0.uri;
                    return (0, _v1.jsxs)(_v3.default.Fragment, {
                      children: [(0, _v1.jsxs)(_v8.Flex, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingY: "75",
                        paddingRight: "75",
                        ref: !(_v18 || _v19) && _v2 ? _v22 : null,
                        sx: {
                          "& button": {
                            opacity: 0,
                            transition: "opacity 0.5s ease"
                          },
                          "&:hover button": {
                            opacity: 1
                          }
                        },
                        children: [(0, _v1.jsxs)(_v8.Flex, {
                          alignItems: "center",
                          overflow: "hidden",
                          children: [(0, _v1.jsx)(_v28.GroupIcon, {}), (0, _v1.jsxs)(_v6.Box, {
                            paddingLeft: "75",
                            "data-id": "orgGroupItem",
                            overflow: "hidden",
                            children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                              variant: "heading-xs",
                              children: _v0.name ?? ""
                            }), (0, _v1.jsx)(_v29.ShrinkableText, {
                              variant: "body-md",
                              color: "text-secondary",
                              children: _v12.MembersCount(_v3)
                            })]
                          })]
                        }), _v4 ? (0, _v1.jsx)(_v50.Button, {
                          size: "sm",
                          variant: "secondary",
                          onClick: () => {
                            _v6(_v0), _v10(!0);
                          },
                          isLoading: _v5 && _v27,
                          isDisabled: _v5 && _v27,
                          children: _v12.Invite
                        }) : (0, _v1.jsx)(_v77.Text, {
                          variant: "body-sm",
                          color: "text-secondary",
                          children: _v12.AlreadyInvited
                        })]
                      }), !_v2 && (0, _v1.jsx)(_v90.Divider, {
                        borderColor: "stroke"
                      })]
                    }, `key-org-group-${_v0?.uri}`);
                  }), _v29 && !_v19 && (0, _v1.jsxs)(_v8.Flex, {
                    flexDir: "column",
                    alignItems: "center",
                    height: (0, _v10.rem)(104),
                    justifyContent: "center",
                    children: [(0, _v1.jsx)(_v91.Groups, {
                      color: "text-secondary",
                      marginBottom: "50",
                      boxSize: "sm"
                    }), (0, _v1.jsx)(_v77.Text, {
                      variant: "heading-xs",
                      color: "text-secondary",
                      "data-id": "noResultText",
                      children: _v12.NoGroupsFound
                    })]
                  }), (_v18 || _v19) && (0, _v1.jsx)(_v7.Center, {
                    paddingY: (0, _v10.rem)(80),
                    children: (0, _v1.jsx)(_v9.Spinner, {})
                  })]
                })]
              })
            }), _v9 ? (0, _v1.jsxs)(_v51.ModalFooter, {
              children: [(0, _v1.jsx)(_v50.Button, {
                variant: "tertiary",
                onClick: () => {
                  _v10(!1), _v6(null), _v8(null);
                },
                children: _v12.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                variant: "primary",
                onClick: () => {
                  _v5 && _v26([_v5], _v7);
                },
                children: _v12.Invite
              })]
            }) : null]
          })
        })]
      });
    };
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = ({
    mode: _v0,
    handleCancelClick: _v1,
    handleConfirmClick: _v2,
    isFinalStep: _v3 = !1,
    isConfirmDisabled: _v4 = !1,
    isConfirmInProgress: _v5 = !1,
    isConfirmRoleStep: _v6 = !1,
    rightElement: _v7
  }) => {
    let _v8 = (0, _v34.getTranslations)(),
      _v9 = (0, _v3.useMemo)(() => {
        let _v0 = {
            variant: "tertiary",
            onClick: _v1
          },
          _v1 = {
            variant: [_v20.DELETE, _v20.MANAGE_WORKSPACES].includes(_v0) || _v0 === _v20.ROLE_SET && _v6 ? "destructive" : "primary",
            onClick: _v2,
            isDisabled: _v4,
            isLoading: _v5
          };
        switch (_v0) {
          case _v20.CREATE:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v3 ? _v8.CreateGroup : _v8.Next
              })]
            });
          case _v20.RENAME:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v8.Save
              })]
            });
          case _v20.COPY:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v8.CreateGroup
              })]
            });
          case _v20.DELETE:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v8.Delete
              })]
            });
          case _v20.EDIT:
            return _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v8.Confirm
              })]
            }) : null;
          case _v20.ROLE_SET:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v6 ? _v8.ConfirmDefault : _v8.Next
              })]
            });
          case _v20.ROLE_REMOVE:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v8.RemoveDefault
              })]
            });
          case _v20.MANAGE_WORKSPACES:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v50.Button, {
                ..._v0,
                children: _v8.Cancel
              }), (0, _v1.jsx)(_v50.Button, {
                ..._v1,
                children: _v8.Remove
              })]
            });
          default:
            return null;
        }
      }, [_v1, _v0, _v6, _v2, _v4, _v5, _v8.Cancel, _v8.CreateGroup, _v8.Next, _v8.Save, _v8.Delete, _v8.Confirm, _v8.ConfirmDefault, _v8.RemoveDefault, _v8.Remove, _v3]);
    return _v9 ? (0, _v1.jsx)(_v51.ModalFooter, {
      "data-id": "groupMembersFooter",
      children: (0, _v1.jsxs)(_v8.Flex, {
        justifyContent: _v7 ? "space-between" : "flex-end",
        width: "100%",
        children: [_v7, (0, _v1.jsx)(_v8.Flex, {
          gap: "3",
          children: _v9
        })]
      })
    }) : null;
  };
  var _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0);
  let _v105 = ({
      mode: _v0,
      groupData: _v1,
      wsBeingUnassigned: _v2 = null,
      hasMembersCount: _v3 = !1,
      hasAddMembersButton: _v4 = !1,
      hasCloseModalButton: _v5 = !1,
      isAddMembersStateEnabled: _v6 = !1,
      isAssignWsStateEnabled: _v7 = !1,
      hasBackButton: _v8 = !1,
      isUnassignWsStepEnabled: _v9 = !1,
      handleBackButtonClick: _v10,
      closeModal: _v11,
      setAddMembersStateEnabled: _v12
    }) => {
      let _v13 = (0, _v34.getTranslations)(),
        _v14 = _v1?.metadata?.connections?.users?.total || 0,
        _v15 = _v1?.name || "",
        _v16 = (0, _v3.useMemo)(() => _v6 ? _v13.AddMembersToGroupName(_v15) : _v7 ? _v13.AddGroupToWorkspace : _v0 === _v20.CREATE ? _v13.CreateNewGroup : _v0 === _v20.RENAME ? _v13.RenameGroupName(_v15) : _v0 === _v20.COPY ? _v13.MakeACopyOfGroupName(_v15) : _v0 === _v20.DELETE ? _v13.DeleteGroupName(_v15) : _v0 === _v20.EDIT ? _v1?.type === "sso" ? _v15 : _v13.ManageGroupName(_v15) : _v0 === _v20.ROLE_SET ? _v8 ? _v13.ConfirmNewDefaultRole : _v13.SetDefaultRoleForGroupName(_v15) : _v0 === _v20.ROLE_REMOVE ? _v13.RemoveDefaultRoleForGroupName(_v15) : _v0 === _v20.MANAGE_WORKSPACES ? _v9 && _v2 ? _v13.RemoveGroupFromWs(_v1?.name ?? "", _v2.displayName) : _v13.WorkspaceAccess : void 0, [_v6, _v7, _v0, _v13, _v15, _v1?.type, _v1?.name, _v8, _v9, _v2]);
      return (0, _v1.jsxs)(_v53.ModalHeader, {
        paddingBottom: "0",
        paddingTop: "300",
        overflowWrap: "break-word",
        "data-id": "groupMembersHead",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          justifyContent: "space-between",
          gap: "100",
          children: [(0, _v1.jsxs)(_v8.Flex, {
            gap: "75",
            alignItems: "center",
            overflow: "hidden",
            children: [_v8 && (0, _v1.jsx)(_v80.IconButton, {
              "aria-label": "",
              size: "sm",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v104.ArrowLeft, {}),
              onClick: _v10
            }), (0, _v1.jsx)(_v29.ShrinkableText, {
              variant: "heading-md",
              as: "h2",
              children: _v16
            })]
          }), (0, _v1.jsxs)(_v8.Flex, {
            gap: "50",
            children: [_v4 && (0, _v1.jsx)(_v102.Tooltip, {
              label: _v13.AddMembers,
              placement: "bottom",
              children: (0, _v1.jsx)(_v80.IconButton, {
                "aria-label": _v13.AddMembers,
                size: "sm",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v103.PersonUserAdd, {}),
                onClick: () => _v12?.(!0),
                onFocus: _v0 => _v0.preventDefault()
              })
            }), _v5 && (0, _v1.jsx)(_v89.ModalCloseButton, {
              onClick: _v11,
              position: "static"
            })]
          })]
        }), _v3 && (0, _v1.jsx)(_v77.Text, {
          "data-id": "membersCountHeader",
          variant: "body-md",
          marginTop: (0, _v10.rem)(2),
          children: _v13.MembersCount(_v14 ?? 0)
        })]
      });
    },
    _v106 = ({
      closeModal: _v0,
      ownerId: _v1,
      groupData: _v2
    }) => {
      let _v3 = (0, _v34.getTranslations)(),
        [_v4, _v5] = (0, _v3.useState)(_v3.CopyOfGroupName(_v2.name)),
        [_v6, _v7] = (0, _v3.useState)(""),
        _v8 = (0, _v25.useToast)(),
        _v9 = _v35({
          toast: _v8,
          setErrorMessage: _v7
        }),
        {
          analyticsHandlers: {
            sendGroupUpdateEvent: _v10
          }
        } = (0, _v3.useContext)(_v47),
        _v11 = (0, _v3.useCallback)(() => {
          _v8({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v3.GroupCreated
          }), _v10("copy", ["copy"], _v2, {
            search_result_qty: 1
          }), _v0(_v22.RELOAD);
        }, [_v3.GroupCreated, _v0, _v8, _v10, _v2]),
        {
          createGroup: _v12,
          loading: _v13
        } = (0, _v100.useCreateTeamGroup)({
          userId: _v1,
          handleError: _v9,
          handleSuccess: _v11
        }),
        _v14 = !!_v6 || !_v4.trim().length || _v4 === _v2.name;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.COPY,
          closeModal: _v0,
          groupData: _v2
        }), (0, _v1.jsxs)(_v24.ModalBody, {
          paddingBottom: "200",
          paddingTop: "75",
          children: ["sso" === _v2.type && (0, _v1.jsx)(_v59.Paragraph, {
            variant: "body-md",
            marginBottom: "300",
            children: _v3.MakingACopyOfThis
          }), (0, _v1.jsxs)(_v96.FormControl, {
            isInvalid: !!_v6,
            children: [(0, _v1.jsx)(_v97.FormLabel, {
              size: "sm",
              children: _v3.GroupName
            }), (0, _v1.jsx)(_v99.Input, {
              value: _v4,
              onChange: _v0 => {
                _v5(_v0.currentTarget.value), _v7("");
              }
            }), (0, _v1.jsx)(_v98.FormErrorMessage, {
              children: _v6
            })]
          })]
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.COPY,
          handleCancelClick: _v0,
          handleConfirmClick: () => _v12(_v4, (0, _v31.getIdFromUri)(_v2.uri)),
          isConfirmDisabled: _v14,
          isConfirmInProgress: _v13
        })]
      });
    };
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = ({
      userId: _v0,
      handleError: _v1,
      handleSuccess: _v2
    }) => {
      let [_v3, {
          error: _v4,
          loading: _v5
        }] = (0, _v108.usePatchUserTeamGroupUsers)(),
        _v6 = (0, _v3.useRef)(!1),
        _v7 = (0, _v3.useCallback)((_v0, _v1) => {
          _v3({
            where: {
              userId: _v0,
              teamGroupId: _v0
            },
            variables: _v1,
            select: ["uri"]
          }), _v6.current = !0;
        }, [_v3, _v0]);
      return (0, _v3.useEffect)(() => {
        _v6.current && !_v5 && (_v6.current = !1, _v4 ? _v1(_v4) : _v2());
      }, [_v4, _v1, _v2, _v5]), (0, _v3.useMemo)(() => ({
        loading: _v5,
        updateGroupMembers: _v7
      }), [_v7, _v5]);
    },
    _v110 = ({
      ownerId: _v0,
      onError: _v1,
      onSuccess: _v2
    }) => {
      let {
          updateGroupMembers: _v3,
          loading: _v4
        } = _v109({
          userId: _v0,
          handleError: _v1,
          handleSuccess: _v2
        }),
        _v5 = (0, _v3.useCallback)((_v0, _v1) => {
          try {
            let _v0 = (0, _v31.getIdFromLink)(_v0.uri),
              _v1 = [];
            _v1.forEach(_v0 => {
              _v1.push({
                type: "email",
                uri: _v0
              });
            }), _v1.length && _v3(_v0, {
              add: _v1
            });
          } catch {
            _v1();
          }
        }, [_v1, _v3]);
      return (0, _v3.useMemo)(() => ({
        handleAddNewMembersByEmail: _v5,
        isLoading: _v4
      }), [_v5, _v4]);
    };
  var _v111 = _v0.i(0);
  let _v112 = async (_v0, _v1, _v2, _v3) => {
      try {
        let _v0 = await fetch(`//${_v0}${_v1}`, {
          method: "PATCH",
          headers: {
            Authorization: `jwt ${_v2}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_v3)
        });
        if (_v0.ok) return Promise.resolve(_v0);
        return Promise.reject(new _v111.NetworkError(`Failed to patch group: ${_v0.status}`, _v0.status, _v0));
      } catch (_v0) {
        return Promise.reject(_v0);
      }
    },
    _v113 = ({
      handleError: _v0,
      handleSuccess: _v1
    }) => {
      let _v2 = (0, _v71.useViewer)(),
        _v3 = _v2?.jwt,
        _v4 = _v2?.apiUrl,
        [_v5, _v6] = (0, _v3.useState)(!1),
        _v7 = (0, _v3.useCallback)(async (_v0, _v1) => {
          if (_v4 && _v3) try {
            _v6(!0);
            let _v0 = await _v112(_v4, _v0, _v3, _v1),
              _v1 = await _v0.json();
            _v1(_v1);
          } catch (_v0) {
            _v0(_v0);
          } finally {
            _v6(!1);
          }
        }, [_v4, _v0, _v1, _v3]);
      return (0, _v3.useMemo)(() => ({
        loading: _v5,
        patchGroup: _v7
      }), [_v7, _v5]);
    },
    _v114 = ({
      ownerId: _v0,
      onError: _v1,
      onSuccess: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)([]),
        [_v5, _v6] = (0, _v3.useState)(null),
        _v7 = (0, _v3.useRef)(!1),
        _v8 = (0, _v3.useCallback)(() => {
          _v6(_v0 => _v0 ? {
            ..._v0,
            updateMembers: !1
          } : null);
        }, []),
        _v9 = (0, _v3.useCallback)(() => {
          _v6(_v0 => _v0 ? {
            ..._v0,
            patchGroup: !1
          } : null);
        }, []);
      (0, _v3.useEffect)(() => {
        if (_v5 && _v7.current && !_v5.updateMembers && !_v5.patchGroup) {
          let _v0 = _v3.reduce((_v0, _v1) => _v0 += "group" === _v1.type ? _v1.size : 1, 0),
            _v1 = _v3.map(_v0 => "group" === _v0.type ? `group_${_v0.uri}` : _v0.uri);
          _v6(null), _v4([]), _v2(_v0, _v1), _v7.current = !1;
        }
      }, [_v3, _v2, _v5]);
      let {
          updateGroupMembers: _v10,
          loading: _v11
        } = _v109({
          userId: _v0,
          handleError: _v1,
          handleSuccess: _v8
        }),
        {
          patchGroup: _v12,
          loading: _v13
        } = _v113({
          handleError: _v1,
          handleSuccess: _v9
        }),
        _v14 = (0, _v3.useCallback)(_v0 => {
          try {
            let _v0 = (0, _v31.getIdFromLink)(_v0.uri),
              _v1 = [],
              _v2 = [];
            _v3.forEach(_v0 => {
              "group" === _v0.type ? _v2.push((0, _v31.getIdFromLink)(_v0.uri)) : _v1.push({
                type: "user",
                uri: _v0.uri
              });
            }), _v1.length && _v10(_v0, {
              add: _v1
            }), _v2.length && _v12(_v0.uri, {
              copy_from_group_ids: _v2
            }), _v6({
              patchGroup: !!_v2.length,
              updateMembers: !!_v1.length
            }), _v7.current = !0;
          } catch {
            _v1();
          }
        }, [_v3, _v1, _v12, _v10]);
      return (0, _v3.useMemo)(() => ({
        handleAddNewMembers: _v14,
        isLoading: _v13 || _v11,
        setNewGroupMembers: _v4,
        newGroupMembers: _v3
      }), [_v14, _v3, _v13, _v11]);
    };
  var _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  let _v118 = ({
      ownerId: _v0,
      teamGroupUri: _v1,
      newMembers: _v2,
      setNewMembers: _v3,
      isDisabled: _v4 = !1
    }) => {
      let _v5 = (0, _v34.getTranslations)(),
        [_v6, _v7] = (0, _v3.useState)(""),
        _v8 = (0, _v42.useDebouncedValue)(_v6, 500),
        _v9 = (0, _v3.useRef)(null),
        _v10 = (0, _v3.useRef)(null),
        [_v11, {
          data: _v12,
          loading: _v13
        }] = (0, _v93.useGetUserTeamGroupsLazy)(),
        [_v14, {
          data: _v15,
          loading: _v16
        }] = (0, _v117.useGetUserTeammembersLazy)();
      (0, _v3.useEffect)(() => {
        _v9.current = _v11, _v10.current = _v14;
      }, [_v11, _v14]), (0, _v3.useEffect)(() => {
        _v0 && _v8.trim().length && (_v9.current?.({
          where: {
            userId: _v0
          },
          query: {
            searchText: _v8,
            perPage: 100,
            page: 1
          },
          select: ["uri", "name", "metadata.connections.users.total"]
        }), _v10.current?.({
          where: {
            userId: _v0
          },
          query: {
            search: _v8,
            perPage: 100,
            page: 1
          },
          select: ["email", "user.uri", "user.name", "user.email", "user.pictures.sizes"]
        }));
      }, [_v8, _v0]);
      let _v17 = (({
          query: _v0,
          members: _v1,
          groups: _v2,
          teamGroupUri: _v3,
          newMembers: _v4
        }) => (0, _v3.useMemo)(() => {
          if (!_v0.trim().length) return [];
          let _v0 = (0, _v34.getTranslations)(),
            _v1 = [];
          return _v1?.data.length && _v1?.data.forEach(_v0 => {
            _v1.push({
              type: "user",
              uri: _v0.user?.uri || "",
              title: _v0.user?.name || "",
              subtitle: _v0.email || "",
              avatar: _v0.user?.pictures?.sizes?.find(_v0 => 100 === _v0.width)?.link,
              size: 0
            });
          }), _v2?.data.length && _v2?.data.forEach(_v0 => {
            let _v1 = _v0?.metadata?.connections?.users?.total || 0;
            _v1.push({
              type: "group",
              uri: _v0.uri || "",
              title: _v0.name || "",
              subtitle: _v0.MembersCount(_v1),
              avatar: null,
              size: _v1
            });
          }), _v1.filter(_v0 => {
            let _v1 = void 0 !== _v4.find(_v0 => _v0.uri === _v0.uri),
              _v2 = "group" === _v0.type && 0 === _v0.size,
              _v3 = "group" === _v0.type && _v3 === _v0.uri,
              _v4 = 0 === _v0.uri.length;
            return !_v2 && !_v1 && !_v4 && !_v3;
          }).sort((_v0, _v1) => _v0.title > _v1.title ? 1 : _v1.title > _v0.title ? -1 : 0);
        }, [_v2?.data, _v1?.data, _v4, _v0, _v3]))({
          query: _v8,
          members: _v15,
          groups: _v12,
          teamGroupUri: _v1,
          newMembers: _v2
        }),
        _v18 = (0, _v3.useCallback)(_v0 => {
          _v3(_v2.concat(_v0)), _v7("");
        }, [_v2, _v3]),
        _v19 = (0, _v3.useCallback)(_v0 => {
          _v3(_v2.filter(_v0 => _v0.uri !== _v0));
        }, [_v2, _v3]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v115.InputGroup, {
          children: [(0, _v1.jsx)(_v99.Input, {
            value: _v6,
            placeholder: _v5.AddNameGroupOrEmail,
            onChange: _v0 => _v7(_v0.currentTarget.value),
            autoFocus: !0,
            isDisabled: _v4
          }), (0, _v1.jsx)(_v116.InputRightElement, {
            children: (_v13 || _v16) && (0, _v1.jsx)(_v9.Spinner, {
              size: "xs"
            })
          })]
        }), (0, _v1.jsxs)(_v78.Menu, {
          isOpen: !!_v17.length,
          placement: "bottom-start",
          matchWidth: !0,
          children: [(0, _v1.jsx)(_v79.MenuButton, {
            as: _v6.Box,
            width: "100%",
            height: "0"
          }), (0, _v1.jsx)(_v81.MenuList, {
            maxHeight: (0, _v10.rem)(294),
            children: _v17.map(_v0 => {
              let _v1 = "user" === _v0.type ? (0, _v1.jsx)(_v36.Avatar, {
                size: "sm",
                src: _v0.avatar ?? void 0,
                alt: _v0.title,
                nameProps: {
                  name: _v0.title
                }
              }) : (0, _v1.jsx)(_v28.GroupIcon, {});
              return (0, _v1.jsx)(_v82.MenuItem, {
                onClick: () => _v18(_v0),
                children: (0, _v1.jsxs)(_v8.Flex, {
                  alignItems: "center",
                  gap: "75",
                  overflow: "hidden",
                  children: [_v1, (0, _v1.jsxs)(_v6.Box, {
                    overflow: "hidden",
                    children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                      variant: "heading-xs",
                      children: _v0.title
                    }), (0, _v1.jsx)(_v29.ShrinkableText, {
                      variant: "body-md",
                      color: "text-secondary",
                      children: _v0.subtitle.toString()
                    })]
                  })]
                })
              }, _v0.uri);
            })
          })]
        }), !!_v2.length && (0, _v1.jsx)(_v8.Flex, {
          maxHeight: (0, _v10.rem)(284),
          overflowY: "auto",
          overflowX: "hidden",
          marginTop: "200",
          gap: "75",
          direction: "column",
          paddingY: "75",
          marginX: "-2",
          children: _v2.map(_v0 => {
            let _v1 = "user" === _v0.type ? (0, _v1.jsx)(_v36.Avatar, {
              size: "sm",
              src: _v0.avatar ?? void 0,
              alt: _v0.title,
              nameProps: {
                name: _v0.title
              }
            }) : (0, _v1.jsx)(_v28.GroupIcon, {});
            return (0, _v1.jsxs)(_v3.default.Fragment, {
              children: [(0, _v1.jsx)(_v6.Box, {
                paddingX: "75",
                children: (0, _v1.jsxs)(_v8.Flex, {
                  alignItems: "center",
                  gap: "75",
                  justifyContent: "space-between",
                  sx: {
                    "& button": {
                      opacity: 0,
                      transition: "opacity 0.5s ease"
                    },
                    "&:hover button": {
                      opacity: 1
                    }
                  },
                  children: [(0, _v1.jsxs)(_v8.Flex, {
                    alignItems: "center",
                    gap: "75",
                    overflow: "hidden",
                    children: [_v1, (0, _v1.jsxs)(_v6.Box, {
                      overflow: "hidden",
                      children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                        variant: "heading-xs",
                        children: _v0.title
                      }), (0, _v1.jsx)(_v29.ShrinkableText, {
                        variant: "body-md",
                        color: "text-secondary",
                        children: _v0.subtitle.toString()
                      })]
                    })]
                  }), (0, _v1.jsx)(_v50.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => _v19(_v0.uri),
                    children: _v5.Remove
                  })]
                })
              }), _v2.length > 1 && (0, _v1.jsx)(_v90.Divider, {
                borderColor: "stroke"
              })]
            }, _v0.uri);
          })
        })]
      });
    },
    _v119 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    _v120 = _v0 => {
      let _v1 = _v0.trim();
      return "" !== _v1 && _v119.test(_v1);
    },
    _v121 = (_v0, {
      onSuccess: _v1,
      onError: _v2
    }) => {
      if ("text/csv" !== _v0.type || !_v0.name.endsWith(".csv")) return void _v2();
      let _v3 = new FileReader();
      _v3.onload = _v0 => {
        let _v1 = _v0.target?.result,
          _v2 = [],
          _v3 = _v1.split(/\r?\n/).filter(_v0 => "" !== _v0.trim());
        if (_v3.length > 500) return void _v2();
        for (let _v0 = 0; _v0 < _v3.length; _v0++) {
          let _v0 = _v3[_v0];
          if (_v0.includes(",")) return void _v2();
          let _v1 = _v0.trim();
          if (!_v120(_v1)) return void _v2();
          _v2.push(_v1.toLowerCase());
        }
        _v2.length > 0 ? _v1(_v2) : _v2();
      }, _v3.onerror = () => {
        _v2();
      }, _v3.readAsText(_v0);
    },
    _v122 = ({
      closeModal: _v0,
      ownerId: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        [_v3, _v4] = (0, _v3.useState)(""),
        [_v5, _v6] = (0, _v3.useState)(1),
        [_v7, _v8] = (0, _v3.useState)(""),
        [_v9, _v10] = (0, _v3.useState)(null),
        [_v11, _v12] = (0, _v3.useState)(null),
        [_v13, _v14] = (0, _v3.useState)([]),
        [_v15, _v16] = (0, _v3.useState)(!1),
        _v17 = (0, _v25.useToast)(),
        {
          analyticsHandlers: {
            sendGroupCreationEvent: _v18
          },
          mode: _v19
        } = (0, _v3.useContext)(_v47),
        _v20 = _v35({
          toast: _v17,
          setErrorMessage: _v0 => {
            _v8(_v0), _v6(1);
          }
        }),
        _v21 = (0, _v3.useCallback)((_v0 = !1) => {
          _v17({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v0 ? _v2.InvalidCSVProvided : _v2.SomethingWentWrong
          }), _v16(!1);
        }, [_v2.InvalidCSVProvided, _v2.SomethingWentWrong, _v17]),
        _v22 = (0, _v3.useCallback)(() => {
          _v17({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v2.GroupCreated
          }), _v9 && _v18(_v9, {
            search_result_qty: 1
          }), _v0(_v22.RELOAD);
        }, [_v2.GroupCreated, _v0, _v17, _v18, _v9]),
        {
          ws: _v23,
          setWs: _v24,
          assignGroupsToWs: _v25,
          loading: _v26
        } = _v32({
          onSuccess: _v22,
          onError: _v20
        }),
        _v27 = (0, _v3.useCallback)(() => {
          _v23 ? _v25(_v9 ? [_v9] : [], _v11) : _v22();
        }, [_v25, _v9, _v22, _v11, _v23]),
        {
          handleAddNewMembers: _v28,
          isLoading: _v29,
          setNewGroupMembers: _v30,
          newGroupMembers: _v31
        } = _v114({
          ownerId: _v1,
          onError: _v20,
          onSuccess: _v27
        }),
        {
          handleAddNewMembersByEmail: _v32,
          isLoading: _v33
        } = _v110({
          ownerId: _v1,
          onError: _v21,
          onSuccess: _v27
        }),
        _v34 = (0, _v3.useCallback)(_v0 => {
          _v10(_v0), _v13.length > 0 ? _v32(_v0, _v13) : _v28(_v0);
        }, [_v28, _v32, _v13]),
        {
          createGroup: _v35,
          loading: _v36
        } = (0, _v100.useCreateTeamGroup)({
          userId: _v1,
          handleError: _v20,
          handleSuccess: _v34
        }),
        _v37 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.target.files?.[0];
          (_v0.target.value = "", _v1) ? (_v16(!0), _v121(_v1, {
            onSuccess: _v0 => {
              _v14(_v0), _v16(!1);
            },
            onError: () => _v21(!0)
          })) : _v21(!0);
        }, [_v21]),
        _v38 = (0, _v3.useCallback)(() => {
          switch (_v5) {
            case 1:
              return _v6(2);
            case 2:
              return _v19 === _v23.TEAM ? _v35(_v3) : _v6(3);
            case 3:
              return _v35(_v3);
          }
        }, [_v35, _v19, _v5, _v3]),
        _v39 = _v36 || _v29 || _v33 || _v26,
        _v40 = 2 === _v5 ? !_v31.length && !_v13.length || _v39 : !!_v7 || !_v3.length,
        _v41 = (0, _v3.useMemo)(() => ({
          name: _v3
        }), [_v3]),
        _v42 = _v13.length,
        _v43 = (0, _v3.useMemo)(() => {
          switch (_v5) {
            case 1:
              return (0, _v1.jsxs)(_v96.FormControl, {
                isInvalid: !!_v7,
                children: [(0, _v1.jsx)(_v97.FormLabel, {
                  size: "sm",
                  children: _v2.GroupName
                }), (0, _v1.jsx)(_v99.Input, {
                  value: _v3,
                  onChange: _v0 => {
                    _v4(_v0.currentTarget.value), _v8("");
                  }
                }), (0, _v1.jsx)(_v98.FormErrorMessage, {
                  children: _v7
                })]
              });
            case 2:
              return (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v118, {
                  newMembers: _v31,
                  setNewMembers: _v30,
                  ownerId: _v1,
                  isDisabled: !!_v42
                }), !!_v42 && (0, _v1.jsx)(_v8.Flex, {
                  width: "100%",
                  justifyContent: "center",
                  paddingTop: "5",
                  children: (0, _v1.jsx)(_v77.Text, {
                    color: "text-secondary",
                    variant: "body-md",
                    children: _v2.XMembersWillBeAdded(_v42)
                  })
                })]
              });
            case 3:
              return (0, _v1.jsx)(_v49, {
                ws: _v23,
                setWs: _v24,
                role: _v11,
                setRole: _v12,
                label: (0, _v1.jsx)(_v77.Text, {
                  variant: "heading-xs",
                  marginBottom: "1",
                  children: _v2.Workspace
                })
              });
            default:
              return null;
          }
        }, [_v2, _v5, _v3, _v7, _v31, _v1, _v11, _v30, _v24, _v42, _v23]),
        _v44 = (0, _v3.useMemo)(() => 2 !== _v5 ? null : _v42 ? (0, _v1.jsx)(_v50.Button, {
          variant: "tertiary",
          onClick: () => _v14([]),
          children: _v2.Reset
        }) : _v15 ? (0, _v1.jsx)(_v50.Button, {
          variant: "tertiary",
          isLoading: !0,
          children: _v2.UploadCSV
        }) : (0, _v1.jsx)(_v107.FileInput, {
          isDisabled: !!_v31.length,
          variant: "tertiary",
          onChange: _v37,
          accept: ".csv",
          label: _v2.UploadCSV
        }), [_v2.Reset, _v2.UploadCSV, _v37, _v15, _v5, _v31.length, _v42]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.CREATE,
          closeModal: _v0,
          groupData: _v41,
          isAddMembersStateEnabled: 2 === _v5,
          isAssignWsStateEnabled: 3 === _v5,
          hasBackButton: [2, 3].includes(_v5),
          handleBackButtonClick: () => _v6(3 === _v5 ? 2 : 1)
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingY: "200",
          children: _v43
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.CREATE,
          isFinalStep: _v19 === _v23.TEAM ? 2 === _v5 : 3 === _v5,
          handleCancelClick: _v0,
          handleConfirmClick: _v38,
          isConfirmDisabled: _v40,
          isConfirmInProgress: _v39,
          rightElement: _v44
        })]
      });
    },
    _v123 = async (_v0, _v1, _v2) => {
      let _v3 = await fetch(`//${_v0}${_v1}`, {
        method: "DELETE",
        headers: {
          Authorization: `jwt ${_v2}`,
          "Content-Type": "application/json"
        }
      });
      return _v3.ok ? Promise.resolve(_v3) : Promise.reject(new _v111.NetworkError(`Failed to delete group: ${_v3.status}`, _v3.status, _v3));
    },
    _v124 = ({
      closeModal: _v0,
      groupData: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        _v3 = (0, _v25.useToast)(),
        _v4 = (0, _v3.useCallback)(async () => {
          _v3({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v2.SomethingWentWrong
          });
        }, [_v2.SomethingWentWrong, _v3]),
        {
          analyticsHandlers: {
            sendGroupDeleteEvent: _v5
          }
        } = (0, _v3.useContext)(_v47),
        _v6 = (0, _v3.useCallback)(() => {
          _v3({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v2.GroupDeleted
          }), _v5(_v1, {
            search_result_qty: 1
          }), _v0(_v22.RELOAD);
        }, [_v2.GroupDeleted, _v0, _v3, _v5, _v1]),
        {
          deleteGroup: _v7,
          loading: _v8
        } = (({
          uri: _v0,
          handleError: _v1,
          handleSuccess: _v2
        }) => {
          let _v3 = (0, _v71.useViewer)(),
            _v4 = _v3?.jwt,
            _v5 = _v3?.apiUrl,
            [_v6, _v7] = (0, _v3.useState)(!1),
            _v8 = (0, _v3.useCallback)(async () => {
              if (_v5 && _v4) try {
                _v7(!0), await _v123(_v5, _v0, _v4), _v2();
              } catch (_v0) {
                _v1(_v0);
              } finally {
                _v7(!1);
              }
            }, [_v5, _v1, _v2, _v4, _v0]);
          return (0, _v3.useMemo)(() => ({
            loading: _v6,
            deleteGroup: _v8
          }), [_v8, _v6]);
        })({
          uri: _v1.uri,
          handleError: _v4,
          handleSuccess: _v6
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.DELETE,
          closeModal: _v0,
          groupData: _v1
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingBottom: "200",
          paddingTop: "300",
          children: (0, _v1.jsx)(_v59.Paragraph, {
            variant: "body-md",
            children: _v2.ThisWillPermanentlyDelete
          })
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.DELETE,
          handleCancelClick: _v0,
          handleConfirmClick: _v7,
          isConfirmInProgress: _v8,
          isConfirmDisabled: _v8
        })]
      });
    },
    _v125 = ({
      groupData: _v0,
      query: _v1,
      select: _v2
    }) => {
      let _v3 = _v0?.ownerId || 0,
        [_v4, _v5] = (0, _v70.useInfiniteScroll)(!0),
        _v6 = (0, _v31.getIdFromUri)(_v0?.uri || ""),
        _v7 = _v0?.metadata?.connections?.users?.total || 0,
        {
          data: _v8,
          size: _v9,
          isLoading: _v10,
          isValidating: _v11,
          error: _v12,
          setSize: _v13,
          mutate: _v14
        } = (0, _v108.useGetUserTeamGroupUsersInfinite)({
          where: {
            userId: _v3,
            teamGroupId: _v6
          },
          query: {
            perPage: 15,
            query: _v1
          },
          select: _v2,
          headers: {
            Accept: _v33.ACCEPT_HEADER_API_VERSION
          }
        }, {
          revalidateFirstPage: !1
        });
      return (0, _v3.useEffect)(() => {
        _v10 || _v11 || 15 * _v9 >= _v7 || _v13(_v9 + 1);
      }, [_v4]), (0, _v3.useMemo)(() => ({
        teamGroupUsers: _v8,
        isLoading: _v10,
        isValidating: _v11,
        hasError: !!_v12,
        mutate: _v14,
        lastElementRef: _v5
      }), [_v12, _v10, _v11, _v5, _v14, _v8]);
    },
    _v126 = ({
      listItemsCount: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: [...Array(_v0)].map((_v0, _v1) => {
        let _v2 = (0, _v31.isLastElement)(_v1, _v0);
        return (0, _v1.jsxs)(_v3.default.Fragment, {
          children: [(0, _v1.jsxs)(_v8.Flex, {
            alignItems: "center",
            paddingY: "75",
            children: [(0, _v1.jsx)(_v85.Skeleton, {
              height: "sm",
              width: "sm",
              variant: "circle"
            }), (0, _v1.jsx)(_v6.Box, {
              paddingLeft: "75",
              children: (0, _v1.jsx)(_v85.Skeleton, {
                variant: "text",
                height: (0, _v10.rem)(18),
                width: (0, _v10.rem)(174)
              })
            })]
          }), !_v2 && (0, _v1.jsx)(_v90.Divider, {
            borderColor: "stroke"
          })]
        }, _v1);
      })
    }),
    _v127 = ["uri", "user.name", "user.pictures", "user.uri", "email"],
    _v128 = ({
      groupData: _v0,
      closeModal: _v1,
      updateGroupData: _v2
    }) => {
      let _v3 = (0, _v34.getTranslations)(),
        {
          analyticsHandlers: {
            trackGroupMemberSearchEvent: _v4,
            trackSearch: _v5,
            sendGroupUpdateEvent: _v6
          },
          updateGroupMembersSearchQuery: _v7,
          groupMembersPreviousSearchQuery: _v8,
          groupMembersSearchQuery: _v9,
          mode: _v10
        } = (0, _v3.useContext)(_v47),
        [_v11, _v12] = (0, _v3.useState)(!1),
        [_v13, _v14] = (0, _v3.useState)(!1),
        [_v15, _v16] = (0, _v3.useState)(null),
        _v17 = (0, _v25.useToast)(),
        _v18 = _v0?.ownerId || 0,
        _v19 = (0, _v31.getIdFromUri)(_v0?.uri || ""),
        _v20 = _v0?.metadata?.connections?.users?.total || 0,
        _v21 = 1 === _v9.length ? _v8 : _v9,
        {
          teamGroupUsers: _v22,
          isLoading: _v23,
          isValidating: _v24,
          hasError: _v25,
          mutate: _v26,
          lastElementRef: _v27
        } = _v125({
          select: _v127,
          groupData: _v0,
          query: (0, _v42.useDebouncedValue)(_v21, 500)
        }),
        _v28 = (0, _v3.useCallback)(_v0 => {
          _v2({
            ..._v0,
            metadata: {
              ..._v0?.metadata,
              connections: {
                ..._v0?.metadata?.connections,
                users: {
                  ..._v0?.metadata?.connections?.users,
                  total: _v0
                }
              }
            }
          });
        }, [_v0, _v2]),
        _v29 = (0, _v3.useCallback)((_v0 = !1) => {
          _v17({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v0 ? _v3.InvalidCSVProvided : _v3.SomethingWentWrong
          });
        }, [_v3.InvalidCSVProvided, _v3.SomethingWentWrong, _v17]),
        _v30 = (0, _v3.useCallback)(() => {
          _v17({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v3.MemberRemovedFromGroup
          }), _v14(!0), _v26(), _v28(_v20 - 1), _v16(null), _v6("remove_member", [_v15 || ""], _v0, {
            search_result_qty: _v22?.reduce((_v0, _v1) => _v0 + (_v1.data?.length || 0), 0) || 1
          });
        }, [_v20, _v26, _v17, _v28, _v15, _v6, _v0, _v22, _v3.MemberRemovedFromGroup]),
        _v31 = (0, _v3.useCallback)((_v0, _v1) => {
          _v17({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v3.MembersAddedToGroup(_v0)
          }), _v12(!1), _v14(!0), _v26(), _v28(_v20 + _v0), _v6("add_member", _v1 || Array.from({
            length: _v0
          }, (_v0, _v1) => `member_${_v1 + 1}`), _v0, {
            search_result_qty: _v0
          });
        }, [_v3, _v20, _v26, _v17, _v28, _v6, _v0]),
        _v32 = (0, _v3.useCallback)(() => {
          _v17({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v3.YourCSVIsBeingUploaded
          }), _v1();
        }, [_v17, _v3.YourCSVIsBeingUploaded, _v1]),
        {
          updateGroupMembers: _v33,
          loading: _v34
        } = _v109({
          userId: _v18,
          handleError: () => _v29(),
          handleSuccess: _v30
        }),
        {
          handleAddNewMembers: _v35,
          isLoading: _v36,
          setNewGroupMembers: _v37,
          newGroupMembers: _v38
        } = _v114({
          ownerId: _v18,
          onError: _v29,
          onSuccess: _v31
        }),
        _v39 = (0, _v3.useCallback)(() => {
          _v35(_v0);
        }, [_v0, _v35]),
        {
          handleAddNewMembersByEmail: _v40,
          isLoading: _v41
        } = _v110({
          ownerId: _v18,
          onError: _v29,
          onSuccess: _v32
        }),
        _v42 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.target.files?.[0];
          (_v0.target.value = "", _v1) ? _v121(_v1, {
            onSuccess: _v0 => _v40(_v0, _v0),
            onError: () => _v29(!0)
          }) : _v29(!0);
        }, [_v0, _v40, _v29]),
        _v43 = _v11 && (!_v38.length || _v36),
        _v44 = "custom" === _v0.type && "WORKSPACE" !== _v10,
        _v45 = _v0?.type === "sso" && "WORKSPACE" !== _v10,
        _v46 = _v22?.flatMap(_v0 => _v0.data || []),
        _v47 = _v9 && _v46 && 0 === _v46.length && !_v23 || 0 === _v20,
        _v48 = (0, _v3.useMemo)(() => _v11 ? _v41 ? (0, _v1.jsx)(_v50.Button, {
          variant: "tertiary",
          isLoading: !0,
          children: _v3.UploadCSV
        }) : (0, _v1.jsx)(_v107.FileInput, {
          isDisabled: !!_v38.length,
          variant: "tertiary",
          onChange: _v42,
          accept: ".csv",
          label: _v3.UploadCSV
        }) : null, [_v3.UploadCSV, _v42, _v11, _v41, _v38.length]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.EDIT,
          closeModal: () => _v1(_v13 ? _v22.RELOAD : void 0),
          setAddMembersStateEnabled: _v12,
          groupData: _v0,
          isAddMembersStateEnabled: _v11,
          hasCloseModalButton: !_v11,
          hasBackButton: _v11,
          handleBackButtonClick: () => _v12(!1),
          hasAddMembersButton: !_v11 && _v44,
          hasMembersCount: !!_v20 && !_v11
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingY: "200",
          children: _v11 ? (0, _v1.jsx)(_v118, {
            newMembers: _v38,
            setNewMembers: _v37,
            ownerId: _v18,
            teamGroupUri: _v0.uri
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v45 && (0, _v1.jsx)(_v4.Alert, {
              size: "sm",
              marginBottom: "200",
              children: (0, _v1.jsx)(_v5.AlertDescription, {
                children: _v3.ThisGroupIsManagedThrough(() => {
                  _v1(_v22.OPEN_COPY_GROUP_MODAL);
                })
              })
            }), !!_v20 && (0, _v1.jsx)(_v74, {
              afterSearch: _v4,
              trackSearch: _v5,
              query: _v9,
              updateQuery: _v7,
              searchAction: () => void 0,
              paddingBottom: "200",
              maxW: "unset",
              placeholder: _v3.SearchGroupMembers
            }), (0, _v1.jsxs)(_v6.Box, {
              maxHeight: (0, _v10.rem)(244),
              overflowY: "auto",
              overflowX: "hidden",
              children: [_v25 && (0, _v1.jsx)(_v4.Alert, {
                status: "error",
                children: (0, _v1.jsx)(_v5.AlertDescription, {
                  marginTop: "50",
                  children: _v3.SomethingWentWrong
                })
              }), _v46?.map((_v0, _v1) => {
                let _v2 = (0, _v31.isLastElement)(_v1, _v46?.length || 0),
                  _v3 = _v15 === _v0?.user?.uri;
                return (0, _v1.jsxs)(_v3.default.Fragment, {
                  children: [(0, _v1.jsxs)(_v8.Flex, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingY: "75",
                    paddingRight: "75",
                    ref: !(_v23 || _v24) && _v2 ? _v27 : null,
                    sx: {
                      "& button": {
                        opacity: 0,
                        transition: "opacity 0.5s ease"
                      },
                      "&:hover button": {
                        opacity: 1
                      }
                    },
                    children: [(0, _v1.jsxs)(_v8.Flex, {
                      alignItems: "center",
                      overflow: "hidden",
                      children: [(0, _v1.jsx)(_v36.Avatar, {
                        size: "sm",
                        src: _v0?.user?.pictures?.baseLink,
                        alt: _v0?.user?.name ?? ""
                      }), (0, _v1.jsxs)(_v6.Box, {
                        paddingLeft: "75",
                        "data-id": "groupUserItem",
                        overflow: "hidden",
                        children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                          variant: "heading-xs",
                          children: _v0?.user?.name
                        }), (0, _v1.jsx)(_v29.ShrinkableText, {
                          variant: "body-md",
                          color: "text-secondary",
                          children: _v0?.email
                        })]
                      })]
                    }), _v44 && (0, _v1.jsx)(_v50.Button, {
                      size: "sm",
                      variant: "secondary",
                      onClick: () => (_v0 => {
                        try {
                          _v33(_v19, {
                            remove: [{
                              type: "user",
                              uri: _v0
                            }]
                          }), _v16(_v0);
                        } catch {
                          _v16(null), _v29();
                        }
                      })(_v0?.user?.uri || ""),
                      isLoading: _v3,
                      isDisabled: _v3,
                      children: _v3.Remove
                    })]
                  }), !_v2 && (0, _v1.jsx)(_v90.Divider, {
                    borderColor: "stroke"
                  })]
                }, `key-group-user-${_v0?.user?.uri}`);
              }), _v47 && (0, _v1.jsxs)(_v8.Flex, {
                flexDir: "column",
                alignItems: "center",
                height: (0, _v10.rem)(104),
                justifyContent: "center",
                children: [(0, _v1.jsx)(_v60.Users, {
                  color: "text-secondary",
                  marginBottom: "50",
                  boxSize: "sm"
                }), (0, _v1.jsx)(_v77.Text, {
                  variant: "heading-xs",
                  color: "text-secondary",
                  "data-id": "noResultText",
                  children: _v3.NoGroupMemberFound
                })]
              }), (_v23 || _v24) && (0, _v1.jsx)(_v126, {
                listItemsCount: Math.min(_v20, 7)
              })]
            })]
          })
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.EDIT,
          isFinalStep: _v11,
          handleCancelClick: () => {
            _v12(!1);
          },
          handleConfirmClick: _v39,
          isConfirmDisabled: _v43,
          isConfirmInProgress: _v34,
          rightElement: _v48
        })]
      });
    };
  var _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0);
  async function _v133({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      teamGroupId: _v3
    },
    ..._v4
  }) {
    return (0, _v132.measureLatency)("getUserTeamGroup", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/team_groups/${_v3}?fields=${_v1.map(_v111.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v111.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v111.deepCamelCase)(_v1);
    });
  }
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0);
  function _v138(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v137.useGctlConfig)();
    return (0, _v134.default)(_v2 ? `/users/${_v2.where.userId}/team_groups/${_v2.where.teamGroupId}${(0, _v136.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v133({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v131.default.env.STORYBOOK && (0, _v136.assignMswData)(_v138, {
    endpoint: "/users/:userId/team_groups/:teamGroupId",
    method: "GET"
  }), "true" === _v131.default.env.STORYBOOK && (0, _v136.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v135.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v137.useGctlConfig)(),
      [_v5, _v6] = (0, _v136.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/team_groups/${_v0.where.teamGroupId}${(0, _v136.serializeQuery)(_v0)}`, _v133({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/team_groups/:teamGroupId",
    method: "GET"
  });
  let _v139 = ({
      role: _v0
    }) => {
      let _v1 = (0, _v34.getTranslations)(),
        _v2 = (_v0 => {
          switch (_v0) {
            case _v33.WORKSPACE_GROUP_ROLE.ADMIN:
              return _v1.AdminRole;
            case _v33.WORKSPACE_GROUP_ROLE.CONTRIBUTOR_PLUS:
              return _v1.ContributorPlusRole;
            case _v33.WORKSPACE_GROUP_ROLE.CONTRIBUTOR:
              return _v1.ContributorRole;
            case _v33.WORKSPACE_GROUP_ROLE.VIEWER:
              return _v1.ViewerRole;
            default:
              return "";
          }
        })(_v0);
      return _v2 ? (0, _v1.jsx)(_v77.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: _v1.RoleWithName(_v2)
      }) : null;
    },
    _v140 = ({
      groupData: _v0,
      closeModal: _v1,
      openBulkModal: _v2,
      ownerId: _v3
    }) => {
      let _v4 = (0, _v34.getTranslations)(),
        _v5 = _v0?.metadata?.connections?.users?.total || 0,
        {
          data: _v6,
          isLoading: _v7,
          error: _v8
        } = _v138(() => {
          let _v0 = (0, _v31.getIdFromUri)(_v0?.uri || "");
          return _v0 ? {
            where: {
              userId: _v3,
              teamGroupId: _v0
            },
            select: ["workspaces.icon.sizes.link", "workspaces.displayName", "workspaces.uri"]
          } : null;
        }, {
          revalidateOnFocus: !1
        }),
        {
          workspaceRoleMap: _v9,
          isLoading: _v10
        } = ((_v0, _v1) => {
          let _v2 = (0, _v3.useContext)(_v43.ViewerContext),
            [_v3, _v4] = (0, _v3.useState)(new Map()),
            [_v5, _v6] = (0, _v3.useState)(!0);
          return (0, _v3.useEffect)(() => {
            if (_v0) {
              if (0 === _v0.length || !_v2) {
                _v4(new Map()), _v6(!1);
                return;
              }
              _v6(!0), (async () => {
                let _v0 = new Map();
                try {
                  let _v0 = `${location.protocol}//${_v2.apiUrl}`;
                  (await Promise.all(_v0.map(async _v0 => {
                    try {
                      let _v0 = (0, _v31.getUuidFromUri)(_v0.uri),
                        _v1 = (await (0, _v41.getWorkspaceGroups)({
                          baseUrl: _v0,
                          select: ["teamGroup.uri", "role"],
                          where: {
                            workspaceUuid: _v0
                          },
                          headers: {
                            Authorization: `jwt ${_v2.jwt}`
                          }
                        })).data.find(_v0 => _v0.teamGroup?.uri === _v1);
                      return {
                        workspaceUri: _v0.uri,
                        role: _v1?.role ?? null
                      };
                    } catch (_v0) {
                      return {
                        workspaceUri: _v0.uri,
                        role: null
                      };
                    }
                  }))).forEach(({
                    workspaceUri: _v0,
                    role: _v1
                  }) => {
                    _v1 && _v0.set(_v0, _v1);
                  }), _v4(_v0);
                } catch (_v0) {
                  console.error("Failed to fetch workspace groups", _v0);
                } finally {
                  _v6(!1);
                }
              })();
            }
          }, [_v0, _v2, _v1]), {
            workspaceRoleMap: _v3,
            isLoading: _v5
          };
        })(_v6?.workspaces, _v0.uri),
        _v11 = _v7 || _v10;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.MANAGE_WORKSPACES,
          closeModal: _v1,
          groupData: _v0,
          hasCloseModalButton: !0
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingBottom: "200",
          children: (0, _v1.jsxs)(_v6.Box, {
            children: [(0, _v1.jsxs)(_v8.Flex, {
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: "4",
              children: [(0, _v1.jsxs)(_v8.Flex, {
                alignItems: "center",
                overflow: "hidden",
                children: [(0, _v1.jsx)(_v28.GroupIcon, {
                  width: (0, _v10.rem)(48),
                  height: (0, _v10.rem)(48)
                }), (0, _v1.jsxs)(_v6.Box, {
                  marginLeft: "2",
                  overflow: "hidden",
                  children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                    variant: "heading-xs",
                    children: _v0.name
                  }), (0, _v1.jsx)(_v29.ShrinkableText, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: _v4.MembersCount(_v5 ?? 0)
                  })]
                })]
              }), (0, _v1.jsx)(_v50.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                  _v2(_v21.ASSIGN_WS, _v0), _v1();
                },
                children: _v4.AddToWorkspace
              })]
            }), (0, _v1.jsx)(_v90.Divider, {
              borderColor: "stroke"
            }), _v11 && !_v6 ? (0, _v1.jsx)(_v7.Center, {
              paddingY: (0, _v10.rem)(36),
              children: (0, _v1.jsx)(_v9.Spinner, {
                size: "sm"
              })
            }) : null, !_v11 && _v8 ? (0, _v1.jsx)(_v4.Alert, {
              size: "sm",
              status: "error",
              marginTop: "4",
              children: (0, _v1.jsx)(_v5.AlertDescription, {
                marginTop: "1",
                children: _v4.SomethingWentWrong
              })
            }) : null, !_v11 && _v6?.workspaces && !_v6.workspaces.length ? (0, _v1.jsx)(_v1.Fragment, {
              children: (0, _v1.jsxs)(_v7.Center, {
                paddingBottom: "6",
                paddingTop: (0, _v10.rem)(40),
                flexFlow: "column",
                gap: "1",
                children: [(0, _v1.jsx)(_v130.GridView, {
                  width: "sm",
                  height: "sm"
                }), (0, _v1.jsx)(_v77.Text, {
                  variant: "heading-xs",
                  children: _v4.NoWorkspacesFound
                })]
              })
            }) : null, _v6?.workspaces.length ? (0, _v1.jsx)(_v6.Box, {
              maxHeight: (0, _v10.rem)(244),
              flexFlow: "column",
              overflowY: "auto",
              overflowX: "hidden",
              marginY: "3",
              children: _v6?.workspaces.map((_v0, _v1) => {
                let _v2 = _v0.icon?.sizes?.[0]?.link ?? null,
                  _v3 = _v6?.workspaces.length - 1 === _v1;
                return (0, _v1.jsxs)(_v8.Flex, {
                  overflow: "hidden",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: _v3 ? "0" : "6",
                  _hover: {
                    "& button": {
                      opacity: "1"
                    }
                  },
                  children: [(0, _v1.jsxs)(_v8.Flex, {
                    alignItems: "center",
                    gap: "2",
                    overflow: "hidden",
                    sx: {
                      "& [data-scope=avatar], & svg": {
                        width: (0, _v10.rem)(32),
                        height: (0, _v10.rem)(32),
                        borderRadius: (0, _v10.rem)(8),
                        border: "none"
                      }
                    },
                    children: [(0, _v1.jsx)(_v36.Avatar, {
                      src: _v2,
                      "aria-label": _v0.displayName,
                      alt: _v0.displayName,
                      nameProps: {
                        name: _v0.displayName
                      }
                    }), (0, _v1.jsxs)(_v129.VStack, {
                      alignItems: "start",
                      gap: "0",
                      children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                        variant: "body-md",
                        children: _v0.displayName
                      }), (0, _v1.jsx)(_v139, {
                        role: _v9.get(_v0.uri)
                      })]
                    })]
                  }), (0, _v1.jsx)(_v50.Button, {
                    size: "sm",
                    variant: "secondary",
                    opacity: "0",
                    transition: "opacity 0.3s ease",
                    onClick: () => {
                      _v1(_v22.OPEN_UNASSIGN_WS_MODAL, {
                        ws: _v0,
                        isManageWssFlow: !0
                      });
                    },
                    children: _v4.Remove
                  })]
                }, _v0.uri + _v1);
              })
            }) : null]
          })
        })]
      });
    },
    _v141 = ({
      closeModal: _v0,
      groupData: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        [_v3, _v4] = (0, _v3.useState)(_v1.name),
        [_v5, _v6] = (0, _v3.useState)(""),
        _v7 = (0, _v25.useToast)(),
        _v8 = _v35({
          toast: _v7,
          setErrorMessage: _v6
        }),
        {
          analyticsHandlers: {
            sendGroupUpdateEvent: _v9
          }
        } = (0, _v3.useContext)(_v47),
        {
          patchGroup: _v10,
          loading: _v11
        } = _v113({
          handleError: _v8,
          handleSuccess: (0, _v3.useCallback)(_v0 => {
            _v7({
              duration: _v27.NOTIFICATION_DURATION,
              title: _v2.GroupRenamed
            }), _v9("rename", ["rename"], _v1, {
              search_result_qty: 1,
              action_name: "group name",
              action_value: [_v0.name]
            }), _v0(_v22.RELOAD);
          }, [_v2.GroupRenamed, _v0, _v7, _v9, _v1])
        }),
        _v12 = !!_v5 || !_v3.trim().length || _v3 === _v1.name;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.RENAME,
          closeModal: _v0,
          groupData: _v1
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingY: "200",
          children: (0, _v1.jsxs)(_v96.FormControl, {
            isInvalid: !!_v5,
            children: [(0, _v1.jsx)(_v97.FormLabel, {
              size: "sm",
              children: _v2.GroupName
            }), (0, _v1.jsx)(_v99.Input, {
              value: _v3,
              onChange: _v0 => {
                _v4(_v0.currentTarget.value), _v6("");
              }
            }), (0, _v1.jsx)(_v98.FormErrorMessage, {
              children: _v5
            })]
          })
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.RENAME,
          handleCancelClick: _v0,
          handleConfirmClick: () => {
            _v10(_v1.uri, {
              name: _v3
            });
          },
          isConfirmDisabled: _v12,
          isConfirmInProgress: _v11
        })]
      });
    };
  async function _v142({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2,
      teamGroupId: _v3
    },
    ..._v4
  }) {
    return (0, _v132.measureLatency)("deleteWorkspaceGroup", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/groups/${_v3}?fields=${_v1.map(_v111.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v111.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v111.deepCamelCase)(_v1);
    });
  }
  async function _v143({
    baseUrl: _v0,
    variables: _v1,
    where: {
      workspaceUuid: _v2,
      teamGroupId: _v3
    },
    ..._v4
  }) {
    return (0, _v132.measureLatency)("patchWorkspaceGroup", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/groups/${_v3}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v111.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v111.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v111.deepCamelCase)(_v1);
    });
  }
  function _v144() {
    let {
        mutate: _v0
      } = (0, _v135.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v137.useGctlConfig)(),
      [_v5, _v6] = (0, _v136.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/groups/${_v0.where.teamGroupId}${(0, _v136.serializeQuery)(_v0)}`, _v142({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v145() {
    let {
        mutate: _v0
      } = (0, _v135.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v137.useGctlConfig)(),
      [_v5, _v6] = (0, _v136.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/groups/${_v0.where.teamGroupId}${(0, _v136.serializeQuery)(_v0)}`, _v143({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v131.default.env.STORYBOOK && (0, _v136.assignMswData)(_v144, {
    endpoint: "/workspaces/:workspaceUuid/groups/:teamGroupId",
    method: "DELETE"
  }), "true" === _v131.default.env.STORYBOOK && (0, _v136.assignMswData)(_v145, {
    endpoint: "/workspaces/:workspaceUuid/groups/:teamGroupId",
    method: "PATCH"
  });
  let _v146 = ({
      handleError: _v0,
      handleSuccess: _v1
    }) => {
      let [_v2, {
          error: _v3,
          loading: _v4
        }] = _v145(),
        _v5 = (0, _v3.useRef)(!1),
        _v6 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
          _v2({
            where: {
              workspaceUuid: _v1,
              teamGroupId: _v0
            },
            variables: _v2
          }), _v5.current = !0;
        }, [_v2]);
      return (0, _v3.useEffect)(() => {
        _v5.current && !_v4 && (_v5.current = !1, _v3 ? _v0(_v3) : _v1());
      }, [_v3, _v0, _v1, _v4]), (0, _v3.useMemo)(() => ({
        loading: _v4,
        patchWsGroup: _v6
      }), [_v6, _v4]);
    },
    _v147 = ({
      closeModal: _v0,
      groupData: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        _v3 = (0, _v25.useToast)(),
        {
          mode: _v4,
          wsUuid: _v5
        } = (0, _v3.useContext)(_v47),
        _v6 = _v35({
          toast: _v3
        }),
        {
          analyticsHandlers: {
            sendGroupUpdateEvent: _v7
          }
        } = (0, _v3.useContext)(_v47),
        _v8 = (0, _v3.useCallback)(() => {
          _v3({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v2.DefaultRoleRemovedForGroupName(_v1.name)
          }), _v7("change_default_role", ["none"], _v1, {
            search_result_qty: 1
          }), _v0(_v22.RELOAD);
        }, [_v2, _v0, _v1, _v3, _v7]),
        {
          patchGroup: _v9,
          loading: _v10
        } = _v113({
          handleError: _v6,
          handleSuccess: _v8
        }),
        {
          patchWsGroup: _v11,
          loading: _v12
        } = _v146({
          handleError: _v6,
          handleSuccess: _v8
        }),
        _v13 = _v10 || _v12;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.ROLE_REMOVE,
          closeModal: _v0,
          groupData: _v1
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingBottom: "200",
          paddingTop: "75",
          children: (0, _v1.jsx)(_v59.Paragraph, {
            variant: "body-md",
            marginBottom: "75",
            children: _v2.NewMembersWillNoLonger
          })
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.ROLE_REMOVE,
          handleCancelClick: _v0,
          handleConfirmClick: () => {
            "WORKSPACE" === _v4 && _v5 ? _v11((0, _v31.getIdFromUri)(_v1.uri), _v5, {
              role: null
            }) : _v9(_v1.uri, {
              role: null
            });
          },
          isConfirmInProgress: _v13,
          isConfirmDisabled: _v13
        })]
      });
    };
  var _v148 = _v0.i(0);
  let _v149 = ["uri", "user.name", "user.pictures", "user.uri", "email", "role"],
    _v150 = ({
      groupData: _v0,
      nextRole: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        {
          analyticsHandlers: {
            trackSearch: _v3,
            trackGroupMemberSearchEvent: _v4
          },
          groupMembersSearchQuery: _v5,
          groupMembersPreviousSearchQuery: _v6,
          updateGroupMembersSearchQuery: _v7
        } = (0, _v3.useContext)(_v47),
        _v8 = _v0?.metadata?.connections?.users?.total || 0,
        _v9 = 1 === _v5.length ? _v6 : _v5,
        {
          teamGroupUsers: _v10,
          isLoading: _v11,
          isValidating: _v12,
          hasError: _v13,
          lastElementRef: _v14
        } = _v125({
          select: _v149,
          groupData: _v0,
          query: (0, _v42.useDebouncedValue)(_v9, 500)
        }),
        _v15 = _v10?.flatMap(_v0 => _v0.data);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v59.Paragraph, {
          variant: "body-md",
          marginBottom: "200",
          color: "text-secondary",
          children: _v2.CheckHowThisSettingWillAffect
        }), !!_v8 && (0, _v1.jsx)(_v74, {
          afterSearch: _v4,
          trackSearch: _v3,
          query: _v5,
          updateQuery: _v7,
          searchAction: () => void 0,
          paddingBottom: "200",
          maxW: "unset",
          placeholder: _v2.SearchGroupMembers
        }), (0, _v1.jsxs)(_v6.Box, {
          maxHeight: (0, _v10.rem)(244),
          overflowY: "auto",
          overflowX: "hidden",
          children: [_v13 && (0, _v1.jsx)(_v4.Alert, {
            status: "error",
            children: (0, _v1.jsx)(_v5.AlertDescription, {
              marginTop: "50",
              children: _v2.SomethingWentWrong
            })
          }), _v15?.map(({
            user: _v0,
            email: _v1,
            role: _v2
          }, _v3) => {
            let _v4 = _v2?.replace(/\s/g, "_").toLowerCase() || "",
              _v5 = _v33.TEAM_ROLE_WEIGHT[_v4],
              _v6 = (0, _v31.isLastElement)(_v3, _v15.length),
              _v7 = _v1 && _v33.TEAM_ROLE_WEIGHT[_v1.value] >= _v5;
            return _v0 && _v5 ? (0, _v1.jsxs)(_v3.default.Fragment, {
              children: [(0, _v1.jsxs)(_v8.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                paddingY: "75",
                paddingRight: "75",
                ref: !(_v11 || _v12) && _v6 ? _v14 : null,
                children: [(0, _v1.jsxs)(_v8.Flex, {
                  alignItems: "center",
                  overflow: "hidden",
                  children: [(0, _v1.jsx)(_v36.Avatar, {
                    size: "sm",
                    src: _v0.pictures?.baseLink,
                    alt: _v0.name,
                    nameProps: {
                      name: _v0.name
                    }
                  }), (0, _v1.jsxs)(_v6.Box, {
                    paddingLeft: "75",
                    "data-id": "groupUserItem",
                    overflow: "hidden",
                    children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                      variant: "heading-xs",
                      children: _v0.name
                    }), (0, _v1.jsx)(_v29.ShrinkableText, {
                      variant: "body-md",
                      color: "text-secondary",
                      children: _v1
                    })]
                  })]
                }), (0, _v1.jsxs)(_v8.Flex, {
                  gap: "2",
                  alignItems: "center",
                  color: _v7 ? "text-primary" : "text-secondary",
                  children: [(0, _v1.jsx)(_v29.ShrinkableText, {
                    variant: "heading-xs",
                    children: _v7 ? _v1.displayName : _v2
                  }), !_v7 && (0, _v1.jsx)(_v102.Tooltip, {
                    label: _v2.MemberHasAHigherRole,
                    shouldWrapChildren: !0,
                    maxW: (0, _v10.rem)(260),
                    children: (0, _v1.jsx)(_v148.InfoCircle, {
                      width: "2xs",
                      height: "2xs"
                    })
                  })]
                })]
              }), !_v6 && (0, _v1.jsx)(_v90.Divider, {
                borderColor: "stroke"
              })]
            }, `key-group-user-${_v0.uri}`) : null;
          }), (_v11 || _v12) && (0, _v1.jsx)(_v126, {
            listItemsCount: Math.min(_v8, 7)
          })]
        })]
      });
    },
    _v151 = ({
      closeModal: _v0,
      groupData: _v1
    }) => {
      let _v2 = (0, _v34.getTranslations)(),
        [_v3, _v4] = (0, _v3.useState)(!1),
        [_v5, _v6] = (0, _v3.useState)(_v1.role),
        [_v7] = (0, _v26.useToken)("space", ["6"]),
        _v8 = (0, _v25.useToast)(),
        _v9 = _v1?.ownerId || 0,
        _v10 = (0, _v31.getIdFromUri)(_v1?.uri || ""),
        _v11 = _v35({
          toast: _v8
        }),
        {
          analyticsHandlers: {
            sendGroupUpdateEvent: _v12
          },
          rolesInfo: _v13,
          wsUuid: _v14,
          mode: _v15
        } = (0, _v3.useContext)(_v47),
        _v16 = (0, _v3.useCallback)(() => {
          _v8({
            duration: _v27.NOTIFICATION_DURATION,
            title: _v2.DefaultRoleSetForGroupName(_v1.name)
          }), _v12("change_default_role", [_v5 || "none"], _v1, {
            search_result_qty: 1
          }), _v0(_v22.RELOAD);
        }, [_v2, _v0, _v1, _v8, _v12, _v5]),
        {
          patchGroup: _v17,
          loading: _v18
        } = _v113({
          handleError: _v11,
          handleSuccess: _v16
        }),
        {
          patchWsGroup: _v19,
          loading: _v20
        } = _v146({
          handleError: _v11,
          handleSuccess: _v16
        }),
        _v21 = _v18 || _v20,
        _v22 = (0, _v3.useMemo)(() => _v13?.map(_v0 => ({
          ..._v0,
          label: _v0.displayName ?? "",
          value: _v0.permissionLevel?.replace(/\s/g, "_").toLowerCase() ?? ""
        })) ?? [], [_v13]),
        _v23 = (0, _v3.useMemo)(() => _v5 ? _v22.find(_v0 => _v0.value === _v5) : null, [_v5, _v22]),
        _v24 = (0, _v3.useMemo)(() => ({
          '& [data-scope="select"][data-part="positioner"]': {
            minWidth: "auto!important",
            maxWidth: `calc(100% - (${_v7} * 2))`
          },
          '& [data-scope="select"][data-part="content"]': {
            width: "auto"
          }
        }), [_v7]);
      (0, _v3.useEffect)(() => {
        _v22.length || _v11();
      });
      let _v25 = (0, _v3.useMemo)(() => _v5 && _v5 !== _v1.role ? _v22.filter(_v0 => _v33.TEAM_ROLE_WEIGHT[_v0.value] > _v33.TEAM_ROLE_WEIGHT[_v5]).map(_v0 => _v0.value) : null, [_v1.role, _v5, _v22]),
        {
          data: _v26,
          isLoading: _v27
        } = (0, _v108.useGetUserTeamGroupUsers)(() => _v5 && _v5 !== _v1.role && _v25?.length ? {
          where: {
            userId: _v9,
            teamGroupId: _v10
          },
          query: {
            rolesFilter: _v25
          },
          select: ["uri"]
        } : null),
        _v28 = (0, _v3.useCallback)(() => {
          _v3 ? "WORKSPACE" === _v15 && _v14 ? _v19((0, _v31.getIdFromUri)(_v1.uri), _v14, {
            role: _v5
          }) : _v17(_v1.uri, {
            role: _v5
          }) : _v4(!0);
        }, [_v15, _v14, _v3, _v17, _v1.uri, _v5, _v19]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.ROLE_SET,
          closeModal: _v0,
          groupData: _v1,
          hasBackButton: _v3,
          handleBackButtonClick: () => _v4(!1)
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingBottom: "200",
          paddingTop: "75",
          children: _v3 ? (0, _v1.jsx)(_v150, {
            groupData: _v1,
            nextRole: _v23
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v59.Paragraph, {
              variant: "body-md",
              marginBottom: "300",
              color: "text-secondary",
              children: _v2.ThisRoleWillBeAutomaticallyAssigned()
            }), (0, _v1.jsx)(_v8.Flex, {
              sx: _v24,
              children: (0, _v1.jsx)(_v37.Select, {
                items: _v22,
                value: [_v5 ?? ""],
                onValueChange: _v0 => {
                  _v6(_v0.value[0]);
                },
                placeholder: _v2.SelectRole,
                children: _v0 => (0, _v1.jsx)(_v37.SelectItem, {
                  children: (0, _v1.jsxs)(_v129.VStack, {
                    alignItems: "flex-start",
                    gap: "0",
                    children: [(0, _v1.jsx)(_v77.Text, {
                      variant: "heading-xs",
                      children: _v0.displayName
                    }), (0, _v1.jsx)(_v59.Paragraph, {
                      variant: "body-md",
                      color: "text-secondary",
                      children: _v0.displayDescription
                    })]
                  })
                }, _v0.permissionLevel)
              })
            }), _v25?.length && !_v27 && _v26?.total ? (0, _v1.jsx)(_v4.Alert, {
              marginTop: "200",
              size: "sm",
              children: (0, _v1.jsx)(_v5.AlertDescription, {
                marginTop: "50",
                children: _v2.XMembersAreAssigned(_v26?.total)
              })
            }) : null]
          })
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.ROLE_SET,
          handleCancelClick: _v0,
          handleConfirmClick: _v28,
          isConfirmInProgress: _v21,
          isConfirmDisabled: _v21 || _v1.role === _v5,
          isConfirmRoleStep: _v3
        })]
      });
    },
    _v152 = ({
      groupData: _v0,
      closeModal: _v1,
      ws: _v2,
      isManageWssFlow: _v3 = !1
    }) => {
      let _v4 = (0, _v34.getTranslations)(),
        _v5 = (0, _v25.useToast)(),
        _v6 = () => {
          _v1(_v3 ? _v22.OPEN_MANAGE_WS_MODAL : _v22.RELOAD);
        },
        {
          unassignWorkspaceGroup: _v7,
          loading: _v8
        } = (({
          handleError: _v0,
          handleSuccess: _v1
        }) => {
          let [_v2, {
              loading: _v3,
              error: _v4
            }] = _v144(),
            _v5 = (0, _v3.useRef)(!1),
            _v6 = (0, _v3.useCallback)((_v0, _v1) => {
              _v2({
                where: {
                  workspaceUuid: _v0,
                  teamGroupId: _v1
                },
                select: []
              }), _v5.current = !0;
            }, [_v2]);
          return (0, _v3.useEffect)(() => {
            _v5.current && !_v3 && (_v5.current = !1, _v4 ? _v0(_v4) : _v1());
          }, [_v4, _v0, _v1, _v3]), (0, _v3.useMemo)(() => ({
            loading: _v3,
            unassignWorkspaceGroup: _v6
          }), [_v6, _v3]);
        })({
          handleError: _v35({
            toast: _v5
          }),
          handleSuccess: _v6
        }),
        _v9 = (0, _v3.useCallback)(() => {
          _v7((0, _v31.getUuidFromUri)(_v2.uri || ""), (0, _v31.getIdFromUri)(_v0?.uri || ""));
        }, [_v0?.uri, _v7, _v2?.uri]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v105, {
          mode: _v20.MANAGE_WORKSPACES,
          closeModal: _v1,
          groupData: _v0,
          isUnassignWsStepEnabled: !0,
          wsBeingUnassigned: _v2
        }), (0, _v1.jsx)(_v24.ModalBody, {
          paddingBottom: "200",
          children: (0, _v1.jsx)(_v59.Paragraph, {
            variant: "body-md",
            children: _v4.AllMembersOfGroupWillLoseAccess(_v0.name, _v2?.displayName)
          })
        }), (0, _v1.jsx)(_v101, {
          mode: _v20.MANAGE_WORKSPACES,
          handleCancelClick: _v6,
          handleConfirmClick: _v9,
          isConfirmInProgress: _v8,
          isConfirmDisabled: _v8
        })]
      });
    },
    _v153 = ({
      closeModal: _v0,
      openBulkModal: _v1,
      updateGroupData: _v2,
      groupData: _v3,
      mode: _v4,
      ownerId: _v5,
      ws: _v6,
      isManageWssFlow: _v7
    }) => {
      let _v8 = (0, _v3.useMemo)(() => {
        if (_v4 === _v20.CREATE) return (0, _v1.jsx)(_v122, {
          closeModal: _v0,
          ownerId: _v5
        });
        if (!_v3) return null;
        if (_v4 === _v20.UNASSIGN_WORKSPACE) return _v6 ? (0, _v1.jsx)(_v152, {
          groupData: _v3,
          closeModal: _v0,
          ws: _v6,
          isManageWssFlow: _v7
        }) : null;
        let _v0 = {
          groupData: _v3,
          ownerId: _v5,
          closeModal: _v0
        };
        switch (_v4) {
          case _v20.RENAME:
            return (0, _v1.jsx)(_v141, {
              ..._v0
            });
          case _v20.COPY:
            return (0, _v1.jsx)(_v106, {
              ..._v0
            });
          case _v20.DELETE:
            return (0, _v1.jsx)(_v124, {
              ..._v0
            });
          case _v20.EDIT:
            return (0, _v1.jsx)(_v128, {
              ..._v0,
              updateGroupData: _v2
            });
          case _v20.ROLE_SET:
            return (0, _v1.jsx)(_v151, {
              ..._v0
            });
          case _v20.ROLE_REMOVE:
            return (0, _v1.jsx)(_v147, {
              ..._v0
            });
          case _v20.MANAGE_WORKSPACES:
            return (0, _v1.jsx)(_v140, {
              ..._v0,
              openBulkModal: _v1
            });
          default:
            return (0, _v1.jsx)(_v128, {
              ..._v0,
              updateGroupData: _v2
            });
        }
      }, [_v4, _v3, _v5, _v0, _v6, _v7, _v2, _v1]);
      return (0, _v1.jsxs)(_v17.Modal, {
        onClose: _v0,
        size: "md",
        isOpen: !0,
        isCentered: !1,
        children: [(0, _v1.jsx)(_v18.ModalOverlay, {}), (0, _v1.jsx)(_v19.ModalContent, {
          marginTop: (0, _v10.rem)(50),
          minW: (0, _v10.rem)(480),
          children: _v8
        })]
      });
    },
    _v154 = "bulk-actions-bar",
    _v155 = {
      mode: null,
      groupData: null,
      ws: null,
      isManageWssFlow: !1
    },
    _v156 = () => {
      let _v0 = (0, _v34.getTranslations)(),
        {
          analyticsHandlers: {
            trackTeamGroupsRowClick: _v1,
            trackGroupOpenBP2Event: _v2
          },
          hasError: _v3,
          teamGroupsInfo: _v4,
          isLoading: _v5,
          searchQuery: _v6,
          ownerId: _v7,
          hasFetched: _v8,
          teamGroups: _v9,
          fetchTeamGroups: _v10,
          updateGroupMembersSearchQuery: _v11,
          ws: _v12
        } = (0, _v3.useContext)(_v47),
        [_v13, _v14] = (0, _v3.useState)(!1),
        [_v15, _v16] = (0, _v3.useState)(_v155),
        [_v17, _v18] = (0, _v3.useState)(!1),
        [_v19, _v20] = (0, _v3.useState)([]),
        [_v21, _v22] = (0, _v3.useState)(!1),
        [_v23, _v24] = (0, _v3.useState)(null),
        [_v25, _v26] = (0, _v3.useState)([]),
        {
          capabilities: _v27,
          ready: _v28
        } = (0, _v13.useCapability)(["canShowSsoGroups", "canViewSsoTeamSettings"], _v7),
        _v29 = (0, _v3.useCallback)((_v0, _v1) => {
          let _v2 = {
            groupData: _v1 ? (0, _v2.default)(_v1) : null,
            mode: _v0,
            ws: null,
            isManageWssFlow: !1
          };
          "UNASSIGN_WORKSPACE" === _v0 && (_v2.ws = _v12 ?? null), _v16(_v2), _v14(!0), "EDIT" === _v0 && (_v1(), _v2());
        }, [_v2, _v1, _v12]),
        _v30 = (0, _v3.useCallback)((_v0, _v1) => {
          _v20(_v0 => _v1 ? _v0.concat([_v0]) : _v0.filter(_v0 => _v0 !== _v0));
        }, []),
        _v31 = (0, _v3.useCallback)(_v0 => {
          _v20(_v0 ? _v9.map(_v0 => _v0.uri) : []);
        }, [_v9]),
        _v32 = (0, _v3.useCallback)((_v0, _v1) => {
          _v24(_v0), _v22(!0), _v26(_v9.filter(_v0 => _v1.includes(_v0.uri)));
        }, [_v9]),
        _v33 = (0, _v3.useCallback)(() => {
          _v22(!1), _v24(null), _v26([]), _v31(!1);
        }, [_v31]),
        _v34 = !_v5 && 0 === _v4.total && _v8 && !_v6;
      return _v28 ? _v28 && !_v27.canShowSsoGroups ? (0, _v1.jsx)(_v16.ErrorPage, {
        error: new _v14.ForbiddenError(_v0.PermissionDenied)
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v15.SettingsPageContentHeader, {
          title: _v0.Groups
        }), _v3 && (0, _v1.jsx)(_v4.Alert, {
          status: "error",
          marginBottom: "300",
          children: (0, _v1.jsx)(_v5.AlertDescription, {
            marginTop: "50",
            children: _v0.SomethingWentWrong
          })
        }), (0, _v1.jsx)(_v6.Box, {
          backgroundColor: "fill-surface",
          borderRadius: "lg",
          padding: "200",
          marginBottom: "400",
          children: _v34 && !_v3 ? (0, _v1.jsx)(_v61, {
            marginTop: (0, _v10.rem)(80),
            marginBottom: (0, _v10.rem)(64),
            canViewSsoTeamSettings: _v27.canViewSsoTeamSettings,
            showButtons: !0,
            title: _v0.NoGroups,
            description: _v0.AddGroupsTo,
            handleAddNewGroup: () => _v29("CREATE"),
            handleInviteNewGroup: () => _v18(!0)
          }) : (0, _v1.jsx)(_v87, {
            openManageGroupModal: _v29,
            openInviteGroupsToWsModal: () => _v18(!0),
            handleGroupSelect: _v30,
            selectedGroupUris: _v19,
            handleAll: _v31
          })
        }), _v17 && (0, _v1.jsx)(_v95, {
          onClose: () => {
            _v18(!1), _v10();
          }
        }), _v13 && _v15.mode && _v7 && (0, _v1.jsx)(_v153, {
          ..._v15,
          mode: _v15.mode,
          closeModal: (_v0, _v1) => {
            _v0 === _v22.OPEN_MANAGE_WS_MODAL ? _v16({
              ..._v15,
              mode: _v20.MANAGE_WORKSPACES
            }) : _v0 === _v22.OPEN_COPY_GROUP_MODAL ? _v16({
              ..._v15,
              mode: _v20.COPY
            }) : _v0 === _v22.OPEN_UNASSIGN_WS_MODAL ? _v16({
              ..._v15,
              mode: _v20.UNASSIGN_WORKSPACE,
              ws: _v1?.ws || null,
              isManageWssFlow: _v1?.isManageWssFlow ?? !1
            }) : (_v0 === _v22.RELOAD && _v10(), _v16(_v155), _v14(!1), _v11(""));
          },
          updateGroupData: _v0 => {
            _v16({
              ..._v15,
              groupData: _v0
            });
          },
          openBulkModal: (_v0, _v1) => {
            _v32(_v0, [_v1.uri]);
          },
          ownerId: _v7
        }), (0, _v1.jsx)(_v8.Flex, {
          id: _v154,
          justifyContent: "center",
          width: "100%"
        }), (0, _v1.jsx)(_v12.BulkActionsBar, {
          handleDeselectAllItems: () => _v31(!1),
          numItemsSelected: _v19.length,
          selectedItemsText: _v0.XGroupsSelected(_v19.length),
          targetElementId: _v154,
          children: (0, _v1.jsx)(_v12.BulkActionsBar.ActionButton, {
            label: _v0.AddToWorkspace,
            icon: (0, _v1.jsx)(_v11.PlusSmall, {}),
            onClick: () => _v32(_v21.ASSIGN_WS, _v19)
          })
        }), _v21 && _v23 && (0, _v1.jsx)(_v56, {
          mode: _v23,
          closeModal: _v33,
          groups: _v25
        })]
      }) : (0, _v1.jsx)(_v7.Center, {
        minH: (0, _v10.rem)(300),
        children: (0, _v1.jsx)(_v9.Spinner, {})
      });
    };
  _v0.s(["TeamGroups", 0, _v0 => (0, _v1.jsx)(_v48, {
    ..._v0,
    children: (0, _v1.jsx)(_v156, {})
  })], 0);
}