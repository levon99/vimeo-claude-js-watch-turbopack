{
  "use strict";

  var _v1,
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
    _v19 = ((_v1 = {}).TEAM_SEATS_UPGRADE = "team_seats_upgrade", _v1.UPGRADE_ADD_TEAM = "368ip_mt_add_team", _v1);
  _v0.s(["MKCCodes", () => _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = _v3.default.memo(() => {
    let _v0 = (0, _v3.useContext)(_v14.ViewerContext),
      {
        invitesRemaining: _v1,
        membership: _v2,
        modalToDisplay: {
          currentModalInDisplay: _v3,
          data: _v4 = {}
        },
        teamInfo: _v5,
        teamCapabilities: {
          canUsePaymentsService: _v6
        }
      } = (0, _v3.useContext)(_v16.ManageTeamStateCtx),
      {
        updateInvitesRemaining: _v7,
        updateModalToDisplay: _v8,
        removeUnassignedSeats: _v9,
        updateTeamsPageNotice: _v10,
        updateIsMembershipLoading: _v11
      } = (0, _v3.useContext)(_v16.ManageTeamDispatchCtx),
      {
        trackBillingAction: _v12
      } = (0, _v3.useContext)(_v16.ManageTeamAnalytics),
      {
        sendDistributionAnalyticsEvent: _v13
      } = (0, _v5.useDistributionAnalyticsEvent)(),
      {
        isBlocked: _v14
      } = (0, _v9.useIsSeatChangeBlocked)({
        tier: _v2.tier
      }),
      {
        settings: _v15
      } = (0, _v10.useOrionSettings)(),
      _v16 = _v2.tier === _v20.Tier.Creator || _v14;
    switch ((0, _v3.useEffect)(() => {
      if (_v3 === _v20.TeamManagementModals.PURCHASE_SEATS_MODAL) {
        if (_v16) return void _v8({
          currentModalInDisplay: null
        });
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "unset";
    }, [_v3, _v16, _v8]), _v3) {
      case _v20.TeamManagementModals.PURCHASE_SEATS_MODAL:
        {
          if (_v16) return null;
          let {
              teamData: _v0
            } = _v5,
            _v1 = _v0?.user?.id || _v0?.teamUser?.ownerId || 0,
            _v2 = _v0.ownerId || _v0?.teamUser?.ownerId || 0,
            _v3 = _v2.seatCapTrial || _v5.seatDetails?.basePlanCount || 0,
            _v4 = Math.max(0, (_v2.isFreeTrial ? _v3 : _v2.seatCapPaid) - (_v5.maxTeamSize || _v2.seatCount));
          return (0, _v2.jsx)(_v13.PurchaseSeatsModal, {
            canUsePaymentsService: !!_v6,
            isActive: _v3 === _v20.TeamManagementModals.PURCHASE_SEATS_MODAL,
            isTrial: _v2.isFreeTrial,
            productId: String(_v2.productId),
            userId: _v1,
            ownerId: _v2,
            minSeatsPurchase: _v18.MIN_PURCHASE_SEATS,
            maxSeatsPurchase: _v4,
            initSeatsPurchase: _v4.seatsCount ?? _v18.MIN_PURCHASE_SEATS,
            onPurchaseSuccess: _v0 => {
              _v4 && _v4.onPurchaseSuccess && _v4.purchaseSeatModalLocation && (_v4.onPurchaseSuccess(_v0), _v11(_v22.makeMembershipCall[_v4.purchaseSeatModalLocation])), _v10(_v2.isFreeTrial ? _v12.NOTICE_TYPES.ADDED_SEATS_SUCCESSFULLY : _v12.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS);
            },
            onPurchaseFailure: _v4?.onPurchaseFailure,
            onClose: () => {
              _v12({
                action_type: _v18.BillingActionTypes.CLICK,
                location: _v18.BillingActionLocations.CLOSE_PURCHASE_SEATS_MODAL_BUTTON
              }), _v8({
                currentModalInDisplay: null,
                data: {
                  onPurchaseSuccess: () => null,
                  onPurchaseFailure: () => null
                }
              });
            },
            analyticsData: {
              teamInfo: _v5,
              folderId: null,
              clipId: null,
              priorSeats: _v2.nextCycle.seatCount || 0,
              subscriptionType: `${_v2.tier}, ${_v2.billingPeriod}`,
              planType: _v2.status,
              planTier: _v2.tier,
              isTrial: _v2.isFreeTrial
            },
            triggeredFrom: _v4?.purchaseSeatModalLocation
          });
        }
      case _v20.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL:
        {
          let _v0 = () => _v8({
            currentModalInDisplay: null
          });
          return _v4 && _v4.onClose && _v4.onClose(), (0, _v2.jsx)(_v15.default, {
            active: _v3 === _v20.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL,
            onClose: _v0,
            name: _v4?.removeMemberName || "",
            removeMember: () => {
              _v4 && _v4.deleteFromTeam && (_v4.deleteFromTeam(), _v9(1), _v4.removeMemberRole !== _v20.TeamRole.Viewer && _v7(_v1 + 1), _v15.enable_content_space_team_gate && 1 === _v5.currentTeamSize && _v5.untranslatedUserRole === _v20.TeamRole.Owner ? _v8({
                currentModalInDisplay: _v20.TeamManagementModals.BACK_ON_YOUR_OWN_MODAL
              }) : _v0());
            },
            removeMemberRole: _v4?.removeMemberRole,
            teamName: _v5.teamData.teamName ?? _v5.owner.name,
            hasPerSeatPricingModel: _v4?.hasPerSeatPricingModel,
            isLastCollaborator: 1 === _v5.currentTeamSize
          });
        }
      case _v20.TeamManagementModals.ADD_TO_FOLDERS_MODAL:
        {
          let _v0 = _v5.teamData.ownerId || _v0?.teamUser?.ownerId || 0;
          return (0, _v2.jsx)(_v4.AddToFoldersModal, {
            teamOwnerId: _v0,
            selectedTeamMembers: _v4.teamMembersToShareFolders || [],
            isOpen: _v3 === _v20.TeamManagementModals.ADD_TO_FOLDERS_MODAL,
            onSuccess: () => {
              _v8({
                currentModalInDisplay: null
              });
            },
            closeModal: () => {
              _v13({
                eventName: "vimeo.dismiss_distribution_options",
                contextOverrides: {
                  product: {
                    copy: "Cancel"
                  }
                }
              }) || (0, _v17.sendOverflowExitShareModalEvent)(_v0?.teamUser, _v0), _v8({
                currentModalInDisplay: null
              });
            }
          });
        }
      case _v20.TeamManagementModals.MANAGE_LEARNER_ID:
        {
          let _v0 = _v4.ownerId || _v5.teamData.ownerId || _v0?.teamUser?.ownerId || 0,
            _v1 = _v4.lmsUserEmail || "";
          return (0, _v2.jsx)(_v8.ManageLearnerModal, {
            onClose: () => {
              _v8({
                currentModalInDisplay: null
              });
            },
            ownerId: _v0,
            lmsUserEmail: _v1
          });
        }
      case _v20.TeamManagementModals.BACK_ON_YOUR_OWN_MODAL:
        {
          let _v0 = _v0?.teamUser?.ownerId ?? _v0?.user?.id;
          if (!_v0 || !_v0) return null;
          let _v1 = {
            apiUrl: _v0.apiUrl,
            jwt: _v0.jwt,
            ownerId: _v0
          };
          return (0, _v2.jsx)(_v7.BackOnYourOwnModal, {
            isOpen: _v3 === _v20.TeamManagementModals.BACK_ON_YOUR_OWN_MODAL,
            apiConfig: _v1,
            onClose: () => _v8({
              currentModalInDisplay: null
            }),
            onMerged: () => window.location.reload()
          });
        }
      case _v20.TeamManagementModals.ADMIN_LIMIT_UPSELL_MODAL:
        {
          let _v0 = _v2.tier === _v20.Tier.Production,
            _v1 = `team_admin_limit_${_v4.adminLimitEntryPoint ?? "role_selection"}`,
            _v2 = _v0 ? `/enterprise/contact-us?mkc=${_v19.TEAM_SEATS_UPGRADE}` : (0, _v11.buildUpgradePlanUrl)({
              paywallTrigger: _v1,
              paywallLocation: "teams_settings",
              paywallFeature: "team_admin_seats"
            }, {
              mkc: _v19.UPGRADE_ADD_TEAM
            });
          return (0, _v2.jsx)(_v6.AdminLimitUpsellModal, {
            cancelLabel: _v21.T.Cancel,
            isOpen: !0,
            message: _v21.T.AdminSeatLimitReached,
            onClose: () => _v8({
              currentModalInDisplay: null
            }),
            paywallStyle: _v0 ? "enterprise_modal" : "default_modal",
            paywallTrigger: _v1,
            primaryButtonLabel: _v0 ? _v21.T.ContactUs : _v21.T.UpgradeButton,
            title: _v21.T.AdminSeatLimitTitle,
            upgradeUrl: _v2
          });
        }
    }
    return null;
  });
  _v0.s(["default", 0, _v23], 0);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = _v24.default.div.withConfig({
    displayName: "Spinner__SpinnerWrapper",
    componentId: "sc-f09c4d20-0"
  })`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
  _v0.s(["Spinner", 0, () => (0, _v2.jsx)(_v26, {
    children: (0, _v2.jsx)(_v25.Spinner, {})
  })], 0);
}