{
  "use strict";

  var _v1,
    _v2 = _v0.i(0);
  _v0.s(["usePaymentMethods", () => _v2.default], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = _v0 => (0, _v3.jsx)(_v13.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("g", {
      fill: "currentColor",
      children: (0, _v3.jsx)("path", {
        d: "M5.75 7.265a4.265 4.265 0 1 1 8.53 0 4.265 4.265 0 0 1-8.53 0ZM4.29 14.122c1.327-1.023 3.093-1.643 4.913-1.643h.035l.034.003c.173.012.655.006 1.059.002.184-.003.351-.005.466-.005 1.82 0 3.586.62 4.913 1.643 1.325 1.02 2.29 2.512 2.29 4.256 0 1.51-1.282 2.632-2.734 2.632H4.734C3.282 21.01 2 19.887 2 18.377c0-1.743.965-3.234 2.29-4.255ZM19.5 8a1 1 0 1 0-2 0v1.5H16a1 1 0 1 0 0 2h1.5V13a1 1 0 1 0 2 0v-1.5H21a1 1 0 1 0 0-2h-1.5V8Z"
      })
    })
  });
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = _v0 => (0, _v3.jsx)(_v13.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("path", {
      d: "M2 17c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-6H2v6Zm3-4h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1Zm14-8H5C3.3 5 2 6.3 2 8v1h20V8c0-1.7-1.3-3-3-3Z",
      fill: "currentColor"
    })
  });
  var _v21 = _v0.i(0),
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
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = ["workspace", "user_workspace"],
    _v53 = ["recordType", "teamOwnerId"];
  function _v54(_v0) {
    let {
        teamCapabilities: {
          hasEnterprise: _v1,
          loading: _v2
        },
        teamInfo: {
          teamData: {
            ownerId: _v3
          }
        }
      } = (0, _v5.useContext)(_v47.ManageTeamStateCtx),
      {
        isWorkspace: _v4,
        isLoading: _v5
      } = function (_v0) {
        let _v1 = (0, _v51.useViewer)(),
          _v2 = _v1?.user?.id,
          {
            data: _v3,
            isLoading: _v4
          } = (0, _v50.useGetUserWorkspaces)(() => _v2 ? {
            where: {
              userId: _v2
            },
            select: _v53
          } : null, {
            revalidateOnFocus: !1,
            revalidateIfStale: !1
          });
        if (_v4 || !_v2 || !_v0 || void 0 === _v3) return {
          isWorkspace: void 0,
          isLoading: !0
        };
        let _v5 = _v3.data?.find(_v0 => _v0.teamOwnerId === _v0);
        return {
          isWorkspace: _v5 ? _v52.includes(_v5.recordType) : void 0,
          isLoading: !1
        };
      }(_v3);
    return _v2 || _v5 ? {
      status: "loading"
    } : {
      status: _v0 && _v1 && !0 !== _v4 ? "available" : "unavailable"
    };
  }
  function _v55() {
    let _v0 = (0, _v49.useOrionSetting)("enable_team_defaults_page"),
      _v1 = (0, _v48.useOrionLoading)(),
      _v2 = _v54(_v0);
    return _v1 ? {
      status: "loading"
    } : _v2;
  }
  function _v56() {
    let _v0 = (0, _v49.useOrionSetting)("enable_team_presets_page"),
      _v1 = (0, _v48.useOrionLoading)(),
      _v2 = _v54(_v0);
    return _v1 ? {
      status: "loading"
    } : _v2;
  }
  _v0.s(["useTeamDefaultsPageAvailability", 0, _v55], 0), _v0.s(["useTeamPresetsPageAvailability", 0, _v56], 0);
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = function (_v0, _v1 = 0) {
      if (null === _v0) return null;
      if (0 === _v0) return "0";
      _v1 = !_v1 || _v1 < 0 ? 0 : _v1;
      let _v2 = _v0.toPrecision(2).split("e"),
        _v3 = 1 === _v2.length ? 0 : Math.floor(Math.min(parseFloat(_v2[1].slice(1)), 14) / 3),
        _v4 = _v3 < 1 ? parseFloat(_v0.toFixed(0 + _v1)) : parseFloat((_v0 / Math.pow(10, 3 * _v3)).toFixed(1 + _v1));
      return (_v4 < 0 ? _v4 : Math.abs(_v4)) + ["", "k", "m", "b", "t"][_v3];
    },
    _v62 = _v0 => {
      if ("/manage/team/manage-ai" === _v0 || _v0.startsWith("/manage/team/manage-ai/")) return _v57.TAB_IDS["manage-ai"];
      let _v1 = _v0.substring(_v0.lastIndexOf("/") + 1);
      return _v1 in _v57.TAB_IDS ? _v57.TAB_IDS[_v1] : _v57.TAB_IDS.settings;
    },
    _v63 = {
      height: (0, _v10.rem)(28),
      margin: `${(0, _v10.rem)(6)} 0`,
      borderRadius: (0, _v10.rem)(10)
    },
    _v64 = ({
      children: _v0,
      ..._v1
    }) => (0, _v39.useIsBokeh)() ? (0, _v3.jsx)(_v9.Badge, {
      ..._v1,
      children: _v0
    }) : (0, _v3.jsx)(_v7.Box, {
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
      } = (0, _v5.useContext)(_v47.ManageTeamStateCtx),
      {
        data: _v16
      } = (0, _v40.useGetMePreferences)({
        select: ["dai"]
      }),
      _v17 = _v16?.dai === !0,
      {
        show_ai_credits_revamp: _v18,
        show_custom_metadata: _v19
      } = (0, _v42.useOrionSettingsFields)(["show_ai_credits_revamp", "show_custom_metadata"]),
      {
        teamData: {
          ownerId: _v20 = null
        } = {}
      } = _v15,
      {
        contentSpaceEnabled: _v21
      } = (0, _v38.useContentSpaceEnabled)(_v20),
      _v22 = _v55(),
      _v23 = _v56(),
      {
        trackManageTeamPageView: _v24
      } = (0, _v5.useContext)(_v47.ManageTeamAnalytics),
      {
        updateTeamInfoTeamMembersCount: _v25
      } = (0, _v5.useContext)(_v47.ManageTeamDispatchCtx),
      _v26 = (0, _v4.useRouter)(),
      {
        selectedTab: _v27
      } = (() => {
        let {
            pathname: _v0
          } = (0, _v4.useRouter)(),
          _v1 = _v62(_v0),
          [_v2, _v3] = (0, _v5.useState)(_v1);
        return (0, _v5.useEffect)(() => {
          _v3(_v62(_v0));
        }, [_v0]), {
          selectedTab: _v2
        };
      })(),
      _v28 = (0, _v46.useSideNavCollapsed)(),
      _v29 = (0, _v11.useColorModeValue)("darkBlueAlpha.200", "stroke"),
      _v30 = (0, _v5.useMemo)(() => ({
        iconSize: (0, _v10.rem)(24),
        iconMarginRight: (0, _v10.rem)(12),
        borderRadius: (0, _v10.rem)(12),
        paddingX: (0, _v10.rem)(8),
        paddingLeft: (0, _v10.rem)(6)
      }), []);
    (0, _v5.useEffect)(() => {
      _v25({
        ..._v15.teamMembersCount,
        unassigned: _v4.currentUnassignedSeatCount
      });
    }, [_v2]), (0, _v5.useEffect)(() => {
      _v2 || _v24({
        sub_feature: _v27
      });
    }, [_v27, _v2, _v15?.owner?.uri]);
    let _v31 = 2 + (_v6 && _v18 ? 1 : 0) + +!!_v11 + (_v10 && _v15.untranslatedUserRole === _v59.TeamRole.Owner ? 1 : 0) + +!!_v7,
      _v32 = () => _v10 ? _v15.untranslatedUserRole === _v59.TeamRole.Owner ? _v13 && (_v3 || _v1 || _v0 || _v2) : _v1 || _v2 : _v2,
      {
        count: _v33
      } = (0, _v43.useGetTeamGroupsCount)(_v20),
      _v34 = (0, _v5.useCallback)(_v0 => {
        _v26.push(`/manage/team/${_v0}`);
      }, [_v26]),
      _v35 = (0, _v5.useMemo)(() => {
        let _v0 = _v10 ? !_v2 && !_v1 : !_v2;
        return [{
          key: _v57.TAB_IDS.members,
          icon: (0, _v3.jsx)(_v12.PersonUserAdd, {}),
          activeIcon: (0, _v3.jsx)(_v14, {}),
          label: `${_v60.T.Members}`,
          active: _v27 === _v57.TAB_IDS.members,
          dataId: "manage_team_side_nav_members_menu_item",
          visible: _v0,
          onClick: () => _v34(_v57.TAB_IDS.members),
          action: (0, _v3.jsx)(_v64, {
            size: "sm",
            children: _v61(_v15.currentTeamSize)
          })
        }, {
          key: _v57.TAB_IDS.groups,
          icon: (0, _v3.jsx)(_v25.Users, {}),
          activeIcon: (0, _v3.jsx)(_v26.UsersFilled, {}),
          label: `${_v60.T.Groups}`,
          active: _v27 === _v57.TAB_IDS.groups,
          dataId: "manage_team_side_nav_groups_menu_item",
          visible: !!_v11,
          onClick: () => {
            _v34(_v57.TAB_IDS.groups), _v6.GoogleTagManager.trackEvent(_v58.GTMEvent.SWITCH_TAB, {
              tab_type: _v58.TAB_NAME.GROUP
            });
          },
          action: _v33 ? (0, _v3.jsx)(_v64, {
            size: "sm",
            children: _v61(_v33)
          }) : void 0
        }, {
          key: _v57.TAB_IDS.basics,
          icon: (0, _v3.jsx)(_v34.InfoCircle, {}),
          activeIcon: (0, _v3.jsx)(_v35.InfoCircleFilled, {}),
          label: _v60.T.Basics,
          active: _v27 === _v57.TAB_IDS.branding || _v27 === _v57.TAB_IDS.basics,
          dataId: "manage_team_side_nav_branding_menu_item",
          visible: _v0,
          onClick: () => {
            _v34(_v57.TAB_IDS.basics), _v6.GoogleTagManager.trackEvent(_v58.GTMEvent.SWITCH_TAB, {
              tab_type: _v58.TAB_NAME.SETTING
            });
          }
        }, {
          key: _v57.TAB_IDS["brand-kits"],
          icon: (0, _v3.jsx)(_v15.LogoBrand, {}),
          activeIcon: (0, _v3.jsx)(_v16.LogoBrandFilled, {}),
          label: _v60.T.Brandkits,
          active: _v27 === _v57.TAB_IDS["brand-kits"],
          dataId: "manage_team_side_nav_brandkits_menu_item",
          visible: _v0,
          onClick: () => _v34(_v57.TAB_IDS["brand-kits"])
        }, {
          key: _v57.TAB_IDS.defaults,
          icon: (0, _v3.jsx)(_v21.FiltersLevers, {}),
          activeIcon: (0, _v3.jsx)(_v22.FiltersLeversFilled, {}),
          label: _v60.T.Defaults,
          active: _v27 === _v57.TAB_IDS.defaults,
          dataId: "manage_team_side_nav_defaults_menu_item",
          visible: "available" === _v22.status,
          onClick: () => _v34(_v57.TAB_IDS.defaults)
        }, {
          key: _v57.TAB_IDS["custom-metadata"],
          icon: (0, _v3.jsx)(_v17.CreateVideo, {}),
          activeIcon: (0, _v3.jsx)(_v18.CreateVideoFilled, {}),
          label: _v60.T.CustomMetadata,
          active: _v27 === _v57.TAB_IDS["custom-metadata"],
          dataId: "manage_team_side_nav_custom_metadata_menu_item",
          visible: !!(_v6 && _v19),
          onClick: () => _v34(_v57.TAB_IDS["custom-metadata"])
        }, {
          key: _v57.TAB_IDS.presets,
          icon: (0, _v3.jsx)(_v23.VideoBehavior, {}),
          activeIcon: (0, _v3.jsx)(_v24.VideoBehaviorFilled, {}),
          label: _v60.T.Presets,
          active: _v27 === _v57.TAB_IDS.presets,
          dataId: "manage_team_side_nav_presets_menu_item",
          visible: "available" === _v23.status,
          onClick: () => _v34(_v57.TAB_IDS.presets)
        }, {
          key: _v57.TAB_IDS.billing,
          icon: (0, _v3.jsx)(_v19.CreditCard, {}),
          activeIcon: (0, _v3.jsx)(_v20, {}),
          label: _v60.T.Billing,
          active: _v27 === _v57.TAB_IDS.billing,
          dataId: "manage_team_side_nav_billing_menu_item",
          visible: !!(_v13 && _v12 && _v15.untranslatedUserRole === _v59.TeamRole.Owner),
          onClick: () => _v34(_v57.TAB_IDS.billing)
        }, {
          key: _v57.TAB_IDS.settings,
          icon: (0, _v3.jsx)(_v28.SettingsGear, {}),
          activeIcon: (0, _v3.jsx)(_v29.SettingsGearFilled, {}),
          label: _v60.T.Settings,
          active: _v27 === _v57.TAB_IDS.settings,
          dataId: "manage_team_side_nav_settings_menu_item",
          visible: !!(_v7 || _v5 || _v21 || _v9 || _v14),
          onClick: () => _v34(_v57.TAB_IDS.settings)
        }, {
          key: _v57.TAB_IDS.usage,
          icon: (0, _v3.jsx)(_v32.ChartGrowthAlt, {}),
          activeIcon: (0, _v3.jsx)(_v33.ChartGrowthAltFilled, {}),
          label: (0, _v41.translate)({
            singular: "Usage",
            dictionary: {
              es: {
                singular: "Uso"
              },
              "de-DE": {
                singular: "Nutzung"
              },
              "fr-FR": {
                singular: "Utilisation"
              },
              "ja-JP": {
                singular: "使用状況"
              },
              "ko-KR": {
                singular: "사용량"
              },
              "pt-BR": {
                singular: "Uso"
              },
              "zh-CN": {
                singular: "使用情况"
              }
            }
          }),
          active: _v27 === _v57.TAB_IDS.usage,
          dataId: "manage_team_side_nav_usage_menu_item",
          visible: !!(_v6 && _v18 && _v0),
          onClick: () => _v34(_v57.TAB_IDS.usage)
        }, {
          key: _v57.TAB_IDS["manage-ai"],
          icon: (0, _v3.jsx)(_v30.AiSparkles, {}),
          activeIcon: (0, _v3.jsx)(_v31.AiSparklesFilled, {}),
          label: _v60.T.ManageAi,
          active: _v27 === _v57.TAB_IDS["manage-ai"],
          dataId: "manage_team_side_nav_manage_ai_menu_item",
          visible: !!(_v8 && !_v17),
          onClick: () => _v34(_v57.TAB_IDS["manage-ai"])
        }].filter(_v0 => _v0.visible);
      }, [_v27, _v10, _v2, _v1, _v15.currentTeamSize, _v15.untranslatedUserRole, _v33, _v11, _v6, _v22.status, _v23.status, _v18, _v19, _v13, _v12, _v7, _v5, _v21, _v9, _v14, _v8, _v17, _v34]);
    return _v28 ? (0, _v3.jsxs)(_v8.Flex, {
      flexDirection: "column",
      gap: (0, _v10.rem)(2),
      alignItems: "center",
      paddingTop: (0, _v10.rem)(8),
      children: [(0, _v3.jsx)(_v45.PrimaryNavItem, {
        variant: "icons",
        item: {
          key: "back",
          icon: (0, _v3.jsx)(_v27.ArrowLeft, {}),
          label: _v60.T.BackToHome,
          dataId: "manage_team_side_nav_home_menu_item",
          onClick: () => {
            _v26.push("/");
          }
        }
      }), (0, _v3.jsx)(_v7.Box, {
        width: (0, _v10.rem)(40),
        height: "1px",
        bg: _v29,
        marginY: (0, _v10.rem)(8)
      }), _v32() ? [...Array(_v31)].map((_v0, _v1) => (0, _v3.jsx)(_v37.LoadingBlock, {
        style: {
          width: (0, _v10.rem)(40),
          height: (0, _v10.rem)(40),
          borderRadius: (0, _v10.rem)(12)
        }
      }, _v1)) : _v35.map(_v0 => (0, _v3.jsx)(_v45.PrimaryNavItem, {
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
    }) : (0, _v3.jsxs)(_v7.Box, {
      style: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
      },
      children: [(0, _v3.jsx)(_v36.ResizableSideNav.Section, {
        children: (0, _v3.jsx)(_v7.Box, {
          as: "li",
          listStyleType: "none",
          children: (0, _v3.jsx)(_v44.MenuItem, {
            icon: (0, _v3.jsx)(_v27.ArrowLeft, {}),
            ..._v30,
            label: _v60.T.BackToHome,
            active: !1,
            dataId: "manage_team_side_nav_home_menu_item",
            onClick: () => {
              _v26.push("/");
            }
          })
        })
      }), (0, _v3.jsx)(_v36.ResizableSideNav.Divider, {
        my: (0, _v10.rem)(2)
      }), (0, _v3.jsx)(_v36.ResizableSideNav.Section, {
        children: (0, _v3.jsx)(_v36.ResizableSideNav.MenuItems, {
          customStyles: {
            gap: (0, _v10.rem)(2)
          },
          children: _v32() ? (0, _v3.jsx)(_v3.Fragment, {
            children: [...Array(_v31)].map((_v0, _v1) => (0, _v3.jsx)(_v37.LoadingBlock, {
              style: {
                ..._v63,
                width: "70%"
              }
            }, _v1))
          }) : (0, _v3.jsx)(_v3.Fragment, {
            children: _v35.map(_v0 => (0, _v3.jsx)(_v7.Box, {
              as: "li",
              listStyleType: "none",
              children: (0, _v3.jsx)(_v44.MenuItem, {
                icon: _v0.active ? _v0.activeIcon : _v0.icon,
                ..._v30,
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
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = ({
    active: _v0,
    onClose: _v1,
    name: _v2,
    removeMember: _v3,
    removeMemberRole: _v4,
    teamName: _v5,
    hasPerSeatPricingModel: _v6,
    isLastCollaborator: _v7 = !1
  }) => {
    let _v8 = !!_v4 && _v4 !== _v59.TeamRole.Viewer && _v6;
    return (0, _v3.jsxs)(_v78.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v3.jsx)(_v84.ModalOverlay, {}), (0, _v3.jsxs)(_v81.ModalContent, {
        maxW: {
          base: "calc(100vw - 32px)",
          md: "488px"
        },
        children: [(0, _v3.jsxs)(_v83.ModalHeader, {
          children: [(0, _v3.jsxs)(_v77.Header, {
            size: "md",
            as: "h2",
            children: [_v7 ? _v60.T.RemoveLastCollaborator : _v60.T.RemoveTeamMember, "?"]
          }), (0, _v3.jsx)(_v85.Text, {
            variant: "body-md",
            color: "text-primary",
            mt: "sm",
            children: _v60.T.LooseAcess(_v2, _v5)
          })]
        }), (0, _v3.jsx)(_v80.ModalCloseButton, {
          onClick: _v1
        }), _v7 && (0, _v3.jsx)(_v79.ModalBody, {
          pb: "sm",
          children: (0, _v3.jsx)(_v74.Alert, {
            status: "warning",
            size: "md",
            children: (0, _v3.jsx)(_v75.AlertDescription, {
              children: _v60.T.LastCollaboratorWarning
            })
          })
        }), (0, _v3.jsxs)(_v82.ModalFooter, {
          flexDirection: "column",
          alignItems: "stretch",
          gap: "md",
          pt: "md",
          children: [_v8 && (0, _v3.jsx)(_v85.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v60.T.ReassignSeats
          }), (0, _v3.jsxs)(_v8.Flex, {
            gap: 3,
            justifyContent: "flex-end",
            children: [(0, _v3.jsx)(_v76.Button, {
              variant: "tertiary",
              size: "md",
              onClick: _v1,
              children: _v60.T.Cancel
            }), (0, _v3.jsx)(_v76.Button, {
              variant: "destructive",
              size: "md",
              onClick: _v3,
              children: _v60.T.RemoveMember
            })]
          })]
        })]
      })]
    });
  };
  var _v87 = ((_v1 = {}).TEAM_SEATS_UPGRADE = "team_seats_upgrade", _v1.UPGRADE_ADD_TEAM = "368ip_mt_add_team", _v1);
  _v0.s(["MKCCodes", () => _v87], 0);
  var _v88 = _v0.i(0);
  let _v89 = _v5.default.memo(() => {
    let _v0 = (0, _v5.useContext)(_v73.ViewerContext),
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
      } = (0, _v5.useContext)(_v47.ManageTeamStateCtx),
      {
        updateInvitesRemaining: _v7,
        updateModalToDisplay: _v8,
        removeUnassignedSeats: _v9,
        updateTeamsPageNotice: _v10,
        updateIsMembershipLoading: _v11
      } = (0, _v5.useContext)(_v47.ManageTeamDispatchCtx),
      {
        trackBillingAction: _v12
      } = (0, _v5.useContext)(_v47.ManageTeamAnalytics),
      {
        isBlocked: _v13
      } = (0, _v69.useIsSeatChangeBlocked)({
        tier: _v2.tier
      }),
      _v14 = (0, _v49.useOrionSetting)("enable_content_space_team_gate"),
      _v15 = _v2.tier === _v59.Tier.Creator || _v13;
    switch ((0, _v5.useEffect)(() => {
      if (_v3 === _v59.TeamManagementModals.PURCHASE_SEATS_MODAL) {
        if (_v15) return void _v8({
          currentModalInDisplay: null
        });
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "unset";
    }, [_v3, _v15, _v8]), _v3) {
      case _v59.TeamManagementModals.PURCHASE_SEATS_MODAL:
        {
          if (_v15) return null;
          let {
              teamData: _v0
            } = _v5,
            _v1 = _v0?.user?.id || _v0?.teamUser?.ownerId || 0,
            _v2 = _v0.ownerId || _v0?.teamUser?.ownerId || 0,
            _v3 = _v2.seatCapTrial || _v5.seatDetails?.basePlanCount || 0,
            _v4 = Math.max(0, (_v2.isFreeTrial ? _v3 : _v2.seatCapPaid) - (_v5.maxTeamSize || _v2.seatCount));
          return (0, _v3.jsx)(_v72.PurchaseSeatsModal, {
            canUsePaymentsService: !!_v6,
            isActive: _v3 === _v59.TeamManagementModals.PURCHASE_SEATS_MODAL,
            isTrial: _v2.isFreeTrial,
            productId: String(_v2.productId),
            userId: _v1,
            ownerId: _v2,
            minSeatsPurchase: _v57.MIN_PURCHASE_SEATS,
            maxSeatsPurchase: _v4,
            initSeatsPurchase: _v4.seatsCount ?? _v57.MIN_PURCHASE_SEATS,
            onPurchaseSuccess: _v0 => {
              _v4 && _v4.onPurchaseSuccess && _v4.purchaseSeatModalLocation && (_v4.onPurchaseSuccess(_v0), _v11(_v88.makeMembershipCall[_v4.purchaseSeatModalLocation])), _v10(_v2.isFreeTrial ? _v71.NOTICE_TYPES.ADDED_SEATS_SUCCESSFULLY : _v71.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS);
            },
            onPurchaseFailure: _v4?.onPurchaseFailure,
            onClose: () => {
              _v12({
                action_type: _v57.BillingActionTypes.CLICK,
                location: _v57.BillingActionLocations.CLOSE_PURCHASE_SEATS_MODAL_BUTTON
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
      case _v59.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL:
        {
          let _v0 = () => _v8({
            currentModalInDisplay: null
          });
          return _v4 && _v4.onClose && _v4.onClose(), (0, _v3.jsx)(_v86, {
            active: _v3 === _v59.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL,
            onClose: _v0,
            name: _v4?.removeMemberName || "",
            removeMember: () => {
              _v4 && _v4.deleteFromTeam && (_v4.deleteFromTeam(), _v9(1), _v4.removeMemberRole !== _v59.TeamRole.Viewer && _v7(_v1 + 1), _v14 && 1 === _v5.currentTeamSize && _v5.untranslatedUserRole === _v59.TeamRole.Owner ? _v8({
                currentModalInDisplay: _v59.TeamManagementModals.BACK_ON_YOUR_OWN_MODAL
              }) : _v0());
            },
            removeMemberRole: _v4?.removeMemberRole,
            teamName: _v5.teamData.teamName ?? _v5.owner.name,
            hasPerSeatPricingModel: _v4?.hasPerSeatPricingModel,
            isLastCollaborator: 1 === _v5.currentTeamSize
          });
        }
      case _v59.TeamManagementModals.ADD_TO_FOLDERS_MODAL:
        {
          let _v0 = _v5.teamData.ownerId || _v0?.teamUser?.ownerId || 0;
          return (0, _v3.jsx)(_v65.AddToFoldersModal, {
            teamOwnerId: _v0,
            selectedTeamMembers: _v4.teamMembersToShareFolders || [],
            isOpen: _v3 === _v59.TeamManagementModals.ADD_TO_FOLDERS_MODAL,
            onSuccess: () => {
              _v8({
                currentModalInDisplay: null
              });
            },
            closeModal: () => {
              _v8({
                currentModalInDisplay: null
              });
            }
          });
        }
      case _v59.TeamManagementModals.MANAGE_LEARNER_ID:
        {
          let _v0 = _v4.ownerId || _v5.teamData.ownerId || _v0?.teamUser?.ownerId || 0,
            _v1 = _v4.lmsUserEmail || "";
          return (0, _v3.jsx)(_v68.ManageLearnerModal, {
            onClose: () => {
              _v8({
                currentModalInDisplay: null
              });
            },
            ownerId: _v0,
            lmsUserEmail: _v1
          });
        }
      case _v59.TeamManagementModals.BACK_ON_YOUR_OWN_MODAL:
        {
          let _v0 = _v0?.teamUser?.ownerId ?? _v0?.user?.id;
          if (!_v0 || !_v0) return null;
          let _v1 = {
            apiUrl: _v0.apiUrl,
            jwt: _v0.jwt,
            ownerId: _v0
          };
          return (0, _v3.jsx)(_v67.BackOnYourOwnModal, {
            isOpen: _v3 === _v59.TeamManagementModals.BACK_ON_YOUR_OWN_MODAL,
            apiConfig: _v1,
            onClose: () => _v8({
              currentModalInDisplay: null
            }),
            onMerged: () => window.location.reload()
          });
        }
      case _v59.TeamManagementModals.ADMIN_LIMIT_UPSELL_MODAL:
        {
          let _v0 = _v2.tier === _v59.Tier.Production,
            _v1 = `team_admin_limit_${_v4.adminLimitEntryPoint ?? "role_selection"}`,
            _v2 = _v0 ? `/enterprise/contact-us?mkc=${_v87.TEAM_SEATS_UPGRADE}` : (0, _v70.buildUpgradePlanUrl)({
              paywallTrigger: _v1,
              paywallLocation: "teams_settings",
              paywallFeature: "team_admin_seats"
            }, {
              mkc: _v87.UPGRADE_ADD_TEAM
            });
          return (0, _v3.jsx)(_v66.AdminLimitUpsellModal, {
            cancelLabel: _v60.T.Cancel,
            isOpen: !0,
            message: _v60.T.AdminSeatLimitReached,
            onClose: () => _v8({
              currentModalInDisplay: null
            }),
            paywallStyle: _v0 ? "enterprise_modal" : "default_modal",
            paywallTrigger: _v1,
            primaryButtonLabel: _v0 ? _v60.T.ContactUs : _v60.T.UpgradeButton,
            title: _v60.T.AdminSeatLimitTitle,
            upgradeUrl: _v2
          });
        }
    }
    return null;
  });
  _v0.s(["default", 0, _v89], 0);
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  let _v92 = _v90.default.div.withConfig({
    displayName: "Spinner__SpinnerWrapper",
    componentId: "sc-f09c4d20-0"
  })`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
  _v0.s(["Spinner", 0, () => (0, _v3.jsx)(_v92, {
    children: (0, _v3.jsx)(_v91.Spinner, {})
  })], 0);
}