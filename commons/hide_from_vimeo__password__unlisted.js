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
  let _v13 = ["hide_from_vimeo", "password", "unlisted"];
  function _v14(_v0 = "unlisted") {
    let _v1 = (0, _v12.useViewer)(),
      _v2 = (0, _v11.getTeamPrivacyTranslation)(_v10.DEFAULT_PRIVACY_OPTIONS, _v1?.teamUser?.teamName, _v1?.teamUser?.isWorkspace).filter(_v0 => _v10.DEFAULT_UPSELL_PRIVACIES.includes(_v0.privacy)).map(_v0 => ({
        key: _v0.privacy === _v10.DEFAULT_PRIVACY_VALUES.HIDE_FROM_VIMEO ? "hide_from_vimeo" : _v0.privacy,
        title: _v0.title,
        description: _v0.description ?? "",
        icon: _v10.VIDEO_PRIVACY_ICON_MAP[_v0.privacy].icon
      })),
      _v3 = "generic" === _v0 ? "unlisted" : _v0,
      _v4 = _v2.find(_v0 => _v0.key === _v3) ?? _v2[0],
      _v5 = _v2.filter(_v0 => _v0.key !== _v4?.key).sort((_v0, _v1) => _v13.indexOf(_v0.key) - _v13.indexOf(_v1.key));
    return {
      lockedOption: _v4,
      displayedOptions: _v4 ? [..._v5, _v4] : []
    };
  }
  _v0.s(["useUpsellPrivacyOptions", 0, _v14], 0);
  let _v15 = "/settings/videos/upload_defaults",
    _v16 = "/manage/workspace/basics",
    _v17 = "/manage/workspace/defaults",
    _v18 = ({
      isTeamOwned: _v0,
      isWorkspaceTeam: _v1,
      enableTeamDefaultsPage: _v2,
      enableWorkspaceDefaultsPage: _v3
    }) => _v0 && _v1 ? _v3 ? _v17 : _v16 : _v0 && _v2 ? "/manage/team/defaults" : _v15;
  _v0.s(["PERSONAL_DEFAULTS_URL", 0, _v15, "WORKSPACE_BASICS_URL", 0, _v16, "WORKSPACE_DEFAULTS_URL", 0, _v17, "getVideoDefaultsUrl", 0, _v18, "getVideoPresetsUrl", 0, ({
    isTeamOwned: _v0,
    isWorkspaceTeam: _v1,
    enableTeamPresetsPage: _v2,
    drawerView: _v3
  }) => _v0 && _v1 ? "/manage/workspace/presets" : _v0 && _v2 ? "/manage/team/presets" : "page" === _v3 ? "/settings/videos/page_presets" : "/settings/videos/embed_presets"], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ["preferences.videos.privacy.embed", "preferences.videos.privacy.view"];
  function _v22() {
    let _v0 = (0, _v12.useViewer)(),
      {
        enable_team_defaults_page: _v1,
        enable_workspace_defaults_page: _v2
      } = (0, _v20.useOrionSettingsFields)(["enable_team_defaults_page", "enable_workspace_defaults_page"]),
      _v3 = _v0?.teamUser?.ownerId,
      _v4 = _v0?.teamUser?.plainTextPermissionLevel,
      _v5 = !!_v0?.user?.organizationId,
      _v6 = !!_v0?.teamUser?.isWorkspace,
      _v7 = !!_v3 && _v3 !== _v0?.user?.id,
      _v8 = !_v7 || _v5 && ("Owner" === _v4 || "Admin" === _v4),
      _v9 = _v7 ? _v18({
        isTeamOwned: !0,
        isWorkspaceTeam: _v6,
        enableTeamDefaultsPage: _v1,
        enableWorkspaceDefaultsPage: _v2
      }) : _v15,
      _v10 = _v3 ?? _v0?.user?.id,
      {
        data: _v11
      } = (0, _v19.useGetUser)(() => _v8 && _v10 ? {
        where: {
          userId: _v10
        },
        select: _v21,
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      _v12 = _v11?.preferences?.videos?.privacy,
      _v13 = void 0 !== _v12 && ((_v12.view ?? "anybody") !== "anybody" || (_v12.embed ?? "private") !== "private");
    return {
      hasRestrictiveUploadDefaults: _v8 && _v13,
      uploadDefaultsUrl: _v9
    };
  }
  _v0.s(["useUploadDefaultsCta", 0, _v22], 0);
  var _v23 = _v0.i(0);
  _v0.s(["LateStagePcpPaywall", 0, function ({
    variant: _v0,
    privacyOption: _v1,
    tier: _v2,
    paywallTracking: _v3,
    isUserEligibleForFreeTrial: _v4 = !1,
    showOtherPlans: _v5 = !1,
    isExistingSubscriber: _v6 = !1,
    defaultPeriodicity: _v7 = "yearly",
    monthlyFreeTrial: _v8 = !1,
    onCtaClick: _v9,
    isLimitTriggered: _v10 = !0
  }) {
    let _v11 = (0, _v4.useGetSubscriptionPlansData)([_v2], void 0, !1),
      _v12 = _v11?.find(_v0 => _v0.tier === _v2) ?? _v11?.[0],
      _v13 = _v12?.name ?? (0, _v2.default)(`${_v2}`),
      _v14 = (0, _v5.hasFreeTrialPurchasePath)(_v12),
      {
        currentStorageLimit: _v15,
        currentRestrictedStorageLimit: _v16,
        hasRestrictedStorageLimit: _v17
      } = (0, _v9.useCurrentStorageLimit)(),
      _v18 = _v16 || _v15,
      {
        hasRestrictiveUploadDefaults: _v19,
        uploadDefaultsUrl: _v20
      } = _v22(),
      _v21 = "storage" === _v0 && _v17 && _v19,
      _v22 = (0, _v6.selectStorageQuota)(_v12?.metadata?.entitlements?.params ?? {}),
      _v23 = String(_v22.quantity ?? ""),
      {
        lockedOption: _v24,
        displayedOptions: _v25
      } = _v14(_v1 ?? "generic"),
      {
        title: _v26,
        subtitle: _v27
      } = function ({
        variant: _v0,
        privacyFeatureName: _v1,
        planName: _v2,
        currentLimit: _v3,
        hasRestrictedTargetLimit: _v4,
        isLimitTriggered: _v5
      }) {
        return "storage" === _v0 ? _v5 ? {
          title: (0, _v3.translate)({
            singular: "You've reached your limit",
            dictionary: {
              es: {
                singular: "Has alcanzado tu límite"
              },
              "de-DE": {
                singular: "Sie haben Ihr Limit erreicht"
              },
              "fr-FR": {
                singular: "Vous avez atteint votre limite"
              },
              "ja-JP": {
                singular: "ご利用上限に達しました"
              },
              "ko-KR": {
                singular: "한도에 도달했습니다"
              },
              "pt-BR": {
                singular: "Você atingiu seu limite"
              },
              "zh-CN": {
                singular: "您已达到上限"
              }
            }
          }),
          subtitle: _v4 ? (0, _v3.translate)({
            singular: "You've reached the limit for embeddable and non-public videos on your current plan. Upgrade to {PLAN_NAME} for more storage.",
            replacements: {
              PLAN_NAME: _v2
            },
            dictionary: {
              es: {
                singular: "Has alcanzado el límite de videos incrustables y no públicos en tu plan actual. Actualiza a {PLAN_NAME} para obtener más almacenamiento."
              },
              "de-DE": {
                singular: "Sie haben das Limit für einbettbare und nicht-öffentliche Videos in Ihrem aktuellen Plan erreicht. Wechseln Sie zu {PLAN_NAME}, um mehr Speicherplatz zu erhalten."
              },
              "fr-FR": {
                singular: "Vous avez atteint la limite pour les vidéos intégrables et non publiques sur votre offre actuelle. Passez à {PLAN_NAME} pour obtenir plus d'espace de stockage."
              },
              "ja-JP": {
                singular: "現在のプランでは、埋め込み可能な動画と非公開動画の上限に達しています。{PLAN_NAME}にアップグレードすると、ストレージを増やせます。"
              },
              "ko-KR": {
                singular: "현재 요금제에서 임베드 가능 및 비공개 동영상의 한도에 도달했습니다. 더 많은 저장 공간을 원하시면 {PLAN_NAME}(으)로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Você atingiu o limite de vídeos incorporáveis e não públicos no seu plano atual. Atualize para {PLAN_NAME} para obter mais espaço de armazenamento."
              },
              "zh-CN": {
                singular: "您在当前套餐中可嵌入和非公开视频已达到上限。升级到 {PLAN_NAME} 可获得更多存储空间。"
              }
            }
          }) : (0, _v3.translate)({
            singular: "You've reached the {STORAGE_LIMIT} storage limit for this plan. Upgrade to {PLAN_NAME} to get more space.",
            replacements: {
              STORAGE_LIMIT: _v3,
              PLAN_NAME: _v2
            },
            dictionary: {
              es: {
                singular: "Has alcanzado el límite de {STORAGE_LIMIT} de almacenamiento para este plan. Actualiza a {PLAN_NAME} para obtener más espacio."
              },
              "de-DE": {
                singular: "Sie haben das Speicherlimit von {STORAGE_LIMIT} für diesen Plan erreicht. Wechseln Sie zu {PLAN_NAME}, um mehr Speicherplatz zu erhalten."
              },
              "fr-FR": {
                singular: "Vous avez atteint la limite de stockage de {STORAGE_LIMIT} pour cette offre. Passez à {PLAN_NAME} pour obtenir plus d'espace."
              },
              "ja-JP": {
                singular: "このプランのストレージ上限である{STORAGE_LIMIT}に達しました。{PLAN_NAME}にアップグレードすると、容量を追加できます。"
              },
              "ko-KR": {
                singular: "이 요금제의 저장 용량 한도인 {STORAGE_LIMIT}에 도달했습니다. 더 많은 공간을 원하시면 {PLAN_NAME}(으)로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Você atingiu o limite de armazenamento de {STORAGE_LIMIT} para este plano. Atualize para {PLAN_NAME} para obter mais espaço de armazenamento."
              },
              "zh-CN": {
                singular: "您已达到此套餐的 {STORAGE_LIMIT} 存储上限。升级到 {PLAN_NAME} 可获得更多空间。"
              }
            }
          })
        } : {
          title: (0, _v3.translate)({
            singular: "Upgrade your plan",
            dictionary: {
              es: {
                singular: "Actualiza tu plan"
              },
              "de-DE": {
                singular: "Tarif upgraden"
              },
              "fr-FR": {
                singular: "Améliorez votre forfait"
              },
              "ja-JP": {
                singular: "プランをアップグレード"
              },
              "ko-KR": {
                singular: "요금제를 업그레이드하세요"
              },
              "pt-BR": {
                singular: "Atualize seu plano"
              },
              "zh-CN": {
                singular: "升级您的计划"
              }
            }
          }),
          subtitle: (0, _v3.translate)({
            singular: "Get more space with {PLAN_NAME}.",
            replacements: {
              PLAN_NAME: _v2
            },
            dictionary: {
              es: {
                singular: "Obtén más espacio con {PLAN_NAME}."
              },
              "de-DE": {
                singular: "Mehr Speicherplatz mit {PLAN_NAME}."
              },
              "fr-FR": {
                singular: "Obtenez plus d'espace avec {PLAN_NAME}."
              },
              "ja-JP": {
                singular: "{PLAN_NAME}で容量を増やせます。"
              },
              "ko-KR": {
                singular: "{PLAN_NAME}을(를) 이용하면 더 많은 저장 공간을 확보할 수 있습니다."
              },
              "pt-BR": {
                singular: "Obtenha mais espaço com {PLAN_NAME}."
              },
              "zh-CN": {
                singular: "通过 {PLAN_NAME} 获取更多空间。"
              }
            }
          })
        } : "privacy" === _v0 ? _v1 ? {
          title: (0, _v3.translate)({
            singular: "{FEATURE_NAME} is not available",
            replacements: {
              FEATURE_NAME: _v1
            },
            dictionary: {
              es: {
                singular: "{FEATURE_NAME} no está disponible"
              },
              "de-DE": {
                singular: "{FEATURE_NAME} ist nicht verfügbar"
              },
              "fr-FR": {
                singular: "{FEATURE_NAME} n’est pas disponible"
              },
              "ja-JP": {
                singular: "{FEATURE_NAME} は利用できません"
              },
              "ko-KR": {
                singular: "{FEATURE_NAME}을(를) 사용할 수 없습니다"
              },
              "pt-BR": {
                singular: "{FEATURE_NAME} não está disponível"
              },
              "zh-CN": {
                singular: "{FEATURE_NAME} 不可用"
              }
            }
          }),
          subtitle: (0, _v3.translate)({
            singular: "This privacy feature isn’t included in your current plan. Upgrade to {PLAN_NAME} to use {FEATURE_NAME}.",
            replacements: {
              PLAN_NAME: _v2,
              FEATURE_NAME: _v1
            },
            dictionary: {
              es: {
                singular: "Esta función de privacidad no está incluida en tu plan actual. Actualiza a {PLAN_NAME} para usar {FEATURE_NAME}."
              },
              "de-DE": {
                singular: "Diese Datenschutzfunktion ist in Ihrem aktuellen Plan nicht enthalten. Wechseln Sie zu {PLAN_NAME}, um {FEATURE_NAME} zu nutzen."
              },
              "fr-FR": {
                singular: "Cette fonctionnalité de confidentialité n’est pas incluse dans votre forfait actuel. Passez à {PLAN_NAME} pour utiliser {FEATURE_NAME}."
              },
              "ja-JP": {
                singular: "このプライバシー機能は現在のプランには含まれていません。{FEATURE_NAME} を利用するには {PLAN_NAME} にアップグレードしてください。"
              },
              "ko-KR": {
                singular: "이 개인정보 보호 기능은 현재 요금제에 포함되어 있지 않습니다. {FEATURE_NAME}을(를) 사용하려면 {PLAN_NAME}으로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Este recurso de privacidade não está incluído no seu plano atual. Faça upgrade para {PLAN_NAME} para usar {FEATURE_NAME}."
              },
              "zh-CN": {
                singular: "此隐私功能不包括在您当前的套餐中。升级到 {PLAN_NAME} 以使用 {FEATURE_NAME}。"
              }
            }
          })
        } : {
          title: (0, _v3.translate)({
            singular: "Your plan doesn’t support all privacy settings",
            dictionary: {
              es: {
                singular: "Su plan no admite todas las configuraciones de privacidad"
              },
              "de-DE": {
                singular: "Ihr Plan unterstützt nicht alle Datenschutzeinstellungen"
              },
              "fr-FR": {
                singular: "Votre forfait ne prend pas en charge tous les paramètres de confidentialité"
              },
              "ja-JP": {
                singular: "お使いのプランではすべてのプライバシー設定に対応していません"
              },
              "ko-KR": {
                singular: "현재 요금제에서는 모든 개인정보 보호 설정을 지원하지 않습니다"
              },
              "pt-BR": {
                singular: "Seu plano não oferece suporte a todas as configurações de privacidade"
              },
              "zh-CN": {
                singular: "您的计划不支持所有隐私设置"
              }
            }
          }),
          subtitle: (0, _v3.translate)({
            singular: "Some privacy settings aren’t included in your current plan. Upgrade to {PLAN_NAME} to use more privacy settings.",
            replacements: {
              PLAN_NAME: _v2
            },
            dictionary: {
              es: {
                singular: "Algunas opciones de privacidad no están incluidas en tu plan actual. Actualiza a {PLAN_NAME} para usar más opciones de privacidad."
              },
              "de-DE": {
                singular: "Einige Datenschutzeinstellungen sind in Ihrem aktuellen Tarif nicht enthalten. Wechseln Sie zu {PLAN_NAME}, um weitere Datenschutzeinstellungen nutzen zu können."
              },
              "fr-FR": {
                singular: "Certaines options de confidentialité ne sont pas incluses dans votre forfait actuel. Passez à {PLAN_NAME} pour utiliser davantage d'options de confidentialité."
              },
              "ja-JP": {
                singular: "現在のプランには一部のプライバシー設定が含まれていません。より多くのプライバシー設定を利用するには、{PLAN_NAME}へアップグレードしてください."
              },
              "ko-KR": {
                singular: "현재 요금제에는 일부 개인정보 설정이 포함되어 있지 않습니다. 더 많은 개인정보 설정을 사용하려면 {PLAN_NAME}으로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Algumas configurações de privacidade não estão incluídas no seu plano atual. Atualize para {PLAN_NAME} para usar mais configurações de privacidade."
              },
              "zh-CN": {
                singular: "某些隐私设置不包含在您当前的计划中。升级到 {PLAN_NAME} 以使用更多隐私设置。"
              }
            }
          })
        } : {
          title: void 0,
          subtitle: void 0
        };
      }({
        variant: _v0,
        privacyFeatureName: _v1 && "generic" !== _v1 ? _v24?.title : void 0,
        planName: _v13,
        currentLimit: _v18,
        hasRestrictedTargetLimit: "restricted" === _v22.scope,
        isLimitTriggered: _v10
      }),
      _v28 = "storage" === _v0 ? (0, _v1.jsx)(_v8.StorageLimitMeter, {
        currentLimit: _v18,
        targetLimit: _v23,
        planName: _v13,
        paddingY: "20px",
        marginBottom: {
          base: "24px",
          md: "48px"
        }
      }) : "privacy" === _v0 ? (0, _v1.jsx)(_v7.PrivacyOptionsPreview, {
        options: _v25,
        marginBottom: {
          base: "24px",
          md: "48px"
        }
      }) : void 0;
    return (0, _v1.jsx)(_v23.PlansComparisonPaywall, {
      tier: _v2,
      paywallTracking: _v3,
      defaultPeriodicity: _v7,
      monthlyFreeTrial: _v8,
      isFreeTrialEligible: _v4 && _v14,
      title: _v26,
      subtitle: _v27,
      visual: _v28,
      isModal: !0,
      hideTierBadge: "generic" !== _v0,
      isExistingSubscriber: _v6,
      showOtherPlans: _v5,
      uploadDefaultsUrl: _v21 ? _v20 : void 0,
      onCtaClick: _v9
    });
  }], 0);
}