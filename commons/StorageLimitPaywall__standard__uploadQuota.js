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
  _v0.s(["StorageLimitPaywall", 0, function ({
    tier: _v0 = "standard",
    paywallTracking: _v1,
    isUserEligibleForFreeTrial: _v2 = !1
  }) {
    let {
        settings: _v3
      } = (0, _v10.useOrionSettings)(),
      _v4 = (0, _v11.useGetSubscriptionPlansData)([_v0], void 0, !1),
      {
        currentStorageLimit: _v5,
        currentRestrictedStorageLimit: _v6
      } = function () {
        let {
            data: _v0,
            ..._v1
          } = (0, _v13.useGetMe)({
            select: ["uploadQuota"]
          }),
          _v2 = _v0?.uploadQuota?.space?.max,
          _v3 = _v0?.uploadQuota?.space?.unit,
          _v4 = _v0?.uploadQuota?.restricted?.max,
          _v5 = _v0?.uploadQuota?.restricted?.unit,
          _v6 = "",
          _v7 = "";
        return null != _v2 && _v2 > 0 && ("video_count" === _v3 ? _v6 = `${_v2}` : "video_size" === _v3 && (_v6 = (0, _v14.formatBytes)(_v2, !1))), null != _v4 && _v4 > 0 && ("video_size" === _v5 || void 0 === _v5) && (_v7 = (0, _v14.formatBytes)(_v4, !1)), {
          currentStorageLimit: _v6,
          currentRestrictedStorageLimit: _v7,
          ..._v1
        };
      }(),
      _v7 = _v4?.find(_v0 => _v0.tier === _v0) ?? _v4?.[0],
      _v8 = _v7?.metadata?.entitlements?.params?.restrictedVideoStorageLimit,
      _v9 = null != _v8,
      _v10 = _v8 ?? _v7?.metadata?.entitlements?.params?.videoStoragePeriodicQuota ?? "",
      _v11 = _v6 || _v5,
      _v12 = _v7?.name ?? (_v0 ? (0, _v2.default)(`${_v0}`) : ""),
      _v13 = (0, _v7.useColorModeValue)("https://i.vimeocdn.com/custom_asset/c3e7bb4028bc2edb60f54310fadd1000", "https://i.vimeocdn.com/custom_asset/e9c789e68e6e64c62a6fe8d321438a92"),
      _v14 = !!_v7?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v15 = "subtitle_link" === _v3.limit_paywall_other_plans_location;
    return (0, _v1.jsxs)(_v5.Flex, {
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
      children: [(0, _v1.jsxs)(_v5.Flex, {
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
        children: [(0, _v1.jsx)(_v4.Box, {
          width: "192px",
          height: "140px",
          minHeight: "93px",
          flex: "1 1 140px",
          backgroundImage: `url(${_v13})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginY: "16px"
        }), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          paddingX: "32px",
          children: [(0, _v1.jsx)(_v6.Text, {
            variant: {
              base: "heading-xl",
              md: "heading-2xl"
            },
            textAlign: "center",
            flexShrink: 0,
            children: (0, _v9.translate)({
              singular: "You’ve reached your limit",
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
                  singular: "ご利用の上限に達しました"
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
            })
          }), (0, _v1.jsx)(_v6.Text, {
            variant: "heading-sm",
            color: "text-primary",
            textAlign: "center",
            flexShrink: 0,
            children: _v15 ? _v9 ? (0, _v9.translate)({
              singular: "You’ve reached the limit for embeddable and non-public videos on your current plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} for more storage.",
              replacements: {
                PLAN_NAME: _v12,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v12.LimitPaywallOtherPlansLink, {
                  paywallTracking: _v1
                })
              },
              dictionary: {
                es: {
                  singular: "Ha alcanzado el límite de vídeos embebibles y no públicos en su plan actual. Actualice a {PLAN_NAME} o {OTHER_PLANS_LINK} para obtener más almacenamiento."
                },
                "de-DE": {
                  singular: "Sie haben das Limit für einbettbare und nicht-öffentliche Videos in Ihrem aktuellen Plan erreicht. Aktualisieren Sie auf {PLAN_NAME} oder {OTHER_PLANS_LINK}, um mehr Speicherplatz zu erhalten."
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite de vidéos intégrables et non publiques pour votre forfait actuel. Passez à {PLAN_NAME} ou à {OTHER_PLANS_LINK} pour obtenir plus d'espace de stockage."
                },
                "ja-JP": {
                  singular: "現在のプランでは埋め込み可能動画および非公開動画の上限に達しています。{PLAN_NAME} または {OTHER_PLANS_LINK} にアップグレードすると、ストレージ容量を増やせます。"
                },
                "ko-KR": {
                  singular: "현재 요금제에서 임베드 가능한 동영상 및 비공개 동영상의 한도에 도달했습니다. 저장 용량을 늘리려면 {PLAN_NAME} 또는 {OTHER_PLANS_LINK}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de vídeos incorporáveis e não públicos no seu plano atual. Atualize para {PLAN_NAME} ou {OTHER_PLANS_LINK} para obter mais armazenamento."
                },
                "zh-CN": {
                  singular: "您已达到当前计划中可嵌入和非公开视频的上限。升级到 {PLAN_NAME} 或 {OTHER_PLANS_LINK} 可获得更多存储空间。"
                }
              }
            }) : (0, _v9.translate)({
              singular: "You’ve reached the {STORAGE_LIMIT} storage limit for this plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} for more storage.",
              replacements: {
                STORAGE_LIMIT: _v11,
                PLAN_NAME: _v12,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v12.LimitPaywallOtherPlansLink, {
                  paywallTracking: _v1
                })
              },
              dictionary: {
                es: {
                  singular: "Ha alcanzado el límite de almacenamiento de {STORAGE_LIMIT} para este plan. Actualice a {PLAN_NAME} o {OTHER_PLANS_LINK} para obtener más almacenamiento."
                },
                "de-DE": {
                  singular: "Sie haben das Speicherlimit von {STORAGE_LIMIT} für diesen Plan erreicht. Aktualisieren Sie auf {PLAN_NAME} oder {OTHER_PLANS_LINK}, um mehr Speicherplatz zu erhalten."
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite de stockage de {STORAGE_LIMIT} pour ce forfait. Passez à {PLAN_NAME} ou à {OTHER_PLANS_LINK} pour obtenir plus d'espace de stockage."
                },
                "ja-JP": {
                  singular: "このプランのストレージ上限である {STORAGE_LIMIT} に達しています。{PLAN_NAME} または {OTHER_PLANS_LINK} にアップグレードすると、より多くのストレージをご利用いただけます。"
                },
                "ko-KR": {
                  singular: "이 요금제의 저장 용량 한도 {STORAGE_LIMIT}에 도달했습니다. 저장 용량을 늘리려면 {PLAN_NAME} 또는 {OTHER_PLANS_LINK}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de armazenamento de {STORAGE_LIMIT} deste plano. Atualize para {PLAN_NAME} ou {OTHER_PLANS_LINK} para obter mais armazenamento."
                },
                "zh-CN": {
                  singular: "您已达到此计划的 {STORAGE_LIMIT} 存储上限。升级到 {PLAN_NAME} 或 {OTHER_PLANS_LINK} 可获得更多存储空间。"
                }
              }
            }) : _v9 ? (0, _v9.translate)({
              singular: "You’ve reached the limit for embeddable and non-public videos on your current plan. Upgrade to {PLAN_NAME} for more storage.",
              replacements: {
                PLAN_NAME: _v12
              },
              dictionary: {
                es: {
                  singular: "Ha alcanzado el límite de vídeos insertables y no públicos en su plan actual. Actualice a {PLAN_NAME} para obtener más almacenamiento."
                },
                "de-DE": {
                  singular: "Sie haben das Limit für einbettbare und nicht-öffentliche Videos in Ihrem aktuellen Tarif erreicht. Wechseln Sie zu {PLAN_NAME}, um mehr Speicherplatz zu erhalten."
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite de vidéos intégrables et non publiques sur votre forfait actuel. Passez à {PLAN_NAME} pour plus d’espace de stockage."
                },
                "ja-JP": {
                  singular: "現在のプランでは、埋め込み可能な動画および非公開動画の上限に達しています。より多くのストレージが必要な場合は、{PLAN_NAME}にアップグレードしてください。"
                },
                "ko-KR": {
                  singular: "현재 요금제에서 임베드 가능한 동영상 및 비공개 동영상의 한도에 도달했습니다. 저장 용량을 늘리려면 {PLAN_NAME}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de vídeos incorporáveis e não públicos no seu plano atual. Atualize para {PLAN_NAME} para obter mais armazenamento."
                },
                "zh-CN": {
                  singular: "您已达到当前方案中可嵌入和非公开视频的上限. 升级到 {PLAN_NAME} 以获得更多存储."
                }
              }
            }) : (0, _v9.translate)({
              singular: "You’ve reached the {STORAGE_LIMIT} storage limit for this plan. Upgrade to {PLAN_NAME} to use more space.",
              replacements: {
                STORAGE_LIMIT: _v11,
                PLAN_NAME: _v12
              },
              dictionary: {
                es: {
                  singular: "Has alcanzado el límite de almacenamiento de {STORAGE_LIMIT} para este plan. Actualiza a {PLAN_NAME} para usar más espacio."
                },
                "de-DE": {
                  singular: "Sie haben das Speicherlimit von {STORAGE_LIMIT} für diesen Plan erreicht. Wechseln Sie zu {PLAN_NAME}, um mehr Speicherplatz zu nutzen."
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite de stockage de {STORAGE_LIMIT} pour ce forfait. Passez à {PLAN_NAME} pour disposer de plus d’espace."
                },
                "ja-JP": {
                  singular: "このプランのストレージ上限である {STORAGE_LIMIT} に達しました。より多くの容量を使用するには {PLAN_NAME} にアップグレードしてください。"
                },
                "ko-KR": {
                  singular: "이 요금제의 저장 한도인 {STORAGE_LIMIT}에 도달했습니다. 더 많은 공간을 사용하려면 {PLAN_NAME}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de armazenamento de {STORAGE_LIMIT} para este plano. Faça upgrade para {PLAN_NAME} para usar mais espaço."
                },
                "zh-CN": {
                  singular: "您已达到此套餐的 {STORAGE_LIMIT} 存储限额。升级到 {PLAN_NAME} 以使用更多空间。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v4.Box, {
          border: "1px solid",
          borderColor: "upsell-primary",
          borderRadius: "20px",
          px: "40px",
          py: "32px",
          width: "100%",
          position: "relative",
          marginTop: "24px",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            mb: "16px",
            children: [(0, _v1.jsxs)(_v5.Flex, {
              alignItems: "center",
              gap: "4px",
              children: [(0, _v1.jsx)(_v6.Text, {
                variant: "heading-2xs",
                color: "text-tertiary",
                children: (0, _v9.translate)({
                  singular: "Your plan",
                  dictionary: {
                    es: {
                      singular: "Su plan"
                    },
                    "de-DE": {
                      singular: "Dein Abonnement"
                    },
                    "fr-FR": {
                      singular: "Votre abonnement"
                    },
                    "ja-JP": {
                      singular: "あなたのプラン"
                    },
                    "ko-KR": {
                      singular: "내 요금제"
                    },
                    "pt-BR": {
                      singular: "Seu plano"
                    },
                    "zh-CN": {
                      singular: "您的套餐"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v3.Badge, {
                variant: "default",
                size: "sm",
                children: _v11
              })]
            }), (0, _v1.jsxs)(_v5.Flex, {
              alignItems: "center",
              gap: "4px",
              children: [(0, _v1.jsx)(_v6.Text, {
                variant: "heading-2xs",
                color: "upsell-primary",
                children: _v12
              }), (0, _v1.jsx)(_v3.Badge, {
                variant: "upgrade",
                size: "sm",
                children: _v10
              })]
            })]
          }), (0, _v1.jsxs)(_v4.Box, {
            width: "100%",
            height: "4px",
            bg: "text-tertiary",
            borderRadius: "9999px",
            position: "relative",
            children: [(0, _v1.jsx)(_v4.Box, {
              width: "78%",
              ml: "auto",
              height: "4px",
              bg: "upsell-primary",
              borderRadius: "9999px"
            }), (0, _v1.jsx)(_v4.Box, {
              position: "absolute",
              left: "22%",
              top: "-6px",
              width: "0px",
              height: "16px",
              borderLeft: "2px dotted",
              borderColor: "text-tertiary"
            })]
          }), (0, _v1.jsx)(_v8.CircleExclamationFilled, {
            color: "upsell-primary",
            width: "40px",
            height: "40px",
            transform: "rotate(15deg)",
            position: "absolute",
            right: "9.01px",
            top: "-24px"
          })]
        })]
      }), (0, _v1.jsx)(_v12.LimitPaywallCTAs, {
        subscriptionTier: _v0,
        isTrial: _v14 && _v2,
        planName: _v12,
        paywallTracking: _v1,
        otherPlansLocation: _v3.limit_paywall_other_plans_location
      })]
    });
  }], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  function _v21({
    featureName: _v0,
    tooltip: _v1,
    currentValue: _v2,
    targetValue: _v3,
    isLastRow: _v4 = !1
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v5.Flex, {
        gap: "xs",
        alignItems: "center",
        pl: "md",
        pr: "sm",
        py: "sm",
        children: [(0, _v1.jsx)(_v6.Text, {
          variant: "heading-sm",
          letterSpacing: "-0.03em",
          flex: "1",
          children: _v0
        }), _v1 && (0, _v1.jsx)(_v20.Tooltip, {
          label: _v1,
          placement: "top",
          hasArrow: !0,
          maxW: "260px",
          children: (0, _v1.jsx)(_v4.Box, {
            flexShrink: 0,
            cursor: "pointer",
            color: "text-secondary",
            display: "inline-flex",
            children: (0, _v1.jsx)(_v22, {})
          })
        })]
      }), (0, _v1.jsx)(_v5.Flex, {
        alignItems: "center",
        justifyContent: "center",
        px: "md",
        py: "8px",
        pb: _v4 ? "md" : "8px",
        opacity: .7,
        borderLeftWidth: "2px",
        borderRightWidth: "2px",
        borderStyle: "solid",
        borderColor: "stroke",
        borderBottomLeftRadius: _v4 ? "2xl" : "0",
        borderBottomRightRadius: _v4 ? "2xl" : "0",
        borderBottomWidth: _v4 ? "2px" : "0",
        children: (0, _v1.jsx)(_v23, {
          value: _v2
        })
      }), (0, _v1.jsx)(_v5.Flex, {
        alignItems: "center",
        justifyContent: "center",
        px: "md",
        py: "8px",
        pb: _v4 ? "md" : "8px",
        bg: "background",
        borderBottomLeftRadius: _v4 ? "2xl" : "0",
        borderBottomRightRadius: _v4 ? "2xl" : "0",
        children: (0, _v1.jsx)(_v23, {
          value: _v3
        })
      })]
    });
  }
  function _v22() {
    return (0, _v1.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
      }), (0, _v1.jsx)("path", {
        d: "M11 11h2v6h-2zm1-2a1 1 0 0 1-1-1 1.46 1.46 0 0 1 0-.2.63.63 0 0 1 .06-.18.77.77 0 0 1 .09-.18 1.48 1.48 0 0 1 .12-.15.92.92 0 0 1 .33-.21 1 1 0 0 1 1.09.21A1.05 1.05 0 0 1 13 8a.84.84 0 0 1-.08.38 1 1 0 0 1-.21.33l-.15.12-.18.09-.18.08z"
      })]
    });
  }
  function _v23({
    value: _v0,
    size: _v1 = "md"
  }) {
    let _v2 = "sm" === _v1 ? 16 : 20;
    return "boolean" == typeof _v0 ? _v0 ? (0, _v1.jsx)(_v16.Checkmark, {
      width: _v2,
      height: _v2
    }) : (0, _v1.jsx)(_v17.CloseX, {
      width: _v2,
      height: _v2,
      color: "#9CA3AF",
      opacity: .6
    }) : (0, _v1.jsx)(_v6.Text, {
      fontSize: "sm" === _v1 ? "body-sm" : "body-lg",
      textAlign: "center",
      lineHeight: "1.2",
      children: _v0
    });
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  function _v26({
    value: _v0
  }) {
    return "boolean" == typeof _v0 ? _v0 ? (0, _v1.jsx)(_v16.Checkmark, {
      width: 16,
      height: 16
    }) : (0, _v1.jsx)(_v17.CloseX, {
      width: 16,
      height: 16,
      color: "#9CA3AF",
      opacity: .6
    }) : (0, _v1.jsx)(_v6.Text, {
      fontSize: "body-md",
      lineHeight: "1.2",
      children: _v0
    });
  }
  _v0.s(["TableComparisonPaywall", 0, function ({
    tier: _v0,
    currentTier: _v1,
    paywallTracking: _v2,
    isUserEligibleForFreeTrial: _v3 = !1
  }) {
    var _v4;
    let _v5,
      _v6 = (0, _v11.useGetSubscriptionPlansData)(["free", "starter", "standard", "advanced"], void 0, !1),
      _v7 = _v6?.find(_v0 => _v0.tier === _v1) ?? _v6?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased"),
      _v8 = _v6?.find(_v0 => _v0.tier === _v0) ?? _v6?.find(_v0 => "starter" === _v0.tier || "standard" === _v0.tier || "advanced" === _v0.tier),
      _v9 = !!_v8?.metadata?.interactions?.purchase?.uri?.freeTrial && _v3,
      _v10 = !!_v8,
      _v11 = _v8?.currency?.currencyCode ?? _v7?.currency?.currencyCode ?? "USD",
      _v12 = _v7?.tier === "free" ? (_v4 = _v11, _v5 = (0, _v9.getCurrentLocale)(), new Intl.NumberFormat(_v5, {
        style: "currency",
        currency: _v4,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(0)) : _v7?.metadata?.purchasedProduct?.displayPriceFormatted ?? _v7?.priceFormatted?.annualMonthly ?? "",
      _v13 = _v8?.priceFormatted?.annualMonthly ?? "",
      _v14 = _v8?.name ?? (0, _v2.default)(`${_v0}`),
      _v15 = _v7?.name ?? "",
      _v16 = (0, _v25.getComparisonFeatures)({
        currentPlan: _v7,
        targetPlan: _v8,
        currentTier: _v7?.tier,
        targetTier: _v0
      }),
      _v17 = () => {
        let _v0 = (0, _v18.buildCheckoutUrl)({
          ..._v2,
          tier: _v0,
          isTrial: _v9
        });
        window.location.assign(_v0);
      },
      _v18 = _v9 ? (0, _v9.translate)({
        singular: "Start free trial",
        dictionary: {
          es: {
            singular: "Iniciar prueba gratuita"
          },
          "de-DE": {
            singular: "Kostenloses Probeabo starten"
          },
          "fr-FR": {
            singular: "Commencez l'essai gratuit"
          },
          "ja-JP": {
            singular: "無料トライアルを始める"
          },
          "ko-KR": {
            singular: "무료 체험 시작"
          },
          "pt-BR": {
            singular: "Faça um teste grátis"
          },
          "zh-CN": {
            singular: "开始免费试用"
          }
        }
      }) : (0, _v9.translate)({
        singular: "Join Vimeo {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v14
        },
        dictionary: {
          es: {
            singular: "Únete a Vimeo {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Treten Sie Vimeo {PLAN_NAME} bei"
          },
          "fr-FR": {
            singular: "Rejoignez Vimeo {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "Vimeo {PLAN_NAME} に加入する"
          },
          "ko-KR": {
            singular: "Vimeo {PLAN_NAME}에 가입하기"
          },
          "pt-BR": {
            singular: "Assine o Vimeo {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "加入 Vimeo {PLAN_NAME}"
          }
        }
      });
    return (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      gap: "24px",
      pt: {
        base: "24px",
        md: "0"
      },
      pb: "24px",
      mx: "auto",
      children: [(0, _v1.jsx)(_v19.ComparisonPaywallHeader, {
        tierName: _v14
      }), (0, _v1.jsxs)(_v4.Box, {
        display: {
          base: "none",
          md: "grid"
        },
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "0 8px",
        width: "100%",
        children: [(0, _v1.jsx)(_v4.Box, {}), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: "md",
          alignItems: "start",
          justifyContent: "end",
          opacity: .7,
          pb: "md",
          pt: "2xl",
          px: "md",
          borderTopLeftRadius: "2xl",
          borderTopRightRadius: "2xl",
          borderTopWidth: "2px",
          borderLeftWidth: "2px",
          borderRightWidth: "2px",
          borderStyle: "solid",
          borderColor: "stroke",
          position: "relative",
          children: [(0, _v1.jsx)(_v4.Box, {
            position: "absolute",
            left: "14px",
            top: "11px",
            children: (0, _v1.jsx)(_v3.Badge, {
              variant: "secondary",
              size: "sm",
              children: (0, _v9.translate)({
                singular: "Your plan",
                dictionary: {
                  es: {
                    singular: "Su plan"
                  },
                  "de-DE": {
                    singular: "Dein Abonnement"
                  },
                  "fr-FR": {
                    singular: "Votre abonnement"
                  },
                  "ja-JP": {
                    singular: "あなたのプラン"
                  },
                  "ko-KR": {
                    singular: "내 요금제"
                  },
                  "pt-BR": {
                    singular: "Seu plano"
                  },
                  "zh-CN": {
                    singular: "您的套餐"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v6.Text, {
            variant: "heading-md",
            letterSpacing: "-0.04em",
            width: "100%",
            children: _v15
          }), (0, _v1.jsx)(_v5.Flex, {
            direction: "column",
            height: "72px",
            pb: "8px",
            width: "100%",
            children: (0, _v1.jsx)(_v6.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v12
            })
          }), (0, _v1.jsx)(_v4.Box, {
            height: "40px",
            opacity: 0,
            width: "100%",
            children: (0, _v1.jsx)(_v15.Button, {
              size: "md",
              variant: "tertiary",
              width: "100%",
              isDisabled: !0,
              children: (0, _v9.translate)({
                singular: "Sign up",
                dictionary: {
                  es: {
                    singular: "Regístrate"
                  },
                  "de-DE": {
                    singular: "Registrieren"
                  },
                  "fr-FR": {
                    singular: "Inscrivez-vous"
                  },
                  "ja-JP": {
                    singular: "サインアップ"
                  },
                  "ko-KR": {
                    singular: "가입하기"
                  },
                  "pt-BR": {
                    singular: "Inscreva-se"
                  },
                  "zh-CN": {
                    singular: "注册"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: "md",
          alignItems: "start",
          justifyContent: "end",
          pb: "md",
          pt: "2xl",
          px: "md",
          borderTopLeftRadius: "2xl",
          borderTopRightRadius: "2xl",
          bg: "background",
          position: "relative",
          children: [(0, _v1.jsx)(_v4.Box, {
            position: "absolute",
            left: "16px",
            top: "12px",
            children: (0, _v1.jsx)(_v3.Badge, {
              variant: "upgrade",
              size: "sm",
              children: (0, _v9.translate)({
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
              })
            })
          }), (0, _v1.jsx)(_v6.Text, {
            variant: "heading-md",
            letterSpacing: "-0.04em",
            width: "100%",
            children: _v14
          }), (0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            height: "72px",
            pb: "8px",
            lineHeight: "1.2",
            width: "100%",
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v13
            }), (0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              fontSize: "body-sm",
              color: "text-secondary",
              lineHeight: "1.2",
              children: [(0, _v1.jsx)(_v6.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v9.translate)({
                  singular: "per month",
                  dictionary: {
                    es: {
                      singular: "al mes"
                    },
                    "de-DE": {
                      singular: "pro Monat"
                    },
                    "fr-FR": {
                      singular: "par mois"
                    },
                    "ja-JP": {
                      singular: "月々"
                    },
                    "ko-KR": {
                      singular: "월"
                    },
                    "pt-BR": {
                      singular: "por mês"
                    },
                    "zh-CN": {
                      singular: "/月"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v6.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v9.translate)({
                  singular: "billed annually",
                  dictionary: {
                    es: {
                      singular: "facturados anualmente"
                    },
                    "de-DE": {
                      singular: "Jährliche Abrechnung"
                    },
                    "fr-FR": {
                      singular: "facturé annuellement"
                    },
                    "ja-JP": {
                      singular: "年払い"
                    },
                    "ko-KR": {
                      singular: "연간 청구"
                    },
                    "pt-BR": {
                      singular: "fatura enviada anualmente"
                    },
                    "zh-CN": {
                      singular: "按年计费"
                    }
                  }
                })
              })]
            })]
          }), (0, _v1.jsx)(_v15.Button, {
            size: "md",
            variant: "primary",
            width: "100%",
            onClick: _v17,
            isDisabled: !_v10,
            children: _v18
          })]
        }), _v16.map((_v0, _v1) => (0, _v1.jsx)(_v21, {
          featureName: _v0.name,
          tooltip: _v0.tooltip,
          currentValue: _v0.currentValue,
          targetValue: _v0.targetValue,
          isLastRow: _v1 === _v16.length - 1
        }, _v0.name))]
      }), (0, _v1.jsxs)(_v5.Flex, {
        display: {
          base: "flex",
          md: "none"
        },
        gap: "sm",
        width: "100%",
        alignItems: "stretch",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          flex: "1",
          direction: "column",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "stroke",
          borderRadius: "2xl",
          opacity: .7,
          overflow: "hidden",
          pb: "md",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: "xs",
            p: "md",
            position: "relative",
            children: [(0, _v1.jsx)(_v4.Box, {
              position: "absolute",
              left: "12px",
              top: "10px",
              children: (0, _v1.jsx)(_v3.Badge, {
                variant: "secondary",
                size: "sm",
                children: (0, _v9.translate)({
                  singular: "Your plan",
                  dictionary: {
                    es: {
                      singular: "Su plan"
                    },
                    "de-DE": {
                      singular: "Dein Abonnement"
                    },
                    "fr-FR": {
                      singular: "Votre abonnement"
                    },
                    "ja-JP": {
                      singular: "あなたのプラン"
                    },
                    "ko-KR": {
                      singular: "내 요금제"
                    },
                    "pt-BR": {
                      singular: "Seu plano"
                    },
                    "zh-CN": {
                      singular: "您的套餐"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v4.Box, {
              pt: "24px",
              children: (0, _v1.jsx)(_v6.Text, {
                variant: "heading-sm",
                children: _v15
              })
            }), (0, _v1.jsx)(_v6.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v12
            })]
          }), (0, _v1.jsx)(_v4.Box, {
            flex: "1"
          }), _v16.map(_v0 => (0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: "2px",
            px: "md",
            py: "sm",
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: _v0.name
            }), (0, _v1.jsx)(_v26, {
              value: _v0.currentValue
            })]
          }, _v0.name))]
        }), (0, _v1.jsxs)(_v5.Flex, {
          flex: "1",
          direction: "column",
          bg: "background",
          borderRadius: "2xl",
          overflow: "hidden",
          pb: "md",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: "xs",
            p: "md",
            position: "relative",
            children: [(0, _v1.jsx)(_v4.Box, {
              position: "absolute",
              left: "12px",
              top: "10px",
              children: (0, _v1.jsx)(_v3.Badge, {
                variant: "upgrade",
                size: "sm",
                children: (0, _v9.translate)({
                  singular: "Recommended",
                  dictionary: {
                    es: {
                      singular: "Recomendado"
                    },
                    "de-DE": {
                      singular: "Empfohlen"
                    },
                    "fr-FR": {
                      singular: "Recommandé"
                    },
                    "ja-JP": {
                      singular: "おすすめ"
                    },
                    "ko-KR": {
                      singular: "추천"
                    },
                    "pt-BR": {
                      singular: "Recomendados"
                    },
                    "zh-CN": {
                      singular: "推荐"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v4.Box, {
              pt: "24px",
              children: (0, _v1.jsx)(_v6.Text, {
                variant: "heading-sm",
                children: _v14
              })
            }), (0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              pb: "sm",
              children: [(0, _v1.jsx)(_v6.Text, {
                variant: "heading-lg",
                letterSpacing: "-0.04em",
                children: _v13
              }), (0, _v1.jsx)(_v6.Text, {
                fontSize: "12px",
                color: "text-secondary",
                children: (0, _v9.translate)({
                  singular: "per month, billed annually",
                  dictionary: {
                    es: {
                      singular: "al mes facturados anualmente"
                    },
                    "de-DE": {
                      singular: "pro Monat, mit jährlicher Abrechnung"
                    },
                    "fr-FR": {
                      singular: "par mois, facturé annuellement"
                    },
                    "ja-JP": {
                      singular: "/月、年払い"
                    },
                    "ko-KR": {
                      singular: "매월, 연간 결제"
                    },
                    "pt-BR": {
                      singular: "por mês, cobrança anual"
                    },
                    "zh-CN": {
                      singular: "每月，按年计费"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v15.Button, {
              size: "md",
              variant: "primary",
              width: "100%",
              whiteSpace: "normal",
              onClick: _v17,
              isDisabled: !_v10,
              children: _v18
            })]
          }), _v16.map(_v0 => (0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: "2px",
            px: "md",
            py: "sm",
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: _v0.name
            }), (0, _v1.jsx)(_v26, {
              value: _v0.targetValue
            })]
          }, _v0.name))]
        })]
      }), (0, _v1.jsx)(_v5.Flex, {
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
        children: (0, _v1.jsx)(_v24.OtherPlansButton, {
          paywallTracking: _v2
        })
      })]
    });
  }], 0);
  var _v27 = _v0.i(0);
  let _v28 = (0, _v27.createContext)({
    params: {
      upsell_name: "",
      page: "",
      feature: "",
      location: "",
      integration: ""
    },
    device_type: null,
    paywallTracking: {
      paywallTrigger: "",
      paywallLocation: "",
      paywallType: "popup",
      paywallFeature: ""
    }
  });
  _v0.s(["default", 0, _v28], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = 41,
    _v34 = (_v0, _v1 = _v33) => _v29.BigPictureClient.sendEvent(new _v29.Event("vimeo.upgrade_action", _v1, (0, _v30.deepSnakeCase)({
      ..._v31.defaultBpEventParams,
      ..._v0
    }))),
    _v35 = {
      configure: (_v0, _v1) => {
        let _v2 = /\.ci\.vimeows.com$/.test(window.location.host) ? "staging" : "vimeo.dev" === window.location.host ? "development" : "production",
          _v3 = new _v29.Event("vimeo.web_global", 5, {
            user: {
              subscription_type: _v0.membership?.type,
              is_mod: _v0.membership?.badge?.type === "staff",
              session_id: null,
              teams: null,
              user_id: _v1 || null,
              vuid: (0, _v32.getVuid)(),
              flags: null,
              is_free_trial: _v0.membership?.subscription?.trial?.status === "free_trial"
            },
            application: {
              application: "vimeo",
              vimeo_language: (0, _v32.getLanguage)() || "en",
              product: "upsell_modal",
              build_environment: _v2,
              version: {
                full: "1.0.0",
                major: "1",
                minor: "0",
                patch: "0"
              }
            },
            platform: {
              device_language: window.navigator.language ? window.navigator.language : "",
              screen: {
                dpi: screen.pixelDepth,
                height: screen.height,
                width: screen.width,
                size: `${screen.width} x ${screen.height}`
              },
              network: null,
              platform: "web"
            }
          }),
          _v4 = new _v29.Configuration("production" === _v2 ? _v29.Service.FRESNEL_PROD : _v29.Service.FRESNEL_DEV, _v3);
        _v29.BigPictureClient.configure(_v4);
      },
      trackImpression: (_v0, _v1 = _v33) => {
        _v34({
          action_type: "impression",
          ..._v0
        }, _v1);
      },
      trackButtonClick: (_v0, _v1 = _v33) => {
        _v34({
          action_type: "click",
          ..._v0
        }, _v1);
      },
      trackDismiss: (_v0, _v1 = _v33) => {
        _v34({
          action_type: "dismiss",
          ..._v0
        }, _v1);
      }
    };
  _v0.s(["default", 0, _v35], 0);
  var _v36 = _v0.i(0);
  let _v37 = _v0 => (0, _v1.jsx)(_v15.Button, {
    "data-testid": "upsell-cta",
    onClick: _v0.onClick,
    as: "a",
    target: "_blank",
    w: "100%",
    href: _v0.link,
    size: "md",
    variant: _v0.variant,
    children: _v0.text
  });
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = _v0 => {
    let _v1 = (0, _v27.useContext)(_v28);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v47.ModalCloseButton, {
        "data-testid": "close-upsell-button",
        margin: _v0?.margin,
        zIndex: 0,
        onClick: () => {
          _v35.trackDismiss({
            ..._v1.params,
            device_type: _v1.device_type
          }, _v1.bpEventVersion), _v1.onClose && _v1.onClose(), _v0.onClose();
        }
      })
    });
  };
  _v0.s(["default", 0, _v48], 0);
  let _v49 = _v0 => {
      let {
          headerText: _v1,
          subHeaderText: _v2,
          body: _v3,
          footer: _v4,
          imgSrc: _v5,
          dataTestId: _v6,
          onClose: _v7
        } = _v0,
        _v8 = (0, _v46.useIsMobile)();
      return (0, _v1.jsxs)(_v39.Modal, {
        isOpen: !0,
        onClose: _v7,
        children: [(0, _v1.jsx)(_v42.ModalOverlay, {}), (0, _v1.jsxs)(_v41.ModalContent, {
          "data-testid": _v6,
          maxW: "fit-content",
          height: (0, _v38.rem)(625),
          children: [(0, _v1.jsx)(_v48, {
            onClose: _v7
          }), (0, _v1.jsx)(_v40.ModalBody, {
            padding: 0,
            children: (0, _v1.jsxs)(_v43.Grid, {
              templateColumns: `${(0, _v38.rem)(320)} 1fr`,
              height: "100%",
              overflow: "hidden",
              children: [(0, _v1.jsxs)(_v5.Flex, {
                padding: "6",
                flexDirection: "column",
                justifyContent: "space-between",
                children: [(0, _v1.jsxs)(_v5.Flex, {
                  gap: (0, _v38.rem)("24"),
                  flexDirection: "column",
                  children: [(0, _v1.jsx)(_v44.Header, {
                    size: "lg",
                    children: void 0 !== _v1 ? _v1 : _v36.default.defaultHeader
                  }), !!_v2 && (0, _v1.jsx)(_v6.Text, {
                    variant: "body-md",
                    children: void 0 !== _v2 ? _v2 : _v36.default.defaultSubHeader
                  }), _v3]
                }), (0, _v1.jsx)(_v4.Box, {
                  children: _v4
                })]
              }), _v5 && !_v8 && (0, _v1.jsx)(_v45.Image, {
                src: _v5,
                alt: "",
                onLoad: () => {
                  window.dispatchEvent(new Event("resize"));
                },
                aspectRatio: "9 / 16",
                maxWidth: (0, _v38.rem)(384),
                height: (0, _v38.rem)(625),
                borderRadius: `0 ${(0, _v38.rem)(20)} ${(0, _v38.rem)(20)} 0`
              })]
            })
          })]
        })]
      });
    },
    _v50 = _v0 => {
      let _v1 = (0, _v27.useContext)(_v28);
      return (0, _v1.jsx)(_v15.Button, {
        "data-testid": "upsell-secondary-cta",
        size: "md",
        variant: "tertiary",
        href: (0, _v32.appendPaywallParams)((0, _v32.appendTrackingQueryParams)(_v0.link, _v1.params), _v1.paywallTracking),
        target: "_blank",
        as: "a",
        onClick: () => {
          _v35.trackButtonClick({
            ..._v1.params,
            copy: _v0.text,
            device_type: _v1.device_type,
            path: window.location.href,
            target: window.location.pathname,
            target_path: _v0.link
          }, _v1.bpEventVersion), _v1.onButtonClick && _v1.onButtonClick({
            copy: _v0.text,
            target_path: (0, _v32.appendTrackingQueryParams)(_v0.link, _v1.params)
          });
        },
        width: "100%",
        children: _v0.text
      });
    },
    _v51 = _v36.default.upgrade;
  _v0.s(["default", 0, _v0 => {
    let _v1 = (0, _v27.useContext)(_v28),
      _v2 = _v0.modalConfig?.primaryCTAText ? _v0.modalConfig.primaryCTAText : _v51,
      _v3 = _v0.modalConfig?.primaryCTALink ? _v0.modalConfig.primaryCTALink : "/upgrade";
    return (0, _v1.jsx)(_v49, {
      dataTestId: "feature-upsell-container",
      headerText: _v0.modalConfig?.headerText,
      subHeaderText: _v0.modalConfig?.subHeaderText,
      imgSrc: _v0.modalConfig?.imgSrc,
      onClose: _v0.onClose,
      body: _v0.modalConfig?.body,
      footer: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v37, {
          text: _v2,
          link: _v3,
          variant: "upsell",
          onClick: () => {
            _v35.trackButtonClick({
              ..._v1.params,
              copy: _v2,
              path: window.location.href,
              target_path: _v3,
              target: window.location.pathname,
              device_type: _v1.device_type
            }, _v1.bpEventVersion), _v1.onButtonClick && _v1.onButtonClick({
              copy: _v2,
              target_path: _v3
            });
          }
        }), _v0.modalConfig?.secondaryCTAText && _v0.modalConfig?.secondaryCTALink && (0, _v1.jsx)(_v50, {
          text: _v0.modalConfig.secondaryCTAText,
          link: _v0.modalConfig.secondaryCTALink
        })]
      })
    });
  }], 0);
}