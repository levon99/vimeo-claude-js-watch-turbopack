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
    _v18 = _v0.i(0);
  function _v19({
    icon: _v0,
    title: _v1,
    description: _v2,
    contentOpacity: _v3,
    rowOffset: _v4 = "0px"
  }) {
    return (0, _v1.jsxs)(_v4.Flex, {
      border: "1px solid",
      borderColor: "input-stroke",
      borderRadius: "12px",
      px: "16px",
      py: "8px",
      alignItems: "center",
      gap: "8px",
      ml: _v4,
      width: "calc(100% - 32px)",
      bg: "surface",
      mb: "-16px",
      zIndex: "1",
      children: [(0, _v1.jsx)(_v3.Box, {
        opacity: _v3,
        children: _v0
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        alignItems: "start",
        flex: "1",
        minWidth: "0",
        opacity: _v3,
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "heading-xs",
          color: "text-primary",
          width: "100%",
          children: _v1
        }), (0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          width: "100%",
          children: _v2
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        opacity: _v3,
        children: (0, _v1.jsx)(_v8.ChevronDownSmall, {})
      })]
    });
  }
  _v0.s(["PrivacyLimitPaywall", 0, function ({
    tier: _v0 = "standard",
    privacyOption: _v1 = "unlisted",
    paywallTracking: _v2,
    isUserEligibleForFreeTrial: _v3 = !1
  }) {
    let {
        settings: _v4
      } = (0, _v11.useOrionSettings)(),
      _v5 = (0, _v15.useViewer)(),
      _v6 = (0, _v14.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v7 = _v6?.find(_v0 => _v0.tier === _v0) ?? _v6?.[0],
      _v8 = !!_v7?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v9 = _v7?.name ?? (_v0 ? (0, _v2.default)(`${_v0}`) : ""),
      _v10 = (0, _v7.useColorModeValue)("https://i.vimeocdn.com/custom_asset/967fe8edf9f28375f1d3988ed28585d9?region=us", "https://i.vimeocdn.com/custom_asset/fd161e8907c7bd204bcdd8ca6379312a?region=us"),
      _v11 = _v12.DEFAULT_PRIVACY_OPTIONS.filter(_v0 => _v12.DEFAULT_UPSELL_PRIVACIES.includes(_v0.privacy)).map(_v0 => _v4.privacy_settings_new_copy ? (0, _v13.getNewPrivacyCopy)("xs", _v5?.teamUser?.teamName, _v5?.teamUser?.isWorkspace)(_v0) : _v0).map(_v0 => ({
        ..._v0,
        key: _v0.privacy === _v12.DEFAULT_PRIVACY_VALUES.HIDE_FROM_VIMEO ? "hide_from_vimeo" : _v0.privacy,
        icon: _v4.privacy_settings_new_copy ? _v0.icon : _v12.VIDEO_PRIVACY_ICON_MAP[_v0.privacy].icon
      })),
      _v12 = _v11.find(_v0 => _v0.key === _v1) ?? _v11[0],
      _v13 = [..._v11.filter(_v0 => _v0.key !== _v12.key), _v12];
    return (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      height: {
        base: "100%",
        md: "auto"
      },
      maxHeight: {
        base: "none",
        md: "calc(100vh - 120px)"
      },
      position: "relative",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        maxHeight: "100%",
        minHeight: "0",
        gap: "16px",
        flex: "1 1 auto",
        pt: {
          base: "24px",
          md: "0"
        },
        pb: "24px",
        mx: {
          base: "auto",
          md: "32px"
        },
        overflowY: "auto",
        children: [(0, _v1.jsx)(_v3.Box, {
          width: "192px",
          height: "140px",
          minHeight: "93px",
          flex: "1 1 140px",
          backgroundImage: `url(${_v10})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginY: "8px"
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          paddingX: "16px",
          children: [(0, _v1.jsx)(_v5.Text, {
            variant: {
              base: "heading-xl",
              md: "heading-2xl"
            },
            textAlign: "center",
            children: (0, _v10.translate)({
              singular: "{FEATURE_NAME} is not available",
              replacements: {
                FEATURE_NAME: _v12.title
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
            })
          }), (0, _v1.jsx)(_v5.Text, {
            variant: "heading-sm",
            color: "text-primary",
            textAlign: "center",
            paddingX: "16px",
            children: (0, _v10.translate)({
              singular: "This privacy feature isn’t included in your current plan. Upgrade to {PLAN_NAME} to use {FEATURE_NAME}.",
              replacements: {
                PLAN_NAME: _v9,
                FEATURE_NAME: _v12.title
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
          })]
        }), (0, _v1.jsxs)(_v6.VStack, {
          width: "100%",
          alignItems: "stretch",
          position: "relative",
          pt: "24px",
          px: "24px",
          gap: "0",
          children: [_v13.map((_v0, _v1) => (0, _v1.jsx)(_v19, {
            icon: _v0.icon,
            title: _v0.title,
            description: _v0.description ?? "",
            contentOpacity: 0 === _v1 ? .2 : 1 === _v1 ? .5 : void 0,
            rowOffset: 0 === _v1 ? "0px" : 1 === _v1 ? "16px" : "32px"
          }, _v0.key)), (0, _v1.jsx)(_v9.CircleExclamationFilled, {
            color: "upsell-primary",
            width: "40px",
            height: "40px",
            transform: "rotate(15deg)",
            position: "absolute",
            right: "9px",
            top: "-9px"
          })]
        })]
      }), (0, _v1.jsxs)(_v17.PaywallCTAsWrapper, {
        children: [(0, _v1.jsx)(_v18.PurchaseButton, {
          subscriptionTier: _v0,
          isTrial: _v8 && _v3,
          planName: _v9,
          paywallTracking: _v2
        }), (0, _v1.jsx)(_v16.OtherPlansButton, {
          paywallTracking: _v2
        })]
      })]
    });
  }]);
}