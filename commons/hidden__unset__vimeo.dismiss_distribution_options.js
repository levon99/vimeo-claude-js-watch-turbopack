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
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = _v4.default.memo(() => {
    let _v0 = (0, _v4.useContext)(_v31.ViewerContext),
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
      } = (0, _v4.useContext)(_v33.ManageTeamStateCtx),
      {
        updateInvitesRemaining: _v7,
        updateModalToDisplay: _v8,
        removeUnassignedSeats: _v9,
        updateTeamsPageNotice: _v10,
        updateIsMembershipLoading: _v11
      } = (0, _v4.useContext)(_v33.ManageTeamDispatchCtx),
      {
        trackBillingAction: _v12
      } = (0, _v4.useContext)(_v33.ManageTeamAnalytics),
      {
        sendDistributionAnalyticsEvent: _v13
      } = (0, _v26.useDistributionAnalyticsEvent)(),
      {
        isBlocked: _v14
      } = (0, _v28.useIsSeatChangeBlocked)({
        tier: _v2.tier
      }),
      _v15 = _v2.tier === _v36.Tier.Creator || _v14;
    switch ((0, _v4.useEffect)(() => {
      if (_v3 === _v36.TeamManagementModals.PURCHASE_SEATS_MODAL) {
        if (_v15) return void _v8({
          currentModalInDisplay: null
        });
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "unset";
    }, [_v3, _v15, _v8]), _v3) {
      case _v36.TeamManagementModals.PURCHASE_SEATS_MODAL:
        {
          if (_v15) return null;
          let {
              teamData: _v0
            } = _v5,
            _v1 = _v0?.user?.id || _v0?.teamUser?.ownerId || 0,
            _v2 = _v0.ownerId || _v0?.teamUser?.ownerId || 0,
            _v3 = _v2.seatCapTrial || _v5.seatDetails?.basePlanCount || 0,
            _v4 = Math.max(0, (_v2.isFreeTrial ? _v3 : _v2.seatCapPaid) - (_v5.maxTeamSize || _v2.seatCount));
          return (0, _v2.jsx)(_v30.PurchaseSeatsModal, {
            canUsePaymentsService: !!_v6,
            isActive: _v3 === _v36.TeamManagementModals.PURCHASE_SEATS_MODAL,
            isTrial: _v2.isFreeTrial,
            productId: String(_v2.productId),
            userId: _v1,
            ownerId: _v2,
            minSeatsPurchase: _v35.MIN_PURCHASE_SEATS,
            maxSeatsPurchase: _v4,
            initSeatsPurchase: _v4.seatsCount ?? _v35.MIN_PURCHASE_SEATS,
            onPurchaseSuccess: _v0 => {
              _v4 && _v4.onPurchaseSuccess && _v4.purchaseSeatModalLocation && (_v4.onPurchaseSuccess(_v0), _v11(_v37.makeMembershipCall[_v4.purchaseSeatModalLocation])), _v10(_v2.isFreeTrial ? _v29.NOTICE_TYPES.ADDED_SEATS_SUCCESSFULLY : _v29.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS);
            },
            onPurchaseFailure: _v4?.onPurchaseFailure,
            onClose: () => {
              _v12({
                action_type: _v35.BillingActionTypes.CLICK,
                location: _v35.BillingActionLocations.CLOSE_PURCHASE_SEATS_MODAL_BUTTON
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
      case _v36.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL:
        {
          let _v0 = () => _v8({
            currentModalInDisplay: null
          });
          return _v4 && _v4.onClose && _v4.onClose(), (0, _v2.jsx)(_v32.default, {
            active: _v3 === _v36.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL,
            onClose: _v0,
            name: _v4?.removeMemberName || "",
            removeMember: () => {
              _v4 && _v4.deleteFromTeam && (_v4.deleteFromTeam(), _v9(1), _v4.removeMemberRole !== _v36.TeamRole.Viewer && _v7(_v1 + 1), _v0());
            },
            removeMemberRole: _v4?.removeMemberRole,
            teamName: _v5.teamData.teamName ?? _v5.owner.name,
            hasPerSeatPricingModel: _v4?.hasPerSeatPricingModel
          });
        }
      case _v36.TeamManagementModals.ADD_TO_FOLDERS_MODAL:
        {
          let _v0 = _v5.teamData.ownerId || _v0?.teamUser?.ownerId || 0;
          return (0, _v2.jsx)(_v25.AddToFoldersModal, {
            teamOwnerId: _v0,
            selectedTeamMembers: _v4.teamMembersToShareFolders || [],
            isOpen: _v3 === _v36.TeamManagementModals.ADD_TO_FOLDERS_MODAL,
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
              }) || (0, _v34.sendOverflowExitShareModalEvent)(_v0?.teamUser, _v0), _v8({
                currentModalInDisplay: null
              });
            }
          });
        }
      case _v36.TeamManagementModals.MANAGE_LEARNER_ID:
        {
          let _v0 = _v4.ownerId || _v5.teamData.ownerId || _v0?.teamUser?.ownerId || 0,
            _v1 = _v4.lmsUserEmail || "";
          return (0, _v2.jsx)(_v27.ManageLearnerModal, {
            onClose: () => {
              _v8({
                currentModalInDisplay: null
              });
            },
            ownerId: _v0,
            lmsUserEmail: _v1
          });
        }
    }
    return null;
  });
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = function (_v0, _v1 = 0) {
      if (null === _v0) return null;
      if (0 === _v0) return "0";
      _v1 = !_v1 || _v1 < 0 ? 0 : _v1;
      let _v2 = _v0.toPrecision(2).split("e"),
        _v3 = 1 === _v2.length ? 0 : Math.floor(Math.min(parseFloat(_v2[1].slice(1)), 14) / 3),
        _v4 = _v3 < 1 ? parseFloat(_v0.toFixed(0 + _v1)) : parseFloat((_v0 / Math.pow(10, 3 * _v3)).toFixed(1 + _v1));
      return (_v4 < 0 ? _v4 : Math.abs(_v4)) + ["", "k", "m", "b", "t"][_v3];
    },
    _v42 = _v0 => {
      let _v1 = _v0.substring(_v0.lastIndexOf("/") + 1);
      return _v35.TAB_IDS[_v1] ? _v35.TAB_IDS[_v1] : _v35.TAB_IDS.settings;
    },
    _v43 = {
      height: (0, _v8.rem)(28),
      margin: `${(0, _v8.rem)(6)} 0`,
      borderRadius: (0, _v8.rem)(10)
    },
    _v44 = ({
      children: _v0,
      ..._v1
    }) => (0, _v20.useIsBokeh)() ? (0, _v2.jsx)(_v7.Badge, {
      ..._v1,
      children: _v0
    }) : (0, _v2.jsx)(_v6.Box, {
      as: "span",
      width: "max-content",
      height: "1.25rem",
      color: "whiteAlpha.0",
      backgroundColor: "gray.500",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      letterSpacing: "body-sm",
      boxSizing: "border-box",
      paddingInline: "xs",
      borderColor: "gray.500",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "xs",
      fontSize: "text-xs",
      fontWeight: "medium",
      children: _v0
    });
  _v0.s(["ManageTeamSideNavContent", 0, () => {
    let {
        isFetchPaymentMethodsLoading: _v0,
        isMembershipInfoLoading: _v1,
        isTeamInfoLoading: _v2,
        isUploadQuotaLoading: _v3,
        membership: _v4,
        teamCapabilities: {
          hasDataRetention: _v5,
          hasEnterprise: _v6,
          hasLegalHoldsActive: _v7,
          canSeeAiSettings: _v8,
          canViewSsoTeamSettings: _v9,
          hasPerSeatPricingModelTeamMember: _v10,
          hasContentSpaceEnabled: _v11,
          canShowSsoGroups: _v12,
          canManageBillingOnsite: _v13,
          hasManageTeamBillingSettingsPage: _v14,
          hasViewReviewPagePrivacyTeamSetting: _v15
        },
        teamInfo: _v16
      } = (0, _v4.useContext)(_v33.ManageTeamStateCtx),
      {
        data: _v17
      } = (0, _v21.useGetMePreferences)({
        select: ["dai"]
      }),
      _v18 = _v17?.dai === !0,
      {
        settings: _v19
      } = (0, _v22.useOrionSettings)(),
      {
        teamData: {
          ownerId: _v20 = null
        } = {}
      } = _v16,
      {
        trackManageTeamPageView: _v21
      } = (0, _v4.useContext)(_v33.ManageTeamAnalytics),
      {
        updateTeamInfoTeamMembersCount: _v22
      } = (0, _v4.useContext)(_v33.ManageTeamDispatchCtx),
      _v23 = (0, _v3.useRouter)(),
      {
        selectedTab: _v24
      } = (() => {
        let {
            pathname: _v0
          } = (0, _v3.useRouter)(),
          _v1 = _v42(_v0),
          [_v2, _v3] = (0, _v4.useState)(_v1);
        return (0, _v4.useEffect)(() => {
          _v3(_v42(_v0));
        }, [_v0]), {
          selectedTab: _v2
        };
      })();
    (0, _v4.useEffect)(() => {
      _v22({
        ..._v16.teamMembersCount,
        unassigned: _v4.currentUnassignedSeatCount
      });
    }, [_v2]), (0, _v4.useEffect)(() => {
      _v2 || _v21({
        sub_feature: _v24
      });
    }, [_v24, _v2, _v16?.owner?.uri]);
    let _v25 = 2 + +!!_v12 + (_v10 && _v16.untranslatedUserRole === _v36.TeamRole.Owner ? 1 : 0) + +!!_v7,
      {
        count: _v26
      } = (0, _v23.useGetTeamGroupsCount)(_v20),
      _v27 = _v0 => _v23.push(`/manage/team/${_v0}`);
    return (0, _v2.jsxs)(_v6.Box, {
      style: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
      },
      children: [(0, _v2.jsx)(_v18.ResizableSideNav.Section, {
        children: (0, _v2.jsx)(_v6.Box, {
          as: "li",
          listStyleType: "none",
          children: (0, _v2.jsx)(_v24.MenuItem, {
            icon: (0, _v2.jsx)(_v14.ArrowLeft, {}),
            label: _v40.T.BackToHome,
            active: !1,
            dataId: "manage_team_side_nav_home_menu_item",
            onClick: () => _v23.push("/")
          })
        })
      }), (0, _v2.jsx)(_v18.ResizableSideNav.Divider, {}), (0, _v2.jsx)(_v18.ResizableSideNav.Section, {
        children: (0, _v2.jsx)(_v18.ResizableSideNav.MenuItems, {
          children: (_v10 ? _v16.untranslatedUserRole === _v36.TeamRole.Owner ? _v14 && (_v3 || _v1 || _v0 || _v2) : _v1 || _v2 : _v2) ? (0, _v2.jsx)(_v2.Fragment, {
            children: [...Array(_v25)].map((_v0, _v1) => (0, _v2.jsx)(_v19.LoadingBlock, {
              style: {
                ..._v43,
                width: "70%"
              }
            }, _v1))
          }) : (0, _v2.jsxs)(_v2.Fragment, {
            children: [(_v10 ? !_v2 && !_v1 : !_v2) && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v9.PersonUserAdd, {}),
                label: `${_v40.T.Members}`,
                active: _v24 === _v35.TAB_IDS.members,
                dataId: "manage_team_side_nav_members_menu_item",
                onClick: () => _v27(_v35.TAB_IDS.members),
                action: (0, _v2.jsx)(_v44, {
                  size: "sm",
                  children: _v41(_v16.currentTeamSize)
                })
              })
            }), _v12 && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v13.Users, {}),
                label: `${_v40.T.Groups}`,
                active: _v24 === _v35.TAB_IDS.groups,
                dataId: "manage_team_side_nav_groups_menu_item",
                onClick: () => {
                  _v27(_v35.TAB_IDS.groups), _v5.GoogleTagManager.trackEvent(_v39.GTMEvent.SWITCH_TAB, {
                    tab_type: _v39.TAB_NAME.GROUP
                  });
                },
                action: _v26 ? (0, _v2.jsx)(_v44, {
                  size: "sm",
                  children: _v41(_v26)
                }) : void 0
              })
            }), (_v10 ? !_v2 && !_v1 : !_v2) && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v17.InfoCircle, {}),
                label: _v40.T.Basics,
                active: _v24 === _v35.TAB_IDS.branding || _v24 === _v35.TAB_IDS.basics,
                dataId: "manage_team_side_nav_branding_menu_item",
                onClick: () => {
                  _v27(_v35.TAB_IDS.basics), _v5.GoogleTagManager.trackEvent(_v39.GTMEvent.SWITCH_TAB, {
                    tab_type: _v39.TAB_NAME.SETTING
                  });
                }
              })
            }), (_v10 ? !_v2 && !_v1 : !_v2) && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v10.LogoBrand, {}),
                label: _v40.T.Brandkits,
                active: _v24 === _v35.TAB_IDS["brand-kits"],
                dataId: "manage_team_side_nav_brandkits_menu_item",
                onClick: () => {
                  _v27(_v35.TAB_IDS["brand-kits"]);
                }
              })
            }), _v6 && _v19.show_custom_metadata && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v11.CreateVideo, {}),
                label: _v40.T.CustomMetadata,
                active: _v24 === _v35.TAB_IDS["custom-metadata"],
                dataId: "manage_team_side_nav_custom_metadata_menu_item",
                onClick: () => {
                  _v27(_v35.TAB_IDS["custom-metadata"]);
                }
              })
            }), _v14 && _v13 && _v16.untranslatedUserRole === _v36.TeamRole.Owner && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v12.CreditCard, {}),
                label: _v40.T.Billing,
                active: _v24 === _v35.TAB_IDS.billing,
                dataId: "manage_team_side_nav_billing_menu_item",
                onClick: () => {
                  _v27(_v35.TAB_IDS.billing);
                }
              })
            }), (_v7 || _v5 || _v11 || _v9 || _v15) && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v15.SettingsGear, {}),
                label: _v40.T.Settings,
                active: _v24 === _v35.TAB_IDS.settings,
                dataId: "manage_team_side_nav_settings_menu_item",
                onClick: () => _v27(_v35.TAB_IDS.settings)
              })
            }), _v8 && !_v18 && (0, _v2.jsx)(_v6.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v2.jsx)(_v24.MenuItem, {
                icon: (0, _v2.jsx)(_v16.AiSparkles, {}),
                label: _v40.T.ManageAi,
                active: _v24 === _v35.TAB_IDS["manage-ai"],
                dataId: "manage_team_side_nav_manage_ai_menu_item",
                onClick: () => _v27(_v35.TAB_IDS["manage-ai"])
              })
            })]
          })
        })
      }), (0, _v2.jsx)(_v38, {})]
    });
  }], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v45.default.div.withConfig({
    displayName: "Spinner__SpinnerWrapper",
    componentId: "sc-f09c4d20-0"
  })`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
  _v0.s(["Spinner", 0, () => (0, _v2.jsx)(_v47, {
    children: (0, _v2.jsx)(_v46.Spinner, {})
  })], 0);
  var _v48 = ((_v1 = {}).TEAM_SEATS_UPGRADE = "team_seats_upgrade", _v1.UPGRADE_ADD_TEAM = "368ip_mt_add_team", _v1);
  _v0.s(["MKCCodes", () => _v48], 0);
}