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
    _v33 = _v0.i(0);
  let _v34 = {
      Free: "free",
      Creator: "creator",
      Core: "core",
      Starter: "starter",
      Standard: "standard",
      Advanced: "advanced",
      CustomSelfServe: "customSelfServe",
      Professional: "professional",
      Studio: "studio",
      Production: "production"
    },
    _v35 = {
      Year: "year",
      Month: "month"
    },
    _v36 = () => ({
      teamInfo: {
        owner: {
          uri: "",
          name: "",
          account: _v15.AccountType.Basic,
          email: "",
          metadata: {
            connections: {
              teamMembers: {
                roles: []
              }
            }
          }
        },
        teamData: {
          ownerId: 0
        },
        untranslatedUserRole: _v15.TeamUserPermissionLevel.Admin,
        isSufficientRole: !0,
        teamMembersCount: {
          admin: 0,
          uploader: 0,
          contributor: 0,
          viewer: 0,
          unassigned: 0
        },
        currentTeamSize: 0,
        maxTeamSize: 0,
        seatDetails: {
          additionalPurchasedCount: 0,
          totalPurchasedCount: 0,
          currentAssignedCount: 0,
          currentUnassignedCount: 0,
          basePlanCount: 0,
          capacity: 0
        },
        teamSeats: {
          totalSeats: 0,
          adminSeats: 0,
          contributorSeats: 0,
          liveContributorSeats: 0,
          uploaderSeats: 0,
          viewerSeats: 0
        }
      },
      membership: {
        billingPeriod: _v35.Month,
        currency: "",
        currentUnassignedSeatCount: 0,
        isFreeTrial: !1,
        pricePerSeatForDisplay: "",
        seatCapPaid: 200,
        seatCapTrial: 6,
        productId: "",
        seatCount: 0,
        status: "Active",
        tier: _v34.Starter,
        hasAutorenew: !1,
        subscriptionId: ""
      },
      invitesRemaining: 0,
      teamCapabilities: {
        hasEnterprise: !1,
        hasPerSeatPricingModelTeamMember: !1,
        hasContributorPlusEnabled: !1
      },
      teamApiConfig: {
        apiUrl: "",
        jwt: "",
        ownerId: 0,
        ownerUri: ""
      },
      projectsPageNumber: 1,
      isTeamInfoLoading: !0,
      isTeamMemberLoading: !1,
      isMembershipInfoLoading: !0,
      newEmails: [],
      teamMember: [],
      planQuota: {
        cap: null,
        periodic: null
      }
    }),
    _v37 = () => Error("Not implemented"),
    _v38 = (0, _v2.createContext)(_v36()),
    _v39 = (0, _v2.createContext)({
      fetchTeamInfo: _v37,
      updateTeamApiConfig: _v37,
      updateTeamCapabilities: _v37,
      updateMembershipInfo: _v37,
      updateEmails: _v37,
      updatePlanQuota: _v37,
      addEmail: _v37,
      removeEmail: _v37,
      updateInvitesRemaining: _v37,
      clearEmails: _v37
    });
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = "FetchTeamMemberInit",
    _v49 = "FetchTeamMemberComplete",
    _v50 = "team_manager",
    _v51 = () => {
      let _v0 = (0, _v47.useViewer)(),
        _v1 = _v0?.teamUser,
        _v2 = _v0?.user,
        _v3 = (0, _v2.useCallback)(() => (0, _v44.buildTeamBpContextFromTeamUser)(_v1), [_v1]),
        _v4 = (0, _v2.useCallback)(_v0 => (0, _v45.buildWebBpContext)({
          page_name: (0, _v40.getPageNameFromPath)(window.location.pathname, _v2),
          referrer_page_name: (0, _v40.getPageNameFromPath)(document.referrer, _v2),
          referrer: document.referrer || window.location.href,
          path: document.location.pathname,
          ..._v0
        }), [_v2]),
        _v5 = (0, _v2.useCallback)(_v0 => (0, _v43.buildProductAnalyticsBpContext)({
          product: "collaboration",
          feature: "teams",
          device_type: (0, _v41.default)(),
          ..._v0
        }), []),
        _v6 = (0, _v2.useCallback)(_v0 => (0, _v42.buildActionBpContext)({
          action_type: "click",
          feature: null,
          ..._v0
        }), []);
      return {
        trackOpenTeamInviteModal: (0, _v2.useCallback)(() => {
          let _v0 = (0, _v40.getPageNameFromPath)(window.location.pathname) === _v50;
          (0, _v46.sendBpEventWithContexts)("vimeo.open_team_invite_modal", {
            ..._v3(),
            ..._v6(),
            ..._v4({
              copy: "invite_members"
            }),
            ..._v5({
              location: _v0 ? "header" : "top_navigation_bar",
              element: _v0 ? "button" : "dropdown"
            })
          }, 4, {});
        }, [_v3, _v6, _v4, _v5]),
        trackInviteMembersToTeam: (0, _v2.useCallback)(_v0 => {
          let _v1 = (0, _v40.getPageNameFromPath)(window.location.pathname) === _v50;
          (0, _v46.sendBpEventWithContexts)("vimeo.invite_members_to_team", {
            ..._v3(),
            ..._v6(),
            ..._v4({
              copy: "invite_members"
            }),
            ..._v5({
              location: _v1 ? "header" : "top_navigation_bar",
              element: _v1 ? "button" : "dropdown"
            })
          }, 4, {
            action_name: "manage_members",
            ..._v0
          });
        }, [_v3, _v6, _v4, _v5])
      };
    },
    _v52 = {
      AddEmails: (0, _v27.translate)({
        singular: "Add emails",
        dictionary: {
          es: {
            singular: "Agregar correos electrónicos"
          },
          "de-DE": {
            singular: "E-Mails hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter des adresses e-mail"
          },
          "ja-JP": {
            singular: "メールアドレスを追加"
          },
          "ko-KR": {
            singular: "이메일 추가하기"
          },
          "pt-BR": {
            singular: "Adicionar e-mails"
          },
          "zh-CN": {
            singular: "添加电子邮件"
          }
        }
      }),
      MaxOf: _v0 => (0, _v27.translate)({
        singular: "(max of {INVITES})",
        replacements: {
          INVITES: _v0
        },
        dictionary: {
          es: {
            singular: "(máximo {INVITES})"
          },
          "de-DE": {
            singular: "(Maximum {INVITES})"
          },
          "fr-FR": {
            singular: "({INVITES} maximum)"
          },
          "ja-JP": {
            singular: "（最大{INVITES}人）"
          },
          "ko-KR": {
            singular: "(최대 {INVITES})"
          },
          "pt-BR": {
            singular: "(máximo de {INVITES})"
          },
          "zh-CN": {
            singular: "（{INVITES} 上限）"
          }
        }
      }),
      AddSeats: (0, _v27.translate)({
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
      AboutSeats: (0, _v27.translate)({
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
      AccountUpgradeMessage: _v0 => (0, _v27.translate)({
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
      AddAdminsContributors: (0, _v27.translate)({
        singular: "You can still add team members as Contributors or Admins because you have unassigned seats.",
        dictionary: {
          es: {
            singular: "Puedes seguir agregando miembros del equipo como colaboradores o administradores porque tienes puestos sin asignar."
          },
          "de-DE": {
            singular: "Du kannst Teammitglieder weiterhin als Mitwirkende oder Administratoren hinzufügen, da du noch verfügbare Einzellizenzen hast."
          },
          "fr-FR": {
            singular: "Vous pouvez toujours ajouter des collaborateurs en tant que Contributeurs ou Administrateurs car il vous reste des licences à attribuer."
          },
          "ja-JP": {
            singular: "シートライセンスが割り当てられていないため、チームメンバーを閲覧者または管理者として追加できます。"
          },
          "ko-KR": {
            singular: "할당되지 않은 사용자 라이선스가 있으므로 팀원을 기여자 또는 관리자로 계속 추가할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode adicionar integrantes da equipe como colaboradores ou administradores, porque ainda tem licenças não atribuídas."
          },
          "zh-CN": {
            singular: "您仍然可以将团队成员添加为贡献者或管理员，因为您有未分配的席位。"
          }
        }
      }),
      AdditionalInvites: (0, _v27.translate)({
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
      AdditionalSeats: (0, _v27.translate)({
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
      AddSeatsDowngradeTooltip: (0, _v27.translate)({
        singular: "Adding seats is not available while a plan change is scheduled",
        dictionary: {
          es: {
            singular: "Agregar asientos no está disponible mientras haya un cambio de plan programado"
          },
          "de-DE": {
            singular: "Das Hinzufügen von Plätzen ist nicht möglich, solange eine Tarifänderung geplant ist"
          },
          "fr-FR": {
            singular: "L'ajout de sièges n'est pas disponible tant qu'un changement d'abonnement est programmé"
          },
          "ja-JP": {
            singular: "プラン変更が予定されている間は席を追加できません"
          },
          "ko-KR": {
            singular: "플랜 변경이 예정되어 있는 동안 좌석 추가 기능은 이용할 수 없습니다."
          },
          "pt-BR": {
            singular: "Adicionar assentos não está disponível enquanto uma alteração de plano está agendada"
          },
          "zh-CN": {
            singular: "在已安排的计划变更期间无法添加席位"
          }
        }
      }),
      AddMoreWhenOutofSeats: (0, _v27.translate)({
        singular: "To add more, please contact your Account Owner. Or invite Viewers for free.",
        dictionary: {
          es: {
            singular: "Para agregar más, ponte en contacto con el propietario de tu cuenta. O invita a espectadores sin cargo."
          },
          "de-DE": {
            singular: "Wende dich an deinen Kontoinhaber, um weitere hinzuzufügen. Oder lade Betrachter kostenlos ein."
          },
          "fr-FR": {
            singular: "Pour en ajouter plus, contactez le détenteur du compte, ou invitez gratuitement des Spectateurs."
          },
          "ja-JP": {
            singular: "さらに追加するには、アカウント所有者にお問い合わせください。または、視聴者を無料で招待してください。"
          },
          "ko-KR": {
            singular: "사용자 라이선스가 더 필요하면 계정 소유자에게 문의하세요. 또는 무료로 뷰어를 초대하세요."
          },
          "pt-BR": {
            singular: "Entre em contato com o proprietário da conta para adicionar mais ou convide espectadores gratuitamente."
          },
          "zh-CN": {
            singular: "要添加更多内容，请联系您的帐户所有者。或免费邀请观众。"
          }
        }
      }),
      AddMoreContactAccountManager: (0, _v27.translate)({
        singular: "To add more, please contact your Account Manager.",
        dictionary: {
          es: {
            singular: "Para agregar más, póngase en contacto con el gerente de su cuenta."
          },
          "de-DE": {
            singular: "Wenden dich bitte an den Kundenbetreuer, um weitere hinzuzufügen."
          },
          "fr-FR": {
            singular: "Pour en savoir plus, veuillez contacter le responsable de votre compte."
          },
          "ja-JP": {
            singular: "さらに追加するには、アカウントマネージャーにお問い合わせください。"
          },
          "ko-KR": {
            singular: "추가하려면 계정 관리자에게 문의하세요."
          },
          "pt-BR": {
            singular: "Para adicionar mais, entre em contato com o gerente da conta."
          },
          "zh-CN": {
            singular: "如需添加更多席位，请联系您的客户经理。"
          }
        }
      }),
      AdminLimitReached: (0, _v27.translate)({
        singular: "You’ve reached your admin limit. Upgrade your plan to add more admins.",
        dictionary: {
          es: {
            singular: "Ha alcanzado su límite de administradores. Actualice su plan para añadir más administradores."
          },
          "de-DE": {
            singular: "Sie haben die maximale Anzahl an Administratoren erreicht. Aktualisieren Sie Ihren Plan, um weitere Administratoren hinzuzufügen."
          },
          "fr-FR": {
            singular: "Vous avez atteint la limite d’administration. Mettez à niveau votre forfait pour ajouter d’autres administrateurs."
          },
          "ja-JP": {
            singular: "管理者数の上限に達しました。 プランをアップグレードして管理者を追加してください。"
          },
          "ko-KR": {
            singular: "관리자 한도에 도달했습니다. 요금제를 업그레이드하여 더 많은 관리자를 추가하세요."
          },
          "pt-BR": {
            singular: "Você atingiu o limite de administradores. Atualize seu plano para adicionar mais administradores."
          },
          "zh-CN": {
            singular: "您已达到管理员上限。升级您的计划以添加更多管理员。"
          }
        }
      }),
      ContactOwnerUpgradeTierForPaidMembers: (0, _v27.translate)({
        singular: "To add more paid seats, contact your Account Owner about upgrading to a higher tier.",
        dictionary: {
          es: {
            singular: "Para añadir más asientos de pago, ponte en contacto con el propietario de la cuenta para actualizar a un nivel superior."
          },
          "de-DE": {
            singular: "Um weitere kostenpflichtige Plätze hinzuzufügen, kontaktieren Sie Ihren Kontoinhaber, um auf einen höheren Tarif zu wechseln."
          },
          "fr-FR": {
            singular: "Pour ajouter des sièges payants supplémentaires, contactez le propriétaire du compte pour passer à un niveau supérieur."
          },
          "ja-JP": {
            singular: "有料シートを追加するには、アカウントオーナーに連絡して上位プランへのアップグレードを依頼してください."
          },
          "ko-KR": {
            singular: "유료 좌석을 추가하려면 계정 소유자에게 연락하여 상위 요금제로 업그레이드하는 것에 대해 문의하세요."
          },
          "pt-BR": {
            singular: "Para adicionar mais assentos pagos, entre em contato com o Proprietário da conta para atualizar para um nível superior."
          },
          "zh-CN": {
            singular: "若要添加更多付费席位，请联系您的账户所有者了解升级到更高级别方案的事宜。"
          }
        }
      }),
      AddViewers: (0, _v27.translate)({
        singular: "To add more Viewers, upgrade to Enterprise.",
        dictionary: {
          es: {
            singular: "Para agregar más espectadores, actualiza al plan Enterprise."
          },
          "de-DE": {
            singular: "Führe ein Upgrade auf Enterprise durch, um weitere Betrachter hinzuzufügen."
          },
          "fr-FR": {
            singular: "Pour ajouter d'autres spectateurs, passez à un abonnement Entreprise."
          },
          "ja-JP": {
            singular: "閲覧者をさらに追加するには、Enterpriseにアップグレードしてください。"
          },
          "ko-KR": {
            singular: "뷰어를 더 추가하려면 Enterprise로 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Para adicionar mais espectadores, faça upgrade para o plano Enterprise."
          },
          "zh-CN": {
            singular: "要添加更多观众，请升级到 Enterprise。"
          }
        }
      }),
      Cancel: (0, _v27.translate)({
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
      }),
      ChooseFolder: (0, _v27.translate)({
        singular: "Choose folder",
        dictionary: {
          es: {
            singular: "Elegir carpeta"
          },
          "de-DE": {
            singular: "Ordner auswählen"
          },
          "fr-FR": {
            singular: "Choisir un dossier"
          },
          "ja-JP": {
            singular: "フォルダーを選択"
          },
          "ko-KR": {
            singular: "폴더 선택"
          },
          "pt-BR": {
            singular: "Escolher pasta"
          },
          "zh-CN": {
            singular: "选择文件夹"
          }
        }
      }),
      ContactMessage: (0, _v27.translate)({
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
      ContactOwnerForViewers: (0, _v27.translate)({
        singular: "To add more Viewers, contact your Account Owner.",
        dictionary: {
          es: {
            singular: "Para agregar más espectadores, ponte en contacto con el propietario de tu cuenta."
          },
          "de-DE": {
            singular: "Wende dich an deinen Kontoinhaber, um weitere Betrachter hinzuzufügen."
          },
          "fr-FR": {
            singular: "Pour ajouter plus de spectateurs, contactez le détenteur du compte."
          },
          "ja-JP": {
            singular: "閲覧者をさらに追加するには、アカウント所有者にお問い合わせください。"
          },
          "ko-KR": {
            singular: "뷰어를 더 추가하려면 계정 소유자에게 문의하세요."
          },
          "pt-BR": {
            singular: "Para adicionar mais espectadores, entre em contato com o proprietário da conta."
          },
          "zh-CN": {
            singular: "要添加更多观众，请联系您的帐户所有者。"
          }
        }
      }),
      ContactUs: (0, _v27.translate)({
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
      CreateFolder: (0, _v27.translate)({
        singular: "Create folder",
        dictionary: {
          es: {
            singular: "Crear carpeta"
          },
          "de-DE": {
            singular: "Ordner erstellen"
          },
          "fr-FR": {
            singular: "Créer un dossier"
          },
          "ja-JP": {
            singular: "フォルダーを作成"
          },
          "ko-KR": {
            singular: "폴더 만들기"
          },
          "pt-BR": {
            singular: "Criar Pasta"
          },
          "zh-CN": {
            singular: "创建文件夹"
          }
        }
      }),
      CreateNew: (0, _v27.translate)({
        singular: "Create new",
        dictionary: {
          es: {
            singular: "Crear nuevo"
          },
          "de-DE": {
            singular: "Schaffe etwas Neues"
          },
          "fr-FR": {
            singular: "Créer un nouveau"
          },
          "ko-KR": {
            singular: "새로 만들기"
          },
          "pt-BR": {
            singular: "Criar novo"
          },
          "zh-CN": {
            singular: "新建"
          }
        }
      }),
      AddNote: (0, _v27.translate)({
        singular: "Add a note",
        dictionary: {
          es: {
            singular: "Agregar una nota"
          },
          "de-DE": {
            singular: "Eine Anmerkung hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter une note"
          },
          "ja-JP": {
            singular: "メモを追加"
          },
          "ko-KR": {
            singular: "메모 추가"
          },
          "pt-BR": {
            singular: "Adicionar uma observação"
          },
          "zh-CN": {
            singular: "添加一条备注"
          }
        }
      }),
      CustomNote: (0, _v27.translate)({
        singular: "Hi, I’ve invited you to view folders and join my team on Vimeo!",
        dictionary: {
          es: {
            singular: "Hola, te he invitado a ver carpetas y a unirte a mi equipo en Vimeo."
          },
          "de-DE": {
            singular: "Hallo, ich habe dich zum Anschauen von Ordnern und zum Beitritt zu meinem Team auf Vimeo eingeladen!"
          },
          "fr-FR": {
            singular: "Bonjour, je vous invite à consulter des dossiers et à rejoindre mon équipe sur Vimeo !"
          },
          "ja-JP": {
            singular: "Vimeoで私のチームに参加して、フォルダーを閲覧できるよう招待しました。"
          },
          "ko-KR": {
            singular: "안녕하세요. Vimeo에서 폴더를 보고 팀에 합류하도록 초대합니다!"
          },
          "pt-BR": {
            singular: "Olá. Convidei você para ver pastas e se fazer parte de minha equipe no Vimeo!"
          },
          "zh-CN": {
            singular: "您好，我已邀请您在 Vimeo 上查看文件夹并加入我的团队！"
          }
        }
      }),
      EnterAValidEmailAddress: (0, _v27.translate)({
        singular: "Enter a valid email address.",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an."
          },
          "fr-FR": {
            singular: "Saisissez une adresse e-mail valide."
          },
          "ja-JP": {
            singular: "有効なメールアドレスを入力してください。"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido."
          },
          "zh-CN": {
            singular: "输入有效的电子邮件地址。"
          }
        }
      }),
      FolderName: (0, _v27.translate)({
        singular: "Folder name",
        dictionary: {
          es: {
            singular: "Nombre de la carpeta"
          },
          "de-DE": {
            singular: "Ordnername"
          },
          "fr-FR": {
            singular: "Nom du dossier"
          },
          "ja-JP": {
            singular: "フォルダー名"
          },
          "ko-KR": {
            singular: "폴더 이름"
          },
          "pt-BR": {
            singular: "Nome da pasta"
          },
          "zh-CN": {
            singular: "文件夹名称"
          }
        }
      }),
      FreeTrialSeatLimitReached: (0, _v27.translate)({
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
      FreeTrialTeamLimitReached: (0, _v27.translate)({
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
      FreeTrialViewerLimitReached: (0, _v27.translate)({
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
      Invite: (0, _v27.translate)({
        singular: "Invite",
        dictionary: {
          es: {
            singular: "Invitar"
          },
          "de-DE": {
            singular: "Einladen"
          },
          "fr-FR": {
            singular: "Inviter"
          },
          "ja-JP": {
            singular: "招待"
          },
          "ko-KR": {
            singular: "초대"
          },
          "pt-BR": {
            singular: "Convidar"
          },
          "zh-CN": {
            singular: "邀请"
          }
        }
      }),
      InviteLimitReach: (0, _v27.translate)({
        singular: "You hit your maximum number of invites.",
        dictionary: {
          es: {
            singular: "Has alcanzado el número máximo de invitaciones."
          },
          "de-DE": {
            singular: "Du hast deine Maximalzahl an Einladungen erreicht."
          },
          "fr-FR": {
            singular: "Vous avez atteint votre nombre maximum d'invitations."
          },
          "ja-JP": {
            singular: "追加できるメンバー数の上限に達しました。"
          },
          "ko-KR": {
            singular: "보낸 초대장 수가 최대 한도에 도달했습니다."
          },
          "pt-BR": {
            singular: "Você atingiu o número máximo de convites."
          },
          "zh-CN": {
            singular: "您已达到最大邀请数。"
          }
        }
      }),
      InviteSent: (0, _v27.translate)({
        singular: "Invite Sent",
        dictionary: {
          es: {
            singular: "Invitación enviada"
          },
          "de-DE": {
            singular: "Einladung wurde abgeschickt"
          },
          "fr-FR": {
            singular: "Invitation envoyée"
          },
          "ja-JP": {
            singular: "招待を送信しました"
          },
          "ko-KR": {
            singular: "초대장 전송 완료"
          },
          "pt-BR": {
            singular: "Convite enviado!"
          },
          "zh-CN": {
            singular: "邀请已发送"
          }
        }
      }),
      InviteTeamMembers: (0, _v27.translate)({
        singular: "Invite team members",
        dictionary: {
          es: {
            singular: "Invita a los miembros del equipo"
          },
          "de-DE": {
            singular: "Teammitglieder einladen"
          },
          "fr-FR": {
            singular: "Inviter des collaborateurs"
          },
          "ja-JP": {
            singular: "チームメンバーを招待"
          },
          "ko-KR": {
            singular: "팀원 초대하기"
          },
          "pt-BR": {
            singular: "Convide integrantes da equipe"
          },
          "zh-CN": {
            singular: "邀请团队成员"
          }
        }
      }),
      InviteViewers: _v0 => (0, _v27.translate)({
        singular: "Or invite up to {COUNT} Viewers for free.",
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "O puedes invitar hasta {COUNT} espectadores sin cargo."
          },
          "de-DE": {
            singular: "Oder lade bis zu {COUNT} Betrachter kostenlos ein."
          },
          "fr-FR": {
            singular: "Ou invitez jusqu'à {COUNT} spectateurs gratuitement."
          },
          "ja-JP": {
            singular: "または最大{COUNT}人の閲覧者を無料で招待。"
          },
          "ko-KR": {
            singular: "또는 최대 {COUNT}명의 뷰어를 무료로 초대하세요."
          },
          "pt-BR": {
            singular: "Ou convidar até {COUNT} espectadores gratuitamente."
          },
          "zh-CN": {
            singular: "或免费邀请最多 {COUNT} 名观众。"
          }
        }
      }),
      MaxEmailInvitesInOneGo: (0, _v27.translate)({
        singular: "You’ve reached the max amount of emails for one invite. Once you send the invite, you can return here to add more team members.",
        dictionary: {
          es: {
            singular: "Ha alcanzado el número máximo de correos electrónicos para una invitación. Una vez enviada la invitación, puede volver aquí para agregar más miembros del equipo."
          },
          "de-DE": {
            singular: "Sie haben die maximale Anzahl von E-Mails für eine Einladung erreicht. Sobald Sie die Einladung verschickt haben, können Sie hierher zurückkehren, um weitere Teammitglieder hinzuzufügen."
          },
          "fr-FR": {
            singular: "Vous avez atteint le nombre maximum d'e-mails pour une invitation. Une fois l'invitation envoyée, vous pouvez revenir ici pour ajouter d'autres collaborateurs."
          },
          "ja-JP": {
            singular: "1件の招待のメール上限数に達しました。招待状を送信したら、ここに戻ってチームメンバーを追加できます。"
          },
          "ko-KR": {
            singular: "1회 초대에 보낼 수 있는 최대 이메일 수에 도달했습니다. 초대장을 보낸 후 여기로 돌아와서 팀원을 추가할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você atingiu a quantidade máxima de e-mails para um convite. Depois de enviar o convite, você pode voltar aqui para adicionar mais integrantes da equipe."
          },
          "zh-CN": {
            singular: "您一次邀请可用的电子邮件数量已达到上限。您可以在发送邀请后，再返回此处添加更多团队成员。"
          }
        }
      }),
      PurchaseAdditionlSeats: (0, _v27.translate)({
        singular: "You can purchase additional seats once you’re on a paid plan.",
        dictionary: {
          es: {
            singular: "Puedes comprar puestos adicionales una vez que tengas un plan pago."
          },
          "de-DE": {
            singular: "Mit einem Upgrade auf eine kostenpflichtige Mitgliedschaft kannst du zusätzliche Einzellizenzen erwerben."
          },
          "fr-FR": {
            singular: "Vous pouvez acheter des licences supplémentaires une fois que vous bénéficiez d'un abonnement payant."
          },
          "ja-JP": {
            singular: "有料プランではシートライセンスを追加で購入できます。"
          },
          "ko-KR": {
            singular: "유료 요금제를 사용 중인 경우 사용자 라이선스를 추가 구매할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você poderá comprar mais licenças quando tiver um plano pago."
          },
          "zh-CN": {
            singular: "使用付费套餐后，您可以购买额外的席位。"
          }
        }
      }),
      PurchaseSeats: (0, _v27.translate)({
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
      Roles: {
        Owner: (0, _v27.translate)({
          singular: "Owner",
          dictionary: {
            es: {
              singular: "Propietario(a)"
            },
            "de-DE": {
              singular: "Inhaber"
            },
            "fr-FR": {
              singular: "Propriétaire"
            },
            "ja-JP": {
              singular: "所有者"
            },
            "ko-KR": {
              singular: "계정 소유자"
            },
            "pt-BR": {
              singular: "Proprietário"
            },
            "zh-CN": {
              singular: "所有者"
            }
          }
        }),
        Admin: (0, _v27.translate)({
          singular: "Admin",
          dictionary: {
            es: {
              singular: "Administrador(a)"
            },
            "fr-FR": {
              singular: "Administrateur"
            },
            "ja-JP": {
              singular: "管理者"
            },
            "ko-KR": {
              singular: "관리자"
            },
            "pt-BR": {
              singular: "Administrador"
            },
            "zh-CN": {
              singular: "管理员"
            }
          }
        }),
        Contributor: (0, _v27.translate)({
          singular: "Contributor",
          dictionary: {
            es: {
              singular: "Colaborador(a)"
            },
            "de-DE": {
              singular: "Beitragender"
            },
            "fr-FR": {
              singular: "Contributeur"
            },
            "ja-JP": {
              singular: "投稿者"
            },
            "ko-KR": {
              singular: "기여자"
            },
            "pt-BR": {
              singular: "Colaborador"
            },
            "zh-CN": {
              singular: "贡献者"
            }
          }
        }),
        "Contributor Plus": (0, _v27.translate)({
          singular: "Contributor Plus",
          dictionary: {
            es: {
              singular: "Colaborador Plus"
            },
            "de-DE": {
              singular: "Beitragender Plus"
            },
            "fr-FR": {
              singular: "Contributeur Plus"
            },
            "ja-JP": {
              singular: "投稿者プラス"
            },
            "ko-KR": {
              singular: "기여자 플러스"
            },
            "pt-BR": {
              singular: "Colaborador Plus"
            }
          }
        }),
        Uploader: (0, _v27.translate)({
          singular: "Uploader",
          dictionary: {
            es: {
              singular: "Herramienta para subir videos"
            },
            "ja-JP": {
              singular: "アップローダー"
            },
            "ko-KR": {
              singular: "업로더"
            },
            "pt-BR": {
              singular: "Quem carrega os vídeos"
            },
            "zh-CN": {
              singular: "上传者"
            }
          }
        }),
        Viewer: (0, _v27.translate)({
          singular: "Viewer",
          dictionary: {
            es: {
              singular: "Espectador(a)"
            },
            "de-DE": {
              singular: "Zuschauende"
            },
            "fr-FR": {
              singular: "Spectateur"
            },
            "ja-JP": {
              singular: "閲覧者"
            },
            "ko-KR": {
              singular: "뷰어"
            },
            "pt-BR": {
              singular: "Espectador"
            },
            "zh-CN": {
              singular: "观众"
            }
          }
        })
      },
      Save: (0, _v27.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      }),
      Seat: (0, _v27.translate)({
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
      SelectFolder: (0, _v27.translate)({
        singular: "Select a folder",
        dictionary: {
          es: {
            singular: "Seleccionar una carpeta"
          },
          "de-DE": {
            singular: "Ordner auswählen"
          },
          "fr-FR": {
            singular: "Sélectionnez un dossier"
          },
          "ja-JP": {
            singular: "フォルダーを選択"
          },
          "ko-KR": {
            singular: "폴더 선택"
          },
          "pt-BR": {
            singular: "Selecione uma pasta"
          },
          "zh-CN": {
            singular: "选择文件夹"
          }
        }
      }),
      ServerError: (0, _v27.translate)({
        singular: "Unable to send invite. Try again.",
        dictionary: {
          es: {
            singular: "No se puede enviar la invitación. Inténtelo de nuevo."
          },
          "de-DE": {
            singular: "Einladung konnte nicht gesendet werden. Nochmal versuchen."
          },
          "fr-FR": {
            singular: "Impossible d'envoyer l'invitation. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "招待を送信できません。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "초대장을 보낼 수 없습니다. 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "Não foi possível enviar o convite. Tente novamente."
          },
          "zh-CN": {
            singular: "无法发送邀请。请重试。"
          }
        }
      }),
      MigrationInProgress: (0, _v27.translate)({
        singular: "You can't add members while your Team Library is being set up.",
        dictionary: {
          es: {
            singular: "No puedes añadir miembros mientras se configura tu Biblioteca del equipo."
          },
          "de-DE": {
            singular: "Sie können keine Mitglieder hinzufügen, während Ihre Team-Bibliothek eingerichtet wird."
          },
          "fr-FR": {
            singular: "Vous ne pouvez pas ajouter de membres pendant que votre bibliothèque d'équipe est en cours de configuration."
          },
          "ja-JP": {
            singular: "Team Library の設定中はメンバーを追加できません。"
          },
          "ko-KR": {
            singular: "팀 라이브러리가 설정되는 동안 멤버를 추가할 수 없습니다."
          },
          "pt-BR": {
            singular: "Você não pode adicionar membros enquanto sua Biblioteca da equipe está sendo configurada."
          },
          "zh-CN": {
            singular: "在团队资料库设置期间，您无法添加成员。"
          }
        }
      }),
      SkipForNow: (0, _v27.translate)({
        singular: "Skip for now",
        dictionary: {
          es: {
            singular: "Omitir por ahora"
          },
          "de-DE": {
            singular: "Später wieder darauf zurückkommen"
          },
          "fr-FR": {
            singular: "Ignorer pour l'instant"
          },
          "ja-JP": {
            singular: "後で決める"
          },
          "ko-KR": {
            singular: "일단 건너뛰기"
          },
          "pt-BR": {
            singular: "Pular este passo por enquanto"
          },
          "zh-CN": {
            singular: "暂时跳过"
          }
        }
      }),
      Tax: _v0 => (0, _v27.translate)({
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
      TeamMemberAlreadyInvited: _v0 => (0, _v27.translate)({
        singular: "{BOLD}'{EMAIL}'{/BOLD} is already invited and is yet to respond.",
        replacements: {
          EMAIL: _v0,
          BOLD: _v0 => (0, _v1.jsx)("b", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Ya se invitó a {BOLD}'{EMAIL}'{/BOLD} y aún no respondió."
          },
          "de-DE": {
            singular: "{BOLD}„{EMAIL}“{/BOLD} wurde bereits eingeladen und hat noch nicht geantwortet."
          },
          "fr-FR": {
            singular: "{BOLD}« {EMAIL} »{/BOLD} a déjà reçu une invitation et n'a pas encore répondu."
          },
          "ja-JP": {
            singular: "{BOLD}「{EMAIL}」{/BOLD}はすでに招待済み・返答待ちです。"
          },
          "ko-KR": {
            singular: "{BOLD}'{EMAIL}'{/BOLD}은(는) 이미 초대되었으며 아직 응답하지 않았습니다."
          },
          "pt-BR": {
            singular: "{BOLD}'{EMAIL}'{/BOLD} já recebeu o convite e ainda não respondeu."
          },
          "zh-CN": {
            singular: "{BOLD}“{EMAIL}”{/BOLD}已被邀请，但尚未回复。"
          }
        }
      }),
      TeamMemberAlreadyJoined: _v0 => (0, _v27.translate)({
        singular: "{BOLD}'{EMAIL}'{/BOLD} is already part of your team.",
        replacements: {
          EMAIL: _v0,
          BOLD: _v0 => (0, _v1.jsx)("b", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "{BOLD}'{EMAIL}'{/BOLD} ya es parte de tu equipo."
          },
          "de-DE": {
            singular: "{BOLD}„{EMAIL}“{/BOLD} gehört deinem Team bereits an."
          },
          "fr-FR": {
            singular: "{BOLD}« {EMAIL} »{/BOLD} fait déjà partie de votre équipe."
          },
          "ja-JP": {
            singular: "{BOLD}「{EMAIL}」{/BOLD}はすでにチームメンバーです。"
          },
          "ko-KR": {
            singular: "{BOLD}'{EMAIL}'{/BOLD}은(는) 이미 팀에 속해 있습니다."
          },
          "pt-BR": {
            singular: "{BOLD}'{EMAIL}'{/BOLD} já faz parte da sua equipe."
          },
          "zh-CN": {
            singular: "{BOLD}“{EMAIL}”{/BOLD}已是您的团队成员。"
          }
        }
      }),
      TrialAdditionalSeats: (0, _v27.translate)({
        singular: "Add seats to your trial to send your invitations. Or invite Viewers for free.",
        dictionary: {
          es: {
            singular: "Agrega puestos a tu prueba para enviar tus invitaciones. O invita a espectadores sin cargo."
          },
          "de-DE": {
            singular: "Füge Lizenzen zu deinem Probeabo hinzu, um deine Einladungen zu senden. Oder lade Betrachter kostenlos ein."
          },
          "fr-FR": {
            singular: "Ajoutez des licences à votre essai pour envoyer vos invitations ou invitez gratuitement des Spectateurs."
          },
          "ja-JP": {
            singular: "招待を送るには、トライアル版にシートライセンスを追加してください。または、視聴者を無料で招待してください。"
          },
          "ko-KR": {
            singular: "체험판에 사용자 라이선스를 추가하여 초대장을 보내세요. 또는 무료로 뷰어를 초대하세요."
          },
          "pt-BR": {
            singular: "Adicione licenças ao seu teste gratuito para enviar seus convites. Ou convide espectadores gratuitamente."
          },
          "zh-CN": {
            singular: "向试用添加席位以发送您的邀请。或免费邀请观众。"
          }
        }
      }),
      TypeOrPasteEmails: (0, _v27.translate)({
        singular: "Type or paste emails to invite to team",
        dictionary: {
          es: {
            singular: "Escribe o pega los correos electrónicos para invitar al equipo"
          },
          "de-DE": {
            singular: "E-Mail-Adresse eintippen oder einfügen, um Personen zum Team einzuladen"
          },
          "fr-FR": {
            singular: "Saisissez ou collez des adresses e-mail pour inviter des membres"
          },
          "ja-JP": {
            singular: "チームに招待するためのメールアドレスを入力または貼り付けてください"
          },
          "ko-KR": {
            singular: "팀에 초대할 이메일을 입력하거나 붙여넣으세요."
          },
          "pt-BR": {
            singular: "Digite ou cole os e-mails para convidar para a equipe"
          },
          "zh-CN": {
            singular: "键入或粘贴电子邮件以邀请其加入团队"
          }
        }
      }),
      Optional: (0, _v27.translate)({
        singular: "(optional)",
        dictionary: {
          es: {
            singular: "(opcional)"
          },
          "fr-FR": {
            singular: "(facultatif)"
          },
          "ja-JP": {
            singular: "(任意)"
          },
          "ko-KR": {
            singular: "(선택 사항)"
          },
          "pt-BR": {
            singular: "(opcional)"
          },
          "zh-CN": {
            singular: "（可选）"
          }
        }
      }),
      Required: (0, _v27.translate)({
        singular: "(required)",
        dictionary: {
          es: {
            singular: "(obligatorio)"
          },
          "de-DE": {
            singular: "(erforderlich)"
          },
          "fr-FR": {
            singular: "(obligatoire)"
          },
          "ja-JP": {
            singular: "(必須)"
          },
          "ko-KR": {
            singular: "(필수 항목)"
          },
          "pt-BR": {
            singular: "(obrigatório)"
          },
          "zh-CN": {
            singular: "(必填)"
          }
        }
      }),
      User: (0, _v27.translate)({
        singular: "User",
        dictionary: {
          es: {
            singular: "Usuario"
          },
          "de-DE": {
            singular: "Benutzer"
          },
          "fr-FR": {
            singular: "Utilisateur"
          },
          "ja-JP": {
            singular: "ユーザー"
          },
          "ko-KR": {
            singular: "사용자"
          },
          "pt-BR": {
            singular: "Usuário"
          },
          "zh-CN": {
            singular: "用户"
          }
        }
      }),
      OutofPaidSeats: (0, _v27.translate)({
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
      PaidSeatLimitReached: _v0 => (0, _v27.translate)({
        singular: "You’ve reached your limit of {COUNT} paid seat.",
        plural: "You’ve reached your limit of {COUNT} paid seats.",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "Has alcanzado tu límite de {COUNT} asiento de pago.",
            plural: "Has alcanzado tu límite de {COUNT} asientos de pago."
          },
          "de-DE": {
            singular: "Sie haben Ihr Limit von {COUNT} kostenpflichtigem Platz erreicht.",
            plural: "Sie haben Ihr Limit von {COUNT} kostenpflichtigen Plätzen erreicht."
          },
          "fr-FR": {
            singular: "Vous avez atteint votre limite de {COUNT} siège payant.",
            plural: "Vous avez atteint votre limite de {COUNT} sièges payants."
          },
          "ja-JP": {
            singular: "有料シートの上限である{COUNT}に達しました.",
            plural: "有料シートの上限である{COUNT}に達しました."
          },
          "ko-KR": {
            singular: "유료 좌석 {COUNT}개의 한도에 도달했습니다.",
            plural: "유료 좌석 {COUNT}개의 한도에 도달했습니다."
          },
          "pt-BR": {
            singular: "Você atingiu seu limite de {COUNT} assento pago.",
            plural: "Você atingiu seu limite de {COUNT} assentos pagos."
          },
          "zh-CN": {
            singular: "您已达到 {COUNT} 个付费席位的上限。",
            plural: "您已达到 {COUNT} 个付费席位的上限。"
          }
        }
      }),
      Upgrade: (0, _v27.translate)({
        singular: "Upgrade",
        dictionary: {
          es: {
            singular: "Actualizar"
          },
          "de-DE": {
            singular: "Upgraden"
          },
          "fr-FR": {
            singular: "Mettre à niveau"
          },
          "ja-JP": {
            singular: "アップグレード"
          },
          "ko-KR": {
            singular: "업그레이드"
          },
          "zh-CN": {
            singular: "升级"
          }
        }
      }),
      UpgradeEnterprise: (0, _v27.translate)({
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
      UpgradeTierForPaidMembers: (0, _v27.translate)({
        singular: "To add more paid seats, upgrade to a higher tier.",
        dictionary: {
          es: {
            singular: "Para añadir más asientos de pago, actualiza a un nivel superior."
          },
          "de-DE": {
            singular: "Um weitere kostenpflichtige Plätze hinzuzufügen, wechseln Sie zu einem höheren Tarif."
          },
          "fr-FR": {
            singular: "Pour ajouter des sièges payants supplémentaires, passez à un niveau supérieur."
          },
          "ja-JP": {
            singular: "有料シートを追加するには、上位プランへアップグレードしてください."
          },
          "ko-KR": {
            singular: "유료 좌석을 추가하려면 상위 요금제로 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Para adicionar mais assentos pagos, atualize para um nível superior."
          },
          "zh-CN": {
            singular: "若要添加更多付费席位，请升级到更高级别的方案。"
          }
        }
      }),
      UpgradeMessage: (0, _v27.translate)({
        singular: "Upgrade for more.",
        dictionary: {
          es: {
            singular: "Cambia de suscripción para obtener más."
          },
          "de-DE": {
            singular: "Mit Upgrade gibt’s mehr Platz."
          },
          "fr-FR": {
            singular: "Passez au niveau supérieur pour en obtenir plus."
          },
          "ja-JP": {
            singular: "より大きな容量を活用するには、アップグレードしてください。"
          },
          "ko-KR": {
            singular: "더 많은 기능을 위해 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Faça o upgrade para ter mais espaço."
          },
          "zh-CN": {
            singular: "升级获得更多权益。"
          }
        }
      }),
      VideoInfo: (_v0, _v1) => (0, _v27.translate)({
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
      }),
      EmailAlreadyATeamMember: _v0 => (0, _v27.translate)({
        singular: "{BOLD}{EMAIL}{/BOLD} is already a team member.",
        replacements: {
          EMAIL: _v0,
          BOLD: _v0 => (0, _v1.jsx)("b", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "{BOLD}{EMAIL}{/BOLD} ya es miembro del equipo."
          },
          "de-DE": {
            singular: "{BOLD}{EMAIL}{/BOLD} ist bereits ein Teammitglied."
          },
          "fr-FR": {
            singular: "{BOLD}{EMAIL}{/BOLD} fait déjà partie de l'équipe."
          },
          "ja-JP": {
            singular: "{BOLD}{EMAIL}{/BOLD}はすでにチームメンバーです。"
          },
          "ko-KR": {
            singular: "{BOLD}{EMAIL}{/BOLD}은(는) 이미 팀원입니다."
          },
          "pt-BR": {
            singular: "{BOLD}{EMAIL}{/BOLD} já é integrante da equipe."
          },
          "zh-CN": {
            singular: "{BOLD}{EMAIL}{/BOLD} 已经是团队成员。"
          }
        }
      }),
      EmailNotAValidDomain: _v0 => (0, _v27.translate)({
        singular: "{BOLD}{EMAIL}{/BOLD} is not a valid domain.",
        replacements: {
          EMAIL: _v0,
          BOLD: _v0 => (0, _v1.jsx)("b", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "{BOLD}{EMAIL}{/BOLD} no es un dominio válido."
          },
          "de-DE": {
            singular: "{BOLD}{EMAIL}{/BOLD} ist keine gültige Domain."
          },
          "fr-FR": {
            singular: "{BOLD}{EMAIL}{/BOLD} n'est pas un domaine valide."
          },
          "ja-JP": {
            singular: "{BOLD}{EMAIL}{/BOLD}のドメインが無効です。"
          },
          "ko-KR": {
            singular: "{BOLD}{EMAIL}{/BOLD}은(는) 유효한 도메인이 아닙니다."
          },
          "pt-BR": {
            singular: "{BOLD}{EMAIL}{/BOLD} não é um domínio válido."
          },
          "zh-CN": {
            singular: "{BOLD}{EMAIL}{/BOLD} 不是有效域名。"
          }
        }
      }),
      EmailEnteredTwice: _v0 => (0, _v27.translate)({
        singular: "{BOLD}{EMAIL}{/BOLD} has been entered twice.",
        replacements: {
          EMAIL: _v0,
          BOLD: _v0 => (0, _v1.jsx)("b", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "{BOLD}{EMAIL}{/BOLD} se ingresó dos veces."
          },
          "de-DE": {
            singular: "{BOLD}{EMAIL}{/BOLD} wurde zweimal eingegeben."
          },
          "fr-FR": {
            singular: "{BOLD}{EMAIL}{/BOLD} a été saisie en double."
          },
          "ja-JP": {
            singular: "{BOLD}{EMAIL}{/BOLD}は2回入力されています。"
          },
          "ko-KR": {
            singular: "{BOLD}{EMAIL}{/BOLD}이(가) 두 번 입력되었습니다."
          },
          "pt-BR": {
            singular: "{BOLD}{EMAIL}{/BOLD} foi inserido duas vezes."
          },
          "zh-CN": {
            singular: "{BOLD}{EMAIL}{/BOLD} 已输入两次。"
          }
        }
      }),
      Next: (0, _v27.translate)({
        singular: "Next",
        dictionary: {
          es: {
            singular: "Siguiente"
          },
          "de-DE": {
            singular: "Weiter"
          },
          "fr-FR": {
            singular: "Suivant"
          },
          "ja-JP": {
            singular: "次へ"
          },
          "ko-KR": {
            singular: "다음"
          },
          "pt-BR": {
            singular: "Próxima"
          },
          "zh-CN": {
            singular: "下一步"
          }
        }
      }),
      InvitePeopleToTeam: (0, _v27.translate)({
        singular: "Invite people to your team",
        dictionary: {
          es: {
            singular: "Invita a gente a tu equipo"
          },
          "de-DE": {
            singular: "Einladen von Personen in dein Team"
          },
          "fr-FR": {
            singular: "Invitez des personnes à rejoindre votre équipe"
          },
          "ja-JP": {
            singular: "チームにユーザーを招待する"
          },
          "ko-KR": {
            singular: "팀에 사람들을 초대하세요."
          },
          "pt-BR": {
            singular: "Convidar pessoas para sua equipe"
          },
          "zh-CN": {
            singular: "邀请他人加入您的团队"
          }
        }
      }),
      OutOfAdminSeats: (0, _v27.translate)({
        singular: "You’ve run out of admin seats.",
        dictionary: {
          es: {
            singular: "Se ha quedado sin puestos de administrador."
          },
          "de-DE": {
            singular: "Ihnen sind die erforderlichen Administratorrechte ausgegangen."
          },
          "fr-FR": {
            singular: "Vous n'avez plus de licences d'administrateur."
          },
          "ja-JP": {
            singular: "管理者枠のシートが不足しています。"
          },
          "ko-KR": {
            singular: "관리자 라이선스가 부족합니다."
          },
          "pt-BR": {
            singular: "Você não tem mais licenças de administradores disponíveis."
          },
          "zh-CN": {
            singular: "您的管理员席位已用完。"
          }
        }
      })
    };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = ({
    onTagClose: _v0,
    values: _v1 = [],
    invalidIndices: _v2 = [],
    inputValue: _v3,
    onChange: _v4,
    onBlur: _v5,
    onTabPress: _v6,
    placeholder: _v7 = "",
    hasError: _v8 = !1,
    disableInput: _v9 = !1
  }) => {
    let _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(null),
      _v12 = (0, _v2.useRef)(null),
      _v13 = (0, _v2.useRef)(null),
      _v14 = (0, _v2.useRef)(null),
      _v15 = _v13?.current?.offsetHeight ?? 0,
      [_v16, _v17] = (0, _v2.useState)(320);
    return (0, _v2.useEffect)(() => {
      if (!_v14.current) return;
      let _v0 = new ResizeObserver(() => {
        _v17(_v14.current?.getBoundingClientRect().width ?? 0);
      });
      return _v0.observe(_v14.current), () => _v0.disconnect();
    }, [_v14]), (0, _v1.jsx)(_v6.Box, {
      position: "relative",
      flex: 3,
      ref: _v10,
      children: (0, _v1.jsx)(_v6.Box, {
        ref: _v11,
        children: (0, _v1.jsxs)(_v57.InputGroup, {
          ref: _v14,
          height: "auto",
          width: "100%",
          children: [(0, _v1.jsx)(_v58.InputLeftElement, {
            flexWrap: "wrap",
            gap: "xs",
            height: "auto",
            justifyContent: "flex-start",
            paddingLeft: "sm",
            paddingTop: _v1.length ? "sm" : "0",
            width: "fit-content",
            ref: _v13,
            children: _v1.map((_v0, _v1) => {
              let _v2 = _v2[_v1] ? "stroke" : "status-destructive-secondary";
              return (0, _v1.jsxs)(_v59.Tag, {
                maxW: (0, _v22.rem)(_v16 - 16),
                backgroundColor: _v2,
                children: [(0, _v1.jsx)(_v59.TagLabel, {
                  children: _v0
                }), (0, _v1.jsx)(_v59.TagCloseButton, {
                  onClick: () => _v0?.(_v1),
                  children: (0, _v1.jsx)(_v60.CloseX, {})
                })]
              }, _v0);
            })
          }), (0, _v1.jsx)(_v56.Input, {
            isInvalid: _v8,
            "data-id": "textField",
            type: "text",
            autoComplete: "off",
            ref: _v12,
            value: _v3,
            onChange: _v4,
            placeholder: _v1.length ? "" : _v7,
            onKeyDown: _v0 => {
              ("Tab" === _v0.key || "Comma" === _v0.key || " " === _v0.key || "Enter" === _v0.key) && _v3.trim() && (_v0.preventDefault?.(), _v6?.());
            },
            onBlur: _v5,
            isDisabled: _v9,
            pl: "md",
            pt: (0, _v22.rem)(_v15),
            h: (0, _v22.rem)(_v15 + 40),
            size: "md"
          })]
        })
      })
    });
  };
  function _v62({
    onChange: _v0,
    onTabPress: _v1,
    values: _v2,
    invalidIndices: _v3 = [],
    inputValue: _v4,
    handleTagClose: _v5,
    placeholder: _v6 = "",
    hasError: _v7 = !1,
    disableInput: _v8 = !1
  }) {
    let _v9 = (0, _v2.useCallback)(_v0 => {
        _v0(_v0?.currentTarget?.value);
      }, [_v0]),
      _v10 = (0, _v2.useCallback)(() => {
        _v4 && !_v2.includes(_v4) && _v1();
      }, [_v1, _v4, _v2]);
    return (0, _v1.jsx)(_v61, {
      onChange: _v9,
      onTabPress: _v10,
      onBlur: _v10,
      onTagClose: _v5,
      values: _v2,
      invalidIndices: _v3,
      inputValue: _v4 || "",
      placeholder: _v6,
      hasError: _v7,
      disableInput: _v8
    });
  }
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
    onChange: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(""),
      _v3 = (0, _v2.useContext)(_v16.ViewerContext),
      {
        teamCapabilities: {
          hasEnterprise: _v4
        },
        membership: {
          isFreeTrial: _v5
        }
      } = (0, _v2.useContext)(_v38),
      _v6 = _v3?.user?.createdTime,
      _v7 = "custom" === String(_v3?.user?.account),
      _v8 = (0, _v2.useMemo)(() => {
        if (!_v6) return !1;
        let _v0 = new Date(_v6).getTime();
        return !Number.isNaN(_v0) && (Date.now() - _v0) / 0 < 30;
      }, [_v6]),
      _v9 = (0, _v2.useMemo)(() => _v7 || _v4 ? 500 : _v8 || _v5 ? 140 : 500, [_v7, _v4, _v8, _v5]),
      _v10 = _v9 - 20,
      _v11 = _v1.length >= _v10;
    return 140 !== _v9 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v17.Flex, {
        mb: "sm",
        justify: "space-between",
        align: "center",
        children: [(0, _v1.jsxs)(_v17.Flex, {
          children: [(0, _v1.jsx)(_v55.Paragraph, {
            size: "md",
            mr: "xs",
            children: _v52.AddNote
          }), (0, _v1.jsx)(_v55.Paragraph, {
            size: "md",
            color: "text-secondary",
            children: _v52.Optional
          })]
        }), (0, _v1.jsx)(_v6.Box, {
          children: (0, _v1.jsxs)(_v65.Text, {
            fontSize: "body-md",
            variant: "body-xl",
            color: _v11 ? "red.500" : "gray.500",
            textAlign: "right",
            children: [_v1.length, "/", _v9]
          })
        })]
      }), (0, _v1.jsx)(_v66.Textarea, {
        mb: (0, _v22.rem)(10),
        borderRadius: (0, _v22.rem)(6),
        height: (0, _v22.rem)(80),
        value: _v1,
        placeholder: _v52.CustomNote,
        maxLength: _v9,
        onChange: _v0 => {
          let _v1 = _v0.currentTarget.value;
          _v2(_v1), _v0(_v1);
        }
      })]
    }) : null;
  };
  var _v68 = _v0.i(0),
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
    _v81 = _v0.i(0);
  let _v82 = ({
      onRoleSelect: _v0,
      selectedRole: _v1,
      onRegionChange: _v2,
      region: _v3,
      permissionPolicies: _v4,
      onPermissionPoliciesChange: _v5,
      isAdminDisabled: _v6,
      onAdminLimitClick: _v7
    }, _v8) => {
      let _v9 = (0, _v2.useContext)(_v16.ViewerContext),
        {
          capabilities: {
            canRegionalDeliveryFlagRegionalTeamMembers: _v10,
            canRegionalDeliveryManageRegionalPublishers: _v11
          }
        } = (0, _v13.useCapability)(["canRegionalDeliveryFlagRegionalTeamMembers", "canRegionalDeliveryManageRegionalPublishers"], _v9?.teamUser?.ownerId),
        {
          teamInfo: _v12
        } = (0, _v2.useContext)(_v38),
        _v13 = (_v12.owner.metadata?.connections?.teamMembers?.roles ?? []).map(_v0 => ({
          permissionLevel: _v0.permissionLevel,
          displayName: _v0.displayName,
          description: _v0.displayDescription,
          permissionPolicyToggles: _v11 ? (_v0.applicablePermissionPolicies?.regionalDelivery ?? []).map(_v0 => ({
            label: _v0.displayDescription,
            value: _v0.name,
            checked: !1
          })) : [],
          regionToggle: _v10 && _v0.regionOptions && _v0.regionOptions.length > 0 ? {
            label: _v0.regionOptions[0].displayDescription,
            value: _v0.regionOptions[0].code,
            checked: !1
          } : null
        }));
      return (0, _v1.jsx)(_v6.Box, {
        "data-id": "rolesMenuContent",
        ref: _v8,
        children: _v13.map((_v0, _v1) => {
          let _v2 = "Admin" === _v0.permissionLevel && _v6;
          return (0, _v1.jsx)(_v6.Box, {
            children: (0, _v1.jsx)(_v74.Tooltip, {
              shouldWrapChildren: !0,
              isDisabled: !_v2,
              label: _v52.AdminLimitReached,
              children: (0, _v1.jsxs)(_v71.MenuItem, {
                maxW: (0, _v22.rem)(340),
                "data-id": "rolesMenuOption",
                "aria-disabled": _v2,
                onClick: _v2 ? _v7 : void 0,
                children: [(0, _v1.jsxs)(_v6.Box, {
                  children: [(0, _v1.jsxs)(_v77.VStack, {
                    alignItems: "flex-start",
                    gap: "0",
                    onClick: () => {
                      !_v2 && _v0.permissionLevel && _v0(_v0.permissionLevel);
                    },
                    children: [(0, _v1.jsxs)(_v17.Flex, {
                      alignItems: "center",
                      gap: "xs",
                      children: [(0, _v1.jsx)(_v65.Text, {
                        variant: "heading-xs",
                        children: _v0.displayName
                      }), _v2 && (0, _v1.jsx)(_v68.Badge, {
                        variant: "upgrade",
                        size: "sm",
                        children: _v52.Upgrade
                      })]
                    }), (0, _v1.jsx)(_v65.Text, {
                      variant: "body-md",
                      color: "text-secondary",
                      fontWeight: "400",
                      children: _v0.description
                    })]
                  }), _v1 == _v0.permissionLevel && _v0.regionToggle && (0, _v1.jsx)(_v73.Switch, {
                    size: "sm",
                    id: "isInChinaToggle",
                    isChecked: !!_v3,
                    onChange: () => {
                      let _v0 = _v3 ? null : _v0.regionToggle && _v0.regionToggle.value;
                      _v2?.(_v0);
                    },
                    children: (0, _v1.jsx)(_v65.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v22.rem)(13),
                      display: "inline",
                      verticalAlign: "top",
                      children: _v0.regionToggle.label
                    })
                  }), _v1 == _v0.permissionLevel && _v0.permissionPolicyToggles.map(_v0 => (0, _v1.jsx)(_v73.Switch, {
                    size: "sm",
                    id: `${_v0.permissionLevel}-${_v0.value}`,
                    isChecked: _v4.some(_v0 => _v0 === _v0.value),
                    onChange: () => {
                      let _v0 = _v4.some(_v0 => _v0 === _v0.value) ? _v4.filter(_v0 => _v0 !== _v0.value) : [..._v4, _v0.value];
                      _v5?.(_v0);
                    },
                    children: (0, _v1.jsx)(_v65.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v22.rem)(13),
                      display: "inline",
                      verticalAlign: "top",
                      children: _v0.label
                    })
                  }, `${_v0.permissionLevel}-${_v0.value}`))]
                }), _v1 == _v0.permissionLevel && (0, _v1.jsx)(_v78.Checkmark, {
                  boxSize: (0, _v22.rem)(20)
                })]
              })
            })
          }, `${_v1}-${_v0}`);
        })
      });
    },
    _v83 = ({
      onSelect: _v0,
      hasLiveSubscription: _v1,
      onRegionChange: _v2,
      region: _v3,
      permissionPolicies: _v4,
      onPermissionPoliciesChange: _v5,
      isAdminDisabled: _v6,
      onAdminLimitClick: _v7
    }) => {
      let {
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10
        } = (0, _v75.useDisclosure)(),
        _v11 = (0, _v2.useRef)(null),
        [_v12, _v13] = (0, _v2.useState)("Contributor"),
        _v14 = _v2.default.forwardRef(_v82);
      return (0, _v76.useOutsideClick)({
        ref: _v11,
        handler: () => {
          _v11 && null !== _v11.current && _v10();
        }
      }), (0, _v1.jsxs)(_v69.Menu, {
        isOpen: _v8,
        onOpen: _v9,
        children: [(0, _v1.jsx)(_v70.MenuButton, {
          as: _v7.Button,
          height: (0, _v22.rem)(40),
          variant: "secondary",
          "data-id": "rolesMenuButton",
          size: "sm",
          onClick: () => {
            _v4.GoogleTagManager.trackEvent("team_open_role_menu");
          },
          rightIcon: (0, _v1.jsx)(_v79.ChevronDownSmall, {}),
          children: _v52.Roles[_v12]
        }), (0, _v1.jsx)(_v72.MenuList, {
          children: (0, _v1.jsx)(_v14, {
            ref: _v11,
            onRoleSelect: _v0 => {
              _v0(_v0), _v13(_v0), _v2?.(null), _v5?.([]), _v10();
            },
            selectedRole: _v12,
            hasLiveSubscription: _v1,
            onRegionChange: _v2,
            region: _v3,
            permissionPolicies: _v4,
            onPermissionPoliciesChange: _v5,
            isAdminDisabled: _v6,
            onAdminLimitClick: _v7
          })
        })]
      });
    };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = () => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.OutofPaidSeats
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v52.AddMoreWhenOutofSeats
      })]
    }),
    _v89 = ({
      maxTeamSize: _v0
    }) => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.AccountUpgradeMessage(_v0)
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v52.ContactMessage
      })]
    }),
    _v90 = ({
      maxTeamSize: _v0
    }) => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        fontWeight: 700,
        children: _v52.AccountUpgradeMessage(_v0)
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: `${_v52.AddAdminsContributors} ${_v52.ContactOwnerForViewers}`
      })]
    }),
    _v91 = ({
      isScheduledDowngrade: _v0 = !1
    }) => {
      let {
          membership: _v1
        } = (0, _v2.useContext)(_v38),
        _v2 = _v1.isFreeTrial ? _v52.TrialAdditionalSeats : `${_v52.AdditionalSeats} `;
      return (0, _v1.jsxs)(_v84.Alert, {
        background: "upsell-secondary",
        children: [(0, _v1.jsx)(_v86.AlertTitle, {
          children: _v0 ? _v52.AddSeatsDowngradeTooltip : _v52.OutofPaidSeats
        }), !_v0 && (0, _v1.jsxs)(_v85.AlertDescription, {
          children: [_v2, !_v1.isFreeTrial && (0, _v1.jsx)(_v87.Link, {
            href: "https://vimeo.zendesk.com/hc/en-us/articles/7131832878605-How-many-videos-can-I-add-to-my-Starter-Standard-or-Advanced-account-",
            target: "_blank",
            children: _v52.AboutSeats
          })]
        })]
      });
    },
    _v92 = ({
      title: _v0,
      description: _v1,
      isUpsell: _v2 = !1
    }) => (0, _v1.jsxs)(_v84.Alert, {
      background: _v2 ? "upsell-secondary" : void 0,
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v0
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v1
      })]
    }),
    _v93 = ({
      maxTeamSize: _v0
    }) => (0, _v1.jsx)(_v84.Alert, {
      background: "upsell-secondary",
      children: (0, _v1.jsx)(_v85.AlertDescription, {
        children: `${_v52.AccountUpgradeMessage(_v0)} ${_v52.UpgradeEnterprise}`
      })
    }),
    _v94 = () => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.FreeTrialSeatLimitReached
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v52.PurchaseAdditionlSeats + " " + _v52.InviteViewers(5)
      })]
    }),
    _v95 = () => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.FreeTrialTeamLimitReached
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v52.AdditionalInvites
      })]
    }),
    _v96 = () => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.FreeTrialViewerLimitReached
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v52.AddAdminsContributors
      })]
    }),
    _v97 = ({
      maxTeamSize: _v0
    }) => (0, _v1.jsxs)(_v84.Alert, {
      background: "upsell-secondary",
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.AccountUpgradeMessage(_v0)
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: `${_v52.AddAdminsContributors} ${_v52.AddViewers}`
      })]
    }),
    _v98 = () => (0, _v1.jsx)(_v84.Alert, {
      children: (0, _v1.jsx)(_v103, {
        color: "text-primary",
        fontWeight: 400,
        children: _v52.MaxEmailInvitesInOneGo
      })
    }),
    _v99 = () => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.OutOfAdminSeats
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v52.AddMoreContactAccountManager
      })]
    }),
    _v100 = ({
      maxTeamSize: _v0
    }) => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.OutofPaidSeats
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: `${_v52.AccountUpgradeMessage(_v0)}${_v52.ContactMessage}`
      })]
    }),
    _v101 = ({
      isOwner: _v0
    }) => (0, _v1.jsxs)(_v84.Alert, {
      children: [(0, _v1.jsx)(_v86.AlertTitle, {
        children: _v52.OutofPaidSeats
      }), (0, _v1.jsx)(_v85.AlertDescription, {
        children: _v0 ? _v52.AddMoreContactAccountManager : _v52.ContactMessage
      })]
    }),
    _v102 = ({
      maxTeamSize: _v0
    }) => (0, _v1.jsx)(_v84.Alert, {
      background: "upsell-secondary",
      children: (0, _v1.jsxs)(_v17.Flex, {
        alignItems: "space-between",
        children: [(0, _v1.jsx)(_v85.AlertDescription, {
          children: `${_v52.AccountUpgradeMessage(_v0)} ${_v52.UpgradeMessage}`
        }), (0, _v1.jsx)(_v7.Button, {
          variant: "upsell",
          minWidth: (0, _v22.rem)(100),
          border: "none",
          onClick: () => {
            3 == _v0 ? window.open("/upgrade", "_blank") : window.open("/enterprise/contact-us?mkc=team_seats_upgrade", "_blank");
          },
          children: 3 == _v0 ? _v52.Upgrade : _v52.ContactUs
        })]
      })
    }),
    _v103 = ({
      children: _v0,
      fontWeight: _v1,
      ..._v2
    }) => (0, _v1.jsx)(_v65.Text, {
      variant: "body-xl",
      position: "static",
      lineHeight: (0, _v22.rem)(20),
      letterSpacing: (0, _v22.rem)(-.2),
      color: "slate.900",
      fontSize: 14,
      fontWeight: _v1,
      ..._v2,
      children: _v0
    });
  var _v104 = _v0.i(0);
  let _v105 = ["owner.uri", "owner.name", "owner.account", "owner.email", "owner.max_team_members", "owner.metadata.connections.team_members.roles", "owner.metadata.connections.team_members.roles.applicable_permission_policies.regional_delivery.display_description", "owner.metadata.connections.team_members.roles.region_options", "team_data.owner_id", "untranslated_user_role", "current_team_size", "max_team_size", "seat_details", "team_members_count", "team_seats"],
    _v106 = ["email", "role", "permission_level", "metadata.connections.owner.email", "uri", "invite_url", "user", "applicable_permission_policies.folder.name", "applicable_permission_policies.folder.display_name", "applicable_permission_policies.folder.display_description", "applicable_permission_policies.folder.uri"];
  async function _v107(_v0, _v1, _v2 = "GET", _v3) {
    _v0 = _v0.trim();
    try {
      if (!/^\//.test(_v0)) throw Error();
      let _v0 = await fetch(`//${_v1.apiUrl}${_v0}`, {
        method: _v2,
        headers: {
          Authorization: `jwt ${_v1.jwt}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*+json;version=3.4.1",
          "Accept-Language": _v1.locale || "en"
        },
        ...(_v3 ? {
          body: JSON.stringify(_v3)
        } : {})
      });
      if (204 === _v0.status) return (0, _v104.camelize)({});
      let _v1 = await _v0.json();
      if (_v1.error) throw Error(_v1.error);
      return (0, _v104.camelize)(_v1);
    } catch (_v0) {
      throw _v0;
    }
  }
  new URLSearchParams({
    fields: "name,uri,is_private_to_user",
    exclude_private_to_me_folder: "true",
    per_page: "5"
  }).toString();
  let _v108 = async _v0 => {
      let _v1 = encodeURIComponent(_v105.join(","));
      return _v107(`/users/${_v0.user?.id}/teams?fields=${_v1}`, _v0);
    },
    _v109 = async (_v0, _v1, _v2) => {
      let _v3 = encodeURIComponent(_v106.join(",")),
        _v4 = _v2 && _v2.length ? `&search=${_v2}` : "";
      return _v107(`${_v1}/teammembers?fields=${_v3}${_v4}`, _v0);
    },
    _v110 = async (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
      let _v8 = encodeURIComponent(_v106.join(",")),
        _v9 = await fetch(`${_v5}?fields=${_v8}`, {
          method: "POST",
          headers: {
            Authorization: `jwt ${_v6}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.vimeo.*+json;version=3.4.1",
            "Accept-Language": _v7 || "en"
          },
          body: JSON.stringify({
            custom_message: _v2,
            email: _v0,
            permission_level: _v1,
            region: _v3,
            permission_policies: _v4
          })
        });
      return (0, _v104.camelize)(await _v9.json());
    },
    _v111 = ({
      hasPerSeatPricingModelTeamMember: _v0,
      teamInfo: _v1
    }) => _v0 && _v1.owner.maxTeamMembers ? _v1.owner.maxTeamMembers : _v1.maxTeamSize || 200,
    _v112 = (0, _v2.forwardRef)(function ({
      onSubmitSuccess: _v0,
      onSubmitFailure: _v1,
      hasScheduledDowngrade: _v2,
      isSeatChangeBlocked: _v3,
      onAdminLimitClick: _v4,
      actionButtons: _v5
    }, _v6) {
      let {
          isTeamInfoLoading: _v7,
          isTeamMemberLoading: _v8,
          membership: _v9,
          newEmails: _v10,
          teamApiConfig: _v11,
          teamInfo: _v12,
          teamMember: _v13,
          teamCapabilities: {
            hasEnterprise: _v14,
            hasPerSeatPricingModelTeamMember: _v15,
            hasLiveSubscription: _v16,
            haveMoreAdminTeamMembers: _v17
          }
        } = (0, _v2.useContext)(_v38),
        {
          addEmail: _v18,
          updateEmails: _v19,
          removeEmail: _v20
        } = (0, _v2.useContext)(_v39),
        {
          trackInviteMembersToTeam: _v21
        } = _v51(),
        _v22 = (0, _v11.useToast)(),
        [_v23, _v24] = (0, _v2.useState)(!1),
        [_v25, _v26] = (0, _v2.useState)(!1),
        [_v27, _v28] = (0, _v2.useState)(!1),
        [_v29, _v30] = (0, _v2.useState)(!1),
        [_v31, _v32] = (0, _v2.useState)(!1),
        [_v33, _v34] = (0, _v2.useState)(!1),
        [_v35, _v36] = (0, _v2.useState)([]),
        [_v37, _v38] = (0, _v2.useState)([]),
        [_v39, _v40] = (0, _v2.useState)(!1),
        _v41 = (0, _v47.useViewer)(),
        _v42 = _v41?.locale,
        _v43 = _v12?.owner?.account === "custom",
        _v44 = _v9.seatCapTrial || _v12.seatDetails?.basePlanCount || 0,
        _v45 = _v12.maxTeamSize || _v9.seatCount,
        _v46 = _v12.seatDetails?.currentUnassignedCount ?? _v9.currentUnassignedSeatCount,
        _v47 = _v12.seatDetails ? _v12.seatDetails.currentAssignedCount + _v12.seatDetails.currentUnassignedCount : _v45,
        _v48 = _v111({
          hasPerSeatPricingModelTeamMember: _v15,
          teamInfo: _v12
        }),
        _v49 = _v9.isFreeTrial && _v48 <= 10,
        _v50 = (0, _v63.useForm)({
          validationSchema: _v53.object({
            role: _v53.string().required()
          }),
          initialValues: {
            email: null,
            role: _v15.TeamUserPermissionLevel.Contributor,
            customMessage: null,
            region: null,
            permissionPolicies: []
          },
          onSubmit: async _v0 => {
            var _v1, _v2;
            _v40(!0);
            let _v3 = (_v1 = _v10.length, _v2 = _v0.role ?? "", _v15 && _v49 && _v2 !== _v15.TeamUserPermissionLevel.Viewer ? Math.min(_v1, _v44 - (_v12.seatDetails?.basePlanCount ?? 0) + (_v12.seatDetails?.currentUnassignedCount ?? 0)) : _v1),
              _v4 = await Promise.allSettled(_v10.slice(0, _v3).map(_v0 => _v110(_v0, _v0.role, _v0.customMessage, _v0.region, _v0.permissionPolicies, `https://${_v11.apiUrl}${_v11.ownerUri}/teammembers`, _v11.jwt, _v42)));
            _v40(!1);
            let _v5 = [];
            _v4.forEach((_v0, _v1) => {
              if ("rejected" === _v0.status) _v22({
                id: "invite-failed-toast",
                title: _v52.ServerError,
                variant: "warning"
              }), _v1(_v52.input.value ?? "");else if (_v0.value.errorCode) {
                let _v0 = _v0.value.errorCode;
                0 === _v0 ? _v22({
                  id: "invite-failed-toast",
                  title: _v52.InviteLimitReach,
                  variant: "warning"
                }) : 0 === _v0 ? _v22({
                  id: "invite-failed-toast",
                  title: _v52.TeamMemberAlreadyInvited(_v10[_v1]),
                  variant: "warning"
                }) : 0 === _v0 ? _v22({
                  id: "invite-failed-toast",
                  title: _v52.TeamMemberAlreadyJoined(_v10[_v1]),
                  variant: "warning"
                }) : 0 === _v0 ? _v22({
                  id: "invite-failed-toast",
                  title: _v52.MigrationInProgress,
                  variant: "warning"
                }) : _v22({
                  id: "invite-failed-toast",
                  title: _v52.ServerError,
                  variant: "warning"
                }), _v1(_v52.input.value ?? "", _v0);
              } else _v5.push(_v0.value);
            }), _v5.length === _v4.length && (_v0(_v52.input.value !== _v15.TeamUserPermissionLevel.Admin && _v52.input.value !== _v15.TeamUserPermissionLevel.Uploader ? _v5 : []), _v21({
              number_of_users_invited: _v10.length,
              new_role: _v0.role?.toLowerCase() ?? null,
              includes_message: !!_v0.customMessage
            }));
          },
          validateOnFirstRun: !1
        });
      (0, _v2.useEffect)(() => {
        _v51.handlers.setValue(null);
      }, [_v10]), (0, _v2.useImperativeHandle)(_v6, () => ({
        submitForm: _v0 => {
          _v50.handleSubmit(_v0);
        }
      }));
      let _v51 = (0, _v63.useField)(_v50, "email"),
        _v52 = (0, _v63.useField)(_v50, "role"),
        _v53 = (0, _v63.useField)(_v50, "customMessage"),
        _v54 = (0, _v63.useField)(_v50, "region"),
        _v55 = (0, _v63.useField)(_v50, "permissionPolicies"),
        _v56 = _v52.input.value !== _v15.TeamUserPermissionLevel.Viewer,
        _v57 = _v56 ? Math.max(0, _v10.length - _v46) : 0,
        _v58 = _v9.seatCapPaid > 0 && _v47 >= _v9.seatCapPaid,
        _v59 = _v12.teamSeats?.adminSeats ?? 0,
        _v60 = !1 === _v17 || _v59 > 0 && (_v12.teamMembersCount.admin >= _v59 || _v12.teamMembersCount.admin + _v10.length > _v59),
        _v61 = (0, _v2.useMemo)(() => _v10.length && _v56 && _v9.seatCapPaid && !(_v57 <= 0) && !_v31 && _v58 ? _v52.PaidSeatLimitReached(_v9.seatCapPaid) : null, [_v10.length, _v57, _v58, _v56, _v9.seatCapPaid, _v31]),
        _v62 = (0, _v2.useMemo)(() => !!_v10.length && _v15 && _v57 > 0 && _v56 && !_v61 && (!_v49 && !_v31 || _v49 && _v9.seatCount < _v44), [_v10.length, _v15, _v57, _v56, _v61, _v49, _v9.seatCount, _v31, _v44]),
        _v63 = (0, _v2.useMemo)(() => {
          if (_v14) return 10;
          if (_v15 && _v49) return Math.max(0, 10 - _v12.currentTeamSize);
          let _v0 = (({
            currentTeamSize: _v0,
            subtractOwner: _v1 = !0,
            totalTeamMembersCap: _v2
          }) => Math.max(0, _v2 - _v0 - !!_v1))({
            currentTeamSize: _v12.currentTeamSize,
            subtractOwner: _v15,
            totalTeamMembersCap: _v48
          });
          return _v0 >= 10 ? 10 : _v0;
        }, [_v14, _v49, _v12.currentTeamSize, _v48, _v15]),
        _v64 = Math.max(0, _v63 - _v10.length),
        _v65 = _v60 && _v52.input.value === _v15.TeamUserPermissionLevel.Admin;
      (0, _v2.useEffect)(() => {
        let _v0 = _v52.input.value,
          _v1 = !1,
          _v2 = !1;
        !_v14 && _v15 && _v12.currentTeamSize + 1 >= _v48 && (_v1 = !0), !_v14 && _v15 && _v12.currentTeamSize + 1 + _v46 >= _v48 && _v0 === _v15.TeamUserPermissionLevel.Viewer && (_v2 = !0), _v32(_v1), _v34(_v2);
      }, [_v12, _v15, _v52.input.value, _v46, _v10, _v14, _v48]), (0, _v2.useEffect)(() => {
        _v14 || _v15 || _v7 || _v26(_v12.currentTeamSize >= _v12.maxTeamSize);
      }, [_v10, _v12, _v7, _v14, _v15]), (0, _v2.useEffect)(() => {
        let _v0 = _v52.input.value;
        if (_v15 && _v49) {
          if ((_v12.seatDetails?.currentAssignedCount ?? 0) + _v10.length > _v44 + (_v12.seatDetails?.additionalPurchasedCount ?? 0) && _v0 !== _v15.TeamUserPermissionLevel.Viewer && _v12.teamMembersCount.viewer < 5) return void _v28(!0);
          if (_v12.teamMembersCount.viewer + _v10.length > 5 && _v0 === _v15.TeamUserPermissionLevel.Viewer && (_v12.seatDetails?.currentAssignedCount ?? 0) < _v44) return void _v24(!0);
          if ((_v12.seatDetails?.currentAssignedCount ?? 0) === _v44 && _v10.length + _v12.teamMembersCount.viewer > 5 || 5 === _v12.teamMembersCount.viewer && _v10.length + (_v12.seatDetails?.currentAssignedCount ?? 0) > _v44) return void _v30(!0);
          _v30(!1), _v28(!1), _v24(!1);
        }
      }, [_v15, _v49, _v9, _v52.input.value, _v12, _v10, _v44]);
      let _v66 = (0, _v2.useCallback)(() => {
        let _v0 = _v51.input.value?.trim() || "";
        if (_v64 <= 0) return void _v51.handlers.setValue(null);
        let _v1 = !0;
        _v0 && (_v64.EMAIL_REGEX.test(_v0) || (_v1 = !1, _v38([..._v37, {
          [_v0]: _v52.EmailNotAValidDomain(_v0)
        }])), _v10.some(_v0 => _v0 === _v0) && (_v1 = !1, _v38([..._v37, {
          [_v0]: _v52.EmailEnteredTwice(_v0)
        }])), _v12.owner.email === _v0 && (_v1 = !1, _v38([..._v37, {
          [_v0]: _v52.EmailAlreadyATeamMember(_v0)
        }])), _v36([..._v35, _v1]), _v18(_v0)), _v51.handlers.setValue(null);
      }, [_v18, _v51, _v37, _v35, _v10, _v64, _v12.owner.email]);
      (0, _v2.useEffect)(() => {
        if (_v35[_v35.length - 1] && _v13?.length && _v13.find(_v0 => _v10.includes(_v0.email))) {
          let _v0 = _v10[_v10.length - 1];
          _v36(_v35.map((_v0, _v1) => _v1 !== _v35.length - 1 && _v0)), _v38([..._v37, {
            [_v0]: _v52.EmailAlreadyATeamMember(_v0)
          }]);
        }
      }, [_v13]);
      let _v67 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v10[_v0];
        _v36(_v35.filter((_v0, _v1) => _v1 !== _v0)), _v38(_v37.filter(_v0 => !_v0[_v1])), _v20(_v0);
      }, [_v10, _v37, _v35]);
      (0, _v2.useEffect)(() => {
        let _v0 = _v51.input.value?.trim() || "",
          _v1 = [];
        _v0.includes(",") ? _v1 = _v0.split(",").filter(_v0 => !!_v0.trim()) : _v0.includes(";") ? _v1 = _v0.split(";").filter(_v0 => !!_v0.trim()) : _v0.includes(" ") && (_v1 = _v0.split(" ").filter(_v0 => !!_v0.trim())), _v1.length > _v64 && (_v1 = _v1.slice(0, _v64));
        let _v2 = [],
          _v3 = [],
          _v4 = [],
          _v5 = [];
        _v1.forEach(function (_v0) {
          let _v1 = !0;
          _v0 && (_v64.EMAIL_REGEX.test(_v0) || (_v1 = !1, _v2.push({
            [_v0]: _v52.EmailNotAValidDomain(_v0)
          })), (_v10.filter(_v0 => _v0 === _v0).length > 1 || _v5.some(_v0 => _v0 === _v0)) && (_v1 = !1, _v2.push({
            [_v0]: _v52.EmailEnteredTwice(_v0)
          })), _v12.owner.email === _v0 && (_v1 = !1, _v2.push({
            [_v0]: _v52.EmailAlreadyATeamMember(_v0)
          })), _v3.push(_v1), _v4.push(_v0)), _v5.push(_v0);
        }), _v1.length && (_v38([..._v37, ..._v2]), _v36([..._v35, ..._v3]), _v19([..._v4]), _v51.handlers.setValue(null));
      }, [_v51.input.value, _v51.handlers, _v37, _v35, _v10, _v64, _v38, _v36, _v12.owner.email, _v19]);
      let _v68 = (_v31 || _v33) && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner,
        _v69 = !!_v62 && !_v3 && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner && _v52.input.value !== _v15.TeamUserPermissionLevel.Viewer && !_v65,
        _v70 = !_v65 && (!!_v61 || !!_v62 && _v3) && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner,
        _v71 = _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner ? _v52.UpgradeTierForPaidMembers : _v52.ContactOwnerUpgradeTierForPaidMembers,
        _v72 = _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner;
      return (0, _v1.jsxs)(_v6.Box, {
        mt: "sm",
        children: [_v7 ? (0, _v1.jsx)(_v23.Skeleton, {
          display: "flex",
          marginBottom: (0, _v22.rem)(30),
          width: (0, _v22.rem)(390),
          height: (0, _v22.rem)(50)
        }) : (0, _v1.jsxs)(_v6.Box, {
          pb: "xs",
          children: [(0, _v1.jsx)(_v6.Box, {
            width: "100%",
            children: _v7 ? (0, _v1.jsx)(_v23.Skeleton, {
              display: "flex",
              mb: (0, _v22.rem)(10),
              width: (0, _v22.rem)(100),
              height: (0, _v22.rem)(18)
            }) : (0, _v1.jsxs)(_v17.Flex, {
              mb: "sm",
              children: [(0, _v1.jsxs)(_v113, {
                isOptional: !1,
                children: [" ", _v52.AddEmails, " "]
              }), (0, _v1.jsx)(_v113, {
                isOptional: !0,
                children: _v52.MaxOf(_v63)
              })]
            })
          }), (0, _v1.jsxs)(_v17.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v62, {
              onChange: _v51.handlers.setValue,
              onTabPress: _v66,
              values: _v10,
              invalidIndices: _v35,
              inputValue: _v51.input.value,
              handleTagClose: _v67,
              placeholder: _v52.TypeOrPasteEmails,
              disableInput: _v64 <= 0,
              hasError: !!_v37.length
            }), (0, _v1.jsx)(_v83, {
              onSelect: _v52.handlers.setValue,
              hasLiveSubscription: !!_v16,
              isAdminDisabled: _v60,
              onAdminLimitClick: _v4,
              region: _v54.input.value,
              onRegionChange: _v54.handlers.setValue,
              permissionPolicies: _v55.input.value,
              onPermissionPoliciesChange: _v55.handlers.setValue
            })]
          })]
        }), !!_v37.length && _v37.map(_v0 => (0, _v1.jsx)(_v55.Paragraph, {
          margin: "0",
          color: "status-destructive-primary",
          display: "block",
          size: "md",
          children: Object.values(_v0)?.[0]
        }, Object.keys(_v0)?.[0])), !_v7 && _v10.length >= _v63 && !_v43 && (0, _v1.jsx)(_v6.Box, {
          mb: "sm",
          children: (0, _v1.jsx)(_v98, {})
        }), !_v7 && _v65 && (0, _v1.jsx)(_v99, {}), (0, _v1.jsx)(_v6.Box, {
          width: "100%",
          mt: "md",
          children: _v7 ? (0, _v1.jsx)(_v23.Skeleton, {
            display: "flex",
            marginBottom: (0, _v22.rem)(20),
            width: (0, _v22.rem)(390),
            height: (0, _v22.rem)(100)
          }) : (0, _v1.jsx)(_v67, {
            onChange: _v53.handlers.setValue
          })
        }), (0, _v1.jsxs)(_v17.Flex, {
          flexDir: "column",
          gap: "sm",
          children: [_v23 && (0, _v1.jsx)(_v96, {}), !_v69 && _v27 && (0, _v1.jsx)(_v94, {}), _v29 && (0, _v1.jsx)(_v95, {}), _v25 && !_v14 && !_v43 && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Admin && (0, _v1.jsx)(_v100, {
            maxTeamSize: _v12.maxTeamSize
          }), _v25 && !_v14 && !_v43 && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v102, {
              maxTeamSize: _v12.maxTeamSize
            }), (0, _v1.jsx)(_v54.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })]
          }), _v25 && _v43 && (0, _v1.jsx)(_v101, {
            isOwner: _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner
          }), _v62 && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v91, {
              isScheduledDowngrade: _v2
            }), (0, _v1.jsx)(_v54.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })]
          }), null !== _v61 && null !== _v71 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v92, {
              title: _v61,
              description: _v71,
              isUpsell: _v72
            }), _v72 && (0, _v1.jsx)(_v54.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })]
          }), _v62 && _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Admin && (0, _v1.jsx)(_v88, {}), _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner && _v31 && (0, _v1.jsx)(_v93, {
            maxTeamSize: _v48
          }), _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Owner && _v33 && (0, _v1.jsx)(_v97, {
            maxTeamSize: _v48
          }), _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Admin && _v31 && (0, _v1.jsx)(_v89, {
            maxTeamSize: _v48
          }), _v12.untranslatedUserRole === _v15.TeamUserPermissionLevel.Admin && _v33 && (0, _v1.jsx)(_v90, {
            maxTeamSize: _v48
          })]
        }), (0, _v1.jsx)(_v5, {
          submitDisabled: _v31 || _v33 || _v62 || !!_v61 || _v10.length <= 0 || _v37.length > 0 || _v23 || _v27 || _v29 || _v25 || _v8 || !_v50.valid || _v65,
          isLoading: _v39,
          showPurchase: _v69,
          showUpgrade: _v70,
          showContact: _v68
        })]
      });
    }),
    _v113 = ({
      children: _v0,
      isOptional: _v1
    }) => (0, _v1.jsx)(_v55.Paragraph, {
      display: "flex",
      fontSize: (0, _v22.rem)(14),
      fontWeight: _v1 ? 400 : 700,
      mr: (0, _v22.rem)(4),
      color: _v1 ? "text-secondary" : "text-primary",
      children: _v0
    });
  var _v114 = _v0.i(0);
  let _v115 = _v0 => (0, _v1.jsx)(_v114.IconButton, {
      position: "absolute",
      top: (0, _v22.rem)(16),
      right: (0, _v22.rem)(24),
      icon: (0, _v1.jsx)(_v60.CloseX, {}),
      size: "sm",
      variant: "tertiary",
      ..._v0
    }),
    _v116 = _v0 => _v0?.trim().toLowerCase().replace(/^vimeo\s+/, "").replace(/\s+/g, "_");
  function _v117({
    onSubmitSuccess: _v0,
    closeModal: _v1,
    inviteFormRef: _v2
  }) {
    let {
        teamInfo: _v3,
        teamApiConfig: _v4,
        teamCapabilities: {
          canUsePaymentsService: _v5,
          hasPerSeatPricingModelTeamMember: _v6
        },
        membership: {
          status: _v7,
          currentUnassignedSeatCount: _v8,
          isFreeTrial: _v9,
          productId: _v10,
          seatCapPaid: _v11,
          seatCapTrial: _v12,
          seatCount: _v13,
          billingPeriod: _v14,
          tier: _v15,
          hasAutorenew: _v16,
          subscriptionId: _v17
        },
        newEmails: _v18,
        isMembershipInfoLoading: _v19,
        isTeamInfoLoading: _v20
      } = (0, _v2.useContext)(_v38),
      _v21 = (0, _v2.useContext)(_v16.ViewerContext),
      {
        fetchTeamInfo: _v22,
        updateMembershipInfo: _v23,
        updatePlanQuota: _v24
      } = (0, _v2.useContext)(_v39),
      [_v25, _v26] = (0, _v26.useGetUserSettingsBillingMembershipLazy)(),
      {
        data: _v27,
        isLoading: _v28
      } = (0, _v25.useGetMeSubscriptionScheduledOrder)(() => _v17 ? {
        select: ["productName"],
        where: {
          subscriptionId: _v17
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      [_v29, _v30] = (0, _v2.useState)(!1),
      [_v31, _v32] = (0, _v2.useState)(!1),
      [_v33, _v34] = (0, _v2.useState)(!1),
      [_v35, _v36] = (0, _v2.useState)(!1),
      _v37 = (0, _v2.useRef)(null),
      _v38 = (0, _v33.useGetSubscriptionPlansData)([_v15]),
      {
        trackOpenTeamInviteModal: _v39
      } = _v51(),
      _v40 = _v15 === _v34.Creator,
      _v41 = _v116(_v27?.productName),
      _v42 = _v116(_v15),
      _v43 = !!(_v16 && _v41 && _v42 && _v41 !== _v42),
      {
        isBlocked: _v44
      } = (0, _v28.useIsSeatChangeBlocked)({
        tier: _v15,
        hasScheduledDowngrade: _v43
      }),
      _v45 = _v28 || _v44,
      _v46 = _v111({
        hasPerSeatPricingModelTeamMember: _v6,
        teamInfo: _v3
      }),
      _v47 = _v9 && _v46 <= 10,
      _v48 = _v15 === _v34.Production,
      _v49 = _v48 ? "/enterprise/contact-us?mkc=team_seats_upgrade" : (0, _v29.buildUpgradePlanUrl)({
        paywallTrigger: "team_admin_limit_invite",
        paywallLocation: "teams_settings",
        paywallFeature: "team_admin_seats"
      });
    (0, _v2.useEffect)(() => {
      _v21?.user && _v6 && _v25({
        select: ["billingPeriod", "currency", "currentUnassignedSeatCount", "hasAutorenew", "isFreeTrial", "pricePerSeatForDisplay", "productId", "seatCapPaid", "seatCapTrial", "seatCount", "status", "subscriptionId", "tier"],
        where: {
          userId: _v4.ownerId
        }
      });
    }, [_v21?.user, _v6, _v3.seatDetails?.basePlanCount]);
    let {
      data: _v50,
      loading: _v51
    } = _v26;
    (0, _v2.useEffect)(() => {
      let _v0;
      !_v51 && _v6 && _v21?.user && _v50 && _v23({
        currency: (_v0 = {
          ..._v50
        }).currency,
        currentUnassignedSeatCount: _v0.currentUnassignedSeatCount,
        isFreeTrial: _v0?.isFreeTrial,
        seatCapPaid: _v0.seatCapPaid ?? 200,
        seatCapTrial: _v0.seatCapTrial ?? 6,
        pricePerSeatForDisplay: _v0.pricePerSeatForDisplay,
        seatCount: _v0.seatCount,
        billingPeriod: _v35[(0, _v80.default)(String(_v0.billingPeriod))],
        tier: _v34[(0, _v81.default)(String(_v0.tier).replaceAll("_", " ")).replaceAll(" ", "")],
        productId: _v0?.productId,
        status: _v0?.status,
        hasAutorenew: _v0?.hasAutorenew ?? !1,
        subscriptionId: _v0?.subscriptionId ?? ""
      });
    }, [_v26, _v51, _v6, _v21?.user]), (0, _v2.useEffect)(() => {
      _v21?.user && (async () => {
        await _v22();
      })();
    }, [_v21?.user]), (0, _v2.useEffect)(() => {
      if (_v38 && !_v19) {
        let {
          entitlements: _v0
        } = _v38[0].metadata;
        _v24(_v0);
      }
    }, [_v38, _v19]), (0, _v2.useEffect)(() => {
      _v20 || _v31 || !_v3.owner || (_v32(!0), _v39());
    }, [_v3.owner, _v20]);
    let _v52 = _v12 || _v3.seatDetails?.basePlanCount || 0,
      _v53 = _v3.maxTeamSize || _v13,
      _v54 = _v3.seatDetails?.currentUnassignedCount ?? _v8,
      _v55 = Math.max(0, (_v47 ? _v52 : _v11) - _v53);
    return (0, _v1.jsxs)(_v6.Box, {
      height: "100%",
      p: `${(0, _v22.rem)(27)} 0 ${(0, _v22.rem)(16)} 0`,
      borderRadius: "xl",
      sx: {
        h6: {
          fontWeight: "700",
          fontSize: (0, _v22.rem)(18)
        }
      },
      children: [(0, _v1.jsxs)(_v21.ModalHeader, {
        m: 0,
        py: 0,
        px: (0, _v22.rem)(21),
        children: [_v20 ? (0, _v1.jsx)(_v23.Skeleton, {
          display: "flex",
          mb: (0, _v22.rem)(10),
          width: (0, _v22.rem)(224),
          height: (0, _v22.rem)(18)
        }) : (0, _v1.jsx)(_v18.Header, {
          as: "h5",
          size: "sm",
          marginBottom: "13",
          letterSpacing: (0, _v22.rem)(.2),
          children: _v52.InvitePeopleToTeam
        }), (0, _v1.jsx)(_v115, {
          "data-id": "closeInviteModal",
          className: "invite-modal-close-button",
          onClick: () => {
            _v1();
          }
        })]
      }), _v29 && (0, _v1.jsx)(_v32.PurchaseSeatsNotice, {
        noticeType: _v30.NOTICE_TYPES.PURCHASE_SUCCESSFULL
      }), _v33 && !_v40 && !_v45 && (0, _v1.jsx)(_v31.PurchaseSeatsModal, {
        canUsePaymentsService: !!_v5,
        hasScreen: !1,
        isActive: _v33,
        isTrial: _v47,
        productId: String(_v10),
        userId: _v21?.user?.id ?? 0,
        ownerId: _v4.ownerId,
        minSeatsPurchase: Math.min(_v18.length - _v54, _v55),
        initSeatsPurchase: Math.min(_v18.length - _v54, _v55),
        maxSeatsPurchase: _v55,
        onPurchaseSuccess: () => {
          _v37?.current?.(), _v34(!1);
        },
        onPurchaseFailure: () => {},
        onClose: () => {
          _v34(!1);
        },
        triggeredFrom: _v30.PURCHASE_TRIGGERED_FROM.INVITE_MODAL,
        analyticsData: {
          teamInfo: _v3,
          folderId: null,
          clipId: null,
          priorSeats: 0,
          subscriptionType: `${_v15}, ${_v14}`,
          planType: _v7,
          planTier: _v15,
          isTrial: _v9
        }
      }), (0, _v1.jsx)(_v19.ModalBody, {
        py: 0,
        px: (0, _v22.rem)(21),
        m: 0,
        children: (0, _v1.jsx)(_v112, {
          onSubmitSuccess: _v0,
          onSubmitFailure: (_v0, _v1) => {
            _v0 === _v15.TeamUserPermissionLevel.Admin && 0 === _v1 && _v36(!0);
          },
          hasScheduledDowngrade: _v43,
          isSeatChangeBlocked: _v45,
          onAdminLimitClick: () => _v36(!0),
          ref: _v2,
          closeModal: _v1,
          actionButtons: ({
            submitDisabled: _v0,
            isLoading: _v1,
            showPurchase: _v2,
            showUpgrade: _v3,
            showContact: _v4
          }) => _v4 || _v2 || _v3 ? (0, _v1.jsx)(_v7.Button, {
            variant: "upsell",
            isLoading: _v1,
            disabled: _v1,
            width: "100%",
            height: (0, _v22.rem)(40),
            mt: (0, _v22.rem)(16),
            borderRadius: (0, _v22.rem)(8),
            onClick: _v0 => {
              _v3 ? window.open("/upgrade", "_blank") : _v4 ? window.open("/enterprise/contact-us?mkc=team_seats_upgrade", "_blank") : (_v37.current = () => {
                _v2?.current?.submitForm(_v0);
              }, _v34(!0));
            },
            children: _v3 ? _v52.Upgrade : _v4 ? _v52.ContactUs : _v47 ? _v52.AddSeats : _v52.PurchaseSeats
          }) : (0, _v1.jsx)(_v20.ModalFooter, {
            className: "invite-modal-footer",
            px: "0",
            pb: "0",
            children: (0, _v1.jsx)(_v17.Flex, {
              ml: "auto",
              mr: "0",
              children: _v20 ? (0, _v1.jsx)(_v23.Skeleton, {
                display: "flex",
                width: (0, _v22.rem)(200),
                height: (0, _v22.rem)(40)
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v7.Button, {
                  variant: "secondary",
                  onClick: _v1,
                  sx: {
                    "&:first-of-type": {
                      marginRight: (0, _v22.rem)(16)
                    }
                  },
                  children: _v52.Cancel
                }), (0, _v1.jsx)(_v7.Button, {
                  variant: "primary",
                  size: "md",
                  isLoading: _v1,
                  isDisabled: _v0,
                  onClick: _v0 => {
                    _v2?.current?.submitForm(_v0);
                  },
                  sx: {
                    "&:first-of-type": {
                      marginRight: (0, _v22.rem)(16)
                    }
                  },
                  children: _v52.Invite
                })]
              })
            })
          })
        })
      }), (0, _v1.jsx)(_v24.AdminLimitUpsellModal, {
        cancelLabel: _v52.Cancel,
        isOpen: _v35,
        message: _v52.AdminLimitReached,
        onClose: () => _v36(!1),
        paywallStyle: _v48 ? "enterprise_modal" : "default_modal",
        paywallTrigger: "team_admin_limit_invite",
        primaryButtonLabel: _v52.Upgrade,
        title: (0, _v27.translate)({
          singular: "Need more admin seats?",
          dictionary: {
            es: {
              singular: "¿Necesita más puestos de administrador?"
            },
            "de-DE": {
              singular: "Benötigen Sie mehr Admin-Plätze?"
            },
            "fr-FR": {
              singular: "Besoin de plus de sièges d’administrateur ?"
            },
            "ja-JP": {
              singular: "管理者枠がもっと必要ですか？"
            },
            "ko-KR": {
              singular: "관리자 좌석이 더 필요하신가요?"
            },
            "pt-BR": {
              singular: "Precisa de mais vagas para administradores?"
            },
            "zh-CN": {
              singular: "需要更多管理员席位?"
            }
          }
        }),
        upgradeUrl: _v49
      })]
    });
  }
  let _v118 = ({
      onSuccess: _v0 = async () => void 0,
      onClick: _v1,
      disabled: _v2 = !1,
      hideModalOverlay: _v3 = !1,
      children: _v4
    }) => {
      let _v5,
        [_v6, _v7] = (0, _v2.useState)(!1),
        [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = (0, _v2.useRef)(void 0),
        _v11 = (0, _v2.useContext)(_v16.ViewerContext),
        {
          updateTeamApiConfig: _v12,
          updateTeamCapabilities: _v13
        } = (0, _v2.useContext)(_v39),
        [_v14, _v15] = (0, _v2.useState)([]),
        _v16 = "invite-sent-toast",
        _v17 = {
          apiUrl: _v11?.apiUrl || "",
          jwt: _v11?.jwt || "",
          ownerUri: _v11?.teamUser && _v11.teamUser.plainTextPermissionLevel === _v15.TeamUserPermissionLevel.Admin ? `/users/${_v11?.teamUser?.ownerId}` : _v11?.user?.uri,
          ownerId: _v11?.teamUser && _v11.teamUser.plainTextPermissionLevel === _v15.TeamUserPermissionLevel.Admin ? _v11?.teamUser.ownerId : _v11?.user?.id ?? 0
        };
      (0, _v2.useEffect)(() => {
        _v11?.user && _v12(_v17);
      }, [_v11?.user]);
      let {
        capabilities: {
          canUsePaymentsService: _v18,
          hasContributorPlusEnabled: _v19,
          hasEnterprise: _v20,
          hasLiveSubscription: _v21,
          haveMoreAdminTeamMembers: _v22,
          hasPerSeatPricingModelTeamMember: _v23
        },
        loading: _v24
      } = (0, _v13.useCapability)(["canUsePaymentsService", "hasContributorPlusEnabled", "hasEnterprise", "hasLiveSubscription", "haveMoreAdminTeamMembers", "hasPerSeatPricingModelTeamMember"], _v17.ownerUri);
      (0, _v2.useEffect)(() => {
        _v13({
          canUsePaymentsService: _v18,
          hasContributorPlusEnabled: _v19,
          hasEnterprise: _v20,
          hasLiveSubscription: _v21,
          haveMoreAdminTeamMembers: _v22,
          hasPerSeatPricingModelTeamMember: _v23
        });
      }, [_v18, _v19, _v20, _v21, _v22, _v23, _v24]);
      let {
        data: _v25,
        isValidating: _v26
      } = (0, _v14.useGetUserProjects)({
        query: {
          excludePrivateToMeFolder: !0,
          perPage: 1,
          topLevelOnly: !0,
          permissionAction: "folder.view"
        },
        select: ["uri"],
        where: {
          userId: _v17.ownerId
        }
      }, {
        revalidateOnFocus: !1
      });
      (0, _v2.useEffect)(() => {
        !_v26 && _v25 && _v25?.total > 0 && _v7(!0);
      }, [_v25, _v26]);
      let [_v27, _v28, _v29] = function () {
          let {
              clearEmails: _v0
            } = (0, _v2.useContext)(_v39),
            [_v1, _v2] = (0, _v2.useState)(!1),
            _v3 = (0, _v2.useCallback)(() => {
              let _v0 = document.querySelector("body");
              _v0 && (_v0.style.overflow = "auto"), _v0(), _v2(!1);
            }, []);
          return [_v1, (0, _v2.useCallback)(() => {
            let _v0 = document.querySelector("body");
            _v0 && (_v0.style.overflow = "hidden"), _v2(!0);
          }, []), _v3];
        }(),
        _v30 = (_v5 = (0, _v2.useRef)(null), (0, _v2.useEffect)(() => {
          _v5.current = window.parent.document.querySelector(".iris_modal-btn--close");
        }), _v5),
        _v31 = (0, _v2.useCallback)(() => {
          _v29(), _v30.current?.click();
        }, [_v29, _v30]),
        _v32 = (0, _v2.useCallback)((_v0, _v1) => {
          _v0?.(_v0, _v1), _v31(), _v9(!0), setTimeout(() => _v9(!1), 0);
        }, [_v0, _v31]),
        _v33 = (0, _v2.useCallback)(() => (0, _v1.jsx)(_v1.Fragment, {
          children: _v14.length > 0 && _v6 ? (0, _v1.jsx)(_v5.AddToFoldersModalContent, {
            onClose: () => {
              _v15([]), _v0?.(), _v31();
            },
            ownerId: _v17.ownerId,
            teamUsers: _v14,
            onSuccess: () => {
              _v15([]), _v32();
            },
            actionButtonOverrides: {
              cancelButtonLabel: _v52.SkipForNow,
              bigPictureOverrides: {
                entryPoint: "invite_modal",
                page: "team_management_page",
                feature: "team_management",
                location: "invite_modal",
                cancelEventName: "click_skip_inviting_to_folders",
                teamUser: _v11?.teamUser
              }
            }
          }) : (0, _v1.jsx)(_v6.Box, {
            height: "100%",
            overflow: "auto",
            children: (0, _v1.jsx)(_v117, {
              closeModal: _v31,
              inviteFormRef: _v10,
              onSubmitSuccess: _v0 => {
                _v0.length && _v6 ? (_v9(!0), setTimeout(() => _v9(!1), 0), _v15(_v0)) : _v32();
              }
            })
          })
        }), [_v10, _v6, _v14]),
        _v34 = (0, _v11.useToast)(),
        _v35 = () => {
          _v1?.(), _v28(), _v15([]), _v4.GoogleTagManager.trackEvent("team_open_invite_modal");
        };
      return (0, _v2.useEffect)(() => {
        _v8 && !_v34.isActive(_v16) && _v34({
          id: _v16,
          title: _v52.InviteSent,
          status: "neutral"
        });
      }, [_v8, _v34]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v4 ? _v2.default.cloneElement(_v4, {
          onClick: _v35,
          isDisabled: _v2,
          "data-id": "inviteButton"
        }) : (0, _v1.jsx)(_v7.Button, {
          size: "sm",
          py: (0, _v3.rem)(4),
          "data-id": "inviteButton",
          isDisabled: _v2,
          onClick: _v35,
          leftIcon: (0, _v1.jsx)(_v12.PersonUserAdd, {
            boxSize: "2xs"
          }),
          height: (0, _v3.rem)(40),
          borderRadius: "md",
          variant: "primary",
          children: _v52.Invite
        }), (0, _v1.jsxs)(_v8.Modal, {
          isOpen: _v27,
          closeOnOverlayClick: !_v3,
          onClose: () => {
            _v14.length > 0 && (_v15([]), _v0?.()), _v31();
          },
          children: [!_v3 && (0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v9.ModalContent, {
            maxW: (0, _v3.rem)(500),
            borderRadius: "xl",
            children: _v33()
          })]
        })]
      });
    },
    _v119 = ({
      untranslatedUserRole: _v0
    }) => _v0 === _v15.TeamUserPermissionLevel.Owner || _v0 === _v15.TeamUserPermissionLevel.Admin,
    _v120 = {
      FetchTeamInfoInit: _v0 => ({
        ..._v0,
        isTeamInfoLoading: !0
      }),
      FetchTeamInfoComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload.viewer || !_v1.payload?.teamsInfo) throw Error("no payload");
        let _v2 = _v1.payload.viewer.teamUser?.ownerId,
          _v3 = _v1.payload.teamsInfo.data.filter(_v119),
          _v4 = _v3.find(({
            untranslatedUserRole: _v0
          }) => _v0 === _v15.TeamUserPermissionLevel.Owner),
          _v5 = _v3.filter(({
            untranslatedUserRole: _v0
          }) => _v0 === _v15.TeamUserPermissionLevel.Admin);
        if (_v2) {
          let _v0 = _v3.find(({
            owner: _v0
          }) => _v0.uri === `/users/${_v2}`);
          if (_v0) return {
            ..._v0,
            teamInfo: {
              ..._v0.teamInfo,
              ..._v0
            },
            invitesRemaining: _v0.teamCapabilities.hasPerSeatPricingModelTeamMember ? _v0.membership.currentUnassignedSeatCount : _v0.maxTeamSize - _v0.currentTeamSize,
            isTeamInfoLoading: !1
          };
        }
        return _v4 ? {
          ..._v0,
          teamInfo: {
            ..._v0.teamInfo,
            ..._v4
          },
          invitesRemaining: _v0.teamCapabilities.hasPerSeatPricingModelTeamMember ? _v0.membership.currentUnassignedSeatCount : _v4.maxTeamSize - _v4.currentTeamSize,
          isTeamInfoLoading: !1
        } : _v5.length > 0 ? {
          ..._v0,
          teamInfo: {
            ..._v0.teamInfo,
            ..._v5.shift()
          },
          isTeamInfoLoading: !1
        } : {
          ..._v0,
          teamInfo: {
            ..._v0.teamInfo,
            isSufficientRole: !1
          },
          isTeamInfoLoading: !1
        };
      },
      FetchTeamMemberInit: _v0 => ({
        ..._v0,
        isTeamMemberLoading: !0
      }),
      FetchTeamMemberComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.teamMember) throw Error("no payload");
        let {
          data: _v2
        } = _v1.payload.teamMember;
        return {
          ..._v0,
          teamMember: _v2,
          isTeamMemberLoading: !1
        };
      },
      UpdateTeamApiConfig: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.apiConfig) throw Error("no payload");
        return {
          ..._v0,
          teamApiConfig: {
            ..._v0.teamApiConfig,
            ..._v1.payload?.apiConfig
          }
        };
      },
      UpdateTeamCapabilities: (_v0, _v1) => ({
        ..._v0,
        teamCapabilities: {
          ..._v0.teamCapabilities,
          ..._v1.payload?.capabilities
        }
      }),
      UpdateMembershipInfo: (_v0, _v1) => {
        let _v2 = {
          ..._v0.membership,
          ..._v1.payload?.membershipInfo
        };
        return {
          ..._v0,
          membership: _v2,
          invitesRemaining: _v2.currentUnassignedSeatCount,
          isMembershipInfoLoading: !1
        };
      },
      UpdateEmails: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.newEmails) throw Error("no payload");
        return {
          ..._v0,
          newEmails: [..._v0.newEmails, ..._v1.payload.newEmails],
          invitesRemaining: _v0.invitesRemaining - _v1.payload.newEmails.length
        };
      },
      AddEmail: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.newEmail) throw Error("no payload");
        return {
          ..._v0,
          newEmails: [..._v0.newEmails, _v1.payload.newEmail],
          invitesRemaining: _v0.invitesRemaining - 1
        };
      },
      RemoveEmail: (_v0, _v1) => ({
        ..._v0,
        newEmails: _v0.newEmails.filter((_v0, _v1) => _v1 !== (_v1.payload?.index ?? -1)),
        invitesRemaining: _v0.invitesRemaining + 1
      }),
      UpdateInvitesRemaining: (_v0, _v1) => {
        let {
            teamInfo: _v2,
            membership: _v3
          } = _v0,
          _v4 = _v0.teamCapabilities.hasPerSeatPricingModelTeamMember ? _v2.seatDetails?.currentUnassignedCount ?? 0 : _v3.currentUnassignedSeatCount,
          _v5 = _v1.payload?.invitesLeft ?? _v4;
        return {
          ..._v0,
          invitesRemaining: _v5
        };
      },
      ClearEmails: _v0 => ({
        ..._v0,
        newEmails: [],
        isTeamInfoLoading: !0,
        isTeamMemberLoading: !0,
        isMembershipInfoLoading: !0
      }),
      UpdatePlanQuota: (_v0, _v1) => ({
        ..._v0,
        planQuota: _v1.payload
      })
    },
    _v121 = (_v0, _v1) => {
      let _v2 = _v120[_v1.type];
      return _v2 ? _v2(_v0, _v1) : _v0;
    },
    _v122 = ({
      children: _v0
    }) => {
      let _v1,
        _v2,
        _v3,
        _v4,
        _v5 = (0, _v2.useContext)(_v16.ViewerContext),
        [_v6, _v7] = (0, _v2.useReducer)(_v121, _v36()),
        _v8 = (_v1 = async () => {
          if (!_v5) throw Error("no viewer");
          _v7({
            type: "FetchTeamInfoInit",
            payload: !0
          });
          let _v0 = await _v108(_v5);
          _v7({
            type: "FetchTeamInfoComplete",
            payload: {
              viewer: _v5,
              teamsInfo: _v0
            }
          }), _v4();
        }, _v2 = async (_v0, _v1) => {
          if (!_v5) throw Error("no viewer");
          _v7({
            type: "UpdateEmails",
            payload: {
              newEmails: _v0
            }
          }), _v7({
            type: _v48,
            payload: !0
          }), Promise.all(_v0.map(_v0 => _v109(_v1 || _v5, _v6.teamInfo.owner.uri, _v0))).then(_v0 => {
            let _v1 = {
                total: 0,
                data: []
              },
              _v2 = [];
            _v0.map(_v0 => {
              _v0.data && (_v2 = [..._v2, ..._v0.data]);
            }), _v1.data = _v2, _v7({
              type: _v49,
              payload: {
                teamMember: _v1
              }
            });
          });
        }, _v3 = async (_v0, _v1) => {
          if (!_v5) throw Error("no viewer");
          _v6.isTeamInfoLoading || !_v0 || (_v7({
            type: "AddEmail",
            payload: {
              newEmail: _v0
            }
          }), _v7({
            type: _v48,
            payload: !0
          }), _v7({
            type: _v49,
            payload: {
              teamMember: await _v109(_v1 || _v5, _v6.teamInfo.owner.uri, _v0)
            }
          }));
        }, {
          fetchTeamInfo: _v1,
          updateTeamApiConfig: _v0 => {
            _v7({
              type: "UpdateTeamApiConfig",
              payload: {
                apiConfig: _v0
              }
            });
          },
          updateTeamCapabilities: _v0 => {
            _v7({
              type: "UpdateTeamCapabilities",
              payload: {
                capabilities: _v0
              }
            });
          },
          updateMembershipInfo: _v0 => {
            _v7({
              type: "UpdateMembershipInfo",
              payload: {
                membershipInfo: _v0
              }
            }), _v4();
          },
          updateEmails: _v2,
          updatePlanQuota: _v0 => {
            let {
              videoStorageQuotaCap: _v1,
              videoStoragePeriodicQuota: _v2
            } = _v0?.params;
            _v7({
              type: "UpdatePlanQuota",
              payload: {
                cap: _v1,
                periodic: _v2
              }
            });
          },
          addEmail: _v3,
          removeEmail: _v0 => {
            _v7({
              type: "RemoveEmail",
              payload: {
                index: _v0
              }
            });
          },
          updateInvitesRemaining: _v4 = _v0 => {
            _v7({
              type: "UpdateInvitesRemaining",
              payload: _v0 ? {
                invitesLeft: _v0
              } : {}
            });
          },
          clearEmails: () => {
            _v7({
              type: "ClearEmails",
              payload: {}
            });
          }
        });
      return (0, _v1.jsx)(_v39.Provider, {
        value: _v8,
        children: (0, _v1.jsx)(_v38.Provider, {
          value: _v6,
          children: _v0
        })
      });
    },
    _v123 = _v2.default.memo(({
      onSuccess: _v0,
      onClick: _v1,
      disabled: _v2 = !1,
      children: _v3,
      hideModalOverlay: _v4 = !1
    }) => (0, _v1.jsx)(_v122, {
      children: (0, _v1.jsx)(_v118, {
        onSuccess: _v0,
        onClick: _v1,
        disabled: _v2,
        hideModalOverlay: _v4,
        children: _v3
      })
    }));
  _v0.s(["default", 0, _v123], 0);
}