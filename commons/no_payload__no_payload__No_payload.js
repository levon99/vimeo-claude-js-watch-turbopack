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
    _v34 = _v0.i(0);
  let _v35 = ({
      untranslatedUserRole: _v0
    }) => _v0 === _v34.TeamRole.Owner || _v0 === _v34.TeamRole.Admin,
    _v36 = {
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
          _v3 = _v1.payload.teamsInfo.data.filter(_v35),
          _v4 = _v3.find(({
            untranslatedUserRole: _v0
          }) => _v0 === _v34.TeamRole.Owner),
          _v5 = _v3.filter(({
            untranslatedUserRole: _v0
          }) => _v0 === _v34.TeamRole.Admin);
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
          _v5 = _v38(_v3),
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
      UpdateTeamGroupSort: (_v0, _v1) => _v1.type === _v34.ManageTeamActionTypes.UpdateTeamGroupSort ? {
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
        return (0, _v32.default)(_v1.payload?.rolesFilter, _v0.rolesFilter) ? _v0 : {
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
    _v37 = (_v0, _v1) => {
      let _v2 = _v36[_v1.type];
      return _v2 ? _v2(_v0, _v1) : _v0;
    },
    _v38 = _v0 => _v0 > _v33.ENABLE_PAGINATION_LIMIT || !("IntersectionObserver" in window),
    _v39 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v21.ViewerContext),
        [_v2, _v3] = (0, _v3.useReducer)(_v37, (0, _v29.initState)()),
        _v4 = (0, _v30.useManageTeamActions)(_v2, _v3, _v1),
        {
          teamInfo: _v5,
          membership: _v6,
          uploadQuota: _v7
        } = _v2;
      return (0, _v1.jsx)(_v29.ManageTeamDispatchCtx.Provider, {
        value: _v4,
        children: (0, _v1.jsx)(_v29.ManageTeamAnalytics.Provider, {
          value: (0, _v31.initAnalytics)(_v5, _v6, _v7),
          children: (0, _v1.jsx)(_v29.ManageTeamStateCtx.Provider, {
            value: _v2,
            children: _v0
          })
        })
      });
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v21.ViewerContext),
        {
          replace: _v2,
          isReady: _v3
        } = (0, _v2.useRouter)(),
        {
          data: _v4,
          isLoading: _v5
        } = (0, _v14.useGetUserPreferences)({
          select: [_v23.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          where: {
            userId: _v1?.user?.id
          }
        }, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }),
        {
          isMembershipInfoLoading: _v6,
          invitesRemaining: _v7,
          isTeamInfoLoading: _v8,
          teamInfo: {
            currentTeamSize: _v9,
            isSufficientRole: _v10,
            maxTeamSize: _v11,
            owner: {
              uri: _v12,
              maxTeamMembers: _v13
            },
            teamData: {
              accentColor: _v14,
              ownerId: _v15
            },
            untranslatedUserRole: _v16
          },
          membership: _v17
        } = (0, _v3.useContext)(_v29.ManageTeamStateCtx),
        {
          fetchTeamGroupsAction: _v18,
          setHasMembershipInfoLoadFailed: _v19,
          updateMembershipInfo: _v20,
          updatePaymentMethods: _v21,
          updateTeamCapabilities: _v22,
          fetchTeamInfo: _v23,
          updateUploadQuota: _v24,
          updateIsMembershipLoading: _v25,
          updatePlanQuota: _v26,
          updatePlanData: _v27
        } = (0, _v3.useContext)(_v29.ManageTeamDispatchCtx),
        _v28 = (0, _v4.useTheme)(),
        [_v29, _v30] = (0, _v3.useState)(_v28),
        [_v31, _v32] = (0, _v13.useGetUserLazy)(),
        [_v33, _v34] = (0, _v15.useGetUserSettingsBillingMembershipLazy)(),
        [_v35, _v36] = (0, _v12.useGetMeSubscriptionPlansLazy)(),
        _v37 = _v17.hasAutorenew || !location.pathname.includes("/manage/team/billing");
      (0, _v3.useEffect)(() => {
        _v3 && !_v5 && _v4?.[_v23.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID] !== null && !_v8 && _v10 && _v2(_v23.WORKSPACE_MEMBER_SETTINGS_ROUTE, _v23.WORKSPACE_MEMBER_SETTINGS_ROUTE, {
          shallow: !1
        });
      }, [_v2, _v3, _v5, _v8, _v10, _v4]);
      let {
          capabilities: {
            canAddTeamMembers: _v38,
            canEnableEnterpriseCustomDomain: _v39,
            canLmsExport: _v40,
            canManageBillingOnsite: _v41,
            canSeeAiSettings: _v42,
            canShowSsoGroups: _v43,
            canUsePaymentsService: _v44,
            canViewSsoTeamSettings: _v45,
            canViewTeamMemberActivity: _v46,
            canViewTeamMemberTopLevelPermissions: _v47,
            canViewTeamMemberTopLevelPermissionsUpsell: _v48,
            createLiveEvents: _v49,
            hasDrmSetting: _v50,
            hasBusiness: _v51,
            hasContributorPlusEnabled: _v52,
            hasDataRetention: _v53,
            hasEnterprise: _v54,
            hasLegalHoldsActive: _v55,
            hasLiveSubscription: _v56,
            hasManageTeamBillingSettingsPage: _v57,
            hasPerSeatPricingModelTeamMember: _v58,
            hasPersonalTeamFolderAdminAccess: _v59,
            hasPlus: _v60,
            hasPro: _v61,
            hasTeamMembersFilter: _v62,
            hasViewTeamMemberActivityUpsell: _v63,
            hasViewReviewPagePrivacyTeamSetting: _v64,
            hasSessionControl: _v65,
            hasContentSpaceEnabled: _v66,
            hasTeamAllowedIpsEnabled: _v67,
            hasMultipleReviewLinks: _v68,
            hasCanUseOverlayWatermarking: _v69
          },
          loading: _v70
        } = (0, _v8.useCapability)(["canAddTeamMembers", "canEnableEnterpriseCustomDomain", "canLmsExport", "canManageBillingOnsite", "canSeeAiSettings", "canShowSsoGroups", "canUsePaymentsService", "canViewSsoTeamSettings", "canViewTeamMemberActivity", "canViewTeamMemberTopLevelPermissions", "canViewTeamMemberTopLevelPermissionsUpsell", "createLiveEvents", "hasDrmSetting", "hasBusiness", "hasContributorPlusEnabled", "hasDataRetention", "hasEnterprise", "hasLegalHoldsActive", "hasLiveSubscription", "hasManageTeamBillingSettingsPage", "hasPerSeatPricingModelTeamMember", "hasPersonalTeamFolderAdminAccess", "hasPlus", "hasPro", "hasTeamMembersFilter", "hasViewTeamMemberActivityUpsell", "hasViewReviewPagePrivacyTeamSetting", "hasSessionControl", "hasContentSpaceEnabled", "hasTeamAllowedIpsEnabled", "hasMultipleReviewLinks", "hasCanUseOverlayWatermarking"], _v12),
        _v71 = (_v58 ? _v13 : _v11) || _v11,
        _v72 = !_v70 && !_v8 && (!_v58 || !_v6),
        _v73 = (0, _v3.useMemo)(() => !_v72 || (_v58 ? !!_v7 && _v9 + _v33.OWNER + _v17.currentUnassignedSeatCount < _v71 : !!(_v9 < _v11 || _v54)), [_v9, _v54, _v58, _v7, _v72, _v11, _v17.currentUnassignedSeatCount, _v71]);
      (0, _v3.useEffect)(() => {
        _v22({
          canAddTeamMembers: _v38,
          canEnableEnterpriseCustomDomain: _v39,
          canLmsExport: _v40,
          canManageBillingOnsite: _v41,
          canShowSsoGroups: _v43,
          canSeeAiSettings: _v42,
          canUsePaymentsService: _v44,
          canViewSsoTeamSettings: _v45,
          canViewTeamMemberActivity: _v46,
          canViewTeamMemberTopLevelPermissions: _v47,
          canViewTeamMemberTopLevelPermissionsUpsell: _v48,
          createLiveEvents: _v49,
          hasDrmSetting: _v50,
          hasBusiness: _v51,
          hasContributorPlusEnabled: _v52,
          hasDataRetention: _v53,
          hasEnterprise: _v54,
          hasLegalHoldsActive: _v55,
          hasLiveSubscription: _v56,
          hasManageTeamBillingSettingsPage: _v57,
          hasPerSeatPricingModelTeamMember: _v58,
          hasPersonalTeamFolderAdminAccess: _v59,
          hasPlus: _v60,
          hasPro: _v61,
          hasTeamMembersFilter: _v62,
          hasViewTeamMemberActivityUpsell: _v63,
          hasViewReviewPagePrivacyTeamSetting: _v64,
          loading: _v70,
          hasSessionControl: _v65,
          hasContentSpaceEnabled: _v66,
          hasTeamAllowedIpsEnabled: _v67,
          hasMultipleReviewLinks: _v68,
          hasCanUseOverlayWatermarking: _v69
        });
      }, [_v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47, _v48, _v49, _v51, _v52, _v53, _v54, _v55, _v56, _v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v70, _v65, _v66, _v67, _v68, _v69]);
      let {
        paymentMethods: _v74
      } = (0, _v16.usePaymentMethods)({
        canFetchPaymentMethods: !!(_v15 && _v16 === _v34.TeamRole.Owner && _v57),
        canUsePaymentsService: !!_v44,
        ownerId: _v15
      });
      (0, _v3.useEffect)(() => {
        let _v0 = async () => {
          await _v33({
            select: _v16 === _v34.TeamRole.Owner ? ["billingAddress", "billingPeriod", "currency", "currentUnassignedSeatCount", "endDate", "gracePeriodType", "isStorageEntitlementSuspended", "hasAutorenew", "isFreeTrial", "isReverseFreeTrial", "isImpactedByGermanConsumerLaw", "isWithdrawalEligible", "latestRefundableTransaction", "nextCycle", "oneClickRefundEligible", "originalEndDate", "paymentMethod", "additionalSeatPrice", "additionalSeatPriceForDisplay", "basePlanPrice", "basePlanPriceForDisplay", "pricePerSeat", "pricePerSeatForDisplay", "productId", "renewalDate", "seatCapPaid", "seatCapTrial", "seatCount", "startDate", "status", "subscriptionId", "suggestedPaymentMethod", "tier", "tierForDisplay", "totalPrice", "totalPriceForDisplay", "userEntity"] : ["currentUnassignedSeatCount", "isFreeTrial", "productId", "seatCapPaid", "seatCapTrial", "seatCount", "status", "tier"],
            where: {
              userId: _v15
            }
          }), _v25(!1);
        };
        _v15 && _v6 && _v57 && _v0();
      }, [_v15, _v6, _v57]), (0, _v3.useEffect)(() => {
        _v19(!!_v34?.error);
        let {
          data: _v0
        } = _v34;
        _v0 && _v20((0, _v41.mapMembershipResponse)({
          ..._v0
        }));
      }, [_v34, _v34?.error]), (0, _v3.useEffect)(() => {
        _v15 && _v16 === _v34.TeamRole.Owner && _v57 && _v31({
          select: ["uploadQuota"],
          where: {
            userId: _v15
          }
        });
      }, [_v15, _v57]), (0, _v3.useEffect)(() => {
        _v17.tier && _v35({
          select: ["id", "price", "currency", "tier", "metadata"],
          query: {
            filter: (0, _v9.camelize)([_v17.tier])
          }
        });
      }, [_v17]), (0, _v3.useEffect)(() => {
        let {
          data: _v0
        } = _v36;
        if (_v0?.data && _v0?.data.length) {
          let _v0 = _v0?.data[0],
            {
              entitlements: _v1
            } = _v0.metadata;
          _v26(_v1), _v27(_v0);
        }
      }, [_v36]), (0, _v3.useEffect)(() => {
        _v74 && _v21(_v74);
      }, [_v74]), (0, _v3.useEffect)(() => {
        _v8 && _v1?.user && (async () => {
          await _v23(!0);
        })();
      }, [_v1?.user, _v17?.seatCount, _v8]), (0, _v3.useEffect)(() => {
        let {
          data: _v0
        } = _v32;
        _v0?.uploadQuota && _v24({
          ..._v0?.uploadQuota
        });
      }, [_v32]), (0, _v3.useEffect)(() => {
        let _v0 = JSON.parse(JSON.stringify(_v28));
        _v14 && (_v0.content.focus = _v14, _v0.formats.primary = _v14), _v30(_v0);
      }, [_v14, _v28]), (0, _v3.useEffect)(() => {
        _v43 && _v18({
          direction: "asc",
          type: "name"
        });
      }, [_v43, _v15]);
      let _v75 = (0, _v19.useWindowSize)().width <= _v20.BreakPoints.sm,
        [_v76, _v77] = (0, _v3.useState)(!_v75);
      return (0, _v1.jsx)(_v4.ThemeProvider, {
        theme: _v29,
        children: (0, _v1.jsxs)(_v5.Flex, {
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v22.WayfinderSideNav, {
            isOpen: _v76,
            onClose: () => _v77(!1),
            isMobile: _v75,
            teamOwnerId: _v15,
            children: (0, _v1.jsx)(_v25.ManageTeamSideNavContent, {})
          }), (0, _v1.jsx)(_v5.Flex, {
            flexDirection: "column",
            flex: "1 1 auto",
            width: "50%",
            children: (0, _v1.jsxs)(_v6.Box, {
              overflowY: "auto",
              height: "100%",
              children: [(0, _v1.jsx)(_v11.DefaultNavigation, {
                setIsSideNavActive: () => _v77(!0),
                isSideNavActive: _v76
              }), (0, _v1.jsxs)(_v6.Box, {
                width: "100%",
                maxWidth: (0, _v7.rem)(0),
                padding: "400",
                margin: "0 auto",
                backgroundColor: "background",
                children: [_v54 && (0, _v1.jsx)(_v45, {
                  children: (0, _v1.jsx)(_v24.default, {
                    length: 2,
                    depthLimit: 4
                  })
                }), _v72 && _v37 && !_v73 && _v17.tier !== _v34.Tier.CustomSelfServe && (0, _v1.jsx)(_v6.Box, {
                  mb: "300",
                  children: (0, _v1.jsx)(_v28.default, {})
                }), _v10 ? (0, _v1.jsx)(_v1.Fragment, {
                  children: _v0
                }) : (0, _v1.jsx)(_v6.Box, {
                  marginTop: "10%",
                  children: (0, _v1.jsx)(_v18.ErrorPage, {
                    error: new _v10.ForbiddenError(_v40.T.PermissionDenied)
                  })
                })]
              }), (0, _v1.jsx)(_v6.Box, {
                sx: {
                  "& > footer": {
                    height: (0, _v7.rem)(60)
                  }
                },
                children: _v1 && (0, _v1.jsx)(_v17.EssentialFooter, {
                  ..._v1,
                  enableQuotaMenu: !1
                })
              })]
            })
          }), (0, _v1.jsx)(_v26.default, {})]
        })
      });
    },
    _v43 = ({
      children: _v0
    }) => (0, _v3.useContext)(_v21.ViewerContext) ? (0, _v1.jsx)(_v39, {
      children: (0, _v1.jsx)(_v42, {
        children: (0, _v1.jsx)("div", {
          children: _v0
        })
      })
    }) : (0, _v1.jsx)(_v27.Spinner, {}),
    _v44 = ({
      children: _v0
    }) => (0, _v3.useContext)(_v21.ViewerContext) ? (0, _v1.jsx)(_v39, {
      children: (0, _v1.jsx)(_v42, {
        children: (0, _v1.jsx)(_v5.Flex, {
          flexDirection: "column",
          flex: "1",
          children: _v0
        })
      })
    }) : (0, _v1.jsx)(_v27.Spinner, {}),
    _v45 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.Box, {
      sx: {
        "&:not(:empty)": {
          paddingBottom: (0, _v7.rem)(24)
        }
      },
      children: _v0
    });
  _v0.s(["getLayout", 0, function (_v0) {
    return (0, _v1.jsx)(_v43, {
      children: _v0
    });
  }, "getTeamSettingsPageLayout", 0, function (_v0) {
    return (0, _v1.jsx)(_v44, {
      children: _v0
    });
  }], 0);
}