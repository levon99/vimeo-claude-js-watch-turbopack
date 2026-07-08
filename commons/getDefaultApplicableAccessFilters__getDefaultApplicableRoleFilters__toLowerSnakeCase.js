{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v0 => _v0.toLowerCase().replace(/ /g, "_");
  _v0.s(["getDefaultApplicableAccessFilters", 0, ({
    hasEnableChinaDelivery: _v0,
    isSSOAvailable: _v1,
    canLmsExport: _v2
  }) => {
    let _v3 = [];
    return _v0 && _v3.push({
      label: _v4.T.CanViewVideosInChina,
      value: _v3.MemberAccess.CanViewVideosInChina,
      applied: !1
    }), _v1 && _v3.push({
      label: _v4.T.LogsInWithSSO,
      value: _v3.MemberAccess.LogsInWithSso,
      applied: !1
    }, {
      label: _v4.T.LogsInWithEmailAndPassword,
      value: _v3.MemberAccess.LogsInWithEmailAndPassword,
      applied: !1
    }), _v2 && _v3.push({
      label: _v4.T.HasLearnerID,
      value: _v3.MemberAccess.HasLearnerId,
      applied: !1
    }), _v3;
  }, "getDefaultApplicableRoleFilters", 0, _v0 => _v0.filter(_v0 => !!_v0.permissionLevel).map(_v0 => ({
    label: _v0.displayName || _v0.permissionLevel,
    value: _v5(_v0.permissionLevel),
    applied: !1
  })), "toLowerSnakeCase", 0, _v5], 0);
  var _v6 = _v0.i(0);
  let _v7 = [{
      label: _v4.T.Accepted,
      value: _v3.MemberStatus.Accepted,
      applied: !1
    }, {
      label: _v4.T.Pending,
      value: _v3.MemberStatus.Pending,
      applied: !1
    }],
    _v8 = Object.entries(_v3.TeamRole).flatMap(([_v0, _v1]) => _v0 === _v3.TeamRole.Owner ? [] : [{
      label: _v1 === _v3.TeamRole.Owner ? _v4.T.Owner : _v4.T.PermissionLevels[_v1.replace(/\s/g, "")],
      value: _v5(_v1),
      applied: !0
    }]),
    _v9 = () => ({
      updatedTeamMembers: [],
      teamMembers: [],
      totalTeamMembers: 0,
      currentPage: 1,
      invitesRemaining: 0,
      teamInfo: {
        owner: {
          uri: "",
          name: "",
          pictures: {
            sizes: [{
              link: "",
              height: 0,
              width: 0
            }]
          },
          account: _v2.AccountType.Basic,
          email: "",
          metadata: {
            connections: {
              teamMembers: {
                roles: []
              }
            }
          }
        },
        teamData: {
          id: null,
          ownerId: 0,
          logoUri: null,
          teamName: "",
          accentColor: null,
          teamShowcaseId: null
        },
        userRole: _v3.TeamRole.Admin,
        untranslatedUserRole: _v3.TeamRole.Admin,
        isSufficientRole: !0,
        capabilities: {
          hasEnterprise: !1
        },
        teamMembersCount: {
          admin: 0,
          uploader: 0,
          contributor: 0,
          contributorPlus: 0,
          viewer: 0,
          unassigned: 0
        },
        currentTeamSize: 0,
        maxTeamSize: 0,
        seatDetails: {
          additionalPurchasedCount: 0,
          basePlanCount: 0,
          currentUnassignedCount: 0,
          totalPurchasedCount: 10,
          currentAssignedCount: 1,
          capacity: 200
        },
        teamSeats: {
          totalSeats: 0,
          adminSeats: 0,
          contributorSeats: 0,
          liveContributorSeats: 0,
          uploaderSeats: 0,
          viewerSeats: 0
        }
      },
      previousSearchQuery: "",
      searchQuery: "",
      sort: {
        type: void 0,
        direction: void 0
      },
      isRemoveSeatsConfirmation: !1,
      isTeamMembersLoading: !0,
      isTeamInfoLoading: !0,
      teamMembersApiCallCount: 0,
      teamGroupsApiCallCount: 0,
      hasFetchedTeamMembers: !1,
      hasFetchedTeamGroups: !1,
      hasFetchedSSOAvailability: !1,
      isSSOAvailable: !1,
      isUploadQuotaLoading: !0,
      isMembershipInfoLoading: !0,
      isFetchPaymentMethodsLoading: !0,
      isTeamSettingsLoading: !0,
      isOperationOngoing: !1,
      isBillingSettingChangeOngoing: !1,
      isInviteModalOpen: !1,
      isRoleUpgradeRequestsLoaded: !1,
      hasError: !1,
      hasMembershipInfoLoadFailed: !1,
      enablePagination: !1,
      notification: {
        content: null,
        status: null
      },
      albums: {
        total: 0,
        currentPage: 0,
        items: []
      },
      teamGroups: [],
      teamGroupsInfo: {
        page: 0,
        total: null
      },
      teamGroupUsers: [],
      teamGroupUsersPaginationInfo: {
        total: 0
      },
      groupMembersPreviousSearchQuery: "",
      groupMembersSearchQuery: "",
      teamGroupSort: {
        type: void 0,
        direction: void 0
      },
      groupUsersError: !1,
      teamGroupsLoading: !1,
      teamGroupsSearching: !1,
      teamCapabilities: {
        canAddTeamMembers: void 0,
        canEnableEnterpriseCustomDomain: !1,
        canLmsExport: !1,
        canSeeAiSettings: !1,
        canShowSsoGroups: !1,
        canUsePaymentsService: !1,
        canViewSsoTeamSettings: !1,
        canViewTeamMemberTopLevelPermissions: !1,
        canViewTeamMemberTopLevelPermissionsUpsell: !1,
        canViewTeamMemberActivity: !1,
        createLiveEvents: !1,
        hasDrmSetting: !1,
        hasViewTeamMemberActivityUpsell: !1,
        hasEnterprise: !1,
        hasManageTeamBillingSettingsPage: !1,
        hasContentSpaceEnabled: !1,
        hasPersonalTeamFolderAdminAccess: !1,
        hasEnabledSso: !1,
        hasPlus: !1,
        hasPro: !1,
        hasBusiness: !1,
        hasLegalHoldsActive: !1,
        hasDataRetention: !1,
        hasPerSeatPricingModelTeamMember: !1,
        hasTeamAllowedIpsEnabled: !1,
        hasMultipleReviewLinks: !1,
        loading: !1,
        hasCanUseOverlayWatermarking: !1
      },
      modalToDisplay: {
        currentModalInDisplay: null
      },
      membership: {
        status: _v3.AccountStatus.Active,
        tier: void 0,
        billingAddress: void 0,
        billingPeriod: _v3.UserPlanType.Month,
        isImpactedByGermanConsumerLaw: !1,
        isWithdrawalEligible: !1,
        userEntity: void 0,
        isFreeTrial: !1,
        isReverseFreeTrial: !1,
        seatCount: 0,
        paymentMethod: {
          uri: "",
          type: "",
          expirationMonth: 0,
          expirationYear: 0,
          isInstantPurchase: !1,
          lastFour: "",
          inUse: !1,
          isSuggested: !1,
          textType: "",
          canUseToOptin: !1,
          disableOption: !1
        },
        suggestedPaymentMethod: {
          uri: "",
          type: "",
          expirationMonth: 0,
          expirationYear: 0,
          isInstantPurchase: !1,
          lastFour: "",
          inUse: !1,
          isSuggested: !0,
          textType: "",
          canUseToOptin: !1,
          disableOption: !1
        },
        seatCapPaid: _v6.MAX_PURCHASE_SEATS_DEFAULT,
        seatCapTrial: _v6.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS,
        hasAutorenew: !1,
        renewalDate: "",
        startDate: "",
        endDate: "",
        originalEndDate: "",
        gracePeriodType: null,
        isStorageEntitlementSuspended: !1,
        productId: 0,
        pricePerSeat: 0,
        pricePerSeatForDisplay: "",
        additionalSeatPrice: null,
        additionalSeatPriceForDisplay: null,
        basePlanPrice: null,
        basePlanPriceForDisplay: null,
        currency: "",
        currentUnassignedSeatCount: 0,
        subscriptionId: "",
        rejoinOfferEligible: !1,
        totalPrice: 0,
        totalPriceForDisplay: "",
        nextCycle: {
          tier: _v3.Tier.Starter,
          billingPeriod: _v3.UserPlanType.Month,
          seatCount: 0,
          productId: 0,
          totalRenewalPrice: 0,
          totalRenewalPriceForDisplay: ""
        },
        tierForDisplay: _v3.Tier.Starter,
        oneClickRefundEligible: !1
      },
      uploadQuota: {
        lifetime: {
          free: 0,
          max: 0,
          unit: "",
          used: 0
        },
        periodic: {
          free: 0,
          max: 0,
          period: "",
          resetDate: "",
          unit: "",
          used: 0
        },
        space: {
          free: 0,
          unit: "",
          max: 0,
          showing: "",
          used: 0
        }
      },
      paymentMethods: [],
      notice: _v10(),
      seatCount: 1,
      teamsPageNotice: null,
      billingPageNotice: null,
      billingPageLinkoutNotice: {
        canShow: !1,
        type: "primary",
        text: ""
      },
      selectedTeamMembers: [],
      planQuota: {
        cap: null,
        periodic: null
      },
      planData: null,
      rolesFilter: [],
      statusesFilter: _v7,
      accessFilter: [],
      cancelConfirmationInfo: null
    }),
    _v10 = () => {
      {
        let _v0 = new URLSearchParams(window.location.search);
        if ("1" === _v0.get("card_without_postal_code_replaced")) return {
          canShow: !0,
          type: "positive",
          text: _v4.T.DefaultPaymentMethodUpdated
        };
        if ("1" === _v0.get("added_payment_method")) return {
          canShow: !0,
          type: "positive",
          text: _v4.T.PaymentMethodAdded
        };
        if ("1" === _v0.get("invoice_paid")) return {
          canShow: !0,
          type: "positive",
          text: _v4.T.InvoicePaid
        };
      }
      return {
        canShow: !1,
        type: "primary",
        text: ""
      };
    },
    _v11 = () => Error("Not implemented"),
    _v12 = (0, _v1.createContext)(_v9()),
    _v13 = (0, _v1.createContext)({
      fetchMembershipInfo: _v11,
      fetchTeamInfo: _v11,
      fetchTeamMembers: _v11,
      fetchTeamMember: _v11,
      updateTeamBrandings: _v11,
      updateSearchQuery: _v11,
      updateGroupMembersSearchQuery: _v11,
      updateSort: _v11,
      updateDirection: _v11,
      updateInvitesRemaining: _v11,
      updateRolesFilter: _v11,
      updateStatusesFilter: _v11,
      updateAccessFilter: _v11,
      updateCurrentPage: _v11,
      updateTeamMemberPermission: _v11,
      updateTeamMemberRoleState: _v11,
      deleteTeamMember: _v11,
      setHasError: _v11,
      remindTeamMemberAboutInvite: _v11,
      showToastMessage: _v11,
      fetchTeamShowcase: _v11,
      fetchTeamGroupsAction: _v11,
      setGroupUsersError: _v11,
      updateTeamCapabilities: _v11,
      clearTeamGroupUsers: _v11,
      updateTeamInfoSeatDetails: _v11,
      updateTeamGroupsLoadingSearching: _v11,
      updateTeamGroups: _v11,
      updateTeamGroupSort: _v11,
      updateTeamInfoTeamMembersCount: _v11,
      updateModalToDisplay: _v11,
      updateMembershipInfo: _v11,
      updateUploadQuota: _v11,
      updatePlanQuota: _v11,
      updatePlanData: _v11,
      updateSeatCount: _v11,
      removeUnassignedSeats: _v11,
      fetchPaymentMethods: _v11,
      updatePaymentMethods: _v11,
      updatePaymentMethod: _v11,
      showNotice: _v11,
      showBillingPageLinkoutNotice: _v11,
      updateTeamsPageNotice: _v11,
      updateBillingPageNotice: _v11,
      updateIsMembershipLoading: _v11,
      updateIsRemoveSeatsConfirmation: _v11,
      updateIsOperationOngoing: _v11,
      updateIsBillingSettingChangeOngoing: _v11,
      setHasMembershipInfoLoadFailed: _v11,
      updateIsInviteModalOpen: _v11,
      updateIsRoleUpgradeRequestsLoaded: _v11,
      updateRoleUpgradeRequests: _v11,
      updateSelectedTeamMembers: _v11,
      updateCancelConfirmationInfo: _v11,
      toggleTeamMemberSSO: _v11,
      fetchSSOAvailability: _v11
    }),
    _v14 = (0, _v1.createContext)({
      trackUploadTeamLogo: _v11,
      trackUploadTeamLogoFromModal: _v11,
      trackLogoEditButton: _v11,
      trackScrollTeamLogo: _v11,
      trackRemoveTeamLogo: _v11,
      trackLogoModalCancel: _v11,
      trackTeamBrandingUpdated: _v11,
      trackTeamAccentColor: _v11,
      trackSelectTeamShowcase: _v11,
      trackOpenTeamShowcaseDropdown: _v11,
      trackTeamMemberChangeRole: _v11,
      trackRemoveTeamMember: _v11,
      trackInviteNewTeamMember: _v11,
      trackCopyInviteLink: _v11,
      trackSendInviteReminder: _v11,
      trackUpsellClick: _v11,
      trackTeamGroupsRowClick: _v11,
      trackManageTeamPageView: _v11,
      trackDownloadUsersClick: _v11,
      trackRoleUpgradeRequests: _v11,
      trackBillingAction: _v11
    });
  _v0.s(["ManageTeamAnalytics", 0, _v14, "ManageTeamDispatchCtx", 0, _v13, "ManageTeamStateCtx", 0, _v12, "ROLES_FILTER_DEFAULT", 0, _v8, "STATUSES_FILTER_DEFAULT", 0, _v7, "initState", 0, _v9], 0);
}