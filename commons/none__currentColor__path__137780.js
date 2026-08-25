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
    _v24 = _v0.i(0);
  let _v25 = _v0 => (0, _v1.jsx)(_v24.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("g", {
      fill: "currentColor",
      children: (0, _v1.jsx)("path", {
        d: "m20.861 4.11 1.042.362-.004.002a.398.398 0 0 1 .245.505.386.386 0 0 1-.248.245l-1.037.361c-.458.16-.812.514-.972.972L19.526 7.6a.4.4 0 0 1-.508.243.386.386 0 0 1-.244-.25l-.36-1.037a1.569 1.569 0 0 0-.971-.971L16.4 5.222a.397.397 0 0 1 .014-.753l1.031-.358c.457-.16.81-.514.97-.972l.364-1.042a.395.395 0 0 1 .75.007l.36 1.035c.159.458.513.812.971.972ZM15.732 10.906l2.62.912.002-.002a.734.734 0 0 1 .45.929.72.72 0 0 1-.46.452l-2.612.91a4.209 4.209 0 0 0-2.61 2.607l-.91 2.622a.738.738 0 0 1-.923.453.71.71 0 0 1-.461-.465l-.906-2.608a4.215 4.215 0 0 0-2.608-2.608L4.697 13.2a.73.73 0 0 1 0-1.383l2.617-.91A4.21 4.21 0 0 0 9.922 8.3l.91-2.622a.72.72 0 0 1 .366-.416.733.733 0 0 1 1.015.42l.91 2.618a4.209 4.209 0 0 0 2.609 2.607Z"
      })
    })
  });
  var _v26 = _v0.i(0);
  let _v27 = _v0 => (0, _v1.jsx)(_v24.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm1 14c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4Zm-1-7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z",
      fill: "currentColor"
    })
  });
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = function (_v0, _v1 = 0) {
      if (null === _v0) return null;
      if (0 === _v0) return "0";
      _v1 = !_v1 || _v1 < 0 ? 0 : _v1;
      let _v2 = _v0.toPrecision(2).split("e"),
        _v3 = 1 === _v2.length ? 0 : Math.floor(Math.min(parseFloat(_v2[1].slice(1)), 14) / 3),
        _v4 = _v3 < 1 ? parseFloat(_v0.toFixed(0 + _v1)) : parseFloat((_v0 / Math.pow(10, 3 * _v3)).toFixed(1 + _v1));
      return (_v4 < 0 ? _v4 : Math.abs(_v4)) + ["", "k", "m", "b", "t"][_v3];
    },
    _v44 = _v0 => {
      if ("/manage/team/manage-ai" === _v0 || _v0.startsWith("/manage/team/manage-ai/")) return _v39.TAB_IDS["manage-ai"];
      let _v1 = _v0.substring(_v0.lastIndexOf("/") + 1);
      return _v1 in _v39.TAB_IDS ? _v39.TAB_IDS[_v1] : _v39.TAB_IDS.settings;
    },
    _v45 = {
      height: (0, _v8.rem)(28),
      margin: `${(0, _v8.rem)(6)} 0`,
      borderRadius: (0, _v8.rem)(10)
    },
    _v46 = ({
      children: _v0,
      ..._v1
    }) => (0, _v31.useIsBokeh)() ? (0, _v1.jsx)(_v7.Badge, {
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
      } = (0, _v3.useContext)(_v38.ManageTeamStateCtx),
      {
        data: _v16
      } = (0, _v32.useGetMePreferences)({
        select: ["dai"]
      }),
      _v17 = _v16?.dai === !0,
      {
        settings: _v18
      } = (0, _v33.useOrionSettings)(),
      {
        teamData: {
          ownerId: _v19 = null
        } = {}
      } = _v15,
      {
        contentSpaceEnabled: _v20
      } = (0, _v30.useContentSpaceEnabled)(_v19),
      {
        trackManageTeamPageView: _v21
      } = (0, _v3.useContext)(_v38.ManageTeamAnalytics),
      {
        updateTeamInfoTeamMembersCount: _v22
      } = (0, _v3.useContext)(_v38.ManageTeamDispatchCtx),
      _v23 = (0, _v2.useRouter)(),
      {
        selectedTab: _v24
      } = (() => {
        let {
            pathname: _v0
          } = (0, _v2.useRouter)(),
          _v1 = _v44(_v0),
          [_v2, _v3] = (0, _v3.useState)(_v1);
        return (0, _v3.useEffect)(() => {
          _v3(_v44(_v0));
        }, [_v0]), {
          selectedTab: _v2
        };
      })(),
      _v25 = (0, _v37.useSideNavCollapsed)(),
      _v26 = (0, _v9.useColorModeValue)("darkBlueAlpha.200", "stroke"),
      _v27 = (0, _v3.useMemo)(() => ({
        iconSize: (0, _v8.rem)(24),
        iconMarginRight: (0, _v8.rem)(12),
        borderRadius: (0, _v8.rem)(12),
        paddingX: (0, _v8.rem)(8),
        paddingLeft: (0, _v8.rem)(6)
      }), []);
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
    let _v28 = 2 + +!!_v11 + (_v10 && _v15.untranslatedUserRole === _v41.TeamRole.Owner ? 1 : 0) + +!!_v7,
      _v29 = () => _v10 ? _v15.untranslatedUserRole === _v41.TeamRole.Owner ? _v13 && (_v3 || _v1 || _v0 || _v2) : _v1 || _v2 : _v2,
      {
        count: _v30
      } = (0, _v34.useGetTeamGroupsCount)(_v19),
      _v31 = (0, _v3.useCallback)(_v0 => _v23.push(`/manage/team/${_v0}`), [_v23]),
      _v32 = (0, _v3.useMemo)(() => {
        let _v0 = _v10 ? !_v2 && !_v1 : !_v2;
        return [{
          key: _v39.TAB_IDS.members,
          icon: (0, _v1.jsx)(_v10.PersonUserAdd, {}),
          activeIcon: (0, _v1.jsx)(_v11.PersonUserAddFilled, {}),
          label: `${_v42.T.Members}`,
          active: _v24 === _v39.TAB_IDS.members,
          dataId: "manage_team_side_nav_members_menu_item",
          visible: _v0,
          onClick: () => _v31(_v39.TAB_IDS.members),
          action: (0, _v1.jsx)(_v46, {
            size: "sm",
            children: _v43(_v15.currentTeamSize)
          })
        }, {
          key: _v39.TAB_IDS.groups,
          icon: (0, _v1.jsx)(_v18.Users, {}),
          activeIcon: (0, _v1.jsx)(_v19.UsersFilled, {}),
          label: `${_v42.T.Groups}`,
          active: _v24 === _v39.TAB_IDS.groups,
          dataId: "manage_team_side_nav_groups_menu_item",
          visible: !!_v11,
          onClick: () => {
            _v31(_v39.TAB_IDS.groups), _v4.GoogleTagManager.trackEvent(_v40.GTMEvent.SWITCH_TAB, {
              tab_type: _v40.TAB_NAME.GROUP
            });
          },
          action: _v30 ? (0, _v1.jsx)(_v46, {
            size: "sm",
            children: _v43(_v30)
          }) : void 0
        }, {
          key: _v39.TAB_IDS.basics,
          icon: (0, _v1.jsx)(_v26.InfoCircle, {}),
          activeIcon: (0, _v1.jsx)(_v27, {}),
          label: _v42.T.Basics,
          active: _v24 === _v39.TAB_IDS.branding || _v24 === _v39.TAB_IDS.basics,
          dataId: "manage_team_side_nav_branding_menu_item",
          visible: _v0,
          onClick: () => {
            _v31(_v39.TAB_IDS.basics), _v4.GoogleTagManager.trackEvent(_v40.GTMEvent.SWITCH_TAB, {
              tab_type: _v40.TAB_NAME.SETTING
            });
          }
        }, {
          key: _v39.TAB_IDS["brand-kits"],
          icon: (0, _v1.jsx)(_v12.LogoBrand, {}),
          activeIcon: (0, _v1.jsx)(_v13.LogoBrandFilled, {}),
          label: _v42.T.Brandkits,
          active: _v24 === _v39.TAB_IDS["brand-kits"],
          dataId: "manage_team_side_nav_brandkits_menu_item",
          visible: _v0,
          onClick: () => _v31(_v39.TAB_IDS["brand-kits"])
        }, {
          key: _v39.TAB_IDS["custom-metadata"],
          icon: (0, _v1.jsx)(_v14.CreateVideo, {}),
          activeIcon: (0, _v1.jsx)(_v15.CreateVideoFilled, {}),
          label: _v42.T.CustomMetadata,
          active: _v24 === _v39.TAB_IDS["custom-metadata"],
          dataId: "manage_team_side_nav_custom_metadata_menu_item",
          visible: !!(_v6 && _v18.show_custom_metadata),
          onClick: () => _v31(_v39.TAB_IDS["custom-metadata"])
        }, {
          key: _v39.TAB_IDS.billing,
          icon: (0, _v1.jsx)(_v16.CreditCard, {}),
          activeIcon: (0, _v1.jsx)(_v17.CreditCardFilled, {}),
          label: _v42.T.Billing,
          active: _v24 === _v39.TAB_IDS.billing,
          dataId: "manage_team_side_nav_billing_menu_item",
          visible: !!(_v13 && _v12 && _v15.untranslatedUserRole === _v41.TeamRole.Owner),
          onClick: () => _v31(_v39.TAB_IDS.billing)
        }, {
          key: _v39.TAB_IDS.settings,
          icon: (0, _v1.jsx)(_v21.SettingsGear, {}),
          activeIcon: (0, _v1.jsx)(_v22.SettingsGearFilled, {}),
          label: _v42.T.Settings,
          active: _v24 === _v39.TAB_IDS.settings,
          dataId: "manage_team_side_nav_settings_menu_item",
          visible: !!(_v7 || _v5 || _v20 || _v9 || _v14),
          onClick: () => _v31(_v39.TAB_IDS.settings)
        }, {
          key: _v39.TAB_IDS["manage-ai"],
          icon: (0, _v1.jsx)(_v23.AiSparkles, {}),
          activeIcon: (0, _v1.jsx)(_v25, {}),
          label: _v42.T.ManageAi,
          active: _v24 === _v39.TAB_IDS["manage-ai"],
          dataId: "manage_team_side_nav_manage_ai_menu_item",
          visible: !!(_v8 && !_v17),
          onClick: () => _v31(_v39.TAB_IDS["manage-ai"])
        }].filter(_v0 => _v0.visible);
      }, [_v24, _v10, _v2, _v1, _v15.currentTeamSize, _v15.untranslatedUserRole, _v30, _v11, _v6, _v18.show_custom_metadata, _v13, _v12, _v7, _v5, _v20, _v9, _v14, _v8, _v17, _v31]);
    return _v25 ? (0, _v1.jsxs)(_v6.Flex, {
      flexDirection: "column",
      gap: (0, _v8.rem)(2),
      alignItems: "center",
      paddingTop: (0, _v8.rem)(8),
      children: [(0, _v1.jsx)(_v36.PrimaryNavItem, {
        variant: "icons",
        item: {
          key: "back",
          icon: (0, _v1.jsx)(_v20.ArrowLeft, {}),
          label: _v42.T.BackToHome,
          dataId: "manage_team_side_nav_home_menu_item",
          onClick: () => _v23.push("/")
        }
      }), (0, _v1.jsx)(_v5.Box, {
        width: (0, _v8.rem)(40),
        height: "1px",
        bg: _v26,
        marginY: (0, _v8.rem)(8)
      }), _v29() ? [...Array(_v28)].map((_v0, _v1) => (0, _v1.jsx)(_v29.LoadingBlock, {
        style: {
          width: (0, _v8.rem)(40),
          height: (0, _v8.rem)(40),
          borderRadius: (0, _v8.rem)(12)
        }
      }, _v1)) : _v32.map(_v0 => (0, _v1.jsx)(_v36.PrimaryNavItem, {
        variant: "icons",
        item: {
          key: _v0.key,
          icon: _v0.active ? _v0.activeIcon : _v0.icon,
          label: _v0.label,
          active: _v0.active,
          dataId: _v0.dataId,
          onClick: _v0.onClick
        }
      }, _v0.key))]
    }) : (0, _v1.jsxs)(_v5.Box, {
      style: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
      },
      children: [(0, _v1.jsx)(_v28.ResizableSideNav.Section, {
        children: (0, _v1.jsx)(_v5.Box, {
          as: "li",
          listStyleType: "none",
          children: (0, _v1.jsx)(_v35.MenuItem, {
            icon: (0, _v1.jsx)(_v20.ArrowLeft, {}),
            ..._v27,
            label: _v42.T.BackToHome,
            active: !1,
            dataId: "manage_team_side_nav_home_menu_item",
            onClick: () => _v23.push("/")
          })
        })
      }), (0, _v1.jsx)(_v28.ResizableSideNav.Divider, {
        my: (0, _v8.rem)(2)
      }), (0, _v1.jsx)(_v28.ResizableSideNav.Section, {
        children: (0, _v1.jsx)(_v28.ResizableSideNav.MenuItems, {
          customStyles: {
            gap: (0, _v8.rem)(2)
          },
          children: _v29() ? (0, _v1.jsx)(_v1.Fragment, {
            children: [...Array(_v28)].map((_v0, _v1) => (0, _v1.jsx)(_v29.LoadingBlock, {
              style: {
                ..._v45,
                width: "70%"
              }
            }, _v1))
          }) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v32.map(_v0 => (0, _v1.jsx)(_v5.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v1.jsx)(_v35.MenuItem, {
                icon: _v0.active ? _v0.activeIcon : _v0.icon,
                ..._v27,
                label: _v0.label,
                active: _v0.active,
                dataId: _v0.dataId,
                onClick: _v0.onClick,
                action: _v0.action
              })
            }, _v0.key))
          })
        })
      })]
    });
  }], 0);
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
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
    let _v8 = !!_v4 && _v4 !== _v41.TeamRole.Viewer && _v6;
    return (0, _v1.jsxs)(_v51.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v57.ModalOverlay, {}), (0, _v1.jsxs)(_v54.ModalContent, {
        maxW: {
          base: "calc(100vw - 32px)",
          md: "488px"
        },
        children: [(0, _v1.jsxs)(_v56.ModalHeader, {
          children: [(0, _v1.jsxs)(_v50.Header, {
            size: "md",
            as: "h2",
            children: [_v7 ? _v42.T.RemoveLastCollaborator : _v42.T.RemoveTeamMember, "?"]
          }), (0, _v1.jsx)(_v58.Text, {
            variant: "body-md",
            color: "text-primary",
            mt: "sm",
            children: _v42.T.LooseAcess(_v2, _v5)
          })]
        }), (0, _v1.jsx)(_v53.ModalCloseButton, {
          onClick: _v1
        }), _v7 && (0, _v1.jsx)(_v52.ModalBody, {
          pb: "sm",
          children: (0, _v1.jsx)(_v47.Alert, {
            status: "warning",
            size: "md",
            children: (0, _v1.jsx)(_v48.AlertDescription, {
              children: _v42.T.LastCollaboratorWarning
            })
          })
        }), (0, _v1.jsxs)(_v55.ModalFooter, {
          flexDirection: "column",
          alignItems: "stretch",
          gap: "md",
          pt: "md",
          children: [_v8 && (0, _v1.jsx)(_v58.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v42.T.ReassignSeats
          }), (0, _v1.jsxs)(_v6.Flex, {
            gap: 3,
            justifyContent: "flex-end",
            children: [(0, _v1.jsx)(_v49.Button, {
              variant: "tertiary",
              size: "md",
              onClick: _v1,
              children: _v42.T.Cancel
            }), (0, _v1.jsx)(_v49.Button, {
              variant: "destructive",
              size: "md",
              onClick: _v3,
              children: _v42.T.RemoveMember
            })]
          })]
        })]
      })]
    });
  }], 0);
}