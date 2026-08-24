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
  let _v36 = _v3.default.div.withConfig({
    displayName: "style__ButtonContent",
    componentId: "sc-bcb25e74-0"
  })`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {
    line-height: ${(0, _v9.rem)(15)};
  }
`;
  _v3.default.p.withConfig({
    displayName: "style__RoleLabel",
    componentId: "sc-bcb25e74-1"
  })`
  font-size: ${(0, _v9.rem)(14)};
  font-weight: 500;
`;
  let _v37 = _v3.default.hr.withConfig({
    displayName: "style__StyledHr",
    componentId: "sc-bcb25e74-2"
  })`
  margin: 0;
  border: 0;
  border-top: ${(0, _v9.rem)(1)} solid ${({
    theme: _v0
  }) => _v0.formats.secondary};
`;
  _v3.default.div.withConfig({
    displayName: "style__CondensedContent",
    componentId: "sc-bcb25e74-3"
  })`
  display: flex;
  align-items: center;

  > div {
    margin-right: ${(0, _v9.rem)(20)};
  }
`;
  let _v38 = _v3.default.div.withConfig({
      displayName: "style__RoleMenuContentStyled",
      componentId: "sc-bcb25e74-4"
    })`
  ${_v13.media.xs`
  min-width:${(0, _v9.rem)(250)};
`};
  ${_v13.media.xmd`
  max-width:${(0, _v9.rem)(450)};
  `}
  ${_v13.media.md`
  max-width:${(0, _v9.rem)(552)};
