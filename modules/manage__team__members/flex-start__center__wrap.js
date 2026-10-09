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
    _v27 = _v0.i(0);
  let _v28 = () => {
      let {
          invitesRemaining: _v0,
          teamInfo: _v1,
          teamCapabilities: {
            hasEnterprise: _v2,
            hasPerSeatPricingModelTeamMember: _v3
          }
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        _v4 = _v1.owner.metadata?.connections?.teamMembers?.roles ?? [],
        _v5 = _v1.teamMembersCount,
        _v6 = _v1.currentTeamSize,
        _v7 = _v1?.untranslatedUserRole,
        _v8 = !_v2 && _v7 === _v26.TeamRole.Owner,
        _v9 = _v2 && (_v1.teamSeats?.adminSeats ?? 0) > 0;
      return (0, _v2.jsxs)(_v7.Flex, {
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        rowGap: (0, _v8.rem)(8),
        children: [_v4.map(_v0 => {
          if (_v0.permissionLevel && _v0.role) {
            let _v0 = _v0.permissionLevel.split(" ").map((_v0, _v1) => 0 === _v1 ? _v0.toLowerCase() : _v0).join("") + "Count",
              _v1 = _v0.role.toLowerCase(),
              _v2 = _v1 === _v26.TeamRole.Admin.toLowerCase();
            return (0, _v2.jsx)(_v29, {
              count: _v5[_v1] ?? _v0.count,
              paragraphDataId: _v0,
              children: _v2 && _v9 ? (0, _v2.jsxs)(_v7.Flex, {
                alignItems: "center",
                display: "inline-flex",
                gap: (0, _v8.rem)(2),
                children: [_v0.displayName, (0, _v2.jsx)(_v23.Tooltip, {
                  label: _v27.T.AdminSeatCountExplanation,
                  children: (0, _v2.jsx)(_v6.Box, {
                    as: "span",
                    display: "inline-flex",
                    alignItems: "center",
                    tabIndex: 0,
                    "aria-label": _v27.T.AdminSeatCountExplanation,
                    children: (0, _v2.jsx)(_v25.CircleInfoSmall, {
                      color: "text-secondary",
                      boxSize: (0, _v8.rem)(13.2)
                    })
                  })
                })]
              }) : _v0.displayName
            }, _v0);
          }
        }), _v3 && !_v2 && (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v24.Divider, {
            orientation: "vertical",
            mx: (0, _v8.rem)(24),
            borderColor: "stroke"
          }), (0, _v2.jsxs)(_v29, {
            count: _v0.toString(),
            paragraphDataId: "unassignedCount",
            children: [_v27.T.Unassigned, _v8 && (0, _v2.jsx)(_v23.Tooltip, {
              label: _v27.T.UnassignedSeatExplanation,
              sx: {
                width: (0, _v8.rem)(180)
              },
              children: (0, _v2.jsx)(_v6.Box, {
                display: "inline",
                children: (0, _v2.jsx)(_v25.CircleInfoSmall, {
                  my: (0, _v8.rem)(-12),
                  pl: (0, _v8.rem)(3)
                })
              })
            })]
          }), (0, _v2.jsx)(_v29, {
            count: _v6.toString(),
            paragraphDataId: "totalCount",
            children: _v27.T.TotalCount
          })]
        })]
      });
    },
    _v29 = ({
      count: _v0,
      paragraphDataId: _v1,
      children: _v2
    }) => (0, _v2.jsxs)(_v7.Flex, {
      justifyContent: "flex-start",
      flexDirection: "column",
      padding: `0 ${(0, _v8.rem)(20)}`,
      children: [(0, _v2.jsx)(_v22.Text, {
        variant: "body-xl",
        margin: "0",
        "data-id": _v1,
        fontSize: (0, _v8.rem)(20),
        fontWeight: "medium",
        children: _v0
      }), (0, _v2.jsx)(_v21.Paragraph, {
        margin: "0",
        size: "sm",
        children: _v2
      })]
    });
  var _v30 = _v0.i(0),
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
    _v43 = _v0.i(0);
  let _v44 = ({
    children: _v0
  }) => (0, _v2.jsxs)(_v40.Popover, {
    children: [(0, _v2.jsx)(_v42.PopoverTrigger, {
      children: (0, _v2.jsx)(_v39.IconButton, {
        "aria-label": "more-options",
        icon: (0, _v2.jsx)(_v43.EllipsisV, {
          boxSize: "2xs"
        }),
        variant: "tertiary",
        size: "md"
      })
    }), (0, _v2.jsx)(_v41.PopoverContent, {
      borderRadius: "md",
      backgroundColor: "grayscale.50",
      children: _v0
    })]
  });
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = ({
    children: _v0,
    href: _v1
  }) => (0, _v2.jsx)(_v47.Badge, {
    as: "a",
    "data-upsell-badge": !0,
    variant: "upgrade",
    size: "sm",
    target: "_blank",
    href: _v1,
    backgroundColor: "upsell-primary",
    color: "white",
    _hover: {
      backgroundColor: "blue.600"
    },
    display: "inline-block",
    marginLeft: (0, _v8.rem)(8),
    verticalAlign: "middle",
    children: _v0
  });
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
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
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = ({
    deleteButtonText: _v0,
    isPending: _v1,
    onDelete: _v2,
    personalTeamFolder: _v3,
    selectedUserName: _v4,
    teamMemberUri: _v5,
    teamMemberUserUri: _v6,
    teamMemberPermissionLevel: _v7,
    resendInvite: _v8,
    copyInviteLink: _v9,
    recentlyReminded: _v10,
    hasShareFolders: _v11 = !1,
    onShareFolders: _v12,
    onViewTeamMembersAccess: _v13,
    onViewTeamMembersActivity: _v14,
    triggerDataId: _v15,
    onViewGroupsForMember: _v16,
    isSSOEnabled: _v17,
    onToggleSSO: _v18,
    isSSOAvailable: _v19,
    hasLmsUser: _v20,
    onLmsUserManage: _v21
  }) => {
    let [_v22, _v23] = (0, _v3.useState)(!1),
      [_v24, _v25] = (0, _v3.useState)(!1),
      _v26 = (0, _v3.useRef)(null),
      _v27 = (0, _v67.getIdFromLink)(_v5),
      _v28 = () => {
        _v23(!1);
      },
      {
        teamCapabilities: {
          canLmsExport: _v29,
          hasPerSeatPricingModelTeamMember: _v30,
          hasPersonalTeamFolderAdminAccess: _v31,
          canViewTeamMemberTopLevelPermissionsUpsell: _v32,
          canViewTeamMemberTopLevelPermissions: _v33,
          hasViewTeamMemberActivityUpsell: _v34
        },
        teamInfo: {
          owner: {
            uri: _v35
          }
        }
      } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
      {
        capabilities: {
          hasTeamGroups: _v36,
          hasContentSpaceEnabled: _v37
        },
        ready: _v38
      } = (0, _v79.useCapability)(["hasContentSpaceEnabled", "hasTeamGroups"], _v35),
      {
        updateModalToDisplay: _v39
      } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
      _v40 = [_v26.TeamRole["Contributor Plus"], _v26.TeamRole.Contributor, _v26.TeamRole.Viewer, _v26.TeamRole.Admin],
      _v41 = (_v32 || _v33) && !_v1 && _v7 && _v40.includes(_v7),
      _v42 = (0, _v80.useOrionSetting)("show_granular_permissions"),
      _v43 = _v32 ? "/enterprise/contact" : _v42 ? `/manage/team/members/${_v27}/access?tab=content` : _v37 ? `/manage/team/members/${_v27}/team-library` : `/manage/team/members/${_v27}/shared-resources`,
      _v44 = (0, _v67.getIdFromLink)(_v35);
    return (0, _v73.useOutsideClick)({
      ref: _v26,
      handler: () => _v23(!1)
    }), (0, _v2.jsxs)(_v68.Menu, {
      isOpen: _v22,
      children: [(0, _v2.jsx)(_v69.MenuButton, {
        as: _v39.IconButton,
        "aria-label": "overflow-menu-dots",
        marginLeft: (0, _v8.rem)(8),
        "data-id": _v15,
        icon: (0, _v2.jsx)(_v43.EllipsisV, {
          boxSize: "2xs"
        }),
        variant: "tertiary",
        borderRadius: "md",
        size: "md",
        onClick: () => _v23(!_v22)
      }), (0, _v2.jsxs)(_v70.MenuList, {
        borderRadius: "md",
        py: (0, _v8.rem)(8),
        backgroundColor: "surface",
        ref: _v26,
        children: [_v1 && (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v71.MenuItem, {
            "data-id": "roleMenuOptionResendInvite",
            isDisabled: _v10,
            as: "span",
            onClick: _v8,
            children: (0, _v2.jsx)(_v22.Text, {
              variant: "header-xs",
              children: _v10 ? _v27.T.ReminderSent : _v27.T.ResendInvite
            })
          }), (0, _v2.jsx)(_v71.MenuItem, {
            "data-id": "roleMenuOptionCopyInvite",
            as: "span",
            onClick: _v9,
            children: (0, _v2.jsx)(_v22.Text, {
              variant: "header-xs",
              children: _v27.T.CopyLink
            })
          })]
        }), !_v37 && !_v1 && _v31 && _v3 && (0, _v2.jsx)(_v71.MenuItem, {
          as: "span",
          "data-id": "roleMenuOptionViewMyVideos",
          onClick: () => window.open("/user/" + _v3?.split("/")[2] + "/folder/" + _v3?.split("/")[4], "_self"),
          children: (0, _v2.jsx)(_v22.Text, {
            variant: "header-xs",
            children: _v27.T.ViewMyVideos
          })
        }), _v11 && (0, _v2.jsx)(_v71.MenuItem, {
          as: "a",
          onClick: () => {
            _v23(!1), _v12();
          },
          "data-id": "roleMenuOptionShareFolders",
          children: (0, _v2.jsxs)(_v32.HStack, {
            alignItems: "center",
            gap: (0, _v8.rem)(8),
            children: [(0, _v2.jsx)(_v77.FolderPlus, {
              boxSize: "xs"
            }), (0, _v2.jsx)(_v22.Text, {
              variant: "header-xs",
              children: _v27.T.ShareFolders
            })]
          })
        }), _v42 && (0, _v2.jsx)(_v71.MenuItem, {
          as: "a",
          href: `/manage/team/members/${_v27}/access`,
          "data-id": "roleMenuOptionManageFeaturesAccess",
          onClick: () => _v23(!1),
          children: (0, _v2.jsxs)(_v32.HStack, {
            alignItems: "center",
            gap: (0, _v8.rem)(8),
            children: [(0, _v2.jsx)(_v75.FiltersLevers, {
              boxSize: "xs"
            }), (0, _v2.jsx)(_v22.Text, {
              variant: "header-xs",
              children: (0, _v35.translate)({
                singular: "Manage features access",
                dictionary: {
                  es: {
                    singular: "Administrar el acceso a funciones"
                  },
                  "de-DE": {
                    singular: "Zugriff auf Funktionen verwalten"
                  },
                  "fr-FR": {
                    singular: "Gérer l'accès aux fonctionnalités"
                  },
                  "ja-JP": {
                    singular: "機能へのアクセスを管理"
                  },
                  "ko-KR": {
                    singular: "기능 접근 권한 관리"
                  },
                  "pt-BR": {
                    singular: "Gerenciar acesso às funcionalidades"
                  },
                  "zh-CN": {
                    singular: "管理功能访问权限"
                  }
                }
              })
            })]
          })
        }), _v41 && (_v32 ? (0, _v2.jsxs)(_v32.HStack, {
          "data-id": "roleMenuOptionViewTeamMembersAccess",
          p: (0, _v8.rem)(8),
          children: [(0, _v2.jsx)(_v22.Text, {
            variant: "header-xs",
            color: "text-secondary",
            children: _v27.T.ViewAccess
          }), (0, _v2.jsx)(_v48, {
            href: "/enterprise/contact",
            children: (0, _v35.translate)({
              singular: "Enterprise",
              dictionary: {
                "fr-FR": {
                  singular: "Entreprise"
                },
                "zh-CN": {
                  singular: "企业"
                }
              }
            })
          })]
        }) : (0, _v2.jsx)(_v71.MenuItem, {
          as: "a",
          href: _v43,
          "data-id": "roleMenuOptionViewTeamMembersAccess",
          onClick: () => _v13?.(),
          children: (0, _v2.jsxs)(_v32.HStack, {
            alignItems: "center",
            gap: (0, _v8.rem)(8),
            children: [(0, _v2.jsx)(_v76.FolderLock, {
              boxSize: "xs"
            }), (0, _v2.jsx)(_v22.Text, {
              variant: "header-xs",
              children: _v27.T.ViewAccess
            })]
          })
        })), _v6 && (0, _v2.jsx)(_v71.MenuItem, {
          as: "a",
          href: _v44 && !_v34 ? `/analytics/teams/${_v44}/users/${(0, _v67.getIdFromLink)(_v6)}` : "/enterprise/contact",
          "data-id": "roleMenuOptionViewTeamMemberActivity",
          onClick: () => {
            _v34 || _v14?.();
          },
          children: (0, _v2.jsxs)(_v32.HStack, {
            alignItems: "center",
            gap: (0, _v8.rem)(8),
            children: [(0, _v2.jsx)(_v74.Analytics, {
              boxSize: "xs"
            }), (0, _v2.jsx)(_v22.Text, {
              variant: "header-xs",
              color: _v34 ? "text-secondary" : "text-primary",
              children: _v27.T.ViewActivity
            }), _v34 && (0, _v2.jsx)(_v48, {
              href: "/enterprise/contact",
              children: (0, _v35.translate)({
                singular: "Enterprise",
                dictionary: {
                  "fr-FR": {
                    singular: "Entreprise"
                  },
                  "zh-CN": {
                    singular: "企业"
                  }
                }
              })
            })]
          })
        }), _v36 && _v38 && (0, _v2.jsx)(_v71.MenuItem, {
          onClick: () => {
            _v23(!1), _v16(_v5);
          },
          "data-id": "roleMenuOptionShowGroups",
          children: (0, _v2.jsx)(_v22.Text, {
            variant: "body-xl",
            fontSize: "header-xs",
            children: _v27.T.ManageGroups
          })
        }), _v29 && _v20 && (0, _v2.jsx)(_v71.MenuItem, {
          onClick: () => {
            _v25(!0), _v21();
          },
          children: (0, _v2.jsx)(_v22.Text, {
            variant: "header-xs",
            children: _v27.T.ManageLearnerIds
          })
        }), _v19 && (0, _v2.jsx)(_v71.MenuItem, {
          onClick: () => {
            _v23(!1), _v18();
          },
          children: (0, _v2.jsx)(_v22.Text, {
            variant: "header-xs",
            children: _v17 ? _v27.T.TurnOffSSO : _v27.T.TurnOnSSO
          })
        }), _v2 && (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v72.MenuDivider, {
            my: (0, _v8.rem)(4)
          }), (0, _v2.jsxs)(_v71.MenuItem, {
            isDisabled: _v24,
            onClick: () => {
              _v25(!0), (0, _v67.handleRemoveMember)(_v28, _v30, _v2, _v39, _v7, _v4, () => {
                _v25(!1);
              });
            },
            children: [(0, _v2.jsxs)(_v32.HStack, {
              alignItems: "center",
              gap: (0, _v8.rem)(8),
              children: [(0, _v2.jsx)(_v78.TrashBin, {
                boxSize: "xs",
                color: "status-destructive-primary"
              }), (0, _v2.jsx)(_v22.Text, {
                variant: "header-xs",
                color: "status-destructive-primary",
                children: _v0
              })]
            }), _v24 && (0, _v2.jsx)(_v58.Spinner, {
              size: "xs",
              float: "right",
              ml: (0, _v8.rem)(8)
            })]
          })]
        })]
      })]
    });
  };
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = () => {
    let _v0 = (0, _v10.useToast)(),
      {
        teamInfo: _v1,
        isSSOAvailable: _v2
      } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
      [_v3, _v4] = (0, _v3.useState)(!1),
      [_v5, _v6] = (0, _v3.useState)(void 0),
      _v7 = (0, _v3.useRef)(null);
    (0, _v73.useOutsideClick)({
      ref: _v7,
      handler: () => _v4(!1)
    });
    let _v8 = _v1.owner,
      _v9 = Number(_v8.uri.split("/users/").pop()),
      [_v10, {
        data: _v11
      }] = (0, _v83.usePatchUserTeamUser)(),
      {
        data: _v12,
        isLoading: _v13
      } = (0, _v82.useGetUserTeammembers)(() => _v9 ? {
        where: {
          userId: _v9
        },
        query: {
          roles: "owner",
          bypassBeluga: !0
        },
        select: ["excludeSso", "uri"]
      } : null),
      _v14 = _v12?.data[0],
      _v15 = Number(_v14?.uri.split("/team_users/").pop());
    (0, _v3.useEffect)(() => {
      let _v0 = _v12?.data[0]?.excludeSso ?? void 0;
      void 0 !== _v0 && _v6(!!_v0);
    }, [_v12]), (0, _v3.useEffect)(() => {
      let _v0 = _v11?.excludeSso ?? void 0;
      void 0 !== _v0 && (_v6(!!_v0), _v0({
        variant: "success",
        title: _v27.T.SSOUpdatedMessage(_v8.name, !!_v0)
      }));
    }, [_v11?.excludeSso]);
    let _v16 = async () => _v10({
      where: {
        userId: _v9,
        teamUserId: _v15
      },
      select: ["excludeSso"],
      variables: {
        excludeSso: !_v5
      }
    });
    return _v2 ? (0, _v2.jsxs)(_v68.Menu, {
      isOpen: _v3,
      children: [(0, _v2.jsx)(_v69.MenuButton, {
        as: _v39.IconButton,
        "aria-label": "owner-overflow-menu-dots",
        marginLeft: (0, _v8.rem)(8),
        icon: (0, _v2.jsx)(_v43.EllipsisV, {
          boxSize: "2xs"
        }),
        variant: "tertiary",
        borderRadius: "md",
        size: "md",
        onClick: () => _v4(!_v3)
      }), (0, _v2.jsx)(_v70.MenuList, {
        borderRadius: "md",
        py: (0, _v8.rem)(8),
        backgroundColor: "surface",
        ref: _v7,
        children: _v13 ? (0, _v2.jsx)(_v9.Skeleton, {
          height: (0, _v8.rem)(36),
          width: (0, _v8.rem)(131)
        }) : (0, _v2.jsx)(_v71.MenuItem, {
          onClick: () => {
            _v4(!1), _v16();
          },
          width: (0, _v8.rem)(131),
          children: (0, _v2.jsx)(_v22.Text, {
            variant: "body-xl",
            fontSize: "header-xs",
            children: _v5 ? _v27.T.TurnOnSSO : _v27.T.TurnOffSSO
          })
        })
      })]
    }) : null;
  };
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = (0, _v3.forwardRef)(({
      item: _v0,
      children: _v1
    }, _v2) => (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v24.Divider, {
        margin: "0",
        transform: `translateY(-${(0, _v8.rem)(2)})`,
        height: (0, _v8.rem)(1),
        borderColor: "stroke"
      }), (0, _v2.jsxs)(_v7.Flex, {
        p: (0, _v8.rem)(8),
        pl: {
          base: (0, _v8.rem)(8),
          md: (0, _v8.rem)(16)
        },
        gap: (0, _v8.rem)(8),
        alignItems: "center",
        justifyContent: "space-between",
        "data-id": "teamListItem",
        ref: _v2,
        children: [(0, _v2.jsxs)(_v7.Flex, {
          my: "auto",
          minW: 0,
          flex: "1 1 auto",
          alignItems: "center",
          pl: (0, _v8.rem)(5),
          opacity: _v0.isPending ? "0.5" : "",
          children: [(0, _v2.jsx)(_v86.Avatar, {
            size: "sm",
            src: _v0.avatarLink,
            alt: _v0.avatarLink,
            nameProps: {
              name: _v0.primaryDisplay
            },
            sx: {
              flexShrink: 0
            }
          }), (0, _v2.jsxs)(_v7.Flex, {
            paddingLeft: (0, _v8.rem)(16),
            minW: 0,
            justifyContent: "center",
            flexDirection: "column",
            children: [(0, _v2.jsx)(_v22.Text, {
              variant: "body-xl",
              "data-id": "teamMemberNameOrEmail",
              mb: "0",
              fontWeight: "medium",
              fontSize: "body-md",
              isTruncated: !0,
              children: _v0.primaryDisplay
            }), _v0.secondaryDisplay && (0, _v2.jsx)(_v21.Paragraph, {
              "data-id": "teamMemberEmail",
              size: "md",
              mb: "0",
              color: "text-secondary",
              isTruncated: !0,
              children: _v0.secondaryDisplay
            })]
          })]
        }), _v1]
      })]
    })),
    _v88 = _v0 => (0, _v2.jsxs)(_v7.Flex, {
      padding: `${(0, _v8.rem)(15)} ${(0, _v8.rem)(20)}`,
      justifyContent: "space-between",
      children: [(0, _v2.jsxs)(_v7.Flex, {
        justifyContent: "center",
        paddingLeft: (0, _v8.rem)(5),
        children: [(0, _v2.jsx)(_v9.Skeleton, {
          height: (0, _v8.rem)(40),
          width: (0, _v8.rem)(40),
          position: "relative",
          borderRadius: "100%"
        }), (0, _v2.jsxs)(_v7.Flex, {
          paddingLeft: (0, _v8.rem)(16),
          justifyContent: "center",
          flexDirection: "column",
          children: [(0, _v2.jsx)(_v9.Skeleton, {
            height: (0, _v8.rem)(19),
            width: (0, _v8.rem)(41),
            marginBottom: (0, _v8.rem)(4)
          }), (0, _v2.jsx)(_v9.Skeleton, {
            height: (0, _v8.rem)(16),
            width: (0, _v8.rem)(174)
          })]
        })]
      }), _v0.children]
    });
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = {
      members: _v27.T.SearchMembers,
      groups: _v27.T.SearchGroups,
      groupMembers: _v27.T.SearchGroupMembers
    },
    _v95 = {
      members: _v27.T.SearchMembers,
      settings: _v27.T.SearchMembers,
      groups: ""
    },
    _v96 = _v0 => _v0.substring(_v0.lastIndexOf("/") + 1);
  var _v97 = _v0.i(0);
  let _v98 = (0, _v89.default)((_v0, _v1, _v2) => {
      !(_v0.length < 1) && (_v1(), _v2 && _v2());
    }, 500),
    _v99 = ({
      afterSearch: _v0,
      entityToSearch: _v1,
      ..._v2
    }) => {
      let {
          currentPage: _v3,
          searchQuery: _v4,
          groupMembersSearchQuery: _v5,
          teamCapabilities: _v6
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        {
          updateSearchQuery: _v7,
          updateGroupMembersSearchQuery: _v8
        } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
        {
          placeholder: _v9,
          searchAction: _v10,
          disabled: _v11
        } = ((_v0, _v1) => {
          let {
              pathname: _v2
            } = (0, _v93.useRouter)(),
            [_v3, _v4] = (0, _v3.useState)(""),
            [_v5, _v6] = (0, _v3.useState)(!0),
            _v7 = _v1 === _v46.GROUP_MEMBERS ? _v1 : _v96(_v2),
            {
              fetchTeamGroupsAction: _v8,
              fetchTeamMembers: _v9,
              updateGroupMembersSearchQuery: _v10,
              updateSearchQuery: _v11
            } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
            _v12 = _v1 === _v46.GROUP_MEMBERS ? _v10 : _v11;
          return (0, _v3.useEffect)(() => {
            _v4((_v0 ? _v94 : _v95)[_v1 ?? _v96(_v2)] || ""), _v12("");
          }, [_v2, _v0, _v1]), (0, _v3.useEffect)(() => {
            _v3 ? _v6(!1) : _v6(!0);
          }, [_v3]), {
            placeholder: _v3,
            searchAction: {
              members: _v9,
              groups: _v8
            }[_v7] || _v92.default,
            disabled: _v5
          };
        })(_v6.canShowSsoGroups, _v1),
        _v12 = _v1 === _v46.GROUP_MEMBERS ? _v8 : _v7,
        _v13 = _v1 === _v46.GROUP_MEMBERS ? _v5 : _v4;
      return (0, _v3.useEffect)(() => {
        1 !== _v13.length && (_v98.cancel(), _v98(_v13, _v10, _v0));
      }, [_v13, _v3]), (0, _v2.jsx)(_v6.Box, {
        maxWidth: (0, _v8.rem)(350),
        flex: "1",
        sx: {
          "svg path": {
            fill: "text-primary"
          }
        },
        ..._v2,
        children: (0, _v2.jsx)(_v91.Search, {
          variant: "minimal",
          p: (0, _v8.rem)(15),
          borderRadius: "md",
          backgroundColor: "input-fill",
          fontWeight: "400",
          "data-id": _v9.replace(/\s+/g, ""),
          value: _v13,
          placeholder: _v9,
          onChange: _v0 => {
            _v12(_v0.currentTarget.value), _v90.GoogleTagManager.trackEvent(_v97.GTMEvent.SEARCH);
          },
          disabled: _v11,
          _placeholder: {
            color: "text-secondary",
            opacity: "1",
            marginLeft: (0, _v8.rem)(20)
          }
        })
      });
    };
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = ({
    appliedFilters: _v0,
    label: _v1,
    filterType: _v2,
    onFiltersApplied: _v3,
    onClearFilters: _v4
  }) => {
    let _v5 = (0, _v3.useRef)(null),
      [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(_v0);
    return (0, _v3.useEffect)(() => {
      _v9(_v0);
    }, [_v0]), (0, _v73.useOutsideClick)({
      ref: _v5,
      handler: () => {
        _v6 && _v7(!1);
      }
    }), (0, _v2.jsxs)(_v40.Popover, {
      isOpen: _v6,
      placement: "bottom-end",
      children: [(0, _v2.jsx)(_v42.PopoverTrigger, {
        children: (0, _v2.jsx)(_v31.Button, {
          "data-id": `team-members-${_v2}-filter`,
          variant: "secondary",
          rightIcon: _v6 ? (0, _v2.jsx)(_v102.ChevronUpSmall, {}) : (0, _v2.jsx)(_v101.ChevronDownSmall, {}),
          borderRadius: "md",
          onClick: () => _v7(!_v6),
          fontWeight: "medium",
          children: _v1
        })
      }), (0, _v2.jsx)(_v41.PopoverContent, {
        padding: "75",
        borderRadius: "md",
        maxWidth: (0, _v8.rem)(218),
        children: (0, _v2.jsxs)(_v7.Flex, {
          ref: _v5,
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
          children: [_v8.map(_v0 => (0, _v2.jsx)(_v100.Checkbox, {
            alignSelf: "flex-start",
            padding: "75",
            id: "filter-" + _v1 + "-" + _v0.value,
            onChange: () => {
              _v9(_v0 => _v0.map(_v0 => _v0.value === _v0.value ? {
                ..._v0,
                applied: !_v0.applied
              } : _v0));
            },
            isChecked: _v0.applied,
            children: _v0.label
          }, _v0.value)), (0, _v2.jsxs)(_v7.Flex, {
            gap: "75",
            paddingTop: "75",
            width: "100%",
            justifyContent: "flex-end",
            children: [(0, _v2.jsx)(_v31.Button, {
              size: "sm",
              isDisabled: !_v8.some(_v0 => _v0.applied),
              variant: "tertiary",
              onClick: () => {
                _v4(), _v7(!1);
              },
              children: (0, _v35.translate)({
                singular: "Clear all",
                dictionary: {
                  es: {
                    singular: "Borrar todo"
                  },
                  "de-DE": {
                    singular: "Alle löschen"
                  },
                  "fr-FR": {
                    singular: "Tout supprimer"
                  },
                  "ja-JP": {
                    singular: "すべて削除"
                  },
                  "ko-KR": {
                    singular: "모두 지우기"
                  },
                  "pt-BR": {
                    singular: "Limpar tudo"
                  },
                  "zh-CN": {
                    singular: "清除全部"
                  }
                }
              })
            }), (0, _v2.jsx)(_v31.Button, {
              size: "sm",
              variant: "primary",
              onClick: () => {
                _v7(!1), _v3(_v8);
              },
              children: (0, _v35.translate)({
                singular: "Apply",
                dictionary: {
                  es: {
                    singular: "Aplicar"
                  },
                  "de-DE": {
                    singular: "Anwenden"
                  },
                  "fr-FR": {
                    singular: "Appliquer"
                  },
                  "ja-JP": {
                    singular: "適用する"
                  },
                  "ko-KR": {
                    singular: "적용"
                  },
                  "pt-BR": {
                    singular: "Aplicar"
                  },
                  "zh-CN": {
                    singular: "应用"
                  }
                }
              })
            })]
          })]
        }, 1)
      })]
    });
  };
  var _v104 = _v0.i(0);
  let _v105 = () => {
    let {
        rolesFilter: _v0,
        statusesFilter: _v1,
        accessFilter: _v2,
        teamInfo: _v3,
        isSSOAvailable: _v4,
        teamCapabilities: {
          hasTeamMembersFilter: _v5,
          canLmsExport: _v6
        }
      } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
      {
        updateRolesFilter: _v7,
        updateStatusesFilter: _v8,
        updateAccessFilter: _v9
      } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
      {
        capabilities: {
          hasEnableChinaDelivery: _v10
        }
      } = (0, _v79.useCapability)(["hasEnableChinaDelivery"], _v3.owner.uri),
      _v11 = _v3.owner.metadata?.connections?.teamMembers?.roles ?? [];
    (0, _v3.useEffect)(() => {
      _v14();
    }, []);
    let _v12 = (_v0, _v1) => _v0.some((_v0, _v1) => _v0.applied !== _v1[_v1].applied),
      _v13 = (_v0, _v1) => {},
      _v14 = () => {
        _v7((0, _v104.getDefaultApplicableRoleFilters)(_v11));
      },
      _v15 = () => {
        _v8(_v20.STATUSES_FILTER_DEFAULT);
      },
      _v16 = (0, _v3.useCallback)(() => {
        _v9((0, _v104.getDefaultApplicableAccessFilters)({
          hasEnableChinaDelivery: _v10 ?? !1,
          isSSOAvailable: _v4,
          canLmsExport: _v6 ?? !1
        }));
      }, [_v6, _v10, _v4]);
    return (0, _v3.useEffect)(() => {
      _v16();
    }, [_v16]), (0, _v2.jsxs)(_v32.HStack, {
      justifyContent: "space-between",
      alignItems: "center",
      borderColor: "surface",
      children: [(0, _v2.jsx)(_v99, {
        padding: (0, _v8.rem)(0)
      }), _v5 && (0, _v2.jsxs)(_v32.HStack, {
        gap: (0, _v8.rem)(16),
        children: [[..._v0, ..._v1, ..._v2].some(_v0 => _v0.applied) && (0, _v2.jsx)(_v31.Button, {
          variant: "secondary",
          borderRadius: "md",
          onClick: () => {
            _v14(), _v15(), _v16();
          },
          fontWeight: "medium",
          children: (0, _v35.translate)({
            singular: "Clear filters",
            dictionary: {
              es: {
                singular: "Quitar los filtros"
              },
              "de-DE": {
                singular: "Filter löschen"
              },
              "fr-FR": {
                singular: "Supprimer les filtres"
              },
              "ja-JP": {
                singular: "フィルターを解除"
              },
              "ko-KR": {
                singular: "필터 지우기"
              },
              "pt-BR": {
                singular: "Limpar filtros"
              },
              "zh-CN": {
                singular: "清除过滤器"
              }
            }
          })
        }), (0, _v2.jsx)(_v22.Text, {
          variant: "body-md",
          children: _v27.T.FilterBy
        }), (0, _v2.jsx)(_v103, {
          appliedFilters: _v0,
          filterType: "role",
          label: (0, _v35.translate)({
            singular: "Role",
            dictionary: {
              es: {
                singular: "Rol"
              },
              "de-DE": {
                singular: "Rolle"
              },
              "fr-FR": {
                singular: "Rôle"
              },
              "ja-JP": {
                singular: "肩書き"
              },
              "ko-KR": {
                singular: "역할"
              },
              "pt-BR": {
                singular: "Função"
              },
              "zh-CN": {
                singular: "职位"
              }
            }
          }),
          onFiltersApplied: _v0 => {
            _v12(_v0, _v0) && _v7(_v0), _v13("role", _v0);
          },
          onClearFilters: _v14
        }), (0, _v2.jsx)(_v103, {
          appliedFilters: _v1,
          filterType: "status",
          label: (0, _v35.translate)({
            singular: "Status",
            dictionary: {
              es: {
                singular: "Estado"
              },
              "fr-FR": {
                singular: "Statut"
              },
              "ja-JP": {
                singular: "ステータス"
              },
              "ko-KR": {
                singular: "상태"
              },
              "zh-CN": {
                singular: "状态"
              }
            }
          }),
          onFiltersApplied: _v0 => {
            _v12(_v1, _v0) && _v8(_v0), _v13("status", _v0);
          },
          onClearFilters: _v15
        }), !!_v2.length && (0, _v2.jsx)(_v103, {
          appliedFilters: _v2,
          filterType: "access",
          label: _v27.T.Access,
          onFiltersApplied: _v0 => {
            _v12(_v2, _v0) && _v9(_v0), _v13("access", _v0);
          },
          onClearFilters: _v16
        })]
      })]
    });
  };
  var _v106 = _v0.i(0);
  let _v107 = ({
      label: _v0,
      sortField: _v1
    }) => {
      let {
          sort: _v2
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        {
          updateSort: _v3,
          updateDirection: _v4
        } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx);
      return (0, _v2.jsx)(_v31.Button, {
        "data-testid": "media-library-direction-filter-button",
        variant: "tertiary",
        onClick: () => {
          let _v0 = "asc" === _v2.direction ? "desc" : "asc";
          _v3(_v1), _v4(_v0);
        },
        rightIcon: _v2.type !== _v1 ? (0, _v2.jsx)(_v106.DoubleChevronDownSmall, {}) : "asc" === _v2.direction ? (0, _v2.jsx)(_v102.ChevronUpSmall, {}) : (0, _v2.jsx)(_v101.ChevronDownSmall, {}),
        fontWeight: "medium",
        color: "text-secondary",
        children: _v0
      });
    },
    _v108 = _v49.default.div.withConfig({
      displayName: "TeamMembersListHeading__ListHeaderContainer",
      componentId: "sc-1b55840f-0"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${(0, _v8.rem)(4)};
  font-weight: bold;

  > div:last-child {
    justify-content: flex-end;
    flex: 0 0;
  }
`,
    _v109 = ({
      children: _v0
    }) => (0, _v2.jsx)(_v22.Text, {
      p: `${(0, _v8.rem)(10)} ${(0, _v8.rem)(16)}`,
      variant: "body-md",
      fontWeight: "medium",
      children: _v0
    }),
    _v110 = () => {
      let {
        teamCapabilities: {
          hasTeamMembersFilter: _v0
        }
      } = (0, _v3.useContext)(_v20.ManageTeamStateCtx);
      return (0, _v2.jsx)(_v108, {
        "data-id": "teamListHeader",
        children: _v0 ? (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v107, {
            label: _v27.T.Name,
            sortField: "name"
          }), (0, _v2.jsx)(_v107, {
            label: _v27.T.Role,
            sortField: "role"
          })]
        }) : (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v109, {
            children: _v27.T.Name
          }), (0, _v2.jsx)(_v109, {
            children: _v27.T.Role
          })]
        })
      });
    },
    _v111 = () => (0, _v2.jsx)("div", {
      children: [...Array(8)].map((_v0, _v1) => (0, _v2.jsx)(_v88, {
        children: (0, _v2.jsx)(_v114, {})
      }, _v1))
    }),
    _v112 = () => {
      let _v0 = (0, _v3.useContext)(_v38.ViewerContext),
        {
          teamInfo: _v1,
          teamMembers: _v2,
          totalTeamMembers: _v3,
          currentPage: _v4,
          isTeamMembersLoading: _v5,
          isTeamInfoLoading: _v6,
          hasFetchedTeamMembers: _v7,
          hasFetchedSSOAvailability: _v8,
          searchQuery: _v9,
          enablePagination: _v10,
          notification: _v11,
          membership: _v12,
          isSSOAvailable: _v13,
          sort: _v14,
          teamCapabilities: {
            hasPlus: _v15
          }
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        {
          fetchTeamMembers: _v16,
          updateCurrentPage: _v17,
          updateInvitesRemaining: _v18,
          updateTeamMemberPermission: _v19,
          deleteTeamMember: _v20,
          setHasError: _v21,
          remindTeamMemberAboutInvite: _v22,
          showToastMessage: _v23,
          updateMembershipInfo: _v24,
          updateTeamInfoSeatDetails: _v25,
          updateTeamInfoTeamMembersCount: _v26,
          updateModalToDisplay: _v27,
          toggleTeamMemberSSO: _v28,
          fetchSSOAvailability: _v29
        } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
        {
          trackRemoveTeamMember: _v30,
          trackCopyInviteLink: _v31,
          trackSendInviteReminder: _v32,
          trackTeamMemberChangeRole: _v33
        } = (0, _v3.useContext)(_v20.ManageTeamAnalytics),
        [_v34, _v35] = (0, _v3.useState)(!0),
        [_v36, _v37] = (0, _v61.useInfiniteScroll)(_v34),
        _v38 = _v1.owner,
        _v39 = 0 === _v9.length && (!_v10 || 1 === _v4),
        _v40 = (0, _v64.useWindowSize)(),
        [_v41, _v42] = (0, _v3.useState)(!1),
        _v43 = (0, _v10.useToast)();
      (0, _v3.useEffect)(() => {
        _v11.content && !_v43.isActive(_v11.content) && _v43({
          id: _v11.content,
          title: _v11.content,
          variant: _v11.status || "neutral"
        });
      }, [_v11, _v43]), (0, _v3.useEffect)(() => {
        _v2.length < _v3 && _v17(_v4 + 1);
      }, [_v36]), (0, _v3.useEffect)(() => {
        _v5 ? _v35(!1) : _v35(_v2.length < _v3);
      }, [_v2.length, _v3, _v5]), (0, _v3.useEffect)(() => {
        _v42(_v40.width <= 680);
      }, [_v40.width]);
      let [_v44, _v45] = (0, _v3.useState)(null),
        _v46 = async (_v0, _v1, _v2) => {
          let _v3 = function (_v0, _v1, _v2) {
            if (_v0.permissionLevel !== _v1) return !0;
            if (!_v2) return !1;
            for (let _v0 of _v2) if (_v0.isRegionToggle) {
              let _v0 = _v0.region === _v0.value;
              if (_v0.checked !== _v0) return !0;
            } else {
              let _v0 = _v0.currentTeamPermissionPolicies.some(_v0 => _v0.name === _v0.value);
              if (_v0.checked !== _v0) return !0;
            }
            return !1;
          }(_v1, _v0, _v2);
          if (!_v0 || !_v3) return;
          let _v4 = _v1.permissionLevel,
            {
              permissionPolicies: _v5,
              region: _v6
            } = (_v0 => {
              let _v1 = {
                  add: [],
                  remove: []
                },
                _v2 = null;
              if (_v0) for (let _v0 of _v0) _v0.isRegionToggle ? _v2 = _v0.checked ? _v0.value : null : _v0.checked ? _v1.add.push(_v0.value) : _v1.remove.push(_v0.value);
              return {
                permissionPolicies: _v1,
                region: _v2
              };
            })(_v2);
          try {
            await _v19(_v0, _v1, _v6, _v5);
          } catch (_v0) {
            "object" == typeof _v0 && null !== _v0 && "errorCode" in _v0 && 0 === _v0.errorCode ? _v27({
              currentModalInDisplay: _v26.TeamManagementModals.ADMIN_LIMIT_UPSELL_MODAL,
              data: {
                adminLimitEntryPoint: "promotion"
              }
            }) : _v21(!0);
            return;
          }
          if (_v4 !== _v0) {
            let _v0 = (0, _v62.camelizeString)(_v4.toLowerCase()),
              _v1 = (0, _v62.camelizeString)(_v0.toLowerCase());
            _v26({
              ..._v1.teamMembersCount,
              [_v0]: _v1.teamMembersCount[_v0] - 1,
              [_v1]: _v1.teamMembersCount[_v1] + 1
            });
          }
          _v1.seatDetails && (_v0 == _v26.TeamRole.Viewer ? (_v25({
            ..._v1.seatDetails,
            currentAssignedCount: _v1.seatDetails.currentAssignedCount - 1,
            currentUnassignedCount: _v1.seatDetails.currentUnassignedCount + 1
          }), _v24({
            ..._v12,
            currentUnassignedSeatCount: _v12.currentUnassignedSeatCount + 1
          }), _v18(_v1.seatDetails.currentUnassignedCount + 1)) : _v4 == _v26.TeamRole.Viewer && (_v25({
            ..._v1.seatDetails,
            currentAssignedCount: _v1.seatDetails.currentAssignedCount + 1,
            currentUnassignedCount: _v1.seatDetails.currentUnassignedCount - 1
          }), _v24({
            ..._v12,
            currentUnassignedSeatCount: _v12.currentUnassignedSeatCount - 1
          }), _v18(_v1.seatDetails.currentUnassignedCount - 1)));
          let _v7 = parseInt(_v1.uri.substr(_v1.uri.lastIndexOf("/") + 1));
          _v33({
            new_role: _v0.toLowerCase(),
            old_role: _v4.toLowerCase(),
            team_member_id: _v7,
            is_live_permission_granted: !1,
            old_global_capability: (0, _v66.getOldGlobalCapability)(_v1),
            new_global_capability: (0, _v66.getNewGlobalCapability)(_v2)
          });
        },
        _v47 = _v0 => {
          (async () => {
            await _v20(_v0.uri);
          })().then(() => {
            let {
              permissionLevel: _v0
            } = _v0;
            _v1?.seatDetails && (_v0 == _v26.TeamRole.Admin || _v0 == _v26.TeamRole.Contributor || _v0 == _v26.TeamRole["Contributor Plus"] || _v0 == _v26.TeamRole.Uploader) && (_v25({
              ..._v1.seatDetails,
              currentAssignedCount: _v1.seatDetails.currentAssignedCount - 1,
              currentUnassignedCount: _v1.seatDetails.currentAssignedCount + 1
            }), _v24({
              ..._v12,
              currentUnassignedSeatCount: _v12.currentUnassignedSeatCount + 1
            }));
            let _v1 = (0, _v62.camelizeString)(_v0.toLowerCase());
            _v26({
              ..._v1.teamMembersCount,
              [_v1]: _v1.teamMembersCount[_v1] - 1,
              unassigned: _v1.teamMembersCount.unassigned + 1
            });
          });
          let _v1 = (0, _v67.getIdFromLink)(_v0.uri);
          _v30({
            role: _v0.role.toLowerCase(),
            team_member_id: _v1
          });
        };
      (0, _v3.useEffect)(() => {
        !_v0 || _v7 || _v6 || (async () => {
          await _v16();
        })();
      }, [_v0?.user, _v6, _v7, _v4, _v14]), (0, _v3.useEffect)(() => {
        !_v0 || _v8 || _v6 || _v29();
      }, [_v8, _v6, _v0?.user]);
      let _v48 = Number(_v0?.user?.id) === (0, _v67.getIdFromLink)(_v38?.uri || "");
      return (0, _v2.jsxs)(_v7.Flex, {
        mt: (0, _v8.rem)(20),
        p: (0, _v8.rem)(16),
        gap: (0, _v8.rem)(16),
        direction: "column",
        children: [(0, _v2.jsx)(_v105, {}), (0, _v2.jsxs)(_v6.Box, {
          children: [(0, _v2.jsx)(_v110, {}), _v39 && !_v5 && (0, _v2.jsx)(_v87, {
            item: {
              avatarLink: _v38.pictures.sizes[1].link || "https://i.vimeocdn.com/portrait/defaults-blue_72x72.png",
              primaryDisplay: `${_v38.name}${_v48 ? " (" + _v27.T.You + ")" : ""}`,
              secondaryDisplay: _v38.email
            },
            children: (0, _v2.jsxs)(_v32.HStack, {
              children: [(0, _v2.jsx)(_v113, {
                text: _v27.T.Owner
              }), (0, _v2.jsx)(_v84, {})]
            })
          }), _v9.length > 0 && !_v3 && !_v5 && (0, _v2.jsx)(_v116, {
            children: (0, _v2.jsx)(_v117, {
              children: _v27.T.NoResults(_v9)
            })
          }), !_v5 && !_v1.currentTeamSize && _v1.maxTeamSize > 0 && !_v9.length && !_v15 && _v12.tier !== _v26.Tier.Free && (0, _v2.jsxs)(_v7.Flex, {
            mt: (0, _v8.rem)(20),
            justifyContent: "center",
            borderRadius: (0, _v8.rem)(7),
            border: `${(0, _v8.rem)(1)} solid`,
            borderColor: "stroke",
            height: {
              lg: (0, _v8.rem)(60)
            },
            children: [(0, _v2.jsx)(_v59.PersonUserAdd, {
              display: "flex",
              height: (0, _v8.rem)(38),
              marginTop: (0, _v8.rem)(7),
              flexShrink: "0",
              color: "slate.400",
              minWidth: {
                sm: (0, _v8.rem)(50)
              }
            }), (0, _v2.jsx)(_v56.Header, {
              size: "sm",
              display: "flex",
              marginTop: (0, _v8.rem)(18),
              color: "slate.500",
              fontSize: (0, _v8.rem)(16),
              children: _v27.T.EmptySeats
            })]
          }), !(_v10 && _v5) && _v2.map((_v0, _v1) => {
            let _v2 = null;
            _v1 + 1 !== _v2.length || _v10 || (_v2 = _v37);
            let _v3 = _v0.applicableRoles ? _v0.applicableRoles.map(_v0 => {
                let _v1;
                return {
                  label: _v0.displayName || "",
                  value: _v0.permissionLevel || "",
                  toggles: (_v1 = [], _v0.regionOptions && _v0.regionOptions?.length > 0 && _v1.push({
                    isRegionToggle: !0,
                    value: _v0.regionOptions[0].code,
                    label: _v0.regionOptions[0].displayDescription,
                    checked: _v0.permissionLevel === _v0.permissionLevel && _v0.region === _v0.regionOptions[0].code
                  }), _v0.applicablePermissionPolicies?.regionalDelivery && _v1.push(..._v0.applicablePermissionPolicies.regionalDelivery.map(_v0 => ({
                    isRegionToggle: !1,
                    value: _v0.name,
                    label: _v0.displayDescription,
                    checked: _v0.permissionLevel === _v0.permissionLevel && _v0.currentTeamPermissionPolicies.some(_v0 => _v0.name === _v0.name)
                  }))), _v1),
                  isDisabled: _v0.isDisabled
                };
              }) : [],
              _v4 = _v3.find(_v0 => _v0.value === _v0.permissionLevel) || {
                label: (0, _v60.getTeamRoleLabel)(_v0.permissionLevel),
                value: _v0.permissionLevel,
                toggles: []
              },
              _v5 = ((_v0, _v1) => {
                let {
                    user: _v2
                  } = _v0,
                  _v3 = Number(_v1?.user?.id) === (0, _v67.getIdFromLink)(_v2?.uri || "");
                return {
                  avatarLink: _v2 ? _v2.pictures.sizes[1].link : "https://i.vimeocdn.com/portrait/defaults-blue_72x72.png",
                  primaryDisplay: `${_v2 ? _v2.name : _v0.email}${_v3 ? " (" + _v27.T.You + ")" : ""}`,
                  secondaryDisplay: _v2 ? _v0.email : "",
                  isPending: _v0.status === _v26.MemberStatus.Pending
                };
              })(_v0, _v0),
              _v6 = _v1 > _v2.length - 4;
            return (0, _v2.jsx)(_v87, {
              ref: _v2,
              item: _v5,
              children: (0, _v2.jsx)(_v115, {
                "data-id": "rolesMenuButton",
                children: _v0.isLoading ? (0, _v2.jsx)(_v114, {}) : _v0.status === _v26.MemberStatus.Pending || !_v0.user || _v0 && _v0.user && _v0?.user.uri != _v0.user.uri ? (0, _v2.jsxs)(_v2.Fragment, {
                  children: [(0, _v2.jsx)(_v85.default, {
                    selectedRole: _v4,
                    permissionLevels: _v3,
                    permissionLevelDescriptions: _v0.applicableRoles ? _v0.applicableRoles.map(_v0 => ({
                      label: _v0.displayName || "",
                      description: _v0.displayDescription || ""
                    })) : [],
                    personalTeamFolder: _v0.metadata?.connections?.personalTeamFolder?.uri,
                    onClosed: _v0 => {
                      _v46(_v0.value || _v0.permissionLevel, _v0, _v0.toggles);
                    },
                    onDelete: () => {
                      _v47(_v0);
                    },
                    isMobile: _v41,
                    deleteButtonText: _v27.T.RemoveFromTeam,
                    isPending: _v0.status === _v26.MemberStatus.Pending,
                    positionAbove: _v6,
                    oldRole: _v0.permissionLevel,
                    selectedUserName: _v5.primaryDisplay
                  }), (0, _v2.jsx)(_v81, {
                    triggerDataId: `team-member-${_v1 + 1}-overflow`,
                    teamMemberUri: _v0.uri,
                    teamMemberUserUri: _v0.user?.uri,
                    deleteButtonText: _v27.T.RemoveFromTeam,
                    isPending: _v0.status === _v26.MemberStatus.Pending,
                    teamMemberPermissionLevel: _v0.permissionLevel,
                    onDelete: () => {
                      _v47(_v0);
                    },
                    personalTeamFolder: _v0.metadata?.connections?.personalTeamFolder?.uri,
                    selectedUserName: _v5.primaryDisplay,
                    resendInvite: () => (_v0 => {
                      if (_v0.status === _v26.MemberStatus.Pending && _v0.inviteUrl) try {
                        _v22(_v0.uri);
                        let _v0 = (0, _v67.getIdFromLink)(_v0.uri);
                        _v32({
                          role: _v0.permissionLevel.toLowerCase(),
                          team_member_id: _v0
                        });
                      } catch {
                        _v21(!0);
                      }
                    })(_v0),
                    copyInviteLink: () => (_v0 => {
                      if (_v0.status === _v26.MemberStatus.Pending && _v0.inviteUrl) try {
                        (0, _v65.default)(_v0.inviteUrl), _v23(_v27.T.Copied);
                        let _v0 = (0, _v67.getIdFromLink)(_v0.uri);
                        _v31({
                          role: _v0.role.toLowerCase(),
                          team_member_id: _v0
                        });
                      } catch {
                        _v21(!0);
                      }
                    })(_v0),
                    recentlyReminded: _v0.recentlyReminded,
                    hasShareFolders: _v0.applicablePermissionPolicies.folder.length > 0,
                    onShareFolders: () => {
                      _v27({
                        currentModalInDisplay: _v26.TeamManagementModals.ADD_TO_FOLDERS_MODAL,
                        data: {
                          teamMembersToShareFolders: [_v0]
                        }
                      });
                    },
                    onViewGroupsForMember: _v0 => _v45({
                      ..._v5,
                      uri: _v0
                    }),
                    isSSOAvailable: _v13,
                    isSSOEnabled: !_v0.excludeSso,
                    onToggleSSO: () => _v28(_v0, !_v0.excludeSso),
                    hasLmsUser: _v0?.hasLmsUser,
                    onLmsUserManage: () => {
                      _v27({
                        currentModalInDisplay: _v26.TeamManagementModals.MANAGE_LEARNER_ID,
                        data: {
                          ownerId: _v1.teamData.ownerId,
                          lmsUserEmail: _v0.email
                        }
                      });
                    }
                  })]
                }) : (0, _v2.jsx)("div", {
                  children: (0, _v2.jsx)(_v113, {
                    text: _v27.T.PermissionLevels.Admin
                  })
                })
              })
            }, _v0.uri.substring(_v0.uri.lastIndexOf("/") + 1));
          })]
        }), (_v5 || !_v10 && _v34) && (0, _v2.jsx)(_v111, {}), _v10 && _v3 > 25 && (0, _v2.jsx)(_v6.Box, {
          margin: `${(0, _v8.rem)(20)} 0`,
          float: "right",
          children: (0, _v2.jsx)(_v57.Pagination, {
            page: _v4,
            pageSize: 25,
            count: _v3,
            onPageChange: ({
              page: _v0
            }) => {
              _v0 <= 0 || _v3 <= (_v0 - 1) * 25 || _v17(_v0);
            }
          })
        }), _v0?.user?.id && _v44 ? (0, _v2.jsx)(_v63.UserGroupsModal, {
          teamMemberUri: _v44.uri,
          ownerId: (0, _v67.getIdFromLink)(_v38.uri),
          onClose: () => _v45(null),
          userAvatar: _v44.avatarLink,
          userTitle: _v44.primaryDisplay || _v44.secondaryDisplay
        }) : null]
      });
    },
    _v113 = ({
      text: _v0
    }) => (0, _v2.jsx)(_v22.Text, {
      variant: "body-xl",
      fontSize: "body-md",
      fontWeight: "medium",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      p: `0 0 0 ${(0, _v8.rem)(16)}`,
      color: "text-primary",
      children: _v0
    }),
    _v114 = () => (0, _v2.jsx)(_v9.Skeleton, {
      display: "flex",
      width: (0, _v8.rem)(150),
      height: (0, _v8.rem)(40)
    }),
    _v115 = _v49.default.div.withConfig({
      displayName: "TeamMembersList__RoleContainer",
      componentId: "sc-9b0cebe9-0"
    })`
  display: flex;
  align-items: center;
`,
    _v116 = _v49.default.div.withConfig({
      displayName: "TeamMembersList__NoResultsWrapper",
      componentId: "sc-9b0cebe9-1"
    })`
  display: flex;
  padding-right: ${(0, _v8.rem)(200)};
  padding-left: ${(0, _v8.rem)(200)};
  justify-content: center;
  align-items: center;
`,
    _v117 = ({
      children: _v0,
      dataId: _v1
    }) => (0, _v2.jsx)(_v22.Text, {
      variant: "body-xl",
      display: "flex",
      textAlign: "center",
      fontWeight: (0, _v8.rem)(400),
      fontSize: (0, _v8.rem)(26),
      color: "slate.500",
      wordBreak: "break-word",
      "data-id": _v1,
      children: _v0
    }),
    _v118 = () => (0, _v2.jsx)(_v58.Spinner, {
      display: "flex",
      justifyContent: "center"
    });
  var _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0);
  let _v122 = _v49.default.div.withConfig({
      displayName: "styles__UpgradeRequestListItem",
      componentId: "sc-7a84386f-0"
    })`
  @media (min-width: ${_v120.TABLET}) {
    min-width: ${(0, _v119.rem)(600)};
  }

  display: flex;
  padding: ${(0, _v119.rem)(20)};
  border: ${(0, _v119.rem)(1)} solid var(--vimeo-colors-stroke);
  border-radius: ${(0, _v119.rem)(5)};
  justify-content: space-between;
  gap: ${(0, _v119.rem)(10)} ${(0, _v119.rem)(100)};
  flex-wrap: wrap;

  font-family: Arial, system-ui, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: var(--vimeo-colors-text-secondary);
  font-size: ${(0, _v119.rem)(14)};
  line-height: ${(0, _v119.rem)(20)};
`,
    _v123 = _v49.default.div.withConfig({
      displayName: "styles__ButtonContainer",
      componentId: "sc-7a84386f-1"
    })`
  min-width: ${(0, _v119.rem)(160)};
  margin-top: ${(0, _v119.rem)(18)};
  display: flex;
`,
    _v124 = (0, _v49.default)(_v31.Button).withConfig({
      displayName: "styles__ButtonStyled",
      componentId: "sc-7a84386f-2"
    })`
  width: 100%;
`,
    _v125 = (0, _v49.default)(_v124).withConfig({
      displayName: "styles__ButtonReject",
      componentId: "sc-7a84386f-3"
    })`
  margin-right: ${(0, _v119.rem)(8)};
`,
    _v126 = _v49.default.div.withConfig({
      displayName: "styles__TeamUserInfo",
      componentId: "sc-7a84386f-4"
    })`
  display: flex;
  flex-direction: column;
`,
    _v127 = _v49.default.div.withConfig({
      displayName: "styles__ActionButtonsStyled",
      componentId: "sc-7a84386f-5"
    })`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`,
    _v128 = _v49.default.div.withConfig({
      displayName: "styles__LoaderWrapper",
      componentId: "sc-7a84386f-6"
    })`
  margin: auto;
  margin-bottom: ${(0, _v119.rem)(24)};
`;
  _v49.default.div.withConfig({
    displayName: "styles__StatusTextWrapper",
    componentId: "sc-7a84386f-7"
  })`
  margin: auto;
  font-style: italic;
`;
  let _v129 = _v49.default.div.withConfig({
      displayName: "styles__ModalContentWrapper",
      componentId: "sc-7a84386f-8"
    })`
  ${({
      theme: _v0
    }) => _v0.shadows[200]}
  position: relative;
  padding: ${(0, _v119.rem)(27)} ${(0, _v119.rem)(21)} ${(0, _v119.rem)(16)} ${(0, _v119.rem)(21)};
  border-radius: ${(0, _v119.rem)(8)};
  background: var(--vimeo-colors-surface);

  h6 {
    color: var(--vimeo-colors-text-primary);
    font-weight: 700;
    font-size: ${(0, _v119.rem)(18)};
  }
`,
    _v130 = _v49.default.div.withConfig({
      displayName: "styles__StyledButtonContainer",
      componentId: "sc-7a84386f-9"
    })`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  ${_v0 => _v0.fullWidth ? _v49.css`
          width: 100%;
        ` : ""}
`,
    _v131 = _v49.default.div.withConfig({
      displayName: "styles__ModalHeaderContainer",
      componentId: "sc-7a84386f-10"
    })`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  color: var(--vimeo-colors-text-primary);
`,
    _v132 = _v49.default.div.withConfig({
      displayName: "styles__StyledModalFooter",
      componentId: "sc-7a84386f-11"
    })`
  margin-top: ${(0, _v119.rem)(10)};
  & .invite-modal-footer {
    border-top: 0;
    ${_v121.media.sm`
      padding-top: ${(0, _v119.rem)(10)};
      margin-top: ${(0, _v119.rem)(33)};
    `}
  }
`;
  var _v133 = _v0.i(0),
    _v134 = _v0.i(0);
  let _v135 = async (_v0, _v1, _v2, _v3, _v4 = null) => {
      if (!_v3) throw Error("no viewer");
      let _v5 = _v2 ?? _v3.user?.id,
        _v6 = encodeURIComponent(_v133.RoleUpgradeField.join(",")),
        _v7 = `/teams/${_v5}/role_upgrade/${_v0.id}?fields=${_v6}`;
      return (0, _v134.makeApiCall)(_v7, _v3, "POST", {
        action: _v1,
        reject_reason: _v4
      });
    },
    _v136 = async (_v0, _v1, _v2, _v3) => {
      let _v4, _v5;
      if (!_v1) throw Error("no viewer");
      return (0, _v134.makeApiCall)((_v4 = _v2 ?? _v1.user?.id, _v5 = encodeURIComponent(_v133.RoleUpgradeField.join(",")), `/teams/${_v4}/role_upgrades?fields=${_v5}`), _v1).then(_v0 => {
        _v0(_v0.data.filter(_v0 => _v0.user && _v0.teamUser)), _v3();
      });
    },
    _v137 = (0, _v49.withTheme)(_v3.default.memo(({
      theme: _v0,
      isOpen: _v1,
      onRejectReasonModalClosed: _v2,
      upgradeRequest: _v3,
      onUpgradeRequestRejected: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(""),
        [_v7, _v8] = (0, _v3.useState)(!1),
        [_v9, _v10] = (0, _v3.useState)(!1),
        {
          teamInfo: {
            teamData: {
              ownerId: _v11
            }
          }
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        _v12 = (0, _v3.useContext)(_v38.ViewerContext),
        _v13 = (0, _v2.jsxs)(_v129, {
          children: [(0, _v2.jsx)(_v131, {
            children: _v3 && (0, _v2.jsx)("div", {
              children: (0, _v35.translate)({
                singular: "Reject {USER_NAME} ({EMAIL}) from becoming {NEW_ROLE}",
                replacements: {
                  USER_NAME: _v3.user.name,
                  EMAIL: () => (0, _v2.jsx)("strong", {
                    children: _v3.teamUser.email
                  }),
                  NEW_ROLE: _v3.roleName
                },
                dictionary: {
                  es: {
                    singular: "Rechazar que {USER_NAME} ({EMAIL}) se convierta en {NEW_ROLE}"
                  },
                  "de-DE": {
                    singular: "{USER_NAME} ({EMAIL}) verweigern, {NEW_ROLE} zu werden"
                  },
                  "fr-FR": {
                    singular: "Refuser que {USER_NAME} ({EMAIL}) devienne {NEW_ROLE}"
                  },
                  "ja-JP": {
                    singular: "{USER_NAME}（{EMAIL}）さんが{NEW_ROLE}になることを拒否する"
                  },
                  "ko-KR": {
                    singular: "{USER_NAME}({EMAIL})님이 {NEW_ROLE} 역할을 맡는 것을 거부합니다"
                  },
                  "pt-BR": {
                    singular: "Não permitir que {USER_NAME} ({EMAIL}) se torne {NEW_ROLE}"
                  },
                  "zh-CN": {
                    singular: "拒绝 {USER_NAME} ({EMAIL}) 成为 {NEW_ROLE}"
                  }
                }
              })
            })
          }), (0, _v2.jsx)(_v55.CloseButton, {
            onClick: () => _v2()
          }), _v7 && (0, _v2.jsx)(_v54.Notice, {
            format: "negative",
            children: (0, _v35.translate)({
              singular: "Something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "Algo salió mal. Inténtalo de nuevo."
                },
                "de-DE": {
                  singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。 再度お試しください。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "出错了。请重试。"
                }
              }
            })
          }), (0, _v2.jsxs)(_v50.FormControl, {
            isDisabled: _v9,
            children: [(0, _v2.jsx)(_v51.FormLabel, {
              htmlFor: "reject-reason-text",
              children: (0, _v35.translate)({
                singular: "Reject reason",
                dictionary: {
                  es: {
                    singular: "Motivo del rechazo"
                  },
                  "de-DE": {
                    singular: "Ablehnungsgrund"
                  },
                  "fr-FR": {
                    singular: "Rejeter le motif"
                  },
                  "ja-JP": {
                    singular: "拒否の理由"
                  },
                  "ko-KR": {
                    singular: "거부 이유"
                  },
                  "pt-BR": {
                    singular: "Motivo da rejeição"
                  },
                  "zh-CN": {
                    singular: "拒绝原因"
                  }
                }
              })
            }), (0, _v2.jsx)(_v52.Textarea, {
              id: "reject-reason-text",
              placeholder: "Type a message (optional)",
              defaultValue: _v5 || "",
              onChange: _v0 => _v6(_v0.target.value)
            })]
          }), (0, _v2.jsx)(_v132, {
            children: (0, _v2.jsx)(_v53.Modal.Footer, {
              className: "invite-modal-footer",
              children: (0, _v2.jsx)(_v130, {
                children: _v9 ? (0, _v2.jsx)(_v118, {}) : (0, _v2.jsx)(_v31.Button, {
                  onClick: () => {
                    _v3 && (_v10(!0), _v135(_v3, "reject", _v11, _v12, _v5).then(() => {
                      _v6(""), _v4(_v3), _v2();
                    }).catch(() => {
                      _v8(!0);
                    }).finally(() => {
                      _v10(!1);
                    }));
                  },
                  size: "sm",
                  children: (0, _v35.translate)({
                    singular: "Reject access",
                    dictionary: {
                      es: {
                        singular: "Rechazar el acceso"
                      },
                      "de-DE": {
                        singular: "Zugriff ablehnen"
                      },
                      "fr-FR": {
                        singular: "Rejeter l'accès"
                      },
                      "ja-JP": {
                        singular: "アクセスを拒否"
                      },
                      "ko-KR": {
                        singular: "액세스 거부"
                      },
                      "pt-BR": {
                        singular: "Rejeitar acesso"
                      },
                      "zh-CN": {
                        singular: "拒绝访问"
                      }
                    }
                  })
                })
              })
            })
          })]
        });
      return (0, _v2.jsx)(_v49.ThemeProvider, {
        theme: _v0,
        children: (0, _v2.jsx)(_v53.Modal, {
          size: "lg",
          theme: _v0,
          active: _v1,
          content: _v13
        })
      });
    }));
  var _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = () => {
    let {
        membership: {
          currentUnassignedSeatCount: _v0,
          isFreeTrial: _v1,
          isReverseFreeTrial: _v2,
          seatCapTrial: _v3,
          seatCount: _v4,
          tier: _v5
        },
        teamCapabilities: {
          hasPerSeatPricingModelTeamMember: _v6
        },
        teamInfo: {
          seatDetails: _v7,
          untranslatedUserRole: _v8
        }
      } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
      _v9 = _v5 === _v26.Tier.Creator,
      {
        isBlocked: _v10
      } = (0, _v139.useIsSeatChangeBlocked)({
        tier: _v5
      }),
      _v11 = _v3 || _v7?.basePlanCount || 0,
      _v12 = () => !!(_v6 && !_v9 && !_v10 && !_v1 && _v0 <= 0),
      _v13 = () => !!_v6 && !_v9 && !_v10 && _v1 && !_v2 && _v0 <= 0 && _v4 < _v11 && _v8 === _v26.TeamRole.Owner,
      _v14 = () => !!_v6 && !_v9 && !_v10 && _v1 && !_v2 && _v0 <= 0 && _v4 < _v11 && _v8 === _v26.TeamRole.Admin;
    return {
      approveAllDisabled: _v0 => {
        let _v1;
        return _v1 = _v0.length, (!_v6 || !(_v0 >= _v1)) && !!_v6 || _v6 && !1;
      },
      approveDisabled: () => !(!_v12() && !_v13() && !_v14()) || _v6 && !1,
      showPurchaseSeatsBanner: _v12,
      showAddSeatsBanner: _v13,
      showContactOwnerBanner: _v14
    };
  };
  var _v141 = _v0.i(0),
    _v142 = _v0.i(0);
  let _v143 = "accept",
    _v144 = ({
      upgradeRequest: _v0,
      onUpgradeRequestRemoved: _v1,
      onError: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        {
          teamInfo: {
            teamData: {
              ownerId: _v5
            }
          },
          membership: _v6
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        {
          updateIsOperationOngoing: _v7,
          updateMembershipInfo: _v8
        } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
        {
          trackRoleUpgradeRequests: _v9
        } = (0, _v3.useContext)(_v20.ManageTeamAnalytics),
        _v10 = (0, _v3.useContext)(_v38.ViewerContext),
        {
          approveDisabled: _v11
        } = _v140(),
        _v12 = (_v0, _v1) => {
          _v4(!0), _v7(!0), _v135(_v0, _v1, _v5, _v10).then(_v0 => {
            _v1({
              ..._v0,
              status: _v0.status
            }), _v1 === _v143 ? (_v8({
              ..._v6,
              currentUnassignedSeatCount: _v6.currentUnassignedSeatCount - 1
            }), _v9({
              actor_team_role: _v0.teamUser.role.toLowerCase(),
              name: _v46.RoleUpgradeEvents.APPROVE_REQUEST,
              approve_count: 1,
              requested_team_role: _v0.roleName.toLowerCase()
            })) : _v9({
              actor_team_role: _v0.teamUser.role.toLowerCase(),
              name: _v46.RoleUpgradeEvents.DENY_REQUEST,
              approve_count: 0,
              requested_team_role: _v0.roleName.toLowerCase()
            });
          }).catch(() => {
            _v2();
          }).finally(() => {
            _v4(!1), _v7(!1);
          });
        };
      return (0, _v2.jsx)(_v127, {
        children: (0, _v2.jsx)(_v123, {
          children: _v3 ? (0, _v2.jsx)(_v128, {
            children: (0, _v2.jsx)(_v58.Spinner, {
              size: "md"
            })
          }) : _v3 || 0 !== _v0.status ? (0, _v2.jsx)(_v2.Fragment, {}) : (0, _v2.jsxs)(_v2.Fragment, {
            children: [(0, _v2.jsx)(_v125, {
              onClick: () => _v12(_v0, "reject"),
              variant: "tertiary",
              size: "sm",
              children: _v27.T.Deny
            }), (0, _v2.jsx)(_v124, {
              onClick: () => _v12(_v0, _v143),
              size: "sm",
              variant: "positive",
              isDisabled: _v11(),
              children: _v27.T.Approve
            })]
          })
        })
      });
    },
    _v145 = _v49.default.div.withConfig({
      displayName: "UpgradeRequest__UpgradeRequestAnimated",
      componentId: "sc-d29bfdd3-0"
    })`
  margin-bottom: ${(0, _v119.rem)(20)};
  max-height: ${(0, _v119.rem)(100)};
  opacity: 1;
  &.upgrade-request-animated {
    transition:
      max-height ${500}ms,
      opacity ${500}ms,
      margin-bottom ${500}ms;
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
  }
`,
    _v146 = (0, _v49.default)(_v56.Header).withConfig({
      displayName: "UpgradeRequest__Title",
      componentId: "sc-d29bfdd3-1"
    })`
  margin: 0;
  font-weight: 700;
  color: var(--vimeo-colors-text-primary);
`,
    _v147 = (0, _v49.default)(_v21.Paragraph).withConfig({
      displayName: "UpgradeRequest__Email",
      componentId: "sc-d29bfdd3-2"
    })`
  margin: 0;
  color: var(--vimeo-colors-text-secondary);
`,
    _v148 = (0, _v49.default)(_v146).withConfig({
      displayName: "UpgradeRequest__RoleAccess",
      componentId: "sc-d29bfdd3-3"
    })`
  margin-top: ${(0, _v119.rem)(8)};
  font-weight: 400;
  color: var(--vimeo-colors-text-primary);
`,
    _v149 = ({
      upgradeRequest: _v0,
      onError: _v1,
      onUpgradeRequestRemoved: _v2,
      rejectedUpgradeRequest: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useState)(""),
        _v6 = _v0 => {
          _v5("upgrade-request-animated"), setTimeout(() => {
            _v5(""), _v2(_v0);
          }, 500);
        };
      return (0, _v3.useEffect)(() => {
        _v3 && _v6(_v3);
      }, [_v3]), (0, _v2.jsx)(_v145, {
        className: _v4,
        children: (0, _v2.jsxs)(_v122, {
          children: [(0, _v2.jsxs)(_v126, {
            children: [(0, _v2.jsx)(_v146, {
              as: "h5",
              size: "sm",
              children: _v0.user.name
            }), (0, _v2.jsx)(_v147, {
              size: "md",
              children: _v0.teamUser.email
            }), (0, _v2.jsx)(_v148, {
              as: "h5",
              size: "sm",
              children: _v27.T.RoleUpgradeRequest(_v0.roleName)
            })]
          }), (0, _v2.jsx)(_v144, {
            upgradeRequest: _v0,
            onError: _v1,
            onUpgradeRequestRemoved: _v6
          })]
        })
      });
    };
  var _v150 = ((_v1 = _v150 || {})[_v1.PERMISSION_OWNER = 1] = "PERMISSION_OWNER", _v1[_v1.PERMISSION_ADMIN = 2] = "PERMISSION_ADMIN", _v1[_v1.PERMISSION_UPLOADER = 3] = "PERMISSION_UPLOADER", _v1[_v1.PERMISSION_CONTRIBUTOR = 4] = "PERMISSION_CONTRIBUTOR", _v1[_v1.PERMISSION_VIEWER = 5] = "PERMISSION_VIEWER", _v1);
  let _v151 = (0, _v49.default)(_v31.Button).withConfig({
      displayName: "UpgradeRequestsModal__StyledTeamRequestsButton",
      componentId: "sc-3a03c8fa-0"
    })`
  min-width: ${(0, _v119.rem)(108)};
  margin-right: 0;
  background-color: transparent;
  color: var(--vimeo-colors-text-primary);
  border-color: transparent;

  &:hover {
    color: var(--vimeo-colors-text-primary);
  }
`,
    _v152 = (0, _v49.default)(_v56.Header).withConfig({
      displayName: "UpgradeRequestsModal__Count",
      componentId: "sc-3a03c8fa-1"
    })`
  border-radius: 50%;
  width: ${(0, _v119.rem)(24)};
  height: ${(0, _v119.rem)(24)};
  background: var(--vimeo-colors-red-600);
  color: var(--vimeo-colors-white);
  text-align: center;
  display: inline-block;
  margin-left: ${(0, _v119.rem)(10)};
  line-height: ${(0, _v119.rem)(24)};
`,
    _v153 = (0, _v49.default)(_v31.Button).withConfig({
      displayName: "UpgradeRequestsModal__ApproveAllButton",
      componentId: "sc-3a03c8fa-2"
    })`
  margin-bottom: ${(0, _v119.rem)(20)};
`,
    _v154 = (0, _v49.default)(_v54.Notice).attrs({
      format: "primary"
    }).withConfig({
      displayName: "UpgradeRequestsModal__ContactNotice",
      componentId: "sc-3a03c8fa-3"
    })`
  display: flex;
  width: 100%;
  background: color-mix(in srgb, var(--vimeo-colors-vimeoBlue-500) 15%, transparent);
  border: color-mix(in srgb, var(--vimeo-colors-vimeoBlue-500) 15%, transparent) !important;
  svg * {
    fill: var(--vimeo-colors-vimeoBlue-500);
  }
  & svg {
    margin-top: ${_v0 => _v0.marginTop ? (0, _v119.rem)(_v0.marginTop) : 0};
  }
`,
    _v155 = (0, _v49.withTheme)(_v3.default.memo(({
      theme: _v0,
      isOpen: _v1,
      upgradeRequests: _v2,
      onUpgradeRequestsUpdate: _v3,
      onUpgradeRequestsModalClosed: _v4,
      onUpgradeRequestsModalOpen: _v5,
      onRejectReasonModalOpen: _v6,
      rejectedUpgradeRequest: _v7
    }) => {
      let [_v8, _v9] = (0, _v3.useState)(!1),
        [_v10, _v11] = (0, _v3.useState)(!1),
        _v12 = (0, _v3.useContext)(_v38.ViewerContext),
        {
          teamMembers: _v13,
          teamInfo: {
            teamData: {
              ownerId: _v14
            }
          }
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        {
          updateTeamMemberRoleState: _v15,
          updateModalToDisplay: _v16
        } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
        {
          trackRoleUpgradeRequests: _v17
        } = (0, _v3.useContext)(_v20.ManageTeamAnalytics),
        {
          showPurchaseSeatsBanner: _v18,
          showAddSeatsBanner: _v19,
          showContactOwnerBanner: _v20,
          approveAllDisabled: _v21
        } = _v140(),
        _v22 = () => {
          _v11(!0), Promise.all(_v2.map(_v0 => _v135(_v0, "accept", _v14, _v12))).then(_v0 => {
            for (let _v0 of _v0) 1 === _v0.status && _v23(_v0);
            _v3(_v0.filter(_v0 => 0 === _v0.status)), _v17({
              actor_team_role: _v2[0].teamUser.role.toLowerCase(),
              name: _v46.RoleUpgradeEvents.APPROVE_ALL,
              approve_count: _v0.length,
              requested_team_role: _v0[0].roleName.toLowerCase()
            });
          }).catch(() => {
            _v9(!0);
          }).finally(() => {
            _v11(!1);
          });
        },
        _v23 = _v0 => {
          for (let _v0 of _v13) if (_v0.email === _v0.teamUser.email) {
            let _v0 = {
              ..._v0,
              role: _v0.roleName,
              permissionLevel: _v150[_v0.roleName]
            };
            _v15(_v150[_v0.roleName], _v0);
          }
        },
        _v24 = () => {
          _v4(), _v16({
            currentModalInDisplay: _v26.TeamManagementModals.PURCHASE_SEATS_MODAL,
            data: {
              purchaseSeatModalLocation: _v138.PURCHASE_TRIGGERED_FROM.ROLE_CHANGE_MENU,
              seatsCount: _v2.length
            }
          });
        },
        _v25 = (0, _v2.jsxs)(_v129, {
          children: [(0, _v2.jsx)(_v141.ModalHeader, {
            theme: _v0,
            style: {
              fontSize: (0, _v119.rem)(18),
              marginBottom: (0, _v119.rem)(28)
            },
            children: _v27.T.Requests(_v2.length)
          }), (0, _v2.jsx)(_v55.CloseButton, {
            onClick: () => _v4()
          }), _v8 && (0, _v2.jsx)(_v54.Notice, {
            format: "negative",
            children: _v27.T.SomethingWentWrong
          }), _v2.map((_v0, _v1) => (0, _v2.jsx)(_v149, {
            upgradeRequest: _v0,
            onError: () => _v9(!0),
            onUpgradeRequestRemoved: _v0 => {
              1 === _v0.status && _v23(_v0), _v3(_v0 => _v0.filter(_v0 => _v0.id !== _v0.id));
            },
            onRejectReasonModalOpen: _v6,
            rejectedUpgradeRequest: _v7
          }, _v1)), (0, _v2.jsx)(_v132, {
            children: (0, _v2.jsx)(_v53.Modal.Footer, {
              className: "invite-modal-footer",
              children: (0, _v2.jsx)(_v130, {
                fullWidth: _v18() || _v19() || _v20(),
                children: (0, _v2.jsx)(() => _v18() ? (0, _v2.jsx)(_v142.ContactUsBanner, {
                  message: _v27.T.RoleUpgradePurchaseSeats,
                  buttonMessage: _v27.T.PurchaseSeats,
                  isDismissable: !1,
                  openInNewTab: !1,
                  onClick: _v24,
                  buttonLink: "/manage/team/members",
                  style: {
                    width: "100%",
                    borderRadius: (0, _v119.rem)(3)
                  }
                }) : _v19() ? (0, _v2.jsx)(_v142.ContactUsBanner, {
                  message: _v27.T.UpgradeRoleAddSeatsToTrial,
                  buttonMessage: _v27.T.AddSeats,
                  isDismissable: !1,
                  openInNewTab: !1,
                  onClick: _v24,
                  buttonLink: "/manage/team/members",
                  style: {
                    width: "100%",
                    borderRadius: (0, _v119.rem)(3)
                  }
                }) : _v20() ? (0, _v2.jsx)(_v154, {
                  format: "primary",
                  children: _v27.T.UpgradeRoleContactOwnerInTrial
                }) : _v10 ? (0, _v2.jsx)(_v118, {}) : _v21(_v2) ? (0, _v2.jsx)(_v23.Tooltip, {
                  label: _v27.T.ApproveAllDisabledTooltip,
                  placement: "top",
                  hasArrow: !0,
                  children: (0, _v2.jsx)(_v153, {
                    style: {
                      opacity: "0.5"
                    },
                    size: "sm",
                    children: _v27.T.ApproveAll
                  })
                }) : (0, _v2.jsx)(_v153, {
                  onClick: _v22,
                  size: "sm",
                  children: _v27.T.ApproveAll
                }), {})
              })
            })
          })]
        });
      return (0, _v2.jsx)(_v2.Fragment, {
        children: _v2.length > 0 && (0, _v2.jsx)(_v49.ThemeProvider, {
          theme: _v0,
          children: (0, _v2.jsx)(_v53.Modal, {
            size: "lg",
            theme: _v0,
            active: _v1,
            content: _v25,
            onOpen: () => _v4(),
            children: (0, _v2.jsxs)(_v151, {
              theme: _v0,
              variant: "ghost",
              onClick: () => _v5(),
              children: [_v27.T.TeamRequests, (0, _v2.jsx)(_v152, {
                size: "xs",
                children: _v2.length
              })]
            })
          })
        })
      });
    })),
    _v156 = ({
      upgradeRequests: _v0,
      onUpgradeRequestsUpdate: _v1
    }) => {
      let [_v2, _v3] = (0, _v3.useState)(!1),
        [_v4, _v5] = (0, _v3.useState)(!1),
        [_v6, _v7] = (0, _v3.useState)(null),
        [_v8, _v9] = (0, _v3.useState)(null);
      return (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v155, {
          upgradeRequests: _v0,
          isOpen: _v4,
          onUpgradeRequestsUpdate: _v1,
          onRejectReasonModalOpen: _v0 => {
            _v7(_v0), _v5(!1), _v3(!0);
          },
          onUpgradeRequestsModalClosed: () => _v5(!1),
          onUpgradeRequestsModalOpen: () => _v5(!0),
          rejectedUpgradeRequest: _v8
        }), (0, _v2.jsx)(_v137, {
          isOpen: _v2,
          onRejectReasonModalClosed: () => {
            _v3(!1), _v5(!0);
          },
          upgradeRequest: _v6,
          onUpgradeRequestRejected: _v0 => _v9(_v0)
        })]
      });
    };
  var _v157 = _v0.i(0);
  let _v158 = ({
      children: _v0,
      dataId: _v1,
      href: _v2,
      rightIcon: _v3,
      onClick: _v4
    }) => (0, _v2.jsx)(_v31.Button, {
      as: _v157.default,
      href: _v2,
      variant: "tertiary",
      justifyContent: "space-between",
      "data-id": _v1,
      rightIcon: _v3,
      onClick: _v4,
      children: _v0
    }),
    _v159 = ({
      upgradeRequests: _v0,
      setUpgradeRequests: _v1
    }) => {
      let {
          enablePagination: _v2,
          isTeamInfoLoading: _v3,
          membership: _v4,
          teamCapabilities: {
            canAddTeamMembers: _v5,
            hasEnterprise: _v6,
            hasPerSeatPricingModelTeamMember: _v7,
            hasViewTeamMemberActivityUpsell: _v8,
            canViewTeamMemberActivity: _v9
          },
          teamInfo: _v10,
          selectedTeamMembers: _v11
        } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
        _v12 = (0, _v3.useContext)(_v38.ViewerContext),
        {
          fetchTeamMembers: _v13,
          fetchTeamInfo: _v14,
          updateCurrentPage: _v15,
          updateSearchQuery: _v16,
          updateIsInviteModalOpen: _v17,
          updateIsMembershipLoading: _v18,
          updateSelectedTeamMembers: _v19
        } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
        _v20 = (0, _v3.useMemo)(() => ({
          apiUrl: _v12?.apiUrl || "",
          jwt: _v12?.jwt || "",
          ownerUri: _v10?.owner?.uri
        }), [_v12, _v10]),
        {
          trackManageTeamPageView: _v21,
          trackDownloadUsersClick: _v22
        } = (0, _v3.useContext)(_v20.ManageTeamAnalytics),
        [_v23, _v24] = (0, _v3.useState)(!1),
        _v25 = parseInt(_v10?.owner?.uri?.split("/")[2]),
        _v26 = "/enterprise/contact",
        _v27 = `/users/${_v25}/teammembers/export?format=csv`,
        _v28 = `/analytics/teams/${_v25}/users`;
      return (0, _v2.jsxs)(_v32.HStack, {
        alignContent: "center",
        children: [(0, _v2.jsxs)(_v44, {
          children: [(0, _v2.jsx)(_v158, {
            variant: "secondary",
            rightIcon: _v6 ? (0, _v2.jsx)(_v33.DownloadArrow, {
              style: {
                minWidth: (0, _v8.rem)(13),
                width: (0, _v8.rem)(13)
              }
            }) : (0, _v2.jsx)(_v48, {
              href: _v26,
              children: (0, _v35.translate)({
                singular: "Enterprise",
                dictionary: {
                  "fr-FR": {
                    singular: "Entreprise"
                  },
                  "zh-CN": {
                    singular: "企业"
                  }
                }
              })
            }),
            dataId: "downloadUsersButton",
            href: _v6 ? _v27 : _v26,
            onClick: _v22,
            children: _v27.T.DownloadUsers
          }), (0, _v2.jsx)(_v158, {
            rightIcon: _v8 ? (0, _v2.jsx)(_v48, {
              href: _v26,
              children: (0, _v35.translate)({
                singular: "Enterprise",
                dictionary: {
                  "fr-FR": {
                    singular: "Entreprise"
                  },
                  "zh-CN": {
                    singular: "企业"
                  }
                }
              })
            }) : void 0,
            href: _v9 ? _v28 : _v26,
            children: _v27.T.ViewTeamActivity
          })]
        }), _v0.length > 0 && (0, _v2.jsx)(_v156, {
          upgradeRequests: _v0,
          onUpgradeRequestsUpdate: _v0 => _v1(_v0)
        }), !_v3 && (0, _v2.jsx)(_v45.TeamApiConfigCtx.Provider, {
          value: _v20,
          children: (0, _v2.jsxs)(_v2.Fragment, {
            children: [(0, _v2.jsx)(_v6.Box, {
              float: "right",
              children: (0, _v2.jsx)(_v36.InviteModal, {
                onSuccess: () => {
                  _v2 || _v15(1), _v14(!1), _v13(_v12), _v16(""), _v17(!1), _v18(!0);
                },
                onClick: () => _v21({
                  sub_feature: "invite"
                }),
                disabled: _v4.tier === _v26.Tier.Free || _v4.tier === _v26.Tier.Creator && !1 === _v5 || _v4.tier === _v26.Tier.CustomSelfServe && _v10?.seatDetails?.currentUnassignedCount === 0 || (_v12?.user?.account === _v37.AccountType.Basic || _v12?.user?.account === _v37.AccountType.Plus) && _v10.untranslatedUserRole != _v26.TeamRole.Admin || _v7 && _v4.isFreeTrial && !_v4.currentUnassignedSeatCount && _v4.seatCount >= _v46.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v10.currentTeamSize >= _v10.teamMembersCount.admin + _v10.teamMembersCount.contributor + _v4.currentUnassignedSeatCount + _v46.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS
              })
            }), (0, _v2.jsx)(_v30.AddToFoldersModal, {
              teamOwnerId: _v25,
              selectedTeamMembers: _v11,
              isOpen: _v23,
              onSuccess: () => {
                _v24(!1), _v19([]);
              },
              closeModal: () => {
                _v24(!1), _v19([]);
              },
              children: "/users/109215026" === _v20.ownerUri && _v11.length ? (0, _v2.jsx)(_v31.Button, {
                py: (0, _v8.rem)(4),
                "data-id": "inviteButton",
                isDisabled: !_v25 || !_v11.length,
                onClick: () => {
                  _v24(!0);
                },
                leftIcon: (0, _v2.jsx)(_v34.Folder, {}),
                children: "Add To Folders"
              }) : void 0
            })]
          })
        })]
      });
    };
  var _v160 = _v0.i(0);
  function _v161() {
    let [_v0, _v1] = (0, _v3.useState)(!1),
      [_v2, _v3] = (0, _v3.useState)({
        format: "primary",
        message: ""
      }),
      _v4 = (0, _v3.useContext)(_v38.ViewerContext),
      {
        isRoleUpgradeRequestsLoaded: _v5,
        hasError: _v6,
        hasMembershipInfoLoadFailed: _v7,
        teamInfo: _v8,
        teamCapabilities: {
          canAddTeamMembers: _v9,
          hasPerSeatPricingModelTeamMember: _v10,
          hasEnterprise: _v11,
          hasManageTeamBillingSettingsPage: _v12
        },
        isTeamInfoLoading: _v13,
        isFetchPaymentMethodsLoading: _v14,
        teamsPageNotice: _v15,
        isMembershipInfoLoading: _v16,
        isOperationOngoing: _v17,
        isUploadQuotaLoading: _v18,
        membership: _v19,
        modalToDisplay: {
          data: {
            seatsCount: _v20 = 1
          } = {}
        },
        roleUpgradeRequests: _v21
      } = (0, _v3.useContext)(_v20.ManageTeamStateCtx),
      {
        setHasError: _v22,
        updateTeamsPageNotice: _v23,
        updateIsRoleUpgradeRequestsLoaded: _v24,
        updateRoleUpgradeRequests: _v25
      } = (0, _v3.useContext)(_v20.ManageTeamDispatchCtx),
      [_v26, _v27] = (0, _v3.useState)(_v21 ?? []),
      _v28 = _v19.tier === _v26.Tier.Creator,
      _v29 = (0, _v10.useToast)(),
      {
        isMergeLibrariesVisible: _v30
      } = (0, _v12.useMergeLibrariesVisible)(_v4?.user?.id, {
        currentTeamSize: _v8.currentTeamSize
      }),
      _v31 = _v4?.teamUser?.ownerId ?? _v4?.user?.id,
      _v32 = _v4 && _v31 ? {
        apiUrl: _v4.apiUrl,
        jwt: _v4.jwt,
        ownerId: _v31
      } : void 0;
    (0, _v3.useEffect)(() => {
      if (_v8.untranslatedUserRole !== _v26.TeamRole.Owner && _v8.untranslatedUserRole !== _v26.TeamRole.Admin) return;
      let _v0 = new URLSearchParams(window.location.search).get("approve-upgrade-request");
      if (_v0) {
        if (!_v4) throw Error("No viewer");
        (0, _v134.makeApiCall)(`/teams/${_v4.user?.id}/role_upgrade/${_v0}?fields=user.name`, _v4, "POST", {
          action: "accept"
        }).then(_v0 => {
          _v3({
            format: "positive",
            message: _v27.T.UserIsPromoted(_v0.user.name)
          });
        }).catch(() => {
          _v3({
            format: "negative",
            message: _v27.T.SomethingWentWrong
          });
        }).finally(() => {
          _v1(!0), !_v5 && _v8.teamData.ownerId && _v136(_v27, _v4, null, () => _v24(!0));
        });
      } else !_v5 && _v8.teamData.ownerId && _v136(_v27, _v4, _v8.teamData.ownerId, () => _v24(!0));
    }, [_v8.untranslatedUserRole, _v4, _v8.teamData.ownerId, _v5]), (0, _v3.useEffect)(() => {
      _v17 || _v25(_v26);
    }, [_v26]), (0, _v17.useOttRedirect)({
      toast: _v29,
      config: {
        message: (0, _v15.translate)({
          singular: "Your streaming site team is now managed on Vimeo",
          dictionary: {
            es: {
              singular: "El equipo de su sitio de transmisión ahora se administra en Vimeo"
            },
            "de-DE": {
              singular: "Das Team für Ihre Streaming-Website wird jetzt auf Vimeo verwaltet."
            },
            "fr-FR": {
              singular: "L'équipe de votre site de streaming est désormais gérée sur Vimeo"
            },
            "ja-JP": {
              singular: "ストリーミングサイトのチームがVimeoで管理されるようになりました"
            },
            "ko-KR": {
              singular: "스트리밍 사이트 팀은 이제 Vimeo에서 관리됩니다."
            },
            "pt-BR": {
              singular: "A equipe do seu site de transmissão agora é gerenciada no Vimeo"
            },
            "zh-CN": {
              singular: "您的流媒体网站团队现在在 Vimeo 上管理。"
            }
          }
        })
      }
    });
    let _v33 = (0, _v3.useMemo)(() => _v8.currentTeamSize < _v8.maxTeamSize || _v11, [_v11, _v8.currentTeamSize, _v8.maxTeamSize]),
      {
        isTeamManagementVisible: _v34,
        loading: _v35
      } = (0, _v13.useTeamManagementVisible)(),
      _v36 = !_v35 && !_v34;
    (0, _v3.useEffect)(() => {
      _v36 && window.location.replace("/home");
    }, [_v36]);
    let _v37 = _v13 || _v16 || void 0 == _v9 || void 0 == _v11 || void 0 == _v10;
    return _v35 || _v36 ? null : (0, _v2.jsxs)("div", {
      children: [(0, _v2.jsx)(_v16.SettingsPageContentHeader, {
        title: _v27.T.Members
      }), _v6 && (0, _v2.jsx)(_v6.Box, {
        pt: "1.75rem",
        children: (0, _v2.jsx)(_v4.Alert, {
          status: "error",
          onClose: () => _v22(!1),
          children: (0, _v2.jsx)(_v5.AlertDescription, {
            children: _v27.T.Errors.RequestError
          })
        })
      }), _v7 && (0, _v2.jsx)(_v6.Box, {
        pt: "1.5rem",
        children: (0, _v2.jsx)(_v4.Alert, {
          status: "error",
          children: (0, _v2.jsx)(_v5.AlertDescription, {
            children: _v27.T.Errors.MembershipInfoLoadError
          })
        })
      }), _v0 && (0, _v2.jsx)(_v6.Box, {
        mt: (0, _v8.rem)(46),
        children: (0, _v2.jsx)(_v4.Alert, {
          status: "negative" === _v2.format ? "error" : "positive" === _v2.format ? "success" : "info",
          children: (0, _v2.jsx)(_v5.AlertDescription, {
            children: _v2.message
          })
        })
      }), !_v37 && (_v37 ? null : _v10 ? (0, _v2.jsx)(_v19.SeatLimitNotice, {
        untranslatedUserRole: _v8.untranslatedUserRole
      }) : _v33 || _v8.untranslatedUserRole !== _v26.TeamRole.Admin ? void 0 : (0, _v2.jsx)(_v19.GeneralNotice, {
        status: "info",
        children: _v27.T.AccountUpgradeMessage(_v8.currentTeamSize) + _v27.T.ContactMessage
      })), !_v37 && _v15 && !_v28 && (0, _v2.jsx)(_v18.PurchaseSeatsNotice, {
        mt: (0, _v8.rem)(28),
        mb: "0",
        noticeType: _v15,
        seatsCount: _v20,
        onClose: () => _v23(null)
      }), !_v7 && (0, _v2.jsx)(_v2.Fragment, {
        children: _v13 || !_v5 || void 0 == _v11 || void 0 == _v10 || _v10 && (_v8.untranslatedUserRole === _v26.TeamRole.Owner && _v12 && (_v18 || _v16 || _v14) || _v8.untranslatedUserRole === _v26.TeamRole.Admin && _v16) ? (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v7.Flex, {
            mt: (0, _v8.rem)(16),
            height: (0, _v8.rem)(90),
            children: (0, _v2.jsx)(_v9.Skeleton, {})
          }), (0, _v2.jsx)(_v111, {})]
        }) : (0, _v2.jsxs)(_v6.Box, {
          pb: (0, _v8.rem)(128),
          pt: (0, _v8.rem)(26),
          children: [(0, _v2.jsxs)(_v7.Flex, {
            justify: "space-between",
            align: {
              base: "stretch",
              sm: "center"
            },
            gap: {
              base: (0, _v8.rem)(16),
              sm: "none"
            },
            p: `${(0, _v8.rem)(24)} ${(0, _v8.rem)(16)} ${(0, _v8.rem)(24)} ${(0, _v8.rem)(8)}`,
            backgroundColor: "surface",
            borderRadius: "lg",
            direction: {
              base: "column",
              sm: "row"
            },
            children: [(0, _v2.jsx)(_v28, {}), (0, _v2.jsx)(_v159, {
              upgradeRequests: _v26,
              setUpgradeRequests: _v27
            })]
          }), (0, _v2.jsx)(_v6.Box, {
            backgroundColor: "surface",
            borderRadius: "lg",
            children: (0, _v2.jsx)(_v112, {})
          }), _v30 && _v32 && _v8.untranslatedUserRole === _v26.TeamRole.Owner && (0, _v2.jsx)(_v6.Box, {
            mt: (0, _v8.rem)(24),
            children: (0, _v2.jsx)(_v11.MergeLibrariesBanner, {
              userId: _v4?.user?.id,
              apiConfig: _v32,
              onMerged: () => window.location.reload()
            })
          })]
        })
      })]
    });
  }
  (0, _v14.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v161.getLayout = _v160.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v161], 0);
}