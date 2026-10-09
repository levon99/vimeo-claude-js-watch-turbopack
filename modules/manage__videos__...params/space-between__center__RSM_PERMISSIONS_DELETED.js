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
    _v26 = _v0.i(0);
  let _v27 = _v0 => {
    let _v1,
      _v2,
      _v3,
      {
        updatePermission: _v4,
        removePermission: _v5,
        teamPermission: _v6,
        isLoading: _v7
      } = _v0,
      _v8 = (0, _v2.useContext)(_v20.ViewerContext),
      _v9 = (0, _v21.useGlobalStore)(({
        screen: _v0
      }) => _v0.main),
      _v10 = _v6.teamEntity,
      _v11 = _v10.metadata.connections.user?.uri === _v8?.user?.uri,
      _v12 = (0, _v21.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasMultiUserSharing);
    return (0, _v1.jsx)(_v26.TeamMemberInfo, {
      teamEntity: _v10,
      children: (_v1 = _v6.currentPermissionPolicies?.[0], _v2 = _v6.assignedPermissionPolicy, _v3 = !!_v6.inheritanceSource || !!(_v12 && _v2 && _v2.uri !== _v1?.uri), _v1 ? _v11 || _v9 === _v22.ShareModalState.InheritedAccessList ? (0, _v1.jsx)(_v25.RoleMenuHeader, {
        children: _v1?.displayName
      }) : _v6.applicablePermissionPolicies && _v6.applicablePermissionPolicies.length > 0 ? (0, _v1.jsxs)(_v5.Flex, {
        children: [_v3 && (0, _v1.jsx)(_v23.InheritedPolicyInfo, {
          teamResourcePermission: _v6
        }), (0, _v1.jsx)(_v24.ResourceShareModalRoleMenu, {
          onDelete: _v5,
          onSelect: _v4,
          applicablePermissionPolicies: _v6.applicablePermissionPolicies,
          currentPermissions: _v1,
          assignedPermission: _v2,
          canBeRemoved: !!_v6.metadata?.interactions.remove,
          isLoading: _v7
        })]
      }) : null : null)
    });
  };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = ({
    teamPermission: _v0,
    onPermissionUpdate: _v1,
    onPermissionDelete: _v2,
    lastElementRef: _v3
  }) => {
    let {
        logError: _v4
      } = (0, _v28.useErrorTracking)(),
      _v5 = (0, _v21.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      {
        changeTeamPermission: _v6,
        removeTeamPermission: _v7,
        isLoading: _v8
      } = (0, _v13.useTeamPermissionsActions)(),
      [_v9, _v10] = (0, _v2.useState)(!1),
      _v11 = _v8 || _v9,
      _v12 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = (_v0.applicablePermissionPolicies ?? []).find(_v0 => _v11.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value === _v0);
        _v1 && _v0.metadata?.interactions.edit && (await _v6(_v0, _v1), _v10(!0), await _v1?.(), _v10(!1));
      }, [_v6, _v1, _v0]),
      _v13 = (0, _v2.useCallback)(async () => {
        _v0.metadata?.interactions.remove?.uri && (await _v7(_v0), _v2?.(_v0, _v5));
      }, [_v2, _v7, _v5, _v0]);
    return _v0.currentPermissionPolicies ? (0, _v1.jsx)(_v17.HStack, {
      ref: _v3,
      justifyContent: "space-between",
      alignItems: "center",
      w: "100%",
      children: (() => {
        let {
          type: _v0
        } = (0, _v29.getTeamEntityDetails)(_v0.teamEntity);
        if (!_v0.currentPermissionPolicies) return null;
        switch (_v0) {
          case _v11.EntityTypes.TeamUser:
            return (0, _v1.jsx)(_v27, {
              teamPermission: _v0,
              updatePermission: _v12,
              removePermission: _v13,
              isLoading: _v11
            });
          case _v11.EntityTypes.TeamGroup:
            return (0, _v1.jsx)(_v19.TeamGroupItem, {
              teamEntity: _v0.teamEntity,
              applicablePermissionPolicies: _v0.applicablePermissionPolicies ?? [],
              currentPermissions: _v0.currentPermissionPolicies[0],
              assignedPermission: _v0.assignedPermissionPolicy,
              interactions: _v0.metadata?.interactions,
              updatePermission: _v12,
              removePermission: _v13,
              isLoading: _v11
            });
          case _v11.EntityTypes.AllTeam:
            return (0, _v1.jsx)(_v18.AllTeamItem, {
              applicablePermissionPolicies: _v0.applicablePermissionPolicies ?? [],
              currentPermissions: _v0.currentPermissionPolicies[0],
              assignedPermission: _v0.assignedPermissionPolicy,
              interactions: _v0.metadata?.interactions,
              updatePermission: _v12,
              removePermission: _v13,
              isLoading: _v11
            });
          default:
            return null;
        }
      })()
    }) : null;
  };
  var _v31 = _v0.i(0);
  let _v32 = (0, _v2.memo)(({
      allTeamItem: _v0
    }) => {
      let {
          revalidateTeamPermissions: _v1,
          revalidateAllTeamPermission: _v2
        } = (0, _v21.useGlobalStore)((0, _v4.useShallow)(({
          teamPermissions: _v0
        }) => ({
          revalidateTeamPermissions: _v0.actions.revalidateTeamPermissions,
          revalidateAllTeamPermission: _v0.actions.revalidateAllTeamPermission
        }))),
        _v3 = (0, _v2.useCallback)(() => (_v1(), _v2()), [_v2, _v1]);
      return (0, _v1.jsx)(_v30, {
        teamPermission: _v0,
        onPermissionUpdate: _v3,
        onPermissionDelete: _v3
      });
    }),
    _v33 = new Set([_v22.ResourceType.Folder, _v22.ResourceType.Video]),
    _v34 = ({
      teamPermissions: _v0,
      creator: _v1,
      canInvite: _v2,
      canLoadMorePermissions: _v3
    }) => {
      let {
          isFetchingMoreTeamPermissions: _v4,
          isInitTeamPermissionsLoading: _v5
        } = (0, _v21.useGlobalStore)((0, _v4.useShallow)(({
          teamPermissions: _v0
        }) => ({
          isFetchingMoreTeamPermissions: _v0.isFetchingMoreTeamPermissions,
          isInitTeamPermissionsLoading: _v0.isInitTeamPermissionsLoading
        }))),
        _v6 = (0, _v21.useGlobalStore)(({
          teamPermissions: _v0
        }) => _v0.actions.revalidateTeamPermissions),
        _v7 = (0, _v21.useGlobalStore)(({
          screen: _v0
        }) => _v0.main),
        {
          hasParent: _v8,
          resourceType: _v9
        } = (0, _v21.useGlobalStore)((0, _v4.useShallow)(({
          resourceProps: _v0
        }) => ({
          hasParent: _v0.data.hasParent,
          resourceType: _v0.resourceType
        }))),
        _v10 = (0, _v21.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setRevalidateAllTeamPermission),
        {
          fetchMoreTeamPermissions: _v11
        } = (0, _v13.useTeamPermissionsActions)(),
        _v12 = (0, _v7.useToast)(),
        {
          teamPermissions: _v13,
          revalidateTeamPermissions: _v14
        } = (0, _v12.useGetTeamPermissions)({
          query: {
            accessType: _v12.ACCESS_TYPE.ANY,
            entityTypes: [_v11.EntityTypes.AllTeam],
            page: 1,
            perPage: 1
          },
          shouldSkip: () => !_v2 || _v7 === _v22.ShareModalState.InheritedAccessList
        });
      (0, _v2.useEffect)(() => {
        _v10(_v14);
      }, [_v14, _v10]);
      let _v15 = _v5 || _v4,
        _v16 = _v8 && _v33.has(_v9) && _v7 !== _v22.ShareModalState.InheritedAccessList,
        _v17 = (0, _v2.useCallback)(async (_v0, _v1) => {
          await _v6(), window.dispatchEvent(new CustomEvent("RSM_PERMISSIONS_DELETED"));
          let _v2 = _v1 === _v22.ResourceType.Album,
            {
              type: _v3
            } = (0, _v29.getTeamEntityDetails)(_v0.teamEntity);
          if (_v3 === _v11.EntityTypes.TeamUser) {
            let _v0 = _v0.teamEntity.displayName ?? _v0.teamEntity.email,
              _v1 = "rsm-share-remove-user-toast";
            _v12.isActive(_v1) || _v12({
              title: _v2 ? (0, _v9.translate)({
                singular: "{UserDisplayName} removed.",
                replacements: {
                  UserDisplayName: _v0
                },
                dictionary: {
                  "zh-CN": {
                    singular: "{UserDisplayName} 已移除。"
                  }
                }
              }) : (0, _v9.translate)({
                singular: "Access updated",
                dictionary: {
                  es: {
                    singular: "Acceso actualizado"
                  },
                  "de-DE": {
                    singular: "Zugriff aktualisiert"
                  },
                  "fr-FR": {
                    singular: "Accès mis à jour"
                  },
                  "ja-JP": {
                    singular: "アクセス権が更新されました"
                  },
                  "ko-KR": {
                    singular: "액세스가 업데이트되었습니다."
                  },
                  "pt-BR": {
                    singular: "Acesso atualizado"
                  },
                  "zh-CN": {
                    singular: "访问权限已更新"
                  }
                }
              }),
              id: _v1
            });
          }
        }, [_v6, _v12]),
        _v18 = (0, _v2.useCallback)(async () => {
          await _v6(), window.dispatchEvent(new CustomEvent("RSM_PERMISSIONS_UPDATED"));
        }, [_v6]),
        _v19 = (0, _v2.useMemo)(() => _v0?.data?.map(_v0 => (0, _v1.jsx)(_v30, {
          teamPermission: _v0,
          onPermissionDelete: _v17,
          onPermissionUpdate: _v18
        }, _v0.teamEntity.uri)), [_v17, _v18, _v0?.data]),
        _v20 = (0, _v2.useMemo)(() => _v13?.data[0], [_v13?.data]),
        _v21 = (0, _v2.useMemo)(() => {
          let _v0 = [],
            _v1 = (0, _v1.jsx)(_v5.Flex, {
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              children: (0, _v1.jsx)(_v6.Spinner, {})
            });
          if (_v20?.currentPermissionPolicies) {
            let _v0 = (0, _v1.jsx)(_v32, {
              allTeamItem: _v20
            });
            _v0.push(_v0);
          }
          return _v2 && _v0.push((0, _v1.jsx)(_v14.AllOwnerAdminItem, {})), _v1 && _v0.push((0, _v1.jsx)(_v15.CreatorItem, {
            creator: _v1
          })), _v19?.length && _v0.push(..._v19), _v16 && _v0.push((0, _v1.jsx)(_v16.InheritedAccessItem, {})), _v15 && _v0.push(_v1), _v0;
        }, [_v20, _v2, _v1, _v15, _v16, _v19]),
        _v22 = {
          ...(() => {
            if (_v7 === _v22.ShareModalState.InheritedAccessList) {
              let _v0 = {
                minHeight: (0, _v8.rem)(265),
                maxHeight: "60dvh"
              };
              return _v15 ? {
                ..._v0,
                justifyContent: "center",
                alignItems: "center"
              } : _v0;
            }
            return {
              minHeight: (0, _v8.rem)(265),
              maxHeight: (0, _v8.rem)(265)
            };
          })(),
          sx: _v31.ScrollbarStyle,
          pb: (0, _v8.rem)(16),
          pr: (0, _v8.rem)(8),
          className: "team-permissions-list-content"
        };
      return (0, _v1.jsx)(_v10.VirtualizedList, {
        listItems: _v21,
        wrapperOverrides: _v22,
        canLoadMore: _v3,
        isFetchingMore: _v4,
        loadMore: _v11
      });
    };
  _v0.s(["TeamPermissionsList", 0, _v34], 0), _v0.s(["InheritedAccessListScreen", 0, () => {
    let _v0 = (0, _v21.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.data.canInvite),
      _v1 = (0, _v21.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setTeamPermissionsData),
      _v2 = (0, _v21.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setRevalidateTeamPermissions),
      _v3 = (0, _v21.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setLoadMoreTeamPermissions),
      {
        teamPermissions: _v4,
        isInitLoading: _v5,
        isLoadingMore: _v6,
        isValidating: _v7,
        revalidateTeamPermissions: _v8,
        loadMoreTeamPermissions: _v9,
        canLoadMore: _v10
      } = (0, _v12.useGetTeamPermissions)({
        query: {
          accessType: _v12.ACCESS_TYPE.INHERITED,
          entityTypes: [_v11.EntityTypes.TeamUser, _v11.EntityTypes.TeamGroup]
        },
        shouldSkip: () => !_v0
      });
    return (0, _v2.useEffect)(() => {
      let _v0 = !_v6 && _v7,
        _v1 = _v5 || _v0;
      _v1({
        data: _v4,
        isInitTeamPermissionsLoading: _v5,
        isTeamPermissionsLoading: _v1,
        isFetchingMoreTeamPermissions: _v6
      });
    }, [_v5, _v6, _v7, _v1, _v4]), (0, _v2.useEffect)(() => {
      _v2(_v8), _v3(_v9);
    }, [_v9, _v8, _v3, _v2]), (0, _v1.jsx)(_v3.Box, {
      ..._v31.XPaddingStyle,
      children: (0, _v1.jsx)(_v34, {
        teamPermissions: _v4,
        canLoadMorePermissions: _v10
      })
    });
  }], 0);
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = () => {
    let _v0 = (0, _v21.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.isMobileOrTab),
      _v1 = (0, _v21.useGlobalStore)(({
        invite: _v0
      }) => _v0.data.customMessage) || "",
      _v2 = (0, _v21.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions.updateCustomMessage),
      _v3 = (0, _v2.useContext)(_v20.ViewerContext),
      _v4 = (0, _v21.useGlobalStore)(({
        membership: _v0
      }) => _v0.data.isFreeTrial),
      _v5 = (0, _v21.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasEnterprise),
      _v6 = _v3?.user?.createdTime,
      _v7 = "custom" === String(_v3?.user?.account),
      _v8 = (0, _v2.useMemo)(() => {
        if (!_v6) return !1;
        let _v0 = new Date(_v6).getTime();
        return !Number.isNaN(_v0) && (Date.now() - _v0) / 0 < 30;
      }, [_v6]),
      _v9 = (0, _v2.useMemo)(() => _v7 || _v5 ? 500 : _v8 || _v4 ? 140 : 500, [_v7, _v5, _v8, _v4]),
      _v10 = _v9 - 20,
      _v11 = _v1.length >= _v10;
    return 140 !== _v9 ? (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      children: [(0, _v1.jsx)(_v36.Textarea, {
        id: "custom-message",
        "data-testid": "custom-message",
        onChange: _v0 => _v2(_v0.currentTarget.value),
        placeholder: (0, _v9.translate)({
          singular: "Add a message (optional)",
          dictionary: {
            es: {
              singular: "Agrega un mensaje (opcional)"
            },
            "de-DE": {
              singular: "Nachricht hinzufügen (optional)"
            },
            "fr-FR": {
              singular: "Ajoutez un message (facultatif)"
            },
            "ja-JP": {
              singular: "メッセージを追加する (オプション)"
            },
            "ko-KR": {
              singular: "메시지 추가 (선택 사항)"
            },
            "pt-BR": {
              singular: "Adicione uma mensagem (opcional)"
            },
            "zh-CN": {
              singular: "添加消息（可选）"
            }
          }
        }),
        value: _v1 || void 0,
        width: "100%",
        maxLength: _v9,
        height: _v0 ? (0, _v8.rem)(80) : (0, _v8.rem)(150),
        marginBottom: (0, _v8.rem)(16),
        fontSize: _v0 ? (0, _v8.rem)(16) : (0, _v8.rem)(14)
      }), (0, _v1.jsx)(_v3.Box, {
        position: "absolute",
        right: (0, _v8.rem)(12),
        bottom: (0, _v8.rem)(30),
        children: (0, _v1.jsxs)(_v35.Text, {
          fontSize: "body-md",
          variant: "body-xl",
          color: _v11 ? "red.500" : "gray.500",
          textAlign: "right",
          children: [_v1.length, "/", _v9]
        })
      })]
    }) : null;
  };
  _v0.s(["InvitationTextWrapper", 0, _v37], 0);
  var _v38 = _v0.i(0);
  let _v39 = {
    AboutSeats: (0, _v9.translate)({
      singular: "Learn more about seats.",
      dictionary: {
        es: {
          singular: "Obtén más información sobre los puestos."
        },
        "de-DE": {
          singular: "Erfahre mehr über Plätze."
        },
        "fr-FR": {
          singular: "En savoir plus sur les licences"
        },
        "ja-JP": {
          singular: "シートライセンスについての詳細を見る。"
        },
        "ko-KR": {
          singular: "사용자 라이선스에 관해 자세히 알아보세요."
        },
        "pt-BR": {
          singular: "Saiba mais sobre as licenças."
        },
        "zh-CN": {
          singular: "了解有关席位的更多信息。"
        }
      }
    }),
    AdditionalInvitations: (0, _v9.translate)({
      singular: "You can send additional invitations once you’re on a paid plan.",
      dictionary: {
        es: {
          singular: "Puedes enviar invitaciones adicionales una vez que tengas un plan pago."
        },
        "de-DE": {
          singular: "Mit einem Upgrade auf eine kostenpflichtige Mitgliedschaft kannst du zusätzliche Einladungen versenden."
        },
        "fr-FR": {
          singular: "Vous pouvez envoyer des invitations supplémentaires une fois que vous bénéficiez d'un abonnement payant."
        },
        "ja-JP": {
          singular: "有料プランでは招待を追加で送信できます。"
        },
        "ko-KR": {
          singular: "유료 요금제를 사용 중인 경우 초대장을 추가로 더 보낼 수 있습니다."
        },
        "pt-BR": {
          singular: "Você poderá enviar mais convites quando contratar um plano pago."
        },
        "zh-CN": {
          singular: "升级到付费套餐后，您可以发送更多邀请。"
        }
      }
    }),
    AddAdminsAndContributors: (0, _v9.translate)({
      singular: "You can still add team members as Contributors or Admins.",
      dictionary: {
        es: {
          singular: "Puedes seguir agregando miembros del equipo como colaboradores o administradores."
        },
        "de-DE": {
          singular: "Du kannst Teammitglieder weiterhin als Mitwirkende oder Administratoren hinzufügen."
        },
        "fr-FR": {
          singular: "Vous pouvez toujours ajouter des collaborateurs en tant que Contributeurs ou Administrateurs."
        },
        "ja-JP": {
          singular: "チームメンバーを投稿者または管理者として追加することはできます。"
        },
        "ko-KR": {
          singular: "팀원을 기여자 또는 관리자로 계속 추가할 수 있습니다."
        },
        "pt-BR": {
          singular: "Você ainda pode adicionar integrantes da equipe como colaboradores ou administradores."
        },
        "zh-CN": {
          singular: "您仍然可以将团队成员添加为贡献者或管理员。"
        }
      }
    }),
    ContactOwner: (0, _v9.translate)({
      singular: "To add more, please contact your Account Owner.",
      dictionary: {
        es: {
          singular: "Para agregar más, ponte en contacto con el propietario de tu cuenta."
        },
        "de-DE": {
          singular: "Wende dich an deinen Kontoinhaber, um weitere hinzuzufügen."
        },
        "fr-FR": {
          singular: "Pour en ajouter plus, contactez le détenteur du compte,"
        },
        "ja-JP": {
          singular: "さらに追加するには、アカウント所有者にお問い合わせください。"
        },
        "ko-KR": {
          singular: "사용자 라이선스가 더 필요하면 계정 소유자에게 문의하세요."
        },
        "pt-BR": {
          singular: "Entre em contato com o proprietário da conta para adicionar mais"
        },
        "zh-CN": {
          singular: "如需添加更多，请联系您的账户所有者。"
        }
      }
    }),
    ContactOwnerForUpgrade: (0, _v9.translate)({
      singular: "To add more members, contact your Account Owner.",
      dictionary: {
        es: {
          singular: "Para agregar más miembros, ponte en contacto con el propietario de tu cuenta."
        },
        "de-DE": {
          singular: "Wende dich an deinen Kontoinhaber, um weitere Mitglieder hinzuzufügen."
        },
        "fr-FR": {
          singular: "Pour ajouter plus de membres, contactez le détenteur du compte."
        },
        "ja-JP": {
          singular: "メンバーをさらに追加するには、アカウント所有者にお問い合わせください。"
        },
        "ko-KR": {
          singular: "한도를 늘리려면 계정 소유자에게 문의하세요."
        },
        "pt-BR": {
          singular: "Para adicionar mais integrantes, entre em contato com o proprietário da conta."
        },
        "zh-CN": {
          singular: "要添加更多成员，请联系您的帐户所有者。"
        }
      }
    }),
    InviteViewers: (0, _v9.translate)({
      singular: "Or invite Viewers for free.",
      dictionary: {
        es: {
          singular: "O invita a espectadores sin cargo."
        },
        "de-DE": {
          singular: "Oder lade Betrachter kostenlos ein."
        },
        "fr-FR": {
          singular: "ou invitez gratuitement des Spectateurs."
        },
        "ja-JP": {
          singular: "または、視聴者を無料で招待してください。"
        },
        "ko-KR": {
          singular: "또는 무료로 뷰어를 초대하세요."
        },
        "pt-BR": {
          singular: "ou convide espectadores gratuitamente."
        },
        "zh-CN": {
          singular: "或免费邀请观众。"
        }
      }
    }),
    LimitReached: _v0 => (0, _v9.translate)({
      singular: "You’ve reached your limit of {COUNT} team members. ",
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "Alcanzaste el límite de {COUNT} miembros de equipo. "
        },
        "de-DE": {
          singular: "Du hast die Obergrenze von {COUNT} Teammitgliedern erreicht. "
        },
        "fr-FR": {
          singular: "Vous avez atteint le nombre limite de {COUNT} membres d'équipe. "
        },
        "ja-JP": {
          singular: "{COUNT}人までのチームメンバーの上限に達しました。 "
        },
        "ko-KR": {
          singular: "팀원 한도 {COUNT}명에 도달했습니다. "
        },
        "pt-BR": {
          singular: "Você atingiu o limite de {COUNT} integrantes da equipe. "
        },
        "zh-CN": {
          singular: "您已达到 {COUNT} 名团队成员的上限。 "
        }
      }
    }),
    AddSeats: (0, _v9.translate)({
      singular: "Add seats",
      dictionary: {
        es: {
          singular: "Agregar puestos"
        },
        "de-DE": {
          singular: "Plätze hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter des licences"
        },
        "ja-JP": {
          singular: "シートを追加"
        },
        "ko-KR": {
          singular: "사용자 라이선스 추가"
        },
        "pt-BR": {
          singular: "Adicionar licenças"
        },
        "zh-CN": {
          singular: "添加席位"
        }
      }
    }),
    PurchaseSeat: (0, _v9.translate)({
      singular: "Purchase seats",
      dictionary: {
        es: {
          singular: "Comprar puestos"
        },
        "de-DE": {
          singular: "Plätze kaufen"
        },
        "fr-FR": {
          singular: "Acheter des licences"
        },
        "ja-JP": {
          singular: "シートを購入"
        },
        "ko-KR": {
          singular: "사용자 라이선스 구매"
        },
        "pt-BR": {
          singular: "Comprar licenças"
        },
        "zh-CN": {
          singular: "购买席位"
        }
      }
    }),
    PurchaseSeats: (0, _v9.translate)({
      singular: "Purchase additional seats to send your invitations. Or invite Viewers for free.",
      dictionary: {
        es: {
          singular: "Compra puestos adicionales para enviar tus invitaciones. O invita a los espectadores de forma gratuita."
        },
        "de-DE": {
          singular: "Kaufe zusätzliche Plätze, um deine Einladungen zu versenden. Oder lade Betrachter kostenlos ein."
        },
        "fr-FR": {
          singular: "Achetez-en d'autres pour envoyer vos invitations ou invitez gratuitement des Spectateurs."
        },
        "ja-JP": {
          singular: "招待を送るには、追加のシートライセンスを購入してください。または、視聴者を無料で招待してください。"
        },
        "ko-KR": {
          singular: "초대장을 보내려면 사용자 라이선스를 추가로 구매하세요. 또는 무료로 뷰어를 초대하세요."
        },
        "pt-BR": {
          singular: "Compre mais licenças para enviar seus convites ou convide espectadores gratuitamente."
        },
        "zh-CN": {
          singular: "购买更多席位以发送邀请。或免费邀请观众。"
        }
      }
    }),
    PurchaseAdditionalSeats: _v0 => (0, _v9.translate)({
      singular: "You can purchase additional seats once you’re on a paid plan. Or invite up to {COUNT} Viewers for free.",
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "Puedes comprar puestos adicionales una vez que tengas un plan pago. O puedes invitar hasta {COUNT} espectadores sin cargo."
        },
        "de-DE": {
          singular: "Mit einem Upgrade auf eine kostenpflichtige Mitgliedschaft kannst du zusätzliche Einzellizenzen erwerben. Oder lade bis zu {COUNT} Betrachter kostenlos ein."
        },
        "fr-FR": {
          singular: "Vous pouvez acheter des licences supplémentaires une fois que vous bénéficiez d'un abonnement payant. Ou invitez jusqu'à {COUNT} spectateurs gratuitement."
        },
        "ja-JP": {
          singular: "有料プランではシートライセンスを追加で購入できます。 または最大{COUNT}人の閲覧者を無料で招待。"
        },
        "ko-KR": {
          singular: "유료 요금제를 사용 중인 경우 사용자 라이선스를 추가 구매할 수 있습니다. 또는 최대 {COUNT}명의 뷰어를 무료로 초대하세요."
        },
        "pt-BR": {
          singular: "Você poderá comprar mais licenças quando tiver um plano pago. Ou convidar até {COUNT} espectadores gratuitamente."
        },
        "zh-CN": {
          singular: "使用付费套餐后，您可以购买额外的席位。或免费邀请最多 {COUNT} 名观众。"
        }
      }
    }),
    RunOutOfSeats: (0, _v9.translate)({
      singular: "You’ve run out of seats.",
      dictionary: {
        es: {
          singular: "Te has quedado sin puestos."
        },
        "de-DE": {
          singular: "Es sind keine Plätze mehr frei."
        },
        "fr-FR": {
          singular: "Vous n'avez plus de licences disponibles."
        },
        "ja-JP": {
          singular: "シートライセンスが足りません。"
        },
        "ko-KR": {
          singular: "사용자 라이선스가 부족합니다."
        },
        "pt-BR": {
          singular: "Você não tem mais licenças disponíveis."
        },
        "zh-CN": {
          singular: "您的席位已用完。"
        }
      }
    }),
    Seat: (0, _v9.translate)({
      singular: "Seat",
      dictionary: {
        es: {
          singular: "Puesto"
        },
        "de-DE": {
          singular: "Lizenz"
        },
        "fr-FR": {
          singular: "Licence"
        },
        "ja-JP": {
          singular: "シートライセンス"
        },
        "ko-KR": {
          singular: "사용자 라이선스"
        },
        "pt-BR": {
          singular: "Licença"
        },
        "zh-CN": {
          singular: "席位"
        }
      }
    }),
    SeatLimit: (0, _v9.translate)({
      singular: "You’ve reached the seat limit on your trial.",
      dictionary: {
        es: {
          singular: "Has alcanzado el límite de puestos de tu prueba."
        },
        "de-DE": {
          singular: "Du hast das Einzellizenzen-Limit deiner Probeversion erreicht."
        },
        "fr-FR": {
          singular: "Vous avez atteint le nombre maximum de licences pour votre essai."
        },
        "ja-JP": {
          singular: "トライアル版のシートライセンスの上限に達しました。"
        },
        "ko-KR": {
          singular: "무료 체험의 사용자 라이선스 한도에 도달했습니다."
        },
        "pt-BR": {
          singular: "Você atingiu o limite de licenças do seu teste gratuito."
        },
        "zh-CN": {
          singular: "您已达到试用的席位数限制。"
        }
      }
    }),
    TeamLimit: (0, _v9.translate)({
      singular: "You’ve reached the team member limit on your trial.",
      dictionary: {
        es: {
          singular: "Has alcanzado el límite de miembros del equipo de tu prueba."
        },
        "de-DE": {
          singular: "Du hast das Teammitglied-Limit deiner Probeversion erreicht."
        },
        "fr-FR": {
          singular: "Vous avez atteint le nombre maximum de collaborateurs pour votre essai."
        },
        "ja-JP": {
          singular: "トライアル版のチームメンバー数の上限に達しました。"
        },
        "ko-KR": {
          singular: "무료 체험의 팀원 한도에 도달했습니다."
        },
        "pt-BR": {
          singular: "Você atingiu o limite de integrantes da equipe do seu teste gratuito."
        },
        "zh-CN": {
          singular: "您已达到试用的团队成员数量上限。"
        }
      }
    }),
    Tax: _v0 => (0, _v9.translate)({
      singular: "+ tax per {PERIOD}",
      replacements: {
        PERIOD: _v0
      },
      dictionary: {
        es: {
          singular: "+ impuestos por {PERIOD}"
        },
        "de-DE": {
          singular: "+ Steuern pro {PERIOD}"
        },
        "fr-FR": {
          singular: "+ taxes par {PERIOD}"
        },
        "ja-JP": {
          singular: "+ {PERIOD}あたりの税金"
        },
        "ko-KR": {
          singular: "+ {PERIOD}당 세금"
        },
        "pt-BR": {
          singular: "mais imposto por {PERIOD}"
        },
        "zh-CN": {
          singular: "+ 每 {PERIOD} 计税"
        }
      }
    }),
    TierLimitAdmins: _v0 => (0, _v9.translate)({
      singular: "You’ve reached your limit of {COUNT} team members. ",
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "Alcanzaste el límite de {COUNT} miembros de equipo. "
        },
        "de-DE": {
          singular: "Du hast die Obergrenze von {COUNT} Teammitgliedern erreicht. "
        },
        "fr-FR": {
          singular: "Vous avez atteint le nombre limite de {COUNT} membres d'équipe. "
        },
        "ja-JP": {
          singular: "{COUNT}人までのチームメンバーの上限に達しました。 "
        },
        "ko-KR": {
          singular: "팀원 한도 {COUNT}명에 도달했습니다. "
        },
        "pt-BR": {
          singular: "Você atingiu o limite de {COUNT} integrantes da equipe. "
        },
        "zh-CN": {
          singular: "您已达到 {COUNT} 名团队成员的上限。 "
        }
      }
    }),
    UpgradeEnterprise: (0, _v9.translate)({
      singular: "To add more, upgrade to Enterprise.",
      dictionary: {
        es: {
          singular: "Para agregar más, actualiza al plan Enterprise."
        },
        "de-DE": {
          singular: "Führe ein Upgrade auf Enterprise durch, um mehr hinzuzufügen."
        },
        "fr-FR": {
          singular: "Pour en ajouter d'autres, passez à un abonnement Entreprise."
        },
        "ja-JP": {
          singular: "さらに追加するには、Enterpriseにアップグレードしてください。"
        },
        "ko-KR": {
          singular: "더 추가하려면 Enterprise로 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Para adicionar mais, faça upgrade para o plano Enterprise."
        },
        "zh-CN": {
          singular: "要添加更多内容，请升级至 Enterprise。"
        }
      }
    }),
    ViewerLimit: (0, _v9.translate)({
      singular: "You’ve reached the viewer limit on your trial.",
      dictionary: {
        es: {
          singular: "Has alcanzado el límite de espectadores en tu prueba."
        },
        "de-DE": {
          singular: "Du hast das Betrachter-Limit deiner Probeversion erreicht."
        },
        "fr-FR": {
          singular: "Vous avez atteint le nombre maximum de spectateurs pour votre essai."
        },
        "ja-JP": {
          singular: "トライアル版の閲覧者数の上限に達しました。"
        },
        "ko-KR": {
          singular: "무료 체험의 뷰어 한도에 도달했습니다."
        },
        "pt-BR": {
          singular: "Você atingiu o limite de espectadores do seu teste gratuito."
        },
        "zh-CN": {
          singular: "您已达到试用的观众数限制。"
        }
      }
    }),
    VideoInfo: (_v0, _v1) => (0, _v9.translate)({
      singular: "Includes {COUNT} videos per {PERIOD}",
      replacements: {
        COUNT: _v0,
        PERIOD: _v1
      },
      dictionary: {
        es: {
          singular: "Incluye {COUNT} videos por {PERIOD}"
        },
        "de-DE": {
          singular: "Enthält {COUNT} Videos pro {PERIOD}"
        },
        "fr-FR": {
          singular: "Comprend {COUNT} vidéos par {PERIOD}"
        },
        "ja-JP": {
          singular: "{PERIOD}ごとに{COUNT}本の動画を含みます"
        },
        "ko-KR": {
          singular: "{PERIOD}당 동영상 {COUNT}개 포함"
        },
        "pt-BR": {
          singular: "Inclui {COUNT} vídeos por {PERIOD}"
        },
        "zh-CN": {
          singular: "包括每 {PERIOD} {COUNT} 个视频"
        }
      }
    })
  };
  _v0.s(["T", 0, _v39], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ({
    headerTitle: _v0,
    paraMessage: _v1
  }) => (0, _v1.jsxs)(_v40.VStack, {
    p: (0, _v8.rem)(16),
    borderRadius: "sm",
    alignItems: "unset",
    backgroundColor: "upsell-secondary",
    children: [_v0 && (0, _v1.jsx)(_v41.Header, {
      size: "xs",
      children: _v0
    }), (0, _v1.jsx)(_v42.Paragraph, {
      size: "md",
      children: _v1
    })]
  });
  _v0.s(["UpsellBox", 0, ({
    cta: _v0,
    buttonText: _v1,
    onUpgradeClick: _v2
  }) => {
    let _v3 = (0, _v21.useGlobalStore)(({
      shared: _v0
    }) => _v0.data.isMobileOrTab);
    return (0, _v1.jsx)(_v43.SmallUpgradeBanner, {
      button: _v3 ? void 0 : _v1 ? {
        label: _v1,
        onClick: _v2,
        size: "xs"
      } : void 0,
      cta: {
        size: "sm",
        ..._v0
      },
      stacked: !1,
      style: {
        borderRadius: "sm",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center"
      }
    });
  }, "UpsellNotice", 0, _v44], 0);
  let _v45 = () => (0, _v1.jsx)(_v44, {
      headerTitle: _v39.RunOutOfSeats,
      paraMessage: (0, _v1.jsxs)(_v1.Fragment, {
        children: [`${_v39.PurchaseSeats} `, (0, _v1.jsx)(_v38.Button, {
          as: "a",
          href: "https://vimeo.zendesk.com/hc/en-us/articles/7131832878605-How-many-videos-can-I-add-to-my-Starter-Standard-or-Advanced-account-",
          target: "_blank",
          color: "text-secondary",
          variant: "link",
          padding: 0,
          height: "auto",
          verticalAlign: "unset",
          children: _v39.AboutSeats
        })]
      })
    }),
    _v46 = () => {
      let _v0 = (0, _v21.useGlobalStore)(({
          shared: _v0
        }) => _v0.data.totalTeamMembers),
        {
          newMemberRole: _v1,
          newEmails: _v2
        } = (0, _v21.useGlobalStore)((0, _v4.useShallow)(({
          invite: _v0
        }) => ({
          newMemberRole: _v0.data.newMemberRole,
          newEmails: _v0.data.newEmails
        }))),
        _v3 = (0, _v21.useGlobalStore)(({
          membership: _v0
        }) => _v0.data),
        [_v4, _v5] = (0, _v29.shouldShowTeamNotice)(_v3, _v0, _v1, _v2);
      if (!_v5 && !_v4) return null;
      let _v6 = {
        headerMsg: "",
        additionalMsg: ""
      };
      return _v6.headerMsg = _v5 ? _v4 ? _v39.TeamLimit : _v39.SeatLimit : _v39.ViewerLimit, _v6.additionalMsg = _v5 ? _v4 ? _v39.AdditionalInvitations : _v39.PurchaseAdditionalSeats(_v11.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS) : _v39.AddAdminsAndContributors, (0, _v1.jsx)(_v44, {
        headerTitle: _v39.RunOutOfSeats,
        paraMessage: (0, _v1.jsxs)(_v1.Fragment, {
          children: [`${_v6.additionalMsg} `, _v5 && !_v4 && (0, _v1.jsx)("br", {}), (0, _v1.jsx)(_v38.Button, {
            as: "a",
            href: "https://vimeo.zendesk.com/hc/en-us/articles/7131832878605-How-many-videos-can-I-add-to-my-Starter-Standard-or-Advanced-account-",
            target: "_blank",
            color: "text-secondary",
            variant: "link",
            padding: 0,
            height: "auto",
            verticalAlign: "unset",
            children: _v39.AboutSeats
          })]
        })
      });
    };
  _v0.s(["InvitationContent", 0, ({
    shouldSendEmail: _v0,
    existingTeamMember: _v1,
    hasPerSeatPricingModelTeamMember: _v2,
    showPurchaseNotice: _v3,
    showViewerNotice: _v4,
    showSeatNotice: _v5
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [_v0 && (0, _v1.jsx)(_v37, {}), !_v1 && _v2 && (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v3 && (0, _v1.jsx)(_v3.Box, {
        mb: (0, _v8.rem)(16),
        children: (0, _v1.jsx)(_v45, {})
      }), (_v4 || _v5) && (0, _v1.jsx)(_v3.Box, {
        mb: (0, _v8.rem)(16),
        children: (0, _v1.jsx)(_v46, {})
      })]
    })]
  })], 0), _v0.s(["InviteButton", 0, ({
    onInvite: _v0,
    isDisabled: _v1
  }) => {
    let {
      existingTeamMember: _v2,
      shouldSendEmail: _v3
    } = (0, _v21.useGlobalStore)(({
      invite: _v0
    }) => ({
      existingTeamMember: _v0.data.existingTeamMember,
      shouldSendEmail: _v0.data.shouldSendEmail
    }));
    return (0, _v1.jsx)(_v38.Button, {
      className: "invitation-footer-send-button",
      variant: "primary",
      isDisabled: _v1,
      onClick: _v0 => {
        _v0.preventDefault(), _v0();
      },
      "data-testid": "send-invite-button",
      children: _v2 ? _v3 ? (0, _v9.translate)({
        singular: "Send",
        dictionary: {
          es: {
            singular: "Enviar"
          },
          "de-DE": {
            singular: "Senden"
          },
          "fr-FR": {
            singular: "Envoyer"
          },
          "ja-JP": {
            singular: "送信"
          },
          "ko-KR": {
            singular: "전송"
          },
          "pt-BR": {
            singular: "Enviar"
          },
          "zh-CN": {
            singular: "发送"
          }
        }
      }) : (0, _v9.translate)({
        singular: "Share",
        dictionary: {
          es: {
            singular: "Compartir"
          },
          "de-DE": {
            singular: "Teilen"
          },
          "fr-FR": {
            singular: "Partager"
          },
          "ja-JP": {
            singular: "共有"
          },
          "ko-KR": {
            singular: "공유"
          },
          "pt-BR": {
            singular: "Compartilhar"
          },
          "zh-CN": {
            singular: "分享"
          }
        }
      }) : (0, _v9.translate)({
        singular: "Send invite",
        dictionary: {
          es: {
            singular: "Enviar la invitación"
          },
          "de-DE": {
            singular: "Einladung versenden"
          },
          "fr-FR": {
            singular: "Envoyer une invitation"
          },
          "ja-JP": {
            singular: "招待状を送る"
          },
          "ko-KR": {
            singular: "초대장 보내기"
          },
          "pt-BR": {
            singular: "Enviar convite"
          },
          "zh-CN": {
            singular: "发送邀请"
          }
        }
      })
    });
  }], 0);
}