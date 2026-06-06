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
    _v12 = _v0.i(0);
  let _v13 = (_v0, _v1 = (0, _v3.translate)({
      singular: "To share folders, upgrade to a Pro plan.",
      dictionary: {
        es: {
          singular: "Cámbiate a un plan Pro para compartir carpetas."
        },
        "de-DE": {
          singular: "Führe ein Upgrade auf einen Pro-Plan durch, um Ordner zu teilen."
        },
        "fr-FR": {
          singular: "Pour partager des dossiers, passez à un abonnement Pro."
        },
        "ja-JP": {
          singular: "フォルダを共有するには、Proプランにアップグレードしてください。"
        },
        "ko-KR": {
          singular: "폴더를 공유하려면 Pro로 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Para compartilhar pastas, faça o upgrade para um plano Pro."
        },
        "zh-CN": {
          singular: "要共享文件夹，请升级到 Pro 套餐。"
        }
      }
    })) => {
      switch (_v0) {
        case _v10.Upsells.ToPro:
          return {
            message: (0, _v3.translate)({
              singular: "To collaborate on folders, upgrade to a Pro plan.",
              dictionary: {
                es: {
                  singular: "Para colaborar en las carpetas, actualiza a un plan Pro."
                },
                "de-DE": {
                  singular: "Führe ein Upgrade auf einen Pro-Tarif durch, um gemeinsam mit anderen an Ordnern zu arbeiten."
                },
                "fr-FR": {
                  singular: "Pour collaborer sur des dossiers, passez à un abonnement Pro."
                },
                "ja-JP": {
                  singular: "フォルダーで共同作業するには、Proプランにアップグレードしてください。"
                },
                "ko-KR": {
                  singular: "폴더에서 공동 작업하려면 Pro 요금제로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Para colaborar em pastas, faça upgrade para um plano Pro."
                },
                "zh-CN": {
                  singular: "要协作处理文件夹，请升级到 Pro 套餐。"
                }
              }
            })
          };
        case _v10.Upsells.ToBusiness:
          return {
            message: (0, _v3.translate)({
              singular: "You’ve reached your limit of 3 team members. Upgrade to add more.",
              dictionary: {
                es: {
                  singular: "Alcanzaste tu límite de 3 miembros del equipo. Actualiza para agregar más."
                },
                "de-DE": {
                  singular: "Du hast dein Limit von 3 Teammitgliedern erreicht. Nimm ein Upgrade vor, um weitere Mitglieder hinzuzufügen."
                },
                "fr-FR": {
                  singular: "Vous avez atteint le nombre limite de 3 membres d'équipe. Passez au niveau supérieur pour en ajouter davantage."
                },
                "ja-JP": {
                  singular: "3人までのチームメンバーの上限に達しました。追加するにはアップグレードしてください。"
                },
                "ko-KR": {
                  singular: "팀원 한도 3명에 도달했습니다. 한도를 늘리려면 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de 3 integrantes da equipe. Faça upgrade para adicionar mais."
                },
                "zh-CN": {
                  singular: "您已达到 3 名团队成员的上限。升级即可添加更多团队成员。"
                }
              }
            })
          };
        case _v10.Upsells.ToCustom:
          return {
            message: (0, _v3.translate)({
              singular: "You’ve reached your limit of 10 team members. Talk with us to add more.",
              dictionary: {
                es: {
                  singular: "Alcanzaste tu límite de 10 miembros del equipo. Habla con nosotros para agregar más."
                },
                "de-DE": {
                  singular: "Du hast dein Limit von 10 Teammitgliedern erreicht. Sprich mit uns, um weitere Mitglieder hinzuzufügen."
                },
                "fr-FR": {
                  singular: "Vous avez atteint le nombre limite de 10 membres d'équipe. Contactez-nous pour en ajouter davantage."
                },
                "ja-JP": {
                  singular: "10人までのチームメンバーの上限に達しました。追加されたい場合はご連絡ください。"
                },
                "ko-KR": {
                  singular: "팀원 한도 10명에 도달했습니다. 한도를 늘리려면 저희에게 문의주세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de 10 integrantes da equipe. Fale conosco para adicionar mais."
                },
                "zh-CN": {
                  singular: "您已达到 10 名团队成员的上限。请联系我们添加更多团队成员。"
                }
              }
            }),
            cta: (0, _v3.translate)({
              singular: "Contact us",
              dictionary: {
                es: {
                  singular: "Contáctenos"
                },
                "de-DE": {
                  singular: "Kontaktieren Sie uns"
                },
                "fr-FR": {
                  singular: "Contactez-nous"
                },
                "ja-JP": {
                  singular: "お問い合わせ"
                },
                "ko-KR": {
                  singular: "문의하기"
                },
                "pt-BR": {
                  singular: "Entre em contato conosco"
                },
                "zh-CN": {
                  singular: "联系我们"
                }
              }
            }),
            link: "/enterprise/contact-us?mkc=team_seats_upgrade"
          };
        case _v10.Upsells.ToPricingPlan:
          return {
            message: `${_v9.T.LimitReached(_v5.MAX_TEAM_SIZE_FOR_PRICING_PLAN)}${_v9.T.UpgradeEnterprise}`,
            cta: (0, _v3.translate)({
              singular: "Contact us",
              dictionary: {
                es: {
                  singular: "Contáctenos"
                },
                "de-DE": {
                  singular: "Kontaktieren Sie uns"
                },
                "fr-FR": {
                  singular: "Contactez-nous"
                },
                "ja-JP": {
                  singular: "お問い合わせ"
                },
                "ko-KR": {
                  singular: "문의하기"
                },
                "pt-BR": {
                  singular: "Entre em contato conosco"
                },
                "zh-CN": {
                  singular: "联系我们"
                }
              }
            }),
            link: "/enterprise/contact-us?mkc=team_seats_upgrade"
          };
        default:
          return {
            message: _v1
          };
      }
    },
    _v14 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v0.link || "/upgrade",
        _v5 = `${_v1}_share_modal`;
      (_v2 ? _v3({
        location: "folder_share_modal",
        feature: "contact_us_for_enterprise"
      }) : (0, _v8.trackUpsellCTAClick)(_v4, _v5), window.parent) ? window.parent.open(_v4, "_blank") : window.open(_v4, "_blank");
    };
  _v0.s(["NoticeOnInput", 0, _v0 => {
    let _v1 = (0, _v12.getMaxTeamSize)(_v0.upsell);
    return (0, _v1.jsx)(_v11.UpsellNotice, {
      paraMessage: `${_v9.T.TierLimitAdmins(_v1)}${_v9.T.ContactOwnerForUpgrade}`
    });
  }, "UpsellOnInput", 0, _v0 => {
    let {
        hooks: {
          useUpsellCallback: _v1
        }
      } = (0, _v2.useContext)(_v6.ResourceConfigContext),
      _v2 = _v1?.()?.onInviteUpsellClick,
      {
        trackUpsellClick: _v3
      } = (0, _v2.useContext)(_v4.ManageTeamAnalytics),
      _v4 = _v13(_v0.upsell),
      _v5 = (0, _v7.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasPerSeatPricingModelTeamMember),
      _v6 = (0, _v7.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType);
    return (0, _v1.jsx)(_v11.UpsellBox, {
      cta: {
        label: _v4.message
      },
      buttonText: _v4.cta || (0, _v3.translate)({
        singular: "See plans",
        dictionary: {
          es: {
            singular: "Ver los planes"
          },
          "de-DE": {
            singular: "Tarife ansehen"
          },
          "fr-FR": {
            singular: "Abonnements"
          },
          "ja-JP": {
            singular: "プランを見る"
          },
          "ko-KR": {
            singular: "멤버십 보기"
          },
          "pt-BR": {
            singular: "Veja os planos"
          },
          "zh-CN": {
            singular: "查看套餐"
          }
        }
      }),
      onUpgradeClick: () => {
        _v2 ? _v2() : _v14(_v4, _v6, _v5, _v3);
      }
    });
  }, "mapUpsell", 0, _v13, "navigateToUpgrade", 0, _v14], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  _v0.s(["TeamListHeader", 0, ({
    isUpsellShowing: _v0
  }) => {
    let _v1 = (0, _v7.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasPerSeatPricingModelTeamMember),
      _v2 = (0, _v7.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.totalTeamMembers),
      {
        newEmails: _v3,
        existingTeamMember: _v4,
        invitesRemaining: _v5
      } = (0, _v7.useGlobalStore)((0, _v15.useShallow)(({
        invite: _v0
      }) => ({
        newEmails: _v0.data.newEmails,
        existingTeamMember: _v0.data.existingTeamMember,
        invitesRemaining: _v0.data.invitesRemaining
      }))),
      _v6 = (0, _v7.useGlobalStore)(({
        screen: _v0
      }) => _v0.main);
    if (null === _v2) return null;
    let _v7 = (0, _v12.getCurrentInvitesRemaining)(_v1, _v3, _v2, _v5),
      _v8 = _v2 + _v7 + _v3.length,
      _v9 = _v6 === _v10.ShareModalState.Invitation,
      _v10 = _v9 ? (0, _v3.translate)({
        singular: "Invite new team members",
        dictionary: {
          es: {
            singular: "Invita a nuevos miembros de equipo"
          },
          "de-DE": {
            singular: "Neue Teammitglieder einladen"
          },
          "fr-FR": {
            singular: "Inviter de nouveaux membres à rejoindre l'équipe"
          },
          "ja-JP": {
            singular: "新しいチームメンバーを招待"
          },
          "ko-KR": {
            singular: "새 팀원 초대"
          },
          "pt-BR": {
            singular: "Convide novos integrantes para a equipe"
          },
          "zh-CN": {
            singular: "邀请新团队成员"
          }
        }
      }) : (0, _v3.translate)({
        singular: "Add team members",
        dictionary: {
          es: {
            singular: "Agrega a miembros a tu equipo"
          },
          "de-DE": {
            singular: "Teammitglieder hinzufügen"
          },
          "fr-FR": {
            singular: "Ajoutez des collaborateurs"
          },
          "ja-JP": {
            singular: "チームメンバーを追加"
          },
          "ko-KR": {
            singular: "팀원 추가"
          },
          "pt-BR": {
            singular: "Adicionar integrantes à sua equipe"
          },
          "zh-CN": {
            singular: "添加团队成员"
          }
        }
      });
    return _v9 && !_v4 ? (0, _v1.jsxs)(_v17.HStack, {
      w: "100%",
      justifyContent: "space-between",
      children: [(0, _v1.jsx)(_v16.Header, {
        size: "sm",
        children: _v10
      }), !_v1 && (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v18.Paragraph, {
          size: "sm",
          color: _v0 ? "status-destructive-primary" : "text-secondary",
          children: [_v2 + _v3.length, "/", _v8]
        })
      })]
    }) : null;
  }], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
    email: _v0,
    onRemove: _v1
  }) => {
    let _v2 = (0, _v7.useGlobalStore)(({
      shared: _v0
    }) => _v0.data.isMobileOrTab);
    return (0, _v1.jsxs)(_v25.Tag, {
      size: "md",
      children: [(0, _v1.jsx)(_v25.TagLabel, {
        whiteSpace: _v2 ? "nowrap" : "normal",
        "data-testid": "email-tag-label",
        children: _v0
      }), (0, _v1.jsx)(_v25.TagCloseButton, {
        p: 0,
        onClick: _v1,
        "data-testid": "email-tag-close-button"
      })]
    }, _v0);
  };
  _v0.s(["EmailTag", 0, _v26], 0);
  var _v27 = _v0.i(0),
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
  let _v38 = _v37.default.div.withConfig({
    displayName: "style__RoleMenuBlock",
    componentId: "sc-89146d6d-0"
  })`
  flex: 0 1 auto;
  min-width: ${(0, _v36.rem)(100)};
  ${_v0 => _v0.memberCount < 2 ? "align-self: center;" : `margin-top: ${(0, _v36.rem)(5)};`}
`;
  _v37.default.div.withConfig({
    displayName: "style__TeamMemberWrapper",
    componentId: "sc-89146d6d-1"
  })`
  display: flex;
  align-items: center;
  svg {
    margin-right: ${(0, _v36.rem)(6)};
  }
  img {
    border-radius: ${(0, _v36.rem)(33)};
    width: ${(0, _v36.rem)(22)};
    height: ${(0, _v36.rem)(22)};
    margin: 0 ${(0, _v36.rem)(5)};
  }
  p {
    margin: 0 ${(0, _v36.rem)(2)};
    font-size: ${(0, _v36.rem)(14)};
    line-height: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: ${(0, _v36.rem)(255)};
  }
`;
  let _v39 = _v37.default.div.withConfig({
      displayName: "style__ViewerWrapper",
      componentId: "sc-89146d6d-2"
    })`
  display: flex;
  align-items: center;
  svg {
    height: ${(0, _v36.rem)(24)};
  }
`,
    _v40 = _v37.default.div.withConfig({
      displayName: "style__ViewerText",
      componentId: "sc-89146d6d-3"
    })`
  font-weight: 500;
  font-size: ${(0, _v36.rem)(14)};
  ${({
      hasAnnotation: _v0
    }) => !_v0 && `margin-right: ${(0, _v36.rem)(5)};`}
`,
    _v41 = ({
      existingTeamMember: _v0,
      newEmails: _v1,
      newMemberRole: _v2,
      resourceType: _v3
    }) => {
      let _v4 = (0, _v7.useGlobalStore)(({
          invite: _v0
        }) => _v0.actions.setNewMemberRole),
        _v5 = _v5.ALLOWED_RESOURCE_FOR_COMMENT_POLICY.includes(_v3),
        _v6 = _v0?.inheritanceSource,
        _v7 = (0, _v7.useGlobalStore)(({
          capabilities: _v0
        }) => _v0.data.hasMultiUserSharing),
        _v8 = _v1.length > 0 ? _v1 : _v0 ? [_v0] : [],
        _v9 = (0, _v2.useMemo)(() => _v0 ? (0, _v12.isOnlyViewerAccess)(_v0) : null, [_v0]),
        _v10 = _v0 && _v5.GroupEntityTypes.includes((0, _v12.getTeamEntityDetails)(_v0.teamEntity).type),
        _v11 = _v9 && (0, _v3.translate)({
          singular: "This {MEMBER} can only be added as a viewer.",
          replacements: {
            MEMBER: _v10 ? (0, _v3.translate)({
              singular: "group",
              dictionary: {
                es: {
                  singular: "grupo"
                },
                "de-DE": {
                  singular: "Gruppe"
                },
                "fr-FR": {
                  singular: "groupe"
                },
                "ja-JP": {
                  singular: "グループ"
                },
                "ko-KR": {
                  singular: "그룹"
                },
                "pt-BR": {
                  singular: "grupo"
                },
                "zh-CN": {
                  singular: "群组"
                }
              }
            }) : (0, _v3.translate)({
              singular: "member",
              dictionary: {
                es: {
                  singular: "miembro"
                },
                "de-DE": {
                  singular: "Mitglied"
                },
                "fr-FR": {
                  singular: "membre"
                },
                "ja-JP": {
                  singular: "メンバー"
                },
                "ko-KR": {
                  singular: "회원"
                },
                "pt-BR": {
                  singular: "assinante"
                },
                "zh-CN": {
                  singular: "会员"
                }
              }
            })
          },
          dictionary: {
            es: {
              singular: "Este {MEMBER} solo puede agregarse como espectador."
            },
            "de-DE": {
              singular: "Dieses {MEMBER} kann nur als Betrachter hinzugefügt werden."
            },
            "fr-FR": {
              singular: "Ce {MEMBER} peut seulement être ajouté en tant que spectateur."
            },
            "ja-JP": {
              singular: "この{MEMBER}は閲覧者としてのみ追加できます。"
            },
            "ko-KR": {
              singular: "이 {MEMBER}은(는) 뷰어로만 추가할 수 있습니다."
            },
            "pt-BR": {
              singular: "Este {MEMBER} pode ser adicionado somente com acesso de leitura."
            },
            "zh-CN": {
              singular: "此 {MEMBER} 仅可添加为观众。"
            }
          }
        }),
        _v12 = (0, _v12.getPermissionLevels)(_v3, _v0 ? {
          ..._v0,
          applicablePermissionPolicies: _v0?.applicablePermissionPolicies ?? []
        } : _v0),
        _v13 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v12.find(_v0 => _v0.value === _v0);
          _v1 && _v4(_v1);
        }, [_v12, _v4]),
        _v14 = (0, _v2.useMemo)(() => {
          if (_v9) return (0, _v12.getRoleDisplayName)("Viewer");
          if (_v0 && _v0.applicablePermissionPolicies && _v0.applicablePermissionPolicies.length <= 1) {
            let _v0 = _v0.applicablePermissionPolicies[0],
              {
                role: _v1
              } = (0, _v12.getTeamEntityDetails)(_v0.teamEntity);
            return _v0?.displayName ?? (0, _v12.getRoleDisplayName)(_v1);
          }
        }, [_v9, _v0]);
      return _v14 ? (0, _v1.jsxs)(_v39, {
        children: [(0, _v1.jsx)(_v40, {
          hasAnnotation: !!_v11 || !!_v6,
          children: _v14
        }), _v11 && (0, _v1.jsx)(_v33.Annotation, {
          placement: "bottom",
          label: _v11
        }), _v6 && !_v7 && (0, _v1.jsx)(_v34.InheritedPolicyInfo, {
          teamResourcePermission: _v0,
          showPolicyName: !0,
          mr: "sm"
        })]
      }) : _v8.length > 0 ? (0, _v1.jsxs)(_v23.Flex, {
        children: [_v6 && !_v7 && (0, _v1.jsx)(_v34.InheritedPolicyInfo, {
          teamResourcePermission: _v0,
          showPolicyName: !0,
          mr: "sm"
        }), (0, _v1.jsx)(_v38, {
          memberCount: _v8.length,
          children: (0, _v1.jsx)(_v35.RoleMenu, {
            selectedRole: _v2,
            permissionLevels: _v12,
            permissionLevelDescriptions: (0, _v12.getPermissionLevelDescriptions)(_v3, _v0),
            onSelect: _v13,
            deleteButtonText: "",
            menuTriggerButton: (0, _v1.jsx)(_v29.MenuButton, {
              "data-id": _v5 ? "rsm_permissions_menu" : "rsm_permissions_menu_button",
              "data-testid": "rsm_permissions_menu_button",
              onClick: _v0 => {
                _v0.stopPropagation(), _v27.GoogleTagManager.trackEvent(_v32.GTMEvent.OPEN_ROLE_MENU);
              },
              as: _v28.Button,
              rightIcon: (0, _v1.jsx)(_v31.ChevronDownSmall, {}),
              width: "100%",
              variant: "secondary",
              size: "sm",
              children: (0, _v1.jsx)(_v30.Text, {
                variant: "heading-xs",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                children: _v2.label
              })
            })
          })
        })]
      }) : null;
    };
  var _v42 = _v0.i(0);
  let _v43 = "team_share_input",
    _v44 = {
      flexWrap: "nowrap",
      width: "100%",
      height: "auto",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: (0, _v22.rem)(48),
      maxHeight: (0, _v22.rem)(400),
      overflowY: "auto",
      padding: (0, _v22.rem)(8),
      borderRadius: "lg",
      columnGap: (0, _v22.rem)(10),
      outlineWidth: 1,
      outlineStyle: "solid",
      bgColor: "input-fill",
      _hover: {
        outlineColor: "input-stroke-hover"
      },
      _focusWithin: {
        outlineWidth: (0, _v22.rem)(2),
        outlineColor: "focus-alt"
      },
      ..._v42.ScrollbarStyle
    },
    _v45 = {
      flex: 1,
      height: "100%",
      paddingLeft: (0, _v22.rem)(4),
      width: (0, _v22.rem)(115),
      border: "none",
      outline: "none",
      background: "none"
    };
  _v0.s(["MultiInvitationBox", 0, ({
    capbilitiesLoading: _v0
  }) => {
    let _v1 = (0, _v2.useRef)(!1),
      _v2 = (0, _v7.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v3 = (0, _v7.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.isMobileOrTab),
      {
        newEmails: _v4,
        newMemberRole: _v5
      } = (0, _v7.useGlobalStore)((0, _v15.useShallow)(({
        invite: _v0
      }) => ({
        newEmails: _v0.data.newEmails,
        newMemberRole: _v0.data.newMemberRole
      }))),
      {
        removeSelectedUser: _v6,
        addNewEmailAddress: _v7,
        setNewMemberRole: _v8,
        setShouldSendEmail: _v9
      } = (0, _v7.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions),
      _v10 = (0, _v7.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v11 = (0, _v7.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasCommentPolicyByDefault),
      [_v12, _v13] = (0, _v2.useState)({
        value: "",
        hasError: !1
      }),
      _v14 = (0, _v21.useToast)(),
      _v15 = _v12.value.trim(),
      _v16 = (0, _v12.validateEmail)(_v15),
      _v17 = (0, _v2.useCallback)(() => {
        if (!_v15.length) return;
        if (!_v16 && _v15.length > 0) {
          _v13(_v0 => ({
            ..._v0,
            hasError: !0
          }));
          let _v0 = "invalid-email-toast";
          _v14.isActive(_v0) || _v14({
            title: (0, _v3.translate)({
              singular: "Please enter a valid email address",
              dictionary: {
                es: {
                  singular: "Introduce una dirección de correo electrónico válida."
                },
                "de-DE": {
                  singular: "Bitte gib eine gültige E-Mail-Adresse an"
                },
                "fr-FR": {
                  singular: "Veuillez saisir une adresse e-mail valide"
                },
                "ja-JP": {
                  singular: "正しいメールアドレスを入力してください"
                },
                "ko-KR": {
                  singular: "올바른 이메일 주소를 입력하세요."
                },
                "pt-BR": {
                  singular: "Digite um endereço de e-mail válido"
                },
                "zh-CN": {
                  singular: "请输入有效的电子邮件地址"
                }
              }
            }),
            id: _v0
          });
          return;
        }
        if ((0, _v12.hasArrayDuplicates)(_v4, [_v15])) return;
        _v7([_v15]);
        let _v0 = (0, _v12.getPermissionLevels)(_v2, null);
        _v8((0, _v12.getNewMemberRole)(_v0, _v2, _v11)), _v9(!0), _v10(_v10.ShareModalState.Invitation), _v13({
          value: "",
          hasError: !1
        });
      }, [_v7, _v11, _v15, _v16, _v4, _v2, _v10, _v8, _v9, _v14]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v6(_v0), _v12.hasError && _v13({
          ..._v12,
          hasError: !1
        });
      }, [_v12, _v6]),
      _v19 = (0, _v2.useCallback)(_v0 => {
        (_v0.code === _v5.KEY_CODES.ENTER || _v16 && [_v5.KEY_CODES.SPACE, _v5.KEY_CODES.TAB].includes(_v0.code)) && (_v0.preventDefault(), _v0.stopPropagation(), _v17()), 0 === _v15.length && _v0.code === _v5.KEY_CODES.BACKSPACE && _v4.length > 0 && _v18(_v4[_v4.length - 1]);
      }, [_v18, _v15.length, _v16, _v4, _v17]);
    return (0, _v1.jsxs)(_v19.Box, {
      position: "relative",
      zIndex: 10,
      w: "100%",
      "data-testid": "multi-invitation-box",
      children: [(0, _v1.jsxs)(_v23.Flex, {
        sx: _v44,
        outlineColor: _v12.hasError ? "status-destructive-primary" : "input-stroke",
        children: [(0, _v1.jsxs)(_v17.HStack, {
          flexWrap: "wrap",
          justifyContent: "flex-start",
          h: "100%",
          gap: (0, _v22.rem)(4),
          w: _v3 ? "60%" : "64%",
          maxH: _v3 ? (0, _v22.rem)(80) : "none",
          flex: "0 1 auto",
          overflowY: "auto",
          pr: _v3 ? (0, _v22.rem)(8) : 0,
          sx: {
            "div[data-lastpass-icon-root]": {
              display: "none !important"
            }
          },
          children: [_v4.map(_v0 => (0, _v1.jsx)(_v26, {
            email: _v0,
            onRemove: () => _v18(_v0)
          }, _v0)), (0, _v1.jsx)(_v20.Input, {
            type: "text",
            id: _v43,
            autoComplete: "off",
            value: _v12.value,
            onChange: _v0 => {
              if (_v4.length >= _v5.MAX_INVITE_EMAIL_LIMIT) return _v1.current = !0, _v13({
                ..._v12,
                hasError: !0
              }), !1;
              _v1.current && (_v1.current = !1);
              let _v1 = _v0.currentTarget.value;
              _v13({
                ..._v12,
                hasError: !1,
                value: _v1
              });
            },
            onKeyDown: _v19,
            onBlur: () => {
              _v13({
                ..._v12,
                hasError: !1
              });
            },
            autoFocus: !0,
            "data-1p-ignore": !0,
            style: _v45,
            _focus: {
              border: "none"
            },
            "data-testid": _v43
          })]
        }), _v0 && (0, _v1.jsx)(_v24.Skeleton, {
          "data-testid": "rsm_permissions_menu_skeleton",
          borderRadius: "sm",
          h: (0, _v22.rem)(32),
          w: (0, _v22.rem)(100)
        }), !_v0 && (0, _v1.jsx)(_v41, {
          newEmails: _v4,
          newMemberRole: _v5,
          resourceType: _v2
        })]
      }), _v12.hasError && _v1.current && (0, _v1.jsx)(_v18.Paragraph, {
        size: "sm",
        color: "status-destructive-primary",
        children: (0, _v3.translate)({
          singular: "You can share with up to {COUNT} people at a time",
          replacements: {
            COUNT: _v5.MAX_INVITE_EMAIL_LIMIT
          },
          dictionary: {
            es: {
              singular: "Puede compartir con un máximo de {COUNT} personas a la vez"
            },
            "de-DE": {
              singular: "Sie können mit bis zu {COUNT} Personen gleichzeitig teilen"
            },
            "fr-FR": {
              singular: "Vous ne pouvez partager qu'avec {COUNT} personnes à la fois"
            },
            "ja-JP": {
              singular: "一度に最大{COUNT}人と共有できます"
            },
            "ko-KR": {
              singular: "한 번에 최대 {COUNT}명과 공유할 수 있습니다."
            },
            "pt-BR": {
              singular: "Você pode compartilhar com até {COUNT} pessoas por vez"
            },
            "zh-CN": {
              singular: "每次最多可与 {COUNT} 人共享"
            }
          }
        })
      })]
    });
  }], 0);
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = ({
    teamEntity: _v0,
    groupIconProps: _v1 = {},
    userPropsIcon: _v2 = {}
  }) => {
    let {
      type: _v3
    } = (0, _v12.getTeamEntityDetails)(_v0);
    switch (_v3) {
      case _v5.EntityTypes.TeamUser:
        if (_v0.pictures?.sizes[1].link) return (0, _v1.jsx)(_v46.Avatar, {
          alt: _v0.displayName ?? "",
          src: _v0.pictures.sizes[1].link,
          size: _v2.iconSize ?? "xs",
          nameProps: {
            name: _v0.displayName ?? ""
          }
        });
        break;
      case _v5.EntityTypes.TeamGroup:
        return (0, _v1.jsx)(_v47.GroupIcon, {
          iconSize: _v1.iconSize,
          bgColor: _v1.bgColor
        });
      case _v5.EntityTypes.AllTeam:
        return (0, _v1.jsx)(_v48.AllTeamIcon, {});
    }
    return null;
  };
  _v0.s(["TeamEntityIcon", 0, _v49], 0);
  let _v50 = {
    height: "auto",
    minHeight: (0, _v22.rem)(48),
    padding: (0, _v22.rem)(8),
    borderRadius: (0, _v22.rem)(16),
    zIndex: 10,
    flexWrap: "nowrap",
    mt: (0, _v22.rem)(1),
    outlineWidth: 1,
    outlineStyle: "solid",
    outlineColor: "input-stroke",
    bgColor: "input-fill",
    _hover: {
      outlineColor: "input-stroke-hover"
    }
  };
  _v0.s(["SingleInvitationBox", 0, ({
    capbilitiesLoading: _v0
  }) => {
    let _v1 = (0, _v7.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      {
        newMemberRole: _v2,
        existingTeamMember: _v3
      } = (0, _v7.useGlobalStore)((0, _v15.useShallow)(({
        invite: _v0
      }) => ({
        newMemberRole: _v0.data.newMemberRole,
        existingTeamMember: _v0.data.existingTeamMember
      })));
    if (!_v3) return null;
    let {
      type: _v4
    } = (0, _v12.getTeamEntityDetails)(_v3.teamEntity);
    return (0, _v1.jsxs)(_v17.HStack, {
      w: "100%",
      justifyContent: "space-between",
      sx: _v50,
      "data-testid": "single-invitation-box",
      children: [(0, _v1.jsxs)(_v17.HStack, {
        children: [(0, _v1.jsx)(_v49, {
          teamEntity: _v3.teamEntity
        }), (0, _v1.jsx)(_v30.Text, {
          variant: "body-md",
          "data-testid": "team-entity-name",
          children: _v4 === _v5.EntityTypes.AllTeam ? (0, _v3.translate)({
            singular: "All",
            dictionary: {
              es: {
                singular: "Todos"
              },
              "de-DE": {
                singular: "Alle"
              },
              "fr-FR": {
                singular: "Tout"
              },
              "ja-JP": {
                singular: "すべて"
              },
              "ko-KR": {
                singular: "모두"
              },
              "pt-BR": {
                singular: "Tudo"
              },
              "zh-CN": {
                singular: "全部"
              }
            }
          }) : _v3.teamEntity.displayName ?? _v3.teamEntity.email
        })]
      }), _v0 && (0, _v1.jsx)(_v24.Skeleton, {
        "data-testid": "rsm_permissions_menu_skeleton",
        height: (0, _v22.rem)(32),
        w: (0, _v22.rem)(100),
        borderRadius: "sm"
      }), !_v0 && (0, _v1.jsx)(_v41, {
        existingTeamMember: _v3 ?? void 0,
        newEmails: [],
        newMemberRole: _v2,
        resourceType: _v1
      })]
    });
  }], 0);
}