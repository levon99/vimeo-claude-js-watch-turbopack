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
    _v20 = _v0.i(0);
  let _v21 = "roleLevelPrivacy",
    _v22 = "watermarkingPresets";
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ({
    teamSetting: _v0,
    dataId: _v1,
    maybeOpenDrmModal: _v2,
    changeTeamSetting: _v3,
    value: _v4,
    disabled: _v5,
    schevronText: _v6,
    tooltip: _v7,
    name: _v8,
    description: _v9
  }) => {
    let _v10 = (0, _v8.useRouter)(),
      [_v11, _v12] = (0, _v3.useState)(!1),
      _v13 = () => {
        "prohibitMultipleReviewLinks" === _v0 && !1 === _v4 ? _v12(!0) : "enableDrm" === _v0 ? _v2?.() : _v3(_v0, !!_v4);
      },
      _v14 = (0, _v3.useMemo)(() => {
        switch (_v0) {
          case "reviewPagePreferences":
            return (0, _v1.jsx)(_v15.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => {
                _v10.push("/manage/team/settings/review-page-privacy");
              },
              children: _v20.T.Edit
            });
          case _v21:
            return (0, _v1.jsx)(_v17.IconButton, {
              "aria-label": _v8 ?? "",
              variant: "secondary",
              size: "sm",
              icon: (0, _v1.jsx)(_v18.ChevronRightSmall, {}),
              onClick: () => {
                _v10.push("/manage/team/settings/privacy-restrictions");
              }
            });
          case _v22:
            return (0, _v1.jsx)(_v15.Button, {
              variant: "secondary",
              size: "sm",
              onClick: _v2,
              children: _v20.T.ManageWatermarkPresets
            });
          default:
            return (0, _v1.jsx)(_v16.Tooltip, {
              label: _v7,
              isDisabled: !_v7,
              shouldWrapChildren: !0,
              placement: "top-end",
              maxWidth: (0, _v14.rem)(300),
              children: (0, _v1.jsx)(_v12.Switch, {
                onChange: _v13,
                isChecked: _v4,
                isDisabled: _v5
              })
            });
        }
      }, [_v3, _v5, _v2, _v8, _v10, _v0, _v7, _v4]);
    return (0, _v1.jsxs)(_v24.TeamSettingsPageOptionContainer, {
      "data-id": _v1,
      children: [(0, _v1.jsx)(_v10.Header, {
        as: "h6",
        variant: "heading-xs",
        marginBottom: "50",
        size: "xl",
        children: _v8
      }), (0, _v1.jsx)(_v11.Paragraph, {
        maxWidth: "90%",
        color: "text-secondary",
        variant: "body-md",
        children: _v9
      }), _v6 && (0, _v1.jsxs)(_v4.Flex, {
        alignItems: "center",
        gap: "50",
        marginTop: "50",
        children: [(0, _v1.jsx)(_v19.SettingsGear, {
          boxSize: (0, _v14.rem)(16)
        }), (0, _v1.jsx)(_v13.Text, {
          variant: "body-md",
          children: _v6
        })]
      }), (0, _v1.jsx)(_v9.Box, {
        "data-id": _v0,
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        children: _v14
      }), (0, _v1.jsx)(_v23.ReviewLinkConfirmationModal, {
        isOpen: _v11,
        close: () => _v12(!1),
        onConfirm: () => {
          _v3(_v0, !!_v4), _v12(!1);
        }
      })]
    }, _v0);
  };
  var _v26 = _v0.i(0);
  let _v27 = ({
    path: _v0,
    ..._v1
  }) => {
    let [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = (0, _v8.useRouter)();
    return (0, _v1.jsx)(_v26.TeamSettingsPageOptionCustom, {
      ..._v1,
      setUpsellOpen: _v3,
      isUpsellOpen: _v2,
      children: (0, _v1.jsx)(_v17.IconButton, {
        "aria-label": _v1.title,
        variant: "secondary",
        size: "sm",
        icon: (0, _v1.jsx)(_v18.ChevronRightSmall, {}),
        onClick: () => {
          _v1.upsell && _v3(!0), !_v1.disabled && _v0 && _v4.push(_v0);
        }
      })
    });
  };
  var _v28 = _v0.i(0);
  let _v29 = ({
    ownerId: _v0,
    title: _v1,
    description: _v2,
    path: _v3,
    setting: _v4,
    settingValue: _v5,
    onUpdateTeamSettings: _v6,
    disabled: _v7,
    upsell: _v8,
    dataId: _v9,
    betaBadge: _v10
  }) => {
    let [_v11, _v12] = (0, _v3.useState)(null),
      {
        teamSettingsUpdateError: _v13,
        teamSettingsUpdateLoading: _v14,
        onUpdateSetting: _v15
      } = (0, _v28.useUpdateTeamSettings)({
        userId: _v0
      });
    return (0, _v3.useEffect)(() => {
      _v13 && _v11 && _v6 && (_v6(_v11, !_v5), _v12(null));
    }, [_v11, _v13, _v6, _v5]), _v3 ? (0, _v1.jsx)(_v27, {
      dataId: _v9,
      title: _v1,
      description: _v2,
      disabled: _v7,
      path: _v3,
      betaBadge: _v10,
      upsell: _v8
    }) : _v4 ? (0, _v1.jsx)(_v25, {
      teamSetting: _v4,
      changeTeamSetting: (_v0, _v1) => {
        if (_v6) {
          let _v0 = !_v1;
          _v12(_v0), _v6(_v0, _v0), _v15({
            [_v0]: _v0
          });
        }
      },
      value: _v5,
      disabled: _v14,
      name: _v1,
      description: _v2
    }) : null;
  };
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = () => ({
    privacySettings: (0, _v39.translate)({
      singular: "Privacy",
      dictionary: {
        es: {
          singular: "Privacidad"
        },
        "de-DE": {
          singular: "Datenschutz"
        },
        "fr-FR": {
          singular: "Confidentialité "
        },
        "ja-JP": {
          singular: "プライバシー"
        },
        "ko-KR": {
          singular: "프라이버시"
        },
        "pt-BR": {
          singular: "Privacidade"
        },
        "zh-CN": {
          singular: "隐私"
        }
      }
    }),
    settingControls: {
      applyDrpExtensionAfterMigration: {
        name: (0, _v39.translate)({
          singular: "Reset data retention schedules for migrated videos",
          dictionary: {
            es: {
              singular: "Restablecer los calendarios de retención de datos para los videos migrados"
            },
            "de-DE": {
              singular: "Setzen Sie die Datenaufbewahrungspläne für migrierte Videos zurück."
            },
            "fr-FR": {
              singular: "Réinitialiser les calendriers de conservation des données pour les vidéos migrées."
            },
            "ja-JP": {
              singular: "移行された動画のデータ保持スケジュールをリセット"
            },
            "ko-KR": {
              singular: "마이그레이션된 동영상의 데이터 보존 일정을 재설정하세요."
            },
            "pt-BR": {
              singular: "Redefina os cronogramas de retenção de dados para vídeos migrados"
            },
            "zh-CN": {
              singular: "重置已迁移视频的数据保留计划"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "After migrating videos from existing accounts into your Vimeo Enterprise account, reset their data retention schedules to begin on the date of their migration",
          dictionary: {
            es: {
              singular: "Después de migrar videos de cuentas existentes a su cuenta de Vimeo Enterprise, restablezca sus cronogramas de conservación de datos para que comiencen en la fecha de su migración."
            },
            "de-DE": {
              singular: "Nachdem Sie Videos von bestehenden Konten in Ihr Vimeo Enterprise-Konto migriert haben, setzen Sie die Datenaufbewahrungspläne zurück, damit sie am Tag der Migration beginnen."
            },
            "fr-FR": {
              singular: "Après avoir migré les vidéos de comptes existants vers votre compte Vimeo Entreprise, réinitialisez les périodes de conservation des données pour qu'elles commencent à la date de la migration"
            },
            "ja-JP": {
              singular: "既存のアカウントからVimeo Enterpriseアカウントに動画を移行した後、データ保持スケジュールを移行日から開始するようにリセットします。"
            },
            "ko-KR": {
              singular: "기존 계정의 동영상을 Vimeo Enterprise 계정으로 마이그레이션한 후, 데이터 보존 일정을 마이그레이션 날짜에서부터 시작하도록 재설정하세요."
            },
            "pt-BR": {
              singular: "Após migrar vídeos das contas existentes para a sua conta do Vimeo Enterprise, redefina os cronogramas de retenção de dados para que comecem na data da migração"
            },
            "zh-CN": {
              singular: "在将视频从现有账户迁移到您的 Vimeo Enterprise 账户后，重置其数据保留计划，使其从迁移之日开始"
            }
          }
        })
      },
      reviewPagePreferences: {
        name: (0, _v39.translate)({
          singular: "Review page privacy",
          dictionary: {
            es: {
              singular: "Privacidad de la página de revisión"
            },
            "de-DE": {
              singular: "Datenschutzeinstellungen der Seite überprüfen"
            },
            "fr-FR": {
              singular: "Confidentialité de la page d'avis"
            },
            "ja-JP": {
              singular: "レビューページのプライバシー"
            },
            "ko-KR": {
              singular: "리뷰 페이지 프라이버시"
            },
            "pt-BR": {
              singular: "Privacidade da página de revisão"
            },
            "zh-CN": {
              singular: "评论页面隐私"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Set a default privacy for your Review pages",
          dictionary: {
            es: {
              singular: "Establezca una privacidad predeterminada para sus páginas de revisión."
            },
            "de-DE": {
              singular: "Legen Sie einen Standarddatenschutz für Ihre Review-Seiten fest."
            },
            "fr-FR": {
              singular: "Définissez une confidentialité par défaut pour vos pages d'avis."
            },
            "ja-JP": {
              singular: "レビューページにデフォルトのプライバシーを設定します"
            },
            "ko-KR": {
              singular: "리뷰 페이지의 기본 프라이버시 설정을 지정합니다."
            },
            "pt-BR": {
              singular: "Predefina uma privacidade para suas páginas de revisão"
            },
            "zh-CN": {
              singular: "为您的评论页面设置默认隐私"
            }
          }
        })
      },
      prohibitMultipleReviewLinks: {
        name: (0, _v39.translate)({
          singular: "Prohibit review links",
          dictionary: {
            es: {
              singular: "Prohibir enlaces de revisión"
            },
            "de-DE": {
              singular: "Review-Links verbieten"
            },
            "fr-FR": {
              singular: "Interdire les liens de révision"
            },
            "ja-JP": {
              singular: "レビューリンクの作成を禁止"
            },
            "ko-KR": {
              singular: "리뷰 링크 금지"
            },
            "pt-BR": {
              singular: "Proibir links de revisão"
            },
            "zh-CN": {
              singular: "禁止评论链接"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Prevent review links from being created and accessed",
          dictionary: {
            es: {
              singular: "Impida la creación y acceso a enlaces de revisión."
            },
            "de-DE": {
              singular: "Verhindern Sie, dass Review-Links erstellt und darauf zugegriffen wird."
            },
            "fr-FR": {
              singular: "Empêcher la création et l'accès à des liens de révision"
            },
            "ja-JP": {
              singular: "レビューリンクの作成とアクセスを防止します"
            },
            "ko-KR": {
              singular: "리뷰 링크가 생성되거나 액세스되지 않도록 방지합니다."
            },
            "pt-BR": {
              singular: "Impeça a criação e o acesso a links de revisão"
            },
            "zh-CN": {
              singular: "禁止创建和访问评论链接"
            }
          }
        })
      },
      [_v21]: {
        name: (0, _v39.translate)({
          singular: "Privacy restrictions by role",
          dictionary: {
            es: {
              singular: "Restricciones de privacidad por rol"
            },
            "de-DE": {
              singular: "Datenschutzeinschränkungen nach Rolle"
            },
            "fr-FR": {
              singular: "Restrictions de confidentialité par rôle"
            },
            "ja-JP": {
              singular: "役割別のプライバシー制限"
            },
            "ko-KR": {
              singular: "역할별 프라이버시 제한"
            },
            "pt-BR": {
              singular: "Restrições de privacidade por função"
            },
            "zh-CN": {
              singular: "按角色划分的隐私限制"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Decide which privacy settings team members can use based on their role",
          dictionary: {
            es: {
              singular: "Decida qué configuraciones de privacidad pueden usar los miembros del equipo según su rol."
            },
            "de-DE": {
              singular: "Entscheiden Sie, welche Datenschutzeinstellungen Teammitglieder je nach ihrer Rolle verwenden können."
            },
            "fr-FR": {
              singular: "Déterminez les paramètres de confidentialité que les collaborateurs peuvent utiliser en fonction de leur rôle"
            },
            "ja-JP": {
              singular: "役割に基づいてチームメンバーが使用できるプライバシー設定を決定します"
            },
            "ko-KR": {
              singular: "팀원이 역할에 따라 사용할 수 있는 프라이버시 설정을 정합니다."
            },
            "pt-BR": {
              singular: "Decida quais configurações de privacidade os integrantes da equipe podem usar com base na função"
            },
            "zh-CN": {
              singular: "根据团队成员的角色决定他们可以使用哪些隐私设置"
            }
          }
        })
      },
      [_v22]: {
        name: (0, _v39.translate)({
          singular: "Overlay Watermark Presets",
          dictionary: {
            es: {
              singular: "Configuraciones predeterminadas de superposición de marca de agua"
            },
            "de-DE": {
              singular: "Voreinstellungen für Overlay-Wasserzeichen"
            },
            "fr-FR": {
              singular: "Préréglages des superpositions de filigrane"
            },
            "ja-JP": {
              singular: "ウォーターマークプリセットのオーバーレイ"
            },
            "ko-KR": {
              singular: "오버레이 워터마크 사전 설정"
            },
            "pt-BR": {
              singular: "Predefinições de sobreposição de marca d'água"
            },
            "zh-CN": {
              singular: "视频叠加水印预设"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Create and manage watermark presets for your team videos",
          dictionary: {
            es: {
              singular: "Cree y gestione configuraciones predeterminadas de marcas de agua para los videos de su equipo."
            },
            "de-DE": {
              singular: "Erstellen und verwalten Sie die Voreinstellungen für Wasserzeichen für Ihre Team-Videos"
            },
            "fr-FR": {
              singular: "Créez et gérez des préréglages de filigrane pour les vidéos de votre équipe"
            },
            "ja-JP": {
              singular: "チームの動画用のウォーターマークのプリセットを作成・管理"
            },
            "ko-KR": {
              singular: "팀 동영상의 워터마크 사전 설정 생성 및 관리"
            },
            "pt-BR": {
              singular: "Crie e gerencie predefinições de marca d'água para os vídeos da sua equipe"
            },
            "zh-CN": {
              singular: "为您的团队视频创建和管理水印预设"
            }
          }
        })
      },
      disablePublicSearch: {
        name: (0, _v39.translate)({
          singular: "Prohibit public search",
          dictionary: {
            es: {
              singular: "Prohibir la búsqueda pública"
            },
            "de-DE": {
              singular: "Öffentliche Suche untersagen"
            },
            "fr-FR": {
              singular: "Interdire la recherche publique"
            },
            "ja-JP": {
              singular: "公開検索を禁止"
            },
            "ko-KR": {
              singular: "공개 검색 금지"
            },
            "pt-BR": {
              singular: "Proibir pesquisa pública"
            },
            "zh-CN": {
              singular: "禁止公开搜索"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Prevent team members from searching public content created by the Vimeo community",
          dictionary: {
            es: {
              singular: "Impida que los miembros del equipo busquen contenido público creado por la comunidad de Vimeo."
            },
            "de-DE": {
              singular: "Verhindere, dass Teammitglieder öffentliche Inhalte durchsuchen, die von der Vimeo-Community erstellt wurden."
            },
            "fr-FR": {
              singular: "Empêcher les collaborateurs de rechercher du contenu public créé par la communauté Vimeo."
            },
            "ja-JP": {
              singular: "Vimeoコミュニティによって作成された公開コンテンツをチームメンバーが検索できないようにします"
            },
            "ko-KR": {
              singular: "팀원이 Vimeo 커뮤니티에서 만든 공개 콘텐츠를 검색하지 못하도록 합니다."
            },
            "pt-BR": {
              singular: "Impeça que integrantes da equipe pesquisem conteúdo público criado pela comunidade do Vimeo"
            },
            "zh-CN": {
              singular: "防止团队成员搜索由 Vimeo 社区创建的公开内容"
            }
          }
        })
      },
      disableAccountEditing: {
        name: (0, _v39.translate)({
          singular: "Limit account editing",
          dictionary: {
            es: {
              singular: "Limitar la edición de la cuenta"
            },
            "de-DE": {
              singular: "Kontobearbeitung einschränken"
            },
            "fr-FR": {
              singular: "Limiter la modification des comptes"
            },
            "ja-JP": {
              singular: "アカウント編集を制限"
            },
            "ko-KR": {
              singular: "계정 편집 제한"
            },
            "pt-BR": {
              singular: "Limitar a edição da conta"
            },
            "zh-CN": {
              singular: "限制账户编辑"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Prevent team members from changing the name and email address associated with their account",
          dictionary: {
            es: {
              singular: "Impida que los miembros del equipo cambien el nombre y la dirección de correo electrónico asociada con su cuenta."
            },
            "de-DE": {
              singular: "Verhindere, dass Teammitglieder den mit ihrem Konto verbundenen Namen und die E-Mail-Adresse ändern."
            },
            "fr-FR": {
              singular: "Empêcher les collaborateurs de modifier le nom ou l'adresse e-mail associé à leur compte."
            },
            "ja-JP": {
              singular: "チームメンバーが自分のアカウントに関連付けられている名前やEメールアドレスを変更できないようにします"
            },
            "ko-KR": {
              singular: "팀원이 자신의 계정과 연결된 이름과 이메일 주소를 변경하지 못하도록 합니다."
            },
            "pt-BR": {
              singular: "Impeça que integrantes da equipe alterem o nome e o endereço de e-mail associados à conta"
            },
            "zh-CN": {
              singular: "防止团队成员更改与其帐户关联的姓名和电子邮件地址"
            }
          }
        })
      },
      enableDrm: {
        name: (0, _v39.translate)({
          singular: "Digital rights management (DRM)",
          dictionary: {
            es: {
              singular: "Gestión de derechos digitales (DRM)"
            },
            "de-DE": {
              singular: "Digital Rights Management (DRM)"
            },
            "fr-FR": {
              singular: "Gestion des droits numériques (DRM)"
            },
            "ja-JP": {
              singular: "デジタル著作権管理 (DRM)"
            },
            "ko-KR": {
              singular: "디지털 저작권 관리(DRM)"
            },
            "pt-BR": {
              singular: "Gerenciamento de direitos digitais (DRM)"
            },
            "zh-CN": {
              singular: "数字版权管理（DRM）"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Protect videos on your account from unauthorized use or copying. {ARTICLE_LINK}Learn more{/ARTICLE_LINK}",
          replacements: {
            ARTICLE_LINK: _v0 => (0, _v1.jsx)(_v38.Link, {
              href: "https://vimeo.com/help/zendesk_sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/31622243101969",
              target: "_blank",
              rel: "noopener noreferrer",
              variant: "inline-secondary",
              fontSize: "inherit",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Proteja los videos de su cuenta de usos o copias no autorizados. {ARTICLE_LINK}Más información{/ARTICLE_LINK}"
            },
            "de-DE": {
              singular: "Schützen Sie Videos in Ihrem Konto vor unbefugter Verwendung oder Kopieren. {ARTICLE_LINK}Mehr erfahren{/ARTICLE_LINK}"
            },
            "fr-FR": {
              singular: "Protégez les vidéos de votre compte contre les utilisations ou les copies non autorisées. {ARTICLE_LINK}En savoir plus{/ARTICLE_LINK}"
            },
            "ja-JP": {
              singular: "アカウント上の動画を不正使用やコピーから保護します。{ARTICLE_LINK}詳細はこちら{/ARTICLE_LINK}"
            },
            "ko-KR": {
              singular: "계정의 동영상이 무단으로 사용되거나 복사되지 않도록 보호하세요. {ARTICLE_LINK}자세히 보기{/ARTICLE_LINK}"
            },
            "pt-BR": {
              singular: "Proteja os vídeos na sua conta contra uso ou cópia não autorizados. {ARTICLE_LINK}Saiba mais{/ARTICLE_LINK}"
            },
            "zh-CN": {
              singular: "保护帐户中的视频，防止未经授权的使用或复制。{ARTICLE_LINK}了解更多{/ARTICLE_LINK}"
            }
          }
        })
      },
      teamActivityAnalytics: {
        name: (0, _v39.translate)({
          singular: "Team activity analytics",
          dictionary: {
            es: {
              singular: "Análisis de la actividad del equipo"
            },
            "de-DE": {
              singular: "Teamaktivitäten – Analytik"
            },
            "fr-FR": {
              singular: "Analyse de l'activité de l'équipe"
            },
            "ja-JP": {
              singular: "チームアクティビティの分析"
            },
            "ko-KR": {
              singular: "팀 활동 분석"
            },
            "pt-BR": {
              singular: "Análise de atividades da equipe"
            },
            "zh-CN": {
              singular: "团队活动分析"
            }
          }
        }),
        description: (0, _v39.translate)({
          singular: "Admins can view analytics about team members' viewing activity in the Library",
          dictionary: {
            es: {
              singular: "Los administradores pueden ver los análisis sobre la actividad de visualización de los miembros del equipo en la biblioteca"
            },
            "de-DE": {
              singular: "Administratoren können Analytik über die Zuschaueraktivitäten von Teammitgliedern in der Bibliothek einsehen."
            },
            "fr-FR": {
              singular: "Les administrateurs peuvent consulter des statistiques sur l'activité de visionnage des collaborateurs dans la bibliothèque."
            },
            "ja-JP": {
              singular: "管理者は、ライブラリでのチームメンバーの視聴アクティビティに関する分析を表示できます"
            },
            "ko-KR": {
              singular: "관리자는 라이브러리에서 팀원의 시청 활동에 대한 분석을 볼 수 있습니다."
            },
            "pt-BR": {
              singular: "Os administradores podem ver análises sobre as atividades de visualização dos integrantes da equipe na Biblioteca"
            },
            "zh-CN": {
              singular: "管理员可以查看对团队成员在视频库中的观看活动的分析"
            }
          }
        })
      }
    },
    SomethingWentWrong: (0, _v39.translate)({
      singular: "Something went wrong",
      dictionary: {
        es: {
          singular: "Se ha producido un error"
        },
        "de-DE": {
          singular: "Hier ist etwas schief gelaufen"
        },
        "fr-FR": {
          singular: "Quelque chose a planté"
        },
        "ja-JP": {
          singular: "エラーが発生しました"
        },
        "ko-KR": {
          singular: "문제가 발생했습니다"
        },
        "pt-BR": {
          singular: "Alguma coisa deu errado"
        },
        "zh-CN": {
          singular: "出错了"
        }
      }
    }),
    TeamOnly: (0, _v39.translate)({
      singular: "Team only",
      dictionary: {
        es: {
          singular: "Solo equipos"
        },
        "de-DE": {
          singular: "Nur Team"
        },
        "fr-FR": {
          singular: "Équipe uniquement"
        },
        "ja-JP": {
          singular: "チームのみ"
        },
        "ko-KR": {
          singular: "팀만"
        },
        "pt-BR": {
          singular: "Somente para equipes"
        },
        "zh-CN": {
          singular: "仅限团队"
        }
      }
    }),
    Everyone: (0, _v39.translate)({
      singular: "Everyone",
      dictionary: {
        es: {
          singular: "Todos"
        },
        "de-DE": {
          singular: "Jeder"
        },
        "fr-FR": {
          singular: "Tout le monde"
        },
        "ja-JP": {
          singular: "全員"
        },
        "ko-KR": {
          singular: "모두가"
        },
        "pt-BR": {
          singular: "Todo mundo"
        },
        "zh-CN": {
          singular: "所有人"
        }
      }
    }),
    drmModalHeader: (0, _v39.translate)({
      singular: "Turn on digital rights management (DRM)",
      dictionary: {
        es: {
          singular: "Activar la gestión de derechos digitales (DRM)"
        },
        "de-DE": {
          singular: "Digital Rights Management (DRM) aktivieren"
        },
        "fr-FR": {
          singular: "Activer la gestion des droits numériques (DRM)"
        },
        "ja-JP": {
          singular: "デジタル著作権管理（DRM）をオンにする"
        },
        "ko-KR": {
          singular: "디지털 저작권 관리(DRM)를 켭니다."
        },
        "pt-BR": {
          singular: "Ative o Gerenciamento de Direitos Digitais (DRM)"
        },
        "zh-CN": {
          singular: "开启数字版权管理（DRM）"
        }
      }
    }),
    drmModalBody: (0, _v39.translate)({
      singular: "DRM will be applied to all videos in your team's account. New videos will have DRM on by default.",
      dictionary: {
        es: {
          singular: "La DRM se aplicará a todos los videos de la cuenta de su equipo. Los videos nuevos tendrán la DRM activada por defecto."
        },
        "de-DE": {
          singular: "DRM wird auf alle Videos im Konto deines Teams angewendet. Neue Videos werden standardmäßig mit DRM aktiviert sein."
        },
        "fr-FR": {
          singular: "La DRM sera appliquée à toutes les vidéos du compte de votre équipe. La DRM sera activée par défaut sur les nouvelles vidéos."
        },
        "ja-JP": {
          singular: "DRMはチームのアカウント内のすべての動画に適用されます。新しい動画にはデフォルトでDRMが有効になります。"
        },
        "ko-KR": {
          singular: "DRM은 팀 계정에 있는 모든 동영상에 적용됩니다. 새 동영상에는 기본적으로 DRM이 활성화되어 있습니다."
        },
        "pt-BR": {
          singular: "O DRM será aplicado a todos os vídeos na conta da sua equipe. Novos vídeos virão com o DRM ativado."
        },
        "zh-CN": {
          singular: "DRM 将应用于您团队账户中的所有视频。新视频将默认启用 DRM。"
        }
      }
    }),
    drmModalBulletHeader: (0, _v39.translate)({
      singular: "How DRM affects videos on this account:",
      dictionary: {
        es: {
          singular: "Cómo afecta la DRM a los videos de esta cuenta:"
        },
        "de-DE": {
          singular: "Auswirkungen von DRM auf Videos auf diesem Konto:"
        },
        "fr-FR": {
          singular: "Comment le DRM affecte les vidéos sur ce compte :"
        },
        "ja-JP": {
          singular: "DRMがこのアカウントの動画に与える影響："
        },
        "ko-KR": {
          singular: "DRM이 이 계정의 동영상에 미치는 영향:"
        },
        "pt-BR": {
          singular: "Como o DRM afeta os vídeos nesta conta:"
        },
        "zh-CN": {
          singular: "DRM 如何影响此账户上的视频："
        }
      }
    }),
    drmModalBullet1: (0, _v39.translate)({
      singular: "Prevents viewers from downloading videos",
      dictionary: {
        es: {
          singular: "Impide que los espectadores descarguen los videos."
        },
        "de-DE": {
          singular: "Verhindert, dass Zuschauende Videos herunterladen"
        },
        "fr-FR": {
          singular: "Empêche les spectateurs de télécharger des vidéos"
        },
        "ja-JP": {
          singular: "視聴者が動画をダウンロードできないようにする"
        },
        "ko-KR": {
          singular: "뷰어가 동영상을 다운로드하지 못하도록 방지"
        },
        "pt-BR": {
          singular: "Impede que os espectadores façam o download do vídeo."
        },
        "zh-CN": {
          singular: "阻止观众下载视频"
        }
      }
    }),
    drmModalBullet2: (0, _v39.translate)({
      singular: "Blocks playback in third-party players",
      dictionary: {
        es: {
          singular: "Bloquea la reproducción en reproductores externos."
        },
        "de-DE": {
          singular: "Blockiert die Wiedergabe in externen Playern"
        },
        "fr-FR": {
          singular: "Bloque la lecture dans les lecteurs tiers"
        },
        "ja-JP": {
          singular: "サードパーティプレーヤーでの再生をブロック"
        },
        "ko-KR": {
          singular: "타사 플레이어에서 재생 차단"
        },
        "pt-BR": {
          singular: "Bloqueia a reprodução em players de terceiros"
        },
        "zh-CN": {
          singular: "阻止第三方播放器中的回放"
        }
      }
    }),
    drmModalTurnOn: (0, _v39.translate)({
      singular: "Turn on",
      dictionary: {
        es: {
          singular: "Activar"
        },
        "de-DE": {
          singular: "Einschalten"
        },
        "fr-FR": {
          singular: "Activer"
        },
        "ja-JP": {
          singular: "オンにする"
        },
        "ko-KR": {
          singular: "켜기"
        },
        "pt-BR": {
          singular: "Ligar"
        },
        "zh-CN": {
          singular: "开启"
        }
      }
    }),
    drmModalCancel: (0, _v39.translate)({
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
    Manage: (0, _v39.translate)({
      singular: "Manage",
      dictionary: {
        es: {
          singular: "Administrar"
        },
        "de-DE": {
          singular: "Verwalten"
        },
        "fr-FR": {
          singular: "Gérer"
        },
        "ja-JP": {
          singular: "管理"
        },
        "ko-KR": {
          singular: "관리"
        },
        "pt-BR": {
          singular: "Gerenciar"
        },
        "zh-CN": {
          singular: "管理"
        }
      }
    }),
    PublicSearchMustBeProhibitedWhenYourAreUsing: _v0 => (0, _v39.translate)({
      singular: "Public search must be prohibited when you are using {DOMAIN}",
      replacements: {
        DOMAIN: _v0
      },
      dictionary: {
        es: {
          singular: "La búsqueda pública debe estar prohibida cuando usted usa {DOMAIN}"
        },
        "de-DE": {
          singular: "Die öffentliche Suche muss verboten werden, wenn Sie {DOMAIN} verwenden."
        },
        "fr-FR": {
          singular: "La recherche publique doit être interdite lorsque vous utilisez {DOMAIN}"
        },
        "ja-JP": {
          singular: "{DOMAIN}を使用する場合、一般公開検索を禁止する必要があります"
        },
        "ko-KR": {
          singular: "{DOMAIN}을(를) 사용할 때는 공개 검색이 금지됩니다."
        },
        "pt-BR": {
          singular: "A busca pública deve ser proibida quando você estiver usando {DOMAIN}."
        },
        "zh-CN": {
          singular: "当您使用 {DOMAIN} 时，必须禁止公开搜索"
        }
      }
    })
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = {
      title: _v36.T.Allowlist,
      description: _v36.T.AllowlistMenuDescription,
      path: "/manage/team/settings/allowlist"
    },
    _v44 = {
      title: _v36.T.SingleSignOn,
      description: _v36.T.SingleSignOnPageMenuDescription,
      path: "/manage/team/settings/sso"
    },
    _v45 = {
      modalConfig: {
        mkcCode: "109208"
      },
      tracking: {
        params: {
          feature: "sso_console",
          location: "team_settings",
          page: "/manage/team/settings",
          upsell_name: "sso_console_upsell"
        }
      }
    },
    _v46 = ({
      canViewSsoTeamSettings: _v0,
      hasEnterprise: _v1,
      hasSessionManagement: _v2,
      hasTeamAllowedIpsEnabled: _v3,
      ownerId: _v4
    }) => _v0 || !_v1 || _v2 ? (0, _v1.jsxs)(_v7.TeamSettingsPageCategory, {
      title: _v36.T.Authentication,
      children: [_v0 || !_v1 ? (0, _v1.jsx)(_v27, {
        title: _v44.title,
        description: _v44.description,
        path: _v44.path,
        disabled: !_v1,
        upsell: _v1 ? void 0 : _v45,
        dataId: `teamSettingsPageOption${_v44.title.replace(/\s/g, "")}`
      }, _v44.title) : null, _v3 && (0, _v1.jsx)(_v27, {
        title: _v43.title,
        description: _v43.description,
        path: _v43.path,
        dataId: `teamSettingsPageOption${_v43.title.replace(/\s/g, "")}`
      }, _v43.title), _v2 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v42.TeamSettingsSessionDuration, {
          ownerId: _v4,
          type: "team"
        }), (0, _v1.jsx)(_v41.TeamSettingsForceLogout, {
          ownerId: _v4,
          type: "team"
        })]
      })]
    }) : null;
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
    _v57 = _v0.i(0);
  let _v58 = ({
    disabled: _v0,
    userId: _v1,
    title: _v2,
    settings: _v3,
    onUpdateTeamSettings: _v4,
    onError: _v5,
    onUpdate: _v6,
    shouldScrollIntoView: _v7,
    itemsWithContainerDataId: _v8,
    hasEnterpriseCustomDomainEnabled: _v9
  }) => {
    let {
        teamSettingsUpdateError: _v10,
        teamSettingsUpdateLoading: _v11,
        onUpdateSetting: _v12
      } = (0, _v28.useUpdateTeamSettings)({
        userId: _v1
      }),
      _v13 = (0, _v3.useMemo)(() => _v40(), []),
      [_v14, _v15] = (0, _v3.useState)(null),
      [_v16, _v17] = (0, _v3.useState)(!1),
      [_v18, _v19] = (0, _v3.useState)(!1),
      [_v20, _v21] = (0, _v3.useState)(!1),
      [_v22, _v23] = (0, _v3.useState)(void 0),
      [_v24, _v25] = (0, _v3.useState)(void 0),
      _v26 = "reviewPagePreferences",
      _v27 = "enableDrm",
      {
        teamCapabilities: {
          hasMultipleReviewLinks: _v28,
          hasEnterprise: _v29,
          hasCanUseOverlayWatermarking: _v30
        }
      } = (0, _v3.useContext)(_v35.ManageTeamStateCtx),
      {
        presets: _v31,
        isLoading: _v32,
        deletePreset: _v33,
        refreshPresets: _v34
      } = (0, _v56.useWatermarkingPresets)({
        ownerId: _v1 || 0,
        isModalOpen: _v20,
        sortBy: _v22,
        sortOrder: _v24
      }),
      _v35 = (0, _v3.useCallback)(_v0 => {
        let _v1;
        _v0 && _v7 && (_v1 = {
          behavior: navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? "auto" : "smooth",
          inline: "start"
        }, _v0 && _v0 instanceof HTMLDivElement ? _v0.scrollIntoView(_v1) : _v0 && _v0.current && _v0.current.scrollIntoView(_v1));
      }, [_v7]);
    (0, _v3.useEffect)(() => {
      _v10 && _v14 && (_v4(_v14, !_v3[_v14]), _v15(null));
    }, [_v14, _v10, _v4, _v3]), (0, _v3.useEffect)(() => {
      _v10 && _v5();
    }, [_v10, _v5]), (0, _v3.useEffect)(() => {
      _v16 !== _v11 && (_v6(_v11), _v17(_v11));
    }, [_v11, _v6, _v17, _v16]);
    let _v36 = (_v0, _v1) => {
        let _v2 = !_v1;
        _v15(_v0), _v4(_v0, _v2), _v12({
          [_v0]: _v2
        });
      },
      _v37 = () => {
        _v3[_v27] ? _v36(_v27, _v3[_v27]) : _v19(!0);
      };
    return _v3 && Object.keys(_v3).length ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.TeamSettingsPageCategory, {
        ref: _v35,
        title: _v2,
        visible: _v3 && !!Object.keys(_v3).length,
        children: _v3 && Object.keys(_v3).map(_v0 => {
          let _v1 = "disablePublicSearch" === _v0 && _v9,
            _v2 = !!_v1 || _v3[_v0],
            _v3 = _v1 ? _v13.PublicSearchMustBeProhibitedWhenYourAreUsing("vimeo.work") : void 0;
          return (!_v28 || _v0 !== _v26) && (_v28 && _v29 || "prohibitMultipleReviewLinks" !== _v0) ? _v0 === _v22 ? _v30 ? (0, _v1.jsx)(_v25, {
            teamSetting: _v0,
            dataId: _v8?.includes(_v0) ? `${_v0}_container` : void 0,
            maybeOpenDrmModal: () => _v21(!0),
            changeTeamSetting: _v36,
            value: !0,
            disabled: !1,
            name: _v13.settingControls[_v0].name,
            description: _v13.settingControls[_v0].description
          }, _v0) : null : _v13.settingControls[_v0] && (0, _v1.jsx)(_v25, {
            teamSetting: _v0,
            dataId: _v8?.includes(_v0) ? `${_v0}_container` : void 0,
            maybeOpenDrmModal: _v37,
            changeTeamSetting: _v36,
            value: _v2,
            schevronText: _v26 === _v0 && (0, _v57.getPrivacyText)(_v3[_v0]?.privacy),
            disabled: !!_v1 || _v0,
            tooltip: _v3,
            name: _v13.settingControls[_v0].name,
            description: _v13.settingControls[_v0].description
          }, _v0) : null;
        })
      }), (0, _v1.jsxs)(_v49.Modal, {
        isOpen: _v18,
        onClose: () => _v19(!1),
        children: [(0, _v1.jsx)(_v50.ModalOverlay, {}), (0, _v1.jsxs)(_v51.ModalContent, {
          children: [(0, _v1.jsx)(_v52.ModalHeader, {
            children: _v13.drmModalHeader
          }), (0, _v1.jsxs)(_v53.ModalBody, {
            children: [(0, _v1.jsx)(_v11.Paragraph, {
              size: "md",
              children: _v13.drmModalBody
            }), (0, _v1.jsx)("br", {}), (0, _v1.jsx)(_v11.Paragraph, {
              size: "md",
              fontWeight: 700,
              children: _v13.drmModalBulletHeader
            }), (0, _v1.jsxs)(_v9.Box, {
              as: "ul",
              textStyle: "body-md",
              style: {
                listStyleType: "disc",
                listStylePosition: "inside",
                paddingInlineStart: "8px"
              },
              children: [(0, _v1.jsx)("li", {
                children: _v13.drmModalBullet1
              }), (0, _v1.jsx)("li", {
                children: _v13.drmModalBullet2
              })]
            })]
          }), (0, _v1.jsxs)(_v54.ModalFooter, {
            children: [(0, _v1.jsx)(_v15.Button, {
              onClick: () => _v19(!1),
              variant: "tertiary",
              children: _v13.drmModalCancel
            }), (0, _v1.jsx)(_v15.Button, {
              onClick: () => {
                _v36(_v27, !1), _v19(!1);
              },
              children: _v13.drmModalTurnOn
            })]
          })]
        })]
      }), (0, _v1.jsx)(_v55.PresetListModal, {
        isOpen: _v20,
        onClose: () => {
          _v21(!1), _v23(void 0), _v25(void 0);
        },
        presets: _v31,
        isLoading: _v32,
        ownerOrWorkspaceId: _v1,
        onDeletePreset: _v33,
        onRefresh: _v34,
        sortBy: _v22,
        sortOrder: _v24,
        onSortChange: (_v0, _v1) => {
          void 0 === _v1 ? (_v23(void 0), _v25(void 0)) : (_v23(_v0), _v25(_v1));
        }
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = ({
      isOwner: _v0
    }) => {
      let _v1,
        _v2,
        {
          sendOpenFederatedSearchManageEvent: _v3
        } = (_v1 = (0, _v68.useViewer)(), _v2 = (0, _v3.useMemo)(() => (0, _v65.buildTeamBpContextFromTeamUser)(_v1?.teamUser), [_v1?.teamUser]), {
          sendOpenFederatedSearchManageEvent: () => {
            let _v0 = (0, _v62.default)();
            (0, _v67.sendBpEventWithContexts)("vimeo.open_federated_search_manage", {
              ...(0, _v63.buildActionBpContext)({
                action_type: "click",
                feature: null
              }),
              ...(0, _v64.buildProductAnalyticsBpContext)({
                entity_type: null,
                element: "button",
                location: "workspace",
                feature: "settings",
                product: "collaboration",
                copy: "manage",
                device_type: _v0
              }),
              ...(0, _v66.buildWebBpContext)({
                page_name: "team_management_page",
                path: window.location.pathname
              }),
              ..._v2
            }, 2);
          }
        });
      return (0, _v1.jsx)(_v7.TeamSettingsPageCategory, {
        title: _v36.T.API,
        children: (0, _v1.jsx)(_v26.TeamSettingsPageOptionCustom, {
          title: _v36.T.FederatedSearch,
          description: _v36.T.MakeContentOnThisAccountSearchable,
          footer: _v0 ? null : (0, _v1.jsx)(_v59.Alert, {
            size: "sm",
            marginTop: "200",
            children: (0, _v1.jsx)(_v60.AlertDescription, {
              marginTop: "50",
              children: _v36.T.OnlyTheAccountOwnerCanSetUpFederatedSearch
            })
          }),
          children: (0, _v1.jsx)(_v15.Button, {
            variant: "secondary",
            size: "sm",
            leftIcon: (0, _v1.jsx)(_v61.PopOut, {}),
            isDisabled: !_v0,
            onClick: () => {
              _v0 && (_v3(), window.open("https://developer.vimeo.com/apps", "_blank"));
            },
            children: _v36.T.ManageFederatedSearchLabel
          })
        })
      });
    },
    _v70 = ({
      userId: _v0,
      hasEnterprise: _v1,
      isOwner: _v2,
      updateTeamSettings: _v3,
      isTeamInfoLoading: _v4,
      teamSettingsLoading: _v5,
      teamSettingsError: _v6,
      privacySettings: _v7,
      privacyItemsWithContainerDataId: _v8,
      hasEnterpriseCustomDomainEnabled: _v9
    }) => {
      let [_v10, _v11] = (0, _v3.useState)(!1),
        _v12 = function () {
          let [_v0, _v1] = (0, _v3.useState)(null),
            {
              asPath: _v2
            } = (0, _v8.useRouter)();
          return (0, _v3.useEffect)(() => {
            let _v0 = _v2.split("#")[1];
            _v0 && _v1(_v0);
          }, [_v2]), _v0;
        }(),
        _v13 = (0, _v47.useToast)(),
        _v14 = (0, _v3.useMemo)(() => _v40(), []),
        _v15 = (0, _v3.useCallback)(() => {
          _v13({
            duration: _v30.NOTIFICATION_DURATION,
            title: (0, _v39.translate)({
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
          });
        }, [_v13]);
      return ((0, _v3.useEffect)(() => {
        _v6 && _v15();
      }, [_v15, _v6]), !_v0 || _v4 || _v5) ? (0, _v1.jsx)(_v48.Spinner, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v58, {
          disabled: _v10,
          settings: _v7,
          userId: _v0,
          title: _v14.privacySettings,
          onUpdateTeamSettings: _v3,
          onError: _v15,
          onUpdate: _v0 => _v11(_v0),
          shouldScrollIntoView: "privacy-settings" === _v12,
          itemsWithContainerDataId: _v8,
          hasEnterpriseCustomDomainEnabled: _v9
        }), _v1 && (0, _v1.jsx)(_v69, {
          isOwner: _v2
        })]
      });
    },
    _v71 = ["prohibitMultipleReviewLinks", "reviewPagePreferences", "disablePublicSearch", "disableAccountEditing", "enableDrm", "teamActivityAnalytics"],
    _v72 = ["applyDrpExtensionAfterMigration"],
    _v73 = () => {
      let {
          teamCapabilities: {
            hasLegalHoldsActive: _v0,
            hasDataRetention: _v1,
            hasContentSpaceEnabled: _v2,
            canViewSsoTeamSettings: _v3,
            hasEnterprise: _v4,
            loading: _v5,
            hasSessionControl: _v6,
            hasDrmSetting: _v7,
            canEnableEnterpriseCustomDomain: _v8,
            canLmsExport: _v9,
            hasTeamAllowedIpsEnabled: _v10
          },
          teamInfo: {
            teamData: {
              ownerId: _v11
            }
          },
          isTeamInfoLoading: _v12
        } = (0, _v3.useContext)(_v35.ManageTeamStateCtx),
        _v13 = (0, _v3.useMemo)(() => _v40(), []),
        _v14 = (0, _v3.useContext)(_v37.ViewerContext),
        [_v15, _v16] = (0, _v3.useState)({}),
        {
          teamSettingsResult: _v17,
          teamSettingsLoading: _v18,
          teamSettingsError: _v19
        } = (0, _v33.useGetTeamSettings)({
          userId: _v11,
          settings: [..._v71, ..._v72]
        }),
        {
          privacySettings: _v20,
          drpSettings: _v21,
          privacyItemsWithContainerDataId: _v22
        } = (0, _v3.useMemo)(() => {
          let _v0 = [],
            _v1 = (0, _v2.default)(_v15 ?? {}, _v71);
          return _v1[_v21] = !0, _v1[_v22] = !0, _v4 && _v0.push(_v21), _v7 || delete _v1.enableDrm, {
            privacySettings: _v1,
            drpSettings: (0, _v2.default)(_v15 ?? {}, _v72),
            privacyItemsWithContainerDataId: _v0
          };
        }, [_v15, _v7, _v4]),
        _v23 = (0, _v3.useCallback)((_v0, _v1) => {
          _v16({
            ..._v15,
            [_v0]: _v1
          });
        }, [_v16, _v15]);
      (0, _v3.useEffect)(() => {
        _v17 && _v16(_v17);
      }, [_v17, _v16]);
      let _v24 = [{
        title: _v36.T.AuditLogs,
        description: _v36.T.AuditLogsMenuDescription,
        path: "/manage/team/settings/audit-logs",
        disabled: !_v4,
        upsell: _v4 ? void 0 : {
          modalConfig: {
            mkcCode: "109207"
          },
          tracking: {
            params: {
              feature: "audit_logs",
              location: "team_settings",
              page: "/manage/team/settings",
              upsell_name: "audit_logs_upsell"
            }
          }
        },
        ownerId: _v11
      }, ...(_v2 ? [{
        title: _v36.T.DeactivatedMemberFolders,
        description: _v36.T.ManageAndViewContentText,
        path: "/manage/team/my-videos/deactivated",
        ownerId: _v11
      }] : []), ...(_v1 ? [{
        title: _v36.T.DataRetention,
        description: _v36.T.ManagePolicies,
        path: "/manage/team/settings/data-retention",
        ownerId: _v11
      }, {
        title: _v36.T.ClipExtension,
        description: _v36.T.ClipExtensionDescription,
        path: "/manage/team/settings/clip-extension",
        ownerId: _v11
      }, {
        title: _v13.settingControls.applyDrpExtensionAfterMigration.name,
        description: _v13.settingControls.applyDrpExtensionAfterMigration.description,
        setting: "applyDrpExtensionAfterMigration",
        settingValue: _v21.applyDrpExtensionAfterMigration,
        ownerId: _v11
      }, {
        title: _v36.T.HistoryAndRecovery,
        description: _v36.T.ViewHistorical,
        path: "/manage/team/settings/history",
        ownerId: _v11
      }] : []), ...(_v0 ? [{
        title: _v36.T.LegalHold,
        description: _v36.T.ManageContentText,
        path: "/manage/team/settings/legal-hold",
        ownerId: _v11
      }] : [])];
      return _v12 || _v5 ? (0, _v1.jsx)(_v32.LoadSpinner, {}) : (0, _v1.jsxs)(_v4.Flex, {
        width: "100%",
        maxWidth: _v30.SETTING_PAGES_MAX_WIDTH,
        margin: "0 auto",
        flexDirection: "column",
        paddingBottom: "500",
        sx: {
          "& > div:last-child": {
            marginBottom: "800"
          }
        },
        children: [(0, _v1.jsx)(_v31.SettingsPageContentHeader, {
          title: _v36.T.Settings
        }), (0, _v1.jsx)(_v46, {
          canViewSsoTeamSettings: _v3,
          hasEnterprise: _v4,
          hasSessionManagement: _v6,
          ownerId: _v11,
          hasTeamAllowedIpsEnabled: _v10
        }), (0, _v1.jsx)(_v7.TeamSettingsPageCategory, {
          title: _v36.T.ActivityAndDataRetention,
          visible: !!_v24.length,
          children: _v24.map(_v0 => (0, _v1.jsx)(_v29, {
            ownerId: _v11,
            title: _v0.title,
            description: _v0.description,
            path: _v0.path,
            setting: _v0.setting,
            settingValue: _v0.settingValue,
            onUpdateTeamSettings: _v23,
            disabled: _v0.disabled,
            upsell: _v0.upsell,
            dataId: _v0.title ? `teamSettingsPageOption${_v0.title.replace(/\s/g, "")}` : void 0,
            betaBadge: _v0.betaBadge
          }, _v0.title))
        }), (0, _v1.jsx)(_v70, {
          userId: _v11,
          hasEnterprise: !!_v4,
          isOwner: _v11 === _v14?.user?.id,
          updateTeamSettings: _v23,
          isTeamInfoLoading: _v12,
          teamSettingsLoading: _v18,
          teamSettingsError: !!_v19,
          privacySettings: _v20,
          privacyItemsWithContainerDataId: _v22,
          hasEnterpriseCustomDomainEnabled: _v8
        }), _v9 && (0, _v1.jsx)(_v7.TeamSettingsPageCategory, {
          title: _v36.T.ELearning,
          description: _v36.T.ELearningDescription,
          children: (0, _v1.jsx)(_v6.LMSTeamSettings, {
            userId: _v11
          })
        })]
      });
    };
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0
  }), _v73.getLayout = _v34.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v73], 0);
}