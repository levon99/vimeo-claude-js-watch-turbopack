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
    _v34 = _v0.i(0);
  let _v35 = _v0 => {
    let _v1 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.invitesRemaining),
      _v2 = (0, _v33.useGlobalStore)(_v0 => _v0.capabilities.data.hasEnterprise),
      _v3 = (0, _v33.useGlobalStore)(_v0 => _v0.capabilities.data.hasPerSeatPricingModelTeamMember),
      _v4 = (0, _v33.useGlobalStore)(_v0 => _v0.shared.data.isOwner),
      _v5 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.newMemberRole),
      _v6 = (0, _v33.useGlobalStore)(_v0 => _v0.shared.data.totalTeamMembers ?? 0),
      _v7 = (0, _v33.useGlobalStore)(_v0 => _v0.membership?.data?.tier),
      {
        isBlocked: _v8
      } = (0, _v32.useIsSeatChangeBlocked)({
        tier: _v7
      }),
      _v9 = (0, _v13.useViewer)();
    if (_v2) return null;
    if (_v3) {
      if (_v5.rawLabel !== _v34.PermissionLevel.Viewer) {
        if (_v1 < _v0.length) if (!_v4) return _v30.OUT_OF_SEATS_ACTION.CONTACT_OWNER;else return _v0.length + _v6 < _v30.MAX_TEAM_SIZE_FOR_PRICING_PLAN ? _v8 ? _v30.OUT_OF_SEATS_ACTION.CONTACT_US : _v30.OUT_OF_SEATS_ACTION.PURCHASE_SEATS : _v30.OUT_OF_SEATS_ACTION.CONTACT_US;
      } else if (!(_v0.length + _v6 < _v30.MAX_TEAM_SIZE_FOR_PRICING_PLAN)) return _v4 ? _v30.OUT_OF_SEATS_ACTION.CONTACT_US : _v30.OUT_OF_SEATS_ACTION.CONTACT_OWNER;
    } else {
      let _v0 = _v9?.user?.account;
      if ("plus" === _v0 || "pro" === _v0) {
        if (_v1 < _v0.length) return _v4 ? _v30.OUT_OF_SEATS_ACTION.UPGRADE_LEGACY_PLAN : _v30.OUT_OF_SEATS_ACTION.CONTACT_OWNER;
      } else if (_v1 < _v0.length) return _v4 ? _v30.OUT_OF_SEATS_ACTION.CONTACT_US_LEGACY : _v30.OUT_OF_SEATS_ACTION.CONTACT_OWNER;
    }
    return null;
  };
  var _v36 = _v0.i(0);
  let _v37 = ({
    inviteRecipients: _v0,
    sendEmail: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v33.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v4 = (0, _v33.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.data.id),
      _v5 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.newMemberRole),
      _v6 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.invitesRemaining),
      _v7 = (0, _v33.useGlobalStore)(_v0 => _v0.capabilities.data.hasEnterprise),
      _v8 = (0, _v33.useGlobalStore)(_v0 => _v0.shared.data.isOwner),
      _v9 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.customMessage) || "",
      _v10 = (0, _v33.useGlobalStore)(_v0 => _v0.resourceProps.data.userId),
      _v11 = (0, _v33.useGlobalStore)(_v0 => _v0.screen.actions.setMainScreen),
      _v12 = (0, _v33.useGlobalStore)(_v0 => _v0.teamPermissions.actions.revalidateAllTeamPermission),
      _v13 = (0, _v33.useGlobalStore)(_v0 => _v0.teamPermissions.actions.revalidateTeamPermissions),
      _v14 = (0, _v13.useViewer)(),
      _v15 = _v14?.teamUser,
      [_v16, {
        loading: _v17,
        error: _v18
      }] = (0, _v27.usePostResourceResourceIdTeamPermissions)(),
      _v19 = (0, _v26.useToast)(),
      {
        trackAddingTeamMember: _v20,
        trackInviteUserToTeam: _v21,
        trackChangePermission: _v22
      } = (0, _v29.useBpEventService)(),
      _v23 = (0, _v2.useMemo)(() => _v0.filter(_v0 => "string" == typeof _v0), [_v0]),
      _v24 = _v35(_v23),
      _v25 = (0, _v2.useMemo)(() => _v0.filter(_v0 => "object" == typeof _v0 && "teamEntity" in _v0), [_v0]),
      _v26 = (0, _v2.useMemo)(() => _v25.map(_v0 => _v0.teamEntity?.uri), [_v25]),
      _v27 = (0, _v2.useMemo)(() => !_v7 && _v5.rawLabel !== _v34.PermissionLevel.Viewer && _v23.length > _v6, [_v23, _v7, _v6, _v5]),
      _v28 = _v0.length < 1 || _v27 && !_v8,
      _v29 = async () => {
        let _v0, _v1;
        await _v16({
          where: {
            resourceType: _v30.RESOURCE_TYPE_API_MAP[_v3],
            resourceId: _v4
          },
          variables: {
            inviteeEmails: _v23,
            inviteeUris: _v26,
            sendEmail: _v1,
            customMessage: _v9,
            permissionPolicyUri: _v30.RESOURCE_PERMISSION_POLICY_URI_MAP[_v5.value]
          }
        }), _v0 = _v5.rawLabel || _v5.label, _v1 = () => {
          _v22({
            resourceType: _v3,
            productAnalyticsCtx: {
              copy: _v5.value
            },
            permissionActionFields: {
              old_resource_permission: null,
              new_resource_permission: (0, _v22.default)(_v34.PERMISSION_ACTION_TO_DISPLAY_NAME[_v5.value]?.toLowerCase() || "") || null,
              is_send_email_notification: _v1,
              target_user_id: null,
              member_team_role: _v0?.toLowerCase() || null
            }
          });
        }, _v23.forEach(() => {
          _v21({
            resourceType: _v3,
            targetTeamCtx: {
              is_team_member: !0,
              team_owner_id: _v10 ?? null,
              team_subscription_type: _v15?.accountType ?? null,
              team_role: _v0?.toLowerCase() ?? null,
              team_id: _v15?.teamId ?? null,
              resource_permission_level: (0, _v36.camelToSnakeCase)(_v5.value ?? "").toLowerCase() ?? null
            },
            number_of_users_invited: 1,
            includes_message: !!_v9?.length,
            entity_id: _v4?.toString() ?? null,
            entity_name: _v31.ResourceTypeEntityMap[_v3]?.entityType ?? null,
            new_role: _v0,
            new_resource_permission: (0, _v22.default)(_v34.PERMISSION_ACTION_TO_DISPLAY_NAME[_v5.value]?.toLowerCase() || "") ?? null
          }), _v1();
        }), _v25.forEach(_v0 => {
          let {
              role: _v1,
              userId: _v2
            } = (0, _v36.getTeamEntityDetails)(_v0.teamEntity),
            _v3 = _v0.applicablePermissionPolicies.find(_v0 => _v30.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value === _v5.value);
          _v20({
            resourceType: _v3,
            distAnalyticsProps: {
              sharee_id: _v2 ?? null,
              sharee_entity_permission: _v3?.name ?? null,
              sharee_team_permission: _v1,
              number_of_items: 1,
              is_send_email_notification: _v1
            }
          }), _v1();
        }), await _v13(), await _v12(), window.dispatchEvent(new CustomEvent("RSM_PERMISSION_CREATED")), _v11(_v34.ShareModalState.Default);
      };
    return ((0, _v2.useEffect)(() => {
      _v18 && _v19({
        title: (0, _v12.translate)({
          singular: "Oops! Something went wrong!",
          dictionary: {
            es: {
              singular: "¡Ups, algo salió mal!"
            },
            "de-DE": {
              singular: "Hoppla, hier ist was schief gegangen!"
            },
            "fr-FR": {
              singular: "Oups ! Quelque chose a planté !"
            },
            "ja-JP": {
              singular: "エラーが発生しました！"
            },
            "ko-KR": {
              singular: "죄송합니다. 문제가 발생했습니다."
            },
            "pt-BR": {
              singular: "Opa! Alguma coisa deu errado!"
            },
            "zh-CN": {
              singular: "哎呀！出错了！"
            }
          }
        })
      });
    }, [_v19, _v18]), _v24) ? (0, _v1.jsx)(_v28.RunOutOfSeatsAction, {
      runOutOfSeatAction: _v24
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v24.Divider, {
        borderColor: "stroke",
        marginY: (0, _v9.rem)(16)
      }), (0, _v1.jsxs)(_v25.HStack, {
        px: "lg",
        justifyContent: "flex-end",
        ..._v2,
        children: [(0, _v1.jsx)(_v23.Button, {
          variant: "tertiary",
          onClick: () => _v11(_v34.ShareModalState.Default),
          children: (0, _v12.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Button, {
          isLoading: _v17,
          isDisabled: _v28,
          variant: "primary",
          onClick: _v29,
          children: (0, _v12.translate)({
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
          })
        })]
      })]
    });
  };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = ({
      inviteRecipientEmails: _v0
    }) => {
      switch (_v35(_v0)) {
        case _v30.OUT_OF_SEATS_ACTION.PURCHASE_SEATS:
          return (0, _v1.jsx)(_v41, {});
        case _v30.OUT_OF_SEATS_ACTION.CONTACT_US:
          return (0, _v1.jsx)(_v42, {});
        case _v30.OUT_OF_SEATS_ACTION.CONTACT_US_LEGACY:
          return (0, _v1.jsx)(_v44, {});
        case _v30.OUT_OF_SEATS_ACTION.UPGRADE_LEGACY_PLAN:
          return (0, _v1.jsx)(_v43, {});
        case _v30.OUT_OF_SEATS_ACTION.CONTACT_OWNER:
          return (0, _v1.jsx)(_v45, {});
        default:
          return null;
      }
    },
    _v41 = () => (0, _v1.jsxs)(_v4.AlertRoot, {
      flexDir: "column",
      background: "upsell-secondary",
      gap: 0,
      alignItems: "flex-start",
      "data-testid": "purchase-seats-notice",
      children: [(0, _v1.jsx)(_v38.AlertTitle, {
        children: (0, _v12.translate)({
          singular: "You’ve run out of seats",
          dictionary: {
            es: {
              singular: "Se quedó sin puestos"
            },
            "de-DE": {
              singular: "Keine weiteren Lizenzen verfügbar"
            },
            "fr-FR": {
              singular: "Vous n'avez plus de licences disponibles"
            },
            "ja-JP": {
              singular: "シートが不足しています"
            },
            "ko-KR": {
              singular: "사용자 라이선스가 부족합니다."
            },
            "pt-BR": {
              singular: "Você não tem mais licenças disponíveis"
            },
            "zh-CN": {
              singular: "您的席位已用完"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.AlertDescription, {
        children: (0, _v12.translate)({
          singular: "Purchase seats to invite new members. {LINK}Learn more about seats{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v39.Link, {
              href: "https://help.vimeo.com/hc/en-us/articles/12425463234705-Manage-the-number-of-seats-on-your-Vimeo-account",
              target: "_blank",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Compre puestos para invitar a nuevos miembros. {LINK}Obtenga más información sobre los puestos.{/LINK}"
            },
            "de-DE": {
              singular: "Kaufen Sie Lizenzen, um neue Mitglieder einzuladen. {LINK}Mehr über Lizenzen erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Achetez des licences pour inviter de nouveaux membres. {LINK}En savoir plus sur les licences{/LINK}"
            },
            "ja-JP": {
              singular: "新しいメンバーを招待するには、シートを購入してください。{LINK}シートの詳細を見る{/LINK}"
            },
            "ko-KR": {
              singular: "새 멤버를 초대하려면 사용자 라이선스를 구매하세요. {LINK}사용자 라이선스에 대해 자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "Compre licenças para convidar novos integrantes. {LINK}Saiba mais sobre as licenças{/LINK}"
            },
            "zh-CN": {
              singular: "购买席位以邀请新成员。{LINK}了解有关席位的更多信息{/LINK}"
            }
          }
        })
      })]
    }),
    _v42 = () => (0, _v1.jsxs)(_v4.AlertRoot, {
      flexDir: "column",
      background: "upsell-secondary",
      gap: 0,
      alignItems: "flex-start",
      "data-testid": "contact-us-notice",
      children: [(0, _v1.jsx)(_v38.AlertTitle, {
        children: (0, _v12.translate)({
          singular: "Contact us to add more members",
          dictionary: {
            es: {
              singular: "Contáctenos para agregar más miembros"
            },
            "de-DE": {
              singular: "Kontaktieren Sie uns, um mehr Mitglieder hinzuzufügen."
            },
            "fr-FR": {
              singular: "Contactez-nous pour ajouter d'autres membres."
            },
            "ja-JP": {
              singular: "メンバーを追加するにはお問い合わせください"
            },
            "ko-KR": {
              singular: "멤버를 더 추가하려면 문의해 주세요."
            },
            "pt-BR": {
              singular: "Entre em contato conosco para adicionar mais integrantes"
            },
            "zh-CN": {
              singular: "联系我们以添加更多成员。"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.AlertDescription, {
        children: (0, _v12.translate)({
          singular: "You've reached the limit of 200 members. Talk to us to add more.",
          dictionary: {
            es: {
              singular: "Alcanzó el límite de 200 miembros. Hable con nosotros para agregar más."
            },
            "de-DE": {
              singular: "Sie haben das Limit von 200 Mitgliedern erreicht. Kontaktieren Sie uns, um weitere hinzuzufügen."
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de 200 membres. Contactez-nous pour en ajouter d'autres."
            },
            "ja-JP": {
              singular: "メンバー数が上限の200人に達しました。お問い合わせいただくとさらに追加できます。"
            },
            "ko-KR": {
              singular: "멤버 한도 200명에 도달했습니다. 더 추가하려면 문의해 주세요."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de 200 integrantes. Fale conosco para adicionar mais."
            },
            "zh-CN": {
              singular: "您已达到 200 个成员的上限。请与我们联系以添加更多。"
            }
          }
        })
      })]
    }),
    _v43 = () => (0, _v1.jsxs)(_v4.AlertRoot, {
      flexDir: "column",
      background: "upsell-secondary",
      gap: 0,
      alignItems: "flex-start",
      "data-testid": "upgrade-legacy-plan-notice",
      children: [(0, _v1.jsx)(_v38.AlertTitle, {
        children: (0, _v12.translate)({
          singular: "You’ve run out of seats",
          dictionary: {
            es: {
              singular: "Se quedó sin puestos"
            },
            "de-DE": {
              singular: "Keine weiteren Lizenzen verfügbar"
            },
            "fr-FR": {
              singular: "Vous n'avez plus de licences disponibles"
            },
            "ja-JP": {
              singular: "シートが不足しています"
            },
            "ko-KR": {
              singular: "사용자 라이선스가 부족합니다."
            },
            "pt-BR": {
              singular: "Você não tem mais licenças disponíveis"
            },
            "zh-CN": {
              singular: "您的席位已用完"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.AlertDescription, {
        children: (0, _v12.translate)({
          singular: "Upgrade to invite new members. {LINK}Learn more about seats{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v39.Link, {
              href: "https://help.vimeo.com/hc/en-us/articles/12425463234705-Manage-the-number-of-seats-on-your-Vimeo-account",
              target: "_blank",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Cambie de plan para invitar a nuevos miembros. {LINK}Obtenga más información sobre los puestos.{/LINK}"
            },
            "de-DE": {
              singular: "Führen Sie ein Upgrade durch, um neue Mitglieder einzuladen. {LINK}Mehr über Lizenzen erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Mettez à niveau pour inviter de nouveaux membres. {LINK}En savoir plus sur les licences{/LINK}"
            },
            "ja-JP": {
              singular: "新しいメンバーを招待するには、アップグレードしてください。{LINK}シートの詳細を見る{/LINK}"
            },
            "ko-KR": {
              singular: "새 멤버를 초대하려면 업그레이드하세요. {LINK}사용자 라이선스에 대해 자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "Atualize para convidar novos integrantes. {LINK}Saiba mais sobre as licenças{/LINK}"
            },
            "zh-CN": {
              singular: "升级即可邀请新成员。{LINK}了解有关席位的更多信息{/LINK}"
            }
          }
        })
      })]
    }),
    _v44 = () => (0, _v1.jsxs)(_v4.AlertRoot, {
      flexDir: "column",
      background: "upsell-secondary",
      gap: 0,
      alignItems: "flex-start",
      "data-testid": "contact-us-legacy-notice",
      children: [(0, _v1.jsx)(_v38.AlertTitle, {
        children: (0, _v12.translate)({
          singular: "Contact us to add more members",
          dictionary: {
            es: {
              singular: "Contáctenos para agregar más miembros"
            },
            "de-DE": {
              singular: "Kontaktieren Sie uns, um mehr Mitglieder hinzuzufügen."
            },
            "fr-FR": {
              singular: "Contactez-nous pour ajouter d'autres membres."
            },
            "ja-JP": {
              singular: "メンバーを追加するにはお問い合わせください"
            },
            "ko-KR": {
              singular: "멤버를 더 추가하려면 문의해 주세요."
            },
            "pt-BR": {
              singular: "Entre em contato conosco para adicionar mais integrantes"
            },
            "zh-CN": {
              singular: "联系我们以添加更多成员。"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.AlertDescription, {
        children: (0, _v12.translate)({
          singular: "You've reached the limit of 10 members. Talk to us to add more.",
          dictionary: {
            es: {
              singular: "Alcanzó el límite de 10 miembros. Hable con nosotros para agregar más."
            },
            "de-DE": {
              singular: "Sie haben das Limit von zehn Mitgliedern erreicht. Kontaktieren Sie uns, um weitere hinzuzufügen."
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de 10 membres. Contactez-nous pour en ajouter d'autres."
            },
            "ja-JP": {
              singular: "メンバー数が上限の10人に達しました。お問い合わせいただくとさらに追加できます。"
            },
            "ko-KR": {
              singular: "멤버 한도 10명에 도달했습니다. 더 추가하려면 문의해 주세요."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de 10 integrantes. Fale conosco para adicionar mais."
            },
            "zh-CN": {
              singular: "您已达到 10 名成员的上限。请与我们联系以添加更多。"
            }
          }
        })
      })]
    }),
    _v45 = () => (0, _v1.jsxs)(_v4.AlertRoot, {
      flexDir: "column",
      background: "upsell-secondary",
      gap: 0,
      alignItems: "flex-start",
      "data-testid": "contact-owner-notice",
      children: [(0, _v1.jsx)(_v38.AlertTitle, {
        children: (0, _v12.translate)({
          singular: "No seats available",
          dictionary: {
            es: {
              singular: "No hay puestos disponibles"
            },
            "de-DE": {
              singular: "Keine Lizenzen verfügbar"
            },
            "fr-FR": {
              singular: "Aucune licence disponible"
            },
            "ja-JP": {
              singular: "利用可能なシートはありません"
            },
            "ko-KR": {
              singular: "사용 가능한 사용자 라이선스가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhuma licença disponível"
            },
            "zh-CN": {
              singular: "没有可用席位"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.AlertDescription, {
        children: (0, _v12.translate)({
          singular: "Additional seats can be purchased by the account owner",
          dictionary: {
            es: {
              singular: "El propietario de la cuenta puede comprar puestos adicionales."
            },
            "de-DE": {
              singular: "Zusätzliche Lizenzen können vom Kontoinhaber erworben werden."
            },
            "fr-FR": {
              singular: "Le propriétaire du compte peut acheter des licences supplémentaires."
            },
            "ja-JP": {
              singular: "アカウント所有者は追加のシートを購入できます"
            },
            "ko-KR": {
              singular: "계정 소유자는 추가 사용자 라이선스를 구매할 수 있습니다."
            },
            "pt-BR": {
              singular: "Licenças adicionais podem ser compradas pelo proprietário da conta"
            },
            "zh-CN": {
              singular: "帐户所有者可以购买额外的席位。"
            }
          }
        })
      })]
    });
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = () => {
    let _v0 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.existingTeamMember),
      _v1 = (0, _v33.useGlobalStore)(_v0 => _v0.invite.data.newEmails),
      _v2 = (0, _v33.useGlobalStore)(_v0 => _v0.shared.data.totalTeamMembers),
      [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)([...(_v0 ? [_v0] : []), ..._v1]),
      {
        modalFooterRef: _v7
      } = (0, _v2.useContext)(_v46.RefsState),
      _v8 = (0, _v2.useMemo)(() => _v5.filter(_v0 => "string" == typeof _v0), [_v5]),
      _v9 = (0, _v2.useMemo)(() => _v3 || _v8.length > 0, [_v3, _v8]),
      _v10 = (0, _v2.useMemo)(() => _v5.reduce((_v0, _v1) => {
        if ("string" == typeof _v1) return _v0 + 1;
        {
          let {
            totalUsers: _v0,
            type: _v1
          } = (0, _v36.getTeamEntityDetails)(_v1.teamEntity);
          return _v1 !== _v30.EntityTypes.AllTeam || _v0 ? _v0 + _v0 : _v0 + (_v2 || 0);
        }
      }, 0), [_v5, _v2]);
    return (0, _v1.jsxs)(_v10.VStack, {
      alignItems: "start",
      px: "lg",
      width: "100%",
      children: [(0, _v1.jsx)(_v21.MultiInput, {
        inviteRecipients: _v5,
        addInviteRecipient: _v0 => {
          _v5.some(_v0 => "string" == typeof _v0 && "string" == typeof _v0 ? _v0.toLowerCase() === _v0.toLowerCase() : "object" == typeof _v0 && "object" == typeof _v0 && "teamEntity" in _v0 && "teamEntity" in _v0 && _v0.teamEntity?.uri === _v0.teamEntity?.uri) || _v6([..._v5, _v0]);
        },
        removeInviteRecipient: _v0 => {
          let _v1 = [..._v5];
          _v1.splice(_v0, 1), _v6(_v1);
        }
      }), (0, _v1.jsx)(_v7.Checkbox, {
        "aria-label": (0, _v12.translate)({
          singular: "Send an email notification",
          dictionary: {
            es: {
              singular: "Enviar una notificación por correo electrónico"
            },
            "de-DE": {
              singular: "Eine E-Mail-Benachrichtigung senden"
            },
            "fr-FR": {
              singular: "Envoyer une notification par e-mail"
            },
            "ja-JP": {
              singular: "Eメール通知を送信"
            },
            "ko-KR": {
              singular: "이메일 알림 보내기"
            },
            "pt-BR": {
              singular: "Enviar uma notificação por e-mail"
            },
            "zh-CN": {
              singular: "发送电子邮件通知"
            }
          }
        }),
        isChecked: _v9,
        onChange: () => {
          _v4(!_v9);
        },
        isDisabled: _v8.length > 0,
        mb: "sm",
        children: (0, _v12.translate)({
          singular: "Send an email notification",
          dictionary: {
            es: {
              singular: "Enviar una notificación por correo electrónico"
            },
            "de-DE": {
              singular: "Eine E-Mail-Benachrichtigung senden"
            },
            "fr-FR": {
              singular: "Envoyer une notification par e-mail"
            },
            "ja-JP": {
              singular: "Eメール通知を送信"
            },
            "ko-KR": {
              singular: "이메일 알림 보내기"
            },
            "pt-BR": {
              singular: "Enviar uma notificação por e-mail"
            },
            "zh-CN": {
              singular: "发送电子邮件通知"
            }
          }
        })
      }), _v9 && (0, _v1.jsx)(_v47.InvitationTextWrapper, {}), _v9 && _v10 > _v30.BULK_INVITE_WARNING_THRESHOLD && (0, _v1.jsx)(_v4.Alert, {
        alignItems: "center",
        status: "warning",
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          children: (0, _v12.translate)({
            singular: "Note: This action will send an email to {emailsCount} users.",
            replacements: {
              emailsCount: _v10
            },
            dictionary: {
              es: {
                singular: "Nota: Esta acción enviará un correo electrónico a {emailsCount} usuarios."
              },
              "de-DE": {
                singular: "Hinweis: Diese Aktion sendet eine E-Mail an {emailsCount} Nutzer."
              },
              "fr-FR": {
                singular: "Remarque : Cette action enverra un e-mail à {emailsCount} utilisateurs."
              },
              "ja-JP": {
                singular: "注意: この操作により、{emailsCount}人のユーザーにメールが送信されます。"
              },
              "ko-KR": {
                singular: "참고: 이 작업을 수행하면 {emailsCount}명의 사용자에게 이메일이 발송됩니다."
              },
              "pt-BR": {
                singular: "Observação: Esta ação enviará um e-mail para {emailsCount} usuários."
              },
              "zh-CN": {
                singular: "注意：此操作将向 {emailsCount} 名用户发送电子邮件。"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v40, {
        inviteRecipientEmails: _v8
      }), (0, _v1.jsx)(_v8.Portal, {
        containerRef: _v7,
        children: (0, _v1.jsx)(_v37, {
          inviteRecipients: _v5,
          sendEmail: _v9
        })
      })]
    });
  };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  _v0.s(["InvitationScreen", 0, () => {
    let {
        showUpsell: _v0,
        showSeatNotice: _v1,
        showViewerNotice: _v2,
        showPurchaseNotice: _v3,
        activeUpsell: _v4
      } = (0, _v49.useInvitation)(),
      {
        modalFooterRef: _v5
      } = (0, _v2.useContext)(_v46.RefsState),
      {
        footer: {
          InvitationFooter: _v6
        },
        components: {
          InvitationUpsellBanner: _v7
        }
      } = (0, _v2.useContext)(_v50.ResourceConfigContext),
      _v8 = (0, _v33.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasPerSeatPricingModelTeamMember),
      _v9 = (0, _v33.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v10 = (0, _v33.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.isOwner),
      _v11 = (0, _v33.useGlobalStore)(_v0 => _v0.shared.data.totalTeamMembers),
      _v12 = (0, _v33.useGlobalStore)(_v0 => _v0.capabilities.data.hasMultiUserSharing),
      {
        existingTeamMember: _v13,
        shouldSendEmail: _v14,
        setShouldSendEmail: _v15,
        newEmails: _v16,
        setNewMemberRole: _v17
      } = (0, _v33.useGlobalStore)((0, _v3.useShallow)(({
        invite: _v0
      }) => ({
        shouldSendEmail: _v0.data.shouldSendEmail,
        existingTeamMember: _v0.data.existingTeamMember,
        newEmails: _v0.data.newEmails,
        setShouldSendEmail: _v0.actions.setShouldSendEmail,
        setNewMemberRole: _v0.actions.setNewMemberRole
      }))),
      _v18 = (0, _v33.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.actions.addCapabilities),
      _v19 = (0, _v13.useViewer)(),
      _v20 = (_v19?.teamUser?.ownerId ?? _v19?.user?.id) || 0,
      {
        capabilities: _v21,
        loading: _v22
      } = (0, _v11.useCapability)(["hasCommentPolicyByDefault"], _v20),
      _v23 = !!_v21.hasCommentPolicyByDefault;
    (0, _v2.useEffect)(() => {
      _v22 || _v18({
        hasCommentPolicyByDefault: _v23
      });
    }, [_v22, _v18, _v23]), (0, _v2.useEffect)(() => {
      if (!_v22 && (_v16.length > 0 || !_v13?.currentPermissionPolicies?.length)) {
        let _v0 = (0, _v36.getPermissionLevels)(_v9, _v13);
        _v17((0, _v36.getNewMemberRole)(_v0, _v9, _v23));
      }
    }, [_v9, _v23, _v17, _v13, _v22, _v16.length]);
    let _v24 = _v6 ?? _v15.InvitationFooterCommon,
      _v25 = _v7 ?? _v17.UpsellOnInput,
      _v26 = (0, _v2.useMemo)(() => {
        if (_v13?.teamEntity) {
          let {
            totalUsers: _v0,
            type: _v1
          } = (0, _v36.getTeamEntityDetails)(_v13.teamEntity);
          return _v1 !== _v30.EntityTypes.AllTeam || _v0 ? _v0 : _v11 || 0;
        }
        return _v16.length;
      }, [_v13?.teamEntity, _v16.length, _v11]);
    return _v12 ? (0, _v1.jsx)(_v48, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v10.VStack, {
        alignItems: "start",
        sx: _v51.XPaddingStyle,
        children: [_v0 && (_v10 ? (0, _v1.jsx)(_v25, {
          upsell: _v4
        }) : (0, _v1.jsx)(_v17.NoticeOnInput, {
          upsell: _v4
        })), (0, _v1.jsx)(_v18.TeamListHeader, {
          isUpsellShowing: _v0
        }), _v13 ? (0, _v1.jsx)(_v20.SingleInvitationBox, {
          capbilitiesLoading: _v22
        }) : (0, _v1.jsx)(_v19.MultiInvitationBox, {
          capbilitiesLoading: _v22
        }), _v13 && (0, _v1.jsx)(_v7.Checkbox, {
          "aria-label": (0, _v12.translate)({
            singular: "Send an email notification",
            dictionary: {
              es: {
                singular: "Enviar una notificación por correo electrónico"
              },
              "de-DE": {
                singular: "Eine E-Mail-Benachrichtigung senden"
              },
              "fr-FR": {
                singular: "Envoyer une notification par e-mail"
              },
              "ja-JP": {
                singular: "Eメール通知を送信"
              },
              "ko-KR": {
                singular: "이메일 알림 보내기"
              },
              "pt-BR": {
                singular: "Enviar uma notificação por e-mail"
              },
              "zh-CN": {
                singular: "发送电子邮件通知"
              }
            }
          }),
          isChecked: _v14,
          onChange: () => {
            _v15(!_v14);
          },
          mb: (0, _v9.rem)(8),
          children: (0, _v12.translate)({
            singular: "Send an email notification",
            dictionary: {
              es: {
                singular: "Enviar una notificación por correo electrónico"
              },
              "de-DE": {
                singular: "Eine E-Mail-Benachrichtigung senden"
              },
              "fr-FR": {
                singular: "Envoyer une notification par e-mail"
              },
              "ja-JP": {
                singular: "Eメール通知を送信"
              },
              "ko-KR": {
                singular: "이메일 알림 보내기"
              },
              "pt-BR": {
                singular: "Enviar uma notificação por e-mail"
              },
              "zh-CN": {
                singular: "发送电子邮件通知"
              }
            }
          })
        }), _v16.length > 0 && (0, _v1.jsx)("div", {}), (0, _v1.jsx)(_v14.InvitationContent, {
          shouldSendEmail: _v14,
          existingTeamMember: _v13,
          hasPerSeatPricingModelTeamMember: _v8,
          showPurchaseNotice: _v3,
          showViewerNotice: _v2,
          showSeatNotice: _v1
        }), _v14 && _v26 > _v30.BULK_INVITE_WARNING_THRESHOLD && (0, _v1.jsx)(_v4.Alert, {
          alignItems: "center",
          status: "warning",
          children: (0, _v1.jsx)(_v5.AlertDescription, {
            children: (0, _v12.translate)({
              singular: "Note: This action will send an email to {emailsCount} users.",
              replacements: {
                emailsCount: _v26
              },
              dictionary: {
                es: {
                  singular: "Nota: Esta acción enviará un correo electrónico a {emailsCount} usuarios."
                },
                "de-DE": {
                  singular: "Hinweis: Diese Aktion sendet eine E-Mail an {emailsCount} Nutzer."
                },
                "fr-FR": {
                  singular: "Remarque : Cette action enverra un e-mail à {emailsCount} utilisateurs."
                },
                "ja-JP": {
                  singular: "注意: この操作により、{emailsCount}人のユーザーにメールが送信されます。"
                },
                "ko-KR": {
                  singular: "참고: 이 작업을 수행하면 {emailsCount}명의 사용자에게 이메일이 발송됩니다."
                },
                "pt-BR": {
                  singular: "Observação: Esta ação enviará um e-mail para {emailsCount} usuários."
                },
                "zh-CN": {
                  singular: "注意：此操作将向 {emailsCount} 名用户发送电子邮件。"
                }
              }
            })
          })
        })]
      }), (0, _v1.jsxs)(_v8.Portal, {
        containerRef: _v5,
        children: [(0, _v1.jsx)(_v16.CustomDivider, {}), (0, _v1.jsx)(_v6.Box, {
          sx: _v51.XPaddingStyle,
          children: (0, _v1.jsx)(_v24, {})
        })]
      })]
    });
  }], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  _v0.s(["PurchaseScreen", 0, () => {
    let _v0 = (0, _v2.useContext)(_v55.ViewerContext),
      {
        sendInvites: _v1
      } = (0, _v49.useInvitation)(),
      _v2 = (0, _v33.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.canUsePaymentsService),
      _v3 = (0, _v33.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      {
        resourceId: _v4,
        userId: _v5
      } = (0, _v33.useGlobalStore)((0, _v3.useShallow)(({
        resourceProps: _v0
      }) => ({
        resourceId: _v0.data.id,
        userId: _v0.data.userId
      }))),
      _v6 = (0, _v33.useGlobalStore)(({
        invite: _v0
      }) => _v0.data.newEmails),
      _v7 = (0, _v33.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions.togglePurchaseInviteNotice),
      _v8 = (0, _v33.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v9 = (0, _v33.useGlobalStore)(({
        membership: _v0
      }) => _v0.data),
      [_v10, _v11] = (0, _v52.useGetUserTeamsLazy)(),
      _v12 = _v11?.data,
      _v13 = _v12 ? _v12.data : null,
      _v14 = _v13?.[0];
    (0, _v2.useEffect)(() => {
      _v5 && _v10({
        select: [],
        where: {
          userId: _v5
        }
      });
    }, [_v5, _v10]), (0, _v2.useEffect)(() => {
      let _v0 = {
        source: "resource-share-modal",
        payload: {
          event: "Purchase seats modal triggered",
          purchaseSeatsOpen: !0,
          shareModalSize: (0, _v36.getShareModalHeight)(_v34.ShareModalState.Purchase)
        }
      };
      window.parent.postMessage(_v0, window.location.origin);
    }, []);
    let _v15 = _v9.productId ? String(_v9.productId) : "",
      _v16 = _v0?.user?.id || 0,
      _v17 = _v3 == _v34.ResourceType.Video;
    return (0, _v1.jsx)(_v54.PurchaseSeatsModal, {
      canUsePaymentsService: _v2,
      hasScreen: !1,
      isActive: !0,
      isTrial: _v9.isFreeTrial,
      productId: _v15,
      userId: _v16,
      ownerId: _v5,
      initSeatsPurchase: _v6.length - _v9.currentUnassignedSeatCount,
      minSeatsPurchase: _v6.length - _v9.currentUnassignedSeatCount,
      maxSeatsPurchase: (_v9.isFreeTrial ? _v30.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS : _v30.MAX_TEAM_SIZE_FOR_PRICING_PLAN) - _v9.seatCount,
      onPurchaseSuccess: async () => {
        _v7(_v53.NOTICE_TYPES.PURCHASE_INVITATION_SUCCESSFULL), await _v1(), setTimeout(() => _v7(null), 0);
      },
      onClose: () => {
        _v8(_v34.ShareModalState.Default);
      },
      triggeredFrom: _v17 ? _v53.PURCHASE_TRIGGERED_FROM.VIDEO_SHARE_MODAL : _v53.PURCHASE_TRIGGERED_FROM.FOLDER_SHARE_MODAL,
      analyticsData: _v14 && {
        teamInfo: _v14,
        folderId: _v17 ? null : Number(_v4),
        clipId: _v17 ? Number(_v4) : null,
        priorSeats: _v9.nextCycle?.seatCount || 0,
        subscriptionType: `${_v9.tier}, ${_v9.billingPeriod}`,
        planType: _v9.status,
        planTier: _v9.tier,
        isTrial: _v9.isFreeTrial
      }
    });
  }], 0);
}