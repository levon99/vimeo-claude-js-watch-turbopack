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
    _v14 = _v0.i(0);
  let _v15 = (0, _v2.memo)(() => {
    let _v0 = (0, _v11.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v1 = (0, _v11.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.data.canInvite),
      {
        teamPermissions: _v2
      } = (0, _v10.useGetTeamPermissions)({
        query: {
          accessType: _v10.ACCESS_TYPE.INHERITED,
          entityTypes: [_v9.EntityTypes.TeamUser, _v9.EntityTypes.TeamGroup],
          page: 1,
          perPage: 1
        },
        shouldSkip: () => !_v1
      }),
      {
        trackOpenInheritedAccessScreen: _v3
      } = (0, _v8.useBpEventService)(),
      _v4 = _v2 ? _v2.total : 0;
    return _v4 ? (0, _v1.jsx)(_v3.HStack, {
      justifyContent: "space-between",
      alignItems: "center",
      w: "100%",
      children: (0, _v1.jsx)(_v14.ItemBox, {
        iconBox: (0, _v1.jsx)(_v13.GroupIcon, {
          bgColor: "var(--vimeo-colors-blue-100)",
          iconColor: "#000"
        }),
        headerTitle: (0, _v7.translate)({
          singular: "People with access to the parent folder",
          dictionary: {
            es: {
              singular: "Personas con acceso a la carpeta principal"
            },
            "de-DE": {
              singular: "Personen mit Zugriff auf den übergeordneten Ordner"
            },
            "fr-FR": {
              singular: "Les personnes ayant accès au dossier parent"
            },
            "ja-JP": {
              singular: "親フォルダーにアクセスできる人"
            },
            "ko-KR": {
              singular: "상위 폴더에 대한 액세스 권한이 있는 사람들"
            },
            "pt-BR": {
              singular: "Pessoas com acesso à pasta principal"
            },
            "zh-CN": {
              singular: "有权访问父文件夹的人员"
            }
          }
        }),
        subHeaderTitle: _v4 ? (0, _v7.translate)({
          singular: "{COUNT} member",
          plural: "{COUNT} members",
          count: _v4,
          replacements: {
            COUNT: _v4
          },
          dictionary: {
            es: {
              singular: "{COUNT} miembro",
              plural: "{COUNT} miembros"
            },
            "de-DE": {
              singular: "{COUNT} Mitglied",
              plural: "{COUNT} Mitglieder"
            },
            "fr-FR": {
              singular: " {COUNT} membre",
              plural: "{COUNT} membres"
            },
            "ja-JP": {
              singular: "{COUNT} 人のメンバー",
              plural: "メンバー{COUNT}人"
            },
            "ko-KR": {
              singular: "회원 {COUNT}명",
              plural: "멤버 {COUNT}명"
            },
            "pt-BR": {
              singular: "{COUNT} membro",
              plural: "{COUNT} membros"
            },
            "zh-CN": {
              singular: "{COUNT} 名成员",
              plural: "{COUNT} 名成员"
            }
          }
        }) : (0, _v1.jsx)(_v5.Spinner, {
          size: "xs"
        }),
        rightTrigger: (0, _v1.jsx)(_v4.IconButton, {
          size: "md",
          variant: "tertiary",
          "aria-label": "People with access to the parent folder",
          onClick: () => {
            _v0(_v12.ShareModalState.InheritedAccessList), _v3();
          },
          children: (0, _v1.jsx)(_v6.ChevronRightSmall, {})
        })
      })
    }) : null;
  });
  _v0.s(["InheritedAccessItem", 0, _v15], 0);
  var _v16 = _v0.i(0),
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
    _v36 = _v0.i(0);
  let _v37 = ({
    onDelete: _v0,
    deleteButtonText: _v1
  }) => {
    let _v2 = (0, _v35.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300");
    return _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v33.MenuDivider, {
        color: "stroke"
      }), (0, _v1.jsx)(_v34.MenuItem, {
        onClick: _v0,
        color: "status-destructive-primary",
        _hover: {
          color: "status-destructive-primary"
        },
        _focus: {
          color: "status-destructive-primary",
          bgColor: _v2
        },
        fontWeight: "bold",
        py: (0, _v17.rem)(15),
        "data-testid": "rsm_permissions_menu_delete_button",
        children: _v1
      })]
    }) : !_v0 && _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v33.MenuDivider, {
        color: "stroke"
      }), (0, _v1.jsx)(_v34.MenuItem, {
        py: (0, _v17.rem)(15),
        icon: (0, _v1.jsx)(_v36.Users, {}),
        isDisabled: !0,
        children: _v1
      })]
    }) : null;
  };
  var _v38 = _v0.i(0);
  let _v39 = {
      as: _v20.Button,
      rightIcon: (0, _v1.jsx)(_v31.ChevronDown, {}),
      variant: "tertiary"
    },
    _v40 = (0, _v2.forwardRef)(({
      selectedRole: _v0,
      permissionLevels: _v1,
      permissionLevelDescriptions: _v2,
      onSelect: _v3,
      onDelete: _v4,
      deleteButtonText: _v5,
      menuTriggerButton: _v6,
      isLoading: _v7
    }, _v8) => {
      let {
          modalWrapperRef: _v9
        } = (0, _v2.useContext)(_v38.RefsState),
        _v10 = (0, _v11.useGlobalStore)(({
          shared: _v0
        }) => _v0.data.isMobileOrTab),
        _v11 = (0, _v11.useGlobalStore)(({
          resourceProps: _v0
        }) => _v0.resourceType),
        _v12 = _v9.ALLOWED_RESOURCE_FOR_COMMENT_POLICY.includes(_v11),
        _v13 = (0, _v2.useCallback)(_v0 => _v2.find(_v0 => _v0.label === _v0.label), [_v2]),
        _v14 = (0, _v1.jsxs)(_v25.MenuList, {
          "data-testid": "rsm_permissions_menu_list",
          children: [(0, _v1.jsx)(_v26.MenuOptionGroup, {
            defaultValue: _v0.value,
            type: "radio",
            onChange: _v0 => _v3?.(_v0),
            children: _v1.map((_v0, _v1) => (0, _v1.jsxs)(_v24.MenuItemOption, {
              "data-testid": `rsm_permissions_menu_option_${_v1}`,
              isDisabled: _v0.isDisabled,
              value: _v0.value,
              icon: (0, _v1.jsx)(_v30.Checkmark, {
                color: "text-primary"
              }),
              children: [(0, _v1.jsx)(_v21.Header, {
                size: "xs",
                as: "h6",
                mb: (0, _v17.rem)(2),
                children: _v0?.label
              }), (0, _v1.jsx)(_v27.Paragraph, {
                size: "md",
                color: "text-secondary",
                children: _v13(_v0)?.description
              })]
            }, _v1))
          }), (0, _v1.jsx)(_v37, {
            onDelete: _v4,
            deleteButtonText: _v5
          })]
        }),
        _v15 = _v10 ? _v39 : {
          ..._v39,
          width: "100%"
        };
      return _v7 ? (0, _v1.jsx)(_v29.Skeleton, {
        "data-testid": "rsm_permissions_menu_skeleton",
        height: (0, _v17.rem)(32),
        borderRadius: "sm"
      }) : (0, _v1.jsxs)(_v22.Menu, {
        isLazy: !0,
        placement: "bottom-end",
        children: [(0, _v1.jsx)(_v1.Fragment, {
          children: _v6 ?? (0, _v1.jsx)(_v23.MenuButton, {
            ref: _v8,
            "data-id": _v12 ? "rsm_permissions_menu" : "rsm_permissions_menu_button",
            "data-testid": "rsm_permissions_menu_button",
            onClick: _v0 => {
              _v0.stopPropagation(), _v19.GoogleTagManager.trackEvent(_v32.GTMEvent.OPEN_ROLE_MENU);
            },
            size: "sm",
            ..._v15,
            children: _v0.label
          })
        }), (0, _v1.jsx)(_v28.Portal, {
          containerRef: _v9,
          children: _v14
        })]
      });
    });
  _v0.s(["RoleMenu", 0, _v40], 0), _v0.s(["ResourceShareModalRoleMenu", 0, ({
    onSelect: _v0 = () => {},
    onDelete: _v1,
    applicablePermissionPolicies: _v2,
    currentPermissions: _v3,
    assignedPermission: _v4,
    canBeRemoved: _v5 = !0,
    isLoading: _v6 = !1
  }) => {
    let _v7 = (0, _v11.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasMultiUserSharing),
      _v8 = [],
      _v9 = [];
    _v2.forEach(_v0 => {
      _v8.push({
        label: _v0.displayName,
        value: _v9.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value
      }), _v9.push({
        label: _v0.displayName,
        description: _v9.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].description
      });
    });
    let _v10 = _v5 ? (0, _v7.translate)({
        singular: "Remove access",
        dictionary: {
          es: {
            singular: "Quitar acceso"
          },
          "de-DE": {
            singular: "Zugriff entfernen"
          },
          "fr-FR": {
            singular: "Supprimer l'accès"
          },
          "ja-JP": {
            singular: "アクセスを削除"
          },
          "ko-KR": {
            singular: "액세스 권한 제거"
          },
          "pt-BR": {
            singular: "Remover acesso"
          },
          "zh-CN": {
            singular: "移除访问权限"
          }
        }
      }) : (0, _v7.translate)({
        singular: "This member has access from elsewhere and cannot be removed.",
        dictionary: {
          es: {
            singular: "Este miembro tiene acceso desde otro lugar y no se puede eliminar."
          },
          "de-DE": {
            singular: "Dieses Mitglied hat anderweitig Zugriff erhalten und kann nicht entfernt werden."
          },
          "fr-FR": {
            singular: "L'accès de ce membre provient d'une autre source et ne peut pas être supprimé."
          },
          "ja-JP": {
            singular: "このメンバーは他の場所からアクセスでき、削除できません。"
          },
          "ko-KR": {
            singular: "이 팀원은 다른 곳으로부터 액세스할 수 있으며 제거할 수 없습니다."
          },
          "pt-BR": {
            singular: "Este integrante da equipe tem acesso de outro lugar e não pode ser removido."
          },
          "zh-CN": {
            singular: "此成员可以从其他位置访问，并且无法移除。"
          }
        }
      }),
      _v11 = {
        selectedRole: (0, _v18.getSelectedRole)(_v7 ? _v4 : _v3),
        permissionLevels: _v8,
        permissionLevelDescriptions: _v9,
        onSelect: _v0,
        deleteButtonText: _v10,
        isLoading: _v6
      };
    return _v5 && (_v11.onDelete = _v1), (0, _v1.jsx)(_v16.Box, {
      minW: (0, _v17.rem)(110),
      children: (0, _v1.jsx)(_v40, {
        ..._v11
      })
    });
  }], 0);
}