`};
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v9.rem)(14)};

  div:not([role='alert']) > span {
    width: 100%;
  }
`,
    _v39 = _v3.default.div.withConfig({
      displayName: "style__CheckmarkIconWrapper",
      componentId: "sc-bcb25e74-5"
    })`
  min-width: ${(0, _v9.rem)(35)};
  svg {
    width: ${(0, _v9.rem)(25)};
    margin: auto;
    margin-right: ${(0, _v9.rem)(10)};
    margin-top: ${(0, _v9.rem)(10)};
  }
`;
  _v3.default.div.withConfig({
    displayName: "style__PendingOptionsWrapper",
    componentId: "sc-bcb25e74-6"
  })`
  display: flex;
  flex-direction: column;
`;
  let _v40 = _v3.default.div.withConfig({
      displayName: "style__UpsellContainer",
      componentId: "sc-bcb25e74-7"
    })`
  display: flex;
  align-items: center;
  min-height: ${(0, _v9.rem)(45)};
  justify-content: space-between;
  margin: ${(0, _v9.rem)(6)} ${(0, _v9.rem)(14)} ${(0, _v9.rem)(14)};
  border-radius: ${(0, _v9.rem)(3)};
  ${_v0 => _v0.background && _v3.css`
      border-radius: ${(0, _v9.rem)(12)};
      flex-direction: column;
      background: ${_v35.UPGRADE_VIOLET_BG};
      padding: ${(0, _v9.rem)(16)} ${(0, _v9.rem)(20)};
    `}
`,
    _v41 = ({
      permissionLevelDescriptions: _v0,
      permissionLevels: _v1,
      onSelect: _v2,
      selectedRole: _v3,
      onDelete: _v4,
      deleteButtonText: _v5,
      isPending: _v6 = !1,
      oldRole: _v7,
      closeDropdown: _v8 = () => null,
      roleMenuType: _v9,
      additionalRoleMenuData: _v10
    }, _v11) => {
      let {
          updateModalToDisplay: _v12
        } = (0, _v2.useContext)(_v29.ManageTeamDispatchCtx),
        _v13 = (0, _v2.useCallback)(_v0 => _v0.find(_v0 => _v0.label === _v0.label), [_v0]),
        {
          membership: _v14,
          teamCapabilities: {
            hasPerSeatPricingModelTeamMember: _v15,
            hasEnterprise: _v16,
            haveMoreAdminTeamMembers: _v17
          },
          teamInfo: _v18
        } = (0, _v2.useContext)(_v29.ManageTeamStateCtx),
        {
          isBlocked: _v19
        } = (0, _v27.useIsSeatChangeBlocked)({
          tier: _v14.tier
        }),
        [_v20, _v21] = (0, _v2.useState)(!1),
        [_v22, _v23] = (0, _v2.useState)(!1),
        _v24 = _v9 === _v35.RoleMenuType.ShareModal,
        _v25 = (0, _v2.useRef)(null),
        _v26 = _v14.seatCapTrial || _v18.seatDetails?.basePlanCount || 0,
        _v27 = _v18.seatDetails?.currentUnassignedCount ?? _v14.currentUnassignedSeatCount,
        _v28 = _v14.seatCount,
        _v29 = !_v14.isFreeTrial && _v27 <= 0 && _v14.seatCapPaid > 0 && _v28 >= _v14.seatCapPaid,
        _v30 = !1 === _v17,
        _v31 = _v14.tier === _v31.Tier.Professional || _v14.tier === _v31.Tier.Studio || _v14.tier === _v31.Tier.Production,
        _v32 = _v18.untranslatedUserRole === _v31.TeamRole.Owner && _v31,
        _v33 = _v0 => !(_v0 !== _v31.TeamRole.Admin || !_v30 && (!_v16 || (_v0 => {
          if (!_v18.teamSeats) return !0;
          let _v1 = (0, _v26.camelizeString)(_v0.toLowerCase()),
            _v2 = _v0.toLowerCase().concat("Seats"),
            _v3 = 0 === _v18.teamSeats[_v2];
          return _v18.teamMembersCount[_v1] < _v18.teamSeats[_v2] || _v3;
        })(_v0))) || (_v22 && _v20 ? _v7 === _v31.TeamRole.Viewer && _v0 !== _v31.TeamRole.Viewer || _v0 === _v31.TeamRole.Viewer : _v0 === _v31.TeamRole.Viewer ? _v22 : _v20 && _v0 !== _v31.TeamRole.Viewer);
      return (0, _v2.useEffect)(() => {
        !_v15 || _v14.isFreeTrial || _v3.value !== _v31.TeamRole.Viewer || _v18?.seatDetails?.currentUnassignedCount || _v7 !== _v31.TeamRole.Viewer ? _v15 && _v14.isFreeTrial && (_v18?.seatDetails?.currentUnassignedCount || _v7 !== _v31.TeamRole.Viewer ? _v18.teamMembersCount.viewer >= _v30.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS && _v7 !== _v31.TeamRole.Viewer && _v23(!0) : (_v18.currentTeamSize >= _v18.teamMembersCount.admin + _v18.teamMembersCount.contributor + _v30.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS && _v23(!0), _v21(!0))) : _v21(!0);
      }, [_v15, _v14, _v7, _v3, _v18]), (0, _v1.jsxs)(_v38, {
        "data-id": "roleMenuContent",
        ref: _v11,
        children: [_v9 === _v35.RoleMenuType.TrialSingleSeatOnBoarfingFlow ? (() => {
          if (_v10) {
            let {
                pricePerSeat: _v0,
                viewerCount: _v1,
                paidSeatCount: _v2
              } = _v10,
              _v3 = _v0?.replace(/[\d\., ]/g, ""),
              _v4 = (_v0, _v1) => _v1 === _v30.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS && _v0 === _v31.TeamRole.Viewer || _v2 === _v26 && _v1 !== _v31.TeamRole.Contributor && _v1 !== _v31.TeamRole["Contributor Plus"] && _v1 !== _v31.TeamRole.Admin && _v0 !== _v31.TeamRole.Viewer;
            return _v1.map((_v0, _v1) => (0, _v1.jsxs)(_v34.RoleMenuOption, {
              onClick: () => {
                _v2 && _v2(_v0), _v8();
              },
              disabled: _v4(_v0.value, _v3?.value),
              children: [(0, _v1.jsx)(_v39, {
                children: _v3?.value === _v0?.value && (0, _v1.jsx)(_v49, {
                  isShareModal: _v24
                })
              }), (0, _v1.jsxs)(_v42, {
                disabled: _v4(_v0.value, _v3?.value),
                size: "md",
                children: [(0, _v1.jsxs)(_v46, {
                  children: [(0, _v1.jsx)("b", {
                    children: _v0?.label
                  }), _v0.value === _v31.TeamRole.Viewer && (0, _v1.jsx)(_v47, {
                    viewer: !0,
                    children: "Free"
                  }), _v0.value !== _v31.TeamRole.Viewer && (0, _v1.jsxs)(_v18.Flex, {
                    width: (0, _v9.rem)(120),
                    height: (0, _v9.rem)(22),
                    ml: (0, _v9.rem)(10),
                    justifyContent: "center",
                    borderRadius: (0, _v9.rem)(10),
                    bg: "blue.50",
                    children: [(0, _v1.jsx)(_v48, {
                      strike: !0,
                      children: _v32.T.MonthlyPrice(_v0 ?? "")
                    }), (0, _v1.jsx)(_v48, {
                      children: `${_v3}0`
                    })]
                  })]
                }), (0, _v1.jsx)(_v50, {
                  disabled: _v4(_v0.value, _v3?.value),
                  children: _v13(_v0)?.description
                })]
              })]
            }, _v1));
          }
        })() : _v9 === _v35.RoleMenuType.PaidSingleSeatOnBoardingFlow ? (() => {
          if (_v10) {
            let {
              pricePerSeat: _v0
            } = _v10;
            return _v1.map((_v0, _v1) => (0, _v1.jsxs)(_v34.RoleMenuOption, {
              onClick: () => {
                _v2 && _v2(_v0), _v8();
              },
              disabled: _v33(_v0.value),
              children: [(0, _v1.jsx)(_v39, {
                children: _v3?.value === _v0?.value && (0, _v1.jsx)(_v49, {
                  isShareModal: _v24
                })
              }), (0, _v1.jsxs)(_v42, {
                disabled: _v33(_v0.value),
                size: "md",
                children: [(0, _v1.jsxs)(_v46, {
                  children: [(0, _v1.jsx)("b", {
                    children: _v0?.label
                  }), _v0.value === _v31.TeamRole.Viewer && (0, _v1.jsx)(_v47, {
                    viewer: !0,
                    children: "Free"
                  }), _v0.value !== _v31.TeamRole.Viewer && (0, _v1.jsx)(_v47, {
                    children: _v32.T.MonthlyPrice(_v0 ?? "")
                  })]
                }), (0, _v1.jsx)(_v50, {
                  disabled: _v33(_v0.value),
                  children: _v13(_v0)?.description
                })]
              })]
            }, _v1));
          }
        })() : _v1.map((_v0, _v1) => {
          let _v2 = _v0.value === _v31.TeamRole.Admin && _v30,
            _v3 = _v2 && _v32,
            _v4 = _v0.isDisabled || _v33(_v0.value) && !_v3;
          return (0, _v1.jsx)(_v17.Box, {
            ref: _v25,
            children: (0, _v1.jsx)(_v23.Tooltip, {
              shouldWrapChildren: !0,
              isDisabled: !_v2 || _v3,
              portalProps: {
                containerRef: _v25
              },
              label: _v32.T.ContactAccountManagerForAdminSeats,
              children: (0, _v1.jsxs)(_v34.RoleMenuOption, {
                disabled: _v4,
                onClick: () => {
                  if (_v2) {
                    _v3 && (_v12({
                      currentModalInDisplay: _v31.TeamManagementModals.ADMIN_LIMIT_UPSELL_MODAL,
                      data: {
                        adminLimitEntryPoint: "role_selection"
                      }
                    }), _v8());
                    return;
                  }
                  _v2?.(_v0);
                },
                children: [(0, _v1.jsxs)("div", {
                  children: [(0, _v1.jsxs)(_v42, {
                    disabled: _v4,
                    size: "md",
                    children: [(0, _v1.jsx)("b", {
                      children: _v0?.label
                    }), (0, _v1.jsx)(_v50, {
                      disabled: _v4,
                      children: _v13(_v0)?.description
                    })]
                  }), _v3?.value === _v0?.value && _v3?.toggles && _v3?.toggles.map(_v0 => (0, _v1.jsx)(_v22.Switch, {
                    "aria-label": _v0.label,
                    id: `${_v1}-${_v0.value}`,
                    isChecked: _v0.checked,
                    onChange: () => {
                      if (_v3 && _v3.toggles && _v2) return _v2({
                        ..._v3,
                        toggles: _v3.toggles.map(_v0 => _v0.value === _v0.value ? {
                          ..._v0,
                          checked: !_v0.checked
                        } : _v0)
                      });
                    },
                    children: (0, _v1.jsx)(_v10.Text, {
                      variant: "body-md",
                      fontSize: (0, _v9.rem)(14),
                      display: "inline",
                      verticalAlign: "top",
                      children: _v0.label
                    })
                  }, `${_v1}-${_v0.value}`))]
                }), (0, _v1.jsx)(_v39, {
                  children: _v3?.value === _v0?.value && (0, _v1.jsx)(_v49, {
                    isShareModal: _v24
                  })
                })]
              }, _v1)
            })
          }, _v1);
        }), _v18.untranslatedUserRole == _v31.TeamRole.Owner && _v20 && !_v14.isFreeTrial && (_v29 || _v19 ? (0, _v1.jsx)(_v45, {
          marginTop: 11,
          children: _v32.T.UpgradePlan
        }) : (0, _v1.jsxs)(_v40, {
          background: !0,
          children: [(0, _v1.jsx)(_v43, {
            children: _v32.T.RunOutOfSeats
          }), (0, _v1.jsx)(_v44, {
            onClick: () => {
              _v8(), _v12({
                currentModalInDisplay: _v31.TeamManagementModals.PURCHASE_SEATS_MODAL,
                data: {
                  purchaseSeatModalLocation: _v28.PURCHASE_TRIGGERED_FROM.ROLE_CHANGE_MENU
                }
              });
            },
            children: _v14.isFreeTrial ? _v32.T.AddSeats : _v32.T.PurchaseSeats
          })]
        })), _v18.untranslatedUserRole == _v31.TeamRole.Admin && _v20 && !_v14.isFreeTrial && (0, _v1.jsx)(_v40, {
          children: (0, _v1.jsx)(_v33.GeneralNotice, {
            children: _v29 ? _v32.T.UpgradePlan : _v32.T.ContactOwnerForSeats
          })
        }), _v14.isFreeTrial && _v20 && _v22 && (0, _v1.jsx)(_v45, {
          marginTop: 11,
          children: `${_v32.T.FreeTrialTeamLimitReached} ${_v32.T.AdditionalInvites}`
        }), _v14.isFreeTrial && _v20 && !_v22 && _v14.seatCount >= _v26 && (0, _v1.jsx)(_v45, {
          marginTop: 11,
          children: `${_v32.T.FreeTrialSeatLimitReached} ${_v32.T.PurchaseAdditionlSeats}`
        }), _v14.isFreeTrial && !_v20 && _v22 && (0, _v1.jsx)(_v45, {
          marginTop: 11,
          children: `${_v32.T.FreeTrialViewerLimitReached} ${_v32.T.AddAdminsAndContributors}`
        }), (0, _v1.jsx)(() => {
          if (_v14.isFreeTrial && !_v14.isReverseFreeTrial && _v27 <= 0 && _v14.seatCount < _v26) {
            if (_v18.untranslatedUserRole === _v31.TeamRole.Admin) return (0, _v1.jsx)(_v45, {
              marginTop: 11,
              children: _v32.T.UpgradeRoleContactOwnerInTrial
            });else if (_v18.untranslatedUserRole === _v31.TeamRole.Owner) return _v19 ? (0, _v1.jsx)(_v45, {
              marginTop: 11,
              children: _v32.T.UpgradePlan
            }) : (0, _v1.jsxs)(_v40, {
              background: !0,
              children: [(0, _v1.jsx)(_v43, {
                children: _v32.T.UpgradeRoleAddSeatsToTrial
              }), (0, _v1.jsx)(_v44, {
                onClick: () => {
                  _v8(), _v12({
                    currentModalInDisplay: _v31.TeamManagementModals.PURCHASE_SEATS_MODAL,
                    data: {
                      purchaseSeatModalLocation: _v28.PURCHASE_TRIGGERED_FROM.ROLE_CHANGE_MENU
                    }
                  });
                },
                children: _v14.isFreeTrial ? _v32.T.AddSeats : _v32.T.PurchaseSeats
              })]
            });
          }
          return null;
        }, {}), (_v6 || _v4) && (0, _v1.jsx)(_v37, {}), _v24 && _v4 && (0, _v1.jsx)(_v5.Button, {
          justifyContent: "flex-start",
          padding: `${(0, _v9.rem)(5)} ${(0, _v9.rem)(15)}`,
          borderRadius: "0",
          boxSizing: "content-box",
          variant: "tertiary",
          color: "status-destructive-primary",
          as: "span",
          onClick: () => {
            _v8(), _v4();
          },
          children: _v5
        }), _v24 && !_v4 && _v5 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v37, {}), (0, _v1.jsxs)(_v18.Flex, {
            p: `${(0, _v9.rem)(20)} ${(0, _v9.rem)(15)}`,
            color: "slate.500",
            fontSize: (0, _v9.rem)(12),
            fontWeight: "400",
            lineHeight: (0, _v9.rem)(18),
            children: [(0, _v1.jsx)(_v25.Team, {
              width: (0, _v9.rem)(40),
              mr: (0, _v9.rem)(10),
              sx: {
                path: {
                  fill: "slate.500"
                },
                circle: {
                  fill: "slate.500"
                }
              }
            }), _v5]
          })]
        }), (0, _v1.jsx)(_v20.Link, {
          href: "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12425417783697",
          target: "_blank",
          rel: "noopener noreferrer",
          children: (0, _v1.jsx)(_v10.Text, {
            p: "sm",
            variant: "body-sm",
            textDecoration: "underline",
            color: "text-secondary",
            _hover: {
              color: "text-primary"
            },
            children: _v32.T.RoleHelpLinkText
          })
        })]
      }, _v3.value);
    },
    _v42 = _v0 => (0, _v1.jsx)(_v21.Paragraph, {
      marginBottom: "0",
      display: "flex",
      flexDirection: "column",
      color: _v0.disabled ? "slate.400" : void 0,
      size: _v0.size,
      onClick: _v0.onClick,
      children: _v0.children
    }),
    _v43 = _v0 => (0, _v1.jsx)(_v21.Paragraph, {
      paddingBottom: (0, _v9.rem)(12),
      margin: (0, _v9.rem)(0),
      color: "purple.800",
      size: "md",
      as: "span",
      children: _v0.children
    }),
    _v44 = _v0 => (0, _v1.jsx)(_v5.Button, {
      width: "100%",
      height: (0, _v9.rem)(32),
      border: "0",
      variant: "upsell",
      onClick: _v0.onClick,
      children: _v0.children
    }),
    _v45 = ({
      marginTop: _v0,
      children: _v1
    }) => {
      let _v2 = {
        "svg *": {
          fill: "blue.500"
        },
        "& svg": {
          marginTop: _v0 ? (0, _v9.rem)(_v0) : 0
        }
      };
      return (0, _v1.jsx)(_v14.Alert, {
        status: "info",
        width: "auto",
        margin: `${_v0 ? (0, _v9.rem)(_v0) : (0, _v9.rem)(8)} ${(0, _v9.rem)(14)} ${(0, _v9.rem)(8)}`,
        borderRadius: (0, _v9.rem)(12),
        background: "color-mix(in srgb, var(--vimeo-colors-blue-500) 15%, transparent)",
        border: "color-mix(in srgb, var(--vimeo-colors-blue-500) 15%, transparent)",
        sx: _v2,
        children: (0, _v1.jsx)(_v15.AlertDescription, {
          children: (0, _v1.jsx)(_v10.Text, {
            variant: "body-md",
            color: "text-primary",
            children: _v1
          })
        })
      });
    },
    _v46 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v19.HStack, {
      children: _v0
    }),
    _v47 = ({
      children: _v0,
      viewer: _v1
    }) => (0, _v1.jsx)(_v16.Badge, {
      minWidth: (0, _v9.rem)(_v1 ? 62 : 76),
      height: (0, _v9.rem)(20),
      fontSize: (0, _v9.rem)(12),
      fontWeight: "700",
      marginLeft: (0, _v9.rem)(12),
      borderRadius: (0, _v9.rem)(22),
      textTransform: "none",
      color: _v1 ? "green.600" : "blue.600",
      backgroundColor: _v1 ? "green.100" : "blue.50",
      _hover: {
        color: _v1 ? "green.600" : "blue.600",
        backgroundColor: _v1 ? "green.100" : "blue.50"
      },
      variant: "sponsor",
      children: _v0
    }),
    _v48 = ({
      children: _v0,
      strike: _v1
    }) => (0, _v1.jsx)(_v10.Text, {
      variant: "body-xl",
      display: "flex",
      ml: (0, _v9.rem)(8),
      fontWeight: "700",
      color: _v1 ? "blue.600" : "status-positive-primary",
      textDecoration: _v1 ? "line-through" : "unset",
      children: _v0
    }),
    _v49 = ({
      isShareModal: _v0
    }) => (0, _v1.jsx)(_v24.Checkmark, {
      color: _v0 ? "blue.500" : void 0
    }),
    _v50 = ({
      children: _v0,
      disabled: _v1
    }) => (0, _v1.jsx)(_v17.Box, {
      color: _v1 ? "slate.400" : "slate.500",
      children: _v0
    });
  var _v51 = _v0.i(0);
  let _v52 = _v3.default.div.withConfig({
    displayName: "RoleMenu__PopoverWrapper",
    componentId: "sc-91c067b8-0"
  })`
  ${_v13.media.xs`
  min-width:${(0, _v9.rem)(250)};
  `};
  ${_v13.media.sm`
  max-width:${(0, _v9.rem)(450)};
  `}
  ${_v13.media.md`
    max-width:${(0, _v9.rem)(552)};
  `};
`;
  _v0.s(["default", 0, ({
    selectedRole: _v0,
    onSelect: _v1,
    onDelete: _v2,
    isMobile: _v3,
    deleteButtonText: _v4,
    permissionLevels: _v5,
    permissionLevelDescriptions: _v6,
    isRoleMenuActive: _v7,
    isPending: _v8 = !1,
    positionAbove: _v9 = !1,
    onClosed: _v10,
    oldRole: _v11,
    selectedUserName: _v12,
    roleMenuType: _v13,
    additionalRoleMenuData: _v14,
    roleMenuPopupRef: _v15
  }) => {
    let [_v16, _v17] = (0, _v2.useState)(!1),
      _v18 = (0, _v2.useRef)(null),
      _v19 = (0, _v2.useRef)(null),
      [_v20, _v21] = (0, _v2.useState)(100),
      [_v22, _v23] = (0, _v2.useState)(_v0),
      _v24 = _v13 === _v35.RoleMenuType.ShareModal,
      _v25 = _v13 === _v35.RoleMenuType.PaidSingleSeatOnBoardingFlow || _v13 === _v35.RoleMenuType.TrialSingleSeatOnBoarfingFlow,
      _v26 = _v2.default.forwardRef(_v41);
    (0, _v12.useOutsideClick)([_v18, _v19], () => {
      _v19 && null !== _v19.current && (_v17(!1), _v10 && _v10(_v22));
    });
    let _v27 = (0, _v2.useCallback)(_v0 => {
      _v21(_v0?.current?.getBoundingClientRect()?.width);
    }, []);
    (0, _v2.useEffect)(() => {
      _v27(_v18);
    }, [_v0, _v22]), (0, _v2.useEffect)(() => {
      _v7 && _v7(_v16);
    }, [_v16]), (0, _v2.useEffect)(() => {
      _v16 || _v23(_v0);
    }, [_v0, _v16]);
    let _v28 = _v24 ? {
      position: "relative",
      left: `-${(0, _v9.rem)(40)}`,
      maxWidth: "unset"
    } : {
      width: `${_v25 ? (0, _v9.rem)(440) : "unset"}`,
      marginLeft: _v3 ? 0 : (0, _v9.rem)(_v20)
    };
    return (0, _v1.jsxs)(_v6.Popover, {
      isOpen: _v16,
      placement: _v24 || _v9 ? "top" : "bottom-end",
      onClose: () => _v17(!1),
      ..._v28,
      children: [(0, _v1.jsx)(_v8.PopoverTrigger, {
        children: (0, _v1.jsx)(_v5.Button, {
          "data-id": "rolesMenu",
          onClick: _v0 => {
            _v0.stopPropagation(), _v17(!_v16), _v4.GoogleTagManager.trackEvent(_v51.GTMEvent.OPEN_ROLE_MENU);
          },
          ref: _v18,
          rightIcon: (0, _v1.jsx)(_v11.ChevronDownSmall, {}),
          variant: "tertiary",
          ...(_v24 ? {
            justifyContent: "space-between"
          } : _v25 && !Object.values(_v31.TeamRole).includes(String(_v22.label)) ? {
            background: "input-stroke"
          } : {
            paddingRight: 0,
            marginRight: (0, _v9.rem)(-6),
            justifyContent: "flex-end"
          }),
          children: (0, _v1.jsxs)(_v36, {
            children: [(0, _v1.jsx)(_v10.Text, {
              variant: "body-xl",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              fontSize: "body-md",
              fontWeight: "medium",
              children: _v24 ? _v0?.label : _v22?.label
            }), _v8 && !_v24 && (0, _v1.jsx)(_v10.Text, {
              variant: "body-xl",
              fontSize: "header-2xs",
              fontWeight: "regular",
              display: "block",
              color: "text-secondary",
              children: _v32.T.Pending
            })]
          })
        })
      }), (0, _v1.jsx)(_v7.PopoverContent, {
        children: (0, _v1.jsx)(_v52, {
          ...(_v15 ? {
            ref: _v15
          } : {}),
          children: (0, _v1.jsx)(_v26, {
            onDelete: _v2,
            isPending: _v8,
            ref: _v19,
            onSelect: _v0 => {
              let _v1 = _v0.value;
              _v23(_v0), _v1 && _v1 !== _v0.value && _v1(_v0), _v24 && _v17(!_v16);
            },
            permissionLevels: _v5,
            selectedRole: _v24 ? _v0 : _v22,
            deleteButtonText: _v4,
            permissionLevelDescriptions: _v6,
            oldRole: _v11,
            closeDropdown: () => _v17(!1),
            selectedUserName: _v12,
            roleMenuType: _v13,
            additionalRoleMenuData: _v14
          })
        })
      })]
    });
  }], 0);
}