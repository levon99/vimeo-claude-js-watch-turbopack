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
    _v29 = _v0.i(0);
  let _v30 = function (_v0, _v1 = 0) {
      if (null === _v0) return null;
      if (0 === _v0) return "0";
      _v1 = !_v1 || _v1 < 0 ? 0 : _v1;
      let _v2 = _v0.toPrecision(2).split("e"),
        _v3 = 1 === _v2.length ? 0 : Math.floor(Math.min(parseFloat(_v2[1].slice(1)), 14) / 3),
        _v4 = _v3 < 1 ? parseFloat(_v0.toFixed(0 + _v1)) : parseFloat((_v0 / Math.pow(10, 3 * _v3)).toFixed(1 + _v1));
      return (_v4 < 0 ? _v4 : Math.abs(_v4)) + ["", "k", "m", "b", "t"][_v3];
    },
    _v31 = _v0 => {
      let _v1 = _v0.substring(_v0.lastIndexOf("/") + 1);
      return _v26.TAB_IDS[_v1] ? _v26.TAB_IDS[_v1] : _v26.TAB_IDS.settings;
    },
    _v32 = {
      height: (0, _v7.rem)(28),
      margin: `${(0, _v7.rem)(6)} 0`,
      borderRadius: (0, _v7.rem)(10)
    },
    _v33 = ({
      children: _v0,
      ..._v1
    }) => (0, _v20.useIsBokeh)() ? (0, _v1.jsx)(_v6.Badge, {
      ..._v1,
      children: _v0
    }) : (0, _v1.jsx)(_v5.Box, {
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
          canShowSsoGroups: _v11,
          canManageBillingOnsite: _v12,
          hasManageTeamBillingSettingsPage: _v13,
          hasViewReviewPagePrivacyTeamSetting: _v14
        },
        teamInfo: _v15
      } = (0, _v3.useContext)(_v25.ManageTeamStateCtx),
      {
        data: _v16
      } = (0, _v21.useGetMePreferences)({
        select: ["dai"]
      }),
      _v17 = _v16?.dai === !0,
      {
        settings: _v18
      } = (0, _v22.useOrionSettings)(),
      {
        teamData: {
          ownerId: _v19 = null
        } = {}
      } = _v15,
      {
        contentSpaceEnabled: _v20
      } = (0, _v19.useContentSpaceEnabled)(_v19),
      {
        trackManageTeamPageView: _v21
      } = (0, _v3.useContext)(_v25.ManageTeamAnalytics),
      {
        updateTeamInfoTeamMembersCount: _v22
      } = (0, _v3.useContext)(_v25.ManageTeamDispatchCtx),
      _v23 = (0, _v2.useRouter)(),
      {
        selectedTab: _v24
      } = (() => {
        let {
            pathname: _v0
          } = (0, _v2.useRouter)(),
          _v1 = _v31(_v0),
          [_v2, _v3] = (0, _v3.useState)(_v1);
        return (0, _v3.useEffect)(() => {
          _v3(_v31(_v0));
        }, [_v0]), {
          selectedTab: _v2
        };
      })();
    (0, _v3.useEffect)(() => {
      _v22({
        ..._v15.teamMembersCount,
        unassigned: _v4.currentUnassignedSeatCount
      });
    }, [_v2]), (0, _v3.useEffect)(() => {
      _v2 || _v21({
        sub_feature: _v24
      });
    }, [_v24, _v2, _v15?.owner?.uri]);
    let _v25 = 2 + +!!_v11 + (_v10 && _v15.untranslatedUserRole === _v28.TeamRole.Owner ? 1 : 0) + +!!_v7,
      {
        count: _v26
      } = (0, _v23.useGetTeamGroupsCount)(_v19),
      _v27 = _v0 => _v23.push(`/manage/team/${_v0}`);
    return (0, _v1.jsxs)(_v5.Box, {
      style: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
      },
      children: [(0, _v1.jsx)(_v17.ResizableSideNav.Section, {
        children: (0, _v1.jsx)(_v5.Box, {
          as: "li",
          listStyleType: "none",
          children: (0, _v1.jsx)(_v24.MenuItem, {
            icon: (0, _v1.jsx)(_v13.ArrowLeft, {}),
            label: _v29.T.BackToHome,
            active: !1,
            dataId: "manage_team_side_nav_home_menu_item",
            onClick: () => _v23.push("/")
          })
        })
      }), (0, _v1.jsx)(_v17.ResizableSideNav.Divider, {}), (0, _v1.jsx)(_v17.ResizableSideNav.Section, {
        children: (0, _v1.jsx)(_v17.ResizableSideNav.MenuItems, {
          children: (_v10 ? _v15.untranslatedUserRole === _v28.TeamRole.Owner ? _v13 && (_v3 || _v1 || _v0 || _v2) : _v1 || _v2 : _v2) ? (0, _v1.jsx)(_v1.Fragment, {
            children: [...Array(_v25)].map((_v0, _v1) => (0, _v1.jsx)(_v18.LoadingBlock, {
              style: {
                ..._v32,
                width: "70%"
              }
            }, _v1))
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(_v10 ? !_v2 && !_v1 : !_v2) && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v8.PersonUserAdd, {}),
                label: `${_v29.T.Members}`,
                active: _v24 === _v26.TAB_IDS.members,
                dataId: "manage_team_side_nav_members_menu_item",
                onClick: () => _v27(_v26.TAB_IDS.members),
                action: (0, _v1.jsx)(_v33, {
                  size: "sm",
                  children: _v30(_v15.currentTeamSize)
                })
              })
            }), _v11 && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v12.Users, {}),
                label: `${_v29.T.Groups}`,
                active: _v24 === _v26.TAB_IDS.groups,
                dataId: "manage_team_side_nav_groups_menu_item",
                onClick: () => {
                  _v27(_v26.TAB_IDS.groups), _v4.GoogleTagManager.trackEvent(_v27.GTMEvent.SWITCH_TAB, {
                    tab_type: _v27.TAB_NAME.GROUP
                  });
                },
                action: _v26 ? (0, _v1.jsx)(_v33, {
                  size: "sm",
                  children: _v30(_v26)
                }) : void 0
              })
            }), (_v10 ? !_v2 && !_v1 : !_v2) && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v16.InfoCircle, {}),
                label: _v29.T.Basics,
                active: _v24 === _v26.TAB_IDS.branding || _v24 === _v26.TAB_IDS.basics,
                dataId: "manage_team_side_nav_branding_menu_item",
                onClick: () => {
                  _v27(_v26.TAB_IDS.basics), _v4.GoogleTagManager.trackEvent(_v27.GTMEvent.SWITCH_TAB, {
                    tab_type: _v27.TAB_NAME.SETTING
                  });
                }
              })
            }), (_v10 ? !_v2 && !_v1 : !_v2) && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v9.LogoBrand, {}),
                label: _v29.T.Brandkits,
                active: _v24 === _v26.TAB_IDS["brand-kits"],
                dataId: "manage_team_side_nav_brandkits_menu_item",
                onClick: () => {
                  _v27(_v26.TAB_IDS["brand-kits"]);
                }
              })
            }), _v6 && _v18.show_custom_metadata && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v10.CreateVideo, {}),
                label: _v29.T.CustomMetadata,
                active: _v24 === _v26.TAB_IDS["custom-metadata"],
                dataId: "manage_team_side_nav_custom_metadata_menu_item",
                onClick: () => {
                  _v27(_v26.TAB_IDS["custom-metadata"]);
                }
              })
            }), _v13 && _v12 && _v15.untranslatedUserRole === _v28.TeamRole.Owner && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v11.CreditCard, {}),
                label: _v29.T.Billing,
                active: _v24 === _v26.TAB_IDS.billing,
                dataId: "manage_team_side_nav_billing_menu_item",
                onClick: () => {
                  _v27(_v26.TAB_IDS.billing);
                }
              })
            }), (_v7 || _v5 || _v20 || _v9 || _v14) && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v14.SettingsGear, {}),
                label: _v29.T.Settings,
                active: _v24 === _v26.TAB_IDS.settings,
                dataId: "manage_team_side_nav_settings_menu_item",
                onClick: () => _v27(_v26.TAB_IDS.settings)
              })
            }), _v8 && !_v17 && (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v24.MenuItem, {
                icon: (0, _v1.jsx)(_v15.AiSparkles, {}),
                label: _v29.T.ManageAi,
                active: _v24 === _v26.TAB_IDS["manage-ai"],
                dataId: "manage_team_side_nav_manage_ai_menu_item",
                onClick: () => _v27(_v26.TAB_IDS["manage-ai"])
              })
            })]
          })
        })
      })]
    });
  }], 0);
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  _v0.s(["default", 0, ({
    active: _v0,
    onClose: _v1,
    name: _v2,
    removeMember: _v3,
    removeMemberRole: _v4,
    teamName: _v5,
    hasPerSeatPricingModel: _v6,
    isLastCollaborator: _v7 = !1
  }) => {
    let _v8 = !!_v4 && _v4 !== _v28.TeamRole.Viewer && _v6;
    return (0, _v1.jsxs)(_v39.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v45.ModalOverlay, {}), (0, _v1.jsxs)(_v42.ModalContent, {
        maxW: {
          base: "calc(100vw - 32px)",
          md: "488px"
        },
        children: [(0, _v1.jsxs)(_v44.ModalHeader, {
          children: [(0, _v1.jsxs)(_v38.Header, {
            size: "md",
            as: "h2",
            children: [_v7 ? _v29.T.RemoveLastCollaborator : _v29.T.RemoveTeamMember, "?"]
          }), (0, _v1.jsx)(_v46.Text, {
            variant: "body-md",
            color: "text-primary",
            mt: "sm",
            children: _v29.T.LooseAcess(_v2, _v5)
          })]
        }), (0, _v1.jsx)(_v41.ModalCloseButton, {
          onClick: _v1
        }), _v7 && (0, _v1.jsx)(_v40.ModalBody, {
          children: (0, _v1.jsx)(_v34.Alert, {
            status: "warning",
            size: "md",
            children: (0, _v1.jsx)(_v35.AlertDescription, {
              children: _v29.T.LastCollaboratorWarning
            })
          })
        }), (0, _v1.jsxs)(_v43.ModalFooter, {
          flexDirection: "column",
          alignItems: "stretch",
          gap: "md",
          children: [_v8 && (0, _v1.jsx)(_v46.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v29.T.ReassignSeats
          }), (0, _v1.jsxs)(_v37.Flex, {
            gap: 3,
            justifyContent: "flex-end",
            children: [(0, _v1.jsx)(_v36.Button, {
              variant: "tertiary",
              size: "md",
              onClick: _v1,
              children: _v29.T.Cancel
            }), (0, _v1.jsx)(_v36.Button, {
              variant: "destructive",
              size: "md",
              onClick: _v3,
              children: _v29.T.RemoveMember
            })]
          })]
        })]
      })]
    });
  }], 0);
}