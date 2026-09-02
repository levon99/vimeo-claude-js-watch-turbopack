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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = ({
      untranslatedUserRole: _v0
    }) => _v0 === _v35.TeamRole.Owner || _v0 === _v35.TeamRole.Admin,
    _v37 = {
      FetchMembershipInfo: (_v0, _v1) => ({
        ..._v0,
        membership: {
          ..._v0.membership,
          ..._v1.payload?.membershipInfo
        },
        isMembershipInfoLoading: !1,
        hasMembershipInfoLoadFailed: !1
      }),
      FetchPaymentMethods: (_v0, _v1) => ({
        ..._v0,
        paymentMethods: [..._v0.paymentMethods, ...(_v1.payload?.paymentMethods || [])]
      }),
      UpdatePaymentMethods: (_v0, _v1) => ({
        ..._v0,
        paymentMethods: [...(_v1.payload?.paymentMethods || [])],
        isFetchPaymentMethodsLoading: !1
      }),
      UpdatePaymentMethod: (_v0, _v1) => {
        let _v2 = _v0.paymentMethods.map(_v0 => _v0.uri.includes(String(_v1.payload?.id || "")) ? {
          ..._v0,
          inUse: !0
        } : {
          ..._v0,
          inUse: !1
        });
        return {
          ..._v0,
          paymentMethods: _v2,
          isBillingSettingChangeOngoing: !1
        };
      },
      ShowNotice: (_v0, _v1) => ({
        ..._v0,
        notice: _v1.payload?.notice
      }),
      ShowBillingPageLinkoutNotice: (_v0, _v1) => ({
        ..._v0,
        billingPageLinkoutNotice: _v1.payload?.notice
      }),
      FetchTeamInfoInit: (_v0, _v1) => ({
        ..._v0,
        isTeamInfoLoading: _v1.payload?.shouldShowLoading
      }),
      FetchTeamInfoComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload.viewer || !_v1.payload?.teamsInfo) throw Error("no payload");
        let _v2 = _v1.payload.viewer.teamUser?.ownerId,
          _v3 = _v1.payload.teamsInfo.data.filter(_v36),
          _v4 = _v3.find(({
            untranslatedUserRole: _v0
          }) => _v0 === _v35.TeamRole.Owner),
          _v5 = _v3.filter(({
            untranslatedUserRole: _v0
          }) => _v0 === _v35.TeamRole.Admin);
        if (_v2) {
          let _v0 = _v3.find(({
            owner: _v0
          }) => _v0.uri === `/users/${_v2}`);
          return _v0 ? {
            ..._v0,
            teamInfo: {
              ..._v0.teamInfo,
              ..._v0
            },
            isTeamInfoLoading: !1
          } : {
            ..._v0,
            teamInfo: {
              ..._v0.teamInfo,
              isSufficientRole: !1
            },
            isTeamInfoLoading: !1
          };
        }
        return _v4 ? {
          ..._v0,
          teamInfo: {
            ..._v0.teamInfo,
            ..._v4
          },
          isTeamInfoLoading: !1
        } : _v5.length > 0 ? {
          ..._v0,
          teamInfo: {
            ..._v0.teamInfo,
            ..._v5.shift()
          },
          isTeamInfoLoading: !1
        } : {
          ..._v0,
          teamInfo: {
            ..._v0.teamInfo,
            isSufficientRole: !1
          },
          isTeamInfoLoading: !1
        };
      },
      FetchTeamMembersInit: (_v0, _v1) => ({
        ..._v0,
        isTeamMembersLoading: !0,
        hasFetchedTeamMembers: !1,
        teamMembersApiCallCount: _v0.teamMembersApiCallCount + 1
      }),
      FetchTeamMembersComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.teamMembers) throw Error("no payload");
        let {
            data: _v2,
            total: _v3
          } = _v1.payload.teamMembers,
          _v4 = _v2.map(_v0 => ({
            ..._v0,
            isLoading: !1
          })),
          _v5 = _v39(_v3),
          _v6 = [];
        if (1 === _v0.currentPage || _v5) _v6 = _v4;else {
          let _v0 = new Set();
          [..._v0.teamMembers, ..._v4].forEach(_v0 => {
            _v0.has(_v0.uri) || (_v0.add(_v0.uri), _v6.push(_v0));
          });
        }
        let _v7 = _v6.length > 0 && _v6[0].metadata?.connections?.owner?.email || "";
        return {
          ..._v0,
          teamMembers: _v6,
          totalTeamMembers: _v3,
          isTeamMembersLoading: !1,
          hasFetchedTeamMembers: !0,
          teamMembersApiCallCount: _v0.teamMembersApiCallCount - 1,
          enablePagination: _v5,
          teamInfo: {
            ..._v0.teamInfo,
            currentTeamSize: _v3,
            owner: {
              ..._v0.teamInfo.owner,
              email: _v7 || _v0.teamInfo.owner.email || ""
            }
          }
        };
      },
      FetchTeamMemberInit: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        let _v2 = _v0.teamMembers.map(_v0 => _v0.uri === _v1.payload?.teamMemberUri ? {
          ..._v0,
          isLoading: !0
        } : _v0);
        return {
          ..._v0,
          teamMembers: _v2,
          hasError: !1
        };
      },
      FetchTeamMemberComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.teamMember) throw Error("no payload");
        let _v2 = _v1.payload.teamMember,
          _v3 = _v0.teamMembers.map(_v0 => _v0.uri === _v2.uri ? {
            ..._v2,
            isLoading: !1
          } : _v0);
        return {
          ..._v0,
          teamMembers: _v3
        };
      },
      UpdateTeamBrandings: (_v0, _v1) => _v1.payload?.teamData ? {
        ..._v0,
        teamInfo: {
          ..._v0.teamInfo,
          teamData: _v1.payload.teamData
        }
      } : _v0,
      UpdateSearchQuery: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        let _v2 = _v1.payload?.searchQuery.length === 0 && _v0.searchQuery.length > 0;
        return {
          ..._v0,
          teamGroups: _v2 ? [] : _v0.teamGroups,
          teamGroupsInfo: _v2 ? {
            total: null,
            page: 0
          } : _v0.teamGroupsInfo,
          previousSearchQuery: _v0.searchQuery,
          searchQuery: _v1.payload?.searchQuery || "",
          isTeamInfoLoading: !_v2 && _v0.isTeamInfoLoading,
          hasFetchedTeamMembers: !_v2 && _v0.hasFetchedTeamMembers,
          hasFetchedTeamGroups: !_v2 && _v0.hasFetchedTeamGroups,
          currentPage: 1
        };
      },
      UpdateGroupMembersSearchQuery: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return {
          ..._v0,
          groupMembersPreviousSearchQuery: _v0.groupMembersSearchQuery,
          groupMembersSearchQuery: _v1.payload.searchQuery
        };
      },
      UpdateSort: (_v0, _v1) => ({
        ..._v0,
        sort: {
          ..._v0.sort,
          type: _v1.payload?.sort || "default"
        },
        hasFetchedTeamMembers: !1,
        teamMembers: [],
        currentPage: 1
      }),
      UpdateDirection: (_v0, _v1) => ({
        ..._v0,
        sort: {
          ..._v0.sort,
          direction: _v1.payload?.direction || "asc"
        },
        hasFetchedTeamMembers: !1,
        teamMembers: [],
        currentPage: 1
      }),
      UpdateCurrentPage: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return {
          ..._v0,
          currentPage: _v1.payload?.currentPage || 1,
          hasFetchedTeamMembers: !1
        };
      },
      UpdateTeamMemberInit: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        let _v2 = _v0.teamMembers.map(_v0 => _v0.uri === _v1.payload?.updatedMemberUri ? {
          ..._v0,
          isLoading: !0
        } : _v0);
        return {
          ..._v0,
          teamMembers: _v2,
          hasError: !1
        };
      },
      UpdateTeamMemberComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload.updatedMember) throw Error("no payload");
        let _v2 = _v0.teamMembers.map(_v0 => _v0.uri === _v1.payload?.updatedMember.uri ? {
          ..._v1.payload.updatedMember,
          isLoading: !1
        } : _v0);
        return {
          ..._v0,
          teamMembers: _v2
        };
      },
      UpdateTeamMemberCancel: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        let _v2 = _v0.teamMembers.map(_v0 => (_v0.uri === _v1.payload?.teamMemberUri && (_v0.isLoading = !1), _v0));
        return {
          ..._v0,
          teamMembers: _v2,
          hasError: !0
        };
      },
      DeleteTeamMemberComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload.teamMemberUri) throw Error("no payload!");
        return {
          ..._v0,
          teamMembers: _v0.teamMembers.filter(_v0 => _v0.uri !== _v1.payload?.teamMemberUri),
          totalTeamMembers: _v0.totalTeamMembers - 1,
          teamInfo: {
            ..._v0.teamInfo,
            currentTeamSize: _v0.totalTeamMembers - 1
          }
        };
      },
      UpdateHasError: (_v0, _v1) => ({
        ..._v0,
        hasError: _v1.payload?.hasError || !1
      }),
      UpdateHasMembershipInfoLoadFailed: (_v0, _v1) => ({
        ..._v0,
        hasMembershipInfoLoadFailed: _v1.payload?.hasMembershipInfoLoadFailed || !1
      }),
      UpdateGroupUsersError: (_v0, _v1) => ({
        ..._v0,
        groupUsersError: _v1.payload?.hasError || !1
      }),
      NotificationForOwnerAdmin: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload!");
        let _v2 = _v1.payload;
        return {
          ..._v0,
          notification: _v2
        };
      },
      FetchTeamShowcaseInit: (_v0, _v1) => {},
      FetchTeamShowcaseComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.albums) throw Error("no payload");
        let {
          data: _v2,
          total: _v3
        } = _v1.payload.albums;
        return {
          ..._v0,
          albums: {
            total: _v3,
            currentPage: _v1.payload.currentPage,
            items: [..._v0.albums.items, ..._v2]
          }
        };
      },
      FetchTeamGroupsComplete: (_v0, _v1) => {
        let _v2,
          _v3 = _v0.teamGroupsSearching && _v1.payload?.searchQuery !== _v0.searchQuery,
          _v4 = _v0.teamGroupsInfo.page === _v1.payload?.groupsInfo.page;
        return (_v2 = _v3 || _v4 ? _v1.payload?.groups ?? [] : _v0.teamGroups.concat(_v1.payload?.groups ?? []), _v3 || _v0.teamGroupSort?.type === _v1.payload?.sort?.type && _v0.teamGroupSort?.direction === _v1.payload?.sort?.direction) ? {
          ..._v0,
          hasFetchedTeamGroups: !0,
          teamGroups: _v2,
          teamGroupsInfo: _v1.payload?.groupsInfo,
          teamGroupSort: _v1.payload?.sort || _v0.sort
        } : {
          ..._v0
        };
      },
      UpdateTeamGroupSort: (_v0, _v1) => _v1.type === _v35.ManageTeamActionTypes.UpdateTeamGroupSort ? {
        ..._v0,
        teamGroups: [],
        teamGroupsInfo: {
          total: null,
          page: 0
        },
        teamGroupSort: _v1.payload
      } : _v0,
      FetchMoreTeamGroupUsersComplete: (_v0, _v1) => ({
        ..._v0,
        teamGroupUsers: [..._v0.teamGroupUsers, ...(_v1.payload ? _v1.payload.users : [])],
        teamGroupUsersPaginationInfo: _v1.payload?.paginationInfo
      }),
      TeamGroupsLoading: (_v0, _v1) => ({
        ..._v0,
        teamGroupsLoading: _v1.payload?.isLoading,
        teamGroupsSearching: _v1.payload?.isSearching,
        teamGroupsApiCallCount: _v1.payload?.isLoading ? _v0.teamGroupsApiCallCount + 1 : _v0.teamGroupsApiCallCount - 1
      }),
      UpdateTeamCapabilities: (_v0, _v1) => ({
        ..._v0,
        teamCapabilities: {
          ..._v0.teamCapabilities,
          ..._v1.payload?.capabilities
        }
      }),
      ClearTeamGroupUsers: _v0 => ({
        ..._v0,
        teamGroupUsers: []
      }),
      UpdateTeamSeatDetails: (_v0, _v1) => ({
        ..._v0,
        teamInfo: {
          ..._v0.teamInfo,
          seatDetails: {
            ..._v0.teamInfo.seatDetails,
            ..._v1.payload?.seatDetails
          }
        }
      }),
      UpdateTeamMembersCount: (_v0, _v1) => ({
        ..._v0,
        hasFetchedTeamMembers: !1,
        teamInfo: {
          ..._v0.teamInfo,
          teamMembersCount: {
            ..._v0.teamInfo.teamMembersCount,
            ..._v1.payload?.teamMembersCount
          }
        }
      }),
      UpdateModalToDisplay: (_v0, _v1) => ({
        ..._v0,
        modalToDisplay: {
          currentModalInDisplay: _v1.payload?.modalToDisplay.currentModalInDisplay,
          data: {
            ...(_v0.modalToDisplay.data || {}),
            ...(_v1.payload?.modalToDisplay.data || {})
          }
        }
      }),
      UpdateMembershipInfo: (_v0, _v1) => ({
        ..._v0,
        membership: {
          ..._v0.membership,
          ..._v1.payload?.membershipInfo
        },
        isMembershipInfoLoading: !1,
        hasMembershipInfoLoadFailed: !1
      }),
      UpdateUploadQuota: (_v0, _v1) => ({
        ..._v0,
        uploadQuota: {
          ..._v0.uploadQuota,
          ..._v1.payload?.uploadQuota
        },
        isUploadQuotaLoading: !1
      }),
      UpdatePlanData: (_v0, _v1) => ({
        ..._v0,
        planData: _v1.payload
      }),
      UpdateSeatCount: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return {
          ..._v0,
          seatCount: _v1.payload?.seatCount || 1,
          currentPage: 1
        };
      },
      UpdateRolesFilter: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return (0, _v33.default)(_v1.payload?.rolesFilter, _v0.rolesFilter) ? _v0 : {
          ..._v0,
          rolesFilter: _v1.payload?.rolesFilter || [],
          hasFetchedTeamMembers: !1,
          teamMembers: [],
          currentPage: 1
        };
      },
      UpdateStatusesFilter: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return {
          ..._v0,
          statusesFilter: _v1.payload?.statusesFilter || [],
          hasFetchedTeamMembers: !1,
          teamMembers: [],
          currentPage: 1
        };
      },
      UpdateAccessFilter: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return {
          ..._v0,
          accessFilter: _v1.payload?.accessFilter || [],
          hasFetchedTeamMembers: !1,
          teamMembers: [],
          currentPage: 1
        };
      },
      RemoveUnassignedSeats: (_v0, _v1) => {
        if (!_v1.payload) throw Error("no payload");
        return {
          ..._v0,
          invitesRemaining: _v1.payload?.seatCount,
          teamInfo: {
            ..._v0.teamInfo,
            teamMembersCount: {
              ..._v0.teamInfo.teamMembersCount,
              unassigned: _v1.payload?.seatCount
            }
          }
        };
      },
      UpdateTeamsPageNotice: (_v0, _v1) => ({
        ..._v0,
        teamsPageNotice: _v1.payload?.notice
      }),
      UpdateBillingPageNotice: (_v0, _v1) => ({
        ..._v0,
        billingPageNotice: _v1.payload?.notice
      }),
      UpdateInvitesRemaining: (_v0, _v1) => {
        let {
            membership: _v2,
            teamInfo: _v3
          } = _v0,
          _v4 = _v3?.seatDetails ? _v3.seatDetails.currentUnassignedCount : _v2.currentUnassignedSeatCount,
          _v5 = _v1.payload?.invitesLeft || _v4;
        return {
          ..._v0,
          invitesRemaining: _v5
        };
      },
      UpdateIsMembershipLoading: (_v0, _v1) => ({
        ..._v0,
        isMembershipInfoLoading: _v1.payload?.isMembershipInfoLoading
      }),
      UpdateIsRemoveSeatsConfirmation: (_v0, _v1) => ({
        ..._v0,
        isRemoveSeatsConfirmation: _v1.payload?.isRemoveSeatsConfirmation
      }),
      UpdateIsOperationOngoing: (_v0, _v1) => ({
        ..._v0,
        isOperationOngoing: _v1.payload?.isOperationOngoing
      }),
      UpdateIsBillingSettingChangeOngoing: (_v0, _v1) => ({
        ..._v0,
        isBillingSettingChangeOngoing: _v1.payload?.isBillingSettingChangeOngoing
      }),
      UpdateIsInviteModalOpen: (_v0, _v1) => ({
        ..._v0,
        isInviteModalOpen: _v1.payload?.isInviteModalOpen
      }),
      UpdateIsRoleUpgradeRequestsLoaded: (_v0, _v1) => ({
        ..._v0,
        isRoleUpgradeRequestsLoaded: _v1.payload?.isRoleUpgradeRequestsLoaded
      }),
      UpdateRoleUpgradeRequests: (_v0, _v1) => ({
        ..._v0,
        roleUpgradeRequests: _v1.payload?.roleUpgradeRequests
      }),
      UpdateSelectedTeamMembers: (_v0, _v1) => ({
        ..._v0,
        selectedTeamMembers: _v1.payload?.selectedTeamMembers,
        teamMembers: _v0.teamMembers.map(_v0 => ({
          ..._v0,
          isSelected: _v1.payload?.selectedTeamMembers.some(_v0 => _v0.uri === _v0.uri)
        }))
      }),
      UpdatePlanQuota: (_v0, _v1) => ({
        ..._v0,
        planQuota: _v1.payload
      }),
      UpdateCancelConfirmationInfo: (_v0, _v1) => ({
        ..._v0,
        cancelConfirmationInfo: _v1.payload?.cancelConfirmationInfo
      }),
      UpdateIsSSOAvailable: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload!");
        return {
          ..._v0,
          isSSOAvailable: _v1.payload.isSSOAvailable
        };
      }
    },
    _v38 = (_v0, _v1) => {
      let _v2 = _v37[_v1.type];
      return _v2 ? _v2(_v0, _v1) : _v0;
    },
    _v39 = _v0 => _v0 > _v34.ENABLE_PAGINATION_LIMIT || !("IntersectionObserver" in window),
    _v40 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v21.ViewerContext),
        [_v2, _v3] = (0, _v3.useReducer)(_v38, (0, _v30.initState)()),
        _v4 = (0, _v31.useManageTeamActions)(_v2, _v3, _v1),
        {
          teamInfo: _v5,
          membership: _v6,
          uploadQuota: _v7
        } = _v2;
      return (0, _v1.jsx)(_v30.ManageTeamDispatchCtx.Provider, {
        value: _v4,
        children: (0, _v1.jsx)(_v30.ManageTeamAnalytics.Provider, {
          value: (0, _v32.initAnalytics)(_v5, _v6, _v7),
          children: (0, _v1.jsx)(_v30.ManageTeamStateCtx.Provider, {
            value: _v2,
            children: _v0
          })
        })
      });
    };
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = {
      teamManagement: {
        contentMaxWidth: (0, _v7.rem)(0),
        contentInlineStart: (0, _v7.rem)(32)
      },
      compactSettings: {
        contentMaxWidth: {
          base: (0, _v7.rem)(640),
          xl: (0, _v7.rem)(720),
          "2xl": (0, _v7.rem)(960)
        },
        contentInlineStart: "0px"
      },
      dictionary: {
        contentMaxWidth: (0, _v7.rem)(640),
        contentInlineStart: "0px"
      },
      customMetadata: {
        contentMaxWidth: (0, _v7.rem)(0),
        contentInlineStart: (0, _v7.rem)(48)
      }
    },
    _v44 = ({
      children: _v0,
      searchContentAlignment: _v1
    }) => {
      let _v2 = (0, _v3.useContext)(_v21.ViewerContext),
        {
          replace: _v3,
          isReady: _v4
        } = (0, _v2.useRouter)(),
        {
          data: _v5,
          isLoading: _v6
        } = (0, _v14.useGetUserPreferences)({
          select: [_v24.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          where: {
            userId: _v2?.user?.id
          }
        }, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }),
        {
          isMembershipInfoLoading: _v7,
          invitesRemaining: _v8,
          isTeamInfoLoading: _v9,
          teamInfo: {
            currentTeamSize: _v10,
            isSufficientRole: _v11,
            maxTeamSize: _v12,
            owner: {
              uri: _v13,
              maxTeamMembers: _v14
            },
            teamData: {
              accentColor: _v15,
              ownerId: _v16
            },
            untranslatedUserRole: _v17
          },
          membership: _v18
        } = (0, _v3.useContext)(_v30.ManageTeamStateCtx),
        {
          fetchTeamGroupsAction: _v19,
          setHasMembershipInfoLoadFailed: _v20,
          updateMembershipInfo: _v21,
          updatePaymentMethods: _v22,
          updateTeamCapabilities: _v23,
          fetchTeamInfo: _v24,
          updateUploadQuota: _v25,
          updateIsMembershipLoading: _v26,
          updatePlanQuota: _v27,
          updatePlanData: _v28
        } = (0, _v3.useContext)(_v30.ManageTeamDispatchCtx),
        _v29 = (0, _v4.useTheme)(),
        [_v30, _v31] = (0, _v3.useState)(_v29),
        [_v32, _v33] = (0, _v13.useGetUserLazy)(),
        [_v34, _v35] = (0, _v15.useGetUserSettingsBillingMembershipLazy)(),
        [_v36, _v37] = (0, _v12.useGetMeSubscriptionPlansLazy)(),
        _v38 = _v18.hasAutorenew || !location.pathname.includes("/manage/team/billing");
      (0, _v3.useEffect)(() => {
        _v4 && !_v6 && _v5?.[_v24.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID] !== null && !_v9 && _v11 && _v3(_v24.WORKSPACE_MEMBER_SETTINGS_ROUTE, _v24.WORKSPACE_MEMBER_SETTINGS_ROUTE, {
          shallow: !1
        });
      }, [_v3, _v4, _v6, _v9, _v11, _v5]);
      let {
          capabilities: {
            canAddTeamMembers: _v39,
            canEnableEnterpriseCustomDomain: _v40,
            canLmsExport: _v41,
            canManageBillingOnsite: _v42,
            canSeeAiSettings: _v43,
            canShowSsoGroups: _v44,
            canUsePaymentsService: _v45,
            canViewSsoTeamSettings: _v46,
            canViewTeamMemberActivity: _v47,
            canViewTeamMemberTopLevelPermissions: _v48,
            canViewTeamMemberTopLevelPermissionsUpsell: _v49,
            createLiveEvents: _v50,
            hasDrmSetting: _v51,
            hasBusiness: _v52,
            hasContributorPlusEnabled: _v53,
            hasDataRetention: _v54,
            hasEnterprise: _v55,
            hasLegalHoldsActive: _v56,
            hasLiveSubscription: _v57,
            hasManageTeamBillingSettingsPage: _v58,
            haveMoreAdminTeamMembers: _v59,
            hasPerSeatPricingModelTeamMember: _v60,
            hasPersonalTeamFolderAdminAccess: _v61,
            hasPlus: _v62,
            hasPro: _v63,
            hasTeamMembersFilter: _v64,
            hasViewTeamMemberActivityUpsell: _v65,
            hasViewReviewPagePrivacyTeamSetting: _v66,
            hasSessionControl: _v67,
            hasContentSpaceEnabled: _v68,
            hasTeamAllowedIpsEnabled: _v69,
            hasMultipleReviewLinks: _v70,
            hasCanUseOverlayWatermarking: _v71
          },
          loading: _v72
        } = (0, _v8.useCapability)(["canAddTeamMembers", "canEnableEnterpriseCustomDomain", "canLmsExport", "canManageBillingOnsite", "canSeeAiSettings", "canShowSsoGroups", "canUsePaymentsService", "canViewSsoTeamSettings", "canViewTeamMemberActivity", "canViewTeamMemberTopLevelPermissions", "canViewTeamMemberTopLevelPermissionsUpsell", "createLiveEvents", "hasDrmSetting", "hasBusiness", "hasContributorPlusEnabled", "hasDataRetention", "hasEnterprise", "hasLegalHoldsActive", "hasLiveSubscription", "hasManageTeamBillingSettingsPage", "haveMoreAdminTeamMembers", "hasPerSeatPricingModelTeamMember", "hasPersonalTeamFolderAdminAccess", "hasPlus", "hasPro", "hasTeamMembersFilter", "hasViewTeamMemberActivityUpsell", "hasViewReviewPagePrivacyTeamSetting", "hasSessionControl", "hasContentSpaceEnabled", "hasTeamAllowedIpsEnabled", "hasMultipleReviewLinks", "hasCanUseOverlayWatermarking"], _v13),
        _v73 = (_v60 ? _v14 : _v12) || _v12,
        _v74 = !_v72 && !_v9 && (!_v60 || !_v7),
        _v75 = (0, _v3.useMemo)(() => !_v74 || (_v60 ? !!_v8 && _v10 + _v34.OWNER + _v18.currentUnassignedSeatCount < _v73 : !!(_v10 < _v12 || _v55)), [_v10, _v55, _v60, _v8, _v74, _v12, _v18.currentUnassignedSeatCount, _v73]);
      (0, _v3.useEffect)(() => {
        _v23({
          canAddTeamMembers: _v39,
          canEnableEnterpriseCustomDomain: _v40,
          canLmsExport: _v41,
          canManageBillingOnsite: _v42,
          canShowSsoGroups: _v44,
          canSeeAiSettings: _v43,
          canUsePaymentsService: _v45,
          canViewSsoTeamSettings: _v46,
          canViewTeamMemberActivity: _v47,
          canViewTeamMemberTopLevelPermissions: _v48,
          canViewTeamMemberTopLevelPermissionsUpsell: _v49,
          createLiveEvents: _v50,
          hasDrmSetting: _v51,
          hasBusiness: _v52,
          hasContributorPlusEnabled: _v53,
          hasDataRetention: _v54,
          hasEnterprise: _v55,
          hasLegalHoldsActive: _v56,
          hasLiveSubscription: _v57,
          hasManageTeamBillingSettingsPage: _v58,
          haveMoreAdminTeamMembers: _v59,
          hasPerSeatPricingModelTeamMember: _v60,
          hasPersonalTeamFolderAdminAccess: _v61,
          hasPlus: _v62,
          hasPro: _v63,
          hasTeamMembersFilter: _v64,
          hasViewTeamMemberActivityUpsell: _v65,
          hasViewReviewPagePrivacyTeamSetting: _v66,
          loading: _v72,
          hasSessionControl: _v67,
          hasContentSpaceEnabled: _v68,
          hasTeamAllowedIpsEnabled: _v69,
          hasMultipleReviewLinks: _v70,
          hasCanUseOverlayWatermarking: _v71
        });
      }, [_v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47, _v48, _v49, _v50, _v52, _v53, _v54, _v55, _v56, _v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v72, _v67, _v68, _v69, _v70, _v71]);
      let {
        paymentMethods: _v76
      } = (0, _v16.usePaymentMethods)({
        canFetchPaymentMethods: !!(_v16 && _v17 === _v35.TeamRole.Owner && _v58),
        canUsePaymentsService: !!_v45,
        ownerId: _v16
      });
      (0, _v3.useEffect)(() => {
        let _v0 = async () => {
          await _v34({
            select: _v17 === _v35.TeamRole.Owner ? ["billingAddress", "billingPeriod", "currency", "currentUnassignedSeatCount", "endDate", "gracePeriodType", "isStorageEntitlementSuspended", "hasAutorenew", "isFreeTrial", "isReverseFreeTrial", "isImpactedByGermanConsumerLaw", "isWithdrawalEligible", "latestRefundableTransaction", "nextCycle", "oneClickRefundEligible", "originalEndDate", "paymentMethod", "additionalSeatPrice", "additionalSeatPriceForDisplay", "basePlanPrice", "basePlanPriceForDisplay", "pricePerSeat", "pricePerSeatForDisplay", "productId", "renewalDate", "seatCapPaid", "seatCapTrial", "seatCount", "startDate", "status", "subscriptionId", "suggestedPaymentMethod", "vendor", "tier", "tierForDisplay", "totalPrice", "totalPriceForDisplay", "userEntity"] : ["currentUnassignedSeatCount", "isFreeTrial", "productId", "seatCapPaid", "seatCapTrial", "seatCount", "status", "tier"],
            where: {
              userId: _v16
            }
          }), _v26(!1);
        };
        _v16 && _v7 && _v58 && _v0();
      }, [_v16, _v7, _v58]), (0, _v3.useEffect)(() => {
        _v20(!!_v35?.error);
        let {
          data: _v0
        } = _v35;
        _v0 && _v21((0, _v42.mapMembershipResponse)({
          ..._v0
        }));
      }, [_v35, _v35?.error]), (0, _v3.useEffect)(() => {
        _v16 && _v17 === _v35.TeamRole.Owner && _v58 && _v32({
          select: ["uploadQuota"],
          where: {
            userId: _v16
          }
        });
      }, [_v16, _v58]), (0, _v3.useEffect)(() => {
        _v18.tier && _v36({
          select: ["id", "price", "currency", "tier", "metadata"],
          query: {
            filter: (0, _v9.camelize)([_v18.tier])
          }
        });
      }, [_v18]), (0, _v3.useEffect)(() => {
        let {
          data: _v0
        } = _v37;
        if (_v0?.data && _v0?.data.length) {
          let _v0 = _v0?.data[0],
            {
              entitlements: _v1
            } = _v0.metadata;
          _v27(_v1), _v28(_v0);
        }
      }, [_v37]), (0, _v3.useEffect)(() => {
        _v76 && _v22(_v76);
      }, [_v76]), (0, _v3.useEffect)(() => {
        _v9 && _v2?.user && (async () => {
          await _v24(!0);
        })();
      }, [_v2?.user, _v18?.seatCount, _v9]), (0, _v3.useEffect)(() => {
        let {
          data: _v0
        } = _v33;
        _v0?.uploadQuota && _v25({
          ..._v0?.uploadQuota
        });
      }, [_v33]), (0, _v3.useEffect)(() => {
        let _v0 = JSON.parse(JSON.stringify(_v29));
        _v15 && (_v0.content.focus = _v15, _v0.formats.primary = _v15), _v31(_v0);
      }, [_v15, _v29]), (0, _v3.useEffect)(() => {
        _v44 && _v19({
          direction: "asc",
          type: "name"
        });
      }, [_v44, _v16]);
      let _v77 = (0, _v19.useWindowSize)().width <= _v20.BreakPoints.sm,
        {
          isOpen: _v78,
          collapsed: _v79,
          toggle: _v80,
          open: _v81
        } = (0, _v23.useSideNavSurfaceState)({
          surface: "team-settings",
          userId: _v2?.user?.id,
          isMobile: _v77
        });
      return (0, _v1.jsx)(_v4.ThemeProvider, {
        theme: _v30,
        children: (0, _v1.jsxs)(_v5.Flex, {
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v22.WayfinderSideNav, {
            isOpen: _v78,
            collapsed: _v79,
            onClose: _v80,
            isMobile: _v77,
            teamOwnerId: _v16,
            children: (0, _v1.jsx)(_v26.ManageTeamSideNavContent, {})
          }), (0, _v1.jsx)(_v5.Flex, {
            flexDirection: "column",
            flex: "1 1 auto",
            width: "50%",
            sx: _v1 ? {
              containerType: "inline-size"
            } : void 0,
            children: (0, _v1.jsxs)(_v6.Box, {
              overflowY: "auto",
              height: "100%",
              children: [(0, _v1.jsx)(_v11.DefaultNavigation, {
                setIsSideNavActive: _v77 ? _v81 : void 0,
                isSideNavActive: _v78,
                hasSideNavLayout: !_v77,
                searchContentAlignment: _v1
              }), (0, _v1.jsxs)(_v6.Box, {
                width: "100%",
                maxWidth: (0, _v7.rem)(0),
                padding: "400",
                margin: "0 auto",
                backgroundColor: "background",
                children: [_v55 && (0, _v1.jsx)(_v47, {
                  children: (0, _v1.jsx)(_v25.default, {
                    length: 2,
                    depthLimit: 4
                  })
                }), _v74 && _v38 && !_v75 && _v18.tier !== _v35.Tier.CustomSelfServe && (0, _v1.jsx)(_v6.Box, {
                  mb: "300",
                  children: (0, _v1.jsx)(_v29.default, {})
                }), _v11 ? (0, _v1.jsx)(_v1.Fragment, {
                  children: _v0
                }) : (0, _v1.jsx)(_v6.Box, {
                  marginTop: "10%",
                  children: (0, _v1.jsx)(_v18.ErrorPage, {
                    error: new _v10.ForbiddenError(_v41.T.PermissionDenied)
                  })
                })]
              }), (0, _v1.jsx)(_v6.Box, {
                sx: {
                  "& > footer": {
                    height: (0, _v7.rem)(60)
                  }
                },
                children: _v2 && (0, _v1.jsx)(_v17.EssentialFooter, {
                  ..._v2,
                  enableQuotaMenu: !1
                })
              })]
            })
          }), (0, _v1.jsx)(_v27.default, {})]
        })
      });
    },
    _v45 = ({
      children: _v0,
      searchContentAlignment: _v1
    }) => (0, _v3.useContext)(_v21.ViewerContext) ? (0, _v1.jsx)(_v40, {
      children: (0, _v1.jsx)(_v44, {
        searchContentAlignment: _v1,
        children: (0, _v1.jsx)("div", {
          children: _v0
        })
      })
    }) : (0, _v1.jsx)(_v28.Spinner, {}),
    _v46 = ({
      children: _v0,
      searchContentAlignment: _v1
    }) => (0, _v3.useContext)(_v21.ViewerContext) ? (0, _v1.jsx)(_v40, {
      children: (0, _v1.jsx)(_v44, {
        searchContentAlignment: _v1,
        children: (0, _v1.jsx)(_v5.Flex, {
          flexDirection: "column",
          flex: "1",
          children: _v0
        })
      })
    }) : (0, _v1.jsx)(_v28.Spinner, {}),
    _v47 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.Box, {
      sx: {
        "&:not(:empty)": {
          paddingBottom: (0, _v7.rem)(24)
        }
      },
      children: _v0
    });
  _v0.s(["getLayout", 0, function (_v0, {
    contentColumn: _v1 = "teamManagement"
  } = {}) {
    return (0, _v1.jsx)(_v45, {
      searchContentAlignment: _v43[_v1],
      children: _v0
    });
  }, "getTeamSettingsPageLayout", 0, function (_v0, {
    contentColumn: _v1 = "teamManagement"
  } = {}) {
    return (0, _v1.jsx)(_v46, {
      searchContentAlignment: "none" === _v1 ? void 0 : _v43[_v1],
      children: _v0
    });
  }], 0);
}